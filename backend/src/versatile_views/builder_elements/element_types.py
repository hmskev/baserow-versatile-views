from django.utils.translation import gettext_lazy as _

from baserow.contrib.builder.elements.registries import ElementType

from .models import (
    VersatileCalendarElement,
    VersatileKanbanElement,
    VersatileTimelineElement,
)


class _VersatileElementType(ElementType):
    allowed_fields = ["source_table_id", "config"]
    serializer_field_names = ["source_table_id", "config"]


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
