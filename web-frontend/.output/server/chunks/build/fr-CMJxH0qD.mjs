!(function() {
  try {
    var e = false ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
    var n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "2183652b-07d4-4c68-a43e-a025e21b273e", e._sentryDebugIdIdentifier = "sentry-dbid-2183652b-07d4-4c68-a43e-a025e21b273e");
  } catch (e2) {
  }
})();
const resource = {
  "paginator": {
    "page": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Page" } },
    "of": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "sur " }, { "t": 4, "k": "pages" }] } }
  },
  "copied": {
    "label": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Copi\xE9 !" } }
  },
  "sidebarApplication": {
    "renameApplication": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Renommer " }, { "t": 4, "k": "type" }] } },
    "viewTrash": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Voir la corbeille" } },
    "deleteApplication": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Supprimer " }, { "t": 4, "k": "type" }] } },
    "duplicateApplication": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Dupliquer " }, { "t": 4, "k": "type" }] } },
    "snapshots": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sauvegardes" } },
    "rename": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Renommer" } },
    "duplicate": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dupliquer" } },
    "delete": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Supprimer" } }
  },
  "sidebar": {
    "createWorkspace": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cr\xE9er un projet" } },
    "inviteOthers": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Envoyer une invitation" } },
    "logoff": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Se d\xE9connecter" } },
    "errorNoWorkspace": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Vous n'avez aucun projet." } },
    "admin": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Administration" } },
    "dashboard": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Accueil" } },
    "trash": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Corbeille" } },
    "settings": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mon compte" } },
    "members": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Membres" } },
    "notifications": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Notifications" } },
    "licenses": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Licences" } },
    "addNewWorkspace": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ajouter un nouveau projet" } },
    "home": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Accueil" } },
    "adminTools": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Administration" } },
    "adminSettings": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Param\xE8tres" } },
    "general": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "G\xE9n\xE9ral" } },
    "people": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Utilisateurs" } }
  },
  "accountForm": {
    "nameLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Votre nom" } },
    "languageLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Langue de l'interface" } }
  },
  "accountSettings": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Informations personnelles" } },
    "changedTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mise \xE0 jour" } },
    "changedDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Les informations de votre compte utilisateur ont \xE9t\xE9 mises \xE0 jour." } },
    "submitButton": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Modifier les informations" } }
  },
  "settingsModal": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mon compte" } }
  },
  "passwordSettings": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mise \xE0 jour du mot de passe" } },
    "changedTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mot de passe mis \xE0 jour" } },
    "changedDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Votre mot de passe a \xE9t\xE9 mis \xE0 jour. La prochaine fois que vous souhaitez vous connecter, vous devrez utiliser le nouveau mot de passe." } },
    "oldPasswordLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ancien mot de passe" } },
    "oldPasswordRequiredError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "L'ancien mot de passe est obligatoire." } },
    "newPasswordLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nouveau mot de passe" } },
    "repeatNewPasswordLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "R\xE9p\xE9tez le mot de passe" } },
    "repeatNewPasswordMatchError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Les deux mots de passe ne correspondent pas." } },
    "submitButton": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mettre \xE0 jour" } },
    "errorInvalidOldPasswordTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ancien mot de passe invalide" } },
    "errorInvalidOldPasswordMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Impossible de mettre \xE0 jour votre mot de passe car votre ancien mot de passe est incorrect." } }
  },
  "error": {
    "alreadyExistsTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "L'utilisateur existe d\xE9j\xE0" } },
    "alreadyExistsMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Un utilisateur avec la m\xEAme adresse \xE9lectronique existe d\xE9j\xE0." } },
    "passwordRequired": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Le mot de passe est obligatoire." } },
    "invalidEmail": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Veuillez entrer une adresse \xE9lectronique valide." } },
    "disabledAccountTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Compte d\xE9sactiv\xE9" } },
    "disabledAccountMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ce compte utilisateur est d\xE9sactiv\xE9." } },
    "incorrectCredentialTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Identifiants incorrects" } },
    "incorrectCredentialMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "L'adresse \xE9lectronique et/ou le mot de passe sont incorrects." } },
    "inputRequired": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ce champ est obligatoire." } },
    "disabledPasswordProviderTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "L'authentification par mot de passe est d\xE9sactiv\xE9e." } },
    "disabledPasswordProviderMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Veuillez utiliser un autre fournisseur d'authentification." } },
    "captchaVerificationFailedTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\xC9chec de la v\xE9rification par Captcha" } },
    "captchaVerificationFailedMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "La v\xE9rification par captcha a \xE9chou\xE9. Veuillez r\xE9essayer." } }
  },
  "field": {
    "language": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Langue" } },
    "emailAddress": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Adresse \xE9lectronique" } },
    "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Votre nom" } },
    "password": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mot de passe" } },
    "passwordRepeat": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "R\xE9p\xE9tez votre mot de passe" } }
  },
  "invitationTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Invitation" } },
  "invitationMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "invitedBy" }, { "t": 3, "v": " vous a invit\xE9\xB7e \xE0 rejoindre le projet " }, { "t": 4, "k": "workspace" }, { "t": 3, "v": "." }] } },
  "workspaceForm": {
    "nameLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nom" } }
  },
  "leaveWorkspaceModal": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Quitter " }, { "t": 4, "k": "workspace" }] } },
    "message": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "\xCAtes-vous s\xFBr\xB7e de vouloir quitter le projet " }, { "t": 4, "k": "workspace" }, { "t": 3, "v": " ? Vous ne serez plus en mesure d'acc\xE9der aux applications associ\xE9es et si vous souhaitez y acc\xE9der de nouveau, l'un des administrateurs du projet devra vous envoyer une nouvelle invitation. Si vous quittez un projet, celui-ci ne sera pas supprim\xE9 et les autres membres y auront toujours acc\xE8s. Il n'est pas possible de quitter un projet si vous \xEAtes le dernier administrateur car il se retrouverait alors sans propri\xE9taire." }] } },
    "leave": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Quitter le projet" } }
  },
  "dashboardWorkspace": {
    "showMembers": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Membres" } },
    "createApplication": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cr\xE9er" } }
  },
  "workspaceInvitation": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Invitation" } },
    "message": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "by" }, { "t": 3, "v": " vous a invit\xE9 \xE0 rejoindre le projet " }, { "t": 4, "k": "workspace" }, { "t": 3, "v": "." }] } },
    "reject": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Refuser" } },
    "accept": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Accepter" } }
  },
  "workspaceMemberModal": {
    "membersModalTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Membres de " }, { "t": 4, "k": "workspace" }] } },
    "userDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "user" }, { "t": 3, "v": " - membre depuis " }, { "t": 4, "k": "since" }] } },
    "invitationDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "invit\xE9\xB7e depuis " }, { "t": 4, "k": "since" }] } },
    "sendInvite": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Envoyer l'invitation" } },
    "userAlreadyInWorkspaceTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "L'utilisateur est d\xE9j\xE0 dans le projet." } },
    "userAlreadyInWorkspaceText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Il n'est pas possible d'envoyer une invitation \xE0 un utilisateur d\xE9j\xE0 pr\xE9sent dans le projet." } },
    "userDescriptionPendingDeletion": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "user" }, { "t": 3, "v": " - en attente de suppression" }] } }
  },
  "workspaceInviteForm": {
    "invitationFormTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Inviter par email" } },
    "optionalMessagePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Message optionnel" } },
    "errorInvalidEmail": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Veuillez saisir une adresse email valide." } },
    "errorTooLongMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Les messages sont limit\xE9s \xE0 " }, { "t": 4, "k": "amount" }, { "t": 3, "v": " caract\xE8res." }] } },
    "additionalRoles": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Autres r\xF4les" } }
  },
  "workspacesContext": {
    "search": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Rechercher" } },
    "noResults": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aucun r\xE9sultat" } },
    "createWorkspace": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cr\xE9er un projet" } }
  },
  "workspaceContext": {
    "renameWorkspace": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Renommer le projet" } },
    "members": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Membres" } },
    "viewTrash": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Voir la corbeille" } },
    "leaveWorkspace": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Quitter le projet" } },
    "deleteWorkspace": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Supprimer le projet" } },
    "auditLog": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Journal d'audit" } },
    "settings": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Param\xE8tres" } },
    "importWorkspace": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Importer" } },
    "exportWorkspace": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Exporter" } }
  },
  "createWorkspaceModal": {
    "createNew": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nouveau projet" } },
    "add": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ajouter le projet" } },
    "defaultName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Projet sans nom" } },
    "permissionDeniedTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Permission refus\xE9e" } },
    "permissionDeniedBody": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Vous n'avez pas les permissions n\xE9cessaires pour cr\xE9er un nouveau projet." } }
  },
  "templateCategories": {
    "search": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Chercher des mod\xE8les" } },
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mod\xE8les" } }
  },
  "templateHeader": {
    "use": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Utiliser ce mod\xE8le" } }
  },
  "trashSidebar": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Corbeille" } },
    "unnamedWorkspace": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Projet sans nom " }, { "t": 4, "k": "id" }] } },
    "workspaces": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Projets" } }
  },
  "trashContents": {
    "message": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Restaurer les \xE9l\xE9ments supprim\xE9s durant les " }, { "t": 4, "k": "duration" }, { "t": 3, "v": " derniers" }] } },
    "empty": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Rien n'a \xE9t\xE9 supprim\xE9 durant les trois derniers jours." } },
    "emptyButtonTrashed": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Supprimer " }, { "t": 4, "k": "type" }, { "t": 3, "v": " d\xE9finitivement" }] } },
    "emptyButtonNotTrashed": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Vider la corbeille pour " }, { "t": 4, "k": "type" }] } },
    "unnamed": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Sans nom " }, { "t": 4, "k": "type" }, { "t": 3, "v": " " }, { "t": 4, "k": "id" }] } }
  },
  "trashEmptyModal": {
    "titleIsTrashed": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "\xCAtes-vous s\xFBr\xB7e de vouloir supprimer d\xE9finitivement " }, { "t": 4, "k": "name" }, { "t": 3, "v": " ?" }] } },
    "titleIsNotTrashed": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "\xCAtes-vous s\xFBr\xB7e de vouloir vider la corbeille de " }, { "t": 4, "k": "name" }, { "t": 3, "v": " ?" }] } },
    "messageIsTrashed": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cette action va tout supprimer d\xE9finitivement ainsi que tout son contenu. Vous ne serez plus en mesure de le restaurer." } },
    "messageIsNotTrashed": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cette action va supprimer d\xE9finitivement les \xE9l\xE9ments list\xE9s. Vous ne serez plus en mesure de les restaurer." } },
    "buttonIsTrashed": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Supprimer d\xE9finitivement" } },
    "buttonIsNotTrashed": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Vider" } }
  },
  "trashEntry": {
    "deletedUser": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Un utilisateur supprim\xE9" } },
    "fromParent": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "provenant de " }, { "t": 4, "k": "parent" }] } },
    "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "user" }, { "t": 3, "v": " a supprim\xE9 " }, { "t": 4, "k": "type" }, { "t": 3, "v": " " }, { "t": 4, "k": "title" }, { "t": 3, "v": " " }, { "t": 4, "k": "parent" }] } },
    "restore": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Restaurer" } },
    "unnamed": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Sans nom " }, { "t": 4, "k": "type" }, { "t": 3, "v": " " }, { "t": 4, "k": "id" }] } },
    "andMore": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "... et " }, { "t": 4, "k": "count" }, { "t": 3, "v": " de plus" }] } }
  },
  "trashModal": {
    "emptyTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aucun projet trouv\xE9" } },
    "emptyMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Vous n'\xEAtes membre d'aucun projet. Les applications comme les bases de donn\xE9es doivent appartenir \xE0 un projet, par cons\xE9quent vous devez cr\xE9er un projet afin d'\xEAtre capable d'en cr\xE9er." } },
    "emptyMessageWithoutCreatePermission": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Vous n'\xEAtes membre d'aucun projet. Les applications comme les bases de donn\xE9es doivent appartenir \xE0 un projet. Pour les cr\xE9er, vous devez donc d'abord \xEAtre invit\xE9 \xE0 un projet par un administrateur." } }
  },
  "uploadViaURLUserFileUpload": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\xC0 partir d'une URL" } },
    "urlLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "URL" } },
    "urlError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Une URL valide doit \xEAtre renseign\xE9e." } }
  },
  "userFilesModal": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "En provenance" } }
  },
  "uploadFileUserFileUpload": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Envoyer un fichier" } },
    "drop": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "D\xE9posez ici" } },
    "clickOrDrop": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cliquez ou d\xE9posez votre fichier ici" } },
    "retry": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Recommencer" } }
  },
  "createApplicationContext": {
    "fromTemplate": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\xC0 partir d'un mod\xE8le" } },
    "fromTemplateDesc": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "D\xE9marrer rapidement avec l'un de nos mod\xE8les recommand\xE9s" } },
    "tableDesc": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cr\xE9ez un nouvel espace pour g\xE9rer des donn\xE9es dans votre base." } },
    "table": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Table" } },
    "importWorkspaceDesc": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Importer des donn\xE9es existantes \xE0 partir d'une instance Baserow." } },
    "importWorkspace": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Importer" } }
  },
  "applicationForm": {
    "nameLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nom" } },
    "namePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Saisir un nom..." } }
  },
  "connectingNotification": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Reconnexion en cours" } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Reconnexion avec le serveur en cours." } }
  },
  "failedConnectingNotification": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\xC9chec de connexion" } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "La connexion avec le serveur a \xE9t\xE9 interrompue. Merci de rafra\xEEchir la page." } },
    "action": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Rafra\xEEchir la page" } }
  },
  "restoreNotification": {
    "restore": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Restaurer l'\xE9l\xE9ment " }, { "t": 4, "k": "type" }, { "t": 3, "v": " supprim\xE9" }] } }
  },
  "errorLayout": {
    "notFound": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "La page que vous essayez de consulter n'a pas \xE9t\xE9 trouv\xE9e. L'URL est incorrecte ou vous n'avez pas les permissions n\xE9cessaires pour voir cette page." } },
    "error": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Une erreur est survenue lors du chargement de la page. Nos d\xE9veloppeurs ont \xE9t\xE9 notifi\xE9s de ce probl\xE8me. Veuillez essayer de recharger la page ou retournez \xE0 l'accueil." } },
    "backDashboard": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Retourner \xE0 l'accueil" } },
    "backLogin": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Retourner \xE0 l'identification" } },
    "wrong": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Une erreur est survenue" } },
    "refresh": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Actualiser la page" } }
  },
  "dashboard": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Accueil" } },
    "alertTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Soutenez-nous !" } },
    "alertText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "En partageant Baserow, vous nous aidez \xE0 am\xE9liorer le produit et \xE0 le rendre plus utile pour vous." } },
    "tweetContent": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }, { "t": 9 }, { "t": 3 }], "s": "D\xE9couvrez @baserow, une base de donn\xE9es no-code libre, une alternative \xE0 Airtable !" } },
    "redditTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Baserow - Une base de donn\xE9es no-code libre" } },
    "noWorkspaceTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aucun projet" } },
    "noWorkspaceText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Vous n'\xEAtes membre d'aucun projet. Les applications telles que les bases de donn\xE9es doivent appartenir \xE0 un projet, donc pour pouvoir en cr\xE9er, vous devez cr\xE9er au moins un projet." } },
    "createWorkspace": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cr\xE9er un projet" } },
    "becomeGithubSponsor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Devenir sponsor Github" } },
    "starOnGitlab": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nous aimer sur GitLab" } },
    "shareOnTwitter": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tweeter \xE0 propos de Baserow" } },
    "shareOnReddit": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Partager sur Reddit" } },
    "shareOnFacebook": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Partager sur Facebook" } },
    "shareOnLinkedIn": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Partager sur LinkedIn" } },
    "noWorkspaceTextWithoutCreatePermission": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Vous n'\xEAtes membre d'aucun projet. Les applications comme les bases de donn\xE9es doivent appartenir \xE0 un projet. Pour les cr\xE9er, vous devez donc d'abord \xEAtre invit\xE9 \xE0 un projet par un administrateur." } },
    "suggestedTemplates": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mod\xE8les sugg\xE9r\xE9s" } },
    "resources": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ressources" } },
    "knowledgeBase": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Base de connaissances" } },
    "knowledgeBaseMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Trouvez les r\xE9ponses \xE0 toutes vos questions" } },
    "tutorials": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tutoriels" } },
    "tutorialsMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "D\xE9couvrez le potentiel de Baserow" } },
    "apiDocumentation": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Documentation de l'API" } },
    "apiDocumentationMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "En savoir plus sur notre code" } },
    "emptyWorkspace": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ce projet est vide" } },
    "emptyWorkspaceMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pour commencer, cr\xE9ez une nouvelle base de donn\xE9es ou une nouvelle application." } },
    "addNew": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ajouter..." } },
    "noWorkspace": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aucun projet" } },
    "noWorkspaceDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pour commencer, cr\xE9ez un nouveau projet" } },
    "starOnGitHub": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Suivez-nous sur GitHub" } }
  },
  "login": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Bienvenue" } },
    "forgotPassword": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Oubli\xE9\u202F?" } },
    "signUp": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "S'inscrire" } },
    "emailPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Entrez votre adresse e-mail.." } },
    "passwordPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Entrez votre mot de passe.." } },
    "signUpText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nouveau sur Baserow\u202F?" } },
    "displayPasswordLogin": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Connectez-vous en utilisant votre e-mail et votre mot de passe" } },
    "redirecting": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Redirection vers le service d'authentification..." } }
  },
  "resetPassword": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nouveau mot de passe" } },
    "newPassword": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nouveau mot de passe" } },
    "repeatNewPassword": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "R\xE9p\xE9tez le mot de passe" } },
    "submit": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mettre \xE0 jour" } },
    "changed": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mot de passe mis \xE0 jour" } },
    "errorInvalidLinkTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Lien invalide" } },
    "errorInvalidLinkMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Il n'est pas possible de r\xE9initialiser le mot de passe car le lien est invalide." } },
    "errorLinkExpiredTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Lien expir\xE9" } },
    "errorLinkExpiredMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Le lien de r\xE9initialisation de mot de passe a expir\xE9, Veuillez en demander un nouveau." } },
    "disabled": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "La r\xE9initialisation du mot de passe est d\xE9sactiv\xE9e" } },
    "disabledMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Il n\u2019est pas possible de r\xE9initialiser le mot de passe car cette fonctionnalit\xE9 a \xE9t\xE9 d\xE9sactiv\xE9." } },
    "message": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Vous pouvez maintenant vous connecter \xE0 Baserow en utilisant votre nouveau mot de passe." } },
    "repeatPasswordPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Confirmez votre nouveau mot de passe" } },
    "errorLinkAlreadyUsedTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Lien d\xE9j\xE0 utilis\xE9" } },
    "errorLinkAlreadyUsedMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ce lien de r\xE9initialisation du mot de passe a d\xE9j\xE0 \xE9t\xE9 utilis\xE9. Veuillez en demander un nouveau." } }
  },
  "signup": {
    "headTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cr\xE9er un compte" } },
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cr\xE9ation de compte" } },
    "disabled": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cr\xE9ation de compte d\xE9sactiv\xE9e" } },
    "disabledMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Vous ne pouvez pas cr\xE9er de compte car la cr\xE9ation de compte a \xE9t\xE9 d\xE9sactiv\xE9e." } },
    "requireFirstUser": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Bienvenue sur Baserow !" } },
    "requireFirstUserMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Veuillez remplir le formulaire ci-dessous afin de cr\xE9er le compte administrateur." } },
    "login": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Login" } },
    "emailPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Entrez votre adresse e-mail.." } },
    "namePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Entrez votre nom.." } },
    "passwordPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Entrez votre mot de passe.." } },
    "passwordRepeatPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Confirmez votre mot de passe.." } },
    "loginText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Vous avez d\xE9j\xE0 un compte\xA0?" } },
    "terms": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Conditions d'utilisation" } },
    "agreeTerms": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "En cr\xE9ant un compte, vous acceptez\xA0: " }, { "t": 5, "i": 0 }, { "t": 3, "v": " " }, { "t": 5, "i": 1 }, { "t": 3, "v": " " }, { "t": 5, "i": 2 }] } },
    "privacyPolicy": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Politique de confidentialit\xE9" } }
  },
  "forgotPassword": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mot de passe oubli\xE9" } },
    "message": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Veuillez saisir votre adresse et nous vous enverrons un lien pour r\xE9initialiser votre mot de passe." } },
    "submit": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Envoyer le lien" } },
    "confirmation": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Nous avons envoy\xE9 un courriel \xE0 " }, { "t": 4, "k": "email" }, { "t": 3, "v": ", qui contient un lien pour r\xE9initialiser votre mot de passe Baserow." }] } },
    "disabled": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mot de passe oubli\xE9 d\xE9sactiv\xE9" } },
    "disabledMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Vous ne pouvez pas r\xE9initialiser votre mot de passe car la r\xE9initialisation de mot de passe a \xE9t\xE9 d\xE9sactiv\xE9e." } },
    "loginText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Vous avez d\xE9j\xE0 un compte et un mot de passe ?" } },
    "confirmationTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "V\xE9rifiez votre adresse courriel" } },
    "goBack": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Retour" } }
  },
  "settings": {
    "settingsTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Param\xE8tres" } },
    "baserowInstanceId": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Identifiant de l'instance de Baserow" } },
    "instanceIdDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cet identifiant permet de d\xE9signer de mani\xE8re unique votre instance de Baserow." } },
    "accountRestrictions": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Restriction de cr\xE9ation de comptes" } },
    "settingAllowResetPasswordName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Activer la r\xE9initialisation du mot de passe" } },
    "settingAllowResetPasswordDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Par d\xE9faut, les utilisateurs peuvent demander un lien de r\xE9initialisation de leur mot de passe." } },
    "settingAllowResetPasswordWarning": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Veuillez noter que vous vous bloquez \xE9galement l\u2019acc\xE8s et que l'acc\xE8s ne pourra pas \xEAtre r\xE9tabli si vous avait oubli\xE9 votre mot de passe." } },
    "settingAllowNewAccountsName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Autoriser la cr\xE9ation de compte" } },
    "settingAllowNewAccountsDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Par d\xE9faut, tout les visiteurs peuvent cr\xE9er un compte sur votre instance de Baserow." } },
    "enabled": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Autoriser" } },
    "settingAllowSignupsViaWorkspaceInvitationsName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Autoriser la cr\xE9ation de compte sur invitation" } },
    "settingAllowSignupsViaWorkspaceInvitationDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cette option permet aux utilisateurs invit\xE9s par d'autres de cr\xE9er des comptes m\xEAme si la cr\xE9ation de compte \xE0 \xE9t\xE9 d\xE9sactiv\xE9e de mani\xE8re globale." } },
    "userDeletionGraceDelay": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Suppression d'utilisateurs" } },
    "settingUserDeletionGraceDelay": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "D\xE9lai de gr\xE2ce avant suppression" } },
    "invalidAccountDeletionGraceDelay": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cette valeur est obligatoire et doit \xEAtre un nombre entier positif inf\xE9rieur \xE0 32000" } },
    "settingUserDeletionGraceDelayDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Il s'agit du nombre de jours sans connexion apr\xE8s lequel un compte planifi\xE9 pour \xEAtre supprim\xE9 est d\xE9finitivement supprim\xE9." } },
    "settingAllowNonStaffCreateWorkspaceOperation": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Autoriser tout le monde \xE0 cr\xE9er de nouveaux projets" } },
    "settingAllowNonStaffCreateWorkspaceOperationDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Par d\xE9faut, tout le monde peut cr\xE9er de nouveaux projets. D\xE9sactivez cette option pour permettre uniquement aux collaborateurs de cr\xE9er de nouveaux projets." } },
    "settingAllowNonStaffCreateWorkspaceOperationWarning": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Un projet sera automatiquement cr\xE9\xE9 pour les nouveaux utilisateurs s'ils sont administrateurs." } },
    "settingTrackWorkspaceUsage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Suivi de l'utilisation du projet" } },
    "settingTrackWorkspaceUsageDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Active un travail nocturne qui compte l'utilisation des lignes et des fichiers par projet, affich\xE9 sur la page d'administration du projet premium." } },
    "maintenance": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Maintenance" } },
    "emailVerificationDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Indique si les adresses \xE9lectroniques doivent \xEAtre v\xE9rifi\xE9es." } },
    "emailVerificationNoVerification": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pas de v\xE9rification" } },
    "emailVerificationRecommended": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Recommand\xE9e" } },
    "emailVerificationEnforced": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Obligatoire" } },
    "userSettings": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Utilisateur" } },
    "emailVerification": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "V\xE9rification de l'adresse \xE9lectronique" } },
    "baserowVersion": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Version de Baserow" } },
    "baserowVersionDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Le num\xE9ro de version de cette instance." } },
    "settingsVerifyImportSignature": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "V\xE9rifier la signature de l'importation" } },
    "settingsVerifyImportSignatureDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Lorsqu'elle est activ\xE9e, la signature des donn\xE9es import\xE9es est v\xE9rifi\xE9e afin de s'assurer que les donn\xE9es n'ont pas \xE9t\xE9 alt\xE9r\xE9es." } }
  },
  "copyingNotification": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Copie en cours..." } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pr\xE9paration des donn\xE9es" } }
  },
  "undoRedoNotification": {
    "undoingTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Annulation en cours..." } },
    "undoingText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Annuler votre action" } },
    "undoneTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Annul\xE9e" } },
    "undoneText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cette action est annul\xE9e" } },
    "noMoreUndo": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Plus d'action \xE0 annuler" } },
    "skippingUndoDueToError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "L'annulation a \xE9chou\xE9 en raison d'une erreur inconnue, celle-ci est ignor\xE9e." } },
    "redoingTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "En cours de r\xE9tablissement..." } },
    "redoingText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "R\xE9tablir votre action" } },
    "redoneTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "R\xE9tablie" } },
    "redoneText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cette action est r\xE9tablie" } },
    "noMoreRedo": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Plus d'action \xE0 r\xE9tablir" } },
    "skippingRedoDueToError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Le r\xE9tablissement \xE0 \xE9chou\xE9 en raison d'une erreur inconnue. Celui-ci est ignor\xE9." } },
    "failed": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\xC9chec" } }
  },
  "AuthorizationErrorNotification": {
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Vous ne semblez pas avoir la permission de visualiser cette ressource." } },
    "action": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Rafra\xEEchir la page" } },
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Erreur d\u2019autorisation" } }
  },
  "formSidebar": {
    "actions": {
      "addAll": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ajouter tout" } },
      "removeAll": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Enlever tout" } },
      "addField": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ajouter un champ" } }
    },
    "fieldsDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tous les champs sont dans le formulaire." } },
    "prefillInfoLink": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pr\xE9-remplir les valeurs dynamiquement" } },
    "modal": {
      "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pr\xE9-remplir ou masquer les champs dynamiquement" } },
      "descriptionPartOne": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Les formulaires peuvent \xEAtre pr\xE9remplis afin d'aider l'utilisateur \xE0 remplir le formulaire plus rapidement." } },
      "descriptionPartTwo": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tous les champs qui sont disponibles dans le formulaire peuvent \xEAtre pr\xE9-remplis." } },
      "howToPrefill": {
        "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Comment pr\xE9-remplir un formulaire" } },
        "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Si vous souhaitez pr\xE9-remplir un formulaire, vous pouvez le faire via des param\xE8tres de requ\xEAte ajout\xE9s \xE0 l'url publique du formulaire. Ces param\xE8tres de requ\xEAte sont pr\xE9fix\xE9s par `prefill` pour \xE9viter toute collision avec d'\xE9ventuels futurs param\xE8tres de requ\xEAte." } }
      },
      "format": {
        "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Format" } },
        "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Le format des param\xE8tres de la requ\xEAte est le suivant :" } },
        "codeSnippet": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "?prefill_&lt;field_name&gt;=&lt;value&gt;" } }
      },
      "example": {
        "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Exemple" } },
        "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dans l'exemple ci-dessous, nous souhaitons pr\xE9-remplir un champ appel\xE9 `Name` avec la valeur de `Mike`" } },
        "codeSnippet": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "?prefill_Name=Mike" } }
      },
      "spaces": {
        "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Espaces" } },
        "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Les espaces dans le nom du champ sont remplac\xE9s par `+` pour \xE9viter tout probl\xE8me avec le param\xE8tre de requ\xEAte." } },
        "codeSnippet": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "?prefill_my+field=Mike" } }
      },
      "multipleValues": {
        "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Valeurs multiples" } },
        "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Si vous voulez pr\xE9-remplir plusieurs champs, vous pouvez le faire en ajoutant un `,` entre les valeurs." } },
        "codeSnippet": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "?prefill_multi+select=Mike,John" } }
      },
      "specialFieldTypes": {
        "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Types de champs sp\xE9ciaux" } },
        "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "En g\xE9n\xE9ral, la valeur de pr\xE9-remplissage est la m\xEAme que la valeur du champ. Mais il existe quelques exceptions o\xF9 la valeur est traduite en une valeur diff\xE9rente." } },
        "ratingField": {
          "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Champ de notation" } },
          "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Un champ d'\xE9valuation accepte un nombre pour indiquer le nombre d'\xE9toiles \xE0 remplir." } },
          "codeSnippet": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "?prefill_rating=3" } }
        },
        "linkRowField": {
          "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Lien vers une table" } },
          "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Un champ de ligne de lien peut accepter la valeur qui s'affiche dans la liste d\xE9roulante de s\xE9lection." } },
          "codeSnippet": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "?prefill_link+row=Mike" } }
        },
        "selectField": {
          "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Champ de s\xE9lection unique / s\xE9lection multiple" } },
          "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Un champ de s\xE9lection unique peut accepter la valeur qui s'affiche dans la liste d\xE9roulante de s\xE9lection. Il en va de m\xEAme pour le champ de s\xE9lection multiple, mais il peut \xE9galement accepter plusieurs valeurs." } },
          "codeSnippet": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "?prefill_single+select=Mike" } }
        },
        "dateField": {
          "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Champ Date" } },
          "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Un champ de date peut accepter une date dans les formats suivants et utilisera le format de date du champ pour analyser la date." } },
          "codeSnippet": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\n// Standards\nISO_8601\n\n// General formats\n'YYYY-MM-DD',\n'YYYY-MM-DD hh:mm A',\n'YYYY-MM-DD HH:mm',\n\n// EU\n'DD/MM/YYYY', \n'DD/MM/YYYY hh:mm A', \n'DD/MM/YYYY HH:mm'\n\n// US\n'MM/DD/YYYY', \n'MM/DD/YYYY hh:mm A', \n'MM/DD/YYYY HH:mm'" } }
        }
      },
      "howToHide": {
        "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Comment masquer un champ" } },
        "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Si vous souhaitez masquer un champ dynamiquement, vous pouvez le faire via des param\xE8tres de requ\xEAte ajout\xE9 \xE0 l'URL publique du formulaire. Ces param\xE8tres de requ\xEAte doivent \xEAtre pr\xE9fix\xE9s par `hide_` pour \xE9viter une collision avec d'autres param\xE8tres." } }
      }
    },
    "prefillOrHideInfoLink": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pr\xE9-remplir ou masquer dynamiquement" } },
    "notifyUserOnSubmit": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Recevoir une notification lors de la soumission" } },
    "fields": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Colonnes" } },
    "rowEditableBy": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mettre \xE0 jour les lignes via les colonnes" } },
    "rowEditableByDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Les lignes de cette table peuvent \xEAtre mises \xE0 jour \xE0 l'aide de ce formulaire, via les champs de modification des lignes suivants\xA0:" } }
  },
  "deleteAccountSettings": {
    "workspaceNotice": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Les projets sans propri\xE9taires seront \xEAtre supprim\xE9s" } },
    "orphanWorkspaces": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Seront \xE9galement supprim\xE9s d\xE9finitivement apr\xE8s le d\xE9lais de gr\xE2ce" } },
    "password": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mot de passe" } },
    "passwordConfirm": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "R\xE9p\xE9tez le mot de passe" } },
    "repeatPasswordMatchError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ce champ doit correspondre au premier champ de mot de passe." } },
    "submitButton": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Supprimer le compte" } },
    "errorInvalidPasswordTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mot de passe invalide" } },
    "errorInvalidPasswordMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Impossible de supprimer votre compte car le mot de passe est invalide." } },
    "errorUserIsLastAdminMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Impossible de supprimer votre compte car vous \xEAtes le dernier administrateur de cette instance de Baserow." } },
    "accountDeletedSuccessMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "La suppression de votre compte a \xE9t\xE9 programm\xE9e." } },
    "workspaceLoadingError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "La v\xE9rification des projets a \xE9chou\xE9e" } },
    "workspaceLoadingErrorDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "La v\xE9rifications des projets qui seront supprim\xE9s a \xE9chou\xE9e, veuillez rafra\xEEchir la page." } },
    "accountDeletedSuccessTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Suppression de compte programm\xE9e" } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Vous pouvez programm\xE9 la suppression de votre compte en entrant votre mot de passe actuel et en cliquant sur le bouton. Votre compte sera d\xE9finitivement supprim\xE9 apr\xE8s " }, { "t": 4, "k": "days" }, { "t": 3, "v": " jours. Pendant ce d\xE9lais, si vous vous connectez de nouveau, la suppression de votre compte sera annul\xE9e." }] } },
    "orphanWorkspaceMemberCount": { "t": 0, "b": { "t": 1, "c": [{ "t": 2, "i": [{ "t": 3 }], "s": "non partag\xE9" }, { "t": 2, "i": [{ "t": 3 }], "s": "partag\xE9 avec 1 utilisateur" }, { "t": 2, "i": [{ "t": 3, "v": "partag\xE9 avec " }, { "t": 4, "k": "count" }, { "t": 3, "v": " utilisateurs" }] }] } },
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Supprimer le compte" } },
    "workspaceNoticeDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Quand votre compte est d\xE9finitivement supprim\xE9, tous les projets et leurs donn\xE9es associ\xE9es pour lesquels vous \xEAtes le dernier administrateur actif sont \xE9galement supprim\xE9s. Les projets suivants sont ceux qui seront supprim\xE9s car vous \xEAtes le seul administrateur. Afin d'\xE9viter qu'ils soient supprim\xE9s, vous devez donner les droits d'administration \xE0 un autre utilisateur avant de supprimer votre compte." } },
    "errorUserIsLastAdminTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dernier administrateur" } }
  },
  "pastingNotification": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Collage..." } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pr\xE9paration des donn\xE9es" } }
  },
  "dashboardSidebar": {
    "workspaces": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Projets" } },
    "links": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Liens" } },
    "knowledgeBase": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Base de connaissances" } },
    "userSettings": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Param\xE8tres utilisateur" } },
    "trash": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Corbeille" } },
    "logoff": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Se d\xE9connecter" } },
    "tutorials": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tutoriels" } }
  },
  "job": {
    "stateFailed": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\xC9chec" } },
    "errorJobAlreadyRunningTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "D\xE9j\xE0 en cours d\u2019ex\xE9cution" } },
    "errorJobAlreadyRunningDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Une autre t\xE2che d'importation est d\xE9j\xE0 en cours. Vous devez attendre que celle-ci se termine avant d'en lancer une autre." } },
    "statePending": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "En attente\u2026" } },
    "stateStarted": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "D\xE9marr\xE9\u2026" } },
    "stateFinished": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Termin\xE9" } },
    "errorJobCannotBeCancelledTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Impossible d'annuler" } },
    "errorJobCannotBeCancelledDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Il n'est pas possible d'annuler le travail car il a d\xE9j\xE0 \xE9t\xE9 effectu\xE9.\nVeuillez supprimer la premi\xE8re sauvegarde ci-dessous pour le supprimer." } },
    "stateCanceled": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Annul\xE9" } }
  },
  "clearingNotification": {
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pr\xE9paration des donn\xE9es" } },
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nettoyage..." } }
  },
  "datetime": {
    "daysAgo": { "t": 0, "b": { "t": 1, "c": [{ "t": 2, "i": [{ "t": 3 }], "s": "Il y a 0 jour" }, { "t": 2, "i": [{ "t": 3 }], "s": "Il y a 1 jour" }, { "t": 2, "i": [{ "t": 3, "v": "Il y a " }, { "t": 4, "k": "n" }, { "t": 3, "v": "\xA0jours" }] }] } },
    "yearsAgo": { "t": 0, "b": { "t": 1, "c": [{ "t": 2, "i": [{ "t": 3 }], "s": "il y a 0 an" }, { "t": 2, "i": [{ "t": 3 }], "s": "il y a 1 an" }, { "t": 2, "i": [{ "t": 3, "v": "il y a " }, { "t": 4, "k": "n" }, { "t": 3, "v": "\xA0ans" }] }] } },
    "monthsAgo": { "t": 0, "b": { "t": 1, "c": [{ "t": 2, "i": [{ "t": 3 }], "s": "il y a 0 mois" }, { "t": 2, "i": [{ "t": 3 }], "s": "il y a 1 mois" }, { "t": 2, "i": [{ "t": 3, "v": "il y a " }, { "t": 4, "k": "n" }, { "t": 3, "v": "\xA0mois" }] }] } },
    "minutesAgo": { "t": 0, "b": { "t": 1, "c": [{ "t": 2, "i": [{ "t": 3 }], "s": "il y a 0 minute" }, { "t": 2, "i": [{ "t": 3 }], "s": "il y a 1 minute" }, { "t": 2, "i": [{ "t": 3, "v": "il y a " }, { "t": 4, "k": "n" }, { "t": 3, "v": "\xA0minutes" }] }] } },
    "hoursAgo": { "t": 0, "b": { "t": 1, "c": [{ "t": 2, "i": [{ "t": 3 }], "s": "Il y a 0 heure" }, { "t": 2, "i": [{ "t": 3 }], "s": "Il y a 1 heure" }, { "t": 2, "i": [{ "t": 3, "v": "Il y a " }, { "t": 4, "k": "n" }, { "t": 3, "v": "\xA0heures" }] }] } },
    "secondsAgo": { "t": 0, "b": { "t": 1, "c": [{ "t": 2, "i": [{ "t": 3 }], "s": "A l'instant" }, { "t": 2, "i": [{ "t": 3 }], "s": "Il y a 1 seconde" }, { "t": 2, "i": [{ "t": 3, "v": "Il y a " }, { "t": 4, "k": "n" }, { "t": 3, "v": "\xA0secondes" }] }] } },
    "justNow": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\xE0 l'instant" } },
    "lessThanMinuteAgo": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "il y a moins d'une minute" } }
  },
  "duplicateApplicationJobType": {
    "duplicating": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Duplication" } },
    "duplicatedTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Application dupliqu\xE9e" } }
  },
  "InstallTemplateJobType": {
    "installing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Installation" } },
    "installedTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mod\xE8le install\xE9" } }
  },
  "membersSettings": {
    "invitesTable": {
      "columns": {
        "role": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "R\xF4le par d\xE9faut" } },
        "email": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Courriel" } },
        "message": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Message" } }
      },
      "actions": {
        "copyEmail": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Copier l\u2019e-mail" } },
        "remove": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Annuler l'invitation" } }
      },
      "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "invitesAmount" }, { "t": 3, "v": " Invitations en attente dans " }, { "t": 4, "k": "workspaceName" }] } }
    },
    "membersInviteModal": {
      "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Inviter des membres du projet" } },
      "submit": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Envoyer une invitation" } },
      "errors": {
        "userAlreadyInWorkspace": {
          "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "L\u2019utilisateur est d\xE9j\xE0 dans le projet." } },
          "text": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Il n\u2019est pas possible d\u2019envoyer une invitation lorsque l\u2019utilisateur est d\xE9j\xE0 membre du projet." } }
        }
      },
      "helpIconText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Le r\xF4le s\xE9lectionn\xE9 sera le r\xF4le par d\xE9faut des utilisateurs dans ce projet." } }
    },
    "membersTable": {
      "actions": {
        "remove": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Supprimer du projet" } },
        "copyEmail": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Copier l\u2019e-mail" } }
      },
      "columns": {
        "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nom" } },
        "role": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "R\xF4le par d\xE9faut" } },
        "email": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Courriel" } },
        "teams": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\xC9quipes" } },
        "highestRole": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "R\xF4le le plus \xE9lev\xE9" } },
        "highestRoleHelpText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Le r\xF4le le plus \xE9lev\xE9 attribu\xE9 \xE0 cet utilisateur, directement ou par une \xE9quipe, sur tout ce qui se trouve dans ce projet" } },
        "highestRoleInstanceHelpText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Le r\xF4le le plus \xE9lev\xE9 dont dispose cet utilisateur dans l'instance" } },
        "2fa": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "2FA" } }
      },
      "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "userAmount" }, { "t": 3, "v": " Membres dans " }, { "t": 4, "k": "workspaceName" }] } },
      "inviteMember": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Inviter un membre" } }
    },
    "membersTabTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Membres" } },
    "invitesTabTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Invite" } }
  },
  "crudTableSearch": {
    "search": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Recherche" } }
  },
  "memberAssignmentModalFooter": {
    "invite": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Inviter " }, { "t": 4, "k": "count" }] } },
    "selectAll": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "S\xE9lectionner tout" } },
    "deselectAll": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "D\xE9s\xE9lectionner tout" } }
  },
  "removeFromWorkspaceModal": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Confirmer le retrait du projet" } },
    "remove": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Supprimer" } },
    "confirmation": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Voulez-vous vraiment supprimer " }, { "t": 4, "k": "name" }, { "t": 3, "v": " de " }, { "t": 4, "k": "workspaceName" }, { "t": 3, "v": " ? Cette action ne peut pas \xEAtre annul\xE9e." }] } }
  },
  "UserSessionExpiredNotification": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Session expir\xE9e" } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Vous avez \xE9t\xE9 d\xE9connect\xE9\xB7e car votre jeton d'authentification a expir\xE9. Veuillez vous reconnecter." } }
  },
  "memberSelectionList": {
    "searchPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Rechercher \u2026" } },
    "selectedAmountLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "count" }, { "t": 3, "v": " s\xE9lectionn\xE9(s)" }] } }
  },
  "permissionsUpdatedNotification": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Permissions mises \xE0 jour" } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cela pourrait affecter ce \xE0 quoi vous avez acc\xE8s, veuillez recharger la page." } },
    "action": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Recharger" } }
  },
  "highestPaidRoleField": {
    "billable": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Facturable" } }
  },
  "editRoleContext": {
    "billableRolesLink": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Documentation sur les r\xF4les facturables" } },
    "additionalRoles": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Autres r\xF4les" } }
  },
  "notificationPanel": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Notifications" } },
    "clearAll": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Effacer tout" } },
    "markAllAsRead": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Marquer tout comme lu" } },
    "noNotificationTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Vous n'avez aucune notification" } },
    "noNotification": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nous vous informerons des mises \xE0 jour importantes et \xE0 chaque fois que vous serez mentionn\xE9 sur Baserow." } },
    "newNotificationsAvailable": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nouvelles notifications disponibles" } },
    "refresh": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Actualiser" } }
  },
  "clearAllNotificationsConfirmModal": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\xCAtes-vous s\xFBr\xB7e de vouloir supprimer toutes les notifications\xA0?" } },
    "message": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Toutes les notifications seront d\xE9finitivement supprim\xE9es et vous ne serez plus en mesure de les consulter." } }
  },
  "uploadFileDropzone": {
    "errorTooManyFilesMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Vous ne pouvez envoyer qu'un seul fichier" } },
    "errorWrongFileTypeTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Type de fichier incorrect" } },
    "errorWrongFileTypeMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Vous ne pouvez pas t\xE9l\xE9charger un fichier de type " }, { "t": 4, "k": "type" }] } },
    "drop": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "D\xE9poser ici" } },
    "clickOrDrop": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cliquez ou d\xE9posez vos fichiers ici" } },
    "errorTooManyFilesTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Trop de fichiers" } }
  },
  "connectingToast": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Reconnexion" } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "R\xE9tablissement de la connexion instantan\xE9e..." } }
  },
  "failedConnectingToast": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\xC9chec" } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "La connexion instantan\xE9e avec le serveur a \xE9t\xE9 interrompue. Merci de rafra\xEEchir la page pour continuer." } },
    "action": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Actualiser la page" } }
  },
  "authorizationErrorToast": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Erreur d\u2019autorisation" } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Vous ne semblez pas avoir la permission de visualiser cette ressource." } },
    "action": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Actualiser la page" } }
  },
  "userSessionExpiredToast": {
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Vous avez \xE9t\xE9 d\xE9connect\xE9\xB7e car votre jeton d'authentification a expir\xE9. Veuillez vous reconnecter." } },
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Session expir\xE9e" } }
  },
  "restoreToast": {
    "restore": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Restauration de " }, { "t": 4, "k": "type" }] } }
  },
  "copyingToast": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Copie..." } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pr\xE9paration de vos donn\xE9es" } }
  },
  "PastingToast": {
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pr\xE9paration de vos donn\xE9es" } },
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Collage..." } }
  },
  "undoRedoToast": {
    "undoneTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Annul\xE9e" } },
    "undoneText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "L\u2019action est annul\xE9e" } },
    "noMoreUndo": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Plus d\u2019action \xE0 annuler" } },
    "undoingText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Annulation de votre action" } },
    "skippingUndoDueToError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "L\u2019annulation a \xE9chou\xE9 en raison d\u2019une erreur inconnue, \xE9tape ignor\xE9e." } },
    "redoingTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "R\xE9tablissement..." } },
    "redoneTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "R\xE9tablie" } },
    "redoneText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "L'action est r\xE9tablie" } },
    "noMoreRedo": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Plus d\u2019action \xE0 r\xE9tablir" } },
    "skippingRedoDueToError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Le r\xE9tablissement a \xE9chou\xE9 en raison d\u2019une erreur inconnue, \xE9tape ignor\xE9e." } },
    "failed": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\xC9chec" } },
    "redoingText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "R\xE9tablissement de votre action" } },
    "undoingTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Annulation..." } }
  },
  "permissionsUpdatedToast": {
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cela pourrait affecter ce \xE0 quoi vous avez acc\xE8s, veuillez recharger la page." } },
    "action": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Recharger" } },
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Autorisations mises \xE0 jour" } }
  },
  "richTextEditorMentionsList": {
    "notFound": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aucun utilisateur trouv\xE9" } }
  },
  "versionUpgradeNotification": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "La version " }, { "t": 4, "k": "version" }, { "t": 3, "v": " est arriv\xE9 ! D\xE9couvrez les nouveaut\xE9s." }] } }
  },
  "clearingToast": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nettoyage..." } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pr\xE9paration de vos donn\xE9es" } }
  },
  "integrationCreateEditModal": {
    "editTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Modifier l\u2019int\xE9gration" } },
    "warningTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Avertissement" } },
    "createTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nouvelle int\xE9gration" } }
  },
  "integrationEditForm": {
    "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nom" } },
    "namePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Saisissez le nom de l'int\xE9gration..." } }
  },
  "workspaceInvitationCreatedNotification": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "sender" }, { "t": 3, "v": " vous a invit\xE9 \xE0 rejoindre " }, { "t": 4, "k": "workspaceName" }] } },
    "deletedUser": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Un utilisateur supprim\xE9" } }
  },
  "dropdown": {
    "empty": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aucune option disponible" } }
  },
  "styleSidePanel": {
    "paddingTop": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Espacement haut" } },
    "paddingBottom": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Espacement bas" } }
  },
  "styleBoxForm": {
    "paddingError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "La valeur doit \xEAtre un entier compris entre 0 et 200." } }
  },
  "workspaceInvitationAcceptedNotification": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "sender" }, { "t": 3, "v": " a accept\xE9 votre invitation \xE0 rejoindre " }, { "t": 4, "k": "workspaceName" }] } },
    "deletedUser": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Un utilisateur supprim\xE9" } }
  },
  "workspaceInvitationRejectedNotification": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "sender" }, { "t": 3, "v": " a rejet\xE9 votre invitation \xE0 rejoindre " }, { "t": 4, "k": "workspaceName" }] } },
    "deletedUser": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Un utilisateur supprim\xE9" } }
  },
  "emailNotifications": {
    "submitButton": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mise \xE0 jour de la fr\xE9quence" } },
    "label": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mentions, commentaires et autres notifications" } },
    "daily": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tous les jours" } },
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Notifications par courriel" } },
    "never": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Jamais" } },
    "weekly": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Chaque semaine" } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Configurez la fr\xE9quence d'envoi des courriels dans votre bo\xEEte de r\xE9ception." } },
    "instant": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Instantan\xE9e" } }
  },
  "dataExplorer": {
    "emptyText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aucune donn\xE9e disponible" } },
    "noMatchingNodesText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aucun r\xE9sultat n'a \xE9t\xE9 trouv\xE9." } },
    "noProvidersText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aucun fournisseur de donn\xE9es n'a \xE9t\xE9 trouv\xE9. Pour commencer, vous pouvez, par exemple, ajouter une source de donn\xE9es ou un param\xE8tre de page." } }
  },
  "formulaInputField": {
    "errorInvalidFormula": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "La formule est invalide." } },
    "advancedFormulaMode": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mode formule avanc\xE9e" } },
    "invalidFormulaTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Formule invalide" } },
    "invalidSyntax": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Formule experte invalide, veuillez v\xE9rifier la syntaxe." } }
  },
  "userPasswordChangedToast": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mot de passe modifi\xE9" } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Votre mot de passe a \xE9t\xE9 modifi\xE9. Veuillez vous connecter de nouveau." } }
  },
  "integrationDropdown": {
    "noIntegrations": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aucune int\xE9gration trouv\xE9e." } },
    "addIntegration": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ajouter une nouvelle int\xE9gration" } },
    "integrationPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "S\xE9lectionnez une int\xE9gration" } },
    "selectTypeFirst": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Choisir d'abord le type" } }
  },
  "richTextEditorBubbleMenu": {
    "bold": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Gras" } },
    "strikethrough": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Barrer" } },
    "italic": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Italique" } },
    "underline": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Souligner" } },
    "link": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Lien" } },
    "linkEditPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "URL du lien..." } },
    "linkEditDone": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Valider" } }
  },
  "richTextEditorFloatingMenu": {
    "hierarchy": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Hi\xE9rarchie" } },
    "lists": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Listes" } },
    "paragraph": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Paragraphe" } },
    "heading1": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Titre 1" } },
    "heading2": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Titre 2" } },
    "heading3": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Titre 3" } },
    "orderedList": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Liste num\xE9rot\xE9e" } },
    "unorderedList": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Liste \xE0 puces" } },
    "code": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Code" } },
    "taskList": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Liste de t\xE2ches" } }
  },
  "workspaceSettingsModal": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Param\xE8tres du projet" } }
  },
  "workspaceSettingType": {
    "generativeAI": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "IA g\xE9n\xE9rative" } }
  },
  "generativeAIModelType": {
    "openaiOrganization": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Organisation (facultatif)" } },
    "ollama": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ollama" } },
    "openai": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "OpenAI" } },
    "openaiApiKeyLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cl\xE9 API" } },
    "openaiApiKeyDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Saisissez une cl\xE9 API OpenAI si vous souhaitez activer l'int\xE9gration. [Instructions sur l'obtention d'une cl\xE9 API] (https://help.openai.com/en/articles/4936850-where-do-i-find-my-openai-api-key)." } },
    "openaiModelsLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mod\xE8les activ\xE9s" } },
    "openaiModelsDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Fournir une liste de [mod\xE8les OpenAI] (https://platform.openai.com/docs/models/continuous-model-upgrades) s\xE9par\xE9s par des virgules qui peuvent \xEAtre utilis\xE9s dans Baserow. (par exemple `gpt-3.5-turbo,gpt-4`)" } },
    "ollamaHostLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "H\xF4te" } },
    "ollamaHostDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Indiquez le nom d'h\xF4te de votre serveur [Ollama] (https://ollama.com/). Celui-ci s'ex\xE9cute g\xE9n\xE9ralement localement sur votre propre serveur." } },
    "ollamaModelsLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mod\xE8les activ\xE9s" } },
    "ollamaModelsDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Fournir une liste de [mod\xE8les Ollama install\xE9s] (https://ollama.com/library) s\xE9par\xE9s par des virgules. Notez que le mod\xE8le doit \xEAtre t\xE9l\xE9charg\xE9 et install\xE9 avant de pouvoir \xEAtre utilis\xE9. (par exemple `llama2,mistral`)" } },
    "anthropicApiKeyLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cl\xE9 d'API" } },
    "anthropicModelsLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mod\xE8les activ\xE9s" } },
    "anthropicModelsDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Fournissez une liste de [mod\xE8les Anthropic](https://docs.anthropic.com/en/docs/about-claude/models) s\xE9par\xE9s par des virgules que vous souhaitez utilis\xE9s dans Baserow. (e.g. `claude-3-5-sonnet-20241022,claude-3-opus-20240229`)" } },
    "mistral": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mistral" } },
    "mistralApiKeyLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cl\xE9 d'API" } },
    "mistralApiKeyDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Fournissez une cl\xE9 API Mistral si vous souhaitez activer l'int\xE9gration. [Instructions sur l'obtention d'une cl\xE9 API](https://docs.mistral.ai/getting-started/quickstart/)." } },
    "mistralModelsLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mod\xE8les activ\xE9s" } },
    "mistralModelsDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Fournissez une liste de [mod\xE8les Mistral] (https://docs.mistral.ai/getting-started/models/models_overview/) s\xE9par\xE9s par des virgules qui vous souhaitez utiliser dans Baserow. (par exemple\xA0: `mistral-large-latest,mistral-small-latest`)" } },
    "anthropic": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Anthropic" } },
    "anthropicApiKeyDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Fournissez une cl\xE9 API Anthropic si vous souhaitez activer l'int\xE9gration. [Instructions sur l'obtention d'une cl\xE9 API](https://docs.anthropic.com/en/api/getting-started)." } },
    "openRouterModelsLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mod\xE8les activ\xE9s" } },
    "openRouter": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "OpenRouter" } },
    "openRouterModelsDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Fournissez une liste de [mod\xE8les OpenRouter](https://openrouter.ai/models) s\xE9par\xE9s par des virgules qui peuvent \xEAtre utilis\xE9s dans Baserow. (par exemple `openai/gpt-4o,anthropic/claude-3-haiku`)" } },
    "openRouterApiKeyDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Fournissez une cl\xE9 API OpenRouter si vous souhaitez activer l'int\xE9gration. [Obtenir une cl\xE9 API](https://openrouter.ai/settings/keys)." } },
    "openRouterApiKeyLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cl\xE9 API" } },
    "openRouterOrganization": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Organisation (facultatif)" } },
    "openaiBaseUrl": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "URL de base" } },
    "openaiBaseUrlDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Utilise l'URL de base OpenAI par d\xE9faut si elle est vide. Elle peut \xEAtre remplac\xE9e par https://eu.api.openai.com/v1, https://&lt;votre-nom-de-ressource&gt;.openai.azure.com, ou toute autre API compatible avec OpenAI." } }
  },
  "generativeAIWorkspaceSettings": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Param\xE8tres de l'IA g\xE9n\xE9rative" } },
    "changedTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Les param\xE8tres ont \xE9t\xE9 mis \xE0 jour" } },
    "changedDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Les param\xE8tres ont \xE9t\xE9 mis \xE0 jour et seront d\xE9sormais utilis\xE9s dans ce Projet." } },
    "submitButton": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Enregistrer" } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ces param\xE8tres peuvent \xEAtre utilis\xE9s pour d\xE9finir la configuration de l'IA g\xE9n\xE9rative au niveau da Projet. Des fonctionnalit\xE9s telles que le champ IA peuvent \xEAtre d\xE9sactiv\xE9es parce qu'elles ne disposent pas d'une cl\xE9 API pour l'un des mod\xE8les pris en charge. En fournissant les param\xE8tres ici, vous pouvez activer ces fonctionnalit\xE9s. Si vous laissez une valeur vide, les param\xE8tres globaux de l'instance sont r\xE9tablis par d\xE9faut. Notez que tous les utilisateurs du Projet partageront ces param\xE8tres." } },
    "openSettings": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ouvrir la configuration" } },
    "hideSettings": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Fermer" } }
  },
  "dashboardVerifyEmail": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Veuillez v\xE9rifier votre bo\xEEte aux lettres et cliquer sur le lien pour v\xE9rifier votre adresse \xE9lectronique." } },
    "resendConfirmationEmail": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Renvoyer le courriel de confirmation" } }
  },
  "resendEmailVerification": {
    "confirmationEmailSentTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Courriel de confirmation envoy\xE9" } },
    "confirmationEmailSentDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Le courriel de confirmation a \xE9t\xE9 envoy\xE9." } }
  },
  "verifyEmailAddress": {
    "disabledPasswordProvider": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Le fournisseur d'authentification par mot de passe a \xE9t\xE9 d\xE9sactiv\xE9." } },
    "confirmation": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Votre adresse \xE9lectronique a \xE9t\xE9 v\xE9rifi\xE9e." } },
    "goToDashboard": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aller \xE0 l'accueil" } },
    "invalidToken": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Le jeton de confirmation n'est pas valide." } },
    "emailMismatchWarning": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Veuillez noter que l'adresse \xE9lectronique v\xE9rifi\xE9e n'appartient pas au compte que vous utilisez actuellement." } }
  },
  "emailNotVerified": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "V\xE9rification de l'adresse \xE9lectronique requise" } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Veuillez consulter votre bo\xEEte aux lettres et cliquer sur le lien de v\xE9rification. Une fois v\xE9rifi\xE9, votre compte sera activ\xE9." } },
    "resend": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Renvoyer le courriel de confirmation" } }
  },
  "inviteStep": {
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Vous pouvez toujours en ajouter plus tard." } },
    "collaboratorsLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Collaborateurs" } },
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Inviter des collaborateurs" } }
  },
  "moreStep": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dites-nous en un peu plus" } },
    "roleOrJob": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "R\xF4le ou titre du poste..." } },
    "people": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Combien de personnes composent votre \xE9quipe\u202F?" } },
    "share": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Je suis d'accord pour partager ceci avec l'\xE9quipe de Baserow" } },
    "country": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pays" } },
    "how": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Comment avez-vous entendu parler de nous\u202F?" } },
    "howSearchEngine": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Moteur de recherche (Google/Bing)" } },
    "howSocialMedia": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "M\xE9dias sociaux" } },
    "howOnlineAds": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Annonces en ligne" } },
    "howContent": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Contenu (blog/newsletter/video)" } },
    "howReviewSite": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Site sp\xE9cialis\xE9 / marketplace" } },
    "howFriend": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "D'un ami" } },
    "howColleague": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "D'un coll\xE8gue" } },
    "howEvent": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\xC9v\xE9nement ou webinaire" } },
    "howSales": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Lors d'une promotion" } },
    "howOther": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Autre" } }
  },
  "teamStep": {
    "marketingTeam": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Marketing" } },
    "productAndDesignTeam": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Produit & Design" } },
    "itAndSupportTeam": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Informatique & Support" } },
    "hrAndLegalTeam": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "RH & Juridique" } },
    "financeTeam": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Finance" } },
    "creativeProductionTeam": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Production cr\xE9ative" } },
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Configurons ensemble votre premier Projet\u202F!" } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\xC0 quelle \xE9quipe appartenez-vous\u202F?" } },
    "engineeringTeam": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ing\xE9nieur" } },
    "operationsTeam": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Op\xE9rations" } },
    "salesAndAccountManagementTeam": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ventes et gestion des comptes" } },
    "customerServiceTeam": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Service client\xE8le" } },
    "manufacturingTeam": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Industrie" } },
    "otherPersonalTeam": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Autre / Personnel" } }
  },
  "onboarding": {
    "skip": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ignorer pour le moment" } },
    "failedTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Une erreur est survenue" } },
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Assistant de configuration" } },
    "creating": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cr\xE9ation de votre premier projet" } },
    "continue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Continuer" } },
    "cancel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Je ne souhaite pas d'aide pour la configuration" } },
    "failedDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "La configuration n'est pas totalement termin\xE9es, cependant certaines parties ont pu \xEAtre compl\xE9t\xE9es." } },
    "failedTryAgain": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "R\xE9essayer" } },
    "failedSkip": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Passer l'Assistant de configuration" } }
  },
  "selectAIModelForm": {
    "AIType": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Type d'IA" } },
    "AIModel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mod\xE8le d'IA" } },
    "fileField": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Champ de fichier" } },
    "temperatureLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Temp\xE9rature" } },
    "temperatureDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "La temp\xE9rature d'un LLM, un param\xE8tre d\xE9fini entre 0 et " }, { "t": 4, "k": "max" }, { "t": 3, "v": ", ajuste le caract\xE8re al\xE9atoire des r\xE9ponses - les valeurs les plus basses donnent des r\xE9ponses cibl\xE9es, tandis que les valeurs les plus \xE9lev\xE9es augmentent la cr\xE9ativit\xE9." }] } }
  },
  "workspaceStep": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cr\xE9ez votre Projet" } },
    "workspaceLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nom du projet" } }
  },
  "colorInput": {
    "default": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "D\xE9faut" } }
  },
  "imageInput": {
    "labelDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "S\xE9lectionnez une image..." } },
    "labelButton": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Envoyer" } }
  },
  "dataExplorerNode": {
    "showMore": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Afficher plus de r\xE9p\xE9titions" } },
    "selectNode": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "S\xE9lectionner" } }
  },
  "dashboardApplication": {
    "createdAt": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "cr\xE9\xE9(e)" } }
  },
  "templateCard": {
    "viewMore": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Voir plus" } }
  },
  "exportWorkspaceModal": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Exporter" } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Vos donn\xE9es seront export\xE9es sous la forme d'un fichier ZIP, qui pourra \xEAtre import\xE9 dans d'autres instances de Baserow." } },
    "exportSettings": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Param\xE8tres d'exportation" } },
    "export": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Exporter" } },
    "reset": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nouvel export" } },
    "cancel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Annuler" } },
    "download": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "T\xE9l\xE9charger" } },
    "noExports": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Il n'y a pas d'export pour ce projet." } },
    "created": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cr\xE9\xE9 le" } },
    "importingState": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Import en cours" } },
    "exportingState": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Export en cours..." } },
    "exportingTableState": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Export en cours\xA0: " }, { "t": 4, "k": "table" }] } },
    "exportingCreateArchiveState": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cr\xE9ation de l'archive" } }
  },
  "exportWorkspaceForm": {
    "onlyStructureLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Exporter uniquement la structure" } },
    "exportSettingsLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Param\xE8tres d'exportation" } },
    "onlyStructureDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Si cette option est activ\xE9e, seule la structure des applications sera export\xE9e. Les donn\xE9es ne seront pas incluses." } },
    "selectDataToExport": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "S\xE9lectionnez les donn\xE9es \xE0 exporter" } },
    "selectAll": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tout s\xE9lectionner" } },
    "deselectAll": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tout d\xE9s\xE9lectionner" } }
  },
  "importWorkspaceModal": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Importer des donn\xE9es" } },
    "upload": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Envoyer" } },
    "cancel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Annuler" } },
    "close": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Fermer" } },
    "retry": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "R\xE9essayer" } },
    "uploading": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "envoi\u2026" } },
    "chooseFile": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Choisir un fichier" } },
    "selectApplications": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "S\xE9lectionner les donn\xE9es \xE0 importer" } },
    "deselectAll": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "D\xE9s\xE9lectionner tout" } },
    "selectAll": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "S\xE9lectionner tout" } },
    "applications": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Applications" } },
    "successTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "L'importation des donn\xE9es est r\xE9ussie" } },
    "successMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "count" }, { "t": 3, "v": " applications import\xE9es" }] } },
    "signatureVerificationNote": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Il n'est pas possible d'importer un fichier zip \xE0 partir d'une source non fiable." } },
    "invalidResourceTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ressource invalide" } },
    "invalidResourceMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Le fichier fourni n'est pas une exportation Baserow valide." } },
    "untrustedPublicKeyTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Signature inconnue" } },
    "untrustedPublicKeyMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Le fichier fourni est sign\xE9 avec une cl\xE9 publique non approuv\xE9e. Demandez \xE0 votre administrateur d'ajouter la cl\xE9 publique \xE0 la liste des cl\xE9s de confiance ou de d\xE9sactiver la v\xE9rification de la signature pour pouvoir importer ce fichier." } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Vous pouvez importer des donn\xE9es Baserow existantes en t\xE9l\xE9chargeant le fichier .zip d'une autre instance Baserow." } },
    "import": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Importer" } },
    "done": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Valider" } },
    "databases": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Bases de donn\xE9es" } },
    "importingState": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Import en cours..." } },
    "importingTableStructure": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Cr\xE9ation en cours\xA0: " }, { "t": 4, "k": "table" }] } },
    "importingTableData": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Import en cours\xA0: " }, { "t": 4, "k": "table" }] } },
    "uploadAndImport": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "T\xE9l\xE9charger et importer" } }
  },
  "user": {
    "isStaff": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Est collaborateur" } },
    "isWorkspaceAdmin": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Est l'administrateur du projet" } },
    "active": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Actif" } },
    "deactivated": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Inactif" } }
  },
  "adminType": {
    "dashboard": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Statistiques" } },
    "users": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Utilisateurs" } },
    "workspaces": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Projets" } }
  },
  "workspacesAdminTable": {
    "allWorkspaces": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Liste des projets" } },
    "id": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "ID" } },
    "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nom" } },
    "members": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Membres" } },
    "applications": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Applications" } },
    "created": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cr\xE9\xE9 le" } },
    "seatsTaken": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Places occup\xE9es" } },
    "storageUsage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Stockage utilis\xE9 (Mo)" } },
    "rowCount": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nombre de lignes" } },
    "freeUsers": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Utilisateurs gratuits" } },
    "usageHelpText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Calcul\xE9 chaque nuit lorsque le param\xE8tre de suivi de l'utilisation des projets est activ\xE9" } }
  },
  "editWorkspaceContext": {
    "delete": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Supprimer d\xE9finitivement" } }
  },
  "deleteWorkspaceModal": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Supprimer " }, { "t": 4, "k": "name" }] } },
    "confirmation": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "\xCAtes-vous s\xFBr\xB7e de vouloir supprimer le projet : " }, { "t": 4, "k": "name" }, { "t": 3, "v": " ?" }] } },
    "comment": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Le projet va \xEAtre supprim\xE9 d\xE9finitivement ainsi que ses applications li\xE9es. Il est impossible d'annuler cette action." } },
    "delete": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Supprimer le projet " }, { "t": 4, "k": "name" }] } }
  },
  "activeUsers": {
    "newUsers": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nouveaux utilisateurs" } },
    "activeUsers": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Utilisateurs actifs" } }
  },
  "usersAdminTable": {
    "allUsers": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Liste des utilisateurs" } },
    "id": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "ID" } },
    "username": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Identifiant" } },
    "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nom" } },
    "workspaces": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Projets" } },
    "lastLogin": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Derni\xE8re connexion" } },
    "dateJoined": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Date d'inscription" } },
    "active": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Actif" } },
    "twoFactorAuth": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Authentification \xE0 deux facteurs (2FA)" } }
  },
  "editUserContext": {
    "changePassword": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Modifier le mot de passe" } },
    "delete": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Supprimer d\xE9finitivement" } },
    "impersonate": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Usurper" } }
  },
  "changePasswordForm": {
    "newPassword": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nouveau mot de passe" } },
    "repeatPassword": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "R\xE9p\xE9tez le mot de passe" } },
    "changePassword": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mettre \xE0 jour le mot de passe" } },
    "error": {
      "doesntMatch": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Les deux mots de passe ne correspondent pas." } }
    }
  },
  "userForm": {
    "fullName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nom complet" } },
    "email": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Adresse \xE9lectronique" } },
    "isActive": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Est actif" } },
    "warning": {
      "changeEmail": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Si vous changez l'adresse \xE9lectronique, l'utilisateur devra d\xE9sormais utiliser celle-ci pour s'identifier. Ceci doit \xEAtre signifi\xE9 \xE0 l'utilisateur." } },
      "inactiveUser": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Un utilisateur inactif n'est plus en mesure de s'identifier." } },
      "userStaff": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Un collaborateur a acc\xE8s \xE0 la liste des utilisateurs, des projets et peut changer les permissions de tous les utilisateurs." } }
    },
    "error": {
      "invalidName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Veuillez saisir un nom valide, il doit \xEAtre compos\xE9 de plus de 2 caract\xE8res et moins de 150." } },
      "invalidEmail": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Veuillez saisir une adresse \xE9lectronique valide." } }
    },
    "twoFactorAuth": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Authentification \xE0 deux facteurs" } },
    "removeTwoFactorAuth": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "D\xE9sactiver l'authentification \xE0 deux facteurs" } }
  },
  "changeUserPasswordModal": {
    "changePassword": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Changer le mot de passe pour " }, { "t": 4, "k": "username" }] } }
  },
  "deleteUserModal": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Supprimer " }, { "t": 4, "k": "username" }] } },
    "confirmation": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "\xCAtes-vous s\xFBr\xB7e de vouloir supprimer l'utilisateur : " }, { "t": 4, "k": "name" }, { "t": 3, "v": " ?" }] } },
    "comment1": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Le compte de l'utilisateur va \xEAtre supprim\xE9, cependant les projets dont l'utilisateur est membre vont continuer d'exister. Ces projets ne seront pas supprim\xE9s m\xEAme si cet utilisateur est le dernier utilisateur du projet. Supprimer le dernier utilisateur d'un projet interdit \xE0 quiconque d'y acc\xE9der de nouveau." } },
    "comment2": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Apr\xE8s avoir supprim\xE9 un utilisateur, il sera possible de cr\xE9er un nouveau compte avec la m\xEAme adresse email. Si vous souhaitez \xE9viter que l'utilisateur puisse se connecter avec cette adresse, vous pouvez d\xE9sactiver l'utilisateur plut\xF4t que supprimer son compte." } },
    "delete": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Supprimer l'utilisateur " }, { "t": 4, "k": "username" }] } }
  },
  "editUserModal": {
    "delete": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Supprimer l'utilisateur" } },
    "edit": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Modifier " }, { "t": 4, "k": "username" }] } }
  },
  "adminDashboard": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Statistiques" } },
    "totals": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "R\xE9sum\xE9" } },
    "totalUsers": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nombre d'utilisateur" } },
    "totalWorkspaces": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nombre de projet" } },
    "totalApplications": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nombre d'application" } },
    "newUsers": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nouveaux utilisateurs" } },
    "newUsers24h": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sur les derni\xE8res 24h" } },
    "newUsers7days": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "sur les 7 derniers jours" } },
    "newUsers30days": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sur les 30 derniers jours" } },
    "activeUsers": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Utilisateurs actifs" } },
    "activeUsers24h": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sur les derni\xE8res 24h" } },
    "activeUsers7days": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "sur les 7 derniers jours" } },
    "activeUsers30days": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sur les 30 derniers jours" } },
    "viewAll": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Consulter" } }
  },
  "formGroup": {
    "cancelProtectedField": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Annuler la modification" } },
    "protectedField": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ce champ est prot\xE9g\xE9. Cliquez pour changer." } }
  },
  "userSourceType": {
    "userCountSummary": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "count" }, { "t": 3, "v": " utilisateurs (" }, { "t": 4, "k": "lastUpdated" }, { "t": 3, "v": ")" }] } }
  },
  "colorPickerContext": {
    "pickColorPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ou choisir une couleur pr\xE9d\xE9finie" } }
  },
  "guidedTourStep": {
    "step": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "step" }, { "t": 3, "v": " sur " }, { "t": 4, "k": "totalSteps" }] } },
    "gotIt": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Compris" } },
    "next": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Suivant" } },
    "back": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Retour" } }
  },
  "welcomeGuidedTourStep": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Bienvenue sur Baserow" } },
    "buttonText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "D\xE9marrer la visite" } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Faisons une visite rapide pour vous familiariser avec les principes de base. En quelques clics, vous apprendrez \xE0 organiser et \xE0 visualiser vos donn\xE9es sans effort" } }
  },
  "controlCenterGuidedTourStep": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Votre centre de contr\xF4le Baserow" } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "La barre lat\xE9rale gauche vous aide \xE0 g\xE9rer votre Projet\xA0:\n\n- Accueil - Acc\xE9dez \xE0 votre tableau de bord principal.\n- Notifications - Restez inform\xE9 des modifications et des mentions.\n- Inviter des membres - Collaborez en ajoutant des membres \xE0 votre \xE9quipe.\n- Corbeille - Listez et r\xE9cup\xE9rez tous vos \xE9l\xE9ments supprim\xE9s." } }
  },
  "createNewGuidedTourStep": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cr\xE9er une nouvelle base de donn\xE9es ou une nouvelle application" } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": 'Cliquez sur "Ajouter..." pour cr\xE9er une nouvelle base de donn\xE9es, une nouvelle application ou un nouveau tableau de bord pour votre projet, votre service ou votre \xE9quipe.' } }
  },
  "mcpEndpointSettings": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Serveur MCP" } },
    "createNewTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cr\xE9er un endpoint pour serveur MCP" } },
    "backToOverview": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Retour" } },
    "createEndpoint": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cr\xE9er un endpoint" } },
    "noEndpointsMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aucun endpoint pour serveur MCP (Model Context Protocol) n'a \xE9t\xE9 ajout\xE9. Ceux-ci peuvent \xEAtre utilis\xE9s pour int\xE9grer directement un LLM comme Claude, et permettre au LLM d'effectuer des actions directement dans Baserow. Cr\xE9ez un endpoint de serveur pour commencer." } }
  },
  "mcpEndpointForm": {
    "nameLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nom" } },
    "workspaceLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Projet" } }
  },
  "mcpEndpoint": {
    "detailLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Plus d'informations" } },
    "reveal": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "R\xE9v\xE9ler l'URL compl\xE8te" } },
    "warning": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Consid\xE9rez votre URL MCP comme un mot de passe, car il permet de modifier les donn\xE9es dans Baserow." } },
    "claudeInstructions": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": 'Trois \xE9tapes simples pour d\xE9marrer avec Claude Desktop et le MCP de Baserow.\n\n1. Ouvrez les param\xE8tres de Claude Desktop \xE0 partir de la barre de navigation (\u2318+,).\n1. Allez dans l\'onglet "Develop", et cliquez sur "Edit Config".\n1. Inclure la configuration JSON suivante dans `claude_desktop_config.json`.' } },
    "endpointURLIntro": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "L'URL du serveur MCP (Model Context Protocol) peut \xEAtre ajout\xE9e \xE0 tout client qui prend en charge les serveurs MCP. Il s'agit d'un endpoint unique qui donne au LLM un acc\xE8s direct pour effectuer des actions dans l'espace de travail en votre nom." } },
    "cursorInstructions": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": `Trois \xE9tapes simples pour d\xE9marrer avec Cursor et le MCP de Baserow.

