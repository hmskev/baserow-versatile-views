import { computed, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc, a as useRuntimeConfig } from './server.mjs';
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
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "859ae3aa-7cad-4c82-bcbd-8f932206b9bb", e._sentryDebugIdIdentifier = "sentry-dbid-859ae3aa-7cad-4c82-bcbd-8f932206b9bb");
  } catch (e2) {
  }
})();
const _sfc_main = {
  __name: "debug",
  __ssrInlineRender: true,
  setup(__props) {
    const { public: publicConfig } = useRuntimeConfig();
    const excludeList = ["i18n"];
    const formatKey = (key) => key.replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z0-9])([A-Z])/g, "$1_$2").replace(/[-\s]+/g, "_").toUpperCase();
    const formatValue = (value) => {
      if (typeof value === "object" && value !== null) {
        return JSON.stringify(value, null, 2);
      }
      return String(value);
    };
    const publicConfigFiltered = computed(
      () => Object.entries(publicConfig).filter(([key]) => !excludeList.includes(key))
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "debug" }, _attrs))} data-v-66ff2504><h1 data-v-66ff2504>Debug page</h1><table class="debug__table" data-v-66ff2504><thead data-v-66ff2504><tr data-v-66ff2504><th data-v-66ff2504>Key</th><th data-v-66ff2504>Value</th></tr></thead><tbody data-v-66ff2504><!--[-->`);
      ssrRenderList(unref(publicConfigFiltered), ([key, value]) => {
        _push(`<tr data-v-66ff2504><td data-v-66ff2504><strong data-v-66ff2504>${ssrInterpolate(formatKey(key))}</strong></td><td data-v-66ff2504><pre data-v-66ff2504>${ssrInterpolate(formatValue(value))}</pre></td></tr>`);
      });
      _push(`<!--]--></tbody></table></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("modules/core/pages/debug.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const debug = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-66ff2504"]]);

export { debug as default };
//# sourceMappingURL=debug-0gI5rXWK.mjs.map
