import { G as executeAsync } from '../nitro/nitro.mjs';
import { b6 as defineNuxtRouteMiddleware, u as useNuxtApp, ba as getDefaultView } from './server.mjs';
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
import 'vue';
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
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "6869eeed-37b2-4d9e-b801-7d49f50323ce", e._sentryDebugIdIdentifier = "sentry-dbid-6869eeed-37b2-4d9e-b801-7d49f50323ce");
  } catch (e2) {
  }
})();
const tableLoading = defineNuxtRouteMiddleware(async (to, from) => {
  var _a, _b, _c;
  let __temp, __restore;
  const nuxtApp = useNuxtApp();
  const store = nuxtApp.$store;
  function parseIntOrNull(x) {
    return x != null ? parseInt(x) : null;
  }
  const toDatabaseId = parseIntOrNull((_a = to.params) == null ? void 0 : _a.databaseId);
  const toDatabase = store.getters["application/get"](toDatabaseId);
  if (!toDatabase) {
    return;
  }
  const toWorkspaceId = toDatabase.workspace.id;
  const toTableId = parseIntOrNull(to.params.tableId);
  const toViewId = parseIntOrNull(to.params.viewId);
  const toRowId = parseIntOrNull(to.params.rowId);
  const fromTableId = parseIntOrNull((_b = from == null ? void 0 : from.params) == null ? void 0 : _b.tableId);
  const fromViewId = parseIntOrNull((_c = from == null ? void 0 : from.params) == null ? void 0 : _c.viewId);
  const differentTableId = fromTableId !== toTableId;
  const differentViewId = fromViewId !== toViewId;
  const viewToUse = getDefaultView(
    nuxtApp,
    store,
    toWorkspaceId,
    toRowId !== null
  );
  const willRedirectToSameViewId = fromViewId && toViewId === null && fromViewId === (viewToUse == null ? void 0 : viewToUse.id);
  if (!from || differentTableId || !differentTableId && differentViewId && !willRedirectToSameViewId) {
    [__temp, __restore] = executeAsync(() => store.dispatch("table/setLoading", true)), await __temp, __restore();
  }
});

export { tableLoading as default };
//# sourceMappingURL=tableLoading-8Pa-l6_4.mjs.map
