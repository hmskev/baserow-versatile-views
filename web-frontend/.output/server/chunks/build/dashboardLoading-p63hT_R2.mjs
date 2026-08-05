import { G as executeAsync } from '../nitro/nitro.mjs';
import { b6 as defineNuxtRouteMiddleware, u as useNuxtApp, ag as StoreItemLookupError, v as createError } from './server.mjs';
import { n as normalizeError } from './errors-DuSOJ378.mjs';
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
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "b6bf8eb9-6477-4209-aef3-507c8bd7d2ff", e._sentryDebugIdIdentifier = "sentry-dbid-b6bf8eb9-6477-4209-aef3-507c8bd7d2ff");
  } catch (e2) {
  }
})();
const dashboardLoading = defineNuxtRouteMiddleware(async (to, from) => {
  var _a, _b, _c;
  let __temp, __restore;
  const nuxtApp = useNuxtApp();
  const store = nuxtApp.$store;
  const { $i18n } = nuxtApp;
  function parseIntOrNull(x) {
    return x != null ? parseInt(x) : null;
  }
  const toDashboardId = parseIntOrNull((_a = to == null ? void 0 : to.params) == null ? void 0 : _a.dashboardId);
  parseIntOrNull((_b = from == null ? void 0 : from.params) == null ? void 0 : _b.dashboardId);
  if (toDashboardId) {
    try {
      const dashboard = ([__temp, __restore] = executeAsync(() => store.dispatch(
        "application/selectById",
        toDashboardId
      )), __temp = await __temp, __restore(), __temp);
      ;
      [__temp, __restore] = executeAsync(() => store.dispatch("workspace/selectById", dashboard.workspace.id)), await __temp, __restore();
      ;
    } catch (e) {
      if (e.response === void 0 && !(e instanceof StoreItemLookupError)) {
        throw e;
      }
      const errorStatus = ((_c = e.response) == null ? void 0 : _c.status) || 404;
      throw createError({
        statusCode: errorStatus,
        message: errorStatus === 404 ? "Dashboard not found." : normalizeError(e).message,
        data: {
          report: errorStatus !== 404
        },
        fatal: true
      });
    }
  }
  {
    [__temp, __restore] = executeAsync(() => store.dispatch("dashboardApplication/setLoading", true)), await __temp, __restore();
  }
});

export { dashboardLoading as default };
//# sourceMappingURL=dashboardLoading-p63hT_R2.mjs.map
