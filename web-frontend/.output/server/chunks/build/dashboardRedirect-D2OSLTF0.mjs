import { b6 as defineNuxtRouteMiddleware, u as useNuxtApp, n as navigateTo } from './server.mjs';
import 'vue';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import '@sentry/core';
import 'vue-router';
import 'node:url';
import 'jwt-decode';
import 'tldjs';
import 'perfect-debounce';
import '@vue/shared';
import 'lodash';
import 'antlr4';
import '@vuelidate/core';
import 'vue/server-renderer';
import '@vuelidate/validators';
import 'moment-timezone';
import 'lodash/get.js';
import 'js-sha256';
import 'path-to-regexp';
import 'vue-devtools-stub';
import 'ulid';
import 'lodash/debounce.js';
import 'thenby';
import 'bignumber.js';
import 'axios';
import 'moment-guess';
import 'async-mutex';
import '@tiptap/vue-3';
import '@tiptap/extension-placeholder';
import '@tiptap/extension-mention';
import 'markdown-it-regexp';
import '@tiptap/extension-document';
import '@tiptap/extension-paragraph';
import '@tiptap/extension-hard-break';
import '@tiptap/extension-heading';
import '@tiptap/extension-list-item';
import '@tiptap/extension-bullet-list';
import '@tiptap/extension-ordered-list';
import '@tiptap/extension-bold';
import '@tiptap/extension-italic';
import '@tiptap/extension-strike';
import '@tiptap/extension-link';
import '@tiptap/extension-underline';
import '@tiptap/extension-subscript';
import '@tiptap/extension-superscript';
import '@tiptap/extension-blockquote';
import '@tiptap/extension-code-block';
import '@tiptap/extension-horizontal-rule';
import '@tiptap/extension-task-item';
import '@tiptap/extension-task-list';
import '@tiptap/extension-text';
import '@tiptap/extension-dropcursor';
import '@tiptap/extension-gapcursor';
import '@tiptap/extension-history';
import '@tiptap/core';
import 'tiptap-markdown';
import '@tiptap/vue-3/menus';
import '@tiptap/pm/state';
import '@tiptap/extension-image';
import 'tippy.js';
import 'markdown-it';
import 'markdown-it-task-lists';
import 'lodash/extend.js';
import 'prosemirror-state';
import '@tiptap/pm/model';
import '@tiptap/pm/transform';
import 'flush-promises';
import 'papaparse';
import 'mitt';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';

!(function() {
  try {
    var e = false ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
    var n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "8006c24f-0d38-4405-b01e-f2ab962e0f5c", e._sentryDebugIdIdentifier = "sentry-dbid-8006c24f-0d38-4405-b01e-f2ab962e0f5c");
  } catch (e2) {
  }
})();
const dashboardRedirect = defineNuxtRouteMiddleware(async (to) => {
  const nuxtApp = useNuxtApp();
  const store = nuxtApp.$store;
  const selectedWorkspace = store.getters["workspace/getSelected"];
  const allWorkspaces = store.getters["workspace/getAll"];
  if (selectedWorkspace == null ? void 0 : selectedWorkspace.id) {
    return navigateTo(
      {
        name: "workspace",
        params: { workspaceId: selectedWorkspace.id },
        query: to.query
      },
      { replace: true }
    );
  } else if ((allWorkspaces == null ? void 0 : allWorkspaces.length) > 0) {
    return navigateTo(
      {
        name: "workspace",
        params: { workspaceId: allWorkspaces[0].id },
        query: to.query
      },
      { replace: true }
    );
  }
});

export { dashboardRedirect as default };
//# sourceMappingURL=dashboardRedirect-D2OSLTF0.mjs.map
