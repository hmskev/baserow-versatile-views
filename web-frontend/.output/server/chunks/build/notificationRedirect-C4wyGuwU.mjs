import { withAsyncContext, useSSRContext } from 'vue';
import { c as useRoute, u as useNuxtApp, f as useAsyncData, ad as notificationService, v as createError, n as navigateTo } from './server.mjs';
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
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "8fe8ca90-8e13-49a0-a030-88eb6b29f2c3", e._sentryDebugIdIdentifier = "sentry-dbid-8fe8ca90-8e13-49a0-a030-88eb6b29f2c3");
  } catch (e2) {
  }
})();
const _sfc_main = {
  __name: "notificationRedirect",
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const nuxtApp = useNuxtApp();
    const workspaceId = route.params.workspaceId;
    const notificationId = route.params.notificationId;
    const { data: notification, error: loadError } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData(
      () => `notification:${workspaceId}:${notificationId}`,
      async () => {
        try {
          const { data } = await notificationService(nuxtApp.$client).markAsRead(
            workspaceId,
            notificationId
          );
          return data;
        } catch {
          throw createError({
            statusCode: 404,
            message: "Notification not found.",
            data: {
              report: false
            },
            fatal: true
          });
        }
      },
      "$IowqSIv-qM"
      /* nuxt-injected */
    )), __temp = await __temp, __restore(), __temp);
    if (loadError.value || !notification.value) {
      throw loadError.value;
    }
    const notificationType = nuxtApp.$registry.get(
      "notification",
      notification.value.type
    );
    const redirectParams = notificationType.getRoute(notification.value.data);
    if (!redirectParams) {
      throw createError({
        statusCode: 404,
        message: "Notification has no route.",
        data: {
          report: false
        },
        fatal: true
      });
    }
    [__temp, __restore] = withAsyncContext(() => navigateTo(redirectParams, { replace: true })), await __temp, __restore();
    return () => {
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("modules/core/pages/notificationRedirect.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=notificationRedirect-C4wyGuwU.mjs.map
