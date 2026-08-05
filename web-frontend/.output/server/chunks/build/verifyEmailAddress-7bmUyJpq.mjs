import { withAsyncContext, computed, resolveComponent, mergeProps, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { u as useNuxtApp, c as useRoute, d as useI18n, f as useAsyncData, A as AuthService, s as setToken, t as setUserSessionCookie, v as createError } from './server.mjs';
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
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "81c58b7d-bebd-4086-9cfa-8ec3913e55ea", e._sentryDebugIdIdentifier = "sentry-dbid-81c58b7d-bebd-4086-9cfa-8ec3913e55ea");
  } catch (e2) {
  }
})();
const _sfc_main = {
  __name: "verifyEmailAddress",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const nuxtApp = useNuxtApp();
    const { $store: store, $client } = nuxtApp;
    const route = useRoute();
    const { t } = useI18n();
    const { data: result, error } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData("verify-email", async () => {
      var _a, _b;
      const token = route.params.token;
      try {
        const isAuthenticated = store.getters["auth/isAuthenticated"];
        const { data } = await AuthService($client).verifyEmail(token);
        if (!isAuthenticated) {
          store.dispatch("auth/setUserData", data);
          await setToken(nuxtApp, data.refresh_token);
          await setUserSessionCookie(nuxtApp, data.user_session);
        } else {
          const loggedInUserEmail = store.getters["auth/getUserObject"].username;
          if (data.email !== loggedInUserEmail) {
            return { emailMismatch: true };
          } else {
            store.dispatch("auth/forceUpdateUserData", {
              user: {
                email_verified: true
              }
            });
          }
        }
        return { emailMismatch: false };
      } catch (err) {
        if (err.handler) {
          const response = err.handler.response;
          if (response && response.status === 401) {
            if (((_a = response.data) == null ? void 0 : _a.error) === "ERROR_DEACTIVATED_USER") {
              throw createError({
                statusCode: 401,
                message: t("error.disabledAccountMessage"),
                data: {
                  report: false
                },
                fatal: true
              });
            } else if (((_b = response.data) == null ? void 0 : _b.error) === "ERROR_AUTH_PROVIDER_DISABLED") {
              throw createError({
                statusCode: 401,
                message: t("verifyEmailAddress.disabledPasswordProvider"),
                data: {
                  report: false
                },
                fatal: true
              });
            }
          }
        }
        throw createError({
          statusCode: 404,
          message: t("verifyEmailAddress.invalidToken"),
          data: {
            report: false
          },
          fatal: true
        });
      }
    })), __temp = await __temp, __restore(), __temp);
    if (error.value) {
      throw error.value;
    }
    const emailMismatchWarning = computed(
      () => {
        var _a;
        return ((_a = result.value) == null ? void 0 : _a.emailMismatch) === true;
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ButtonIcon = resolveComponent("ButtonIcon");
      const _component_Button = resolveComponent("Button");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "auth__wrapper" }, _attrs))}><div class="auth__wrapper auth__wrapper--small-centered">`);
      _push(ssrRenderComponent(_component_ButtonIcon, { icon: "iconoir-mail-out" }, null, _parent));
      _push(`<p>${ssrInterpolate(_ctx.$t("verifyEmailAddress.confirmation"))}</p>`);
      if (emailMismatchWarning.value) {
        _push(`<p>${ssrInterpolate(_ctx.$t("verifyEmailAddress.emailMismatchWarning"))}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_Button, {
        tag: "nuxt-link",
        to: { name: "login" },
        type: "secondary",
        size: "large"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("verifyEmailAddress.goToDashboard"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("verifyEmailAddress.goToDashboard")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("modules/core/pages/verifyEmailAddress.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=verifyEmailAddress-7bmUyJpq.mjs.map
