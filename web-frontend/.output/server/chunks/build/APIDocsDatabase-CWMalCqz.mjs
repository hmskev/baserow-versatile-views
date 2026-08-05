import { u as useNuxtApp, f as useAsyncData, am as DatabaseApplicationType, an as FieldService, g as useHead, ao as PasswordFieldType, h as __nuxt_component_0$2, _ as _export_sfc, al as SettingsModal, ap as FileFieldType, aq as copyToClipboard, ar as uuid, Q as modal, as as ViewFieldConditionsForm, at as mappingToStringifiedJSONLines, au as populateFilterGroup, av as hasCompatibleFilterTypes, aw as populateFilter, ax as populateView, ay as GridViewType, a7 as clone, az as createFiltersTree } from './server.mjs';
import { useTemplateRef, withAsyncContext, ref, computed, resolveComponent, mergeProps, withCtx, createVNode, unref, createTextVNode, toDisplayString, isRef, withModifiers, openBlock, createBlock, Fragment, renderList, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderStyle, ssrRenderList, ssrRenderClass, ssrRenderSlot } from 'vue/server-renderer';
import { A as APIDocsSelectDatabase } from './APIDocsSelectDatabase-C7qPLxWa.mjs';
import { useRoute, useRouter } from 'vue-router';
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
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "fafebdb1-6b43-4709-9867-1074ef136d70", e._sentryDebugIdIdentifier = "sentry-dbid-fafebdb1-6b43-4709-9867-1074ef136d70");
  } catch (e2) {
  }
})();
const _sfc_main$l = {
  name: "APIDocsIntro",
  props: { database: { type: Object, required: true } }
};
function _sfc_ssrRender$k(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "api-docs__item" }, _attrs))}><div class="api-docs__left"><h2 id="section-introduction" class="api-docs__heading-2">${ssrInterpolate(_ctx.$t("apiDocs.intro"))}</h2><p class="api-docs__content">${ssrInterpolate(_ctx.$t("apiDocsIntro.intro", $props.database))}</p><p class="api-docs__content">${ssrInterpolate(_ctx.$t("apiDocsIntro.autoDocDescription"))}</p><p class="api-docs__content">${ssrInterpolate(_ctx.$t("apiDocsIntro.databaseId"))} <code class="api-docs__code">${ssrInterpolate($props.database.id)}</code><br> ${ssrInterpolate(_ctx.$t("apiDocsIntro.jsClient"))} <a href="https://github.com/axios/axios" target="_blank">axios</a><br> ${ssrInterpolate(_ctx.$t("apiDocsIntro.pythonClient"))} <a href="https://requests.readthedocs.io/en/master/" target="_blank">requests</a></p></div></div>`);
}
const _sfc_setup$l = _sfc_main$l.setup;
_sfc_main$l.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("modules/database/components/docs/sections/APIDocsIntro.vue");
  return _sfc_setup$l ? _sfc_setup$l(props, ctx) : void 0;
};
const APIDocsIntro = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["ssrRender", _sfc_ssrRender$k]]);
const _sfc_main$k = {
  name: "APIDocsExample",
  props: {
    value: {
      type: Object,
      required: true
    },
    type: {
      type: String,
      required: false,
      default: "GET"
    },
    url: {
      type: String,
      required: false,
      default: ""
    },
    fileRequest: {
      type: String,
      required: false,
      default: ""
    },
    request: {
      type: [Object, Boolean],
      required: false,
      default: false
    },
    response: {
      type: [Object, Boolean, Array],
      required: false,
      default: false
    },
    mapping: {
      type: Object,
      required: false,
      default: () => ({})
    },
    includeUserFieldsCheckbox: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  emits: ["input"],
  computed: {
    formattedResponse() {
      return this.getFormattedResponse();
    },
    formattedRequest() {
      return this.getFormattedRequest();
    }
  },
  methods: {
    format(value) {
      return value !== false ? JSON.stringify(value, null, 4) : "";
    },
    getFormattedRequest() {
      if (this.value.type === "curl") {
        return this.getCURLRequestExample();
      } else if (this.value.type === "http") {
        return this.getHTTPRequestExample();
      } else if (this.value.type === "javascript") {
        return this.getJavaScriptExample();
      } else if (this.value.type === "python") {
        return this.getPythonExample();
      }
      return "";
    },
    getCURLRequestExample() {
      let index = 3;
      let example = "curl \\";
      if (this.type !== "") {
        index++;
        example += `
-X ${this.type} \\`;
      }
      example += '\n-H "Authorization: Token YOUR_DATABASE_TOKEN" \\';
      if (this.request !== false) {
        index++;
        example += '\n-H "Content-Type: application/json" \\';
      }
      if (this.fileRequest !== "") {
        index++;
        example += ` \\
-F file=@${this.fileRequest}`;
      }
      example += `
"${this.url}"`;
      if (this.request !== false) {
        index++;
        example += ` \\
--data '${this.format(this.request)}'`;
      }
      return {
        example,
        lines: mappingToStringifiedJSONLines(this.mapping, this.request, index)
      };
    },
    getHTTPRequestExample() {
      let index = 2;
      let example = "";
      if (this.type !== "") {
        index++;
        example += `${this.type.toUpperCase()} `;
      }
      example += `${this.url} HTTP`;
      example += "\nAuthorization: Token YOUR_DATABASE_TOKEN";
      if (this.fileRequest !== "") {
        example += "\nContent-Length: YOUR_CONTENT_LENGTH";
        example += "\nContent-Type: multipart/form-data; boundary=------------------------YOUR_BOUNDARY";
      }
      if (this.request !== false) {
        index += 2;
        example += "\nContent-Type: application/json";
        example += `

${this.format(this.request)}`;
      }
      return {
        example,
        lines: mappingToStringifiedJSONLines(this.mapping, this.request, index)
      };
    },
    getJavaScriptExample() {
      let index = 5;
      let example = "";
      if (this.fileRequest !== "") {
        example += "const formData = new FormData()";
        example += `
