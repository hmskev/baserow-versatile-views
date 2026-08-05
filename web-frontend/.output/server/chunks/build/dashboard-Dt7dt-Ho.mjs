import { ref, computed, withAsyncContext, resolveComponent, mergeProps, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { D as DashboardVerifyEmail, W as WorkspaceInvitation, _ as _imports_0, a as _imports_1 } from './WorkspaceInvitation-CtsJt769.mjs';
import { l as useStore, d as useI18n, u as useNuxtApp, F as CreateWorkspaceModal } from './server.mjs';
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
import './resendEmailVerification-B41zYwUk.mjs';
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
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "3e8ff5e6-f3f2-4ff6-bf58-51c98b03a19b", e._sentryDebugIdIdentifier = "sentry-dbid-3e8ff5e6-f3f2-4ff6-bf58-51c98b03a19b");
  } catch (e2) {
  }
})();
const _sfc_main = {
  __name: "dashboard",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const store = useStore();
    const { t } = useI18n();
    const { $hasPermission } = useNuxtApp();
    const modal = ref(null);
    const workspaceInvitations = computed(
      () => store.getters["auth/getWorkspaceInvitations"]
    );
    [__temp, __restore] = withAsyncContext(() => store.dispatch("auth/fetchWorkspaceInvitations")), await __temp, __restore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Button = resolveComponent("Button");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "dashboard__container" }, _attrs))}><div class="dashboard__main">`);
      _push(ssrRenderComponent(unref(DashboardVerifyEmail), { class: "margin-top-0 margin-bottom-0" }, null, _parent));
      _push(`<!--[-->`);
      ssrRenderList(workspaceInvitations.value, (invitation) => {
        _push(ssrRenderComponent(unref(WorkspaceInvitation), {
          key: "invitation-" + invitation.id,
          invitation,
          class: "margin-top-0 margin-bottom-0"
        }, null, _parent));
      });
      _push(`<!--]--><div class="dashboard__wrapper"><div class="dashboard__no-application"><img${ssrRenderAttr("src", _imports_0)}${ssrRenderAttr("srcset", _imports_1 + " 2x")}><h4>${ssrInterpolate(unref(t)("dashboard.noWorkspace"))}</h4>`);
      if (unref($hasPermission)("create_workspace")) {
        _push(`<p>${ssrInterpolate(unref(t)("dashboard.noWorkspaceDescription"))}</p>`);
      } else {
        _push(`<!---->`);
      }
      if (unref($hasPermission)("create_workspace")) {
        _push(`<span>`);
        _push(ssrRenderComponent(_component_Button, {
          icon: "iconoir-plus",
          tag: "a",
          onClick: ($event) => {
            var _a;
            return (_a = modal.value) == null ? void 0 : _a.show();
          }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref(t)("dashboard.addNew"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(unref(t)("dashboard.addNew")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div>`);
      _push(ssrRenderComponent(unref(CreateWorkspaceModal), {
        ref_key: "modal",
        ref: modal
      }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("modules/core/pages/dashboard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=dashboard-Dt7dt-Ho.mjs.map
