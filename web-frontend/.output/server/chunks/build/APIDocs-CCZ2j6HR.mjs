import { u as useNuxtApp, g as useHead, h as __nuxt_component_0$2, al as SettingsModal } from './server.mjs';
import { computed, resolveComponent, mergeProps, unref, withCtx, createVNode, withModifiers, toDisplayString, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { A as APIDocsSelectDatabase } from './APIDocsSelectDatabase-C7qPLxWa.mjs';
import { useRouter } from 'vue-router';
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
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "1b4133a3-6927-4ee1-a11e-37fa8b5b6307", e._sentryDebugIdIdentifier = "sentry-dbid-1b4133a3-6927-4ee1-a11e-37fa8b5b6307");
  } catch (e2) {
  }
})();
const _sfc_main = {
  __name: "APIDocs",
  __ssrInlineRender: true,
  setup(__props) {
    const router = useRouter();
    const {
      $store,
      $config,
      $i18n: { t: $t }
    } = useNuxtApp();
    useHead({
      title: "REST API documentation",
      link: [
        {
          rel: "canonical",
          href: $config.public.publicWebFrontendUrl + router.resolve({ name: "database-api-docs" }).href
        }
      ]
    });
    const isAuthenticated = computed(() => {
      return $store.getters["auth/isAuthenticated"];
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_i18n_t = resolveComponent("i18n-t");
      const _component_nuxt_link = __nuxt_component_0$2;
      const _component_Button = resolveComponent("Button");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "auth__wrapper" }, _attrs))}><h1 class="box__title">${ssrInterpolate(unref($t)("apiDocsComponent.title"))}</h1>`);
      if (isAuthenticated.value) {
        _push(`<!--[-->`);
        _push(ssrRenderComponent(_component_i18n_t, {
          keypath: "apiDocsComponent.intro",
          tag: "p"
        }, {
          settingsLink: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<a${_scopeId}>${ssrInterpolate(unref($t)("apiDocsComponent.settings"))}</a>, `);
            } else {
              return [
                createVNode("a", {
                  onClick: withModifiers(($event) => _ctx.$refs.settingsModal.show("tokens"), ["prevent"])
                }, toDisplayString(unref($t)("apiDocsComponent.settings")), 9, ["onClick"]),
                createTextVNode(", ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<div class="select-application__title">${ssrInterpolate(unref($t)("apiDocsComponent.selectApplicationTitle"))}</div>`);
        _push(ssrRenderComponent(unref(APIDocsSelectDatabase), null, null, _parent));
        _push(ssrRenderComponent(_component_nuxt_link, {
          to: { name: "dashboard" },
          class: "select-application__back"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<i class="iconoir-arrow-left"${_scopeId}></i> ${ssrInterpolate(unref($t)("apiDocsComponent.back"))}`);
            } else {
              return [
                createVNode("i", { class: "iconoir-arrow-left" }),
                createTextVNode(" " + toDisplayString(unref($t)("apiDocsComponent.back")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(unref(SettingsModal), { ref: "settingsModal" }, null, _parent));
        _push(`<!--]-->`);
      } else {
        _push(`<!--[-->`);
        _push(ssrRenderComponent(_component_i18n_t, {
          keypath: "apiDocsComponent.intro",
          tag: "p"
        }, {
          settingsLink: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref($t)("apiDocsComponent.settings"))},`);
            } else {
              return [
                createTextVNode(toDisplayString(unref($t)("apiDocsComponent.settings")) + ",", 1)
              ];
            }
          }),
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`, `);
            } else {
              return [
                createTextVNode(", ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_Button, {
          tag: "nuxt-link",
          to: {
            name: "login",
            query: {
              original: _ctx.$route.path
            }
          },
          type: "secondary",
          size: "large"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref($t)("apiDocsComponent.signIn"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(unref($t)("apiDocsComponent.signIn")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<!--]-->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("modules/database/pages/APIDocs.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=APIDocs-CCZ2j6HR.mjs.map
