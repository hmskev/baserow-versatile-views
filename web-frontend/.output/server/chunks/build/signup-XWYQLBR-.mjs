import { l as useStore, d as useI18n, u as useNuxtApp, f as useAsyncData, n as navigateTo, W as WorkspaceService, g as useHead, h as __nuxt_component_0$2, a as useRuntimeConfig, _ as _export_sfc, k as error, P as PasswordInput, E as EMAIL_VERIFICATION_OPTIONS, R as ResponseErrorMessage, o as passwordValidation, q as nameContainsNoUrl, r as nameIsNotEmail } from './server.mjs';
import { ref, withAsyncContext, computed, resolveComponent, mergeProps, withCtx, createVNode, createTextVNode, toDisplayString, unref, openBlock, createBlock, resolveDynamicComponent, reactive, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderVNode, ssrRenderSlot } from 'vue/server-renderer';
import { useRoute, useRouter } from 'vue-router';
import { useVuelidate } from '@vuelidate/core';
import { required, email, maxLength, minLength } from '@vuelidate/validators';
import { _ as _sfc_main$3 } from './LangPicker-BbiSxP8F.mjs';
import { E as EmailNotVerified, a as LoginButtons, L as LoginActions } from './LoginActions-Dbtv982M.mjs';
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
import './resendEmailVerification-B41zYwUk.mjs';

