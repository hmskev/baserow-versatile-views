import { _ as _export_sfc, J as context } from './server.mjs';
import { resolveComponent, resolveDirective, mergeProps, withCtx, withDirectives, openBlock, createBlock, createCommentVNode, createVNode, Fragment, renderList, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrGetDirectiveProps, ssrInterpolate, ssrRenderSlot, ssrRenderList, ssrRenderStyle } from 'vue/server-renderer';
import moment from 'moment-timezone';

!(function() {
  try {
    var e = false ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
    var n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "7c32d99f-fdad-48fe-8b6d-19ef8be37add", e._sentryDebugIdIdentifier = "sentry-dbid-7c32d99f-fdad-48fe-8b6d-19ef8be37add");
  } catch (e2) {
  }
})();
const _sfc_main$3 = {
  name: "ExpandOnOverflowHiddenContext",
  mixins: [context],
  props: {
    nameKey: {
      required: false,
      type: String,
      default: "name"
    },
    hiddenRecords: {
      required: true,
      type: Array
    }
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Context = resolveComponent("Context");
  _push(ssrRenderComponent(_component_Context, mergeProps({
    ref: "context",
    "overflow-scroll": true,
    "max-height-if-outside-viewport": true
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<ul class="context__menu"${_scopeId}><!--[-->`);
        ssrRenderList($props.hiddenRecords, (value) => {
          _push2(`<li class="expand-on-overflow-hidden-context__dropdown-item"${_scopeId}>${ssrInterpolate(value[$props.nameKey])}</li>`);
        });
        _push2(`<!--]--></ul>`);
      } else {
        return [
          createVNode("ul", { class: "context__menu" }, [
            (openBlock(true), createBlock(Fragment, null, renderList($props.hiddenRecords, (value) => {
              return openBlock(), createBlock("li", {
                key: "hidden-record" + value.id,
                class: "expand-on-overflow-hidden-context__dropdown-item"
              }, toDisplayString(value[$props.nameKey]), 1);
            }), 128))
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("modules/core/components/crudTable/ExpandOnOverflowHiddenContext.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const ExpandOnOverflowHiddenContext = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$2 = {
  name: "ExpandOnOverflowList",
  components: {
    ExpandOnOverflowHiddenContext
  },
  props: {
    row: {
      required: true,
      type: Object
    },
    column: {
      required: true,
      type: Object
    },
    nameKey: {
      required: false,
      type: String,
      default: "name"
    }
  },
  data() {
    return {
      overflowing: false,
      numHiddenRecords: 0,
      renderContext: false,
      expandOrder: -1
    };
  },
  computed: {
    noRecords() {
      return this.records.length === 0;
    },
    hiddenRecords() {
      return this.records.slice(this.records.length - this.numHiddenRecords);
    },
    records() {
      return this.row[this.column.key];
    },
    getId() {
      return this.row.id;
    }
  },
  mounted() {
    this.$el.resizeObserver = new ResizeObserver(this.recalculateHiddenRecords);
    this.$el.resizeObserver.observe(this.$el);
  },
  beforeUnmount() {
    this.$el.resizeObserver.disconnect();
  },
  created() {
    this.recalculateHiddenRecords();
  },
  methods: {
    showHiddenContext(event) {
      this.$refs.hiddenContext.show(event.currentTarget, "bottom", "left", 4);
    },
    /**
     * Calculates how many records fit into the records cell, if any are overflowing and
     * do not fit we add a + button to display a context menu showing these hidden
     * records. We rely on flexbox wrapping to make records which do not fit in the cell
     * wrap down to a new row below which is invisible.
     */
    recalculateHiddenRecords() {
      {
        return;
      }
    }
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ExpandOnOverflowHiddenContext = resolveComponent("ExpandOnOverflowHiddenContext");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "expand-overflow-list" }, _attrs))}><div class="expand-overflow-list__container">`);
  if ($options.noRecords) {
    _push(`<span>`);
    ssrRenderSlot(_ctx.$slots, "no-records", {}, null, _push, _parent);
    _push(`</span>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<span class="expand-overflow-list__empty-item"></span><!--[-->`);
  ssrRenderList($options.records, (record, index) => {
    _push(`<span class="expand-overflow-list__item" style="${ssrRenderStyle({
      order: index
    })}">${ssrInterpolate(record[$props.nameKey])} `);
    ssrRenderSlot(_ctx.$slots, "icon", { record }, null, _push, _parent);
    _push(`</span>`);
  });
  _push(`<!--]--><a class="expand-overflow-list__expand" style="${ssrRenderStyle([
    {
      order: $data.expandOrder
    },
    $data.overflowing ? null : { display: "none" }
  ])}">+${ssrInterpolate($data.numHiddenRecords)}</a>`);
  _push(ssrRenderComponent(_component_ExpandOnOverflowHiddenContext, {
    ref: "hiddenContext",
    "name-key": $props.nameKey,
    "hidden-records": $options.hiddenRecords
  }, null, _parent));
  _push(`</div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("modules/core/components/crudTable/ExpandOnOverflowList.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const ExpandOnOverflowList = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = {
  name: "UserWorkspacesField",
  components: {
    ExpandOnOverflowList
  },
  props: {
    row: {
      required: true,
      type: Object
    },
    column: {
      required: true,
      type: Object
    }
  },
  data() {
    return {
      nameKey: "name"
    };
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ExpandOnOverflowList = resolveComponent("ExpandOnOverflowList");
  const _directive_tooltip = resolveDirective("tooltip");
  let _temp0;
  _push(ssrRenderComponent(_component_ExpandOnOverflowList, mergeProps({
    ref: "expandOnOverflow",
    row: $props.row,
    column: $props.column,
    "name-key": $data.nameKey
  }, _attrs), {
    icon: withCtx(({ record }, _push2, _parent2, _scopeId) => {
      var _a;
      if (_push2) {
        if (record.permissions === "ADMIN") {
          _push2(`<i${ssrRenderAttrs(_temp0 = mergeProps({ class: "user-admin-group__icon iconoir-user-crown" }, ssrGetDirectiveProps(_ctx, _directive_tooltip, _ctx.$t("user.isWorkspaceAdmin"))))}${_scopeId}>${"textContent" in _temp0 ? ssrInterpolate(_temp0.textContent) : (_a = _temp0.innerHTML) != null ? _a : ""}</i>`);
        } else {
          _push2(`<!---->`);
        }
      } else {
        return [
          record.permissions === "ADMIN" ? withDirectives((openBlock(), createBlock("i", {
            key: 0,
            class: "user-admin-group__icon iconoir-user-crown"
          }, null, 512)), [
            [_directive_tooltip, _ctx.$t("user.isWorkspaceAdmin")]
          ]) : createCommentVNode("", true)
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("modules/core/components/admin/users/fields/UserWorkspacesField.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const UserWorkspacesField = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  name: "LocalDateField",
  props: {
    row: {
      required: true,
      type: Object
    },
    column: {
      required: true,
      type: Object
    }
  },
  methods: {
    localDate(date, format) {
      if (date) {
        return moment.utc(date).local().format(format);
      } else {
        return "";
      }
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  var _a;
  _push(`<div${ssrRenderAttrs(_attrs)}>${ssrInterpolate($options.localDate(
    $props.row[$props.column.key],
    ((_a = $props.column.additionalProps) == null ? void 0 : _a.dateTimeFormat) || "L LT"
  ))}</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("modules/core/components/crudTable/fields/LocalDateField.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const LocalDateField = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { LocalDateField as L, UserWorkspacesField as U };
//# sourceMappingURL=LocalDateField-DcpQ_xeR.mjs.map
