# Baserow Versatile Views

A generic Baserow backend plugin exposing reusable, permission-aware layout data for **Kanban**, **calendar**, and **timeline** clients. It is not tied to an application, table name, status list, or field schema.

## Supported API

After installation, authenticated clients can call:

- `GET /api/versatile-views/status/`
- `POST /api/versatile-views/kanban/`
- `POST /api/versatile-views/calendar/`
- `POST /api/versatile-views/timeline/`

Example request:

```json
{
  "table_id": 499,
  "config": {
    "display_fields": [501, 503],
    "group_field": 504,
    "label_field": 501,
    "color_field": 505,
    "sort_field": 501,
    "sort_direction": "asc"
  },
  "rows": {"page": 1, "size": 200, "search": ""}
}
```

Dated layouts use `start_field` and optionally `end_field`; rows without a parseable start date are excluded. All field IDs are supplied by the caller. The endpoint checks the authenticated user’s Baserow table read permission before reading rows and reuses Baserow’s row API for serialization, pagination, search, and token permissions.

## Build

The image is pinned to the deployed Baserow compatibility target (`2.3.3`):

```bash
docker build --build-arg BASEROW_VERSION=2.3.3 -t baserow-versatile-views:0.1.0 .
```

The supplied `docker-compose.plugin.yml` is an override for the existing Baserow Compose project. Back up `/baserow/data` before applying it.

## Install in an existing image

```bash
docker exec baserow ./baserow.sh install-plugin --folder /baserow/data/plugins/versatile_views
docker restart baserow
```

## Development

The pure transformation layer can be tested without a Baserow database:

```bash
cd backend
python -m pytest -q
```

## Security

This plugin does not create API keys, bypass workspace permissions, or expose unauthenticated table data. Baserow plugins execute with full server privileges; review the source and back up data before installation.
