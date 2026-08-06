"""Database models for the Haven Media Solutions view types.

Each view type gets a `View` subclass holding its own settings, plus a field options
through-model that stores per-field display state (visible or hidden, and card order).
This mirrors the structure Baserow's open-core Gallery view uses.

These are independent implementations written against Baserow's public view registry.
No code is taken from Baserow's premium edition, which is under a proprietary licence.
"""

from django.db import models
from django.db.models import Q

from baserow.core.mixins import HierarchicalModelMixin
from baserow.contrib.database.fields.models import Field
from baserow.contrib.database.views.models import View

# A newly created field must always sort last, so the default is the largest value a
# small integer field can hold. Baserow's own field options use the same convention.
FIELD_OPTION_LAST = 32767


class CardFieldOptionsBase(HierarchicalModelMixin, models.Model):
    """Per-field display state shared by every card-style view."""

    field = models.ForeignKey(Field, on_delete=models.CASCADE)
    hidden = models.BooleanField(
        default=True,
        help_text="Whether the field should be hidden on the card.",
    )
    order = models.SmallIntegerField(
        default=FIELD_OPTION_LAST,
        help_text="The order the field has on the card. A lower value comes first.",
    )

    class Meta:
        abstract = True
        ordering = ("order", "field_id")


class HmsKanbanView(View):
    """Records grouped into stacks by the value of a single select field."""

    field_options = models.ManyToManyField(Field, through="HmsKanbanViewFieldOptions")
    single_select_field = models.ForeignKey(
        Field,
        on_delete=models.SET_NULL,
        related_name="hms_kanban_view_single_select_field",
        blank=True,
        null=True,
        help_text="The single select field that records are stacked by.",
    )
    card_cover_image_field = models.ForeignKey(
        Field,
        on_delete=models.SET_NULL,
        related_name="hms_kanban_view_card_cover_field",
        blank=True,
        null=True,
        help_text="A file field whose first image is shown as the card cover.",
    )

    class Meta:
        ordering = ("id",)


class HmsKanbanViewFieldOptionsManager(models.Manager):
    """A trashed view keeps its field options, so filter them out when reading."""

    def get_queryset(self):
        trashed = Q(kanban_view__trashed=True) | Q(field__trashed=True)
        return super().get_queryset().filter(~trashed)


class HmsKanbanViewFieldOptions(CardFieldOptionsBase):
    objects = HmsKanbanViewFieldOptionsManager()
    objects_and_trash = models.Manager()

    kanban_view = models.ForeignKey(HmsKanbanView, on_delete=models.CASCADE)

    def get_parent(self):
        return self.kanban_view

    class Meta(CardFieldOptionsBase.Meta):
        abstract = False
        unique_together = ("kanban_view", "field")


class HmsCalendarView(View):
    """Records placed on a calendar by the value of a date field."""

    field_options = models.ManyToManyField(Field, through="HmsCalendarViewFieldOptions")
    date_field = models.ForeignKey(
        Field,
        on_delete=models.SET_NULL,
        related_name="hms_calendar_view_date_field",
        blank=True,
        null=True,
        help_text="The date field that positions a record on the calendar.",
    )
    card_cover_image_field = models.ForeignKey(
        Field,
        on_delete=models.SET_NULL,
        related_name="hms_calendar_view_card_cover_field",
        blank=True,
        null=True,
        help_text="A file field whose first image is shown as the card cover.",
    )

    class Meta:
        ordering = ("id",)


class HmsCalendarViewFieldOptionsManager(models.Manager):
    def get_queryset(self):
        trashed = Q(calendar_view__trashed=True) | Q(field__trashed=True)
        return super().get_queryset().filter(~trashed)


class HmsCalendarViewFieldOptions(CardFieldOptionsBase):
    objects = HmsCalendarViewFieldOptionsManager()
    objects_and_trash = models.Manager()

    calendar_view = models.ForeignKey(HmsCalendarView, on_delete=models.CASCADE)

    def get_parent(self):
        return self.calendar_view

    class Meta(CardFieldOptionsBase.Meta):
        abstract = False
        unique_together = ("calendar_view", "field")


class HmsTimelineView(View):
    """Records drawn as bars on a time axis, from a start date to an end date."""

    field_options = models.ManyToManyField(Field, through="HmsTimelineViewFieldOptions")
    start_date_field = models.ForeignKey(
        Field,
        on_delete=models.SET_NULL,
        related_name="hms_timeline_view_start_date_field",
        blank=True,
        null=True,
        help_text="The date field where a record's bar starts.",
    )
    end_date_field = models.ForeignKey(
        Field,
        on_delete=models.SET_NULL,
        related_name="hms_timeline_view_end_date_field",
        blank=True,
        null=True,
        help_text="The date field where a record's bar ends.",
    )
    group_by_field = models.ForeignKey(
        Field,
        on_delete=models.SET_NULL,
        related_name="hms_timeline_view_group_by_field",
        blank=True,
        null=True,
        help_text="An optional field that splits the timeline into swimlanes.",
    )
    card_cover_image_field = models.ForeignKey(
        Field,
        on_delete=models.SET_NULL,
        related_name="hms_timeline_view_card_cover_field",
        blank=True,
        null=True,
        help_text="A file field whose first image is shown as the card cover.",
    )

    class Meta:
        ordering = ("id",)


class HmsTimelineViewFieldOptionsManager(models.Manager):
    def get_queryset(self):
        trashed = Q(timeline_view__trashed=True) | Q(field__trashed=True)
        return super().get_queryset().filter(~trashed)


class HmsTimelineViewFieldOptions(CardFieldOptionsBase):
    objects = HmsTimelineViewFieldOptionsManager()
    objects_and_trash = models.Manager()

    timeline_view = models.ForeignKey(HmsTimelineView, on_delete=models.CASCADE)

    def get_parent(self):
        return self.timeline_view

    class Meta(CardFieldOptionsBase.Meta):
        abstract = False
        unique_together = ("timeline_view", "field")


class HmsListView(View):
    """Records stacked vertically as compact rows, optionally grouped."""

    field_options = models.ManyToManyField(Field, through="HmsListViewFieldOptions")
    group_by_field = models.ForeignKey(
        Field,
        on_delete=models.SET_NULL,
        related_name="hms_list_view_group_by_field",
        blank=True,
        null=True,
        help_text="An optional field that splits the list into sections.",
    )
    card_cover_image_field = models.ForeignKey(
        Field,
        on_delete=models.SET_NULL,
        related_name="hms_list_view_card_cover_field",
        blank=True,
        null=True,
        help_text="A file field whose first image is shown as the row thumbnail.",
    )

    class Meta:
        ordering = ("id",)


class HmsListViewFieldOptionsManager(models.Manager):
    def get_queryset(self):
        trashed = Q(list_view__trashed=True) | Q(field__trashed=True)
        return super().get_queryset().filter(~trashed)


class HmsListViewFieldOptions(CardFieldOptionsBase):
    objects = HmsListViewFieldOptionsManager()
    objects_and_trash = models.Manager()

    list_view = models.ForeignKey(HmsListView, on_delete=models.CASCADE)

    def get_parent(self):
        return self.list_view

    class Meta(CardFieldOptionsBase.Meta):
        abstract = False
        unique_together = ("list_view", "field")
