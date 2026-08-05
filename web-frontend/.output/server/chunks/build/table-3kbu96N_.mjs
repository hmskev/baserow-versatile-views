import { u as useNuxtApp, f as useAsyncData, ag as StoreItemLookupError, g as useHead, ah as DefaultErrorPage, ai as Table, b as __nuxt_component_0 } from './server.mjs';
import { computed, withAsyncContext, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { useRoute, useRouter, onBeforeRouteLeave } from 'vue-router';
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
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "eccc2820-3c15-401d-afcd-f3010ab08784", e._sentryDebugIdIdentifier = "sentry-dbid-eccc2820-3c15-401d-afcd-f3010ab08784");
  } catch (e2) {
  }
})();
const _sfc_main = {
  __name: "table",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const router = useRouter();
    const nuxtApp = useNuxtApp();
    const {
      $store,
      $realtime,
      $registry,
      $i18n: { t: $t }
    } = nuxtApp;
    function finishLoading() {
      nuxtApp.callHook("page:loading:end");
    }
    const tableLoading = computed(() => $store.state.table.loading);
    const views = computed(() => $store.state.view.items);
    const { data, error } = ([__temp, __restore] = withAsyncContext(async () => {
      var _a;
      return useAsyncData(
        `database-table-page-${route.params.databaseId}-${route.params.tableId}-${(_a = route.params.viewId) != null ? _a : "null"}`,
        async () => {
          const currentParams = { ...route.params };
          const viewId = currentParams.viewId ? parseInt(currentParams.viewId) : null;
          const currentTable = $store.getters["table/getSelected"];
          const currentDatabase = $store.getters["application/getSelected"];
          const currentFields = $store.getters["field/getAll"];
          const result = {
            view: void 0,
            database: currentDatabase,
            table: currentTable,
            fields: currentFields
          };
          if (viewId !== null && viewId !== 0) {
            try {
              const { view: view2 } = await $store.dispatch("view/selectById", viewId);
              const type = $registry.get("view", view2.type);
              result.view = view2;
              if (type.isDeactivated(currentDatabase.workspace.id)) {
                result.error = { statusCode: 400, message: type.getDeactivatedText() };
                return result;
              }
              await type.fetch(
                { store: $store, app: nuxtApp },
                currentDatabase,
                view2,
                currentFields,
                "page/"
              );
            } catch (e) {
              if (e.response === void 0 && !(e instanceof StoreItemLookupError))
                throw e;
              result.error = normalizeError(e);
              return result;
            }
          }
          return result;
        }
      );
    }), __temp = await __temp, __restore(), __temp);
    if (error.value) {
      throw error.value;
    }
    const database = computed(() => {
      var _a;
      return (_a = data.value) == null ? void 0 : _a.database;
    });
    const table = computed(() => {
      var _a;
      return (_a = data.value) == null ? void 0 : _a.table;
    });
    const view = computed(() => {
      var _a;
      return (_a = data.value) == null ? void 0 : _a.view;
    });
    const fields = computed(() => {
      var _a;
      return (_a = data.value) == null ? void 0 : _a.fields;
    });
    const dataError = computed(() => {
      var _a;
      return (_a = data.value) == null ? void 0 : _a.error;
    });
    useHead(() => {
      var _a, _b, _c;
      return {
        title: (((_a = view.value) == null ? void 0 : _a.name) ? view.value.name + " - " : "") + ((_c = (_b = table.value) == null ? void 0 : _b.name) != null ? _c : "")
      };
    });
    onBeforeRouteLeave((to, from) => {
      $store.dispatch("view/unselect");
      $store.dispatch("table/unselect");
    });
    function selectedView(v) {
      if (view.value && view.value.id === v.id) return;
      router.push({
        name: "database-table",
        params: { viewId: v.id }
      });
    }
    async function navigateToRowModal(row) {
      const rowId = row == null ? void 0 : row.id;
      if (route.params.rowId !== void 0 && route.params.rowId === rowId) {
        return;
      }
      if (row) {
        await $store.dispatch("rowModalNavigation/setRow", row);
      }
      await router.push({
        name: rowId ? "database-table-row" : "database-table",
        params: {
          databaseId: database.value.id,
          tableId: table.value.id,
          viewId: route.params.viewId,
          rowId
        }
      });
      finishLoading();
    }
    async function setAdjacentRow(previous, row = null, term = null) {
      if (row) {
        await navigateToRowModal(row);
      } else {
        await fetchAdjacentRow(previous, term);
      }
    }
    async function fetchAdjacentRow(previous, activeSearchTerm = null) {
      var _a;
      const { row, status } = await $store.dispatch(
        "rowModalNavigation/fetchAdjacentRow",
        {
          tableId: table.value.id,
          viewId: (_a = view.value) == null ? void 0 : _a.id,
          activeSearchTerm,
          previous
        }
      );
      if (status === 204 || status === 404) {
        const path = `table.adjacentRow.toast.notFound.${previous ? "previous" : "next"}`;
        await $store.dispatch("toast/info", {
          title: $t(`${path}.title`),
          message: $t(`${path}.message`)
        });
      } else if (status !== 200) {
        await $store.dispatch("toast/error", {
          title: $t("table.adjacentRow.toast.error.title"),
          message: $t("table.adjacentRow.toast.error.message")
        });
      }
      if (row) {
        await navigateToRowModal(row);
      }
    }
    const hasChildRoute = computed(() => route.matched.length > 1);
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_NuxtPage = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (dataError.value && !((_a = view.value) == null ? void 0 : _a.id)) {
        _push(ssrRenderComponent(unref(DefaultErrorPage), { error: dataError.value }, null, _parent));
      } else {
        _push(ssrRenderComponent(unref(Table), {
          database: database.value,
          table: table.value,
          fields: fields.value,
          views: views.value,
          view: view.value,
          "view-error": dataError.value,
          "table-loading": tableLoading.value,
          "store-prefix": "page/",
          onSelectedView: selectedView,
          onSelectedRow: navigateToRowModal,
          onNavigatePrevious: (row, term) => setAdjacentRow(true, row, term),
          onNavigateNext: (row, term) => setAdjacentRow(false, row, term)
        }, null, _parent));
      }
      if (hasChildRoute.value) {
        _push(ssrRenderComponent(_component_NuxtPage, {
          database: database.value,
          table: table.value,
          fields: fields.value
        }, null, _parent));
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("modules/database/pages/table.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=table-3kbu96N_.mjs.map
