import { withAsyncContext, computed, unref, mergeProps, ref, provide, watch, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderStyle } from 'vue/server-renderer';
import { onBeforeRouteUpdate, onBeforeRouteLeave } from 'vue-router';
import { c as useRoute, d as useI18n, u as useNuxtApp, g as useHead, f as useAsyncData, aK as BuilderApplicationType, v as createError, aL as DataProviderType, ag as StoreItemLookupError, aM as _sfc_main$3Q, aN as PageHeader, aO as PagePreview, aP as PageSidePanels } from './server.mjs';
import { n as normalizeError } from './errors-DuSOJ378.mjs';
import _ from 'lodash';
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
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "c4ba80b1-e86e-419d-ba48-e715fc60b77d", e._sentryDebugIdIdentifier = "sentry-dbid-c4ba80b1-e86e-419d-ba48-e715fc60b77d");
  } catch (e2) {
  }
})();
const mode$1 = "editing";
const _sfc_main$1 = {
  __name: "PageEditorContent",
  __ssrInlineRender: true,
  props: {
    workspace: {
      type: Object,
      required: true
    },
    builder: {
      type: Object,
      required: true
    },
    page: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const { $store, $registry } = useNuxtApp();
    const panelWidth = ref(360);
    const applicationContext = computed(() => ({
      workspace: props.workspace,
      builder: props.builder,
      mode: mode$1
    }));
    const sharedPage = computed(
      () => $store.getters["page/getSharedPage"](props.builder)
    );
    const dataSources = computed(() => {
      return $store.getters["dataSource/getPageDataSources"](props.page);
    });
    const sharedDataSources = computed(() => {
      return $store.getters["dataSource/getPageDataSources"](sharedPage.value);
    });
    const dispatchContext = computed(() => {
      return DataProviderType.getAllDataSourceDispatchContext(
        $registry.getAll("builderDataProvider"),
        { ...applicationContext.value, page: props.page }
      );
    });
    const applicationDispatchContext = computed(() => {
      return DataProviderType.getAllDataSourceDispatchContext(
        $registry.getAll("builderDataProvider"),
        { builder: props.builder, mode: mode$1 }
      );
    });
    provide("workspace", props.workspace);
    provide("builder", props.builder);
    provide("currentPage", props.page);
    provide("mode", mode$1);
    provide("formulaComponent", _sfc_main$3Q);
    provide("applicationContext", applicationContext);
    watch(
      dataSources,
      () => {
        $store.dispatch("dataSourceContent/debouncedFetchPageDataSourceContent", {
          page: props.page,
          data: dispatchContext.value,
          mode: mode$1
        });
      },
      { deep: true }
    );
    watch(
      sharedDataSources,
      () => {
        $store.dispatch("dataSourceContent/debouncedFetchPageDataSourceContent", {
          page: sharedPage.value,
          data: dispatchContext.value
        });
      },
      { deep: true }
    );
    watch(
      dispatchContext,
      (newDispatchContext, oldDispatchContext) => {
        if (!_.isEqual(newDispatchContext, oldDispatchContext)) {
          $store.dispatch("dataSourceContent/debouncedFetchPageDataSourceContent", {
            page: props.page,
            data: newDispatchContext,
            mode: mode$1
          });
        }
      },
      { deep: true }
    );
    watch(
      applicationDispatchContext,
      (newDispatchContext, oldDispatchContext) => {
        if (!_.isEqual(newDispatchContext, oldDispatchContext)) {
          $store.dispatch("dataSourceContent/debouncedFetchPageDataSourceContent", {
            page: sharedPage.value,
            data: newDispatchContext
          });
        }
      },
      { deep: true }
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page-editor" }, _attrs))}>`);
      _push(ssrRenderComponent(unref(PageHeader), null, null, _parent));
      _push(`<div class="layout__col-2-2 page-editor__content"><div style="${ssrRenderStyle({ width: `calc(100% - ${panelWidth.value}px)` })}">`);
      _push(ssrRenderComponent(unref(PagePreview), null, null, _parent));
      _push(`</div><div class="page-editor__side-panel" style="${ssrRenderStyle({ width: `${panelWidth.value}px` })}">`);
      _push(ssrRenderComponent(unref(PageSidePanels), null, null, _parent));
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("modules/builder/components/PageEditorContent.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const mode = "editing";
const _sfc_main = {
  __name: "pageEditor",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const { t } = useI18n();
    const { $store, $registry, $i18n } = useNuxtApp();
    useHead(() => ({
      title: t("pageEditor.title")
    }));
    const {
      data: pageData,
      error: pageError,
      pending
    } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData(
      () => `page-editor-${route.params.builderId}-${route.params.pageId}`,
      async () => {
        var _a;
        const loadedWorkspace = $store.getters["workspace/getSelected"];
        const loadedBuilder = $store.getters["application/getSelected"];
        const page = $store.getters["page/getSelected"];
        try {
          $store.dispatch("userSourceUser/setCurrentApplication", {
            application: loadedBuilder
          });
          const builderApplicationType = $registry.get(
            "application",
            BuilderApplicationType.getType()
          );
          if (page.shared) {
            throw createError({
              statusCode: 404,
              message: $i18n.t("pageEditor.pageNotFound"),
              data: {
                report: false
              },
              fatal: true
            });
          }
          await builderApplicationType.loadExtraData(loadedBuilder, mode);
          await Promise.all([
            $store.dispatch("dataSource/fetch", { page }),
            $store.dispatch("element/fetch", { builder: loadedBuilder, page }),
            $store.dispatch("builderWorkflowAction/fetch", { page })
          ]);
          await DataProviderType.initAll($registry.getAll("builderDataProvider"), {
            builder: loadedBuilder,
            page,
            mode
          });
          const sharedPage = await $store.getters["page/getSharedPage"](loadedBuilder);
          return {
            workspace: loadedWorkspace,
            builder: loadedBuilder,
            page,
            sharedPage
          };
        } catch (e) {
          if (e.response === void 0 && !(e instanceof StoreItemLookupError)) {
            throw e;
          }
          const statusCode = ((_a = e.response) == null ? void 0 : _a.status) || 500;
          throw createError({
            statusCode,
            message: statusCode === 404 ? $i18n.t("pageEditor.pageNotFound") : normalizeError(e).message,
            data: {
              report: statusCode >= 500
            },
            fatal: true
          });
        }
      },
      "$7g7diqypRD"
      /* nuxt-injected */
    )), __temp = await __temp, __restore(), __temp);
    if (pageError.value) {
      throw pageError.value;
    }
    const workspace = computed(() => pageData.value.workspace);
    const builder = computed(() => pageData.value.builder);
    const currentPage = computed(() => pageData.value.page);
    onBeforeRouteUpdate((to, from) => {
      var _a;
      const currentBuilder = $store.getters["application/get"](
        parseInt(from.params.builderId)
      );
      if (currentBuilder) {
        $store.dispatch("element/select", {
          builder: currentBuilder,
          element: null
        });
      }
      if (from.params.builderId !== ((_a = to.params) == null ? void 0 : _a.builderId)) {
        if (currentBuilder) {
          $store.dispatch("application/forceUpdate", {
            application: currentBuilder,
            data: { _loadedOnce: false }
          });
          $store.dispatch("userSourceUser/logoff", {
            application: currentBuilder
          });
        }
      }
    });
    onBeforeRouteLeave((to, from) => {
      $store.dispatch("page/unselect");
      const builderToLeave = $store.getters["application/get"](
        parseInt(from.params.builderId)
      );
      if (builderToLeave) {
        $store.dispatch("element/select", {
          builder: builderToLeave,
          element: null
        });
        $store.dispatch("application/forceUpdate", {
          application: builderToLeave,
          data: { _loadedOnce: false }
        });
        $store.dispatch("userSourceUser/logoff", { application: builderToLeave });
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (!unref(pending)) {
        _push(ssrRenderComponent(_sfc_main$1, mergeProps({
          workspace: workspace.value,
          builder: builder.value,
          page: currentPage.value
        }, _attrs), null, _parent));
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("modules/builder/pages/pageEditor.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=pageEditor-CZ0MIJKq.mjs.map
