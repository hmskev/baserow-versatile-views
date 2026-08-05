!(function() {
  try {
    var e = false ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
    var n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "db31bd73-eb00-4bc0-9882-7451aba3db78", e._sentryDebugIdIdentifier = "sentry-dbid-db31bd73-eb00-4bc0-9882-7451aba3db78");
  } catch (e2) {
  }
})();
const resource = {
  "automationWorkflow": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Flusso di lavoro" } }
  },
  "automationWelcomeGuidedTourStep": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Benvenuto in Baserow\u202FAutomations!" } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Facciamo un breve tour. Vedrai come impostare i trigger, aggiungere azioni, testare il tuo flusso di lavoro e pubblicarlo \u2014 nessuna codifica richiesta." } }
  },
  "automationGraphGuidedTourStep": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Gestisci il tuo grafo del flusso di lavoro qui" } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Crea un trigger e azioni qui per definire cosa dovrebbe fare il flusso di lavoro. Seleziona un trigger o un'azione per configurarlo nel pannello laterale." } }
  },
  "automationTestRunGuidedTourStep": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Testa il tuo flusso di lavoro" } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Quando sei pronto, avvia una prova per vedere il tuo flusso di lavoro in azione. Il trigger verr\xE0 eseguito una sola volta per simulare un'esecuzione completa." } }
  },
  "automationHistoryGuidedTourStep": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Visualizza la cronologia del flusso di lavoro" } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Utilizza il pannello Cronologia per rivedere le esecuzioni di test precedenti e quelle pubblicate. \xC8 un ottimo modo per eseguire il debug o confermare i risultati." } }
  },
  "automationPublishGuidedTourStep": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pubblica il tuo flusso di lavoro" } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dopo aver testato e perfezionato la configurazione, pubblica il flusso di lavoro per renderlo operativo. Il suo trigger si avvier\xE0 automaticamente secondo la pianificazione." } }
  },
  "automationWorkflowStateGuidedTourStep": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Controllare lo stato del flusso di lavoro" } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Da qui, puoi mettere in pausa o riprendere il tuo flusso di lavoro in qualsiasi momento. Hai sempre il controllo su se \xE8 attivo o disattivato." } }
  },
  "automationDocsGuidedTourStep": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Esplora la documentazione" } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Se dovessi riscontrare difficolt\xE0 o desiderassi saperne di pi\xF9, fai clic sul pulsante evidenziato per accedere a guide dettagliate e domande frequenti sulla creazione di automazioni in Baserow." } }
  },
  "sidebarComponentAutomation": {
    "createAutomationWorkflow": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nuovo flusso di lavoro" } }
  },
  "createAutomationWorkflowModal": {
    "header": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Creare un flusso di lavoro" } },
    "submit": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aggiungi flusso di lavoro" } }
  },
  "automationWorkflowForm": {
    "defaultName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Flusso di lavoro" } },
    "nameTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nome" } },
    "nameSubtitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nome univoco del flusso di lavoro" } },
    "namePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Inserisci un nome..." } }
  },
  "duplicateAutomationWorkflowJobType": {
    "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Duplicare il flusso di lavoro di automazione" } },
    "duplicating": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Duplicazione" } },
    "duplicatedTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Flusso di lavoro duplicato" } }
  },
  "trashType": {
    "workflow": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "flusso di lavoro" } },
    "automation": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "automazione" } }
  },
  "generalSettings": {
    "titleOverview": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Generale" } },
    "nameLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nome automazione" } },
    "notificationLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Notifiche" } },
    "notificationCheckboxLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ricevi una notifica quando questa automazione fallisce" } },
    "cantUpdateAutomationTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Impossibile aggiornare l'automazione" } },
    "cantUpdateAutomationDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Spiacenti, non \xE8 stato possibile aggiornare l'automazione." } }
  },
  "workflowGeneralSettings": {
    "titleOverview": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Impostazioni del flusso di lavoro" } },
    "nameLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nome del flusso di lavoro" } },
    "workflowDisabledRecipientsLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Destinatari della notifica" } },
    "workflowDisabledRecipientsHelp": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "I membri di questo spazio di lavoro riceveranno una notifica in-app se questo flusso di lavoro viene disabilitato automaticamente." } },
    "selectWorkflowDisabledRecipients": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Selezionare i destinatari" } },
    "noWorkflowDisabledRecipients": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nessun destinatario selezionato." } },
    "cantUpdateWorkflowTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Impossibile aggiornare il flusso di lavoro" } },
    "cantUpdateWorkflowDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Spiacenti, non \xE8 stato possibile aggiornare il flusso di lavoro." } }
  },
  "workflowDisabledNotification": {
    "body": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Il flusso di lavoro " }, { "t": 4, "k": "name" }, { "t": 3, "v": " \xE8 stato disabilitato." }] } }
  },
  "integrationSettings": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Integrazioni" } },
    "noIntegrationMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Non hai ancora creato alcuna integrazione. Puoi crearle aggiungendo un'origine dati, un'azione o l'autenticazione dell'utente." } },
    "integrationMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\xC8 possibile creare nuove integrazioni aggiungendo un'origine dati, un'azione o l'autenticazione dell'utente." } }
  },
  "automationHeader": {
    "startTestRun": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Avviare l'esecuzione del test" } },
    "stopTestRun": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Interrompi test" } },
    "publishBtn": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pubblica" } },
    "settingsBtn": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Impostazioni" } },
    "historyBtn": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cronologia" } },
    "docsBtn": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Documenti" } },
    "switchLabelDraft": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Bozze" } },
    "switchLabelDisabled": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Disattivo" } },
    "switchLabelPaused": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "In pausa" } },
    "switchLabelLive": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Attiva" } },
    "lastPublished": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ultimo aggiornamento" } }
  },
  "dataProviderType": {
    "currentIteration": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Iterazione attuale" } },
    "item": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Elemento" } },
    "previousNode": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nodo precedente" } }
  },
  "nodeSidePanel": {
    "labelTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Etichetta" } }
  },
  "historySidePanel": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cronologia" } },
    "noRunsTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nessuna esecuzione" } },
    "noRunsDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Una volta eseguito questo flusso di lavoro, i risultati verranno visualizzati qui." } },
    "statusStarted": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "In elaborazione..." } },
    "statusSuccess": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Eseguito con successo" } },
    "statusError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Impossibile eseguire" } },
    "statusSuccessBadge": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Completato" } },
    "statusErrorBadge": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Fallito" } },
    "statusDisabled": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Disabilitato da Baserow" } },
    "successfulRuns": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Esecuzioni riuscite" } },
    "completedInSeconds": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Completato in " }, { "t": 4, "k": "s" }, { "t": 3, "v": " secondi." }] } },
    "completedInLessThanSecond": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Completato in meno di 1 secondo." } },
    "running": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "In esecuzione per " }, { "t": 4, "k": "at" }, { "t": 3, "v": "s" }] } },
    "failedRuns": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Esecuzioni fallite" } },
    "errorHideDetails": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nascondi i dettagli" } },
    "errorShowDetails": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mostra i dettagli" } },
    "runNumber": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Eseguire " }, { "t": 4, "k": "n" }] } },
    "runCount": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "n" }, { "t": 3, "v": " esecuzioni" }] } },
    "testRun": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Test" } },
    "showResult": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mostra risultati" } }
  },
  "nodeType": {
    "triggerDeletionError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "I trigger non possono essere eliminati, ma solo sostituiti." } },
    "localBaserowRowsCreatedLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Vengono create righe in " }, { "t": 4, "k": "tableName" }] } },
    "localBaserowRowsUpdatedLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Le righe vengono aggiornate in " }, { "t": 4, "k": "tableName" }] } },
    "localBaserowRowsDeletedLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Le righe vengono eliminate in " }, { "t": 4, "k": "tableName" }] } },
    "localBaserowCreateRowLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Crea una riga in " }, { "t": 4, "k": "tableName" }] } },
    "localBaserowUpdateRowLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Aggiorna una riga in " }, { "t": 4, "k": "tableName" }] } },
    "localBaserowDeleteRowLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Elimina una riga in " }, { "t": 4, "k": "tableName" }] } },
    "localBaserowGetRowLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Leggi una riga in " }, { "t": 4, "k": "tableName" }] } },
    "localBaserowListRowsLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Elenca le righe in " }, { "t": 4, "k": "tableName" }] } },
    "localBaserowAggregateRowsLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Riepiloga le righe in " }, { "t": 4, "k": "tableName" }] } },
    "httpRequestLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Invia una richiesta HTTP" } },
    "smtpEmailLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Invia un'e-mail" } },
    "routerLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Segui 1 dei " }, { "t": 4, "k": "edgeCount" }, { "t": 3, "v": " rami" }] } },
    "iterationLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Iterare sugli elementi" } },
    "defaultEdgeLabelFallback": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Predefinito" } },
    "routerWithOutputNodesDeleteError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Non pu\xF2 essere eliminato finch\xE9 non vengono rimossi i suoi " }, { "t": 4, "k": "outputCount" }, { "t": 3, "v": " nodi di output." }] } },
    "routerWithOutputNodesReplaceError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Non pu\xF2 essere sostituito finch\xE9 non vengono rimossi i suoi " }, { "t": 4, "k": "outputCount" }, { "t": 3, "v": " nodi di output." }] } },
    "iteratorWithChildrenNodesDeleteError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Non pu\xF2 essere eliminato finch\xE9 non vengono rimossi i suoi nodi figli." } },
    "iteratorWithChildrenNodesReplaceError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Non pu\xF2 essere sostituito finch\xE9 non vengono rimossi i suoi nodi figli." } },
    "periodicTriggerLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Trigger periodico" } },
    "aiAgent": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "prompt dell'IA" } },
    "slackWriteMessageName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Invia un messaggio su Slack" } },
    "slackWriteMessageLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Invia un messaggio a #" }, { "t": 4, "k": "channel" }] } }
  },
  "workflowNode": {
    "actionDelete": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cancella" } },
    "actionReplace": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sostituisci" } },
    "actionDuplicate": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Duplica" } },
    "actionConfigure": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Configura" } },
    "beforeLabelTrigger": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Inizia quando" } },
    "beforeLabelAction": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Allora" } },
    "beforeLabelCondition": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Se la condizione \xE8 soddisfatta" } },
    "beforeLabelConditionDefault": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Se nessuna delle condizioni \xE8 soddisfatta" } },
    "beforeLabelRepeat": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Per ogni elemento" } },
    "moreEdit": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Modifica" } },
    "moreReplace": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sostituisci" } },
    "nodeOptions": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Opzioni nodo" } },
    "displayLabelDebug": { "t": 0, "b": { "t": 1, "c": [{ "t": 2, "i": [{ "t": 3, "v": "ID: " }, { "t": 4, "k": "id" }] }, { "t": 2, "i": [{ "t": 3, "v": "Precedente: " }, { "t": 4, "k": "previousNodeId" }] }, { "t": 2, "i": [{ "t": 4, "k": "outputUid" }] }] } },
    "moreDuplicate": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Duplica" } }
  },
  "workflowAddNode": {
    "displayTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Crea nodo di automazione" } }
  },
  "workflowNodeContext": {
    "searchPlaceholderTrigger": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cerca un trigger..." } },
    "searchPlaceholderActions": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cerca azioni..." } },
    "noResults": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nessun risultato trovato" } }
  },
  "serviceType": {
    "periodicTrigger": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Trigger periodico" } },
    "periodicTriggerDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Attiva il flusso di lavoro periodicamente a intervalli specificati" } },
    "periodicTriggerTriggeredAt": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Attivato alle" } },
    "errorIntervalMissing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\xC8 necessario un intervallo." } },
    "coreHTTPTrigger": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Trigger HTTP" } },
    "coreHTTPTriggerDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ricevere richieste HTTP per attivare flussi di lavoro" } }
  },
  "workflowEditor": {
    "chooseEvent": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Scegli un evento..." } }
  },
  "simulateDispatch": {
    "sampleDataLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Risultato" } },
    "triggerNodeAwaitingEvent": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Il nodo \xE8 in attesa. Si prega di attivare manualmente l'evento per popolare il payload e completare il test." } },
    "simulationInProgress": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Il test del nodo \xE8 in corso..." } },
    "errorNodeNotConfigured": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Il nodo deve essere configurato prima di poter essere testato." } },
    "errorPreviousNodeNotConfigured": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": 'Il nodo precedente "' }, { "t": 4, "k": "node" }, { "t": 3, "v": '" deve essere configurato.' }] } },
    "errorPreviousNodesNotTested": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": 'Il nodo precedente "' }, { "t": 4, "k": "node" }, { "t": 3, "v": '" deve essere testato per primo.' }] } },
    "buttonLabelTest": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Testa evento" } },
    "buttonLabelTestAgain": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Testa nuovamente evento" } },
    "testNodeDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Esegui questo test per confermare che la configurazione sia corretta. I dati ottenuti da questo test potranno essere utilizzati nelle fasi successive." } },
    "buttonLabelShowPayload": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mostra payload" } },
    "buttonLabelShowError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mostra errore" } },
    "sampleDataModalTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Payload per " }, { "t": 4, "k": "nodeLabel" }] } },
    "sampleDataModalSubTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Payload JSON" } },
    "sampleDataCopy": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Copia" } },
    "errorOccurred": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Si \xE8 verificato un errore..." } },
    "sampleDataCopied": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Il payload \xE8 stato copiato negli appunti" } }
  }
};

export { resource as default };
//# sourceMappingURL=it-Db398rGW.mjs.map