formData.append('file', '${this.fileRequest}')`;
        example += "\naxios.post('/fileupload', formData, {";
      } else {
        example = "axios({";
      }
      if (this.type !== "") {
        index++;
        example += `
  method: "${this.type.toUpperCase()}",`;
      }
      example += `
  url: "${this.url}",`;
      example += "\n  headers: {";
      example += '\n    Authorization: "Token YOUR_DATABASE_TOKEN"';
      if (this.fileRequest !== "") {
        index++;
        example += ',\n    "Content-Type": "multipart/form-data"';
      }
      if (this.request !== false) {
        index++;
        example += ',\n    "Content-Type": "application/json"';
      }
      example += "\n  }";
      if (this.request !== false) {
        index++;
        const data = this.format(this.request).slice(0, -1) + "  }";
        example += `,
  data: ${data}`;
      }
      example += "\n})";
      return {
        example,
        lines: mappingToStringifiedJSONLines(this.mapping, this.request, index)
      };
    },
    getPythonExample() {
      let index = 5;
      const type = (this.type || "get").toLowerCase();
      let example = `requests.${type}(`;
      example += `
    "${this.url}",`;
      example += "\n    headers={";
      example += `
        "Authorization": "Token YOUR_DATABASE_TOKEN"`;
      if (this.request !== false) {
        index++;
        example += `,
        "Content-Type": "application/json"`;
      }
      example += "\n    }";
      if (this.fileRequest !== "") {
        index++;
        example += `
    files={'file': open('${this.fileRequest}', 'rb')}`;
      }
      if (this.request !== false) {
        index++;
        const data = this.format(this.request).split("\n").join("\n    ");
        example += `,
    json=${data}`;
      }
      example += "\n)";
      return {
        example,
        lines: mappingToStringifiedJSONLines(this.mapping, this.request, index)
      };
    },
    getFormattedResponse() {
      return {
        example: this.format(this.response),
        lines: mappingToStringifiedJSONLines(this.mapping, this.response)
      };
    },
    copyToClipboard(value) {
      copyToClipboard(value);
    }
  }
};
function _sfc_ssrRender$j(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Copied = resolveComponent("Copied");
  const _component_Dropdown = resolveComponent("Dropdown");
  const _component_DropdownItem = resolveComponent("DropdownItem");
  const _component_Checkbox = resolveComponent("Checkbox");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  if ($props.type !== "" && $props.url !== "") {
    _push(`<div class="api-docs__example api-docs__example--with-padding"><a class="api-docs__copy">${ssrInterpolate(_ctx.$t("action.copy"))} `);
    _push(ssrRenderComponent(_component_Copied, { ref: "urlCopied" }, null, _parent));
    _push(`</a><div class="api-docs__example-request"><div class="${ssrRenderClass([{
      "api-docs__example-request-type--success": $props.type.toLowerCase() === "get",
      "api-docs__example-request-type--primary": $props.type.toLowerCase() === "post",
      "api-docs__example-request-type--warning": $props.type.toLowerCase() === "patch",
      "api-docs__example-request-type--error": $props.type.toLowerCase() === "delete"
    }, "api-docs__example-request-type"])}">${ssrInterpolate(_ctx.$filters.uppercase($props.type))}</div><div class="api-docs__example-request-url">${ssrInterpolate($props.url)}</div></div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="api-docs__example-title">${ssrInterpolate(_ctx.$t("apiDocsExample.requestSample"))}</div><div class="api-docs__example"><a class="api-docs__copy">${ssrInterpolate(_ctx.$t("action.copy"))} `);
  _push(ssrRenderComponent(_component_Copied, { ref: "requestCopied" }, null, _parent));
  _push(`</a><div class="api-docs__example-type">`);
  _push(ssrRenderComponent(_component_Dropdown, {
    modelValue: $props.value.type,
    "onUpdate:modelValue": ($event) => $props.value.type = $event,
    class: "dropdown--floating",
    onInput: ($event) => _ctx.$emit("input", {
      userFieldNames: $props.value.userFieldNames,
      type: $event
    })
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_DropdownItem, {
          value: "curl",
          name: "cURL"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_DropdownItem, {
          value: "http",
          name: "HTTP"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_DropdownItem, {
          value: "javascript",
          name: "JavaScript (axios)"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_DropdownItem, {
          value: "python",
          name: "Python (requests)"
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_DropdownItem, {
            value: "curl",
            name: "cURL"
          }),
          createVNode(_component_DropdownItem, {
            value: "http",
            name: "HTTP"
          }),
          createVNode(_component_DropdownItem, {
            value: "javascript",
            name: "JavaScript (axios)"
          }),
          createVNode(_component_DropdownItem, {
            value: "python",
            name: "Python (requests)"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  if ($props.includeUserFieldsCheckbox) {
    _push(ssrRenderComponent(_component_Checkbox, {
      modelValue: $props.value.userFieldNames,
      "onUpdate:modelValue": ($event) => $props.value.userFieldNames = $event,
      class: "api-docs__example-type-item",
      onInput: ($event) => _ctx.$emit("input", { userFieldNames: $event, type: $props.value.type })
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(_ctx.$t("apiDocsExample.userFieldNames"))}`);
        } else {
          return [
            createTextVNode(toDisplayString(_ctx.$t("apiDocsExample.userFieldNames")), 1)
          ];
        }
      }),
      _: 1
    }, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(`</div><div class="api-docs__example-content-container">`);
  if (Object.keys($props.mapping).length > 0) {
    _push(`<div class="api-docs__example-content-side"><!--[-->`);
    ssrRenderList($options.formattedRequest.lines, (lineValue, line) => {
      _push(`<div class="api-docs__example-content-line" style="${ssrRenderStyle("top:" + (line - 1) * 21 + "px;")}"${ssrRenderAttr("title", lineValue)}>${ssrInterpolate(lineValue)}</div>`);
    });
    _push(`<!--]--></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="api-docs__example-content-wrapper"><div class="api-docs__example-content"><pre class="api-docs__example-content"><code>${ssrInterpolate($options.formattedRequest.example)}</code></pre></div></div></div></div>`);
  if ($props.response !== false) {
    _push(`<!--[--><div class="api-docs__example-title">${ssrInterpolate(_ctx.$t("apiDocsExample.responseSample"))}</div><div class="api-docs__example"><a class="api-docs__copy">${ssrInterpolate(_ctx.$t("action.copy"))} `);
    _push(ssrRenderComponent(_component_Copied, { ref: "responseCopied" }, null, _parent));
    _push(`</a><div class="api-docs__example-content-container">`);
    if (Object.keys($props.mapping).length > 0) {
      _push(`<div class="api-docs__example-content-side"><!--[-->`);
      ssrRenderList($options.formattedResponse.lines, (lineValue, line) => {
        _push(`<div class="api-docs__example-content-line" style="${ssrRenderStyle("top:" + (line - 1) * 21 + "px;")}"${ssrRenderAttr("title", lineValue)}>${ssrInterpolate(lineValue)}</div>`);
      });
      _push(`<!--]--></div>`);
    } else {
      _push(`<!---->`);
    }
    _push(`<div class="api-docs__example-content-wrapper"><div class="api-docs__example-content"><pre class="api-docs__example-content"><code>${ssrInterpolate($options.formattedResponse.example)}</code></pre></div></div></div></div><!--]-->`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup$k = _sfc_main$k.setup;
_sfc_main$k.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("modules/database/components/docs/APIDocsExample.vue");
  return _sfc_setup$k ? _sfc_setup$k(props, ctx) : void 0;
};
const APIDocsExample = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["ssrRender", _sfc_ssrRender$j]]);
const _sfc_main$j = {
  name: "APIDocsAuth",
  components: {
    SettingsModal,
    APIDocsExample
  },
  props: {
    value: {
      type: Object,
      required: true
    }
  },
  emits: ["input"]
};
function _sfc_ssrRender$i(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_i18n_t = resolveComponent("i18n-t");
  const _component_APIDocsExample = resolveComponent("APIDocsExample");
  const _component_SettingsModal = resolveComponent("SettingsModal");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "api-docs__item" }, _attrs))}><div class="api-docs__left"><h2 id="section-authentication" class="api-docs__heading-2">${ssrInterpolate(_ctx.$t("apiDocs.authent"))}</h2>`);
  _push(ssrRenderComponent(_component_i18n_t, {
    keypath: "apiDocsAuth.description",
    tag: "p",
    class: "api-docs__content"
  }, {
    settingsLink: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<a${_scopeId}>${ssrInterpolate(_ctx.$t("apiDocsAuth.settingsLink"))}</a>`);
      } else {
        return [
          createVNode("a", {
            onClick: withModifiers(($event) => _ctx.$refs.settingsModal.show("tokens"), ["prevent"])
          }, toDisplayString(_ctx.$t("apiDocsAuth.settingsLink")), 9, ["onClick"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="api-docs__right">`);
  _push(ssrRenderComponent(_component_APIDocsExample, {
    value: $props.value,
    url: _ctx.$config.public.publicBackendUrl,
    "include-user-fields-checkbox": false,
    type: "",
    onInput: ($event) => _ctx.$emit("input", $event)
  }, null, _parent));
  _push(`</div>`);
  _push(ssrRenderComponent(_component_SettingsModal, { ref: "settingsModal" }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup$j = _sfc_main$j.setup;
_sfc_main$j.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("modules/database/components/docs/sections/APIDocsAuth.vue");
  return _sfc_setup$j ? _sfc_setup$j(props, ctx) : void 0;
};
const APIDocsAuth = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["ssrRender", _sfc_ssrRender$i]]);
const _sfc_main$i = {
  name: "APIDocsTableFields",
  props: {
    table: { type: Object, required: true },
    fields: { type: Object, required: true },
    navigate: { type: Function, required: true }
  },
  computed: {
    viewFilterTypes() {
      return Object.values(this.$registry.getAll("viewFilter"));
    }
  },
  methods: {
    getCompatibleFilterTypes(field) {
      return this.viewFilterTypes.filter(
        (filter) => filter.fieldIsCompatible(field)
      );
    }
  }
};
function _sfc_ssrRender$h(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "item" }, _attrs))}><div class="api-docs__left"><h2${ssrRenderAttr("id", "section-table-" + $props.table.id)}>${ssrInterpolate(_ctx.$t("apiDocsTableFields.tableTitle", $props.table))}</h2><p class="api-docs__content">${ssrInterpolate(_ctx.$t("apiDocsTableFields.tableId"))} <code class="api-docs__code">${ssrInterpolate($props.table.id)}</code></p><h3${ssrRenderAttr("id", "section-table-" + $props.table.id + "-fields")} class="api-docs__heading-3">${ssrInterpolate(_ctx.$t("apiDocs.fields"))}</h3><p class="api-docs__content">${ssrInterpolate(_ctx.$t("apiDocsTableFields.description", $props.table))}</p><table class="api-docs__table"><thead><tr><th>${ssrInterpolate(_ctx.$t("apiDocsTableFields.id"))}</th><th>${ssrInterpolate(_ctx.$t("apiDocsTableFields.name"))}</th><th>${ssrInterpolate(_ctx.$t("apiDocsTableFields.type"))}</th><th>${ssrInterpolate(_ctx.$t("apiDocsTableFields.compatibleFilters"))}</th></tr></thead><tbody><!--[-->`);
  ssrRenderList($props.fields[$props.table.id], (field) => {
    var _a;
    _push(`<!--[--><tr class="api-docs__table-without-border"><td>field_${ssrInterpolate(field.id)}</td><td>${ssrInterpolate(field.name)}</td><td><code class="api-docs__code margin-bottom-1">${ssrInterpolate(field._.type)}</code></td><td><!--[-->`);
    ssrRenderList($options.getCompatibleFilterTypes(field), (filter) => {
      _push(`<code class="api-docs__code api-docs__code--small api-docs__code--clickable margin-bottom-1 margin-right-1">${ssrInterpolate(filter.type)}</code>`);
    });
    _push(`<!--]--></td></tr><tr><td colspan="4"><div class="api-docs__table-content">${(_a = field._.description) != null ? _a : ""}</div></td></tr><!--]-->`);
  });
  _push(`<!--]--></tbody></table></div></div>`);
}
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("modules/database/components/docs/sections/APIDocsTableFields.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
const APIDocsTableFields = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["ssrRender", _sfc_ssrRender$h]]);
const _sfc_main$h = {
  name: "APIDocsParameter",
  props: {
    name: {
      type: String,
      required: true
    },
    visibleName: {
      type: String,
      required: false,
      default: null
    },
    optional: {
      type: Boolean,
      required: false,
      default: false
    },
    type: {
      type: String,
      required: true
    },
    standard: {
      type: String,
      required: false,
      default: ""
    },
    userFieldNames: {
      type: Boolean,
      required: false,
      default: false
    }
  }
};
function _sfc_ssrRender$g(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<li${ssrRenderAttrs(mergeProps({ class: "api-docs__parameter" }, _attrs))}><div class="api-docs__parameter-name"><div>${ssrInterpolate($props.userFieldNames ? $props.visibleName : $props.name)} `);
  if ($props.userFieldNames || $props.visibleName !== null) {
    _push(`<span class="api-docs__parameter-visible-name">${ssrInterpolate($props.userFieldNames ? $props.name : $props.visibleName)}</span>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
  if ($props.optional) {
    _push(`<div class="api-docs__parameter-optional">${ssrInterpolate(_ctx.$t("apiDocsParameter.optional"))}</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div><div class="api-docs__parameter-description"><code class="api-docs__code">${ssrInterpolate($props.type)}</code>`);
  if ($props.standard !== "") {
    _push(`<div class="api-docs__parameter-default">${ssrInterpolate(_ctx.$t("apiDocsParameter.defaultValue", { value: $props.standard }))}</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="api-docs__parameter-content">`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div></div></li>`);
}
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("modules/database/components/docs/APIDocsParameter.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
const APIDocsParameter = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["ssrRender", _sfc_ssrRender$g]]);
const _sfc_main$g = {
  name: "APIDocsTableListFields",
  components: {
    APIDocsParameter,
    APIDocsExample
  },
  props: {
    value: {
      type: Object,
      required: true
    },
    table: { type: Object, required: true },
    fields: { type: Object, required: true }
  },
  emits: ["input"],
  methods: {
    getFieldsURL(table) {
      return `${this.$config.public.publicBackendUrl}/api/database/fields/table/${table.id}/`;
    },
    /**
     * Generates a sample field list response based on the available fields of the table.
     */
    getResponseFields(table) {
      return this.fields[table.id].slice(0, 3).map(({ _: { fieldResponseExample } }) => fieldResponseExample);
    }
  }
};
function _sfc_ssrRender$f(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_MarkdownIt = resolveComponent("MarkdownIt");
  const _component_APIDocsParameter = resolveComponent("APIDocsParameter");
  const _component_APIDocsExample = resolveComponent("APIDocsExample");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "api-docs__item" }, _attrs))}><div class="api-docs__left"><h3${ssrRenderAttr("id", `section-table-${$props.table.id}-field-list`)} class="api-docs__heading-3">${ssrInterpolate(_ctx.$t("apiDocs.listFields"))}</h3>`);
  _push(ssrRenderComponent(_component_MarkdownIt, {
    content: _ctx.$t("apiDocsTableListFields.description", $props.table)
  }, null, _parent));
  _push(`<h4 class="api-docs__heading-4">${ssrInterpolate(_ctx.$t("apiDocsTableListFields.resultFieldProperties"))}</h4><ul class="api-docs__parameters">`);
  _push(ssrRenderComponent(_component_APIDocsParameter, {
    name: "id",
    optional: false,
    type: "integer"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_MarkdownIt, {
          content: _ctx.$t("apiDocsTableListFields.id")
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_MarkdownIt, {
            content: _ctx.$t("apiDocsTableListFields.id")
          }, null, 8, ["content"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_APIDocsParameter, {
    name: "name",
    optional: false,
    type: "string"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(_ctx.$t("apiDocsTableListFields.name"))}`);
      } else {
        return [
          createTextVNode(toDisplayString(_ctx.$t("apiDocsTableListFields.name")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_APIDocsParameter, {
    name: "table_id",
    optional: false,
    type: "integer"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(_ctx.$t("apiDocsTableListFields.tableId"))}`);
      } else {
        return [
          createTextVNode(toDisplayString(_ctx.$t("apiDocsTableListFields.tableId")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_APIDocsParameter, {
    name: "order",
    optional: false,
    type: "integer"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(_ctx.$t("apiDocsTableListFields.order"))}`);
      } else {
        return [
          createTextVNode(toDisplayString(_ctx.$t("apiDocsTableListFields.order")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_APIDocsParameter, {
    name: "primary",
    optional: false,
    type: "boolean"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_MarkdownIt, {
          content: _ctx.$t("apiDocsTableListFields.primary")
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_MarkdownIt, {
            content: _ctx.$t("apiDocsTableListFields.primary")
          }, null, 8, ["content"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_APIDocsParameter, {
    name: "type",
    optional: false,
    type: "string"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(_ctx.$t("apiDocsTableListFields.type"))}`);
      } else {
        return [
          createTextVNode(toDisplayString(_ctx.$t("apiDocsTableListFields.type")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_APIDocsParameter, {
    name: "read_only",
    optional: false,
    type: "boolean"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(_ctx.$t("apiDocsTableListFields.readOnly"))}`);
      } else {
        return [
          createTextVNode(toDisplayString(_ctx.$t("apiDocsTableListFields.readOnly")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_APIDocsParameter, {
    name: "description",
    optional: false,
    type: "string"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(_ctx.$t("apiDocsTableListFields.descriptionField"))}`);
      } else {
        return [
          createTextVNode(toDisplayString(_ctx.$t("apiDocsTableListFields.descriptionField")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</ul><p class="api-docs__content">${ssrInterpolate(_ctx.$t("apiDocsTableListFields.extraProps"))}</p></div><div class="api-docs__right">`);
  _push(ssrRenderComponent(_component_APIDocsExample, {
    value: $props.value,
    type: "GET",
    url: $options.getFieldsURL($props.table),
    response: $options.getResponseFields($props.table),
    "include-user-fields-checkbox": false,
    onInput: ($event) => _ctx.$emit("input", $event)
  }, null, _parent));
  _push(`</div></div>`);
}
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("modules/database/components/docs/sections/APIDocsTableListFields.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const APIDocsTableListFields = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["ssrRender", _sfc_ssrRender$f]]);
const _sfc_main$f = {
  name: "APIDocsFiltersBuilderModal",
  components: { ViewFieldConditionsForm },
  mixins: [modal],
  props: {
    userFieldNames: {
      type: Boolean,
      required: true
    },
    fields: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      view: null,
      mutableUserFieldNames: this.userFieldNames
    };
  },
  computed: {
    JSONFilters() {
      const filters = clone(this.view.filters);
      if (this.mutableUserFieldNames) {
        filters.map((filter) => {
          const field = this.fields.find((f) => f.id === filter.field);
          filter.field = field.name;
          return filter;
        });
      }
      const filterTree = createFiltersTree(
        this.view.filter_type,
        filters,
        this.view.filter_groups
      );
      if (filterTree.hasFilters()) {
        const serializedTree = filterTree.getFiltersTreeSerialized();
        return JSON.stringify(serializedTree);
      }
      return "";
    },
    encodedJSONFilters() {
      let params = "?";
      if (this.mutableUserFieldNames) {
        params += "user_field_names=true&";
      }
      return params + "filters=" + encodeURIComponent(this.JSONFilters);
    }
  },
  created() {
    this.view = populateView(
      {
        type: GridViewType.getType(),
        filters: [this.getNewFilterObject(null)],
        filter_groups: [],
        filter_type: "AND"
      },
      this.$registry
    );
  },
  methods: {
    uuid,
    copyToClipboard,
    getNewFilterObject(filterGroupId, parentGroupId = null) {
      const createNewFilterGroup = filterGroupId && this.view.filter_groups.findIndex(
        (group) => group.id === filterGroupId
      ) === -1;
      if (createNewFilterGroup) {
        this.view.filter_groups.push(
          populateFilterGroup({
            id: filterGroupId,
            filter_type: "AND",
            parent_group: parentGroupId
          })
        );
      }
      const viewFilterTypes = this.$registry.getAll("viewFilter");
      const firstField = this.fields.slice().find((field) => hasCompatibleFilterTypes(field, viewFilterTypes));
      const firstType = Object.values(viewFilterTypes).find(
        (viewFilterType) => {
          return viewFilterType.fieldIsCompatible(firstField);
        }
      );
      return populateFilter({
        id: uuid(),
        group: filterGroupId,
        field: firstField.id,
        type: firstType.type,
        value: ""
      });
    },
    addFilter({ filterGroupId = null, parentGroupId = null } = {}) {
      this.view.filters.push(
        this.getNewFilterObject(filterGroupId, parentGroupId)
      );
    },
    updateFilter({ filter, values }) {
      values.preload_values = {};
      Object.assign(filter, filter, values);
    },
    deleteFilter(filter) {
      const index = this.view.filters.findIndex((f) => f.id === filter.id);
      this.view.filters.splice(index, 1);
    },
    updateFilterType({ filterGroup, value }) {
      if (filterGroup === void 0) {
        this.view.filter_type = value;
      } else {
        filterGroup.filter_type = value;
      }
    },
    deleteFilterGroup({ group }) {
      const index = this.view.filter_groups.findIndex((g) => g.id === group.id);
      this.view.filters = this.view.filters.filter(
        (filter) => filter.group !== group.id
      );
      this.view.filter_groups.splice(index, 1);
    }
  }
};
function _sfc_ssrRender$e(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Modal = resolveComponent("Modal");
  const _component_Checkbox = resolveComponent("Checkbox");
  const _component_Copied = resolveComponent("Copied");
  const _component_ViewFieldConditionsForm = resolveComponent("ViewFieldConditionsForm");
  _push(ssrRenderComponent(_component_Modal, mergeProps({
    ref: "modal",
    wide: true
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<h2 class="box__title"${_scopeId}>${ssrInterpolate(_ctx.$t("apiDocsFiltersBuilderModal.title"))}</h2><div class="control margin-bottom-2"${_scopeId}><div class="control__elements"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_Checkbox, {
          modelValue: $data.mutableUserFieldNames,
          "onUpdate:modelValue": ($event) => $data.mutableUserFieldNames = $event
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`${ssrInterpolate(_ctx.$t("apiDocsFiltersBuilderModal.userFieldNames"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("apiDocsFiltersBuilderModal.userFieldNames")), 1)
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div></div><div class="control margin-bottom-2"${_scopeId}><label class="control__label control__label--small"${_scopeId}>${ssrInterpolate(_ctx.$t("apiDocsFiltersBuilderModal.json"))}</label><div class="control__description"${_scopeId}><span class="position-relative"${_scopeId}><a${_scopeId}>${ssrInterpolate(_ctx.$t("action.copyToClipboard"))}</a>`);
        _push2(ssrRenderComponent(_component_Copied, { ref: "copiedJSON" }, null, _parent2, _scopeId));
        _push2(`</span></div><div class="control__elements"${_scopeId}><pre class="api-docs__example-content"${_scopeId}><code${_scopeId}>${ssrInterpolate($options.JSONFilters)}</code></pre></div></div><div class="control margin-bottom-2"${_scopeId}><label class="control__label control__label--small"${_scopeId}>${ssrInterpolate(_ctx.$t("apiDocsFiltersBuilderModal.queryParameter"))}</label><div class="control__description"${_scopeId}><span class="position-relative"${_scopeId}><a${_scopeId}>${ssrInterpolate(_ctx.$t("action.copyToClipboard"))}</a>`);
        _push2(ssrRenderComponent(_component_Copied, { ref: "copiedEncodedJSON" }, null, _parent2, _scopeId));
        _push2(`</span></div><div class="control__elements"${_scopeId}><pre class="api-docs__example-content"${_scopeId}><code${_scopeId}>${ssrInterpolate($options.encodedJSONFilters)}</code></pre></div></div><div class="margin-bottom-2"${_scopeId}>`);
        if ($data.view.filters.length > 0) {
          _push2(ssrRenderComponent(_component_ViewFieldConditionsForm, {
            filters: $data.view.filters,
            "filter-groups": $data.view.filter_groups,
            "filter-type": $data.view.filter_type,
            fields: $props.fields,
            view: $data.view,
            "disable-filter": false,
            "read-only": false,
            "full-width": true,
            sorted: true,
            "add-condition-string": _ctx.$t("viewFilterContext.addFilter"),
            "add-condition-group-string": _ctx.$t("viewFilterContext.addFilterGroup"),
            onAddFilter: $options.addFilter,
            onAddFilterGroup: $options.addFilter,
            onDeleteFilter: $options.deleteFilter,
            onUpdateFilter: $options.updateFilter,
            onUpdateFilterType: $options.updateFilterType,
            onDeleteFilterGroup: $options.deleteFilterGroup
          }, null, _parent2, _scopeId));
        } else {
          _push2(`<!---->`);
        }
        _push2(`</div><div class="flex"${_scopeId}><a class="filters__add"${_scopeId}><i class="filters__add-icon iconoir-plus"${_scopeId}></i> ${ssrInterpolate(_ctx.$t("viewFilterContext.addFilter"))}</a><a class="filters__add"${_scopeId}><i class="filters__add-icon iconoir-plus"${_scopeId}></i> ${ssrInterpolate(_ctx.$t("viewFilterContext.addFilterGroup"))}</a></div>`);
      } else {
        return [
          createVNode("h2", { class: "box__title" }, toDisplayString(_ctx.$t("apiDocsFiltersBuilderModal.title")), 1),
          createVNode("div", { class: "control margin-bottom-2" }, [
            createVNode("div", { class: "control__elements" }, [
              createVNode(_component_Checkbox, {
                modelValue: $data.mutableUserFieldNames,
                "onUpdate:modelValue": ($event) => $data.mutableUserFieldNames = $event
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.$t("apiDocsFiltersBuilderModal.userFieldNames")), 1)
                ]),
                _: 1
              }, 8, ["modelValue", "onUpdate:modelValue"])
            ])
          ]),
          createVNode("div", { class: "control margin-bottom-2" }, [
            createVNode("label", { class: "control__label control__label--small" }, toDisplayString(_ctx.$t("apiDocsFiltersBuilderModal.json")), 1),
            createVNode("div", { class: "control__description" }, [
              createVNode("span", { class: "position-relative" }, [
                createVNode("a", {
                  onClick: withModifiers(($event) => {
                    [$options.copyToClipboard($options.JSONFilters), _ctx.$refs.copiedJSON.show()];
                  }, ["prevent"])
                }, toDisplayString(_ctx.$t("action.copyToClipboard")), 9, ["onClick"]),
                createVNode(_component_Copied, { ref: "copiedJSON" }, null, 512)
              ])
            ]),
            createVNode("div", { class: "control__elements" }, [
              createVNode("pre", { class: "api-docs__example-content" }, [
                createVNode("code", null, toDisplayString($options.JSONFilters), 1)
              ])
            ])
          ]),
          createVNode("div", { class: "control margin-bottom-2" }, [
            createVNode("label", { class: "control__label control__label--small" }, toDisplayString(_ctx.$t("apiDocsFiltersBuilderModal.queryParameter")), 1),
            createVNode("div", { class: "control__description" }, [
              createVNode("span", { class: "position-relative" }, [
                createVNode("a", {
                  onClick: withModifiers(($event) => {
                    [
                      $options.copyToClipboard($options.encodedJSONFilters),
                      _ctx.$refs.copiedEncodedJSON.show()
                    ];
                  }, ["prevent"])
                }, toDisplayString(_ctx.$t("action.copyToClipboard")), 9, ["onClick"]),
                createVNode(_component_Copied, { ref: "copiedEncodedJSON" }, null, 512)
              ])
            ]),
            createVNode("div", { class: "control__elements" }, [
              createVNode("pre", { class: "api-docs__example-content" }, [
                createVNode("code", null, toDisplayString($options.encodedJSONFilters), 1)
              ])
            ])
          ]),
          createVNode("div", { class: "margin-bottom-2" }, [
            $data.view.filters.length > 0 ? (openBlock(), createBlock(_component_ViewFieldConditionsForm, {
              key: 0,
              filters: $data.view.filters,
              "filter-groups": $data.view.filter_groups,
              "filter-type": $data.view.filter_type,
              fields: $props.fields,
              view: $data.view,
              "disable-filter": false,
              "read-only": false,
              "full-width": true,
              sorted: true,
              "add-condition-string": _ctx.$t("viewFilterContext.addFilter"),
              "add-condition-group-string": _ctx.$t("viewFilterContext.addFilterGroup"),
              onAddFilter: $options.addFilter,
              onAddFilterGroup: $options.addFilter,
              onDeleteFilter: $options.deleteFilter,
              onUpdateFilter: $options.updateFilter,
              onUpdateFilterType: $options.updateFilterType,
              onDeleteFilterGroup: $options.deleteFilterGroup
            }, null, 8, ["filters", "filter-groups", "filter-type", "fields", "view", "add-condition-string", "add-condition-group-string", "onAddFilter", "onAddFilterGroup", "onDeleteFilter", "onUpdateFilter", "onUpdateFilterType", "onDeleteFilterGroup"])) : createCommentVNode("", true)
          ]),
          createVNode("div", { class: "flex" }, [
            createVNode("a", {
              class: "filters__add",
              onClick: withModifiers(($event) => $options.addFilter(), ["prevent"])
            }, [
              createVNode("i", { class: "filters__add-icon iconoir-plus" }),
              createTextVNode(" " + toDisplayString(_ctx.$t("viewFilterContext.addFilter")), 1)
            ], 8, ["onClick"]),
            createVNode("a", {
              class: "filters__add",
              onClick: withModifiers(($event) => $options.addFilter({ filterGroupId: $options.uuid() }), ["prevent"])
            }, [
              createVNode("i", { class: "filters__add-icon iconoir-plus" }),
              createTextVNode(" " + toDisplayString(_ctx.$t("viewFilterContext.addFilterGroup")), 1)
            ], 8, ["onClick"])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("modules/database/components/docs/APIDocsFiltersBuilderModal.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const APIDocsFiltersBuilderModal = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["ssrRender", _sfc_ssrRender$e]]);
const _sfc_main$e = {
  name: "APIDocsTableListRows",
  components: {
    APIDocsFiltersBuilderModal,
    APIDocsParameter,
    APIDocsExample
  },
  props: {
    value: {
      type: Object,
      required: true
    },
    fields: {
      type: Object,
      required: true
    },
    table: { type: Object, required: true },
    getListUrl: { type: Function, required: true },
    navigate: { type: Function, required: true },
    getResponseItem: { type: Function, required: true },
    getFieldMapping: { type: Function, required: true }
  },
  emits: ["input"],
  methods: {}
};
function _sfc_ssrRender$d(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_MarkdownIt = resolveComponent("MarkdownIt");
  const _component_APIDocsParameter = resolveComponent("APIDocsParameter");
  const _component_Button = resolveComponent("Button");
  const _component_APIDocsFiltersBuilderModal = resolveComponent("APIDocsFiltersBuilderModal");
  const _component_APIDocsExample = resolveComponent("APIDocsExample");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "api-docs__item" }, _attrs))}><div class="api-docs__left"><h3${ssrRenderAttr("id", "section-table-" + $props.table.id + "-list")} class="api-docs__heading-3">${ssrInterpolate(_ctx.$t("apiDocs.listRows"))}</h3>`);
  _push(ssrRenderComponent(_component_MarkdownIt, {
    class: "api-docs__content",
    content: _ctx.$t("apiDocsTableListRows.description", $props.table)
  }, null, _parent));
  _push(`<h4 class="api-docs__heading-4">${ssrInterpolate(_ctx.$t("apiDocs.queryParameters"))}</h4><ul class="api-docs__parameters">`);
  _push(ssrRenderComponent(_component_APIDocsParameter, {
    name: "page",
    optional: true,
    type: "integer",
    standard: "1"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(_ctx.$t("apiDocsTableListRows.page"))}`);
      } else {
        return [
          createTextVNode(toDisplayString(_ctx.$t("apiDocsTableListRows.page")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_APIDocsParameter, {
    name: "size",
    optional: true,
    type: "integer",
    standard: "100"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(_ctx.$t("apiDocsTableListRows.size"))}`);
      } else {
        return [
          createTextVNode(toDisplayString(_ctx.$t("apiDocsTableListRows.size")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_APIDocsParameter, {
    name: "user_field_names",
    optional: true,
    type: "any"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_MarkdownIt, {
          class: "api-docs__content",
          content: _ctx.$t("apiDocsTableListRows.userFieldNames")
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_MarkdownIt, {
            class: "api-docs__content",
            content: _ctx.$t("apiDocsTableListRows.userFieldNames")
          }, null, 8, ["content"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_APIDocsParameter, {
    name: "search",
    optional: true,
    type: "string",
    standard: "''"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(_ctx.$t("apiDocsTableListRows.search"))}`);
      } else {
        return [
          createTextVNode(toDisplayString(_ctx.$t("apiDocsTableListRows.search")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_APIDocsParameter, {
    name: "order_by",
    optional: true,
    type: "string",
    standard: "'id'"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_MarkdownIt, {
          class: "api-docs__content",
          content: _ctx.$t("apiDocsTableListRows.orderBy")
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_MarkdownIt, {
            class: "api-docs__content",
            content: _ctx.$t("apiDocsTableListRows.orderBy")
          }, null, 8, ["content"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_APIDocsParameter, {
    name: "filters",
    optional: true,
    type: "JSON"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_MarkdownIt, {
          class: "api-docs__content",
          content: _ctx.$t("apiDocsTableListRows.filters")
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_Button, {
          type: "secondary",
          size: "small",
          onClick: ($event) => _ctx.$refs.filtersModal.show()
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`${ssrInterpolate(_ctx.$t("apiDocsTableListRows.filtersBuilder"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("apiDocsTableListRows.filtersBuilder")), 1)
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_APIDocsFiltersBuilderModal, {
          ref: "filtersModal",
          "user-field-names": $props.value.userFieldNames,
          fields: $props.fields[$props.table.id]
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_MarkdownIt, {
            class: "api-docs__content",
            content: _ctx.$t("apiDocsTableListRows.filters")
          }, null, 8, ["content"]),
          createVNode(_component_Button, {
            type: "secondary",
            size: "small",
            onClick: withModifiers(($event) => _ctx.$refs.filtersModal.show(), ["prevent"])
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(_ctx.$t("apiDocsTableListRows.filtersBuilder")), 1)
            ]),
            _: 1
          }, 8, ["onClick"]),
          createVNode(_component_APIDocsFiltersBuilderModal, {
            ref: "filtersModal",
            "user-field-names": $props.value.userFieldNames,
            fields: $props.fields[$props.table.id]
          }, null, 8, ["user-field-names", "fields"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_APIDocsParameter, {
    name: "filter__{field}__{filter}",
    optional: true,
    type: "string"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_MarkdownIt, {
          class: "api-docs__content",
          content: _ctx.$t("apiDocsTableListRows.filter", $props.table)
        }, null, _parent2, _scopeId));
        _push2(`<a${_scopeId}>${ssrInterpolate(_ctx.$t("apiDocsTableListRows.filterLink"))}</a>`);
      } else {
        return [
          createVNode(_component_MarkdownIt, {
            class: "api-docs__content",
            content: _ctx.$t("apiDocsTableListRows.filter", $props.table)
          }, null, 8, ["content"]),
          createVNode("a", {
            onClick: withModifiers(($event) => $props.navigate("section-filters"), ["prevent"])
          }, toDisplayString(_ctx.$t("apiDocsTableListRows.filterLink")), 9, ["onClick"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_APIDocsParameter, {
    name: "filter_type",
    optional: true,
    type: "string",
    standard: "'AND'"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_MarkdownIt, {
          class: "api-docs__content",
          content: _ctx.$t("apiDocsTableListRows.filterType")
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_MarkdownIt, {
            class: "api-docs__content",
            content: _ctx.$t("apiDocsTableListRows.filterType")
          }, null, 8, ["content"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_APIDocsParameter, {
    name: "include",
    optional: true,
    type: "string"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_MarkdownIt, {
          class: "api-docs__content",
          content: _ctx.$t("apiDocsTableListRows.include")
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_MarkdownIt, {
            class: "api-docs__content",
            content: _ctx.$t("apiDocsTableListRows.include")
          }, null, 8, ["content"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_APIDocsParameter, {
    name: "exclude",
    optional: true,
    type: "string"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_MarkdownIt, {
          class: "api-docs__content",
          content: _ctx.$t("apiDocsTableListRows.exclude")
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_MarkdownIt, {
            class: "api-docs__content",
            content: _ctx.$t("apiDocsTableListRows.exclude")
          }, null, 8, ["content"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_APIDocsParameter, {
    name: "view_id",
    optional: true,
    type: "integer"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_MarkdownIt, {
          class: "api-docs__content",
          content: _ctx.$t("apiDocsTableListRows.viewId")
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_MarkdownIt, {
            class: "api-docs__content",
            content: _ctx.$t("apiDocsTableListRows.viewId")
          }, null, 8, ["content"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_APIDocsParameter, {
    name: "{link_row_field}__join",
    optional: true,
    type: "string"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_MarkdownIt, {
          class: "api-docs__content",
          content: _ctx.$t("apiDocsTableListRows.join")
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_MarkdownIt, {
            class: "api-docs__content",
            content: _ctx.$t("apiDocsTableListRows.join")
          }, null, 8, ["content"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</ul></div><div class="api-docs__right">`);
  _push(ssrRenderComponent(_component_APIDocsExample, {
    value: $props.value,
    type: "GET",
    url: $props.getListUrl($props.table, true),
    response: {
      count: 1024,
      next: $props.getListUrl($props.table, false) + "?page=2",
      previous: null,
      results: [$props.getResponseItem($props.table)]
    },
    mapping: $props.getFieldMapping($props.table),
    onInput: ($event) => _ctx.$emit("input", $event)
  }, null, _parent));
  _push(`</div></div>`);
}
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("modules/database/components/docs/sections/APIDocsTableListRows.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const APIDocsTableListRows = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["ssrRender", _sfc_ssrRender$d]]);
const _sfc_main$d = {
  name: "APIDocsTableGetRow",
  components: {
    APIDocsParameter,
    APIDocsExample
  },
  props: {
    value: {
      type: Object,
      required: true
    },
    table: { type: Object, required: true },
    getItemUrl: { type: Function, required: true },
    getResponseItem: { type: Function, required: true },
    getFieldMapping: { type: Function, required: true }
  },
  emits: ["input"],
  methods: {}
};
function _sfc_ssrRender$c(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_APIDocsParameter = resolveComponent("APIDocsParameter");
  const _component_MarkdownIt = resolveComponent("MarkdownIt");
  const _component_APIDocsExample = resolveComponent("APIDocsExample");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "api-docs__item" }, _attrs))}><div class="api-docs__left"><h3${ssrRenderAttr("id", "section-table-" + $props.table.id + "-get")} class="api-docs__heading-3">${ssrInterpolate(_ctx.$t("apiDocs.getRow"))}</h3><p class="api-docs__content">${ssrInterpolate(_ctx.$t("apiDocsTableGetRow.description", $props.table))}</p><h4 class="api-docs__heading-4">${ssrInterpolate(_ctx.$t("apiDocs.pathParameters"))}</h4><ul class="api-docs__parameters">`);
  _push(ssrRenderComponent(_component_APIDocsParameter, {
    name: "row_id",
    type: "integer"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(_ctx.$t("apiDocsTableGetRow.rowId"))}`);
      } else {
        return [
          createTextVNode(toDisplayString(_ctx.$t("apiDocsTableGetRow.rowId")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</ul><h4 class="api-docs__heading-4">${ssrInterpolate(_ctx.$t("apiDocs.queryParameters"))}</h4><ul class="api-docs__parameters">`);
  _push(ssrRenderComponent(_component_APIDocsParameter, {
    name: "user_field_names",
    optional: true,
    type: "any"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_MarkdownIt, {
          class: "api-docs__content",
          content: _ctx.$t("apiDocs.userFieldNamesDescription")
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_MarkdownIt, {
            class: "api-docs__content",
            content: _ctx.$t("apiDocs.userFieldNamesDescription")
          }, null, 8, ["content"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</ul></div><div class="api-docs__right">`);
  _push(ssrRenderComponent(_component_APIDocsExample, {
    value: $props.value,
    type: "GET",
    url: $props.getItemUrl($props.table, true),
    response: $props.getResponseItem($props.table),
    mapping: $props.getFieldMapping($props.table),
    onInput: ($event) => _ctx.$emit("input", $event)
  }, null, _parent));
  _push(`</div></div>`);
}
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("modules/database/components/docs/sections/APIDocsTableGetRow.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const APIDocsTableGetRow = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["ssrRender", _sfc_ssrRender$c]]);
const _sfc_main$c = {
  name: "APIDocsParameter",
  props: {
    name: {
      type: String,
      required: true
    },
    visibleName: {
      type: String,
      required: false,
      default: null
    },
    optional: {
      type: Boolean,
      required: false,
      default: false
    },
    type: {
      type: String,
      required: true
    },
    standard: {
      type: String,
      required: false,
      default: ""
    },
    userFieldNames: {
      type: Boolean,
      required: false,
      default: false
    }
  }
};
function _sfc_ssrRender$b(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><li><div class="api-docs__parameter"><div class="api-docs__parameter-name"><div>${ssrInterpolate($props.userFieldNames ? $props.visibleName : $props.name)} `);
  if ($props.userFieldNames || $props.visibleName !== null) {
    _push(`<span class="api-docs__parameter-visible-name">${ssrInterpolate($props.userFieldNames ? $props.name : $props.visibleName)}</span>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
  if ($props.optional) {
    _push(`<div class="api-docs__parameter-optional">${ssrInterpolate(_ctx.$t("apiDocsParameter.optional"))}</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div><div class="api-docs__parameter-description"><code class="api-docs__code">${ssrInterpolate($props.type)}</code>`);
  if ($props.standard !== "") {
    _push(`<div class="api-docs__parameter-default">${ssrInterpolate(_ctx.$t("apiDocsParameter.defaultValue", { value: $props.standard }))}</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div></li><div class="api-docs__parameter-content api-docs__parameter-content--parent">`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div></div>`);
}
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("modules/database/components/docs/APIDocsParentParameter.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const APIDocsParentParameter = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["ssrRender", _sfc_ssrRender$b]]);
const _sfc_main$b = {
  name: "APIDocsTableCreateRow",
  components: {
    APIDocsParameter,
    APIDocsParentParameter,
    APIDocsExample
  },
  props: {
    value: {
      type: Object,
      required: true
    },
    table: { type: Object, required: true },
    withoutReadOnly: { type: Object, required: true },
    userFieldNames: { type: Boolean, required: true },
    getListUrl: { type: Function, required: true },
    getResponseItem: { type: Function, required: true },
    getBatchRequestExample: { type: Function, required: true },
    getBatchResponseItem: { type: Function, required: true },
    getFieldMapping: { type: Function, required: true },
    getRequestExample: { type: Function, required: true }
  },
  emits: ["input"],
  data() {
    return {
      batchMode: false
    };
  }
};
function _sfc_ssrRender$a(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Checkbox = resolveComponent("Checkbox");
  const _component_APIDocsParameter = resolveComponent("APIDocsParameter");
  const _component_MarkdownIt = resolveComponent("MarkdownIt");
  const _component_APIDocsParentParameter = resolveComponent("APIDocsParentParameter");
  const _component_APIDocsExample = resolveComponent("APIDocsExample");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "api-docs__item" }, _attrs))}><div class="api-docs__left"><div class="api-docs__heading-wrapper"><h3${ssrRenderAttr("id", "section-table-" + $props.table.id + "-create")} class="api-docs__heading-3">`);
  if ($data.batchMode === false) {
    _push(`<span>${ssrInterpolate(_ctx.$t("apiDocs.createRow"))}</span>`);
  } else {
    _push(`<span>${ssrInterpolate(_ctx.$t("apiDocs.createRows"))}</span>`);
  }
  _push(`</h3><div class="api-docs__endpoint-type">`);
  _push(ssrRenderComponent(_component_Checkbox, {
    modelValue: $data.batchMode,
    "onUpdate:modelValue": ($event) => $data.batchMode = $event
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`batch mode`);
      } else {
        return [
          createTextVNode("batch mode")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div>`);
  if ($data.batchMode === false) {
    _push(`<p class="api-docs__content">${ssrInterpolate(_ctx.$t("apiDocsTableCreateRow.description", $props.table))}</p>`);
  } else {
    _push(`<p class="api-docs__content">${ssrInterpolate(_ctx.$t("apiDocsTableCreateRows.description", $props.table))}</p>`);
  }
  if ($data.batchMode === false) {
    _push(`<div><h4 class="api-docs__heading-4">${ssrInterpolate(_ctx.$t("apiDocs.queryParameters"))}</h4><ul class="api-docs__parameters">`);
    _push(ssrRenderComponent(_component_APIDocsParameter, {
      name: "user_field_names",
      optional: true,
      type: "any"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(ssrRenderComponent(_component_MarkdownIt, {
            class: "api-docs__content",
            content: _ctx.$t("apiDocs.userFieldNamesDescription")
          }, null, _parent2, _scopeId));
        } else {
          return [
            createVNode(_component_MarkdownIt, {
              class: "api-docs__content",
              content: _ctx.$t("apiDocs.userFieldNamesDescription")
            }, null, 8, ["content"])
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(ssrRenderComponent(_component_APIDocsParameter, {
      optional: true,
      name: "before",
      type: "integer"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(_ctx.$t("apiDocsTableCreateRow.before"))}`);
        } else {
          return [
            createTextVNode(toDisplayString(_ctx.$t("apiDocsTableCreateRow.before")), 1)
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(ssrRenderComponent(_component_APIDocsParameter, {
      name: "send_webhook_events",
      optional: true,
      type: "any"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(ssrRenderComponent(_component_MarkdownIt, {
            class: "api-docs__content",
            content: _ctx.$t("apiDocs.sendWebhookEventsDescription")
          }, null, _parent2, _scopeId));
        } else {
          return [
            createVNode(_component_MarkdownIt, {
              class: "api-docs__content",
              content: _ctx.$t("apiDocs.sendWebhookEventsDescription")
            }, null, 8, ["content"])
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</ul><h4 class="api-docs__heading-4">${ssrInterpolate(_ctx.$t("apiDocs.requestBodySchema"))}</h4><ul class="api-docs__parameters"><!--[-->`);
    ssrRenderList($props.withoutReadOnly[$props.table.id], (field) => {
      _push(ssrRenderComponent(_component_APIDocsParameter, {
        key: field.id,
        name: "field_" + field.id,
        "visible-name": field.name,
        optional: true,
        type: field._.type,
        "user-field-names": $props.userFieldNames
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a;
          if (_push2) {
            _push2(`<div${_scopeId}>${(_a = field._.description) != null ? _a : ""}</div>`);
          } else {
            return [
              createVNode("div", {
                innerHTML: field._.description
              }, null, 8, ["innerHTML"])
            ];
          }
        }),
        _: 2
      }, _parent));
    });
    _push(`<!--]--></ul></div>`);
  } else {
    _push(`<div><h4 class="api-docs__heading-4">${ssrInterpolate(_ctx.$t("apiDocs.queryParameters"))}</h4><ul class="api-docs__parameters">`);
    _push(ssrRenderComponent(_component_APIDocsParameter, {
      name: "user_field_names",
      optional: true,
      type: "any"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(ssrRenderComponent(_component_MarkdownIt, {
            class: "api-docs__content",
            content: _ctx.$t("apiDocs.userFieldNamesDescription")
          }, null, _parent2, _scopeId));
        } else {
          return [
            createVNode(_component_MarkdownIt, {
              class: "api-docs__content",
              content: _ctx.$t("apiDocs.userFieldNamesDescription")
            }, null, 8, ["content"])
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(ssrRenderComponent(_component_APIDocsParameter, {
      optional: true,
      name: "before",
      type: "integer"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(_ctx.$t("apiDocsTableCreateRows.before"))}`);
        } else {
          return [
            createTextVNode(toDisplayString(_ctx.$t("apiDocsTableCreateRows.before")), 1)
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(ssrRenderComponent(_component_APIDocsParameter, {
      name: "send_webhook_events",
      optional: true,
      type: "any"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(ssrRenderComponent(_component_MarkdownIt, {
            class: "api-docs__content",
            content: _ctx.$t("apiDocs.sendWebhookEventsDescription")
          }, null, _parent2, _scopeId));
        } else {
          return [
            createVNode(_component_MarkdownIt, {
              class: "api-docs__content",
              content: _ctx.$t("apiDocs.sendWebhookEventsDescription")
            }, null, 8, ["content"])
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</ul><h4 class="api-docs__heading-4">${ssrInterpolate(_ctx.$t("apiDocs.requestBodySchema"))}</h4><ul class="api-docs__parameters api-docs__parameters--parent">`);
    _push(ssrRenderComponent(_component_APIDocsParentParameter, {
      name: "items",
      optional: false,
      type: "array"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<ul class="api-docs__parameters"${_scopeId}><!--[-->`);
          ssrRenderList($props.withoutReadOnly[$props.table.id], (field) => {
            _push2(ssrRenderComponent(_component_APIDocsParameter, {
              key: field.id,
              name: "field_" + field.id,
              "visible-name": field.name,
              optional: true,
              type: field._.type,
              "user-field-names": $props.userFieldNames
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a;
                if (_push3) {
                  _push3(`<div${_scopeId2}>${(_a = field._.description) != null ? _a : ""}</div>`);
                } else {
                  return [
                    createVNode("div", {
                      innerHTML: field._.description
                    }, null, 8, ["innerHTML"])
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          });
          _push2(`<!--]--></ul>`);
        } else {
          return [
            createVNode("ul", { class: "api-docs__parameters" }, [
              (openBlock(true), createBlock(Fragment, null, renderList($props.withoutReadOnly[$props.table.id], (field) => {
                return openBlock(), createBlock(_component_APIDocsParameter, {
                  key: field.id,
                  name: "field_" + field.id,
                  "visible-name": field.name,
                  optional: true,
                  type: field._.type,
                  "user-field-names": $props.userFieldNames
                }, {
                  default: withCtx(() => [
                    createVNode("div", {
                      innerHTML: field._.description
                    }, null, 8, ["innerHTML"])
                  ]),
                  _: 2
                }, 1032, ["name", "visible-name", "type", "user-field-names"]);
              }), 128))
            ])
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</ul></div>`);
  }
  _push(`</div>`);
  if ($data.batchMode === false) {
    _push(`<div class="api-docs__right">`);
    _push(ssrRenderComponent(_component_APIDocsExample, {
      value: $props.value,
      type: "POST",
      url: $props.getListUrl($props.table, true),
      request: $props.getRequestExample($props.table),
      response: $props.getResponseItem($props.table),
      mapping: $props.getFieldMapping($props.table),
      onInput: ($event) => _ctx.$emit("input", $event)
    }, null, _parent));
    _push(`</div>`);
  } else {
    _push(`<div class="api-docs__right">`);
    _push(ssrRenderComponent(_component_APIDocsExample, {
      value: $props.value,
      type: "POST",
      url: $props.getListUrl($props.table, true, true),
      request: $props.getBatchRequestExample($props.table),
      response: $props.getBatchResponseItem($props.table),
      mapping: $props.getFieldMapping($props.table),
      onInput: ($event) => _ctx.$emit("input", $event)
    }, null, _parent));
    _push(`</div>`);
  }
  _push(`</div>`);
}
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("modules/database/components/docs/sections/APIDocsTableCreateRow.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const APIDocsTableCreateRow = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["ssrRender", _sfc_ssrRender$a]]);
const _sfc_main$a = {
  name: "APIDocsTableUpdateRow",
  components: {
    APIDocsParameter,
    APIDocsParentParameter,
    APIDocsExample
  },
  props: {
    value: {
      type: Object,
      required: true
    },
    table: { type: Object, required: true },
    withoutReadOnly: { type: Object, required: true },
    userFieldNames: { type: Boolean, required: true },
    getItemUrl: { type: Function, required: true },
    getListUrl: { type: Function, required: true },
    getRequestExample: { type: Function, required: true },
    getResponseItem: { type: Function, required: true },
    getBatchRequestExample: { type: Function, required: true },
    getBatchResponseItem: { type: Function, required: true },
    getFieldMapping: { type: Function, required: true }
  },
  emits: ["input"],
  data() {
    return {
      batchMode: false
    };
  }
};
function _sfc_ssrRender$9(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Checkbox = resolveComponent("Checkbox");
  const _component_APIDocsParameter = resolveComponent("APIDocsParameter");
  const _component_MarkdownIt = resolveComponent("MarkdownIt");
  const _component_APIDocsParentParameter = resolveComponent("APIDocsParentParameter");
  const _component_APIDocsExample = resolveComponent("APIDocsExample");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "api-docs__item" }, _attrs))}><div class="api-docs__left"><div class="api-docs__heading-wrapper"><h3${ssrRenderAttr("id", "section-table-" + $props.table.id + "-update")} class="api-docs__heading-3">`);
  if ($data.batchMode === false) {
    _push(`<span>${ssrInterpolate(_ctx.$t("apiDocs.updateRow"))}</span>`);
  } else {
    _push(`<span>${ssrInterpolate(_ctx.$t("apiDocs.updateRows"))}</span>`);
  }
  _push(`</h3><div class="api-docs__endpoint-type">`);
  _push(ssrRenderComponent(_component_Checkbox, {
    modelValue: $data.batchMode,
    "onUpdate:modelValue": ($event) => $data.batchMode = $event
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`batch mode`);
      } else {
        return [
          createTextVNode("batch mode")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div>`);
  if ($data.batchMode === false) {
    _push(`<p class="api-docs__content">${ssrInterpolate(_ctx.$t("apiDocsTableUpdateRow.description", $props.table))}</p>`);
  } else {
    _push(`<p class="api-docs__content">${ssrInterpolate(_ctx.$t("apiDocsTableUpdateRows.description", $props.table))}</p>`);
  }
  if ($data.batchMode === false) {
    _push(`<div><h4 class="api-docs__heading-4">${ssrInterpolate(_ctx.$t("apiDocs.pathParameters"))}</h4><ul class="api-docs__parameters">`);
    _push(ssrRenderComponent(_component_APIDocsParameter, {
      name: "row_id",
      type: "integer"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(_ctx.$t("apiDocsTableUpdateRow.rowId"))}`);
        } else {
          return [
            createTextVNode(toDisplayString(_ctx.$t("apiDocsTableUpdateRow.rowId")), 1)
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</ul><h4 class="api-docs__heading-4">${ssrInterpolate(_ctx.$t("apiDocs.queryParameters"))}</h4><ul class="api-docs__parameters">`);
    _push(ssrRenderComponent(_component_APIDocsParameter, {
      name: "user_field_names",
      optional: true,
      type: "any"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(ssrRenderComponent(_component_MarkdownIt, {
            class: "api-docs__content",
            content: _ctx.$t("apiDocs.userFieldNamesDescription")
          }, null, _parent2, _scopeId));
        } else {
          return [
            createVNode(_component_MarkdownIt, {
              class: "api-docs__content",
              content: _ctx.$t("apiDocs.userFieldNamesDescription")
            }, null, 8, ["content"])
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(ssrRenderComponent(_component_APIDocsParameter, {
      name: "send_webhook_events",
      optional: true,
      type: "any"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(ssrRenderComponent(_component_MarkdownIt, {
            class: "api-docs__content",
            content: _ctx.$t("apiDocs.sendWebhookEventsDescription")
          }, null, _parent2, _scopeId));
        } else {
          return [
            createVNode(_component_MarkdownIt, {
              class: "api-docs__content",
              content: _ctx.$t("apiDocs.sendWebhookEventsDescription")
            }, null, 8, ["content"])
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</ul><h4 class="api-docs__heading-4">${ssrInterpolate(_ctx.$t("apiDocs.requestBodySchema"))}</h4><ul class="api-docs__parameters"><!--[-->`);
    ssrRenderList($props.withoutReadOnly[$props.table.id], (field) => {
      _push(ssrRenderComponent(_component_APIDocsParameter, {
        key: field.id,
        name: "field_" + field.id,
        "visible-name": field.name,
        optional: true,
        type: field._.type,
        "user-field-names": $props.userFieldNames
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a;
          if (_push2) {
            _push2(`<div${_scopeId}>${(_a = field._.description) != null ? _a : ""}</div>`);
          } else {
            return [
              createVNode("div", {
                innerHTML: field._.description
              }, null, 8, ["innerHTML"])
            ];
          }
        }),
        _: 2
      }, _parent));
    });
    _push(`<!--]--></ul></div>`);
  } else {
    _push(`<div><h4 class="api-docs__heading-4">${ssrInterpolate(_ctx.$t("apiDocs.queryParameters"))}</h4><ul class="api-docs__parameters">`);
    _push(ssrRenderComponent(_component_APIDocsParameter, {
      name: "user_field_names",
      optional: true,
      type: "any"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(ssrRenderComponent(_component_MarkdownIt, {
            class: "api-docs__content",
            content: _ctx.$t("apiDocs.userFieldNamesDescription")
          }, null, _parent2, _scopeId));
        } else {
          return [
            createVNode(_component_MarkdownIt, {
              class: "api-docs__content",
              content: _ctx.$t("apiDocs.userFieldNamesDescription")
            }, null, 8, ["content"])
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(ssrRenderComponent(_component_APIDocsParameter, {
      name: "send_webhook_events",
      optional: true,
      type: "any"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(ssrRenderComponent(_component_MarkdownIt, {
            class: "api-docs__content",
            content: _ctx.$t("apiDocs.sendWebhookEventsDescription")
          }, null, _parent2, _scopeId));
        } else {
          return [
            createVNode(_component_MarkdownIt, {
              class: "api-docs__content",
              content: _ctx.$t("apiDocs.sendWebhookEventsDescription")
            }, null, 8, ["content"])
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</ul><h4 class="api-docs__heading-4">${ssrInterpolate(_ctx.$t("apiDocs.requestBodySchema"))}</h4><ul class="api-docs__parameters api-docs__parameters-parent">`);
    _push(ssrRenderComponent(_component_APIDocsParentParameter, {
      name: "items",
      optional: false,
      type: "array"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<ul class="api-docs__parameters"${_scopeId}>`);
          _push2(ssrRenderComponent(_component_APIDocsParameter, {
            name: "id",
            type: "integer"
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`${ssrInterpolate(_ctx.$t("apiDocsTableUpdateRows.id"))}`);
              } else {
                return [
                  createTextVNode(toDisplayString(_ctx.$t("apiDocsTableUpdateRows.id")), 1)
                ];
              }
            }),
            _: 1
          }, _parent2, _scopeId));
          _push2(`<!--[-->`);
          ssrRenderList($props.withoutReadOnly[$props.table.id], (field) => {
            _push2(ssrRenderComponent(_component_APIDocsParameter, {
              key: field.id,
              name: "field_" + field.id,
              "visible-name": field.name,
              optional: true,
              type: field._.type,
              "user-field-names": $props.userFieldNames
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a;
                if (_push3) {
                  _push3(`<div${_scopeId2}>${(_a = field._.description) != null ? _a : ""}</div>`);
                } else {
                  return [
                    createVNode("div", {
                      innerHTML: field._.description
                    }, null, 8, ["innerHTML"])
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          });
          _push2(`<!--]--></ul>`);
        } else {
          return [
            createVNode("ul", { class: "api-docs__parameters" }, [
              createVNode(_component_APIDocsParameter, {
                name: "id",
                type: "integer"
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.$t("apiDocsTableUpdateRows.id")), 1)
                ]),
                _: 1
              }),
              (openBlock(true), createBlock(Fragment, null, renderList($props.withoutReadOnly[$props.table.id], (field) => {
                return openBlock(), createBlock(_component_APIDocsParameter, {
                  key: field.id,
                  name: "field_" + field.id,
                  "visible-name": field.name,
                  optional: true,
                  type: field._.type,
                  "user-field-names": $props.userFieldNames
                }, {
                  default: withCtx(() => [
                    createVNode("div", {
                      innerHTML: field._.description
                    }, null, 8, ["innerHTML"])
                  ]),
                  _: 2
                }, 1032, ["name", "visible-name", "type", "user-field-names"]);
              }), 128))
            ])
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</ul></div>`);
  }
  _push(`</div>`);
  if ($data.batchMode === false) {
    _push(`<div class="api-docs__right">`);
    _push(ssrRenderComponent(_component_APIDocsExample, {
      value: $props.value,
      type: "PATCH",
      url: $props.getItemUrl($props.table, true),
      request: $props.getRequestExample($props.table),
      response: $props.getResponseItem($props.table),
      mapping: $props.getFieldMapping($props.table),
      onInput: ($event) => _ctx.$emit("input", $event)
    }, null, _parent));
    _push(`</div>`);
  } else {
    _push(`<div class="api-docs__right">`);
    _push(ssrRenderComponent(_component_APIDocsExample, {
      value: $props.value,
      type: "PATCH",
      url: $props.getListUrl($props.table, true, true),
      request: $props.getBatchRequestExample($props.table),
      response: $props.getBatchResponseItem($props.table),
      mapping: $props.getFieldMapping($props.table),
      onInput: ($event) => _ctx.$emit("input", $event)
    }, null, _parent));
    _push(`</div>`);
  }
  _push(`</div>`);
}
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("modules/database/components/docs/sections/APIDocsTableUpdateRow.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const APIDocsTableUpdateRow = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["ssrRender", _sfc_ssrRender$9]]);
const _sfc_main$9 = {
  name: "APIDocsTableMoveRow",
  components: {
    APIDocsParameter,
    APIDocsExample
  },
  props: {
    value: {
      type: Object,
      required: true
    },
    table: { type: Object, required: true },
    userFieldNames: { type: Boolean, required: true },
    getItemUrl: { type: Function, required: true },
    getResponseItem: { type: Function, required: true },
    getFieldMapping: { type: Function, required: true }
  },
  emits: ["input"],
  computed: {
    userFieldNamesParam() {
      return this.userFieldNames ? "?user_field_names=true" : "";
    }
  },
  methods: {}
};
function _sfc_ssrRender$8(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_MarkdownIt = resolveComponent("MarkdownIt");
  const _component_APIDocsParameter = resolveComponent("APIDocsParameter");
  const _component_APIDocsExample = resolveComponent("APIDocsExample");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "api-docs__item" }, _attrs))}><div class="api-docs__left"><h3${ssrRenderAttr("id", "section-table-" + $props.table.id + "-move")} class="api-docs__heading-3">${ssrInterpolate(_ctx.$t("apiDocs.moveRow"))}</h3>`);
  _push(ssrRenderComponent(_component_MarkdownIt, {
    class: "api-docs__content",
    content: _ctx.$t("apiDocsTableMoveRow.description", $props.table)
  }, null, _parent));
  _push(`<h4 class="api-docs__heading-4">${ssrInterpolate(_ctx.$t("apiDocs.pathParameters"))}</h4><ul class="api-docs__parameters">`);
  _push(ssrRenderComponent(_component_APIDocsParameter, {
    name: "row_id",
    type: "integer"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(_ctx.$t("apiDocsTableMoveRow.rowId"))}`);
      } else {
        return [
          createTextVNode(toDisplayString(_ctx.$t("apiDocsTableMoveRow.rowId")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</ul><h4 class="api-docs__heading-4">${ssrInterpolate(_ctx.$t("apiDocs.queryParameters"))}</h4><ul class="api-docs__parameters">`);
  _push(ssrRenderComponent(_component_APIDocsParameter, {
    name: "user_field_names",
    optional: true,
    type: "any"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_MarkdownIt, {
          class: "api-docs__content",
          content: _ctx.$t("apiDocs.userFieldNamesDescription")
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_MarkdownIt, {
            class: "api-docs__content",
            content: _ctx.$t("apiDocs.userFieldNamesDescription")
          }, null, 8, ["content"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_APIDocsParameter, {
    name: "before_id",
    type: "integer",
    optional: true
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(_ctx.$t("apiDocsTableMoveRow.before"))}`);
      } else {
        return [
          createTextVNode(toDisplayString(_ctx.$t("apiDocsTableMoveRow.before")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_APIDocsParameter, {
    name: "send_webhook_events",
    optional: true,
    type: "any"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_MarkdownIt, {
          class: "api-docs__content",
          content: _ctx.$t("apiDocs.sendWebhookEventsDescription")
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_MarkdownIt, {
            class: "api-docs__content",
            content: _ctx.$t("apiDocs.sendWebhookEventsDescription")
          }, null, 8, ["content"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</ul></div><div class="api-docs__right">`);
  _push(ssrRenderComponent(_component_APIDocsExample, {
    value: $props.value,
    type: "PATCH",
    url: $props.getItemUrl($props.table, false) + "move/" + $options.userFieldNamesParam,
    response: $props.getResponseItem($props.table),
    mapping: $props.getFieldMapping($props.table),
    onInput: ($event) => _ctx.$emit("input", $event)
  }, null, _parent));
  _push(`</div></div>`);
}
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("modules/database/components/docs/sections/APIDocsTableMoveRow.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const APIDocsTableMoveRow = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["ssrRender", _sfc_ssrRender$8]]);
const _sfc_main$8 = {
  name: "APIDocsTableDeleteRow",
  components: {
    APIDocsParameter,
    APIDocsExample
  },
  props: {
    value: {
      type: Object,
      required: true
    },
    table: { type: Object, required: true },
    getItemUrl: { type: Function, required: true },
    getDeleteListUrl: { type: Function, required: true },
    getBatchDeleteRequestExample: { type: Function, required: true }
  },
  emits: ["input"],
  data() {
    return {
      batchMode: false
    };
  }
};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Checkbox = resolveComponent("Checkbox");
  const _component_APIDocsParameter = resolveComponent("APIDocsParameter");
  const _component_MarkdownIt = resolveComponent("MarkdownIt");
  const _component_APIDocsExample = resolveComponent("APIDocsExample");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "api-docs__item" }, _attrs))}><div class="api-docs__left"><div class="api-docs__heading-wrapper"><h3${ssrRenderAttr("id", "section-table-" + $props.table.id + "-delete")} class="api-docs__heading-3">`);
  if ($data.batchMode === false) {
    _push(`<span>${ssrInterpolate(_ctx.$t("apiDocs.deleteRow"))}</span>`);
  } else {
    _push(`<span>${ssrInterpolate(_ctx.$t("apiDocs.deleteRows"))}</span>`);
  }
  _push(`</h3><div class="api-docs__endpoint-type">`);
  _push(ssrRenderComponent(_component_Checkbox, {
    modelValue: $data.batchMode,
    "onUpdate:modelValue": ($event) => $data.batchMode = $event
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`batch mode`);
      } else {
        return [
          createTextVNode("batch mode")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div>`);
  if ($data.batchMode === false) {
    _push(`<p class="api-docs__content">${ssrInterpolate(_ctx.$t("apiDocsTableDeleteRow.description", $props.table))}</p>`);
  } else {
    _push(`<p class="api-docs__content">${ssrInterpolate(_ctx.$t("apiDocsTableDeleteRows.description", $props.table))}</p>`);
  }
  if ($data.batchMode === false) {
    _push(`<div><h4 class="api-docs__heading-4">${ssrInterpolate(_ctx.$t("apiDocs.pathParameters"))}</h4><ul class="api-docs__parameters">`);
    _push(ssrRenderComponent(_component_APIDocsParameter, {
      name: "row_id",
      type: "integer"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(_ctx.$t("apiDocsTableDeleteRow.rowId"))}`);
        } else {
          return [
            createTextVNode(toDisplayString(_ctx.$t("apiDocsTableDeleteRow.rowId")), 1)
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</ul></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<h4 class="api-docs__heading-4">${ssrInterpolate(_ctx.$t("apiDocs.queryParameters"))}</h4><ul class="api-docs__parameters">`);
  _push(ssrRenderComponent(_component_APIDocsParameter, {
    name: "send_webhook_events",
    optional: true,
    type: "any"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_MarkdownIt, {
          class: "api-docs__content",
          content: _ctx.$t("apiDocs.sendWebhookEventsDescription")
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_MarkdownIt, {
            class: "api-docs__content",
            content: _ctx.$t("apiDocs.sendWebhookEventsDescription")
          }, null, 8, ["content"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</ul>`);
  if ($data.batchMode === true) {
    _push(`<div><h4 class="api-docs__heading-4">${ssrInterpolate(_ctx.$t("apiDocs.requestBodySchema"))}</h4><ul class="api-docs__parameters">`);
    _push(ssrRenderComponent(_component_APIDocsParameter, {
      name: "items",
      optional: false,
      type: "array"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(_ctx.$t("apiDocsTableDeleteRows.items"))}`);
        } else {
          return [
            createTextVNode(toDisplayString(_ctx.$t("apiDocsTableDeleteRows.items")), 1)
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</ul></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
  if ($data.batchMode === false) {
    _push(`<div class="api-docs__right">`);
    _push(ssrRenderComponent(_component_APIDocsExample, {
      value: $props.value,
      type: "DELETE",
      url: $props.getItemUrl($props.table, false),
      "include-user-fields-checkbox": false,
      onInput: ($event) => _ctx.$emit("input", $event)
    }, null, _parent));
    _push(`</div>`);
  } else {
    _push(`<div class="api-docs__right">`);
    _push(ssrRenderComponent(_component_APIDocsExample, {
      value: $props.value,
      type: "POST",
      url: $props.getDeleteListUrl($props.table, false),
      request: $props.getBatchDeleteRequestExample($props.table),
      "include-user-fields-checkbox": false,
      onInput: ($event) => _ctx.$emit("input", $event)
    }, null, _parent));
    _push(`</div>`);
  }
  _push(`</div>`);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("modules/database/components/docs/sections/APIDocsTableDeleteRow.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const APIDocsTableDeleteRow = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$7]]);
const _sfc_main$7 = {
  name: "APIDocsUploadFile",
  components: {
    APIDocsParameter,
    APIDocsExample
  },
  props: {
    value: {
      type: Object,
      required: true
    },
    getUploadFileListUrl: { type: Function, required: true },
    getUploadFileExample: { type: Function, required: true },
    getUploadFileResponse: { type: Function, required: true }
  },
  emits: ["input"]
};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_MarkdownIt = resolveComponent("MarkdownIt");
  const _component_APIDocsParameter = resolveComponent("APIDocsParameter");
  const _component_APIDocsExample = resolveComponent("APIDocsExample");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "api-docs__item" }, _attrs))}><div class="api-docs__left"><div class="api-docs__heading-wrapper"><h3${ssrRenderAttr("id", "section-upload-file")} class="api-docs__heading-3"><span>${ssrInterpolate(_ctx.$t("apiDocs.uploadFile"))}</span></h3><div class="api-docs__endpoint-type"></div></div>`);
  _push(ssrRenderComponent(_component_MarkdownIt, {
    class: "api-docs__content",
    content: _ctx.$t("apiDocsUploadFile.description", {
      PUBLIC_BACKEND_URL: `${_ctx.$config.public.publicBackendUrl}`
    })
  }, null, _parent));
  _push(`<h4 class="api-docs__heading-4">${ssrInterpolate(_ctx.$t("apiDocs.requestBodySchema"))}</h4><ul class="api-docs__parameters">`);
  _push(ssrRenderComponent(_component_APIDocsParameter, {
    name: "file",
    optional: false,
    type: "multipart"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_MarkdownIt, {
          class: "api-docs__content",
          content: _ctx.$t("apiDocs.uploadFileDescription")
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_MarkdownIt, {
            class: "api-docs__content",
            content: _ctx.$t("apiDocs.uploadFileDescription")
          }, null, 8, ["content"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</ul></div><div class="api-docs__right">`);
  _push(ssrRenderComponent(_component_APIDocsExample, {
    value: $props.value,
    type: "POST",
    url: $props.getUploadFileListUrl(),
    "file-request": $props.getUploadFileExample(),
    response: $props.getUploadFileResponse(),
    "include-user-fields-checkbox": false,
    onInput: ($event) => _ctx.$emit("input", $event)
  }, null, _parent));
  _push(`</div></div>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("modules/database/components/docs/sections/APIDocsUploadFile.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const APIDocsUploadFile = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$6]]);
const _sfc_main$6 = {
  name: "APIDocsUploadFileViaURL",
  components: {
    APIDocsParameter,
    APIDocsExample
  },
  props: {
    value: {
      type: Object,
      required: true
    },
    getUploadFileViaUrlListUrl: { type: Function, required: true },
    getUploadFileViaUrlRequestExample: { type: Function, required: true },
    getUploadFileResponse: { type: Function, required: true }
  },
  emits: ["input"]
};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_MarkdownIt = resolveComponent("MarkdownIt");
  const _component_APIDocsParameter = resolveComponent("APIDocsParameter");
  const _component_APIDocsExample = resolveComponent("APIDocsExample");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "api-docs__item" }, _attrs))}><div class="api-docs__left"><div class="api-docs__heading-wrapper"><h3${ssrRenderAttr("id", "section-upload-file-via-url")} class="api-docs__heading-3"><span>${ssrInterpolate(_ctx.$t("apiDocs.uploadFileViaUrl"))}</span></h3><div class="api-docs__endpoint-type"></div></div>`);
  _push(ssrRenderComponent(_component_MarkdownIt, {
    class: "api-docs__content",
    content: _ctx.$t("apiDocsUploadFileViaURL.description", {
      PUBLIC_BACKEND_URL: `${_ctx.$config.public.publicBackendUrl}`
    })
  }, null, _parent));
  _push(`<h4 class="api-docs__heading-4">${ssrInterpolate(_ctx.$t("apiDocs.requestBodySchema"))}</h4><ul class="api-docs__parameters">`);
  _push(ssrRenderComponent(_component_APIDocsParameter, {
    name: "url",
    optional: false,
    type: "string"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_MarkdownIt, {
          class: "api-docs__content",
          content: _ctx.$t("apiDocs.uploadFileViaUrlDescription")
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_MarkdownIt, {
            class: "api-docs__content",
            content: _ctx.$t("apiDocs.uploadFileViaUrlDescription")
          }, null, 8, ["content"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</ul></div><div class="api-docs__right">`);
  _push(ssrRenderComponent(_component_APIDocsExample, {
    value: $props.value,
    type: "POST",
    url: $props.getUploadFileViaUrlListUrl(),
    response: $props.getUploadFileResponse(),
    request: $props.getUploadFileViaUrlRequestExample(),
    "include-user-fields-checkbox": false,
    onInput: ($event) => _ctx.$emit("input", $event)
  }, null, _parent));
  _push(`</div></div>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("modules/database/components/docs/sections/APIDocsUploadFileViaURL.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const APIDocsUploadFileViaURL = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$5]]);
const _sfc_main$5 = {
  name: "APIDocsListTables",
  components: {
    APIDocsExample
  },
  props: {
    value: {
      type: Object,
      required: true
    }
  },
  emits: ["input"],
  methods: {
    getListTablesResponse() {
      return [
        {
          id: 0,
          name: "string",
          order: 2147483647,
          database_id: 0
        }
      ];
    },
    getListTablesUrl() {
      return this.$config.public.publicBackendUrl + "/api/database/tables/all-tables/";
    }
  }
};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_MarkdownIt = resolveComponent("MarkdownIt");
  const _component_APIDocsExample = resolveComponent("APIDocsExample");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "api-docs__item" }, _attrs))}><div class="api-docs__left"><div class="api-docs__heading-wrapper"><h3${ssrRenderAttr("id", "section-list-tables")} class="api-docs__heading-3"><span>${ssrInterpolate(_ctx.$t("apiDocsListTables.listTables"))}</span></h3><div class="api-docs__endpoint-type"></div></div>`);
  _push(ssrRenderComponent(_component_MarkdownIt, {
    class: "api-docs__content",
    content: _ctx.$t("apiDocsListTables.listTablesDescription")
  }, null, _parent));
  _push(`</div><div class="api-docs__right">`);
  _push(ssrRenderComponent(_component_APIDocsExample, {
    value: $props.value,
    type: "GET",
    url: $options.getListTablesUrl(),
    response: $options.getListTablesResponse(),
    "include-user-fields-checkbox": false,
    onInput: ($event) => _ctx.$emit("input", $event)
  }, null, _parent));
  _push(`</div></div>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("modules/database/components/docs/sections/APIDocsListTables.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const APIDocsListTables = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$4 = {
  name: "APIDocsFilters",
  props: {},
  computed: {
    viewFilterTypes() {
      return Object.values(this.$registry.getAll("viewFilter"));
    }
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Badge = resolveComponent("Badge");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "api-docs__item" }, _attrs))}><div class="api-docs__left"><h2 id="section-filters" class="api-docs__heading-2">${ssrInterpolate(_ctx.$t("apiDocs.filters"))}</h2><table class="api-docs__table"><thead><tr><th>${ssrInterpolate(_ctx.$t("apiDocsFilters.filter"))}</th><th>${ssrInterpolate(_ctx.$t("apiDocsFilters.exampleValue"))}</th><th>${ssrInterpolate(_ctx.$t("apiDocsFilters.example"))}</th></tr></thead><tbody><!--[-->`);
  ssrRenderList($options.viewFilterTypes, (filter) => {
    _push(`<tr><td>${ssrInterpolate(filter.type)} `);
    if (filter.isDeprecated()) {
      _push(ssrRenderComponent(_component_Badge, {
        color: "yellow",
        class: "margin-left-1"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("apiDocsFilters.deprecated"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("apiDocsFilters.deprecated")), 1)
            ];
          }
        }),
        _: 2
      }, _parent));
    } else {
      _push(`<!---->`);
    }
    _push(`</td><td>${ssrInterpolate(filter.example)}</td><td>${ssrInterpolate(_ctx.$t("apiDocsFilters.field", { name: filter.getName() }))} `);
    if (filter.example !== "") {
      _push(`<!--[-->&#39;${ssrInterpolate(filter.example)}&#39;<!--]-->`);
    } else {
      _push(`<!---->`);
    }
    _push(`</td></tr>`);
  });
  _push(`<!--]--></tbody></table></div></div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("modules/database/components/docs/sections/APIDocsFilters.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const APIDocsFilters = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$3 = {
  name: "APIDocsErrors",
  components: {
    APIDocsExample
  },
  props: {
    value: {
      type: Object,
      required: true
    }
  },
  emits: ["input"]
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_APIDocsExample = resolveComponent("APIDocsExample");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "api-docs__item" }, _attrs))}><div class="api-docs__left"><h2 id="section-errors" class="api-docs__heading-2">${ssrInterpolate(_ctx.$t("apiDocs.errors"))}</h2><table class="api-docs__table"><thead><tr><th>${ssrInterpolate(_ctx.$t("apiDocsErrors.errorCode"))}</th><th>${ssrInterpolate(_ctx.$t("apiDocsErrors.name"))}</th><th>${ssrInterpolate(_ctx.$t("apiDocsErrors.description"))}</th></tr></thead><tbody><tr><td>200</td><td>Ok</td><td>${ssrInterpolate(_ctx.$t("apiDocsErrors.okDescription"))}</td></tr><tr><td>400</td><td>Bad request</td><td>${ssrInterpolate(_ctx.$t("apiDocsErrors.badRequestDescription"))}</td></tr><tr><td>401</td><td>Unauthorized</td><td>${ssrInterpolate(_ctx.$t("apiDocsErrors.unauthorizedDescription"))}</td></tr><tr><td>404</td><td>Not found</td><td>${ssrInterpolate(_ctx.$t("apiDocsErrors.notFoundDescription"))}</td></tr><tr><td>413</td><td>Request Entity Too Large</td><td>${ssrInterpolate(_ctx.$t("apiDocsErrors.requestEntityTooLargeDescription"))}</td></tr><tr><td>500</td><td>Internal Server Error</td><td>${ssrInterpolate(_ctx.$t("apiDocsErrors.internalErrorDescription"))}</td></tr><tr><td>502</td><td>Bad gateway</td><td>${ssrInterpolate(_ctx.$t("apiDocsErrors.badGatewayDescription"))}</td></tr><tr><td>503</td><td>Service unavailable</td><td>${ssrInterpolate(_ctx.$t("apiDocsErrors.unavailableDescription"))}</td></tr></tbody></table></div><div class="api-docs__right">`);
  _push(ssrRenderComponent(_component_APIDocsExample, {
    value: $props.value,
    url: _ctx.$config.public.publicBackendUrl,
    type: "",
    response: {
      error: "ERROR_NO_PERMISSION_TO_TABLE",
      description: "The token does not have permissions to the table."
    },
    onInput: ($event) => _ctx.$emit("input", $event)
  }, null, _parent));
  _push(`</div></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("modules/database/components/docs/sections/APIDocsErrors.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const APIDocsErrors = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$2 = {
  name: "APIDocsMenu",
  props: {
    database: {
      type: Object,
      required: true
    },
    navigate: {
      type: Function,
      required: true
    },
    navActive: {
      type: String,
      required: true
    },
    passwordFields: {
      type: Object,
      required: true
    }
  },
  methods: {
    getPasswordFieldNav(fieldId) {
      return "section-password-field-" + fieldId + "-authentication";
    },
    isPasswordFieldInTable(tableId) {
      const passwordFields = this.passwordFields[tableId];
      const navNames = passwordFields.map((field) => {
        return this.getPasswordFieldNav(field.id);
      });
      return navNames.includes(this.navActive);
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "api-docs__nav" }, _attrs))}><ul class="api-docs__nav-list"><li><a class="${ssrRenderClass([{ active: $props.navActive === "section-introduction" }, "api-docs__nav-link"])}">${ssrInterpolate(_ctx.$t("apiDocs.intro"))}</a></li><li><a class="${ssrRenderClass([{ active: $props.navActive === "section-authentication" }, "api-docs__nav-link"])}">${ssrInterpolate(_ctx.$t("apiDocs.authent"))}</a></li><!--[-->`);
  ssrRenderList($props.database.tables, (table) => {
    _push(`<li><a class="${ssrRenderClass([{ active: $props.navActive === "section-table-" + table.id }, "api-docs__nav-link"])}">${ssrInterpolate(_ctx.$t("apiDocs.table", table))} <small>(id: ${ssrInterpolate(table.id)})</small></a><ul class="${ssrRenderClass([{
      open: $props.navActive === "section-table-" + table.id || $props.navActive === "section-table-" + table.id + "-fields" || $props.navActive === "section-table-" + table.id + "-field-list" || $props.navActive === "section-table-" + table.id + "-list" || $props.navActive === "section-table-" + table.id + "-get" || $props.navActive === "section-table-" + table.id + "-create" || $props.navActive === "section-table-" + table.id + "-update" || $props.navActive === "section-table-" + table.id + "-move" || $props.navActive === "section-table-" + table.id + "-delete" || $options.isPasswordFieldInTable(table.id)
    }, "api-docs__nav-sub"])}"><li><a class="${ssrRenderClass([{
      active: $props.navActive === "section-table-" + table.id + "-fields"
    }, "api-docs__nav-link"])}">${ssrInterpolate(_ctx.$t("apiDocs.fields"))}</a></li><li><a class="${ssrRenderClass([{
      active: $props.navActive === "section-table-" + table.id + "-field-list"
    }, "api-docs__nav-link"])}">${ssrInterpolate(_ctx.$t("apiDocs.listFields"))}</a></li><li><a class="${ssrRenderClass([{
      active: $props.navActive === "section-table-" + table.id + "-list"
    }, "api-docs__nav-link"])}">${ssrInterpolate(_ctx.$t("apiDocs.listRows"))}</a></li><li><a class="${ssrRenderClass([{
      active: $props.navActive === "section-table-" + table.id + "-get"
    }, "api-docs__nav-link"])}">${ssrInterpolate(_ctx.$t("apiDocs.getRow"))}</a></li><li><a class="${ssrRenderClass([{
      active: $props.navActive === "section-table-" + table.id + "-create"
    }, "api-docs__nav-link"])}">${ssrInterpolate(_ctx.$t("apiDocs.createRow"))}</a></li><li><a class="${ssrRenderClass([{
      active: $props.navActive === "section-table-" + table.id + "-update"
    }, "api-docs__nav-link"])}">${ssrInterpolate(_ctx.$t("apiDocs.updateRow"))}</a></li><li><a class="${ssrRenderClass([{
      active: $props.navActive === "section-table-" + table.id + "-move"
    }, "api-docs__nav-link"])}">${ssrInterpolate(_ctx.$t("apiDocs.moveRow"))}</a></li><li><a class="${ssrRenderClass([{
      active: $props.navActive === "section-table-" + table.id + "-delete"
    }, "api-docs__nav-link"])}">${ssrInterpolate(_ctx.$t("apiDocs.deleteRow"))}</a></li><!--[-->`);
    ssrRenderList($props.passwordFields[table.id], (field) => {
      _push(`<li><a class="${ssrRenderClass([{
        active: $props.navActive === $options.getPasswordFieldNav(field.id)
      }, "api-docs__nav-link"])}">${ssrInterpolate(_ctx.$t("apiDocsPasswordFieldAuthentication.title", {
        name: field.name
      }))}</a></li>`);
    });
    _push(`<!--]--></ul></li>`);
  });
  _push(`<!--]--><li><a class="api-docs__nav-link">${ssrInterpolate(_ctx.$t("apiDocs.fileUploads"))}</a><ul class="${ssrRenderClass([{
    open: $props.navActive === "section-upload-file" || $props.navActive === "section-upload-file-via-url"
  }, "api-docs__nav-sub"])}"><li><a class="${ssrRenderClass([{
    active: $props.navActive === "section-upload-file"
  }, "api-docs__nav-link"])}">${ssrInterpolate(_ctx.$t("apiDocs.uploadFile"))}</a></li><li><a class="${ssrRenderClass([{
    active: $props.navActive === "section-upload-file-via-url"
  }, "api-docs__nav-link"])}">${ssrInterpolate(_ctx.$t("apiDocs.uploadFileViaUrl"))}</a></li></ul></li><li><a class="${ssrRenderClass([{ active: $props.navActive === "section-list-tables" }, "api-docs__nav-link"])}">${ssrInterpolate(_ctx.$t("apiDocs.listTables"))}</a></li><li><a class="${ssrRenderClass([{ active: $props.navActive === "section-filters" }, "api-docs__nav-link"])}">${ssrInterpolate(_ctx.$t("apiDocs.filters"))}</a></li><li><a class="${ssrRenderClass([{ active: $props.navActive === "section-errors" }, "api-docs__nav-link"])}">${ssrInterpolate(_ctx.$t("apiDocs.errors"))}</a></li></ul></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("modules/database/components/docs/sections/APIDocsMenu.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const APIDocsMenu = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$1 = {
  name: "APIDocsTablePasswordFieldAuthentication",
  components: {
    APIDocsParameter,
    APIDocsExample
  },
  props: {
    value: {
      type: Object,
      required: true
    },
    table: { type: Object, required: true },
    field: { type: Object, required: true }
  },
  emits: ["input"],
  methods: {}
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_MarkdownIt = resolveComponent("MarkdownIt");
  const _component_APIDocsParameter = resolveComponent("APIDocsParameter");
  const _component_APIDocsExample = resolveComponent("APIDocsExample");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "api-docs__item" }, _attrs))}><div class="api-docs__left"><h3${ssrRenderAttr("id", "section-password-field-" + $props.field.id + "-authentication")} class="api-docs__heading-3">${ssrInterpolate(_ctx.$t("apiDocsPasswordFieldAuthentication.title", { name: $props.field.name }))}</h3>`);
  _push(ssrRenderComponent(_component_MarkdownIt, {
    class: "api-docs__content",
    content: _ctx.$t("apiDocsPasswordFieldAuthentication.description", {
      name: $props.field.name
    })
  }, null, _parent));
  _push(`<h4 class="api-docs__heading-4">${ssrInterpolate(_ctx.$t("apiDocs.requestBodySchema"))}</h4><ul class="api-docs__parameters">`);
  _push(ssrRenderComponent(_component_APIDocsParameter, {
    name: "field_id",
    optional: false,
    type: "integer"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(_ctx.$t("apiDocsPasswordFieldAuthentication.fieldId"))}`);
      } else {
        return [
          createTextVNode(toDisplayString(_ctx.$t("apiDocsPasswordFieldAuthentication.fieldId")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_APIDocsParameter, {
    name: "row_id",
    optional: false,
    type: "integer"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(_ctx.$t("apiDocsPasswordFieldAuthentication.rowId"))}`);
      } else {
        return [
          createTextVNode(toDisplayString(_ctx.$t("apiDocsPasswordFieldAuthentication.rowId")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_APIDocsParameter, {
    name: "password",
    optional: false,
    type: "string"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(_ctx.$t("apiDocsPasswordFieldAuthentication.password"))}`);
      } else {
        return [
          createTextVNode(toDisplayString(_ctx.$t("apiDocsPasswordFieldAuthentication.password")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</ul></div><div class="api-docs__right">`);
  _push(ssrRenderComponent(_component_APIDocsExample, {
    value: $props.value,
    type: "POST",
    url: _ctx.$config.public.publicBackendUrl + `/api/database/fields/password-authentication/`,
    request: { field_id: 1, row_id: 1, password: "password" },
    response: { is_correct: true },
    onInput: ($event) => _ctx.$emit("input", $event)
  }, null, _parent));
  _push(`</div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("modules/database/components/docs/sections/APIDocsPasswordFieldAuthentication.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const APIDocsTablePasswordFieldAuthentication = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "APIDocsDatabase",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    useRouter();
    useTemplateRef("api-docs");
    useTemplateRef("databasesToggle");
    useTemplateRef("databases");
    const header = useTemplateRef("header");
    const {
      $store,
      $config,
      $client,
      $registry,
      $i18n: { t: $t }
    } = useNuxtApp();
    const { data, status, pending, error, refresh, clear } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData(
      "api-docs-database-" + route.params.databaseId,
      async () => {
        var _a, _b;
        const params = route.params;
        const databaseId = parseInt(params.databaseId);
        const database2 = $store.getters["application/get"](databaseId);
        const type = DatabaseApplicationType.getType();
        if (database2 === void 0 || database2.type !== type) {
          throw new Error(`database ${databaseId} not found`);
        }
        const fieldData2 = {};
        const tableIdsToRemove = [];
        for (const i in database2.tables) {
          const table = database2.tables[i];
          try {
            const { data: data2 } = await FieldService($client).fetchAll(table.id);
            fieldData2[table.id] = data2;
          } catch (error2) {
            if (((_b = (_a = error2.response) == null ? void 0 : _a.data) == null ? void 0 : _b.error) === "PERMISSION_DENIED") {
              tableIdsToRemove.push(table.id);
            } else {
              throw error2;
            }
          }
        }
        database2.tables = database2.tables.filter(
          (table) => !tableIdsToRemove.includes(table.id)
        );
        return { database: database2, fieldData: fieldData2 };
      },
      "$anHmsvh3xr"
      /* nuxt-injected */
    )), __temp = await __temp, __restore(), __temp);
    const { database, fieldData } = data.value;
    useHead({
      title: $t("apiDocsDatabase.pageTitle", database)
    });
    const exampleData = ref({
      // Indicates which request example type is shown.
      type: "curl",
      userFieldNames: true
    });
    const navActive = ref("");
    const databasesOpen = ref(false);
    const userFieldNamesParam = computed(() => {
      return exampleData.value.userFieldNames ? "?user_field_names=true" : "";
    });
    const fields = computed(() => {
      const { $registry: $registry2 } = useNuxtApp();
      return Object.fromEntries(
        Object.entries(fieldData).map(([key, fields2]) => {
          return [key, fields2.map((field) => populateField(field))];
        })
      );
    });
    const passwordFields = computed(() => {
      return Object.fromEntries(
        Object.entries(fieldData).map(([key, fields2]) => {
          return [
            key,
            fields2.filter(
              (field) => field.type === PasswordFieldType.getType() && field.allow_endpoint_authentication
            )
          ];
        })
      );
    });
    const withoutReadOnly = computed(() => {
      return Object.fromEntries(
        Object.entries(fields.value).map(([key, fields2]) => {
          return [key, fields2.filter((field) => !isReadOnlyField(field))];
        })
      );
    });
    const populateField = (field) => {
      const fieldType = $registry.get("field", field.type);
      field._ = {
        type: fieldType.getDocsDataType(field),
        description: fieldType.getDocsDescription(field),
        requestExample: fieldType.getDocsRequestExample(field),
        responseExample: fieldType.getDocsResponseExample(field),
        fieldResponseExample: fieldType.getDocsFieldResponseExample(
          field,
          fieldType.isReadOnlyField(field)
        )
      };
      return field;
    };
    const navigate = (to) => {
      const section = (void 0).querySelector(`[id='${to}']`);
      (void 0).documentElement.scrollTop = section.offsetTop - 20 + header.value.clientHeight;
    };
    const getRequestExample = (table, response = false, includeId = false) => {
      const item = {};
      let fieldsToLoopOver = fields.value[table.id];
      if (!response) {
        fieldsToLoopOver = fieldsToLoopOver.filter(
          (field) => !isReadOnlyField(field)
        );
      }
      if (includeId) {
        item.id = 0;
      }
      fieldsToLoopOver.forEach((field) => {
        const example = response ? field._.responseExample : field._.requestExample;
        if (exampleData.value.userFieldNames) {
          item[field.name] = example;
        } else {
          item[`field_${field.id}`] = example;
        }
      });
      return item;
    };
    const getBatchRequestExample = (table, response = false) => {
      return {
        items: [getRequestExample(table, response, true)]
      };
    };
    const getBatchDeleteRequestExample = (table, response = false) => {
      return {
        items: [0]
      };
    };
    const getResponseItem = (table) => {
      const item = { id: 0, order: "1.00000000000000000000" };
      Object.assign(item, getRequestExample(table, true));
      return item;
    };
    const getBatchResponseItems = (table) => {
      return {
        items: [getResponseItem(table)]
      };
    };
    const getFieldMapping = (table) => {
      const mapping = {};
      fields.value[table.id].forEach((field) => {
        if (exampleData.value.userFieldNames) {
          mapping[field.name] = `field_${field.id}`;
        } else {
          mapping[`field_${field.id}`] = field.name;
        }
      });
      return mapping;
    };
    const getListURL = (table, addUserFieldParam, batch = false) => {
      return `${$config.public.publicBackendUrl}/api/database/rows/table/${table.id}/${batch ? "batch/" : ""}${addUserFieldParam ? userFieldNamesParam.value : ""}`;
    };
    const getDeleteListURL = (table) => {
      return `${$config.public.publicBackendUrl}/api/database/rows/table/${table.id}/batch-delete/`;
    };
    const getUploadFileExample = () => {
      return "photo.png";
    };
    const getUploadFileResponse = () => {
      return $registry.get("field", FileFieldType.getType()).getDocsResponseExample()[0];
    };
    const getUploadFileListUrl = () => {
      return $config.public.publicBackendUrl + "/api/user-files/upload-file/";
    };
    const getUploadFileViaUrlRequestExample = () => {
      return {
        url: "https://baserow.io/assets/photo.png"
      };
    };
    const isReadOnlyField = (field) => {
      return !$registry.get("field", field.type).canWriteFieldValues(field);
    };
    const getUploadFileViaUrlListUrl = () => {
      return $config.public.publicBackendUrl + "/api/user-files/upload-via-url/";
    };
    const getItemURL = (table, addUserFieldParam) => {
      return getListURL(table) + "{row_id}/" + (addUserFieldParam ? userFieldNamesParam.value : "");
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0$2;
      const _component_Logo = resolveComponent("Logo");
      const _component_Button = resolveComponent("Button");
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref: "api-docs",
        class: "api-docs"
      }, _attrs))}><div class="api-docs__header">`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: { name: "index" },
        class: "api-docs__logo"
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
      _push(`<a class="api-docs__switch"${ssrRenderAttr("aria-expanded", unref(databasesOpen))} aria-controls="api-docs-databases"><i class="api-docs__switch-icon iconoir-db"></i> ${ssrInterpolate(unref($t)("apiDocsDatabase.pageTitle", unref(database)))}</a><div class="api-docs__open">`);
      if (unref(database).tables.length > 0) {
        _push(ssrRenderComponent(_component_Button, {
          tag: "nuxt-link",
          to: {
            name: "database-table",
            params: {
              databaseId: unref(database).id,
              tableId: unref(database).tables[0].id
            }
          },
          type: "secondary"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref($t)("apiDocsDatabase.openDatabase"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(unref($t)("apiDocsDatabase.openDatabase")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div id="api-docs-databases" class="api-docs__databases" style="${ssrRenderStyle(unref(databasesOpen) ? null : { display: "none" })}"><div class="api-docs__databases-inner">`);
      _push(ssrRenderComponent(unref(APIDocsSelectDatabase), {
        selected: unref(database).id
      }, null, _parent));
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: { name: "dashboard" },
        class: "select-application__back"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<i class="iconoir-arrow-left"${_scopeId}></i> ${ssrInterpolate(unref($t)("apiDocsDatabase.back"))}`);
          } else {
            return [
              createVNode("i", { class: "iconoir-arrow-left" }),
              createTextVNode(" " + toDisplayString(unref($t)("apiDocsDatabase.back")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
      _push(ssrRenderComponent(unref(APIDocsMenu), {
        database: unref(database),
        navigate,
        "nav-active": unref(navActive),
        "password-fields": passwordFields.value
      }, null, _parent));
      _push(`<div class="api-docs__body">`);
      _push(ssrRenderComponent(unref(APIDocsIntro), { database: unref(database) }, null, _parent));
      _push(ssrRenderComponent(unref(APIDocsAuth), {
        value: unref(exampleData),
        "onUpdate:value": ($event) => isRef(exampleData) ? exampleData.value = $event : null
      }, null, _parent));
      _push(`<!--[-->`);
      ssrRenderList(unref(database).tables, (table) => {
        _push(`<div>`);
        if (fields.value) {
          _push(ssrRenderComponent(unref(APIDocsTableFields), {
            table,
            fields: fields.value,
            navigate
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(ssrRenderComponent(unref(APIDocsTableListFields), {
          value: unref(exampleData),
          "onUpdate:value": ($event) => isRef(exampleData) ? exampleData.value = $event : null,
          table,
          fields: fields.value
        }, null, _parent));
        _push(ssrRenderComponent(unref(APIDocsTableListRows), {
          value: unref(exampleData),
          "onUpdate:value": ($event) => isRef(exampleData) ? exampleData.value = $event : null,
          table,
          fields: fields.value,
          navigate,
          "get-list-url": getListURL,
          "get-response-item": getResponseItem,
          "get-field-mapping": getFieldMapping
        }, null, _parent));
        _push(ssrRenderComponent(unref(APIDocsTableGetRow), {
          value: unref(exampleData),
          "onUpdate:value": ($event) => isRef(exampleData) ? exampleData.value = $event : null,
          table,
          "get-item-url": getItemURL,
          "get-response-item": getResponseItem,
          "get-field-mapping": getFieldMapping
        }, null, _parent));
        _push(ssrRenderComponent(unref(APIDocsTableCreateRow), {
          value: unref(exampleData),
          "onUpdate:value": ($event) => isRef(exampleData) ? exampleData.value = $event : null,
          table,
          "without-read-only": withoutReadOnly.value,
          "user-field-names": unref(exampleData).userFieldNames,
          "get-list-url": getListURL,
          "get-request-example": getRequestExample,
          "get-batch-request-example": getBatchRequestExample,
          "get-batch-response-item": getBatchResponseItems,
          "get-response-item": getResponseItem,
          "get-field-mapping": getFieldMapping
        }, null, _parent));
        _push(ssrRenderComponent(unref(APIDocsTableUpdateRow), {
          value: unref(exampleData),
          "onUpdate:value": ($event) => isRef(exampleData) ? exampleData.value = $event : null,
          table,
          "without-read-only": withoutReadOnly.value,
          "user-field-names": unref(exampleData).userFieldNames,
          "get-item-url": getItemURL,
          "get-list-url": getListURL,
          "get-request-example": getRequestExample,
          "get-batch-request-example": getBatchRequestExample,
          "get-batch-response-item": getBatchResponseItems,
          "get-response-item": getResponseItem,
          "get-field-mapping": getFieldMapping
        }, null, _parent));
        _push(ssrRenderComponent(unref(APIDocsTableMoveRow), {
          value: unref(exampleData),
          "onUpdate:value": ($event) => isRef(exampleData) ? exampleData.value = $event : null,
          table,
          "user-field-names": unref(exampleData).userFieldNames,
          "get-item-url": getItemURL,
          "get-response-item": getResponseItem,
          "get-field-mapping": getFieldMapping
        }, null, _parent));
        _push(ssrRenderComponent(unref(APIDocsTableDeleteRow), {
          value: unref(exampleData),
          "onUpdate:value": ($event) => isRef(exampleData) ? exampleData.value = $event : null,
          table,
          "get-item-url": getItemURL,
          "get-delete-list-url": getDeleteListURL,
          "get-batch-delete-request-example": getBatchDeleteRequestExample
        }, null, _parent));
        _push(`<!--[-->`);
        ssrRenderList(passwordFields.value[table.id], (field) => {
          _push(`<div>`);
          _push(ssrRenderComponent(APIDocsTablePasswordFieldAuthentication, {
            value: unref(exampleData),
            "onUpdate:value": ($event) => isRef(exampleData) ? exampleData.value = $event : null,
            field,
            table
          }, null, _parent));
          _push(`</div>`);
        });
        _push(`<!--]--></div>`);
      });
      _push(`<!--]-->`);
      _push(ssrRenderComponent(unref(APIDocsUploadFile), {
        value: unref(exampleData),
        "onUpdate:value": ($event) => isRef(exampleData) ? exampleData.value = $event : null,
        "get-upload-file-list-url": getUploadFileListUrl,
        "get-upload-file-example": getUploadFileExample,
        "get-upload-file-response": getUploadFileResponse
      }, null, _parent));
      _push(ssrRenderComponent(unref(APIDocsListTables), {
        value: unref(exampleData),
        "onUpdate:value": ($event) => isRef(exampleData) ? exampleData.value = $event : null
      }, null, _parent));
      _push(ssrRenderComponent(unref(APIDocsUploadFileViaURL), {
        value: unref(exampleData),
        "onUpdate:value": ($event) => isRef(exampleData) ? exampleData.value = $event : null,
        "get-upload-file-response": getUploadFileResponse,
        "get-upload-file-via-url-list-url": getUploadFileViaUrlListUrl,
        "get-upload-file-via-url-request-example": getUploadFileViaUrlRequestExample
      }, null, _parent));
      _push(ssrRenderComponent(unref(APIDocsFilters), null, null, _parent));
      _push(ssrRenderComponent(unref(APIDocsErrors), {
        value: unref(exampleData),
        "onUpdate:value": ($event) => isRef(exampleData) ? exampleData.value = $event : null
      }, null, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("modules/database/pages/APIDocsDatabase.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=APIDocsDatabase-CWMalCqz.mjs.map
