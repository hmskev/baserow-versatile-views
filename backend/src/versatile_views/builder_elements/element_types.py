from django.utils.translation import gettext_lazy as _

from baserow.contrib.builder.elements.element_types import HeadingElementType
from baserow.contrib.builder.elements.registries import ElementType

from .models import (
    VersatileCalendarElement,
    VersatileKanbanElement,
    VersatileTimelineElement,
)


class _VersatileElementType(ElementType):
    # Baserow 2.3.3 uses this nested TypedDict while exporting Builder apps for
    # publication. Reuse the release's common element schema and add our fields.
    class SerializedDict(HeadingElementType.SerializedDict):
        source_table_id: int | None
        config: dict

    allowed_fields = ["source_table_id", "config"]
    serializer_field_names = ["source_table_id", "config"]

    def get_pytest_params(self, pytest_data_fixture):
        # Baserow 2.3.3 requires every builder element type to provide this
        # abstract hook. These elements have no related fixture parameters.
        return {}


class VersatileKanbanElementType(_VersatileElementType):
    type = "versatile_kanban"
    model_class = VersatileKanbanElement
    display_name = _("Versatile Kanban")


class VersatileCalendarElementType(_VersatileElementType):
    type = "versatile_calendar"
    model_class = VersatileCalendarElement
    display_name = _("Versatile Calendar")


class VersatileTimelineElementType(_VersatileElementType):
    type = "versatile_timeline"
    model_class = VersatileTimelineElement
    display_name = _("Versatile Timeline")
