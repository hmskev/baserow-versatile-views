!(function() {
  try {
    var e = false ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
    var n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "cf3baef7-fe2a-4e92-9912-1a37315ba73a", e._sentryDebugIdIdentifier = "sentry-dbid-cf3baef7-fe2a-4e92-9912-1a37315ba73a");
  } catch (e2) {
  }
})();
const resource = {
  "dataProviderType": {
    "pageParameter": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Parametr" } },
    "dataSource": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u0179r\xF3d\u0142o danych" } }
  },
  "localBaserowListRowsForm": {
    "searchFieldPlaceHolder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wprowad\u017A fraz\u0119 wyszukiwania..." } },
    "noTableChosenForFiltering": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aby u\u017Cy\u0107 filtr\xF3w \u017Ar\xF3d\u0142a danych, najpierw wybierz tabel\u0119." } },
    "noTableChosenForSorting": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aby posortowa\u0107 \u017Ar\xF3d\u0142o danych, najpierw wybierz tabel\u0119." } },
    "filterTabTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Filtry" } },
    "sortTabTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sortowanie" } },
    "searchTabTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Szukaj" } },
    "advancedConfig": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zaawansowane" } },
    "defaultResultCount": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Domy\u015Blna liczba wynik\xF3w" } },
    "defaultResultCountHelp": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Domy\u015Blna liczba rekord\xF3w pobranych przez to \u017Ar\xF3d\u0142o. Je\u015Bli wpiszesz 0 i warto\u015B\u0107 ta zostanie u\u017Cyta w trakcie pobierania danych, to strona wczyta si\u0119 szybciej, poniewa\u017C rekordy zostan\u0105 pobrane dopiero w trakcie paginacji elementu." } },
    "defaultResultCountPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Warto\u015B\u0107 domy\u015Blna..." } }
  },
  "localBaserowTableServiceSortForm": {
    "thenBy": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nast\u0119pnie wg." } },
    "addSort": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dodaj kolejne sortowanie" } },
    "noTableChosenForSorting": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aby posortowa\u0107 \u017Ar\xF3d\u0142o danych, najpierw wybierz tabel\u0119." } },
    "sortBy": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Posortuj wg." } },
    "noSortTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nie utworzono jeszcze sortowania \u017Ar\xF3d\u0142a danych" } },
    "noSortText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sortowanie pozwala na porz\u0105dkowanie wierszy wed\u0142ug pola." } },
    "sortMisconfigured": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pole, z kt\xF3rym powi\u0105zane jest to sortowanie, zosta\u0142o usuni\u0119te." } }
  },
  "localBaserowTableServiceConditionalForm": {
    "relatedFieldNotFound": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Powi\u0105zane pole nie zosta\u0142o znalezione." } },
    "filterTypeNotFound": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Niezgodny typ filtra." } },
    "addFilter": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dodaj dodatkowy filtr" } },
    "noFilterTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Filtr \u017Ar\xF3d\u0142a danych nie zosta\u0142 jeszcze utworzony" } },
    "noFilterText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Filtry \u017Ar\xF3d\u0142a danych umo\u017Cliwiaj\u0105 wy\u015Bwietlanie wierszy, kt\xF3re spe\u0142niaj\u0105 okre\u015Blone przez Ciebie warunki." } },
    "noCompatibleFilterTypesErrorTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Brak kompatybilnych typ\xF3w filtr\xF3w" } },
    "noCompatibleFilterTypesErrorMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u017Badne z twoich p\xF3l nie posiada kompatybilnych typ\xF3w filtr\xF3w" } },
    "formulaFilterInputPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wprowad\u017A formu\u0142\u0119..." } },
    "useFormulaForValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "U\u017Cyj formu\u0142y dla tego filtra" } },
    "useDefaultForValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "U\u017Cyj domy\u015Blnego filtra dla tego pola" } },
    "textFilterInputPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wprowad\u017A tekst..." } }
  },
  "serviceType": {
    "localBaserowGetRow": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pobierz jeden wiersz" } },
    "localBaserowListRows": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pobierz wiele wierszy" } },
    "localBaserowAggregateRows": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Podsumuj pole" } },
    "misconfigured": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nieprawid\u0142owa konfiguracja" } },
    "trashedField": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pole usuni\u0119te" } },
    "localBaserowGetRowDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wczytaj pojedynczy wiersz z tabeli Baserow." } },
    "localBaserowListRowsDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wczytuje wiele wierszy z tabeli Baserow." } },
    "localBaserowAggregateRowsDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Podsumowuje pole w tabeli Baserow." } },
    "localBaserowCreateRow": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Utw\xF3rz wiersz" } },
    "localBaserowCreateRowDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tworzy nowy wiersz w tabeli Baserow." } },
    "localBaserowUpdateRow": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zaktualizuj wiersz" } },
    "localBaserowUpdateRowDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aktualizuje istniej\u0105cy wiersz w tabeli Baserow." } },
    "localBaserowDeleteRow": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Usu\u0144 wiersz" } },
    "localBaserowDeleteRowDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Usuwa jeden lub wi\u0119cej wierszy z tabeli bazy Baserow." } },
    "localBaserowRowsCreated": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dodanie wierszy" } },
    "localBaserowRowsCreatedDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Uruchamia si\u0119, gdy w tabeli bazy Baserow tworzone s\u0105 wiersze." } },
    "localBaserowRowsUpdated": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wiersze zosta\u0142y zaktualizowane" } },
    "localBaserowRowsUpdatedDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Uruchamia si\u0119, gdy w tabeli bazy Baserow aktualizowane s\u0105 jakiekolwiek wiersze." } },
    "localBaserowRowsDeleted": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wiersze zosta\u0142y usuni\u0119te" } },
    "localBaserowRowsDeletedDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Uruchamia si\u0119, gdy z tabeli bazy Baserow usuwane s\u0105 wiersze." } },
    "coreHTTPTrigger": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Odbierz \u017C\u0105danie HTTP" } },
    "coreHTTPTriggerDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Uruchamia si\u0119, gdy zostanie odebrane \u017C\u0105danie HTTP." } },
    "coreHTTPRequest": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wy\u015Blij \u017C\u0105danie HTTP" } },
    "coreHTTPRequestDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wysy\u0142a \u017C\u0105danie HTTP do wskazanego endpointu." } },
    "coreSMTPEmail": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wy\u015Blij e-mail" } },
    "coreRouter": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Rozga\u0142\u0119zienie" } },
    "coreRouterEdgesRequired": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wymagana jest co najmniej jedna kraw\u0119d\u017A" } },
    "coreRouterEdgeLabelRequired": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wymagana jest etykieta rozga\u0142\u0119zienia." } },
    "coreRouterEdgeConditionRequired": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wymagany jest warunek rozga\u0142\u0119zienia." } },
    "coreRouterDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Na podstawie warunku kieruje proces do kolejnego rozga\u0142\u0119zienia." } },
    "coreSMTPEmailDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wysy\u0142a e-mail za pomoc\u0105 konfiguracji SMTP." } },
    "coreIteration": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Iterator" } },
    "coreIterationDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Iteruje po elementach." } },
    "errorFromEmailMissing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Brak adresu nadawcy e-mail" } },
    "errorToEmailsMissing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Brak adres\xF3w odbiorc\xF3w e-mail" } },
    "errorUrlMissing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Brak adresu URL" } },
    "errorNoTableSelected": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nie wybrano tabeli" } },
    "errorFilterInError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Co najmniej jeden filtr jest nieprawid\u0142owo skonfigurowany" } },
    "errorSortingInError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Co najmniej jedno sortowanie jest nieprawid\u0142owo skonfigurowane" } },
    "errorNoFieldSelected": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nie wybrano \u017Cadnych p\xF3l" } },
    "errorNoAggregationTypeSelected": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nie wybrano \u017Cadnego typu agregacji" } },
    "corePeriodic": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Trigger okresowy" } },
    "corePeriodicDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Uruchamia procesy w okre\u015Blonych odst\u0119pach czasu" } },
    "corePeriodicErrorIntervalMissing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wymagany jest interwa\u0142." } },
    "errorIterationSourceMissing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Brak atrybutu \u017Ar\xF3d\u0142a" } },
    "aiAgent": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Prompt AI" } },
    "aiAgentDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wysy\u0142a prompty AI przy u\u017Cyciu skonfigurowanych modeli AI." } },
    "errorNoIntegrationSelected": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nie wybrano \u017Cadnej integracji" } },
    "errorNoAIProviderSelected": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nie wybrano \u017Cadnego dostawcy AI" } },
    "errorNoAIModelSelected": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nie wybrano \u017Cadnego modelu AI" } },
    "errorNoPromptProvided": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nie podano \u017Cadnego promptu" } },
    "errorNoChoicesProvided": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nie podano \u017Cadnych opcji typu danych wyj\u015Bciowych" } },
    "slackWriteMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wy\u015Blij wiadomo\u015B\u0107 Slack" } },
    "slackWriteMessageDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wysy\u0142a wiadomo\u015B\u0107 na okre\u015Blony #kana\u0142 Slack" } },
    "slackWriteMessageMissingChannel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nale\u017Cy poda\u0107 kana\u0142." } },
    "slackWriteMessageMissingMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nale\u017Cy wpisa\u0107 wiadomo\u015B\u0107." } },
    "slackWriteMessageMissingIntegration": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nie wybrano \u017Cadnej integracji ze Slack." } },
    "coreManualTrigger": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Trigger r\u0119czny" } },
    "localBaserowCreateRows": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Utw\xF3rz wiersze zbiorczo" } },
    "localBaserowCreateRowsDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zbiorczo tworzy nowe wiersze w tabeli bazy Baserow." } },
    "localBaserowUpdateRows": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zbiorczo zaktualizuj wiersze" } },
    "localBaserowUpdateRowsDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zbiorczo aktualizuje istniej\u0105ce wiersze w tabeli bazy Baserow." } },
    "localBaserowFieldsUpdated": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Uaktualnienie konkretnych warto\u015Bci p\xF3l" } },
    "localBaserowFieldsUpdatedDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Uruchamia si\u0119, gdy w okre\u015Blonych polach tabeli bazy Baserow s\u0105 aktualizowane wiersze." } },
    "coreManualTriggerDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Uruchamia si\u0119 wy\u0142\u0105cznie wtedy, gdy inna operacja rozpocznie ten proces." } },
    "coreCSVFileReader": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wczytaj plik CSV" } },
    "coreCSVFileReaderDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wczytuje wiersze z pliku CSV." } },
    "coreStartWorkflow": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Uruchom proces" } },
    "coreStartWorkflowDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Uruchamia proces automatyzacji." } },
    "errorNoRowsSelected": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nie wybrano \u017Cadnych wierszy" } },
    "errorCSVFileMissing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Brak atrybutu pliku CSV" } },
    "errorCSVContentMissing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Brak atrybutu danych w pliku CSV" } },
    "errorNoWorkflowSelected": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nie wybrano \u017Cadnego procesu" } },
    "errorWorkflowNotImmediateDispatch": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wybrany proces musi zosta\u0107 uruchomiony przez trigger, kt\xF3ry wyzwala si\u0119 w spos\xF3b natychmiastowy." } }
  },
  "userSourceType": {
    "localBaserow": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Uwierzytelnianie tabeli Baserow" } }
  },
  "localBaserowForm": {
    "user": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "U\u017Cytkownik" } },
    "userMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tworz\u0105c to po\u0142\u0105czenie, upowa\u017Cniasz aplikacj\u0119 do korzystania z Twojego konta w celu wprowadzania zmian w lokalnym obszarze roboczym Baserow." } }
  },
  "localBaserowTableSelector": {
    "databaseFieldLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Baza danych" } },
    "viewFieldLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Widok" } },
    "tableFieldLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tabela" } },
    "chooseNoView": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nie wybrano" } },
    "dataSyncedTableDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tabela synchronizowanych danych" } },
    "oneWayDataSyncedTableDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Synchronizacja jednokierunkowa" } },
    "twoWayDataSyncedTableDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Synchronizacja dwukierunkowa" } }
  },
  "integrationType": {
    "localBaserow": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Lokalna instalacja Baserow" } },
    "localBaserowSummary": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Lokalny Baserow - " }, { "t": 4, "k": "name" }, { "t": 3, "v": ", " }, { "t": 4, "k": "username" }] } },
    "localBaserowWarning": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Autoryzacja konta daje ka\u017Cdemu, kto ma uprawnienia do edycji aplikacji, pe\u0142ny dost\u0119p do danych, do kt\xF3rych masz dost\u0119p. Mo\u017Cliwe jest utworzenie drugiego u\u017Cytkownika, nadanie mu odpowiednich uprawnie\u0144 i korzystanie z niego." } },
    "smtp": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "E-mail SMTP" } },
    "slackBot": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Bot Slack" } },
    "ai": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "AI" } }
  },
  "localBaserowGetRowForm": {
    "noTableChosenForSorting": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aby posortowa\u0107 \u017Ar\xF3d\u0142o danych, najpierw wybierz tabel\u0119." } },
    "rowFieldLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "ID wiersza" } },
    "invalidFormula": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Formu\u0142a jest nieprawid\u0142owa" } },
    "rowFieldPlaceHolder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wybierz ID wiersza" } },
    "rowFieldHelpText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aby wy\u015Bwietli\u0107 pierwszy wiersz, pozostaw t\u0119 warto\u015B\u0107 pust\u0105." } },
    "searchFieldPlaceHolder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wprowad\u017A fraz\u0119 wyszukiwania..." } },
    "noTableChosenForFiltering": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aby u\u017Cy\u0107 filtr\xF3w \u017Ar\xF3d\u0142a danych, najpierw wybierz tabel\u0119." } },
    "filterTabTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Filtry" } },
    "searchTabTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Szukaj" } }
  },
  "integrationsCommon": {
    "singleRow": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "pojedynczy wiersz" } },
    "multipleRows": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "wiele wierszy" } }
  },
  "localBaserowIntegrationType": {
    "localBaserowWarning": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Autoryzacja konta daje ka\u017Cdemu u\u017Cytkownikowi, kt\xF3ry ma uprawnienia do edycji aplikacji pe\u0142ny dost\u0119p do Twoich danych. Mo\u017Cesz utworzy\u0107 drugiego u\u017Cytkownika, nada\u0107 mu odpowiednich uprawnienia i w ten spos\xF3b korzysta\u0107 z tego konta." } },
    "localBaserowSummary": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Lokalna instalacja Baserow - " }, { "t": 4, "k": "name" }, { "t": 3, "v": ", " }, { "t": 4, "k": "username" }] } },
    "localBaserowNoUser": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Lokalna instalacja Baserow - nie skonfigurowano" } }
  },
  "localBaserowAggregateRowsForm": {
    "filterTabTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Filtry" } },
    "searchTabTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wyszukaj" } },
    "aggregationFieldLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pole" } },
    "aggregationTypeLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Agregacja" } },
    "searchFieldPlaceHolder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wprowad\u017A fraz\u0119 wyszukiwania..." } },
    "noTableChosenForFiltering": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aby u\u017Cy\u0107 filtr\xF3w \u017Ar\xF3d\u0142a danych, najpierw wybierz tabel\u0119." } }
  },
  "aiIntegrationType": {
    "inheritingWorkspace": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dziedziczenie ustawie\u0144 AI obszaru roboczego" } },
    "overridingProviders": { "t": 0, "b": { "t": 1, "c": [{ "t": 2, "i": [{ "t": 3, "v": "Zast\u0105pienie " }, { "t": 4, "k": "count" }, { "t": 3, "v": " dostawcy" }] }, { "t": 2, "i": [{ "t": 3, "v": "Zast\u0105pienie " }, { "t": 4, "k": "count" }, { "t": 3, "v": " dostawc\xF3w" }] }] } }
  },
  "slackBotIntegrationType": {
    "slackBotSummary": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Bot Slack" } },
    "slackBotNoToken": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Bot Slack \u2013 nie skonfigurowany" } }
  },
  "aiForm": {
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Skonfiguruj ustawienia dostawcy AI dla tej integracji. Domy\u015Blnie dziedziczone s\u0105 ustawienia AI obszaru roboczego." } },
    "workspaceSettingsTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ustawienia AI obszaru roboczego" } },
    "workspaceSettingsDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ta integracja domy\u015Blnie dziedziczy ustawienia dostawcy AI z obszaru roboczego. Poni\u017Cej mo\u017Cesz zmieni\u0107 dostawc\xF3w." } },
    "overrideWorkspaceSettings": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zmie\u0144 ustawienia obszaru roboczego dla tego dostawcy" } },
    "inherited": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dziedziczony" } },
    "overridden": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zmieniony" } }
  },
  "aiAgentServiceForm": {
    "integrationLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Integracja" } },
    "providerLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dostawca AI" } },
    "providerPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wybierz dostawc\u0119 AI..." } },
    "modelLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Model AI" } },
    "modelPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wybierz model..." } },
    "outputTypeLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Typ danych wyj\u015Bciowych" } },
    "outputTypeHelp": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Okre\u015Bl format odpowiedzi AI. Je\u015Bli okre\u015Blisz \u201Copcje\u201D, wymusisz na modelu odpowied\u017A w jednym z podanych format\xF3w." } },
    "outputTypeText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tekst" } },
    "outputTypeChoice": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Opcja" } },
    "temperatureLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Temperatura" } },
    "temperaturePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "np. 0.7" } },
    "temperatureHelp": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Okre\u015Bla poziom przypadkowo\u015Bci. Ni\u017Csze warto\u015Bci (0-0.3) zaw\u0119\u017Caj\u0105 odpowiedzi, kt\xF3re s\u0105 bardziej deterministyczne. W przypadku wy\u017Cszych warto\u015Bci (0.7-2.0), odpowiedzi b\u0119d\u0105 bardziej kreatywne i zr\xF3\u017Cnicowane." } },
    "promptLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Prompt" } },
    "promptPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wprowad\u017A sw\xF3j prompt..." } },
    "choicesLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Opcje" } },
    "choicePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Podaj swoj\u0105 opcj\u0119..." } },
    "addChoice": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dodaj opcj\u0119" } },
    "choicesRequired": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wymagana jest co najmniej jedna opcja" } }
  },
  "serviceRefinementForms": {
    "filterTabTitle": { "t": 0, "b": { "t": 1, "c": [{ "t": 2, "i": [{ "t": 3 }], "s": "0 Filtr\xF3w" }, { "t": 2, "i": [{ "t": 3 }], "s": "1 Filtr" }, { "t": 2, "i": [{ "t": 4, "k": "count" }, { "t": 3, "v": " Filtry/\xF3w" }] }] } },
    "sortTabTitle": { "t": 0, "b": { "t": 1, "c": [{ "t": 2, "i": [{ "t": 3 }], "s": "0 Posortowa\u0144" }, { "t": 2, "i": [{ "t": 3 }], "s": "1 Posortowanie" }, { "t": 2, "i": [{ "t": 4, "k": "count" }, { "t": 3, "v": " Posortowania/\u0144" }] }] } },
    "searchTabTitle": { "t": 0, "b": { "t": 1, "c": [{ "t": 2, "i": [{ "t": 3 }], "s": "0 Wyszukiwa\u0144" }, { "t": 2, "i": [{ "t": 3 }], "s": "1 Wyszukiwanie" }, { "t": 2, "i": [{ "t": 4, "k": "count" }, { "t": 3, "v": " Wyszukiwania/\u0144" }] }] } },
    "searchFieldPlaceHolder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wprowad\u017A fraz\u0119 wyszukiwania..." } },
    "noTableChosenForFiltering": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aby zacz\u0105\u0107 u\u017Cywa\u0107 filtr\xF3w tego \u017Ar\xF3d\u0142a danych, najpierw wybierz tabel\u0119." } },
    "noTableChosenForSorting": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aby zacz\u0105\u0107 u\u017Cywa\u0107 sortowa\u0144 tego \u017Ar\xF3d\u0142a danych, najpierw wybierz tabel\u0119." } },
    "refinements": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dodatkowe szczeg\xF3\u0142y" } }
  },
  "coreHTTPRequestServiceForm": {
    "httpMethod": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Metoda HTTP" } },
    "url": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "URL endpointu" } },
    "queryParams": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Parametry zapytania" } },
    "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nazwa" } },
    "value": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Warto\u015B\u0107" } },
    "namePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nazwa..." } },
    "valuePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Warto\u015B\u0107..." } },
    "headers": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nag\u0142\xF3wki" } },
    "addQueryParam": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "dodaj parametr zapytania" } },
    "addHeader": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "dodaj nag\u0142\xF3wek" } },
    "formData": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dane w formularzu" } },
    "addFormData": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "dodaj dane w formularzu" } },
    "bodyType": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Rodzaj tre\u015Bci" } },
    "bodyContent": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zawarto\u015B\u0107 tre\u015Bci" } },
    "urlPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wprowad\u017A URL endpointu\u2026" } },
    "bodyPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dodaj tre\u015B\u0107 \u017C\u0105dania..." } },
    "timeoutPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wprowad\u017A limit czasu..." } },
    "nameFieldRequired": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wymagana jest nazwa atrybutu." } },
    "seconds": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "sekundy" } },
    "nameFieldInvalid": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nazwa mo\u017Ce zawiera\u0107 tylko znaki alfanumeryczne, my\u015Blniki lub podkre\u015Blenia i nie mo\u017Ce zaczyna\u0107 si\u0119 od my\u015Blnika ani podkre\u015Blenia." } },
    "timeout": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Limit czasu" } }
  },
  "slackBotForm": {
    "tokenLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Token bota" } },
    "tokenPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "xoxb-1234-..." } },
    "tokenMustStartWith": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": 'Token musi zaczyna\u0107 si\u0119 od "xoxb-"' } },
    "supportHeading": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Potrzebujesz pomocy?" } },
    "supportDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zapoznaj si\u0119 z poni\u017Cszymi krokami, je\u015Bli potrzebujesz pomocy podczas parowania z aplikacj\u0105 w Slacku." } },
    "supportSetupHeading": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "1. Konfiguracja aplikacji" } },
    "supportSetupDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": 'W obszarze roboczym w Slacku utw\xF3rz now\u0105 aplikacj\u0119. Je\u015Bli nie masz takiej mo\u017Cliwo\u015Bci, zwr\xF3\u0107 si\u0119 do swojego administratora. Je\u015Bli korzystasz z istniej\u0105cej aplikacji, kt\xF3ra mo\u017Ce wysy\u0142a\u0107 wiadomo\u015Bci, przejd\u017A do sekcji "Parowanie z aplikacj\u0105 w Slacku\u201D.' } },
    "supportSetupStep1": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Kliknij " }, { "t": 4, "k": "link" }, { "t": 3, "v": ", aby przej\u015B\u0107 do konfiguracji swojego obszaru roboczego." }] } },
    "supportSetupStep1Link": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "strona aplikacji" } },
    "supportSetupStep2": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": 'Utw\xF3rz now\u0105 aplikacj\u0119, wybierz "Od podstaw" i wprowad\u017A nazw\u0119. Wybierz obszar roboczy, w kt\xF3rym aplikacja ma dzia\u0142a\u0107, i kliknij "Utw\xF3rz".' } },
    "supportSetupStep3": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": 'W lewym panelu bocznym przejd\u017A do "OAuth > Uprawnienia", przewi\u0144 do sekcji \u201CZakresy\u201D i pod nag\u0142\xF3wkiem "Zakresy tokena bota" wybierz "Dodaj zakres OAuth".' } },
    "supportSetupStep4": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Aby umo\u017Cliwi\u0107 aplikacji publikowanie wiadomo\u015Bci, dodaj zakres " }, { "t": 4, "k": "scope" }, { "t": 3, "v": "." }] } },
    "supportPairingHeading": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "2. Parowanie z aplikacj\u0105 w Slacku" } },
    "supportPairingStep1": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": 'Je\u015Bli aplikacja jest nowo utworzona, przejd\u017A do "Ustawienia" > "Zainstaluj aplikacj\u0119". Nast\u0119pnie, aby zainstalowa\u0107 aplikacj\u0119 w swoim obszarze roboczym, kliknij zielony przycisk.' } },
    "supportPairingStep2": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": 'Skopiuj sw\xF3j "Token OAuth bota" i wklej go w polu "Token bota" w tym formularzu.' } },
    "supportPairingStep3": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Na koniec, i je\u015Bli aplikacja w Slacku jest nowo utworzona, zapro\u015B t\u0119 aplikacj\u0119 na wybrany kana\u0142 za pomoc\u0105 polecenia " }, { "t": 4, "k": "command" }] } }
  },
  "slackWriteMessageServiceForm": {
    "alertMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ta operacja musi by\u0107 sparowana z aplikacj\u0105 w Slacku. Aby rozpocz\u0105\u0107, post\u0119puj zgodnie z instrukcjami w oknie integracji." } },
    "integrationLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Integracja" } },
    "channelLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kana\u0142" } },
    "channelPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wprowad\u017A nazw\u0119 kana\u0142u" } },
    "messageLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wiadomo\u015B\u0107" } },
    "messagePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wpisz swoj\u0105 wiadomo\u015B\u0107..." } },
    "channelNoPrefix": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": 'Usu\u0144 "#" przed nazw\u0105 kana\u0142u.' } }
  },
  "smtpIntegrationType": {
    "smtpSummary": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "SMTP - " }, { "t": 4, "k": "host" }, { "t": 3, "v": ":" }, { "t": 4, "k": "port" }] } }
  },
  "smtpForm": {
    "host": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Host SMTP" } },
    "hostPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "smtp.gmail.com" } },
    "port": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Port SMTP" } },
    "portPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "587" } },
    "useTls": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "U\u017Cyj TLS" } },
    "username": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nazwa u\u017Cytkownika" } },
    "usernamePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }, { "t": 9 }, { "t": 3 }], "s": "twoj-email@example.com" } },
    "password": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Has\u0142o" } },
    "passwordPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "twoje-haslo" } }
  },
  "smtpEmailForm": {
    "smtpConfigurationMode": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Konfiguracja SMTP" } },
    "useInstanceSmtpSettings": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "U\u017Cyj wbudowanego serwera SMTP" } },
    "integrationDropdownLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Integracja" } },
    "fromEmail": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "E-mail nadawcy" } },
    "fromEmailPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }, { "t": 9 }, { "t": 3 }], "s": "nadawca@example.com" } },
    "fromName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nadawca" } },
    "fromNamePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Twoje imi\u0119 i nazwisko" } },
    "toEmails": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Adresy e-mail odbiorc\xF3w" } },
    "toEmailsPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }, { "t": 9 }, { "t": 3 }, { "t": 9 }, { "t": 3 }], "s": "odbiorca1@example.com,odbiorca2@example.com" } },
    "ccEmails": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Adresy e-maile DW" } },
    "ccEmailsPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }, { "t": 9 }, { "t": 3 }, { "t": 9 }, { "t": 3 }], "s": "dw1@example.com,dw2@example.com" } },
    "bccEmails": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Adresy e-mail UDW" } },
    "bccEmailsPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }, { "t": 9 }, { "t": 3 }, { "t": 9 }, { "t": 3 }], "s": "udw1@example.com,udw2@example.com" } },
    "subject": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Temat" } },
    "subjectPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Temat Twojego e-maila" } },
    "bodyType": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Rodzaj tre\u015Bci" } },
    "bodyTypePlain": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zwyk\u0142y tekst" } },
    "bodyTypeHtml": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "HTML" } },
    "body": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tre\u015B\u0107" } },
    "bodyPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zawarto\u015B\u0107 Twojego e-maila..." } }
  },
  "coreIterationServiceForm": {
    "source": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u0179r\xF3d\u0142o" } },
    "sourcePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wybierz \u017Ar\xF3d\u0142o..." } }
  },
  "routerForm": {
    "defaultEdgeLabelLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Domy\u015Blna etykieta rozga\u0142\u0119zienia" } },
    "defaultEdgeLabelPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Domy\u015Blne" } },
    "defaultEdgeLabelDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Opcjonalnie wybierz etykiet\u0119, kt\xF3ra zostanie wy\u015Bwietlona na domy\u015Blnym rozga\u0142\u0119zieniu." } },
    "branchesHeading": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Rozga\u0142\u0119zienia" } },
    "branchesDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Rozga\u0142\u0119zienia uruchamiaj\u0105 w\u0119z\u0142y tylko wtedy, gdy spe\u0142niony jest warunek. Rozga\u0142\u0119zienia s\u0105 wykonywane od lewej do prawej, a\u017C warunek zostanie spe\u0142niony, w przeciwnym razie wykonane zostanie rozga\u0142\u0119zienie domy\u015Blne. " } },
    "branchLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Etykieta" } },
    "branchConditionLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Warunek" } },
    "branchConditionPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Je\u015Bli prawda, zostanie wybrane to rozga\u0142\u0119zienie." } },
    "addEdge": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dodaj rozga\u0142\u0119zienie" } },
    "edgeDefaultName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Rozga\u0142\u0119zienie" } },
    "noLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Brak etykiety" } },
    "edgeDeletionLastEdge": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nie mo\u017Cesz usun\u0105\u0107 ostatniego rozga\u0142\u0119zienia." } },
    "edgeDeletionHasOutput": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nie mo\u017Cna usun\u0105\u0107 rozga\u0142\u0119zienia, je\u015Bli na wyj\u015Bciu s\u0105 dane." } }
  },
  "periodicForm": {
    "intervalLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Interwa\u0142" } },
    "intervalHelper": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wybierz, jak cz\u0119sto ma by\u0107 uruchamiany ten proces" } },
    "everyMinute": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Co " }, { "t": 4, "k": "minute" }, { "t": 3, "v": " minuty/minut" }] } },
    "everyMinuteDefault": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Co okre\u015Blon\u0105 liczb\u0119 minut" } },
    "everyHour": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Co godzin\u0119" } },
    "everyDay": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Codziennie" } },
    "everyWeek": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Co tydzie\u0144" } },
    "everyMonth": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Co miesi\u0105c" } },
    "hour": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Godzina" } },
    "minute": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Minuta" } },
    "minuteFrequency": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Co ile minut" } },
    "dayOfWeek": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dzie\u0144 tygodnia" } },
    "dayOfMonth": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dzie\u0144 miesi\u0105ca" } },
    "hourPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "0-23" } },
    "minutePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "0-59" } },
    "minuteFrequencyPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "15" } },
    "dayOfMonthPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "1-31" } },
    "minuteHelper": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ten proces b\u0119dzie uruchamiany co okre\u015Blon\u0105 liczb\u0119 minut" } },
    "hourHelper": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Ten proces b\u0119dzie uruchamiany co godzin\u0119, o okre\u015Blonej minucie Twojego czasu lokalnego, tj. (" }, { "t": 4, "k": "timezone" }, { "t": 3, "v": ")" }] } },
    "dayHelper": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Ten proces b\u0119dzie uruchamiany codziennie, o okre\u015Blonej godzinie Twojego czasu lokalnego tj. (" }, { "t": 4, "k": "timezone" }, { "t": 3, "v": ")" }] } },
    "weekHelper": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Ten proces b\u0119dzie uruchamiany co tydzie\u0144, w okre\u015Blonym dniu i godzinie Twojego czasu lokalnego tj. (" }, { "t": 4, "k": "timezone" }, { "t": 3, "v": ")" }] } },
    "monthHelper": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Ten proces b\u0119dzie uruchamiany co miesi\u0105c, w okre\u015Blonym dniu i godzinie Twojego czasu lokalnego tj. (" }, { "t": 4, "k": "timezone" }, { "t": 3, "v": ")" }] } },
    "deactivatedTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Trigger okresowy zosta\u0142 wy\u0142\u0105czony" } },
    "deactivatedText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ten trigger okresowy zosta\u0142 automatycznie wy\u0142\u0105czony z powodu powtarzaj\u0105cych si\u0119 b\u0142\u0119d\xF3w." } }
  },
  "localBaserowServiceForm": {
    "integrationDropdownLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Integracja" } },
    "rowIdLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "ID wiersza" } },
    "rowIdPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wybierz ID wiersza" } }
  },
  "localBaserowUpsertRowServiceForm": {
    "fieldMappingPlaceholderArray": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wybierz warto\u015B\u0107 tablicy (array), np. [42]" } },
    "fieldMappingPlaceholderString": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wybierz warto\u015B\u0107 tekstow\u0105, np. \\'baserow\\'" } },
    "fieldMappingPlaceholderNumber": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wybierz warto\u015B\u0107 liczbow\u0105, np. 42" } },
    "fieldMappingPlaceholderBoolean": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wybierz warto\u015B\u0107 logiczn\u0105, np. true" } },
    "fieldMappingPlaceholderDate": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wybierz warto\u015B\u0107 daty, np. 2025-07-25" } },
    "fieldMappingPlaceholderDecimal": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wybierz warto\u015B\u0107 dziesi\u0119tn\u0105, np. 3,14" } },
    "fieldMappingPlaceholderDuration": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Okre\u015Bl czas trwania, np. 1:23:40" } },
    "noTableSelectedMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aby rozpocz\u0105\u0107 konfiguracj\u0119 p\xF3l, wybierz tabel\u0119." } },
    "noWritableFields": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ta tabela nie zawiera p\xF3l z mo\u017Cliwo\u015Bci\u0105 zapisu." } }
  },
  "localBaserowFieldsUpdatedForm": {
    "fieldLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pola" } },
    "fieldHelper": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ten proces uruchamia si\u0119 wy\u0142\u0105cznie wtedy, gdy zmieni si\u0119 warto\u015B\u0107 jednego z p\xF3l." } }
  },
  "coreCSVFileReaderServiceForm": {
    "inputType": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u0179r\xF3d\u0142o" } },
    "inputTypeFile": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Plik" } },
    "inputTypeContent": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zawarto\u015B\u0107" } },
    "file": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Plik CSV" } },
    "filePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wybierz plik CSV..." } },
    "csv": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dane z pliku CSV" } },
    "csvPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wprowad\u017A dane z pliku CSV..." } },
    "separator": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Separator" } },
    "encoding": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kodowanie znak\xF3w" } },
    "firstLineIsHeader": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pierwszy wiersz zawiera nag\u0142\xF3wek" } },
    "comma": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Przecinek" } },
    "semicolon": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u015Arednik" } },
    "tab": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zak\u0142adka" } },
    "pipe": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": 'Znak "pipe"' } },
    "utf8": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "UTF-8" } },
    "utf8Bom": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "UTF-8 z BOM" } },
    "latin1": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Latin-1" } }
  },
  "coreStartWorkflowServiceForm": {
    "automation": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Automatyzacja" } },
    "workflow": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Proces" } },
    "workflowHelperText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Uruchomi\u0107 mo\u017Cna wy\u0142\u0105cznie opublikowane procesy z triggerem r\u0119cznym. Je\u015Bli w danym procesie znajduj\u0105 si\u0119 nieopublikowane zmiany, uruchomiona zostanie ostatnia opublikowana wersja." } }
  },
  "localBaserowDeleteRowServiceForm": {
    "rowIdLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "ID wiersza/y" } },
    "rowIdPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wybierz ID wiersza lub szereg zawieraj\u0105cy ID wierszy" } },
    "rowIdHelper": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Wybierz ID wiersza lub szereg zawieraj\u0105cy ID wierszy. Jednorazowo mo\u017Cna usun\u0105\u0107 maksymalnie " }, { "t": 4, "k": "limit" }, { "t": 3, "v": " wierszy." }] } }
  },
  "localBaserowCreateRowsServiceForm": {
    "rowsLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wiersze" } },
    "rowsPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": 'Wybierz list\u0119 obiekt\xF3w typu "wiersz"' } },
    "rowsHelper": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Wynikiem musi by\u0107 tablica obiekt\xF3w wierszy lub ci\u0105g JSON, kt\xF3ry po przetworzeniu tworzy tak\u0105 tablic\u0119. Jako klucze obiekt\xF3w nale\u017Cy u\u017Cy\u0107 nazw lub ID p\xF3l. Jednorazowo mo\u017Cna utworzy\u0107 do " }, { "t": 4, "k": "limit" }, { "t": 3, "v": " wierszy." }] } }
  },
  "localBaserowUpdateRowsServiceForm": {
    "rowsLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wiersze" } },
    "rowsPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": 'Wybierz liste ID obiekt\xF3w typu "wiersz"' } },
    "rowsHelper": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Wynikiem musi by\u0107 tablica obiekt\xF3w wierszy lub ci\u0105g JSON, kt\xF3ry po przetworzeniu utworzy tak\u0105 tablic\u0119. Ka\u017Cdy obiekt musi zawiera\u0107 atrybut identyfikacyjny. Jako klucza obiektu mo\u017Cna u\u017Cy\u0107 nazwy lub ID pola. Jednorazowo mo\u017Cna zaktualizowa\u0107 do " }, { "t": 4, "k": "limit" }, { "t": 3, "v": " wierszy." }] } }
  }
};

export { resource as default };
//# sourceMappingURL=pl-DLg50IXP.mjs.map
