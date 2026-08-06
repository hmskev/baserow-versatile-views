"""View type registrations for the Haven Media Solutions view types.

These are written against Baserow's public `ViewType` registry. No code is taken from
Baserow's premium edition, which ships under a proprietary licence.

Almost all of the behaviour a card-style view needs is identical between view types:
serialising field options, remapping foreign keys on import, hiding fields, clearing a
field reference when the referenced field is deleted or changes type. `CardViewType`
implements that once and each concrete view type declares only what differs.
"""

from typing import Any, Dict, List, Optional, Set

from django.core.files.storage import Storage
from django.db.models import Q
from django.urls import include, path
from django.utils.translation import gettext_lazy as _
from rest_framework import serializers
from zipfile import ZipFile

from baserow.contrib.database.api.fields.errors import (
    ERROR_FIELD_NOT_IN_TABLE,
    ERROR_INCOMPATIBLE_FIELD,
)
from baserow.contrib.database.fields.exceptions import (
    FieldNotInTable,
    IncompatibleField,
)
from baserow.contrib.database.fields.models import Field, SingleSelectField
from baserow.contrib.database.fields.registries import field_type_registry
from baserow.contrib.database.table.models import Table
from baserow.contrib.database.views.models import View
from baserow.contrib.database.views.registries import ViewType
from baserow.core.registries import ImportExportConfig
from baserow.core.storage import ExportZipFile

from .models import (
    HmsCalendarView,
    HmsCalendarViewFieldOptions,
    HmsKanbanView,
    HmsKanbanViewFieldOptions,
    HmsListView,
    HmsListViewFieldOptions,
    HmsTimelineView,
    HmsTimelineViewFieldOptions,
)
from .serializers import (
    CalendarViewFieldOptionsSerializer,
    KanbanViewFieldOptionsSerializer,
    ListViewFieldOptionsSerializer,
    TimelineViewFieldOptionsSerializer,
)

# How many fields a newly created view shows on its cards before the user chooses.
DEFAULT_VISIBLE_FIELD_COUNT = 3


def _field_related_serializer(help_text: str) -> serializers.PrimaryKeyRelatedField:
    return serializers.PrimaryKeyRelatedField(
        queryset=Field.objects.all(),
        required=False,
        default=None,
        allow_null=True,
        help_text=help_text,
    )


