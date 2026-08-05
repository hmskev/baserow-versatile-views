import { computed, mergeProps, unref, ref, resolveComponent, withCtx, openBlock, createBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
import { d as useI18n } from './server.mjs';

!(function() {
  try {
    var e = false ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
    var n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "5a8cd46e-e604-4911-bdea-77a567fa38cd", e._sentryDebugIdIdentifier = "sentry-dbid-5a8cd46e-e604-4911-bdea-77a567fa38cd");
  } catch (e2) {
  }
})();
const _sfc_main$1 = {
  __name: "LangSwitcherDropdown",
  __ssrInlineRender: true,
  setup(__props, { expose: __expose }) {
    const dropdown = ref(null);
    const { locale, locales, setLocale } = useI18n();
    const language = computed({
      get: () => locale.value,
      set: async (value) => {
        await setLocale(value);
      }
    });
    const toggle = (...args) => {
      var _a, _b;
      return (_b = (_a = dropdown.value) == null ? void 0 : _a.toggle) == null ? void 0 : _b.call(_a, ...args);
    };
    __expose({
      toggle
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Dropdown = resolveComponent("Dropdown");
      const _component_DropdownItem = resolveComponent("DropdownItem");
      _push(ssrRenderComponent(_component_Dropdown, mergeProps({
        ref_key: "dropdown",
        ref: dropdown,
        modelValue: language.value,
        "onUpdate:modelValue": ($event) => language.value = $event,
        class: "dropdown--floating-left",
        "show-search": false
      }, _ctx.$attrs, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(locales), (loc) => {
              _push2(ssrRenderComponent(_component_DropdownItem, {
                key: loc.code,
                name: loc.name,
                value: loc.code
              }, null, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(unref(locales), (loc) => {
                return openBlock(), createBlock(_component_DropdownItem, {
                  key: loc.code,
                  name: loc.name,
                  value: loc.code
                }, null, 8, ["name", "value"]);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("modules/core/components/LangSwitcherDropdown.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "LangPicker",
  __ssrInlineRender: true,
  setup(__props) {
    const { locale, locales } = useI18n();
    const visibleLanguageName = computed(() => {
      const currentLocale = locales.value.find((l) => l.code === locale.value);
      return (currentLocale == null ? void 0 : currentLocale.name) || "";
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "lang-picker" }, _attrs))}><a class="lang-picker__link">${ssrInterpolate(visibleLanguageName.value)} <i class="iconoir-nav-arrow-down lang-picker__icon"></i></a>`);
      _push(ssrRenderComponent(unref(_sfc_main$1), {
        ref: "dropdown",
        class: "lang-picker__dropdown",
        "show-input": false
      }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("modules/core/components/LangPicker.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=LangPicker-BbiSxP8F.mjs.map
