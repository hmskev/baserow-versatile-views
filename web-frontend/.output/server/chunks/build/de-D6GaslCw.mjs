!(function() {
  try {
    var e = false ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
    var n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "bd7ee0ef-af8a-431c-9414-1225eecaf1a2", e._sentryDebugIdIdentifier = "sentry-dbid-bd7ee0ef-af8a-431c-9414-1225eecaf1a2");
  } catch (e2) {
  }
})();
const resource = {
  "automationWorkflow": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Workflow" } }
  },
  "automationWelcomeGuidedTourStep": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Willkommen bei Baserow Automatisierungen!" } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Machen wir eine kurze Tour. Sie sehen, wie Sie Ausl\xF6ser einrichten, Aktionen hinzuf\xFCgen, Ihren Workflow testen und ver\xF6ffentlichen \u2014 ganz ohne Programmierung." } }
  },
  "automationGraphGuidedTourStep": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Verwalten Sie hier Ihren Workflow-Graphen" } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Erstellen Sie hier einen Ausl\xF6ser und Aktionen, um festzulegen, was der Workflow tun soll. W\xE4hlen Sie einen Ausl\xF6ser oder eine Aktion aus, um ihn bzw. sie im Seitenpanel zu konfigurieren." } }
  },
  "automationTestRunGuidedTourStep": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Testen Sie Ihren Workflow" } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wenn Sie bereit sind, starten Sie einen Testlauf, um Ihren Workflow in Aktion zu sehen. Der Ausl\xF6ser wird einmal ausgef\xFChrt, um eine vollst\xE4ndige Ausf\xFChrung zu simulieren." } }
  },
  "automationHistoryGuidedTourStep": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Workflow-Verlauf anzeigen" } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Verwenden Sie das Verlaufsfenster, um vergangene Testl\xE4ufe und ver\xF6ffentlichte Ausf\xFChrungen zu \xFCberpr\xFCfen. Es ist eine gute M\xF6glichkeit, Fehler zu beheben oder Ergebnisse zu best\xE4tigen." } }
  },
  "automationPublishGuidedTourStep": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ver\xF6ffentlichen Sie Ihren Workflow" } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sobald Sie Ihre Konfiguration getestet und verfeinert haben, ver\xF6ffentlichen Sie Ihren Workflow, um ihn zu aktivieren. Der Ausl\xF6ser wird dann automatisch nach Zeitplan ausgef\xFChrt." } }
  },
  "automationWorkflowStateGuidedTourStep": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Workflow-Zustand steuern" } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Von hier aus k\xF6nnen Sie Ihren Workflow jederzeit pausieren oder fortsetzen. Sie haben stets die Kontrolle dar\xFCber, ob er aktiv oder deaktiviert ist." } }
  },
  "automationDocsGuidedTourStep": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dokumentation durchsuchen" } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wenn Sie einmal nicht weiterkommen oder mehr lernen m\xF6chten, klicken Sie auf die hervorgehobene Schaltfl\xE4che f\xFCr ausf\xFChrliche Anleitungen und FAQs zum Erstellen von Automatisierungen in Baserow." } }
  },
  "sidebarComponentAutomation": {
    "createAutomationWorkflow": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Neuer Workflow" } }
  },
  "createAutomationWorkflowModal": {
    "header": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Workflow erstellen" } },
    "submit": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Workflow hinzuf\xFCgen" } }
  },
  "automationWorkflowForm": {
    "defaultName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Workflow" } },
    "nameTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Name" } },
    "nameSubtitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Eindeutiger Name des Workflows" } },
    "namePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Namen eingeben..." } }
  },
  "duplicateAutomationWorkflowJobType": {
    "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Automatisierungs-Workflow duplizieren" } },
    "duplicating": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Duplizieren" } },
    "duplicatedTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Workflow dupliziert" } }
  },
  "trashType": {
    "workflow": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Workflow" } },
    "automation": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Automatisierung" } }
  },
  "generalSettings": {
    "titleOverview": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Allgemein" } },
    "nameLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Name der Automatisierung" } },
    "notificationLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Benachrichtigungen" } },
    "notificationCheckboxLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Benachrichtigt werden, wenn diese Automatisierung fehlschl\xE4gt" } },
    "cantUpdateAutomationTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Automatisierung konnte nicht aktualisiert werden" } },
    "cantUpdateAutomationDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Entschuldigung, die Automatisierung konnte nicht aktualisiert werden." } }
  },
  "workflowGeneralSettings": {
    "titleOverview": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Workflow-Einstellungen" } },
    "nameLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Workflow-Name" } },
    "workflowDisabledRecipientsLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Benachrichtigungsempf\xE4nger" } },
    "workflowDisabledRecipientsHelp": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Diese Arbeitsbereichsmitglieder erhalten eine In-App-Benachrichtigung, wenn dieser Workflow automatisch deaktiviert wird." } },
    "selectWorkflowDisabledRecipients": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Empf\xE4nger ausw\xE4hlen" } },
    "noWorkflowDisabledRecipients": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Keine Empf\xE4nger ausgew\xE4hlt." } },
    "cantUpdateWorkflowTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Workflow konnte nicht aktualisiert werden" } },
    "cantUpdateWorkflowDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Entschuldigung, der Workflow konnte nicht aktualisiert werden." } }
  },
  "workflowDisabledNotification": {
    "body": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Der Workflow " }, { "t": 4, "k": "name" }, { "t": 3, "v": " wurde deaktiviert." }] } }
  },
  "integrationSettings": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Integrationen" } },
    "noIntegrationMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sie haben noch keine Integrationen erstellt. Diese k\xF6nnen hinzugef\xFCgt werden, indem Sie eine Datenquelle, Aktion oder Benutzer-Authentifizierung hinzuf\xFCgen." } },
    "integrationMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sie k\xF6nnen neue Integrationen erstellen, indem Sie eine Datenquelle, Aktion oder Benutzer-Authentifizierung hinzuf\xFCgen." } }
  },
  "automationHeader": {
    "startTestRun": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Testlauf starten" } },
    "stopTestRun": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Testlauf stoppen" } },
    "publishBtn": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ver\xF6ffentlichen" } },
    "settingsBtn": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Einstellungen" } },
    "historyBtn": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Verlauf" } },
    "docsBtn": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dokumentation" } },
    "switchLabelDraft": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Entwurf" } },
    "switchLabelDisabled": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Deaktiviert" } },
    "switchLabelPaused": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pausiert" } },
    "switchLabelLive": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aktiv" } },
    "lastPublished": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zuletzt ver\xF6ffentlicht" } }
  },
  "dataProviderType": {
    "currentIteration": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aktuelle Iteration" } },
    "item": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Element" } },
    "previousNode": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Vorheriger Knoten" } }
  },
  "nodeSidePanel": {
    "labelTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Bezeichnung" } }
  },
  "historySidePanel": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Verlauf" } },
    "noRunsTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Noch keine Ausf\xFChrungen" } },
    "noRunsDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wenn dieser Workflow ausgef\xFChrt wurde, werden die Ergebnisse hier angezeigt." } },
    "statusStarted": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wird ausgef\xFChrt..." } },
    "statusSuccess": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Erfolgreich ausgef\xFChrt" } },
    "statusError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ausf\xFChrung fehlgeschlagen" } },
    "statusSuccessBadge": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Abgeschlossen" } },
    "statusErrorBadge": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Fehlgeschlagen" } },
    "statusDisabled": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Von Baserow deaktiviert" } },
    "successfulRuns": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Erfolgreiche Ausf\xFChrungen" } },
    "completedInSeconds": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "In " }, { "t": 4, "k": "s" }, { "t": 3, "v": " Sekunden abgeschlossen." }] } },
    "completedInLessThanSecond": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "In weniger als 1 Sekunde abgeschlossen." } },
    "running": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "L\xE4uft seit " }, { "t": 4, "k": "at" }, { "t": 3, "v": "s" }] } },
    "failedRuns": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Fehlgeschlagene Ausf\xFChrungen" } },
    "errorHideDetails": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Details ausblenden" } },
    "errorShowDetails": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Details anzeigen" } },
    "runNumber": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Ausf\xFChrung " }, { "t": 4, "k": "n" }] } },
    "runCount": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "n" }, { "t": 3, "v": " Ausf\xFChrungen" }] } },
    "testRun": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Test" } },
    "showResult": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ergebnis anzeigen" } }
  },
  "nodeType": {
    "triggerDeletionError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ausl\xF6ser k\xF6nnen nicht gel\xF6scht, sondern nur ersetzt werden." } },
    "localBaserowRowsCreatedLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Zeilen werden in " }, { "t": 4, "k": "tableName" }, { "t": 3, "v": " erstellt" }] } },
    "localBaserowRowsUpdatedLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Zeilen werden in " }, { "t": 4, "k": "tableName" }, { "t": 3, "v": " aktualisiert" }] } },
    "localBaserowRowsDeletedLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Zeilen werden in " }, { "t": 4, "k": "tableName" }, { "t": 3, "v": " gel\xF6scht" }] } },
    "localBaserowCreateRowLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Eine Zeile in " }, { "t": 4, "k": "tableName" }, { "t": 3, "v": " erstellen" }] } },
    "localBaserowUpdateRowLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Eine Zeile in " }, { "t": 4, "k": "tableName" }, { "t": 3, "v": " aktualisieren" }] } },
    "localBaserowDeleteRowLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Eine Zeile in " }, { "t": 4, "k": "tableName" }, { "t": 3, "v": " l\xF6schen" }] } },
    "localBaserowGetRowLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Eine Zeile in " }, { "t": 4, "k": "tableName" }, { "t": 3, "v": " lesen" }] } },
    "localBaserowListRowsLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Zeilen in " }, { "t": 4, "k": "tableName" }, { "t": 3, "v": " auflisten" }] } },
    "localBaserowAggregateRowsLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Zeilen in " }, { "t": 4, "k": "tableName" }, { "t": 3, "v": " zusammenfassen" }] } },
    "httpRequestLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Eine HTTP-Anfrage senden" } },
    "smtpEmailLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Eine E-Mail senden" } },
    "routerLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "1 von " }, { "t": 4, "k": "edgeCount" }, { "t": 3, "v": " Verzweigungen folgen" }] } },
    "iterationLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\xDCber Elemente iterieren" } },
    "defaultEdgeLabelFallback": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Standard" } },
    "routerWithOutputNodesDeleteError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Kann nicht gel\xF6scht werden, bis seine " }, { "t": 4, "k": "outputCount" }, { "t": 3, "v": " Ausgabeknoten entfernt sind." }] } },
    "routerWithOutputNodesReplaceError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Kann nicht ersetzt werden, bis seine " }, { "t": 4, "k": "outputCount" }, { "t": 3, "v": " Ausgabeknoten entfernt sind." }] } },
    "iteratorWithChildrenNodesDeleteError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kann nicht gel\xF6scht werden, bis seine untergeordneten Knoten entfernt sind." } },
    "iteratorWithChildrenNodesReplaceError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kann nicht ersetzt werden, bis seine untergeordneten Knoten entfernt sind." } },
    "periodicTriggerLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Periodischer Ausl\xF6ser" } },
    "aiAgent": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "KI-Prompt" } },
    "slackWriteMessageName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Eine Slack-Nachricht senden" } },
    "slackWriteMessageLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Eine Nachricht an #" }, { "t": 4, "k": "channel" }, { "t": 3, "v": " senden" }] } },
    "localBaserowFieldsUpdatedLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "fieldName" }, { "t": 3, "v": " wird in " }, { "t": 4, "k": "tableName" }, { "t": 3, "v": " aktualisiert" }] } },
    "localBaserowFieldsUpdatedMultipleLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Werte von " }, { "t": 4, "k": "count" }, { "t": 3, "v": " Feldern werden in " }, { "t": 4, "k": "tableName" }, { "t": 3, "v": " aktualisiert" }] } },
    "localBaserowFieldsUpdatedNoFieldLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Werte bestimmter Felder werden in einer Tabelle aktualisiert" } },
    "localBaserowCreateRowsLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Mehrere Zeilen in " }, { "t": 4, "k": "tableName" }, { "t": 3, "v": " erstellen" }] } },
    "localBaserowUpdateRowsLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Mehrere Zeilen in " }, { "t": 4, "k": "tableName" }, { "t": 3, "v": " aktualisieren" }] } },
    "csvFileReaderLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Eine CSV-Datei lesen" } },
    "startWorkflowLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "workflowName" }, { "t": 3, "v": " starten" }] } }
  },
  "workflowNode": {
    "actionDelete": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "L\xF6schen" } },
    "actionReplace": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ersetzen" } },
    "actionDuplicate": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Duplizieren" } },
    "actionConfigure": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Konfigurieren" } },
    "beforeLabelTrigger": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Startet wenn" } },
    "beforeLabelAction": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dann" } },
    "beforeLabelCondition": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wenn Bedingung erf\xFCllt ist" } },
    "beforeLabelConditionDefault": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wenn keine Bedingung(en) erf\xFCllt sind" } },
    "beforeLabelRepeat": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "F\xFCr jedes Element" } },
    "moreEdit": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Bearbeiten" } },
    "moreReplace": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ersetzen" } },
    "nodeOptions": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Knotenoptionen" } },
    "displayLabelDebug": { "t": 0, "b": { "t": 1, "c": [{ "t": 2, "i": [{ "t": 3, "v": "ID: " }, { "t": 4, "k": "id" }] }, { "t": 2, "i": [{ "t": 3, "v": "Vorh.: " }, { "t": 4, "k": "previousNodeId" }] }, { "t": 2, "i": [{ "t": 4, "k": "outputUid" }] }] } },
    "moreDuplicate": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Duplizieren" } }
  },
  "workflowAddNode": {
    "displayTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Automatisierungsknoten erstellen" } }
  },
  "workflowNodeContext": {
    "searchPlaceholderTrigger": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nach einem Ausl\xF6ser suchen..." } },
    "searchPlaceholderActions": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nach Aktionen suchen..." } },
    "noResults": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Keine Ergebnisse gefunden" } }
  },
  "serviceType": {
    "periodicTrigger": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Periodischer Ausl\xF6ser" } },
    "periodicTriggerDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "L\xF6st den Workflow periodisch in festgelegten Intervallen aus" } },
    "periodicTriggerTriggeredAt": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ausgel\xF6st am" } },
    "errorIntervalMissing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ein Intervall ist erforderlich." } },
    "coreHTTPTrigger": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "HTTP-Ausl\xF6ser" } },
    "coreHTTPTriggerDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "HTTP-Anfragen empfangen, um Workflows auszul\xF6sen" } },
    "coreManualTrigger": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Manueller Ausl\xF6ser" } },
    "coreManualTriggerDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Startet nur, wenn eine andere Workflow-Aktion diesen Workflow startet" } }
  },
  "workflowEditor": {
    "chooseEvent": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ein Ereignis ausw\xE4hlen..." } }
  },
  "simulateDispatch": {
    "sampleDataLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ausgabe" } },
    "triggerNodeAwaitingEvent": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Der Knoten wartet. Bitte l\xF6sen Sie das Ereignis manuell aus, um die Nutzlast zu f\xFCllen und den Test abzuschlie\xDFen." } },
    "simulationInProgress": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Knotentest wird ausgef\xFChrt..." } },
    "errorNodeNotConfigured": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Der Knoten muss konfiguriert sein, bevor er getestet werden kann." } },
    "errorPreviousNodeNotConfigured": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": 'Der vorherige Knoten "' }, { "t": 4, "k": "node" }, { "t": 3, "v": '" muss konfiguriert sein.' }] } },
    "errorPreviousNodesNotTested": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": 'Der vorherige Knoten "' }, { "t": 4, "k": "node" }, { "t": 3, "v": '" muss zuerst getestet werden.' }] } },
    "buttonLabelTest": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ereignis testen" } },
    "buttonLabelTestAgain": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ereignis erneut testen" } },
    "testNodeDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Testen Sie dieses Ereignis, um zu best\xE4tigen, dass die Konfiguration korrekt ist. Daten aus diesem Test k\xF6nnen in sp\xE4teren Schritten verwendet werden." } },
    "buttonLabelShowPayload": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nutzlast anzeigen" } },
    "buttonLabelShowError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Fehler anzeigen" } },
    "sampleDataModalTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Nutzlast f\xFCr " }, { "t": 4, "k": "nodeLabel" }] } },
    "sampleDataModalSubTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "JSON-Nutzlast" } },
    "sampleDataCopy": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kopieren" } },
    "errorOccurred": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ein Fehler ist aufgetreten..." } },
    "sampleDataCopied": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nutzlast in die Zwischenablage kopiert" } }
  }
};

export { resource as default };
//# sourceMappingURL=de-D6GaslCw.mjs.map