!(function() {
  try {
    var e = false ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
    var n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "1bd65c8b-6660-4564-968e-921d6d05caeb", e._sentryDebugIdIdentifier = "sentry-dbid-1bd65c8b-6660-4564-968e-921d6d05caeb");
  } catch (e2) {
  }
})();
const _sfc_main$2 = {
  name: "CaptchaWidget",
  props: {
    context: {
      type: String,
      required: true
    }
  },
  emits: ["token"],
  computed: {
    captchaSettings() {
      var _a;
      return ((_a = this.$store.getters["settings/get"]) == null ? void 0 : _a.captcha) || {};
    },
    captchaEnabled() {
      return this.captchaSettings.enabled && Array.isArray(this.captchaSettings.enabled_contexts) && this.captchaSettings.enabled_contexts.includes(this.context) && this.providerComponent !== null;
    },
    providerComponent() {
      const providerType = this.captchaSettings.provider;
      if (!providerType) {
        return null;
      }
      if (!this.$registry.exists("captchaProvider", providerType)) {
        return null;
      }
      return this.$registry.get("captchaProvider", providerType).getComponent();
    }
  },
  methods: {
    onToken(token) {
      this.$emit("token", token);
    },
    reset() {
      if (this.$refs.providerWidget) {
        this.$refs.providerWidget.reset();
      }
      this.$emit("token", "");
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  if ($options.captchaEnabled) {
    _push(`<div${ssrRenderAttrs(mergeProps({ class: "mb-24" }, _attrs))}>`);
    ssrRenderVNode(_push, createVNode(resolveDynamicComponent($options.providerComponent), {
      ref: "providerWidget",
      "captcha-settings": $options.captchaSettings,
      onToken: $options.onToken
    }, null), _parent);
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("modules/core/components/auth/CaptchaWidget.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const CaptchaWidget = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$1 = {
  name: "PasswordRegister",
  components: { PasswordInput, CaptchaWidget },
  mixins: [error],
  props: {
    invitation: {
      required: false,
      validator: (prop) => typeof prop === "object" || prop === null,
      default: null
    },
    template: {
      required: false,
      validator: (prop) => typeof prop === "object" || prop === null,
      default: null
    }
  },
  emits: ["success"],
  setup() {
    const values = reactive({
      account: {
        email: "",
        password: "",
        name: ""
      }
    });
    const rules = computed(() => ({
      account: {
        email: { required, email },
        name: {
          required,
          minLength: minLength(2),
          maxLength: maxLength(60),
          nameIsNotEmail,
          nameContainsNoUrl
        },
        password: passwordValidation
      }
    }));
    return {
      v$: useVuelidate(rules, values, { $lazy: true }),
      account: values.account
    };
  },
  data() {
    return {
      loading: false,
      captchaToken: ""
    };
  },
  computed: {
    registerComponents() {
      return Object.values(this.$registry.getAll("plugin")).map((plugin) => plugin.getRegisterComponent()).filter((component) => component !== null);
    }
  },
  beforeMount() {
    if (this.invitation !== null) {
      this.account.email = this.invitation.email;
    }
  },
  methods: {
    async register() {
      this.v$.$touch();
      let registerComponentsValid = true;
      for (let i = 0; i < this.registerComponents.length; i++) {
        const ref2 = this.$refs[`register-component-${i}`][0];
        if (Object.prototype.hasOwnProperty.call(ref2, "isValid") && !ref2.isValid(this.account)) {
          registerComponentsValid = false;
        }
      }
      if (this.v$.$invalid || !registerComponentsValid) {
        return;
      }
      this.loading = true;
      this.hideError();
      try {
        const values = {
          name: this.account.name,
          email: this.account.email,
          password: this.account.password,
          language: this.$i18n.locale,
          captchaToken: this.captchaToken
        };
        if (this.invitation !== null) {
          values.workspaceInvitationToken = this.$route.query.workspaceInvitationToken;
        }
        if (this.template !== null) {
          values.templateId = this.template.id;
        }
        await this.$store.dispatch("auth/register", values);
        Object.values(this.$registry.getAll("plugin")).forEach((plugin) => {
          plugin.userCreated(this.account, this);
        });
        this.$emit("success", { email: values.email });
      } catch (error2) {
        this.loading = false;
        if (this.$refs.captchaWidget) {
          this.$refs.captchaWidget.reset();
        }
        this.handleError(error2, "signup", {
          ERROR_EMAIL_ALREADY_EXISTS: new ResponseErrorMessage(
            this.$t("error.alreadyExistsTitle"),
            this.$t("error.alreadyExistsMessage")
          ),
          ERROR_DEACTIVATED_USER: new ResponseErrorMessage(
            this.$t("error.disabledAccountTitle"),
            this.$t("error.disabledAccountMessage")
          ),
          ERROR_CAPTCHA_VERIFICATION_FAILED: new ResponseErrorMessage(
            this.$t("error.captchaVerificationFailedTitle"),
            this.$t("error.captchaVerificationFailedMessage")
          )
        });
      }
    },
    onCaptchaToken(token) {
      this.captchaToken = token;
    },
    updatedAccount({ key, value }) {
      this.account[key] = value;
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Alert = resolveComponent("Alert");
  const _component_i18n_t = resolveComponent("i18n-t");
  const _component_Error = resolveComponent("Error");
  const _component_FormGroup = resolveComponent("FormGroup");
  const _component_FormInput = resolveComponent("FormInput");
  const _component_PasswordInput = resolveComponent("PasswordInput");
  const _component_CaptchaWidget = resolveComponent("CaptchaWidget");
  const _component_Button = resolveComponent("Button");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  if ($props.invitation !== null) {
    _push(ssrRenderComponent(_component_Alert, { type: "info-primary" }, {
      title: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(_ctx.$t("invitationTitle"))}`);
        } else {
          return [
            createTextVNode(toDisplayString(_ctx.$t("invitationTitle")), 1)
          ];
        }
      }),
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(ssrRenderComponent(_component_i18n_t, {
            keypath: "invitationMessage",
            tag: "p"
          }, {
            invitedBy: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<strong${_scopeId2}>${ssrInterpolate($props.invitation.invited_by)}</strong>`);
              } else {
                return [
                  createVNode("strong", null, toDisplayString($props.invitation.invited_by), 1)
                ];
              }
            }),
            workspace: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<strong${_scopeId2}>${ssrInterpolate($props.invitation.workspace)}</strong>`);
              } else {
                return [
                  createVNode("strong", null, toDisplayString($props.invitation.workspace), 1)
                ];
              }
            }),
            _: 1
          }, _parent2, _scopeId));
        } else {
          return [
            createVNode(_component_i18n_t, {
              keypath: "invitationMessage",
              tag: "p"
            }, {
              invitedBy: withCtx(() => [
                createVNode("strong", null, toDisplayString($props.invitation.invited_by), 1)
              ]),
              workspace: withCtx(() => [
                createVNode("strong", null, toDisplayString($props.invitation.workspace), 1)
              ]),
              _: 1
            })
          ];
        }
      }),
      _: 1
    }, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(ssrRenderComponent(_component_Error, { error: _ctx.error }, null, _parent));
  _push(`<form>`);
  _push(ssrRenderComponent(_component_FormGroup, {
    "small-label": "",
    label: _ctx.$t("field.emailAddress"),
    error: $setup.v$.account.email.$error,
    required: "",
    class: "mb-24"
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
        if ($props.invitation !== null) {
          _push2(ssrRenderComponent(_component_FormInput, {
            ref: "email",
            modelValue: $setup.account.email,
            "onUpdate:modelValue": ($event) => $setup.account.email = $event,
            type: "email",
            disabled: "",
            placeholder: _ctx.$t("signup.emailPlaceholder")
          }, null, _parent2, _scopeId));
        } else {
          _push2(ssrRenderComponent(_component_FormInput, {
            ref: "email",
            modelValue: $setup.account.email,
            "onUpdate:modelValue": ($event) => $setup.account.email = $event,
            size: "large",
            type: "text",
            autocomplete: "username",
            placeholder: _ctx.$t("signup.emailPlaceholder"),
            error: $setup.v$.account.email.$error,
            onBlur: $setup.v$.account.email.$touch
          }, null, _parent2, _scopeId));
        }
      } else {
        return [
          $props.invitation !== null ? (openBlock(), createBlock(_component_FormInput, {
            key: 0,
            ref: "email",
            modelValue: $setup.account.email,
            "onUpdate:modelValue": ($event) => $setup.account.email = $event,
            type: "email",
            disabled: "",
            placeholder: _ctx.$t("signup.emailPlaceholder")
          }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])) : (openBlock(), createBlock(_component_FormInput, {
            key: 1,
            ref: "email",
            modelValue: $setup.account.email,
            "onUpdate:modelValue": ($event) => $setup.account.email = $event,
            size: "large",
            type: "text",
            autocomplete: "username",
            placeholder: _ctx.$t("signup.emailPlaceholder"),
            error: $setup.v$.account.email.$error,
            onBlur: $setup.v$.account.email.$touch
          }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder", "error", "onBlur"]))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_FormGroup, {
    "small-label": "",
    label: _ctx.$t("field.name"),
    error: $setup.v$.account.name.$error,
    required: "",
    class: "mb-24"
  }, {
    error: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<i class="iconoir-warning-triangle"${_scopeId}></i>`);
        if ($setup.v$.account.name.nameIsNotEmail && $setup.v$.account.name.nameIsNotEmail.$invalid) {
          _push2(`<span${_scopeId}>${ssrInterpolate(_ctx.$t("error.nameCantBeEmail"))}</span>`);
        } else if ($setup.v$.account.name.nameContainsNoUrl && $setup.v$.account.name.nameContainsNoUrl.$invalid) {
          _push2(`<span${_scopeId}>${ssrInterpolate(_ctx.$t("error.nameContainsUrl"))}</span>`);
        } else {
          _push2(`<span${_scopeId}>${ssrInterpolate(_ctx.$t("error.minMaxLength", { min: 2, max: 60 }))}</span>`);
        }
      } else {
        return [
          createVNode("i", { class: "iconoir-warning-triangle" }),
          $setup.v$.account.name.nameIsNotEmail && $setup.v$.account.name.nameIsNotEmail.$invalid ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(_ctx.$t("error.nameCantBeEmail")), 1)) : $setup.v$.account.name.nameContainsNoUrl && $setup.v$.account.name.nameContainsNoUrl.$invalid ? (openBlock(), createBlock("span", { key: 1 }, toDisplayString(_ctx.$t("error.nameContainsUrl")), 1)) : (openBlock(), createBlock("span", { key: 2 }, toDisplayString(_ctx.$t("error.minMaxLength", { min: 2, max: 60 })), 1))
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_FormInput, {
          ref: "name",
          modelValue: $setup.account.name,
          "onUpdate:modelValue": ($event) => $setup.account.name = $event,
          error: $setup.v$.account.name.$error,
          type: "text",
          size: "large",
          placeholder: _ctx.$t("signup.namePlaceholder"),
          onBlur: $setup.v$.account.name.$touch
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_FormInput, {
            ref: "name",
            modelValue: $setup.account.name,
            "onUpdate:modelValue": ($event) => $setup.account.name = $event,
            error: $setup.v$.account.name.$error,
            type: "text",
            size: "large",
            placeholder: _ctx.$t("signup.namePlaceholder"),
            onBlur: $setup.v$.account.name.$touch
          }, null, 8, ["modelValue", "onUpdate:modelValue", "error", "placeholder", "onBlur"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_FormGroup, {
    "small-label": "",
    label: _ctx.$t("field.password"),
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
  _push(`<!--[-->`);
  ssrRenderList($options.registerComponents, (component, index) => {
    ssrRenderVNode(_push, createVNode(resolveDynamicComponent(component), {
      ref_for: true,
      ref: `register-component-${index}`,
      key: index,
      onUpdatedAccount: $options.updatedAccount
    }, null), _parent);
  });
  _push(`<!--]-->`);
  _push(ssrRenderComponent(_component_CaptchaWidget, {
    ref: "captchaWidget",
    context: "signup",
    onToken: $options.onCaptchaToken
  }, null, _parent));
  _push(`<div class="auth__action mt-32 mb-32">`);
  _push(ssrRenderComponent(_component_Button, {
    type: "primary",
    size: "large",
    loading: $data.loading,
    "full-width": "",
    disabled: $data.loading
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(_ctx.$t("action.getStarted"))}`);
      } else {
        return [
          createTextVNode(toDisplayString(_ctx.$t("action.getStarted")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div></form></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("modules/core/components/auth/PasswordRegister.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const PasswordRegister = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "signup",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const store = useStore();
    const route = useRoute();
    const router = useRouter();
    const { t } = useI18n();
    const config = useRuntimeConfig();
    const { $client } = useNuxtApp();
    const displayEmailNotVerified = ref(false);
    const emailToVerify = ref(null);
    const invitationToken = route.query.workspaceInvitationToken;
    const { data: invitation } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData(
      `signup-invitation-${invitationToken || "none"}`,
      async () => {
        if (store.getters["auth/isAuthenticated"]) {
          await navigateTo({ name: "dashboard" });
          return null;
        }
        await store.dispatch("authProvider/fetchLoginOptions");
        if (invitationToken) {
          try {
            const { data } = await WorkspaceService($client).fetchInvitationByToken(
              invitationToken
            );
            return data;
          } catch {
            return null;
          }
        }
        return null;
      }
    )), __temp = await __temp, __restore(), __temp);
    const settings = computed(() => store.getters["settings/get"]);
    computed(
      () => store.getters["authProvider/getAllLoginActions"]
    );
    const loginButtons = computed(
      () => store.getters["authProvider/getAllLoginButtons"]
    );
    const passwordLoginEnabled = computed(
      () => store.getters["authProvider/getPasswordLoginEnabled"]
    );
    const isSignupEnabled = computed(() => {
      var _a;
      return settings.value.allow_new_signups || settings.value.allow_signups_via_workspace_invitations && ((_a = invitation.value) == null ? void 0 : _a.id);
    });
    const shouldShowAdminSignupPage = computed(() => {
      return settings.value.show_admin_signup_page;
    });
    const next = (params) => {
      if (params == null ? void 0 : params.email) {
        emailToVerify.value = params.email;
      }
      if (emailToVerify.value && settings.value.email_verification === EMAIL_VERIFICATION_OPTIONS.ENFORCED && !route.query.workspaceInvitationToken) {
        displayEmailNotVerified.value = true;
      } else {
        router.push({ name: "dashboard" }).then(() => {
          store.dispatch("settings/hideAdminSignupPage");
        });
      }
    };
    useHead({
      title: t("signup.headTitle"),
      link: [
        {
          rel: "canonical",
          href: config.public.publicWebFrontendUrl + router.resolve({ name: "signup" }).href
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0$2;
      const _component_Logo = resolveComponent("Logo");
      const _component_Alert = resolveComponent("Alert");
      const _component_Button = resolveComponent("Button");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "auth__wrapper" }, _attrs))}>`);
      if (displayEmailNotVerified.value) {
        _push(ssrRenderComponent(EmailNotVerified, { email: emailToVerify.value }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (!displayEmailNotVerified.value) {
        _push(`<!--[--><div class="auth__logo">`);
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
        _push(`</div><h1 class="auth__head-title">${ssrInterpolate(_ctx.$t("signup.headTitle"))}</h1><div class="auth__head"><span class="auth__head-text">${ssrInterpolate(_ctx.$t("signup.loginText"))} `);
        _push(ssrRenderComponent(_component_nuxt_link, { to: { name: "login" } }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t("action.login"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("action.login")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</span>`);
        _push(ssrRenderComponent(unref(_sfc_main$3), null, null, _parent));
        _push(`</div>`);
        if (shouldShowAdminSignupPage.value) {
          _push(ssrRenderComponent(_component_Alert, null, {
            title: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(_ctx.$t("signup.requireFirstUser"))}`);
              } else {
                return [
                  createTextVNode(toDisplayString(_ctx.$t("signup.requireFirstUser")), 1)
                ];
              }
            }),
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<p${_scopeId}>${ssrInterpolate(_ctx.$t("signup.requireFirstUserMessage"))}</p>`);
              } else {
                return [
                  createVNode("p", null, toDisplayString(_ctx.$t("signup.requireFirstUserMessage")), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        if (!isSignupEnabled.value) {
          _push(`<!--[-->`);
          _push(ssrRenderComponent(_component_Alert, { type: "error" }, {
            title: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(_ctx.$t("signup.disabled"))}`);
              } else {
                return [
                  createTextVNode(toDisplayString(_ctx.$t("signup.disabled")), 1)
                ];
              }
            }),
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<p${_scopeId}>${ssrInterpolate(_ctx.$t("signup.disabledMessage"))}</p>`);
              } else {
                return [
                  createVNode("p", null, toDisplayString(_ctx.$t("signup.disabledMessage")), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(ssrRenderComponent(_component_Button, {
            tag: "nuxt-link",
            to: { name: "login" },
            "full-width": ""
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
          _push(`<!--]-->`);
        } else {
          _push(`<!--[-->`);
          if (loginButtons.value.length) {
            _push(`<!--[-->`);
            _push(ssrRenderComponent(unref(LoginButtons), {
              invitation: unref(invitation),
              "hide-if-no-buttons": true
            }, null, _parent));
            _push(`<div class="auth__separator">${ssrInterpolate(_ctx.$t("common.or"))}</div><!--]-->`);
          } else {
            _push(`<!---->`);
          }
          if (passwordLoginEnabled.value) {
            _push(ssrRenderComponent(unref(PasswordRegister), {
              invitation: unref(invitation),
              onSuccess: next
            }, null, _parent));
          } else {
            _push(`<!---->`);
          }
          if (!shouldShowAdminSignupPage.value) {
            _push(ssrRenderComponent(unref(LoginActions), { invitation: unref(invitation) }, null, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(`<!--]-->`);
        }
        _push(`<!--]-->`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("modules/core/pages/signup.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=signup-XWYQLBR-.mjs.map
