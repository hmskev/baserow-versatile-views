!(function() {
  try {
    var e = false ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
    var n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "6181ce45-a2d1-4d9f-bdc5-71546970f7ca", e._sentryDebugIdIdentifier = "sentry-dbid-6181ce45-a2d1-4d9f-bdc5-71546970f7ca");
  } catch (e2) {
  }
})();
const resource = {
  "sidebarComponentBuilder": {
    "settings": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Param\xE8tres" } },
    "createPage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nouvelle page" } }
  },
  "createPageModal": {
    "header": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cr\xE9er une page" } },
    "submit": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ajouter une page" } }
  },
  "pageForm": {
    "errorNameNotUnique": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Une page avec le m\xEAme nom existe d\xE9j\xE0" } },
    "defaultName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Page" } },
    "nameLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Titre" } },
    "errorPathNotUnique": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Un chemin similaire existe d\xE9j\xE0" } },
    "errorValidPathCharacters": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Le chemin contient des caract\xE8res invalides" } },
    "errorStartingSlash": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Un chemin doit commencer par un '/'" } },
    "pathLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Chemin" } },
    "nameTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nom" } },
    "nameSubtitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nom unique de la page" } },
    "pathSubtitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Un param\xE8tre peut \xEAtre ajout\xE9 en faisant pr\xE9c\xE9der son nom par \xAB\xA0:\xA0\xBB. Par exemple - /page/:id -" } },
    "pathParamsTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Param\xE8tres de chemin" } },
    "pathParamsSubtitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sont d\xE9finis par - :parameter - dans le chemin" } },
    "pathParamsSubtitleTutorial": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Les param\xE8tres de chemin peuvent \xEAtre utilis\xE9s pour charger dynamiquement les donn\xE9es, en fonction du param\xE8tre fourni. Ajoutez - :parameter - au chemin pour en ajouter un." } },
    "pathTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Chemin" } },
    "namePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Saisir un nom..." } },
    "pathPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Entrez un chemin..." } },
    "queryParamsSubtitleTutorial": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Les param\xE8tres de requ\xEAte sont optionnels et peuvent \xEAtre utilis\xE9s pour selectionner dynamiquement des donn\xE9es par exemple." } },
    "addAnotherParameter": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ajouter un param\xE8tre de requ\xEAte" } },
    "addParameter": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ajouter un param\xE8tre de requ\xEAte" } },
    "queryParamsTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Param\xE8tres de requ\xEAte" } }
  },
  "builderSettingTypes": {
    "integrationsName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Int\xE9grations" } },
    "themeName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Th\xE8me" } },
    "domainsName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Domaines" } },
    "userSourcesName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Utilisateurs" } },
    "generalName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "G\xE9n\xE9ral" } }
  },
  "builderForm": {
    "submit": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ajouter une application" } }
  },
  "builderSettingsModal": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Application" } }
  },
  "pageHeaderItemTypes": {
    "labelDataSource": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Donn\xE9es" } },
    "labelVariables": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Variables" } },
    "labelSettings": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Param\xE8tres" } },
    "labelElements": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\xC9l\xE9ments" } }
  },
  "elementsContext": {
    "searchPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Chercher des \xE9l\xE9ments" } },
    "noElements": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aucun \xE9l\xE9ment trouv\xE9" } },
    "noPageElements": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aucun \xE9l\xE9ment trouv\xE9 pour cette page" } }
  },
  "elementType": {
    "heading": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Titre" } },
    "text": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "texte" } },
    "textDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Texte multiligne" } },
    "headingDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Titre de page" } },
    "link": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Lien" } },
    "linkDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Un lien vers une page/URL" } },
    "image": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Image" } },
    "imageDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Affiche une image" } },
    "inputText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Champ de saisie" } },
    "inputTextDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Un champ de saisie" } },
    "columnDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Conteneur multi-colonnes" } },
    "column": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Colonnes" } },
    "table": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Table" } },
    "tableDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Une table de donn\xE9es" } },
    "button": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Bouton" } },
    "buttonDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Un bouton" } },
    "formContainer": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Formulaire" } },
    "formContainerDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Un \xE9l\xE9ment Formulaire" } },
    "dropdown": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Liste d\xE9roulante" } },
    "dropdownDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Une liste d\xE9roulante" } },
    "checkbox": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Case \xE0 cocher" } },
    "checkboxDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Une case \xE0 cocher" } },
    "iframe": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "IFrame" } },
    "iframeDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Un element IFrame" } },
    "authForm": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Formulaire de connexion" } },
    "authFormDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Formulaire de connexion pour les utilisateurs" } },
    "repeat": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "R\xE9p\xE9tition" } },
    "repeatDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "R\xE9p\xE8te des \xE9l\xE9ments" } },
    "choice": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "S\xE9lecteur" } },
    "choiceDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pour la s\xE9lection d'une ou plusieurs valeurs" } },
    "recordSelector": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "S\xE9lecteur d'enregistrement" } },
    "recordSelectorDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pour s\xE9lectionner les enregistrements d'une source" } },
    "dateTimePicker": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "S\xE9lecteur de date" } },
    "dateTimePickerDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Un champ de saisie de la date et de l'heure" } },
    "headerDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Un conteneur partag\xE9 entre plusieurs pages" } },
    "footer": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pied de page multi-page" } },
    "footerDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Un conteneur partag\xE9 entre plusieurs pages" } },
    "notAllowedUnlessTop": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cet \xE9l\xE9ment n'est autoris\xE9 qu'en haut de la page" } },
    "notAllowedUnlessBottom": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cet \xE9l\xE9ment n'est autoris\xE9 qu'en bas de page" } },
    "notAllowedUnlessHeader": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cet \xE9l\xE9ment n'est autoris\xE9 qu'\xE0 l'int\xE9rieur de l'en-t\xEAte de la page" } },
    "notAllowedUnlessFooter": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cet \xE9l\xE9ment n'est autoris\xE9 qu'\xE0 l'int\xE9rieur du pied de page" } },
    "notAllowedInsideSameType": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cet \xE9l\xE9ment n'est pas autoris\xE9 dans un conteneur du m\xEAme type" } },
    "header": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "En-t\xEAte multi-pages" } },
    "notAllowedInsideContainer": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cet \xE9l\xE9ment n'est pas autoris\xE9 \xE0 l'int\xE9rieur d'un conteneur" } },
    "notAllowedLocation": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cet \xE9l\xE9ment n'est pas autoris\xE9 \xE0 cet endroit" } },
    "menu": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Menu" } },
    "simpleContainerDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Un conteneur pour grouper des \xE9l\xE9ments" } },
    "simpleContainer": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Conteneur" } },
    "menuDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Un \xE9l\xE9ment de menu" } },
    "ratingDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Affichage d'une notation" } },
    "invalidElementValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Valeur non valide\xA0: " }, { "t": 4, "k": "value" }] } },
    "ratingInput": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Champ de notation" } },
    "rating": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Notation" } },
    "ratingInputDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Un champ de notation" } },
    "fileInputDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Un champ de formulaire pour envoyer des fichiers" } },
    "fileInput": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Champ fichier" } },
    "errorPageParameterInError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Au moins un param\xE8tre de page est mal configur\xE9" } },
    "errorNavigationUrlMissing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Propri\xE9t\xE9 URL de navigation manquante" } },
    "errorImageFileMissing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Fichier image manquant" } },
    "errorImageUrlMissing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Propri\xE9t\xE9 \xAB Image URL \xBB manquante" } },
    "errorNoWorkflowAction": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aucune action de workflow n'est configur\xE9e" } },
    "errorOptionsMissing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aucune option configur\xE9e" } },
    "errorIframeUrlMissing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Propri\xE9t\xE9 URL IFrame manquante" } },
    "errorIframeContentMissing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Contenu de l'IFrame manquant" } },
    "errorNoMenuItem": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aucun \xE9l\xE9ment de menu n'est configur\xE9" } },
    "errorMenuItemInError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Au moins un menu est mal configur\xE9" } },
    "errorSubMenuItemInError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Au moins un sous-menu est mal configur\xE9" } },
    "errorValueMissing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Propri\xE9t\xE9 des valeurs manquantes" } },
    "errorEmptyContainer": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ce conteneur est vide" } },
    "errorParentWithDataSourceMissing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aucune source de donn\xE9es s\xE9lectionn\xE9e sur l'\xE9l\xE9ment ou un conteneur parent" } },
    "errorDataSourceMissing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aucune source de donn\xE9es s\xE9lectionn\xE9e" } },
    "errorSchemaPropertyMissing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aucune propri\xE9t\xE9 de sch\xE9ma s\xE9lectionn\xE9e" } },
    "errorWorkflowActionInError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Au moins une action est mal configur\xE9e" } },
    "errorCollectionFieldInError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Au moins un champ est mal configur\xE9" } },
    "errorNavigateToPageMissing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Propri\xE9t\xE9 Naviguer vers manquante" } }
  },
  "elementMenu": {
    "moveDown": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Descendre" } },
    "moveUp": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Monter" } },
    "moveRight": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "D\xE9placer \xE0 droite" } },
    "moveLeft": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "D\xE9placer \xE0 gauche" } },
    "selectParent": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "S\xE9lectionner le parent" } },
    "drag": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Faites glisser pour r\xE9organiser" } }
  },
  "addElementButton": {
    "label": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\xC9l\xE9ment" } }
  },
  "addElementModal": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ajouter un \xE9l\xE9ment" } },
    "searchPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Chercher des \xE9l\xE9ments" } },
    "disabledElementTooltip": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Non disponible \xE0 l'int\xE9rieur de cet \xE9l\xE9ment" } },
    "elementInProgress": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ajout d'un \xE9l\xE9ment..." } }
  },
  "duplicatePageJobType": {
    "duplicating": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Duplication" } },
    "duplicatedTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Page dupliqu\xE9e" } },
    "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Duplication de page" } }
  },
  "pageSidePanelType": {
    "general": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "G\xE9n\xE9ral" } },
    "visibility": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Visibilit\xE9" } },
    "events": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\xC9v\xE9nements" } },
    "style": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Style" } },
    "eventsTabDeactivatedNoEvents": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cet \xE9l\xE9ment ne supporte aucun \xE9v\xE9nement" } },
    "eventsTabInError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Une ou plusieurs actions sont mal configur\xE9es." } }
  },
  "emptySidePanelState": {
    "message": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cliquez sur l'un des \xE9l\xE9ments pour obtenir plus de d\xE9tails" } }
  },
  "headingElement": {
    "noValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aucun titre..." } },
    "emptyValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Titre vide..." } },
    "missingValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Titre manquant..." } }
  },
  "headingElementForm": {
    "levelTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Niveau" } },
    "textTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Texte" } },
    "textPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Saisir le texte..." } },
    "headingName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Titre " }, { "t": 4, "k": "level" }, { "t": 3, "v": " <h" }, { "t": 4, "k": "level" }, { "t": 3, "v": ">" }] } },
    "textError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "La valeur est invalide." } }
  },
  "textElement": {
    "noValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "texte vide..." } },
    "missingValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Texte manquant..." } },
    "emptyValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Texte vide..." } }
  },
  "textElementForm": {
    "textTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Texte" } },
    "textPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Saisir le texte..." } },
    "textError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "La valeur est invalide." } },
    "textFormatTypeLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Format" } },
    "textFormatTypePlain": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Texte simple" } },
    "textFormatTypeMarkdown": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Markdown" } }
  },
  "pageErrors": {
    "errorPathNotUnique": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Un chemin similaire existe d\xE9j\xE0" } },
    "errorUniquePathParams": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Les param\xE8tres de chemin doivent \xEAtre uniques." } },
    "errorNameNotUnique": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Une page avec le m\xEAme nom existe d\xE9j\xE0" } },
    "errorValidPathCharacters": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Le chemin contient des caract\xE8res invalides" } },
    "errorStartingSlash": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Un chemin doit commencer par un '/'" } },
    "errorUniqueValidQueryParams": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Les noms des param\xE8tres de requ\xEAte doivent \xEAtre uniques et valides." } },
    "errorNameNotUniqueDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Veuillez saisir un nom unique pour la page" } }
  },
  "publishActionModal": {
    "publish": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Publier" } },
    "publishSucceedTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Site publi\xE9" } },
    "publishSucceedDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Le site a \xE9t\xE9 publi\xE9 avec succ\xE8s." } },
    "publishFailedTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "La publication du site a \xE9chou\xE9" } },
    "publishFailedDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "La publication du site a \xE9chou\xE9. Veuillez r\xE9essayer plus tard." } },
    "openInNewTab": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ouvrir dans un nouvel onglet" } },
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Publication" } },
    "noDomain": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Vous devez disposer d\u2019au moins un domaine pour publier votre application." } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mettez votre application en ligne en publiant sur l\u2019un des domaines. Notez que votre application peut avoir plusieurs domaines, chacun avec une version diff\xE9rente de l\u2019application." } },
    "importingState": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Import en cours\u2026" } },
    "addDomain": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ajouter un domaine" } },
    "publishSucceedLink": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Voir le site" } }
  },
  "pageActionTypes": {
    "preview": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aper\xE7u" } },
    "publish": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Publier" } }
  },
  "lastPublishedDomainDate": {
    "neverPublished": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "jamais" } },
    "lastPublished": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Derni\xE8re publication\xA0:" } }
  },
  "elementForms": {
    "textInputPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Saisissez un texte..." } },
    "urlInputPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Saisissez une URL..." } },
    "invalidFormula": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "La formule est invalide" } }
  },
  "imageElement": {
    "emptyState": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aucun texte alternatif d\xE9fini..." } },
    "missingValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Texte alternatif manquant..." } },
    "emptyValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Texte alternitf vide..." } }
  },
  "imageElementForm": {
    "fileLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Image" } },
    "invalidUrlError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "L\u2019URL n\u2019est pas valide" } },
    "altTextTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Texte alternatif" } },
    "urlWarning": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Remarque\xA0: assurez-vous que vous contr\xF4lez ou faites confiance \xE0 l'URL saisie." } },
    "uploadFileButton": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Envoyer un fichier" } },
    "fileSourceTypeUpload": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Envoyer" } },
    "fileSourceTypeURL": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "URL" } },
    "altTextDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Est utilis\xE9 par les lecteurs d'\xE9cran et affich\xE9 si l'image ne peut pas \xEAtre charg\xE9e" } },
    "maxWidthLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Largeur maximale" } },
    "maxHeightLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Hauteur maximale" } },
    "maxHeightPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Saisir une hauteur maximale en pixels." } },
    "imageConstraintsLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Contraintes" } },
    "imageConstraintCover": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Couvrir" } },
    "imageConstraintCoverDisabled": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Indisponible avec une hauteur maximale vide." } },
    "imageConstraintContain": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Contenir" } },
    "imageConstraintContainDisabled": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Indisponible avec une hauteur maximale." } },
    "maxWidthPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Saisir une largeur maximale en pourcentage." } },
    "imageConstraintFullWidth": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Extension \xE0 la largeur maximale" } }
  },
  "domainSettings": {
    "titleOverview": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Domaines" } },
    "titleAddDomain": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ajouter un domaine" } },
    "addDomain": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ajouter un domaine" } },
    "noDomainMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Vous n\u2019avez pas encore associ\xE9 de domaine \xE0 cette application. Vous devez ajouter un domaine pour pouvoir publier votre application. Vous pouvez publier diff\xE9rentes versions de votre application pour chaque domaine r\xE9pertori\xE9 ici." } }
  },
  "dnsStatus": {
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Acc\xE9dez aux param\xE8tres DNS de vos domaines et apportez les modifications suivantes" } },
    "valueHeader": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Valeur" } },
    "typeHeader": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Type" } },
    "hostHeader": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "H\xF4te" } }
  },
  "customDomainForm": {
    "domainNameLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nom de domaine" } },
    "notUniqueDomain": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Le domaine fourni est d\xE9j\xE0 utilis\xE9" } },
    "invalidDomain": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Le nom de domaine fourni est invalide" } }
  },
  "domainCard": {
    "refresh": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Actualiser les param\xE8tres" } },
    "detailLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Afficher les d\xE9tails" } },
    "unpublishedDomainWarning": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Veuillez publier l'application pour la rendre disponible sur ce domaine." } }
  },
  "domainTypes": {
    "customName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Domaine personnalis\xE9" } },
    "subDomain": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Sous-domaine de " }, { "t": 4, "k": "domain" }] } },
    "subDomainName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sous-domaine" } }
  },
  "linkElement": {
    "noValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sans nom..." } },
    "missingValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Texte du lien manquant..." } },
    "emptyValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Texte du lien vide..." } }
  },
  "linkElementForm": {
    "text": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Texte" } },
    "textPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Saisissez le texte..." } },
    "navigateTo": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Naviguer vers" } },
    "navigateToNotSet": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aucune destination" } },
    "navigateToCustom": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "URL personnalis\xE9e" } },
    "url": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "URL de destination" } },
    "urlPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Saisissez une URL..." } },
    "variant": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Variante" } },
    "paramsInErrorButton": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mettre \xE0 jour les param\xE8tres" } },
    "widthFull": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pleine largeur" } },
    "widthAuto": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Auto" } },
    "paramPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Entrez une valeur..." } },
    "variantLink": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Lien" } },
    "variantButton": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Bouton" } },
    "width": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Largeur" } },
    "targetSelf": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "M\xEAme onglet" } },
    "target": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ouvrir dans..." } },
    "targetNewTab": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nouvel onglet" } },
    "pageParameterTypeError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Type non valide" } },
    "paramsInErrorDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Les param\xE8tres enregistr\xE9s ne correspondent pas aux param\xE8tres de la page. La page a probablement \xE9t\xE9 mise \xE0 jour ou supprim\xE9e." } },
    "buttonColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Couleur du bouton" } }
  },
  "alignmentSelector": {
    "alignment": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Alignement" } },
    "alignmentLeft": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Lien" } },
    "alignmentCenter": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Centr\xE9" } },
    "alignmentRight": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Droite" } }
  },
  "pageSettings": {
    "pageUpdatedTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mise \xE0 jour" } },
    "pageUpdatedDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Les param\xE8tres de la page ont \xE9t\xE9 mis \xE0 jour." } },
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Page" } }
  },
  "pathParamTypes": {
    "textName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Texte" } },
    "numericName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Num\xE9rique" } }
  },
  "publicPage": {
    "pageNotFound": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Page non trouv\xE9e" } },
    "siteNotFound": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Site introuvable" } },
    "authorizedToastTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Authentification requise" } },
    "loginToastTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Authentification r\xE9ussie" } },
    "loginToastMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Vous avez \xE9t\xE9 authentifi\xE9\xB7e avec succ\xE8s." } },
    "authorizedToastMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Vous devez \xEAtre authentifi\xE9\xB7e pour acc\xE9der \xE0 cette page. Veuillez vous connecter pour continuer." } }
  },
  "integrationSettings": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Int\xE9grations" } },
    "noIntegrationMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Vous n'avez pas encore cr\xE9\xE9 d'int\xE9grations. Elles peuvent \xEAtre cr\xE9\xE9s lors de l'ajout d'une source de donn\xE9es, d'une action ou d'une authentification utilisateur." } },
    "integrationMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Vous pouvez cr\xE9er de nouvelles int\xE9grations en ajoutant une source de donn\xE9es, une action ou une authentification utilisateur." } }
  },
  "dataSourceForm": {
    "namePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nom de la source" } },
    "addIntegration": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ajouter une int\xE9gration" } },
    "noIntegrations": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aucune int\xE9gration trouv\xE9e." } },
    "selectTypeFirst": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "S\xE9lectionnez d'abord le service" } },
    "servicePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "S\xE9lectionnez un service" } },
    "errorUniqueName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Le nom de la source de donn\xE9es doit \xEAtre unique." } },
    "integrationPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "S\xE9lectionnez une int\xE9gration" } },
    "actionLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Action" } },
    "integrationLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Int\xE9gration" } },
    "nameLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nom" } }
  },
  "dataSourceContext": {
    "addDataSource": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ajouter une source de donn\xE9es" } },
    "noDataSourceMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Les source de donn\xE9es peuvent \xEAtre utilis\xE9es pour r\xE9cup\xE9rer des donn\xE9es \xE0 partir de sources internes ou externes et les afficher sur la page." } },
    "noDataSourceTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Vous n\u2019avez pas encore ajout\xE9 de source de donn\xE9es." } },
    "pageDataSourceTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pour cette page" } },
    "sharedDataSourceTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Partag\xE9e entre les pages" } },
    "sharedDataSourceDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Accessible sur toutes les pages et r\xE9cup\xE9r\xE9e une fois lors du premier chargement de la page." } },
    "pageDataSourceDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "R\xE9cup\xE9r\xE9e lorsque l'utilisateur navigue vers cette page." } }
  },
  "pageSettingsTypes": {
    "pageName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Page" } }
  },
  "verticalAlignmentSelector": {
    "alignmentTop": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "En haut" } },
    "alignmentBottom": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "En bas" } },
    "alignmentCenter": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Au milieu" } },
    "alignment": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Alignement vertical" } }
  },
  "horizontalAlignmentSelector": {
    "alignmentLeft": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\xC0 gauche" } },
    "alignmentRight": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\xC0 droite" } },
    "alignment": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Alignement horizontal" } },
    "alignmentCenter": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Centr\xE9" } }
  },
  "inputTextElementForm": {
    "placeholderPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Entrez un texte provisoire (optionnel)" } },
    "valueTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Valeur par d\xE9faut" } },
    "valuePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Entrez une valeur par d\xE9faut (optionnel)" } },
    "placeholderTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Texte provisoire" } },
    "requiredTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Obligatoire" } },
    "labelTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\xC9tiquette" } },
    "labelPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Entrez une \xE9tiquette (facultatif)" } },
    "multilineTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Multiligne" } },
    "rowsTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nombre de lignes" } },
    "rowsPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Saisir le nombre de lignes minimum" } },
    "validationTypeAnyLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Toutes les valeurs" } },
    "validationTypeAnyDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Permet d'accepter n'importe quelle valeur dans cette entr\xE9e." } },
    "validationTypeIntegerLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nombre" } },
    "validationTypeEmailLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Courriel" } },
    "validationTypeEmailDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "N'autoriser que les courriels dans ce champ." } },
    "validationTypeIntegerDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "N'autoriser que les valeurs num\xE9riques dans ce champ (accepte les entiers et les d\xE9cimaux)." } },
    "inputTypeTextLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Texte" } },
    "inputTypePasswordLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mot de passe" } },
    "inputType": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Type de l'entr\xE9e" } },
    "passwordTypeWarning": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Les mots de passe sont des donn\xE9es sensibles. Faites attention \xE0 la mani\xE8re dont vous les traitez et les stockez dans votre application." } }
  },
  "columnElementForm": {
    "columnGapPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Entrez l'espace entre les colonnes..." } },
    "columnGapTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Espace entre colonnes" } },
    "columnAmountTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mise en page" } },
    "columnAmountName": { "t": 0, "b": { "t": 1, "c": [{ "t": 2, "i": [{ "t": 3 }], "s": "pas de colonnes" }, { "t": 2, "i": [{ "t": 3 }], "s": "1 colonne" }, { "t": 2, "i": [{ "t": 4, "k": "columnAmount" }, { "t": 3, "v": "\xA0colonnes" }] }] } },
    "verticalAlignment": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Alignement vertical" } },
    "customLayout": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Personnalis\xE9" } },
    "customWeightsTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pond\xE9rations personnalis\xE9es des colonnes" } },
    "customWeightsHelper": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Utilisez la valeur 0 lorsqu'une colonne doit avoir une largeur \xE9gale \xE0 celle de son contenu. Les autres colonnes se partageront l'espace restant." } },
    "errorCustomWeightsMinimum": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Les poids des colonnes doivent \xEAtre \xE9gaux ou sup\xE9rieurs \xE0 0" } },
    "columnStackingTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Disposition des colonnes par type d'appareil" } },
    "columnStackingHorizontal": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "C\xF4te \xE0 c\xF4te" } },
    "columnStackingStacked": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Empil\xE9es" } }
  },
  "tableElementForm": {
    "addField": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "ajouter un champ" } },
    "itemsPerPage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Lignes par page" } },
    "fieldValueLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Valeur" } },
    "dataSource": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Source de donn\xE9es" } },
    "fieldValuePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Saisir la valeur..." } },
    "itemsPerPagePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Saisir la valeur..." } },
    "fields": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Colonnes" } },
    "fieldType": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Type" } },
    "fieldDefaultName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Colonne" } },
    "selectSourceFirst": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Choisissez une source de donn\xE9es et/ou une propri\xE9t\xE9 pour commencer \xE0 configurer vos champs." } },
    "buttonColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Couleur du bouton" } },
    "refreshFieldsFromDataSource": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "R\xE9initialiser les champs \xE0 partir de la source de donn\xE9es" } },
    "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nom" } },
    "orientation": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Orientation" } },
    "orientationHorizontal": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Horizontale" } },
    "orientationVertical": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Verticale" } },
    "buttonLoadMoreLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Libell\xE9 \xAB\xA0afficher plus\xA0\xBB" } },
    "propertySelectorMissingArrays": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aucun champ \xE0 valeurs multiples n'a \xE9t\xE9 trouv\xE9 pour \xEAtre utilis\xE9 comme donn\xE9es." } },
    "noName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aucun nom" } }
  },
  "mainThemeConfigBlock": {
    "colorsLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Couleurs" } },
    "primaryColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Primaire" } },
    "headingValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Titre <h" }, { "t": 4, "k": "i" }, { "t": 3, "v": ">" }] } },
    "typography": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Typographie" } },
    "fontSizeError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "La valeur doit \xEAtre comprise entre 1 et 100." } },
    "headingLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Titre " }, { "t": 4, "k": "i" }, { "t": 3, "v": " (h" }, { "t": 4, "k": "i" }, { "t": 3, "v": ")" }] } },
    "secondaryColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Secondaire" } }
  },
  "widthSelector": {
    "widthFull": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pleine largeur" } },
    "widthAuto": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Auto" } },
    "width": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Largeur" } }
  },
  "defaultStyleForm": {
    "boxTop": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Haut" } },
    "boxBottom": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Bas" } },
    "widthLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Largeur" } },
    "backgroundLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Arri\xE8re plan" } },
    "backgroundColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Couleur d'arri\xE8re-plan" } },
    "boxLeft": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Gauche" } },
    "boxRight": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Droit" } },
    "backgroundImageMode": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mode de remplissage" } },
    "backgroundImage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Image" } },
    "cssClasses": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Classes CSS" } },
    "cssClassesHelp": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "D\xE9finissez une liste de classes s\xE9par\xE9es par des espaces pour cet \xE9l\xE9ment qui appara\xEEtra dans le code HTML g\xE9n\xE9r\xE9." } },
    "cssClassesPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "classe1 classe2..." } }
  },
  "buttonElementForm": {
    "valuePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Saisir le texte..." } },
    "valueLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Texte du bouton" } },
    "buttonColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Couleur du bouton" } }
  },
  "subDomainDetails": {
    "text": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Les param\xE8tres DNS du domaine ont d\xE9j\xE0 \xE9t\xE9 configur\xE9s et v\xE9rifi\xE9s. Cela fonctionne sans qu'il soit n\xE9cessaire d'apporter des modifications suppl\xE9mentaires." } }
  },
  "notificationWorkflowActionForm": {
    "descriptionLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Description" } },
    "descriptionPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Saisir le texte..." } },
    "titleLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Titre" } },
    "titlePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Saisir le texte..." } }
  },
  "currentRecordDataProviderType": {
    "index": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Index" } },
    "firstPartName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Source de donn\xE9es : " }, { "t": 4, "k": "nom" }] } },
    "schemaProperty": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "prefixName" }, { "t": 3, "v": "\u202F: " }, { "t": 4, "k": "schemaProperty" }] } }
  },
  "domainForm": {
    "notUniqueDomain": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Le domaine fourni est d\xE9j\xE0 utilis\xE9" } },
    "invalidDomain": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Le nom de domaine fourni est invalide" } }
  },
  "dataProviderType": {
    "currentRecord": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Source de donn\xE9es" } },
    "pageParameter": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Param\xE8tre" } },
    "dataSource": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Donn\xE9es re\xE7ues" } },
    "formData": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Donn\xE9es de formulaire" } },
    "user": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Utilisateur" } },
    "previousAction": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Action pr\xE9c\xE9dente" } },
    "dataSourceContext": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Choix disponibles" } },
    "metadata": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "M\xE9tadonn\xE9es" } }
  },
  "openPageWorkflowActionForm": {
    "urlLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "URL" } },
    "urlPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Saisir le texte..." } }
  },
  "event": {
    "addAction": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "ajouter une action" } }
  },
  "buttonElement": {
    "noValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sans nom..." } },
    "missingValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Texte du bouton manquant..." } },
    "emptyValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Texte du bouton vide..." } }
  },
  "tableElement": {
    "empty": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aucun r\xE9sultat n'a \xE9t\xE9 trouv\xE9e." } },
    "showMore": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Afficher plus" } }
  },
  "fontSidePanelForm": {
    "label": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Couleur de la police" } }
  },
  "styleBoxForm": {
    "paddingError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "La valeur doit \xEAtre comprise entre 0 et 200." } },
    "borderLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\xC9paisseur" } },
    "paddingLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Espacement" } },
    "error": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "La valeur doit \xEAtre comprise entre 0 et 200." } },
    "marginLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Marge" } },
    "borderColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Couleur de la bordure" } }
  },
  "subDomainForm": {
    "domainNameLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nom de domaine" } }
  },
  "workflowActionTypes": {
    "notificationLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Afficher une notification" } },
    "openPageLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ouvrir une page" } },
    "updateRowLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mise \xE0 jour de ligne" } },
    "createRowLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cr\xE9ation de ligne" } },
    "logoutLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "D\xE9connexion" } },
    "refreshDataSourceLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Actualiser une source de donn\xE9es" } },
    "deleteRowLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Supprimer une ligne" } },
    "httpRequest": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Envoyer une requ\xEAte HTTP" } },
    "errorNavigateToPageMissing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Propri\xE9t\xE9 Naviguer vers manquante" } },
    "errorPageParameterInError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Au moins un param\xE8tre de page est mal configur\xE9" } },
    "errorNavigationUrlMissing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Propri\xE9t\xE9 URL de destination manquante" } },
    "errorDataSourceMissing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aucune source de donn\xE9es s\xE9lectionn\xE9e" } }
  },
  "getFormulaComponent": {
    "errorTooltip": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "R\xE9f\xE9rence invalide" } }
  },
  "eventTypes": {
    "clickLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Au clic" } },
    "submitLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sur validation" } },
    "afterLoginLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Apr\xE8s la connexion" } }
  },
  "linkFieldForm": {
    "fieldLinkNamePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Saisir la valeur..." } },
    "fieldValuePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Saisir la valeur..." } },
    "fieldLinkNameLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Texte du lien" } },
    "fieldValueLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Url" } },
    "buttonColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Couleur du bouton" } }
  },
  "updateUserSourceForm": {
    "nameFieldLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nom" } },
    "nameFieldPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Saisir un nom..." } },
    "integrationFieldLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Int\xE9gration" } },
    "authTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Authentification" } },
    "addProvider": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ajouter un fournisseur" } }
  },
  "widthTypes": {
    "full": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pleine largeur" } },
    "small": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Petite" } },
    "medium": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Moyenne" } },
    "normal": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Normale" } },
    "fullBleed": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Fond \xE9tendu" } },
    "fullWidth": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pleine largeur" } }
  },
  "userSourceSettings": {
    "titleOverview": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sources d'utilisateurs" } },
    "titleUpdateUserSource": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Modifier la source d'utilisateurs" } },
    "titleAddUserSource": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nouvelle source d'utilisateurs" } },
    "addUserSource": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ajouter la source d'utilisateurs" } },
    "noUserSourceMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Vous n'avez pas encore ajout\xE9 de source d'utilisateurs \xE0 cette application. Vous devez ajouter une source d'utilisateurs si vous souhaitez que les utilisateurs puissent authentifier votre application." } }
  },
  "upsertRowWorkflowActionForm": {
    "rowIdPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Saisir l'ID d'une ligne" } },
    "fieldMappingPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Choisir la valeur du champ" } },
    "integrationDropdownLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Int\xE9gration" } },
    "rowIdLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "ID de la ligne" } },
    "noTableSelectedMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Choisissez une table pour commencer \xE0 configurer vos champs." } }
  },
  "dispatchWorkflowActionError": {
    "defaultMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Une erreur s'est produite lors du traitement de cette action." } },
    "defaultTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Erreur" } },
    "formDataInvalidTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Formulaire invalide" } },
    "formDataInvalidMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Un ou plusieurs champs contiennent des valeurs invalides." } }
  },
  "collectionFieldType": {
    "text": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Texte" } },
    "link": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Lien" } },
    "boolean": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Bool\xE9en" } },
    "tags": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\xC9tiquettes" } },
    "button": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Bouton" } },
    "image": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Image" } },
    "rating": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Notation" } },
    "errorValueMissing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Valeur manquante" } }
  },
  "createUserSourceForm": {
    "userSourceName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nom" } },
    "userSourceIntegration": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Int\xE9gration" } },
    "userSourceType": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Type" } }
  },
  "formDataProviderType": {
    "nodeMissing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Manquant" } }
  },
  "textFieldForm": {
    "fieldValuePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Saisir la valeur..." } },
    "fieldValueLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Valeur" } }
  },
  "backgroundTypes": {
    "color": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Couleur" } },
    "none": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aucun" } }
  },
  "pagePreview": {
    "emptyMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cliquez pour cr\xE9er un \xE9l\xE9ment" } },
    "header": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "EN-T\xCATE" } },
    "footer": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "PIED DE PAGE" } }
  },
  "formContainerElementForm": {
    "submitButtonLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Bouton de soumission" } },
    "submitButtonPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Saisir la valeur..." } },
    "buttonColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Couleur du bouton" } },
    "resetToInitialValuesTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "R\xE9initialiser les valeurs par d\xE9faut apr\xE8s soumission" } },
    "resetToInitialValuesDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Si cette case est coch\xE9e, le formulaire sera r\xE9initialis\xE9 avec les valeurs par d\xE9faut apr\xE8s une soumission r\xE9ussie. Si la case n'est pas coch\xE9e, les valeurs saisies par l'utilisateur seront conserv\xE9es." } }
  },
  "linkField": {
    "details": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "D\xE9tails" } }
  },
  "generalForm": {
    "labelPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Saisir un label" } },
    "valuePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Saisir une valeur" } },
    "requiredTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Obligatoire" } },
    "labelTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Label" } },
    "valueTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Valeur" } },
    "placeholderTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Texte provisoire" } },
    "placeholderPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Saisir un texte provisoire" } },
    "validationTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Validation" } },
    "defaultValueTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Valeur par d\xE9faut" } },
    "defaultValuePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Saisir la valeur par d\xE9faut" } }
  },
  "iframeElementForm": {
    "urlPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Lien vers la ressource externe \xE0 int\xE9grer" } },
    "empty": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "IFrame vide..." } },
    "sourceTypeLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Type de la source" } },
    "urlLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "URL" } },
    "urlHelp": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Remarque\xA0: assurez-vous que vous contr\xF4lez ou faites confiance \xE0 l'URL saisie." } },
    "embedLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Embarquer" } },
    "embedPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Contenu HTML brut \xE0 int\xE9grer" } },
    "heightLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Hauteur (px)" } },
    "heightPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Hauteur en pixels" } },
    "emptyValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Source vide..." } },
    "missingValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Source manquante..." } }
  },
  "linkNavigationSelection": {
    "paramPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Saisir une valeur..." } },
    "urlPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Saisir une URL..." } },
    "navigateTo": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Naviguer vers" } },
    "navigateToCustom": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "URL personnalis\xE9e" } },
    "url": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "URL de destination" } },
    "paramsInErrorDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Les param\xE8tres enregistr\xE9s ne correspondent pas aux param\xE8tres de la page. La page a probablement \xE9t\xE9 mise \xE0 jour ou supprim\xE9e." } },
    "paramsInErrorButton": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mettre \xE0 jour les param\xE8tres" } },
    "targetSelf": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "M\xEAme onglet" } },
    "target": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ouvrir dans..." } },
    "targetNewTab": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nouvel onglet" } }
  },
  "dropdownOptionSelector": {
    "label": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Options" } },
    "addOption": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "ajouter une option" } },
    "value": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Valeur" } },
    "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nom" } }
  },
  "checkboxElementForm": {
    "labelTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Lib\xE9ll\xE9 de l'option" } },
    "valueTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Valeur par d\xE9faut" } },
    "requiredTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Obligatoire" } }
  },
  "authFormElement": {
    "emailPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Saisissez votre courriel..." } },
    "passwordPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Saisissez votre mot de passe..." } },
    "selectOrConfigureUserSourceFirst": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Choisissez une source d'utilisateurs pour commencer \xE0 utiliser ce formulaire d'authentification." } },
    "email": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Courriel" } },
    "password": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mot de passe" } }
  },
  "userSourceUsersContext": {
    "searchPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Rechercher un utilisateur" } },
    "anonymous": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Anonyme" } },
    "unnamed": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sans nom" } },
    "noEmail": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pas de courriel" } }
  },
  "userSelector": {
    "viewAs": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Voir en tant que\u202F: " }, { "t": 4, "k": "user" }] } },
    "anonymous": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Anonyme" } },
    "member": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Membre de " }, { "t": 4, "k": "prefix" }] } }
  },
  "dispatchDataSourceError": {
    "defaultTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Erreur de chargement des donn\xE9es" } },
    "defaultMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Une erreur s'est produite lors du chargement des donn\xE9es de la page." } }
  },
  "authFormElementForm": {
    "userSource": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Source d'utilisateur" } }
  },
  "formContainerElement": {
    "submitDeactivatedText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Veuillez remplir tous les champs requis pour soumettre le formulaire" } },
    "defaultSubmitButtonLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Valider" } }
  },
  "visibilityForm": {
    "allVisitors": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tous les visiteurs" } },
    "loggedInVisitors": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Visiteurs connect\xE9s" } },
    "notLoggedInVisitors": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Visiteurs d\xE9connect\xE9s" } },
    "warningTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "C'est un dispositif de s\xE9curit\xE9" } },
    "warningMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Veuillez consulter la " }, { "t": 4, "k": "link" }, { "t": 3, "v": " pour plus d'informations sur la s\xE9curit\xE9 des donn\xE9es." }] } },
    "excludedRolesLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "tous les r\xF4les sauf" } },
    "switchAllowLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Autoriser" } },
    "switchDisallowLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Interdir" } },
    "rolesSelectAll": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "S\xE9lectionner tout" } },
    "rolesDeselectAll": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "D\xE9s\xE9lectionner tout" } },
    "rolesSelectHint": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "S\xE9lectionnez un ou plusieurs r\xF4les" } },
    "roleTypesHint": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "S\xE9lectionnez un type de r\xF4le" } },
    "roleTypeDisallowAllRolesExcept": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Autoriser les r\xF4les..." } },
    "roleTypeAllowAllRoles": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tous les r\xF4les" } },
    "roleTypeAllowAllRolesExcept": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Interdire les r\xF4les..." } },
    "errorFetchingRolesMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Il y a eu un probl\xE8me lors de la r\xE9cup\xE9ration des r\xF4les d'utilisateur." } },
    "rolesAllMembersOf": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Tous les membres de " }, { "t": 4, "k": "name" }] } },
    "noRole": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sans r\xF4le" } },
    "errorFetchingRolesTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Impossible de r\xE9cup\xE9rer les r\xF4les des utilisateurs" } },
    "visibilityCondition": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Conditions de visibilit\xE9" } },
    "visibilityConditionHelper": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Si le r\xE9sultat de cette formule est vrai et que le statut du visiteur ci-dessus est vrai, l'\xE9l\xE9ment sera visible. Cette condition n'affecte que la visibilit\xE9 de l'\xE9l\xE9ment. Pour exclure des donn\xE9es de la r\xE9ponse du serveur, utilisez l'option de filtrage du r\xF4le de l'utilisateur ci-dessus." } },
    "visibilityConditionPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Condition..." } },
    "documentationLink": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "documentation" } }
  },
  "imageInput": {
    "labelDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Description par d\xE9faut" } },
    "labelButton": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Envoyer" } }
  },
  "generalSettings": {
    "cantUpdateApplicationDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "D\xE9sol\xE9, impossible de mettre \xE0 jour l'application." } },
    "labelButton": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Envoyer la favicon" } },
    "cantUploadFaviconTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Impossible de t\xE9l\xE9charger le fichier fourni" } },
    "cantUploadFaviconDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "D\xE9sol\xE9, il n'est pas possible de t\xE9l\xE9charger l'image. Veuillez vous assurer que le fichier image est unique et qu'il s'agit d'un format d'image pris en charge." } },
    "cantUpdateApplicationTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Impossible de mettre \xE0 jour l'application" } },
    "titleOverview": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "G\xE9n\xE9ral" } },
    "labelForm": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Favicon" } },
    "labelDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Choisissez un fichier ICO, PNG, GIF ou JPEG de 128x128px." } }
  },
  "repeatElement": {
    "showMore": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Afficher plus" } },
    "empty": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aucun r\xE9sultat n'a \xE9t\xE9 trouv\xE9e." } },
    "missingDataSourceTooltip": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Choisissez une source de donn\xE9es pour commencer \xE0 ajouter des \xE9l\xE9ments." } },
    "missingSchemaPropertyTooltip": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Choisissez une propri\xE9t\xE9 pour commencer \xE0 ajouter des \xE9l\xE9ments." } },
    "emptyState": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aucun enregistrement n'a \xE9t\xE9 trouv\xE9." } }
  },
  "repeatElementForm": {
    "dataSource": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Source de donn\xE9es" } },
    "itemsPerPage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Lignes par page" } },
    "orientationLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Orientation" } },
    "itemsPerPagePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Saisir la valeur..." } },
    "itemsPerRowLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nombre de colonne" } },
    "itemsPerRowDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nombre de colonnes par ligne et type d'appareil." } },
    "orientationVertical": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Verticale" } },
    "orientationHorizontal": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Horizontale" } },
    "buttonLoadMoreLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Libell\xE9 \xAB\xA0afficher plus\xA0\xBB" } },
    "toggleEditorRepetitionsLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "D\xE9sactiver temporairement les r\xE9p\xE9titions" } },
    "propertySelectorMissingArrays": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aucun champ \xE0 valeurs multiples n'a \xE9t\xE9 trouv\xE9 pour cr\xE9er les r\xE9p\xE9titions." } },
    "gapLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Espace entre les r\xE9p\xE9titions" } },
    "gapVerticalLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Vertical" } },
    "gapHorizontalLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Horizontal" } }
  },
  "userDataProviderType": {
    "isAuthenticated": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Est authentifi\xE9" } },
    "id": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Id" } },
    "email": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Courriel" } },
    "username": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nom d'utilisateur" } },
    "role": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "R\xF4le" } }
  },
  "buttonFieldForm": {
    "labelPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Saisir le nom..." } },
    "infoMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": `Pour configurer les actions de ce bouton, ouvrez l'onglet "\xC9v\xE9nements" de l'\xE9l\xE9ment courant.` } }
  },
  "tagsFieldForm": {
    "fieldValuesPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Saisir les valeurs..." } },
    "fieldColorsLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Couleurs" } },
    "fieldColorsPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Choisir les couleurs..." } },
    "fieldValuesLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Valeurs" } }
  },
  "buttonField": {
    "noLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sans nom..." } }
  },
  "themeConfigBlockType": {
    "color": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Couleurs" } },
    "page": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Page" } },
    "typography": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Typographie" } },
    "button": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Bouton" } },
    "link": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Lien" } },
    "image": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Image" } },
    "input": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Champs de saisie" } },
    "table": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Table" } }
  },
  "colorThemeConfigBlock": {
    "primaryColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Primaire" } },
    "secondaryColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Secondaire" } },
    "borderColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Bordure" } },
    "successColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Succ\xE9s" } },
    "warningColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Avertissement" } },
    "errorColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Erreur" } },
    "transparent": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Transparent" } },
    "customColors": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Couleurs personnalis\xE9es" } },
    "addCustomColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ajouter une couleur personnalis\xE9e" } },
    "customColorPrefix": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ma couleur" } }
  },
  "pageThemeConfigBlock": {
    "backgroundColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Couleur d'arri\xE8re-plan" } },
    "backgroundImage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Image d'arri\xE8re plan" } },
    "backgroundMode": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mode d'arri\xE8re-plan" } }
  },
  "colorThemeConfigBlockType": {
    "primary": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Primaire" } },
    "secondary": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Secondaire" } },
    "success": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Succ\xE9s" } },
    "warning": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Avertissement" } },
    "border": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Bordure" } },
    "error": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Erreur" } },
    "transparent": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Transparent" } }
  },
  "typographyThemeConfigBlock": {
    "headingValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Titre <h" }, { "t": 4, "k": "i" }, { "t": 3, "v": ">" }] } },
    "color": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Couleur" } },
    "size": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Taille" } },
    "textAlignment": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Alignement" } },
    "bodyLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Corps" } },
    "fontFamily": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Police" } },
    "headingLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Titre " }, { "t": 4, "k": "i" }, { "t": 3, "v": " (h" }, { "t": 4, "k": "i" }, { "t": 3, "v": ")" }] } },
    "weight": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Graisse" } },
    "decoration": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "D\xE9coration" } }
  },
  "buttonThemeConfigBlock": {
    "backgroundColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Couleur d'arri\xE8re-plan" } },
    "defaultState": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\xC9tat par d\xE9faut" } },
    "hoverState": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\xC9tat de survol" } },
    "textAlignment": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Alignement du texte" } },
    "alignment": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Alignement" } },
    "width": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Largeur" } },
    "borderSize": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\xC9paisseur de la bordure" } },
    "borderRadius": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Rayon de l'arrondi" } },
    "padding": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Espacement" } },
    "fontFamily": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Police" } },
    "size": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Taille de la police" } },
    "textColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Couleur du texte" } },
    "button": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Bouton" } },
    "borderColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Couleur de la bordure" } },
    "weight": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Graisse de la police" } },
    "activeState": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\xC9tat actif" } }
  },
  "linkThemeConfigBlock": {
    "color": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Couleur" } },
    "link": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Lien" } },
    "defaultState": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\xC9tat par d\xE9faut" } },
    "hoverState": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\xC9tat de survol" } },
    "alignment": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Alignement" } },
    "fontFamily": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Police" } },
    "size": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Taille de la police" } },
    "weight": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Graisse de la police" } },
    "activeState": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\xC9tat actif" } },
    "decoration": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "D\xE9coration" } }
  },
  "imageThemeConfigBlock": {
    "alignment": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Alignement" } },
    "maxWidthLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pleine largeur" } },
    "maxHeightLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Hauteur max." } },
    "maxHeightPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Entrer une hauteur max." } },
    "maxWidthPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Entrer une largeur max." } },
    "imageConstraintsLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Contraintes" } },
    "imageConstraintFullWidth": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Extension \xE0 la largeur maximale" } },
    "imageConstraintCover": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Couvrir" } },
    "imageConstraintCoverDisabled": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Indisponible avec une hauteur maximale vide." } },
    "imageConstraintContain": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Contenir" } },
    "imageConstraintContainDisabled": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Indisponible avec une hauteur maximale." } },
    "imageBorderRadiusLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Arrondi des coins" } },
    "imageBorderRadiusPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Saisissez la valeur d'arrondi des coins de l'image." } }
  },
  "choiceElementForm": {
    "display": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Affichage" } },
    "dropdown": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Liste d\xE9roulante" } },
    "radio": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Boutons radio" } },
    "multiple": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Autoriser plusieurs valeurs" } },
    "checkbox": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Case \xE0 cocher" } }
  },
  "choiceOptionSelector": {
    "label": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Options" } },
    "value": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Valeurs des options" } },
    "valuePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Saisir la valeur" } },
    "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Libell\xE9s des options" } },
    "namePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Saisir le nom" } },
    "addOption": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "ajouter une option" } },
    "optionType": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Type d'options" } },
    "manual": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Manuelle" } },
    "dataSource": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Source de donn\xE9es" } },
    "formulas": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Formules" } },
    "addOptionDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": 'Cliquez sur "ajouter une option" pour ajouter des options \xE0 votre liste de choix' } }
  },
  "choiceElement": {
    "addOptions": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ajouter des options pour utiliser cet \xE9l\xE9ment..." } }
  },
  "resetButton": {
    "reset": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "R\xE9tablissement de la valeur par d\xE9faut du th\xE8me" } }
  },
  "backgroundModes": {
    "fill": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Remplir" } },
    "tile": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tuilage" } },
    "fit": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Contenir" } }
  },
  "customStyle": {
    "themeOverrides": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Style sp\xE9cifique" } },
    "configureThemeOverrides": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "D\xE9finir les exceptions au th\xE8me pour cet \xE9l\xE9ment" } },
    "backToElement": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Retour \xE0 la configuration de l'\xE9l\xE9ment" } }
  },
  "inputThemeConfigBlock": {
    "label": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Lib\xE9ll\xE9" } },
    "input": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Champs de saisie" } },
    "backgroundColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Couleur de fond" } },
    "textColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Couleur du texte" } },
    "borderSize": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\xC9paisseur de la bordure" } },
    "borderRadius": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Rayon de l'arrondi" } },
    "padding": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Espacement" } },
    "fontFamily": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Police" } },
    "size": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Taille de la police" } },
    "borderColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Couleur de bordure" } },
    "weight": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Graisse de la police" } }
  },
  "tableThemeConfigBlock": {
    "borderColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Couleur de bordure" } },
    "backgroundAlternateColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Couleur des rangs pairs" } },
    "backgroundColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Couleur de fond" } },
    "textColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Couleur du texte" } },
    "borderSize": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\xC9paisseur de la bordure" } },
    "borderRadius": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Rayon de l'arrondi" } },
    "padding": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Espacement" } },
    "fontFamily": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Police" } },
    "size": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\xC9paisseur" } },
    "fontSize": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Taille de la police" } },
    "table": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Table" } },
    "header": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "En-t\xEAte" } },
    "alignment": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Alignement" } },
    "cells": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cellules" } },
    "separators": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "S\xE9parateurs" } },
    "verticalSeparatorColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Couleur verticale" } },
    "verticalSeparatorSize": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Taille verticale" } },
    "horizontalSeparatorColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Couleur horizontale" } },
    "horizontalSeparatorSize": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Taille horizontale" } },
    "fontWeight": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Graisse de la police" } }
  },
  "localBaserowServiceForm": {
    "integrationDropdownLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Int\xE9gration" } },
    "rowIdPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Saisir l'ID d'une ligne" } },
    "rowIdLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "ID de ligne" } }
  },
  "fieldMappingContext": {
    "enableField": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Activer le champ" } },
    "disableField": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "D\xE9sactiver le champ" } }
  },
  "dropdown": {
    "empty": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aucune option disponible" } }
  },
  "abTable": {
    "empty": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aucun r\xE9sultat n'a \xE9t\xE9 trouv\xE9e." } },
    "loading": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Chargement..." } }
  },
  "collectionElementForm": {
    "noDataSourceMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Choisissez une source de donn\xE9es retournant plusieurs lignes pour lister tous les r\xE9sultats, ou une source de donn\xE9es retournant une seule ligne pour choisir une propri\xE9t\xE9 \xE0 l'int\xE9rieur de cette ligne." } },
    "noSchemaPropertyMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Choisissez une propri\xE9t\xE9 de la source de donn\xE9es \xE0 utiliser comme source de donn\xE9es pour votre \xE9l\xE9ment." } },
    "propertyOptionLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Actions possibles" } }
  },
  "imageFieldForm": {
    "fieldSrcLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Source de l'image" } },
    "fieldSrcPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Saisir la valeur" } },
    "fieldAltPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Saisir la valeur..." } },
    "fieldAltLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Texte Alt" } },
    "fieldAltHelp": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Est utilis\xE9 par les lecteurs d'\xE9cran et affich\xE9 si l'image ne peut pas \xEAtre charg\xE9e" } }
  },
  "dataSourceDropdown": {
    "noDataSources": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aucune source de donn\xE9es disponible" } },
    "label": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Source des donn\xE9es" } },
    "shared": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "partag\xE9e" } },
    "pageOnly": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "cette page" } },
    "noSharedDataSources": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aucune source de donn\xE9es partag\xE9e disponible" } },
    "addNew": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ajouter une nouvelle source de donn\xE9es" } }
  },
  "serviceSchemaPropertySelector": {
    "label": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Propri\xE9t\xE9" } },
    "noProperties": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aucune propri\xE9t\xE9 disponible" } }
  },
  "recordSelectorElementForm": {
    "selectRecordsFrom": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "S\xE9lectionner les enregistrements de..." } },
    "record": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Option " }, { "t": 4, "k": "id" }] } },
    "noDataSourceMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Choisir une source de donn\xE9es avec plusieurs lignes pour lister tous les r\xE9sultats." } },
    "optionNameSuffix": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Suffixe des options" } },
    "optionNameSuffixPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Saisir un suffixe..." } },
    "optionNameSuffixHelper": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ce suffixe est ajout\xE9 \xE0 chaque nom d'option lorsque vous ouvrez la liste d\xE9roulante et permet de les distinguer." } },
    "itemsPerPage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\xC9l\xE9ments par page" } },
    "itemsPerPagePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Saisir une valeur..." } },
    "multipleLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Autoriser plusieurs valeurs" } }
  },
  "dataSourceItemContext": {
    "shareBetweenPages": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Partager entre les pages" } },
    "unshareBetweenPages": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Arr\xE9ter le partage" } }
  },
  "dataSourceCreateEditModal": {
    "editTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Modifier la source de donn\xE9es" } },
    "createTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cr\xE9er une source de donn\xE9es" } },
    "sharedWarning": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cette source de donn\xE9es est partag\xE9e, de sorte que vos modifications peuvent affecter plusieurs pages." } }
  },
  "propertyOptionForm": {
    "fieldHeading": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Colonne" } },
    "filterHeading": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Filtre" } },
    "sortHeading": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Trier" } },
    "searchHeading": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Chercher" } },
    "optionUnavailable": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Non disponible" } },
    "noPropertiesAvailable": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aucun champ disponible." } },
    "formDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Choisissez les propri\xE9t\xE9s de la source de donn\xE9es que les utilisateurs de l'application peuvent filtrer, trier et rechercher." } }
  },
  "dataSourceItem": {
    "notConfigured": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Non configur\xE9e" } }
  },
  "recordSelectorElement": {
    "emptyAdhocState": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Aucun enregistrement correspondant \xE0 '" }, { "t": 4, "k": "query" }, { "t": 3, "v": "' n'a \xE9t\xE9 trouv\xE9." }] } },
    "emptyState": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aucun enregistrement n'a \xE9t\xE9 trouv\xE9." } }
  },
  "common": {
    "dateFormatTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Format de date" } },
    "dateFormatEU": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Europ\xE9en" } },
    "dateFormatUS": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Am\xE9ricain" } },
    "dateFormatISO": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "ISO" } },
    "timeFormatTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Format de l'heure" } },
    "timeFormat24Hour": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "24 heures" } },
    "timeFormat12Hour": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "12 heures" } }
  },
  "pageVisibilitySettingsTypes": {
    "pageName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Visibilit\xE9" } },
    "logInPageInfoTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Les utilisateurs anonymes seront redirig\xE9s" } },
    "logInPageInfoMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Les utilisateurs anonymes qui tentent d'acc\xE9der \xE0 cette page seront redirig\xE9s vers la page \xAB\xA0" }, { "t": 4, "k": "logInPageName" }, { "t": 3, "v": "\xA0\xBB." }] } },
    "logInPageWarningTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "La page de connexion n'est pas d\xE9finie" } },
    "logInPagewarningMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Lorsqu'un utilisateur anonyme tente d'acc\xE9der \xE0 cette page, il est redirig\xE9 vers la page de connexion. Veuillez d\xE9finir la page de connexion dans les param\xE8tres g\xE9n\xE9raux de l'application." } }
  },
  "dateTimePickerElementForm": {
    "includeTime": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Inclure l'heure" } },
    "invalidDateError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Date non valide. Veuillez vous assurer que la date saisie correspond au format indiqu\xE9." } }
  },
  "themeSettings": {
    "titleOverview": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Th\xE8me" } }
  },
  "pageVisibilitySettings": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Visibilit\xE9" } },
    "allVisitors": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tous les visiteurs" } },
    "loggedInVisitors": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Visiteurs connect\xE9s" } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Qui peut consulter cette page\u202F?" } }
  },
  "pageEditor": {
    "pageNotFound": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Page non trouv\xE9e" } },
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Application" } }
  },
  "builderLoginPageForm": {
    "pageDropdownLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Page de connexion" } },
    "pageDropdownPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "S\xE9lectionner une page" } },
    "pageDropdownDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "S\xE9lectionnez la page de connexion vers laquelle les utilisateurs non connect\xE9s doivent \xEAtre redirig\xE9s lorsqu'ils tentent d'acc\xE9der \xE0 une page restreinte." } }
  },
  "multiPageContainerElementForm": {
    "display": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Affichage" } },
    "pagePosition": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Position" } },
    "behaviour": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Comportement" } },
    "selectAll": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "S\xE9lectionner tout" } },
    "deselectAll": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "D\xE9s\xE9lectionner tout" } }
  },
  "pageShareType": {
    "all": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sur toutes les pages" } },
    "except": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Exclure les pages s\xE9lectionn\xE9es" } },
    "only": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Uniquement les pages s\xE9lectionn\xE9es" } }
  },
  "fontWeightType": {
    "extraBlack": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Extra-noir" } },
    "extraBold": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Extra-gras" } },
    "extraLight": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Extra-l\xE9ger" } },
    "light": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "L\xE9ger" } },
    "regular": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Normale" } },
    "medium": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Moyenne" } },
    "semiBold": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Semi-gras" } },
    "black": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Noir" } },
    "thin": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mince" } },
    "bold": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Gras" } }
  },
  "radiusStyleForm": {
    "borderRadiusLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Bordure" } },
    "cornerRadiusLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Arrondi des coins" } },
    "backgroundRadiusLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Arri\xE8re plan" } }
  },
  "authProviderWithModal": {
    "authProviderInError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Veuillez modifier ce fournisseur pour corriger l'erreur." } },
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Modification du fournisseur\xA0: " }, { "t": 4, "k": "name" }] } }
  },
  "queryParamTypes": {
    "textName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Texte" } },
    "numericName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Num\xE9rique" } }
  },
  "addElementCategory": {
    "suggestedElement": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\xC9l\xE9ments sugg\xE9r\xE9s" } },
    "baseElement": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\xC9l\xE9ments basiques" } },
    "formElement": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\xC9l\xE9ments de formulaire" } },
    "layoutElement": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\xC9l\xE9ments de mise en page" } }
  },
  "orientations": {
    "horizontal": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Horizontale" } },
    "vertical": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Verticale" } },
    "label": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Orientation" } }
  },
  "menuElement": {
    "spacer": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Espacement" } },
    "missingLinkValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nom du lien manquant..." } },
    "emptyLinkValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nom du lien vide..." } },
    "missingButtonValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nom du bouton manquant..." } },
    "missingValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aucune entr\xE9e de menu" } },
    "emptyButtonValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nom du bouton vide..." } },
    "separator": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "S\xE9parateur" } }
  },
  "menuElementForm": {
    "menuItemsLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Entr\xE9es du menu" } },
    "addMenuItemLink": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ajouter..." } },
    "menuItemTypeItem": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Item" } },
    "menuItemAddSeparator": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "S\xE9parateur" } },
    "menuItemVariantLink": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Lien" } },
    "menuItemVariantLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Variante" } },
    "namePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Page" } },
    "noMenuItemsMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": 'Cliquez sur "Ajouter" pour ajouter votre premi\xE8re entr\xE9e de menu.' } },
    "menuItemAddLink": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Lien" } },
    "alignment": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Alignement" } },
    "menuItemAddButton": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Bouton" } },
    "menuItemDefaultName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Page" } },
    "menuItemTypeLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Type" } },
    "menuItemSubLinkDefaultName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Lien enfant" } },
    "menuItemLabelLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Label" } },
    "menuItemAddSpacer": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Espacement" } },
    "menuItemTypeSeparator": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "S\xE9parateur" } },
    "menuItemVariantButton": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Bouton" } },
    "addSubLink": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ajouter un lien enfant" } },
    "eventDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pour configurer les actions de ce bouton, ouvrez l'onglet \xAB\xA0\xC9v\xE9nements\xA0\xBB de l'\xE9l\xE9ment courant." } },
    "variant": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Variante par type d'appareil" } },
    "expanded": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Normale" } },
    "compact": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Compacte" } },
    "previewCompactMenuLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aper\xE7u du menu compact" } },
    "previewCompactMenuHelper": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Afficher/masquer l'aper\xE7u du menu compact." } },
    "openEditorCompactMenu": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ouvrir le menu" } },
    "closeEditorCompactMenu": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Fermer le menu" } }
  },
  "simpleContainerElementForm": {
    "noConfigurationOptions": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "L'\xE9l\xE9ment conteneur n'a pas de configuration." } }
  },
  "ratingFieldForm": {
    "style": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Style" } },
    "star": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\xC9toile" } },
    "thumbsUp": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pouce en l'air" } },
    "value": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Valeur" } },
    "heart": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "C\u0153ur" } },
    "maxValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Valeur maximale" } },
    "flag": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Drapeau" } },
    "color": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Couleur" } }
  },
  "ratingElementForm": {
    "flag": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Drapeau" } },
    "ratingStyle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Style" } },
    "star": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\xC9toile" } },
    "thumbsUp": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pouce en l'air" } },
    "maxValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Maximum" } },
    "heart": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "C\u0153ur" } },
    "color": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Couleur" } },
    "smile": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sourire" } }
  },
  "linkDecorations": {
    "normal": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Normal" } },
    "plain": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Normal" } }
  },
  "userSourceDropdown": {
    "addUserSource": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ajouter une nouvelle source d'utilisateurs" } },
    "noUserSources": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aucune source d'utilisateur disponible" } },
    "label": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Source d'utilisateur" } }
  },
  "textDecorationSelector": {
    "underline": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Souligner" } },
    "stroke": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Barrer" } },
    "italic": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Italique" } },
    "uppercase": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Majuscules" } }
  },
  "abFileInput": {
    "delete": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Supprimer" } }
  },
  "automationSettingsModal": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sc\xE9nario" } }
  },
  "elementsGuidedTourStep": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ajouter des \xE9l\xE9ments \xE0 votre page" } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Toutes les applications ont besoin de composants\u202F! Ajoutez des \xE9l\xE9ments tels que des tableaux, des formulaires, des boutons, etc. pour donner vie \xE0 votre application." } }
  },
  "dataGuidedTourStep": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Connectez vos donn\xE9es" } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Liez vos tables Baserow ici pour afficher, filtrer et mettre \xE0 jour vos donn\xE9es de mani\xE8re dynamique sur diff\xE9rents \xE9l\xE9ments." } }
  },
  "previewGuidedTourStep": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Votre centre de contr\xF4le" } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "C'est ici que vous configurez les pages de votre application. Ajoutez des \xE9l\xE9ments, pr\xE9visualisez le r\xE9sultat et structurez votre application exactement comme vous le souhaitez." } }
  },
  "devicesGuidedTourStep": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pr\xE9visualisation sur diff\xE9rents appareils" } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Passez d'un aper\xE7u pour ordinateur de bureau \xE0 un aper\xE7u pour tablette et \xE0 un aper\xE7u pour mobile afin de voir comment votre application se pr\xE9sente sur diff\xE9rentes tailles d'\xE9cran. Assurez-vous que votre design fonctionne parfaitement sur tous les appareils\u202F!" } }
  },
  "sidePanelGuidedTourStep": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Panneau lat\xE9ral\xA0: Personnaliser les \xE9l\xE9ments" } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "*Onglet G\xE9n\xE9ral** - Configurez l'\xE9l\xE9ment s\xE9lectionn\xE9.\n\n**Onglet Style** - Personnalisez le remplissage, la marge, les bordures, etc.\n\n**Onglet Visibilit\xE9** - Contr\xF4lez qui peut voir cet \xE9l\xE9ment\xA0: les utilisateurs connect\xE9s, les utilisateurs d\xE9connect\xE9s ou des r\xF4les sp\xE9cifiques.\n\n**Onglet \xC9v\xE9nements** - Si l'\xE9l\xE9ment prend en charge des actions, configurez-les ici pour une interactivit\xE9 dynamique." } }
  },
  "previewPublishGuidedTourStep": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pr\xE9visualiser et publier votre application" } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cliquez sur **Preview** pour tester votre application en priv\xE9. Lorsque vous \xEAtes pr\xEAt, cliquez sur **Publier** pour la partager avec le public via un domaine." } }
  },
  "builderToast": {
    "details": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "D\xE9tails" } },
    "defaultTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Erreur inattendue" } },
    "defaultMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Une erreur inattendue s'est produite. Veuillez r\xE9essayer plus tard." } },
    "invalidContextTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Demande non valide" } },
    "invalidContextMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "La demande n'est pas valide." } },
    "InvalidContentTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Formulaire invalide" } },
    "invalidContentMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Un ou plusieurs champs contiennent des valeurs non valides." } },
    "serviceMisconfiguredTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Configuration incompl\xE8te" } },
    "serviceMisconfiguredMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Veuillez v\xE9rifier la configuration." } },
    "errorWorkflowActionDispatch": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "L'action \xAB " }, { "t": 4, "k": "nom" }, { "t": 3, "v": " \xBB a \xE9chou\xE9\xA0: " }] } },
    "errorDataSourceDispatch": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "\xC9chec du chargement de \xAB " }, { "t": 4, "k": "name" }, { "t": 3, "v": " \xBB\xA0: " }] } }
  },
  "workflowAction": {
    "sampleDataModalTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Donn\xE9es pour " }, { "t": 4, "k": "actionLabel" }] } },
    "sampleDataModalSubTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Donn\xE9es JSON" } },
    "testActionDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ex\xE9cutez cette action en mode aper\xE7u pour enregistrer son r\xE9sultat et le mettre \xE0 la disposition des actions suivantes." } }
  }
};

export { resource as default };
//# sourceMappingURL=fr-DlGwRBi1.mjs.map
