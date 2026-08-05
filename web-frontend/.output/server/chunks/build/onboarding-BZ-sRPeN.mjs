import { resolveComponent, mergeProps, withCtx, createTextVNode, toDisplayString, createVNode, resolveDynamicComponent, markRaw, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderVNode } from 'vue/server-renderer';
import { _ as _export_sfc, k as error, ae as jobProgress, af as setInterval, W as WorkspaceService, I as notifyIf, A as AuthService, d as useI18n, g as useHead } from './server.mjs';
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
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "9b4a41ce-d031-4ac4-8375-6577c7c121cd", e._sentryDebugIdIdentifier = "sentry-dbid-9b4a41ce-d031-4ac4-8375-6577c7c121cd");
  } catch (e2) {
  }
})();
const _sfc_main$1 = {
  name: "CircleProgressBar",
  props: {
    value: {
      type: Number,
      required: true
    },
    size: {
      type: Number,
      required: false,
      default: 32
    },
    strokeWidth: {
      type: Number,
      required: false,
      default: 4
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: $props.size,
    height: $props.size,
    viewBox: `0 0 ${$props.size} ${$props.size}`,
    class: "circle-progress-bar",
    style: {
      "--size": `${$props.size}px`,
      "--stroke-width": `${$props.strokeWidth}px`,
      "--progress": $props.value
    }
  }, _attrs))}><circle class="circle-progress-bar__background"></circle><circle class="circle-progress-bar__foreground"></circle></svg>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("modules/core/components/CircleProgressBar.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const CircleProgressBar = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  components: { Toasts, CircleProgressBar },
  mixins: [error, jobProgress],
  setup() {
    const { t } = useI18n();
    useHead({
      title: t("onboarding.title")
    });
  },
  data() {
    return {
      stepIndex: 0,
      data: {},
      creating: false,
      creatingFailed: false,
      cancelling: false,
      reloading: false,
      message: null,
      component: null
    };
  },
  computed: {
    steps() {
      const steps = Object.values(this.$registry.getAll("onboarding"));
      return steps.filter((step) => {
        return step.condition(this.data);
      }).sort((a, b) => a.getOrder() - b.getOrder());
    },
    step() {
      return this.steps[this.stepIndex];
    },
    progressPercentage() {
      return Math.ceil(this.stepIndex / this.steps.length * 100);
    },
    canSkip() {
      return this.step.canSkip();
    }
  },
  methods: {
    /**
     * Called when the user wants to go to the user step. This means that the provided
     * form values must be valid. If the onboarding reached the end, it should
     * automatically complete it.
     */
    async next() {
      if (this.stepIndex === this.steps.length - 1) {
        await this.complete();
      } else {
        this.stepIndex++;
        this.$nextTick(() => {
          this.$refs.bodyWrapper.scrollTop = 0;
        });
      }
    },
    /**
     * Called when the user wants to skip a step. It's not possible to this for every
     * step.
     */
    async skip() {
      delete this.data[this.step.getType()];
      await this.next();
    },
    /**
     * Called when all the steps have been filled out. It will start the process off
     * completing the onboarding by collecting the data filled out by every step, and
     * call the `complete` method of every step. This will make sure that the onboarding
     * only creating the appropriate resources if every step has been completed
     * successfully.
     */
    async complete() {
      this.creating = true;
      const responses = {};
      let route = { name: "dashboard" };
      const completeCallback = (message = null, component = null) => {
        this.message = message;
        this.component = component ? markRaw(component) : null;
      };
      for (let i = 0; i < this.steps.length; i++) {
        const step = this.steps[i];
        try {
          responses[step.getType()] = await step.complete(
            this.data,
            responses,
            completeCallback
          );
        } catch (error2) {
          console.error(error2);
          this.creatingFailed = true;
          return;
        } finally {
          this.message = null;
          this.component = null;
        }
        const job = step.getJobForPolling(this.data, responses);
        if (job) {
          try {
            await this.startAndWaitForJob(job);
            responses[step.getType()] = this.job;
            this.job = null;
          } catch (error2) {
            this.creatingFailed = true;
            console.error(error2);
            return;
          }
        }
        const completedRoute = step.getCompletedRoute(this.data, responses);
        if (completedRoute) {
          route = completedRoute;
        }
      }
      await this.markAsComplete();
      await this.$store.dispatch("workspace/clearAll");
      await this.$store.dispatch("application/clearAll");
      this.$router.push(route);
    },
    /**
     * Mark the onboarding as completed, and redirect the user to the dashboard so
     * that they can start working with their database.
     */
    async markAsComplete() {
      try {
        const { data } = await AuthService(this.$client).update({
          completed_onboarding: true
        });
        this.$store.dispatch("auth/forceUpdateUserData", { user: data });
      } catch (error2) {
        notifyIf(error2);
      }
    },
    /**
     * Called when the user clicks on the cancel button. This will stop the onboarding,
     * create an initial workspace, and mark it as completed.
     */
    async cancel() {
      this.cancelling = true;
      try {
        const { data: workspace } = await WorkspaceService(
          this.$client
        ).createInitialWorkspace();
        for (const plugin of Object.values(this.$registry.getAll("plugin"))) {
          await plugin.initialWorkspaceCreated(workspace);
        }
      } catch (error2) {
        notifyIf(error2);
      }
      await this.markAsComplete();
      await this.$store.dispatch("workspace/clearAll");
      await this.$store.dispatch("application/clearAll");
      this.$router.push({ name: "dashboard" });
    },
    updateData(data) {
      this.data = { ...this.data, [this.step.getType()]: data };
    },
    isValid() {
      var _a;
      const form = (_a = this.$refs) == null ? void 0 : _a.form;
      if (!form) {
        return false;
      }
      const isValid = form == null ? void 0 : form.isValid;
      if (typeof isValid === "function") {
        return isValid();
      } else {
        throw new TypeError(
          "The onboarding form component must contain an `isValid` function."
        );
      }
    },
    refresh() {
      this.reloading = true;
      (void 0).reload();
    },
    startAndWaitForJob(job) {
      this.startJobPoller(job);
      return new Promise((resolve, reject) => {
        setInterval();
      });
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Toasts = resolveComponent("Toasts");
  const _component_Button = resolveComponent("Button");
  const _component_ProgressBar = resolveComponent("ProgressBar");
  const _component_Logo = resolveComponent("Logo");
  const _component_CircleProgressBar = resolveComponent("CircleProgressBar");
  const _component_ButtonText = resolveComponent("ButtonText");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "onboarding" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_Toasts, null, null, _parent));
  if ($data.creating && $data.creatingFailed) {
    _push(`<div class="onboarding__loading"><div class="onboarding__loading-text">${ssrInterpolate(_ctx.$t("onboarding.failedTitle"))}</div><p>${ssrInterpolate(_ctx.$t("onboarding.failedDescription"))}</p><div>`);
    _push(ssrRenderComponent(_component_Button, {
      type: "secondary",
      size: "large",
      class: "margin-right-2",
      loading: $data.reloading,
      onClick: ($event) => $options.refresh()
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(_ctx.$t("onboarding.failedTryAgain"))}`);
        } else {
          return [
            createTextVNode(toDisplayString(_ctx.$t("onboarding.failedTryAgain")), 1)
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(ssrRenderComponent(_component_Button, {
      type: "danger",
      size: "large",
      loading: $data.cancelling,
      onClick: $options.cancel
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(_ctx.$t("onboarding.failedSkip"))}`);
        } else {
          return [
            createTextVNode(toDisplayString(_ctx.$t("onboarding.failedSkip")), 1)
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</div></div>`);
  } else if ($data.creating) {
    _push(`<div class="onboarding__loading">`);
    if ($data.component) {
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent($data.component), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate($data.message)}`);
          } else {
            return [
              createTextVNode(toDisplayString($data.message), 1)
            ];
          }
        }),
        _: 1
      }), _parent);
    } else {
      _push(`<!--[--><div class="loading"></div><div class="onboarding__loading-text">${ssrInterpolate(_ctx.$t("onboarding.creating"))}</div>`);
      if (_ctx.job) {
        _push(`<div class="onboarding__loading-progress">`);
        _push(ssrRenderComponent(_component_ProgressBar, {
          value: _ctx.job.progress_percentage
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if ($data.message) {
        _push(`<div class="onboarding__waiting-message">${ssrInterpolate($data.message)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    }
    _push(`</div>`);
  } else {
    _push(`<!--[--><div class="onboarding__form"><div class="onboarding__head">`);
    _push(ssrRenderComponent(_component_Logo, { class: "onboarding__logo" }, null, _parent));
    _push(ssrRenderComponent(_component_CircleProgressBar, { value: $options.progressPercentage }, null, _parent));
    _push(`</div><div class="onboarding__body-wrapper"><div class="onboarding__body"><div>`);
    ssrRenderVNode(_push, createVNode(resolveDynamicComponent($options.step.getFormComponent()), {
      ref: "form",
      data: $data.data,
      onUpdateData: $options.updateData
    }, null), _parent);
    _push(`</div><div class="onboarding__actions">`);
    _push(ssrRenderComponent(_component_Button, {
      "ph-autocapture": "onboarding-continue-step-" + $options.step.getType(),
      type: "primary",
      size: "large",
      "full-width": "",
      disabled: !$options.isValid() || !$data.data,
      onClick: ($event) => $options.next()
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(_ctx.$t("onboarding.continue"))}`);
        } else {
          return [
            createTextVNode(toDisplayString(_ctx.$t("onboarding.continue")), 1)
          ];
        }
      }),
      _: 1
    }, _parent));
    if ($options.canSkip) {
      _push(`<div class="onboarding__skip">`);
      _push(ssrRenderComponent(_component_ButtonText, {
        "ph-autocapture": "onboarding-skip-step-" + $options.step.getType(),
        tag: "a",
        onClick: $options.skip
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("onboarding.skip"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("onboarding.skip")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div></div></div>`);
    if ($data.stepIndex === 0) {
      _push(`<div class="onboarding__cancel">`);
      _push(ssrRenderComponent(_component_ButtonText, {
        "ph-autocapture": "onboarding-cancel-step-" + $options.step.getType(),
        tag: "a",
        loading: $data.cancelling,
        onClick: $options.cancel
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("onboarding.cancel"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("onboarding.cancel")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div><div class="onboarding__preview">`);
    ssrRenderVNode(_push, createVNode(resolveDynamicComponent($options.step.getPreviewComponent($data.data)), mergeProps($options.step.getAdditionalPreviewProps(), { data: $data.data }), null), _parent);
    _push(`</div><!--]-->`);
  }
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("modules/core/pages/onboarding.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const onboarding = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { onboarding as default };
//# sourceMappingURL=onboarding-BZ-sRPeN.mjs.map
