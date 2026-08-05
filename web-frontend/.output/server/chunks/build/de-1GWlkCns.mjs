!(function() {
  try {
    var e = false ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
    var n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "c0b8591b-aa5c-4ddf-9e47-16972f81298b", e._sentryDebugIdIdentifier = "sentry-dbid-c0b8591b-aa5c-4ddf-9e47-16972f81298b");
  } catch (e2) {
  }
})();
const resource = {
  "dashboard": {
    "descriptionPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Beschreibung" } }
  },
  "dashboardHeader": {
    "doneEditing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Bearbeitung abgeschlossen" } }
  },
  "emptyDashboard": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dieses Dashboard enth\xE4lt keine Widgets" } },
    "subtitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Beginnen Sie, indem Sie eines hinzuf\xFCgen." } },
    "addWidget": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Widget hinzuf\xFCgen" } }
  },
  "dashboardHeaderMenuItems": {
    "editMode": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Bearbeitungsmodus" } }
  },
  "createWidgetModal": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Neues Widget hinzuf\xFCgen" } }
  },
  "widget": {
    "fixConfiguration": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Konfiguration korrigieren" } }
  },
  "summaryWidget": {
    "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zusammenfassung" } }
  },
  "emptyDashboardSidebar": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kein Element ausgew\xE4hlt" } },
    "message": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Klicken Sie auf eines der Elemente, um Details anzuzeigen." } }
  },
  "widgetSettings": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Titel" } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Beschreibung" } }
  },
  "aggregateRowsDataSourceForm": {
    "data": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Daten" } },
    "sourceFieldLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Quelle" } },
    "viewFieldLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ansicht" } },
    "notSelected": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nicht ausgew\xE4hlt" } },
    "aggregationFieldLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Feld" } },
    "aggregationTypeLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zusammenfassung" } }
  },
  "widgetContext": {
    "delete": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "L\xF6schen" } }
  },
  "trashType": {
    "widget": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Widget" } }
  }
};

export { resource as default };
//# sourceMappingURL=de-1GWlkCns.mjs.map
