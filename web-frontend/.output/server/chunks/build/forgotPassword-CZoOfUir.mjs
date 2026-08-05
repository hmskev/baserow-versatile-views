import { d as useI18n, l as useStore, e as useRouter, u as useNuxtApp, g as useHead, h as __nuxt_component_0$2, a as useRuntimeConfig } from './server.mjs';
import { ref, reactive, computed, resolveComponent, mergeProps, withCtx, createVNode, unref, toDisplayString, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { email, required } from '@vuelidate/validators';
import { useVuelidate } from '@vuelidate/core';
import { _ as _sfc_main$1 } from './LangPicker-BbiSxP8F.mjs';
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
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "72eb8016-217e-4a5c-bf8f-d31822b4f217", e._sentryDebugIdIdentifier = "sentry-dbid-72eb8016-217e-4a5c-bf8f-d31822b4f217");
  } catch (e2) {
  }
})();
const _sfc_main = {
  __name: "forgotPassword",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    const store = useStore();
    const config = useRuntimeConfig();
    const router = useRouter();
    useNuxtApp().$client;
    const loading = ref(false);
    const success = ref(false);
    const error = ref({
      visible: false,
      title: "",
      message: ""
    });
    const formData = reactive({
      email: ""
    });
    const rules = {
      email: { required, email }
    };
    const v$ = useVuelidate(rules, formData, { $lazy: true });
    const settings = computed(() => store.getters["settings/get"]);
    const fieldHasErrors = (field) => {
      return v$.value[field].$error;
    };
    useHead({
      title: t("forgotPassword.title"),
      link: [
        {
          rel: "canonical",
          href: config.public.publicWebFrontendUrl + router.resolve({ name: "forgot-password" }).href
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0$2;
      const _component_Logo = resolveComponent("Logo");
      const _component_Alert = resolveComponent("Alert");
      const _component_Button = resolveComponent("Button");
      const _component_Error = resolveComponent("Error");
      const _component_FormGroup = resolveComponent("FormGroup");
      const _component_FormInput = resolveComponent("FormInput");
      const _component_ButtonIcon = resolveComponent("ButtonIcon");
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["auth__wrapper", { "auth__wrapper--small-centered": success.value }]
      }, _attrs))}>`);
      if (!success.value) {
        _push(`<div><div class="auth__logo">`);
        _push(ssrRenderComponent(_component_nuxt_link, { to: { name: "index" } }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_Logo, null, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_Logo)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div class="auth__head auth__head-title"><h1 class="margin-bottom-0">${ssrInterpolate(_ctx.$t("forgotPassword.title"))}</h1>`);
        _push(ssrRenderComponent(unref(_sfc_main$1), null, null, _parent));
        _push(`</div>`);
        if (!settings.value.allow_reset_password) {
          _push(`<!--[-->`);
          _push(ssrRenderComponent(_component_Alert, { type: "error" }, {
            title: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(_ctx.$t("forgotPassword.disabled"))}`);
              } else {
                return [
                  createTextVNode(toDisplayString(_ctx.$t("forgotPassword.disabled")), 1)
                ];
              }
            }),
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<p${_scopeId}>${ssrInterpolate(_ctx.$t("forgotPassword.disabledMessage"))}</p>`);
              } else {
                return [
                  createVNode("p", null, toDisplayString(_ctx.$t("forgotPassword.disabledMessage")), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(ssrRenderComponent(_component_nuxt_link, { to: { name: "login" } }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_Button, null, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(_ctx.$t("action.backToLogin"))}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(_ctx.$t("action.backToLogin")), 1)
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                return [
                  createVNode(_component_Button, null, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("action.backToLogin")), 1)
                    ]),
                    _: 1
                  })
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`<!--]-->`);
        } else {
          _push(`<div><p class="auth__head-text">${ssrInterpolate(_ctx.$t("forgotPassword.message"))}</p>`);
          _push(ssrRenderComponent(_component_Error, { error: error.value }, null, _parent));
          _push(`<form>`);
          _push(ssrRenderComponent(_component_FormGroup, {
            "small-label": "",
            label: _ctx.$t("field.emailAddress"),
            required: "",
            error: fieldHasErrors("email"),
            class: "mb-32"
          }, {
            error: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<i class="iconoir-warning-triangle"${_scopeId}></i> ${ssrInterpolate(_ctx.$t("error.invalidEmail"))}`);
              } else {
                return [
                  createVNode("i", { class: "iconoir-warning-triangle" }),
                  createTextVNode(" " + toDisplayString(_ctx.$t("error.invalidEmail")), 1)
                ];
              }
            }),
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_FormInput, {
                  modelValue: formData.email,
                  "onUpdate:modelValue": ($event) => formData.email = $event,
                  error: fieldHasErrors("email"),
                  disabled: success.value,
                  size: "large",
                  onBlur: unref(v$).email.$touch
                }, null, _parent2, _scopeId));
              } else {
                return [
                  createVNode(_component_FormInput, {
                    modelValue: formData.email,
                    "onUpdate:modelValue": ($event) => formData.email = $event,
                    error: fieldHasErrors("email"),
                    disabled: success.value,
                    size: "large",
                    onBlur: unref(v$).email.$touch
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "error", "disabled", "onBlur"])
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`<div class="auth__action mb-32">`);
          _push(ssrRenderComponent(_component_Button, {
            type: "primary",
            "full-width": "",
            size: "large",
            loading: loading.value,
            disabled: loading.value || success.value
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(_ctx.$t("forgotPassword.submit"))}`);
              } else {
                return [
                  createTextVNode(toDisplayString(_ctx.$t("forgotPassword.submit")), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`</div><div><ul class="auth__action-links"><li class="auth__action-link">`);
          _push(ssrRenderComponent(_component_nuxt_link, { to: { name: "login" } }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(_ctx.$t("forgotPassword.goBack"))}`);
              } else {
                return [
                  createTextVNode(toDisplayString(_ctx.$t("forgotPassword.goBack")), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`</li></ul></div></form></div>`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (success.value) {
        _push(`<div class="auth__wrapper auth__wrapper--small-centered">`);
        _push(ssrRenderComponent(_component_ButtonIcon, {
          icon: "iconoir-mail",
          type: "secondary"
        }, null, _parent));
        _push(`<h2>${ssrInterpolate(_ctx.$t("forgotPassword.confirmationTitle"))}</h2><p>${ssrInterpolate(_ctx.$t("forgotPassword.confirmation", { email: formData.email }))}</p>`);
        _push(ssrRenderComponent(_component_Button, {
          tag: "nuxt-link",
          to: { name: "login" },
          type: "primary",
          size: "large"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t("action.backToLogin"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("action.backToLogin")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("modules/core/pages/forgotPassword.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=forgotPassword-CZoOfUir.mjs.map
