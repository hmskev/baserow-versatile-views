ARG BASEROW_VERSION=2.3.3
FROM baserow/baserow:${BASEROW_VERSION}

ENV BASEROW_PLUGIN_DIR=/baserow/plugins

COPY . /baserow/plugins/versatile_views/
RUN /usr/local/bin/python3.14 -m pip install --no-deps --target /baserow/venv/lib/python3.14/site-packages /baserow/plugins/versatile_views/backend
COPY web-frontend/.output /baserow/web-frontend/.output
