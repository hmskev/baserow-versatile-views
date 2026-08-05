!(function() {
  try {
    var e = false ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
    var n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "2ad360ae-7b76-447e-a449-6c5afd2f73c6", e._sentryDebugIdIdentifier = "sentry-dbid-2ad360ae-7b76-447e-a449-6c5afd2f73c6");
  } catch (e2) {
  }
})();
const resource = {
  "dashboard": {
    "descriptionPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u041E\u043F\u0438\u0441" } }
  },
  "dashboardHeader": {
    "doneEditing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u043D\u043D\u044F \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u043E" } }
  },
  "emptyDashboard": {
    "addWidget": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u0414\u043E\u0434\u0430\u0442\u0438 \u0432\u0456\u0434\u0436\u0435\u0442" } },
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u041D\u0430 \u0446\u0456\u0439 \u043F\u0430\u043D\u0435\u043B\u0456 \u043A\u0435\u0440\u0443\u0432\u0430\u043D\u043D\u044F \u043D\u0435\u043C\u0430\u0454 \u0432\u0456\u0434\u0436\u0435\u0442\u0456\u0432" } },
    "subtitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u041F\u043E\u0447\u043D\u0456\u0442\u044C, \u0434\u043E\u0434\u0430\u0432\u0448\u0438 \u043E\u0434\u0438\u043D." } }
  },
  "dashboardHeaderMenuItems": {
    "editMode": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u0420\u0435\u0436\u0438\u043C \u0440\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u043D\u043D\u044F" } }
  },
  "createWidgetModal": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u0414\u043E\u0434\u0430\u0442\u0438 \u043D\u043E\u0432\u0438\u0439 \u0432\u0456\u0434\u0436\u0435\u0442" } }
  },
  "widget": {
    "fixConfiguration": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u0412\u0438\u043F\u0440\u0430\u0432\u0438\u0442\u0438 \u043D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u043D\u044F" } }
  },
  "summaryWidget": {
    "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u041F\u0456\u0434\u0441\u0443\u043C\u043E\u043A" } }
  },
  "emptyDashboardSidebar": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u0415\u043B\u0435\u043C\u0435\u043D\u0442 \u043D\u0435 \u0432\u0438\u0431\u0440\u0430\u043D\u043E" } },
    "message": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u041A\u043B\u0430\u0446\u043D\u0456\u0442\u044C \u043D\u0430 \u043E\u0434\u0438\u043D \u0456\u0437 \u0435\u043B\u0435\u043C\u0435\u043D\u0442\u0456\u0432, \u0449\u043E\u0431 \u043F\u0435\u0440\u0435\u0433\u043B\u044F\u043D\u0443\u0442\u0438 \u0434\u0435\u0442\u0430\u043B\u0456." } }
  },
  "widgetSettings": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u041D\u0430\u0437\u0432\u0430 \u0435\u043B\u0435\u043C\u0435\u043D\u0442\u0430" } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u041E\u043F\u0438\u0441" } }
  },
  "aggregateRowsDataSourceForm": {
    "data": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u0414\u0430\u043D\u0456" } },
    "sourceFieldLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u0414\u0436\u0435\u0440\u0435\u043B\u043E" } },
    "viewFieldLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u0412\u0438\u0433\u043B\u044F\u0434" } },
    "notSelected": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u041D\u0435 \u0432\u0438\u0431\u0440\u0430\u043D\u043E" } },
    "aggregationFieldLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u041F\u043E\u043B\u0435" } },
    "aggregationTypeLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u041F\u0456\u0434\u0441\u0443\u043C\u043E\u043A" } }
  },
  "widgetContext": {
    "delete": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438" } }
  },
  "trashType": {
    "widget": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u0412\u0456\u0434\u0436\u0435\u0442" } }
  }
};

export { resource as default };
//# sourceMappingURL=uk-D7xxlsxO.mjs.map
