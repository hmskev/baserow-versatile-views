import { c as useRoute, e as useRouter, u as useNuxtApp, f as useAsyncData, v as createError, g as useHead, b as __nuxt_component_0 } from './server.mjs';
import { withAsyncContext, computed, reactive, resolveComponent, mergeProps, unref, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, resolveDynamicComponent, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderVNode } from 'vue/server-renderer';
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
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "e7e28333-2670-44c1-859b-073e5528f5e1", e._sentryDebugIdIdentifier = "sentry-dbid-e7e28333-2670-44c1-859b-073e5528f5e1");
  } catch (e2) {
  }
})();
const _sfc_main = {
  __name: "settings",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    useRouter();
    const nuxtApp = useNuxtApp();
    const store = nuxtApp.$store;
    const { $i18n } = nuxtApp;
    const { data: workspace, error } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData("workspace", async () => {
      try {
        return await store.dispatch(
          "workspace/selectById",
          parseInt(route.params.workspaceId, 10)
        );
      } catch (e) {
        throw createError({
          statusCode: 404,
          message: "Workspace not found.",
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
    const registry = nuxtApp.$registry;
    const workspaceSettingsPageTypes = computed(
      () => Object.values(registry.getAll("workspaceSettingsPage"))
    );
    const pages = computed(() => {
      const permittedPages = workspaceSettingsPageTypes.value.filter(
        (instance) => instance.hasPermission(workspace.value)
      );
      return permittedPages.map((instance) => ({
        type: instance.type,
        name: instance.getName(),
        to: instance.getRoute(workspace.value),
        navigable: instance.isFeatureActive(workspace.value),
        deactivatedModal: instance.getFeatureDeactivatedModal(workspace.value)
      }));
    });
    const deactivatedPagesWithModal = computed(
      () => pages.value.filter((page) => !page.navigable && page.deactivatedModal)
    );
    const currentPageName = computed(() => {
      const currentPage = pages.value.find((p) => {
        var _a;
        return ((_a = p.to) == null ? void 0 : _a.name) === route.name;
      });
      return (currentPage == null ? void 0 : currentPage.name) || $i18n.t("sidebar.settings");
    });
    useHead(() => ({
      title: currentPageName.value
    }));
    const modalRefs = reactive({});
    function setDeactivatedModalRef(type, el) {
      modalRefs[type] = el;
    }
    nuxtApp.$bus;
    function clickDisabled(page) {
      const ref = modalRefs[page.type];
      if (ref) {
        ref.show();
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Tabs = resolveComponent("Tabs");
      const _component_Tab = resolveComponent("Tab");
      const _component_NuxtPage = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ style: { "height": "100%", "display": "flex", "flex-direction": "column" } }, _attrs))}>`);
      _push(ssrRenderComponent(_component_Tabs, {
        offset: "",
        "full-height": "",
        route: unref(route),
        "large-offset": "",
        onClickDisabled: ($event) => clickDisabled(unref(pages)[$event])
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(pages), (page) => {
              _push2(ssrRenderComponent(_component_Tab, {
                key: page.type,
                title: page.name,
                disabled: !page.navigable,
                to: page.to,
                icon: !page.navigable ? "iconoir-lock" : null
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_NuxtPage, { workspace: unref(workspace) }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_NuxtPage, { workspace: unref(workspace) }, null, 8, ["workspace"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(unref(pages), (page) => {
                return openBlock(), createBlock(_component_Tab, {
                  key: page.type,
                  title: page.name,
                  disabled: !page.navigable,
                  to: page.to,
                  icon: !page.navigable ? "iconoir-lock" : null
                }, {
                  default: withCtx(() => [
                    createVNode(_component_NuxtPage, { workspace: unref(workspace) }, null, 8, ["workspace"])
                  ]),
                  _: 1
                }, 8, ["title", "disabled", "to", "icon"]);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--[-->`);
      ssrRenderList(unref(deactivatedPagesWithModal), (page) => {
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(page.deactivatedModal[0]), mergeProps({
          key: page.type,
          ref_for: true,
          ref: (el) => setDeactivatedModalRef(page.type, el)
        }, { ref_for: true }, page.deactivatedModal[1], { workspace: unref(workspace) }), null), _parent);
      });
      _push(`<!--]--></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("modules/core/pages/settings.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=settings-C18eqm3_.mjs.map
