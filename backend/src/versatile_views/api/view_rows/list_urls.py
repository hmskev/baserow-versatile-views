from django.urls import re_path

from .rows import ListViewRowsView

app_name = "versatile_views.api.views.list"

urlpatterns = [
    re_path(r"(?P<view_id>[0-9]+)/$", ListViewRowsView.as_view(), name="list"),
]
