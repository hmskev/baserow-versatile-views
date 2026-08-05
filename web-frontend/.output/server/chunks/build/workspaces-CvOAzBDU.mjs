import { _ as _export_sfc, u as useNuxtApp, g as useHead, J as context, a5 as baseService, Q as modal, k as error } from './server.mjs';
import { resolveComponent, mergeProps, withCtx, createVNode, createTextVNode, toDisplayString, openBlock, createBlock, Fragment, withModifiers, createCommentVNode, useSSRContext } from 'vue';
import { C as CrudTable, a as CrudTableColumn, S as SimpleField, M as MoreField } from './MoreField-Bjaf4Chm.mjs';
import { U as UserWorkspacesField, L as LocalDateField } from './LocalDateField-DcpQ_xeR.mjs';
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttrs, ssrRenderAttr } from 'vue/server-renderer';
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
import 'lodash/isObject.js';

!(function() {
  try {
    var e = false ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
    var n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "7aac0819-4483-42c0-aae7-56fed14368f5", e._sentryDebugIdIdentifier = "sentry-dbid-7aac0819-4483-42c0-aae7-56fed14368f5");
  } catch (e2) {
  }
})();
const WorkspacesAdminService = (client) => {
  return Object.assign(baseService(client, "/admin/workspaces/"), {
    delete(workspaceId) {
      return client.delete(`/admin/workspaces/${workspaceId}/`);
    }
  });
};
const _sfc_main$5 = {
  name: "WorkspaceUsersField",
  extends: UserWorkspacesField,
  data() {
    return {
      nameKey: "email"
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("modules/core/components/admin/workspaces/fields/WorkspaceUsersField.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = {
  name: "WorkspaceNameField",
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
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "group-admin-name" }, _attrs))}><div class="group-admin-name__name"${ssrRenderAttr("title", $props.row[$props.column.key])}>${ssrInterpolate($props.row[$props.column.key])}</div></div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("modules/core/components/admin/workspaces/fields/WorkspaceNameField.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const WorkspaceNameField = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$3 = {
  name: "DeleteWorkspaceModal",
  mixins: [modal, error],
  props: {
    workspace: {
      type: Object,
      required: true
    }
  },
  emits: ["workspace-deleted"],
  data() {
    return {
      loading: false
    };
  },
  methods: {
    async deleteWorkspace() {
      this.hideError();
      this.loading = true;
      try {
        await WorkspacesAdminService(this.$client).delete(this.workspace.id);
        this.$emit("workspace-deleted", this.workspace.id);
        this.hide();
      } catch (error2) {
        this.handleError(error2, "workspace");
      }
      this.loading = false;
    }
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Modal = resolveComponent("Modal");
  const _component_Error = resolveComponent("Error");
  const _component_i18n_t = resolveComponent("i18n-t");
  const _component_Button = resolveComponent("Button");
  _push(ssrRenderComponent(_component_Modal, mergeProps({ ref: "modal" }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<h2 class="box__title"${_scopeId}>${ssrInterpolate(_ctx.$t("deleteWorkspaceModal.title", $props.workspace))}</h2>`);
        _push2(ssrRenderComponent(_component_Error, { error: _ctx.error }, null, _parent2, _scopeId));
        _push2(`<div${_scopeId}>`);
        _push2(ssrRenderComponent(_component_i18n_t, {
          keypath: "deleteWorkspaceModal.confirmation",
          tag: "p"
        }, {
          name: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<strong${_scopeId2}>${ssrInterpolate($props.workspace.name)}</strong>`);
            } else {
              return [
                createVNode("strong", null, toDisplayString($props.workspace.name), 1)
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`<p${_scopeId}>${ssrInterpolate(_ctx.$t("deleteWorkspaceModal.comment"))}</p><div class="actions"${_scopeId}><div class="align-right"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_Button, {
          type: "danger",
          size: "large",
          "full-width": "",
          disabled: $data.loading,
          loading: $data.loading,
          onClick: ($event) => $options.deleteWorkspace()
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`${ssrInterpolate(_ctx.$t("deleteWorkspaceModal.delete", $props.workspace))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("deleteWorkspaceModal.delete", $props.workspace)), 1)
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div></div></div>`);
      } else {
        return [
          createVNode("h2", { class: "box__title" }, toDisplayString(_ctx.$t("deleteWorkspaceModal.title", $props.workspace)), 1),
          createVNode(_component_Error, { error: _ctx.error }, null, 8, ["error"]),
          createVNode("div", null, [
            createVNode(_component_i18n_t, {
              keypath: "deleteWorkspaceModal.confirmation",
              tag: "p"
            }, {
              name: withCtx(() => [
                createVNode("strong", null, toDisplayString($props.workspace.name), 1)
              ]),
              _: 1
            }),
            createVNode("p", null, toDisplayString(_ctx.$t("deleteWorkspaceModal.comment")), 1),
            createVNode("div", { class: "actions" }, [
              createVNode("div", { class: "align-right" }, [
                createVNode(_component_Button, {
                  type: "danger",
                  size: "large",
                  "full-width": "",
                  disabled: $data.loading,
                  loading: $data.loading,
                  onClick: withModifiers(($event) => $options.deleteWorkspace(), ["prevent"])
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(_ctx.$t("deleteWorkspaceModal.delete", $props.workspace)), 1)
                  ]),
                  _: 1
                }, 8, ["disabled", "loading", "onClick"])
              ])
            ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("modules/core/components/admin/workspaces/modals/DeleteWorkspaceModal.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const DeleteWorkspaceModal = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$2 = {
  name: "EditWorkspaceContext",
  components: { DeleteWorkspaceModal },
  mixins: [context],
  props: {
    workspace: {
      required: true,
      type: Object
    }
  },
  emits: ["workspace-deleted"],
  methods: {
    showDeleteModal() {
      this.hide();
      this.$refs.deleteWorkspaceModal.show();
    }
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Context = resolveComponent("Context");
  const _component_DeleteWorkspaceModal = resolveComponent("DeleteWorkspaceModal");
  _push(ssrRenderComponent(_component_Context, mergeProps({
    ref: "context",
    "overflow-scroll": "",
    "max-height-if-outside-viewport": ""
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        if (Object.keys($props.workspace).length > 0) {
          _push2(`<!--[--><div class="context__menu-title"${_scopeId}>${ssrInterpolate($props.workspace.name)} (${ssrInterpolate($props.workspace.id)}) </div><ul class="context__menu"${_scopeId}><li class="context__menu-item context__menu-item--with-separator"${_scopeId}><a class="context__menu-item-link context__menu-item-link--delete"${_scopeId}><i class="context__menu-item-icon iconoir-bin"${_scopeId}></i> ${ssrInterpolate(_ctx.$t("editWorkspaceContext.delete"))}</a></li></ul>`);
          _push2(ssrRenderComponent(_component_DeleteWorkspaceModal, {
            ref: "deleteWorkspaceModal",
            workspace: $props.workspace,
            onWorkspaceDeleted: ($event) => _ctx.$emit("workspace-deleted", $event)
          }, null, _parent2, _scopeId));
          _push2(`<!--]-->`);
        } else {
          _push2(`<!---->`);
        }
      } else {
        return [
          Object.keys($props.workspace).length > 0 ? (openBlock(), createBlock(Fragment, { key: 0 }, [
            createVNode("div", { class: "context__menu-title" }, toDisplayString($props.workspace.name) + " (" + toDisplayString($props.workspace.id) + ") ", 1),
            createVNode("ul", { class: "context__menu" }, [
              createVNode("li", { class: "context__menu-item context__menu-item--with-separator" }, [
                createVNode("a", {
                  class: "context__menu-item-link context__menu-item-link--delete",
                  onClick: withModifiers($options.showDeleteModal, ["prevent"])
                }, [
                  createVNode("i", { class: "context__menu-item-icon iconoir-bin" }),
                  createTextVNode(" " + toDisplayString(_ctx.$t("editWorkspaceContext.delete")), 1)
                ], 8, ["onClick"])
              ])
            ]),
            createVNode(_component_DeleteWorkspaceModal, {
              ref: "deleteWorkspaceModal",
              workspace: $props.workspace,
              onWorkspaceDeleted: ($event) => _ctx.$emit("workspace-deleted", $event)
            }, null, 8, ["workspace", "onWorkspaceDeleted"])
          ], 64)) : createCommentVNode("", true)
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("modules/core/components/admin/workspaces/contexts/EditWorkspaceContext.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const EditWorkspaceContext = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = {
  name: "WorkspacesAdminTable",
  components: {
    CrudTable,
    EditWorkspaceContext
  },
  data() {
    this.columns = [
      new CrudTableColumn(
        "name",
        () => this.$t("workspacesAdminTable.name"),
        WorkspaceNameField,
        true,
        true
      ),
      new CrudTableColumn(
        "users",
        () => this.$t("workspacesAdminTable.members"),
        _sfc_main$5
      ),
      new CrudTableColumn(
        "application_count",
        () => this.$t("workspacesAdminTable.applications"),
        SimpleField,
        true
      ),
      new CrudTableColumn(
        "free_users",
        () => this.$t("workspacesAdminTable.freeUsers"),
        SimpleField
      ),
      new CrudTableColumn(
        "seats_taken",
        () => this.$t("workspacesAdminTable.seatsTaken"),
        SimpleField,
        false,
        false,
        false,
        {},
        "",
        this.$t("workspacesAdminTable.usageHelpText")
      ),
      new CrudTableColumn(
        "row_count",
        () => this.$t("workspacesAdminTable.rowCount"),
        SimpleField,
        true,
        false,
        false,
        {},
        "",
        this.$t("workspacesAdminTable.usageHelpText")
      ),
      new CrudTableColumn(
        "storage_usage",
        () => this.$t("workspacesAdminTable.storageUsage"),
        SimpleField,
        true,
        false,
        false,
        {},
        "",
        this.$t("workspacesAdminTable.usageHelpText")
      ),
      new CrudTableColumn(
        "created_on",
        () => this.$t("workspacesAdminTable.created"),
        LocalDateField,
        true
      ),
      new CrudTableColumn("more", "", MoreField, false, false, true)
    ];
    this.service = WorkspacesAdminService(this.$client);
    return {
      editWorkspace: {},
      hiddenUsers: []
    };
  },
  methods: {
    onRowContext({ row, event, target }) {
      event.preventDefault();
      if (target === void 0) {
        target = {
          left: event.clientX,
          top: event.clientY
        };
      }
      const action = row.id === this.editWorkspace.id ? "toggle" : "show";
      this.editWorkspace = row;
      this.$refs.editWorkspaceContext[action](target, "bottom", "left", 4);
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_CrudTable = resolveComponent("CrudTable");
  const _component_EditWorkspaceContext = resolveComponent("EditWorkspaceContext");
  _push(ssrRenderComponent(_component_CrudTable, mergeProps({
    columns: _ctx.columns,
    service: _ctx.service,
    "row-id-key": "id",
    onRowContext: $options.onRowContext
  }, _attrs), {
    title: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(_ctx.$t("workspacesAdminTable.allWorkspaces"))}`);
      } else {
        return [
          createTextVNode(toDisplayString(_ctx.$t("workspacesAdminTable.allWorkspaces")), 1)
        ];
      }
    }),
    menus: withCtx((slotProps, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_EditWorkspaceContext, {
          ref: "editWorkspaceContext",
          workspace: $data.editWorkspace,
          onWorkspaceDeleted: slotProps.deleteRow
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_EditWorkspaceContext, {
            ref: "editWorkspaceContext",
            workspace: $data.editWorkspace,
            onWorkspaceDeleted: slotProps.deleteRow
          }, null, 8, ["workspace", "onWorkspaceDeleted"])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("modules/core/components/admin/workspaces/WorkspacesAdminTable.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const WorkspacesAdminTable = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  components: { WorkspacesAdminTable },
  layout: "app",
  middleware: "staff",
  setup() {
    const { $i18n } = useNuxtApp();
    useHead({ title: $i18n.t("adminWorkspaces.title") });
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_WorkspacesAdminTable = resolveComponent("WorkspacesAdminTable");
  _push(ssrRenderComponent(_component_WorkspacesAdminTable, _attrs, null, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("modules/core/pages/admin/workspaces.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const workspaces = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { workspaces as default };
//# sourceMappingURL=workspaces-CvOAzBDU.mjs.map
