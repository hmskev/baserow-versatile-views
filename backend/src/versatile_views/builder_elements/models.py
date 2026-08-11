from django.conf import settings
from django.db import models

from baserow.contrib.builder.elements.models import Element


class VersatileViewElementFields(models.Model):
    """Shared persisted configuration for each Versatile View element."""

    source_table_id = models.BigIntegerField(null=True, blank=True)
    config = models.JSONField(default=dict, blank=True)

    class Meta:
        abstract = True


class VersatileKanbanElement(Element, VersatileViewElementFields):
    class Meta:
        verbose_name = "Versatile Kanban element"


class VersatileCalendarElement(Element, VersatileViewElementFields):
    class Meta:
        verbose_name = "Versatile Calendar element"


class VersatileTimelineElement(Element, VersatileViewElementFields):
    class Meta:
        verbose_name = "Versatile Timeline element"


class VersatileGalleryElement(Element, VersatileViewElementFields):
    class Meta:
        verbose_name = "Versatile Gallery element"


class VersatileComment(models.Model):
    """Comments stored by the plugin for published/private view cards."""

    table_id = models.BigIntegerField()
    row_id = models.BigIntegerField()
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        null=True,
        blank=True,
        on_delete=models.SET_NULL,
        related_name="versatile_view_comments",
    )
    author_name = models.CharField(max_length=255, blank=True)
    message = models.TextField()
    created_on = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ("created_on", "id")
        indexes = [models.Index(fields=("table_id", "row_id"))]
