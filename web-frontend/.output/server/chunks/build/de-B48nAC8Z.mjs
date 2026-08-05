!(function() {
  try {
    var e = false ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
    var n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "41f5b211-7737-4d3a-848a-55be7b058054", e._sentryDebugIdIdentifier = "sentry-dbid-41f5b211-7737-4d3a-848a-55be7b058054");
  } catch (e2) {
  }
})();
const resource = {
  "integrationsCommon": {
    "singleRow": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Einzelne Zeile" } },
    "multipleRows": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mehrere Zeilen" } }
  },
  "integrationType": {
    "localBaserow": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Lokales Baserow" } },
    "smtp": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "SMTP-E-Mail" } },
    "slackBot": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Slack-Bot" } },
    "ai": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "KI" } }
  },
  "localBaserowIntegrationType": {
    "localBaserowSummary": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Lokales Baserow - " }, { "t": 4, "k": "name" }, { "t": 3, "v": ", " }, { "t": 4, "k": "username" }] } },
    "localBaserowNoUser": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Lokales Baserow - Nicht konfiguriert" } },
    "localBaserowWarning": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wenn Sie Ihr Konto autorisieren, hat jeder mit Bearbeitungsrechten f\xFCr die Anwendung auch vollen Zugriff auf die Daten, auf welche Sie Zugriff haben. Es ist m\xF6glich einen zweiten Benutzer zu erstellen, diesem die passenden Berechtigungen zu geben und stattdessen diesen zu verwenden." } }
  },
  "aiIntegrationType": {
    "inheritingWorkspace": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\xDCbernimmt die KI-Einstellungen des Arbeitsbereichs" } },
    "overridingProviders": { "t": 0, "b": { "t": 1, "c": [{ "t": 2, "i": [{ "t": 3, "v": "\xDCberschreibt " }, { "t": 4, "k": "count" }, { "t": 3, "v": " Anbieter" }] }, { "t": 2, "i": [{ "t": 3, "v": "\xDCberschreibt " }, { "t": 4, "k": "count" }, { "t": 3, "v": " Anbieter" }] }] } }
  },
  "slackBotIntegrationType": {
    "slackBotSummary": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Slack-Bot" } },
    "slackBotNoToken": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Slack-Bot \u2013 Nicht konfiguriert" } }
  },
  "serviceType": {
    "localBaserowGetRow": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Einzelne Zeile abfragen" } },
    "localBaserowGetRowDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Eine einzelne Zeile aus einer Baserow-Tabelle lesen." } },
    "localBaserowListRows": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mehrere Zeilen auflisten" } },
    "localBaserowListRowsDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Liest mehrere Zeilen aus einer Baserow-Tabelle." } },
    "localBaserowAggregateRows": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Feld zusammenfassen" } },
    "localBaserowAggregateRowsDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Fasst ein Feld in einer Baserow-Tabelle zusammen." } },
    "localBaserowCreateRow": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Eine Zeile erstellen" } },
    "localBaserowCreateRowDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Erstellt eine neue Zeile in einer Baserow-Tabelle." } },
    "localBaserowUpdateRow": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Eine Zeile aktualisieren" } },
    "localBaserowUpdateRowDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aktualisiert eine bestehende Zeile in einer Baserow-Tabelle." } },
    "localBaserowDeleteRow": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Eine Zeile l\xF6schen" } },
    "localBaserowDeleteRowDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "L\xF6scht eine Zeile in einer Baserow-Tabelle." } },
    "localBaserowRowsCreated": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zeilen werden erstellt" } },
    "localBaserowRowsCreatedDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wird ausgel\xF6st, wenn Zeilen in einer Baserow-Tabelle erstellt werden." } },
    "localBaserowRowsUpdated": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zeilen werden aktualisiert" } },
    "localBaserowRowsUpdatedDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wird ausgel\xF6st, wenn Zeilen in einer Baserow-Tabelle aktualisiert werden." } },
    "localBaserowRowsDeleted": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zeilen werden gel\xF6scht" } },
    "localBaserowRowsDeletedDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wird ausgel\xF6st, wenn Zeilen in einer Baserow-Tabelle gel\xF6scht werden." } },
    "coreHTTPTrigger": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Eine HTTP-Anfrage empfangen" } },
    "coreHTTPTriggerDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wird ausgel\xF6st, wenn eine HTTP-Anfrage empfangen wird." } },
    "coreHTTPRequest": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Eine HTTP-Anfrage senden" } },
    "coreHTTPRequestDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sendet eine HTTP-Anfrage an einen angegebenen Endpunkt." } },
    "coreSMTPEmail": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "E-Mail versenden" } },
    "coreRouter": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Router" } },
    "coreRouterEdgesRequired": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mindestens eine Verzweigung ist erforderlich" } },
    "coreRouterEdgeLabelRequired": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Eine Zweigbezeichnung ist erforderlich." } },
    "coreRouterEdgeConditionRequired": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Eine Zweigbedingung ist erforderlich." } },
    "coreRouterDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Leitet den Workflow basierend auf einer Bedingung zum n\xE4chsten Zweig weiter." } },
    "coreSMTPEmailDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sendet eine E-Mail unter Verwendung der SMTP-Konfiguration." } },
    "coreIteration": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Iterator" } },
    "coreIterationDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\xDCber Elemente iterieren." } },
    "errorFromEmailMissing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": 'Fehlende E-Mail-Eigenschaft "From"' } },
    "errorToEmailsMissing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": 'Fehlende E-Mail-Eigenschaft "To"' } },
    "misconfigured": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Fehlkonfiguriert" } },
    "trashedField": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Verworfenes Feld" } },
    "errorUrlMissing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Fehlende URL-Eigenschaft" } },
    "errorNoTableSelected": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Keine Tabelle ausgew\xE4hlt" } },
    "errorFilterInError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mindestens ein Filter ist falsch konfiguriert" } },
    "errorSortingInError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mindestens eine Sortierung ist falsch konfiguriert" } },
    "errorNoFieldSelected": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kein Feld ausgew\xE4hlt" } },
    "errorNoAggregationTypeSelected": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kein Aggregationstyp ausgew\xE4hlt" } },
    "corePeriodic": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Periodischer Ausl\xF6ser" } },
    "corePeriodicDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "L\xF6st den Workflow in regelm\xE4\xDFigen Abst\xE4nden zu festgelegten Zeitpunkten aus" } },
    "corePeriodicErrorIntervalMissing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ein Intervall ist erforderlich." } },
    "errorIterationSourceMissing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Fehlende Quell-Eigenschaft" } },
    "aiAgent": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "KI-Prompt" } },
    "aiAgentDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "F\xFChrt KI-Prompts mithilfe konfigurierter generativer KI-Modelle aus." } },
    "errorNoIntegrationSelected": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Keine Integration ausgew\xE4hlt" } },
    "errorNoAIProviderSelected": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kein KI-Anbieter ausgew\xE4hlt" } },
    "errorNoAIModelSelected": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kein KI-Modell ausgew\xE4hlt" } },
    "errorNoPromptProvided": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kein Prompt angegeben" } },
    "errorNoChoicesProvided": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": 'Keine Auswahlm\xF6glichkeiten f\xFCr den Ausgabetyp "Auswahl" angegeben' } },
    "slackWriteMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Eine Slack-Nachricht senden" } },
    "slackWriteMessageDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sendet eine Nachricht an einen bestimmten Slack-#Kanal" } },
    "slackWriteMessageMissingChannel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ein Kanal ist erforderlich." } },
    "slackWriteMessageMissingMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Eine Nachricht ist erforderlich." } },
    "slackWriteMessageMissingIntegration": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Keine Slack-Integration ausgew\xE4hlt." } },
    "localBaserowCreateRows": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mehrere Zeilen erstellen" } },
    "localBaserowCreateRowsDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Erstellt mehrere neue Zeilen in einer Baserow-Tabelle." } },
    "localBaserowUpdateRows": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mehrere Zeilen aktualisieren" } },
    "localBaserowUpdateRowsDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aktualisiert mehrere bestehende Zeilen in einer Baserow-Tabelle." } },
    "localBaserowFieldsUpdated": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Bestimmte Feldwerte werden aktualisiert" } },
    "localBaserowFieldsUpdatedDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wird ausgel\xF6st, wenn Zeilen in bestimmten Feldern einer Baserow-Tabelle aktualisiert werden." } },
    "coreManualTrigger": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Manueller Ausl\xF6ser" } },
    "coreManualTriggerDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Startet nur, wenn eine andere Workflow-Aktion diesen Workflow startet." } },
    "coreCSVFileReader": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Eine CSV-Datei lesen" } },
    "coreCSVFileReaderDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Liest Zeilen aus einer CSV-Datei." } },
    "coreStartWorkflow": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Workflow starten" } },
    "coreStartWorkflowDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Startet einen Automatisierungs-Workflow." } },
    "errorNoRowsSelected": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Keine Zeilen ausgew\xE4hlt" } },
    "errorCSVFileMissing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Fehlende CSV-Datei-Eigenschaft" } },
    "errorCSVContentMissing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Fehlende CSV-Daten-Eigenschaft" } },
    "errorNoWorkflowSelected": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kein Workflow ausgew\xE4hlt" } },
    "errorWorkflowNotImmediateDispatch": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Der ausgew\xE4hlte Workflow muss einen Ausl\xF6ser verwenden, der sofort starten kann." } }
  },
  "userSourceType": {
    "localBaserow": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Baserow-Tabellen-Authentifizierung" } }
  },
  "localBaserowForm": {
    "user": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Benutzer" } },
    "userMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mit dieser Verbindung autorisieren Sie die Anwendung, Ihr Konto zu verwenden, um \xC4nderungen in Ihrem lokalen Baserow-Arbeitsbereich vorzunehmen." } }
  },
  "aiForm": {
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Konfigurieren Sie die Einstellungen des KI-Anbieters f\xFCr diese Integration. Standardm\xE4\xDFig werden die KI-Einstellungen des Arbeitsbereichs \xFCbernommen." } },
    "workspaceSettingsTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "KI-Einstellungen des Arbeitsbereichs" } },
    "workspaceSettingsDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Diese Integration \xFCbernimmt standardm\xE4\xDFig die Einstellungen des KI-Anbieters aus Ihrem Arbeitsbereich. Sie k\xF6nnen bestimmte Anbieter unten \xFCberschreiben." } },
    "overrideWorkspaceSettings": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Einstellungen des Arbeitsbereichs f\xFCr diesen Anbieter \xFCberschreiben" } },
    "inherited": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\xDCbernommen" } },
    "overridden": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\xDCberschrieben" } }
  },
  "aiAgentServiceForm": {
    "integrationLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Integration" } },
    "providerLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "KI-Anbieter" } },
    "providerPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "W\xE4hlen Sie einen KI-Anbieter aus..." } },
    "modelLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "KI-Modell" } },
    "modelPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "W\xE4hlen Sie ein Modell aus..." } },
    "outputTypeLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ausgabetyp" } },
    "outputTypeHelp": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "W\xE4hlen Sie aus, wie die KI ihre Antwort formatieren soll. Wenn Sie Auswahlm\xF6glichkeiten festlegen, zwingen Sie das Modell, ausschlie\xDFlich mit einer dieser M\xF6glichkeiten zu antworten." } },
    "outputTypeText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Text" } },
    "outputTypeChoice": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Auswahl" } },
    "temperatureLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Temperatur" } },
    "temperaturePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "z. B. 0,7" } },
    "temperatureHelp": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Steuert die Zuf\xE4lligkeit. Niedrigere Werte (0\u20130,3) sind fokussierter und deterministischer. H\xF6here Werte (0,7\u20132,0) sind kreativer und vielf\xE4ltiger." } },
    "promptLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Prompt" } },
    "promptPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Geben Sie hier Ihren Prompt ein..." } },
    "choicesLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Auswahlm\xF6glichkeiten" } },
    "choicePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Geben Sie eine Auswahlm\xF6glichkeit ein..." } },
    "addChoice": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Auswahlm\xF6glichkeit hinzuf\xFCgen" } },
    "choicesRequired": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mindestens eine Auswahlm\xF6glichkeit ist erforderlich" } }
  },
  "localBaserowGetRowForm": {
    "rowFieldLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Row-ID" } },
    "invalidFormula": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Die Formel ist ung\xFCltig" } },
    "rowFieldPlaceHolder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "W\xE4hlen Sie eine Row-ID" } },
    "rowFieldHelpText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wert leer lassen, um die erste Zeile abzufragen." } },
    "searchFieldPlaceHolder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Geben Sie einen Suchbegriff ein..." } },
    "noTableChosenForFiltering": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "W\xE4hlen Sie eine Tabelle, um die Datenquellen-Filter zu nutzen." } },
    "noTableChosenForSorting": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "W\xE4hlen Sie eine Tabelle um die Datenquellen-Sortierung zu verwenden." } }
  },
  "localBaserowListRowsForm": {
    "searchFieldPlaceHolder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Geben Sie einen Suchbegriff ein..." } },
    "noTableChosenForFiltering": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "W\xE4hlen Sie eine Tabelle um die Filter der Datenquelle nutzen zu k\xF6nnen." } },
    "noTableChosenForSorting": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "W\xE4hlen Sie eine Tabelle um die Datenquellen-Sortierung zu nutzen." } },
    "advancedConfig": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Erweitert" } },
    "defaultResultCount": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Standardanzahl der Ergebnisse" } },
    "defaultResultCountHelp": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Die Standardanzahl der Datens\xE4tze, die diese Datenquelle auf Ihrer Seite abruft. Wenn Sie den Wert auf 0 setzen und ihn f\xFCr ein Sammelelement verwenden, wird die Leistung beim Laden der Seite verbessert, da die Datens\xE4tze nur abgerufen werden, wenn das Element paginiert ist." } },
    "defaultResultCountPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Standardwert..." } }
  },
  "serviceRefinementForms": {
    "filterTabTitle": { "t": 0, "b": { "t": 1, "c": [{ "t": 2, "i": [{ "t": 3 }], "s": "Filter" }, { "t": 2, "i": [{ "t": 3 }], "s": "1 Filter" }, { "t": 2, "i": [{ "t": 4, "k": "count" }, { "t": 3, "v": " Filter" }] }] } },
    "sortTabTitle": { "t": 0, "b": { "t": 1, "c": [{ "t": 2, "i": [{ "t": 3 }], "s": "Sortierung" }, { "t": 2, "i": [{ "t": 3 }], "s": "1 Sortierung" }, { "t": 2, "i": [{ "t": 4, "k": "count" }, { "t": 3, "v": " Sortierungen" }] }] } },
    "searchTabTitle": { "t": 0, "b": { "t": 1, "c": [{ "t": 2, "i": [{ "t": 3 }], "s": "Suche" }, { "t": 2, "i": [{ "t": 3 }], "s": "1 Suche" }, { "t": 2, "i": [{ "t": 4, "k": "count" }, { "t": 3, "v": " Suchen" }] }] } },
    "searchFieldPlaceHolder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Geben Sie einen Suchbegriff ein..." } },
    "noTableChosenForFiltering": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "W\xE4hlen Sie eine Tabelle aus, um mit der Verwendung von Datenquellen-Filtern zu beginnen." } },
    "noTableChosenForSorting": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "W\xE4hlen Sie eine Tabelle aus, um mit der Verwendung von Datenquellen-Sortierungen zu beginnen." } },
    "refinements": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Verfeinerungen" } }
  },
  "localBaserowAggregateRowsForm": {
    "aggregationFieldLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Feld" } },
    "aggregationTypeLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aggregierung" } },
    "searchFieldPlaceHolder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Geben Sie einen Suchbegriff ein..." } },
    "noTableChosenForFiltering": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "W\xE4hlen Sie eine Tabelle, um mit der Verwendung von Datenquellenfiltern zu beginnen." } }
  },
  "localBaserowTableServiceConditionalForm": {
    "addFilter": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zus\xE4tzliche Filter hinzuf\xFCgen" } },
    "noFilterTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sie haben bisher keinen Datenquellen-Filter erstellt" } },
    "noFilterText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Datenquellen-Filter erm\xF6glichen Ihnen, nur die Zeilen einer Baserow-Tabelle anzuzeigen, auf welche die Bedingungen zutreffen." } },
    "relatedFieldNotFound": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Das Bezugsfeld wurde nicht gefunden." } },
    "filterTypeNotFound": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Die Filterart ist nicht kompatibel." } },
    "noCompatibleFilterTypesErrorTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Keine kompatiblen Filterarten" } },
    "noCompatibleFilterTypesErrorMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Keine Ihrer Felder hat kompatible Filterarten" } },
    "textFilterInputPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Text eingeben..." } },
    "formulaFilterInputPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "W\xE4hlen Sie eine Formel aus..." } },
    "useFormulaForValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Eine Formel f\xFCr diesen Filter verwenden" } },
    "useDefaultForValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Standardfilter f\xFCr dieses Feld verwenden" } }
  },
  "localBaserowTableServiceSortForm": {
    "noSortTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sie haben noch keine Datenquellen-Sortierung erstellt" } },
    "noSortText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sortierung erm\xF6glicht Ihnen, Zeilen nach einem Feld zu sortieren." } },
    "sortBy": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sortieren nach" } },
    "thenBy": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "und nach" } },
    "addSort": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zus\xE4tzliche Sortierung hinzuf\xFCgen" } },
    "noTableChosenForSorting": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "W\xE4hlen Sie eine Tabelle, um die Datenquellen-Sortierung zu verwenden." } },
    "sortMisconfigured": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Das Feld, zu dem diese Sortierung geh\xF6rt, wurde verworfen." } }
  },
  "dataProviderType": {
    "dataSource": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Datenquelle" } },
    "pageParameter": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Parameter" } }
  },
  "coreHTTPRequestServiceForm": {
    "httpMethod": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "HTTP-Methode" } },
    "url": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Endpunkt-URL" } },
    "queryParams": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Abfrageparameter" } },
    "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Name" } },
    "value": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wert" } },
    "namePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Name..." } },
    "valuePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wert..." } },
    "headers": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kopfzeilen" } },
    "addQueryParam": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Abfrageparameter hinzuf\xFCgen" } },
    "addHeader": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kopfzeile hinzuf\xFCgen" } },
    "formData": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Formulardaten" } },
    "addFormData": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Formular-Daten hinzuf\xFCgen" } },
    "bodyType": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Body-Typ" } },
    "bodyContent": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Body-Inhalt" } },
    "urlPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Endpunkt-URL eingeben..." } },
    "bodyPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Anfrage-Body hinzuf\xFCgen..." } },
    "timeoutPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zeitlimit eingeben..." } },
    "nameFieldRequired": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": 'Die Eigenschaft "name" ist erforderlich.' } },
    "seconds": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sekunden" } },
    "nameFieldInvalid": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Der Name darf nur alphanumerische Zeichen, Bindestriche oder Unterstriche enthalten und darf nicht mit einem Bindestrich oder einem Unterstrich beginnen." } },
    "timeout": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zeitlimit" } }
  },
  "slackBotForm": {
    "tokenLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Bot-User-Token" } },
    "tokenPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "xoxb-1234-..." } },
    "tokenMustStartWith": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": 'Token muss mit "xoxb-" beginnen' } },
    "supportHeading": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Brauchen Sie Hilfe?" } },
    "supportDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wenn Sie Unterst\xFCtzung bei der Kopplung mit Ihrer Slack-App ben\xF6tigen, lesen Sie bitte die unten stehenden Schritte." } },
    "supportSetupHeading": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "1. Einrichtung der App" } },
    "supportSetupDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": 'Abh\xE4ngig von den Einstellungen Ihres Slack-Arbeitsbereichs k\xF6nnen Sie m\xF6glicherweise eine neue Slack-App erstellen. Andernfalls muss dies ein Administrator f\xFCr Sie \xFCbernehmen. Wenn Sie eine bestehende App wiederverwenden, die Nachrichten schreiben kann, springen Sie zum Abschnitt \u201EKopplung mit Ihrer Slack-App".' } },
    "supportSetupStep1": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Navigieren Sie zur " }, { "t": 4, "k": "link" }, { "t": 3, "v": " Ihres Arbeitsbereichs." }] } },
    "supportSetupStep1Link": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "App-Seite" } },
    "supportSetupStep2": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": 'Erstellen Sie eine neue App, w\xE4hlen Sie \u201EFrom scratch" und geben Sie einen Namen ein. W\xE4hlen Sie den Arbeitsbereich aus, in dem Ihre App arbeiten soll, und klicken Sie auf \u201ECreate".' } },
    "supportSetupStep3": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": 'Navigieren Sie in der linken Seitenleiste zu \u201EOAuth > Permissions", scrollen Sie zu \u201EScopes" und w\xE4hlen Sie unter \u201EBot Token Scopes" \u201EAdd an OAuth Scope" aus.' } },
    "supportSetupStep4": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Damit Ihre App Nachrichten posten kann, f\xFCgen Sie den Scope " }, { "t": 4, "k": "scope" }, { "t": 3, "v": " hinzu." }] } },
    "supportPairingHeading": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "2. Kopplung mit Ihrer Slack-App" } },
    "supportPairingStep1": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": 'Falls Ihre App neu ist: Navigieren Sie zu \u201ESettings" > \u201EInstall App". Klicken Sie auf den gr\xFCnen Button, um die App in Ihrem Arbeitsbereich zu installieren.' } },
    "supportPairingStep2": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": 'Kopieren Sie Ihr \u201EBot User OAuth Token" und speichern Sie es im Feld \u201EBot-User-Token" in diesem Formular.' } },
    "supportPairingStep3": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Falls Ihre App neu ist: Laden Sie sie schlie\xDFlich in Slack mit " }, { "t": 4, "k": "command" }, { "t": 3, "v": " in Ihren gew\xFCnschten Kanal ein." }] } }
  },
  "slackWriteMessageServiceForm": {
    "alertMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Diese Aktion muss mit einer Slack-App gekoppelt werden. Bitte folgen Sie der Anleitung im Integrations-Popup, um zu beginnen." } },
    "integrationLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Integration" } },
    "channelLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kanal" } },
    "channelPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Geben Sie einen Kanalnamen ein" } },
    "messageLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nachricht" } },
    "messagePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Geben Sie eine Nachricht ein..." } },
    "channelNoPrefix": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": 'Entfernen Sie das \u201E#" vor dem Kanalnamen.' } }
  },
  "localBaserowTableSelector": {
    "viewFieldLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ansicht" } },
    "tableFieldLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tabelle" } },
    "chooseNoView": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nicht ausgew\xE4hlt" } },
    "databaseFieldLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Datenbank" } },
    "oneWayDataSyncedTableDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Einseitig synchronisiert" } },
    "twoWayDataSyncedTableDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zweiseitig synchronisiert" } }
  },
  "smtpIntegrationType": {
    "smtpSummary": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "SMTP - " }, { "t": 4, "k": "host" }, { "t": 3, "v": ":" }, { "t": 4, "k": "port" }] } }
  },
  "smtpForm": {
    "host": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "SMTP-Server" } },
    "hostPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "smtp.gmail.com" } },
    "port": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "SMTP-Port" } },
    "portPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "587" } },
    "useTls": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "TLS verwenden" } },
    "username": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Benutzername" } },
    "usernamePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }, { "t": 9 }, { "t": 3 }], "s": "ihre-email@beispiel.de" } },
    "password": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Passwort" } },
    "passwordPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "ihr-passwort" } }
  },
  "smtpEmailForm": {
    "smtpConfigurationMode": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "SMTP-Konfiguration" } },
    "useInstanceSmtpSettings": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "SMTP-Server der Instanz verwenden" } },
    "integrationDropdownLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Integration" } },
    "fromEmail": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Absender-E-Mailadresse" } },
    "fromEmailPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }, { "t": 9 }, { "t": 3 }], "s": "absender@beispiel.de" } },
    "fromName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Absendername" } },
    "fromNamePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ihr Name" } },
    "toEmails": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Empf\xE4nger-E-Mailadressen" } },
    "toEmailsPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }, { "t": 9 }, { "t": 3 }, { "t": 9 }, { "t": 3 }], "s": "empfaenger1@beispiel.de,empfaenger2@beispiel.de" } },
    "ccEmails": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "CC-E-Mailempf\xE4nger" } },
    "ccEmailsPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }, { "t": 9 }, { "t": 3 }, { "t": 9 }, { "t": 3 }], "s": "cc1@beispiel.de,cc2@beispiel.de" } },
    "bccEmails": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "BCC-E-Mailempf\xE4nger" } },
    "bccEmailsPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }, { "t": 9 }, { "t": 3 }, { "t": 9 }, { "t": 3 }], "s": "bcc1@beispiel.de,bcc2@beispiel.de" } },
    "subject": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Betreff" } },
    "subjectPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ihr E-Mailbetreff" } },
    "bodyType": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Body-Typ" } },
    "bodyTypePlain": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Klartext" } },
    "bodyTypeHtml": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "HTML" } },
    "body": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Body" } },
    "bodyPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ihr E-Mailinhalt..." } }
  },
  "coreIterationServiceForm": {
    "source": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Quelle" } },
    "sourcePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "W\xE4hlen Sie eine Quelle aus..." } }
  },
  "routerForm": {
    "defaultEdgeLabelLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Standard-Zweigbezeichnung" } },
    "defaultEdgeLabelPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Standard" } },
    "defaultEdgeLabelDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "W\xE4hlen Sie optional die Bezeichnung aus, die auf dem Standardzweig angezeigt werden soll." } },
    "branchesHeading": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Verzweigungen" } },
    "branchesDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mit Verzweigungen k\xF6nnen Sie Knoten nur ausf\xFChren, wenn eine Bedingung erf\xFCllt ist. Verzweigungen werden von links nach rechts ausgef\xFChrt, bis eine Bedingung erf\xFCllt ist. Andernfalls wird die Standardverzweigung ausgef\xFChrt. " } },
    "branchLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Bezeichnung" } },
    "branchConditionLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Bedingung" } },
    "branchConditionPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wenn wahr, wird diese Verzweigung ausgef\xFChrt." } },
    "addEdge": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Verzweigung hinzuf\xFCgen" } },
    "edgeDefaultName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Verzweigung" } },
    "noLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Keine Bezeichnung" } },
    "edgeDeletionLastEdge": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sie k\xF6nnen die letzte Verzweigung nicht l\xF6schen." } },
    "edgeDeletionHasOutput": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Eine Verzweigung kann nicht gel\xF6scht werden, wenn sie eine Ausgabe hat." } }
  },
  "periodicForm": {
    "intervalLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Intervall" } },
    "intervalHelper": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "W\xE4hlen Sie aus, wie oft dieser Workflow ausgef\xFChrt werden soll" } },
    "everyMinute": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Alle " }, { "t": 4, "k": "minute" }, { "t": 3, "v": " Minuten" }] } },
    "everyMinuteDefault": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Alle festgelegten Minuten" } },
    "everyHour": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Jede Stunde" } },
    "everyDay": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Jeden Tag" } },
    "everyWeek": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Jede Woche" } },
    "everyMonth": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Jeden Monat" } },
    "hour": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Stunde" } },
    "minute": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Minute" } },
    "minuteFrequency": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Alle Minuten" } },
    "dayOfWeek": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wochentag" } },
    "dayOfMonth": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tag eines Monats" } },
    "hourPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "0-23" } },
    "minutePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "0-59" } },
    "minuteFrequencyPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "15" } },
    "dayOfMonthPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "1-31" } },
    "minuteHelper": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dieser Workflow wird in den festgelegten Minutenabst\xE4nden ausgef\xFChrt" } },
    "hourHelper": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Dieser Workflow wird jede Stunde zur angegebenen Minute in Ihrer lokalen Zeitzone (" }, { "t": 4, "k": "timezone" }, { "t": 3, "v": ") ausgef\xFChrt" }] } },
    "dayHelper": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Dieser Workflow wird jeden Tag zur angegebenen Zeit in Ihrer lokalen Zeitzone (" }, { "t": 4, "k": "timezone" }, { "t": 3, "v": ") ausgef\xFChrt" }] } },
    "weekHelper": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Dieser Workflow wird jede Woche am angegebenen Tag und zur angegebenen Zeit in Ihrer lokalen Zeitzone (" }, { "t": 4, "k": "timezone" }, { "t": 3, "v": ") ausgef\xFChrt" }] } },
    "monthHelper": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Dieser Workflow wird jeden Monat am angegebenen Tag und zur angegebenen Zeit in Ihrer lokalen Zeitzone (" }, { "t": 4, "k": "timezone" }, { "t": 3, "v": ") ausgef\xFChrt" }] } },
    "deactivatedTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Periodischer Ausl\xF6ser deaktiviert" } },
    "deactivatedText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dieser periodische Ausl\xF6ser wurde aufgrund aufeinanderfolgender Fehler automatisch deaktiviert." } }
  },
  "localBaserowServiceForm": {
    "integrationDropdownLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Integration" } },
    "rowIdLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Row-ID" } },
    "rowIdPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "W\xE4hlen Sie eine Row-ID" } }
  },
  "localBaserowUpsertRowServiceForm": {
    "fieldMappingPlaceholderArray": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "W\xE4hlen Sie einen Array-Wert, z. B. [42]" } },
    "fieldMappingPlaceholderString": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "W\xE4hlen Sie einen Text-Wert, z. B. \\'baserow\\'" } },
    "fieldMappingPlaceholderNumber": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "W\xE4hlen Sie einen Zahlenwert, z. B. 42" } },
    "fieldMappingPlaceholderBoolean": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "W\xE4hlen Sie einen Boolean-Wert, z. B. true" } },
    "fieldMappingPlaceholderDate": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "W\xE4hlen Sie einen Datumswert, z. B. 2025-07-25" } },
    "fieldMappingPlaceholderDecimal": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "W\xE4hlen Sie einen Dezimalwert, z. B. 3,14" } },
    "fieldMappingPlaceholderDuration": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "W\xE4hlen Sie einen Dauerwert, z. B. 1:23:40" } },
    "noTableSelectedMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "W\xE4hlen Sie eine Tabelle aus, um Ihre Felder zu konfigurieren." } },
    "noWritableFields": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Diese Tabelle enth\xE4lt keine beschreibbaren Felder." } }
  },
  "localBaserowFieldsUpdatedForm": {
    "fieldLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Felder" } },
    "fieldHelper": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Der Workflow wird nur ausgel\xF6st, wenn sich der Wert eines dieser Felder \xE4ndert." } }
  },
  "coreCSVFileReaderServiceForm": {
    "inputType": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Quelle" } },
    "inputTypeFile": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Datei" } },
    "inputTypeContent": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Inhalt" } },
    "file": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "CSV-Datei" } },
    "filePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "W\xE4hlen Sie eine CSV-Datei..." } },
    "csv": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "CSV-Daten" } },
    "csvPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Geben Sie CSV-Daten ein..." } },
    "separator": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Trennzeichen" } },
    "encoding": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kodierung" } },
    "firstLineIsHeader": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Erste Zeile ist Kopfzeile" } },
    "comma": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Komma" } },
    "semicolon": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Semikolon" } },
    "tab": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tabulator" } },
    "pipe": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pipe" } },
    "utf8": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "UTF-8" } },
    "utf8Bom": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "UTF-8 mit BOM" } },
    "latin1": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Latin-1" } }
  },
  "coreStartWorkflowServiceForm": {
    "automation": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Automatisierung" } },
    "workflow": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Workflow" } },
    "workflowHelperText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Es k\xF6nnen nur ver\xF6ffentlichte Workflows mit einem manuellen Ausl\xF6ser gestartet werden. Wenn dieser Workflow unver\xF6ffentlichte \xC4nderungen hat, wird die zuletzt ver\xF6ffentlichte Version ausgef\xFChrt." } }
  },
  "localBaserowDeleteRowServiceForm": {
    "rowIdLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zeilen-ID(s)" } },
    "rowIdPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "W\xE4hlen Sie eine Zeilen-ID oder ein Array von Zeilen-IDs" } },
    "rowIdHelper": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "W\xE4hlen Sie eine Zeilen-ID oder ein Array von Zeilen-IDs. Es k\xF6nnen bis zu " }, { "t": 4, "k": "limit" }, { "t": 3, "v": " Zeilen gleichzeitig gel\xF6scht werden." }] } }
  },
  "localBaserowCreateRowsServiceForm": {
    "rowsLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zeilen" } },
    "rowsPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "W\xE4hlen Sie eine Liste von Zeilenobjekten" } },
    "rowsHelper": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Die Formel muss ein Array von Zeilenobjekten zur\xFCckgeben oder eine JSON-Zeichenkette, die zu einem solchen geparst werden kann. Verwenden Sie Feldnamen oder Feld-IDs als Objektschl\xFCssel. Es k\xF6nnen bis zu " }, { "t": 4, "k": "limit" }, { "t": 3, "v": " Zeilen gleichzeitig erstellt werden." }] } }
  },
  "localBaserowUpdateRowsServiceForm": {
    "rowsLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zeilen" } },
    "rowsPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "W\xE4hlen Sie eine Liste von Zeilenobjekten mit IDs" } },
    "rowsHelper": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Die Formel muss ein Array von Zeilenobjekten zur\xFCckgeben oder eine JSON-Zeichenkette, die zu einem solchen geparst werden kann. Jedes Objekt muss eine id-Eigenschaft enthalten. Verwenden Sie Feldnamen oder Feld-IDs als Objektschl\xFCssel. Es k\xF6nnen bis zu " }, { "t": 4, "k": "limit" }, { "t": 3, "v": " Zeilen gleichzeitig aktualisiert werden." }] } }
  }
};

export { resource as default };
//# sourceMappingURL=de-B48nAC8Z.mjs.map
