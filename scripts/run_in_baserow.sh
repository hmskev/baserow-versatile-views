#!/usr/bin/env bash
# Run a command against a throwaway Baserow container with this plugin installed.
#
# The published image has no web-frontend source, but it does carry the full backend,
# so this is the fastest way to check the plugin imports, generate migrations and run
# Django management commands against the real Baserow app registry.
#
# Usage: scripts/run_in_baserow.sh '<shell command run inside /baserow/backend>'
#
# Set HOST to run somewhere other than the default docker host.

set -euo pipefail

HOST="${HOST:-havenms@sonic}"
IMAGE="${IMAGE:-baserow/baserow:latest}"
COMMAND="${1:?usage: run_in_baserow.sh '<command>'}"

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

tar czf /tmp/vv-backend.tgz -C "$REPO_ROOT" backend 2>/dev/null
scp -q /tmp/vv-backend.tgz "$HOST:/tmp/"

ssh "$HOST" "rm -rf /tmp/vv && mkdir -p /tmp/vv && tar xzf /tmp/vv-backend.tgz -C /tmp/vv 2>/dev/null; \
docker run --rm \
  -v /tmp/vv/backend:/src:ro \
  -v /tmp/vv-out:/out \
  -e BASEROW_PLUGIN_DIR=/baserow/plugins \
  -e SECRET_KEY=local-development-only \
  -e BASEROW_JWT_SIGNING_KEY=local-development-only \
  -e DATABASE_URL=postgresql://u:p@127.0.0.1:5432/db \
  -e REDIS_URL=redis://127.0.0.1:6379 \
  --entrypoint /bin/bash '$IMAGE' -c '
    set -e
    mkdir -p /baserow/plugins/versatile_views
    cp -r /src /baserow/plugins/versatile_views/backend
    /usr/local/bin/python3.14 -m pip install --no-deps -q \
      --target /baserow/venv/lib/python3.14/site-packages \
      /baserow/plugins/versatile_views/backend >/dev/null 2>&1
    cd /baserow/backend
    $COMMAND
  '"