1. Ouvrir les param\xE8tres de Cursor (\u21E7+\u2318+J)
1. Naviguez vers l'onglet "MCP" et cliquez sur "Add MCP Server"
1. Ajouter la configuration JSON suivante.` } },
    "windsurfInstructions": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Deux \xE9tapes faciles pour configurer MCP avec Cascase en Windsurf.\n\n1. Naviguez vers Windsurf - Settings -> Advanced Settings ou Command Palette -> Open Windsurf settings page.\n1. Descendez jusqu'\xE0 la section Cascade et vous trouverez l'option pour ajouter un nouveau serveur, pour voir les serveurs existants, et un bouton pour voir le fichier de configuration JSON brut `mcp_config.json`. Ajoutez-y ce qui suit\xA0:" } }
  },
  "importWorkspaceForm": {
    "selectApplicationsToImport": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "S\xE9lectionnez les applications \xE0 importer" } }
  },
  "workspaceSearch": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Recherche" } },
    "searchEverything": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Recherche..." } },
    "searching": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Recherche en cours..." } },
    "welcome": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Recherchez ce que vous souhaitez dans votre projet" } },
    "welcomeSubtitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Utilisez le champ de recherche ci-dessus pour trouver des applications, des tables, des champs, etc." } },
    "navigate": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Voir" } },
    "select": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "S\xE9lectionner" } },
    "close": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Fermer" } },
    "types": {
      "applications": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Applications" } },
      "tables": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tables" } },
      "fields": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Colonnes" } },
      "rows": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Lignes" } }
    },
    "noResults": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aucun r\xE9sultat trouv\xE9" } },
    "noResultsSubtitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": 'Aucun r\xE9sultat correspondant \xE0 "' }, { "t": 4, "k": "searchTerm" }, { "t": 3, "v": '"' }] } },
    "empty": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "(vide)" } }
  },
  "action": {
    "cancel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Annuler" } },
    "submit": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Valider" } }
  },
  "disableTwoFactorAuth": {
    "successTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "L'authentification \xE0 deux facteurs a \xE9t\xE9 d\xE9sactiv\xE9e" } },
    "errorWrongPasswordTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mot de passe erron\xE9" } },
    "errorWrongPasswordMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Le mot de passe saisi ne correspond pas \xE0 votre mot de passe." } },
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\xCAtes-vous s\xFBr\u2011e de vouloir d\xE9sactiver 2FA\u202F?" } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Votre compte va perdre une couche suppl\xE9mentaire de s\xE9curit\xE9. Si quelqu'un d\xE9couvre votre mot de passe, ils pourraient \xEAtre en mesure de se connecter \xE0 votre compte." } },
    "cancel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Annuler" } },
    "disable": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "D\xE9sactiver" } }
  },
  "enableTwoFactorOptions": {
    "cancel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Annuler" } },
    "continue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Continuer" } }
  },
  "saveBackupCode": {
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Si vous perdez l'acc\xE8s \xE0 votre application d'authentification ou \xE0 votre t\xE9l\xE9phone et que vous ne pouvez pas recevoir ou g\xE9n\xE9rer des codes d'authentification, vous pouvez utiliser cette sauvegarde. Vous ne pouvez l'utiliser qu'une seule fois. Veillez \xE0 le noter ou \xE0 le copier dans un endroit s\xFBr afin de pouvoir y acc\xE9der sans vous connecter." } },
    "backupCodes": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Codes de secours" } },
    "copy": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Copier" } },
    "continue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Continuer" } },
    "backupCodesCopiedTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Copi\xE9\u202F!" } },
    "backupCodesCopiedMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Codes de secours copi\xE9s dans le presse-papiers." } }
  },
  "totpAuthType": {
    "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "App d'authentification" } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Utilisez une application pour obtenir des codes d'authentification \xE0 deux facteurs. Vous pouvez, par exemple, utiliser des applications telles que Google Authenticator, Authy et Microsoft Authenticator." } },
    "enabledDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Vous recevrez des codes de v\xE9rification via une application d'authentification. Pour configurer une autre application ou m\xE9thode, il vous suffit de d\xE9sactiver l'option 2FA et de la configurer \xE0 nouveau." } },
    "sideLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Recommand\xE9" } }
  },
  "twoFactorEnabled": {
    "enabled": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Activ\xE9" } },
    "disable": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "D\xE9sactiver 2FA" } }
  },
  "totpLogin": {
    "backupCodesTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Saisir le code de secours" } },
    "backupCodesDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Connectez-vous avec votre code de secours \xE0 usage unique." } },
    "authenticate": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "S'authentifier" } },
    "goBack": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Retour" } },
    "totpTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Authentification \xE0 deux facteurs" } },
    "totpDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Saisissez le code de votre application d'authentification." } },
    "verify": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "V\xE9rifier" } },
    "useBackupCode": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Utiliser le code de secours" } },
    "verificationFailed": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\xC9chec de la v\xE9rification" } },
    "verificationFailedDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Le code saisie n'est pas correct." } },
    "loginExpired": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Connexion expir\xE9e" } },
    "loginExpiredDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Veuillez indiquer de nouveau votre mot de passe." } },
    "rateLimit": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Trop de tentatives." } }
  },
  "formulaInputContext": {
    "variables": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Variables" } },
    "functions": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Fonctions" } },
    "operators": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Op\xE9rateurs" } },
    "search": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Recherche" } },
    "useRegularInputModalTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Utiliser une formule simple\u202F?" } },
    "useRegularInput": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Utiliser une formule simple" } },
    "useAdvancedInput": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Utiliser le mode expert" } },
    "useAdvancedInputModalTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Utiliser le mode expert\u202F?" } },
    "modalMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Le passage \xE0 un mode diff\xE9rent supprimera la formule actuelle. \xCAtes-vous s\xFBr\xAD\xB7e de vouloir continuer\u202F?" } },
    "useSimpleInput": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Retourner en Mode basique" } },
    "useSimpleInputModalTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Retourner en mode basique\u202F?" } }
  },
  "twoFactorAuthSettings": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Authentification \xE0 deux facteurs" } },
    "loadingError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Impossible de charger la configuration de l'authentification \xE0 deux facteurs." } }
  },
  "coreHTTPTriggerServiceForm": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "URL du webhook" } },
    "urlVersion": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Version" } },
    "urlVersionPublished": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Public" } },
    "urlVersionTest": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Test" } },
    "copyUrl": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Copier l'URL du Webhook" } },
    "urlCopied": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "URL du webhook copi\xE9e dans le presse-papiers" } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ce webhook recevra des requ\xEAtes HTTP et d\xE9clenchera le sc\xE9nario avec les donn\xE9es de la requ\xEAte comme payload." } },
    "methodsOptionLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "M\xE9thodes HTTP autoris\xE9es" } },
    "methodsOptionDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Contr\xF4le les m\xE9thodes HTTP autoris\xE9es pour ce webhook. L'exclusion de GET r\xE9duit le risque de d\xE9clenchement accidentel du webhook." } },
    "methodsOptionAll": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Toutes" } },
    "methodsOptionExcludeGet": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Exclure GET" } }
  },
  "twoFactorAuthEmpty": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Vous n'avez pas encore activ\xE9 2FA" } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ajoutez une couche de s\xE9curit\xE9 suppl\xE9mentaire \xE0 votre compte." } },
    "enable": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Activer 2FA" } },
    "notAllowedTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "2FA non activ\xE9" } },
    "notAllowedDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "L'ajout de 2FA n'est possible que pour les comptes bas\xE9s sur un mot de passe." } }
  },
  "nodeHelpTooltip": {
    "exampleLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Exemple" } },
    "result": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "R\xE9sultat\xA0: " }, { "t": 4, "k": "result" }] } }
  },
  "enableWithQRCode": {
    "scanQRCode": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Scanner un QR code" } },
    "scanQRCodeDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Scannez le code avec une application comme Google Authenticator, Authy ou Microsoft Authenticator." } },
    "clickToCopy": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Vous pouvez \xE9galement cliquer ici pour copier le code." } },
    "secretCopiedTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Secret copi\xE9" } },
    "secretCopiedMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Secret TOTP copi\xE9 dans le presse-papiers." } },
    "enterCode": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Entrez le code indiqu\xE9" } },
    "enterCodeDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Saisissez un code \xE0 6 chiffres affich\xE9 par l'application pour confirmer que vous l'avez configur\xE9 correctement." } },
    "verificationFailed": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\xC9chec de la v\xE9rification" } },
    "verificationFailedDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Le code saisi n'est pas valide." } },
    "provisioningFailed": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\xC9chec du provisionnement" } },
    "checkSuccess": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "L'authentification \xE0 deux facteurs a \xE9t\xE9 activ\xE9e avec succ\xE8s" } }
  },
  "twoFactorAuthField": {
    "enabled": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Activ\xE9" } },
    "disabled": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "D\xE9sactiv\xE9" } }
  },
  "emailSettings": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Modifier l'adresse courriel" } },
    "successTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Courriel de confirmation envoy\xE9" } },
    "successDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nous avons envoy\xE9 un courriel de confirmation \xE0 votre nouvelle adresse. Veuillez v\xE9rifier votre bo\xEEte de r\xE9ception et cliquer sur le lien pour compl\xE9ter le changement d'adresse." } },
    "currentEmailLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Adresse courriel actuelle" } },
    "newEmailLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nouvelle adresse courriel" } },
    "passwordLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mot de passe actuel" } },
    "submitButton": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Envoyer le courriel de confirmation" } },
    "errorInvalidPasswordTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mot de passe invalide" } },
    "errorInvalidPasswordMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Vous ne pouvez pas demander de changement d'adresse courriel car votre mot de passe est incorrect." } },
    "errorEmailExistsTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Courriel existant" } },
    "errorEmailExistsMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Il n'est pas possible de demander le changement d'adresse courriel parce qu'un compte avec cette adresse existe d\xE9j\xE0." } },
    "errorNotAllowedTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Changement de courriel non autoris\xE9" } },
    "errorNotAllowedMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Vous ne pouvez pas modifier votre adresse courriel car votre compte utilise une authentification unique (SSO)." } }
  },
  "changeEmail": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Confirmer le changement de courriel" } },
    "submit": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Confirmer le changement" } },
    "changed": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Adresse courriel modifi\xE9e" } },
    "message": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Votre adresse courriel a \xE9t\xE9 modifi\xE9e avec succ\xE8s. Vous pouvez maintenant vous connecter \xE0 Baserow en utilisant votre nouvelle adresse." } },
    "errorInvalidLinkTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Lien invalide" } },
    "errorInvalidLinkMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Impossible de changer l'adresse courriel car le lien est invalide." } },
    "errorLinkExpiredTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Lien expir\xE9" } },
    "errorLinkExpiredMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Le lien de changement de courriel a expir\xE9. Veuillez en g\xE9n\xE9rer un nouveau dans les param\xE8tres de votre compte." } },
    "errorEmailExistsTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Le courriel existe d\xE9j\xE0" } },
    "errorEmailExistsMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Impossible de changer l'adresse courriel car un compte avec cette adresse existe d\xE9j\xE2." } },
    "errorEmailAlreadyChangedTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Courriel d\xE9j\xE0 chang\xE9" } },
    "errorEmailAlreadyChangedMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "L'adresse courriel a d\xE9j\xE0 \xE9t\xE9 remplac\xE9e par l'adresse demand\xE9e." } }
  },
  "adminUsers": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Utilisateurs" } }
  },
  "adminWorkspaces": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Projets" } }
  },
  "formulaInputErrorContext": {
    "viewFullError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Afficher l'erreur compl\xE8te" } }
  },
  "formulaInputExplorerContext": {
    "variables": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Variables" } },
    "functions": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Fonctions" } },
    "operators": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Op\xE9rateurs" } },
    "search": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Recherche" } },
    "useRegularInputModalTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Utiliser la saisie simple pour ce champ\u202F?" } },
    "useSimpleInput": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Passer en mode simple" } },
    "useSimpleInputModalTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Passer en mode simple\u202F?" } },
    "useAdvancedInput": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Passer en mode expert" } },
    "useAdvancedInputModalTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Passer en mode expert\u202F?" } },
    "modalMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Si vous passez \xE0 un autre mode, la formule actuelle sera effac\xE9e. Voulez-vous vraiment continuer\u202F?" } }
  },
  "formulaParserErrors": {
    "invalidArgCountMin": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "La fonction \xAB " }, { "t": 4, "k": "funcType" }, { "t": 3, "v": " \xBB n\xE9cessite au moins " }, { "t": 4, "k": "minArgs" }, { "t": 3, "v": " arguments." }] } },
    "invalidArgCountExact": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "La fonction \xAB " }, { "t": 4, "k": "funcType" }, { "t": 3, "v": " \xBB attend exactement " }, { "t": 4, "k": "minArgs" }, { "t": 3, "v": " arguments." }] } },
    "invalidArgCountRange": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "La fonction \xAB " }, { "t": 4, "k": "funcType" }, { "t": 3, "v": " \xBB attend entre " }, { "t": 4, "k": "minArgs" }, { "t": 3, "v": " et " }, { "t": 4, "k": "maxArgs" }, { "t": 3, "v": " arguments." }] } },
    "invalidArgumentType": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "\xAB " }, { "t": 4, "k": "value" }, { "t": 3, "v": " \xBB n'est pas un argument valide pour la fonction \xAB " }, { "t": 4, "k": "funcType" }, { "t": 3, "v": " \xBB." }] } }
  },
  "sampleDataViewer": {
    "payloadLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "R\xE9sultat" } },
    "errorLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Une erreur s'est produite..." } },
    "showPayloadLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Afficher la donn\xE9e" } },
    "showErrorLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Afficher l'erreur" } },
    "downloadFullPayload": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "T\xE9l\xE9charger la donn\xE9e compl\xE8te" } },
    "truncatedLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "[Sortie tronqu\xE9e]" } },
    "truncatedPayloadWarning": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Seuls les " }, { "t": 4, "k": "size" }, { "t": 3, "v": " premiers caract\xE8res sont affich\xE9s. T\xE9l\xE9chargez l'int\xE9gralit\xE9 de la donn\xE9e pour l'examiner sur votre ordinateur." }] } }
  },
  "workspaceOutdatedToast": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Trop de changements" } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Trop de modifications ont \xE9t\xE9 effectu\xE9es pendant votre absence. Actualisez la page pour afficher les donn\xE9es les plus r\xE9centes." } },
    "action": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Actualiser les donn\xE9es" } },
    "dismiss": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ignorer" } }
  },
  "disableTwoFactorAuthModal": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "D\xE9sactiver l'authentification \xE0 deux facteurs" } },
    "confirmation": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "\xCAtes-vous s\xFBr de vouloir d\xE9sactiver l'authentification \xE0 deux facteurs pour " }, { "t": 4, "k": "name" }, { "t": 3, "v": "\u202F?" }] } },
    "comment": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ils pourront se connecter en utilisant uniquement leur mot de passe, puis r\xE9activer l'authentification \xE0 deux facteurs par la suite." } },
    "remove": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "D\xE9sactiver l'authentification \xE0 deux facteurs" } }
  },
  "editWorkspace": {
    "invalidNameTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nom du projet non autoris\xE9" } }
  }
};

export { resource as default };
//# sourceMappingURL=fr-CMJxH0qD.mjs.map
