from typing import Any, TypedDict

from django.utils.translation import gettext_lazy as _

from baserow.contrib.builder.elements.registries import ElementType

from .models import (
    VersatileCalendarElement,
    VersatileKanbanElement,
    VersatileTimelineElement,
    VersatileGalleryElement,
)


class _VersatileElementType(ElementType):
    # Baserow 2.3.3 uses this TypedDict while exporting Builder apps for
    # publication. Keep it limited to fields present on our element models.
    class SerializedDict(TypedDict):
        id: int
        type: str
        css_classes: str
        visibility: str
        visibility_condition: Any
        role_type: str
        roles: list
        styles: dict
        style_border_top_color: str
        style_border_top_size: int
        style_padding_top: int
        style_margin_top: int
        style_border_bottom_color: str
        style_border_bottom_size: int
        style_padding_bottom: int
        style_margin_bottom: int
        style_border_left_color: str
        style_border_left_size: int
        style_padding_left: int
        style_margin_left: int
        style_border_right_color: str
        style_border_right_size: int
        style_padding_right: int
        style_margin_right: int
        style_background_radius: int
        style_border_radius: int
        style_background: str
        style_background_color: str
        style_background_file_id: str
        style_background_mode: str
        style_width: str
        style_width_child: str
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


class VersatileGalleryElementType(_VersatileElementType):
    type = "versatile_gallery"
    model_class = VersatileGalleryElement
    display_name = _("Versatile Gallery")
