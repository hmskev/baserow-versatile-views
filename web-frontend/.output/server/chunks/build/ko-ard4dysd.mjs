!(function() {
  try {
    var e = false ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
    var n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "31577c9d-c924-47f0-89fa-0d44e60c33d9", e._sentryDebugIdIdentifier = "sentry-dbid-31577c9d-c924-47f0-89fa-0d44e60c33d9");
  } catch (e2) {
  }
})();
const resource = {
  "paginator": {
    "page": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD398\uC774\uC9C0" } },
    "of": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "pages" }, { "t": 3, "v": " \uC911" }] } }
  },
  "copied": {
    "label": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBCF5\uC0AC \uC644\uB8CC!" } }
  },
  "sidebarApplication": {
    "rename": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774\uB984 \uBCC0\uACBD" } },
    "duplicate": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBCF5\uC81C" } },
    "viewTrash": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD734\uC9C0\uD1B5 \uBCF4\uAE30" } },
    "delete": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC0AD\uC81C" } },
    "snapshots": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC2A4\uB0C5\uC0F7" } }
  },
  "duplicateApplicationJobType": {
    "duplicating": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBCF5\uC81C \uC911" } },
    "duplicatedTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC774 \uBCF5\uC81C\uB418\uC5C8\uC2B5\uB2C8\uB2E4" } }
  },
  "InstallTemplateJobType": {
    "installing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC124\uCE58 \uC911" } },
    "installedTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD15C\uD50C\uB9BF\uC774 \uC124\uCE58\uB418\uC5C8\uC2B5\uB2C8\uB2E4" } }
  },
  "sidebar": {
    "createWorkspace": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC791\uC5C5\uACF5\uAC04 \uC0DD\uC131" } },
    "addNewWorkspace": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC0C8 \uC791\uC5C5\uACF5\uAC04 \uCD94\uAC00" } },
    "inviteOthers": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uCD08\uB300" } },
    "members": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBA64\uBC84" } },
    "logoff": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB85C\uADF8\uC544\uC6C3" } },
    "errorNoWorkspace": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC791\uC5C5\uACF5\uAC04\uC774 \uC5C6\uC2B5\uB2C8\uB2E4." } },
    "adminTools": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAD00\uB9AC\uC790 \uB3C4\uAD6C" } },
    "home": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD648" } },
    "dashboard": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB300\uC2DC\uBCF4\uB4DC" } },
    "trash": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD734\uC9C0\uD1B5" } },
    "settings": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB0B4 \uC124\uC815" } },
    "notifications": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC54C\uB9BC" } },
    "adminSettings": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAD00\uB9AC\uC790 \uC124\uC815" } },
    "general": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC77C\uBC18" } },
    "people": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC0AC\uB78C\uB4E4" } },
    "licenses": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB77C\uC774\uC120\uC2A4" } }
  },
  "accountForm": {
    "nameLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774\uB984" } },
    "languageLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC778\uD130\uD398\uC774\uC2A4 \uC5B8\uC5B4" } }
  },
  "accountSettings": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uACC4\uC815" } },
    "changedTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBCC0\uACBD\uB428" } },
    "changedDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uACC4\uC815 \uC815\uBCF4\uAC00 \uBCC0\uACBD\uB418\uC5C8\uC2B5\uB2C8\uB2E4." } },
    "submitButton": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uACC4\uC815 \uC5C5\uB370\uC774\uD2B8" } }
  },
  "settingsModal": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB0B4 \uC124\uC815" } }
  },
  "notificationPanel": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC54C\uB9BC" } },
    "markAllAsRead": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBAA8\uB450 \uC77D\uC74C\uC73C\uB85C \uD45C\uC2DC" } },
    "clearAll": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBAA8\uB450 \uC9C0\uC6B0\uAE30" } },
    "noNotificationTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC54C\uB9BC\uC774 \uC5C6\uC2B5\uB2C8\uB2E4" } },
    "noNotification": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC911\uC694\uD55C \uC5C5\uB370\uC774\uD2B8\uC640 Baserow\uC5D0\uC11C \uC5B8\uAE09\uB420 \uB54C \uC54C\uB824\uB4DC\uB9AC\uACA0\uC2B5\uB2C8\uB2E4." } },
    "newNotificationsAvailable": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC0C8\uB85C\uC6B4 \uC54C\uB9BC\uC774 \uC788\uC2B5\uB2C8\uB2E4" } },
    "refresh": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC0C8\uB85C\uACE0\uCE68" } }
  },
  "clearAllNotificationsConfirmModal": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBAA8\uB4E0 \uC54C\uB9BC\uC744 \uC9C0\uC6B0\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?" } },
    "message": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBAA8\uB4E0 \uC54C\uB9BC\uC774 \uC601\uAD6C\uC801\uC73C\uB85C \uC0AD\uC81C\uB418\uBA70 \uB2E4\uC2DC \uBCFC \uC218 \uC5C6\uC2B5\uB2C8\uB2E4." } }
  },
  "passwordSettings": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBE44\uBC00\uBC88\uD638 \uBCC0\uACBD" } },
    "changedTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBE44\uBC00\uBC88\uD638\uAC00 \uBCC0\uACBD\uB418\uC5C8\uC2B5\uB2C8\uB2E4" } },
    "changedDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBE44\uBC00\uBC88\uD638\uAC00 \uBCC0\uACBD\uB418\uC5C8\uC2B5\uB2C8\uB2E4. \uB2E4\uC74C\uC5D0 \uB85C\uADF8\uC778\uD560 \uB54C \uC0C8 \uBE44\uBC00\uBC88\uD638\uB97C \uC0AC\uC6A9\uD574\uC57C \uD569\uB2C8\uB2E4." } },
    "oldPasswordLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774\uC804 \uBE44\uBC00\uBC88\uD638" } },
    "oldPasswordRequiredError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774\uC804 \uBE44\uBC00\uBC88\uD638\uAC00 \uD544\uC694\uD569\uB2C8\uB2E4." } },
    "newPasswordLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC0C8 \uBE44\uBC00\uBC88\uD638" } },
    "repeatNewPasswordLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC0C8 \uBE44\uBC00\uBC88\uD638 \uC7AC\uC785\uB825" } },
    "repeatNewPasswordMatchError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774 \uD544\uB4DC\uB294 \uC0C8 \uBE44\uBC00\uBC88\uD638 \uD544\uB4DC\uC640 \uC77C\uCE58\uD574\uC57C \uD569\uB2C8\uB2E4." } },
    "submitButton": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBE44\uBC00\uBC88\uD638 \uBCC0\uACBD" } },
    "errorInvalidOldPasswordTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC798\uBABB\uB41C \uBE44\uBC00\uBC88\uD638" } },
    "errorInvalidOldPasswordMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774\uC804 \uBE44\uBC00\uBC88\uD638\uAC00 \uC798\uBABB\uB418\uC5B4 \uBE44\uBC00\uBC88\uD638\uB97C \uBCC0\uACBD\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4." } }
  },
  "deleteAccountSettings": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uACC4\uC815 \uC0AD\uC81C" } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "\uD604\uC7AC \uBE44\uBC00\uBC88\uD638\uB97C \uC785\uB825\uD558\uACE0 \uBC84\uD2BC\uC744 \uD074\uB9AD\uD558\uC5EC \uACC4\uC815 \uC0AD\uC81C\uB97C \uC608\uC57D\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uACC4\uC815\uC740 " }, { "t": 4, "k": "days" }, { "t": 3, "v": "\uC77C \uD6C4\uC5D0 \uC601\uAD6C\uC801\uC73C\uB85C \uC0AD\uC81C\uB429\uB2C8\uB2E4. \uADF8 \uB3D9\uC548 \uB2E4\uC2DC \uB85C\uADF8\uC778\uD558\uBA74 \uACC4\uC815 \uC0AD\uC81C\uAC00 \uCDE8\uC18C\uB429\uB2C8\uB2E4." }] } },
    "workspaceNoticeDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uACC4\uC815\uC774 \uC601\uAD6C\uC801\uC73C\uB85C \uC0AD\uC81C\uB418\uBA74, \uB9C8\uC9C0\uB9C9\uC73C\uB85C \uD65C\uC131\uD654\uB41C \uAD00\uB9AC\uC790 \uAD8C\uD55C\uC744 \uAC00\uC9C4 \uC0AC\uC6A9\uC790\uC77C \uACBD\uC6B0 \uD574\uB2F9 \uC791\uC5C5\uACF5\uAC04\uACFC \uAD00\uB828\uB41C \uBAA8\uB4E0 \uB370\uC774\uD130\uB3C4 \uC0AD\uC81C\uB429\uB2C8\uB2E4. \uC544\uB798 \uD45C\uC2DC\uB41C \uC791\uC5C5\uACF5\uAC04\uC740 \uB2F9\uC2E0\uC774 \uC720\uC77C\uD55C \uAD00\uB9AC\uC790\uC774\uAE30 \uB54C\uBB38\uC5D0 \uC0AD\uC81C\uB420 \uAC83\uC785\uB2C8\uB2E4. \uC0AD\uC81C\uB97C \uBC29\uC9C0\uD558\uB824\uBA74 \uACC4\uC815\uC744 \uC0AD\uC81C\uD558\uAE30 \uC804\uC5D0 \uB2E4\uB978 \uC0AC\uC6A9\uC790\uC5D0\uAC8C \uAD00\uB9AC\uC790\uB97C \uBD80\uC5EC\uD574\uC57C \uD569\uB2C8\uB2E4." } },
    "orphanWorkspaces": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC720\uC608 \uAE30\uAC04 \uD6C4 \uC601\uAD6C\uC801\uC73C\uB85C \uC0AD\uC81C\uB429\uB2C8\uB2E4" } },
    "orphanWorkspaceMemberCount": { "t": 0, "b": { "t": 1, "c": [{ "t": 2, "i": [{ "t": 3 }], "s": "\uACF5\uC720\uB41C \uC0AC\uC6A9\uC790 \uC5C6\uC74C" }, { "t": 2, "i": [{ "t": 3 }], "s": "\uD55C \uBA85\uC758 \uC0AC\uC6A9\uC790\uC640 \uACF5\uC720\uB428" }, { "t": 2, "i": [{ "t": 4, "k": "count" }, { "t": 3, "v": "\uBA85\uC758 \uC0AC\uC6A9\uC790\uC640 \uACF5\uC720\uB428" }] }] } },
    "password": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBE44\uBC00\uBC88\uD638" } },
    "passwordConfirm": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBE44\uBC00\uBC88\uD638 \uC7AC\uC785\uB825" } },
    "repeatPasswordMatchError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774 \uD544\uB4DC\uB294 \uCCAB \uBC88\uC9F8 \uBE44\uBC00\uBC88\uD638 \uD544\uB4DC\uC640 \uC77C\uCE58\uD574\uC57C \uD569\uB2C8\uB2E4." } },
    "submitButton": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uACC4\uC815 \uC0AD\uC81C" } },
    "errorInvalidPasswordTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC798\uBABB\uB41C \uBE44\uBC00\uBC88\uD638" } },
    "errorInvalidPasswordMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBE44\uBC00\uBC88\uD638\uAC00 \uC798\uBABB\uB418\uC5B4 \uACC4\uC815\uC744 \uC0AD\uC81C\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4." } },
    "errorUserIsLastAdminTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB9C8\uC9C0\uB9C9 \uAD00\uB9AC\uC790" } },
    "errorUserIsLastAdminMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB2F9\uC2E0\uC740 \uC774 Baserow \uC778\uC2A4\uD134\uC2A4\uC758 \uB9C8\uC9C0\uB9C9 \uAD00\uB9AC\uC790\uC774\uAE30 \uB54C\uBB38\uC5D0 \uACC4\uC815\uC744 \uC0AD\uC81C\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4." } },
    "accountDeletedSuccessTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uACC4\uC815 \uC0AD\uC81C\uAC00 \uC608\uC57D\uB418\uC5C8\uC2B5\uB2C8\uB2E4" } },
    "accountDeletedSuccessMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uACC4\uC815\uC774 \uC0AD\uC81C \uC608\uC815\uC73C\uB85C \uC608\uC57D\uB418\uC5C8\uC2B5\uB2C8\uB2E4." } },
    "workspaceLoadingError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC791\uC5C5\uACF5\uAC04 \uD655\uC778 \uC2E4\uD328" } },
    "workspaceLoadingErrorDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC0AD\uC81C\uB420 \uC791\uC5C5\uACF5\uAC04\uC744 \uD655\uC778\uD558\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4. \uD398\uC774\uC9C0\uB97C \uC0C8\uB85C\uACE0\uCE68\uD574 \uC8FC\uC138\uC694." } }
  },
  "error": {
    "alreadyExistsTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC0AC\uC6A9\uC790\uAC00 \uC774\uBBF8 \uC874\uC7AC\uD569\uB2C8\uB2E4" } },
    "alreadyExistsMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC81C\uACF5\uB41C \uC774\uBA54\uC77C \uC8FC\uC18C\uB97C \uAC00\uC9C4 \uC0AC\uC6A9\uC790\uAC00 \uC774\uBBF8 \uC874\uC7AC\uD569\uB2C8\uB2E4." } },
    "passwordRequired": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBE44\uBC00\uBC88\uD638\uAC00 \uD544\uC694\uD569\uB2C8\uB2E4." } },
    "invalidEmail": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC720\uD6A8\uD55C \uC774\uBA54\uC77C \uC8FC\uC18C\uB97C \uC785\uB825\uD558\uC138\uC694." } },
    "disabledAccountTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uACC4\uC815 \uBE44\uD65C\uC131\uD654\uB428" } },
    "disabledAccountMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774 \uC0AC\uC6A9\uC790 \uACC4\uC815\uC740 \uBE44\uD65C\uC131\uD654\uB418\uC5C8\uC2B5\uB2C8\uB2E4." } },
    "incorrectCredentialTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC798\uBABB\uB41C \uC790\uACA9 \uC99D\uBA85" } },
    "incorrectCredentialMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC81C\uACF5\uB41C \uC774\uBA54\uC77C \uC8FC\uC18C\uB098 \uBE44\uBC00\uBC88\uD638\uAC00 \uC798\uBABB\uB418\uC5C8\uC2B5\uB2C8\uB2E4." } },
    "inputRequired": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC785\uB825\uC774 \uD544\uC694\uD569\uB2C8\uB2E4." } },
    "disabledPasswordProviderTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBE44\uBC00\uBC88\uD638 \uC778\uC99D\uC774 \uBE44\uD65C\uC131\uD654\uB418\uC5C8\uC2B5\uB2C8\uB2E4." } },
    "disabledPasswordProviderMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB2E4\uB978 \uC778\uC99D \uC81C\uACF5\uC790\uB97C \uC0AC\uC6A9\uD558\uC138\uC694." } },
    "captchaVerificationFailedTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uCEA1\uCC28 \uC778\uC99D \uC2E4\uD328" } },
    "captchaVerificationFailedMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uCEA1\uCC28 \uC778\uC99D\uC5D0 \uC2E4\uD328\uD588\uC2B5\uB2C8\uB2E4. \uB2E4\uC2DC \uC2DC\uB3C4\uD574 \uC8FC\uC138\uC694." } }
  },
  "field": {
    "language": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC5B8\uC5B4" } },
    "emailAddress": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774\uBA54\uC77C \uC8FC\uC18C" } },
    "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774\uB984" } },
    "password": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBE44\uBC00\uBC88\uD638" } },
    "passwordRepeat": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBE44\uBC00\uBC88\uD638 \uC7AC\uC785\uB825" } }
  },
  "invitationTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uCD08\uB300" } },
  "invitationMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "invitedBy" }, { "t": 3, "v": "\uB2D8\uC774 " }, { "t": 4, "k": "workspace" }, { "t": 3, "v": "\uC5D0 \uB2F9\uC2E0\uC744 \uCD08\uB300\uD588\uC2B5\uB2C8\uB2E4." }] } },
  "workspaceForm": {
    "nameLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774\uB984" } }
  },
  "leaveWorkspaceModal": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "workspace" }, { "t": 3, "v": " \uB098\uAC00\uAE30" }] } },
    "message": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "\uC791\uC5C5\uACF5\uAC04 " }, { "t": 4, "k": "workspace" }, { "t": 3, "v": "\uC744 \uC815\uB9D0\uB85C \uB098\uAC00\uC2DC\uACA0\uC2B5\uB2C8\uAE4C? \uAD00\uB828 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0 \uB354 \uC774\uC0C1 \uC811\uADFC\uD560 \uC218 \uC5C6\uC73C\uBA70, \uB2E4\uC2DC \uC811\uADFC\uD558\uB824\uBA74 \uAD00\uB9AC\uC790 \uC911 \uD55C \uBA85\uC774 \uB2E4\uC2DC \uCD08\uB300\uD574\uC57C \uD569\uB2C8\uB2E4. \uC791\uC5C5\uACF5\uAC04\uC744 \uB098\uAC00\uBA74 \uC0AD\uC81C\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uB2E4\uB978 \uBAA8\uB4E0 \uBA64\uBC84\uB294 \uC5EC\uC804\uD788 \uC811\uADFC\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB9C8\uC9C0\uB9C9 \uAD00\uB9AC\uC790\uB77C\uBA74 \uC720\uC9C0 \uAD00\uB9AC\uB418\uC9C0 \uC54A\uAE30 \uB54C\uBB38\uC5D0 \uC791\uC5C5\uACF5\uAC04\uC744 \uB098\uAC08 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4." }] } },
    "leave": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC791\uC5C5\uACF5\uAC04 \uB098\uAC00\uAE30" } }
  },
  "exportWorkspaceModal": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB0B4\uBCF4\uB0B4\uAE30" } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB2E4\uB978 Baserow \uC778\uC2A4\uD134\uC2A4\uC758 .zip \uD30C\uC77C\uC744 \uC5C5\uB85C\uB4DC\uD558\uC5EC \uAE30\uC874 Baserow \uB370\uC774\uD130\uB97C \uAC00\uC838\uC62C \uC218 \uC788\uC2B5\uB2C8\uB2E4." } },
    "exportSettings": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB0B4\uBCF4\uB0B4\uAE30 \uC124\uC815" } },
    "export": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB370\uC774\uD130 \uB0B4\uBCF4\uB0B4\uAE30" } },
    "reset": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC0C8\uB85C \uC2DC\uC791" } },
    "cancel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uCDE8\uC18C" } },
    "download": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB2E4\uC6B4\uB85C\uB4DC" } },
    "importingState": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAC00\uC838\uC624\uB294 \uC911" } },
    "noExports": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774 \uC791\uC5C5\uACF5\uAC04\uC5D0\uB294 \uC544\uC9C1 \uB0B4\uBCF4\uB0B8 \uB0B4\uC6A9\uC774 \uC5C6\uC2B5\uB2C8\uB2E4." } },
    "created": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC0DD\uC131\uB428" } },
    "exportingState": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB0B4\uBCF4\uB0B4\uB294 \uC911..." } },
    "exportingTableState": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "\uB0B4\uBCF4\uB0B4\uAE30: " }, { "t": 4, "k": "table" }] } },
    "exportingCreateArchiveState": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC544\uCE74\uC774\uBE0C \uC0DD\uC131" } }
  },
  "exportWorkspaceForm": {
    "exportSettingsLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB0B4\uBCF4\uB0B4\uAE30 \uC124\uC815" } },
    "onlyStructureLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAD6C\uC870\uB9CC \uB0B4\uBCF4\uB0B4\uAE30" } },
    "onlyStructureDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD65C\uC131\uD654\uD558\uBA74 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC758 \uAD6C\uC870\uB9CC \uB0B4\uBCF4\uB0B4\uC9D1\uB2C8\uB2E4. \uB370\uC774\uD130\uB294 \uD3EC\uD568\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4." } },
    "selectDataToExport": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB0B4\uBCF4\uB0BC \uB370\uC774\uD130\uB97C \uC120\uD0DD\uD558\uC138\uC694" } },
    "selectAll": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBAA8\uB450 \uC120\uD0DD" } },
    "deselectAll": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBAA8\uB450 \uC120\uD0DD \uD574\uC81C" } }
  },
  "importWorkspaceModal": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Baserow \uB370\uC774\uD130 \uAC00\uC838\uC624\uAE30" } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB2E4\uB978 Baserow \uC778\uC2A4\uD134\uC2A4\uC5D0\uC11C \uB0B4\uBCF4\uB0B8 .zip \uD30C\uC77C\uC744 \uC5C5\uB85C\uB4DC\uD558\uC5EC \uAE30\uC874 Baserow \uB370\uC774\uD130\uB97C \uAC00\uC838\uC62C \uC218 \uC788\uC2B5\uB2C8\uB2E4." } },
    "import": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB370\uC774\uD130 \uAC00\uC838\uC624\uAE30" } },
    "upload": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC5C5\uB85C\uB4DC" } },
    "cancel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uCDE8\uC18C" } },
    "done": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC644\uB8CC" } },
    "close": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB2EB\uAE30" } },
    "retry": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB2E4\uC2DC \uC2DC\uB3C4" } },
    "uploading": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC5C5\uB85C\uB4DC \uC911..." } },
    "chooseFile": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD30C\uC77C \uC120\uD0DD" } },
    "selectApplications": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAC00\uC838\uC62C \uB370\uC774\uD130 \uC120\uD0DD" } },
    "deselectAll": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBAA8\uB450 \uC120\uD0DD \uD574\uC81C" } },
    "selectAll": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBAA8\uB450 \uC120\uD0DD" } },
    "databases": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB370\uC774\uD130\uBCA0\uC774\uC2A4" } },
    "applications": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC560\uD50C\uB9AC\uCF00\uC774\uC158" } },
    "successTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Baserow \uB370\uC774\uD130\uB97C \uC131\uACF5\uC801\uC73C\uB85C \uAC00\uC838\uC654\uC2B5\uB2C8\uB2E4" } },
    "successMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "count" }, { "t": 3, "v": "\uAC1C\uC758 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC744 \uAC00\uC838\uC654\uC2B5\uB2C8\uB2E4" }] } },
    "signatureVerificationNote": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC2E0\uB8B0\uD560 \uC218 \uC5C6\uB294 \uC18C\uC2A4\uC758 zip \uD30C\uC77C\uC740 \uAC00\uC838\uC62C \uC218 \uC5C6\uC2B5\uB2C8\uB2E4." } },
    "invalidResourceTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC798\uBABB\uB41C \uB9AC\uC18C\uC2A4" } },
    "invalidResourceMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC81C\uACF5\uB41C \uD30C\uC77C\uC740 \uC720\uD6A8\uD55C Baserow \uB0B4\uBCF4\uB0B4\uAE30\uAC00 \uC544\uB2D9\uB2C8\uB2E4." } },
    "untrustedPublicKeyTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC2E0\uB8B0\uD560 \uC218 \uC5C6\uB294 \uC11C\uBA85" } },
    "untrustedPublicKeyMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC81C\uACF5\uB41C \uD30C\uC77C\uC740 \uC2E0\uB8B0\uD560 \uC218 \uC5C6\uB294 \uACF5\uAC1C \uD0A4\uB85C \uC11C\uBA85\uB418\uC5C8\uC2B5\uB2C8\uB2E4. \uAD00\uB9AC\uC790\uC5D0\uAC8C \uACF5\uAC1C \uD0A4\uB97C \uC2E0\uB8B0\uD560 \uC218 \uC788\uB294 \uD0A4 \uBAA9\uB85D\uC5D0 \uCD94\uAC00\uD558\uAC70\uB098 \uC11C\uBA85 \uD655\uC778\uC744 \uBE44\uD65C\uC131\uD654\uD558\uC5EC \uC774 \uD30C\uC77C\uC744 \uAC00\uC838\uC62C \uC218 \uC788\uB3C4\uB85D \uC694\uCCAD\uD558\uC138\uC694." } },
    "importingState": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBD88\uB7EC\uC624\uAE30..." } },
    "importingTableStructure": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "\uC0DD\uC131 \uC911: " }, { "t": 4, "k": "table" }] } },
    "importingTableData": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "\uB370\uC774\uD130 \uAC00\uC838\uC624\uAE30: " }, { "t": 4, "k": "table" }] } },
    "uploadAndImport": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC5C5\uB85C\uB4DC & \uAC00\uC838\uC624\uAE30" } }
  },
  "dashboardWorkspace": {
    "createApplication": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC0C8\uB85C \uB9CC\uB4E4\uAE30" } }
  },
  "dashboardVerifyEmail": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBA54\uC77C\uD568\uC744 \uD655\uC778\uD558\uACE0 \uC774\uBA54\uC77C\uC744 \uC778\uC99D\uD558\uAE30 \uC704\uD55C \uB9C1\uD06C\uB97C \uD074\uB9AD\uD558\uC138\uC694." } },
    "resendConfirmationEmail": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD655\uC778 \uC774\uBA54\uC77C \uB2E4\uC2DC \uBCF4\uB0B4\uAE30" } }
  },
  "resendEmailVerification": {
    "confirmationEmailSentTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD655\uC778 \uC774\uBA54\uC77C \uBC1C\uC1A1" } },
    "confirmationEmailSentDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD655\uC778 \uC774\uBA54\uC77C\uC774 \uBC1C\uC1A1\uB418\uC5C8\uC2B5\uB2C8\uB2E4." } }
  },
  "verifyEmailAddress": {
    "confirmation": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774\uBA54\uC77C \uC8FC\uC18C\uAC00 \uD655\uC778\uB418\uC5C8\uC2B5\uB2C8\uB2E4." } },
    "goToDashboard": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB300\uC2DC\uBCF4\uB4DC\uB85C \uC774\uB3D9" } },
    "invalidToken": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC720\uD6A8\uD558\uC9C0 \uC54A\uC740 \uD655\uC778 \uD1A0\uD070\uC785\uB2C8\uB2E4." } },
    "disabledPasswordProvider": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBE44\uBC00\uBC88\uD638 \uC778\uC99D \uC81C\uACF5\uC790\uAC00 \uBE44\uD65C\uC131\uD654\uB418\uC5C8\uC2B5\uB2C8\uB2E4." } },
    "emailMismatchWarning": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD655\uC778\uB41C \uC774\uBA54\uC77C\uC774 \uD604\uC7AC \uC0AC\uC6A9 \uC911\uC778 \uACC4\uC815\uC5D0 \uC18D\uD558\uC9C0 \uC54A\uC74C\uC744 \uC720\uC758\uD558\uC138\uC694." } }
  },
  "emailNotVerified": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774\uBA54\uC77C \uD655\uC778 \uD544\uC694" } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBA54\uC77C\uD568\uC744 \uD655\uC778\uD558\uACE0 \uB9C1\uD06C\uB97C \uD074\uB9AD\uD558\uC138\uC694. \uD655\uC778\uB418\uBA74 \uACC4\uC815\uC774 \uD65C\uC131\uD654\uB429\uB2C8\uB2E4." } },
    "resend": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD655\uC778 \uC774\uBA54\uC77C \uB2E4\uC2DC \uBCF4\uB0B4\uAE30" } }
  },
  "workspaceInvitation": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uCD08\uB300" } },
    "message": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "by" }, { "t": 3, "v": "\uB2D8\uC774 " }, { "t": 4, "k": "workspace" }, { "t": 3, "v": "\uC5D0 \uB2F9\uC2E0\uC744 \uCD08\uB300\uD588\uC2B5\uB2C8\uB2E4." }] } },
    "reject": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAC70\uC808" } },
    "accept": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC218\uB77D" } }
  },
  "workspaceInviteForm": {
    "invitationFormTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774\uBA54\uC77C\uB85C \uCD08\uB300" } },
    "optionalMessagePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC120\uD0DD\uC801 \uBA54\uC2DC\uC9C0" } },
    "errorInvalidEmail": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC720\uD6A8\uD55C \uC774\uBA54\uC77C \uC8FC\uC18C\uB97C \uC785\uB825\uD558\uC138\uC694." } },
    "errorTooLongMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "\uBA54\uC2DC\uC9C0\uB294 " }, { "t": 4, "k": "amount" }, { "t": 3, "v": "\uC790 \uC774\uD558\uB85C \uC81C\uD55C\uB429\uB2C8\uB2E4." }] } },
    "additionalRoles": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uCD94\uAC00 \uC5ED\uD560" } }
  },
  "workspaceContext": {
    "renameWorkspace": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC791\uC5C5\uACF5\uAC04 \uC774\uB984 \uBCC0\uACBD" } },
    "exportWorkspace": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB370\uC774\uD130 \uB0B4\uBCF4\uB0B4\uAE30" } },
    "importWorkspace": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB370\uC774\uD130 \uAC00\uC838\uC624\uAE30" } },
    "settings": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC124\uC815" } },
    "members": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBA64\uBC84" } },
    "auditLog": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAC10\uC0AC \uB85C\uADF8" } },
    "viewTrash": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD734\uC9C0\uD1B5 \uBCF4\uAE30" } },
    "leaveWorkspace": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC791\uC5C5\uACF5\uAC04 \uB098\uAC00\uAE30" } },
    "deleteWorkspace": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC791\uC5C5\uACF5\uAC04 \uC0AD\uC81C" } }
  },
  "workspaceSettingsModal": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC791\uC5C5\uACF5\uAC04 \uC124\uC815" } }
  },
  "workspaceSettingType": {
    "generativeAI": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC0DD\uC131\uD615 AI" } }
  },
  "generativeAIModelType": {
    "openai": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "OpenAI" } },
    "openaiApiKeyLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "API \uD0A4" } },
    "openaiApiKeyDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD1B5\uD569\uC744 \uD65C\uC131\uD654\uD558\uB824\uBA74 OpenAI API \uD0A4\uB97C \uC81C\uACF5\uD558\uC138\uC694. [API \uD0A4 \uBC1B\uB294 \uBC29\uBC95](https://help.openai.com/en/articles/4936850-where-do-i-find-my-openai-api-key)." } },
    "openaiOrganization": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC870\uC9C1 (\uC120\uD0DD \uC0AC\uD56D)" } },
    "openaiModelsLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC0AC\uC6A9 \uAC00\uB2A5\uD55C \uBAA8\uB378" } },
    "openaiModelsDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Baserow\uC5D0\uC11C \uC0AC\uC6A9\uD560 \uC218 \uC788\uB294 \uC27C\uD45C\uB85C \uAD6C\uBD84\uB41C [OpenAI \uBAA8\uB378](https://platform.openai.com/docs/models/continuous-model-upgrades)\uC744 \uC81C\uACF5\uD558\uC138\uC694. (\uC608: `gpt-3.5-turbo,gpt-4`)" } },
    "anthropic": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Anthropic" } },
    "anthropicApiKeyLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "API \uD0A4" } },
    "anthropicApiKeyDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD1B5\uD569\uC744 \uD65C\uC131\uD654\uD558\uB824\uBA74 Anthropic API \uD0A4\uB97C \uC81C\uACF5\uD558\uC138\uC694. [API \uD0A4 \uBC1B\uB294 \uBC29\uBC95](https://docs.anthropic.com/en/api/getting-started)." } },
    "anthropicModelsLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC0AC\uC6A9 \uAC00\uB2A5\uD55C \uBAA8\uB378" } },
    "anthropicModelsDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Baserow\uC5D0\uC11C \uC0AC\uC6A9\uD560 \uC218 \uC788\uB294 \uC27C\uD45C\uB85C \uAD6C\uBD84\uB41C [Anthropic \uBAA8\uB378](https://docs.anthropic.com/en/docs/about-claude/models)\uC744 \uC81C\uACF5\uD558\uC138\uC694. (\uC608: `claude-3-5-sonnet-20241022,claude-3-opus-20240229`)" } },
    "mistral": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mistral" } },
    "mistralApiKeyLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "API \uD0A4" } },
    "mistralApiKeyDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD1B5\uD569\uC744 \uD65C\uC131\uD654\uD558\uB824\uBA74 Mistral API \uD0A4\uB97C \uC81C\uACF5\uD558\uC138\uC694. [API \uD0A4 \uBC1B\uB294 \uBC29\uBC95](https://docs.mistral.ai/getting-started/quickstart/)." } },
    "mistralModelsLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC0AC\uC6A9 \uAC00\uB2A5\uD55C \uBAA8\uB378" } },
    "mistralModelsDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Baserow\uC5D0\uC11C \uC0AC\uC6A9\uD560 \uC218 \uC788\uB294 \uC27C\uD45C\uB85C \uAD6C\uBD84\uB41C [Mistral \uBAA8\uB378](https://docs.mistral.ai/getting-started/models/models_overview/)\uC744 \uC81C\uACF5\uD558\uC138\uC694. (\uC608: `mistral-large-latest,mistral-small-latest`)" } },
    "ollama": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ollama" } },
    "ollamaHostLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD638\uC2A4\uD2B8" } },
    "ollamaHostDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "[Ollama](https://ollama.com/) \uC11C\uBC84\uC758 \uD638\uC2A4\uD2B8 \uC774\uB984\uC744 \uC81C\uACF5\uD558\uC138\uC694. \uC77C\uBC18\uC801\uC73C\uB85C \uB85C\uCEEC \uAE30\uAE30\uC5D0\uC11C \uC2E4\uD589\uB429\uB2C8\uB2E4." } },
    "ollamaModelsLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC0AC\uC6A9 \uAC00\uB2A5\uD55C \uBAA8\uB378" } },
    "ollamaModelsDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC27C\uD45C\uB85C \uAD6C\uBD84\uB41C [Ollama \uC124\uCE58\uB41C \uBAA8\uB378](https://ollama.com/library)\uC744 \uC81C\uACF5\uD558\uC138\uC694. \uBAA8\uB378\uC740 \uB2E4\uC6B4\uB85C\uB4DC \uBC0F \uC124\uCE58\uB418\uC5B4\uC57C \uC0AC\uC6A9 \uAC00\uB2A5\uD569\uB2C8\uB2E4. (\uC608: `llama2,mistral`)" } },
    "openRouterApiKeyDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC5F0\uB3D9 \uD558\uB824\uBA74 OpenRouter API \uD0A4\uB97C \uC81C\uACF5\uD558\uC138\uC694. [API \uD0A4 \uBC1B\uAE30](https://openrouter.ai/settings/keys)." } },
    "openRouterApiKeyLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "API \uD0A4" } },
    "openRouterModelsDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Baserow\uC5D0\uC11C \uC0AC\uC6A9\uD560 \uC218 \uC788\uB294 [OpenRouter \uBAA8\uB378](https://openrouter.ai/models) \uC758 \uBAA9\uB85D\uC744 \uC27C\uD45C\uB85C \uAD6C\uBD84\uD558\uC5EC \uC81C\uACF5\uD558\uC138\uC694. (\uC608 : `openai/gpt-4o,anthropic/claude-3-haiku`)" } },
    "openRouter": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "OpenRouter" } },
    "openRouterOrganization": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC870\uC9C1 (\uC120\uD0DD \uC0AC\uD56D)" } },
    "openRouterModelsLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD65C\uC131\uD654\uB41C \uBAA8\uB378" } },
    "openaiBaseUrl": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAE30\uBCF8 URL" } },
    "openaiBaseUrlDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBE44\uC5B4 \uC788\uC73C\uBA74 \uAE30\uBCF8\uC801\uC73C\uB85C \uAE30\uBCF8 OpenAI \uAE30\uBC18 URL\uC744 \uC0AC\uC6A9\uD569\uB2C8\uB2E4. \uC120\uD0DD\uC801\uC73C\uB85C https://eu.api.openai.com/v1, https://&lt;your-resource-name&gt;.openai.azure.com \uB610\uB294 \uAE30\uD0C0 OpenAI \uD638\uD658 API\uB85C \uBCC0\uACBD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4." } }
  },
  "generativeAIWorkspaceSettings": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC0DD\uC131\uD615 AI \uC124\uC815" } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774 \uC124\uC815\uC740 \uC791\uC5C5\uACF5\uAC04 \uC218\uC900\uC5D0\uC11C \uC0DD\uC131\uD615 AI \uAD6C\uC131\uC744 \uC124\uC815\uD558\uB294 \uB370 \uC0AC\uC6A9\uB429\uB2C8\uB2E4. AI \uD544\uB4DC\uC640 \uAC19\uC740 \uAE30\uB2A5\uC740 \uC9C0\uC6D0\uB418\uB294 \uBAA8\uB378\uC758 API \uD0A4\uAC00 \uC5C6\uAE30 \uB54C\uBB38\uC5D0 \uBE44\uD65C\uC131\uD654\uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC5EC\uAE30\uC5D0\uC11C \uC124\uC815\uC744 \uC81C\uACF5\uD558\uC5EC \uC774\uB7EC\uD55C \uAE30\uB2A5\uC744 \uD65C\uC131\uD654\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uAC12\uC744 \uBE44\uC6CC\uB450\uBA74 \uAE00\uB85C\uBC8C \uC778\uC2A4\uD134\uC2A4 \uC124\uC815\uC73C\uB85C \uAE30\uBCF8\uAC12\uC774 \uC124\uC815\uB429\uB2C8\uB2E4. \uC791\uC5C5\uACF5\uAC04\uC758 \uBAA8\uB4E0 \uC0AC\uB78C\uC774 \uC774\uB7EC\uD55C \uC124\uC815\uC744 \uACF5\uC720\uD55C\uB2E4\uB294 \uC810\uC5D0 \uC720\uC758\uD558\uC138\uC694." } },
    "changedTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC124\uC815\uC774 \uC62C\uBC14\uB974\uAC8C \uC5C5\uB370\uC774\uD2B8\uB418\uC5C8\uC2B5\uB2C8\uB2E4" } },
    "changedDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC124\uC815\uC774 \uC5C5\uB370\uC774\uD2B8\uB418\uC5C8\uC73C\uBA70 \uC774\uC81C \uC774 \uC791\uC5C5\uACF5\uAC04\uC5D0\uC11C \uC0AC\uC6A9\uB429\uB2C8\uB2E4." } },
    "submitButton": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC124\uC815 \uC5C5\uB370\uC774\uD2B8" } },
    "openSettings": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC124\uC815 \uC5F4\uAE30" } },
    "hideSettings": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC124\uC815 \uC228\uAE30\uAE30" } }
  },
  "createWorkspaceModal": {
    "createNew": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC0C8 \uC791\uC5C5\uACF5\uAC04 \uC0DD\uC131" } },
    "defaultName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC81C\uBAA9 \uC5C6\uB294 \uC791\uC5C5\uACF5\uAC04" } },
    "add": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC791\uC5C5\uACF5\uAC04 \uCD94\uAC00" } },
    "permissionDeniedTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAD8C\uD55C \uAC70\uBD80" } },
    "permissionDeniedBody": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC0C8 \uC791\uC5C5\uACF5\uAC04\uC744 \uC0DD\uC131\uD560 \uAD8C\uD55C\uC774 \uC5C6\uC2B5\uB2C8\uB2E4." } }
  },
  "templateCategories": {
    "search": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD15C\uD50C\uB9BF \uAC80\uC0C9" } },
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD15C\uD50C\uB9BF" } }
  },
  "templateHeader": {
    "use": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774 \uD15C\uD50C\uB9BF \uC0AC\uC6A9" } }
  },
  "trashSidebar": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD734\uC9C0\uD1B5" } },
    "unnamedWorkspace": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "\uC774\uB984 \uC5C6\uB294 \uC791\uC5C5\uACF5\uAC04 " }, { "t": 4, "k": "id" }] } },
    "workspaces": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC791\uC5C5\uACF5\uAC04" } }
  },
  "trashContents": {
    "message": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "\uC9C0\uB09C " }, { "t": 4, "k": "duration" }, { "t": 3, "v": " \uB3D9\uC548 \uC0AD\uC81C\uB41C \uD56D\uBAA9 \uBCF5\uC6D0" }] } },
    "empty": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC9C0\uB09C 3\uC77C \uB3D9\uC548 \uC0AD\uC81C\uB41C \uAC83\uC774 \uC5C6\uC2B5\uB2C8\uB2E4." } },
    "emptyButtonTrashed": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "type" }, { "t": 3, "v": "\uC744(\uB97C) \uC601\uAD6C\uC801\uC73C\uB85C \uC0AD\uC81C" }] } },
    "emptyButtonNotTrashed": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "\uC774 " }, { "t": 4, "k": "type" }, { "t": 3, "v": "\uC758 \uD734\uC9C0\uD1B5 \uBE44\uC6B0\uAE30" }] } },
    "unnamed": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "\uC774\uB984 \uC5C6\uB294 " }, { "t": 4, "k": "type" }, { "t": 3, "v": " " }, { "t": 4, "k": "id" }] } }
  },
  "trashEmptyModal": {
    "titleIsTrashed": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "name" }, { "t": 3, "v": "\uC744(\uB97C) \uC601\uAD6C\uC801\uC73C\uB85C \uC0AD\uC81C\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?" }] } },
    "titleIsNotTrashed": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "name" }, { "t": 3, "v": "\uC758 \uD734\uC9C0\uD1B5\uC744 \uBE44\uC6B0\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?" }] } },
    "messageIsTrashed": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774 \uC791\uC5C5\uC740 \uC601\uAD6C\uC801\uC73C\uB85C \uC0AD\uC81C\uB418\uBA70 \uBAA8\uB4E0 \uB0B4\uC6A9\uC774 \uC0AD\uC81C\uB429\uB2C8\uB2E4. \uC774\uD6C4\uC5D0\uB294 \uBCF5\uAD6C\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4." } },
    "messageIsNotTrashed": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB098\uC5F4\uB41C \uD56D\uBAA9\uC774 \uC601\uAD6C\uC801\uC73C\uB85C \uC0AD\uC81C\uB429\uB2C8\uB2E4. \uC774\uD6C4\uC5D0\uB294 \uBCF5\uAD6C\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4." } },
    "buttonIsTrashed": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC601\uAD6C\uC801\uC73C\uB85C \uC0AD\uC81C" } },
    "buttonIsNotTrashed": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBE44\uC6B0\uAE30" } }
  },
  "trashEntry": {
    "deletedUser": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC0AD\uC81C\uB41C \uC0AC\uC6A9\uC790" } },
    "fromParent": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "parent" }, { "t": 3, "v": "\uC5D0\uC11C" }] } },
    "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "user" }, { "t": 3, "v": "\uB2D8\uC774 " }, { "t": 4, "k": "type" }, { "t": 3, "v": " " }, { "t": 4, "k": "title" }, { "t": 3, "v": " " }, { "t": 4, "k": "parent" }, { "t": 3, "v": "\uC744(\uB97C) \uC0AD\uC81C\uD588\uC2B5\uB2C8\uB2E4" }] } },
    "restore": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBCF5\uC6D0" } },
    "andMore": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "... \uBC0F " }, { "t": 4, "k": "count" }, { "t": 3, "v": "\uAC1C \uB354" }] } },
    "unnamed": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "\uC774\uB984 \uC5C6\uB294 " }, { "t": 4, "k": "type" }, { "t": 3, "v": " " }, { "t": 4, "k": "id" }] } }
  },
  "trashModal": {
    "emptyTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC791\uC5C5\uACF5\uAC04\uC744 \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4" } },
    "emptyMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC5B4\uB5A4 \uC791\uC5C5\uACF5\uAC04\uC758 \uBA64\uBC84\uB3C4 \uC544\uB2D9\uB2C8\uB2E4. \uB370\uC774\uD130\uBCA0\uC774\uC2A4\uC640 \uAC19\uC740 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC740 \uC791\uC5C5\uACF5\uAC04\uC5D0 \uC18D\uD558\uBBC0\uB85C, \uC0DD\uC131\uD558\uB824\uBA74 \uC791\uC5C5\uACF5\uAC04\uC744 \uC0DD\uC131\uD574\uC57C \uD569\uB2C8\uB2E4." } },
    "emptyMessageWithoutCreatePermission": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC5B4\uB5A4 \uC791\uC5C5\uACF5\uAC04\uC758 \uBA64\uBC84\uB3C4 \uC544\uB2D9\uB2C8\uB2E4. \uB370\uC774\uD130\uBCA0\uC774\uC2A4\uC640 \uAC19\uC740 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC740 \uC791\uC5C5\uACF5\uAC04\uC5D0 \uC18D\uD558\uBBC0\uB85C, \uAD00\uB9AC\uC790\uC5D0\uAC8C \uCD08\uB300\uB97C \uBC1B\uC544\uC57C \uD569\uB2C8\uB2E4." } }
  },
  "uploadViaURLUserFileUpload": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "URL\uC5D0\uC11C \uC5C5\uB85C\uB4DC" } },
    "urlLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "URL" } },
    "urlError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC720\uD6A8\uD55C URL\uC774 \uD544\uC694\uD569\uB2C8\uB2E4." } }
  },
  "userFilesModal": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC5C5\uB85C\uB4DC \uBC29\uBC95" } }
  },
  "uploadFileUserFileUpload": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB0B4 \uC7A5\uCE58\uC5D0\uC11C \uC5C5\uB85C\uB4DC" } },
    "drop": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC5EC\uAE30\uC5D0 \uB4DC\uB86D" } },
    "clickOrDrop": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC5EC\uAE30\uB97C \uD074\uB9AD\uD558\uAC70\uB098 \uD30C\uC77C\uC744 \uB4DC\uB86D\uD558\uC138\uC694" } },
    "retry": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB2E4\uC2DC \uC2DC\uB3C4" } }
  },
  "uploadFileDropzone": {
    "drop": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC5EC\uAE30\uC5D0 \uB4DC\uB86D" } },
    "clickOrDrop": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC5EC\uAE30\uB97C \uD074\uB9AD\uD558\uAC70\uB098 \uD30C\uC77C\uC744 \uB4DC\uB86D\uD558\uC138\uC694" } },
    "errorTooManyFilesTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD30C\uC77C\uC774 \uB108\uBB34 \uB9CE\uC2B5\uB2C8\uB2E4" } },
    "errorTooManyFilesMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD55C \uAC1C\uC758 \uD30C\uC77C\uB9CC \uC5C5\uB85C\uB4DC\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4" } },
    "errorWrongFileTypeTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC798\uBABB\uB41C \uD30C\uC77C \uC720\uD615" } },
    "errorWrongFileTypeMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "type" }, { "t": 3, "v": " \uC720\uD615\uC758 \uD30C\uC77C\uC740 \uC5C5\uB85C\uB4DC\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4" }] } }
  },
  "createApplicationContext": {
    "fromTemplate": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD15C\uD50C\uB9BF\uC5D0\uC11C" } },
    "fromTemplateDesc": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAD8C\uC7A5 \uD15C\uD50C\uB9BF \uC911 \uD558\uB098\uB85C \uBE60\uB974\uAC8C \uC2DC\uC791" } },
    "table": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD14C\uC774\uBE14" } },
    "tableDesc": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB370\uC774\uD130\uBCA0\uC774\uC2A4\uC5D0\uC11C \uB370\uC774\uD130\uB97C \uAD00\uB9AC\uD560 \uC0C8 \uC7A5\uC18C\uB97C \uB9CC\uB4ED\uB2C8\uB2E4." } },
    "importWorkspace": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB370\uC774\uD130 \uAC00\uC838\uC624\uAE30" } },
    "importWorkspaceDesc": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAE30\uC874 \uB370\uC774\uD130\uB97C Baserow \uC778\uC2A4\uD134\uC2A4\uC5D0\uC11C \uCD94\uAC00\uD569\uB2C8\uB2E4." } }
  },
  "applicationForm": {
    "nameLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774\uB984" } },
    "namePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774\uB984 \uC785\uB825..." } }
  },
  "connectingToast": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC7AC\uC5F0\uACB0 \uC911" } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC2E4\uC2DC\uAC04 \uC5C5\uB370\uC774\uD2B8 \uC7AC\uAD6C\uCD95 \uC2DC\uB3C4 \uC911\uC785\uB2C8\uB2E4." } }
  },
  "failedConnectingToast": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC2E4\uD328" } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC2E4\uC2DC\uAC04 \uC5C5\uB370\uC774\uD2B8\uB97C \uB2E4\uC2DC \uC124\uC815\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4. \uACC4\uC18D\uD558\uB824\uBA74 \uD398\uC774\uC9C0\uB97C \uC0C8\uB85C\uACE0\uCE68\uD558\uC138\uC694." } },
    "action": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD398\uC774\uC9C0 \uC0C8\uB85C\uACE0\uCE68" } }
  },
  "authorizationErrorToast": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC778\uC99D \uC624\uB958" } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774 \uB9AC\uC18C\uC2A4\uB97C \uBCFC \uC218 \uC788\uB294 \uAD8C\uD55C\uC774 \uC5C6\uB294 \uAC83 \uAC19\uC2B5\uB2C8\uB2E4." } },
    "action": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD398\uC774\uC9C0 \uC0C8\uB85C\uACE0\uCE68" } }
  },
  "userSessionExpiredToast": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC138\uC158 \uB9CC\uB8CC" } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC778\uC99D \uD1A0\uD070\uC774 \uB9CC\uB8CC\uB418\uC5B4 \uB85C\uADF8\uC544\uC6C3\uB418\uC5C8\uC2B5\uB2C8\uB2E4. \uB2E4\uC2DC \uB85C\uADF8\uC778\uD558\uC138\uC694." } }
  },
  "userPasswordChangedToast": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBE44\uBC00\uBC88\uD638 \uBCC0\uACBD\uB428" } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBE44\uBC00\uBC88\uD638\uAC00 \uBCC0\uACBD\uB418\uC5C8\uC2B5\uB2C8\uB2E4. \uB2E4\uC2DC \uB85C\uADF8\uC778\uD558\uC138\uC694." } }
  },
  "restoreToast": {
    "restore": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "\uC0AD\uC81C\uB41C " }, { "t": 4, "k": "type" }, { "t": 3, "v": " \uBCF5\uC6D0" }] } }
  },
  "copyingToast": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBCF5\uC0AC \uC911..." } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB370\uC774\uD130 \uC900\uBE44 \uC911" } }
  },
  "PastingToast": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBD99\uC5EC\uB123\uAE30 \uC911..." } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB370\uC774\uD130 \uC900\uBE44 \uC911" } }
  },
  "clearingToast": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC9C0\uC6B0\uB294 \uC911..." } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB370\uC774\uD130 \uC900\uBE44 \uC911" } }
  },
  "undoRedoToast": {
    "undoingTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC2E4\uD589 \uCDE8\uC18C \uC911..." } },
    "undoingText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC791\uC5C5 \uC2E4\uD589 \uCDE8\uC18C \uC911" } },
    "undoneTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC2E4\uD589 \uCDE8\uC18C\uB428" } },
    "undoneText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC791\uC5C5\uC774 \uC2E4\uD589 \uCDE8\uC18C\uB418\uC5C8\uC2B5\uB2C8\uB2E4" } },
    "noMoreUndo": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB354 \uC774\uC0C1 \uC2E4\uD589 \uCDE8\uC18C\uD560 \uC791\uC5C5\uC774 \uC5C6\uC2B5\uB2C8\uB2E4" } },
    "skippingUndoDueToError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC54C \uC218 \uC5C6\uB294 \uC624\uB958\uB85C \uC778\uD574 \uC2E4\uD589 \uCDE8\uC18C\uC5D0 \uC2E4\uD328\uD558\uC5EC \uAC74\uB108\uB701\uB2C8\uB2E4." } },
    "redoingTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB2E4\uC2DC \uC2E4\uD589 \uC911..." } },
    "redoingText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC791\uC5C5 \uB2E4\uC2DC \uC2E4\uD589 \uC911" } },
    "redoneTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB2E4\uC2DC \uC2E4\uD589\uB428" } },
    "redoneText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC791\uC5C5\uC774 \uB2E4\uC2DC \uC2E4\uD589\uB418\uC5C8\uC2B5\uB2C8\uB2E4" } },
    "noMoreRedo": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB354 \uC774\uC0C1 \uB2E4\uC2DC \uC2E4\uD589\uD560 \uC791\uC5C5\uC774 \uC5C6\uC2B5\uB2C8\uB2E4" } },
    "skippingRedoDueToError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC54C \uC218 \uC5C6\uB294 \uC624\uB958\uB85C \uC778\uD574 \uB2E4\uC2DC \uC2E4\uD589\uC5D0 \uC2E4\uD328\uD558\uC5EC \uAC74\uB108\uB701\uB2C8\uB2E4." } },
    "failed": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC2E4\uD328" } }
  },
  "permissionsUpdatedToast": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAD8C\uD55C \uC5C5\uB370\uC774\uD2B8\uB428" } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774\uB85C \uC778\uD574 \uC811\uADFC\uD560 \uC218 \uC788\uB294 \uB0B4\uC6A9\uC5D0 \uC601\uD5A5\uC744 \uBBF8\uCE60 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uD398\uC774\uC9C0\uB97C \uC0C8\uB85C\uACE0\uCE68\uD558\uC138\uC694." } },
    "action": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC0C8\uB85C\uACE0\uCE68" } }
  },
  "errorLayout": {
    "notFound": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uCC3E\uACE0 \uC788\uB294 \uD398\uC774\uC9C0\uB97C \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4. \uC774\uB294 URL\uC774 \uC798\uBABB\uB418\uC5C8\uAC70\uB098 \uC774 \uD398\uC774\uC9C0\uB97C \uBCFC \uC218 \uC788\uB294 \uAD8C\uD55C\uC774 \uC5C6\uAE30 \uB54C\uBB38\uC77C \uC218 \uC788\uC2B5\uB2C8\uB2E4." } },
    "error": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD398\uC774\uC9C0\uB97C \uB85C\uB4DC\uD558\uB294 \uB3D9\uC548 \uBB38\uC81C\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4. \uAC1C\uBC1C\uC790\uC5D0\uAC8C \uC774 \uBB38\uC81C\uAC00 \uD1B5\uC9C0\uB418\uC5C8\uC2B5\uB2C8\uB2E4. \uC0C8\uB85C\uACE0\uCE68\uD558\uAC70\uB098 \uB300\uC2DC\uBCF4\uB4DC\uB85C \uB3CC\uC544\uAC00\uC138\uC694." } },
    "backDashboard": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB300\uC2DC\uBCF4\uB4DC\uB85C \uB3CC\uC544\uAC00\uAE30" } },
    "backLogin": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB85C\uADF8\uC778\uC73C\uB85C \uB3CC\uC544\uAC00\uAE30" } },
    "wrong": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBB38\uC81C\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4" } },
    "refresh": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD398\uC774\uC9C0 \uC0C8\uB85C\uACE0\uCE68" } }
  },
  "dashboard": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB300\uC2DC\uBCF4\uB4DC" } },
    "alertTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB3C4\uC6C0\uC774 \uD544\uC694\uD569\uB2C8\uB2E4!" } },
    "alertText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Baserow\uB97C \uACF5\uC720\uD568\uC73C\uB85C\uC368 \uC81C\uD488\uC744 \uAC1C\uC120\uD558\uACE0 \uB2F9\uC2E0\uC5D0\uAC8C \uB354 \uC720\uC6A9\uD558\uAC8C \uB9CC\uB4E4 \uC218 \uC788\uC2B5\uB2C8\uB2E4." } },
    "tweetContent": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }, { "t": 9 }, { "t": 3 }], "s": "\uC624\uD508 \uC18C\uC2A4 \uB178\uCF54\uB4DC \uB370\uC774\uD130\uBCA0\uC774\uC2A4 \uB3C4\uAD6C\uC774\uC790 Airtable \uB300\uC548\uC778 @baserow\uB97C \uD655\uC778\uD574\uBCF4\uC138\uC694!" } },
    "redditTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "'Baserow - \uC624\uD508 \uC18C\uC2A4 \uB178\uCF54\uB4DC \uB370\uC774\uD130\uBCA0\uC774\uC2A4" } },
    "becomeGithubSponsor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "GitHub \uD6C4\uC6D0\uC790\uAC00 \uB418\uAE30" } },
    "starOnGitlab": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "GitLab\uC5D0\uC11C \uBCC4\uD45C\uD558\uAE30" } },
    "shareOnTwitter": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Twitter\uC5D0\uC11C \uACF5\uC720" } },
    "shareOnReddit": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Reddit\uC5D0\uC11C \uACF5\uC720" } },
    "shareOnFacebook": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Facebook\uC5D0\uC11C \uACF5\uC720" } },
    "shareOnLinkedIn": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "LinkedIn\uC5D0\uC11C \uACF5\uC720" } },
    "suggestedTemplates": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uCD94\uCC9C \uD15C\uD50C\uB9BF" } },
    "resources": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB9AC\uC18C\uC2A4" } },
    "knowledgeBase": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC9C0\uC2DD \uBCA0\uC774\uC2A4" } },
    "knowledgeBaseMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBAA8\uB4E0 \uC9C8\uBB38\uC5D0 \uB300\uD55C \uB2F5\uBCC0 \uCC3E\uAE30" } },
    "tutorials": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD29C\uD1A0\uB9AC\uC5BC" } },
    "tutorialsMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Baserow\uC758 \uC7A0\uC7AC\uB825 \uBC1C\uACAC" } },
    "apiDocumentation": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "API \uBB38\uC11C" } },
    "apiDocumentationMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC6B0\uB9AC\uC758 \uCF54\uB4DC\uC5D0 \uB300\uD574 \uB354 \uC54C\uC544\uBCF4\uAE30" } },
    "emptyWorkspace": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774 \uC791\uC5C5\uACF5\uAC04\uC740 \uBE44\uC5B4 \uC788\uC2B5\uB2C8\uB2E4" } },
    "emptyWorkspaceMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC0C8 \uB370\uC774\uD130\uBCA0\uC774\uC2A4\uB098 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC744 \uC0DD\uC131\uD558\uC5EC \uC2DC\uC791\uD558\uC138\uC694." } },
    "addNew": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC0C8\uB85C \uCD94\uAC00..." } },
    "noWorkspace": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC791\uC5C5\uACF5\uAC04 \uC5C6\uC74C" } },
    "noWorkspaceDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC0C8 \uC791\uC5C5\uACF5\uAC04\uC744 \uC0DD\uC131\uD558\uC5EC \uC2DC\uC791\uD558\uC138\uC694" } },
    "starOnGitHub": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "GitHub\uC5D0\uC11C \uC6B0\uB9AC\uB97C \uBCC4\uD45C\uB85C \uD45C\uC2DC\uD558\uC138\uC694" } }
  },
  "dashboardApplication": {
    "createdAt": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC0DD\uC131\uB428" } }
  },
  "templateCard": {
    "viewMore": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB354 \uBCF4\uAE30" } }
  },
  "login": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB2E4\uC2DC \uC624\uC2E0 \uAC83\uC744 \uD658\uC601\uD569\uB2C8\uB2E4" } },
    "emailPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774\uBA54\uC77C \uC8FC\uC18C\uB97C \uC785\uB825\uD558\uC138\uC694.." } },
    "passwordPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBE44\uBC00\uBC88\uD638\uB97C \uC785\uB825\uD558\uC138\uC694.." } },
    "forgotPassword": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBE44\uBC00\uBC88\uD638\uB97C \uC78A\uC73C\uC168\uB098\uC694?" } },
    "signUpText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Baserow\uB97C \uCC98\uC74C \uC0AC\uC6A9\uD558\uC2DC\uB098\uC694?" } },
    "signUp": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAC00\uC785\uD558\uAE30" } },
    "displayPasswordLogin": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774\uBA54\uC77C\uACFC \uBE44\uBC00\uBC88\uD638\uB85C \uB85C\uADF8\uC778" } },
    "redirecting": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC778\uC99D \uC81C\uACF5\uC790\uB85C \uB9AC\uB514\uB809\uC158 \uC911..." } }
  },
  "resetPassword": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBE44\uBC00\uBC88\uD638 \uC7AC\uC124\uC815" } },
    "newPassword": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC0C8 \uBE44\uBC00\uBC88\uD638" } },
    "repeatNewPassword": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC0C8 \uBE44\uBC00\uBC88\uD638 \uC7AC\uC785\uB825" } },
    "submit": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBE44\uBC00\uBC88\uD638 \uBCC0\uACBD" } },
    "changed": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBE44\uBC00\uBC88\uD638 \uBCC0\uACBD\uB428" } },
    "message": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC0C8 \uBE44\uBC00\uBC88\uD638\uB85C Baserow\uC5D0 \uB85C\uADF8\uC778\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4." } },
    "errorInvalidLinkTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC720\uD6A8\uD558\uC9C0 \uC54A\uC740 \uB9C1\uD06C" } },
    "errorInvalidLinkMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB9C1\uD06C\uAC00 \uC720\uD6A8\uD558\uC9C0 \uC54A\uC544 \uBE44\uBC00\uBC88\uD638\uB97C \uC7AC\uC124\uC815\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4." } },
    "errorLinkExpiredTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB9C1\uD06C \uB9CC\uB8CC" } },
    "errorLinkExpiredMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBE44\uBC00\uBC88\uD638 \uC7AC\uC124\uC815 \uB9C1\uD06C\uAC00 \uB9CC\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4. \uB2E4\uB978 \uB9C1\uD06C\uB97C \uC694\uCCAD\uD558\uC138\uC694." } },
    "disabled": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBE44\uBC00\uBC88\uD638 \uC7AC\uC124\uC815\uC774 \uBE44\uD65C\uC131\uD654\uB428" } },
    "disabledMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBE44\uBC00\uBC88\uD638\uB97C \uC7AC\uC124\uC815\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4. \uBE44\uD65C\uC131\uD654\uB418\uC5C8\uC2B5\uB2C8\uB2E4." } },
    "repeatPasswordPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC0C8 \uBE44\uBC00\uBC88\uD638\uB97C \uB2E4\uC2DC \uC785\uB825\uD558\uC138\uC694" } },
    "errorLinkAlreadyUsedTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB9C1\uD06C\uAC00 \uC774\uBBF8 \uC0AC\uC6A9\uB418\uC5C8\uC2B5\uB2C8\uB2E4" } },
    "errorLinkAlreadyUsedMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774 \uBE44\uBC00\uBC88\uD638 \uC7AC\uC124\uC815 \uB9C1\uD06C\uB294 \uC774\uBBF8 \uC0AC\uC6A9\uB418\uC5C8\uC2B5\uB2C8\uB2E4. \uC0C8 \uB9C1\uD06C\uB97C \uC694\uCCAD\uD574 \uC8FC\uC138\uC694." } }
  },
  "signup": {
    "headTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uACC4\uC815 \uC0DD\uC131" } },
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD68C\uC6D0\uAC00\uC785" } },
    "disabled": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD68C\uC6D0\uAC00\uC785\uC774 \uBE44\uD65C\uC131\uD654\uB428" } },
    "disabledMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uACC4\uC815\uC744 \uC0DD\uC131\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4. \uBE44\uD65C\uC131\uD654\uB418\uC5C8\uC2B5\uB2C8\uB2E4." } },
    "requireFirstUser": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Baserow\uC5D0 \uC624\uC2E0 \uAC83\uC744 \uD658\uC601\uD569\uB2C8\uB2E4!" } },
    "requireFirstUserMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAD00\uB9AC\uC790 \uC0AC\uC6A9\uC790\uB97C \uC0DD\uC131\uD558\uB824\uBA74 \uC544\uB798 \uC591\uC2DD\uC744 \uC791\uC131\uD558\uC138\uC694." } },
    "emailPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774\uBA54\uC77C \uC8FC\uC18C\uB97C \uC785\uB825\uD558\uC138\uC694.." } },
    "namePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774\uB984\uC744 \uC785\uB825\uD558\uC138\uC694.." } },
    "passwordPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBE44\uBC00\uBC88\uD638\uB97C \uC785\uB825\uD558\uC138\uC694.." } },
    "passwordRepeatPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBE44\uBC00\uBC88\uD638\uB97C \uD655\uC778\uD558\uC138\uC694.." } },
    "loginText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774\uBBF8 \uACC4\uC815\uC774 \uC788\uB098\uC694?" } },
    "login": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB85C\uADF8\uC778" } },
    "agreeTerms": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "\uACC4\uC815\uC744 \uC0DD\uC131\uD568\uC73C\uB85C\uC368 " }, { "t": 5, "i": 0 }, { "t": 3, "v": " " }, { "t": 5, "i": 1 }, { "t": 3, "v": " " }, { "t": 5, "i": 2 }, { "t": 3, "v": "\uC5D0 \uB3D9\uC758\uD569\uB2C8\uB2E4" }] } },
    "terms": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774\uC6A9 \uC57D\uAD00" } },
    "privacyPolicy": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAC1C\uC778\uC815\uBCF4 \uBCF4\uD638\uC815\uCC45" } }
  },
  "forgotPassword": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBE44\uBC00\uBC88\uD638 \uCC3E\uAE30" } },
    "message": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774\uBA54\uC77C \uC8FC\uC18C\uB97C \uC785\uB825\uD558\uBA74 \uBE44\uBC00\uBC88\uD638\uB97C \uC7AC\uC124\uC815\uD560 \uC218 \uC788\uB294 \uB9C1\uD06C\uB97C \uBCF4\uB0B4\uB4DC\uB9BD\uB2C8\uB2E4." } },
    "submit": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB9C1\uD06C \uBCF4\uB0B4\uAE30" } },
    "confirmationTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774\uBA54\uC77C\uC744 \uD655\uC778\uD558\uC138\uC694" } },
    "confirmation": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "email" }, { "t": 3, "v": "\uB85C \uC774\uBA54\uC77C\uC744 \uBCF4\uB0C8\uC2B5\uB2C8\uB2E4. Baserow \uBE44\uBC00\uBC88\uD638\uB97C \uC7AC\uC124\uC815\uD560 \uC218 \uC788\uB294 \uB9C1\uD06C\uAC00 \uD3EC\uD568\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4." }] } },
    "disabled": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBE44\uBC00\uBC88\uD638 \uCC3E\uAE30\uAC00 \uBE44\uD65C\uC131\uD654\uB428" } },
    "disabledMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBE44\uBC00\uBC88\uD638\uB97C \uC7AC\uC124\uC815\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4. \uBE44\uD65C\uC131\uD654\uB418\uC5C8\uC2B5\uB2C8\uB2E4." } },
    "loginText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774\uBBF8 \uACC4\uC815\uACFC \uBE44\uBC00\uBC88\uD638\uAC00 \uC788\uC2B5\uB2C8\uAE4C?" } },
    "goBack": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB3CC\uC544\uAC00\uAE30" } }
  },
  "settings": {
    "settingsTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAD00\uB9AC\uC790 \uC124\uC815" } },
    "baserowInstanceId": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC778\uC2A4\uD134\uC2A4 ID" } },
    "instanceIdDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC778\uC2A4\uD134\uC2A4 ID\uB294 Baserow \uBCF5\uC0AC\uBCF8\uC758 \uACE0\uC720 \uC2DD\uBCC4\uC790\uC785\uB2C8\uB2E4." } },
    "baserowVersion": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Baserow \uBC84\uC804" } },
    "baserowVersionDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774 \uC778\uC2A4\uD134\uC2A4\uC758 \uBC84\uC804 \uBC88\uD638\uC785\uB2C8\uB2E4." } },
    "accountRestrictions": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uACC4\uC815 \uC81C\uD55C" } },
    "settingAllowResetPasswordName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBE44\uBC00\uBC88\uD638 \uC7AC\uC124\uC815 \uD5C8\uC6A9" } },
    "settingAllowResetPasswordDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAE30\uBCF8\uC801\uC73C\uB85C \uC0AC\uC6A9\uC790\uB294 \uBE44\uBC00\uBC88\uD638 \uC7AC\uC124\uC815 \uB9C1\uD06C\uB97C \uC694\uCCAD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4." } },
    "settingAllowResetPasswordWarning": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBE44\uBC00\uBC88\uD638\uB97C \uC78A\uC5B4\uBC84\uB9AC\uBA74 \uC2DC\uC2A4\uD15C\uC5D0\uC11C \uC790\uC2E0\uC744 \uC7A0\uAE00 \uC218 \uC788\uC73C\uBA70 \uC561\uC138\uC2A4\uB97C \uBCF5\uC6D0\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4." } },
    "settingAllowNewAccountsName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC0C8 \uACC4\uC815 \uC0DD\uC131 \uD5C8\uC6A9" } },
    "settingAllowNewAccountsDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAE30\uBCF8\uC801\uC73C\uB85C Baserow \uB3C4\uBA54\uC778\uC5D0 \uBC29\uBB38\uD558\uB294 \uBAA8\uB4E0 \uC0AC\uC6A9\uC790\uAC00 \uC0C8 \uACC4\uC815\uC744 \uB4F1\uB85D\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4." } },
    "settingAllowSignupsViaWorkspaceInvitationsName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC791\uC5C5\uACF5\uAC04 \uCD08\uB300\uB97C \uD1B5\uD55C \uD68C\uC6D0\uAC00\uC785 \uD5C8\uC6A9" } },
    "settingAllowSignupsViaWorkspaceInvitationDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC0C8 \uACC4\uC815 \uC0DD\uC131\uC774 \uBE44\uD65C\uC131\uD654\uB418\uC5B4 \uC788\uC5B4\uB3C4, \uC9C1\uC811 \uCD08\uB300\uB41C \uC0AC\uC6A9\uC790\uB294 \uC5EC\uC804\uD788 \uACC4\uC815\uC744 \uC0DD\uC131\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4." } },
    "settingAllowNonStaffCreateWorkspaceOperation": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBAA8\uB450\uAC00 \uC0C8 \uC791\uC5C5\uACF5\uAC04 \uC0DD\uC131 \uD5C8\uC6A9" } },
    "settingAllowNonStaffCreateWorkspaceOperationDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAE30\uBCF8\uC801\uC73C\uB85C \uBAA8\uB4E0 \uC0AC\uB78C\uC774 \uC0C8 \uC791\uC5C5\uACF5\uAC04\uC744 \uC0DD\uC131\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774\uB97C \uBE44\uD65C\uC131\uD654\uD558\uC5EC \uC9C1\uC6D0\uB9CC \uC0C8 \uC791\uC5C5\uACF5\uAC04\uC744 \uC0DD\uC131\uD560 \uC218 \uC788\uB3C4\uB85D \uD569\uB2C8\uB2E4." } },
    "settingAllowNonStaffCreateWorkspaceOperationWarning": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC0C8\uB85C\uC6B4 \uC0AC\uC6A9\uC790\uC5D0\uAC8C\uB294 \uADF8\uB4E4\uC774 \uAD00\uB9AC\uC790\uC778 \uC791\uC5C5\uACF5\uAC04\uC774 \uC790\uB3D9\uC73C\uB85C \uC0DD\uC131\uB429\uB2C8\uB2E4." } },
    "settingTrackWorkspaceUsage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC791\uC5C5\uACF5\uAC04 \uC0AC\uC6A9\uB7C9 \uCD94\uC801" } },
    "settingTrackWorkspaceUsageDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC791\uC5C5\uACF5\uAC04\uBCC4 \uD589 \uBC0F \uD30C\uC77C \uC0AC\uC6A9\uB7C9\uC744 \uC9D1\uACC4\uD558\uB294 \uC57C\uAC04 \uC791\uC5C5\uC744 \uD65C\uC131\uD654\uD558\uBA70, \uD574\uB2F9 \uC815\uBCF4\uB294 \uD504\uB9AC\uBBF8\uC5C4 \uC791\uC5C5\uACF5\uAC04 \uAD00\uB9AC \uD398\uC774\uC9C0\uC5D0 \uD45C\uC2DC\uB429\uB2C8\uB2E4." } },
    "userSettings": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC0AC\uC6A9\uC790" } },
    "settingUserDeletionGraceDelay": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC0AD\uC81C \uC720\uC608 \uAE30\uAC04" } },
    "settingUserDeletionGraceDelayDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uACC4\uC815\uC774 \uC0AD\uC81C \uC608\uC815 \uC0C1\uD0DC\uC5D0\uC11C \uB85C\uADF8\uC778 \uC5C6\uC774 \uACBD\uACFC\uD55C \uC77C\uC218\uC774\uBA70, \uC774 \uAE30\uAC04\uC774 \uC9C0\uB098\uBA74 \uACC4\uC815\uC774 \uC601\uAD6C \uC0AD\uC81C\uB429\uB2C8\uB2E4." } },
    "invalidAccountDeletionGraceDelay": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774 \uAC12\uC740 \uD544\uC218\uC774\uBA70 32000\uBCF4\uB2E4 \uC791\uC740 \uC591\uC758 \uC815\uC218\uC5EC\uC57C \uD569\uB2C8\uB2E4" } },
    "enabled": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD65C\uC131\uD654\uB428" } },
    "maintenance": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC720\uC9C0 \uAD00\uB9AC" } },
    "emailVerification": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774\uBA54\uC77C \uD655\uC778" } },
    "emailVerificationDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774\uBA54\uC77C \uC8FC\uC18C\uB97C \uD655\uC778\uD574\uC57C \uD558\uB294\uC9C0 \uC5EC\uBD80\uB97C \uC81C\uC5B4\uD569\uB2C8\uB2E4." } },
    "emailVerificationNoVerification": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD655\uC778 \uC5C6\uC74C" } },
    "emailVerificationRecommended": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAD8C\uC7A5" } },
    "emailVerificationEnforced": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAC15\uC81C" } },
    "settingsVerifyImportSignature": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAC00\uC838\uC624\uAE30 \uC11C\uBA85 \uD655\uC778" } },
    "settingsVerifyImportSignatureDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD65C\uC131\uD654\uB418\uBA74, \uAC00\uC838\uC628 \uB370\uC774\uD130\uC758 \uC11C\uBA85\uC774 \uAC80\uC99D\uB418\uC5B4 \uB370\uC774\uD130\uAC00 \uBCC0\uC870\uB418\uC9C0 \uC54A\uC558\uB294\uC9C0 \uD655\uC778\uD569\uB2C8\uB2E4." } }
  },
  "formSidebar": {
    "actions": {
      "addAll": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBAA8\uB450 \uCD94\uAC00" } },
      "removeAll": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBAA8\uB450 \uC81C\uAC70" } },
      "addField": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD544\uB4DC \uCD94\uAC00" } }
    },
    "notifyUserOnSubmit": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC81C\uCD9C \uC2DC \uC0AC\uC6A9\uC790\uC5D0\uAC8C \uC54C\uB9BC \uBC1B\uAE30" } },
    "fieldsDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBAA8\uB4E0 \uD544\uB4DC\uAC00 \uC591\uC2DD\uC5D0 \uC788\uC2B5\uB2C8\uB2E4." } },
    "prefillOrHideInfoLink": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB3D9\uC801\uC73C\uB85C \uBBF8\uB9AC \uCC44\uC6B0\uAC70\uB098 \uC228\uAE30\uAE30" } },
    "modal": {
      "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD544\uB4DC\uB97C \uB3D9\uC801\uC73C\uB85C \uBBF8\uB9AC \uCC44\uC6B0\uAC70\uB098 \uC228\uAE30\uAE30" } },
      "descriptionPartOne": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC0AC\uC6A9\uC790\uAC00 \uC591\uC2DD\uC744 \uB354 \uBE68\uB9AC \uC791\uC131\uD560 \uC218 \uC788\uB3C4\uB85D \uC591\uC2DD\uC744 \uBBF8\uB9AC \uCC44\uC6B8 \uC218 \uC788\uC2B5\uB2C8\uB2E4." } },
      "descriptionPartTwo": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC591\uC2DD\uC5D0\uC11C \uC0AC\uC6A9\uD560 \uC218 \uC788\uB294 \uBAA8\uB4E0 \uD544\uB4DC\uB97C \uBBF8\uB9AC \uCC44\uC6B8 \uC218 \uC788\uC2B5\uB2C8\uB2E4." } },
      "howToHide": {
        "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD544\uB4DC\uB97C \uC228\uAE30\uB294 \uBC29\uBC95" } },
        "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD544\uB4DC\uB97C \uB3D9\uC801\uC73C\uB85C \uC228\uAE30\uB824\uBA74 URL\uC758 \uACF5\uAC1C \uAC12\uC5D0 \uCFFC\uB9AC \uB9E4\uAC1C\uBCC0\uC218\uB97C \uCD94\uAC00\uD558\uBA74 \uB429\uB2C8\uB2E4. \uC774\uB7EC\uD55C \uCFFC\uB9AC \uB9E4\uAC1C\uBCC0\uC218\uB294 \uD5A5\uD6C4 \uCD94\uAC00\uB420 \uC218 \uC788\uB294 \uCFFC\uB9AC \uB9E4\uAC1C\uBCC0\uC218\uC640\uC758 \uCDA9\uB3CC\uC744 \uBC29\uC9C0\uD558\uAE30 \uC704\uD574 `hide_` \uC811\uB450\uC0AC\uB85C \uC2DC\uC791\uD569\uB2C8\uB2E4." } }
      },
      "howToPrefill": {
        "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC591\uC2DD\uC744 \uBBF8\uB9AC \uCC44\uC6B0\uB294 \uBC29\uBC95" } },
        "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC591\uC2DD\uC5D0 \uB370\uC774\uD130\uB97C \uBBF8\uB9AC \uCC44\uC6B0\uB824\uBA74 \uACF5\uAC1C \uC591\uC2DD URL\uC5D0 \uCFFC\uB9AC \uB9E4\uAC1C\uBCC0\uC218\uB97C \uCD94\uAC00\uD558\uBA74 \uB429\uB2C8\uB2E4. \uC774\uB7EC\uD55C \uCFFC\uB9AC \uB9E4\uAC1C\uBCC0\uC218\uB294 \uD5A5\uD6C4 \uCD94\uAC00\uB420 \uCFFC\uB9AC \uB9E4\uAC1C\uBCC0\uC218\uC640\uC758 \uCDA9\uB3CC\uC744 \uBC29\uC9C0\uD558\uAE30 \uC704\uD574 `prefill` \uC811\uB450\uC0AC\uB85C \uC2DC\uC791\uD569\uB2C8\uB2E4." } }
      },
      "format": {
        "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD615\uC2DD" } },
        "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uCFFC\uB9AC \uB9E4\uAC1C\uBCC0\uC218\uC758 \uD615\uC2DD\uC740 \uB2E4\uC74C\uACFC \uAC19\uC2B5\uB2C8\uB2E4:" } },
        "codeSnippet": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "?prefill_&lt;field_name&gt;=&lt;value&gt;" } }
      },
      "example": {
        "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC608\uC81C" } },
        "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "`\uC774\uB984`\uC774\uB77C\uB294 \uD544\uB4DC\uB97C `\uB9C8\uC774\uD06C` \uB77C\uB294 \uAC12\uC73C\uB85C \uBBF8\uB9AC \uCC44\uC6B0\uACE0 \uC2F6\uB2E4\uBA74 \uC544\uB798 \uC608\uC81C\uB97C \uCC38\uACE0\uD558\uC138\uC694" } },
        "codeSnippet": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "?prefill_Name=Mike" } }
      },
      "spaces": {
        "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uACF5\uBC31" } },
        "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD544\uB4DC \uC774\uB984\uC758 \uACF5\uBC31\uC740 \uCFFC\uB9AC \uB9E4\uAC1C\uBCC0\uC218\uC640\uC758 \uBB38\uC81C\uB97C \uD53C\uD558\uAE30 \uC704\uD574 `+`\uB85C \uB300\uCCB4\uB429\uB2C8\uB2E4." } },
        "codeSnippet": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "?prefill_my+field=Mike" } }
      },
      "multipleValues": {
        "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC5EC\uB7EC \uAC12" } },
        "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC5EC\uB7EC \uD544\uB4DC\uB97C \uBBF8\uB9AC \uCC44\uC6B0\uACE0 \uC2F6\uB2E4\uBA74, \uAC12 \uC0AC\uC774\uC5D0 `,`\uB97C \uCD94\uAC00\uD558\uC5EC \uAC00\uB2A5\uD569\uB2C8\uB2E4." } },
        "codeSnippet": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "?prefill_multi+select=Mike,John" } }
      },
      "specialFieldTypes": {
        "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD2B9\uC218 \uD544\uB4DC \uC720\uD615" } },
        "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC77C\uBC18\uC801\uC73C\uB85C \uBBF8\uB9AC \uCC44\uC6B0\uAE30 \uAC12\uC740 \uD544\uB4DC\uC758 \uAC12\uACFC \uB3D9\uC77C\uD569\uB2C8\uB2E4. \uD558\uC9C0\uB9CC \uC77C\uBD80 \uC608\uC678\uAC00 \uC788\uC73C\uBA70 \uAC12\uC774 \uB2E4\uB978 \uAC12\uC73C\uB85C \uBCC0\uD658\uB429\uB2C8\uB2E4." } },
        "ratingField": {
          "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD3C9\uC810 \uD544\uB4DC" } },
          "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD3C9\uC810 \uD544\uB4DC\uB294 \uBA87 \uAC1C\uC758 \uBCC4\uC774 \uCC44\uC6CC\uC838\uC57C \uD558\uB294\uC9C0\uB97C \uB098\uD0C0\uB0B4\uB294 \uC22B\uC790\uB97C \uC218\uB77D\uD569\uB2C8\uB2E4." } },
          "codeSnippet": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "?prefill_rating=3" } }
        },
        "linkRowField": {
          "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD589 \uC5F0\uACB0 \uD544\uB4DC" } },
          "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD589 \uC5F0\uACB0 \uD544\uB4DC\uB294 \uC120\uD0DD \uB4DC\uB86D\uB2E4\uC6B4\uC5D0 \uD45C\uC2DC\uB418\uB294 \uAC12\uC744 \uC218\uB77D\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4." } },
          "codeSnippet": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "?prefill_link+row=Mike" } }
        },
        "selectField": {
          "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB2E8\uC77C \uC120\uD0DD / \uB2E4\uC911 \uC120\uD0DD \uD544\uB4DC" } },
          "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB2E8\uC77C \uC120\uD0DD \uD544\uB4DC\uB294 \uC120\uD0DD \uB4DC\uB86D\uB2E4\uC6B4\uC5D0 \uD45C\uC2DC\uB418\uB294 \uAC12\uC744 \uC218\uB77D\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB2E4\uC911 \uC120\uD0DD \uD544\uB4DC\uB3C4 \uB9C8\uCC2C\uAC00\uC9C0\uC9C0\uB9CC, \uC5EC\uB7EC \uAC12\uC744 \uC218\uB77D\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4." } },
          "codeSnippet": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "?prefill_single+select=Mike" } }
        },
        "dateField": {
          "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB0A0\uC9DC \uD544\uB4DC" } },
          "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB0A0\uC9DC \uD544\uB4DC\uB294 \uB2E4\uC74C \uD615\uC2DD\uC758 \uB0A0\uC9DC\uB97C \uC218\uB77D\uD560 \uC218 \uC788\uC73C\uBA70, \uD544\uB4DC\uC758 \uB0A0\uC9DC \uD615\uC2DD\uC744 \uC0AC\uC6A9\uD558\uC5EC \uB0A0\uC9DC\uB97C \uAD6C\uBB38 \uBD84\uC11D\uD569\uB2C8\uB2E4." } },
          "codeSnippet": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\n// \uD45C\uC900\nISO_8601\n\n// \uC77C\uBC18 \uD615\uC2DD\n'YYYY-MM-DD',\n'YYYY-MM-DD hh:mm A',\n'YYYY-MM-DD HH:mm',\n\n// EU\n'DD/MM/YYYY', \n'DD/MM/YYYY hh:mm A', \n'DD/MM/YYYY HH:mm'\n\n// US\n'MM/DD/YYYY', \n'MM/DD/YYYY hh:mm A', \n'MM/DD/YYYY HH:mm'" } }
        }
      }
    },
    "fields": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD544\uB4DC" } },
    "rowEditableBy": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD544\uB4DC\uB97C \uD1B5\uD574 \uD589\uC744 \uC5C5\uB370\uC774\uD2B8\uD569\uB2C8\uB2E4" } },
    "rowEditableByDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774 \uD45C\uC758 \uD589\uC740 \uB2E4\uC74C \uD589 \uD3B8\uC9D1 \uD544\uB4DC\uB97C \uD1B5\uD574 \uC774 \uC591\uC2DD\uC5D0\uC11C \uC5C5\uB370\uC774\uD2B8\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4:" } }
  },
  "job": {
    "statePending": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC2DC\uC791 \uB300\uAE30 \uC911..." } },
    "stateStarted": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC2DC\uC791\uB428..." } },
    "stateFinished": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC644\uB8CC\uB428" } },
    "stateFailed": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC2E4\uD328" } },
    "errorJobCannotBeCancelledTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uCDE8\uC18C\uD560 \uC218 \uC5C6\uC74C" } },
    "errorJobCannotBeCancelledDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC791\uC5C5\uC774 \uC774\uBBF8 \uC644\uB8CC\uB418\uC5B4 \uCDE8\uC18C\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.\n\uCCAB \uBC88\uC9F8 \uC2A4\uB0C5\uC0F7\uC744 \uC0AD\uC81C\uD558\uC5EC \uC81C\uAC70\uD558\uC138\uC694." } },
    "errorJobAlreadyRunningTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774\uBBF8 \uC2E4\uD589 \uC911" } },
    "errorJobAlreadyRunningDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB2E4\uB978 \uAC00\uC838\uC624\uAE30 \uC791\uC5C5\uC774 \uC774\uBBF8 \uC2E4\uD589 \uC911\uC785\uB2C8\uB2E4. \uC0C8\uB85C\uC6B4 \uC791\uC5C5\uC744 \uC2DC\uC791\uD558\uB824\uBA74 \uD574\uB2F9 \uC791\uC5C5\uC774 \uC644\uB8CC\uB420 \uB54C\uAE4C\uC9C0 \uAE30\uB2E4\uB824\uC57C \uD569\uB2C8\uB2E4." } },
    "stateCanceled": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uCDE8\uC18C" } }
  },
  "datetime": {
    "secondsAgo": { "t": 0, "b": { "t": 1, "c": [{ "t": 2, "i": [{ "t": 3 }], "s": "\uBC29\uAE08 \uC804" }, { "t": 2, "i": [{ "t": 3 }], "s": "1\uCD08 \uC804" }, { "t": 2, "i": [{ "t": 4, "k": "n" }, { "t": 3, "v": "\uCD08 \uC804" }] }] } },
    "minutesAgo": { "t": 0, "b": { "t": 1, "c": [{ "t": 2, "i": [{ "t": 3 }], "s": "0\uBD84 \uC804" }, { "t": 2, "i": [{ "t": 3 }], "s": "1\uBD84 \uC804" }, { "t": 2, "i": [{ "t": 4, "k": "n" }, { "t": 3, "v": "\uBD84 \uC804" }] }] } },
    "hoursAgo": { "t": 0, "b": { "t": 1, "c": [{ "t": 2, "i": [{ "t": 3 }], "s": "0\uC2DC\uAC04 \uC804" }, { "t": 2, "i": [{ "t": 3 }], "s": "1\uC2DC\uAC04 \uC804" }, { "t": 2, "i": [{ "t": 4, "k": "n" }, { "t": 3, "v": "\uC2DC\uAC04 \uC804" }] }] } },
    "daysAgo": { "t": 0, "b": { "t": 1, "c": [{ "t": 2, "i": [{ "t": 3 }], "s": "0\uC77C \uC804" }, { "t": 2, "i": [{ "t": 3 }], "s": "1\uC77C \uC804" }, { "t": 2, "i": [{ "t": 4, "k": "n" }, { "t": 3, "v": "\uC77C \uC804" }] }] } },
    "monthsAgo": { "t": 0, "b": { "t": 1, "c": [{ "t": 2, "i": [{ "t": 3 }], "s": "0\uAC1C\uC6D4 \uC804" }, { "t": 2, "i": [{ "t": 3 }], "s": "1\uAC1C\uC6D4 \uC804" }, { "t": 2, "i": [{ "t": 4, "k": "n" }, { "t": 3, "v": "\uAC1C\uC6D4 \uC804" }] }] } },
    "yearsAgo": { "t": 0, "b": { "t": 1, "c": [{ "t": 2, "i": [{ "t": 3 }], "s": "0\uB144 \uC804" }, { "t": 2, "i": [{ "t": 3 }], "s": "1\uB144 \uC804" }, { "t": 2, "i": [{ "t": 4, "k": "n" }, { "t": 3, "v": "\uB144 \uC804" }] }] } },
    "lessThanMinuteAgo": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "1\uBD84 \uBBF8\uB9CC \uC804" } },
    "justNow": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBC29\uAE08 \uC804" } }
  },
  "crudTableSearch": {
    "search": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAC80\uC0C9" } }
  },
  "membersSettings": {
    "membersTabTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBA64\uBC84" } },
    "invitesTabTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uCD08\uB300" } },
    "membersTable": {
      "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "workspaceName" }, { "t": 3, "v": "\uC758 \uBA64\uBC84 " }, { "t": 4, "k": "userAmount" }, { "t": 3, "v": "\uBA85" }] } },
      "inviteMember": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBA64\uBC84 \uCD08\uB300" } },
      "columns": {
        "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774\uB984" } },
        "email": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774\uBA54\uC77C" } },
        "role": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAE30\uBCF8 \uC5ED\uD560" } },
        "highestRole": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uCD5C\uACE0 \uC5ED\uD560" } },
        "highestRoleHelpText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774 \uC791\uC5C5\uACF5\uAC04\uC758 \uC5B4\uB5A4 \uAC83\uC5D0\uC11C \uC9C1\uC811 \uB610\uB294 \uD300\uC5D0\uC11C \uD560\uB2F9\uB41C \uC774 \uC0AC\uC6A9\uC790\uC758 \uCD5C\uACE0 \uC5ED\uD560" } },
        "teams": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD300" } },
        "highestRoleInstanceHelpText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC778\uC2A4\uD134\uC2A4\uC5D0\uC11C \uC774 \uC0AC\uC6A9\uC790\uAC00 \uAC16\uB294 \uAC00\uC7A5 \uB192\uC740 \uC5ED\uD560" } },
        "2fa": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "2FA" } }
      },
      "actions": {
        "copyEmail": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774\uBA54\uC77C \uBCF5\uC0AC" } },
        "remove": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC791\uC5C5\uACF5\uAC04\uC5D0\uC11C \uC81C\uAC70" } }
      }
    },
    "invitesTable": {
      "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "workspaceName" }, { "t": 3, "v": "\uC758 \uB300\uAE30 \uC911\uC778 \uCD08\uB300 " }, { "t": 4, "k": "invitesAmount" }, { "t": 3, "v": "\uAC1C" }] } },
      "columns": {
        "email": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774\uBA54\uC77C" } },
        "message": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBA54\uC2DC\uC9C0" } },
        "role": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAE30\uBCF8 \uC5ED\uD560" } }
      },
      "actions": {
        "copyEmail": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774\uBA54\uC77C \uBCF5\uC0AC" } },
        "remove": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uCD08\uB300 \uCDE8\uC18C" } }
      }
    },
    "membersInviteModal": {
      "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC791\uC5C5\uACF5\uAC04 \uBA64\uBC84 \uCD08\uB300" } },
      "submit": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uCD08\uB300 \uBCF4\uB0B4\uAE30" } },
      "helpIconText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC120\uD0DD\uD55C \uC5ED\uD560\uC740 \uC774 \uC791\uC5C5\uACF5\uAC04\uC5D0\uC11C \uC0AC\uC6A9\uC790\uC758 \uAE30\uBCF8 \uC5ED\uD560\uC774 \uB429\uB2C8\uB2E4." } },
      "errors": {
        "userAlreadyInWorkspace": {
          "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC0AC\uC6A9\uC790\uAC00 \uC774\uBBF8 \uC791\uC5C5\uACF5\uAC04\uC5D0 \uC788\uC2B5\uB2C8\uB2E4." } },
          "text": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC0AC\uC6A9\uC790\uAC00 \uC774\uBBF8 \uC791\uC5C5\uACF5\uAC04\uC758 \uBA64\uBC84\uC778 \uACBD\uC6B0 \uCD08\uB300\uB97C \uBCF4\uB0BC \uC218 \uC5C6\uC2B5\uB2C8\uB2E4." } }
        }
      }
    }
  },
  "memberSelectionList": {
    "searchPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uCC3E\uAE30 ..." } },
    "selectedAmountLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "count" }, { "t": 3, "v": "\uAC1C \uC120\uD0DD\uB428" }] } }
  },
  "memberAssignmentModalFooter": {
    "invite": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "count" }, { "t": 3, "v": "\uBA85 \uCD08\uB300" }] } },
    "deselectAll": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBAA8\uB450 \uC120\uD0DD \uD574\uC81C" } },
    "selectAll": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBAA8\uB450 \uC120\uD0DD" } }
  },
  "removeFromWorkspaceModal": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC791\uC5C5\uACF5\uAC04\uC5D0\uC11C \uC81C\uAC70 \uD655\uC778" } },
    "confirmation": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "name" }, { "t": 3, "v": "\uC744(\uB97C) " }, { "t": 4, "k": "workspaceName" }, { "t": 3, "v": "\uC5D0\uC11C \uC81C\uAC70\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C? \uC774 \uC791\uC5C5\uC740 \uB418\uB3CC\uB9B4 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4." }] } },
    "remove": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC81C\uAC70" } }
  },
  "editRoleContext": {
    "billableRolesLink": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uCCAD\uAD6C \uAC00\uB2A5\uD55C \uC5ED\uD560 \uBB38\uC11C" } },
    "additionalRoles": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uCD94\uAC00 \uC5ED\uD560" } }
  },
  "highestPaidRoleField": {
    "billable": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uCCAD\uAD6C \uAC00\uB2A5" } }
  },
  "integrationCreateEditModal": {
    "createTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC0C8\uB85C\uC6B4 \uD1B5\uD569" } },
    "editTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD1B5\uD569 \uD3B8\uC9D1" } },
    "warningTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uACBD\uACE0" } }
  },
  "integrationEditForm": {
    "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774\uB984" } },
    "namePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD1B5\uD569 \uC774\uB984 \uC785\uB825..." } }
  },
  "integrationDropdown": {
    "addIntegration": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC0C8 \uD1B5\uD569 \uCD94\uAC00" } },
    "noIntegrations": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD1B5\uD569\uC744 \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4." } },
    "selectTypeFirst": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBA3C\uC800 \uC720\uD615\uC744 \uC120\uD0DD\uD558\uC138\uC694" } },
    "integrationPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD1B5\uD569 \uC120\uD0DD" } }
  },
  "dropdown": {
    "empty": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC0AC\uC6A9 \uAC00\uB2A5\uD55C \uD56D\uBAA9\uC774 \uC5C6\uC2B5\uB2C8\uB2E4" } }
  },
  "richTextEditorMentionsList": {
    "notFound": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC0AC\uC6A9\uC790\uB97C \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4" } }
  },
  "workspaceInvitationAcceptedNotification": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "sender" }, { "t": 3, "v": "\uB2D8\uC774 " }, { "t": 4, "k": "workspaceName" }, { "t": 3, "v": "\uC5D0 \uB300\uD55C \uCD08\uB300\uB97C \uC218\uB77D\uD588\uC2B5\uB2C8\uB2E4" }] } },
    "deletedUser": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC0AD\uC81C\uB41C \uC0AC\uC6A9\uC790" } }
  },
  "workspaceInvitationRejectedNotification": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "sender" }, { "t": 3, "v": "\uB2D8\uC774 " }, { "t": 4, "k": "workspaceName" }, { "t": 3, "v": "\uC5D0 \uB300\uD55C \uCD08\uB300\uB97C \uAC70\uC808\uD588\uC2B5\uB2C8\uB2E4" }] } },
    "deletedUser": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC0AD\uC81C\uB41C \uC0AC\uC6A9\uC790" } }
  },
  "workspaceInvitationCreatedNotification": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "sender" }, { "t": 3, "v": "\uB2D8\uC774 " }, { "t": 4, "k": "workspaceName" }, { "t": 3, "v": "\uC5D0 \uB2F9\uC2E0\uC744 \uCD08\uB300\uD588\uC2B5\uB2C8\uB2E4" }] } },
    "deletedUser": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC0AD\uC81C\uB41C \uC0AC\uC6A9\uC790" } }
  },
  "versionUpgradeNotification": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "version" }, { "t": 3, "v": "\uC774 \uCD9C\uC2DC\uB418\uC5C8\uC2B5\uB2C8\uB2E4! \uC0C8\uB85C\uC6B4 \uAE30\uB2A5\uC744 \uD655\uC778\uD558\uC138\uC694." }] } }
  },
  "emailNotifications": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774\uBA54\uC77C \uC54C\uB9BC" } },
    "label": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBA58\uC158, \uB313\uAE00 \uBC0F \uAE30\uD0C0 \uC54C\uB9BC" } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774\uBA54\uC77C\uC774 \uBC1B\uC740 \uD3B8\uC9C0\uD568\uC73C\uB85C \uC804\uC1A1\uB418\uB294 \uBE48\uB3C4\uB97C \uAD6C\uC131\uD569\uB2C8\uB2E4." } },
    "instant": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC989\uC2DC" } },
    "daily": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB9E4\uC77C" } },
    "weekly": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB9E4\uC8FC" } },
    "never": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC548 \uD568" } },
    "submitButton": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBE48\uB3C4 \uC5C5\uB370\uC774\uD2B8" } }
  },
  "formulaInputField": {
    "errorInvalidFormula": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uACF5\uC2DD\uC774 \uC720\uD6A8\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4." } },
    "advancedFormulaMode": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uACE0\uAE09 \uC218\uC2DD \uBAA8\uB4DC" } },
    "invalidFormulaTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC798\uBABB\uB41C \uC218\uC2DD\uC785\uB2C8\uB2E4" } },
    "invalidSyntax": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC720\uD6A8\uD55C \uC804\uBB38\uAC00\uC6A9 \uACF5\uC2DD\uC774 \uC544\uB2D9\uB2C8\uB2E4. \uAD6C\uBB38\uC744 \uD655\uC778\uD558\uC2ED\uC2DC\uC624." } }
  },
  "dataExplorer": {
    "noMatchingNodesText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC77C\uCE58\uD558\uB294 \uACB0\uACFC\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4." } },
    "noProvidersText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB370\uC774\uD130 \uC81C\uACF5\uC790\uB97C \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4. \uC608\uB97C \uB4E4\uC5B4 \uB370\uC774\uD130 \uC18C\uC2A4\uB098 \uD398\uC774\uC9C0 \uB9E4\uAC1C\uBCC0\uC218\uB97C \uCD94\uAC00\uD558\uC5EC \uC2DC\uC791\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4." } }
  },
  "richTextEditorBubbleMenu": {
    "bold": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAD75\uAC8C" } },
    "italic": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAE30\uC6B8\uC784\uAF34" } },
    "underline": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBC11\uC904" } },
    "strikethrough": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uCDE8\uC18C\uC120" } },
    "link": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB9C1\uD06C" } },
    "linkEditPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB9C1\uD06C URL..." } },
    "linkEditDone": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC644\uB8CC" } }
  },
  "richTextEditorFloatingMenu": {
    "hierarchy": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uACC4\uCE35 \uAD6C\uC870" } },
    "lists": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBAA9\uB85D" } },
    "paragraph": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB2E8\uB77D" } },
    "heading1": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC81C\uBAA9 1" } },
    "heading2": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC81C\uBAA9 2" } },
    "heading3": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC81C\uBAA9 3" } },
    "orderedList": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBC88\uD638 \uB9E4\uAE30\uAE30 \uBAA9\uB85D" } },
    "unorderedList": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAE00\uBA38\uB9AC \uAE30\uD638 \uBAA9\uB85D" } },
    "code": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uCF54\uB4DC" } },
    "taskList": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC791\uC5C5 \uBAA9\uB85D" } }
  },
  "selectAIModelForm": {
    "AIType": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "AI \uC720\uD615" } },
    "AIModel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "AI \uBAA8\uB378" } },
    "fileField": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD30C\uC77C \uD544\uB4DC" } },
    "temperatureLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC628\uB3C4" } },
    "temperatureDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "\uC628\uB3C4\uB294 0\uC5D0\uC11C " }, { "t": 4, "k": "max" }, { "t": 3, "v": " \uC0AC\uC774\uC758 \uB9E4\uAC1C\uBCC0\uC218\uB85C, LLM\uC758 \uC751\uB2F5 \uB79C\uB364\uC131\uC744 \uC870\uC815\uD569\uB2C8\uB2E4. \uB0AE\uC740 \uAC12\uC740 \uC9D1\uC911\uB41C \uB2F5\uBCC0\uC744 \uC81C\uACF5\uD558\uACE0, \uB192\uC740 \uAC12\uC740 \uCC3D\uC758\uC131\uC744 \uB192\uC785\uB2C8\uB2E4." }] } }
  },
  "onboarding": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC628\uBCF4\uB529" } },
    "creating": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uCCAB \uC791\uC5C5\uACF5\uAC04 \uC0DD\uC131 \uC911" } },
    "continue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uACC4\uC18D" } },
    "skip": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC9C0\uAE08\uC740 \uAC74\uB108\uB6F0\uAE30" } },
    "cancel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC124\uC815 \uB3C4\uC6C0\uB9D0\uC744 \uC6D0\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4" } },
    "failedTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBB38\uC81C\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4" } },
    "failedDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC628\uBCF4\uB529\uC774 \uC644\uC804\uD788 \uC644\uB8CC\uB418\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4. \uC77C\uBD80 \uBD80\uBD84\uC740 \uC644\uB8CC\uB418\uC5C8\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4." } },
    "failedTryAgain": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB2E4\uC2DC \uC2DC\uB3C4" } },
    "failedSkip": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC628\uBCF4\uB529 \uAC74\uB108\uB6F0\uAE30" } }
  },
  "inviteStep": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD611\uC5C5\uC790 \uCD08\uB300" } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB098\uC911\uC5D0 \uC5B8\uC81C\uB4E0\uC9C0 \uCD94\uAC00\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4." } },
    "collaboratorsLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD611\uC5C5\uC790" } }
  },
  "moreStep": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC870\uAE08 \uB354 \uC54C\uB824\uC8FC\uC138\uC694" } },
    "roleOrJob": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC5ED\uD560 \uB610\uB294 \uC9C1\uD568..." } },
    "people": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD300\uC5D0 \uBA87 \uBA85\uC774 \uC788\uC2B5\uB2C8\uAE4C?" } },
    "country": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAD6D\uAC00" } },
    "share": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Baserow \uD300\uACFC \uC774 \uC815\uBCF4\uB97C \uACF5\uC720\uD558\uB294 \uB370 \uB3D9\uC758\uD569\uB2C8\uB2E4" } },
    "how": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC800\uD76C\uC5D0 \uB300\uD574 \uC5B4\uB5BB\uAC8C \uC54C\uAC8C \uB418\uC168\uB098\uC694?" } },
    "howSearchEngine": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAC80\uC0C9 \uC5D4\uC9C4(\uAD6C\uAE00/\uBE59)" } },
    "howSocialMedia": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC18C\uC15C \uBBF8\uB514\uC5B4" } },
    "howOnlineAds": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC628\uB77C\uC778 \uAD11\uACE0" } },
    "howContent": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uCF58\uD150\uCE20 (\uBE14\uB85C\uADF8/\uB274\uC2A4\uB808\uD130/\uC601\uC0C1)" } },
    "howReviewSite": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB9AC\uBDF0 \uC0AC\uC774\uD2B8 / \uB9C8\uCF13\uD50C\uB808\uC774\uC2A4" } },
    "howFriend": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uCE5C\uAD6C\uC758 \uCD94\uCC9C" } },
    "howColleague": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB3D9\uB8CC\uC758 \uCD94\uCC9C" } },
    "howEvent": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774\uBCA4\uD2B8 \uB610\uB294 \uC6E8\uBE44\uB098" } },
    "howSales": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC601\uC5C5 \uD65C\uB3D9" } },
    "howOther": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAE30\uD0C0" } }
  },
  "teamStep": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD568\uAED8 \uCCAB \uC791\uC5C5\uACF5\uAC04\uC744 \uB9CC\uB4E4\uC5B4\uBD05\uC2DC\uB2E4!" } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC5B4\uB5A4 \uD300\uC5D0 \uC18D\uD574 \uC788\uB098\uC694?" } },
    "marketingTeam": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB9C8\uCF00\uD305" } },
    "productAndDesignTeam": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC81C\uD488 \uBC0F \uB514\uC790\uC778" } },
    "engineeringTeam": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC5D4\uC9C0\uB2C8\uC5B4\uB9C1" } },
    "operationsTeam": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC6B4\uC601" } },
    "itAndSupportTeam": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "IT \uBC0F \uC9C0\uC6D0" } },
    "hrAndLegalTeam": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC778\uC0AC \uBC0F \uBC95\uBB34" } },
    "financeTeam": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC7AC\uBB34" } },
    "creativeProductionTeam": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD06C\uB9AC\uC5D0\uC774\uD2F0\uBE0C \uD504\uB85C\uB355\uC158" } },
    "salesAndAccountManagementTeam": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC601\uC5C5 \uBC0F \uACC4\uC815 \uAD00\uB9AC" } },
    "customerServiceTeam": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uACE0\uAC1D \uC11C\uBE44\uC2A4" } },
    "manufacturingTeam": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC81C\uC870" } },
    "otherPersonalTeam": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAE30\uD0C0 / \uAC1C\uC778" } }
  },
  "workspaceStep": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC791\uC5C5\uACF5\uAC04 \uC0DD\uC131" } },
    "workspaceLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC791\uC5C5\uACF5\uAC04 \uC774\uB984" } }
  },
  "colorInput": {
    "default": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAE30\uBCF8\uAC12" } }
  },
  "imageInput": {
    "labelDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC5C5\uB85C\uB4DC\uD560 \uC774\uBBF8\uC9C0\uB97C \uC120\uD0DD\uD558\uC138\uC694..." } },
    "labelButton": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC5C5\uB85C\uB4DC" } }
  },
  "dataExplorerNode": {
    "showMore": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB354 \uB9CE\uC740 \uBC18\uBCF5 \uD45C\uC2DC" } },
    "selectNode": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC120\uD0DD" } }
  },
  "user": {
    "isStaff": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC9C1\uC6D0 \uC5EC\uBD80" } },
    "isWorkspaceAdmin": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC791\uC5C5\uACF5\uAC04 \uAD00\uB9AC\uC790 \uC5EC\uBD80" } },
    "active": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD65C\uC131" } },
    "deactivated": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBE44\uD65C\uC131\uD654\uB428" } }
  },
  "adminType": {
    "dashboard": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB300\uC2DC\uBCF4\uB4DC" } },
    "users": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC0AC\uC6A9\uC790" } },
    "workspaces": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC791\uC5C5\uACF5\uAC04" } }
  },
  "workspacesAdminTable": {
    "allWorkspaces": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBAA8\uB4E0 \uC791\uC5C5\uACF5\uAC04" } },
    "id": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "ID" } },
    "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774\uB984" } },
    "members": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBA64\uBC84" } },
    "applications": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC560\uD50C\uB9AC\uCF00\uC774\uC158" } },
    "created": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC0DD\uC131\uB428" } },
    "rowCount": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD589 \uC218" } },
    "freeUsers": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBB34\uB8CC \uC0AC\uC6A9\uC790" } },
    "seatsTaken": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC0AC\uC6A9\uB41C \uC88C\uC11D" } },
    "storageUsage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC0AC\uC6A9\uB41C \uC800\uC7A5\uC18C (MB)" } },
    "usageHelpText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC791\uC5C5\uACF5\uAC04 \uC0AC\uC6A9 \uCD94\uC801 \uC124\uC815\uC774 \uD65C\uC131\uD654\uB41C \uACBD\uC6B0 \uB9E4\uC77C \uBC24 \uACC4\uC0B0\uB429\uB2C8\uB2E4" } }
  },
  "editWorkspaceContext": {
    "delete": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC601\uAD6C \uC0AD\uC81C" } }
  },
  "deleteWorkspaceModal": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "name" }, { "t": 3, "v": " \uC0AD\uC81C" }] } },
    "confirmation": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "\uC791\uC5C5\uACF5\uAC04 " }, { "t": 4, "k": "name" }, { "t": 3, "v": "\uC744(\uB97C) \uC0AD\uC81C\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?" }] } },
    "comment": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC791\uC5C5\uACF5\uAC04\uC740 \uAD00\uB828\uB41C \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uACFC \uD568\uAED8 \uC601\uAD6C\uC801\uC73C\uB85C \uC0AD\uC81C\uB429\uB2C8\uB2E4. \uC774 \uC791\uC5C5\uC740 \uB418\uB3CC\uB9B4 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4." } },
    "delete": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "\uC791\uC5C5\uACF5\uAC04 " }, { "t": 4, "k": "name" }, { "t": 3, "v": " \uC0AD\uC81C" }] } }
  },
  "activeUsers": {
    "newUsers": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC2E0\uADDC \uC0AC\uC6A9\uC790" } },
    "activeUsers": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD65C\uC131 \uC0AC\uC6A9\uC790" } }
  },
  "usersAdminTable": {
    "allUsers": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBAA8\uB4E0 \uC0AC\uC6A9\uC790" } },
    "username": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC0AC\uC6A9\uC790 \uC774\uB984" } },
    "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774\uB984" } },
    "workspaces": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC791\uC5C5\uACF5\uAC04" } },
    "lastLogin": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB9C8\uC9C0\uB9C9 \uB85C\uADF8\uC778" } },
    "dateJoined": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAC00\uC785\uC77C" } },
    "active": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD65C\uC131" } },
    "twoFactorAuth": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "2FA" } }
  },
  "editUserContext": {
    "changePassword": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBE44\uBC00\uBC88\uD638 \uBCC0\uACBD" } },
    "delete": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC601\uAD6C \uC0AD\uC81C" } },
    "impersonate": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC0AC\uC6A9\uC790 \uAC00\uC7A5" } }
  },
  "changePasswordForm": {
    "newPassword": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC0C8 \uBE44\uBC00\uBC88\uD638" } },
    "repeatPassword": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBE44\uBC00\uBC88\uD638 \uC7AC\uC785\uB825" } },
    "changePassword": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBE44\uBC00\uBC88\uD638 \uBCC0\uACBD" } },
    "error": {
      "doesntMatch": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774 \uD544\uB4DC\uB294 \uBE44\uBC00\uBC88\uD638 \uD544\uB4DC\uC640 \uC77C\uCE58\uD574\uC57C \uD569\uB2C8\uB2E4." } }
    }
  },
  "userForm": {
    "fullName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC804\uCCB4 \uC774\uB984" } },
    "email": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774\uBA54\uC77C" } },
    "isActive": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD65C\uC131 \uC5EC\uBD80" } },
    "warning": {
      "changeEmail": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774 \uC0AC\uC6A9\uC790\uC758 \uC774\uBA54\uC77C \uC8FC\uC18C\uB97C \uBCC0\uACBD\uD558\uBA74 \uB85C\uADF8\uC778 \uC2DC \uC0C8 \uC774\uBA54\uC77C \uC8FC\uC18C\uB97C \uC0AC\uC6A9\uD574\uC57C \uD569\uB2C8\uB2E4. \uC774\uB294 \uD574\uB2F9 \uC0AC\uC6A9\uC790\uC5D0\uAC8C \uC804\uB2EC\uB418\uC5B4\uC57C \uD569\uB2C8\uB2E4." } },
      "inactiveUser": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC0AC\uC6A9\uC790\uAC00 \uBE44\uD65C\uC131\uD654\uB418\uBA74 \uB85C\uADF8\uC778\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4." } },
      "userStaff": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC0AC\uC6A9\uC790\uB97C \uC9C1\uC6D0\uC73C\uB85C \uC9C0\uC815\uD558\uBA74 \uBAA8\uB4E0 \uC0AC\uC6A9\uC790\uC640 \uC791\uC5C5\uACF5\uAC04\uC5D0 \uB300\uD55C \uAD00\uB9AC\uC790 \uC561\uC138\uC2A4 \uAD8C\uD55C\uC774 \uBD80\uC5EC\uB418\uBA70, \uBCF8\uC778\uC758 \uC9C1\uC6D0 \uAD8C\uD55C\uC744 \uCCA0\uD68C\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4." } }
    },
    "error": {
      "invalidName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC720\uD6A8\uD55C \uC804\uCCB4 \uC774\uB984\uC744 \uC785\uB825\uD558\uC138\uC694. 2\uC790 \uC774\uC0C1 150\uC790 \uC774\uD558\uC5EC\uC57C \uD569\uB2C8\uB2E4." } },
      "invalidEmail": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC720\uD6A8\uD55C \uC774\uBA54\uC77C \uC8FC\uC18C\uB97C \uC785\uB825\uD558\uC138\uC694." } }
    },
    "twoFactorAuth": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774\uC911 \uC778\uC99D" } },
    "removeTwoFactorAuth": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "2\uB2E8\uACC4 \uC778\uC99D\uC744 \uC81C\uAC70\uD558\uC138\uC694" } }
  },
  "changeUserPasswordModal": {
    "changePassword": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "username" }, { "t": 3, "v": "\uC758 \uBE44\uBC00\uBC88\uD638 \uBCC0\uACBD" }] } }
  },
  "deleteUserModal": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "username" }, { "t": 3, "v": " \uC0AD\uC81C" }] } },
    "confirmation": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "\uC0AC\uC6A9\uC790 " }, { "t": 4, "k": "name" }, { "t": 3, "v": "\uC744(\uB97C) \uC0AD\uC81C\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?" }] } },
    "comment1": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC0AC\uC6A9\uC790 \uACC4\uC815\uC740 \uC0AD\uC81C\uB418\uC9C0\uB9CC, \uD574\uB2F9 \uC0AC\uC6A9\uC790\uAC00 \uC18D\uD55C \uC791\uC5C5\uACF5\uAC04\uC740 \uACC4\uC18D \uC874\uC7AC\uD569\uB2C8\uB2E4. \uD574\uB2F9 \uC0AC\uC6A9\uC790\uAC00 \uC791\uC5C5\uACF5\uAC04\uC758 \uB9C8\uC9C0\uB9C9 \uC0AC\uC6A9\uC790\uC774\uB354\uB77C\uB3C4 \uC0AC\uC6A9\uC790\uC758 \uC791\uC5C5\uACF5\uAC04\uC740 \uC0AD\uC81C\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uC791\uC5C5\uACF5\uAC04\uC758 \uB9C8\uC9C0\uB9C9 \uC0AC\uC6A9\uC790\uB97C \uC0AD\uC81C\uD558\uBA74 \uD574\uB2F9 \uC791\uC5C5\uACF5\uAC04\uC5D0 \uC544\uBB34\uB3C4 \uC811\uADFC\uD560 \uC218 \uC5C6\uAC8C \uB429\uB2C8\uB2E4." } },
    "comment2": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC0AC\uC6A9\uC790\uB97C \uC0AD\uC81C\uD55C \uD6C4 \uC0AD\uC81C\uB41C \uC0AC\uC6A9\uC790\uC758 \uC774\uBA54\uC77C \uC8FC\uC18C\uB97C \uC0AC\uC6A9\uD558\uC5EC \uC0C8 \uC0AC\uC6A9\uC790\uAC00 \uB2E4\uC2DC \uAC00\uC785\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB2E4\uC2DC \uAC00\uC785\uD558\uC9C0 \uBABB\uD558\uB3C4\uB85D \uD558\uB824\uBA74 \uC0AC\uC6A9\uC790\uB97C \uC0AD\uC81C\uD558\uC9C0 \uC54A\uACE0 \uBE44\uD65C\uC131\uD654\uD558\uC138\uC694." } },
    "delete": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "\uC0AC\uC6A9\uC790 " }, { "t": 4, "k": "username" }, { "t": 3, "v": " \uC0AD\uC81C" }] } }
  },
  "editUserModal": {
    "delete": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC0AC\uC6A9\uC790 \uC0AD\uC81C" } },
    "edit": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "username" }, { "t": 3, "v": " \uD3B8\uC9D1" }] } }
  },
  "adminDashboard": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB300\uC2DC\uBCF4\uB4DC" } },
    "totals": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD569\uACC4" } },
    "totalUsers": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC804\uCCB4 \uC0AC\uC6A9\uC790" } },
    "totalWorkspaces": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC804\uCCB4 \uC791\uC5C5\uACF5\uAC04" } },
    "totalApplications": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC804\uCCB4 \uC560\uD50C\uB9AC\uCF00\uC774\uC158" } },
    "newUsers": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC2E0\uADDC \uC0AC\uC6A9\uC790" } },
    "newUsers24h": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC9C0\uB09C 24\uC2DC\uAC04 \uB3D9\uC548 \uC2E0\uADDC \uC0AC\uC6A9\uC790" } },
    "newUsers7days": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC9C0\uB09C 7\uC77C \uB3D9\uC548 \uC2E0\uADDC \uC0AC\uC6A9\uC790" } },
    "newUsers30days": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC9C0\uB09C 30\uC77C \uB3D9\uC548 \uC2E0\uADDC \uC0AC\uC6A9\uC790" } },
    "activeUsers": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD65C\uC131 \uC0AC\uC6A9\uC790" } },
    "activeUsers24h": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC9C0\uB09C 24\uC2DC\uAC04 \uB3D9\uC548 \uD65C\uC131 \uC0AC\uC6A9\uC790" } },
    "activeUsers7days": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC9C0\uB09C 7\uC77C \uB3D9\uC548 \uD65C\uC131 \uC0AC\uC6A9\uC790" } },
    "activeUsers30days": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC9C0\uB09C 30\uC77C \uB3D9\uC548 \uD65C\uC131 \uC0AC\uC6A9\uC790" } },
    "viewAll": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBAA8\uB450 \uBCF4\uAE30" } }
  },
  "formGroup": {
    "protectedField": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774 \uD544\uB4DC\uB294 \uBCF4\uD638\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4. \uBCC0\uACBD\uD558\uB824\uBA74 \uD074\uB9AD\uD558\uC138\uC694." } },
    "cancelProtectedField": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBCC0\uACBD \uCDE8\uC18C" } }
  },
  "userSourceType": {
    "userCountSummary": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "count" }, { "t": 3, "v": " \uC0AC\uC6A9\uC790 (" }, { "t": 4, "k": "lastUpdated" }, { "t": 3, "v": ")" }] } }
  },
  "colorPickerContext": {
    "pickColorPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB610\uB294 \uBBF8\uB9AC \uC815\uC758\uB41C \uC0C9\uC0C1\uC744 \uC120\uD0DD" } }
  },
  "guidedTourStep": {
    "step": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "totalSteps" }, { "t": 3, "v": "\uB2E8\uACC4 \uC911 " }, { "t": 4, "k": "step" }, { "t": 3, "v": "\uB2E8\uACC4" }] } },
    "gotIt": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC54C\uACA0\uC2B5\uB2C8\uB2E4" } },
    "next": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB2E4\uC74C" } },
    "back": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB4A4\uB85C" } }
  },
  "welcomeGuidedTourStep": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Baserow\uC5D0 \uC624\uC2E0 \uAC83\uC744 \uD658\uC601\uD569\uB2C8\uB2E4" } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAC04\uB2E8\uD55C \uB458\uB7EC\uBCF4\uAE30\uB97C \uD1B5\uD574 \uAE30\uBCF8\uC801\uC778 \uC0AC\uC6A9\uBC95\uC744 \uC775\uD600\uBCF4\uC138\uC694. \uBA87 \uBC88\uC758 \uD074\uB9AD\uB9CC\uC73C\uB85C \uB370\uC774\uD130\uB97C \uC190\uC27D\uAC8C \uC815\uB9AC\uD558\uACE0 \uC2DC\uAC01\uD654\uD558\uB294 \uBC29\uBC95\uC744 \uBC30\uC6B8 \uC218 \uC788\uC2B5\uB2C8\uB2E4" } },
    "buttonText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB458\uB7EC\uBCF4\uAE30 \uC2DC\uC791" } }
  },
  "controlCenterGuidedTourStep": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB2F9\uC2E0\uC758 Baserow \uC81C\uC5B4 \uC13C\uD130" } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC67C\uCABD \uC0AC\uC774\uB4DC\uBC14\uB97C \uD1B5\uD574 \uC6CC\uD06C\uC2A4\uD398\uC774\uC2A4\uB97C \uAD00\uB9AC\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4:\n\n- \uD648 \u2013 \uBA54\uC778 \uB300\uC2DC\uBCF4\uB4DC\uC5D0 \uC811\uADFC\uD569\uB2C8\uB2E4.\n- \uC54C\uB9BC \u2013 \uBCC0\uACBD \uC0AC\uD56D \uBC0F \uBA58\uC158\uC744 \uC2E4\uC2DC\uAC04\uC73C\uB85C \uD655\uC778\uD569\uB2C8\uB2E4.\n- \uBA64\uBC84 \uCD08\uB300 \u2013 \uD300\uC6D0\uC744 \uCD94\uAC00\uD558\uC5EC \uD568\uAED8 \uD611\uC5C5\uD558\uC138\uC694.\n- \uD734\uC9C0\uD1B5 \u2013 \uC0AD\uC81C\uB41C \uD56D\uBAA9\uC744 \uD655\uC778\uD558\uACE0 \uBCF5\uAD6C\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4." } }
  },
  "createNewGuidedTourStep": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC0C8 \uB370\uC774\uD130\uBCA0\uC774\uC2A4 \uB610\uB294 \uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uB9CC\uB4E4\uAE30" } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u201C\uC0C8\uB85C \uCD94\uAC00\u2026\u201D\uB97C \uD074\uB9AD\uD558\uC5EC \uD504\uB85C\uC81D\uD2B8, \uBD80\uC11C \uB610\uB294 \uD300\uC744 \uC704\uD55C \uC0C8 \uB370\uC774\uD130\uBCA0\uC774\uC2A4, \uC560\uD50C\uB9AC\uCF00\uC774\uC158, \uB610\uB294 \uB300\uC2DC\uBCF4\uB4DC\uB97C \uC124\uC815\uD558\uC138\uC694." } }
  },
  "mcpEndpointSettings": {
    "noEndpointsMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "MCP(\uBAA8\uB378 \uCEE8\uD14D\uC2A4\uD2B8 \uD504\uB85C\uD1A0\uCF5C) \uC11C\uBC84 \uC5D4\uB4DC\uD3EC\uC778\uD2B8\uAC00 \uCD94\uAC00\uB418\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4. \uC774\uB7EC\uD55C \uC5D4\uB4DC\uD3EC\uC778\uD2B8\uB294 Claude\uC640 \uAC19\uC740 LLM\uACFC \uC9C1\uC811 \uD1B5\uD569\uD558\uC5EC LLM\uC774 Baserow\uC5D0\uC11C \uC9C1\uC811 \uC791\uC5C5\uC744 \uC218\uD589\uD558\uB3C4\uB85D \uD558\uB294 \uB370 \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC2DC\uC791\uD558\uB824\uBA74 \uC11C\uBC84 \uC5D4\uB4DC\uD3EC\uC778\uD2B8\uB97C \uC0DD\uC131\uD558\uC138\uC694." } },
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "MCP \uC11C\uBC84" } },
    "createEndpoint": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC5D4\uB4DC\uD3EC\uC778\uD2B8 \uC0DD\uC131" } },
    "createNewTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "MCP \uC11C\uBC84 \uC5D4\uB4DC\uD3EC\uC778\uD2B8 \uC0DD\uC131" } },
    "backToOverview": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB4A4\uB85C" } }
  },
  "mcpEndpoint": {
    "endpointURLIntro": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "MCP(Model Context Protocol) \uC11C\uBC84 URL\uC740 MCP \uC11C\uBC84\uB97C \uC9C0\uC6D0\uD558\uB294 \uBAA8\uB4E0 \uD074\uB77C\uC774\uC5B8\uD2B8\uC5D0 \uCD94\uAC00\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774\uB294 LLM\uC774 \uC0AC\uC6A9\uC790\uB97C \uB300\uC2E0\uD558\uC5EC \uC791\uC5C5 \uACF5\uAC04\uC5D0\uC11C \uC791\uC5C5\uC744 \uC218\uD589\uD560 \uC218 \uC788\uB3C4\uB85D \uC9C1\uC811 \uC561\uC138\uC2A4\uD558\uB294 \uACE0\uC720\uD55C \uC5D4\uB4DC\uD3EC\uC778\uD2B8\uC785\uB2C8\uB2E4." } },
    "claudeInstructions": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": 'Claude Desktop\uACFC Baserow MCP\uB97C \uC2DC\uC791\uD558\uB294 \uAC04\uB2E8\uD55C \uC138 \uB2E8\uACC4\uC785\uB2C8\uB2E4.\n\n1. \uD0D0\uC0C9 \uBAA8\uC74C\uC5D0\uC11C Claude Desktop \uC124\uC815\uC744 \uC5FD\uB2C8\uB2E4(\u2318+,).\n1. "\uAC1C\uBC1C" \uD0ED\uC73C\uB85C \uC774\uB3D9\uD558\uC5EC "\uAD6C\uC131 \uD3B8\uC9D1"\uC744 \uD074\uB9AD\uD569\uB2C8\uB2E4.\n1. \uB2E4\uC74C JSON \uAD6C\uC131\uC744 `claude_desktop_config.json`\uC5D0 \uD3EC\uD568\uD569\uB2C8\uB2E4.' } },
    "windsurfInstructions": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Windsurf\uC5D0\uC11C Cascase\uB97C \uC0AC\uC6A9\uD558\uC5EC MCP\uB97C \uC124\uC815\uD558\uB294 \uAC04\uB2E8\uD55C \uB450 \uB2E8\uACC4\uC785\uB2C8\uB2E4.\n\n1. Windsurf - \uC124\uC815 -> \uACE0\uAE09 \uC124\uC815 \uB610\uB294 \uBA85\uB839 \uD314\uB808\uD2B8 -> Windsurf \uC124\uC815 \uD398\uC774\uC9C0 \uC5F4\uAE30\uB85C \uC774\uB3D9\uD569\uB2C8\uB2E4.\n1. Cascade \uC139\uC158\uAE4C\uC9C0 \uC544\uB798\uB85C \uC2A4\uD06C\uB864\uD558\uBA74 \uC0C8 \uC11C\uBC84\uB97C \uCD94\uAC00\uD558\uACE0, \uAE30\uC874 \uC11C\uBC84\uB97C \uBCF4\uACE0, `mcp_config.json`\uC5D0\uC11C \uC6D0\uC2DC JSON \uAD6C\uC131 \uD30C\uC77C\uC744 \uBCFC \uC218 \uC788\uB294 \uBC84\uD2BC\uC774 \uC788\uC2B5\uB2C8\uB2E4. \uB2E4\uC74C \uB0B4\uC6A9\uC744 \uCD94\uAC00\uD569\uB2C8\uB2E4." } },
    "detailLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB354\uBCF4\uAE30" } },
    "reveal": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC804\uCCB4 URL \uACF5\uAC1C" } },
    "warning": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "MCP URL\uC740 Baserow\uC758 \uB370\uC774\uD130\uB97C \uC218\uC815\uD560 \uC218 \uC788\uB294 \uAD8C\uD55C\uC774 \uC788\uC73C\uBBC0\uB85C \uBE44\uBC00\uBC88\uD638\uCC98\uB7FC \uC548\uC804\uD558\uAC8C \uB2E4\uB8E8\uC5B4\uC57C \uD569\uB2C8\uB2E4." } },
    "cursorInstructions": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": '\uCEE4\uC11C\uC640 Baserow MCP\uB97C \uC2DC\uC791\uD558\uB294 \uAC04\uB2E8\uD55C \uC138 \uB2E8\uACC4\uC785\uB2C8\uB2E4.\n\n1. \uCEE4\uC11C \uC124\uC815(\u21E7+\u2318+J)\uC744 \uC5FD\uB2C8\uB2E4.\n1. "MCP" \uD0ED\uC73C\uB85C \uC774\uB3D9\uD558\uC5EC "MCP \uC11C\uBC84 \uCD94\uAC00"\uB97C \uD074\uB9AD\uD569\uB2C8\uB2E4.\n1. \uB2E4\uC74C JSON \uAD6C\uC131\uC744 \uCD94\uAC00\uD569\uB2C8\uB2E4.' } }
  },
  "mcpEndpointForm": {
    "nameLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774\uB984" } },
    "workspaceLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC791\uC5C5\uACF5\uAC04" } }
  },
  "importWorkspaceForm": {
    "selectApplicationsToImport": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAC00\uC838\uC62C \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC744 \uC120\uD0DD\uD558\uC138\uC694" } }
  },
  "workspaceSearch": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAC80\uC0C9" } },
    "searchEverything": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAC80\uC0C9..." } },
    "searching": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAC80\uC0C9 \uC911..." } },
    "noResults": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAC80\uC0C9 \uACB0\uACFC\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4" } },
    "noResultsSubtitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": '"' }, { "t": 4, "k": "searchTerm" }, { "t": 3, "v": '"\uC640(\uACFC) \uC77C\uCE58\uD558\uB294 \uD56D\uBAA9\uC744 \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4' }] } },
    "welcome": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC791\uC5C5 \uACF5\uAC04\uC758 \uBAA8\uB4E0 \uAC83\uC744 \uAC80\uC0C9\uD558\uC138\uC694" } },
    "welcomeSubtitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC704\uC758 \uAC80\uC0C9\uCC3D\uC744 \uC0AC\uC6A9\uD558\uC5EC \uC560\uD50C\uB9AC\uCF00\uC774\uC158, \uD14C\uC774\uBE14, \uD544\uB4DC \uB4F1\uC744 \uCC3E\uC544\uBCF4\uC138\uC694" } },
    "navigate": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD0D0\uC0C9" } },
    "select": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC120\uD0DD" } },
    "close": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB2EB\uAE30" } },
    "types": {
      "applications": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC560\uD50C\uB9AC\uCF00\uC774\uC158" } },
      "tables": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD14C\uC774\uBE14" } },
      "fields": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD544\uB4DC" } },
      "rows": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD589" } }
    },
    "empty": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "(\uBE44\uC5B4 \uC788\uC74C)" } }
  },
  "action": {
    "cancel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uCDE8\uC18C" } },
    "submit": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC81C\uCD9C" } }
  },
  "coreHTTPTriggerServiceForm": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC6F9\uD6C5 URL" } },
    "urlVersion": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBC84\uC804" } },
    "urlVersionPublished": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAC8C\uC2DC\uB428" } },
    "urlVersionTest": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD14C\uC2A4\uD2B8" } },
    "copyUrl": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC6F9\uD6C5 URL \uBCF5\uC0AC" } },
    "urlCopied": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC6F9\uD6C5 URL\uC774 \uD074\uB9BD\uBCF4\uB4DC\uC5D0 \uBCF5\uC0AC\uB418\uC5C8\uC2B5\uB2C8\uB2E4" } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774 \uC6F9\uD6C5\uC740 HTTP \uC694\uCCAD\uC744 \uC218\uC2E0\uD558\uACE0 \uC694\uCCAD \uB370\uC774\uD130\uB97C \uD398\uC774\uB85C\uB4DC\uB85C \uC0AC\uC6A9\uD558\uC5EC \uC6CC\uD06C\uD50C\uB85C\uB97C \uD2B8\uB9AC\uAC70\uD569\uB2C8\uB2E4." } },
    "methodsOptionLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD5C8\uC6A9\uB41C HTTP \uBA54\uC11C\uB4DC" } },
    "methodsOptionDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774 \uC6F9\uD6C5\uC5D0 \uD5C8\uC6A9\uB418\uB294 HTTP \uBA54\uC11C\uB4DC\uB97C \uC81C\uC5B4\uD569\uB2C8\uB2E4. GET\uC744 \uC81C\uC678\uD558\uBA74 \uC6F9\uD6C5\uC774 \uC2E4\uC218\uB85C \uD2B8\uB9AC\uAC70\uB420 \uAC00\uB2A5\uC131\uC774 \uC904\uC5B4\uB4ED\uB2C8\uB2E4." } },
    "methodsOptionAll": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC804\uCCB4" } },
    "methodsOptionExcludeGet": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "GET \uC81C\uC678" } }
  },
  "twoFactorAuthSettings": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "2\uB2E8\uACC4 \uC778\uC99D" } },
    "loadingError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "2\uB2E8\uACC4 \uC778\uC99D\uC744 \uB85C\uB4DC\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4." } }
  },
  "disableTwoFactorAuth": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "2FA\uB97C \uBE44\uD65C\uC131\uD654\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?" } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uACC4\uC815 \uBCF4\uC548\uC774 \uD55C \uB2E8\uACC4 \uB354 \uC57D\uD654\uB429\uB2C8\uB2E4. \uB204\uAD70\uAC00 \uBE44\uBC00\uBC88\uD638\uB97C \uC54C\uC544\uB0B4\uBA74 \uACC4\uC815\uC5D0 \uB85C\uADF8\uC778\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4." } },
    "cancel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uADF8\uB300\uB85C \uB450\uC138\uC694" } },
    "disable": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBE44\uD65C\uC131\uD654" } },
    "successTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "2\uB2E8\uACC4 \uC778\uC99D\uC774 \uBE44\uD65C\uC131\uD654\uB418\uC5C8\uC2B5\uB2C8\uB2E4" } },
    "errorWrongPasswordTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC798\uBABB\uB41C \uBE44\uBC00\uBC88\uD638" } },
    "errorWrongPasswordMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC785\uB825\uD55C \uBE44\uBC00\uBC88\uD638\uAC00 \uADC0\uD558\uC758 \uBE44\uBC00\uBC88\uD638\uC640 \uC77C\uCE58\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4." } }
  },
  "enableTwoFactorOptions": {
    "cancel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uCDE8\uC18C" } },
    "continue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uACC4\uC18D" } }
  },
  "saveBackupCode": {
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC778\uC99D \uC571\uC774\uB098 \uD734\uB300\uD3F0\uC5D0 \uC811\uADFC\uD560 \uC218 \uC5C6\uC5B4 \uC778\uC99D \uCF54\uB4DC\uB97C \uC218\uC2E0\uD558\uAC70\uB098 \uC0DD\uC131\uD560 \uC218 \uC5C6\uB294 \uACBD\uC6B0 \uC774 \uBC31\uC5C5 \uCF54\uB4DC\uB97C \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774 \uCF54\uB4DC\uB294 \uD55C \uBC88\uB9CC \uC0AC\uC6A9 \uAC00\uB2A5\uD569\uB2C8\uB2E4. \uB85C\uADF8\uC778 \uC5C6\uC774\uB3C4 \uC811\uADFC\uD560 \uC218 \uC788\uB3C4\uB85D \uBC18\uB4DC\uC2DC \uAE30\uB85D\uD558\uAC70\uB098 \uC548\uC804\uD55C \uC7A5\uC18C\uC5D0 \uBCF5\uC0AC\uD574 \uB450\uC2ED\uC2DC\uC624." } },
    "backupCodes": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBC31\uC5C5 \uCF54\uB4DC" } },
    "copy": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBCF5\uC0AC" } },
    "continue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uACC4\uC18D" } },
    "backupCodesCopiedTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBCF5\uC0AC\uB428!" } },
    "backupCodesCopiedMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBC31\uC5C5 \uCF54\uB4DC\uAC00 \uD074\uB9BD\uBCF4\uB4DC\uC5D0 \uBCF5\uC0AC\uB418\uC5C8\uC2B5\uB2C8\uB2E4." } }
  },
  "totpAuthType": {
    "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC778\uC99D \uC571" } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC571\uC744 \uC0AC\uC6A9\uD558\uC5EC 2\uB2E8\uACC4 \uC778\uC99D \uCF54\uB4DC\uB97C \uBC1B\uC73C\uC138\uC694. Google Authenticator, Authy, Microsoft Authenticator \uB4F1\uC758 \uC571\uC744 \uC0AC\uC6A9\uD558\uB294 \uAC83\uC774 \uC88B\uC2B5\uB2C8\uB2E4." } },
    "enabledDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC778\uC99D \uC571\uC744 \uD1B5\uD574 \uC778\uC99D \uCF54\uB4DC\uB97C \uBC1B\uAC8C \uB429\uB2C8\uB2E4. \uB2E4\uB978 \uC571\uC774\uB098 \uC778\uC99D \uBC29\uC2DD\uC744 \uC124\uC815\uD558\uB824\uBA74 2FA\uB97C \uBE44\uD65C\uC131\uD654\uD558\uACE0 \uB2E4\uC2DC \uC124\uC815\uD558\uC138\uC694." } },
    "sideLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uCD94\uCC9C" } }
  },
  "twoFactorEnabled": {
    "enabled": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD65C\uC131\uD654\uB428" } },
    "disable": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "2FA \uBE44\uD65C\uC131\uD654" } }
  },
  "totpLogin": {
    "backupCodesTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBC31\uC5C5 \uCF54\uB4DC\uB97C \uC785\uB825\uD558\uC138\uC694" } },
    "backupCodesDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC77C\uD68C\uC6A9 \uBC31\uC5C5 \uCF54\uB4DC\uB85C \uB85C\uADF8\uC778\uD558\uC138\uC694." } },
    "authenticate": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC778\uC99D" } },
    "goBack": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB3CC\uC544\uAC00\uAE30" } },
    "totpTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "2\uB2E8\uACC4 \uC778\uC99D" } },
    "totpDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC778\uC99D \uC571\uC5D0\uC11C \uCF54\uB4DC\uB97C \uC785\uB825\uD558\uC138\uC694." } },
    "verify": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD655\uC778" } },
    "useBackupCode": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBC31\uC5C5 \uCF54\uB4DC \uC0AC\uC6A9" } },
    "verificationFailed": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAC80\uC99D\uC5D0 \uC2E4\uD328\uD588\uC2B5\uB2C8\uB2E4" } },
    "verificationFailedDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC785\uB825\uD55C \uCF54\uB4DC\uAC00 \uC62C\uBC14\uB974\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4." } },
    "loginExpired": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB85C\uADF8\uC778\uC774 \uB9CC\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4" } },
    "loginExpiredDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBE44\uBC00\uBC88\uD638\uB97C \uB2E4\uC2DC \uC785\uB825\uD574 \uC8FC\uC138\uC694." } },
    "rateLimit": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC2DC\uB3C4\uAC00 \uB108\uBB34 \uB9CE\uC2B5\uB2C8\uB2E4." } }
  },
  "formulaInputContext": {
    "variables": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBCC0\uC218" } },
    "functions": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAE30\uB2A5" } },
    "operators": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC5F0\uC0B0\uC790" } },
    "search": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAC80\uC0C9" } },
    "useRegularInputModalTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774 \uD544\uB4DC\uC5D0 \uC77C\uBC18 \uC785\uB825\uAC12\uC744 \uC0AC\uC6A9\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?" } },
    "useRegularInput": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC77C\uBC18\uC801\uC778 \uC785\uB825\uC744 \uC0AC\uC6A9" } },
    "useAdvancedInput": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC804\uBB38\uAC00 \uBAA8\uB4DC\uB85C \uC804\uD658" } },
    "useAdvancedInputModalTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC804\uBB38\uAC00 \uBAA8\uB4DC\uB85C \uC804\uD658\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?" } },
    "modalMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB2E4\uB978 \uBAA8\uB4DC\uB85C \uC804\uD658\uD558\uBA74 \uD604\uC7AC \uC218\uC2DD\uC774 \uC0AD\uC81C\uB429\uB2C8\uB2E4. \uACC4\uC18D\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?" } },
    "useSimpleInput": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAE30\uBCF8 \uBAA8\uB4DC\uB85C \uC804\uD658" } },
    "useSimpleInputModalTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAE30\uBCF8 \uBAA8\uB4DC\uB85C \uC804\uD658\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?" } }
  },
  "twoFactorAuthField": {
    "enabled": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD65C\uC131\uD654\uB428" } },
    "disabled": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBE44\uD65C\uC131\uD654\uB428" } }
  },
  "twoFactorAuthEmpty": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC544\uC9C1 2FA\uB97C \uD65C\uC131\uD654\uD558\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4" } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uADC0\uD558\uC758 \uACC4\uC815\uC5D0 \uBCF4\uC548\uC744 \uD55C\uCE35 \uB354 \uAC15\uD654\uD558\uC138\uC694." } },
    "enable": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "2FA \uD65C\uC131\uD654" } },
    "notAllowedTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "2FA\uAC00 \uD65C\uC131\uD654\uB418\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4" } },
    "notAllowedDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "2FA \uCD94\uAC00\uB294 \uBE44\uBC00\uBC88\uD638 \uAE30\uBC18 \uACC4\uC815\uC5D0\uB9CC \uAC00\uB2A5\uD569\uB2C8\uB2E4." } }
  },
  "nodeHelpTooltip": {
    "exampleLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC608\uC2DC" } },
    "result": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "\uACB0\uACFC: " }, { "t": 4, "k": "result" }] } }
  },
  "enableWithQRCode": {
    "scanQRCode": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "QR\uCF54\uB4DC \uC2A4\uCE94" } },
    "scanQRCodeDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Google Authenticator, Authy \uB610\uB294 Microsoft Authenticator\uC640 \uAC19\uC740 \uC571\uC73C\uB85C \uCF54\uB4DC\uB97C \uC2A4\uCE94\uD558\uC138\uC694." } },
    "clickToCopy": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB610\uB294 \uC5EC\uAE30\uB97C \uD074\uB9AD\uD558\uC5EC \uCF54\uB4DC\uB97C \uBCF5\uC0AC\uD558\uC138\uC694." } },
    "secretCopiedTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC2DC\uD06C\uB9BF \uBCF5\uC0AC\uB428" } },
    "secretCopiedMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "TOTP \uBE44\uBC00\uBC88\uD638\uAC00 \uD074\uB9BD\uBCF4\uB4DC\uC5D0 \uBCF5\uC0AC\uB418\uC5C8\uC2B5\uB2C8\uB2E4." } },
    "enterCode": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD45C\uC2DC\uB41C \uCF54\uB4DC\uB97C \uC785\uB825\uD558\uC138\uC694" } },
    "enterCodeDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC571\uC5D0 \uD45C\uC2DC\uB41C 6\uC790\uB9AC \uCF54\uB4DC\uB97C \uC785\uB825\uD558\uC5EC \uC62C\uBC14\uB974\uAC8C \uC124\uC815\uB418\uC5C8\uB294\uC9C0 \uD655\uC778\uD558\uC138\uC694." } },
    "verificationFailed": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAC80\uC99D\uC5D0 \uC2E4\uD328\uD588\uC2B5\uB2C8\uB2E4" } },
    "verificationFailedDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC785\uB825\uD55C \uCF54\uB4DC\uAC00 \uC720\uD6A8\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4." } },
    "provisioningFailed": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD504\uB85C\uBE44\uC800\uB2DD\uC5D0 \uC2E4\uD328\uD588\uC2B5\uB2C8\uB2E4" } },
    "checkSuccess": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "2\uB2E8\uACC4 \uC778\uC99D\uC744 \uC131\uACF5\uC801\uC73C\uB85C \uD65C\uC131\uD654\uD588\uC2B5\uB2C8\uB2E4" } }
  },
  "changeEmail": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774\uBA54\uC77C \uBCC0\uACBD\uC744 \uD655\uC778\uD558\uC138\uC694" } },
    "submit": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774\uBA54\uC77C \uBCC0\uACBD\uC744 \uD655\uC778\uD558\uC138\uC694" } },
    "changed": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774\uBA54\uC77C \uC8FC\uC18C\uAC00 \uBCC0\uACBD\uB418\uC5C8\uC2B5\uB2C8\uB2E4" } },
    "message": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774\uBA54\uC77C \uC8FC\uC18C \uBCC0\uACBD\uC774 \uC644\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4. \uC774\uC81C \uC0C8 \uC774\uBA54\uC77C \uC8FC\uC18C\uB85C Baserow\uC5D0 \uB85C\uADF8\uC778\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4." } },
    "errorInvalidLinkTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC798\uBABB\uB41C \uB9C1\uD06C" } },
    "errorInvalidLinkMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB9C1\uD06C\uAC00 \uC720\uD6A8\uD558\uC9C0 \uC54A\uC544 \uC774\uBA54\uC77C \uC8FC\uC18C\uB97C \uBCC0\uACBD\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4." } },
    "errorLinkExpiredTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB9C1\uD06C\uAC00 \uB9CC\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4" } },
    "errorLinkExpiredMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774\uBA54\uC77C \uC8FC\uC18C \uBCC0\uACBD \uB9C1\uD06C\uAC00 \uB9CC\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4. \uACC4\uC815 \uC124\uC815\uC5D0\uC11C \uC0C8 \uB9C1\uD06C\uB97C \uC694\uCCAD\uD574 \uC8FC\uC138\uC694." } },
    "errorEmailExistsTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774\uBA54\uC77C\uC774 \uC774\uBBF8 \uC874\uC7AC\uD569\uB2C8\uB2E4" } },
    "errorEmailExistsMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774\uBBF8 \uB3D9\uC77C\uD55C \uC774\uBA54\uC77C \uC8FC\uC18C\uB97C \uC0AC\uC6A9\uD558\uB294 \uACC4\uC815\uC774 \uC874\uC7AC\uD558\uBBC0\uB85C \uC774\uBA54\uC77C \uC8FC\uC18C\uB97C \uBCC0\uACBD\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4." } },
    "errorEmailAlreadyChangedTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774\uBA54\uC77C \uC8FC\uC18C\uAC00 \uC774\uBBF8 \uBCC0\uACBD\uB418\uC5C8\uC2B5\uB2C8\uB2E4" } },
    "errorEmailAlreadyChangedMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774\uBA54\uC77C \uC8FC\uC18C\uB294 \uC774\uBBF8 \uC694\uCCAD\uD558\uC2E0 \uC8FC\uC18C\uB85C \uBCC0\uACBD\uB418\uC5C8\uC2B5\uB2C8\uB2E4." } }
  },
  "adminUsers": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC0AC\uC6A9\uC790" } }
  },
  "adminWorkspaces": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC791\uC5C5\uACF5\uAC04" } }
  },
  "emailSettings": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774\uBA54\uC77C \uC8FC\uC18C \uBCC0\uACBD" } },
    "successTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD655\uC778 \uC774\uBA54\uC77C\uC774 \uBC1C\uC1A1\uB418\uC5C8\uC2B5\uB2C8\uB2E4" } },
    "successDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC0C8 \uC774\uBA54\uC77C \uC8FC\uC18C\uB85C \uD655\uC778 \uC774\uBA54\uC77C\uC744 \uBCF4\uB0B4\uB4DC\uB838\uC2B5\uB2C8\uB2E4. \uBC1B\uC740 \uD3B8\uC9C0\uD568\uC744 \uD655\uC778\uD558\uC2DC\uACE0 \uB9C1\uD06C\uB97C \uD074\uB9AD\uD558\uC5EC \uC774\uBA54\uC77C \uC8FC\uC18C \uBCC0\uACBD\uC744 \uC644\uB8CC\uD574 \uC8FC\uC138\uC694." } },
    "currentEmailLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD604\uC7AC \uC774\uBA54\uC77C \uC8FC\uC18C" } },
    "newEmailLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC0C8 \uC774\uBA54\uC77C \uC8FC\uC18C" } },
    "passwordLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD604\uC7AC \uBE44\uBC00\uBC88\uD638" } },
    "submitButton": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD655\uC778 \uC774\uBA54\uC77C \uBC1C\uC1A1" } },
    "errorInvalidPasswordTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC798\uBABB\uB41C \uBE44\uBC00\uBC88\uD638\uC785\uB2C8\uB2E4" } },
    "errorInvalidPasswordMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBE44\uBC00\uBC88\uD638\uAC00 \uC798\uBABB\uB418\uC5B4 \uC774\uBA54\uC77C \uBCC0\uACBD\uC744 \uC694\uCCAD\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4." } },
    "errorEmailExistsTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774\uBA54\uC77C\uC774 \uC774\uBBF8 \uC874\uC7AC\uD569\uB2C8\uB2E4" } },
    "errorEmailExistsMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774\uBBF8 \uD574\uB2F9 \uC774\uBA54\uC77C \uC8FC\uC18C\uB97C \uC0AC\uC6A9\uD558\uB294 \uACC4\uC815\uC774 \uC874\uC7AC\uD558\uBBC0\uB85C \uC774\uBA54\uC77C \uBCC0\uACBD\uC744 \uC694\uCCAD\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4." } },
    "errorNotAllowedTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774\uBA54\uC77C \uBCC0\uACBD\uC740 \uD5C8\uC6A9\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4" } },
    "errorNotAllowedMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uADC0\uD558\uC758 \uACC4\uC815\uC740 \uB2E8\uC77C \uB85C\uADF8\uC778(SSO) \uC778\uC99D\uC744 \uC0AC\uC6A9\uD558\uACE0 \uC788\uC73C\uBBC0\uB85C \uC774\uBA54\uC77C \uC8FC\uC18C\uB97C \uBCC0\uACBD\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4." } }
  },
  "formulaInputErrorContext": {
    "viewFullError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC804\uCCB4 \uC624\uB958 \uBCF4\uAE30" } }
  },
  "formulaInputExplorerContext": {
    "variables": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBCC0\uC218" } },
    "functions": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD568\uC218" } },
    "operators": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC6B4\uC601\uC790" } },
    "search": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAC80\uC0C9" } },
    "useRegularInputModalTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC774 \uD544\uB4DC\uC5D0 \uC77C\uBC18 \uC785\uB825\uAC12\uC744 \uC0AC\uC6A9\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?" } },
    "useSimpleInput": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAE30\uBCF8 \uBAA8\uB4DC\uB85C \uC804\uD658" } },
    "useSimpleInputModalTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uAE30\uBCF8 \uBAA8\uB4DC\uB85C \uC804\uD658\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?" } },
    "useAdvancedInput": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC804\uBB38\uAC00 \uBAA8\uB4DC\uB85C \uC804\uD658" } },
    "useAdvancedInputModalTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC804\uBB38\uAC00 \uBAA8\uB4DC\uB85C \uC804\uD658\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?" } },
    "modalMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB2E4\uB978 \uBAA8\uB4DC\uB85C \uC804\uD658\uD558\uBA74 \uD604\uC7AC \uC218\uC2DD\uC774 \uC0AD\uC81C\uB429\uB2C8\uB2E4. \uACC4\uC18D\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?" } }
  },
  "formulaParserErrors": {
    "invalidArgCountMin": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "'" }, { "t": 4, "k": "funcType" }, { "t": 3, "v": "' \uD568\uC218\uB294 \uCD5C\uC18C " }, { "t": 4, "k": "minArgs" }, { "t": 3, "v": "\uAC1C\uC758 \uC778\uC218\uB97C \uD544\uC694\uB85C \uD569\uB2C8\uB2E4." }] } },
    "invalidArgCountExact": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "'" }, { "t": 4, "k": "funcType" }, { "t": 3, "v": "' \uD568\uC218\uB294 \uC815\uD655\uD788 " }, { "t": 4, "k": "minArgs" }, { "t": 3, "v": "\uAC1C\uC758 \uC778\uC218\uB97C \uD544\uC694\uB85C \uD569\uB2C8\uB2E4." }] } },
    "invalidArgCountRange": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "'" }, { "t": 4, "k": "funcType" }, { "t": 3, "v": "' \uD568\uC218\uB294 " }, { "t": 4, "k": "minArgs" }, { "t": 3, "v": "\uC640 " }, { "t": 4, "k": "maxArgs" }, { "t": 3, "v": " \uC0AC\uC774\uC758 \uC778\uC218\uB97C \uC608\uC0C1\uD569\uB2C8\uB2E4." }] } },
    "invalidArgumentType": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "'" }, { "t": 4, "k": "value" }, { "t": 3, "v": "'\uB294 '" }, { "t": 4, "k": "funcType" }, { "t": 3, "v": "' \uD568\uC218\uC758 \uC720\uD6A8\uD55C \uC778\uC218\uAC00 \uC544\uB2D9\uB2C8\uB2E4." }] } }
  },
  "sampleDataViewer": {
    "payloadLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC544\uC6C3\uD48B" } },
    "errorLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4..." } },
    "showPayloadLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uD398\uC774\uB85C\uB4DC \uD45C\uC2DC" } },
    "showErrorLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC624\uB958 \uD45C\uC2DC" } },
    "downloadFullPayload": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC804\uCCB4 \uD398\uC774\uB85C\uB4DC \uB2E4\uC6B4\uB85C\uB4DC" } },
    "truncatedLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "[\uCD9C\uB825 \uB0B4\uC6A9 \uC77C\uBD80 \uC0DD\uB7B5]" } },
    "truncatedPayloadWarning": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "\uCC98\uC74C " }, { "t": 4, "k": "size" }, { "t": 3, "v": "\uAC1C\uC758 \uBB38\uC790\uB9CC \uD45C\uC2DC\uB429\uB2C8\uB2E4. \uC804\uCCB4 \uD398\uC774\uB85C\uB4DC\uB97C \uB2E4\uC6B4\uB85C\uB4DC\uD558\uC5EC \uCEF4\uD4E8\uD130\uC5D0\uC11C \uD655\uC778\uD558\uC138\uC694." }] } }
  },
  "editWorkspace": {
    "invalidNameTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC6CC\uD06C\uC2A4\uD398\uC774\uC2A4 \uC774\uB984\uC740 \uD5C8\uC6A9\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4" } }
  },
  "workspaceOutdatedToast": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB108\uBB34 \uB9CE\uC740 \uBCC0\uACBD" } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC790\uB9AC\uB97C \uBE44\uC6B4 \uB3D9\uC548 \uB108\uBB34 \uB9CE\uC740 \uBCC0\uACBD \uC0AC\uD56D\uC774 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4. \uCD5C\uC2E0 \uB370\uC774\uD130\uB97C \uBCF4\uB824\uBA74 \uC0C8\uB85C\uACE0\uCE68\uD558\uC138\uC694." } },
    "action": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uB370\uC774\uD130 \uC0C8\uB85C \uACE0\uCE68" } },
    "dismiss": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uBC84\uB9BC" } }
  },
  "disableTwoFactorAuthModal": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "2\uB2E8\uACC4 \uC778\uC99D\uC744 \uC81C\uAC70\uD558\uC138\uC694" } },
    "confirmation": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "name" }, { "t": 3, "v": "\uB2D8\uC758 2\uB2E8\uACC4 \uC778\uC99D\uC744 \uC815\uB9D0\uB85C \uC81C\uAC70\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?" }] } },
    "comment": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\uC0AC\uC6A9\uC790\uB294 \uBE44\uBC00\uBC88\uD638\uB9CC\uC73C\uB85C \uB85C\uADF8\uC778\uD560 \uC218 \uC788\uC73C\uBA70, \uB098\uC911\uC5D0 \uB2E4\uC2DC 2\uB2E8\uACC4 \uC778\uC99D\uC744 \uC124\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4." } },
    "remove": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "2\uB2E8\uACC4 \uC778\uC99D\uC744 \uC81C\uAC70\uD558\uC138\uC694" } }
  }
};

export { resource as default };
//# sourceMappingURL=ko-ard4dysd.mjs.map
