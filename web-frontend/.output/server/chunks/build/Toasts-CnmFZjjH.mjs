import { _ as _export_sfc, m as mapGetters, a2 as mapState, aa as UNDO_REDO_STATES, ab as Button, ac as TrashService, I as notifyIf } from './server.mjs';
import { resolveComponent, withCtx, createVNode, toDisplayString, createTextVNode, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderClass, ssrRenderSlot, ssrRenderAttr } from 'vue/server-renderer';

!(function() {
  try {
    var e = false ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
    var n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "07740688-c66f-4503-96e8-a9fc70f0d19d", e._sentryDebugIdIdentifier = "sentry-dbid-07740688-c66f-4503-96e8-a9fc70f0d19d");
  } catch (e2) {
  }
})();
const _sfc_main$d = {
  name: "Toast",
  props: {
    /**
     * The type of toast to display
     */
    type: {
      type: String,
      default: "info-primary",
      validator: function(value) {
        return [
          "info-neutral",
          "info-primary",
          "warning",
          "error",
          "success"
        ].includes(value);
      }
    },
    /**
     * The icon to display in the toast.
     */
    icon: {
      type: String,
      default: null
    },
    /**
     * Whether to display a loading spinner or not.
     */
    loading: {
      required: false,
      type: Boolean,
      default: false
    },
    /**
     * Whether to display a close button or not.
     */
    closeButton: {
      required: false,
      type: Boolean,
      default: false
    }
  },
  emits: ["close"],
  computed: {
    hasTitleSlot() {
      return !!this.$slots.title;
    },
    hasActionsSlot() {
      return !!this.$slots.actions;
    },
    hasContentSlot() {
      return !!this.$slots.default;
    }
  },
  mounted() {
    setTimeout(() => {
      this.close();
    }, 5e3);
  },
  methods: {
    close() {
      this.$emit("close");
    }
  }
};
function _sfc_ssrRender$d(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "toast" }, _attrs))}>`);
  if ($props.type) {
    _push(`<div><div class="${ssrRenderClass([`toast__icon--${$props.type}`, "toast__icon"])}">`);
    if ($props.loading) {
      _push(`<i class="toast__loading"></i>`);
    } else if ($props.icon) {
      _push(`<i class="${ssrRenderClass($props.icon)}"></i>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="toast__content">`);
  if ($options.hasTitleSlot) {
    _push(`<div class="toast__title">`);
    ssrRenderSlot(_ctx.$slots, "title", {}, null, _push, _parent);
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  if ($options.hasContentSlot) {
    _push(`<p class="toast__message">`);
    ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
    _push(`</p>`);
  } else {
    _push(`<!---->`);
  }
  if ($options.hasActionsSlot) {
    _push(`<div class="toast__actions">`);
    ssrRenderSlot(_ctx.$slots, "actions", {}, null, _push, _parent);
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
  if ($props.closeButton) {
    _push(`<button class="toast__close"><i class="iconoir-cancel"></i></button>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("modules/core/components/toasts/Toast.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const Toast = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["ssrRender", _sfc_ssrRender$d]]);
const _sfc_main$c = {
  name: "ConnectingToast",
  components: {
    Toast
  }
};
function _sfc_ssrRender$c(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Toast = resolveComponent("Toast");
  _push(ssrRenderComponent(_component_Toast, mergeProps({
    type: "info-neutral",
    loading: ""
  }, _attrs), {
    title: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(_ctx.$t("connectingToast.title"))}`);
      } else {
        return [
          createTextVNode(toDisplayString(_ctx.$t("connectingToast.title")), 1)
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span${_scopeId}>${ssrInterpolate(_ctx.$t("connectingToast.content"))}</span>`);
      } else {
        return [
          createVNode("span", null, toDisplayString(_ctx.$t("connectingToast.content")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("modules/core/components/toasts/ConnectingToast.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const ConnectingToast = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["ssrRender", _sfc_ssrRender$c]]);
const _sfc_main$b = {
  name: "FailedConnectingToast",
  components: {
    Toast
  },
  data() {
    return {
      loading: false
    };
  },
  methods: {
    reload() {
      this.loading = true;
      (void 0).reload();
    }
  }
};
function _sfc_ssrRender$b(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Toast = resolveComponent("Toast");
  _push(ssrRenderComponent(_component_Toast, mergeProps({
    type: "error",
    icon: "iconoir-warning-triangle"
  }, _attrs), {
    title: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(_ctx.$t("failedConnectingToast.title"))}`);
      } else {
        return [
          createTextVNode(toDisplayString(_ctx.$t("failedConnectingToast.title")), 1)
        ];
      }
    }),
    actions: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<button class="${ssrRenderClass([{ "toast__actions-button--loading": $data.loading }, "toast__actions-button toast__actions-button--primary"])}"${_scopeId}>${ssrInterpolate(_ctx.$t("failedConnectingToast.action"))}</button>`);
      } else {
        return [
          createVNode("button", {
            class: ["toast__actions-button toast__actions-button--primary", { "toast__actions-button--loading": $data.loading }],
            onClick: ($event) => $options.reload()
          }, toDisplayString(_ctx.$t("failedConnectingToast.action")), 11, ["onClick"])
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span${_scopeId}>${ssrInterpolate(_ctx.$t("failedConnectingToast.content"))}</span>`);
      } else {
        return [
          createVNode("span", null, toDisplayString(_ctx.$t("failedConnectingToast.content")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("modules/core/components/toasts/FailedConnectingToast.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const FailedConnectingToast = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["ssrRender", _sfc_ssrRender$b]]);
const _sfc_main$a = {
  name: "RestoreToast",
  components: {
    Button
  },
  props: {
    toast: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      loading: false,
      pulsing: true
    };
  },
  mounted() {
    setTimeout(() => {
      this.pulsing = false;
    }, 2e3);
    setTimeout(() => {
      this.close();
    }, 5e3);
  },
  methods: {
    close() {
      this.$store.dispatch("toast/remove", this.toast);
    },
    async restore() {
      this.loading = true;
      this.pulsing = false;
      try {
        await TrashService(this.$client).restore(this.toast.data);
      } catch (error) {
        notifyIf(error, "trash");
      }
      this.close();
      this.loading = false;
    }
  }
};
function _sfc_ssrRender$a(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Button = resolveComponent("Button");
  _push(ssrRenderComponent(_component_Button, mergeProps({
    class: ["toast-button toast-button--bottom", {
      "toast-button--pulsing": $data.pulsing
    }],
    type: "primary",
    disabled: $data.loading,
    loading: $data.loading,
    onClick: ($event) => $options.restore()
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<i class="button__icon iconoir-undo"${_scopeId}></i> ${ssrInterpolate(_ctx.$t("restoreToast.restore", {
          type: _ctx.$t("trashType." + $props.toast.data.trash_item_type)
        }))}`);
      } else {
        return [
          createVNode("i", { class: "button__icon iconoir-undo" }),
          createTextVNode(" " + toDisplayString(_ctx.$t("restoreToast.restore", {
            type: _ctx.$t("trashType." + $props.toast.data.trash_item_type)
          })), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("modules/core/components/toasts/RestoreToast.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const RestoreToast = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["ssrRender", _sfc_ssrRender$a]]);
const _sfc_main$9 = {
  name: "CopyingToast",
  components: {
    Toast
  }
};
function _sfc_ssrRender$9(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Toast = resolveComponent("Toast");
  _push(ssrRenderComponent(_component_Toast, mergeProps({ loading: "" }, _attrs), {
    title: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(_ctx.$t("copyingToast.title"))}`);
      } else {
        return [
          createTextVNode(toDisplayString(_ctx.$t("copyingToast.title")), 1)
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span${_scopeId}>${ssrInterpolate(_ctx.$t("copyingToast.content"))}</span>`);
      } else {
        return [
          createVNode("span", null, toDisplayString(_ctx.$t("copyingToast.content")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("modules/core/components/toasts/CopyingToast.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const CopyingToast = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["ssrRender", _sfc_ssrRender$9]]);
const _sfc_main$8 = {
  name: "PastingToast",
  components: {
    Toast
  }
};
function _sfc_ssrRender$8(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Toast = resolveComponent("Toast");
  _push(ssrRenderComponent(_component_Toast, mergeProps({
    loading: "",
    type: "info-primary"
  }, _attrs), {
    title: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(_ctx.$t("PastingToast.title"))}`);
      } else {
        return [
          createTextVNode(toDisplayString(_ctx.$t("PastingToast.title")), 1)
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span${_scopeId}>${ssrInterpolate(_ctx.$t("PastingToast.content"))}</span>`);
      } else {
        return [
          createVNode("span", null, toDisplayString(_ctx.$t("PastingToast.content")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("modules/core/components/toasts/PastingToast.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const PastingToast = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$8]]);
const _sfc_main$7 = {
  name: "ClearingToast",
  components: {
    Toast
  }
};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Toast = resolveComponent("Toast");
  _push(ssrRenderComponent(_component_Toast, mergeProps({
    type: "info-primary",
    loading: ""
  }, _attrs), {
    title: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(_ctx.$t("clearingToast.title"))}`);
      } else {
        return [
          createTextVNode(toDisplayString(_ctx.$t("clearingToast.title")), 1)
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span${_scopeId}>${ssrInterpolate(_ctx.$t("clearingToast.content"))}</span>`);
      } else {
        return [
          createVNode("span", null, toDisplayString(_ctx.$t("clearingToast.content")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("modules/core/components/toasts/ClearingToast.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const ClearingToast = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$7]]);
const _sfc_main$6 = {
  name: "AuthorizationErrorToast",
  components: {
    Toast
  },
  data() {
    return {
      loading: false
    };
  },
  methods: {
    reload() {
      this.loading = true;
      (void 0).reload();
    }
  }
};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Toast = resolveComponent("Toast");
  _push(ssrRenderComponent(_component_Toast, mergeProps({
    type: "error",
    icon: "iconoir-warning-triangle"
  }, _attrs), {
    title: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(_ctx.$t("authorizationErrorToast.title"))}`);
      } else {
        return [
          createTextVNode(toDisplayString(_ctx.$t("authorizationErrorToast.title")), 1)
        ];
      }
    }),
    actions: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<button class="${ssrRenderClass([{ "toast__actions-button--loading": $data.loading }, "toast__actions-button toast__actions-button--primary"])}"${_scopeId}>${ssrInterpolate(_ctx.$t("authorizationErrorToast.action"))}</button>`);
      } else {
        return [
          createVNode("button", {
            class: ["toast__actions-button toast__actions-button--primary", { "toast__actions-button--loading": $data.loading }],
            onClick: ($event) => $options.reload()
          }, toDisplayString(_ctx.$t("authorizationErrorToast.action")), 11, ["onClick"])
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span${_scopeId}>${ssrInterpolate(_ctx.$t("authorizationErrorToast.content"))}</span>`);
      } else {
        return [
          createVNode("span", null, toDisplayString(_ctx.$t("authorizationErrorToast.content")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("modules/core/components/toasts/AuthorizationErrorToast.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const AuthorizationErrorToast = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$6]]);
const _sfc_main$5 = {
  name: "UserSessionExpiredToast",
  components: {
    Toast
  },
  mounted() {
    setTimeout(() => {
      this.acknowledge();
    }, 7e3);
  },
  beforeUnmount() {
    this.acknowledge();
  },
  methods: {
    acknowledge() {
      this.$store.dispatch("toast/setUserSessionExpired", false);
    }
  }
};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Toast = resolveComponent("Toast");
  _push(ssrRenderComponent(_component_Toast, mergeProps({
    type: "info-neutral",
    icon: "iconoir-warning-triangle"
  }, _attrs), {
    title: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(_ctx.$t("userSessionExpiredToast.title"))}`);
      } else {
        return [
          createTextVNode(toDisplayString(_ctx.$t("userSessionExpiredToast.title")), 1)
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span${_scopeId}>${ssrInterpolate(_ctx.$t("userSessionExpiredToast.content"))}</span>`);
      } else {
        return [
          createVNode("span", null, toDisplayString(_ctx.$t("userSessionExpiredToast.content")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("modules/core/components/toasts/UserSessionExpiredToast.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const UserSessionExpiredToast = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$5]]);
const _sfc_main$4 = {
  name: "UserPasswordChangedToast",
  components: {
    Toast
  },
  mounted() {
    setTimeout(() => {
      this.acknowledge();
    }, 7e3);
  },
  beforeUnmount() {
    this.acknowledge();
  },
  methods: {
    acknowledge() {
      this.$store.dispatch("toast/setUserPasswordChanged", false);
    }
  }
};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Toast = resolveComponent("Toast");
  _push(ssrRenderComponent(_component_Toast, mergeProps({
    type: "info-primary",
    icon: "iconoir-warning-triangle"
  }, _attrs), {
    title: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(_ctx.$t("userPasswordChangedToast.title"))}`);
      } else {
        return [
          createTextVNode(toDisplayString(_ctx.$t("userPasswordChangedToast.title")), 1)
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span${_scopeId}>${ssrInterpolate(_ctx.$t("userPasswordChangedToast.content"))}</span>`);
      } else {
        return [
          createVNode("span", null, toDisplayString(_ctx.$t("userPasswordChangedToast.content")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("modules/core/components/toasts/UserPasswordChangedToast.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const UserPasswordChangedToast = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$3 = {
  name: "UndoRedoToast",
  components: {
    Toast
  },
  props: {
    state: {
      type: String,
      required: true
    }
  },
  computed: {
    stateContent() {
      function base({ loading = false, icon = "", title = "", content = "" }) {
        return { loading, icon, title, content };
      }
      switch (this.state) {
        case UNDO_REDO_STATES.UNDONE:
          return base({
            icon: "iconoir-check",
            title: this.$t("undoRedoToast.undoneTitle"),
            content: this.$t("undoRedoToast.undoneText")
          });
        case UNDO_REDO_STATES.REDONE:
          return base({
            icon: "iconoir-check",
            title: this.$t("undoRedoToast.redoneTitle"),
            content: this.$t("undoRedoToast.redoneText")
          });
        case UNDO_REDO_STATES.UNDOING:
          return base({
            loading: true,
            title: this.$t("undoRedoToast.undoingTitle"),
            content: this.$t("undoRedoToast.undoingText")
          });
        case UNDO_REDO_STATES.REDOING:
          return base({
            loading: true,
            title: this.$t("undoRedoToast.redoingTitle"),
            content: this.$t("undoRedoToast.redoingText")
          });
        case UNDO_REDO_STATES.NO_MORE_UNDO:
          return base({
            icon: "iconoir-cancel",
            title: this.$t("undoRedoToast.failed"),
            content: this.$t("undoRedoToast.noMoreUndo")
          });
        case UNDO_REDO_STATES.NO_MORE_REDO:
          return base({
            icon: "iconoir-cancel",
            title: this.$t("undoRedoToast.failed"),
            content: this.$t("undoRedoToast.noMoreRedo")
          });
        case UNDO_REDO_STATES.ERROR_WITH_UNDO:
          return base({
            icon: "iconoir-exclamation",
            title: this.$t("undoRedoToast.failed"),
            content: this.$t("undoRedoToast.skippingUndoDueToError")
          });
        case UNDO_REDO_STATES.ERROR_WITH_REDO:
          return base({
            icon: "iconoir-exclamation",
            title: this.$t("undoRedoToast.failed"),
            content: this.$t("undoRedoToast.skippingRedoDueToError")
          });
        default:
          return base();
      }
    }
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Toast = resolveComponent("Toast");
  _push(ssrRenderComponent(_component_Toast, mergeProps({
    icon: $options.stateContent.icon,
    loading: $options.stateContent.loading
  }, _attrs), {
    title: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate($options.stateContent.title)}`);
      } else {
        return [
          createTextVNode(toDisplayString($options.stateContent.title), 1)
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span${_scopeId}>${ssrInterpolate($options.stateContent.content)}</span>`);
      } else {
        return [
          createVNode("span", null, toDisplayString($options.stateContent.content), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("modules/core/components/toasts/UndoRedoToast.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const UndoRedoToast = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$2 = {
  name: "PermissionsUpdatedToast",
  components: {
    Toast
  },
  data() {
    return {
      loading: false
    };
  },
  methods: {
    reload() {
      this.loading = true;
      (void 0).reload();
    },
    close() {
      this.$store.dispatch("toast/setPermissionsUpdated", false);
    }
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Toast = resolveComponent("Toast");
  _push(ssrRenderComponent(_component_Toast, mergeProps({
    "close-button": "",
    type: "warning",
    icon: "iconoir-warning-triangle",
    loading: $data.loading,
    onClose: $options.close
  }, _attrs), {
    title: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(_ctx.$t("permissionsUpdatedToast.title"))}`);
      } else {
        return [
          createTextVNode(toDisplayString(_ctx.$t("permissionsUpdatedToast.title")), 1)
        ];
      }
    }),
    actions: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<button class="toast__actions-button toast__actions-button--primary"${ssrRenderAttr("loading", $data.loading)}${_scopeId}>${ssrInterpolate(_ctx.$t("permissionsUpdatedToast.action"))}</button>`);
      } else {
        return [
          createVNode("button", {
            class: "toast__actions-button toast__actions-button--primary",
            loading: $data.loading,
            onClick: ($event) => $options.reload()
          }, toDisplayString(_ctx.$t("permissionsUpdatedToast.action")), 9, ["loading", "onClick"])
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span${_scopeId}>${ssrInterpolate(_ctx.$t("permissionsUpdatedToast.content"))}</span>`);
      } else {
        return [
          createVNode("span", null, toDisplayString(_ctx.$t("permissionsUpdatedToast.content")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("modules/core/components/toasts/PermissionsUpdatedToast.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const PermissionsUpdatedToast = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = {
  name: "WorkspaceOutdatedToast",
  components: {
    Toast
  },
  data() {
    return {
      loading: false
    };
  },
  methods: {
    refresh() {
      this.loading = true;
      (void 0).location.reload();
    },
    dismiss() {
      this.$store.dispatch("toast/setWorkspaceOutdated", false);
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Toast = resolveComponent("Toast");
  _push(ssrRenderComponent(_component_Toast, mergeProps({
    type: "warning",
    icon: "iconoir-warning-circle"
  }, _attrs), {
    title: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(_ctx.$t("workspaceOutdatedToast.title"))}`);
      } else {
        return [
          createTextVNode(toDisplayString(_ctx.$t("workspaceOutdatedToast.title")), 1)
        ];
      }
    }),
    actions: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<button class="${ssrRenderClass([{ "toast__actions-button--loading": $data.loading }, "toast__actions-button toast__actions-button--primary"])}"${_scopeId}>${ssrInterpolate(_ctx.$t("workspaceOutdatedToast.action"))}</button><button class="toast__actions-button"${_scopeId}>${ssrInterpolate(_ctx.$t("workspaceOutdatedToast.dismiss"))}</button>`);
      } else {
        return [
          createVNode("button", {
            class: ["toast__actions-button toast__actions-button--primary", { "toast__actions-button--loading": $data.loading }],
            onClick: ($event) => $options.refresh()
          }, toDisplayString(_ctx.$t("workspaceOutdatedToast.action")), 11, ["onClick"]),
          createVNode("button", {
            class: "toast__actions-button",
            onClick: ($event) => $options.dismiss()
          }, toDisplayString(_ctx.$t("workspaceOutdatedToast.dismiss")), 9, ["onClick"])
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span${_scopeId}>${ssrInterpolate(_ctx.$t("workspaceOutdatedToast.content"))}</span>`);
      } else {
        return [
          createVNode("span", null, toDisplayString(_ctx.$t("workspaceOutdatedToast.content")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("modules/core/components/toasts/WorkspaceOutdatedToast.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const WorkspaceOutdatedToast = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  name: "Toasts",
  components: {
    PermissionsUpdatedToast,
    WorkspaceOutdatedToast,
    RestoreToast,
    Toast,
    ConnectingToast,
    FailedConnectingToast,
    CopyingToast,
    PastingToast,
    ClearingToast,
    AuthorizationErrorToast,
    UndoRedoToast,
    UserSessionExpiredToast,
    UserPasswordChangedToast
  },
  computed: {
    undoRedoIsNotHidden() {
      return this.undoRedoState !== UNDO_REDO_STATES.HIDDEN;
    },
    restoreToasts() {
      return this.toasts.filter((n) => n.type === "restore");
    },
    normalToasts() {
      return this.toasts.filter((n) => n.type !== "restore");
    },
    ...mapState({
      unauthorized: (state) => state.toast.authorizationError,
      failedConnecting: (state) => state.toast.failedConnecting,
      reconnecting: (state) => state.toast.reconnecting,
      copying: (state) => state.toast.copying,
      pasting: (state) => state.toast.pasting,
      clearing: (state) => state.toast.clearing,
      toasts: (state) => state.toast.items,
      undoRedoState: (state) => state.toast.undoRedoState,
      isUserSessionExpired: (state) => state.toast.userSessionExpired,
      isUserPasswordChanged: (state) => state.toast.userPasswordChanged,
      permissionsUpdated: (state) => state.toast.permissionsUpdated,
      workspaceOutdated: (state) => state.toast.workspaceOutdated
    }),
    ...mapGetters({ isAuthenticated: "auth/isAuthenticated" })
  },
  watch: {
    isAuthenticated(value) {
      if (!value) {
        this.$store.dispatch("toast/userLoggedOut");
      }
    }
  },
  methods: {
    toastIcon(toastType) {
      switch (toastType) {
        case "warning":
          return "iconoir-warning-circle";
        case "success":
          return "iconoir-check-circle";
        case "info-primary":
          return "iconoir-info-empty";
        case "error":
          return "iconoir-warning-triangle";
        default:
          return "iconoir-info-empty";
      }
    },
    closeToast(toast) {
      this.$store.dispatch("toast/remove", toast);
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_PermissionsUpdatedToast = resolveComponent("PermissionsUpdatedToast");
  const _component_UserSessionExpiredToast = resolveComponent("UserSessionExpiredToast");
  const _component_UserPasswordChangedToast = resolveComponent("UserPasswordChangedToast");
  const _component_WorkspaceOutdatedToast = resolveComponent("WorkspaceOutdatedToast");
  const _component_ConnectingToast = resolveComponent("ConnectingToast");
  const _component_FailedConnectingToast = resolveComponent("FailedConnectingToast");
  const _component_AuthorizationErrorToast = resolveComponent("AuthorizationErrorToast");
  const _component_Toast = resolveComponent("Toast");
  const _component_UndoRedoToast = resolveComponent("UndoRedoToast");
  const _component_CopyingToast = resolveComponent("CopyingToast");
  const _component_PastingToast = resolveComponent("PastingToast");
  const _component_ClearingToast = resolveComponent("ClearingToast");
  const _component_RestoreToast = resolveComponent("RestoreToast");
  _push(`<div${ssrRenderAttrs(_attrs)}><div class="toasts__container-top">`);
  if (_ctx.permissionsUpdated) {
    _push(ssrRenderComponent(_component_PermissionsUpdatedToast, null, null, _parent));
  } else {
    _push(`<!---->`);
  }
  if (_ctx.isUserSessionExpired) {
    _push(ssrRenderComponent(_component_UserSessionExpiredToast, null, null, _parent));
  } else {
    _push(`<!---->`);
  }
  if (_ctx.isUserPasswordChanged) {
    _push(ssrRenderComponent(_component_UserPasswordChangedToast, null, null, _parent));
  } else {
    _push(`<!---->`);
  }
  if (_ctx.workspaceOutdated && !_ctx.reconnecting) {
    _push(ssrRenderComponent(_component_WorkspaceOutdatedToast, null, null, _parent));
  } else {
    _push(`<!---->`);
  }
  if (_ctx.reconnecting) {
    _push(ssrRenderComponent(_component_ConnectingToast, null, null, _parent));
  } else {
    _push(`<!---->`);
  }
  if (_ctx.failedConnecting) {
    _push(ssrRenderComponent(_component_FailedConnectingToast, null, null, _parent));
  } else {
    _push(`<!---->`);
  }
  if (_ctx.unauthorized) {
    _push(ssrRenderComponent(_component_AuthorizationErrorToast, null, null, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(`<!--[-->`);
  ssrRenderList($options.normalToasts, (toast) => {
    _push(ssrRenderComponent(_component_Toast, {
      key: toast.id,
      type: toast.type,
      icon: $options.toastIcon(toast.type),
      "close-button": "",
      onClose: ($event) => $options.closeToast(toast)
    }, {
      title: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(toast.title)}`);
        } else {
          return [
            createTextVNode(toDisplayString(toast.title), 1)
          ];
        }
      }),
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<span${_scopeId}>${ssrInterpolate(toast.message)}</span>`);
        } else {
          return [
            createVNode("span", null, toDisplayString(toast.message), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
  });
  _push(`<!--]--></div><div class="toasts__container-bottom">`);
  if ($options.undoRedoIsNotHidden) {
    _push(ssrRenderComponent(_component_UndoRedoToast, { state: _ctx.undoRedoState }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  if (_ctx.copying) {
    _push(ssrRenderComponent(_component_CopyingToast, null, null, _parent));
  } else {
    _push(`<!---->`);
  }
  if (_ctx.pasting) {
    _push(ssrRenderComponent(_component_PastingToast, null, null, _parent));
  } else {
    _push(`<!---->`);
  }
  if (_ctx.clearing) {
    _push(ssrRenderComponent(_component_ClearingToast, null, null, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(`<!--[-->`);
  ssrRenderList($options.restoreToasts, (toast) => {
    _push(ssrRenderComponent(_component_RestoreToast, {
      key: toast.id,
      toast
    }, null, _parent));
  });
  _push(`<!--]--></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("modules/core/components/toasts/Toasts.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Toasts = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { Toasts as T };
//# sourceMappingURL=Toasts-CnmFZjjH.mjs.map