class CardViewType(ViewType):
    """Shared behaviour for every view type that renders records as cards.

    Subclasses declare:
      `field_reference_fields`  - view attributes that point at a Field, mapped to the
                                  kind of field allowed there ("date", "file",
                                  "single_select" or None for any field).
      `field_options_model_class` / `field_options_serializer_class` - as usual.
    """

    can_filter = True
    can_sort = True
    can_share = True
    can_decorate = True
    has_public_info = True
    field_options_allowed_fields = ["hidden", "order"]

    api_exceptions_map = {
        FieldNotInTable: ERROR_FIELD_NOT_IN_TABLE,
        IncompatibleField: ERROR_INCOMPATIBLE_FIELD,
    }

    # Overridden by each concrete view type.
    field_reference_fields: Dict[str, Optional[str]] = {}
    # The attribute holding the cover image field, if the view type has one. It stays
    # visible on the card even when its field option says hidden.
    cover_image_attribute: Optional[str] = "card_cover_image_field"

    # -- helpers ------------------------------------------------------------------

    @property
    def field_options_related_name(self) -> str:
        """The reverse accessor Django generates for this view's field options."""

        return f"{self.field_options_model_class.__name__.lower()}_set"

    # The name of the ForeignKey on the field options model pointing back at the view.
    # Declared explicitly rather than derived from the model name, because the model
    # classes carry an Hms prefix to avoid clashing with Baserow's premium models
    # while the foreign keys do not.
    view_fk_attribute: str = ""

    def _check_field_compatible(self, field: Field, expected: Optional[str], name: str):
        specific = field.specific
        field_type = field_type_registry.get_by_model(specific)

        if expected == "date" and not field_type.can_represent_date(specific):
            raise IncompatibleField(
                f"The field provided for {name} cannot represent a date."
            )
        if expected == "file" and not field_type.can_represent_files(specific):
            raise IncompatibleField(
                f"The field provided for {name} cannot represent files."
            )
        if expected == "single_select" and not isinstance(specific, SingleSelectField):
            raise IncompatibleField(
                f"The field provided for {name} must be a single select field."
            )

    # -- creation and validation --------------------------------------------------

    def prepare_values(self, values, table, user):
        """Resolve field references and reject ones that do not fit the view."""

        for name, expected in self.field_reference_fields.items():
            if values.get(name, None) is None:
                continue

            if isinstance(values[name], int):
                values[name] = Field.objects.get(pk=values[name])

            field = values[name]
            if field.table_id != table.id:
                raise FieldNotInTable(
                    f"The field provided for {name} does not belong to the view's "
                    f"table."
                )
            self._check_field_compatible(field, expected, name)

        return super().prepare_values(values, table, user)

    def view_created(self, view):
        """Show the primary field and the next few fields on a brand new view."""

        field_options = view.get_field_options(create_if_missing=True).order_by(
            "-field__primary", "field__id"
        )
        ids_to_update = [f.id for f in field_options[0:DEFAULT_VISIBLE_FIELD_COUNT]]

        if ids_to_update:
            self.field_options_model_class.objects.filter(id__in=ids_to_update).update(
                hidden=False
            )

    def export_prepared_values(self, view: View) -> Dict[str, Any]:
        values = super().export_prepared_values(view)
        for name in self.field_reference_fields:
            values[name] = getattr(view, f"{name}_id")
        return values

    # -- import and export --------------------------------------------------------

    def export_serialized(
        self,
        view: View,
        import_export_config: ImportExportConfig,
        cache: Dict,
        files_zip: Optional[ExportZipFile] = None,
        storage: Optional[Storage] = None,
    ):
        serialized = super().export_serialized(
            view, import_export_config, cache, files_zip, storage
        )

        for name in self.field_reference_fields:
            field_id = getattr(view, f"{name}_id")
            if field_id:
                serialized[f"{name}_id"] = field_id

        serialized["field_options"] = [
            {
                "id": field_option.id,
                "field_id": field_option.field_id,
                "hidden": field_option.hidden,
                "order": field_option.order,
            }
            for field_option in view.get_field_options()
        ]
        return serialized

    def import_serialized(
        self,
        table: Table,
        serialized_values: Dict[str, Any],
        import_export_config: ImportExportConfig,
        id_mapping: Dict[str, Any],
        cache: Dict,
        files_zip: Optional[ZipFile] = None,
        storage: Optional[Storage] = None,
    ) -> Optional[View]:
        serialized_copy = serialized_values.copy()

        # Field ids differ in the destination table, so remap every reference.
        for name in self.field_reference_fields:
            key = f"{name}_id"
            if serialized_copy.get(key, None):
                serialized_copy[key] = id_mapping["database_fields"][
                    serialized_copy[key]
                ]

        field_options = serialized_copy.pop("field_options", [])

        view = super().import_serialized(
            table,
            serialized_copy,
            import_export_config,
            id_mapping,
            cache,
            files_zip,
            storage,
        )

        if view is not None:
            mapping_key = f"database_{self.type}_view_field_options"
            if mapping_key not in id_mapping:
                id_mapping[mapping_key] = {}

            for field_option in field_options:
                field_option_copy = field_option.copy()
                original_id = field_option_copy.pop("id")
                field_option_copy["field_id"] = id_mapping["database_fields"][
                    field_option["field_id"]
                ]
                created = self.field_options_model_class.objects.create(
                    **{self.view_fk_attribute: view}, **field_option_copy
                )
                id_mapping[mapping_key][original_id] = created.id

        return view

    # -- field visibility ---------------------------------------------------------

    def get_visible_field_options_in_order(self, view: View):
        cover_id = (
            getattr(view, f"{self.cover_image_attribute}_id", None)
            if self.cover_image_attribute
            else None
        )
        visible = Q(hidden=False)
        if cover_id:
            visible |= Q(field__id=cover_id)

        return (
            view.get_field_options(create_if_missing=True)
            .filter(visible)
            .order_by("order", "field__id")
        )

    def get_hidden_fields(
        self,
        view: View,
        field_ids_to_check: Optional[List[int]] = None,
    ) -> Set[int]:
        hidden_field_ids = set()
        fields = view.table.field_set.all()
        field_options = getattr(view, self.field_options_related_name).all()

        if field_ids_to_check is not None:
            fields = [f for f in fields if f.id in field_ids_to_check]

        # Fields the view needs in order to place a record at all are never hidden;
        # the frontend would otherwise have nothing to position the card with.
        always_visible = {
            getattr(view, f"{name}_id")
            for name in self.field_reference_fields
            if getattr(view, f"{name}_id")
        }

        options_by_field_id = {
            field_option.field_id: field_option for field_option in field_options
        }

        for field in fields:
            if field.id in always_visible:
                continue

            field_option = options_by_field_id.get(field.id)
            # No field option yet means the field has never been shown.
            if field_option is None or field_option.hidden:
                hidden_field_ids.add(field.id)

        return hidden_field_ids

    def enhance_queryset(self, queryset, prefetch_field_options=True):
        if prefetch_field_options:
            queryset = queryset.prefetch_related(self.field_options_related_name)
        return queryset

    # -- reacting to field changes ------------------------------------------------

    def _clear_references_to(self, fields: List[Field]):
        """Drop references to fields that can no longer serve their role."""

        for name, expected in self.field_reference_fields.items():
            incompatible_ids = []
            for field in fields:
                try:
                    self._check_field_compatible(field, expected, name)
                except IncompatibleField:
                    incompatible_ids.append(field.id)

            if incompatible_ids:
                self.model_class.objects.filter(
                    **{f"{name}_id__in": incompatible_ids}
                ).update(**{f"{name}_id": None})

    def after_fields_type_change(self, fields):
        self._clear_references_to(fields)

    def after_field_delete(self, field: Field) -> None:
        for name in self.field_reference_fields:
            self.model_class.objects.filter(**{f"{name}_id": field.id}).update(
                **{f"{name}_id": None}
            )


