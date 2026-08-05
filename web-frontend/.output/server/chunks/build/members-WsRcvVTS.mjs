import { _ as _export_sfc, a6 as WorkspaceMemberInviteModal, a7 as clone, W as WorkspaceService, I as notifyIf, m as mapGetters, J as context, Q as modal, k as error } from './server.mjs';
import { C as CrudTable, a as CrudTableColumn, S as SimpleField, M as MoreField } from './MoreField-Bjaf4Chm.mjs';
import { T as TwoFactorAuthField } from './TwoFactorAuthField-Hbr2Xk3M.mjs';
import { E as EditRoleContext, M as MemberRoleField } from './EditRoleContext-cOu83TKf.mjs';
import { resolveComponent, mergeProps, withCtx, createVNode, createTextVNode, toDisplayString, openBlock, createBlock, createCommentVNode, withModifiers, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrInterpolate } from 'vue/server-renderer';
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
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "4516f648-622a-4eb1-89cd-daf623c2ed7b", e._sentryDebugIdIdentifier = "sentry-dbid-4516f648-622a-4eb1-89cd-daf623c2ed7b");
  } catch (e2) {
  }
})();
const _sfc_main$3 = {
  name: "RemoveFromWorkspaceModal",
  mixins: [modal, error],
  props: {
    workspace: {
      type: Object,
      required: true
    },
    member: {
      type: Object,
      required: true
    }
  },
  emits: ["remove-user"],
  data() {
    return {
      loading: false
    };
  },
  methods: {
    async remove() {
      if (this.loading) {
        return;
      }
      this.loading = true;
      try {
        await WorkspaceService(this.$client).deleteUser(this.member.id);
        await this.$store.dispatch("workspace/forceDeleteWorkspaceUser", {
          workspaceId: this.workspace.id,
          id: this.member.id,
          values: { user_id: this.member.user_id }
        });
        this.$emit("remove-user", this.member.id);
        this.hide();
      } catch (error2) {
        this.loading = false;
        this.handleError(error2);
      } finally {
        this.loading = false;
      }
    }
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Modal = resolveComponent("Modal");
  const _component_Error = resolveComponent("Error");
  const _component_Button = resolveComponent("Button");
  _push(ssrRenderComponent(_component_Modal, mergeProps({ ref: "modal" }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<h2 class="box__title"${_scopeId}>${ssrInterpolate(_ctx.$t("removeFromWorkspaceModal.title"))}</h2>`);
        _push2(ssrRenderComponent(_component_Error, { error: _ctx.error }, null, _parent2, _scopeId));
        _push2(`<div${_scopeId}><p${_scopeId}>${ssrInterpolate(_ctx.$t("removeFromWorkspaceModal.confirmation", {
          name: $props.member.name,
          workspaceName: $props.workspace.name
        }))}</p><div class="actions"${_scopeId}><div class="align-right"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_Button, {
          type: "danger",
          size: "large",
          loading: $data.loading,
          disabled: $data.loading,
          onClick: ($event) => $options.remove()
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`${ssrInterpolate(_ctx.$t("removeFromWorkspaceModal.remove"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("removeFromWorkspaceModal.remove")), 1)
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div></div></div>`);
      } else {
        return [
          createVNode("h2", { class: "box__title" }, toDisplayString(_ctx.$t("removeFromWorkspaceModal.title")), 1),
          createVNode(_component_Error, { error: _ctx.error }, null, 8, ["error"]),
          createVNode("div", null, [
            createVNode("p", null, toDisplayString(_ctx.$t("removeFromWorkspaceModal.confirmation", {
              name: $props.member.name,
              workspaceName: $props.workspace.name
            })), 1),
            createVNode("div", { class: "actions" }, [
              createVNode("div", { class: "align-right" }, [
                createVNode(_component_Button, {
                  type: "danger",
                  size: "large",
                  loading: $data.loading,
                  disabled: $data.loading,
                  onClick: withModifiers(($event) => $options.remove(), ["prevent"])
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(_ctx.$t("removeFromWorkspaceModal.remove")), 1)
                  ]),
                  _: 1
                }, 8, ["loading", "disabled", "onClick"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("modules/core/components/workspace/RemoveFromWorkspaceModal.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const RemoveFromWorkspaceModal = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$2 = {
  name: "EditMemberContext",
  components: {
    RemoveFromWorkspaceModal
  },
  mixins: [context],
  props: {
    workspace: {
      required: true,
      type: Object
    },
    member: {
      required: true,
      type: Object
    }
  },
  emits: ["remove-user"],
  computed: {
    ...mapGetters({
      userId: "auth/getUserId"
    })
  },
  methods: {
    showRemoveModal() {
      this.hide();
      this.$refs.removeFromWorkspaceModal.show();
    },
    async copyEmail({ email }) {
      await (void 0).clipboard.writeText(email);
      this.$refs.emailCopied.show();
    }
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Context = resolveComponent("Context");
  const _component_Copied = resolveComponent("Copied");
  const _component_RemoveFromWorkspaceModal = resolveComponent("RemoveFromWorkspaceModal");
  _push(ssrRenderComponent(_component_Context, mergeProps({
    ref: "context",
    "overflow-scroll": "",
    "max-height-if-outside-viewport": ""
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        if (Object.keys($props.member).length > 0) {
          _push2(`<ul class="context__menu"${_scopeId}><li class="context__menu-item"${_scopeId}><a class="context__menu-item-link"${_scopeId}>`);
          _push2(ssrRenderComponent(_component_Copied, { ref: "emailCopied" }, null, _parent2, _scopeId));
          _push2(` ${ssrInterpolate(_ctx.$t("membersSettings.membersTable.actions.copyEmail"))}</a></li>`);
          if ($props.member.user_id !== _ctx.userId && _ctx.$hasPermission("workspace_user.delete", $props.member, $props.workspace.id)) {
            _push2(`<li class="context__menu-item context__menu-item--with-separator"${_scopeId}><a class="context__menu-item-link context__menu-item-link--delete"${_scopeId}><i class="context__menu-item-icon iconoir-bin"${_scopeId}></i> ${ssrInterpolate(_ctx.$t("membersSettings.membersTable.actions.remove"))}</a></li>`);
          } else {
            _push2(`<!---->`);
          }
          _push2(`</ul>`);
        } else {
          _push2(`<!---->`);
        }
        _push2(ssrRenderComponent(_component_RemoveFromWorkspaceModal, {
          ref: "removeFromWorkspaceModal",
          workspace: $props.workspace,
          member: $props.member,
          onRemoveUser: ($event) => _ctx.$emit("remove-user", $event)
        }, null, _parent2, _scopeId));
      } else {
        return [
          Object.keys($props.member).length > 0 ? (openBlock(), createBlock("ul", {
            key: 0,
            class: "context__menu"
          }, [
            createVNode("li", { class: "context__menu-item" }, [
              createVNode("a", {
                class: "context__menu-item-link",
                onClick: withModifiers(($event) => $options.copyEmail($props.member), ["prevent"])
              }, [
                createVNode(_component_Copied, { ref: "emailCopied" }, null, 512),
                createTextVNode(" " + toDisplayString(_ctx.$t("membersSettings.membersTable.actions.copyEmail")), 1)
              ], 8, ["onClick"])
            ]),
            $props.member.user_id !== _ctx.userId && _ctx.$hasPermission("workspace_user.delete", $props.member, $props.workspace.id) ? (openBlock(), createBlock("li", {
              key: 0,
              class: "context__menu-item context__menu-item--with-separator"
            }, [
              createVNode("a", {
                class: "context__menu-item-link context__menu-item-link--delete",
                onClick: withModifiers($options.showRemoveModal, ["prevent"])
              }, [
                createVNode("i", { class: "context__menu-item-icon iconoir-bin" }),
                createTextVNode(" " + toDisplayString(_ctx.$t("membersSettings.membersTable.actions.remove")), 1)
              ], 8, ["onClick"])
            ])) : createCommentVNode("", true)
          ])) : createCommentVNode("", true),
          createVNode(_component_RemoveFromWorkspaceModal, {
            ref: "removeFromWorkspaceModal",
            workspace: $props.workspace,
            member: $props.member,
            onRemoveUser: ($event) => _ctx.$emit("remove-user", $event)
          }, null, 8, ["workspace", "member", "onRemoveUser"])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("modules/core/components/settings/members/EditMemberContext.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const EditMemberContext = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = {
  name: "MembersTable",
  components: {
    EditMemberContext,
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
      editMember: {},
      editRoleMember: {}
    };
  },
  computed: {
    ...mapGetters({ userId: "auth/getUserId" }),
    roles() {
      return this.workspace._.roles;
    },
    service() {
      const service = WorkspaceService(this.$client);
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
          "name",
          this.$t("membersSettings.membersTable.columns.name"),
          SimpleField,
          true,
          true
        ),
        new CrudTableColumn(
          "email",
          this.$t("membersSettings.membersTable.columns.email"),
          SimpleField,
          true
        ),
        new CrudTableColumn(
          "permissions",
          this.$t("membersSettings.membersTable.columns.role"),
          MemberRoleField,
          false,
          false,
          false,
          {
            roles: this.roles,
            userId: this.userId,
            workspaceId: this.workspace.id
          }
        ),
        new CrudTableColumn(
          "two_factor_auth",
          this.$t("membersSettings.membersTable.columns.2fa"),
          TwoFactorAuthField,
          false
        ),
        new CrudTableColumn(null, null, MoreField, false, false, true)
      ];
      for (const plugin of this.membersPagePlugins) {
        if (!plugin.isDeactivated(this.workspace.id)) {
          columns = plugin.mutateMembersTableColumns(columns, {
            workspace: this.workspace,
            client: this.$client
          });
        }
      }
      return columns;
    }
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
      const action = row.id === this.editMember.id ? "toggle" : "show";
      this.editMember = row;
      this.$refs.editMemberContext[action](target, "bottom", "left", 4);
    },
    onEditRoleContext({ row, target }) {
      const action = row.id === this.editRoleMember.id ? "toggle" : "show";
      this.editRoleMember = row;
      this.$refs.editRoleContext[action](target, "bottom", "left", 4);
    },
    async roleUpdate({ uid: permissionsNew, subject: member }) {
      const oldMember = clone(member);
      const newMember = clone(member);
      newMember.permissions = permissionsNew;
      this.$refs.crudTable.updateRow(newMember);
      try {
        await WorkspaceService(this.$client).updateUser(oldMember.id, {
          permissions: newMember.permissions
        });
        await this.$store.dispatch("workspace/forceUpdateWorkspaceUser", {
          workspaceId: this.workspace.id,
          id: oldMember.id,
          values: { permissions: newMember.permissions }
        });
      } catch (error2) {
        this.$refs.crudTable.updateRow(oldMember);
        notifyIf(error2, "workspace");
      }
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_CrudTable = resolveComponent("CrudTable");
  const _component_Button = resolveComponent("Button");
  const _component_EditMemberContext = resolveComponent("EditMemberContext");
  const _component_EditRoleContext = resolveComponent("EditRoleContext");
  const _component_WorkspaceMemberInviteModal = resolveComponent("WorkspaceMemberInviteModal");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_CrudTable, {
    ref: "crudTable",
    service: $options.service,
    columns: $options.columns,
    "row-id-key": "id",
    onRowContext: $options.onRowContext,
    onEditRoleContext: $options.onEditRoleContext
  }, {
    title: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(_ctx.$t("membersSettings.membersTable.title", {
          userAmount: $props.workspace.users.length || 0,
          workspaceName: $props.workspace.name
        }))}`);
      } else {
        return [
          createTextVNode(toDisplayString(_ctx.$t("membersSettings.membersTable.title", {
            userAmount: $props.workspace.users.length || 0,
            workspaceName: $props.workspace.name
          })), 1)
        ];
      }
    }),
    "header-right-side": withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        if (_ctx.$hasPermission(
          "workspace.create_invitation",
          $props.workspace,
          $props.workspace.id
        )) {
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
          _push2(`<!---->`);
        }
      } else {
        return [
          _ctx.$hasPermission(
            "workspace.create_invitation",
            $props.workspace,
            $props.workspace.id
          ) ? (openBlock(), createBlock(_component_Button, {
            key: 0,
            type: "primary",
            size: "large",
            class: "margin-left-2",
            onClick: ($event) => _ctx.$refs.inviteModal.show()
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(_ctx.$t("membersSettings.membersTable.inviteMember")), 1)
            ]),
            _: 1
          }, 8, ["onClick"])) : createCommentVNode("", true)
        ];
      }
    }),
    menus: withCtx((slotProps, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_EditMemberContext, {
          ref: "editMemberContext",
          workspace: $props.workspace,
          member: $data.editMember,
          onRemoveUser: slotProps.deleteRow
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_EditRoleContext, {
          ref: "editRoleContext",
          subject: $data.editRoleMember,
          roles: $options.roles,
          workspace: $props.workspace,
          onUpdateRole: ($event) => $options.roleUpdate($event)
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_EditMemberContext, {
            ref: "editMemberContext",
            workspace: $props.workspace,
            member: $data.editMember,
            onRemoveUser: slotProps.deleteRow
          }, null, 8, ["workspace", "member", "onRemoveUser"]),
          createVNode(_component_EditRoleContext, {
            ref: "editRoleContext",
            subject: $data.editRoleMember,
            roles: $options.roles,
            workspace: $props.workspace,
            onUpdateRole: ($event) => $options.roleUpdate($event)
          }, null, 8, ["subject", "roles", "workspace", "onUpdateRole"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_WorkspaceMemberInviteModal, {
    ref: "inviteModal",
    workspace: $props.workspace,
    onInviteSubmitted: ($event) => _ctx.$router.push({
      name: "settings-invites",
      params: {
        workspaceId: $props.workspace.id
      }
    })
  }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("modules/core/components/settings/members/MembersTable.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const MembersTable = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  name: "Members",
  components: { MembersTable },
  props: {
    workspace: {
      type: Object,
      required: true
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_MembersTable = resolveComponent("MembersTable");
  _push(ssrRenderComponent(_component_MembersTable, mergeProps({ workspace: $props.workspace }, _attrs), null, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("modules/core/pages/settings/members.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const members = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { members as default };
//# sourceMappingURL=members-WsRcvVTS.mjs.map
