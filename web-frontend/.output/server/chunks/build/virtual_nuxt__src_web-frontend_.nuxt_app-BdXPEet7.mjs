import { ref, computed, createVNode, resolveDynamicComponent, resolveComponent, mergeProps, withCtx, openBlock, createBlock, createCommentVNode, withDirectives, withModifiers, vModelText, vShow, Fragment, renderList, createTextVNode, toDisplayString, resolveDirective, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrRenderSlot, ssrRenderList, ssrRenderVNode, ssrRenderClass, ssrRenderAttr, ssrInterpolate, ssrGetDirectiveProps } from 'vue/server-renderer';
import { l as useStore, u as useNuxtApp, c as useRoute, e as useRouter, bb as Sidebar, bc as HorizontalResize, _ as _export_sfc, bd as Highlight, Q as modal, A as AuthService, I as notifyIf, m as mapGetters, be as searchTypeRegistry, a2 as mapState } from './server.mjs';
import { T as Toasts } from './Toasts-CnmFZjjH.mjs';
import debounce$1 from 'lodash/debounce.js';
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
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "38e230c6-5b45-4049-b413-aac3c2b12934", e._sentryDebugIdIdentifier = "sentry-dbid-38e230c6-5b45-4049-b413-aac3c2b12934");
  } catch (e2) {
  }
})();
const _sfc_main$4 = {
  name: "RightSidebar",
  props: {
    workspace: {
      type: Object,
      required: true
    },
    width: {
      type: Number,
      required: false,
      default: 400
    }
  },
  computed: {
    sidebarWorkspaceComponents() {
      return Object.values(this.$registry.getAll("plugin")).flatMap(
        (plugin) => plugin.getRightSidebarWorkspaceComponents(this.workspace)
      ).filter((component) => component !== null);
    }
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "sidebar" }, _attrs))}><!--[-->`);
  ssrRenderList($options.sidebarWorkspaceComponents, (component, index) => {
    ssrRenderVNode(_push, createVNode(resolveDynamicComponent(component), {
      key: "sidebarWorkspaceComponents" + index,
      workspace: $props.workspace
    }, null), _parent);
  });
  _push(`<!--]--></div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("modules/core/components/sidebar/RightSidebar.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const RightSidebar = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$3 = {
  name: "GuidedTourStep",
  props: {
    position: {
      required: true,
      type: String,
      validator(value) {
        return [
          "right-top",
          "right-bottom",
          "left-top",
          "bottom-left",
          "bottom-right",
          "bottom-center",
          "center"
        ].includes(value);
      }
    },
    step: {
      type: Number,
      required: true
    },
    totalSteps: {
      type: Number,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    },
    first: {
      type: Boolean,
      required: false,
      default: false
    },
    last: {
      type: Boolean,
      required: false,
      default: false
    },
    buttonText: {
      validator: (prop) => typeof prop === "string" || prop === null,
      required: false,
      default: null
    }
  },
  emits: ["next", "previous"],
  async mounted() {
    const updatePosition = () => {
      const rect = this.$el.getBoundingClientRect();
      this.$el.style["max-height"] = `calc(100vh - ${rect.top - 12}px)`;
    };
    await this.$nextTick();
    updatePosition();
    this.$el.updatePositionViaResizeEvent = () => {
      updatePosition();
    };
    (void 0).addEventListener("resize", this.$el.updatePositionViaResizeEvent);
  },
  beforeUnmount() {
    (void 0).removeEventListener(
      "scroll",
      this.$el.updatePositionViaScrollEvent,
      true
    );
    (void 0).removeEventListener("resize", this.$el.updatePositionViaResizeEvent);
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_MarkdownIt = resolveComponent("MarkdownIt");
  const _component_Button = resolveComponent("Button");
  const _directive_auto_overflow_scroll = resolveDirective("auto-overflow-scroll");
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: `guided-tour-step guided-tour-step--${$props.position}`
  }, _attrs))}><div${ssrRenderAttrs(mergeProps({ class: "guided-tour-step__body" }, ssrGetDirectiveProps(_ctx, _directive_auto_overflow_scroll)))}><div class="guided-tour-step__page">${ssrInterpolate(_ctx.$t("guidedTourStep.step", { step: $props.step, totalSteps: $props.totalSteps }))}</div><div class="guided-tour-step__title">${ssrInterpolate($props.title)}</div><div class="guided-tour-step__description">`);
  _push(ssrRenderComponent(_component_MarkdownIt, { content: $props.content }, null, _parent));
  _push(`</div></div><div class="guided-tour-step__foot"><div class="flex justify-content-space-between align-items-center">`);
  if (!$props.first) {
    _push(`<a href="#" class="guided-tour-step__back">${ssrInterpolate(_ctx.$t("guidedTourStep.back"))}</a>`);
  } else {
    _push(`<!---->`);
  }
  _push(ssrRenderComponent(_component_Button, {
    type: "secondary",
    onClick: ($event) => _ctx.$emit("next")
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate($props.buttonText || ($props.last ? _ctx.$t("guidedTourStep.gotIt") : _ctx.$t("guidedTourStep.next")))}`);
      } else {
        return [
          createTextVNode(toDisplayString($props.buttonText || ($props.last ? _ctx.$t("guidedTourStep.gotIt") : _ctx.$t("guidedTourStep.next"))), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("modules/core/components/guidedTour/GuidedTourStep.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const GuidedTourStep = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$2 = {
  name: "GuidedTour",
  components: { Highlight, GuidedTourStep },
  data() {
    return {
      stepIndex: 0
    };
  },
  computed: {
    activeGuidedTours() {
      return Object.values(this.$registry.getAll("guidedTour")).filter(() => {
        return this.authenticated;
      }).filter((type) => {
        return !this.completed.includes(type.getType());
      }).filter((type) => type.isActive(this.$route)).sort((a, b) => a.order - b.order);
    },
    started() {
      return this.activeGuidedTours.length > 0;
    },
    allSteps() {
      return this.activeGuidedTours.flatMap((type) => type.steps);
    },
    currentStep() {
      return this.allSteps[this.stepIndex];
    },
    ...mapGetters({
      authenticated: "auth/isAuthenticated",
      completed: "auth/getCompletedGuidedTour"
    })
  },
  watch: {
    started(value) {
      if (value) {
        this.show();
      }
    },
    activeGuidedTours(value) {
      if (this.stepIndex > value.length) {
        this.goto(value.length);
      }
    }
  },
  mounted() {
    if (this.started) {
      this.show();
    }
  },
  methods: {
    getParent() {
      return (void 0).body;
    },
    async next() {
      if (this.stepIndex >= this.allSteps.length - 1) {
        return await this.finish();
      }
      await this.goto(this.stepIndex + 1);
    },
    async goto(index) {
      const step = this.allSteps[this.stepIndex];
      await step.afterShow();
      this.stepIndex = index;
      this.show();
    },
    async show() {
      const step = this.allSteps[this.stepIndex];
      await this.$nextTick();
      await step.beforeShow(this.getParent());
      await this.$nextTick();
      this.$refs.highlight.show(step.selectors);
    },
    async finish() {
      const step = this.allSteps[this.stepIndex];
      await step.afterShow();
      this.$refs.highlight.hide();
      this.stepIndex = 0;
      try {
        const completed = this.activeGuidedTours.filter((t) => t.saveCompleted).map((t) => t.getType());
        const { data } = await AuthService(this.$client).update({
          completed_guided_tours: completed
        });
        await this.$store.dispatch("auth/forceUpdateUserData", { user: data });
      } catch (error) {
        notifyIf(error);
      }
      for (const tour of Object.values(this.activeGuidedTours)) {
        await tour.completed();
      }
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  var _a;
  const _component_Highlight = resolveComponent("Highlight");
  const _component_GuidedTourStep = resolveComponent("GuidedTourStep");
  if ($options.activeGuidedTours.length > 0) {
    _push(`<div${ssrRenderAttrs(mergeProps({ class: "guided-tour-step__container" }, _attrs))}>`);
    _push(ssrRenderComponent(_component_Highlight, {
      ref: "highlight",
      "get-parent": $options.getParent,
      padding: (_a = $options.currentStep.highlightPadding) != null ? _a : 2
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          if ($options.currentStep) {
            _push2(ssrRenderComponent(_component_GuidedTourStep, {
              step: $data.stepIndex + 1,
              "total-steps": $options.allSteps.length,
              title: $options.currentStep.title,
              content: $options.currentStep.content,
              first: $data.stepIndex === 0,
              last: $data.stepIndex >= $options.allSteps.length - 1,
              position: $options.currentStep.position,
              "button-text": $options.currentStep.buttonText,
              onPrevious: ($event) => $options.goto($data.stepIndex - 1),
              onNext: $options.next
            }, null, _parent2, _scopeId));
          } else {
            _push2(`<!---->`);
          }
        } else {
          return [
            $options.currentStep ? (openBlock(), createBlock(_component_GuidedTourStep, {
              key: 0,
              step: $data.stepIndex + 1,
              "total-steps": $options.allSteps.length,
              title: $options.currentStep.title,
              content: $options.currentStep.content,
              first: $data.stepIndex === 0,
              last: $data.stepIndex >= $options.allSteps.length - 1,
              position: $options.currentStep.position,
              "button-text": $options.currentStep.buttonText,
              onPrevious: ($event) => $options.goto($data.stepIndex - 1),
              onNext: $options.next
            }, null, 8, ["step", "total-steps", "title", "content", "first", "last", "position", "button-text", "onPrevious", "onNext"])) : createCommentVNode("", true)
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("modules/core/components/guidedTour/GuidedTour.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const GuidedTour = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$1 = {
  name: "WorkspaceSearchModal",
  mixins: [modal],
  data() {
    return {
      searchTerm: "",
      focusInput: false,
      activeIndex: -1,
      hasMoreResults: false,
      isLoadingMore: false,
      isSearching: false,
      isKeyboardNavigating: false,
      currentPage: 1,
      minChars: 3,
      pageSize: 10,
      initialLoadPages: 2,
      scrollLoadPages: 3
    };
  },
  computed: {
    ...mapState("workspaceSearch", ["loading", "results"]),
    ...mapGetters("workspaceSearch", [
      "hasResults",
      "totalResultCount",
      "getAllResults"
    ]),
    hasSearchTerm() {
      return this.searchTerm && this.searchTerm.length >= this.minChars;
    },
    currentWorkspace() {
      return this.selectedWorkspace || this.$store.getters["workspace/get"](this.$route.params.workspaceId);
    },
    selectedWorkspace() {
      return this.$store.state.workspace.selected;
    },
    allResults() {
      return this.getAllResults || [];
    },
    maxIndex() {
      return Math.max(0, (this.allResults || []).length - 1);
    }
  },
  watch: {
    searchTerm(newValue) {
      if (newValue && newValue.length >= this.minChars) {
        this.isSearching = true;
        this.currentPage = 1;
        this.hasMoreResults = false;
        this.isLoadingMore = false;
        this.$store.dispatch("workspaceSearch/clearSearch");
      } else {
        this.isSearching = false;
        this.currentPage = 1;
        this.hasMoreResults = false;
        this.isLoadingMore = false;
        this.$store.dispatch("workspaceSearch/clearSearch");
      }
      this.debouncedSearch(newValue);
    },
    "selectedWorkspace.id"(newId, oldId) {
      if (newId !== oldId) {
        this.clearSearch();
      }
    }
  },
  methods: {
    onMouseMove(event) {
      if (event && (event.movementX !== 0 || event.movementY !== 0)) {
        this.isKeyboardNavigating = false;
      }
    },
    displayFor(result) {
      return searchTypeRegistry.formatResultDisplay(result.type, result, {
        searchTerm: this.searchTerm
      });
    },
    onShow() {
      this.$nextTick(() => {
        if (this.$refs.searchInput) {
          this.$refs.searchInput.focus();
        }
      });
    },
    clearSearch() {
      this.searchTerm = "";
      this.activeIndex = -1;
      this.currentPage = 1;
      this.hasMoreResults = false;
      this.isLoadingMore = false;
      this.isSearching = false;
      this.$store.dispatch("workspaceSearch/clearSearch");
    },
    debouncedSearch: debounce$1(async function(searchTerm) {
      if (!searchTerm || searchTerm.length < this.minChars) {
        this.$store.dispatch("workspaceSearch/clearSearch");
        this.currentPage = 1;
        this.hasMoreResults = false;
        this.isSearching = false;
        return;
      }
      if (!this.currentWorkspace) {
        return;
      }
      this.currentPage = 1;
      try {
        const result = await this.$store.dispatch("workspaceSearch/search", {
          workspaceId: this.currentWorkspace.id,
          searchTerm,
          limit: this.pageSize * this.initialLoadPages,
          offset: 0,
          append: false
        });
        this.hasMoreResults = result.has_more || false;
        this.activeIndex = 0;
      } catch (error) {
        notifyIf(error);
        this.$store.dispatch("workspaceSearch/clearSearch");
        this.hasMoreResults = false;
      } finally {
        this.isSearching = false;
      }
    }, 400),
    async loadMoreResults() {
      if (!this.hasMoreResults || this.isLoadingMore || !this.searchTerm) {
        return;
      }
      this.isLoadingMore = true;
      const offset = this.totalResultCount;
      try {
        const result = await this.$store.dispatch("workspaceSearch/search", {
          workspaceId: this.currentWorkspace.id,
          searchTerm: this.searchTerm,
          limit: this.pageSize * this.scrollLoadPages,
          offset,
          append: true
        });
        this.hasMoreResults = result.has_more || false;
      } catch (error) {
        notifyIf(error);
        this.hasMoreResults = false;
      } finally {
        this.isLoadingMore = false;
      }
    },
    handleScroll(event) {
      const { target } = event;
      const { scrollTop, scrollHeight, clientHeight } = target;
      const threshold = 100;
      const isNearBottom = scrollTop + clientHeight >= scrollHeight - threshold;
      if (isNearBottom && this.hasMoreResults && !this.isLoadingMore) {
        this.loadMoreResults();
      }
    },
    handleKeydown(event) {
      this.isKeyboardNavigating = true;
      switch (event.key) {
        case "ArrowDown":
          event.preventDefault();
          this.moveSelection(1);
          break;
        case "ArrowUp":
          event.preventDefault();
          this.moveSelection(-1);
          break;
        case "Enter":
          event.preventDefault();
          this.selectActiveItem();
          break;
        case "Escape":
          this.hide();
          break;
      }
    },
    moveSelection(direction) {
      if (!this.allResults || this.allResults.length === 0) {
        return;
      }
      const newIndex = this.activeIndex + direction;
      if (newIndex < 0) {
        this.activeIndex = 0;
      } else if (newIndex > this.maxIndex) {
        this.activeIndex = this.maxIndex;
      } else {
        this.activeIndex = newIndex;
      }
      this.scrollToActiveItem();
    },
    scrollToActiveItem() {
      this.$nextTick(() => {
        var _a;
        if (this.activeIndex >= 0 && this.allResults && this.allResults.length > 0) {
          const activeItem = (_a = this.$refs.resultsList) == null ? void 0 : _a.children[this.activeIndex];
          if (activeItem) {
            activeItem.scrollIntoView({
              behavior: "smooth",
              block: "nearest",
              inline: "nearest"
            });
          }
        }
      });
    },
    selectActiveItem() {
      if (this.hasResults && this.allResults && this.allResults.length > 0) {
        if (this.activeIndex >= 0 && this.activeIndex < this.allResults.length) {
          this.selectResult(this.allResults[this.activeIndex]);
        }
      }
    },
    selectResult(result) {
      const url = this.buildResultUrl(result);
      if (url) {
        this.$router.push(url);
        this.hide();
      } else {
        const focused = searchTypeRegistry.focusInSidebar(result.type, result, {
          store: this.$store
        });
        if (focused) {
          this.hide();
        }
      }
    },
    getEmptyLabel(result) {
      return searchTypeRegistry.getEmptyLabel(result.type, result, {
        store: this.$store
      });
    },
    buildResultUrl(result) {
      return searchTypeRegistry.buildUrl(result.type, result, {
        store: this.$store
      });
    },
    getResultIcon(type) {
      return searchTypeRegistry.getIcon(type);
    },
    handleMouseEnter(index) {
      if (!this.isKeyboardNavigating) {
        this.activeIndex = index;
      }
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Modal = resolveComponent("Modal");
  _push(ssrRenderComponent(_component_Modal, mergeProps({
    ref: "modal",
    "content-scrollable": $options.hasSearchTerm,
    "close-button": false,
    "box-padding": false,
    "content-padding": false,
    onShow: $options.onShow
  }, _attrs), {
    content: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="${ssrRenderClass([{
          "workspace-search--expanded": $options.hasSearchTerm,
          "workspace-search--keyboard-nav": $data.isKeyboardNavigating
        }, "workspace-search"])}"${_scopeId}><div class="workspace-search__header"${_scopeId}><div class="workspace-search__search"${_scopeId}><i class="${ssrRenderClass([{ "workspace-search__icon--active": $data.focusInput }, "workspace-search__icon iconoir-search"])}"${_scopeId}></i><input${ssrRenderAttr("value", $data.searchTerm)} class="workspace-search__input"${ssrRenderAttr("placeholder", _ctx.$t("workspaceSearch.searchEverything"))}${_scopeId}><a class="workspace-search__close" style="${ssrRenderStyle($data.searchTerm.length > 0 ? null : { display: "none" })}"${_scopeId}><i class="iconoir-cancel"${_scopeId}></i></a></div></div>`);
        if ($options.hasSearchTerm) {
          _push2(`<div class="workspace-search__content"${_scopeId}>`);
          if (_ctx.hasResults) {
            _push2(`<div class="workspace-search__results"${_scopeId}><div class="workspace-search__results-list"${_scopeId}><!--[-->`);
            ssrRenderList($options.allResults, (result, index) => {
              _push2(`<div class="${ssrRenderClass([{
                "workspace-search__result-item--active": $data.activeIndex === index
              }, "workspace-search__result-item"])}"${_scopeId}><div class="workspace-search__result-icon"${_scopeId}><i class="${ssrRenderClass($options.getResultIcon(result.type))}"${_scopeId}></i></div><div class="workspace-search__result-main"${_scopeId}><div class="workspace-search__result-title"${_scopeId}>${ssrInterpolate($options.displayFor(result).title)}`);
              if ($options.getEmptyLabel(result)) {
                _push2(`<span class="workspace-search__result-empty-badge"${_scopeId}>${ssrInterpolate($options.getEmptyLabel(result))}</span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
              if ($options.displayFor(result).subtitle) {
                _push2(`<div class="workspace-search__result-subtitle"${_scopeId}>${ssrInterpolate($options.displayFor(result).subtitle)}</div>`);
              } else {
                _push2(`<!---->`);
              }
              if ($options.displayFor(result).descriptionSegments && $options.displayFor(result).descriptionSegments.length) {
                _push2(`<div class="workspace-search__result-description"${_scopeId}><!--[-->`);
                ssrRenderList($options.displayFor(result).descriptionSegments, (seg, sIdx) => {
                  _push2(`<span class="${ssrRenderClass({
                    "workspace-search__result-highlight": seg.highlighted
                  })}"${_scopeId}>${ssrInterpolate(seg.text)}</span>`);
                });
                _push2(`<!--]--></div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
              if ($data.activeIndex === index) {
                _push2(`<div class="workspace-search__result-enter"${_scopeId}><kbd class="workspace-search__keys"${_scopeId}> \u21B5 </kbd></div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            });
            _push2(`<!--]--></div><div class="infinite-scroll__loading-wrapper" style="${ssrRenderStyle($data.hasMoreResults ? null : { display: "none" })}"${_scopeId}>`);
            if ($data.isLoadingMore) {
              _push2(`<div class="loading"${_scopeId}></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div>`);
          } else if (!_ctx.loading && !$data.isSearching) {
            _push2(`<div class="workspace-search__empty"${_scopeId}><div class="workspace-search__empty-icon"${_scopeId}><i class="iconoir-search"${_scopeId}></i></div><div class="workspace-search__empty-title"${_scopeId}>${ssrInterpolate(_ctx.$t("workspaceSearch.noResults"))}</div><div class="workspace-search__empty-subtitle"${_scopeId}>${ssrInterpolate(_ctx.$t("workspaceSearch.noResultsSubtitle", { searchTerm: $data.searchTerm }))}</div></div>`);
          } else {
            _push2(`<div class="workspace-search__loading"${_scopeId}><div class="workspace-search__loading-spinner"${_scopeId}><div class="loading"${_scopeId}></div></div><div class="workspace-search__loading-text"${_scopeId}>${ssrInterpolate(_ctx.$t("workspaceSearch.searching"))}</div></div>`);
          }
          _push2(`</div>`);
        } else {
          _push2(`<!---->`);
        }
        if ($options.hasSearchTerm) {
          _push2(`<div class="workspace-search__footer"${_scopeId}><div class="workspace-search__shortcuts"${_scopeId}><div class="workspace-search__shortcuts-left"${_scopeId}><div class="workspace-search__shortcut"${_scopeId}><kbd class="workspace-search__keys"${_scopeId}><i class="iconoir-arrow-up"${_scopeId}></i></kbd><kbd class="workspace-search__keys"${_scopeId}><i class="iconoir-arrow-down"${_scopeId}></i></kbd> ${ssrInterpolate(_ctx.$t("workspaceSearch.navigate"))}</div></div><div class="workspace-search__shortcuts-right"${_scopeId}><div class="workspace-search__shortcut"${_scopeId}><kbd class="workspace-search__keys"${_scopeId}>esc</kbd> ${ssrInterpolate(_ctx.$t("workspaceSearch.close"))}</div></div></div></div>`);
        } else {
          _push2(`<!---->`);
        }
        _push2(`</div>`);
      } else {
        return [
          createVNode("div", {
            class: ["workspace-search", {
              "workspace-search--expanded": $options.hasSearchTerm,
              "workspace-search--keyboard-nav": $data.isKeyboardNavigating
            }]
          }, [
            createVNode("div", { class: "workspace-search__header" }, [
              createVNode("div", { class: "workspace-search__search" }, [
                createVNode("i", {
                  class: ["workspace-search__icon iconoir-search", { "workspace-search__icon--active": $data.focusInput }]
                }, null, 2),
                withDirectives(createVNode("input", {
                  ref: "searchInput",
                  "onUpdate:modelValue": ($event) => $data.searchTerm = $event,
                  class: "workspace-search__input",
                  placeholder: _ctx.$t("workspaceSearch.searchEverything"),
                  onKeydown: withModifiers($options.handleKeydown, ["stop"]),
                  onFocusin: ($event) => $data.focusInput = true,
                  onFocusout: ($event) => $data.focusInput = false
                }, null, 40, ["onUpdate:modelValue", "placeholder", "onKeydown", "onFocusin", "onFocusout"]), [
                  [vModelText, $data.searchTerm]
                ]),
                withDirectives(createVNode("a", {
                  class: "workspace-search__close",
                  onClick: $options.clearSearch
                }, [
                  createVNode("i", { class: "iconoir-cancel" })
                ], 8, ["onClick"]), [
                  [vShow, $data.searchTerm.length > 0]
                ])
              ])
            ]),
            $options.hasSearchTerm ? (openBlock(), createBlock("div", {
              key: 0,
              class: "workspace-search__content",
              onScroll: $options.handleScroll,
              onMousemove: $options.onMouseMove
            }, [
              _ctx.hasResults ? (openBlock(), createBlock("div", {
                key: 0,
                class: "workspace-search__results"
              }, [
                createVNode("div", {
                  ref: "resultsList",
                  class: "workspace-search__results-list"
                }, [
                  (openBlock(true), createBlock(Fragment, null, renderList($options.allResults, (result, index) => {
                    return openBlock(), createBlock("div", {
                      key: `${result.type}-${result.id}-${index}`,
                      class: ["workspace-search__result-item", {
                        "workspace-search__result-item--active": $data.activeIndex === index
                      }],
                      onClick: ($event) => $options.selectResult(result),
                      onMouseenter: ($event) => $options.handleMouseEnter(index)
                    }, [
                      createVNode("div", { class: "workspace-search__result-icon" }, [
                        createVNode("i", {
                          class: $options.getResultIcon(result.type)
                        }, null, 2)
                      ]),
                      createVNode("div", { class: "workspace-search__result-main" }, [
                        createVNode("div", { class: "workspace-search__result-title" }, [
                          createTextVNode(toDisplayString($options.displayFor(result).title), 1),
                          $options.getEmptyLabel(result) ? (openBlock(), createBlock("span", {
                            key: 0,
                            class: "workspace-search__result-empty-badge"
                          }, toDisplayString($options.getEmptyLabel(result)), 1)) : createCommentVNode("", true)
                        ]),
                        $options.displayFor(result).subtitle ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "workspace-search__result-subtitle"
                        }, toDisplayString($options.displayFor(result).subtitle), 1)) : createCommentVNode("", true),
                        $options.displayFor(result).descriptionSegments && $options.displayFor(result).descriptionSegments.length ? (openBlock(), createBlock("div", {
                          key: 1,
                          class: "workspace-search__result-description"
                        }, [
                          (openBlock(true), createBlock(Fragment, null, renderList($options.displayFor(result).descriptionSegments, (seg, sIdx) => {
                            return openBlock(), createBlock("span", {
                              key: sIdx,
                              class: {
                                "workspace-search__result-highlight": seg.highlighted
                              }
                            }, toDisplayString(seg.text), 3);
                          }), 128))
                        ])) : createCommentVNode("", true)
                      ]),
                      $data.activeIndex === index ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "workspace-search__result-enter"
                      }, [
                        createVNode("kbd", { class: "workspace-search__keys" }, " \u21B5 ")
                      ])) : createCommentVNode("", true)
                    ], 42, ["onClick", "onMouseenter"]);
                  }), 128))
                ], 512),
                withDirectives(createVNode("div", { class: "infinite-scroll__loading-wrapper" }, [
                  $data.isLoadingMore ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "loading"
                  })) : createCommentVNode("", true)
                ], 512), [
                  [vShow, $data.hasMoreResults]
                ])
              ])) : !_ctx.loading && !$data.isSearching ? (openBlock(), createBlock("div", {
                key: 1,
                class: "workspace-search__empty"
              }, [
                createVNode("div", { class: "workspace-search__empty-icon" }, [
                  createVNode("i", { class: "iconoir-search" })
                ]),
                createVNode("div", { class: "workspace-search__empty-title" }, toDisplayString(_ctx.$t("workspaceSearch.noResults")), 1),
                createVNode("div", { class: "workspace-search__empty-subtitle" }, toDisplayString(_ctx.$t("workspaceSearch.noResultsSubtitle", { searchTerm: $data.searchTerm })), 1)
              ])) : (openBlock(), createBlock("div", {
                key: 2,
                class: "workspace-search__loading"
              }, [
                createVNode("div", { class: "workspace-search__loading-spinner" }, [
                  createVNode("div", { class: "loading" })
                ]),
                createVNode("div", { class: "workspace-search__loading-text" }, toDisplayString(_ctx.$t("workspaceSearch.searching")), 1)
              ]))
            ], 40, ["onScroll", "onMousemove"])) : createCommentVNode("", true),
            $options.hasSearchTerm ? (openBlock(), createBlock("div", {
              key: 1,
              class: "workspace-search__footer"
            }, [
              createVNode("div", { class: "workspace-search__shortcuts" }, [
                createVNode("div", { class: "workspace-search__shortcuts-left" }, [
                  createVNode("div", { class: "workspace-search__shortcut" }, [
                    createVNode("kbd", { class: "workspace-search__keys" }, [
                      createVNode("i", { class: "iconoir-arrow-up" })
                    ]),
                    createVNode("kbd", { class: "workspace-search__keys" }, [
                      createVNode("i", { class: "iconoir-arrow-down" })
                    ]),
                    createTextVNode(" " + toDisplayString(_ctx.$t("workspaceSearch.navigate")), 1)
                  ])
                ]),
                createVNode("div", { class: "workspace-search__shortcuts-right" }, [
                  createVNode("div", { class: "workspace-search__shortcut" }, [
                    createVNode("kbd", { class: "workspace-search__keys" }, "esc"),
                    createTextVNode(" " + toDisplayString(_ctx.$t("workspaceSearch.close")), 1)
                  ])
                ])
              ])
            ])) : createCommentVNode("", true)
          ], 2)
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("modules/core/components/workspace/WorkspaceSearchModal.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const WorkspaceSearchModal = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "virtual:nuxt:%2Fsrc%2Fweb-frontend%2F.nuxt%2Fapp",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useStore();
    const { $registry, $priorityBus, $realtime, $bus } = useNuxtApp();
    const col1Width = ref(240);
    const col3Width = ref(400);
    const col3Visible = ref(false);
    ref();
    const workspaceSearchModal = ref(null);
    const workspaces = computed(() => store.getters["workspace/getAll"]);
    const selectedWorkspace = computed(() => store.getters["workspace/getSelected"]);
    const applications = computed(() => store.getters["application/getAll"]);
    const isCollapsed = computed(() => col1Width.value < 170);
    const route = useRoute();
    const router = useRouter();
    if (route.query.token) {
      const newQuery = { ...route.query };
      delete newQuery.token;
      router.replace({ query: newQuery });
    }
    function openWorkspaceSearch() {
      if (selectedWorkspace.value && workspaceSearchModal.value) {
        workspaceSearchModal.value.show();
      }
    }
    function resizeCol1(v) {
      col1Width.value = v;
    }
    function resizeCol3(v) {
      col3Width.value = v;
    }
    const appLayoutComponents = computed(() => {
      return Object.values($registry.getAll("plugin")).map((plugin) => plugin.getAppLayoutComponent()).filter((component) => component !== null);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(Toasts, null, null, _parent));
      _push(ssrRenderComponent(GuidedTour, null, null, _parent));
      _push(`<div class="layout"><div class="layout__col-1" style="${ssrRenderStyle({ width: col1Width.value + "px" })}">`);
      _push(ssrRenderComponent(Sidebar, {
        workspaces: workspaces.value,
        "selected-workspace": selectedWorkspace.value,
        applications: applications.value,
        collapsed: isCollapsed.value,
        width: col1Width.value,
        "right-sidebar-open": col3Visible.value,
        onSetCol1Width: ($event) => col1Width.value = $event,
        onOpenWorkspaceSearch: openWorkspaceSearch
      }, null, _parent));
      _push(`</div><div class="layout__col-2" style="${ssrRenderStyle({
        left: col1Width.value + "px",
        right: col3Visible.value ? col3Width.value + "px" : 0
      })}">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
      if (col3Visible.value) {
        _push(`<div class="layout__col-3" style="${ssrRenderStyle({ width: col3Width.value + "px", right: 0 })}">`);
        _push(ssrRenderComponent(RightSidebar, { workspace: selectedWorkspace.value }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(HorizontalResize, {
        class: "layout__resize",
        width: col1Width.value,
        style: { left: col1Width.value - 2 + "px" },
        min: 52,
        max: 300,
        onMove: resizeCol1
      }, null, _parent));
      if (col3Visible.value) {
        _push(ssrRenderComponent(HorizontalResize, {
          class: "layout__resize",
          width: col3Width.value,
          style: { right: col3Width.value - 3 + "px" },
          min: 300,
          max: 500,
          right: true,
          onMove: resizeCol3
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<!--[-->`);
      ssrRenderList(appLayoutComponents.value, (component, index) => {
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(component), { key: index }, null), _parent);
      });
      _push(`<!--]--></div>`);
      _push(ssrRenderComponent(WorkspaceSearchModal, {
        ref_key: "workspaceSearchModal",
        ref: workspaceSearchModal
      }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("virtual:nuxt:%2Fsrc%2Fweb-frontend%2F.nuxt%2Fapp.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=virtual_nuxt__src_web-frontend_.nuxt_app-BdXPEet7.mjs.map
