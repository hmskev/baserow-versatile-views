!(function() {
  try {
    var e = false ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
    var n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "ccc5d2c3-53cf-4f31-8ffa-49821bc9a2dd", e._sentryDebugIdIdentifier = "sentry-dbid-ccc5d2c3-53cf-4f31-8ffa-49821bc9a2dd");
  } catch (e2) {
  }
})();
const resource = {
  "common": {
    "dateFormatTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Datumsformat" } },
    "dateFormatEU": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Europ\xE4isch" } },
    "dateFormatUS": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "US-amerikanisch" } },
    "dateFormatISO": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "ISO-Format" } },
    "timeFormatTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zeitformat" } },
    "timeFormat24Hour": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "24-Stunden" } },
    "timeFormat12Hour": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "12 Stunden" } }
  },
  "builderToast": {
    "details": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Details" } },
    "defaultTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Unerwarteter Fehler" } },
    "defaultMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ein unerwarteter Fehler ist aufgetreten. Bitte versuchen Sie es sp\xE4ter erneut." } },
    "invalidContextTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ung\xFCltige Anfrage" } },
    "invalidContextMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Die Anfrage ist ung\xFCltig." } },
    "InvalidContentTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ung\xFCltiges Formular" } },
    "invalidContentMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ein oder mehrere Felder enthalten ung\xFCltige Werte." } },
    "serviceMisconfiguredTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Unvollst\xE4ndige Konfiguration" } },
    "serviceMisconfiguredMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Bitte pr\xFCfen Sie die Konfiguration." } },
    "errorWorkflowActionDispatch": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": 'Die Aktion "' }, { "t": 4, "k": "name" }, { "t": 3, "v": '" ist fehlgeschlagen: ' }] } },
    "errorDataSourceDispatch": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": 'Fehler beim Laden der Daten von "' }, { "t": 4, "k": "name" }, { "t": 3, "v": '": ' }] } }
  },
  "dataProviderType": {
    "dataSource": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Datens\xE4tze" } },
    "dataSourceContext": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Verf\xFCgbare Optionen" } },
    "pageParameter": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Parameter" } },
    "currentRecord": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Datenquelle" } },
    "formData": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Formulardaten" } },
    "previousAction": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Vorherige Aktion" } },
    "user": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Benutzer" } }
  },
  "formDataProviderType": {
    "nodeMissing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Fehlt" } }
  },
  "builderForm": {
    "submit": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Anwendung hinzuf\xFCgen" } }
  },
  "sidebarComponentBuilder": {
    "settings": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Einstellungen" } },
    "createPage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Neue Seite" } }
  },
  "builderSettingsModal": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Anwendung" } }
  },
  "builderSettingTypes": {
    "generalName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Allgemein" } },
    "integrationsName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Integrationen" } },
    "themeName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Theme" } },
    "domainsName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dom\xE4nen" } },
    "userSourcesName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Benutzer" } }
  },
  "createPageModal": {
    "header": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Seite erstellen" } },
    "submit": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Seite hinzuf\xFCgen" } }
  },
  "pageErrors": {
    "errorNameNotUnique": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Es existiert bereits eine Seite mit diesem Namen" } },
    "errorNameNotUniqueDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Bitte geben Sie einen eindeutigen Namen f\xFCr die Seite ein" } },
    "errorPathNotUnique": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Es existiert bereits ein Pfad mit diesem Namen" } },
    "errorStartingSlash": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ein Pfad muss mit '/' beginnen" } },
    "errorValidPathCharacters": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Der Pfad enth\xE4lt ung\xFCltige Zeichen" } },
    "errorUniquePathParams": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pfad-Parameter m\xFCssen eindeutig sein." } },
    "errorUniqueValidQueryParams": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Die Namen der Abfrageparameter m\xFCssen eindeutig und g\xFCltig sein." } }
  },
  "pageHeaderItemTypes": {
    "labelElements": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Elemente" } },
    "labelDataSource": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Daten" } },
    "labelVariables": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Variablen" } },
    "labelSettings": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Seiteneinstellungen" } }
  },
  "pageActionTypes": {
    "preview": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Vorschau" } },
    "publish": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ver\xF6ffentlichen" } }
  },
  "publishActionModal": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ver\xF6ffentlichen" } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Schalten Sie Ihre Anwendung live, indem Sie sie in einer der Dom\xE4nen ver\xF6ffentlichen. Beachten Sie, dass Ihre Anwendung mehrere Dom\xE4nen haben kann, auf welchen jeweils eine andere Version der Anwendung l\xE4uft." } },
    "publish": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ver\xF6ffentlichen" } },
    "publishSucceedTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Seite ver\xF6ffentlicht" } },
    "publishSucceedDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Die Seite wurde erfolgreich ver\xF6ffentlicht." } },
    "publishSucceedLink": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Seite anzeigen" } },
    "publishFailedTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ver\xF6ffentlichung der Seite fehlgeschlagen" } },
    "publishFailedDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Die Ver\xF6ffentlichung der Seite ist fehlgeschlagen. Bitte versuchen Sie es sp\xE4ter erneut." } },
    "openInNewTab": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "In neuem Tab \xF6ffnen" } },
    "importingState": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Importiere" } },
    "noDomain": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sie ben\xF6tigen mindestens eine Dom\xE4ne, um Ihre Anwendung zu ver\xF6ffentlichen." } },
    "addDomain": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Domain hinzuf\xFCgen" } }
  },
  "lastPublishedDomainDate": {
    "neverPublished": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "nie" } },
    "lastPublished": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zuletzt ver\xF6ffentlicht:" } }
  },
  "elementsContext": {
    "searchPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Elemente suchen" } },
    "noPageElements": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "F\xFCr diese Seite wurden keine Elemente gefunden" } },
    "noElements": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Keine Elemente gefunden" } }
  },
  "elementType": {
    "heading": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\xDCberschrift" } },
    "headingDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Titel der Seiten\xFCberschrift" } },
    "text": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Paragraph" } },
    "textDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mehrzeiliger Text" } },
    "link": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Verkn\xFCpfung" } },
    "linkDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ein Link zu einer Seite/URL" } },
    "image": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Bild" } },
    "imageDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Bild anzeigen" } },
    "inputText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dateneingabe" } },
    "inputTextDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ein Dateneingabe-Feld" } },
    "column": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Spalten" } },
    "columnDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Spalten-Container" } },
    "button": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Button" } },
    "buttonDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ein Button-Element" } },
    "table": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tabelle" } },
    "tableDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ein Tabellen-Element" } },
    "formContainer": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Formular" } },
    "formContainerDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ein Formular-Element" } },
    "choice": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Auswahl" } },
    "choiceDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "F\xFCr die Auswahl einzelner/mehrerer Werte" } },
    "checkbox": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kontrollk\xE4stchen" } },
    "checkboxDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kontrollk\xE4stchen-Element" } },
    "iframe": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "iFrame" } },
    "iframeDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Inline-Frame" } },
    "authForm": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Anmeldeformular" } },
    "authFormDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ein Benutzer-Anmeldeformular" } },
    "repeat": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wiederholen" } },
    "repeatDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Eine wiederholbare Menge an Elementen" } },
    "recordSelector": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Datensatz-Auswahl" } },
    "recordSelectorDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Eine Bezugs-Datensatz-Auswahl" } },
    "dateTimePicker": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Datums- und Zeitauswahl" } },
    "dateTimePickerDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ein Eingabefeld f\xFCr Datum und Zeit" } },
    "header": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mehrseitiger Kopfbereich" } },
    "headerDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ein seiten\xFCbergreifend geteilter Container" } },
    "footer": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mehrseitiger Fussbereich" } },
    "footerDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ein seiten\xFCbergreifend geteilter Container" } },
    "notAllowedUnlessTop": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dieses Element ist nur im oberen Bereich der Seite erlaubt" } },
    "notAllowedUnlessBottom": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dieses Element ist nur im unteren Bereich der Seite erlaubt" } },
    "notAllowedUnlessHeader": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dieses Element ist nur im Kopfbereich der Seite erlaubt" } },
    "notAllowedUnlessFooter": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dieses Element ist nur im Fussbereich der Seite erlaubt" } },
    "notAllowedInsideContainer": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dieses Element ist nur au\xDFerhalb eines Containers erlaubt" } },
    "notAllowedInsideSameType": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dieses Element ist nicht in einem Container der gleichen Art erlaubt" } },
    "ratingInput": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Bewertungseingabefeld" } },
    "ratingInputDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ein Bewertungs-Eingabeelement" } },
    "rating": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Bewertung" } },
    "ratingDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ein Bewertungs-Element" } },
    "invalidElementValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Ung\xFCltiger Elementwert: " }, { "t": 4, "k": "value" }] } },
    "notAllowedLocation": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dieses Element ist an dieser Stelle nicht erlaubt" } },
    "menu": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Men\xFC" } },
    "menuDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Men\xFC-Element" } },
    "simpleContainer": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Container" } },
    "simpleContainerDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ein Container f\xFCr andere Elemente" } },
    "fileInput": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dateieingabe" } },
    "fileInputDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ein Eingabefeld zum Hochladen von Dateien" } },
    "errorValueMissing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": 'Fehlende Eigenschaft "Wert"' } },
    "errorEmptyContainer": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dieser Container ist leer" } },
    "errorParentWithDataSourceMissing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Keine Datenquelle f\xFCr das Element oder einen \xFCbergeordneten Container ausgew\xE4hlt" } },
    "errorDataSourceMissing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Keine Datenquelle ausgew\xE4hlt" } },
    "errorSchemaPropertyMissing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Keine Schema-Eigenschaft ausgew\xE4hlt" } },
    "errorWorkflowActionInError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mindestens eine Aktion ist falsch konfiguriert" } },
    "errorCollectionFieldInError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mindestens ein Feld ist falsch konfiguriert" } },
    "errorNavigateToPageMissing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": 'Fehlende Eigenschaft "Navigieren zu"' } },
    "errorPageParameterInError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mindestens ein Seitenparameter ist falsch konfiguriert" } },
    "errorNavigationUrlMissing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": 'Fehlende Eigenschaft "Navigations-URL"' } },
    "errorImageFileMissing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Fehlende Bild-Datei" } },
    "errorImageUrlMissing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": 'Fehlende Eigenschaft "Bild-URL"' } },
    "errorNoWorkflowAction": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Keine Workflow-Aktion konfiguriert" } },
    "errorOptionsMissing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Keine Option konfiguriert" } },
    "errorIframeUrlMissing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": 'Fehlende Eigenschaft "IFrame-URL"' } },
    "errorIframeContentMissing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Fehlender IFrame-Inhalt" } },
    "errorNoMenuItem": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kein Men\xFCpunkt konfiguriert" } },
    "errorMenuItemInError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mindestens ein Men\xFC ist falsch konfiguriert" } },
    "errorSubMenuItemInError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mindestens ein Untermen\xFC ist falsch konfiguriert" } }
  },
  "addElementButton": {
    "label": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Element" } }
  },
  "addElementModal": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Neues Element hinzuf\xFCgen" } },
    "searchPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Elemente suchen" } },
    "elementInProgress": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Element wird hinzugef\xFCgt..." } }
  },
  "addElementCategory": {
    "suggestedElement": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Vorgeschlagene Elemente" } },
    "baseElement": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Grundelemente" } },
    "layoutElement": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Layout-Elemente" } },
    "formElement": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Formularelemente" } }
  },
  "elementMenu": {
    "drag": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zum Neuanordnen ziehen" } },
    "moveUp": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nach oben verschieben" } },
    "moveDown": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nach unten verschieben" } },
    "moveLeft": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nach links verschieben" } },
    "moveRight": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nach rechts verschieben" } },
    "selectParent": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\xDCbergeordnetes Element ausw\xE4hlen" } }
  },
  "duplicatePageJobType": {
    "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Seite duplizieren" } },
    "duplicating": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Duplizieren" } },
    "duplicatedTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Seite dupliziert" } }
  },
  "pageSidePanelType": {
    "general": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Allgemein" } },
    "style": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Style" } },
    "visibility": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sichtbarkeit" } },
    "events": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ereignisse" } },
    "eventsTabDeactivatedNoEvents": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dieses Element unterst\xFCtzt keinerlei Ereignisse" } },
    "eventsTabInError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Eine oder mehrere Aktionen sind falsch konfiguriert." } }
  },
  "emptySidePanelState": {
    "message": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Klicken Sie auf eines der Elemente, um weitere Details zu sehen" } }
  },
  "pagePreview": {
    "emptyMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Anklicken, um ein Element zu erstellen" } },
    "header": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "KOPFBEREICH" } },
    "footer": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "FUSSBEREICH" } }
  },
  "elementForms": {
    "textInputPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Text eingeben..." } },
    "urlInputPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "URL eingeben..." } },
    "invalidFormula": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Die Formel ist ung\xFCltig" } }
  },
  "headingElement": {
    "missingValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Titel fehlt..." } },
    "emptyValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Leerer Titel..." } }
  },
  "headingElementForm": {
    "levelTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ebene" } },
    "textTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Text" } },
    "textPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Text eingeben..." } },
    "headingName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "\xDCberschrift " }, { "t": 4, "k": "level" }, { "t": 3, "v": " <h" }, { "t": 4, "k": "level" }, { "t": 3, "v": ">" }] } },
    "textError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Der Wert ist ung\xFCltig." } }
  },
  "textElement": {
    "missingValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Fehlender Text..." } },
    "emptyValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Leerer Text..." } }
  },
  "textElementForm": {
    "textTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Text" } },
    "textPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Text eingeben..." } },
    "textError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Der Wert ist ung\xFCltig." } },
    "textFormatTypeLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Format" } },
    "textFormatTypePlain": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Klartext" } },
    "textFormatTypeMarkdown": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Markdown" } }
  },
  "orientations": {
    "label": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ausrichtung" } },
    "horizontal": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Horizontal" } },
    "vertical": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Vertikal" } }
  },
  "menuElement": {
    "missingValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Fehlender Men\xFCpunkt" } },
    "separator": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Trenner" } },
    "spacer": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Abstandshalter" } },
    "missingLinkValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Fehlender Link-Name..." } },
    "emptyLinkValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Leerer Link-Name..." } },
    "missingButtonValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Fehlender Button-Name..." } },
    "emptyButtonValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Leerer Button-Name..." } }
  },
  "menuElementForm": {
    "menuItemsLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Men\xFCpunkte" } },
    "addMenuItemLink": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Hinzuf\xFCgen..." } },
    "alignment": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ausrichtung" } },
    "menuItemDefaultName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Seite" } },
    "menuItemLabelLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Bezeichnung" } },
    "menuItemTypeLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Typ" } },
    "menuItemTypeSeparator": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Trenner" } },
    "menuItemVariantLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Variante" } },
    "menuItemVariantLink": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Verkn\xFCpfung" } },
    "menuItemVariantButton": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Button" } },
    "namePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Seite" } },
    "addSubLink": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Unterlink hinzuf\xFCgen" } },
    "menuItemSubLinkDefaultName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Unterlink" } },
    "menuItemAddLink": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Verkn\xFCpfung" } },
    "menuItemAddButton": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Button" } },
    "menuItemAddSeparator": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Trenner" } },
    "menuItemAddSpacer": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Abstandshalter" } },
    "eventDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Um Aktionen f\xFCr diesen Button zu konfigurieren, \xF6ffnen Sie die Registerkarte \u201EEreignisse\u201C dieses Elements." } },
    "noMenuItemsMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Klicken Sie auf 'Hinzuf\xFCgen', um Ihren ersten Men\xFCpunkt hinzuzuf\xFCgen." } },
    "variant": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Variante pro Ger\xE4tetyp" } },
    "expanded": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ausgeklappt" } },
    "compact": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kompakt" } },
    "previewCompactMenuLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Vorschau des kompakten Men\xFCs" } },
    "previewCompactMenuHelper": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Vorschau des kompakten Men\xFCs ein-/ausblenden." } },
    "openEditorCompactMenu": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Men\xFC \xF6ffnen" } },
    "closeEditorCompactMenu": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Men\xFC schlie\xDFen" } }
  },
  "simpleContainerElementForm": {
    "noConfigurationOptions": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Das Container-Element verf\xFCgt \xFCber keine Konfigurationsoptionen." } }
  },
  "imageElement": {
    "missingValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Fehlender Alternativ-Text..." } },
    "emptyValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Leerer Alternativ-Text..." } }
  },
  "generalForm": {
    "labelTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Bezeichnung" } },
    "labelPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Bezeichnung eingeben" } },
    "valueTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wert" } },
    "defaultValueTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Standardwert" } },
    "defaultValuePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Standardwert eingeben" } },
    "valuePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wert eingeben" } },
    "placeholderTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Platzhalter" } },
    "placeholderPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Geben Sie einen Platzhalter ein" } },
    "requiredTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Erforderlich" } },
    "validationTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\xDCberpr\xFCfung" } }
  },
  "inputTextElementForm": {
    "multilineTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mehrzeilig" } },
    "rowsTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zeilenanzahl" } },
    "rowsPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Geben Sie die Anzahl der Zeilen f\xFCr diese Eingabe ein" } },
    "validationTypeAnyLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Jeglich(e)" } },
    "validationTypeAnyDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Erlaubt die Eingabe eines beliebigen Wertes." } },
    "validationTypeIntegerLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zahl" } },
    "validationTypeIntegerDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Erzwinge einen Zahlenwert in diesem Eingabefeld (akzeptiert Ganzzahlen und Dezimalzahlen)." } },
    "validationTypeEmailLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "E-Mailadresse" } },
    "validationTypeEmailDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Erzwinge eine E-Mailadresse in diesem Eingabefeld." } },
    "inputType": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Eingabetyp" } },
    "inputTypeTextLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Text" } },
    "inputTypePasswordLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Passwort" } },
    "passwordTypeWarning": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Passw\xF6rter sind sensible Daten. Bitte geben Sie acht, wie Sie Passw\xF6rter in Ihrer Anwendung behandeln und speichern." } }
  },
  "dateTimePickerElementForm": {
    "includeTime": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zeit einbeziehen" } },
    "invalidDateError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ung\xFCltiges Datum. Bitte stellen Sie sicher, dass das eingegebene Datum dem angegebenen Format entspricht." } }
  },
  "imageElementForm": {
    "fileLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Bild" } },
    "invalidUrlError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "URL ist ung\xFCltig" } },
    "altTextTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Alternativer Text" } },
    "altTextDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wird von Screen-Readern verwendet und angezeigt, wenn das Bild nicht geladen werden kann" } },
    "fileSourceTypeUpload": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Hochladen" } },
    "fileSourceTypeURL": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "URL" } },
    "urlWarning": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Hinweis: Bitte vergewissern Sie sich, dass Sie die Kontrolle \xFCber die eingegebene URL haben oder dieser vertrauen." } },
    "uploadFileButton": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Datei hochladen" } }
  },
  "iframeElementForm": {
    "missingValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Fehlende IFrame-Quelle..." } },
    "emptyValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Leere IFrame-Quelle..." } },
    "sourceTypeLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Quellen-Typ" } },
    "urlLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "URL" } },
    "urlPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Link zur externen Ressource, welche eingebettet werden soll" } },
    "urlHelp": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Hinweis: Bitte vergewissern Sie sich, dass Sie die Kontrolle \xFCber die eingegebene URL haben oder dieser vertrauen." } },
    "embedLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Einbetten" } },
    "embedPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Reiner HTML-Inhalt, der eingebettet werden soll" } },
    "heightLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "H\xF6he (px)" } },
    "heightPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "H\xF6he in Pixeln" } }
  },
  "columnElementForm": {
    "columnAmountTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Layout" } },
    "verticalAlignment": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Vertikale Ausrichtung" } },
    "columnAmountName": { "t": 0, "b": { "t": 1, "c": [{ "t": 2, "i": [{ "t": 3 }], "s": "keine Spalten" }, { "t": 2, "i": [{ "t": 3 }], "s": "1 Spalte" }, { "t": 2, "i": [{ "t": 4, "k": "columnAmount" }, { "t": 3, "v": " Spalten" }] }] } },
    "columnGapTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Abstand zwischen den Spalten" } },
    "columnGapPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Geben Sie den Abstand zwischen den Spalten ein..." } },
    "customLayout": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Benutzerdefiniert" } },
    "customWeightsTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Benutzerdefinierte Spaltengewichte" } },
    "customWeightsHelper": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Verwenden Sie 0, wenn eine Spalte nur so breit wie ihr Inhalt sein soll. Die anderen Spalten teilen sich den verbleibenden Platz." } },
    "errorCustomWeightsMinimum": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Spaltengewichte m\xFCssen 0 oder gr\xF6\xDFer sein" } },
    "columnStackingTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Spalten pro Ger\xE4tetyp stapeln" } },
    "columnStackingHorizontal": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nebeneinander" } },
    "columnStackingStacked": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Gestapelt" } }
  },
  "domainSettings": {
    "titleOverview": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dom\xE4nen" } },
    "titleAddDomain": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dom\xE4ne hinzuf\xFCgen" } },
    "addDomain": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dom\xE4ne hinzuf\xFCgen" } },
    "noDomainMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sie haben noch keine Dom\xE4ne mit dieser Anwendung verkn\xFCpft. Sie m\xFCssen eine Dom\xE4ne hinzuf\xFCgen, um Ihre Anwendung ver\xF6ffentlichen zu k\xF6nnen. Sie k\xF6nnen verschiedene Versionen Ihrer Anwendung f\xFCr jede hier aufgef\xFChrte Dom\xE4ne ver\xF6ffentlichen." } }
  },
  "userSourceSettings": {
    "titleAddUserSource": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Neue Benutzerquelle" } },
    "titleUpdateUserSource": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Benutzerquelle bearbeiten" } },
    "noUserSourceMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sie haben noch keine Benutzerquelle zu dieser Anwendung hinzugef\xFCgt. Sie m\xFCssen eine Benutzerquelle hinzuf\xFCgen, wenn Sie m\xF6chten, dass die Benutzer Ihre Anwendung authentifizieren k\xF6nnen." } },
    "titleOverview": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Benutzerquellen" } },
    "addUserSource": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Benutzerquelle hinzuf\xFCgen" } }
  },
  "themeSettings": {
    "titleOverview": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Theme" } }
  },
  "generalSettings": {
    "titleOverview": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Allgemein" } },
    "labelForm": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Favicon" } },
    "labelDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "W\xE4hlen Sie eine 128x128 Pixel gro\xDFe ICO-, PNG-, GIF- oder JPEG-Datei." } },
    "labelButton": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Favicon hochladen" } },
    "cantUploadFaviconTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Konnte die Favicon-Datei nicht hochladen" } },
    "cantUploadFaviconDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Leider konnte kein Favicon-Bild hochgeladen werden. Bitte stellen Sie sicher, dass die Bilddatei eindeutig ist und in einem der unterst\xFCtzten Bildformate vorliegt." } },
    "cantUpdateApplicationTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Konnte die Anwendung nicht aktualisieren" } },
    "cantUpdateApplicationDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Entschuldigung, konnte die Anwendung nicht aktualisieren." } }
  },
  "dnsStatus": {
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Rufe die DNS-Einstellungen deiner Dom\xE4ne auf und mache folgende \xC4nderungen" } },
    "typeHeader": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Art" } },
    "hostHeader": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Host" } },
    "valueHeader": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wert" } }
  },
  "domainForm": {
    "invalidDomain": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Der angegebene Name der Dom\xE4ne ist ung\xFCltig" } },
    "notUniqueDomain": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Die angegebene Dom\xE4ne wird bereits verwendet" } }
  },
  "customDomainForm": {
    "domainNameLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dom\xE4nen-Name" } }
  },
  "subDomainForm": {
    "domainNameLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dom\xE4nen-Name" } }
  },
  "subDomainDetails": {
    "text": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Die DNS-Einstellungen der Dom\xE4ne sind bereits konfiguriert und \xFCberpr\xFCft worden. Es funktioniert, ohne dass zus\xE4tzliche \xC4nderungen vorgenommen werden m\xFCssen." } }
  },
  "domainCard": {
    "refresh": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Einstellungen neu laden" } },
    "detailLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Details anzeigen" } },
    "unpublishedDomainWarning": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Bitte ver\xF6ffentlichen Sie die Anwendung, um sie auf dieser Dom\xE4ne verf\xFCgbar zu machen." } }
  },
  "domainTypes": {
    "customName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Benutzerdefinierte Dom\xE4ne" } },
    "subDomainName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Subdomain" } },
    "subDomain": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Subdomain von " }, { "t": 4, "k": "domain" }] } }
  },
  "linkElement": {
    "missingValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Fehlender Link-Text..." } },
    "emptyValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Leerer Link-Text..." } }
  },
  "linkNavigationSelection": {
    "navigateTo": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Navigieren zu" } },
    "navigateToCustom": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Benutzerdefinierte URL" } },
    "paramPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Geben Sie einen Wert ein..." } },
    "urlPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Geben Sie eine URL ein..." } },
    "url": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ziel-URL" } },
    "paramsInErrorDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Die gespeicherten Parameter stimmen nicht mit den Seitenparametern \xFCberein. Die Seite wurde wahrscheinlich gel\xF6scht oder aktualisiert." } },
    "paramsInErrorButton": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Parameter aktualisieren" } },
    "target": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\xD6ffnen in..." } },
    "targetSelf": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Gleicher Tab" } },
    "targetNewTab": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Neuer Tab" } }
  },
  "linkElementForm": {
    "text": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Text" } },
    "textPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Text eingeben..." } },
    "variant": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Variante" } },
    "variantLink": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Verkn\xFCpfung" } },
    "variantButton": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Button" } },
    "buttonColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Buttonfarbe" } }
  },
  "widthSelector": {
    "width": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Breite" } },
    "widthAuto": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Auto" } },
    "widthFull": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Volle Breite" } }
  },
  "backgroundTypes": {
    "none": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kein" } },
    "color": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Farbe" } }
  },
  "widthTypes": {
    "fullBleed": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Voller Beschnitt" } },
    "fullWidth": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Volle Breite" } },
    "normal": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Normal" } },
    "medium": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mittel" } },
    "small": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Schmal" } }
  },
  "horizontalAlignmentSelector": {
    "alignmentLeft": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Links" } },
    "alignmentCenter": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zentrieren" } },
    "alignmentRight": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Rechtsb\xFCndig" } }
  },
  "verticalAlignmentSelector": {
    "alignmentTop": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Oben" } },
    "alignmentCenter": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mittig" } },
    "alignmentBottom": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Unten" } }
  },
  "pageSettingsTypes": {
    "pageName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Seite" } }
  },
  "pageVisibilitySettingsTypes": {
    "pageName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sichtbarkeit" } },
    "logInPageWarningTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Die Anmeldeseite ist nicht festgelegt" } },
    "logInPagewarningMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wenn ein anonymer Benutzer versucht, auf diese Seite zuzugreifen, wird er zu einer Anmeldeseite weitergeleitet. Bitte legen Sie die Anmeldeseite in den allgemeinen Einstellungen der Anwendung fest." } },
    "logInPageInfoTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Anonyme Benutzer werden weitergeleitet" } },
    "logInPageInfoMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Anonyme Benutzer, die versuchen, auf diese Seite zuzugreifen, werden zur Seite " }, { "t": 4, "k": "logInPageName" }, { "t": 3, "v": " weitergeleitet." }] } }
  },
  "pageSettings": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Seite" } },
    "pageUpdatedTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ge\xE4ndert" } },
    "pageUpdatedDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Die Seiteneinstellungen wurden ge\xE4ndert." } }
  },
  "pageVisibilitySettings": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sichtbarkeit" } },
    "allVisitors": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Alle Besucher" } },
    "loggedInVisitors": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Eingeloggte Besucher" } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wer darf diese Seite sehen" } }
  },
  "pageForm": {
    "defaultName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Seite" } },
    "nameTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Name" } },
    "nameSubtitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Eindeutiger Name der Seite" } },
    "namePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Geben Sie einen Namen ein..." } },
    "pathTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pfad" } },
    "addAnotherParameter": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Einen weiteren Abfrageparameter hinzuf\xFCgen" } },
    "addParameter": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Einen Abfrageparameter hinzuf\xFCgen" } },
    "queryParamsSubtitleTutorial": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Abfrageparameter k\xF6nnen verwendet werden, um Daten abh\xE4ngig von dem angegebenen Parameter dynamisch zu laden." } },
    "pathSubtitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ein Parameter kann \xFCber :parameter hinzugef\xFCgt werden" } },
    "pathPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Geben Sie einen Pfad ein..." } },
    "pathParamsTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pfad-Parameter" } },
    "queryParamsTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Abfrageparameter" } },
    "pathParamsSubtitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Werden durch :parameter im Pfad definiert" } },
    "pathParamsSubtitleTutorial": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pfad-Parameter k\xF6nnen verwendet werden, um Daten dynamisch zu laden, abh\xE4ngig von dem angegebenen Parameter. F\xFCgen Sie :parameter zum Pfad hinzu, um einen hinzuzuf\xFCgen." } }
  },
  "pathParamTypes": {
    "textName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Text" } },
    "numericName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Numerisch" } }
  },
  "queryParamTypes": {
    "textName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Text" } },
    "numericName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Numerisch" } }
  },
  "pageEditor": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Anwendungs-Builder" } },
    "pageNotFound": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Seite nicht gefunden" } }
  },
  "publicPage": {
    "siteNotFound": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Seite nicht gefunden" } },
    "pageNotFound": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Seite nicht gefunden" } },
    "loginToastTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Authentifizierung erfolgreich" } },
    "loginToastMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sie wurden erfolgreich eingeloggt." } },
    "authorizedToastTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Authentifizierung erforderlich" } },
    "authorizedToastMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sie m\xFCssen angemeldet sein, um auf diese Seite zugreifen zu k\xF6nnen. Bitte loggen Sie sich ein, um fortzufahren." } }
  },
  "integrationSettings": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Integrationen" } },
    "noIntegrationMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sie haben noch keine Integrationen erstellt. Diese k\xF6nnen hinzugef\xFCgt werden, indem Sie eine Datenquelle, Aktion oder Benutzer-Authentifizierung hinzuf\xFCgen." } },
    "integrationMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sie k\xF6nnen neue Integrationen erstellen, indem Sie eine Datenquelle, Aktion oder Benutzer-Authentifizierung hinzuf\xFCgen." } }
  },
  "dataSourceForm": {
    "namePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Quellenname" } },
    "nameLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Name" } },
    "actionLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aktion" } },
    "integrationLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Integration" } },
    "servicePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "W\xE4hlen Sie einen Dienst aus" } },
    "integrationPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "W\xE4hlen Sie eine Integration aus" } },
    "errorUniqueName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Der Name der Datenquelle muss eindeutig sein." } }
  },
  "dataSourceContext": {
    "addDataSource": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Neue Datenquelle hinzuf\xFCgen" } },
    "noDataSourceTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sie haben noch keine Datenquellen hinzugef\xFCgt." } },
    "noDataSourceMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Datenquellen k\xF6nnen verwendet werden, um Daten aus internen oder externen Quellen abzurufen und auf der Seite anzuzeigen." } },
    "sharedDataSourceTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zwischen Seiten geteilt" } },
    "pageDataSourceTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "F\xFCr diese Seite" } },
    "sharedDataSourceDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ist auf jeder Seite verf\xFCgbar und wird einmalig beim ersten Laden der Seite abgerufen." } },
    "pageDataSourceDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wird abgerufen, wenn der Benutzer auf diese Seite navigiert." } }
  },
  "dataSourceItem": {
    "notConfigured": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nicht konfiguriert" } }
  },
  "dataSourceItemContext": {
    "shareBetweenPages": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Teilen zwischen Seiten" } },
    "unshareBetweenPages": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Freigabe auf anderen Seiten aufheben" } }
  },
  "dataSourceCreateEditModal": {
    "editTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Datenquelle bearbeiten" } },
    "createTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Datenquelle erstellen" } },
    "sharedWarning": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Diese Datenquelle wird gemeinsam genutzt, so dass sich Ihre \xC4nderungen auf mehrere Seiten auswirken k\xF6nnen." } }
  },
  "defaultStyleForm": {
    "boxTop": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Oben" } },
    "boxBottom": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Unten" } },
    "boxLeft": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Links" } },
    "boxRight": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Rechts" } },
    "backgroundLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Hintergrund" } },
    "backgroundColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Hintergrundfarbe" } },
    "widthLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Breite" } },
    "backgroundImage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Bild" } },
    "backgroundImageMode": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "F\xFCllmodus" } },
    "cssClasses": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "CSS-Klassen" } },
    "cssClassesHelp": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Geben Sie eine durch Leerzeichen getrennte Liste von Klassen f\xFCr dieses Element ein, die im generierten HTML erscheinen." } },
    "cssClassesPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "CSS-Klassen eingeben..." } }
  },
  "styleBoxForm": {
    "borderColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Rahmenfarbe" } },
    "borderLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Gr\xF6\xDFe" } },
    "paddingLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Innenabstand" } },
    "marginLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Rand" } }
  },
  "radiusStyleForm": {
    "cornerRadiusLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Eckradius" } },
    "backgroundRadiusLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Hintergrund" } },
    "borderRadiusLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Rahmen" } }
  },
  "themeConfigBlockType": {
    "color": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Farben" } },
    "page": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Seite" } },
    "typography": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Typografie" } },
    "button": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Button" } },
    "link": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Verkn\xFCpfung" } },
    "image": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Bild" } },
    "input": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Eingabefeld" } },
    "table": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tabelle" } }
  },
  "colorThemeConfigBlock": {
    "transparent": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Transparent" } },
    "primaryColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Prim\xE4r" } },
    "secondaryColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sekund\xE4r" } },
    "borderColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Rahmen" } },
    "successColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Erfolgreich" } },
    "warningColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Warnung" } },
    "errorColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Fehler" } },
    "customColors": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Benutzerdefinierte Farben" } },
    "addCustomColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Benutzerdefinierte Farbe hinzuf\xFCgen" } },
    "customColorPrefix": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Benutzerdefiniert" } }
  },
  "pageThemeConfigBlock": {
    "backgroundColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Hintergrundfarbe" } },
    "backgroundImage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Hintergrundbild" } },
    "backgroundMode": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Hintergrundmodus" } }
  },
  "colorThemeConfigBlockType": {
    "transparent": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Transparent" } },
    "primary": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Prim\xE4r" } },
    "secondary": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sekund\xE4r" } },
    "border": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Rahmen" } },
    "success": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Erfolgreich" } },
    "warning": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Warnung" } },
    "error": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Fehler" } }
  },
  "typographyThemeConfigBlock": {
    "headingLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "\xDCberschrift " }, { "t": 4, "k": "i" }, { "t": 3, "v": " (h" }, { "t": 4, "k": "i" }, { "t": 3, "v": ")" }] } },
    "headingValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "\xDCberschrift <h" }, { "t": 4, "k": "i" }, { "t": 3, "v": ">" }] } },
    "color": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Farbe" } },
    "size": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Gr\xF6\xDFe" } },
    "weight": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Gewicht" } },
    "textAlignment": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ausrichtung" } },
    "bodyLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Body" } },
    "decoration": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Textdekoration" } },
    "fontFamily": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Schriftart" } }
  },
  "fontWeightType": {
    "thin": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "D\xFCnn" } },
    "extraLight": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Extra-leicht" } },
    "light": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Leicht" } },
    "regular": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Regul\xE4r" } },
    "medium": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mittel" } },
    "semiBold": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Semi-Bold" } },
    "bold": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Fett" } },
    "extraBold": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Extra-Bold" } },
    "black": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Black" } },
    "extraBlack": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Extra-Black" } }
  },
  "buttonThemeConfigBlock": {
    "backgroundColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Hintergrundfarbe" } },
    "button": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Button" } },
    "defaultState": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Standard-Zustand" } },
    "hoverState": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Hover-Zustand" } },
    "activeState": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aktiver Zustand" } },
    "textAlignment": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Textausrichtung" } },
    "alignment": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ausrichtung" } },
    "width": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Breite" } },
    "textColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Textfarbe" } },
    "borderColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Rahmenfarbe" } },
    "borderSize": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Rahmengr\xF6\xDFe" } },
    "borderRadius": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Rahmen-Radius" } },
    "padding": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Innenabstand" } },
    "fontFamily": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Schriftart" } },
    "size": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Schriftgr\xF6\xDFe" } },
    "weight": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Schriftgewicht" } }
  },
  "linkThemeConfigBlock": {
    "color": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Farbe" } },
    "link": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Link" } },
    "defaultState": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Standard-Zustand" } },
    "hoverState": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Hover-Zustand" } },
    "activeState": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aktiver Zustand" } },
    "alignment": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ausrichtung" } },
    "fontFamily": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Schriftart" } },
    "size": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Schriftgr\xF6\xDFe" } },
    "weight": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Schriftgewicht" } },
    "decoration": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Textdekoration" } }
  },
  "inputThemeConfigBlock": {
    "label": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Beschriftung" } },
    "input": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Eingabe" } },
    "backgroundColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Hintergrundfarbe" } },
    "textColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Textfarbe" } },
    "borderColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Rahmenfarbe" } },
    "borderSize": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Rahmengr\xF6\xDFe" } },
    "borderRadius": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Rahmen-Radius" } },
    "padding": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Innenabstand" } },
    "fontFamily": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Schriftart" } },
    "size": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Schriftgr\xF6\xDFe" } },
    "weight": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Schriftgewicht" } }
  },
  "imageThemeConfigBlock": {
    "alignment": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ausrichtung" } },
    "maxWidthLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Maximale Breite" } },
    "maxHeightLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Maximale H\xF6he" } },
    "maxHeightPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Geben Sie die maximale H\xF6he ein" } },
    "maxWidthPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Geben Sie die maximale Breite ein" } },
    "imageConstraintsLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Beschr\xE4nkungen" } },
    "imageConstraintFullWidth": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Auf maximale Breite ausweiten" } },
    "imageConstraintCover": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cover" } },
    "imageConstraintCoverDisabled": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nicht verf\xFCgbar bei leerer maximaler H\xF6he." } },
    "imageConstraintContain": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Contain" } },
    "imageConstraintContainDisabled": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nicht verf\xFCgbar mit maximaler H\xF6he." } },
    "imageBorderRadiusLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Randradius" } },
    "imageBorderRadiusPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Geben Sie den Bildrand-Radius ein." } }
  },
  "tableThemeConfigBlock": {
    "borderColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Rahmenfarbe" } },
    "backgroundAlternateColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Gerade Zeilenfarbe" } },
    "backgroundColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Hintergrundfarbe" } },
    "textColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Textfarbe" } },
    "borderSize": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Rahmengr\xF6\xDFe" } },
    "borderRadius": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Rahmen-Radius" } },
    "padding": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Innenabstand" } },
    "fontFamily": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Schriftart" } },
    "size": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Gr\xF6\xDFe" } },
    "fontSize": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Schriftgr\xF6\xDFe" } },
    "fontWeight": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Schriftgewicht" } },
    "table": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tabelle" } },
    "header": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kopfbereich" } },
    "alignment": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ausrichtung" } },
    "cells": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zellen" } },
    "separators": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Trennelemente" } },
    "verticalSeparatorColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Vertikale Farbe" } },
    "verticalSeparatorSize": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Vertikale Gr\xF6\xDFe" } },
    "horizontalSeparatorColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Horizontale Farbe" } },
    "horizontalSeparatorSize": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Horizontale Gr\xF6\xDFe" } }
  },
  "buttonElementForm": {
    "valueLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Button-Text" } },
    "valuePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Text eingeben..." } }
  },
  "buttonElement": {
    "missingValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Fehlender Button-Text..." } },
    "emptyValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Leerer Button-Text..." } }
  },
  "eventTypes": {
    "clickLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Bei Klick" } },
    "submitLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Beim Absenden" } },
    "afterLoginLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nach dem Login" } }
  },
  "getFormulaComponent": {
    "errorTooltip": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ung\xFCltiger Bezug" } }
  },
  "fontSidePanelForm": {
    "label": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Schriftfarbe" } }
  },
  "choiceElementForm": {
    "multiple": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mehrere Werte zulassen" } },
    "display": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Anzeige" } },
    "dropdown": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Drop-Down" } },
    "checkbox": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kontrollfeld" } },
    "radio": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Option" } }
  },
  "dropdown": {
    "empty": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Keine Optionen verf\xFCgbar" } }
  },
  "tableElementForm": {
    "dataSource": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Datenquelle" } },
    "fields": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Felder" } },
    "fieldValueLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wert" } },
    "addField": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Feld hinzuf\xFCgen" } },
    "fieldValuePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wert eingeben..." } },
    "itemsPerPage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Elemente pro Seite" } },
    "fieldDefaultName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Spalte" } },
    "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Name" } },
    "noName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kein Name" } },
    "fieldType": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Typ" } },
    "itemsPerPagePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wert eingeben..." } },
    "selectSourceFirst": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "W\xE4hlen Sie eine Datenquelle und/oder Eigenschaft, um mit der Konfiguration Ihrer Felder zu beginnen." } },
    "buttonColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Buttonfarbe" } },
    "refreshFieldsFromDataSource": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Felder aus der Datenquelle aktualisieren" } },
    "buttonLoadMoreLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mehr anzeigen-Beschriftung" } },
    "propertySelectorMissingArrays": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Keine Felder mit mehreren Werten gefunden, die als Zeilen verwendet werden k\xF6nnen." } }
  },
  "tableElement": {
    "showMore": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mehr anzeigen" } }
  },
  "abTable": {
    "loading": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wird geladen..." } },
    "empty": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Es wurden keine Elemente gefunden." } }
  },
  "repeatElement": {
    "empty": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Es wurden keine Elemente gefunden." } },
    "showMore": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mehr anzeigen" } },
    "missingDataSourceTooltip": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "W\xE4hlen Sie eine Datenquelle, um mit dem Hinzuf\xFCgen von Elementen zu beginnen." } },
    "missingSchemaPropertyTooltip": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "W\xE4hlen Sie eine Eigenschaft, um mit dem Hinzuf\xFCgen von Elementen zu beginnen." } },
    "emptyState": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Keine Eintr\xE4ge gefunden." } }
  },
  "collectionElementForm": {
    "noDataSourceMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "W\xE4hlen Sie eine Datenquelle mit mehreren Zeilen, um alle Ergebnisse aufzulisten, oder eine einzeilige Datenquelle, um eine Eigenschaft innerhalb dieser Zeile auszuw\xE4hlen." } },
    "noSchemaPropertyMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "W\xE4hlen Sie eine Eigenschaft in der Datenquelle, die Sie als Listendaten f\xFCr Ihr Element verwenden m\xF6chten." } },
    "propertyOptionLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Benutzeraktionen" } }
  },
  "propertyOptionForm": {
    "fieldHeading": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Feld" } },
    "filterHeading": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Filter" } },
    "sortHeading": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sortierung" } },
    "searchHeading": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Suche" } },
    "optionUnavailable": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nicht verf\xFCgbar" } },
    "noPropertiesAvailable": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Keine Felder verf\xFCgbar." } },
    "formDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "W\xE4hlen Sie aus, welche Eigenschaften innerhalb der Datenquelle dieses Elements von Seitenbesuchern gefiltert, sortiert und durchsucht werden k\xF6nnen." } }
  },
  "repeatElementForm": {
    "dataSource": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Datenquelle" } },
    "itemsPerPage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Elemente pro Seite" } },
    "itemsPerPagePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wert eingeben..." } },
    "itemsPerRowLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Elemente pro Zeile" } },
    "itemsPerRowDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Anzahl der Spalten pro Zeile und Ger\xE4tetyp." } },
    "buttonLoadMoreLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mehr anzeigen-Beschriftung" } },
    "toggleEditorRepetitionsLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wiederholungen vor\xFCbergehend deaktivieren" } },
    "propertySelectorMissingArrays": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Keine Felder mit mehreren Werten gefunden, mit denen wiederholt werden kann." } },
    "gapLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Abstand zwischen Wiederholungen" } },
    "gapVerticalLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Vertikal" } },
    "gapHorizontalLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Horizontal" } }
  },
  "recordSelectorElement": {
    "emptyAdhocState": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Keine Datens\xE4tze gefunden, die '" }, { "t": 4, "k": "query" }, { "t": 3, "v": "' entsprechen." }] } },
    "emptyState": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Keine Eintr\xE4ge gefunden." } }
  },
  "recordSelectorElementForm": {
    "selectRecordsFrom": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Datens\xE4tze ausw\xE4hlen aus" } },
    "noDataSourceMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "W\xE4hlen Sie eine Datenquelle mit mehreren Zeilen, um alle Ergebnisse aufzulisten." } },
    "optionNameSuffix": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Suffix f\xFCr Optionsnamen" } },
    "optionNameSuffixPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Geben Sie ein Suffix ein..." } },
    "optionNameSuffixHelper": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dieses Suffix wird beim \xD6ffnen des Dropdowns an jeden Optionsnamen angeh\xE4ngt und hilft dabei, sie zu unterscheiden." } },
    "itemsPerPage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Elemente pro Seite" } },
    "itemsPerPagePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wert eingeben..." } },
    "multipleLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mehrere Werte zulassen" } },
    "record": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Datensatz " }, { "t": 4, "k": "id" }] } }
  },
  "currentRecordDataProviderType": {
    "index": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Index" } },
    "firstPartName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Datenquelle: " }, { "t": 4, "k": "name" }] } },
    "schemaProperty": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "prefixName" }, { "t": 3, "v": ": " }, { "t": 4, "k": "schemaProperty" }] } }
  },
  "workflowActionTypes": {
    "notificationLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Benachrichtigung anzeigen" } },
    "openPageLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Seite \xF6ffnen" } },
    "logoutLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Abmelden" } },
    "refreshDataSourceLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Datenquelle aktualisieren" } },
    "httpRequest": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "HTTP-Anfrage senden" } },
    "errorNavigateToPageMissing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": 'Fehlende Eigenschaft "Navigieren zu"' } },
    "errorPageParameterInError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mindestens ein Seitenparameter ist falsch konfiguriert" } },
    "errorNavigationUrlMissing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": 'Fehlende Eigenschaft "Navigations-URL"' } },
    "errorDataSourceMissing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Keine Datenquelle ausgew\xE4hlt" } }
  },
  "notificationWorkflowActionForm": {
    "titleLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Titel" } },
    "titlePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Text eingeben..." } },
    "descriptionLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Beschreibung" } },
    "descriptionPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Text eingeben..." } }
  },
  "event": {
    "addAction": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aktion hinzuf\xFCgen" } }
  },
  "collectionFieldType": {
    "boolean": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Boolesch" } },
    "button": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Button" } },
    "text": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Text" } },
    "link": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Verkn\xFCpfung" } },
    "tags": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tags" } },
    "image": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Bild" } },
    "rating": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Bewertung" } },
    "errorValueMissing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": 'Fehlende Eigenschaft "Wert"' } }
  },
  "textFieldForm": {
    "fieldValueLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wert" } },
    "fieldValuePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wert eingeben..." } }
  },
  "linkFieldForm": {
    "fieldValueLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "URL" } },
    "fieldValuePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wert eingeben..." } },
    "fieldLinkNameLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Verkn\xFCpfungstext" } },
    "fieldLinkNamePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wert eingeben..." } },
    "buttonColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Buttonfarbe" } }
  },
  "tagsFieldForm": {
    "fieldValuesLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Werte" } },
    "fieldValuesPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Werte eingeben..." } },
    "fieldColorsLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Farben" } },
    "fieldColorsPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Farben eingeben..." } }
  },
  "linkField": {
    "details": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Details" } }
  },
  "imageFieldForm": {
    "fieldSrcLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Bildquelle" } },
    "fieldSrcPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wert eingeben" } },
    "fieldAltLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Alternativer Text" } },
    "fieldAltPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wert eingeben..." } },
    "fieldAltHelp": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wird von Screen-Readern verwendet und angezeigt, wenn das Bild nicht geladen werden kann" } }
  },
  "createUserSourceForm": {
    "userSourceType": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Typ" } },
    "userSourceIntegration": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Integration" } },
    "userSourceName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Name" } }
  },
  "updateUserSourceForm": {
    "nameFieldLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Name" } },
    "nameFieldPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Einen Namen eingeben..." } },
    "authTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Authentifizierung" } },
    "integrationFieldLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Integration" } },
    "addProvider": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Anbieter hinzuf\xFCgen" } }
  },
  "builderLoginPageForm": {
    "pageDropdownLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Anmeldeseite" } },
    "pageDropdownPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "W\xE4hlen Sie eine Seite aus" } },
    "pageDropdownDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "W\xE4hlen Sie die Anmeldeseite aus, zu der nicht angemeldete Benutzer weitergeleitet werden sollen, wenn sie versuchen, auf eine gesch\xFCtzte Seite zuzugreifen." } }
  },
  "formContainerElement": {
    "submitDeactivatedText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "F\xFCllen Sie alle erforderlichen Felder aus, um das Formular abzusenden" } },
    "defaultSubmitButtonLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Absenden" } }
  },
  "formContainerElementForm": {
    "submitButtonLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Absenden-Button" } },
    "submitButtonPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wert eingeben..." } },
    "buttonColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Buttonfarbe" } },
    "resetToInitialValuesTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nach der \xDCbermittlung auf Standardwerte zur\xFCcksetzen" } },
    "resetToInitialValuesDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wenn diese Option aktiviert ist, werden die Standardwerte des Formulars verwendet, um das Formular nach erfolgreicher \xDCbermittlung zur\xFCckzusetzen. Falls der Haken nicht gesetzt ist, bleiben die Werte des Benutzers erhalten." } }
  },
  "choiceOptionSelector": {
    "label": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Optionen" } },
    "value": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Optionswerte" } },
    "valuePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wert eingeben" } },
    "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Optionsnamen" } },
    "namePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Name eingeben" } },
    "addOption": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Option hinzuf\xFCgen" } },
    "addOptionDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Klicken Sie auf 'Option hinzuf\xFCgen', um Ihrem Dropdown Optionen hinzuzuf\xFCgen" } },
    "optionType": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Optionstyp" } },
    "manual": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Manuell" } },
    "dataSource": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Datenquelle" } },
    "formulas": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Formeln" } }
  },
  "fieldMappingContext": {
    "enableField": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Feld aktivieren" } },
    "disableField": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Feld deaktivieren" } }
  },
  "checkboxElementForm": {
    "labelTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Optionsname" } },
    "valueTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Standardwert" } },
    "requiredTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Erforderlich" } }
  },
  "choiceElement": {
    "addOptions": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "F\xFCgen Sie Optionen hinzu, um dieses Element zu verwenden..." } }
  },
  "userSourceUsersContext": {
    "searchPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Benutzer suchen" } },
    "anonymous": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Anonym" } },
    "unnamed": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Unbenannt" } },
    "noEmail": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Keine E-Mailadresse" } }
  },
  "userSelector": {
    "viewAs": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Anzeigen als: " }, { "t": 4, "k": "user" }] } },
    "anonymous": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Anonym" } },
    "member": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "prefix" }, { "t": 3, "v": " Mitglied" }] } }
  },
  "visibilityForm": {
    "allVisitors": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Alle Besucher" } },
    "loggedInVisitors": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Eingeloggte Besucher" } },
    "notLoggedInVisitors": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ausgeloggte Besucher" } },
    "warningTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dies ist eine Sicherheitsfunktion" } },
    "warningMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Sehen Sie die " }, { "t": 4, "k": "link" }, { "t": 3, "v": ", um mehr \xFCber den Schutz der Daten zu erfahren." }] } },
    "documentationLink": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dokumentation" } },
    "excludedRolesLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "alle Rollen au\xDFer" } },
    "switchAllowLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Erlauben" } },
    "switchDisallowLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Verbieten" } },
    "rolesSelectAll": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Alle ausw\xE4hlen" } },
    "rolesDeselectAll": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Alle abw\xE4hlen" } },
    "rolesSelectHint": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "W\xE4hlen Sie eine oder mehrere Rollen aus" } },
    "roleTypesHint": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "W\xE4hlen Sie einen Rollentyp aus" } },
    "roleTypeAllowAllRoles": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Alle Rollen" } },
    "roleTypeAllowAllRolesExcept": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Rollen verbieten..." } },
    "roleTypeDisallowAllRolesExcept": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Rollen erlauben..." } },
    "rolesAllMembersOf": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Alle Mitglieder von " }, { "t": 4, "k": "name" }] } },
    "noRole": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Keine Rolle" } },
    "errorFetchingRolesTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Konnte Benutzerrollen nicht abrufen" } },
    "errorFetchingRolesMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Beim Abrufen der Benutzerrollen ist ein Fehler aufgetreten." } },
    "visibilityCondition": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sichtbarkeitsbedingung" } },
    "visibilityConditionHelper": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wenn das Ergebnis dieser Formel wahr ist und die obige Besucherauswahl wahr ist, wird das Element sichtbar sein. Diese Bedingung wirkt sich nur auf die Sichtbarkeit des Elements aus. Um Daten stattdessen aus der Server-Antwort auszuschlie\xDFen, verwenden Sie die obige Filteroption f\xFCr Benutzerrollen." } },
    "visibilityConditionPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Bedingung..." } }
  },
  "userDataProviderType": {
    "isAuthenticated": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ist authentifiziert" } },
    "id": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "ID" } },
    "email": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "E-Mailadresse" } },
    "username": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Benutzername" } },
    "role": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Rolle" } }
  },
  "buttonField": {
    "noLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Unbenannt..." } }
  },
  "buttonFieldForm": {
    "infoMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Um Aktionen f\xFCr diese Schaltfl\xE4che zu konfigurieren, \xF6ffnen Sie die Registerkarte \u201EEreignisse\u201C des aktuellen Elements." } },
    "labelPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Geben Sie eine Bezeichnung ein..." } }
  },
  "resetButton": {
    "reset": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Auf Standard-Theme-Wert zur\xFCcksetzen" } }
  },
  "backgroundModes": {
    "fill": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "F\xFCllen" } },
    "tile": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kachel" } },
    "fit": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Anpassen" } }
  },
  "customStyle": {
    "backToElement": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zur\xFCck zur Elementkonfiguration" } },
    "configureThemeOverrides": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Theme-\xDCberschreibungen f\xFCr dieses Element konfigurieren" } }
  },
  "serviceSchemaPropertySelector": {
    "label": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Eigenschaft" } },
    "noProperties": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Keine Eigenschaften verf\xFCgbar" } }
  },
  "userSourceDropdown": {
    "label": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Benutzerquelle" } },
    "addUserSource": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Neue Benutzerquelle hinzuf\xFCgen" } },
    "noUserSources": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Keine Benutzerquellen verf\xFCgbar" } }
  },
  "dataSourceDropdown": {
    "label": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Datenquelle" } },
    "noDataSources": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Keine Datenquellen verf\xFCgbar" } },
    "noSharedDataSources": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Keine geteilten Datenquellen verf\xFCgbar" } },
    "shared": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "geteilt" } },
    "pageOnly": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "diese Seite" } },
    "addNew": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Neue Datenquelle hinzuf\xFCgen" } }
  },
  "multiPageContainerElementForm": {
    "pagePosition": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Position" } },
    "behaviour": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Verhalten" } },
    "display": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Anzeige" } },
    "selectAll": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Alle ausw\xE4hlen" } },
    "deselectAll": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Alle abw\xE4hlen" } }
  },
  "pageShareType": {
    "all": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Auf allen Seiten" } },
    "only": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nur auf ausgew\xE4hlten Seiten" } },
    "except": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ausgew\xE4hlte Seiten ausschlie\xDFen" } }
  },
  "authProviderWithModal": {
    "authProviderInError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Bitte bearbeiten Sie diesen Anbieter, um den Fehler zu beheben." } },
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Anbieter bearbeiten: " }, { "t": 4, "k": "name" }] } }
  },
  "textDecorationSelector": {
    "underline": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Unterstrichen" } },
    "stroke": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Durchgestrichen" } },
    "italic": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kursiv" } },
    "uppercase": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Gro\xDFbuchstaben" } }
  },
  "ratingFieldForm": {
    "maxValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Maximaler Wert" } },
    "color": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Farbe" } },
    "style": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Stil" } },
    "star": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Stern" } },
    "heart": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Herz" } },
    "thumbsUp": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Daumen hoch" } },
    "flag": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Flagge" } },
    "value": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wert" } }
  },
  "ratingElementForm": {
    "maxValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Maximum" } },
    "color": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Farbe" } },
    "ratingStyle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Stil" } },
    "star": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Stern" } },
    "heart": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Herz" } },
    "smile": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Smiley" } },
    "thumbsUp": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Daumen hoch" } },
    "flag": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Flagge" } }
  },
  "automationSettingsModal": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Workflow" } }
  },
  "abFileInput": {
    "delete": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "L\xF6schen" } }
  },
  "elementsGuidedTourStep": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "F\xFCgen Sie Elemente zu Ihrer Seite hinzu" } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Jede Anwendung ben\xF6tigt Komponenten! F\xFCgen Sie Elemente wie Tabellen, Formulare, Buttons und mehr hinzu, um Ihre Anwendung zum Leben zu erwecken." } }
  },
  "dataGuidedTourStep": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Verbinden Sie Ihre Daten" } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Verkn\xFCpfen Sie hier Ihre Baserow-Tabellen, um Ihre Daten dynamisch in verschiedenen Elementen anzuzeigen, zu filtern und zu aktualisieren." } }
  },
  "previewGuidedTourStep": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ihr Steuerungszentrum" } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Hier konfigurieren Sie die Seiten Ihrer Anwendung. F\xFCgen Sie Elemente hinzu, sehen Sie sich das Ergebnis in der Vorschau an und strukturieren Sie Ihre Anwendung genau so, wie Sie es m\xF6chten." } }
  },
  "devicesGuidedTourStep": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Vorschau auf verschiedenen Ger\xE4ten" } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wechseln Sie zwischen Desktop-, Tablet- und Mobil-Vorschauen, um zu sehen, wie Ihre Anwendung auf verschiedenen Bildschirmgr\xF6\xDFen aussieht. Stellen Sie sicher, dass Ihr Design auf allen Ger\xE4ten perfekt funktioniert!" } }
  },
  "sidePanelGuidedTourStep": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Seitenpanel: Elemente anpassen" } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "**Allgemein-Tab** \u2013 Konfigurieren Sie das ausgew\xE4hlte Element.\n\n**Style-Tab** \u2013 Passen Sie Innenabstand, Au\xDFenabstand, Rahmen und mehr an.\n\n**Sichtbarkeit-Tab** \u2013 Steuern Sie, wer dieses Element sehen kann: eingeloggte Benutzer, ausgeloggte Benutzer oder bestimmte Rollen.\n\n**Ereignisse-Tab** \u2013 Wenn das Element Aktionen unterst\xFCtzt, konfigurieren Sie diese hier f\xFCr dynamische Interaktivit\xE4t." } }
  },
  "previewPublishGuidedTourStep": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Vorschau & Ver\xF6ffentlichung Ihrer Anwendung" } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Klicken Sie auf **Vorschau**, um Ihre Anwendung privat zu testen. Wenn Sie bereit sind, klicken Sie auf **Ver\xF6ffentlichen**, um sie \xFCber eine Dom\xE4ne mit der \xD6ffentlichkeit zu teilen." } }
  },
  "workflowAction": {
    "sampleDataModalTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Payload f\xFCr " }, { "t": 4, "k": "actionLabel" }] } },
    "sampleDataModalSubTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "JSON-Payload" } },
    "testActionDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "F\xFChren Sie diese Aktion in der Vorschau aus, um ihre Ausgabe zu erfassen und f\xFCr nachfolgende Aktionen verf\xFCgbar zu machen." } }
  }
};

export { resource as default };
//# sourceMappingURL=de-BLvRamFx.mjs.map
