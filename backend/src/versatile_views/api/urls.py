from django.urls import path

from .views import LayoutView, StatusView

app_name = "versatile_views.api"

urlpatterns = [
    path("status/", StatusView.as_view(), name="status"),
    path("<str:layout>/", LayoutView.as_view(), name="layout"),
]
