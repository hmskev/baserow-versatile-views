import { resolveComponent, mergeProps, withCtx, openBlock, createBlock, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';

!(function() {
  try {
    var e = false ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
    var n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "f8c4d951-0fcf-4b40-abbe-af8a81f4a87b", e._sentryDebugIdIdentifier = "sentry-dbid-f8c4d951-0fcf-4b40-abbe-af8a81f4a87b");
  } catch (e2) {
  }
})();
const _sfc_main = {
  name: "TwoFactorAuthField",
  props: {
    row: {
      required: true,
      type: Object
    },
    column: {
      required: true,
      type: Object
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  var _a;
  const _component_Badge = resolveComponent("Badge");
  _push(ssrRenderComponent(_component_Badge, mergeProps({
    color: ((_a = $props.row[$props.column.key]) == null ? void 0 : _a.is_enabled) ? "green" : "neutral",
    rounded: true
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      var _a2, _b;
      if (_push2) {
        if ((_a2 = $props.row[$props.column.key]) == null ? void 0 : _a2.is_enabled) {
          _push2(`<span${_scopeId}>${ssrInterpolate(_ctx.$t("twoFactorAuthField.enabled"))}</span>`);
        } else {
          _push2(`<span${_scopeId}>${ssrInterpolate(_ctx.$t("twoFactorAuthField.disabled"))}</span>`);
        }
      } else {
        return [
          ((_b = $props.row[$props.column.key]) == null ? void 0 : _b.is_enabled) ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(_ctx.$t("twoFactorAuthField.enabled")), 1)) : (openBlock(), createBlock("span", { key: 1 }, toDisplayString(_ctx.$t("twoFactorAuthField.disabled")), 1))
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("modules/core/components/crudTable/fields/TwoFactorAuthField.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const TwoFactorAuthField = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { TwoFactorAuthField as T };
//# sourceMappingURL=TwoFactorAuthField-Hbr2Xk3M.mjs.map
