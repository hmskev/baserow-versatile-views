!(function() {
  try {
    var e = false ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
    var n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "257aad5e-fbd0-4e9c-82fe-a08de3f8d84d", e._sentryDebugIdIdentifier = "sentry-dbid-257aad5e-fbd0-4e9c-82fe-a08de3f8d84d");
  } catch (e2) {
  }
})();
const resource = {
  "webhookModal": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Webhooki " }, { "t": 4, "k": "name" }] } },
    "createWebhook": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Utw\xF3rz webhook" } },
    "backToList": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Powr\xF3t do listy" } }
  },
  "deleteWebhookModal": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Usu\u0144 webhook " }, { "t": 4, "k": "webhookName" }] } },
    "deleteButton": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Usu\u0144 webhook" } },
    "body": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Czy na pewno chcesz usun\u0105\u0107 ten webhook? Nie b\u0119dziesz m\xF3g\u0142 go p\xF3\u017Aniej przywr\xF3ci\u0107." } }
  },
  "webhookList": {
    "noWebhooksMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nie utworzy\u0142e\u015B jeszcze \u017Cadnych webhook\xF3w. Webhooki s\u0142u\u017C\u0105 do przesy\u0142ania informacji do innych system\xF3w po utworzeniu, zaktualizowaniu lub usuni\u0119ciu wiersza w Baserow." } }
  },
  "testWebhookModal": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Przetestuj webhook" } },
    "unreachable": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Serwer jest niedost\u0119pny" } }
  },
  "webhookForm": {
    "inputLabels": {
      "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nazwa" } },
      "value": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Warto\u015B\u0107" } },
      "requestMethod": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Metoda" } },
      "url": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Adres URL" } },
      "userFieldNames": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nazwy p\xF3l u\u017Cytkownika" } },
      "events": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Co powinno uruchomi\u0107 ten webhook?" } },
      "headers": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dodatkowe nag\u0142\xF3wki" } },
      "example": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Przyk\u0142adowy payload" } }
    },
    "errors": {
      "urlField": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Musi by\u0107 prawid\u0142owym adresem URL zaczynaj\u0105cym si\u0119 od 'https://' lub 'http://'." } },
      "invalidHeaders": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Jeden z nag\u0142\xF3wk\xF3w jest nieprawid\u0142owy." } }
    },
    "checkbox": {
      "sendUserFieldNames": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "U\u017Cyj nazwy pola zamiast ID" } }
    },
    "radio": {
      "allEvents": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wy\u015Blij wszystko" } },
      "customEvents": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wybierz pojedyncze zdarzenia" } }
    },
    "triggerButton": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Uruchom test webhooka" } },
    "deactivated": {
      "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Webhook jest wy\u0142\u0105czony" } },
      "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ten webhook zosta\u0142 wy\u0142\u0105czony, poniewa\u017C wyst\u0105pi\u0142o zbyt wiele b\u0142\u0119d\xF3w. Wi\u0119cej szczeg\xF3\u0142\xF3w znajdziesz w logu wywo\u0142a\u0144. Kliknij poni\u017Cszy przycisk, aby ponownie aktywowa\u0107 ten webhook. Po aktywacji nie zapomnij go zapisa\u0107." } },
      "activate": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aktywuj" } }
    },
    "deprecatedEventType": {
      "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Przestarza\u0142y typ zdarzenia" } },
      "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ten webhook nie otrzymuje jednocze\u015Bnie informacji o wszystkich zmienionych wierszach. Przekonwertuj go na typ zdarzenia w stylu wsadowym. Spowoduje to zmian\u0119 \u0142adunku tre\u015Bci JSON na format, kt\xF3ry zawiera wiele wierszy." } },
      "convert": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Konwertuj" } }
    },
    "triggerWhenFieldsHaveChanged": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Uruchamiany, gdy nast\u0105pi\u0105 zmiany w polach" } },
    "helpTriggerWhenFieldsHaveChanged": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zostanie uruchomiony wy\u0142\u0105cznie wtedy, gdy zmieni\u0105 si\u0119 warto\u015Bci w wybranych polach." } }
  },
  "webhook": {
    "details": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "szczeg\xF3\u0142y" } },
    "lastCall": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Ostatnie wywo\u0142anie: " }, { "t": 4, "k": "lastCallTime" }] } },
    "noCalls": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Brak wywo\u0142a\u0144" } },
    "callLog": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Rejestr wywo\u0142a\u0144" } },
    "triggerDescription": { "t": 0, "b": { "t": 1, "c": [{ "t": 2, "i": [{ "t": 3 }], "s": "Wyzwalany ka\u017Cdorazowo" }, { "t": 2, "i": [{ "t": 3, "v": "Wyzwalany w przypadku " }, { "t": 4, "k": "count" }, { "t": 3, "v": " zdarzenia" }] }, { "t": 2, "i": [{ "t": 3, "v": "Wyzwalany w przypadku " }, { "t": 4, "k": "count" }, { "t": 3, "v": " zdarze\u0144" }] }] } }
  },
  "createWebhook": {
    "errorTableWebhookMaxLimitExceededTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Przekroczona maksymalna liczba webhook\xF3w" } },
    "errorTableWebhookMaxLimitExceededDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nie mo\u017Cna utworzy\u0107 webhooka, poniewa\u017C przekroczono maksymaln\u0105 liczb\u0119 webhook\xF3w na tabel\u0119." } }
  },
  "sidebar": {
    "viewAPI": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wy\u015Bwietl dokumentacj\u0119 API" } },
    "createTable": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nowa tabela" } }
  },
  "sidebarItem": {
    "exportTable": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Eksportuj tabel\u0119" } },
    "webhooks": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Webhooki" } },
    "lastSynced": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ostatnia synchronizacja" } },
    "notSynced": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "nie zsynchronizowana" } },
    "sync": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zsynchronizuj tabel\u0119" } },
    "updateSyncConfig": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zaktualizuj konfiguracj\u0119 synchronizacji" } },
    "importFile": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Importuj plik" } }
  },
  "apiToken": {
    "create": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "tworzenie" } },
    "read": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "odczyt" } },
    "update": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "aktualizacja" } },
    "delete": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "usuwanie" } },
    "tokenPrefix": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Token:" } },
    "viewAPIDocs": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wy\u015Bwietl dokumentacj\u0119 API" } },
    "generateNewToken": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wygeneruj nowy token" } },
    "showOrHide": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Poka\u017C lub ukryj token" } },
    "copyToClipboard": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kopiuj do schowka" } },
    "showDatabases": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "poka\u017C bazy danych" } }
  },
  "apiTokenSettings": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tokeny bazy danych" } },
    "createToken": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Utw\xF3rz token" } },
    "noTokensMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nie utworzy\u0142e\u015B jeszcze \u017Cadnego tokena bazy danych. Token\xF3w mo\u017Cna u\u017Cy\u0107 do uwierzytelnienia dost\u0119pu do endpoint\xF3w REST API w celu dodawania, odczytywania, aktualizowania i usuwania wierszy. Mo\u017Cliwe jest nadanie uprawnie\u0144 na poziomie tabeli." } },
    "hasFullPermissions": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pe\u0142ne uprawnienia, w tym do element\xF3w podrz\u0119dnych." } },
    "hasOnlySelectedPermissions": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Uprawnienia tylko do wybranych element\xF3w podrz\u0119dnych." } },
    "noPermissions": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Bez uprawnie\u0144." } },
    "createNewTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Utw\xF3rz nowy token bazy danych" } },
    "backToOverview": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Powr\xF3t do podsumowania" } }
  },
  "apiTokenForm": {
    "nameLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nazwa" } },
    "workspaceLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Obszar roboczy" } }
  },
  "apiDocsSelectDatabase": {
    "needOneDatabase": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aby wy\u015Bwietli\u0107 dokumentacj\u0119 API, musi by\u0107 utworzona przynajmniej jedna baza danych." } }
  },
  "apiDocsExample": {
    "requestSample": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Przyklad \u017C\u0105dania" } },
    "responseSample": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Przyk\u0142ad odpowiedzi" } },
    "userFieldNames": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nazwy p\xF3l u\u017Cytkownika" } }
  },
  "apiDocsParameter": {
    "optional": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "opcjonalny" } },
    "defaultValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Domy\u015Blnie: " }, { "t": 4, "k": "value" }] } }
  },
  "apiDocsTableGetRow": {
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Pobierz pojedynczy wiersz " }, { "t": 4, "k": "name" }, { "t": 3, "v": "." }] } },
    "rowId": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Unikatowy identyfikator \u017C\u0105danego wiersza." } }
  },
  "apiDocsErrors": {
    "errorCode": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kod b\u0142\u0119du" } },
    "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nazwa" } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Opis" } },
    "okDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u017B\u0105danie zako\u0144czone pomy\u015Blnie." } },
    "badRequestDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u017B\u0105danie zawiera nieprawid\u0142owe warto\u015Bci lub nie mo\u017Cna zinterpretowa\u0107 formatu JSON." } },
    "unauthorizedDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Gdy pr\xF3bujesz uzyska\u0107 dost\u0119p do endpointu bez wa\u017Cnego tokena bazy danych." } },
    "notFoundDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nie znaleziono wiersza ani tabeli." } },
    "requestEntityTooLargeDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u017B\u0105danie przekroczy\u0142o maksymalny dozwolony rozmiar payloadu." } },
    "internalErrorDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wyst\u0105pi\u0142 nieoczekiwany b\u0142\u0105d serwera." } },
    "badGatewayDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Baserow uruchamia si\u0119 ponownie lub wyst\u0105pi\u0142a nieoczekiwana awaria." } },
    "unavailableDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Serwer nie m\xF3g\u0142 przetworzy\u0107 Twojego \u017C\u0105dania na czas." } }
  },
  "apiDocsTableFields": {
    "tableTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Tabela " }, { "t": 4, "k": "name" }] } },
    "tableId": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "ID tej tabeli:" } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Ka\u017Cdy wiersz w tabeli " }, { "t": 4, "k": "name" }, { "t": 3, "v": " zawiera nast\u0119puj\u0105ce pola." }] } },
    "id": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "ID" } },
    "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nazwa" } },
    "type": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Rodzaj" } },
    "compatibleFilters": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kompatybilne filtry" } }
  },
  "apiDocsTableListRows": {
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Aby wy\u015Bwietli\u0107 list\u0119 wierszy w tabeli *" }, { "t": 4, "k": "name" }, { "t": 3, "v": "*, nale\u017Cy wys\u0142a\u0107 \u017C\u0105danie `GET` do endpointu *" }, { "t": 4, "k": "name" }, { "t": 3, "v": "*. Odpowied\u017A zostanie podzielona na strony i domy\u015Blnie zwracana jest pierwsza strona. Konkretna strona zostanie zwr\xF3cona po podaniu parametr\xF3w zapytania `page` oraz `size`." }] } },
    "page": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Okre\u015Bla, kt\xF3ra strona powinna zosta\u0107 zwr\xF3cona." } },
    "size": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Okre\u015Bla, ile wierszy powinno by\u0107 zwr\xF3conych na ka\u017Cdej stronie." } },
    "userFieldNames": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Je\u015Bli w wywo\u0142aniu GET okre\u015Blono parametr `user_field_names` i jako jego warto\u015B\u0107 podano: `y`, `yes`, `true`, `t`, `on`, `1` lub pusty ci\u0105g znak\xF3w, to nazwy p\xF3l zwr\xF3cone przez endpoint b\u0119d\u0105 faktycznymi nazwami p\xF3l.\n\nJe\u015Bli w wywo\u0142aniu GET nie podano parametru `user_field_names` lub je\u015Bli jego warto\u015B\u0107 nie odpowiada \u017Cadnej z powy\u017Cszych warto\u015Bci, to wszystkie zwr\xF3cone nazwy p\xF3l b\u0119d\u0105 mia\u0142y posta\u0107 `field_` oraz ID pola. Na przyk\u0142ad `field_1` odnosi si\u0119 do pola o identyfikatorze `1`.\n\n Ponadto, je\u017Celi w wywo\u0142aniu GET podano warto\u015B\u0107 `user_field_names`, to zmienia si\u0119 zachowanie parametr\xF3w `order_by`, `include` i `exclude`. Parametry te powinny zawiera\u0107 listy z rozdzielonymi przecinkami rzeczywistymi nazwami p\xF3l." } },
    "search": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Je\u015Bli zostanie podane, zostan\u0105 zwr\xF3cone tylko wiersze z danymi pasuj\u0105cymi do zapytania." } },
    "orderBy": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Opcjonalnie wiersze mog\u0105 by\u0107 uporz\u0105dkowane wed\u0142ug p\xF3l oddzielonych przecinkami. Domy\u015Blnie lub po poprzedzeniu znakiem '+', pole jest uporz\u0105dkowane rosn\u0105co (A-Z), a po poprzedzeniu znakiem '-' malej\u0105co (Z-A).\n\n #### Z `user_field_names`:\n\n parametr `order_by` powinien by\u0107 rozdzielon\u0105 przecinkami list\u0105 nazw p\xF3l, wg. kt\xF3rych maj\u0105 by\u0107 posortowane wiersze. Na przyk\u0142ad, je\u015Bli podano parametr `order_by=My Field,-My Field 2`, to wiersze zostan\u0105 uporz\u0105dkowane rosn\u0105co wg. pola `My Field`. Je\u015Bli wyst\u0119puj\u0105 pola o tej samej warto\u015Bci, to pola te zostan\u0105 uporz\u0105dkowane malej\u0105co wg. pola o nazwie `My Field 2`.\n\n Je\u015Bli wyst\u0119puj\u0105 pola, kt\xF3rych nazwy zaczynaj\u0105 si\u0119 od `+` lub `-`, to nale\u017Cy poprzedzi\u0107 je dodatkowymi znakami `+` lub `-`, np. `+-Name`.\n\n Nazwy p\xF3l zawieraj\u0105ce przecinki musz\u0105 by\u0107 otoczone cudzys\u0142owami, np. `\"Name ,\"`. Natomiast je\u015Bli nazwy p\xF3l zawieraj\u0105 znak (lub znaki) cudzys\u0142owiu, to nale\u017Cy u\u017Cy\u0107 znaku `\\` (escape), np. `Name \\\"`. \n\n#### Bez `user_field_names`:\n\n parametr `order_by` powinien by\u0107 rozdzielon\u0105 przecinkami list\u0105 p\xF3l w postaci `field_` oraz ID pola, wg. kt\xF3rego maj\u0105 by\u0107 posortowane wiersze. Na przyk\u0142ad, je\u015Bli podano parametr `order_by=field_1,-field_2`, to wiersze zostan\u0105 uporz\u0105dkowane rosn\u0105co wg. `field_1`. Je\u015Bli wyst\u0119puj\u0105 pola o tej samej warto\u015Bci, to pola te zostan\u0105 uporz\u0105dkowane malej\u0105co wg. `field_2`." } },
    "filter": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wiersze mog\u0105 by\u0107 opcjonalnie filtrowane przy u\u017Cyciu tych samych filtr\xF3w, kt\xF3re s\u0105 skonfigurowane dla widok\xF3w. Mo\u017Cna u\u017Cy\u0107 wielu filtr\xF3w, pod warunkiem, \u017Ce s\u0105 one w tym samym formacie. Zmienne `field` i `filter` wskazuj\u0105 odpowiednio, jak i gdzie zastosowa\u0107 filtr.\n\n#### Z `user_field_names`:\n\nNa przyk\u0142ad, je\u015Bli opcjonalnie podano nast\u0119puj\u0105cy parametr: `filter__Name__equal=test`, zwr\xF3cone zostan\u0105 tylko wiersze, w kt\xF3rych warto\u015B\u0107 `Name` jest r\xF3wna \"test\". Metoda ta jest wstecznie kompatybilna i w przypadku niepowodzenia z nazw\u0105 sprawdzi `field_id`.\n\n#### Bez `user_field_names`:\n\nNa przyk\u0142ad, je\u015Bli opcjonalnie podano parametr: `filter__field_1__equal=test`, to zwr\xF3cone zostan\u0105 tylko wiersze, w kt\xF3rych warto\u015B\u0107 `field_1` jest r\xF3wna 'test'.\n\nNale\u017Cy pami\u0119ta\u0107, \u017Ce je\u015Bli podany jest parametr filtr\xF3w, to zostanie on pomini\u0119ty. " } },
    "filterLink": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tutaj znajdziesz list\u0119 wszystkich filtr\xF3w." } },
    "filterType": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "- `AND`: wskazuje, \u017Ce wiersze musz\u0105 pasowa\u0107 do wszystkich filtr\xF3w.\n- `OR`: wskazuje, \u017Ce wiersze musz\u0105 pasowa\u0107 tylko do jednego z filtr\xF3w.\n\n Ma to zastosowanie wy\u0142\u0105cznie, gdy podano co najmniej dwa filtry." } },
    "include": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": 'Domy\u015Blnie odpowied\u017A zawiera wszystkie pola. Podaj\u0105c parametr zapytania include, mo\u017Cna okre\u015Bli\u0107 podzbi\xF3r p\xF3l.\n\n #### Z `user_field_names`:\n\n parametr `include` powinien zawiera\u0107 oddzielone przecinkami nazwy p\xF3l, kt\xF3re maj\u0105 by\u0107 umieszczone w wynikach. Np., je\u015Bli podano parametr zapytania GET: `include=My Field,-My Field 2` to tylko te pola zostan\u0105 uwzgl\u0119dnione (chyba, \u017Ce zostan\u0105 one jednoznacznie wykluczone).\n\n Nazwy p\xF3l zawieraj\u0105ce przecinki musz\u0105 by\u0107 otoczone cudzys\u0142owami: `"Name ,"`. Je\u015Bli nazwy p\xF3l zawieraj\u0105 cudzys\u0142owy, to musz\u0105 zosta\u0107 poprzedzone znakiem `\\`. Na przyk\u0142ad: `Name \\"`.\n\n #### Bez `user_field_names`:\n\n parametr `include` powinnien zawiera\u0107 oddzielone przecinkami nazwy p\xF3l w postaci `field_` oraz ID pola, kt\xF3re maj\u0105 by\u0107 umieszczone w wynikach. Np., je\u015Bli podano parametr zapytania GET: `include=field_1,field_2` to tylko pola o ID `1` i ID `2` zostan\u0105 uwzgl\u0119dnione (chyba, \u017Ce zostan\u0105 one jednoznacznie wykluczone).' } },
    "exclude": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": 'Domy\u015Blnie odpowied\u017A zawiera wszystkie pola. Podaj\u0105c parametr zapytania exclude, mo\u017Cna okre\u015Bli\u0107 podzbi\xF3r p\xF3l.\n\n #### Z `user_field_names`:\n\n parametr `exclude` powinien zawiera\u0107 oddzielone przecinkami nazwy p\xF3l, kt\xF3re maj\u0105 by\u0107 wy\u0142\u0105czone z wynik\xF3w. Np., je\u015Bli podano parametr zapytania GET: `exclude=My Field,-My Field 2` to tylko te pola zostan\u0105 wykluczone.\n\n Nazwy p\xF3l zawieraj\u0105ce przecinki musz\u0105 by\u0107 otoczone cudzys\u0142owami: `"Name ,"`. Je\u015Bli nazwy p\xF3l zawieraj\u0105 cudzys\u0142owy, to musz\u0105 zosta\u0107 poprzedzone znakiem `\\`. Na przyk\u0142ad: `Name \\"`.\n\n #### Bez `user_field_names`:\n\n parametr `exclude` powinien zawiera\u0107 oddzielone przecinkami nazwy p\xF3l w postaci `field_` oraz ID p\xF3l, kt\xF3re maj\u0105 by\u0107 wykluczone z wynik\xF3w. Np., je\u015Bli podano parametr zapytania GET: `exclude=field_1,field_2`, to tylko pola o ID `1` i ID `2` zostan\u0105 wykluczone.' } },
    "viewId": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Domy\u015Blnie zastosowane s\u0105 tylko te filtry i posortowania, kt\xF3re zosta\u0142y zdefiniowane w parametrach zapytania. Filtry i posortowania widoku mo\u017Cna doda\u0107 poprzez podanie `id` widoku w parametrze `view_id` zapytania GET. Na przyk\u0142ad, je\u015Bli podasz parametr zapytania GET: `view_id=1`, to zostan\u0105 zastosowane filtry i posortowania zdefiniowane w widoku o ID `1`. Warto\u015B\u0107 `view_id` widoku mo\u017Cna znale\u017A\u0107 w menu kontekstowym ka\u017Cdego widoku, jest to ci\u0105g cyfr w nawiasach umieszczony za nazw\u0105 widoku.\n\n #### Z `filter__" }, { "t": 4, "k": "field" }, { "t": 3, "v": "__" }, { "t": 4, "k": "filter" }, { "t": 3, "v": "`. \n\n Zastosowane zostan\u0105 zar\xF3wno filtr podany w parametrze zapytania, jak i filtry zdefiniowane w widoku.\n\n #### Z `order_by` \n\n Je\u015Bli podany jest parametr `order_by` (sortuj wg.), to sortowanie zdefiniowane w widoku zostanie zignorowane." }] } },
    "filtersBuilder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Otw\xF3rz konfiguracj\u0119 parametr\xF3w filtr\xF3w" } },
    "filters": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }, { "t": 9 }, { "t": 3 }, { "t": 9 }, { "t": 3 }, { "t": 9 }, { "t": 3 }, { "t": 9 }, { "t": 3 }, { "t": 9 }, { "t": 3 }, { "t": 9 }, { "t": 3 }, { "t": 9 }, { "t": 3 }, { "t": 9 }, { "t": 3 }, { "t": 9 }, { "t": 3 }, { "t": 9 }, { "t": 3 }, { "t": 9 }, { "t": 3 }, { "t": 9 }, { "t": 3 }], "s": 'Wiersze mog\u0105 by\u0107 opcjonalnie filtrowane przy u\u017Cyciu tych samych filtr\xF3w, kt\xF3re s\u0105 skonfigurowane dla widok\xF3w. Ten parametr akceptuje serializowany ci\u0105g JSON zawieraj\u0105cy hierarchi\u0119 filtr\xF3w, kt\xF3re b\u0119d\u0105 u\u017Cyte w danym widoku. Hierarchia filtr\xF3w jest zagnie\u017Cd\u017Con\u0105 struktur\u0105 zawieraj\u0105c\u0105 filtry, kt\xF3re maj\u0105 by\u0107 u\u017Cyte.\n\n#### Z `user_field_names`:\n\nPrzyk\u0142ad prawid\u0142owej hierarchii filtr\xF3w: `{"filter_type": "AND", "filters": [{"field": "Name", "type": "equal", "value": "test"}]}`.\n\n#### Bez `user_field_names`:\n\nNa przyk\u0142ad, je\u015Bli opcjonalnie zostanie podany nast\u0119puj\u0105cy parametr: `{"filter_type": "AND", "filters": [{"field": 1, "type": "equal", "value": "test"}]}`\n\nNale\u017Cy pami\u0119ta\u0107, \u017Ce je\u015Bli ten parametr zostanie podany, to wszystkie inne parametry `filter__{field}__{filter}` zostan\u0105 pomini\u0119te, podobnie jak parametr filter_type.' } },
    "join": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Umo\u017Cliwia wyszukiwanie warto\u015Bci p\xF3l z tabeli docelowej za pomoc\u0105 istniej\u0105cego pola wierszy powi\u0105zanych. Nazwa parametru musi by\u0107 nazw\u0105 istniej\u0105cego pola wiersza powi\u0105zanego, po kt\xF3rym nale\u017Cy dopisa\u0107 __join. Warto\u015Bci\u0105 wyra\u017Cenia powinna by\u0107 lista nazw p\xF3l, dla kt\xF3rych maj\u0105 by\u0107 wyszukane dodatkowe warto\u015Bci. Mo\u017Cna poda\u0107 jedno lub wi\u0119cej p\xF3l docelowych. Nie ma jednak mo\u017Cliwo\u015Bci wyszukania warto\u015Bci w samym polu wiersza powi\u0105zanego w tabeli docelowej.\n\n #### Z `user_field_names`:\n\n parametr `join` powinien by\u0107 rozdzielonymi przecinkami nazwami p\xF3l, kt\xF3re maj\u0105 by\u0107 uwzgl\u0119dnione w wynikach. Np. je\u015Bli podano parametr zapytania GET: `LinkRowField__join=MyField,MyField2`, to w odpowiedzi zostan\u0105 uwzgl\u0119dnione warto\u015Bci `MyField` i `MyField2` z tabeli, kt\xF3ra jest powi\u0105zana za pomoc\u0105 pola `LinkRowField`.\n\n#### Bez `user_field_names`:\n\n parametr `join` powinien by\u0107 rozdzielon\u0105 przecinkami list\u0105 w postaci `field_` oraz ID p\xF3l, kt\xF3re maj\u0105 by\u0107 uwzgl\u0119dnione w wynikach. Np. je\u015Bli podano parametr zapytania GET: `field_1__join=field_2,field_3`, to w odpowiedzi zostan\u0105 uwzgl\u0119dnione warto\u015Bci `field_2` i `field_3` z tabeli, kt\xF3ra jest powi\u0105zana za pomoc\u0105 pola `field_1`." } },
    "test": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }, { "t": 9 }, { "t": 3 }, { "t": 9 }, { "t": 3 }, { "t": 9 }, { "t": 3 }, { "t": 9 }], "s": '`{"filter_type": "AND", "filters": [{"field": "Name", "type": "equal", "value": "test"}]}' } }
  },
  "apiDocsIntro": {
    "intro": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Baza danych " }, { "t": 4, "k": "name" }, { "t": 3, "v": " ma mo\u017Cliwo\u015B\u0107 prostej integracji z dowolnym systemem zewn\u0119trznym. Interfejs API bazy jest zgodny z semantyk\u0105 REST, wykorzystuje format JSON do kodowania obiekt\xF3w oraz u\u017Cywa standardowych kod\xF3w HTTP i komunikat\xF3w o b\u0142\u0119dach odczytywalnych maszynowo lub przez cz\u0142owieka." }] } },
    "autoDocDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Niniejsza dokumentacja zosta\u0142a wygenerowana automatycznie na podstawie tabel i p\xF3l, kt\xF3re znajduj\u0105 si\u0119 w Twojej bazie danych. Je\u015Bli dokonasz zmian w swojej bazie danych, tabeli lub polach, mo\u017Ce si\u0119 okaza\u0107, \u017Ce struktura API r\xF3wnie\u017C si\u0119 zmieni. W takim przypadku upewnij si\u0119, czy trzeba zaktualizowa\u0107 konfiguracj\u0119 API." } },
    "databaseId": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "ID tej bazy danych:" } },
    "jsClient": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Przyk\u0142adowy klient API w j\u0119zyku JavaScript:" } },
    "pythonClient": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Przyk\u0142adowy klient API w j\u0119zyku Python:" } }
  },
  "apiDocsTableListFields": {
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Aby wylistowa\u0107 pola tabeli " }, { "t": 4, "k": "name" }, { "t": 3, "v": ", nale\u017Cy wys\u0142a\u0107 \u017C\u0105danie `GET` do endpointu " }, { "t": 4, "k": "name" }, { "t": 3, "v": ". Wygenerowanie listy p\xF3l jest mo\u017Cliwe tylko wtedy, gdy token uprawnia do odczytu, tworzenia lub aktualizacji." }] } },
    "resultFieldProperties": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Atrybuty pola wynikowego" } },
    "id": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Klucz g\u0142\xF3wny pola. Mo\u017Cna go u\u017Cy\u0107 do wygenerowania nazwy kolumny w bazie danych poprzez dodanie prefiksu `field_`." } },
    "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nazwa pola." } },
    "tableId": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "ID tabeli powi\u0105zanej." } },
    "order": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kolejno\u015B\u0107 p\xF3l w tabeli, zaczyna si\u0119 od 0." } },
    "primary": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wskazuje, czy pole jest polem g\u0142\xF3wnym. Je\u015Bli `true` (prawda), pole nie mo\u017Ce by\u0107 usuni\u0119te, a warto\u015B\u0107 powinna reprezentowa\u0107 ca\u0142y wiersz." } },
    "type": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Rodzaj zdefiniowany dla tego pola." } },
    "extraProps": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Niekt\xF3re dodatkowe atrybuty nie zosta\u0142y opisane, poniewa\u017C dotycz\u0105 wy\u0142\u0105cznie niekt\xF3rych p\xF3l." } },
    "readOnly": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wskazuje, czy pole jest tylko do odczytu. Je\u015Bli ma warto\u015B\u0107 true (prawda), to nie mo\u017Cna zmieni\u0107 warto\u015Bci kom\xF3rki." } },
    "descriptionField": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Opis pola" } }
  },
  "apiDocsTableDeleteRow": {
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Usuwa istniej\u0105cy wiersz " }, { "t": 4, "k": "name" }, { "t": 3, "v": "." }] } },
    "rowId": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Unikalny identyfikator wiersza, kt\xF3ry ma zosta\u0107 usuni\u0119ty." } }
  },
  "apiDocsTableDeleteRows": {
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Usuwa istniej\u0105ce wiersze " }, { "t": 4, "k": "name" }, { "t": 3, "v": "." }] } },
    "items": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tablica identyfikator\xF3w wierszy, kt\xF3re powinny zosta\u0107 usuni\u0119te." } }
  },
  "apiDocsTableMoveRow": {
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Przenosi istniej\u0105cy wiersz " }, { "t": 4, "k": "name" }, { "t": 3, "v": " przed inny wiersz. Je\u015Bli nie podano parametru `before_id`, to wiersz zostanie przeniesiony na koniec tabeli." }] } },
    "rowId": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Przenosi wiersz na podstawie warto\u015Bci." } },
    "before": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Przenosi wiersz na podstawie `row_id` przed wiersz z podan\u0105 warto\u015Bci\u0105. Je\u015Bli nie podano \u017Cadnej warto\u015Bci, to wiersz zostanie przeniesiony na koniec." } }
  },
  "apiDocsTableUpdateRow": {
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Aktualizuje istniej\u0105cy wiersz " }, { "t": 4, "k": "name" }, { "t": 3, "v": "." }] } },
    "rowId": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Unikatowy identyfikator wiersza, kt\xF3ry ma zosta\u0107 zaktualizowany." } },
    "before": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Je\u015Bli zostanie podane ID wiersza, to nowo utworzony wiersz zostanie umieszczony przed wierszem z tym ID." } }
  },
  "apiDocsTableUpdateRows": {
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Aktualizuje istniej\u0105ce wiersze " }, { "t": 4, "k": "name" }, { "t": 3, "v": "." }] } },
    "id": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "ID wiersza." } }
  },
  "apiDocsTableCreateRow": {
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Utw\xF3rz nowy wiersz " }, { "t": 4, "k": "name" }, { "t": 3, "v": "." }] } },
    "before": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Je\u015Bli zostanie podane ID wiersza, to nowo utworzony wiersz zostanie umieszczony przed wierszem z tym ID." } }
  },
  "apiDocsTableCreateRows": {
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Utw\xF3rz nowe wiersze " }, { "t": 4, "k": "name" }, { "t": 3, "v": "." }] } },
    "before": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Je\u015Bli zostanie podane ID wiersza, to nowo utworzone wiersze zostan\u0105 umieszczone przed wierszem z tym ID." } }
  },
  "apiDocsAuth": {
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Baserow u\u017Cywa prostego uwierzytelniania opartego na tokenach. Aby u\u017Cy\u0107 opisanych poni\u017Cej endpoint\xF3w, nale\u017Cy w " }, { "t": 4, "k": "settingsLink" }, { "t": 3, "v": " wygenerowa\u0107 co najmniej jeden token API. Dla ka\u017Cdego tokenu mo\u017Cliwe jest nadanie uprawnie\u0144 do tworzenia, odczytu, aktualizacji i usuwania a\u017C do poziomu tabeli. Mo\u017Cna uwierzytelni\u0107 si\u0119 w API, podaj\u0105c token w nag\u0142\xF3wku autoryzacji HTTP. Wszystkie \u017C\u0105dania API musz\u0105 by\u0107 uwierzytelnione i przes\u0142ane za po\u015Brednictwem protoko\u0142u HTTPS." }] } },
    "settingsLink": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "ustawienia" } }
  },
  "apiDocsFilters": {
    "filter": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Filtr" } },
    "exampleValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Przyk\u0142adowa warto\u015B\u0107" } },
    "example": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kompletny przyk\u0142ad" } },
    "field": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "pole " }, { "t": 4, "k": "name" }] } },
    "deprecated": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "wycofany" } }
  },
  "fieldTextSubForm": {
    "placeholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tekst domy\u015Blny" } }
  },
  "fieldSingleSelectSubForm": {
    "optionsLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Opcje" } },
    "defaultOptionLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Opcja domy\u015Blna" } }
  },
  "fieldSingleSelectDropdown": {
    "notFound": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nie znaleziono opcji" } }
  },
  "fieldDateSubForm": {
    "dateFormatLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Format daty" } },
    "dateFormatEuropean": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Europejski" } },
    "dateFormatUS": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "US" } },
    "dateFormatISO": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "ISO" } },
    "includeTimeLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Uwzgl\u0119dnij godzin\u0119" } },
    "timeFormatLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Format czasu" } },
    "24Hour": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "24 godziny" } },
    "12Hour": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "12 godzin" } },
    "showTimezoneLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Poka\u017C stref\u0119 czasow\u0105" } },
    "forceTimezoneLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ustaw stref\u0119 czasow\u0105 dla wszystkich wsp\xF3\u0142pracownik\xF3w" } },
    "addTimezoneOffsetLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Przelicz warto\u015Bci (dodaj " }, { "t": 4, "k": "utcOffsetDiff" }, { "t": 3, "v": " minut)" }] } },
    "subTimezoneOffsetLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Przelicz warto\u015Bci (odejmij " }, { "t": 4, "k": "utcOffsetDiff" }, { "t": 3, "v": " minut)" }] } },
    "forceTimezoneValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Strefa czasowa" } }
  },
  "fieldLinkRowSubForm": {
    "noTable": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aby utworzy\u0107 powi\u0105zanie, potrzebna jest co najmniej jeszcze jedna tabela w tej samej bazie danych." } },
    "selectTableLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wybierz tabel\u0119, z kt\xF3r\u0105 chcesz utworzy\u0107 powi\u0105zanie" } },
    "hasRelatedFieldLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Utw\xF3rz pole po\u0142\u0105czone w tabeli powi\u0105zanej" } },
    "limitToView": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ogranicz wy\u015Bwietlane opcje" } },
    "limitToViewDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zwr\xF3\u0107 uwag\u0119, \u017Ce ograniczenie ma charakter wy\u0142\u0105cznie wizualny. Nadal mo\u017Cna tworzy\u0107 powi\u0105zania poza wy\u015Bwietlanymi opcjami za po\u015Brednictwem powi\u0105zanej tabeli lub interfejsu API." } },
    "allowMultipleRelations": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zezw\xF3l na tworzenie powi\u0105za\u0144 wielokrotnych" } }
  },
  "fieldSelectOptions": {
    "add": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dodaj opcj\u0119" } }
  },
  "fieldNumberSubForm": {
    "typeLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Rodzaj liczby" } },
    "integer": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Liczba ca\u0142kowita" } },
    "decimal": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dziesi\u0119tny" } },
    "decimalPlacesLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Miejsca dziesi\u0119tne" } },
    "allowNegative": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zezw\xF3l na u\u017Cywanie warto\u015Bci ujemnych" } },
    "separatorLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Separator tysi\u0119cy i u\u0142amk\xF3w dziesi\u0119tnych" } },
    "prefixPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Prefiks" } },
    "suffixPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sufiks" } },
    "prefixAndSuffixLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Prefiks / sufiks" } },
    "spaceComma": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Spacja, przecinek (1 000 000,00)" } },
    "spacePeriod": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Spacja, kropka (1 000 000.00)" } },
    "commaPeriod": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Przecinek, kropka (1,000,000.00)" } },
    "periodComma": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kropka, przecinek (1.000.000,00)" } },
    "noFormatting": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Bez formatowania" } },
    "defaultValueLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Warto\u015B\u0107 domy\u015Blna" } },
    "defaultValuePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wprowad\u017A warto\u015B\u0107 domy\u015Bln\u0105" } }
  },
  "fieldContext": {
    "editField": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Edytuj pole" } },
    "deleteField": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Usu\u0144 pole" } },
    "hideField": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ukryj pole" } },
    "showField": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Poka\u017C pole" } },
    "changePrimaryField": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zmie\u0144 pole podstawowe" } }
  },
  "fieldForm": {
    "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nazwa" } },
    "fieldAlreadyExists": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pole o tej nazwie ju\u017C istnieje." } },
    "nameNotAllowed": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tej nazwy pola nie mo\u017Cna u\u017Cy\u0107." } },
    "nameTooLong": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ta nazwa pola jest zbyt d\u0142uga." } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Opis" } },
    "addDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dodaj opis" } },
    "dbIndex": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Indeks" } },
    "dbIndexError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ten typ pola nie mo\u017Ce by\u0107 indeksowany. Usu\u0144 indeks lub zmie\u0144 rodzaj pola." } },
    "dbIndexDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Indeksowanie mo\u017Ce zwi\u0119kszy\u0107 wydajno\u015B\u0107 filtrowania, ale spowalnia operacje tworzenia, aktualizacji i usuwania." } },
    "defaultValueDisabledByConstraint": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nie mo\u017Cna ustawi\u0107 warto\u015Bci domy\u015Blnej dla pola z warto\u015Bciami unikalnymi" } },
    "dbIndexDisabledTooltip": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Indeksowanie nie jest dost\u0119pne w przypadku tego typu pola." } },
    "defaultValueOverriddenByView": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "To pole ma ustawion\u0105 warto\u015B\u0107 domy\u015Bln\u0105 na poziomie widoku, kt\xF3ra zostanie u\u017Cyta zamiast tej warto\u015Bci domy\u015Blnej." } }
  },
  "fieldLookupSubForm": {
    "noTable": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aby utworzy\u0107 pole odno\u015Bnika, potrzebujesz co najmniej jednego pola wiersza linku." } },
    "selectThroughFieldLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wybieranie pola wiersza \u0142\u0105cza" } },
    "selectTargetFieldLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wybierz pole do wyszukania" } }
  },
  "fieldFormulaNumberSubForm": {
    "typeLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Rodzaj liczby" } },
    "integer": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Liczba ca\u0142kowita" } },
    "decimal": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Format dziesi\u0119tny" } },
    "decimalPlacesLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Miejsca dziesi\u0119tne" } },
    "allowNegative": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mo\u017Ciwe warto\u015Bci ujemnych" } }
  },
  "fieldRatingSubForm": {
    "maxValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Warto\u015B\u0107 maksymalna" } },
    "color": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kolor" } },
    "style": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Styl" } }
  },
  "rowCreateModal": {
    "addField": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dodaj pole" } }
  },
  "selectRowContent": {
    "search": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Szukaj wierszy" } },
    "hideFields": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ukryj pola" } }
  },
  "rowEditModal": {
    "addField": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dodaj pole" } },
    "showHiddenFields": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wy\u015Bwietl pola ukryte" } },
    "hideHiddenFields": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ukryj ukryte pola" } }
  },
  "rowEditFieldMultipleSelect": {
    "addOption": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wybierz opcj\u0119" } }
  },
  "rowEditFieldFile": {
    "addFile": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dodaj plik" } },
    "sizes": {
      "0": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Bajty" } },
      "1": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "KB" } },
      "2": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "MB" } },
      "3": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "GB" } },
      "4": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "TB" } },
      "5": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "PB" } }
    }
  },
  "rowEditFieldLinkRow": {
    "addLink": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wybierz link" } },
    "keepOnlyOneValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zachowaj tylko jedn\u0105 warto\u015B\u0107. To pole obs\u0142uguje tylko jedn\u0105 relacj\u0119. Warto\u015B\u0107 zostanie zapisana, je\u015Bli pozostanie tylko jedna relacja." } }
  },
  "tableCSVImporter": {
    "chooseFileLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wybierz plik CSV" } },
    "chooseFileDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mo\u017Cesz zaimportowa\u0107 istniej\u0105cy plik typu CSV (.csv) zawieraj\u0105cy dane w formie tabelarycznej. Wi\u0119kszo\u015B\u0107 program\xF3w do obs\u0142ugi arkuszy kalkulacyjnych umo\u017Cliwia eksport arkusza w formacie CSV." } },
    "chooseFile": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wybierz plik CSV" } },
    "columnSeparator": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Separator kolumn" } },
    "recordSeparator": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "separator rekord\xF3w" } },
    "unitSeparator": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "separator jednostek" } },
    "encoding": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kodowanie znak\xF3w" } },
    "firstRowHeader": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pierwszy wiersz to nag\u0142\xF3wek" } },
    "limitFileSize": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Maksymalny rozmiar pliku: " }, { "t": 4, "k": "limit" }, { "t": 3, "v": " MB." }] } },
    "limitError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Nie jest mo\u017Cliwe zaimportowanie wi\u0119cej ni\u017C " }, { "t": 4, "k": "limit" }, { "t": 3, "v": " wierszy." }] } },
    "emptyCSV": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ten plik CSV jest pusty." } }
  },
  "importer": {
    "fieldDefaultName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Pole " }, { "t": 4, "k": "count" }] } },
    "loading": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u0141adowanie pliku" } },
    "decoding": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dekodowanie danych" } },
    "parsing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Analiza sk\u0142adniowa danych" } },
    "preparing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dane s\u0105 przygotowywane" } },
    "inProgress": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "W trakcie..." } }
  },
  "tableForm": {
    "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nazwa" } }
  },
  "tableXMLImporter": {
    "fileLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wybierz plik XML" } },
    "fileDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mo\u017Cna zaimportowa\u0107 plik w formacie XML (.xml) z danymi w formacie tabelarycznej, tj.:" } },
    "chooseButton": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wybierz plik XML" } },
    "processingError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Podczas przetwarzania pliku XML wyst\u0105pi\u0142 b\u0142\u0105d: " }, { "t": 4, "k": "errors" }] } },
    "emptyError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ten plik XML jest pusty." } },
    "limitFileSize": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Maksymalny rozmiar pliku: " }, { "t": 4, "k": "limit" }, { "t": 3, "v": " MB." }] } },
    "limitError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Nie mo\u017Cna zaimportowa\u0107 wi\u0119cej ni\u017C " }, { "t": 4, "k": "limit" }, { "t": 3, "v": " wierszy." }] } }
  },
  "tableJSONImporter": {
    "fileLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wybierz plik JSON" } },
    "fileDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mo\u017Cesz zaimportowa\u0107 plik JSON (.json) z danymi w formacie tabelarycznym, tj:" } },
    "chooseButton": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wybierz plik JSON" } },
    "encodingLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kodowanie znak\xF3w" } },
    "processingError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Podczas analizy sk\u0142adniowej JSON wyst\u0105pi\u0142 b\u0142\u0105d: " }, { "t": 4, "k": "error" }] } },
    "arrayError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ten plik JSON nie zawiera tablicy." } },
    "emptyError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ten plik JSON jest pusty." } },
    "limitFileSize": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Maksymalny rozmiar pliku: " }, { "t": 4, "k": "limit" }, { "t": 3, "v": " MB." }] } },
    "limitError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Nie jest mo\u017Cliwe zaimportowanie wi\u0119cej ni\u017C " }, { "t": 4, "k": "limit" }, { "t": 3, "v": " wierszy." }] } }
  },
  "tablePasteImporter": {
    "pasteLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wklej dane z tabeli" } },
    "pasteDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mo\u017Cesz skopiowa\u0107 dane z arkusza kalkulacyjnego i wklei\u0107 je poni\u017Cej." } },
    "firstRowHeader": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pierwszy wiersz to nag\u0142\xF3wek" } },
    "limitError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Nie jest mo\u017Cliwe zaimportowanie wi\u0119cej ni\u017C " }, { "t": 4, "k": "limit" }, { "t": 3, "v": " wierszy." }] } }
  },
  "importFileModal": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Utw\xF3rz now\u0105 tabel\u0119" } },
    "additionalImportTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Zaimportuj do tabeli " }, { "t": 4, "k": "table" }] } },
    "importLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Czy chcesz zaimportowa\u0107 istniej\u0105ce dane?" } },
    "newTable": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zacznij od nowej tabeli" } },
    "addButton": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dodaj tabel\u0119" } },
    "showTable": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "wy\u015Bwietl tabel\u0119" } },
    "importButton": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zaimportuj" } },
    "uploading": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pobieranie\u2026" } },
    "preparing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dane s\u0105 przygotowywane\u2026" } },
    "importError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Import pliku nie powi\xF3d\u0142 si\u0119" } },
    "openCreatedTable": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Otw\xF3rz utworzon\u0105 tabel\u0119" } },
    "showReport": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Poka\u017C raport o b\u0142\u0119dach" } },
    "reportTitleFailure": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nieudane wiersze" } },
    "reportTitleSuccess": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Importowanie powiod\u0142o si\u0119, ale..." } },
    "reportMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nie uda\u0142o si\u0119 zaimportowa\u0107 nast\u0119puj\u0105cych indeks\xF3w wierszy:" } },
    "stateRowCreation": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Importowanie\u2026" } },
    "statePreValidation": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Weryfikacja danych\u2026" } },
    "stateCreateTable": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tworzenie tabeli\u2026" } },
    "fieldMappingTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mapowanie p\xF3l" } },
    "fieldMappingDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kolumny p\xF3l w Twojej tabeli zosta\u0142y przyporz\u0105dkowane automatycznie. Mo\u017Cesz je zmieni\u0107 poni\u017Cej. Niezgodne kom\xF3rki pozostan\u0105 puste po zaimportowaniu." } },
    "selectImportMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wybierz dane." } },
    "filePreview": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Podgl\u0105d zawarto\u015Bci pliku" } },
    "changeImporterType": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zmie\u0144 typ importu" } },
    "importPreview": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Podgl\u0105d importu" } },
    "defaultName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tabela" } },
    "useUpsertField": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aktualizuj wiersze, kt\xF3re ju\u017C istniej\u0105" } },
    "upsertTooltip": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aby zast\u0105pi\u0107 istniej\u0105ce dane, nale\u017Cy dopasowa\u0107 wiersze, u\u017Cywaj\u0105c pola z unikalnymi warto\u015Bciami." } },
    "restoredFile": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": 'Importowanie pliku "' }, { "t": 4, "k": "name" }, { "t": 3, "v": '"...' }] } }
  },
  "formulaAdvancedEditContext": {
    "textAreaFormulaInputPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kliknij, aby edytowa\u0107 formu\u0142\u0119" } },
    "fields": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pola" } },
    "functions": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Funkcje" } },
    "operators": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Operatory" } },
    "fieldType": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Pole typu " }, { "t": 4, "k": "type" }] } }
  },
  "fieldFormulaInitialSubForm": {
    "formulaInputPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kliknij, aby zmodyfikowa\u0107 formu\u0142\u0119" } },
    "refreshFormulaOptions": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Od\u015Bwie\u017C opcje formu\u0142" } }
  },
  "formulaFieldItemDescription": {
    "syntax": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sk\u0142adnia" } },
    "examples": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Przyk\u0142ady" } }
  },
  "viewSearchContext": {
    "searchInRows": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Przeszukaj wszystkie wiersze" } },
    "hideNotMatching": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "ukryj niepasuj\u0105ce wiersze" } }
  },
  "viewsContext": {
    "searchView": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Przeszukaj widoki" } },
    "noViews": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nie znaleziono widok\xF3w" } },
    "collaborative": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wsp\xF3\u0142dzielony" } }
  },
  "viewFilterTypeLinkRow": {
    "unnamed": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "nienazwany wiersz " }, { "t": 4, "k": "value" }] } },
    "choose": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wybierz wiersz" } }
  },
  "viewFilterContext": {
    "addFilter": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dodaj filtr" } },
    "disableAllFilters": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "wszystkie wy\u0142\u0105czone" } },
    "noFilterTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nie utworzy\u0142e\u015B jeszcze \u017Cadnego filtra" } },
    "noFilterText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Filtry umo\u017Cliwiaj\u0105 wy\u015Bwietlanie wierszy, kt\xF3re spe\u0142niaj\u0105 okre\u015Blone warunki." } },
    "where": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Gdzie" } },
    "and": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Oraz" } },
    "or": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Lub" } },
    "relatedFieldNotFound": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Powi\u0105zane pole nie zosta\u0142o znalezione." } },
    "filterTypeNotFound": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ten typ filtra nie jest kompatybilny." } },
    "noCompatibleFilterTypesErrorTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Brak kompatybilnych typ\xF3w filtr\xF3w" } },
    "noCompatibleFilterTypesErrorMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u017Badne z twoich p\xF3l nie posiada kompatybilnych typ\xF3w filtr\xF3w" } },
    "addFilterGroup": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dodaj grup\u0119 filtr\xF3w" } }
  },
  "viewFilterTypeFileTypeDropdown": {
    "image": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "plik graficzny" } },
    "document": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "dokument" } }
  },
  "createViewModal": {
    "createNew": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Utw\xF3rz " }, { "t": 4, "k": "view" }] } },
    "add": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Dodaj " }, { "t": 4, "k": "view" }] } }
  },
  "shareViewLink": {
    "shareView": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Udost\u0119pnij " }, { "t": 4, "k": "viewTypeSharingLinkName" }] } },
    "shareViewTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ten widok nie zosta\u0142 jeszcze udost\u0119pniony" } },
    "sharedViewTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Ten widok " }, { "t": 4, "k": "viewTypeSharingLinkName" }, { "t": 3, "v": " jest obecnie udost\u0119pniony przy u\u017Cyciu linku prywatnego" }] } },
    "sharedViewDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Osoby, kt\xF3re posiadaj\u0105 ten link, mog\u0105 przegl\u0105da\u0107 " }, { "t": 4, "k": "viewTypeSharingLinkName" }, { "t": 3, "v": "." }] } },
    "disableLink": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "wy\u0142\u0105cz udost\u0119pniony link" } },
    "generateNewUrl": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "wygeneruj nowy adres URL" } },
    "copyURL": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "skopiuj adres URL" } },
    "EnablePassword": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zabezpiecz has\u0142em" } },
    "DisablePassword": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dost\u0119p jest chroniony has\u0142em" } },
    "ChangePassword": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zmie\u0144" } },
    "shareViewText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Prywatny link do udost\u0119pnienia pozwala komukolwiek, kto ma do niego dost\u0119p, przegl\u0105da\u0107 dane w tym widoku." } },
    "createPrivateLink": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Utw\xF3rz prywatny link" } },
    "notSharedYetText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zezw\xF3l komukolwiek na przegl\u0105danie danych w tym widoku lub synchronizowanie zdarze\u0144 z Twoim zewn\u0119trznym kalendarzem." } },
    "shareViewWarningTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ostrze\u017Cenie" } }
  },
  "viewSortContext": {
    "noSortTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nie utworzy\u0142e\u015B jeszcze \u017Cadnego sortowania" } },
    "noSortText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sortowanie pozwala na porz\u0105dkowanie wierszy wg. pola." } },
    "sortBy": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sortuj wg." } },
    "thenBy": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nast\u0119pnie wg." } },
    "addSort": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "wybierz pole wg. kt\xF3rego zostan\u0105 posortowne dane" } },
    "hiddenFieldWarning": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Jedno lub wi\u0119cej kryteri\xF3w sortowania odwo\u0142uje si\u0119 do ukrytych p\xF3l, kt\xF3re nie b\u0119d\u0105 widoczne dla edytor\xF3w i u\u017Cytkownik\xF3w z ni\u017Cszymi uprawnieniami." } }
  },
  "viewSort": {
    "sort": { "t": 0, "b": { "t": 1, "c": [{ "t": 2, "i": [{ "t": 3 }], "s": "Sortowanie" }, { "t": 2, "i": [{ "t": 3 }], "s": "1 Sortowanie" }, { "t": 2, "i": [{ "t": 4, "k": "count" }, { "t": 3, "v": " Sortowania/\u0144" }] }] } }
  },
  "viewDecorator": {
    "decorator": { "t": 0, "b": { "t": 1, "c": [{ "t": 2, "i": [{ "t": 3 }], "s": "Kolory" }, { "t": 2, "i": [{ "t": 3 }], "s": "1 Kolor" }, { "t": 2, "i": [{ "t": 4, "k": "count" }, { "t": 3, "v": " Kolory/\xF3w" }] }] } },
    "hiddenFieldWarning": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Poniewa\u017C dekoracje mog\u0105 odwo\u0142ywa\u0107 si\u0119 do ukrytych p\xF3l, w przypadku edytor\xF3w i u\u017Cytkownik\xF3w z uprawnieniami na ni\u017Cszym poziomie s\u0105 one usuwane." } }
  },
  "viewRotateSlugModal": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Od\u015Bwie\u017C URL" } },
    "refreshWarning": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Czy jeste\u015B pewien, \u017Ce chcesz od\u015Bwie\u017Cy\u0107 adres URL widoku " }, { "t": 4, "k": "viewName" }, { "t": 3, "v": "? Po od\u015Bwie\u017Ceniu zostanie wygenerowany nowy adres URL i dost\u0119p do " }, { "t": 4, "k": "viewTypeSharingLinkName" }, { "t": 3, "v": " za pomoc\u0105 starego adresu URL nie b\u0119dzie mo\u017Cliwy. Nikt, komu udost\u0119pni\u0142e\u015B adres URL, nie b\u0119dzie mia\u0142 dost\u0119pu do " }, { "t": 4, "k": "viewTypeSharingLinkName" }, { "t": 3, "v": "." }] } },
    "generateNewURL": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wygeneruj nowy adres URL" } }
  },
  "shareViewEnablePasswordModal": {
    "newPasswordTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wprowad\u017A has\u0142o" } },
    "newPasswordDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Link publiczny b\u0119dzie dost\u0119pny tylko po wpisaniu has\u0142a. To has\u0142o zostanie zapisane w postaci zaszyfrowanej." } },
    "newPasswordSave": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ustaw has\u0142o" } },
    "changePasswordTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zmie\u0144 has\u0142o" } },
    "changePasswordDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zmiana has\u0142a spowoduje, \u017Ce poprzednie has\u0142o przestanie dzia\u0142a\u0107. Nowe has\u0142o zostanie zapisane w postaci zaszyfrowanej." } },
    "changePasswordSave": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zmie\u0144 has\u0142o" } }
  },
  "shareViewDisablePasswordModal": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wy\u0142\u0105cz zabezpieczenie has\u0142em" } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Czy na pewno chcesz wy\u0142\u0105czy\u0107 zabezpieczenie tego linku has\u0142em? Po wy\u0142\u0105czeniu, has\u0142o zostanie usuni\u0119te i nie b\u0119dzie mo\u017Cna go odzyska\u0107" } },
    "disable": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wy\u0142\u0105cz" } }
  },
  "publicViewAuthLogin": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ta strona jest chroniona has\u0142em" } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aby uzyska\u0107 dost\u0119p do tej strony, wprowad\u017A prawid\u0142owe has\u0142o." } },
    "enter": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wprowad\u017A" } },
    "error": {
      "incorrectPasswordTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nieprawid\u0142owe has\u0142o" } },
      "incorrectPasswordText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Podane has\u0142o jest nieprawid\u0142owe." } }
    }
  },
  "viewFieldsContext": {
    "coverField": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pole ok\u0142adki" } },
    "noCover": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Brak ok\u0142adki" } },
    "search": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Przeszukaj pola" } },
    "hideAll": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ukryj wszystko" } },
    "showAll": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Poka\u017C wszystko" } }
  },
  "viewFilterTypeBoolean": {
    "selected": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wybrane" } }
  },
  "viewFilter": {
    "filter": { "t": 0, "b": { "t": 1, "c": [{ "t": 2, "i": [{ "t": 3 }], "s": "Filtr" }, { "t": 2, "i": [{ "t": 3 }], "s": "1 Filtr" }, { "t": 2, "i": [{ "t": 4, "k": "count" }, { "t": 3, "v": " Filtry/\xF3w" }] }] } },
    "hasAllValuesEqual": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "ma wszystkie warto\u015Bci r\xF3wne" } },
    "hasValueHigherThan": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "ma warto\u015B\u0107 wi\u0119ksz\u0105 ni\u017C" } },
    "hasValueHigherThanOrEqual": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "ma warto\u015B\u0107 wi\u0119ksz\u0105 lub r\xF3wn\u0105" } },
    "hasValueLowerThan": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "ma warto\u015B\u0107 mniejsz\u0105 ni\u017C" } },
    "hasValueLowerThanOrEqual": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "ma warto\u015B\u0107 mniejsz\u0105 lub r\xF3wn\u0105" } },
    "hasNotValueHigherThan": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "nie ma warto\u015Bci wi\u0119kszej ni\u017C" } },
    "hasNotValueHigherThanOrEqual": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "nie ma warto\u015Bci wi\u0119kszej lub r\xF3wnej" } },
    "hasNotValueLowerThan": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "nie ma warto\u015Bci mniejszej ni\u017C" } },
    "hasNotValueLowerThanOrEqual": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "nie ma warto\u015Bci mniejszej lub r\xF3wnej" } }
  },
  "viewContext": {
    "exportView": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wyeksportuj widok" } },
    "duplicateView": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zduplikuj widok" } },
    "renameView": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zmie\u0144 nazw\u0119 widoku" } },
    "webhooks": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Webhooki" } },
    "importFile": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Importuj plik" } },
    "deleteView": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Usu\u0144 widok" } },
    "toPersonal": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Do osobistych" } },
    "toCollaborative": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Do wsp\xF3\u0142pracy" } },
    "defaultRowValues": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Warto\u015Bci domy\u015Blne wierszy" } }
  },
  "deleteViewModal": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Usu\u0144 " }, { "t": 4, "k": "name" }] } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Czy na pewno chcesz usun\u0105\u0107 widok " }, { "t": 4, "k": "name" }, { "t": 3, "v": "? Dane tabeli zostan\u0105 zachowane, ale filtry, sortowania i szeroko\u015Bci p\xF3l ustawione w tym widoku zostan\u0105 usuni\u0119te." }] } },
    "delete": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Usu\u0144 widok" } }
  },
  "viewForm": {
    "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nazwa" } },
    "whoCanEdit": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kto mo\u017Ce edytowa\u0107 ten widok?" } }
  },
  "galleryViewHeader": {
    "customizeCards": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dostosuj karty" } }
  },
  "gridViewHide": {
    "hideField": { "t": 0, "b": { "t": 1, "c": [{ "t": 2, "i": [{ "t": 3 }], "s": "Widoczno\u015B\u0107 p\xF3l" }, { "t": 2, "i": [{ "t": 3 }], "s": "1 ukryte pole" }, { "t": 2, "i": [{ "t": 4, "k": "count" }, { "t": 3, "v": " ukryte pola" }] }] } }
  },
  "gridViewFieldType": {
    "insertLeft": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wstaw z lewej" } },
    "insertRight": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wstaw z prawej" } },
    "createFilter": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Utw\xF3rz filtr" } },
    "duplicate": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zduplikuj pole" } },
    "sortField": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Posortuj" } },
    "hideField": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ukryj pole" } },
    "dataSyncField": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "To pole jest tylko do odczytu i jest cz\u0119\u015Bci\u0105 synchronizacji danych tabeli." } },
    "dataSyncFieldTwoWaySync": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "To pole jest zsynchronizowane z synchronizacj\u0105 danych tabeli." } },
    "noWriteValues": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zmiany w tym polu s\u0105 ograniczone." } }
  },
  "gridViewRow": {
    "rowNotMatchingFilters": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wiersz nie spe\u0142nia kryteri\xF3w filtrowania" } },
    "rowNotMatchingSearch": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wiersz nie spe\u0142nia kryteri\xF3w wyszukiwania" } },
    "rowHasMoved": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wiersz zosta\u0142 przeniesiony" } }
  },
  "gridView": {
    "selectRow": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wybierz wiersz" } },
    "insertRowAbove": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wstaw wiersz powy\u017Cej" } },
    "insertRowBelow": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wstaw wiersz poni\u017Cej" } },
    "duplicateRow": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zduplikuj wiersz" } },
    "enlargeRow": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Powi\u0119ksz wiersz" } },
    "deleteRow": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Usu\u0144 wiersz" } },
    "deleteRows": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Usu\u0144 wiersze" } },
    "copyCells": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kopiuj kom\xF3rki" } },
    "rowCount": { "t": 0, "b": { "t": 1, "c": [{ "t": 2, "i": [{ "t": 3 }], "s": "Brak wierszy" }, { "t": 2, "i": [{ "t": 3 }], "s": "1 wiersz" }, { "t": 2, "i": [{ "t": 4, "k": "count" }, { "t": 3, "v": " wiersze/y" }] }] } },
    "hiddenRowsInsertedTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dodano wiersze" } },
    "hiddenRowsInsertedMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Dodano " }, { "t": 4, "k": "number" }, { "t": 3, "v": " nowe/ych wiersze/y, ale nie s\u0105 one widoczne, poniewa\u017C w\u0142\u0105czone s\u0105 filtry." }] } },
    "copiedRowURLMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Adres URL wiersza " }, { "t": 4, "k": "id" }, { "t": 3, "v": " zosta\u0142 skopiowany do schowka." }] } },
    "copiedRowURL": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Skopiowano adres URL wiersza" } },
    "copyRowURL": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Skopiuj adres URL wiersza" } },
    "generateCellsValues": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wygeneruj warto\u015Bci przy u\u017Cyciu AI" } },
    "tooManyItemsDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Nie mo\u017Cna zaktualizowa\u0107 wi\u0119cej ni\u017C " }, { "t": 4, "k": "limit" }, { "t": 3, "v": " wierszy jednocze\u015Bnie, wobec czego zaktualizowano tylko pierwszy wiersz." }] } },
    "tooManyItemsTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zbyt wiele element\xF3w" } },
    "AIValuesGenerationErrorTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wygenerowanie warto\u015Bci przy u\u017Cyciu AI nie powiod\u0142o si\u0119" } },
    "AIValuesGenerationErrorMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sprawd\u017A API_KEY i zweryfikuj wybrany model." } },
    "copyCellsWithHeader": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Skopiuj kom\xF3rki wraz z nag\u0142\xF3wkiem" } },
    "generateAllAiValues": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wygeneruj wszystkie warto\u015Bci przy u\u017Cyciu AI" } }
  },
  "gridViewFieldFile": {
    "dropHere": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Upu\u015B\u0107 tutaj" } },
    "dropFileHere": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Upu\u015B\u0107 pliki tutaj" } }
  },
  "gridViewFieldLinkRow": {
    "unnamed": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "nienazwany wiersz " }, { "t": 4, "k": "value" }] } },
    "keepOnlyOneValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pozostaw tylko jedn\u0105 warto\u015B\u0107" } }
  },
  "gridViewIdentifierOptions": {
    "id": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Identyfikator wiersza" } },
    "count": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Liczba" } }
  },
  "formViewMeta": {
    "includeRowId": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "U\u017Cyj ID " }, { "t": 4, "k": "row_id" }, { "t": 3, "v": ", aby doda\u0107 ID nowo utworzonego wiersza do adresu URL." }] } }
  },
  "previewAny": {
    "externalWarning": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Otwarcie pliku przez zewn\u0119trzn\u0105 us\u0142ug\u0119 spowoduje, \u017Ce Tw\xF3j plik zostanie wczytany przez jej serwery." } }
  },
  "exportTableModal": {
    "failedTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Eksport nie powi\xF3d\u0142 si\u0119" } },
    "failedDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Eksport nie powi\xF3d\u0142 si\u0119 z powodu b\u0142\u0119du serwera." } },
    "cancelledTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Eksport zosta\u0142 anulowany" } },
    "cancelledDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ten eksport zosta\u0142 anulowany." } },
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Wyeksportuj " }, { "t": 4, "k": "name" }] } }
  },
  "exporterTypeChoices": {
    "formatLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "W jakim formacie chcesz wyeksportowa\u0107?" } }
  },
  "exportTableForm": {
    "viewLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wybierz widok do wyeksportowania:" } },
    "typeError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Brak dost\u0119pnego typu eksportera. Wybierz inny widok lub ca\u0142\u0105 tabel\u0119." } },
    "includeRowId": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Uwzgl\u0119dnij ID wiersza" } },
    "includePrimaryField": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Uwzgl\u0119dnij pole g\u0142\xF3wne" } }
  },
  "exportTableLoadingBar": {
    "export": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wyeksportuj" } },
    "download": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pobierz" } }
  },
  "exportTableDropdown": {
    "exportEntireTable": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wyeksportuj ca\u0142\u0105 tabel\u0119" } }
  },
  "tableCSVExporter": {
    "columnSeparatorLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Separator kolumn" } },
    "recordSeparator": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "separator rekord\xF3w" } },
    "unitSeparator": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "separator jednostek" } },
    "encodingLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kodowanie znak\xF3w" } },
    "firstRowIsHeaderLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pierwszy wiersz to nag\u0142\xF3wek" } },
    "includeHeader": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Do\u0142\u0105cz nazwy p\xF3l jako nag\u0142\xF3wek" } }
  },
  "apiDocsDatabase": {
    "pageTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Dokumentacja API bazy danych " }, { "t": 4, "k": "name" }] } },
    "back": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Powr\xF3t do pulpitu" } },
    "openDatabase": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "otw\xF3rz baz\u0119 danych" } }
  },
  "apiDocsComponent": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "REST API" } },
    "intro": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Po utworzeniu schematu bazy danych i klucza API w " }, { "t": 4, "k": "settingsLink" }, { "t": 3, "v": ", baza danych Baserow udost\u0119pnia w\u0142asne endpointy REST API do tworzenia, odczytu, aktualizacji i usuwania wierszy." }] } },
    "settings": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "ustawienia" } },
    "selectApplicationTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dla kt\xF3rej bazy danych chcesz zobaczy\u0107 dokumentacj\u0119?" } },
    "signIn": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aby zacz\u0105\u0107, zaloguj si\u0119" } },
    "back": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Powr\xF3t do pulpitu" } }
  },
  "viewAggregationType": {
    "emptyCount": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "(Pusty)" } },
    "notEmptyCount": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wype\u0142niony" } },
    "emptyPercentage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Procent pustych" } },
    "notEmptyPercentage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Procent wype\u0142nionych" } },
    "checkedCount": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zaznaczone" } },
    "notCheckedCount": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Niezaznaczone" } },
    "checkedPercentage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Procent zaznaczonych" } },
    "notCheckedPercentage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Procent niezaznaczonych" } },
    "min": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Min" } },
    "max": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Max" } },
    "earliestDate": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Najwcze\u015Bniejsza data" } },
    "earliestDateShort": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Najwcze\u015Bniej" } },
    "latestDate": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Najp\xF3\u017Aniejsza data" } },
    "latestDateShort": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Najp\xF3\u017Aniej" } },
    "uniqueCount": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Liczba unikalnych" } },
    "sum": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Suma" } },
    "average": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u015Arednia" } },
    "median": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mediana" } },
    "stdDev": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Odchylenie standardowe" } },
    "stdDevShort": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Odch. std." } },
    "variance": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wariancja" } },
    "count": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Liczba" } },
    "distribution": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Rozk\u0142ad" } },
    "othersCount": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Inne" } }
  },
  "databaseForm": {
    "importLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Czy chcesz zaimportowa\u0107 istniej\u0105ce dane?" } },
    "emptyLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zacznij od pocz\u0105tku" } },
    "airtableLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Import z Airtable" } }
  },
  "importFromAirtable": {
    "airtableShareLinkTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Udost\u0119pnij link do swojej bazy" } },
    "airtableShareLinkDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": 'Import bazy Airtable jest mo\u017Cliwy przy pomocy linku do udost\u0119pniania ca\u0142ej bazy. Aby uzyska\u0107 taki link, otw\xF3rz baz\u0119 Airtable i w prawym g\xF3rnym rogu kliknij przycisk udost\u0119pniania. Nast\u0119pnie wybierz opcj\u0119 "Share via link", po czym w oknie udost\u0119pniania kliknij zak\u0142adk\u0119 "Share publicly", a nast\u0119pnie "Enable shared base link". Skopiuj link i wklej go w polu poni\u017Cej.' } },
    "airtableShareLinkBeta": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": 'Ta funkcja zaimportuje wi\u0119kszo\u015B\u0107 danych, jednak mog\u0105 wyst\u0105pi\u0107 niezgodno\u015Bci. Z tego powodu zostanie dodana tabela o nazwie "Raport importu Airtable" zawieraj\u0105ca list\u0119 element\xF3w, kt\xF3re nie zosta\u0142y zaimportowane lub zosta\u0142y zaimportowane cz\u0119\u015Bciowo.' } },
    "airtableShareLinkPaste": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tutaj wklej link" } },
    "importButtonLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Importuj z Airtable" } },
    "openButtonLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Otw\xF3rz zaimportowan\u0105 baz\u0119 danych" } },
    "importError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wyst\u0105pi\u0142 b\u0142\u0105d" } },
    "statePending": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "W oczekiwaniu na rozpocz\u0119cie" } },
    "stateFailed": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wyst\u0105pi\u0142 b\u0142\u0105d" } },
    "stateFinished": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zako\u0144czono" } },
    "stateDownloadingBase": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pobieranie schematu bazy" } },
    "stateConverting": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Konwersja do formatu bazy Baserow" } },
    "stateDownloadingFiles": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pobieranie plik\xF3w" } },
    "stateImporting": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Importowanie" } },
    "stateImportingTable": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Importowanie tabeli " }, { "t": 4, "k": "table" }] } },
    "errorJobAlreadyRunningTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zadanie ju\u017C jest wykonywane" } },
    "errorJobAlreadyRunningDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Inne zadanie importu jest ju\u017C w trakcie wykonywania. Zanim uruchomisz kolejne, poczekaj, a\u017C bie\u017C\u0105ce si\u0119 zako\u0144czy." } },
    "linkError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Link powinien wygl\u0105da\u0107 nast\u0119puj\u0105co: https://airtable.com/shrxxxxxxxxxxxxxx" } },
    "skipFiles": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pomi\u0144 import plik\xF3w" } },
    "skipFilesHelper": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Du\u017Ca liczba plik\xF3w w bazie Airtable mo\u017Ce spowolni\u0107 import. Opcja ta umo\u017Cliwia pomini\u0119cie za\u0142\u0105czenia plik\xF3w." } },
    "useSession": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Uwierzytelnienie sesji" } },
    "useSessionHelper": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "U\u017Cyj tej opcji, je\u015Bli publicznie udost\u0119pniona baza wymaga uwierzytelnienia." } },
    "sessionDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": 'Je\u015Bli import zwraca odpowied\u017A "The Airtable base requires authentication.", to ustawienia w Airtable mog\u0105 blokowa\u0107 dost\u0119p do bazy bez wcze\u015Bniejszego uwierzytelnienia. W takim przypadku b\u0119dziesz musia\u0142 r\u0119cznie skopiowa\u0107 cookie sesji i podpisu. W tym celu otw\xF3rz adres URL publicznie udost\u0119pnionej bazy i zaloguj si\u0119. Nast\u0119pnie, klikaj\u0105c w prawym g\xF3rnym rogu, otw\xF3rz menu aplikacji -> "More tools" -> "Developer tools" i otw\xF3rz zak\u0142adk\u0119 "Application" (w przegl\u0105darce Firefox "Storage"), a nast\u0119pnie kliknij "https://airtable.com" i znajd\u017A cookie "__Host-airtable-session" oraz "__Host-airtable-session.sig". Wklej warto\u015Bci cookie w poni\u017Cszych polach.' } },
    "sessionLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cookie sesji (__Host-airtable-session)" } },
    "sessionSignatureLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cookie podpisu sesji (__Host-airtable-session.sig)" } }
  },
  "chooseSingleSelectField": {
    "addSelectField": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dodaj pojedyncze pole wyboru" } },
    "warningWhenNothingToChooseOrCreate": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nie ma \u017Cadnych p\xF3l wyboru pojedynczego i nie masz uprawnie\u0144 do ich utworzenia." } }
  },
  "viewDecoratorContext": {
    "addDecorator": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dodaj dekorator" } }
  },
  "databaseDashboardSidebarLinks": {
    "apiDocumentation": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dokumentacja API" } }
  },
  "formViewField": {
    "required": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "wymagane" } },
    "showWhenMatchingConditions": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "poka\u017C, kiedy warunki s\u0105 spe\u0142nione" } },
    "addCondition": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dodaj warunek" } },
    "descriptionPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Opis" } },
    "addConditionGroup": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dodaj grup\u0119 warunk\xF3w" } },
    "showFieldAs": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Poka\u017C pole jako" } },
    "includeAllSelectOptions": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "uwzgl\u0119dnij wszystkie opcje wyboru" } },
    "includeAllSelectOptionsHelper": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Za pomoc\u0105 tej listy rozwijanej wybierz opcje, kt\xF3re maj\u0105 by\u0107 u\u017Cyte w formularzu" } },
    "noSelectOptions": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Brak dost\u0119pnych opcji wyboru." } },
    "noCollaboratorsAvailable": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Brak dost\u0119pnych wsp\xF3\u0142pracownik\xF3w." } },
    "cannotSumitValues": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "To pole jest tylko do odczytu i nie zostanie wy\u015Bwietlone w formularzu." } }
  },
  "duplicateFieldContext": {
    "duplicate": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zduplikuj pole" } },
    "cloneData": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Skopiuj dane" } },
    "soon": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dost\u0119pne wkr\xF3tce" } },
    "readOnlyField": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Warto\u015Bci kom\xF3rek zostan\u0105 wype\u0142nione automatycznie." } }
  },
  "snapshotsModal": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "migawki" } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Migawki s\u0105 pe\u0142nymi kopiami danych " }, { "t": 4, "k": "applicationTypeName" }, { "t": 3, "v": " zarejestrowanych w momencie ich utworzenia. Podczas przywracania danych zostanie utworzony duplikat tych danych. Migawki s\u0105 automatycznie usuwane po up\u0142ywie roku." }] } },
    "descriptionLimits": { "t": 0, "b": { "t": 1, "c": [{ "t": 2, "i": [{ "t": 3, "v": "Mo\u017Cesz mie\u0107 maksymalnie " }, { "t": 4, "k": "n" }, { "t": 3, "v": " migawek na obszar roboczy." }] }, { "t": 2, "i": [{ "t": 3, "v": "Mo\u017Cesz mie\u0107 maksymalnie " }, { "t": 4, "k": "n" }, { "t": 3, "v": " migawk\u0119 na obszar roboczy." }] }, { "t": 2, "i": [{ "t": 3, "v": "Mo\u017Cesz mie\u0107 maksymalnie " }, { "t": 4, "k": "n" }, { "t": 3, "v": " migawek na obszar roboczy." }] }] } },
    "createLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Utw\xF3rz now\u0105 migawk\u0119" } },
    "create": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Utw\xF3rz migawk\u0119" } },
    "snapshotRestoredErrorTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wyst\u0105pi\u0142 b\u0142\u0105d" } },
    "snapshotRestoredErrorMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nie uda\u0142o si\u0119 przywr\xF3ci\u0107 migawki. Spr\xF3buj ponownie p\xF3\u017Aniej." } },
    "snapshotDeletedErrorTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wyst\u0105pi\u0142 b\u0142\u0105d" } },
    "snapshotDeletedErrorMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nie uda\u0142o si\u0119 usun\u0105\u0107 migawki. Spr\xF3buj ponownie p\xF3\u017Aniej." } },
    "limitReached": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Osi\u0105gni\u0119to limit liczby migawek." } },
    "snapshot": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Migawka" } },
    "importingState": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tworzenie" } },
    "reset": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Utw\xF3rz kolejn\u0105" } },
    "cancel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Anuluj" } },
    "noSnapshots": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "W tej aplikacji nie ma jeszcze migawek." } },
    "nameAlreadyExists": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Migawka o tej nazwie ju\u017C istnieje." } }
  },
  "deleteSnapshotModal": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Usu\u0144 migawk\u0119" } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Czy na pewno chcesz trwale usun\u0105\u0107 migawk\u0119 " }, { "t": 4, "k": "name" }, { "t": 3, "v": "?" }] } },
    "confirm": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Usu\u0144" } }
  },
  "snapshotListItem": {
    "restore": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "przywr\xF3\u0107" } },
    "delete": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "usu\u0144" } },
    "created": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "utworzono" } }
  },
  "formViewHeader": {
    "mode": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tryb" } },
    "preview": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Podgl\u0105d" } },
    "fields": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pola" } }
  },
  "table": {
    "chooseView": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wybierz widok" } },
    "adjacentRow": {
      "notification": {
        "notFound": {
          "next": {
            "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nie ma ju\u017C rz\u0119d\xF3w" } },
            "message": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nie ma nast\u0119pnego wiersza" } }
          },
          "previous": {
            "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nigdy wi\u0119cej wierszy" } },
            "message": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nie ma poprzedniego wiersza" } }
          }
        },
        "error": {
          "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wyst\u0105pi\u0142 b\u0142\u0105d" } },
          "message": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wyst\u0105pi\u0142 b\u0142\u0105d podczas pobierania s\u0105siedniego wiersza" } }
        }
      },
      "toast": {
        "notFound": {
          "previous": {
            "message": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nie ma poprzedniego wiersza" } },
            "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nie ma wi\u0119cej wierszy" } }
          },
          "next": {
            "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nie ma wi\u0119cej wierszy" } },
            "message": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nie ma nast\u0119pnego wiersza" } }
          }
        },
        "error": {
          "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wyst\u0105pi\u0142 b\u0142\u0105d" } },
          "message": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wyst\u0105pi\u0142 b\u0142\u0105d podczas pobierania s\u0105siedniego wiersza" } }
        }
      }
    }
  },
  "formViewModeType": {
    "formDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wszystkie pola s\u0105 widoczne i u\u0142o\u017Cone pionowo." } },
    "form": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Formularz" } }
  },
  "rowEditFieldMultipleCollaborators": {
    "addCollaborator": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wybierz wsp\xF3\u0142pracownika" } }
  },
  "apiDocsUploadFile": {
    "file": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wielocz\u0119\u015Bciowy obiekt typu `file` z zawarto\u015Bci\u0105 pliku." } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Przesy\u0142a plik do bazy Baserow poprzez bezpo\u015Brednie przes\u0142anie jego zawarto\u015Bci. Spodziewany jest obiekt wielocz\u0119\u015Bciowy typu `file` z zawarto\u015Bci\u0105 pliku. Odpowied\u017A mo\u017Ce by\u0107 nast\u0119pnie u\u017Cyta do [przes\u0142ania pliku do wiersza](" }, { "t": 4, "k": "PUBLIC_BACKEND_URL" }, { "t": 3, "v": "/api/redoc/#tag/Database-table-rows/operation/update_database_table_row)." }] } }
  },
  "apiDocsUploadFileViaURL": {
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Przesy\u0142a plik do bazy Baserow, pobieraj\u0105c go z podanego adresu URL. Odpowied\u017A mo\u017Ce by\u0107 nast\u0119pnie u\u017Cyta do [przes\u0142ania pliku do wiersza](" }, { "t": 4, "k": "PUBLIC_BACKEND_URL" }, { "t": 3, "v": "/api/redoc/#tag/Database-table-rows/operation/update_database_table_row)." }] } },
    "url": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Adres URL, kt\xF3ry baza Baserow pobierze i prze\u015Ble w Twoim imieniu." } }
  },
  "fieldmultipleCollaboratorsDropdown": {
    "notFound": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nie znaleziono wsp\xF3\u0142pracownika" } }
  },
  "formViewModePreviewForm": {
    "addCoverImage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dodaj grafik\u0119 na ok\u0142adk\u0119" } },
    "addLogo": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dodaj logo" } },
    "noFields": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ten formularz nie ma \u017Cadnych p\xF3l. Kliknij na pole w lewym pasku bocznym, aby je doda\u0107." } },
    "descriptionPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Opis" } },
    "titlePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tytu\u0142" } },
    "noFieldsTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ten formularz nie ma jeszcze \u017Cadnych p\xF3l" } },
    "noFieldsContent": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dodaj pole, klikaj\u0105c w panelu po lewej." } }
  },
  "duplicateTableJobType": {
    "duplicating": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Duplikowanie" } },
    "duplicatedTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tabela zosta\u0142a zduplikowana" } },
    "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zduplikuj tabel\u0119" } }
  },
  "fileField": {
    "errorEmptyFileNameTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nieprawid\u0142owa nazwa pliku" } },
    "errorEmptyFileNameMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nie mo\u017Cna ustawi\u0107 pustej nazwy pliku." } }
  },
  "viewOwnershipType": {
    "collaborative": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Oparty na wsp\xF3\u0142pracy" } },
    "personal": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Osobisty" } },
    "collaborativeDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ka\u017Cdy u\u017Cytkownik, o ile posiada odpowiednie uprawnienia, mo\u017Ce przegl\u0105da\u0107 dane i zmienia\u0107 atrybuty." } }
  },
  "gridViewRowsAddContext": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Utw\xF3rz wiele wierszy" } },
    "choice": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Dodaj " }, { "t": 4, "k": "rowAmountChoice" }, { "t": 3, "v": " wiersze/y" }] } }
  },
  "fieldSelectThroughFieldSubForm": {
    "noTable": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aby utworzy\u0107 to pole, potrzebne jest co najmniej jedno pole powi\u0105zania z tabel\u0105." } },
    "selectThroughFieldLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wybierz pole powi\u0105zania z tabel\u0105" } }
  },
  "fieldRollupSubForm": {
    "label": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Funkcja agregacji" } },
    "selectTargetFieldLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wybierz pole do zagregowania" } }
  },
  "collaboratorAddedToRowNotification": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "sender" }, { "t": 3, "v": " przypisa\u0142 ci\u0119 do " }, { "t": 4, "k": "fieldName" }, { "t": 3, "v": " w wierszu " }, { "t": 4, "k": "rowId" }, { "t": 3, "v": " w " }, { "t": 4, "k": "tableName" }] } },
    "deletedUser": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Usuni\u0119ty u\u017Cytkownik" } },
    "unknownUser": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nieznany u\u017Cytkownik" } }
  },
  "fieldCollaboratorSubForm": {
    "notifyUserWhenAdded": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Po dodaniu wy\u015Blij powiadomienie" } }
  },
  "rowHistorySidebar": {
    "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Historia" } },
    "empty": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nie wprowadzono jeszcze \u017Cadnych zmian. Tutaj mo\u017Cna przegl\u0105da\u0107 wszelkie zmiany w tym wierszu." } },
    "you": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ty" } },
    "created": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": ": u\u017Cytkownik, kt\xF3ry utworzy\u0142 ten wiersz" } },
    "updated": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": ": u\u017Cytkownik, kt\xF3ry zaktualizowa\u0142 ten wiersz" } },
    "submitted": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": ": u\u017Cytkownik, kt\xF3ry przes\u0142a\u0142 ten wiersz" } },
    "deleted": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": ": u\u017Cytkownik, kt\xF3ry usun\u0105\u0142 ten wiersz" } },
    "restored": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": ": u\u017Cytkownik, kt\xF3ry przywr\xF3ci\u0142 ten wiersz" } },
    "createdUndo": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "cofnij utworzenie wiersza" } },
    "updatedUndo": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "cofnij aktualizacj\u0119 wiersza" } },
    "deletedUndo": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "cofnij usuni\u0119cie wiersza" } }
  },
  "formSubmittedNotification": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "formName" }, { "t": 3, "v": " zosta\u0142 przes\u0142any do tabeli " }, { "t": 4, "k": "tableName" }, { "t": 3, "v": ":" }] } },
    "moreValues": { "t": 0, "b": { "t": 1, "c": [{ "t": 2, "i": [{ "t": 3 }], "s": "0" }, { "t": 2, "i": [{ "t": 3 }], "s": "i jeszcze 1 pole." }, { "t": 2, "i": [{ "t": 3, "v": "i inne pola w liczbie: " }, { "t": 4, "k": "count" }, { "t": 3, "v": "." }] }] } }
  },
  "fieldPasswordSubForm": {
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pole has\u0142a mo\u017Ce by\u0107 r\xF3wnie\u017C u\u017Cywane do uwierzytelniania u\u017Cytkownika w konfiguratorze aplikacji." } },
    "allowEndpointAuthentication": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zezw\xF3l na uwierzytelnianie przy u\u017Cyciu endpointu API" } },
    "allowEndpointAuthenticationHelp": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Udost\u0119pnia endpoint, w kt\xF3rym mo\u017Cna zweryfikowa\u0107 poprawno\u015B\u0107 identyfikatora wiersza i has\u0142a. Umo\u017Cliwia to wykorzystanie bazy Baserow jako \u017Ar\xF3d\u0142a uwierzytelniania." } }
  },
  "rowEditFieldPassword": {
    "setPassword": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ustaw has\u0142o" } }
  },
  "rowHistoryFieldPassword": {
    "passwordDeleted": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Has\u0142o zosta\u0142o usuni\u0119te" } },
    "passwordSet": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Has\u0142o zosta\u0142o ustawione" } },
    "passwordUpdated": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Has\u0142o zosta\u0142o zaktualizowane" } }
  },
  "dataProviderTypes": {
    "fieldsName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pola" } }
  },
  "apiDocsFiltersBuilderModal": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Konfigurator parametr\xF3w filtr\xF3w" } },
    "userFieldNames": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nazwy p\xF3l u\u017Cytkownika" } },
    "json": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "JSON" } },
    "queryParameter": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Parametr zapytania" } }
  },
  "fieldDurationSubForm": {
    "durationFormatLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Format czasu trwania" } }
  },
  "viewGroupByContext": {
    "noGroupByTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nie utworzono jeszcze \u017Cadnych pogrupowa\u0144" } },
    "noGroupByText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pogrupuj wiersze wg. pola." } },
    "groupBy": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Grupuj wg." } },
    "thenBy": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nast\u0119pnie wg." } },
    "addGroupBy": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "wybierz pole, wg. kt\xF3rego zostan\u0105 pogrupowane dane" } },
    "hiddenFieldWarning": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Jedno lub wi\u0119cej kryteri\xF3w pogrupowa\u0144 odwo\u0142uje si\u0119 do ukrytych p\xF3l, kt\xF3re nie b\u0119d\u0105 widoczne dla edytor\xF3w i u\u017Cytkownik\xF3w z ni\u017Cszymi uprawnieniami." } },
    "maxGroupBysReached": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Mo\u017Cna pogrupowa\u0107 wg. maksymalnie " }, { "t": 4, "k": "count" }, { "t": 3, "v": " p\xF3l." }] } },
    "collapseAllGroups": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zwi\u0144 wszystko" } },
    "expandAllGroups": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Rozwi\u0144 wszystko" } }
  },
  "userMentionInRichTextFieldNotification": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "sender" }, { "t": 3, "v": " wspomnia\u0142 o Tobie w polu " }, { "t": 4, "k": "fieldName" }, { "t": 3, "v": " wiersza " }, { "t": 4, "k": "rowId" }, { "t": 3, "v": " w " }, { "t": 4, "k": "tableName" }] } },
    "deletedUser": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Usuni\u0119ty u\u017Cytkownik" } }
  },
  "fieldLongTextSubForm": {
    "enableRichTextFormatting": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "W\u0142\u0105cz formatowanie tekstu" } }
  },
  "viewFieldConditionsForm": {
    "addCondition": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dodaj warunek" } },
    "addConditionGroup": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dodaj grup\u0119 warunk\xF3w" } }
  },
  "viewGroupBy": {
    "groupBy": { "t": 0, "b": { "t": 1, "c": [{ "t": 2, "i": [{ "t": 3 }], "s": "Grupowanie" }, { "t": 2, "i": [{ "t": 3 }], "s": "Grupowanie wg. 1 pola" }, { "t": 2, "i": [{ "t": 3, "v": "Grupowanie wg. " }, { "t": 4, "k": "count" }, { "t": 3, "v": " p\xF3l" }] }] } }
  },
  "createTableModal": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Utw\xF3rz now\u0105 tabel\u0119" } },
    "defaultName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tabela" } },
    "newTable": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zacznij od utworzenia nowej tabeli" } },
    "importLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Czy chcesz zaimportowa\u0107 istniej\u0105ce dane?" } }
  },
  "createTable": {
    "preparing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dane s\u0105 przygotowywane..." } },
    "uploading": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Przesy\u0142anie\u2026" } },
    "showTable": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "wy\u015Bwietl tabel\u0119" } },
    "addButton": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dodaj tabel\u0119" } },
    "importError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Import pliku nie powi\xF3d\u0142 si\u0119" } },
    "stateRowCreation": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Importowanie..." } },
    "statePreValidation": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Weryfikacja danych\u2026" } },
    "stateCreateTable": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tworzenie tabeli\u2026" } },
    "importingTable": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": 'Import tabeli "' }, { "t": 4, "k": "name" }, { "t": 3, "v": '"...' }] } }
  },
  "apiDocsPasswordFieldAuthentication": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Uwierzytelnienie " }, { "t": 4, "k": "name" }] } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sprawdza, czy podane has\u0142o i wiersz odpowiadaj\u0105 warto\u015Bci zapisanej w kom\xF3rce." } },
    "fieldId": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "ID pola, dla kt\xF3rego ma by\u0107 sprawdzone has\u0142o." } },
    "rowId": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "ID wiersza, dla kt\xF3rego ma by\u0107 sprawdzone has\u0142o." } },
    "password": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Has\u0142o, kt\xF3re ma zosta\u0107 zweryfikowane." } }
  },
  "apiDocsListTables": {
    "listTables": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wygeneruj list\u0119 wszystkich tabel" } },
    "listTablesDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ten endpoint dzia\u0142a tylko w po\u0142\u0105czeniu z uwierzytelnianiem za pomoc\u0105 tokena i wy\u015Bwietla list\u0119 wszystkich tabel, do kt\xF3rych ma uprawnienia do odczytu, tworzenia, aktualizacji lub usuwania." } }
  },
  "fieldMultipleSelectSubForm": {
    "optionsLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Opcje" } },
    "defaultOptionsLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Opcje domy\u015Blne" } }
  },
  "fieldBooleanSubForm": {
    "defaultValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Warto\u015B\u0107 domy\u015Blna" } }
  },
  "importErrorReport": {
    "reportTitleFailure": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wiersze z b\u0142\u0119dami" } },
    "reportTitleSuccess": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Import zako\u0144czy\u0142 si\u0119, ale..." } },
    "reportMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nie uda\u0142o si\u0119 zaimportowa\u0107 nast\u0119puj\u0105cych indeks\xF3w wierszy:" } }
  },
  "viewFieldConditionItem": {
    "filterMisconfigured": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pole powi\u0105zane z tym filtrem zosta\u0142o usuni\u0119te." } }
  },
  "createViewLink": {
    "inCompatibleWithDataSync": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ten typ widoku nie jest kompatybilny z tabel\u0105 synchronizacji danych." } }
  },
  "defaultValuesModal": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Warto\u015Bci domy\u015Blne " }, { "t": 4, "k": "name" }] } },
    "setDefaultValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ustaw warto\u015B\u0107 domy\u015Bln\u0105" } },
    "removeDefaultValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Usu\u0144 warto\u015B\u0107 domy\u015Bln\u0105" } },
    "staticValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Warto\u015B\u0107 statyczna" } }
  },
  "formViewMetaControls": {
    "whenSubmittedLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Po przes\u0142aniu formularza" } },
    "showMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wy\u015Bwietl wiadomo\u015B\u0107" } },
    "urlRedirect": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Przekieruj na adres URL" } },
    "theMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wiadomo\u015B\u0107" } },
    "theURL": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Adres URL" } }
  },
  "databaseDashboardResourceLinks": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dokumentacja API" } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dowiedz si\u0119 wi\u0119cej o Baserow" } }
  },
  "changePrimaryFieldModal": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zmie\u0144 pole g\u0142\xF3wne" } },
    "change": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zmie\u0144" } },
    "primaryFieldLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pole g\u0142\xF3wne" } },
    "existingPrimary": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": '"' }, { "t": 4, "k": "name" }, { "t": 3, "v": '" jest obecnie polem g\u0142\xF3wnym.' }] } }
  },
  "databaseImportStep": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zaimportuj swoje dane" } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Przenie\u015B swoje dane do Baserow za pomoc\u0105 kilku klikni\u0119\u0107." } },
    "tableNameLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nazwa tabeli" } },
    "tableNamePrefill": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Tabela nale\u017C\u0105ca do " }, { "t": 4, "k": "name" }] } }
  },
  "databaseScratchTrackFieldsStep": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wybierz pola dla ka\u017Cdego wiersza" } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Wybierz maksymalnie " }, { "t": 4, "k": "selectedFieldsLimitCount" }, { "t": 3, "v": " p\xF3l. Mo\u017Cesz doda\u0107 wi\u0119cej p\xF3\u017Aniej." }] } },
    "fieldName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nazwa" } },
    "fieldType": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Rodzaj pola" } },
    "fieldDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Opis" } },
    "fieldDetails": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Szczeg\xF3\u0142y" } },
    "fieldNumber": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Numer" } },
    "fieldDate": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Data" } },
    "fieldBoolean": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zako\u0144czone" } },
    "fieldDuration": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Czas trwania" } },
    "fieldUrl": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Adres URL" } },
    "fieldEmail": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "E-mail" } },
    "fieldRating": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ocena" } },
    "fieldCategory": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kategoria" } },
    "fieldKickoffDate": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Data rozpocz\u0119cia" } },
    "fieldDueDate": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Termin wykonania" } },
    "fieldBudget": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Bud\u017Cet" } },
    "fieldCompleted": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zako\u0144czono" } },
    "fieldNotes": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Uwagi" } },
    "fieldRole": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Rola" } },
    "fieldPhone": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Telefon" } },
    "fieldActive": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aktywny" } },
    "fieldEstimatedDays": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Szacowane dni" } },
    "fieldStartDate": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Data rozpocz\u0119cia" } },
    "fieldEndDate": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Data zako\u0144czenia" } },
    "projectsCategoryDesign": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Projektowanie" } },
    "projectsCategoryDevelopment": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Programowanie" } },
    "projectsCategoryMarketing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Marketing" } },
    "projectsNotesRow1": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Acme zamierza ca\u0142kowicie zmieni\u0107 wizerunek swojej strony internetowej zgodnie z nast\u0119puj\u0105cymi wytycznymi." } },
    "projectsNotesRow2": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sprawd\u017A, czy obecni u\u017Cytkownicy Soylent s\u0105 zainteresowani nowym portalem u\u017Cytkownika." } },
    "projectsNotesRow3": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zastanawiamy si\u0119, czy warto to zrobi\u0107 po bojkocie reklam na Facebooku. Badania pokazuj\u0105, \u017Ce p\u0142atne kampanie reklamowe staj\u0105 si\u0119 coraz mniej efektywne." } },
    "teamsRoleDesigner": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Projektant" } },
    "teamsRoleDeveloper": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Programista" } },
    "teamsRoleMarketer": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Specjalista od Marketingu" } },
    "tasksDetailsRow1": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Logo wymaga poprawy, aby wyra\u017Aniej wyeksponowa\u0107 wezwanie do dzia\u0142ania (CTA)." } },
    "tasksDetailsRow2": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Struktura nie jest taka, jaka powinna by\u0107, wi\u0119c mo\u017Ce trzeba b\u0119dzie r\xF3wnie\u017C poprawi\u0107 map\u0119 witryny." } },
    "tasksDetailsRow3": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nowa stopka powinna zawiera\u0107 nasze dane kontaktowe, jak r\xF3wnie\u017C dyskretne (ale zdecydowane) wezwanie do dzia\u0142ania (CTA)." } },
    "campaignsDetailsRow1": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zaoszcz\u0119d\u017A dzi\u0119ki naszej letniej promocji i niepowtarzalnym rabatom na wszystkie Twoje ulubione produkty!" } },
    "campaignsDetailsRow2": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zahamuj odp\u0142yw klient\xF3w i zwi\u0119ksz ich zaanga\u017Cowanie dzi\u0119ki naszemu atrakcyjnemu programowi lojalno\u015Bciowemu, stworzonemu z my\u015Bl\u0105 o tym, by nagradza\u0107 Twoich najlepszych klient\xF3w." } },
    "campaignsDetailsRow3": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "O\u017Cyw swoj\u0105 dzia\u0142alno\u015B\u0107 i przyci\u0105gnij uwag\u0119 odbiorc\xF3w dzi\u0119ki dynamicznemu rebrandingowi marki. Idealnie wpisze si\u0119 w dzisiejsze trendy rynkowe i oczekiwania klient\xF3w." } },
    "customFieldsDescriptionRow1": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Turpis massa tincidunt dui ut ornare lectus sit amet est." } },
    "customFieldsDescriptionRow2": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Vitae justo eget magna fermentum iaculis eu non diam." } },
    "customFieldsDescriptionRow3": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Convallis tellus id interdum velit laoreet id donec ultrices tincidunt." } }
  },
  "databaseScratchTrackStep": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Co chcesz \u015Bledzi\u0107?" } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wybierz jeden z popularnych przyk\u0142ad\xF3w lub utw\xF3rz w\u0142asny." } },
    "addYourOwn": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dodaj w\u0142asny" } },
    "tableName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nazwa tabeli" } },
    "rowName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nazwa wiersza" } },
    "thisIncludes": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Obejmuje to:" } },
    "projects": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Projekty" } },
    "productsRow1": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Rebranding strony internetowej" } },
    "productsRow2": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Badanie klient\xF3w" } },
    "productsRow3": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "P\u0142atna kampania reklamowa" } },
    "teams": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zespo\u0142y" } },
    "teamsRow1": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sprzeda\u017C" } },
    "teamsRow2": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kadry" } },
    "teamsRow3": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Marketing" } },
    "tasks": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zadania" } },
    "tasksRow1": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Przeprojektowanie logo" } },
    "tasksRow2": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wy\u015Blij e-mail" } },
    "tasksRow3": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Przygotuj wpis na blogu" } },
    "campaigns": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kampanie" } },
    "campaignsRow1": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Letnia promocja" } },
    "campaignsRow2": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Program lojalno\u015Bciowy" } },
    "campaignsRow3": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Rebranding marki" } }
  },
  "databaseStep": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Utw\xF3rz swoj\u0105 pierwsz\u0105 baz\u0119 danych" } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wybierz, od czego chcesz zacz\u0105\u0107:" } },
    "databaseNameLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nazwa bazy danych" } },
    "databaseNamePrefill": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Baza danych nale\u017C\u0105ca do " }, { "t": 4, "k": "name" }] } },
    "scratch": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Od zera" } },
    "import": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Plik" } },
    "airtable": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Airtable" } },
    "template": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Szablon" } },
    "workspaceName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Obszar roboczy nale\u017C\u0105cy do " }, { "t": 4, "k": "name" }] } }
  },
  "ViewFilterTypeDateUpgradeToMultiStep": {
    "migrateButtonText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zamie\u0144 na wielostopniowy filtr daty" } },
    "migrateButtonTooltip": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nowy filtr jest ju\u017C dost\u0119pny. Kliknij, aby go zaktualizowa\u0107. Dzia\u0142a tak samo." } }
  },
  "dataSyncType": {
    "syncError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "B\u0142\u0105d synchronizacji" } },
    "icalCalendar": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zsynchronizuj kana\u0142 iCal" } },
    "postgresql": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zsynchronizuj tabel\u0119 PostgreSQL" } }
  },
  "iCalCalendarDataSync": {
    "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Adres URL iCal" } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Funkcja uaktualniania kalendarza iCal automatycznie synchronizuje wpisy z kalendarzem znajduj\u0105cym si\u0119 pod podanym adresem URL. Obs\u0142ugiwany jest tylko format ICS (Internet Calendar and Scheduling)." } }
  },
  "postgreSQLDataSync": {
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": 'Synchronizuje tabel\u0119 PostgreSQL z tabel\u0105 Baserow na podstawie podanych poni\u017Cej danych. Nale\u017Cy pami\u0119ta\u0107, \u017Ce po rozpocz\u0119ciu synchronizacji zostan\u0105 zaznaczone wszystkie wiersze w podanej tabeli. Mimo \u017Ce Baserow tylko odczytuje dane, zalecamy ograniczy\u0107 uprawnienia u\u017Cytkownika do "tylko do odczytu".' } },
    "host": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Host" } },
    "username": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nazwa u\u017Cytkownika" } },
    "password": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Has\u0142o" } },
    "database": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Baza danych" } },
    "schema": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Schemat" } },
    "table": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tabela" } },
    "port": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Port" } },
    "sslMode": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tryb SSL" } }
  },
  "createDataSync": {
    "next": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dalej" } },
    "fields": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wybierz pola, kt\xF3re chcesz zsynchronizowa\u0107" } },
    "create": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Utw\xF3rz i zsynchronizuj tabel\u0119" } },
    "error": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Podczas synchronizacji wyst\u0105pi\u0142 b\u0142\u0105d" } },
    "autoAddLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Automatycznie dodawaj nowe atrybuty" } },
    "autoAddHelper": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Automatycznie dodaje i synchronizuje nowo dost\u0119pne atrybuty w \u017Ar\xF3dle danych z tabel\u0105 Baserow. Nale\u017Cy pami\u0119ta\u0107, \u017Ce aby ta funkcja dzia\u0142a\u0142a, wszystkie atrybuty musz\u0105 by\u0107 zsynchronizowane." } },
    "twoWaySyncLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Synchronizacja dwu-kierunkowa" } },
    "deleteUnmatchedRowsLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Usu\u0144 wiersze, gdy zostan\u0105 usuni\u0119te lub ukryte w \u017Ar\xF3dle" } },
    "deleteUnmatchedRowsHelper": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Gdy opcja ta jest w\u0142\u0105czona, to w trakcie ka\u017Cdej synchronizacji wiersze usuni\u0119te lub niewidoczne w \u017Ar\xF3dle s\u0105 usuwane z tej tabeli. Je\u015Bli opcja jest wy\u0142\u0105czona, wiersze nie s\u0105 usuwane i zostan\u0105 u\u017Cyte ponownie, gdy pojawi si\u0119 wiersz \u017Ar\xF3d\u0142owy." } },
    "syncing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Synchronizowanie danych..." } }
  },
  "syncTableModal": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Synchronizuj " }, { "t": 4, "k": "name" }] } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ta tabela jest powi\u0105zana z synchronizacj\u0105 danych. Po klikni\u0119ciu przycisku dane zostan\u0105 zsynchronizowane ze \u017Ar\xF3d\u0142em. W trakcie tego procesu na zaktualizowanych wierszach zostanie na\u0142o\u017Cona blokada. Mo\u017Ce to tymczasowo spowolni\u0107 \u017C\u0105dania API lub modyfikacje tabeli." } },
    "sync": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Synchronizuj tabel\u0119" } },
    "hide": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ukryj" } }
  },
  "gridViewRowHeight": {
    "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wysoko\u015B\u0107 wierszy" } },
    "small": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ma\u0142a" } },
    "medium": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u015Arednia" } },
    "large": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Du\u017Ca" } }
  },
  "gridViewFreezeHandle": {
    "freeze": { "t": 0, "b": { "t": 1, "c": [{ "t": 2, "i": [{ "t": 3 }], "s": "Zablokuj 0 kolumn" }, { "t": 2, "i": [{ "t": 3 }], "s": "Zablokuj 1 kolumn\u0119" }, { "t": 2, "i": [{ "t": 3, "v": "Zablokuj " }, { "t": 4, "k": "count" }, { "t": 3, "v": " kolumny/kolumn" }] }] } },
    "hoverHint": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Przeci\u0105gnij, aby zablokowa\u0107 kolumny" } }
  },
  "configureDataSyncModal": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Synchronizacja danych" } },
    "syncedFields": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pola zsynchronizowane" } },
    "syncSettings": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ustawienia synchronizacji" } }
  },
  "configureDataSyncVisibleFields": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zmie\u0144 pola synchronizowane" } },
    "fields": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pola zsynchronizowane" } },
    "syncTable": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Synchronizacja podczas zapisu" } }
  },
  "configureDataSyncSettings": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zmie\u0144 synchronizacj\u0119 danych" } },
    "syncTable": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Synchronizacja podczas zapisu" } }
  },
  "webhookDeactivatedNotification": {
    "body": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Webhook " }, { "t": 4, "k": "name" }, { "t": 3, "v": " zosta\u0142 wy\u0142\u0105czony, poniewa\u017C zbyt wiele razy wyst\u0105pi\u0142 b\u0142\u0105d." }] } }
  },
  "webhookPayloadTooLargeNotification": {
    "body": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Payload webhooka " }, { "t": 4, "k": "name" }, { "t": 3, "v": " ze zdarzeniem o identyfikatorze " }, { "t": 4, "k": "event_id" }, { "t": 3, "v": " by\u0142 zbyt du\u017Cy. Zawarto\u015B\u0107 zosta\u0142a podzielona na partie, ale dane przekraczaj\u0105ce limit partii (" }, { "t": 4, "k": "batch_limit" }, { "t": 3, "v": ") zosta\u0142y odrzucone." }] } }
  },
  "tablesGuidedTourStep": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Skonfiguruj tabel\u0119" } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tabele pozwalaj\u0105 przechowywa\u0107 dane w spos\xF3b uporz\u0105dkowany. Utw\xF3rz tabel\u0119, aby ustrukturyzowa\u0107 swoje dane." } }
  },
  "filterSortGroupGuidedTourStep": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wyszukaj i uporz\u0105kuj swoje dane" } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Szybko znajd\u017A informacje, korzystaj\u0105c z filtrowania i sortowania wierszy. Pogrupuj dane wed\u0142ug dowolnego pola, aby zwizualizowa\u0107 schematy i upro\u015Bci\u0107 swoje procesy." } }
  },
  "addFieldGuidedTourStep": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dostosuj swoje dane" } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kliknij \u201C+\u201D, aby doda\u0107 nowe pola (kolumny). Spo\u015Br\xF3d dost\u0119pnych rodzaj\xF3w p\xF3l wybierz te, kt\xF3re pomog\u0105 ci uchwyci\u0107 to, co ma znaczenie." } }
  },
  "createViewGuidedTourStep": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Spersonalizuj widoki" } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aby zwizualizowa\u0107 swoje dane dok\u0142adnie tak, jak chcesz, utw\xF3rz w\u0142asne widoki, takie jak siatka, kalendarz, kanban lub galeria." } }
  },
  "createFormViewGuidedTourStep": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Utw\xF3rz formularz" } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Utw\xF3rz formularze powi\u0105zane z tabelami \u2014 odpowiedzi b\u0119d\u0105 w nich wpisywane bezpo\u015Brednio, co znacznie usprawni zbieranie danych." } }
  },
  "viewOptionsGuidedTourStep": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Opcje widoku" } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aby wyeksportowa\u0107, zaimportowa\u0107, zduplikowa\u0107 oraz skonfigurowa\u0107 webhook, kliknij trzy kropki obok widoku." } }
  },
  "fieldRules": {
    "errorTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "B\u0142\u0105d podczas przetwarzania regu\u0142y pola" } },
    "ruleDoesNotExist": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Regu\u0142a nie istnieje" } },
    "ruleTypeDoesNotExist": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ten typ regu\u0142y nie istnieje" } },
    "ruleAlreadyExists": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ta regu\u0142a ju\u017C istnieje" } }
  },
  "fieldFormViewEditRowSubForm": {
    "selectFormViewLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Widok formularza" } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ka\u017Cdemu wierszowi zostanie przypisany unikalny link, kt\xF3ry umo\u017Cliwi wst\u0119pne wype\u0142nienie formularza danymi z tego wiersza. Zwr\xF3\u0107 uwag\u0119, \u017Ce za pomoc\u0105 formularza ka\u017Cdy u\u017Cytkownik z dost\u0119pem do odczytu tabeli i pola b\u0119dzie m\xF3g\u0142 edytowa\u0107 dany wiersz. Je\u015Bli widok jest udost\u0119pniony publicznie, dotyczy to tak\u017Ce odwiedzaj\u0105cych." } },
    "notPublicWarning": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ten formularz nie jest udost\u0119pniony publicznie. Link do edycji nie b\u0119dzie dzia\u0142a\u0107, dop\xF3ki formularz nie zostanie opublikowany publicznie." } },
    "notPublic": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "(niepubliczny)" } },
    "formDoesNotExist": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wybrany formularz zosta\u0142 usuni\u0119ty." } }
  },
  "editRowLink": {
    "editRow": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Edytuj wiersz" } }
  },
  "rowEditFieldFormViewEditRow": {
    "copyLink": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Skopiuj link" } },
    "noFormView": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nie skonfigurowano \u017Cadnego widoku formularza" } }
  },
  "tableExcelImporter": {
    "chooseFileLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wybierz plik Excel" } },
    "chooseFileDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mo\u017Cesz zaimportowa\u0107 arkusz, przesy\u0142aj\u0105c plik .xlsx, .xls lub .ods. Je\u015Bli plik zawiera wiele arkuszy, mo\u017Cna wybra\u0107, kt\xF3ry arkusz ma zosta\u0107 zaimportowany." } },
    "chooseFile": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wybierz plik Excel" } },
    "sheet": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Arkusz" } },
    "firstRowHeader": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pierwszy wiersz zawiera nag\u0142\xF3wek" } },
    "limitFileSize": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Maksymalny rozmiar pliku: " }, { "t": 4, "k": "limit" }, { "t": 3, "v": " MB." }] } },
    "limitError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Nie mo\u017Cna zaimportowa\u0107 wi\u0119cej ni\u017C " }, { "t": 4, "k": "limit" }, { "t": 3, "v": " wierszy." }] } },
    "processingError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "W trakcie przetwarzania pliku Excel wyst\u0105pi\u0142 b\u0142\u0105d: " }, { "t": 4, "k": "error" }] } },
    "emptyError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ten plik Excel nie zawiera \u017Cadnych arkuszy." } },
    "emptySheetError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wybrany arkusz jest pusty." } }
  },
  "viewSearch": {
    "clearSearch": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wyczy\u015B\u0107 wyszukiwanie" } }
  },
  "gridViewGroupByBanner": {
    "emptyValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "(Pusty)" } },
    "expandGroup": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Rozwi\u0144 grup\u0119" } },
    "collapseGroup": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zwi\u0144 grup\u0119" } }
  }
};

export { resource as default };
//# sourceMappingURL=pl-BOLHrO6w.mjs.map
