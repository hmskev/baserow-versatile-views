import { r as resendEmailVerification } from './resendEmailVerification-B41zYwUk.mjs';
import { resolveComponent, mergeProps, withCtx, createTextVNode, toDisplayString, createVNode, resolveDynamicComponent, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderVNode, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _export_sfc, i as isRelativeUrl, m as mapGetters, u as useNuxtApp } from './server.mjs';

!(function() {
  try {
    var e = false ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
    var n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "d6a76ec9-8788-4ca2-bda3-d63da76c3714", e._sentryDebugIdIdentifier = "sentry-dbid-d6a76ec9-8788-4ca2-bda3-d63da76c3714");
  } catch (e2) {
  }
})();
const _sfc_main$2 = {
  mixins: [resendEmailVerification],
  props: {
    email: {
      type: String,
      required: true
    }
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ButtonIcon = resolveComponent("ButtonIcon");
  const _component_Button = resolveComponent("Button");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "auth__wrapper" }, _attrs))}><div class="auth__wrapper auth__wrapper--small-centered">`);
  _push(ssrRenderComponent(_component_ButtonIcon, { icon: "iconoir-mail-out" }, null, _parent));
  _push(`<p>${ssrInterpolate(_ctx.$t("emailNotVerified.description"))}</p>`);
  _push(ssrRenderComponent(_component_Button, {
    type: "secondary",
    size: "large",
    disabled: _ctx.resendLoading || _ctx.resendSuccess,
    loading: _ctx.resendLoading,
    onClick: ($event) => _ctx.resend($props.email)
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(_ctx.$t("emailNotVerified.resend"))}`);
      } else {
        return [
          createTextVNode(toDisplayString(_ctx.$t("emailNotVerified.resend")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("modules/core/components/auth/EmailNotVerified.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const EmailNotVerified = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = {
  name: "LoginButtons",
  props: {
    original: {
      type: String,
      required: false,
      default: null
    },
    hideIfNoButtons: {
      type: Boolean,
      default: false
    },
    invitation: {
      required: false,
      validator: (prop) => typeof prop === "object" || prop === null,
      default: null
    }
  },
  setup() {
    const { $registry } = useNuxtApp();
    return { $registry };
  },
  computed: {
    ...mapGetters({
      loginButtons: "authProvider/getAllLoginButtons"
    }),
    showSmallLoginButtons() {
      return this.loginButtons.length > 2;
    },
    computedOriginal() {
      let original = this.original;
      if (!original) {
        original = this.$route.query.original;
      }
      return original;
    }
  },
  methods: {
    getLoginButtonComponent(loginButton) {
      return this.$registry.get("authProvider", loginButton.type).getLoginButtonComponent();
    },
    getLoginButtonIcon(loginButton) {
      return this.$registry.get("authProvider", loginButton.type).getIcon();
    },
    addOriginalParamToUrl(url) {
      const original = this.computedOriginal;
      if (original && isRelativeUrl(original)) {
        const parsedUrl = new URL(url);
        parsedUrl.searchParams.append("original", original);
        return parsedUrl.toString();
      } else {
        return url;
      }
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: ["auth-provider-buttons", {
      "auth-provider-buttons--small": $options.showSmallLoginButtons,
      "auth-provider-buttons__no-buttons": _ctx.loginButtons.length === 0,
      "auth-provider-buttons__no-buttons--hide": _ctx.loginButtons.length === 0 && $props.hideIfNoButtons === true
    }]
  }, _attrs))}><!--[-->`);
  ssrRenderList(_ctx.loginButtons, (loginButton) => {
    ssrRenderVNode(_push, createVNode(resolveDynamicComponent($options.getLoginButtonComponent(loginButton)), {
      "redirect-url": $options.addOriginalParamToUrl(loginButton.redirect_url),
      name: loginButton.name,
      icon: $options.getLoginButtonIcon(loginButton),
      small: $options.showSmallLoginButtons,
      invitation: $props.invitation
    }, null), _parent);
  });
  _push(`<!--]--></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("modules/core/components/auth/LoginButtons.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const LoginButtons = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  props: {
    invitation: {
      required: false,
      validator: (prop) => typeof prop === "object" || prop === null,
      default: null
    },
    original: {
      type: String,
      required: false,
      default: null
    }
  },
  computed: {
    ...mapGetters({
      loginActions: "authProvider/getAllLoginActions"
    }),
    computedOriginal() {
      let original = this.original;
      if (!original) {
        original = this.$route.query.original;
      }
      return original;
    }
  },
  methods: {
    getLoginActionComponent(loginAction) {
      return this.$registry.get("authProvider", loginAction.type).getLoginActionComponent();
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<ul${ssrRenderAttrs(mergeProps({ class: "auth__action-links" }, _attrs))}><!--[-->`);
  ssrRenderList(_ctx.loginActions, (loginAction) => {
    _push(`<li class="auth__action-link">`);
    ssrRenderVNode(_push, createVNode(resolveDynamicComponent($options.getLoginActionComponent(loginAction)), {
      options: loginAction,
      invitation: $props.invitation,
      original: $options.computedOriginal
    }, null), _parent);
    _push(`</li>`);
  });
  _push(`<!--]-->`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</ul>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("modules/core/components/auth/LoginActions.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const LoginActions = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { EmailNotVerified as E, LoginActions as L, LoginButtons as a };
//# sourceMappingURL=LoginActions-Dbtv982M.mjs.map
