"""Field option serializers for the Haven Media Solutions view types."""

from rest_framework import serializers

from .models import (
    HmsCalendarViewFieldOptions,
    HmsKanbanViewFieldOptions,
    HmsListViewFieldOptions,
    HmsTimelineViewFieldOptions,
)

CARD_FIELD_OPTION_FIELDS = ("hidden", "order")


class KanbanViewFieldOptionsSerializer(serializers.ModelSerializer):
    class Meta:
        model = HmsKanbanViewFieldOptions
        fields = CARD_FIELD_OPTION_FIELDS


class CalendarViewFieldOptionsSerializer(serializers.ModelSerializer):
    class Meta:
        model = HmsCalendarViewFieldOptions
        fields = CARD_FIELD_OPTION_FIELDS


class TimelineViewFieldOptionsSerializer(serializers.ModelSerializer):
    class Meta:
        model = HmsTimelineViewFieldOptions
        fields = CARD_FIELD_OPTION_FIELDS


class ListViewFieldOptionsSerializer(serializers.ModelSerializer):
    class Meta:
        model = HmsListViewFieldOptions
        fields = CARD_FIELD_OPTION_FIELDS
