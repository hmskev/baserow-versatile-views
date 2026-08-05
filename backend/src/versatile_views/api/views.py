from __future__ import annotations

from typing import Any

from django.conf import settings
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

from baserow.contrib.database.api.rows.views import RowsView
from baserow.contrib.database.table.handler import TableHandler
from baserow.core.handler import CoreHandler
from baserow.core.registries import operation_type_registry
from baserow.contrib.database.table.operations import ListRowsDatabaseTableOperationType
from baserow.core.exceptions import UserNotInWorkspace
from baserow.contrib.database.table.exceptions import TableDoesNotExist
from baserow.contrib.database.tokens.handler import TokenHandler

from ..core import LayoutConfigError, build_layout


class StatusView(APIView):
    permission_classes = ()

    def get(self, request):
        return Response({
            "plugin": "versatile_views",
            "version": "0.1.0",
            "layouts": ["kanban", "calendar", "timeline"],
            "contract": "POST /api/versatile-views/{layout}/",
        })


class LayoutView(APIView):
    authentication_classes = APIView.authentication_classes + [TokenAuthentication]
    permission_classes = (IsAuthenticated,)
    allowed_layouts = {"kanban", "calendar", "timeline"}

    def post(self, request, layout: str):
        if layout not in self.allowed_layouts:
            return Response({"error": "Unsupported layout"}, status=400)
        payload = request.data if isinstance(request.data, dict) else {}
        try:
            table_id = int(payload["table_id"])
            config = dict(payload.get("config") or {})
            row_query = dict(payload.get("rows") or {})
            table = TableHandler().get_table(table_id)
            CoreHandler().check_permissions(
                request.user,
                ListRowsDatabaseTableOperationType.type,
                workspace=table.database.workspace,
                context=table,
            )
            TokenHandler().check_table_permissions(request, "read", table, False)
            field_ids = self._field_ids(config)
            self._validate_fields(table, field_ids)
            rows = self._read_rows(request, table_id, field_ids, row_query)
            return Response({"table_id": table_id, "page": row_query.get("page", 1),
                             "page_size": row_query.get("size", 200),
                             **build_layout(layout, rows, config)})
        except (KeyError, TypeError, ValueError, LayoutConfigError) as exc:
            return Response({"error": str(exc)}, status=400)
        except (TableDoesNotExist, UserNotInWorkspace):
            return Response({"error": "Table not found or not accessible"}, status=404)

    @staticmethod
    def _field_ids(config: dict[str, Any]) -> list[int]:
        keys = ["display_fields", "group_field", "start_field", "end_field", "label_field", "color_field", "sort_field"]
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
    def _read_rows(request, table_id: int, field_ids: list[int], row_query: dict[str, Any]):
        size = min(max(int(row_query.get("size", 200)), 1), 200)
        page = max(int(row_query.get("page", 1)), 1)
        params = request._request.GET.copy()
        params["page"] = str(page)
        params["size"] = str(size)
        params["include"] = ",".join(str(field_id) for field_id in field_ids)
        params["user_field_names"] = "false"
        if row_query.get("search"):
            params["search"] = str(row_query["search"])
        request._request.GET = params
        response = RowsView.as_view()(request._request, table_id=table_id)
        if hasattr(response, "data"):
            return response.data.get("results", response.data.get("items", []))
        return []
