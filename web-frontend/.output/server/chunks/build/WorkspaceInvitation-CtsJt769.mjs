import { b as buildAssetsURL } from '../nitro/nitro.mjs';
import { _ as _export_sfc, E as EMAIL_VERIFICATION_OPTIONS, a2 as mapState, a3 as ApplicationService, p as pageFinished, I as notifyIf, u as useNuxtApp } from './server.mjs';
import { r as resendEmailVerification } from './resendEmailVerification-B41zYwUk.mjs';
import { resolveComponent, mergeProps, withCtx, createTextVNode, toDisplayString, createVNode, nextTick, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';

!(function() {
  try {
    var e = false ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
    var n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "46fc4a19-29dc-46d7-bade-ea74b0cd1c70", e._sentryDebugIdIdentifier = "sentry-dbid-46fc4a19-29dc-46d7-bade-ea74b0cd1c70");
  } catch (e2) {
  }
})();
const _imports_0 = "" + buildAssetsURL("empty_workspace_illustration.EqrwPP7X.png");
const _imports_1 = "" + buildAssetsURL("empty_workspace_illustration_2x.D-XWAZW5.png");
const _sfc_main$1 = {
  name: "DashboardVerifyEmail",
  mixins: [resendEmailVerification],
  computed: {
    ...mapState({
      user: (state) => state.auth.user,
      settings: (state) => state.settings.settings,
      refreshTokenPayload: (state) => state.auth.refreshTokenPayload
    }),
    shouldBeDisplayed() {
      var _a;
      if ([
        EMAIL_VERIFICATION_OPTIONS.RECOMMENDED,
        EMAIL_VERIFICATION_OPTIONS.ENFORCED
      ].includes(this.settings.email_verification) && this.user.email_verified === false && ((_a = this.refreshTokenPayload) == null ? void 0 : _a.verified_email_claim) === EMAIL_VERIFICATION_OPTIONS.ENFORCED) {
        return true;
      }
      return false;
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Alert = resolveComponent("Alert");
  const _component_Button = resolveComponent("Button");
  if ($options.shouldBeDisplayed) {
    _push(ssrRenderComponent(_component_Alert, mergeProps({ type: "info-primary" }, _attrs), {
      title: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(_ctx.$t("dashboardVerifyEmail.title"))}`);
        } else {
          return [
            createTextVNode(toDisplayString(_ctx.$t("dashboardVerifyEmail.title")), 1)
          ];
        }
      }),
      actions: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(ssrRenderComponent(_component_Button, {
            type: "primary",
            size: "small",
            disabled: _ctx.resendLoading || _ctx.resendSuccess,
            loading: _ctx.resendLoading,
            onClick: ($event) => _ctx.resend(_ctx.user.username)
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`${ssrInterpolate(_ctx.$t("dashboardVerifyEmail.resendConfirmationEmail"))}`);
              } else {
                return [
                  createTextVNode(toDisplayString(_ctx.$t("dashboardVerifyEmail.resendConfirmationEmail")), 1)
                ];
              }
            }),
            _: 1
          }, _parent2, _scopeId));
        } else {
          return [
            createVNode(_component_Button, {
              type: "primary",
              size: "small",
              disabled: _ctx.resendLoading || _ctx.resendSuccess,
              loading: _ctx.resendLoading,
              onClick: ($event) => _ctx.resend(_ctx.user.username)
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(_ctx.$t("dashboardVerifyEmail.resendConfirmationEmail")), 1)
              ]),
              _: 1
            }, 8, ["disabled", "loading", "onClick"])
          ];
        }
      }),
      _: 1
    }, _parent));
  } else {
    _push(`<!---->`);
  }
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("modules/core/components/dashboard/DashboardVerifyEmail.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const DashboardVerifyEmail = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  name: "WorkspaceInvitation",
  props: {
    invitation: {
      type: Object,
      required: true
    }
  },
  emits: ["invitation-accepted"],
  setup() {
    const nuxtApp = useNuxtApp();
    return { nuxtApp };
  },
  data() {
    return {
      rejectLoading: false,
      acceptLoading: false
    };
  },
  methods: {
    async reject(invitation) {
      this.rejectLoading = true;
      try {
        await this.$store.dispatch(
          "auth/rejectWorkspaceInvitation",
          invitation.id
        );
      } catch (error) {
        this.rejectLoading = false;
        notifyIf(error, "workspace");
      }
    },
    /**
     * Accepts the invitation to join the workspace and populates the stores with the new
     * workspace and applications.
     */
    async accept(invitation) {
      this.acceptLoading = true;
      try {
        const workspace = await this.$store.dispatch(
          "auth/acceptWorkspaceInvitation",
          invitation.id
        );
        this.$emit("invitation-accepted", { workspace });
        await this.$store.dispatch("workspace/forceCreate", workspace);
        await this.$store.dispatch("workspace/fetchPermissions", workspace);
        await this.$store.dispatch("workspace/fetchRoles", workspace);
        if (this.$hasPermission(
          "workspace.list_applications",
          workspace,
          workspace.id
        )) {
          const { data: applications } = await ApplicationService(
            this.$client
          ).fetchAll(workspace.id);
          applications.forEach((application) => {
            this.$store.dispatch("application/forceCreate", application);
          });
        }
        await this.$router.push({
          name: "workspace",
          params: {
            workspaceId: workspace.id
          }
        });
        await pageFinished(this.nuxtApp);
        await nextTick();
      } catch (error) {
        this.acceptLoading = false;
        notifyIf(error, "workspace");
      }
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Alert = resolveComponent("Alert");
  const _component_Button = resolveComponent("Button");
  const _component_ButtonText = resolveComponent("ButtonText");
  _push(ssrRenderComponent(_component_Alert, mergeProps({ type: "info-primary" }, _attrs), {
    title: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(_ctx.$t("workspaceInvitation.message", {
          by: $props.invitation.invited_by,
          workspace: $props.invitation.workspace
        }))}`);
      } else {
        return [
          createTextVNode(toDisplayString(_ctx.$t("workspaceInvitation.message", {
            by: $props.invitation.invited_by,
            workspace: $props.invitation.workspace
          })), 1)
        ];
      }
    }),
    actions: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_Button, {
          type: "primary",
          size: "small",
          disabled: $data.acceptLoading || $data.rejectLoading,
          loading: $data.acceptLoading,
          onClick: ($event) => !$data.rejectLoading && !$data.acceptLoading && $options.accept($props.invitation)
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`${ssrInterpolate(_ctx.$t("workspaceInvitation.accept"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("workspaceInvitation.accept")), 1)
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_ButtonText, {
          class: "alert__actions-button-text",
          type: "primary",
          size: "small",
          disabled: $data.rejectLoading || $data.acceptLoading,
          loading: $data.rejectLoading,
          onClick: ($event) => !$data.acceptLoading && !$data.rejectLoading && $options.reject($props.invitation)
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`${ssrInterpolate(_ctx.$t("workspaceInvitation.reject"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("workspaceInvitation.reject")), 1)
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_Button, {
            type: "primary",
            size: "small",
            disabled: $data.acceptLoading || $data.rejectLoading,
            loading: $data.acceptLoading,
            onClick: ($event) => !$data.rejectLoading && !$data.acceptLoading && $options.accept($props.invitation)
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(_ctx.$t("workspaceInvitation.accept")), 1)
            ]),
            _: 1
          }, 8, ["disabled", "loading", "onClick"]),
          createVNode(_component_ButtonText, {
            class: "alert__actions-button-text",
            type: "primary",
            size: "small",
            disabled: $data.rejectLoading || $data.acceptLoading,
            loading: $data.rejectLoading,
            onClick: ($event) => !$data.acceptLoading && !$data.rejectLoading && $options.reject($props.invitation)
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(_ctx.$t("workspaceInvitation.reject")), 1)
            ]),
            _: 1
          }, 8, ["disabled", "loading", "onClick"])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("modules/core/components/workspace/WorkspaceInvitation.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const WorkspaceInvitation = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { DashboardVerifyEmail as D, WorkspaceInvitation as W, _imports_0 as _, _imports_1 as a };
//# sourceMappingURL=WorkspaceInvitation-CtsJt769.mjs.map
