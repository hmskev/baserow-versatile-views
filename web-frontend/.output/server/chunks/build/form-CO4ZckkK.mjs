import { ref, withAsyncContext, computed, mergeProps, unref, createVNode, resolveDynamicComponent, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderVNode } from 'vue/server-renderer';
import { u as useNuxtApp, f as useAsyncData, aA as FormService, v as createError, aB as isPromise, n as navigateTo, g as useHead, a7 as clone, aC as matchSearchFilters, aD as FormViewPoweredBy, I as notifyIf } from './server.mjs';
import { useRoute, useRouter } from 'vue-router';
import { T as Toasts } from './Toasts-CnmFZjjH.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import '@sentry/core';
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

!(function() {
  try {
    var e = false ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
    var n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "a3d2732e-f26e-4adb-998a-a2adffb6fff8", e._sentryDebugIdIdentifier = "sentry-dbid-a3d2732e-f26e-4adb-998a-a2adffb6fff8");
  } catch (e2) {
  }
})();
function getPrefills(query) {
  return Object.keys(query).reduce((prefills, key) => {
    if (key.startsWith("prefill_")) {
      const keyFormatted = key.replace("prefill_", "").replaceAll("+", " ").toLowerCase();
      let valueChosen = query[key];
      if (Array.isArray(query[key])) {
        valueChosen = valueChosen[valueChosen.length - 1];
      }
      prefills[keyFormatted] = valueChosen;
    }
    return prefills;
  }, /* @__PURE__ */ Object.create(null));
}
function prefillField(formField, prefills) {
  let prefill = prefills[formField.name.toLowerCase()];
  if (prefill === void 0) {
    prefill = prefills[formField.field.name.toLowerCase()];
    if (prefill === void 0) {
      prefill = prefills[`field_${formField.field.id}`];
    }
  }
  return prefill;
}
function getHiddenFieldNames(query) {
  return Object.keys(query).filter((key) => {
    return key.startsWith("hide_");
  }).map((key) => {
    return key.replace("hide_", "").replaceAll("+", " ");
  });
}
const _sfc_main = {
  __name: "form",
  __ssrInlineRender: true,
  async setup(__props) {
    var _a;
    let __temp, __restore;
    const route = useRoute();
    const router = useRouter();
    const nuxtApp = useNuxtApp();
    const { $store, $client, $registry } = nuxtApp;
    const loading = ref(false);
    const submitted = ref(false);
    const submitAction = ref("MESSAGE");
    const submitActionMessage = ref("");
    const submitActionRedirectUrl = ref("");
    const form = ref(null);
    const { data, error } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData(
      `database-public-form-${route.params.slug}-${route.query.edit_token || ""}`,
      async () => {
        var _a2;
        const slug = route.params.slug;
        const publicAuthToken2 = await $store.dispatch(
          "page/view/public/setAuthTokenFromCookiesIfNotSet",
          { slug }
        );
        let responseData = null;
        try {
          const { data: data2 } = await FormService($client).getMetaInformation(
            slug,
            publicAuthToken2
          );
          responseData = data2;
        } catch (e) {
          const statusCode = (_a2 = e.response) == null ? void 0 : _a2.status;
          if (statusCode === 401) {
            const path = route.path;
            const queryParams = route.query;
            const queryString = Object.keys(queryParams).length ? "?" + new URLSearchParams(queryParams).toString() : "";
            const original = path + queryString;
            return {
              redirect: router.resolve({
                name: "database-public-view-auth",
                query: { original }
              })
            };
          } else {
            throw createError({
              statusCode: 404,
              message: "Form not found.",
              data: {
                report: false
              },
              fatal: true
            });
          }
        }
        const values2 = {};
        const prefills = getPrefills(route.query);
        const hiddenFields = getHiddenFieldNames(route.query);
        const promises = [];
        responseData.fields.forEach((field) => {
          field._ = {
            touched: false,
            hiddenViaQueryParam: hiddenFields.includes(field.name)
          };
          const fieldType = $registry.get("field", field.field.type);
          const setValue = (value) => {
            values2[`field_${field.field.id}`] = value;
          };
          const prefill = prefillField(field, prefills);
          values2[`field_${field.field.id}`] = fieldType.getDefaultValue(field.field);
          if (prefill !== void 0 && prefill !== null && fieldType.canParseQueryParameter()) {
            const result = fieldType.parseQueryParameter(field, prefill, {
              slug,
              client: $client,
              publicAuthToken: publicAuthToken2
            });
            if (isPromise(result)) {
              result.then(setValue);
              promises.push(result);
            } else {
              setValue(result);
            }
          }
        });
        await Promise.all(promises);
        const editToken2 = route.query.edit_token || null;
        if (editToken2) {
          try {
            const { data: rowData } = await FormService($client).getEditRow(
              slug,
              editToken2,
              publicAuthToken2
            );
            Object.assign(values2, rowData);
          } catch (e) {
            if (e.response.status === 404) {
              throw createError({
                statusCode: 404,
                message: "Invalid edit token.",
                data: {
                  report: false
                },
                fatal: true
              });
            }
            throw e;
          }
        }
        responseData.fields = responseData.fields.sort((a, b) => {
          if (a.order > b.order) return 1;
          if (a.order < b.order) return -1;
          if (a.field.id < b.field.id) return -1;
          if (a.field.id > b.field.id) return 1;
          return 0;
        });
        return {
          title: responseData.title,
          description: responseData.description,
          coverImage: responseData.cover_image,
          logoImage: responseData.logo_image,
          submitText: responseData.submit_text,
          fields: responseData.fields,
          mode: responseData.mode,
          showLogo: responseData.show_logo,
          values: values2,
          publicAuthToken: publicAuthToken2,
          editToken: editToken2
        };
      },
      {
        deep: true,
        // Ensure re-fetch if the URL (incl. query) changes while reusing the page instance
        watch: [() => route.fullPath]
      }
    )), __temp = await __temp, __restore(), __temp);
    if (error.value) {
      throw error.value;
    }
    if ((_a = data.value) == null ? void 0 : _a.redirect) {
      [__temp, __restore] = withAsyncContext(() => navigateTo(data.value.redirect.href)), await __temp, __restore();
    }
    const title = computed(() => data.value.title);
    const description = computed(() => data.value.description);
    const coverImage = computed(() => data.value.coverImage);
    const logoImage = computed(() => data.value.logoImage);
    const submitText = computed(() => data.value.submitText);
    const fields = computed(() => data.value.fields || []);
    const mode = computed(() => data.value.mode);
    const showLogo = computed(() => data.value.showLogo);
    const publicAuthToken = computed(() => data.value.publicAuthToken);
    const editToken = computed(() => data.value.editToken || null);
    const isEditMode = computed(() => !!editToken.value);
    const values = ref(data.value.values);
    useHead(() => {
      const head = {
        title: title.value || "Form",
        bodyAttrs: {
          class: ["background-white"]
        }
      };
      if (!showLogo.value) {
        head.titleTemplate = "%s";
      }
      return head;
    });
    const isRedirect = computed(() => {
      return submitAction.value === "REDIRECT" && submitActionRedirectUrl.value !== "";
    });
    const visibleFields = computed(() => {
      return fields.value.reduce((visible, field, index) => {
        if (!field.show_when_matching_conditions) {
          return [...visible, field];
        }
        const fieldsBefore = fields.value.slice(0, index).map((f) => f.field);
        const conditions = field.conditions.filter((condition) => {
          const filterType = $registry.get("viewFilter", condition.type);
          const filterField = fieldsBefore.find((f) => f.id === condition.field);
          return filterField !== void 0 && filterType.fieldIsCompatible(filterField);
        });
        const conditionType = field.condition_type;
        if (conditions.length === 0) {
          return [...visible, field];
        }
        const visibleFieldIds = visible.map((f) => f.field.id);
        const visibleValues = clone(values.value);
        fields.value.filter(
          (f) => !visibleFieldIds.includes(f.field.id) && f.field.id !== field.field.id
        ).forEach((f) => {
          visibleValues["field_" + f.field.id] = $registry.get("field", f.field.type).getDefaultValue(f.field);
        });
        if (matchSearchFilters(
          $registry,
          conditionType,
          conditions,
          field.condition_groups,
          fieldsBefore,
          visibleValues
        )) {
          return [...visible, field];
        }
        return visible;
      }, []);
    });
    const component = computed(() => {
      return $registry.get("formViewMode", mode.value).getFormComponent();
    });
    function touch() {
      visibleFields.value.forEach((field) => {
        field._.touched = true;
      });
    }
    async function submit() {
      var _a2, _b, _c;
      if (loading.value) {
        return;
      }
      touch();
      loading.value = true;
      const valuesCopy = clone(values.value);
      const submitValues = {};
      for (let i = 0; i < visibleFields.value.length; i++) {
        const field = visibleFields.value[i];
        const fieldType = $registry.get("field", field.field.type);
        const valueName = `field_${field.field.id}`;
        const value = valuesCopy[valueName];
        const ref2 = (_c = (_b = (_a2 = form.value) == null ? void 0 : _a2.$refs) == null ? void 0 : _b["field-" + field.field.id]) == null ? void 0 : _c[0];
        if (field.required && fieldType.isEmpty(field.field, value) || fieldType.getValidationError(field.field, value) !== null || !ref2.isValid()) {
          ref2.focus();
          loading.value = false;
          return;
        }
        submitValues[valueName] = fieldType.prepareValueForUpdate(
          field.field,
          valuesCopy[valueName]
        );
      }
      try {
        const slug = route.params.slug;
        let submitResponse = {};
        if (isEditMode.value) {
          const { data: data2 } = await FormService($client).submitEditRow(
            slug,
            editToken.value,
            submitValues,
            publicAuthToken.value
          );
          submitResponse = data2;
        } else {
          const { data: data2 } = await FormService($client).submit(
            slug,
            submitValues,
            publicAuthToken.value
          );
          submitResponse = data2;
        }
        submitted.value = true;
        submitAction.value = submitResponse.submit_action;
        submitActionMessage.value = submitResponse.submit_action_message;
        submitActionRedirectUrl.value = submitResponse.submit_action_redirect_url.replace(
          `{row_id}`,
          submitResponse.row_id
        );
        if (isRedirect.value) {
          setTimeout(() => {
            (void 0).location.assign(submitActionRedirectUrl.value);
          }, 4e3);
        }
      } catch (err) {
        notifyIf(err, "view");
      }
      loading.value = false;
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "form-view__page-container" }, _attrs))}>`);
      _push(ssrRenderComponent(unref(Toasts), null, null, _parent));
      _push(`<div class="form-view__page">`);
      if (fields.value.length === 0) {
        _push(`<div class="form-view__body"><div class="form-view__no-fields margin-bottom-4"><div class="form-view__no-fields-title"> This form doesn&#39;t have any fields </div><div class="form-view__no-fields-content"> Use Baserow to add at least one field. </div></div>`);
        if (showLogo.value) {
          _push(ssrRenderComponent(unref(FormViewPoweredBy), null, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(component.value), {
          ref_key: "form",
          ref: form,
          modelValue: values.value,
          "onUpdate:modelValue": ($event) => values.value = $event,
          loading: loading.value,
          submitted: submitted.value,
          title: title.value,
          description: description.value,
          "cover-image": coverImage.value,
          "logo-image": logoImage.value,
          "submit-text": submitText.value,
          "all-fields": fields.value,
          "visible-fields": visibleFields.value,
          "is-redirect": isRedirect.value,
          "submit-action-redirect-url": submitActionRedirectUrl.value,
          "submit-action-message": submitActionMessage.value,
          "show-logo": showLogo.value,
          onSubmit: submit
        }, null), _parent);
      }
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("modules/database/pages/form.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=form-CO4ZckkK.mjs.map
