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
