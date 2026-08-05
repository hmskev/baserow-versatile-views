import { _ as _export_sfc, k as error, P as PasswordInput, h as __nuxt_component_0$2, A as AuthService, R as ResponseErrorMessage, m as mapGetters, o as passwordValidation, d as useI18n, e as useRouter, g as useHead, a as useRuntimeConfig } from './server.mjs';
import { sameAs } from '@vuelidate/validators';
import { useVuelidate } from '@vuelidate/core';
import { resolveComponent, mergeProps, withCtx, createVNode, toDisplayString, createTextVNode, reactive, computed, useSSRContext } from 'vue';
import { _ as _sfc_main$1 } from './LangPicker-BbiSxP8F.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
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
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "df97c7c6-55ad-4282-bd68-7ddb212ab7a1", e._sentryDebugIdIdentifier = "sentry-dbid-df97c7c6-55ad-4282-bd68-7ddb212ab7a1");
  } catch (e2) {
  }
})();
const _sfc_main = {
  components: { LangPicker: _sfc_main$1, PasswordInput },
  mixins: [error],
  layout: "login",
  setup() {
    const values = reactive({
      account: {
        password: "",
        passwordConfirm: ""
      }
    });
    const rules = computed(() => ({
      account: {
        password: passwordValidation,
        passwordConfirm: {
          sameAsPassword: sameAs(values.account.password)
        }
      }
    }));
    const { t } = useI18n();
    const config = useRuntimeConfig();
    const router = useRouter();
    useHead({
      title: t("resetPassword.title"),
      link: [
        {
          rel: "canonical",
          href: config.public.publicWebFrontendUrl + router.resolve({ name: "reset-password" }).href
        }
      ]
    });
    return {
      v$: useVuelidate(rules, values, { $lazy: true }),
      account: values.account
    };
  },
  data() {
    return {
      loading: false,
      success: false
    };
  },
  computed: {
    ...mapGetters({
      settings: "settings/get"
    })
  },
  methods: {
    async resetPassword() {
      const isFormCorrect = await this.v$.$validate();
      if (!isFormCorrect) return;
      this.loading = true;
      this.hideError();
      try {
        const token = this.$route.params.token;
        await AuthService(this.$client).resetPassword(
          token,
          this.account.password
        );
        this.success = true;
        this.loading = false;
      } catch (error2) {
        this.loading = false;
        this.handleError(error2, "resetPassword", {
          BAD_TOKEN_SIGNATURE: new ResponseErrorMessage(
            this.$t("resetPassword.errorInvalidLinkTitle"),
            this.$t("resetPassword.errorInvalidLinkMessage")
          ),
          EXPIRED_TOKEN_SIGNATURE: new ResponseErrorMessage(
            this.$t("resetPassword.errorLinkExpiredTitle"),
            this.$t("resetPassword.errorLinkExpiredMessage")
          ),
          ERROR_RESET_PASSWORD_TOKEN_USED: new ResponseErrorMessage(
            this.$t("resetPassword.errorLinkAlreadyUsedTitle"),
            this.$t("resetPassword.errorLinkAlreadyUsedMessage")
          )
        });
      }
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0$2;
  const _component_Logo = resolveComponent("Logo");
  const _component_LangPicker = resolveComponent("LangPicker");
  const _component_Alert = resolveComponent("Alert");
  const _component_Error = resolveComponent("Error");
  const _component_FormGroup = resolveComponent("FormGroup");
  const _component_PasswordInput = resolveComponent("PasswordInput");
  const _component_FormInput = resolveComponent("FormInput");
  const _component_Button = resolveComponent("Button");
  const _component_ButtonIcon = resolveComponent("ButtonIcon");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "auth__wrapper" }, _attrs))}>`);
  if (!$data.success) {
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
    _push(`</div><div class="auth__head auth__head-title"><h1>${ssrInterpolate(_ctx.$t("resetPassword.title"))}</h1>`);
    _push(ssrRenderComponent(_component_LangPicker, null, null, _parent));
    _push(`</div>`);
    if (!_ctx.settings.allow_reset_password) {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_Alert, { type: "error" }, {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("resetPassword.disabled"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("resetPassword.disabled")), 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p${_scopeId}>${ssrInterpolate(_ctx.$t("resetPassword.disabledMessage"))}</p>`);
          } else {
            return [
              createVNode("p", null, toDisplayString(_ctx.$t("resetPassword.disabledMessage")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: { name: "login" },
        class: "button button--full-width"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<i class="iconoir-arrow-left"${_scopeId}></i> ${ssrInterpolate(_ctx.$t("action.backToLogin"))}`);
          } else {
            return [
              createVNode("i", { class: "iconoir-arrow-left" }),
              createTextVNode(" " + toDisplayString(_ctx.$t("action.backToLogin")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    } else {
      _push(`<div>`);
      _push(ssrRenderComponent(_component_Error, { error: _ctx.error }, null, _parent));
      _push(`<form>`);
      _push(ssrRenderComponent(_component_FormGroup, {
        "small-label": "",
        label: _ctx.$t("resetPassword.newPassword"),
        required: "",
        class: "mb-24"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_PasswordInput, {
              modelValue: $setup.account.password,
              "onUpdate:modelValue": ($event) => $setup.account.password = $event,
              "validation-state": $setup.v$.account.password,
              placeholder: _ctx.$t("signup.passwordPlaceholder"),
              "error-placeholder-class": "auth__control-error",
              "show-error-icon": true
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_PasswordInput, {
                modelValue: $setup.account.password,
                "onUpdate:modelValue": ($event) => $setup.account.password = $event,
                "validation-state": $setup.v$.account.password,
                placeholder: _ctx.$t("signup.passwordPlaceholder"),
                "error-placeholder-class": "auth__control-error",
                "show-error-icon": true
              }, null, 8, ["modelValue", "onUpdate:modelValue", "validation-state", "placeholder"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_FormGroup, {
        "small-label": "",
        label: _ctx.$t("resetPassword.repeatNewPassword"),
        required: "",
        class: "mb-32",
        error: $setup.v$.account.passwordConfirm.$error
      }, {
        error: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("error.notMatchingPassword"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("error.notMatchingPassword")), 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_FormInput, {
              modelValue: $setup.account.passwordConfirm,
              "onUpdate:modelValue": ($event) => $setup.account.passwordConfirm = $event,
              error: $setup.v$.account.passwordConfirm.$error,
              type: "password",
              size: "large",
              placeholder: _ctx.$t("resetPassword.repeatPasswordPlaceholder"),
              onBlur: $setup.v$.account.passwordConfirm.$touch
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_FormInput, {
                modelValue: $setup.account.passwordConfirm,
                "onUpdate:modelValue": ($event) => $setup.account.passwordConfirm = $event,
                error: $setup.v$.account.passwordConfirm.$error,
                type: "password",
                size: "large",
                placeholder: _ctx.$t("resetPassword.repeatPasswordPlaceholder"),
                onBlur: $setup.v$.account.passwordConfirm.$touch
              }, null, 8, ["modelValue", "onUpdate:modelValue", "error", "placeholder", "onBlur"])
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
        loading: $data.loading,
        disabled: $data.loading || $data.success
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("resetPassword.submit"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("resetPassword.submit")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div><ul class="auth__action-links"><li class="auth__action-link">`);
      _push(ssrRenderComponent(_component_nuxt_link, { to: { name: "login" } }, {
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
      _push(`</li></ul></div></form></div>`);
    }
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  if ($data.success) {
    _push(`<div class="auth__wrapper auth__wrapper--small-centered">`);
    _push(ssrRenderComponent(_component_ButtonIcon, { icon: "iconoir-check" }, null, _parent));
    _push(`<h2>${ssrInterpolate(_ctx.$t("resetPassword.changed"))}</h2><p>${ssrInterpolate(_ctx.$t("resetPassword.message"))}</p>`);
    _push(ssrRenderComponent(_component_Button, {
      tag: "nuxt-link",
      to: { name: "login" },
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
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("modules/core/pages/resetPassword.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const resetPassword = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { resetPassword as default };
//# sourceMappingURL=resetPassword-DhAzu-jT.mjs.map
