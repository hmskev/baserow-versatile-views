!(function() {
  try {
    var e = false ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
    var n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "dffbe974-09e9-4341-bee5-150b576c4b01", e._sentryDebugIdIdentifier = "sentry-dbid-dffbe974-09e9-4341-bee5-150b576c4b01");
  } catch (e2) {
  }
})();
const resource = {
  "dashboard": {
    "descriptionPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Description" } }
  },
  "dashboardHeader": {
    "doneEditing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Edition termin\xE9e" } }
  },
  "emptyDashboard": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ce tableau de bord n'a aucun widget" } },
    "subtitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Commencez par en ajouter un." } },
    "addWidget": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ajouter un widget" } }
  },
  "dashboardHeaderMenuItems": {
    "editMode": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mode \xE9dition" } }
  },
  "createWidgetModal": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ajouter un nouveau widget" } }
  },
  "widget": {
    "fixConfiguration": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Corriger la configuration" } }
  },
  "summaryWidget": {
    "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "R\xE9sum\xE9" } }
  },
  "emptyDashboardSidebar": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aucun \xE9l\xE9ment s\xE9lectionn\xE9" } },
    "message": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cliquez sur l'un des \xE9l\xE9ments pour voir les d\xE9tails." } }
  },
  "widgetSettings": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Titre" } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Description" } }
  },
  "aggregateRowsDataSourceForm": {
    "data": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Donn\xE9es" } },
    "sourceFieldLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Source" } },
    "viewFieldLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Vue" } },
    "notSelected": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Non s\xE9lectionn\xE9" } },
    "aggregationFieldLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Colonne" } },
    "aggregationTypeLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "R\xE9sum\xE9" } }
  },
  "widgetContext": {
    "delete": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Supprimer" } }
  },
  "trashType": {
    "widget": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "widget" } }
  }
};

export { resource as default };
//# sourceMappingURL=fr-BbQZHltn.mjs.map
