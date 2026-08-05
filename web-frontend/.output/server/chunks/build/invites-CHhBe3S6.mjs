import { _ as _export_sfc, a6 as WorkspaceMemberInviteModal, a7 as clone, W as WorkspaceService, I as notifyIf, J as context } from './server.mjs';
import { C as CrudTable, a as CrudTableColumn, S as SimpleField, M as MoreField } from './MoreField-Bjaf4Chm.mjs';
import { resolveComponent, mergeProps, withCtx, createVNode, createTextVNode, toDisplayString, openBlock, createBlock, withModifiers, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrInterpolate, ssrRenderClass } from 'vue/server-renderer';
import { E as EditRoleContext, M as MemberRoleField } from './EditRoleContext-cOu83TKf.mjs';
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
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "51e69a09-1863-44d6-9ab2-1c62e0e92d6f", e._sentryDebugIdIdentifier = "sentry-dbid-51e69a09-1863-44d6-9ab2-1c62e0e92d6f");
  } catch (e2) {
  }
})();
const _sfc_main$2 = {
  name: "EditInviteContext",
  mixins: [context],
  props: {
    invitation: {
      required: true,
      type: Object
    }
  },
  emits: ["refresh"],
  data() {
    return {
      removeLoading: false
    };
  },
  methods: {
    async copyEmail({ email }) {
      await (void 0).clipboard.writeText(email);
      this.$refs.emailCopied.show();
    },
    async remove(invitation) {
      if (this.removeLoading) {
        return;
      }
      this.removeLoading = true;
      try {
        await WorkspaceService(this.$client).deleteInvitation(invitation.id);
        this.$emit("refresh");
        this.hide();
      } catch (error) {
        notifyIf(error);
      } finally {
        this.removeLoading = false;
      }
    }
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Context = resolveComponent("Context");
  const _component_Copied = resolveComponent("Copied");
  _push(ssrRenderComponent(_component_Context, mergeProps({
    ref: "context",
    "overflow-scroll": "",
    "max-height-if-outside-viewport": ""
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        if (Object.keys($props.invitation).length > 0) {
          _push2(`<ul class="context__menu"${_scopeId}><li class="context__menu-item"${_scopeId}><a class="context__menu-item-link"${_scopeId}>`);
          _push2(ssrRenderComponent(_component_Copied, { ref: "emailCopied" }, null, _parent2, _scopeId));
          _push2(` ${ssrInterpolate(_ctx.$t("membersSettings.invitesTable.actions.copyEmail"))}</a></li><li class="context__menu-item context__menu-item--with-separator"${_scopeId}><a class="${ssrRenderClass([{
            "context__menu-item-link--loading": $data.removeLoading
          }, "context__menu-item-link context__menu-item-link--delete"])}"${_scopeId}><i class="context__menu-item-icon iconoir-bin"${_scopeId}></i> ${ssrInterpolate(_ctx.$t("membersSettings.invitesTable.actions.remove"))}</a></li></ul>`);
        } else {
          _push2(`<!---->`);
        }
      } else {
        return [
          Object.keys($props.invitation).length > 0 ? (openBlock(), createBlock("ul", {
            key: 0,
            class: "context__menu"
          }, [
            createVNode("li", { class: "context__menu-item" }, [
              createVNode("a", {
                class: "context__menu-item-link",
                onClick: withModifiers(($event) => $options.copyEmail($props.invitation), ["prevent"])
              }, [
                createVNode(_component_Copied, { ref: "emailCopied" }, null, 512),
                createTextVNode(" " + toDisplayString(_ctx.$t("membersSettings.invitesTable.actions.copyEmail")), 1)
              ], 8, ["onClick"])
            ]),
            createVNode("li", { class: "context__menu-item context__menu-item--with-separator" }, [
              createVNode("a", {
                class: [{
                  "context__menu-item-link--loading": $data.removeLoading
                }, "context__menu-item-link context__menu-item-link--delete"],
                onClick: withModifiers(($event) => $options.remove($props.invitation), ["prevent"])
              }, [
                createVNode("i", { class: "context__menu-item-icon iconoir-bin" }),
                createTextVNode(" " + toDisplayString(_ctx.$t("membersSettings.invitesTable.actions.remove")), 1)
              ], 10, ["onClick"])
            ])
          ])) : createCommentVNode("", true)
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("modules/core/components/settings/members/EditInviteContext.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const EditInviteContext = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = {
  name: "MembersInvitesTable",
  components: {
    EditInviteContext,
    EditRoleContext,
    CrudTable,
    WorkspaceMemberInviteModal
  },
  props: {
    workspace: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      editInvitation: {},
      editRoleInvitation: {},
      invitesAmount: 0
    };
  },
  computed: {
    roles() {
      return this.workspace._.roles;
    },
    service() {
      const service = WorkspaceService(this.$client);
      service.options.baseUrl = ({ workspaceId }) => `/workspaces/invitations/workspace/${workspaceId}/`;
      const options = {
        ...service.options,
        urlParams: { workspaceId: this.workspace.id }
      };
      return {
        ...service,
        options
      };
    },
    membersPagePlugins() {
      return Object.values(this.$registry.getAll("membersPagePlugins"));
    },
    columns() {
      let columns = [
        new CrudTableColumn(
          "email",
          this.$t("membersSettings.invitesTable.columns.email"),
          SimpleField,
          true,
          true
        ),
        new CrudTableColumn(
          "permissions",
          this.$t("membersSettings.invitesTable.columns.role"),
          MemberRoleField,
          false,
          false,
          false,
          {
            roles: this.roles,
            userId: 0,
            workspaceId: this.workspace.id
          }
        ),
        new CrudTableColumn(null, null, MoreField, false, false, true)
      ];
      for (const plugin of this.membersPagePlugins) {
        if (!plugin.isDeactivated(this.workspace.id)) {
          columns = plugin.mutateMembersInvitesTableColumns(columns, {
            workspace: this.workspace
          });
        }
      }
      return columns;
    }
  },
  beforeMount() {
    this.$bus.$on("invite-submitted", this.inviteSubmitted);
  },
  beforeUnmount() {
    this.$bus.$off("invite-submitted", this.inviteSubmitted);
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
      const action = row.id === this.editInvitation.id ? "toggle" : "show";
      this.editInvitation = row;
      this.$refs.editInviteContext[action](target, "bottom", "left", 4);
    },
    onEditRoleContext({ row, target }) {
      const action = row.id === this.editRoleInvitation.id ? "toggle" : "show";
      this.editRoleInvitation = row;
      this.$refs.editRoleContext[action](target, "bottom", "left", 4);
    },
    async roleUpdate({ uid: permissionsNew, subject: invitation }) {
      const oldInvitation = clone(invitation);
      const newInvitation = clone(invitation);
      newInvitation.permissions = permissionsNew;
      this.$refs.crudTable.updateRow(newInvitation);
      try {
        await WorkspaceService(this.$client).updateInvitation(invitation.id, {
          permissions: permissionsNew
        });
      } catch (error) {
        this.$refs.crudTable.updateRow(oldInvitation);
        notifyIf(error, "workspace");
      }
    },
    inviteSubmitted(values) {
      this.$refs.crudTable.upsertRow(values);
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_CrudTable = resolveComponent("CrudTable");
  const _component_Button = resolveComponent("Button");
  const _component_EditInviteContext = resolveComponent("EditInviteContext");
  const _component_EditRoleContext = resolveComponent("EditRoleContext");
  const _component_WorkspaceMemberInviteModal = resolveComponent("WorkspaceMemberInviteModal");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_CrudTable, {
    ref: "crudTable",
    service: $options.service,
    columns: $options.columns,
    "row-id-key": "id",
    onRowsUpdate: ($event) => $data.invitesAmount = $event.length,
    onRowContext: $options.onRowContext,
    onEditRoleContext: $options.onEditRoleContext
  }, {
    title: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(_ctx.$t("membersSettings.invitesTable.title", {
          invitesAmount: $data.invitesAmount,
          workspaceName: $props.workspace.name
        }))}`);
      } else {
        return [
          createTextVNode(toDisplayString(_ctx.$t("membersSettings.invitesTable.title", {
            invitesAmount: $data.invitesAmount,
            workspaceName: $props.workspace.name
          })), 1)
        ];
      }
    }),
    "header-right-side": withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_Button, {
          type: "primary",
          size: "large",
          class: "margin-left-2",
          onClick: ($event) => _ctx.$refs.inviteModal.show()
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`${ssrInterpolate(_ctx.$t("membersSettings.membersTable.inviteMember"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("membersSettings.membersTable.inviteMember")), 1)
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_Button, {
            type: "primary",
            size: "large",
            class: "margin-left-2",
            onClick: ($event) => _ctx.$refs.inviteModal.show()
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(_ctx.$t("membersSettings.membersTable.inviteMember")), 1)
            ]),
            _: 1
          }, 8, ["onClick"])
        ];
      }
    }),
    menus: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_EditInviteContext, {
          ref: "editInviteContext",
          invitation: $data.editInvitation,
          onRefresh: ($event) => _ctx.$refs.crudTable.fetch()
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_EditRoleContext, {
          ref: "editRoleContext",
          workspace: $props.workspace,
          subject: $data.editRoleInvitation,
          roles: $options.roles,
          onUpdateRole: ($event) => $options.roleUpdate($event)
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_EditInviteContext, {
            ref: "editInviteContext",
            invitation: $data.editInvitation,
            onRefresh: ($event) => _ctx.$refs.crudTable.fetch()
          }, null, 8, ["invitation", "onRefresh"]),
          createVNode(_component_EditRoleContext, {
            ref: "editRoleContext",
            workspace: $props.workspace,
            subject: $data.editRoleInvitation,
            roles: $options.roles,
            onUpdateRole: ($event) => $options.roleUpdate($event)
          }, null, 8, ["workspace", "subject", "roles", "onUpdateRole"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_WorkspaceMemberInviteModal, {
    ref: "inviteModal",
    workspace: $props.workspace
  }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("modules/core/components/settings/members/MembersInvitesTable.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const MembersInvitesTable = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  name: "Invites",
  components: { MembersInvitesTable },
  props: {
    workspace: {
      type: Object,
      required: true
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_MembersInvitesTable = resolveComponent("MembersInvitesTable");
  _push(ssrRenderComponent(_component_MembersInvitesTable, mergeProps({ workspace: $props.workspace }, _attrs), null, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("modules/core/pages/settings/invites.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const invites = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { invites as default };
//# sourceMappingURL=invites-CHhBe3S6.mjs.map
