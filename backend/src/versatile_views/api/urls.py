from django.urls import path

from .views import LayoutView, StatusView
from .comments import CommentView

app_name = "versatile_views.api"

urlpatterns = [
    path("status/", StatusView.as_view(), name="status"),
    path("comments/<int:table_id>/<int:row_id>/", CommentView.as_view(), name="comments"),
    path("<str:layout>/", LayoutView.as_view(), name="layout"),
]
