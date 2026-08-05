from django.apps import AppConfig


class VersatileViewsConfig(AppConfig):
    name = "versatile_views"

    def ready(self):
        from baserow.core.registries import plugin_registry
        from baserow.contrib.builder.elements.registries import element_type_registry

        from .builder_elements.element_types import (
            VersatileCalendarElementType,
            VersatileKanbanElementType,
            VersatileTimelineElementType,
        )
        from .plugins import VersatileViewsPlugin

        plugin_registry.register(VersatileViewsPlugin())
        element_type_registry.register(VersatileKanbanElementType())
        element_type_registry.register(VersatileCalendarElementType())
        element_type_registry.register(VersatileTimelineElementType())
