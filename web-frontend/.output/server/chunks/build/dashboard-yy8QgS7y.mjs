import { withAsyncContext, computed, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { l as useStore, u as useNuxtApp, f as useAsyncData, ag as StoreItemLookupError, v as createError, g as useHead, aI as DashboardHeader, aJ as DashboardContent } from './server.mjs';
import { useRoute } from 'vue-router';
import { n as normalizeError } from './errors-DuSOJ378.mjs';
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
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "1e071c85-4613-4a11-8238-e5f8abae14d4", e._sentryDebugIdIdentifier = "sentry-dbid-1e071c85-4613-4a11-8238-e5f8abae14d4");
  } catch (e2) {
  }
})();
const _sfc_main = {
  __name: "dashboard",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const store = useStore();
    const route = useRoute();
    const { $hasPermission, $realtime } = useNuxtApp();
    const {
      data,
      pending,
      error: fetchError
    } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData(
      `dashboard-data-${route.params.dashboardId}`,
      async () => {
        var _a;
        try {
          const dashboard2 = store.getters["application/getSelected"];
          const workspace = store.getters["workspace/getSelected"];
          const forEditing = $hasPermission(
            "application.update",
            dashboard2,
            workspace.id
          );
          await store.dispatch("dashboardApplication/fetchInitial", {
            dashboardId: dashboard2.id,
            forEditing
          });
          return {
            workspace,
            dashboard: dashboard2
          };
        } catch (e) {
          if (e.response === void 0 && !(e instanceof StoreItemLookupError)) {
            throw e;
          }
          const statusCode = ((_a = e.response) == null ? void 0 : _a.status) || 500;
          throw createError({
            statusCode,
            message: statusCode === 404 ? "Dashboard not found." : normalizeError(e).message,
            data: {
              report: statusCode >= 500
            },
            fatal: true
          });
        }
      }
    )), __temp = await __temp, __restore(), __temp);
    if (fetchError.value) {
      throw fetchError.value;
    }
    const dashboard = computed(() => {
      var _a;
      return (_a = data.value) == null ? void 0 : _a.dashboard;
    });
    useHead(() => {
      var _a;
      return {
        title: ((_a = dashboard.value) == null ? void 0 : _a.name) || ""
      };
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (dashboard.value) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "dashboard-app" }, _attrs))}>`);
        _push(ssrRenderComponent(unref(DashboardHeader), { dashboard: dashboard.value }, null, _parent));
        _push(ssrRenderComponent(unref(DashboardContent), { dashboard: dashboard.value }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("modules/dashboard/pages/dashboard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=dashboard-yy8QgS7y.mjs.map
