# Baserow with the Haven Media Solutions view types compiled in.
#
# The frontend MUST be compiled in the same build that produces the Nuxt asset
# manifest. A previous version of this image shipped a prebuilt `.output` that was
# committed to git; its manifest recorded a chunk as 5834090 bytes while the shipped
# file was 5834086. Nitro sent the manifest's Content-Length, streamed 4 bytes fewer,
# and the connection never closed cleanly. That chunk held Baserow's own core/builder
# plugins, so the whole app stopped hydrating. Building here makes that class of
# mismatch structurally impossible.
#
# The published baserow/baserow and baserow/web-frontend images contain only the
# compiled `.output` - no source, no node_modules - so `install_plugin.sh` cannot build
# a web-frontend module inside them. The frontend is therefore built from Baserow's
# source tree, with our module injected through the supported ADDITIONAL_MODULES hook.

ARG BASEROW_VERSION=2.3.3
ARG NODE_BASE_IMAGE=node:24.18.0-trixie-slim

# ---------------------------------------------------------------------------------
# Stage 1: fetch Baserow's frontend source at the pinned version.
# ---------------------------------------------------------------------------------
FROM ${NODE_BASE_IMAGE} AS baserow-source
ARG BASEROW_VERSION
RUN apt-get update \
    && apt-get install -y --no-install-recommends git ca-certificates \
    && rm -rf /var/lib/apt/lists/*
RUN git clone --depth 1 --branch "${BASEROW_VERSION}" \
        https://gitlab.com/baserow/baserow.git /baserow-src

# ---------------------------------------------------------------------------------
# Stage 2: build the frontend with our module compiled in.
# ---------------------------------------------------------------------------------
FROM ${NODE_BASE_IMAGE} AS frontend-builder
ENV YARN_CACHE_FOLDER=/tmp/.yarn-cache \
    NODE_OPTIONS="--max-old-space-size=4096"

WORKDIR /baserow/web-frontend

# Baserow's own frontend sources. premium/ and enterprise/ are copied because the
# stock production build loads their modules; keeping them preserves parity with the
# official image. We add our own view types alongside, and never modify or copy from
# that proprietary code.
COPY --from=baserow-source /baserow-src/web-frontend /baserow/web-frontend/
COPY --from=baserow-source /baserow-src/premium/web-frontend /baserow/premium/web-frontend/
COPY --from=baserow-source /baserow-src/enterprise/web-frontend /baserow/enterprise/web-frontend/

RUN yarn install --pure-lockfile --cache-folder "$YARN_CACHE_FOLDER" \
    && ln -s /baserow/web-frontend/node_modules/ /baserow/premium/web-frontend/node_modules \
    && ln -s /baserow/web-frontend/node_modules/ /baserow/enterprise/web-frontend/node_modules

# Our plugin's frontend module.
COPY web-frontend /baserow/plugins/versatile_views/web-frontend/
RUN ln -s /baserow/web-frontend/node_modules/ /baserow/plugins/versatile_views/web-frontend/node_modules

# ADDITIONAL_MODULES is Baserow's supported hook for compiling extra Nuxt modules
# into the production build (see web-frontend/config/nuxt.config.base.ts).
ENV ADDITIONAL_MODULES=/baserow/plugins/versatile_views/web-frontend/modules/versatile-views/module.js
RUN yarn run build

# Fail the build rather than ship a bundle whose manifest disagrees with its files.
COPY scripts/verify_asset_manifest.mjs /tmp/verify_asset_manifest.mjs
RUN node /tmp/verify_asset_manifest.mjs /baserow/web-frontend/.output

# ---------------------------------------------------------------------------------
# Stage 3: the runtime image.
# ---------------------------------------------------------------------------------
FROM baserow/baserow:${BASEROW_VERSION}

ENV BASEROW_PLUGIN_DIR=/baserow/plugins

# Backend plugin. --no-deps keeps Baserow's pinned dependency set intact; the plugin
# adds no third-party requirements of its own.
COPY backend /baserow/plugins/versatile_views/backend/
RUN /usr/local/bin/python3.14 -m pip install --no-deps \
        --target /baserow/venv/lib/python3.14/site-packages \
        /baserow/plugins/versatile_views/backend
COPY baserow_plugin_info.json /baserow/plugins/versatile_views/baserow_plugin_info.json

# The frontend built in stage 2: manifest and chunks from one single build.
COPY --from=frontend-builder /baserow/web-frontend/.output /baserow/web-frontend/.output
