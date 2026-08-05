from django.urls import include, path

from baserow.core.registries import Plugin

from .api import urls as api_urls


class VersatileViewsPlugin(Plugin):
    type = "versatile_views"

    def get_api_urls(self):
        return [
            path("versatile-views/", include(api_urls, namespace=self.type)),
        ]
