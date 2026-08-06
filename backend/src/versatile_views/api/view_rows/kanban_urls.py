from django.urls import re_path

from .rows import KanbanViewRowsView

app_name = "versatile_views.api.views.kanban"

urlpatterns = [
    re_path(r"(?P<view_id>[0-9]+)/$", KanbanViewRowsView.as_view(), name="list"),
]
