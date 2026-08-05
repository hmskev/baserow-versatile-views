import { G as executeAsync } from '../nitro/nitro.mjs';
import { b6 as defineNuxtRouteMiddleware, u as useNuxtApp, b7 as useRequestEvent, b8 as getWorkspaceCookie, n as navigateTo } from './server.mjs';
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
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "c4e3ae10-42fd-474d-bb5c-6ea3bfe0893f", e._sentryDebugIdIdentifier = "sentry-dbid-c4e3ae10-42fd-474d-bb5c-6ea3bfe0893f");
  } catch (e2) {
  }
})();
const workspacesAndApplications = defineNuxtRouteMiddleware(async (to) => {
  var _a;
  let __temp, __restore;
  const nuxtApp = useNuxtApp();
  const store = nuxtApp.$store;
  const event = useRequestEvent();
  if (!event) return;
  let workspaceId = getWorkspaceCookie(nuxtApp);
  const workspaceIdParam = (_a = to.meta.useRouteWorkspaceParam) != null ? _a : "workspaceId";
  if (to.params[workspaceIdParam]) {
    const routeWorkspaceId = parseInt(to.params[workspaceIdParam], 10);
    if (!isNaN(routeWorkspaceId)) {
      workspaceId = routeWorkspaceId;
    }
  }
  if (store.getters["auth/isAuthenticated"]) {
    if (!store.getters["workspace/isLoaded"]) {
      [__temp, __restore] = executeAsync(() => store.dispatch("workspace/fetchAll")), await __temp, __restore();
      const workspaces2 = store.getters["workspace/getAll"];
      const workspaceExists = workspaces2.find((w) => w.id === workspaceId) !== void 0;
      if (!workspaceExists) {
        workspaceId = null;
      }
      if (!workspaceExists && store.getters["workspace/getAll"].length > 0) {
        workspaceId = workspaces2[0].id;
      }
      if (workspaceId) {
        try {
          ;
          [__temp, __restore] = executeAsync(() => store.dispatch("workspace/selectById", workspaceId)), await __temp, __restore();
          ;
        } catch {
        }
      }
    }
    if (!store.getters["application/isLoaded"]) {
      [__temp, __restore] = executeAsync(() => store.dispatch("application/fetchAll")), await __temp, __restore();
    }
    const user = store.getters["auth/getUserObject"];
    const workspaces = store.getters["workspace/getAll"];
    if (!user.completed_onboarding && workspaces.length === 0) {
      return nuxtApp.runWithContext(() => navigateTo({ name: "onboarding" }));
    }
  }
});

export { workspacesAndApplications as default };
//# sourceMappingURL=workspacesAndApplications-Vjq3uaW2.mjs.map
