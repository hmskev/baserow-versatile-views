import { withAsyncContext, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import { c as useRoute, u as useNuxtApp, f as useAsyncData, W as WorkspaceService, n as navigateTo } from './server.mjs';
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
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "4ef145ff-d272-4d12-9a7c-2174d48c16d0", e._sentryDebugIdIdentifier = "sentry-dbid-4ef145ff-d272-4d12-9a7c-2174d48c16d0");
  } catch (e2) {
  }
})();
const _sfc_main = {
  __name: "workspaceInvitation",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const { $store: store, $client } = useNuxtApp();
    const token = route.params.token;
    const { data: invitation, error } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData(
      "workspace-invitation",
      async () => {
        const { data } = await WorkspaceService($client).fetchInvitationByToken(token);
        return data;
      }
    )), __temp = await __temp, __restore(), __temp);
    if (error.value) {
      if (store.getters["auth/isAuthenticated"]) {
        [__temp, __restore] = withAsyncContext(() => navigateTo({ name: "dashboard" }, { replace: true })), await __temp, __restore();
      } else {
        [__temp, __restore] = withAsyncContext(() => navigateTo({ name: "login" }, { replace: true })), await __temp, __restore();
      }
    }
    if (invitation.value) {
      const inv = invitation.value;
      if (store.getters["auth/isAuthenticated"] && store.getters["auth/getUsername"] === inv.email) {
        try {
          const { data: workspace } = ([__temp, __restore] = withAsyncContext(() => WorkspaceService(
            $client
          ).acceptInvitation(inv.id)), __temp = await __temp, __restore(), __temp);
          store.commit("workspace/SET_LOADED", false);
          store.commit("application/SET_LOADED", false);
          [__temp, __restore] = withAsyncContext(() => navigateTo(
            { name: "workspace", params: { workspaceId: workspace.id } },
            { replace: true }
          )), await __temp, __restore();
        } catch {
          [__temp, __restore] = withAsyncContext(() => navigateTo({ name: "dashboard" }, { replace: true })), await __temp, __restore();
        }
      } else {
        const name = inv.email_exists ? "login" : "signup";
        [__temp, __restore] = withAsyncContext(() => navigateTo(
          { name, query: { workspaceInvitationToken: token } },
          { replace: true }
        )), await __temp, __restore();
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("modules/core/pages/workspaceInvitation.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=workspaceInvitation-Dr9zOkKD.mjs.map
