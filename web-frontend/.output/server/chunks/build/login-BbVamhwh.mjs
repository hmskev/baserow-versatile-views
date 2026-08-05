import { withAsyncContext, computed, mergeProps, unref, resolveComponent, createVNode, resolveDynamicComponent, withCtx, createTextVNode, toDisplayString, openBlock, createBlock, createCommentVNode, nextTick, createSlots, reactive, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderVNode, ssrInterpolate } from 'vue/server-renderer';
import { u as useNuxtApp, c as useRoute, d as useI18n, e as useRouter, n as navigateTo, f as useAsyncData, W as WorkspaceService, g as useHead, a as useRuntimeConfig, _ as _export_sfc, T as TOTPLogin, h as __nuxt_component_0$2, p as pageFinished, i as isRelativeUrl, j as addQueryParamsToRedirectUrl, m as mapGetters, k as error } from './server.mjs';
import { E as EmailNotVerified, L as LoginActions, a as LoginButtons } from './LoginActions-Dbtv982M.mjs';
import { useVuelidate } from '@vuelidate/core';
import { required, email } from '@vuelidate/validators';
import { _ as _sfc_main$3 } from './LangPicker-BbiSxP8F.mjs';
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
import './resendEmailVerification-B41zYwUk.mjs';

!(function() {
  try {
    var e = false ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
    var n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "902467b6-19cc-4d7b-8744-2ddd86a56b76", e._sentryDebugIdIdentifier = "sentry-dbid-902467b6-19cc-4d7b-8744-2ddd86a56b76");
  } catch (e2) {
  }
})();
const _sfc_main$2 = {
  name: "PasswordLogin",
  mixins: [error],
  props: {
    invitation: {
      required: false,
      validator: (prop) => typeof prop === "object" || prop === null,
      default: null
    },
    displayForgotPassword: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  emits: [
    "email-not-verified",
    "success",
    "two-factor-auth",
    "invitation-accepted"
  ],
  setup() {
    const values = reactive({
      values: {
        email: "",
        password: ""
      }
    });
    const rules = {
      values: {
        email: { required, email },
        password: { required }
      }
    };
    return {
      values: values.values,
      v$: useVuelidate(rules, values, { $lazy: true })
    };
  },
  data() {
    return {
      loading: false
    };
  },
  beforeMount() {
    if (this.invitation !== null) {
      this.values.email = this.invitation.email;
    }
  },
  async mounted() {
    if (!this.$config.public.baserowDisablePublicUrlCheck) {
      const publicBackendUrl = new URL(this.$config.public.publicBackendUrl);
      if (publicBackendUrl.hostname !== (void 0).location.hostname) {
        try {
          await this.$client.get("_health/");
        } catch (error2) {
          const publicBackendUrlWithProto = publicBackendUrl.protocol + "//" + publicBackendUrl.host;
          const browserWindowUrl = (void 0).protocol + "//" + (void 0).host;
          this.showError(
            "Backend URL mis-configuration detected",
            `Cannot connect to the backend at ${publicBackendUrlWithProto}. You visited Baserow at ${browserWindowUrl}  which indicates you have mis-configured the Baserow  BASEROW_PUBLIC_URL or PUBLIC_BACKEND_URL environment variables.  Please visit https://baserow.io/docs/tutorials/debugging-connection-issues  on how to fix this error.`
          );
        }
      }
    }
  },
  methods: {
    fieldHasErrors(fieldName) {
      var _a;
      return ((_a = this.v$.values[fieldName]) == null ? void 0 : _a.$error) || false;
    },
    focusOnFirstError() {
      const firstError = this.$el.querySelector("[data-form-error]");
      if (firstError) {
        firstError.scrollIntoView({ behavior: "smooth" });
      }
    },
    async login() {
      var _a, _b, _c, _d;
      this.v$.$touch();
      const formValid = await this.v$.$validate();
      if (!formValid) {
        this.focusOnFirstError();
        return;
      }
      this.loading = true;
      this.hideError();
      try {
        const data = await this.$store.dispatch("auth/login", {
          email: this.values.email,
          password: this.values.password
        });
        if (data.two_factor_auth) {
          this.$emit(
            "two-factor-auth",
            data.two_factor_auth,
            this.values.email,
            data.token
          );
          return;
        }
        let acceptedWorkspace = null;
        if (((_a = this.invitation) == null ? void 0 : _a.email) === this.values.email) {
          const { data: workspace } = await WorkspaceService(
            this.$client
          ).acceptInvitation(this.invitation.id);
          acceptedWorkspace = workspace;
        }
        this.$i18n.setLocale(data.language);
        if (acceptedWorkspace) {
          this.$emit("invitation-accepted", acceptedWorkspace);
        } else {
          this.$emit("success");
        }
      } catch (error2) {
        if (error2.handler) {
          const response = error2.handler.response;
          if (response && response.status === 401) {
            if (((_b = response.data) == null ? void 0 : _b.error) === "ERROR_DEACTIVATED_USER") {
              this.showError(
                this.$t("error.disabledAccountTitle"),
                this.$t("error.disabledAccountMessage")
              );
            } else if (((_c = response.data) == null ? void 0 : _c.error) === "ERROR_AUTH_PROVIDER_DISABLED") {
              this.showError(
                this.$t("clientHandler.disabledPasswordProviderTitle"),
                this.$t("clientHandler.disabledPasswordProviderMessage")
              );
            } else if (((_d = response.data) == null ? void 0 : _d.error) === "ERROR_EMAIL_VERIFICATION_REQUIRED") {
              this.$emit("email-not-verified", this.values.email);
            } else {
              this.showError(
                this.$t("error.incorrectCredentialTitle"),
                this.$t("error.incorrectCredentialMessage")
              );
            }
            this.values.password = "";
            this.v$.$reset();
            this.$refs.password.focus();
          } else {
            const message = error2.handler.getMessage("login");
            this.showError(message);
          }
          this.loading = false;
          error2.handler.handled();
        } else {
          throw error2;
        }
      }
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Alert = resolveComponent("Alert");
  const _component_i18n_t = resolveComponent("i18n-t");
  const _component_Error = resolveComponent("Error");
  const _component_FormGroup = resolveComponent("FormGroup");
  const _component_FormInput = resolveComponent("FormInput");
  const _component_nuxt_link = __nuxt_component_0$2;
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
            tag: "span"
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
              tag: "span"
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
    class: "mb-24",
    required: "",
    "small-label": "",
    label: _ctx.$t("field.emailAddress"),
    error: $options.fieldHasErrors("email")
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
            modelValue: $setup.values.email,
            "onUpdate:modelValue": ($event) => $setup.values.email = $event,
            type: "email",
            size: "large",
            disabled: ""
          }, null, _parent2, _scopeId));
        } else {
          _push2(ssrRenderComponent(_component_FormInput, {
            ref: "email",
            modelValue: $setup.values.email,
            "onUpdate:modelValue": ($event) => $setup.values.email = $event,
            type: "email",
            size: "large",
            error: $options.fieldHasErrors("email"),
            placeholder: _ctx.$t("login.emailPlaceholder"),
            autocomplete: "username",
            onBlur: $setup.v$.values.email.$touch
          }, null, _parent2, _scopeId));
        }
      } else {
        return [
          $props.invitation !== null ? (openBlock(), createBlock(_component_FormInput, {
            key: 0,
            ref: "email",
            modelValue: $setup.values.email,
            "onUpdate:modelValue": ($event) => $setup.values.email = $event,
            type: "email",
            size: "large",
            disabled: ""
          }, null, 8, ["modelValue", "onUpdate:modelValue"])) : (openBlock(), createBlock(_component_FormInput, {
            key: 1,
            ref: "email",
            modelValue: $setup.values.email,
            "onUpdate:modelValue": ($event) => $setup.values.email = $event,
            type: "email",
            size: "large",
            error: $options.fieldHasErrors("email"),
            placeholder: _ctx.$t("login.emailPlaceholder"),
            autocomplete: "username",
            onBlur: $setup.v$.values.email.$touch
          }, null, 8, ["modelValue", "onUpdate:modelValue", "error", "placeholder", "onBlur"]))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_FormGroup, {
    class: "mb-32",
    required: "",
    "small-label": "",
    label: _ctx.$t("field.password"),
    error: $options.fieldHasErrors("password")
  }, createSlots({
    error: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<i class="iconoir-warning-triangle"${_scopeId}></i> ${ssrInterpolate(_ctx.$t("error.passwordRequired"))}`);
      } else {
        return [
          createVNode("i", { class: "iconoir-warning-triangle" }),
          createTextVNode(" " + toDisplayString(_ctx.$t("error.passwordRequired")), 1)
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_FormInput, {
          ref: "password",
          modelValue: $setup.values.password,
          "onUpdate:modelValue": ($event) => $setup.values.password = $event,
          type: "password",
          size: "large",
          error: $options.fieldHasErrors("password"),
          placeholder: _ctx.$t("login.passwordPlaceholder"),
          autocomplete: "current-password",
          onBlur: $setup.v$.values.password.$touch
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_FormInput, {
            ref: "password",
            modelValue: $setup.values.password,
            "onUpdate:modelValue": ($event) => $setup.values.password = $event,
            type: "password",
            size: "large",
            error: $options.fieldHasErrors("password"),
            placeholder: _ctx.$t("login.passwordPlaceholder"),
            autocomplete: "current-password",
            onBlur: $setup.v$.values.password.$touch
          }, null, 8, ["modelValue", "onUpdate:modelValue", "error", "placeholder", "onBlur"])
        ];
      }
    }),
    _: 2
  }, [
    $props.displayForgotPassword ? {
      name: "after-label",
      fn: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(ssrRenderComponent(_component_nuxt_link, {
            tabindex: "3",
            to: { name: "forgot-password" }
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`${ssrInterpolate(_ctx.$t("login.forgotPassword"))}`);
              } else {
                return [
                  createTextVNode(toDisplayString(_ctx.$t("login.forgotPassword")), 1)
                ];
              }
            }),
            _: 1
          }, _parent2, _scopeId));
        } else {
          return [
            createVNode(_component_nuxt_link, {
              tabindex: "3",
              to: { name: "forgot-password" }
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(_ctx.$t("login.forgotPassword")), 1)
              ]),
              _: 1
            })
          ];
        }
      }),
      key: "0"
    } : void 0
  ]), _parent));
  _push(`<div class="auth__action mb-32">`);
  _push(ssrRenderComponent(_component_Button, {
    type: "primary",
    size: "large",
    loading: $data.loading,
    "full-width": "",
    disabled: $data.loading
  }, {
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
  _push(`</div></form></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("modules/core/components/auth/PasswordLogin.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const PasswordLogin = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$1 = {
  components: {
    TOTPLogin,
    PasswordLogin,
    LoginButtons,
    LangPicker: _sfc_main$3,
    LoginActions,
    EmailNotVerified
  },
  props: {
    original: {
      type: String,
      required: false,
      default: null
    },
    redirectOnSuccess: {
      type: Boolean,
      required: false,
      default: true
    },
    displayHeader: {
      type: Boolean,
      required: false,
      default: true
    },
    invitation: {
      required: false,
      validator: (prop) => typeof prop === "object" || prop === null,
      default: null
    },
    loginButtonsCompact: {
      type: Boolean,
      required: false,
      default: false
    },
    redirectByDefault: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  emits: ["success"],
  setup() {
    const nuxtApp = useNuxtApp();
    return { nuxtApp };
  },
  data() {
    return {
      passwordLoginHiddenIfDisabled: true,
      displayEmailNotVerified: false,
      emailToVerify: null,
      twoFactorComponent: null,
      twoFactorRequired: false,
      twoFactorEmail: null,
      twoFaToken: null
    };
  },
  computed: {
    ...mapGetters({
      settings: "settings/get",
      loginActions: "authProvider/getAllLoginActions",
      loginButtons: "authProvider/getAllLoginButtons",
      passwordLoginEnabled: "authProvider/getPasswordLoginEnabled"
    }),
    computedOriginal() {
      let original = this.original;
      if (!original) {
        original = this.$route.query.original;
      }
      return original;
    },
    passwordLoginHidden() {
      return this.passwordLoginHiddenIfDisabled && !this.passwordLoginEnabled;
    },
    defaultRedirectUrl() {
      return this.$store.getters["authProvider/getDefaultRedirectUrl"];
    }
  },
  mounted() {
    if (this.redirectByDefault) {
      if (this.defaultRedirectUrl !== null) {
        const { workspaceInvitationToken } = this.$route.query;
        const url = addQueryParamsToRedirectUrl(this.defaultRedirectUrl, {
          original: this.computedOriginal,
          workspaceInvitationToken
        });
        (void 0).location = url;
      }
    }
  },
  methods: {
    async success() {
      if (this.redirectOnSuccess) {
        const original = this.computedOriginal;
        if (original && isRelativeUrl(original)) {
          await this.$router.push(original);
        } else {
          await this.$router.push({ name: "dashboard" });
        }
        await pageFinished(this.nuxtApp);
        await nextTick();
      }
      this.$emit("success");
    },
    async invitationAccepted(workspace) {
      if (this.redirectOnSuccess) {
        this.$store.commit("workspace/SET_LOADED", false);
        this.$store.commit("application/SET_LOADED", false);
        await this.$router.push({
          name: "workspace",
          params: { workspaceId: workspace.id }
        });
        await pageFinished(this.nuxtApp);
        await nextTick();
      }
      this.$emit("success");
    },
    emailNotVerified(email2) {
      this.displayEmailNotVerified = true;
      this.emailToVerify = email2;
    },
    setTwoFactorRequired(type, email2, token) {
      const twoFaType = this.$registry.get("twoFactorAuth", type);
      this.twoFactorComponent = twoFaType.loginComponent;
      this.twoFactorRequired = true;
      this.twoFactorEmail = email2;
      this.twoFaToken = token;
    },
    twoFactorExpired() {
      this.twoFaToken = null;
      this.twoFactorRequired = false;
      this.twoFactorComponent = null;
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_EmailNotVerified = resolveComponent("EmailNotVerified");
  const _component_NuxtLink = __nuxt_component_0$2;
  const _component_Logo = resolveComponent("Logo");
  const _component_LangPicker = resolveComponent("LangPicker");
  const _component_LoginButtons = resolveComponent("LoginButtons");
  const _component_PasswordLogin = resolveComponent("PasswordLogin");
  const _component_LoginActions = resolveComponent("LoginActions");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  if ($data.twoFactorRequired) {
    ssrRenderVNode(_push, createVNode(resolveDynamicComponent($data.twoFactorComponent), {
      email: $data.twoFactorEmail,
      token: $data.twoFaToken,
      onSuccess: $options.success,
      onExpired: $options.twoFactorExpired
    }, null), _parent);
  } else if ($data.displayEmailNotVerified) {
    _push(ssrRenderComponent(_component_EmailNotVerified, { email: $data.emailToVerify }, null, _parent));
  } else {
    _push(`<!--[-->`);
    if ($props.displayHeader) {
      _push(`<div><div class="auth__logo">`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: { name: "index" } }, {
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
      _push(`</div><h1 class="auth__head-title">${ssrInterpolate(_ctx.$t("login.title"))}</h1><div class="auth__head">`);
      if (_ctx.settings.allow_new_signups) {
        _push(`<span class="auth__head-text">${ssrInterpolate(_ctx.$t("login.signUpText"))} `);
        _push(ssrRenderComponent(_component_NuxtLink, { to: { name: "signup" } }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t("login.signUp"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("login.signUp")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_LangPicker, { class: "margin-left-auto" }, null, _parent));
      _push(`</div></div>`);
    } else {
      _push(`<!---->`);
    }
    if ($props.redirectByDefault && $options.defaultRedirectUrl) {
      _push(`<div>${ssrInterpolate(_ctx.$t("login.redirecting"))}</div>`);
    } else {
      _push(`<div>`);
      if (!$options.passwordLoginHidden && _ctx.loginButtons.length) {
        _push(`<!--[-->`);
        _push(ssrRenderComponent(_component_LoginButtons, {
          "hide-if-no-buttons": $props.loginButtonsCompact,
          invitation: $props.invitation,
          original: $props.original
        }, null, _parent));
        _push(`<div class="auth__separator">${ssrInterpolate(_ctx.$t("common.or"))}</div><!--]-->`);
      } else {
        _push(`<!---->`);
      }
      if (!$options.passwordLoginHidden) {
        _push(ssrRenderComponent(_component_PasswordLogin, {
          invitation: $props.invitation,
          "display-forgot-password": _ctx.settings.allow_reset_password && !$options.passwordLoginHidden,
          onSuccess: $options.success,
          onInvitationAccepted: $options.invitationAccepted,
          onTwoFactorAuth: $options.setTwoFactorRequired,
          onEmailNotVerified: $options.emailNotVerified
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_LoginActions, {
        invitation: $props.invitation,
        original: $props.original
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if ($options.passwordLoginHidden) {
              _push2(`<li class="auth__action-link"${_scopeId}><a${_scopeId}>${ssrInterpolate(_ctx.$t("login.displayPasswordLogin"))}</a></li>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              $options.passwordLoginHidden ? (openBlock(), createBlock("li", {
                key: 0,
                class: "auth__action-link"
              }, [
                createVNode("a", {
                  onClick: ($event) => $data.passwordLoginHiddenIfDisabled = false
                }, toDisplayString(_ctx.$t("login.displayPasswordLogin")), 9, ["onClick"])
              ])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    }
    _push(`<!--]-->`);
  }
  _push(`</div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("modules/core/components/auth/Login.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Login = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "login",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { $store: store, $client } = useNuxtApp();
    const route = useRoute();
    const app = useNuxtApp();
    const i18n = useI18n();
    const config = useRuntimeConfig();
    const router = useRouter();
    if (store.getters["settings/get"].show_admin_signup_page === true) {
      [__temp, __restore] = withAsyncContext(() => navigateTo({ name: "signup" })), await __temp, __restore();
    } else if (store.getters["auth/isAuthenticated"]) {
      [__temp, __restore] = withAsyncContext(() => navigateTo({ name: "dashboard" })), await __temp, __restore();
    }
    const invitationToken = route.query.workspaceInvitationToken;
    const { data } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData(
      `loginData-${invitationToken || "none"}`,
      async () => {
        await store.dispatch("authProvider/fetchLoginOptions");
        let invitation2 = null;
        if (invitationToken) {
          try {
            const { data: data2 } = await WorkspaceService(
              app.$client
            ).fetchInvitationByToken(invitationToken);
            invitation2 = data2;
          } catch {
          }
        }
        return { invitation: invitation2 };
      }
    )), __temp = await __temp, __restore(), __temp);
    useHead({
      title: i18n.t("login.title"),
      link: [
        {
          rel: "canonical",
          href: config.public.publicWebFrontendUrl + router.resolve({ name: "login" }).href
        }
      ]
    });
    const redirectByDefault = computed(() => {
      return !(route.query.noredirect === null);
    });
    const invitation = computed(() => {
      var _a;
      return ((_a = data.value) == null ? void 0 : _a.invitation) || null;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "auth__wrapper" }, _attrs))}>`);
      _push(ssrRenderComponent(unref(Login), {
        "display-header": true,
        "redirect-on-success": true,
        invitation: unref(invitation),
        "redirect-by-default": unref(redirectByDefault)
      }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("modules/core/pages/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=login-BbVamhwh.mjs.map
