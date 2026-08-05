import { ref, reactive, computed, withAsyncContext, watch, resolveComponent, mergeProps, unref, withCtx, createTextVNode, toDisplayString, createVNode, resolveDynamicComponent, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderStyle, ssrRenderList, ssrRenderVNode } from 'vue/server-renderer';
import { u as useNuxtApp, d as useI18n, l as useStore, g as useHead, E as EMAIL_VERIFICATION_OPTIONS, f as useAsyncData, a4 as SettingsService, I as notifyIf } from './server.mjs';
import { useVuelidate } from '@vuelidate/core';
import { helpers, integer, between, required } from '@vuelidate/validators';
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

!(function() {
  try {
    var e = false ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
    var n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "bf977630-d1df-4729-9690-01bf4f339887", e._sentryDebugIdIdentifier = "sentry-dbid-bf977630-d1df-4729-9690-01bf4f339887");
  } catch (e2) {
  }
})();
const _sfc_main = {
  __name: "settings",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { $registry, $client, $baserowVersion, $i18n } = useNuxtApp();
    const { t: $t } = useI18n();
    const store = useStore();
    useHead({ title: $i18n.t("settings.settingsTitle") });
    const instanceIdCopied = ref(null);
    const values = reactive({
      account_deletion_grace_delay: null
    });
    const settings = computed(() => store.getters["settings/get"]);
    const emailVerificationOptions = computed(() => [
      {
        label: $t("settings.emailVerificationNoVerification"),
        value: EMAIL_VERIFICATION_OPTIONS.NO_VERIFICATION
      },
      {
        label: $t("settings.emailVerificationRecommended"),
        value: EMAIL_VERIFICATION_OPTIONS.RECOMMENDED
      },
      {
        label: $t("settings.emailVerificationEnforced"),
        value: EMAIL_VERIFICATION_OPTIONS.ENFORCED
      }
    ]);
    const rules = computed(() => {
      return {
        values: {
          account_deletion_grace_delay: {
            required: helpers.withMessage($t("error.requiredField"), required),
            between: helpers.withMessage(
              $t("settings.invalidAccountDeletionGraceDelay"),
              between(0, 32e3)
            ),
            integer: helpers.withMessage(
              $t("settings.invalidAccountDeletionGraceDelay"),
              integer
            )
          }
        }
      };
    });
    const v$ = useVuelidate(rules, { values }, { $lazy: true });
    const { data: instanceData } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData("instance-id", async () => {
      const { data } = await SettingsService($client).getInstanceID();
      return data;
    })), __temp = await __temp, __restore(), __temp);
    const instanceId = computed(() => {
      var _a, _b;
      return (_b = (_a = instanceData.value) == null ? void 0 : _a.instance_id) != null ? _b : "";
    });
    const additionalSettingsComponents = computed(() => {
      return Object.values($registry.getAll("plugin")).reduce(
        (components, plugin) => components.concat(plugin.getSettingsPageComponents()),
        []
      ).filter((component) => component !== null);
    });
    const baserowVersion = computed(() => $baserowVersion);
    async function updateSettings(payload) {
      v$.value.$touch();
      if (v$.value.$invalid) return;
      try {
        await store.dispatch("settings/update", payload);
      } catch (error) {
        notifyIf(error, "settings");
      }
    }
    function updateAccountDeletionGraceDelay() {
      const existing = settings.value.account_deletion_grace_delay;
      const parsed = parseInt(v$.value.values.account_deletion_grace_delay.$model);
      if (!v$.value.values.account_deletion_grace_delay.$error && existing !== parsed) {
        updateSettings({ account_deletion_grace_delay: parsed });
      }
    }
    function handleAccountDeletionGraceDelayInput(event) {
      v$.value.values.account_deletion_grace_delay.$model = event;
      updateAccountDeletionGraceDelay();
    }
    watch(
      () => settings.value.account_deletion_grace_delay,
      (val) => {
        v$.value.values.account_deletion_grace_delay.$model = val;
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Copied = resolveComponent("Copied");
      const _component_SwitchInput = resolveComponent("SwitchInput");
      const _component_RadioGroup = resolveComponent("RadioGroup");
      const _component_FormGroup = resolveComponent("FormGroup");
      const _component_FormInput = resolveComponent("FormInput");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "layout__col-2-scroll" }, _attrs))}><div class="admin-settings"><h1>${ssrInterpolate(unref($t)("settings.settingsTitle"))}</h1><div class="admin-settings__group"><div class="admin-settings__item"><div class="admin-settings__label"><div class="admin-settings__name">${ssrInterpolate(unref($t)("settings.baserowInstanceId"))}</div><div class="admin-settings__description">${ssrInterpolate(unref($t)("settings.instanceIdDescription"))}</div></div><div class="admin-settings__control">${ssrInterpolate(instanceId.value)} <a class="licenses__instance-id-copy">${ssrInterpolate(unref($t)("action.copy"))} `);
      _push(ssrRenderComponent(_component_Copied, {
        ref_key: "instanceIdCopied",
        ref: instanceIdCopied
      }, null, _parent));
      _push(`</a></div></div><div class="admin-settings__item"><div class="admin-settings__label"><div class="admin-settings__name">${ssrInterpolate(unref($t)("settings.baserowVersion"))}</div><div class="admin-settings__description">${ssrInterpolate(unref($t)("settings.baserowVersionDescription"))}</div></div><div class="admin-settings__control">${ssrInterpolate(baserowVersion.value)}</div></div><div class="admin-settings__item"><div class="admin-settings__label"><div class="admin-settings__name">${ssrInterpolate(unref($t)("settings.settingsVerifyImportSignature"))}</div><div class="admin-settings__description">${ssrInterpolate(unref($t)("settings.settingsVerifyImportSignatureDescription"))}</div></div><div class="admin-settings__control">`);
      _push(ssrRenderComponent(_component_SwitchInput, {
        value: settings.value.verify_import_signature,
        onInput: ($event) => updateSettings({ verify_import_signature: $event })
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref($t)("settings.enabled"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref($t)("settings.enabled")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div><div class="admin-settings__group"><h2 class="admin-settings__group-title">${ssrInterpolate(unref($t)("settings.accountRestrictions"))}</h2><div class="admin-settings__item"><div class="admin-settings__label"><div class="admin-settings__name">${ssrInterpolate(unref($t)("settings.settingAllowNewAccountsName"))}</div><div class="admin-settings__description">${ssrInterpolate(unref($t)("settings.settingAllowNewAccountsDescription"))}</div></div><div class="admin-settings__control">`);
      _push(ssrRenderComponent(_component_SwitchInput, {
        value: settings.value.allow_new_signups,
        onInput: ($event) => updateSettings({ allow_new_signups: $event })
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref($t)("settings.enabled"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref($t)("settings.enabled")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
      if (!settings.value.allow_new_signups) {
        _push(`<div class="admin-settings__item"><div class="admin-settings__label"><div class="admin-settings__name">${ssrInterpolate(unref($t)("settings.settingAllowSignupsViaWorkspaceInvitationsName"))}</div><div class="admin-settings__description">${ssrInterpolate(unref($t)(
          "settings.settingAllowSignupsViaWorkspaceInvitationDescription"
        ))}</div></div><div class="admin-settings__control">`);
        _push(ssrRenderComponent(_component_SwitchInput, {
          value: settings.value.allow_signups_via_workspace_invitations,
          onInput: ($event) => updateSettings({
            allow_signups_via_workspace_invitations: $event
          })
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref($t)("settings.enabled"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(unref($t)("settings.enabled")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="admin-settings__item"><div class="admin-settings__label"><div class="admin-settings__name">${ssrInterpolate(unref($t)("settings.settingAllowResetPasswordName"))}</div><div class="admin-settings__description">${ssrInterpolate(unref($t)("settings.settingAllowResetPasswordDescription"))}</div></div><div class="admin-settings__control">`);
      _push(ssrRenderComponent(_component_SwitchInput, {
        value: settings.value.allow_reset_password,
        onInput: ($event) => updateSettings({ allow_reset_password: $event })
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref($t)("settings.enabled"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref($t)("settings.enabled")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="warning" style="${ssrRenderStyle(!settings.value.allow_reset_password ? null : { display: "none" })}">${ssrInterpolate(unref($t)("settings.settingAllowResetPasswordWarning"))}</div></div></div><div class="admin-settings__item"><div class="admin-settings__label"><div class="admin-settings__name">${ssrInterpolate(unref($t)("settings.settingAllowNonStaffCreateWorkspaceOperation"))}</div><div class="admin-settings__description">${ssrInterpolate(unref($t)(
        "settings.settingAllowNonStaffCreateWorkspaceOperationDescription"
      ))}</div></div><div class="admin-settings__control">`);
      _push(ssrRenderComponent(_component_SwitchInput, {
        value: settings.value.allow_global_workspace_creation,
        onInput: ($event) => updateSettings({ allow_global_workspace_creation: $event })
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref($t)("settings.enabled"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref($t)("settings.enabled")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="warning" style="${ssrRenderStyle(settings.value.allow_global_workspace_creation ? null : { display: "none" })}">${ssrInterpolate(unref($t)(
        "settings.settingAllowNonStaffCreateWorkspaceOperationWarning"
      ))}</div></div></div></div><div class="admin-settings__group"><h2 class="admin-settings__group-title">${ssrInterpolate(unref($t)("settings.userSettings"))}</h2><div class="admin-settings__item"><div class="admin-settings__label"><div class="admin-settings__name">${ssrInterpolate(unref($t)("settings.emailVerification"))}</div><div class="admin-settings__description">${ssrInterpolate(unref($t)("settings.emailVerificationDescription"))}</div></div><div class="admin-settings__control">`);
      _push(ssrRenderComponent(_component_RadioGroup, {
        "model-value": settings.value.email_verification,
        options: emailVerificationOptions.value,
        onInput: ($event) => updateSettings({ email_verification: $event })
      }, null, _parent));
      _push(`</div></div><div class="admin-settings__item"><div class="admin-settings__label"><div class="admin-settings__name">${ssrInterpolate(unref($t)("settings.settingUserDeletionGraceDelay"))}</div><div class="admin-settings__description">${ssrInterpolate(unref($t)("settings.settingUserDeletionGraceDelayDescription"))}</div></div><div class="admin-settings__control">`);
      _push(ssrRenderComponent(_component_FormGroup, {
        error: unref(v$).values.account_deletion_grace_delay.$error
      }, {
        error: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b;
          if (_push2) {
            _push2(`${ssrInterpolate((_a = unref(v$).values.account_deletion_grace_delay.$errors[0]) == null ? void 0 : _a.$message)}`);
          } else {
            return [
              createTextVNode(toDisplayString((_b = unref(v$).values.account_deletion_grace_delay.$errors[0]) == null ? void 0 : _b.$message), 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_FormInput, {
              value: unref(v$).values.account_deletion_grace_delay.$model,
              error: unref(v$).values.account_deletion_grace_delay.$error,
              type: "number",
              size: "large",
              onInput: ($event) => handleAccountDeletionGraceDelayInput($event)
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_FormInput, {
                value: unref(v$).values.account_deletion_grace_delay.$model,
                error: unref(v$).values.account_deletion_grace_delay.$error,
                type: "number",
                size: "large",
                onInput: ($event) => handleAccountDeletionGraceDelayInput($event)
              }, null, 8, ["value", "error", "onInput"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div><div class="admin-settings__group"><h2 class="admin-settings__group-title">${ssrInterpolate(unref($t)("settings.maintenance"))}</h2><div class="admin-settings__item"><div class="admin-settings__label"><div class="admin-settings__name">${ssrInterpolate(unref($t)("settings.settingTrackWorkspaceUsage"))}</div><div class="admin-settings__description">${ssrInterpolate(unref($t)("settings.settingTrackWorkspaceUsageDescription"))}</div></div><div class="admin-settings__control">`);
      _push(ssrRenderComponent(_component_SwitchInput, {
        value: settings.value.track_workspace_usage,
        onInput: ($event) => updateSettings({ track_workspace_usage: $event })
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref($t)("settings.enabled"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref($t)("settings.enabled")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div><!--[-->`);
      ssrRenderList(additionalSettingsComponents.value, (component, index) => {
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(component), { key: index }, null), _parent);
      });
      _push(`<!--]--></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("modules/core/pages/admin/settings.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=settings-1isSDY2W.mjs.map
