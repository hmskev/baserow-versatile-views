!(function() {
  try {
    var e = false ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
    var n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "e25d5461-e4b7-46c9-ae57-37d3e4a81b21", e._sentryDebugIdIdentifier = "sentry-dbid-e25d5461-e4b7-46c9-ae57-37d3e4a81b21");
  } catch (e2) {
  }
})();
const resource = {
  "paginator": {
    "page": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Strona" } },
    "of": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "z " }, { "t": 4, "k": "pages" }] } }
  },
  "copied": {
    "label": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Skopiowane!" } }
  },
  "sidebarApplication": {
    "renameApplication": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Zmie\u0144 nazw\u0119 " }, { "t": 4, "k": "type" }] } },
    "duplicateApplication": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Duplikat " }, { "t": 4, "k": "type" }] } },
    "viewTrash": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wy\u015Bwietl zawarto\u015B\u0107 kosza" } },
    "deleteApplication": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Usu\u0144 " }, { "t": 4, "k": "type" }] } },
    "snapshots": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Migawki" } },
    "rename": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zmie\u0144 nazw\u0119" } },
    "delete": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Usu\u0144" } },
    "duplicate": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zduplikuj" } }
  },
  "sidebar": {
    "createWorkspace": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Utw\xF3rz obszar roboczy" } },
    "inviteOthers": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zapro\u015B innych" } },
    "logoff": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wyloguj si\u0119" } },
    "errorNoWorkspace": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nie masz \u017Cadnych obszar\xF3w roboczych." } },
    "admin": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Admin" } },
    "dashboard": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pulpit" } },
    "trash": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kosz" } },
    "settings": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Moje ustawienia" } },
    "members": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cz\u0142onkowie" } },
    "notifications": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Powiadomienia" } },
    "addNewWorkspace": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dodaj nowy obszar roboczy" } },
    "adminTools": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Narz\u0119dzia administracyjne" } },
    "home": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Strona g\u0142\xF3wna" } },
    "adminSettings": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ustawienia administratora" } },
    "general": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Og\xF3lne" } },
    "people": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Osoby" } },
    "licenses": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Licencje" } }
  },
  "accountForm": {
    "nameLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Twoje imi\u0119" } },
    "languageLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "J\u0119zyk interfejsu" } }
  },
  "accountSettings": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Konto" } },
    "changedTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zmienione" } },
    "changedDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dane na Twoim koncie zosta\u0142y zmienione." } },
    "submitButton": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aktualizuj konto" } }
  },
  "settingsModal": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Moje ustawienia" } }
  },
  "passwordSettings": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zmie\u0144 has\u0142o" } },
    "changedTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Has\u0142o zosta\u0142o zmienione" } },
    "changedDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Twoje has\u0142o zosta\u0142o zmienione. Nast\u0119pnym razem, gdy b\u0119dziesz chcia\u0142 si\u0119 zalogowa\u0107, musisz u\u017Cy\u0107 nowego has\u0142a." } },
    "oldPasswordLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Stare has\u0142o" } },
    "oldPasswordRequiredError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Podaj stare has\u0142o." } },
    "newPasswordLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nowe has\u0142o" } },
    "repeatNewPasswordLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Powt\xF3rz nowe has\u0142o" } },
    "repeatNewPasswordMatchError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "To pole musi by\u0107 zgodne z nowym polem has\u0142a." } },
    "submitButton": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zmie\u0144 has\u0142o" } },
    "errorInvalidOldPasswordTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nieprawid\u0142owe has\u0142o" } },
    "errorInvalidOldPasswordMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nie mo\u017Cna zmieni\u0107 has\u0142a, poniewa\u017C stare has\u0142o jest nieprawid\u0142owe." } }
  },
  "deleteAccountSettings": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Usu\u0144 konto" } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Mo\u017Cesz przygotowa\u0107 usuni\u0119cie swojego konta, wpisuj\u0105c aktualne has\u0142o i klikaj\u0105c ten przycisk. Twoje konto zostanie trwale usuni\u0119te po up\u0142ywie " }, { "t": 4, "k": "days" }, { "t": 3, "v": " dni. W tym czasie, je\u015Bli zalogujesz si\u0119 ponownie, usuni\u0119cie konta zostanie anulowane." }] } },
    "workspaceNotice": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Osierocone grupy zostan\u0105 usuni\u0119te" } },
    "workspaceNoticeDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kiedy Twoje konto zostanie trwale usuni\u0119te i je\u017Celi jeste\u015B ostatnim aktywnym u\u017Cytkownikiem z uprawnieniami administratora, to wszystkie obszary robocze i dane w tych obszarach zostan\u0105 r\xF3wnie\u017C usuni\u0119te. Wskazane poni\u017Cej obszary robocze zostan\u0105 usuni\u0119te, poniewa\u017C jeste\u015B jedynym administratorem. Aby temu zapobiec, przed usuni\u0119ciem swojego konta nadaj innemu u\u017Cytkownikowi uprawnienia administratora." } },
    "orphanWorkspaces": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zostanie r\xF3wnie\u017C trwale usuni\u0119ty po up\u0142ywie czasu karencji" } },
    "orphanWorkspaceMemberCount": { "t": 0, "b": { "t": 1, "c": [{ "t": 2, "i": [{ "t": 3 }], "s": "nie udost\u0119pnione" }, { "t": 2, "i": [{ "t": 3 }], "s": "udost\u0119pnione jednemu u\u017Cytkownikowi" }, { "t": 2, "i": [{ "t": 3, "v": "udost\u0119pnione " }, { "t": 4, "k": "count" }, { "t": 3, "v": " u\u017Cytkownikom" }] }] } },
    "password": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Has\u0142o" } },
    "passwordConfirm": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Powt\xF3rz has\u0142o" } },
    "repeatPasswordMatchError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "To pole musi by\u0107 zgodne z pierwszym polem has\u0142a." } },
    "submitButton": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Usu\u0144 konto" } },
    "errorInvalidPasswordTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nieprawid\u0142owe has\u0142o" } },
    "errorInvalidPasswordMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nie mo\u017Cna usun\u0105\u0107 konta, poniewa\u017C podane has\u0142o jest nieprawid\u0142owe." } },
    "errorUserIsLastAdminTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Jedyny administrator" } },
    "errorUserIsLastAdminMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nie mo\u017Cna usun\u0105\u0107 konta, poniewa\u017C jeste\u015B jedynym pozosta\u0142ym administratorem tej instancji Baserow." } },
    "accountDeletedSuccessTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zaplanowano usuni\u0119cie konta" } },
    "accountDeletedSuccessMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Twoje konto jest przygotowane do usuni\u0119cia." } },
    "workspaceLoadingError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sprawdzenie obszar\xF3w roboczych nie powiod\u0142o si\u0119" } },
    "workspaceLoadingErrorDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sprawdzenie obszar\xF3w roboczych przed usuni\u0119ciem nie powiod\u0142o si\u0119. Od\u015Bwie\u017C stron\u0119." } }
  },
  "error": {
    "alreadyExistsTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "U\u017Cytkownik ju\u017C istnieje" } },
    "alreadyExistsMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "U\u017Cytkownik o podanym adresie e-mail ju\u017C istnieje." } },
    "passwordRequired": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wymagane jest has\u0142o." } },
    "invalidEmail": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Podaj poprawny adres e-mail." } },
    "disabledAccountTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Konto nieaktywne" } },
    "disabledAccountMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "To konto u\u017Cytkownika zosta\u0142o wy\u0142\u0105czone." } },
    "incorrectCredentialTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nieprawid\u0142owe dane uwierzytelniaj\u0105ce" } },
    "incorrectCredentialMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Podany adres e-mail lub has\u0142o jest nieprawid\u0142owe." } },
    "inputRequired": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nale\u017Cy wype\u0142ni\u0107." } },
    "disabledPasswordProviderTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Uwierzytelnianie za pomoc\u0105 has\u0142a jest wy\u0142\u0105czone." } },
    "disabledPasswordProviderMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Prosz\u0119 u\u017Cy\u0107 innego dostawcy us\u0142ug uwierzytelniania." } },
    "captchaVerificationFailedTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Weryfikacja captcha nie powiod\u0142a si\u0119" } },
    "captchaVerificationFailedMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Weryfikacja captcha nie powiod\u0142a si\u0119. Spr\xF3buj ponownie." } }
  },
  "field": {
    "language": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "J\u0119zyk" } },
    "emailAddress": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Adres e-mail" } },
    "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Twoje imi\u0119" } },
    "password": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Has\u0142o" } },
    "passwordRepeat": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Powt\xF3rz has\u0142o" } }
  },
  "invitationTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zaproszenie" } },
  "invitationMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "invitedBy" }, { "t": 3, "v": " zaprosi\u0142 Ci\u0119 do obszaru roboczego " }, { "t": 4, "k": "workspace" }, { "t": 3, "v": "." }] } },
  "workspaceForm": {
    "nameLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nazwa" } }
  },
  "leaveWorkspaceModal": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Wyrejestruj si\u0119 z obszaru " }, { "t": 4, "k": "workspace" }] } },
    "message": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Czy na pewno chcesz si\u0119 wyrejestrowa\u0107 z obszaru " }, { "t": 4, "k": "workspace" }, { "t": 3, "v": "? Nie b\u0119dziesz mie\u0107 dost\u0119pu do powi\u0105zanych z tym obszarem aplikacji, a je\u015Bli chcesz odzyska\u0107 dost\u0119p, administrator b\u0119dzie musia\u0142 ponownie zaprosi\u0107 Ci\u0119. Wyrejestrowanie nie spowoduje usuni\u0119cia obszaru roboczego. Pozostali u\u017Cytkownicy nadal b\u0119d\u0105 mie\u0107 do niego dost\u0119p. Wyrejestrowanie si\u0119 nie jest mo\u017Cliwe, je\u017Celi jeste\u015B jedynym pozosta\u0142ym administratorem danego obszaru roboczego." }] } },
    "leave": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wyrejestruj si\u0119 z obszaru roboczego" } }
  },
  "dashboardWorkspace": {
    "showMembers": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cz\u0142onkowie" } },
    "createApplication": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Utw\xF3rz" } }
  },
  "workspaceInvitation": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zaproszenie" } },
    "message": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Zosta\u0142e\u015B zaproszony przez " }, { "t": 4, "k": "by" }, { "t": 3, "v": " do obszaru roboczego " }, { "t": 4, "k": "workspace" }, { "t": 3, "v": "." }] } },
    "reject": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Odrzu\u0107" } },
    "accept": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Przyjmij" } }
  },
  "workspaceMemberModal": {
    "membersModalTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Cz\u0142onkowie " }, { "t": 4, "k": "group" }] } },
    "userDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "user" }, { "t": 3, "v": " - do\u0142\u0105czy\u0142 " }, { "t": 4, "k": "since" }, { "t": 3, "v": " temu" }] } },
    "invitationDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "zaproszony " }, { "t": 4, "k": "since" }, { "t": 3, "v": " temu" }] } },
    "sendInvite": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wy\u015Blij zaproszenie" } },
    "userAlreadyInWorkspaceTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "U\u017Cytkownik jest ju\u017C w grupie." } },
    "userDescriptionPendingDeletion": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "user" }, { "t": 3, "v": " - oczekiwanie na usuni\u0119cie" }] } },
    "userAlreadyInWorkspaceText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nie jest mo\u017Cliwe wys\u0142anie zaproszenia, gdy u\u017Cytkownik jest ju\u017C cz\u0142onkiem grupy." } }
  },
  "workspaceInviteForm": {
    "invitationFormTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zapro\u015B wysy\u0142aj\u0105c e-mail" } },
    "optionalMessagePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Opcjonalna wiadomo\u015B\u0107" } },
    "errorInvalidEmail": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Podaj poprawny adres e-mail." } },
    "errorTooLongMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Wiadomo\u015Bci s\u0105 ograniczone do " }, { "t": 4, "k": "amount" }, { "t": 3, "v": " znak\xF3w." }] } },
    "additionalRoles": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dodatkowe role" } }
  },
  "workspacesContext": {
    "search": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wyszukaj grupy" } },
    "noResults": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nie znaleziono wynik\xF3w" } },
    "createWorkspace": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Utw\xF3rz obszar roboczy" } }
  },
  "workspaceContext": {
    "renameWorkspace": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zmie\u0144 nazw\u0119 obszaru roboczego" } },
    "members": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cz\u0142onkowie" } },
    "viewTrash": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Poka\u017C zawarto\u015B\u0107 kosza" } },
    "leaveWorkspace": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wyrejestruj si\u0119 z obszaru roboczego" } },
    "deleteWorkspace": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Usu\u0144 obszar roboczy" } },
    "auditLog": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Log audytu" } },
    "settings": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ustawienia" } },
    "exportWorkspace": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wyeksportuj dane" } },
    "importWorkspace": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zaimportuj dane" } }
  },
  "createWorkspaceModal": {
    "createNew": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Utw\xF3rz nowy obszar roboczy" } },
    "add": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dodaj obszar roboczy" } },
    "defaultName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nienazwany obszar roboczy" } },
    "permissionDeniedBody": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nie masz wymaganych uprawnie\u0144 do utworzenia nowego obszaru roboczego." } },
    "permissionDeniedTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Brak dost\u0119pu" } }
  },
  "templateCategories": {
    "search": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wyszukaj szablony" } },
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Szablony" } }
  },
  "templateHeader": {
    "use": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "U\u017Cyj tego szablonu" } }
  },
  "trashSidebar": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u015Amieci" } },
    "unnamedWorkspace": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Nienazwany obszar roboczy z ID " }, { "t": 4, "k": "id" }] } },
    "workspaces": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Obszary robocze" } }
  },
  "trashContents": {
    "message": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Przywr\xF3\u0107 elementy usuni\u0119te w ci\u0105gu " }, { "t": 4, "k": "duration" }] } },
    "empty": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "W ci\u0105gu ostatnich trzech dni nic nie zosta\u0142o usuni\u0119te." } },
    "emptyButtonTrashed": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Trwale usu\u0144 " }, { "t": 4, "k": "type" }] } },
    "emptyButtonNotTrashed": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Opr\xF3\u017Cnij kosz nale\u017C\u0105cy do " }, { "t": 4, "k": "type" }, { "t": 3, "v": "'" }] } },
    "unnamed": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Nienazwany " }, { "t": 4, "k": "type" }, { "t": 3, "v": " " }, { "t": 4, "k": "id" }] } }
  },
  "trashEmptyModal": {
    "titleIsTrashed": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Czy na pewno chcesz trwale usun\u0105\u0107 " }, { "t": 4, "k": "name" }, { "t": 3, "v": "?" }] } },
    "titleIsNotTrashed": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Czy na pewno chcesz opr\xF3\u017Cni\u0107 kosz nale\u017C\u0105cy do " }, { "t": 4, "k": "name" }, { "t": 3, "v": "?" }] } },
    "messageIsTrashed": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Spowoduje to trwa\u0142e usuni\u0119cie wraz z zawarto\u015Bci\u0105 i bez mo\u017Cliwo\u015Bci odzyskania." } },
    "messageIsNotTrashed": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Spowoduje to trwa\u0142e usuni\u0119cie wymienionych element\xF3w bez mo\u017Cliwo\u015Bci ich odzyskania." } },
    "buttonIsTrashed": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Usu\u0144 trwale" } },
    "buttonIsNotTrashed": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Opr\xF3\u017Cnij" } }
  },
  "trashEntry": {
    "deletedUser": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Usuni\u0119ty u\u017Cytkownik" } },
    "fromParent": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "od " }, { "t": 4, "k": "parent" }] } },
    "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "user" }, { "t": 3, "v": " usun\u0105\u0142 " }, { "t": 4, "k": "type" }, { "t": 3, "v": " " }, { "t": 4, "k": "title" }, { "t": 3, "v": " " }, { "t": 4, "k": "parent" }] } },
    "restore": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Przywr\xF3\u0107" } },
    "andMore": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "...i " }, { "t": 4, "k": "count" }, { "t": 3, "v": " wi\u0119cej" }] } },
    "unnamed": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Nienazwany " }, { "t": 4, "k": "type" }, { "t": 3, "v": " " }, { "t": 4, "k": "id" }] } }
  },
  "trashModal": {
    "emptyTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nie znaleziono \u017Cadnych obszar\xF3w roboczych" } },
    "emptyMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nie jeste\u015B cz\u0142onkiem \u017Cadnego obszaru roboczego. Aplikacje takie jak bazy danych s\u0105 cz\u0119\u015Bciami sk\u0142adowymi obszar\xF3w roboczych, wi\u0119c nale\u017Cy najpierw utworzy\u0107 obszar roboczy." } },
    "emptyMessageWithoutCreatePermission": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nie jeste\u015B cz\u0142onkiem \u017Cadnego obszaru roboczego. Aplikacje takie jak bazy danych s\u0105 cz\u0119\u015Bciami sk\u0142adowymi obszar\xF3w roboczych, wi\u0119c aby je utworzy\u0107, administrator musi najpierw zaprosi\u0107 Ci\u0119 do obszaru roboczego." } }
  },
  "uploadViaURLUserFileUpload": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Prze\u015Blij z adresu URL" } },
    "urlLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "URL" } },
    "urlError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wymagany jest prawid\u0142owy adres URL." } }
  },
  "userFilesModal": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Prze\u015Blij z" } }
  },
  "uploadFileUserFileUpload": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Prze\u015Blij z mojego urz\u0105dzenia" } },
    "drop": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Upu\u015B\u0107 tutaj" } },
    "clickOrDrop": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kliknij lub upu\u015B\u0107 swoje pliki tutaj" } },
    "retry": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pon\xF3w pr\xF3b\u0119" } }
  },
  "createApplicationContext": {
    "fromTemplate": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Z szablonu" } },
    "fromTemplateDesc": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Skorzystaj z jednego z naszych szablon\xF3w, przyspieszy to rozpocz\u0119cie pracy" } },
    "tableDesc": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dodaj now\u0105 struktur\u0119 do przechowywania i zarz\u0105dzania danymi w swojej bazie." } },
    "table": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tabela" } },
    "importWorkspace": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Importuj dane" } },
    "importWorkspaceDesc": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Skopiuj istniej\u0105ce dane z innej bazy Baserow." } }
  },
  "applicationForm": {
    "nameLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nazwa" } },
    "namePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wprowad\u017A nazw\u0119..." } }
  },
  "connectingNotification": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ponowne \u0142\u0105czenie" } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ponowne \u0142\u0105czenie z serwerem." } }
  },
  "failedConnectingNotification": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nie uda\u0142o si\u0119" } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Po\u0142\u0105czenie z serwerem nie powiod\u0142o si\u0119. Prosz\u0119 od\u015Bwie\u017Cy\u0107 stron\u0119." } },
    "action": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Od\u015Bwie\u017C stron\u0119" } }
  },
  "AuthorizationErrorNotification": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "B\u0142\u0105d autoryzacji" } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wygl\u0105da na to, \u017Ce nie masz uprawnie\u0144, aby zobaczy\u0107 ten zas\xF3b." } },
    "action": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Od\u015Bwie\u017C stron\u0119" } }
  },
  "restoreNotification": {
    "restore": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Przywr\xF3\u0107 usuni\u0119te " }, { "t": 4, "k": "type" }] } }
  },
  "copyingNotification": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kopiowanie..." } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Przygotowywanie danych" } }
  },
  "pastingNotification": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wklejanie..." } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Przygotowywanie danych" } }
  },
  "clearingNotification": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Oczyszczenie..." } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Przygotowuj\u0119 Twoje dane" } }
  },
  "undoRedoNotification": {
    "undoingTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cofanie..." } },
    "undoingText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cofanie twojego dzia\u0142ania" } },
    "undoneTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cofn\u0105\u0107" } },
    "undoneText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Akcja zosta\u0142a cofni\u0119ta" } },
    "noMoreUndo": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nie ma wi\u0119cej czynno\u015Bci do cofni\u0119cia" } },
    "skippingUndoDueToError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cofni\u0119cie nie powiod\u0142o si\u0119 z powodu nieznanego b\u0142\u0119du. Pomijam go." } },
    "redoingTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Przerabianie..." } },
    "redoingText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ponawiam dzia\u0142anie" } },
    "redoneTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Przebudowany" } },
    "redoneText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Akcja zosta\u0142a wykonana ponownie" } },
    "noMoreRedo": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Brak akcji do ponownego przetworzenia" } },
    "skippingRedoDueToError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ponowne wykonanie nie powiod\u0142o si\u0119 z powodu nieznanego b\u0142\u0119du, pomijaj\u0105c go." } },
    "failed": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nie powiod\u0142o si\u0119" } }
  },
  "errorLayout": {
    "notFound": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Strona, kt\xF3rej szukasz, nie zosta\u0142a znaleziona. Mo\u017Ce to by\u0107 spowodowane tym, \u017Ce adres URL jest nieprawid\u0142owy lub \u017Ce nie masz uprawnie\u0144 dost\u0119pu do tej strony." } },
    "error": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Podczas otwierania strony wyst\u0105pi\u0142 b\u0142\u0105d. Nasi programi\u015Bci zostali powiadomieni o problemie. Prosz\u0119 spr\xF3bowa\u0107 od\u015Bwie\u017Cy\u0107 stron\u0119 lub powr\xF3ci\u0107 do pulpitu." } },
    "backDashboard": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Powr\xF3t do pulpitu" } },
    "backLogin": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Powr\xF3t do logowania" } },
    "wrong": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wyst\u0105pi\u0142 b\u0142\u0105d" } },
    "refresh": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Od\u015Bwie\u017C stron\u0119" } }
  },
  "dashboard": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pulpit" } },
    "alertTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Potrzebujemy Twojej pomocy!" } },
    "alertText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dziel\u0105c si\u0119 swoimi uwagami, pomo\u017Cesz nam ulepszy\u0107 Baserow \u2014 stanie si\u0119 jeszcze bardziej przydatny." } },
    "tweetContent": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }, { "t": 9 }, { "t": 3 }], "s": "Wypr\xF3buj @baserow, baz\u0119 danych open source typu no-code i alternatyw\u0119 dla Airtable!" } },
    "redditTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "'Baserow - baza danych open source typu no-code" } },
    "noWorkspaceTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nie znaleziono grup" } },
    "noWorkspaceText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nie jeste\u015B cz\u0142onkiem \u017Cadnej grupy. Aplikacje takie jak bazy danych nale\u017C\u0105 do grupy, wi\u0119c aby je stworzy\u0107 musisz stworzy\u0107 grup\u0119." } },
    "createWorkspace": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Utw\xF3rz obszar roboczy" } },
    "becomeGithubSponsor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zosta\u0144 sponsorem na GitHub" } },
    "starOnGitlab": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Oznacz nas gwiazdk\u0105 na GitLab" } },
    "shareOnTwitter": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wy\u015Blij tweet o Baserow" } },
    "shareOnReddit": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Podziel si\u0119 na Reddit" } },
    "shareOnFacebook": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Podziel si\u0119 na Facebooku" } },
    "shareOnLinkedIn": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Podziel si\u0119 na LinkedIn" } },
    "noWorkspaceTextWithoutCreatePermission": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nie jeste\u015B cz\u0142onkiem \u017Cadnej grupy. Aplikacje takie jak bazy danych nale\u017C\u0105 do grupy, wi\u0119c aby je stworzy\u0107, musisz najpierw zosta\u0107 zaproszony do grupy przez administratora." } },
    "apiDocumentation": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dokumentacja API" } },
    "noWorkspace": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nie ma \u017Cadnego obszaru roboczego" } },
    "tutorialsMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Odkryj potencja\u0142 Baserow" } },
    "addNew": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dodaj\u2026" } },
    "suggestedTemplates": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sugerowane szablony" } },
    "resources": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zasoby" } },
    "knowledgeBase": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Baza wiedzy" } },
    "knowledgeBaseMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Znajd\u017A odpowiedzi na swoje pytania" } },
    "tutorials": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Poradniki" } },
    "apiDocumentationMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dowiedz si\u0119 wi\u0119cej o naszym oprogramowaniu" } },
    "emptyWorkspace": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ten obszar roboczy jest pusty" } },
    "emptyWorkspaceMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zacznij od utworzenia nowej bazy danych lub aplikacji." } },
    "noWorkspaceDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Rozpocznij od utworzenia nowego obszaru roboczego" } },
    "starOnGitHub": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Oce\u0144 nas na GitHub" } }
  },
  "dashboardSidebar": {
    "workspaces": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Grupy" } },
    "links": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Linki" } },
    "knowledgeBase": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Baza wiedzy" } },
    "tutorials": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Poradniki" } },
    "userSettings": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ustawienia u\u017Cytkownika" } },
    "trash": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u015Amieci" } },
    "logoff": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wyloguj" } }
  },
  "login": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Witaj ponownie" } },
    "forgotPassword": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zapomnia\u0142e\u015B/a\u015B?" } },
    "emailPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Podaj sw\xF3j adres e-mail.." } },
    "passwordPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Podaj swoje has\u0142o.." } },
    "signUpText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zaczynasz w Baserow?" } },
    "signUp": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zarejestruj si\u0119" } },
    "displayPasswordLogin": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zaloguj si\u0119 za pomoc\u0105 adresu e-mail i has\u0142a" } },
    "redirecting": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Przekierowanie do dostawcy uwierzytelniania\u2026" } }
  },
  "resetPassword": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zresetuj has\u0142o" } },
    "newPassword": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nowe has\u0142o" } },
    "repeatNewPassword": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Powt\xF3rz nowe has\u0142o" } },
    "submit": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zmie\u0144 has\u0142o" } },
    "changed": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Has\u0142o zosta\u0142o zmienione" } },
    "errorInvalidLinkTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nieprawid\u0142owy link" } },
    "errorInvalidLinkMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nie mo\u017Cna zresetowa\u0107 has\u0142a, poniewa\u017C link jest nieprawid\u0142owy." } },
    "errorLinkExpiredTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Link wygas\u0142" } },
    "errorLinkExpiredMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Link resetowania has\u0142a wygas\u0142. Popro\u015B o nowy." } },
    "disabled": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Resetowanie has\u0142a jest wy\u0142\u0105czone" } },
    "disabledMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zresetowanie has\u0142a nie jest mo\u017Cliwe, poniewa\u017C zosta\u0142o wy\u0142\u0105czone." } },
    "message": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mo\u017Cesz teraz zalogowa\u0107 si\u0119 do bazy Baserow u\u017Cywaj\u0105c swojego nowego has\u0142a." } },
    "repeatPasswordPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Powt\xF3rz swoje nowe has\u0142o" } },
    "errorLinkAlreadyUsedTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ten link ju\u017C zosta\u0142 u\u017Cyty" } },
    "errorLinkAlreadyUsedMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ten link do resetowania has\u0142a zosta\u0142 ju\u017C u\u017Cyty. Popro\u015B o nowy." } }
  },
  "signup": {
    "headTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Za\u0142\xF3\u017C konto" } },
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zarejestruj si\u0119" } },
    "disabled": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Rejestracja jest wy\u0142\u0105czona" } },
    "disabledMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nie ma mo\u017Cliwo\u015Bci za\u0142o\u017Cenia konta, poniewa\u017C opcja ta zosta\u0142a wy\u0142\u0105czona." } },
    "requireFirstUser": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Witamy w Baserow!" } },
    "requireFirstUserMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wype\u0142nij poni\u017Cszy formularz, aby utworzy\u0107 konto administratora." } },
    "emailPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wpisz sw\xF3j adres e-mail.." } },
    "namePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wpisz nazw\u0119 u\u017Cytkownika.." } },
    "passwordPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wprowad\u017A swoje has\u0142o." } },
    "passwordRepeatPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Potwierd\u017A swoje has\u0142o..." } },
    "loginText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Posiadasz ju\u017C konto?" } },
    "login": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zaloguj si\u0119" } }
  },
  "forgotPassword": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nie pami\u0119tasz has\u0142a?" } },
    "message": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Podaj sw\xF3j adres e-mail, wy\u015Blemy Ci link do zresetowania has\u0142a." } },
    "submit": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wy\u015Blij link" } },
    "confirmation": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "W wiadomo\u015Bci, kt\xF3r\u0105 wys\u0142ali\u015Bmy na adres " }, { "t": 4, "k": "email" }, { "t": 3, "v": ", znajduje si\u0119 link do zresetowania has\u0142a w Baserow." }] } },
    "disabled": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Opcja resetowania has\u0142a jest wy\u0142\u0105czona" } },
    "disabledMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nie ma mo\u017Cliwo\u015Bci zresetowania has\u0142a, poniewa\u017C opcja ta zosta\u0142a wy\u0142\u0105czona." } },
    "loginText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Masz ju\u017C konto i has\u0142o?" } },
    "confirmationTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sprawd\u017A sw\xF3j e-mail" } },
    "goBack": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wr\xF3\u0107" } }
  },
  "settings": {
    "settingsTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ustawienia administratora" } },
    "baserowInstanceId": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Identyfikator ID instancji" } },
    "instanceIdDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "ID instancji to unikalny identyfikator twojej instalacji Baserow." } },
    "accountRestrictions": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ograniczenia konta" } },
    "settingAllowResetPasswordName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zezw\xF3l na resetowanie has\u0142a" } },
    "settingAllowResetPasswordDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Domy\u015Blnie u\u017Cytkownicy mog\u0105 poprosi\u0107 o link do zresetowania has\u0142a." } },
    "settingAllowResetPasswordWarning": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pami\u0119taj, \u017Ce mo\u017Cesz zablokowa\u0107 sobie dost\u0119p do systemu. Dost\u0119pu nie mo\u017Cna przywr\xF3ci\u0107, je\u015Bli zapomnisz has\u0142a." } },
    "settingAllowNewAccountsName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zezw\xF3l na tworzenie nowych kont" } },
    "settingAllowNewAccountsDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Domy\u015Blnie ka\u017Cdy u\u017Cytkownik odwiedzaj\u0105cy Twoj\u0105 domen\u0119 w Baserow mo\u017Ce za\u0142o\u017Cy\u0107 nowe konto." } },
    "settingAllowSignupsViaWorkspaceInvitationsName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zezw\xF3l na rejestracj\u0119 przez zaproszenia do obszaru roboczego" } },
    "settingAllowSignupsViaWorkspaceInvitationDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ta opcja pozwala u\u017Cytkownikom zaproszonym bezpo\u015Brednio zak\u0142ada\u0107 konta, nawet je\u015Bli zak\u0142adanie nowych kont jest wy\u0142\u0105czone." } },
    "userDeletionGraceDelay": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Usuwanie u\u017Cytkownik\xF3w" } },
    "settingUserDeletionGraceDelay": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Usu\u0144 okres karencji" } },
    "settingUserDeletionGraceDelayDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Liczba dni bez logowania, po kt\xF3rych konto przygotowane do usuni\u0119cia zostanie usuni\u0119te na trwa\u0142e." } },
    "invalidAccountDeletionGraceDelay": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ta warto\u015B\u0107 jest wymagana i musi by\u0107 dodatni\u0105 liczb\u0105 ca\u0142kowit\u0105 mniejsz\u0105 ni\u017C 32000" } },
    "enabled": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "w\u0142\u0105czony" } },
    "settingAllowNonStaffCreateWorkspaceOperationDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Domy\u015Blnie ka\u017Cdy u\u017Cytkownik mo\u017Ce utworzy\u0107 nowy obszar roboczy. Wy\u0142\u0105cz t\u0119 opcj\u0119, aby nowe obszary robocze mogli dodawa\u0107 wy\u0142\u0105cznie administratorzy." } },
    "settingAllowNonStaffCreateWorkspaceOperationWarning": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dla nowych u\u017Cytkownik\xF3w zostanie automatycznie utworzony obszar roboczy, w kt\xF3rym b\u0119d\u0105 mie\u0107 uprawnienia administratora." } },
    "settingAllowNonStaffCreateWorkspaceOperation": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pozw\xF3l wszystkim u\u017Cytkownikom tworzy\u0107 nowe obszary robocze" } },
    "settingTrackWorkspaceUsage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Monitoruj u\u017Cycie obszaru roboczego" } },
    "settingTrackWorkspaceUsageDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "W\u0142\u0105cza nocne zadanie zliczaj\u0105ce wykorzystanie wierszy i plik\xF3w w obszarze roboczym. Dane b\u0119d\u0105 dost\u0119pne na stronie administratora w wersji premium." } },
    "maintenance": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Konserwacja" } },
    "emailVerification": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Weryfikacja adresu e-mail" } },
    "emailVerificationDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Okre\u015Bla opcj\u0119 weryfikacji adres\xF3w e-mail." } },
    "emailVerificationNoVerification": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Bez weryfikacji" } },
    "emailVerificationRecommended": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zalecane" } },
    "emailVerificationEnforced": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wymuszone" } },
    "baserowVersion": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wersja Baserow" } },
    "baserowVersionDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wersja tej instancji." } },
    "userSettings": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "U\u017Cytkownik" } },
    "settingsVerifyImportSignatureDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aby upewni\u0107 si\u0119, \u017Ce dane nie zosta\u0142y sfa\u0142szowane, po w\u0142\u0105czeniu tej opcji sprawdzany jest podpis importowanych plik\xF3w." } },
    "settingsVerifyImportSignature": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zweryfikuj podpis importu" } }
  },
  "formSidebar": {
    "actions": {
      "addAll": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dodaj wszystko" } },
      "removeAll": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Usu\u0144 wszystko" } },
      "addField": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dodaj pole" } }
    },
    "fieldsDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wszystkie pola zosta\u0142y dodane do formularza." } },
    "prefillInfoLink": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wst\u0119pnie wype\u0142niaj warto\u015Bci dynamicznie" } },
    "modal": {
      "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wype\u0142nij wst\u0119pnie lub ukryj pola w spo\xF3b dynamiczny" } },
      "descriptionPartOne": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aby przyspieszy\u0107 wysy\u0142anie, formularze mog\u0105 by\u0107 wst\u0119pnie wype\u0142nione." } },
      "descriptionPartTwo": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wszystkie pola dost\u0119pne w formularzu mog\u0105 by\u0107 wst\u0119pnie wype\u0142nione." } },
      "howToPrefill": {
        "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Jak wst\u0119pnie wype\u0142ni\u0107 formularz" } },
        "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Je\u015Bli chcesz wst\u0119pnie wype\u0142ni\u0107 formularz, mo\u017Cesz to zrobi\u0107 dodaj\u0105c w adresie URL formularza parametry zapytania z prefiksem `prefill`. Pozwala to unikn\u0105\u0107 kolizji z innymi parametrami w zapytaniu." } }
      },
      "format": {
        "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Format" } },
        "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Format parametr\xF3w zapytania jest nast\u0119puj\u0105cy:" } },
        "codeSnippet": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "?prefill_&lt;field_name&gt;=&lt;value&gt;" } }
      },
      "example": {
        "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Przyk\u0142ad" } },
        "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "W poni\u017Cszym przyk\u0142adzie pole o nazwie `Name` zostanie wst\u0119pnie wype\u0142nione warto\u015Bci\u0105 `Mike`" } },
        "codeSnippet": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "?prefill_Name=Mike" } }
      },
      "spaces": {
        "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Spacje" } },
        "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Spacje w nazwie pola s\u0105 zast\u0119powane symbolem `+`, co pozwala unikn\u0105\u0107 problem\xF3w z parametrami zapytania." } },
        "codeSnippet": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "?prefill_my+field=Mike" } }
      },
      "multipleValues": {
        "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wiele warto\u015Bci" } },
        "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Je\u015Bli chcesz wype\u0142ni\u0107 wiele p\xF3l, mo\u017Cesz to zrobi\u0107 dodaj\u0105c `,` pomi\u0119dzy warto\u015Bciami." } },
        "codeSnippet": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "?prefill_multi+select=Mike,John" } }
      },
      "specialFieldTypes": {
        "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Specjalne rodzaje p\xF3l" } },
        "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Generalnie warto\u015B\u0107 wst\u0119pnego wype\u0142nienia jest taka sama jak warto\u015B\u0107 pola. Istniej\u0105 jednak wyj\u0105tki, w kt\xF3rych warto\u015B\u0107 wst\u0119pna jest zast\u0119powana inn\u0105 warto\u015Bci\u0105." } },
        "ratingField": {
          "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pole oceny" } },
          "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "W polu oceny mo\u017Cna poda\u0107 warto\u015B\u0107 okre\u015Blaj\u0105c\u0105, ile gwiazdek ma by\u0107 wype\u0142nionych." } },
          "codeSnippet": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "?prefill_rating=3" } }
        },
        "linkRowField": {
          "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pole wiersza powi\u0105zanego" } },
          "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pole wiersza powi\u0105zanego przyjmuje warto\u015Bci z listy rozwijanej." } },
          "codeSnippet": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "?prefill_link+row=Mike" } }
        },
        "selectField": {
          "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pole wyboru pojedynczego / wielokrotnego" } },
          "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pole wyboru pojedynczego mo\u017Ce mie\u0107 warto\u015B\u0107 jednego z element\xF3w z listy rozwijanej. Natomiast pole wyboru wielokrotnego mo\u017Ce mie\u0107 warto\u015B\u0107 jednego lub wielu element\xF3w." } },
          "codeSnippet": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "?prefill_single+select=Mike" } }
        },
        "dateField": {
          "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pole daty" } },
          "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pole daty mo\u017Ce zawiera\u0107 dat\u0119 w jednym z podanych poni\u017Cej format\xF3w. Warto\u015B\u0107 b\u0119dzie interpretowana zgodnie z formatem daty ustawionym dla tego pola." } },
          "codeSnippet": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\n// Normy\nISO_8601\n\n// Formaty og\xF3lne\n'YYYY-MM-DD',\n'YYYY-MM-DD hh:mm A',\n'YYYY-MM-DD HH:mm',\n\n// EU\n'DD/MM/YYYY', \n'DD/MM/YYYY hh:mm A', \n'DD/MM/YYYY HH:mm'\n\n// US\n'MM/DD/YYYY', \n'MM/DD/YYYY hh:mm A', \n'MM/DD/YYYY HH:mm'" } }
        }
      },
      "howToHide": {
        "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Je\u015Bli chcesz ukry\u0107 pole w spos\xF3b dynamiczny, mo\u017Cesz to zrobi\u0107 dodaj\u0105c w adresie URL parametry zapytania z prefiksem `hide_`. Pozwala to unikn\u0105\u0107 kolizji z innymi parametrami w zapytaniu." } },
        "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Jak ukry\u0107 pole" } }
      }
    },
    "prefillOrHideInfoLink": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wype\u0142nij wst\u0119pnie lub ukryj dynamicznie" } },
    "notifyUserOnSubmit": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Otrzymaj powiadomienie po wys\u0142aniu formularza" } },
    "fields": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pola" } },
    "rowEditableBy": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zaktualizuj wiersze poprzez pola" } },
    "rowEditableByDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wiersze w tej tabeli mo\u017Cna aktualizowa\u0107 za pomoc\u0105 tego formularza poprzez nast\u0119puj\u0105ce pola edycji wiersza:" } }
  },
  "job": {
    "statePending": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "W oczekiwaniu na rozpocz\u0119cie\u2026" } },
    "stateStarted": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Uruchomiono..." } },
    "stateFinished": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zako\u0144czono" } },
    "stateFailed": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wyst\u0105pi\u0142 b\u0142\u0105d" } },
    "errorJobAlreadyRunningTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ju\u017C uruchomiono" } },
    "errorJobAlreadyRunningDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zadanie importu jest ju\u017C uruchomione. Zanim rozpoczniesz nowe, musisz poczeka\u0107, a\u017C poprzednie zostanie zako\u0144czone." } },
    "errorJobCannotBeCancelledTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nie mo\u017Cna anulowa\u0107" } },
    "errorJobCannotBeCancelledDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nie ma mo\u017Cliwo\u015Bci anulowania zadania, poniewa\u017C zosta\u0142o ono ju\u017C zako\u0144czone.\nAby je skasowa\u0107, usu\u0144 pierwsz\u0105 migawk\u0119 z poni\u017Cszej listy." } },
    "stateCanceled": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Anulowano" } }
  },
  "datetime": {
    "daysAgo": { "t": 0, "b": { "t": 1, "c": [{ "t": 2, "i": [{ "t": 3 }], "s": "0 dni temu" }, { "t": 2, "i": [{ "t": 3 }], "s": "1 dzie\u0144 temu" }, { "t": 2, "i": [{ "t": 4, "k": "n" }, { "t": 3, "v": " dni temu" }] }] } },
    "monthsAgo": { "t": 0, "b": { "t": 1, "c": [{ "t": 2, "i": [{ "t": 3 }], "s": "0 miesi\u0119cy temu" }, { "t": 2, "i": [{ "t": 3 }], "s": "1 miesi\u0105c temu" }, { "t": 2, "i": [{ "t": 4, "k": "n" }, { "t": 3, "v": " miesi\u0105ce/miesi\u0119cy temu" }] }] } },
    "yearsAgo": { "t": 0, "b": { "t": 1, "c": [{ "t": 2, "i": [{ "t": 3 }], "s": "0 lat temu" }, { "t": 2, "i": [{ "t": 3 }], "s": "1 rok temu" }, { "t": 2, "i": [{ "t": 4, "k": "n" }, { "t": 3, "v": " lata/lat temu" }] }] } },
    "secondsAgo": { "t": 0, "b": { "t": 1, "c": [{ "t": 2, "i": [{ "t": 3 }], "s": "Przed chwil\u0105" }, { "t": 2, "i": [{ "t": 3 }], "s": "1 sekunda temu" }, { "t": 2, "i": [{ "t": 4, "k": "n" }, { "t": 3, "v": " sekundy/sekund temu" }] }] } },
    "minutesAgo": { "t": 0, "b": { "t": 1, "c": [{ "t": 2, "i": [{ "t": 3 }], "s": "0 minut temu" }, { "t": 2, "i": [{ "t": 3 }], "s": "1 minuta temu" }, { "t": 2, "i": [{ "t": 4, "k": "n" }, { "t": 3, "v": " minuty/minut temu" }] }] } },
    "hoursAgo": { "t": 0, "b": { "t": 1, "c": [{ "t": 2, "i": [{ "t": 3 }], "s": "0 godzin temu" }, { "t": 2, "i": [{ "t": 3 }], "s": "1 godzina temu" }, { "t": 2, "i": [{ "t": 4, "k": "n" }, { "t": 3, "v": " godziny/godzin temu" }] }] } },
    "justNow": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "przed chwil\u0105" } },
    "lessThanMinuteAgo": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "mniej ni\u017C minut\u0119 temu" } }
  },
  "duplicateApplicationJobType": {
    "duplicating": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Duplikowanie" } },
    "duplicatedTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aplikacja zosta\u0142a zduplikowana" } }
  },
  "InstallTemplateJobType": {
    "installedTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Szablon zosta\u0142 zainstalowany" } },
    "installing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Instalowanie" } }
  },
  "membersSettings": {
    "membersTable": {
      "actions": {
        "remove": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Usu\u0144 z obszaru roboczego" } },
        "copyEmail": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Skopiuj adres e-mail" } }
      },
      "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "userAmount" }, { "t": 3, "v": " cz\u0142onk\xF3w w obszarze roboczym " }, { "t": 4, "k": "workspaceName" }] } },
      "inviteMember": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zapro\u015B cz\u0142onka zespo\u0142u" } },
      "columns": {
        "email": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Adres e-mail" } },
        "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nazwa" } },
        "role": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Domy\u015Blna rola" } },
        "teams": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zespo\u0142y" } },
        "highestRole": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Najwy\u017Csza rola" } },
        "highestRoleHelpText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Najwy\u017Csza rola, jak\u0105 ten u\u017Cytkownik przyzna\u0142 im bezpo\u015Brednio lub w ramach zespo\u0142u, w odniesieniu do dowolnego elementu w tym obszarze roboczym" } },
        "highestRoleInstanceHelpText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Najwy\u017Csza rola tego u\u017Cytkownika w obecnej instancji" } },
        "2fa": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "2FA" } }
      }
    },
    "invitesTable": {
      "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Liczba zaprosze\u0144 oczekuj\u0105cych na potwierdzenie w obszarze " }, { "t": 4, "k": "workspaceName" }, { "t": 3, "v": ": " }, { "t": 4, "k": "invitesAmount" }] } },
      "columns": {
        "email": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Adres e-mail" } },
        "message": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wiadomo\u015B\u0107" } },
        "role": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Domy\u015Blna rola" } }
      },
      "actions": {
        "remove": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Anuluj zaproszenie" } },
        "copyEmail": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Skopiuj e-mail" } }
      }
    },
    "invitesTabTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zaproszenia" } },
    "membersInviteModal": {
      "submit": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wy\u015Blij zaproszenie" } },
      "errors": {
        "userAlreadyInWorkspace": {
          "text": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nie mo\u017Cna wys\u0142a\u0107 zaproszenia, gdy u\u017Cytkownik jest ju\u017C cz\u0142onkiem danego obszaru roboczego." } },
          "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "U\u017Cytkownik jest ju\u017C zarejestrowany w tym obszarze roboczym." } }
        }
      },
      "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zapro\u015B cz\u0142onk\xF3w do obszaru roboczego" } },
      "helpIconText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wybrana rola b\u0119dzie domy\u015Bln\u0105 rol\u0105 u\u017Cytkownika w tym obszarze roboczym." } }
    },
    "membersTabTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cz\u0142onkowie" } }
  },
  "crudTableSearch": {
    "search": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Szukaj" } }
  },
  "UserSessionExpiredNotification": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sesja wygas\u0142a" } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zosta\u0142e\u015B wylogowany, poniewa\u017C Tw\xF3j token uwierzytelniaj\u0105cy wygas\u0142. Prosz\u0119, zaloguj si\u0119 ponownie." } }
  },
  "memberSelectionList": {
    "searchPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Szukaj \u2026" } },
    "selectedAmountLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Wybrano: " }, { "t": 4, "k": "count" }] } }
  },
  "memberAssignmentModalFooter": {
    "invite": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Zapro\u015B: " }, { "t": 4, "k": "count" }] } },
    "selectAll": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wybierz wszystko" } },
    "deselectAll": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Usu\u0144 wyb\xF3r" } }
  },
  "removeFromWorkspaceModal": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Potwierd\u017A usuni\u0119cie z obszaru roboczego" } },
    "confirmation": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Czy na pewno chcesz usun\u0105\u0107 " }, { "t": 4, "k": "name" }, { "t": 3, "v": " z " }, { "t": 4, "k": "workspaceName" }, { "t": 3, "v": "? Tej czynno\u015Bci nie mo\u017Cna cofn\u0105\u0107." }] } },
    "remove": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Usu\u0144" } }
  },
  "permissionsUpdatedNotification": {
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mo\u017Ce to mie\u0107 wp\u0142yw na to, do czego masz dost\u0119p, prosz\u0119 prze\u0142adowa\u0107 stron\u0119." } },
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zaktualizowano uprawnienia" } },
    "action": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Prze\u0142aduj" } }
  },
  "editRoleContext": {
    "billableRolesLink": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Role obj\u0119te planem p\u0142atnym" } },
    "additionalRoles": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dodatkowe role" } }
  },
  "highestPaidRoleField": {
    "billable": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "P\u0142atny" } }
  },
  "notificationPanel": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Powiadomienia" } },
    "markAllAsRead": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zaznacz jako przeczytane" } },
    "clearAll": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wyczy\u015B\u0107 wszystko" } },
    "noNotificationTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nie masz \u017Cadnych powiadomie\u0144" } },
    "noNotification": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Powiadomimy Ci\u0119 o wa\u017Cnych aktualizacjach oraz ka\u017Cdorazowo, gdy kto\u015B wspomni o Tobie w bazie Baserow." } },
    "newNotificationsAvailable": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Masz nowe powiadomienia" } },
    "refresh": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Od\u015Bwie\u017C" } }
  },
  "connectingToast": {
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Trwa pr\xF3ba przywr\xF3cenia funkcji aktualizacji na bie\u017C\u0105co." } },
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ponowne \u0142\u0105czenie" } }
  },
  "undoRedoToast": {
    "undoingTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cofanie\u2026" } },
    "undoingText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Trwa cofanie twojej operacji" } },
    "redoingTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ponawianie\u2026" } },
    "undoneTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cofni\u0119to" } },
    "undoneText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Operacja zosta\u0142a cofni\u0119ta" } },
    "noMoreUndo": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nie ma wi\u0119cej operacji do cofni\u0119cia" } },
    "skippingUndoDueToError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cofni\u0119cie nie powiod\u0142o si\u0119 z powodu nieznanego b\u0142\u0119du. Cofni\u0119cie zostanie pomini\u0119te." } },
    "redoingText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Twoja operacja jest ponawiana" } },
    "redoneTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ponowiono" } },
    "redoneText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Operacja zosta\u0142a wykonana ponownie" } },
    "noMoreRedo": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Brak operacji, kt\xF3re mo\u017Cnaby wykona\u0107 ponownie" } },
    "skippingRedoDueToError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ponowienie operacji nie powiod\u0142o si\u0119 z powodu nieznanego b\u0142\u0119du. Ponowienie zostanie pomini\u0119te." } },
    "failed": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nie powiod\u0142o si\u0119" } }
  },
  "permissionsUpdatedToast": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Uprawnienia zosta\u0142y zaktualizowane" } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aktualizacja mog\u0142a spowodowa\u0107 zmiany w dost\u0119pie do zasob\xF3w. Prze\u0142aduj stron\u0119." } },
    "action": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Prze\u0142aduj" } }
  },
  "clearAllNotificationsConfirmModal": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Czy na pewno chcesz usun\u0105\u0107 wszystkie powiadomienia?" } },
    "message": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wszystkie powiadomienia zostan\u0105 trwale usuni\u0119te i nie b\u0119dzie mo\u017Cna ich ponownie wy\u015Bwietli\u0107." } }
  },
  "uploadFileDropzone": {
    "drop": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Upu\u015B\u0107 tutaj" } },
    "clickOrDrop": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kliknij lub upu\u015B\u0107 pliki tutaj" } },
    "errorTooManyFilesTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zbyt wiele plik\xF3w" } },
    "errorTooManyFilesMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mo\u017Cna przes\u0142a\u0107 tylko jeden plik" } },
    "errorWrongFileTypeTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nieprawid\u0142owy typ pliku" } },
    "errorWrongFileTypeMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Nie mo\u017Cna przes\u0142a\u0107 plik\xF3w typu " }, { "t": 4, "k": "type" }] } }
  },
  "failedConnectingToast": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nie powiod\u0142o si\u0119" } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Po\u0142\u0105czenie z serwerem nie powiod\u0142o si\u0119. Prosz\u0119 od\u015Bwie\u017Cy\u0107 stron\u0119." } },
    "action": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Od\u015Bwie\u017C stron\u0119" } }
  },
  "authorizationErrorToast": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "B\u0142\u0105d autoryzacji" } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wygl\u0105da na to, \u017Ce nie masz uprawnie\u0144 do wy\u015Bwietlenia tego zasobu." } },
    "action": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Od\u015Bwie\u017C stron\u0119" } }
  },
  "userSessionExpiredToast": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sesja wygas\u0142a" } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zosta\u0142e\u015B wylogowany, poniewa\u017C tw\xF3j token uwierzytelnienia wygas\u0142. Zaloguj si\u0119 ponownie." } }
  },
  "restoreToast": {
    "restore": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Przywr\xF3\u0107 usuni\u0119te " }, { "t": 4, "k": "type" }] } }
  },
  "copyingToast": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kopiowanie\u2026" } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Twoje dane s\u0105 przygotowywane" } }
  },
  "PastingToast": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wklejanie\u2026" } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Twoje dane s\u0105 przygotowywane" } }
  },
  "clearingToast": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Usuwanie\u2026" } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Twoje dane s\u0105 przygotowywane" } }
  },
  "workspaceInvitationAcceptedNotification": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "sender" }, { "t": 3, "v": " zaakceptowa\u0142 Twoje zaproszenie do obszaru roboczego " }, { "t": 4, "k": "workspaceName" }] } },
    "deletedUser": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Usuni\u0119ty u\u017Cytkownik" } }
  },
  "workspaceInvitationRejectedNotification": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "sender" }, { "t": 3, "v": " odrzuci\u0142 Twoje zaproszenie do obszaru roboczego " }, { "t": 4, "k": "workspaceName" }] } },
    "deletedUser": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Usuni\u0119ty u\u017Cytkownik" } }
  },
  "workspaceInvitationCreatedNotification": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "sender" }, { "t": 3, "v": " zaprosi\u0142 Ci\u0119 do obszaru " }, { "t": 4, "k": "workspaceName" }] } },
    "deletedUser": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Usuni\u0119ty u\u017Cytkownik" } }
  },
  "versionUpgradeNotification": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Wersja " }, { "t": 4, "k": "version" }, { "t": 3, "v": " ju\u017C jest dost\u0119pna! Zobacz, co nowego." }] } }
  },
  "integrationCreateEditModal": {
    "createTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nowa integracja" } },
    "editTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Edytuj integracj\u0119" } },
    "warningTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ostrze\u017Cenie" } }
  },
  "integrationEditForm": {
    "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nazwa" } },
    "namePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wprowad\u017A nazw\u0119 integracji..." } }
  },
  "dropdown": {
    "empty": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Brak element\xF3w" } }
  },
  "styleSidePanel": {
    "paddingTop": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Odst\u0119p g\xF3rny" } },
    "paddingBottom": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Odst\u0119p dolny" } }
  },
  "styleBoxForm": {
    "paddingError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Warto\u015B\u0107 musi by\u0107 liczb\u0105 ca\u0142kowit\u0105 z przedzia\u0142u od 0 do 200." } }
  },
  "richTextEditorMentionsList": {
    "notFound": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nie znaleziono \u017Cadnych u\u017Cytkownik\xF3w" } }
  },
  "emailNotifications": {
    "label": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wzmianki, komentarze i inne powiadomienia" } },
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Powiadomienia e-mail" } },
    "submitButton": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cz\u0119stotliwo\u015B\u0107 aktualizacji" } },
    "daily": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Codziennie" } },
    "never": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nigdy" } },
    "weekly": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Co tydzie\u0144" } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Skonfiguruj cz\u0119stotliwo\u015B\u0107 wysy\u0142ania wiadomo\u015Bci e-mail." } },
    "instant": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Natychmiastowo" } }
  },
  "formulaInputField": {
    "errorInvalidFormula": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ta formu\u0142a jest nieprawid\u0142owa." } },
    "advancedFormulaMode": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tryb zaawansowany" } },
    "invalidFormulaTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nieprawid\u0142owa formu\u0142a" } },
    "invalidSyntax": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ta formu\u0142a jest nieprawid\u0142owa. Sprawd\u017A sk\u0142adni\u0119." } }
  },
  "dataExplorer": {
    "noMatchingNodesText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nie znaleziono pasuj\u0105cych wynik\xF3w." } },
    "noProvidersText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nie znaleziono dostawc\xF3w danych. Aby rozpocz\u0105\u0107, mo\u017Cesz na przyk\u0142ad doda\u0107 \u017Ar\xF3d\u0142o danych lub parametr strony." } }
  },
  "workspaceSettingsModal": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ustawienia obszaru roboczego" } }
  },
  "workspaceSettingType": {
    "generativeAI": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Generatywna AI" } }
  },
  "generativeAIModelType": {
    "openai": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "OpenAI" } },
    "openaiApiKeyLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Klucz API" } },
    "ollama": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ollama" } },
    "ollamaHostLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Host" } },
    "openaiApiKeyDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Je\u015Bli chcesz w\u0142\u0105czy\u0107 t\u0119 integracj\u0119, podaj klucz API OpenAI. [Instrukcje dot. uzyskania klucza API](https://help.openai.com/en/articles/4936850-where-do-i-find-my-openai-api-key)." } },
    "openaiOrganization": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Organizacja (opcjonalnie)" } },
    "openaiModelsLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "W\u0142\u0105czone modele" } },
    "openaiModelsDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Podaj [modele OpenAI](https://platform.openai.com/docs/models/continuous-model-upgrades), kt\xF3re mog\u0105 by\u0107 u\u017Cywane w bazie Baserow. Poszczeg\xF3lne opcje oddziel przecinkami (np. `gpt-3.5-turbo,gpt-4`)" } },
    "ollamaHostDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Podaj nazw\u0119 hosta serwera [Ollama](https://ollama.com/). Zazwyczaj dzia\u0142a on lokalnie na urz\u0105dzeniu u\u017Cytkownika." } },
    "ollamaModelsLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "W\u0142\u0105czone modele" } },
    "ollamaModelsDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Podaj list\u0119 [zainstalowanych modeli Ollama](https://ollama.com/library). Poszczeg\xF3lne opcje oddziel przecinkami (np. `llama2,mistral`). Nale\u017Cy pami\u0119ta\u0107, \u017Ce model musi zosta\u0107 pobrany i zainstalowany, zanim b\u0119dzie mo\u017Cna go u\u017Cy\u0107." } },
    "anthropicApiKeyDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Je\u015Bli chcesz w\u0142\u0105czy\u0107 t\u0119 integracj\u0119, podaj klucz API Anthropic. [Instrukcje dot. uzyskania klucza API](https://docs.anthropic.com/en/api/getting-started)." } },
    "mistralApiKeyLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Klucz API" } },
    "anthropicModelsDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Podaj [modele Anthropic](https://docs.anthropic.com/en/docs/about-claude/models), kt\xF3re mog\u0105 by\u0107 u\u017Cywane w bazie Baserow. Poszczeg\xF3lne opcje oddziel przecinkami (np. `claude-3-5-sonnet-20241022,claude-3-opus-20240229`)" } },
    "anthropicApiKeyLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Klucz API" } },
    "anthropic": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Anthropic" } },
    "anthropicModelsLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "W\u0142\u0105czone modele" } },
    "mistral": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mistral" } },
    "mistralModelsLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "W\u0142\u0105czone modele" } },
    "mistralModelsDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Podaj [modele Mistral](https://docs.mistral.ai/getting-started/models/models_overview/), kt\xF3re mog\u0105 by\u0107 u\u017Cywane w bazie Baserow. Poszczeg\xF3lne opcje oddziel przecinkami (np. `mistral-large-latest,mistral-small-latest`)" } },
    "mistralApiKeyDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Je\u015Bli chcesz w\u0142\u0105czy\u0107 t\u0119 integracj\u0119, podaj klucz API Mistral. [Instrukcje dot. uzyskania klucza API](https://docs.mistral.ai/getting-started/quickstart/)." } },
    "openRouterApiKeyLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Klucz API" } },
    "openRouterApiKeyDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Je\u015Bli chcesz w\u0142\u0105czy\u0107 t\u0119 integracj\u0119, podaj klucz API OpenRouter. [Instrukcje dot. uzyskania klucza API](https://openrouter.ai/settings/keys)." } },
    "openRouterOrganization": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Organizacja (opcjonalnie)" } },
    "openRouterModelsLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "W\u0142\u0105czone modele" } },
    "openRouterModelsDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Podaj [modele OpenRouter](https://openrouter.ai/models), kt\xF3re mog\u0105 by\u0107 u\u017Cywane w bazie Baserow. Poszczeg\xF3lne opcje oddziel przecinkami (np. `openai/gpt-4o,anthropic/claude-3-haiku`)." } },
    "openRouter": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "OpenRouter" } },
    "openaiBaseUrl": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Bazowy adres URL" } },
    "openaiBaseUrlDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Je\u015Bli pole jest puste, zostanie u\u017Cyty domy\u015Blny bazowy adres URL OpenAI. Mo\u017Cna go zmieni\u0107 na https://eu.api.openai.com/v1, https://&#60;your-resource-name&#62;.openai.azure.com lub inny endpoint API podany przez OpenAI." } }
  },
  "generativeAIWorkspaceSettings": {
    "changedTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ustawienia zosta\u0142y poprawnie zaktualizowane" } },
    "submitButton": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zaktualizuj ustawienia" } },
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ustawienia AI" } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ustawienia te s\u0105 opcjonalne i s\u0142u\u017C\u0105 do skonfigurowania AI na poziomie obszaru roboczego. Funkcje takie jak pole AI mog\u0105 by\u0107 wy\u0142\u0105czone, poniewa\u017C nie zosta\u0142 podany klucz API dla jednego z obs\u0142ugiwanych modeli. Podaj\u0105c klucz, mo\u017Cna te funkcje w\u0142\u0105czy\u0107. Pozostawienie pustej warto\u015Bci spowoduje zastosowanie globalnych ustawie\u0144. W takim wypadku nale\u017Cy pami\u0119ta\u0107, \u017Ce ustawienia te b\u0119d\u0105 wsp\xF3lne dla wszystkich u\u017Cytkownik\xF3w." } },
    "changedDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ustawienia zosta\u0142y zaktualizowane i od teraz maj\u0105 zastosowanie w tym obszarze roboczym." } },
    "openSettings": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Otw\xF3rz ustawienia" } },
    "hideSettings": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ukryj ustawienia" } }
  },
  "userPasswordChangedToast": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Has\u0142o zosta\u0142o zmienione" } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Twoje has\u0142o zosta\u0142o zmienione. Zaloguj si\u0119 ponownie." } }
  },
  "integrationDropdown": {
    "addIntegration": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dodaj now\u0105 integracj\u0119" } },
    "noIntegrations": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nie znaleziono \u017Cadnych integracji." } },
    "selectTypeFirst": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Najpierw wybierz rodzaj" } },
    "integrationPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wybierz integracj\u0119" } }
  },
  "richTextEditorFloatingMenu": {
    "paragraph": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ust\u0119p" } },
    "heading1": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nag\u0142\xF3wek 1" } },
    "heading2": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nag\u0142\xF3wek 2" } },
    "heading3": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nag\u0142\xF3wek 3" } },
    "orderedList": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Lista numerowana" } },
    "unorderedList": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Lista wypunktowana" } },
    "code": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kod" } },
    "hierarchy": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Hierarchia" } },
    "lists": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Listy" } },
    "taskList": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Lista zada\u0144" } }
  },
  "richTextEditorBubbleMenu": {
    "strikethrough": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Przekre\u015Blenie" } },
    "link": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Link" } },
    "linkEditPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Link URL..." } },
    "linkEditDone": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Gotowe" } },
    "bold": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pogrubienie" } },
    "italic": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kursywa" } },
    "underline": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Podkre\u015Blenie" } }
  },
  "dashboardVerifyEmail": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sprawd\u017A, czy dosta\u0142e\u015B wiadomo\u015B\u0107 dot. weryfikacji adresu e-mail. Je\u017Celi tak, to kliknij link, aby potwierdzi\u0107 sw\xF3j adres." } },
    "resendConfirmationEmail": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ponownie wy\u015Blij wiadomo\u015B\u0107 z potwierdzeniem adresu e-mail" } }
  },
  "resendEmailVerification": {
    "confirmationEmailSentTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Potwierdzenie adresu e-mail zosta\u0142o wys\u0142ane" } },
    "confirmationEmailSentDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wiadomo\u015B\u0107 z linkiem do potwierdzenia adresu e-mail zosta\u0142a wys\u0142ana." } }
  },
  "verifyEmailAddress": {
    "goToDashboard": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Przejd\u017A do pulpitu" } },
    "invalidToken": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nieprawid\u0142owy token." } },
    "confirmation": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tw\xF3j adres e-mail zosta\u0142 zweryfikowany." } },
    "disabledPasswordProvider": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dostawca us\u0142ug uwierzytelniania has\u0142em zosta\u0142 wy\u0142\u0105czony." } },
    "emailMismatchWarning": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Uwaga: potwierdzony adres e-mail nie jest przypisany do konta, z kt\xF3rego aktualnie korzystasz." } }
  },
  "emailNotVerified": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wymagana jest weryfikacja adresu e-mail" } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sprawd\u017A czy wiadomo\u015B\u0107 dot. weryfikacji adresu e-mail dotar\u0142a. Je\u017Celi tak, to kliknij link, aby potwierdzi\u0107 sw\xF3j adres i aktywowa\u0107 swoje konto." } },
    "resend": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ponownie wy\u015Blij wiadomo\u015B\u0107 z potwierdzeniem adresu e-mail" } }
  },
  "selectAIModelForm": {
    "AIType": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Typ AI" } },
    "AIModel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Model AI" } },
    "fileField": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pole pliku" } },
    "temperatureLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Temperatura" } },
    "temperatureDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Temperatura LLM to parametr pomi\u0119dzy 0 a " }, { "t": 4, "k": "max" }, { "t": 3, "v": ", kontroluj\u0105cy losowo\u015B\u0107 odpowiedzi: ni\u017Csza warto\u015B\u0107 zwr\xF3ci odpowiedzi bardziej konkretne, wy\u017Csza bardziej kreatywne." }] } }
  },
  "onboarding": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wprowadzenie" } },
    "creating": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Powstaje Tw\xF3j pierwszy obszar roboczy" } },
    "cancel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nie potrzebuj\u0119 pomocy przy konfiguracji" } },
    "failedTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wyst\u0105pi\u0142 b\u0142\u0105d" } },
    "skip": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pomi\u0144 na razie" } },
    "failedTryAgain": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Spr\xF3buj ponownie" } },
    "continue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kontynuuj" } },
    "failedDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Operacja nie zosta\u0142a w pe\u0142ni zako\u0144czona, ale niekt\xF3re elementy mog\u0142y zosta\u0107 zrealizowane." } },
    "failedSkip": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pomi\u0144 wprowadzenie" } }
  },
  "moreStep": {
    "people": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ile os\xF3b liczy tw\xF3j zesp\xF3\u0142?" } },
    "share": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nie mam nic przeciwko podzieleniu si\u0119 szczeg\xF3\u0142ami z zespo\u0142em Baserow" } },
    "roleOrJob": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Rola lub stanowisko..." } },
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Powiedz nam co\u015B wi\u0119cej" } },
    "country": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kraj" } },
    "how": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sk\u0105d dowiedzia\u0142e\u015B si\u0119 o Baserow?" } },
    "howSearchEngine": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wyszukiwarka (Google/Bing)" } },
    "howSocialMedia": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Media spo\u0142eczno\u015Bciowe" } },
    "howOnlineAds": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Reklamy" } },
    "howContent": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Publikacje (blog/newsletter/wideo)" } },
    "howReviewSite": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Serwis z recenzjami / marketplace" } },
    "howFriend": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Od znajomego" } },
    "howColleague": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Od kolegi z pracy" } },
    "howEvent": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Event lub webinar" } },
    "howSales": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kontakt bezpo\u015Bredni" } },
    "howOther": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Inne" } }
  },
  "teamStep": {
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "W jakim obszarze pracujesz?" } },
    "marketingTeam": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Marketing" } },
    "itAndSupportTeam": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "IT i wsparcie" } },
    "hrAndLegalTeam": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kadry i prawo" } },
    "financeTeam": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Finanse" } },
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zbudujmy razem Twoj\u0105 pierwsz\u0105 przestrze\u0144 robocz\u0105!" } },
    "productAndDesignTeam": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Produkt i projektowanie" } },
    "engineeringTeam": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "In\u017Cynieria" } },
    "operationsTeam": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Operacje" } },
    "creativeProductionTeam": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Produkcja kreatywna" } },
    "salesAndAccountManagementTeam": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sprzeda\u017C i zarz\u0105dzanie klientami" } },
    "customerServiceTeam": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Obs\u0142uga klienta" } },
    "manufacturingTeam": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Produkcja" } },
    "otherPersonalTeam": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Inne / Osobiste" } }
  },
  "workspaceStep": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Utw\xF3rz sw\xF3j obszar roboczy" } },
    "workspaceLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nazwa obszaru roboczego" } }
  },
  "dashboardApplication": {
    "createdAt": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "utworzona" } }
  },
  "templateCard": {
    "viewMore": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zobacz wi\u0119cej" } }
  },
  "inviteStep": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zapraszanie wsp\xF3\u0142pracownik\xF3w" } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zawsze mo\u017Cesz doda\u0107 wi\u0119cej p\xF3\u017Aniej." } },
    "collaboratorsLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wsp\xF3\u0142pracownicy" } }
  },
  "colorInput": {
    "default": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Domy\u015Blny" } }
  },
  "imageInput": {
    "labelDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wybierz plik graficzny do przes\u0142ania..." } },
    "labelButton": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Prze\u015Blij" } }
  },
  "dataExplorerNode": {
    "showMore": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Poka\u017C wi\u0119cej powt\xF3rze\u0144" } },
    "selectNode": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wybierz" } }
  },
  "user": {
    "isStaff": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nale\u017Cy do zespo\u0142u" } },
    "isWorkspaceAdmin": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Jest administratorem obszaru roboczego" } },
    "active": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aktywny" } },
    "deactivated": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wy\u0142\u0105czony" } }
  },
  "adminType": {
    "dashboard": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pulpit" } },
    "users": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "U\u017Cytkownicy" } },
    "workspaces": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Obszary robocze" } }
  },
  "workspacesAdminTable": {
    "allWorkspaces": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wszystkie obszary robocze" } },
    "id": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "ID" } },
    "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nazwa" } },
    "members": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cz\u0142onkowie zespo\u0142u" } },
    "applications": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aplikacje" } },
    "created": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Utworzono" } },
    "seatsTaken": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zaj\u0119te miejsca" } },
    "storageUsage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wykorzystana pami\u0119\u0107 (MB)" } },
    "freeUsers": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "U\u017Cytkownicy z bezp\u0142atnym dost\u0119pem" } },
    "rowCount": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Liczba wierszy" } },
    "usageHelpText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Je\u015Bli w\u0142\u0105czona jest opcja \u015Bledzenia, wykorzystanie obszaru roboczego obliczane jest co noc" } }
  },
  "editWorkspaceContext": {
    "delete": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Usu\u0144 trwale" } }
  },
  "deleteWorkspaceModal": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Usu\u0144 " }, { "t": 4, "k": "name" }] } },
    "confirmation": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Czy na pewno chcesz usun\u0105\u0107 obszar roboczy: " }, { "t": 4, "k": "name" }, { "t": 3, "v": "?" }] } },
    "comment": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Obszar roboczy zostanie trwale usuni\u0119ty wraz z powi\u0105zanymi aplikacjami. Tej operacji nie mo\u017Cna cofn\u0105\u0107." } },
    "delete": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Usu\u0144 obszar roboczy " }, { "t": 4, "k": "name" }] } }
  },
  "activeUsers": {
    "newUsers": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nowi u\u017Cytkownicy" } },
    "activeUsers": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aktywni u\u017Cytkownicy" } }
  },
  "usersAdminTable": {
    "allUsers": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wszyscy u\u017Cytkownicy" } },
    "id": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "ID" } },
    "username": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nazwa u\u017Cytkownika" } },
    "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nazwa" } },
    "workspaces": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Obszary robocze" } },
    "lastLogin": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ostatnie logowanie" } },
    "dateJoined": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Data rejestracji" } },
    "active": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aktywny" } },
    "twoFactorAuth": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "2FA" } }
  },
  "editUserContext": {
    "changePassword": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zmie\u0144 has\u0142o" } },
    "delete": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Usu\u0144 trwale" } },
    "impersonate": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zaloguj si\u0119 jako" } }
  },
  "changePasswordForm": {
    "newPassword": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nowe has\u0142o" } },
    "repeatPassword": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Powt\xF3rz has\u0142o" } },
    "changePassword": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zmie\u0144 has\u0142o" } },
    "error": {
      "doesntMatch": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "To pole musi by\u0107 zgodne z polem has\u0142a." } }
    }
  },
  "userForm": {
    "fullName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pe\u0142ne imi\u0119 i nazwisko" } },
    "email": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "E-mail" } },
    "isActive": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Jest aktywny" } },
    "warning": {
      "changeEmail": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zmiana adresu e-mail tego u\u017Cytkownika oznacza, \u017Ce przy ponownym logowaniu b\u0119dzie on/ona musia\u0142/a u\u017Cy\u0107 nowego adresu. O zmianie nale\u017Cy poinformowa\u0107 u\u017Cytkownika." } },
      "inactiveUser": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "U\u017Cytkownik oznaczony jako nieaktywny nie ma mo\u017Cliwo\u015Bci zalogowania si\u0119." } },
      "userStaff": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nadanie statusu administratora umo\u017Cliwia dost\u0119p do wszystkich u\u017Cytkownik\xF3w i obszar\xF3w roboczych oraz mo\u017Cliwo\u015B\u0107 odebrania Tobie Twoich w\u0142asnych uprawnie\u0144 administracyjnych." } }
    },
    "error": {
      "invalidName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Podaj prawid\u0142owe imi\u0119 i nazwisko. Tekst musi mie\u0107 od 3 do 150 znak\xF3w." } },
      "invalidEmail": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Prosz\u0119 wpisa\u0107 prawid\u0142owy adres e-mail." } }
    },
    "twoFactorAuth": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Uwierzytelnienie dwusk\u0142adnikowe" } },
    "removeTwoFactorAuth": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Usu\u0144 uwierzytelnienie dwusk\u0142adnikowe" } }
  },
  "changeUserPasswordModal": {
    "changePassword": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Zmie\u0144 has\u0142o u\u017Cytkownika: " }, { "t": 4, "k": "username" }] } }
  },
  "deleteUserModal": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Usu\u0144 u\u017Cytkownika: " }, { "t": 4, "k": "username" }] } },
    "confirmation": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Czy na pewno chcesz usun\u0105\u0107 u\u017Cytkownika: " }, { "t": 4, "k": "name" }, { "t": 3, "v": "?" }] } },
    "comment1": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Konto u\u017Cytkownika zostanie usuni\u0119te, jednak obszary robocze, kt\xF3rych jest on cz\u0142onkiem, pozostan\u0105 aktywne. Obszary te nie zostan\u0105 usuni\u0119te, nawet je\u015Bli wspomniany u\u017Cytkownik jest ostatnim u\u017Cytkownikiem w tym obszarze. Usuni\u0119cie ostatniego u\u017Cytkownika spowoduje jedynie, \u017Ce nikt nie b\u0119dzie mia\u0142 dost\u0119pu do tych obszar\xF3w." } },
    "comment2": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Po usuni\u0119ciu u\u017Cytkownika istnieje mo\u017Cliwo\u015B\u0107, \u017Ce nowa osoba zarejestruje si\u0119, u\u017Cywaj\u0105c adresu e-mail usuni\u0119tego u\u017Cytkownika. Aby zapobiec ponownej rejestracji, zamiast usuni\u0119cia u\u017Cytkownika nale\u017Cy zdezaktywowa\u0107 jego konto." } },
    "delete": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Usu\u0144 u\u017Cytkownika: " }, { "t": 4, "k": "username" }] } }
  },
  "editUserModal": {
    "delete": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Usu\u0144 u\u017Cytkownika" } },
    "edit": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Edytuj u\u017Cytkownika: " }, { "t": 4, "k": "username" }] } }
  },
  "adminDashboard": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pulpit" } },
    "totals": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Og\xF3\u0142em" } },
    "totalUsers": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Liczba u\u017Cytkownik\xF3w" } },
    "totalWorkspaces": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Liczba obszar\xF3w roboczych" } },
    "totalApplications": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Liczba aplikacji" } },
    "newUsers": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nowi u\u017Cytkownicy" } },
    "newUsers24h": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nowi u\u017Cytkownicy w ci\u0105gu ostatnich 24 godzin" } },
    "newUsers7days": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nowi u\u017Cytkownicy w ci\u0105gu ostatnich 7 dni" } },
    "newUsers30days": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nowi u\u017Cytkownicy w ci\u0105gu ostatnich 30 dni" } },
    "activeUsers": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aktywni u\u017Cytkownicy" } },
    "activeUsers24h": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aktywni u\u017Cytkownicy w ci\u0105gu ostatnich 24 godzin" } },
    "activeUsers7days": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aktywni u\u017Cytkownicy w ci\u0105gu ostatnich 7 dni" } },
    "activeUsers30days": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aktywni u\u017Cytkownicy w ci\u0105gu ostatnich 30 dni" } },
    "viewAll": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wy\u015Bwietl wszystko" } }
  },
  "guidedTourStep": {
    "step": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "step" }, { "t": 3, "v": " z " }, { "t": 4, "k": "totalSteps" }] } },
    "gotIt": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Rozumiem" } },
    "back": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Powr\xF3t" } },
    "next": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nast\u0119pne" } }
  },
  "welcomeGuidedTourStep": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Witaj w Baserow" } },
    "buttonText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Rozpocznij prezentacj\u0119" } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zapraszamy na kr\xF3tk\u0105 prezentacj\u0119, w trakcie kt\xF3rej zapoznasz si\u0119 z podstawami. Wystarczy kilka klikni\u0119\u0107 i bez trudu nauczsz si\u0119 porz\u0105dkowa\u0107 i wizualizowa\u0107 swoje dane" } }
  },
  "controlCenterGuidedTourStep": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Twoje centrum sterowania" } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pasek boczny po lewej stronie pozwala na zarz\u0105dzanie obszarem roboczym:\n\n- Strona g\u0142\xF3wna \u2013 dost\u0119p do g\u0142\xF3wnego pulpitu.\n- Powiadomienia \u2013 informacje o zmianach i wzmianki.\n- Zaproszenia \u2013 wsp\xF3\u0142praca przez dodanie nowych cz\u0142onk\xF3w do zespo\u0142u.\n- Kosz \u2013 elementy usuni\u0119te i ich przywracanie." } }
  },
  "createNewGuidedTourStep": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Utw\xF3rz now\u0105 baz\u0119 lub aplikacj\u0119" } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": 'Kliknij "Dodaj\u2026" aby utworzy\u0107 now\u0105 baz\u0119, aplikacj\u0119 lub pulpit dla swojego projektu, dzia\u0142u lub zespo\u0142u.' } }
  },
  "importWorkspaceModal": {
    "retry": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pon\xF3w" } },
    "selectApplications": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wybierz dane" } },
    "applications": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aplikacje" } },
    "close": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zamknij" } },
    "chooseFile": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wybierz plik" } },
    "untrustedPublicKeyMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Przes\u0142any plik zosta\u0142 podpisany niezaufanym kluczem publicznym. Aby zaimportowa\u0107 ten plik, tw\xF3j administrator musi doda\u0107 ten klucz do listy kluczy zaufanych albo wy\u0142\u0105czy\u0107 weryfikacj\u0119 kluczy." } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mo\u017Cesz zaimportowa\u0107 dane z innej bazy Baserow, przesy\u0142aj\u0105c plik .zip zawieraj\u0105cy eksport tej bazy." } },
    "upload": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Prze\u015Blij" } },
    "cancel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Anuluj" } },
    "done": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zako\u0144czono" } },
    "uploading": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "przesy\u0142anie\u2026" } },
    "deselectAll": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Anuluj zaznaczenie" } },
    "selectAll": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zaznacz wszystko" } },
    "databases": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Bazy danych" } },
    "successTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dane Baserow zosta\u0142y pomy\u015Blne zaimportowane" } },
    "successMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Zaimportowano " }, { "t": 4, "k": "count" }, { "t": 3, "v": " aplikacje/i" }] } },
    "signatureVerificationNote": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nie mo\u017Cna zaimportowa\u0107 pliku zip z niezaufanego \u017Ar\xF3d\u0142a." } },
    "invalidResourceTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nieprawid\u0142owy zas\xF3b" } },
    "invalidResourceMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Przes\u0142any plik nie jest zgodny z formatem eksportu bazy Baserow." } },
    "untrustedPublicKeyTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Niezaufany certyfikat" } },
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Importuj dane Baserow" } },
    "import": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Importuj dane" } },
    "importingState": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Importowanie\u2026" } },
    "importingTableStructure": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Powstaje tabela: " }, { "t": 4, "k": "table" }] } },
    "importingTableData": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Importowanie danych: " }, { "t": 4, "k": "table" }] } },
    "uploadAndImport": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Prze\u015Blij i importuj" } }
  },
  "formGroup": {
    "protectedField": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "To pole jest zabezpieczone. Kliknij, aby to zmieni\u0107." } },
    "cancelProtectedField": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Anuluj zmian\u0119" } }
  },
  "exportWorkspaceModal": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Eksport" } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Twoje dane zostan\u0105 wyeksportowane do pliku .zip, kt\xF3ry b\u0119dziesz m\xF3g\u0142 zaimportowa\u0107 do innej instancji bazy Baserow." } },
    "exportSettings": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ustawienia eksportu" } },
    "export": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Eksport danych" } },
    "reset": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zacznij od nowa" } },
    "cancel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Anuluj" } },
    "download": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pobierz" } },
    "noExports": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "W tym obszarze roboczym nie ma jeszcze \u017Cadnych eksport\xF3w." } },
    "created": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "utworzone" } },
    "exportingState": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Eksportowanie\u2026" } },
    "exportingTableState": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Eksport tabeli: " }, { "t": 4, "k": "table" }] } },
    "exportingCreateArchiveState": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Archiwum powstaje" } }
  },
  "exportWorkspaceForm": {
    "exportSettingsLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ustawienia eksportu" } },
    "onlyStructureLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wyeksportuj tylko struktur\u0119" } },
    "onlyStructureDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Je\u015Bli ta opcja jest zaznaczona, wyeksportowana zostanie tylko struktura aplikacji. Dane nie zostan\u0105 do\u0142\u0105czone." } },
    "selectDataToExport": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wybierz dane do wyeksportowania" } },
    "selectAll": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zaznacz wszystko" } },
    "deselectAll": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Anuluj zanaczenia" } }
  },
  "colorPickerContext": {
    "pickColorPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Albo wybierz kolor z palety" } }
  },
  "userSourceType": {
    "userCountSummary": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "count" }, { "t": 3, "v": " u\u017Cytkownik\xF3w (" }, { "t": 4, "k": "lastUpdated" }, { "t": 3, "v": ")" }] } }
  },
  "mcpEndpointSettings": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Serwer MCP" } },
    "createEndpoint": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Utw\xF3rz endpoint" } },
    "backToOverview": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Powr\xF3t" } },
    "createNewTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Utw\xF3rz endpoint serwera MCP" } },
    "noEndpointsMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Endpoint serwera MCP (Model Context Protocol) nie zosta\u0142 podany. Serwery MCP s\u0142u\u017C\u0105 do bezpo\u015Bredniej integracji z modelami LLM, np. Claude umo\u017Cliwiaj\u0105c im wykonywanie operacji w Baserow. Aby uruchomi\u0107 serwer MCP, najpierw utw\xF3rz endpoint." } }
  },
  "workspaceSearch": {
    "types": {
      "applications": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aplikacje" } },
      "tables": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tabele" } },
      "fields": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pola" } },
      "rows": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wiersze" } }
    },
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wyszukaj" } },
    "searchEverything": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wyszukaj..." } },
    "searching": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wyszukiwanie..." } },
    "noResults": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Brak wynik\xF3w" } },
    "noResultsSubtitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Brak wynik\xF3w pasuj\u0105cych do \u201C" }, { "t": 4, "k": "searchTerm" }, { "t": 3, "v": '"' }] } },
    "welcome": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Przeszukaj ca\u0142y obszar roboczy" } },
    "welcomeSubtitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aby znale\u017A\u0107 aplikacje, tabele, pola i inne elementy, skorzystaj z pola wyszukiwania powy\u017Cej" } },
    "navigate": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nawiguj" } },
    "select": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wybierz" } },
    "close": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zamknij" } },
    "empty": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "(puste)" } }
  },
  "action": {
    "cancel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Anuluj" } },
    "submit": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wy\u015Blij" } }
  },
  "twoFactorAuthSettings": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Uwierzytelnianie dwusk\u0142adnikowe" } },
    "loadingError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nie uda\u0142o si\u0119 wczyta\u0107 konfiguracji uwierzytelniania dwusk\u0142adnikowego." } }
  },
  "disableTwoFactorAuth": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Czy na pewno chcesz wy\u0142\u0105czy\u0107 2FA?" } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dodatkowa warstwa zabezpiecze\u0144 zostanie usuni\u0119ta. Je\u015Bli kto\u015B odkryje Twoje has\u0142o, b\u0119dzie m\xF3g\u0142 uzyska\u0107 dost\u0119p do Twojego konta." } },
    "cancel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pozostaw w\u0142\u0105czone" } },
    "disable": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wy\u0142\u0105cz" } },
    "successTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Uwierzytelnianie dwusk\u0142adnikowe zosta\u0142o wy\u0142\u0105czone" } },
    "errorWrongPasswordTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nieprawid\u0142owe has\u0142o" } },
    "errorWrongPasswordMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Podane has\u0142o nie jest zgodne z Twoim has\u0142em." } }
  },
  "enableTwoFactorOptions": {
    "cancel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Anuluj" } },
    "continue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kontynuuj" } }
  },
  "saveBackupCode": {
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mo\u017Cesz u\u017Cy\u0107 tego kodu zapasowego, je\u015Bli utracisz dost\u0119p do aplikacji uwierzytelniaj\u0105cej lub telefonu i nie b\u0119dziesz m\xF3g\u0142 odebra\u0107 ani wygenerowa\u0107 kod\xF3w dost\u0119pu. Kod jest jednorazowy. Zapisz go lub skopiuj w bezpieczne miejsce, gdzie b\u0119dzie dost\u0119pny bez konieczno\u015Bci zalogowania si\u0119." } },
    "backupCodes": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kody zapasowe" } },
    "copy": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Skopiuj" } },
    "continue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kontynuuj" } },
    "backupCodesCopiedTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Skopiowano!" } },
    "backupCodesCopiedMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kody zapasowe zosta\u0142y skopiowane do schowka." } }
  },
  "totpAuthType": {
    "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aplikacja uwierzytelniaj\u0105ca" } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wygeneruj kody uwierzytelniania dwusk\u0142adnikowego za pomoc\u0105 przeznaczonej do tego aplikacji. Polecamy Google Authenticator, Authy, lub Microsoft Authenticator." } },
    "enabledDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kody weryfikacyjne zostan\u0105 wygenerowane przez aplikacj\u0119 uwierzytelniaj\u0105c\u0105. Aby skonfigurowa\u0107 inn\u0105 aplikacj\u0119 lub metod\u0119, wy\u0142\u0105cz uwierzytelnianie 2FA i skonfiguruj j\u0105 ponownie." } },
    "sideLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zalecane" } }
  },
  "twoFactorEnabled": {
    "enabled": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "W\u0142\u0105czone" } },
    "disable": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wy\u0142\u0105cz 2FA" } }
  },
  "totpLogin": {
    "backupCodesTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wprowad\u017A kod zapasowy" } },
    "backupCodesDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zaloguj si\u0119 przy u\u017Cyciu jednorazowego kodu zapasowego." } },
    "authenticate": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Uwierzytelnij" } },
    "goBack": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wr\xF3\u0107" } },
    "totpTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Uwierzytelnianie dwusk\u0142adnikowe" } },
    "totpDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Podaj kod z aplikacji uwierzytelniaj\u0105cej." } },
    "verify": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zweryfikuj" } },
    "useBackupCode": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "U\u017Cyj kodu zapasowego" } },
    "verificationFailed": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Weryfikacja nie powiod\u0142a si\u0119" } },
    "verificationFailedDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Podany kod jest nieprawid\u0142owy." } },
    "loginExpired": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Login wygas\u0142" } },
    "loginExpiredDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Podaj ponownie swoje has\u0142o." } },
    "rateLimit": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zbyt wiele pr\xF3b." } }
  },
  "emailSettings": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zmie\u0144 adres e-mail" } },
    "successTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "E-mail z potwierdzeniem zosta\u0142 wys\u0142any" } },
    "successDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wiadomo\u015B\u0107 z potwierdzeniem zosta\u0142a wys\u0142ana na nowy adres e-mail. Sprawd\u017A skrzynk\u0119 i kliknij link, aby potwierdzi\u0107 zmian\u0119 adresu." } },
    "currentEmailLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aktualny adres e-mail" } },
    "newEmailLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nowy adres e-mail" } },
    "passwordLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aktualne has\u0142o" } },
    "submitButton": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wy\u015Blij e-mail z potwierdzeniem" } },
    "errorInvalidPasswordTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nieprawid\u0142owe has\u0142o" } },
    "errorInvalidPasswordMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nie mo\u017Cna zainicjowa\u0107 zmiany adresu e-mail, poniewa\u017C podane has\u0142o jest nieprawid\u0142owe." } },
    "errorEmailExistsTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Adres e-mail ju\u017C istnieje" } },
    "errorEmailExistsMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nie mo\u017Cna zainicjowa\u0107 zmiany adresu e-mail, poniewa\u017C konto z tym adresem ju\u017C istnieje." } },
    "errorNotAllowedTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nie mo\u017Cna zmiani\u0107 adresu e-mail" } },
    "errorNotAllowedMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nie mo\u017Cesz zmieni\u0107 adresu e-mail, poniewa\u017C na Twoim koncie ustawione jest uwierzytelnianie jednosk\u0142adnikowe (SSO)." } }
  },
  "importWorkspaceForm": {
    "selectApplicationsToImport": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wybierz aplikacje, kt\xF3re maj\u0105 by\u0107 zaimportowane" } }
  },
  "changeEmail": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Potwierd\u017A zmian\u0119 adresu e-mail" } },
    "submit": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Potwierd\u017A zmian\u0119 adresu e-mail" } },
    "changed": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Adres e-mail zosta\u0142 zmieniony" } },
    "message": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Adres e-mail zosta\u0142 pomy\u015Blnie zmieniony. Mo\u017Cesz teraz zalogowa\u0107 si\u0119 do bazy Baserow, u\u017Cywaj\u0105c swojego nowego adresu e-mail." } },
    "errorInvalidLinkTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nieprawid\u0142owy link" } },
    "errorInvalidLinkMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nie uda\u0142o si\u0119 zmieni\u0107 adresu e-mail, poniewa\u017C link jest nieprawid\u0142owy." } },
    "errorLinkExpiredTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Link wygas\u0142" } },
    "errorLinkExpiredMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Link do zmiany adresu e-mail wygas\u0142. Mo\u017Cesz wys\u0142a\u0107 nowy link w ustawieniach konta." } },
    "errorEmailExistsTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ten adres e-mail ju\u017C istnieje" } },
    "errorEmailExistsMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nie uda\u0142o si\u0119 zmieni\u0107 adresu e-mail, poniewa\u017C konto z tym adresem ju\u017C istnieje." } },
    "errorEmailAlreadyChangedTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Adres e-mail zosta\u0142 ju\u017C zmieniony" } },
    "errorEmailAlreadyChangedMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Adres e-mail zosta\u0142 ju\u017C zmieniony na \u017C\u0105dany adres." } }
  },
  "formulaInputErrorContext": {
    "viewFullError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Szczeg\xF3\u0142y b\u0142\u0119du" } }
  },
  "formulaInputExplorerContext": {
    "variables": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zmienne" } },
    "functions": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Funkcje" } },
    "operators": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Operatory" } },
    "search": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Szukaj" } },
    "useRegularInputModalTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Czy u\u017Cy\u0107 standardowego trybu dla tego pola?" } },
    "useSimpleInput": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Prze\u0142\u0105cz na tryb standardowy" } },
    "useSimpleInputModalTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Prze\u0142\u0105czy\u0107 na tryb standardowy?" } },
    "useAdvancedInput": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Prze\u0142\u0105cz si\u0119 na tryb zaawansowany" } },
    "useAdvancedInputModalTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Prze\u0142\u0105czy\u0107 na tryb zaawansowany?" } },
    "modalMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Prze\u0142\u0105czenie trybu spowoduje skasowanie bie\u017C\u0105cej formu\u0142y. Czy na pewno chcesz kontynuowa\u0107?" } }
  },
  "formulaParserErrors": {
    "invalidArgCountMin": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Funkcja '" }, { "t": 4, "k": "funcType" }, { "t": 3, "v": "' wymaga co najmniej " }, { "t": 4, "k": "minArgs" }, { "t": 3, "v": " argument\xF3w." }] } },
    "invalidArgCountExact": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Funkcja '" }, { "t": 4, "k": "funcType" }, { "t": 3, "v": "' wymaga dok\u0142adnie " }, { "t": 4, "k": "minArgs" }, { "t": 3, "v": " argument\xF3w." }] } },
    "invalidArgCountRange": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Funkcja '" }, { "t": 4, "k": "funcType" }, { "t": 3, "v": "' wymaga od " }, { "t": 4, "k": "minArgs" }, { "t": 3, "v": " do " }, { "t": 4, "k": "maxArgs" }, { "t": 3, "v": " argument\xF3w." }] } },
    "invalidArgumentType": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "'" }, { "t": 4, "k": "value" }, { "t": 3, "v": "' nie jest poprawnym argumentem funkcji '" }, { "t": 4, "k": "funcType" }, { "t": 3, "v": "'." }] } }
  },
  "twoFactorAuthField": {
    "enabled": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "W\u0142\u0105czone" } },
    "disabled": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wy\u0142\u0105czone" } }
  },
  "mcpEndpointForm": {
    "nameLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nazwa" } },
    "workspaceLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Obszar roboczy" } }
  },
  "mcpEndpoint": {
    "detailLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wi\u0119cej szczeg\xF3\u0142\xF3w" } },
    "endpointURLIntro": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Adres URL serwera MCP (Model Context Protocol) mo\u017Cna doda\u0107 do dowolnego klienta obs\u0142uguj\u0105cego serwery MCP. To unikalny endpoint, kt\xF3ry umo\u017Cliwia modelowi LLM wykonywanie operacji w obszarze roboczym w Twoim imieniu." } },
    "reveal": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Poka\u017C pe\u0142ny adres URL" } },
    "warning": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Traktuj adres URL MCP jak has\u0142o, poniewa\u017C dost\u0119p do tego adresu daje mo\u017Cliwo\u015B\u0107 modyfikowania danych w Baserow." } },
    "claudeInstructions": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": 'Skonfiguruj Claude Desktop i Baserow MCP w trzech prostych krokach.\n\n1. Otw\xF3rz ustawienia aplikacji Claude Desktop. (\u2318+,)\n1. Przejd\u017A do zak\u0142adki \u201CDevelop" i kliknij \u201CEdit Config".\n1. Dodaj poni\u017Csz\u0105 konfiguracj\u0119 JSON do pliku `claude_desktop_config.json`.' } },
    "cursorInstructions": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": 'Skonfiguruj Cursor i Baserow MCP w trzech prostych krokach.\n\n1. Otw\xF3rz ustawienia aplikacji Cursor (\u21E7+\u2318+J)\n1. Przejd\u017A do zak\u0142adki \u201CMCP" i kliknij \u201CAdd MCP Server"\n1. Dodaj poni\u017Csz\u0105 konfiguracj\u0119 JSON.' } },
    "windsurfInstructions": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Skonfiguruj MCP z Cascade w Windsurf w dw\xF3ch prostych krokach.\n\n1. Przejd\u017A do Windsurf \u2014 Settings -> Advanced Settings lub Command Palette -> Open Windsurf settings page.\n1. Przewi\u0144 do sekcji Cascade, gdzie znajdziesz opcj\u0119 umo\u017Cliwiaj\u0105c\u0105 dodanie nowego serwera, przegl\u0105danie istniej\u0105cych oraz przycisk do podgl\u0105du pliku konfiguracji `mcp_config.json`. W pliku dodaj co nast\u0119puje:" } }
  },
  "coreHTTPTriggerServiceForm": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Adres URL webhooka" } },
    "urlVersion": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wersja" } },
    "urlVersionPublished": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Opublikowana" } },
    "urlVersionTest": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Testowa" } },
    "copyUrl": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Skopiuj adres URL webhooka" } },
    "urlCopied": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Adres URL webhooka zosta\u0142 skopiowany do schowka" } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ten webhook odbiera \u017C\u0105dania HTTP i uruchamia proces, przekazuj\u0105c dane \u017C\u0105dania jako payload." } },
    "methodsOptionLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dozwolone metody HTTP" } },
    "methodsOptionDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Okre\u015Bla, kt\xF3re metody HTTP s\u0105 dopuszczalne dla tego webhooka. Wykluczenie GET zmniejsza ryzyko przypadkowego wywo\u0142ania webhooka." } },
    "methodsOptionAll": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wszystkie" } },
    "methodsOptionExcludeGet": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Za wyj\u0105tkiem GET" } }
  },
  "twoFactorAuthEmpty": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "2FA nie jest jeszcze w\u0142\u0105czone" } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "W\u0142\u0105cz dodatkow\u0105 warstw\u0119 zabezpiecze\u0144 swojego konta." } },
    "enable": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "W\u0142\u0105cz 2FA" } },
    "notAllowedTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "2FA nie jest aktywne" } },
    "notAllowedDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "2FA jest dost\u0119pne tylko dla kont z has\u0142em." } }
  },
  "nodeHelpTooltip": {
    "exampleLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Przyk\u0142ad" } },
    "result": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Wynik: " }, { "t": 4, "k": "result" }] } }
  },
  "enableWithQRCode": {
    "scanQRCode": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zeskanuj kod QR" } },
    "scanQRCodeDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zeskanuj kod aplikacj\u0105, np. Google Authenticator, Authy lub Microsoft Authenticator." } },
    "clickToCopy": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mo\u017Cesz te\u017C klikn\u0105\u0107 tutaj, aby skopiowa\u0107 kod." } },
    "secretCopiedTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sekret zosta\u0142 skopiowany" } },
    "secretCopiedMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sekret TOTP zosta\u0142 skopiowany do schowka." } },
    "enterCode": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wprowad\u017A kod" } },
    "enterCodeDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aby potwierdzi\u0107 poprawno\u015B\u0107 konfiguracji, wpisz 6-cyfrowy kod wy\u015Bwietlony przez aplikacj\u0119." } },
    "verificationFailed": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Weryfikacja nie powiod\u0142a si\u0119" } },
    "verificationFailedDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Podany kod jest nieprawid\u0142owy." } },
    "provisioningFailed": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Konfiguracja nie powiod\u0142a si\u0119" } },
    "checkSuccess": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Uwierzytelnianie dwusk\u0142adnikowe (2FA) zosta\u0142o w\u0142\u0105czone" } }
  },
  "adminUsers": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "U\u017Cytkownicy" } }
  },
  "adminWorkspaces": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Obszary robocze" } }
  },
  "sampleDataViewer": {
    "payloadLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wynik" } },
    "errorLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wyst\u0105pi\u0142 b\u0142\u0105d..." } },
    "showPayloadLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wy\u015Bwietl payload" } },
    "showErrorLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wy\u015Bwietl b\u0142\u0105d" } },
    "downloadFullPayload": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pobierz ca\u0142y payload" } },
    "truncatedLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "[Skr\xF3cony wynik]" } },
    "truncatedPayloadWarning": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Liczba wy\u015Bwietlonych znak\xF3w: " }, { "t": 4, "k": "size" }, { "t": 3, "v": ". Pobierz ca\u0142y payload, \u017Ceby go przejrze\u0107 w ca\u0142o\u015Bci." }] } }
  },
  "workspaceOutdatedToast": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zbyt wiele zmian" } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Podczas Twojej nieobecno\u015Bci zasz\u0142o zbyt wiele zmian. Od\u015Bwie\u017C stron\u0119, aby zobaczy\u0107 najnowsze dane." } },
    "action": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Od\u015Bwie\u017C dane" } },
    "dismiss": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zignoruj" } }
  },
  "disableTwoFactorAuthModal": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Usu\u0144 uwierzytelnienie dwusk\u0142adnikowe" } },
    "confirmation": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Czy jeste\u015B pewien, \u017Ce chcesz usun\u0105\u0107 uwierzytelnienie dwusk\u0142adnikowe dla " }, { "t": 4, "k": "name" }, { "t": 3, "v": "?" }] } },
    "comment": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "B\u0119d\u0105 mogli zalogowa\u0107 si\u0119, podaj\u0105c jedynie swoje has\u0142o, a nast\u0119pnie ponownie skonfigurowa\u0107 uwierzytelnianie dwusk\u0142adnikowe." } },
    "remove": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Usu\u0144 uwierzytelnienie dwusk\u0142adnikowe" } }
  },
  "editWorkspace": {
    "invalidNameTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ta nazwa obszaru roboczego nie jest dozwolona" } }
  }
};

export { resource as default };
//# sourceMappingURL=pl-B85SflB2.mjs.map
