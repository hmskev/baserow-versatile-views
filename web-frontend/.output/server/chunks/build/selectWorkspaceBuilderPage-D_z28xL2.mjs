import { G as executeAsync } from '../nitro/nitro.mjs';
import { b6 as defineNuxtRouteMiddleware, u as useNuxtApp, v as createError, ag as StoreItemLookupError } from './server.mjs';
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
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "f6e7ea5c-322d-4fc9-8f56-520ab536dbfd", e._sentryDebugIdIdentifier = "sentry-dbid-f6e7ea5c-322d-4fc9-8f56-520ab536dbfd");
  } catch (e2) {
  }
})();
const selectWorkspaceBuilderPage = defineNuxtRouteMiddleware(async (to, from) => {
  var _a;
  let __temp, __restore;
  const { $store, $i18n } = useNuxtApp();
  const builderId = parseInt(to.params.builderId);
  const pageId = parseInt(to.params.pageId);
  try {
    const loadedBuilder = ([__temp, __restore] = executeAsync(() => $store.dispatch(
      "application/selectById",
      builderId
    )), __temp = await __temp, __restore(), __temp);
    [__temp, __restore] = executeAsync(() => $store.dispatch("workspace/selectById", loadedBuilder.workspace.id)), await __temp, __restore();
    ;
    [__temp, __restore] = executeAsync(() => $store.dispatch("page/selectById", {
      builder: loadedBuilder,
      pageId
    })), await __temp, __restore();
  } catch (e) {
    const isStoreLookupError = e instanceof StoreItemLookupError;
    if (e.response === void 0 && !isStoreLookupError) {
      throw e;
    }
    const errorStatus = isStoreLookupError || !((_a = e.response) == null ? void 0 : _a.status) ? 404 : e.response.status;
    throw createError({
      statusCode: errorStatus,
      message: errorStatus === 404 ? $i18n.t("pageEditor.pageNotFound") : normalizeError(e).message,
      data: {
        report: errorStatus !== 404
      },
      fatal: true
    });
  }
});

export { selectWorkspaceBuilderPage as default };
//# sourceMappingURL=selectWorkspaceBuilderPage-D_z28xL2.mjs.map
