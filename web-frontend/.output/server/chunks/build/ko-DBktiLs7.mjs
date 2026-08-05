!(function() {
  try {
    var e = false ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
    var n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "6327934f-f6b4-4072-81ff-d73c4f42e816", e._sentryDebugIdIdentifier = "sentry-dbid-6327934f-f6b4-4072-81ff-d73c4f42e816");
  } catch (e2) {
  }
})();
const resource = {
  "dataProviderType": {
    "dataSource": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB370\uC774\uD130 \uB808\uCF54\uB4DC" } },
    "dataSourceContext": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC0AC\uC6A9 \uAC00\uB2A5\uD55C \uC635\uC158" } },
    "pageParameter": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB9E4\uAC1C\uBCC0\uC218" } },
    "currentRecord": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB370\uC774\uD130 \uC18C\uC2A4" } },
    "formData": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC591\uC2DD \uB370\uC774\uD130" } },
    "previousAction": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774\uC804 \uC791\uC5C5" } },
    "user": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC0AC\uC6A9\uC790" } }
  },
  "formDataProviderType": {
    "nodeMissing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB204\uB77D\uB428" } }
  },
  "builderForm": {
    "submit": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uCD94\uAC00" } }
  },
  "sidebarComponentBuilder": {
    "settings": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC124\uC815" } },
    "createPage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC0C8 \uD398\uC774\uC9C0" } }
  },
  "builderSettingsModal": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC560\uD50C\uB9AC\uCF00\uC774\uC158" } }
  },
  "builderSettingTypes": {
    "generalName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC77C\uBC18" } },
    "integrationsName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD1B5\uD569" } },
    "themeName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD14C\uB9C8" } },
    "domainsName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB3C4\uBA54\uC778" } },
    "userSourcesName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC0AC\uC6A9\uC790" } }
  },
  "createPageModal": {
    "header": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD398\uC774\uC9C0 \uC0DD\uC131" } },
    "submit": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD398\uC774\uC9C0 \uCD94\uAC00" } }
  },
  "pageErrors": {
    "errorNameNotUnique": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774 \uC774\uB984\uC758 \uD398\uC774\uC9C0\uAC00 \uC774\uBBF8 \uC874\uC7AC\uD569\uB2C8\uB2E4" } },
    "errorPathNotUnique": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774 \uC774\uB984\uC758 \uACBD\uB85C\uAC00 \uC774\uBBF8 \uC874\uC7AC\uD569\uB2C8\uB2E4" } },
    "errorStartingSlash": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uACBD\uB85C\uB294 '/'\uB85C \uC2DC\uC791\uD574\uC57C \uD569\uB2C8\uB2E4" } },
    "errorValidPathCharacters": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uACBD\uB85C\uC5D0 \uC798\uBABB\uB41C \uBB38\uC790\uAC00 \uD3EC\uD568\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4" } },
    "errorUniquePathParams": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uACBD\uB85C \uB9E4\uAC1C\uBCC0\uC218\uB294 \uACE0\uC720\uD574\uC57C \uD569\uB2C8\uB2E4." } },
    "errorUniqueValidQueryParams": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uCFFC\uB9AC \uB9E4\uAC1C\uBCC0\uC218 \uC774\uB984\uC740 \uACE0\uC720\uD558\uACE0 \uC720\uD6A8\uD574\uC57C \uD569\uB2C8\uB2E4." } },
    "errorNameNotUniqueDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD398\uC774\uC9C0\uC5D0 \uACE0\uC720\uD55C \uC774\uB984\uC744 \uC785\uB825\uD574 \uC8FC\uC138\uC694" } }
  },
  "pageHeaderItemTypes": {
    "labelElements": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC694\uC18C" } },
    "labelDataSource": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB370\uC774\uD130" } },
    "labelVariables": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBCC0\uC218" } },
    "labelSettings": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD398\uC774\uC9C0 \uC124\uC815" } }
  },
  "pageActionTypes": {
    "preview": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBBF8\uB9AC\uBCF4\uAE30" } },
    "publish": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAC8C\uC2DC" } }
  },
  "publishActionModal": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAC8C\uC2DC" } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB3C4\uBA54\uC778 \uC911 \uD558\uB098\uC5D0 \uAC8C\uC2DC\uD558\uC5EC \uC571\uC744 \uB77C\uC774\uBE0C\uB85C \uB9CC\uB4DC\uC138\uC694. \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC740 \uC5EC\uB7EC \uB3C4\uBA54\uC778\uC744 \uAC00\uC9C8 \uC218 \uC788\uC73C\uBA70, \uAC01 \uB3C4\uBA54\uC778\uB9C8\uB2E4 \uB2E4\uB978 \uBC84\uC804\uC758 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC744 \uC2E4\uD589\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4." } },
    "publish": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAC8C\uC2DC" } },
    "publishSucceedTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC0AC\uC774\uD2B8 \uAC8C\uC2DC\uB428" } },
    "publishSucceedDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC0AC\uC774\uD2B8\uAC00 \uC131\uACF5\uC801\uC73C\uB85C \uAC8C\uC2DC\uB418\uC5C8\uC2B5\uB2C8\uB2E4." } },
    "publishFailedTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC0AC\uC774\uD2B8 \uAC8C\uC2DC \uC2E4\uD328" } },
    "publishFailedDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC0AC\uC774\uD2B8 \uAC8C\uC2DC\uC5D0 \uC2E4\uD328\uD588\uC2B5\uB2C8\uB2E4. \uB098\uC911\uC5D0 \uB2E4\uC2DC \uC2DC\uB3C4\uD558\uC138\uC694." } },
    "openInNewTab": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC0C8 \uD0ED\uC5D0\uC11C \uC5F4\uAE30" } },
    "importingState": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAC00\uC838\uC624\uB294 \uC911" } },
    "noDomain": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC744 \uAC8C\uC2DC\uD558\uB824\uBA74 \uCD5C\uC18C \uD558\uB098\uC758 \uB3C4\uBA54\uC778\uC774 \uD544\uC694\uD569\uB2C8\uB2E4." } },
    "publishSucceedLink": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC0AC\uC774\uD2B8 \uBCF4\uAE30" } },
    "addDomain": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB3C4\uBA54\uC778 \uCD94\uAC00" } }
  },
  "lastPublishedDomainDate": {
    "neverPublished": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAC8C\uC2DC\uB418\uC9C0 \uC54A\uC74C" } },
    "lastPublished": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB9C8\uC9C0\uB9C9 \uAC8C\uC2DC:" } }
  },
  "elementsContext": {
    "searchPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC694\uC18C \uAC80\uC0C9" } },
    "noElements": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC694\uC18C\uB97C \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4" } },
    "noPageElements": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774 \uD398\uC774\uC9C0\uC5D0 \uB300\uD55C \uC694\uC18C\uAC00 \uBC1C\uACAC\uB418\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4" } }
  },
  "elementType": {
    "heading": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC81C\uBAA9" } },
    "headingDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD398\uC774\uC9C0 \uC81C\uBAA9" } },
    "text": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD14D\uC2A4\uD2B8" } },
    "textDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC5EC\uB7EC \uC904\uC758 \uD14D\uC2A4\uD2B8" } },
    "link": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB9C1\uD06C" } },
    "linkDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD398\uC774\uC9C0/URL\uB85C\uC758 \uB9C1\uD06C" } },
    "image": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774\uBBF8\uC9C0" } },
    "imageDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774\uBBF8\uC9C0 \uD45C\uC2DC" } },
    "inputText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB370\uC774\uD130 \uC785\uB825" } },
    "inputTextDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB370\uC774\uD130 \uC785\uB825 \uD544\uB4DC" } },
    "column": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC5F4" } },
    "columnDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC5F4 \uCEE8\uD14C\uC774\uB108" } },
    "button": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBC84\uD2BC" } },
    "buttonDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBC84\uD2BC \uC694\uC18C" } },
    "table": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD14C\uC774\uBE14" } },
    "tableDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD14C\uC774\uBE14 \uC694\uC18C" } },
    "formContainer": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC591\uC2DD" } },
    "formContainerDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC591\uC2DD \uC694\uC18C" } },
    "choice": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC120\uD0DD" } },
    "choiceDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB2E8\uC77C/\uB2E4\uC911 \uAC12 \uC120\uD0DD" } },
    "checkbox": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uCCB4\uD06C\uBC15\uC2A4" } },
    "checkboxDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uCCB4\uD06C\uBC15\uC2A4 \uC694\uC18C" } },
    "iframe": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC544\uC774\uD504\uB808\uC784" } },
    "iframeDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC778\uB77C\uC778 \uD504\uB808\uC784" } },
    "authForm": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB85C\uADF8\uC778 \uC591\uC2DD" } },
    "authFormDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC0AC\uC6A9\uC790 \uB85C\uADF8\uC778 \uC591\uC2DD" } },
    "repeat": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBC18\uBCF5" } },
    "repeatDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBC18\uBCF5 \uAC00\uB2A5\uD55C \uC694\uC18C \uC9D1\uD569" } },
    "recordSelector": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB808\uCF54\uB4DC \uC120\uD0DD\uAE30" } },
    "recordSelectorDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAD00\uB828 \uB808\uCF54\uB4DC \uC120\uD0DD\uAE30" } },
    "header": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB2E4\uC911 \uD398\uC774\uC9C0 \uD5E4\uB354" } },
    "footer": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB2E4\uC911 \uD398\uC774\uC9C0 \uBC14\uB2E5\uAE00" } },
    "notAllowedUnlessTop": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774 \uC694\uC18C\uB294 \uD398\uC774\uC9C0 \uC0C1\uB2E8\uC5D0\uB9CC \uD5C8\uC6A9\uB429\uB2C8\uB2E4" } },
    "notAllowedUnlessBottom": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774 \uC694\uC18C\uB294 \uD398\uC774\uC9C0 \uD558\uB2E8\uC5D0\uB9CC \uD5C8\uC6A9\uB429\uB2C8\uB2E4" } },
    "notAllowedUnlessHeader": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774 \uC694\uC18C\uB294 \uD398\uC774\uC9C0 \uD5E4\uB354 \uB0B4\uBD80\uC5D0\uB9CC \uD5C8\uC6A9\uB429\uB2C8\uB2E4" } },
    "notAllowedInsideContainer": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774 \uC694\uC18C\uB294 \uCEE8\uD14C\uC774\uB108 \uB0B4\uBD80\uC5D0 \uD5C8\uC6A9\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4" } },
    "dateTimePickerDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB0A0\uC9DC \uBC0F \uC2DC\uAC04 \uC785\uB825 \uD544\uB4DC" } },
    "dateTimePicker": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB0A0\uC9DC \uC2DC\uAC04 \uC120\uD0DD\uAE30" } },
    "footerDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC5EC\uB7EC \uD398\uC774\uC9C0\uC5D0\uC11C \uACF5\uC720\uB418\uB294 \uCEE8\uD14C\uC774\uB108" } },
    "headerDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC5EC\uB7EC \uD398\uC774\uC9C0\uC5D0\uC11C \uACF5\uC720\uB418\uB294 \uCEE8\uD14C\uC774\uB108" } },
    "notAllowedUnlessFooter": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774 \uC694\uC18C\uB294 \uD398\uC774\uC9C0 \uBC14\uB2E5\uAE00 \uB0B4\uBD80\uC5D0\uB9CC \uD5C8\uC6A9\uB429\uB2C8\uB2E4" } },
    "notAllowedInsideSameType": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774 \uC694\uC18C\uB294 \uB3D9\uC77C\uD55C \uC720\uD615\uC758 \uCEE8\uD14C\uC774\uB108\uC5D0\uC11C \uD5C8\uC6A9\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4" } },
    "notAllowedLocation": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774 \uC704\uCE58\uC5D0\uC11C\uB294 \uC774 \uC694\uC18C\uAC00 \uD5C8\uC6A9\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4" } },
    "menu": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBA54\uB274" } },
    "menuDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBA54\uB274 \uC694\uC18C" } },
    "simpleContainer": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uCEE8\uD14C\uC774\uB108" } },
    "simpleContainerDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB2E4\uB978 \uC694\uC18C\uB97C \uC704\uD55C \uCEE8\uD14C\uC774\uB108" } },
    "ratingInput": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD3C9\uAC00 \uC785\uB825" } },
    "rating": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD3C9\uAC00" } },
    "invalidElementValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "\uC798\uBABB\uB41C \uC694\uC18C \uAC12: " }, { "t": 4, "k": "value" }] } },
    "ratingDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD3C9\uAC00 \uC694\uC18C" } },
    "ratingInputDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD3C9\uAC00 \uC785\uB825 \uC694\uC18C" } },
    "fileInput": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD30C\uC77C \uC120\uD0DD" } },
    "fileInputDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD30C\uC77C\uC744 \uC5C5\uB85C\uB4DC\uD558\uAE30 \uC704\uD55C \uC785\uB825\uB780" } },
    "errorValueMissing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB204\uB77D\uB41C \uAC12 \uC18D\uC131" } },
    "errorEmptyContainer": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774 \uCEE8\uD14C\uC774\uB108\uB294 \uBE44\uC5B4 \uC788\uC2B5\uB2C8\uB2E4" } },
    "errorParentWithDataSourceMissing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC694\uC18C \uB610\uB294 \uBD80\uBAA8 \uCEE8\uD14C\uC774\uB108\uC5D0\uC11C \uC120\uD0DD\uB41C \uB370\uC774\uD130 \uC18C\uC2A4\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4" } },
    "errorDataSourceMissing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC120\uD0DD\uB41C \uB370\uC774\uD130 \uC18C\uC2A4\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4" } },
    "errorSchemaPropertyMissing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC2A4\uD0A4\uB9C8 \uC18D\uC131\uC774 \uC120\uD0DD\uB418\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4" } },
    "errorWorkflowActionInError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC801\uC5B4\uB3C4 \uD558\uB098\uC758 \uC791\uC5C5\uC774 \uC798\uBABB \uAD6C\uC131\uB418\uC5C8\uC2B5\uB2C8\uB2E4" } },
    "errorCollectionFieldInError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC801\uC5B4\uB3C4 \uD558\uB098\uC758 \uD544\uB4DC\uAC00 \uC798\uBABB \uAD6C\uC131\uB418\uC5C8\uC2B5\uB2C8\uB2E4" } },
    "errorNavigateToPageMissing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774\uB3D9 \uC18D\uC131\uC774 \uB204\uB77D\uB418\uC5C8\uC2B5\uB2C8\uB2E4" } },
    "errorPageParameterInError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD558\uB098 \uC774\uC0C1\uC758 \uD398\uC774\uC9C0 \uB9E4\uAC1C\uBCC0\uC218\uAC00 \uC798\uBABB \uAD6C\uC131\uB418\uC5C8\uC2B5\uB2C8\uB2E4" } },
    "errorNavigationUrlMissing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB124\uBE44\uAC8C\uC774\uC158 URL \uC18D\uC131\uC774 \uC5C6\uC2B5\uB2C8\uB2E4" } },
    "errorImageFileMissing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774\uBBF8\uC9C0 \uD30C\uC77C\uC774 \uC5C6\uC2B5\uB2C8\uB2E4" } },
    "errorImageUrlMissing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774\uBBF8\uC9C0 URL \uC18D\uC131\uC774 \uB204\uB77D\uB418\uC5C8\uC2B5\uB2C8\uB2E4" } },
    "errorNoWorkflowAction": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC6CC\uD06C\uD50C\uB85C \uC791\uC5C5\uC774 \uAD6C\uC131\uB418\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4" } },
    "errorOptionsMissing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC635\uC158\uC774 \uAD6C\uC131\uB418\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4" } },
    "errorIframeUrlMissing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "IFrame URL \uC18D\uC131\uC774 \uC5C6\uC2B5\uB2C8\uB2E4" } },
    "errorIframeContentMissing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "IFrame \uCF58\uD150\uCE20\uAC00 \uB204\uB77D\uB418\uC5C8\uC2B5\uB2C8\uB2E4" } },
    "errorNoMenuItem": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBA54\uB274 \uD56D\uBAA9\uC774 \uAD6C\uC131\uB418\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4" } },
    "errorMenuItemInError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uCD5C\uC18C\uD55C \uD558\uB098\uC758 \uBA54\uB274\uAC00 \uC798\uBABB \uAD6C\uC131\uB418\uC5C8\uC2B5\uB2C8\uB2E4" } },
    "errorSubMenuItemInError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC801\uC5B4\uB3C4 \uD558\uB098\uC758 \uD558\uC704 \uBA54\uB274\uAC00 \uC798\uBABB \uAD6C\uC131\uB418\uC5C8\uC2B5\uB2C8\uB2E4" } }
  },
  "addElementButton": {
    "label": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC694\uC18C" } }
  },
  "addElementModal": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC0C8 \uC694\uC18C \uCD94\uAC00" } },
    "searchPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC694\uC18C \uAC80\uC0C9" } },
    "disabledElementTooltip": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774 \uC694\uC18C \uB0B4\uC5D0\uC11C\uB294 \uC0AC\uC6A9\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4" } },
    "elementInProgress": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC694\uC18C\uB97C \uCD94\uAC00\uD558\uB294 \uC911..." } }
  },
  "elementMenu": {
    "moveUp": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC704\uB85C \uC774\uB3D9" } },
    "moveDown": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC544\uB798\uB85C \uC774\uB3D9" } },
    "moveLeft": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC67C\uCABD\uC73C\uB85C \uC774\uB3D9" } },
    "moveRight": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC624\uB978\uCABD\uC73C\uB85C \uC774\uB3D9" } },
    "selectParent": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBD80\uBAA8 \uC120\uD0DD" } },
    "drag": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB4DC\uB798\uADF8\uD558\uC5EC \uC21C\uC11C\uB97C \uBCC0\uACBD\uD558\uC138\uC694" } }
  },
  "duplicatePageJobType": {
    "duplicating": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBCF5\uC81C \uC911" } },
    "duplicatedTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD398\uC774\uC9C0 \uBCF5\uC81C\uB428" } },
    "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD398\uC774\uC9C0 \uBCF5\uC81C" } }
  },
  "pageSidePanelType": {
    "general": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC77C\uBC18" } },
    "style": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC2A4\uD0C0\uC77C" } },
    "visibility": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uACF5\uAC1C\uC5EC\uBD80" } },
    "events": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774\uBCA4\uD2B8" } },
    "eventsTabDeactivatedNoEvents": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774 \uC694\uC18C\uB294 \uC774\uBCA4\uD2B8\uB97C \uC9C0\uC6D0\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4" } },
    "eventsTabInError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD558\uB098 \uC774\uC0C1\uC758 \uC791\uC5C5\uC774 \uC798\uBABB \uAD6C\uC131\uB418\uC5C8\uC2B5\uB2C8\uB2E4." } }
  },
  "emptySidePanelState": {
    "message": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB354 \uC790\uC138\uD55C \uC815\uBCF4\uB97C \uBCF4\uB824\uBA74 \uC694\uC18C \uC911 \uD558\uB098\uB97C \uD074\uB9AD\uD558\uC138\uC694" } }
  },
  "pagePreview": {
    "emptyMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uCCAB \uBC88\uC9F8 \uC694\uC18C\uB97C \uC0DD\uC131\uD558\uB824\uBA74 \uD074\uB9AD\uD558\uC138\uC694" } },
    "footer": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD478\uD130" } },
    "header": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD5E4\uB354" } }
  },
  "elementForms": {
    "textInputPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD14D\uC2A4\uD2B8 \uC785\uB825..." } },
    "urlInputPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "URL \uC785\uB825..." } },
    "invalidFormula": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC218\uC2DD\uC774 \uC720\uD6A8\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4" } }
  },
  "headingElement": {
    "missingValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC81C\uBAA9 \uC5C6\uC74C..." } },
    "emptyValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBE48 \uC81C\uBAA9..." } }
  },
  "headingElementForm": {
    "levelTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB808\uBCA8" } },
    "textTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD14D\uC2A4\uD2B8" } },
    "textPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD14D\uC2A4\uD2B8 \uC785\uB825..." } },
    "headingName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "\uC81C\uBAA9 " }, { "t": 4, "k": "level" }, { "t": 3, "v": " <h" }, { "t": 4, "k": "level" }, { "t": 3, "v": ">" }] } },
    "textError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAC12\uC774 \uC720\uD6A8\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4." } }
  },
  "textElement": {
    "missingValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD14D\uC2A4\uD2B8 \uC5C6\uC74C..." } },
    "emptyValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBE48 \uD14D\uC2A4\uD2B8..." } }
  },
  "textElementForm": {
    "textTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD14D\uC2A4\uD2B8" } },
    "textPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD14D\uC2A4\uD2B8 \uC785\uB825..." } },
    "textError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAC12\uC774 \uC720\uD6A8\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4." } },
    "textFormatTypeLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD615\uC2DD" } },
    "textFormatTypePlain": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC77C\uBC18 \uD14D\uC2A4\uD2B8" } },
    "textFormatTypeMarkdown": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB9C8\uD06C\uB2E4\uC6B4" } }
  },
  "imageElement": {
    "missingValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB300\uCCB4 \uD14D\uC2A4\uD2B8 \uC5C6\uC74C..." } },
    "emptyValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBE48 \uB300\uCCB4 \uD14D\uC2A4\uD2B8..." } }
  },
  "generalForm": {
    "labelTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD45C\uC2DC" } },
    "labelPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD45C\uC2DC\uBA85 \uC785\uB825" } },
    "valueTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAC12" } },
    "valuePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAC12 \uC785\uB825" } },
    "placeholderTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD50C\uB808\uC774\uC2A4\uD640\uB354" } },
    "placeholderPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC608\uC2DC \uBB38\uAD6C \uC785\uB825" } },
    "requiredTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD544\uC218" } },
    "validationTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC720\uD6A8\uC131 \uAC80\uC0AC" } },
    "defaultValueTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAE30\uBCF8\uAC12" } },
    "defaultValuePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAE30\uBCF8\uAC12 \uC785\uB825" } }
  },
  "inputTextElementForm": {
    "multilineTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC5EC\uB7EC \uC904" } },
    "rowsTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC904 \uC218" } },
    "rowsPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774 \uC785\uB825\uC758 \uC904 \uC218 \uC785\uB825" } },
    "validationTypeAnyLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBB34\uC5C7\uC774\uB4E0" } },
    "validationTypeAnyDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774 \uC785\uB825\uC5D0 \uC5B4\uB5A4 \uAC12\uC774\uB4E0 \uC124\uC815\uD560 \uC218 \uC788\uB3C4\uB85D \uD5C8\uC6A9\uD569\uB2C8\uB2E4." } },
    "validationTypeIntegerLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC22B\uC790" } },
    "validationTypeIntegerDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774 \uC785\uB825\uB780\uC5D0\uB294 \uC22B\uC790\uB9CC \uC785\uB825\uD560 \uC218 \uC788\uB3C4\uB85D \uC81C\uD55C\uD569\uB2C8\uB2E4(\uC815\uC218\uC640 \uC18C\uC218 \uBAA8\uB450 \uD5C8\uC6A9)." } },
    "validationTypeEmailLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774\uBA54\uC77C" } },
    "validationTypeEmailDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774 \uC785\uB825\uC5D0 \uC774\uBA54\uC77C \uC8FC\uC18C \uAC12\uC744 \uC801\uC6A9\uD569\uB2C8\uB2E4." } },
    "inputType": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC785\uB825 \uC720\uD615" } },
    "inputTypeTextLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD14D\uC2A4\uD2B8" } },
    "inputTypePasswordLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBE44\uBC00\uBC88\uD638" } },
    "passwordTypeWarning": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBE44\uBC00\uBC88\uD638\uB294 \uBBFC\uAC10\uD55C \uB370\uC774\uD130\uC785\uB2C8\uB2E4. \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0\uC11C \uBE44\uBC00\uBC88\uD638\uB97C \uCC98\uB9AC\uD558\uACE0 \uC800\uC7A5\uD558\uB294 \uBC29\uBC95\uC5D0 \uC8FC\uC758\uD558\uC138\uC694." } }
  },
  "imageElementForm": {
    "fileLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774\uBBF8\uC9C0" } },
    "invalidUrlError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "URL\uC774 \uC720\uD6A8\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4" } },
    "altTextTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB300\uCCB4 \uD14D\uC2A4\uD2B8" } },
    "altTextDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC2A4\uD06C\uB9B0 \uB9AC\uB354\uC5D0\uC11C \uC0AC\uC6A9\uB418\uBA70 \uC774\uBBF8\uC9C0\uB97C \uB85C\uB4DC\uD560 \uC218 \uC5C6\uB294 \uACBD\uC6B0 \uD45C\uC2DC\uB429\uB2C8\uB2E4" } },
    "fileSourceTypeUpload": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC5C5\uB85C\uB4DC" } },
    "fileSourceTypeURL": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "URL" } },
    "urlWarning": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uCC38\uACE0: \uC785\uB825\uD558\uC2E0 URL\uC744 \uC9C1\uC811 \uAD00\uB9AC\uD558\uC2DC\uAC70\uB098 \uC2E0\uB8B0\uD560 \uC218 \uC788\uB294 \uC0AC\uC774\uD2B8\uC778\uC9C0 \uD655\uC778\uD574 \uC8FC\uC2ED\uC2DC\uC624." } },
    "uploadFileButton": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD30C\uC77C \uC5C5\uB85C\uB4DC" } }
  },
  "iframeElementForm": {
    "missingValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "IFrame \uC18C\uC2A4 \uC5C6\uC74C..." } },
    "emptyValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBE48 IFrame \uC18C\uC2A4..." } },
    "sourceTypeLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC18C\uC2A4 \uC720\uD615" } },
    "urlLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "URL" } },
    "urlPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC0BD\uC785\uD560 \uC678\uBD80 \uB9AC\uC18C\uC2A4\uC758 \uB9C1\uD06C" } },
    "urlHelp": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uCC38\uACE0: \uC785\uB825\uD558\uC2E0 URL\uC744 \uC9C1\uC811 \uAD00\uB9AC\uD558\uC2DC\uAC70\uB098 \uC2E0\uB8B0\uD560 \uC218 \uC788\uB294 \uC0AC\uC774\uD2B8\uC778\uC9C0 \uD655\uC778\uD574 \uC8FC\uC2ED\uC2DC\uC624." } },
    "embedLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC784\uBCA0\uB4DC" } },
    "embedPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC0BD\uC785\uD560 \uC6D0\uC2DC HTML \uCF58\uD150\uCE20" } },
    "heightLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB192\uC774 (px)" } },
    "heightPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uCD5C\uB300 \uB192\uC774 \uC785\uB825" } }
  },
  "columnElementForm": {
    "columnAmountTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB808\uC774\uC544\uC6C3" } },
    "verticalAlignment": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC218\uC9C1 \uC815\uB82C" } },
    "columnAmountName": { "t": 0, "b": { "t": 1, "c": [{ "t": 2, "i": [{ "t": 3 }], "s": "\uC5F4 \uC5C6\uC74C" }, { "t": 2, "i": [{ "t": 3 }], "s": "1\uC5F4" }, { "t": 2, "i": [{ "t": 4, "k": "columnAmount" }, { "t": 3, "v": "\uC5F4" }] }] } },
    "columnGapTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC5F4 \uC0AC\uC774 \uAC04\uACA9" } },
    "columnGapPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC5F4 \uC0AC\uC774 \uAC04\uACA9 \uC785\uB825..." } },
    "customLayout": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uCEE4\uC2A4\uD140" } },
    "customWeightsTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC0AC\uC6A9\uC790 \uC9C0\uC815 \uC5F4 \uAC00\uC911\uCE58" } },
    "customWeightsHelper": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC5F4\uC758 \uB108\uBE44\uB97C \uB0B4\uC6A9\uC758 \uB108\uBE44\uB9CC\uD07C\uB9CC \uC720\uC9C0\uD558\uB824\uBA74 0\uC744 \uC0AC\uC6A9\uD558\uC2ED\uC2DC\uC624. \uB098\uBA38\uC9C0 \uACF5\uAC04\uC740 \uB2E4\uB978 \uC5F4\uACFC \uACF5\uC720\uB429\uB2C8\uB2E4." } },
    "errorCustomWeightsMinimum": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC5F4 \uAC00\uC911\uCE58\uB294 0 \uC774\uC0C1\uC774\uC5B4\uC57C \uD569\uB2C8\uB2E4" } },
    "columnStackingTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAE30\uAE30 \uC720\uD615\uBCC4\uB85C \uC5F4\uC744 \uC313\uC73C\uC138\uC694" } },
    "columnStackingHorizontal": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB098\uB780\uD788" } },
    "columnStackingStacked": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC313\uC778" } }
  },
  "domainSettings": {
    "titleOverview": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB3C4\uBA54\uC778" } },
    "titleAddDomain": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB3C4\uBA54\uC778 \uCD94\uAC00" } },
    "addDomain": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB3C4\uBA54\uC778 \uCD94\uAC00" } },
    "noDomainMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0 \uB3C4\uBA54\uC778\uC744 \uC544\uC9C1 \uC5F0\uACB0\uD558\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4. \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC744 \uAC8C\uC2DC\uD558\uB824\uBA74 \uB3C4\uBA54\uC778\uC744 \uCD94\uAC00\uD574\uC57C \uD569\uB2C8\uB2E4. \uC5EC\uAE30 \uB098\uC5F4\uB41C \uAC01 \uB3C4\uBA54\uC778\uC5D0 \uB300\uD574 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC758 \uB2E4\uB978 \uBC84\uC804\uC744 \uAC8C\uC2DC\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4." } }
  },
  "userSourceSettings": {
    "titleAddUserSource": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC0C8 \uC0AC\uC6A9\uC790 \uC18C\uC2A4" } },
    "titleUpdateUserSource": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC0AC\uC6A9\uC790 \uC18C\uC2A4 \uD3B8\uC9D1" } },
    "noUserSourceMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0 \uC0AC\uC6A9\uC790 \uC18C\uC2A4\uB97C \uC544\uC9C1 \uCD94\uAC00\uD558\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4. \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0\uC11C \uC0AC\uC6A9\uC790\uAC00 \uC778\uC99D\uD560 \uC218 \uC788\uB3C4\uB85D \uD558\uB824\uBA74 \uC0AC\uC6A9\uC790 \uC18C\uC2A4\uB97C \uCD94\uAC00\uD574\uC57C \uD569\uB2C8\uB2E4." } },
    "titleOverview": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC0AC\uC6A9\uC790 \uC18C\uC2A4" } },
    "addUserSource": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC0AC\uC6A9\uC790 \uC18C\uC2A4 \uCD94\uAC00" } }
  },
  "generalSettings": {
    "titleOverview": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC77C\uBC18" } },
    "labelForm": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD30C\uBE44\uCF58" } },
    "labelDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "128x128px ICO, PNG, GIF \uB610\uB294 JPEG\uB97C \uC120\uD0DD\uD558\uC138\uC694." } },
    "labelButton": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD30C\uBE44\uCF58 \uC5C5\uB85C\uB4DC" } },
    "cantUploadFaviconTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD30C\uBE44\uCF58 \uD30C\uC77C\uC744 \uC5C5\uB85C\uB4DC\uD560 \uC218 \uC5C6\uC74C" } },
    "cantUploadFaviconDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC8C4\uC1A1\uD569\uB2C8\uB2E4, \uD30C\uBE44\uCF58 \uC774\uBBF8\uC9C0\uB97C \uC5C5\uB85C\uB4DC\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4. \uC774\uBBF8\uC9C0 \uD30C\uC77C\uC774 \uACE0\uC720\uD558\uACE0 \uC9C0\uC6D0\uB418\uB294 \uC774\uBBF8\uC9C0 \uD615\uC2DD\uC778\uC9C0 \uD655\uC778\uD558\uC138\uC694." } },
    "cantUpdateApplicationTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC744 \uC5C5\uB370\uC774\uD2B8\uD560 \uC218 \uC5C6\uC74C" } },
    "cantUpdateApplicationDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC8C4\uC1A1\uD569\uB2C8\uB2E4, \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC744 \uC5C5\uB370\uC774\uD2B8\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4." } }
  },
  "dnsStatus": {
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB3C4\uBA54\uC778\uC758 DNS \uC124\uC815\uC73C\uB85C \uC774\uB3D9\uD558\uC5EC \uB2E4\uC74C \uBCC0\uACBD\uC744 \uC218\uD589\uD558\uC138\uC694" } },
    "typeHeader": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC720\uD615" } },
    "hostHeader": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD638\uC2A4\uD2B8" } },
    "valueHeader": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAC12" } }
  },
  "domainForm": {
    "invalidDomain": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC81C\uACF5\uB41C \uB3C4\uBA54\uC778 \uC774\uB984\uC774 \uC720\uD6A8\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4" } },
    "notUniqueDomain": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC81C\uACF5\uB41C \uB3C4\uBA54\uC778\uC774 \uC774\uBBF8 \uC0AC\uC6A9 \uC911\uC785\uB2C8\uB2E4" } }
  },
  "customDomainForm": {
    "domainNameLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB3C4\uBA54\uC778 \uC774\uB984" } }
  },
  "subDomainForm": {
    "domainNameLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB3C4\uBA54\uC778 \uC774\uB984" } }
  },
  "subDomainDetails": {
    "text": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB3C4\uBA54\uC778\uC758 DNS \uC124\uC815\uC774 \uC774\uBBF8 \uAD6C\uC131\uB418\uACE0 \uD655\uC778\uB418\uC5C8\uC2B5\uB2C8\uB2E4. \uCD94\uAC00 \uBCC0\uACBD \uC5C6\uC774 \uC791\uB3D9\uD569\uB2C8\uB2E4." } }
  },
  "domainCard": {
    "refresh": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC124\uC815 \uC0C8\uB85C \uACE0\uCE68" } },
    "detailLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC138\uBD80 \uC815\uBCF4 \uD45C\uC2DC" } },
    "unpublishedDomainWarning": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774 \uB3C4\uBA54\uC778\uC5D0\uC11C \uC0AC\uC6A9\uD560 \uC218 \uC788\uB3C4\uB85D \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC744 \uAC8C\uC2DC\uD558\uC138\uC694." } }
  },
  "domainTypes": {
    "customName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC0AC\uC6A9\uC790 \uC815\uC758 \uB3C4\uBA54\uC778" } },
    "subDomainName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC11C\uBE0C\uB3C4\uBA54\uC778" } },
    "subDomain": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "domain" }, { "t": 3, "v": "\uC758 \uC11C\uBE0C\uB3C4\uBA54\uC778" }] } }
  },
  "linkElement": {
    "missingValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB9C1\uD06C \uD14D\uC2A4\uD2B8 \uC5C6\uC74C..." } },
    "emptyValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBE48 \uB9C1\uD06C \uD14D\uC2A4\uD2B8..." } }
  },
  "linkNavigationSelection": {
    "navigateTo": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774\uB3D9 \uB300\uC0C1" } },
    "navigateToCustom": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC0AC\uC6A9\uC790 \uC815\uC758 URL" } },
    "paramPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAC12 \uC785\uB825..." } },
    "urlPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "URL \uC785\uB825..." } },
    "url": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBAA9\uC801\uC9C0 URL" } },
    "paramsInErrorDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC800\uC7A5\uB41C \uB9E4\uAC1C\uBCC0\uC218\uAC00 \uD398\uC774\uC9C0 \uB9E4\uAC1C\uBCC0\uC218\uC640 \uC77C\uCE58\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uD398\uC774\uC9C0\uAC00 \uC0AD\uC81C\uB418\uC5C8\uAC70\uB098 \uC5C5\uB370\uC774\uD2B8\uB418\uC5C8\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4." } },
    "paramsInErrorButton": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB9E4\uAC1C\uBCC0\uC218 \uC5C5\uB370\uC774\uD2B8" } },
    "target": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC5EC\uB294 \uC704\uCE58\uB294..." } },
    "targetSelf": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD604\uC7AC \uD0ED" } },
    "targetNewTab": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC0C8 \uD0ED" } }
  },
  "linkElementForm": {
    "text": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD14D\uC2A4\uD2B8" } },
    "textPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD14D\uC2A4\uD2B8 \uC785\uB825..." } },
    "variant": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBCC0\uD658" } },
    "variantLink": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB9C1\uD06C" } },
    "variantButton": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBC84\uD2BC" } },
    "buttonColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBC84\uD2BC \uC0C9\uC0C1" } }
  },
  "widthSelector": {
    "width": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB108\uBE44" } },
    "widthAuto": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC790\uB3D9" } },
    "widthFull": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC804\uCCB4 \uB108\uBE44" } }
  },
  "backgroundTypes": {
    "none": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC5C6\uC74C" } },
    "color": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC0C9\uC0C1" } }
  },
  "widthTypes": {
    "fullBleed": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC804\uCCB4 \uD3ED" } },
    "fullWidth": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC804\uCCB4 \uB108\uBE44" } },
    "normal": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBCF4\uD1B5" } },
    "medium": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC911\uAC04" } },
    "small": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC791\uAC8C" } }
  },
  "horizontalAlignmentSelector": {
    "alignmentLeft": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC67C\uCABD" } },
    "alignmentCenter": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAC00\uC6B4\uB370" } },
    "alignmentRight": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC624\uB978\uCABD" } }
  },
  "verticalAlignmentSelector": {
    "alignmentTop": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC0C1\uB2E8" } },
    "alignmentCenter": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC911\uAC04" } },
    "alignmentBottom": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD558\uB2E8" } }
  },
  "pageSettingsTypes": {
    "pageName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD398\uC774\uC9C0" } }
  },
  "pageSettings": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD398\uC774\uC9C0" } },
    "pageUpdatedTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBCC0\uACBD\uB428" } },
    "pageUpdatedDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD398\uC774\uC9C0 \uC124\uC815\uC774 \uC5C5\uB370\uC774\uD2B8\uB418\uC5C8\uC2B5\uB2C8\uB2E4." } }
  },
  "pageForm": {
    "defaultName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD398\uC774\uC9C0" } },
    "nameTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774\uB984" } },
    "nameSubtitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD398\uC774\uC9C0\uC758 \uACE0\uC720\uD55C \uC774\uB984" } },
    "namePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774\uB984 \uC785\uB825..." } },
    "pathTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uACBD\uB85C" } },
    "pathSubtitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": ":parameter\uB97C \uD1B5\uD574 \uB9E4\uAC1C\uBCC0\uC218\uB97C \uCD94\uAC00\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4" } },
    "pathPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uACBD\uB85C \uC785\uB825..." } },
    "pathParamsTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uACBD\uB85C \uB9E4\uAC1C\uBCC0\uC218" } },
    "pathParamsSubtitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uACBD\uB85C\uC758 :parameter\uB85C \uC815\uC758\uB429\uB2C8\uB2E4" } },
    "pathParamsSubtitleTutorial": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uACBD\uB85C \uB9E4\uAC1C\uBCC0\uC218\uB294 \uC81C\uACF5\uB41C \uB9E4\uAC1C\uBCC0\uC218\uC5D0 \uB530\uB77C \uB370\uC774\uD130\uB97C \uB3D9\uC801\uC73C\uB85C \uB85C\uB4DC\uD558\uB294 \uB370 \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uACBD\uB85C\uC5D0 :parameter\uB97C \uCD94\uAC00\uD558\uC5EC \uD558\uB098\uB97C \uCD94\uAC00\uD558\uC138\uC694." } },
    "addParameter": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uCFFC\uB9AC \uBB38\uC790\uC5F4 \uB9E4\uAC1C\uBCC0\uC218 \uCD94\uAC00" } },
    "queryParamsTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uCFFC\uB9AC \uBB38\uC790\uC5F4 \uB9E4\uAC1C\uBCC0\uC218" } },
    "queryParamsSubtitleTutorial": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uCFFC\uB9AC \uB9E4\uAC1C\uBCC0\uC218\uB294 \uC81C\uACF5\uB41C \uB9E4\uAC1C\uBCC0\uC218\uC5D0 \uB530\uB77C \uB370\uC774\uD130\uB97C \uB3D9\uC801\uC73C\uB85C \uB85C\uB4DC\uD558\uB294 \uB370 \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4." } },
    "addAnotherParameter": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB2E4\uB978 \uCFFC\uB9AC \uBB38\uC790\uC5F4 \uB9E4\uAC1C\uBCC0\uC218 \uCD94\uAC00" } }
  },
  "pathParamTypes": {
    "textName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD14D\uC2A4\uD2B8" } },
    "numericName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC22B\uC790" } }
  },
  "publicPage": {
    "siteNotFound": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC0AC\uC774\uD2B8\uB97C \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4" } },
    "pageNotFound": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD398\uC774\uC9C0\uB97C \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4" } },
    "loginToastMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC131\uACF5\uC801\uC73C\uB85C \uB85C\uADF8\uC778\uB418\uC5C8\uC2B5\uB2C8\uB2E4." } },
    "authorizedToastTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC778\uC99D \uD544\uC694" } },
    "loginToastTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC778\uC99D \uC131\uACF5" } },
    "authorizedToastMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774 \uD398\uC774\uC9C0\uC5D0 \uC811\uADFC\uD558\uB824\uBA74 \uB85C\uADF8\uC778\uD574\uC57C \uD569\uB2C8\uB2E4. \uACC4\uC18D\uD558\uB824\uBA74 \uB85C\uADF8\uC778\uD558\uC138\uC694." } }
  },
  "integrationSettings": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD1B5\uD569" } },
    "noIntegrationMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC544\uC9C1 \uD1B5\uD569\uC744 \uC0DD\uC131\uD558\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4. \uB370\uC774\uD130 \uC18C\uC2A4, \uC791\uC5C5 \uB610\uB294 \uC0AC\uC6A9\uC790 \uC778\uC99D\uC744 \uCD94\uAC00\uD558\uC5EC \uD1B5\uD569\uC744 \uC0DD\uC131\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4." } },
    "integrationMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB370\uC774\uD130 \uC18C\uC2A4, \uC791\uC5C5 \uB610\uB294 \uC0AC\uC6A9\uC790 \uC778\uC99D\uC744 \uCD94\uAC00\uD558\uC5EC \uC0C8\uB85C\uC6B4 \uD1B5\uD569\uC744 \uC0DD\uC131\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4." } }
  },
  "dataSourceForm": {
    "namePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC18C\uC2A4 \uC774\uB984" } },
    "nameLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774\uB984" } },
    "actionLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC791\uC5C5" } },
    "integrationLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD1B5\uD569" } },
    "servicePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC11C\uBE44\uC2A4 \uC120\uD0DD" } },
    "integrationPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD1B5\uD569 \uC120\uD0DD" } },
    "errorUniqueName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB370\uC774\uD130 \uC18C\uC2A4 \uC774\uB984\uC740 \uACE0\uC720\uD574\uC57C \uD569\uB2C8\uB2E4." } }
  },
  "dataSourceContext": {
    "addDataSource": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC0C8 \uB370\uC774\uD130 \uC18C\uC2A4 \uCD94\uAC00" } },
    "noDataSourceTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC544\uC9C1 \uB370\uC774\uD130 \uC18C\uC2A4\uB97C \uCD94\uAC00\uD558\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4." } },
    "noDataSourceMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB370\uC774\uD130 \uC18C\uC2A4\uB294 \uB0B4\uBD80 \uB610\uB294 \uC678\uBD80 \uC18C\uC2A4\uC5D0\uC11C \uB370\uC774\uD130\uB97C \uAC00\uC838\uC640 \uD398\uC774\uC9C0\uC5D0 \uD45C\uC2DC\uD558\uB294 \uB370 \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4." } },
    "sharedDataSourceTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD398\uC774\uC9C0 \uAC04 \uACF5\uC720" } },
    "pageDataSourceTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774 \uD398\uC774\uC9C0\uC6A9" } },
    "sharedDataSourceDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBAA8\uB4E0 \uD398\uC774\uC9C0\uC5D0\uC11C \uC811\uADFC \uAC00\uB2A5\uD558\uBA70 \uCCAB \uD398\uC774\uC9C0 \uB85C\uB4DC \uC2DC \uD55C \uBC88 \uAC00\uC838\uC635\uB2C8\uB2E4." } },
    "pageDataSourceDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC0AC\uC6A9\uC790\uAC00 \uC774 \uD398\uC774\uC9C0\uB85C \uC774\uB3D9\uD560 \uB54C \uAC00\uC838\uC635\uB2C8\uB2E4." } }
  },
  "dataSourceItem": {
    "notConfigured": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAD6C\uC131\uB418\uC9C0 \uC54A\uC74C" } }
  },
  "dataSourceItemContext": {
    "shareBetweenPages": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD398\uC774\uC9C0 \uAC04 \uACF5\uC720" } },
    "unshareBetweenPages": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB2E4\uB978 \uD398\uC774\uC9C0\uC5D0\uC11C \uACF5\uC720 \uD574\uC81C" } }
  },
  "dataSourceCreateEditModal": {
    "editTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB370\uC774\uD130 \uC18C\uC2A4 \uD3B8\uC9D1" } },
    "createTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB370\uC774\uD130 \uC18C\uC2A4 \uC0DD\uC131" } },
    "sharedWarning": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774 \uB370\uC774\uD130 \uC18C\uC2A4\uB294 \uACF5\uC720\uB418\uBBC0\uB85C \uBCC0\uACBD \uC0AC\uD56D\uC774 \uC5EC\uB7EC \uD398\uC774\uC9C0\uC5D0 \uC601\uD5A5\uC744 \uBBF8\uCE60 \uC218 \uC788\uC2B5\uB2C8\uB2E4." } }
  },
  "defaultStyleForm": {
    "boxTop": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC0C1\uB2E8" } },
    "boxBottom": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD558\uB2E8" } },
    "boxLeft": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC67C\uCABD" } },
    "boxRight": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC624\uB978\uCABD" } },
    "backgroundLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBC30\uACBD" } },
    "backgroundColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBC30\uACBD\uC0C9" } },
    "widthLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB108\uBE44" } },
    "backgroundImage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774\uBBF8\uC9C0" } },
    "backgroundImageMode": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uCC44\uC6B0\uAE30 \uBAA8\uB4DC" } },
    "cssClasses": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "CSS \uD074\uB798\uC2A4" } },
    "cssClassesHelp": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC0DD\uC131\uB41C HTML\uC5D0 \uB098\uD0C0\uB0A0 \uC774 \uC694\uC18C\uC5D0 \uB300\uD55C \uD074\uB798\uC2A4 \uBAA9\uB85D\uC744 \uACF5\uBC31\uC73C\uB85C \uAD6C\uBD84\uD558\uC5EC \uC124\uC815\uD569\uB2C8\uB2E4." } },
    "cssClassesPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "CSS \uD074\uB798\uC2A4\uB97C \uC18C\uAC1C\uD569\uB2C8\uB2E4..." } }
  },
  "styleBoxForm": {
    "borderColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD14C\uB450\uB9AC \uC0C9\uC0C1" } },
    "borderLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD06C\uAE30" } },
    "paddingLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC548\uCABD \uC5EC\uBC31" } },
    "marginLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBC14\uAE65 \uC5EC\uBC31" } }
  },
  "themeConfigBlockType": {
    "color": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC0C9\uC0C1" } },
    "page": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD398\uC774\uC9C0" } },
    "typography": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD0C0\uC774\uD3EC\uADF8\uB798\uD53C" } },
    "button": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBC84\uD2BC" } },
    "link": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB9C1\uD06C" } },
    "image": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774\uBBF8\uC9C0" } },
    "input": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC785\uB825" } },
    "table": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD14C\uC774\uBE14" } }
  },
  "colorThemeConfigBlock": {
    "transparent": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD22C\uBA85" } },
    "primaryColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAE30\uBCF8" } },
    "secondaryColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBCF4\uC870" } },
    "borderColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD14C\uB450\uB9AC" } },
    "successColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC131\uACF5" } },
    "warningColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uACBD\uACE0" } },
    "errorColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC624\uB958" } },
    "customColors": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC0AC\uC6A9\uC790 \uC0C9\uC0C1" } },
    "addCustomColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC0AC\uC6A9\uC790 \uC0C9\uC0C1 \uCD94\uAC00" } },
    "customColorPrefix": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uCEE4\uC2A4\uD140" } }
  },
  "pageThemeConfigBlock": {
    "backgroundColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBC30\uACBD\uC0C9" } },
    "backgroundImage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBC30\uACBD \uC774\uBBF8\uC9C0" } },
    "backgroundMode": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBC30\uACBD \uBAA8\uB4DC" } }
  },
  "colorThemeConfigBlockType": {
    "transparent": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD22C\uBA85" } },
    "primary": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAE30\uBCF8" } },
    "secondary": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBCF4\uC870" } },
    "border": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD14C\uB450\uB9AC" } },
    "success": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC131\uACF5" } },
    "warning": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uACBD\uACE0" } },
    "error": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC624\uB958" } }
  },
  "typographyThemeConfigBlock": {
    "headingLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "\uC81C\uBAA9 " }, { "t": 4, "k": "i" }, { "t": 3, "v": " (h" }, { "t": 4, "k": "i" }, { "t": 3, "v": ")" }] } },
    "headingValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "\uC81C\uBAA9 <h" }, { "t": 4, "k": "i" }, { "t": 3, "v": ">" }] } },
    "color": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC0C9\uC0C1" } },
    "size": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD06C\uAE30" } },
    "textAlignment": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC815\uB82C" } },
    "bodyLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBCF8\uBB38" } },
    "fontFamily": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD3F0\uD2B8" } },
    "weight": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAD75\uAE30" } },
    "decoration": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD14D\uC2A4\uD2B8 \uAFB8\uBC08" } }
  },
  "buttonThemeConfigBlock": {
    "backgroundColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBC30\uACBD\uC0C9" } },
    "button": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBC84\uD2BC" } },
    "defaultState": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAE30\uBCF8 \uC0C1\uD0DC" } },
    "hoverState": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB20C\uB9B0 \uC0C1\uD0DC" } },
    "textAlignment": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD14D\uC2A4\uD2B8 \uC815\uB82C" } },
    "alignment": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC815\uB82C" } },
    "width": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB108\uBE44" } },
    "textColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD14D\uC2A4\uD2B8 \uC0C9\uC0C1" } },
    "borderColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD14C\uB450\uB9AC \uC0C9\uC0C1" } },
    "borderSize": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD14C\uB450\uB9AC \uD06C\uAE30" } },
    "borderRadius": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD14C\uB450\uB9AC \uBC18\uACBD" } },
    "padding": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC548\uCABD \uC5EC\uBC31" } },
    "fontFamily": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD3F0\uD2B8" } },
    "size": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD3F0\uD2B8 \uD06C\uAE30" } },
    "weight": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD3F0\uD2B8 \uAD75\uAE30" } },
    "activeState": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD65C\uC131 \uC0C1\uD0DC" } }
  },
  "linkThemeConfigBlock": {
    "color": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC0C9\uC0C1" } },
    "link": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB9C1\uD06C" } },
    "defaultState": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAE30\uBCF8 \uC0C1\uD0DC" } },
    "hoverState": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB20C\uB9B0 \uC0C1\uD0DC" } },
    "alignment": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC815\uB82C" } },
    "fontFamily": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD3F0\uD2B8" } },
    "size": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD3F0\uD2B8 \uD06C\uAE30" } },
    "weight": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD3F0\uD2B8 \uAD75\uAE30" } },
    "activeState": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD65C\uC131 \uC0C1\uD0DC" } },
    "decoration": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD14D\uC2A4\uD2B8 \uAFB8\uBC08" } }
  },
  "inputThemeConfigBlock": {
    "label": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD45C\uC2DC" } },
    "input": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC785\uB825" } },
    "backgroundColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBC30\uACBD\uC0C9" } },
    "textColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD14D\uC2A4\uD2B8 \uC0C9\uC0C1" } },
    "borderColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD14C\uB450\uB9AC \uC0C9\uC0C1" } },
    "borderSize": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD14C\uB450\uB9AC \uD06C\uAE30" } },
    "borderRadius": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD14C\uB450\uB9AC \uBC18\uACBD" } },
    "padding": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC548\uCABD \uC5EC\uBC31" } },
    "fontFamily": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD3F0\uD2B8" } },
    "size": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD3F0\uD2B8 \uD06C\uAE30" } },
    "weight": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD3F0\uD2B8 \uAD75\uAE30" } }
  },
  "imageThemeConfigBlock": {
    "alignment": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC815\uB82C" } },
    "maxWidthLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uCD5C\uB300 \uB108\uBE44" } },
    "maxHeightLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uCD5C\uB300 \uB192\uC774" } },
    "maxHeightPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uCD5C\uB300 \uB192\uC774 \uC785\uB825" } },
    "maxWidthPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uCD5C\uB300 \uB108\uBE44 \uC785\uB825" } },
    "imageConstraintsLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC81C\uD55C" } },
    "imageConstraintFullWidth": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uCD5C\uB300 \uB108\uBE44\uAE4C\uC9C0 \uD655\uC7A5" } },
    "imageConstraintCover": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uCC44\uC6B0\uAE30" } },
    "imageConstraintCoverDisabled": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBE48 \uCD5C\uB300 \uB192\uC774\uB85C\uB294 \uC0AC\uC6A9\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4." } },
    "imageConstraintContain": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB9DE\uCDA4" } },
    "imageConstraintContainDisabled": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uCD5C\uB300 \uB192\uC774\uAC00 \uC788\uC73C\uBA74 \uC0AC\uC6A9\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4." } },
    "imageBorderRadiusLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD14C\uB450\uB9AC \uBC18\uACBD" } },
    "imageBorderRadiusPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774\uBBF8\uC9C0 \uD14C\uB450\uB9AC \uBC18\uACBD\uC744 \uC785\uB825\uD558\uC138\uC694." } }
  },
  "tableThemeConfigBlock": {
    "borderColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD14C\uB450\uB9AC \uC0C9\uC0C1" } },
    "backgroundAlternateColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC9DD\uC218 \uD589 \uC0C9\uC0C1" } },
    "backgroundColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBC30\uACBD\uC0C9" } },
    "textColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD14D\uC2A4\uD2B8 \uC0C9\uC0C1" } },
    "borderSize": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD14C\uB450\uB9AC \uD06C\uAE30" } },
    "borderRadius": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD14C\uB450\uB9AC \uBC18\uACBD" } },
    "padding": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC548\uCABD \uC5EC\uBC31" } },
    "fontFamily": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD3F0\uD2B8" } },
    "size": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD06C\uAE30" } },
    "fontSize": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD3F0\uD2B8 \uD06C\uAE30" } },
    "table": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD14C\uC774\uBE14" } },
    "header": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD5E4\uB354" } },
    "alignment": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC815\uB82C" } },
    "cells": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC140" } },
    "separators": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAD6C\uBD84\uC120" } },
    "verticalSeparatorColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC138\uB85C \uC0C9\uC0C1" } },
    "verticalSeparatorSize": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC138\uB85C \uD06C\uAE30" } },
    "horizontalSeparatorColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAC00\uB85C \uC0C9\uC0C1" } },
    "horizontalSeparatorSize": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAC00\uB85C \uD06C\uAE30" } },
    "fontWeight": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD3F0\uD2B8 \uAD75\uAE30" } }
  },
  "buttonElementForm": {
    "valueLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBC84\uD2BC \uD14D\uC2A4\uD2B8" } },
    "valuePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD14D\uC2A4\uD2B8 \uC785\uB825..." } }
  },
  "buttonElement": {
    "missingValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBC84\uD2BC \uD14D\uC2A4\uD2B8 \uC5C6\uC74C..." } },
    "emptyValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBE48 \uBC84\uD2BC \uD14D\uC2A4\uD2B8..." } }
  },
  "eventTypes": {
    "clickLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD074\uB9AD \uC2DC" } },
    "submitLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC81C\uCD9C \uC2DC" } },
    "afterLoginLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB85C\uADF8\uC778 \uD6C4" } }
  },
  "getFormulaComponent": {
    "errorTooltip": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC720\uD6A8\uD558\uC9C0 \uC54A\uC740 \uCC38\uC870" } }
  },
  "fontSidePanelForm": {
    "label": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD3F0\uD2B8 \uC0C9\uC0C1" } }
  },
  "choiceElementForm": {
    "multiple": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB2E4\uC911 \uAC12 \uD5C8\uC6A9" } },
    "display": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB514\uC2A4\uD50C\uB808\uC774" } },
    "dropdown": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB4DC\uB86D\uB2E4\uC6B4" } },
    "checkbox": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uCCB4\uD06C\uBC15\uC2A4" } },
    "radio": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB77C\uB514\uC624" } }
  },
  "dropdown": {
    "empty": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC0AC\uC6A9 \uAC00\uB2A5\uD55C \uC635\uC158 \uC5C6\uC74C" } }
  },
  "tableElementForm": {
    "dataSource": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB370\uC774\uD130 \uC18C\uC2A4" } },
    "fields": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD544\uB4DC" } },
    "fieldValueLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAC12" } },
    "addField": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD544\uB4DC \uCD94\uAC00" } },
    "fieldValuePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAC12 \uC785\uB825..." } },
    "itemsPerPage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD398\uC774\uC9C0\uB2F9 \uD56D\uBAA9 \uC218" } },
    "fieldDefaultName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC5F4" } },
    "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774\uB984" } },
    "fieldType": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC720\uD615" } },
    "itemsPerPagePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAC12 \uC785\uB825..." } },
    "selectSourceFirst": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD544\uB4DC\uB97C \uAD6C\uC131\uD558\uB824\uBA74 \uB370\uC774\uD130 \uC18C\uC2A4 \uBC0F/\uB610\uB294 \uC18D\uC131\uC744 \uC120\uD0DD\uD558\uC138\uC694." } },
    "buttonColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBC84\uD2BC \uC0C9\uC0C1" } },
    "refreshFieldsFromDataSource": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB370\uC774\uD130 \uC18C\uC2A4\uC5D0\uC11C \uD544\uB4DC \uC0C8\uB85C \uACE0\uCE68" } },
    "orientation": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBC29\uD5A5" } },
    "orientationHorizontal": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC218\uD3C9" } },
    "orientationVertical": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC218\uC9C1" } },
    "buttonLoadMoreLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB354 \uBCF4\uAE30 \uD45C\uC2DC" } },
    "propertySelectorMissingArrays": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD589\uC73C\uB85C \uC0AC\uC6A9\uD560 \uB2E4\uC911 \uAC12 \uD544\uB4DC\uB97C \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4." } },
    "noName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774\uB984 \uC5C6\uC74C" } }
  },
  "tableElement": {
    "showMore": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB354 \uBCF4\uAE30" } }
  },
  "abTable": {
    "loading": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB85C\uB4DC \uC911..." } },
    "empty": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD56D\uBAA9\uC744 \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4." } }
  },
  "repeatElement": {
    "empty": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD56D\uBAA9\uC744 \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4." } },
    "showMore": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB354 \uBCF4\uAE30" } },
    "missingDataSourceTooltip": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC694\uC18C\uB97C \uCD94\uAC00\uD558\uB824\uBA74 \uB370\uC774\uD130 \uC18C\uC2A4\uB97C \uC120\uD0DD\uD558\uC138\uC694." } },
    "missingSchemaPropertyTooltip": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC694\uC18C\uB97C \uCD94\uAC00\uD558\uB824\uBA74 \uC18D\uC131\uC744 \uC120\uD0DD\uD558\uC138\uC694." } },
    "emptyState": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB0B4\uC6A9\uC744 \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4." } }
  },
  "collectionElementForm": {
    "noDataSourceMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBAA8\uB4E0 \uACB0\uACFC\uB97C \uB098\uC5F4\uD558\uB824\uBA74 \uC5EC\uB7EC \uD589\uC774 \uC788\uB294 \uB370\uC774\uD130 \uC18C\uC2A4\uB97C \uC120\uD0DD\uD558\uAC70\uB098, \uC774 \uD589 \uB0B4\uC758 \uC18D\uC131\uC744 \uC120\uD0DD\uD558\uB824\uBA74 \uB2E8\uC77C \uD589 \uB370\uC774\uD130 \uC18C\uC2A4\uB97C \uC120\uD0DD\uD558\uC138\uC694." } },
    "noSchemaPropertyMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC694\uC18C\uC758 \uBAA9\uB85D \uB370\uC774\uD130\uB85C \uC0AC\uC6A9\uD560 \uB370\uC774\uD130 \uC18C\uC2A4 \uB0B4\uC758 \uC18D\uC131\uC744 \uC120\uD0DD\uD558\uC138\uC694." } },
    "propertyOptionLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC0AC\uC6A9\uC790 \uC791\uC5C5" } }
  },
  "propertyOptionForm": {
    "fieldHeading": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD544\uB4DC" } },
    "filterHeading": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD544\uD130" } },
    "sortHeading": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC815\uB82C" } },
    "searchHeading": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAC80\uC0C9" } },
    "optionUnavailable": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC0AC\uC6A9\uD560 \uC218 \uC5C6\uC74C" } },
    "noPropertiesAvailable": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC0AC\uC6A9 \uAC00\uB2A5\uD55C \uD544\uB4DC\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4." } },
    "formDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774 \uC694\uC18C\uC758 \uB370\uC774\uD130 \uC18C\uC2A4\uC5D0\uC11C \uD398\uC774\uC9C0 \uBC29\uBB38\uC790\uAC00 \uD544\uD130\uB9C1, \uC815\uB82C \uBC0F \uAC80\uC0C9\uD560 \uC218 \uC788\uB294 \uC18D\uC131\uC744 \uC120\uD0DD\uD558\uC138\uC694." } }
  },
  "repeatElementForm": {
    "dataSource": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB370\uC774\uD130 \uC18C\uC2A4" } },
    "itemsPerPage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD398\uC774\uC9C0\uB2F9 \uD56D\uBAA9 \uC218" } },
    "itemsPerPagePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAC12 \uC785\uB825..." } },
    "itemsPerRowLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD589\uB2F9 \uD56D\uBAA9 \uC218" } },
    "itemsPerRowDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC5F4 \uB2F9 \uC5F4 \uC218 \uBC0F \uAE30\uAE30 \uC720\uD615." } },
    "orientationLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBC29\uD5A5" } },
    "orientationVertical": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC218\uC9C1" } },
    "orientationHorizontal": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC218\uD3C9" } },
    "buttonLoadMoreLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB354 \uBCF4\uAE30 \uD45C\uC2DC" } },
    "toggleEditorRepetitionsLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBC18\uBCF5 \uC77C\uC2DC\uC801\uC73C\uB85C \uBE44\uD65C\uC131\uD654" } },
    "propertySelectorMissingArrays": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBC18\uBCF5\uD560 \uB2E4\uC911 \uAC12 \uD544\uB4DC\uB97C \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4." } },
    "gapVerticalLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC138\uB85C" } },
    "gapLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBC18\uBCF5 \uC0AC\uC774\uC758 \uAC04\uACA9" } },
    "gapHorizontalLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAC00\uB85C" } }
  },
  "recordSelectorElement": {
    "emptyAdhocState": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "'" }, { "t": 4, "k": "query" }, { "t": 3, "v": "'\uC640 \uC77C\uCE58\uD558\uB294 \uB0B4\uC6A9\uC744 \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4." }] } },
    "emptyState": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB0B4\uC6A9\uC744 \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4." } }
  },
  "recordSelectorElementForm": {
    "selectRecordsFrom": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB808\uCF54\uB4DC \uC120\uD0DD" } },
    "noDataSourceMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBAA8\uB4E0 \uACB0\uACFC\uB97C \uB098\uC5F4\uD558\uB824\uBA74 \uC5EC\uB7EC \uD589\uC774 \uC788\uB294 \uB370\uC774\uD130 \uC18C\uC2A4\uB97C \uC120\uD0DD\uD558\uC138\uC694." } },
    "optionNameSuffix": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC635\uC158 \uC774\uB984 \uC811\uBBF8\uC0AC" } },
    "optionNameSuffixPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC811\uBBF8\uC0AC \uC785\uB825..." } },
    "optionNameSuffixHelper": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB4DC\uB86D\uB2E4\uC6B4\uC744 \uC5F4 \uB54C \uAC01 \uC635\uC158 \uC774\uB984\uC5D0 \uCD94\uAC00\uB418\uBA70 \uAD6C\uBD84\uD558\uB294 \uB370 \uB3C4\uC6C0\uC774 \uB429\uB2C8\uB2E4." } },
    "itemsPerPage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD398\uC774\uC9C0\uB2F9 \uD56D\uBAA9 \uC218" } },
    "itemsPerPagePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAC12 \uC785\uB825..." } },
    "multipleLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB2E4\uC911 \uAC12 \uD5C8\uC6A9" } },
    "record": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "\uB808\uCF54\uB4DC " }, { "t": 4, "k": "id" }] } }
  },
  "currentRecordDataProviderType": {
    "index": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC778\uB371\uC2A4" } },
    "firstPartName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "\uB370\uC774\uD130 \uC18C\uC2A4: " }, { "t": 4, "k": "name" }] } },
    "schemaProperty": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "prefixName" }, { "t": 3, "v": ": " }, { "t": 4, "k": "schemaProperty" }] } }
  },
  "workflowActionTypes": {
    "notificationLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC54C\uB9BC \uD45C\uC2DC" } },
    "openPageLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD398\uC774\uC9C0 \uC5F4\uAE30" } },
    "createRowLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD589 \uC0DD\uC131" } },
    "updateRowLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD589 \uC5C5\uB370\uC774\uD2B8" } },
    "deleteRowLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD589 \uC0AD\uC81C" } },
    "logoutLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB85C\uADF8\uC544\uC6C3" } },
    "refreshDataSourceLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB370\uC774\uD130 \uC18C\uC2A4 \uC0C8\uB85C \uACE0\uCE68" } },
    "httpRequest": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "HTTP \uC694\uCCAD \uBCF4\uB0B4\uAE30" } },
    "errorNavigateToPageMissing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774\uB3D9\uB300\uC0C1 \uC18D\uC131\uC774 \uB204\uB77D\uB418\uC5C8\uC2B5\uB2C8\uB2E4" } },
    "errorPageParameterInError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD558\uB098 \uC774\uC0C1\uC758 \uD398\uC774\uC9C0 \uB9E4\uAC1C\uBCC0\uC218\uAC00 \uC798\uBABB \uAD6C\uC131\uB418\uC5C8\uC2B5\uB2C8\uB2E4" } },
    "errorNavigationUrlMissing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB124\uBE44\uAC8C\uC774\uC158 URL \uC18D\uC131\uC774 \uC5C6\uC2B5\uB2C8\uB2E4" } },
    "errorDataSourceMissing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC120\uD0DD\uB41C \uB370\uC774\uD130 \uC18C\uC2A4\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4" } }
  },
  "notificationWorkflowActionForm": {
    "titleLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC81C\uBAA9" } },
    "titlePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD14D\uC2A4\uD2B8 \uC785\uB825..." } },
    "descriptionLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC124\uBA85" } },
    "descriptionPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD14D\uC2A4\uD2B8 \uC785\uB825..." } }
  },
  "event": {
    "addAction": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC791\uC5C5 \uCD94\uAC00" } }
  },
  "collectionFieldType": {
    "boolean": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBD88\uB9AC\uC5B8" } },
    "button": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBC84\uD2BC" } },
    "text": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD14D\uC2A4\uD2B8" } },
    "link": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB9C1\uD06C" } },
    "tags": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD0DC\uADF8" } },
    "image": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774\uBBF8\uC9C0" } },
    "rating": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD3C9\uAC00" } },
    "errorValueMissing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB204\uB77D\uB41C \uAC12 \uC18D\uC131" } }
  },
  "textFieldForm": {
    "fieldValueLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAC12" } },
    "fieldValuePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAC12 \uC785\uB825..." } }
  },
  "linkFieldForm": {
    "fieldValueLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "URL" } },
    "fieldValuePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAC12 \uC785\uB825..." } },
    "fieldLinkNameLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB9C1\uD06C \uD14D\uC2A4\uD2B8" } },
    "fieldLinkNamePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAC12 \uC785\uB825..." } },
    "buttonColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBC84\uD2BC \uC0C9\uC0C1" } }
  },
  "tagsFieldForm": {
    "fieldValuesLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAC12" } },
    "fieldValuesPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAC12 \uC785\uB825..." } },
    "fieldColorsLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC0C9\uC0C1" } },
    "fieldColorsPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC0C9\uC0C1 \uC785\uB825..." } }
  },
  "linkField": {
    "details": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC138\uBD80 \uC815\uBCF4" } }
  },
  "imageFieldForm": {
    "fieldSrcLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774\uBBF8\uC9C0 \uC18C\uC2A4" } },
    "fieldSrcPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAC12 \uC785\uB825" } },
    "fieldAltLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB300\uCCB4 \uD14D\uC2A4\uD2B8" } },
    "fieldAltPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAC12 \uC785\uB825..." } },
    "fieldAltHelp": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC2A4\uD06C\uB9B0 \uB9AC\uB354\uC5D0\uC11C \uC0AC\uC6A9\uB418\uBA70 \uC774\uBBF8\uC9C0\uB97C \uB85C\uB4DC\uD560 \uC218 \uC5C6\uB294 \uACBD\uC6B0 \uD45C\uC2DC\uB429\uB2C8\uB2E4" } }
  },
  "createUserSourceForm": {
    "userSourceType": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC720\uD615" } },
    "userSourceIntegration": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD1B5\uD569" } },
    "userSourceName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774\uB984" } }
  },
  "updateUserSourceForm": {
    "nameFieldLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774\uB984" } },
    "nameFieldPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774\uB984 \uC785\uB825..." } },
    "authTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC778\uC99D" } },
    "integrationFieldLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD1B5\uD569" } },
    "addProvider": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC81C\uACF5\uC790 \uCD94\uAC00" } }
  },
  "formContainerElement": {
    "submitDeactivatedText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC81C\uCD9C\uD558\uB824\uBA74 \uBAA8\uB4E0 \uD544\uC218 \uD544\uB4DC\uB97C \uC644\uB8CC\uD558\uC138\uC694" } },
    "defaultSubmitButtonLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC81C\uCD9C" } }
  },
  "formContainerElementForm": {
    "submitButtonLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC81C\uCD9C \uBC84\uD2BC" } },
    "submitButtonPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAC12 \uC785\uB825..." } },
    "buttonColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBC84\uD2BC \uC0C9\uC0C1" } },
    "resetToInitialValuesTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC81C\uCD9C \uD6C4 \uAE30\uBCF8\uAC12\uC73C\uB85C \uC7AC\uC124\uC815" } },
    "resetToInitialValuesDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC120\uD0DD\uD55C \uACBD\uC6B0, \uC131\uACF5\uC801\uC778 \uC81C\uCD9C \uD6C4 \uC591\uC2DD\uC758 \uAE30\uBCF8\uAC12\uC774 \uC591\uC2DD\uC744 \uC7AC\uC124\uC815\uD558\uB294 \uB370 \uC0AC\uC6A9\uB429\uB2C8\uB2E4. \uC120\uD0DD\uD558\uC9C0 \uC54A\uC740 \uACBD\uC6B0, \uC0AC\uC6A9\uC790\uC758 \uAC12\uC774 \uC720\uC9C0\uB429\uB2C8\uB2E4." } }
  },
  "choiceOptionSelector": {
    "label": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC635\uC158" } },
    "value": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC635\uC158 \uAC12" } },
    "valuePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAC12 \uC785\uB825" } },
    "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC635\uC158 \uC774\uB984" } },
    "namePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774\uB984 \uC785\uB825" } },
    "addOption": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC635\uC158 \uCD94\uAC00" } },
    "addOptionDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "'\uC635\uC158 \uCD94\uAC00'\uB97C \uD074\uB9AD\uD558\uC5EC \uB4DC\uB86D\uB2E4\uC6B4\uC5D0 \uC635\uC158\uC744 \uCD94\uAC00\uD558\uC138\uC694" } },
    "optionType": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC635\uC158 \uC720\uD615" } },
    "manual": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC218\uB3D9" } },
    "dataSource": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB370\uC774\uD130 \uC18C\uC2A4" } },
    "formulas": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC218\uC2DD" } }
  },
  "dispatchWorkflowActionError": {
    "defaultTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774\uBCA4\uD2B8 \uC624\uB958" } },
    "defaultMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774 \uC774\uBCA4\uD2B8\uB97C \uD2B8\uB9AC\uAC70\uD558\uB294 \uC911 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4." } },
    "formDataInvalidTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC720\uD6A8\uD558\uC9C0 \uC54A\uC740 \uC591\uC2DD" } },
    "formDataInvalidMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD558\uB098 \uC774\uC0C1\uC758 \uD544\uB4DC\uC5D0 \uC720\uD6A8\uD558\uC9C0 \uC54A\uC740 \uAC12\uC774 \uC788\uC2B5\uB2C8\uB2E4." } }
  },
  "dispatchDataSourceError": {
    "defaultTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB370\uC774\uD130 \uB85C\uB529 \uC624\uB958" } },
    "defaultMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD398\uC774\uC9C0\uC758 \uB370\uC774\uD130\uB97C \uB85C\uB4DC\uD558\uB294 \uC911 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4." } }
  },
  "localBaserowServiceForm": {
    "integrationDropdownLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD1B5\uD569" } },
    "rowIdLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD589 ID" } },
    "rowIdPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD589 ID \uC120\uD0DD" } }
  },
  "upsertRowWorkflowActionForm": {
    "fieldMappingPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD544\uB4DC \uAC12 \uC120\uD0DD" } },
    "noTableSelectedMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD544\uB4DC\uB97C \uAD6C\uC131\uD558\uB824\uBA74 \uD14C\uC774\uBE14\uC744 \uC120\uD0DD\uD558\uC138\uC694." } }
  },
  "fieldMappingContext": {
    "enableField": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD544\uB4DC \uD65C\uC131\uD654" } },
    "disableField": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD544\uB4DC \uBE44\uD65C\uC131\uD654" } }
  },
  "checkboxElementForm": {
    "labelTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC635\uC158 \uC774\uB984" } },
    "valueTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAE30\uBCF8\uAC12" } },
    "requiredTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD544\uC218" } }
  },
  "choiceElement": {
    "addOptions": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774 \uC694\uC18C\uB97C \uC0AC\uC6A9\uD558\uB824\uBA74 \uC635\uC158\uC744 \uCD94\uAC00\uD558\uC138\uC694..." } }
  },
  "userSourceUsersContext": {
    "searchPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC0AC\uC6A9\uC790 \uAC80\uC0C9" } },
    "anonymous": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC775\uBA85" } },
    "unnamed": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774\uB984 \uC5C6\uC74C" } },
    "noEmail": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774\uBA54\uC77C \uC5C6\uC74C" } }
  },
  "userSelector": {
    "viewAs": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "user" }, { "t": 3, "v": "\uC73C\uB85C \uBCF4\uAE30" }] } },
    "anonymous": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC775\uBA85" } },
    "member": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "prefix" }, { "t": 3, "v": " \uBA64\uBC84" }] } }
  },
  "visibilityForm": {
    "allVisitors": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBAA8\uB4E0 \uBC29\uBB38\uC790" } },
    "loggedInVisitors": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB85C\uADF8\uC778\uD55C \uBC29\uBB38\uC790" } },
    "notLoggedInVisitors": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB85C\uADF8\uC544\uC6C3\uD55C \uBC29\uBB38\uC790" } },
    "warningTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774\uAC83\uC740 \uBCF4\uC548 \uAE30\uB2A5\uC785\uB2C8\uB2E4" } },
    "warningMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "\uB370\uC774\uD130 \uBCF4\uC548 \uBC29\uBC95\uC5D0 \uB300\uD55C \uC790\uC138\uD55C \uB0B4\uC6A9\uC740 " }, { "t": 4, "k": "link" }, { "t": 3, "v": "\uB97C \uD655\uC778\uD558\uC138\uC694." }] } },
    "excludedRolesLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBAA8\uB4E0 \uC5ED\uD560 \uC81C\uC678" } },
    "switchAllowLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD5C8\uC6A9" } },
    "switchDisallowLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD5C8\uC6A9 \uC548 \uD568" } },
    "rolesSelectAll": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBAA8\uB450 \uC120\uD0DD" } },
    "rolesDeselectAll": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBAA8\uB450 \uC120\uD0DD \uCDE8\uC18C" } },
    "rolesSelectHint": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD558\uB098 \uC774\uC0C1\uC758 \uC5ED\uD560 \uC120\uD0DD" } },
    "roleTypesHint": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC5ED\uD560 \uC720\uD615 \uC120\uD0DD" } },
    "roleTypeAllowAllRoles": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBAA8\uB4E0 \uC5ED\uD560" } },
    "roleTypeAllowAllRolesExcept": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC5ED\uD560 \uD5C8\uC6A9 \uC548 \uD568..." } },
    "roleTypeDisallowAllRolesExcept": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC5ED\uD560 \uD5C8\uC6A9..." } },
    "rolesAllMembersOf": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "name" }, { "t": 3, "v": "\uC758 \uBAA8\uB4E0 \uBA64\uBC84" }] } },
    "noRole": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC5ED\uD560 \uC5C6\uC74C" } },
    "errorFetchingRolesTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC0AC\uC6A9\uC790 \uC5ED\uD560\uC744 \uAC00\uC838\uC62C \uC218 \uC5C6\uC2B5\uB2C8\uB2E4" } },
    "errorFetchingRolesMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC0AC\uC6A9\uC790 \uC5ED\uD560\uC744 \uAC00\uC838\uC624\uB294 \uB3D9\uC548 \uBB38\uC81C\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4." } },
    "visibilityCondition": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD45C\uC2DC\uC131 \uC870\uAC74" } },
    "visibilityConditionHelper": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774 \uC218\uC2DD\uC758 \uACB0\uACFC\uAC00 \uCC38\uC774\uACE0 \uC704\uC758 \uBC29\uBB38\uC790 \uC120\uD0DD \uC0AC\uD56D\uC774 \uCC38\uC774\uBA74 \uC694\uC18C\uAC00 \uD45C\uC2DC\uB429\uB2C8\uB2E4. \uC774 \uC870\uAC74\uC740 \uC694\uC18C\uC758 \uD45C\uC2DC \uC5EC\uBD80\uC5D0\uB9CC \uC601\uD5A5\uC744 \uBBF8\uCE69\uB2C8\uB2E4. \uC11C\uBC84 \uC751\uB2F5\uC5D0\uC11C \uB370\uC774\uD130\uB97C \uC81C\uC678\uD558\uB824\uBA74 \uC704\uC758 \uC0AC\uC6A9\uC790 \uC5ED\uD560 \uD544\uD130\uB9C1 \uC635\uC158\uC744 \uC0AC\uC6A9\uD558\uC138\uC694." } },
    "visibilityConditionPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC0C1\uD0DC..." } },
    "documentationLink": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBB38\uC11C" } }
  },
  "userDataProviderType": {
    "isAuthenticated": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC778\uC99D\uB428" } },
    "id": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC544\uC774\uB514" } },
    "email": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774\uBA54\uC77C" } },
    "username": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC0AC\uC6A9\uC790 \uC774\uB984" } },
    "role": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC5ED\uD560" } }
  },
  "buttonField": {
    "noLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774\uB984 \uC5C6\uC74C..." } }
  },
  "buttonFieldForm": {
    "infoMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": '\uC774 \uBC84\uD2BC\uC758 \uC791\uC5C5\uC744 \uAD6C\uC131\uD558\uB824\uBA74 \uD604\uC7AC \uC694\uC18C\uC758 "\uC774\uBCA4\uD2B8" \uD0ED\uC744 \uC5EC\uC138\uC694.' } },
    "labelPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD45C\uC2DC\uBA85 \uC785\uB825..." } }
  },
  "resetButton": {
    "reset": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAE30\uBCF8 \uD14C\uB9C8 \uAC12\uC73C\uB85C \uC7AC\uC124\uC815" } }
  },
  "backgroundModes": {
    "fill": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uCC44\uC6B0\uAE30" } },
    "tile": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD0C0\uC77C" } },
    "fit": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB9DE\uCDA4" } }
  },
  "customStyle": {
    "themeOverrides": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD14C\uB9C8 \uC7AC\uC815\uC758" } },
    "configureThemeOverrides": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774 \uC694\uC18C\uC5D0 \uB300\uD55C \uD14C\uB9C8 \uC7AC\uC815\uC758 \uAD6C\uC131" } },
    "backToElement": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC694\uC18C \uAD6C\uC131\uC73C\uB85C \uB3CC\uC544\uAC00\uAE30" } }
  },
  "serviceSchemaPropertySelector": {
    "label": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC18D\uC131" } },
    "noProperties": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC0AC\uC6A9 \uAC00\uB2A5\uD55C \uC18D\uC131 \uC5C6\uC74C" } }
  },
  "dataSourceDropdown": {
    "label": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB370\uC774\uD130 \uC18C\uC2A4" } },
    "noDataSources": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC0AC\uC6A9 \uAC00\uB2A5\uD55C \uB370\uC774\uD130 \uC18C\uC2A4 \uC5C6\uC74C" } },
    "shared": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uACF5\uC720\uB428" } },
    "pageOnly": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774 \uD398\uC774\uC9C0" } },
    "noSharedDataSources": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uACF5\uC720 \uB370\uC774\uD130 \uC18C\uC2A4\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4" } },
    "addNew": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC0C8 \uB370\uC774\uD130 \uC18C\uC2A4 \uCD94\uAC00" } }
  },
  "common": {
    "timeFormat12Hour": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "12 \uC2DC\uAC04" } },
    "dateFormatISO": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "ISO" } },
    "dateFormatUS": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "US" } },
    "timeFormatTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC2DC\uAC04 \uD615\uC2DD" } },
    "dateFormatEU": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "European" } },
    "timeFormat24Hour": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "24 \uC2DC\uAC04" } },
    "dateFormatTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB0A0\uC9DC \uD615\uC2DD" } }
  },
  "themeSettings": {
    "titleOverview": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD14C\uB9C8" } }
  },
  "pageVisibilitySettings": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uACF5\uAC1C\uC5EC\uBD80" } },
    "allVisitors": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBAA8\uB4E0 \uBC29\uBB38\uC790" } },
    "loggedInVisitors": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB85C\uADF8\uC778\uD55C \uBC29\uBB38\uC790" } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774 \uD398\uC774\uC9C0\uB97C \uB204\uAC00 \uBCFC \uC218 \uC788\uB098\uC694" } }
  },
  "multiPageContainerElementForm": {
    "behaviour": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB3D9\uC791" } },
    "display": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD45C\uC2DC" } },
    "deselectAll": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBAA8\uB450 \uC120\uD0DD \uD574\uC81C" } },
    "pagePosition": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC704\uCE58" } },
    "selectAll": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBAA8\uB450 \uC120\uD0DD" } }
  },
  "pageShareType": {
    "all": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBAA8\uB4E0 \uD398\uC774\uC9C0\uC5D0\uC11C" } },
    "only": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC120\uD0DD\uB41C \uD398\uC774\uC9C0\uC5D0\uC11C\uB9CC" } },
    "except": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC120\uD0DD\uD55C \uD398\uC774\uC9C0 \uC81C\uC678" } }
  },
  "dateTimePickerElementForm": {
    "includeTime": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC2DC\uAC04 \uD3EC\uD568" } },
    "invalidDateError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC798\uBABB\uB41C \uB0A0\uC9DC\uC785\uB2C8\uB2E4. \uC785\uB825 \uB0A0\uC9DC\uAC00 \uC8FC\uC5B4\uC9C4 \uD615\uC2DD\uACFC \uC77C\uCE58\uD558\uB294\uC9C0 \uD655\uC778\uD558\uC138\uC694." } }
  },
  "pageVisibilitySettingsTypes": {
    "logInPageWarningTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB85C\uADF8\uC778 \uD398\uC774\uC9C0\uAC00 \uC124\uC815\uB418\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4" } },
    "pageName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uACF5\uAC1C\uC5EC\uBD80" } },
    "logInPagewarningMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC775\uBA85 \uC0AC\uC6A9\uC790\uAC00 \uC774 \uD398\uC774\uC9C0\uC5D0 \uC561\uC138\uC2A4\uD558\uB824\uACE0 \uD558\uBA74 \uB85C\uADF8\uC778 \uD398\uC774\uC9C0\uB85C \uB9AC\uB514\uB809\uC158\uB429\uB2C8\uB2E4. \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC758 \uC77C\uBC18 \uC124\uC815\uC5D0\uC11C \uB85C\uADF8\uC778 \uD398\uC774\uC9C0\uB97C \uC124\uC815\uD558\uC138\uC694." } },
    "logInPageInfoTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC775\uBA85 \uC0AC\uC6A9\uC790\uB294 \uB9AC\uB514\uB809\uC158\uB429\uB2C8\uB2E4" } },
    "logInPageInfoMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "\uC775\uBA85\uC758 \uC0AC\uC6A9\uC790\uAC00 \uC774 \uD398\uC774\uC9C0\uC5D0 \uC811\uADFC\uC744 \uC2DC\uB3C4\uD558\uBA74 " }, { "t": 4, "k": "logInPageName" }, { "t": 3, "v": " \uD398\uC774\uC9C0\uB85C \uB9AC\uB514\uB809\uC158\uB429\uB2C8\uB2E4." }] } }
  },
  "pageEditor": {
    "pageNotFound": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD398\uC774\uC9C0\uB97C \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4" } },
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uBE4C\uB354" } }
  },
  "builderLoginPageForm": {
    "pageDropdownLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB85C\uADF8\uC778 \uD398\uC774\uC9C0" } },
    "pageDropdownPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD398\uC774\uC9C0\uB97C \uC120\uD0DD\uD558\uC138\uC694" } },
    "pageDropdownDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB85C\uADF8\uC778\uD558\uC9C0 \uC54A\uC740 \uC0AC\uC6A9\uC790\uAC00 \uC81C\uD55C\uB41C \uD398\uC774\uC9C0\uC5D0 \uC811\uADFC\uD558\uB824 \uD560 \uB54C \uB9AC\uB514\uB809\uC158\uB418\uC5B4\uC57C \uD558\uB294 \uB85C\uADF8\uC778 \uD398\uC774\uC9C0\uB97C \uC120\uD0DD\uD558\uC138\uC694." } }
  },
  "fontWeightType": {
    "light": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Light" } },
    "thin": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Thin" } },
    "extraLight": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Extra-light" } },
    "black": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Black" } },
    "regular": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Regular" } },
    "bold": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Bold" } },
    "extraBold": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Extra-bold" } },
    "medium": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Medium" } },
    "semiBold": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Semi-bold" } },
    "extraBlack": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Extra-black" } }
  },
  "queryParamTypes": {
    "textName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD14D\uC2A4\uD2B8" } },
    "numericName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC22B\uC790" } }
  },
  "radiusStyleForm": {
    "backgroundRadiusLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBC30\uACBD" } },
    "borderRadiusLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD14C\uB450\uB9AC" } },
    "cornerRadiusLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBAA8\uC11C\uB9AC \uBC18\uACBD" } }
  },
  "authProviderWithModal": {
    "authProviderInError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC624\uB958\uB97C \uC218\uC815\uD558\uB824\uBA74 \uC774 \uACF5\uAE09\uC790\uB97C \uD3B8\uC9D1\uD558\uC138\uC694." } },
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "\uC81C\uACF5\uC790 \uD3B8\uC9D1: " }, { "t": 4, "k": "name" }] } }
  },
  "addElementCategory": {
    "layoutElement": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB808\uC774\uC544\uC6C3 \uC694\uC18C" } },
    "suggestedElement": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC81C\uC548\uB41C \uC694\uC18C" } },
    "baseElement": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAE30\uBCF8 \uC694\uC18C" } },
    "formElement": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC591\uC2DD \uC694\uC18C" } }
  },
  "userSourceDropdown": {
    "label": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC0AC\uC6A9\uC790 \uC18C\uC2A4" } },
    "addUserSource": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC0C8\uB85C\uC6B4 \uC0AC\uC6A9\uC790 \uC18C\uC2A4 \uCD94\uAC00" } },
    "noUserSources": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC0AC\uC6A9 \uAC00\uB2A5\uD55C \uC0AC\uC6A9\uC790 \uC18C\uC2A4 \uC5C6\uC74C" } }
  },
  "menuElement": {
    "emptyLinkValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB9C1\uD06C \uC774\uB984\uC774 \uBE44\uC5B4\uC788\uC2B5\uB2C8\uB2E4..." } },
    "missingLinkValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB9C1\uD06C \uC774\uB984\uC774 \uC5C6\uC2B5\uB2C8\uB2E4..." } },
    "missingValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBA54\uB274 \uD56D\uBAA9\uC774 \uC5C6\uC74C" } },
    "separator": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAD6C\uBD84\uC790" } },
    "spacer": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uACF5\uAC04 \uC870\uC815\uC790" } },
    "missingButtonValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBC84\uD2BC \uC774\uB984\uC774 \uC5C6\uC2B5\uB2C8\uB2E4..." } },
    "emptyButtonValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBC84\uD2BC \uC774\uB984\uC774 \uBE44\uC5B4\uC788\uC2B5\uB2C8\uB2E4..." } }
  },
  "orientations": {
    "label": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBC29\uD5A5" } },
    "vertical": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC218\uC9C1" } },
    "horizontal": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAC00\uB85C" } }
  },
  "menuElementForm": {
    "menuItemsLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBA54\uB274 \uD56D\uBAA9" } },
    "menuItemTypeSeparator": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAD6C\uBD84\uC790" } },
    "menuItemAddSeparator": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAD6C\uBD84\uC790" } },
    "addMenuItemLink": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uCD94\uAC00..." } },
    "alignment": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC870\uC815" } },
    "menuItemDefaultName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD398\uC774\uC9C0" } },
    "menuItemLabelLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB77C\uBCA8" } },
    "menuItemTypeLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC885\uB958" } },
    "menuItemTypeItem": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC544\uC774\uD15C" } },
    "menuItemVariantLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBCC0\uD615" } },
    "menuItemVariantLink": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB9C1\uD06C" } },
    "menuItemVariantButton": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBC84\uD2BC" } },
    "namePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD398\uC774\uC9C0" } },
    "addSubLink": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD558\uC704 \uB9C1\uD06C \uCD94\uAC00" } },
    "menuItemSubLinkDefaultName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD558\uC704 \uB9C1\uD06C" } },
    "menuItemAddLink": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB9C1\uD06C" } },
    "menuItemAddButton": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBC84\uD2BC" } },
    "menuItemAddSpacer": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uACF5\uAC04 \uC870\uC815\uC790" } },
    "eventDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774 \uBC84\uD2BC\uC758 \uB3D9\uC791\uC744 \uAD6C\uC131\uD558\uB824\uBA74 \uD574\uB2F9 \uC694\uC18C\uC758 \uC774\uBCA4\uD2B8 \uD0ED\uC744 \uC5F4\uC5B4\uC8FC\uC138\uC694." } },
    "noMenuItemsMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "'\uCD94\uAC00' \uBC84\uD2BC\uC744 \uD074\uB9AD\uD558\uC5EC \uCCAB \uBC88\uC9F8 \uBA54\uB274 \uD56D\uBAA9\uC744 \uCD94\uAC00\uD558\uC138\uC694." } },
    "variant": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAE30\uAE30 \uC720\uD615\uBCC4 \uBCC0\uD615" } },
    "expanded": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD655\uC7A5\uB41C" } },
    "compact": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uCF64\uD329\uD2B8" } },
    "previewCompactMenuLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAC04\uB7B5 \uBA54\uB274 \uBBF8\uB9AC\uBCF4\uAE30" } },
    "previewCompactMenuHelper": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAC04\uD3B8 \uBA54\uB274 \uBBF8\uB9AC\uBCF4\uAE30\uB97C \uD45C\uC2DC/\uC228\uAE41\uB2C8\uB2E4." } },
    "openEditorCompactMenu": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBA54\uB274 \uC5F4\uAE30" } },
    "closeEditorCompactMenu": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBA54\uB274 \uB2EB\uAE30" } }
  },
  "simpleContainerElementForm": {
    "noConfigurationOptions": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uCEE8\uD14C\uC774\uB108 \uC694\uC18C\uC5D0\uB294 \uAD6C\uC131 \uC635\uC158\uC774 \uC5C6\uC2B5\uB2C8\uB2E4." } }
  },
  "linkDecorations": {
    "normal": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAE30\uBCF8" } },
    "plain": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAFB8\uBC08\uC5C6\uC74C" } }
  },
  "textDecorationSelector": {
    "underline": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBC11\uC904" } },
    "stroke": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC724\uACFD\uC120" } },
    "italic": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774\uD0E4\uB9AD" } },
    "uppercase": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB300\uBB38\uC790" } }
  },
  "ratingFieldForm": {
    "style": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC2A4\uD0C0\uC77C" } },
    "thumbsUp": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC88B\uC544\uC694" } },
    "maxValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uCD5C\uB300\uAC12" } },
    "value": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAC12" } },
    "color": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC0C9\uC0C1" } },
    "star": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBCC4" } },
    "heart": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD558\uD2B8" } },
    "flag": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAE43\uBC1C" } }
  },
  "ratingElementForm": {
    "heart": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD558\uD2B8" } },
    "color": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC0C9\uC0C1" } },
    "maxValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uCD5C\uB300" } },
    "ratingStyle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC2A4\uD0C0\uC77C" } },
    "star": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBCC4" } },
    "smile": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC2A4\uB9C8\uC77C" } },
    "flag": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAE43\uBC1C" } },
    "thumbsUp": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC88B\uC544\uC694" } }
  },
  "automationSettingsModal": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC6CC\uD06C\uD50C\uB85C\uC6B0" } }
  },
  "abFileInput": {
    "delete": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC81C\uAC70" } }
  },
  "elementsGuidedTourStep": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD398\uC774\uC9C0\uC5D0 \uC694\uC18C\uB97C \uCD94\uAC00" } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBAA8\uB4E0 \uC571\uC5D0\uB294 \uCEF4\uD3EC\uB10C\uD2B8\uAC00 \uD544\uC694\uD569\uB2C8\uB2E4! \uD45C, \uC591\uC2DD, \uBC84\uD2BC \uB4F1\uC758 \uC694\uC18C\uB97C \uCD94\uAC00\uD558\uC5EC \uC571\uC5D0 \uC0DD\uB3D9\uAC10\uC744 \uB354\uD558\uC138\uC694." } }
  },
  "dataGuidedTourStep": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB370\uC774\uD130\uB97C \uC5F0\uACB0\uD558\uC138\uC694" } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC5EC\uAE30\uC5D0 Baserow \uD14C\uC774\uBE14\uC744 \uC5F0\uACB0\uD558\uBA74 \uB2E4\uC591\uD55C \uC694\uC18C\uC5D0\uC11C \uB370\uC774\uD130\uB97C \uB3D9\uC801\uC73C\uB85C \uD45C\uC2DC, \uD544\uD130\uB9C1, \uC5C5\uB370\uC774\uD2B8\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4." } }
  },
  "previewGuidedTourStep": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uADC0\uD558\uC758 \uC81C\uC5B4 \uC13C\uD130" } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC5EC\uAE30\uC11C \uC571 \uD398\uC774\uC9C0\uB97C \uAD6C\uC131\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC694\uC18C\uB97C \uCD94\uAC00\uD558\uACE0, \uACB0\uACFC\uB97C \uBBF8\uB9AC \uBCF4\uACE0, \uC6D0\uD558\uB294 \uB300\uB85C \uC571\uC744 \uAD6C\uC131\uD558\uC138\uC694." } }
  },
  "devicesGuidedTourStep": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB2E4\uC591\uD55C \uAE30\uAE30\uC5D0\uC11C \uBBF8\uB9AC \uBCF4\uAE30" } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB370\uC2A4\uD06C\uD1B1, \uD0DC\uBE14\uB9BF, \uBAA8\uBC14\uC77C \uBBF8\uB9AC\uBCF4\uAE30\uB97C \uC804\uD658\uD558\uC5EC \uB2E4\uC591\uD55C \uD654\uBA74 \uD06C\uAE30\uC5D0\uC11C \uC571\uC774 \uC5B4\uB5BB\uAC8C \uBCF4\uC774\uB294\uC9C0 \uD655\uC778\uD558\uC138\uC694. \uBAA8\uB4E0 \uAE30\uAE30\uC5D0\uC11C \uB514\uC790\uC778\uC774 \uC644\uBCBD\uD558\uAC8C \uC791\uB3D9\uD558\uB294\uC9C0 \uD655\uC778\uD558\uC138\uC694!" } }
  },
  "sidePanelGuidedTourStep": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC0AC\uC774\uB4DC \uD328\uB110: \uC694\uC18C \uC0AC\uC6A9\uC790 \uC815\uC758" } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "**\uC77C\uBC18 \uD0ED** \u2013 \uC120\uD0DD\uD55C \uC694\uC18C\uB97C \uAD6C\uC131\uD569\uB2C8\uB2E4.\n\n**\uC2A4\uD0C0\uC77C \uD0ED** \u2013 \uD328\uB529, \uC5EC\uBC31, \uD14C\uB450\uB9AC \uB4F1\uC744 \uC0AC\uC6A9\uC790 \uC9C0\uC815\uD569\uB2C8\uB2E4.\n\n**\uD45C\uC2DC \uC5EC\uBD80 \uD0ED** \u2013 \uC774 \uC694\uC18C\uB97C \uBCFC \uC218 \uC788\uB294 \uC0AC\uC6A9\uC790(\uB85C\uADF8\uC778\uD55C \uC0AC\uC6A9\uC790, \uB85C\uADF8\uC544\uC6C3\uD55C \uC0AC\uC6A9\uC790 \uB610\uB294 \uD2B9\uC815 \uC5ED\uD560)\uB97C \uC81C\uC5B4\uD569\uB2C8\uB2E4.\n\n**\uC774\uBCA4\uD2B8 \uD0ED** \u2013 \uC694\uC18C\uAC00 \uB3D9\uC791\uC744 \uC9C0\uC6D0\uD558\uB294 \uACBD\uC6B0, \uB3D9\uC801 \uC0C1\uD638\uC791\uC6A9\uC744 \uC704\uD574 \uC5EC\uAE30\uC5D0\uC11C \uB3D9\uC791\uC744 \uC124\uC815\uD569\uB2C8\uB2E4." } }
  },
  "previewPublishGuidedTourStep": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC571 \uBBF8\uB9AC \uBCF4\uAE30 \uBC0F \uAC8C\uC2DC" } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "**\uBBF8\uB9AC\uBCF4\uAE30**\uB97C \uD074\uB9AD\uD558\uC5EC \uC571\uC744 \uBE44\uACF5\uAC1C\uB85C \uD14C\uC2A4\uD2B8\uD574 \uBCF4\uC138\uC694. \uC900\uBE44\uAC00 \uB418\uBA74 **\uAC8C\uC2DC**\uB97C \uD074\uB9AD\uD558\uC5EC \uB3C4\uBA54\uC778\uC744 \uD1B5\uD574 \uBAA8\uB4E0 \uC0AC\uB78C\uACFC \uACF5\uC720\uD558\uC138\uC694." } }
  },
  "builderToast": {
    "details": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC138\uBD80" } },
    "defaultTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC608\uAE30\uCE58 \uC54A\uC740 \uC624\uB958" } },
    "defaultMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC608\uAE30\uCE58 \uC54A\uC740 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4. \uB098\uC911\uC5D0 \uB2E4\uC2DC \uC2DC\uB3C4\uD574 \uC8FC\uC138\uC694." } },
    "invalidContextTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC798\uBABB\uB41C \uC694\uCCAD" } },
    "invalidContextMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC694\uCCAD\uC774 \uC798\uBABB\uB418\uC5C8\uC2B5\uB2C8\uB2E4." } },
    "InvalidContentTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC798\uBABB\uB41C \uD615\uC2DD" } },
    "invalidContentMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD558\uB098 \uC774\uC0C1\uC758 \uD544\uB4DC\uC5D0 \uC798\uBABB\uB41C \uAC12\uC774 \uD3EC\uD568\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4." } },
    "serviceMisconfiguredTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAD6C\uC131\uC774 \uC644\uB8CC\uB418\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4" } },
    "serviceMisconfiguredMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAD6C\uC131\uC744 \uD655\uC778\uD558\uC138\uC694." } },
    "errorWorkflowActionDispatch": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": '"' }, { "t": 4, "k": "name" }, { "t": 3, "v": '" \uC791\uC5C5\uC774 \uC2E4\uD328\uD588\uC2B5\uB2C8\uB2E4. ' }] } },
    "errorDataSourceDispatch": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": '"' }, { "t": 4, "k": "name" }, { "t": 3, "v": '" \uB370\uC774\uD130\uB97C \uB85C\uB4DC\uD558\uB294 \uB370 \uC2E4\uD328\uD588\uC2B5\uB2C8\uB2E4. ' }] } }
  },
  "workflowAction": {
    "sampleDataModalTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "actionLabel" }, { "t": 3, "v": "\uC5D0 \uB300\uD55C \uD398\uC774\uB85C\uB4DC" }] } },
    "sampleDataModalSubTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "JSON \uD398\uC774\uB85C\uB4DC" } },
    "testActionDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774 \uC791\uC5C5\uC744 \uBBF8\uB9AC \uBCF4\uAE30 \uBAA8\uB4DC\uC5D0\uC11C \uC2E4\uD589\uD558\uC5EC \uCD9C\uB825\uC744 \uCEA1\uCC98\uD558\uACE0 \uD6C4\uC18D \uC791\uC5C5\uC5D0\uC11C \uC0AC\uC6A9\uD560 \uC218 \uC788\uB3C4\uB85D \uD558\uC138\uC694." } }
  }
};

export { resource as default };
//# sourceMappingURL=ko-DBktiLs7.mjs.map
