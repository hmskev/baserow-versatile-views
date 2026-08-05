import { resolveComponent, mergeProps, withCtx, createTextVNode, toDisplayString, createVNode, resolveDynamicComponent, openBlock, createBlock, Fragment, createCommentVNode, renderList, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderVNode, ssrRenderAttrs } from 'vue/server-renderer';
import { _ as _export_sfc, J as context } from './server.mjs';

!(function() {
  try {
    var e = false ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
    var n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "0606a157-99be-4c5c-aa14-1d78a0e3c11a", e._sentryDebugIdIdentifier = "sentry-dbid-0606a157-99be-4c5c-aa14-1d78a0e3c11a");
  } catch (e2) {
  }
})();
const _sfc_main$1 = {
  name: "MemberRoleField",
  props: {
    row: {
      type: Object,
      required: true
    },
    column: {
      type: Object,
      required: true
    }
  },
  emits: ["edit-role-context"],
  computed: {
    isReadOnly() {
      const { additionalProps } = this.column;
      return additionalProps.userId === this.row.user_id || !this.$hasPermission(
        "workspace_user.update",
        this.row,
        additionalProps.workspaceId
      );
    }
  },
  methods: {
    roleName(roles, row) {
      const permissions = row.permissions === "ADMIN" ? "ADMIN" : "MEMBER";
      const role = roles.find((r) => r.uid === permissions);
      return (role == null ? void 0 : role.name) || "";
    },
    onClick(event) {
      this.$emit("edit-role-context", {
        row: this.row,
        event,
        target: event.currentTarget,
        time: Date.now()
      });
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  if ($options.isReadOnly) {
    _push(`<span${ssrRenderAttrs(_attrs)}>${ssrInterpolate($options.roleName($props.column.additionalProps.roles, $props.row))}</span>`);
  } else {
    _push(`<a${ssrRenderAttrs(mergeProps({ class: "member-role-field__link" }, _attrs))}><span>${ssrInterpolate($options.roleName($props.column.additionalProps.roles, $props.row))}</span><i class="iconoir-nav-arrow-down"></i></a>`);
  }
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("modules/core/components/settings/members/MemberRoleField.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const MemberRoleField = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  name: "EditRoleContext",
  mixins: [context],
  props: {
    workspace: {
      type: Object,
      required: true
    },
    subject: {
      required: true,
      type: Object
    },
    roles: {
      required: true,
      type: Array
    },
    roleValueColumn: {
      type: String,
      required: false,
      default: "permissions"
    },
    allowRemovingRole: {
      type: Boolean,
      default: false
    }
  },
  emits: ["delete", "update-role"],
  computed: {
    visibleRoles() {
      return this.roles.filter((role) => role.isVisible);
    },
    atLeastOneBillableRole() {
      return this.roles.some((role) => role.isBillable);
    }
  },
  methods: {
    roleUpdate(roleNew, subject) {
      if (subject[this.roleValueColumn] === roleNew) {
        return;
      }
      this.$emit("update-role", { uid: roleNew, subject });
      this.hide();
    },
    deactivatedClickModal(role) {
      const allRoles = Object.values(this.$registry.getAll("roles"));
      return allRoles.find((r) => r.getUid() === role.uid).getDeactivatedClickModal();
    },
    clickOnDeactivatedItem(value) {
      const ref = this.$refs[`deactivatedClickModal-${value}`];
      if (ref) {
        ref[0].show();
      }
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Context = resolveComponent("Context");
  const _component_Badge = resolveComponent("Badge");
  _push(ssrRenderComponent(_component_Context, mergeProps({
    ref: "context",
    "overflow-scroll": "",
    "max-height-if-outside-viewport": ""
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        if (Object.keys($props.subject).length > 0) {
          _push2(`<!--[--><div class="context__menu-title"${_scopeId}><div class="edit-role-context__header"${_scopeId}><div${_scopeId}>${ssrInterpolate(_ctx.$t("membersSettings.membersTable.columns.role"))}</div>`);
          if ($options.atLeastOneBillableRole) {
            _push2(`<div class="edit-role-context__header-link"${_scopeId}><i class="iconoir-book"${_scopeId}></i><a href="https://baserow.io/user-docs/subscriptions-overview#who-is-considered-a-user-for-billing-purposes" target="_blank"${_scopeId}>${ssrInterpolate(_ctx.$t("editRoleContext.billableRolesLink"))}</a></div>`);
          } else {
            _push2(`<!---->`);
          }
          _push2(`</div></div><ul class="context__menu context__menu--can-be-active"${_scopeId}><!--[-->`);
          ssrRenderList($options.visibleRoles, (role, index) => {
            _push2(`<li class="context__menu-item"${_scopeId}><a class="${ssrRenderClass([{
              active: !role.isDeactivated && $props.subject[$props.roleValueColumn] === role.uid,
              disabled: role.isDeactivated
            }, "context__menu-item-link context__menu-item-link--with-desc"])}"${_scopeId}><span class="context__menu-item-title"${_scopeId}>${ssrInterpolate(role.name)} `);
            if (role.showIsBillable && role.isBillable) {
              _push2(ssrRenderComponent(_component_Badge, {
                color: "cyan",
                size: "small",
                bold: ""
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.$t("common.billable"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.$t("common.billable")), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else if (role.showIsBillable && !role.isBillable && $options.atLeastOneBillableRole) {
              _push2(ssrRenderComponent(_component_Badge, {
                color: "yellow",
                size: "small",
                bold: ""
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.$t("common.free"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.$t("common.free")), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (role.isDeactivated) {
              _push2(`<i class="iconoir-lock"${_scopeId}></i>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</span>`);
            if (role.description) {
              _push2(`<div class="context__menu-item-description"${_scopeId}>${ssrInterpolate(role.description)}</div>`);
            } else {
              _push2(`<!---->`);
            }
            if (!role.isDeactivated && $props.subject[$props.roleValueColumn] === role.uid) {
              _push2(`<i class="context__menu-active-icon iconoir-check"${_scopeId}></i>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</a>`);
            if ($options.deactivatedClickModal(role)) {
              ssrRenderVNode(_push2, createVNode(resolveDynamicComponent($options.deactivatedClickModal(role)[0]), mergeProps({
                ref_for: true,
                ref: "deactivatedClickModal-" + role.uid
              }, { ref_for: true }, $options.deactivatedClickModal(role)[1], {
                name: _ctx.$t("editRoleContext.additionalRoles"),
                workspace: $props.workspace
              }), null), _parent2, _scopeId);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</li>`);
          });
          _push2(`<!--]-->`);
          if ($props.allowRemovingRole) {
            _push2(`<li class="context__menu-item context__menu-item--with-separator"${_scopeId}><a class="context__menu-item-link context__menu-item-link--delete"${_scopeId}>${ssrInterpolate(_ctx.$t("action.remove"))}</a></li>`);
          } else {
            _push2(`<!---->`);
          }
          _push2(`</ul><!--]-->`);
        } else {
          _push2(`<!---->`);
        }
      } else {
        return [
          Object.keys($props.subject).length > 0 ? (openBlock(), createBlock(Fragment, { key: 0 }, [
            createVNode("div", { class: "context__menu-title" }, [
              createVNode("div", { class: "edit-role-context__header" }, [
                createVNode("div", null, toDisplayString(_ctx.$t("membersSettings.membersTable.columns.role")), 1),
                $options.atLeastOneBillableRole ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "edit-role-context__header-link"
                }, [
                  createVNode("i", { class: "iconoir-book" }),
                  createVNode("a", {
                    href: "https://baserow.io/user-docs/subscriptions-overview#who-is-considered-a-user-for-billing-purposes",
                    target: "_blank"
                  }, toDisplayString(_ctx.$t("editRoleContext.billableRolesLink")), 1)
                ])) : createCommentVNode("", true)
              ])
            ]),
            createVNode("ul", { class: "context__menu context__menu--can-be-active" }, [
              (openBlock(true), createBlock(Fragment, null, renderList($options.visibleRoles, (role, index) => {
                return openBlock(), createBlock("li", {
                  key: index,
                  class: "context__menu-item"
                }, [
                  createVNode("a", {
                    class: ["context__menu-item-link context__menu-item-link--with-desc", {
                      active: !role.isDeactivated && $props.subject[$props.roleValueColumn] === role.uid,
                      disabled: role.isDeactivated
                    }],
                    onClick: ($event) => !role.isDeactivated ? $options.roleUpdate(role.uid, $props.subject) : $options.clickOnDeactivatedItem(role.uid)
                  }, [
                    createVNode("span", { class: "context__menu-item-title" }, [
                      createTextVNode(toDisplayString(role.name) + " ", 1),
                      role.showIsBillable && role.isBillable ? (openBlock(), createBlock(_component_Badge, {
                        key: 0,
                        color: "cyan",
                        size: "small",
                        bold: ""
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.$t("common.billable")), 1)
                        ]),
                        _: 1
                      })) : role.showIsBillable && !role.isBillable && $options.atLeastOneBillableRole ? (openBlock(), createBlock(_component_Badge, {
                        key: 1,
                        color: "yellow",
                        size: "small",
                        bold: ""
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.$t("common.free")), 1)
                        ]),
                        _: 1
                      })) : createCommentVNode("", true),
                      role.isDeactivated ? (openBlock(), createBlock("i", {
                        key: 2,
                        class: "iconoir-lock"
                      })) : createCommentVNode("", true)
                    ]),
                    role.description ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "context__menu-item-description"
                    }, toDisplayString(role.description), 1)) : createCommentVNode("", true),
                    !role.isDeactivated && $props.subject[$props.roleValueColumn] === role.uid ? (openBlock(), createBlock("i", {
                      key: 1,
                      class: "context__menu-active-icon iconoir-check"
                    })) : createCommentVNode("", true)
                  ], 10, ["onClick"]),
                  $options.deactivatedClickModal(role) ? (openBlock(), createBlock(resolveDynamicComponent($options.deactivatedClickModal(role)[0]), mergeProps({
                    key: 0,
                    ref_for: true,
                    ref: "deactivatedClickModal-" + role.uid
                  }, { ref_for: true }, $options.deactivatedClickModal(role)[1], {
                    name: _ctx.$t("editRoleContext.additionalRoles"),
                    workspace: $props.workspace
                  }), null, 16, ["name", "workspace"])) : createCommentVNode("", true)
                ]);
              }), 128)),
              $props.allowRemovingRole ? (openBlock(), createBlock("li", {
                key: 0,
                class: "context__menu-item context__menu-item--with-separator"
              }, [
                createVNode("a", {
                  class: "context__menu-item-link context__menu-item-link--delete",
                  onClick: ($event) => _ctx.$emit("delete")
                }, toDisplayString(_ctx.$t("action.remove")), 9, ["onClick"])
              ])) : createCommentVNode("", true)
            ])
          ], 64)) : createCommentVNode("", true)
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("modules/core/components/settings/members/EditRoleContext.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const EditRoleContext = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { EditRoleContext as E, MemberRoleField as M };
//# sourceMappingURL=EditRoleContext-cOu83TKf.mjs.map
