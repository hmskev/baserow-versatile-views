!(function() {
  try {
    var e = false ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
    var n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "4e89eaf3-4176-4cf8-8b8b-1d7ecb4b92da", e._sentryDebugIdIdentifier = "sentry-dbid-4e89eaf3-4176-4cf8-8b8b-1d7ecb4b92da");
  } catch (e2) {
  }
})();
const resource = {
  "automationWorkflow": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sc\xE9nario" } }
  },
  "automationWelcomeGuidedTourStep": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Bienvenue sur les Automatisations de Baserow\u202F!" } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Faisons une d\xE9couverte rapide. Vous allez voir comment configurer des d\xE9clencheurs, ajouter des actions, tester votre sc\xE9nario et le publier, sans avoir besoin de coder." } }
  },
  "automationGraphGuidedTourStep": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "G\xE9rez votre sc\xE9nario dans cette zone" } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cr\xE9ez ici un d\xE9clencheur et des actions pour d\xE9finir ce que le sc\xE9nario doit faire. S\xE9lectionnez un d\xE9clencheur ou une action pour la configurer dans le panneau lat\xE9ral." } }
  },
  "automationTestRunGuidedTourStep": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Testez votre sc\xE9nario" } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Quand vous \xEAtes pr\xEAt, d\xE9clenchez un test pour voir votre sc\xE9nario en action. Le d\xE9clencheur va fonctionner une seule fois pour simuler une ex\xE9cution compl\xE8te." } }
  },
  "automationHistoryGuidedTourStep": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Voir l'historique du sc\xE9nario" } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Utilisez le volet d'historique pour examiner les tests pass\xE9s et les ex\xE9cutions publi\xE9es. C'est une bonne fa\xE7on de d\xE9boguer ou de confirmer le bon fonctionnement." } }
  },
  "automationPublishGuidedTourStep": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Publiez votre sc\xE9nario" } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Une fois que vous avez test\xE9 et affin\xE9 votre configuration, publiez votre sc\xE9nario pour le rendre actif. Son d\xE9clencheur va maintenant se d\xE9clencher d\xE8s que les conditions le pemettrons." } }
  },
  "automationWorkflowStateGuidedTourStep": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\xC9tat du sc\xE9nario" } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Avec ce bouton, vous pouvez choisir de mettre en pause ou red\xE9marrer votre sc\xE9nario \xE0 tout moment." } }
  },
  "automationDocsGuidedTourStep": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Explorer la documentation" } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Si vous vous voulez en savoir plus, cliquez sur ce bouton pour consulter les guides d\xE9taill\xE9s et les FAQs sur les Automatisations dans Baserow." } }
  },
  "sidebarComponentAutomation": {
    "createAutomationWorkflow": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nouveau sc\xE9nario" } }
  },
  "createAutomationWorkflowModal": {
    "header": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cr\xE9er un sc\xE9nario" } },
    "submit": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ajouter un sc\xE9nario" } }
  },
  "automationWorkflowForm": {
    "defaultName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sc\xE9nario" } },
    "nameTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nom" } },
    "nameSubtitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nom unique du sc\xE9nario" } },
    "namePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Saisir un nom..." } }
  },
  "duplicateAutomationWorkflowJobType": {
    "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dupliquer le sc\xE9nario" } },
    "duplicating": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Duplication en cours" } },
    "duplicatedTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sc\xE9nario dupliqu\xE9" } }
  },
  "automationWorkflowErrors": {
    "errorNameNotUnique": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Un sc\xE9nario avec ce nom existe d\xE9j\xE0" } },
    "errorNameNotUniqueDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Veuillez saisir un nom unique pour le sc\xE9nario" } }
  },
  "trashType": {
    "workflow": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "sc\xE9nario" } },
    "automation": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "automatisation" } }
  },
  "generalSettings": {
    "titleOverview": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "G\xE9n\xE9ral" } },
    "nameLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nom de l'automatisation" } },
    "notificationLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Notifications" } },
    "notificationCheckboxLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\xCAtre notifi\xE9 quand ces automatisations \xE9chouent" } },
    "cantUpdateAutomationTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Impossible de mettre \xE0 jour l'automatisation" } },
    "cantUpdateAutomationDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "D\xE9sol\xE9, la mise \xE0 jour de l'automatisation a \xE9chou\xE9e." } }
  },
  "integrationSettings": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Int\xE9grations" } },
    "noIntegrationMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Vous n'avez pas encore cr\xE9\xE9 d'int\xE9grations. Elles peuvent \xEAtre cr\xE9\xE9s lors de l'ajout d'une source de donn\xE9es, d'une action ou d'une authentification utilisateur." } },
    "integrationMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Vous pouvez cr\xE9er de nouvelles int\xE9grations en ajoutant une source de donn\xE9es, une action ou une authentification utilisateur." } }
  },
  "automationHeader": {
    "startTestRun": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tester" } },
    "stopTestRun": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Annuler le test" } },
    "publishBtn": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Publier" } },
    "settingsBtn": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Param\xE8tres" } },
    "historyBtn": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Historique" } },
    "docsBtn": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Docs" } },
    "switchLabelDraft": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Brouillon" } },
    "switchLabelDisabled": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "D\xE9sactiv\xE9" } },
    "switchLabelPaused": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "En pause" } },
    "switchLabelLive": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Actif" } },
    "lastPublished": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Derni\xE8re publication" } }
  },
  "dataProviderType": {
    "currentIteration": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "It\xE9ration actuelle" } },
    "item": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ligne" } },
    "previousNode": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Noeud pr\xE9c\xE9dent" } }
  },
  "nodeSidePanel": {
    "labelTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Lib\xE9ll\xE9" } }
  },
  "historySidePanel": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Historique" } },
    "noRunsTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aucune ex\xE9cution" } },
    "noRunsDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Lorsque ce sc\xE9nario s'ex\xE9cutera, les r\xE9sultats seront affich\xE9s ici." } },
    "statusSuccess": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Termin\xE9 avec succ\xE8s" } },
    "statusError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\xC9chec de l\u2019ex\xE9cution" } },
    "statusDisabled": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "D\xE9sactiv\xE9 par Baserow" } },
    "completedInSeconds": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Compl\xE9t\xE9 en " }, { "t": 4, "k": "s" }, { "t": 3, "v": " secondes." }] } },
    "completedInLessThanSecond": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Compl\xE9t\xE9 en moins d'une seconde." } },
    "testRun": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Essai" } },
    "statusStarted": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "En cours\u2026" } },
    "running": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "S'ex\xE9cute depuis " }, { "t": 4, "k": "at" }, { "t": 3, "v": "s" }] } },
    "statusSuccessBadge": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Compl\xE9t\xE9" } },
    "statusErrorBadge": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\xC9chou\xE9" } },
    "successfulRuns": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Succ\xE8s" } },
    "failedRuns": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\xC9checs" } },
    "errorHideDetails": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Masquer les d\xE9tails" } },
    "errorShowDetails": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Afficher les d\xE9tails" } },
    "runNumber": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Ex\xE9cution " }, { "t": 4, "k": "n" }] } },
    "runCount": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "n" }, { "t": 3, "v": " ex\xE9cutions" }] } },
    "showResult": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Afficher le r\xE9sultat" } }
  },
  "nodeType": {
    "triggerDeletionError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Les d\xE9clencheurs ne peuvent \xEAtre supprim\xE9s, seulement remplac\xE9s." } },
    "localBaserowRowsCreatedLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Des lignes sont cr\xE9\xE9es dans " }, { "t": 4, "k": "tableName" }] } },
    "localBaserowRowsUpdatedLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Des lignes sont mises \xE0 jour dans " }, { "t": 4, "k": "tableName" }] } },
    "localBaserowRowsDeletedLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Des lignes sont supprim\xE9es dans " }, { "t": 4, "k": "tableName" }] } },
    "localBaserowCreateRowLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Cr\xE9er une ligne dans " }, { "t": 4, "k": "tableName" }] } },
    "localBaserowUpdateRowLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Modifier une ligne dans " }, { "t": 4, "k": "tableName" }] } },
    "localBaserowDeleteRowLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Supprimer des lignes dans " }, { "t": 4, "k": "tableName" }] } },
    "localBaserowGetRowLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Lire une ligne dans " }, { "t": 4, "k": "tableName" }] } },
    "localBaserowListRowsLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Lister les lignes de " }, { "t": 4, "k": "tableName" }] } },
    "localBaserowAggregateRowsLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "R\xE9sumer les lignes dans " }, { "t": 4, "k": "tableName" }] } },
    "httpRequestLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Envoyer une requ\xEAte HTTP" } },
    "smtpEmailLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Envoyer un courriel" } },
    "routerLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Suivre 1 des " }, { "t": 4, "k": "edgeCount" }, { "t": 3, "v": " branches" }] } },
    "iterationLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "It\xE9rer sur les lignes" } },
    "routerDefaultEdgeLabelFallback": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Par d\xE9faut" } },
    "routerWithOutputNodesDeleteError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Ne peut \xEAtre supprim\xE9 que si ses " }, { "t": 4, "k": "outputCount" }, { "t": 3, "v": " n\u0153uds de sortie sont supprim\xE9s." }] } },
    "routerWithOutputNodesReplaceError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Ne peut \xEAtre remplac\xE9 quequand ses " }, { "t": 4, "k": "outputCount" }, { "t": 3, "v": " n\u0153uds de sortie sont supprim\xE9s." }] } },
    "iteratorWithChildrenNodesDeleteError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ne peut \xEAtre supprim\xE9 qui si ses noeuds enfants sont supprim\xE9s." } },
    "iteratorWithChildrenNodesReplaceError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ne peut \xEAtre remplac\xE9 que si ses n\u0153uds enfants sont supprim\xE9s." } },
    "periodicTriggerLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "D\xE9clencheur p\xE9riodique" } },
    "aiAgent": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Prompt IA" } },
    "slackWriteMessageName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Envoyer un message Slack" } },
    "slackWriteMessageLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Envoyer un message \xE0 #" }, { "t": 4, "k": "channel" }] } },
    "localBaserowFieldsUpdatedLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "fieldName" }, { "t": 3, "v": " est mis \xE0 jour dans " }, { "t": 4, "k": "tableName" }] } },
    "localBaserowFieldsUpdatedMultipleLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Les valeurs de " }, { "t": 4, "k": "count" }, { "t": 3, "v": " colonnes sont mises \xE0 jour dans " }, { "t": 4, "k": "tableName" }] } },
    "localBaserowFieldsUpdatedNoFieldLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Les valeurs de certaines colonnes sont mises \xE0 jour dans une table" } },
    "localBaserowCreateRowsLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Cr\xE9er des lignes par lots dans " }, { "t": 4, "k": "tableName" }] } },
    "localBaserowUpdateRowsLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Mise \xE0 jour par lots des lignes dans " }, { "t": 4, "k": "tableName" }] } },
    "csvFileReaderLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Lire un fichier CSV" } },
    "startWorkflowLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Lancer " }, { "t": 4, "k": "workflowName" }] } },
    "defaultEdgeLabelFallback": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "D\xE9faut" } }
  },
  "workflowNode": {
    "actionDelete": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Supprimer" } },
    "actionReplace": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Remplacer" } },
    "actionDuplicate": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dupliquer" } },
    "actionConfigure": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Configurer" } },
    "beforeLabelTrigger": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "S\u2019ex\xE9cute quand" } },
    "beforeLabelAction": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ensuite" } },
    "beforeLabelCondition": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Si la condition est satisfaite" } },
    "beforeLabelConditionDefault": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Si aucune condition n'est satisfaite" } },
    "beforeLabelRepeat": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pour chaque ligne" } },
    "moreEdit": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Modifier" } },
    "moreReplace": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Remplacer" } },
    "nodeOptions": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Options du n\u0153ud" } },
    "displayLabelDebug": { "t": 0, "b": { "t": 1, "c": [{ "t": 2, "i": [{ "t": 3, "v": "ID: " }, { "t": 4, "k": "id" }] }, { "t": 2, "i": [{ "t": 3, "v": "Prev: " }, { "t": 4, "k": "previousNodeId" }] }, { "t": 2, "i": [{ "t": 4, "k": "outputUid" }] }] } },
    "moreDuplicate": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dupliquer" } }
  },
  "workflowAddNode": {
    "displayTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cr\xE9er un n\u0153ud de sc\xE9nario" } }
  },
  "workflowNodeContext": {
    "searchPlaceholderTrigger": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cherchez un d\xE9clencheur..." } },
    "searchPlaceholderActions": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Rechercher une action..." } },
    "noResults": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aucun r\xE9sultat" } }
  },
  "serviceType": {
    "periodicTrigger": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "D\xE9clencheur p\xE9riodique" } },
    "periodicTriggerDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "D\xE9clenche le sc\xE9nario \xE0 des intervalles d\xE9termin\xE9s" } },
    "periodicTriggerTriggeredAt": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "D\xE9clench\xE9 \xE0" } },
    "errorIntervalMissing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Un intervalle est requis." } },
    "coreHTTPTrigger": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "D\xE9clencheur HTTP" } },
    "coreHTTPTriggerDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "D\xE9clenche un sc\xE9nario quand une requ\xEAte HTTP est re\xE7ue" } },
    "coreManualTrigger": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "D\xE9clencheur manuel" } },
    "coreManualTriggerDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ne d\xE9marre que lorsqu'une autre action d\xE9clenche ce sc\xE9nario" } }
  },
  "periodicTriggerServiceForm": {
    "intervalLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Intervale" } },
    "intervalHelper": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Choisissez la fr\xE9quence d'ex\xE9cution du sc\xE9nario" } },
    "everyMinute": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Toutes les minutes" } },
    "everyHour": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Toutes les heures" } },
    "everyDay": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tous les jours" } },
    "everyWeek": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Toutes les semaines" } },
    "everyMonth": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tous les mois" } },
    "hour": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Heure" } },
    "minute": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Minute" } },
    "dayOfWeek": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Jour de la semaine" } },
    "dayOfMonth": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Jour du mois" } },
    "hourPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "0-23" } },
    "minutePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "0-59" } },
    "dayOfMonthPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "1-31" } },
    "minuteHelper": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ce sc\xE9nario s'ex\xE9cutera toutes les minutes" } },
    "hourHelper": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Ce sc\xE9nario s\u2019ex\xE9cutera toutes les heures \xE0 la minute sp\xE9cifi\xE9e dans votre fuseau horaire local (" }, { "t": 4, "k": "timezone" }, { "t": 3, "v": ")" }] } },
    "dayHelper": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Ce sc\xE9nario s\u2019ex\xE9cutera tous les jours \xE0 l'heure sp\xE9cifi\xE9e dans votre fuseau horaire local (" }, { "t": 4, "k": "timezone" }, { "t": 3, "v": ")" }] } },
    "weekHelper": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Ce sc\xE9nario s\u2019ex\xE9cutera toutes les semaines au jour et \xE0 l'heure sp\xE9cifi\xE9e dans votre fuseau horaire local (" }, { "t": 4, "k": "timezone" }, { "t": 3, "v": ")" }] } },
    "monthHelper": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Ce sc\xE9nario s\u2019ex\xE9cutera tous les mois au jour et \xE0 l'heure sp\xE9cifi\xE9e dans votre fuseau horaire local (" }, { "t": 4, "k": "timezone" }, { "t": 3, "v": ")" }] } },
    "deactivatedTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "D\xE9clencheur p\xE9riodique d\xE9sactiv\xE9" } },
    "deactivatedText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ce d\xE9clencheur p\xE9riodique a \xE9t\xE9 automatiquement d\xE9sactiv\xE9 en raison de d\xE9faillances cons\xE9cutives." } }
  },
  "workflowEditor": {
    "chooseEvent": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Choisissez un d\xE9clencheur..." } }
  },
  "simulateDispatch": {
    "sampleDataLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "R\xE9sultat" } },
    "triggerNodeAwaitingEvent": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Le n\u0153ud attend. Veuillez d\xE9clencher manuellement l'\xE9v\xE9nement pour terminer le test." } },
    "simulationInProgress": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Test du n\u0153ud en cours..." } },
    "errorNodeNotConfigured": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Le n\u0153ud doit \xEAtre configur\xE9 avant qu'il puisse \xEAtre test\xE9." } },
    "errorPreviousNodeNotConfigured": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Le n\u0153ud pr\xE9c\xE9dent \xAB\u202F" }, { "t": 4, "k": "node" }, { "t": 3, "v": "\u202F\xBB doit \xEAtre configur\xE9." }] } },
    "errorPreviousNodesNotTested": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Le n\u0153ud pr\xE9c\xE9dent \xAB\xA0" }, { "t": 4, "k": "node" }, { "t": 3, "v": "\xA0\xBB doit \xEAtre test\xE9 pr\xE9allablement." }] } },
    "buttonLabelTest": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "N\u0153ud de test" } },
    "buttonLabelTestAgain": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nouveau test du n\u0153ud" } },
    "testNodeDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tester ce d\xE9clencheur pour confirmer que la configuration est correcte. Les donn\xE9es de ce test peuvent \xEAtre utilis\xE9es par les actions suivantes." } },
    "buttonLabelShowPayload": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Voir le r\xE9sultat" } },
    "buttonLabelShowError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Voir l'erreur" } },
    "sampleDataModalTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "R\xE9sultat de " }, { "t": 4, "k": "nodeLabel" }] } },
    "sampleDataModalSubTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "R\xE9sultat JSON" } },
    "sampleDataCopy": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Copier" } },
    "errorOccurred": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Une erreur s'est produite..." } },
    "sampleDataCopied": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "R\xE9sultat copi\xE9" } }
  },
  "workflowGeneralSettings": {
    "titleOverview": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Param\xE8tres du sc\xE9nario" } },
    "nameLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nom du sc\xE9nario" } },
    "workflowDisabledRecipientsLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Destinataires de la notification" } },
    "workflowDisabledRecipientsHelp": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Les membres de ce projet recevront une notification si ce sc\xE9nario est automatiquement d\xE9sactiv\xE9." } },
    "selectWorkflowDisabledRecipients": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "S\xE9lectionnez les destinataires" } },
    "noWorkflowDisabledRecipients": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aucun destinataire n'a \xE9t\xE9 s\xE9lectionn\xE9." } },
    "cantUpdateWorkflowTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Impossible de mettre \xE0 jour le sc\xE9nario" } },
    "cantUpdateWorkflowDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "D\xE9sol\xE9, impossible de mettre \xE0 jour le sc\xE9nario." } }
  },
  "workflowDisabledNotification": {
    "body": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Le sc\xE9nario " }, { "t": 4, "k": "name" }, { "t": 3, "v": " a \xE9t\xE9 d\xE9sactiv\xE9." }] } }
  }
};

export { resource as default };
//# sourceMappingURL=fr-B2umEi_D.mjs.map
