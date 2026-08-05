import { b6 as defineNuxtRouteMiddleware, b7 as useRequestEvent, u as useNuxtApp, v as createError, a as useRuntimeConfig } from './server.mjs';
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
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "7b531b5f-6fde-41cc-9d53-ea51e1df1bc2", e._sentryDebugIdIdentifier = "sentry-dbid-7b531b5f-6fde-41cc-9d53-ea51e1df1bc2");
  } catch (e2) {
  }
})();
function isValidHttpUrl(rawString) {
  try {
    const url = new URL(rawString);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch (_) {
    return false;
  }
}
const urlCheck = defineNuxtRouteMiddleware(() => {
  const event = useRequestEvent();
  const nuxtApp = useNuxtApp();
  const config = useRuntimeConfig();
  const i18n = nuxtApp.$i18n;
  const translate = (key, params) => i18n && typeof i18n.t === "function" ? i18n.t(key, params) : key;
  if (!event) return;
  if (!config.public.baserowDisablePublicUrlCheck) {
    const urlsToCheck = {
      publicBackendUrl: config.public.publicBackendUrl,
      publicWebFrontendUrl: config.public.publicWebFrontendUrl
    };
    for (const [name, value] of Object.entries(urlsToCheck)) {
      if (value && !isValidHttpUrl(value)) {
        throw createError({
          statusCode: 500,
          hideBackButton: true,
          message: translate("urlCheck.invalidUrlEnvVarTitle", { name }),
          content: translate("urlCheck.invalidUrlEnvVarDescription", { name }),
          fatal: true
        });
      }
    }
  }
});

export { urlCheck as default };
//# sourceMappingURL=urlCheck-DyvO3tNH.mjs.map
