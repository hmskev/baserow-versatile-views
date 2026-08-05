!(function() {
  try {
    var e = false ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
    var n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "9a13d0e1-1f5e-4249-bad9-f42aaa5d3306", e._sentryDebugIdIdentifier = "sentry-dbid-9a13d0e1-1f5e-4249-bad9-f42aaa5d3306");
  } catch (e2) {
  }
})();
const resource = {
  "webhookModal": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "name" }, { "t": 3, "v": " Webhooks" }] } },
    "createWebhook": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Webhook erstellen" } },
    "backToList": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zur\xFCck zur Liste" } }
  },
  "deleteWebhookModal": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "L\xF6schen " }, { "t": 4, "k": "webhookName" }] } },
    "deleteButton": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Webhook l\xF6schen" } },
    "body": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sind Sie sicher, dass Sie diesen Webhook l\xF6schen wollen? Sie werden ihn sp\xE4ter nicht wiederherstellen k\xF6nnen." } }
  },
  "webhookList": {
    "noWebhooksMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sie haben noch keine Webhooks erstellt. Webhooks k\xF6nnen verwendet werden, um Systeme von Drittanbietern zu informieren, wenn eine Zeile in Baserow erstellt, aktualisiert oder gel\xF6scht wurde." } }
  },
  "testWebhookModal": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Test Webhook" } },
    "unreachable": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Server unerreichbar" } }
  },
  "webhookForm": {
    "inputLabels": {
      "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Name" } },
      "value": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wert" } },
      "requestMethod": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Methode" } },
      "url": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "URL" } },
      "userFieldNames": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Namen der Benutzerfelder" } },
      "events": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Welche Ereignisse sollen diesen Webhook ausl\xF6sen?" } },
      "headers": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zus\xE4tzliche \xDCberschriften" } },
      "example": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Beispiel Nutzlast" } }
    },
    "errors": {
      "urlField": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": 'Muss eine g\xFCltige URL sein, die mit "https://" oder "http://" beginnt.' } },
      "invalidHeaders": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Eine der Kopfzeilen ist ung\xFCltig." } }
    },
    "checkbox": {
      "sendUserFieldNames": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Feldname anstelle von id verwenden" } }
    },
    "radio": {
      "allEvents": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Schick mir alles" } },
      "customEvents": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ich m\xF6chte einzelne Ereignisse ausw\xE4hlen" } }
    },
    "triggerButton": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Test-Webhook ausl\xF6sen" } },
    "deactivated": {
      "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Webhook ist deaktiviert" } },
      "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dieser Webhook wurde deaktiviert, weil zu viele aufeinanderfolgende Fehler aufgetreten sind. Bitte \xFCberpr\xFCfen Sie das Aufrufprotokoll f\xFCr weitere Details. Klicken Sie auf die Schaltfl\xE4che unten, um ihn wieder zu aktivieren. Vergessen Sie nicht, den Webhook nach dem Aktivieren zu speichern." } },
      "activate": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aktivierung" } }
    },
    "triggerWhenFieldsHaveChanged": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "L\xF6se aus, wenn Felder ver\xE4ndert wurden" } },
    "helpTriggerWhenFieldsHaveChanged": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wird nur ausgel\xF6st, wenn sich der Zellwert der gew\xE4hlten Felder ver\xE4ndert." } }
  },
  "webhook": {
    "details": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Details" } },
    "lastCall": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Letzter Aufruf: " }, { "t": 4, "k": "lastCallTime" }] } },
    "noCalls": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Keine Aufrufe get\xE4tigt" } },
    "callLog": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aufrufprotokoll" } },
    "triggerDescription": { "t": 0, "b": { "t": 1, "c": [{ "t": 2, "i": [{ "t": 3 }], "s": "Ausl\xF6ser bei jedem Ereignis" }, { "t": 2, "i": [{ "t": 3, "v": "Ausl\xF6ser bei " }, { "t": 4, "k": "count" }, { "t": 3, "v": " Ereignis" }] }, { "t": 2, "i": [{ "t": 3, "v": "Ausl\xF6ser bei " }, { "t": 4, "k": "count" }, { "t": 3, "v": " Ereignissen" }] }] } }
  },
  "createWebhook": {
    "errorTableWebhookMaxLimitExceededTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Maximale Webhooks \xFCberschritten" } },
    "errorTableWebhookMaxLimitExceededDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Der Webhook kann nicht erstellt werden, da die maximale Anzahl von Webhooks pro Tabelle \xFCberschritten wurde." } }
  },
  "sidebar": {
    "viewAPI": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "API-Dokumente anzeigen" } },
    "createTable": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Neue Tabelle" } }
  },
  "sidebarItem": {
    "exportTable": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tabelle exportieren" } },
    "webhooks": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Webhooks" } },
    "lastSynced": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zuletzt synchronisiert" } },
    "notSynced": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "nicht synchronisiert" } },
    "sync": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tabelle synchronisieren" } },
    "updateSyncConfig": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sync-Konfiguration aktualisieren" } },
    "importFile": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Datei importieren" } }
  },
  "duplicateTableJobType": {
    "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tabelle duplizieren" } },
    "duplicating": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Duplizieren" } },
    "duplicatedTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tabelle dupliziert" } }
  },
  "apiToken": {
    "create": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "erstellen" } },
    "read": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "lesen" } },
    "update": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "aktualisieren" } },
    "delete": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "l\xF6schen" } },
    "tokenPrefix": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Token:" } },
    "viewAPIDocs": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "API-Dokumentation anzeigen" } },
    "generateNewToken": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Neues Token generieren" } },
    "showOrHide": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Das Token ein- oder ausblenden" } },
    "copyToClipboard": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "In die Zwischenablage kopieren" } },
    "showDatabases": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Datenbanken anzeigen" } }
  },
  "apiTokenSettings": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Datenbank-Token" } },
    "createToken": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Token erstellen" } },
    "noTokensMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sie haben noch kein Datenbank-Token erstellt. Sie k\xF6nnen Datenbank-Tokens verwenden, um sich bei den REST-API-Endpunkten zu authentifizieren, wo Sie Zeilen erstellen, lesen, aktualisieren und l\xF6schen k\xF6nnen. Es ist m\xF6glich, Berechtigungen auf Tabellenebene festzulegen." } },
    "hasFullPermissions": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Hat volle Berechtigungen, auch f\xFCr alle untergeordneten Elemente." } },
    "hasOnlySelectedPermissions": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Hat nur Berechtigungen f\xFCr die ausgew\xE4hlten untergeordneten Elemente." } },
    "noPermissions": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Hat keine Berechtigungen." } },
    "createNewTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Neues Datenbank-Token erstellen" } },
    "backToOverview": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zur\xFCck zur \xDCbersicht" } }
  },
  "apiTokenForm": {
    "nameLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Name" } },
    "workspaceLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Arbeitsbereich" } }
  },
  "apiDocsSelectDatabase": {
    "needOneDatabase": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sie m\xFCssen mindestens eine Datenbank haben, um die API-Dokumentation anzuzeigen." } }
  },
  "apiDocsExample": {
    "requestSample": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Beispielanfrage" } },
    "responseSample": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Beispielantwort" } },
    "userFieldNames": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Namen der Benutzerfelder" } }
  },
  "apiDocsParameter": {
    "optional": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "optional" } },
    "defaultValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Standardwert: " }, { "t": 4, "k": "value" }] } }
  },
  "apiDocsTableGetRow": {
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Ruft eine einzelne " }, { "t": 4, "k": "name" }, { "t": 3, "v": "-Zeile ab." }] } },
    "rowId": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Der eindeutige Bezeichner der angeforderten Zeile." } }
  },
  "apiDocsErrors": {
    "errorCode": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Fehlercode" } },
    "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Name" } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Beschreibung" } },
    "okDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Anfrage erfolgreich abgeschlossen." } },
    "badRequestDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Die Anfrage enth\xE4lt ung\xFCltige Werte oder das JSON konnte nicht interpretiert werden." } },
    "unauthorizedDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wenn Sie versuchen, auf einen Endpunkt ohne ein g\xFCltiges Datenbank-Token zuzugreifen." } },
    "notFoundDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zeile oder Tabelle wird nicht gefunden." } },
    "requestEntityTooLargeDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Die Anfrage hat die maximal zul\xE4ssige Gr\xF6\xDFe der Nutzdaten \xFCberschritten." } },
    "internalErrorDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Der Server ist auf eine unerwartete Bedingung gesto\xDFen." } },
    "badGatewayDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Baserow wird neu gestartet oder ein unerwarteter Ausfall ist im Gange." } },
    "unavailableDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Der Server konnte Ihre Anfrage nicht rechtzeitig bearbeiten." } }
  },
  "apiDocsTableFields": {
    "tableTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "name" }, { "t": 3, "v": " Tabelle" }] } },
    "tableId": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Die ID dieser Tabelle lautet:" } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Jede Zeile in der Tabelle " }, { "t": 4, "k": "name" }, { "t": 3, "v": " enth\xE4lt die folgenden Felder." }] } },
    "id": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "ID" } },
    "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Name" } },
    "type": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Typ" } },
    "compatibleFilters": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kompatible Filter" } }
  },
  "apiDocsTableListRows": {
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Um Zeilen in der Tabelle *" }, { "t": 4, "k": "name" }, { "t": 3, "v": "* aufzulisten, muss eine `GET`-Anfrage an den Endpunkt *" }, { "t": 4, "k": "name" }, { "t": 3, "v": '* gestellt werden. Die Antwort ist paginiert und standardm\xE4\xDFig wird die erste Seite zur\xFCckgegeben. Die richtige Seite kann durch Angabe der Abfrageparameter "page" und "size" abgerufen werden.' }] } },
    "page": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Legt fest, welche Seite von Zeilen zur\xFCckgegeben werden soll." } },
    "size": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Legt fest, wie viele Zeilen pro Seite zur\xFCckgegeben werden sollen." } },
    "userFieldNames": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": 'Wenn der GET-Parameter "user_field_names" vorhanden ist und dessen Inhalt einem dieser Werte entspricht (`y`, `yes`, `true`, `t`, `on`, `1`, oder eine leere Zeichenfolge), sind die von diesem Endpunkt zur\xFCckgegebenen Feldnamen die tats\xE4chlichen Namen der Felder.\n\nWenn der GET-Parameter "user_field_names" nicht angegeben wird oder nicht einem der oben angegebenen Werte entspricht, lauten alle zur\xFCckgegebenen Feldnamen "field_", gefolgt von der ID des Feldes. Zum Beispiel bezieht sich "field_1" auf das Feld mit der ID "1".\n\n Wenn `user_field_names` gesetzt ist, \xE4ndert sich au\xDFerdem das Verhalten der anderen GET-Parameter `order_by`, `include` und `exclude`. Sie erwarten stattdessen kommagetrennte Listen mit den tats\xE4chlichen Feldnamen.' } },
    "search": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wenn angegeben, werden nur Zeilen mit Daten zur\xFCckgegeben, die der Suchanfrage entsprechen." } },
    "test": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }, { "t": 9 }, { "t": 3 }, { "t": 9 }, { "t": 3 }, { "t": 9 }, { "t": 3 }, { "t": 9 }], "s": '`{"filter_type": "AND", "filters": [{"field": "Name", "type": "equal", "value": "test"}]}' } },
    "orderBy": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Optional k\xF6nnen die Zeilen nach durch Komma getrennten Feldern geordnet werden. Standardm\xE4\xDFig oder wenn einem Feld ein '+' vorangestellt wird, ist es aufsteigend (A-Z) geordnet, aber durch Voranstellen eines '-' kann es absteigend (Z-A) geordnet werden.\n #### Mit`user_field_names`:\n\n `order_by`sollte eine durch ein Komma getrennte Liste der Feldnamen sein, nach denen geordnet werden soll. Wenn Sie beispielsweise den folgenden GET-Parameter angeben: `order_by=My Field,-My Field 2`, werden die Zeilen nach dem Feld mit der Bezeichnung `My Field`in aufsteigender Reihenfolge geordnet. Wenn einige Felder denselben Wert haben, wird diese Teilmenge nach dem Feld `My Field 2` in absteigender Reihenfolge geordnet.\n\n Stellen Sie sicher, dass Feldern, deren Namen mit einem `+` oder `-` beginnen, ausdr\xFCcklich ein weiteres `+` oder `-` vorangestellt wird. Z.B.`+-Name`.\n\n\n Feldnamen, die Kommas enthalten, m\xFCssen in Anf\xFChrungszeichen eingeschlossen werden: `\"Name ,\"`. Wenn Feldnamen Anf\xFChrungszeichen enthalten, m\xFCssen sie mit dem Zeichen `\\` gesch\xFCtzt werden. Beispiel: `Name `.\n\n#### Ohne `user_field_names`:\n\n `order_by` sollte eine durch das Komma getrennte Liste von `field_` sein, gefolgt von der ID des Feldes, nach dem geordnet werden soll. Wenn Sie zum Beispiel den folgenden GET-Parameter angeben: `order_by=field_1,-field_2`, werden die Zeilen nach `field_1` in aufsteigender Reihenfolge geordnet. Wenn einige Felder denselben Wert haben, wird diese Teilmenge nach `field_2` in absteigender Reihenfolge geordnet." } },
    "filters": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Die Zeilen k\xF6nnen optional mit denselben Ansichtsfiltern gefiltert werden, die auch f\xFCr die Ansichten verf\xFCgbar sind. Dieser Parameter akzeptiert eine serialisierte JSON-Zeichenkette, die den Filterbaum enth\xE4lt, der auf diese Ansicht anzuwenden ist. Der Filterbaum ist eine verschachtelte Struktur, die die anzuwendenden Filter enth\xE4lt. \n\n#### Mit `user_field_names`:\n\nEin Beispiel f\xFCr einen g\xFCltigen Filterbaum ist der Folgende: `" }, { "t": 9, "v": "{" }, { "t": 3, "v": '\\"filter_type\\": \\"AND\\", \\"filters\\": [' }, { "t": 9, "v": "{" }, { "t": 3, "v": '\\"field\\": \\"Name\\", \\"type\\": \\"equal\\", \\"value\\": \\"test\\"' }, { "t": 9, "v": "}" }, { "t": 3, "v": "]" }, { "t": 9, "v": "}" }, { "t": 3, "v": "`.\n\n#### Ohne `user_field_names`:\n\nWenn Sie zum Beispiel optional den folgenden GET-Parameter angeben: `" }, { "t": 9, "v": "{" }, { "t": 3, "v": '\\"filter_type\\": \\"AND\\", \\"filters\\": [' }, { "t": 9, "v": "{" }, { "t": 3, "v": '\\"field\\": 1, \\"type\\": \\"equal\\", \\"value\\": \\"test\\"' }, { "t": 9, "v": "}" }, { "t": 3, "v": "]" }, { "t": 9, "v": "}" }, { "t": 3, "v": "`\n\nBitte beachten Sie, dass bei Angabe dieses Parameters alle anderen `filter__" }, { "t": 4, "k": "field" }, { "t": 3, "v": "__" }, { "t": 4, "k": "filter" }, { "t": 3, "v": '` ignoriert werden, ebenso wie der Parameter \\"filter_type\\".' }] } },
    "filter": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Die Zeilen k\xF6nnen optional mit denselben Ansichtsfiltern gefiltert werden, die auch f\xFCr die Ansichten verf\xFCgbar sind. Es k\xF6nnen mehrere Filter angewandt werden, wenn sie das gleiche Format haben. Die Variablen `field` und `filter` geben an, wie bzw. wo der Filter angewendet werden soll.\n\n#### Mit `user_field_names`:\n\nWenn Sie zum Beispiel optional den folgenden GET-Parameter angeben: `filter__Name__equal=test`, werden nur Zeilen zur\xFCckgegeben, in denen der Wert von `Name` gleich 'test' ist. Diese Methode ist abw\xE4rtskompatibel und pr\xFCft gegen `field_id`, wenn sie am Namen fehlschl\xE4gt.\n\n#### Ohne `user_field_names`:\n\nWenn Sie zum Beispiel optional den folgenden GET-Parameter angeben: `filter__field_1__equal=test`, werden nur Zeilen zur\xFCckgegeben, bei denen der Wert von `field_1` gleich 'test' ist.\n\nBitte beachten Sie, dass dieser Parameter ignoriert wird, wenn der Parameter filters angegeben wird. " } },
    "filterLink": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Eine Liste mit allen Filtern finden Sie hier." } },
    "filterType": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "- `AND`: Gibt an, dass die Zeilen allen angegebenen Filtern entsprechen m\xFCssen.\n- `OR`: Gibt an, dass die Zeilen nur einem der Filter entsprechen m\xFCssen.\n\n Dies funktioniert nur, wenn zwei oder mehr Filter vorhanden sind." } },
    "include": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Alle Felder werden standardm\xE4\xDFig in die Antwort aufgenommen. Sie k\xF6nnen eine Teilmenge der einzuschlie\xDFenden Felder ausw\xE4hlen, indem Sie den Abfrageparameter include angeben.\n\n #### Mit `user_field_names`:\n\n Include\" sollte eine durch das Komma getrennte Liste von Feldnamen sein, die in die Ergebnisse aufgenommen werden sollen. Wenn Sie zum Beispiel den folgenden GET-Parameter angeben: `include=My Field,-My Field 2`, dann werden nur diese Felder eingeschlossen (es sei denn, sie werden ausdr\xFCcklich ausgeschlossen).\n\n Der Name des Feldes, das die Felder enth\xE4lt, muss mit einem Hinweis versehen werden: `name ,'. Enth\xE4lt der Feldname Schr\xE4gstriche, so m\xFCssen diese unter Verwendung des Zeichens `\\` gesch\xFCtzt werden. Ex : `Name \\'.\n\n #### Ohne `user_field_names`:\n\n `include` sollte eine durch das Komma getrennte Liste von `field_` sein, gefolgt von der ID des Feldes, das in die Ergebnisse aufgenommen werden soll. Zum Beispiel: Wenn Sie den folgenden GET-Parameter `include=field_1,field_2` angeben, werden nur die Felder mit der ID `1` und der ID `2` einbezogen (es sei denn, sie werden ausdr\xFCcklich ausgeschlossen)." } },
    "exclude": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": 'Alle Felder werden standardm\xE4\xDFig in die Antwort aufgenommen. Sie k\xF6nnen eine Untergruppe von Feldern ausw\xE4hlen, die ausgeschlossen werden sollen, indem Sie den Abfrageparameter exclude angeben.\n\n #### Mit "user_field_names":\n\n`exclude` sollte eine durch das Komma getrennte Liste von Feldern sein, die von den Ergebnissen ausgeschlossen werden sollen. Wenn Sie zum Beispiel den folgenden GET-Parameter angeben: `exclude=My Field,-My Field 2` dann werden diese Felder ausgeschlossen.\n\n Der Name des Feldes, das die Felder enth\xE4lt, muss mit einem Hinweis versehen sein: "name,". Wenn der Feldname Schr\xE4gstriche enth\xE4lt, m\xFCssen diese ebenfalls mit dem Zeichen "name" gesch\xFCtzt werden. Ex : `name\\"`.\n\n #### Ohne `user_field_names`:\n\n `exclude` sollte eine durch das Komma getrennte Liste von `field_` sein, gefolgt von der ID des Feldes, das von den Ergebnissen ausgeschlossen werden soll. Zum Beispiel: Wenn Sie den folgenden GET-Parameter `exclude=field_1,field_2` angeben, werden die Felder mit der id `1` und id `2` ausgeschlossen.' } },
    "viewId": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": 'Standardm\xE4\xDFig werden keine Filter und Sortierungen au\xDFerhalb der in den Abfrageparametern definierten angewendet. Sie k\xF6nnen die Filter und Sortierungen einer Ansicht hinzuf\xFCgen, indem Sie deren `id` im GET-Parameter `view_id` angeben. Wenn Sie z. B. den folgenden GET-Parameter angeben: "view_id=1", werden die in der Ansicht mit der ID "1" definierten Filter und Sortierungen angewandt. Sie k\xF6nnen die `view_id` im Kontextmen\xFC einer beliebigen Ansicht finden. Es ist die Zahl in Klammern hinter dem Namen der Ansicht. \n\n #### Mit `filter__' }, { "t": 4, "k": "field" }, { "t": 3, "v": "__" }, { "t": 4, "k": "filter" }, { "t": 3, "v": "` \n\n Es werden sowohl der im Abfrageparameter angegebene Filter als auch die in der Ansicht definierten Filter angewendet.\n\n #### Mit `order_by` \n\n Wenn `order_by` angegeben wird, wird die in der Ansicht definierte Sortierung ignoriert." }] } },
    "filtersBuilder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Filter-Parameter-Builder \xF6ffnen" } },
    "join": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Erm\xF6glicht die Abfrage von Feldwerten aus einer Zieltabelle \xFCber vorhandene Verkn\xFCpfungszeilenfelder. Der Parametername muss der Name eines bestehenden Link-Zeilenfeldes sein, gefolgt von __join. Der Wert sollte eine Liste von Feldnamen sein, f\xFCr die zus\xE4tzliche Werte abgefragt werden sollen. Sie k\xF6nnen ein oder mehrere Zielfelder angeben. Es ist nicht m\xF6glich, den Wert eines Link-Zeilenfeldes in der Zieltabelle zu suchen.\n\n #### Mit `user_field_names`:\n\n `join` sollte eine durch Komma getrennte Liste von Feldnamen sein, die in die Ergebnisse aufgenommen werden sollen. Zum Beispiel: Wenn Sie den folgenden GET-Parameter `LinkRowField__join=MyField,MyField2` angeben, werden die Werte von `MyField` und `My Field2` in der durch `LinkRowField` verkn\xFCpften Tabelle in die Antwort aufgenommen.\n\n#### Ohne `user_field_names`:\n\n `join` sollte eine durch Komma getrennte Liste von `field_` sein, gefolgt von der ID des Feldes, das in die Ergebnisse aufgenommen werden soll. Zum Beispiel: Wenn Sie den folgenden GET-Parameter angeben: `field_1__join=field_2,field_3`, werden die Werte von `field_2` und `field_3` in der mit `field_1` verkn\xFCpften Tabelle in die Antwort aufgenommen." } }
  },
  "apiDocsIntro": {
    "intro": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Die Datenbank " }, { "t": 4, "k": "name" }, { "t": 3, "v": " bietet eine einfache M\xF6glichkeit, die Daten in ein beliebiges externes System zu integrieren. Die API folgt der REST-Semantik, verwendet JSON zur Kodierung von Objekten und st\xFCtzt sich auf Standard-HTTP-Codes sowie maschinen- und menschenlesbare Fehler zur Signalisierung von Operationsergebnissen." }] } },
    "autoDocDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Diese Dokumentation wird automatisch auf der Grundlage der in Ihrer Datenbank vorhandenen Tabellen und Felder erstellt. Wenn Sie \xC4nderungen an Ihrer Datenbank, Ihren Tabellen oder Feldern vornehmen, kann es sein, dass sich auch die API-Schnittstelle ge\xE4ndert hat. Stellen Sie daher sicher, dass Sie Ihre API-Implementierung entsprechend aktualisieren." } },
    "databaseId": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Die ID dieser Datenbank lautet:" } },
    "jsClient": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "JavaScript-Beispiel API-Client:" } },
    "pythonClient": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Python-Beispiel API-Client:" } }
  },
  "apiDocsTableListFields": {
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Um Felder der Tabelle " }, { "t": 4, "k": "name" }, { "t": 3, "v": " aufzulisten, muss eine `GET`-Anfrage an den Endpunkt " }, { "t": 4, "k": "name" }, { "t": 3, "v": " fields gestellt werden. Es ist nur m\xF6glich, die Felder aufzulisten, wenn das Datenbank-Token Lese-, Erstellungs- oder Aktualisierungsberechtigungen hat." }] } },
    "resultFieldProperties": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Eigenschaften des Ergebnisfeldes" } },
    "id": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Prim\xE4rschl\xFCssel des Feldes. Kann verwendet werden, um den Namen der Datenbankspalte durch Hinzuf\xFCgen des Pr\xE4fixes `field_` zu generieren." } },
    "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Name des Feldes." } },
    "tableId": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zugeh\xF6rige Tabellen-ID." } },
    "order": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Reihenfolge der Felder in der Tabelle. 0 f\xFCr das erste Feld." } },
    "primary": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Gibt an, ob das Feld ein Prim\xE4rfeld ist. Wenn `true`, kann das Feld nicht gel\xF6scht werden und der Wert sollte die gesamte Zeile repr\xE4sentieren." } },
    "type": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "F\xFCr dieses Feld definierter Typ." } },
    "extraProps": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Einige zus\xE4tzliche Eigenschaften werden hier nicht beschrieben, da sie typspezifisch sind." } },
    "readOnly": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": 'Zeigt an, ob das Feld ein schreibgesch\xFCtztes Feld ist. Wenn "true", kann der Wert der Zelle nicht aktualisiert werden.' } },
    "descriptionField": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Feldbeschreibung" } }
  },
  "apiDocsTableDeleteRow": {
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "L\xF6scht eine vorhandene " }, { "t": 4, "k": "name" }, { "t": 3, "v": "-Zeile." }] } },
    "rowId": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Der eindeutige Bezeichner der Zeile, die gel\xF6scht werden muss." } }
  },
  "apiDocsTableDeleteRows": {
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "L\xF6scht vorhandene " }, { "t": 4, "k": "name" }, { "t": 3, "v": "-Zeilen." }] } },
    "items": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ein Array von Zeilen-IDs, die gel\xF6scht werden sollen." } }
  },
  "apiDocsTableMoveRow": {
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Verschiebt eine vorhandene " }, { "t": 4, "k": "name" }, { "t": 3, "v": "-Zeile vor eine andere Zeile. Wenn keine `before_id` angegeben wird, dann wird die Zeile an das Ende der Tabelle verschoben." }] } },
    "rowId": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Verschiebt die mit dem Wert verbundene Zeile." } },
    "before": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Verschiebt die Zeile mit der angegebenen `row_id` vor die Zeile mit dem angegebenen Wert. Wenn nicht angegeben, wird die Zeile an das Ende verschoben." } }
  },
  "apiDocsUploadFile": {
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "L\xE4dt eine Datei auf Baserow hoch, indem der Dateiinhalt direkt hochgeladen wird. Es wird ein Multipart `file` erwartet, der den Inhalt der Datei enth\xE4lt. Die Antwort kann dann zum [Hochladen einer Datei in eine Zeile](" }, { "t": 4, "k": "PUBLIC_BACKEND_URL" }, { "t": 3, "v": "/api/redoc/#tag/Database-table-rows/operation/update_database_table_row) verwendet werden." }] } },
    "file": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Der `file` Multipart, der den Dateiinhalt enth\xE4lt." } }
  },
  "apiDocsUploadFileViaURL": {
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "L\xE4dt eine Datei in Baserow hoch, indem es sie von der angegebenen URL herunterl\xE4dt. Die Antwort kann dann zum [Hochladen einer Datei in eine Zeile](" }, { "t": 4, "k": "PUBLIC_BACKEND_URL" }, { "t": 3, "v": "/api/redoc/#tag/Database-table-rows/operation/update_database_table_row) verwendet werden." }] } },
    "url": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Die URL, die Baserow in Ihrem Namen herunterladen und hochladen soll." } }
  },
  "apiDocsTableUpdateRow": {
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Aktualisiert eine vorhandene " }, { "t": 4, "k": "name" }, { "t": 3, "v": "-Zeile." }] } },
    "rowId": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Der eindeutige Bezeichner der Zeile, die aktualisiert werden muss." } },
    "before": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wenn angegeben, wird die neu erstellte Zeile vor der Zeile mit der angegebenen id positioniert." } }
  },
  "apiDocsTableUpdateRows": {
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Aktualisiert bestehende " }, { "t": 4, "k": "name" }, { "t": 3, "v": "-Zeilen." }] } },
    "id": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Die Zeilen-ID." } }
  },
  "apiDocsTableCreateRow": {
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Erstellen Sie eine neue " }, { "t": 4, "k": "name" }, { "t": 3, "v": "-Zeile." }] } },
    "before": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wenn angegeben, wird die neu erstellte Zeile vor der Zeile mit der angegebenen id positioniert." } }
  },
  "apiDocsTableCreateRows": {
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Neue " }, { "t": 4, "k": "name" }, { "t": 3, "v": "-Zeilen erstellen." }] } },
    "before": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Falls angegeben, werden die neu erstellten Zeilen vor der Zeile mit der angegebenen id positioniert." } }
  },
  "apiDocsAuth": {
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Baserow verwendet eine einfache tokenbasierte Authentifizierung. Sie m\xFCssen mindestens ein Datenbank-Token in Ihrem " }, { "t": 4, "k": "settingsLink" }, { "t": 3, "v": " erzeugen, um die unten beschriebenen Endpunkte zu verwenden. Es ist m\xF6glich, per Token Berechtigungen zum Erstellen, Lesen, Aktualisieren und L\xF6schen bis zur Tabellenebene zu vergeben. Sie k\xF6nnen sich bei der API authentifizieren, indem Sie Ihren Token im HTTP-Authorization Bearer Token Header angeben. Alle API-Anfragen m\xFCssen authentifiziert sein und \xFCber HTTPS erfolgen." }] } },
    "settingsLink": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Einstellungen" } }
  },
  "apiDocsFilters": {
    "filter": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Filter" } },
    "exampleValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Beispielwert" } },
    "example": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Vollst\xE4ndiges Beispiel" } },
    "field": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Feld " }, { "t": 4, "k": "name" }] } },
    "deprecated": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "veraltet" } }
  },
  "apiDocsFiltersBuilderModal": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Filter-Parameter-Builder" } },
    "userFieldNames": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Namen der Benutzerfelder" } },
    "json": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "JSON" } },
    "queryParameter": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Abfrageparameter" } }
  },
  "apiDocsPasswordFieldAuthentication": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "name" }, { "t": 3, "v": " Authentifizierung" }] } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pr\xFCft, ob das angegebene Passwort und die Zeile mit dem in der Zelle gespeicherten Wert \xFCbereinstimmen." } },
    "fieldId": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Die Feld-ID, f\xFCr die das Passwort gepr\xFCft werden soll." } },
    "rowId": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Die Zeilen-ID, f\xFCr die das Passwort gepr\xFCft werden soll." } },
    "password": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Das Passwort, das auf Korrektheit gepr\xFCft werden soll." } }
  },
  "apiDocsListTables": {
    "listTables": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Alle Tabellen auflisten" } },
    "listTablesDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dieser Endpunkt funktioniert nur in Kombination mit der Token-Authentifizierung. Er listet alle Tabellen auf, f\xFCr die das Token Erstellungs-, Lese-, Aktualisierungs- oder L\xF6schberechtigungen hat." } }
  },
  "fieldTextSubForm": {
    "placeholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Standardtext" } }
  },
  "fieldSingleSelectSubForm": {
    "optionsLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Optionen" } },
    "defaultOptionLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Standardoption" } }
  },
  "fieldMultipleSelectSubForm": {
    "optionsLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Optionen" } },
    "defaultOptionsLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Standardoptionen" } }
  },
  "fieldSingleSelectDropdown": {
    "notFound": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Option nicht gefunden" } }
  },
  "fieldmultipleCollaboratorsDropdown": {
    "notFound": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mitarbeiter nicht gefunden" } }
  },
  "fieldDateSubForm": {
    "dateFormatLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Datumsformat" } },
    "dateFormatEuropean": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Europ\xE4isch" } },
    "dateFormatUS": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "US" } },
    "dateFormatISO": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "ISO" } },
    "includeTimeLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zeit einbeziehen" } },
    "showTimezoneLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zeitzone anzeigen" } },
    "forceTimezoneLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zeitzone f\xFCr alle Mitarbeiter festlegen" } },
    "forceTimezoneValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zeitzone" } },
    "addTimezoneOffsetLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Werte umrechnen (" }, { "t": 4, "k": "utcOffsetDiff" }, { "t": 3, "v": " Minuten hinzuf\xFCgen)" }] } },
    "subTimezoneOffsetLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Werte umrechnen (" }, { "t": 4, "k": "utcOffsetDiff" }, { "t": 3, "v": " Minuten subtrahieren)" }] } },
    "timeFormatLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zeitformat" } },
    "24Hour": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "24 Stunden" } },
    "12Hour": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "12 Stunden" } }
  },
  "fieldLinkRowSubForm": {
    "noTable": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sie ben\xF6tigen mindestens eine weitere Tabelle in derselben Datenbank, auf die Sie verweisen k\xF6nnen." } },
    "selectTableLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "W\xE4hlen Sie eine Tabelle f\xFCr die Verkn\xFCpfung" } },
    "hasRelatedFieldLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Verkn\xFCpftes Feld in verkn\xFCpfter Tabelle erstellen" } },
    "limitToView": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Auswahl auf Ansicht beschr\xE4nken" } },
    "limitToViewDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Beachten Sie, dass dies nur visuell ist. Es ist immer noch m\xF6glich, Beziehungen au\xDFerhalb der Ansicht \xFCber die Bezugstabelle oder API herzustellen." } },
    "allowMultipleRelations": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mehrere Beziehungen zulassen" } }
  },
  "fieldBooleanSubForm": {
    "defaultValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Standard" } }
  },
  "fieldSelectOptions": {
    "add": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Eine Option hinzuf\xFCgen" } }
  },
  "fieldNumberSubForm": {
    "typeLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Typ der Nummer" } },
    "integer": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Integer" } },
    "decimal": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dezimal" } },
    "decimalPlacesLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dezimalstellen" } },
    "allowNegative": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Negativ zulassen" } },
    "separatorLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tausender- und Dezimaltrennzeichen" } },
    "prefixPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pr\xE4fix" } },
    "suffixPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Suffix" } },
    "prefixAndSuffixLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pr\xE4fix / Suffix" } },
    "spaceComma": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Leerzeichen, Komma (1 000 000,00)" } },
    "spacePeriod": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Leerzeichen, Punkt (1 000 000.00)" } },
    "commaPeriod": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Komma, Punkt (1,000,000.00)" } },
    "periodComma": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Punkt, Komma (1.000.000,00)" } },
    "noFormatting": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Keine Formatierung" } },
    "defaultValueLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Standardwert" } },
    "defaultValuePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Geben Sie einen Standardwert ein" } }
  },
  "fieldDurationSubForm": {
    "durationFormatLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Format der Dauer" } }
  },
  "fieldContext": {
    "editField": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Feld bearbeiten" } },
    "deleteField": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Feld l\xF6schen" } },
    "hideField": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Feld ausblenden" } },
    "showField": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Feld anzeigen" } },
    "changePrimaryField": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Prim\xE4res Feld \xE4ndern" } }
  },
  "fieldForm": {
    "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Name" } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Beschreibung" } },
    "fieldAlreadyExists": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ein Feld mit diesem Namen existiert bereits." } },
    "nameNotAllowed": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dieser Feldname ist nicht zul\xE4ssig." } },
    "nameTooLong": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Der Name dieses Feldes ist zu lang." } },
    "addDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Beschreibung hinzuf\xFCgen" } },
    "dbIndex": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Index" } },
    "dbIndexError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dieser Feldtyp kann keinen Index haben. Bitte entfernen Sie ihn vor dem Speichern oder \xE4ndern Sie den Feldtyp." } },
    "dbIndexDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Indizierung kann die Filterleistung erheblich verbessern, verlangsamt jedoch Erstellungs-, Aktualisierungs- und L\xF6schvorg\xE4nge." } },
    "defaultValueDisabledByConstraint": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Es kann kein Standardwert mit einer Eindeutigkeits-Constraint festgelegt werden" } },
    "dbIndexDisabledTooltip": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Indizierung ist f\xFCr diesen Feldtyp nicht verf\xFCgbar." } },
    "defaultValueOverriddenByView": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "F\xFCr dieses Feld ist ein Standardwert auf Ansichtsebene festgelegt, der Vorrang vor diesem Standardwert hat." } }
  },
  "fieldSelectThroughFieldSubForm": {
    "noTable": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sie ben\xF6tigen mindestens ein Verkn\xFCpfungszeilenfeld, um dieses Feld zu erstellen." } },
    "selectThroughFieldLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "W\xE4hlen Sie ein Verkn\xFCpfungszeilenfeld" } }
  },
  "fieldRollupSubForm": {
    "label": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Rollup-Funktion" } },
    "selectTargetFieldLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "W\xE4hlen Sie ein Feld aus, f\xFCr das ein Rollup durchgef\xFChrt werden soll" } }
  },
  "fieldLookupSubForm": {
    "selectTargetFieldLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "W\xE4hlen Sie ein Feld zum Nachschlagen" } }
  },
  "fieldFormulaNumberSubForm": {
    "typeLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Typ der Nummer" } },
    "integer": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Integer" } },
    "decimal": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dezimal" } },
    "decimalPlacesLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dezimalstellen" } },
    "allowNegative": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Negativ zulassen" } }
  },
  "fieldRatingSubForm": {
    "maxValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Max" } },
    "color": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Farbe" } },
    "style": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Stil" } }
  },
  "rowCreateModal": {
    "addField": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Feld hinzuf\xFCgen" } }
  },
  "selectRowContent": {
    "search": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zeilen suchen" } },
    "hideFields": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Felder ausblenden" } }
  },
  "rowEditModal": {
    "addField": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Feld hinzuf\xFCgen" } },
    "showHiddenFields": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ausgeblendete Felder anzeigen" } },
    "hideHiddenFields": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ausgeblendete Felder verbergen" } }
  },
  "rowEditFieldMultipleSelect": {
    "addOption": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "W\xE4hlen Sie eine Option" } }
  },
  "rowEditFieldMultipleCollaborators": {
    "addCollaborator": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "W\xE4hlen Sie einen Mitarbeiter" } }
  },
  "rowEditFieldFile": {
    "addFile": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Eine Datei hinzuf\xFCgen" } },
    "sizes": {
      "0": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Bytes" } },
      "1": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "KB" } },
      "2": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "MB" } },
      "3": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "GB" } },
      "4": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "TB" } },
      "5": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "PB" } }
    }
  },
  "rowEditFieldLinkRow": {
    "addLink": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "W\xE4hlen Sie einen Link" } },
    "keepOnlyOneValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nur einen Wert behalten. Dieses Feld unterst\xFCtzt nur eine Beziehung. Der Wert wird gespeichert, wenn nur noch eine Beziehung \xFCbrig ist." } }
  },
  "tableCSVImporter": {
    "chooseFileLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "CSV-Datei ausw\xE4hlen" } },
    "chooseFileDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sie k\xF6nnen eine vorhandene CSV-Datei importieren, indem Sie die .CSV-Datei mit den Tabellendaten hochladen. Mit den meisten Tabellenkalkulationsprogrammen k\xF6nnen Sie Ihre Kalkulationstabelle als CSV-Datei exportieren." } },
    "chooseFile": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "CSV-Datei ausw\xE4hlen" } },
    "columnSeparator": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Spaltentrenner" } },
    "recordSeparator": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Datensatz-Trennzeichen" } },
    "unitSeparator": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Elementarteiler" } },
    "encoding": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kodierung" } },
    "firstRowHeader": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Erste Zeile ist Kopfzeile" } },
    "limitFileSize": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Die maximale Dateigr\xF6\xDFe betr\xE4gt " }, { "t": 4, "k": "limit" }, { "t": 3, "v": "MB." }] } },
    "limitError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Es ist nicht m\xF6glich, mehr als " }, { "t": 4, "k": "limit" }, { "t": 3, "v": " Zeilen zu importieren." }] } },
    "emptyCSV": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Diese CSV-Datei ist leer." } }
  },
  "importer": {
    "fieldDefaultName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Feld " }, { "t": 4, "k": "count" }] } },
    "loading": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Datei wird geladen" } },
    "decoding": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dekodierung von Daten" } },
    "parsing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Analysieren von Daten" } },
    "preparing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aufbereitung der Daten" } },
    "inProgress": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "In Arbeit..." } }
  },
  "tableForm": {
    "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Name" } }
  },
  "tableXMLImporter": {
    "fileLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "XML-Datei ausw\xE4hlen" } },
    "fileDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sie k\xF6nnen eine bestehende XML-Datei importieren, indem Sie die XML-Datei mit tabellarischen Daten hochladen, d.h.:" } },
    "chooseButton": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "XML-Datei ausw\xE4hlen" } },
    "processingError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Bei der Verarbeitung von XML ist ein Fehler aufgetreten: " }, { "t": 4, "k": "errors" }] } },
    "emptyError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Diese XML-Datei ist leer." } },
    "limitFileSize": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Die maximale Dateigr\xF6\xDFe betr\xE4gt " }, { "t": 4, "k": "limit" }, { "t": 3, "v": "MB." }] } },
    "limitError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Es ist nicht m\xF6glich, mehr als " }, { "t": 4, "k": "limit" }, { "t": 3, "v": " Zeilen zu importieren." }] } }
  },
  "tableJSONImporter": {
    "fileLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "JSON-Datei ausw\xE4hlen" } },
    "fileDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sie k\xF6nnen eine vorhandene JSON-Datei importieren, indem Sie die .json-Datei mit tabellarischen Daten hochladen, d.h.:" } },
    "chooseButton": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "JSON-Datei ausw\xE4hlen" } },
    "encodingLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kodierung" } },
    "processingError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Beim Analysieren von JSON ist ein Fehler aufgetreten: " }, { "t": 4, "k": "error" }] } },
    "arrayError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Die JSON-Datei ist kein Array." } },
    "emptyError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Diese JSON-Datei ist leer." } },
    "limitFileSize": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Die maximale Dateigr\xF6\xDFe betr\xE4gt " }, { "t": 4, "k": "limit" }, { "t": 3, "v": "MB." }] } },
    "limitError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Es ist nicht m\xF6glich, mehr als " }, { "t": 4, "k": "limit" }, { "t": 3, "v": " Zeilen zu importieren." }] } }
  },
  "tablePasteImporter": {
    "pasteLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tabellendaten einf\xFCgen" } },
    "pasteDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sie k\xF6nnen die Zellen aus einer Kalkulationstabelle kopieren und unten einf\xFCgen." } },
    "firstRowHeader": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Erste Zeile ist Kopfzeile" } },
    "limitError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Es ist nicht m\xF6glich, mehr als " }, { "t": 4, "k": "limit" }, { "t": 3, "v": " Zeilen zu importieren." }] } }
  },
  "createTableModal": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Neue Tabelle anlegen" } },
    "defaultName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tabelle" } },
    "importLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "M\xF6chten Sie bestehende Daten importieren?" } },
    "newTable": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mit einer neuen Tabelle starten" } }
  },
  "createTable": {
    "showTable": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tabelle anzeigen" } },
    "addButton": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tabelle hinzuf\xFCgen" } },
    "uploading": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Hochladen..." } },
    "preparing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Daten werden vorbereitet..." } },
    "importError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Beim Import der Datei ist etwas schiefgelaufen" } },
    "stateRowCreation": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Importieren..." } },
    "statePreValidation": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Daten werden validiert..." } },
    "stateCreateTable": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tabelle wird erstellt..." } },
    "importingTable": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": 'Tabelle "' }, { "t": 4, "k": "name" }, { "t": 3, "v": '" wird importiert...' }] } }
  },
  "importErrorReport": {
    "reportTitleFailure": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Fehlgeschlagene Zeilen" } },
    "reportTitleSuccess": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Import war erfolgreich, allerdings..." } },
    "reportMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Die folgenden Zeilenindizes konnten nicht importiert werden:" } }
  },
  "importFileModal": {
    "defaultName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tabelle" } },
    "additionalImportTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "In " }, { "t": 4, "k": "table" }, { "t": 3, "v": " importieren" }] } },
    "importLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "M\xF6chten Sie vorhandene Daten importieren?" } },
    "newTable": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mit einer neuen Tabelle starten" } },
    "showTable": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tabelle anzeigen" } },
    "importButton": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Importieren" } },
    "uploading": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Hochladen..." } },
    "preparing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Daten werden vorbereitet..." } },
    "importError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Beim Dateiimport ist etwas schiefgelaufen" } },
    "fieldMappingTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Feldzuordnung" } },
    "fieldMappingDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wir haben die Spalten der Baserow-Felder in Ihrer Tabelle automatisch zugewiesen. Sie k\xF6nnen sie unten \xE4ndern. Jede nicht kompatible Zelle bleibt nach dem Import leer." } },
    "selectImportMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Bitte w\xE4hlen Sie die zu importierenden Daten aus." } },
    "filePreview": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Vorschau des Dateiinhalts" } },
    "importPreview": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Importvorschau" } },
    "useUpsertField": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zeilen aktualisieren, falls sie bereits existieren" } },
    "upsertTooltip": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Vorhandene Zeilen \xFCber ein eindeutiges Feld abgleichen, um Daten mit den importierten Werten zu \xFCberschreiben." } },
    "stateRowCreation": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Importieren..." } },
    "statePreValidation": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Daten werden validiert..." } },
    "stateCreateTable": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tabelle wird erstellt..." } },
    "restoredFile": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": 'Datei "' }, { "t": 4, "k": "name" }, { "t": 3, "v": '" wird importiert...' }] } }
  },
  "formulaAdvancedEditContext": {
    "textAreaFormulaInputPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Klicken Sie zum Bearbeiten der Formel" } },
    "fields": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Felder" } },
    "functions": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Funktionen" } },
    "operators": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Operatoren" } },
    "fieldType": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Ein " }, { "t": 4, "k": "type" }, { "t": 3, "v": "-Feld" }] } }
  },
  "fieldFormulaInitialSubForm": {
    "formulaInputPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Klicken Sie zum Bearbeiten der Formel" } },
    "refreshFormulaOptions": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Formeloptionen aktualisieren" } }
  },
  "fieldLongTextSubForm": {
    "enableRichTextFormatting": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Rich-Text-Formatierung aktivieren" } }
  },
  "formulaFieldItemDescription": {
    "syntax": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Syntax" } },
    "examples": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Beispiele" } }
  },
  "viewSearchContext": {
    "searchInRows": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Suche in allen Zeilen" } },
    "hideNotMatching": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "nicht \xFCbereinstimmende Zeilen ausblenden" } }
  },
  "viewsContext": {
    "searchView": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ansichten suchen" } },
    "noViews": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Keine Ansichten gefunden" } },
    "collaborative": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kollaborativ" } }
  },
  "viewFilterTypeLinkRow": {
    "unnamed": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "unbenannte Zeile " }, { "t": 4, "k": "value" }] } },
    "choose": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zeile ausw\xE4hlen" } }
  },
  "viewFieldConditionsForm": {
    "addCondition": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Bedingung hinzuf\xFCgen" } },
    "addConditionGroup": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Bedingungsgruppe hinzuf\xFCgen" } }
  },
  "viewFieldConditionItem": {
    "filterMisconfigured": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Das Feld, mit dem dieser Filter verbunden ist, wurde gel\xF6scht." } }
  },
  "viewFilterContext": {
    "addFilter": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Filter hinzuf\xFCgen" } },
    "addFilterGroup": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Filtergruppe hinzuf\xFCgen" } },
    "disableAllFilters": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "alle deaktiviert" } },
    "noFilterTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sie haben noch keinen Filter erstellt" } },
    "noFilterText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mit Hilfe von Filtern k\xF6nnen Sie Zeilen anzeigen, die auf Ihre Bedingungen zutreffen." } },
    "where": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wo" } },
    "and": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Und" } },
    "or": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Oder" } },
    "relatedFieldNotFound": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Das zugeh\xF6rige Feld wurde nicht gefunden." } },
    "filterTypeNotFound": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Der Filtertyp ist nicht kompatibel." } },
    "noCompatibleFilterTypesErrorTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Keine kompatiblen Filtertypen" } },
    "noCompatibleFilterTypesErrorMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Keines Ihrer Felder hat einen kompatiblen Filtertyp" } }
  },
  "viewFilterTypeFileTypeDropdown": {
    "image": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Bild" } },
    "document": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dokument" } }
  },
  "createViewModal": {
    "createNew": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Neue " }, { "t": 4, "k": "view" }, { "t": 3, "v": " erstellen" }] } },
    "add": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "view" }, { "t": 3, "v": " hinzuf\xFCgen" }] } }
  },
  "createViewLink": {
    "inCompatibleWithDataSync": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dieser Ansichtstyp ist nicht mit einer Datenabgleichs-Tabelle kompatibel." } }
  },
  "shareViewLink": {
    "shareViewText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ein privater, gemeinsam nutzbarer Link erlaubt es jedem, die Daten in dieser Ansicht zu sehen." } },
    "shareView": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "viewTypeSharingLinkName" }, { "t": 3, "v": " teilen" }] } },
    "createPrivateLink": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Einen privaten Link erstellen" } },
    "shareViewTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sie haben die Ansicht noch nicht geteilt" } },
    "sharedViewTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Diese " }, { "t": 4, "k": "viewTypeSharingLinkName" }, { "t": 3, "v": " ist derzeit \xFCber einen privaten Link freigegeben" }] } },
    "sharedViewDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Personen, die den Link haben, k\xF6nnen die " }, { "t": 4, "k": "viewTypeSharingLinkName" }, { "t": 3, "v": " sehen." }] } },
    "disableLink": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Freigegebenen Link deaktivieren" } },
    "generateNewUrl": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "neue URL generieren" } },
    "copyURL": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "URL kopieren" } },
    "EnablePassword": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zugriff mit einem Passwort beschr\xE4nken" } },
    "DisablePassword": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zugriff ist passwortgesch\xFCtzt" } },
    "ChangePassword": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\xC4ndern" } },
    "notSharedYetText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Erlauben Sie jedem, die Daten in dieser Ansicht zu sehen, oder synchronisieren Sie Ereignisse mit Ihrem externen Kalender." } },
    "shareViewWarningTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Warnung" } }
  },
  "viewGroupByContext": {
    "noGroupByTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sie haben noch keine Gruppierungen erstellt" } },
    "noGroupByText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zeilen nach einem Feld gruppieren." } },
    "groupBy": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Gruppieren nach" } },
    "thenBy": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "dann nach" } },
    "addGroupBy": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "W\xE4hlen Sie ein Feld, nach dem gruppiert werden soll" } },
    "hiddenFieldWarning": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Eine oder mehrere Gruppierungen verweisen auf ausgeblendete Felder, die f\xFCr Editoren und niedrigere Rollen nicht sichtbar sind." } },
    "maxGroupBysReached": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Sie k\xF6nnen nach bis zu " }, { "t": 4, "k": "count" }, { "t": 3, "v": " Feldern gruppieren." }] } },
    "collapseAllGroups": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Alle einklappen" } },
    "expandAllGroups": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Alle ausklappen" } }
  },
  "viewGroupBy": {
    "groupBy": { "t": 0, "b": { "t": 1, "c": [{ "t": 2, "i": [{ "t": 3 }], "s": "Gruppieren" }, { "t": 2, "i": [{ "t": 3 }], "s": "Gruppieren nach 1 Feld" }, { "t": 2, "i": [{ "t": 3, "v": "Gruppieren nach " }, { "t": 4, "k": "count" }, { "t": 3, "v": " Feldern" }] }] } }
  },
  "viewSortContext": {
    "noSortTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sie haben noch keine Sortierung erstellt" } },
    "noSortText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mit Sortierungen k\xF6nnen Sie Zeilen nach einem Feld sortieren." } },
    "sortBy": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sortieren nach" } },
    "thenBy": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dann nach" } },
    "addSort": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "ein Feld zum Sortieren ausw\xE4hlen" } },
    "hiddenFieldWarning": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Eine oder mehrere Sortierungen verweisen auf ausgeblendete Felder, die f\xFCr Editoren und niedrigere Rollen nicht sichtbar sind." } }
  },
  "viewSort": {
    "sort": { "t": 0, "b": { "t": 1, "c": [{ "t": 2, "i": [{ "t": 3 }], "s": "Sortieren" }, { "t": 2, "i": [{ "t": 3 }], "s": "1 Sortierung" }, { "t": 2, "i": [{ "t": 4, "k": "count" }, { "t": 3, "v": " Sortierungen" }] }] } }
  },
  "viewDecorator": {
    "decorator": { "t": 0, "b": { "t": 1, "c": [{ "t": 2, "i": [{ "t": 3 }], "s": "Farbe" }, { "t": 2, "i": [{ "t": 3 }], "s": "1 Farbe" }, { "t": 2, "i": [{ "t": 4, "k": "count" }, { "t": 3, "v": " Farben" }] }] } },
    "hiddenFieldWarning": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Verzierungen werden f\xFCr Editoren und niedrigere Rollen entfernt, da sie auf ausgeblendete Felder verweisen k\xF6nnen." } }
  },
  "viewRotateSlugModal": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "URL aktualisieren" } },
    "refreshWarning": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Sind Sie sicher, dass Sie die URL von " }, { "t": 4, "k": "viewName" }, { "t": 3, "v": " aktualisieren m\xF6chten? Nach der Aktualisierung wird eine neue URL generiert und es ist nicht m\xF6glich, \xFCber die alte URL auf " }, { "t": 4, "k": "viewTypeSharingLinkName" }, { "t": 3, "v": " zuzugreifen. Alle Personen, f\xFCr die Sie die URL freigegeben haben, k\xF6nnen nicht mehr auf " }, { "t": 4, "k": "viewTypeSharingLinkName" }, { "t": 3, "v": " zugreifen." }] } },
    "generateNewURL": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Neue URL generieren" } }
  },
  "shareViewEnablePasswordModal": {
    "newPasswordTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Geben Sie ein Passwort ein" } },
    "newPasswordDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Der \xF6ffentliche Link ist erst nach Eingabe des Passworts zug\xE4nglich. Dieses Passwort wird verschl\xFCsselt gespeichert." } },
    "newPasswordSave": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Passwort setzen" } },
    "changePasswordTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Passwort \xE4ndern" } },
    "changePasswordDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Durch das \xC4ndern des Passworts funktioniert das vorherige nicht mehr. Dieses Passwort wird verschl\xFCsselt gespeichert." } },
    "changePasswordSave": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Passwort \xE4ndern" } }
  },
  "shareViewDisablePasswordModal": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Passwortschutz deaktivieren" } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "M\xF6chten Sie den Passwortschutz f\xFCr diesen \xF6ffentlichen Link wirklich deaktivieren? Durch die Deaktivierung wird das Passwort gel\xF6scht und kann nicht wiederhergestellt werden" } },
    "disable": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Deaktivieren" } }
  },
  "publicViewAuthLogin": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Diese Seite ist passwortgesch\xFCtzt" } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Geben Sie das richtige Passwort ein, um auf die Seite zuzugreifen." } },
    "enter": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Eingeben" } },
    "error": {
      "incorrectPasswordTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Falsches Passwort" } },
      "incorrectPasswordText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Das angegebene Passwort ist falsch." } }
    }
  },
  "viewFieldsContext": {
    "coverField": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Coverfeld" } },
    "noCover": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kein Cover" } },
    "search": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Felder durchsuchen" } },
    "hideAll": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Alle ausblenden" } },
    "showAll": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Alle anzeigen" } }
  },
  "viewFilterTypeBoolean": {
    "selected": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ausgew\xE4hlt" } }
  },
  "viewFilter": {
    "filter": { "t": 0, "b": { "t": 1, "c": [{ "t": 2, "i": [{ "t": 3 }], "s": "Filter" }, { "t": 2, "i": [{ "t": 3 }], "s": "1 Filter" }, { "t": 2, "i": [{ "t": 4, "k": "count" }, { "t": 3, "v": " Filter" }] }] } },
    "hasAllValuesEqual": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "hat alle Werte gleich" } },
    "hasValueHigherThan": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "hat einen Wert gr\xF6\xDFer als" } },
    "hasValueHigherThanOrEqual": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "hat einen Wert gr\xF6\xDFer oder gleich" } },
    "hasValueLowerThan": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "hat einen Wert kleiner als" } },
    "hasValueLowerThanOrEqual": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "hat einen Wert kleiner oder gleich" } },
    "hasNotValueHigherThan": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "hat keinen Wert gr\xF6\xDFer als" } },
    "hasNotValueHigherThanOrEqual": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "hat keinen Wert gr\xF6\xDFer oder gleich" } },
    "hasNotValueLowerThan": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "hat keinen Wert kleiner als" } },
    "hasNotValueLowerThanOrEqual": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "hat keinen Wert kleiner oder gleich" } }
  },
  "viewContext": {
    "exportView": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ansicht exportieren" } },
    "duplicateView": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ansicht duplizieren" } },
    "defaultRowValues": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Standardwerte f\xFCr Zeilen" } },
    "renameView": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ansicht umbenennen" } },
    "toPersonal": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zu pers\xF6nlich" } },
    "toCollaborative": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zu kollaborativ" } },
    "webhooks": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Webhooks" } },
    "importFile": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Datei importieren" } },
    "deleteView": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ansicht l\xF6schen" } }
  },
  "defaultValuesModal": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Standardwerte f\xFCr " }, { "t": 4, "k": "name" }] } },
    "setDefaultValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Standardwert festlegen" } },
    "removeDefaultValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Standardwert entfernen" } },
    "staticValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Statischer Wert" } }
  },
  "deleteViewModal": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "L\xF6schen " }, { "t": 4, "k": "name" }] } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Sind Sie sicher, dass Sie die Ansicht " }, { "t": 4, "k": "name" }, { "t": 3, "v": " l\xF6schen m\xF6chten? Die Tabellendaten bleiben erhalten, aber die Filter, Sortierungen und Feldbreiten, die mit der Ansicht verbunden sind, werden gel\xF6scht." }] } },
    "delete": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ansicht l\xF6schen" } }
  },
  "viewForm": {
    "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Name" } },
    "whoCanEdit": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wer kann diese Ansicht bearbeiten?" } }
  },
  "viewOwnershipType": {
    "collaborative": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kollaborativ" } },
    "collaborativeDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Jeder kann alle Daten sehen und die Eigenschaften \xE4ndern, sofern er die entsprechenden Berechtigungen hat." } }
  },
  "galleryViewHeader": {
    "customizeCards": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Karten individuell gestalten" } }
  },
  "gridViewHide": {
    "hideField": { "t": 0, "b": { "t": 1, "c": [{ "t": 2, "i": [{ "t": 3 }], "s": "Felder ausblenden" }, { "t": 2, "i": [{ "t": 3 }], "s": "1 ausgeblendetes Feld" }, { "t": 2, "i": [{ "t": 4, "k": "count" }, { "t": 3, "v": " ausgeblendete Felder" }] }] } }
  },
  "gridViewFieldType": {
    "insertLeft": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Links einf\xFCgen" } },
    "insertRight": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Rechts einf\xFCgen" } },
    "createFilter": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Filter erstellen" } },
    "duplicate": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Feld duplizieren" } },
    "sortField": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sortieren" } },
    "hideField": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Feld ausblenden" } },
    "dataSyncField": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Das Feld ist schreibgesch\xFCtzt und Teil des Datenabgleichs der Tabelle." } },
    "dataSyncFieldTwoWaySync": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Das Feld wird mit dem Datenabgleich der Tabelle synchronisiert." } },
    "noWriteValues": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\xC4nderungen an diesem Feld sind eingeschr\xE4nkt." } }
  },
  "gridViewRow": {
    "rowNotMatchingFilters": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zeile entspricht nicht den Filtern" } },
    "rowNotMatchingSearch": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zeile stimmt nicht mit Suche \xFCberein" } },
    "rowHasMoved": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zeile hat sich verschoben" } }
  },
  "gridView": {
    "selectRow": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zeile ausw\xE4hlen" } },
    "insertRowAbove": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zeile oben einf\xFCgen" } },
    "insertRowBelow": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zeile unten einf\xFCgen" } },
    "duplicateRow": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zeile duplizieren" } },
    "copyRowURL": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zeilen-URL kopieren" } },
    "copiedRowURL": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zeilen-URL kopiert" } },
    "copiedRowURLMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Die URL aus Zeile " }, { "t": 4, "k": "id" }, { "t": 3, "v": " wurde in die Zwischenablage kopiert." }] } },
    "enlargeRow": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zeile vergr\xF6\xDFern" } },
    "deleteRow": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zeile l\xF6schen" } },
    "deleteRows": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zeilen l\xF6schen" } },
    "copyCells": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zellen kopieren" } },
    "copyCellsWithHeader": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zellen mit Kopfbereich kopieren" } },
    "generateCellsValues": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Werte mit KI generieren" } },
    "generateAllAiValues": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Alle KI-Werte generieren" } },
    "rowCount": { "t": 0, "b": { "t": 1, "c": [{ "t": 2, "i": [{ "t": 3 }], "s": "Keine Zeilen" }, { "t": 2, "i": [{ "t": 3 }], "s": "1 Zeile" }, { "t": 2, "i": [{ "t": 4, "k": "count" }, { "t": 3, "v": " Zeilen" }] }] } },
    "hiddenRowsInsertedTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zeilen hinzugef\xFCgt" } },
    "hiddenRowsInsertedMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "number" }, { "t": 3, "v": " neu hinzugef\xFCgte Zeilen wurden hinzugef\xFCgt, sind aber wegen der aktiven Filter nicht sichtbar." }] } },
    "tooManyItemsTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zu viele Elemente" } },
    "tooManyItemsDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Es ist nicht m\xF6glich, mehr als " }, { "t": 4, "k": "limit" }, { "t": 3, "v": " Zeilen auf einmal zu aktualisieren, also wurde nur die erste Zeile aktualisiert." }] } },
    "AIValuesGenerationErrorTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Werterstellung mittels KI fehlgeschlagen" } },
    "AIValuesGenerationErrorMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Bitte \xFCberpr\xFCfen Sie Ihren API_KEY und das ausgew\xE4hlte Modell." } }
  },
  "gridViewFieldFile": {
    "dropHere": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Hier ablegen" } },
    "dropFileHere": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dateien hier ablegen" } }
  },
  "gridViewFieldLinkRow": {
    "unnamed": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "unbenannte Zeile " }, { "t": 4, "k": "value" }] } },
    "keepOnlyOneValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nur einen Wert behalten" } }
  },
  "gridViewIdentifierOptions": {
    "id": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zeilenkennung" } },
    "count": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Anzahl" } }
  },
  "gridViewRowsAddContext": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mehrere Zeilen erstellen" } },
    "choice": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "rowAmountChoice" }, { "t": 3, "v": " Zeilen hinzuf\xFCgen" }] } }
  },
  "formViewMeta": {
    "includeRowId": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Verwenden Sie " }, { "t": 4, "k": "row_id" }, { "t": 3, "v": ", um die neu erstellte Zeilen-ID in die URL aufzunehmen." }] } }
  },
  "formViewMetaControls": {
    "whenSubmittedLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wenn das Formular abgeschickt wurde" } },
    "showMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Eine Nachricht anzeigen" } },
    "urlRedirect": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Weiterleiten zu einer URL" } },
    "theMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Die Nachricht" } },
    "theURL": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Die URL" } }
  },
  "previewAny": {
    "externalWarning": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wenn Sie Ihre Datei \xFCber einen externen Dienst \xF6ffnen, wird Ihre Datei auf dessen Servern ver\xF6ffentlicht." } }
  },
  "exportTableModal": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "name" }, { "t": 3, "v": " exportieren" }] } },
    "failedTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Export fehlgeschlagen" } },
    "failedDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Der Export ist aufgrund eines Serverfehlers fehlgeschlagen." } },
    "cancelledTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Export abgebrochen" } },
    "cancelledDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Die Exportaktion wurde abgebrochen." } }
  },
  "exporterTypeChoices": {
    "formatLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "In welches Format m\xF6chten Sie exportieren?" } }
  },
  "exportTableForm": {
    "viewLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "W\xE4hlen Sie die zu exportierende Ansicht aus:" } },
    "typeError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kein Exporttyp verf\xFCgbar, bitte w\xE4hlen Sie eine andere Ansicht oder eine ganze Tabelle." } },
    "includeRowId": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zeilen-ID einbeziehen" } },
    "includePrimaryField": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Prim\xE4rfeld einbeziehen" } }
  },
  "exportTableLoadingBar": {
    "export": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Exportieren" } },
    "download": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Herunterladen" } }
  },
  "exportTableDropdown": {
    "exportEntireTable": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Gesamte Tabelle exportieren" } }
  },
  "tableCSVExporter": {
    "columnSeparatorLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Spaltentrenner" } },
    "recordSeparator": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Datensatz-Trennzeichen" } },
    "unitSeparator": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Teilgruppentrennzeichen" } },
    "encodingLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kodierung" } },
    "includeHeader": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Feldnamen als \xDCberschrift einf\xFCgen" } }
  },
  "apiDocsDatabase": {
    "pageTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "name" }, { "t": 3, "v": " Datenbank-API-Dokumentation" }] } },
    "back": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zur\xFCck zum Dashboard" } },
    "openDatabase": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Datenbank \xF6ffnen" } }
  },
  "apiDocsComponent": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "REST API" } },
    "intro": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Nachdem Sie Ihr Datenbankschema und Ihren API-Schl\xFCssel im " }, { "t": 4, "k": "settingsLink" }, { "t": 3, "v": " erstellt haben, bietet Ihre Baserow-Datenbank eigene REST-API-Endpunkte zum Erstellen, Lesen, Aktualisieren und L\xF6schen von Zeilen." }] } },
    "settings": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Einstellungen" } },
    "selectApplicationTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "F\xFCr welche Datenbank m\xF6chten Sie die Dokumentation sehen?" } },
    "signIn": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Anmelden, um zu starten" } },
    "back": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zur\xFCck zum Dashboard" } }
  },
  "viewAggregationType": {
    "count": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Anzahl" } },
    "notEmptyCount": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Gef\xFCllt" } },
    "emptyPercentage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Prozent leer" } },
    "notEmptyPercentage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Prozent gef\xFCllt" } },
    "checkedCount": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Gepr\xFCft" } },
    "notCheckedCount": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ungepr\xFCft" } },
    "checkedPercentage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Prozent markiert" } },
    "notCheckedPercentage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Prozentsatz nicht gepr\xFCft" } },
    "min": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Min" } },
    "max": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Max" } },
    "earliestDate": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Fr\xFChestes Datum" } },
    "earliestDateShort": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Fr\xFCheste" } },
    "latestDate": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Letztes Datum" } },
    "latestDateShort": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Letztes" } },
    "uniqueCount": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Eindeutig" } },
    "sum": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Summe" } },
    "average": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Durchschnitt" } },
    "median": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Median" } },
    "stdDev": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Standardabweichung" } },
    "stdDevShort": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Std Abw" } },
    "variance": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Varianz" } },
    "distribution": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Verteilung" } },
    "othersCount": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Andere" } },
    "emptyCount": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "(Leer)" } }
  },
  "databaseForm": {
    "importLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "M\xF6chten Sie vorhandene Daten importieren?" } },
    "emptyLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Neu anfangen" } },
    "airtableLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Importieren von Airtable" } }
  },
  "importFromAirtable": {
    "airtableShareLinkTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Teilen Sie einen Link zu Ihrer Base" } },
    "airtableShareLinkDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Um Ihre Airtable-Base zu importieren, m\xFCssen Sie einen geteilten Link zu Ihrer gesamten Base haben. Klicken Sie in Airtable auf die Schaltfl\xE4che \u201EShare\u201C in der oberen rechten Ecke, nachdem Sie Ihre Base ge\xF6ffnet haben. Danach m\xFCssen Sie die Option \u201EShare via link\u201C w\xE4hlen. Im Share-Modal k\xF6nnen Sie auf den Tab \u201EShare publicly\u201C klicken und dann auf \u201EEnable shared base link\u201C. Kopieren Sie den \xF6ffentlichen Link und f\xFCgen Sie ihn unten in das Eingabefeld ein." } },
    "airtableShareLinkBeta": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Diese Funktion importiert die meisten Daten, es gibt jedoch Inkompatibilit\xE4ten. Daher wird eine Tabelle namens \u201EAirtable import report\u201C hinzugef\xFCgt, die eine Liste der Dinge enth\xE4lt, die nicht oder nur teilweise importiert wurden." } },
    "airtableShareLinkPaste": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Den Link hier einf\xFCgen" } },
    "importButtonLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Importieren von Airtable" } },
    "openButtonLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Importierte Datenbank \xF6ffnen" } },
    "importError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Etwas ist schief gelaufen" } },
    "statePending": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Warten auf Start" } },
    "stateFailed": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Fehlgeschlagen" } },
    "stateFinished": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Abgeschlossen" } },
    "stateDownloadingBase": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Herunterladen des Base-Schemas" } },
    "stateConverting": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Konvertierung zu Baserow" } },
    "stateDownloadingFiles": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Herunterladen von Dateien" } },
    "stateImporting": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Importieren" } },
    "stateImportingTable": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Tabelle " }, { "t": 4, "k": "table" }, { "t": 3, "v": " wird importiert" }] } },
    "errorJobAlreadyRunningTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Bereits in Arbeit" } },
    "errorJobAlreadyRunningDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ein weiterer Importauftrag ist bereits in Arbeit. Sie m\xFCssen abwarten, bis dieser Vorgang abgeschlossen ist, bevor Sie einen weiteren beginnen." } },
    "linkError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Der Link sollte wie folgt aussehen: https://airtable.com/shrxxxxxxxxxxxxxx" } },
    "skipFiles": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Import von Dateien \xFCberspringen" } },
    "skipFilesHelper": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Eine Airtable-Base mit vielen Dateien kann den Import verlangsamen. Wenn Sie dies aktivieren, wird der Import der Dateien \xFCbersprungen." } },
    "useSession": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sitzungs-Authentifizierung" } },
    "useSessionHelper": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Verwenden Sie dies, wenn die \xF6ffentlich geteilte Base eine Authentifizierung erfordert." } },
    "sessionDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wenn der Import mit \u201EThe Airtable base requires authentication.\u201C antwortet, dann verhindern m\xF6glicherweise die Organisationseinstellungen in Airtable den Zugriff auf die Airtable-Base ohne vorherige Authentifizierung. Dazu m\xFCssen Sitzung und Signatur manuell extrahiert werden. Rufen Sie die URL der \xF6ffentlich geteilten Base in Ihrem Browser auf und melden Sie sich gegebenenfalls an. Klicken Sie auf das Anwendungsmen\xFC, indem Sie in der oberen rechten Ecke klicken -> \u201EMore tools\u201C -> \u201EDeveloper tools\u201C. \xD6ffnen Sie den Tab \u201EApplication\u201C (in Firefox \u201EStorage\u201C) und klicken Sie auf \u201Ehttps://airtable.com\u201C. Suchen Sie nun die Cookie-Werte \u201E__Host-airtable-session\u201C und \u201E__Host-airtable-session.sig\u201C und f\xFCgen Sie diese in die unten stehenden Eingabefelder ein." } },
    "sessionLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sitzungs-Cookie (__Host-airtable-session)" } },
    "sessionSignatureLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sitzungs-Signatur-Cookie (__Host-airtable-session.sig)" } }
  },
  "chooseSingleSelectField": {
    "addSelectField": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Einzelnes Auswahlfeld hinzuf\xFCgen" } },
    "warningWhenNothingToChooseOrCreate": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Es gibt keine einzelnen Auswahlfelder, aus denen Sie ausw\xE4hlen k\xF6nnen, und Sie haben keine Berechtigung, eines zu erstellen." } }
  },
  "viewDecoratorContext": {
    "addDecorator": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Verzierung hinzuf\xFCgen" } }
  },
  "databaseDashboardResourceLinks": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "API-Dokumentation" } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Erfahren Sie mehr \xFCber unseren Code" } }
  },
  "formViewField": {
    "required": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "erforderlich" } },
    "descriptionPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Beschreibung" } },
    "includeAllSelectOptions": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "alle Auswahloptionen einschlie\xDFen" } },
    "includeAllSelectOptionsHelper": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "W\xE4hlen Sie \xFCber dieses Dropdown die Auswahloptionen, die im Formular enthalten sein sollen" } },
    "showWhenMatchingConditions": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "anzeigen, wenn die Bedingungen erf\xFCllt sind" } },
    "addCondition": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Bedingung hinzuf\xFCgen" } },
    "addConditionGroup": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Bedingungsgruppe hinzuf\xFCgen" } },
    "showFieldAs": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Feld anzeigen als" } },
    "noSelectOptions": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Es sind keine Auswahloptionen verf\xFCgbar." } },
    "noCollaboratorsAvailable": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Es sind keine Mitarbeiter verf\xFCgbar." } },
    "cannotSumitValues": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dieses Feld ist schreibgesch\xFCtzt und wird nicht im Formular angezeigt." } }
  },
  "duplicateFieldContext": {
    "duplicate": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Feld duplizieren" } },
    "cloneData": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Daten kopieren" } },
    "readOnlyField": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Die Zellenwerte werden automatisch ausgef\xFCllt." } }
  },
  "changePrimaryFieldModal": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Prim\xE4res Feld \xE4ndern" } },
    "change": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\xC4ndern" } },
    "primaryFieldLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Prim\xE4res Feld" } },
    "existingPrimary": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "\u201E" }, { "t": 4, "k": "name" }, { "t": 3, "v": "\u201C ist derzeit das prim\xE4re Feld." }] } }
  },
  "snapshotsModal": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Snapshots" } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Snapshots sind eine vollst\xE4ndige Kopie Ihres " }, { "t": 4, "k": "applicationTypeName" }, { "t": 3, "v": " zum Zeitpunkt der Erstellung. Bei der Wiederherstellung wird ein Duplikat dieser Daten erstellt. Snapshots werden nach einem Jahr automatisch gel\xF6scht." }] } },
    "descriptionLimits": { "t": 0, "b": { "t": 1, "c": [{ "t": 2, "i": [{ "t": 3, "v": "Sie k\xF6nnen maximal " }, { "t": 4, "k": "n" }, { "t": 3, "v": " Snapshots pro Arbeitsbereich haben." }] }, { "t": 2, "i": [{ "t": 3, "v": "Sie k\xF6nnen maximal " }, { "t": 4, "k": "n" }, { "t": 3, "v": " Snapshot pro Arbeitsbereich haben." }] }, { "t": 2, "i": [{ "t": 3, "v": "Sie k\xF6nnen maximal " }, { "t": 4, "k": "n" }, { "t": 3, "v": " Snapshots pro Arbeitsbereich haben." }] }] } },
    "createLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Einen neuen Snapshot erstellen" } },
    "create": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Snapshot erstellen" } },
    "cancel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Abbrechen" } },
    "snapshotRestoredErrorTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ein Fehler ist aufgetreten" } },
    "snapshotRestoredErrorMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Der Snapshot konnte nicht wiederhergestellt werden. Bitte versuchen Sie es sp\xE4ter noch einmal." } },
    "snapshotDeletedErrorTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Fehler aufgetreten" } },
    "snapshotDeletedErrorMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Der Snapshot konnte nicht gel\xF6scht werden. Bitte versuchen Sie es sp\xE4ter noch einmal." } },
    "limitReached": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Das Limit der maximalen Snapshots wurde erreicht." } },
    "snapshot": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Snapshot" } },
    "importingState": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Erstellen" } },
    "reset": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Einen weiteren erstellen" } },
    "noSnapshots": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Noch keine Snapshots f\xFCr diese Anwendung." } },
    "nameAlreadyExists": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ein Snapshot mit diesem Namen existiert bereits." } }
  },
  "deleteSnapshotModal": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Snapshot l\xF6schen" } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Sind Sie sicher, dass Sie den Snapshot " }, { "t": 4, "k": "name" }, { "t": 3, "v": " dauerhaft l\xF6schen m\xF6chten?" }] } },
    "confirm": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "L\xF6schen" } }
  },
  "snapshotListItem": {
    "restore": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "wiederherstellen" } },
    "delete": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "l\xF6schen" } },
    "created": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "erstellt" } }
  },
  "formViewModeType": {
    "form": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Formular" } },
    "formDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Alle Felder sind sichtbar und vertikal gestapelt." } }
  },
  "formViewHeader": {
    "mode": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Modus" } },
    "preview": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Vorschau" } },
    "fields": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Felder" } }
  },
  "formViewModePreviewForm": {
    "addCoverImage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ein Titelbild hinzuf\xFCgen" } },
    "addLogo": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ein Logo hinzuf\xFCgen" } },
    "titlePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Titel" } },
    "descriptionPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Beschreibung" } },
    "noFieldsTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dieses Formular hat noch keine Felder" } },
    "noFieldsContent": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Klicken Sie auf ein Feld in der linken Seitenleiste, um eines hinzuzuf\xFCgen." } }
  },
  "table": {
    "adjacentRow": {
      "toast": {
        "notFound": {
          "next": {
            "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Keine Zeilen mehr" } },
            "message": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Es gibt keine n\xE4chste Zeile" } }
          },
          "previous": {
            "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Keine Zeilen mehr" } },
            "message": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Es gibt keine vorherige Zeile" } }
          }
        },
        "error": {
          "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ein Fehler ist aufgetreten" } },
          "message": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Beim Abrufen der angrenzenden Zeile ist ein Fehler aufgetreten" } }
        }
      }
    },
    "chooseView": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ansicht w\xE4hlen" } }
  },
  "fileField": {
    "errorEmptyFileNameTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ung\xFCltiger Dateiname" } },
    "errorEmptyFileNameMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sie k\xF6nnen keinen leeren Namen f\xFCr eine Datei angeben." } }
  },
  "fieldCollaboratorSubForm": {
    "notifyUserWhenAdded": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Benutzer beim Hinzuf\xFCgen benachrichtigen" } }
  },
  "collaboratorAddedToRowNotification": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "sender" }, { "t": 3, "v": " hat Sie " }, { "t": 4, "k": "fieldName" }, { "t": 3, "v": " in Zeile " }, { "t": 4, "k": "rowId" }, { "t": 3, "v": " in " }, { "t": 4, "k": "tableName" }, { "t": 3, "v": " zugewiesen" }] } },
    "unknownUser": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ein unbekannter Benutzer" } }
  },
  "formSubmittedNotification": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "formName" }, { "t": 3, "v": " wurde in Tabelle " }, { "t": 4, "k": "tableName" }, { "t": 3, "v": " abgesendet:" }] } },
    "moreValues": { "t": 0, "b": { "t": 1, "c": [{ "t": 2, "i": [{ "t": 3 }], "s": "0" }, { "t": 2, "i": [{ "t": 3 }], "s": "und 1 weiteres Feld." }, { "t": 2, "i": [{ "t": 3, "v": "und " }, { "t": 4, "k": "count" }, { "t": 3, "v": " weitere Felder." }] }] } }
  },
  "rowHistorySidebar": {
    "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Historie" } },
    "empty": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Noch keine \xC4nderungen. Sie k\xF6nnen alle \xC4nderungen an dieser Zeile hier verfolgen." } },
    "you": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sie" } },
    "created": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "hat diese Zeile erstellt" } },
    "updated": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "hat diese Zeile aktualisiert" } },
    "submitted": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "hat diese Zeile abgesendet" } },
    "deleted": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "hat diese Zeile gel\xF6scht" } },
    "restored": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "hat diese Zeile wiederhergestellt" } },
    "createdUndo": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zeilenerstellung r\xFCckg\xE4ngig machen" } },
    "updatedUndo": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zeilenaktualisierung r\xFCckg\xE4ngig machen" } },
    "deletedUndo": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zeilenl\xF6schung r\xFCckg\xE4ngig machen" } }
  },
  "fieldPasswordSubForm": {
    "allowEndpointAuthentication": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "API-Endpunkt-Authentifizierung erlauben" } },
    "allowEndpointAuthenticationHelp": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dies stellt einen Endpunkt zur Verf\xFCgung, an dem gepr\xFCft werden kann, ob die Zeilen-ID und das Passwort korrekt sind. Damit kann Baserow als Authentifizierungs-Backend genutzt werden." } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Das Passwortfeld kann auch von der Benutzerauthentifizierung im Application Builder verwendet werden." } }
  },
  "rowEditFieldPassword": {
    "setPassword": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Passwort festlegen" } }
  },
  "rowHistoryFieldPassword": {
    "passwordSet": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Das Passwort wurde festgelegt" } },
    "passwordUpdated": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Das Passwort wurde aktualisiert" } },
    "passwordDeleted": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Das Passwort wurde entfernt" } }
  },
  "dataProviderTypes": {
    "fieldsName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Felder" } }
  },
  "userMentionInRichTextFieldNotification": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "sender" }, { "t": 3, "v": " hat Sie in Feld " }, { "t": 4, "k": "fieldName" }, { "t": 3, "v": " aus Zeile " }, { "t": 4, "k": "rowId" }, { "t": 3, "v": " in " }, { "t": 4, "k": "tableName" }, { "t": 3, "v": " erw\xE4hnt" }] } },
    "deletedUser": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ein gel\xF6schter Benutzer" } }
  },
  "databaseImportStep": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Importieren Sie Ihre Daten" } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Verschieben Sie Ihre Daten mit nur wenigen Klicks in Baserow." } },
    "tableNameLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tabellenname" } },
    "tableNamePrefill": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Tabelle von " }, { "t": 4, "k": "name" }] } }
  },
  "databaseScratchTrackFieldsStep": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Felder f\xFCr jede Zeile ausw\xE4hlen" } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "W\xE4hlen Sie bis zu " }, { "t": 4, "k": "selectedFieldsLimitCount" }, { "t": 3, "v": " Felder. Sie k\xF6nnen sp\xE4ter weitere hinzuf\xFCgen." }] } },
    "fieldName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Name" } },
    "fieldType": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Feldtyp" } },
    "fieldDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Beschreibung" } },
    "fieldDetails": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Details" } },
    "fieldNumber": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nummer" } },
    "fieldDate": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Datum" } },
    "fieldBoolean": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Abgeschlossen" } },
    "fieldDuration": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dauer" } },
    "fieldUrl": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "URL" } },
    "fieldEmail": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "E-Mail" } },
    "fieldRating": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Bewertung" } },
    "fieldCategory": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kategorie" } },
    "fieldKickoffDate": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Startdatum" } },
    "fieldDueDate": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "F\xE4lligkeitsdatum" } },
    "fieldBudget": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Budget" } },
    "fieldCompleted": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Abgeschlossen" } },
    "fieldNotes": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Notizen" } },
    "fieldRole": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Rolle" } },
    "fieldPhone": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Telefon" } },
    "fieldActive": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aktiv" } },
    "fieldEstimatedDays": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Gesch\xE4tzte Tage" } },
    "fieldStartDate": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Anfangsdatum" } },
    "fieldEndDate": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Enddatum" } },
    "projectsCategoryDesign": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Design" } },
    "projectsCategoryDevelopment": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Entwicklung" } },
    "projectsCategoryMarketing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Marketing" } },
    "projectsNotesRow1": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Acme sucht ein vollst\xE4ndiges Rebranding seiner Website mit den folgenden Vorgaben." } },
    "projectsNotesRow2": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Recherchieren, ob die aktuellen Nutzer von Soylent an einem neuen Benutzerportal interessiert sind." } },
    "projectsNotesRow3": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Es ist fraglich, ob sich dies nach dem Facebook-Werbeboykott noch lohnt. Studien zeigen, dass bezahlte Anzeigenkampagnen zunehmend weniger effektiv geworden sind." } },
    "teamsRoleDesigner": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Designer" } },
    "teamsRoleDeveloper": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Entwickler" } },
    "teamsRoleMarketer": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Marketer" } },
    "tasksDetailsRow1": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Das Logo muss verbessert werden, um den CTA klarer zu machen." } },
    "tasksDetailsRow2": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Die Struktur ist etwas durcheinander, daher m\xFCssen wir hier m\xF6glicherweise auch die Sitemap anpassen." } },
    "tasksDetailsRow3": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Die neue Fu\xDFzeile sollte unsere Kontaktinformationen sowie einen kleinen (aber klaren) CTA enthalten." } },
    "campaignsDetailsRow1": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Heizen Sie Ihre Ersparnisse mit unserem hei\xDFen Sommerschlussverkauf an, mit unschlagbaren Rabatten auf alle Ihre Lieblingsprodukte!" } },
    "campaignsDetailsRow2": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Steigern Sie die Kundenbindung und das Engagement mit unserem attraktiven Treueprogramm, das darauf ausgelegt ist, Ihre treuesten Kunden zu belohnen." } },
    "campaignsDetailsRow3": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Beleben Sie Ihr Unternehmen neu und begeistern Sie Ihr Publikum mit einem dynamischen Markenrelaunch, der perfekt zu den heutigen Markttrends und Kundenw\xFCnschen passt." } },
    "customFieldsDescriptionRow1": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Turpis massa tincidunt dui ut ornare lectus sit amet est." } },
    "customFieldsDescriptionRow2": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Vitae justo eget magna fermentum iaculis eu non diam." } },
    "customFieldsDescriptionRow3": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Convallis tellus id interdum velit laoreet id donec ultrices tincidunt." } }
  },
  "databaseScratchTrackStep": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Was m\xF6chten Sie verfolgen?" } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "W\xE4hlen Sie aus g\xE4ngigen Anwendungsf\xE4llen oder erstellen Sie Ihre eigenen." } },
    "addYourOwn": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Erstellen Sie Ihren eigenen" } },
    "tableName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tabellenname" } },
    "rowName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zeilenname" } },
    "thisIncludes": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Das beinhaltet:" } },
    "projects": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Projekte" } },
    "productsRow1": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Rebranding-Website" } },
    "productsRow2": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kundenbefragung" } },
    "productsRow3": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Bezahlte Anzeigenkampagne" } },
    "teams": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Teams" } },
    "teamsRow1": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Verkauf" } },
    "teamsRow2": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Personalwesen" } },
    "teamsRow3": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Marketing" } },
    "tasks": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aufgaben" } },
    "tasksRow1": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Logo-Redesign" } },
    "tasksRow2": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "E-Mail versenden" } },
    "tasksRow3": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Blogpost schreiben" } },
    "campaigns": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kampagnen" } },
    "campaignsRow1": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sommerschlussverkauf" } },
    "campaignsRow2": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Treuepr\xE4mien" } },
    "campaignsRow3": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Marken-Relaunch" } }
  },
  "databaseStep": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Erstellen Sie Ihre erste Datenbank" } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "W\xE4hlen Sie aus, womit Sie beginnen m\xF6chten:" } },
    "databaseNameLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Datenbankname" } },
    "databaseNamePrefill": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Datenbank von " }, { "t": 4, "k": "name" }] } },
    "scratch": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Von Grund auf" } },
    "import": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Datei" } },
    "airtable": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Airtable" } },
    "template": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Vorlage" } },
    "workspaceName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Arbeitsbereich von " }, { "t": 4, "k": "name" }] } }
  },
  "ViewFilterTypeDateUpgradeToMultiStep": {
    "migrateButtonText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Umstellung auf mehrstufigen Datumsfilter" } },
    "migrateButtonTooltip": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Neuer Filter verf\xFCgbar. Zum Aktualisieren anklicken. Er funktioniert genauso." } }
  },
  "dataSyncType": {
    "syncError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sync-Fehler" } },
    "icalCalendar": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "iCal-Feed synchronisieren" } },
    "postgresql": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "PostgreSQL-Tabelle synchronisieren" } }
  },
  "iCalCalendarDataSync": {
    "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "iCal-URL" } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Der iCal-Kalender-Sync synchronisiert sich automatisch mit den Eintr\xE4gen in der Kalenderdatei der URL. Es werden nur ICS-Dateien (Internet Calendar and Scheduling) unterst\xFCtzt." } }
  },
  "postgreSQLDataSync": {
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Synchronisiert eine PostgreSQL-Tabelle mit einer Baserow-Tabelle, die den unten angegebenen Details entspricht. Beachten Sie, dass beim Start der Synchronisation alle Zeilen in der angegebenen Tabelle ausgew\xE4hlt werden. Auch wenn Baserow nur Daten ausw\xE4hlt, empfehlen wir dringend, den Benutzer auf eine schreibgesch\xFCtzte Verbindung zu beschr\xE4nken." } },
    "host": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Host" } },
    "username": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Benutzername" } },
    "password": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Passwort" } },
    "database": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Datenbank" } },
    "schema": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Schema" } },
    "table": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tabelle" } },
    "port": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Port" } },
    "sslMode": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "SSL-Modus" } }
  },
  "createDataSync": {
    "next": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Weiter" } },
    "fields": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "W\xE4hlen Sie die Felder aus, die Sie synchronisieren m\xF6chten" } },
    "create": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tabelle erstellen und synchronisieren" } },
    "error": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Bei der Synchronisation ist etwas schiefgelaufen" } },
    "autoAddLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Neue Eigenschaften automatisch hinzuf\xFCgen" } },
    "autoAddHelper": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "F\xFCgt automatisch neu verf\xFCgbare Eigenschaften aus der Datenquelle in die Baserow-Tabelle ein und synchronisiert sie. Damit dies funktioniert, m\xFCssen alle Eigenschaften synchronisiert werden." } },
    "twoWaySyncLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Bidirektionale Synchronisation" } },
    "deleteUnmatchedRowsLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zeilen l\xF6schen, wenn sie in der Quelle gel\xF6scht oder ausgeblendet werden" } },
    "deleteUnmatchedRowsHelper": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wenn aktiviert, werden Zeilen, die in der Quelle gel\xF6scht oder nicht mehr sichtbar sind, bei jeder Synchronisierung auch aus dieser Tabelle gel\xF6scht. Wenn deaktiviert, bleiben diese Zeilen erhalten und werden wiederverwendet, wenn die Quellzeile wieder erscheint." } },
    "syncing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Daten werden synchronisiert..." } }
  },
  "syncTableModal": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "name" }, { "t": 3, "v": " synchronisieren" }] } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Diese Tabelle ist mit einem Datenabgleich verkn\xFCpft. Wenn Sie auf die Schaltfl\xE4che \u201ESynchronisieren\u201C klicken, werden die Daten mit der Quelle synchronisiert. W\xE4hrend dieses Vorgangs wird eine Sperre auf die aktualisierten Zeilen gelegt, was API-Anfragen oder Tabellen\xE4nderungen vor\xFCbergehend verlangsamen kann." } },
    "sync": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tabelle synchronisieren" } },
    "hide": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ausblenden" } }
  },
  "gridViewRowHeight": {
    "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "H\xF6he" } },
    "small": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Klein" } },
    "medium": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mittel" } },
    "large": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Gro\xDF" } }
  },
  "gridViewFreezeHandle": {
    "freeze": { "t": 0, "b": { "t": 1, "c": [{ "t": 2, "i": [{ "t": 3 }], "s": "0 Spalten fixieren" }, { "t": 2, "i": [{ "t": 3 }], "s": "1 Spalte fixieren" }, { "t": 2, "i": [{ "t": 4, "k": "count" }, { "t": 3, "v": " Spalten fixieren" }] }] } },
    "hoverHint": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ziehen, um Spalten zu fixieren" } }
  },
  "configureDataSyncModal": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Datenabgleich" } },
    "syncedFields": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Synchronisierte Felder" } },
    "syncSettings": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sync-Einstellungen" } }
  },
  "configureDataSyncVisibleFields": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Synchronisierte Felder \xE4ndern" } },
    "fields": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Synchronisierte Felder" } },
    "syncTable": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Beim Speichern synchronisieren" } }
  },
  "configureDataSyncSettings": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Datenabgleich \xE4ndern" } },
    "syncTable": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Beim Speichern synchronisieren" } }
  },
  "webhookDeactivatedNotification": {
    "body": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Der Webhook " }, { "t": 4, "k": "name" }, { "t": 3, "v": " wurde deaktiviert, weil er zu oft hintereinander fehlgeschlagen ist." }] } }
  },
  "webhookPayloadTooLargeNotification": {
    "body": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Die Nutzlast f\xFCr den Webhook " }, { "t": 4, "k": "name" }, { "t": 3, "v": " mit der Ereignis-ID " }, { "t": 4, "k": "event_id" }, { "t": 3, "v": " war zu gro\xDF. Der Inhalt wurde in mehrere Batches aufgeteilt, aber Daten oberhalb des Batch-Limits von " }, { "t": 4, "k": "batch_limit" }, { "t": 3, "v": " wurden verworfen." }] } }
  },
  "tablesGuidedTourStep": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tabellen einrichten" } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tabellen speichern Ihre Informationen \xFCbersichtlich. Erstellen Sie eine neue Tabelle in Ihrer Datenbank, um mit der Strukturierung Ihrer Daten zu beginnen." } }
  },
  "filterSortGroupGuidedTourStep": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Daten finden und organisieren" } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Finden Sie Informationen schnell, indem Sie Ihre Zeilen filtern und sortieren. Gruppieren Sie sofort nach beliebigen Feldern, um Muster klar zu visualisieren und Ihre Arbeitsabl\xE4ufe zu vereinfachen." } }
  },
  "addFieldGuidedTourStep": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Daten anpassen" } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Klicken Sie auf \u201E+\u201C, um neue Felder (Spalten) hinzuzuf\xFCgen. W\xE4hlen Sie aus verschiedenen Feldtypen, um genau das zu erfassen, was f\xFCr Ihr Projekt am wichtigsten ist." } }
  },
  "createViewGuidedTourStep": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ansichten personalisieren" } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Erstellen Sie benutzerdefinierte Ansichten wie Raster, Kalender, Kanban oder Galerie, um Ihre Daten genau so zu visualisieren, wie Sie es m\xF6chten." } }
  },
  "createFormViewGuidedTourStep": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ein Formular erstellen" } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Erstellen Sie schnell Formulare aus Ihren Tabellen, um Antworten direkt in Ihrer Tabelle zu sammeln und die Datenerfassung zu optimieren." } }
  },
  "viewOptionsGuidedTourStep": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ansichts-Optionen" } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Klicken Sie auf die drei Punkte neben der Ansicht, um zu exportieren, zu importieren, zu duplizieren und einen Webhook zu konfigurieren." } }
  },
  "fieldRules": {
    "errorTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Fehler bei der Verarbeitung der Feldregel" } },
    "ruleDoesNotExist": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Regel existiert nicht" } },
    "ruleTypeDoesNotExist": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Regeltyp existiert nicht" } },
    "ruleAlreadyExists": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Regel existiert bereits" } }
  },
  "fieldFormViewEditRowSubForm": {
    "selectFormViewLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Formularansicht" } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Jede Zeile erh\xE4lt einen eindeutigen Link, der dieses Formular mit den Daten dieser Zeile vorausgef\xFCllt \xF6ffnet. Beachten Sie, dass jeder mit Lesezugriff auf die Tabelle und das Feld die Zeile \xFCber die Formularansicht bearbeiten kann, einschlie\xDFlich Betrachtern und Besuchern einer \xF6ffentlich geteilten Ansicht." } },
    "notPublicWarning": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Diese Formularansicht ist nicht \xF6ffentlich geteilt. Der Bearbeitungslink funktioniert erst, wenn das Formular \xF6ffentlich gemacht wird." } },
    "notPublic": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "(nicht \xF6ffentlich)" } },
    "formDoesNotExist": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Das ausgew\xE4hlte Formular existiert nicht mehr." } }
  },
  "editRowLink": {
    "editRow": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zeile bearbeiten" } }
  },
  "rowEditFieldFormViewEditRow": {
    "copyLink": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Link kopieren" } },
    "noFormView": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Keine Formularansicht konfiguriert" } }
  },
  "tableExcelImporter": {
    "chooseFileLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Excel-Datei ausw\xE4hlen" } },
    "chooseFileDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sie k\xF6nnen eine vorhandene Kalkulationstabelle importieren, indem Sie eine .xlsx-, .xls- oder .ods-Datei hochladen. Wenn die Datei mehrere Bl\xE4tter enth\xE4lt, k\xF6nnen Sie ausw\xE4hlen, welches importiert werden soll." } },
    "chooseFile": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Excel-Datei ausw\xE4hlen" } },
    "sheet": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Blatt" } },
    "firstRowHeader": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Erste Zeile ist Kopfzeile" } },
    "limitFileSize": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Die maximale Dateigr\xF6\xDFe betr\xE4gt " }, { "t": 4, "k": "limit" }, { "t": 3, "v": "MB." }] } },
    "limitError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Es ist nicht m\xF6glich, mehr als " }, { "t": 4, "k": "limit" }, { "t": 3, "v": " Zeilen zu importieren." }] } },
    "processingError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Beim Verarbeiten der Excel-Datei ist ein Fehler aufgetreten: " }, { "t": 4, "k": "error" }] } },
    "emptyError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Diese Excel-Datei enth\xE4lt keine Bl\xE4tter." } },
    "emptySheetError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Das ausgew\xE4hlte Blatt ist leer." } }
  },
  "viewSearch": {
    "clearSearch": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Suche l\xF6schen" } }
  },
  "gridViewGroupByBanner": {
    "emptyValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "(Leer)" } },
    "expandGroup": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Gruppe ausklappen" } },
    "collapseGroup": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Gruppe einklappen" } }
  }
};

export { resource as default };
//# sourceMappingURL=de-J8TG87FN.mjs.map
