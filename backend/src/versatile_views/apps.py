from django.apps import AppConfig


class VersatileViewsConfig(AppConfig):
    name = "versatile_views"

    def ready(self):
        from baserow.core.registries import plugin_registry
        from baserow.contrib.builder.elements.registries import element_type_registry
        from baserow.contrib.database.views.registries import view_type_registry

        from .builder_elements.element_types import (
            VersatileCalendarElementType,
            VersatileKanbanElementType,
            VersatileTimelineElementType,
        )
        from .plugins import VersatileViewsPlugin
        from .views.view_types import (
            CalendarViewType,
            KanbanViewType,
            ListViewType,
            TimelineViewType,
        )

        plugin_registry.register(VersatileViewsPlugin())

        # Application Builder page elements.
        element_type_registry.register(VersatileKanbanElementType())
        element_type_registry.register(VersatileCalendarElementType())
        element_type_registry.register(VersatileTimelineElementType())

        # Table view types, shown in the view switcher next to Grid and Gallery.
        view_type_registry.register(KanbanViewType())
        view_type_registry.register(CalendarViewType())
        view_type_registry.register(TimelineViewType())
        view_type_registry.register(ListViewType())
