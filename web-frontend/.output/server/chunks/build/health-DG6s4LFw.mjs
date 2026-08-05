import { withAsyncContext, computed, resolveComponent, mergeProps, withCtx, createTextVNode, createVNode, toDisplayString, getCurrentInstance, reactive, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderComponent } from 'vue/server-renderer';
import { useVuelidate } from '@vuelidate/core';
import { u as useNuxtApp, g as useHead, f as useAsyncData, _ as _export_sfc, k as error, a1 as form, m as mapGetters } from './server.mjs';
import { helpers, email, required } from '@vuelidate/validators';
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
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "efdf3329-ca88-4a38-b946-d91dc55eaeeb", e._sentryDebugIdIdentifier = "sentry-dbid-efdf3329-ca88-4a38-b946-d91dc55eaeeb");
  } catch (e2) {
  }
})();
const HealthService = (client) => {
  return {
    getAll() {
      return client.get("/_health/full/");
    },
    testEmail(targetEmail) {
      return client.post("/_health/email/", {
        target_email: targetEmail
      });
    }
  };
};
const _sfc_main$1 = {
  name: "EmailerTester",
  mixins: [error, form],
  setup() {
    const instance = getCurrentInstance();
    const values = reactive({
      targetEmail: "test@example.com"
    });
    const rules = {
      values: {
        targetEmail: {
          required: helpers.withMessage(
            instance.proxy.$t("error.requiredField"),
            required
          ),
          email: helpers.withMessage(
            instance.proxy.$t("emailTester.invalidTargetEmail"),
            email
          )
        }
      }
    };
    const v$ = useVuelidate(rules, { values }, { $lazy: true });
    return { values, v$, loading: false };
  },
  data() {
    return {
      testResult: {
        succeeded: null,
        error_type: null,
        error: null,
        error_stack: null
      }
    };
  },
  computed: {
    ...mapGetters({ username: "auth/getUsername" }),
    trimmedFullStack() {
      var _a, _b;
      return (_b = (_a = this.testResult) == null ? void 0 : _a.error_stack) == null ? void 0 : _b.trim();
    }
  },
  mounted() {
    if (this.username) {
      this.values.targetEmail = this.username;
    }
  },
  methods: {
    async submit() {
      this.loading = true;
      this.testResult = {};
      this.hideError();
      try {
        const { data } = await HealthService(this.$client).testEmail(
          this.values.targetEmail
        );
        this.testResult = data;
      } catch (e) {
        this.handleError(e, "health");
        this.testResult = {};
      }
      this.loading = false;
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Error = resolveComponent("Error");
  const _component_Alert = resolveComponent("Alert");
  const _component_FormGroup = resolveComponent("FormGroup");
  const _component_FormInput = resolveComponent("FormInput");
  const _component_Button = resolveComponent("Button");
  _push(`<div${ssrRenderAttrs(_attrs)}><h2>${ssrInterpolate(_ctx.$t("emailTester.title"))} <a href="https://baserow.io/docs/installation%2Fconfiguration#email-configuration" target="_blank"><i class="iconoir-chat-bubble-question"></i></a></h2>`);
  _push(ssrRenderComponent(_component_Error, { error: _ctx.error }, null, _parent));
  if ($data.testResult.succeeded != null) {
    _push(`<div>`);
    if (!$data.testResult.succeeded) {
      _push(ssrRenderComponent(_component_Alert, { type: "error" }, {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate($data.testResult.error_type)}`);
          } else {
            return [
              createTextVNode(toDisplayString($data.testResult.error_type), 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}><p${_scopeId}>${ssrInterpolate($data.testResult.error)}</p><pre class="email-tester__full-stack"${_scopeId}>${ssrInterpolate($options.trimmedFullStack)}</pre></div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode("p", null, toDisplayString($data.testResult.error), 1),
                createVNode("pre", { class: "email-tester__full-stack" }, toDisplayString($options.trimmedFullStack), 1)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    } else {
      _push(ssrRenderComponent(_component_Alert, { type: "success" }, {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("emailTester.success"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("emailTester.success")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
    }
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<form>`);
  if ($setup.v$.values.targetEmail) {
    _push(ssrRenderComponent(_component_FormGroup, {
      required: "",
      "small-label": "",
      class: "margin-bottom-2",
      label: _ctx.$t("emailTester.targetEmailLabel"),
      error: _ctx.fieldHasErrors("targetEmail")
    }, {
      error: withCtx((_, _push2, _parent2, _scopeId) => {
        var _a, _b;
        if (_push2) {
          _push2(`${ssrInterpolate((_a = $setup.v$.values.targetEmail.$errors[0]) == null ? void 0 : _a.$message)}`);
        } else {
          return [
            createTextVNode(toDisplayString((_b = $setup.v$.values.targetEmail.$errors[0]) == null ? void 0 : _b.$message), 1)
          ];
        }
      }),
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(ssrRenderComponent(_component_FormInput, {
            ref: "name",
            modelValue: $setup.v$.values.targetEmail.$model,
            "onUpdate:modelValue": ($event) => $setup.v$.values.targetEmail.$model = $event,
            error: _ctx.fieldHasErrors("targetEmail"),
            disabled: $setup.loading,
            onBlur: $setup.v$.values.targetEmail.$touch
          }, null, _parent2, _scopeId));
        } else {
          return [
            createVNode(_component_FormInput, {
              ref: "name",
              modelValue: $setup.v$.values.targetEmail.$model,
              "onUpdate:modelValue": ($event) => $setup.v$.values.targetEmail.$model = $event,
              error: _ctx.fieldHasErrors("targetEmail"),
              disabled: $setup.loading,
              onBlur: $setup.v$.values.targetEmail.$touch
            }, null, 8, ["modelValue", "onUpdate:modelValue", "error", "disabled", "onBlur"])
          ];
        }
      }),
      _: 1
    }, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(ssrRenderComponent(_component_Button, {
    loading: $setup.loading,
    disabled: $setup.loading || $setup.v$.$invalid
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(_ctx.$t("emailTester.submit"))}`);
      } else {
        return [
          createTextVNode(toDisplayString(_ctx.$t("emailTester.submit")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</form></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("modules/core/components/health/EmailTester.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const EmailTester = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "health",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { $client, $i18n } = useNuxtApp();
    useHead({ title: $i18n.t("health.title") });
    const { data } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData("health", async () => {
      const res = await HealthService($client).getAll();
      return res.data;
    })), __temp = await __temp, __restore(), __temp);
    const healthChecks = computed(() => {
      var _a, _b;
      return (_b = (_a = data.value) == null ? void 0 : _a.checks) != null ? _b : [];
    });
    const celeryQueueSize = computed(() => {
      var _a, _b;
      return (_b = (_a = data.value) == null ? void 0 : _a.celery_queue_size) != null ? _b : 0;
    });
    const celeryExportQueueSize = computed(
      () => {
        var _a, _b;
        return (_b = (_a = data.value) == null ? void 0 : _a.celery_export_queue_size) != null ? _b : 0;
      }
    );
    function camelCaseToSpaceSeparated(str) {
      if (!str) return "unknown";
      return str.toString().replace(/([A-Z])/g, " $1");
    }
    function error2() {
      setTimeout(() => {
        throw new Error("Health check error");
      }, 1);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Button = resolveComponent("Button");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "layout__col-2-scroll" }, _attrs))}><div class="admin-health"><h1>${ssrInterpolate(_ctx.$t("health.title"))}</h1><div class="admin-health__group"><div class="admin-health__description">${ssrInterpolate(_ctx.$t("health.description"))}</div><div><!--[-->`);
      ssrRenderList(healthChecks.value, (status, checkName) => {
        _push(`<div class="admin-health__check-item"><div class="admin-health__check-item-label"><div class="admin-health__check-item-name">${ssrInterpolate(camelCaseToSpaceSeparated(checkName))}</div></div><div class="${ssrRenderClass([status !== "working" ? "warning" : "", "admin-health__icon"])}"><i class="${ssrRenderClass(
          status === "working" ? "iconoir-check admin-health__icon--success" : "iconoir-cancel admin-health__icon--fail"
        )}"></i>`);
        if (status !== "working") {
          _push(`<div class="admin-health__check-item-description">${ssrInterpolate(status)}</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      });
      _push(`<!--]--><div class="admin-health__check-item"><div class="admin-health__check-item-label"><div class="admin-health__check-item-name">Celery queue size</div></div> ${ssrInterpolate(celeryQueueSize.value)}</div><div class="admin-health__check-item"><div class="admin-health__check-item-label"><div class="admin-health__check-item-name"> Celery export queue size </div></div> ${ssrInterpolate(celeryExportQueueSize.value)}</div></div></div><div class="admin-health__group">`);
      _push(ssrRenderComponent(EmailTester, null, null, _parent));
      _push(`</div><div class="admin-health__group"><h2>Error tester</h2>`);
      _push(ssrRenderComponent(_component_Button, {
        onClick: ($event) => error2()
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Click to throw error`);
          } else {
            return [
              createTextVNode("Click to throw error")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("modules/core/pages/admin/health.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=health-DG6s4LFw.mjs.map
