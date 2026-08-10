import pytest

from versatile_views.core import LayoutConfigError, build_layout


def test_kanban_groups_arbitrary_field_ids_and_keeps_values():
    rows = [
        {"id": 1, "field_7": "Todo", "field_8": "A"},
        {"id": 2, "field_7": "Done", "field_8": "B"},
        {"id": 3, "field_7": None, "field_8": "C"},
    ]
    result = build_layout("kanban", rows, {"group_field": 7, "display_fields": [8]})
    assert [column["label"] for column in result["columns"]] == ["Todo", "Done", "(empty)"]
    assert result["columns"][0]["cards"][0]["values"] == {"8": "A"}
    assert result["columns"][0]["value"] == "Todo"
    assert result["columns"][0]["field_id"] == 7


def test_kanban_exposes_patch_value_for_select_columns():
    result = build_layout(
        "kanban",
        [{"id": 1, "field_7": {"id": 42, "value": "Todo"}}],
        {"group_field": 7},
    )
    assert result["columns"][0]["label"] == "Todo"
    assert result["columns"][0]["value"] == 42


def test_calendar_uses_start_and_optional_end_and_skips_invalid_rows():
    rows = [
        {"id": 1, "field_10": "2026-08-05", "field_11": "2026-08-07"},
        {"id": 2, "field_10": "not-a-date"},
        {"id": 3, "field_10": "2026-08-06"},
    ]
    result = build_layout("calendar", rows, {"start_field": 10, "end_field": 11})
    assert [(item["id"], item["start"], item["end"]) for item in result["items"]] == [
        (1, "2026-08-05", "2026-08-07"),
        (3, "2026-08-06", "2026-08-06"),
    ]


def test_timeline_defaults_end_to_start():
    result = build_layout("timeline", [{"id": 1, "field_10": "2026-08-05T10:00:00Z"}], {"start_field": 10})
    assert result["items"][0]["end"] == "2026-08-05T10:00:00+00:00"


def test_invalid_layout_and_missing_group_are_rejected():
    with pytest.raises(LayoutConfigError):
        build_layout("table", [], {})
    with pytest.raises(LayoutConfigError):
        build_layout("kanban", [], {})
