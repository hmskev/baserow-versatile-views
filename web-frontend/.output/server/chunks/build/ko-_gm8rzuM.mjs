!(function() {
  try {
    var e = false ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
    var n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "6211e2c2-636c-4960-865e-7f719ffa772c", e._sentryDebugIdIdentifier = "sentry-dbid-6211e2c2-636c-4960-865e-7f719ffa772c");
  } catch (e2) {
  }
})();
const resource = {
  "webhookModal": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "name" }, { "t": 3, "v": " \uC6F9\uD6C5" }] } },
    "createWebhook": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC6F9\uD6C5 \uC0DD\uC131" } },
    "backToList": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBAA9\uB85D\uC73C\uB85C \uB3CC\uC544\uAC00\uAE30" } }
  },
  "deleteWebhookModal": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "webhookName" }, { "t": 3, "v": " \uC0AD\uC81C" }] } },
    "deleteButton": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC6F9\uD6C5 \uC0AD\uC81C" } },
    "body": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774 \uC6F9\uD6C5\uC744 \uC0AD\uC81C\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C? \uB098\uC911\uC5D0 \uBCF5\uC6D0\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4." } }
  },
  "webhookList": {
    "noWebhooksMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC544\uC9C1 \uC6F9\uD6C5\uC744 \uC0DD\uC131\uD558\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4. \uC6F9\uD6C5\uC740 Baserow\uC5D0\uC11C \uD589\uC774 \uC0DD\uC131, \uC5C5\uB370\uC774\uD2B8 \uB610\uB294 \uC0AD\uC81C\uB420 \uB54C \uC81C3\uC790 \uC2DC\uC2A4\uD15C\uC5D0 \uC54C\uB9AC\uB294 \uB370 \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4." } }
  },
  "testWebhookModal": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC6F9\uD6C5 \uD14C\uC2A4\uD2B8" } },
    "unreachable": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC11C\uBC84\uC5D0 \uC5F0\uACB0\uD560 \uC218 \uC5C6\uC74C" } }
  },
  "webhookForm": {
    "inputLabels": {
      "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774\uB984" } },
      "value": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAC12" } },
      "requestMethod": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBA54\uC11C\uB4DC" } },
      "url": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "URL" } },
      "userFieldNames": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC0AC\uC6A9\uC790 \uD544\uB4DC \uC774\uB984" } },
      "events": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC5B4\uB5A4 \uC774\uBCA4\uD2B8\uAC00 \uC774 \uC6F9\uD6C5\uC744 \uD2B8\uB9AC\uAC70\uD574\uC57C \uD558\uB098\uC694?" } },
      "headers": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uCD94\uAC00 \uD5E4\uB354" } },
      "example": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC608\uC2DC \uD398\uC774\uB85C\uB4DC" } }
    },
    "errors": {
      "urlField": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "'https://' \uB610\uB294 'http://'\uB85C \uC2DC\uC791\uD558\uB294 \uC720\uD6A8\uD55C URL\uC774\uC5B4\uC57C \uD569\uB2C8\uB2E4." } },
      "invalidHeaders": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD5E4\uB354 \uC911 \uD558\uB098\uAC00 \uC720\uD6A8\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4." } }
    },
    "checkbox": {
      "sendUserFieldNames": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "ID \uB300\uC2E0 \uD544\uB4DC \uC774\uB984 \uC0AC\uC6A9" } }
    },
    "radio": {
      "allEvents": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBAA8\uB4E0 \uC774\uBCA4\uD2B8 \uBCF4\uB0B4\uAE30" } },
      "customEvents": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAC1C\uBCC4 \uC774\uBCA4\uD2B8 \uC120\uD0DD\uD558\uAE30" } }
    },
    "triggerButton": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC6F9\uD6C5 \uD2B8\uB9AC\uAC70 \uD14C\uC2A4\uD2B8" } },
    "deactivated": {
      "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC6F9\uD6C5\uC774 \uBE44\uD65C\uC131\uD654\uB418\uC5C8\uC2B5\uB2C8\uB2E4" } },
      "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC5F0\uC18D\uB41C \uC2E4\uD328\uAC00 \uB108\uBB34 \uB9CE\uC544 \uC774 \uC6F9\uD6C5\uC774 \uBE44\uD65C\uC131\uD654\uB418\uC5C8\uC2B5\uB2C8\uB2E4. \uC790\uC138\uD55C \uB0B4\uC6A9\uC740 \uD638\uCD9C \uB85C\uADF8\uB97C \uD655\uC778\uD558\uC138\uC694. \uB2E4\uC2DC \uD65C\uC131\uD654\uD558\uB824\uBA74 \uC544\uB798 \uBC84\uD2BC\uC744 \uD074\uB9AD\uD558\uC138\uC694. \uD65C\uC131\uD654 \uD6C4 \uC6F9\uD6C5\uC744 \uC800\uC7A5\uD558\uB294 \uAC83\uC744 \uC78A\uC9C0 \uB9C8\uC138\uC694." } },
      "activate": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD65C\uC131\uD654" } }
    },
    "triggerWhenFieldsHaveChanged": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD544\uB4DC\uAC00 \uBCC0\uACBD\uB418\uC5C8\uC744 \uB54C \uD2B8\uB9AC\uAC70" } },
    "helpTriggerWhenFieldsHaveChanged": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC120\uD0DD\uD55C \uD544\uB4DC\uC758 \uC140 \uAC12\uC774 \uBCC0\uACBD\uB420 \uB54C\uB9CC \uD2B8\uB9AC\uAC70\uB429\uB2C8\uB2E4." } }
  },
  "webhook": {
    "details": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC138\uBD80 \uC815\uBCF4" } },
    "lastCall": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "\uB9C8\uC9C0\uB9C9 \uD638\uCD9C: " }, { "t": 4, "k": "lastCallTime" }] } },
    "noCalls": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD638\uCD9C \uAE30\uB85D \uC5C6\uC74C" } },
    "callLog": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD638\uCD9C \uB85C\uADF8" } },
    "triggerDescription": { "t": 0, "b": { "t": 1, "c": [{ "t": 2, "i": [{ "t": 3 }], "s": "\uBAA8\uB4E0 \uC774\uBCA4\uD2B8\uC5D0\uC11C \uD2B8\uB9AC\uAC70\uB429\uB2C8\uB2E4" }, { "t": 2, "i": [{ "t": 4, "k": "count" }, { "t": 3, "v": "\uAC1C\uC758 \uC774\uBCA4\uD2B8\uC5D0\uC11C \uD2B8\uB9AC\uAC70\uB429\uB2C8\uB2E4" }] }, { "t": 2, "i": [{ "t": 4, "k": "count" }, { "t": 3, "v": "\uAC1C\uC758 \uC774\uBCA4\uD2B8\uC5D0\uC11C \uD2B8\uB9AC\uAC70\uB429\uB2C8\uB2E4" }] }] } }
  },
  "createWebhook": {
    "errorTableWebhookMaxLimitExceededTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uCD5C\uB300 \uC6F9\uD6C5 \uCD08\uACFC" } },
    "errorTableWebhookMaxLimitExceededDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD14C\uC774\uBE14\uB2F9 \uCD5C\uB300 \uC6F9\uD6C5 \uC218\uB97C \uCD08\uACFC\uD558\uC5EC \uC6F9\uD6C5\uC744 \uC0DD\uC131\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4." } }
  },
  "sidebar": {
    "viewAPI": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "API \uBB38\uC11C \uBCF4\uAE30" } },
    "createTable": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC0C8 \uD14C\uC774\uBE14" } }
  },
  "sidebarItem": {
    "exportTable": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD14C\uC774\uBE14 \uB0B4\uBCF4\uB0B4\uAE30" } },
    "webhooks": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC6F9\uD6C5" } },
    "lastSynced": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB9C8\uC9C0\uB9C9 \uB3D9\uAE30\uD654" } },
    "notSynced": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB3D9\uAE30\uD654\uB418\uC9C0 \uC54A\uC74C" } },
    "sync": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD14C\uC774\uBE14 \uB3D9\uAE30\uD654" } },
    "updateSyncConfig": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB3D9\uAE30\uD654 \uAD6C\uC131 \uC5C5\uB370\uC774\uD2B8" } },
    "importFile": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAC00\uC838\uC624\uAE30 \uD30C\uC77C" } }
  },
  "duplicateTableJobType": {
    "duplicating": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBCF5\uC81C \uC911" } },
    "duplicatedTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD14C\uC774\uBE14 \uBCF5\uC81C\uB428" } },
    "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD14C\uC774\uBE14 \uBCF5\uC81C" } }
  },
  "apiToken": {
    "create": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC0DD\uC131" } },
    "read": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC77D\uAE30" } },
    "update": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC5C5\uB370\uC774\uD2B8" } },
    "delete": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC0AD\uC81C" } },
    "tokenPrefix": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD1A0\uD070:" } },
    "viewAPIDocs": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "API \uBB38\uC11C \uBCF4\uAE30" } },
    "generateNewToken": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC0C8 \uD1A0\uD070 \uC0DD\uC131" } },
    "showOrHide": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD1A0\uD070 \uD45C\uC2DC \uB610\uB294 \uC228\uAE30\uAE30" } },
    "copyToClipboard": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD074\uB9BD\uBCF4\uB4DC\uC5D0 \uBCF5\uC0AC" } },
    "showDatabases": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB370\uC774\uD130\uBCA0\uC774\uC2A4 \uD45C\uC2DC" } }
  },
  "apiTokenSettings": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB370\uC774\uD130\uBCA0\uC774\uC2A4 \uD1A0\uD070" } },
    "createToken": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD1A0\uD070 \uC0DD\uC131" } },
    "noTokensMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC544\uC9C1 \uB370\uC774\uD130\uBCA0\uC774\uC2A4 \uD1A0\uD070\uC744 \uC0DD\uC131\uD558\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4. \uB370\uC774\uD130\uBCA0\uC774\uC2A4 \uD1A0\uD070\uC744 \uC0AC\uC6A9\uD558\uC5EC \uD589\uC744 \uC0DD\uC131, \uC77D\uAE30, \uC5C5\uB370\uC774\uD2B8 \uBC0F \uC0AD\uC81C\uD560 \uC218 \uC788\uB294 REST API \uC5D4\uB4DC\uD3EC\uC778\uD2B8\uC5D0 \uC778\uC99D\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uD14C\uC774\uBE14 \uC218\uC900\uC5D0\uC11C \uAD8C\uD55C\uC744 \uC124\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4." } },
    "hasFullPermissions": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBAA8\uB4E0 \uD558\uC704 \uD56D\uBAA9\uC5D0 \uB300\uD55C \uC804\uCCB4 \uAD8C\uD55C\uC744 \uAC00\uC9D1\uB2C8\uB2E4." } },
    "hasOnlySelectedPermissions": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC120\uD0DD\uD55C \uD558\uC704 \uD56D\uBAA9\uC5D0\uB9CC \uAD8C\uD55C\uC774 \uC788\uC2B5\uB2C8\uB2E4." } },
    "noPermissions": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAD8C\uD55C\uC774 \uC5C6\uC2B5\uB2C8\uB2E4." } },
    "createNewTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC0C8 \uB370\uC774\uD130\uBCA0\uC774\uC2A4 \uD1A0\uD070 \uC0DD\uC131" } },
    "backToOverview": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAC1C\uC694\uB85C \uB3CC\uC544\uAC00\uAE30" } }
  },
  "apiTokenForm": {
    "nameLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774\uB984" } },
    "workspaceLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC791\uC5C5\uACF5\uAC04" } }
  },
  "apiDocsSelectDatabase": {
    "needOneDatabase": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "API \uBB38\uC11C\uB97C \uBCF4\uB824\uBA74 \uCD5C\uC18C \uD558\uB098\uC758 \uB370\uC774\uD130\uBCA0\uC774\uC2A4\uAC00 \uD544\uC694\uD569\uB2C8\uB2E4." } }
  },
  "apiDocsExample": {
    "requestSample": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC694\uCCAD \uC0D8\uD50C" } },
    "responseSample": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC751\uB2F5 \uC0D8\uD50C" } },
    "userFieldNames": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC0AC\uC6A9\uC790 \uD544\uB4DC \uC774\uB984" } }
  },
  "apiDocsParameter": {
    "optional": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC120\uD0DD \uC0AC\uD56D" } },
    "defaultValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "\uAE30\uBCF8\uAC12: " }, { "t": 4, "k": "value" }] } }
  },
  "apiDocsTableGetRow": {
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "\uB2E8\uC77C " }, { "t": 4, "k": "name" }, { "t": 3, "v": " \uD589\uC744 \uAC00\uC838\uC635\uB2C8\uB2E4." }] } },
    "rowId": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC694\uCCAD\uB41C \uD589\uC758 \uACE0\uC720 \uC2DD\uBCC4\uC790\uC785\uB2C8\uB2E4." } }
  },
  "apiDocsErrors": {
    "errorCode": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC624\uB958 \uCF54\uB4DC" } },
    "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774\uB984" } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC124\uBA85" } },
    "okDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC694\uCCAD\uC774 \uC131\uACF5\uC801\uC73C\uB85C \uC644\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4." } },
    "badRequestDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC694\uCCAD\uC5D0 \uC798\uBABB\uB41C \uAC12\uC774 \uD3EC\uD568\uB418\uC5B4 \uC788\uAC70\uB098 JSON\uC744 \uAD6C\uBB38 \uBD84\uC11D\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4." } },
    "unauthorizedDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC720\uD6A8\uD55C \uB370\uC774\uD130\uBCA0\uC774\uC2A4 \uD1A0\uD070 \uC5C6\uC774 \uC5D4\uB4DC\uD3EC\uC778\uD2B8\uC5D0 \uC811\uADFC\uD558\uB824\uACE0 \uD560 \uB54C \uBC1C\uC0DD\uD569\uB2C8\uB2E4." } },
    "notFoundDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD589 \uB610\uB294 \uD14C\uC774\uBE14\uC744 \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4." } },
    "requestEntityTooLargeDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC694\uCCAD\uC774 \uD5C8\uC6A9\uB41C \uCD5C\uB300 \uD398\uC774\uB85C\uB4DC \uD06C\uAE30\uB97C \uCD08\uACFC\uD588\uC2B5\uB2C8\uB2E4." } },
    "internalErrorDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC11C\uBC84\uC5D0\uC11C \uC608\uC0C1\uCE58 \uBABB\uD55C \uC870\uAC74\uC774 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4." } },
    "badGatewayDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Baserow\uAC00 \uC7AC\uC2DC\uC791 \uC911\uC774\uAC70\uB098 \uC608\uC0C1\uCE58 \uBABB\uD55C \uC911\uB2E8\uC774 \uC9C4\uD589 \uC911\uC785\uB2C8\uB2E4." } },
    "unavailableDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC11C\uBC84\uAC00 \uC694\uCCAD\uC744 \uC81C\uB54C \uCC98\uB9AC\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4." } }
  },
  "apiDocsTableFields": {
    "tableTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "name" }, { "t": 3, "v": " \uD14C\uC774\uBE14" }] } },
    "tableId": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774 \uD14C\uC774\uBE14\uC758 ID\uB294:" } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "name" }, { "t": 3, "v": " \uD14C\uC774\uBE14\uC758 \uAC01 \uD589\uC5D0\uB294 \uB2E4\uC74C \uD544\uB4DC\uAC00 \uD3EC\uD568\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4." }] } },
    "id": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "ID" } },
    "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774\uB984" } },
    "type": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC720\uD615" } },
    "compatibleFilters": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD638\uD658 \uAC00\uB2A5\uD55C \uD544\uD130" } }
  },
  "apiDocsTableListRows": {
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "*" }, { "t": 4, "k": "name" }, { "t": 3, "v": "* \uD14C\uC774\uBE14\uC758 \uD589\uC744 \uB098\uC5F4\uD558\uB824\uBA74 *" }, { "t": 4, "k": "name" }, { "t": 3, "v": "* \uC5D4\uB4DC\uD3EC\uC778\uD2B8\uC5D0 `GET` \uC694\uCCAD\uC744 \uD574\uC57C \uD569\uB2C8\uB2E4. \uC751\uB2F5\uC740 \uD398\uC774\uC9C0\uB85C \uB098\uB204\uC5B4\uC9C0\uBA70 \uAE30\uBCF8\uC801\uC73C\uB85C \uCCAB \uBC88\uC9F8 \uD398\uC774\uC9C0\uAC00 \uBC18\uD658\uB429\uB2C8\uB2E4. `page` \uBC0F `size` \uCFFC\uB9AC \uB9E4\uAC1C\uBCC0\uC218\uB97C \uC81C\uACF5\uD558\uC5EC \uC62C\uBC14\uB978 \uD398\uC774\uC9C0\uB97C \uAC00\uC838\uC62C \uC218 \uC788\uC2B5\uB2C8\uB2E4." }] } },
    "page": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBC18\uD658\uD560 \uD589\uC758 \uD398\uC774\uC9C0\uB97C \uC815\uC758\uD569\uB2C8\uB2E4." } },
    "size": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD398\uC774\uC9C0\uB2F9 \uBC18\uD658\uD560 \uD589 \uC218\uB97C \uC815\uC758\uD569\uB2C8\uB2E4." } },
    "userFieldNames": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "`user_field_names` GET \uB9E4\uAC1C\uBCC0\uC218\uB97C \uC81C\uACF5\uD558\uACE0 \uADF8 \uAC12\uC774 \uB2E4\uC74C \uC911 \uD558\uB098\uC778 \uACBD\uC6B0: `y`, `yes`, `true`, `t`, `on`, `1`, \uB610\uB294 \uBE48 \uBB38\uC790\uC5F4\uC778 \uACBD\uC6B0, \uC774 \uC5D4\uB4DC\uD3EC\uC778\uD2B8\uC5D0\uC11C \uBC18\uD658\uB418\uB294 \uD544\uB4DC \uC774\uB984\uC740 \uC2E4\uC81C \uD544\uB4DC \uC774\uB984\uC774 \uB429\uB2C8\uB2E4.\n\n`user_field_names` GET \uB9E4\uAC1C\uBCC0\uC218\uAC00 \uC81C\uACF5\uB418\uC9C0 \uC54A\uAC70\uB098 \uC704\uC758 \uAC12 \uC911 \uC5B4\uB290 \uAC83\uB3C4 \uC77C\uCE58\uD558\uC9C0 \uC54A\uB294 \uACBD\uC6B0, \uBC18\uD658\uB418\uB294 \uBAA8\uB4E0 \uD544\uB4DC \uC774\uB984\uC740 `field_` \uB4A4\uC5D0 \uD544\uB4DC\uC758 ID\uAC00 \uC635\uB2C8\uB2E4. \uC608\uB97C \uB4E4\uC5B4 `field_1`\uC740 ID\uAC00 `1`\uC778 \uD544\uB4DC\uB97C \uB098\uD0C0\uB0C5\uB2C8\uB2E4.\n\n \uB610\uD55C `user_field_names`\uAC00 \uC124\uC815\uB418\uBA74 \uB2E4\uB978 GET \uB9E4\uAC1C\uBCC0\uC218 `order_by`, `include` \uBC0F `exclude`\uC758 \uB3D9\uC791\uC774 \uBCC0\uACBD\uB429\uB2C8\uB2E4. \uB300\uC2E0 \uC2E4\uC81C \uD544\uB4DC \uC774\uB984\uC758 \uC27C\uD45C\uB85C \uAD6C\uBD84\uB41C \uBAA9\uB85D\uC744 \uAE30\uB300\uD569\uB2C8\uB2E4." } },
    "search": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC81C\uACF5\uB41C \uACBD\uC6B0 \uAC80\uC0C9 \uCFFC\uB9AC\uC640 \uC77C\uCE58\uD558\uB294 \uB370\uC774\uD130\uAC00 \uC788\uB294 \uD589\uB9CC \uBC18\uD658\uB429\uB2C8\uB2E4." } },
    "orderBy": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC120\uD0DD\uC801\uC73C\uB85C \uC27C\uD45C\uB85C \uAD6C\uBD84\uB41C \uD544\uB4DC\uB85C \uD589\uC744 \uC815\uB82C\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uAE30\uBCF8\uC801\uC73C\uB85C \uB610\uB294 '+'\uAC00 \uC55E\uC5D0 \uC624\uBA74 \uD544\uB4DC\uB294 \uC624\uB984\uCC28\uC21C(A-Z)\uC73C\uB85C \uC815\uB82C\uB418\uC9C0\uB9CC, '-'\uAC00 \uC55E\uC5D0 \uC624\uBA74 \uB0B4\uB9BC\uCC28\uC21C(Z-A)\uC73C\uB85C \uC815\uB82C\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\n\n #### `user_field_names` \uC0AC\uC6A9 \uC2DC:\n\n `order_by`\uB294 \uC815\uB82C\uD560 \uD544\uB4DC \uC774\uB984\uC758 \uC27C\uD45C\uB85C \uAD6C\uBD84\uB41C \uBAA9\uB85D\uC774\uC5B4\uC57C \uD569\uB2C8\uB2E4. \uC608\uB97C \uB4E4\uC5B4 `order_by=My Field,-My Field 2` GET \uB9E4\uAC1C\uBCC0\uC218\uB97C \uC81C\uACF5\uD558\uBA74 \uD589\uC740 `My Field`\uB77C\uB294 \uD544\uB4DC\uB85C \uC624\uB984\uCC28\uC21C\uC73C\uB85C \uC815\uB82C\uB429\uB2C8\uB2E4. \uC77C\uBD80 \uD544\uB4DC\uC5D0 \uB3D9\uC77C\uD55C \uAC12\uC774 \uC788\uB294 \uACBD\uC6B0 \uD574\uB2F9 \uD558\uC704 \uC9D1\uD569\uC740 `My Field 2`\uB77C\uB294 \uD544\uB4DC\uB85C \uB0B4\uB9BC\uCC28\uC21C\uC73C\uB85C \uC815\uB82C\uB429\uB2C8\uB2E4.\n\n `+` \uB610\uB294 `-`\uB85C \uC2DC\uC791\uD558\uB294 \uD544\uB4DC \uC774\uB984\uC740 \uBA85\uC2DC\uC801\uC73C\uB85C \uB2E4\uB978 `+` \uB610\uB294 `-`\uB97C \uC55E\uC5D0 \uBD99\uC5EC\uC57C \uD569\uB2C8\uB2E4. \uC608: `+-Name`.\n\n \uC27C\uD45C\uB97C \uD3EC\uD568\uD558\uB294 \uD544\uB4DC \uC774\uB984\uC740 \uB530\uC634\uD45C\uB85C \uBB36\uC5B4\uC57C \uD569\uB2C8\uB2E4: `\"Name ,\"`. \uD544\uB4DC \uC774\uB984\uC5D0 \uB530\uC634\uD45C\uAC00 \uD3EC\uD568\uB41C \uACBD\uC6B0 `\\` \uBB38\uC790\uB97C \uC0AC\uC6A9\uD558\uC5EC \uC774\uC2A4\uCF00\uC774\uD504\uD574\uC57C \uD569\uB2C8\uB2E4. \uC608: `Name \\\"`.\n\n#### `user_field_names` \uC5C6\uC774:\n\n `order_by`\uB294 \uC815\uB82C\uD560 \uD544\uB4DC\uC758 ID \uB4A4\uC5D0 `field_`\uAC00 \uC624\uB294 \uC27C\uD45C\uB85C \uAD6C\uBD84\uB41C \uBAA9\uB85D\uC774\uC5B4\uC57C \uD569\uB2C8\uB2E4. \uC608\uB97C \uB4E4\uC5B4 `order_by=field_1,-field_2` GET \uB9E4\uAC1C\uBCC0\uC218\uB97C \uC81C\uACF5\uD558\uBA74 \uD589\uC740 `field_1`\uB85C \uC624\uB984\uCC28\uC21C\uC73C\uB85C \uC815\uB82C\uB429\uB2C8\uB2E4. \uC77C\uBD80 \uD544\uB4DC\uC5D0 \uB3D9\uC77C\uD55C \uAC12\uC774 \uC788\uB294 \uACBD\uC6B0 \uD574\uB2F9 \uD558\uC704 \uC9D1\uD569\uC740 `field_2`\uB85C \uB0B4\uB9BC\uCC28\uC21C\uC73C\uB85C \uC815\uB82C\uB429\uB2C8\uB2E4." } },
    "filters": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }, { "t": 9 }, { "t": 3 }, { "t": 9 }, { "t": 3 }, { "t": 9 }, { "t": 3 }, { "t": 9 }, { "t": 3 }, { "t": 9 }, { "t": 3 }, { "t": 9 }, { "t": 3 }, { "t": 9 }, { "t": 3 }, { "t": 9 }, { "t": 3 }, { "t": 9 }, { "t": 3 }, { "t": 9 }, { "t": 3 }, { "t": 9 }, { "t": 3 }, { "t": 9 }, { "t": 3 }], "s": '\uD589\uC740 \uC120\uD0DD\uC801\uC73C\uB85C \uBDF0\uC5D0 \uC0AC\uC6A9\uD560 \uC218 \uC788\uB294 \uB3D9\uC77C\uD55C \uBDF0 \uD544\uD130\uB97C \uC0AC\uC6A9\uD558\uC5EC \uD544\uD130\uB9C1\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774 \uB9E4\uAC1C\uBCC0\uC218\uB294 \uC774 \uBDF0\uC5D0 \uC801\uC6A9\uD560 \uD544\uD130 \uD2B8\uB9AC\uB97C \uD3EC\uD568\uD558\uB294 JSON \uC9C1\uB82C\uD654\uB41C \uBB38\uC790\uC5F4\uC744 \uD5C8\uC6A9\uD569\uB2C8\uB2E4. \uD544\uD130 \uD2B8\uB9AC\uB294 \uC801\uC6A9\uD574\uC57C \uD558\uB294 \uD544\uD130\uB97C \uD3EC\uD568\uD558\uB294 \uC911\uCCA9\uB41C \uAD6C\uC870\uC785\uB2C8\uB2E4. \n\n#### `user_field_names` \uC0AC\uC6A9 \uC2DC:\n\n\uC720\uD6A8\uD55C \uD544\uD130 \uD2B8\uB9AC\uC758 \uC608\uB294 \uB2E4\uC74C\uACFC \uAC19\uC2B5\uB2C8\uB2E4: `{"filter_type": "AND", "filters": [{"field": "Name", "type": "equal", "value": "test"}]}`.\n\n#### `user_field_names` \uC5C6\uC774:\n\n\uC608\uB97C \uB4E4\uC5B4 \uB2E4\uC74C GET \uB9E4\uAC1C\uBCC0\uC218\uB97C \uC81C\uACF5\uD558\uB294 \uACBD\uC6B0: `{"filter_type": "AND", "filters": [{"field": 1, "type": "equal", "value": "test"}]}`\n\n\uC774 \uB9E4\uAC1C\uBCC0\uC218\uAC00 \uC81C\uACF5\uB41C \uACBD\uC6B0, \uBAA8\uB4E0 \uB2E4\uB978 `filter__{field}__{filter}` \uB294 \uBB34\uC2DC\uB418\uBA70, filter_type \uB9E4\uAC1C\uBCC0\uC218\uB3C4 \uBB34\uC2DC\uB429\uB2C8\uB2E4.' } },
    "filter": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD589\uC740 \uC120\uD0DD\uC801\uC73C\uB85C \uBDF0\uC5D0 \uC0AC\uC6A9\uD560 \uC218 \uC788\uB294 \uB3D9\uC77C\uD55C \uBDF0 \uD544\uD130\uB97C \uC0AC\uC6A9\uD558\uC5EC \uD544\uD130\uB9C1\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB3D9\uC77C\uD55C \uD615\uC2DD\uC744 \uB530\uB974\uB294 \uACBD\uC6B0 \uC5EC\uB7EC \uD544\uD130\uB97C \uC801\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. `field` \uBC0F `filter` \uBCC0\uC218\uB294 \uAC01\uAC01 \uD544\uD130\uB97C \uC801\uC6A9\uD560 \uBC29\uBC95\uACFC \uC704\uCE58\uB97C \uB098\uD0C0\uB0C5\uB2C8\uB2E4.\n\n#### `user_field_names` \uC0AC\uC6A9 \uC2DC:\n\n\uC608\uB97C \uB4E4\uC5B4 \uB2E4\uC74C GET \uB9E4\uAC1C\uBCC0\uC218\uB97C \uC81C\uACF5\uD558\uB294 \uACBD\uC6B0: `filter__Name__equal=test`, `Name`\uC758 \uAC12\uC774 'test'\uC778 \uD589\uB9CC \uBC18\uD658\uB429\uB2C8\uB2E4. \uC774 \uBC29\uBC95\uC740 \uC774\uC804 \uBC84\uC804\uACFC \uD638\uD658\uB418\uBA70 \uC774\uB984\uC5D0\uC11C \uC2E4\uD328\uD558\uBA74 `field_id`\uB97C \uD655\uC778\uD569\uB2C8\uB2E4.\n\n#### `user_field_names` \uC5C6\uC774:\n\n\uC608\uB97C \uB4E4\uC5B4 \uB2E4\uC74C GET \uB9E4\uAC1C\uBCC0\uC218\uB97C \uC81C\uACF5\uD558\uB294 \uACBD\uC6B0: `filter__field_1__equal=test`, `field_1`\uC758 \uAC12\uC774 'test'\uC778 \uD589\uB9CC \uBC18\uD658\uB429\uB2C8\uB2E4.\n\n\uD544\uD130 \uB9E4\uAC1C\uBCC0\uC218\uAC00 \uC81C\uACF5\uB41C \uACBD\uC6B0 \uC774 \uB9E4\uAC1C\uBCC0\uC218\uB294 \uBB34\uC2DC\uB429\uB2C8\uB2E4. " } },
    "filterLink": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBAA8\uB4E0 \uD544\uD130 \uBAA9\uB85D\uC740 \uC5EC\uAE30\uC5D0\uC11C \uCC3E\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4." } },
    "filterType": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "- `AND`: \uC81C\uACF5\uB41C \uBAA8\uB4E0 \uD544\uD130\uC640 \uC77C\uCE58\uD574\uC57C \uD568\uC744 \uB098\uD0C0\uB0C5\uB2C8\uB2E4.\n- `OR`: \uD544\uD130 \uC911 \uD558\uB098\uC640\uB9CC \uC77C\uCE58\uD558\uBA74 \uB428\uC744 \uB098\uD0C0\uB0C5\uB2C8\uB2E4.\n\n \uC774\uB294 \uB450 \uAC1C \uC774\uC0C1\uC758 \uD544\uD130\uAC00 \uC81C\uACF5\uB41C \uACBD\uC6B0\uC5D0\uB9CC \uC791\uB3D9\uD569\uB2C8\uB2E4." } },
    "include": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": '\uAE30\uBCF8\uC801\uC73C\uB85C \uBAA8\uB4E0 \uD544\uB4DC\uAC00 \uC751\uB2F5\uC5D0 \uD3EC\uD568\uB429\uB2C8\uB2E4. include \uCFFC\uB9AC \uB9E4\uAC1C\uBCC0\uC218\uB97C \uC81C\uACF5\uD558\uC5EC \uD3EC\uD568\uD560 \uD544\uB4DC\uC758 \uD558\uC704 \uC9D1\uD569\uC744 \uC120\uD0DD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\n\n #### `user_field_names` \uC0AC\uC6A9 \uC2DC:\n\n `include`\uB294 \uACB0\uACFC\uC5D0 \uD3EC\uD568\uD560 \uD544\uB4DC \uC774\uB984\uC758 \uC27C\uD45C\uB85C \uAD6C\uBD84\uB41C \uBAA9\uB85D\uC774\uC5B4\uC57C \uD569\uB2C8\uB2E4. \uC608\uB97C \uB4E4\uC5B4 \uB2E4\uC74C GET \uB9E4\uAC1C\uBCC0\uC218\uB97C \uC81C\uACF5\uD558\uB294 \uACBD\uC6B0: `include=My Field,-My Field 2` \uD574\uB2F9 \uD544\uB4DC\uB9CC \uD3EC\uD568\uB429\uB2C8\uB2E4(\uBA85\uC2DC\uC801\uC73C\uB85C \uC81C\uC678\uB418\uC9C0 \uC54A\uC740 \uACBD\uC6B0).\n\n \uC27C\uD45C\uB97C \uD3EC\uD568\uD558\uB294 \uD544\uB4DC \uC774\uB984\uC740 \uB530\uC634\uD45C\uB85C \uBB36\uC5B4\uC57C \uD569\uB2C8\uB2E4: `"Name ,"`. \uD544\uB4DC \uC774\uB984\uC5D0 \uB530\uC634\uD45C\uAC00 \uD3EC\uD568\uB41C \uACBD\uC6B0 `\\` \uBB38\uC790\uB97C \uC0AC\uC6A9\uD558\uC5EC \uC774\uC2A4\uCF00\uC774\uD504\uD574\uC57C \uD569\uB2C8\uB2E4. \uC608: `Name \\"`.\n\n #### `user_field_names` \uC5C6\uC774:\n\n `include`\uB294 \uACB0\uACFC\uC5D0 \uD3EC\uD568\uD560 \uD544\uB4DC\uC758 ID \uB4A4\uC5D0 `field_`\uAC00 \uC624\uB294 \uC27C\uD45C\uB85C \uAD6C\uBD84\uB41C \uBAA9\uB85D\uC774\uC5B4\uC57C \uD569\uB2C8\uB2E4. \uC608\uB97C \uB4E4\uC5B4 \uB2E4\uC74C GET \uB9E4\uAC1C\uBCC0\uC218\uB97C \uC81C\uACF5\uD558\uB294 \uACBD\uC6B0 `include=field_1,field_2` ID\uAC00 `1` \uBC0F `2`\uC778 \uD544\uB4DC\uB9CC \uD3EC\uD568\uB429\uB2C8\uB2E4(\uBA85\uC2DC\uC801\uC73C\uB85C \uC81C\uC678\uB418\uC9C0 \uC54A\uC740 \uACBD\uC6B0).' } },
    "exclude": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": '\uAE30\uBCF8\uC801\uC73C\uB85C \uBAA8\uB4E0 \uD544\uB4DC\uAC00 \uC751\uB2F5\uC5D0 \uD3EC\uD568\uB429\uB2C8\uB2E4. exclude \uCFFC\uB9AC \uB9E4\uAC1C\uBCC0\uC218\uB97C \uC81C\uACF5\uD558\uC5EC \uC81C\uC678\uD560 \uD544\uB4DC\uC758 \uD558\uC704 \uC9D1\uD569\uC744 \uC120\uD0DD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\n\n #### `user_field_names` \uC0AC\uC6A9 \uC2DC:\n\n `exclude`\uB294 \uACB0\uACFC\uC5D0\uC11C \uC81C\uC678\uD560 \uD544\uB4DC \uC774\uB984\uC758 \uC27C\uD45C\uB85C \uAD6C\uBD84\uB41C \uBAA9\uB85D\uC774\uC5B4\uC57C \uD569\uB2C8\uB2E4. \uC608\uB97C \uB4E4\uC5B4 \uB2E4\uC74C GET \uB9E4\uAC1C\uBCC0\uC218\uB97C \uC81C\uACF5\uD558\uB294 \uACBD\uC6B0: `exclude=My Field,-My Field 2` \uD574\uB2F9 \uD544\uB4DC\uAC00 \uC81C\uC678\uB429\uB2C8\uB2E4.\n\n \uC27C\uD45C\uB97C \uD3EC\uD568\uD558\uB294 \uD544\uB4DC \uC774\uB984\uC740 \uB530\uC634\uD45C\uB85C \uBB36\uC5B4\uC57C \uD569\uB2C8\uB2E4: `"Name ,"`. \uD544\uB4DC \uC774\uB984\uC5D0 \uB530\uC634\uD45C\uAC00 \uD3EC\uD568\uB41C \uACBD\uC6B0 `\\` \uBB38\uC790\uB97C \uC0AC\uC6A9\uD558\uC5EC \uC774\uC2A4\uCF00\uC774\uD504\uD574\uC57C \uD569\uB2C8\uB2E4. \uC608: `Name \\"`.\n\n #### `user_field_names` \uC5C6\uC774:\n\n `exclude`\uB294 \uACB0\uACFC\uC5D0\uC11C \uC81C\uC678\uD560 \uD544\uB4DC\uC758 ID \uB4A4\uC5D0 `field_`\uAC00 \uC624\uB294 \uC27C\uD45C\uB85C \uAD6C\uBD84\uB41C \uBAA9\uB85D\uC774\uC5B4\uC57C \uD569\uB2C8\uB2E4. \uC608\uB97C \uB4E4\uC5B4 \uB2E4\uC74C GET \uB9E4\uAC1C\uBCC0\uC218\uB97C \uC81C\uACF5\uD558\uB294 \uACBD\uC6B0 `exclude=field_1,field_2` ID\uAC00 `1` \uBC0F `2`\uC778 \uD544\uB4DC\uAC00 \uC81C\uC678\uB429\uB2C8\uB2E4.' } },
    "viewId": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }, { "t": 9 }, { "t": 3 }, { "t": 9 }, { "t": 3 }, { "t": 9 }, { "t": 3 }, { "t": 9 }, { "t": 3 }], "s": "\uAE30\uBCF8\uC801\uC73C\uB85C \uCFFC\uB9AC \uB9E4\uAC1C\uBCC0\uC218\uC5D0 \uC815\uC758\uB41C \uD544\uD130 \uBC0F \uC815\uB82C \uC678\uC758 \uB2E4\uB978 \uD544\uD130 \uBC0F \uC815\uB82C\uC740 \uC801\uC6A9\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uBDF0\uC758 `view_id` GET \uB9E4\uAC1C\uBCC0\uC218\uC5D0 \uD574\uB2F9 \uBDF0\uC758 `id`\uB97C \uC81C\uACF5\uD558\uC5EC \uBDF0\uC5D0 \uD544\uD130 \uBC0F \uC815\uB82C\uC744 \uCD94\uAC00\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC608\uB97C \uB4E4\uC5B4, `view_id=1`\uACFC \uAC19\uC740 GET \uB9E4\uAC1C\uBCC0\uC218\uB97C \uC81C\uACF5\uD558\uBA74 `view_id`\uAC00 `1`\uC778 \uBDF0\uC5D0 \uC815\uC758\uB41C \uD544\uD130 \uBC0F \uC815\uB82C\uC774 \uC801\uC6A9\uB429\uB2C8\uB2E4. `view_id`\uB294 \uBAA8\uB4E0 \uBDF0\uC758 \uCEE8\uD14D\uC2A4\uD2B8 \uBA54\uB274\uC5D0\uC11C \uD655\uC778\uD560 \uC218 \uC788\uC73C\uBA70, \uBDF0 \uC774\uB984 \uB4A4\uC5D0 \uAD04\uD638 \uC548\uC5D0 \uC788\uB294 \uC22B\uC790\uC785\uB2C8\uB2E4.\n\n#### `filter__{field}__{filter}` \uC0AC\uC6A9 \uC2DC\n\n\uCFFC\uB9AC \uB9E4\uAC1C\uBCC0\uC218\uC5D0 \uC81C\uACF5\uB41C \uD544\uD130\uC640 \uBDF0\uC5D0 \uC815\uC758\uB41C \uD544\uD130\uAC00 \uBAA8\uB450 \uC801\uC6A9\uB429\uB2C8\uB2E4.\n\n#### `order_by` \uC0AC\uC6A9 \uC2DC\n\n`order_by`\uAC00 \uC81C\uACF5\uB418\uBA74 \uBDF0\uC5D0 \uC815\uC758\uB41C \uC815\uB82C\uC740 \uBB34\uC2DC\uB429\uB2C8\uB2E4." } },
    "filtersBuilder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD544\uD130 \uB9E4\uAC1C\uBCC0\uC218 \uBE4C\uB354 \uC5F4\uAE30" } },
    "join": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAE30\uC874\uC758 \uB9C1\uD06C \uD589 \uD544\uB4DC\uB97C \uD1B5\uD574 \uB300\uC0C1 \uD14C\uC774\uBE14\uC5D0\uC11C \uD544\uB4DC \uAC12\uC744 \uC870\uD68C\uD558\uB3C4\uB85D \uC694\uCCAD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB9E4\uAC1C\uBCC0\uC218 \uC774\uB984\uC740 \uAE30\uC874\uC758 \uB9C1\uD06C \uD589 \uD544\uB4DC \uC774\uB984 \uB4A4\uC5D0 __join\uC774 \uC640\uC57C \uD569\uB2C8\uB2E4. \uAC12\uC740 \uCD94\uAC00\uB85C \uC870\uD68C\uD558\uB824\uB294 \uD544\uB4DC \uC774\uB984\uC758 \uBAA9\uB85D\uC774\uC5B4\uC57C \uD569\uB2C8\uB2E4. \uD558\uB098 \uC774\uC0C1\uC758 \uB300\uC0C1 \uD544\uB4DC\uB97C \uC81C\uACF5\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB300\uC0C1 \uD14C\uC774\uBE14\uC5D0\uC11C \uB9C1\uD06C \uD589 \uD544\uB4DC\uC758 \uAC12\uC744 \uC870\uD68C\uD558\uB294 \uAC83\uC740 \uBD88\uAC00\uB2A5\uD569\uB2C8\uB2E4.\n\n #### `user_field_names` \uC0AC\uC6A9 \uC2DC:\n\n `join`\uC740 \uACB0\uACFC\uC5D0 \uD3EC\uD568\uD560 \uD544\uB4DC \uC774\uB984\uC758 \uC27C\uD45C\uB85C \uAD6C\uBD84\uB41C \uBAA9\uB85D\uC774\uC5B4\uC57C \uD569\uB2C8\uB2E4. \uC608\uB97C \uB4E4\uC5B4 \uB2E4\uC74C GET \uB9E4\uAC1C\uBCC0\uC218\uB97C \uC81C\uACF5\uD558\uB294 \uACBD\uC6B0 `LinkRowField__join=MyField,MyField2` `LinkRowField`\uB85C \uC5F0\uACB0\uB41C \uD14C\uC774\uBE14\uC5D0\uC11C `MyField`\uC640 `My Field2`\uC758 \uAC12\uC774 \uC751\uB2F5\uC5D0 \uD3EC\uD568\uB429\uB2C8\uB2E4.\n\n#### `user_field_names` \uC5C6\uC774:\n\n `join`\uC740 \uACB0\uACFC\uC5D0 \uD3EC\uD568\uD560 \uD544\uB4DC\uC758 ID \uB4A4\uC5D0 `field_`\uAC00 \uC624\uB294 \uC27C\uD45C\uB85C \uAD6C\uBD84\uB41C \uBAA9\uB85D\uC774\uC5B4\uC57C \uD569\uB2C8\uB2E4. \uC608\uB97C \uB4E4\uC5B4 \uB2E4\uC74C GET \uB9E4\uAC1C\uBCC0\uC218\uB97C \uC81C\uACF5\uD558\uB294 \uACBD\uC6B0 `field_1__join=field_2,field_3` `field_1`\uB85C \uC5F0\uACB0\uB41C \uD14C\uC774\uBE14\uC5D0\uC11C `field_2`\uC640 `field_3`\uC758 \uAC12\uC774 \uC751\uB2F5\uC5D0 \uD3EC\uD568\uB429\uB2C8\uB2E4." } },
    "test": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }, { "t": 9 }, { "t": 3 }, { "t": 9 }, { "t": 3 }, { "t": 9 }, { "t": 3 }, { "t": 9 }], "s": '`{"filter_type": "\uADF8\uB9AC\uACE0", "\uD544\uD130": [{"\uD544\uB4DC": "\uC774\uB984", "\uC720\uD615": "\uC77C\uCE58", "\uAC12": "\uD14C\uC2A4\uD2B8"}]}' } }
  },
  "apiDocsIntro": {
    "intro": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "name" }, { "t": 3, "v": " \uB370\uC774\uD130\uBCA0\uC774\uC2A4\uB294 \uB370\uC774\uD130\uB97C \uC678\uBD80 \uC2DC\uC2A4\uD15C\uACFC \uD1B5\uD569\uD558\uB294 \uC26C\uC6B4 \uBC29\uBC95\uC744 \uC81C\uACF5\uD569\uB2C8\uB2E4. API\uB294 REST \uC758\uBBF8\uB860\uC744 \uB530\uB974\uACE0, \uAC1D\uCCB4\uB97C \uC778\uCF54\uB529\uD558\uAE30 \uC704\uD574 JSON\uC744 \uC0AC\uC6A9\uD558\uBA70, \uD45C\uC900 HTTP \uCF54\uB4DC, \uAE30\uACC4 \uBC0F \uC0AC\uB78C\uC774 \uC77D\uC744 \uC218 \uC788\uB294 \uC624\uB958\uB97C \uD1B5\uD574 \uC791\uC5C5 \uACB0\uACFC\uB97C \uB098\uD0C0\uB0C5\uB2C8\uB2E4." }] } },
    "autoDocDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774 \uBB38\uC11C\uB294 \uB370\uC774\uD130\uBCA0\uC774\uC2A4\uC5D0 \uC788\uB294 \uD14C\uC774\uBE14\uACFC \uD544\uB4DC\uB97C \uAE30\uBC18\uC73C\uB85C \uC790\uB3D9 \uC0DD\uC131\uB429\uB2C8\uB2E4. \uB370\uC774\uD130\uBCA0\uC774\uC2A4, \uD14C\uC774\uBE14 \uB610\uB294 \uD544\uB4DC\uC5D0 \uBCC0\uACBD\uC744 \uAC00\uD558\uBA74 API \uC778\uD130\uD398\uC774\uC2A4\uB3C4 \uBCC0\uACBD\uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB530\uB77C\uC11C API \uAD6C\uD604\uC744 \uC801\uC808\uD788 \uC5C5\uB370\uC774\uD2B8\uD574\uC57C \uD569\uB2C8\uB2E4." } },
    "databaseId": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774 \uB370\uC774\uD130\uBCA0\uC774\uC2A4\uC758 ID\uB294:" } },
    "jsClient": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "JavaScript \uC608\uC81C API \uD074\uB77C\uC774\uC5B8\uD2B8:" } },
    "pythonClient": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Python \uC608\uC81C API \uD074\uB77C\uC774\uC5B8\uD2B8:" } }
  },
  "apiDocsTableListFields": {
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "name" }, { "t": 3, "v": " \uD14C\uC774\uBE14\uC758 \uD544\uB4DC\uB97C \uB098\uC5F4\uD558\uB824\uBA74 " }, { "t": 4, "k": "name" }, { "t": 3, "v": " \uD544\uB4DC \uC5D4\uB4DC\uD3EC\uC778\uD2B8\uC5D0 `GET` \uC694\uCCAD\uC744 \uD574\uC57C \uD569\uB2C8\uB2E4. \uB370\uC774\uD130\uBCA0\uC774\uC2A4 \uD1A0\uD070\uC5D0 \uC77D\uAE30, \uC0DD\uC131 \uB610\uB294 \uC5C5\uB370\uC774\uD2B8 \uAD8C\uD55C\uC774 \uC788\uB294 \uACBD\uC6B0\uC5D0\uB9CC \uD544\uB4DC\uB97C \uB098\uC5F4\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4." }] } },
    "resultFieldProperties": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uACB0\uACFC \uD544\uB4DC \uC18D\uC131" } },
    "id": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD544\uB4DC \uAE30\uBCF8 \uD0A4\uC785\uB2C8\uB2E4. `field_` \uC811\uB450\uC0AC\uB97C \uCD94\uAC00\uD558\uC5EC \uB370\uC774\uD130\uBCA0\uC774\uC2A4 \uC5F4 \uC774\uB984\uC744 \uC0DD\uC131\uD558\uB294 \uB370 \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4." } },
    "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD544\uB4DC \uC774\uB984\uC785\uB2C8\uB2E4." } },
    "tableId": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAD00\uB828 \uD14C\uC774\uBE14 ID\uC785\uB2C8\uB2E4." } },
    "order": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD14C\uC774\uBE14\uC5D0\uC11C \uD544\uB4DC\uC758 \uC21C\uC11C\uC785\uB2C8\uB2E4. \uCCAB \uBC88\uC9F8 \uD544\uB4DC\uB294 0\uC785\uB2C8\uB2E4." } },
    "primary": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD544\uB4DC\uAC00 \uAE30\uBCF8 \uD544\uB4DC\uC778\uC9C0 \uC5EC\uBD80\uB97C \uB098\uD0C0\uB0C5\uB2C8\uB2E4. `true`\uC778 \uACBD\uC6B0 \uD544\uB4DC\uB97C \uC0AD\uC81C\uD560 \uC218 \uC5C6\uC73C\uBA70 \uAC12\uC740 \uC804\uCCB4 \uD589\uC744 \uB098\uD0C0\uB0B4\uC57C \uD569\uB2C8\uB2E4." } },
    "type": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774 \uD544\uB4DC\uC5D0 \uC815\uC758\uB41C \uC720\uD615\uC785\uB2C8\uB2E4." } },
    "extraProps": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC77C\uBD80 \uCD94\uAC00 \uC18D\uC131\uC740 \uC720\uD615\uC5D0 \uB530\uB77C \uB2E4\uB974\uBBC0\uB85C \uC5EC\uAE30\uC5D0\uC11C \uC124\uBA85\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4." } },
    "readOnly": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD544\uB4DC\uAC00 \uC77D\uAE30 \uC804\uC6A9 \uD544\uB4DC\uC778\uC9C0 \uC5EC\uBD80\uB97C \uB098\uD0C0\uB0C5\uB2C8\uB2E4. `true`\uC778 \uACBD\uC6B0 \uC140 \uAC12\uC744 \uC5C5\uB370\uC774\uD2B8\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4." } },
    "descriptionField": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD544\uB4DC \uC124\uBA85" } }
  },
  "apiDocsTableDeleteRow": {
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "\uAE30\uC874 " }, { "t": 4, "k": "name" }, { "t": 3, "v": " \uD589\uC744 \uC0AD\uC81C\uD569\uB2C8\uB2E4." }] } },
    "rowId": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC0AD\uC81C\uD560 \uD589\uC758 \uACE0\uC720 \uC2DD\uBCC4\uC790\uC785\uB2C8\uB2E4." } }
  },
  "apiDocsTableDeleteRows": {
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "\uAE30\uC874 " }, { "t": 4, "k": "name" }, { "t": 3, "v": " \uD589\uB4E4\uC744 \uC0AD\uC81C\uD569\uB2C8\uB2E4." }] } },
    "items": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC0AD\uC81C\uD574\uC57C \uD560 \uD589 ID \uBC30\uC5F4\uC785\uB2C8\uB2E4." } }
  },
  "apiDocsTableMoveRow": {
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "\uAE30\uC874 " }, { "t": 4, "k": "name" }, { "t": 3, "v": " \uD589\uC744 \uB2E4\uB978 \uD589 \uC55E\uC5D0 \uC774\uB3D9\uD569\uB2C8\uB2E4. `before_id`\uAC00 \uC81C\uACF5\uB418\uC9C0 \uC54A\uC73C\uBA74 \uD589\uC740 \uD14C\uC774\uBE14\uC758 \uB05D\uC73C\uB85C \uC774\uB3D9\uD569\uB2C8\uB2E4." }] } },
    "rowId": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAC12\uACFC \uAD00\uB828\uB41C \uD589\uC744 \uC774\uB3D9\uD569\uB2C8\uB2E4." } },
    "before": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC81C\uACF5\uB41C \uAC12\uACFC \uAD00\uB828\uB41C \uD589 \uC55E\uC5D0 \uC81C\uACF5\uB41C `row_id`\uC640 \uAD00\uB828\uB41C \uD589\uC744 \uC774\uB3D9\uD569\uB2C8\uB2E4. \uC81C\uACF5\uB418\uC9C0 \uC54A\uC73C\uBA74 \uD589\uC740 \uB05D\uC73C\uB85C \uC774\uB3D9\uD569\uB2C8\uB2E4." } }
  },
  "apiDocsUploadFile": {
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "\uD30C\uC77C \uB0B4\uC6A9\uC744 \uC9C1\uC811 \uC5C5\uB85C\uB4DC\uD558\uC5EC Baserow\uC5D0 \uD30C\uC77C\uC744 \uC5C5\uB85C\uB4DC\uD569\uB2C8\uB2E4. \uD30C\uC77C \uB0B4\uC6A9\uC774 \uD3EC\uD568\uB41C `file` \uBA40\uD2F0\uD30C\uD2B8\uAC00 \uD544\uC694\uD569\uB2C8\uB2E4. \uADF8\uB7F0 \uB2E4\uC74C \uC751\uB2F5\uC744 \uC0AC\uC6A9\uD558\uC5EC [\uD589\uC5D0 \uD30C\uC77C \uC5C5\uB85C\uB4DC](" }, { "t": 4, "k": "PUBLIC_BACKEND_URL" }, { "t": 3, "v": "/api/redoc/#tag/Database-table-rows/operation/update_database_table_row)\uB97C \uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4." }] } },
    "file": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD30C\uC77C \uB0B4\uC6A9\uC774 \uD3EC\uD568\uB41C `file` \uBA40\uD2F0\uD30C\uD2B8\uC785\uB2C8\uB2E4." } }
  },
  "apiDocsUploadFileViaURL": {
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "\uC81C\uACF5\uB41C URL\uC5D0\uC11C \uD30C\uC77C\uC744 \uB2E4\uC6B4\uB85C\uB4DC\uD558\uC5EC Baserow\uC5D0 \uD30C\uC77C\uC744 \uC5C5\uB85C\uB4DC\uD569\uB2C8\uB2E4. \uADF8\uB7F0 \uB2E4\uC74C \uC751\uB2F5\uC744 \uC0AC\uC6A9\uD558\uC5EC [\uD589\uC5D0 \uD30C\uC77C \uC5C5\uB85C\uB4DC](" }, { "t": 4, "k": "PUBLIC_BACKEND_URL" }, { "t": 3, "v": "/api/redoc/#tag/Database-table-rows/operation/update_database_table_row)\uB97C \uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4." }] } },
    "url": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Baserow\uAC00 \uB300\uC2E0 \uB2E4\uC6B4\uB85C\uB4DC\uD558\uACE0 \uC5C5\uB85C\uB4DC\uD560 URL\uC785\uB2C8\uB2E4." } }
  },
  "apiDocsTableUpdateRow": {
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "\uAE30\uC874 " }, { "t": 4, "k": "name" }, { "t": 3, "v": " \uD589\uC744 \uC5C5\uB370\uC774\uD2B8\uD569\uB2C8\uB2E4." }] } },
    "rowId": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC5C5\uB370\uC774\uD2B8\uD574\uC57C \uD558\uB294 \uD589\uC758 \uACE0\uC720 \uC2DD\uBCC4\uC790\uC785\uB2C8\uB2E4." } },
    "before": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC81C\uACF5\uB41C ID\uAC00 \uC788\uB294 \uACBD\uC6B0, \uC0C8\uB85C \uC0DD\uC131\uB41C \uD589\uC740 \uD574\uB2F9 ID\uB97C \uAC00\uC9C4 \uD589 \uC55E\uC5D0 \uBC30\uCE58\uB429\uB2C8\uB2E4." } }
  },
  "apiDocsTableUpdateRows": {
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "\uAE30\uC874 " }, { "t": 4, "k": "name" }, { "t": 3, "v": " \uD589\uB4E4\uC744 \uC5C5\uB370\uC774\uD2B8\uD569\uB2C8\uB2E4." }] } },
    "id": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD589 ID." } }
  },
  "apiDocsTableCreateRow": {
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "\uC0C8\uB85C\uC6B4 " }, { "t": 4, "k": "name" }, { "t": 3, "v": " \uD589\uC744 \uC0DD\uC131\uD569\uB2C8\uB2E4." }] } },
    "before": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC81C\uACF5\uB41C ID\uAC00 \uC788\uB294 \uACBD\uC6B0, \uC0C8\uB85C \uC0DD\uC131\uB41C \uD589\uC740 \uD574\uB2F9 ID\uB97C \uAC00\uC9C4 \uD589 \uC55E\uC5D0 \uBC30\uCE58\uB429\uB2C8\uB2E4." } }
  },
  "apiDocsTableCreateRows": {
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "\uC0C8\uB85C\uC6B4 " }, { "t": 4, "k": "name" }, { "t": 3, "v": " \uD589\uB4E4\uC744 \uC0DD\uC131\uD569\uB2C8\uB2E4." }] } },
    "before": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC81C\uACF5\uB41C ID\uAC00 \uC788\uB294 \uACBD\uC6B0, \uC0C8\uB85C \uC0DD\uC131\uB41C \uD589\uC740 \uD574\uB2F9 ID\uB97C \uAC00\uC9C4 \uD589 \uC55E\uC5D0 \uBC30\uCE58\uB429\uB2C8\uB2E4." } }
  },
  "apiDocsAuth": {
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Baserow\uB294 \uAC04\uB2E8\uD55C \uD1A0\uD070 \uAE30\uBC18 \uC778\uC99D\uC744 \uC0AC\uC6A9\uD569\uB2C8\uB2E4. \uC544\uB798\uC5D0 \uC124\uBA85\uB41C \uC5D4\uB4DC\uD3EC\uC778\uD2B8\uB97C \uC0AC\uC6A9\uD558\uB824\uBA74 " }, { "t": 4, "k": "settingsLink" }, { "t": 3, "v": "\uC5D0\uC11C \uCD5C\uC18C\uD55C \uD558\uB098\uC758 \uB370\uC774\uD130\uBCA0\uC774\uC2A4 \uD1A0\uD070\uC744 \uC0DD\uC131\uD574\uC57C \uD569\uB2C8\uB2E4. \uD1A0\uD070\uB2F9 \uD14C\uC774\uBE14 \uC218\uC900\uAE4C\uC9C0 \uC0DD\uC131, \uC77D\uAE30, \uC5C5\uB370\uC774\uD2B8 \uBC0F \uC0AD\uC81C \uAD8C\uD55C\uC744 \uBD80\uC5EC\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. HTTP \uC778\uC99D \uBCA0\uC5B4\uB7EC \uD1A0\uD070 \uD5E4\uB354\uC5D0 \uD1A0\uD070\uC744 \uC81C\uACF5\uD558\uC5EC API\uC5D0 \uC778\uC99D\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uBAA8\uB4E0 API \uC694\uCCAD\uC740 \uC778\uC99D\uB418\uC5B4\uC57C \uD558\uBA70 HTTPS\uB97C \uD1B5\uD574 \uC774\uB8E8\uC5B4\uC838\uC57C \uD569\uB2C8\uB2E4." }] } },
    "settingsLink": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC124\uC815" } }
  },
  "apiDocsFilters": {
    "filter": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD544\uD130" } },
    "exampleValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC608\uC2DC \uAC12" } },
    "example": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC804\uCCB4 \uC608\uC2DC" } },
    "field": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "\uD544\uB4DC " }, { "t": 4, "k": "name" }] } },
    "deprecated": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC0AC\uC6A9 \uC911\uB2E8\uB428" } }
  },
  "apiDocsFiltersBuilderModal": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD544\uD130 \uB9E4\uAC1C\uBCC0\uC218 \uBE4C\uB354" } },
    "userFieldNames": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC0AC\uC6A9\uC790 \uD544\uB4DC \uC774\uB984" } },
    "json": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "JSON" } },
    "queryParameter": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uCFFC\uB9AC \uB9E4\uAC1C\uBCC0\uC218" } }
  },
  "fieldTextSubForm": {
    "placeholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAE30\uBCF8 \uD14D\uC2A4\uD2B8" } }
  },
  "fieldSingleSelectSubForm": {
    "optionsLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC635\uC158" } },
    "defaultOptionLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAE30\uBCF8 \uC635\uC158" } }
  },
  "fieldSingleSelectDropdown": {
    "notFound": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC635\uC158\uC744 \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4" } }
  },
  "fieldmultipleCollaboratorsDropdown": {
    "notFound": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD611\uC5C5\uC790\uB97C \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4" } }
  },
  "fieldDateSubForm": {
    "dateFormatLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB0A0\uC9DC \uD615\uC2DD" } },
    "dateFormatEuropean": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC720\uB7FD\uC2DD" } },
    "dateFormatUS": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBBF8\uAD6D\uC2DD" } },
    "dateFormatISO": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "ISO" } },
    "includeTimeLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC2DC\uAC04 \uD3EC\uD568" } },
    "showTimezoneLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC2DC\uAC04\uB300 \uD45C\uC2DC" } },
    "forceTimezoneLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBAA8\uB4E0 \uD611\uC5C5\uC790\uC5D0\uAC8C \uC2DC\uAC04\uB300 \uC124\uC815" } },
    "forceTimezoneValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC2DC\uAC04\uB300" } },
    "addTimezoneOffsetLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "\uAC12 \uBCC0\uD658 (" }, { "t": 4, "k": "utcOffsetDiff" }, { "t": 3, "v": "\uBD84 \uCD94\uAC00)" }] } },
    "subTimezoneOffsetLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "\uAC12 \uBCC0\uD658 (UTC \uC624\uD504\uC14B " }, { "t": 4, "k": "utcOffsetDiff" }, { "t": 3, "v": "\uBD84 \uBE7C\uAE30)" }] } },
    "timeFormatLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC2DC\uAC04 \uD615\uC2DD" } },
    "24Hour": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "24\uC2DC\uAC04" } },
    "12Hour": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "12\uC2DC\uAC04" } }
  },
  "fieldLinkRowSubForm": {
    "noTable": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB9C1\uD06C\uD560 \uB3D9\uC77C\uD55C \uB370\uC774\uD130\uBCA0\uC774\uC2A4\uC758 \uB2E4\uB978 \uD14C\uC774\uBE14\uC774 \uCD5C\uC18C \uD558\uB098 \uD544\uC694\uD569\uB2C8\uB2E4." } },
    "selectTableLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB9C1\uD06C\uD560 \uD14C\uC774\uBE14 \uC120\uD0DD" } },
    "hasRelatedFieldLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC5F0\uACB0\uB41C \uD14C\uC774\uBE14\uC5D0 \uAD00\uB828 \uD544\uB4DC \uC0DD\uC131" } },
    "limitToView": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBCF4\uAE30\uB97C \uC120\uD0DD\uD558\uC5EC \uC81C\uD55C" } },
    "limitToViewDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774\uB294 \uC2DC\uAC01\uC801\uC73C\uB85C\uB9CC \uC801\uC6A9\uB429\uB2C8\uB2E4. \uAD00\uB828 \uD14C\uC774\uBE14\uC774\uB098 API\uB97C \uD1B5\uD574 \uBCF4\uAE30 \uC678\uBD80\uC758 \uAD00\uACC4\uB97C \uB9CC\uB4DC\uB294 \uAC83\uC740 \uC5EC\uC804\uD788 \uAC00\uB2A5\uD569\uB2C8\uB2E4." } },
    "allowMultipleRelations": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB2E4\uC911 \uAD00\uACC4 \uD5C8\uC6A9" } }
  },
  "fieldSelectOptions": {
    "add": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC635\uC158 \uCD94\uAC00" } }
  },
  "fieldNumberSubForm": {
    "typeLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC22B\uC790 \uC720\uD615" } },
    "integer": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC815\uC218" } },
    "decimal": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC18C\uC218" } },
    "decimalPlacesLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC18C\uC218 \uC790\uB9AC\uC218" } },
    "allowNegative": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC74C\uC218 \uD5C8\uC6A9" } },
    "prefixPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC811\uB450\uC0AC" } },
    "prefixAndSuffixLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC811\uB450\uC0AC / \uC811\uBBF8\uC0AC" } },
    "spacePeriod": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uACF5\uBC31, \uB9C8\uCE68\uD45C (1 000 000.00)" } },
    "periodComma": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB9C8\uCE68\uD45C, \uC27C\uD45C (1.000.000,00)" } },
    "noFormatting": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD615\uC2DD \uC5C6\uC74C" } },
    "suffixPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC811\uBBF8\uC0AC" } },
    "separatorLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uCC9C \uB2E8\uC704 \uBC0F \uC18C\uC218\uC810 \uAD6C\uBD84 \uAE30\uD638" } },
    "spaceComma": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uACF5\uBC31, \uC27C\uD45C (1 000 000,00)" } },
    "commaPeriod": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC27C\uD45C, \uB9C8\uCE68\uD45C (1,000,000.00)" } },
    "defaultValueLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAE30\uBCF8\uAC12" } },
    "defaultValuePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAE30\uBCF8\uAC12 \uC785\uB825" } }
  },
  "fieldDurationSubForm": {
    "durationFormatLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAE30\uAC04 \uD615\uC2DD" } }
  },
  "fieldContext": {
    "editField": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD544\uB4DC \uD3B8\uC9D1" } },
    "deleteField": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD544\uB4DC \uC0AD\uC81C" } },
    "hideField": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD544\uB4DC \uC228\uAE30\uAE30" } },
    "showField": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD544\uB4DC \uD45C\uC2DC" } },
    "changePrimaryField": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAE30\uBCF8 \uD544\uB4DC \uBCC0\uACBD" } }
  },
  "fieldForm": {
    "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774\uB984" } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC124\uBA85" } },
    "fieldAlreadyExists": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774 \uC774\uB984\uC758 \uD544\uB4DC\uAC00 \uC774\uBBF8 \uC788\uC2B5\uB2C8\uB2E4." } },
    "nameNotAllowed": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774 \uD544\uB4DC \uC774\uB984\uC740 \uD5C8\uC6A9\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4." } },
    "nameTooLong": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774 \uD544\uB4DC \uC774\uB984\uC774 \uB108\uBB34 \uAE41\uB2C8\uB2E4." } },
    "addDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC124\uBA85 \uCD94\uAC00" } },
    "dbIndex": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC0C9\uC778" } },
    "dbIndexError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774 \uD544\uB4DC \uC720\uD615\uC5D0\uB294 \uC778\uB371\uC2A4\uAC00 \uC788\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4. \uD544\uB4DC \uC720\uD615\uC744 \uC800\uC7A5\uD558\uAC70\uB098 \uBCC0\uACBD\uD558\uAE30 \uC804\uC5D0 \uC778\uB371\uC2A4\uB97C \uC81C\uAC70\uD558\uC138\uC694." } },
    "dbIndexDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC778\uB371\uC2F1\uC744 \uC0AC\uC6A9\uD558\uBA74 \uD544\uD130\uB9C1 \uC131\uB2A5\uC774 \uD06C\uAC8C \uD5A5\uC0C1\uB418\uC9C0\uB9CC \uC0DD\uC131, \uC5C5\uB370\uC774\uD2B8 \uBC0F \uC0AD\uC81C \uC791\uC5C5 \uC18D\uB3C4\uAC00 \uB290\uB824\uC9D1\uB2C8\uB2E4." } },
    "defaultValueDisabledByConstraint": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uACE0\uC720 \uC81C\uC57D \uC870\uAC74\uC73C\uB85C \uAE30\uBCF8\uAC12\uC744 \uC124\uC815\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4" } },
    "dbIndexDisabledTooltip": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774 \uD544\uB4DC \uC720\uD615\uC5D0\uB294 \uC778\uB371\uC2F1\uC744 \uC0AC\uC6A9\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4." } },
    "defaultValueOverriddenByView": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774 \uD544\uB4DC\uC5D0\uB294 \uBCF4\uAE30 \uC218\uC900\uC758 \uAE30\uBCF8\uAC12\uC774 \uC124\uC815\uB418\uC5B4 \uC788\uC73C\uBA70, \uC774 \uAE30\uBCF8\uAC12\uBCF4\uB2E4 \uC6B0\uC120 \uC801\uC6A9\uB429\uB2C8\uB2E4." } }
  },
  "fieldSelectThroughFieldSubForm": {
    "noTable": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774 \uD544\uB4DC\uB97C \uC0DD\uC131\uD558\uB824\uBA74 \uCD5C\uC18C \uD558\uB098\uC758 \uD14C\uC774\uBE14 \uB9C1\uD06C \uD544\uB4DC\uAC00 \uD544\uC694\uD569\uB2C8\uB2E4." } },
    "selectThroughFieldLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD14C\uC774\uBE14 \uB9C1\uD06C \uD544\uB4DC \uC120\uD0DD" } }
  },
  "fieldRollupSubForm": {
    "label": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB864\uC5C5 \uD568\uC218" } },
    "selectTargetFieldLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB864\uC5C5\uD560 \uD544\uB4DC \uC120\uD0DD" } }
  },
  "fieldLookupSubForm": {
    "selectTargetFieldLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC870\uD68C\uD560 \uD544\uB4DC \uC120\uD0DD" } }
  },
  "fieldFormulaNumberSubForm": {
    "typeLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC22B\uC790 \uC720\uD615" } },
    "integer": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC815\uC218" } },
    "decimal": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC18C\uC218" } },
    "decimalPlacesLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC18C\uC218 \uC790\uB9AC\uC218" } },
    "allowNegative": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC74C\uC218 \uD5C8\uC6A9" } }
  },
  "fieldRatingSubForm": {
    "maxValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uCD5C\uB300\uAC12" } },
    "color": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC0C9\uC0C1" } },
    "style": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC2A4\uD0C0\uC77C" } }
  },
  "rowCreateModal": {
    "addField": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD544\uB4DC \uCD94\uAC00" } }
  },
  "selectRowContent": {
    "search": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD589 \uAC80\uC0C9" } },
    "hideFields": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD544\uB4DC \uC228\uAE30\uAE30" } }
  },
  "rowEditModal": {
    "addField": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD544\uB4DC \uCD94\uAC00" } },
    "showHiddenFields": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC228\uACA8\uC9C4 \uD544\uB4DC \uD45C\uC2DC" } },
    "hideHiddenFields": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC228\uACA8\uC9C4 \uD544\uB4DC \uC228\uAE30\uAE30" } }
  },
  "rowEditFieldMultipleSelect": {
    "addOption": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC635\uC158 \uC120\uD0DD" } }
  },
  "rowEditFieldMultipleCollaborators": {
    "addCollaborator": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD611\uC5C5\uC790 \uC120\uD0DD" } }
  },
  "rowEditFieldFile": {
    "addFile": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD30C\uC77C \uCD94\uAC00" } },
    "sizes": {
      "0": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Bytes" } },
      "1": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "KB" } },
      "2": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "MB" } },
      "3": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "GB" } },
      "4": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "TB" } },
      "5": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "PB" } }
    }
  },
  "rowEditFieldLinkRow": {
    "addLink": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB9C1\uD06C \uC120\uD0DD" } },
    "keepOnlyOneValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAC12 \uD558\uB098\uB9CC \uC720\uC9C0\uB429\uB2C8\uB2E4. \uC774 \uD544\uB4DC\uB294 \uD558\uB098\uC758 \uAD00\uACC4\uB9CC \uC9C0\uC6D0\uD558\uBA70, \uD558\uB098\uC758 \uAD00\uACC4\uB9CC \uB0A8\uC544 \uC788\uC744 \uACBD\uC6B0 \uD574\uB2F9 \uAC12\uC774 \uC800\uC7A5\uB429\uB2C8\uB2E4." } }
  },
  "tableCSVImporter": {
    "chooseFileLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "CSV \uD30C\uC77C \uC120\uD0DD" } },
    "chooseFileDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": ".CSV \uD30C\uC77C\uC744 \uC5C5\uB85C\uB4DC\uD558\uC5EC \uAE30\uC874 CSV\uB97C \uAC00\uC838\uC62C \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB300\uBD80\uBD84\uC758 \uC2A4\uD504\uB808\uB4DC\uC2DC\uD2B8 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC740 \uC2A4\uD504\uB808\uB4DC\uC2DC\uD2B8\uB97C .CSV \uD30C\uC77C\uB85C \uB0B4\uBCF4\uB0BC \uC218 \uC788\uC2B5\uB2C8\uB2E4." } },
    "chooseFile": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "CSV \uD30C\uC77C \uC120\uD0DD" } },
    "columnSeparator": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC5F4 \uAD6C\uBD84\uC790" } },
    "recordSeparator": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB808\uCF54\uB4DC \uAD6C\uBD84\uC790" } },
    "unitSeparator": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB2E8\uC704 \uAD6C\uBD84\uC790" } },
    "encoding": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC778\uCF54\uB529" } },
    "firstRowHeader": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uCCAB \uBC88\uC9F8 \uD589\uC740 \uD5E4\uB354\uC785\uB2C8\uB2E4" } },
    "limitFileSize": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "\uCD5C\uB300 \uD30C\uC77C \uD06C\uAE30\uB294 " }, { "t": 4, "k": "limit" }, { "t": 3, "v": "MB\uC785\uB2C8\uB2E4." }] } },
    "limitError": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "limit" }, { "t": 3, "v": "\uAC1C \uC774\uC0C1\uC758 \uD589\uC744 \uAC00\uC838\uC62C \uC218 \uC5C6\uC2B5\uB2C8\uB2E4." }] } },
    "emptyCSV": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774 CSV \uD30C\uC77C\uC740 \uBE44\uC5B4 \uC788\uC2B5\uB2C8\uB2E4." } }
  },
  "importer": {
    "fieldDefaultName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "\uD544\uB4DC " }, { "t": 4, "k": "count" }] } },
    "loading": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD30C\uC77C \uB85C\uB529 \uC911" } },
    "decoding": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB370\uC774\uD130 \uB514\uCF54\uB529 \uC911" } },
    "parsing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB370\uC774\uD130 \uAD6C\uBB38 \uBD84\uC11D \uC911" } },
    "preparing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB370\uC774\uD130 \uC900\uBE44 \uC911" } },
    "inProgress": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC9C4\uD589 \uC911..." } }
  },
  "tableForm": {
    "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774\uB984" } }
  },
  "tableXMLImporter": {
    "fileLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "XML \uD30C\uC77C \uC120\uD0DD" } },
    "fileDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD45C \uD615\uC2DD\uC758 \uB370\uC774\uD130\uAC00 \uD3EC\uD568\uB41C .XML \uD30C\uC77C\uC744 \uC5C5\uB85C\uB4DC\uD558\uC5EC \uAE30\uC874 XML\uC744 \uAC00\uC838\uC62C \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC608:" } },
    "chooseButton": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "XML \uD30C\uC77C \uC120\uD0DD" } },
    "processingError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "XML \uCC98\uB9AC \uC911 \uC624\uB958 \uBC1C\uC0DD: " }, { "t": 4, "k": "errors" }] } },
    "emptyError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774 XML \uD30C\uC77C\uC740 \uBE44\uC5B4 \uC788\uC2B5\uB2C8\uB2E4." } },
    "limitFileSize": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "\uCD5C\uB300 \uD30C\uC77C \uD06C\uAE30\uB294 " }, { "t": 4, "k": "limit" }, { "t": 3, "v": "MB\uC785\uB2C8\uB2E4." }] } },
    "limitError": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "limit" }, { "t": 3, "v": "\uAC1C \uC774\uC0C1\uC758 \uD589\uC744 \uAC00\uC838\uC62C \uC218 \uC5C6\uC2B5\uB2C8\uB2E4." }] } }
  },
  "tableJSONImporter": {
    "fileLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "JSON \uD30C\uC77C \uC120\uD0DD" } },
    "fileDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD45C \uD615\uC2DD\uC758 \uB370\uC774\uD130\uAC00 \uD3EC\uD568\uB41C .json \uD30C\uC77C\uC744 \uC5C5\uB85C\uB4DC\uD558\uC5EC \uAE30\uC874 JSON \uD30C\uC77C\uC744 \uAC00\uC838\uC62C \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC608:" } },
    "chooseButton": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "JSON \uD30C\uC77C \uC120\uD0DD" } },
    "encodingLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC778\uCF54\uB529" } },
    "processingError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "JSON \uAD6C\uBB38 \uBD84\uC11D \uC911 \uC624\uB958 \uBC1C\uC0DD: " }, { "t": 4, "k": "error" }] } },
    "arrayError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "JSON \uD30C\uC77C\uC774 \uBC30\uC5F4\uC774 \uC544\uB2D9\uB2C8\uB2E4." } },
    "emptyError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774 JSON \uD30C\uC77C\uC740 \uBE44\uC5B4 \uC788\uC2B5\uB2C8\uB2E4." } },
    "limitFileSize": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "\uCD5C\uB300 \uD30C\uC77C \uD06C\uAE30\uB294 " }, { "t": 4, "k": "limit" }, { "t": 3, "v": "MB\uC785\uB2C8\uB2E4." }] } },
    "limitError": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "limit" }, { "t": 3, "v": "\uAC1C \uC774\uC0C1\uC758 \uD589\uC744 \uAC00\uC838\uC62C \uC218 \uC5C6\uC2B5\uB2C8\uB2E4." }] } }
  },
  "tablePasteImporter": {
    "pasteLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD14C\uC774\uBE14 \uB370\uC774\uD130 \uBD99\uC5EC\uB123\uAE30" } },
    "pasteDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC2A4\uD504\uB808\uB4DC\uC2DC\uD2B8\uC5D0\uC11C \uC140\uC744 \uBCF5\uC0AC\uD558\uC5EC \uC544\uB798\uC5D0 \uBD99\uC5EC\uB123\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4." } },
    "firstRowHeader": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uCCAB \uBC88\uC9F8 \uD589\uC740 \uD5E4\uB354\uC785\uB2C8\uB2E4" } },
    "limitError": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "limit" }, { "t": 3, "v": "\uAC1C \uC774\uC0C1\uC758 \uD589\uC744 \uAC00\uC838\uC62C \uC218 \uC5C6\uC2B5\uB2C8\uB2E4." }] } }
  },
  "createTableModal": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC0C8 \uD14C\uC774\uBE14 \uC0DD\uC131" } },
    "defaultName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD14C\uC774\uBE14" } },
    "importLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAE30\uC874 \uB370\uC774\uD130\uB97C \uAC00\uC838\uC624\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?" } },
    "newTable": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC0C8 \uD14C\uC774\uBE14\uB85C \uC2DC\uC791" } }
  },
  "createTable": {
    "showTable": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD14C\uC774\uBE14 \uBCF4\uAE30" } },
    "addButton": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD14C\uC774\uBE14 \uCD94\uAC00" } },
    "uploading": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC5C5\uB85C\uB4DC \uC911..." } },
    "preparing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB370\uC774\uD130 \uC900\uBE44 \uC911..." } },
    "importError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD30C\uC77C \uAC00\uC838\uC624\uB294 \uC911 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4" } },
    "stateRowCreation": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAC00\uC838\uC624\uB294 \uC911..." } },
    "statePreValidation": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB370\uC774\uD130 \uC720\uD6A8\uC131 \uAC80\uC0AC \uC911..." } },
    "stateCreateTable": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD14C\uC774\uBE14 \uC0DD\uC131 \uC911..." } },
    "importingTable": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": '\uD14C\uC774\uBE14 "' }, { "t": 4, "k": "name" }, { "t": 3, "v": '"\uC744 \uAC00\uC838\uC624\uB294 \uC911...' }] } }
  },
  "importErrorReport": {
    "reportTitleFailure": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC2E4\uD328\uD55C \uD589" } },
    "reportTitleSuccess": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAC00\uC838\uC624\uAE30 \uC131\uACF5\uD588\uC9C0\uB9CC..." } },
    "reportMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB2E4\uC74C \uD589 \uC778\uB371\uC2A4\uB97C \uAC00\uC838\uC62C \uC218 \uC5C6\uC2B5\uB2C8\uB2E4:" } }
  },
  "importFileModal": {
    "defaultName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD14C\uC774\uBE14" } },
    "additionalImportTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "table" }, { "t": 3, "v": "\uC5D0 \uAC00\uC838\uC624\uAE30" }] } },
    "importLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAE30\uC874 \uB370\uC774\uD130\uB97C \uAC00\uC838\uC624\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?" } },
    "newTable": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC0C8 \uD14C\uC774\uBE14\uB85C \uC2DC\uC791" } },
    "showTable": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD14C\uC774\uBE14 \uBCF4\uAE30" } },
    "importButton": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAC00\uC838\uC624\uAE30" } },
    "uploading": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC5C5\uB85C\uB4DC \uC911..." } },
    "preparing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB370\uC774\uD130 \uC900\uBE44 \uC911..." } },
    "importError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD30C\uC77C \uAC00\uC838\uC624\uB294 \uC911 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4" } },
    "fieldMappingTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD544\uB4DC \uB9E4\uD551" } },
    "fieldMappingDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD14C\uC774\uBE14\uC758 Baserow \uD544\uB4DC\uC5D0 \uC5F4\uC744 \uC790\uB3D9\uC73C\uB85C \uB9E4\uD551\uD588\uC2B5\uB2C8\uB2E4. \uC544\uB798\uC5D0\uC11C \uBCC0\uACBD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uD638\uD658\uB418\uC9C0 \uC54A\uB294 \uC140\uC740 \uAC00\uC838\uC628 \uD6C4 \uBE44\uC5B4 \uC788\uAC8C \uB429\uB2C8\uB2E4." } },
    "selectImportMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAC00\uC838\uC62C \uB370\uC774\uD130\uB97C \uC120\uD0DD\uD558\uC138\uC694." } },
    "filePreview": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD30C\uC77C \uB0B4\uC6A9 \uBBF8\uB9AC\uBCF4\uAE30" } },
    "importPreview": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAC00\uC838\uC624\uAE30 \uBBF8\uB9AC\uBCF4\uAE30" } },
    "useUpsertField": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774\uBBF8 \uC874\uC7AC\uD558\uB294 \uD589\uC744 \uC5C5\uB370\uC774\uD2B8" } },
    "upsertTooltip": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uACE0\uC720\uD55C \uD544\uB4DC\uB97C \uC0AC\uC6A9\uD558\uC5EC \uAE30\uC874 \uD589\uC744 \uC77C\uCE58\uC2DC\uD0A4\uACE0 \uAC00\uC838\uC628 \uAC12\uC73C\uB85C \uB370\uC774\uD130\uB97C \uB36E\uC5B4\uC501\uB2C8\uB2E4." } },
    "stateRowCreation": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAC00\uC838\uC624\uB294 \uC911..." } },
    "statePreValidation": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB370\uC774\uD130 \uAC80\uC99D \uC911..." } },
    "stateCreateTable": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD14C\uC774\uBE14 \uC0DD\uC131 \uC911..." } },
    "restoredFile": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": '\uD30C\uC77C "' }, { "t": 4, "k": "name" }, { "t": 3, "v": '"\uC744 \uAC00\uC838\uC624\uB294 \uC911...' }] } }
  },
  "formulaAdvancedEditContext": {
    "textAreaFormulaInputPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC218\uC2DD\uC744 \uD3B8\uC9D1\uD558\uB824\uBA74 \uD074\uB9AD\uD558\uC138\uC694" } },
    "fields": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD544\uB4DC" } },
    "functions": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD568\uC218" } },
    "operators": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC5F0\uC0B0\uC790" } },
    "fieldType": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "type" }, { "t": 3, "v": " \uD544\uB4DC" }] } }
  },
  "fieldFormulaInitialSubForm": {
    "formulaInputPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC218\uC2DD\uC744 \uD3B8\uC9D1\uD558\uB824\uBA74 \uD074\uB9AD\uD558\uC138\uC694" } },
    "refreshFormulaOptions": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC218\uC2DD \uC635\uC158 \uC0C8\uB85C \uACE0\uCE68" } }
  },
  "fieldLongTextSubForm": {
    "enableRichTextFormatting": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC11C\uC2DD \uC788\uB294 \uD14D\uC2A4\uD2B8 \uD65C\uC131\uD654" } }
  },
  "formulaFieldItemDescription": {
    "syntax": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAD6C\uBB38" } },
    "examples": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC608\uC2DC" } }
  },
  "viewSearchContext": {
    "searchInRows": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAC80\uC0C9" } },
    "hideNotMatching": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC77C\uCE58\uD558\uC9C0 \uC54A\uB294 \uD589 \uC228\uAE30\uAE30" } }
  },
  "viewsContext": {
    "searchView": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBDF0 \uAC80\uC0C9" } },
    "noViews": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBDF0\uB97C \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4" } },
    "collaborative": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD611\uC5C5" } }
  },
  "viewFilterTypeLinkRow": {
    "unnamed": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "\uC774\uB984 \uC5C6\uB294 \uD589 " }, { "t": 4, "k": "value" }] } },
    "choose": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD589 \uC120\uD0DD" } }
  },
  "viewFieldConditionsForm": {
    "addCondition": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC870\uAC74 \uCD94\uAC00" } },
    "addConditionGroup": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC870\uAC74 \uADF8\uB8F9 \uCD94\uAC00" } }
  },
  "viewFilterContext": {
    "addFilter": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD544\uD130 \uCD94\uAC00" } },
    "addFilterGroup": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD544\uD130 \uADF8\uB8F9 \uCD94\uAC00" } },
    "disableAllFilters": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBAA8\uB450 \uBE44\uD65C\uC131\uD654\uB428" } },
    "noFilterTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC544\uC9C1 \uD544\uD130\uB97C \uC0DD\uC131\uD558\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4" } },
    "noFilterText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD544\uD130\uB97C \uC0AC\uC6A9\uD558\uBA74 \uC870\uAC74\uC5D0 \uC801\uC6A9\uB418\uB294 \uD589\uC744 \uD45C\uC2DC\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4." } },
    "where": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC870\uAC74" } },
    "and": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uADF8\uB9AC\uACE0" } },
    "or": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB610\uB294" } },
    "relatedFieldNotFound": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAD00\uB828 \uD544\uB4DC\uB97C \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4." } },
    "filterTypeNotFound": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD544\uD130 \uC720\uD615\uC774 \uD638\uD658\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4." } },
    "noCompatibleFilterTypesErrorTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD638\uD658 \uAC00\uB2A5\uD55C \uD544\uD130 \uC720\uD615 \uC5C6\uC74C" } },
    "noCompatibleFilterTypesErrorMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD544\uB4DC \uC911 \uD638\uD658 \uAC00\uB2A5\uD55C \uD544\uD130 \uC720\uD615\uC774 \uC5C6\uC2B5\uB2C8\uB2E4" } }
  },
  "viewFilterTypeFileTypeDropdown": {
    "image": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774\uBBF8\uC9C0" } },
    "document": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBB38\uC11C" } }
  },
  "createViewModal": {
    "createNew": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "\uC0C8 " }, { "t": 4, "k": "view" }, { "t": 3, "v": " \uC0DD\uC131" }] } },
    "add": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "view" }, { "t": 3, "v": " \uCD94\uAC00" }] } }
  },
  "createViewLink": {
    "inCompatibleWithDataSync": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774 \uBDF0 \uC720\uD615\uC740 \uB370\uC774\uD130 \uB3D9\uAE30\uD654 \uD14C\uC774\uBE14\uACFC \uD638\uD658\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4." } }
  },
  "shareViewLink": {
    "shareViewText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBE44\uACF5\uAC1C \uACF5\uC720 \uB9C1\uD06C\uB97C \uD1B5\uD574 \uB204\uAD6C\uB098 \uC774 \uBDF0\uC758 \uB370\uC774\uD130\uB97C \uBCFC \uC218 \uC788\uC2B5\uB2C8\uB2E4." } },
    "shareView": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "viewTypeSharingLinkName" }, { "t": 3, "v": " \uACF5\uC720" }] } },
    "createPrivateLink": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBE44\uACF5\uAC1C \uB9C1\uD06C \uC0DD\uC131" } },
    "shareViewTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC544\uC9C1 \uBDF0\uB97C \uACF5\uC720\uD558\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4" } },
    "sharedViewTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "\uC774 " }, { "t": 4, "k": "viewTypeSharingLinkName" }, { "t": 3, "v": "\uB294 \uD604\uC7AC \uBE44\uACF5\uAC1C \uB9C1\uD06C\uB97C \uD1B5\uD574 \uACF5\uC720\uB418\uACE0 \uC788\uC2B5\uB2C8\uB2E4" }] } },
    "sharedViewDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "\uB9C1\uD06C\uB97C \uAC00\uC9C4 \uC0AC\uB78C\uC740 " }, { "t": 4, "k": "viewTypeSharingLinkName" }, { "t": 3, "v": "\uC744 \uBCFC \uC218 \uC788\uC2B5\uB2C8\uB2E4." }] } },
    "disableLink": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB9C1\uD06C \uACF5\uC720 \uBE44\uD65C\uC131\uD654" } },
    "generateNewUrl": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC0C8 URL \uC0DD\uC131" } },
    "copyURL": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "URL \uBCF5\uC0AC" } },
    "EnablePassword": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBE44\uBC00\uBC88\uD638\uB85C \uC811\uADFC \uC81C\uD55C" } },
    "DisablePassword": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBE44\uBC00\uBC88\uD638\uB85C \uBCF4\uD638\uB428" } },
    "ChangePassword": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBCC0\uACBD" } },
    "notSharedYetText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774 \uBDF0\uC758 \uB370\uC774\uD130\uB97C \uB204\uAD6C\uB098 \uBCFC \uC218 \uC788\uB3C4\uB85D \uD5C8\uC6A9\uD558\uAC70\uB098 \uC678\uBD80 \uCE98\uB9B0\uB354\uC640 \uC774\uBCA4\uD2B8\uB97C \uB3D9\uAE30\uD654\uD558\uC138\uC694." } },
    "shareViewWarningTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uACBD\uACE0" } }
  },
  "viewGroupByContext": {
    "noGroupByTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC544\uC9C1 \uADF8\uB8F9\uC744 \uC0DD\uC131\uD558\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4" } },
    "noGroupByText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD544\uB4DC\uBCC4\uB85C \uD589\uC744 \uADF8\uB8F9\uD654\uD569\uB2C8\uB2E4." } },
    "groupBy": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uADF8\uB8F9\uD654 \uAE30\uC900" } },
    "thenBy": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB2E4\uC74C \uAE30\uC900" } },
    "addGroupBy": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uADF8\uB8F9\uD654\uD560 \uD544\uB4DC \uC120\uD0DD" } },
    "hiddenFieldWarning": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD558\uB098 \uC774\uC0C1\uC758 \uADF8\uB8F9\uD654 \uAE30\uC900\uC774 \uD3B8\uC9D1\uC790 \uBC0F \uD558\uC704 \uAD8C\uD55C \uC0AC\uC6A9\uC790\uC5D0\uAC8C \uD45C\uC2DC\uB418\uC9C0 \uC54A\uB294 \uC228\uACA8\uC9C4 \uD544\uB4DC\uB97C \uCC38\uC870\uD569\uB2C8\uB2E4." } },
    "maxGroupBysReached": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "\uCD5C\uB300 " }, { "t": 4, "k": "count" }, { "t": 3, "v": "\uAC1C\uC758 \uD544\uB4DC\uB97C \uAE30\uC900\uC73C\uB85C \uADF8\uB8F9\uD654\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4." }] } },
    "collapseAllGroups": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBAA8\uB450 \uC811\uAE30" } },
    "expandAllGroups": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBAA8\uB450 \uD3BC\uCE58\uAE30" } }
  },
  "viewGroupBy": {
    "groupBy": { "t": 0, "b": { "t": 1, "c": [{ "t": 2, "i": [{ "t": 3 }], "s": "\uADF8\uB8F9" }, { "t": 2, "i": [{ "t": 3 }], "s": "1\uAC1C\uC758 \uD544\uB4DC\uB85C \uADF8\uB8F9\uD654" }, { "t": 2, "i": [{ "t": 4, "k": "count" }, { "t": 3, "v": "\uAC1C\uC758 \uD544\uB4DC\uB85C \uADF8\uB8F9\uD654" }] }] } }
  },
  "viewSortContext": {
    "noSortTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC544\uC9C1 \uC815\uB82C\uC744 \uC0DD\uC131\uD558\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4" } },
    "noSortText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC815\uB82C\uC744 \uC0AC\uC6A9\uD558\uBA74 \uD544\uB4DC\uBCC4\uB85C \uD589\uC744 \uC815\uB82C\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4." } },
    "sortBy": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC815\uB82C \uAE30\uC900" } },
    "thenBy": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB2E4\uC74C \uAE30\uC900" } },
    "addSort": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC815\uB82C\uD560 \uD544\uB4DC \uC120\uD0DD" } },
    "hiddenFieldWarning": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD558\uB098 \uC774\uC0C1\uC758 \uC815\uB82C \uD56D\uBAA9\uC774 \uD3B8\uC9D1\uC790 \uBC0F \uD558\uC704 \uC5ED\uD560 \uC0AC\uC6A9\uC790\uC5D0\uAC8C\uB294 \uD45C\uC2DC\uB418\uC9C0 \uC54A\uB294 \uC228\uACA8\uC9C4 \uD544\uB4DC\uB97C \uCC38\uC870\uD569\uB2C8\uB2E4." } }
  },
  "viewSort": {
    "sort": { "t": 0, "b": { "t": 1, "c": [{ "t": 2, "i": [{ "t": 3 }], "s": "\uC815\uB82C" }, { "t": 2, "i": [{ "t": 3 }], "s": "1\uAC1C\uC758 \uC815\uB82C" }, { "t": 2, "i": [{ "t": 4, "k": "count" }, { "t": 3, "v": "\uAC1C\uC758 \uC815\uB82C" }] }] } }
  },
  "viewDecorator": {
    "decorator": { "t": 0, "b": { "t": 1, "c": [{ "t": 2, "i": [{ "t": 3 }], "s": "\uC0C9\uC0C1" }, { "t": 2, "i": [{ "t": 3 }], "s": "1\uAC1C\uC758 \uC0C9\uC0C1" }, { "t": 2, "i": [{ "t": 4, "k": "count" }, { "t": 3, "v": "\uAC1C\uC758 \uC0C9\uC0C1" }] }] } },
    "hiddenFieldWarning": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD3B8\uC9D1\uC790 \uBC0F \uD558\uC704 \uC9C1\uAE09 \uC0AC\uC6A9\uC790\uC758 \uACBD\uC6B0 \uC228\uACA8\uC9C4 \uD544\uB4DC\uB97C \uCC38\uC870\uD560 \uC218 \uC788\uB294 \uC7A5\uC2DD \uC694\uC18C\uAC00 \uC81C\uAC70\uB429\uB2C8\uB2E4." } }
  },
  "viewRotateSlugModal": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "URL \uC0C8\uB85C \uACE0\uCE68" } },
    "refreshWarning": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "viewName" }, { "t": 3, "v": "\uC758 URL\uC744 \uC0C8\uB85C \uACE0\uCE58\uC2DC\uACA0\uC2B5\uB2C8\uAE4C? \uC0C8\uB85C \uACE0\uCE68 \uD6C4 \uC0C8 URL\uC774 \uC0DD\uC131\uB418\uBA70 \uC774\uC804 URL\uC744 \uD1B5\uD574 " }, { "t": 4, "k": "viewTypeSharingLinkName" }, { "t": 3, "v": "\uC5D0 \uC811\uADFC\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4. URL\uC744 \uACF5\uC720\uD55C \uBAA8\uB4E0 \uC0AC\uB78C\uC774 " }, { "t": 4, "k": "viewTypeSharingLinkName" }, { "t": 3, "v": "\uC5D0 \uC811\uADFC\uD560 \uC218 \uC5C6\uAC8C \uB429\uB2C8\uB2E4." }] } },
    "generateNewURL": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC0C8 URL \uC0DD\uC131" } }
  },
  "shareViewEnablePasswordModal": {
    "newPasswordTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBE44\uBC00\uBC88\uD638 \uC785\uB825" } },
    "newPasswordDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uACF5\uC6A9 \uB9C1\uD06C\uB294 \uBE44\uBC00\uBC88\uD638\uB97C \uC785\uB825\uD55C \uD6C4\uC5D0\uB9CC \uC811\uADFC\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774 \uBE44\uBC00\uBC88\uD638\uB294 \uC554\uD638\uD654\uB418\uC5B4 \uC800\uC7A5\uB429\uB2C8\uB2E4." } },
    "newPasswordSave": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBE44\uBC00\uBC88\uD638 \uC124\uC815" } },
    "changePasswordTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBE44\uBC00\uBC88\uD638 \uBCC0\uACBD" } },
    "changePasswordDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBE44\uBC00\uBC88\uD638\uB97C \uBCC0\uACBD\uD558\uBA74 \uC774\uC804 \uBE44\uBC00\uBC88\uD638\uB294 \uB354 \uC774\uC0C1 \uC791\uB3D9\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uC774 \uBE44\uBC00\uBC88\uD638\uB294 \uC554\uD638\uD654\uB418\uC5B4 \uC800\uC7A5\uB429\uB2C8\uB2E4." } },
    "changePasswordSave": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBE44\uBC00\uBC88\uD638 \uBCC0\uACBD" } }
  },
  "shareViewDisablePasswordModal": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBE44\uBC00\uBC88\uD638 \uBCF4\uD638 \uBE44\uD65C\uC131\uD654" } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774 \uACF5\uC6A9 \uB9C1\uD06C\uC758 \uBE44\uBC00\uBC88\uD638 \uBCF4\uD638\uB97C \uBE44\uD65C\uC131\uD654\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C? \uBE44\uD65C\uC131\uD654\uD558\uBA74 \uBE44\uBC00\uBC88\uD638\uAC00 \uC0AD\uC81C\uB418\uBA70 \uBCF5\uAD6C\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4" } },
    "disable": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBE44\uD65C\uC131\uD654" } }
  },
  "publicViewAuthLogin": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774 \uD398\uC774\uC9C0\uB294 \uBE44\uBC00\uBC88\uD638\uB85C \uBCF4\uD638\uB429\uB2C8\uB2E4" } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC62C\uBC14\uB978 \uBE44\uBC00\uBC88\uD638\uB97C \uC785\uB825\uD558\uC5EC \uD398\uC774\uC9C0\uC5D0 \uC811\uADFC\uD558\uC138\uC694." } },
    "enter": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC785\uB825" } },
    "error": {
      "incorrectPasswordTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC798\uBABB\uB41C \uBE44\uBC00\uBC88\uD638" } },
      "incorrectPasswordText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC81C\uACF5\uB41C \uBE44\uBC00\uBC88\uD638\uAC00 \uC798\uBABB\uB418\uC5C8\uC2B5\uB2C8\uB2E4." } }
    }
  },
  "viewFieldsContext": {
    "coverField": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC378\uB124\uC77C \uD544\uB4DC" } },
    "noCover": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC378\uB124\uC77C \uC5C6\uC74C" } },
    "search": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD544\uB4DC \uAC80\uC0C9" } },
    "hideAll": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBAA8\uB450 \uC228\uAE30\uAE30" } },
    "showAll": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBAA8\uB450 \uD45C\uC2DC" } }
  },
  "viewFilterTypeBoolean": {
    "selected": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC120\uD0DD\uB428" } }
  },
  "viewFilter": {
    "filter": { "t": 0, "b": { "t": 1, "c": [{ "t": 2, "i": [{ "t": 3 }], "s": "\uD544\uD130" }, { "t": 2, "i": [{ "t": 3 }], "s": "1\uAC1C\uC758 \uD544\uD130" }, { "t": 2, "i": [{ "t": 4, "k": "count" }, { "t": 3, "v": "\uAC1C\uC758 \uD544\uD130" }] }] } },
    "hasAllValuesEqual": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBAA8\uB4E0 \uAC12\uC774 \uB3D9\uC77C\uD568" } },
    "hasValueHigherThan": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAC12\uC774 \uB354 \uD07C" } },
    "hasValueLowerThan": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAC12\uC774 \uB354 \uC791\uC74C" } },
    "hasValueLowerThanOrEqual": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAC12\uC774 \uC791\uAC70\uB098 \uAC19\uC74C" } },
    "hasNotValueHigherThan": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAC12\uC774 \uB354 \uD06C\uC9C0 \uC54A\uC74C" } },
    "hasNotValueLowerThan": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAC12\uC774 \uB354 \uC791\uC9C0 \uC54A\uC74C" } },
    "hasNotValueLowerThanOrEqual": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAC12\uC774 \uC791\uAC70\uB098 \uAC19\uC9C0 \uC54A\uC74C" } },
    "hasValueHigherThanOrEqual": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAC12\uC774 \uD06C\uAC70\uB098 \uAC19\uC74C" } },
    "hasNotValueHigherThanOrEqual": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAC12\uC774 \uD06C\uAC70\uB098 \uAC19\uC9C0 \uC54A\uC74C" } }
  },
  "viewContext": {
    "exportView": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBDF0 \uB0B4\uBCF4\uB0B4\uAE30" } },
    "duplicateView": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBDF0 \uBCF5\uC81C" } },
    "renameView": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBDF0 \uC774\uB984 \uBCC0\uACBD" } },
    "toPersonal": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAC1C\uC778\uC73C\uB85C" } },
    "toCollaborative": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD611\uC5C5\uC73C\uB85C" } },
    "webhooks": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC6F9\uD6C5" } },
    "importFile": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD30C\uC77C \uAC00\uC838\uC624\uAE30" } },
    "deleteView": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBDF0 \uC0AD\uC81C" } },
    "defaultRowValues": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAE30\uBCF8\uAC12 \uD589 \uAC12" } }
  },
  "deleteViewModal": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "name" }, { "t": 3, "v": " \uC0AD\uC81C" }] } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "\uBDF0 " }, { "t": 4, "k": "name" }, { "t": 3, "v": "\uC744(\uB97C) \uC0AD\uC81C\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C? \uD14C\uC774\uBE14 \uB370\uC774\uD130\uB294 \uC720\uC9C0\uB418\uC9C0\uB9CC \uBDF0\uC640 \uAD00\uB828\uB41C \uD544\uD130, \uC815\uB82C \uBC0F \uD544\uB4DC \uB108\uBE44\uB294 \uC0AD\uC81C\uB429\uB2C8\uB2E4." }] } },
    "delete": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBDF0 \uC0AD\uC81C" } }
  },
  "viewForm": {
    "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774\uB984" } },
    "whoCanEdit": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB204\uAC00 \uC774 \uBDF0\uB97C \uD3B8\uC9D1\uD560 \uC218 \uC788\uB098\uC694?" } }
  },
  "viewOwnershipType": {
    "collaborative": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD611\uC5C5" } },
    "personal": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAC1C\uC778" } },
    "collaborativeDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAD8C\uD55C\uC774 \uC788\uB294 \uC0AC\uB78C\uC740 \uB204\uAD6C\uB098 \uBAA8\uB4E0 \uB370\uC774\uD130\uB97C \uBCF4\uACE0 \uC18D\uC131\uC744 \uBCC0\uACBD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4." } }
  },
  "galleryViewHeader": {
    "customizeCards": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uCE74\uB4DC \uB9DE\uCDA4 \uC124\uC815" } }
  },
  "gridViewHide": {
    "hideField": { "t": 0, "b": { "t": 1, "c": [{ "t": 2, "i": [{ "t": 3 }], "s": "\uD544\uB4DC \uC228\uAE30\uAE30" }, { "t": 2, "i": [{ "t": 3 }], "s": "1\uAC1C\uC758 \uC228\uACA8\uC9C4 \uD544\uB4DC" }, { "t": 2, "i": [{ "t": 4, "k": "count" }, { "t": 3, "v": "\uAC1C\uC758 \uC228\uACA8\uC9C4 \uD544\uB4DC" }] }] } }
  },
  "gridViewFieldType": {
    "insertLeft": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC67C\uCABD\uC5D0 \uC0BD\uC785" } },
    "insertRight": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC624\uB978\uCABD\uC5D0 \uC0BD\uC785" } },
    "createFilter": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD544\uD130 \uC0DD\uC131" } },
    "duplicate": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD544\uB4DC \uBCF5\uC81C" } },
    "sortField": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC815\uB82C" } },
    "hideField": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD544\uB4DC \uC228\uAE30\uAE30" } },
    "dataSyncField": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD544\uB4DC\uB294 \uC77D\uAE30 \uC804\uC6A9\uC774\uBA70 \uD14C\uC774\uBE14\uC758 \uB370\uC774\uD130 \uB3D9\uAE30\uD654\uC758 \uC77C\uBD80\uC785\uB2C8\uB2E4." } },
    "noWriteValues": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774 \uD544\uB4DC\uC5D0 \uB300\uD55C \uBCC0\uACBD\uC740 \uC81C\uD55C\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4." } },
    "dataSyncFieldTwoWaySync": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD544\uB4DC\uB294 \uD14C\uC774\uBE14\uC758 \uB370\uC774\uD130 \uB3D9\uAE30\uD654\uC640 \uB3D9\uAE30\uD654\uB429\uB2C8\uB2E4." } }
  },
  "gridViewRow": {
    "rowNotMatchingFilters": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD589\uC774 \uD544\uD130\uC640 \uC77C\uCE58\uD558\uC9C0 \uC54A\uC74C" } },
    "rowNotMatchingSearch": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD589\uC774 \uAC80\uC0C9\uACFC \uC77C\uCE58\uD558\uC9C0 \uC54A\uC74C" } },
    "rowHasMoved": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD589\uC774 \uC774\uB3D9\uB429\uB2C8\uB2E4" } }
  },
  "gridView": {
    "selectRow": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD589 \uC120\uD0DD" } },
    "insertRowAbove": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC704\uC5D0 \uD589 \uC0BD\uC785" } },
    "insertRowBelow": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC544\uB798\uC5D0 \uD589 \uC0BD\uC785" } },
    "duplicateRow": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD589 \uBCF5\uC81C" } },
    "copyRowURL": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD589 URL \uBCF5\uC0AC" } },
    "copiedRowURL": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD589 URL \uBCF5\uC0AC\uB428" } },
    "copiedRowURLMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "\uD589 " }, { "t": 4, "k": "id" }, { "t": 3, "v": "\uC758 URL\uC774 \uD074\uB9BD\uBCF4\uB4DC\uC5D0 \uBCF5\uC0AC\uB418\uC5C8\uC2B5\uB2C8\uB2E4." }] } },
    "enlargeRow": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD589 \uD655\uB300" } },
    "deleteRow": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD589 \uC0AD\uC81C" } },
    "deleteRows": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD589 \uC0AD\uC81C" } },
    "copyCells": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC140 \uBCF5\uC0AC" } },
    "copyCellsWithHeader": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD5E4\uB354\uC640 \uD568\uAED8 \uC140 \uBCF5\uC0AC" } },
    "generateCellsValues": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "AI\uB85C \uAC12 \uC0DD\uC131" } },
    "rowCount": { "t": 0, "b": { "t": 1, "c": [{ "t": 2, "i": [{ "t": 3 }], "s": "\uD589 \uC5C6\uC74C" }, { "t": 2, "i": [{ "t": 3 }], "s": "1\uAC1C\uC758 \uD589" }, { "t": 2, "i": [{ "t": 4, "k": "count" }, { "t": 3, "v": "\uAC1C\uC758 \uD589" }] }] } },
    "hiddenRowsInsertedTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD589 \uCD94\uAC00\uB428" } },
    "hiddenRowsInsertedMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "number" }, { "t": 3, "v": "\uAC1C\uC758 \uC0C8\uB85C \uCD94\uAC00\uB41C \uD589\uC774 \uCD94\uAC00\uB418\uC5C8\uC9C0\uB9CC \uD65C\uC131 \uD544\uD130\uB85C \uC778\uD574 \uBCF4\uC774\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4." }] } },
    "tooManyItemsTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD56D\uBAA9\uC774 \uB108\uBB34 \uB9CE\uC74C" } },
    "tooManyItemsDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "\uD55C \uBC88\uC5D0 " }, { "t": 4, "k": "limit" }, { "t": 3, "v": "\uAC1C \uC774\uC0C1\uC758 \uD589\uC744 \uC5C5\uB370\uC774\uD2B8\uD560 \uC218 \uC5C6\uC73C\uBBC0\uB85C \uCC98\uC74C \uBA87 \uAC1C\uB9CC \uC5C5\uB370\uC774\uD2B8\uD588\uC2B5\uB2C8\uB2E4." }] } },
    "AIValuesGenerationErrorTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "AI \uAC12 \uC0DD\uC131 \uC2E4\uD328" } },
    "AIValuesGenerationErrorMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "API_KEY\uB97C \uD655\uC778\uD558\uACE0 \uC120\uD0DD\uD55C \uBAA8\uB378\uC744 \uD655\uC778\uD558\uC138\uC694." } },
    "generateAllAiValues": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBAA8\uB4E0 AI \uAC12 \uC0DD\uC131" } }
  },
  "gridViewFieldFile": {
    "dropHere": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC5EC\uAE30\uC5D0 \uB193\uAE30" } },
    "dropFileHere": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC5EC\uAE30\uC5D0 \uD30C\uC77C \uB193\uAE30" } }
  },
  "gridViewFieldLinkRow": {
    "unnamed": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "\uC774\uB984 \uC5C6\uB294 \uD589 " }, { "t": 4, "k": "value" }] } },
    "keepOnlyOneValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD558\uB098\uC758 \uAC12\uB9CC \uC720\uC9C0" } }
  },
  "gridViewIdentifierOptions": {
    "id": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD589 \uC2DD\uBCC4\uC790" } },
    "count": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAC1C\uC218" } }
  },
  "gridViewRowsAddContext": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC5EC\uB7EC \uD589 \uC0DD\uC131" } },
    "choice": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "rowAmountChoice" }, { "t": 3, "v": "\uAC1C\uC758 \uD589 \uCD94\uAC00" }] } }
  },
  "formViewMeta": {
    "includeRowId": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "URL\uC5D0 \uC0C8\uB85C \uC0DD\uC131\uB41C \uD589 ID\uB97C \uD3EC\uD568\uD558\uB824\uBA74 " }, { "t": 4, "k": "row_id" }, { "t": 3, "v": "\uB97C \uC0AC\uC6A9\uD558\uC138\uC694." }] } }
  },
  "formViewMetaControls": {
    "whenSubmittedLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC591\uC2DD\uC774 \uC81C\uCD9C\uB418\uC5C8\uC744 \uB54C" } },
    "showMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBA54\uC2DC\uC9C0 \uD45C\uC2DC" } },
    "urlRedirect": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "URL\uB85C \uB9AC\uB514\uB809\uC158" } },
    "theMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBA54\uC2DC\uC9C0" } },
    "theURL": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "URL" } }
  },
  "previewAny": {
    "externalWarning": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC678\uBD80 \uC11C\uBE44\uC2A4\uB97C \uD1B5\uD574 \uD30C\uC77C\uC744 \uC5F4\uBA74 \uD574\uB2F9 \uC11C\uBC84\uC5D0 \uD30C\uC77C\uC774 \uB178\uCD9C\uB429\uB2C8\uB2E4." } }
  },
  "exportTableModal": {
    "failedTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB0B4\uBCF4\uB0B4\uAE30 \uC2E4\uD328" } },
    "failedDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC11C\uBC84 \uC624\uB958\uB85C \uC778\uD574 \uB0B4\uBCF4\uB0B4\uAE30\uC5D0 \uC2E4\uD328\uD588\uC2B5\uB2C8\uB2E4." } },
    "cancelledTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB0B4\uBCF4\uB0B4\uAE30 \uCDE8\uC18C\uB428" } },
    "cancelledDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB0B4\uBCF4\uB0B4\uAE30\uAC00 \uCDE8\uC18C\uB418\uC5C8\uC2B5\uB2C8\uB2E4." } },
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "name" }, { "t": 3, "v": " \uB0B4\uBCF4\uB0B4\uAE30" }] } }
  },
  "exporterTypeChoices": {
    "formatLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC5B4\uB5A4 \uD615\uC2DD\uC73C\uB85C \uB0B4\uBCF4\uB0B4\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?" } }
  },
  "exportTableForm": {
    "viewLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB0B4\uBCF4\uB0BC \uBDF0 \uC120\uD0DD:" } },
    "typeError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC0AC\uC6A9 \uAC00\uB2A5\uD55C \uB0B4\uBCF4\uB0B4\uAE30 \uC720\uD615\uC774 \uC5C6\uC2B5\uB2C8\uB2E4. \uB2E4\uB978 \uBDF0 \uB610\uB294 \uC804\uCCB4 \uD14C\uC774\uBE14\uC744 \uC120\uD0DD\uD558\uC138\uC694." } },
    "includeRowId": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD589 ID\uB97C \uD3EC\uD568\uD558\uC138\uC694" } },
    "includePrimaryField": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAE30\uBCF8 \uD544\uB4DC\uB97C \uD3EC\uD568\uD558\uC138\uC694" } }
  },
  "exportTableLoadingBar": {
    "export": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB0B4\uBCF4\uB0B4\uAE30" } },
    "download": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB2E4\uC6B4\uB85C\uB4DC" } }
  },
  "exportTableDropdown": {
    "exportEntireTable": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC804\uCCB4 \uD14C\uC774\uBE14 \uB0B4\uBCF4\uB0B4\uAE30" } }
  },
  "tableCSVExporter": {
    "columnSeparatorLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC5F4 \uAD6C\uBD84\uC790" } },
    "recordSeparator": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB808\uCF54\uB4DC \uAD6C\uBD84\uC790" } },
    "unitSeparator": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB2E8\uC704 \uAD6C\uBD84\uC790" } },
    "encodingLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC778\uCF54\uB529" } },
    "firstRowIsHeaderLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uCCAB \uBC88\uC9F8 \uD589\uC740 \uD5E4\uB354\uC785\uB2C8\uB2E4" } },
    "includeHeader": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD544\uB4DC \uC774\uB984\uC744 \uD5E4\uB354\uB85C \uD3EC\uD568\uD569\uB2C8\uB2E4" } }
  },
  "apiDocsDatabase": {
    "pageTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "name" }, { "t": 3, "v": " \uB370\uC774\uD130\uBCA0\uC774\uC2A4 API \uBB38\uC11C" }] } },
    "back": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB300\uC2DC\uBCF4\uB4DC\uB85C \uB3CC\uC544\uAC00\uAE30" } },
    "openDatabase": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB370\uC774\uD130\uBCA0\uC774\uC2A4 \uC5F4\uAE30" } }
  },
  "apiDocsComponent": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "REST API" } },
    "intro": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "settingsLink" }, { "t": 3, "v": "\uC5D0\uC11C \uB370\uC774\uD130\uBCA0\uC774\uC2A4 \uC2A4\uD0A4\uB9C8\uC640 API \uD0A4\uB97C \uC0DD\uC131\uD55C \uD6C4, Baserow \uB370\uC774\uD130\uBCA0\uC774\uC2A4\uB294 \uD589\uC744 \uC0DD\uC131, \uC77D\uAE30, \uC5C5\uB370\uC774\uD2B8 \uBC0F \uC0AD\uC81C\uD558\uAE30 \uC704\uD55C \uC790\uCCB4 REST API \uC5D4\uB4DC\uD3EC\uC778\uD2B8\uB97C \uC81C\uACF5\uD569\uB2C8\uB2E4." }] } },
    "settings": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC124\uC815" } },
    "selectApplicationTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC5B4\uB5A4 \uB370\uC774\uD130\uBCA0\uC774\uC2A4\uC758 \uBB38\uC11C\uB97C \uBCF4\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?" } },
    "signIn": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC2DC\uC791\uD558\uB824\uBA74 \uB85C\uADF8\uC778\uD558\uC138\uC694" } },
    "back": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB300\uC2DC\uBCF4\uB4DC\uB85C \uB3CC\uC544\uAC00\uAE30" } }
  },
  "viewAggregationType": {
    "emptyCount": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBE48 \uAC12" } },
    "notEmptyCount": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uCC44\uC6CC\uC9D0" } },
    "emptyPercentage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBE44\uC5B4 \uC788\uB294 \uBE44\uC728" } },
    "notEmptyPercentage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uCC44\uC6CC\uC9C4 \uBE44\uC728" } },
    "checkedCount": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uCCB4\uD06C\uB428" } },
    "notCheckedCount": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uCCB4\uD06C\uB418\uC9C0 \uC54A\uC74C" } },
    "checkedPercentage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uCCB4\uD06C\uB41C \uBE44\uC728" } },
    "notCheckedPercentage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uCCB4\uD06C\uB418\uC9C0 \uC54A\uC740 \uBE44\uC728" } },
    "min": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uCD5C\uC18C\uAC12" } },
    "max": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uCD5C\uB300\uAC12" } },
    "earliestDate": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAC00\uC7A5 \uBE60\uB978 \uB0A0\uC9DC" } },
    "earliestDateShort": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAC00\uC7A5 \uBE60\uB984" } },
    "latestDate": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAC00\uC7A5 \uB2A6\uC740 \uB0A0\uC9DC" } },
    "latestDateShort": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAC00\uC7A5 \uB2A6\uC74C" } },
    "uniqueCount": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uACE0\uC720 \uAC12" } },
    "sum": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD569\uACC4" } },
    "average": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD3C9\uADE0" } },
    "median": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC911\uC559\uAC12" } },
    "stdDev": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD45C\uC900 \uD3B8\uCC28" } },
    "stdDevShort": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD45C\uC900 \uD3B8\uCC28" } },
    "variance": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBD84\uC0B0" } },
    "count": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAC1C\uC218" } },
    "othersCount": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAE30\uD0C0" } },
    "distribution": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBD84\uD3EC" } }
  },
  "databaseForm": {
    "importLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAE30\uC874 \uB370\uC774\uD130\uB97C \uAC00\uC838\uC624\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?" } },
    "emptyLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uCC98\uC74C\uBD80\uD130 \uC2DC\uC791" } },
    "airtableLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Airtable\uC5D0\uC11C \uAC00\uC838\uC624\uAE30" } }
  },
  "importFromAirtable": {
    "airtableShareLinkTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBCA0\uC774\uC2A4\uC5D0 \uB300\uD55C \uB9C1\uD06C \uACF5\uC720" } },
    "airtableShareLinkDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": 'Airtable \uBCA0\uC774\uC2A4\uB97C \uAC00\uC838\uC624\uB824\uBA74 \uC804\uCCB4 \uBCA0\uC774\uC2A4\uC5D0 \uB300\uD55C \uACF5\uC720 \uB9C1\uD06C\uAC00 \uD544\uC694\uD569\uB2C8\uB2E4. Airtable\uC5D0\uC11C \uBCA0\uC774\uC2A4\uB97C \uC5F0 \uD6C4 \uC624\uB978\uCABD \uC0C1\uB2E8\uC758 \uACF5\uC720 \uBC84\uD2BC\uC744 \uD074\uB9AD\uD558\uC138\uC694. \uADF8\uB7F0 \uB2E4\uC74C "\uB9C1\uD06C\uB85C \uACF5\uC720" \uC635\uC158\uC744 \uC120\uD0DD\uD574\uC57C \uD569\uB2C8\uB2E4. \uACF5\uC720 \uBAA8\uB2EC \uCC3D\uC5D0\uC11C "\uACF5\uAC1C\uC801\uC73C\uB85C \uACF5\uC720" \uD0ED\uC744 \uD074\uB9AD\uD55C \uD6C4 \u201C\uACF5\uC720 \uBCA0\uC774\uC2A4 \uB9C1\uD06C \uD65C\uC131\uD654\u201D\uB97C \uD074\uB9AD\uD569\uB2C8\uB2E4. \uADF8\uB7F0 \uB2E4\uC74C \uC0DD\uC131\uB41C \uACF5\uAC1C \uB9C1\uD06C\uB97C \uBCF5\uC0AC\uD558\uC5EC \uC544\uB798 \uC785\uB825\uB780\uC5D0 \uBD99\uC5EC\uB123\uC73C\uC138\uC694.' } },
    "airtableShareLinkBeta": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": '\uC774 \uAE30\uB2A5\uC740 \uB300\uBD80\uBD84\uC758 \uB370\uC774\uD130\uB97C \uAC00\uC838\uC624\uC9C0\uB9CC, \uC77C\uBD80 \uD638\uD658\uB418\uC9C0 \uC54A\uB294 \uD56D\uBAA9\uC774 \uC788\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB530\uB77C\uC11C "\uC5D0\uC5B4\uD14C\uC774\uBE14 \uAC00\uC838\uC624\uAE30 \uBCF4\uACE0\uC11C"\uB77C\uB294 \uD14C\uC774\uBE14\uC774 \uCD94\uAC00\uB418\uBA70, \uAC00\uC838\uC624\uC9C0 \uBABB\uD588\uAC70\uB098 \uBD80\uBD84\uC801\uC73C\uB85C\uB9CC \uAC00\uC838\uC628 \uD56D\uBAA9\uB4E4\uC758 \uBAA9\uB85D\uC774 \uD3EC\uD568\uB429\uB2C8\uB2E4.' } },
    "airtableShareLinkPaste": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC5EC\uAE30\uC5D0 \uB9C1\uD06C\uB97C \uBD99\uC5EC\uB123\uC73C\uC138\uC694" } },
    "importButtonLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Airtable\uC5D0\uC11C \uAC00\uC838\uC624\uAE30" } },
    "openButtonLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAC00\uC838\uC628 \uB370\uC774\uD130\uBCA0\uC774\uC2A4 \uC5F4\uAE30" } },
    "importError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBB38\uC81C\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4" } },
    "statePending": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC2DC\uC791 \uB300\uAE30 \uC911" } },
    "stateFailed": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC2E4\uD328" } },
    "stateFinished": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC644\uB8CC" } },
    "stateDownloadingBase": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBCA0\uC774\uC2A4 \uC2A4\uD0A4\uB9C8 \uB2E4\uC6B4\uB85C\uB4DC \uC911" } },
    "stateConverting": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Baserow\uB85C \uBCC0\uD658 \uC911" } },
    "stateDownloadingFiles": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD30C\uC77C \uB2E4\uC6B4\uB85C\uB4DC \uC911" } },
    "stateImporting": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAC00\uC838\uC624\uB294 \uC911" } },
    "stateImportingTable": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "\uD14C\uC774\uBE14 " }, { "t": 4, "k": "table" }, { "t": 3, "v": " \uAC00\uC838\uC624\uB294 \uC911" }] } },
    "errorJobAlreadyRunningTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774\uBBF8 \uC2E4\uD589 \uC911" } },
    "errorJobAlreadyRunningDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB2E4\uB978 \uAC00\uC838\uC624\uAE30 \uC791\uC5C5\uC774 \uC774\uBBF8 \uC2E4\uD589 \uC911\uC785\uB2C8\uB2E4. \uB2E4\uB978 \uC791\uC5C5\uC744 \uC2DC\uC791\uD558\uB824\uBA74 \uD574\uB2F9 \uC791\uC5C5\uC774 \uC644\uB8CC\uB420 \uB54C\uAE4C\uC9C0 \uAE30\uB2E4\uB824\uC57C \uD569\uB2C8\uB2E4." } },
    "linkError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB9C1\uD06C\uB294 \uB2E4\uC74C\uACFC \uAC19\uC544\uC57C \uD569\uB2C8\uB2E4: https://airtable.com/shrxxxxxxxxxxxxxx" } },
    "skipFilesHelper": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD30C\uC77C\uC774 \uB9CE\uC740 Airtable \uBCA0\uC774\uC2A4\uB294 \uAC00\uC838\uC624\uAE30\uB97C \uB290\uB9AC\uAC8C \uB9CC\uB4E4 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774 \uC635\uC158\uC744 \uD65C\uC131\uD654\uD558\uBA74 \uD30C\uC77C \uAC00\uC838\uC624\uAE30\uB97C \uAC74\uB108\uB701\uB2C8\uB2E4." } },
    "skipFiles": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD30C\uC77C \uAC00\uC838\uC624\uAE30 \uAC74\uB108\uB6F0\uAE30" } },
    "useSession": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC138\uC158 \uC778\uC99D" } },
    "useSessionHelper": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uACF5\uAC1C\uB85C \uACF5\uC720\uB41C \uBCA0\uC774\uC2A4\uC5D0 \uC778\uC99D\uC774 \uD544\uC694\uD55C \uACBD\uC6B0 \uC774 \uC635\uC158\uC744 \uC0AC\uC6A9\uD558\uC138\uC694." } },
    "sessionLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC138\uC158 \uCFE0\uD0A4 (__Host-airtable-session)" } },
    "sessionSignatureLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC138\uC158 \uC11C\uBA85 \uCFE0\uD0A4(__Host-airtable-session.sig)" } },
    "sessionDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": '\uAC00\uC838\uC624\uAE30 \uC2DC "The Airtable base requires authentication."\uC774\uB77C\uB294 \uC751\uB2F5\uC774 \uD45C\uC2DC\uB41C\uB2E4\uBA74, Airtable\uC758 \uC870\uC9C1 \uC124\uC815\uC73C\uB85C \uC778\uD574 \uC778\uC99D \uC5C6\uC774 \uD574\uB2F9 \uBCA0\uC774\uC2A4\uC5D0 \uC811\uADFC\uD560 \uC218 \uC5C6\uB3C4\uB85D \uC124\uC815\uB418\uC5B4 \uC788\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774 \uACBD\uC6B0 \uC138\uC158\uACFC \uC11C\uBA85 \uAC12\uC744 \uC218\uB3D9\uC73C\uB85C \uCD94\uCD9C\uD574\uC57C \uD569\uB2C8\uB2E4. \uBE0C\uB77C\uC6B0\uC800\uC5D0\uC11C \uACF5\uAC1C\uB85C \uACF5\uC720\uB41C \uBCA0\uC774\uC2A4\uC758 URL\uC5D0 \uC811\uC18D\uD558\uACE0, \uD544\uC694\uD55C \uACBD\uC6B0 \uB85C\uADF8\uC778\uD569\uB2C8\uB2E4. \uADF8\uB7F0 \uB2E4\uC74C \uC624\uB978\uCABD \uC0C1\uB2E8\uC758 \uBA54\uB274\uB97C \uD074\uB9AD\uD558\uC5EC "More tools(\uCD94\uAC00 \uB3C4\uAD6C)" -> "Developer tools(\uAC1C\uBC1C\uC790 \uB3C4\uAD6C)"\uB97C \uC120\uD0DD\uD569\uB2C8\uB2E4. "Application" \uD0ED(Firefox\uC758 \uACBD\uC6B0 "Storage" \uD0ED)\uC744 \uC5F4\uACE0, \uC67C\uCABD\uC5D0\uC11C "https://airtable.com"\uC744 \uD074\uB9AD\uD569\uB2C8\uB2E4. \uC774\uC81C "__Host-airtable-session"\uACFC "__Host-airtable-session.sig" \uCFE0\uD0A4 \uAC12\uC744 \uCC3E\uC544 \uC544\uB798 \uC785\uB825\uB780\uC5D0 \uBCF5\uC0AC\uD558\uC5EC \uBD99\uC5EC\uB123\uC2B5\uB2C8\uB2E4.' } }
  },
  "chooseSingleSelectField": {
    "addSelectField": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB2E8\uC77C \uC120\uD0DD \uD544\uB4DC \uCD94\uAC00" } },
    "warningWhenNothingToChooseOrCreate": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC120\uD0DD\uD558\uAC70\uB098 \uC0DD\uC131\uD560 \uB2E8\uC77C \uC120\uD0DD \uD544\uB4DC\uAC00 \uC5C6\uC73C\uBA70 \uB9CC\uB4E4 \uC218 \uC788\uB294 \uAD8C\uD55C\uC774 \uC5C6\uC2B5\uB2C8\uB2E4." } }
  },
  "viewDecoratorContext": {
    "addDecorator": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB370\uCF54\uB808\uC774\uD130 \uCD94\uAC00" } }
  },
  "databaseDashboardResourceLinks": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "API \uBB38\uC11C" } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC6B0\uB9AC\uC758 \uCF54\uB4DC\uC5D0 \uB300\uD574 \uC790\uC138\uD788 \uC54C\uC544\uBCF4\uAE30" } }
  },
  "formViewField": {
    "required": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD544\uC218" } },
    "descriptionPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC124\uBA85" } },
    "showWhenMatchingConditions": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC870\uAC74\uC774 \uCDA9\uC871\uB420 \uB54C \uD45C\uC2DC" } },
    "addCondition": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC870\uAC74 \uCD94\uAC00" } },
    "addConditionGroup": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC870\uAC74 \uADF8\uB8F9 \uCD94\uAC00" } },
    "showFieldAs": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD544\uB4DC \uD45C\uC2DC \uBC29\uC2DD" } },
    "includeAllSelectOptions": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBAA8\uB4E0 \uC120\uD0DD \uC635\uC158 \uD3EC\uD568" } },
    "includeAllSelectOptionsHelper": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774 \uB4DC\uB86D\uB2E4\uC6B4\uC744 \uC0AC\uC6A9\uD558\uC5EC \uC591\uC2DD\uC5D0 \uD3EC\uD568\uD574\uC57C \uD560 \uC120\uD0DD \uC635\uC158\uC744 \uC120\uD0DD\uD558\uC138\uC694" } },
    "noSelectOptions": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC120\uD0DD\uD560 \uC635\uC158\uC774 \uC5C6\uC2B5\uB2C8\uB2E4." } },
    "noCollaboratorsAvailable": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC0AC\uC6A9 \uAC00\uB2A5\uD55C \uACF5\uB3D9 \uC791\uC5C5\uC790\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4." } },
    "cannotSumitValues": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774 \uD544\uB4DC\uB294 \uC77D\uAE30 \uC804\uC6A9\uC774\uBA70 \uC591\uC2DD\uC5D0 \uD45C\uC2DC\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4." } }
  },
  "duplicateFieldContext": {
    "duplicate": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD544\uB4DC \uBCF5\uC81C" } },
    "cloneData": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB370\uC774\uD130 \uBCF5\uC0AC" } },
    "readOnlyField": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC140 \uAC12\uC740 \uC790\uB3D9\uC73C\uB85C \uCC44\uC6CC\uC9D1\uB2C8\uB2E4." } }
  },
  "changePrimaryFieldModal": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAE30\uBCF8 \uD544\uB4DC \uBCC0\uACBD" } },
    "change": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBCC0\uACBD" } },
    "primaryFieldLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAE30\uBCF8 \uD544\uB4DC" } },
    "existingPrimary": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": '"' }, { "t": 4, "k": "name" }, { "t": 3, "v": '"\uC740(\uB294) \uD604\uC7AC \uAE30\uBCF8 \uD544\uB4DC\uC785\uB2C8\uB2E4.' }] } }
  },
  "snapshotsModal": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC2A4\uB0C5\uC0F7" } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "\uC2A4\uB0C5\uC0F7\uC740 \uC0DD\uC131 \uB2F9\uC2DC\uC758 " }, { "t": 4, "k": "applicationTypeName" }, { "t": 3, "v": "\uC758 \uC804\uCCB4 \uBCF5\uC0AC\uBCF8\uC785\uB2C8\uB2E4. \uBCF5\uC6D0\uD560 \uB54C \uB370\uC774\uD130\uC758 \uBCF5\uC81C\uAC00 \uC0DD\uC131\uB429\uB2C8\uB2E4. \uC2A4\uB0C5\uC0F7\uC740 1\uB144 \uD6C4 \uC790\uB3D9\uC73C\uB85C \uC0AD\uC81C\uB429\uB2C8\uB2E4." }] } },
    "descriptionLimits": { "t": 0, "b": { "t": 1, "c": [{ "t": 2, "i": [{ "t": 3, "v": "\uC791\uC5C5\uACF5\uAC04\uB2F9 \uCD5C\uB300 " }, { "t": 4, "k": "n" }, { "t": 3, "v": "\uAC1C\uC758 \uC2A4\uB0C5\uC0F7\uC744 \uAC00\uC9C8 \uC218 \uC788\uC2B5\uB2C8\uB2E4." }] }, { "t": 2, "i": [{ "t": 3, "v": "\uC791\uC5C5\uACF5\uAC04\uB2F9 \uCD5C\uB300 " }, { "t": 4, "k": "n" }, { "t": 3, "v": "\uAC1C\uC758 \uC2A4\uB0C5\uC0F7\uC744 \uAC00\uC9C8 \uC218 \uC788\uC2B5\uB2C8\uB2E4." }] }, { "t": 2, "i": [{ "t": 3, "v": "\uC791\uC5C5\uACF5\uAC04\uB2F9 \uCD5C\uB300 " }, { "t": 4, "k": "n" }, { "t": 3, "v": "\uAC1C\uC758 \uC2A4\uB0C5\uC0F7\uC744 \uAC00\uC9C8 \uC218 \uC788\uC2B5\uB2C8\uB2E4." }] }] } },
    "createLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC0C8 \uC2A4\uB0C5\uC0F7 \uC0DD\uC131" } },
    "create": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC2A4\uB0C5\uC0F7 \uC0DD\uC131" } },
    "cancel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uCDE8\uC18C" } },
    "snapshotRestoredErrorTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC624\uB958 \uBC1C\uC0DD" } },
    "snapshotRestoredErrorMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC2A4\uB0C5\uC0F7\uC744 \uBCF5\uC6D0\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4. \uB098\uC911\uC5D0 \uB2E4\uC2DC \uC2DC\uB3C4\uD558\uC138\uC694." } },
    "snapshotDeletedErrorTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC624\uB958 \uBC1C\uC0DD" } },
    "snapshotDeletedErrorMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC2A4\uB0C5\uC0F7\uC744 \uC0AD\uC81C\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4. \uB098\uC911\uC5D0 \uB2E4\uC2DC \uC2DC\uB3C4\uD558\uC138\uC694." } },
    "limitReached": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uCD5C\uB300 \uC2A4\uB0C5\uC0F7 \uC218\uC5D0 \uB3C4\uB2EC\uD588\uC2B5\uB2C8\uB2E4." } },
    "snapshot": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC2A4\uB0C5\uC0F7" } },
    "importingState": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC0DD\uC131 \uC911" } },
    "reset": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB2E4\uB978 \uC2A4\uB0C5\uC0F7 \uC0DD\uC131" } },
    "noSnapshots": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0 \uB300\uD55C \uC2A4\uB0C5\uC0F7\uC774 \uC544\uC9C1 \uC5C6\uC2B5\uB2C8\uB2E4." } },
    "nameAlreadyExists": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774\uB984\uC774 \uB3D9\uC77C\uD55C \uC2A4\uB0C5\uC0F7\uC774 \uC774\uBBF8 \uC874\uC7AC\uD569\uB2C8\uB2E4." } }
  },
  "deleteSnapshotModal": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC2A4\uB0C5\uC0F7 \uC0AD\uC81C" } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "\uC2A4\uB0C5\uC0F7 " }, { "t": 4, "k": "name" }, { "t": 3, "v": "\uC744(\uB97C) \uC601\uAD6C\uC801\uC73C\uB85C \uC0AD\uC81C\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?" }] } },
    "confirm": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC0AD\uC81C" } }
  },
  "snapshotListItem": {
    "restore": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBCF5\uC6D0" } },
    "delete": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC0AD\uC81C" } },
    "created": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC0DD\uC131\uB428" } }
  },
  "formViewModeType": {
    "form": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC591\uC2DD" } },
    "formDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBAA8\uB4E0 \uD544\uB4DC\uAC00 \uBCF4\uC774\uACE0 \uC138\uB85C\uB85C \uC815\uB82C\uB429\uB2C8\uB2E4." } }
  },
  "formViewHeader": {
    "mode": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBAA8\uB4DC" } },
    "preview": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBBF8\uB9AC\uBCF4\uAE30" } },
    "fields": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD544\uB4DC" } }
  },
  "formViewModePreviewForm": {
    "addCoverImage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uCEE4\uBC84 \uC774\uBBF8\uC9C0 \uCD94\uAC00" } },
    "addLogo": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB85C\uACE0 \uCD94\uAC00" } },
    "titlePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC81C\uBAA9" } },
    "descriptionPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC124\uBA85" } },
    "noFields": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774 \uC591\uC2DD\uC5D0\uB294 \uD544\uB4DC\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4. \uC67C\uCABD \uC0AC\uC774\uB4DC\uBC14\uC5D0\uC11C \uD544\uB4DC\uB97C \uD074\uB9AD\uD558\uC5EC \uCD94\uAC00\uD558\uC138\uC694." } },
    "noFieldsContent": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD544\uB4DC\uB97C \uCD94\uAC00\uD558\uB824\uBA74 \uC67C\uCABD \uC0AC\uC774\uB4DC\uBC14\uC5D0\uC11C \uD56D\uBAA9\uC744 \uD074\uB9AD\uD558\uC138\uC694." } },
    "noFieldsTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774 \uC591\uC2DD\uC5D0\uB294 \uD544\uB4DC\uAC00 \uD558\uB098\uB3C4 \uC5C6\uC2B5\uB2C8\uB2E4" } }
  },
  "table": {
    "adjacentRow": {
      "toast": {
        "notFound": {
          "next": {
            "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB354 \uC774\uC0C1 \uD589 \uC5C6\uC74C" } },
            "message": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB2E4\uC74C \uD589\uC774 \uC5C6\uC2B5\uB2C8\uB2E4" } }
          },
          "previous": {
            "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB354 \uC774\uC0C1 \uD589 \uC5C6\uC74C" } },
            "message": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774\uC804 \uD589\uC774 \uC5C6\uC2B5\uB2C8\uB2E4" } }
          }
        },
        "error": {
          "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC624\uB958 \uBC1C\uC0DD" } },
          "message": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC778\uC811\uD55C \uD589\uC744 \uAC00\uC838\uC624\uB294 \uB3D9\uC548 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4" } }
        }
      }
    },
    "chooseView": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBDF0 \uC120\uD0DD" } }
  },
  "fileField": {
    "errorEmptyFileNameTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC720\uD6A8\uD558\uC9C0 \uC54A\uC740 \uD30C\uC77C \uC774\uB984" } },
    "errorEmptyFileNameMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD30C\uC77C \uC774\uB984\uC744 \uBE44\uC6B8 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4." } }
  },
  "fieldCollaboratorSubForm": {
    "notifyUserWhenAdded": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uCD94\uAC00\uB418\uBA74 \uC0AC\uC6A9\uC790\uC5D0\uAC8C \uC54C\uB9BC" } }
  },
  "collaboratorAddedToRowNotification": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "sender" }, { "t": 3, "v": "\uB2D8\uC774 " }, { "t": 4, "k": "tableName" }, { "t": 3, "v": "\uC758 \uD589 " }, { "t": 4, "k": "rowId" }, { "t": 3, "v": "\uC5D0\uC11C " }, { "t": 4, "k": "fieldName" }, { "t": 3, "v": "\uC5D0 \uB2F9\uC2E0\uC744 \uD560\uB2F9\uD588\uC2B5\uB2C8\uB2E4" }] } },
    "deletedUser": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC0AD\uC81C\uB41C \uC0AC\uC6A9\uC790" } },
    "unknownUser": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC54C \uC218 \uC5C6\uB294 \uC0AC\uC6A9\uC790" } }
  },
  "formSubmittedNotification": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "tableName" }, { "t": 3, "v": "\uC758 " }, { "t": 4, "k": "formName" }, { "t": 3, "v": "\uC774(\uAC00) \uC81C\uCD9C\uB418\uC5C8\uC2B5\uB2C8\uB2E4:" }] } },
    "moreValues": { "t": 0, "b": { "t": 1, "c": [{ "t": 2, "i": [{ "t": 3 }], "s": "0" }, { "t": 2, "i": [{ "t": 3 }], "s": "\uB2E4\uB978 1\uAC1C\uC758 \uD544\uB4DC" }, { "t": 2, "i": [{ "t": 3, "v": "\uB2E4\uB978 " }, { "t": 4, "k": "count" }, { "t": 3, "v": "\uAC1C\uC758 \uD544\uB4DC." }] }] } }
  },
  "rowHistorySidebar": {
    "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD788\uC2A4\uD1A0\uB9AC" } },
    "empty": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC544\uC9C1 \uBCC0\uACBD \uC0AC\uD56D\uC774 \uC5C6\uC2B5\uB2C8\uB2E4. \uC774 \uD589\uC5D0 \uB300\uD55C \uBAA8\uB4E0 \uBCC0\uACBD \uC0AC\uD56D\uC744 \uC5EC\uAE30\uC5D0\uC11C \uCD94\uC801\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4." } },
    "you": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB2F9\uC2E0" } },
    "created": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774 \uD589\uC744 \uC0DD\uC131\uD588\uC2B5\uB2C8\uB2E4" } },
    "updated": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774 \uD589\uC744 \uC5C5\uB370\uC774\uD2B8\uD588\uC2B5\uB2C8\uB2E4" } },
    "submitted": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774 \uD589\uC744 \uC81C\uCD9C\uD588\uC2B5\uB2C8\uB2E4" } },
    "deleted": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774 \uD589\uC744 \uC0AD\uC81C\uD588\uC2B5\uB2C8\uB2E4" } },
    "createdUndo": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD589 \uC0DD\uC131 \uCDE8\uC18C" } },
    "updatedUndo": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD589 \uC5C5\uB370\uC774\uD2B8 \uCDE8\uC18C" } },
    "deletedUndo": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD589 \uC0AD\uC81C \uCDE8\uC18C" } },
    "restored": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774 \uD589\uC744 \uBCF5\uC6D0\uD588\uC2B5\uB2C8\uB2E4" } }
  },
  "fieldPasswordSubForm": {
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBE44\uBC00\uBC88\uD638 \uD544\uB4DC\uB294 \uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uBE4C\uB354\uC5D0\uC11C \uC0AC\uC6A9\uC790 \uC778\uC99D\uC5D0 \uC0AC\uC6A9\uB420 \uC218\uB3C4 \uC788\uC2B5\uB2C8\uB2E4." } },
    "allowEndpointAuthentication": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "API \uC5D4\uB4DC\uD3EC\uC778\uD2B8 \uC778\uC99D \uD5C8\uC6A9" } },
    "allowEndpointAuthenticationHelp": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774\uB807\uAC8C \uD558\uBA74 \uD589 ID\uC640 \uBE44\uBC00\uBC88\uD638\uAC00 \uC62C\uBC14\uB978\uC9C0 \uD655\uC778\uD560 \uC218 \uC788\uB294 \uC5D4\uB4DC\uD3EC\uC778\uD2B8\uAC00 \uB178\uCD9C\uB429\uB2C8\uB2E4. \uC774\uB97C \uD1B5\uD574 Baserow\uB97C \uC778\uC99D \uBC31\uC5D4\uB4DC\uB85C \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4." } }
  },
  "rowEditFieldPassword": {
    "setPassword": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBE44\uBC00\uBC88\uD638 \uC124\uC815" } }
  },
  "rowHistoryFieldPassword": {
    "passwordSet": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBE44\uBC00\uBC88\uD638\uAC00 \uC124\uC815\uB418\uC5C8\uC2B5\uB2C8\uB2E4" } },
    "passwordUpdated": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBE44\uBC00\uBC88\uD638\uAC00 \uC5C5\uB370\uC774\uD2B8\uB418\uC5C8\uC2B5\uB2C8\uB2E4" } },
    "passwordDeleted": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBE44\uBC00\uBC88\uD638\uAC00 \uC0AD\uC81C\uB418\uC5C8\uC2B5\uB2C8\uB2E4" } }
  },
  "dataProviderTypes": {
    "fieldsName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD544\uB4DC" } }
  },
  "userMentionInRichTextFieldNotification": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "sender" }, { "t": 3, "v": "\uB2D8\uC774 " }, { "t": 4, "k": "tableName" }, { "t": 3, "v": "\uC758 \uD589 " }, { "t": 4, "k": "rowId" }, { "t": 3, "v": "\uC5D0\uC11C \uD544\uB4DC " }, { "t": 4, "k": "fieldName" }, { "t": 3, "v": "\uC5D0\uC11C \uB2F9\uC2E0\uC744 \uC5B8\uAE09\uD588\uC2B5\uB2C8\uB2E4" }] } },
    "deletedUser": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC0AD\uC81C\uB41C \uC0AC\uC6A9\uC790" } }
  },
  "databaseImportStep": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB370\uC774\uD130 \uAC00\uC838\uC624\uAE30" } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBA87 \uBC88\uC758 \uD074\uB9AD\uB9CC\uC73C\uB85C \uB370\uC774\uD130\uB97C Baserow\uB85C \uC774\uB3D9\uD558\uC138\uC694." } },
    "tableNameLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD14C\uC774\uBE14 \uC774\uB984" } },
    "tableNamePrefill": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "name" }, { "t": 3, "v": "\uC758 \uD14C\uC774\uBE14" }] } }
  },
  "databaseScratchTrackFieldsStep": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAC01 \uD589\uC5D0 \uB300\uD55C \uD544\uB4DC \uC120\uD0DD" } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "selectedFieldsLimitCount" }, { "t": 3, "v": "\uAC1C\uC758 \uD544\uB4DC\uB97C \uC120\uD0DD\uD558\uC138\uC694. \uB098\uC911\uC5D0 \uB354 \uCD94\uAC00\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4." }] } },
    "fieldName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774\uB984" } },
    "fieldType": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD544\uB4DC \uC720\uD615" } },
    "fieldDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC124\uBA85" } },
    "fieldDetails": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC138\uBD80 \uC0AC\uD56D" } },
    "fieldNumber": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC22B\uC790" } },
    "fieldDate": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB0A0\uC9DC" } },
    "fieldBoolean": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC644\uB8CC\uB428" } },
    "fieldDuration": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAE30\uAC04" } },
    "fieldUrl": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "URL" } },
    "fieldEmail": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774\uBA54\uC77C" } },
    "fieldRating": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD3C9\uAC00" } },
    "fieldCategory": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uCE74\uD14C\uACE0\uB9AC" } },
    "fieldKickoffDate": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC2DC\uC791 \uB0A0\uC9DC" } },
    "fieldDueDate": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB9C8\uAC10 \uB0A0\uC9DC" } },
    "fieldBudget": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC608\uC0B0" } },
    "fieldCompleted": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC644\uB8CC\uB428" } },
    "fieldNotes": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB178\uD2B8" } },
    "fieldRole": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC5ED\uD560" } },
    "fieldPhone": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC804\uD654" } },
    "fieldActive": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD65C\uC131" } },
    "fieldEstimatedDays": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC608\uC0C1 \uC77C\uC218" } },
    "fieldStartDate": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC2DC\uC791 \uB0A0\uC9DC" } },
    "fieldEndDate": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC885\uB8CC \uB0A0\uC9DC" } },
    "projectsCategoryDesign": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB514\uC790\uC778" } },
    "projectsCategoryDevelopment": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAC1C\uBC1C" } },
    "projectsCategoryMarketing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB9C8\uCF00\uD305" } },
    "projectsNotesRow1": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Acme\uB294 \uB2E4\uC74C \uC9C0\uCE68\uC73C\uB85C \uC6F9\uC0AC\uC774\uD2B8\uC758 \uC644\uC804\uD55C \uB9AC\uBE0C\uB79C\uB529\uC744 \uCC3E\uACE0 \uC788\uC2B5\uB2C8\uB2E4." } },
    "projectsNotesRow2": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD604\uC7AC Soylent \uC0AC\uC6A9\uC790\uAC00 \uC0C8\uB85C\uC6B4 \uC0AC\uC6A9\uC790 \uD3EC\uD138\uC5D0 \uAD00\uC2EC\uC774 \uC788\uB294\uC9C0 \uC870\uC0AC\uD569\uB2C8\uB2E4." } },
    "projectsNotesRow3": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Facebook \uAD11\uACE0 \uBCF4\uC774\uCF67 \uC774\uD6C4 \uC774\uAC83\uC744 \uD558\uB294 \uAC83\uC774 \uAC00\uCE58\uAC00 \uC788\uB294\uC9C0 \uAD81\uAE08\uD569\uB2C8\uB2E4. \uC5F0\uAD6C\uC5D0 \uB530\uB974\uBA74 \uC720\uB8CC \uAD11\uACE0 \uCEA0\uD398\uC778\uC774 \uC810\uC810 \uB35C \uD6A8\uACFC\uC801\uC774 \uB418\uACE0 \uC788\uC2B5\uB2C8\uB2E4." } },
    "teamsRoleDesigner": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB514\uC790\uC774\uB108" } },
    "teamsRoleDeveloper": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAC1C\uBC1C\uC790" } },
    "teamsRoleMarketer": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB9C8\uCF00\uD130" } },
    "tasksDetailsRow1": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB85C\uACE0\uB97C \uAC1C\uC120\uD558\uC5EC CTA\uB97C \uB354 \uBA85\uD655\uD558\uAC8C \uB9CC\uB4E4\uC5B4\uC57C \uD569\uB2C8\uB2E4." } },
    "tasksDetailsRow2": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAD6C\uC870\uAC00 \uC870\uAE08 \uC5B4\uAE0B\uB098 \uC788\uC73C\uBBC0\uB85C \uC5EC\uAE30\uC5D0\uC11C\uB3C4 \uC0AC\uC774\uD2B8\uB9F5\uC744 \uC870\uC815\uD574\uC57C \uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4." } },
    "tasksDetailsRow3": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC0C8\uB85C\uC6B4 \uD478\uD130\uC5D0\uB294 \uC5F0\uB77D\uCC98 \uC815\uBCF4\uC640 \uC791\uC740(\uD558\uC9C0\uB9CC \uBA85\uD655\uD55C) CTA\uB3C4 \uD3EC\uD568\uB418\uC5B4\uC57C \uD569\uB2C8\uB2E4." } },
    "campaignsDetailsRow1": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBAA8\uB4E0 \uC88B\uC544\uD558\uB294 \uC81C\uD488\uC5D0 \uB300\uD55C \uACBD\uC7C1\uB825 \uC788\uB294 \uD560\uC778 \uD61C\uD0DD\uC73C\uB85C \uB728\uAC70\uC6B4 \uC5EC\uB984 \uC138\uC77C\uB85C \uC808\uC57D\uC744 \uB192\uC774\uC138\uC694!" } },
    "campaignsDetailsRow2": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAC00\uC7A5 \uD5CC\uC2E0\uC801\uC778 \uACE0\uAC1D\uC744 \uC704\uD574 \uC124\uACC4\uB41C \uB9E4\uB825\uC801\uC778 \uB85C\uC5F4\uD2F0 \uBCF4\uC0C1 \uD504\uB85C\uADF8\uB7A8\uC73C\uB85C \uACE0\uAC1D \uC720\uC9C0 \uBC0F \uCC38\uC5EC\uB97C \uD5A5\uC0C1\uD558\uC138\uC694." } },
    "campaignsDetailsRow3": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC624\uB298\uC758 \uC2DC\uC7A5 \uB3D9\uD5A5\uACFC \uACE0\uAC1D \uC695\uAD6C\uC5D0 \uC644\uBCBD\uD558\uAC8C \uBD80\uD569\uD558\uB294 \uC5ED\uB3D9\uC801\uC778 \uBE0C\uB79C\uB4DC \uC7AC\uCD9C\uC2DC\uB85C \uBE44\uC988\uB2C8\uC2A4\uB97C \uD65C\uC131\uD654\uD558\uACE0 \uAD00\uAC1D\uC744 \uB9E4\uB8CC\uC2DC\uD0A4\uC138\uC694." } },
    "customFieldsDescriptionRow1": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uCCAB \uBC88\uC9F8 \uC608\uC2DC \uC124\uBA85 \uD14D\uC2A4\uD2B8\uC785\uB2C8\uB2E4." } },
    "customFieldsDescriptionRow2": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB450 \uBC88\uC9F8 \uC608\uC2DC \uC124\uBA85 \uD14D\uC2A4\uD2B8\uC785\uB2C8\uB2E4." } },
    "customFieldsDescriptionRow3": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC138 \uBC88\uC9F8 \uC608\uC2DC \uC124\uBA85 \uD14D\uC2A4\uD2B8\uC785\uB2C8\uB2E4." } }
  },
  "databaseScratchTrackStep": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBB34\uC5C7\uC744 \uCD94\uC801\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?" } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC778\uAE30 \uC788\uB294 \uC0AC\uC6A9 \uC0AC\uB840 \uC911\uC5D0\uC11C \uC120\uD0DD\uD558\uAC70\uB098 \uC9C1\uC811 \uC0DD\uC131\uD558\uC138\uC694." } },
    "addYourOwn": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC9C1\uC811 \uCD94\uAC00" } },
    "tableName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD14C\uC774\uBE14 \uC774\uB984" } },
    "rowName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD589 \uC774\uB984" } },
    "thisIncludes": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB2E4\uC74C\uC774 \uD3EC\uD568\uB429\uB2C8\uB2E4:" } },
    "projects": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD504\uB85C\uC81D\uD2B8" } },
    "productsRow1": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC6F9\uC0AC\uC774\uD2B8 \uB9AC\uBE0C\uB79C\uB529" } },
    "productsRow2": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uACE0\uAC1D \uC870\uC0AC" } },
    "productsRow3": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC720\uB8CC \uAD11\uACE0 \uCEA0\uD398\uC778" } },
    "teams": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD300" } },
    "teamsRow1": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC601\uC5C5" } },
    "teamsRow2": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC778\uC0AC" } },
    "teamsRow3": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB9C8\uCF00\uD305" } },
    "tasks": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC791\uC5C5" } },
    "tasksRow1": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB85C\uACE0 \uC7AC\uB514\uC790\uC778" } },
    "tasksRow2": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774\uBA54\uC77C \uBCF4\uB0B4\uAE30" } },
    "tasksRow3": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBE14\uB85C\uADF8 \uAC8C\uC2DC\uBB3C \uC791\uC131" } },
    "campaigns": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uCEA0\uD398\uC778" } },
    "campaignsRow1": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC5EC\uB984 \uC138\uC77C" } },
    "campaignsRow2": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB85C\uC5F4\uD2F0 \uBCF4\uC0C1" } },
    "campaignsRow3": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBE0C\uB79C\uB4DC \uC7AC\uCD9C\uC2DC" } }
  },
  "databaseStep": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uCCAB \uBC88\uC9F8 \uB370\uC774\uD130\uBCA0\uC774\uC2A4 \uC0DD\uC131" } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC2DC\uC791\uD560 \uC704\uCE58\uB97C \uC120\uD0DD\uD558\uC138\uC694:" } },
    "databaseNameLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB370\uC774\uD130\uBCA0\uC774\uC2A4 \uC774\uB984" } },
    "scratch": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uCC98\uC74C\uBD80\uD130" } },
    "import": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD30C\uC77C" } },
    "airtable": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC5D0\uC5B4\uD14C\uC774\uBE14" } },
    "template": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD15C\uD50C\uB9BF" } },
    "databaseNamePrefill": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "name" }, { "t": 3, "v": "\uC758 \uB370\uC774\uD130\uBCA0\uC774\uC2A4" }] } },
    "workspaceName": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "name" }, { "t": 3, "v": "\uC758 \uC791\uC5C5\uACF5\uAC04" }] } }
  },
  "ViewFilterTypeDateUpgradeToMultiStep": {
    "migrateButtonText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB2E4\uC911 \uB2E8\uACC4 \uB0A0\uC9DC \uD544\uD130\uB85C \uB9C8\uC774\uADF8\uB808\uC774\uC158" } },
    "migrateButtonTooltip": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC0C8 \uD544\uD130 \uC0AC\uC6A9 \uAC00\uB2A5. \uC5C5\uADF8\uB808\uC774\uB4DC\uD558\uB824\uBA74 \uD074\uB9AD\uD558\uC138\uC694. \uB3D9\uC77C\uD558\uAC8C \uC791\uB3D9\uD569\uB2C8\uB2E4." } }
  },
  "dataSyncType": {
    "syncError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB3D9\uAE30\uD654 \uC624\uB958" } },
    "icalCalendar": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "iCal \uD53C\uB4DC \uB3D9\uAE30\uD654" } },
    "postgresql": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "PostgreSQL \uD14C\uC774\uBE14 \uB3D9\uAE30\uD654" } }
  },
  "iCalCalendarDataSync": {
    "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "iCal URL" } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "iCal \uCE98\uB9B0\uB354 \uB3D9\uAE30\uD654\uB294 URL\uC758 \uCE98\uB9B0\uB354 \uD30C\uC77C\uC758 \uD56D\uBAA9\uACFC \uC790\uB3D9\uC73C\uB85C \uB3D9\uAE30\uD654\uB429\uB2C8\uB2E4. ICS(\uC778\uD130\uB137 \uCE98\uB9B0\uB354 \uBC0F \uC77C\uC815) \uD30C\uC77C \uC720\uD615\uB9CC \uC9C0\uC6D0\uD569\uB2C8\uB2E4." } }
  },
  "postgreSQLDataSync": {
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC544\uB798 \uC81C\uACF5\uB41C \uC138\uBD80 \uC815\uBCF4\uB97C \uC77C\uCE58\uC2DC\uD0A4\uB294 Baserow \uD14C\uC774\uBE14\uACFC PostgreSQL \uD14C\uC774\uBE14\uC744 \uB3D9\uAE30\uD654\uD569\uB2C8\uB2E4. \uB3D9\uAE30\uD654\uAC00 \uC2DC\uC791\uB418\uBA74 \uC81C\uACF5\uB41C \uD14C\uC774\uBE14\uC758 \uBAA8\uB4E0 \uD589\uC744 \uC120\uD0DD\uD569\uB2C8\uB2E4. Baserow\uB294 \uB370\uC774\uD130\uB9CC \uC120\uD0DD\uD558\uC9C0\uB9CC, \uC77D\uAE30 \uC804\uC6A9 \uC5F0\uACB0\uB85C \uC0AC\uC6A9\uC790\uB97C \uC81C\uD55C\uD558\uB294 \uAC83\uC744 \uAC15\uB825\uD788 \uAD8C\uC7A5\uD569\uB2C8\uB2E4." } },
    "host": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD638\uC2A4\uD2B8" } },
    "username": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC0AC\uC6A9\uC790 \uC774\uB984" } },
    "password": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBE44\uBC00\uBC88\uD638" } },
    "database": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB370\uC774\uD130\uBCA0\uC774\uC2A4" } },
    "schema": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC2A4\uD0A4\uB9C8" } },
    "table": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD14C\uC774\uBE14" } },
    "port": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD3EC\uD2B8" } },
    "sslMode": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "SSL \uBAA8\uB4DC" } }
  },
  "createDataSync": {
    "next": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB2E4\uC74C" } },
    "fields": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB3D9\uAE30\uD654\uD558\uB824\uB294 \uD544\uB4DC \uC120\uD0DD" } },
    "create": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD14C\uC774\uBE14 \uC0DD\uC131 \uBC0F \uB3D9\uAE30\uD654" } },
    "error": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB3D9\uAE30\uD654 \uC911 \uBB38\uC81C\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4" } },
    "autoAddLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC0C8\uB85C\uC6B4 \uC18D\uC131\uC744 \uC790\uB3D9\uC73C\uB85C \uCD94\uAC00\uD569\uB2C8\uB2E4" } },
    "autoAddHelper": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB370\uC774\uD130 \uC18C\uC2A4\uC5D0\uC11C \uC0C8\uB85C \uC0AC\uC6A9 \uAC00\uB2A5\uD55C \uC18D\uC131\uC744 Baserow \uD14C\uC774\uBE14\uC5D0 \uC790\uB3D9\uC73C\uB85C \uCD94\uAC00\uD558\uACE0 \uB3D9\uAE30\uD654\uD569\uB2C8\uB2E4. \uC774 \uAE30\uB2A5\uC744 \uC0AC\uC6A9\uD558\uB824\uBA74 \uBAA8\uB4E0 \uC18D\uC131\uC744 \uB3D9\uAE30\uD654\uD574\uC57C \uD569\uB2C8\uB2E4." } },
    "twoWaySyncLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC591\uBC29\uD5A5 \uB3D9\uAE30\uD654" } },
    "deleteUnmatchedRowsLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC6D0\uBCF8\uC5D0\uC11C \uC0AD\uC81C\uB418\uAC70\uB098 \uC228\uACA8\uC9C4 \uD589\uC740 \uC0AD\uC81C\uB429\uB2C8\uB2E4" } },
    "deleteUnmatchedRowsHelper": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774 \uC635\uC158\uC744 \uD65C\uC131\uD654\uD558\uBA74 \uC6D0\uBCF8 \uD14C\uC774\uBE14\uC5D0\uC11C \uC0AD\uC81C\uB418\uAC70\uB098 \uB354 \uC774\uC0C1 \uD45C\uC2DC\uB418\uC9C0 \uC54A\uB294 \uD589\uC740 \uB3D9\uAE30\uD654\uD560 \uB54C\uB9C8\uB2E4 \uC774 \uD14C\uC774\uBE14\uC5D0\uC11C\uB3C4 \uC0AD\uC81C\uB429\uB2C8\uB2E4. \uBE44\uD65C\uC131\uD654\uD558\uBA74 \uD574\uB2F9 \uD589\uC740 \uC720\uC9C0\uB418\uBA70 \uC6D0\uBCF8 \uD589\uC774 \uB2E4\uC2DC \uB098\uD0C0\uB098\uBA74 \uC7AC\uC0AC\uC6A9\uB429\uB2C8\uB2E4." } },
    "syncing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB370\uC774\uD130 \uB3D9\uAE30\uD654 \uC911..." } }
  },
  "syncTableModal": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "name" }, { "t": 3, "v": " \uB3D9\uAE30\uD654" }] } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774 \uD14C\uC774\uBE14\uC740 \uB370\uC774\uD130 \uB3D9\uAE30\uD654\uC640 \uC5F0\uACB0\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4. \uB3D9\uAE30\uD654 \uBC84\uD2BC\uC744 \uD074\uB9AD\uD558\uBA74 \uB370\uC774\uD130\uAC00 \uC18C\uC2A4\uC640 \uB3D9\uAE30\uD654\uB429\uB2C8\uB2E4. \uC774 \uACFC\uC815\uC5D0\uC11C \uC5C5\uB370\uC774\uD2B8\uB41C \uD589\uC5D0 \uC7A0\uAE08\uC774 \uAC78\uB9AC\uBBC0\uB85C API \uC694\uCCAD\uC774\uB098 \uD14C\uC774\uBE14 \uC218\uC815\uC774 \uC77C\uC2DC\uC801\uC73C\uB85C \uB290\uB824\uC9C8 \uC218 \uC788\uC2B5\uB2C8\uB2E4." } },
    "sync": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD14C\uC774\uBE14 \uB3D9\uAE30\uD654" } },
    "hide": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC228\uAE30\uAE30" } }
  },
  "gridViewRowHeight": {
    "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB192\uC774" } },
    "small": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC791\uAC8C" } },
    "medium": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC911\uAC04" } },
    "large": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD06C\uAC8C" } }
  },
  "configureDataSyncModal": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB370\uC774\uD130 \uB3D9\uAE30\uD654" } },
    "syncedFields": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB3D9\uAE30\uD654\uB41C \uD544\uB4DC" } },
    "syncSettings": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB3D9\uAE30\uD654 \uC124\uC815" } }
  },
  "configureDataSyncVisibleFields": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB3D9\uAE30\uD654\uB41C \uD544\uB4DC \uBCC0\uACBD" } },
    "fields": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB3D9\uAE30\uD654\uB41C \uD544\uB4DC" } },
    "syncTable": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC800\uC7A5 \uC2DC \uB3D9\uAE30\uD654" } }
  },
  "configureDataSyncSettings": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB370\uC774\uD130 \uB3D9\uAE30\uD654 \uBCC0\uACBD" } },
    "syncTable": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC800\uC7A5 \uC2DC \uB3D9\uAE30\uD654" } }
  },
  "viewFieldConditionItem": {
    "filterMisconfigured": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774 \uD544\uD130\uAC00 \uC5F0\uACB0\uB41C \uD544\uB4DC\uB294 \uC0AD\uC81C\uB418\uC5C8\uC2B5\uB2C8\uB2E4." } }
  },
  "webhookDeactivatedNotification": {
    "body": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "name" }, { "t": 3, "v": " \uC6F9\uD6C5\uC774 \uC5F0\uC18D\uC801\uC73C\uB85C \uB108\uBB34 \uB9CE\uC740 \uC2E4\uD328\uAC00 \uBC1C\uC0DD\uD558\uC5EC \uBE44\uD65C\uC131\uD654\uB418\uC5C8\uC2B5\uB2C8\uB2E4." }] } }
  },
  "webhookPayloadTooLargeNotification": {
    "body": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "\uC774\uBCA4\uD2B8 ID " }, { "t": 4, "k": "event_id" }, { "t": 3, "v": "\uB97C \uAC00\uC9C4 " }, { "t": 4, "k": "name" }, { "t": 3, "v": " \uC6F9\uD6C5\uC758 \uD398\uC774\uB85C\uB4DC\uAC00 \uB108\uBB34 \uCEE4\uC11C \uC5EC\uB7EC \uAC1C\uC758 \uBC30\uCE58\uB85C \uBD84\uD560\uB418\uC5C8\uC2B5\uB2C8\uB2E4. \uADF8\uB7EC\uB098 \uBC30\uCE58 \uC81C\uD55C " }, { "t": 4, "k": "batch_limit" }, { "t": 3, "v": "\uC744 \uCD08\uACFC\uD558\uB294 \uB370\uC774\uD130\uB294 \uC0AD\uC81C\uB418\uC5C8\uC2B5\uB2C8\uB2E4." }] } }
  },
  "filterSortGroupGuidedTourStep": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB370\uC774\uD130 \uCC3E\uAE30 \uBC0F \uC815\uB9AC" } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD589\uC744 \uD544\uD130\uB9C1\uD558\uACE0 \uC815\uB82C\uD558\uC5EC \uC6D0\uD558\uB294 \uC815\uBCF4\uB97C \uBE60\uB974\uAC8C \uCC3E\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC5B4\uB5A4 \uD544\uB4DC\uB85C\uB4E0 \uC989\uC2DC \uADF8\uB8F9\uD654\uD558\uC5EC \uD328\uD134\uC744 \uBA85\uD655\uD558\uAC8C \uC2DC\uAC01\uD654\uD558\uACE0 \uC6CC\uD06C\uD50C\uB85C\uC6B0\uB97C \uAC04\uC18C\uD654\uD558\uC138\uC694." } }
  },
  "createFormViewGuidedTourStep": {
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD14C\uC774\uBE14\uC5D0\uC11C \uBE60\uB974\uAC8C \uC591\uC2DD\uC744 \uB9CC\uB4E4\uC5B4 \uC751\uB2F5\uC744 \uC9C1\uC811 \uD14C\uC774\uBE14\uB85C \uC218\uC9D1\uD568\uC73C\uB85C\uC368 \uB370\uC774\uD130 \uC218\uC9D1 \uACFC\uC815\uC744 \uAC04\uC18C\uD654\uD558\uC138\uC694." } },
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC591\uC2DD \uB9CC\uB4E4\uAE30" } }
  },
  "addFieldGuidedTourStep": {
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u201C+\u201D\uB97C \uD074\uB9AD\uD558\uC5EC \uC0C8 \uD544\uB4DC(\uC5F4)\uB97C \uCD94\uAC00\uD558\uC138\uC694. \uB2E4\uC591\uD55C \uD544\uB4DC \uC720\uD615 \uC911\uC5D0\uC11C \uC120\uD0DD\uD558\uC5EC \uD504\uB85C\uC81D\uD2B8\uC5D0 \uAC00\uC7A5 \uC911\uC694\uD55C \uC815\uBCF4\uB97C \uC815\uD655\uD558\uAC8C \uB2F4\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4." } },
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB370\uC774\uD130 \uC0AC\uC6A9\uC790 \uC9C0\uC815" } }
  },
  "viewOptionsGuidedTourStep": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBDF0 \uC635\uC158" } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBCF4\uAE30 \uC606\uC758 \uC810 \uC138 \uAC1C \uC544\uC774\uCF58\uC744 \uD074\uB9AD\uD558\uBA74 \uB0B4\uBCF4\uB0B4\uAE30, \uAC00\uC838\uC624\uAE30, \uBCF5\uC81C, \uC6F9\uD6C5 \uC124\uC815 \uB4F1\uC744 \uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4." } }
  },
  "tablesGuidedTourStep": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAE43\uBC1C" } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD14C\uC774\uBE14\uC740 \uC815\uBCF4\uB97C \uAE54\uB054\uD558\uAC8C \uC800\uC7A5\uD558\uB294 \uACF5\uAC04\uC785\uB2C8\uB2E4. \uB370\uC774\uD130\uBCA0\uC774\uC2A4 \uC548\uC5D0 \uC0C8\uB85C\uC6B4 \uD14C\uC774\uBE14\uC744 \uB9CC\uB4E4\uC5B4 \uB370\uC774\uD130\uB97C \uCCB4\uACC4\uC801\uC73C\uB85C \uAD6C\uC131\uD574\uBCF4\uC138\uC694." } }
  },
  "createViewGuidedTourStep": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB098\uB9CC\uC758 \uBCF4\uAE30 \uC124\uC815" } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uADF8\uB9AC\uB4DC, \uCE98\uB9B0\uB354, \uCE78\uBC18, \uAC24\uB7EC\uB9AC \uB4F1 \uB2E4\uC591\uD55C \uC0AC\uC6A9\uC790 \uC9C0\uC815 \uBCF4\uAE30\uB97C \uB9CC\uB4E4\uC5B4 \uC6D0\uD558\uB294 \uBC29\uC2DD\uC73C\uB85C \uB370\uC774\uD130\uB97C \uC2DC\uAC01\uD654\uD558\uC138\uC694." } }
  },
  "fieldBooleanSubForm": {
    "defaultValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAE30\uBCF8\uAC12" } }
  },
  "fieldMultipleSelectSubForm": {
    "optionsLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC635\uC158" } },
    "defaultOptionsLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAE30\uBCF8 \uC635\uC158" } }
  },
  "apiDocsListTables": {
    "listTablesDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774 \uC5D4\uB4DC\uD3EC\uC778\uD2B8\uB294 \uD1A0\uD070 \uC778\uC99D\uACFC \uD568\uAED8\uB9CC \uC791\uB3D9\uD569\uB2C8\uB2E4. \uD1A0\uD070\uC774 \uC0DD\uC131, \uC77D\uAE30, \uC5C5\uB370\uC774\uD2B8 \uB610\uB294 \uC0AD\uC81C \uAD8C\uD55C\uC744 \uAC00\uC9C4 \uBAA8\uB4E0 \uD14C\uC774\uBE14\uC744 \uB098\uC5F4\uD569\uB2C8\uB2E4." } },
    "listTables": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBAA8\uB4E0 \uD14C\uC774\uBE14 \uBAA9\uB85D" } }
  },
  "apiDocsPasswordFieldAuthentication": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "name" }, { "t": 3, "v": " \uC778\uC99D" }] } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC81C\uACF5\uB41C \uBE44\uBC00\uBC88\uD638\uC640 \uD589\uC774 \uC140\uC5D0 \uC800\uC7A5\uB41C \uB0B4\uC6A9\uACFC \uC77C\uCE58\uD558\uB294\uC9C0 \uD655\uC778\uD569\uB2C8\uB2E4." } },
    "fieldId": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBE44\uBC00\uBC88\uD638\uB97C \uD655\uC778\uD560 \uD544\uB4DC ID\uC785\uB2C8\uB2E4." } },
    "rowId": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBE44\uBC00\uBC88\uD638\uB97C \uD655\uC778\uD560 \uD589 ID\uC785\uB2C8\uB2E4." } },
    "password": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBE44\uBC00\uBC88\uD638\uAC00 \uB9DE\uB294\uC9C0 \uD655\uC778\uD574\uC57C \uD569\uB2C8\uB2E4." } }
  },
  "fieldRules": {
    "errorTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD544\uB4DC \uADDC\uCE59 \uCC98\uB9AC \uC911 \uC624\uB958 \uBC1C\uC0DD" } },
    "ruleDoesNotExist": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uADDC\uCE59\uC774 \uC874\uC7AC\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4" } },
    "ruleTypeDoesNotExist": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uADDC\uCE59 \uC720\uD615\uC774 \uC874\uC7AC\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4" } },
    "ruleAlreadyExists": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uADDC\uCE59\uC774 \uC774\uBBF8 \uC874\uC7AC\uD569\uB2C8\uB2E4" } }
  },
  "fieldFormViewEditRowSubForm": {
    "selectFormViewLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD3FC \uBCF4\uAE30" } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAC01 \uD589\uC5D0\uB294 \uD574\uB2F9 \uD589\uC758 \uB370\uC774\uD130\uAC00 \uBBF8\uB9AC \uCC44\uC6CC\uC9C4 \uC591\uC2DD\uC744 \uC5EC\uB294 \uACE0\uC720 \uB9C1\uD06C\uAC00 \uBD80\uC5EC\uB429\uB2C8\uB2E4. \uD14C\uC774\uBE14\uACFC \uD544\uB4DC\uC5D0 \uC77D\uAE30 \uAD8C\uD55C\uC774 \uC788\uB294 \uBAA8\uB4E0 \uC0AC\uC6A9\uC790\uB294 \uC591\uC2DD \uBCF4\uAE30\uB97C \uD1B5\uD574 \uD574\uB2F9 \uD589\uC744 \uD3B8\uC9D1\uD560 \uC218 \uC788\uC73C\uBA70, \uACF5\uAC1C\uC801\uC73C\uB85C \uACF5\uC720\uB41C \uBCF4\uAE30\uC758 \uBCF4\uAE30 \uC0AC\uC6A9\uC790 \uBC0F \uBC29\uBB38\uC790\uB3C4 \uD3B8\uC9D1\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4." } },
    "notPublicWarning": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774 \uC591\uC2DD \uBCF4\uAE30 \uD654\uBA74\uC740 \uACF5\uAC1C\uB418\uC5B4 \uC788\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uC591\uC2DD\uC774 \uACF5\uAC1C\uB420 \uB54C\uAE4C\uC9C0 \uD3B8\uC9D1 \uB9C1\uD06C\uAC00 \uC791\uB3D9\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4." } },
    "notPublic": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "(\uBE44\uACF5\uAC1C)" } },
    "formDoesNotExist": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC120\uD0DD\uD55C \uC591\uC2DD\uC774 \uB354 \uC774\uC0C1 \uC874\uC7AC\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4." } }
  },
  "editRowLink": {
    "editRow": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD589 \uD3B8\uC9D1" } }
  },
  "rowEditFieldFormViewEditRow": {
    "copyLink": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB9C1\uD06C \uBCF5\uC0AC" } },
    "noFormView": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD3FC \uBDF0\uAC00 \uAD6C\uC131\uB418\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4" } }
  },
  "defaultValuesModal": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "name" }, { "t": 3, "v": "\uC758 \uAE30\uBCF8\uAC12" }] } },
    "setDefaultValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAE30\uBCF8\uAC12 \uC124\uC815" } },
    "removeDefaultValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAE30\uBCF8\uAC12\uC744 \uC81C\uAC70\uD569\uB2C8\uB2E4" } },
    "staticValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC815\uC801 \uAC12" } }
  },
  "gridViewFreezeHandle": {
    "freeze": { "t": 0, "b": { "t": 1, "c": [{ "t": 2, "i": [{ "t": 3 }], "s": "0\uAC1C \uC5F4 \uACE0\uC815" }, { "t": 2, "i": [{ "t": 3 }], "s": "1\uAC1C \uC5F4 \uACE0\uC815" }, { "t": 2, "i": [{ "t": 4, "k": "count" }, { "t": 3, "v": "\uAC1C \uC5F4 \uACE0\uC815" }] }] } },
    "hoverHint": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB4DC\uB798\uADF8\uD558\uC5EC \uC5F4\uC744 \uACE0\uC815\uD558\uC138\uC694" } }
  },
  "tableExcelImporter": {
    "chooseFileLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC5D1\uC140 \uD30C\uC77C\uC744 \uC120\uD0DD\uD558\uC138\uC694" } },
    "chooseFileDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": ".xlsx, .xls \uB610\uB294 .ods \uD30C\uC77C\uC744 \uC5C5\uB85C\uB4DC\uD558\uC5EC \uAE30\uC874 \uC2A4\uD504\uB808\uB4DC\uC2DC\uD2B8\uB97C \uAC00\uC838\uC62C \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uD30C\uC77C\uC5D0 \uC5EC\uB7EC \uC2DC\uD2B8\uAC00 \uD3EC\uD568\uB41C \uACBD\uC6B0 \uAC00\uC838\uC62C \uC2DC\uD2B8\uB97C \uC120\uD0DD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4." } },
    "chooseFile": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC5D1\uC140 \uD30C\uC77C\uC744 \uC120\uD0DD\uD558\uC138\uC694" } },
    "sheet": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC2DC\uD2B8" } },
    "firstRowHeader": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uCCAB \uBC88\uC9F8 \uD589\uC774 \uD5E4\uB354\uC785\uB2C8\uB2E4" } },
    "limitFileSize": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "\uCD5C\uB300 \uD30C\uC77C \uD06C\uAE30\uB294 " }, { "t": 4, "k": "limit" }, { "t": 3, "v": "MB\uC785\uB2C8\uB2E4." }] } },
    "limitError": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "limit" }, { "t": 3, "v": "\uAC1C \uC774\uC0C1\uC758 \uD589\uC744 \uAC00\uC838\uC62C \uC218 \uC5C6\uC2B5\uB2C8\uB2E4." }] } },
    "processingError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "\uC5D1\uC140 \uD30C\uC77C\uC744 \uCC98\uB9AC\uD558\uB294 \uB3D9\uC548 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4: " }, { "t": 4, "k": "error" }] } },
    "emptyError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774 \uC5D1\uC140 \uD30C\uC77C\uC5D0\uB294 \uC2DC\uD2B8\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4." } },
    "emptySheetError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC120\uD0DD\uD55C \uC2DC\uD2B8\uAC00 \uBE44\uC5B4 \uC788\uC2B5\uB2C8\uB2E4." } }
  },
  "viewSearch": {
    "clearSearch": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAC80\uC0C9 \uACB0\uACFC \uC9C0\uC6B0\uAE30" } }
  },
  "gridViewGroupByBanner": {
    "emptyValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "(\uBE44\uC5B4 \uC788\uB294)" } },
    "expandGroup": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uADF8\uB8F9 \uD655\uC7A5" } },
    "collapseGroup": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uADF8\uB8F9 \uC811\uAE30" } }
  }
};

export { resource as default };
//# sourceMappingURL=ko-_gm8rzuM.mjs.map
