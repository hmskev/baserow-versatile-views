import { ref, withAsyncContext, reactive, resolveComponent, mergeProps, unref, withCtx, createVNode, toDisplayString, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { useRoute, useRouter } from 'vue-router';
import { useVuelidate } from '@vuelidate/core';
import { helpers, required } from '@vuelidate/validators';
import { u as useNuxtApp, aE as useState, g as useHead, aH as Error$1 } from './server.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import '@sentry/core';
import 'node:url';
import 'jwt-decode';
import 'tldjs';
import 'perfect-debounce';
import '@vue/shared';
import 'lodash';
import 'antlr4';
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
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "e6c1f93e-88ed-45cd-af26-ae9597c048e3", e._sentryDebugIdIdentifier = "sentry-dbid-e6c1f93e-88ed-45cd-af26-ae9597c048e3");
  } catch (e2) {
  }
})();
const _sfc_main = {
  __name: "publicViewLogin",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    useRoute();
    useRouter();
    const nuxtApp = useNuxtApp();
    const { $store, $client, $i18n } = nuxtApp;
    ref($i18n.locale.value);
    const detectedLocale = useState("public-view-login-detected-locale", () => {
      return $i18n.getBrowserLocale() || $i18n.defaultLocale;
    });
    $i18n.locale.value = detectedLocale.value;
    [__temp, __restore] = withAsyncContext(() => $i18n.loadLocaleMessages(detectedLocale.value)), await __temp, __restore();
    useHead({
      title: "Password protected view"
    });
    const loading = ref(false);
    const error = ref({ visible: false, title: "", message: "" });
    const passwordInput = ref(null);
    const values = reactive({ password: "" });
    const rules = {
      values: {
        password: {
          required: helpers.withMessage($i18n.t("error.requiredField"), required)
        }
      }
    };
    const v$ = useVuelidate(rules, { values }, { $lazy: true });
    function fieldHasErrors(fieldName) {
      var _a;
      return ((_a = v$.value.values[fieldName]) == null ? void 0 : _a.$error) || false;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_FormGroup = resolveComponent("FormGroup");
      const _component_FormInput = resolveComponent("FormInput");
      const _component_Button = resolveComponent("Button");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "auth__wrapper" }, _attrs))}><h2 class="auth__head-title">${ssrInterpolate(_ctx.$t("publicViewAuthLogin.title"))}</h2><div>`);
      _push(ssrRenderComponent(unref(Error$1), { error: error.value }, null, _parent));
      _push(`<form>`);
      _push(ssrRenderComponent(_component_FormGroup, {
        "small-label": "",
        required: "",
        "helper-text": _ctx.$t("publicViewAuthLogin.description"),
        error: fieldHasErrors("password"),
        class: "margin-bottom-2"
      }, {
        error: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b;
          if (_push2) {
            _push2(`<span${_scopeId}>${ssrInterpolate((_a = unref(v$).values.password.$errors[0]) == null ? void 0 : _a.$message)}</span>`);
          } else {
            return [
              createVNode("span", null, toDisplayString((_b = unref(v$).values.password.$errors[0]) == null ? void 0 : _b.$message), 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_FormInput, {
              ref_key: "passwordInput",
              ref: passwordInput,
              modelValue: unref(v$).values.password.$model,
              "onUpdate:modelValue": ($event) => unref(v$).values.password.$model = $event,
              size: "large",
              error: fieldHasErrors("password"),
              type: "password"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_FormInput, {
                ref_key: "passwordInput",
                ref: passwordInput,
                modelValue: unref(v$).values.password.$model,
                "onUpdate:modelValue": ($event) => unref(v$).values.password.$model = $event,
                size: "large",
                error: fieldHasErrors("password"),
                type: "password"
              }, null, 8, ["modelValue", "onUpdate:modelValue", "error"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="public-view-auth__actions">`);
      _push(ssrRenderComponent(_component_Button, {
        type: "primary",
        size: "large",
        loading: loading.value,
        disabled: loading.value
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("publicViewAuthLogin.enter"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("publicViewAuthLogin.enter")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></form></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("modules/database/pages/publicViewLogin.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=publicViewLogin-CPro8dth.mjs.map