class KanbanViewType(CardViewType):
    type = "hms_kanban"
    model_class = HmsKanbanView
    field_options_model_class = HmsKanbanViewFieldOptions
    field_options_serializer_class = KanbanViewFieldOptionsSerializer
    view_fk_attribute = "kanban_view"

    field_reference_fields = {
        "single_select_field": "single_select",
        "card_cover_image_field": "file",
    }

    allowed_fields = ["single_select_field", "card_cover_image_field"]
    serializer_field_names = ["single_select_field", "card_cover_image_field"]
    serializer_field_overrides = {
        "single_select_field": _field_related_serializer(
            "The single select field that records are stacked by."
        ),
        "card_cover_image_field": _field_related_serializer(
            "A file field whose first image is shown as the card cover."
        ),
    }

    def get_api_urls(self):
        from ..api.view_rows import kanban_urls

        return [path("hms-kanban/", include(kanban_urls, namespace=self.type))]


# Each view type exposes its own row listing endpoint under
# /api/database/views/<slug>/<view_id>/, matching how Baserow serves grid and gallery
# rows. The url module is imported lazily so Django app loading stays in order.


class CalendarViewType(CardViewType):
    type = "hms_calendar"
    model_class = HmsCalendarView
    field_options_model_class = HmsCalendarViewFieldOptions
    field_options_serializer_class = CalendarViewFieldOptionsSerializer
    view_fk_attribute = "calendar_view"

    field_reference_fields = {
        "date_field": "date",
        "card_cover_image_field": "file",
    }

    allowed_fields = ["date_field", "card_cover_image_field"]
    serializer_field_names = ["date_field", "card_cover_image_field"]
    serializer_field_overrides = {
        "date_field": _field_related_serializer(
            "The date field that positions a record on the calendar."
        ),
        "card_cover_image_field": _field_related_serializer(
            "A file field whose first image is shown as the card cover."
        ),
    }

    def get_api_urls(self):
        from ..api.view_rows import calendar_urls

        return [path("hms-calendar/", include(calendar_urls, namespace=self.type))]


class TimelineViewType(CardViewType):
    type = "hms_timeline"
    model_class = HmsTimelineView
    field_options_model_class = HmsTimelineViewFieldOptions
    field_options_serializer_class = TimelineViewFieldOptionsSerializer
    view_fk_attribute = "timeline_view"

    field_reference_fields = {
        "start_date_field": "date",
        "end_date_field": "date",
        "group_by_field": None,
        "card_cover_image_field": "file",
    }

    allowed_fields = [
        "start_date_field",
        "end_date_field",
        "group_by_field",
        "card_cover_image_field",
    ]
    serializer_field_names = allowed_fields
    serializer_field_overrides = {
        "start_date_field": _field_related_serializer(
            "The date field where a record's bar starts."
        ),
        "end_date_field": _field_related_serializer(
            "The date field where a record's bar ends."
        ),
        "group_by_field": _field_related_serializer(
            "An optional field that splits the timeline into swimlanes."
        ),
        "card_cover_image_field": _field_related_serializer(
            "A file field whose first image is shown as the card cover."
        ),
    }

    def get_api_urls(self):
        from ..api.view_rows import timeline_urls

        return [path("hms-timeline/", include(timeline_urls, namespace=self.type))]


class ListViewType(CardViewType):
    type = "hms_list"
    model_class = HmsListView
    field_options_model_class = HmsListViewFieldOptions
    field_options_serializer_class = ListViewFieldOptionsSerializer
    view_fk_attribute = "list_view"

    field_reference_fields = {
        "group_by_field": None,
        "card_cover_image_field": "file",
    }

    allowed_fields = ["group_by_field", "card_cover_image_field"]
    serializer_field_names = allowed_fields
    serializer_field_overrides = {
        "group_by_field": _field_related_serializer(
            "An optional field that splits the list into sections."
        ),
        "card_cover_image_field": _field_related_serializer(
            "A file field whose first image is shown as the row thumbnail."
        ),
    }

    def get_api_urls(self):
        from ..api.view_rows import list_urls

        return [path("hms-list/", include(list_urls, namespace=self.type))]
