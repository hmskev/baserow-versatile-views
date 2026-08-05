import { withAsyncContext, computed, unref, mergeProps, provide, watch, withCtx, openBlock, createBlock, createCommentVNode, resolveComponent, createVNode, resolveDynamicComponent, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderList, ssrRenderVNode } from 'vue/server-renderer';
import { l as useStore, c as useRoute, u as useNuxtApp, aQ as useRequestURL, f as useAsyncData, v as createError, aR as getTokenIfEnoughTimeLeft, aS as userSourceCookieTokenName, aL as DataProviderType, aT as resolveApplicationRoute, n as navigateTo, e as useRouter, aM as _sfc_main$3Q, aU as ThemeConfigBlockType, g as useHead, aV as QUERY_PARAM_TYPE_HANDLER_FUNCTIONS, aW as prefixInternalResolvedUrl, aX as BuilderToasts, aY as RecursiveWrapper, aZ as VISIBILITY_ALL, a_ as ROLE_TYPE_ALLOW_EXCEPT, a$ as ROLE_TYPE_DISALLOW_EXCEPT, b0 as ROLE_TYPE_ALLOW_ALL, _ as _export_sfc, b1 as dimensionMixin, b2 as pageElementSectionsMixin, b3 as PageElement } from './server.mjs';
import _ from 'lodash';
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
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "a27d6a0e-9eea-42f8-8efc-031e757177d0", e._sentryDebugIdIdentifier = "sentry-dbid-a27d6a0e-9eea-42f8-8efc-031e757177d0");
  } catch (e2) {
  }
})();
const _sfc_main$2 = {
  components: { PageElement },
  mixins: [dimensionMixin, pageElementSectionsMixin],
  inject: ["builder", "mode", "currentPage"],
  props: {
    path: {
      type: String,
      required: true
    },
    params: {
      type: Object,
      required: true
    },
    elements: {
      type: Array,
      required: true
    },
    sharedElements: {
      type: Array,
      required: true
    }
  },
  watch: {
    "dimensions.width": {
      handler(newValue) {
        this.debounceGuessDevice(newValue);
      }
    }
  },
  mounted() {
    const device = this.closestDeviceType((void 0).innerWidth);
    this.$store.dispatch("page/setDeviceTypeSelected", device.getType());
    this.dimensions.targetElement = (void 0).documentElement;
  },
  methods: {
    /**
     * Returns the device type that is the closest to the given observer width.
     * It does this by sorting the device types by order ASC (as we want to start
     * with the smallest screen) and then checking if the observer width is smaller
     * (or in the case of desktop, unlimited with `null`) than the max width of
     * the device. If it is, the device is returned.
     *
     * @param {number} observerWidth The width of the observer.
     * @returns {DeviceType|null}
     */
    closestDeviceType(observerWidth) {
      const deviceTypes = Object.values(this.$registry.getAll("device")).sort((deviceA, deviceB) => deviceA.getOrder() - deviceB.getOrder()).reverse();
      for (const device of deviceTypes) {
        if (device.maxWidth === null || observerWidth <= device.maxWidth) {
          return device;
        }
      }
      return null;
    },
    debounceGuessDevice: _.debounce(function(newWidth) {
      const device = this.closestDeviceType(newWidth);
      this.$store.dispatch("page/setDeviceTypeSelected", device.getType());
    }, 300)
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_PageElement = resolveComponent("PageElement");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "page" }, _attrs))}><!--[-->`);
  ssrRenderList(_ctx.visiblePageElementSections, (section) => {
    ssrRenderVNode(_push, createVNode(resolveDynamicComponent(section.tag), {
      key: section.key,
      class: section.classNames
    }, {
      default: withCtx((_2, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<!--[-->`);
          ssrRenderList(section.elements, (element) => {
            _push2(ssrRenderComponent(_component_PageElement, {
              key: element.id,
              element,
              mode: $options.mode,
              "application-context-additions": {
                page: $options.currentPage,
                recordIndexPath: []
              }
            }, null, _parent2, _scopeId));
          });
          _push2(`<!--]-->`);
        } else {
          return [
            (openBlock(true), createBlock(Fragment, null, renderList(section.elements, (element) => {
              return openBlock(), createBlock(_component_PageElement, {
                key: element.id,
                element,
                mode: $options.mode,
                "application-context-additions": {
                  page: $options.currentPage,
                  recordIndexPath: []
                }
              }, null, 8, ["element", "mode", "application-context-additions"]);
            }), 128))
          ];
        }
      }),
      _: 2
    }), _parent);
  });
  _push(`<!--]--></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("modules/builder/components/page/PageContent.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const PageContent = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]);
function userCanViewPage(user, isAuthenticated, page) {
  if (page.visibility === VISIBILITY_ALL) {
    return true;
  }
  if (!isAuthenticated) {
    return false;
  }
  if (page.role_type === ROLE_TYPE_ALLOW_EXCEPT) {
    return !page.roles.includes(user.role);
  } else if (page.role_type === ROLE_TYPE_DISALLOW_EXCEPT) {
    return page.roles.includes(user.role);
  } else if (page.role_type === ROLE_TYPE_ALLOW_ALL) {
    return true;
  }
  return false;
}
const head = {
  // The `key` on each favicon is what allows other parts of the app (e.g. the
  // application builder's custom favicon) to override these defaults. unhead
  // dedupes `link` tags by `key`.
  link: [
    {
      rel: "icon",
      type: "image/png",
      href: "/img/favicon_16.png",
      sizes: "16x16",
      key: "favicon-16"
    },
    {
      rel: "icon",
      type: "image/png",
      href: "/img/favicon_32.png",
      sizes: "32x32",
      key: "favicon-32"
    },
    {
      rel: "icon",
      type: "image/png",
      href: "/img/favicon_48.png",
      sizes: "64x64",
      key: "favicon-64"
    },
    {
      rel: "icon",
      type: "image/png",
      href: "/img/favicon_192.png",
      sizes: "192x192",
      key: "favicon-192"
    }
  ]
};
const getDefaultFaviconKeys = () => head.link.filter((link) => link.rel === "icon").map((link) => link.key);
const getCustomFaviconLinks = (builder) => {
  var _a;
  if (!((_a = builder.favicon_file) == null ? void 0 : _a.url)) {
    return null;
  }
  return getDefaultFaviconKeys().map((key) => ({
    key,
    rel: "icon",
    type: builder.favicon_file.mime_type,
    href: builder.favicon_file.url
  }));
};
const _sfc_main$1 = /* @__PURE__ */ Object.assign({
  name: "PublicPageContent"
}, {
  __name: "PublicPageContent",
  __ssrInlineRender: true,
  props: {
    workspace: {
      type: Object,
      required: true
    },
    builder: {
      type: Object,
      required: true
    },
    page: {
      type: Object,
      required: true
    },
    params: {
      type: Object,
      required: true
    },
    path: {
      type: String,
      required: true
    },
    mode: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    const store = useStore();
    const route = useRoute();
    const router = useRouter();
    const nuxtApp = useNuxtApp();
    const { $registry, $i18n } = nuxtApp;
    const props = __props;
    provide("workspace", props.workspace);
    provide("builder", props.builder);
    provide("currentPage", props.page);
    provide("mode", props.mode);
    provide("formulaComponent", _sfc_main$3Q);
    provide(
      "applicationContext",
      computed(() => applicationContext.value)
    );
    const elements = computed(() => {
      return store.getters["element/getRootElements"](props.page);
    });
    const builderPageDecorators = computed(() => {
      return Object.values($registry.getAll("builderPageDecorator") || {}).filter((decorator) => decorator.isDecorationAllowed(props.workspace)).map((decorator) => ({
        component: decorator.component,
        props: decorator.getProps()
      }));
    });
    const applicationContext = computed(() => ({
      workspace: props.workspace,
      builder: props.builder,
      pageParamsValue: props.params,
      mode: props.mode
    }));
    const dispatchContext = computed(
      () => DataProviderType.getAllDataSourceDispatchContext(
        $registry.getAll("builderDataProvider"),
        { ...applicationContext.value, page: props.page }
      )
    );
    const applicationDispatchContext = computed(
      () => DataProviderType.getAllDataSourceDispatchContext(
        $registry.getAll("builderDataProvider"),
        { builder: props.builder, mode: props.mode }
      )
    );
    const sharedPage = computed(
      () => store.getters["page/getSharedPage"](props.builder)
    );
    const sharedElements = computed(
      () => store.getters["element/getRootElements"](sharedPage.value)
    );
    const isAuthenticated = computed(
      () => store.getters["userSourceUser/isAuthenticated"](props.builder)
    );
    const faviconLinks = computed(() => getCustomFaviconLinks(props.builder));
    const themeConfigBlocks = computed(
      () => $registry.getOrderedList("themeConfigBlock")
    );
    const themeStyle = computed(
      () => ThemeConfigBlockType.getAllStyles(
        themeConfigBlocks.value,
        props.builder.theme
      )
    );
    const headConfig = computed(() => {
      const cssVars = Object.entries(themeStyle.value).map(([key, value]) => `
${key}: ${value};`).join(" ");
      const header = {
        titleTemplate: "",
        title: props.page.name,
        bodyAttrs: {
          class: "public-page"
        },
        style: [{ innerHTML: `:root { ${cssVars} }`, type: "text/css" }]
      };
      if (faviconLinks.value) {
        header.link = faviconLinks.value;
      }
      const pluginHeaders = $registry.getList("plugin").map(
        (plugin) => plugin.getBuilderApplicationHeaderAddition({
          builder: props.builder,
          mode: props.mode
        })
      );
      const result = _.mergeWith(
        {},
        ...pluginHeaders,
        header,
        (objValue, srcValue, key) => {
          switch (key) {
            case "link":
            case "script":
              if (_.isArray(objValue)) {
                return objValue.concat(srcValue);
              }
          }
          return void 0;
        }
      );
      return result;
    });
    useHead(headConfig);
    watch(
      () => route.query,
      (newQuery) => {
        Promise.all(
          props.page.query_params.map(({ name, type }) => {
            let value;
            try {
              if (newQuery[name]) {
                value = QUERY_PARAM_TYPE_HANDLER_FUNCTIONS[type](newQuery[name]);
              }
            } catch {
              return null;
            }
            return store.dispatch("pageParameter/setParameter", {
              page: props.page,
              name,
              value
            });
          })
        );
      },
      { immediate: true, deep: true }
    );
    watch(
      () => dispatchContext.value,
      (newDispatchContext, oldDispatchContext) => {
        if (!_.isEqual(newDispatchContext, oldDispatchContext)) {
          store.dispatch("dataSourceContent/debouncedFetchPageDataSourceContent", {
            page: props.page,
            data: newDispatchContext,
            mode: props.mode
          });
        }
      },
      { deep: true }
    );
    watch(
      () => applicationDispatchContext.value,
      (newDispatchContext, oldDispatchContext) => {
        if (!_.isEqual(newDispatchContext, oldDispatchContext)) {
          store.dispatch("dataSourceContent/debouncedFetchPageDataSourceContent", {
            page: sharedPage.value,
            data: newDispatchContext,
            mode: props.mode
          });
        }
      },
      { deep: true }
    );
    watch(
      () => isAuthenticated.value,
      async (newIsAuthenticated) => {
        await Promise.all([
          store.dispatch("dataSource/fetchPublished", {
            page: sharedPage.value
          }),
          store.dispatch("dataSource/fetchPublished", {
            page: props.page
          }),
          store.dispatch("element/fetchPublished", {
            builder: props.builder,
            page: sharedPage.value
          }),
          store.dispatch("element/fetchPublished", {
            builder: props.builder,
            page: props.page
          }),
          store.dispatch("builderWorkflowAction/fetchPublished", {
            page: props.page
          }),
          store.dispatch("builderWorkflowAction/fetchPublished", {
            page: sharedPage.value
          })
        ]);
        if (newIsAuthenticated) {
          await maybeRedirectToNextPage();
        } else {
          await maybeRedirectUserToLoginPage();
        }
      }
    );
    const canViewPage = computed(
      () => userCanViewPage(
        store.getters["userSourceUser/getUser"](props.builder),
        store.getters["userSourceUser/isAuthenticated"](props.builder),
        props.page
      )
    );
    const maybeRedirectUserToLoginPage = async () => {
      if (!canViewPage.value && props.builder.login_page_id) {
        const loginPage = await store.getters["page/getById"](
          props.builder,
          props.builder.login_page_id
        );
        const url = prefixInternalResolvedUrl(
          loginPage.path,
          props.builder,
          "page",
          props.mode
        );
        const currentPath = route.fullPath;
        if (url !== currentPath) {
          store.dispatch("builderToast/info", {
            title: $i18n.t("publicPage.authorizedToastTitle"),
            message: $i18n.t("publicPage.authorizedToastMessage")
          });
          const nextPath = encodeURIComponent(currentPath);
          await router.push({ path: url, query: { next: nextPath } });
        }
      }
    };
    const maybeRedirectToNextPage = async () => {
      if (route.query.next) {
        const decodedNext = decodeURIComponent(route.query.next);
        await router.push(decodedNext);
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(unref(BuilderToasts), null, null, _parent));
      _push(ssrRenderComponent(unref(RecursiveWrapper), { components: builderPageDecorators.value }, {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (canViewPage.value) {
              _push2(ssrRenderComponent(unref(PageContent), {
                path: __props.path,
                params: __props.params,
                elements: elements.value,
                "shared-elements": sharedElements.value
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              canViewPage.value ? (openBlock(), createBlock(unref(PageContent), {
                key: 0,
                path: __props.path,
                params: __props.params,
                elements: elements.value,
                "shared-elements": sharedElements.value
              }, null, 8, ["path", "params", "elements", "shared-elements"])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("modules/builder/components/PublicPageContent.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ Object.assign({
  name: "PublicPage"
}, {
  __name: "publicPage",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const logOffAndReturnToLogin = async ({ builder: builder2, store: store2, redirect }) => {
      await store2.dispatch("userSourceUser/logoff", {
        application: builder2
      });
      return redirect({
        name: "application-builder-page",
        params: { pathMatch: "/" }
      });
    };
    const store = useStore();
    const route = useRoute();
    const nuxtApp = useNuxtApp();
    const { $registry, $i18n } = nuxtApp;
    const requestHostname = useRequestURL().hostname;
    const {
      data: asyncDataResult,
      error,
      pending
    } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData(
      `publicPage_${requestHostname}_${route.fullPath}`,
      async () => {
        var _a, _b, _c, _d, _e;
        let mode2 = "public";
        const query = route.query;
        const builderId = route.params.builderId ? parseInt(route.params.builderId, 10) : null;
        if (builderId) {
          mode2 = "preview";
        }
        let builder2 = store.getters["application/getSelected"];
        let needPostBuilderLoading = false;
        if (!builder2 || builderId && builderId !== builder2.id) {
          try {
            if (builderId) {
              await store.dispatch("publicBuilder/fetchById", {
                builderId
              });
              builder2 = await store.dispatch("application/selectById", builderId);
            } else {
              const { id: receivedBuilderId } = await store.dispatch(
                "publicBuilder/fetchByDomain",
                {
                  domain: requestHostname
                }
              );
              builder2 = await store.dispatch(
                "application/selectById",
                receivedBuilderId
              );
            }
          } catch (e) {
            throw createError({
              statusCode: 404,
              message: $i18n.t("publicPage.siteNotFound"),
              data: {
                report: false
              },
              fatal: true
            });
          }
          needPostBuilderLoading = true;
        }
        store.dispatch("userSourceUser/setCurrentApplication", {
          application: builder2
        });
        if (!store.getters["userSourceUser/isAuthenticated"](builder2)) {
          const refreshToken = await getTokenIfEnoughTimeLeft(
            nuxtApp,
            userSourceCookieTokenName
          );
          if (refreshToken) {
            try {
              await store.dispatch("userSourceUser/refreshAuth", {
                application: builder2,
                token: refreshToken
              });
            } catch (error2) {
              if (((_a = error2.response) == null ? void 0 : _a.status) === 401) {
                await logOffAndReturnToLogin({
                  builder: builder2,
                  store,
                  redirect: navigateTo
                });
              } else {
                throw error2;
              }
            }
          }
        }
        if (needPostBuilderLoading) {
          const sharedPage = await store.getters["page/getSharedPage"](builder2);
          await Promise.all([
            store.dispatch("dataSource/fetchPublished", {
              page: sharedPage
            }),
            store.dispatch("element/fetchPublished", {
              builder: builder2,
              page: sharedPage
            }),
            store.dispatch("builderWorkflowAction/fetchPublished", {
              page: sharedPage
            })
          ]);
          await DataProviderType.initOnceAll(
            $registry.getAll("builderDataProvider"),
            {
              builder: builder2,
              mode: mode2
            }
          );
        }
        for (const userSource of builder2.user_sources) {
          for (const authProvider of userSource.auth_providers) {
            const authError = $registry.get("appAuthProvider", authProvider.type).handleError(userSource, authProvider, route);
            if (authError) {
              throw createError({
                statusCode: authError.code,
                message: authError.message,
                data: {
                  report: false
                },
                fatal: true
              });
            }
          }
        }
        const found = resolveApplicationRoute(
          store.getters["page/getVisiblePages"](builder2),
          Array.isArray(route.params.pathMatch) ? route.params.pathMatch.join("/") : route.params.pathMatch
        );
        if (!found) {
          throw createError({
            statusCode: 404,
            message: $i18n.t("publicPage.pageNotFound"),
            data: {
              report: false
            },
            fatal: true
          });
        }
        const [pageFound, path2, pageParams] = found;
        if (pageFound.shared) {
          throw createError({
            statusCode: 404,
            message: $i18n.t("publicPage.pageNotFound"),
            data: {
              report: false
            },
            fatal: true
          });
        }
        const pageParamsValue = Object.assign({}, query, pageParams);
        pageFound.query_params.forEach((queryParam) => {
          if (queryParam.name in pageParamsValue) {
            return;
          }
          if (queryParam.type === "text") {
            pageParamsValue[queryParam.name] = "";
          } else {
            pageParamsValue[queryParam.name] = null;
          }
        });
        const page = await store.getters["page/getById"](builder2, pageFound.id);
        try {
          await Promise.all([
            store.dispatch("dataSource/fetchPublished", {
              page
            }),
            store.dispatch("element/fetchPublished", { builder: builder2, page }),
            store.dispatch("builderWorkflowAction/fetchPublished", { page })
          ]);
        } catch (error2) {
          if (((_b = error2.response) == null ? void 0 : _b.status) === 401) {
            await logOffAndReturnToLogin({ builder: builder2, store, redirect: navigateTo });
          } else if (((_c = error2.response) == null ? void 0 : _c.status) === 404 && ((_e = (_d = error2.response) == null ? void 0 : _d.data) == null ? void 0 : _e.error) === "ERROR_PAGE_DOES_NOT_EXIST") {
            throw createError({
              statusCode: 404,
              statusMessage: $i18n.t("publicPage.pageNotFound"),
              data: {
                report: false
              },
              fatal: true
            });
          } else {
            throw error2;
          }
        }
        await DataProviderType.initAll($registry.getAll("builderDataProvider"), {
          builder: builder2,
          page,
          pageParamsValue,
          mode: mode2
        });
        await store.dispatch("page/selectById", {
          builder: builder2,
          pageId: pageFound.id
        });
        if (!store.getters["auth/isAuthenticated"]) {
          store.dispatch("auth/forceSetAdditionalData", {
            active_licenses: {
              per_workspace: {
                [builder2.workspace.id]: Object.fromEntries(
                  (builder2.workspace.licenses || []).map((license) => [
                    license,
                    true
                  ])
                )
              }
            }
          });
        }
        return {
          workspace: builder2.workspace,
          builder: builder2,
          currentPage: page,
          params: pageParams,
          path: path2,
          mode: mode2
        };
      }
    )), __temp = await __temp, __restore(), __temp);
    if (error.value) {
      throw error.value;
    }
    const workspace = computed(() => {
      var _a;
      return (_a = asyncDataResult.value) == null ? void 0 : _a.workspace;
    });
    const builder = computed(() => {
      var _a;
      return (_a = asyncDataResult.value) == null ? void 0 : _a.builder;
    });
    const currentPage = computed(() => {
      var _a;
      return (_a = asyncDataResult.value) == null ? void 0 : _a.currentPage;
    });
    const path = computed(() => {
      var _a;
      return (_a = asyncDataResult.value) == null ? void 0 : _a.path;
    });
    const params = computed(() => {
      var _a;
      return (_a = asyncDataResult.value) == null ? void 0 : _a.params;
    });
    const mode = computed(() => {
      var _a;
      return (_a = asyncDataResult.value) == null ? void 0 : _a.mode;
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (!unref(pending) && !unref(error)) {
        _push(ssrRenderComponent(_sfc_main$1, mergeProps({
          workspace: workspace.value,
          builder: builder.value,
          page: currentPage.value,
          params: params.value,
          path: path.value,
          mode: mode.value
        }, _attrs), null, _parent));
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("modules/builder/pages/publicPage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=publicPage-DrvuoGPB.mjs.map
