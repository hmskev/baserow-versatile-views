!(function() {
  try {
    var e = false ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
    var n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "768463be-b9be-4250-90c8-5ba69285e1f2", e._sentryDebugIdIdentifier = "sentry-dbid-768463be-b9be-4250-90c8-5ba69285e1f2");
  } catch (e2) {
  }
})();
const resource = {
  "localBaserowGetRowForm": {
    "rowFieldHelpText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Lascia vuoto per ritornare la prima riga." } },
    "noTableChosenForSorting": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Scegli una tabella per iniziare ad utilizzare gli ordinamenti delle sorgenti dati." } },
    "rowFieldLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "ID Riga" } },
    "noTableChosenForFiltering": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Scegli una tabella per iniziare ad utilizzare i filtri delle sorgenti dati." } },
    "invalidFormula": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "La formula non \xE8 valida" } },
    "rowFieldPlaceHolder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Seleziona un ID di riga" } },
    "searchFieldPlaceHolder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Inserisci un termine di ricerca..." } },
    "filterTabTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Filtri" } },
    "searchTabTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cerca" } }
  },
  "localBaserowListRowsForm": {
    "filterTabTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Filtri" } },
    "searchTabTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cerca" } },
    "sortTabTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ordinamenti" } },
    "searchFieldPlaceHolder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Inserisci un termine di ricerca..." } },
    "noTableChosenForFiltering": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Scegli una tabella per iniziare ad utilizzare i filtri delle sorgenti dati." } },
    "noTableChosenForSorting": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Scegli una tabella per iniziare ad utilizzare gli ordinamenti delle sorgenti dati." } },
    "defaultResultCountHelp": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Il numero predefinito di record che questa origine dati recuperer\xE0 sulla tua pagina. Impostare il valore a 0, e utilizzarlo su un elemento collezione, migliorer\xE0 le prestazioni al caricamento della pagina recuperando i record solo quando l'elemento \xE8 paginato." } }
  },
  "localBaserowTableServiceConditionalForm": {
    "noCompatibleFilterTypesErrorTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nessun tipo di filtro compatibile" } },
    "noCompatibleFilterTypesErrorMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nessuno dei tuoi campi ha un tipo di filtro compatibile" } },
    "addFilter": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aggiungi un altro filtro" } },
    "noFilterTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Non hai ancora creato un filtro sulle sorgenti dati" } },
    "noFilterText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "I filtri sulle sorgenti dati ti consentono di mostrare le righe della tabella Baserow che si applicano alle tue condizioni." } },
    "relatedFieldNotFound": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Impossibile trovare il campo correlato." } },
    "filterTypeNotFound": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Il tipo di filtro non \xE8 compatibile." } },
    "formulaFilterInputPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Inserisci il testo..." } },
    "useFormulaForValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Utilizza una formula per questo filtro" } },
    "useDefaultForValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Utilizza il filtro di default per questo campo" } }
  },
  "localBaserowTableServiceSortForm": {
    "noSortTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Non hai ancora creato un ordinamento per le sorgenti dati" } },
    "noSortText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "L'ordinamento ti permette di ordinare le righe per un campo." } },
    "noTableChosenForSorting": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Scegli una tabella per iniziare ad utilizzare gli ordinamenti delle sorgenti dati." } },
    "sortBy": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ordina per" } },
    "thenBy": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Poi per" } },
    "addSort": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aggiungi un ordinamento" } }
  },
  "integrationType": {
    "localBaserow": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Baserow locale" } },
    "localBaserowSummary": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Baserow locale - " }, { "t": 4, "k": "name" }, { "t": 3, "v": ", " }, { "t": 4, "k": "surname" }] } },
    "localBaserowWarning": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "L'autorizzazione del tuo account fornisce a chiunque abbia autorizzazioni di modifica per l'applicazione l'accesso completo ai dati a cui hai accesso. \xC8 possibile creare un secondo utente, fornire i permessi corretti e utilizzare quest'ultimo." } },
    "smtp": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Email SMTP" } },
    "slackBot": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Bot Slack" } }
  },
  "serviceType": {
    "localBaserowGetRow": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Leggi single Row" } },
    "localBaserowListRows": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Elenca multiple rows" } },
    "localBaserowAggregateRows": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aggrega campo" } },
    "misconfigured": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Errore di configurazione" } },
    "trashedField": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Campo eliminato" } }
  },
  "userSourceType": {
    "localBaserow": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Autenticazione tramite tabella di Baserow" } }
  },
  "localBaserowForm": {
    "user": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Utente" } },
    "userMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Creando questa connessione, autorizzi l'applicazione a utilizzare il tuo account per apportare modifiche nell'area di lavoro Baserow locale." } }
  },
  "dataProviderType": {
    "dataSource": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sorgente dati" } },
    "pageParameter": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Parametro" } }
  },
  "localBaserowTableSelector": {
    "viewFieldLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Vista" } },
    "tableFieldLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tabella" } },
    "chooseNoView": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Non selezionato" } },
    "databaseFieldLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Database" } }
  },
  "localBaserowIntegrationType": {
    "localBaserowSummary": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Baserow Locale - " }, { "t": 4, "k": "name" }, { "t": 3, "v": ", " }, { "t": 4, "k": "username" }] } },
    "localBaserowNoUser": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Baserow Locale - Non configurato" } },
    "localBaserowWarning": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Autorizzare il tuo account consente a chiunque abbia i permessi di modifica sull'applicazione di avere pieno accesso ai dati a cui hai accesso tu. \xC8 possibile creare un secondo utente, assegnare i permessi appropriati e utilizzare quello." } }
  },
  "integrationsCommon": {
    "singleRow": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Singola riga" } },
    "multipleRows": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pi\xF9 righe" } }
  },
  "localBaserowAggregateRowsForm": {
    "aggregationFieldLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Campo" } },
    "aggregationTypeLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aggregazione" } },
    "searchFieldPlaceHolder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Inserisci un termine per la ricerca..." } },
    "noTableChosenForFiltering": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Scegli una tabella per iniziare ad usare i filtri." } },
    "filterTabTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Filtri" } },
    "searchTabTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cerca" } }
  },
  "slackBotForm": {
    "supportSetupDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "A seconda delle impostazioni del tuo spazio di lavoro Slack, potresti essere in grado di creare una nuova app Slack. Altrimenti, un amministratore dovr\xE0 farlo per te. Se stai riutilizzando un'app esistente che pu\xF2 scrivere messaggi, salta alla sezione chiamata 'Pairing with your Slack app'." } }
  },
  "routerForm": {
    "branchesDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "I rami permettono di eseguire i nodi solo quando una condizione \xE8 soddisfatta. I rami vengono eseguiti da sinistra a destra finch\xE9 una condizione \xE8 soddisfatta, altrimenti il ramo predefinito verr\xE0 eseguito. " } }
  }
};

export { resource as default };
//# sourceMappingURL=it-CarVBU27.mjs.map
