!(function() {
  try {
    var e = false ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
    var n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "40e43546-713e-4f48-9e7a-9501cfb8f70b", e._sentryDebugIdIdentifier = "sentry-dbid-40e43546-713e-4f48-9e7a-9501cfb8f70b");
  } catch (e2) {
  }
})();
const resource = {
  "webhookModal": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Webhooks de " }, { "t": 4, "k": "name" }] } },
    "createWebhook": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ajouter un webhook" } },
    "backToList": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Retour \xE0 la liste" } }
  },
  "deleteWebhookModal": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Supprimer " }, { "t": 4, "k": "webhookName" }] } },
    "deleteButton": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Supprimer le webhook" } },
    "body": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\xCAtes-vous s\xFBr\xB7e de vouloir supprimer ce webhook ? Vous ne serez plus en mesure de le restaurer par la suite." } }
  },
  "webhookList": {
    "noWebhooksMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Vous n'avez pas encore cr\xE9\xE9 de webhook. Les webhooks peuvent \xEAtre utilis\xE9s afin d'informer un syst\xE8me tiers quand une ligne a \xE9t\xE9 cr\xE9\xE9e, modifi\xE9e, supprim\xE9e dans Baserow." } }
  },
  "testWebhookModal": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Test du webhook" } },
    "unreachable": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Serveur inaccessible" } }
  },
  "webhookForm": {
    "inputLabels": {
      "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nom" } },
      "value": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Valeur" } },
      "requestMethod": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "M\xE9thode" } },
      "url": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "URL" } },
      "userFieldNames": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Noms des champs" } },
      "events": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Quels \xE9v\xE9nements d\xE9clenchent ce webhook\xA0?" } },
      "headers": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ent\xEAtes additionels" } },
      "example": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Example de requ\xEAte" } }
    },
    "errors": {
      "urlField": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Doit \xEAtre une URL valide commen\xE7ant par \xAB\xA0https://\xA0\xBB ou \xAB\xA0http://\xA0\xBB." } },
      "invalidHeaders": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Un des ent\xEAte est invalide." } }
    },
    "checkbox": {
      "sendUserFieldNames": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Utiliser les noms de champ plut\xF4t que les identifiants" } }
    },
    "radio": {
      "allEvents": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tous les \xE9v\xE9nements" } },
      "customEvents": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Choisir les \xE9v\xE9nements" } }
    },
    "triggerButton": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tester le webhook" } },
    "deactivated": {
      "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Le webhook est d\xE9sactiv\xE9" } },
      "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ce webhook a \xE9t\xE9 d\xE9sactiv\xE9 car il produisait trop d'\xE9checs cons\xE9cutifs. Veuillez v\xE9rifier l'historique des appels pour plus d'information. Cliquez sur le bouton ci-dessous pour l'activer de nouveau. Pensez \xE0 enregistrer le webhook avant de l'activer." } },
      "activate": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Activer" } }
    },
    "deprecatedEventType": {
      "convert": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Convertir" } },
      "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Type d'\xE9v\xE9nement obsol\xE8te" } },
      "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ce webhook ne re\xE7oit pas d'informations sur les lignes modifi\xE9es en une seule op\xE9ration. Veuillez le convertir en un type d'\xE9v\xE9nement de type lot. Cette op\xE9ration modifie le contenu JSON pour un format qui permet de contenir plusieurs lignes." } }
    },
    "triggerWhenFieldsHaveChanged": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "D\xE9clencher en cas de modification des champs" } },
    "helpTriggerWhenFieldsHaveChanged": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ne sera d\xE9clench\xE9 que si la valeur de la cellule des champs choisis change." } }
  },
  "webhook": {
    "details": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "d\xE9tails" } },
    "lastCall": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Dernier d\xE9clenchement : " }, { "t": 4, "k": "lastCallTime" }] } },
    "noCalls": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Jamais d\xE9clench\xE9" } },
    "callLog": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Historique des appels" } },
    "triggerDescription": { "t": 0, "b": { "t": 1, "c": [{ "t": 2, "i": [{ "t": 3 }], "s": "D\xE9clench\xE9 par tous les \xE9v\xE9nements" }, { "t": 2, "i": [{ "t": 3 }], "s": "D\xE9clench\xE9 par un \xE9v\xE9nement" }, { "t": 2, "i": [{ "t": 3, "v": "D\xE9clench\xE9 par " }, { "t": 4, "k": "count" }, { "t": 3, "v": " \xE9v\xE9nements" }] }] } }
  },
  "createWebhook": {
    "errorTableWebhookMaxLimitExceededTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nombre maximum de webhook d\xE9pass\xE9" } },
    "errorTableWebhookMaxLimitExceededDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Vous ne pouvez pas cr\xE9er de webhook car le nombre maximum de webhook par table a \xE9t\xE9 atteint." } }
  },
  "sidebar": {
    "viewAPI": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Documentation de l'API" } },
    "createTable": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nouvelle table" } }
  },
  "sidebarItem": {
    "exportTable": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Exporter la table" } },
    "webhooks": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Webhooks" } },
    "notSynced": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "non synchronis\xE9" } },
    "lastSynced": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Derni\xE8re synchronisation" } },
    "sync": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Synchroniser la table" } },
    "updateSyncConfig": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mettre \xE0 jour la configuration de la synchronisation" } },
    "importFile": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Importer un fichier" } }
  },
  "apiToken": {
    "create": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "cr\xE9er" } },
    "read": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "lire" } },
    "update": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "modifier" } },
    "delete": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "supprimer" } },
    "tokenPrefix": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Jeton :" } },
    "viewAPIDocs": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Documentation de l'API" } },
    "generateNewToken": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "G\xE9n\xE9rer un nouveau jeton" } },
    "showOrHide": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Montrer ou masquer le jeton" } },
    "copyToClipboard": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Copier dans le presse-papier" } },
    "showDatabases": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Afficher le d\xE9tail" } }
  },
  "apiTokenSettings": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Jetons d'acc\xE8s \xE0 la base" } },
    "createToken": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cr\xE9er un jeton" } },
    "noTokensMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Vous n'avez pas encore cr\xE9\xE9 de jeton d'acc\xE8s. Vous pouvez utiliser les jetons d'acc\xE8s \xE0 la base pour vous authentifier aupr\xE8s de l'API REST qui vous permet de cr\xE9er, lire, modifier et supprimer des lignes. Il est possible de d\xE9finir des permissions diff\xE9rentes pour chaque table." } },
    "hasFullPermissions": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Toutes les permissions, pour les enfants \xE9galement." } },
    "hasOnlySelectedPermissions": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Uniquement les permissions s\xE9lectionn\xE9es pour les enfants." } },
    "noPermissions": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aucune permission." } },
    "createNewTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cr\xE9er un nouveau jeton" } },
    "backToOverview": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Retour" } }
  },
  "apiTokenForm": {
    "nameLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nom" } },
    "workspaceLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Projet" } }
  },
  "apiDocsSelectDatabase": {
    "needOneDatabase": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Vous devez avoir au moins une base de donn\xE9es afin de consulter la documentation de l'API." } }
  },
  "apiDocsExample": {
    "requestSample": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Example de requ\xEAte" } },
    "responseSample": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Example de r\xE9ponse" } },
    "userFieldNames": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nom des champs utilisateur" } }
  },
  "apiDocsParameter": {
    "optional": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "optionnel" } },
    "defaultValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Valeur par d\xE9faut : " }, { "t": 4, "k": "value" }] } }
  },
  "apiDocsTableGetRow": {
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Retourne une ligne de la table " }, { "t": 4, "k": "name" }, { "t": 3, "v": "." }] } },
    "rowId": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "L'identifiant unique de la ligne demand\xE9e." } }
  },
  "apiDocsErrors": {
    "errorCode": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Code d'erreur" } },
    "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nom" } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Description" } },
    "okDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "La requ\xEAte a \xE9t\xE9 execut\xE9e avec succ\xE8s." } },
    "badRequestDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "La requ\xEAte contient des valeurs invalides ou le contenu JSON n'a pas pu \xEAtre d\xE9cod\xE9." } },
    "unauthorizedDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Le jeton d'authentification utilis\xE9 est invalide." } },
    "notFoundDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "La ligne ou la table n'a pas \xE9t\xE9 trouv\xE9e." } },
    "requestEntityTooLargeDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "La taille du contenu de la requ\xEAte d\xE9passe la taille maximale autoris\xE9e." } },
    "internalErrorDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Le serveur a rencontr\xE9 une erreur interne inatendue." } },
    "badGatewayDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Baserow est en cours de d\xE9marrage ou une interruption du service est en cours." } },
    "unavailableDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Le serveur n'a pas r\xE9pondu dans les d\xE9lais impartis." } }
  },
  "apiDocsTableFields": {
    "tableTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Table " }, { "t": 4, "k": "name" }] } },
    "tableId": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "L'identifiant de cette table est :" } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Chaque ligne dans la table \xAB " }, { "t": 4, "k": "name" }, { "t": 3, "v": " \xBB contient les champs d\xE9crits ci-dessous." }] } },
    "id": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "ID" } },
    "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nom" } },
    "type": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Type" } },
    "compatibleFilters": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Filtres compatibles" } }
  },
  "apiDocsTableListRows": {
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Afin de lister les lignes de la table *" }, { "t": 4, "k": "name" }, { "t": 3, "v": "* une requ\xEAte de type `GET` doit \xEAtre envoy\xE9e au point d'acc\xE8s de la table *" }, { "t": 4, "k": "name" }, { "t": 3, "v": "*. La r\xE9ponse est pagin\xE9e et par d\xE9fault la premi\xE8re page est retourn\xE9e. La page d\xE9sir\xE9e peut-\xEAtre r\xE9cup\xE9r\xE9e en d\xE9finissant les param\xE8tres de requ\xEAte `page` et `size`." }] } },
    "page": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Permet de choisir la page." } },
    "size": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Permet de d\xE9finir le nombre de ligne par page." } },
    "userFieldNames": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Quand la valeur fournie pour le param\xE8tre GET `user_field_names` est une des valeur suivante\u202F: `y`, `yes`, `true`, `t`, `on`, `1`, ou `\"\"`, les noms des champs du r\xE9sultat seront ceux d\xE9finis par l'utilisateur.\n\nSi le param\xEAtre `user_field_names` n'est pas d\xE9fini ou n'est pas l'une des valeurs cit\xE9es plus haut, alors les noms des champs seront `field_` suivis par l'identifiant du champ. Par exemple `field_1` fait r\xE9f\xE9rence au champ avec l'identifiant `1`.\n\n De plus, quand `user_field_names` est d\xE9fini, vous devez \xE9galement fournir les noms d\xE9finis par l'utilisateur pour les param\xE8tres `order_by`, `include` et `exclude`." } },
    "search": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Quand ce param\xE8tre est d\xE9fini, seules les lignes qui satisfont la recherche seront retourn\xE9es." } },
    "orderBy": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ce param\xE8tre permet d'ordonner les lignes du r\xE9sultat \xE0 l'aide d'une liste de champs s\xE9par\xE9s par une virgule. Par d\xE9faut ou s'il est pr\xE9fix\xE9 par un `+` un champ est ordonn\xE9 par ordre croissant (A-Z), en le pr\xE9fixant par un `-` il sera ordonn\xE9 par ordre d\xE9croissant (Z-A).\n\n #### Avec `user_field_names` :\n\n `order_by` doit \xEAtre une liste de noms d\xE9finis par l'utilisateur des champs sur lesquels s'appuient l'ordre s\xE9par\xE9s par des virgules. Par exemple si vous fournissez la valeur suivante `order_by=Mon champ,-Mon champ 2` les lignes seront ordonn\xE9es par le champ appel\xE9 `Mon champ` par ordre croissant. Si certaines lignes ont la m\xEAme valeur pour `Mon champ` ce sous ensemble sera ordonn\xE9 par la valeur du champ `Mon champ 2` par ordre d\xE9croissant.\n\n Assurez vous que les champs qui commencent par un `+` ou un `-` soit explicitement pr\xE9fix\xE9s par un autre `+` ou `-`. Ex : `+-Nom`.\n\n Le nom des champs contenant des virgules doit \xEAtre entour\xE9 par des guillemets : `\"Nom ,\"`. Si le nom des champs contient des guillemets, ceux-ci doivent \xEAtre prot\xE9g\xE9s en utilisant le caract\xE8re `\\`. Ex : `Nom \\\"`.\n\n #### Sans `user_field_names` :\n\n `order_by` doit \xEAtre une liste de `field_` suivi par l'identifiant du champ \xE0 ordonner, s\xE9par\xE9s par des virgules. Par exemple si vous fournissez la valeur suivante pour ce param\xE8tre `order_by=field_1,-field_2` les lignes seront ordonn\xE9es par le champ `field_1` par ordre croissant. Si certaines lignes ont la m\xEAme valeur pour ce champ, ce sous ensemble sera ordonn\xE9 par la valeur du champ `field_2` par ordre d\xE9croissant." } },
    "filter": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ce param\xE8tre permet de filtrer les lignes avec les m\xEAme filtres que ceux disponibles pour les vues. Plusieurs filtres peuvent \xEAtre d\xE9finis simultan\xE9ement s'il suivent le m\xEAme format. La variable `field` permet d'indiquer le champ \xE0 filtrer, tandis que `filter` permet de choiser le type de filtre.\n\n#### Avec l'option `user_field_names`\xA0:\n\nPar exemple si vous utilisez la valeur suivante\xA0: `filter__Nom__equal=test`, seule les lignes pour lesquelles la valeur du champ nomm\xE9 `Nom` est \xE9gale \xE0 *test* seront retourn\xE9es. Cette m\xE9thode est r\xE9tro-compatible et test \xE9galement en utilisant `field_id` si le test \xE9choue pour le champ `Nom`.\n\n#### Sans l'option `user_field_names`\xA0:\n\nPar exemple si vous utilisez la valeur suivante\xA0: `filter__field_1__equal=test`, seule les lignes pour lesquelles la valeur du champ `field_1` est \xE9gale \xE0 *test* seront retourn\xE9es.\n\nVeuillez notez que si le param\xE8tre `filters` est fournie, ce param\xE8tre sera ignor\xE9. " } },
    "filterLink": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Une liste des filtres disponibles peut \xEAtre consult\xE9e ici." } },
    "filterType": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "- `AND` : indique que les lignes doivent satisfaire tous les filtres d\xE9finis.\n- `OR` : indique que les lignes doivent satisfaire au moins l'un des filtres d\xE9finis pour \xEAtre retourn\xE9es.\n\n Cela fonctionne uniquement quand au moins 2 filtres sont d\xE9finis." } },
    "include": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Par d\xE9faut, tous les champs de la table sont retourn\xE9s. Vous pouvez d\xE9finir le sous ensemble des champs qui seront dans les r\xE9sultats en fournissant une valeur pour ce param\xE8tre.\n\n#### Avec `user_field_names` :\n\n`include` doit \xEAtre une liste des noms d\xE9finis par l'utilisateur des champs que vous souhaitez conserver, s\xE9par\xE9s par une virgule. Par exemple, si vous fournissez la valeur suivante `include=Mon champ,-Mon champ 2` alors seul ces champs seront retourn\xE9s dans les r\xE9sultats (sauf si vous les avez explicitement exclus avec le param\xE8tre suivant).\n\nLe nom des champs contenant des virgules doit \xEAtre entour\xE9 par des guillemets : `\"Nom ,\"`. Si le nom des champs contient des guillemets, ceux-ci doivent \xEAtre prot\xE9g\xE9s en utilisant le caract\xE8re `\\`. Ex : `Nom \\\"`.\n\n#### Sans `user_field_names` :\n\n`include` doit \xEAtre une liste de `field_` suivis par l'identifiant d'un champ \xE0 inclure dans le r\xE9sultat, s\xE9par\xE9 par des virgules. Par exemple, si vous fournissez la valeur suivante `include=field_1,field_2` alors les champs d'identifiant `1` et `2` seront les champs pr\xE9sents dans le r\xE9sultat (sauf si vous les avez explicitement exclus avec le param\xE8tre suivant)." } },
    "exclude": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Par d\xE9faut, tous les champs de la table sont retourn\xE9s dans les r\xE9sultats. Vous pouvez choisir un sous ensemble de champs qui seront exclus des r\xE9sultats en d\xE9finissant une valeur pour ce param\xE8tre.\n\n#### Avec `user_field_names`\xA0:\n\n`exclude` doit \xEAtre une liste des noms d\xE9finis par l'utilisateur des champs que vous souhaitez exclure, s\xE9par\xE9s par une virgule. Par exemple, si vous fournissez la valeur suivante : `exclude=Mon champ,-Mon champ 2` alors ces deux champs seront exclus des r\xE9sultats.\n\nLe nom des champs contenant des virgules doit \xEAtre entour\xE9 par des guillemets : `\"Nom ,\"`. Si le nom des champs contient des guillemets, ceux-ci doivent \xEAtre prot\xE9g\xE9s en utilisant le caract\xE8re `\\`. Ex\xA0: `Nom \\\"`.\n\n#### Sans `user_field_names`\xA0:\n\n`exclude` doit \xEAtre une liste de `field_` suivis par l'identifiant d'un champ \xE0 exclure du r\xE9sultat, s\xE9par\xE9 par des virgules. Par exemple, si vous fournissez la valeur suivante\xA0: `exclude=field_1,field_2` alors les champs avec l'identifiant `1` et `2` seront exclus." } },
    "viewId": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }, { "t": 9 }, { "t": 3 }, { "t": 9 }, { "t": 3 }, { "t": 9 }, { "t": 3 }, { "t": 9 }, { "t": 3 }], "s": "Par d\xE9faut, aucun des filtres et tris autres que ceux d\xE9finis dans les param\xE8tres de la requ\xEAte ne sont appliqu\xE9s. Vous pouvez d\xE9finir les filtres et les tris d'une vue en fournissant son `id` dans le param\xE8tre GET `view_id`. Par exemple, si vous fournissez le param\xE8tre GET suivant `view_id=1`, les filtres et les tris d\xE9finis dans la vue avec l'id `1` seront appliqu\xE9s. Vous pouvez trouver le `view_id` dans le menu contextuel d'une vue donn\xE9e. Il s'agit du nombre entre parenth\xE8ses derri\xE8re le nom de la vue. \n\n #### Avec `filter__{field}__{filter}` \n\n Le filtre fourni dans le param\xE8tre de la requ\xEAte et les filtres d\xE9finis dans la vue seront appliqu\xE9s.\n\n #### Avec `order_by` \n\n Si `order_by` est fourni, le tri d\xE9fini dans la vue sera ignor\xE9." } },
    "filtersBuilder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ouvrir le g\xE9n\xE9rateur de filtres" } },
    "filters": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }, { "t": 9 }, { "t": 3 }, { "t": 9 }, { "t": 3 }, { "t": 9 }, { "t": 3 }, { "t": 9 }, { "t": 3 }, { "t": 9 }, { "t": 3 }, { "t": 9 }, { "t": 3 }, { "t": 9 }, { "t": 3 }, { "t": 9 }, { "t": 3 }, { "t": 9 }, { "t": 3 }, { "t": 9 }, { "t": 3 }, { "t": 9 }, { "t": 3 }, { "t": 9 }, { "t": 3 }], "s": 'Les lignes peuvent \xEAtre filtr\xE9es en utilisant les m\xEAmes filtres que ceux disponibles pour les vues. Ce param\xE8tre accepte une cha\xEEne s\xE9rialis\xE9e en JSON contenant l\'arbre de filtre \xE0 appliquer pour cette vue. L\'arbre de filtre est une structure imbriqu\xE9e contenant les filtres qui doivent \xEAtre appliqu\xE9s.\n\n#### Avec `user_field_names`\xA0:\n\nUn exemple d\'arbre de filtre valide est le suivant\xA0: `{\\"filter_type\\": \\"AND\\", \\"filters\\": [{\\"field\\": \\"Name\\", \\"type\\": \\"equal\\", \\"value\\": \\"test\\"}]}`.\n\n#### Sans `user_field_names`\xA0:\\n\\nPar exemple, si vous fournissez le param\xE8tre GET suivant\xA0: `{\\"filter_type\\": \\"AND\\", \\"filters\\": [{\\"field\\": 1, \\"type\\": \\"equal\\", \\"value\\": \\"test\\"}]}`\n\nVeuillez noter que si ce param\xE8tre est fourni, tous les autres `filter__{field}__{filter}` seront ignor\xE9s, ainsi que le param\xE8tre `filter_type`.' } },
    "join": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Permet de consulter les valeurs des champs d'une table li\xE9e par l'interm\xE9diaire des champs de lien de la table courante. Le nom du param\xE8tre doit \xEAtre le nom d'un champ de lien existant, suivi de `__join`. La valeur doit \xEAtre une liste de noms de champs pour lesquels vous souhaiter inclure les valeurs. Vous pouvez fournir un ou plusieurs champs cibles. Il n'est pas possible de rechercher la valeur d'un champ de lien dans la table li\xE9e.\n\n #### Avec `user_field_names`\u202F:\n\n `join` doit \xEAtre une liste de noms de champs s\xE9par\xE9s par des virgules \xE0 inclure dans les r\xE9sultats. Par exemple, si vous fournissez le param\xE8tre GET suivant `LinkRowField__join=MyField,MyField2`, les valeurs de `MyField` et `My Field2` dans la table li\xE9e par `LinkRowField` seront incluses dans la r\xE9ponse.\n\n#### Sans `user_field_names`\u202F:\n\n `join` doit \xEAtre une liste de `field_` s\xE9par\xE9s par des virgules, suivi de l'identifiant du champ \xE0 inclure dans les r\xE9sultats. Par exemple, si vous fournissez le param\xE8tre GET suivant `field_1__join=field_2,field_3` alors les valeurs de `field_2` et `field_3` dans la table li\xE9e par `field_1` seront incluses dans la r\xE9ponse." } },
    "test": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }, { "t": 9 }, { "t": 3 }, { "t": 9 }, { "t": 3 }, { "t": 9 }, { "t": 3 }, { "t": 9 }], "s": '`{"filter_type": "AND", "filters": [{"field": "Name", "type": "equal", "value": "test"}]}' } }
  },
  "apiDocsIntro": {
    "intro": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "L'API de la base " }, { "t": 4, "k": "name" }, { "t": 3, "v": " offre un moyen simple d'int\xE9grer des donn\xE9es provenant d'un syst\xE8me externe. L'API suit les principes d'architecture REST, utilise le format JSON pour encoder les donn\xE9es, s'appuie sur les codes HTTP standards et propose des messages d'erreurs \xE0 la fois techniques mais \xE9galement lisibles par les humains pour signaler les dysfonctionnements." }] } },
    "autoDocDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cette documentation est g\xE9n\xE9r\xE9e automatiquement \xE0 partir des table et des champs disponibles dans votre basse de donn\xE9es. Si vous effectuez des modifications sur la base, les tables ou bien sur les champs des tables, cela peut \xE9galement modifier l'API. Par cons\xE9quent, assurez-vous de mettre \xE0 jour les clients de votre API dans ce cas." } },
    "databaseId": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "L\xB4identifiant de la base est :" } },
    "jsClient": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Exemple JavaScript de la requ\xEAte d'API\xA0:" } },
    "pythonClient": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Exemple en Python de la requ\xEAte d'API\xA0:" } }
  },
  "apiDocsTableListFields": {
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Afin de lister les champs de la table " }, { "t": 4, "k": "name" }, { "t": 3, "v": " une requ\xEAte de type " }, { "t": 4, "k": "get" }, { "t": 3, "v": " doit \xEAtre envoy\xE9 aupr\xE8s du point d'acc\xE8s des champs de celle-ci. Le jeton d'authentification doit avoir les droits de cr\xE9ation, modification et suppression afin de pouvoir lister les champs de la table." }] } },
    "resultFieldProperties": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Propri\xE9t\xE9s des champs de la r\xE9ponse" } },
    "id": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cl\xE9 primaire du champ. Permet de g\xE9n\xE9rer le nom de la colonne en base de donn\xE9es en ajoutant le prefix `field_`." } },
    "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nom du champ." } },
    "tableId": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "ID de table associ\xE9e." } },
    "order": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ordre du champ dans la table. 0 est pour le premier champ." } },
    "primary": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Indique si le champ est une cl\xE9 primaire. Si la valeur est `true` le champ ne peut \xEAtre effac\xE9 et ses valeurs doivent repr\xE9senter la ligne enti\xE8re." } },
    "type": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Type d\xE9fini pour ce champ." } },
    "extraProps": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Certaines propri\xE9t\xE9s ne sont pas d\xE9crites ici car elles sont sp\xE9cifiques au type de champ concern\xE9." } },
    "readOnly": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Indique si le champ est un champ de lecture uniquement. Si oui, il n'est pas possible de mettre \xE0 jour la valeur de la cellule." } },
    "descriptionField": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Description du champ" } }
  },
  "apiDocsTableDeleteRow": {
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Supprime une ligne de la table *" }, { "t": 4, "k": "name" }, { "t": 3, "v": "*." }] } },
    "rowId": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "L'identifiant unique de la ligne \xE0 supprimer." } }
  },
  "apiDocsTableMoveRow": {
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "D\xE9place une ligne existante de la table *" }, { "t": 4, "k": "name" }, { "t": 3, "v": "* avant une autre ligne. Si le param\xE8tre `before_id` n'est pas fourni, la ligne est d\xE9plac\xE9e \xE0 la fin de la table." }] } },
    "rowId": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Identifiant unique de la ligne \xE0 d\xE9placer." } },
    "before": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Permet de d\xE9finir l'identifiant de la ligne avant laquelle la ligne choisie doit \xEAtre d\xE9plac\xE9e. Si aucune valeur n'est fournie, la ligne est d\xE9plac\xE9e \xE0 la fin de la table." } }
  },
  "apiDocsTableUpdateRow": {
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Modifie une ligne existante de la table " }, { "t": 4, "k": "name" }, { "t": 3, "v": "." }] } },
    "rowId": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "L'identifiant unique de la ligne \xE0 modifier." } },
    "before": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Si un identifiant de ligne est fourni, la ligne sera plac\xE9e avant la ligne portant cet identifiant." } }
  },
  "apiDocsTableCreateRow": {
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Cr\xE9\xE9 une nouvelle ligne pour la table " }, { "t": 4, "k": "name" }, { "t": 3, "v": "." }] } },
    "before": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Si ce param\xE8tre est fourni, la nouvelle ligne sera positionn\xE9e avant la ligne portant l'identifiant fourni." } }
  },
  "apiDocsAuth": {
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Baserow utilise un syst\xE8me d'authentification simple par jeton. Vous devez g\xE9n\xE9rer au moins un jeton d'authentification dans votre " }, { "t": 4, "k": "settingsLink" }, { "t": 3, "v": " afin d'utiliser les API suivantes. Il est possible de d\xE9finir des droits de cr\xE9ation, lecture, modification et suppression par table et ce pour chaque jeton. Pour vous authentifier, fournissez le jeton via l'ent\xEAte HTTP \xAB\xA0Authorization\xA0\xBB de la requ\xEAte. Tous les appels \xE0 l'API doivent \xEAtre authentifi\xE9s et r\xE9alis\xE9s via le protocole s\xE9curis\xE9 HTTPS." }] } },
    "settingsLink": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "compte" } }
  },
  "apiDocsFilters": {
    "filter": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Filtre" } },
    "exampleValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Exemple" } },
    "example": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Exemple complet" } },
    "field": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "La valeur " }, { "t": 4, "k": "name" }] } },
    "deprecated": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "obsol\xE8te" } }
  },
  "fieldTextSubForm": {
    "placeholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Texte par d\xE9fault" } }
  },
  "fieldSingleSelectSubForm": {
    "optionsLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Options" } },
    "defaultOptionLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Option par d\xE9faut" } }
  },
  "fieldSingleSelectDropdown": {
    "notFound": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Option manquante" } }
  },
  "fieldDateSubForm": {
    "dateFormatLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Format de date" } },
    "dateFormatEuropean": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Europ\xE9en" } },
    "dateFormatUS": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Am\xE9ricain" } },
    "dateFormatISO": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "ISO" } },
    "includeTimeLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Inclure l'heure" } },
    "timeFormatLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Format de l'heure" } },
    "24Hour": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "24 heures" } },
    "12Hour": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "12 heures" } },
    "showTimezoneLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Afficher le fuseau horaire" } },
    "forceTimezoneLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "D\xE9finir le fuseau horaire pour tous les collaborateurs" } },
    "forceTimezoneValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Fuseau horaire" } },
    "addTimezoneOffsetLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Convertir les valeurs (ajouter " }, { "t": 4, "k": "utcOffsetDiff" }, { "t": 3, "v": "\xA0minutes)" }] } },
    "subTimezoneOffsetLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Convertir les valeurs (soustraire " }, { "t": 4, "k": "utcOffsetDiff" }, { "t": 3, "v": " minutes)" }] } }
  },
  "fieldLinkRowSubForm": {
    "noTable": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Vous devez cr\xE9er au moins une autre table dans la m\xEAme base de donn\xE9es pour pouvoir cr\xE9er un lien." } },
    "selectTableLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "S\xE9lectionnez une table" } },
    "hasRelatedFieldLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cr\xE9er un champ rapport\xE9" } },
    "limitToView": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Limiter la s\xE9lection \xE0 la vue" } },
    "limitToViewDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Notez que ceci n'est que visuel. Il est encore possible de faire des relations en dehors de la vue via la table ou l'API." } },
    "allowMultipleRelations": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Autoriser les relations multiples" } }
  },
  "fieldSelectOptions": {
    "add": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ajouter une option" } }
  },
  "fieldNumberSubForm": {
    "typeLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Type num\xE9rique" } },
    "integer": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Entier" } },
    "decimal": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "D\xE9cimal" } },
    "decimalPlacesLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pr\xE9cision" } },
    "allowNegative": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Autoriser les nombres n\xE9gatifs" } },
    "separatorLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "S\xE9parateur de milliers et de d\xE9cimales" } },
    "prefixPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pr\xE9fixe" } },
    "suffixPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Suffixe" } },
    "prefixAndSuffixLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pr\xE9fixe / suffixe" } },
    "spaceComma": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Espace, virgule (1 000 000,00)" } },
    "spacePeriod": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Espace, point (1 000 000.00)" } },
    "commaPeriod": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Virgule, point (1,000,000.00)" } },
    "periodComma": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Point, virgule (1.000.000,00)" } },
    "noFormatting": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pas de formatage" } },
    "defaultValuePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Saisir une valeur par d\xE9faut" } },
    "defaultValueLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Valeur par d\xE9faut" } }
  },
  "fieldContext": {
    "editField": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Modifier le champ" } },
    "deleteField": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Supprimer le champ" } },
    "hideField": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Masquer le champ" } },
    "showField": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Afficher le champ" } },
    "changePrimaryField": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Changer le champ primaire" } }
  },
  "fieldForm": {
    "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nom" } },
    "fieldAlreadyExists": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Un champ avec ce nom existe d\xE9j\xE0." } },
    "nameNotAllowed": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ce nom de champ n'est pas autoris\xE9." } },
    "nameTooLong": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ce nom de champ est trop long." } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Description" } },
    "addDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ajouter une description" } },
    "dbIndex": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Index" } },
    "dbIndexError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ce type de champ ne peut pas avoir d'index. Veuillez le supprimer avant d'enregistrer ou de modifier le type de champ." } },
    "dbIndexDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "L'indexation peut am\xE9liorer consid\xE9rablement les performances de filtrage, mais ralentit les op\xE9rations de cr\xE9ation, de mise \xE0 jour et de suppression." } },
    "defaultValueDisabledByConstraint": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Impossible de d\xE9finir une valeur par d\xE9faut avec une contrainte d'unicit\xE9" } },
    "dbIndexDisabledTooltip": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "L'indexation n'est pas disponible pour ce type de champ." } },
    "defaultValueOverriddenByView": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Une valeur par d\xE9faut au niveau de la vue est d\xE9finie pour ce champ\u202F; elle pr\xE9vaudra sur cette valeur par d\xE9faut." } }
  },
  "fieldLookupSubForm": {
    "noTable": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Vous devez cr\xE9er au moins une autre table dans la m\xEAme base de donn\xE9es pour pouvoir cr\xE9er un lien." } },
    "selectThroughFieldLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "S\xE9lectionnez le lien vers la table" } },
    "selectTargetFieldLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "S\xE9lectionnez le champ \xE0 rapporter" } }
  },
  "fieldFormulaNumberSubForm": {
    "typeLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Type num\xE9rique" } },
    "integer": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Entier" } },
    "decimal": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "D\xE9cimal" } },
    "decimalPlacesLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pr\xE9cision" } },
    "allowNegative": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Autoriser les nombres n\xE9gatifs" } }
  },
  "fieldRatingSubForm": {
    "maxValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Max" } },
    "color": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Couleur" } },
    "style": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Style" } }
  },
  "rowCreateModal": {
    "addField": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ajouter un champ" } }
  },
  "selectRowContent": {
    "search": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Rechercher dans la table" } },
    "hideFields": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Masquer les champs" } }
  },
  "rowEditModal": {
    "addField": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ajouter un champ" } },
    "showHiddenFields": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Afficher les champs masqu\xE9s" } },
    "hideHiddenFields": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Masquer les champs cach\xE9s" } }
  },
  "rowEditFieldMultipleSelect": {
    "addOption": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Choisir une option" } }
  },
  "rowEditFieldFile": {
    "addFile": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ajouter un fichier" } },
    "sizes": {
      "0": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Octet(s)" } },
      "1": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ko" } },
      "2": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mo" } },
      "3": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Go" } },
      "4": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "To" } },
      "5": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Po" } }
    }
  },
  "rowEditFieldLinkRow": {
    "addLink": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Choisir un lien" } },
    "keepOnlyOneValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ne conserver qu'une seule valeur. Ce champ ne supporte qu'une seule relation. La valeur est sauvegard\xE9e s'il ne reste qu'une seule relation." } }
  },
  "tableCSVImporter": {
    "chooseFileLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Choisissez un fichier CSV" } },
    "chooseFileDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Vous pouvez importer un CSV existant en envoyant un fichier .CSV avec des donn\xE9es tabulaires. La plupart des tableurs sont capables de r\xE9aliser un export au format CSV." } },
    "chooseFile": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Choisir un fichier CSV" } },
    "columnSeparator": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "S\xE9p. de colonne" } },
    "recordSeparator": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "S\xE9p. d'enregistrement" } },
    "unitSeparator": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "s\xE9parateur d'unit\xE9" } },
    "encoding": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Encodage" } },
    "firstRowHeader": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "La premi\xE8re ligne est l'ent\xEAte" } },
    "limitFileSize": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "La taille maximum du fichier est de " }, { "t": 4, "k": "limit" }, { "t": 3, "v": "Mo." }] } },
    "limitError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Il n'est pas possible d'importer plus de " }, { "t": 4, "k": "limit" }, { "t": 3, "v": " lignes." }] } },
    "emptyCSV": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ce fichier CSV est vide." } }
  },
  "tableForm": {
    "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nom" } }
  },
  "tableXMLImporter": {
    "fileLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Choisissez un fichier XML" } },
    "fileDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Vous pouvez importer un XML existant en envoyant un fichier .XML contenant des donn\xE9es tabulaires, c'est-\xE0-dire :" } },
    "chooseButton": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Choisir un fichier XML" } },
    "processingError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Une erreur est survenue lors du traitement du XML : " }, { "t": 4, "k": "errors" }] } },
    "emptyError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ce fichier XML est vide." } },
    "limitFileSize": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "La taille maximum du fichier est de " }, { "t": 4, "k": "limit" }, { "t": 3, "v": "Mo." }] } },
    "limitError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Il n'est pas possible d'importer plus de " }, { "t": 4, "k": "limit" }, { "t": 3, "v": " lignes." }] } }
  },
  "tableJSONImporter": {
    "fileLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Choisissez un fichier JSON" } },
    "fileDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Vous pouvez importer un JSON existant en envoyant un fichier .json contenant des donn\xE9es tabulaires, c'est-\xE0-dire :" } },
    "chooseButton": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Choisir un fichier JSON" } },
    "encodingLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Encodage" } },
    "processingError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Une erreur est survenue lors du traitement du JSON : " }, { "t": 4, "k": "error" }] } },
    "arrayError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ce fichier JSON n'est pas un tableau." } },
    "emptyError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ce fichier JSON est vide." } },
    "limitFileSize": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "La taille maximum de fichier est de " }, { "t": 4, "k": "limit" }, { "t": 3, "v": "Mo." }] } },
    "limitError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Il n'est pas possible d'importer plus de " }, { "t": 4, "k": "limit" }, { "t": 3, "v": " lignes." }] } }
  },
  "tablePasteImporter": {
    "pasteLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Collez les donn\xE9es tabulaires" } },
    "pasteDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Vous pouvez copier les lignes provenant d'un tableur et les coller ci-dessous." } },
    "firstRowHeader": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "La premi\xE8re ligne est l'ent\xEAte" } },
    "limitError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Il n'est pas possible d'importer plus de " }, { "t": 4, "k": "limit" }, { "t": 3, "v": " lignes." }] } }
  },
  "importFileModal": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cr\xE9er une nouvelle table" } },
    "importLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Souhaitez-vous importer des donn\xE9es existantes ?" } },
    "newTable": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Commencer avec une table vide" } },
    "addButton": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ajouter la table" } },
    "preparing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pr\xE9paration des donn\xE9es..." } },
    "showReport": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Afficher le rapport d'erreur" } },
    "reportTitleFailure": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Lignes en \xE9chec" } },
    "importError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Un probl\xE8me est survenu lors de l'import du fichier" } },
    "uploading": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Envoi\u2026" } },
    "reportTitleSuccess": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Import r\xE9ussi mais..." } },
    "openCreatedTable": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ouvrir la table cr\xE9\xE9e" } },
    "stateRowCreation": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Import en cours\u2026" } },
    "reportMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Les num\xE9ro de ligne suivants n'ont pas pu \xEAtre import\xE9s :" } },
    "statePreValidation": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Validation des donn\xE9es..." } },
    "stateCreateTable": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cr\xE9ation de la table..." } },
    "fieldMappingTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Correspondance des champs" } },
    "showTable": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Afficher la table" } },
    "additionalImportTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Importer dans " }, { "t": 4, "k": "table" }] } },
    "importButton": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Importer" } },
    "fieldMappingDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nous avons automatiquement fait la correspondance entre les colonnes du fichier et les champs Baserow dans votre table. Vous pouvez les modifier ci-dessous. Toute cellule incompatible avec le type du champ s\xE9lectionn\xE9 restera vide apr\xE8s l'importation." } },
    "selectImportMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Veuillez s\xE9lectionner les donn\xE9es \xE0 importer." } },
    "filePreview": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aper\xE7u du contenu du fichier" } },
    "importPreview": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aper\xE7u de l'import" } },
    "changeImporterType": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Modifier le type d'importation" } },
    "defaultName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Table" } },
    "useUpsertField": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mettre \xE0 jour les lignes si elles existent d\xE9j\xE0" } },
    "upsertTooltip": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Faire correspondre les lignes existantes \xE0 l'aide d'un champ unique pour remplacer les donn\xE9es par les valeurs import\xE9es." } },
    "restoredFile": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Importation du fichier \xAB " }, { "t": 4, "k": "name" }, { "t": 3, "v": " \xBB..." }] } }
  },
  "formulaAdvancedEditContext": {
    "textAreaFormulaInputPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cliquez pour \xE9diter la formule" } },
    "fields": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Champs" } },
    "functions": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Fonctions" } },
    "operators": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Operateurs" } },
    "fieldType": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Un champ de type " }, { "t": 4, "k": "type" }] } }
  },
  "fieldFormulaInitialSubForm": {
    "formulaInputPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cliquez pour \xE9diter la formule" } },
    "refreshFormulaOptions": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Rafraichir les options" } }
  },
  "formulaFieldItemDescription": {
    "syntax": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Syntaxe" } },
    "examples": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Exemples" } }
  },
  "viewSearchContext": {
    "searchInRows": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Chercher dans toute la table" } },
    "hideNotMatching": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "cacher les lignes sans r\xE9sultat" } }
  },
  "viewsContext": {
    "searchView": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Recherche" } },
    "noViews": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aucune vue trouv\xE9e" } },
    "collaborative": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Collaboratif" } }
  },
  "viewFilterTypeLinkRow": {
    "unnamed": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Ligne sans nom " }, { "t": 4, "k": "value" }] } },
    "choose": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Choisissez une ligne" } }
  },
  "viewFilterContext": {
    "addFilter": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ajouter un filtre" } },
    "disableAllFilters": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tous d\xE9sactiv\xE9s" } },
    "noFilterTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Vous n'avez pas encore d\xE9finit de filtre" } },
    "noFilterText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Les filtres permettent de voir uniquement les lignes qui correspondent \xE0 vos crit\xE8res." } },
    "where": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Quand" } },
    "and": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Et" } },
    "or": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ou" } },
    "filterTypeNotFound": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Le filtre n'est pas compatible." } },
    "relatedFieldNotFound": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Le champ associ\xE9 n'a pas \xE9tait trouv\xE9." } },
    "noCompatibleFilterTypesErrorTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aucun filtre compatible" } },
    "noCompatibleFilterTypesErrorMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aucun de vos champs n'a de filtre compatible" } },
    "addFilterGroup": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ajouter un groupe de filtres" } }
  },
  "viewFilterTypeFileTypeDropdown": {
    "image": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Image" } },
    "document": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Document" } }
  },
  "createViewModal": {
    "createNew": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Cr\xE9er une vue " }, { "t": 4, "k": "view" }] } },
    "add": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Ajouter " }, { "t": 4, "k": "view" }] } }
  },
  "shareViewLink": {
    "shareView": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Partager " }, { "t": 4, "k": "viewTypeSharingLinkName" }] } },
    "shareViewTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Vous n'avez pas encore partag\xE9 la vue" } },
    "sharedViewTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Actuellement, " }, { "t": 4, "k": "viewTypeSharingLinkName" }, { "t": 3, "v": " est partag\xE9\xB7e via un lien priv\xE9" }] } },
    "sharedViewDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Les personnes poss\xE9dant le lien peuvent voir " }, { "t": 4, "k": "viewTypeSharingLinkName" }, { "t": 3, "v": "." }] } },
    "disableLink": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "D\xE9sactiver le lien de partage" } },
    "generateNewUrl": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "g\xE9n\xE9rer un nouveau lien" } },
    "copyURL": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "copier le lien" } },
    "EnablePassword": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Restreindre l'acc\xE8s avec un mot de passe" } },
    "DisablePassword": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "L'acc\xE8s est prot\xE9g\xE9 par un mot de passe" } },
    "ChangePassword": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Changer" } },
    "shareViewText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Le lien de partage permet \xE0 quiconque de consulter les donn\xE9es dans cette vue." } },
    "shareViewLinkTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cr\xE9er un lien priv\xE9" } },
    "notSharedYetText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Permettre \xE0 quiconque de consulter les donn\xE9es de cette vue ou de synchroniser les \xE9v\xE9nements avec un calendrier externe." } },
    "createPrivateLink": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cr\xE9er un lien priv\xE9" } },
    "shareViewWarningTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Avertissement" } }
  },
  "viewSortContext": {
    "noSortTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Vous n'avez configur\xE9 aucun tri" } },
    "noSortText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Le tri vous permet d'ordonner les lignes selon la valeur d'un champ." } },
    "sortBy": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Trier par" } },
    "thenBy": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Puis par" } },
    "addSort": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ajouter un tri" } },
    "hiddenFieldWarning": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Un ou plusieurs tris font r\xE9f\xE9rence \xE0 des champs masqu\xE9s qui ne seront pas visibles pour les \xE9diteurs et les utilisateurs disposant de r\xF4les inf\xE9rieurs." } }
  },
  "viewSort": {
    "sort": { "t": 0, "b": { "t": 1, "c": [{ "t": 2, "i": [{ "t": 3 }], "s": "Tri" }, { "t": 2, "i": [{ "t": 3 }], "s": "1 Tri" }, { "t": 2, "i": [{ "t": 4, "k": "count" }, { "t": 3, "v": " Tris" }] }] } }
  },
  "viewRotateSlugModal": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mettre \xE0 jour le lien" } },
    "refreshWarning": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "\xCAtes-vous s\xFBr\xB7e de vouloir mettre \xE0 jour le lien vers " }, { "t": 4, "k": "viewTypeSharingLinkName" }, { "t": 3, "v": " " }, { "t": 4, "k": "viewName" }, { "t": 3, "v": " ? Apr\xE8s la mise \xE0 jour, il ne sera plus possible de consulter " }, { "t": 4, "k": "viewTypeSharingLinkName" }, { "t": 3, "v": " via l'ancien lien. Les personnes poss\xE9dant le lien ne seront plus en mesure d'acc\xE9der \xE0 la page affichant " }, { "t": 4, "k": "viewTypeSharingLinkName" }, { "t": 3, "v": "." }] } },
    "generateNewURL": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "G\xE9n\xE9rer une nouvelle URL" } }
  },
  "viewFieldsContext": {
    "coverField": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Image d'en-t\xEAte" } },
    "noCover": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pas d'en-t\xEAte" } },
    "search": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Chercher un champ" } },
    "hideAll": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Masquer tout" } },
    "showAll": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Afficher tout" } }
  },
  "viewFilterTypeBoolean": {
    "selected": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "S\xE9lectionn\xE9" } }
  },
  "viewFilter": {
    "filter": { "t": 0, "b": { "t": 1, "c": [{ "t": 2, "i": [{ "t": 3 }], "s": "Filtre" }, { "t": 2, "i": [{ "t": 3 }], "s": "1 Filtre" }, { "t": 2, "i": [{ "t": 4, "k": "count" }, { "t": 3, "v": " Filtres" }] }] } },
    "hasAllValuesEqual": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "a toutes les valeurs \xE9gales" } },
    "hasValueHigherThan": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "a une valeur sup\xE9rieure \xE0" } },
    "hasValueHigherThanOrEqual": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "a une valeur sup\xE9rieure ou \xE9gale \xE0" } },
    "hasNotValueLowerThanOrEqual": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "n'a pas une valeur inf\xE9rieure ou \xE9gale \xE0" } },
    "hasValueLowerThan": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "a une valeur inf\xE9rieure \xE0" } },
    "hasValueLowerThanOrEqual": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "a une valeur inf\xE9rieure ou \xE9gale \xE0" } },
    "hasNotValueHigherThan": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "n'a pas une valeur sup\xE9rieure \xE0" } },
    "hasNotValueHigherThanOrEqual": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "n'a pas une valeur sup\xE9rieure ou \xE9gale \xE0" } },
    "hasNotValueLowerThan": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "n'a pas une valeur inf\xE9rieure \xE0" } }
  },
  "viewContext": {
    "exportView": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Exporter la vue" } },
    "renameView": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Renommer la vue" } },
    "deleteView": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Supprimer la vue" } },
    "webhooks": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Webhooks" } },
    "duplicateView": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dupliquer la vue" } },
    "importFile": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Importer un fichier" } },
    "toPersonal": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Vers Personnelle" } },
    "toCollaborative": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Vers Collaborative" } },
    "defaultRowValues": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Valeurs par d\xE9faut des lignes" } }
  },
  "deleteViewModal": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Supprimer la vue " }, { "t": 4, "k": "name" }] } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "\xCAtes-vous sur\xB7e de vouloir supprimer la vue " }, { "t": 4, "k": "name" }, { "t": 3, "v": " ? Les donn\xE9es seront pr\xE9serv\xE9es, mais les filtres, tris et largeurs des champs associ\xE9s \xE0 la vue seront supprim\xE9s." }] } },
    "delete": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Supprimer la vue" } }
  },
  "viewForm": {
    "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nom" } },
    "whoCanEdit": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Qui peut modifier cette vue\u202F?" } }
  },
  "galleryViewHeader": {
    "customizeCards": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Configurer les cartes" } }
  },
  "gridViewHide": {
    "hideField": { "t": 0, "b": { "t": 1, "c": [{ "t": 2, "i": [{ "t": 3 }], "s": "Cacher les champs" }, { "t": 2, "i": [{ "t": 3 }], "s": "1 champ cach\xE9" }, { "t": 2, "i": [{ "t": 4, "k": "count" }, { "t": 3, "v": " champs cach\xE9s" }] }] } }
  },
  "gridViewFieldType": {
    "createFilter": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "D\xE9finir un filtre" } },
    "sortField": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Trier" } },
    "hideField": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cacher un champ" } },
    "insertRight": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ins\xE9rer \xE0 droite" } },
    "insertLeft": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ins\xE9rer \xE0 gauche" } },
    "duplicate": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dupliquer le champ" } },
    "dataSyncField": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Le champ est en lecture seule et fait partie de la synchronisation des donn\xE9es de la table." } },
    "noWriteValues": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Les modifications de ce champ sont limit\xE9es." } },
    "dataSyncFieldTwoWaySync": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Le champ est synchronis\xE9 avec la synchronisation des donn\xE9es de la table." } }
  },
  "gridViewRow": {
    "rowNotMatchingFilters": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "La ligne est filtr\xE9e" } },
    "rowNotMatchingSearch": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "La ligne ne contient pas le terme recherch\xE9" } },
    "rowHasMoved": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "La ligne est d\xE9plac\xE9e" } }
  },
  "gridView": {
    "insertRowAbove": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ins\xE9rer au dessus" } },
    "insertRowBelow": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ins\xE9rer en dessous" } },
    "enlargeRow": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Afficher la ligne" } },
    "deleteRow": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Supprimer la ligne" } },
    "rowCount": { "t": 0, "b": { "t": 1, "c": [{ "t": 2, "i": [{ "t": 3 }], "s": "Acune ligne" }, { "t": 2, "i": [{ "t": 3 }], "s": "1 ligne" }, { "t": 2, "i": [{ "t": 4, "k": "count" }, { "t": 3, "v": " lignes" }] }] } },
    "duplicateRow": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dupliquer la ligne" } },
    "selectRow": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "S\xE9lectionner la ligne" } },
    "copyCells": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Copier les cellules" } },
    "deleteRows": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Supprimer les lignes" } },
    "hiddenRowsInsertedTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Lignes ajout\xE9es" } },
    "hiddenRowsInsertedMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "number" }, { "t": 3, "v": " nouvelles lignes ont \xE9t\xE9 ajout\xE9es, mais ne sont pas visibles en raison des filtres actifs." }] } },
    "copiedRowURLMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "L'URL de la ligne\xA0" }, { "t": 4, "k": "id" }, { "t": 3, "v": " a \xE9t\xE9 copi\xE9e." }] } },
    "copiedRowURL": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "URL de la ligne copi\xE9e" } },
    "copyRowURL": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Copier l'URL de la ligne" } },
    "tooManyItemsTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Trop d'\xE9l\xE9ments" } },
    "tooManyItemsDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Il n'est pas possible de mettre \xE0 jour plus de " }, { "t": 4, "k": "limit" }, { "t": 3, "v": " lignes \xE0 la fois, c'est pourquoi seule la premi\xE8re a \xE9t\xE9 mise \xE0 jour." }] } },
    "generateCellsValues": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "G\xE9n\xE9rer des valeurs avec l'IA" } },
    "AIValuesGenerationErrorTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "La g\xE9n\xE9ration de valeur par l'IA a \xE9chou\xE9" } },
    "AIValuesGenerationErrorMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Veuillez v\xE9rifier votre API_KEY et le mod\xE8le s\xE9lectionn\xE9." } },
    "copyCellsWithHeader": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Copier les cellules avec l'en-t\xEAte" } },
    "generateAllAiValues": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "G\xE9n\xE9rer toutes les valeurs" } }
  },
  "gridViewFieldLinkRow": {
    "unnamed": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Ligne sans nom " }, { "t": 4, "k": "value" }] } },
    "keepOnlyOneValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ne conserver qu'une seule valeur" } }
  },
  "gridViewIdentifierOptions": {
    "id": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Identifiant de ligne" } },
    "count": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Compte" } }
  },
  "previewAny": {
    "externalWarning": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ouvrir un fichier via un service externe expose votre fichier \xE0 leurs serveurs." } }
  },
  "exportTableModal": {
    "failedTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "L'export a \xE9chou\xE9" } },
    "failedDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "L'export n'a pas pu aboutir en raison d'une erreur serveur." } },
    "cancelledTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Export annul\xE9" } },
    "cancelledDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "L'export a \xE9t\xE9 annul\xE9." } },
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Exporter " }, { "t": 4, "k": "name" }] } }
  },
  "exporterTypeChoices": {
    "formatLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Vers quel format souhaitez-vous r\xE9aliser l'export ?" } }
  },
  "exportTableForm": {
    "viewLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "S\xE9lectionnez la vue \xE0 exporter :" } },
    "typeError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aucun export disponible, veuillez s\xE9lectionner une autre vue ou la table compl\xE8te." } },
    "includeRowId": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Inclure l'ID de ligne" } },
    "includePrimaryField": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Inclure le champ primaire" } }
  },
  "exportTableLoadingBar": {
    "export": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Exporter" } },
    "download": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "T\xE9l\xE9charger" } }
  },
  "exportTableDropdown": {
    "exportEntireTable": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Exporter la table enti\xE8re" } }
  },
  "tableCSVExporter": {
    "columnSeparatorLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "S\xE9parateur de colonne" } },
    "recordSeparator": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "S\xE9p. d'enregistrement" } },
    "unitSeparator": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "S\xE9p. d'unit\xE9" } },
    "encodingLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Encodage" } },
    "firstRowIsHeaderLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "La premi\xE8re ligne contient l'ent\xEAte" } },
    "includeHeader": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Inclure les noms de champs comme en-t\xEAte" } }
  },
  "apiDocsDatabase": {
    "pageTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Documentation de l'API de la base " }, { "t": 4, "k": "name" }] } },
    "back": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Retour \xE0 l'accueil" } },
    "openDatabase": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Voir la base de donn\xE9es" } }
  },
  "apiDocsComponent": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "API REST" } },
    "intro": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Apr\xE8s avoir cr\xE9\xE9 votre base de donn\xE9es et une cl\xE9 d'API dans votre " }, { "t": 4, "k": "settingsLink" }, { "t": 3, "v": " Baserow fourni ses propres API REST pour cr\xE9er, lire, mettre \xE0 jour et supprimer des lignes." }] } },
    "settings": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "compte" } },
    "selectApplicationTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Choisissez une base de donn\xE9e\xA0:" } },
    "signIn": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "S'identifier pour commencer" } },
    "back": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Retourner \xE0 l'accueil" } }
  },
  "viewAggregationType": {
    "checkedCount": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Coch\xE9es" } },
    "notCheckedCount": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Non coch\xE9es" } },
    "checkedPercentage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pourcentage de coch\xE9es" } },
    "notCheckedPercentage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pourcentage de non coch\xE9es" } },
    "min": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Min" } },
    "max": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Max" } },
    "earliestDate": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Premi\xE8re date" } },
    "earliestDateShort": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "D\xE9but" } },
    "latestDate": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Derni\xE8re date" } },
    "latestDateShort": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Fin" } },
    "uniqueCount": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Unique" } },
    "sum": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Somme" } },
    "average": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Moyenne" } },
    "median": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "M\xE9diane" } },
    "stdDev": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\xC9cart type" } },
    "stdDevShort": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\xC9cart type" } },
    "variance": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Variance" } },
    "notEmptyPercentage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pourcentage de renseign\xE9es" } },
    "notEmptyCount": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Renseign\xE9es" } },
    "emptyCount": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "(Vides)" } },
    "emptyPercentage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pourcentage de vides" } },
    "count": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Compter" } },
    "distribution": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Distribution" } },
    "othersCount": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Autres" } }
  },
  "databaseForm": {
    "importLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Souhaitez-vous importer des donn\xE9es existantes\xA0?" } },
    "airtableLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Importer \xE0 partir d'Airtable" } },
    "emptyLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Base de donn\xE9e vierge" } }
  },
  "importFromAirtable": {
    "airtableShareLinkTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Partager un lien vers votre Base" } },
    "airtableShareLinkDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pour importer une base Airtable, vous devez au pr\xE9alable cr\xE9er un lien de partage de la base que vous souhaitez copier. Dans Airtable cliquez sur le bouton \xAB\xA0share\xA0\xBB dans le coin en haut \xE0 droite apr\xE8s avoir ouvert votre base. Ensuite, vous devez choisir l'option \xAB\xA0Share via link\xA0\xBB. Dans la fen\xEAtre modale qui s'ouvre puis cliquez sur le bouton \xAB\xA0Share publicly\xA0\xBB et enfin cliquez sur \xAB\xA0Enable shared base link\xA0\xBB. Copiez alors le lien publique g\xE9n\xE9r\xE9 et collez-le dans le champ suivant." } },
    "airtableShareLinkBeta": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": `Cette fonctionnalit\xE9 importera la plupart des donn\xE9es, mais il existe des incompatibilit\xE9s. Un tableau nomm\xE9 "Rapport d'importation Airtable" sera donc cr\xE9\xE9 et contiendra la liste des \xE9l\xE9ments qui n'ont pas \xE9t\xE9 import\xE9s ou qui ont \xE9t\xE9 partiellement import\xE9s.` } },
    "airtableShareLinkPaste": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Collez le lien ici" } },
    "importButtonLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Importer \xE0 partir de Airtable" } },
    "openButtonLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ouvrir la base import\xE9e" } },
    "importError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Une erreur est survenue" } },
    "statePending": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "En attente" } },
    "stateFailed": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\xC9chec" } },
    "stateFinished": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Termin\xE9" } },
    "stateDownloadingBase": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "T\xE9l\xE9chargement du sch\xE9ma de la base" } },
    "stateConverting": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Conversion vers Baserow" } },
    "stateDownloadingFiles": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "T\xE9l\xE9chargement des fichiers" } },
    "stateImporting": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Import en cours" } },
    "stateImportingTable": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Import de la table " }, { "t": 4, "k": "table" }] } },
    "errorJobAlreadyRunningTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "D\xE9j\xE0 en cours" } },
    "errorJobAlreadyRunningDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Une autre t\xE2che est d\xE9j\xE0 en cours. Vous devez attendre que celle-ci finisse avant d'en d\xE9marrer une autre." } },
    "linkError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Le lien devrait ressembler \xE0 : https://airtable.com/shrxxxxxxxxxxxxxx" } },
    "skipFilesHelper": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Une base Airtable contenant de nombreux fichiers peut ralentir l'importation. L'activation de cette option permet d'ignorer l'importation des fichiers." } },
    "skipFiles": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ne pas importer les fichiers" } },
    "sessionDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Si l'importation r\xE9pond par \xAB\xA0The Airtable base requires authentication.\xA0\xBB, il se peut que les param\xE8tres organisationnels d'Airtable emp\xEAchent l'acc\xE8s \xE0 la base Airtable sans authentification pr\xE9alable. Pour ce faire, la session et la signature doivent \xEAtre extraites manuellement. Visitez l'URL de la base partag\xE9e publiquement dans votre navigateur et connectez-vous, si n\xE9cessaire. Cliquez sur le menu de l'application en cliquant dans le coin sup\xE9rieur droit -> \xAB\xA0Plus d'outils\xA0\xBB -> \xAB\xA0Outils du d\xE9veloppeur\xA0\xBB. Ouvrez l'onglet \xAB\xA0Application\xA0\xBB (dans Firefox \xAB\xA0Stockage\xA0\xBB) et cliquez sur \xAB\xA0https://airtable.com\xA0\xBB. Trouvez maintenant les valeurs des cookies \xAB\xA0__Host-airtable-session\xA0\xBB et \xAB\xA0__Host-airtable-session.sig\xA0\xBB, et collez-les dans les entr\xE9es ci-dessous." } },
    "useSession": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Authentification de la session" } },
    "useSessionHelper": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Utilisez cette option si la base partag\xE9e publiquement n\xE9cessite une authentification." } },
    "sessionLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cookie de session (__Host-airtable-session)" } },
    "sessionSignatureLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cookie de signature de session (__Host-airtable-session.sig)" } }
  },
  "chooseSingleSelectField": {
    "addSelectField": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ajouter une liste d\xE9roulante" } },
    "warningWhenNothingToChooseOrCreate": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Il n\u2019y a pas de champ de s\xE9lection unique disponible et vous n\u2019avez pas les permissions n\xE9cessaires pour en cr\xE9er un." } }
  },
  "viewDecorator": {
    "decorator": { "t": 0, "b": { "t": 1, "c": [{ "t": 2, "i": [{ "t": 3 }], "s": "Couleur" }, { "t": 2, "i": [{ "t": 3 }], "s": "1 Couleur" }, { "t": 2, "i": [{ "t": 4, "k": "count" }, { "t": 3, "v": " Couleurs" }] }] } },
    "hiddenFieldWarning": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Les d\xE9corations sont supprim\xE9es pour les \xE9diteurs et les utilisateurs de niveau inf\xE9rieur, car elles peuvent faire r\xE9f\xE9rence \xE0 des champs masqu\xE9s." } }
  },
  "shareViewEnablePasswordModal": {
    "newPasswordTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Entrez un mot de passe" } },
    "newPasswordDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Le lien public ne sera accessible qu'apr\xE8s avoir saisi le mot de passe. Ce mot de passe sera enregistr\xE9 de mani\xE8re crypt\xE9e." } },
    "newPasswordSave": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Enregistrer le mot de passe" } },
    "changePasswordTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Modifier le mot de passe" } },
    "changePasswordDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "En changeant le mot de passe, le pr\xE9c\xE9dent ne fonctionnera plus. Ce mot de passe sera enregistr\xE9 de mani\xE8re crypt\xE9e." } },
    "changePasswordSave": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Modifier le mot de passe" } }
  },
  "viewDecoratorContext": {
    "addDecorator": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ajouter un d\xE9corateur" } }
  },
  "shareViewDisablePasswordModal": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "D\xE9sactiver la protection par mot de passe" } },
    "disable": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "D\xE9sactiver" } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\xCAtes-vous s\xFBr de vouloir d\xE9sactiver la protection par mot de passe de ce lien public ? En le d\xE9sactivant, le mot de passe sera supprim\xE9 et il ne sera plus possible de le r\xE9cup\xE9rer." } }
  },
  "publicViewAuthLogin": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cette page est prot\xE9g\xE9e par un mot de passe" } },
    "enter": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Valider" } },
    "error": {
      "incorrectPasswordText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Le mot de passe fourni est invalide." } },
      "incorrectPasswordTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mot de passe invalide" } }
    },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Saisissez un mot de passe valide pour acc\xE9der \xE0 la page." } }
  },
  "apiDocsTableDeleteRows": {
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Supprime les lignes " }, { "t": 4, "k": "name" }, { "t": 3, "v": " existantes." }] } },
    "items": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Un tableau d'identifiants de lignes qui doivent \xEAtre supprim\xE9es." } }
  },
  "apiDocsTableUpdateRows": {
    "id": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "L'identifiant de la ligne." } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Mettre \xE0 jour les lignes " }, { "t": 4, "k": "name" }, { "t": 3, "v": " existantes." }] } }
  },
  "apiDocsTableCreateRows": {
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Cr\xE9er de nouvelles lignes " }, { "t": 4, "k": "name" }, { "t": 3, "v": "." }] } },
    "before": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Si il est fourni, les lignes nouvellement cr\xE9\xE9es seront positionn\xE9es avant la ligne avec l\u2019identifiant sp\xE9cifi\xE9." } }
  },
  "importer": {
    "loading": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Chargement du fichier" } },
    "decoding": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "D\xE9codage" } },
    "inProgress": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "En cours\u2026" } },
    "preparing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pr\xE9paration" } },
    "parsing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Analyse des donn\xE9es" } },
    "fieldDefaultName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Champ " }, { "t": 4, "k": "count" }] } }
  },
  "databaseDashboardSidebarLinks": {
    "apiDocumentation": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Documentation de l'API" } }
  },
  "formViewMeta": {
    "includeRowId": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Utilisez " }, { "t": 4, "k": "row_id" }, { "t": 3, "v": " pour inclure l'identifiant de la ligne a cr\xE9er dans l'URL." }] } }
  },
  "formViewField": {
    "required": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "obligatoire" } },
    "showWhenMatchingConditions": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "afficher lorsque les conditions sont remplies" } },
    "addCondition": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ajouter une condition" } },
    "descriptionPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Description" } },
    "addConditionGroup": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ajouter un groupe de conditions" } },
    "showFieldAs": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Afficher le champ comme" } },
    "includeAllSelectOptionsHelper": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Choisissez les options qui doivent \xEAtre incluses dans le formulaire \xE0 l'aide de cette liste d\xE9roulante" } },
    "noSelectOptions": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Il n'y a pas d'options disponibles." } },
    "includeAllSelectOptions": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "inclure toutes les options s\xE9lectionn\xE9es" } },
    "noCollaboratorsAvailable": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Il n'y a pas de collaborateurs disponibles." } },
    "cannotSumitValues": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ce champ est en lecture seule et ne sera pas affich\xE9 dans le formulaire." } }
  },
  "duplicateFieldContext": {
    "duplicate": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dupliquer le champ" } },
    "cloneData": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Copier les donn\xE9es" } },
    "soon": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Bient\xF4t disponible" } },
    "readOnlyField": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Les valeurs des cellules seront remplies automatiquement." } }
  },
  "snapshotsModal": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "sauvegardes" } },
    "snapshotRestoredErrorMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "La sauvegarde n'a pas pu \xEAtre restaur\xE9e. Veuillez r\xE9essayer plus tard." } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Les sauvegardes sont une copie compl\xE8te de votre " }, { "t": 4, "k": "applicationTypeName" }, { "t": 3, "v": " au moment o\xF9 elles ont \xE9t\xE9 cr\xE9\xE9s. Une duplication des donn\xE9es sera cr\xE9\xE9e lors de la restauration. Les sauvegardes sont automatiquement supprim\xE9es apr\xE8s un an." }] } },
    "descriptionLimits": { "t": 0, "b": { "t": 1, "c": [{ "t": 2, "i": [{ "t": 3 }], "s": "Vous pouvez avoir un maximum de 0 sauvegarde par projet." }, { "t": 2, "i": [{ "t": 3 }], "s": "Vous pouvez avoir un maximum de 1 sauvegarde par projet." }, { "t": 2, "i": [{ "t": 3, "v": "Vous pouvez avoir un maximum de " }, { "t": 4, "k": "n" }, { "t": 3, "v": " sauvegardes par projet." }] }] } },
    "createLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cr\xE9er une nouvelle sauvegarde" } },
    "create": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cr\xE9er une sauvegarde" } },
    "snapshotDeletedErrorTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Une erreur est survenue" } },
    "snapshotDeletedErrorMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "La sauvegarde n'a pas pu \xEAtre supprim\xE9e. Veuillez r\xE9essayer plus tard." } },
    "limitReached": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "La limite du nombre maximum de sauvegardes a \xE9t\xE9 atteinte." } },
    "snapshot": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sauvegarde" } },
    "importingState": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "En cours de cr\xE9ation" } },
    "snapshotRestoredErrorTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Une erreur s'est produite" } },
    "reset": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cr\xE9er une autre" } },
    "cancel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Annuler" } },
    "noSnapshots": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Il n'y a pas encore de sauvegarde pour cette application." } },
    "nameAlreadyExists": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Une sauvegarde portant ce nom existe d\xE9j\xE0." } }
  },
  "deleteSnapshotModal": {
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "\xCAtes-vous s\xFBr\xB7e de vouloir supprimer d\xE9finitivement la sauvegarde " }, { "t": 4, "k": "nom" }, { "t": 3, "v": " ?" }] } },
    "confirm": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Supprimer" } },
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Supprimer la sauvegarde" } }
  },
  "snapshotListItem": {
    "restore": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "restaurer" } },
    "delete": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "supprimer" } },
    "created": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "cr\xE9\xE9e" } }
  },
  "rowEditFieldMultipleCollaborators": {
    "addCollaborator": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Choisir un collaborateur" } }
  },
  "gridViewFieldFile": {
    "dropHere": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "D\xE9poser ici" } },
    "dropFileHere": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "D\xE9posez les fichiers ici" } }
  },
  "formViewHeader": {
    "preview": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aper\xE7u" } },
    "mode": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mode" } },
    "fields": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Champs" } }
  },
  "formViewModePreviewForm": {
    "addCoverImage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ajouter une image d'ent\xEAte" } },
    "noFields": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ce formulaire ne comporte aucun champ. Cliquez sur un champ dans la barre lat\xE9rale gauche pour en ajouter un." } },
    "addLogo": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ajouter un logo" } },
    "titlePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Titre" } },
    "descriptionPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Description" } },
    "noFieldsContent": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cliquez sur un champ dans la barre lat\xE9rale gauche pour en ajouter un." } },
    "noFieldsTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ce formulaire n'a pas de champs" } }
  },
  "table": {
    "chooseView": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Choisir la vue" } },
    "adjacentRow": {
      "notification": {
        "notFound": {
          "next": {
            "message": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Il n'y a pas de ligne suivante" } },
            "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Plus de rang\xE9es" } }
          },
          "previous": {
            "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Plus de lignes" } },
            "message": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Il n\u2019y a pas de ligne pr\xE9c\xE9dente" } }
          }
        },
        "error": {
          "message": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Une erreur s\u2019est produite lors de la r\xE9cup\xE9ration de la ligne adjacente" } },
          "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Une erreur s'est produite" } }
        }
      },
      "toast": {
        "notFound": {
          "previous": {
            "message": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Il n\u2019y a pas de ligne pr\xE9c\xE9dente" } },
            "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Plus de ligne" } }
          },
          "next": {
            "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Plus de ligne" } },
            "message": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Il n\u2019y a pas de ligne suivante" } }
          }
        },
        "error": {
          "message": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Une erreur s\u2019est produite lors de la r\xE9cup\xE9ration de la ligne adjacente" } },
          "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Une erreur est survenue" } }
        }
      }
    }
  },
  "fieldmultipleCollaboratorsDropdown": {
    "notFound": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Collaborateur non trouv\xE9" } }
  },
  "formViewModeType": {
    "formDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tous les champs sont visibles et empil\xE9s verticalement." } },
    "form": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Formulaire" } }
  },
  "duplicateTableJobType": {
    "duplicating": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Duplication" } },
    "duplicatedTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Table dupliqu\xE9e" } },
    "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Duplication d'une table" } }
  },
  "apiDocsUploadFile": {
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Envoi un fichier sur Baserow en envoyant directement le contenu du fichier. Un section multipart `file` contenant le contenu du fichier est attendu dans la requ\xEAte. La r\xE9ponse peut ensuite \xEAtre utilis\xE9e pour [associer un fichier \xE0 une ligne](" }, { "t": 4, "k": "PUBLIC_BACKEND_URL" }, { "t": 3, "v": "/api/redoc/#tag/Database-table-rows/operation/update_database_table_row)." }] } },
    "file": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "La section multipart `file` contenant le contenu du fichier." } }
  },
  "apiDocsUploadFileViaURL": {
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Envoi un fichier sur Baserow en le t\xE9l\xE9chargeant depuis l'URL fournie. La r\xE9ponse peut ensuite \xEAtre utilis\xE9e pour [associer un fichier \xE0 une ligne](" }, { "t": 4, "k": "PUBLIC_BACKEND_URL" }, { "t": 3, "v": "/api/redoc/#tag/Database-table-rows/operation/update_database_table_row)." }] } },
    "url": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "L'URL que vous souhaitez que Baserow t\xE9l\xE9charge et enregistre en votre nom." } }
  },
  "fileField": {
    "errorEmptyFileNameTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nom du fichier invalide" } },
    "errorEmptyFileNameMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Vous ne pouvez pas d\xE9finir un nom de fichier vide." } }
  },
  "gridViewRowsAddContext": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cr\xE9er plusieurs lignes" } },
    "choice": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Ajouter les " }, { "t": 4, "k": "rowAmountChoice" }, { "t": 3, "v": " lignes" }] } }
  },
  "viewOwnershipType": {
    "collaborative": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Collaboratif" } },
    "personal": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Personnel" } },
    "collaborativeDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tout le monde peut voir toutes les donn\xE9es et changer les colonnes si elles ou ils en ont les permissions." } }
  },
  "fieldRollupSubForm": {
    "label": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Fonction de cumul" } },
    "selectTargetFieldLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "S\xE9lectionner un champ \xE0 cumuler" } }
  },
  "fieldSelectThroughFieldSubForm": {
    "noTable": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Vous avez besoin d\u2019au moins un champ de type \xAB\xA0lien vers une table\xA0\xBB pour cr\xE9er ce champ." } },
    "selectThroughFieldLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "S\xE9lectionner un champ \xAB\xA0lien vers une table\xA0\xBB" } }
  },
  "apiDocsFiltersBuilderModal": {
    "userFieldNames": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Noms de champs utilisateur" } },
    "json": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "JSON" } },
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "G\xE9n\xE9rateur de filtres" } },
    "queryParameter": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Param\xE8tre de requ\xEAte" } }
  },
  "viewGroupBy": {
    "groupBy": { "t": 0, "b": { "t": 1, "c": [{ "t": 2, "i": [{ "t": 3 }], "s": "Grouper" }, { "t": 2, "i": [{ "t": 3 }], "s": "Regroup\xE9 par 1 champ" }, { "t": 2, "i": [{ "t": 3, "v": "Regroup\xE9 par " }, { "t": 4, "k": "count" }, { "t": 3, "v": "\xA0champs" }] }] } }
  },
  "rowHistorySidebar": {
    "you": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Vous" } },
    "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Historique" } },
    "empty": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aucun changement pour l'instant. Vous pourrez suivre les modifications apport\xE9es \xE0 cette ligne ici." } },
    "updated": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "a mis \xE0 jour cette ligne" } },
    "submitted": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "a soumis cette ligne" } },
    "restored": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "a restaur\xE9 cette ligne" } },
    "createdUndo": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "a annul\xE9 la cr\xE9ation d'une ligne" } },
    "updatedUndo": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "a annul\xE9 la mise \xE0 jour de lignes" } },
    "deletedUndo": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "a annul\xE9 la suppression d'une ligne" } },
    "created": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "a cr\xE9\xE9 cette ligne" } },
    "deleted": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "a supprim\xE9 cette ligne" } }
  },
  "viewGroupByContext": {
    "groupBy": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Grouper par" } },
    "thenBy": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Puis par" } },
    "addGroupBy": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "choisissez un champ de regroupement" } },
    "noGroupByTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Vous n'avez cr\xE9\xE9 aucun groupe" } },
    "noGroupByText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Regroupez les lignes par un champ." } },
    "hiddenFieldWarning": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Un ou plusieurs regroupements font r\xE9f\xE9rence \xE0 des champs masqu\xE9s qui ne seront pas visibles pour les \xC9diteurs et les utilisateurs ayant des r\xF4les inf\xE9rieurs." } },
    "maxGroupBysReached": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Vous pouvez regrouper les donn\xE9es selon un maximum de " }, { "t": 4, "k": "count" }, { "t": 3, "v": " colonnes." }] } },
    "collapseAllGroups": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Replier tout" } },
    "expandAllGroups": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "D\xE9plier tout" } }
  },
  "collaboratorAddedToRowNotification": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "sender" }, { "t": 3, "v": " vous a assign\xE9 \xE0 " }, { "t": 4, "k": "fieldName" }, { "t": 3, "v": " dans la ligne " }, { "t": 4, "k": "rowId" }, { "t": 3, "v": " de la table " }, { "t": 4, "k": "tableName" }] } },
    "deletedUser": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Un utilisateur supprim\xE9" } },
    "unknownUser": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Un utilisateur inconnu" } }
  },
  "fieldCollaboratorSubForm": {
    "notifyUserWhenAdded": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Notifier l'utilisateur lorsqu'il est ajout\xE9" } }
  },
  "viewFieldConditionsForm": {
    "addCondition": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ajouter une condition" } },
    "addConditionGroup": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ajouter un groupe de conditions" } }
  },
  "formSubmittedNotification": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "formName" }, { "t": 3, "v": " a \xE9t\xE9 soumis dans la table " }, { "t": 4, "k": "tableName" }, { "t": 3, "v": "\u202F:" }] } },
    "moreValues": { "t": 0, "b": { "t": 1, "c": [{ "t": 2, "i": [{ "t": 3 }], "s": "0" }, { "t": 2, "i": [{ "t": 3 }], "s": "et 1 champ suppl\xE9mentaire." }, { "t": 2, "i": [{ "t": 3, "v": "et " }, { "t": 4, "k": "count" }, { "t": 3, "v": " champs suppl\xE9mentaires." }] }] } }
  },
  "fieldDurationSubForm": {
    "durationFormatLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Format de la dur\xE9e" } }
  },
  "fieldLongTextSubForm": {
    "enableRichTextFormatting": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Activer la mise en forme riche du texte" } }
  },
  "rowEditFieldPassword": {
    "setPassword": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "D\xE9finir le mot de passe" } }
  },
  "rowHistoryFieldPassword": {
    "passwordSet": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Le mot de passe a \xE9t\xE9 d\xE9fini" } },
    "passwordDeleted": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Le mot de passe a \xE9t\xE9 supprim\xE9" } },
    "passwordUpdated": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Le mot de passe a \xE9t\xE9 mis \xE0 jour" } }
  },
  "fieldPasswordSubForm": {
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Le champ du mot de passe peut \xE9galement \xEAtre utilis\xE9 pour l'authentification de l'utilisateur dans une application." } },
    "allowEndpointAuthentication": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Autoriser l'authentification des endpoints de l'API" } },
    "allowEndpointAuthenticationHelp": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cela expose un endpoint o\xF9 l'ID de la ligne et le mot de passe peuvent \xEAtre v\xE9rifi\xE9s s'ils sont corrects. Cela permet d'utiliser Baserow comme backend d'authentification." } }
  },
  "dataProviderTypes": {
    "fieldsName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Champs" } }
  },
  "userMentionInRichTextFieldNotification": {
    "deletedUser": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Un utilisateur a \xE9t\xE9 supprim\xE9" } },
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "sender" }, { "t": 3, "v": " vous a mentionn\xE9 dans le champ " }, { "t": 4, "k": "fieldName" }, { "t": 3, "v": " de la ligne " }, { "t": 4, "k": "rowId" }, { "t": 3, "v": " de la table " }, { "t": 4, "k": "tableName" }] } }
  },
  "databaseScratchTrackStep": {
    "teamsRow3": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Marketing" } },
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Qu'aimeriez-vous suivre\u202F?" } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Choisissez parmi les cas d'utilisation les plus courants ou cr\xE9ez le v\xF4tre." } },
    "addYourOwn": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ajouter votre propre cas" } },
    "projects": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Projets" } },
    "rowName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nom de la ligne" } },
    "thisIncludes": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cela comprend\u202F:" } },
    "productsRow1": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Refonte de site web" } },
    "productsRow2": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Recherche de clients" } },
    "productsRow3": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Campagne publicitaire payante" } },
    "teamsRow1": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ventes" } },
    "teamsRow2": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "RH" } },
    "tasksRow1": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Refonte du logo" } },
    "campaignsRow2": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "R\xE9compenses de fid\xE9lit\xE9" } },
    "tasksRow2": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Envoyer un courriel" } },
    "tasksRow3": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "R\xE9diger un article de blog" } },
    "campaigns": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Campagnes" } },
    "campaignsRow1": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Soldes d'\xE9t\xE9" } },
    "campaignsRow3": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Relance d'une marque" } },
    "tableName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nom de la table" } },
    "teams": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\xC9quipes" } },
    "tasks": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "T\xE2ches" } }
  },
  "databaseImportStep": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Importez vos donn\xE9es" } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Transf\xE9rez vos donn\xE9es vers Baserow en quelques clics." } },
    "tableNameLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nom de la table" } },
    "tableNamePrefill": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Table de " }, { "t": 4, "k": "name" }] } }
  },
  "databaseStep": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cr\xE9ez votre premi\xE8re base de donn\xE9es" } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "S\xE9lectionnez o\xF9 vous souhaitez commencer\xA0:" } },
    "scratch": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\xC0 partir de rien" } },
    "databaseNameLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nom de la base de donn\xE9es" } },
    "import": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\xC0 partir d'un fichier" } },
    "airtable": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\xC0 partir d'Airtable" } },
    "template": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\xC0 partir d'un mod\xE8le" } },
    "databaseNamePrefill": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Base de donn\xE9es de " }, { "t": 4, "k": "name" }] } },
    "workspaceName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Projet de " }, { "t": 4, "k": "name" }] } }
  },
  "ViewFilterTypeDateUpgradeToMultiStep": {
    "migrateButtonText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Migrer vers un filtre de date riche" } },
    "migrateButtonTooltip": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nouveau filtre disponible. Cliquez pour mettre \xE0 jour. Le fonctionnement est similaire." } }
  },
  "formViewMetaControls": {
    "theMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Le message" } },
    "theURL": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "L'URL" } },
    "whenSubmittedLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Lorsque le formulaire est soumis" } },
    "showMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Afficher un message" } },
    "urlRedirect": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Rediriger vers l'URL" } }
  },
  "databaseDashboardResourceLinks": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Documentation de l'API" } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "En savoir plus sur notre code" } }
  },
  "changePrimaryFieldModal": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Changer le champ primaire" } },
    "change": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Changer" } },
    "primaryFieldLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Champ primaire" } },
    "existingPrimary": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": '"' }, { "t": 4, "k": "name" }, { "t": 3, "v": '" est actuellement le champ primaire.' }] } }
  },
  "databaseScratchTrackFieldsStep": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Choisissez des champs pour chaque ligne" } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Choisissez jusqu'\xE0 " }, { "t": 4, "k": "selectedFieldsLimitCount" }, { "t": 3, "v": " champs. Vous pourrez en ajouter ult\xE9rieurement." }] } },
    "fieldNumber": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nombre" } },
    "fieldEmail": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Courriel" } },
    "fieldRating": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Evaluation" } },
    "fieldCategory": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cat\xE9gorie" } },
    "fieldKickoffDate": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Date du kickoff" } },
    "fieldNotes": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Notes" } },
    "fieldRole": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "R\xF4le" } },
    "projectsCategoryDevelopment": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "D\xE9veloppement" } },
    "fieldDueDate": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Date d'\xE9ch\xE9ance" } },
    "fieldBudget": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Budget" } },
    "fieldCompleted": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Compl\xE9t\xE9" } },
    "fieldPhone": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "T\xE9l\xE9phone" } },
    "fieldActive": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Actif" } },
    "fieldEstimatedDays": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nombre de jours estim\xE9s" } },
    "teamsRoleDeveloper": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "D\xE9veloppeur" } },
    "customFieldsDescriptionRow2": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Vitae justo eget magna fermentum iaculis eu non diam." } },
    "fieldStartDate": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Date de d\xE9but" } },
    "fieldEndDate": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Date de fin" } },
    "projectsCategoryDesign": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Design" } },
    "projectsCategoryMarketing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Marketing" } },
    "projectsNotesRow1": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Acme recherche une refonte compl\xE8te de son site web selon les lignes directrices suivantes." } },
    "projectsNotesRow2": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Rechercher si les utilisateurs actuels de Soylent sont int\xE9ress\xE9s par un nouveau portail d'utilisateurs." } },
    "projectsNotesRow3": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Je me demande si cela vaut la peine de le faire apr\xE8s le boycott des publicit\xE9s sur Facebook. Des \xE9tudes montrent que les campagnes publicitaires payantes sont de moins en moins efficaces." } },
    "teamsRoleDesigner": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Designer" } },
    "tasksDetailsRow2": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "La structure est un peu \xE9trange, il se peut donc que nous devions adapter le plan du site ici \xE9galement." } },
    "teamsRoleMarketer": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Marketer" } },
    "tasksDetailsRow1": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Le logo doit \xEAtre am\xE9lior\xE9 pour rendre le CTA plus clair." } },
    "tasksDetailsRow3": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Le nouveau pied de page doit contenir nos coordonn\xE9es ainsi qu'un petit (mais clair) CTA." } },
    "campaignsDetailsRow1": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Faites le plein d'\xE9conomies avec nos soldes d'\xE9t\xE9, qui proposent des r\xE9ductions imbattables sur tous vos produits pr\xE9f\xE9r\xE9s\u202F!" } },
    "campaignsDetailsRow2": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Stimulez la fid\xE9lisation et l'engagement de vos clients gr\xE2ce \xE0 notre programme de fid\xE9lisation, con\xE7u pour r\xE9compenser vos clients les plus fid\xE8les." } },
    "campaignsDetailsRow3": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Revitalisez votre entreprise et captivez votre public gr\xE2ce \xE0 une relance dynamique de votre marque qui s'aligne parfaitement sur les tendances actuelles du march\xE9 et les d\xE9sirs des clients." } },
    "customFieldsDescriptionRow1": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Turpis massa tincidunt dui ut ornare lectus sit amet est." } },
    "customFieldsDescriptionRow3": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Convallis tellus id interdum velit laoreet id donec ultrices tincidunt." } },
    "fieldName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nom" } },
    "fieldType": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Type de champ" } },
    "fieldDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Description" } },
    "fieldDetails": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "D\xE9tails" } },
    "fieldDate": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Date" } },
    "fieldBoolean": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Termin\xE9" } },
    "fieldDuration": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dur\xE9e" } },
    "fieldUrl": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "URL" } }
  },
  "createTableModal": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cr\xE9er une nouvelle table" } },
    "defaultName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Table" } },
    "importLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Souhaitez vous importer des donn\xE9es existantes\u202F?" } },
    "newTable": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "D\xE9marrer avec une nouvelle table" } }
  },
  "createTable": {
    "showTable": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "afficher la table" } },
    "uploading": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Envoi\u2026" } },
    "preparing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pr\xE9paration des donn\xE9es..." } },
    "stateRowCreation": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Import en cours..." } },
    "statePreValidation": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Validation des donn\xE9es..." } },
    "stateCreateTable": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cr\xE9ation d'une table..." } },
    "addButton": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ajouter une table" } },
    "importError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Un probl\xE8me est survenu lors de l'import du fichier" } },
    "importingTable": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Importation de la table \xAB " }, { "t": 4, "k": "name" }, { "t": 3, "v": " \xBB..." }] } }
  },
  "importErrorReport": {
    "reportTitleFailure": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Lignes en erreur" } },
    "reportTitleSuccess": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Importation r\xE9ussie mais..." } },
    "reportMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Les index de ligne suivants n'ont pas pu \xEAtre import\xE9s\xA0:" } }
  },
  "dataSyncType": {
    "icalCalendar": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Synchronisation du flux iCal" } },
    "postgresql": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Synchroniser une table PostgreSQL" } },
    "syncError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Erreur de synchronisation" } }
  },
  "createDataSync": {
    "next": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Suivant" } },
    "fields": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "S\xE9lectionnez les champs que vous souhaitez synchroniser" } },
    "create": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cr\xE9er et synchroniser une table" } },
    "error": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Un probl\xE8me s'est produit lors de la synchronisation" } },
    "autoAddLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ajout automatique de nouvelles propri\xE9t\xE9s" } },
    "autoAddHelper": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ajoute et synchronise automatiquement les propri\xE9t\xE9s nouvellement disponibles de la source de donn\xE9es dans la table Baserow. Notez que pour que cela fonctionne, toutes les propri\xE9t\xE9s doivent \xEAtre synchronis\xE9es." } },
    "twoWaySyncLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Synchronisation bidirectionnelle" } },
    "deleteUnmatchedRowsLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Supprimer les lignes lorsqu'elles sont supprim\xE9es ou masqu\xE9es dans la source" } },
    "deleteUnmatchedRowsHelper": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Lorsque cette option est activ\xE9e, les lignes supprim\xE9es ou qui ne sont plus visibles dans la source sont \xE9galement supprim\xE9es de ce tableau \xE0 chaque synchronisation. Lorsqu'elle est d\xE9sactiv\xE9e, ces lignes sont conserv\xE9es et r\xE9utilis\xE9es si la ligne source r\xE9appara\xEEt." } },
    "syncing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Synchronisation des donn\xE9es..." } }
  },
  "syncTableModal": {
    "sync": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Synchroniser la table" } },
    "hide": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cacher" } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cette table est li\xE9e \xE0 une synchronisation de donn\xE9es. Lorsque vous cliquez sur le bouton de synchronisation, les donn\xE9es sont synchronis\xE9es avec la source. Au cours de ce processus, un verrou est plac\xE9 sur les lignes mises \xE0 jour, ce qui peut ralentir temporairement les demandes d'API ou les modifications de la table." } },
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Synchroniser " }, { "t": 4, "k": "name" }] } }
  },
  "gridViewRowHeight": {
    "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Hauteur" } },
    "small": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Petite" } },
    "medium": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Moyenne" } },
    "large": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Grande" } }
  },
  "createViewLink": {
    "inCompatibleWithDataSync": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ce type de vue n'est pas compatible avec une table de synchronisation des donn\xE9es." } }
  },
  "iCalCalendarDataSync": {
    "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "URL iCal" } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Le calendrier iCal se synchronise automatiquement avec les entr\xE9es du fichier de calendrier de l'URL. Elle ne prend en charge que le type de fichier ICS (Internet Calendar and Scheduling)." } }
  },
  "postgreSQLDataSync": {
    "host": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "H\xF4te" } },
    "schema": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sch\xE9ma" } },
    "table": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Table" } },
    "sslMode": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mode SSL" } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Synchronise une table PostgreSQL avec une table Baserow en fonction des informations fournies ci-dessous. Notez que lorsque la synchronisation d\xE9marre, elle s\xE9lectionne toutes les lignes de la table fournie. M\xEAme si Baserow n'acc\xE8de \xE0 la table qu'en lecture, nous recommandons fortement de limiter l'utilisateur configu\xE9 \xE0 une lecture seule." } },
    "database": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Base de donn\xE9es" } },
    "port": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Port" } },
    "username": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Identifiant" } },
    "password": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mot de passe" } }
  },
  "configureDataSyncSettings": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Modifier la synchronisation des donn\xE9es" } },
    "syncTable": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Synchroniser lors de l'enregistrement" } }
  },
  "configureDataSyncModal": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Synchronisation des donn\xE9es" } },
    "syncedFields": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Champs synchronis\xE9s" } },
    "syncSettings": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Param\xE8tres de synchronisation" } }
  },
  "configureDataSyncVisibleFields": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Modifier les champs synchronis\xE9s" } },
    "fields": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Champs synchronis\xE9s" } },
    "syncTable": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Synchroniser lors de l'enregistrement" } }
  },
  "viewFieldConditionItem": {
    "filterMisconfigured": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Le champ auquel ce filtre est associ\xE9 a \xE9t\xE9 supprim\xE9." } }
  },
  "webhookPayloadTooLargeNotification": {
    "body": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "La charge utile pour le webhook " }, { "t": 4, "k": "name" }, { "t": 3, "v": " avec l'ID d'\xE9v\xE9nement " }, { "t": 4, "k": "event_id" }, { "t": 3, "v": " \xE9tait trop importante. Le contenu a \xE9t\xE9 divis\xE9 en plusieurs lots, mais les donn\xE9es d\xE9passant la limite de " }, { "t": 4, "k": "batch_limit" }, { "t": 3, "v": " ont \xE9t\xE9 rejet\xE9es." }] } }
  },
  "webhookDeactivatedNotification": {
    "body": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Le webhook " }, { "t": 4, "k": "name" }, { "t": 3, "v": " a \xE9t\xE9 d\xE9sactiv\xE9 car il a \xE9chou\xE9 trop de fois cons\xE9cutivement." }] } }
  },
  "tablesGuidedTourStep": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Configurer des tables" } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Les tables permettent de stocker vos informations de mani\xE8re ordonn\xE9e. Cr\xE9ez une nouvelle table dans votre base de donn\xE9es pour commencer \xE0 structurer vos donn\xE9es." } }
  },
  "addFieldGuidedTourStep": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Personnaliser vos donn\xE9es" } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": 'Cliquez sur "+" pour ajouter de nouveaux champs (colonnes). Choisissez parmi diff\xE9rents types de champs pour saisir pr\xE9cis\xE9ment ce qui est le plus important pour votre projet.' } }
  },
  "createViewGuidedTourStep": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Personnalisez vos vues" } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cr\xE9ez des vues personnalis\xE9es comme la vue tabulaire, calendrier, kanban ou galerie pour visualiser vos donn\xE9es exactement comment vous le souhaitez." } }
  },
  "createFormViewGuidedTourStep": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cr\xE9er un formulaire" } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cr\xE9ez rapidement des formulaires \xE0 partir de vos tables pour y collecter directement les r\xE9ponses, rationalisant la collecte de donn\xE9es." } }
  },
  "viewOptionsGuidedTourStep": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Voir les options" } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cliquez sur les trois points situ\xE9s \xE0 c\xF4t\xE9 de la vue pour exporter, importer, dupliquer et configurer un webhook." } }
  },
  "filterSortGroupGuidedTourStep": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Trouvez et organisez vos donn\xE9es" } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Localisez rapidement les informations en filtrant et en triant vos lignes. Regroupez instantan\xE9ment les donn\xE9es par champ pour visualiser clairement les sch\xE9mas et simplifier votre travail." } }
  },
  "fieldBooleanSubForm": {
    "defaultValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Par d\xE9faut" } }
  },
  "apiDocsListTables": {
    "listTables": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Lister toutes les tables" } },
    "listTablesDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ce point d'acc\xE8s ne fonctionne qu'en combinaison avec l'authentification par jeton. Il r\xE9pertorie toutes les tables pour lesquelles le jeton a un acc\xE8s de cr\xE9ation, de lecture, de mise \xE0 jour ou de suppression." } }
  },
  "fieldMultipleSelectSubForm": {
    "defaultOptionsLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Options par d\xE9faut" } },
    "optionsLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Options" } }
  },
  "apiDocsPasswordFieldAuthentication": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "name" }, { "t": 3, "v": " authentification" }] } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "V\xE9rifie si le mot de passe et la ligne fournis correspondent \xE0 ce qui est stock\xE9 dans la cellule." } },
    "fieldId": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "L'identifiant du champ dans lequel le mot de passe doit \xEAtre v\xE9rifi\xE9." } },
    "rowId": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "L'ID de ligne o\xF9 v\xE9rifier le mot de passe." } },
    "password": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Le mot de passe qui doit \xEAtre v\xE9rifi\xE9 s'il est correct." } }
  },
  "fieldRules": {
    "errorTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Erreur lors du traitement des r\xE8gles du champ" } },
    "ruleDoesNotExist": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "La r\xE8gle n'existe pas" } },
    "ruleTypeDoesNotExist": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Le type de r\xE8gle n'existe pas" } },
    "ruleAlreadyExists": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "La r\xE8gle existe d\xE9j\xE0" } }
  },
  "defaultValuesModal": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Valeurs par d\xE9faut pour " }, { "t": 4, "k": "name" }] } },
    "setDefaultValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "D\xE9finir la valeur par d\xE9faut" } },
    "removeDefaultValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Supprimer la valeur par d\xE9faut" } },
    "staticValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Valeur unique" } }
  },
  "fieldFormViewEditRowSubForm": {
    "selectFormViewLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Vue formulaire" } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Chaque ligne disposera d'un lien unique qui ouvrira ce formulaire pr\xE9rempli avec les donn\xE9es de cette ligne. Notez que toute personne disposant d'un acc\xE8s en lecture \xE0 la table et au champ pourra modifier la ligne via ce formulaire, y compris les spectateurs et les visiteurs d'une vue partag\xE9e publiquement." } },
    "notPublicWarning": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ce formulaire n'est pas accessible au public. Le lien de modification ne fonctionnera pas tant que le formulaire n'aura pas \xE9t\xE9 rendu public." } },
    "notPublic": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "(non public)" } },
    "formDoesNotExist": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Le formulaire s\xE9lectionn\xE9 n'existe plus." } }
  },
  "editRowLink": {
    "editRow": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Modifier la ligne" } }
  },
  "rowEditFieldFormViewEditRow": {
    "copyLink": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Copier le lien" } },
    "noFormView": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aucun formulaire n'est configur\xE9" } }
  },
  "tableExcelImporter": {
    "chooseFileLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "S\xE9lectionnez un fichier Excel" } },
    "chooseFileDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Vous pouvez importer une feuille de calcul existante en t\xE9l\xE9versant un fichier au format .xlsx, .xls ou .ods. Si le fichier contient plusieurs feuilles, vous pouvez choisir celle que vous souhaitez importer." } },
    "chooseFile": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "S\xE9lectionnez un fichier Excel" } },
    "sheet": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Feuille" } },
    "firstRowHeader": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "La premi\xE8re ligne est l'en-t\xEAte" } },
    "limitFileSize": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "La taille maximum de fichier est de " }, { "t": 4, "k": "limit" }, { "t": 3, "v": "Mo." }] } },
    "limitError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Il n'est pas possible d'importer plus que " }, { "t": 4, "k": "limit" }, { "t": 3, "v": " lignes." }] } },
    "processingError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Une erreur s'est produite lors du traitement du fichier Excel\xA0: " }, { "t": 4, "k": "error" }] } },
    "emptyError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ce fichier Excel ne contient aucune feuille." } },
    "emptySheetError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "La feuille s\xE9lectionn\xE9e est vide." } }
  },
  "viewSearch": {
    "clearSearch": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Effacer la recherche" } }
  },
  "gridViewGroupByBanner": {
    "emptyValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "(Vide)" } },
    "expandGroup": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "D\xE9plier le groupe" } },
    "collapseGroup": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Replier le groupe" } }
  },
  "gridViewFreezeHandle": {
    "freeze": { "t": 0, "b": { "t": 1, "c": [{ "t": 2, "i": [{ "t": 3 }], "s": "Figer 0 colonne" }, { "t": 2, "i": [{ "t": 3 }], "s": "Figer 1 colonne" }, { "t": 2, "i": [{ "t": 3, "v": "Figer " }, { "t": 4, "k": "nombre" }, { "t": 3, "v": " colonnes" }] }] } },
    "hoverHint": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Faites glisser pour verrouiller des colonnes" } }
  }
};

export { resource as default };
//# sourceMappingURL=fr-CMQLkSh7.mjs.map
