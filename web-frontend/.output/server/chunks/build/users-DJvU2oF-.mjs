import { U as UserService } from './users-C4ZUTpfp.mjs';
import { resolveComponent, mergeProps, withCtx, createVNode, createTextVNode, toDisplayString, openBlock, createBlock, Fragment, withModifiers, createCommentVNode, resolveDirective, withDirectives, vShow, reactive, computed, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderClass, ssrRenderAttrs, ssrRenderAttr, ssrGetDirectiveProps, ssrRenderStyle, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _export_sfc, u as useNuxtApp, g as useHead, J as context, I as notifyIf, m as mapGetters, Q as modal, k as error, a1 as form, P as PasswordInput, q as nameContainsNoUrl, r as nameIsNotEmail, o as passwordValidation } from './server.mjs';
import { U as UserWorkspacesField, L as LocalDateField } from './LocalDateField-DcpQ_xeR.mjs';
import { C as CrudTable, a as CrudTableColumn, S as SimpleField, M as MoreField } from './MoreField-Bjaf4Chm.mjs';
import { T as TwoFactorAuthField } from './TwoFactorAuthField-Hbr2Xk3M.mjs';
import { useVuelidate } from '@vuelidate/core';
import { maxLength, minLength, email, required, sameAs } from '@vuelidate/validators';
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
import 'lodash/isObject.js';

