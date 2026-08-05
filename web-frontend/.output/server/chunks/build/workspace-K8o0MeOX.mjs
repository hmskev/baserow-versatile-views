import { b as buildAssetsURL } from '../nitro/nitro.mjs';
import { ref, withAsyncContext, watchEffect, computed, resolveComponent, createVNode, resolveDynamicComponent, unref, withCtx, createTextVNode, toDisplayString, resolveDirective, mergeProps, withDirectives, openBlock, createBlock, createCommentVNode, nextTick, Fragment, renderList, withModifiers, createElementBlock, createStaticVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderVNode, ssrInterpolate, ssrRenderAttr, ssrGetDirectiveProps, ssrRenderClass, ssrRenderSlot } from 'vue/server-renderer';
import { D as DashboardVerifyEmail, W as WorkspaceInvitation, _ as _imports_0$2, a as _imports_1$1 } from './WorkspaceInvitation-CtsJt769.mjs';
import { c as useRoute, e as useRouter, u as useNuxtApp, f as useAsyncData, v as createError, g as useHead, G as CreateApplicationContext, H as TemplateModal, q as nameContainsNoUrl, I as notifyIf, _ as _export_sfc, J as context, K as TrashModal, L as ImportWorkspaceModal, M as application, N as useCookie, O as getCookieName, d as useI18n, p as pageFinished, Q as modal, k as error, S as job, U as getHumanPeriodAgoCount, a as useRuntimeConfig, V as EXPORT_SERIALIZED_EXPORTING_TABLE, X as EXPORT_WORKSPACE_CREATE_ARCHIVE, Y as EXPORT_SERIALIZED_EXPORTING, Z as ExportApplicationsJobType, $ as ExportWorkspaceService, a0 as timeAgo, a1 as form } from './server.mjs';
import { required } from '@vuelidate/validators';
import { useVuelidate } from '@vuelidate/core';
import moment from 'moment-timezone';
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
import './resendEmailVerification-B41zYwUk.mjs';
import 'jwt-decode';
import 'tldjs';
import 'perfect-debounce';
import '@vue/shared';
import 'lodash';
import 'antlr4';
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
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "8f8d7df2-f95e-40d8-aa82-7d9f02680f5c", e._sentryDebugIdIdentifier = "sentry-dbid-8f8d7df2-f95e-40d8-aa82-7d9f02680f5c");
  } catch (e2) {
  }
})();
const _sfc_main$b = {
  name: "ApplicationSelector",
  props: {
    workspace: {
      type: Object,
      required: true
    },
    selectedApplicationIds: {
      type: Array,
      default: () => []
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  emits: ["update"],
  data() {
    return {
      groupExpanded: {}
    };
  },
  computed: {
    applications() {
      return this.$store.getters["application/getAllOfWorkspace"](
        this.workspace
      );
    },
    applicationGroups() {
      const groups = {};
      this.applications.forEach((application2) => {
        if (!groups[application2.type]) {
          groups[application2.type] = {
            type: application2.type,
            applications: []
          };
        }
        groups[application2.type].applications.push(application2);
      });
      return Object.values(groups).sort((a, b) => {
        const aType = this.$registry.get("application", a.type);
        const bType = this.$registry.get("application", b.type);
        return aType.getOrder() - bType.getOrder();
      }).map((group) => ({
        ...group,
        applications: group.applications.sort(
          (a, b) => a.name.localeCompare(b.name)
        )
      }));
    }
  },
  mounted() {
    this.applicationGroups.forEach((group) => {
      this.groupExpanded[group.type] = true;
    });
  },
  methods: {
    isGroupSelected(group) {
      const groupAppIds = group.applications.map((app) => app.id);
      return groupAppIds.every((id) => this.selectedApplicationIds.includes(id));
    },
    isGroupIndeterminate(group) {
      const groupAppIds = group.applications.map((app) => app.id);
      const selectedInGroup = groupAppIds.filter(
        (id) => this.selectedApplicationIds.includes(id)
      );
      return selectedInGroup.length > 0 && selectedInGroup.length < groupAppIds.length;
    },
    selectAll() {
      const allApplicationIds = this.applications.map((app) => app.id);
      this.$emit("update", allApplicationIds);
    },
    deselectAll() {
      this.$emit("update", []);
    },
    toggleGroupExpanded(groupType) {
      this.groupExpanded[groupType] = !this.groupExpanded[groupType];
    },
    handleApplicationToggle(application2, isChecked) {
      const currentIds = [...this.selectedApplicationIds];
      const index = currentIds.indexOf(application2.id);
      if (isChecked && index === -1) {
        currentIds.push(application2.id);
      } else if (!isChecked && index !== -1) {
        currentIds.splice(index, 1);
      }
      this.$emit("update", currentIds);
    },
    handleGroupToggle(group, isChecked) {
      const groupAppIds = group.applications.map((app) => app.id);
      let newIds = [...this.selectedApplicationIds];
      if (isChecked) {
        groupAppIds.forEach((id) => {
          if (!newIds.includes(id)) {
            newIds.push(id);
          }
        });
      } else {
        newIds = newIds.filter((id) => !groupAppIds.includes(id));
      }
      this.$emit("update", newIds);
    }
  }
};
function _sfc_ssrRender$8(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Checkbox = resolveComponent("Checkbox");
  const _component_Icon = resolveComponent("Icon");
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: ["application-selector", { "application-selector--disabled": $props.disabled }]
  }, _attrs))}><div class="application-selector__header"><h4 class="application-selector__title">${ssrInterpolate(_ctx.$t("exportWorkspaceForm.selectDataToExport"))}</h4><div class="application-selector__actions"><button type="button" class="application-selector__action-btn">${ssrInterpolate(_ctx.$t("exportWorkspaceForm.selectAll"))}</button><button type="button" class="application-selector__action-btn">${ssrInterpolate(_ctx.$t("exportWorkspaceForm.deselectAll"))}</button></div></div><div class="application-selector__tree"><!--[-->`);
  ssrRenderList($options.applicationGroups, (group) => {
    _push(`<div class="application-selector__group"><div class="application-selector__group-header"><div class="application-selector__group-left">`);
    _push(ssrRenderComponent(_component_Checkbox, {
      checked: $options.isGroupSelected(group),
      indeterminate: $options.isGroupIndeterminate(group),
      onInput: (value) => $options.handleGroupToggle(group, value),
      onClick: () => {
      }
    }, null, _parent));
    _push(`<span class="application-selector__group-title">${ssrInterpolate(_ctx.$t(`applicationType.${group.type}s`))}</span></div>`);
    _push(ssrRenderComponent(_component_Icon, {
      icon: $data.groupExpanded[group.type] ? "iconoir-nav-arrow-down" : "iconoir-nav-arrow-right",
      class: "application-selector__group-arrow",
      onClick: ($event) => $options.toggleGroupExpanded(group.type)
    }, null, _parent));
    _push(`</div>`);
    if ($data.groupExpanded[group.type]) {
      _push(`<div class="application-selector__group-items"><!--[-->`);
      ssrRenderList(group.applications, (application2) => {
        _push(`<div class="application-selector__item"><div class="application-selector__item-main">`);
        _push(ssrRenderComponent(_component_Checkbox, {
          checked: $props.selectedApplicationIds.includes(application2.id),
          onInput: (value) => $options.handleApplicationToggle(application2, value),
          onClick: () => {
          }
        }, null, _parent));
        _push(`<span class="application-selector__item-name">${ssrInterpolate(application2.name)}</span></div></div>`);
      });
      _push(`<!--]--></div>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div>`);
  });
  _push(`<!--]--></div></div>`);
}
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("modules/core/components/export/ApplicationSelector.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const ApplicationSelector = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["ssrRender", _sfc_ssrRender$8]]);
const _sfc_main$a = {
  name: "ExportWorkspaceForm",
  components: {
    ApplicationSelector
  },
  mixins: [form],
  props: {
    workspace: {
      type: Object,
      required: true
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  emits: ["update"],
  setup() {
    return { v$: useVuelidate({ $lazy: true }) };
  },
  data() {
    return {
      values: {
        only_structure: false,
        application_ids: []
      }
    };
  },
  mounted() {
    this.$nextTick(() => {
      if (this.values.application_ids.length === 0) {
        const allApplications = this.$store.getters["application/getAllOfWorkspace"](this.workspace);
        this.values.application_ids = allApplications.map((app) => app.id);
        this.$emit("update", this.values.application_ids);
      }
    });
  },
  methods: {
    updateSelectedApplications(applicationIds) {
      this.values.application_ids = [...applicationIds];
      this.$emit("update", applicationIds);
    }
  },
  validations() {
    return {
      values: {
        only_structure: {
          required
        }
      }
    };
  }
};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ApplicationSelector = resolveComponent("ApplicationSelector");
  const _component_FormGroup = resolveComponent("FormGroup");
  const _component_Checkbox = resolveComponent("Checkbox");
  const _component_HelpIcon = resolveComponent("HelpIcon");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "export-workspace-form" }, _attrs))}><form><div class="export-workspace-form__section">`);
  ssrRenderSlot(_ctx.$slots, "select-applications", {}, () => {
    _push(ssrRenderComponent(_component_ApplicationSelector, {
      "selected-application-ids": $data.values.application_ids,
      workspace: $props.workspace,
      disabled: $props.disabled,
      onUpdate: $options.updateSelectedApplications
    }, null, _parent));
  }, _push, _parent);
  _push(`</div><div class="export-workspace-form__section"><h4 class="export-workspace-form__section-title">${ssrInterpolate(_ctx.$t("exportWorkspaceForm.exportSettingsLabel"))}</h4>`);
  _push(ssrRenderComponent(_component_FormGroup, {
    "small-label": "",
    class: "export-workspace-form__setting"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="export-workspace__structure-wrapper"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_Checkbox, {
          modelValue: $data.values.only_structure,
          "onUpdate:modelValue": ($event) => $data.values.only_structure = $event
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`${ssrInterpolate(_ctx.$t("exportWorkspaceForm.onlyStructureLabel"))} `);
              _push3(ssrRenderComponent(_component_HelpIcon, {
                class: "margin-left-1",
                tooltip: _ctx.$t("exportWorkspaceForm.onlyStructureDescription"),
                onMousedown: () => {
                },
                onClick: () => {
                }
              }, null, _parent3, _scopeId2));
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("exportWorkspaceForm.onlyStructureLabel")) + " ", 1),
                createVNode(_component_HelpIcon, {
                  class: "margin-left-1",
                  tooltip: _ctx.$t("exportWorkspaceForm.onlyStructureDescription"),
                  onMousedown: withModifiers(() => {
                  }, ["stop"]),
                  onClick: withModifiers(() => {
                  }, ["stop"])
                }, null, 8, ["tooltip", "onMousedown", "onClick"])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div>`);
      } else {
        return [
          createVNode("div", { class: "export-workspace__structure-wrapper" }, [
            createVNode(_component_Checkbox, {
              modelValue: $data.values.only_structure,
              "onUpdate:modelValue": ($event) => $data.values.only_structure = $event
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(_ctx.$t("exportWorkspaceForm.onlyStructureLabel")) + " ", 1),
                createVNode(_component_HelpIcon, {
                  class: "margin-left-1",
                  tooltip: _ctx.$t("exportWorkspaceForm.onlyStructureDescription"),
                  onMousedown: withModifiers(() => {
                  }, ["stop"]),
                  onClick: withModifiers(() => {
                  }, ["stop"])
                }, null, 8, ["tooltip", "onMousedown", "onClick"])
              ]),
              _: 1
            }, 8, ["modelValue", "onUpdate:modelValue"])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
  ssrRenderSlot(_ctx.$slots, "buttons", {}, null, _push, _parent);
  _push(`</form></div>`);
}
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("modules/core/components/export/ExportWorkspaceForm.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const ExportWorkspaceForm = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["ssrRender", _sfc_ssrRender$7]]);
const _sfc_main$9 = {
  mixins: [timeAgo],
  props: {
    exportJob: {
      type: Object,
      required: true
    },
    workspace: {
      type: Object,
      required: true
    }
  },
  computed: {
    name() {
      return `${this.workspace.name} - ${moment(
        this.exportJob.created_on
      ).format("YYYY-MM-DD HH:mm:ss")}`;
    }
  }
};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_DownloadLink = resolveComponent("DownloadLink");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "export-workspace__export" }, _attrs))}><div class="export-workspace__info"><div><div class="export-workspace__name">${ssrInterpolate($options.name)}</div><div class="export-workspace__detail">${ssrInterpolate(_ctx.$t("exportWorkspaceModal.created"))} ${ssrInterpolate(_ctx.timeAgo)}</div></div></div><div class="export-workspace__actions">`);
  _push(ssrRenderComponent(_component_DownloadLink, {
    url: $props.exportJob.url,
    filename: $props.exportJob.exported_file_name,
    "loading-class": "button--loading"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(_ctx.$t("exportWorkspaceModal.download"))}`);
      } else {
        return [
          createTextVNode(toDisplayString(_ctx.$t("exportWorkspaceModal.download")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div>`);
}
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("modules/core/components/export/ExportWorkspaceListItem.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const ExportWorkspaceListItem = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["ssrRender", _sfc_ssrRender$6]]);
const WORKSPACE_EXPORTS_LIMIT = 5;
const _sfc_main$8 = {
  name: "ExportWorkspaceModal",
  components: {
    ExportWorkspaceForm,
    ExportWorkspaceListItem
  },
  mixins: [modal, error, job],
  props: {
    workspace: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      createLoading: false,
      createFinished: false,
      exportJobLoading: false,
      exportJobs: [],
      selectedApplicationIds: []
    };
  },
  computed: {
    workspaceExportModalAlertComponents() {
      return Object.values(this.$registry.getAll("plugin")).map(
        (plugin) => plugin.getExtraExportWorkspaceModalComponents(this.workspace)
      ).filter((component) => component !== null);
    },
    hasSelectedApplications() {
      return this.selectedApplicationIds.length > 0;
    }
  },
  methods: {
    show(...args) {
      this.reset();
      this.loadExports();
      modal.methods.show.bind(this)(...args);
    },
    submitForm() {
      this.$refs.form.submit();
    },
    updateSelectedApplications(applicationIds) {
      this.selectedApplicationIds = [...applicationIds];
    },
    async submitted(values) {
      this.createLoading = true;
      this.hideError();
      try {
        const { data: job2 } = await ExportWorkspaceService(
          this.$client
        ).exportApplications(this.workspace.id, values);
        await this.createAndMonitorJob(job2);
      } catch (error2) {
        this.createLoading = false;
        this.handleError(error2);
      }
    },
    onJobFinished() {
      this.createLoading = false;
      this.createFinished = true;
      if (this.job.type === ExportApplicationsJobType.getType() && this.job.workspace_id === this.workspace.id) {
        this.exportJobs.unshift(this.job);
        this.exportJobs = this.exportJobs.splice(0, WORKSPACE_EXPORTS_LIMIT);
      }
    },
    async onJobFailed() {
      this.createLoading = false;
      this.showError(
        this.$t("clientHandler.notCompletedTitle"),
        this.job.human_readable_error
      );
    },
    async loadExports() {
      this.exportJobLoading = true;
      try {
        const { data: exportJobs } = await ExportWorkspaceService(
          this.$client
        ).listExports(this.workspace.id);
        this.exportJobs = (exportJobs == null ? void 0 : exportJobs.results) || [];
      } catch (error2) {
        this.handleError(error2);
      } finally {
        this.exportJobLoading = false;
      }
      this.loadRunningJob();
    },
    loadRunningJob() {
      const runningJob = this.$store.getters["job/getUnfinishedJobs"].find(
        (job2) => {
          return job2.type === ExportApplicationsJobType.getType() && job2.workspace_id === this.workspace.id;
        }
      );
      if (runningJob) {
        this.job = runningJob;
        this.createLoading = true;
      }
    },
    reset() {
      this.job = null;
      this.createFinished = false;
      this.createLoading = false;
      this.hideError();
    },
    getCustomHumanReadableJobState(jobState) {
      if (jobState.startsWith(EXPORT_SERIALIZED_EXPORTING_TABLE)) {
        return this.$t("exportWorkspaceModal.exportingTableState", {
          table: jobState.replace(EXPORT_SERIALIZED_EXPORTING_TABLE, "")
        });
      }
      if (jobState === EXPORT_WORKSPACE_CREATE_ARCHIVE) {
        return this.$t("exportWorkspaceModal.exportingCreateArchiveState");
      }
      if (jobState === EXPORT_SERIALIZED_EXPORTING) {
        return this.$t("exportWorkspaceModal.exportingState");
      }
      return "";
    }
  }
};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Modal = resolveComponent("Modal");
  const _component_Error = resolveComponent("Error");
  const _component_ExportWorkspaceForm = resolveComponent("ExportWorkspaceForm");
  const _component_ProgressBar = resolveComponent("ProgressBar");
  const _component_Button = resolveComponent("Button");
  const _component_ExportWorkspaceListItem = resolveComponent("ExportWorkspaceListItem");
  _push(ssrRenderComponent(_component_Modal, mergeProps({ ref: "modal" }, _attrs), {
    actions: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) ;
      else {
        return [];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<h2 class="box__title"${_scopeId}>${ssrInterpolate(_ctx.$t("exportWorkspaceModal.title"))} ${ssrInterpolate($props.workspace.name)}</h2><p${_scopeId}>${ssrInterpolate(_ctx.$t("exportWorkspaceModal.description"))}</p><!--[-->`);
        ssrRenderList($options.workspaceExportModalAlertComponents, (component, index) => {
          ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(component), { key: index }, null), _parent2, _scopeId);
        });
        _push2(`<!--]-->`);
        _push2(ssrRenderComponent(_component_Error, { error: _ctx.error }, null, _parent2, _scopeId));
        _push2(`<div${_scopeId}>`);
        _push2(ssrRenderComponent(_component_ExportWorkspaceForm, {
          ref: "form",
          workspace: $props.workspace,
          disabled: _ctx.jobIsRunning,
          onSubmitted: $options.submitted,
          onUpdate: $options.updateSelectedApplications
        }, null, _parent2, _scopeId));
        _push2(`<div class="${ssrRenderClass([{
          "export-workspace__button-section--with-progress": _ctx.jobIsRunning || _ctx.jobIsFinished
        }, "export-workspace__button-section"])}"${_scopeId}>`);
        if (_ctx.jobIsRunning || _ctx.jobIsFinished) {
          _push2(`<div class="export-workspace__progress"${_scopeId}>`);
          _push2(ssrRenderComponent(_component_ProgressBar, {
            value: _ctx.job.progress_percentage,
            status: _ctx.jobHumanReadableState
          }, null, _parent2, _scopeId));
          _push2(`</div>`);
        } else {
          _push2(`<!---->`);
        }
        if (!$data.createFinished) {
          _push2(ssrRenderComponent(_component_Button, {
            size: "large",
            loading: $data.createLoading,
            disabled: $data.createLoading || $data.exportJobLoading || !$options.hasSelectedApplications,
            onClick: $options.submitForm
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`${ssrInterpolate(_ctx.$t("exportWorkspaceModal.export"))}`);
              } else {
                return [
                  createTextVNode(toDisplayString(_ctx.$t("exportWorkspaceModal.export")), 1)
                ];
              }
            }),
            _: 1
          }, _parent2, _scopeId));
        } else {
          _push2(ssrRenderComponent(_component_Button, {
            type: "secondary",
            tag: "a",
            size: "large",
            onClick: ($event) => $options.reset()
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`${ssrInterpolate(_ctx.$t("exportWorkspaceModal.reset"))}`);
              } else {
                return [
                  createTextVNode(toDisplayString(_ctx.$t("exportWorkspaceModal.reset")), 1)
                ];
              }
            }),
            _: 1
          }, _parent2, _scopeId));
        }
        _push2(`</div><div class="export-workspace__list"${_scopeId}>`);
        if ($data.exportJobLoading) {
          _push2(`<div class="loading export-workspace__list--loading"${_scopeId}></div>`);
        } else if ($data.exportJobs.length > 0) {
          _push2(`<div${_scopeId}><!--[-->`);
          ssrRenderList($data.exportJobs, (job2) => {
            _push2(ssrRenderComponent(_component_ExportWorkspaceListItem, {
              ref_for: true,
              ref: "exportsList",
              key: job2.id,
              "export-job": job2,
              workspace: $props.workspace,
              "last-updated": job2.created_on
            }, null, _parent2, _scopeId));
          });
          _push2(`<!--]--></div>`);
        } else {
          _push2(`<div${_scopeId}>${ssrInterpolate(_ctx.$t("exportWorkspaceModal.noExports"))}</div>`);
        }
        _push2(`</div></div>`);
      } else {
        return [
          createVNode("h2", { class: "box__title" }, toDisplayString(_ctx.$t("exportWorkspaceModal.title")) + " " + toDisplayString($props.workspace.name), 1),
          createVNode("p", null, toDisplayString(_ctx.$t("exportWorkspaceModal.description")), 1),
          (openBlock(true), createBlock(Fragment, null, renderList($options.workspaceExportModalAlertComponents, (component, index) => {
            return openBlock(), createBlock(resolveDynamicComponent(component), { key: index });
          }), 128)),
          createVNode(_component_Error, { error: _ctx.error }, null, 8, ["error"]),
          createVNode("div", null, [
            createVNode(_component_ExportWorkspaceForm, {
              ref: "form",
              workspace: $props.workspace,
              disabled: _ctx.jobIsRunning,
              onSubmitted: $options.submitted,
              onUpdate: $options.updateSelectedApplications
            }, null, 8, ["workspace", "disabled", "onSubmitted", "onUpdate"]),
            createVNode("div", {
              class: ["export-workspace__button-section", {
                "export-workspace__button-section--with-progress": _ctx.jobIsRunning || _ctx.jobIsFinished
              }]
            }, [
              _ctx.jobIsRunning || _ctx.jobIsFinished ? (openBlock(), createBlock("div", {
                key: 0,
                class: "export-workspace__progress"
              }, [
                createVNode(_component_ProgressBar, {
                  value: _ctx.job.progress_percentage,
                  status: _ctx.jobHumanReadableState
                }, null, 8, ["value", "status"])
              ])) : createCommentVNode("", true),
              !$data.createFinished ? (openBlock(), createBlock(_component_Button, {
                key: 1,
                size: "large",
                loading: $data.createLoading,
                disabled: $data.createLoading || $data.exportJobLoading || !$options.hasSelectedApplications,
                onClick: $options.submitForm
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.$t("exportWorkspaceModal.export")), 1)
                ]),
                _: 1
              }, 8, ["loading", "disabled", "onClick"])) : (openBlock(), createBlock(_component_Button, {
                key: 2,
                type: "secondary",
                tag: "a",
                size: "large",
                onClick: ($event) => $options.reset()
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.$t("exportWorkspaceModal.reset")), 1)
                ]),
                _: 1
              }, 8, ["onClick"]))
            ], 2),
            createVNode("div", { class: "export-workspace__list" }, [
              $data.exportJobLoading ? (openBlock(), createBlock("div", {
                key: 0,
                class: "loading export-workspace__list--loading"
              })) : $data.exportJobs.length > 0 ? (openBlock(), createBlock("div", { key: 1 }, [
                (openBlock(true), createBlock(Fragment, null, renderList($data.exportJobs, (job2) => {
                  return openBlock(), createBlock(_component_ExportWorkspaceListItem, {
                    ref_for: true,
                    ref: "exportsList",
                    key: job2.id,
                    "export-job": job2,
                    workspace: $props.workspace,
                    "last-updated": job2.created_on
                  }, null, 8, ["export-job", "workspace", "last-updated"]);
                }), 128))
              ])) : (openBlock(), createBlock("div", { key: 2 }, toDisplayString(_ctx.$t("exportWorkspaceModal.noExports")), 1))
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("modules/core/components/export/ExportWorkspaceModal.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const ExportWorkspaceModal = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$5]]);
const _sfc_main$7 = {
  name: "LeaveWorkspaceModal",
  mixins: [modal, error],
  props: {
    workspace: {
      type: Object,
      required: true
    }
  },
  setup() {
    const nuxtApp = useNuxtApp();
    return { nuxtApp };
  },
  data() {
    return {
      loading: false
    };
  },
  methods: {
    async leaveWorkspace() {
      this.hideError();
      this.loading = true;
      const selected = this.$store.getters["workspace/getSelected"].id === this.workspace.id;
      try {
        await this.$store.dispatch("workspace/leave", this.workspace);
        if (selected) {
          await this.$router.push({ name: "dashboard" });
          await pageFinished(this.nuxtApp);
          await nextTick();
        }
        this.hide();
      } catch (error2) {
        this.handleError(error2, "view");
      }
      this.loading = false;
    }
  }
};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Modal = resolveComponent("Modal");
  const _component_Error = resolveComponent("Error");
  const _component_Button = resolveComponent("Button");
  _push(ssrRenderComponent(_component_Modal, mergeProps({ ref: "modal" }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<h2 class="box__title"${_scopeId}>${ssrInterpolate(_ctx.$t("leaveWorkspaceModal.title", { workspace: $props.workspace.name }))}</h2>`);
        _push2(ssrRenderComponent(_component_Error, { error: _ctx.error }, null, _parent2, _scopeId));
        _push2(`<div${_scopeId}><p${_scopeId}>${ssrInterpolate(_ctx.$t("leaveWorkspaceModal.message", { workspace: $props.workspace.name }))}</p><div class="actions"${_scopeId}><div class="align-right"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_Button, {
          type: "danger",
          size: "large",
          loading: $data.loading,
          disabled: $data.loading,
          onClick: ($event) => $options.leaveWorkspace()
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`${ssrInterpolate(_ctx.$t("leaveWorkspaceModal.leave"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("leaveWorkspaceModal.leave")), 1)
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div></div></div>`);
      } else {
        return [
          createVNode("h2", { class: "box__title" }, toDisplayString(_ctx.$t("leaveWorkspaceModal.title", { workspace: $props.workspace.name })), 1),
          createVNode(_component_Error, { error: _ctx.error }, null, 8, ["error"]),
          createVNode("div", null, [
            createVNode("p", null, toDisplayString(_ctx.$t("leaveWorkspaceModal.message", { workspace: $props.workspace.name })), 1),
            createVNode("div", { class: "actions" }, [
              createVNode("div", { class: "align-right" }, [
                createVNode(_component_Button, {
                  type: "danger",
                  size: "large",
                  loading: $data.loading,
                  disabled: $data.loading,
                  onClick: ($event) => $options.leaveWorkspace()
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(_ctx.$t("leaveWorkspaceModal.leave")), 1)
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
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("modules/core/components/workspace/LeaveWorkspaceModal.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const LeaveWorkspaceModal = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$6 = {
  name: "WorkspaceSettingsModal",
  mixins: [modal],
  props: {
    workspace: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      page: null
    };
  },
  computed: {
    registeredSettings() {
      return this.$registry.getOrderedList("workspaceSettings").filter((settings) => settings.isEnabled() === true);
    },
    settingPageComponent() {
      const active = Object.values(
        this.$registry.getAll("workspaceSettings")
      ).find((setting) => setting.type === this.page);
      return active ? active.getComponent() : null;
    }
  },
  mounted() {
    this.setPage(
      Object.values(this.$registry.getOrderedList("workspaceSettings"))[0].type
    );
  },
  methods: {
    setPage(page) {
      this.page = page;
    },
    isPage(page) {
      return this.page === page;
    },
    show(page = null, ...args) {
      if (page === null) {
        const settings = Object.values(
          this.$registry.getAll("workspaceSettings")
        );
        this.page = settings.length > 0 ? settings[0].type : "";
      } else {
        this.page = page;
      }
      return modal.methods.show.call(this, ...args);
    }
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Modal = resolveComponent("Modal");
  _push(ssrRenderComponent(_component_Modal, mergeProps({
    ref: "modal",
    "left-sidebar": true,
    "left-sidebar-scrollable": true,
    "content-scrollable": true
  }, _attrs), {
    sidebar: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="modal-sidebar__title"${_scopeId}>${ssrInterpolate(_ctx.$t("workspaceSettingsModal.title"))}</div><ul class="modal-sidebar__nav"${_scopeId}><!--[-->`);
        ssrRenderList($options.registeredSettings, (setting) => {
          _push2(`<li${_scopeId}><a class="${ssrRenderClass([{ active: $data.page === setting.type }, "modal-sidebar__nav-link"])}"${_scopeId}><i class="${ssrRenderClass([setting.iconClass, "modal-sidebar__nav-icon"])}"${_scopeId}></i> ${ssrInterpolate(setting.getName())}</a></li>`);
        });
        _push2(`<!--]--></ul>`);
      } else {
        return [
          createVNode("div", { class: "modal-sidebar__title" }, toDisplayString(_ctx.$t("workspaceSettingsModal.title")), 1),
          createVNode("ul", { class: "modal-sidebar__nav" }, [
            (openBlock(true), createBlock(Fragment, null, renderList($options.registeredSettings, (setting) => {
              return openBlock(), createBlock("li", {
                key: setting.type
              }, [
                createVNode("a", {
                  class: ["modal-sidebar__nav-link", { active: $data.page === setting.type }],
                  onClick: ($event) => $options.setPage(setting.type)
                }, [
                  createVNode("i", {
                    class: ["modal-sidebar__nav-icon", setting.iconClass]
                  }, null, 2),
                  createTextVNode(" " + toDisplayString(setting.getName()), 1)
                ], 10, ["onClick"])
              ]);
            }), 128))
          ])
        ];
      }
    }),
    content: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        ssrRenderVNode(_push2, createVNode(resolveDynamicComponent($options.settingPageComponent), { workspace: $props.workspace }, null), _parent2, _scopeId);
      } else {
        return [
          (openBlock(), createBlock(resolveDynamicComponent($options.settingPageComponent), { workspace: $props.workspace }, null, 8, ["workspace"]))
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("modules/core/components/workspace/WorkspaceSettingsModal.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const WorkspaceSettingsModal = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$5 = {
  name: "WorkspaceContext",
  components: {
    ExportWorkspaceModal,
    ImportWorkspaceModal,
    LeaveWorkspaceModal,
    TrashModal,
    WorkspaceSettingsModal
  },
  mixins: [context],
  props: {
    workspace: {
      type: Object,
      required: true
    }
  },
  emits: ["rename"],
  setup() {
    const nuxtApp = useNuxtApp();
    return { nuxtApp };
  },
  data() {
    return {
      loading: false
    };
  },
  methods: {
    async fetchRolesAndPermissions() {
      await this.$store.dispatch("workspace/fetchPermissions", this.workspace);
      await this.$store.dispatch("workspace/fetchRoles", this.workspace);
    },
    showWorkspaceTrashModal() {
      this.$refs.context.hide();
      this.$refs.workspaceTrashModal.show();
    },
    openExportData() {
      this.$refs.context.hide();
      this.$refs.exportWorkspaceModal.show();
    },
    openImportData() {
      this.$refs.context.hide();
      this.$refs.importWorkspaceModal.show();
    },
    async deleteWorkspace() {
      this.loading = true;
      const selected = this.$store.getters["workspace/getSelected"].id === this.workspace.id;
      try {
        await this.$store.dispatch("workspace/delete", this.workspace);
        await this.$store.dispatch("toast/restore", {
          trash_item_type: "workspace",
          trash_item_id: this.workspace.id
        });
        if (selected) {
          await this.$router.push({ name: "dashboard" });
          await pageFinished(this.nuxtApp);
          await nextTick();
        }
      } catch (error2) {
        notifyIf(error2, "application");
      }
      this.loading = false;
    }
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Context = resolveComponent("Context");
  const _component_TrashModal = resolveComponent("TrashModal");
  const _component_ExportWorkspaceModal = resolveComponent("ExportWorkspaceModal");
  const _component_ImportWorkspaceModal = resolveComponent("ImportWorkspaceModal");
  const _component_LeaveWorkspaceModal = resolveComponent("LeaveWorkspaceModal");
  const _component_WorkspaceSettingsModal = resolveComponent("WorkspaceSettingsModal");
  _push(ssrRenderComponent(_component_Context, mergeProps({
    ref: "context",
    "ph-autocapture": "workspace-context",
    "overflow-scroll": "",
    "max-height-if-outside-viewport": "",
    onShown: $options.fetchRolesAndPermissions
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="context__menu-title"${_scopeId}>${ssrInterpolate($props.workspace.name)} (${ssrInterpolate($props.workspace.id)}) </div>`);
        if ($props.workspace._.additionalLoading) {
          _push2(`<div class="loading margin-left-2 margin-top-2 margin-bottom-2 margin-bottom-2"${_scopeId}></div>`);
        } else {
          _push2(`<ul class="context__menu"${_scopeId}>`);
          if (_ctx.$hasPermission("workspace.export", $props.workspace, $props.workspace.id)) {
            _push2(`<li class="context__menu-item"${_scopeId}><a class="context__menu-item-link"${_scopeId}><i class="context__menu-item-icon iconoir-share-ios"${_scopeId}></i> ${ssrInterpolate(_ctx.$t("workspaceContext.exportWorkspace"))}</a></li>`);
          } else {
            _push2(`<!---->`);
          }
          if (_ctx.$hasPermission("workspace.export", $props.workspace, $props.workspace.id)) {
            _push2(`<li class="context__menu-item"${_scopeId}><a class="context__menu-item-link"${_scopeId}><i class="context__menu-item-icon iconoir-import"${_scopeId}></i> ${ssrInterpolate(_ctx.$t("workspaceContext.importWorkspace"))}</a></li>`);
          } else {
            _push2(`<!---->`);
          }
          if (_ctx.$hasPermission("workspace.update", $props.workspace, $props.workspace.id)) {
            _push2(`<li class="context__menu-item"${_scopeId}><a class="context__menu-item-link"${_scopeId}><i class="context__menu-item-icon iconoir-edit-pencil"${_scopeId}></i> ${ssrInterpolate(_ctx.$t("workspaceContext.renameWorkspace"))}</a></li>`);
          } else {
            _push2(`<!---->`);
          }
          if (_ctx.$hasPermission("workspace.update", $props.workspace, $props.workspace.id)) {
            _push2(`<li class="context__menu-item"${_scopeId}><a class="context__menu-item-link"${_scopeId}><i class="context__menu-item-icon iconoir-settings"${_scopeId}></i> ${ssrInterpolate(_ctx.$t("workspaceContext.settings"))}</a></li>`);
          } else {
            _push2(`<!---->`);
          }
          if (_ctx.$hasPermission("invitation.read", $props.workspace, $props.workspace.id)) {
            _push2(`<li class="context__menu-item"${_scopeId}><a class="context__menu-item-link"${_scopeId}><i class="context__menu-item-icon iconoir-community"${_scopeId}></i> ${ssrInterpolate(_ctx.$t("workspaceContext.members"))}</a></li>`);
          } else {
            _push2(`<!---->`);
          }
          if (_ctx.$hasPermission("workspace.read_trash", $props.workspace, $props.workspace.id)) {
            _push2(`<li class="context__menu-item"${_scopeId}><a class="context__menu-item-link"${_scopeId}><i class="context__menu-item-icon iconoir-refresh-double"${_scopeId}></i> ${ssrInterpolate(_ctx.$t("workspaceContext.viewTrash"))}</a></li>`);
          } else {
            _push2(`<!---->`);
          }
          _push2(`<li class="context__menu-item"${_scopeId}><a class="context__menu-item-link"${_scopeId}><i class="context__menu-item-icon iconoir-log-out"${_scopeId}></i> ${ssrInterpolate(_ctx.$t("workspaceContext.leaveWorkspace"))}</a></li>`);
          if (_ctx.$hasPermission("workspace.delete", $props.workspace, $props.workspace.id)) {
            _push2(`<li class="context__menu-item context__menu-item--with-separator"${_scopeId}><a class="${ssrRenderClass([{ "context__menu-item-link--loading": $data.loading }, "context__menu-item-link context__menu-item-link--delete"])}"${_scopeId}><i class="context__menu-item-icon iconoir-bin"${_scopeId}></i> ${ssrInterpolate(_ctx.$t("workspaceContext.deleteWorkspace"))}</a></li>`);
          } else {
            _push2(`<!---->`);
          }
          _push2(`</ul>`);
        }
        if (_ctx.$hasPermission("workspace.read_trash", $props.workspace, $props.workspace.id)) {
          _push2(ssrRenderComponent(_component_TrashModal, {
            ref: "workspaceTrashModal",
            "initial-workspace": $props.workspace
          }, null, _parent2, _scopeId));
        } else {
          _push2(`<!---->`);
        }
        if (_ctx.$hasPermission("workspace.export", $props.workspace, $props.workspace.id)) {
          _push2(ssrRenderComponent(_component_ExportWorkspaceModal, {
            ref: "exportWorkspaceModal",
            workspace: $props.workspace
          }, null, _parent2, _scopeId));
        } else {
          _push2(`<!---->`);
        }
        if (_ctx.$hasPermission("workspace.export", $props.workspace, $props.workspace.id)) {
          _push2(ssrRenderComponent(_component_ImportWorkspaceModal, {
            ref: "importWorkspaceModal",
            workspace: $props.workspace
          }, null, _parent2, _scopeId));
        } else {
          _push2(`<!---->`);
        }
        _push2(ssrRenderComponent(_component_LeaveWorkspaceModal, {
          ref: "leaveWorkspaceModal",
          workspace: $props.workspace
        }, null, _parent2, _scopeId));
        if (_ctx.$hasPermission("workspace.update", $props.workspace, $props.workspace.id)) {
          _push2(ssrRenderComponent(_component_WorkspaceSettingsModal, {
            ref: "workspaceSettingsModal",
            workspace: $props.workspace
          }, null, _parent2, _scopeId));
        } else {
          _push2(`<!---->`);
        }
      } else {
        return [
          createVNode("div", { class: "context__menu-title" }, toDisplayString($props.workspace.name) + " (" + toDisplayString($props.workspace.id) + ") ", 1),
          $props.workspace._.additionalLoading ? (openBlock(), createBlock("div", {
            key: 0,
            class: "loading margin-left-2 margin-top-2 margin-bottom-2 margin-bottom-2"
          })) : (openBlock(), createBlock("ul", {
            key: 1,
            class: "context__menu"
          }, [
            _ctx.$hasPermission("workspace.export", $props.workspace, $props.workspace.id) ? (openBlock(), createBlock("li", {
              key: 0,
              class: "context__menu-item"
            }, [
              createVNode("a", {
                class: "context__menu-item-link",
                onClick: $options.openExportData
              }, [
                createVNode("i", { class: "context__menu-item-icon iconoir-share-ios" }),
                createTextVNode(" " + toDisplayString(_ctx.$t("workspaceContext.exportWorkspace")), 1)
              ], 8, ["onClick"])
            ])) : createCommentVNode("", true),
            _ctx.$hasPermission("workspace.export", $props.workspace, $props.workspace.id) ? (openBlock(), createBlock("li", {
              key: 1,
              class: "context__menu-item"
            }, [
              createVNode("a", {
                class: "context__menu-item-link",
                onClick: $options.openImportData
              }, [
                createVNode("i", { class: "context__menu-item-icon iconoir-import" }),
                createTextVNode(" " + toDisplayString(_ctx.$t("workspaceContext.importWorkspace")), 1)
              ], 8, ["onClick"])
            ])) : createCommentVNode("", true),
            _ctx.$hasPermission("workspace.update", $props.workspace, $props.workspace.id) ? (openBlock(), createBlock("li", {
              key: 2,
              class: "context__menu-item"
            }, [
              createVNode("a", {
                class: "context__menu-item-link",
                onClick: ($event) => _ctx.$emit("rename")
              }, [
                createVNode("i", { class: "context__menu-item-icon iconoir-edit-pencil" }),
                createTextVNode(" " + toDisplayString(_ctx.$t("workspaceContext.renameWorkspace")), 1)
              ], 8, ["onClick"])
            ])) : createCommentVNode("", true),
            _ctx.$hasPermission("workspace.update", $props.workspace, $props.workspace.id) ? (openBlock(), createBlock("li", {
              key: 3,
              class: "context__menu-item"
            }, [
              createVNode("a", {
                class: "context__menu-item-link",
                onClick: ($event) => (_ctx.$refs.workspaceSettingsModal.show(), _ctx.hide())
              }, [
                createVNode("i", { class: "context__menu-item-icon iconoir-settings" }),
                createTextVNode(" " + toDisplayString(_ctx.$t("workspaceContext.settings")), 1)
              ], 8, ["onClick"])
            ])) : createCommentVNode("", true),
            _ctx.$hasPermission("invitation.read", $props.workspace, $props.workspace.id) ? (openBlock(), createBlock("li", {
              key: 4,
              class: "context__menu-item"
            }, [
              createVNode("a", {
                class: "context__menu-item-link",
                onClick: ($event) => (_ctx.$router.push({
                  name: "settings-members",
                  params: {
                    workspaceId: $props.workspace.id
                  }
                }), _ctx.hide())
              }, [
                createVNode("i", { class: "context__menu-item-icon iconoir-community" }),
                createTextVNode(" " + toDisplayString(_ctx.$t("workspaceContext.members")), 1)
              ], 8, ["onClick"])
            ])) : createCommentVNode("", true),
            _ctx.$hasPermission("workspace.read_trash", $props.workspace, $props.workspace.id) ? (openBlock(), createBlock("li", {
              key: 5,
              class: "context__menu-item"
            }, [
              createVNode("a", {
                class: "context__menu-item-link",
                onClick: $options.showWorkspaceTrashModal
              }, [
                createVNode("i", { class: "context__menu-item-icon iconoir-refresh-double" }),
                createTextVNode(" " + toDisplayString(_ctx.$t("workspaceContext.viewTrash")), 1)
              ], 8, ["onClick"])
            ])) : createCommentVNode("", true),
            createVNode("li", { class: "context__menu-item" }, [
              createVNode("a", {
                class: "context__menu-item-link",
                onClick: ($event) => _ctx.$refs.leaveWorkspaceModal.show()
              }, [
                createVNode("i", { class: "context__menu-item-icon iconoir-log-out" }),
                createTextVNode(" " + toDisplayString(_ctx.$t("workspaceContext.leaveWorkspace")), 1)
              ], 8, ["onClick"])
            ]),
            _ctx.$hasPermission("workspace.delete", $props.workspace, $props.workspace.id) ? (openBlock(), createBlock("li", {
              key: 6,
              class: "context__menu-item context__menu-item--with-separator"
            }, [
              createVNode("a", {
                class: ["context__menu-item-link context__menu-item-link--delete", { "context__menu-item-link--loading": $data.loading }],
                onClick: $options.deleteWorkspace
              }, [
                createVNode("i", { class: "context__menu-item-icon iconoir-bin" }),
                createTextVNode(" " + toDisplayString(_ctx.$t("workspaceContext.deleteWorkspace")), 1)
              ], 10, ["onClick"])
            ])) : createCommentVNode("", true)
          ])),
          _ctx.$hasPermission("workspace.read_trash", $props.workspace, $props.workspace.id) ? (openBlock(), createBlock(_component_TrashModal, {
            key: 2,
            ref: "workspaceTrashModal",
            "initial-workspace": $props.workspace
          }, null, 8, ["initial-workspace"])) : createCommentVNode("", true),
          _ctx.$hasPermission("workspace.export", $props.workspace, $props.workspace.id) ? (openBlock(), createBlock(_component_ExportWorkspaceModal, {
            key: 3,
            ref: "exportWorkspaceModal",
            workspace: $props.workspace
          }, null, 8, ["workspace"])) : createCommentVNode("", true),
          _ctx.$hasPermission("workspace.export", $props.workspace, $props.workspace.id) ? (openBlock(), createBlock(_component_ImportWorkspaceModal, {
            key: 4,
            ref: "importWorkspaceModal",
            workspace: $props.workspace
          }, null, 8, ["workspace"])) : createCommentVNode("", true),
          createVNode(_component_LeaveWorkspaceModal, {
            ref: "leaveWorkspaceModal",
            workspace: $props.workspace
          }, null, 8, ["workspace"]),
          _ctx.$hasPermission("workspace.update", $props.workspace, $props.workspace.id) ? (openBlock(), createBlock(_component_WorkspaceSettingsModal, {
            key: 5,
            ref: "workspaceSettingsModal",
            workspace: $props.workspace
          }, null, 8, ["workspace"])) : createCommentVNode("", true)
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("modules/core/components/workspace/WorkspaceContext.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const WorkspaceContext = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$4 = {
  mixins: [application],
  props: {
    application: {
      type: Object,
      required: true
    },
    workspace: {
      type: Object,
      required: true
    }
  },
  emits: ["click"],
  computed: {
    humanCreatedAt() {
      const { period, count } = getHumanPeriodAgoCount(
        this.application.created_on
      );
      return this.$t(`datetime.${period}Ago`, { count });
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Editable = resolveComponent("Editable");
  const _component_ButtonIcon = resolveComponent("ButtonIcon");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "dashboard__application" }, _attrs))}><div class="dashboard__application-wrapper"><div class="dashboard__application-icon"><i class="${ssrRenderClass($props.application._.type.iconClass)}"></i></div><div class="dashboard__application-details"><div class="dashboard__application-name"><div class="dashboard__application-name-text">`);
  _push(ssrRenderComponent(_component_Editable, {
    ref: "rename",
    value: $props.application.name,
    onChange: ($event) => _ctx.renameApplication($props.application, $event)
  }, null, _parent));
  _push(`</div></div><div class="dashboard__application-more">${ssrInterpolate(_ctx.getApplicationTypeName($props.application))} <span class="dashboard__application-more-separator">\u2022</span> ${ssrInterpolate(_ctx.$t("dashboardApplication.createdAt"))} ${ssrInterpolate($options.humanCreatedAt)}</div></div></div><span class="dashboard__application-more-button">`);
  _push(ssrRenderComponent(_component_ButtonIcon, {
    icon: "baserow-icon-more-vertical",
    onClick: ($event) => _ctx.$refs.context.toggle(_ctx.$refs.contextLink, "bottom", "right", 0)
  }, null, _parent));
  _push(`</span>`);
  ssrRenderVNode(_push, createVNode(resolveDynamicComponent(_ctx.getApplicationContextComponent($props.application)), {
    ref: "context",
    application: $props.application,
    workspace: $props.workspace,
    onRename: ($event) => _ctx.handleRenameApplication()
  }, null), _parent);
  _push(`</div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("modules/core/components/dashboard/DashboardApplication.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const DashboardApplication = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$1]]);
const _hoisted_1$t = {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 134 80"
};
function render$t(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$t, [..._cache[0] || (_cache[0] = [
    createStaticVNode('<path fill="#fff" d="M0 4a4 4 0 0 1 4-4h126a4 4 0 0 1 4 4v76H0z"></path><rect width="121" height="73" x="6.5" y="16.5" fill="#fff" stroke="#EDEDED" opacity=".8" rx="3.5"></rect><path fill="#EDEDED" d="M7 40h121v1H7zM7 65h121v1H7z" opacity=".8"></path><path fill="#EDEDED" d="M30 16h1v120h-1zM55 16h1v120h-1zM79 16h1v120h-1zM103 16h1v120h-1z" opacity=".8"></path><path fill="#2BC3F1" d="M0 4a4 4 0 0 1 4-4h126a4 4 0 0 1 4 4v6H0z" opacity=".24"></path><rect width="40" height="4" x="47" y="3" fill="#fff" opacity=".64" rx="2"></rect><rect width="41" height="8" x="10" y="20" fill="#2BC3F1" rx="4"></rect><rect width="15" height="8" x="84" y="45" fill="#2BC3F1" rx="4"></rect><rect width="16" height="16" x="35" y="45" fill="#2BC3F1" rx="2"></rect><circle cx="14" cy="24" r="2" fill="#fff"></circle><circle cx="14" cy="49" r="2" fill="#6A6B70" opacity=".24"></circle><circle cx="14" cy="74" r="2" fill="#6A6B70" opacity=".24"></circle><circle cx="39" cy="49" r="2" fill="#fff"></circle><circle cx="39" cy="74" r="2" fill="#6A6B70" opacity=".24"></circle><circle cx="64" cy="24" r="2" fill="#6A6B70" opacity=".24"></circle><circle cx="64" cy="49" r="2" fill="#6A6B70" opacity=".24"></circle><circle cx="64" cy="74" r="2" fill="#6A6B70" opacity=".24"></circle><circle cx="88" cy="24" r="2" fill="#6A6B70" opacity=".24"></circle><circle cx="88" cy="49" r="2" fill="#fff"></circle><circle cx="88" cy="74" r="2" fill="#6A6B70" opacity=".24"></circle><circle cx="112" cy="24" r="2" fill="#6A6B70" opacity=".24"></circle><circle cx="112" cy="74" r="2" fill="#6A6B70" opacity=".24"></circle><circle cx="112" cy="49" r="2" fill="#6A6B70" opacity=".24"></circle>', 23)
  ])]);
}
const template_illustration_calendar_blue = { render: render$t };
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: template_illustration_calendar_blue,
  render: render$t
}, Symbol.toStringTag, { value: "Module" }));
const _hoisted_1$s = {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 134 80"
};
function render$s(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$s, [..._cache[0] || (_cache[0] = [
    createStaticVNode('<path fill="#fff" d="M0 4a4 4 0 0 1 4-4h126a4 4 0 0 1 4 4v76H0z"></path><rect width="121" height="73" x="6.5" y="16.5" fill="#fff" stroke="#EDEDED" opacity=".8" rx="3.5"></rect><path fill="#EDEDED" d="M7 40h121v1H7zM7 65h121v1H7z" opacity=".8"></path><path fill="#EDEDED" d="M30 16h1v120h-1zM55 16h1v120h-1zM79 16h1v120h-1zM103 16h1v120h-1z" opacity=".8"></path><path fill="#12D452" d="M0 4a4 4 0 0 1 4-4h126a4 4 0 0 1 4 4v6H0z" opacity=".24"></path><rect width="40" height="4" x="47" y="3" fill="#fff" opacity=".64" rx="2"></rect><rect width="41" height="8" x="10" y="20" fill="#12D452" rx="4"></rect><rect width="15" height="8" x="84" y="45" fill="#12D452" rx="4"></rect><rect width="16" height="16" x="35" y="45" fill="#12D452" rx="2"></rect><circle cx="14" cy="24" r="2" fill="#fff"></circle><circle cx="14" cy="49" r="2" fill="#6A6B70" opacity=".24"></circle><circle cx="14" cy="74" r="2" fill="#6A6B70" opacity=".24"></circle><circle cx="39" cy="49" r="2" fill="#fff"></circle><circle cx="39" cy="74" r="2" fill="#6A6B70" opacity=".24"></circle><circle cx="64" cy="24" r="2" fill="#6A6B70" opacity=".24"></circle><circle cx="64" cy="49" r="2" fill="#6A6B70" opacity=".24"></circle><circle cx="64" cy="74" r="2" fill="#6A6B70" opacity=".24"></circle><circle cx="88" cy="24" r="2" fill="#6A6B70" opacity=".24"></circle><circle cx="88" cy="49" r="2" fill="#fff"></circle><circle cx="88" cy="74" r="2" fill="#6A6B70" opacity=".24"></circle><circle cx="112" cy="24" r="2" fill="#6A6B70" opacity=".24"></circle><circle cx="112" cy="74" r="2" fill="#6A6B70" opacity=".24"></circle><circle cx="112" cy="49" r="2" fill="#6A6B70" opacity=".24"></circle>', 23)
  ])]);
}
const template_illustration_calendar_green = { render: render$s };
const __vite_glob_0_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: template_illustration_calendar_green,
  render: render$s
}, Symbol.toStringTag, { value: "Module" }));
const _hoisted_1$r = {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 134 80"
};
function render$r(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$r, [..._cache[0] || (_cache[0] = [
    createStaticVNode('<path fill="#fff" d="M0 4a4 4 0 0 1 4-4h126a4 4 0 0 1 4 4v76H0z"></path><rect width="121" height="73" x="6.5" y="16.5" fill="#fff" stroke="#EDEDED" opacity=".8" rx="3.5"></rect><path fill="#EDEDED" d="M7 40h121v1H7zM7 65h121v1H7z" opacity=".8"></path><path fill="#EDEDED" d="M30 16h1v120h-1zM55 16h1v120h-1zM79 16h1v120h-1zM103 16h1v120h-1z" opacity=".8"></path><path fill="#E26AB0" d="M0 4a4 4 0 0 1 4-4h126a4 4 0 0 1 4 4v6H0z" opacity=".24"></path><rect width="40" height="4" x="47" y="3" fill="#fff" opacity=".64" rx="2"></rect><rect width="41" height="8" x="10" y="20" fill="#E26AB0" rx="4"></rect><rect width="15" height="8" x="84" y="45" fill="#E26AB0" rx="4"></rect><rect width="16" height="16" x="35" y="45" fill="#E26AB0" rx="2"></rect><circle cx="14" cy="24" r="2" fill="#fff"></circle><circle cx="14" cy="49" r="2" fill="#6A6B70" opacity=".24"></circle><circle cx="14" cy="74" r="2" fill="#6A6B70" opacity=".24"></circle><circle cx="39" cy="49" r="2" fill="#fff"></circle><circle cx="39" cy="74" r="2" fill="#6A6B70" opacity=".24"></circle><circle cx="64" cy="24" r="2" fill="#6A6B70" opacity=".24"></circle><circle cx="64" cy="49" r="2" fill="#6A6B70" opacity=".24"></circle><circle cx="64" cy="74" r="2" fill="#6A6B70" opacity=".24"></circle><circle cx="88" cy="24" r="2" fill="#6A6B70" opacity=".24"></circle><circle cx="88" cy="49" r="2" fill="#fff"></circle><circle cx="88" cy="74" r="2" fill="#6A6B70" opacity=".24"></circle><circle cx="112" cy="24" r="2" fill="#6A6B70" opacity=".24"></circle><circle cx="112" cy="74" r="2" fill="#6A6B70" opacity=".24"></circle><circle cx="112" cy="49" r="2" fill="#6A6B70" opacity=".24"></circle>', 23)
  ])]);
}
const template_illustration_calendar_magenta = { render: render$r };
const __vite_glob_0_2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: template_illustration_calendar_magenta,
  render: render$r
}, Symbol.toStringTag, { value: "Module" }));
const _hoisted_1$q = {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 134 80"
};
function render$q(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$q, [..._cache[0] || (_cache[0] = [
    createStaticVNode('<path fill="#fff" d="M0 4a4 4 0 0 1 4-4h126a4 4 0 0 1 4 4v76H0z"></path><rect width="121" height="73" x="6.5" y="16.5" fill="#fff" stroke="#EDEDED" opacity=".8" rx="3.5"></rect><path fill="#EDEDED" d="M7 40h121v1H7zM7 65h121v1H7z" opacity=".8"></path><path fill="#EDEDED" d="M30 16h1v120h-1zM55 16h1v120h-1zM79 16h1v120h-1zM103 16h1v120h-1z" opacity=".8"></path><path fill="#AF50EA" d="M0 4a4 4 0 0 1 4-4h126a4 4 0 0 1 4 4v6H0z" opacity=".24"></path><rect width="40" height="4" x="47" y="3" fill="#fff" opacity=".64" rx="2"></rect><rect width="41" height="8" x="10" y="20" fill="#AF50EA" rx="4"></rect><rect width="15" height="8" x="84" y="45" fill="#AF50EA" rx="4"></rect><rect width="16" height="16" x="35" y="45" fill="#AF50EA" rx="2"></rect><circle cx="14" cy="24" r="2" fill="#fff"></circle><circle cx="14" cy="49" r="2" fill="#6A6B70" opacity=".24"></circle><circle cx="14" cy="74" r="2" fill="#6A6B70" opacity=".24"></circle><circle cx="39" cy="49" r="2" fill="#fff"></circle><circle cx="39" cy="74" r="2" fill="#6A6B70" opacity=".24"></circle><circle cx="64" cy="24" r="2" fill="#6A6B70" opacity=".24"></circle><circle cx="64" cy="49" r="2" fill="#6A6B70" opacity=".24"></circle><circle cx="64" cy="74" r="2" fill="#6A6B70" opacity=".24"></circle><circle cx="88" cy="24" r="2" fill="#6A6B70" opacity=".24"></circle><circle cx="88" cy="49" r="2" fill="#fff"></circle><circle cx="88" cy="74" r="2" fill="#6A6B70" opacity=".24"></circle><circle cx="112" cy="24" r="2" fill="#6A6B70" opacity=".24"></circle><circle cx="112" cy="74" r="2" fill="#6A6B70" opacity=".24"></circle><circle cx="112" cy="49" r="2" fill="#6A6B70" opacity=".24"></circle>', 23)
  ])]);
}
const template_illustration_calendar_purple = { render: render$q };
const __vite_glob_0_3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: template_illustration_calendar_purple,
  render: render$q
}, Symbol.toStringTag, { value: "Module" }));
const _hoisted_1$p = {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 134 80"
};
function render$p(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$p, [..._cache[0] || (_cache[0] = [
    createStaticVNode('<path fill="#fff" d="M0 4a4 4 0 0 1 4-4h126a4 4 0 0 1 4 4v76H0z"></path><rect width="121" height="73" x="6.5" y="16.5" fill="#fff" stroke="#EDEDED" opacity=".8" rx="3.5"></rect><path fill="#EDEDED" d="M7 40h121v1H7zM7 65h121v1H7z" opacity=".8"></path><path fill="#EDEDED" d="M30 16h1v120h-1zM55 16h1v120h-1zM79 16h1v120h-1zM103 16h1v120h-1z" opacity=".8"></path><path fill="#FF5A44" d="M0 4a4 4 0 0 1 4-4h126a4 4 0 0 1 4 4v6H0z" opacity=".24"></path><rect width="40" height="4" x="47" y="3" fill="#fff" opacity=".64" rx="2"></rect><rect width="41" height="8" x="10" y="20" fill="#FF5A44" rx="4"></rect><rect width="15" height="8" x="84" y="45" fill="#FF5A44" rx="4"></rect><rect width="16" height="16" x="35" y="45" fill="#FF5A44" rx="2"></rect><circle cx="14" cy="24" r="2" fill="#fff"></circle><circle cx="14" cy="49" r="2" fill="#6A6B70" opacity=".24"></circle><circle cx="14" cy="74" r="2" fill="#6A6B70" opacity=".24"></circle><circle cx="39" cy="49" r="2" fill="#fff"></circle><circle cx="39" cy="74" r="2" fill="#6A6B70" opacity=".24"></circle><circle cx="64" cy="24" r="2" fill="#6A6B70" opacity=".24"></circle><circle cx="64" cy="49" r="2" fill="#6A6B70" opacity=".24"></circle><circle cx="64" cy="74" r="2" fill="#6A6B70" opacity=".24"></circle><circle cx="88" cy="24" r="2" fill="#6A6B70" opacity=".24"></circle><circle cx="88" cy="49" r="2" fill="#fff"></circle><circle cx="88" cy="74" r="2" fill="#6A6B70" opacity=".24"></circle><circle cx="112" cy="24" r="2" fill="#6A6B70" opacity=".24"></circle><circle cx="112" cy="74" r="2" fill="#6A6B70" opacity=".24"></circle><circle cx="112" cy="49" r="2" fill="#6A6B70" opacity=".24"></circle>', 23)
  ])]);
}
const template_illustration_calendar_red = { render: render$p };
const __vite_glob_0_4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: template_illustration_calendar_red,
  render: render$p
}, Symbol.toStringTag, { value: "Module" }));
const _hoisted_1$o = {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 134 80"
};
function render$o(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$o, [..._cache[0] || (_cache[0] = [
    createStaticVNode('<path fill="#fff" d="M0 4a4 4 0 0 1 4-4h126a4 4 0 0 1 4 4v76H0z"></path><rect width="121" height="73" x="6.5" y="16.5" fill="#fff" stroke="#EDEDED" opacity=".8" rx="3.5"></rect><path fill="#EDEDED" d="M7 40h121v1H7zM7 65h121v1H7z" opacity=".8"></path><path fill="#EDEDED" d="M30 16h1v120h-1zM55 16h1v120h-1zM79 16h1v120h-1zM103 16h1v120h-1z" opacity=".8"></path><path fill="#FFC744" d="M0 4a4 4 0 0 1 4-4h126a4 4 0 0 1 4 4v6H0z" opacity=".36"></path><rect width="40" height="4" x="47" y="3" fill="#fff" opacity=".64" rx="2"></rect><rect width="41" height="8" x="10" y="20" fill="#FFC744" rx="4"></rect><rect width="15" height="8" x="84" y="45" fill="#FFC744" rx="4"></rect><rect width="16" height="16" x="35" y="45" fill="#FFC744" rx="2"></rect><circle cx="14" cy="24" r="2" fill="#fff"></circle><circle cx="14" cy="49" r="2" fill="#6A6B70" opacity=".24"></circle><circle cx="14" cy="74" r="2" fill="#6A6B70" opacity=".24"></circle><circle cx="39" cy="49" r="2" fill="#fff"></circle><circle cx="39" cy="74" r="2" fill="#6A6B70" opacity=".24"></circle><circle cx="64" cy="24" r="2" fill="#6A6B70" opacity=".24"></circle><circle cx="64" cy="49" r="2" fill="#6A6B70" opacity=".24"></circle><circle cx="64" cy="74" r="2" fill="#6A6B70" opacity=".24"></circle><circle cx="88" cy="24" r="2" fill="#6A6B70" opacity=".24"></circle><circle cx="88" cy="49" r="2" fill="#fff"></circle><circle cx="88" cy="74" r="2" fill="#6A6B70" opacity=".24"></circle><circle cx="112" cy="24" r="2" fill="#6A6B70" opacity=".24"></circle><circle cx="112" cy="74" r="2" fill="#6A6B70" opacity=".24"></circle><circle cx="112" cy="49" r="2" fill="#6A6B70" opacity=".24"></circle>', 23)
  ])]);
}
const template_illustration_calendar_yellow = { render: render$o };
const __vite_glob_0_5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: template_illustration_calendar_yellow,
  render: render$o
}, Symbol.toStringTag, { value: "Module" }));
const _hoisted_1$n = {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 134 80"
};
function render$n(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$n, [..._cache[0] || (_cache[0] = [
    createStaticVNode('<path fill="#fff" d="M0 4a4 4 0 0 1 4-4h126a4 4 0 0 1 4 4v76H0z"></path><rect width="126" height="16" x="4" y="14" fill="#2BC3F1" opacity=".16" rx="4"></rect><path fill="#2BC3F1" d="M0 4a4 4 0 0 1 4-4h126a4 4 0 0 1 4 4v6H0z" opacity=".24"></path><rect width="40" height="4" x="47" y="3" fill="#fff" opacity=".64" rx="2"></rect><rect width="16" height="4" x="36" y="48" fill="#F5F5F5" rx="2"></rect><rect width="61" height="15" x="36.5" y="56.5" fill="#fff" stroke="#EDEDED" rx="1.5"></rect><rect width="24" height="4" x="60" y="34" fill="#EDEDED" rx="2"></rect><rect width="16" height="16" x="36" y="26" fill="#2BC3F1" rx="4"></rect><rect width="54" height="2" x="40" y="60" fill="#EDEDED" rx="1"></rect><rect width="22" height="2" x="40" y="64" fill="#F5F5F5" rx="1"></rect>', 10)
  ])]);
}
const template_illustration_form_blue = { render: render$n };
const __vite_glob_0_6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: template_illustration_form_blue,
  render: render$n
}, Symbol.toStringTag, { value: "Module" }));
const _hoisted_1$m = {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 134 80"
};
function render$m(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$m, [..._cache[0] || (_cache[0] = [
    createStaticVNode('<path fill="#fff" d="M0 4a4 4 0 0 1 4-4h126a4 4 0 0 1 4 4v76H0z"></path><rect width="126" height="16" x="4" y="14" fill="#12D452" opacity=".16" rx="4"></rect><path fill="#12D452" d="M0 4a4 4 0 0 1 4-4h126a4 4 0 0 1 4 4v6H0z" opacity=".24"></path><rect width="40" height="4" x="47" y="3" fill="#fff" opacity=".64" rx="2"></rect><rect width="16" height="4" x="36" y="48" fill="#F5F5F5" rx="2"></rect><rect width="61" height="15" x="36.5" y="56.5" fill="#fff" stroke="#EDEDED" rx="1.5"></rect><rect width="24" height="4" x="60" y="34" fill="#EDEDED" rx="2"></rect><rect width="16" height="16" x="36" y="26" fill="#12D452" rx="4"></rect><rect width="54" height="2" x="40" y="60" fill="#EDEDED" rx="1"></rect><rect width="22" height="2" x="40" y="64" fill="#F5F5F5" rx="1"></rect>', 10)
  ])]);
}
const template_illustration_form_green = { render: render$m };
const __vite_glob_0_7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: template_illustration_form_green,
  render: render$m
}, Symbol.toStringTag, { value: "Module" }));
const _hoisted_1$l = {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 134 80"
};
function render$l(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$l, [..._cache[0] || (_cache[0] = [
    createStaticVNode('<path fill="#fff" d="M0 4a4 4 0 0 1 4-4h126a4 4 0 0 1 4 4v76H0z"></path><rect width="126" height="16" x="4" y="14" fill="#E26AB0" opacity=".16" rx="4"></rect><path fill="#E26AB0" d="M0 4a4 4 0 0 1 4-4h126a4 4 0 0 1 4 4v6H0z" opacity=".24"></path><rect width="40" height="4" x="47" y="3" fill="#fff" opacity=".64" rx="2"></rect><rect width="16" height="4" x="36" y="48" fill="#F5F5F5" rx="2"></rect><rect width="61" height="15" x="36.5" y="56.5" fill="#fff" stroke="#EDEDED" rx="1.5"></rect><rect width="24" height="4" x="60" y="34" fill="#EDEDED" rx="2"></rect><rect width="16" height="16" x="36" y="26" fill="#E26AB0" rx="4"></rect><rect width="54" height="2" x="40" y="60" fill="#EDEDED" rx="1"></rect><rect width="22" height="2" x="40" y="64" fill="#F5F5F5" rx="1"></rect>', 10)
  ])]);
}
const template_illustration_form_magenta = { render: render$l };
const __vite_glob_0_8 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: template_illustration_form_magenta,
  render: render$l
}, Symbol.toStringTag, { value: "Module" }));
const _hoisted_1$k = {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 134 80"
};
function render$k(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$k, [..._cache[0] || (_cache[0] = [
    createStaticVNode('<path fill="#fff" d="M0 4a4 4 0 0 1 4-4h126a4 4 0 0 1 4 4v76H0z"></path><rect width="126" height="16" x="4" y="14" fill="#AF50EA" opacity=".16" rx="4"></rect><path fill="#AF50EA" d="M0 4a4 4 0 0 1 4-4h126a4 4 0 0 1 4 4v6H0z" opacity=".24"></path><rect width="40" height="4" x="47" y="3" fill="#fff" opacity=".64" rx="2"></rect><rect width="16" height="4" x="36" y="48" fill="#F5F5F5" rx="2"></rect><rect width="61" height="15" x="36.5" y="56.5" fill="#fff" stroke="#EDEDED" rx="1.5"></rect><rect width="24" height="4" x="60" y="34" fill="#EDEDED" rx="2"></rect><rect width="16" height="16" x="36" y="26" fill="#AF50EA" rx="4"></rect><rect width="54" height="2" x="40" y="60" fill="#EDEDED" rx="1"></rect><rect width="22" height="2" x="40" y="64" fill="#F5F5F5" rx="1"></rect>', 10)
  ])]);
}
const template_illustration_form_purple = { render: render$k };
const __vite_glob_0_9 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: template_illustration_form_purple,
  render: render$k
}, Symbol.toStringTag, { value: "Module" }));
const _hoisted_1$j = {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 134 80"
};
function render$j(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$j, [..._cache[0] || (_cache[0] = [
    createStaticVNode('<path fill="#fff" d="M0 4a4 4 0 0 1 4-4h126a4 4 0 0 1 4 4v76H0z"></path><rect width="126" height="16" x="4" y="14" fill="#FF5A44" opacity=".16" rx="4"></rect><path fill="#FF5A44" d="M0 4a4 4 0 0 1 4-4h126a4 4 0 0 1 4 4v6H0z" opacity=".24"></path><rect width="40" height="4" x="47" y="3" fill="#fff" opacity=".64" rx="2"></rect><rect width="16" height="4" x="36" y="48" fill="#F5F5F5" rx="2"></rect><rect width="61" height="15" x="36.5" y="56.5" fill="#fff" stroke="#EDEDED" rx="1.5"></rect><rect width="24" height="4" x="60" y="34" fill="#EDEDED" rx="2"></rect><rect width="16" height="16" x="36" y="26" fill="#FF5A44" rx="4"></rect><rect width="54" height="2" x="40" y="60" fill="#EDEDED" rx="1"></rect><rect width="22" height="2" x="40" y="64" fill="#F5F5F5" rx="1"></rect>', 10)
  ])]);
}
const template_illustration_form_red = { render: render$j };
const __vite_glob_0_10 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: template_illustration_form_red,
  render: render$j
}, Symbol.toStringTag, { value: "Module" }));
const _hoisted_1$i = {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 134 80"
};
function render$i(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$i, [..._cache[0] || (_cache[0] = [
    createStaticVNode('<path fill="#fff" d="M0 4a4 4 0 0 1 4-4h126a4 4 0 0 1 4 4v76H0z"></path><rect width="126" height="16" x="4" y="14" fill="#FFC744" opacity=".16" rx="4"></rect><path fill="#FFC744" d="M0 4a4 4 0 0 1 4-4h126a4 4 0 0 1 4 4v6H0z" opacity=".36"></path><rect width="40" height="4" x="47" y="3" fill="#fff" opacity=".64" rx="2"></rect><rect width="16" height="4" x="36" y="48" fill="#F5F5F5" rx="2"></rect><rect width="61" height="15" x="36.5" y="56.5" fill="#fff" stroke="#EDEDED" rx="1.5"></rect><rect width="24" height="4" x="60" y="34" fill="#EDEDED" rx="2"></rect><rect width="16" height="16" x="36" y="26" fill="#FFC744" rx="4"></rect><rect width="54" height="2" x="40" y="60" fill="#EDEDED" rx="1"></rect><rect width="22" height="2" x="40" y="64" fill="#F5F5F5" rx="1"></rect>', 10)
  ])]);
}
const template_illustration_form_yellow = { render: render$i };
const __vite_glob_0_11 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: template_illustration_form_yellow,
  render: render$i
}, Symbol.toStringTag, { value: "Module" }));
const _hoisted_1$h = {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 134 80"
};
function render$h(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$h, [..._cache[0] || (_cache[0] = [
    createStaticVNode('<path fill="#fff" d="M0 4a4 4 0 0 1 4-4h126a4 4 0 0 1 4 4v76H0z"></path><rect width="25" height="34" x="6.5" y="16.5" fill="#fff" stroke="#EDEDED" rx="1.5"></rect><rect width="11" height="2" x="9" y="45" fill="#9C9C9F" opacity=".16" rx="1"></rect><rect width="20" height="2" x="9" y="42" fill="#9C9C9F" opacity=".24" rx="1"></rect><rect width="20" height="20" x="9" y="19" fill="#2BC3F1" rx="2"></rect><rect width="25" height="34" x="38.5" y="16.5" fill="#fff" stroke="#EDEDED" rx="1.5"></rect><rect width="7" height="2" x="41" y="45" fill="#9C9C9F" opacity=".16" rx="1"></rect><rect width="16" height="2" x="41" y="42" fill="#9C9C9F" opacity=".24" rx="1"></rect><rect width="20" height="20" x="41" y="19" fill="#2BC3F1" opacity=".24" rx="2"></rect><rect width="25" height="34" x="70.5" y="16.5" fill="#fff" stroke="#EDEDED" rx="1.5"></rect><rect width="7" height="2" x="73" y="45" fill="#9C9C9F" opacity=".16" rx="1"></rect><rect width="20" height="2" x="73" y="42" fill="#9C9C9F" opacity=".24" rx="1"></rect><rect width="20" height="20" x="73" y="19" fill="#2BC3F1" opacity=".24" rx="2"></rect><rect width="25" height="34" x="102.5" y="16.5" fill="#fff" stroke="#EDEDED" rx="1.5"></rect><rect width="11" height="2" x="105" y="45" fill="#9C9C9F" opacity=".16" rx="1"></rect><rect width="16" height="2" x="105" y="42" fill="#9C9C9F" opacity=".24" rx="1"></rect><rect width="20" height="20" x="105" y="19" fill="#2BC3F1" opacity=".24" rx="2"></rect><rect width="25" height="34" x="6.5" y="57.5" fill="#fff" stroke="#EDEDED" rx="1.5"></rect><rect width="20" height="20" x="9" y="60" fill="#2BC3F1" opacity=".24" rx="2"></rect><rect width="25" height="34" x="38.5" y="57.5" fill="#fff" stroke="#EDEDED" rx="1.5"></rect><rect width="20" height="20" x="41" y="60" fill="#2BC3F1" opacity=".24" rx="2"></rect><rect width="25" height="34" x="70.5" y="57.5" fill="#fff" stroke="#EDEDED" rx="1.5"></rect><rect width="20" height="20" x="73" y="60" fill="#2BC3F1" opacity=".24" rx="2"></rect><rect width="25" height="34" x="102.5" y="57.5" fill="#fff" stroke="#EDEDED" rx="1.5"></rect><rect width="20" height="20" x="105" y="60" fill="#2BC3F1" opacity=".24" rx="2"></rect><path fill="#2BC3F1" d="M0 4a4 4 0 0 1 4-4h126a4 4 0 0 1 4 4v6H0z" opacity=".24"></path><rect width="40" height="4" x="47" y="3" fill="#fff" opacity=".64" rx="2"></rect>', 27)
  ])]);
}
const template_illustration_gallery_blue = { render: render$h };
const __vite_glob_0_12 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: template_illustration_gallery_blue,
  render: render$h
}, Symbol.toStringTag, { value: "Module" }));
const _hoisted_1$g = {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 134 80"
};
function render$g(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$g, [..._cache[0] || (_cache[0] = [
    createStaticVNode('<path fill="#fff" d="M0 4a4 4 0 0 1 4-4h126a4 4 0 0 1 4 4v76H0z"></path><rect width="25" height="34" x="6.5" y="16.5" fill="#fff" stroke="#EDEDED" rx="1.5"></rect><rect width="11" height="2" x="9" y="45" fill="#9C9C9F" opacity=".16" rx="1"></rect><rect width="20" height="2" x="9" y="42" fill="#9C9C9F" opacity=".24" rx="1"></rect><rect width="20" height="20" x="9" y="19" fill="#12D452" rx="2"></rect><rect width="25" height="34" x="38.5" y="16.5" fill="#fff" stroke="#EDEDED" rx="1.5"></rect><rect width="7" height="2" x="41" y="45" fill="#9C9C9F" opacity=".16" rx="1"></rect><rect width="16" height="2" x="41" y="42" fill="#9C9C9F" opacity=".24" rx="1"></rect><rect width="20" height="20" x="41" y="19" fill="#12D452" opacity=".24" rx="2"></rect><rect width="25" height="34" x="70.5" y="16.5" fill="#fff" stroke="#EDEDED" rx="1.5"></rect><rect width="7" height="2" x="73" y="45" fill="#9C9C9F" opacity=".16" rx="1"></rect><rect width="20" height="2" x="73" y="42" fill="#9C9C9F" opacity=".24" rx="1"></rect><rect width="20" height="20" x="73" y="19" fill="#12D452" opacity=".24" rx="2"></rect><rect width="25" height="34" x="102.5" y="16.5" fill="#fff" stroke="#EDEDED" rx="1.5"></rect><rect width="11" height="2" x="105" y="45" fill="#9C9C9F" opacity=".16" rx="1"></rect><rect width="16" height="2" x="105" y="42" fill="#9C9C9F" opacity=".24" rx="1"></rect><rect width="20" height="20" x="105" y="19" fill="#12D452" opacity=".24" rx="2"></rect><rect width="25" height="34" x="6.5" y="57.5" fill="#fff" stroke="#EDEDED" rx="1.5"></rect><rect width="20" height="20" x="9" y="60" fill="#12D452" opacity=".24" rx="2"></rect><rect width="25" height="34" x="38.5" y="57.5" fill="#fff" stroke="#EDEDED" rx="1.5"></rect><rect width="20" height="20" x="41" y="60" fill="#12D452" opacity=".24" rx="2"></rect><rect width="25" height="34" x="70.5" y="57.5" fill="#fff" stroke="#EDEDED" rx="1.5"></rect><rect width="20" height="20" x="73" y="60" fill="#12D452" opacity=".24" rx="2"></rect><rect width="25" height="34" x="102.5" y="57.5" fill="#fff" stroke="#EDEDED" rx="1.5"></rect><rect width="20" height="20" x="105" y="60" fill="#12D452" opacity=".24" rx="2"></rect><path fill="#12D452" d="M0 4a4 4 0 0 1 4-4h126a4 4 0 0 1 4 4v6H0z" opacity=".24"></path><rect width="40" height="4" x="47" y="3" fill="#fff" opacity=".64" rx="2"></rect>', 27)
  ])]);
}
const template_illustration_gallery_green = { render: render$g };
const __vite_glob_0_13 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: template_illustration_gallery_green,
  render: render$g
}, Symbol.toStringTag, { value: "Module" }));
const _hoisted_1$f = {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 134 80"
};
function render$f(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$f, [..._cache[0] || (_cache[0] = [
    createStaticVNode('<path fill="#fff" d="M0 4a4 4 0 0 1 4-4h126a4 4 0 0 1 4 4v76H0z"></path><rect width="25" height="34" x="6.5" y="16.5" fill="#fff" stroke="#EDEDED" rx="1.5"></rect><rect width="11" height="2" x="9" y="45" fill="#9C9C9F" opacity=".16" rx="1"></rect><rect width="20" height="2" x="9" y="42" fill="#9C9C9F" opacity=".24" rx="1"></rect><rect width="20" height="20" x="9" y="19" fill="#E26AB0" rx="2"></rect><rect width="25" height="34" x="38.5" y="16.5" fill="#fff" stroke="#EDEDED" rx="1.5"></rect><rect width="7" height="2" x="41" y="45" fill="#9C9C9F" opacity=".16" rx="1"></rect><rect width="16" height="2" x="41" y="42" fill="#9C9C9F" opacity=".24" rx="1"></rect><rect width="20" height="20" x="41" y="19" fill="#E26AB0" opacity=".24" rx="2"></rect><rect width="25" height="34" x="70.5" y="16.5" fill="#fff" stroke="#EDEDED" rx="1.5"></rect><rect width="7" height="2" x="73" y="45" fill="#9C9C9F" opacity=".16" rx="1"></rect><rect width="20" height="2" x="73" y="42" fill="#9C9C9F" opacity=".24" rx="1"></rect><rect width="20" height="20" x="73" y="19" fill="#E26AB0" opacity=".24" rx="2"></rect><rect width="25" height="34" x="102.5" y="16.5" fill="#fff" stroke="#EDEDED" rx="1.5"></rect><rect width="11" height="2" x="105" y="45" fill="#9C9C9F" opacity=".16" rx="1"></rect><rect width="16" height="2" x="105" y="42" fill="#9C9C9F" opacity=".24" rx="1"></rect><rect width="20" height="20" x="105" y="19" fill="#E26AB0" opacity=".24" rx="2"></rect><rect width="25" height="34" x="6.5" y="57.5" fill="#fff" stroke="#EDEDED" rx="1.5"></rect><rect width="20" height="20" x="9" y="60" fill="#E26AB0" opacity=".24" rx="2"></rect><rect width="25" height="34" x="38.5" y="57.5" fill="#fff" stroke="#EDEDED" rx="1.5"></rect><rect width="20" height="20" x="41" y="60" fill="#E26AB0" opacity=".24" rx="2"></rect><rect width="25" height="34" x="70.5" y="57.5" fill="#fff" stroke="#EDEDED" rx="1.5"></rect><rect width="20" height="20" x="73" y="60" fill="#E26AB0" opacity=".24" rx="2"></rect><rect width="25" height="34" x="102.5" y="57.5" fill="#fff" stroke="#EDEDED" rx="1.5"></rect><rect width="20" height="20" x="105" y="60" fill="#E26AB0" opacity=".24" rx="2"></rect><path fill="#E26AB0" d="M0 4a4 4 0 0 1 4-4h126a4 4 0 0 1 4 4v6H0z" opacity=".24"></path><rect width="40" height="4" x="47" y="3" fill="#fff" opacity=".64" rx="2"></rect>', 27)
  ])]);
}
const template_illustration_gallery_magenta = { render: render$f };
const __vite_glob_0_14 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: template_illustration_gallery_magenta,
  render: render$f
}, Symbol.toStringTag, { value: "Module" }));
const _hoisted_1$e = {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 134 80"
};
function render$e(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$e, [..._cache[0] || (_cache[0] = [
    createStaticVNode('<path fill="#fff" d="M0 4a4 4 0 0 1 4-4h126a4 4 0 0 1 4 4v76H0z"></path><rect width="25" height="34" x="6.5" y="16.5" fill="#fff" stroke="#EDEDED" rx="1.5"></rect><rect width="11" height="2" x="9" y="45" fill="#9C9C9F" opacity=".16" rx="1"></rect><rect width="20" height="2" x="9" y="42" fill="#9C9C9F" opacity=".24" rx="1"></rect><rect width="20" height="20" x="9" y="19" fill="#AF50EA" rx="2"></rect><rect width="25" height="34" x="38.5" y="16.5" fill="#fff" stroke="#EDEDED" rx="1.5"></rect><rect width="7" height="2" x="41" y="45" fill="#9C9C9F" opacity=".16" rx="1"></rect><rect width="16" height="2" x="41" y="42" fill="#9C9C9F" opacity=".24" rx="1"></rect><rect width="20" height="20" x="41" y="19" fill="#AF50EA" opacity=".24" rx="2"></rect><rect width="25" height="34" x="70.5" y="16.5" fill="#fff" stroke="#EDEDED" rx="1.5"></rect><rect width="7" height="2" x="73" y="45" fill="#9C9C9F" opacity=".16" rx="1"></rect><rect width="20" height="2" x="73" y="42" fill="#9C9C9F" opacity=".24" rx="1"></rect><rect width="20" height="20" x="73" y="19" fill="#AF50EA" opacity=".24" rx="2"></rect><rect width="25" height="34" x="102.5" y="16.5" fill="#fff" stroke="#EDEDED" rx="1.5"></rect><rect width="11" height="2" x="105" y="45" fill="#9C9C9F" opacity=".16" rx="1"></rect><rect width="16" height="2" x="105" y="42" fill="#9C9C9F" opacity=".24" rx="1"></rect><rect width="20" height="20" x="105" y="19" fill="#AF50EA" opacity=".24" rx="2"></rect><rect width="25" height="34" x="6.5" y="57.5" fill="#fff" stroke="#EDEDED" rx="1.5"></rect><rect width="20" height="20" x="9" y="60" fill="#AF50EA" opacity=".24" rx="2"></rect><rect width="25" height="34" x="38.5" y="57.5" fill="#fff" stroke="#EDEDED" rx="1.5"></rect><rect width="20" height="20" x="41" y="60" fill="#AF50EA" opacity=".24" rx="2"></rect><rect width="25" height="34" x="70.5" y="57.5" fill="#fff" stroke="#EDEDED" rx="1.5"></rect><rect width="20" height="20" x="73" y="60" fill="#AF50EA" opacity=".24" rx="2"></rect><rect width="25" height="34" x="102.5" y="57.5" fill="#fff" stroke="#EDEDED" rx="1.5"></rect><rect width="20" height="20" x="105" y="60" fill="#AF50EA" opacity=".24" rx="2"></rect><path fill="#AF50EA" d="M0 4a4 4 0 0 1 4-4h126a4 4 0 0 1 4 4v6H0z" opacity=".24"></path><rect width="40" height="4" x="47" y="3" fill="#fff" opacity=".64" rx="2"></rect>', 27)
  ])]);
}
const template_illustration_gallery_purple = { render: render$e };
const __vite_glob_0_15 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: template_illustration_gallery_purple,
  render: render$e
}, Symbol.toStringTag, { value: "Module" }));
const _hoisted_1$d = {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 134 80"
};
function render$d(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$d, [..._cache[0] || (_cache[0] = [
    createStaticVNode('<path fill="#fff" d="M0 4a4 4 0 0 1 4-4h126a4 4 0 0 1 4 4v76H0z"></path><rect width="25" height="34" x="6.5" y="16.5" fill="#fff" stroke="#EDEDED" rx="1.5"></rect><rect width="11" height="2" x="9" y="45" fill="#9C9C9F" opacity=".16" rx="1"></rect><rect width="20" height="2" x="9" y="42" fill="#9C9C9F" opacity=".24" rx="1"></rect><rect width="20" height="20" x="9" y="19" fill="#FF5A44" rx="2"></rect><rect width="25" height="34" x="38.5" y="16.5" fill="#fff" stroke="#EDEDED" rx="1.5"></rect><rect width="7" height="2" x="41" y="45" fill="#9C9C9F" opacity=".16" rx="1"></rect><rect width="16" height="2" x="41" y="42" fill="#9C9C9F" opacity=".24" rx="1"></rect><rect width="20" height="20" x="41" y="19" fill="#FF5A44" opacity=".24" rx="2"></rect><rect width="25" height="34" x="70.5" y="16.5" fill="#fff" stroke="#EDEDED" rx="1.5"></rect><rect width="7" height="2" x="73" y="45" fill="#9C9C9F" opacity=".16" rx="1"></rect><rect width="20" height="2" x="73" y="42" fill="#9C9C9F" opacity=".24" rx="1"></rect><rect width="20" height="20" x="73" y="19" fill="#FF5A44" opacity=".24" rx="2"></rect><rect width="25" height="34" x="102.5" y="16.5" fill="#fff" stroke="#EDEDED" rx="1.5"></rect><rect width="11" height="2" x="105" y="45" fill="#9C9C9F" opacity=".16" rx="1"></rect><rect width="16" height="2" x="105" y="42" fill="#9C9C9F" opacity=".24" rx="1"></rect><rect width="20" height="20" x="105" y="19" fill="#FF5A44" opacity=".24" rx="2"></rect><rect width="25" height="34" x="6.5" y="57.5" fill="#fff" stroke="#EDEDED" rx="1.5"></rect><rect width="20" height="20" x="9" y="60" fill="#FF5A44" opacity=".24" rx="2"></rect><rect width="25" height="34" x="38.5" y="57.5" fill="#fff" stroke="#EDEDED" rx="1.5"></rect><rect width="20" height="20" x="41" y="60" fill="#FF5A44" opacity=".24" rx="2"></rect><rect width="25" height="34" x="70.5" y="57.5" fill="#fff" stroke="#EDEDED" rx="1.5"></rect><rect width="20" height="20" x="73" y="60" fill="#FF5A44" opacity=".24" rx="2"></rect><rect width="25" height="34" x="102.5" y="57.5" fill="#fff" stroke="#EDEDED" rx="1.5"></rect><rect width="20" height="20" x="105" y="60" fill="#FF5A44" opacity=".24" rx="2"></rect><path fill="#FF5A44" d="M0 4a4 4 0 0 1 4-4h126a4 4 0 0 1 4 4v6H0z" opacity=".24"></path><rect width="40" height="4" x="47" y="3" fill="#fff" opacity=".64" rx="2"></rect>', 27)
  ])]);
}
const template_illustration_gallery_red = { render: render$d };
const __vite_glob_0_16 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: template_illustration_gallery_red,
  render: render$d
}, Symbol.toStringTag, { value: "Module" }));
const _hoisted_1$c = {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 134 80"
};
function render$c(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$c, [..._cache[0] || (_cache[0] = [
    createStaticVNode('<path fill="#fff" d="M0 4a4 4 0 0 1 4-4h126a4 4 0 0 1 4 4v76H0z"></path><rect width="25" height="34" x="6.5" y="16.5" fill="#fff" stroke="#EDEDED" rx="1.5"></rect><rect width="11" height="2" x="9" y="45" fill="#9C9C9F" opacity=".16" rx="1"></rect><rect width="20" height="2" x="9" y="42" fill="#9C9C9F" opacity=".24" rx="1"></rect><rect width="20" height="20" x="9" y="19" fill="#FFC744" rx="2"></rect><rect width="25" height="34" x="38.5" y="16.5" fill="#fff" stroke="#EDEDED" rx="1.5"></rect><rect width="7" height="2" x="41" y="45" fill="#9C9C9F" opacity=".16" rx="1"></rect><rect width="16" height="2" x="41" y="42" fill="#9C9C9F" opacity=".24" rx="1"></rect><rect width="20" height="20" x="41" y="19" fill="#FFC744" opacity=".24" rx="2"></rect><rect width="25" height="34" x="70.5" y="16.5" fill="#fff" stroke="#EDEDED" rx="1.5"></rect><rect width="7" height="2" x="73" y="45" fill="#9C9C9F" opacity=".16" rx="1"></rect><rect width="20" height="2" x="73" y="42" fill="#9C9C9F" opacity=".24" rx="1"></rect><rect width="20" height="20" x="73" y="19" fill="#FFC744" opacity=".24" rx="2"></rect><rect width="25" height="34" x="102.5" y="16.5" fill="#fff" stroke="#EDEDED" rx="1.5"></rect><rect width="11" height="2" x="105" y="45" fill="#9C9C9F" opacity=".16" rx="1"></rect><rect width="16" height="2" x="105" y="42" fill="#9C9C9F" opacity=".24" rx="1"></rect><rect width="20" height="20" x="105" y="19" fill="#FFC744" opacity=".24" rx="2"></rect><rect width="25" height="34" x="6.5" y="57.5" fill="#fff" stroke="#EDEDED" rx="1.5"></rect><rect width="20" height="20" x="9" y="60" fill="#FFC744" opacity=".24" rx="2"></rect><rect width="25" height="34" x="38.5" y="57.5" fill="#fff" stroke="#EDEDED" rx="1.5"></rect><rect width="20" height="20" x="41" y="60" fill="#FFC744" opacity=".24" rx="2"></rect><rect width="25" height="34" x="70.5" y="57.5" fill="#fff" stroke="#EDEDED" rx="1.5"></rect><rect width="20" height="20" x="73" y="60" fill="#FFC744" opacity=".24" rx="2"></rect><rect width="25" height="34" x="102.5" y="57.5" fill="#fff" stroke="#EDEDED" rx="1.5"></rect><rect width="20" height="20" x="105" y="60" fill="#FFC744" opacity=".24" rx="2"></rect><path fill="#FFC744" d="M0 4a4 4 0 0 1 4-4h126a4 4 0 0 1 4 4v6H0z" opacity=".36"></path><rect width="40" height="4" x="47" y="3" fill="#fff" opacity=".64" rx="2"></rect>', 27)
  ])]);
}
const template_illustration_gallery_yellow = { render: render$c };
const __vite_glob_0_17 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: template_illustration_gallery_yellow,
  render: render$c
}, Symbol.toStringTag, { value: "Module" }));
const _hoisted_1$b = {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 134 80"
};
function render$b(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$b, [..._cache[0] || (_cache[0] = [
    createStaticVNode('<path fill="#fff" d="M0 4a4 4 0 0 1 4-4h126a4 4 0 0 1 4 4v76H0z"></path><rect width="26" height="50" x="6" y="16" fill="#F7F7F7" rx="4"></rect><rect width="17" height="9" x="10.5" y="28.5" fill="#fff" stroke="#EDEDED" rx="1.5"></rect><rect width="10" height="2" x="14" y="32" fill="#9C9C9F" opacity=".24" rx="1"></rect><rect width="17" height="9" x="10.5" y="40.5" fill="#fff" stroke="#EDEDED" rx="1.5"></rect><rect width="10" height="2" x="14" y="44" fill="#9C9C9F" opacity=".24" rx="1"></rect><rect width="17" height="9" x="10.5" y="52.5" fill="#fff" stroke="#EDEDED" rx="1.5"></rect><rect width="8" height="2" x="14" y="56" fill="#9C9C9F" opacity=".24" rx="1"></rect><rect width="14" height="4" x="10" y="20" fill="#9C9C9F" opacity=".2" rx="2"></rect><rect width="26" height="54" x="38" y="16" fill="#F7F7F7" rx="4"></rect><rect width="17" height="17" x="42.5" y="28.5" fill="#fff" stroke="#EDEDED" rx="1.5"></rect><rect width="8" height="2" x="46" y="40" fill="#9C9C9F" opacity=".24" rx="1"></rect><rect width="10" height="6" x="46" y="32" fill="#2BC3F1" rx="2"></rect><rect width="17" height="17" x="42.5" y="48.5" fill="#fff" stroke="#EDEDED" rx="1.5"></rect><rect width="8" height="2" x="46" y="60" fill="#9C9C9F" opacity=".24" rx="1"></rect><rect width="10" height="6" x="46" y="52" fill="#2BC3F1" rx="2"></rect><rect width="14" height="4" x="42" y="20" fill="#9C9C9F" opacity=".2" rx="2"></rect><rect width="26" height="50" x="70" y="16" fill="#F7F7F7" rx="4"></rect><rect width="17" height="9" x="74.5" y="28.5" fill="#fff" stroke="#EDEDED" rx="1.5"></rect><rect width="10" height="2" x="78" y="32" fill="#9C9C9F" opacity=".24" rx="1"></rect><rect width="17" height="9" x="74.5" y="40.5" fill="#fff" stroke="#EDEDED" rx="1.5"></rect><rect width="8" height="2" x="78" y="44" fill="#9C9C9F" opacity=".24" rx="1"></rect><rect width="17" height="9" x="74.5" y="52.5" fill="#fff" stroke="#EDEDED" rx="1.5"></rect><rect width="10" height="2" x="78" y="56" fill="#9C9C9F" opacity=".24" rx="1"></rect><rect width="14" height="4" x="74" y="20" fill="#9C9C9F" opacity=".2" rx="2"></rect><rect width="26" height="58" x="102" y="16" fill="#F7F7F7" rx="4"></rect><rect width="17" height="17" x="106.5" y="28.5" fill="#fff" stroke="#EDEDED" rx="1.5"></rect><rect width="8" height="2" x="110" y="40" fill="#9C9C9F" opacity=".24" rx="1"></rect><rect width="10" height="6" x="110" y="32" fill="#2BC3F1" rx="2"></rect><rect width="17" height="9" x="106.5" y="48.5" fill="#fff" stroke="#EDEDED" rx="1.5"></rect><rect width="10" height="2" x="110" y="52" fill="#9C9C9F" opacity=".24" rx="1"></rect><rect width="17" height="9" x="106.5" y="60.5" fill="#fff" stroke="#EDEDED" rx="1.5"></rect><rect width="8" height="2" x="110" y="64" fill="#9C9C9F" opacity=".24" rx="1"></rect><rect width="14" height="4" x="106" y="20" fill="#9C9C9F" opacity=".2" rx="2"></rect><path fill="#2BC3F1" d="M0 4a4 4 0 0 1 4-4h126a4 4 0 0 1 4 4v6H0z" opacity=".24"></path><rect width="40" height="4" x="47" y="3" fill="#fff" opacity=".64" rx="2"></rect>', 36)
  ])]);
}
const template_illustration_kanban_blue = { render: render$b };
const __vite_glob_0_18 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: template_illustration_kanban_blue,
  render: render$b
}, Symbol.toStringTag, { value: "Module" }));
const _hoisted_1$a = {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 134 80"
};
function render$a(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$a, [..._cache[0] || (_cache[0] = [
    createStaticVNode('<path fill="#fff" d="M0 4a4 4 0 0 1 4-4h126a4 4 0 0 1 4 4v76H0z"></path><rect width="26" height="50" x="6" y="16" fill="#F7F7F7" rx="4"></rect><rect width="17" height="9" x="10.5" y="28.5" fill="#fff" stroke="#EDEDED" rx="1.5"></rect><rect width="10" height="2" x="14" y="32" fill="#9C9C9F" opacity=".24" rx="1"></rect><rect width="17" height="9" x="10.5" y="40.5" fill="#fff" stroke="#EDEDED" rx="1.5"></rect><rect width="10" height="2" x="14" y="44" fill="#9C9C9F" opacity=".24" rx="1"></rect><rect width="17" height="9" x="10.5" y="52.5" fill="#fff" stroke="#EDEDED" rx="1.5"></rect><rect width="8" height="2" x="14" y="56" fill="#9C9C9F" opacity=".24" rx="1"></rect><rect width="14" height="4" x="10" y="20" fill="#9C9C9F" opacity=".2" rx="2"></rect><rect width="26" height="54" x="38" y="16" fill="#F7F7F7" rx="4"></rect><rect width="17" height="17" x="42.5" y="28.5" fill="#fff" stroke="#EDEDED" rx="1.5"></rect><rect width="8" height="2" x="46" y="40" fill="#9C9C9F" opacity=".24" rx="1"></rect><rect width="10" height="6" x="46" y="32" fill="#12D452" rx="2"></rect><rect width="17" height="17" x="42.5" y="48.5" fill="#fff" stroke="#EDEDED" rx="1.5"></rect><rect width="8" height="2" x="46" y="60" fill="#9C9C9F" opacity=".24" rx="1"></rect><rect width="10" height="6" x="46" y="52" fill="#12D452" rx="2"></rect><rect width="14" height="4" x="42" y="20" fill="#9C9C9F" opacity=".2" rx="2"></rect><rect width="26" height="50" x="70" y="16" fill="#F7F7F7" rx="4"></rect><rect width="17" height="9" x="74.5" y="28.5" fill="#fff" stroke="#EDEDED" rx="1.5"></rect><rect width="10" height="2" x="78" y="32" fill="#9C9C9F" opacity=".24" rx="1"></rect><rect width="17" height="9" x="74.5" y="40.5" fill="#fff" stroke="#EDEDED" rx="1.5"></rect><rect width="8" height="2" x="78" y="44" fill="#9C9C9F" opacity=".24" rx="1"></rect><rect width="17" height="9" x="74.5" y="52.5" fill="#fff" stroke="#EDEDED" rx="1.5"></rect><rect width="10" height="2" x="78" y="56" fill="#9C9C9F" opacity=".24" rx="1"></rect><rect width="14" height="4" x="74" y="20" fill="#9C9C9F" opacity=".2" rx="2"></rect><rect width="26" height="58" x="102" y="16" fill="#F7F7F7" rx="4"></rect><rect width="17" height="17" x="106.5" y="28.5" fill="#fff" stroke="#EDEDED" rx="1.5"></rect><rect width="8" height="2" x="110" y="40" fill="#9C9C9F" opacity=".24" rx="1"></rect><rect width="10" height="6" x="110" y="32" fill="#12D452" rx="2"></rect><rect width="17" height="9" x="106.5" y="48.5" fill="#fff" stroke="#EDEDED" rx="1.5"></rect><rect width="10" height="2" x="110" y="52" fill="#9C9C9F" opacity=".24" rx="1"></rect><rect width="17" height="9" x="106.5" y="60.5" fill="#fff" stroke="#EDEDED" rx="1.5"></rect><rect width="8" height="2" x="110" y="64" fill="#9C9C9F" opacity=".24" rx="1"></rect><rect width="14" height="4" x="106" y="20" fill="#9C9C9F" opacity=".2" rx="2"></rect><path fill="#12D452" d="M0 4a4 4 0 0 1 4-4h126a4 4 0 0 1 4 4v6H0z" opacity=".24"></path><rect width="40" height="4" x="47" y="3" fill="#fff" opacity=".64" rx="2"></rect>', 36)
  ])]);
}
const template_illustration_kanban_green = { render: render$a };
const __vite_glob_0_19 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: template_illustration_kanban_green,
  render: render$a
}, Symbol.toStringTag, { value: "Module" }));
const _hoisted_1$9 = {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 134 80"
};
function render$9(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$9, [..._cache[0] || (_cache[0] = [
    createStaticVNode('<path fill="#fff" d="M0 4a4 4 0 0 1 4-4h126a4 4 0 0 1 4 4v76H0z"></path><rect width="26" height="50" x="6" y="16" fill="#F7F7F7" rx="4"></rect><rect width="17" height="9" x="10.5" y="28.5" fill="#fff" stroke="#EDEDED" rx="1.5"></rect><rect width="10" height="2" x="14" y="32" fill="#9C9C9F" opacity=".24" rx="1"></rect><rect width="17" height="9" x="10.5" y="40.5" fill="#fff" stroke="#EDEDED" rx="1.5"></rect><rect width="10" height="2" x="14" y="44" fill="#9C9C9F" opacity=".24" rx="1"></rect><rect width="17" height="9" x="10.5" y="52.5" fill="#fff" stroke="#EDEDED" rx="1.5"></rect><rect width="8" height="2" x="14" y="56" fill="#9C9C9F" opacity=".24" rx="1"></rect><rect width="14" height="4" x="10" y="20" fill="#9C9C9F" opacity=".2" rx="2"></rect><rect width="26" height="54" x="38" y="16" fill="#F7F7F7" rx="4"></rect><rect width="17" height="17" x="42.5" y="28.5" fill="#fff" stroke="#EDEDED" rx="1.5"></rect><rect width="8" height="2" x="46" y="40" fill="#9C9C9F" opacity=".24" rx="1"></rect><rect width="10" height="6" x="46" y="32" fill="#E26AB0" rx="2"></rect><rect width="17" height="17" x="42.5" y="48.5" fill="#fff" stroke="#EDEDED" rx="1.5"></rect><rect width="8" height="2" x="46" y="60" fill="#9C9C9F" opacity=".24" rx="1"></rect><rect width="10" height="6" x="46" y="52" fill="#E26AB0" rx="2"></rect><rect width="14" height="4" x="42" y="20" fill="#9C9C9F" opacity=".2" rx="2"></rect><rect width="26" height="50" x="70" y="16" fill="#F7F7F7" rx="4"></rect><rect width="17" height="9" x="74.5" y="28.5" fill="#fff" stroke="#EDEDED" rx="1.5"></rect><rect width="10" height="2" x="78" y="32" fill="#9C9C9F" opacity=".24" rx="1"></rect><rect width="17" height="9" x="74.5" y="40.5" fill="#fff" stroke="#EDEDED" rx="1.5"></rect><rect width="8" height="2" x="78" y="44" fill="#9C9C9F" opacity=".24" rx="1"></rect><rect width="17" height="9" x="74.5" y="52.5" fill="#fff" stroke="#EDEDED" rx="1.5"></rect><rect width="10" height="2" x="78" y="56" fill="#9C9C9F" opacity=".24" rx="1"></rect><rect width="14" height="4" x="74" y="20" fill="#9C9C9F" opacity=".2" rx="2"></rect><rect width="26" height="58" x="102" y="16" fill="#F7F7F7" rx="4"></rect><rect width="17" height="17" x="106.5" y="28.5" fill="#fff" stroke="#EDEDED" rx="1.5"></rect><rect width="8" height="2" x="110" y="40" fill="#9C9C9F" opacity=".24" rx="1"></rect><rect width="10" height="6" x="110" y="32" fill="#E26AB0" rx="2"></rect><rect width="17" height="9" x="106.5" y="48.5" fill="#fff" stroke="#EDEDED" rx="1.5"></rect><rect width="10" height="2" x="110" y="52" fill="#9C9C9F" opacity=".24" rx="1"></rect><rect width="17" height="9" x="106.5" y="60.5" fill="#fff" stroke="#EDEDED" rx="1.5"></rect><rect width="8" height="2" x="110" y="64" fill="#9C9C9F" opacity=".24" rx="1"></rect><rect width="14" height="4" x="106" y="20" fill="#9C9C9F" opacity=".2" rx="2"></rect><path fill="#E26AB0" d="M0 4a4 4 0 0 1 4-4h126a4 4 0 0 1 4 4v6H0z" opacity=".24"></path><rect width="40" height="4" x="47" y="3" fill="#fff" opacity=".64" rx="2"></rect>', 36)
  ])]);
}
const template_illustration_kanban_magenta = { render: render$9 };
const __vite_glob_0_20 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: template_illustration_kanban_magenta,
  render: render$9
}, Symbol.toStringTag, { value: "Module" }));
const _hoisted_1$8 = {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 134 80"
};
function render$8(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$8, [..._cache[0] || (_cache[0] = [
    createStaticVNode('<path fill="#fff" d="M0 4a4 4 0 0 1 4-4h126a4 4 0 0 1 4 4v76H0z"></path><rect width="26" height="50" x="6" y="16" fill="#F7F7F7" rx="4"></rect><rect width="17" height="9" x="10.5" y="28.5" fill="#fff" stroke="#EDEDED" rx="1.5"></rect><rect width="10" height="2" x="14" y="32" fill="#9C9C9F" opacity=".24" rx="1"></rect><rect width="17" height="9" x="10.5" y="40.5" fill="#fff" stroke="#EDEDED" rx="1.5"></rect><rect width="10" height="2" x="14" y="44" fill="#9C9C9F" opacity=".24" rx="1"></rect><rect width="17" height="9" x="10.5" y="52.5" fill="#fff" stroke="#EDEDED" rx="1.5"></rect><rect width="8" height="2" x="14" y="56" fill="#9C9C9F" opacity=".24" rx="1"></rect><rect width="14" height="4" x="10" y="20" fill="#9C9C9F" opacity=".2" rx="2"></rect><rect width="26" height="54" x="38" y="16" fill="#F7F7F7" rx="4"></rect><rect width="17" height="17" x="42.5" y="28.5" fill="#fff" stroke="#EDEDED" rx="1.5"></rect><rect width="8" height="2" x="46" y="40" fill="#9C9C9F" opacity=".24" rx="1"></rect><rect width="10" height="6" x="46" y="32" fill="#AF50EA" rx="2"></rect><rect width="17" height="17" x="42.5" y="48.5" fill="#fff" stroke="#EDEDED" rx="1.5"></rect><rect width="8" height="2" x="46" y="60" fill="#9C9C9F" opacity=".24" rx="1"></rect><rect width="10" height="6" x="46" y="52" fill="#AF50EA" rx="2"></rect><rect width="14" height="4" x="42" y="20" fill="#9C9C9F" opacity=".2" rx="2"></rect><rect width="26" height="50" x="70" y="16" fill="#F7F7F7" rx="4"></rect><rect width="17" height="9" x="74.5" y="28.5" fill="#fff" stroke="#EDEDED" rx="1.5"></rect><rect width="10" height="2" x="78" y="32" fill="#9C9C9F" opacity=".24" rx="1"></rect><rect width="17" height="9" x="74.5" y="40.5" fill="#fff" stroke="#EDEDED" rx="1.5"></rect><rect width="8" height="2" x="78" y="44" fill="#9C9C9F" opacity=".24" rx="1"></rect><rect width="17" height="9" x="74.5" y="52.5" fill="#fff" stroke="#EDEDED" rx="1.5"></rect><rect width="10" height="2" x="78" y="56" fill="#9C9C9F" opacity=".24" rx="1"></rect><rect width="14" height="4" x="74" y="20" fill="#9C9C9F" opacity=".2" rx="2"></rect><rect width="26" height="58" x="102" y="16" fill="#F7F7F7" rx="4"></rect><rect width="17" height="17" x="106.5" y="28.5" fill="#fff" stroke="#EDEDED" rx="1.5"></rect><rect width="8" height="2" x="110" y="40" fill="#9C9C9F" opacity=".24" rx="1"></rect><rect width="10" height="6" x="110" y="32" fill="#AF50EA" rx="2"></rect><rect width="17" height="9" x="106.5" y="48.5" fill="#fff" stroke="#EDEDED" rx="1.5"></rect><rect width="10" height="2" x="110" y="52" fill="#9C9C9F" opacity=".24" rx="1"></rect><rect width="17" height="9" x="106.5" y="60.5" fill="#fff" stroke="#EDEDED" rx="1.5"></rect><rect width="8" height="2" x="110" y="64" fill="#9C9C9F" opacity=".24" rx="1"></rect><rect width="14" height="4" x="106" y="20" fill="#9C9C9F" opacity=".2" rx="2"></rect><path fill="#AF50EA" d="M0 4a4 4 0 0 1 4-4h126a4 4 0 0 1 4 4v6H0z" opacity=".24"></path><rect width="40" height="4" x="47" y="3" fill="#fff" opacity=".64" rx="2"></rect>', 36)
  ])]);
}
const template_illustration_kanban_purple = { render: render$8 };
const __vite_glob_0_21 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: template_illustration_kanban_purple,
  render: render$8
}, Symbol.toStringTag, { value: "Module" }));
const _hoisted_1$7 = {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 134 80"
};
function render$7(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$7, [..._cache[0] || (_cache[0] = [
    createStaticVNode('<path fill="#fff" d="M0 4a4 4 0 0 1 4-4h126a4 4 0 0 1 4 4v76H0z"></path><rect width="26" height="50" x="6" y="16" fill="#F7F7F7" rx="4"></rect><rect width="17" height="9" x="10.5" y="28.5" fill="#fff" stroke="#EDEDED" rx="1.5"></rect><rect width="10" height="2" x="14" y="32" fill="#9C9C9F" opacity=".24" rx="1"></rect><rect width="17" height="9" x="10.5" y="40.5" fill="#fff" stroke="#EDEDED" rx="1.5"></rect><rect width="10" height="2" x="14" y="44" fill="#9C9C9F" opacity=".24" rx="1"></rect><rect width="17" height="9" x="10.5" y="52.5" fill="#fff" stroke="#EDEDED" rx="1.5"></rect><rect width="8" height="2" x="14" y="56" fill="#9C9C9F" opacity=".24" rx="1"></rect><rect width="14" height="4" x="10" y="20" fill="#9C9C9F" opacity=".2" rx="2"></rect><rect width="26" height="54" x="38" y="16" fill="#F7F7F7" rx="4"></rect><rect width="17" height="17" x="42.5" y="28.5" fill="#fff" stroke="#EDEDED" rx="1.5"></rect><rect width="8" height="2" x="46" y="40" fill="#9C9C9F" opacity=".24" rx="1"></rect><rect width="10" height="6" x="46" y="32" fill="#FF5A44" rx="2"></rect><rect width="17" height="17" x="42.5" y="48.5" fill="#fff" stroke="#EDEDED" rx="1.5"></rect><rect width="8" height="2" x="46" y="60" fill="#9C9C9F" opacity=".24" rx="1"></rect><rect width="10" height="6" x="46" y="52" fill="#FF5A44" rx="2"></rect><rect width="14" height="4" x="42" y="20" fill="#9C9C9F" opacity=".2" rx="2"></rect><rect width="26" height="50" x="70" y="16" fill="#F7F7F7" rx="4"></rect><rect width="17" height="9" x="74.5" y="28.5" fill="#fff" stroke="#EDEDED" rx="1.5"></rect><rect width="10" height="2" x="78" y="32" fill="#9C9C9F" opacity=".24" rx="1"></rect><rect width="17" height="9" x="74.5" y="40.5" fill="#fff" stroke="#EDEDED" rx="1.5"></rect><rect width="8" height="2" x="78" y="44" fill="#9C9C9F" opacity=".24" rx="1"></rect><rect width="17" height="9" x="74.5" y="52.5" fill="#fff" stroke="#EDEDED" rx="1.5"></rect><rect width="10" height="2" x="78" y="56" fill="#9C9C9F" opacity=".24" rx="1"></rect><rect width="14" height="4" x="74" y="20" fill="#9C9C9F" opacity=".2" rx="2"></rect><rect width="26" height="58" x="102" y="16" fill="#F7F7F7" rx="4"></rect><rect width="17" height="17" x="106.5" y="28.5" fill="#fff" stroke="#EDEDED" rx="1.5"></rect><rect width="8" height="2" x="110" y="40" fill="#9C9C9F" opacity=".24" rx="1"></rect><rect width="10" height="6" x="110" y="32" fill="#FF5A44" rx="2"></rect><rect width="17" height="9" x="106.5" y="48.5" fill="#fff" stroke="#EDEDED" rx="1.5"></rect><rect width="10" height="2" x="110" y="52" fill="#9C9C9F" opacity=".24" rx="1"></rect><rect width="17" height="9" x="106.5" y="60.5" fill="#fff" stroke="#EDEDED" rx="1.5"></rect><rect width="8" height="2" x="110" y="64" fill="#9C9C9F" opacity=".24" rx="1"></rect><rect width="14" height="4" x="106" y="20" fill="#9C9C9F" opacity=".2" rx="2"></rect><path fill="#FF5A44" d="M0 4a4 4 0 0 1 4-4h126a4 4 0 0 1 4 4v6H0z" opacity=".24"></path><rect width="40" height="4" x="47" y="3" fill="#fff" opacity=".64" rx="2"></rect>', 36)
  ])]);
}
const template_illustration_kanban_red = { render: render$7 };
const __vite_glob_0_22 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: template_illustration_kanban_red,
  render: render$7
}, Symbol.toStringTag, { value: "Module" }));
const _hoisted_1$6 = {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 134 80"
};
function render$6(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$6, [..._cache[0] || (_cache[0] = [
    createStaticVNode('<path fill="#fff" d="M0 4a4 4 0 0 1 4-4h126a4 4 0 0 1 4 4v76H0z"></path><rect width="26" height="50" x="6" y="16" fill="#F7F7F7" rx="4"></rect><rect width="17" height="9" x="10.5" y="28.5" fill="#fff" stroke="#EDEDED" rx="1.5"></rect><rect width="10" height="2" x="14" y="32" fill="#9C9C9F" opacity=".24" rx="1"></rect><rect width="17" height="9" x="10.5" y="40.5" fill="#fff" stroke="#EDEDED" rx="1.5"></rect><rect width="10" height="2" x="14" y="44" fill="#9C9C9F" opacity=".24" rx="1"></rect><rect width="17" height="9" x="10.5" y="52.5" fill="#fff" stroke="#EDEDED" rx="1.5"></rect><rect width="8" height="2" x="14" y="56" fill="#9C9C9F" opacity=".24" rx="1"></rect><rect width="14" height="4" x="10" y="20" fill="#9C9C9F" opacity=".2" rx="2"></rect><rect width="26" height="54" x="38" y="16" fill="#F7F7F7" rx="4"></rect><rect width="17" height="17" x="42.5" y="28.5" fill="#fff" stroke="#EDEDED" rx="1.5"></rect><rect width="8" height="2" x="46" y="40" fill="#9C9C9F" opacity=".24" rx="1"></rect><rect width="10" height="6" x="46" y="32" fill="#FFC744" rx="2"></rect><rect width="17" height="17" x="42.5" y="48.5" fill="#fff" stroke="#EDEDED" rx="1.5"></rect><rect width="8" height="2" x="46" y="60" fill="#9C9C9F" opacity=".24" rx="1"></rect><rect width="10" height="6" x="46" y="52" fill="#FFC744" rx="2"></rect><rect width="14" height="4" x="42" y="20" fill="#9C9C9F" opacity=".2" rx="2"></rect><rect width="26" height="50" x="70" y="16" fill="#F7F7F7" rx="4"></rect><rect width="17" height="9" x="74.5" y="28.5" fill="#fff" stroke="#EDEDED" rx="1.5"></rect><rect width="10" height="2" x="78" y="32" fill="#9C9C9F" opacity=".24" rx="1"></rect><rect width="17" height="9" x="74.5" y="40.5" fill="#fff" stroke="#EDEDED" rx="1.5"></rect><rect width="8" height="2" x="78" y="44" fill="#9C9C9F" opacity=".24" rx="1"></rect><rect width="17" height="9" x="74.5" y="52.5" fill="#fff" stroke="#EDEDED" rx="1.5"></rect><rect width="10" height="2" x="78" y="56" fill="#9C9C9F" opacity=".24" rx="1"></rect><rect width="14" height="4" x="74" y="20" fill="#9C9C9F" opacity=".2" rx="2"></rect><rect width="26" height="58" x="102" y="16" fill="#F7F7F7" rx="4"></rect><rect width="17" height="17" x="106.5" y="28.5" fill="#fff" stroke="#EDEDED" rx="1.5"></rect><rect width="8" height="2" x="110" y="40" fill="#9C9C9F" opacity=".24" rx="1"></rect><rect width="10" height="6" x="110" y="32" fill="#FFC744" rx="2"></rect><rect width="17" height="9" x="106.5" y="48.5" fill="#fff" stroke="#EDEDED" rx="1.5"></rect><rect width="10" height="2" x="110" y="52" fill="#9C9C9F" opacity=".24" rx="1"></rect><rect width="17" height="9" x="106.5" y="60.5" fill="#fff" stroke="#EDEDED" rx="1.5"></rect><rect width="8" height="2" x="110" y="64" fill="#9C9C9F" opacity=".24" rx="1"></rect><rect width="14" height="4" x="106" y="20" fill="#9C9C9F" opacity=".2" rx="2"></rect><path fill="#FFC744" d="M0 4a4 4 0 0 1 4-4h126a4 4 0 0 1 4 4v6H0z" opacity=".36"></path><rect width="40" height="4" x="47" y="3" fill="#fff" opacity=".64" rx="2"></rect>', 36)
  ])]);
}
const template_illustration_kanban_yellow = { render: render$6 };
const __vite_glob_0_23 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: template_illustration_kanban_yellow,
  render: render$6
}, Symbol.toStringTag, { value: "Module" }));
const _hoisted_1$5 = {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 134 80"
};
function render$5(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$5, [..._cache[0] || (_cache[0] = [
    createStaticVNode('<path fill="#fff" d="M0 4a4 4 0 0 1 4-4h126a4 4 0 0 1 4 4v76H0z"></path><rect width="121" height="73" x="6.5" y="16.5" fill="#fff" stroke="#EDEDED" opacity=".8" rx="3.5"></rect><path fill="#EDEDED" d="M54 16h1v120h-1zM112 16h1v120h-1z" opacity=".8"></path><rect width="24" height="4" x="10" y="20" fill="#EDEDED" rx="2"></rect><rect width="24" height="4" x="65" y="20" fill="#F5F5F5" rx="2"></rect><rect width="4" height="4" x="118" y="20" fill="#EDEDED" rx="2"></rect><rect width="4" height="4" x="59" y="20" fill="#EDEDED" rx="2"></rect><path fill="#EDEDED" d="M7 28h121v1H7z" opacity=".8"></path><rect width="32" height="4" x="10" y="33" fill="#2BC3F1" rx="2"></rect><rect width="32" height="4" x="65" y="33" fill="#2BC3F1" opacity=".24" rx="2"></rect><rect width="4" height="4" x="118" y="33" fill="#2BC3F1" rx="2"></rect><rect width="2" height="2" x="119" y="34" fill="#fff" rx="1"></rect><rect width="4" height="4" x="59" y="33" fill="#2BC3F1" opacity=".4" rx="2"></rect><path fill="#EDEDED" d="M7 41h121v1H7z" opacity=".8"></path><rect width="28" height="4" x="10" y="46" fill="#EDEDED" rx="2"></rect><rect width="24" height="4" x="65" y="46" fill="#F5F5F5" rx="2"></rect><rect width="4" height="4" x="118" y="46" fill="#EDEDED" rx="2"></rect><rect width="4" height="4" x="59" y="46" fill="#EDEDED" rx="2"></rect><path fill="#EDEDED" d="M7 54h121v1H7z" opacity=".8"></path><rect width="24" height="4" x="10" y="59" fill="#2BC3F1" rx="2"></rect><rect width="28" height="4" x="65" y="59" fill="#2BC3F1" opacity=".24" rx="2"></rect><rect width="4" height="4" x="118" y="59" fill="#2BC3F1" rx="2"></rect><rect width="2" height="2" x="119" y="60" fill="#fff" rx="1"></rect><rect width="4" height="4" x="59" y="59" fill="#2BC3F1" opacity=".4" rx="2"></rect><path fill="#EDEDED" d="M7 67h121v1H7z" opacity=".8"></path><rect width="32" height="4" x="10" y="72" fill="#EDEDED" rx="2"></rect><rect width="24" height="4" x="65" y="72" fill="#F5F5F5" rx="2"></rect><rect width="4" height="4" x="118" y="72" fill="#EDEDED" rx="2"></rect><rect width="4" height="4" x="59" y="72" fill="#EDEDED" rx="2"></rect><path fill="#2BC3F1" d="M0 4a4 4 0 0 1 4-4h126a4 4 0 0 1 4 4v6H0z" opacity=".24"></path><rect width="40" height="4" x="47" y="3" fill="#fff" opacity=".64" rx="2"></rect>', 31)
  ])]);
}
const template_illustration_table_blue = { render: render$5 };
const __vite_glob_0_24 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: template_illustration_table_blue,
  render: render$5
}, Symbol.toStringTag, { value: "Module" }));
const _hoisted_1$4 = {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 134 80"
};
function render$4(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$4, [..._cache[0] || (_cache[0] = [
    createStaticVNode('<path fill="#fff" d="M0 4a4 4 0 0 1 4-4h126a4 4 0 0 1 4 4v76H0z"></path><rect width="121" height="73" x="6.5" y="16.5" fill="#fff" stroke="#EDEDED" opacity=".8" rx="3.5"></rect><path fill="#EDEDED" d="M54 16h1v120h-1zM112 16h1v120h-1z" opacity=".8"></path><rect width="24" height="4" x="10" y="20" fill="#EDEDED" rx="2"></rect><rect width="24" height="4" x="65" y="20" fill="#F5F5F5" rx="2"></rect><rect width="4" height="4" x="118" y="20" fill="#EDEDED" rx="2"></rect><rect width="4" height="4" x="59" y="20" fill="#EDEDED" rx="2"></rect><path fill="#EDEDED" d="M7 28h121v1H7z" opacity=".8"></path><rect width="32" height="4" x="10" y="33" fill="#12D452" rx="2"></rect><rect width="32" height="4" x="65" y="33" fill="#12D452" opacity=".24" rx="2"></rect><rect width="4" height="4" x="118" y="33" fill="#12D452" rx="2"></rect><rect width="2" height="2" x="119" y="34" fill="#fff" rx="1"></rect><rect width="4" height="4" x="59" y="33" fill="#12D452" opacity=".4" rx="2"></rect><path fill="#EDEDED" d="M7 41h121v1H7z" opacity=".8"></path><rect width="28" height="4" x="10" y="46" fill="#EDEDED" rx="2"></rect><rect width="24" height="4" x="65" y="46" fill="#F5F5F5" rx="2"></rect><rect width="4" height="4" x="118" y="46" fill="#EDEDED" rx="2"></rect><rect width="4" height="4" x="59" y="46" fill="#EDEDED" rx="2"></rect><path fill="#EDEDED" d="M7 54h121v1H7z" opacity=".8"></path><rect width="24" height="4" x="10" y="59" fill="#12D452" rx="2"></rect><rect width="28" height="4" x="65" y="59" fill="#12D452" opacity=".24" rx="2"></rect><rect width="4" height="4" x="118" y="59" fill="#12D452" rx="2"></rect><rect width="2" height="2" x="119" y="60" fill="#fff" rx="1"></rect><rect width="4" height="4" x="59" y="59" fill="#12D452" opacity=".4" rx="2"></rect><path fill="#EDEDED" d="M7 67h121v1H7z" opacity=".8"></path><rect width="32" height="4" x="10" y="72" fill="#EDEDED" rx="2"></rect><rect width="24" height="4" x="65" y="72" fill="#F5F5F5" rx="2"></rect><rect width="4" height="4" x="118" y="72" fill="#EDEDED" rx="2"></rect><rect width="4" height="4" x="59" y="72" fill="#EDEDED" rx="2"></rect><path fill="#12D452" d="M0 4a4 4 0 0 1 4-4h126a4 4 0 0 1 4 4v6H0z" opacity=".24"></path><rect width="40" height="4" x="47" y="3" fill="#fff" opacity=".64" rx="2"></rect>', 31)
  ])]);
}
const template_illustration_table_green = { render: render$4 };
const __vite_glob_0_25 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: template_illustration_table_green,
  render: render$4
}, Symbol.toStringTag, { value: "Module" }));
const _hoisted_1$3 = {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 134 80"
};
function render$3(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$3, [..._cache[0] || (_cache[0] = [
    createStaticVNode('<path fill="#fff" d="M0 4a4 4 0 0 1 4-4h126a4 4 0 0 1 4 4v76H0z"></path><rect width="121" height="73" x="6.5" y="16.5" fill="#fff" stroke="#EDEDED" opacity=".8" rx="3.5"></rect><path fill="#EDEDED" d="M54 16h1v120h-1zM112 16h1v120h-1z" opacity=".8"></path><rect width="24" height="4" x="10" y="20" fill="#EDEDED" rx="2"></rect><rect width="24" height="4" x="65" y="20" fill="#F5F5F5" rx="2"></rect><rect width="4" height="4" x="118" y="20" fill="#EDEDED" rx="2"></rect><rect width="4" height="4" x="59" y="20" fill="#EDEDED" rx="2"></rect><path fill="#EDEDED" d="M7 28h121v1H7z" opacity=".8"></path><rect width="32" height="4" x="10" y="33" fill="#E26AB0" rx="2"></rect><rect width="32" height="4" x="65" y="33" fill="#E26AB0" opacity=".24" rx="2"></rect><rect width="4" height="4" x="118" y="33" fill="#E26AB0" rx="2"></rect><rect width="2" height="2" x="119" y="34" fill="#fff" rx="1"></rect><rect width="4" height="4" x="59" y="33" fill="#E26AB0" opacity=".4" rx="2"></rect><path fill="#EDEDED" d="M7 41h121v1H7z" opacity=".8"></path><rect width="28" height="4" x="10" y="46" fill="#EDEDED" rx="2"></rect><rect width="24" height="4" x="65" y="46" fill="#F5F5F5" rx="2"></rect><rect width="4" height="4" x="118" y="46" fill="#EDEDED" rx="2"></rect><rect width="4" height="4" x="59" y="46" fill="#EDEDED" rx="2"></rect><path fill="#EDEDED" d="M7 54h121v1H7z" opacity=".8"></path><rect width="24" height="4" x="10" y="59" fill="#E26AB0" rx="2"></rect><rect width="28" height="4" x="65" y="59" fill="#E26AB0" opacity=".24" rx="2"></rect><rect width="4" height="4" x="118" y="59" fill="#E26AB0" rx="2"></rect><rect width="2" height="2" x="119" y="60" fill="#fff" rx="1"></rect><rect width="4" height="4" x="59" y="59" fill="#E26AB0" opacity=".4" rx="2"></rect><path fill="#EDEDED" d="M7 67h121v1H7z" opacity=".8"></path><rect width="32" height="4" x="10" y="72" fill="#EDEDED" rx="2"></rect><rect width="24" height="4" x="65" y="72" fill="#F5F5F5" rx="2"></rect><rect width="4" height="4" x="118" y="72" fill="#EDEDED" rx="2"></rect><rect width="4" height="4" x="59" y="72" fill="#EDEDED" rx="2"></rect><path fill="#E26AB0" d="M0 4a4 4 0 0 1 4-4h126a4 4 0 0 1 4 4v6H0z" opacity=".24"></path><rect width="40" height="4" x="47" y="3" fill="#fff" opacity=".64" rx="2"></rect>', 31)
  ])]);
}
const template_illustration_table_magenta = { render: render$3 };
const __vite_glob_0_26 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: template_illustration_table_magenta,
  render: render$3
}, Symbol.toStringTag, { value: "Module" }));
const _hoisted_1$2 = {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 134 80"
};
function render$2(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$2, [..._cache[0] || (_cache[0] = [
    createStaticVNode('<path fill="#fff" d="M0 4a4 4 0 0 1 4-4h126a4 4 0 0 1 4 4v76H0z"></path><rect width="121" height="73" x="6.5" y="16.5" fill="#fff" stroke="#EDEDED" opacity=".8" rx="3.5"></rect><path fill="#EDEDED" d="M54 16h1v120h-1zM112 16h1v120h-1z" opacity=".8"></path><rect width="24" height="4" x="10" y="20" fill="#EDEDED" rx="2"></rect><rect width="24" height="4" x="65" y="20" fill="#F5F5F5" rx="2"></rect><rect width="4" height="4" x="118" y="20" fill="#EDEDED" rx="2"></rect><rect width="4" height="4" x="59" y="20" fill="#EDEDED" rx="2"></rect><path fill="#EDEDED" d="M7 28h121v1H7z" opacity=".8"></path><rect width="32" height="4" x="10" y="33" fill="#AF50EA" rx="2"></rect><rect width="32" height="4" x="65" y="33" fill="#AF50EA" opacity=".24" rx="2"></rect><rect width="4" height="4" x="118" y="33" fill="#AF50EA" rx="2"></rect><rect width="2" height="2" x="119" y="34" fill="#fff" rx="1"></rect><rect width="4" height="4" x="59" y="33" fill="#AF50EA" opacity=".4" rx="2"></rect><path fill="#EDEDED" d="M7 41h121v1H7z" opacity=".8"></path><rect width="28" height="4" x="10" y="46" fill="#EDEDED" rx="2"></rect><rect width="24" height="4" x="65" y="46" fill="#F5F5F5" rx="2"></rect><rect width="4" height="4" x="118" y="46" fill="#EDEDED" rx="2"></rect><rect width="4" height="4" x="59" y="46" fill="#EDEDED" rx="2"></rect><path fill="#EDEDED" d="M7 54h121v1H7z" opacity=".8"></path><rect width="24" height="4" x="10" y="59" fill="#AF50EA" rx="2"></rect><rect width="28" height="4" x="65" y="59" fill="#AF50EA" opacity=".24" rx="2"></rect><rect width="4" height="4" x="118" y="59" fill="#AF50EA" rx="2"></rect><rect width="2" height="2" x="119" y="60" fill="#fff" rx="1"></rect><rect width="4" height="4" x="59" y="59" fill="#AF50EA" opacity=".4" rx="2"></rect><path fill="#EDEDED" d="M7 67h121v1H7z" opacity=".8"></path><rect width="32" height="4" x="10" y="72" fill="#EDEDED" rx="2"></rect><rect width="24" height="4" x="65" y="72" fill="#F5F5F5" rx="2"></rect><rect width="4" height="4" x="118" y="72" fill="#EDEDED" rx="2"></rect><rect width="4" height="4" x="59" y="72" fill="#EDEDED" rx="2"></rect><path fill="#AF50EA" d="M0 4a4 4 0 0 1 4-4h126a4 4 0 0 1 4 4v6H0z" opacity=".36"></path><rect width="40" height="4" x="47" y="3" fill="#fff" opacity=".64" rx="2"></rect>', 31)
  ])]);
}
const template_illustration_table_purple = { render: render$2 };
const __vite_glob_0_27 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: template_illustration_table_purple,
  render: render$2
}, Symbol.toStringTag, { value: "Module" }));
const _hoisted_1$1 = {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 134 80"
};
function render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1, [..._cache[0] || (_cache[0] = [
    createStaticVNode('<path fill="#fff" d="M0 4a4 4 0 0 1 4-4h126a4 4 0 0 1 4 4v76H0z"></path><rect width="121" height="73" x="6.5" y="16.5" fill="#fff" stroke="#EDEDED" opacity=".8" rx="3.5"></rect><path fill="#EDEDED" d="M54 16h1v120h-1zM112 16h1v120h-1z" opacity=".8"></path><rect width="24" height="4" x="10" y="20" fill="#EDEDED" rx="2"></rect><rect width="24" height="4" x="65" y="20" fill="#F5F5F5" rx="2"></rect><rect width="4" height="4" x="118" y="20" fill="#EDEDED" rx="2"></rect><rect width="4" height="4" x="59" y="20" fill="#EDEDED" rx="2"></rect><path fill="#EDEDED" d="M7 28h121v1H7z" opacity=".8"></path><rect width="32" height="4" x="10" y="33" fill="#FF5A44" rx="2"></rect><rect width="32" height="4" x="65" y="33" fill="#FF5A44" opacity=".24" rx="2"></rect><rect width="4" height="4" x="118" y="33" fill="#FF5A44" rx="2"></rect><rect width="2" height="2" x="119" y="34" fill="#fff" rx="1"></rect><rect width="4" height="4" x="59" y="33" fill="#FF5A44" opacity=".4" rx="2"></rect><path fill="#EDEDED" d="M7 41h121v1H7z" opacity=".8"></path><rect width="28" height="4" x="10" y="46" fill="#EDEDED" rx="2"></rect><rect width="24" height="4" x="65" y="46" fill="#F5F5F5" rx="2"></rect><rect width="4" height="4" x="118" y="46" fill="#EDEDED" rx="2"></rect><rect width="4" height="4" x="59" y="46" fill="#EDEDED" rx="2"></rect><path fill="#EDEDED" d="M7 54h121v1H7z" opacity=".8"></path><rect width="24" height="4" x="10" y="59" fill="#FF5A44" rx="2"></rect><rect width="28" height="4" x="65" y="59" fill="#FF5A44" opacity=".24" rx="2"></rect><rect width="4" height="4" x="118" y="59" fill="#FF5A44" rx="2"></rect><rect width="2" height="2" x="119" y="60" fill="#fff" rx="1"></rect><rect width="4" height="4" x="59" y="59" fill="#FF5A44" opacity=".4" rx="2"></rect><path fill="#EDEDED" d="M7 67h121v1H7z" opacity=".8"></path><rect width="32" height="4" x="10" y="72" fill="#EDEDED" rx="2"></rect><rect width="24" height="4" x="65" y="72" fill="#F5F5F5" rx="2"></rect><rect width="4" height="4" x="118" y="72" fill="#EDEDED" rx="2"></rect><rect width="4" height="4" x="59" y="72" fill="#EDEDED" rx="2"></rect><path fill="#FF5A44" d="M0 4a4 4 0 0 1 4-4h126a4 4 0 0 1 4 4v6H0z" opacity=".24"></path><rect width="40" height="4" x="47" y="3" fill="#fff" opacity=".64" rx="2"></rect>', 31)
  ])]);
}
const template_illustration_table_red = { render: render$1 };
const __vite_glob_0_28 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: template_illustration_table_red,
  render: render$1
}, Symbol.toStringTag, { value: "Module" }));
const _hoisted_1 = {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 134 80"
};
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1, [..._cache[0] || (_cache[0] = [
    createStaticVNode('<path fill="#fff" d="M0 4a4 4 0 0 1 4-4h126a4 4 0 0 1 4 4v76H0z"></path><rect width="121" height="73" x="6.5" y="16.5" fill="#fff" stroke="#EDEDED" opacity=".8" rx="3.5"></rect><path fill="#EDEDED" d="M54 16h1v120h-1zM112 16h1v120h-1z" opacity=".8"></path><rect width="24" height="4" x="10" y="20" fill="#EDEDED" rx="2"></rect><rect width="24" height="4" x="65" y="20" fill="#F5F5F5" rx="2"></rect><rect width="4" height="4" x="118" y="20" fill="#EDEDED" rx="2"></rect><rect width="4" height="4" x="59" y="20" fill="#EDEDED" rx="2"></rect><path fill="#EDEDED" d="M7 28h121v1H7z" opacity=".8"></path><rect width="32" height="4" x="10" y="33" fill="#FFC744" rx="2"></rect><rect width="32" height="4" x="65" y="33" fill="#FFC744" opacity=".24" rx="2"></rect><rect width="4" height="4" x="118" y="33" fill="#FFC744" rx="2"></rect><rect width="2" height="2" x="119" y="34" fill="#fff" rx="1"></rect><rect width="4" height="4" x="59" y="33" fill="#FFC744" opacity=".4" rx="2"></rect><path fill="#EDEDED" d="M7 41h121v1H7z" opacity=".8"></path><rect width="28" height="4" x="10" y="46" fill="#EDEDED" rx="2"></rect><rect width="24" height="4" x="65" y="46" fill="#F5F5F5" rx="2"></rect><rect width="4" height="4" x="118" y="46" fill="#EDEDED" rx="2"></rect><rect width="4" height="4" x="59" y="46" fill="#EDEDED" rx="2"></rect><path fill="#EDEDED" d="M7 54h121v1H7z" opacity=".8"></path><rect width="24" height="4" x="10" y="59" fill="#FFC744" rx="2"></rect><rect width="28" height="4" x="65" y="59" fill="#FFC744" opacity=".24" rx="2"></rect><rect width="4" height="4" x="118" y="59" fill="#FFC744" rx="2"></rect><rect width="2" height="2" x="119" y="60" fill="#fff" rx="1"></rect><rect width="4" height="4" x="59" y="59" fill="#FFC744" opacity=".4" rx="2"></rect><path fill="#EDEDED" d="M7 67h121v1H7z" opacity=".8"></path><rect width="32" height="4" x="10" y="72" fill="#EDEDED" rx="2"></rect><rect width="24" height="4" x="65" y="72" fill="#F5F5F5" rx="2"></rect><rect width="4" height="4" x="118" y="72" fill="#EDEDED" rx="2"></rect><rect width="4" height="4" x="59" y="72" fill="#EDEDED" rx="2"></rect><path fill="#FFC744" d="M0 4a4 4 0 0 1 4-4h126a4 4 0 0 1 4 4v6H0z" opacity=".36"></path><rect width="40" height="4" x="47" y="3" fill="#fff" opacity=".64" rx="2"></rect>', 31)
  ])]);
}
const template_illustration_table_yellow = { render };
const __vite_glob_0_29 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: template_illustration_table_yellow,
  render
}, Symbol.toStringTag, { value: "Module" }));
const COLORS = ["green", "red", "blue", "magenta", "purple", "yellow"];
const TYPES = ["calendar", "table", "kanban", "gallery", "form"];
const _sfc_main$3 = {
  __name: "TemplateIllustration",
  __ssrInlineRender: true,
  props: {
    color: {
      type: String,
      default: "green",
      validator: (v) => COLORS.includes(v)
    },
    type: {
      type: String,
      default: "table",
      validator: (v) => TYPES.includes(v)
    }
  },
  setup(__props) {
    const props = __props;
    const modules = /* @__PURE__ */ Object.assign({
      "/modules/core/assets/images/template_illustration_calendar_blue.svg": __vite_glob_0_0,
      "/modules/core/assets/images/template_illustration_calendar_green.svg": __vite_glob_0_1,
      "/modules/core/assets/images/template_illustration_calendar_magenta.svg": __vite_glob_0_2,
      "/modules/core/assets/images/template_illustration_calendar_purple.svg": __vite_glob_0_3,
      "/modules/core/assets/images/template_illustration_calendar_red.svg": __vite_glob_0_4,
      "/modules/core/assets/images/template_illustration_calendar_yellow.svg": __vite_glob_0_5,
      "/modules/core/assets/images/template_illustration_form_blue.svg": __vite_glob_0_6,
      "/modules/core/assets/images/template_illustration_form_green.svg": __vite_glob_0_7,
      "/modules/core/assets/images/template_illustration_form_magenta.svg": __vite_glob_0_8,
      "/modules/core/assets/images/template_illustration_form_purple.svg": __vite_glob_0_9,
      "/modules/core/assets/images/template_illustration_form_red.svg": __vite_glob_0_10,
      "/modules/core/assets/images/template_illustration_form_yellow.svg": __vite_glob_0_11,
      "/modules/core/assets/images/template_illustration_gallery_blue.svg": __vite_glob_0_12,
      "/modules/core/assets/images/template_illustration_gallery_green.svg": __vite_glob_0_13,
      "/modules/core/assets/images/template_illustration_gallery_magenta.svg": __vite_glob_0_14,
      "/modules/core/assets/images/template_illustration_gallery_purple.svg": __vite_glob_0_15,
      "/modules/core/assets/images/template_illustration_gallery_red.svg": __vite_glob_0_16,
      "/modules/core/assets/images/template_illustration_gallery_yellow.svg": __vite_glob_0_17,
      "/modules/core/assets/images/template_illustration_kanban_blue.svg": __vite_glob_0_18,
      "/modules/core/assets/images/template_illustration_kanban_green.svg": __vite_glob_0_19,
      "/modules/core/assets/images/template_illustration_kanban_magenta.svg": __vite_glob_0_20,
      "/modules/core/assets/images/template_illustration_kanban_purple.svg": __vite_glob_0_21,
      "/modules/core/assets/images/template_illustration_kanban_red.svg": __vite_glob_0_22,
      "/modules/core/assets/images/template_illustration_kanban_yellow.svg": __vite_glob_0_23,
      "/modules/core/assets/images/template_illustration_table_blue.svg": __vite_glob_0_24,
      "/modules/core/assets/images/template_illustration_table_green.svg": __vite_glob_0_25,
      "/modules/core/assets/images/template_illustration_table_magenta.svg": __vite_glob_0_26,
      "/modules/core/assets/images/template_illustration_table_purple.svg": __vite_glob_0_27,
      "/modules/core/assets/images/template_illustration_table_red.svg": __vite_glob_0_28,
      "/modules/core/assets/images/template_illustration_table_yellow.svg": __vite_glob_0_29
    });
    function buildVariants(types, colors, files) {
      const out = {};
      for (const type of types) {
        out[type] = {};
        for (const color of colors) {
          const filename = `template_illustration_${type}_${color}.svg`;
          const entry = Object.entries(files).find(
            ([key]) => key.endsWith(filename)
          );
          if (!entry) {
            throw new Error(`Missing SVG file for ${filename}`);
          }
          const mod = entry[1];
          out[type][color] = mod.default;
        }
      }
      return out;
    }
    const variants = buildVariants(TYPES, COLORS, modules);
    const SvgComponent = computed(() => variants[props.type][props.color]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["template__illustration", `template__illustration--${__props.color}`]
      }, _attrs))}><div class="template__illustration-image">`);
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(SvgComponent.value), null, null), _parent);
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("modules/core/components/template/TemplateIllustration.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _imports_0$1 = "data:image/svg+xml,%3csvg%20width='41'%20height='40'%20viewBox='0%200%2041%2040'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='0.5'%20width='40'%20height='40'%20rx='20'%20fill='%234E5CFE'%20fill-opacity='0.08'/%3e%3cpath%20d='M19.2773%2020L21.7218%2020'%20stroke='%234E5CFE'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M15%2014.5L26%2014.5'%20stroke='%234E5CFE'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M26%2018V23.5C26%2024.6046%2025.1046%2025.5%2024%2025.5H17C15.8954%2025.5%2015%2024.6046%2015%2023.5V18'%20stroke='%234E5CFE'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e";
const _sfc_main$2 = {
  components: {
    TemplateIllustration: _sfc_main$3
  },
  props: {
    template: {
      type: Object,
      default: () => ({})
    },
    viewMore: {
      type: Boolean,
      default: false
    }
  },
  emits: ["click"]
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_TemplateIllustration = resolveComponent("TemplateIllustration");
  _push(`<a${ssrRenderAttrs(mergeProps({ class: "template__card" }, _attrs))}>`);
  if (!$props.viewMore) {
    _push(ssrRenderComponent(_component_TemplateIllustration, {
      color: $props.template.color,
      type: $props.template.type
    }, null, _parent));
  } else {
    _push(`<div class="template__card-more"><img class="template__card-more-icon"${ssrRenderAttr("src", _imports_0$1)}${ssrRenderAttr("alt", _ctx.$t("templateCard.viewMore"))}></div>`);
  }
  _push(`<h4 class="template__card-name">`);
  if (!$props.viewMore) {
    _push(`<span>${ssrInterpolate($props.template.name)}</span>`);
  } else {
    _push(`<span>${ssrInterpolate(_ctx.$t("templateCard.viewMore"))}</span>`);
  }
  _push(`</h4></a>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("modules/core/components/template/TemplateCard.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const TemplateCard = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]);
const editWorkspace = {
  methods: {
    setLoading(workspace, value) {
      this.$store.dispatch("workspace/setItemLoading", { workspace, value });
    },
    enableRename() {
      this.$refs.context.hide();
      this.$refs.rename.edit();
    },
    async renameWorkspace(workspace, event) {
      if (!nameContainsNoUrl(event.value)) {
        this.$refs.rename.set(event.oldValue);
        this.$store.dispatch("toast/error", {
          title: this.$t("editWorkspace.invalidNameTitle"),
          message: this.$t("error.nameContainsUrl")
        });
        return;
      }
      this.setLoading(workspace, true);
      try {
        await this.$store.dispatch("workspace/update", {
          workspace,
          values: {
            name: event.value
          }
        });
      } catch (error2) {
        this.$refs.rename.set(event.oldValue);
        notifyIf(error2, "workspace");
      }
      this.setLoading(workspace, false);
    }
  }
};
const _imports_0 = "" + buildAssetsURL("dashboard_alert_image.DS8pLx7x.png");
const _imports_1 = "" + buildAssetsURL("dashboard_alert_image_2x.oKdyYsiY.png");
const helpDisplayCookieName = "baserow_dashboard_alert_closed_v2";
const _sfc_main$1 = {
  __name: "DashboardHelp",
  __ssrInlineRender: true,
  setup(__props) {
    const config = useRuntimeConfig();
    const showAlert = ref(true);
    const closedCookie = useCookie(getCookieName(config, helpDisplayCookieName), {
      maxAge: 60 * 60 * 24 * 182,
      // 6 months
      path: "/"
    });
    const displayAlert = computed(() => showAlert.value && !closedCookie.value);
    const handleAlertClose = () => {
      showAlert.value = false;
      closedCookie.value = true;
    };
    const { t } = useI18n();
    const twitterUrl = computed(
      () => `https://twitter.com/intent/tweet?url=https://baserow.io&hashtags=opensource,nocode,database,baserow&text=${encodeURI(
        t("dashboard.tweetContent")
      )}`
    );
    const redditUrl = computed(
      () => `https://www.reddit.com/submit?url=https://baserow.io&title=${encodeURI(
        t("dashboard.redditTitle")
      )}`
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Alert = resolveComponent("Alert");
      const _component_Button = resolveComponent("Button");
      const _component_ButtonIcon = resolveComponent("ButtonIcon");
      const _directive_tooltip = resolveDirective("tooltip");
      if (unref(displayAlert)) {
        _push(ssrRenderComponent(_component_Alert, mergeProps({
          type: "blank",
          "close-button": "",
          class: "dashboard__help",
          width: 396,
          onClose: handleAlertClose
        }, _attrs), {
          image: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<img${ssrRenderAttr("src", _imports_0)}${ssrRenderAttr("srcset", _imports_1 + " 2x")}${_scopeId}>`);
            } else {
              return [
                createVNode("img", {
                  src: _imports_0,
                  srcset: _imports_1 + " 2x"
                })
              ];
            }
          }),
          title: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<h4${_scopeId}>${ssrInterpolate(_ctx.$t("dashboard.alertTitle"))}</h4>`);
            } else {
              return [
                createVNode("h4", null, toDisplayString(_ctx.$t("dashboard.alertTitle")), 1)
              ];
            }
          }),
          actions: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_Button, {
                tag: "a",
                href: "https://github.com/baserow/baserow",
                target: "_blank",
                rel: "noopener noreferrer",
                type: "secondary",
                icon: "iconoir-github"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.$t("dashboard.starOnGitHub"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.$t("dashboard.starOnGitHub")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_ButtonIcon, mergeProps({
                tag: "a",
                "tooltip-position": "top",
                href: unref(twitterUrl),
                target: "_blank",
                rel: "noopener noreferrer",
                icon: "baserow-icon-twitter"
              }, ssrGetDirectiveProps(_ctx, _directive_tooltip, _ctx.$t("dashboard.shareOnTwitter"))), null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_ButtonIcon, mergeProps({
                tag: "a",
                "tooltip-position": "top",
                icon: "baserow-icon-reddit",
                href: unref(redditUrl),
                target: "_blank",
                rel: "noopener noreferrer"
              }, ssrGetDirectiveProps(_ctx, _directive_tooltip, _ctx.$t("dashboard.shareOnReddit"))), null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_ButtonIcon, mergeProps({
                tag: "a",
                "tooltip-position": "top",
                icon: "baserow-icon-facebook",
                href: "https://www.facebook.com/sharer/sharer.php?u=https://baserow.io",
                target: "_blank",
                rel: "noopener noreferrer"
              }, ssrGetDirectiveProps(_ctx, _directive_tooltip, _ctx.$t("dashboard.shareOnFacebook"))), null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_ButtonIcon, mergeProps({
                tag: "a",
                "tooltip-position": "top",
                icon: "baserow-icon-linkedin",
                href: "https://www.linkedin.com/sharing/share-offsite/?url=https://baserow.io",
                target: "_blank",
                rel: "noopener noreferrer"
              }, ssrGetDirectiveProps(_ctx, _directive_tooltip, _ctx.$t("dashboard.shareOnLinkedIn"))), null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_Button, {
                  tag: "a",
                  href: "https://github.com/baserow/baserow",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  type: "secondary",
                  icon: "iconoir-github"
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(_ctx.$t("dashboard.starOnGitHub")), 1)
                  ]),
                  _: 1
                }),
                withDirectives(createVNode(_component_ButtonIcon, {
                  tag: "a",
                  "tooltip-position": "top",
                  href: unref(twitterUrl),
                  target: "_blank",
                  rel: "noopener noreferrer",
                  icon: "baserow-icon-twitter"
                }, null, 8, ["href"]), [
                  [_directive_tooltip, _ctx.$t("dashboard.shareOnTwitter")]
                ]),
                withDirectives(createVNode(_component_ButtonIcon, {
                  tag: "a",
                  "tooltip-position": "top",
                  icon: "baserow-icon-reddit",
                  href: unref(redditUrl),
                  target: "_blank",
                  rel: "noopener noreferrer"
                }, null, 8, ["href"]), [
                  [_directive_tooltip, _ctx.$t("dashboard.shareOnReddit")]
                ]),
                withDirectives(createVNode(_component_ButtonIcon, {
                  tag: "a",
                  "tooltip-position": "top",
                  icon: "baserow-icon-facebook",
                  href: "https://www.facebook.com/sharer/sharer.php?u=https://baserow.io",
                  target: "_blank",
                  rel: "noopener noreferrer"
                }, null, 512), [
                  [_directive_tooltip, _ctx.$t("dashboard.shareOnFacebook")]
                ]),
                withDirectives(createVNode(_component_ButtonIcon, {
                  tag: "a",
                  "tooltip-position": "top",
                  icon: "baserow-icon-linkedin",
                  href: "https://www.linkedin.com/sharing/share-offsite/?url=https://baserow.io",
                  target: "_blank",
                  rel: "noopener noreferrer"
                }, null, 512), [
                  [_directive_tooltip, _ctx.$t("dashboard.shareOnLinkedIn")]
                ])
              ];
            }
          }),
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<p${_scopeId}>${ssrInterpolate(_ctx.$t("dashboard.alertText"))}</p>`);
            } else {
              return [
                createVNode("p", null, toDisplayString(_ctx.$t("dashboard.alertText")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("modules/core/components/dashboard/DashboardHelp.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ Object.assign({
  mixins: [editWorkspace]
}, {
  __name: "workspace",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const router = useRouter();
    const nuxtApp = useNuxtApp();
    const { $store, $registry, $i18n, $hasPermission } = nuxtApp;
    const selectedWorkspace = ref(null);
    const workspaceComponentArguments = ref({});
    const templates = ref([
      {
        name: "Project Management",
        slug: "project-management",
        type: "calendar",
        color: "yellow"
      },
      {
        name: "Performance Reviews",
        slug: "performance-reviews",
        type: "table",
        color: "purple"
      }
    ]);
    const context2 = ref(null);
    ref(null);
    const createApplicationContext = ref(null);
    ref(null);
    ref(null);
    const rename = ref(null);
    const templateModal = ref(null);
    async function fetchWorkspaceExtraData(workspace) {
      const plugins = Object.values($registry.getAll("plugin"));
      let mergedData = {
        selectedWorkspace: workspace,
        workspaceComponentArguments: { usageData: [] }
      };
      for (const p of plugins) {
        const workspaceData = await p.fetchAsyncDashboardData(nuxtApp, workspace.id);
        if (workspaceData) {
          mergedData = p.mergeDashboardData(mergedData, workspaceData);
        }
      }
      return mergedData;
    }
    const {
      data: dashboardData,
      pending,
      error: error2
    } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData(
      `current-workspace-${route.params.workspaceId}`,
      async () => {
        const workspaceId = parseInt(route.params.workspaceId, 10);
        let workspace;
        try {
          workspace = await $store.dispatch("workspace/selectById", workspaceId);
        } catch (e) {
          throw createError({
            statusCode: 404,
            message: "Workspace not found.",
            data: {
              report: false
            },
            fatal: true
          });
        }
        try {
          await $store.dispatch("auth/fetchWorkspaceInvitations");
          return await fetchWorkspaceExtraData(workspace);
        } catch {
          throw createError({
            statusCode: 400,
            message: "Error loading dashboard.",
            data: {
              report: false
            },
            fatal: true
          });
        }
      }
    )), __temp = await __temp, __restore(), __temp);
    if (error2.value) {
      throw error2.value;
    }
    watchEffect(() => {
      if (!dashboardData.value) return;
      selectedWorkspace.value = dashboardData.value.selectedWorkspace;
      workspaceComponentArguments.value = dashboardData.value.workspaceComponentArguments;
    });
    useHead(() => ({
      title: $i18n.t("dashboard.title")
    }));
    const workspaceInvitations = computed(
      () => $store.getters["auth/getWorkspaceInvitations"]
    );
    const getAllOfWorkspace = (ws) => $store.getters["application/getAllOfWorkspace"](ws);
    const dashboardHelpComponents = computed(
      () => Object.values($registry.getAll("plugin")).reduce(
        (components, plugin) => components.concat(plugin.getDashboardHelpComponents()),
        []
      ).filter((c) => c !== null)
    );
    const dashboardWorkspaceRowUsageComponent = computed(
      () => Object.values($registry.getAll("plugin")).map((p) => p.getDashboardWorkspaceRowUsageComponent()).filter((c) => c !== null)
    );
    const dashboardWorkspacePlanBadge = computed(
      () => Object.values($registry.getAll("plugin")).map((p) => p.getDashboardWorkspacePlanBadge()).filter((c) => c !== null)
    );
    const resourceLinksComponents = computed(
      () => Object.values($registry.getAll("plugin")).map((p) => p.getDashboardResourceLinksComponent()).filter((c) => c !== null)
    );
    const orderedApplicationsInSelectedWorkspace = computed(
      () => !selectedWorkspace.value ? [] : getAllOfWorkspace(selectedWorkspace.value).sort(
        (a, b) => a.order - b.order
      )
    );
    const canCreateCreateApplication = computed(() => {
      if (!selectedWorkspace.value) return false;
      return $hasPermission(
        "workspace.create_application",
        selectedWorkspace.value,
        selectedWorkspace.value.id
      );
    });
    const workspaceExists = computed(() => {
      if (!selectedWorkspace.value) return false;
      return $store.getters["workspace/getAll"].some(
        (w) => w.id === selectedWorkspace.value.id
      );
    });
    function getApplicationType(application2) {
      return $registry.get("application", application2.type);
    }
    function selectApplication(application2) {
      const type = getApplicationType(application2);
      const { $store: $store2, $i18n: $i18n2 } = nuxtApp;
      type.select(application2, { $router: router, $store: $store2, $i18n: $i18n2 });
    }
    async function workspaceUpdated(workspace) {
      const extraData = await fetchWorkspaceExtraData(workspace);
      workspaceComponentArguments.value = extraData.workspaceComponentArguments;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Editable = resolveComponent("Editable");
      const _component_Button = resolveComponent("Button");
      if (workspaceExists.value) {
        _push(`<div${ssrRenderAttrs(_attrs)}><div class="dashboard__header" ph-autocapture="dashboard-header"><div class="dashboard__header-left"><h1 class="dashboard__workspace-name"><div class="dashboard__workspace-name-text">`);
        _push(ssrRenderComponent(_component_Editable, {
          ref_key: "rename",
          ref: rename,
          value: selectedWorkspace.value.name,
          onChange: ($event) => _ctx.renameWorkspace(selectedWorkspace.value, $event)
        }, null, _parent));
        _push(`</div><i class="dashboard__workspace-name-icon iconoir-nav-arrow-down"></i></h1><!--[-->`);
        ssrRenderList(dashboardWorkspacePlanBadge.value, (component, index) => {
          ssrRenderVNode(_push, createVNode(resolveDynamicComponent(component), {
            key: index,
            workspace: selectedWorkspace.value,
            "component-arguments": workspaceComponentArguments.value
          }, null), _parent);
        });
        _push(`<!--]--></div>`);
        _push(ssrRenderComponent(unref(WorkspaceContext), {
          ref_key: "context",
          ref: context2,
          workspace: selectedWorkspace.value,
          onRename: ($event) => _ctx.enableRename()
        }, null, _parent));
        _push(`<div class="dashboard__header-right"><!--[-->`);
        ssrRenderList(dashboardWorkspaceRowUsageComponent.value, (component, index) => {
          ssrRenderVNode(_push, createVNode(resolveDynamicComponent(component), {
            key: index,
            workspace: selectedWorkspace.value,
            "component-arguments": workspaceComponentArguments.value,
            onWorkspaceUpdated: ($event) => workspaceUpdated($event)
          }, null), _parent);
        });
        _push(`<!--]-->`);
        if (canCreateCreateApplication.value) {
          _push(`<span>`);
          _push(ssrRenderComponent(_component_Button, {
            icon: "iconoir-plus",
            tag: "a",
            onClick: ($event) => _ctx.$refs.createApplicationContext.toggle(
              _ctx.$refs.createApplicationContextLink
            )
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(_ctx.$t("dashboard.addNew"))}`);
              } else {
                return [
                  createTextVNode(toDisplayString(_ctx.$t("dashboard.addNew")), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div><div class="dashboard__scroll-container" ph-autocapture="dashboard-container"><div class="dashboard__main">`);
        _push(ssrRenderComponent(unref(DashboardVerifyEmail), { class: "margin-top-0 margin-bottom-0" }, null, _parent));
        _push(`<!--[-->`);
        ssrRenderList(workspaceInvitations.value, (invitation) => {
          _push(ssrRenderComponent(unref(WorkspaceInvitation), {
            key: "invitation-" + invitation.id,
            invitation,
            class: "margin-top-0 margin-bottom-0"
          }, null, _parent));
        });
        _push(`<!--]--><div class="dashboard__extras">`);
        if (canCreateCreateApplication.value) {
          _push(`<div class="dashboard__suggested-templates"><h4>${ssrInterpolate(_ctx.$t("dashboard.suggestedTemplates"))}</h4><div class="dashboard__suggested-templates-wrapper"><!--[-->`);
          ssrRenderList(templates.value, (template, index) => {
            _push(ssrRenderComponent(unref(TemplateCard), {
              key: index,
              template,
              class: "dashboard__suggested-template",
              onClick: ($event) => _ctx.$refs.templateModal.show(template.slug)
            }, null, _parent));
          });
          _push(`<!--]-->`);
          _push(ssrRenderComponent(unref(TemplateCard), {
            class: "dashboard__suggested-template",
            "view-more": "",
            onClick: ($event) => _ctx.$refs.templateModal.show()
          }, null, _parent));
          _push(`</div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="dashboard__resources"><h4>${ssrInterpolate(_ctx.$t("dashboard.resources"))}</h4><div class="dashboard__resources-wrapper"><a href="https://baserow.io/user-docs" target="_new" class="dashboard__resource dashboard__resource--large"><div class="dashboard__resource-inner"><span class="dashboard__resource-icon"><i class="iconoir-message-text"></i></span><div class="dashboard__resource-content"><h4 class="dashboard__resource-title">${ssrInterpolate(_ctx.$t("dashboard.knowledgeBase"))}</h4><p class="dashboard__resource-text">${ssrInterpolate(_ctx.$t("dashboard.knowledgeBaseMessage"))}</p></div></div></a><!--[-->`);
        ssrRenderList(resourceLinksComponents.value, (component, index) => {
          ssrRenderVNode(_push, createVNode(resolveDynamicComponent(component), { key: index }, null), _parent);
        });
        _push(`<!--]--><a href="https://baserow.io/blog/category/tutorials" target="_new" class="dashboard__resource"><div class="dashboard__resource-inner"><span class="dashboard__resource-icon"><i class="iconoir-light-bulb"></i></span><div class="dashboard__resource-content"><h4 class="dashboard__resource-title">${ssrInterpolate(_ctx.$t("dashboard.tutorials"))}</h4><p class="dashboard__resource-text">${ssrInterpolate(_ctx.$t("dashboard.tutorialsMessage"))}</p></div></div></a></div></div></div><div class="dashboard__wrapper">`);
        if (orderedApplicationsInSelectedWorkspace.value.length) {
          _push(`<ul class="dashboard__applications"><!--[-->`);
          ssrRenderList(orderedApplicationsInSelectedWorkspace.value, (application2) => {
            _push(`<!--[-->`);
            if (getApplicationType(application2).isVisible(application2)) {
              _push(`<li>`);
              _push(ssrRenderComponent(unref(DashboardApplication), {
                application: application2,
                workspace: selectedWorkspace.value,
                onClick: ($event) => selectApplication(application2)
              }, null, _parent));
              _push(`<div class="dashboard__application-separator"></div></li>`);
            } else {
              _push(`<!---->`);
            }
            _push(`<!--]-->`);
          });
          _push(`<!--]--></ul>`);
        } else {
          _push(`<div class="dashboard__no-application"><img${ssrRenderAttr("src", _imports_0$2)}${ssrRenderAttr("srcset", _imports_1$1 + " 2x")}><h4>${ssrInterpolate(_ctx.$t("dashboard.emptyWorkspace"))}</h4>`);
          if (canCreateCreateApplication.value) {
            _push(`<p>${ssrInterpolate(_ctx.$t("dashboard.emptyWorkspaceMessage"))}</p>`);
          } else {
            _push(`<!---->`);
          }
          if (canCreateCreateApplication.value) {
            _push(`<span>`);
            _push(ssrRenderComponent(_component_Button, {
              icon: "iconoir-plus",
              tag: "a",
              onClick: ($event) => _ctx.$refs.createApplicationContext.toggle(
                _ctx.$refs.createApplicationContextLink2
              )
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`${ssrInterpolate(_ctx.$t("dashboard.addNew"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("dashboard.addNew")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent));
            _push(`</span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        }
        _push(`</div></div>`);
        _push(ssrRenderComponent(unref(CreateApplicationContext), {
          ref_key: "createApplicationContext",
          ref: createApplicationContext,
          workspace: selectedWorkspace.value
        }, null, _parent));
        _push(`</div>`);
        if (dashboardHelpComponents.value.length === 0) {
          _push(ssrRenderComponent(unref(_sfc_main$1), null, null, _parent));
        } else {
          _push(`<!--[-->`);
          ssrRenderList(dashboardHelpComponents.value, (component, index) => {
            ssrRenderVNode(_push, createVNode(resolveDynamicComponent(component), { key: index }, null), _parent);
          });
          _push(`<!--]-->`);
        }
        _push(ssrRenderComponent(unref(TemplateModal), {
          ref_key: "templateModal",
          ref: templateModal,
          workspace: selectedWorkspace.value
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("modules/core/pages/workspace.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=workspace-K8o0MeOX.mjs.map
