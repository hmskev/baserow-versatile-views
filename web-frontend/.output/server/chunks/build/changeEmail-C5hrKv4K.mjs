import { _ as _export_sfc, k as error, h as __nuxt_component_0$2, A as AuthService, R as ResponseErrorMessage, d as useI18n, g as useHead } from './server.mjs';
import { resolveComponent, mergeProps, withCtx, createVNode, createTextVNode, toDisplayString, useSSRContext } from 'vue';
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
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "09d64d1f-9ea9-43b4-80d0-40db1741e492", e._sentryDebugIdIdentifier = "sentry-dbid-09d64d1f-9ea9-43b4-80d0-40db1741e492");
  } catch (e2) {
  }
})();
const _sfc_main = {
  components: { LangPicker: _sfc_main$1 },
  mixins: [error],
  setup() {
    const { t } = useI18n();
    useHead({
      title: t("changeEmail.title")
    });
  },
  data() {
    return {
      loading: false,
      success: false
    };
  },
  methods: {
    async confirmEmailChange() {
      this.loading = true;
      this.hideError();
      try {
        const token = this.$route.params.token;
        await AuthService(this.$client).changeEmail(token);
        this.success = true;
        this.loading = false;
      } catch (error2) {
        this.loading = false;
        this.handleError(error2, "changeEmail", {
          BAD_TOKEN_SIGNATURE: new ResponseErrorMessage(
            this.$t("changeEmail.errorInvalidLinkTitle"),
            this.$t("changeEmail.errorInvalidLinkMessage")
          ),
          EXPIRED_TOKEN_SIGNATURE: new ResponseErrorMessage(
            this.$t("changeEmail.errorLinkExpiredTitle"),
            this.$t("changeEmail.errorLinkExpiredMessage")
          ),
          ERROR_EMAIL_ALREADY_EXISTS: new ResponseErrorMessage(
            this.$t("changeEmail.errorEmailExistsTitle"),
            this.$t("changeEmail.errorEmailExistsMessage")
          ),
          ERROR_EMAIL_ALREADY_CHANGED: new ResponseErrorMessage(
            this.$t("changeEmail.errorEmailAlreadyChangedTitle"),
            this.$t("changeEmail.errorEmailAlreadyChangedMessage")
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
  const _component_Error = resolveComponent("Error");
  const _component_Button = resolveComponent("Button");
  const _component_ButtonIcon = resolveComponent("ButtonIcon");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "auth__wrapper" }, _attrs))}>`);
  if (!$data.success) {
    _push(`<div><div class="auth__logo">`);
    _push(ssrRenderComponent(_component_nuxt_link, {
      to: { name: "index" },
      custom: ""
    }, {
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
    _push(`</div><div class="auth__head auth__head-title"><h1>${ssrInterpolate(_ctx.$t("changeEmail.title"))}</h1>`);
    _push(ssrRenderComponent(_component_LangPicker, null, null, _parent));
    _push(`</div><div>`);
    _push(ssrRenderComponent(_component_Error, { error: _ctx.error }, null, _parent));
    _push(`<div class="auth__action mb-32">`);
    _push(ssrRenderComponent(_component_Button, {
      type: "primary",
      "full-width": "",
      size: "large",
      loading: $data.loading,
      disabled: $data.loading || $data.success,
      onClick: $options.confirmEmailChange
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(_ctx.$t("changeEmail.submit"))}`);
        } else {
          return [
            createTextVNode(toDisplayString(_ctx.$t("changeEmail.submit")), 1)
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
    _push(`</li></ul></div></div></div>`);
  } else {
    _push(`<!---->`);
  }
  if ($data.success) {
    _push(`<div class="auth__wrapper auth__wrapper--small-centered">`);
    _push(ssrRenderComponent(_component_ButtonIcon, { icon: "iconoir-check" }, null, _parent));
    _push(`<h2>${ssrInterpolate(_ctx.$t("changeEmail.changed"))}</h2><p>${ssrInterpolate(_ctx.$t("changeEmail.message"))}</p>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("modules/core/pages/changeEmail.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const changeEmail = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { changeEmail as default };
//# sourceMappingURL=changeEmail-C5hrKv4K.mjs.map
