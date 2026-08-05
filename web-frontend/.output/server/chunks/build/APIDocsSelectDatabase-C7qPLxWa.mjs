import { _ as _export_sfc, a2 as mapState, am as DatabaseApplicationType, h as __nuxt_component_0$2 } from './server.mjs';
import { resolveComponent, mergeProps, withCtx, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate, ssrRenderClass } from 'vue/server-renderer';

!(function() {
  try {
    var e = false ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
    var n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "0a2e2d44-c3a4-4895-a6cb-6c6552443623", e._sentryDebugIdIdentifier = "sentry-dbid-0a2e2d44-c3a4-4895-a6cb-6c6552443623");
  } catch (e2) {
  }
})();
const _sfc_main$1 = {
  name: "APIDocsSelectDatabaseWorkspace",
  props: {
    workspace: {
      type: Object,
      required: true
    },
    selected: {
      type: Number,
      required: false,
      default: -1
    }
  },
  computed: {
    databases() {
      const applications = this.$store.getters["application/getAllOfWorkspace"](
        this.workspace
      );
      const databaseType = DatabaseApplicationType.getType();
      return applications.filter(
        (application) => application.type === databaseType
      );
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0$2;
  if ($options.databases.length > 0) {
    _push(`<div${ssrRenderAttrs(_attrs)}><div class="select-application__group">${ssrInterpolate($props.workspace.name)}</div><ul class="select-application__list"><!--[-->`);
    ssrRenderList($options.databases, (database) => {
      _push(`<li>`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: {
          name: "database-api-docs-detail",
          params: {
            databaseId: database.id
          }
        },
        class: ["select-application__link", { active: $props.selected === database.id }]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="select-application__icon"${_scopeId}><i class="${ssrRenderClass(database._.type.iconClass)}"${_scopeId}></i></div><div class="select-application__name"${_scopeId}>${ssrInterpolate(database.name)}</div>`);
          } else {
            return [
              createVNode("div", { class: "select-application__icon" }, [
                createVNode("i", {
                  class: database._.type.iconClass
                }, null, 2)
              ]),
              createVNode("div", { class: "select-application__name" }, toDisplayString(database.name), 1)
            ];
          }
        }),
        _: 2
      }, _parent));
      _push(`</li>`);
    });
    _push(`<!--]--></ul></div>`);
  } else {
    _push(`<!---->`);
  }
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("modules/database/components/docs/APIDocsSelectDatabaseWorkspace.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const APIDocsSelectDatabaseWorkspace = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  name: "APIDocsSelectDatabase",
  components: { APIDocsSelectDatabaseWorkspace },
  props: {
    selected: {
      type: Number,
      required: false,
      default: -1
    }
  },
  computed: {
    hasDatabases() {
      const databaseType = DatabaseApplicationType.getType();
      return this.$store.getters["application/getAll"].filter(
        (application) => application.type === databaseType
      ).length > 0;
    },
    ...mapState({
      workspaces: (state) => state.workspace.items
    })
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_APIDocsSelectDatabaseWorkspace = resolveComponent("APIDocsSelectDatabaseWorkspace");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "select-application" }, _attrs))}>`);
  if ($options.hasDatabases) {
    _push(`<!--[-->`);
    ssrRenderList(_ctx.workspaces, (workspace) => {
      _push(ssrRenderComponent(_component_APIDocsSelectDatabaseWorkspace, {
        key: workspace.id,
        workspace,
        selected: $props.selected
      }, null, _parent));
    });
    _push(`<!--]-->`);
  } else {
    _push(`<p class="margin-bottom-3">${ssrInterpolate(_ctx.$t("apiDocsSelectDatabase.needOneDatabase"))}</p>`);
  }
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("modules/database/components/docs/APIDocsSelectDatabase.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const APIDocsSelectDatabase = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { APIDocsSelectDatabase as A };
//# sourceMappingURL=APIDocsSelectDatabase-C7qPLxWa.mjs.map
