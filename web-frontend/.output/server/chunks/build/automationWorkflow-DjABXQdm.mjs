import { ref, withAsyncContext, computed, unref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { onBeforeRouteUpdate, onBeforeRouteLeave } from 'vue-router';
import { d as useI18n, g as useHead, c as useRoute, u as useNuxtApp, b4 as AutomationApplicationType, f as useAsyncData, ag as StoreItemLookupError, v as createError, b5 as _sfc_main$4N } from './server.mjs';
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
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "0ae9b701-f621-496e-b967-00f1953d942c", e._sentryDebugIdIdentifier = "sentry-dbid-0ae9b701-f621-496e-b967-00f1953d942c");
  } catch (e2) {
  }
})();
const _sfc_main = {
  __name: "automationWorkflow",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { t } = useI18n();
    useHead(() => ({
      title: t("automationWorkflow.title")
    }));
    const workflowLoading = ref(false);
    const route = useRoute();
    const { $store, $registry } = useNuxtApp();
    const automationApplicationType = $registry.get(
      "application",
      AutomationApplicationType.getType()
    );
    const { data: pageData, error } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData(
      () => `automation-workflow-${route.params.automationId}-${route.params.workflowId}`,
      async () => {
        var _a;
        try {
          const automation2 = $store.getters["application/getSelected"];
          const workspace2 = $store.getters["workspace/getSelected"];
          const workflow2 = $store.getters["automationWorkflow/getSelected"];
          await automationApplicationType.loadExtraData(automation2);
          await $store.dispatch("automationWorkflowNode/fetch", {
            workflow: workflow2
          });
          workflowLoading.value = false;
          return {
            automation: automation2,
            workspace: workspace2,
            workflow: workflow2
          };
        } catch (e) {
          if (e.response === void 0 && !(e instanceof StoreItemLookupError)) {
            throw e;
          }
          const statusCode = ((_a = e.response) == null ? void 0 : _a.status) || 500;
          throw createError({
            statusCode,
            message: statusCode === 404 ? "Automation workflow not found." : normalizeError(e).message,
            data: {
              report: statusCode >= 500
            },
            fatal: true
          });
        }
      },
      "$hnlxAfL660"
      /* nuxt-injected */
    )), __temp = await __temp, __restore(), __temp);
    if (error.value) {
      throw error.value;
    }
    const automation = computed(() => {
      var _a, _b;
      return (_b = (_a = pageData.value) == null ? void 0 : _a.automation) != null ? _b : null;
    });
    const workspace = computed(() => {
      var _a, _b;
      return (_b = (_a = pageData.value) == null ? void 0 : _a.workspace) != null ? _b : null;
    });
    const workflow = computed(() => {
      var _a, _b;
      return (_b = (_a = pageData.value) == null ? void 0 : _a.workflow) != null ? _b : null;
    });
    function onRouteChange(from) {
      const currentAutomation = $store.getters["application/get"](
        parseInt(from.params.automationId)
      );
      if (currentAutomation) {
        try {
          workflowLoading.value = true;
          const currentWorkflow = $store.getters["automationWorkflow/getById"](
            currentAutomation,
            parseInt(from.params.workflowId)
          );
          $store.dispatch("automationWorkflowNode/select", {
            workflow: currentWorkflow,
            node: null
          });
          $store.dispatch("application/forceUpdate", {
            application: currentAutomation,
            data: { _loadedOnce: false }
          });
        } catch (e) {
          if (!(e instanceof StoreItemLookupError)) {
            throw e;
          }
        }
      }
    }
    onBeforeRouteUpdate((to, from) => {
      onRouteChange(from);
    });
    const leavingRoute = ref(false);
    onBeforeRouteLeave((to, from) => {
      onRouteChange(from);
      leavingRoute.value = true;
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (workspace.value && automation.value && workflow.value) {
        _push(ssrRenderComponent(unref(_sfc_main$4N), mergeProps({
          loading: workflowLoading.value,
          workspace: workspace.value,
          automation: automation.value,
          workflow: workflow.value
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("modules/automation/pages/automationWorkflow.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=automationWorkflow-DjABXQdm.mjs.map
