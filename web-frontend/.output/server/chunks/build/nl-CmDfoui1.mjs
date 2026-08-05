!(function() {
  try {
    var e = false ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
    var n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "ea737805-ce5a-45dc-a435-2c2dbb9632a9", e._sentryDebugIdIdentifier = "sentry-dbid-ea737805-ce5a-45dc-a435-2c2dbb9632a9");
  } catch (e2) {
  }
})();
const resource = {
  "dashboard": {
    "descriptionPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Beschrijving" } }
  },
  "dashboardHeader": {
    "doneEditing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Klaar met aanpassen" } }
  },
  "emptyDashboard": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dit dashboard heeft geen widgets" } },
    "subtitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ga aan de slag door er \xE9\xE9n toe te voegen." } },
    "addWidget": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Widget toevoegen" } }
  },
  "dashboardHeaderMenuItems": {
    "editMode": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Bewerkmodus" } }
  },
  "createWidgetModal": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nieuwe widget toevoegen" } }
  },
  "widget": {
    "fixConfiguration": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Configuratie oplossen" } }
  },
  "summaryWidget": {
    "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Samenvatting" } }
  },
  "emptyDashboardSidebar": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Geen element geselecteerd" } },
    "message": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Klik op \xE9\xE9n van de elementen om details te zien." } }
  },
  "widgetSettings": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Titel" } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Beschrijving" } }
  },
  "aggregateRowsDataSourceForm": {
    "data": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Gegevens" } },
    "sourceFieldLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Bron" } },
    "viewFieldLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Weergave" } },
    "notSelected": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Niet geselecteerd" } },
    "aggregationFieldLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Veld" } },
    "aggregationTypeLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Samenvatting" } }
  },
  "widgetContext": {
    "delete": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Verwijderen" } }
  },
  "trashType": {
    "widget": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "widget" } }
  }
};

export { resource as default };
//# sourceMappingURL=nl-CmDfoui1.mjs.map
