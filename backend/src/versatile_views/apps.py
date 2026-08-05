from django.apps import AppConfig


class VersatileViewsConfig(AppConfig):
    name = "versatile_views"

    def ready(self):
        from .plugins import VersatileViewsPlugin
        from baserow.core.registries import plugin_registry

        plugin_registry.register(VersatileViewsPlugin())
