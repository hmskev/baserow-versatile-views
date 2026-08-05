!(function() {
  try {
    var e = false ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
    var n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "47f0f75a-9564-4099-a6db-f7b449fbd0be", e._sentryDebugIdIdentifier = "sentry-dbid-47f0f75a-9564-4099-a6db-f7b449fbd0be");
  } catch (e2) {
  }
})();
const resource = {
  "dashboard": {
    "descriptionPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Description" } }
  },
  "dashboardHeader": {
    "doneEditing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Done editing" } }
  },
  "emptyDashboard": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "This dashboard doesn't have any widgets" } },
    "subtitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Get started by adding one." } },
    "addWidget": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Add widget" } }
  },
  "dashboardHeaderMenuItems": {
    "editMode": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Edit mode" } }
  },
  "createWidgetModal": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Add new widget" } }
  },
  "widget": {
    "fixConfiguration": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Fix configuration" } }
  },
  "summaryWidget": {
    "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Summary" } }
  },
  "emptyDashboardSidebar": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "No element selected" } },
    "message": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Click on one of the elements to see details." } }
  },
  "widgetSettings": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Title" } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Description" } }
  },
  "aggregateRowsDataSourceForm": {
    "data": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Data" } },
    "sourceFieldLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Source" } },
    "viewFieldLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "View" } },
    "notSelected": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Not selected" } },
    "aggregationFieldLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Field" } },
    "aggregationTypeLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Summary" } }
  },
  "widgetContext": {
    "delete": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Delete" } }
  },
  "trashType": {
    "widget": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "widget" } }
  }
};

export { resource as default };
//# sourceMappingURL=en-6Junijrs.mjs.map
