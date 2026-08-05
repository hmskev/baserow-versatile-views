!(function() {
  try {
    var e = false ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
    var n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "eb270553-eb74-490d-8003-653d9a26f3e0", e._sentryDebugIdIdentifier = "sentry-dbid-eb270553-eb74-490d-8003-653d9a26f3e0");
  } catch (e2) {
  }
})();
const resource = {
  "localBaserowListRowsForm": {
    "noTableChosenForSorting": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kies een tabel om te beginnen met het sorteren van gegevensbronnen." } },
    "filterTabTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Filters" } },
    "sortTabTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sorteringen" } },
    "searchTabTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zoeken" } },
    "searchFieldPlaceHolder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Voer een zoekterm in..." } },
    "noTableChosenForFiltering": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kies een tabel om te beginnen met het gebruik van gegevensbronfilters." } },
    "advancedConfig": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Advanced" } },
    "defaultResultCount": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Standaard aantal resultaten" } },
    "defaultResultCountHelp": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Het standaard aantal rijen dat deze databron zal ophalen op je pagina. Door de waarde op 0 in te stellen en deze op een verzamelelement te gebruiken, worden de prestaties bij het laden van de pagina verbeterd doordat de records alleen worden opgehaald als het element wordt gepagineerd." } },
    "defaultResultCountPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Standaardwaarde..." } }
  },
  "localBaserowGetRowForm": {
    "rowFieldHelpText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Laat deze waarde leeg om de eerste rij te retourneren." } },
    "noTableChosenForSorting": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kies een tabel om te beginnen met het sorteren van gegevensbronnen." } },
    "rowFieldLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Rij ID" } },
    "invalidFormula": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "De formule is ongeldig" } },
    "rowFieldPlaceHolder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Selecteer een rij ID" } },
    "searchFieldPlaceHolder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Voer een zoekterm in..." } },
    "noTableChosenForFiltering": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kies een tabel om te beginnen met het gebruik van gegevensbronfilters." } },
    "filterTabTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Filters" } },
    "searchTabTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zoeken" } }
  },
  "localBaserowTableServiceConditionalForm": {
    "relatedFieldNotFound": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Het gerelateerde veld is niet gevonden." } },
    "addFilter": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Extra filter toevoegen" } },
    "noFilterTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "U hebt nog geen gegevensbronfilter gemaakt" } },
    "noFilterText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Met gegevensbronfilters kun je rijen in de Baserow tabel weergeven die van toepassing zijn op je voorwaarden." } },
    "filterTypeNotFound": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Het filtertype is niet compatibel." } },
    "noCompatibleFilterTypesErrorTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Geen passende filtertypes" } },
    "noCompatibleFilterTypesErrorMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Geen van uw velden heeft passende filtertypen" } },
    "formulaFilterInputPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tekst invoeren..." } },
    "useFormulaForValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Gebruik een formule voor dit filter" } },
    "useDefaultForValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Gebruik het standaardfilter voor dit veld" } },
    "textFilterInputPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tekst invoeren..." } }
  },
  "localBaserowTableSelector": {
    "databaseFieldLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Database" } },
    "viewFieldLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Weergave" } },
    "tableFieldLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tabel" } },
    "chooseNoView": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Niet geselecteerd" } },
    "dataSyncedTableDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Gesynchroniseerde tabel" } },
    "oneWayDataSyncedTableDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Eenrichtings gesynchroniseerd" } },
    "twoWayDataSyncedTableDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tweerichtings gesynchroniseerd" } }
  },
  "integrationType": {
    "localBaserow": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Lokaal Baserow" } },
    "localBaserowSummary": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Lokaal Baserow - " }, { "t": 4, "k": "name" }, { "t": 3, "v": ", " }, { "t": 4, "k": "username" }] } },
    "localBaserowWarning": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Door jouw account te autoriseren krijgt iedereen die bewerkingsrechten heeft voor de applicatie volledige toegang tot de gegevens waar jij toegang tot hebt. Het is mogelijk om een tweede gebruiker aan te maken, de juiste rechten te geven en die te gebruiken." } },
    "smtp": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "SMTP e-mail" } },
    "ai": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "AI" } },
    "slackBot": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Slack Bot" } }
  },
  "serviceType": {
    "localBaserowGetRow": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Rij ophalen" } },
    "localBaserowListRows": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Rijen ophalen" } },
    "localBaserowAggregateRows": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Veld samenvatten" } },
    "misconfigured": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Verkeerd geconfigureerd" } },
    "trashedField": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "In prullenbak gestopt veld" } },
    "localBaserowUpdateRow": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Een rij bijwerken" } },
    "localBaserowCreateRow": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Een rij maken" } },
    "localBaserowDeleteRow": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Een rij verwijderen" } },
    "localBaserowRowsCreatedDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wordt geactiveerd wanneer er een of meer rijen worden gemaakt in een Baserow-tabel." } },
    "coreHTTPRequest": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Stuur HTTP verzoek" } },
    "localBaserowRowsCreated": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Rijen aangemaakt" } },
    "localBaserowCreateRowDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Maak een nieuwe rij in een Baserow tabel." } },
    "localBaserowUpdateRowDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Werkt een bestaande rij in een Baserow-tabel bij." } },
    "localBaserowDeleteRowDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Verwijdert een rij in een Baserow-tabel." } },
    "localBaserowRowsUpdated": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Rijen zijn bijgewerkt" } },
    "localBaserowRowsUpdatedDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wordt geactiveerd wanneer rijen in een Baserow-tabel worden bijgewerkt." } },
    "localBaserowRowsDeleted": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Rijen zijn verwijderd" } },
    "localBaserowRowsDeletedDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wordt geactiveerd wanneer rijen worden verwijderd in een Baserow-tabel." } },
    "coreHTTPRequestDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Stuurt een HTTP-verzoek naar een opgegeven eindpunt." } },
    "errorUrlMissing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ontbrekende Url-eigenschap" } },
    "errorNoTableSelected": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Geen tabel geselecteerd" } },
    "errorFilterInError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ten minste \xE9\xE9n filter is verkeerd geconfigureerd" } },
    "errorSortingInError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ten minste \xE9\xE9n sortering is verkeerd geconfigureerd" } },
    "errorNoFieldSelected": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Geen veld geselecteerd" } },
    "errorNoAggregationTypeSelected": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Geen aggregatietype geselecteerd" } },
    "localBaserowGetRowDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Lees een enkele rij uit een Baserow tabel." } },
    "localBaserowListRowsDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Leest meerdere rijen uit een Baserow-tabel." } },
    "localBaserowAggregateRowsDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Vat een veld samen in een Baserow-tabel." } },
    "coreSMTPEmail": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Verstuur e-mail" } },
    "coreSMTPEmailDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Verstuurt een e-mail met SMTP-configuratie." } },
    "errorFromEmailMissing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ontbreekt in e-maileigenschap" } },
    "errorToEmailsMissing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Naar Email Eigenschap Ontbreekt" } },
    "coreRouter": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Router" } },
    "coreRouterEdgesRequired": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Minstens \xE9\xE9n rand is vereist" } },
    "coreRouterEdgeLabelRequired": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Een vertakkingslabel is nodig." } },
    "coreRouterEdgeConditionRequired": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Een vertakkingsvoorwaarde is vereist." } },
    "coreRouterDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Leidt de workflow naar de volgende vertakking op basis van een voorwaarde." } },
    "corePeriodic": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Periodieke trigger" } },
    "corePeriodicDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Triggert de workflow op periodieke basis met gespecificeerde intervallen" } },
    "corePeriodicErrorIntervalMissing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Een interval is vereist." } },
    "coreHTTPTrigger": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Een HTTP-verzoek ontvangen" } },
    "coreHTTPTriggerDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wordt geactiveerd wanneer een HTTP-verzoek wordt ontvangen." } },
    "coreIteration": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Iterator" } },
    "coreIterationDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Itereren op items." } },
    "errorIterationSourceMissing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ontbrekende broneigenschap" } },
    "aiAgent": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "AI prompt" } },
    "aiAgentDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "AI prompt uitvoeren met behulp van geconfigureerde generatieve AI-modellen." } },
    "errorNoIntegrationSelected": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Geen integratie geselecteerd" } },
    "errorNoAIProviderSelected": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Geen AI-aanbieder geselecteerd" } },
    "errorNoAIModelSelected": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Geen AI-model geselecteerd" } },
    "errorNoPromptProvided": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Geen prompt voorzien" } },
    "errorNoChoicesProvided": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Geen keuzes voor uitvoer type" } },
    "slackWriteMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Stuur een Slack-bericht" } },
    "slackWriteMessageDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Stuurt een bericht naar een specifiek Slack #kanaal" } },
    "slackWriteMessageMissingChannel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Een kanaal is vereist." } },
    "slackWriteMessageMissingMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Een bericht is vereist." } },
    "slackWriteMessageMissingIntegration": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Geen Slack-integratie geselecteerd." } },
    "localBaserowCreateRows": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Meerdere rijen aanmaken" } },
    "localBaserowCreateRowsDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Maakt meerdere nieuwe rijen aan in een Baserow-tabel." } },
    "localBaserowUpdateRows": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Meerdere rijen bijwerken" } },
    "localBaserowUpdateRowsDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Werkt meerdere bestaande rijen in een Baserow-tabel bij." } },
    "localBaserowFieldsUpdated": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Specifieke veldwaarden bijgewerkt" } },
    "localBaserowFieldsUpdatedDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wordt geactiveerd wanneer rijen worden bijgewerkt in specifieke velden van een Baserow-tabel." } },
    "coreManualTrigger": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Handmatige activering" } },
    "coreManualTriggerDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Start alleen wanneer een andere workflow-actie deze workflow start." } },
    "coreCSVFileReader": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Een CSV-bestand lezen" } },
    "coreCSVFileReaderDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Leest rijen uit een CSV-bestand." } },
    "coreStartWorkflow": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Workflow starten" } },
    "coreStartWorkflowDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Start een automatiseringsworkflow." } },
    "errorNoRowsSelected": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Geen rijen geselecteerd" } },
    "errorCSVFileMissing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "CSV-bestand-eigenschap ontbreekt" } },
    "errorCSVContentMissing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "CSV-gegevens-eigenschap ontbreekt" } },
    "errorNoWorkflowSelected": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Geen workflow geselecteerd" } },
    "errorWorkflowNotImmediateDispatch": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "De geselecteerde workflow moet een activering gebruiken die direct kan starten." } }
  },
  "userSourceType": {
    "localBaserow": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Baserow tabel authenticatie" } }
  },
  "localBaserowForm": {
    "user": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Gebruiker" } },
    "userMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Door deze verbinding te maken, geef je de applicatie toestemming om jouw account te gebruiken om wijzigingen aan te brengen in je lokale Baserow werkruimte." } }
  },
  "localBaserowTableServiceSortForm": {
    "noSortTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Je hebt nog geen gegevensbronsoort gemaakt" } },
    "noSortText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Met sorteringen kun je rijen op een veld sorteren." } },
    "sortBy": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sorteer op" } },
    "thenBy": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dan op" } },
    "addSort": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Extra sortering toevoegen" } },
    "noTableChosenForSorting": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kies een tabel om te beginnen met het sorteren van gegevensbronnen." } },
    "sortMisconfigured": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Het veld waar deze sortering aan gekoppeld is, is weggegooid." } }
  },
  "dataProviderType": {
    "dataSource": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Gegevensbron" } },
    "pageParameter": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Parameter" } }
  },
  "localBaserowIntegrationType": {
    "localBaserowWarning": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Door jouw account te autoriseren krijgt iedereen die bewerkingsrechten heeft voor de applicatie volledige toegang tot de gegevens waar jij toegang tot hebt. Het is mogelijk om een tweede gebruiker aan te maken, de juiste rechten te geven en die te gebruiken." } },
    "localBaserowSummary": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Lokaal Baserow - " }, { "t": 4, "k": "name" }, { "t": 3, "v": ", " }, { "t": 4, "k": "username" }] } },
    "localBaserowNoUser": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Lokale Baserow - Niet geconfigureerd" } }
  },
  "integrationsCommon": {
    "singleRow": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "enkele rij" } },
    "multipleRows": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "meerdere rijen" } }
  },
  "localBaserowAggregateRowsForm": {
    "filterTabTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Filters" } },
    "searchTabTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zoeken" } },
    "aggregationFieldLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Veld" } },
    "aggregationTypeLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aggregatie" } },
    "searchFieldPlaceHolder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Voer een zoekterm in..." } },
    "noTableChosenForFiltering": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kies een tabel om te beginnen met het gebruik van gegevensbronfilters." } }
  },
  "coreHTTPRequestServiceForm": {
    "namePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Naam..." } },
    "valuePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Waarde..." } },
    "headers": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Headers" } },
    "addQueryParam": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "queryparameter toevoegen" } },
    "addHeader": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "header toevoegen" } },
    "formData": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Formuliergegevens" } },
    "addFormData": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "formuliergegevens toevoegen" } },
    "bodyType": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Body type" } },
    "bodyContent": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Body inhoud" } },
    "urlPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Voer de eindpunt-URL in..." } },
    "bodyPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Verzoektekst toevoegen..." } },
    "timeoutPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Time-out invoeren..." } },
    "nameFieldRequired": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "De eigenschap naam is vereist." } },
    "nameFieldInvalid": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "De naam mag alleen alfanumerieke tekens, streepjes en onderstrepingstekens bevatten en mag niet beginnen met een streepje of onderstrepingsteken." } },
    "queryParams": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Query-parameters" } },
    "url": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Endpoint URL" } },
    "value": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Waarde" } },
    "seconds": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "seconden" } },
    "httpMethod": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "HTTP methode" } },
    "timeout": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Time-out" } },
    "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Naam" } }
  },
  "serviceRefinementForms": {
    "filterTabTitle": { "t": 0, "b": { "t": 1, "c": [{ "t": 2, "i": [{ "t": 3 }], "s": "Filter" }, { "t": 2, "i": [{ "t": 3 }], "s": "1 Filter" }, { "t": 2, "i": [{ "t": 4, "k": "count" }, { "t": 3, "v": " Filters" }] }] } },
    "sortTabTitle": { "t": 0, "b": { "t": 1, "c": [{ "t": 2, "i": [{ "t": 3 }], "s": "Sorteren" }, { "t": 2, "i": [{ "t": 3 }], "s": "1 Sortering" }, { "t": 2, "i": [{ "t": 4, "k": "count" }, { "t": 3, "v": " Sorteringen" }] }] } },
    "searchTabTitle": { "t": 0, "b": { "t": 1, "c": [{ "t": 2, "i": [{ "t": 3 }], "s": "Zoeken" }, { "t": 2, "i": [{ "t": 3 }], "s": "1 Zoekopdracht" }, { "t": 2, "i": [{ "t": 4, "k": "aantal" }, { "t": 3, "v": " Zoekopdrachten" }] }] } },
    "searchFieldPlaceHolder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Voer een zoekterm in..." } },
    "noTableChosenForFiltering": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kies een tabel om te beginnen met het gebruik van gegevensbronfilters." } },
    "noTableChosenForSorting": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kies een tabel om te beginnen met het sorteren van gegevensbronnen." } },
    "refinements": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Verfijningen" } }
  },
  "smtpIntegrationType": {
    "smtpSummary": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "SMTP - " }, { "t": 4, "k": "host" }, { "t": 3, "v": ":" }, { "t": 4, "k": "port" }] } }
  },
  "smtpForm": {
    "host": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "SMTP Host" } },
    "hostPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "smtp.gmail.com" } },
    "port": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "SMTP-poort" } },
    "portPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "587" } },
    "useTls": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "TLS gebruiken" } },
    "username": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Gebruikersnaam" } },
    "usernamePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }, { "t": 9 }, { "t": 3 }], "s": "your-email@example.com" } },
    "password": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wachtwoord" } },
    "passwordPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "je wachtwoord" } }
  },
  "smtpEmailForm": {
    "integrationDropdownLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Integraties" } },
    "fromEmail": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Van e-mail" } },
    "fromEmailPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }, { "t": 9 }, { "t": 3 }], "s": "sender@example.com" } },
    "fromName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Van Naam" } },
    "fromNamePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Je Naam" } },
    "toEmails": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Naar E-mails" } },
    "toEmailsPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }, { "t": 9 }, { "t": 3 }, { "t": 9 }, { "t": 3 }], "s": "ontvanger1@voorbeeld.com,ontvanger2@voorbeeld.com" } },
    "ccEmails": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "CC E-mails" } },
    "ccEmailsPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }, { "t": 9 }, { "t": 3 }, { "t": 9 }, { "t": 3 }], "s": "cc1@voorbeeld.com,cc2@voorbeeld.com" } },
    "bccEmails": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "BCC E-mails" } },
    "bccEmailsPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }, { "t": 9 }, { "t": 3 }, { "t": 9 }, { "t": 3 }], "s": "bcc1@voorbeeld.com,bcc2@voorbeeld.com" } },
    "subject": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Onderwerp" } },
    "subjectPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Het onderwerp van je e-mail" } },
    "bodyType": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Body Type" } },
    "bodyTypePlain": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Platte Tekst" } },
    "bodyTypeHtml": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "HTML" } },
    "body": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Body" } },
    "bodyPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "De inhoud van je e-mail..." } },
    "smtpConfigurationMode": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "SMTP-configuratie" } },
    "useInstanceSmtpSettings": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Gebruik de SMTP-server van de instantie" } }
  },
  "routerForm": {
    "defaultEdgeLabelLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Standaard vertakkingslabel" } },
    "defaultEdgeLabelPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Standaard" } },
    "defaultEdgeLabelDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kies optioneel het label dat moet worden weergegeven op de standaard vertakking." } },
    "branchesHeading": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Vertakkingen" } },
    "branchesDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Met vertakkingen kun je alleen knooppunten uitvoeren als aan een voorwaarde is voldaan. Vertakkingen worden van links naar rechts uitgevoerd totdat aan een voorwaarde is voldaan, anders wordt de standaard vertakking uitgevoerd. " } },
    "branchLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Label" } },
    "branchConditionLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Voorwaarde" } },
    "branchConditionPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Voer conditie in..." } },
    "addEdge": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Vertakking toevoegen" } },
    "edgeDefaultName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Vertakking" } },
    "noLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Geen label" } },
    "edgeDeletionLastEdge": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Je kunt de laatste vertakking niet verwijderen." } },
    "edgeDeletionHasOutput": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Een tak kan niet worden verwijderd als deze een uitgang heeft." } }
  },
  "periodicForm": {
    "intervalLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Interval" } },
    "intervalHelper": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kies hoe vaak je deze workflow wilt uitvoeren" } },
    "everyMinute": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Elke minuut" } },
    "everyHour": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Elk uur" } },
    "everyDay": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Elke dag" } },
    "everyWeek": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Elke week" } },
    "everyMonth": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Elke maand" } },
    "hour": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Uur" } },
    "minute": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Minuut" } },
    "dayOfWeek": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dag van de week" } },
    "dayOfMonth": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dag van de maand" } },
    "hourPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "0-23" } },
    "minutePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "0-59" } },
    "dayOfMonthPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "1-31" } },
    "minuteHelper": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Deze workflow wordt elke minuut uitgevoerd" } },
    "hourHelper": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Deze workflow wordt elk uur uitgevoerd op de opgegeven minuut in je lokale tijdzone (" }, { "t": 4, "k": "timezone" }, { "t": 3, "v": ")" }] } },
    "dayHelper": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Deze workflow wordt elke dag uitgevoerd op het opgegeven tijdstip in je lokale tijdzone (" }, { "t": 4, "k": "timezone" }, { "t": 3, "v": ")" }] } },
    "weekHelper": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Deze workflow wordt elke week uitgevoerd op de opgegeven dag en tijd in je lokale tijdzone (" }, { "t": 4, "k": "timezone" }, { "t": 3, "v": ")" }] } },
    "monthHelper": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Deze workflow wordt elke maand uitgevoerd op de opgegeven dag en tijd in je lokale tijdzone (" }, { "t": 4, "k": "timezone" }, { "t": 3, "v": ")." }] } },
    "deactivatedTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Periodieke trigger gedeactiveerd" } },
    "deactivatedText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Deze periodieke trigger is automatisch gedeactiveerd vanwege opeenvolgende fouten." } },
    "everyMinuteDefault": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Elke opgegeven minuut" } },
    "minuteFrequency": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Elke minuut" } },
    "minuteFrequencyPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "15" } }
  },
  "aiIntegrationType": {
    "inheritingWorkspace": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Werkruimte AI-instellingen erven" } },
    "overridingProviders": { "t": 0, "b": { "t": 1, "c": [{ "t": 2, "i": [{ "t": 3, "v": "Opheffen van " }, { "t": 4, "k": "count" }, { "t": 3, "v": " provider" }] }, { "t": 2, "i": [{ "t": 3, "v": "Overschrijving " }, { "t": 4, "k": "count" }, { "t": 3, "v": " providers" }] }] } }
  },
  "aiForm": {
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Configureer AI-providerinstellingen voor deze integratie. Standaard worden de AI-instellingen voor de werkruimte ge\xEBrfd." } },
    "workspaceSettingsTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Werkruimte AI-instellingen" } },
    "workspaceSettingsDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Deze integratie erft standaard AI-providerinstellingen van je werkruimte. Hieronder kun je specifieke providers overschrijven." } },
    "overrideWorkspaceSettings": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Werkruimte-instellingen voor deze provider overschrijven" } },
    "inherited": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ge\xEBrfd" } },
    "overridden": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Overschreven" } }
  },
  "aiAgentServiceForm": {
    "integrationLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Integratie" } },
    "providerLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "AI-aanbieder" } },
    "providerPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Selecteer een AI-provider..." } },
    "modelLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "AI-model" } },
    "modelPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Selecteer een model..." } },
    "outputTypeLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Uitvoer type" } },
    "outputTypeHelp": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kies hoe de AI moet reageren. Als je keuzes definieert, dwing je het model om alleen te reageren met een van die keuzes." } },
    "outputTypeText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tekst" } },
    "outputTypeChoice": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Keuze" } },
    "temperatureLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Temperatuur" } },
    "temperaturePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "e.g. 0.7" } },
    "temperatureHelp": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Regelt willekeur. Lagere waarden (0-0,3) zijn meer gefocust en deterministisch. Hogere waarden (0,7-2,0) zijn creatiever en gevarieerder." } },
    "promptLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Prompt" } },
    "promptPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Voer hier je vraag in..." } },
    "choicesLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Keuzes" } },
    "choicePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Voer een keuzeoptie in..." } },
    "addChoice": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Keuze toevoegen" } },
    "choicesRequired": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Minstens \xE9\xE9n keuze is vereist" } }
  },
  "coreIterationServiceForm": {
    "source": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Bron" } },
    "sourcePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kies een bron..." } }
  },
  "slackBotIntegrationType": {
    "slackBotSummary": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Slack Bot" } },
    "slackBotNoToken": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Slack Bot - Niet geconfigureerd" } }
  },
  "slackBotForm": {
    "tokenLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Bot gebruiker token" } },
    "tokenPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "xoxb-1234-..." } },
    "tokenMustStartWith": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": 'Token moet beginnen met "xoxb-".' } },
    "supportHeading": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Hulp nodig?" } },
    "supportDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Als je hulp nodig hebt bij het koppelen met je Slack-app, raadpleeg dan de onderstaande stappen." } },
    "supportSetupHeading": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "1. De app instellen" } },
    "supportSetupDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Afhankelijk van de instellingen van je Slack-werkruimte, kun je misschien een nieuwe Slack-app maken. Anders moet een beheerder dit voor je doen. Als je een bestaande app hergebruikt die berichten kan schrijven, ga dan naar het gedeelte 'Koppelen met je Slack app'." } },
    "supportSetupStep1": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": 'Navigeer naar de &lt;a href="https://api.slack.com/apps" target="_blank"&gt;apps&lt;/a&gt; pagina van je werkruimte.' } },
    "supportSetupStep2": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cre\xEBer een nieuwe app, kies 'Vanuit niks' en voer een naam in. Selecteer de werkruimte waarin je app moet werken, en klik 'Maken'." } },
    "supportSetupStep3": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Navigeer in de linker zijbalk naar 'OAuth &amp; Toestemmingen', scroll naar beneden naar Scopes en selecteer onder 'Bot Token Scopes' 'OAuth scope toevoegen'." } },
    "supportSetupStep4": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Om je app berichten te laten posten, voeg je de scope &lt;pre&gt;chat:write&lt;/pre&gt; toe." } },
    "supportPairingHeading": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "2. Koppelen met je Slack-app" } },
    "supportPairingStep1": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Als je app nieuw is: ga naar 'Instellingen' &gt; 'App installeren'. Klik op de groene knop om de app op je werkruimte te installeren." } },
    "supportPairingStep2": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kopieer uw 'Bot Gebruiker OAuth Token' en sla deze op in het veld 'Bot Gebruiker Token' in dit formulier." } },
    "supportPairingStep3": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }, { "t": 9 }, { "t": 3 }], "s": "Tot slot, als je app nieuw is: nodig in Slack je app uit voor het door jou gekozen kanaal met &lt;pre&gt;/invite @yourAppName yourChannel&lt;/pre&gt;" } },
    "supportSetupStep1Link": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "apps pagina" } }
  },
  "slackWriteMessageServiceForm": {
    "alertMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Deze actie moet worden gekoppeld met een Slack-app. Volg de handleiding in de integratie popup om aan de slag te gaan." } },
    "integrationLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Integratie" } },
    "channelLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kanaal" } },
    "channelPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Een kanaalnaam invoeren" } },
    "messageLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Bericht" } },
    "messagePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Voer een bericht in..." } },
    "channelNoPrefix": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Verwijder de '#' voor de kanaalnaam." } }
  },
  "localBaserowServiceForm": {
    "integrationDropdownLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Integratie" } },
    "rowIdLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Rij-ID" } },
    "rowIdPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kies \xE9\xE9n rij-ID" } }
  },
  "localBaserowUpsertRowServiceForm": {
    "fieldMappingPlaceholderArray": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kies een arraywaarde, bijv. [42]" } },
    "fieldMappingPlaceholderString": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kies een stringwaarde, bijv. \\'baserow\\'" } },
    "fieldMappingPlaceholderNumber": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kies een getalwaarde, bijv. 42" } },
    "fieldMappingPlaceholderBoolean": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kies een booleaanse waarde, bijv. true" } },
    "fieldMappingPlaceholderDate": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kies een datumwaarde, bijv. 2025-07-25" } },
    "fieldMappingPlaceholderDecimal": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kies een decimale waarde, bijv. 3.14" } },
    "fieldMappingPlaceholderDuration": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kies een tijdsduurwaarde, bijv. 1:23:40" } },
    "noTableSelectedMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kies een tabel om te beginnen met het configureren van je velden." } },
    "noWritableFields": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Deze tabel bevat geen beschrijfbare velden." } }
  },
  "localBaserowFieldsUpdatedForm": {
    "fieldLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Velden" } },
    "fieldHelper": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "De workflow wordt alleen geactiveerd wanneer de waarde van een van deze velden verandert." } }
  },
  "coreCSVFileReaderServiceForm": {
    "inputType": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Bron" } },
    "inputTypeFile": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Bestand" } },
    "inputTypeContent": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Inhoud" } },
    "file": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "CSV-bestand" } },
    "filePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kies een CSV-bestand..." } },
    "csv": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "CSV-gegevens" } },
    "csvPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Voer CSV-gegevens in..." } },
    "separator": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Scheidingsteken" } },
    "encoding": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Codering" } },
    "firstLineIsHeader": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Eerste regel is header" } },
    "comma": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Komma" } },
    "semicolon": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Puntkomma" } },
    "tab": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tab" } },
    "pipe": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pipe" } },
    "utf8": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "UTF-8" } },
    "utf8Bom": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "UTF-8 met BOM" } },
    "latin1": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Latin-1" } }
  },
  "coreStartWorkflowServiceForm": {
    "automation": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Automatisering" } },
    "workflow": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Workflow" } },
    "workflowHelperText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Alleen gepubliceerde workflows met een handmatige activering kunnen worden gestart. Als deze workflow niet-gepubliceerde wijzigingen heeft, wordt de laatst gepubliceerde versie uitgevoerd." } }
  },
  "localBaserowDeleteRowServiceForm": {
    "rowIdLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Rij-ID('s)" } },
    "rowIdPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kies een rij-ID of een array van rij-ID's" } },
    "rowIdHelper": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Kies \xE9\xE9n rij-ID of een array van rij-ID's. Er kunnen maximaal " }, { "t": 4, "k": "limit" }, { "t": 3, "v": " rijen tegelijk worden verwijderd." }] } }
  },
  "localBaserowCreateRowsServiceForm": {
    "rowsLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Rijen" } },
    "rowsPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kies een lijst met rij-objecten" } },
    "rowsHelper": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "De formule moet een array van rij-objecten teruggeven, of een JSON-string die daarnaar kan worden geparseerd. Gebruik veldnamen of veld-ID's als objectsleutels. Er kunnen maximaal " }, { "t": 4, "k": "limit" }, { "t": 3, "v": " rijen tegelijk worden aangemaakt." }] } }
  },
  "localBaserowUpdateRowsServiceForm": {
    "rowsLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Rijen" } },
    "rowsPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kies een lijst met rij-objecten met ID's" } },
    "rowsHelper": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "De formule moet een array van rij-objecten teruggeven, of een JSON-string die daarnaar kan worden geparseerd. Elk object moet een id-eigenschap bevatten. Gebruik veldnamen of veld-ID's als objectsleutels. Er kunnen maximaal " }, { "t": 4, "k": "limit" }, { "t": 3, "v": " rijen tegelijk worden bijgewerkt." }] } }
  }
};

export { resource as default };
//# sourceMappingURL=nl-D3ZK94dX.mjs.map
