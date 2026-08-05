ARG BASEROW_VERSION=2.3.3
FROM baserow/baserow:${BASEROW_VERSION}

COPY . /baserow/data/plugins/versatile_views/
RUN /baserow/plugins/install_plugin.sh --folder /baserow/data/plugins/versatile_views
RUN /usr/local/bin/python3.14 -m pip install --no-deps --target /baserow/venv/lib/python3.14/site-packages /baserow/data/plugins/versatile_views/backend
