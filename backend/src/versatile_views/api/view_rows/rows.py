"""Row listing endpoints for the Haven Media Solutions view types.

Baserow serves rows per view type, so each of our view types needs an endpoint. The
work is identical for all of them apart from the model and the field options
serializer, so it lives in one generic view here rather than being copied four times.

The permission and query handling follows Baserow's open-core Gallery endpoint so that
filters, sorts, search, ad hoc filters and hidden fields behave exactly as they do
everywhere else in the product.
"""

from rest_framework.request import Request
from rest_framework.response import Response
from rest_framework.pagination import LimitOffsetPagination
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView

from baserow.api.decorators import (
    allowed_includes,
    map_exceptions,
    validate_query_parameters,
)
from baserow.api.errors import ERROR_USER_NOT_IN_GROUP
from baserow.api.search.serializers import SearchQueryParamSerializer
from baserow.contrib.database.api.constants import ONLY_COUNT_API_PARAM
from baserow.contrib.database.api.fields.errors import (
    ERROR_FILTER_FIELD_NOT_FOUND,
    ERROR_ORDER_BY_FIELD_NOT_FOUND,
    ERROR_ORDER_BY_FIELD_NOT_POSSIBLE,
)
from baserow.contrib.database.api.rows.serializers import (
    RowSerializer,
    get_row_serializer_class,
)
from baserow.contrib.database.api.views.errors import (
    ERROR_VIEW_DOES_NOT_EXIST,
    ERROR_VIEW_FILTER_TYPE_DOES_NOT_EXIST,
    ERROR_VIEW_FILTER_TYPE_UNSUPPORTED_FIELD,
)
from baserow.contrib.database.api.views.utils import (
    get_hidden_field_ids_for_view_user,
    parse_limit_linked_items_params,
)
from baserow.contrib.database.fields.exceptions import (
    FilterFieldNotFound,
    OrderByFieldNotFound,
    OrderByFieldNotPossible,
)
from baserow.contrib.database.table.operations import ListRowsDatabaseTableOperationType
from baserow.contrib.database.views.exceptions import (
    ViewDoesNotExist,
    ViewFilterTypeDoesNotExist,
    ViewFilterTypeNotAllowedForField,
)
from baserow.contrib.database.views.filters import AdHocFilters
from baserow.contrib.database.views.handler import ViewHandler
from baserow.contrib.database.views.operations import ListViewRowsOperationType
from baserow.contrib.database.views.registries import view_type_registry
from baserow.contrib.database.views.utils import check_permissions_with_view_fallback
from baserow.core.exceptions import UserNotInWorkspace

from ...views.models import HmsCalendarView, HmsKanbanView, HmsListView, HmsTimelineView


class CardViewLimitOffsetPagination(LimitOffsetPagination):
    default_limit = 100


class CardViewRowsView(APIView):
    """Lists the rows of one of our card-style views.

    Subclasses set `view_model`. Everything else is shared.
    """

    permission_classes = (IsAuthenticated,)
    view_model = None

    @map_exceptions(
        {
            UserNotInWorkspace: ERROR_USER_NOT_IN_GROUP,
            ViewDoesNotExist: ERROR_VIEW_DOES_NOT_EXIST,
            FilterFieldNotFound: ERROR_FILTER_FIELD_NOT_FOUND,
            ViewFilterTypeDoesNotExist: ERROR_VIEW_FILTER_TYPE_DOES_NOT_EXIST,
            ViewFilterTypeNotAllowedForField: ERROR_VIEW_FILTER_TYPE_UNSUPPORTED_FIELD,
            OrderByFieldNotFound: ERROR_ORDER_BY_FIELD_NOT_FOUND,
            OrderByFieldNotPossible: ERROR_ORDER_BY_FIELD_NOT_POSSIBLE,
        }
    )
    @allowed_includes("field_options")
    @validate_query_parameters(SearchQueryParamSerializer, return_validated=True)
    def get(
        self,
        request: Request,
        view_id: int,
        field_options: bool,
        query_params,
    ):
        adhoc_filters = AdHocFilters.from_request(request)
        order_by = request.GET.get("order_by")

        view_handler = ViewHandler()
        view = view_handler.get_view_as_user(
            request.user,
            view_id,
            self.view_model,
            base_queryset=self.view_model.objects.prefetch_related("viewsort_set"),
        )
        view_type = view_type_registry.get_by_model(view)

        check_permissions_with_view_fallback(
            ListRowsDatabaseTableOperationType.type,
            ListViewRowsOperationType.type,
            request.user,
            view.table,
            view,
        )

        search = query_params.get("search")
        search_mode = query_params.get("search_mode")

        model = view.table.get_model()
        hidden_field_ids = get_hidden_field_ids_for_view_user(request.user, view)

        # Searching must not leak the contents of fields the user cannot see.
        only_search_by_field_ids = None
        if hidden_field_ids:
            only_search_by_field_ids = [
                field_id
                for field_id in model._field_objects.keys()
                if field_id not in hidden_field_ids
            ]

        queryset = view_handler.get_queryset(
            request.user,
            view,
            search,
            model,
            search_mode=search_mode,
            apply_sorts=order_by is None,
            apply_filters=not adhoc_filters.has_any_filters,
            only_search_by_field_ids=only_search_by_field_ids,
        )

        if adhoc_filters.has_any_filters:
            queryset = adhoc_filters.apply_to_queryset(model, queryset)
        if order_by is not None:
            queryset = queryset.order_by_fields_string(order_by, False)

        if ONLY_COUNT_API_PARAM.name in request.GET:
            return Response({"count": queryset.count()})

        paginator = CardViewLimitOffsetPagination()
        page = paginator.paginate_queryset(queryset, request, self)

        serializer_class = get_row_serializer_class(
            model,
            RowSerializer,
            is_response=True,
            exclude_field_ids=hidden_field_ids,
            extra_kwargs={
                "limit_linked_items": parse_limit_linked_items_params(request)
            },
        )
        response = paginator.get_paginated_response(
            serializer_class(page, many=True).data
        )

        if field_options:
            context = {"fields": [o["field"] for o in model._field_objects.values()]}
            field_options_serializer = view_type.get_field_options_serializer_class(
                create_if_missing=True
            )
            response.data.update(
                **field_options_serializer(view, context=context).data
            )

        return response


class KanbanViewRowsView(CardViewRowsView):
    view_model = HmsKanbanView


class CalendarViewRowsView(CardViewRowsView):
    view_model = HmsCalendarView


class TimelineViewRowsView(CardViewRowsView):
    view_model = HmsTimelineView


class ListViewRowsView(CardViewRowsView):
    view_model = HmsListView
