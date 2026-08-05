!(function() {
  try {
    var e = false ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
    var n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "fdda7d75-972c-4de8-bf99-d05ed35ca714", e._sentryDebugIdIdentifier = "sentry-dbid-fdda7d75-972c-4de8-bf99-d05ed35ca714");
  } catch (e2) {
  }
})();
const resource = {
  "integrationsCommon": {
    "singleRow": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB2E8\uC77C \uD589" } },
    "multipleRows": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB2E4\uC911 \uD589" } }
  },
  "integrationType": {
    "localBaserow": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB85C\uCEEC Baserow" } },
    "smtp": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "SMTP \uC774\uBA54\uC77C" } },
    "slackBot": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC2AC\uB799 \uBD07" } },
    "ai": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "AI" } }
  },
  "localBaserowIntegrationType": {
    "localBaserowSummary": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "\uB85C\uCEEC Baserow - " }, { "t": 4, "k": "name" }, { "t": 3, "v": ", " }, { "t": 4, "k": "username" }] } },
    "localBaserowNoUser": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB85C\uCEEC Baserow - \uAD6C\uC131\uB418\uC9C0 \uC54A\uC74C" } },
    "localBaserowWarning": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uACC4\uC815\uC744 \uC2B9\uC778\uD558\uBA74 \uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uD3B8\uC9D1 \uAD8C\uD55C\uC774 \uC788\uB294 \uBAA8\uB4E0 \uC0AC\uC6A9\uC790\uC5D0\uAC8C \uADC0\uD558\uAC00 \uC811\uADFC\uD558\uB294 \uB370\uC774\uD130\uC5D0 \uB300\uD55C \uC804\uCCB4 \uC811\uADFC \uAD8C\uD55C\uC774 \uBD80\uC5EC\uB429\uB2C8\uB2E4. \uB450 \uBC88\uC9F8 \uC0AC\uC6A9\uC790\uB97C \uC0DD\uC131\uD558\uACE0 \uC801\uC808\uD55C \uAD8C\uD55C\uC744 \uBD80\uC5EC\uD558\uC5EC \uD574\uB2F9 \uC0AC\uC6A9\uC790\uB97C \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4." } }
  },
  "serviceType": {
    "localBaserowGetRow": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB2E8\uC77C \uD589 \uAC00\uC838\uC624\uAE30" } },
    "localBaserowListRows": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB2E4\uC911 \uD589 \uBAA9\uB85D" } },
    "localBaserowAggregateRows": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD544\uB4DC \uC694\uC57D" } },
    "misconfigured": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC798\uBABB \uAD6C\uC131\uB428" } },
    "trashedField": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD734\uC9C0\uD1B5\uC73C\uB85C \uC774\uB3D9\uB41C \uD544\uB4DC" } },
    "localBaserowRowsCreated": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD589\uC774 \uC0DD\uC131\uB428" } },
    "localBaserowRowsCreatedDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Baserow \uD14C\uC774\uBE14\uC5D0 \uD589\uC774 \uC0DD\uC131\uB420 \uB54C \uD2B8\uB9AC\uAC70\uB429\uB2C8\uB2E4." } },
    "localBaserowCreateRow": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD589 \uC0DD\uC131" } },
    "localBaserowDeleteRow": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD589 \uC0AD\uC81C" } },
    "coreHTTPRequest": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "HTTP \uC694\uCCAD \uBCF4\uB0B4\uAE30" } },
    "localBaserowUpdateRow": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD589 \uC5C5\uB370\uC774\uD2B8" } },
    "localBaserowCreateRowDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Baserow \uD14C\uC774\uBE14\uC5D0 \uC0C8 \uD589\uC744 \uB9CC\uB4ED\uB2C8\uB2E4." } },
    "localBaserowDeleteRowDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Baserow \uD14C\uC774\uBE14\uC5D0\uC11C \uD558\uB098 \uC774\uC0C1\uC758 \uD589\uC744 \uC0AD\uC81C\uD569\uB2C8\uB2E4." } },
    "localBaserowRowsUpdated": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD589 \uC5C5\uB370\uC774\uD2B8\uB428" } },
    "localBaserowRowsDeleted": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD589 \uC0AD\uC81C\uB428" } },
    "localBaserowRowsDeletedDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Baserow \uD14C\uC774\uBE14\uC5D0\uC11C \uD589\uC774 \uC0AD\uC81C\uB418\uBA74 \uBC1C\uC0DD\uD569\uB2C8\uB2E4." } },
    "localBaserowUpdateRowDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Baserow \uD14C\uC774\uBE14\uC758 \uAE30\uC874 \uD589\uC744 \uC5C5\uB370\uC774\uD2B8\uD569\uB2C8\uB2E4." } },
    "localBaserowRowsUpdatedDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Baserow \uD14C\uC774\uBE14\uC758 \uD544\uB4DC \uC911 \uD558\uB098\uB77C\uB3C4 \uD589\uC774 \uC5C5\uB370\uC774\uD2B8\uB420 \uB54C \uD2B8\uB9AC\uAC70\uB429\uB2C8\uB2E4." } },
    "localBaserowGetRowDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Baserow \uD14C\uC774\uBE14\uC5D0\uC11C \uB2E8\uC77C \uD589\uC744 \uC77D\uC2B5\uB2C8\uB2E4." } },
    "localBaserowListRowsDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Baserow \uD14C\uC774\uBE14\uC5D0\uC11C \uC5EC\uB7EC \uD589\uC744 \uC77D\uC2B5\uB2C8\uB2E4." } },
    "localBaserowAggregateRowsDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Baserow \uD14C\uC774\uBE14\uC758 \uD544\uB4DC\uB97C \uC694\uC57D\uD569\uB2C8\uB2E4." } },
    "coreHTTPRequestDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC9C0\uC815\uB41C \uC5D4\uB4DC\uD3EC\uC778\uD2B8\uC5D0 HTTP \uC694\uCCAD\uC744 \uBCF4\uB0C5\uB2C8\uB2E4." } },
    "coreSMTPEmail": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774\uBA54\uC77C \uBCF4\uB0B4\uAE30" } },
    "coreSMTPEmailDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "SMTP \uAD6C\uC131\uC744 \uC0AC\uC6A9\uD558\uC5EC \uC774\uBA54\uC77C\uC744 \uBCF4\uB0C5\uB2C8\uB2E4." } },
    "errorFromEmailMissing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774\uBA54\uC77C\uC5D0\uC11C \uB204\uB77D\uB41C \uC18D\uC131" } },
    "errorToEmailsMissing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774\uBA54\uC77C \uC18D\uC131 \uB204\uB77D" } },
    "errorUrlMissing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "URL \uC18D\uC131\uC774 \uB204\uB77D\uB418\uC5C8\uC2B5\uB2C8\uB2E4" } },
    "errorNoTableSelected": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC120\uD0DD\uB41C \uD14C\uC774\uBE14\uC774 \uC5C6\uC2B5\uB2C8\uB2E4" } },
    "errorFilterInError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC801\uC5B4\uB3C4 \uD558\uB098\uC758 \uD544\uD130\uAC00 \uC798\uBABB \uAD6C\uC131\uB418\uC5C8\uC2B5\uB2C8\uB2E4" } },
    "errorSortingInError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC801\uC5B4\uB3C4 \uD558\uB098\uC758 \uC885\uB958\uAC00 \uC798\uBABB \uAD6C\uC131\uB418\uC5C8\uC2B5\uB2C8\uB2E4" } },
    "errorNoFieldSelected": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC120\uD0DD\uB41C \uD544\uB4DC\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4" } },
    "errorNoAggregationTypeSelected": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC120\uD0DD\uB41C \uC9D1\uACC4 \uC720\uD615\uC774 \uC5C6\uC2B5\uB2C8\uB2E4" } },
    "coreRouter": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB77C\uC6B0\uD130" } },
    "coreRouterEdgesRequired": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uCD5C\uC18C \uD558\uB098\uC758 \uC5F0\uACB0\uC9C0\uC810\uC774 \uD544\uC694\uD569\uB2C8\uB2E4" } },
    "coreRouterEdgeLabelRequired": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBE0C\uB79C\uCE58 \uB808\uC774\uBE14\uC774 \uD544\uC694\uD569\uB2C8\uB2E4." } },
    "coreRouterEdgeConditionRequired": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBD84\uAE30 \uC870\uAC74\uC774 \uD544\uC694\uD569\uB2C8\uB2E4." } },
    "coreRouterDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC870\uAC74\uC5D0 \uB530\uB77C \uC6CC\uD06C\uD50C\uB85C\uB97C \uB2E4\uC74C \uBE0C\uB79C\uCE58\uB85C \uB77C\uC6B0\uD305\uD569\uB2C8\uB2E4." } },
    "corePeriodic": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC8FC\uAE30\uC801 \uD2B8\uB9AC\uAC70" } },
    "corePeriodicDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC9C0\uC815\uB41C \uAC04\uACA9\uC73C\uB85C \uC8FC\uAE30\uC801\uC73C\uB85C \uC6CC\uD06C\uD50C\uB85C\uC6B0\uB97C \uD2B8\uB9AC\uAC70\uD569\uB2C8\uB2E4" } },
    "corePeriodicErrorIntervalMissing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAC04\uACA9\uC774 \uD544\uC694\uD569\uB2C8\uB2E4." } },
    "coreHTTPTrigger": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "HTTP \uC694\uCCAD\uC744 \uC218\uC2E0\uD569\uB2C8\uB2E4" } },
    "coreHTTPTriggerDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "HTTP \uC694\uCCAD\uC774 \uC218\uC2E0\uB420 \uB54C \uBC1C\uC0DD\uD569\uB2C8\uB2E4." } },
    "coreIteration": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBC18\uBCF5\uC790" } },
    "coreIterationDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD56D\uBAA9\uC744 \uBC18\uBCF5\uD569\uB2C8\uB2E4." } },
    "errorIterationSourceMissing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC18C\uC2A4 \uC18D\uC131\uC774 \uB204\uB77D\uB418\uC5C8\uC2B5\uB2C8\uB2E4" } },
    "aiAgent": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "AI \uD504\uB86C\uD504\uD2B8" } },
    "aiAgentDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAD6C\uC131\uB41C \uC0DD\uC131 AI \uBAA8\uB378\uC744 \uC0AC\uC6A9\uD558\uC5EC AI \uD504\uB86C\uD504\uD2B8\uB97C \uC2E4\uD589\uD569\uB2C8\uB2E4." } },
    "errorNoIntegrationSelected": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD1B5\uD569\uC774 \uC120\uD0DD\uB418\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4" } },
    "errorNoAIProviderSelected": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "AI \uACF5\uAE09\uC790\uAC00 \uC120\uD0DD\uB418\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4" } },
    "errorNoAIModelSelected": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "AI \uBAA8\uB378\uC774 \uC120\uD0DD\uB418\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4" } },
    "errorNoPromptProvided": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD504\uB86C\uD504\uD2B8\uAC00 \uC81C\uACF5\uB418\uC9C0 \uC54A\uC74C" } },
    "errorNoChoicesProvided": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC120\uD0DD \uCD9C\uB825 \uC720\uD615\uC5D0 \uB300\uD55C \uC120\uD0DD \uC0AC\uD56D\uC774 \uC81C\uACF5\uB418\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4" } },
    "slackWriteMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Slack \uBA54\uC2DC\uC9C0 \uBCF4\uB0B4\uAE30" } },
    "slackWriteMessageDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD2B9\uC815 Slack \uCC44\uB110\uC5D0 \uBA54\uC2DC\uC9C0\uB97C \uBCF4\uB0C5\uB2C8\uB2E4" } },
    "slackWriteMessageMissingChannel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uCC44\uB110\uC774 \uD544\uC694\uD569\uB2C8\uB2E4." } },
    "slackWriteMessageMissingMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBA54\uC2DC\uC9C0\uAC00 \uD544\uC694\uD569\uB2C8\uB2E4." } },
    "slackWriteMessageMissingIntegration": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Slack \uD1B5\uD569\uC774 \uC120\uD0DD\uB418\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4." } },
    "coreManualTrigger": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC218\uB3D9 \uD2B8\uB9AC\uAC70" } },
    "localBaserowCreateRows": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC77C\uAD04\uC801\uC73C\uB85C \uD589 \uC0DD\uC131" } },
    "localBaserowCreateRowsDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Baserow \uD14C\uC774\uBE14\uC5D0 \uC5EC\uB7EC \uAC1C\uC758 \uC0C8 \uD589\uC744 \uC0DD\uC131\uD569\uB2C8\uB2E4." } },
    "localBaserowUpdateRows": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC77C\uAD04 \uC5C5\uB370\uC774\uD2B8 \uD589" } },
    "localBaserowUpdateRowsDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Baserow \uD14C\uC774\uBE14\uC758 \uAE30\uC874 \uD589 \uC5EC\uB7EC \uAC1C\uB97C \uC5C5\uB370\uC774\uD2B8\uD569\uB2C8\uB2E4." } },
    "localBaserowFieldsUpdated": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD2B9\uC815 \uD544\uB4DC \uAC12\uC774 \uC5C5\uB370\uC774\uD2B8\uB429\uB2C8\uB2E4" } },
    "localBaserowFieldsUpdatedDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Baserow \uD14C\uC774\uBE14\uC758 \uD2B9\uC815 \uD544\uB4DC\uC5D0\uC11C \uD589\uC774 \uC5C5\uB370\uC774\uD2B8\uB420 \uB54C \uD2B8\uB9AC\uAC70\uB429\uB2C8\uB2E4." } },
    "coreManualTriggerDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774 \uC6CC\uD06C\uD50C\uB85C\uB294 \uB2E4\uB978 \uC6CC\uD06C\uD50C\uB85C \uC791\uC5C5\uC774 \uC2DC\uC791\uB420 \uB54C\uB9CC \uC2DC\uC791\uB429\uB2C8\uB2E4." } },
    "coreCSVFileReader": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "CSV \uD30C\uC77C\uC744 \uC77D\uC2B5\uB2C8\uB2E4" } },
    "coreCSVFileReaderDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "CSV \uD30C\uC77C\uC5D0\uC11C \uD589\uC744 \uC77D\uC2B5\uB2C8\uB2E4." } },
    "coreStartWorkflow": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC6CC\uD06C\uD50C\uB85C \uC2DC\uC791" } },
    "coreStartWorkflowDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC790\uB3D9\uD654 \uC6CC\uD06C\uD50C\uB85C\uC6B0\uB97C \uC2DC\uC791\uD569\uB2C8\uB2E4." } },
    "errorNoRowsSelected": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC120\uD0DD\uB41C \uD589\uC774 \uC5C6\uC2B5\uB2C8\uB2E4" } },
    "errorCSVFileMissing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "CSV \uD30C\uC77C \uC18D\uC131\uC774 \uB204\uB77D\uB418\uC5C8\uC2B5\uB2C8\uB2E4" } },
    "errorCSVContentMissing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "CSV \uB370\uC774\uD130 \uC18D\uC131\uC774 \uB204\uB77D\uB418\uC5C8\uC2B5\uB2C8\uB2E4" } },
    "errorNoWorkflowSelected": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC120\uD0DD\uB41C \uC6CC\uD06C\uD50C\uB85C \uC5C6\uC74C" } },
    "errorWorkflowNotImmediateDispatch": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC120\uD0DD\uD55C \uC6CC\uD06C\uD50C\uB85C\uB294 \uC989\uC2DC \uC2DC\uC791\uB420 \uC218 \uC788\uB294 \uD2B8\uB9AC\uAC70\uB97C \uC0AC\uC6A9\uD574\uC57C \uD569\uB2C8\uB2E4." } }
  },
  "userSourceType": {
    "localBaserow": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Baserow \uD14C\uC774\uBE14 \uC778\uC99D" } }
  },
  "localBaserowForm": {
    "user": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC0AC\uC6A9\uC790" } },
    "userMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774 \uC5F0\uACB0\uC744 \uC0DD\uC131\uD558\uBA74 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC774 \uADC0\uD558\uC758 \uACC4\uC815\uC744 \uC0AC\uC6A9\uD558\uC5EC \uB85C\uCEEC Baserow \uC791\uC5C5 \uACF5\uAC04\uC5D0\uC11C \uBCC0\uACBD \uC791\uC5C5\uC744 \uC218\uD589\uD560 \uC218 \uC788\uB3C4\uB85D \uC2B9\uC778\uD558\uAC8C \uB429\uB2C8\uB2E4." } }
  },
  "localBaserowGetRowForm": {
    "rowFieldLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD589 ID" } },
    "invalidFormula": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC218\uC2DD\uC774 \uC720\uD6A8\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4" } },
    "rowFieldPlaceHolder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB2E8\uC77C \uD589 ID\uB97C \uC120\uD0DD\uD558\uC138\uC694" } },
    "rowFieldHelpText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uCCAB \uBC88\uC9F8 \uD589\uC744 \uBC18\uD658\uD558\uB824\uBA74 \uC774 \uAC12\uC744 \uBE44\uC6CC \uB450\uC138\uC694." } },
    "searchFieldPlaceHolder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAC80\uC0C9\uC5B4 \uC785\uB825..." } },
    "noTableChosenForFiltering": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB370\uC774\uD130 \uC18C\uC2A4 \uD544\uD130\uB97C \uC0AC\uC6A9\uD558\uB824\uBA74 \uD14C\uC774\uBE14\uC744 \uC120\uD0DD\uD558\uC138\uC694." } },
    "filterTabTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD544\uD130" } },
    "searchTabTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAC80\uC0C9" } },
    "noTableChosenForSorting": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB370\uC774\uD130 \uC18C\uC2A4 \uC815\uB82C\uC744 \uC0AC\uC6A9\uD558\uB824\uBA74 \uD14C\uC774\uBE14\uC744 \uC120\uD0DD\uD558\uC138\uC694." } }
  },
  "localBaserowListRowsForm": {
    "filterTabTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD544\uD130" } },
    "sortTabTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC815\uB82C" } },
    "searchTabTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAC80\uC0C9" } },
    "searchFieldPlaceHolder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAC80\uC0C9\uC5B4 \uC785\uB825..." } },
    "noTableChosenForFiltering": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB370\uC774\uD130 \uC18C\uC2A4 \uD544\uD130\uB97C \uC0AC\uC6A9\uD558\uB824\uBA74 \uD14C\uC774\uBE14\uC744 \uC120\uD0DD\uD558\uC138\uC694." } },
    "noTableChosenForSorting": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB370\uC774\uD130 \uC18C\uC2A4 \uC815\uB82C\uC744 \uC0AC\uC6A9\uD558\uB824\uBA74 \uD14C\uC774\uBE14\uC744 \uC120\uD0DD\uD558\uC138\uC694." } },
    "advancedConfig": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uACE0\uAE09\uAE09" } },
    "defaultResultCount": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAE30\uBCF8 \uACB0\uACFC \uC218" } },
    "defaultResultCountHelp": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774 \uB370\uC774\uD130 \uC18C\uC2A4\uAC00 \uD398\uC774\uC9C0\uC5D0\uC11C \uAC00\uC838\uC624\uB294 \uAE30\uBCF8 \uD56D\uBAA9 \uC218\uC785\uB2C8\uB2E4. \uAC12\uC744 0\uC73C\uB85C \uC124\uC815\uD558\uACE0 \uCEEC\uB809\uC158 \uC694\uC18C\uC5D0 \uC0AC\uC6A9\uD558\uBA74 \uD574\uB2F9 \uC694\uC18C\uAC00 \uD398\uC774\uC9C0 \uBD84\uD560\uB420 \uB54C\uB9CC \uB808\uCF54\uB4DC\uB97C \uAC00\uC838\uC624\uBBC0\uB85C \uD398\uC774\uC9C0 \uB85C\uB4DC \uC131\uB2A5\uC774 \uD5A5\uC0C1\uB429\uB2C8\uB2E4." } },
    "defaultResultCountPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAE30\uBCF8\uAC12..." } }
  },
  "localBaserowAggregateRowsForm": {
    "filterTabTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD544\uD130" } },
    "searchTabTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAC80\uC0C9" } },
    "aggregationFieldLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD544\uB4DC" } },
    "aggregationTypeLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC9D1\uACC4" } },
    "searchFieldPlaceHolder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAC80\uC0C9\uC5B4 \uC785\uB825..." } },
    "noTableChosenForFiltering": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB370\uC774\uD130 \uC18C\uC2A4 \uD544\uD130\uB97C \uC0AC\uC6A9\uD558\uB824\uBA74 \uD14C\uC774\uBE14\uC744 \uC120\uD0DD\uD558\uC138\uC694." } }
  },
  "localBaserowTableServiceConditionalForm": {
    "addFilter": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uCD94\uAC00 \uD544\uD130 \uCD94\uAC00" } },
    "noFilterTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC544\uC9C1 \uB370\uC774\uD130 \uC18C\uC2A4 \uD544\uD130\uB97C \uC0DD\uC131\uD558\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4" } },
    "noFilterText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB370\uC774\uD130 \uC18C\uC2A4 \uD544\uD130\uB97C \uC0AC\uC6A9\uD558\uBA74 \uC870\uAC74\uC5D0 \uC801\uC6A9\uB418\uB294 Baserow \uD14C\uC774\uBE14 \uD589\uC744 \uD45C\uC2DC\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4." } },
    "relatedFieldNotFound": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAD00\uB828 \uD544\uB4DC\uB97C \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4." } },
    "filterTypeNotFound": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD544\uD130 \uC720\uD615\uC774 \uD638\uD658\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4." } },
    "noCompatibleFilterTypesErrorTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD638\uD658 \uAC00\uB2A5\uD55C \uD544\uD130 \uC720\uD615 \uC5C6\uC74C" } },
    "noCompatibleFilterTypesErrorMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD544\uB4DC \uC911 \uD638\uD658 \uAC00\uB2A5\uD55C \uD544\uD130 \uC720\uD615\uC774 \uC5C6\uC2B5\uB2C8\uB2E4" } },
    "formulaFilterInputPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC218\uC2DD\uC744 \uC120\uD0DD\uD558\uC138\uC694..." } },
    "useFormulaForValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774 \uD544\uD130\uC5D0 \uC218\uC2DD \uC0AC\uC6A9" } },
    "useDefaultForValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774 \uD544\uB4DC\uC5D0 \uAE30\uBCF8 \uD544\uD130 \uC0AC\uC6A9" } },
    "textFilterInputPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD14D\uC2A4\uD2B8\uB97C \uC785\uB825\uD558\uC138\uC694..." } }
  },
  "localBaserowTableServiceSortForm": {
    "noSortTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC544\uC9C1 \uB370\uC774\uD130 \uC18C\uC2A4 \uC815\uB82C\uC744 \uC0DD\uC131\uD558\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4" } },
    "noSortText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC815\uB82C\uC744 \uC0AC\uC6A9\uD558\uBA74 \uD544\uB4DC\uBCC4\uB85C \uD589\uC744 \uC815\uB82C\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4." } },
    "sortBy": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC815\uB82C \uAE30\uC900" } },
    "thenBy": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB2E4\uC74C \uAE30\uC900" } },
    "addSort": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uCD94\uAC00 \uC815\uB82C \uCD94\uAC00" } },
    "noTableChosenForSorting": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB370\uC774\uD130 \uC18C\uC2A4 \uC815\uB82C\uC744 \uC0AC\uC6A9\uD558\uB824\uBA74 \uD14C\uC774\uBE14\uC744 \uC120\uD0DD\uD558\uC138\uC694." } },
    "sortMisconfigured": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774 \uC815\uB82C\uACFC \uAD00\uB828\uB41C \uD544\uB4DC\uB294 \uC0AD\uC81C\uB418\uC5C8\uC2B5\uB2C8\uB2E4." } }
  },
  "dataProviderType": {
    "dataSource": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB370\uC774\uD130 \uC18C\uC2A4" } },
    "pageParameter": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB9E4\uAC1C\uBCC0\uC218" } }
  },
  "localBaserowTableSelector": {
    "viewFieldLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBCF4\uAE30" } },
    "tableFieldLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD14C\uC774\uBE14" } },
    "chooseNoView": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC120\uD0DD\uB418\uC9C0 \uC54A\uC74C" } },
    "databaseFieldLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB370\uC774\uD130\uBCA0\uC774\uC2A4" } },
    "dataSyncedTableDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB370\uC774\uD130 \uB3D9\uAE30\uD654 \uD14C\uC774\uBE14" } },
    "oneWayDataSyncedTableDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB2E8\uBC29\uD5A5 \uB3D9\uAE30\uD654" } },
    "twoWayDataSyncedTableDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC591\uBC29\uD5A5 \uB3D9\uAE30\uD654" } }
  },
  "coreHTTPRequestServiceForm": {
    "value": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAC12" } },
    "httpMethod": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "HTTP \uBA54\uC11C\uB4DC" } },
    "url": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC5D4\uB4DC\uD3EC\uC778\uD2B8 URL" } },
    "queryParams": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uCFFC\uB9AC \uB9E4\uAC1C\uBCC0\uC218" } },
    "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774\uB984" } },
    "namePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774\uB984..." } },
    "valuePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAC12..." } },
    "headers": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD5E4\uB354" } },
    "addQueryParam": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uCFFC\uB9AC \uB9E4\uAC1C\uBCC0\uC218 \uCD94\uAC00" } },
    "addHeader": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD5E4\uB354 \uCD94\uAC00" } },
    "formData": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC591\uC2DD \uB370\uC774\uD130" } },
    "addFormData": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC591\uC2DD \uB370\uC774\uD130 \uCD94\uAC00" } },
    "bodyType": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBCF8\uBB38 \uC885\uB958" } },
    "bodyContent": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBCF8\uBB38 \uCF58\uD150\uCE20" } },
    "urlPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC5D4\uB4DC\uD3EC\uC778\uD2B8 URL\uC744 \uC785\uB825\uD558\uC138\uC694..." } },
    "bodyPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC694\uCCAD \uBCF8\uBB38\uC744 \uCD94\uAC00\uD569\uB2C8\uB2E4..." } },
    "timeoutPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC2DC\uAC04\uCD08\uACFC \uAC12\uC744 \uC785\uB825\uD558\uC138\uC694..." } },
    "nameFieldRequired": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774\uB984 \uC18D\uC131\uC740 \uD544\uC218\uC785\uB2C8\uB2E4." } },
    "seconds": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uCD08" } },
    "timeout": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC2DC\uAC04\uCD08\uACFC" } },
    "nameFieldInvalid": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774\uB984\uC740 \uC601\uC22B\uC790, \uB300\uC2DC \uB610\uB294 \uBC11\uC904\uB9CC \uD3EC\uD568\uD560 \uC218 \uC788\uC73C\uBA70 \uB300\uC2DC\uB098 \uBC11\uC904\uB85C \uC2DC\uC791\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4." } }
  },
  "smtpIntegrationType": {
    "smtpSummary": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "SMTP - " }, { "t": 4, "k": "host" }, { "t": 3, "v": ":" }, { "t": 4, "k": "port" }] } }
  },
  "smtpForm": {
    "host": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "SMTP \uD638\uC2A4\uD2B8" } },
    "hostPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "smtp.gmail.com" } },
    "port": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "SMTP \uD3EC\uD2B8" } },
    "portPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "587" } },
    "useTls": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "TLS \uC0AC\uC6A9" } },
    "username": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC0AC\uC6A9\uC790 \uC774\uB984" } },
    "usernamePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }, { "t": 9 }, { "t": 3 }], "s": "your-email@example.com" } },
    "password": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBE44\uBC00\uBC88\uD638" } },
    "passwordPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB2F9\uC2E0\uC758 \uBE44\uBC00\uBC88\uD638" } }
  },
  "smtpEmailForm": {
    "integrationDropdownLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD1B5\uD569" } },
    "fromEmail": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774\uBA54\uC77C\uC5D0\uC11C" } },
    "fromEmailPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }, { "t": 9 }, { "t": 3 }], "s": "sender@example.com" } },
    "fromName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774\uB984\uC5D0\uC11C" } },
    "fromNamePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB2F9\uC2E0\uC758 \uC774\uB984" } },
    "toEmails": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774\uBA54\uC77C\uB85C" } },
    "toEmailsPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }, { "t": 9 }, { "t": 3 }, { "t": 9 }, { "t": 3 }], "s": "\uC218\uC2E0\uC7901@example.com,\uC218\uC2E0\uC7902@example.com" } },
    "ccEmails": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "CC \uC774\uBA54\uC77C" } },
    "ccEmailsPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }, { "t": 9 }, { "t": 3 }, { "t": 9 }, { "t": 3 }], "s": "cc1@example.com,cc2@example.com" } },
    "bccEmails": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC228\uC740 \uCC38\uC870 \uC774\uBA54\uC77C" } },
    "bccEmailsPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }, { "t": 9 }, { "t": 3 }, { "t": 9 }, { "t": 3 }], "s": "bcc1@example.com,bcc2@example.com" } },
    "subject": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC81C\uBAA9" } },
    "subjectPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uADC0\uD558\uC758 \uC774\uBA54\uC77C \uC81C\uBAA9" } },
    "bodyType": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Body \uC720\uD615" } },
    "bodyTypePlain": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC77C\uBC18 \uD14D\uC2A4\uD2B8" } },
    "bodyTypeHtml": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "HTML" } },
    "body": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Body" } },
    "bodyPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774\uBA54\uC77C \uB0B4\uC6A9..." } },
    "useInstanceSmtpSettings": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC778\uC2A4\uD134\uC2A4 SMTP \uC11C\uBC84\uB97C \uC0AC\uC6A9\uD558\uC2ED\uC2DC\uC624" } },
    "smtpConfigurationMode": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "SMTP \uAD6C\uC131" } }
  },
  "serviceRefinementForms": {
    "filterTabTitle": { "t": 0, "b": { "t": 1, "c": [{ "t": 2, "i": [{ "t": 3 }], "s": "\uD544\uD130" }, { "t": 2, "i": [{ "t": 3 }], "s": "1 \uD544\uD130" }, { "t": 2, "i": [{ "t": 4, "k": "count" }, { "t": 3, "v": " \uD544\uD130" }] }] } },
    "sortTabTitle": { "t": 0, "b": { "t": 1, "c": [{ "t": 2, "i": [{ "t": 3 }], "s": "\uC815\uB82C" }, { "t": 2, "i": [{ "t": 3 }], "s": "1 \uC815\uB82C" }, { "t": 2, "i": [{ "t": 4, "k": "count" }, { "t": 3, "v": " \uC815\uB82C" }] }] } },
    "searchTabTitle": { "t": 0, "b": { "t": 1, "c": [{ "t": 2, "i": [{ "t": 3 }], "s": "\uAC80\uC0C9" }, { "t": 2, "i": [{ "t": 3 }], "s": "1 \uAC80\uC0C9" }, { "t": 2, "i": [{ "t": 4, "k": "count" }, { "t": 3, "v": " \uAC80\uC0C9" }] }] } },
    "searchFieldPlaceHolder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAC80\uC0C9\uC5B4\uB97C \uC785\uB825\uD558\uC138\uC694..." } },
    "noTableChosenForFiltering": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB370\uC774\uD130 \uC18C\uC2A4 \uD544\uD130\uB97C \uC0AC\uC6A9\uD558\uB824\uBA74 \uD14C\uC774\uBE14\uC744 \uC120\uD0DD\uD558\uC138\uC694." } },
    "noTableChosenForSorting": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB370\uC774\uD130 \uC18C\uC2A4 \uC815\uB82C\uC744 \uC0AC\uC6A9\uD558\uB824\uBA74 \uD14C\uC774\uBE14\uC744 \uC120\uD0DD\uD558\uC138\uC694." } },
    "refinements": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAC1C\uC120 \uC0AC\uD56D" } }
  },
  "routerForm": {
    "defaultEdgeLabelLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAE30\uBCF8 \uBE0C\uB79C\uCE58 \uB808\uC774\uBE14" } },
    "defaultEdgeLabelPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAE30\uBCF8\uAC12" } },
    "defaultEdgeLabelDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC120\uD0DD\uC801\uC73C\uB85C \uAE30\uBCF8 \uBE0C\uB79C\uCE58\uC5D0 \uD45C\uC2DC\uD560 \uB808\uC774\uBE14\uC744 \uC120\uD0DD\uD569\uB2C8\uB2E4." } },
    "branchesHeading": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBE0C\uB79C\uCE58" } },
    "branchesDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBE0C\uB79C\uCE58\uB97C \uC0AC\uC6A9\uD558\uBA74 \uC870\uAC74\uC774 \uCDA9\uC871\uB420 \uB54C\uB9CC \uB178\uB4DC\uB97C \uC2E4\uD589\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uBE0C\uB79C\uCE58\uB294 \uC870\uAC74\uC774 \uCDA9\uC871\uB420 \uB54C\uAE4C\uC9C0 \uC67C\uCABD\uC5D0\uC11C \uC624\uB978\uCABD\uC73C\uB85C \uC2E4\uD589\uB418\uBA70, \uADF8\uB807\uC9C0 \uC54A\uC73C\uBA74 \uAE30\uBCF8 \uBE0C\uB79C\uCE58\uAC00 \uC2E4\uD589\uB429\uB2C8\uB2E4. " } },
    "branchLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB77C\uBCA8" } },
    "branchConditionLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC870\uAC74" } },
    "branchConditionPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB9CC\uC57D \uC0AC\uC2E4\uC774\uB77C\uBA74, \uC6B0\uB9AC\uB294 \uC774 \uBD84\uAE30\uB97C \uB530\uB985\uB2C8\uB2E4." } },
    "addEdge": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBE0C\uB79C\uCE58 \uCD94\uAC00" } },
    "edgeDefaultName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBE0C\uB79C\uCE58" } },
    "noLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB77C\uBCA8 \uC5C6\uC74C" } },
    "edgeDeletionLastEdge": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB9C8\uC9C0\uB9C9 \uBE0C\uB79C\uCE58\uB294 \uC0AD\uC81C\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4." } },
    "edgeDeletionHasOutput": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBE0C\uB79C\uCE58\uC5D0 \uCD9C\uB825\uC774 \uC788\uB294 \uACBD\uC6B0\uC5D0\uB294 \uC0AD\uC81C\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4." } }
  },
  "periodicForm": {
    "intervalLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAC04\uACA9" } },
    "intervalHelper": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774 \uC6CC\uD06C\uD50C\uB85C\uB97C \uC5BC\uB9C8\uB098 \uC790\uC8FC \uC2E4\uD589\uD560\uC9C0 \uC120\uD0DD\uD558\uC138\uC694" } },
    "everyMinute": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "\uB9E4 " }, { "t": 4, "k": "minute" }, { "t": 3, "v": " \uBD84\uB9C8\uB2E4" }] } },
    "everyHour": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB9E4 \uC2DC\uAC04" } },
    "everyDay": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB9E4 \uC77C" } },
    "everyWeek": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB9E4 \uC8FC" } },
    "everyMonth": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB9E4 \uC6D4" } },
    "hour": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC2DC" } },
    "minute": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBD84" } },
    "dayOfWeek": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC694\uC77C \uC9C0\uC815" } },
    "dayOfMonth": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC6D4\uBCC4 \uC77C\uC790 \uC9C0\uC815" } },
    "hourPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "0-23" } },
    "minutePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "0-59" } },
    "dayOfMonthPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "1-31" } },
    "minuteHelper": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774 \uC6CC\uD06C\uD50C\uB85C\uB294 \uC9C0\uC815\uB41C \uBD84\uB9C8\uB2E4 \uC2E4\uD589\uB429\uB2C8\uB2E4" } },
    "hourHelper": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "\uC774 \uC6CC\uD06C\uD50C\uB85C\uB294 \uD604\uC9C0 \uC2DC\uAC04\uB300(" }, { "t": 4, "k": "timezone" }, { "t": 3, "v": ")\uC5D0\uC11C \uC9C0\uC815\uB41C \uBD84\uB9C8\uB2E4 \uC2E4\uD589\uB429\uB2C8\uB2E4" }] } },
    "dayHelper": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "\uC774 \uC6CC\uD06C\uD50C\uB85C\uB294 \uB9E4\uC77C \uD604\uC9C0 \uC2DC\uAC04\uB300(" }, { "t": 4, "k": "timezone" }, { "t": 3, "v": ")\uC758 \uC9C0\uC815\uB41C \uC2DC\uAC04\uC5D0 \uC2E4\uD589\uB429\uB2C8\uB2E4" }] } },
    "weekHelper": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "\uC774 \uC6CC\uD06C\uD50C\uB85C\uB294 \uB9E4\uC8FC \uC9C0\uC815\uB41C \uB0A0\uC9DC\uC640 \uC2DC\uAC04\uC5D0 \uD604\uC9C0 \uC2DC\uAC04\uB300(" }, { "t": 4, "k": "timezone" }, { "t": 3, "v": ")\uB85C \uC2E4\uD589\uB429\uB2C8\uB2E4" }] } },
    "monthHelper": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "\uC774 \uC6CC\uD06C\uD50C\uB85C\uB294 \uB9E4\uC6D4 \uC9C0\uC815\uB41C \uB0A0\uC9DC\uC640 \uC2DC\uAC04\uC5D0 \uD604\uC9C0 \uC2DC\uAC04\uB300(" }, { "t": 4, "k": "timezone" }, { "t": 3, "v": ")\uB85C \uC2E4\uD589\uB429\uB2C8\uB2E4" }] } },
    "deactivatedTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC8FC\uAE30\uC801 \uD2B8\uB9AC\uAC70 \uBE44\uD65C\uC131\uD654\uB428" } },
    "deactivatedText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC5F0\uC18D\uC801\uC778 \uC2E4\uD328\uB85C \uC778\uD574 \uC774 \uC8FC\uAE30\uC801 \uD2B8\uB9AC\uAC70\uAC00 \uC790\uB3D9\uC73C\uB85C \uBE44\uD65C\uC131\uD654\uB418\uC5C8\uC2B5\uB2C8\uB2E4." } },
    "everyMinuteDefault": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC9C0\uC815\uB41C \uBD84\uB9C8\uB2E4" } },
    "minuteFrequency": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB9E4 \uBD84\uB9C8\uB2E4" } },
    "minuteFrequencyPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "15" } }
  },
  "aiIntegrationType": {
    "inheritingWorkspace": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC791\uC5C5 \uACF5\uAC04 AI \uC124\uC815 \uC0C1\uC18D" } },
    "overridingProviders": { "t": 0, "b": { "t": 1, "c": [{ "t": 2, "i": [{ "t": 4, "k": "count" }, { "t": 3, "v": "\uAC1C\uC758 \uACF5\uAE09\uC790 \uC7AC\uC815\uC758 \uC911" }] }, { "t": 2, "i": [{ "t": 4, "k": "count" }, { "t": 3, "v": "\uAC1C\uC758 \uACF5\uAE09\uC790 \uC7AC\uC815\uC758 \uC911" }] }] } }
  },
  "slackBotIntegrationType": {
    "slackBotSummary": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC2AC\uB799 \uBD07" } },
    "slackBotNoToken": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC2AC\uB799 \uBD07 - \uAD6C\uC131\uB418\uC9C0 \uC54A\uC74C" } }
  },
  "aiForm": {
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774 \uD1B5\uD569\uC5D0 \uB300\uD55C AI \uACF5\uAE09\uC790 \uC124\uC815\uC744 \uAD6C\uC131\uD558\uC138\uC694. \uAE30\uBCF8\uC801\uC73C\uB85C Workspace AI \uC124\uC815\uC740 \uC0C1\uC18D\uB429\uB2C8\uB2E4." } },
    "workspaceSettingsTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Workspace AI \uC124\uC815" } },
    "workspaceSettingsDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774 \uD1B5\uD569\uC740 \uAE30\uBCF8\uC801\uC73C\uB85C \uC791\uC5C5 \uACF5\uAC04\uC758 AI \uACF5\uAE09\uC790 \uC124\uC815\uC744 \uC0C1\uC18D\uD569\uB2C8\uB2E4. \uC544\uB798\uC5D0\uC11C \uD2B9\uC815 \uACF5\uAE09\uC790\uB97C \uC7AC\uC815\uC758\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4." } },
    "overrideWorkspaceSettings": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774 \uACF5\uAE09\uC790\uC5D0 \uB300\uD55C \uC791\uC5C5 \uACF5\uAC04 \uC124\uC815\uC744 \uC7AC\uC815\uC758\uD569\uB2C8\uB2E4" } },
    "inherited": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC0C1\uC18D\uBC1B\uC74C" } },
    "overridden": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC7AC\uC815\uC758\uB428" } }
  },
  "aiAgentServiceForm": {
    "integrationLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD1B5\uD569" } },
    "providerLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "AI \uACF5\uAE09\uC5C5\uCCB4" } },
    "providerPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "AI \uACF5\uAE09\uC5C5\uCCB4\uB97C \uC120\uD0DD\uD558\uC138\uC694..." } },
    "modelLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "AI \uBAA8\uB378" } },
    "modelPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBAA8\uB378\uC744 \uC120\uD0DD\uD558\uC138\uC694..." } },
    "outputTypeLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uCD9C\uB825 \uC720\uD615" } },
    "outputTypeHelp": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "AI\uAC00 \uC751\uB2F5 \uD615\uC2DD\uC744 \uC5B4\uB5BB\uAC8C \uAD6C\uC131\uD574\uC57C \uD560\uC9C0 \uC120\uD0DD\uD558\uC138\uC694. \uC120\uD0DD\uC9C0\uB97C \uC815\uC758\uD558\uBA74 \uBAA8\uB378\uC774 \uD574\uB2F9 \uC120\uD0DD\uC9C0 \uC911 \uD558\uB098\uB9CC\uC73C\uB85C \uC751\uB2F5\uD558\uB3C4\uB85D \uAC15\uC81C\uD569\uB2C8\uB2E4." } },
    "outputTypeText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD14D\uC2A4\uD2B8" } },
    "outputTypeChoice": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC120\uD0DD" } },
    "temperatureLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC628\uB3C4" } },
    "temperaturePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC608) 0.7" } },
    "temperatureHelp": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBB34\uC791\uC704\uC131\uC744 \uC870\uC808\uD569\uB2C8\uB2E4. \uAC12\uC774 \uB0AE\uC744\uC218\uB85D(0\u20130.3) \uB354 \uC9D1\uC911\uB418\uACE0 \uACB0\uC815\uC801\uC778 \uACB0\uACFC\uB97C \uB0B4\uBA70, \uAC12\uC774 \uB192\uC744\uC218\uB85D(0.7\u20132.0) \uB354 \uCC3D\uC758\uC801\uC774\uACE0 \uB2E4\uC591\uD558\uAC8C \uCD9C\uB825\uB429\uB2C8\uB2E4." } },
    "promptLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD504\uB86C\uD504\uD2B8" } },
    "promptPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC5EC\uAE30\uC5D0 \uD504\uB86C\uD504\uD2B8\uB97C \uC785\uB825\uD558\uC138\uC694..." } },
    "choicesLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC120\uD0DD" } },
    "choicePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC120\uD0DD \uC635\uC158\uC744 \uC785\uB825\uD558\uC138\uC694..." } },
    "addChoice": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC120\uD0DD \uCD94\uAC00" } },
    "choicesRequired": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uCD5C\uC18C\uD55C \uD558\uB098\uC758 \uC120\uD0DD\uC774 \uD544\uC694\uD569\uB2C8\uB2E4" } }
  },
  "slackBotForm": {
    "tokenLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBD07 \uC0AC\uC6A9\uC790 \uD1A0\uD070" } },
    "tokenPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "xoxb-1234-..." } },
    "tokenMustStartWith": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": '\uD1A0\uD070\uC740 "xoxb-"\uB85C \uC2DC\uC791\uD574\uC57C \uD569\uB2C8\uB2E4' } },
    "supportHeading": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB3C4\uC6C0\uC774 \uD544\uC694\uD558\uC2E0\uAC00\uC694?" } },
    "supportDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Slack \uC571\uACFC \uD398\uC5B4\uB9C1\uD558\uB294 \uB370 \uB3C4\uC6C0\uC774 \uD544\uC694\uD558\uBA74 \uC544\uB798 \uB2E8\uACC4\uB97C \uCC38\uC870\uD558\uC138\uC694." } },
    "supportSetupHeading": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "1. \uC571 \uC124\uC815" } },
    "supportSetupDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Slack \uC791\uC5C5 \uACF5\uAC04 \uC124\uC815\uC5D0 \uB530\uB77C \uC0C8 Slack \uC571\uC744 \uC0DD\uC131\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uADF8\uB807\uC9C0 \uC54A\uC740 \uACBD\uC6B0 \uAD00\uB9AC\uC790\uAC00 \uB300\uC2E0 \uC0DD\uC131\uD574\uC57C \uD569\uB2C8\uB2E4. \uBA54\uC2DC\uC9C0\uB97C \uC791\uC131\uD560 \uC218 \uC788\uB294 \uAE30\uC874 \uC571\uC744 \uC7AC\uC0AC\uC6A9\uD558\uB294 \uACBD\uC6B0 'Slack \uC571\uACFC \uD398\uC5B4\uB9C1\uD558\uAE30' \uC139\uC158\uC73C\uB85C \uAC74\uB108\uB6F0\uC138\uC694." } },
    "supportSetupStep1": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "\uC6CC\uD06C\uC2A4\uD398\uC774\uC2A4\uC758 " }, { "t": 4, "k": "link" }, { "t": 3, "v": "\uB85C \uC774\uB3D9\uD558\uC138\uC694." }] } },
    "supportSetupStep2": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC0C8 \uC571\uC744 \uB9CC\uB4E4\uACE0 '\uCC98\uC74C\uBD80\uD130'\uB97C \uC120\uD0DD\uD55C \uD6C4 \uC774\uB984\uC744 \uC785\uB825\uD558\uC138\uC694. \uC571\uC774 \uC791\uB3D9\uD560 \uC791\uC5C5 \uACF5\uAC04\uC744 \uC120\uD0DD\uD558\uACE0 '\uB9CC\uB4E4\uAE30'\uB97C \uD074\uB9AD\uD558\uC138\uC694." } },
    "supportSetupStep3": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC67C\uCABD \uC0AC\uC774\uB4DC\uBC14\uC5D0\uC11C 'OAuth > \uAD8C\uD55C'\uC73C\uB85C \uC774\uB3D9\uD55C \uB2E4\uC74C, '\uBC94\uC704'\uAE4C\uC9C0 \uC544\uB798\uB85C \uC2A4\uD06C\uB864\uD558\uC5EC '\uBD07 \uD1A0\uD070 \uBC94\uC704' \uC544\uB798\uC5D0\uC11C 'OAuth \uBC94\uC704 \uCD94\uAC00'\uB97C \uC120\uD0DD\uD569\uB2C8\uB2E4." } },
    "supportSetupStep4": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "\uC571\uC5D0\uC11C \uBA54\uC2DC\uC9C0\uB97C \uAC8C\uC2DC\uD560 \uC218 \uC788\uB3C4\uB85D \uD558\uB824\uBA74 " }, { "t": 4, "k": "scope" }, { "t": 3, "v": " \uC2A4\uCF54\uD504\uB97C \uCD94\uAC00\uD558\uC138\uC694." }] } },
    "supportPairingHeading": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "2. Slack \uC571\uACFC \uD398\uC5B4\uB9C1" } },
    "supportPairingStep1": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC571\uC774 \uC0C8\uB85C \uC124\uCE58\uB41C \uACBD\uC6B0 '\uC124\uC815' > '\uC571 \uC124\uCE58'\uB85C \uC774\uB3D9\uD558\uC138\uC694. \uB179\uC0C9 \uBC84\uD2BC\uC744 \uD074\uB9AD\uD558\uC5EC \uC571\uC744 \uC791\uC5C5 \uACF5\uAC04\uC5D0 \uC124\uCE58\uD569\uB2C8\uB2E4." } },
    "supportPairingStep2": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "'\uBD07 \uC0AC\uC6A9\uC790 OAuth \uD1A0\uD070'\uC744 \uBCF5\uC0AC\uD558\uC5EC \uC774 \uC591\uC2DD\uC758 '\uBD07 \uC0AC\uC6A9\uC790 \uD1A0\uD070' \uD544\uB4DC\uC5D0 \uC800\uC7A5\uD558\uC138\uC694." } },
    "supportPairingStep3": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "\uB9C8\uC9C0\uB9C9\uC73C\uB85C, \uC571\uC774 \uC0C8\uB85C \uAC1C\uBC1C\uB41C \uACBD\uC6B0 Slack\uC5D0\uC11C " }, { "t": 4, "k": "command" }, { "t": 3, "v": " \uBA85\uB839\uC5B4\uB97C \uC0AC\uC6A9\uD558\uC5EC \uC6D0\uD558\uB294 \uCC44\uB110\uC5D0 \uC571\uC744 \uCD08\uB300\uD558\uC138\uC694" }] } },
    "supportSetupStep1Link": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC571 \uD398\uC774\uC9C0" } }
  },
  "slackWriteMessageServiceForm": {
    "alertMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774 \uC791\uC5C5\uC740 Slack \uC571\uACFC \uC5F0\uB3D9\uB418\uC5B4\uC57C \uD569\uB2C8\uB2E4. \uC2DC\uC791\uD558\uB824\uBA74 \uD1B5\uD569 \uD31D\uC5C5\uC758 \uAC00\uC774\uB4DC\uB97C \uB530\uB974\uC138\uC694." } },
    "integrationLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD1B5\uD569" } },
    "channelLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uCC44\uB110" } },
    "channelPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uCC44\uB110 \uC774\uB984\uC744 \uC785\uB825\uD558\uC138\uC694" } },
    "messageLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBA54\uC2DC\uC9C0" } },
    "messagePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBA54\uC2DC\uC9C0\uB97C \uC785\uB825\uD558\uC138\uC694..." } },
    "channelNoPrefix": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uCC44\uB110 \uC774\uB984 \uC55E\uC5D0 \uC788\uB294 '#'\uC744 \uC81C\uAC70\uD558\uC138\uC694." } }
  },
  "coreIterationServiceForm": {
    "source": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC18C\uC2A4" } },
    "sourcePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uCD9C\uCC98\uB97C \uC120\uD0DD\uD558\uC138\uC694..." } }
  },
  "localBaserowUpsertRowServiceForm": {
    "fieldMappingPlaceholderDuration": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC6D0\uD558\uB294 \uC2DC\uAC04 \uAC12\uC744 \uC120\uD0DD\uD558\uC138\uC694. \uC608: 1:23:40" } },
    "noTableSelectedMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD544\uB4DC\uB97C \uAD6C\uC131\uD558\uB824\uBA74 \uD14C\uC774\uBE14\uC744 \uC120\uD0DD\uD558\uC138\uC694." } },
    "noWritableFields": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774 \uD14C\uC774\uBE14\uC5D0\uB294 \uC4F0\uAE30 \uAC00\uB2A5\uD55C \uD544\uB4DC\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4." } },
    "fieldMappingPlaceholderDecimal": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC18C\uC218\uC810 \uAC12\uC744 \uC120\uD0DD\uD558\uC138\uC694. \uC608: 3.14" } },
    "fieldMappingPlaceholderArray": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBC30\uC5F4 \uAC12\uC744 \uC120\uD0DD\uD558\uC138\uC694. \uC608: [42]" } },
    "fieldMappingPlaceholderString": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBB38\uC790\uC5F4 \uAC12\uC744 \uC120\uD0DD\uD558\uC138\uC694. \uC608: 'baserow'" } },
    "fieldMappingPlaceholderNumber": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC608\uB97C \uB4E4\uC5B4 42\uC640 \uAC19\uC774 \uC22B\uC790 \uAC12\uC744 \uC120\uD0DD\uD558\uC138\uC694" } },
    "fieldMappingPlaceholderBoolean": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "true\uC640 \uAC19\uC740 \uBD80\uC6B8 \uAC12\uC744 \uC120\uD0DD\uD558\uC138\uC694" } },
    "fieldMappingPlaceholderDate": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB0A0\uC9DC \uAC12\uC744 \uC120\uD0DD\uD558\uC138\uC694. \uC608: 2025-07-25" } }
  },
  "localBaserowServiceForm": {
    "integrationDropdownLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD1B5\uD569" } },
    "rowIdLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD589 ID" } },
    "rowIdPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB2E8\uC77C \uD589 ID\uB97C \uC120\uD0DD\uD558\uC138\uC694" } }
  },
  "localBaserowFieldsUpdatedForm": {
    "fieldLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD544\uB4DC" } },
    "fieldHelper": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC6CC\uD06C\uD50C\uB85C\uB294 \uC774\uB7EC\uD55C \uD544\uB4DC \uC911 \uD558\uB098\uC758 \uAC12\uC774 \uBCC0\uACBD\uB420 \uB54C\uB9CC \uC2E4\uD589\uB429\uB2C8\uB2E4." } }
  },
  "coreCSVFileReaderServiceForm": {
    "inputType": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC18C\uC2A4" } },
    "inputTypeFile": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD30C\uC77C" } },
    "inputTypeContent": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uCF58\uD150\uCE20" } },
    "file": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "CSV \uD30C\uC77C" } },
    "filePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "CSV \uD30C\uC77C\uC744 \uC120\uD0DD\uD558\uC138\uC694..." } },
    "csv": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "CSV \uB370\uC774\uD130" } },
    "csvPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "CSV \uB370\uC774\uD130\uB97C \uC785\uB825\uD558\uC138\uC694..." } },
    "separator": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBD84\uB9AC \uAE30\uD638" } },
    "encoding": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC778\uCF54\uB529" } },
    "firstLineIsHeader": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uCCAB \uBC88\uC9F8 \uC904\uC774 \uD5E4\uB354\uC785\uB2C8\uB2E4" } },
    "comma": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uCF64\uB9C8" } },
    "semicolon": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC138\uBBF8\uCF5C\uB860" } },
    "tab": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD0ED" } },
    "pipe": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD30C\uC774\uD504" } },
    "utf8": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "UTF-8" } },
    "utf8Bom": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "UTF-8 with BOM" } },
    "latin1": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB77C\uD2F4-1" } }
  },
  "coreStartWorkflowServiceForm": {
    "automation": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC790\uB3D9" } },
    "workflow": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC6CC\uD06C\uD50C\uB85C" } },
    "workflowHelperText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC218\uB3D9 \uD2B8\uB9AC\uAC70\uAC00 \uC788\uB294 \uAC8C\uC2DC\uB41C \uC6CC\uD06C\uD50C\uB85C\uB9CC \uC2DC\uC791\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774 \uC6CC\uD06C\uD50C\uB85C\uC5D0 \uAC8C\uC2DC\uB418\uC9C0 \uC54A\uC740 \uBCC0\uACBD \uC0AC\uD56D\uC774 \uC788\uB294 \uACBD\uC6B0 \uAC00\uC7A5 \uCD5C\uADFC\uC5D0 \uAC8C\uC2DC\uB41C \uBC84\uC804\uC774 \uC2E4\uD589\uB429\uB2C8\uB2E4." } }
  },
  "localBaserowDeleteRowServiceForm": {
    "rowIdLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD589 ID" } },
    "rowIdPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD589 ID \uB610\uB294 \uD589 ID \uBC30\uC5F4\uC744 \uC120\uD0DD\uD558\uC138\uC694" } },
    "rowIdHelper": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "\uD589 ID\uB97C \uD558\uB098 \uC120\uD0DD\uD558\uAC70\uB098 \uD589 ID \uBC30\uC5F4\uC744 \uC120\uD0DD\uD558\uC138\uC694. \uD55C \uBC88\uC5D0 \uCD5C\uB300 " }, { "t": 4, "k": "limit" }, { "t": 3, "v": "\uAC1C\uC758 \uD589\uC744 \uC0AD\uC81C\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4." }] } }
  },
  "localBaserowCreateRowsServiceForm": {
    "rowsLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD589" } },
    "rowsPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD589 \uAC1D\uCCB4 \uBAA9\uB85D\uC744 \uC120\uD0DD\uD558\uC138\uC694" } },
    "rowsHelper": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "\uC774 \uC218\uC2DD\uC740 \uD589 \uAC1D\uCCB4 \uBC30\uC5F4 \uB610\uB294 \uD589 \uAC1D\uCCB4\uB85C \uD30C\uC2F1\uB418\uB294 JSON \uBB38\uC790\uC5F4\uC744 \uBC18\uD658\uD574\uC57C \uD569\uB2C8\uB2E4. \uAC1D\uCCB4 \uD0A4\uB85C\uB294 \uD544\uB4DC \uC774\uB984\uC774\uB098 \uD544\uB4DC ID\uB97C \uC0AC\uC6A9\uD558\uC138\uC694. \uD55C \uBC88\uC5D0 \uCD5C\uB300 " }, { "t": 4, "k": "limit" }, { "t": 3, "v": "\uAC1C\uC758 \uD589\uC744 \uC0DD\uC131\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4." }] } }
  },
  "localBaserowUpdateRowsServiceForm": {
    "rowsLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD589" } },
    "rowsPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "ID\uAC00 \uC788\uB294 \uD589 \uAC1D\uCCB4 \uBAA9\uB85D\uC744 \uC120\uD0DD\uD558\uC138\uC694" } },
    "rowsHelper": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "\uC774 \uC218\uC2DD\uC740 \uD589 \uAC1D\uCCB4 \uBC30\uC5F4 \uB610\uB294 \uD589 \uAC1D\uCCB4\uB85C \uD30C\uC2F1\uB418\uB294 JSON \uBB38\uC790\uC5F4\uC744 \uBC18\uD658\uD574\uC57C \uD569\uB2C8\uB2E4. \uAC01 \uAC1D\uCCB4\uC5D0\uB294 id \uC18D\uC131\uC774 \uD3EC\uD568\uB418\uC5B4\uC57C \uD569\uB2C8\uB2E4. \uAC1D\uCCB4 \uD0A4\uB85C\uB294 \uD544\uB4DC \uC774\uB984 \uB610\uB294 \uD544\uB4DC ID\uB97C \uC0AC\uC6A9\uD558\uC138\uC694. \uD55C \uBC88\uC5D0 \uCD5C\uB300 " }, { "t": 4, "k": "limit" }, { "t": 3, "v": "\uAC1C\uC758 \uD589\uC744 \uC5C5\uB370\uC774\uD2B8\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4." }] } }
  }
};

export { resource as default };
//# sourceMappingURL=ko-BXm0kAQK.mjs.map
