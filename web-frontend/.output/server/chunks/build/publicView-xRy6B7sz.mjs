import { ref, withAsyncContext, computed, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { useRoute } from 'vue-router';
import { u as useNuxtApp, aE as useState, f as useAsyncData, aF as ViewService, aG as PUBLIC_PLACEHOLDER_ENTITY_ID, am as DatabaseApplicationType, v as createError, n as navigateTo, g as useHead, ai as Table } from './server.mjs';
import { T as Toasts } from './Toasts-CnmFZjjH.mjs';
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
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "36e17832-fcc9-4ae8-9e59-300668f90efe", e._sentryDebugIdIdentifier = "sentry-dbid-36e17832-fcc9-4ae8-9e59-300668f90efe");
  } catch (e2) {
  }
})();
const _sfc_main = {
  __name: "publicView",
  __ssrInlineRender: true,
  async setup(__props) {
    var _a;
    let __temp, __restore;
    const route = useRoute();
    const nuxtApp = useNuxtApp();
    const { $store, $realtime, $priorityBus, $config, $i18n } = nuxtApp;
    ref($i18n.locale.value);
    const detectedLocale = useState("public-view-detected-locale", () => {
      return $i18n.getBrowserLocale() || $i18n.defaultLocale;
    });
    $i18n.locale.value = detectedLocale.value;
    [__temp, __restore] = withAsyncContext(() => $i18n.loadLocaleMessages(detectedLocale.value)), await __temp, __restore();
    const { data, error } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData(
      `database-public-view-${route.params.slug}`,
      async () => {
        var _a2;
        const nuxt = useNuxtApp();
        const { $store: $store2, $client, $registry, runWithContext } = nuxt;
        const slug = route.params.slug;
        const publicAuthToken = await $store2.dispatch(
          "page/view/public/setAuthTokenFromCookiesIfNotSet",
          { slug }
        );
        try {
          await $store2.dispatch("page/view/public/setIsPublic", true);
          const { data: data2 } = await ViewService($client).fetchPublicViewInfo(
            slug,
            publicAuthToken
          );
          const { applications } = await runWithContext(
            () => $store2.dispatch("application/forceSetAll", {
              applications: [
                {
                  id: PUBLIC_PLACEHOLDER_ENTITY_ID,
                  type: DatabaseApplicationType.getType(),
                  tables: [{ id: PUBLIC_PLACEHOLDER_ENTITY_ID }],
                  workspace: { id: PUBLIC_PLACEHOLDER_ENTITY_ID }
                }
              ]
            })
          );
          const database2 = applications[0];
          const table2 = database2.tables[0];
          await runWithContext(
            () => $store2.dispatch("application/select", database2)
          );
          await runWithContext(
            () => $store2.dispatch("table/forceSelect", { database: database2, table: table2 })
          );
          const { fields: fields2 } = await runWithContext(
            () => $store2.dispatch("field/forceSetFields", {
              fields: data2.fields
            })
          );
          data2.view.filters_disabled = false;
          data2.view.filter_type = "AND";
          const { view: view2 } = await runWithContext(
            () => $store2.dispatch("view/forceCreate", {
              data: data2.view
            })
          );
          await runWithContext(() => $store2.dispatch("view/select", view2));
          const type = $registry.get("view", view2.type);
          await runWithContext(
            () => type.fetch(
              { store: $store2, app: nuxt },
              database2,
              view2,
              fields2,
              "page/"
            )
          );
          return { success: true, database: database2, table: table2, fields: fields2, view: view2 };
        } catch (e) {
          const statusCode = (_a2 = e.response) == null ? void 0 : _a2.status;
          if (statusCode === 401) {
            return {
              redirect: {
                name: "database-public-view-auth",
                params: { slug },
                query: { original: route.path }
              }
            };
          } else if (statusCode === 404) {
            throw createError({
              statusCode: 404,
              message: "View not found.",
              data: {
                report: false
              },
              fatal: true
            });
          } else {
            throw createError({
              statusCode: 500,
              message: e.message || "Error loading view.",
              fatal: true
            });
          }
        }
      }
    )), __temp = await __temp, __restore(), __temp);
    if (error.value) {
      throw error.value;
    }
    if ((_a = data.value) == null ? void 0 : _a.redirect) {
      [__temp, __restore] = withAsyncContext(() => navigateTo(data.value.redirect)), await __temp, __restore();
    }
    const database = computed(() => {
      var _a2;
      return (_a2 = data.value) == null ? void 0 : _a2.database;
    });
    const table = computed(() => {
      var _a2;
      return (_a2 = data.value) == null ? void 0 : _a2.table;
    });
    const fields = computed(() => $store.getters["field/getAll"]);
    const view = computed(() => $store.getters["view/getSelected"]);
    useHead(() => {
      var _a2;
      const head = { title: ((_a2 = view.value) == null ? void 0 : _a2.name) || "View" };
      if (view.value && !view.value.show_logo) {
        head.titleTemplate = "%s";
      }
      return head;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(unref(Toasts), null, null, _parent));
      _push(`<div class="public-view__table">`);
      if (database.value && table.value && view.value) {
        _push(ssrRenderComponent(unref(Table), {
          database: database.value,
          table: table.value,
          fields: fields.value,
          view: view.value,
          "read-only": true,
          "table-loading": false,
          "store-prefix": "page/"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("modules/database/pages/publicView.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=publicView-xRy6B7sz.mjs.map
