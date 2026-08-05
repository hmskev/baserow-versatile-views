!(function() {
  try {
    var e = false ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
    var n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "f601c1c8-4470-45e8-a5c6-bce6b8aaf2dc", e._sentryDebugIdIdentifier = "sentry-dbid-f601c1c8-4470-45e8-a5c6-bce6b8aaf2dc");
  } catch (e2) {
  }
})();
const resource = {
  "paginator": {
    "page": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Seite" } },
    "of": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "von " }, { "t": 4, "k": "pages" }] } }
  },
  "workspaceSearch": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Suche" } },
    "searchEverything": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Suchen..." } },
    "searching": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wird gesucht..." } },
    "noResults": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Keine Ergebnisse gefunden" } },
    "noResultsSubtitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Wir konnten nichts finden, das \u201E" }, { "t": 4, "k": "searchTerm" }, { "t": 3, "v": "\u201C entspricht" }] } },
    "welcome": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Alles in Ihrem Arbeitsbereich durchsuchen" } },
    "welcomeSubtitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Verwenden Sie das Suchfeld oben, um Anwendungen, Tabellen, Felder und mehr zu finden" } },
    "navigate": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Navigieren" } },
    "select": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ausw\xE4hlen" } },
    "close": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Schlie\xDFen" } },
    "empty": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "(leer)" } },
    "types": {
      "applications": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Anwendungen" } },
      "tables": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tabellen" } },
      "fields": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Felder" } },
      "rows": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zeilen" } }
    }
  },
  "copied": {
    "label": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kopiert!" } }
  },
  "action": {
    "cancel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Abbrechen" } },
    "submit": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Senden" } }
  },
  "sidebarApplication": {
    "rename": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Umbenennen" } },
    "duplicate": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Duplizieren" } },
    "viewTrash": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Papierkorb anzeigen" } },
    "delete": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "L\xF6schen" } },
    "snapshots": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Snapshots" } }
  },
  "duplicateApplicationJobType": {
    "duplicating": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Duplizieren" } },
    "duplicatedTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Anwendung dupliziert" } }
  },
  "InstallTemplateJobType": {
    "installing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Installieren" } },
    "installedTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Vorlage installiert" } }
  },
  "sidebar": {
    "createWorkspace": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Arbeitsbereich erstellen" } },
    "addNewWorkspace": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Neuen Arbeitsbereich hinzuf\xFCgen" } },
    "inviteOthers": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Andere einladen" } },
    "members": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mitglieder" } },
    "logoff": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Abmelden" } },
    "errorNoWorkspace": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sie haben keine Arbeitsbereiche." } },
    "adminTools": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Administrations-Tools" } },
    "home": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Startseite" } },
    "dashboard": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dashboard" } },
    "trash": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Papierkorb" } },
    "settings": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Meine Einstellungen" } },
    "notifications": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Benachrichtigungen" } },
    "adminSettings": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Administrations-Einstellungen" } },
    "general": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Allgemein" } },
    "people": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Personen" } },
    "licenses": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Lizenzen" } }
  },
  "accountForm": {
    "nameLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ihr Name" } },
    "languageLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sprache der Benutzeroberfl\xE4che" } }
  },
  "accountSettings": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Konto" } },
    "changedTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ge\xE4ndert" } },
    "changedDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ihre Kontoinformationen wurden ge\xE4ndert." } },
    "submitButton": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Konto aktualisieren" } }
  },
  "twoFactorAuthSettings": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zwei-Faktor-Authentifizierung" } },
    "loadingError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Die Zwei-Faktor-Konfiguration konnte nicht geladen werden." } }
  },
  "disableTwoFactorAuth": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sind Sie sicher, dass Sie 2FA deaktivieren m\xF6chten?" } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ihr Konto verliert eine zus\xE4tzliche Sicherheitsebene. Falls jemand Ihr Passwort herausfindet, k\xF6nnte er sich m\xF6glicherweise an Ihrem Konto anmelden." } },
    "cancel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aktiviert lassen" } },
    "disable": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Deaktivieren" } },
    "successTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Die Zwei-Faktor-Authentifizierung wurde deaktiviert" } },
    "errorWrongPasswordTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Falsches Passwort" } },
    "errorWrongPasswordMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Das eingegebene Passwort stimmt nicht mit Ihrem Passwort \xFCberein." } }
  },
  "enableTwoFactorOptions": {
    "cancel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Abbrechen" } },
    "continue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Fortfahren" } }
  },
  "saveBackupCode": {
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wenn Sie keinen Zugriff mehr auf Ihre Authentifizierungs-App oder Ihr Telefon haben und keine Authentifizierungscodes empfangen oder erzeugen k\xF6nnen, k\xF6nnen Sie diesen Backup-Code verwenden. Sie k\xF6nnen ihn nur einmal verwenden. Stellen Sie sicher, dass Sie ihn aufschreiben oder an einem sicheren Ort kopieren, sodass Sie ohne Anmeldung darauf zugreifen k\xF6nnen." } },
    "backupCodes": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Backup-Codes" } },
    "copy": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kopieren" } },
    "continue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Fortfahren" } },
    "backupCodesCopiedTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kopiert!" } },
    "backupCodesCopiedMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Backup-Codes in die Zwischenablage kopiert." } }
  },
  "totpAuthType": {
    "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Authentifizierungs-App" } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Verwenden Sie eine App, um Codes f\xFCr die Zwei-Faktor-Authentifizierung zu erhalten. Wir empfehlen Apps wie Google Authenticator, Authy und Microsoft Authenticator." } },
    "enabledDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sie erhalten die Verifizierungscodes \xFCber eine Authentifizierungs-App. Um eine andere App oder Methode einzurichten, deaktivieren Sie einfach 2FA und richten Sie es erneut ein." } },
    "sideLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Empfohlen" } }
  },
  "twoFactorEnabled": {
    "enabled": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aktiviert" } },
    "disable": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "2FA deaktivieren" } }
  },
  "totpLogin": {
    "backupCodesTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Backup-Code eingeben" } },
    "backupCodesDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Melden Sie sich mit Ihrem einmal verwendbaren Backup-Code an." } },
    "authenticate": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Authentifizieren" } },
    "goBack": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zur\xFCck" } },
    "totpTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zwei-Faktor-Authentifizierung" } },
    "totpDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Geben Sie den Code aus Ihrer Authentifizierungs-App ein." } },
    "verify": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Verifizieren" } },
    "useBackupCode": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Backup-Code verwenden" } },
    "verificationFailed": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Verifizierung fehlgeschlagen" } },
    "verificationFailedDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Der eingegebene Code ist nicht korrekt." } },
    "loginExpired": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Anmeldung abgelaufen" } },
    "loginExpiredDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Bitte geben Sie Ihr Passwort erneut ein." } },
    "rateLimit": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zu viele Versuche." } }
  },
  "settingsModal": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Meine Einstellungen" } }
  },
  "notificationPanel": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Benachrichtigungen" } },
    "markAllAsRead": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Alle als gelesen markieren" } },
    "clearAll": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Alle leeren" } },
    "noNotificationTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sie haben keine Benachrichtigungen" } },
    "noNotification": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wir benachrichtigen Sie \xFCber wichtige Updates und jedes Mal, wenn Sie auf Baserow erw\xE4hnt werden." } },
    "newNotificationsAvailable": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Es gibt neue Benachrichtigungen" } },
    "refresh": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aktualisieren" } }
  },
  "clearAllNotificationsConfirmModal": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sind Sie sicher, dass Sie alle Benachrichtigungen leeren m\xF6chten?" } },
    "message": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Alle Benachrichtigungen werden dauerhaft gel\xF6scht und Sie k\xF6nnen sie nicht mehr sehen." } }
  },
  "passwordSettings": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Passwort \xE4ndern" } },
    "changedTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Passwort ge\xE4ndert" } },
    "changedDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ihr Passwort wurde ge\xE4ndert. Wenn Sie sich das n\xE4chste Mal anmelden m\xF6chten, m\xFCssen Sie Ihr neues Passwort verwenden." } },
    "oldPasswordLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Altes Passwort" } },
    "oldPasswordRequiredError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Das alte Passwort ist erforderlich." } },
    "newPasswordLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Neues Passwort" } },
    "repeatNewPasswordLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wiederholung des neuen Passworts" } },
    "repeatNewPasswordMatchError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dieses Feld muss mit Ihrem neuen Passwortfeld \xFCbereinstimmen." } },
    "submitButton": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Passwort \xE4ndern" } },
    "errorInvalidOldPasswordTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ung\xFCltiges Passwort" } },
    "errorInvalidOldPasswordMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sie konnten Ihr Passwort nicht \xE4ndern, weil Ihr altes Passwort ung\xFCltig ist." } }
  },
  "emailSettings": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "E-Mail-Adresse \xE4ndern" } },
    "successTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Best\xE4tigungs-E-Mail gesendet" } },
    "successDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wir haben eine Best\xE4tigungs-E-Mail an Ihre neue Adresse gesendet. Bitte \xFCberpr\xFCfen Sie Ihren Posteingang und klicken Sie auf den Link, um die \xC4nderung der E-Mail-Adresse abzuschlie\xDFen." } },
    "currentEmailLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aktuelle E-Mail-Adresse" } },
    "newEmailLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Neue E-Mail-Adresse" } },
    "passwordLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aktuelles Passwort" } },
    "submitButton": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Best\xE4tigungs-E-Mail senden" } },
    "errorInvalidPasswordTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ung\xFCltiges Passwort" } },
    "errorInvalidPasswordMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Die \xC4nderung der E-Mail-Adresse konnte nicht angefordert werden, da Ihr Passwort nicht korrekt ist." } },
    "errorEmailExistsTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "E-Mail-Adresse existiert bereits" } },
    "errorEmailExistsMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Die \xC4nderung der E-Mail-Adresse konnte nicht angefordert werden, da bereits ein Konto mit dieser E-Mail-Adresse existiert." } },
    "errorNotAllowedTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\xC4nderung der E-Mail-Adresse nicht zul\xE4ssig" } },
    "errorNotAllowedMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sie k\xF6nnen Ihre E-Mail-Adresse nicht \xE4ndern, da Ihr Konto die Single-Sign-On-Authentifizierung (SSO) verwendet." } }
  },
  "deleteAccountSettings": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Konto l\xF6schen" } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Sie k\xF6nnen die L\xF6schung Ihres Kontos planen, indem Sie Ihr aktuelles Passwort eingeben und auf die Schaltfl\xE4che klicken. Ihr Konto wird nach " }, { "t": 4, "k": "days" }, { "t": 3, "v": " Tagen endg\xFCltig gel\xF6scht. Wenn Sie sich in der Zwischenzeit erneut anmelden, wird die L\xF6schung Ihres Kontos r\xFCckg\xE4ngig gemacht." }] } },
    "workspaceNoticeDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wenn Ihr Konto endg\xFCltig gel\xF6scht wird, werden auch alle Arbeitsbereiche und zugeh\xF6rigen Daten gel\xF6scht, f\xFCr die Sie der letzte aktive Benutzer mit Admin-Rechten sind. Die unten aufgef\xFChrten Arbeitsbereiche werden gel\xF6scht, weil Sie der einzige Administrator sind. Um zu verhindern, dass sie gel\xF6scht werden, m\xFCssen Sie vor dem L\xF6schen Ihres Kontos einem anderen Benutzer Adminrechte erteilen." } },
    "orphanWorkspaces": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wird nach Ablauf der Schonfrist ebenfalls endg\xFCltig gel\xF6scht" } },
    "orphanWorkspaceMemberCount": { "t": 0, "b": { "t": 1, "c": [{ "t": 2, "i": [{ "t": 3 }], "s": "F\xFCr niemanden freigegeben" }, { "t": 2, "i": [{ "t": 3 }], "s": "f\xFCr einen Benutzer freigegeben" }, { "t": 2, "i": [{ "t": 3, "v": "freigegeben f\xFCr " }, { "t": 4, "k": "count" }, { "t": 3, "v": " Benutzer" }] }] } },
    "password": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Passwort" } },
    "passwordConfirm": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Passwort wiederholen" } },
    "repeatPasswordMatchError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dieses Feld muss mit dem ersten Passwortfeld \xFCbereinstimmen." } },
    "submitButton": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Konto l\xF6schen" } },
    "errorInvalidPasswordTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ung\xFCltiges Passwort" } },
    "errorInvalidPasswordMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ihr Konto konnte nicht gel\xF6scht werden, da Ihr Passwort ung\xFCltig ist." } },
    "errorUserIsLastAdminTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Letzter Administrator" } },
    "errorUserIsLastAdminMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ihr Konto konnte nicht gel\xF6scht werden, da Sie der letzte Administrator dieser Baserow-Instanz sind." } },
    "accountDeletedSuccessTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kontol\xF6schung geplant" } },
    "accountDeletedSuccessMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ihr Konto wurde zur L\xF6schung vorgesehen." } },
    "workspaceLoadingError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Die Arbeitsbereichpr\xFCfung ist fehlgeschlagen" } },
    "workspaceLoadingErrorDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Die \xDCberpr\xFCfung der zu l\xF6schenden Arbeitsbereiche ist fehlgeschlagen, bitte aktualisieren Sie die Seite." } }
  },
  "error": {
    "alreadyExistsTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Benutzer existiert bereits" } },
    "alreadyExistsMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Es existiert bereits ein Benutzer mit der angegebenen E-Mail-Adresse." } },
    "passwordRequired": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ein Passwort ist erforderlich." } },
    "invalidEmail": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Bitte geben Sie eine g\xFCltige E-Mail-Adresse ein." } },
    "disabledAccountTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Konto deaktiviert" } },
    "disabledAccountMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dieses Benutzerkonto wurde deaktiviert." } },
    "captchaVerificationFailedTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Captcha-Verifizierung fehlgeschlagen" } },
    "captchaVerificationFailedMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Die Captcha-Verifizierung ist fehlgeschlagen. Bitte versuchen Sie es erneut." } },
    "incorrectCredentialTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Inkorrekte Zugangsdaten" } },
    "incorrectCredentialMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Die angegebene E-Mail-Adresse oder das Passwort ist falsch." } },
    "inputRequired": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Eine Eingabe ist erforderlich." } },
    "disabledPasswordProviderTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Die Passwort-Authentifizierung ist deaktiviert." } },
    "disabledPasswordProviderMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Bitte verwenden Sie einen anderen Authentifizierungsanbieter." } }
  },
  "field": {
    "language": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sprache" } },
    "emailAddress": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "E-Mail-Adresse" } },
    "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ihr Name" } },
    "password": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Passwort" } },
    "passwordRepeat": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Passwort wiederholen" } }
  },
  "invitationTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Einladung" } },
  "invitationMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "invitedBy" }, { "t": 3, "v": " hat Sie eingeladen, " }, { "t": 4, "k": "workspace" }, { "t": 3, "v": " beizutreten." }] } },
  "workspaceForm": {
    "nameLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Name" } }
  },
  "leaveWorkspaceModal": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Verlassen " }, { "t": 4, "k": "workspace" }] } },
    "message": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Sind Sie sicher, dass Sie den Arbeitsbereich " }, { "t": 4, "k": "workspace" }, { "t": 3, "v": " verlassen wollen? Sie k\xF6nnen dann nicht mehr auf die zugeh\xF6rigen Anwendungen zugreifen. Wenn Sie wieder Zugang erhalten m\xF6chten, muss einer der Administratoren Sie erneut einladen. Wenn Sie den Arbeitsbereich verlassen, wird sie nicht gel\xF6scht. Alle anderen Mitglieder haben weiterhin Zugang zu ihr. Es ist nicht m\xF6glich, einen Arbeitsbereich zu verlassen, wenn Sie der letzte Administrator sind, da der Arbeitsbereich dann nicht mehr gepflegt wird." }] } },
    "leave": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Arbeitsbereich verlassen" } }
  },
  "exportWorkspaceModal": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Exportieren" } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ihre Daten werden als ZIP-Datei exportiert, die in andere Baserow-Instanzen importiert werden kann." } },
    "exportSettings": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Einstellungen exportieren" } },
    "export": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Daten exportieren" } },
    "reset": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Von vorne beginnen" } },
    "cancel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Abbrechen" } },
    "download": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Herunterladen" } },
    "exportingState": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Exportiere..." } },
    "exportingTableState": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Exportiere: " }, { "t": 4, "k": "table" }] } },
    "exportingCreateArchiveState": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Erstelle Archiv" } },
    "noExports": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "F\xFCr diesen Arbeitsbereich gibt es noch keine Exporte." } },
    "created": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "erstellt" } }
  },
  "exportWorkspaceForm": {
    "exportSettingsLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Einstellungen exportieren" } },
    "selectDataToExport": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zu exportierende Daten ausw\xE4hlen" } },
    "selectAll": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Alles ausw\xE4hlen" } },
    "deselectAll": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Alle abw\xE4hlen" } },
    "onlyStructureLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nur die Struktur exportieren" } },
    "onlyStructureDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wenn diese Option aktiviert ist, wird nur die Struktur der Anwendungen exportiert. Die Daten werden nicht enthalten sein." } }
  },
  "importWorkspaceModal": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Baserow-Daten importieren" } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sie k\xF6nnen bestehende Baserow-Daten importieren, indem Sie die .zip-Datei einer anderen Baserow-Instanz hochladen." } },
    "import": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Daten importieren" } },
    "upload": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Hochladen" } },
    "uploadAndImport": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Hochladen & Importieren" } },
    "cancel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Abbrechen" } },
    "done": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Abgeschlossen" } },
    "close": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Schlie\xDFen" } },
    "retry": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wiederholen" } },
    "uploading": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Hochladen..." } },
    "chooseFile": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Datei ausw\xE4hlen" } },
    "selectApplications": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zu importierende Daten ausw\xE4hlen" } },
    "deselectAll": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Alle abw\xE4hlen" } },
    "selectAll": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Alle ausw\xE4hlen" } },
    "databases": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Datenbanken" } },
    "applications": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Anwendungen" } },
    "successTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Baserow-Daten erfolgreich importiert" } },
    "successMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "count" }, { "t": 3, "v": " Anwendungen importiert" }] } },
    "signatureVerificationNote": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Es ist nicht m\xF6glich, eine ZIP-Datei aus einer nicht vertrauensw\xFCrdigen Quelle zu importieren." } },
    "invalidResourceTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ung\xFCltige Ressource" } },
    "invalidResourceMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Die bereitgestellte Datei ist kein g\xFCltiger Baserow-Export." } },
    "untrustedPublicKeyTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nicht vertrauensw\xFCrdige Signatur" } },
    "untrustedPublicKeyMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Die bereitgestellte Datei wurde mit einem nicht vertrauensw\xFCrdigen \xF6ffentlichen Schl\xFCssel signiert. Bitten Sie Ihren Administrator, den \xF6ffentlichen Schl\xFCssel zur Liste der vertrauensw\xFCrdigen Schl\xFCssel hinzuzuf\xFCgen oder die Signaturpr\xFCfung zu deaktivieren, um diese Datei importieren zu k\xF6nnen." } },
    "importingState": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Importiere..." } },
    "importingTableStructure": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Erstelle: " }, { "t": 4, "k": "table" }] } },
    "importingTableData": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Importiere Daten: " }, { "t": 4, "k": "table" }] } }
  },
  "importWorkspaceForm": {
    "selectApplicationsToImport": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zu importierende Anwendungen ausw\xE4hlen" } }
  },
  "dashboardWorkspace": {
    "createApplication": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Neu erstellen" } }
  },
  "dashboardVerifyEmail": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Bitte pr\xFCfen Sie Ihre Mailbox und klicken Sie auf den Link, um Ihre E-Mailadresse zu best\xE4tigen." } },
    "resendConfirmationEmail": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Best\xE4tigungs-E-Mail erneut versenden" } }
  },
  "resendEmailVerification": {
    "confirmationEmailSentTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Best\xE4tigungs-E-Mail versendet" } },
    "confirmationEmailSentDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Die Best\xE4tigungs-E-Mail wurde versendet." } }
  },
  "verifyEmailAddress": {
    "confirmation": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ihre E-Mailadresse wurde best\xE4tigt." } },
    "goToDashboard": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zum Dashboard" } },
    "invalidToken": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kein g\xFCltiger Best\xE4tigungs-Token." } },
    "disabledPasswordProvider": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Der Passwortauthentifizierungs-Provider wurde deaktiviert." } },
    "emailMismatchWarning": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Bitte beachten Sie, dass die best\xE4tigte E-Mailadresse nicht zu dem Konto geh\xF6rt, welches Sie gerade verwenden." } }
  },
  "emailNotVerified": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Best\xE4tigung der E-Mailadresse notwendig" } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Bitte \xFCberpr\xFCfen Sie Ihre Mailbox und klicken Sie auf den darin enthaltenen Best\xE4tigungslink. Nach der Verifizierung wird Ihr Konto aktiviert." } },
    "resend": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Best\xE4tigungs-E-Mail erneut versenden" } }
  },
  "workspaceInvitation": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Einladung" } },
    "message": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "by" }, { "t": 3, "v": " hat Sie eingeladen, dem " }, { "t": 4, "k": "workspace" }, { "t": 3, "v": " beizutreten." }] } },
    "reject": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ablehnen" } },
    "accept": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Akzeptieren" } }
  },
  "workspaceInviteForm": {
    "invitationFormTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Einladen per E-Mail" } },
    "errorInvalidEmail": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Bitte geben Sie eine g\xFCltige E-Mail Adresse ein." } },
    "additionalRoles": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zus\xE4tzliche Rollen" } }
  },
  "workspaceContext": {
    "renameWorkspace": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Arbeitsbereich umbenennen" } },
    "exportWorkspace": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Daten exportieren" } },
    "importWorkspace": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Daten importieren" } },
    "settings": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Einstellungen" } },
    "members": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mitglieder" } },
    "auditLog": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Audit-Log" } },
    "viewTrash": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Papierkorb ansehen" } },
    "leaveWorkspace": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Arbeitsbereich verlassen" } },
    "deleteWorkspace": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Arbeitsbereich l\xF6schen" } }
  },
  "workspaceSettingsModal": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Arbeitsbereich-Einstellungen" } }
  },
  "workspaceSettingType": {
    "generativeAI": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Generative KI" } }
  },
  "generativeAIModelType": {
    "openai": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "OpenAI" } },
    "openaiApiKeyLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "API-Schl\xFCssel" } },
    "openaiApiKeyDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Geben Sie einen OpenAI-API-Schl\xFCssel an, wenn Sie die Integration aktivieren m\xF6chten. [Anleitung zum Erhalt eines API-Schl\xFCssels](https://help.openai.com/en/articles/4936850-where-do-i-find-my-openai-api-key)." } },
    "openaiOrganization": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Organisation (optional)" } },
    "openaiModelsLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aktivierte Modelle" } },
    "openaiModelsDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Geben Sie eine durch Kommata getrennte Liste von [OpenAI-Modellen](https://platform.openai.com/docs/models/continuous-model-upgrades) an, die in Baserow verwendet werden k\xF6nnen. (z. B. `gpt-3.5-turbo,gpt-4`)" } },
    "openaiBaseUrl": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Basis-URL" } },
    "openaiBaseUrlDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Verwendet standardm\xE4\xDFig die Standard-OpenAI-Basis-URL, wenn leer. Kann optional auf https://eu.api.openai.com/v1, https://&#60;your-resource-name&#62;.openai.azure.com oder eine andere OpenAI-kompatible API ge\xE4ndert werden." } },
    "anthropic": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Anthropic" } },
    "anthropicApiKeyLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "API-Schl\xFCssel" } },
    "anthropicApiKeyDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Geben Sie einen Anthropic-API-Schl\xFCssel an, wenn Sie die Integration aktivieren m\xF6chten. [Anweisungen zum Erhalt eines API-Schl\xFCssels](https://docs.anthropic.com/en/api/getting-started)." } },
    "anthropicModelsLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aktivierte Modelle" } },
    "anthropicModelsDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Geben Sie eine durch Kommata getrennte Liste von [Anthropic-Modellen](https://docs.anthropic.com/en/docs/about-claude/models) an, die in Baserow verwendet werden k\xF6nnen. (z.B. `claude-3-5-sonnet-20241022,claude-3-opus-20240229`)" } },
    "mistral": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mistral" } },
    "mistralApiKeyLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "API-Schl\xFCssel" } },
    "mistralApiKeyDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Geben Sie einen Mistral-API-Schl\xFCssel an, wenn Sie die Integration aktivieren m\xF6chten. [Anleitung zum Erhalt eines API-Schl\xFCssels](https://docs.mistral.ai/getting-started/quickstart/)." } },
    "mistralModelsLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aktivierte Modelle" } },
    "mistralModelsDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Geben Sie eine durch Kommata getrennte Liste von [Mistral-Modellen](https://docs.mistral.ai/getting-started/models/models_overview/) an, die in Baserow verwendet werden k\xF6nnen. (z.B. `mistral-large-latest, mistral-small-latest`)" } },
    "ollama": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ollama" } },
    "ollamaHostLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Host" } },
    "ollamaHostDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Geben Sie den Hostnamen Ihres [Ollama](https://ollama.com/)-Servers an. Dieser l\xE4uft normalerweise lokal auf Ihrem eigenen Ger\xE4t." } },
    "ollamaModelsLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aktivierte Modelle" } },
    "ollamaModelsDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Geben Sie eine durch Kommata getrennte Liste von [bei Ollama installierten Modellen](https://ollama.com/library) an. Beachten Sie, dass das Modell heruntergeladen und installiert werden muss, bevor es verwendet werden kann. (z.B. `llama2,mistral`)" } },
    "openRouter": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "OpenRouter" } },
    "openRouterApiKeyLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "API-Schl\xFCssel" } },
    "openRouterApiKeyDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Geben Sie einen OpenRouter-API-Schl\xFCssel an, wenn Sie die Integration aktivieren m\xF6chten. [Einen API-Schl\xFCssel erhalten](https://openrouter.ai/settings/keys)." } },
    "openRouterOrganization": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Organisation (optional)" } },
    "openRouterModelsLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aktivierte Modelle" } },
    "openRouterModelsDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Geben Sie eine durch Kommata getrennte Liste von [OpenRouter-Modellen](https://openrouter.ai/models) an, die in Baserow verwendet werden k\xF6nnen. (z.B. `openai/gpt-4o,anthropic/claude-3-haiku`)" } }
  },
  "generativeAIWorkspaceSettings": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Generative-KI-Einstellungen" } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Diese Einstellungen k\xF6nnen verwendet werden, um optional die generative KI-Konfiguration auf Arbeitsbereichsebene festzulegen. Funktionen wie das KI-Feld k\xF6nnen deaktiviert werden, weil ihnen ein API-Schl\xFCssel f\xFCr eines der unterst\xFCtzten Modelle fehlt. Indem Sie die Einstellungen hier vornehmen, k\xF6nnen Sie diese Funktionen aktivieren. Wenn Sie einen Wert leer lassen, werden die globalen Instanzeinstellungen wiederhergestellt. Beachten Sie, dass diese Einstellungen im Arbeitsbereich gleicherma\xDFen f\xFCr alle gelten." } },
    "changedTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Einstellungen erfolgreich aktualisiert" } },
    "changedDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Die Einstellungen wurden aktualisiert und werden nun in diesem Arbeitsbereich verwendet." } },
    "submitButton": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Einstellungen aktualisieren" } },
    "openSettings": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Einstellungen \xF6ffnen" } },
    "hideSettings": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Einstellungen ausblenden" } }
  },
  "createWorkspaceModal": {
    "createNew": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Neuen Arbeitsbereich erstellen" } },
    "defaultName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Unbenannter Arbeitsbereich" } },
    "add": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Arbeitsbereich hinzuf\xFCgen" } },
    "permissionDeniedTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Erlaubnis verweigert" } },
    "permissionDeniedBody": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sie haben nicht die erforderliche Berechtigung, um einen neuen Arbeitsbereich zu erstellen." } }
  },
  "templateCategories": {
    "search": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Vorlagen suchen" } },
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Vorlagen" } }
  },
  "templateHeader": {
    "use": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Verwenden Sie diese Vorlage" } }
  },
  "trashSidebar": {
    "unnamedWorkspace": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Unbenannter Arbeitsbereich " }, { "t": 4, "k": "id" }] } },
    "workspaces": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Arbeitsbereiche" } }
  },
  "trashContents": {
    "message": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Gel\xF6schte Objekte aus der Vergangenheit wiederherstellen " }, { "t": 4, "k": "duration" }] } },
    "empty": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "In den letzten drei Tagen ist nichts gel\xF6scht worden." } },
    "emptyButtonTrashed": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "type" }, { "t": 3, "v": " dauerhaft l\xF6schen" }] } },
    "emptyButtonNotTrashed": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Den Papierkorb dieses " }, { "t": 4, "k": "type" }, { "t": 3, "v": "'s leeren" }] } },
    "unnamed": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Unbenannt " }, { "t": 4, "k": "type" }, { "t": 3, "v": " " }, { "t": 4, "k": "id" }] } }
  },
  "trashEmptyModal": {
    "titleIsTrashed": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Sind Sie sicher, dass Sie " }, { "t": 4, "k": "name" }, { "t": 3, "v": " dauerhaft l\xF6schen m\xF6chten?" }] } },
    "titleIsNotTrashed": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Sind Sie sicher, dass Sie den Papierkorb von " }, { "t": 4, "k": "name" }, { "t": 3, "v": " leeren wollen?" }] } },
    "messageIsTrashed": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dadurch werden sie und ihr gesamter Inhalt endg\xFCltig gel\xF6scht. Danach k\xF6nnen sie nicht mehr wiederhergestellt werden." } },
    "messageIsNotTrashed": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dadurch werden die aufgelisteten Elemente dauerhaft gel\xF6scht. Danach k\xF6nnen sie nicht mehr wiederhergestellt werden." } },
    "buttonIsTrashed": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dauerhaft l\xF6schen" } },
    "buttonIsNotTrashed": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Leeren" } }
  },
  "trashEntry": {
    "deletedUser": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ein gel\xF6schter Benutzer" } },
    "fromParent": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "von " }, { "t": 4, "k": "parent" }] } },
    "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "user" }, { "t": 3, "v": " gel\xF6scht " }, { "t": 4, "k": "type" }, { "t": 3, "v": " " }, { "t": 4, "k": "title" }, { "t": 3, "v": " " }, { "t": 4, "k": "parent" }] } },
    "restore": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wiederherstellen" } },
    "andMore": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "... und " }, { "t": 4, "k": "count" }, { "t": 3, "v": " mehr" }] } },
    "unnamed": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Unbenannt " }, { "t": 4, "k": "type" }, { "t": 3, "v": " " }, { "t": 4, "k": "id" }] } }
  },
  "trashModal": {
    "emptyTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Keine Arbeitsbereiche gefunden" } },
    "emptyMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sie sind kein Mitglied eines Arbeitsbereichs. Anwendungen wie Datenbanken geh\xF6ren zu einem Arbeitsbereichs. Um sie zu erstellen, m\xFCssen Sie also einen Arbeitsbereich erstellen." } },
    "emptyMessageWithoutCreatePermission": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sie sind kein Mitglied eines Arbeitsbereichs. Anwendungen wie Datenbanken geh\xF6ren zu einem Arbeitsbereichs. Um sie zu erstellen, m\xFCssen Sie also zuerst von einem Administrator in einen Arbeitsbereichs eingeladen werden." } }
  },
  "uploadViaURLUserFileUpload": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Hochladen von einer URL" } },
    "urlLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "URL" } },
    "urlError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Eine g\xFCltige URL ist erforderlich." } }
  },
  "userFilesModal": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Hochladen von" } }
  },
  "uploadFileUserFileUpload": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Hochladen von meinem Ger\xE4t" } },
    "drop": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Hier ablegen" } },
    "clickOrDrop": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Klicken Sie hier oder legen Sie Ihre Dateien ab" } },
    "retry": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Erneut versuchen" } }
  },
  "uploadFileDropzone": {
    "drop": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Hier ablegen" } },
    "clickOrDrop": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Klicken Sie hier oder legen Sie Ihre Dateien ab" } },
    "errorTooManyFilesTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zu viele Dateien" } },
    "errorTooManyFilesMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sie k\xF6nnen nur eine einzelne Datei hochladen" } },
    "errorWrongFileTypeTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Falscher Dateityp" } },
    "errorWrongFileTypeMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Sie k\xF6nnen keine Datei vom Typ " }, { "t": 4, "k": "type" }, { "t": 3, "v": " hochladen" }] } }
  },
  "createApplicationContext": {
    "fromTemplate": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Von Vorlage" } },
    "fromTemplateDesc": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Starten Sie z\xFCgig mit einer unserer empfohlenen Vorlagen" } },
    "table": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tabelle" } },
    "tableDesc": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Erstellen Sie einen neuen Ort, um die Daten in Ihrer Datenbank zu verwalten." } },
    "importWorkspace": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Daten importieren" } },
    "importWorkspaceDesc": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Bestehende Daten aus einer Baserow-Instanz hinzuf\xFCgen." } }
  },
  "applicationForm": {
    "nameLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Name" } },
    "namePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Geben Sie den Namen ein..." } }
  },
  "connectingToast": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wiederverbindung" } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Echtzeit-Aktualisierungen werden wiederhergestellt." } }
  },
  "failedConnectingToast": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Fehlgeschlagen" } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Echtzeit-Aktualisierungen konnten nicht wiederhergestellt werden. Bitte aktualisieren Sie die Seite, um fortzufahren." } },
    "action": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Seite aktualisieren" } }
  },
  "authorizationErrorToast": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Autorisierungsfehler" } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Anscheinend sind Sie nicht berechtigt, diese Ressource anzuzeigen." } },
    "action": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Seite aktualisieren" } }
  },
  "userSessionExpiredToast": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sitzung abgelaufen" } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sie wurden abgemeldet, weil Ihr Authentifizierungstoken abgelaufen ist. Bitte loggen Sie sich erneut ein." } }
  },
  "userPasswordChangedToast": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Passwort ge\xE4ndert" } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ihr Passwort wurde ge\xE4ndert. Bitte melden Sie sich erneut an." } }
  },
  "restoreToast": {
    "restore": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "type" }, { "t": 3, "v": " (gel\xF6scht) wiederherstellen" }] } }
  },
  "copyingToast": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kopieren..." } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aufbereitung Ihrer Daten" } }
  },
  "PastingToast": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Einf\xFCgen..." } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aufbereitung Ihrer Daten" } }
  },
  "clearingToast": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Leeren..." } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Vorbereitung Ihrer Daten" } }
  },
  "undoRedoToast": {
    "undoingTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "R\xFCckg\xE4ngig machen..." } },
    "undoingText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aktion r\xFCckg\xE4ngig machen" } },
    "undoneTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "R\xFCckg\xE4ngig gemacht" } },
    "undoneText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aktion ist r\xFCckg\xE4ngig gemacht" } },
    "noMoreUndo": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Keine weiteren Aktionen zum R\xFCckg\xE4ngig machen" } },
    "skippingUndoDueToError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "R\xFCckg\xE4ngig machen hat aufgrund eines unbekannten Fehlers nicht funktioniert, \xFCberspringe es daher." } },
    "redoingTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wiederherstellen..." } },
    "redoingText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ihre Aktion wird wiederhergestellt" } },
    "redoneTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wiederhergestellt" } },
    "redoneText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aktion ist wiederhergestellt" } },
    "noMoreRedo": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Keine weiteren Aktionen zum erneuten Ausf\xFChren" } },
    "skippingRedoDueToError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wieder ausf\xFChren hat aufgrund eines unbekannten Fehler nicht funktioniert, \xFCberspringen." } },
    "failed": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Fehlgeschlagen" } }
  },
  "permissionsUpdatedToast": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Berechtigungen aktualisiert" } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dies kann sich darauf auswirken, worauf Sie Zugriff haben, bitte laden Sie die Seite neu." } },
    "action": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Neu laden" } }
  },
  "errorLayout": {
    "notFound": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Die Seite, die Sie suchen, wurde nicht gefunden. Dies k\xF6nnte daran liegen, dass die URL nicht korrekt ist oder dass Sie keine Berechtigung haben, diese Seite anzuzeigen." } },
    "error": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Beim Laden der Seite ist ein Fehler aufgetreten. Unsere Entwickler wurden \xFCber das Problem informiert. Bitte versuchen Sie, die Seite zu aktualisieren oder zum Dashboard zur\xFCckzukehren." } },
    "backDashboard": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zur\xFCck zum Dashboard" } },
    "backLogin": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zur\xFCck zur Anmeldung" } },
    "wrong": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Etwas ist fehlgeschlagen" } },
    "refresh": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Seite neu laden" } }
  },
  "dashboard": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dashboard" } },
    "alertTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wir ben\xF6tigen Ihre Hilfe!" } },
    "alertText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Indem Sie Baserow teilen, helfen Sie uns, das Produkt weiter zu verbessern und f\xFCr Ihre Zwecke n\xFCtzlicher zu machen." } },
    "tweetContent": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }, { "t": 9 }, { "t": 3 }], "s": "Entdecken Sie @baserow, ein Open-Source-Datenbank-Tool ohne Code und eine Alternative zu Airtable!" } },
    "redditTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "'Baserow - Eine Open-Source No-Code-Datenbank" } },
    "becomeGithubSponsor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Werden Sie ein GitHub-Sponsor" } },
    "starOnGitHub": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Geben Sie uns einen Stern auf GitHub" } },
    "shareOnTwitter": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tweet \xFCber Baserow" } },
    "shareOnReddit": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Teilen auf Reddit" } },
    "shareOnFacebook": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Teilen auf Facebook" } },
    "shareOnLinkedIn": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Teilen auf LinkedIn" } },
    "suggestedTemplates": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Vorgeschlagene Vorlagen" } },
    "resources": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ressourcen" } },
    "knowledgeBase": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wissensdatenbank" } },
    "knowledgeBaseMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Finden Sie Antworten auf all Ihre Fragen" } },
    "tutorials": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tutorials" } },
    "tutorialsMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Erkunden Sie das Potential von Baserow" } },
    "apiDocumentation": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "API-Dokumentation" } },
    "apiDocumentationMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Erfahren Sie mehr \xFCber unseren Quelltext" } },
    "emptyWorkspace": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dieser Arbeitsbereich ist leer" } },
    "emptyWorkspaceMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Starten Sie, indem Sie eine neue Datenbank oder Anwendung erstellen." } },
    "addNew": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Neu hinzuf\xFCgen..." } },
    "noWorkspace": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kein Arbeitsbereich" } },
    "noWorkspaceDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Legen Sie los, indem Sie einen neuen Arbeitsbereich anlegen" } }
  },
  "dashboardApplication": {
    "createdAt": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "erstellt" } }
  },
  "templateCard": {
    "viewMore": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mehr anzeigen" } }
  },
  "login": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Willkommen zur\xFCck" } },
    "emailPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Geben Sie Ihre E-Mail Adresse ein.." } },
    "passwordPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Geben Sie Ihr Passwort ein.." } },
    "forgotPassword": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Vergessen?" } },
    "signUpText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Neu bei Baserow?" } },
    "signUp": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Registrieren" } },
    "displayPasswordLogin": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Anmelden mit E-Mail und Passwort" } },
    "redirecting": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Weiterleiten an Authentifizierungsanbieter..." } }
  },
  "resetPassword": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Passwort zur\xFCcksetzen" } },
    "newPassword": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Neues Passwort" } },
    "repeatNewPassword": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wiederholung des neuen Passworts" } },
    "repeatPasswordPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wiederholen Sie Ihr neues Passwort" } },
    "submit": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Passwort \xE4ndern" } },
    "changed": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Passwort ge\xE4ndert" } },
    "message": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sie k\xF6nnen sich jetzt mit Ihrem neuen Passwort bei Baserow anmelden." } },
    "errorInvalidLinkTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ung\xFCltiger Link" } },
    "errorInvalidLinkMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Das Passwort konnte nicht zur\xFCckgesetzt werden, da der Link ung\xFCltig ist." } },
    "errorLinkExpiredTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Link abgelaufen" } },
    "errorLinkExpiredMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Der Link zum Zur\xFCcksetzen des Passworts ist abgelaufen. Bitte fordern Sie ein neues an." } },
    "errorLinkAlreadyUsedTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Link bereits verwendet" } },
    "errorLinkAlreadyUsedMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dieser Link zum Zur\xFCcksetzen des Passworts wurde bereits verwendet. Bitte fordern Sie einen neuen an." } },
    "disabled": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Passwort-Zur\xFCcksetzung ist deaktiviert" } },
    "disabledMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Es ist nicht m\xF6glich, ein Passwort zur\xFCckzusetzen, da es deaktiviert wurde." } }
  },
  "changeEmail": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\xC4nderung der E-Mail-Adresse best\xE4tigen" } },
    "submit": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\xC4nderung der E-Mail-Adresse best\xE4tigen" } },
    "changed": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "E-Mail-Adresse ge\xE4ndert" } },
    "message": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ihre E-Mail-Adresse wurde erfolgreich ge\xE4ndert. Sie k\xF6nnen sich jetzt mit Ihrer neuen E-Mail-Adresse bei Baserow anmelden." } },
    "errorInvalidLinkTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ung\xFCltiger Link" } },
    "errorInvalidLinkMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Die E-Mail-Adresse konnte nicht ge\xE4ndert werden, da der Link ung\xFCltig ist." } },
    "errorLinkExpiredTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Link abgelaufen" } },
    "errorLinkExpiredMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Der Link zur \xC4nderung der E-Mail-Adresse ist abgelaufen. Bitte fordern Sie einen neuen \xFCber Ihre Kontoeinstellungen an." } },
    "errorEmailExistsTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "E-Mail-Adresse existiert bereits" } },
    "errorEmailExistsMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Die E-Mail-Adresse konnte nicht ge\xE4ndert werden, da bereits ein Konto mit dieser E-Mail-Adresse existiert." } },
    "errorEmailAlreadyChangedTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "E-Mail-Adresse bereits ge\xE4ndert" } },
    "errorEmailAlreadyChangedMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Die E-Mail-Adresse wurde bereits in die angeforderte Adresse ge\xE4ndert." } }
  },
  "signup": {
    "headTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Konto erstellen" } },
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Registrieren Sie sich" } },
    "disabled": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Registrierung ist deaktiviert" } },
    "disabledMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Es ist nicht m\xF6glich, ein Konto zu erstellen, da es deaktiviert wurde." } },
    "requireFirstUser": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Willkommen in Baserow!" } },
    "requireFirstUserMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Bitte f\xFCllen Sie das untenstehende Formular aus, um den Admin-Benutzer zu erstellen." } },
    "emailPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Geben Sie Ihre E-Mail Adresse ein.." } },
    "namePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Geben Sie Ihren Namen ein.." } },
    "passwordPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Geben Sie Ihr Passwort ein.." } },
    "passwordRepeatPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Best\xE4tigen Sie Ihr Passwort.." } },
    "loginText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sie haben bereits ein Konto?" } },
    "login": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Einloggen" } }
  },
  "forgotPassword": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Passwort vergessen" } },
    "message": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Geben Sie Ihre E-Mail-Adresse ein, damit wir Ihnen einen Link zum Zur\xFCcksetzen Ihres Passworts zusenden k\xF6nnen." } },
    "submit": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Link senden" } },
    "confirmationTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Rufen Sie Ihre E-Mails ab" } },
    "confirmation": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Wir haben eine E-Mail an " }, { "t": 4, "k": "email" }, { "t": 3, "v": " gesendet, die einen Link zum Zur\xFCcksetzen Ihres Baserow-Passworts enth\xE4lt." }] } },
    "disabled": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Passwort-Zur\xFCcksetzung ist deaktiviert" } },
    "disabledMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Es ist nicht m\xF6glich, ein Passwort zur\xFCckzusetzen, da es deaktiviert wurde." } },
    "loginText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sie haben bereits ein Konto und ein Passwort?" } },
    "goBack": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zur\xFCck" } }
  },
  "settings": {
    "settingsTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Administrator-Einstellungen" } },
    "baserowInstanceId": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Instanz-ID" } },
    "instanceIdDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Die Instanz-ID ist die eindeutige Kennung Ihrer Baserow-Kopie." } },
    "baserowVersion": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Baserow-Version" } },
    "baserowVersionDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Die Versionsnummer dieser Instanz." } },
    "accountRestrictions": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Konto-Einschr\xE4nkungen" } },
    "settingAllowResetPasswordName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Erlaube das Zur\xFCcksetzen des Passworts" } },
    "settingAllowResetPasswordDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Standardm\xE4\xDFig k\xF6nnen Benutzer einen Link zum Zur\xFCcksetzen des Passworts anfordern." } },
    "settingAllowResetPasswordWarning": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Bitte beachten Sie, dass sie sich selbst aus dem System aussperren k\xF6nnten und der Zugang nicht mehr hergestellt werden kann, falls sie ihr Passwort vergessen." } },
    "settingAllowNewAccountsName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Erstellen neuer Konten zulassen" } },
    "settingAllowNewAccountsDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Standardm\xE4\xDFig kann sich jeder Benutzer, der Ihre Baserow-Domain besucht, f\xFCr ein neues Konto anmelden." } },
    "settingAllowSignupsViaWorkspaceInvitationsName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Erlaube Registrierungen durch Arbeitsbereicheinladungen" } },
    "settingAllowSignupsViaWorkspaceInvitationDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Auch wenn die Erstellung von neuen Konten deaktiviert ist k\xF6nnen Nutzer:innen durch Setzen dieser Option Nutzer:innen ein Konto erstellen." } },
    "settingAllowNonStaffCreateWorkspaceOperation": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Jedem die M\xF6glichkeit geben, neue Arbeitsbereiche zu erstellen" } },
    "settingAllowNonStaffCreateWorkspaceOperationDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Standardm\xE4\xDFig kann jeder neue Arbeitsbereiche erstellen. Deaktivieren Sie diese Option, damit nur Mitglieder neue Arbeitsbereiche erstellen k\xF6nnen." } },
    "settingAllowNonStaffCreateWorkspaceOperationWarning": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "F\xFCr neue Benutzer wird automatisch ein Arbeitsbereich erstellt, in der sie Administrator sind." } },
    "settingTrackWorkspaceUsage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Arbeitsbereichnutzung verfolgen" } },
    "settingTrackWorkspaceUsageDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aktiviert einen n\xE4chtlichen Job, der die Zeilen- und Dateinutzung pro Arbeitsbereich z\xE4hlt und auf der Verwaltungsseite f\xFCr Premium-Arbeitsbereiche angezeigt wird." } },
    "userSettings": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Benutzer" } },
    "settingUserDeletionGraceDelay": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Gnadenfrist l\xF6schen" } },
    "settingUserDeletionGraceDelayDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dies ist die Anzahl der Tage ohne Anmeldung, nach denen ein zur L\xF6schung vorgesehenes Konto endg\xFCltig gel\xF6scht wird." } },
    "invalidAccountDeletionGraceDelay": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dieser Wert ist erforderlich und muss eine positive ganze Zahl kleiner als 32000 sein" } },
    "enabled": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "aktiviert" } },
    "maintenance": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wartung" } },
    "emailVerification": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "E-Mail-Verifizierung" } },
    "emailVerificationDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Gibt an, ob E-Mailadressen best\xE4tigt werden m\xFCssen." } },
    "emailVerificationNoVerification": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Keine Verifizierung" } },
    "emailVerificationRecommended": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Empfohlen" } },
    "emailVerificationEnforced": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Erzwungen" } },
    "settingsVerifyImportSignature": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Import-Signatur pr\xFCfen" } },
    "settingsVerifyImportSignatureDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wenn diese Funktion aktiviert ist, wird die Signatur der importierten Daten \xFCberpr\xFCft um sicherzustellen, dass die Daten nicht manipuliert wurden." } }
  },
  "formSidebar": {
    "fields": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Felder" } },
    "rowEditableBy": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zeilen \xFCber Felder aktualisieren" } },
    "rowEditableByDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Die Zeilen in dieser Tabelle k\xF6nnen \xFCber dieses Formular \xFCber die folgenden Felder zur Zeilenbearbeitung aktualisiert werden:" } },
    "actions": {
      "addAll": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Alle hinzuf\xFCgen" } },
      "removeAll": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Alle entfernen" } },
      "addField": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Feld hinzuf\xFCgen" } }
    },
    "notifyUserOnSubmit": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Benachrichtigung nach dem Absenden erhalten" } },
    "fieldsDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Alle Felder sind im Formular." } },
    "prefillOrHideInfoLink": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dynamisches Vorf\xFCllen oder Ausblenden" } },
    "modal": {
      "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Felder dynamisch ausf\xFCllen oder ausblenden" } },
      "descriptionPartOne": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Formular k\xF6nnen vorausgef\xFCllt werden, um dem Benutzer zu helfen das Formular schneller auszuf\xFCllen." } },
      "descriptionPartTwo": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Alle Felder die im Formular verf\xFCgbar sind, k\xF6nnen vorausgef\xFCllt werden." } },
      "howToHide": {
        "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wie man ein Feld ausblendet" } },
        "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wenn Sie ein Feld dynamisch ausblenden m\xF6chten, k\xF6nnen Sie dies mit Abfrageparametern tun, die Sie der \xF6ffentlichen von-URL hinzuf\xFCgen. Diesen Abfrageparametern wird das Pr\xE4fix `hide_` vorangestellt, um Kollisionen mit potenziellen k\xFCnftigen Abfrageparametern zu vermeiden." } }
      },
      "howToPrefill": {
        "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wie man ein Formular vorausf\xFCllt" } },
        "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wenn Sie ein Formular vorausf\xFCllen wollen, k\xF6nnen sie das mit einem Query Paremeter in der URL des \xD6ffentlichen Formulares. Diese Query Parameter haben einen prefix von 'prefill' um potentielle Kollisionen mit anderen Query Parametern zu vermeiden." } }
      },
      "format": {
        "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Format" } },
        "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Das Format der Query Parameter is das Folgende:" } },
        "codeSnippet": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "?prefill_&#60;field_name&#62;=&#60;value&#62;" } }
      },
      "example": {
        "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Beispiel" } },
        "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "In dem folgenden Beispiel wollen wir ein Feld mit dem Namen `Name` mit dem Wert `Mike` vorausf\xFCllen" } },
        "codeSnippet": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "?prefill_Name=Mike" } }
      },
      "spaces": {
        "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Leerzeichen" } },
        "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Leerzeichen in Feldern werden mit einem '+' ersetzt, um Probleme mit den Query Parametern zu vermeiden." } },
        "codeSnippet": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "?prefill_my+field=Mike" } }
      },
      "multipleValues": {
        "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mehrere Werte" } },
        "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wenn Sie mehrere Werte ben\xF6tigen, k\xF6nnen Sie diese mit einem Komma getrennt angeben." } },
        "codeSnippet": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "?prefill_multi+select=Mike,John" } }
      },
      "specialFieldTypes": {
        "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Besondere Felder" } },
        "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Allgemein ist der vorgef\xFCllte Wert der selbe wie der Wert des Feldes, allerdings gibt es Ausnahmen wo der Wert erst noch konvertiert werden muss." } },
        "ratingField": {
          "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Bewertungsfeld" } },
          "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ein Bewertungsfeld akzeptiert eine Nummer welche bestimmt wie viele Sterne ausgef\xFCllt werden sollen." } },
          "codeSnippet": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "?prefill_rating=3" } }
        },
        "linkRowField": {
          "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zeilenlinkfeld" } },
          "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ein Zeilenlinkfeld kann jeden Wert akzeptieren welcher im Dropdown zu sehen ist." } },
          "codeSnippet": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "?prefill_link+row=Mike" } }
        },
        "selectField": {
          "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Einzel/Mehrfachauswahlfeld" } },
          "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ein Einzelauswahlfeld akzeptiert jeden Wert der im Dropdown sichtbar ist. Das selbe gilt f\xFCr das Mehrfachauswahlfeld, allerdings kann dieses auch mehrere Werte akzeptieren." } },
          "codeSnippet": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "?prefill_single+select=Mike" } }
        },
        "dateField": {
          "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Datumsfeld" } },
          "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ein Datumsfeld kann ein Datum in den folgenden Formaten akzeptieren und wir das Datenformat des Feldes benutzen um den Wert richtig darzustellen." } },
          "codeSnippet": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\n// Standards\nISO_8601\n\n// Generelle Formate\n'YYYY-MM-DD',\n'YYYY-MM-DD hh:mm A',\n'YYYY-MM-DD HH:mm',\n\n// EU\n'DD/MM/YYYY', \n'DD/MM/YYYY hh:mm A', \n'DD/MM/YYYY HH:mm'\n\n// US\n'MM/DD/YYYY', \n'MM/DD/YYYY hh:mm A', \n'MM/DD/YYYY HH:mm'" } }
        }
      }
    }
  },
  "job": {
    "statePending": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Warten auf den Start..." } },
    "stateStarted": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Gestartet..." } },
    "stateFinished": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Abgeschlossen" } },
    "stateCanceled": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Abgebrochen" } },
    "stateFailed": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Gescheitert" } },
    "errorJobCannotBeCancelledTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Abbrechen nicht m\xF6glich" } },
    "errorJobCannotBeCancelledDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Es ist nicht m\xF6glich, den Auftrag abzubrechen, da er bereits abgeschlossen ist.\nBitte l\xF6schen Sie den ersten Snapshot in der untenstehenden Liste, um ihn zu entfernen." } },
    "errorJobAlreadyRunningTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wird bereits ausgef\xFChrt" } },
    "errorJobAlreadyRunningDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Es l\xE4uft bereits ein anderer Importauftrag. Sie m\xFCssen warten, bis dieser beendet ist, bevor Sie einen weiteren Auftrag starten." } }
  },
  "datetime": {
    "secondsAgo": { "t": 0, "b": { "t": 1, "c": [{ "t": 2, "i": [{ "t": 3 }], "s": "Gerade eben" }, { "t": 2, "i": [{ "t": 3 }], "s": "vor 1 Sekunde" }, { "t": 2, "i": [{ "t": 3, "v": "vor " }, { "t": 4, "k": "n" }, { "t": 3, "v": " Sekunden" }] }] } },
    "minutesAgo": { "t": 0, "b": { "t": 1, "c": [{ "t": 2, "i": [{ "t": 3 }], "s": "vor 0 Minuten" }, { "t": 2, "i": [{ "t": 3 }], "s": "vor 1 Minute" }, { "t": 2, "i": [{ "t": 3, "v": "vor " }, { "t": 4, "k": "n" }, { "t": 3, "v": " Minuten" }] }] } },
    "hoursAgo": { "t": 0, "b": { "t": 1, "c": [{ "t": 2, "i": [{ "t": 3 }], "s": "vor 0 Stunden" }, { "t": 2, "i": [{ "t": 3 }], "s": "vor 1 Stunde" }, { "t": 2, "i": [{ "t": 3, "v": "vor " }, { "t": 4, "k": "n" }, { "t": 3, "v": " Stunden" }] }] } },
    "daysAgo": { "t": 0, "b": { "t": 1, "c": [{ "t": 2, "i": [{ "t": 3 }], "s": "vor 0 Tagen" }, { "t": 2, "i": [{ "t": 3 }], "s": "vor 1 Tag" }, { "t": 2, "i": [{ "t": 3, "v": "vor " }, { "t": 4, "k": "n" }, { "t": 3, "v": " Tagen" }] }] } },
    "monthsAgo": { "t": 0, "b": { "t": 1, "c": [{ "t": 2, "i": [{ "t": 3 }], "s": "vor 0 Monaten" }, { "t": 2, "i": [{ "t": 3 }], "s": "vor 1 Monat" }, { "t": 2, "i": [{ "t": 3, "v": "vor " }, { "t": 4, "k": "n" }, { "t": 3, "v": " Monaten" }] }] } },
    "yearsAgo": { "t": 0, "b": { "t": 1, "c": [{ "t": 2, "i": [{ "t": 3 }], "s": "vor 0 Jahren" }, { "t": 2, "i": [{ "t": 3 }], "s": "vor 1 Jahr" }, { "t": 2, "i": [{ "t": 3, "v": "vor " }, { "t": 4, "k": "n" }, { "t": 3, "v": " Jahren" }] }] } },
    "lessThanMinuteAgo": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "vor weniger als einer Minute" } },
    "justNow": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "gerade eben" } }
  },
  "crudTableSearch": {
    "search": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Suchen" } }
  },
  "membersSettings": {
    "membersTabTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mitglieder" } },
    "invitesTabTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Einladungen" } },
    "membersTable": {
      "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "userAmount" }, { "t": 3, "v": " Mitglieder in " }, { "t": 4, "k": "workspaceName" }] } },
      "inviteMember": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mitglied einladen" } },
      "columns": {
        "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Name" } },
        "email": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "E-Mail" } },
        "role": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Standard-Rolle" } },
        "highestRole": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "H\xF6chste Rolle" } },
        "highestRoleHelpText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Die h\xF6chste Rolle, die diesem Benutzer direkt oder von einem Team f\xFCr etwas in diesem Arbeitsbereich zugewiesen wurde" } },
        "highestRoleInstanceHelpText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Die h\xF6chste Rolle, die dieser Benutzer in der Instanz hat" } },
        "teams": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Teams" } },
        "2fa": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "2FA" } }
      },
      "actions": {
        "copyEmail": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "E-Mail kopieren" } },
        "remove": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aus dem Arbeitsbereich entfernen" } }
      }
    },
    "invitesTable": {
      "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "invitesAmount" }, { "t": 3, "v": " Ausstehende Einladungen in " }, { "t": 4, "k": "workspaceName" }] } },
      "columns": {
        "email": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "E-Mail" } },
        "role": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Standardrolle" } }
      },
      "actions": {
        "copyEmail": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "E-Mail kopieren" } },
        "remove": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Einladung abbrechen" } }
      }
    },
    "membersInviteModal": {
      "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Arbeitsbereichmitglieder einladen" } },
      "submit": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Einladung senden" } },
      "helpIconText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Die ausgew\xE4hlte Rolle wird die Standardrolle des Benutzers in diesem Arbeitsbereich." } },
      "errors": {
        "userAlreadyInWorkspace": {
          "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Der Benutzer ist bereits Mitglied des Arbeitsbereichs." } },
          "text": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Es ist nicht m\xF6glich, eine Einladung zu senden, wenn der Benutzer bereits Mitglied des Arbeitsbereich ist." } }
        }
      }
    }
  },
  "memberSelectionList": {
    "searchPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Finden..." } },
    "selectedAmountLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "count" }, { "t": 3, "v": " ausgew\xE4hlt" }] } }
  },
  "memberAssignmentModalFooter": {
    "invite": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "count" }, { "t": 3, "v": " einladen" }] } },
    "deselectAll": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Alle abw\xE4hlen" } },
    "selectAll": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Alle ausw\xE4hlen" } }
  },
  "removeFromWorkspaceModal": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Entfernen aus Arbeitsbereich best\xE4tigen" } },
    "confirmation": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Sind Sie sicher, dass Sie " }, { "t": 4, "k": "name" }, { "t": 3, "v": " aus " }, { "t": 4, "k": "workspaceName" }, { "t": 3, "v": " entfernen m\xF6chten? Diese Aktion kann nicht r\xFCckg\xE4ngig gemacht werden." }] } },
    "remove": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Entfernen" } }
  },
  "editRoleContext": {
    "billableRolesLink": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dokumentation zu abrechenbaren Rollen" } },
    "additionalRoles": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zus\xE4tzliche Rollen" } }
  },
  "highestPaidRoleField": {
    "billable": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Verrechenbar" } }
  },
  "integrationCreateEditModal": {
    "createTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Neue Integration" } },
    "editTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Integration bearbeiten" } },
    "warningTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Warnung" } }
  },
  "integrationEditForm": {
    "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Name" } },
    "namePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Geben Sie den Namen der Integration ein..." } }
  },
  "integrationDropdown": {
    "addIntegration": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Neue Integration hinzuf\xFCgen" } },
    "noIntegrations": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Keine Integrationen gefunden." } },
    "selectTypeFirst": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "W\xE4hlen Sie zuerst den Typ aus" } },
    "integrationPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "W\xE4hlen Sie eine Integration aus" } }
  },
  "dropdown": {
    "empty": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Keine Eintr\xE4ge verf\xFCgbar" } }
  },
  "richTextEditorMentionsList": {
    "notFound": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Keine Benutzer gefunden" } }
  },
  "workspaceInvitationAcceptedNotification": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "sender" }, { "t": 3, "v": " hat Ihre Einladung angenommen, " }, { "t": 4, "k": "workspaceName" }, { "t": 3, "v": " beizutreten" }] } },
    "deletedUser": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ein gel\xF6schter Benutzer" } }
  },
  "workspaceInvitationRejectedNotification": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "sender" }, { "t": 3, "v": " hat Ihre Einladung zur Teilnahme an " }, { "t": 4, "k": "workspaceName" }, { "t": 3, "v": " abgelehnt" }] } },
    "deletedUser": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ein gel\xF6schter Benutzer" } }
  },
  "workspaceInvitationCreatedNotification": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "sender" }, { "t": 3, "v": " hat Sie eingeladen, " }, { "t": 4, "k": "workspaceName" }, { "t": 3, "v": " beizutreten" }] } },
    "deletedUser": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ein gel\xF6schter Benutzer" } }
  },
  "versionUpgradeNotification": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "version" }, { "t": 3, "v": " ist da! Sehen Sie sich an, was es Neues gibt." }] } }
  },
  "emailNotifications": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "E-Mailbenachrichtigungen" } },
    "label": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Erw\xE4hnungen, Kommentare und andere Benachrichtigungen" } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Stellen Sie die H\xE4ufigkeit ein, mit der E-Mails an Ihren Posteingang gesendet werden." } },
    "instant": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sofort" } },
    "daily": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "T\xE4glich" } },
    "weekly": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "W\xF6chentlich" } },
    "never": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nie" } },
    "submitButton": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "H\xE4ufigkeit \xE4ndern" } }
  },
  "formulaInputField": {
    "errorInvalidFormula": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Die Formel ist ung\xFCltig." } },
    "advancedFormulaMode": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Erweiterter Formelmodus" } },
    "invalidFormulaTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ung\xFCltige Formel" } },
    "invalidSyntax": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Keine g\xFCltige Expertenformel, bitte \xFCberpr\xFCfen Sie die Syntax." } }
  },
  "formulaInputErrorContext": {
    "viewFullError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Vollst\xE4ndigen Fehler anzeigen" } }
  },
  "formulaInputExplorerContext": {
    "variables": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Variablen" } },
    "functions": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Funktionen" } },
    "operators": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Operatoren" } },
    "search": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Suchen" } },
    "useRegularInputModalTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Regul\xE4re Eingabe f\xFCr dieses Feld verwenden?" } },
    "useSimpleInput": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "In den Basismodus wechseln" } },
    "useSimpleInputModalTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "In den Basismodus wechseln?" } },
    "useAdvancedInput": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "In den Expertenmodus wechseln" } },
    "useAdvancedInputModalTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "In den Expertenmodus wechseln?" } },
    "modalMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Beim Wechsel in einen anderen Modus wird die aktuelle Formel gel\xF6scht. Sind Sie sicher, dass Sie fortfahren m\xF6chten?" } }
  },
  "formulaParserErrors": {
    "invalidArgCountMin": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Die Funktion '" }, { "t": 4, "k": "funcType" }, { "t": 3, "v": "' erwartet mindestens " }, { "t": 4, "k": "minArgs" }, { "t": 3, "v": " Argumente." }] } },
    "invalidArgCountExact": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Die Funktion '" }, { "t": 4, "k": "funcType" }, { "t": 3, "v": "' erwartet genau " }, { "t": 4, "k": "minArgs" }, { "t": 3, "v": " Argumente." }] } },
    "invalidArgCountRange": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Die Funktion '" }, { "t": 4, "k": "funcType" }, { "t": 3, "v": "' erwartet zwischen " }, { "t": 4, "k": "minArgs" }, { "t": 3, "v": " und " }, { "t": 4, "k": "maxArgs" }, { "t": 3, "v": " Argumenten." }] } },
    "invalidArgumentType": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "'" }, { "t": 4, "k": "value" }, { "t": 3, "v": "' ist kein g\xFCltiges Argument f\xFCr die Funktion '" }, { "t": 4, "k": "funcType" }, { "t": 3, "v": "'." }] } }
  },
  "dataExplorer": {
    "noMatchingNodesText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Es wurden keine passenden Ergebnisse gefunden." } },
    "noProvidersText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Es wurden keine Datenanbieter gefunden. Um loszulegen, k\xF6nnen Sie zum Beispiel eine Datenquelle oder einen Seitenparameter hinzuf\xFCgen." } }
  },
  "dataExplorerNode": {
    "showMore": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mehr Wiederholungen anzeigen" } },
    "selectNode": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ausw\xE4hlen" } }
  },
  "richTextEditorBubbleMenu": {
    "bold": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Fett" } },
    "italic": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kursiv" } },
    "underline": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Unterstrichen" } },
    "strikethrough": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Durchgestrichen" } },
    "link": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Verkn\xFCpfung" } },
    "linkEditPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Verkn\xFCpfungs-URL..." } },
    "linkEditDone": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Fertig" } }
  },
  "richTextEditorFloatingMenu": {
    "hierarchy": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Hierarchie" } },
    "lists": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Listen" } },
    "paragraph": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Absatz" } },
    "heading1": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\xDCberschrift 1" } },
    "heading2": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\xDCberschrift 2" } },
    "heading3": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\xDCberschrift 3" } },
    "orderedList": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nummerierte Liste" } },
    "unorderedList": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aufz\xE4hlungsliste" } },
    "code": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Code" } },
    "taskList": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aufgabenliste" } }
  },
  "selectAIModelForm": {
    "AIType": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "KI-Typ" } },
    "AIModel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "KI-Modell" } },
    "fileField": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dateifeld" } },
    "temperatureLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Temperatur" } },
    "temperatureDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Die Temperatur eines LLM, ein Parameter zwischen 0 und " }, { "t": 4, "k": "max" }, { "t": 3, "v": ", passt die Zuf\xE4lligkeit der Antworten an \u2013 niedrigere Werte f\xFChren zu fokussierten Antworten, w\xE4hrend h\xF6here Werte die Kreativit\xE4t erh\xF6hen." }] } }
  },
  "onboarding": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Einf\xFChrung" } },
    "creating": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Erstellen Ihres ersten Arbeitsbereichs" } },
    "continue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Fortfahren" } },
    "skip": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Vorerst \xFCberspringen" } },
    "cancel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ich m\xF6chte bei der Einrichtung keine Unterst\xFCtzung" } },
    "failedTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Etwas ist schiefgegangen" } },
    "failedDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Die Einf\xFChrung wurde nicht vollst\xE4ndig abgeschlossen, auch wenn einige Teile davon bereits abgeschlossen sind." } },
    "failedTryAgain": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Erneut versuchen" } },
    "failedSkip": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Einf\xFChrung \xFCberspringen" } }
  },
  "moreStep": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Erz\xE4hlen Sie uns etwas mehr" } },
    "how": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wie haben Sie von uns erfahren?" } },
    "howSearchEngine": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Suchmaschine (Google/Bing)" } },
    "howSocialMedia": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Soziale Medien" } },
    "howOnlineAds": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Online-Werbung" } },
    "howContent": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Inhalte (Blog/Newsletter/Video)" } },
    "howReviewSite": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Bewertungsseite / Marktplatz" } },
    "howFriend": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Von einem Freund" } },
    "howColleague": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Von einem Kollegen" } },
    "howEvent": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Veranstaltung oder Webinar" } },
    "howSales": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Vertriebsansprache" } },
    "howOther": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sonstiges" } },
    "country": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Land" } },
    "share": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ich bin einverstanden, dies mit dem Baserow-Team zu teilen" } }
  },
  "teamStep": {
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zu welchem Team geh\xF6ren Sie?" } },
    "marketingTeam": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Marketing" } },
    "productAndDesignTeam": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Produkt & Design" } },
    "engineeringTeam": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Technik" } },
    "operationsTeam": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Betrieb" } },
    "itAndSupportTeam": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "IT & Support" } },
    "hrAndLegalTeam": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Personal- & Rechtsabteilung" } },
    "financeTeam": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Finanzwesen" } },
    "creativeProductionTeam": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kreativbereich" } },
    "salesAndAccountManagementTeam": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Vertrieb & Kundenbetreuung" } },
    "customerServiceTeam": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kundenservice" } },
    "manufacturingTeam": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Fertigung" } },
    "otherPersonalTeam": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sonstiges / Pers\xF6nlich" } }
  },
  "colorInput": {
    "default": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Standard" } }
  },
  "colorPickerContext": {
    "pickColorPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Oder w\xE4hlen Sie eine vordefinierte Farbe" } }
  },
  "imageInput": {
    "labelDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "W\xE4hlen Sie ein Bild zum Hochladen aus..." } },
    "labelButton": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Hochladen" } }
  },
  "user": {
    "isStaff": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ist Personal" } },
    "isWorkspaceAdmin": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ist Arbeitsbereichadministrator" } },
    "active": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aktiv" } },
    "deactivated": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Deaktiviert" } }
  },
  "adminType": {
    "dashboard": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dashboard" } },
    "users": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Benutzer" } },
    "workspaces": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Arbeitsbereiche" } }
  },
  "workspacesAdminTable": {
    "allWorkspaces": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Alle Arbeitsbereiche" } },
    "id": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "ID" } },
    "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Name" } },
    "members": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mitglieder" } },
    "applications": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Anwendungen" } },
    "created": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Erstellt" } },
    "rowCount": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Anzahl der Zeilen" } },
    "freeUsers": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kostenlose Benutzer" } },
    "seatsTaken": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sitze besetzt" } },
    "storageUsage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Verwendeter Speicherplatz (MB)" } },
    "usageHelpText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": 'Wird nachts berechnet, wenn die Einstellung "Arbeitsbereichsnutzung verfolgen" aktiviert ist' } }
  },
  "editWorkspaceContext": {
    "delete": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dauerhaft l\xF6schen" } }
  },
  "deleteWorkspaceModal": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "L\xF6schen " }, { "t": 4, "k": "name" }] } },
    "confirmation": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Sind Sie sicher, dass Sie den Arbeitsbereich l\xF6schen wollen: " }, { "t": 4, "k": "name" }, { "t": 3, "v": "?" }] } },
    "comment": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Der Arbeitsbereich wird dauerhaft gel\xF6scht, einschlie\xDFlich der zugeh\xF6rigen Anwendungen. Es ist nicht m\xF6glich, diese Aktion r\xFCckg\xE4ngig zu machen." } },
    "delete": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Arbeitsbereich " }, { "t": 4, "k": "name" }, { "t": 3, "v": " l\xF6schen" }] } }
  },
  "activeUsers": {
    "newUsers": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Neue Benutzer" } },
    "activeUsers": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aktive Benutzer" } }
  },
  "usersAdminTable": {
    "allUsers": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Alle Benutzer" } },
    "username": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Benutzername" } },
    "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Name" } },
    "workspaces": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Arbeitsbereiche" } },
    "lastLogin": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zuletzt angemeldet" } },
    "dateJoined": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Angemeldet" } },
    "active": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aktiv" } },
    "twoFactorAuth": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "2FA" } }
  },
  "editUserContext": {
    "changePassword": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Passwort \xE4ndern" } },
    "delete": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dauerhaft l\xF6schen" } },
    "impersonate": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Imitieren" } }
  },
  "changePasswordForm": {
    "newPassword": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Neues Passwort" } },
    "repeatPassword": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Passwort wiederholen" } },
    "changePassword": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Passwort \xE4ndern" } },
    "error": {
      "doesntMatch": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dieses Feld muss mit Ihrem Passwortfeld \xFCbereinstimmen." } }
    }
  },
  "userForm": {
    "fullName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Vollst\xE4ndiger Name" } },
    "email": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "E-Mail" } },
    "isActive": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ist aktiv" } },
    "warning": {
      "changeEmail": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Die \xC4nderung der E-Mail-Adresse des Benutzers bedeutet, dass er sich mit der neuen E-Mail-Adresse anmelden muss, wenn er sich anmeldet. Dies muss dem Benutzer mitgeteilt werden." } },
      "inactiveUser": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wenn ein Benutzer als inaktiv markiert ist, kann er sich nicht mehr anmelden." } },
      "userStaff": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wenn Sie einen Benutzer zu einem Mitarbeiter machen, erh\xE4lt dieser Administratorenzugriff auf alle Benutzer und Arbeitsbereiche sowie die M\xF6glichkeit, Ihren eigenen Mitarbeitern die Berechtigungen zu entziehen." } }
    },
    "error": {
      "invalidName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Bitte geben Sie einen g\xFCltigen vollst\xE4ndigen Namen ein. Er muss l\xE4nger als 2 Buchstaben und k\xFCrzer als 150 sein." } },
      "invalidEmail": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Bitte geben Sie eine g\xFCltige E-Mail Adresse ein." } }
    },
    "twoFactorAuth": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zwei-Faktor-Authentifizierung" } },
    "removeTwoFactorAuth": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zwei-Faktor-Authentifizierung entfernen" } }
  },
  "changeUserPasswordModal": {
    "changePassword": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Passwort f\xFCr " }, { "t": 4, "k": "username" }, { "t": 3, "v": " \xE4ndern" }] } }
  },
  "deleteUserModal": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "L\xF6schen " }, { "t": 4, "k": "username" }] } },
    "confirmation": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Sind Sie sicher, dass Sie den Benutzer l\xF6schen m\xF6chten: " }, { "t": 4, "k": "name" }, { "t": 3, "v": "?" }] } },
    "comment1": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Das Benutzerkonto wird gel\xF6scht, aber die Arbeitsbereiche, in denen der Benutzer Mitglied ist, bleiben bestehen. Die Benutzergruppe wird nicht gel\xF6scht, auch wenn dieser Benutzer der letzte Benutzer in dem Arbeitsbereich ist. Durch das L\xF6schen des letzten Benutzers in einem Arbeitsbereich wird verhindert, dass jemand auf diesen Arbeitsbereich zugreifen kann." } },
    "comment2": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nach dem L\xF6schen eines Benutzers ist es m\xF6glich, dass sich ein neuer Benutzer mit der E-Mail-Adresse des gel\xF6schten Benutzers erneut anmeldet. Um sicherzustellen, dass sie sich nicht erneut anmelden k\xF6nnen, deaktivieren Sie den Benutzer und l\xF6schen Sie ihn nicht." } },
    "delete": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Benutzer " }, { "t": 4, "k": "username" }, { "t": 3, "v": " l\xF6schen" }] } }
  },
  "editUserModal": {
    "delete": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Benutzer l\xF6schen" } },
    "edit": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Bearbeiten " }, { "t": 4, "k": "username" }] } }
  },
  "twoFactorAuthField": {
    "enabled": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aktiviert" } },
    "disabled": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Deaktiviert" } }
  },
  "adminDashboard": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dashboard" } },
    "totals": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Summen" } },
    "totalUsers": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Anzahl der Benutzer" } },
    "totalWorkspaces": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Gesamtzahl der Arbeitsbereiche" } },
    "totalApplications": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Gesamtanzahl der Anwendungen" } },
    "newUsers": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Neue Benutzer" } },
    "newUsers24h": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Neue Benutzer in den letzten 24 Stunden" } },
    "newUsers7days": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Neue Benutzer in den letzten 7 Tagen" } },
    "newUsers30days": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Neue Benutzer in den letzten 30 Tagen" } },
    "activeUsers": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aktive Benutzer" } },
    "activeUsers24h": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aktive Benutzer in den letzten 24 Stunden" } },
    "activeUsers7days": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aktive Benutzer in den letzten 7 Tagen" } },
    "activeUsers30days": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aktive Benutzer in den letzten 30 Tagen" } },
    "viewAll": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Alle anzeigen" } }
  },
  "formGroup": {
    "protectedField": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dieses Feld ist gesch\xFCtzt. Klicken Sie hier, um es zu \xE4ndern." } },
    "cancelProtectedField": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\xC4nderung abbrechen" } }
  },
  "userSourceType": {
    "userCountSummary": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "count" }, { "t": 3, "v": " Benutzer (" }, { "t": 4, "k": "lastUpdated" }, { "t": 3, "v": ")" }] } }
  },
  "guidedTourStep": {
    "step": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "step" }, { "t": 3, "v": " von " }, { "t": 4, "k": "totalSteps" }] } },
    "gotIt": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Verstanden" } },
    "next": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Weiter" } },
    "back": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zur\xFCck" } }
  },
  "welcomeGuidedTourStep": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Willkommen bei Baserow" } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Lassen Sie uns einen kurzen Rundgang machen, um Sie mit den Grundlagen vertraut zu machen. In nur wenigen Klicks lernen Sie, wie Sie Ihre Daten m\xFChelos organisieren und visualisieren k\xF6nnen" } },
    "buttonText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tour starten" } }
  },
  "controlCenterGuidedTourStep": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ihre Baserow-Schaltzentrale" } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Die linke Seitenleiste hilft Ihnen, Ihren Arbeitsbereich zu verwalten:\n\n- Startseite \u2013 Greifen Sie auf Ihr Haupt-Dashboard zu.\n- Benachrichtigungen \u2013 Bleiben Sie \xFCber \xC4nderungen und Erw\xE4hnungen informiert.\n- Mitglieder einladen \u2013 Arbeiten Sie zusammen, indem Sie Teammitglieder hinzuf\xFCgen.\n- Papierkorb \u2013 Listen Sie alle gel\xF6schten Elemente auf und stellen Sie sie wieder her." } }
  },
  "createNewGuidedTourStep": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Neue Datenbank oder Anwendung erstellen" } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Klicken Sie auf \u201ENeu hinzuf\xFCgen\u2026\u201C, um eine neue Datenbank, Anwendung oder ein neues Dashboard f\xFCr Ihr Projekt, Ihre Abteilung oder Ihr Team einzurichten." } }
  },
  "mcpEndpointSettings": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "MCP-Server" } },
    "createEndpoint": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Endpunkt erstellen" } },
    "createNewTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "MCP-Server-Endpunkt erstellen" } },
    "backToOverview": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zur\xFCck" } },
    "noEndpointsMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Es wurden keine MCP-Server-Endpunkte (Model Context Protocol) hinzugef\xFCgt. Diese k\xF6nnen verwendet werden, um direkt mit einem LLM wie Claude zu integrieren und dem LLM zu erlauben, Aktionen direkt in Baserow auszuf\xFChren. Erstellen Sie einen Server-Endpunkt, um zu beginnen." } }
  },
  "mcpEndpointForm": {
    "nameLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Name" } },
    "workspaceLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Arbeitsbereich" } }
  },
  "mcpEndpoint": {
    "detailLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Weitere Details" } },
    "endpointURLIntro": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Die MCP-Server-URL (Model Context Protocol) kann zu jedem Client hinzugef\xFCgt werden, der MCP-Server unterst\xFCtzt. Es handelt sich um einen eindeutigen Endpunkt, der dem LLM in Ihrem Auftrag direkten Zugriff auf Aktionen im Arbeitsbereich gew\xE4hrt." } },
    "reveal": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Vollst\xE4ndige URL anzeigen" } },
    "warning": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Behandeln Sie Ihre MCP-URL wie ein Passwort, da sie die M\xF6glichkeit hat, Daten in Baserow zu \xE4ndern." } },
    "claudeInstructions": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Drei einfache Schritte, um mit Claude Desktop und dem Baserow MCP zu beginnen.\n\n1. \xD6ffnen Sie die Claude Desktop-Einstellungen \xFCber die Navigationsleiste. (\u2318+,)\n1. Wechseln Sie zur Registerkarte \u201EDevelop\u201C und klicken Sie auf \u201EEdit Config\u201C.\n1. F\xFCgen Sie die folgende JSON-Konfiguration in `claude_desktop_config.json` ein." } },
    "cursorInstructions": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Drei einfache Schritte, um mit Cursor und dem Baserow MCP zu beginnen.\n\n1. \xD6ffnen Sie die Cursor-Einstellungen (\u21E7+\u2318+J)\n1. Navigieren Sie zur Registerkarte \u201EMCP\u201C und klicken Sie auf \u201EAdd MCP Server\u201C\n1. F\xFCgen Sie die folgende JSON-Konfiguration hinzu." } },
    "windsurfInstructions": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zwei einfache Schritte, um MCP mit Cascade in Windsurf einzurichten.\n\n1. Navigieren Sie zu Windsurf - Settings -> Advanced Settings oder Command Palette -> Open Windsurf settings page.\n1. Scrollen Sie nach unten zum Abschnitt Cascade. Dort finden Sie die Option, einen neuen Server hinzuzuf\xFCgen, vorhandene Server anzuzeigen, und eine Schaltfl\xE4che, um die JSON-Konfigurationsdatei `mcp_config.json` direkt anzuzeigen. F\xFCgen Sie das Folgende hinzu:" } }
  },
  "coreHTTPTriggerServiceForm": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Webhook-URL" } },
    "urlVersion": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Version" } },
    "urlVersionPublished": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ver\xF6ffentlicht" } },
    "urlVersionTest": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Test" } },
    "copyUrl": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Webhook-URL kopieren" } },
    "urlCopied": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Webhook-URL in die Zwischenablage kopiert" } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dieser Webhook empf\xE4ngt HTTP-Anfragen und l\xF6st den Workflow mit den Anfragedaten als Nutzlast aus." } },
    "methodsOptionLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Erlaubte HTTP-Methoden" } },
    "methodsOptionDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Steuert, welche HTTP-Methoden f\xFCr diesen Webhook erlaubt sind. Das Ausschlie\xDFen von GET reduziert die Wahrscheinlichkeit, dass der Webhook versehentlich ausgel\xF6st wird." } },
    "methodsOptionAll": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Alle" } },
    "methodsOptionExcludeGet": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "GET ausschlie\xDFen" } }
  },
  "twoFactorAuthEmpty": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sie haben 2FA noch nicht aktiviert" } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "F\xFCgen Sie Ihrem Konto eine zus\xE4tzliche Sicherheitsebene hinzu." } },
    "enable": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "2FA aktivieren" } },
    "notAllowedTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "2FA nicht aktiviert" } },
    "notAllowedDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Das Hinzuf\xFCgen von 2FA ist nur bei passwortbasierten Konten m\xF6glich." } }
  },
  "nodeHelpTooltip": {
    "exampleLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Beispiel" } },
    "result": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Ergebnis: " }, { "t": 4, "k": "result" }] } }
  },
  "enableWithQRCode": {
    "scanQRCode": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "QR-Code scannen" } },
    "scanQRCodeDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Scannen Sie den Code mit einer App wie Google Authenticator, Authy oder Microsoft Authenticator." } },
    "clickToCopy": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Alternativ k\xF6nnen Sie hier klicken, um den Code zu kopieren." } },
    "secretCopiedTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Geheimnis kopiert" } },
    "secretCopiedMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "TOTP-Geheimnis in die Zwischenablage kopiert." } },
    "enterCode": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Geben Sie den angezeigten Code ein" } },
    "enterCodeDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Geben Sie den 6-stelligen Code ein, der von der App angezeigt wird, um zu best\xE4tigen, dass Sie sie korrekt eingerichtet haben." } },
    "verificationFailed": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Verifizierung fehlgeschlagen" } },
    "verificationFailedDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Der eingegebene Code ist nicht g\xFCltig." } },
    "provisioningFailed": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Bereitstellung fehlgeschlagen" } },
    "checkSuccess": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zwei-Faktor-Authentifizierung erfolgreich aktiviert" } }
  },
  "adminUsers": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Benutzer" } }
  },
  "adminWorkspaces": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Arbeitsbereiche" } }
  },
  "sampleDataViewer": {
    "payloadLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ausgabe" } },
    "errorLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ein Fehler ist aufgetreten..." } },
    "showPayloadLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Payload anzeigen" } },
    "showErrorLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Fehler anzeigen" } },
    "downloadFullPayload": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Vollst\xE4ndige Payload herunterladen" } },
    "truncatedLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "[Ausgabe gek\xFCrzt]" } },
    "truncatedPayloadWarning": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Es werden nur die ersten " }, { "t": 4, "k": "size" }, { "t": 3, "v": " Zeichen angezeigt. Laden Sie die vollst\xE4ndige Payload herunter, um sie auf Ihrem Computer zu untersuchen." }] } }
  },
  "workspaceOutdatedToast": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zu viele \xC4nderungen" } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "W\xE4hrend Ihrer Abwesenheit sind zu viele \xC4nderungen aufgetreten. Aktualisieren Sie, um die neuesten Daten zu sehen." } },
    "action": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Daten aktualisieren" } },
    "dismiss": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Schlie\xDFen" } }
  },
  "disableTwoFactorAuthModal": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zwei-Faktor-Authentifizierung entfernen" } },
    "confirmation": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Sind Sie sicher, dass Sie die Zwei-Faktor-Authentifizierung f\xFCr " }, { "t": 4, "k": "name" }, { "t": 3, "v": " entfernen m\xF6chten?" }] } },
    "comment": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Der Benutzer kann sich dann nur mit seinem Passwort anmelden und die Zwei-Faktor-Authentifizierung anschlie\xDFend erneut einrichten." } },
    "remove": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zwei-Faktor-Authentifizierung entfernen" } }
  },
  "editWorkspace": {
    "invalidNameTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Workspace-Name nicht zul\xE4ssig" } }
  }
};

export { resource as default };
//# sourceMappingURL=de-BEagXfo5.mjs.map
