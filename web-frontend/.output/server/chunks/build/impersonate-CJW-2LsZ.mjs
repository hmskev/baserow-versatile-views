import { U as UserService } from './users-C4ZUTpfp.mjs';
import { b6 as defineNuxtRouteMiddleware, u as useNuxtApp } from './server.mjs';
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
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "eb750688-6e18-490a-b16c-55c43495ad67", e._sentryDebugIdIdentifier = "sentry-dbid-eb750688-6e18-490a-b16c-55c43495ad67");
  } catch (e2) {
  }
})();
const impersonateMiddleware = async (to, { nuxtApp }) => {
  const store = nuxtApp.$store;
  if (!Object.prototype.hasOwnProperty.call(to.query, "__impersonate-user")) {
    return;
  }
  if (!store.getters["auth/isAuthenticated"]) {
    return;
  }
  const userId = to.query["__impersonate-user"];
  if (String(store.getters["auth/getUserId"]) === String(userId)) {
    return;
  }
  const { data } = await UserService(nuxtApp.$client).impersonate(userId);
  store.dispatch("auth/forceSetUserData", data);
  store.dispatch("auth/preventSetToken");
  store.dispatch("impersonating/setImpersonating", true);
};
const impersonate = defineNuxtRouteMiddleware(async (to) => {
  const nuxtApp = useNuxtApp();
  return impersonateMiddleware(to, { nuxtApp });
});

export { impersonate as default, impersonateMiddleware };
//# sourceMappingURL=impersonate-CJW-2LsZ.mjs.map
