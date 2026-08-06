from django.urls import re_path

from .rows import CalendarViewRowsView

app_name = "versatile_views.api.views.calendar"

urlpatterns = [
    re_path(r"(?P<view_id>[0-9]+)/$", CalendarViewRowsView.as_view(), name="list"),
]
