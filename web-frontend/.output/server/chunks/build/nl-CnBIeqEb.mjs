!(function() {
  try {
    var e = false ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
    var n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "c83ae973-e440-447f-bef3-59aaf764f855", e._sentryDebugIdIdentifier = "sentry-dbid-c83ae973-e440-447f-bef3-59aaf764f855");
  } catch (e2) {
  }
})();
const resource = {
  "sidebarComponentBuilder": {
    "settings": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Instellingen" } },
    "createPage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pagina maken" } }
  },
  "builderSettingsModal": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Applicatie" } }
  },
  "createPageModal": {
    "header": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pagina maken" } },
    "submit": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pagina toevoegen" } }
  },
  "pageForm": {
    "nameLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Naam" } },
    "defaultName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pagina" } },
    "errorNameNotUnique": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Een pagina met deze naam bestaat al" } },
    "pathLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pad" } },
    "errorPathNotUnique": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Een pagina met deze naam bestaat al" } },
    "errorStartingSlash": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Een pad moet beginnen met een '/'" } },
    "errorValidPathCharacters": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Het pad bevat ongeldige tekens" } },
    "pathParamsTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pad parameters" } },
    "pathParamsSubtitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Worden gedefinieerd door :parameter in het pad" } },
    "nameSubtitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Unieke naam van de pagina" } },
    "pathTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pad" } },
    "pathParamsSubtitleTutorial": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pad parameters kunnen worden gebruikt om gegevens dynamisch te laden, afhankelijk van de opgegeven parameter. Voeg :parameter toe aan het pad om er een toe te voegen." } },
    "nameTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Naam" } },
    "pathSubtitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Een parameter kan worden toegevoegd via :parameter" } },
    "namePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Voer een naam in..." } },
    "pathPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Voer een pad in..." } },
    "addAnotherParameter": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nog een query string parameter toevoegen" } },
    "addParameter": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Query string parameter toevoegen" } },
    "queryParamsSubtitleTutorial": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Query parameters kunnen worden gebruikt om dynamisch gegevens te laden, afhankelijk van de opgegeven parameter." } },
    "queryParamsTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Query string parameters" } }
  },
  "builderForm": {
    "submit": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Applicatie toevoegen" } }
  },
  "builderSettingTypes": {
    "themeName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Thema" } },
    "integrationsName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Integraties" } },
    "domainsName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Domeinen" } },
    "userSourcesName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Gebruikers" } },
    "generalName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Algemeen" } }
  },
  "elementMenu": {
    "moveUp": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Verplaats omhoog" } },
    "moveDown": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Verplaats omlaag" } },
    "moveRight": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Naar rechts" } },
    "moveLeft": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Naar links" } },
    "selectParent": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Selecteer ouder" } },
    "drag": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Versleep om de volgorde te wijzigen" } }
  },
  "pageHeaderItemTypes": {
    "labelElements": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Elementen" } },
    "labelDataSource": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Data" } },
    "labelVariables": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Variabelen" } },
    "labelSettings": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pagina-instellingen" } }
  },
  "elementsContext": {
    "searchPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zoek elementen" } },
    "noElements": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Geen elementen gevonden" } },
    "noPageElements": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Geen elementen gevonden voor deze pagina" } }
  },
  "elementType": {
    "heading": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kop" } },
    "headingDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Titel paginakop" } },
    "text": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Paragraaf" } },
    "textDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tekst op \xE9\xE9n regel" } },
    "link": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Link" } },
    "image": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Afbeelding" } },
    "linkDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Een link naar pagina/URL" } },
    "imageDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Afbeelding weergeven" } },
    "inputText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tekstinvoer" } },
    "inputTextDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Een tekstinvoerveld" } },
    "column": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kolommen" } },
    "table": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tabel" } },
    "formContainer": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Formulier" } },
    "tableDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Een tabel element" } },
    "columnDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kolommen container" } },
    "button": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Knop" } },
    "buttonDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Een knop element" } },
    "formContainerDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Een formulier element" } },
    "dropdownDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dropdown element" } },
    "iframeDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Inline frame" } },
    "dropdown": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dropdown" } },
    "checkbox": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Checkbox" } },
    "checkboxDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Checkbox element" } },
    "iframe": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "IFrame" } },
    "authForm": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Inlogformulier" } },
    "authFormDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Een login formulier voor gebruikers" } },
    "repeat": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Herhaal" } },
    "repeatDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Een herhaalbare reeks elementen" } },
    "choice": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Keuze" } },
    "choiceDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Voor enkele/meervoudige waarde selectie" } },
    "recordSelector": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Recordkiezer" } },
    "recordSelectorDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Een gerelateerde recordkiezer" } },
    "header": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Multi-pagina header" } },
    "headerDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Een container gedeeld over pagina's" } },
    "footer": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Multi-pagina footer" } },
    "footerDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Een container gedeeld over pagina's" } },
    "notAllowedUnlessTop": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dit element is alleen toegestaan bovenaan de pagina" } },
    "notAllowedUnlessBottom": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dit element is alleen toegestaan onderaan de pagina" } },
    "notAllowedUnlessHeader": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dit element is alleen toegestaan in de pagina header" } },
    "notAllowedUnlessFooter": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dit element is alleen toegestaan in de footer van de pagina" } },
    "notAllowedInsideContainer": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dit element is niet toegestaan in een container" } },
    "notAllowedInsideSameType": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dit element is niet toegestaan in een container van hetzelfde type" } },
    "notAllowedLocation": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dit element is niet toegestaan op deze locatie" } },
    "dateTimePicker": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Datum tijd kiezer" } },
    "dateTimePickerDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Een invoerveld voor datum en tijd" } },
    "simpleContainer": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Container" } },
    "menu": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Menu" } },
    "menuDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Menu element" } },
    "simpleContainerDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Een container voor andere elementen" } },
    "invalidElementValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Ongeldige element waarde: " }, { "t": 4, "k": "value" }] } },
    "ratingDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Een beoordelings element" } },
    "ratingInput": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Beoordeling invoer" } },
    "rating": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Beoordeling" } },
    "ratingInputDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Een beoordeling selement" } },
    "fileInput": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Bestandsinvoer" } },
    "fileInputDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Een invoerveld om bestanden te uploaden" } },
    "errorValueMissing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ontbrekende waarde eigenschap" } },
    "errorEmptyContainer": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Deze container is leeg" } },
    "errorParentWithDataSourceMissing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Geen gegevensbron geselecteerd op het element of een bovenliggende container" } },
    "errorDataSourceMissing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Geen gegevensbron geselecteerd" } },
    "errorSchemaPropertyMissing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Geen schema-eigenschap geselecteerd" } },
    "errorWorkflowActionInError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ten minste \xE9\xE9n actie is verkeerd geconfigureerd" } },
    "errorCollectionFieldInError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ten minste \xE9\xE9n veld is verkeerd geconfigureerd" } },
    "errorNavigateToPageMissing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ontbreekt Navigeer naar eigenschap" } },
    "errorPageParameterInError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ten minste \xE9\xE9n paginaparameter is verkeerd geconfigureerd" } },
    "errorNavigationUrlMissing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ontbrekende URL-eigenschap voor navigatie" } },
    "errorImageFileMissing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ontbrekend afbeeldingsbestand" } },
    "errorImageUrlMissing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ontbrekende URL-eigenschap voor afbeelding" } },
    "errorNoWorkflowAction": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Geen workflowactie geconfigureerd" } },
    "errorOptionsMissing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Geen optie geconfigureerd" } },
    "errorIframeUrlMissing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ontbrekende IFrame URL eigenschap" } },
    "errorIframeContentMissing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ontbrekende IFrame-inhoud" } },
    "errorNoMenuItem": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Geen menu-item geconfigureerd" } },
    "errorMenuItemInError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ten minste \xE9\xE9n menu is verkeerd geconfigureerd" } },
    "errorSubMenuItemInError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ten minste \xE9\xE9n submenu is verkeerd geconfigureerd" } }
  },
  "addElementButton": {
    "label": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Element" } }
  },
  "addElementModal": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nieuw element toevoegen" } },
    "searchPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zoek elementen" } },
    "disabledElementTooltip": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Niet beschikbaar binnen dit element" } },
    "elementInProgress": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Element toevoegen..." } }
  },
  "duplicatePageJobType": {
    "duplicating": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dupliceren" } },
    "duplicatedTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pagina gedupliceerd" } },
    "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dupliceer pagina" } }
  },
  "pageSidePanelType": {
    "general": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Algemeen" } },
    "style": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Stijl" } },
    "visibility": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zichtbaarheid" } },
    "events": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Gebeurtenissen" } },
    "eventsTabDeactivatedNoEvents": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dit element ondersteunt geen events" } },
    "eventsTabInError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Een of meer acties zijn verkeerd geconfigureerd." } }
  },
  "emptySidePanelState": {
    "message": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Klik op een van de elementen om meer details te zien" } }
  },
  "headingElement": {
    "noValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Geen titel..." } },
    "emptyValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Lege titel..." } },
    "missingValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ontbrekende titel..." } }
  },
  "headingElementForm": {
    "levelTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Niveau" } },
    "textTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tekst" } },
    "headingName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Kop " }, { "t": 4, "k": "level" }, { "t": 3, "v": " <h" }, { "t": 4, "k": "level" }, { "t": 3, "v": ">" }] } },
    "textError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "De waarde is ongeldig." } },
    "textPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tekst invoeren..." } }
  },
  "textElement": {
    "noValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Lege paragraaf..." } },
    "emptyValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Lege tekst..." } },
    "missingValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ontbrekende tekst..." } }
  },
  "textElementForm": {
    "textTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tekst" } },
    "textPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tekst invoeren..." } },
    "textError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "De waarde is ongeldig." } },
    "textFormatTypeLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Format" } },
    "textFormatTypePlain": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Platte tekst" } },
    "textFormatTypeMarkdown": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Markdown" } }
  },
  "pageErrors": {
    "errorPathNotUnique": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Een pad met deze naam bestaat al" } },
    "errorValidPathCharacters": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Het pad bevat ongeldige tekens" } },
    "errorUniquePathParams": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pad parameters moeten uniek zijn." } },
    "errorStartingSlash": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Een pad moet beginnen met een '/'" } },
    "errorNameNotUnique": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Een pagina met deze naam bestaat al" } },
    "errorUniqueValidQueryParams": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Query parameternamen moeten uniek en geldig zijn." } },
    "errorNameNotUniqueDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Voer een unieke naam in voor de pagina" } }
  },
  "pageActionTypes": {
    "preview": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Voorbeeld" } },
    "publish": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Publiceren" } }
  },
  "publishActionModal": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Publiceren" } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Breng uw app live door te publiceren naar een van de domeinen. Houd er rekening mee dat uw applicatie meerdere domeinen kan hebben, die elk een andere versie van de applicatie hebben." } },
    "publish": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Publiceren" } },
    "publishSucceedTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Site gepubliceerd" } },
    "publishSucceedDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "De site is met succes gepubliceerd." } },
    "publishFailedTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Publiceren van de site is mislukt" } },
    "publishFailedDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Het publiceren van de site is mislukt. Probeer het later opnieuw." } },
    "openInNewTab": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Openen in nieuw tabblad" } },
    "noDomain": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Je moet ten minste \xE9\xE9n domein hebben om uw applicatie te kunnen publiceren." } },
    "importingState": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "importeren" } },
    "addDomain": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Domein toevoegen" } },
    "publishSucceedLink": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Bekijk site" } }
  },
  "lastPublishedDomainDate": {
    "neverPublished": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "nooit" } },
    "lastPublished": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Laatst gepubliceerd:" } }
  },
  "imageElementForm": {
    "invalidUrlError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "URL is ongeldig" } },
    "altTextTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Alt tekst" } },
    "altTextDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wordt gebruikt door schermlezers en weergegeven als de afbeelding niet kan worden geladen" } },
    "fileLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Afbeeldingsbestand" } },
    "fileSourceTypeURL": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "URL" } },
    "fileSourceTypeUpload": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Uploaden" } },
    "urlWarning": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Opmerking: zorg ervoor dat u controle heeft over de ingevoerde URL of deze vertrouwt." } },
    "uploadFileButton": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Upload bestand" } },
    "maxWidthLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Max breedte" } },
    "maxHeightLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Max hoogte" } },
    "maxHeightPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Voer een maximale hoogte in pixels in." } },
    "maxWidthPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Voer een maximale breedte in als percentage." } },
    "imageConstraintsLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Beperkingen" } },
    "imageConstraintFullWidth": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Uitbreiden tot max breedte" } },
    "imageConstraintCover": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Omslag" } },
    "imageConstraintCoverDisabled": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Niet beschikbaar met lege maximumhoogte." } },
    "imageConstraintContain": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Bevat" } },
    "imageConstraintContainDisabled": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Niet beschikbaar met een maximale hoogte." } }
  },
  "domainSettings": {
    "titleOverview": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Domeinen" } },
    "noDomainMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Je hebt nog geen domein aan deze applicatie gekoppeld. Je moet een domein toevoegen om uw applicatie te kunnen publiceren. Je kunt verschillende versies van je applicatie publiceren voor elk domein dat hier wordt vermeld." } },
    "titleAddDomain": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Domein toevoegen" } },
    "addDomain": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Domein toevoegen" } }
  },
  "domainCard": {
    "refresh": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Instellingen vernieuwen" } },
    "detailLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Toon details" } },
    "unpublishedDomainWarning": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Publiceer de applicatie om deze beschikbaar te maken op dit domein." } }
  },
  "domainTypes": {
    "customName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aangepast domein" } },
    "subDomain": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Subdomein van " }, { "t": 4, "k": "domain" }] } },
    "subDomainName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Subdomein" } }
  },
  "linkElement": {
    "noValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Naamloos..." } },
    "missingValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ontbrekende linktekst..." } },
    "emptyValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Lege linktekst..." } }
  },
  "linkElementForm": {
    "text": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tekst" } },
    "textPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tekst invoeren..." } },
    "navigateTo": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Navigeer naar" } },
    "navigateToNotSet": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Geen bestemming" } },
    "navigateToCustom": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aangepaste URL" } },
    "variantButton": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Knop" } },
    "width": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Breedte" } },
    "target": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Open in..." } },
    "targetSelf": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zelfde tabblad" } },
    "paramsInErrorDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "De opgeslagen parameters komen niet overeen met de paginaparameters. De pagina is waarschijnlijk verwijderd of bijgewerkt." } },
    "pageParameterTypeError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ongeldig type" } },
    "url": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Bestemmings-URL" } },
    "widthAuto": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Auto" } },
    "targetNewTab": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nieuw tabblad" } },
    "urlPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Voer een URL in..." } },
    "variant": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Variant" } },
    "widthFull": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Volle breedte" } },
    "variantLink": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Link" } },
    "paramPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Voer een waarde in..." } },
    "paramsInErrorButton": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Parameters bijwerken" } },
    "buttonColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kleur knop" } }
  },
  "alignmentSelector": {
    "alignment": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Uitlijning" } },
    "alignmentLeft": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Link" } },
    "alignmentCenter": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Centreren" } },
    "alignmentRight": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Rechts" } }
  },
  "pageSettings": {
    "pageUpdatedTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Gewijzigd" } },
    "pageUpdatedDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "De pagina-instellingen zijn bijgewerkt." } },
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pagina" } }
  },
  "pathParamTypes": {
    "textName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tekst" } },
    "numericName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Numeriek" } }
  },
  "publicPage": {
    "siteNotFound": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Site niet gevonden" } },
    "pageNotFound": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pagina niet gevonden" } },
    "loginToastTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Authenticatie succesvol" } },
    "loginToastMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Je bent succesvol aangemeld." } },
    "authorizedToastTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Authenticatie vereist" } },
    "authorizedToastMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Je moet ingelogd zijn om toegang te krijgen tot deze pagina. Log in om verder te gaan." } }
  },
  "integrationSettings": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Integraties" } },
    "integrationMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Je kunt nieuwe integraties maken door een databron, actie of gebruikersauthenticatie toe te voegen." } },
    "noIntegrationMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Je hebt nog geen integraties gemaakt. Je kunt ze maken door een databron, actie of gebruikersauthenticatie toe te voegen." } }
  },
  "dataSourceForm": {
    "addIntegration": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nieuwe integratie toevoegen" } },
    "noIntegrations": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "je hebt nog geen integratie" } },
    "integrationPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Selecteer een integratie" } },
    "errorUniqueName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Data bron naam moet uniek zijn." } },
    "selectTypeFirst": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Selecteer eerst de dienst" } },
    "servicePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Selecteer een dienst" } },
    "namePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Bron naam" } },
    "actionLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Actie" } },
    "nameLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Naam" } },
    "integrationLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Integratie" } }
  },
  "dataSourceContext": {
    "addDataSource": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nieuwe gegevensbron toevoegen" } },
    "noDataSourceTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Je hebt nog geen data toegevoegd" } },
    "noDataSourceMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Data kan worden gebruikt om gegevens op te halen uit interne of externe bronnen en deze op de pagina weer te geven." } },
    "sharedDataSourceTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Gedeeld tussen pagina's" } },
    "pageDataSourceTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Voor deze pagina" } },
    "sharedDataSourceDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Toegankelijk op elke pagina en wordt eenmalig opgehaald bij de eerste keer dat de pagina wordt geladen." } },
    "pageDataSourceDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wordt opgehaald wanneer de gebruiker naar deze pagina navigeert." } }
  },
  "imageElement": {
    "emptyState": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Geen alt-tekst gedefinieerd..." } },
    "emptyValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Lege alt-tekst..." } },
    "missingValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ontbrekende alt-tekst..." } }
  },
  "elementForms": {
    "textInputPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Voer tekst in..." } },
    "urlInputPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Voer url in..." } },
    "invalidFormula": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "De formule is ongeldig" } }
  },
  "dnsStatus": {
    "hostHeader": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Host" } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ga naar de DNS-instellingen van je domeinen en breng de volgende wijzigingen aan" } },
    "valueHeader": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Waarde" } },
    "typeHeader": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Type" } }
  },
  "customDomainForm": {
    "domainNameLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Domeinnaam" } },
    "notUniqueDomain": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Het opgegeven domein is al in gebruik" } },
    "invalidDomain": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "De opgegeven domeinnaam is ongeldig" } }
  },
  "pageSettingsTypes": {
    "pageName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pagina" } }
  },
  "dataProviderType": {
    "currentRecord": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Gegevensbron" } },
    "pageParameter": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Parameter" } },
    "dataSource": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Data rijen" } },
    "formData": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Formuliergegevens" } },
    "user": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Gebruiker" } },
    "previousAction": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Vorige actie" } },
    "dataSourceContext": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Beschikbare opties" } },
    "metadata": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Metadata" } }
  },
  "tableElementForm": {
    "addField": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "veld toevoegen" } },
    "itemsPerPage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Items per pagina" } },
    "fieldType": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Type" } },
    "fieldValueLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Waarde" } },
    "fieldDefaultName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kolom" } },
    "dataSource": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Gegevensbron" } },
    "fieldValuePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Waarde invoeren..." } },
    "itemsPerPagePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Waarde invoeren..." } },
    "fields": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Velden" } },
    "selectSourceFirst": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kies een lijstgegevensbron om te beginnen met het configureren van je velden." } },
    "buttonColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kleur knop" } },
    "refreshFieldsFromDataSource": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "velden van gegevensbron verversen" } },
    "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Naam" } },
    "orientation": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ori\xEBntatie" } },
    "orientationHorizontal": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Horizontaal" } },
    "orientationVertical": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Verticaal" } },
    "buttonLoadMoreLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Toon meer label" } },
    "propertySelectorMissingArrays": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Geen velden met meerdere waarden gevonden om als rijen te gebruiken." } },
    "noName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Geen naam" } }
  },
  "linkFieldForm": {
    "fieldLinkNamePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Waarde invoeren..." } },
    "fieldValuePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Waarde invoeren..." } },
    "fieldLinkNameLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Link tekst" } },
    "fieldValueLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Url" } },
    "buttonColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kleur knop" } }
  },
  "verticalAlignmentSelector": {
    "alignmentTop": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Boven" } },
    "alignmentBottom": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Onderkant" } },
    "alignmentCenter": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Midden" } },
    "alignment": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Verticale uitlijning" } }
  },
  "horizontalAlignmentSelector": {
    "alignmentLeft": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Link" } },
    "alignmentRight": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Rechts" } },
    "alignment": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Horizontaal uitlijnen" } },
    "alignmentCenter": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Centreren" } }
  },
  "defaultStyleForm": {
    "widthLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Breedte" } },
    "boxTop": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Bovenkant" } },
    "backgroundLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Achtergrond" } },
    "backgroundColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Achtergrond kleur" } },
    "boxBottom": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Onderkant" } },
    "boxRight": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Rechts" } },
    "boxLeft": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Links" } },
    "backgroundImage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Afbeelding" } },
    "backgroundImageMode": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Vulmodus" } },
    "cssClasses": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "CSS-klassen" } },
    "cssClassesHelp": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Stel een door spaties gescheiden lijst in van klassen voor dit element die zullen verschijnen in de gegenereerde HTML." } },
    "cssClassesPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "CSS-klassen invoeren..." } }
  },
  "updateUserSourceForm": {
    "nameFieldLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Naam" } },
    "nameFieldPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Voer een naam in..." } },
    "integrationFieldLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Integratie" } },
    "authTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Authenticatie" } },
    "addProvider": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Provider toevoegen" } }
  },
  "mainThemeConfigBlock": {
    "colorsLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kleuren" } },
    "primaryColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Primair" } },
    "headingValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Kop <h" }, { "t": 4, "k": "i" }, { "t": 3, "v": ">" }] } },
    "typography": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Typografie" } },
    "headingLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Kop " }, { "t": 4, "k": "i" }, { "t": 3, "v": " (h" }, { "t": 4, "k": "i" }, { "t": 3, "v": ")" }] } },
    "secondaryColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Secundair" } }
  },
  "inputTextElementForm": {
    "placeholderPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Voer een placeholder in (optioneel)" } },
    "valueTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Standaardwaarde" } },
    "valuePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Voer een standaardwaarde in (optioneel)" } },
    "placeholderTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Placeholder" } },
    "labelTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Label" } },
    "requiredTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Vereist" } },
    "labelPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Voer een label in (optioneel)" } },
    "multilineTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Meerdere regels" } },
    "rowsTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aantal regels" } },
    "rowsPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Voer het aantal rijen van deze invoer in" } },
    "validationTypeAnyLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Elke" } },
    "validationTypeIntegerLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nummer" } },
    "validationTypeEmailLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "E-mail" } },
    "validationTypeEmailDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dwing een e-mailadres waarde af in deze invoer." } },
    "validationTypeAnyDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sta toe dat deze invoer een willekeurige waarde bevat." } },
    "validationTypeIntegerDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dwing een getalwaarde af in deze invoer." } },
    "inputTypePasswordLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wachtwoord" } },
    "passwordTypeWarning": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wachtwoorden zijn gevoelige gegevens. Wees voorzichtig met hoe je wachtwoorden behandelt en opslaat in je applicatie." } },
    "inputType": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Input type" } },
    "inputTypeTextLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tekst" } }
  },
  "widthSelector": {
    "widthFull": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Volledige breedte" } },
    "widthAuto": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Auto" } },
    "width": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Breedte" } }
  },
  "buttonElementForm": {
    "valuePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Voer tekst in..." } },
    "valueLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tekst" } },
    "buttonColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kleur knop" } }
  },
  "workflowActionTypes": {
    "updateRowLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Rij bijwerken" } },
    "createRowLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Rij maken" } },
    "notificationLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Melding tonen" } },
    "openPageLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pagina openen" } },
    "logoutLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Uitloggen" } },
    "refreshDataSourceLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Gegevensbron verversen" } },
    "deleteRowLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Verwijder Rij" } },
    "httpRequest": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Stuur HTTP verzoek" } },
    "errorNavigateToPageMissing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ontbreekt Navigeer naar eigenschap" } },
    "errorPageParameterInError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ten minste \xE9\xE9n paginaparameter is verkeerd geconfigureerd" } },
    "errorNavigationUrlMissing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ontbrekende URL-eigenschap voor navigatie" } },
    "errorDataSourceMissing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Geen gegevensbron geselecteerd" } }
  },
  "widthTypes": {
    "full": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Volledige breedte" } },
    "small": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Klein" } },
    "medium": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Medium" } },
    "normal": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Normaal" } },
    "fullBleed": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Full bleed" } },
    "fullWidth": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Volledige breedte" } }
  },
  "userSourceSettings": {
    "titleOverview": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Gebruiker bronnen" } },
    "titleUpdateUserSource": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Gebruikersbron bewerken" } },
    "titleAddUserSource": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nieuwe gebruikersbron" } },
    "addUserSource": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Gebruikersbron toevoegen" } },
    "noUserSourceMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "U hebt nog geen gebruikersbron toegevoegd aan deze applicatie. U moet een gebruikersbron toevoegen als u wilt dat gebruikers uw applicatie kunnen authenticeren." } }
  },
  "upsertRowWorkflowActionForm": {
    "rowIdPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Selecteer een rij-ID" } },
    "fieldMappingPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kies een veldwaarde" } },
    "integrationDropdownLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Integratie" } },
    "rowIdLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Rij ID" } },
    "noTableSelectedMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kies een tabel om te beginnen met het configureren van je velden." } }
  },
  "subDomainDetails": {
    "text": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "De DNS-instellingen van de domeinnaam zijn al geconfigureerd en gecontroleerd. Het werkt zonder extra wijzigingen." } }
  },
  "columnElementForm": {
    "columnGapPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Voer ruimte in tussen kolommen..." } },
    "columnGapTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ruimte tussen kolommen" } },
    "columnAmountTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Layout" } },
    "columnAmountName": { "t": 0, "b": { "t": 1, "c": [{ "t": 2, "i": [{ "t": 3 }], "s": "geen kolommen" }, { "t": 2, "i": [{ "t": 3 }], "s": "1 kolom" }, { "t": 2, "i": [{ "t": 4, "k": "columnAmount" }, { "t": 3, "v": " kolommen" }] }] } },
    "verticalAlignment": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Verticale uitlijning" } },
    "customLayout": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aangepast" } },
    "customWeightsTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aangepaste kolomgewichten" } },
    "customWeightsHelper": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Gebruik 0 wanneer een kolom slechts zo breed moet zijn als de inhoud. Andere kolommen verdelen de resterende ruimte." } },
    "errorCustomWeightsMinimum": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kolomgewichten moeten 0 of hoger zijn" } },
    "columnStackingTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kolommen stapelen per apparaattype" } },
    "columnStackingHorizontal": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Naast elkaar" } },
    "columnStackingStacked": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Gestapeld" } }
  },
  "notificationWorkflowActionForm": {
    "descriptionLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Beschrijving" } },
    "descriptionPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tekst invoeren..." } },
    "titleLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Titel" } },
    "titlePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tekst invoeren..." } }
  },
  "currentRecordDataProviderType": {
    "index": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Index" } },
    "firstPartName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Gegevensbron: " }, { "t": 4, "k": "name" }] } },
    "schemaProperty": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "prefixName" }, { "t": 3, "v": ": " }, { "t": 4, "k": "schemaProperty" }] } }
  },
  "domainForm": {
    "notUniqueDomain": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "De opgegeven domeinnaam is al in gebruik" } },
    "invalidDomain": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "De opgegeven domeinnaam is ongeldig" } }
  },
  "dispatchWorkflowActionError": {
    "defaultMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Er is een fout opgetreden die deze gebeurtenis heeft veroorzaakt." } },
    "defaultTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Gebeurtenis fout" } },
    "formDataInvalidTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ongeldig formulier" } },
    "formDataInvalidMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Een of meer velden bevatten ongeldige waarden." } }
  },
  "openPageWorkflowActionForm": {
    "urlLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "URL" } },
    "urlPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tekst invoeren..." } }
  },
  "collectionFieldType": {
    "text": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tekst" } },
    "link": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Link" } },
    "boolean": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Boolean" } },
    "tags": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tags" } },
    "button": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Knop" } },
    "image": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Afbeelding" } },
    "rating": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Beoordeling" } },
    "errorValueMissing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ontbrekende waarde eigenschap" } }
  },
  "createUserSourceForm": {
    "userSourceName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Naam" } },
    "userSourceIntegration": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Integratie" } },
    "userSourceType": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Type" } }
  },
  "event": {
    "addAction": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "actie toevoegen" } }
  },
  "buttonElement": {
    "noValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Naamloos..." } },
    "missingValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ontbrekende knop tekst..." } },
    "emptyValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Lege knop tekst..." } }
  },
  "formDataProviderType": {
    "nodeMissing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ontbrekend" } }
  },
  "textFieldForm": {
    "fieldValuePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Waarde invoeren..." } },
    "fieldValueLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Waarde" } }
  },
  "tableElement": {
    "empty": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Er zijn geen items gevonden." } },
    "showMore": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Meer tonen" } }
  },
  "fontSidePanelForm": {
    "label": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Lettertype" } }
  },
  "styleBoxForm": {
    "borderLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Grens" } },
    "paddingLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Opvulling" } },
    "error": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "De waarde moet een geheel getal zijn tussen 0 en 200." } },
    "borderColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kleur rand" } },
    "marginLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Marge" } }
  },
  "backgroundTypes": {
    "color": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kleur" } },
    "none": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Geen" } }
  },
  "pagePreview": {
    "emptyMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Klik om het eerste element te maken" } },
    "header": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "HEADER" } },
    "footer": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "FOOTER" } },
    "fixedHeader": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "VASTE HEADER" } },
    "fixedFooter": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "VASTE FOOTER" } }
  },
  "eventTypes": {
    "submitLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Op versturen" } },
    "clickLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Op klik" } },
    "afterLoginLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Na inloggen" } }
  },
  "formContainerElementForm": {
    "submitButtonLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Verstuur knop" } },
    "submitButtonPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Waarde invoeren..." } },
    "buttonColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kleur knop" } },
    "resetToInitialValuesTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Terugzetten naar standaardwaarden na verzenden" } },
    "resetToInitialValuesDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Als aangevinkt, worden de standaardwaarden van het formulier gebruikt om het formulier te resetten na een succesvolle verzending. Als niet aangevinkt, blijven de waarden van de gebruiker behouden." } }
  },
  "subDomainForm": {
    "domainNameLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Domeinnaam" } }
  },
  "linkField": {
    "details": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Details" } }
  },
  "getFormulaComponent": {
    "errorTooltip": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ongeldige referentie" } }
  },
  "generalForm": {
    "labelTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Label" } },
    "labelPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Voer een label in (optioneel)" } },
    "valueTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Standaardwaarde" } },
    "valuePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Voer een standaardwaarde in (optioneel)" } },
    "placeholderTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Placeholder" } },
    "placeholderPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Voer een placeholder in (optioneel)" } },
    "requiredTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Verplicht" } },
    "validationTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Validatie" } },
    "defaultValueTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Standaardwaarde" } },
    "defaultValuePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Standaardwaarde invoeren" } }
  },
  "linkNavigationSelection": {
    "urlPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Voer een URL in..." } },
    "navigateToCustom": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aangepaste URL" } },
    "navigateTo": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Navigeer naar" } },
    "paramPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Voer een waarde in..." } },
    "url": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Bestemmings URL" } },
    "paramsInErrorDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "De opgeslagen parameters komen niet overeen met de paginaparameters. De pagina is waarschijnlijk verwijderd of bijgewerkt." } },
    "paramsInErrorButton": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Parameters bijwerken" } },
    "target": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Open in..." } },
    "targetSelf": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zelfde tab" } },
    "targetNewTab": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nieuw tabblad" } }
  },
  "iframeElementForm": {
    "empty": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Leeg IFrame..." } },
    "sourceTypeLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Bron soort" } },
    "urlLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "URL" } },
    "urlPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Link naar de externe bron die moet worden ingesloten" } },
    "urlHelp": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Opmerking: zorg ervoor dat je controle hebt over de ingevoerde URL of dat je deze vertrouwt." } },
    "embedLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Insluiten" } },
    "embedPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ruwe HTML-inhoud die moet worden ingesloten" } },
    "heightLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Hoogte (px)" } },
    "heightPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Hoogte in pixels" } },
    "missingValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "IFrame bron ontbreekt..." } },
    "emptyValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Lege IFrame bron..." } }
  },
  "dropdownOptionSelector": {
    "label": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Opties" } },
    "value": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Waarde" } },
    "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Naam" } },
    "addOption": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "optie toevoegen" } }
  },
  "checkboxElementForm": {
    "labelTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Label" } },
    "valueTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Standaardwaarde" } },
    "requiredTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Verplicht" } }
  },
  "dispatchDataSourceError": {
    "defaultMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Er is een fout opgetreden tijdens het laden van gegevens voor de pagina." } },
    "defaultTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Fout bij het laden van gegevens" } }
  },
  "authFormElementForm": {
    "userSource": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Gebruiker bron" } }
  },
  "authFormElement": {
    "email": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "E-mail" } },
    "passwordPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Voer je wachtwoord in..." } },
    "selectOrConfigureUserSourceFirst": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kies een gebruikersbron om dit aanmeldingselement te gaan gebruiken." } },
    "password": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wachtwoord" } },
    "emailPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Voer uw e-mailadres in..." } }
  },
  "userSourceUsersContext": {
    "searchPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Gebruiker zoeken" } },
    "noEmail": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Geen e-mail" } },
    "anonymous": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Anoniem" } },
    "unnamed": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Naamloos" } }
  },
  "userSelector": {
    "viewAs": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Weergeven als: " }, { "t": 4, "k": "user" }] } },
    "anonymous": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Anoniem" } },
    "member": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "prefix" }, { "t": 3, "v": " lid" }] } }
  },
  "formContainerElement": {
    "submitDeactivatedText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Vul alle verplichte velden in om te verzenden" } },
    "defaultSubmitButtonLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Verstuur" } }
  },
  "visibilityForm": {
    "allVisitors": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Alle bezoekers" } },
    "loggedInVisitors": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aangemelde bezoekers" } },
    "notLoggedInVisitors": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Uitgelogde bezoekers" } },
    "warningMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Op dit moment wordt de zichtbaarheid alleen toegepast in de UI, de onderliggende gegevens zijn nog steeds toegankelijk via de API. Raadpleeg de &lt;a href='https://baserow.io/user-docs/application-builder-element-visibility#note-accessing-hidden-data-via-api'&gt;documentatie&lt;/a&gt; voor meer informatie over gegevensbeveiliging." } },
    "warningTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "We verbeteren voortdurend de beveiliging" } },
    "excludedRolesLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "alle rollen behalve" } },
    "switchAllowLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sta toe" } },
    "switchDisallowLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Niet toestaan" } },
    "rolesSelectAll": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Selecteer alles" } },
    "rolesDeselectAll": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Deselecteer alles" } },
    "rolesSelectHint": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Selecteer een of meer rollen" } },
    "roleTypesHint": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Selecteer een type rol" } },
    "roleTypeAllowAllRoles": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Alle rollen" } },
    "roleTypeAllowAllRolesExcept": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Rollen niet toestaan..." } },
    "roleTypeDisallowAllRolesExcept": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Rollen toestaan..." } },
    "rolesAllMembersOf": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Alle leden van " }, { "t": 4, "k": "name" }] } },
    "noRole": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Geen rol" } },
    "errorFetchingRolesTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kan gebruikersrollen niet ophalen" } },
    "errorFetchingRolesMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Er is een probleem opgetreden tijdens het ophalen van gebruikersrollen." } },
    "visibilityCondition": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zichtbaarheid voorwaarde" } },
    "visibilityConditionHelper": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Als het resultaat van deze formule waar is en de bezoekerskeuze hierboven waar is, zal het element zichtbaar zijn. Deze voorwaarde be\xEFnvloedt alleen de zichtbaarheid van het element. Als u in plaats daarvan gegevens wilt uitsluiten van het serverantwoord, gebruikt u de bovenstaande filteroptie voor gebruikersrollen." } },
    "visibilityConditionPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Voorwaarde..." } },
    "documentationLink": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "documentatie" } }
  },
  "imageInput": {
    "labelButton": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Uploaden" } },
    "labelDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Standaard beschrijving" } }
  },
  "generalSettings": {
    "labelForm": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Favicon" } },
    "labelDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kies een 128x128px ICO, PNG, GIF of JPEG." } },
    "labelButton": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Favicon uploaden" } },
    "cantUploadFaviconTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kon favicon bestand niet uploaden" } },
    "cantUploadFaviconDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sorry, kon favicon afbeelding niet uploaden. Zorg ervoor dat het afbeeldingsbestand uniek is en een ondersteund afbeeldingsformaat heeft." } },
    "cantUpdateApplicationTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Applicatie kan niet worden bijgewerkt" } },
    "cantUpdateApplicationDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sorry, kon de applicatie niet bijwerken." } },
    "titleOverview": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Algemeen" } }
  },
  "repeatElementForm": {
    "dataSource": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Gegevensbron" } },
    "itemsPerRowDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kies per apparaattype wat het aantal herhalingen per rij moet zijn." } },
    "orientationVertical": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Verticaal" } },
    "orientationLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ori\xEBntatie" } },
    "orientationHorizontal": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Horizontaal" } },
    "itemsPerPage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Items per pagina" } },
    "itemsPerPagePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Waarde invoeren..." } },
    "itemsPerRowLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Items per rij" } },
    "buttonLoadMoreLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Toon meer label" } },
    "toggleEditorRepetitionsLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Herhalingen tijdelijk uitschakelen" } },
    "propertySelectorMissingArrays": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Geen velden met meerdere waarden gevonden om mee te herhalen." } },
    "gapLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ruimte tussen herhalingen" } },
    "gapVerticalLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Verticaal" } },
    "gapHorizontalLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Horizontaal" } }
  },
  "userDataProviderType": {
    "isAuthenticated": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Is ingelogd" } },
    "id": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Id" } },
    "email": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "E-mail" } },
    "username": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Gebruikersnaam" } },
    "role": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Rol" } }
  },
  "buttonField": {
    "noLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Naamloos..." } }
  },
  "repeatElement": {
    "showMore": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Meer tonen" } },
    "missingDataSourceTooltip": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kies een gegevensbron om te beginnen met het toevoegen van elementen." } },
    "empty": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Er zijn geen items gevonden." } },
    "missingSchemaPropertyTooltip": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kies een eigenschap om te beginnen met het toevoegen van elementen." } },
    "emptyState": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Geen rijen gevonden." } }
  },
  "tagsFieldForm": {
    "fieldValuesLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Waarden" } },
    "fieldValuesPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Waarden invoeren..." } },
    "fieldColorsLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kleuren" } },
    "fieldColorsPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Voer kleuren in..." } }
  },
  "buttonFieldForm": {
    "infoMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": 'Om acties voor deze knop te configureren, open je het tabblad "Gebeurtenissen" van het huidige element.' } },
    "labelPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Voer een label in..." } }
  },
  "themeConfigBlockType": {
    "color": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kleuren" } },
    "page": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pagina" } },
    "typography": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Typografie" } },
    "link": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Link" } },
    "button": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Knop" } },
    "image": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Afbeelding" } },
    "input": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Invoer" } },
    "table": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tabel" } }
  },
  "buttonThemeConfigBlock": {
    "defaultState": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Standaard staat" } },
    "hoverState": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Hover staat" } },
    "textAlignment": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tekstuitlijning" } },
    "alignment": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Uitlijning" } },
    "width": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Breedte" } },
    "textColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kleur tekst" } },
    "borderColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Border kleur" } },
    "borderSize": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Bordergrootte" } },
    "borderRadius": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Border radius" } },
    "padding": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Opvulling" } },
    "fontFamily": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Lettertype" } },
    "size": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Lettergrootte" } },
    "backgroundColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Achtergrond kleur" } },
    "button": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Knop" } },
    "weight": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Lettertype gewicht" } },
    "activeState": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Actieve status" } }
  },
  "linkThemeConfigBlock": {
    "color": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kleur" } },
    "link": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Link" } },
    "defaultState": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Standaard staat" } },
    "hoverState": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Hover staat" } },
    "alignment": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Uitlijning" } },
    "fontFamily": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Lettertype" } },
    "size": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Lettergrootte" } },
    "weight": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Lettertype gewicht" } },
    "activeState": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Actieve status" } },
    "decoration": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tekst decoratie" } }
  },
  "imageThemeConfigBlock": {
    "alignment": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Uitlijning" } },
    "maxWidthLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Max breedte" } },
    "maxHeightLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Max hoogte" } },
    "imageConstraintsLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Beperkingen" } },
    "imageConstraintCover": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Omslag" } },
    "imageConstraintCoverDisabled": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Niet beschikbaar met lege maximumhoogte." } },
    "imageConstraintContain": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Bevat" } },
    "imageConstraintContainDisabled": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Niet beschikbaar met een maximale hoogte." } },
    "maxWidthPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Voer een maximale breedte in" } },
    "maxHeightPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Maximale hoogte invoeren" } },
    "imageConstraintFullWidth": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Uitbreiden tot max breedte" } },
    "imageBorderRadiusLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Randradius" } },
    "imageBorderRadiusPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Voer de afbeelding rand radius in" } }
  },
  "choiceElementForm": {
    "multiple": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Meerdere waarden toestaan" } },
    "display": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Weergave" } },
    "dropdown": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dropdown" } },
    "checkbox": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Checkbox" } },
    "radio": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Radio" } }
  },
  "choiceOptionSelector": {
    "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Optie waargave namen" } },
    "namePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Naam invoeren" } },
    "addOption": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "optie toevoegen" } },
    "manual": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Handmatig" } },
    "dataSource": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Gegevensbron" } },
    "formulas": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Formules" } },
    "optionType": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Opties type" } },
    "label": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Opties" } },
    "value": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Optiewaarden" } },
    "valuePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Waarde invoeren" } },
    "addOptionDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Klik op 'optie toevoegen' om opties toe te voegen aan je vervolgkeuzelijst" } }
  },
  "choiceElement": {
    "addOptions": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Opties toevoegen om dit element te gaan gebruiken..." } }
  },
  "backgroundModes": {
    "tile": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tegel" } },
    "fill": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Vullen" } },
    "fit": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pas" } }
  },
  "customStyle": {
    "themeOverrides": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Thema overschrijvingen" } },
    "configureThemeOverrides": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Thema-overschrijvingen voor dit element configureren" } },
    "backToElement": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Terug naar element configuratie" } }
  },
  "colorThemeConfigBlock": {
    "errorColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Fout" } },
    "successColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Succes" } },
    "secondaryColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Secundair" } },
    "borderColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Border" } },
    "warningColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Waarschuwing" } },
    "primaryColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Primair" } },
    "transparent": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Transparant" } },
    "addCustomColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aangepaste kleur toevoegen" } },
    "customColorPrefix": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Maatwerk" } },
    "customColors": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aangepaste kleuren" } }
  },
  "colorThemeConfigBlockType": {
    "secondary": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Secundair" } },
    "success": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Succes" } },
    "warning": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Waarschuwing" } },
    "error": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Fout" } },
    "primary": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Primair" } },
    "border": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Border" } },
    "transparent": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Transparant" } }
  },
  "pageThemeConfigBlock": {
    "backgroundColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Achtergrond kleur" } },
    "backgroundImage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Achtergrondafbeelding" } },
    "backgroundMode": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Achtergrondmodus" } }
  },
  "typographyThemeConfigBlock": {
    "size": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Maat" } },
    "textAlignment": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Uitlijning" } },
    "headingLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Kop " }, { "t": 4, "k": "i" }, { "t": 3, "v": " (h" }, { "t": 4, "k": "i" }, { "t": 3, "v": ")" }] } },
    "headingValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Kop <h" }, { "t": 4, "k": "i" }, { "t": 3, "v": ">" }] } },
    "color": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kleur" } },
    "fontFamily": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Lettertype" } },
    "bodyLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Body" } },
    "weight": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Gewicht" } },
    "decoration": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tekst decoratie" } }
  },
  "resetButton": {
    "reset": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Terugzetten naar standaard themawaarde" } }
  },
  "inputThemeConfigBlock": {
    "label": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Label" } },
    "input": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Invoer" } },
    "backgroundColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Achtergrond kleur" } },
    "textColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kleur tekst" } },
    "borderColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kleur rand" } },
    "borderSize": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Randgrootte" } },
    "borderRadius": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Randradius" } },
    "padding": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Opvulling" } },
    "fontFamily": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Lettertype" } },
    "size": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Lettergrootte" } },
    "weight": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Lettertype gewicht" } }
  },
  "tableThemeConfigBlock": {
    "borderColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kleur rand" } },
    "backgroundAlternateColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Even rij kleur" } },
    "textColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kleur tekst" } },
    "borderSize": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Randgrootte" } },
    "fontSize": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Lettergrootte" } },
    "table": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tabel" } },
    "header": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kop" } },
    "alignment": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Uitlijning" } },
    "cells": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cellen" } },
    "separators": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Scheiders" } },
    "verticalSeparatorColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Verticale kleur" } },
    "verticalSeparatorSize": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Verticale grootte" } },
    "horizontalSeparatorColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Horizontale kleur" } },
    "horizontalSeparatorSize": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Horizontale grootte" } },
    "borderRadius": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Randradius" } },
    "padding": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Opvulling" } },
    "size": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Grootte" } },
    "backgroundColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Achtergrond kleur" } },
    "fontFamily": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Lettertype" } },
    "fontWeight": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Lettertype gewicht" } }
  },
  "dropdown": {
    "empty": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Geen opties beschikbaar" } }
  },
  "abTable": {
    "empty": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Er zijn geen items gevonden." } },
    "loading": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aan het laden..." } }
  },
  "localBaserowServiceForm": {
    "rowIdPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Selecteer een rij ID" } },
    "rowIdLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Rij ID" } },
    "integrationDropdownLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Integratie" } }
  },
  "fieldMappingContext": {
    "enableField": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Veld inschakelen" } },
    "disableField": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Veld uitschakelen" } }
  },
  "collectionElementForm": {
    "noSchemaPropertyMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kies een eigenschap in de gegevensbron om te gebruiken als de lijstgegevens van je element." } },
    "noDataSourceMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kies een gegevensbron met meerdere rijen om alle resultaten weer te geven, of een gegevensbron met \xE9\xE9n rij om een eigenschap in deze rij te kiezen." } },
    "propertyOptionLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Acties van gebruikers" } }
  },
  "imageFieldForm": {
    "fieldAltHelp": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wordt gebruikt door schermlezers en weergegeven als de afbeelding niet kan worden geladen" } },
    "fieldSrcPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Waarde invoeren" } },
    "fieldSrcLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Afbeelding bron" } },
    "fieldAltLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Alt tekst" } },
    "fieldAltPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Waarde invoeren..." } }
  },
  "serviceSchemaPropertySelector": {
    "label": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Eigenschap" } },
    "noProperties": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Geen eigenschappen beschikbaar" } }
  },
  "dataSourceDropdown": {
    "noDataSources": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Geen gegevensbronnen beschikbaar" } },
    "label": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Gegevensbron" } },
    "shared": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "gedeeld" } },
    "pageOnly": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "deze pagina" } },
    "noSharedDataSources": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Geen gedeelde gegevensbronnen beschikbaar" } },
    "addNew": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Voeg nieuwe data bron toe" } }
  },
  "recordSelectorElementForm": {
    "selectRecordsFrom": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Records selecteren uit" } },
    "optionNameSuffix": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Optie naam achtervoegsel" } },
    "optionNameSuffixPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Voer een achtervoegsel in..." } },
    "optionNameSuffixHelper": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dit achtervoegsel wordt toegevoegd aan elke optienaam wanneer je de vervolgkeuzelijst opent en helpt om ze te onderscheiden." } },
    "itemsPerPage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Items per pagina" } },
    "record": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Record " }, { "t": 4, "k": "id" }] } },
    "noDataSourceMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kies een gegevensbron met meerdere rijen om alle resultaten te vermelden." } },
    "itemsPerPagePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Waarde invoeren..." } },
    "multipleLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Meerdere waarden toestaan" } }
  },
  "dataSourceItemContext": {
    "unshareBetweenPages": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Stop delen met andere pagina's" } },
    "shareBetweenPages": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Delen tussen pagina's" } }
  },
  "dataSourceCreateEditModal": {
    "sharedWarning": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Deze gegevensbron wordt gedeeld, dus je wijzigingen kunnen invloed hebben op meerdere pagina's." } },
    "editTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Gegevensbron bewerken" } },
    "createTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Gegevensbron maken" } }
  },
  "propertyOptionForm": {
    "searchHeading": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zoeken" } },
    "filterHeading": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Filter" } },
    "sortHeading": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sorteren" } },
    "fieldHeading": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Veld" } },
    "noPropertiesAvailable": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Geen velden beschikbaar." } },
    "optionUnavailable": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Niet beschikbaar" } },
    "formDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kies op welke eigenschappen in de gegevensbron van dit element externe gebruikers kunnen filteren, sorteren en zoeken." } }
  },
  "dataSourceItem": {
    "notConfigured": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Niet geconfigureerd" } }
  },
  "recordSelectorElement": {
    "emptyAdhocState": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Geen rijen gevonden die overeenkomen met '" }, { "t": 4, "k": "query" }, { "t": 3, "v": "'." }] } },
    "emptyState": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Geen rijen gevonden." } }
  },
  "common": {
    "dateFormatEU": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Europees" } },
    "dateFormatTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Datum formaat" } },
    "dateFormatUS": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "VS" } },
    "dateFormatISO": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "ISO" } },
    "timeFormatTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tijdformaat" } },
    "timeFormat24Hour": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "24 uur" } },
    "timeFormat12Hour": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "12 uur" } }
  },
  "dateTimePickerElementForm": {
    "includeTime": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Inclusief tijd" } },
    "invalidDateError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ongeldige datum. Controleer of de ingevoerde datum overeenkomt met het opgegeven formaat." } }
  },
  "themeSettings": {
    "titleOverview": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Thema" } }
  },
  "pageVisibilitySettingsTypes": {
    "pageName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zichtbaarheid" } },
    "logInPageWarningTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "De login pagina is niet ingesteld" } },
    "logInPagewarningMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Als een anonieme gebruiker deze pagina probeert te openen, wordt hij doorgestuurd naar een inlogpagina. Stel de login pagina in bij de algemene instellingen van de applicatie." } },
    "logInPageInfoTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Anonieme gebruikers worden omgeleid" } },
    "logInPageInfoMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Anonieme gebruikers die deze pagina proberen te openen, worden doorgestuurd naar de " }, { "t": 4, "k": "logInPageName" }, { "t": 3, "v": " pagina." }] } }
  },
  "pageVisibilitySettings": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zichtbaarheid" } },
    "allVisitors": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Alle bezoekers" } },
    "loggedInVisitors": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aangemelde bezoekers" } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wie kan deze pagina zien" } }
  },
  "pageEditor": {
    "pageNotFound": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pagina niet gevonden" } },
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Applicatie bouwer" } }
  },
  "builderLoginPageForm": {
    "pageDropdownDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Selecteer de aanmeldpagina waar niet-ingelogde gebruikers naar moeten worden omgeleid als ze een pagina met verboden proberen te openen." } },
    "pageDropdownLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Login pagina" } },
    "pageDropdownPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Selecteer een pagina" } }
  },
  "multiPageContainerElementForm": {
    "pagePosition": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Positie" } },
    "behaviour": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Gedrag" } },
    "display": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Weergave" } },
    "selectAll": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Selecteer alles" } },
    "deselectAll": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Deselecteer alles" } }
  },
  "pageShareType": {
    "except": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Geselecteerde pagina's uitsluiten" } },
    "all": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Op alle pagina's" } },
    "only": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Alleen op geselecteerde pagina's" } }
  },
  "fontWeightType": {
    "thin": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dun" } },
    "medium": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Middel" } },
    "light": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Licht" } },
    "extraLight": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Extra licht" } },
    "extraBold": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Extra vet" } },
    "regular": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Normaal" } },
    "bold": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Vet" } },
    "semiBold": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Halfvet" } },
    "black": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zwart" } },
    "extraBlack": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Extra zwart" } }
  },
  "authProviderWithModal": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Bewerk provider: " }, { "t": 4, "k": "name" }] } },
    "authProviderInError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Bewerk deze provider om de fout te herstellen." } }
  },
  "queryParamTypes": {
    "textName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tekst" } },
    "numericName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Numeriek" } }
  },
  "radiusStyleForm": {
    "cornerRadiusLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Hoekradius" } },
    "backgroundRadiusLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Achtergrond" } },
    "borderRadiusLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Rand" } }
  },
  "addElementCategory": {
    "suggestedElement": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Voorgestelde elementen" } },
    "baseElement": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Basis elementen" } },
    "layoutElement": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Layout elementen" } },
    "formElement": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Formulier elementen" } }
  },
  "menuElement": {
    "spacer": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Spacer" } },
    "missingLinkValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ontbrekende linknaam..." } },
    "missingButtonValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ontbrekende knopnaam..." } },
    "emptyLinkValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Lege linknaam..." } },
    "missingValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ontbrekend menu-item" } },
    "separator": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Scheider" } },
    "emptyButtonValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Lege knopnaam..." } }
  },
  "menuElementForm": {
    "menuItemsLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Menu items" } },
    "addMenuItemLink": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Toevoegen..." } },
    "alignment": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Uitlijning" } },
    "menuItemDefaultName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pagina" } },
    "menuItemLabelLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Label" } },
    "menuItemTypeLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Type" } },
    "menuItemTypeItem": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Item" } },
    "menuItemTypeSeparator": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Scheider" } },
    "menuItemVariantLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Variant" } },
    "menuItemAddButton": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Knop" } },
    "eventDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Om acties te configureren voor deze knop, open de events van dit element." } },
    "noMenuItemsMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Klik 'Toevoegen' om je eerste menu item toe te voegen." } },
    "menuItemVariantLink": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Link" } },
    "menuItemAddSeparator": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Scheider" } },
    "menuItemSubLinkDefaultName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sublink" } },
    "addSubLink": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sublink toevoegen" } },
    "menuItemVariantButton": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Knop" } },
    "namePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pagina" } },
    "menuItemAddSpacer": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Spacer" } },
    "menuItemAddLink": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Link" } },
    "variant": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Variant per apparaattype" } },
    "expanded": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Uitgeklapt" } },
    "compact": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Compact" } },
    "previewCompactMenuLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Voorbeeld van compact menu" } },
    "previewCompactMenuHelper": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Toon/verberg het voorbeeld van het compacte menu." } },
    "openEditorCompactMenu": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Menu openen" } },
    "closeEditorCompactMenu": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Menu sluiten" } }
  },
  "simpleContainerElementForm": {
    "noConfigurationOptions": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Het container element heeft geen configuratieopties." } }
  },
  "orientations": {
    "vertical": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Vertical" } },
    "horizontal": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Horizontaal" } },
    "label": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ori\xEBntatie" } }
  },
  "ratingElementForm": {
    "thumbsUp": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Duimen omhoog" } },
    "maxValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Maximum" } },
    "color": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kleur" } },
    "star": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ster" } },
    "flag": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Vlag" } },
    "smile": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Lachen" } },
    "heart": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Hart" } },
    "ratingStyle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Stijl" } }
  },
  "ratingFieldForm": {
    "color": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kleur" } },
    "value": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Waarde" } },
    "maxValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Maximale waarde" } },
    "thumbsUp": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Duimen omhoog" } },
    "flag": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Vlag" } },
    "style": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Stijl" } },
    "heart": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Hart" } },
    "star": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ster" } }
  },
  "linkDecorations": {
    "plain": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Gewoon" } },
    "normal": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Normaal" } }
  },
  "textDecorationSelector": {
    "stroke": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Doorstreept" } },
    "italic": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cursief" } },
    "underline": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Onderstrepen" } },
    "uppercase": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Hoofdletters" } }
  },
  "userSourceDropdown": {
    "label": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Gebruiker bron" } },
    "addUserSource": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Voeg nieuwe gebruikersbron toe" } },
    "noUserSources": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Geen gebruikersbronnen beschikbaar" } }
  },
  "abFileInput": {
    "delete": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Verwijder" } }
  },
  "automationSettingsModal": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Werkstroom" } }
  },
  "elementsGuidedTourStep": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Elementen toevoegen aan je pagina" } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Elke app heeft componenten nodig! Voeg elementen toe zoals tabellen, formulieren, knoppen en meer om je app tot leven te brengen." } }
  },
  "dataGuidedTourStep": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Verbind uw gegevens" } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Koppel hier je Baserow-tabellen om je gegevens dynamisch weer te geven, te filteren en bij te werken in verschillende elementen." } }
  },
  "previewGuidedTourStep": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Je controlecentrum" } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Hier configureer je de pagina's van je app. Voeg elementen toe, bekijk het resultaat en structureer je app precies zoals jij wilt." } }
  },
  "devicesGuidedTourStep": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Voorbeeld op verschillende apparaten" } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Schakel tussen previews voor desktop, tablet en mobiel om te zien hoe je app eruitziet op verschillende schermformaten. Zorg ervoor dat je ontwerp perfect werkt op alle apparaten!" } }
  },
  "sidePanelGuidedTourStep": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zijpaneel: Elementen aanpassen" } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "**Algemeen tabblad** - Configureer het geselecteerde element.\n\n**Tabblad Stijl** - Vulling, marge, randen en meer aanpassen.\n\n**Tabblad Zichtbaarheid** - Bepaal wie dit element kan zien: ingelogde gebruikers, uitgelogde gebruikers of specifieke rollen.\n\n**Tabblad Gebeurtenissen** - Als het element acties ondersteunt, configureer ze dan hier voor dynamische interactiviteit." } }
  },
  "previewPublishGuidedTourStep": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Je app bekijken en publiceren" } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Klik op **Preview** om je app priv\xE9 te testen. Als je klaar bent, klik je op **Publiceer** om de app te delen met het publiek via een domein." } }
  },
  "builderToast": {
    "details": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Details" } },
    "defaultTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Onverwachte fout" } },
    "defaultMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Er is een onverwachte fout opgetreden. Probeer het later nog eens." } },
    "invalidContextTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ongeldig verzoek" } },
    "invalidContextMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Het verzoek is ongeldig." } },
    "InvalidContentTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ongeldig formulier" } },
    "invalidContentMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Een of meer velden bevatten ongeldige waarden." } },
    "serviceMisconfiguredTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Onvolledige configuratie" } },
    "serviceMisconfiguredMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Controleer de configuratie." } },
    "errorWorkflowActionDispatch": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": 'De actie "' }, { "t": 4, "k": "naam" }, { "t": 3, "v": '" is mislukt: ' }] } },
    "errorDataSourceDispatch": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": 'Mislukt bij het laden van "' }, { "t": 4, "k": "name" }, { "t": 3, "v": '" gegevens: ' }] } }
  },
  "workflowAction": {
    "sampleDataModalTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Payload voor " }, { "t": 4, "k": "actionLabel" }] } },
    "sampleDataModalSubTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "JSON-payload" } },
    "testActionDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Voer deze actie uit in de voorbeeldweergave om de uitvoer vast te leggen en beschikbaar te maken voor volgende acties." } }
  },
  "pageElementBehaviour": {
    "normal": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Normaal" } },
    "fixed": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Vast" } }
  }
};

export { resource as default };
//# sourceMappingURL=nl-CnBIeqEb.mjs.map
