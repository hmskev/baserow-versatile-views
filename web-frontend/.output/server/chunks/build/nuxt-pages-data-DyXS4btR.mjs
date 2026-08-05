!(function() {
  try {
    var e = false ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
    var n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "9b8b6480-1258-4908-affb-94e601984aac", e._sentryDebugIdIdentifier = "sentry-dbid-9b8b6480-1258-4908-affb-94e601984aac");
  } catch (e2) {
  }
})();
const nuxtPagesData = [
  {
    "file": "/src/web-frontend/modules/core/pages/workspaceInvitation.vue",
    "path": "/workspace-invitation/:token"
  },
  {
    "file": "/src/web-frontend/modules/core/pages/template.vue",
    "path": "/template/:slug"
  },
  {
    "file": "/src/web-frontend/modules/core/pages/_health.vue",
    "path": "/_health/:trailing()?"
  },
  {
    "file": "/src/web-frontend/modules/core/pages/notificationRedirect.vue",
    "path": "/notification/:workspaceId/:notificationId"
  },
  {
    "file": "/src/web-frontend/modules/database/pages/table.vue",
    "path": "/database/:databaseId/table/:tableId/:viewId?"
  },
  {
    "path": "/api/docs/database/:databaseId"
  },
  {
    "file": "/src/web-frontend/modules/database/pages/APIDocsDatabase.vue",
    "path": "/api-docs/database/:databaseId"
  },
  {
    "file": "/src/web-frontend/modules/database/pages/form.vue",
    "path": "/form/:slug"
  },
  {
    "file": "/src/web-frontend/modules/database/pages/publicView.vue",
    "path": "/public/grid/:slug"
  },
  {
    "file": "/src/web-frontend/modules/database/pages/publicView.vue",
    "path": "/public/gallery/:slug"
  },
  {
    "file": "/src/web-frontend/modules/database/pages/publicViewLogin.vue",
    "path": "/public/auth/:slug"
  },
  {
    "file": "/src/web-frontend/modules/dashboard/pages/dashboard.vue",
    "path": "/dashboard/:dashboardId"
  },
  {
    "file": "/src/web-frontend/modules/builder/pages/pageEditor.vue",
    "path": "/builder/:builderId/page/:pageId"
  },
  {
    "file": "/src/web-frontend/modules/builder/pages/publicPage.vue",
    "path": "/:pathMatch(.*)*"
  },
  {
    "file": "/src/web-frontend/modules/builder/pages/publicPage.vue",
    "path": "/builder/:builderId/preview/:pathMatch(.*)*"
  },
  {
    "file": "/src/web-frontend/modules/automation/pages/automationWorkflow.vue",
    "path": "/automation/:automationId/workflow/:workflowId"
  }
];

export { nuxtPagesData as default };
//# sourceMappingURL=nuxt-pages-data-DyXS4btR.mjs.map
