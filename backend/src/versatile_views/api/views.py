from __future__ import annotations

from typing import Any
from urllib.parse import urlparse

from django.conf import settings
from django.test import RequestFactory
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

from baserow.contrib.database.api.rows.views import RowsView
from baserow.contrib.database.table.handler import TableHandler
from baserow.core.handler import CoreHandler
from baserow.core.registries import operation_type_registry
from baserow.contrib.database.table.operations import ListRowsDatabaseTableOperationType
from baserow.contrib.database.fields.registries import field_type_registry
from baserow.core.exceptions import UserNotInWorkspace
from baserow.contrib.database.table.exceptions import TableDoesNotExist
from baserow.contrib.database.tokens.handler import TokenHandler
from baserow.contrib.builder.domains.models import Domain
from baserow.contrib.builder.elements.models import Element
from baserow.core.models import User

from ..core import LayoutConfigError, build_layout


class StatusView(APIView):
    permission_classes = ()

    def get(self, request):
        return Response({
            "plugin": "versatile_views",
            "version": "0.5.0",
            "layouts": ["kanban", "calendar", "timeline", "gallery"],
            "contract": "POST /api/versatile-views/{layout}/",
        })


class LayoutView(APIView):
    authentication_classes = APIView.authentication_classes + [TokenAuthentication]
    permission_classes = (AllowAny,)
    allowed_layouts = {"kanban", "calendar", "timeline", "gallery"}

    def post(self, request, layout: str):
        if layout not in self.allowed_layouts:
            return Response({"error": "Unsupported layout"}, status=400)
        payload = request.data if isinstance(request.data, dict) else {}
        try:
            table_id = int(payload["table_id"])
            config = dict(payload.get("config") or {})
            row_query = dict(payload.get("rows") or {})
            table = TableHandler().get_table(table_id)
            public_user = self._get_public_user(request, table_id)
            effective_user = public_user or request.user
            CoreHandler().check_permissions(
                effective_user,
                ListRowsDatabaseTableOperationType.type,
                workspace=table.database.workspace,
                context=table,
            )
            if not public_user:
                TokenHandler().check_table_permissions(request, "read", table, False)
            field_ids = self._field_ids(config)
            self._validate_fields(table, field_ids)
            rows = self._read_rows(request, table_id, field_ids, row_query, effective_user)
            return Response({"table_id": table_id, "page": row_query.get("page", 1),
                             "page_size": row_query.get("size", 200),
                             "fields": self._field_definitions(table, field_ids),
                             **build_layout(layout, rows, config)})
        except (KeyError, TypeError, ValueError, LayoutConfigError) as exc:
            return Response({"error": str(exc)}, status=400)
        except (TableDoesNotExist, UserNotInWorkspace):
            return Response({"error": "Table not found or not accessible"}, status=404)

    @staticmethod
    def _get_public_user(request, table_id: int):
        """Return a workspace admin only for a published Builder-origin request.

        Published Builder apps run on a separate hostname and cannot carry the
        private Baserow session cookie. Restricting this branch to a published
        domain and a table used by that domain's published versatile-view element
        keeps the public surface read-only and scoped to the published app.
        """
        origin = request.headers.get("Origin", "")
        if not origin:
            origin = request.headers.get("Referer", "")
        parsed_origin = urlparse(origin)
        if parsed_origin.scheme != "https" or not parsed_origin.netloc:
            return None
        domain_name = parsed_origin.netloc.lower()
        try:
            domain = Domain.objects.select_related("builder").get(
                domain_name=domain_name, published_to__isnull=False
            )
        except Domain.DoesNotExist:
            return None

        published_builder_id = domain.published_to_id
        source_element_types = Element.objects.filter(
            page__builder_id=published_builder_id,
            content_type__app_label="versatile_views",
        )
        element_ids = set(
            source_element_types.values_list("id", flat=True)
        )
        from ..builder_elements.models import (
            VersatileCalendarElement,
            VersatileKanbanElement,
            VersatileTimelineElement,
        )

        element_models = (
            VersatileKanbanElement,
            VersatileCalendarElement,
            VersatileTimelineElement,
            VersatileGalleryElement,
        )
        if not any(
            model.objects.filter(id__in=element_ids, source_table_id=table_id).exists()
            for model in element_models
        ):
            return None

        admin_user_id = (
            domain.builder.workspace.workspaceuser_set.filter(permissions="ADMIN")
            .order_by("id")
            .values_list("user_id", flat=True)
            .first()
        )
        return User.objects.filter(id=admin_user_id, is_active=True).first()

    @staticmethod
    def _field_ids(config: dict[str, Any]) -> list[int]:
        keys = ["display_fields", "group_field", "start_field", "end_field", "label_field", "color_field", "image_field", "sort_field"]
        values: list[int] = []
        for key in keys:
            value = config.get(key)
            if isinstance(value, list):
                values.extend(int(item) for item in value)
            elif value is not None:
                values.append(int(value))
        if not values:
            raise LayoutConfigError("At least one field must be configured")
        return list(dict.fromkeys(values))

    @staticmethod
    def _validate_fields(table, field_ids: list[int]):
        actual = set(table.field_set.values_list("id", flat=True))
        missing = sorted(set(field_ids) - actual)
        if missing:
            raise LayoutConfigError(f"Unknown field IDs: {missing}")

    @staticmethod
    def _field_definitions(table, field_ids: list[int]) -> list[dict[str, Any]]:
        fields = table.field_set.filter(id__in=field_ids).prefetch_related("select_options")
        definitions = []
        for field in fields:
            field_type = field_type_registry.get_by_model(field.specific_class).type
            options = []
            if field_type in {"single_select", "multiple_select"}:
                options = [
                    {"id": option.id, "value": option.value, "color": option.color}
                    for option in field.select_options.all()
                ]
            definitions.append({
                "id": field.id,
                "name": field.name,
                "type": field_type,
                "primary": bool(field.primary),
                "read_only": bool(getattr(field, "read_only", False)),
                "options": options,
            })
        return sorted(definitions, key=lambda item: item["id"])

    @staticmethod
    def _read_rows(request, table_id: int, field_ids: list[int], row_query: dict[str, Any], user):
        size = min(max(int(row_query.get("size", 200)), 1), 200)
        page = max(int(row_query.get("page", 1)), 1)
        params = request._request.GET.copy()
        params["page"] = str(page)
        params["size"] = str(size)
        params["include"] = ",".join(str(field_id) for field_id in field_ids)
        params["user_field_names"] = "false"
        if row_query.get("search"):
            params["search"] = str(row_query["search"])
        nested_request = RequestFactory().get(
            request._request.path,
            data=params,
        )
        nested_request.user = user
        nested_request._force_auth_user = user
        nested_request.auth = getattr(request, "auth", None)
        class _PublishedRowsView(RowsView):
            authentication_classes = ()
            permission_classes = ()

        from unittest.mock import patch

        with patch.object(TokenHandler, "check_table_permissions", return_value=None):
            response = _PublishedRowsView.as_view()(nested_request, table_id=table_id)
        if hasattr(response, "data"):
            return response.data.get("results", response.data.get("items", []))
        return []
