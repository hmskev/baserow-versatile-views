!(function() {
  try {
    var e = false ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
    var n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "9a734f82-e41f-44af-adcf-f57e717da2a7", e._sentryDebugIdIdentifier = "sentry-dbid-9a734f82-e41f-44af-adcf-f57e717da2a7");
  } catch (e2) {
  }
})();
const resource = {
  "dashboard": {
    "descriptionPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Descrizione" } }
  },
  "dashboardHeader": {
    "doneEditing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Fatto la modifica" } }
  },
  "emptyDashboard": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Questa dashboard non ha nessun widget" } },
    "subtitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Inizia aggiungendone uno." } },
    "addWidget": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aggiungi widget" } }
  }
};

export { resource as default };
//# sourceMappingURL=it-BRZI5hcU.mjs.map