!(function() {
  try {
    var e = false ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
    var n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "63b584a4-d75e-4819-a736-e05511981098", e._sentryDebugIdIdentifier = "sentry-dbid-63b584a4-d75e-4819-a736-e05511981098");
  } catch (e2) {
  }
})();
const _sfc_main$a = {
  name: "UsernameField",
  props: {
    row: {
      required: true,
      type: Object
    }
  },
  methods: {
    firstTwoInitials(name) {
      return (name || "").split(" ").map((s) => s.slice(0, 1)).join("").slice(0, 2).toUpperCase();
    }
  }
};
function _sfc_ssrRender$a(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  var _a;
  const _component_Avatar = resolveComponent("Avatar");
  const _directive_tooltip = resolveDirective("tooltip");
  let _temp0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "user-admin-username" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_Avatar, {
    class: "user-admin-username__avatar",
    rounded: "",
    size: "large",
    initials: $options.firstTwoInitials($props.row.name)
  }, null, _parent));
  _push(`<div class="user-admin-username__name"${ssrRenderAttr("title", $props.row.username)}>${ssrInterpolate($props.row.username)}</div>`);
  if ($props.row.is_staff) {
    _push(`<i${ssrRenderAttrs(_temp0 = mergeProps({ class: "user-admin-username__icon iconoir-user-crown" }, ssrGetDirectiveProps(_ctx, _directive_tooltip, _ctx.$t("user.isStaff"))))}>${"textContent" in _temp0 ? ssrInterpolate(_temp0.textContent) : (_a = _temp0.innerHTML) != null ? _a : ""}</i>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("modules/core/components/admin/users/fields/UsernameField.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const UsernameField = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["ssrRender", _sfc_ssrRender$a]]);
const _sfc_main$9 = {
  name: "ActiveField",
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
function _sfc_ssrRender$9(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  var _a, _b;
  const _directive_tooltip = resolveDirective("tooltip");
  let _temp0, _temp1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "user-admin-active" }, _attrs))}>`);
  if ($props.row[$props.column.key]) {
    _push(`<i${ssrRenderAttrs(_temp0 = mergeProps({ class: "iconoir-check user-admin-active__icon user-admin-active__icon--activated" }, ssrGetDirectiveProps(_ctx, _directive_tooltip, _ctx.$t("user.active"))))}>${"textContent" in _temp0 ? ssrInterpolate(_temp0.textContent) : (_a = _temp0.innerHTML) != null ? _a : ""}</i>`);
  } else {
    _push(`<i${ssrRenderAttrs(_temp1 = mergeProps({ class: "iconoir-cancel user-admin-active__icon user-admin-active__icon--deactivated" }, ssrGetDirectiveProps(_ctx, _directive_tooltip, _ctx.$t("user.deactivated"))))}>${"textContent" in _temp1 ? ssrInterpolate(_temp1.textContent) : (_b = _temp1.innerHTML) != null ? _b : ""}</i>`);
  }
  _push(`</div>`);
}
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("modules/core/components/admin/users/fields/ActiveField.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const ActiveField = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["ssrRender", _sfc_ssrRender$9]]);
const _sfc_main$8 = {
  name: "ChangePasswordForm",
  components: { PasswordInput },
  mixins: [form],
  props: {
    loading: {
      type: Boolean,
      required: true
    }
  },
  setup() {
    const values = reactive({
      values: {
        password: "",
        passwordConfirm: ""
      }
    });
    const rules = computed(() => ({
      values: {
        passwordConfirm: {
          sameAsPassword: sameAs(values.values.password)
        },
        password: passwordValidation
      }
    }));
    return {
      values: values.values,
      v$: useVuelidate(rules, values, { $lazy: true })
    };
  },
  data() {
    return {
      allowedValues: ["password", "passwordConfirm"]
    };
  }
};
function _sfc_ssrRender$8(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_FormGroup = resolveComponent("FormGroup");
  const _component_PasswordInput = resolveComponent("PasswordInput");
  const _component_FormInput = resolveComponent("FormInput");
  const _component_Button = resolveComponent("Button");
  _push(`<form${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_FormGroup, {
    "small-label": "",
    required: "",
    label: _ctx.$t("changePasswordForm.newPassword"),
    class: "margin-bottom-2"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_PasswordInput, {
          modelValue: $setup.values.password,
          "onUpdate:modelValue": ($event) => $setup.values.password = $event,
          "validation-state": $setup.v$.values.password
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_PasswordInput, {
            modelValue: $setup.values.password,
            "onUpdate:modelValue": ($event) => $setup.values.password = $event,
            "validation-state": $setup.v$.values.password
          }, null, 8, ["modelValue", "onUpdate:modelValue", "validation-state"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_FormGroup, {
    "small-label": "",
    required: "",
    label: _ctx.$t("changePasswordForm.repeatPassword"),
    error: _ctx.fieldHasErrors("passwordConfirm")
  }, {
    error: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(_ctx.$t("changePasswordForm.error.doesntMatch"))}`);
      } else {
        return [
          createTextVNode(toDisplayString(_ctx.$t("changePasswordForm.error.doesntMatch")), 1)
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_FormInput, {
          modelValue: $setup.values.passwordConfirm,
          "onUpdate:modelValue": ($event) => $setup.values.passwordConfirm = $event,
          error: _ctx.fieldHasErrors("passwordConfirm"),
          type: "password",
          size: "large",
          onBlur: ($event) => $setup.v$.values.passwordConfirm.$touch()
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_FormInput, {
            modelValue: $setup.values.passwordConfirm,
            "onUpdate:modelValue": ($event) => $setup.values.passwordConfirm = $event,
            error: _ctx.fieldHasErrors("passwordConfirm"),
            type: "password",
            size: "large",
            onBlur: ($event) => $setup.v$.values.passwordConfirm.$touch()
          }, null, 8, ["modelValue", "onUpdate:modelValue", "error", "onBlur"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="actions"><div class="align-right">`);
  _push(ssrRenderComponent(_component_Button, {
    type: "primary",
    size: "large",
    disabled: $props.loading,
    loading: $props.loading
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(_ctx.$t("changePasswordForm.changePassword"))}`);
      } else {
        return [
          createTextVNode(toDisplayString(_ctx.$t("changePasswordForm.changePassword")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></form>`);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("modules/core/components/admin/users/forms/ChangePasswordForm.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const ChangePasswordForm = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$8]]);
const _sfc_main$7 = {
  name: "ChangePasswordModal",
  components: { ChangePasswordForm },
  mixins: [modal, error],
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      loading: false
    };
  },
  methods: {
    async changePassword(values) {
      this.loading = true;
      this.hideError();
      try {
        await UserService(this.$client).update(this.user.id, {
          password: values.password
        });
        this.loading = false;
        this.hide();
      } catch (error2) {
        this.loading = false;
        this.handleError(error2, "application");
      }
    }
  }
};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Modal = resolveComponent("Modal");
  const _component_Error = resolveComponent("Error");
  const _component_ChangePasswordForm = resolveComponent("ChangePasswordForm");
  _push(ssrRenderComponent(_component_Modal, mergeProps({ ref: "modal" }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<h2 class="box__title"${_scopeId}>${ssrInterpolate(_ctx.$t("changeUserPasswordModal.changePassword", $props.user))}</h2>`);
        _push2(ssrRenderComponent(_component_Error, { error: _ctx.error }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_ChangePasswordForm, {
          loading: $data.loading,
          onSubmitted: $options.changePassword
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode("h2", { class: "box__title" }, toDisplayString(_ctx.$t("changeUserPasswordModal.changePassword", $props.user)), 1),
          createVNode(_component_Error, { error: _ctx.error }, null, 8, ["error"]),
          createVNode(_component_ChangePasswordForm, {
            loading: $data.loading,
            onSubmitted: $options.changePassword
          }, null, 8, ["loading", "onSubmitted"])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("modules/core/components/admin/users/modals/ChangeUserPasswordModal.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const ChangePasswordModal = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$7]]);
const _sfc_main$6 = {
  name: "DeleteUserModal",
  mixins: [modal, error],
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  emits: ["delete-user"],
  data() {
    return {
      loading: false
    };
  },
  methods: {
    async deleteUser() {
      this.hideError();
      this.loading = true;
      try {
        await UserService(this.$client).delete(this.user.id);
        this.$emit("delete-user", this.user.id);
        this.hide();
      } catch (error2) {
        this.handleError(error2, "application");
      }
      this.loading = false;
    }
  }
};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Modal = resolveComponent("Modal");
  const _component_Error = resolveComponent("Error");
  const _component_i18n_t = resolveComponent("i18n-t");
  const _component_Button = resolveComponent("Button");
  _push(ssrRenderComponent(_component_Modal, mergeProps({ ref: "modal" }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<h2 class="box__title"${_scopeId}>${ssrInterpolate(_ctx.$t("deleteUserModal.title", $props.user))}</h2>`);
        _push2(ssrRenderComponent(_component_Error, { error: _ctx.error }, null, _parent2, _scopeId));
        _push2(`<div${_scopeId}>`);
        _push2(ssrRenderComponent(_component_i18n_t, {
          keypath: "deleteUserModal.confirmation",
          tag: "p"
        }, {
          name: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<strong class="user-admin-delete__strong"${_scopeId2}>${ssrInterpolate($props.user.username)}</strong>`);
            } else {
              return [
                createVNode("strong", { class: "user-admin-delete__strong" }, toDisplayString($props.user.username), 1)
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`<p${_scopeId}>${ssrInterpolate(_ctx.$t("deleteUserModal.comment1"))}</p><p${_scopeId}>${ssrInterpolate(_ctx.$t("deleteUserModal.comment2"))}</p><div class="actions"${_scopeId}><div class="align-right"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_Button, {
          type: "danger",
          size: "large",
          "full-width": "",
          disabled: $data.loading,
          loading: $data.loading,
          onClick: ($event) => $options.deleteUser()
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`${ssrInterpolate(_ctx.$t("deleteUserModal.delete", $props.user))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("deleteUserModal.delete", $props.user)), 1)
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div></div></div>`);
      } else {
        return [
          createVNode("h2", { class: "box__title" }, toDisplayString(_ctx.$t("deleteUserModal.title", $props.user)), 1),
          createVNode(_component_Error, { error: _ctx.error }, null, 8, ["error"]),
          createVNode("div", null, [
            createVNode(_component_i18n_t, {
              keypath: "deleteUserModal.confirmation",
              tag: "p"
            }, {
              name: withCtx(() => [
                createVNode("strong", { class: "user-admin-delete__strong" }, toDisplayString($props.user.username), 1)
              ]),
              _: 1
            }),
            createVNode("p", null, toDisplayString(_ctx.$t("deleteUserModal.comment1")), 1),
            createVNode("p", null, toDisplayString(_ctx.$t("deleteUserModal.comment2")), 1),
            createVNode("div", { class: "actions" }, [
              createVNode("div", { class: "align-right" }, [
                createVNode(_component_Button, {
                  type: "danger",
                  size: "large",
                  "full-width": "",
                  disabled: $data.loading,
                  loading: $data.loading,
                  onClick: withModifiers(($event) => $options.deleteUser(), ["prevent"])
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(_ctx.$t("deleteUserModal.delete", $props.user)), 1)
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
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("modules/core/components/admin/users/modals/DeleteUserModal.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const DeleteUserModal = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$6]]);
const _sfc_main$5 = {
  name: "UserForm",
  mixins: [form],
  props: {
    user: {
      type: Object,
      required: true
    },
    loading: {
      type: Boolean,
      required: true
    }
  },
  emits: ["remove-two-factor-auth"],
  setup() {
    const values = reactive({
      values: {
        username: "",
        name: "",
        is_active: "",
        is_staff: ""
      }
    });
    const rules = {
      values: {
        name: {
          required,
          minLength: minLength(2),
          maxLength: maxLength(60),
          nameIsNotEmail,
          nameContainsNoUrl
        },
        username: {
          required,
          email
        },
        is_active: {},
        is_staff: {}
      }
    };
    return {
      values: values.values,
      v$: useVuelidate(rules, values, { $lazy: true })
    };
  },
  data() {
    return {
      allowedValues: ["username", "name", "is_active", "is_staff"]
    };
  },
  computed: {
    twoFactorAuthEnabled() {
      var _a;
      return Boolean((_a = this.user.two_factor_auth) == null ? void 0 : _a.is_enabled);
    },
    twoFactorAuthProviderName() {
      var _a;
      const type = (_a = this.user.two_factor_auth) == null ? void 0 : _a.type;
      const registered = this.$registry.getAll("twoFactorAuth");
      return registered[type] ? registered[type].name : type;
    }
  }
};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_FormGroup = resolveComponent("FormGroup");
  const _component_FormInput = resolveComponent("FormInput");
  const _component_Checkbox = resolveComponent("Checkbox");
  const _component_Badge = resolveComponent("Badge");
  const _component_Button = resolveComponent("Button");
  _push(`<form${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_FormGroup, {
    "small-label": "",
    label: _ctx.$t("userForm.fullName"),
    required: "",
    class: "margin-bottom-2",
    error: _ctx.fieldHasErrors("name")
  }, {
    error: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        if ($setup.v$.values.name.required.$invalid) {
          _push2(`<span${_scopeId}>${ssrInterpolate(_ctx.$t("error.requiredField"))}</span>`);
        } else if ($setup.v$.values.name.minLength.$invalid) {
          _push2(`<span${_scopeId}>${ssrInterpolate(_ctx.$t("error.minLength", { min: 2 }))}</span>`);
        } else if ($setup.v$.values.name.maxLength.$invalid) {
          _push2(`<span${_scopeId}>${ssrInterpolate(_ctx.$t("error.maxLength", { max: 60 }))}</span>`);
        } else if ($setup.v$.values.name.nameIsNotEmail.$invalid) {
          _push2(`<span${_scopeId}>${ssrInterpolate(_ctx.$t("error.nameCantBeEmail"))}</span>`);
        } else if ($setup.v$.values.name.nameContainsNoUrl.$invalid) {
          _push2(`<span${_scopeId}>${ssrInterpolate(_ctx.$t("error.nameContainsUrl"))}</span>`);
        } else {
          _push2(`<!---->`);
        }
      } else {
        return [
          $setup.v$.values.name.required.$invalid ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(_ctx.$t("error.requiredField")), 1)) : $setup.v$.values.name.minLength.$invalid ? (openBlock(), createBlock("span", { key: 1 }, toDisplayString(_ctx.$t("error.minLength", { min: 2 })), 1)) : $setup.v$.values.name.maxLength.$invalid ? (openBlock(), createBlock("span", { key: 2 }, toDisplayString(_ctx.$t("error.maxLength", { max: 60 })), 1)) : $setup.v$.values.name.nameIsNotEmail.$invalid ? (openBlock(), createBlock("span", { key: 3 }, toDisplayString(_ctx.$t("error.nameCantBeEmail")), 1)) : $setup.v$.values.name.nameContainsNoUrl.$invalid ? (openBlock(), createBlock("span", { key: 4 }, toDisplayString(_ctx.$t("error.nameContainsUrl")), 1)) : createCommentVNode("", true)
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_FormInput, {
          ref: "name",
          modelValue: $setup.v$.values.name.$model,
          "onUpdate:modelValue": ($event) => $setup.v$.values.name.$model = $event,
          size: "large",
          error: _ctx.fieldHasErrors("name"),
          onBlur: $setup.v$.values.name.$touch
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_FormInput, {
            ref: "name",
            modelValue: $setup.v$.values.name.$model,
            "onUpdate:modelValue": ($event) => $setup.v$.values.name.$model = $event,
            size: "large",
            error: _ctx.fieldHasErrors("name"),
            onBlur: $setup.v$.values.name.$touch
          }, null, 8, ["modelValue", "onUpdate:modelValue", "error", "onBlur"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_FormGroup, {
    "small-label": "",
    label: _ctx.$t("userForm.email"),
    required: "",
    class: "margin-bottom-2",
    error: _ctx.fieldHasErrors("username")
  }, {
    warning: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span style="${ssrRenderStyle($setup.values.username !== $props.user.username && !$setup.v$.values.username.$invalid ? null : { display: "none" })}"${_scopeId}>${ssrInterpolate(_ctx.$t("userForm.warning.changeEmail"))}</span>`);
      } else {
        return [
          withDirectives(createVNode("span", null, toDisplayString(_ctx.$t("userForm.warning.changeEmail")), 513), [
            [
              vShow,
              $setup.values.username !== $props.user.username && !$setup.v$.values.username.$invalid
            ]
          ])
        ];
      }
    }),
    error: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        if ($setup.v$.values.username.required.$invalid) {
          _push2(`<span${_scopeId}>${ssrInterpolate(_ctx.$t("error.requiredField"))}</span>`);
        } else if ($setup.v$.values.username.email.$invalid) {
          _push2(`<span${_scopeId}>${ssrInterpolate(_ctx.$t("error.invalidEmail"))}</span>`);
        } else {
          _push2(`<!---->`);
        }
      } else {
        return [
          $setup.v$.values.username.required.$invalid ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(_ctx.$t("error.requiredField")), 1)) : $setup.v$.values.username.email.$invalid ? (openBlock(), createBlock("span", { key: 1 }, toDisplayString(_ctx.$t("error.invalidEmail")), 1)) : createCommentVNode("", true)
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_FormInput, {
          ref: "email",
          modelValue: $setup.v$.values.username.$model,
          "onUpdate:modelValue": ($event) => $setup.v$.values.username.$model = $event,
          size: "large",
          error: _ctx.fieldHasErrors("username"),
          onBlur: $setup.v$.values.username.$touch
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_FormInput, {
            ref: "email",
            modelValue: $setup.v$.values.username.$model,
            "onUpdate:modelValue": ($event) => $setup.v$.values.username.$model = $event,
            size: "large",
            error: _ctx.fieldHasErrors("username"),
            onBlur: $setup.v$.values.username.$touch
          }, null, 8, ["modelValue", "onUpdate:modelValue", "error", "onBlur"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_FormGroup, {
    "small-label": "",
    label: _ctx.$t("userForm.isActive"),
    required: "",
    class: "margin-bottom-2"
  }, {
    warning: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span style="${ssrRenderStyle(!$setup.values.is_active ? null : { display: "none" })}"${_scopeId}>${ssrInterpolate(_ctx.$t("userForm.warning.inactiveUser"))}</span>`);
      } else {
        return [
          withDirectives(createVNode("span", null, toDisplayString(_ctx.$t("userForm.warning.inactiveUser")), 513), [
            [vShow, !$setup.values.is_active]
          ])
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_Checkbox, {
          modelValue: $setup.v$.values.is_active.$model,
          "onUpdate:modelValue": ($event) => $setup.v$.values.is_active.$model = $event,
          disabled: $props.loading
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_Checkbox, {
            modelValue: $setup.v$.values.is_active.$model,
            "onUpdate:modelValue": ($event) => $setup.v$.values.is_active.$model = $event,
            disabled: $props.loading
          }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_FormGroup, {
    "small-label": "",
    label: _ctx.$t("user.isStaff"),
    required: ""
  }, {
    warning: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span style="${ssrRenderStyle($setup.values.is_staff ? null : { display: "none" })}"${_scopeId}>${ssrInterpolate(_ctx.$t("userForm.warning.userStaff"))}</span>`);
      } else {
        return [
          withDirectives(createVNode("span", null, toDisplayString(_ctx.$t("userForm.warning.userStaff")), 513), [
            [vShow, $setup.values.is_staff]
          ])
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_Checkbox, {
          modelValue: $setup.v$.values.is_staff.$model,
          "onUpdate:modelValue": ($event) => $setup.v$.values.is_staff.$model = $event,
          disabled: $props.loading
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_Checkbox, {
            modelValue: $setup.v$.values.is_staff.$model,
            "onUpdate:modelValue": ($event) => $setup.v$.values.is_staff.$model = $event,
            disabled: $props.loading
          }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_FormGroup, {
    "small-label": "",
    label: _ctx.$t("userForm.twoFactorAuth"),
    class: "margin-top-2"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="user-admin-edit__two-factor"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_Badge, {
          color: $options.twoFactorAuthEnabled ? "green" : "neutral",
          rounded: true
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`${ssrInterpolate($options.twoFactorAuthEnabled ? $options.twoFactorAuthProviderName : _ctx.$t("twoFactorAuthField.disabled"))}`);
            } else {
              return [
                createTextVNode(toDisplayString($options.twoFactorAuthEnabled ? $options.twoFactorAuthProviderName : _ctx.$t("twoFactorAuthField.disabled")), 1)
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        if ($options.twoFactorAuthEnabled) {
          _push2(`<a class="user-admin-edit__remove-2fa"${_scopeId}>${ssrInterpolate(_ctx.$t("userForm.removeTwoFactorAuth"))}</a>`);
        } else {
          _push2(`<!---->`);
        }
        _push2(`</div>`);
      } else {
        return [
          createVNode("div", { class: "user-admin-edit__two-factor" }, [
            createVNode(_component_Badge, {
              color: $options.twoFactorAuthEnabled ? "green" : "neutral",
              rounded: true
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString($options.twoFactorAuthEnabled ? $options.twoFactorAuthProviderName : _ctx.$t("twoFactorAuthField.disabled")), 1)
              ]),
              _: 1
            }, 8, ["color"]),
            $options.twoFactorAuthEnabled ? (openBlock(), createBlock("a", {
              key: 0,
              class: "user-admin-edit__remove-2fa",
              onClick: withModifiers(($event) => _ctx.$emit("remove-two-factor-auth"), ["prevent"])
            }, toDisplayString(_ctx.$t("userForm.removeTwoFactorAuth")), 9, ["onClick"])) : createCommentVNode("", true)
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="actions">`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`<div class="align-right">`);
  _push(ssrRenderComponent(_component_Button, {
    type: "primary",
    size: "large",
    disabled: $props.loading,
    loading: $props.loading
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(_ctx.$t("action.save"))}`);
      } else {
        return [
          createTextVNode(toDisplayString(_ctx.$t("action.save")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></form>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("modules/core/components/admin/users/forms/UserForm.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const UserForm = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$5]]);
const _sfc_main$4 = {
  name: "DisableTwoFactorAuthModal",
  mixins: [modal, error],
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  emits: ["two-factor-auth-disabled"],
  data() {
    return {
      loading: false
    };
  },
  methods: {
    async disableTwoFactorAuth() {
      this.hideError();
      this.loading = true;
      try {
        await UserService(this.$client).disableTwoFactorAuth(this.user.id);
        this.$emit("two-factor-auth-disabled");
        this.hide();
      } catch (error2) {
        this.handleError(error2, "application");
      }
      this.loading = false;
    }
  }
};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Modal = resolveComponent("Modal");
  const _component_Error = resolveComponent("Error");
  const _component_i18n_t = resolveComponent("i18n-t");
  const _component_Button = resolveComponent("Button");
  _push(ssrRenderComponent(_component_Modal, mergeProps({ ref: "modal" }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<h2 class="box__title"${_scopeId}>${ssrInterpolate(_ctx.$t("disableTwoFactorAuthModal.title"))}</h2>`);
        _push2(ssrRenderComponent(_component_Error, { error: _ctx.error }, null, _parent2, _scopeId));
        _push2(`<div${_scopeId}>`);
        _push2(ssrRenderComponent(_component_i18n_t, {
          keypath: "disableTwoFactorAuthModal.confirmation",
          tag: "p"
        }, {
          name: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<strong class="user-admin-delete__strong"${_scopeId2}>${ssrInterpolate($props.user.username)}</strong>`);
            } else {
              return [
                createVNode("strong", { class: "user-admin-delete__strong" }, toDisplayString($props.user.username), 1)
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`<p${_scopeId}>${ssrInterpolate(_ctx.$t("disableTwoFactorAuthModal.comment"))}</p><div class="actions"${_scopeId}><div class="align-right"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_Button, {
          type: "danger",
          size: "large",
          "full-width": "",
          disabled: $data.loading,
          loading: $data.loading,
          onClick: ($event) => $options.disableTwoFactorAuth()
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`${ssrInterpolate(_ctx.$t("disableTwoFactorAuthModal.remove"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("disableTwoFactorAuthModal.remove")), 1)
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div></div></div>`);
      } else {
        return [
          createVNode("h2", { class: "box__title" }, toDisplayString(_ctx.$t("disableTwoFactorAuthModal.title")), 1),
          createVNode(_component_Error, { error: _ctx.error }, null, 8, ["error"]),
          createVNode("div", null, [
            createVNode(_component_i18n_t, {
              keypath: "disableTwoFactorAuthModal.confirmation",
              tag: "p"
            }, {
              name: withCtx(() => [
                createVNode("strong", { class: "user-admin-delete__strong" }, toDisplayString($props.user.username), 1)
              ]),
              _: 1
            }),
            createVNode("p", null, toDisplayString(_ctx.$t("disableTwoFactorAuthModal.comment")), 1),
            createVNode("div", { class: "actions" }, [
              createVNode("div", { class: "align-right" }, [
                createVNode(_component_Button, {
                  type: "danger",
                  size: "large",
                  "full-width": "",
                  disabled: $data.loading,
                  loading: $data.loading,
                  onClick: withModifiers(($event) => $options.disableTwoFactorAuth(), ["prevent"])
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(_ctx.$t("disableTwoFactorAuthModal.remove")), 1)
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
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("modules/core/components/admin/users/modals/DisableTwoFactorAuthModal.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const DisableTwoFactorAuthModal = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$3 = {
  name: "EditUserModal",
  components: { DeleteUserModal, DisableTwoFactorAuthModal, UserForm },
  mixins: [modal, error],
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  emits: ["delete-user", "update"],
  data() {
    return {
      loading: false
    };
  },
  methods: {
    async editUser(values) {
      this.loading = true;
      this.hideError();
      try {
        const { data: userData } = await UserService(this.$client).update(
          this.user.id,
          values
        );
        this.$emit("update", userData);
        this.loading = false;
        this.hide();
      } catch (error2) {
        this.loading = false;
        this.handleError(error2, "application");
      }
    },
    onTwoFactorAuthDisabled() {
      this.$emit("update", { ...this.user, two_factor_auth: null });
    }
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Modal = resolveComponent("Modal");
  const _component_Error = resolveComponent("Error");
  const _component_UserForm = resolveComponent("UserForm");
  const _component_DeleteUserModal = resolveComponent("DeleteUserModal");
  const _component_DisableTwoFactorAuthModal = resolveComponent("DisableTwoFactorAuthModal");
  _push(ssrRenderComponent(_component_Modal, mergeProps({
    ref: "modal",
    onHidden: ($event) => _ctx.$refs.form && _ctx.$refs.form.reset()
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<h2 class="box__title"${_scopeId}>${ssrInterpolate(_ctx.$t("editUserModal.edit", { username: $props.user.username }))}</h2>`);
        _push2(ssrRenderComponent(_component_Error, { error: _ctx.error }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_UserForm, {
          ref: "form",
          user: $props.user,
          loading: $data.loading,
          "default-values": $props.user,
          onSubmitted: $options.editUser,
          onRemoveTwoFactorAuth: ($event) => _ctx.$refs.disableTwoFactorAuthModal.show()
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="align-left"${_scopeId2}><a class="user-admin-edit__delete"${_scopeId2}>${ssrInterpolate(_ctx.$t("editUserModal.delete"))}</a></div>`);
            } else {
              return [
                createVNode("div", { class: "align-left" }, [
                  createVNode("a", {
                    class: "user-admin-edit__delete",
                    onClick: ($event) => _ctx.$refs.deleteUserModal.show()
                  }, toDisplayString(_ctx.$t("editUserModal.delete")), 9, ["onClick"])
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_DeleteUserModal, {
          ref: "deleteUserModal",
          user: $props.user,
          onDeleteUser: ($event) => _ctx.$emit("delete-user", $event)
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_DisableTwoFactorAuthModal, {
          ref: "disableTwoFactorAuthModal",
          user: $props.user,
          onTwoFactorAuthDisabled: $options.onTwoFactorAuthDisabled
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode("h2", { class: "box__title" }, toDisplayString(_ctx.$t("editUserModal.edit", { username: $props.user.username })), 1),
          createVNode(_component_Error, { error: _ctx.error }, null, 8, ["error"]),
          createVNode(_component_UserForm, {
            ref: "form",
            user: $props.user,
            loading: $data.loading,
            "default-values": $props.user,
            onSubmitted: $options.editUser,
            onRemoveTwoFactorAuth: ($event) => _ctx.$refs.disableTwoFactorAuthModal.show()
          }, {
            default: withCtx(() => [
              createVNode("div", { class: "align-left" }, [
                createVNode("a", {
                  class: "user-admin-edit__delete",
                  onClick: ($event) => _ctx.$refs.deleteUserModal.show()
                }, toDisplayString(_ctx.$t("editUserModal.delete")), 9, ["onClick"])
              ])
            ]),
            _: 1
          }, 8, ["user", "loading", "default-values", "onSubmitted", "onRemoveTwoFactorAuth"]),
          createVNode(_component_DeleteUserModal, {
            ref: "deleteUserModal",
            user: $props.user,
            onDeleteUser: ($event) => _ctx.$emit("delete-user", $event)
          }, null, 8, ["user", "onDeleteUser"]),
          createVNode(_component_DisableTwoFactorAuthModal, {
            ref: "disableTwoFactorAuthModal",
            user: $props.user,
            onTwoFactorAuthDisabled: $options.onTwoFactorAuthDisabled
          }, null, 8, ["user", "onTwoFactorAuthDisabled"])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("modules/core/components/admin/users/modals/EditUserModal.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const EditUserModal = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$2 = {
  name: "EditUserContext",
  components: {
    ChangePasswordModal,
    DeleteUserModal,
    EditUserModal
  },
  mixins: [context],
  props: {
    user: {
      required: true,
      type: Object
    }
  },
  emits: ["delete-user", "update"],
  data() {
    return {
      loading: false,
      impersonateLoading: false
    };
  },
  computed: {
    ...mapGetters({
      userId: "auth/getUserId"
    })
  },
  methods: {
    showChangePasswordModal() {
      this.$refs.changePasswordModal.show();
      this.hide();
    },
    showDeleteModal() {
      this.$refs.deleteUserModal.show();
      this.hide();
    },
    showEditModal() {
      this.$refs.editUserModal.show();
      this.hide();
    },
    onDeleteUser(event) {
      this.$emit("delete-user", event);
      this.$refs.editUserModal.hide();
    },
    async changeIsActive(isActive) {
      try {
        this.loading = true;
        const { data: newUser } = await UserService(this.$client).update(
          this.user.id,
          { is_active: isActive }
        );
        this.hide();
        this.$emit("update", newUser);
      } catch (error2) {
        notifyIf(error2, "settings");
      }
      this.loading = false;
    },
    async activate() {
      await this.changeIsActive(true);
    },
    async deactivate() {
      await this.changeIsActive(false);
    },
    impersonate() {
      if (!this.user.is_active) {
        return;
      }
      this.impersonateLoading = true;
      let url = this.$router.resolve({ name: "dashboard" }).href;
      url += "?__impersonate-user=" + this.user.id;
      (void 0).location.href = url;
    }
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Context = resolveComponent("Context");
  const _component_DeleteUserModal = resolveComponent("DeleteUserModal");
  const _component_EditUserModal = resolveComponent("EditUserModal");
  const _component_ChangePasswordModal = resolveComponent("ChangePasswordModal");
  _push(ssrRenderComponent(_component_Context, mergeProps({
    ref: "context",
    "overflow-scroll": "",
    "max-height-if-outside-viewport": ""
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        if (Object.keys($props.user).length > 0) {
          _push2(`<!--[--><div class="context__menu-title"${_scopeId}>${ssrInterpolate($props.user.username)} (${ssrInterpolate($props.user.id)})</div><ul class="context__menu"${_scopeId}><li class="context__menu-item"${_scopeId}><a class="context__menu-item-link"${_scopeId}><i class="context__menu-item-icon iconoir-edit-pencil"${_scopeId}></i> ${ssrInterpolate(_ctx.$t("action.edit"))}</a></li><li class="context__menu-item"${_scopeId}><a class="context__menu-item-link"${_scopeId}><i class="context__menu-item-icon iconoir-key-alt"${_scopeId}></i> ${ssrInterpolate(_ctx.$t("editUserContext.changePassword"))}</a></li><li class="context__menu-item"${_scopeId}>`);
          if ($props.user.is_active) {
            _push2(`<a class="${ssrRenderClass([{
              "context__menu-item-link--loading": $data.loading
            }, "context__menu-item-link"])}"${_scopeId}><i class="context__menu-item-icon iconoir-cancel"${_scopeId}></i> ${ssrInterpolate(_ctx.$t("action.deactivate"))}</a>`);
          } else {
            _push2(`<a class="${ssrRenderClass([{
              "context__menu-item-link--loading": $data.loading
            }, "context__menu-item-link"])}"${_scopeId}><i class="context__menu-item-icon iconoir-check"${_scopeId}></i> ${ssrInterpolate(_ctx.$t("action.activate"))}</a>`);
          }
          _push2(`</li>`);
          if ($props.user.id !== _ctx.userId && !$props.user.is_staff) {
            _push2(`<li class="context__menu-item"${_scopeId}><a class="${ssrRenderClass([{
              "context__menu-item-link--loading": $data.impersonateLoading,
              disabled: !$props.user.is_active
            }, "context__menu-item-link"])}"${_scopeId}><i class="context__menu-item-icon iconoir-group"${_scopeId}></i> ${ssrInterpolate(_ctx.$t("editUserContext.impersonate"))}</a></li>`);
          } else {
            _push2(`<!---->`);
          }
          _push2(`<li class="context__menu-item context__menu-item--with-separator"${_scopeId}><a class="context__menu-item-link context__menu-item-link--delete"${_scopeId}><i class="context__menu-item-icon iconoir-bin"${_scopeId}></i> ${ssrInterpolate(_ctx.$t("editUserContext.delete"))}</a></li></ul>`);
          _push2(ssrRenderComponent(_component_DeleteUserModal, {
            ref: "deleteUserModal",
            user: $props.user,
            onDeleteUser: $options.onDeleteUser
          }, null, _parent2, _scopeId));
          _push2(ssrRenderComponent(_component_EditUserModal, {
            ref: "editUserModal",
            user: $props.user,
            onUpdate: ($event) => _ctx.$emit("update", $event),
            onDeleteUser: $options.onDeleteUser
          }, null, _parent2, _scopeId));
          _push2(ssrRenderComponent(_component_ChangePasswordModal, {
            ref: "changePasswordModal",
            user: $props.user
          }, null, _parent2, _scopeId));
          _push2(`<!--]-->`);
        } else {
          _push2(`<!---->`);
        }
      } else {
        return [
          Object.keys($props.user).length > 0 ? (openBlock(), createBlock(Fragment, { key: 0 }, [
            createVNode("div", { class: "context__menu-title" }, toDisplayString($props.user.username) + " (" + toDisplayString($props.user.id) + ")", 1),
            createVNode("ul", { class: "context__menu" }, [
              createVNode("li", { class: "context__menu-item" }, [
                createVNode("a", {
                  class: "context__menu-item-link",
                  onClick: withModifiers($options.showEditModal, ["prevent"])
                }, [
                  createVNode("i", { class: "context__menu-item-icon iconoir-edit-pencil" }),
                  createTextVNode(" " + toDisplayString(_ctx.$t("action.edit")), 1)
                ], 8, ["onClick"])
              ]),
              createVNode("li", { class: "context__menu-item" }, [
                createVNode("a", {
                  class: "context__menu-item-link",
                  onClick: withModifiers($options.showChangePasswordModal, ["prevent"])
                }, [
                  createVNode("i", { class: "context__menu-item-icon iconoir-key-alt" }),
                  createTextVNode(" " + toDisplayString(_ctx.$t("editUserContext.changePassword")), 1)
                ], 8, ["onClick"])
              ]),
              createVNode("li", { class: "context__menu-item" }, [
                $props.user.is_active ? (openBlock(), createBlock("a", {
                  key: 0,
                  class: ["context__menu-item-link", {
                    "context__menu-item-link--loading": $data.loading
                  }],
                  onClick: withModifiers($options.deactivate, ["prevent"])
                }, [
                  createVNode("i", { class: "context__menu-item-icon iconoir-cancel" }),
                  createTextVNode(" " + toDisplayString(_ctx.$t("action.deactivate")), 1)
                ], 10, ["onClick"])) : (openBlock(), createBlock("a", {
                  key: 1,
                  class: ["context__menu-item-link", {
                    "context__menu-item-link--loading": $data.loading
                  }],
                  onClick: withModifiers($options.activate, ["prevent"])
                }, [
                  createVNode("i", { class: "context__menu-item-icon iconoir-check" }),
                  createTextVNode(" " + toDisplayString(_ctx.$t("action.activate")), 1)
                ], 10, ["onClick"]))
              ]),
              $props.user.id !== _ctx.userId && !$props.user.is_staff ? (openBlock(), createBlock("li", {
                key: 0,
                class: "context__menu-item"
              }, [
                createVNode("a", {
                  class: ["context__menu-item-link", {
                    "context__menu-item-link--loading": $data.impersonateLoading,
                    disabled: !$props.user.is_active
                  }],
                  onClick: withModifiers($options.impersonate, ["prevent"])
                }, [
                  createVNode("i", { class: "context__menu-item-icon iconoir-group" }),
                  createTextVNode(" " + toDisplayString(_ctx.$t("editUserContext.impersonate")), 1)
                ], 10, ["onClick"])
              ])) : createCommentVNode("", true),
              createVNode("li", { class: "context__menu-item context__menu-item--with-separator" }, [
                createVNode("a", {
                  class: "context__menu-item-link context__menu-item-link--delete",
                  onClick: withModifiers($options.showDeleteModal, ["prevent"])
                }, [
                  createVNode("i", { class: "context__menu-item-icon iconoir-bin" }),
                  createTextVNode(" " + toDisplayString(_ctx.$t("editUserContext.delete")), 1)
                ], 8, ["onClick"])
              ])
            ]),
            createVNode(_component_DeleteUserModal, {
              ref: "deleteUserModal",
              user: $props.user,
              onDeleteUser: $options.onDeleteUser
            }, null, 8, ["user", "onDeleteUser"]),
            createVNode(_component_EditUserModal, {
              ref: "editUserModal",
              user: $props.user,
              onUpdate: ($event) => _ctx.$emit("update", $event),
              onDeleteUser: $options.onDeleteUser
            }, null, 8, ["user", "onUpdate", "onDeleteUser"]),
            createVNode(_component_ChangePasswordModal, {
              ref: "changePasswordModal",
              user: $props.user
            }, null, 8, ["user"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("modules/core/components/admin/users/contexts/EditUserContext.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const EditUserContext = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = {
  name: "UsersAdminTable",
  components: {
    CrudTable,
    EditUserContext
  },
  data() {
    this.service = UserService(this.$client);
    return {
      editUser: {}
    };
  },
  computed: {
    membersPagePlugins() {
      return Object.values(this.$registry.getAll("membersPagePlugins"));
    },
    columns() {
      let columns = [
        new CrudTableColumn(
          "username",
          () => this.$t("usersAdminTable.username"),
          UsernameField,
          true,
          true
        ),
        new CrudTableColumn(
          "name",
          () => this.$t("usersAdminTable.name"),
          SimpleField,
          true
        ),
        new CrudTableColumn(
          "workspaces",
          () => this.$t("usersAdminTable.workspaces"),
          UserWorkspacesField
        ),
        new CrudTableColumn(
          "last_login",
          () => this.$t("usersAdminTable.lastLogin"),
          LocalDateField,
          true
        ),
        new CrudTableColumn(
          "date_joined",
          () => this.$t("usersAdminTable.dateJoined"),
          LocalDateField,
          true
        ),
        new CrudTableColumn(
          "is_active",
          () => this.$t("user.active"),
          ActiveField,
          true
        ),
        new CrudTableColumn(
          "two_factor_auth",
          () => this.$t("usersAdminTable.twoFactorAuth"),
          TwoFactorAuthField
        ),
        new CrudTableColumn("more", "", MoreField, false, false, true)
      ];
      for (const plugin of this.membersPagePlugins) {
        if (!plugin.isDeactivated()) {
          columns = plugin.mutateAdminUsersTableColumns(columns, {
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
      const action = row.id === this.editUser.id ? "toggle" : "show";
      this.editUser = row;
      this.$refs.editUserContext[action](target, "bottom", "left", 4);
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_CrudTable = resolveComponent("CrudTable");
  const _component_EditUserContext = resolveComponent("EditUserContext");
  _push(ssrRenderComponent(_component_CrudTable, mergeProps({
    columns: $options.columns,
    service: _ctx.service,
    "row-id-key": "id",
    onRowContext: $options.onRowContext
  }, _attrs), {
    title: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(_ctx.$t("usersAdminTable.allUsers"))}`);
      } else {
        return [
          createTextVNode(toDisplayString(_ctx.$t("usersAdminTable.allUsers")), 1)
        ];
      }
    }),
    menus: withCtx((slotProps, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_EditUserContext, {
          ref: "editUserContext",
          user: $data.editUser,
          onDeleteUser: slotProps.deleteRow,
          onUpdate: slotProps.updateRow
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_EditUserContext, {
            ref: "editUserContext",
            user: $data.editUser,
            onDeleteUser: slotProps.deleteRow,
            onUpdate: slotProps.updateRow
          }, null, 8, ["user", "onDeleteUser", "onUpdate"])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("modules/core/components/admin/users/UsersAdminTable.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const UsersAdminTable = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  components: { UsersAdminTable },
  layout: "app",
  middleware: "staff",
  setup() {
    const { $i18n } = useNuxtApp();
    useHead({ title: $i18n.t("adminUsers.title") });
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_UsersAdminTable = resolveComponent("UsersAdminTable");
  _push(ssrRenderComponent(_component_UsersAdminTable, _attrs, null, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("modules/core/pages/admin/users.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const users = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { users as default };
//# sourceMappingURL=users-DJvU2oF-.mjs.map
