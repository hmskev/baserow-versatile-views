!(function() {
  try {
    var e = false ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
    var n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "28cc4935-dd09-4753-b12e-2ad717e43968", e._sentryDebugIdIdentifier = "sentry-dbid-28cc4935-dd09-4753-b12e-2ad717e43968");
  } catch (e2) {
  }
})();
const resource = {
  "integrationType": {
    "localBaserowSummary": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Baserow local - " }, { "t": 4, "k": "name" }, { "t": 3, "v": ", " }, { "t": 4, "k": "username" }] } },
    "localBaserow": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Baserow local" } },
    "localBaserowWarning": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Associer votre compte donne \xE0 tous ceux qui peuvent modifier l'application un acc\xE8s complet aux donn\xE9es auxquelles vous avez acc\xE8s. Il est possible de cr\xE9er un deuxi\xE8me utilisateur, donner les bonnes autorisations et utiliser celui-ci." } },
    "smtp": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mail SMTP" } },
    "ai": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "IA" } },
    "slackBot": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Bot Slack" } }
  },
  "serviceType": {
    "localBaserowGetRow": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Obtenir une ligne" } },
    "localBaserowListRows": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Lister plusieurs lignes" } },
    "localBaserowAggregateRows": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "R\xE9sumer une colonne" } },
    "trashedField": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Champ supprim\xE9" } },
    "misconfigured": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Configuration incorrecte" } },
    "localBaserowCreateRow": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cr\xE9er une ligne" } },
    "localBaserowUpdateRow": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Modification d'une ligne" } },
    "localBaserowDeleteRow": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Supprimer des lignes" } },
    "localBaserowRowsCreated": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Des lignes sont cr\xE9\xE9es" } },
    "localBaserowRowsCreatedDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "D\xE9clench\xE9 lorsque des lignes sont cr\xE9\xE9es dans une table Baserow." } },
    "coreHTTPRequest": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Envoyer une requ\xEAte HTTP" } },
    "localBaserowCreateRowDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cr\xE9e une nouvelle ligne dans une table Baserow." } },
    "localBaserowUpdateRowDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Modifie une ligne dans une table Baserow." } },
    "localBaserowDeleteRowDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Suppression d'une ou pliseurs lignes dans une table Baserow." } },
    "localBaserowRowsUpdated": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Les lignes sont actualis\xE9es" } },
    "localBaserowRowsUpdatedDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "D\xE9clench\xE9 lorsque n'importe quel champs d'une ou plusieurs lignes sont modifi\xE9es dans une table Baserow." } },
    "localBaserowRowsDeleted": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Les lignes sont supprim\xE9es" } },
    "localBaserowRowsDeletedDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "D\xE9clench\xE9 lorsque des lignes sont supprim\xE9s dans une table Baserow." } },
    "coreHTTPRequestDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Envoie une requ\xEAte HTTP \xE0 un point d'acc\xE8s sp\xE9cifi\xE9." } },
    "errorUrlMissing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Propri\xE9t\xE9 Url manquante" } },
    "errorNoTableSelected": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aucune table s\xE9lectionn\xE9e" } },
    "errorFilterInError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Au moins un filtre est mal configur\xE9" } },
    "errorSortingInError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Au moins un tri est mal configur\xE9" } },
    "errorNoFieldSelected": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aucun champ s\xE9lectionn\xE9" } },
    "errorNoAggregationTypeSelected": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aucun type d'agr\xE9gation n'a \xE9t\xE9 s\xE9lectionn\xE9" } },
    "localBaserowGetRowDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Lire une seule ligne d'une table Baserow." } },
    "localBaserowListRowsDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Lit plusieurs lignes d'une table Baserow." } },
    "localBaserowAggregateRowsDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "R\xE9sume un champ dans une table Baserow." } },
    "coreSMTPEmail": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Envoyer un e-mail" } },
    "coreSMTPEmailDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Envoie un e-mail \xE0 l'aide de la configuration SMTP." } },
    "errorFromEmailMissing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": 'Propri\xE9t\xE9 "From Email" manquante' } },
    "errorToEmailsMissing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": 'Propri\xE9t\xE9 "To Emails" manquante' } },
    "coreRouter": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Routeur" } },
    "coreRouterEdgesRequired": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Au moins un branchement est n\xE9cessaire" } },
    "coreRouterEdgeLabelRequired": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Un nom de branche est n\xE9cessaire." } },
    "coreRouterEdgeConditionRequired": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Une condition est n\xE9cessaire." } },
    "coreRouterDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Poursuit vers l'une des branches en fonction d'une condition." } },
    "corePeriodic": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "D\xE9clencheur p\xE9riodique" } },
    "corePeriodicDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "D\xE9clenche le sc\xE9nario \xE0 des intervalles sp\xE9cifi\xE9s" } },
    "corePeriodicErrorIntervalMissing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Un intervalle est n\xE9cessaire." } },
    "aiAgent": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Prompt pour l'IA" } },
    "aiAgentDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Envoyer des prompts aux mod\xE8les d'IA g\xE9n\xE9ratifs configur\xE9s." } },
    "errorNoIntegrationSelected": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aucune int\xE9gration s\xE9lectionn\xE9e" } },
    "errorNoAIProviderSelected": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aucun service d'IA n'a \xE9t\xE9 s\xE9lectionn\xE9" } },
    "errorNoAIModelSelected": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aucun mod\xE8le d'IA n'est s\xE9lectionn\xE9" } },
    "errorNoPromptProvided": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aucun prompt n'a \xE9t\xE9 fournie" } },
    "errorNoChoicesProvided": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aucun choix n'est fait pour le type de sortie" } },
    "coreHTTPTrigger": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Recevoir une requ\xEAte HTTP" } },
    "coreHTTPTriggerDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "D\xE9clench\xE9 quand une requ\xEAte HTTP est re\xE7ue." } },
    "coreIteration": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "It\xE9rateur" } },
    "coreIterationDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "It\xE8re sur une liste d'\xE9l\xE9ments." } },
    "errorIterationSourceMissing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Source manquante" } },
    "slackWriteMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Envoyer un message Slack" } },
    "slackWriteMessageDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Envoie un message \xE0 un #canal Slack sp\xE9cifique" } },
    "slackWriteMessageMissingChannel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Un canal est n\xE9cessaire." } },
    "slackWriteMessageMissingMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Un message est n\xE9cessaire." } },
    "slackWriteMessageMissingIntegration": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aucune int\xE9gration Slack n'a \xE9t\xE9 s\xE9lectionn\xE9e." } },
    "coreManualTrigger": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "D\xE9clencheur manuel" } },
    "localBaserowCreateRows": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cr\xE9ation de lignes par lots" } },
    "localBaserowCreateRowsDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cr\xE9er plusieurs lignes dans une table \xAB Baserow \xBB." } },
    "localBaserowUpdateRows": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mise \xE0 jour de ligne par lots" } },
    "localBaserowUpdateRowsDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Met \xE0 jour plusieurs lignes dans une table \xAB Baserow \xBB." } },
    "localBaserowFieldsUpdated": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Les valeurs de certaines colonnes sont mises \xE0 jour" } },
    "localBaserowFieldsUpdatedDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Se d\xE9clenche lorsque les colonnes s\xE9l\xE9ctionn\xE9es de une ou plusieurs lignes sont mises \xE0 jour d'une table Baserow." } },
    "coreManualTriggerDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ne d\xE9marre que lorsqu'une autre action lance ce sc\xE9nario." } },
    "coreCSVFileReader": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Lire un fichier CSV" } },
    "coreCSVFileReaderDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Lit les lignes d'un fichier CSV." } },
    "coreStartWorkflow": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Lancer un sc\xE9nario" } },
    "coreStartWorkflowDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Lance un sc\xE9nario d'automatisation." } },
    "errorNoRowsSelected": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aucune ligne s\xE9lectionn\xE9e" } },
    "errorCSVFileMissing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Fichier CSV manquant" } },
    "errorCSVContentMissing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "La propri\xE9t\xE9 Fichier CSV est manquante" } },
    "errorNoWorkflowSelected": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aucun sc\xE9nario n'a \xE9t\xE9 s\xE9lectionn\xE9" } },
    "errorWorkflowNotImmediateDispatch": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Le sc\xE9nario s\xE9lectionn\xE9 doit utiliser un d\xE9clencheur pouvant \xEAtre activ\xE9 imm\xE9diatement." } }
  },
  "localBaserowForm": {
    "user": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Utilisateur" } },
    "userMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "En cr\xE9ant cette connexion, vous autorisez l'application \xE0 utiliser votre compte pour effectuer des modifications dans votre projet local Baserow." } }
  },
  "localBaserowGetRowForm": {
    "rowFieldLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "ID de ligne" } },
    "invalidFormula": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "La formule est invalide" } },
    "rowFieldPlaceHolder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Choisir l'ID d'une ligne" } },
    "searchFieldPlaceHolder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Saisissez un terme de recherche..." } },
    "noTableChosenForFiltering": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "S\xE9lectionnez une table pour commencer \xE0 utiliser les filtres de source de donn\xE9es." } },
    "filterTabTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Filtres" } },
    "searchTabTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Recherche" } },
    "noTableChosenForSorting": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Choisissez une table pour pouvoir ordonner les lignes de la sources de donn\xE9es." } },
    "rowFieldHelpText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Laissez cette valeur vide pour renvoyer la premi\xE8re ligne." } }
  },
  "localBaserowListRowsForm": {
    "filterTabTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Filtres" } },
    "sortTabTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tris" } },
    "searchTabTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Recherche" } },
    "searchFieldPlaceHolder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Saisissez un terme de recherche..." } },
    "noTableChosenForFiltering": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "S\xE9lectionnez une table pour commencer \xE0 filtrer les lignes de la source de donn\xE9es." } },
    "noTableChosenForSorting": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "S\xE9lectionnez une table pour pouvoir ordonner les lignes de la sources de donn\xE9es." } },
    "advancedConfig": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Avanc\xE9" } },
    "defaultResultCount": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nombre de r\xE9sultats par d\xE9faut" } },
    "defaultResultCountHelp": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nombre d'enregistrements par d\xE9faut que cette source de donn\xE9es r\xE9cup\xE9rera sur votre page. En fixant cette valeur \xE0 0 et en l'utilisant sur un \xE9l\xE9ment de collection, vous am\xE9liorerez les performances lors du chargement de la page en ne r\xE9cup\xE9rant les enregistrements que lorsque l'\xE9l\xE9ment est pagin\xE9." } },
    "defaultResultCountPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Valeur par d\xE9faut..." } }
  },
  "localBaserowTableServiceConditionalForm": {
    "noFilterTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Vous n'avez pas encore cr\xE9\xE9 de filtre pour cette source de donn\xE9es" } },
    "noFilterText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Les filtres de source de donn\xE9es vous permettent de n'afficher que les lignes de la table Baserow qui satisfont les conditions." } },
    "relatedFieldNotFound": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Le champ correspondant n'a pas \xE9t\xE9 trouv\xE9." } },
    "noCompatibleFilterTypesErrorTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aucun filtre compatible" } },
    "noCompatibleFilterTypesErrorMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aucun de vos champs n'a de filtres compatibles" } },
    "addFilter": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ajouter un filtre" } },
    "filterTypeNotFound": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Le type de filtre n'est pas compatible." } },
    "useFormulaForValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Utiliser une formule pour ce filtre" } },
    "useDefaultForValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Utiliser le filtre par d\xE9faut pour ce champ" } },
    "formulaFilterInputPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Saisissez une valeur..." } },
    "textFilterInputPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Saisissez le texte..." } }
  },
  "localBaserowTableServiceSortForm": {
    "noSortTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Vous n'avez pas encore cr\xE9\xE9 de tri pour cette source de donn\xE9es" } },
    "noSortText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Les tris vous permettent de trier les lignes de la table Baserow en fonction d'un champ." } },
    "sortBy": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Trier par" } },
    "addSort": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ajouter un tri" } },
    "thenBy": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Puis par" } },
    "noTableChosenForSorting": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "S\xE9lectionnez une table pour pouvoir ordonner les lignes de la sources de donn\xE9es." } },
    "sortMisconfigured": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Le champ auquel ce tri est associ\xE9 \xE0 \xE9t\xE9 supprim\xE9." } }
  },
  "dataProviderType": {
    "dataSource": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Source de donn\xE9es" } },
    "pageParameter": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Param\xE8tre" } }
  },
  "localBaserowTableSelector": {
    "viewFieldLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Vue" } },
    "tableFieldLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Table" } },
    "chooseNoView": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Non s\xE9lectionn\xE9e" } },
    "databaseFieldLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Base de donn\xE9es" } },
    "dataSyncedTableDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Table synchronis\xE9e" } },
    "oneWayDataSyncedTableDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Synchronisation \xE0 sens unique" } },
    "twoWayDataSyncedTableDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Synchronisation bidirectionnelle" } }
  },
  "userSourceType": {
    "localBaserow": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Authentification par table Baserow" } }
  },
  "localBaserowIntegrationType": {
    "localBaserowSummary": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Baserow local - " }, { "t": 4, "k": "name" }, { "t": 3, "v": ", " }, { "t": 4, "k": "username" }] } },
    "localBaserowNoUser": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Baserow local - Non configur\xE9" } },
    "localBaserowWarning": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Associer votre compte donne \xE0 tous ceux qui peuvent modifier l'application un acc\xE8s complet aux donn\xE9es auxquelles vous avez acc\xE8s. Il est possible de cr\xE9er un deuxi\xE8me utilisateur, lui donner les bonnes autorisations et utiliser celui-ci." } }
  },
  "integrationsCommon": {
    "singleRow": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Une ligne" } },
    "multipleRows": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "plusieurs lignes" } }
  },
  "localBaserowAggregateRowsForm": {
    "searchTabTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Chercher" } },
    "aggregationTypeLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aggr\xE9gation" } },
    "searchFieldPlaceHolder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Saisissez un terme de recherche..." } },
    "filterTabTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Filtres" } },
    "aggregationFieldLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Colonne" } },
    "noTableChosenForFiltering": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "S\xE9lectionnez une table pour commencer \xE0 filtrer les lignes de la source de donn\xE9es." } }
  },
  "coreHTTPRequestServiceForm": {
    "httpMethod": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "M\xE9thode HTTP" } },
    "queryParams": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Param\xE8tres de requ\xEAte" } },
    "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nom" } },
    "value": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Valeur" } },
    "namePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nom..." } },
    "headers": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "En-t\xEAtes" } },
    "addQueryParam": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "ajouter un param\xE8tre" } },
    "addHeader": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "ajouter un en-t\xEAte" } },
    "formData": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Donn\xE9es de formulaire" } },
    "addFormData": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "ajouter une entr\xE9e" } },
    "bodyType": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Type de contenu" } },
    "bodyContent": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Contenu" } },
    "urlPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Entrer l'url de destination..." } },
    "bodyPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ajouter le contenu..." } },
    "timeoutPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "D\xE9lai maximal..." } },
    "nameFieldRequired": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "La propri\xE9t\xE9 Nom est obligatoire." } },
    "nameFieldInvalid": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Le nom ne doit contenir que des caract\xE8res alphanum\xE9riques, des tirets ou des traits de soulignement, et ne doit pas commencer par un tiret ou un trait de soulignement." } },
    "timeout": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "D\xE9lai d'attente max." } },
    "url": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "URL de destination" } },
    "seconds": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "secondes" } },
    "valuePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Valeur..." } }
  },
  "serviceRefinementForms": {
    "filterTabTitle": { "t": 0, "b": { "t": 1, "c": [{ "t": 2, "i": [{ "t": 3 }], "s": "Filtre" }, { "t": 2, "i": [{ "t": 3 }], "s": "1 filtre" }, { "t": 2, "i": [{ "t": 4, "k": "count" }, { "t": 3, "v": " filtres" }] }] } },
    "sortTabTitle": { "t": 0, "b": { "t": 1, "c": [{ "t": 2, "i": [{ "t": 3 }], "s": "Trier" }, { "t": 2, "i": [{ "t": 3 }], "s": "1 Tri" }, { "t": 2, "i": [{ "t": 4, "k": "count" }, { "t": 3, "v": " Tris" }] }] } },
    "searchTabTitle": { "t": 0, "b": { "t": 1, "c": [{ "t": 2, "i": [{ "t": 3 }], "s": "Recherche" }, { "t": 2, "i": [{ "t": 3 }], "s": "1 recherche" }, { "t": 2, "i": [{ "t": 4, "k": "count" }, { "t": 3, "v": " recherches" }] }] } },
    "searchFieldPlaceHolder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Entrez une recherche..." } },
    "noTableChosenForFiltering": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Choisissez une table pour commencer \xE0 utiliser les filtres de source de donn\xE9es." } },
    "noTableChosenForSorting": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Choisissez une table pour commencer \xE0 utiliser les tris de sources de donn\xE9es." } },
    "refinements": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Affinages" } }
  },
  "smtpIntegrationType": {
    "smtpSummary": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "SMTP - " }, { "t": 4, "k": "hote" }, { "t": 3, "v": " : " }, { "t": 4, "k": "port" }] } }
  },
  "smtpForm": {
    "host": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "H\xF4te SMTP" } },
    "hostPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "smtp.gmail.com" } },
    "port": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Port SMTP" } },
    "portPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "587" } },
    "useTls": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Utiliser TLS" } },
    "username": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nom d'utilisateur" } },
    "usernamePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }, { "t": 9 }, { "t": 3 }], "s": "email@exemple.com" } },
    "password": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mot de passe" } },
    "passwordPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "mot-de-passe" } }
  },
  "smtpEmailForm": {
    "integrationDropdownLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Int\xE9gration" } },
    "fromEmail": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Adresse email d'\xE9mission" } },
    "fromEmailPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }, { "t": 9 }, { "t": 3 }], "s": "expediteur@exemple.com" } },
    "fromName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nom d'\xE9mission" } },
    "fromNamePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Votre nom" } },
    "toEmails": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Destinataires" } },
    "toEmailsPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }, { "t": 9 }, { "t": 3 }, { "t": 9 }, { "t": 3 }], "s": "dest1@exemple.com,dest2@exemple.com" } },
    "ccEmails": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Courriels en copie" } },
    "ccEmailsPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }, { "t": 9 }, { "t": 3 }, { "t": 9 }, { "t": 3 }], "s": "cc1@exemple.com,cc2@exemple.com" } },
    "bccEmails": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Courriels en copie cach\xE9e" } },
    "bccEmailsPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }, { "t": 9 }, { "t": 3 }, { "t": 9 }, { "t": 3 }], "s": "bcc1@exemple.com,bcc2@exemple.com" } },
    "subject": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Objet" } },
    "subjectPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Objet de l'email" } },
    "bodyType": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Corps du mail" } },
    "bodyTypePlain": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Texte" } },
    "bodyTypeHtml": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "HTML" } },
    "body": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Corps" } },
    "bodyPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Le contenu de votre e-mail..." } },
    "smtpConfigurationMode": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Configuration SMTP" } },
    "useInstanceSmtpSettings": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Utilisez le serveur SMTP de l'instance" } }
  },
  "routerForm": {
    "defaultEdgeLabelLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\xC9tiquette de branche par d\xE9faut" } },
    "defaultEdgeLabelPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Par d\xE9faut" } },
    "defaultEdgeLabelDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Vous pouvez choisir l'\xE9tiquette \xE0 afficher sur la branche par d\xE9faut." } },
    "branchesHeading": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Branches" } },
    "branchesDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Le routeur vous permet de n'ex\xE9cuter des n\u0153uds que lorsqu'une condition est remplie. Les branches sont ex\xE9cut\xE9es de gauche \xE0 droite jusqu'\xE0 ce qu'une condition soit remplie, sinon la branche par d\xE9faut est ex\xE9cut\xE9e. " } },
    "branchLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Lib\xE9ll\xE9" } },
    "branchConditionLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Condition" } },
    "branchConditionPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Si vrai, suivre cette branche." } },
    "addEdge": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ajouter une branche" } },
    "edgeDefaultName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Branche" } },
    "noLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pas d'\xE9tiquette" } },
    "edgeDeletionLastEdge": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Vous ne pouvez pas supprimer la derni\xE8re branche." } },
    "edgeDeletionHasOutput": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Une branche ne peut pas \xEAtre supprim\xE9e si elle contient des noeuds." } }
  },
  "periodicForm": {
    "intervalLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Interval" } },
    "intervalHelper": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Choisissez la fr\xE9quence d'ex\xE9cution de ce sc\xE9nario" } },
    "everyMinute": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Toutes les " }, { "t": 4, "k": "minute" }, { "t": 3, "v": " minutes" }] } },
    "everyHour": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Toutes les heures" } },
    "everyDay": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tous les jours" } },
    "everyWeek": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Chaque semaine" } },
    "everyMonth": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tous les mois" } },
    "hour": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Heure" } },
    "minute": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Minute" } },
    "dayOfWeek": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Jour de la semaine" } },
    "dayOfMonth": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Jour du mois" } },
    "hourPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "0-23" } },
    "minutePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "0-59" } },
    "dayOfMonthPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "1-31" } },
    "minuteHelper": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ce sc\xE9nario sera ex\xE9cut\xE9 toutes les X minutes" } },
    "hourHelper": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Ce sc\xE9nario s'ex\xE9cutera toutes les heures \xE0 la minute sp\xE9cifi\xE9e dans votre fuseau horaire local (" }, { "t": 4, "k": "timezone" }, { "t": 3, "v": ")" }] } },
    "dayHelper": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Ce sc\xE9nario sera ex\xE9cut\xE9 chaque jour \xE0 l'heure sp\xE9cifi\xE9e dans votre fuseau horaire local (" }, { "t": 4, "k": "timezone" }, { "t": 3, "v": ")" }] } },
    "weekHelper": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Ce sc\xE9nario sera ex\xE9cut\xE9 chaque semaine au jour et \xE0 l'heure sp\xE9cifi\xE9s dans votre fuseau horaire local (" }, { "t": 4, "k": "timezone" }, { "t": 3, "v": ")" }] } },
    "monthHelper": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Ce sc\xE9nario sera ex\xE9cut\xE9 chaque mois le jour et l'heure sp\xE9cifi\xE9s dans votre fuseau horaire local (" }, { "t": 4, "k": "timezone" }, { "t": 3, "v": ")" }] } },
    "deactivatedTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "D\xE9clenchement p\xE9riodique d\xE9sactiv\xE9" } },
    "deactivatedText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ce d\xE9clencheur p\xE9riodique a \xE9t\xE9 automatiquement d\xE9sactiv\xE9 en raison d'\xE9checs cons\xE9cutifs." } },
    "everyMinuteDefault": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Toutes les X minutes" } },
    "minuteFrequency": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Toutes les minutes" } },
    "minuteFrequencyPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "15" } }
  },
  "aiIntegrationType": {
    "overridingProviders": { "t": 0, "b": { "t": 1, "c": [{ "t": 2, "i": [{ "t": 4, "k": "count" }, { "t": 3, "v": " service configur\xE9" }] }, { "t": 2, "i": [{ "t": 4, "k": "count" }, { "t": 3, "v": " services configur\xE9s" }] }] } },
    "inheritingWorkspace": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "H\xE9ritage des param\xE8tres d'IA du projet" } }
  },
  "aiForm": {
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Configurer les param\xE8tres du service d'IA pour cette int\xE9gration. Par d\xE9faut, les param\xE8tres d'IA du projet sont h\xE9rit\xE9s." } },
    "workspaceSettingsTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Param\xE8tres de configuration d'IA du projet" } },
    "workspaceSettingsDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cette int\xE9gration h\xE9rite par d\xE9faut des configurations d'IA de votre Projet. Vous pouvez remplacer des services sp\xE9cifiques ci-dessous." } },
    "overrideWorkspaceSettings": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Remplacer les param\xE8tres du projet pour ce service" } },
    "inherited": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "H\xE9rit\xE9e" } },
    "overridden": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Remplac\xE9" } }
  },
  "aiAgentServiceForm": {
    "integrationLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Int\xE9gration" } },
    "providerLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Service d'IA" } },
    "providerPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "S\xE9lectionnez un service d'IA..." } },
    "modelLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mod\xE8le IA" } },
    "modelPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "S\xE9lectionnez un mod\xE8le..." } },
    "outputTypeLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Type de sortie" } },
    "outputTypeHelp": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Choisissez la mani\xE8re dont l'IA doit formuler sa r\xE9ponse. Si vous d\xE9finissez des choix, vous obligez le mod\xE8le \xE0 ne r\xE9pondre que par l'un de ces choix." } },
    "outputTypeText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Texte" } },
    "outputTypeChoice": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Choix" } },
    "temperatureLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Temp\xE9rature" } },
    "temperaturePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ex\xA0: 0.7" } },
    "temperatureHelp": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Contr\xF4le le caract\xE8re al\xE9atoire. Les valeurs faibles (0-0,3) sont plus cibl\xE9es et d\xE9terministes. Les valeurs plus \xE9lev\xE9es (0,7-2,0) sont plus cr\xE9atives et vari\xE9es." } },
    "promptLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Prompt" } },
    "promptPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Saisissez votre prompt ici..." } },
    "choicesLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Choix" } },
    "choicePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Saisissez un choix..." } },
    "addChoice": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ajouter un choix" } },
    "choicesRequired": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Au moins un choix est requis" } }
  },
  "coreIterationServiceForm": {
    "source": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Source" } },
    "sourcePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Choisissez une source..." } }
  },
  "slackBotIntegrationType": {
    "slackBotSummary": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Bot Slack" } },
    "slackBotNoToken": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Bot Slack - Non configur\xE9" } }
  },
  "slackBotForm": {
    "tokenLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Token utilisateur pour le bot" } },
    "tokenPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "xoxb-1234-..." } },
    "tokenMustStartWith": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": 'Le jeton doit commencer par "xoxb-"' } },
    "supportHeading": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Besoin d'aide\u202F?" } },
    "supportDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Si vous avez besoin d'aide pour la connexion avec votre application Slack, veuillez suivre les \xE9tapes ci-dessous." } },
    "supportSetupHeading": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "1. Mettre en place l'application" } },
    "supportSetupDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": 'En fonction des param\xE8tres de votre espace de travail Slack, vous pourrez peut-\xEAtre cr\xE9er une nouvelle application Slack. Sinon, un administrateur devra le faire pour vous. Si vous r\xE9utilisez une application existante qui peut \xE9crire des messages, passez \xE0 la section intitul\xE9e "Connexion avec votre application Slack".' } },
    "supportSetupStep1": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Acc\xE9dez \xE0 votre espace de travail Slack\xA0: " }, { "t": 4, "k": "link" }, { "t": 3, "v": "." }] } },
    "supportSetupStep2": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": `Cr\xE9ez une nouvelle application, choisissez "A partir de z\xE9ro" et saisissez un nom. S\xE9lectionnez l'espace de travail dans lequel votre application doit fonctionner et cliquez sur "Cr\xE9er".` } },
    "supportSetupStep3": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": `Dans la barre lat\xE9rale gauche, naviguez vers "OAuth > Permissions", descendez jusqu'\xE0 "Scopes" et sous "Bot Token Scopes", s\xE9lectionnez "Add an OAuth Scope".` } },
    "supportSetupStep4": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Pour permettre \xE0 votre application de poster des messages, ajoutez la port\xE9e " }, { "t": 4, "k": "scope" }, { "t": 3, "v": ";." }] } },
    "supportPairingHeading": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "2. Association avec votre application Slack" } },
    "supportPairingStep1": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Si votre application est nouvelle\xA0: visitez la page 'Param\xE8tres > Installer application'. Cliquez sur le bouton vert pour installer l'application dans votre Projet." } },
    "supportPairingStep2": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Copiez votre 'Bot User OAuth Token' et stockez-le dans le champ 'Jeton utilisateur Bot' dans ce formulaire." } },
    "supportPairingStep3": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Enfin, si votre application est nouvelle\xA0: dans Slack, invitez votre application dans le canal choisi avec " }, { "t": 4, "k": "command" }] } },
    "supportSetupStep1Link": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "page des applications" } }
  },
  "slackWriteMessageServiceForm": {
    "alertMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cette action doit \xEAtre associ\xE9e \xE0 une application Slack. Suivez le guide dans la fen\xEAtre de configuration de l'int\xE9gration pour proc\xE9der." } },
    "integrationLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Int\xE9gration" } },
    "channelLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Canal" } },
    "channelPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Entrez un nom de canal" } },
    "messageLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Message" } },
    "messagePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Saisissez un message..." } },
    "channelNoPrefix": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Retirer le '#' avant le nom du canal." } }
  },
  "localBaserowServiceForm": {
    "integrationDropdownLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Int\xE9gration" } },
    "rowIdLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "ID de ligne" } },
    "rowIdPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Choisissez l'ID d'une ligne" } }
  },
  "localBaserowUpsertRowServiceForm": {
    "fieldMappingPlaceholderArray": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Choisissez une liste de valeurs, par exemple [42]" } },
    "fieldMappingPlaceholderString": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": 'Choisissez une valeur textuelle, par exemple \\"baserow\\"' } },
    "fieldMappingPlaceholderNumber": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Choisissez une valeur num\xE9rique, par exemple 42" } },
    "fieldMappingPlaceholderBoolean": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Choisissez une valeur bool\xE9enne, par exemple\xA0: true" } },
    "fieldMappingPlaceholderDate": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Choisissez une date, par exemple 2025-07-25" } },
    "fieldMappingPlaceholderDecimal": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Choisissez une valeur d\xE9cimale, par exemple 3.14" } },
    "fieldMappingPlaceholderDuration": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Choisissez une dur\xE9e, par exemple 1:23:40" } },
    "noTableSelectedMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Choisissez une table pour commencer \xE0 configurer vos champs." } },
    "noWritableFields": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cette table ne contient pas de champs modifiables." } }
  },
  "localBaserowFieldsUpdatedForm": {
    "fieldLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Colonnes" } },
    "fieldHelper": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Le sc\xE9nario ne se d\xE9clenche que lorsque la valeur de l'une de ces colonnes change." } }
  },
  "coreCSVFileReaderServiceForm": {
    "inputType": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Source" } },
    "inputTypeFile": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Fichier" } },
    "inputTypeContent": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Contenu" } },
    "file": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Fichier CSV" } },
    "filePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "S\xE9lectionnez un fichier CSV..." } },
    "csv": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Donn\xE9es au format CSV" } },
    "csvPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Saisissez les donn\xE9es au format CSV..." } },
    "separator": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "S\xE9parateur" } },
    "encoding": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Encodage" } },
    "firstLineIsHeader": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "La premi\xE8re ligne est l'en-t\xEAte" } },
    "comma": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Virgule" } },
    "semicolon": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Point-virgule" } },
    "tab": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tab" } },
    "pipe": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Barre verticale" } },
    "utf8": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "UTF-8" } },
    "utf8Bom": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "UTF-8 avec BOM" } },
    "latin1": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Latin-1" } }
  },
  "coreStartWorkflowServiceForm": {
    "automation": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Automatisation" } },
    "workflow": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sc\xE9nario" } },
    "workflowHelperText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Seuls les sc\xE9narios publi\xE9s dot\xE9s d'un d\xE9clencheur manuel peuvent \xEAtre lanc\xE9s. Si ce sc\xE9nario comporte des modifications non publi\xE9es, c'est la derni\xE8re version publi\xE9e qui s'ex\xE9cutera." } }
  },
  "localBaserowDeleteRowServiceForm": {
    "rowIdLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "ID(s) de ligne" } },
    "rowIdPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "S\xE9lectionnez un identifiant de ligne ou un tableau d'identifiants de lignes" } },
    "rowIdHelper": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "S\xE9lectionnez un identifiant de ligne ou un tableau d'identifiants de lignes. Il est possible de supprimer jusqu'\xE0 " }, { "t": 4, "k": "limit" }, { "t": 3, "v": " lignes \xE0 la fois." }] } }
  },
  "localBaserowCreateRowsServiceForm": {
    "rowsLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Lignes" } },
    "rowsPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "S\xE9lectionner une liste d'objets de ligne" } },
    "rowsHelper": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "La formule doit renvoyer un tableau d'objets de ligne, ou une cha\xEEne JSON pouvant \xEAtre analys\xE9e pour en former un. Utilisez les noms de colonne ou les identifiants de colonne comme cl\xE9s d'objet. Il est possible de cr\xE9er jusqu'\xE0 " }, { "t": 4, "k": "limit" }, { "t": 3, "v": " lignes \xE0 la fois." }] } }
  },
  "localBaserowUpdateRowsServiceForm": {
    "rowsLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Lignes" } },
    "rowsPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "S\xE9lectionner une liste d'objets de ligne avec leurs identifiants" } },
    "rowsHelper": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "La formule doit renvoyer un tableau d'objets de ligne, ou une cha\xEEne JSON pouvant \xEAtre analys\xE9e pour en former un. Chaque objet doit comporter une propri\xE9t\xE9 \xAB id \xBB. Utilisez les noms de colonne ou les identifiants de colonne comme cl\xE9s d'objet. Il est possible de mettre \xE0 jour jusqu'\xE0 " }, { "t": 4, "k": "limit" }, { "t": 3, "v": " lignes \xE0 la fois." }] } }
  }
};

export { resource as default };
//# sourceMappingURL=fr-DPHzXZW7.mjs.map
