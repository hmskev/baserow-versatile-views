!(function() {
  try {
    var e = false ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
    var n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "8954e4c3-d652-44ad-bc29-ad07c80d25da", e._sentryDebugIdIdentifier = "sentry-dbid-8954e4c3-d652-44ad-bc29-ad07c80d25da");
  } catch (e2) {
  }
})();
const resource = {
  "dashboard": {
    "descriptionPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Descripci\xF3n" } }
  },
  "dashboardHeader": {
    "doneEditing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Edici\xF3n completada" } }
  },
  "emptyDashboard": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Este tablero no tiene ning\xFAn widget" } },
    "subtitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Empieza a\xF1adiendo uno." } },
    "addWidget": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "A\xF1adir widget" } }
  },
  "dashboardHeaderMenuItems": {
    "editMode": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Modo de edici\xF3n" } }
  },
  "createWidgetModal": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "A\xF1adir nuevo widget" } }
  },
  "widget": {
    "fixConfiguration": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Corregir la configuraci\xF3n" } }
  },
  "summaryWidget": {
    "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Resumen" } }
  },
  "emptyDashboardSidebar": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ning\xFAn elemento seleccionado" } },
    "message": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Haz clic en uno de los elementos para ver los detalles." } }
  },
  "widgetSettings": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "T\xEDtulo" } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Descripci\xF3n" } }
  },
  "aggregateRowsDataSourceForm": {
    "data": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Datos" } },
    "sourceFieldLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Fuente" } },
    "viewFieldLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ver" } },
    "notSelected": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "No seleccionado" } },
    "aggregationFieldLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Campo" } },
    "aggregationTypeLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Resumen" } }
  },
  "widgetContext": {
    "delete": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Eliminar" } }
  },
  "trashType": {
    "widget": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "widget" } }
  }
};

export { resource as default };
//# sourceMappingURL=es-dRp8tAp8.mjs.map
