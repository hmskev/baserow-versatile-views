!(function() {
  try {
    var e = false ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
    var n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "336b5313-e8ec-4ad7-a4bc-e2b35143af29", e._sentryDebugIdIdentifier = "sentry-dbid-336b5313-e8ec-4ad7-a4bc-e2b35143af29");
  } catch (e2) {
  }
})();
const resource = {
  "builderForm": {
    "submit": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aggiungi applicazione" } }
  },
  "sidebarComponentBuilder": {
    "settings": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Impostazioni" } },
    "createPage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nuova pagina" } }
  },
  "builderSettingsModal": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Applicazione" } }
  },
  "builderSettingTypes": {
    "integrationsName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Integrazioni" } },
    "themeName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tema" } },
    "domainsName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Domini" } },
    "userSourcesName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Utenti" } },
    "generalName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Generale" } }
  },
  "createPageModal": {
    "header": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Crea pagina" } },
    "submit": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aggiungi pagina" } }
  },
  "pageForm": {
    "nameLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nome" } },
    "errorNameNotUnique": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Una pagina con questo nome esiste gi\xE0" } },
    "defaultName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Page" } },
    "errorStartingSlash": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Un percorso valido deve iniziare con '/'" } },
    "errorValidPathCharacters": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Il percorso contiene caratteri non validi" } },
    "pathLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Percorso" } },
    "errorPathNotUnique": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Un percorso con questo nome esiste gi\xE1" } },
    "pathParamsTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Parametri di percorso" } },
    "nameTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nome" } },
    "pathParamsSubtitleTutorial": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "I parametri di percorso possono essere usati per caricare in modo dinamico i dati. Aggiungi :parameter al percorso per aggiungerne uno." } },
    "nameSubtitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nome unico della pagina" } },
    "pathTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Percorso" } },
    "pathParamsSubtitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sono definiti da :parameter nel percorso" } },
    "pathSubtitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Un parametro pu\xF2 essere aggiunto tramite :parameter" } }
  },
  "pageHeaderItemTypes": {
    "labelElements": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Elementi" } },
    "labelDataSource": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dati" } },
    "labelSettings": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Impostazioni pagina" } },
    "labelVariables": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Variabili" } }
  },
  "elementsContext": {
    "searchPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ricerca elementi" } },
    "noElements": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nessun elemento trovato" } }
  },
  "elementType": {
    "heading": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Intestazione" } },
    "text": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Paragrafo" } },
    "textDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Testo a multipla linea" } },
    "headingDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Titolo intestazione" } },
    "inputTextDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Un campo di input di testo" } },
    "columnDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Contenitore di colonne" } },
    "image": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Immagine" } },
    "imageDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mostra immagine" } },
    "inputText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Input di testo" } },
    "column": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Colonne" } },
    "formContainer": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Modulo" } },
    "button": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pulsante" } },
    "formContainerDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Un elemento modulo" } },
    "link": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Collegamento" } },
    "table": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tabella" } },
    "buttonDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Un elemento pulsante" } },
    "tableDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Un elemento tabella" } },
    "dropdown": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Elenco a tendina" } },
    "dropdownDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Un elemento elenco a tendina" } },
    "checkbox": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Checkbox" } },
    "checkboxDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Un elemento checkbox" } },
    "linkDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Un link ad una pagina/URL" } },
    "iframe": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "IFrame" } },
    "authForm": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Modulo di login" } },
    "authFormDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Un modulo di login utente" } },
    "iframeDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Frame in linea" } },
    "repeat": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ripeti" } },
    "repeatDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Un set di elementi ripetibile" } },
    "choice": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Scelta" } },
    "choiceDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Per valori singoli/multipli" } },
    "recordSelector": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Seleziona record" } },
    "recordSelectorDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Selettore di un record collegato" } }
  },
  "addElementButton": {
    "label": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Elemento" } }
  },
  "addElementModal": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aggiungi un nuovo elemento" } },
    "searchPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cerca elementi" } },
    "disabledElementTooltip": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Non disponibile in questo elemento" } }
  },
  "elementMenu": {
    "moveUp": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Muovi in alto" } },
    "moveDown": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Muovi in basso" } },
    "moveRight": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Muovi a destra" } },
    "moveLeft": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Muovi a sinistra" } },
    "selectParent": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Seleziona padre" } }
  },
  "duplicatePageJobType": {
    "duplicating": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Duplicando" } },
    "duplicatedTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pagina duplicata" } }
  },
  "pageSidePanelType": {
    "style": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Stile" } },
    "visibility": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Visibilit\xE0" } },
    "general": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Generale" } },
    "events": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Eventi" } },
    "eventsTabDeactivatedNoEvents": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Questo elemento non supporta nessun evento" } }
  },
  "emptySidePanelState": {
    "message": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Clicca su uno degli elementi per vedere maggiori dettagli" } }
  },
  "headingElement": {
    "noValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nessun titolo..." } }
  },
  "headingElementForm": {
    "textTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Testo" } },
    "textPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Inserisci testo..." } },
    "headingName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Intestazione " }, { "t": 4, "k": "level" }, { "t": 3, "v": " <h" }, { "t": 4, "k": "level" }, { "t": 3, "v": ">" }] } },
    "textError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Il valore non \xE8 valido." } },
    "levelTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Livello" } }
  },
  "textElement": {
    "noValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Paragrafo vuoto..." } }
  },
  "textElementForm": {
    "textTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Testo" } },
    "textError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Il valore non \xE8 valido." } },
    "textPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Inserisci testo..." } },
    "textFormatTypeMarkdown": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Markdown" } },
    "textFormatTypeLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Formato" } },
    "textFormatTypePlain": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Testo semplice" } }
  },
  "authFormElement": {
    "selectOrConfigureUserSourceFirst": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Seleziona una sorgente utenti per iniziare ad utilizzare questo elemento login." } },
    "email": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Email" } },
    "password": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Password" } },
    "emailPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Inserisci la tua email..." } },
    "passwordPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Inserisci la tua password..." } }
  },
  "userSourceUsersContext": {
    "searchPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cerca utente" } },
    "anonymous": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Anonimo" } },
    "unnamed": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Senza nome" } },
    "noEmail": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Senza email" } }
  },
  "userSelector": {
    "viewAs": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Vedi come: " }, { "t": 4, "k": "user" }] } },
    "anonymous": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Anonimo" } },
    "member": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "prefix" }, { "t": 3, "v": " membro" }] } }
  },
  "dataProviderType": {
    "pageParameter": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Parametro" } },
    "currentRecord": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sorgente dati" } },
    "formData": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dati del modulo" } },
    "dataSource": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Record" } },
    "user": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Utente" } },
    "previousAction": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Azione precedente" } },
    "dataSourceContext": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Opzioni disponibili" } },
    "metadata": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Metadati" } }
  },
  "elementForms": {
    "invalidFormula": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "La formula non \xE8 valida" } },
    "textInputPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Inserisci testo..." } },
    "urlInputPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Inserisci URL..." } }
  },
  "integrationSettings": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Integrazioni" } },
    "noIntegrationMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Non hai ancora creato alcuna integrazione. Puoi crearle aggiungendo un'origine dati, un'azione o l'autenticazione dell'utente." } },
    "integrationMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\xC8 possibile creare nuove integrazioni aggiungendo un'origine dati, un'azione o l'autenticazione dell'utente." } }
  },
  "dataSourceContext": {
    "noDataSourceMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "La sorgente dati pu\xF2 essere usata per caricare i dati da sorgenti interne o esterne per mostrarli sulla pagina." } },
    "addDataSource": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aggiungi una nuova sorgente dati" } },
    "noDataSourceTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "La pagina non ha una sorgente dati." } }
  },
  "defaultStyleForm": {
    "boxTop": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Alto" } },
    "backgroundColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Colore di sfondo" } },
    "boxBottom": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Basso" } },
    "backgroundLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sfondo" } },
    "widthLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Larghezza" } },
    "boxLeft": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sinistra" } },
    "boxRight": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Destra" } },
    "backgroundImage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Immagine" } },
    "backgroundImageMode": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Riempimento" } }
  },
  "openPageWorkflowActionForm": {
    "urlPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Inserisci testo..." } },
    "urlLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "URL" } }
  },
  "pageErrors": {
    "errorNameNotUnique": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Una pagina con questo nome esiste gi\xE0" } },
    "errorPathNotUnique": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Un percorso con questo nome esiste gi\xE0" } },
    "errorStartingSlash": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Un percorso deve iniziare con '/' per essere considerato valido" } },
    "errorValidPathCharacters": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Il percorso contiene caratteri non validi" } },
    "errorUniquePathParams": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "I parametri di percorso devono essere unici." } }
  },
  "publishActionModal": {
    "openInNewTab": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Apri in una nuova scheda" } },
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pubblica" } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pubblica la tua app su uno dei tuoi domini. Nota che l'applicazione pu\xF2 avere domini multipli, ognuno con una versione differente della applicazione." } },
    "publishSucceedTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sito puibblicato" } },
    "publishFailedTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Il sito non \xE8 stato pubblicato a causa di un errore imprevisto" } },
    "publishFailedDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Il sito non \xE8 stato pubblicato. Riprova di nuovo pi\xF9 tardi." } },
    "importingState": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Importando" } },
    "publish": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pubblica" } },
    "noDomain": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Devi configurare almeno un dominio per poter pubblicare la tua applicazione." } },
    "publishSucceedDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Il sito \xE8 stato pubblicato con successo." } },
    "publishSucceedLink": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Vedi sito" } },
    "addDomain": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aggiungi dominio" } }
  },
  "domainSettings": {
    "titleOverview": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Domini" } },
    "addDomain": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aggiungi un dominio" } },
    "titleAddDomain": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aggiungi un dominio" } },
    "noDomainMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Non hai associato un dominio alla tua applicazione. Devi aggiungere un dominio per essere in grado di pubblicare la tua applicazione. Ricorda che puoi pubblicare versioni diverse della tua applicazione su domini diversi." } }
  },
  "imageElementForm": {
    "uploadFileButton": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Carica file" } },
    "altTextTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Testo alternativo" } },
    "fileSourceTypeURL": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "URL" } },
    "fileLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Immagine" } },
    "invalidUrlError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "L'URL non \xE8 valido" } },
    "fileSourceTypeUpload": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Carica" } },
    "maxWidthLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Larghezza massima" } },
    "maxHeightLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Altezza massima" } },
    "maxHeightPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Inserisci un'altezza massima in pixel." } },
    "maxWidthPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Inserisci una larghezza massima come percentuale." } },
    "imageConstraintsLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Vincoli" } },
    "imageConstraintFullWidth": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Estendi alla larghezza massima" } },
    "imageConstraintCover": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Maschera" } },
    "imageConstraintCoverDisabled": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Non disponibile con altezza massima vuota." } },
    "imageConstraintContainDisabled": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Non disponibile con altezza massima." } },
    "imageConstraintContain": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Contiene" } },
    "altTextDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\xE8 utilizzato da screen reader e mostrato se l'immagine non pu\xF2 essere caricata" } },
    "urlWarning": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nota: per favore assicurati di avere verificato che l'URL inserito sia valido ed affidabile." } }
  },
  "pageSettingsTypes": {
    "pageName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pagina" } }
  },
  "pageSettings": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pagina" } },
    "pageUpdatedTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Modificato" } },
    "pageUpdatedDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Le impostazioni della pagina sono state aggiornate." } }
  },
  "columnElementForm": {
    "columnAmountName": { "t": 0, "b": { "t": 1, "c": [{ "t": 2, "i": [{ "t": 3 }], "s": "nessuna colonna" }, { "t": 2, "i": [{ "t": 3 }], "s": "1 colonna" }, { "t": 2, "i": [{ "t": 4, "k": "columnAmount" }, { "t": 3, "v": " colonne" }] }] } },
    "columnAmountTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Layout" } },
    "columnGapTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Spazio tra le colonne" } },
    "columnGapPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Inserisci uno spazio tra le colonne..." } },
    "verticalAlignment": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Allineamento verticale" } }
  },
  "domainCard": {
    "detailLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mostra i dettagli" } },
    "refresh": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aggiorna i parametri" } }
  },
  "linkElementForm": {
    "text": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Testo" } },
    "targetNewTab": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nuova scheda" } },
    "variant": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Variante" } },
    "targetSelf": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Stessa scheda" } },
    "variantLink": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Link" } },
    "target": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Apri in..." } },
    "textPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Inserisci testo..." } },
    "variantButton": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pulsante" } },
    "buttonColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Colore pulsante" } }
  },
  "horizontalAlignmentSelector": {
    "alignment": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Allineamento orizzontale" } },
    "alignmentLeft": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sinistra" } },
    "alignmentCenter": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Centrale" } },
    "alignmentRight": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Destra" } }
  },
  "pathParamTypes": {
    "textName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Testo" } },
    "numericName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Numerico" } }
  },
  "lastPublishedDomainDate": {
    "lastPublished": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ultima pubblicazione:" } },
    "neverPublished": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "mai" } }
  },
  "customDomainForm": {
    "domainNameLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nome dominio" } }
  },
  "subDomainForm": {
    "domainNameLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nome dominio" } }
  },
  "verticalAlignmentSelector": {
    "alignmentCenter": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Centro" } },
    "alignment": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Allineamento verticale" } },
    "alignmentTop": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Alto" } },
    "alignmentBottom": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Basso" } }
  },
  "publicPage": {
    "pageNotFound": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pagina non trovata" } },
    "siteNotFound": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sito non trovato" } }
  },
  "mainThemeConfigBlock": {
    "headingLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Titolo " }, { "t": 4, "k": "i" }, { "t": 3, "v": " (h" }, { "t": 4, "k": "i" }, { "t": 3, "v": ")" }] } },
    "colorsLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Colori" } },
    "primaryColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Primario" } },
    "typography": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tipografia" } },
    "secondaryColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Secondario" } },
    "headingValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Titolo <h" }, { "t": 4, "k": "i" }, { "t": 3, "v": ">" }] } }
  },
  "eventTypes": {
    "clickLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Al click" } },
    "submitLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "All'invio" } },
    "afterLoginLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dopo login" } }
  },
  "tableElementForm": {
    "fields": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Campi" } },
    "fieldValueLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Valore" } },
    "addField": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "aggiungi campo" } },
    "itemsPerPagePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Inserisci valore..." } },
    "dataSource": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sorgente dati" } },
    "fieldValuePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Inserisci valore..." } },
    "itemsPerPage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Oggetti per pagina" } },
    "fieldDefaultName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Colonna" } },
    "fieldType": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tipo" } },
    "selectSourceFirst": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Seleziona una sorgenti dati di tipo lista per iniziare a configurare i tuoi campi." } },
    "buttonColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Colore pulsante" } },
    "refreshFieldsFromDataSource": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "aggiorna i campi dalla sorgente di dati" } },
    "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nome" } },
    "orientation": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Orientamento" } },
    "orientationHorizontal": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Orizzontale" } },
    "orientationVertical": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Verticale" } },
    "buttonLoadMoreLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mostra altri" } }
  },
  "tableElement": {
    "showMore": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mostra di pi\xF9" } },
    "empty": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nessun oggetto trovato." } }
  },
  "pageActionTypes": {
    "publish": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pubblica" } },
    "preview": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Anteprima" } }
  },
  "pagePreview": {
    "emptyMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Clicca per creare il primo elemento" } },
    "header": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "INTESTAZIONE" } },
    "footer": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "PI\xC8 DI PAGINA" } }
  },
  "domainForm": {
    "notUniqueDomain": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Il dominio \xE8 gi\xE0 stato utilizzato" } },
    "invalidDomain": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Il nome dominio inserito non \xE8 valido" } }
  },
  "domainTypes": {
    "customName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dominio personalizzato" } },
    "subDomainName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sottodominio" } },
    "subDomain": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Sottodominio di " }, { "t": 4, "k": "domain" }] } }
  },
  "styleBoxForm": {
    "borderLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dimensione" } },
    "paddingLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Padding" } },
    "marginLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Margine" } },
    "borderColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Colore bordo" } }
  },
  "buttonElementForm": {
    "valuePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Inserisci testo..." } },
    "valueLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Testo bottone" } },
    "buttonColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Colore pulsante" } }
  },
  "buttonElement": {
    "noValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Senza nome..." } }
  },
  "getFormulaComponent": {
    "errorTooltip": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Riferimento non valido" } }
  },
  "currentRecordDataProviderType": {
    "index": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Indice" } },
    "firstPartName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Sorgente dati: " }, { "t": 4, "k": "name" }] } }
  },
  "workflowActionTypes": {
    "notificationLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mostra Notifiche" } },
    "createRowLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Crea Riga" } },
    "openPageLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Apri Pagina" } },
    "updateRowLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aggiorna Riga" } },
    "logoutLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Logout" } },
    "refreshDataSourceLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aggiorna le sorgenti di dati" } }
  },
  "notificationWorkflowActionForm": {
    "titleLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Titolo" } },
    "titlePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Inserisci testo..." } },
    "descriptionLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Descrizione" } },
    "descriptionPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Inserisci testo..." } }
  },
  "collectionFieldType": {
    "text": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Testo" } },
    "link": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Collegamento" } },
    "tags": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tag" } },
    "boolean": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Booleano" } },
    "button": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pulsante" } },
    "image": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Immagine" } }
  },
  "linkFieldForm": {
    "fieldValueLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "URL" } },
    "fieldValuePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Inserisci valore..." } },
    "fieldLinkNameLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Testo collegamento" } },
    "fieldLinkNamePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Inserisci valore..." } },
    "buttonColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Colore pulsante" } }
  },
  "textFieldForm": {
    "fieldValueLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Valore" } },
    "fieldValuePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Inserisci valore..." } }
  },
  "linkField": {
    "details": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dettagli" } }
  },
  "updateUserSourceForm": {
    "nameFieldLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nome" } },
    "nameFieldPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Inserisci un nome..." } },
    "authTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Autenticazione" } },
    "integrationFieldLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Integrazione" } }
  },
  "createUserSourceForm": {
    "userSourceIntegration": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Integrazione" } },
    "userSourceName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nome" } },
    "userSourceType": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tipo" } }
  },
  "formContainerElementForm": {
    "submitButtonLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pulsante di invio" } },
    "submitButtonPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Inserisci valore..." } },
    "buttonColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Colore pulsante" } },
    "resetToInitialValuesDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Se selezionato, i valori predefiniti del modulo verranno utilizzati per reimpostare il modulo dopo un invio riuscito. Altrimenti rimarranno i valori dell'utente." } },
    "resetToInitialValuesTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ripristina i valori predefiniti dopo l'invio" } }
  },
  "dispatchWorkflowActionError": {
    "defaultTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Errore evento" } },
    "defaultMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Questo evento ha generato un errore imprevisto." } },
    "formDataInvalidTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Modulo non valido" } },
    "formDataInvalidMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Uno o pi\xF9 campi contengono valori non validi." } }
  },
  "upsertRowWorkflowActionForm": {
    "integrationDropdownLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Integrazione" } },
    "rowIdLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "ID Riga" } },
    "fieldMappingPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Scegli un valore di campo" } },
    "rowIdPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Seleziona un ID riga" } },
    "noTableSelectedMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Scegli una tabella per cominciare a configurare i tuoi campi." } }
  },
  "widthTypes": {
    "full": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Larghezza intera" } },
    "normal": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Normale" } },
    "small": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Piccolo" } },
    "medium": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Medio" } },
    "fullBleed": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Schermo intero" } },
    "fullWidth": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tutta la larghezza" } }
  },
  "widthSelector": {
    "widthFull": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Larghezza intera" } },
    "width": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Larghezza" } },
    "widthAuto": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Auto" } }
  },
  "backgroundTypes": {
    "none": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nessuno" } },
    "color": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Colore" } }
  },
  "iframeElementForm": {
    "sourceTypeLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tipo sorgente" } },
    "urlLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "URL" } },
    "urlPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Collegamento alla risorsa esterna da incorporare" } },
    "urlHelp": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nota: per favore assicurati di avere verificato che l'URL inserito sia valido ed affidabile." } },
    "embedLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Incorpora" } },
    "empty": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "IFrame vuoto..." } },
    "embedPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "HTML grezzo da incorporare" } },
    "heightLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Altezza (px)" } },
    "heightPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Altezza in pixel" } }
  },
  "dnsStatus": {
    "typeHeader": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tipo" } },
    "hostHeader": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Host" } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Apporta le seguenti modifiche sul tuo Domain Register per configurare i tuoi domini" } },
    "valueHeader": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Valore" } }
  },
  "linkNavigationSelection": {
    "navigateTo": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Naviga verso" } },
    "navigateToCustom": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "URL personalizzata" } },
    "paramPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Inserisci un valore..." } },
    "urlPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Inserisci una URL..." } },
    "url": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "URL di destinazione" } },
    "paramsInErrorButton": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Modifica parametri" } },
    "paramsInErrorDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "I parametri salvati non corrispondono ai parametri di pagina. La pagina \xE8 stata probabilmente cancellata o modificata." } },
    "target": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aperto in..." } },
    "targetSelf": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Stesso tab" } },
    "targetNewTab": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nuovo tab" } }
  },
  "dropdownOptionSelector": {
    "label": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Opzioni" } },
    "value": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Valore" } },
    "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nome" } },
    "addOption": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "aggiungi opzione" } }
  },
  "checkboxElementForm": {
    "labelTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Etichetta" } },
    "valueTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Valore di default" } },
    "requiredTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Richiesto" } }
  },
  "imageElement": {
    "emptyState": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Non \xE8 stato definito un testo per il tag alt..." } }
  },
  "generalForm": {
    "labelTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Etichetta" } },
    "labelPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Inserisci un'etichetta (opzionale)" } },
    "valueTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Valore" } },
    "valuePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Inserisci un valore di default (opzionale)" } },
    "placeholderTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Placeholder" } },
    "placeholderPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Inserisci un placeholder (opzionale)" } },
    "requiredTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Richiesto" } },
    "validationTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Validazione" } }
  },
  "inputTextElementForm": {
    "multilineTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Multi linea" } },
    "rowsTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Numero di linee" } },
    "rowsPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Inserisci il numero di righe per questo campo input" } },
    "validationTypeAnyDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Permetti qualsiasi valore per questo input." } },
    "validationTypeEmailLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Email" } },
    "validationTypeAnyLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Qualsiasi" } },
    "validationTypeIntegerLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Numero" } },
    "validationTypeEmailDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Obbliga ad inserire un indirizzo email in questo input." } },
    "validationTypeIntegerDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Obbliga ad inserire un valore numerico per questo input." } },
    "inputTypeTextLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Testo" } },
    "inputTypePasswordLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Password" } },
    "passwordTypeWarning": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Le password sono dati sensibili. Fai attenzione a come gestisci e salvi le password nella tua applicazione." } },
    "inputType": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tipo di input" } }
  },
  "userSourceSettings": {
    "titleAddUserSource": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nuova sorgente dati" } },
    "titleOverview": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sorgente di utenti" } },
    "addUserSource": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aggiungi sorgente utenti" } },
    "titleUpdateUserSource": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Modifica sorgente utenti" } },
    "noUserSourceMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Non hai ancora aggiunto una sorgente di utenti per la tua applicazione. Devi aggiungerne una se vuoi essere in grado di autenticare gli utenti con la tua applicazione." } }
  },
  "subDomainDetails": {
    "text": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Le impostazioni DNS per il dominio sono state applicate e verificate. Funziona senza fare ulteriori cambiamenti." } }
  },
  "linkElement": {
    "noValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Senza nome..." } }
  },
  "dataSourceForm": {
    "namePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nome sorgente" } },
    "servicePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Scegli un servizio" } },
    "integrationPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Scegli un'integrazione" } },
    "errorUniqueName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Il nome della sorgente deve essere unico." } },
    "nameLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nome" } },
    "actionLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Azione" } },
    "integrationLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Integrazione" } }
  },
  "fontSidePanelForm": {
    "label": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Colore carattere" } }
  },
  "formDataProviderType": {
    "nodeMissing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mancante" } }
  },
  "event": {
    "addAction": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "aggiungi azione" } }
  },
  "dispatchDataSourceError": {
    "defaultTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Errore nel caricamento dati" } },
    "defaultMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Errore imprevisto durante il caricamento dei dati per la pagina." } }
  },
  "authFormElementForm": {
    "userSource": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sorgente utenti" } }
  },
  "formContainerElement": {
    "submitDeactivatedText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Completa tutti i campi richiesti per inviare" } },
    "defaultSubmitButtonLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Invia" } }
  },
  "visibilityForm": {
    "loggedInVisitors": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Visitatori loggati" } },
    "notLoggedInVisitors": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Visitatori non loggati" } },
    "allVisitors": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tutti i visitatori" } },
    "warningTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Manteniamo alti gli standard di sicurezza" } },
    "warningMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Al momento la visibilit\xE0 \xE8 applicata solo nell'interfaccia utente, i dati sottostanti sono comunque accessibili dall'API. Per favore, consulta la &lt;a href='https://baserow.io/user-docs/application-builder-element-visibility#note-accessing-hidden-data-via-api'&gt;documentazione&lt;/a&gt; per maggiori informazioni sulla sicurezza dei dati." } },
    "excludedRolesLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tutti ad eccezione di" } },
    "switchAllowLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Permetti" } },
    "switchDisallowLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nega" } },
    "rolesSelectAll": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Seleziona tutti" } },
    "rolesDeselectAll": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Deseleziona tutti" } },
    "rolesSelectHint": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Selezione uno o pi\xF9 ruoli" } },
    "roleTypesHint": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Seleziona un ruolo" } },
    "roleTypeAllowAllRoles": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tutti i ruoli" } },
    "roleTypeAllowAllRolesExcept": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nega ai ruoli..." } },
    "roleTypeDisallowAllRolesExcept": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Permetti ai ruoli..." } },
    "rolesAllMembersOf": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Tutti i membri di " }, { "t": 4, "k": "name" }] } },
    "noRole": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nessun ruolo" } },
    "errorFetchingRolesTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Non riesco a leggere i ruoli utente" } },
    "errorFetchingRolesMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "C'\xE8 stato un problema nel leggere i ruoli utente." } },
    "visibilityConditionHelper": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Se il risultato di questa formula \xE8 vero, e la scelta del visitatore sopra \xE8 vera, l'elemento sar\xE0 visibile. Questa condizione influisce solo sulla visibilit\xE0 dell'elemento. Per escludere i dati dalla risposta del server invece, usa l'opzione di filtraggio per ruolo utente sopra." } }
  },
  "generalSettings": {
    "titleOverview": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Generale" } },
    "labelForm": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Favicon" } },
    "labelButton": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Carica favicon" } },
    "labelDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Scegli una immagine 128x128 pixel di tipo ICO, PNG, GIF or JPEG." } },
    "cantUploadFaviconTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Impossibile caricare Favicon" } },
    "cantUploadFaviconDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Non \xE8 stato possibile caricare l'immagine favicon. Assicurati che l'immagine sia in uno dei formati supportati." } },
    "cantUpdateApplicationTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Non \xE8 stato possibile aggiornare l'applicazione" } },
    "cantUpdateApplicationDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Non \xE8 stato possibile aggiornare l'applicazione" } }
  },
  "repeatElement": {
    "empty": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nessun elemento trovato." } },
    "showMore": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mostra di pi\xF9" } },
    "missingDataSourceTooltip": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Scegli una sorgente di dati per cominciare ad aggiungere elementi." } },
    "missingSchemaPropertyTooltip": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Scegli una propriet\xE0 per cominciare ad aggiungere elementi." } }
  },
  "repeatElementForm": {
    "dataSource": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sorgente di dati" } },
    "itemsPerPagePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Inserisci un valore..." } },
    "itemsPerRowLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Elementi per riga" } },
    "itemsPerPage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Elementi per pagina" } },
    "itemsPerRowDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Numero di colonne per righe e per tipo di device." } },
    "orientationLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Modailit\xE0" } },
    "orientationVertical": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Verticale" } },
    "orientationHorizontal": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Orizzontale" } },
    "buttonLoadMoreLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mostra altri" } },
    "gapVerticalLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Verticale" } },
    "gapHorizontalLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Orizzontale" } }
  },
  "imageInput": {
    "labelDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Descrizione di default" } },
    "labelButton": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Carica" } }
  },
  "tagsFieldForm": {
    "fieldValuesLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Valori" } },
    "fieldValuesPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Inserisci valori..." } },
    "fieldColorsPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Inserisci colori..." } },
    "fieldColorsLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Colori" } }
  },
  "userDataProviderType": {
    "isAuthenticated": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\xC8 autenticato" } },
    "email": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Email" } },
    "username": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nome utente" } },
    "id": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Id" } },
    "role": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ruolo" } }
  },
  "buttonField": {
    "noLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Senza nome..." } }
  },
  "buttonFieldForm": {
    "infoMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": `Per configurare le azioni per questo bottone, apri il tab "Eventi" dell'elemento correte.` } },
    "labelPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Inserisci un'etichetta..." } }
  },
  "themeConfigBlockType": {
    "color": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Colori" } },
    "typography": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tipografia" } },
    "page": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pagina" } },
    "button": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Bottone" } },
    "link": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Link" } },
    "image": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Immagine" } },
    "input": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Input" } },
    "table": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tabella" } }
  },
  "colorThemeConfigBlock": {
    "primaryColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Primario" } },
    "secondaryColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Secondario" } },
    "borderColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Bordo" } },
    "errorColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Errore" } },
    "successColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Successo" } },
    "warningColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Avvertimento" } },
    "transparent": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Trasparente" } },
    "customColorPrefix": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Personalizzato" } }
  },
  "typographyThemeConfigBlock": {
    "headingValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Titolo <h" }, { "t": 4, "k": "i" }, { "t": 3, "v": ">" }] } },
    "color": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Colore" } },
    "size": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dimensione" } },
    "textAlignment": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Allineamento" } },
    "bodyLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Corpo" } },
    "fontFamily": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Font" } },
    "headingLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Titolo " }, { "t": 4, "k": "i" }, { "t": 3, "v": " (h" }, { "t": 4, "k": "i" }, { "t": 3, "v": ")" }] } },
    "weight": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Spessore" } }
  },
  "buttonThemeConfigBlock": {
    "hoverState": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Stato hover" } },
    "backgroundColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Colore di sfondo" } },
    "button": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Bottone" } },
    "defaultState": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Stato iniziale" } },
    "textAlignment": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Allineamento testo" } },
    "alignment": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Allineamento" } },
    "width": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Larghezza" } },
    "textColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Colore testo" } },
    "borderColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Colore bordo" } },
    "borderSize": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dimensione del bordo" } },
    "borderRadius": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Raggio del bordo" } },
    "padding": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Padding" } },
    "fontFamily": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Font" } },
    "size": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dimensione font" } }
  },
  "linkThemeConfigBlock": {
    "color": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Colore" } },
    "link": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Link" } },
    "defaultState": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Stato iniziale" } },
    "hoverState": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Stato hover" } },
    "alignment": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Allineamento" } },
    "fontFamily": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Font" } }
  },
  "imageThemeConfigBlock": {
    "maxWidthLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Larghezza massima" } },
    "maxHeightPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Inserisci un'altezza massima" } },
    "maxWidthPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Inserisci una larghezza massima" } },
    "imageConstraintsLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Vincoli" } },
    "imageConstraintFullWidth": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Estendi alla larghezza massima" } },
    "imageConstraintCover": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Copertina" } },
    "imageConstraintCoverDisabled": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Non disponibile senza un'altezza massima." } },
    "alignment": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Allineamento" } },
    "imageConstraintContain": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Contiene" } },
    "maxHeightLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Altezza massima" } },
    "imageConstraintContainDisabled": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Non disponibile senza una larghezza massima." } }
  },
  "choiceElementForm": {
    "multiple": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Permetti valori multipli" } },
    "display": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Display" } },
    "dropdown": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Menu" } },
    "checkbox": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Checkbox" } },
    "radio": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Radio" } }
  },
  "choiceOptionSelector": {
    "label": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Opzioni" } },
    "value": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Valori" } },
    "valuePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Inserisci valore" } },
    "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Valore mostrato" } },
    "optionType": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tipo di opzione" } },
    "dataSource": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sorgente di dati" } },
    "formulas": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Formule" } },
    "manual": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Manuale" } },
    "addOption": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aggiungi opzione" } },
    "namePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Inserisci nome" } }
  },
  "choiceElement": {
    "addOptions": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aggiungi opzioni per iniziare ad usare questo elemento..." } }
  },
  "resetButton": {
    "reset": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Resetta al valore di default del tema" } }
  },
  "backgroundModes": {
    "fill": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Riempi" } },
    "tile": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tile" } },
    "fit": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Riempimento" } }
  },
  "customStyle": {
    "themeOverrides": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Valori tema" } }
  },
  "colorThemeConfigBlockType": {
    "error": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Errore" } },
    "warning": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Avvertimento" } },
    "primary": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Primario" } },
    "secondary": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Secondario" } },
    "success": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Successo" } },
    "border": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Bordo" } },
    "transparent": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Trasparente" } }
  },
  "pageThemeConfigBlock": {
    "backgroundColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Color di sfondo" } },
    "backgroundImage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Immagine di sfonto" } },
    "backgroundMode": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Background" } }
  },
  "inputThemeConfigBlock": {
    "textColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Colore testo" } },
    "padding": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Padding" } },
    "fontFamily": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Font" } },
    "size": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dimensione font" } },
    "borderColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Colore bordo" } },
    "borderSize": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dimensione bordo" } },
    "borderRadius": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Raggio del bordo" } },
    "label": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Etichetta" } },
    "input": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Input" } },
    "backgroundColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Colore di background" } }
  },
  "tableThemeConfigBlock": {
    "verticalSeparatorSize": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dimensione verticale" } },
    "horizontalSeparatorColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Colore orizzontale" } },
    "horizontalSeparatorSize": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dimensione orizzontale" } },
    "separators": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Separatori" } },
    "verticalSeparatorColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Colore verticale" } },
    "borderRadius": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Raggio del bordo" } },
    "padding": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Padding" } },
    "fontFamily": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Font" } },
    "borderColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Colore bordo" } },
    "backgroundAlternateColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Colore righe pari" } },
    "backgroundColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Colore di sfondo" } },
    "textColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Colore del testo" } },
    "borderSize": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dimensione del bordo" } },
    "size": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dimensione" } },
    "fontSize": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dimensione testo" } },
    "table": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tabella" } },
    "header": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Intestazione" } },
    "alignment": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Allineamento" } },
    "cells": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Celle" } }
  },
  "abTable": {
    "loading": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Caricamento..." } },
    "empty": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nessuna riga trovata." } }
  },
  "dropdown": {
    "empty": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nessuna opzione disponibile" } }
  },
  "collectionElementForm": {
    "noSchemaPropertyMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Scegli una propriet\xE0 dentra" } },
    "noDataSourceMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Scegli una sorgente di dati a righe multiple per mostrare i risultati, o a riga singola per mostrare le propriet\xE0 della riga." } }
  },
  "serviceSchemaPropertySelector": {
    "noProperties": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nessuna propriet\xE0 disponibile" } },
    "label": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Propriet\xE0" } }
  },
  "dataSourceDropdown": {
    "noDataSources": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nessuna sorgente di dati disponibile" } },
    "label": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sorgente di dati" } },
    "shared": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "condiviso" } }
  },
  "common": {
    "dateFormatTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Formato data" } },
    "dateFormatEU": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Europeo" } },
    "dateFormatUS": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "US" } },
    "dateFormatISO": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "ISO" } },
    "timeFormatTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Formato ora" } },
    "timeFormat24Hour": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "24 h" } },
    "timeFormat12Hour": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "12 h" } }
  },
  "propertyOptionForm": {
    "fieldHeading": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Campo" } },
    "filterHeading": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Filtro" } },
    "sortHeading": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ordina" } },
    "searchHeading": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cerca" } },
    "optionUnavailable": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Non disponibile" } }
  },
  "themeSettings": {
    "titleOverview": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tema" } }
  },
  "pageVisibilitySettingsTypes": {
    "pageName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Visibilit\xE0" } }
  },
  "pageVisibilitySettings": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Visibilit\xE0" } }
  },
  "multiPageContainerElementForm": {
    "pagePosition": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Posizione" } },
    "display": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Visualizza" } },
    "behaviour": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Comportamento" } }
  },
  "queryParamTypes": {
    "textName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Testo" } },
    "numericName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Numerico" } }
  },
  "radiusStyleForm": {
    "backgroundRadiusLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sfondo" } },
    "borderRadiusLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Bordo" } }
  },
  "fontWeightType": {
    "thin": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Leggero" } },
    "extraLight": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Super\u2011leggero" } },
    "light": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Chiaro" } },
    "regular": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Regolare" } },
    "medium": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Medio" } },
    "semiBold": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Semi\u2011grassetto" } },
    "bold": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Grassetto" } },
    "extraBold": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Extra\u2011grassetto" } },
    "black": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nero" } },
    "extraBlack": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Extra\u2011nero" } }
  },
  "sidePanelGuidedTourStep": {
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "**Tab Generale** \u2013 Configura l'elemento selezionato.\n\n**Tab Stile** \u2013 Personalizza padding, margini, bordi e altro.\n\n**Tab Visibilit\xE0** \u2013 Controlla chi pu\xF2 vedere questo elemento: utenti connessi, utenti disconnessi o ruoli specifici.\n\n**Tab Eventi** \u2013 Se l'elemento supporta azioni, configurale qui per interattivit\xE0 dinamica." } }
  }
};

export { resource as default };
//# sourceMappingURL=it-_Iel5YHv.mjs.map
