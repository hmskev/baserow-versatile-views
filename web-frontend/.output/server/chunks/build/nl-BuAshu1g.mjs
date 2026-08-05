!(function() {
  try {
    var e = false ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
    var n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "23af94ba-a7d9-4209-aeaf-6be5adcf63f4", e._sentryDebugIdIdentifier = "sentry-dbid-23af94ba-a7d9-4209-aeaf-6be5adcf63f4");
  } catch (e2) {
  }
})();
const resource = {
  "paginator": {
    "page": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "pagina" } },
    "of": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "van " }, { "t": 4, "k": "pages" }] } }
  },
  "copied": {
    "label": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Gekopieerd!" } }
  },
  "sidebarApplication": {
    "renameApplication": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Hernoem " }, { "t": 4, "k": "type" }] } },
    "viewTrash": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Bekijk Prullenbak" } },
    "deleteApplication": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Verwijder " }, { "t": 4, "k": "type" }] } },
    "duplicateApplication": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Dupliceer " }, { "t": 4, "k": "type" }] } },
    "snapshots": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Snapshots" } },
    "rename": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Hernoemen" } },
    "duplicate": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dupliceer" } },
    "delete": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Verwijder" } }
  },
  "sidebar": {
    "createWorkspace": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Werkruimte aanmaken" } },
    "inviteOthers": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nodig anderen uit" } },
    "logoff": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Afmelden" } },
    "errorNoWorkspace": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Je hebt geen werkruimtes." } },
    "admin": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Beheerder" } },
    "dashboard": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dashboard" } },
    "trash": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Prullenbak" } },
    "settings": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Instellingen" } },
    "members": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Leden" } },
    "notifications": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Meldingen" } },
    "general": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Algemeen" } },
    "home": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Home" } },
    "people": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Gebruikers" } },
    "addNewWorkspace": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nieuwe werkruimte toevoegen" } },
    "adminTools": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Beheerprogramma's" } },
    "adminSettings": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Beheerdersinstellingen" } },
    "licenses": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Licenties" } }
  },
  "accountForm": {
    "nameLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Je naam" } },
    "languageLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Taal van de interface" } }
  },
  "accountSettings": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Account" } },
    "changedTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Gewijzigd" } },
    "changedDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Je accountgegevens zijn gewijzigd." } },
    "submitButton": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Account bijwerken" } }
  },
  "settingsModal": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Instellingen" } }
  },
  "passwordSettings": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wachtwoord wijzigen" } },
    "changedTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wachtwoord gewijzigd" } },
    "changedDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Je wachtwoord is gewijzigd. De volgende keer dat je wilt inloggen, moet je het nieuwe wachtwoord gebruiken." } },
    "oldPasswordLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Oud wachtwoord" } },
    "oldPasswordRequiredError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Oud wachtwoord is een verplicht veld." } },
    "newPasswordLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nieuw wachtwoord" } },
    "repeatNewPasswordLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Herhaal nieuw wachtwoord" } },
    "repeatNewPasswordMatchError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dit veld moet overeenkomen met je nieuwe wachtwoordveld." } },
    "submitButton": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wachtwoord wijzigen" } },
    "errorInvalidOldPasswordTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ongeldig wachtwoord" } },
    "errorInvalidOldPasswordMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wachtwoord kon niet veranderd worden omdat je oude wachtwoord ongeldig is." } }
  },
  "error": {
    "alreadyExistsTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Gebruiker bestaat al" } },
    "alreadyExistsMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Er bestaat al een gebruiker met het opgegeven e-mailadres." } },
    "passwordRequired": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wachtwoord is een verplicht veld." } },
    "invalidEmail": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Voer een geldig e-mail adres in." } },
    "disabledAccountTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Account uitgeschakeld" } },
    "disabledAccountMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dit gebruikersaccount is uitgeschakeld." } },
    "incorrectCredentialTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Inloggegevens zijn niet correct" } },
    "incorrectCredentialMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Het opgegeven e-mailadres of wachtwoord is niet correct." } },
    "inputRequired": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dit is een verplicht veld." } },
    "disabledPasswordProviderTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wachtwoordverificatie is uitgeschakeld." } },
    "disabledPasswordProviderMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Gebruik een andere authenticatie provider." } },
    "captchaVerificationFailedTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "De Captcha-verificatie is mislukt" } },
    "captchaVerificationFailedMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "De captcha-verificatie is mislukt. Probeer het nog eens." } }
  },
  "field": {
    "language": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Taal" } },
    "emailAddress": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "E-mailadres" } },
    "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Je naam" } },
    "password": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wachtwoord" } },
    "passwordRepeat": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Herhaal wachtwoord" } }
  },
  "invitationTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Uitnodiging" } },
  "invitationMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "invitedBy" }, { "t": 3, "v": " heeft je uitgenodigd om lid te worden van " }, { "t": 4, "k": "workspace" }, { "t": 3, "v": "." }] } },
  "workspaceForm": {
    "nameLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Naam" } }
  },
  "leaveWorkspaceModal": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Verlaat " }, { "t": 4, "k": "workspace" }] } },
    "message": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Weet je zeker dat je de werkruimte " }, { "t": 4, "k": "workspace" }, { "t": 3, "v": " wilt verlaten? Je hebt dan geen toegang meer tot de relevante applicaties. Als je opnieuw toegang wilt krijgen, moet een van de beheerders je opnieuw uitnodigen. Als je de werkruimte verlaat, zal de werkruimte niet worden verwijderd. Alle andere leden zullen er nog steeds toegang toe hebben. Het is niet mogelijk om een werkruimte te verlaten als je de laatste beheerder bent, omdat deze dan niet meer wordt onderhouden." }] } },
    "leave": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Verlaat werkruimte" } }
  },
  "dashboardWorkspace": {
    "showMembers": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Leden" } },
    "createApplication": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nieuwe aanmaken" } }
  },
  "workspaceInvitation": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Uitnodiging" } },
    "message": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "by" }, { "t": 3, "v": " heeft je uitgenodigd om lid te worden van " }, { "t": 4, "k": "workspace" }, { "t": 3, "v": "." }] } },
    "reject": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Weigeren" } },
    "accept": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Accepteren" } }
  },
  "workspaceMemberModal": {
    "membersModalTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Leden van " }, { "t": 4, "k": "workspace" }] } },
    "userDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "user" }, { "t": 3, "v": " - lid geworden " }, { "t": 4, "k": "since" }, { "t": 3, "v": " geleden" }] } },
    "invitationDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "uitgenodigd " }, { "t": 4, "k": "since" }, { "t": 3, "v": " geleden" }] } },
    "sendInvite": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Uitnodiging versturen" } },
    "userAlreadyInWorkspaceTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Gebruiker zit al in de werkruimte." } },
    "userAlreadyInWorkspaceText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Het is niet mogelijk een uitnodiging te versturen als de gebruiker al lid is van de werkruimte." } },
    "userDescriptionPendingDeletion": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "user" }, { "t": 3, "v": " - in afwachting van verwijdering" }] } }
  },
  "workspaceInviteForm": {
    "invitationFormTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Uitnodigen per e-mail" } },
    "optionalMessagePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Optioneel bericht" } },
    "errorInvalidEmail": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Voer een geldig e-mail adres in." } },
    "errorTooLongMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Berichten zijn beperkt tot " }, { "t": 4, "k": "amount" }, { "t": 3, "v": " tekens." }] } },
    "additionalRoles": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Extra rollen" } }
  },
  "workspacesContext": {
    "search": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zoek werkruimtes" } },
    "noResults": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Geen resultaten gevonden" } },
    "createWorkspace": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Werkruimte aanmaken" } }
  },
  "workspaceContext": {
    "renameWorkspace": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Hernoem werkruimte" } },
    "members": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Leden" } },
    "viewTrash": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Bekijk Prullenbak" } },
    "leaveWorkspace": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Verlaat werkruimte" } },
    "deleteWorkspace": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "werkruimte verwijderen" } },
    "auditLog": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Audit log" } },
    "settings": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Instellingen" } },
    "importWorkspace": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Data importeren" } },
    "exportWorkspace": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Data exporteren" } }
  },
  "createWorkspaceModal": {
    "createNew": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nieuwe werkruimte aanmaken" } },
    "add": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "werkruimte toevoegen" } },
    "defaultName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Naamloze werkruimte" } },
    "permissionDeniedTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Toestemming geweigerd" } },
    "permissionDeniedBody": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "U heeft niet de vereiste rechten om een nieuwe werkruimte te maken." } }
  },
  "templateCategories": {
    "search": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zoek sjablonen" } },
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sjablonen" } }
  },
  "templateHeader": {
    "use": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Gebruik deze sjabloon" } }
  },
  "trashSidebar": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Prullenbak" } },
    "unnamedWorkspace": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Naamloze werkruimte " }, { "t": 4, "k": "id" }] } },
    "workspaces": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Werkruimtes" } }
  },
  "trashContents": {
    "message": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Herstel items verwijderd in de afgelopen " }, { "t": 4, "k": "duration" }] } },
    "empty": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Er is niets verwijderd in de afgelopen drie dagen." } },
    "emptyButtonTrashed": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Verwijder " }, { "t": 4, "k": "type" }, { "t": 3, "v": " permanent" }] } },
    "emptyButtonNotTrashed": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Leeg de Prullenbak van dit " }, { "t": 4, "k": "type" }] } },
    "unnamed": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Naamloos " }, { "t": 4, "k": "type" }, { "t": 3, "v": " " }, { "t": 4, "k": "id" }] } }
  },
  "trashEmptyModal": {
    "titleIsTrashed": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Weet je zeker dat je " }, { "t": 4, "k": "name" }, { "t": 3, "v": " permanent wilt verwijderen?" }] } },
    "titleIsNotTrashed": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Weet je zeker dat je de Prullenbak van " }, { "t": 4, "k": "name" }, { "t": 3, "v": " wilt legen?" }] } },
    "messageIsTrashed": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "De gehele inhoud van de prullenbak wordt permanent gewist. Dit kan niet ongedaan gemaakt of opgehaald worden." } },
    "messageIsNotTrashed": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dit zal de items lijst permanent verwijderen. Herstel of ophalen is dan niet meer mogelijk." } },
    "buttonIsTrashed": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Permanent verwijderen" } },
    "buttonIsNotTrashed": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Legen" } }
  },
  "trashEntry": {
    "deletedUser": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Een verwijderde gebruiker" } },
    "fromParent": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "van " }, { "t": 4, "k": "parent" }] } },
    "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "user" }, { "t": 3, "v": " heeft " }, { "t": 4, "k": "type" }, { "t": 3, "v": " " }, { "t": 4, "k": "title" }, { "t": 3, "v": " " }, { "t": 4, "k": "parent" }, { "t": 3, "v": " verwijderd" }] } },
    "restore": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Herstel" } },
    "unnamed": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Naamloos " }, { "t": 4, "k": "type" }, { "t": 3, "v": " " }, { "t": 4, "k": "id" }] } },
    "andMore": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "... en " }, { "t": 4, "k": "count" }, { "t": 3, "v": " meer" }] } }
  },
  "trashModal": {
    "emptyTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Geen werkruimtes gevonden" } },
    "emptyMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Je bent geen lid van een werkruimte. Toepassingen zoals databases horen bij een werkruimte, dus om die aan te maken moet je eerst een werkruimte maken." } },
    "emptyMessageWithoutCreatePermission": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Je bent geen lid van een werkruimte. Toepassingen zoals databases horen bij een werkruimte, dus om ze aan te maken moet je eerst door een beheerder bij een werkruimte worden uitgenodigd." } }
  },
  "uploadViaURLUserFileUpload": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Uploaden vanaf een URL" } },
    "urlLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "URL" } },
    "urlError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Een geldige URL is een verplicht veld." } }
  },
  "userFilesModal": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Uploaden van" } }
  },
  "uploadFileUserFileUpload": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Uploaden vanaf mijn apparaat" } },
    "drop": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Naar hier slepen" } },
    "clickOrDrop": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Klik of sleep je bestanden naar hier" } },
    "retry": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Opnieuw proberen" } }
  },
  "createApplicationContext": {
    "fromTemplate": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Van sjabloon" } },
    "table": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tabel" } },
    "tableDesc": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Maak een nieuwe plaats om gegevens in je database te beheren." } },
    "fromTemplateDesc": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Begin snel met een van onze aanbevolen templates" } },
    "importWorkspace": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Data importeren" } },
    "importWorkspaceDesc": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Bestaande gegevens van een Baserow instantie toevoegen." } }
  },
  "applicationForm": {
    "nameLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Naam" } },
    "namePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Voer de naam in..." } }
  },
  "connectingNotification": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Opnieuw verbinden" } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Opnieuw verbinding maken met de server." } }
  },
  "failedConnectingNotification": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mislukt" } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Verbinding met de server is mislukt. Vernieuw de pagina." } },
    "action": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pagina vernieuwen" } }
  },
  "restoreNotification": {
    "restore": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Herstel verwijderd " }, { "t": 4, "k": "type" }] } }
  },
  "errorLayout": {
    "notFound": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "We kunnen de pagina die je zoekt niet vinden. Misschien is de URL niet correct, of misschien heb je geen autorisatie om deze pagina te bekijken." } },
    "error": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Er is iets misgegaan tijdens het laden van de pagina. Onze ontwikkelaars zijn op de hoogte gebracht van het probleem. Probeer Vernieuwen of ga terug naar het dashboard." } },
    "backDashboard": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Terug naar dashboard" } },
    "backLogin": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Terug naar inloggen" } },
    "wrong": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Er is iets misgegaan" } },
    "refresh": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pagina vernieuwen" } }
  },
  "dashboard": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dashboard" } },
    "alertTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "We hebben je hulp nodig!" } },
    "alertText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Als je Baserow nuttig vindt, dan waarderen we het zeer als je ons wilt sponsoren, sterren wilt geven of ons met anderen wilt delen. Door ons te sponsoren op GitHub krijg je vroegtijdige toegang tot de premium functies!" } },
    "tweetContent": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }, { "t": 9 }, { "t": 3 }], "s": "Check @baserow, een open source no-code database tool en Airtable alternatief!" } },
    "redditTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "'Baserow - Een open source no-code database" } },
    "noWorkspaceTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Geen werkruimtes gevonden" } },
    "noWorkspaceText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Je bent geen lid van een werkruimte. Toepassingen zoals databases horen bij een werkruimte, dus om die te maken moet je eerst een werkruimte aanmaken." } },
    "createWorkspace": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Werkruimte aanmaken" } },
    "becomeGithubSponsor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Word een GitHub sponsor" } },
    "starOnGitlab": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Geef ons een ster op Gitlab" } },
    "shareOnTwitter": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tweet over Baserow" } },
    "shareOnReddit": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Deel op Reddit" } },
    "shareOnFacebook": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Deel op Facebook" } },
    "shareOnLinkedIn": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Deel op LinkedIn" } },
    "noWorkspaceTextWithoutCreatePermission": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Je bent geen lid van een werkruimte. Toepassingen zoals databases horen bij een werkruimte, dus om ze aan te maken moet je eerst door een beheerder bij een werkruimte worden uitgenodigd." } },
    "apiDocumentation": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "API-documentatie" } },
    "apiDocumentationMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Meer informatie over onze code" } },
    "emptyWorkspace": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Deze werkruimte is leeg" } },
    "noWorkspaceDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Begin met het maken van een nieuwe werkruimte" } },
    "suggestedTemplates": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Voorgestelde templates" } },
    "resources": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Bronnen" } },
    "knowledgeBase": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kennisbank" } },
    "knowledgeBaseMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Vind antwoorden op al je vragen" } },
    "tutorials": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tutorials" } },
    "tutorialsMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ontdek het potentieel van Baserow" } },
    "emptyWorkspaceMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Begin met het maken van een nieuwe database of applicatie." } },
    "addNew": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nieuwe toevoegen..." } },
    "noWorkspace": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Geen werkruimte" } },
    "starOnGitHub": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Geef een ster op GitHub" } }
  },
  "login": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Inloggen" } },
    "forgotPassword": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wachtwoord vergeten" } },
    "emailPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Voer je e-mailadres in.." } },
    "passwordPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Voer je wachtwoord in." } },
    "signUpText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Heb je geen account?" } },
    "signUp": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aanmelden" } },
    "displayPasswordLogin": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Inloggen met e-mail en wachtwoord" } },
    "redirecting": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Doorsturen naar authenticatie provider..." } }
  },
  "resetPassword": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wachtwoord resetten" } },
    "newPassword": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nieuw wachtwoord" } },
    "repeatNewPassword": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Herhaal nieuw wachtwoord" } },
    "submit": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wachtwoord wijzigen" } },
    "changed": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wachtwoord gewijzigd" } },
    "errorInvalidLinkTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ongeldige link" } },
    "errorInvalidLinkMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kon het wachtwoord niet resetten omdat de link ongeldig is." } },
    "errorLinkExpiredTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Link verlopen" } },
    "errorLinkExpiredMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "De link voor het resetten van je wachtwoord is verlopen. Vraag een nieuwe link aan." } },
    "disabled": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wachtwoord opnieuw instellen is uitgeschakeld" } },
    "disabledMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Het is niet mogelijk om het wachtwoord te resetten omdat het is uitgeschakeld." } },
    "message": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Je kunt nu inloggen op Baserow met je nieuwe wachtwoord." } },
    "repeatPasswordPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Herhaal je nieuwe wachtwoord" } },
    "errorLinkAlreadyUsedTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Link al gebruikt" } },
    "errorLinkAlreadyUsedMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Deze link om het wachtwoord te resetten is al gebruikt. Vraag een nieuwe aan." } }
  },
  "signup": {
    "headTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nieuw account aanmaken" } },
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aanmelden" } },
    "disabled": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aanmelden is uitgeschakeld" } },
    "disabledMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Het is niet mogelijk om een account aan te maken omdat het is uitgeschakeld." } },
    "requireFirstUser": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Welkom bij Baserow!" } },
    "requireFirstUserMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Vul het onderstaande formulier in om de admin gebruiker aan te maken." } },
    "passwordPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Voer je wachtwoord in." } },
    "namePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Voer je naam in.." } },
    "passwordRepeatPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Bevestig je wachtwoord." } },
    "loginText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Heb je al een account?" } },
    "emailPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Voer je e-mailadres in.." } },
    "login": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Inloggen" } },
    "privacyPolicy": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Privacybeleid" } },
    "agreeTerms": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Door een account aan te maken, gaat u akkoord met de " }, { "t": 5, "i": 0 }, { "t": 3, "v": " " }, { "t": 5, "i": 1 }, { "t": 3, "v": " " }, { "t": 5, "i": 2 }] } },
    "terms": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Servicevoorwaarden" } }
  },
  "forgotPassword": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wachtwoord vergeten" } },
    "message": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Vul je e-mailadres in op het formulier. Als we een account vinden, sturen we een e-mail met een link om je wachtwoord te resetten." } },
    "submit": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Stuur link" } },
    "confirmation": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Als je e-mailadres in onze database voorkomt, ontvangt je binnen enkele minuten op je e-mailadres een link om je wachtwoord opnieuw in te stellen." } },
    "disabled": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wachtwoord resetten is uitgeschakeld" } },
    "disabledMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Het is niet mogelijk om een wachtwoord opnieuw in te stellen omdat het is uitgeschakeld." } },
    "loginText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Heb je al een account en wachtwoord?" } },
    "confirmationTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Controleer je e-mail" } },
    "goBack": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ga terug" } }
  },
  "settings": {
    "settingsTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Beheerdersinstellingen" } },
    "baserowInstanceId": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Installatie-ID" } },
    "instanceIdDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "De installatie-ID is de unieke identificatiecode van je Baserow instantie." } },
    "accountRestrictions": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Accountbeperkingen" } },
    "settingAllowResetPasswordName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wachtwoord opnieuw instellen toestaan" } },
    "settingAllowResetPasswordDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Standaard kunnen gebruikers een link aanvragen om hun wachtwoord te resetten." } },
    "settingAllowResetPasswordWarning": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Houd er rekening mee dat u zichzelf van het systeem kunt uitsluiten en dat de toegang niet kan worden hersteld als u uw wachtwoord vergeet." } },
    "settingAllowNewAccountsName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Toestaan aanmaken van nieuwe accounts" } },
    "settingAllowNewAccountsDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Standaard kan elke gebruiker die je Baserow-domein bezoekt zich aanmelden voor een nieuw account." } },
    "enabled": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "ingeschakeld" } },
    "settingAllowSignupsViaWorkspaceInvitationsName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aanmeldingen via werkruimte uitnodigingen toestaan" } },
    "settingAllowSignupsViaWorkspaceInvitationDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zelfs als het aanmaken van nieuwe accounts is uitgeschakeld, kunnen direct uitgenodigde gebruikers met deze optie toch een account aanmaken." } },
    "userDeletionGraceDelay": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Gebruiker verwijderen" } },
    "settingUserDeletionGraceDelay": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Respijtperiode" } },
    "settingUserDeletionGraceDelayDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dit is het aantal dagen zonder login waarna een voor verwijdering geplande account permanent wordt verwijderd." } },
    "invalidAccountDeletionGraceDelay": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Deze waarde is vereist en moet een positief geheel getal zijn kleiner dan 32000" } },
    "settingAllowNonStaffCreateWorkspaceOperation": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Laat iedereen nieuwe werkruimtes maken" } },
    "settingAllowNonStaffCreateWorkspaceOperationDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Standaard kan iedereen nieuwe werkruimtes aanmaken. Schakel dit uit om alleen staff toe te staan nieuwe werkruimtes aan te maken." } },
    "settingAllowNonStaffCreateWorkspaceOperationWarning": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Als deze instelling is ingeschakeld, wordt voor nieuwe gebruikers automatisch een werkruimte aangemaakt waarin ze een beheerder zijn, zodat ze voor de facturering als beheerder worden gerapporteerd. Om dit te voorkomen, schakelt u deze instelling uit en nieuw uitgenodigde gebruikers beginnen alleen met de rol waarmee ze zijn uitgenodigd." } },
    "maintenance": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Onderhoud" } },
    "settingTrackWorkspaceUsage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Werkruimte gebruik bijhouden" } },
    "settingTrackWorkspaceUsageDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Schakelt een nachtelijke taak in die het rij- en bestandsgebruik per werkruimte telt, weergegeven op de beheerpagina van de premium werkruimte." } },
    "userSettings": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Gebruiker" } },
    "emailVerification": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "E-mail verificatie" } },
    "emailVerificationDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Bepaalt of e-mailadressen moeten worden geverifieerd." } },
    "emailVerificationNoVerification": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Geen verificatie" } },
    "emailVerificationRecommended": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aanbevolen" } },
    "emailVerificationEnforced": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Afgedwongen" } },
    "baserowVersionDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Het versienummer van deze instantie." } },
    "baserowVersion": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Baserow versie" } },
    "settingsVerifyImportSignatureDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Indien ingeschakeld, wordt de handtekening van de ge\xEFmporteerde gegevens geverifieerd om er zeker van te zijn dat er niet met de gegevens geknoeid is." } },
    "settingsVerifyImportSignature": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Verifieer import handtekening" } }
  },
  "copyingNotification": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kopi\xEBren..." } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Uw gegevens voorbereiden" } }
  },
  "undoRedoNotification": {
    "undoingTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ongedaan maken..." } },
    "undoingText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Je actie ongedaan maken" } },
    "redoneTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Opnieuw gedaan" } },
    "skippingRedoDueToError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Opnieuw uitvoeren mislukt vanwege onbekende fout, overslaan." } },
    "redoingTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Opnieuw doen..." } },
    "redoingText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Je actie overnieuw doen" } },
    "redoneText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Actie wordt opnieuw gedaan" } },
    "noMoreRedo": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Geen acties meer om opnieuw te doen" } },
    "skippingUndoDueToError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ongedaan maken mislukt door onbekende fout, overslaan." } },
    "failed": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mislukt" } },
    "undoneText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Actie is ongedaan gemaakt" } },
    "undoneTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ongedaan gemaakt" } },
    "noMoreUndo": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Geen acties meer om ongedaan te maken" } }
  },
  "AuthorizationErrorNotification": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Autorisatiefout" } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Het lijkt erop dat je niet de rechten hebt om deze bron te zien." } },
    "action": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pagina vernieuwen" } }
  },
  "formSidebar": {
    "actions": {
      "addAll": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Alles toevoegen" } },
      "removeAll": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Alles verwijderen" } },
      "addField": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Veld toevoegen" } }
    },
    "fieldsDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Alle velden staan in het formulier." } },
    "prefillInfoLink": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Waarden dynamisch vooraf invullen" } },
    "modal": {
      "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Waarden dynamisch vooraf invullen" } },
      "descriptionPartOne": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Formulieren kunnen vooraf worden ingevuld om de gebruiker te helpen het formulier sneller in te vullen." } },
      "descriptionPartTwo": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Alle velden die in het formulier beschikbaar zijn, kunnen vooraf worden ingevuld." } },
      "howToPrefill": {
        "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Een formulier vooraf invullen" } },
        "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Als u een formulier vooraf met gegevens wilt invullen, kunt u dit doen via queryparameters die zijn toegevoegd aan de openbare formulier-URL. Deze queryparameters worden voorafgegaan door 'prefill' om elke botsing met mogelijke toekomstige queryparameters te voorkomen." } }
      },
      "format": {
        "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Format" } },
        "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Het formaat van de queryparameters is als volgt:" } },
        "codeSnippet": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "?prefill_&lt;field_name&gt;=&lt;value&gt;" } }
      },
      "example": {
        "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Voorbeeld" } },
        "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "In het onderstaande voorbeeld willen we een veld genaamd `Naam` vullen met de waarde `Mike`" } },
        "codeSnippet": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "?prefill_Name=Mike" } }
      },
      "spaces": {
        "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ruimtes" } },
        "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Spaties in de veldnaam worden vervangen door `+` om problemen met de query parameter te voorkomen." } },
        "codeSnippet": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "?prefill_my+field=Mike" } }
      },
      "multipleValues": {
        "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Meerdere waarden" } },
        "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Als u meerdere velden wilt vullen, kunt u dat doen door een `,` tussen de waarden te plaatsen." } },
        "codeSnippet": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "?prefill_multi+select=Mike,John" } }
      },
      "specialFieldTypes": {
        "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Speciale veldtypes" } },
        "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Over het algemeen is de prefill-waarde gelijk aan de waarde van het veld. Maar er zijn enkele uitzonderingen waarbij de waarde wordt vertaald naar een andere waarde." } },
        "ratingField": {
          "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Beoordelingsveld" } },
          "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Een beoordelingsveld accepteert een getal om aan te geven hoeveel sterren er moeten worden ingevuld." } },
          "codeSnippet": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "?prefill_rating=3" } }
        },
        "linkRowField": {
          "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Link naar tabel veld" } },
          "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Een link naar tabel kan de waarde aannemen die in het keuzemenu wordt getoond." } },
          "codeSnippet": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "?prefill_link+row=Mike" } }
        },
        "selectField": {
          "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Enkel selectie / meervoudig selectieveld" } },
          "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Een enkelvoudig keuzeveld kan de waarde accepteren die in de keuzelijst wordt getoond. Dat geldt ook voor het veld Meervoudige selectie, maar dat kan ook meerdere waarden accepteren." } },
          "codeSnippet": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "?prefill_single+select=Mike" } }
        },
        "dateField": {
          "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Datumveld" } },
          "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Een datumveld kan een datum in de volgende notaties accepteren en gebruikt de datumnotatie van het veld om de datum te parseren." } },
          "codeSnippet": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\n// Standards\nISO_8601\n\n// General formats\n'YYYY-MM-DD',\n'YYYY-MM-DD hh:mm A',\n'YYYY-MM-DD HH:mm',\n\n// EU\n'DD/MM/YYYY', \n'DD/MM/YYYY hh:mm A', \n'DD/MM/YYYY HH:mm'\n\n// US\n'MM/DD/YYYY', \n'MM/DD/YYYY hh:mm A', \n'MM/DD/YYYY HH:mm'" } }
        }
      },
      "howToHide": {
        "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Hoe een veld verbergen" } },
        "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Als u een veld dynamisch wilt verbergen, kunt u dat doen via query parameters die worden toegevoegd aan de public from url. Deze query parameters worden voorafgegaan door `hide_` om botsing met mogelijke toekomstige query parameters te voorkomen." } }
      }
    },
    "prefillOrHideInfoLink": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dynamisch invullen of verbergen" } },
    "notifyUserOnSubmit": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Notificatie ontvangen bij verzenden" } },
    "fields": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Velden" } },
    "rowEditableBy": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Rijen bijwerken via velden" } },
    "rowEditableByDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "De rijen in deze tabel kunnen via dit formulier worden bijgewerkt met behulp van de volgende velden voor het bewerken van rijen:" } }
  },
  "deleteAccountSettings": {
    "orphanWorkspaces": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zal ook permanent worden verwijderd na de respijtperiode" } },
    "passwordConfirm": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Herhaal wachtwoord" } },
    "repeatPasswordMatchError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dit veld moet overeenkomen met het eerste wachtwoordveld." } },
    "submitButton": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Account verwijderen" } },
    "errorUserIsLastAdminTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Laatste beheerder" } },
    "workspaceLoadingError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Werkruimtes controle is mislukt" } },
    "workspaceLoadingErrorDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Het controleren van de te verwijderen werkruimtes is mislukt, vernieuw de pagina." } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "U kunt de verwijdering van uw account plannen door uw huidige wachtwoord in te voeren en op de knop te klikken. Uw account zal permanent worden verwijderd na " }, { "t": 4, "k": "days" }, { "t": 3, "v": " dagen. In de tussentijd, als u opnieuw inlogt, zal de verwijdering van uw account worden geannuleerd." }] } },
    "workspaceNotice": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wees werkruimtes worden verwijderd" } },
    "orphanWorkspaceMemberCount": { "t": 0, "b": { "t": 1, "c": [{ "t": 2, "i": [{ "t": 3 }], "s": "gedeeld met niemand" }, { "t": 2, "i": [{ "t": 3 }], "s": "gedeeld met \xE9\xE9n gebruiker" }, { "t": 2, "i": [{ "t": 3, "v": "gedeeld met " }, { "t": 4, "k": "count" }, { "t": 3, "v": " gebruikers" }] }] } },
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Account verwijderen" } },
    "workspaceNoticeDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wanneer uw account permanent wordt verwijderd, worden alle werkruimtes en bijbehorende gegevens waarvoor u de laatste actieve gebruiker met beheerdersrechten bent ook verwijderd. De hieronder getoonde werkruimtes worden verwijderd omdat u de enige beheerder bent. Om te voorkomen dat ze worden verwijderd moet u eerst een andere gebruiker adminrechten geven voordat u uw account verwijdert." } },
    "password": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wachtwoord" } },
    "errorInvalidPasswordTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ongeldig wachtwoord" } },
    "errorInvalidPasswordMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Uw account kan niet worden verwijderd omdat uw wachtwoord ongeldig is." } },
    "errorUserIsLastAdminMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kan uw account niet verwijderen omdat u de laatste beheerder van deze Baserow instance bent." } },
    "accountDeletedSuccessTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Verwijdering van account gepland" } },
    "accountDeletedSuccessMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Uw account staat op de planning om verwijderd te worden." } }
  },
  "clearingNotification": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wissen..." } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Voorbereiding van uw gegevens" } }
  },
  "dashboardSidebar": {
    "workspaces": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Werkruimtes" } },
    "links": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Links" } },
    "knowledgeBase": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kennisbank" } },
    "tutorials": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tutorials" } },
    "userSettings": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Gebruikersinstellingen" } },
    "trash": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Prullenbak" } },
    "logoff": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Uitloggen" } }
  },
  "job": {
    "statePending": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wachten om te beginnen..." } },
    "stateStarted": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Begonnen..." } },
    "stateFinished": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Afgerond" } },
    "stateFailed": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mislukt" } },
    "errorJobAlreadyRunningTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Al aan de gang" } },
    "errorJobAlreadyRunningDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Er loopt al een andere importjob. U moet wachten tot die klaar is voordat u een andere start." } },
    "errorJobCannotBeCancelledTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kan niet annuleren" } },
    "errorJobCannotBeCancelledDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Het is niet mogelijk om de taak te annuleren omdat deze al is voltooid.\nVerwijder de eerste snapshot in de onderstaande lijst om deze te verwijderen." } },
    "stateCanceled": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Geannuleerd" } }
  },
  "pastingNotification": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Plakken..." } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Voorbereiding van uw gegevens" } }
  },
  "datetime": {
    "yearsAgo": { "t": 0, "b": { "t": 1, "c": [{ "t": 2, "i": [{ "t": 3 }], "s": "0 jaar geleden" }, { "t": 2, "i": [{ "t": 3 }], "s": "1 jaar geleden" }, { "t": 2, "i": [{ "t": 4, "k": "n" }, { "t": 3, "v": " jaar geleden" }] }] } },
    "daysAgo": { "t": 0, "b": { "t": 1, "c": [{ "t": 2, "i": [{ "t": 3 }], "s": "0 dagen geleden" }, { "t": 2, "i": [{ "t": 3 }], "s": "1 dag geleden" }, { "t": 2, "i": [{ "t": 4, "k": "n" }, { "t": 3, "v": " dagen geleden" }] }] } },
    "monthsAgo": { "t": 0, "b": { "t": 1, "c": [{ "t": 2, "i": [{ "t": 3 }], "s": "0 maanden geleden" }, { "t": 2, "i": [{ "t": 3 }], "s": "1 maand geleden" }, { "t": 2, "i": [{ "t": 4, "k": "n" }, { "t": 3, "v": " maanden geleden" }] }] } },
    "secondsAgo": { "t": 0, "b": { "t": 1, "c": [{ "t": 2, "i": [{ "t": 3 }], "s": "Zojuist" }, { "t": 2, "i": [{ "t": 3 }], "s": "1 seconde geleden" }, { "t": 2, "i": [{ "t": 4, "k": "n" }, { "t": 3, "v": " seconden geleden" }] }] } },
    "minutesAgo": { "t": 0, "b": { "t": 1, "c": [{ "t": 2, "i": [{ "t": 3 }], "s": "0 minuten geleden" }, { "t": 2, "i": [{ "t": 3 }], "s": "1 minuut geleden" }, { "t": 2, "i": [{ "t": 4, "k": "n" }, { "t": 3, "v": " minuten geleden" }] }] } },
    "hoursAgo": { "t": 0, "b": { "t": 1, "c": [{ "t": 2, "i": [{ "t": 3 }], "s": "0 uur geleden" }, { "t": 2, "i": [{ "t": 3 }], "s": "1 uur geleden" }, { "t": 2, "i": [{ "t": 4, "k": "n" }, { "t": 3, "v": " uur geleden" }] }] } },
    "lessThanMinuteAgo": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "minder dan een minuut geleden" } },
    "justNow": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "zojuist" } }
  },
  "duplicateApplicationJobType": {
    "duplicatedTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Applicatie gedupliceerd" } },
    "duplicating": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dupliceren" } }
  },
  "InstallTemplateJobType": {
    "installedTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Template ge\xEFnstalleerd" } },
    "installing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Installeren" } }
  },
  "membersSettings": {
    "membersTable": {
      "columns": {
        "email": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "E-mail" } },
        "role": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Rol" } },
        "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Naam" } },
        "teams": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Teams" } },
        "highestRole": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Hoogste rol" } },
        "highestRoleHelpText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "De hoogste rol die deze gebruiker rechtstreeks of vanuit een team aan hem is toegekend, op alles in deze werkruimte" } },
        "highestRoleInstanceHelpText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "De hoogste rol die deze gebruiker heeft in de instantie" } },
        "2fa": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "2FA" } }
      },
      "actions": {
        "copyEmail": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "E-mail kopi\xEBren" } },
        "remove": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Verwijderen uit werkruimte" } }
      },
      "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "userAmount" }, { "t": 3, "v": " Leden in " }, { "t": 4, "k": "groupName" }] } },
      "inviteMember": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Lid uitnodigen" } }
    },
    "membersTabTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Leden" } },
    "invitesTable": {
      "columns": {
        "email": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "E-mail" } },
        "message": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Bericht" } },
        "role": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Role" } }
      },
      "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "invitesAmount" }, { "t": 3, "v": " Uitnodigingen in behandeling in " }, { "t": 4, "k": "groupName" }] } },
      "actions": {
        "copyEmail": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "E-mail kopi\xEBren" } },
        "remove": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Uitnodiging annuleren" } }
      }
    },
    "membersInviteModal": {
      "errors": {
        "userAlreadyInWorkspace": {
          "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Gebruiker zit al in de werkruimtes." } },
          "text": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Het is niet mogelijk een uitnodiging te sturen wanneer de gebruiker al lid is van de werkruimtes." } }
        }
      },
      "submit": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Stuur uitnodiging" } },
      "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Werkruimte leden uitnodigen" } },
      "helpIconText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "De geselecteerde rol wordt de standaard rol van de gebruiker in deze werkruimte." } }
    },
    "invitesTabTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Uitnodigingen" } }
  },
  "crudTableSearch": {
    "search": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zoeken" } }
  },
  "removeFromWorkspaceModal": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Bevestig verwijdering uit de werkruimte" } },
    "remove": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Verwijderen" } },
    "confirmation": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Weet u zeker dat u " }, { "t": 4, "k": "naam" }, { "t": 3, "v": " wilt verwijderen uit " }, { "t": 4, "k": "workspaceName" }, { "t": 3, "v": "? Deze actie kan niet ongedaan worden gemaakt." }] } }
  },
  "UserSessionExpiredNotification": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sessie verlopen" } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "U bent uitgelogd omdat uw authenticatietoken is verlopen. Log opnieuw in." } }
  },
  "memberSelectionList": {
    "searchPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zoek ..." } },
    "selectedAmountLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "count" }, { "t": 3, "v": " geselecteerd" }] } }
  },
  "memberAssignmentModalFooter": {
    "invite": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Uitnodigen " }, { "t": 4, "k": "count" }] } },
    "deselectAll": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Deselecteer alles" } },
    "selectAll": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Selecteer alles" } }
  },
  "permissionsUpdatedNotification": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Machtigingen bijgewerkt" } },
    "action": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Herladen" } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dit kan invloed hebben op waar u toegang toe heeft, gelieve de pagina opnieuw te laden." } }
  },
  "editRoleContext": {
    "billableRolesLink": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Documentatie voor factureerbare rollen" } },
    "additionalRoles": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Extra rollen" } }
  },
  "highestPaidRoleField": {
    "billable": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Factureerbaar" } }
  },
  "clearAllNotificationsConfirmModal": {
    "message": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Alle meldingen worden permanent verwijderd en u kunt ze niet meer zien." } },
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Weet je zeker dat je alle meldingen wilt wissen?" } }
  },
  "notificationPanel": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Meldingen" } },
    "markAllAsRead": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Alles markeren als gelezen" } },
    "clearAll": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Alles wissen" } },
    "noNotification": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "We zullen u op de hoogte brengen van belangrijke updates en wanneer u op Baserow wordt vermeld." } },
    "noNotificationTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Je hebt geen meldingen" } },
    "newNotificationsAvailable": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nieuwe meldingen beschikbaar" } },
    "refresh": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Vernieuwen" } }
  },
  "uploadFileDropzone": {
    "drop": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Laat hier los" } },
    "clickOrDrop": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Klik of sleep je bestanden naar hier" } },
    "errorTooManyFilesMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Je kunt slechts \xE9\xE9n bestand uploaden" } },
    "errorWrongFileTypeTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Verkeerd bestandstype" } },
    "errorWrongFileTypeMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Je kunt geen bestand van het type " }, { "t": 4, "k": "type" }, { "t": 3, "v": " uploaden" }] } },
    "errorTooManyFilesTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Te veel bestanden" } }
  },
  "connectingToast": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Opnieuw verbinden" } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Opnieuw verbinding maken met de server." } }
  },
  "failedConnectingToast": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mislukt" } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Verbinding met de server is mislukt. Vernieuw de pagina." } },
    "action": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pagina vernieuwen" } }
  },
  "authorizationErrorToast": {
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Het lijkt erop dat je niet de rechten hebt om deze bron te zien." } },
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Autorisatiefout" } },
    "action": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pagina vernieuwen" } }
  },
  "copyingToast": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kopi\xEBren..." } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Voorbereiding van uw gegevens" } }
  },
  "PastingToast": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Plakken..." } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Voorbereiding van uw gegevens" } }
  },
  "clearingToast": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wissen..." } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Voorbereiding van uw gegevens" } }
  },
  "undoRedoToast": {
    "noMoreUndo": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Geen acties meer om ongedaan te maken" } },
    "skippingUndoDueToError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ongedaan maken mislukt door onbekende fout, overslaan." } },
    "redoingTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Opnieuw doen..." } },
    "redoingText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Je actie overnieuw doen" } },
    "redoneTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Opnieuw gedaan" } },
    "redoneText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Actie is opnieuw gedaan" } },
    "noMoreRedo": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Geen acties meer om opnieuw te doen" } },
    "failed": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mislukt" } },
    "skippingRedoDueToError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Opnieuw uitvoeren mislukt vanwege onbekende fout, overslaan." } },
    "undoingText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Je actie ongedaan maken" } },
    "undoneText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Actie is ongedaan gemaakt" } },
    "undoingTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ongedaan maken..." } },
    "undoneTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ongedaan gemaakt" } }
  },
  "permissionsUpdatedToast": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Machtigingen bijgewerkt" } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dit kan invloed hebben op waar u toegang toe heeft, gelieve de pagina opnieuw te laden." } },
    "action": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Herladen" } }
  },
  "integrationCreateEditModal": {
    "editTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Integratie bewerken" } },
    "warningTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Waarschuwing" } },
    "createTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nieuwe integratie" } }
  },
  "integrationEditForm": {
    "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Naam integratie" } },
    "namePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Voer de integratie naam in..." } }
  },
  "styleSidePanel": {
    "paddingTop": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Opvulling bovenkant" } },
    "paddingBottom": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Opvulling onderkant" } }
  },
  "userSessionExpiredToast": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sessie verlopen" } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Je bent uitgelogd omdat uw authenticatie token is verlopen. Log opnieuw in." } }
  },
  "restoreToast": {
    "restore": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Herstel verwijderd " }, { "t": 4, "k": "type" }] } }
  },
  "workspaceInvitationRejectedNotification": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "sender" }, { "t": 3, "v": " heeft uw uitnodiging om lid te worden van " }, { "t": 4, "k": "workspaceName" }, { "t": 3, "v": " afgewezen" }] } },
    "deletedUser": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Een verwijderde gebruiker" } }
  },
  "workspaceInvitationCreatedNotification": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "sender" }, { "t": 3, "v": " heeft je uitgenodigd om lid te worden van " }, { "t": 4, "k": "workspaceName" }] } },
    "deletedUser": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Een verwijderde gebruiker" } }
  },
  "dropdown": {
    "empty": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Geen items beschikbaar" } }
  },
  "styleBoxForm": {
    "paddingError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "De waarde moet een geheel getal zijn tussen 0 en 200." } }
  },
  "workspaceInvitationAcceptedNotification": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "sender" }, { "t": 3, "v": " heeft uw uitnodiging om lid te worden van " }, { "t": 4, "k": "workspaceName" }, { "t": 3, "v": " geaccepteerd" }] } },
    "deletedUser": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Een verwijderde gebruiker" } }
  },
  "richTextEditorMentionsList": {
    "notFound": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Geen gebruikers gevonden" } }
  },
  "versionUpgradeNotification": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "version" }, { "t": 3, "v": " is hier! Bekijk wat er nieuw is." }] } }
  },
  "emailNotifications": {
    "submitButton": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Frequentie bijwerken" } },
    "label": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Vermeldingen, commentaar en andere berichten" } },
    "daily": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dagelijks" } },
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "E-mail notificaties" } },
    "never": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nooit" } },
    "weekly": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wekelijks" } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Configureer de frequentie waarmee e-mails naar uw Postvak IN worden verzonden." } },
    "instant": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Direct" } }
  },
  "dataExplorer": {
    "emptyText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Geen data gevonden" } },
    "noProvidersText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Er zijn geen gegevensverstrekkers gevonden. Om te beginnen kun je bijvoorbeeld een gegevensbron of paginaparameter toevoegen." } },
    "noMatchingNodesText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Er zijn geen overeenkomende gegevensverstrekkers gevonden." } }
  },
  "formulaInputField": {
    "errorInvalidFormula": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "De formule is ongeldig." } },
    "advancedFormulaMode": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Geavanceerde formule-modus" } },
    "invalidFormulaTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ongeldige formule" } },
    "invalidSyntax": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dit is geen geldige formule, controleer de syntax." } }
  },
  "userPasswordChangedToast": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wachtwoord veranderd" } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Je wachtwoord is gewijzigd. Log alsjeblieft nogmaals in." } }
  },
  "integrationDropdown": {
    "noIntegrations": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Geen integraties gevonden." } },
    "addIntegration": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nieuwe integratie toevoegen" } },
    "integrationPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Selecteer een integratie" } },
    "selectTypeFirst": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kies het type eerst" } }
  },
  "richTextEditorBubbleMenu": {
    "underline": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Onderstreep" } },
    "bold": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Vet" } },
    "italic": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cursief" } },
    "strikethrough": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Doorstreept" } },
    "link": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Link" } },
    "linkEditPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Link URL..." } },
    "linkEditDone": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Klaar" } }
  },
  "richTextEditorFloatingMenu": {
    "hierarchy": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Hi\xEBrarchie" } },
    "heading1": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kop 1" } },
    "heading2": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kop 2" } },
    "heading3": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kop 3" } },
    "orderedList": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Genummerde lijst" } },
    "unorderedList": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Bullet lijst" } },
    "code": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Code" } },
    "taskList": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Takenlijst" } },
    "lists": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Lijsten" } },
    "paragraph": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Paragraaf" } }
  },
  "workspaceSettingType": {
    "generativeAI": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Generatieve AI" } }
  },
  "generativeAIModelType": {
    "openai": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "OpenAI" } },
    "openaiOrganization": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Organisatie (optioneel)" } },
    "openaiModelsLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ingeschakelde modellen" } },
    "openaiModelsDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Geef een lijst met door komma's gescheiden [OpenAI-modellen] (https://platform.openai.com/docs/models/continuous-model-upgrades) die kunnen worden gebruikt in Baserow. (bijv. `gpt-3.5-turbo,gpt-4`)" } },
    "ollamaHostLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Host" } },
    "ollamaModelsLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ingeschakelde modellen" } },
    "openaiApiKeyLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "API-sleutel" } },
    "openaiApiKeyDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Geef een OpenAI API-sleutel op als je de integratie wilt inschakelen. [Instructies voor het verkrijgen van een API-sleutel](https://help.openai.com/en/articles/4936850-where-do-i-find-my-openai-api-key)." } },
    "ollamaHostDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Geef de hostnaam van je [Ollama](https://ollama.com/) server. Deze draait meestal lokaal op je eigen apparaat." } },
    "ollama": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ollama" } },
    "ollamaModelsDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Geef een lijst met door komma gescheiden [Ollama ge\xEFnstalleerde modellen] (https://ollama.com/library). Het model moet worden gedownload en ge\xEFnstalleerd voordat het kan worden gebruikt. (bijvoorbeeld `llama2,mistral`)" } },
    "mistral": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mistral" } },
    "mistralModelsLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ingeschakelde modellen" } },
    "anthropic": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Anthropic" } },
    "anthropicApiKeyLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "API-sleutel" } },
    "anthropicApiKeyDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Geef een Anthropic API-sleutel op als u de integratie wilt inschakelen. [Instructies voor het verkrijgen van een API-sleutel](https://docs.anthropic.com/en/api/getting-started)." } },
    "anthropicModelsLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ingeschakelde modellen" } },
    "anthropicModelsDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Geef een lijst van door komma's gescheiden [Anthropic modellen] (https://docs.anthropic.com/en/docs/about-claude/models) die kunnen worden gebruikt in Baserow. (e.g. `claude-3-5-sonnet-20241022,claude-3-opus-20240229`)" } },
    "mistralApiKeyLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "API-sleutel" } },
    "mistralModelsDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Geef een lijst met door komma's gescheiden [Mistral modellen] (https://docs.mistral.ai/getting-started/models/models_overview/) die kunnen worden gebruikt in Baserow. (bijv. `mistral-large-latest,mistral-small-latest`)" } },
    "mistralApiKeyDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Geef een Mistral API-sleutel als u de integratie wilt inschakelen. [Instructies voor het verkrijgen van een API-sleutel](https://docs.mistral.ai/getting-started/quickstart/)." } },
    "openRouterApiKeyLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "API-sleutel" } },
    "openRouterOrganization": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Organisatie (optioneel)" } },
    "openRouter": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "OpenRouter" } },
    "openRouterModelsLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ingeschakelde modellen" } },
    "openRouterModelsDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Geef een lijst met door komma's gescheiden [OpenRouter modellen] (https://openrouter.ai/models) die kunnen worden gebruikt in Baserow. (bijv. `openai/gpt-4o,anthropic/claude-3-haiku`)" } },
    "openRouterApiKeyDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Geef een OpenRouter API-key op als u de integratie wilt inschakelen. [get an API key](https://openrouter.ai/settings/keys)." } },
    "openaiBaseUrl": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Basis URL" } },
    "openaiBaseUrlDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Gebruikt standaard de OpenAI basis URL als deze leeg is. Kan optioneel worden gewijzigd in https://eu.api.openai.com/v1, https://&lt;uw-bronnaam&gt;.openai.azure.com, of een andere OpenAI-compatibele API." } }
  },
  "generativeAIWorkspaceSettings": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Generatieve AI-instellingen" } },
    "submitButton": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Instellingen bijwerken" } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Deze instellingen kunnen worden gebruikt om optioneel generatieve AI-configuratie in te stellen op werkruimte-niveau. Functies zoals het AI-veld kunnen worden uitgeschakeld omdat ze geen API-sleutel hebben voor een van de ondersteunde modellen. Door de instellingen hier op te geven, kun je die functies inschakelen. Als je een waarde leeg laat, wordt deze standaard teruggezet naar de globale instance-instellingen. Let op dat iedereen in de werkruimte deze instellingen deelt." } },
    "changedTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Instellingen correct bijgewerkt" } },
    "changedDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "De instellingen zijn bijgewerkt en worden nu gebruikt in deze werkruimte." } },
    "openSettings": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Instellingen openen" } },
    "hideSettings": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Instellingen verbergen" } }
  },
  "workspaceSettingsModal": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Werkruimte-instellingen" } }
  },
  "selectAIModelForm": {
    "AIModel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "AI-model" } },
    "AIType": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "AI-type" } },
    "fileField": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Bestandsveld" } },
    "temperatureLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Temperatuur" } },
    "temperatureDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "De temperatuur van een LLM, een parameter die ingesteld kan worden tussen 0 en " }, { "t": 4, "k": "max" }, { "t": 3, "v": ", past de willekeurigheid van reacties aan - lagere waarden leveren gerichte antwoorden op, terwijl hogere waarden de creativiteit verhogen." }] } }
  },
  "onboarding": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Onboarding" } },
    "creating": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Je eerste workspace maken" } },
    "skip": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Voorlopig overslaan" } },
    "failedSkip": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Onboarding overslaan" } },
    "continue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ga verder" } },
    "cancel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ik wil geen hulp bij het opzetten" } },
    "failedTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Er is iets misgegaan" } },
    "failedDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "De onboarding is niet volledig voltooid, hoewel sommige onderdelen misschien wel zijn voltooid." } },
    "failedTryAgain": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Probeer het nog eens" } }
  },
  "inviteStep": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Medewerkers uitnodigen" } },
    "collaboratorsLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Medewerkers" } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Je kunt later altijd meer toevoegen." } }
  },
  "moreStep": {
    "people": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Hoeveel mensen zitten er in je team?" } },
    "share": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ik wil dit graag delen met het Baserow team" } },
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Vertel ons wat meer" } },
    "roleOrJob": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Rol of functie..." } },
    "country": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Land" } },
    "how": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Hoe heb je over ons gehoord?" } },
    "howSearchEngine": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zoekmachine (Google/Bing)" } },
    "howSocialMedia": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Social media" } },
    "howOnlineAds": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Online advertenties" } },
    "howContent": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Content (blog/nieuwsbrief/video)" } },
    "howReviewSite": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Reviewsite / marktplaats" } },
    "howFriend": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Via een vriend" } },
    "howColleague": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Via een collega" } },
    "howEvent": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Evenement of webinar" } },
    "howSales": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Benadering door sales" } },
    "howOther": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Anders" } }
  },
  "dashboardVerifyEmail": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Controleer je mailbox en klik op de link om je e-mail te verifi\xEBren." } },
    "resendConfirmationEmail": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Bevestigingsmail opnieuw verzenden" } }
  },
  "verifyEmailAddress": {
    "invalidToken": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Geen geldig bevestigingstoken." } },
    "emailMismatchWarning": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Houd er rekening mee dat het geverifieerde e-mailadres niet hoort bij de account die je momenteel gebruikt." } },
    "disabledPasswordProvider": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "De wachtwoord authenticatie provider is uitgeschakeld." } },
    "confirmation": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Je e-mailadres is geverifieerd." } },
    "goToDashboard": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ga naar het Dashboard" } }
  },
  "emailNotVerified": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Verificatie per e-mail vereist" } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Controleer je mailbox en klik op de link om te verifi\xEBren. Na verificatie wordt je account geactiveerd." } },
    "resend": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Bevestigingsmail opnieuw verzenden" } }
  },
  "resendEmailVerification": {
    "confirmationEmailSentTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Bevestigings e-mail verzonden" } },
    "confirmationEmailSentDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "De bevestigingsmail is verzonden." } }
  },
  "teamStep": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Laten we samen je eerste workspace bouwen!" } },
    "marketingTeam": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Marketing" } },
    "salesAndAccountManagementTeam": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Verkoop & Account Management" } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "In welk team zit je?" } },
    "engineeringTeam": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Engineering" } },
    "productAndDesignTeam": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Product & Ontwerp" } },
    "operationsTeam": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Activiteiten" } },
    "hrAndLegalTeam": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "HR & Juridisch" } },
    "itAndSupportTeam": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "IT & Ondersteuning" } },
    "financeTeam": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Financi\xEBn" } },
    "creativeProductionTeam": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Creatieve productie" } },
    "otherPersonalTeam": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Anders / Persoonlijk" } },
    "customerServiceTeam": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Klantenservice" } },
    "manufacturingTeam": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Productie" } }
  },
  "workspaceStep": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cre\xEBer je workspace" } },
    "workspaceLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Workspace naam" } }
  },
  "imageInput": {
    "labelButton": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Uploaden" } },
    "labelDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Selecteer een afbeelding om te uploaden..." } }
  },
  "colorInput": {
    "default": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Standaard" } }
  },
  "dashboardApplication": {
    "createdAt": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "gemaakt" } }
  },
  "templateCard": {
    "viewMore": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Meer bekijken" } }
  },
  "dataExplorerNode": {
    "showMore": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Meer herhalingen tonen" } },
    "selectNode": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Selecteer" } }
  },
  "exportWorkspaceModal": {
    "exportSettings": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Export instellingen" } },
    "reset": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Begin opnieuw" } },
    "created": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "gemaakt" } },
    "cancel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Annuleren" } },
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Exporteren" } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Je gegevens worden ge\xEBxporteerd als een ZIP-bestand, dat je kunt importeren in een andere Baserow-instantie." } },
    "export": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Data exporteren" } },
    "download": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Downloaden" } },
    "importingState": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Importeren" } },
    "noExports": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nog geen exports voor deze werkruimte." } },
    "exportingState": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Exporteren" } },
    "exportingCreateArchiveState": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Archief aanmaken" } },
    "exportingTableState": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Tabel exporteren: " }, { "t": 4, "k": "table" }] } }
  },
  "exportWorkspaceForm": {
    "exportSettingsLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Export instellingen" } },
    "onlyStructureDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Als ingeschakeld, wordt alleen de structuur van de applicaties ge\xEBxporteerd. De data wordt niet meegenomen." } },
    "onlyStructureLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Alleen structuur exporteren" } },
    "selectDataToExport": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Gegevens selecteren om te exporteren" } },
    "selectAll": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Selecteer alles" } },
    "deselectAll": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Deselecteer alles" } }
  },
  "importWorkspaceModal": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Baserow data importeren" } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Je kunt bestaand Baserow data importeren door het .zip-bestand van een andere Baserow instantie te uploaden." } },
    "upload": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Uploaden" } },
    "cancel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Annuleren" } },
    "chooseFile": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kies bestand" } },
    "selectApplications": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Selecteer data om te importeren" } },
    "deselectAll": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Deselecteer alles" } },
    "selectAll": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Selecteer alles" } },
    "databases": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Databases" } },
    "applications": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Applicaties" } },
    "successTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "De Baserow data is succesvol ge\xEFmporteerd" } },
    "successMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "count" }, { "t": 3, "v": " applicaties ge\xEFmporteerd" }] } },
    "signatureVerificationNote": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Het is niet mogelijk om een zipbestand van een onbetrouwbare bron te importeren." } },
    "import": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Data importeren" } },
    "uploading": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "uploaden..." } },
    "done": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Klaar" } },
    "close": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sluit" } },
    "retry": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Opnieuw proberen" } },
    "invalidResourceTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ongeldige bron" } },
    "invalidResourceMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Het geleverde bestand is geen geldige Baserow export." } },
    "untrustedPublicKeyTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Onbetrouwbare handtekening" } },
    "untrustedPublicKeyMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Het geleverde bestand is ondertekend met een onbetrouwbare openbare sleutel. Vraag je beheerder om de openbare sleutel toe te voegen aan de lijst van vertrouwde sleutels of de handtekeningverificatie uit te schakelen om dit bestand te kunnen importeren." } },
    "importingState": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Importeren" } },
    "importingTableStructure": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Aanmaken: " }, { "t": 4, "k": "table" }] } },
    "importingTableData": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Gegevens importeren: " }, { "t": 4, "k": "tabel" }] } },
    "uploadAndImport": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Uploaden en importeren" } }
  },
  "user": {
    "isStaff": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Is personeel" } },
    "isWorkspaceAdmin": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Is werkruimte beheerder" } },
    "active": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ingeschakeld" } },
    "deactivated": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Uitgeschakeld" } }
  },
  "adminType": {
    "dashboard": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dashboard" } },
    "users": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Gebruikers" } },
    "workspaces": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Werkruimtes" } },
    "licenses": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Licenties" } }
  },
  "workspacesAdminTable": {
    "allWorkspaces": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Alle werkruimtes" } },
    "id": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "ID" } },
    "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Naam" } },
    "members": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Leden" } },
    "applications": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Applicaties" } },
    "created": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aangemaakt" } },
    "seatsTaken": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Plekken bezet" } },
    "usageHelpText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wordt 's nachts berekend wanneer de instelling voor het gebruik van werkruimtes is ingeschakeld" } },
    "rowCount": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aantal rijen" } },
    "freeUsers": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Gratis gebruikers" } },
    "storageUsage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Opslag gebruikt (MB)" } }
  },
  "editWorkspaceContext": {
    "delete": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Permanent verwijderen" } }
  },
  "deleteWorkspaceModal": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Verwijder " }, { "t": 4, "k": "name" }] } },
    "confirmation": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Weet je zeker dat je de werkruimte: " }, { "t": 4, "k": "name" }, { "t": 3, "v": " wilt verwijderen?" }] } },
    "comment": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "De werkruimte wordt permanent verwijderd, inclusief de bijbehorende applicaties. Het is niet mogelijk deze actie ongedaan te maken." } },
    "delete": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Werkruimte " }, { "t": 4, "k": "name" }, { "t": 3, "v": " verwijderen" }] } }
  },
  "activeUsers": {
    "newUsers": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nieuwe gebruikers" } },
    "activeUsers": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Actieve gebruikers" } }
  },
  "usersAdminTable": {
    "allUsers": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Alle gebruikers" } },
    "id": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "ID" } },
    "username": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Gebruikersnaam" } },
    "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Naam" } },
    "workspaces": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Werkruimtes" } },
    "lastLogin": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Laatste login" } },
    "dateJoined": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ingeschreven" } },
    "active": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ingeschakeld" } },
    "twoFactorAuth": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "2FA" } }
  },
  "editUserContext": {
    "changePassword": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wachtwoord wijzigen" } },
    "delete": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Permanent verwijderen" } },
    "impersonate": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Imiteer" } }
  },
  "changePasswordForm": {
    "newPassword": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nieuw wachtwoord" } },
    "repeatPassword": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Herhaal wachtwoord" } },
    "changePassword": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wachtwoord wijzigen" } },
    "error": {
      "doesntMatch": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dit veld moet overeenkomen met je wachtwoordveld." } }
    }
  },
  "userForm": {
    "fullName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Volledige naam" } },
    "email": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "E-mail" } },
    "isActive": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Is actief" } },
    "warning": {
      "changeEmail": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Als het e-mailadres van deze gebruiker wordt gewijzigd, moet hij/zij dit nieuwe e-mailadres gebruiken wanneer hij/zij zich aanmeldt. Dit moet aan de gebruiker worden gecommuniceerd." } },
      "inactiveUser": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wanneer een gebruiker als inactief wordt gemarkeerd, kan deze zich niet meer aanmelden." } },
      "userStaff": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Door de gebruiker personeel te maken, krijgt deze beheerderstoegang tot alle gebruikers en alle werkruimtes, met de mogelijkheid om de eigen personeelsrechten in te trekken." } }
    },
    "error": {
      "invalidName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Voer een geldige volledige naam in. De naam moet langer zijn dan 2 letters en minder dan 150." } },
      "invalidEmail": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Voer een geldig e-mail adres in." } }
    },
    "twoFactorAuth": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tweefactorauthenticatie" } },
    "removeTwoFactorAuth": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tweefactorauthenticatie verwijderen" } }
  },
  "changeUserPasswordModal": {
    "changePassword": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Wijzig wachtwoord voor " }, { "t": 4, "k": "gebruikersnaam" }] } }
  },
  "deleteUserModal": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Verwijder " }, { "t": 4, "k": "gebruikersnaam" }] } },
    "confirmation": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Weet je zeker dat je de gebruiker: " }, { "t": 4, "k": "name" }, { "t": 3, "v": " wilt verwijderen?" }] } },
    "comment1": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "De gebruikersaccount wordt verwijderd, maar de werkruimtes waar die gebruiker lid van is blijven bestaan. De gebruikers werkruimte wordt niet verwijderd, zelfs als deze gebruiker de laatste gebruiker in de werkruimtes is. Door de laatste gebruiker in een werkruimte te verwijderen kan niemand meer toegang krijgen tot die werkruimte." } },
    "comment2": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Na het verwijderen van een gebruiker is het mogelijk dat een nieuwe gebruiker zich opnieuw aanmeldt met het e-mailadres van de verwijderde gebruiker. Om ervoor te zorgen dat ze zich niet opnieuw kunnen aanmelden, deactiveer de gebruiker in plaats van deze te verwijderen." } },
    "delete": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Verwijder gebruiker " }, { "t": 4, "k": "gebruikersnaam" }] } }
  },
  "editUserModal": {
    "delete": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Gebruiker verwijderen" } },
    "edit": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Bewerk " }, { "t": 4, "k": "gebruikersnaam" }] } }
  },
  "adminDashboard": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dashboard" } },
    "totals": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Totalen" } },
    "totalUsers": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Totaal gebruikers" } },
    "totalWorkspaces": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Totaal werkruimte" } },
    "totalApplications": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Totaal aanvragen" } },
    "newUsers": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nieuwe gebruikers" } },
    "newUsers24h": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nieuwe gebruikers laatste 24 uur" } },
    "newUsers7days": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nieuwe gebruikers laatste 7 dagen" } },
    "newUsers30days": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nieuwe gebruikers laatste 30 dagen" } },
    "activeUsers": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Actieve gebruikers" } },
    "activeUsers24h": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Actieve gebruikers laatste 24 uur" } },
    "activeUsers7days": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Actieve gebruikers laatste 7 dagen" } },
    "activeUsers30days": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Actieve gebruikers laatste 30 dagen" } },
    "viewAll": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Alles bekijken" } }
  },
  "formGroup": {
    "protectedField": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dit veld is beveiligd. Klik om te wijzigen." } },
    "cancelProtectedField": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Annuleer verandering" } }
  },
  "userSourceType": {
    "userCountSummary": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "count" }, { "t": 3, "v": " gebruikers (" }, { "t": 4, "k": "lastUpdated" }, { "t": 3, "v": ")" }] } }
  },
  "colorPickerContext": {
    "pickColorPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Of kies een vooraf gedefinieerde kleur" } }
  },
  "guidedTourStep": {
    "step": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "step" }, { "t": 3, "v": " van " }, { "t": 4, "k": "totalSteps" }] } },
    "gotIt": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ik snap het" } },
    "next": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Volgende" } },
    "back": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Terug" } }
  },
  "welcomeGuidedTourStep": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Welkom bij Baserow" } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "We geven je een korte rondleiding om je vertrouwd te maken met de basisprincipes. In slechts een paar klikken leer je hoe je je gegevens moeiteloos kunt organiseren en visualiseren" } },
    "buttonText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Start de rondleiding" } }
  },
  "createNewGuidedTourStep": {
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": 'Klik op "Nieuw toevoegen..." om een nieuwe database, applicatie of dashboard in te stellen voor je project, afdeling of team.' } },
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Een nieuwe database of applicatie maken" } }
  },
  "controlCenterGuidedTourStep": {
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "In de linkerzijbalk kun je je werkruimte beheren:\n\n- Home - Toegang tot je hoofddashboard.\n- Meldingen - Blijf op de hoogte van wijzigingen en vermeldingen.\n- Nodig anderen uit - Werk samen door teamleden toe te voegen.\n- Prullenbak - Al je verwijderde items weergeven en herstellen." } },
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Jouw Baserow Controle Centrum" } }
  },
  "mcpEndpointSettings": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "MCP server" } },
    "backToOverview": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Terug" } },
    "noEndpointsMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Er zijn geen MCP (Model Context Protocol) server eindpunten toegevoegd. Deze kunnen worden gebruikt om direct te integreren met een LLM zoals Claude, en de LLM direct acties te laten uitvoeren in Baserow. Maak een server eindpunt om te beginnen." } },
    "createEndpoint": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Eindpunt maken" } },
    "createNewTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "MCP-server eindpunt maken" } }
  },
  "mcpEndpointForm": {
    "workspaceLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Werkruimte" } },
    "nameLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Naam" } }
  },
  "mcpEndpoint": {
    "reveal": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Volledige URL weergeven" } },
    "warning": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Behandel je MCP URL als een wachtwoord, omdat je hiermee gegevens in Baserow kunt wijzigen." } },
    "detailLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Meer details" } },
    "claudeInstructions": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": 'Drie eenvoudige stappen om aan de slag te gaan met Claude Desktop en de Baserow MCP.\n\n1. Open de instellingen van Claude Desktop in de navigatiebalk (\u2318+,)\n1. Ga naar het tabblad "Ontwikkelen" en klik op "Edit Config".\n1. Neem de volgende JSON-configuratie op in `claude_desktop_config.json`.' } },
    "windsurfInstructions": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Twee eenvoudige stappen om MCP in te stellen met Cascase in Windsurf.\n\n1. Navigeer naar Windsurf - Settings -> Advanced Settings of Command Palette -> Open Windsurf settings page.\n1. Scroll naar beneden naar de Cascade sectie en je zult de optie vinden om een nieuwe server toe te voegen, bestaande servers te bekijken en een knop om het ruwe JSON config bestand `mcp_config.json` te bekijken. Voeg daar het volgende aan toe:" } },
    "endpointURLIntro": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "De MCP (Model Context Protocol) server URL kan worden toegevoegd aan elke client die MCP-servers ondersteunt. Het is een uniek eindpunt dat de LLM directe toegang geeft om namens jou acties uit te voeren in de werkruimte." } },
    "cursorInstructions": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": 'Drie eenvoudige stappen om aan de slag te gaan met Cursor en het Baserow MCP.\n\n1. Cursorinstellingen openen (\u21E7+\u2318+J)\n1. Navigeer naar het tabblad "MCP" en klik op "Add MCP Server" (MCP-server toevoegen)\n1. Voeg de volgende JSON-configuratie toe.' } }
  },
  "importWorkspaceForm": {
    "selectApplicationsToImport": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Applicaties selecteren om te importeren" } }
  },
  "workspaceSearch": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zoek" } },
    "searchEverything": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zoek..." } },
    "searching": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zoeken..." } },
    "noResults": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Geen resultaten gevonden" } },
    "noResultsSubtitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": 'We konden niets vinden dat overeenkomt met "' }, { "t": 4, "k": "searchTerm" }, { "t": 3, "v": '"' }] } },
    "welcome": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Doorzoek alles in je werkruimte" } },
    "welcomeSubtitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Gebruik het zoekvak hierboven om toepassingen, tabellen, velden en meer te vinden" } },
    "navigate": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Navigatie" } },
    "select": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Selecteer" } },
    "close": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sluit" } },
    "types": {
      "applications": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Applicaties" } },
      "tables": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tabellen" } },
      "fields": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Velden" } },
      "rows": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Rijen" } }
    },
    "empty": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "(leeg)" } }
  },
  "action": {
    "cancel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Annuleren" } },
    "submit": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Verstuur" } }
  },
  "twoFactorAuthSettings": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tweefactorauthenticatie" } },
    "loadingError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kon tweefactorconfiguratie niet laden." } }
  },
  "disableTwoFactorAuth": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Weet je zeker dat je 2FA wilt uitschakelen?" } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Je account verliest een extra beveiligingslaag. Als iemand achter je wachtwoord komt, kan hij of zij misschien inloggen op je account." } },
    "cancel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Laat het aan" } },
    "disable": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Uitschakelen" } },
    "successTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tweefactorauthenticatie is uitgeschakeld" } },
    "errorWrongPasswordTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Verkeerd wachtwoord" } },
    "errorWrongPasswordMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Het ingevoerde wachtwoord komt niet overeen met uw wachtwoord." } }
  },
  "enableTwoFactorOptions": {
    "cancel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Annuleren" } },
    "continue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ga verder" } }
  },
  "saveBackupCode": {
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Als je de toegang tot de authenticator-app of telefoon verliest en geen verificatiecodes kunt ontvangen of genereren, kun je deze back-up gebruiken. Je kunt het maar \xE9\xE9n keer gebruiken. Zorg ervoor dat je het opschrijft of kopieert naar een veilige plek zodat je het kunt openen zonder in te loggen." } },
    "backupCodes": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Back-up codes" } },
    "copy": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kopi\xEBren" } },
    "continue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ga verder" } },
    "backupCodesCopiedTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Gekopieerd!" } },
    "backupCodesCopiedMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Back-upcodes gekopieerd naar klembord." } }
  },
  "totpAuthType": {
    "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Authenticator-app" } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Gebruik een app om tweefactorauthenticatiecodes te krijgen. We raden aan apps te gebruiken zoals Google Authenticator, Authy en Microsoft Authenticator." } },
    "enabledDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Je ontvangt verificatiecodes via een authenticatie-app. Om een andere app of methode in te stellen, schakel je gewoon 2FA uit en stel je opnieuw in." } },
    "sideLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aanbevolen" } }
  },
  "twoFactorEnabled": {
    "enabled": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ingeschakeld" } },
    "disable": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "2FA uitschakelen" } }
  },
  "totpLogin": {
    "backupCodesTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Back-upcode invoeren" } },
    "backupCodesDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Log in met je eenmalige back-upcode." } },
    "authenticate": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Authenticeren" } },
    "goBack": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ga terug" } },
    "totpTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tweefacturauthenticatie" } },
    "totpDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Voer de code van je authenticator-app in." } },
    "verify": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Controleer" } },
    "useBackupCode": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Gebruik back-upcode" } },
    "verificationFailed": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Verificatie mislukt" } },
    "verificationFailedDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "De ingevoerde code is niet correct." } },
    "loginExpired": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Inloggen verlopen" } },
    "loginExpiredDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Geef je wachtwoord opnieuw op." } },
    "rateLimit": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Te veel pogingen." } }
  },
  "formulaInputContext": {
    "variables": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Variables" } },
    "functions": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Functies" } },
    "operators": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Operators" } },
    "search": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zoeken" } },
    "useRegularInputModalTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Normale invoer gebruiken voor dit veld?" } },
    "useRegularInput": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Gebruik regelmatige invoer" } },
    "useAdvancedInput": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Geavanceerde invoer gebruiken" } },
    "useAdvancedInputModalTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Geavanceerde invoer gebruiken voor dit veld?" } },
    "modalMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "De inhoud van je veld zal worden gewist en het zal niet mogelijk zijn om het te herstellen." } },
    "useSimpleInput": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Schakel over naar basismodus" } },
    "useSimpleInputModalTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Overstappen naar basismodus?" } }
  },
  "coreHTTPTriggerServiceForm": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Webhook URL" } },
    "urlVersion": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Versie" } },
    "urlVersionPublished": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Gepubliceerd" } },
    "urlVersionTest": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Test" } },
    "copyUrl": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "URL webhook kopi\xEBren" } },
    "urlCopied": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Webhook URL gekopieerd naar klembord" } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Deze webhook zal HTP verzoeken ontvangen en de workflow starten met de verzoekgegevens als de lading." } },
    "methodsOptionLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Toegestane HTTP-methoden" } },
    "methodsOptionDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Bepaalt welke HTTP-methodes zijn toegestaan voor deze webhook. Het uitsluiten van GET vermindert de kans dat de webhook per ongeluk wordt geactiveerd." } },
    "methodsOptionAll": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Alle" } },
    "methodsOptionExcludeGet": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "GET uitsluiten" } }
  },
  "twoFactorAuthEmpty": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Je hebt 2FA nog niet ingeschakeld" } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Voeg een extra beveiligingslaag toe aan je account." } },
    "enable": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "2FA inschakelen" } },
    "notAllowedTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "2FA niet ingeschakeld" } },
    "notAllowedDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Het toevoegen van 2FA is alleen mogelijk voor accounts met een wachtwoord." } }
  },
  "nodeHelpTooltip": {
    "exampleLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Voorbeeld" } },
    "result": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Resultaat: " }, { "t": 4, "k": "result" }] } }
  },
  "enableWithQRCode": {
    "scanQRCode": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "QR-code scannen" } },
    "scanQRCodeDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Scan de code met een app zoals Google Authenticator, Authy of Microsoft Authenticator." } },
    "clickToCopy": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Je kunt ook hier klikken om de code te kopi\xEBren." } },
    "secretCopiedTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Geheim gekopieerd" } },
    "secretCopiedMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "TOTP geheim gekopieerd naar klembord." } },
    "enterCode": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Voer de getoonde code in" } },
    "enterCodeDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Voer een 6-cijferige code in die door de app wordt getoond om te bevestigen dat je de app correct hebt ingesteld." } },
    "verificationFailed": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Verificatie mislukt" } },
    "verificationFailedDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "De ingevoerde code is ongeldig." } },
    "provisioningFailed": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Voorziening mislukt" } },
    "checkSuccess": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tweefactorauthenticatie succesvol ingeschakeld" } }
  },
  "twoFactorAuthField": {
    "enabled": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ingeschakeld" } },
    "disabled": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Uitgeschakeld" } }
  },
  "emailSettings": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Verander e-mailadres" } },
    "successTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Bevestigingsmail verstuurd" } },
    "successDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "We hebben een bevestigingsmail naar je nieuwe adres gestuurd. Check je inbox en klik op de link om de e-mailwijziging af te ronden." } },
    "currentEmailLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Huidig e-mailadres" } },
    "newEmailLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nieuw e-mailadres" } },
    "passwordLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Huidig wachtwoord" } },
    "submitButton": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Bevestigingsmail versturen" } },
    "errorInvalidPasswordTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ongeldig wachtwoord" } },
    "errorInvalidPasswordMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "We konden de e-mailwijziging niet aanvragen omdat je wachtwoord onjuist is." } },
    "errorEmailExistsTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "E-mailadres bestaat al" } },
    "errorEmailExistsMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "We konden de e-mailwijziging niet aanvragen omdat er al een account met dit e-mailadres bestaat." } },
    "errorNotAllowedTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "E-mailwijziging niet toegestaan" } },
    "errorNotAllowedMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Je kunt je e-mailadres niet wijzigen omdat je account single sign-on (SSO) gebruikt." } }
  },
  "changeEmail": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Bevestig e-mailwijziging" } },
    "submit": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Bevestig e-mailwijziging" } },
    "changed": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "E-mailadres gewijzigd" } },
    "message": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Je e-mailadres is succesvol gewijzigd. Je kunt nu inloggen op Baserow met je nieuwe e-mailadres." } },
    "errorInvalidLinkTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ongeldige link" } },
    "errorInvalidLinkMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "We konden het e-mailadres niet wijzigen omdat de link ongeldig is." } },
    "errorLinkExpiredTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Link verlopen" } },
    "errorLinkExpiredMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "De link om je e-mailadres te wijzigen is verlopen. Vraag in je accountinstellingen een nieuwe aan." } },
    "errorEmailExistsTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "E-mailadres bestaat al" } },
    "errorEmailExistsMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "We konden het e-mailadres niet wijzigen omdat er al een account met dit e-mailadres bestaat." } },
    "errorEmailAlreadyChangedTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "E-mailadres al gewijzigd" } },
    "errorEmailAlreadyChangedMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Het e-mailadres is al gewijzigd naar het aangevraagde adres." } }
  },
  "adminUsers": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Gebruikers" } }
  },
  "adminWorkspaces": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Werkruimtes" } }
  },
  "formulaInputErrorContext": {
    "viewFullError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Bekijk de volledige foutmelding" } }
  },
  "formulaInputExplorerContext": {
    "variables": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Variabelen" } },
    "functions": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Functies" } },
    "operators": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Operators" } },
    "search": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zoeken" } },
    "useRegularInputModalTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Gebruik je standaard invoer voor dit veld?" } },
    "useSimpleInput": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Schakel over naar basismodus" } },
    "useSimpleInputModalTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Overstappen naar basismodus?" } },
    "useAdvancedInput": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Schakel over naar de expertmodus" } },
    "useAdvancedInputModalTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wil je overschakelen naar de expertmodus?" } },
    "modalMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Als u naar een andere modus overschakelt, wordt de huidige formule gewist. Weet u zeker dat u wilt doorgaan?" } }
  },
  "formulaParserErrors": {
    "invalidArgCountMin": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "De functie '" }, { "t": 4, "k": "funcType" }, { "t": 3, "v": "' verwacht minimaal " }, { "t": 4, "k": "minArgs" }, { "t": 3, "v": " argumenten." }] } },
    "invalidArgCountExact": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "De functie '" }, { "t": 4, "k": "funcType" }, { "t": 3, "v": "' verwacht precies " }, { "t": 4, "k": "minArgs" }, { "t": 3, "v": " argumenten." }] } },
    "invalidArgCountRange": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "De functie '" }, { "t": 4, "k": "funcType" }, { "t": 3, "v": "' verwacht tussen " }, { "t": 4, "k": "minArgs" }, { "t": 3, "v": " en " }, { "t": 4, "k": "maxArgs" }, { "t": 3, "v": " argumenten." }] } },
    "invalidArgumentType": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "'" }, { "t": 4, "k": "value" }, { "t": 3, "v": "' is geen geldig argument voor de functie '" }, { "t": 4, "k": "funcType" }, { "t": 3, "v": "'." }] } }
  },
  "sampleDataViewer": {
    "payloadLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Uitvoer" } },
    "errorLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Er is een fout opgetreden..." } },
    "showPayloadLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Toon payload" } },
    "showErrorLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Toon fout" } },
    "downloadFullPayload": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Volledige payload downloaden" } },
    "truncatedLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "[Uitvoer afgekapt]" } },
    "truncatedPayloadWarning": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Alleen de eerste " }, { "t": 4, "k": "size" }, { "t": 3, "v": " tekens worden getoond. Download de volledige payload om deze op je computer te bekijken." }] } }
  },
  "workspaceOutdatedToast": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Te veel wijzigingen" } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Er zijn te veel wijzigingen doorgevoerd terwijl je weg was. Vernieuw om de nieuwste gegevens te zien." } },
    "action": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Gegevens vernieuwen" } },
    "dismiss": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sluiten" } }
  },
  "disableTwoFactorAuthModal": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tweefactorauthenticatie verwijderen" } },
    "confirmation": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Weet je zeker dat je tweefactorauthenticatie voor " }, { "t": 4, "k": "name" }, { "t": 3, "v": " wilt verwijderen?" }] } },
    "comment": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Deze gebruiker kan dan inloggen met alleen een wachtwoord en kan daarna tweefactorauthenticatie opnieuw instellen." } },
    "remove": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tweefactorauthenticatie verwijderen" } }
  },
  "editWorkspace": {
    "invalidNameTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Werkruimtenaam niet toegestaan" } }
  }
};

export { resource as default };
//# sourceMappingURL=nl-BuAshu1g.mjs.map
