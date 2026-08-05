!(function() {
  try {
    var e = false ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
    var n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "c021666a-4b25-4f8c-86ee-cf68dc06ed30", e._sentryDebugIdIdentifier = "sentry-dbid-c021666a-4b25-4f8c-86ee-cf68dc06ed30");
  } catch (e2) {
  }
})();
const resource = {
  "automationWorkflow": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Proces" } }
  },
  "automationWelcomeGuidedTourStep": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Witamy w module automatyzacji Baserow!" } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zapraszamy na kr\xF3tk\u0105 wycieczk\u0119, podczas kt\xF3rej dowiesz si\u0119, jak skonfigurowa\u0107 triggery (wyzwalacze) i operacje oraz jak przetestowa\u0107 i opublikowa\u0107 proces \u2014 wszystko w trybie \u201Cno-code\u201D." } }
  },
  "automationGraphGuidedTourStep": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tutaj mo\u017Cesz modyfikowa\u0107 schemat procesu" } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tutaj mo\u017Cna doda\u0107 trigger oraz operacje, kt\xF3re okre\u015Bl\u0105 funkcj\u0119 procesu. Kliknij w trigger lub operacj\u0119, \u017Ceby w panelu bocznym skonfigurowa\u0107 opcje." } }
  },
  "automationTestRunGuidedTourStep": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Przetestuj proces" } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Jak sko\u0144czysz, przetestuj sw\xF3j proces, \u017Ceby zobaczy\u0107 jak dzia\u0142a. W trakcie testu trigger zostanie uruchomiony jeden raz, po czym odb\u0119dzie si\u0119 symulacja pe\u0142nego cyklu procesu." } }
  },
  "automationHistoryGuidedTourStep": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wy\u015Bwietl histori\u0119 przebieg\xF3w procesu" } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "W panelu historii mo\u017Cesz przejrze\u0107 wyniki test\xF3w oraz przebiegi opublikowanych proces\xF3w. To \u015Bwietny spos\xF3b na sprawdzenie rezultat\xF3w lub analiz\u0119 b\u0142\u0119d\xF3w." } }
  },
  "automationPublishGuidedTourStep": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Opublikuj proces" } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Po przetestowaniu i dopracowaniu konfiguracji nowy proces nale\u017Cy opublikowa\u0107. Po publikacji trigger b\u0119dzie si\u0119 uruchamia\u0142 automatycznie i zgodnie z ustawieniami." } }
  },
  "automationWorkflowStateGuidedTourStep": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ustaw status procesu" } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tutaj mo\u017Cesz wstrzyma\u0107 lub wznowi\u0107 proces \u2013 zawsze masz pe\u0142n\u0105 kontrol\u0119 nad tym, czy proces jest aktywny, czy nie." } }
  },
  "automationDocsGuidedTourStep": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dokumentacja" } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Je\u017Celi nie wiesz, co zrobi\u0107 lub chcesz dowiedzie\u0107 si\u0119 wi\u0119cej o module automatyzacji Baserow, kliknij pod\u015Bwietlony przycisk." } }
  },
  "sidebarComponentAutomation": {
    "createAutomationWorkflow": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nowy proces" } }
  },
  "createAutomationWorkflowModal": {
    "header": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Utw\xF3rz proces" } },
    "submit": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dodaj proces" } }
  },
  "automationWorkflowForm": {
    "defaultName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Proces" } },
    "nameTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nazwa" } },
    "nameSubtitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Unikalna nazwa procesu" } },
    "namePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wpisz nazw\u0119..." } }
  },
  "duplicateAutomationWorkflowJobType": {
    "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zduplikuj proces" } },
    "duplicating": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Duplikowanie" } },
    "duplicatedTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Proces zosta\u0142 zduplikowany" } }
  },
  "trashType": {
    "workflow": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "proces" } },
    "automation": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "automatyzacja" } }
  },
  "generalSettings": {
    "titleOverview": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Og\xF3lne" } },
    "nameLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nazwa automatyzacji" } },
    "notificationLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Powiadomienia" } },
    "notificationCheckboxLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Powiadomienia o b\u0142\u0119dach w przebiegu automatyzacji" } },
    "cantUpdateAutomationTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nie uda\u0142o si\u0119 zaktualizowa\u0107 automatyzacji" } },
    "cantUpdateAutomationDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Przepraszamy, nie uda\u0142o si\u0119 zaktualizowa\u0107 automatyzacji." } }
  },
  "workflowGeneralSettings": {
    "titleOverview": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ustawienia procesu" } },
    "nameLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nazwa procesu" } },
    "workflowDisabledRecipientsLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Odbiorcy powiadomie\u0144" } },
    "workflowDisabledRecipientsHelp": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Je\u017Celi proces zostanie automatycznie wy\u0142\u0105czony, wskazani u\u017Cytkownicy otrzymaj\u0105 powiadomienie." } },
    "selectWorkflowDisabledRecipients": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wybierz odbiorc\xF3w powiadomie\u0144" } },
    "noWorkflowDisabledRecipients": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nie wybrano odbiorc\xF3w powiadomie\u0144." } },
    "cantUpdateWorkflowTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nie uda\u0142o si\u0119 zaktualizowa\u0107 procesu" } },
    "cantUpdateWorkflowDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Przepraszamy, nie uda\u0142o si\u0119 zaktualizowa\u0107 procesu." } }
  },
  "workflowDisabledNotification": {
    "body": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Proces " }, { "t": 4, "k": "name" }, { "t": 3, "v": " zosta\u0142 wy\u0142\u0105czony." }] } }
  },
  "integrationSettings": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Integracje" } },
    "noIntegrationMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nie utworzono jeszcze \u017Cadnych integracji. Aby skonfigurowa\u0107 integracj\u0119, dodaj \u017Ar\xF3d\u0142o danych, operacj\u0119 lub uwierzytelnienie u\u017Cytkownika." } },
    "integrationMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nowe integracje mo\u017Cna utworzy\u0107 poprzez dodanie \u017Ar\xF3d\u0142a danych, operacji lub uwierzytelnienia u\u017Cytkownika." } }
  },
  "automationHeader": {
    "startTestRun": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Przetestuj" } },
    "stopTestRun": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zatrzymaj test" } },
    "publishBtn": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Opublikuj" } },
    "settingsBtn": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ustawienia" } },
    "historyBtn": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Historia" } },
    "docsBtn": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dokumentacja" } },
    "switchLabelDraft": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wersja robocza" } },
    "switchLabelDisabled": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wy\u0142\u0105czony" } },
    "switchLabelPaused": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wstrzymany" } },
    "switchLabelLive": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aktywny" } },
    "lastPublished": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ostatnia publikacja" } }
  },
  "dataProviderType": {
    "currentIteration": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Bie\u017C\u0105ca iteracja" } },
    "item": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Element" } },
    "previousNode": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Poprzedni w\u0119ze\u0142" } }
  },
  "nodeSidePanel": {
    "labelTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nazwa" } }
  },
  "historySidePanel": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Historia" } },
    "noRunsTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Brak przebieg\xF3w" } },
    "noRunsDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tutaj znajdziesz rezultaty przebieg\xF3w proces\xF3w." } },
    "statusStarted": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "W toku..." } },
    "statusSuccess": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wykonano pomy\u015Blnie" } },
    "statusError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nie uda\u0142o si\u0119 wykona\u0107" } },
    "statusSuccessBadge": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Uko\u0144czony" } },
    "statusErrorBadge": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wyst\u0105pi\u0142 b\u0142\u0105d" } },
    "statusDisabled": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wy\u0142\u0105czony przez Baserow" } },
    "successfulRuns": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Udane przebiegi" } },
    "completedInSeconds": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Czas wykonania: " }, { "t": 4, "k": "s" }, { "t": 3, "v": " sekund." }] } },
    "completedInLessThanSecond": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Uko\u0144czono w mniej ni\u017C 1 sekund\u0119." } },
    "running": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Uruchomiono " }, { "t": 4, "k": "at" }, { "t": 3, "v": "s temu" }] } },
    "failedRuns": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nieudane przebiegi" } },
    "errorHideDetails": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ukryj szczeg\xF3\u0142y" } },
    "errorShowDetails": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Poka\u017C szczeg\xF3\u0142y" } },
    "runNumber": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Przebieg " }, { "t": 4, "k": "n" }] } },
    "runCount": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "n" }, { "t": 3, "v": " przebieg\xF3w" }] } },
    "testRun": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Test" } },
    "showResult": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Poka\u017C wynik" } }
  },
  "nodeType": {
    "triggerDeletionError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Triggery mog\u0105 by\u0107 wy\u0142\u0105cznie zamienione, nie mo\u017Cna ich usun\u0105\u0107." } },
    "localBaserowRowsCreatedLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Wiersze zostan\u0105 utworzone w tabeli " }, { "t": 4, "k": "tableName" }] } },
    "localBaserowRowsUpdatedLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Wiersze zostan\u0105 zaktualizowane w tabeli " }, { "t": 4, "k": "tableName" }] } },
    "localBaserowRowsDeletedLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Wiersze zostan\u0105 usuni\u0119te z tabeli " }, { "t": 4, "k": "tableName" }] } },
    "localBaserowCreateRowLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Utw\xF3rz wiersz w tabeli " }, { "t": 4, "k": "tableName" }] } },
    "localBaserowUpdateRowLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Zaktualizuj wiersz w tabeli " }, { "t": 4, "k": "tableName" }] } },
    "localBaserowDeleteRowLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Usu\u0144 wiersze z tabeli " }, { "t": 4, "k": "tableName" }] } },
    "localBaserowGetRowLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Odczytaj wiersz z " }, { "t": 4, "k": "tableName" }] } },
    "localBaserowListRowsLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Wy\u015Bwietl wiersze z " }, { "t": 4, "k": "tableName" }] } },
    "localBaserowAggregateRowsLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Podsumuj wiersze w tabeli " }, { "t": 4, "k": "tableName" }] } },
    "httpRequestLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wy\u015Blij \u017C\u0105danie HTTP" } },
    "smtpEmailLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wy\u015Blij e-mail" } },
    "routerLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Wykonaj 1 z " }, { "t": 4, "k": "edgeCount" }, { "t": 3, "v": " rozga\u0142\u0119zie\u0144" }] } },
    "iterationLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Iteruj elementy" } },
    "defaultEdgeLabelFallback": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Domy\u015Blny" } },
    "routerWithOutputNodesDeleteError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Nie mo\u017Cna usun\u0105\u0107, dop\xF3ki w\u0119z\u0142y wyj\u015Bciowe w liczbie " }, { "t": 4, "k": "outputCount" }, { "t": 3, "v": " nie zostan\u0105 usuni\u0119te." }] } },
    "routerWithOutputNodesReplaceError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Nie mo\u017Cna zast\u0105pi\u0107, najpierw usu\u0144 w\u0119z\u0142y wyj\u015Bciowe. Liczba w\u0119z\u0142\xF3w do usuni\u0119cia: (" }, { "t": 4, "k": "outputCount" }, { "t": 3, "v": ")." }] } },
    "iteratorWithChildrenNodesDeleteError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nie mo\u017Cna usun\u0105\u0107. Najpierw usu\u0144 w\u0119z\u0142y podrz\u0119dne." } },
    "iteratorWithChildrenNodesReplaceError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nie mo\u017Cna zast\u0105pi\u0107. Najpierw usu\u0144 w\u0119z\u0142y podrz\u0119dne." } },
    "periodicTriggerLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Trigger okresowy" } },
    "aiAgent": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Prompt AI" } },
    "slackWriteMessageName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wy\u015Blij wiadomo\u015B\u0107 Slack" } },
    "slackWriteMessageLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Wy\u015Blij wiadomo\u015B\u0107 do #" }, { "t": 4, "k": "channel" }] } },
    "localBaserowFieldsUpdatedLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Pole " }, { "t": 4, "k": "fieldName" }, { "t": 3, "v": " w tabeli " }, { "t": 4, "k": "tableName" }, { "t": 3, "v": " zosta\u0142o zaktualizowane" }] } },
    "localBaserowFieldsUpdatedMultipleLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Warto\u015Bci " }, { "t": 4, "k": "count" }, { "t": 3, "v": " p\xF3l w tabeli " }, { "t": 4, "k": "tableName" }, { "t": 3, "v": " zosta\u0142y zaktualizowane" }] } },
    "localBaserowFieldsUpdatedNoFieldLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Poszczeg\xF3lne warto\u015Bci p\xF3l zosta\u0142y zaktualizowane" } },
    "localBaserowCreateRowsLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Zbiorcze tworzenie wierszy w tabeli " }, { "t": 4, "k": "tableName" }] } },
    "localBaserowUpdateRowsLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Zbiorczo zaktualizuj wiersze w tabeli " }, { "t": 4, "k": "tableName" }] } },
    "csvFileReaderLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wczytaj plik CSV" } },
    "startWorkflowLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Uruchom proces " }, { "t": 4, "k": "workflowName" }] } }
  },
  "workflowNode": {
    "actionDelete": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Usu\u0144" } },
    "actionReplace": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zamie\u0144" } },
    "actionDuplicate": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zduplikuj" } },
    "actionConfigure": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Skonfiguruj" } },
    "beforeLabelTrigger": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Uruchamia si\u0119, gdy" } },
    "beforeLabelAction": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nast\u0119pnie" } },
    "beforeLabelCondition": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Je\u015Bli warunek jest spe\u0142niony" } },
    "beforeLabelConditionDefault": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Je\u015Bli \u017Caden warunek nie jest spe\u0142niony" } },
    "beforeLabelRepeat": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dla ka\u017Cdego elementu" } },
    "moreEdit": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Edytuj" } },
    "moreReplace": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zast\u0105p" } },
    "nodeOptions": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Opcje w\u0119z\u0142a" } },
    "displayLabelDebug": { "t": 0, "b": { "t": 1, "c": [{ "t": 2, "i": [{ "t": 3, "v": "ID: " }, { "t": 4, "k": "id" }] }, { "t": 2, "i": [{ "t": 3, "v": "Poprz: " }, { "t": 4, "k": "previousNodeId" }] }, { "t": 2, "i": [{ "t": 4, "k": "outputUid" }] }] } },
    "moreDuplicate": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zduplikuj" } }
  },
  "workflowAddNode": {
    "displayTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Utw\xF3rz w\u0119ze\u0142 automatyzacji" } }
  },
  "workflowNodeContext": {
    "searchPlaceholderTrigger": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Szukaj triggera..." } },
    "searchPlaceholderActions": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Szukaj operacji\u2026" } },
    "noResults": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Brak rezultat\xF3w" } }
  },
  "serviceType": {
    "periodicTrigger": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Trigger okresowy" } },
    "periodicTriggerDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Uruchamia proces okresowo w podanych odst\u0119pach czasu" } },
    "periodicTriggerTriggeredAt": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Uruchamiany o" } },
    "errorIntervalMissing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nale\u017Cy poda\u0107 interwa\u0142." } },
    "coreHTTPTrigger": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Trigger HTTP" } },
    "coreHTTPTriggerDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "U\u017Cyj \u017C\u0105dania HTTP jako triggera procesu" } },
    "coreManualTrigger": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Trigger r\u0119czny" } },
    "coreManualTriggerDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Uruchamia si\u0119 wy\u0142\u0105cznie wtedy, gdy inna operacja rozpocznie ten proces" } }
  },
  "workflowEditor": {
    "chooseEvent": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wybierz zdarzenie..." } }
  },
  "simulateDispatch": {
    "sampleDataLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Rezultat" } },
    "triggerNodeAwaitingEvent": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "W\u0119ze\u0142 oczekuje na dane. Uruchom zdarzenie r\u0119cznie, test zako\u0144czy si\u0119 po dostarczeniu payloadu." } },
    "simulationInProgress": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Trwa testowanie w\u0119z\u0142a..." } },
    "errorNodeNotConfigured": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "W\u0119ze\u0142 musi by\u0107 skonfigurowany przed przetestowaniem." } },
    "errorPreviousNodeNotConfigured": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": 'Nale\u017Cy najpierw skonfigurowa\u0107 poprzedni w\u0119ze\u0142 "' }, { "t": 4, "k": "node" }, { "t": 3, "v": '".' }] } },
    "errorPreviousNodesNotTested": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": 'Poprzedni w\u0119ze\u0142 "' }, { "t": 4, "k": "node" }, { "t": 3, "v": '" musi by\u0107 najpierw przetestowany.' }] } },
    "buttonLabelTest": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Przetestuj w\u0119ze\u0142" } },
    "buttonLabelTestAgain": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ponownie przetestuj w\u0119ze\u0142" } },
    "testNodeDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Przetestuj w\u0119ze\u0142, aby potwierdzi\u0107 poprawno\u015B\u0107 konfiguracji. Dane z testu mog\u0105 by\u0107 u\u017Cyte w p\xF3\u017Aniejszych krokach." } },
    "buttonLabelShowPayload": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Poka\u017C payload" } },
    "buttonLabelShowError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Poka\u017C b\u0142\u0105d" } },
    "sampleDataModalTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Payload w\u0119z\u0142a " }, { "t": 4, "k": "nodeLabel" }] } },
    "sampleDataModalSubTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Payload JSON" } },
    "sampleDataCopy": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kopiuj" } },
    "errorOccurred": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wyst\u0105pi\u0142 b\u0142\u0105d..." } },
    "sampleDataCopied": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Payload zosta\u0142 skopiowany do schowka" } }
  }
};

export { resource as default };
//# sourceMappingURL=pl-C0ad1y1i.mjs.map
