from __future__ import annotations

from typing import Any

from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView

from baserow.contrib.database.table.handler import TableHandler
from baserow.contrib.database.table.operations import ListRowsDatabaseTableOperationType
from baserow.core.exceptions import UserNotInWorkspace
from baserow.core.handler import CoreHandler
from baserow.contrib.database.tokens.handler import TokenHandler

from ..builder_elements.models import VersatileComment
from .views import LayoutView


class CommentView(APIView):
    """Read and create comments for a published/private Versatile View card."""

    authentication_classes = APIView.authentication_classes + [TokenAuthentication]
    permission_classes = (AllowAny,)

    def get(self, request, table_id: int, row_id: int):
        user = self._authorized_user(request, table_id, row_id)
        if isinstance(user, Response):
            return user
        comments = VersatileComment.objects.filter(table_id=table_id, row_id=row_id).select_related("user")
        return Response({"results": [self._serialize(comment) for comment in comments]})

    def post(self, request, table_id: int, row_id: int):
        user = self._authorized_user(request, table_id, row_id)
        if isinstance(user, Response):
            return user
        payload = request.data if isinstance(request.data, dict) else {}
        message = str(payload.get("message", "")).strip()
        if not message:
            return Response({"error": "Comment message is required."}, status=400)
        if len(message) > 5000:
            return Response({"error": "Comment message cannot exceed 5000 characters."}, status=400)

        is_authenticated = bool(getattr(user, "is_authenticated", False))
        author_name = self._display_name(user) if is_authenticated else str(payload.get("author_name", "Guest")).strip()
        if not author_name:
            author_name = "Guest"
        comment = VersatileComment.objects.create(
            table_id=table_id,
            row_id=row_id,
            user=user if is_authenticated else None,
            author_name=author_name[:255],
            message=message,
        )
        return Response(self._serialize(comment), status=201)

    @staticmethod
    def _display_name(user) -> str:
        full_name = user.get_full_name()
        return full_name or getattr(user, "email", "User") or "User"

    @staticmethod
    def _serialize(comment: VersatileComment) -> dict[str, Any]:
        author_name = comment.author_name or (CommentView._display_name(comment.user) if comment.user else "Guest")
        return {
            "id": comment.id,
            "message": comment.message,
            "created_on": comment.created_on,
            "user": {"name": author_name},
        }

    @staticmethod
    def _authorized_user(request, table_id: int, row_id: int):
        try:
            table = TableHandler().get_table(table_id)
            public_user = LayoutView._get_public_user(request, table_id)
            request_user = getattr(request, "user", None)
            is_authenticated = bool(getattr(request_user, "is_authenticated", False))
            user = public_user or (request_user if is_authenticated else None)
            if user is None:
                return Response({"error": "Authentication is required."}, status=401)

            CoreHandler().check_permissions(
                user,
                ListRowsDatabaseTableOperationType.type,
                workspace=table.database.workspace,
                context=table,
            )
            if public_user is None:
                TokenHandler().check_table_permissions(request, "read", table, False)
            if not table.get_model().objects.filter(id=row_id).exists():
                return Response({"error": "Row not found."}, status=404)
            return user
        except UserNotInWorkspace:
            return Response({"error": "Table not found or not accessible."}, status=404)
        except Exception:
            return Response({"error": "Table or row not found."}, status=404)
