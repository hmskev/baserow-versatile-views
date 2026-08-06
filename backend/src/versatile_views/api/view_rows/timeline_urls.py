from django.urls import re_path

from .rows import TimelineViewRowsView

app_name = "versatile_views.api.views.timeline"

urlpatterns = [
    re_path(r"(?P<view_id>[0-9]+)/$", TimelineViewRowsView.as_view(), name="list"),
]
