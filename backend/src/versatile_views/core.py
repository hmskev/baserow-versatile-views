"""Pure transformation functions for generic Baserow layout data.

These functions deliberately know nothing about a particular database, table, field
names, statuses, or application. The API layer supplies field IDs and row values.
"""

from __future__ import annotations

from collections import defaultdict
from datetime import date, datetime
from typing import Any, Iterable


class LayoutConfigError(ValueError):
    pass


def _value(row: dict[str, Any], field_id: int | str | None) -> Any:
    if field_id is None:
        return None
    return row.get(f"field_{field_id}", row.get(str(field_id)))


def _scalar(value: Any) -> Any:
    if isinstance(value, list):
        return ", ".join(str(_scalar(v)) for v in value)
    if isinstance(value, dict):
        return value.get("value") or value.get("name") or value.get("id") or str(value)
    return value


def _update_value(value: Any) -> Any:
    """Return the value accepted by Baserow's row PATCH endpoint."""
    if isinstance(value, dict):
        return value.get("id") or value.get("value") or value.get("name")
    return value


def _iso(value: Any) -> str | None:
    if value in (None, ""):
        return None
    if isinstance(value, date) and not isinstance(value, datetime):
        return value.isoformat()
    if isinstance(value, datetime):
        return value.isoformat()
    text = str(value)
    if "T" not in text and " " not in text:
        try:
            return date.fromisoformat(text).isoformat()
        except ValueError:
            pass
    try:
        return datetime.fromisoformat(text.replace("Z", "+00:00")).isoformat()
    except ValueError:
        try:
            return date.fromisoformat(text).isoformat()
        except ValueError:
            return None


def _sort(rows: list[dict[str, Any]], field_id: int | str | None, direction: str) -> list[dict[str, Any]]:
    if field_id is None:
        return rows
    reverse = direction.lower() == "desc"
    return sorted(rows, key=lambda row: (str(_scalar(_value(row, field_id)) or "").lower()), reverse=reverse)


def _card(row: dict[str, Any], config: dict[str, Any]) -> dict[str, Any]:
    display_fields = config.get("display_fields") or []
    configured_fields = []
    for key in ("display_fields", "group_field", "label_field", "color_field", "start_field", "end_field", "sort_field"):
        value = config.get(key)
        if isinstance(value, list):
            configured_fields.extend(value)
        elif value is not None:
            configured_fields.append(value)
    values = {str(field_id): _value(row, field_id) for field_id in display_fields}
    raw_values = {str(field_id): _value(row, field_id) for field_id in dict.fromkeys(configured_fields)}
    return {
        "id": row.get("id"),
        "values": values,
        "raw_values": raw_values,
        "label": _scalar(_value(row, config.get("label_field"))),
        "color": _scalar(_value(row, config.get("color_field"))),
    }


def kanban(rows: Iterable[dict[str, Any]], config: dict[str, Any]) -> dict[str, Any]:
    group_field = config.get("group_field")
    if group_field is None:
        raise LayoutConfigError("group_field is required for kanban layouts")
    grouped: defaultdict[str, list[dict[str, Any]]] = defaultdict(list)
    group_values: dict[str, Any] = {}
    for row in rows:
        raw_value = _value(row, group_field)
        key = _scalar(raw_value)
        key = "__empty__" if key in (None, "") else str(key)
        group_values.setdefault(key, _update_value(raw_value))
        grouped[key].append(_card(row, config))
    columns = [
        {
            "key": key,
            "label": "(empty)" if key == "__empty__" else key,
            "value": group_values[key],
            "field_id": group_field,
            "cards": cards,
        }
        for key, cards in grouped.items()
    ]
    return {"layout": "kanban", "columns": columns}


def _dated(rows: Iterable[dict[str, Any]], config: dict[str, Any], layout: str) -> dict[str, Any]:
    start_field = config.get("start_field")
    if start_field is None:
        raise LayoutConfigError("start_field is required for dated layouts")
    end_field = config.get("end_field")
    items = []
    for row in rows:
        start = _iso(_value(row, start_field))
        if not start:
            continue
        end = _iso(_value(row, end_field)) if end_field is not None else start
        item = _card(row, config)
        item.update({"start": start, "end": end or start})
        items.append(item)
    return {"layout": layout, "items": items}


def calendar(rows: Iterable[dict[str, Any]], config: dict[str, Any]) -> dict[str, Any]:
    return _dated(rows, config, "calendar")


def timeline(rows: Iterable[dict[str, Any]], config: dict[str, Any]) -> dict[str, Any]:
    return _dated(rows, config, "timeline")


def build_layout(layout: str, rows: Iterable[dict[str, Any]], config: dict[str, Any]) -> dict[str, Any]:
    if not isinstance(config, dict):
        raise LayoutConfigError("config must be an object")
    if layout == "kanban":
        return kanban(_sort(list(rows), config.get("sort_field"), config.get("sort_direction", "asc")), config)
    if layout == "calendar":
        return calendar(_sort(list(rows), config.get("sort_field"), config.get("sort_direction", "asc")), config)
    if layout == "timeline":
        return timeline(_sort(list(rows), config.get("sort_field"), config.get("sort_direction", "asc")), config)
    raise LayoutConfigError("layout must be one of: kanban, calendar, timeline")
