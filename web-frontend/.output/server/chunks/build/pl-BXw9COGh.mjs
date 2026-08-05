!(function() {
  try {
    var e = false ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
    var n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "60539da3-4766-4f41-9cc3-0636466f5d0b", e._sentryDebugIdIdentifier = "sentry-dbid-60539da3-4766-4f41-9cc3-0636466f5d0b");
  } catch (e2) {
  }
})();
const resource = {
  "builderForm": {
    "submit": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dodaj aplikacj\u0119" } }
  },
  "builderSettingTypes": {
    "themeName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Motyw" } },
    "integrationsName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Integracje" } },
    "domainsName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Domeny" } },
    "userSourcesName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "U\u017Cytkownicy" } },
    "generalName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Og\xF3lne" } }
  },
  "createPageModal": {
    "header": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Utw\xF3rz stron\u0119" } },
    "submit": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dodaj stron\u0119" } }
  },
  "pageForm": {
    "defaultName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Strona" } },
    "nameLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nazwa" } },
    "errorNameNotUnique": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Strona o tej nazwie ju\u017C istnieje" } },
    "nameTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nazwa" } },
    "nameSubtitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Unikalna nazwa strony" } },
    "pathTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u015Acie\u017Cka" } },
    "pathSubtitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Parametr mo\u017Cna doda\u0107 za pomoc\u0105 argumentu :parameter" } },
    "pathParamsTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Parametry \u015Bcie\u017Cki" } },
    "pathParamsSubtitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "S\u0105 zdefiniowane przez argument :parameter w \u015Bcie\u017Cce" } },
    "pathParamsSubtitleTutorial": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Parametry \u015Bcie\u017Cki s\u0142u\u017C\u0105 do dynamicznego \u0142adowania danych okre\u015Blonych parametrem. Aby u\u017Cy\u0107 parametru, dodaj argument :parameter do \u015Bcie\u017Cki." } },
    "namePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wprowad\u017A nazw\u0119..." } },
    "addAnotherParameter": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dodaj kolejny parametr zapytania" } },
    "addParameter": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dodaj parametr zapytania" } },
    "queryParamsSubtitleTutorial": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Parametry zapytania s\u0142u\u017C\u0105 do dynamicznego \u0142adowania danych w zale\u017Cno\u015Bci od podanego parametru." } },
    "pathPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wprowad\u017A \u015Bcie\u017Ck\u0119..." } },
    "queryParamsTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Parametry zapytania" } }
  },
  "builderSettingsModal": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aplikacja" } }
  },
  "sidebarComponentBuilder": {
    "createPage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nowa strona" } },
    "settings": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ustawienia" } }
  },
  "publishActionModal": {
    "openInNewTab": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Otw\xF3rz w nowej karcie" } },
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Opublikuj" } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Uruchom aplikacj\u0119, publikuj\u0105c j\u0105 na jednej z domen. Zwr\xF3\u0107 uwag\u0119, \u017Ce do aplikacji mo\u017Ce by\u0107 przypisana wi\u0119cej ni\u017C jedna domena, a ka\u017Cda z domen mo\u017Ce obs\u0142ugiwa\u0107 inn\u0105 wersj\u0119 aplikacji." } },
    "publish": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Opublikuj" } },
    "publishSucceedTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Witryna zosta\u0142a opublikowana" } },
    "publishSucceedDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Witryna zosta\u0142a pomy\u015Blnie opublikowana." } },
    "publishFailedTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Opublikowanie witryny nie powiod\u0142o si\u0119" } },
    "publishFailedDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Opublikowanie witryny nie powiod\u0142o si\u0119. Spr\xF3buj ponownie p\xF3\u017Aniej." } },
    "noDomain": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Musisz mie\u0107 przynajmniej jedn\u0105 domen\u0119, aby opublikowa\u0107 swoj\u0105 aplikacj\u0119." } },
    "importingState": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Importowanie" } },
    "publishSucceedLink": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wy\u015Bwietl witryn\u0119" } },
    "addDomain": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dodaj domen\u0119" } }
  },
  "duplicatePageJobType": {
    "duplicating": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Duplikowanie" } },
    "duplicatedTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Strona zosta\u0142a zduplikowana" } },
    "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zduplikuj stron\u0119" } }
  },
  "headingElementForm": {
    "levelTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Poziom" } },
    "textTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tekst" } },
    "textPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wprowad\u017A tekst..." } },
    "headingName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Nag\u0142\xF3wek " }, { "t": 4, "k": "level" }, { "t": 3, "v": " <h" }, { "t": 4, "k": "level" }, { "t": 3, "v": ">" }] } },
    "textError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ta warto\u015B\u0107 jest nieprawid\u0142owa." } }
  },
  "addElementModal": {
    "searchPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wyszukaj elementy" } },
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dodaj nowy element" } },
    "elementInProgress": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dodawanie elementu..." } }
  },
  "elementMenu": {
    "moveUp": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Przesu\u0144 w g\xF3r\u0119" } },
    "moveDown": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Przesu\u0144 w d\xF3\u0142" } },
    "moveRight": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Przesu\u0144 w prawo" } },
    "moveLeft": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Przesu\u0144 w lewo" } },
    "selectParent": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wybierz element nadrz\u0119dny" } },
    "drag": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Przeci\u0105gnij, aby zmieni\u0107 kolejno\u015B\u0107" } }
  },
  "pageErrors": {
    "errorNameNotUnique": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Strona o tej nazwie ju\u017C istnieje" } },
    "errorPathNotUnique": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u015Acie\u017Cka o tej nazwie ju\u017C istnieje" } },
    "errorStartingSlash": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u015Acie\u017Cka musi si\u0119 zaczyna\u0107 od '/'" } },
    "errorValidPathCharacters": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ta \u015Bcie\u017Cka zawiera nieprawid\u0142owe znaki" } },
    "errorUniquePathParams": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Parametry \u015Bcie\u017Cki musz\u0105 by\u0107 unikalne." } },
    "errorNameNotUniqueDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Podaj unikaln\u0105 nazw\u0119 strony" } },
    "errorUniqueValidQueryParams": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nazwy parametr\xF3w zapytania musz\u0105 by\u0107 unikalne i poprawnie sformu\u0142owane." } }
  },
  "pageHeaderItemTypes": {
    "labelElements": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Elementy" } },
    "labelDataSource": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dane" } },
    "labelVariables": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zmienne" } },
    "labelSettings": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ustawienia strony" } }
  },
  "pageActionTypes": {
    "preview": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Podgl\u0105d" } },
    "publish": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Opublikuj" } }
  },
  "lastPublishedDomainDate": {
    "neverPublished": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "nigdy" } },
    "lastPublished": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ostatnia publikacja:" } }
  },
  "elementsContext": {
    "searchPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Elementy wyszukiwania" } },
    "noElements": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nie znaleziono \u017Cadnych element\xF3w" } },
    "noPageElements": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nie znaleziono element\xF3w dla tej strony" } }
  },
  "elementType": {
    "heading": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nag\u0142\xF3wek" } },
    "headingDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tytu\u0142 nag\u0142\xF3wka strony" } },
    "text": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tekst" } },
    "textDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tekst wielowierszowy" } },
    "link": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Link" } },
    "linkDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Link do strony/adres URL" } },
    "image": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Plik graficzny" } },
    "imageDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wy\u015Bwietl plik graficzny" } },
    "inputText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wprowadzanie danych" } },
    "inputTextDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pole wprowadzania danych" } },
    "columnDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kontener zawieraj\u0105cy kolumny" } },
    "column": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kolumny" } },
    "button": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Przycisk" } },
    "buttonDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Element zawieraj\u0105cy przycisk" } },
    "table": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tabela" } },
    "dropdown": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Lista rozwijana" } },
    "dropdownDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Element rozwijany" } },
    "checkbox": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pole wyboru" } },
    "checkboxDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Element zawieraj\u0105cy pole wyboru" } },
    "iframe": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "IFrame" } },
    "authForm": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Formularz logowania" } },
    "authFormDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Formularz logowania u\u017Cytkownika" } },
    "formContainerDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Element zawieraj\u0105cy formularz" } },
    "tableDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Element zawieraj\u0105cy tabel\u0119" } },
    "formContainer": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Formularz" } },
    "iframeDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ramka typu iFrame" } },
    "choice": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Opcja wyboru" } },
    "choiceDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wyb\xF3r pojedynczej/wielu warto\u015Bci" } },
    "repeat": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Powt\xF3rz" } },
    "repeatDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Powtarzalny zestaw element\xF3w" } },
    "recordSelector": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Selektor rekord\xF3w" } },
    "recordSelectorDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Selektor rekord\xF3w powi\u0105zanych" } },
    "dateTimePicker": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Selektor daty i godziny" } },
    "dateTimePickerDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pole wprowadzania daty i godziny" } },
    "header": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nag\u0142\xF3wek wielostronicowy" } },
    "headerDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kontener wsp\xF3\u0142dzielony mi\u0119dzy stronami" } },
    "footer": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Stopka wielostronicowa" } },
    "footerDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kontener wsp\xF3\u0142dzielony mi\u0119dzy stronami" } },
    "notAllowedUnlessTop": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ten element mo\u017Ce by\u0107 umieszczony tylko na g\xF3rze strony" } },
    "notAllowedUnlessBottom": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ten element mo\u017Ce by\u0107 umieszczony tylko na dole strony" } },
    "notAllowedUnlessHeader": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ten element mo\u017Ce by\u0107 umieszczony tylko wewn\u0105trz nag\u0142\xF3wka strony" } },
    "notAllowedUnlessFooter": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ten element mo\u017Ce by\u0107 umieszczony tylko wewn\u0105trz stopki strony" } },
    "notAllowedInsideContainer": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ten element nie mo\u017Ce by\u0107 umieszczony by\u0107 wewn\u0105trz kontenera" } },
    "notAllowedInsideSameType": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ten element nie mo\u017Ce by\u0107 umieszczony w kontenerze tego samego typu" } },
    "ratingInput": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pole oceny" } },
    "ratingInputDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Element zawieraj\u0105cy pole do wprowadzenia oceny" } },
    "rating": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ocena" } },
    "ratingDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Element zawieraj\u0105cy ocen\u0119" } },
    "invalidElementValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Nieprawid\u0142owa warto\u015B\u0107 elementu: " }, { "t": 4, "k": "value" }] } },
    "notAllowedLocation": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "W tym miejscu, ten element nie jest dozwolony" } },
    "menu": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Menu" } },
    "menuDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Element zawieraj\u0105cy menu" } },
    "simpleContainer": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kontener" } },
    "simpleContainerDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kontener zawieraj\u0105cy inne elementy" } },
    "fileInput": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pole pliku" } },
    "fileInputDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pole s\u0142u\u017C\u0105ce do przesy\u0142ania plik\xF3w" } },
    "errorValueMissing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Brak atrybutu warto\u015Bci" } },
    "errorEmptyContainer": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ten kontener jest pusty" } },
    "errorParentWithDataSourceMissing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nie wybrano \u017Ar\xF3d\u0142a danych dla elementu ani kontenera nadrz\u0119dnego" } },
    "errorDataSourceMissing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nie wybrano \u017Ar\xF3d\u0142a danych" } },
    "errorSchemaPropertyMissing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nie wybrano atrybutu schematu" } },
    "errorWorkflowActionInError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Co najmniej jedna operacja jest nieprawid\u0142owo skonfigurowana" } },
    "errorCollectionFieldInError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Co najmniej jedno pole jest nieprawid\u0142owo skonfigurowane" } },
    "errorNavigateToPageMissing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": 'Brak atrybutu \u201CPrzejd\u017A do"' } },
    "errorPageParameterInError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Co najmniej jeden parametr strony jest nieprawid\u0142owo skonfigurowany" } },
    "errorNavigationUrlMissing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Brak atrybutu adresu URL" } },
    "errorImageFileMissing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Brak pliku obrazu" } },
    "errorImageUrlMissing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Brak atrybutu adresu URL pliku graficznego" } },
    "errorNoWorkflowAction": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nie skonfigurowano operacji procesu" } },
    "errorOptionsMissing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nie skonfigurowano opcji" } },
    "errorIframeUrlMissing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Brak atrybutu adresu URL iFrame" } },
    "errorIframeContentMissing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Brak zawarto\u015Bci iFrame" } },
    "errorNoMenuItem": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nie skonfigurowano elementu menu" } },
    "errorMenuItemInError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Co najmniej jedno menu jest nieprawid\u0142owo skonfigurowane" } },
    "errorSubMenuItemInError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Co najmniej jedno podmenu jest nieprawid\u0142owo skonfigurowane" } }
  },
  "addElementButton": {
    "label": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Element" } }
  },
  "elementForms": {
    "textInputPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wprowad\u017A tekst..." } },
    "urlInputPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wprowad\u017A URL..." } },
    "invalidFormula": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ta formu\u0142a jest nieprawid\u0142owa" } }
  },
  "headingElement": {
    "noValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Bez tytu\u0142u..." } },
    "missingValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Brak tytu\u0142u..." } },
    "emptyValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pusty tytu\u0142..." } }
  },
  "pageSidePanelType": {
    "general": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Og\xF3lne" } },
    "visibility": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Widoczno\u015B\u0107" } },
    "events": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zdarzenia" } },
    "style": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Styl" } },
    "eventsTabDeactivatedNoEvents": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ten element nie obs\u0142uguje \u017Cadnych zdarze\u0144" } },
    "eventsTabInError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Co najmniej jedna z operacji jest nieprawid\u0142owo skonfigurowana." } }
  },
  "emptySidePanelState": {
    "message": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kliknij element, aby zobaczy\u0107 wi\u0119cej szczeg\xF3\u0142\xF3w" } }
  },
  "imageElement": {
    "emptyState": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nie zdefiniowano tekstu alternatywnego..." } },
    "missingValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Brak tekstu alternatywnego..." } },
    "emptyValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pusty tekst alternatywny..." } }
  },
  "imageElementForm": {
    "fileLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Plik obrazu" } },
    "invalidUrlError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Adres URL jest nieprawid\u0142owy" } },
    "altTextTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tekst alternatywny" } },
    "altTextDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Jest u\u017Cywany przez czytniki ekranu oraz wy\u015Bwietlany, je\u015Bli nie mo\u017Cna za\u0142adowa\u0107 pliku graficznego" } },
    "fileSourceTypeUpload": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Prze\u015Blij" } },
    "fileSourceTypeURL": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "URL" } },
    "urlWarning": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Uwaga: upewnij si\u0119, czy masz kontrol\u0119 nad podanym adresem URL lub czy jest on wiarygodny." } },
    "uploadFileButton": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Prze\u015Blij plik" } },
    "imageConstraintContain": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zawiera\u0107" } },
    "maxWidthLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Maksymalna szeroko\u015B\u0107" } },
    "maxHeightLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wysoko\u015B\u0107 maks." } },
    "maxHeightPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wprowad\u017A maksymaln\u0105 wysoko\u015B\u0107 w pikselach." } },
    "maxWidthPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wprowad\u017A maksymaln\u0105 szeroko\u015B\u0107 jako warto\u015B\u0107 procentow\u0105." } },
    "imageConstraintsLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ograniczenia" } },
    "imageConstraintFullWidth": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Rozszerzenie do maksymalnej szeroko\u015Bci" } },
    "imageConstraintCover": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ok\u0142adka" } },
    "imageConstraintCoverDisabled": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Niedost\u0119pne z pust\u0105 maksymaln\u0105 wysoko\u015Bci\u0105." } },
    "imageConstraintContainDisabled": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Niedost\u0119pne z maksymaln\u0105 wysoko\u015Bci\u0105." } }
  },
  "domainTypes": {
    "customName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Domena u\u017Cytkownika" } },
    "subDomainName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Subdomena" } },
    "subDomain": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Subdomena domeny " }, { "t": 4, "k": "domain" }] } }
  },
  "linkElement": {
    "noValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Bezimienny..." } },
    "missingValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Brak tekstu do linku..." } },
    "emptyValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pusty tekst do linku..." } }
  },
  "linkElementForm": {
    "text": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tekst" } },
    "textPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wprowad\u017A tekst..." } },
    "navigateTo": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Przejd\u017A do" } },
    "navigateToNotSet": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Brak miejsca docelowego" } },
    "navigateToCustom": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Niestandardowy adres URL" } },
    "paramsInErrorDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zapisane parametry nie s\u0105 zgodne z parametrami strony. Strona zosta\u0142a prawdopodobnie usuni\u0119ta lub zaktualizowana." } },
    "paramsInErrorButton": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zaktualizuj parametry" } },
    "pageParameterTypeError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nieprawid\u0142owy typ" } },
    "url": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Docelowy adres URL" } },
    "variant": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wariant" } },
    "variantLink": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Link" } },
    "urlPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wprowad\u017A adres URL..." } },
    "variantButton": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Przycisk" } },
    "width": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Szeroko\u015B\u0107" } },
    "widthAuto": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Auto" } },
    "widthFull": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pe\u0142na szeroko\u015B\u0107" } },
    "target": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Otw\xF3rz w..." } },
    "targetSelf": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ta sama zak\u0142adka" } },
    "targetNewTab": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nowa zak\u0142adka" } },
    "paramPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wprowad\u017A warto\u015B\u0107..." } },
    "buttonColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kolor przycisku" } }
  },
  "alignmentSelector": {
    "alignment": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wyr\xF3wnanie" } },
    "alignmentLeft": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Link" } },
    "alignmentCenter": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Centrum" } },
    "alignmentRight": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Prawo" } }
  },
  "pageSettingsTypes": {
    "pageName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Strona" } }
  },
  "pageSettings": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Strona" } },
    "pageUpdatedTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Strona zaktualizowana" } },
    "pageUpdatedDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ustawienia strony zosta\u0142y zaktualizowane." } }
  },
  "pathParamTypes": {
    "textName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tekst" } },
    "numericName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Liczbowy" } }
  },
  "publicPage": {
    "siteNotFound": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nie znaleziono witryny" } },
    "pageNotFound": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nie znaleziono strony" } },
    "loginToastTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pomy\u015Blne uwierzytelnienie" } },
    "loginToastMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Logowanie zako\u0144czy\u0142o si\u0119 pomy\u015Blnie." } },
    "authorizedToastTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wymagane uwierzytelnienie" } },
    "authorizedToastMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aby uzyska\u0107 dost\u0119p do tej strony, musisz si\u0119 zalogowa\u0107. Zaloguj si\u0119, aby kontynuowa\u0107." } }
  },
  "integrationSettings": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Integracje" } },
    "integrationMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nowe integracje mo\u017Cna utworzy\u0107 poprzez dodanie \u017Ar\xF3d\u0142a danych, operacji lub uwierzytelnienia u\u017Cytkownika." } },
    "noIntegrationMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nie utworzono jeszcze \u017Cadnych integracji. Aby skonfigurowa\u0107 integracj\u0119, dodaj \u017Ar\xF3d\u0142o danych, operacj\u0119 lub uwierzytelnienie u\u017Cytkownika." } }
  },
  "textElement": {
    "noValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pusty akapit..." } },
    "missingValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Brak tekstu..." } },
    "emptyValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pusty tekst..." } }
  },
  "textElementForm": {
    "textTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tekst" } },
    "textPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wprowad\u017A tekst..." } },
    "textError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ta warto\u015B\u0107 jest nieprawid\u0142owa." } },
    "textFormatTypeLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Format" } },
    "textFormatTypePlain": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zwyk\u0142y tekst" } },
    "textFormatTypeMarkdown": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Markdown" } }
  },
  "domainSettings": {
    "titleOverview": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Domeny" } },
    "titleAddDomain": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dodaj domen\u0119" } },
    "addDomain": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dodaj domen\u0119" } },
    "noDomainMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Z t\u0105 aplikacj\u0105 nie s\u0105 jeszcze powi\u0105zane \u017Cadne domeny. Aby opublikowa\u0107 t\u0119 aplikacj\u0119, musisz doda\u0107 domen\u0119. Mo\u017Cesz opublikowa\u0107 r\xF3\u017Cne wersje aplikacji na ka\u017Cdej z wymienionych tutaj domen." } }
  },
  "dnsStatus": {
    "typeHeader": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Typ" } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Udaj si\u0119 do panelu konfiguracji swoich domen i wprowad\u017A nast\u0119puj\u0105ce zmiany w ustawieniach DNS" } },
    "hostHeader": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Host" } },
    "valueHeader": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Warto\u015B\u0107" } }
  },
  "customDomainForm": {
    "domainNameLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nazwa domeny" } },
    "invalidDomain": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Podana nazwa domeny jest nieprawid\u0142owa" } },
    "notUniqueDomain": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Podana domena jest ju\u017C u\u017Cywana" } }
  },
  "domainCard": {
    "refresh": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Od\u015Bwie\u017C ustawienia" } },
    "detailLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Poka\u017C szczeg\xF3\u0142y" } },
    "unpublishedDomainWarning": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Opublikuj aplikacj\u0119, aby udost\u0119pni\u0107 j\u0105 na tej domenie." } }
  },
  "dataSourceForm": {
    "namePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nazwa \u017Ar\xF3d\u0142a" } },
    "addIntegration": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dodaj now\u0105 integracj\u0119" } },
    "noIntegrations": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nie masz jeszcze \u017Cadnej integracji" } },
    "selectTypeFirst": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Najpierw wybierz us\u0142ug\u0119" } },
    "servicePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wybierz us\u0142ug\u0119" } },
    "integrationPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wybierz integracj\u0119" } },
    "errorUniqueName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nazwa \u017Ar\xF3d\u0142a danych musi by\u0107 unikalna." } },
    "nameLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nazwa" } },
    "actionLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Operacja" } },
    "integrationLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Integracja" } }
  },
  "dataSourceContext": {
    "addDataSource": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dodaj nowe \u017Ar\xF3d\u0142o danych" } },
    "noDataSourceMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u0179r\xF3d\u0142a danych s\u0142u\u017C\u0105 do pobierania danych z zasob\xF3w wewn\u0119trznych lub zewn\u0119trznych i wy\u015Bwietlania ich na stronie." } },
    "noDataSourceTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nie doda\u0142e\u015B jeszcze \u017Cadnego \u017Ar\xF3d\u0142a danych." } },
    "sharedDataSourceTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wsp\xF3\u0142dzielone mi\u0119dzy stronami" } },
    "pageDataSourceTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dla tej strony" } },
    "sharedDataSourceDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dost\u0119pne na ka\u017Cdej stronie i pobierane jeden raz, przy pierwszym za\u0142adowaniu strony." } },
    "pageDataSourceDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pobierane, gdy u\u017Cytkownik otwiera t\u0119 stron\u0119." } }
  },
  "verticalAlignmentSelector": {
    "alignmentTop": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "G\xF3ra" } },
    "alignmentBottom": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "D\xF3\u0142" } },
    "alignmentCenter": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wy\u015Brodkowany w pionie" } },
    "alignment": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wyr\xF3wnanie pionowe" } }
  },
  "horizontalAlignmentSelector": {
    "alignmentLeft": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Lewa" } },
    "alignmentRight": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Prawo" } },
    "alignment": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wyr\xF3wnanie poziome" } },
    "alignmentCenter": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wy\u015Brodkowany w poziomie" } }
  },
  "inputTextElementForm": {
    "placeholderPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wprowad\u017A symbol zast\u0119pczy (opcjonalnie)" } },
    "valueTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Warto\u015B\u0107 domy\u015Blna" } },
    "valuePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wprowad\u017A warto\u015B\u0107 domy\u015Bln\u0105 (opcjonalnie)" } },
    "placeholderTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Symbol zast\u0119pczy" } },
    "requiredTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wymagane" } },
    "rowsPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wprowad\u017A liczb\u0119 wierszy tego pola" } },
    "inputType": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Rodzaj wprowadzanych danych" } },
    "inputTypeTextLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tekst" } },
    "inputTypePasswordLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Has\u0142o" } },
    "passwordTypeWarning": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Has\u0142a to dane poufne. Prosimy o zachowanie ostro\u017Cno\u015Bci przy podawaniu i zapisywaniu hase\u0142 w aplikacji." } },
    "multilineTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wielo-wierszowy" } },
    "validationTypeIntegerDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wymagaj, aby w tym polu by\u0142a wpisana liczba (akceptowane s\u0105 liczby ca\u0142kowite lub u\u0142amki dziesi\u0119tne)." } },
    "rowsTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Liczba wierszy" } },
    "validationTypeAnyDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zezw\xF3l na wstawienie dowolnej warto\u015Bci w tym polu." } },
    "validationTypeAnyLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dowolny" } },
    "validationTypeEmailDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wymu\u015B adresy e-mail w tym polu." } },
    "validationTypeIntegerLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Liczba" } },
    "validationTypeEmailLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "E-mail" } }
  },
  "defaultStyleForm": {
    "boxTop": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "G\xF3ra" } },
    "boxBottom": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "D\xF3\u0142" } },
    "boxLeft": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Lewo" } },
    "backgroundLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "T\u0142o" } },
    "backgroundColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kolor t\u0142a" } },
    "widthLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Szeroko\u015B\u0107" } },
    "boxRight": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Prawo" } },
    "backgroundImage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Plik graficzny" } },
    "backgroundImageMode": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tryb wype\u0142nienia" } },
    "cssClasses": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Klasy CSS" } },
    "cssClassesHelp": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Podaj klasy, kt\xF3re b\u0119d\u0105 u\u017Cyte w wygenerowanym kodzie HTML. Poszczeg\xF3lne klasy oddziel spacjami." } },
    "cssClassesPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wprowad\u017A klasy CSS..." } }
  },
  "columnElementForm": {
    "columnGapPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wprowad\u017A odst\u0119p mi\u0119dzy kolumnami..." } },
    "columnGapTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Odst\u0119p mi\u0119dzy kolumnami" } },
    "columnAmountTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Uk\u0142ad strony" } },
    "columnAmountName": { "t": 0, "b": { "t": 1, "c": [{ "t": 2, "i": [{ "t": 3 }], "s": "brak kolumn" }, { "t": 2, "i": [{ "t": 3 }], "s": "1 kolumna" }, { "t": 2, "i": [{ "t": 4, "k": "columnAmount" }, { "t": 3, "v": " kolumny/kolumn" }] }] } },
    "verticalAlignment": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wyr\xF3wnanie w pionie" } },
    "customLayout": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Niestandardowe" } },
    "customWeightsTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Niestandardowy rozmiar kolumn" } },
    "customWeightsHelper": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wprowad\u017A 0, je\u015Bli szeroko\u015B\u0107 kolumny ma odpowiada\u0107 szeroko\u015Bci zawarto\u015Bci. Pozosta\u0142e kolumny podziel\u0105 mi\u0119dzy sob\u0105 pozosta\u0142\u0105 przestrze\u0144." } },
    "errorCustomWeightsMinimum": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Rozmiar kolumny musi mie\u0107 warto\u015B\u0107 0 lub wi\u0119ksz\u0105" } },
    "columnStackingTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ustaw kolumny w zale\u017Cno\u015Bci od rodzaju urz\u0105dzenia" } },
    "columnStackingHorizontal": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Obok siebie" } },
    "columnStackingStacked": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Jedna nad drug\u0105" } }
  },
  "styleBoxForm": {
    "paddingError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Warto\u015B\u0107 musi by\u0107 liczb\u0105 ca\u0142kowit\u0105 z zakresu od 0 do 200." } },
    "borderLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Rozmiar" } },
    "paddingLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Padding" } },
    "borderColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kolor obramowania" } },
    "marginLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Margines" } }
  },
  "dataProviderType": {
    "dataSource": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Rekordy danych" } },
    "pageParameter": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Parametr" } },
    "currentRecord": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u0179r\xF3d\u0142o danych" } },
    "previousAction": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Poprzednia operacja" } },
    "user": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "U\u017Cytkownik" } },
    "formData": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dane formularza" } },
    "dataSourceContext": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dost\u0119pne opcje" } }
  },
  "generalForm": {
    "labelTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Etykieta" } },
    "valueTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Warto\u015B\u0107" } },
    "labelPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wprowad\u017A etykiet\u0119" } },
    "valuePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wprowad\u017A warto\u015B\u0107" } },
    "placeholderTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tekst-wskaz\xF3wka (placeholder)" } },
    "placeholderPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wprowad\u017A tekst-wskaz\xF3wk\u0119 (placeholder)" } },
    "requiredTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wymagane" } },
    "validationTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Walidacja" } },
    "defaultValueTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Warto\u015B\u0107 domy\u015Blna" } },
    "defaultValuePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wprowad\u017A warto\u015B\u0107 domy\u015Bln\u0105" } }
  },
  "iframeElementForm": {
    "sourceTypeLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Typ \u017Ar\xF3d\u0142a" } },
    "empty": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pusty IFrame..." } },
    "urlLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Adres URL" } },
    "urlPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Link do zewn\u0119trznego zasobu, kt\xF3ry ma zosta\u0107 osadzony" } },
    "urlHelp": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Uwaga: upewnij si\u0119, czy masz kontrol\u0119 nad podanym adresem URL lub czy jest on wiarygodny." } },
    "embedLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Osad\u017A" } },
    "embedPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kod HTML do osadzenia" } },
    "heightLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wysoko\u015B\u0107 (px)" } },
    "heightPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wysoko\u015B\u0107 w pikselach" } },
    "missingValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Brak \u017Ar\xF3d\u0142a iFrame..." } },
    "emptyValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Puste \u017Ar\xF3d\u0142o iFrame..." } }
  },
  "backgroundTypes": {
    "none": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Brak" } },
    "color": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kolor" } }
  },
  "eventTypes": {
    "clickLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Po klikni\u0119ciu" } },
    "submitLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Po wys\u0142aniu" } },
    "afterLoginLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Po zalogowaniu" } }
  },
  "getFormulaComponent": {
    "errorTooltip": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nieprawid\u0142owe odniesienie" } }
  },
  "tableElementForm": {
    "fieldValueLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Warto\u015B\u0107" } },
    "itemsPerPage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pozycji na stron\u0119" } },
    "fieldDefaultName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kolumna" } },
    "fieldType": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Typ" } },
    "itemsPerPagePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wprowad\u017A warto\u015B\u0107..." } },
    "selectSourceFirst": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aby rozpocz\u0105\u0107 konfiguracj\u0119 p\xF3l, wybierz \u017Ar\xF3d\u0142o danych listy i/lub atrybut." } },
    "buttonColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kolor przycisku" } },
    "addField": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "dodaj pole" } },
    "fieldValuePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wprowad\u017A warto\u015B\u0107..." } },
    "dataSource": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u0179r\xF3d\u0142o danych" } },
    "fields": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pola" } },
    "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nazwa" } },
    "noName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Brak nazwy" } },
    "refreshFieldsFromDataSource": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "od\u015Bwie\u017C pola ze \u017Ar\xF3d\u0142a danych" } },
    "buttonLoadMoreLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": 'Etykieta \u201CPoka\u017C wi\u0119cej"' } },
    "propertySelectorMissingArrays": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nie znaleziono p\xF3l wielowarto\u015Bciowych do u\u017Cycia jako wiersze." } }
  },
  "tableElement": {
    "empty": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nie znaleziono \u017Cadnych element\xF3w." } },
    "showMore": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Poka\u017C wi\u0119cej" } }
  },
  "currentRecordDataProviderType": {
    "index": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Indeks" } },
    "firstPartName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "\u0179r\xF3d\u0142o danych: " }, { "t": 4, "k": "name" }] } },
    "schemaProperty": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "prefixName" }, { "t": 3, "v": ": " }, { "t": 4, "k": "schemaProperty" }] } }
  },
  "linkFieldForm": {
    "fieldLinkNameLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tekst linku" } },
    "fieldValueLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Adres URL" } },
    "fieldValuePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wprowad\u017A warto\u015B\u0107..." } },
    "fieldLinkNamePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wprowad\u017A warto\u015B\u0107..." } },
    "buttonColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kolor przycisku" } }
  },
  "textFieldForm": {
    "fieldValueLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Warto\u015B\u0107" } },
    "fieldValuePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wprowad\u017A warto\u015B\u0107..." } }
  },
  "linkField": {
    "details": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Szczeg\xF3\u0142y" } }
  },
  "createUserSourceForm": {
    "userSourceType": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Typ" } },
    "userSourceIntegration": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Integracja" } },
    "userSourceName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nazwa" } }
  },
  "updateUserSourceForm": {
    "nameFieldPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wprowad\u017A nazw\u0119..." } },
    "authTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Uwierzytelnianie" } },
    "integrationFieldLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Integracja" } },
    "nameFieldLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nazwa" } },
    "addProvider": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dodaj dostawc\u0119" } }
  },
  "dropdownOptionSelector": {
    "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nazwa" } },
    "addOption": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "doda\u0107 opcj\u0119" } },
    "label": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Opcje" } },
    "value": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Warto\u015B\u0107" } }
  },
  "dispatchDataSourceError": {
    "defaultMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wyst\u0105pi\u0142 b\u0142\u0105d podczas \u0142adowania danych dla strony." } },
    "defaultTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "B\u0142\u0105d \u0142adowania danych" } }
  },
  "upsertRowWorkflowActionForm": {
    "integrationDropdownLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Integracja" } },
    "rowIdLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Identyfikator wiersza" } },
    "rowIdPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wybierz identyfikator wiersza" } },
    "fieldMappingPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wybierz warto\u015B\u0107 pola" } },
    "noTableSelectedMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wybierz tabel\u0119, aby rozpocz\u0105\u0107 konfiguracj\u0119 p\xF3l." } }
  },
  "checkboxElementForm": {
    "requiredTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wymagane" } },
    "labelTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nazwa opcji" } },
    "valueTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Warto\u015B\u0107 domy\u015Blna" } }
  },
  "userSourceUsersContext": {
    "searchPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Szukaj u\u017Cytkownika" } },
    "anonymous": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Niezalogowany" } },
    "unnamed": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Bez nazwy" } },
    "noEmail": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Brak e-maila" } }
  },
  "visibilityForm": {
    "allVisitors": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wszyscy odwiedzaj\u0105cy" } },
    "loggedInVisitors": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zalogowani odwiedzaj\u0105cy" } },
    "notLoggedInVisitors": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Niezalogowani odwiedzaj\u0105cy" } },
    "warningTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "To jest funkcja zabezpieczaj\u0105ca" } },
    "warningMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Kliknij " }, { "t": 4, "k": "link" }, { "t": 3, "v": ", aby dowiedzie\u0107 si\u0119 wi\u0119cej o tym, jak zabezpieczamy dane." }] } },
    "documentationLink": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "dokumentacja" } },
    "excludedRolesLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "wszystkie role z wyj\u0105tkiem" } },
    "switchAllowLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zezwalaj" } },
    "switchDisallowLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wyklucz" } },
    "rolesSelectAll": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zaznacz wszystko" } },
    "rolesDeselectAll": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Odznacz wszystko" } },
    "rolesSelectHint": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wybierz jedn\u0105 lub wi\u0119cej r\xF3l" } },
    "roleTypesHint": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wybierz rodzaj roli" } },
    "roleTypeAllowAllRoles": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wszystkie role" } },
    "roleTypeAllowAllRolesExcept": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wykluczone role\u2026" } },
    "roleTypeDisallowAllRolesExcept": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dozwolone role\u2026" } },
    "rolesAllMembersOf": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Wszyscy cz\u0142onkowie " }, { "t": 4, "k": "name" }] } },
    "noRole": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Brak roli" } },
    "errorFetchingRolesTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nie uda\u0142o si\u0119 pobra\u0107 r\xF3l u\u017Cytkownik\xF3w" } },
    "errorFetchingRolesMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wyst\u0105pi\u0142 problem podczas pobierania r\xF3l u\u017Cytkownik\xF3w." } },
    "visibilityCondition": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wy\u015Bwietlanie warunkowe" } },
    "visibilityConditionHelper": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Je\u015Bli wynik tej formu\u0142y jest prawdziwy i powy\u017Cszy wyb\xF3r odwiedzaj\u0105cego te\u017C jest prawdziwy, to element b\u0119dzie widoczny. Funkcja ta ma wy\u0142\u0105cznie wp\u0142yw na widoczno\u015B\u0107 elementu, a nie na zawarto\u015B\u0107 odpowiedzi serwera. Aby wstrzyma\u0107 wysy\u0142anie danych w odpowiedzi serwera, u\u017Cyj opcji filtrowania wed\u0142ug roli u\u017Cytkownika." } },
    "visibilityConditionPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Warunek..." } }
  },
  "formDataProviderType": {
    "nodeMissing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Brakuj\u0105cy" } }
  },
  "userSourceSettings": {
    "titleAddUserSource": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nowe \u017Ar\xF3d\u0142o u\u017Cytkownika" } },
    "titleUpdateUserSource": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Edytuj \u017Ar\xF3d\u0142o u\u017Cytkownika" } },
    "titleOverview": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u0179r\xF3d\u0142a u\u017Cytkownik\xF3w" } },
    "addUserSource": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dodaj \u017Ar\xF3d\u0142o u\u017Cytkownik\xF3w" } },
    "noUserSourceMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nie doda\u0142e\u015B jeszcze \u017Ar\xF3d\u0142a u\u017Cytkownik\xF3w do tej aplikacji. Je\u015Bli chcesz umo\u017Cliwi\u0107 u\u017Cytkownikom logowanie si\u0119 do tej aplikacji, potrzebne jest \u017Ar\xF3d\u0142o u\u017Cytkownik\xF3w." } }
  },
  "domainForm": {
    "invalidDomain": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nazwa domeny jest niepoprawna" } },
    "notUniqueDomain": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Podana domena jest ju\u017C w u\u017Cyciu" } }
  },
  "subDomainForm": {
    "domainNameLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nazwa domeny" } }
  },
  "widthSelector": {
    "width": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Szeroko\u015B\u0107" } },
    "widthAuto": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Automatyczna" } },
    "widthFull": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pe\u0142na szeroko\u015B\u0107" } }
  },
  "widthTypes": {
    "full": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pe\u0142na szeroko\u015B\u0107" } },
    "normal": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Normalny" } },
    "medium": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u015Aredni" } },
    "small": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ma\u0142y" } },
    "fullBleed": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ca\u0142kowite wype\u0142nienie" } },
    "fullWidth": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pe\u0142na szeroko\u015B\u0107" } }
  },
  "buttonElementForm": {
    "valueLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tekst na przycisku" } },
    "valuePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wprowad\u017A tekst..." } },
    "buttonColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kolor przycisku" } }
  },
  "fontSidePanelForm": {
    "label": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kolor czcionki" } }
  },
  "workflowActionTypes": {
    "notificationLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Poka\u017C powiadomienie" } },
    "openPageLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Otw\xF3rz stron\u0119" } },
    "createRowLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Utw\xF3rz wiersz" } },
    "updateRowLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aktualizuj wiersz" } },
    "logoutLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wyloguj si\u0119" } },
    "refreshDataSourceLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Od\u015Bwie\u017C \u017Ar\xF3d\u0142o danych" } },
    "httpRequest": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wy\u015Blij \u017C\u0105danie HTTP" } },
    "errorNavigateToPageMissing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": 'Brak atrybutu \u201CPrzejd\u017A do strony"' } },
    "errorPageParameterInError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Przynajmniej jeden z parametr\xF3w strony jest nieprawid\u0142owo skonfigurowany" } },
    "errorNavigationUrlMissing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Brak atrybutu adresu URL" } },
    "errorDataSourceMissing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nie wybrano \u017Ar\xF3d\u0142a danych" } }
  },
  "notificationWorkflowActionForm": {
    "titleLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tytu\u0142" } },
    "titlePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wprowad\u017A tekst..." } },
    "descriptionPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wprowad\u017A tekst..." } },
    "descriptionLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Opis" } }
  },
  "openPageWorkflowActionForm": {
    "urlPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wprowad\u017A tekst..." } },
    "urlLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Adres URL" } }
  },
  "event": {
    "addAction": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "dodaj operacj\u0119" } }
  },
  "formContainerElementForm": {
    "submitButtonPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wprowad\u017A warto\u015B\u0107..." } },
    "submitButtonLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Przycisk wysy\u0142ania" } },
    "buttonColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kolor przycisku" } },
    "resetToInitialValuesTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Przywr\xF3\u0107 warto\u015Bci domy\u015Blne po wys\u0142aniu" } },
    "resetToInitialValuesDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Je\u015Bli opcja jest zaznaczona, to po pomy\u015Blnym wys\u0142aniu, formularz zostanie zresetowany i wype\u0142niony warto\u015Bciami domy\u015Blnymi. Je\u015Bli opcja nie jest zaznaczona, wprowadzone warto\u015Bci nie zostan\u0105 zresetowane." } }
  },
  "subDomainDetails": {
    "text": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ustawienia DNS domeny zosta\u0142y skonfigurowane i sprawdzone. Nie ma konieczno\u015Bci wprowadzania dodatkowych modyfikacji." } }
  },
  "linkNavigationSelection": {
    "paramPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wprowad\u017A warto\u015B\u0107..." } },
    "urlPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wprowad\u017A adres URL..." } },
    "url": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Docelowy adres URL" } },
    "paramsInErrorDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zapisane parametry nie s\u0105 zgodne z parametrami strony. Strona zosta\u0142a prawdopodobnie usuni\u0119ta lub zmieniona." } },
    "paramsInErrorButton": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zaktualizuj parametry" } },
    "navigateTo": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Przejd\u017A do" } },
    "navigateToCustom": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "W\u0142asny adres URL" } },
    "target": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Otw\xF3rz w..." } },
    "targetSelf": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tej samej karcie" } },
    "targetNewTab": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nowej karcie" } }
  },
  "mainThemeConfigBlock": {
    "colorsLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kolory" } },
    "primaryColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Podstawowe" } },
    "secondaryColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Drugorz\u0119dny" } },
    "typography": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Typografia" } },
    "headingLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Nag\u0142\xF3wek " }, { "t": 4, "k": "i" }, { "t": 3, "v": " (h" }, { "t": 4, "k": "i" }, { "t": 3, "v": ")" }] } },
    "headingValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Nag\u0142\xF3wek <h" }, { "t": 4, "k": "i" }, { "t": 3, "v": ">" }] } }
  },
  "buttonElement": {
    "noValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Bezimienny..." } },
    "missingValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Brak tekstu na przycisku..." } },
    "emptyValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tekst na przycisku jest pusty..." } }
  },
  "collectionFieldType": {
    "text": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tekst" } },
    "link": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Link" } },
    "boolean": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Warto\u015B\u0107 logiczna" } },
    "button": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Przycisk" } },
    "tags": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tagi" } },
    "image": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Plik graficzny" } },
    "rating": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ocena" } },
    "errorValueMissing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Brak atrybutu warto\u015Bci" } }
  },
  "formContainerElement": {
    "submitDeactivatedText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wype\u0142nij wszystkie wymagane pola, aby wys\u0142a\u0107 formularz" } },
    "defaultSubmitButtonLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wy\u015Blij" } }
  },
  "dispatchWorkflowActionError": {
    "defaultTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "B\u0142\u0105d zdarzenia" } },
    "defaultMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wyst\u0105pi\u0142 b\u0142\u0105d wyzwalaj\u0105cy to zdarzenie." } },
    "formDataInvalidMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Jedno lub wi\u0119cej p\xF3l zawiera nieprawid\u0142owe warto\u015Bci." } },
    "formDataInvalidTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nieprawid\u0142owy formularz" } }
  },
  "authFormElementForm": {
    "userSource": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u0179r\xF3d\u0142o u\u017Cytkownika" } }
  },
  "authFormElement": {
    "email": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "E-mail" } },
    "password": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Has\u0142o" } },
    "emailPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wpisz sw\xF3j adres e-mail..." } },
    "passwordPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wprowad\u017A swoje has\u0142o." } },
    "selectOrConfigureUserSourceFirst": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wybierz \u017Ar\xF3d\u0142o u\u017Cytkownika, aby rozpocz\u0105\u0107 korzystanie z tego elementu logowania." } }
  },
  "pagePreview": {
    "emptyMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kliknij, aby utworzy\u0107 element" } },
    "header": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "NAG\u0141\xD3WEK" } },
    "footer": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "STOPKA" } }
  },
  "userSelector": {
    "viewAs": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Zobacz jako: " }, { "t": 4, "k": "user" }] } },
    "anonymous": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Niezalogowany" } },
    "member": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "prefix" }, { "t": 3, "v": " cz\u0142onek" }] } }
  },
  "generalSettings": {
    "titleOverview": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Og\xF3lne" } },
    "labelForm": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ikona favicon" } },
    "labelDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wybierz plik ICO, PNG, GIF lub JPEG o wymiarach 128\xD7128 px." } },
    "labelButton": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Prze\u015Blij ikon\u0119 favicon" } },
    "cantUploadFaviconTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nie uda\u0142o si\u0119 przes\u0142a\u0107 pliku z ikon\u0105 favicon" } },
    "cantUploadFaviconDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nie uda\u0142o si\u0119 przes\u0142a\u0107 pliku z ikon\u0105 favicon. Sprawd\u017A, czy plik ma unikaln\u0105 nazw\u0119 i czy jest zapisany w obs\u0142ugiwanym formacie." } },
    "cantUpdateApplicationTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nie uda\u0142o si\u0119 zaktualizowa\u0107 aplikacji" } },
    "cantUpdateApplicationDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Przepraszamy, nie uda\u0142o si\u0119 zaktualizowa\u0107 aplikacji." } }
  },
  "choiceOptionSelector": {
    "dataSource": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u0179r\xF3d\u0142o danych" } },
    "label": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Opcje" } },
    "value": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Warto\u015Bci opcji" } },
    "valuePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wprowad\u017A warto\u015B\u0107" } },
    "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nazwy opcji" } },
    "namePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wprowad\u017A nazw\u0119" } },
    "addOption": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "dodaj opcj\u0119" } },
    "addOptionDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": 'Kliknij \u201Cdodaj opcj\u0119", aby doda\u0107 opcje do listy rozwijanej' } },
    "optionType": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Typ opcji" } },
    "manual": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "R\u0119cznie" } },
    "formulas": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Formu\u0142y" } }
  },
  "repeatElementForm": {
    "dataSource": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u0179r\xF3d\u0142o danych" } },
    "itemsPerPage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pozycji na stronie" } },
    "itemsPerPagePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wprowad\u017A warto\u015B\u0107..." } },
    "itemsPerRowLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Liczba pozycji w wierszu" } },
    "itemsPerRowDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Liczba kolumn w wierszu wg. typu urz\u0105dzenia." } },
    "buttonLoadMoreLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": 'Etykieta "Poka\u017C wi\u0119cej"' } },
    "toggleEditorRepetitionsLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tymczasowo wy\u0142\u0105cz powt\xF3rzenia" } },
    "propertySelectorMissingArrays": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nie znaleziono p\xF3l wielowarto\u015Bciowych do powtarzania." } },
    "gapLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Odst\u0119p mi\u0119dzy powt\xF3rzeniami" } },
    "gapVerticalLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pionowy" } },
    "gapHorizontalLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Poziomy" } }
  },
  "dataSourceDropdown": {
    "label": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u0179r\xF3d\u0142o danych" } },
    "noDataSources": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Brak dost\u0119pnych \u017Ar\xF3de\u0142 danych" } },
    "noSharedDataSources": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Brak dost\u0119pnych wsp\xF3\u0142dzielonych \u017Ar\xF3de\u0142 danych" } },
    "shared": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "wsp\xF3\u0142dzielone" } },
    "pageOnly": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "ta strona" } },
    "addNew": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dodaj nowe \u017Ar\xF3d\u0142o danych" } }
  },
  "common": {
    "dateFormatTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Format daty" } },
    "dateFormatEU": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Europejski" } },
    "dateFormatUS": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "US" } },
    "dateFormatISO": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "ISO" } },
    "timeFormatTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Format godziny" } },
    "timeFormat24Hour": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "24 godziny" } },
    "timeFormat12Hour": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "12 godzin" } }
  },
  "builderToast": {
    "details": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Szczeg\xF3\u0142y" } },
    "defaultTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nieoczekiwany b\u0142\u0105d" } },
    "defaultMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wyst\u0105pi\u0142 nieoczekiwany b\u0142\u0105d. Spr\xF3buj ponownie p\xF3\u017Aniej." } },
    "invalidContextTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nieprawid\u0142owe \u017C\u0105danie" } },
    "invalidContextMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "To \u017C\u0105danie nie jest sformu\u0142owane prawid\u0142owo." } },
    "InvalidContentTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nieprawid\u0142owy formularz" } },
    "invalidContentMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Co najmniej jedno pole zawiera nieprawid\u0142ow\u0105 warto\u015B\u0107." } },
    "serviceMisconfiguredTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Niekompletna konfiguracja" } },
    "serviceMisconfiguredMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sprawd\u017A konfiguracj\u0119." } },
    "errorWorkflowActionDispatch": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Operacja \u201C" }, { "t": 4, "k": "name" }, { "t": 3, "v": '" nie powiod\u0142a si\u0119: ' }] } },
    "errorDataSourceDispatch": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Nie uda\u0142o si\u0119 za\u0142adowa\u0107 danych \u201C" }, { "t": 4, "k": "name" }, { "t": 3, "v": '": ' }] } }
  },
  "addElementCategory": {
    "suggestedElement": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sugerowane elementy" } },
    "baseElement": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Elementy podstawowe" } },
    "layoutElement": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Elementy uk\u0142adu strony" } },
    "formElement": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Elementy formularza" } }
  },
  "orientations": {
    "label": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Orientacja" } },
    "horizontal": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pozioma" } },
    "vertical": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pionowa" } }
  },
  "menuElement": {
    "missingValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Brak pozycji w menu" } },
    "separator": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Separator" } },
    "spacer": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Odst\u0119p" } },
    "missingLinkValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Brak nazwy linku..." } },
    "emptyLinkValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pusta nazwa linku..." } },
    "missingButtonValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Brak nazwy przycisku..." } },
    "emptyButtonValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pusta nazwa przycisku..." } }
  },
  "menuElementForm": {
    "menuItemsLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Elementy menu" } },
    "addMenuItemLink": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dodaj..." } },
    "alignment": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wyr\xF3wnanie" } },
    "menuItemDefaultName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Strona" } },
    "menuItemLabelLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Etykieta" } },
    "menuItemTypeLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Typ" } },
    "menuItemTypeSeparator": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Separator" } },
    "menuItemVariantLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wariant" } },
    "menuItemVariantLink": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Link" } },
    "menuItemVariantButton": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Przycisk" } },
    "namePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Strona" } },
    "addSubLink": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dodaj link podrz\u0119dny" } },
    "menuItemSubLinkDefaultName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Link podrz\u0119dny" } },
    "menuItemAddLink": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Link" } },
    "menuItemAddButton": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Przycisk" } },
    "menuItemAddSeparator": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Separator" } },
    "menuItemAddSpacer": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Odst\u0119p" } },
    "eventDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aby skonfigurowa\u0107 operacje dla tego przycisku, otw\xF3rz zak\u0142adk\u0119 \u201CZdarzenia\u201D." } },
    "noMenuItemsMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": 'Aby doda\u0107 pierwszy element menu, kliknij \u201CDodaj".' } },
    "variant": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wariant w zale\u017Cno\u015Bci od rodzaju urz\u0105dzenia" } },
    "expanded": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Rozszerzony" } },
    "compact": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kompaktowy" } },
    "previewCompactMenuLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Podgl\u0105d menu kompaktowego" } },
    "previewCompactMenuHelper": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Poka\u017C/ukryj podgl\u0105d menu kompaktowego." } },
    "openEditorCompactMenu": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Otw\xF3rz menu" } },
    "closeEditorCompactMenu": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zamknij menu" } }
  },
  "simpleContainerElementForm": {
    "noConfigurationOptions": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ten kontener nie ma \u017Cadnych opcji konfiguracji." } }
  },
  "dateTimePickerElementForm": {
    "includeTime": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Uwzgl\u0119dnij godzin\u0119" } },
    "invalidDateError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nieprawid\u0142owa data. Sprawd\u017A, czy wpisana data jest zgodna z podanym formatem." } }
  },
  "themeSettings": {
    "titleOverview": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Motyw" } }
  },
  "pageVisibilitySettingsTypes": {
    "pageName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Widoczno\u015B\u0107" } },
    "logInPageWarningTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Strona logowania nie zosta\u0142a jeszcze skonfigurowana" } },
    "logInPagewarningMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Je\u015Bli niezalogowany u\u017Cytkownik spr\xF3buje otworzy\u0107 t\u0119 stron\u0119, to zostanie przekierowany na stron\u0119 logowania. Przypisz stron\u0119 logowania w ustawieniach og\xF3lnych aplikacji." } },
    "logInPageInfoTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "U\u017Cytkownicy niezalogowani zostan\u0105 przekierowani" } },
    "logInPageInfoMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "U\u017Cytkownicy niezalogowani pr\xF3buj\u0105cy otworzy\u0107 t\u0119 stron\u0119 zostan\u0105 przekierowani na stron\u0119 " }, { "t": 4, "k": "logInPageName" }, { "t": 3, "v": "." }] } }
  },
  "pageVisibilitySettings": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Widoczno\u015B\u0107" } },
    "allVisitors": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wszyscy odwiedzaj\u0105cy" } },
    "loggedInVisitors": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zalogowani u\u017Cytkownicy" } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kto mo\u017Ce zobaczy\u0107 t\u0119 stron\u0119" } }
  },
  "queryParamTypes": {
    "textName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tekst" } },
    "numericName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Liczbowy" } }
  },
  "pageEditor": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Konfigurator aplikacji" } },
    "pageNotFound": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nie znaleziono strony" } }
  },
  "dataSourceItem": {
    "notConfigured": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nieskonfigurowany" } }
  },
  "dataSourceItemContext": {
    "shareBetweenPages": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Udost\u0119pnij na innych stronach" } },
    "unshareBetweenPages": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wycofaj udost\u0119pnienie na innych stronach" } }
  },
  "dataSourceCreateEditModal": {
    "editTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Edytuj \u017Ar\xF3d\u0142o danych" } },
    "createTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Utw\xF3rz \u017Ar\xF3d\u0142o danych" } },
    "sharedWarning": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "To \u017Ar\xF3d\u0142o danych jest wsp\xF3\u0142dzielone, wi\u0119c Twoje zmiany mog\u0105 mie\u0107 wp\u0142yw na inne strony." } }
  },
  "radiusStyleForm": {
    "cornerRadiusLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zaokr\u0105glenie naro\u017Cnik\xF3w" } },
    "backgroundRadiusLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "T\u0142o" } },
    "borderRadiusLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Obramowanie" } }
  },
  "themeConfigBlockType": {
    "color": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kolory" } },
    "page": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Strona" } },
    "typography": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Typografia" } },
    "button": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Przycisk" } },
    "link": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Link" } },
    "image": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Plik graficzny" } },
    "input": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pole wprowadzania danych" } },
    "table": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tabela" } }
  },
  "colorThemeConfigBlock": {
    "transparent": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Przezroczysty" } },
    "primaryColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "G\u0142\xF3wny" } },
    "secondaryColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Podrz\u0119dny" } },
    "borderColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Obramowanie" } },
    "successColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sukces" } },
    "warningColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ostrze\u017Cenie" } },
    "errorColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "B\u0142\u0105d" } },
    "customColors": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kolory niestandardowe" } },
    "addCustomColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dodaj kolor niestandardowy" } },
    "customColorPrefix": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Niestandardowy" } }
  },
  "pageThemeConfigBlock": {
    "backgroundColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kolor t\u0142a" } },
    "backgroundImage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Plik graficzny w tle" } },
    "backgroundMode": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tryb t\u0142a" } }
  },
  "colorThemeConfigBlockType": {
    "transparent": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Przezroczysty" } },
    "primary": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "G\u0142\xF3wny" } },
    "secondary": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Podrz\u0119dny" } },
    "border": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Obramowanie" } },
    "success": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sukces" } },
    "warning": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ostrze\u017Cenie" } },
    "error": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "B\u0142\u0105d" } }
  },
  "typographyThemeConfigBlock": {
    "headingLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Nag\u0142\xF3wek " }, { "t": 4, "k": "i" }, { "t": 3, "v": " (h" }, { "t": 4, "k": "i" }, { "t": 3, "v": ")" }] } },
    "headingValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Nag\u0142\xF3wek <h" }, { "t": 4, "k": "i" }, { "t": 3, "v": ">" }] } },
    "color": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kolor" } },
    "size": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Rozmiar" } },
    "weight": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Grubo\u015B\u0107" } },
    "textAlignment": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wyr\xF3wnanie" } },
    "bodyLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tekst podstawowy" } },
    "decoration": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dekoracja tekstu" } },
    "fontFamily": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Czcionka" } }
  },
  "fontWeightType": {
    "thin": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cienka" } },
    "extraLight": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Bardzo lekka" } },
    "light": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Lekka" } },
    "regular": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Normalna" } },
    "medium": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u015Arednia" } },
    "semiBold": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "P\xF3\u0142-pogrubiona" } },
    "bold": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pogrubiona" } },
    "extraBold": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Bardzo pogrubiona" } },
    "black": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ekstra pogrubiona" } },
    "extraBlack": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Najgrubsza" } }
  },
  "buttonThemeConfigBlock": {
    "backgroundColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kolor t\u0142a" } },
    "button": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Przycisk" } },
    "defaultState": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Stan domy\u015Blny" } },
    "hoverState": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Po najechaniu mysz\u0105" } },
    "activeState": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Stan aktywny" } },
    "textAlignment": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wyr\xF3wnanie tekstu" } },
    "alignment": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wyr\xF3wnanie" } },
    "width": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Szeroko\u015B\u0107" } },
    "textColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kolor tekstu" } },
    "borderColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kolor obramowania" } },
    "borderSize": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Grubo\u015B\u0107 obramowania" } },
    "borderRadius": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zaokr\u0105glenie naro\u017Cnik\xF3w" } },
    "padding": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Padding" } },
    "fontFamily": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Czcionka" } },
    "size": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Rozmiar czcionki" } },
    "weight": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Grubo\u015B\u0107 czcionki" } }
  },
  "linkThemeConfigBlock": {
    "color": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kolor" } },
    "link": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Link" } },
    "defaultState": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Stan domy\u015Blny" } },
    "hoverState": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Po najechaniu mysz\u0105" } },
    "activeState": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Stan aktywny" } },
    "alignment": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wyr\xF3wnanie" } },
    "fontFamily": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Czcionka" } },
    "size": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Rozmiar czcionki" } },
    "weight": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Grubo\u015B\u0107 czcionki" } },
    "decoration": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dekoracja tekstu" } }
  },
  "inputThemeConfigBlock": {
    "label": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Etykieta" } },
    "input": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pole wprowadzania danych" } },
    "backgroundColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kolor t\u0142a" } },
    "textColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kolor tekstu" } },
    "borderColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kolor obramowania" } },
    "borderSize": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Grubo\u015B\u0107 obramowania" } },
    "borderRadius": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zaokr\u0105glenie naro\u017Cnik\xF3w" } },
    "padding": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Padding" } },
    "fontFamily": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Czcionka" } },
    "size": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Rozmiar czcionki" } },
    "weight": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Grubo\u015B\u0107 czcionki" } }
  },
  "imageThemeConfigBlock": {
    "alignment": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wyr\xF3wnanie" } },
    "maxWidthLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Maksymalna szeroko\u015B\u0107" } },
    "maxHeightLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Maksymalna wysoko\u015B\u0107" } },
    "maxHeightPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wprowad\u017A maksymaln\u0105 wysoko\u015B\u0107" } },
    "maxWidthPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wprowad\u017A maksymaln\u0105 szeroko\u015B\u0107" } },
    "imageConstraintsLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ograniczenia" } },
    "imageConstraintFullWidth": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Rozszerz do maksymalnej szeroko\u015Bci" } },
    "imageConstraintCover": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dopasuj (cover)" } },
    "imageConstraintCoverDisabled": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Opcja niedost\u0119pna, je\u015Bli nie podano maksymalnej wysoko\u015Bci." } },
    "imageConstraintContain": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wype\u0142nij (contain)" } },
    "imageConstraintContainDisabled": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Opcja niedost\u0119pna, je\u015Bli podano maksymaln\u0105 wysoko\u015B\u0107." } },
    "imageBorderRadiusLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zaokr\u0105glenie naro\u017Cnik\xF3w" } },
    "imageBorderRadiusPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wprowad\u017A warto\u015B\u0107 zaokr\u0105glenia obramowania naro\u017Cnik\xF3w grafiki." } }
  },
  "tableThemeConfigBlock": {
    "borderColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kolor obramowania" } },
    "backgroundAlternateColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kolor parzystych wierszy" } },
    "backgroundColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kolor t\u0142a" } },
    "textColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kolor tekstu" } },
    "borderSize": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Grubo\u015B\u0107 obramowania" } },
    "borderRadius": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zaokr\u0105glenie naro\u017Cnik\xF3w" } },
    "padding": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Padding" } },
    "fontFamily": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Czcionka" } },
    "size": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Rozmiar" } },
    "fontSize": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Rozmiar czcionki" } },
    "fontWeight": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Grubo\u015B\u0107 czcionki" } },
    "table": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tabela" } },
    "header": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nag\u0142\xF3wek" } },
    "alignment": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wyr\xF3wnanie" } },
    "cells": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kom\xF3rki" } },
    "separators": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Separatory" } },
    "verticalSeparatorColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kolor pionowy" } },
    "verticalSeparatorSize": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Rozmiar pionowy" } },
    "horizontalSeparatorColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kolor poziomy" } },
    "horizontalSeparatorSize": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Rozmiar poziomy" } }
  },
  "choiceElementForm": {
    "multiple": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zezwalaj na wiele warto\u015Bci" } },
    "display": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wy\u015Bwietlanie" } },
    "dropdown": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Lista rozwijana" } },
    "checkbox": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pole wyboru" } },
    "radio": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Przycisk opcji" } }
  },
  "dropdown": {
    "empty": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Brak opcji do wyboru" } }
  },
  "abTable": {
    "loading": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wczytywanie..." } },
    "empty": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nie znaleziono \u017Cadnych pozycji." } }
  },
  "repeatElement": {
    "empty": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nie znaleziono \u017Cadnych pozycji." } },
    "showMore": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Poka\u017C wi\u0119cej" } },
    "missingDataSourceTooltip": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wybierz \u017Ar\xF3d\u0142o danych, aby rozpocz\u0105\u0107 dodawanie element\xF3w." } },
    "missingSchemaPropertyTooltip": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wybierz atrybut, aby rozpocz\u0105\u0107 dodawanie element\xF3w." } },
    "emptyState": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nie znaleziono rekord\xF3w." } }
  },
  "collectionElementForm": {
    "noDataSourceMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wybierz \u017Ar\xF3d\u0142o danych z wieloma wierszami, aby wy\u015Bwietli\u0107 wszystkie rezultaty. Alternatywnie, aby wybra\u0107 atrybut we wierszu, wybierz \u017Ar\xF3d\u0142o danych z pojedynczym wierszem." } },
    "noSchemaPropertyMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wybierz atrybut wewn\u0105trz \u017Ar\xF3d\u0142a danych, kt\xF3ry ma s\u0142u\u017Cy\u0107 jako dane listy elementu." } },
    "propertyOptionLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Operacje u\u017Cytkownika" } }
  },
  "propertyOptionForm": {
    "fieldHeading": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pole" } },
    "filterHeading": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Filtr" } },
    "sortHeading": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sortowanie" } },
    "searchHeading": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wyszukiwanie" } },
    "optionUnavailable": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Niedost\u0119pne" } },
    "noPropertiesAvailable": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Brak dost\u0119pnych p\xF3l." } },
    "formDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wybierz, kt\xF3re atrybuty w \u017Ar\xF3dle danych tego elementu mog\u0105 by\u0107 filtrowane, sortowane i wyszukiwane przez odwiedzaj\u0105cych stron\u0119." } }
  },
  "recordSelectorElement": {
    "emptyAdhocState": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Nie znaleziono rekord\xF3w pasuj\u0105cych do zapytania '" }, { "t": 4, "k": "query" }, { "t": 3, "v": "'." }] } },
    "emptyState": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nie znaleziono rekord\xF3w." } }
  },
  "recordSelectorElementForm": {
    "selectRecordsFrom": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wybierz rekordy z" } },
    "noDataSourceMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aby wy\u015Bwietli\u0107 wszystkie wyniki, wybierz \u017Ar\xF3d\u0142o danych z wieloma wierszami." } },
    "optionNameSuffix": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sufiks nazwy opcji" } },
    "optionNameSuffixPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wprowad\u017A sufiks..." } },
    "optionNameSuffixHelper": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ten sufiks jest dodawany do nazwy ka\u017Cdej opcji na li\u015Bcie rozwijanej. Pomaga to odr\xF3\u017Cni\u0107 poszczeg\xF3lne pozycje." } },
    "itemsPerPage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Liczba pozycji na stronie" } },
    "itemsPerPagePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wprowad\u017A warto\u015B\u0107..." } },
    "multipleLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zezwalaj na wiele warto\u015Bci" } },
    "record": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Rekord " }, { "t": 4, "k": "id" }] } }
  },
  "tagsFieldForm": {
    "fieldValuesLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Warto\u015Bci" } },
    "fieldValuesPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wprowad\u017A warto\u015Bci..." } },
    "fieldColorsLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kolory" } },
    "fieldColorsPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wprowad\u017A kolory\u2026" } }
  },
  "imageFieldForm": {
    "fieldSrcLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u0179r\xF3d\u0142o obrazu" } },
    "fieldSrcPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wprowad\u017A warto\u015B\u0107" } },
    "fieldAltLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tekst alternatywny" } },
    "fieldAltPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wprowad\u017A warto\u015B\u0107..." } },
    "fieldAltHelp": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "U\u017Cywany przez czytniki ekranu i wy\u015Bwietlany, gdy nie mo\u017Cna za\u0142adowa\u0107 pliku graficznego" } }
  },
  "builderLoginPageForm": {
    "pageDropdownLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Strona logowania" } },
    "pageDropdownPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wybierz stron\u0119" } },
    "pageDropdownDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wybierz stron\u0119 logowania, na kt\xF3r\u0105 zostan\u0105 przekierowani niezalogowani u\u017Cytkownicy, gdy otworz\u0105 stron\u0119 z ograniczonym dost\u0119pem." } }
  },
  "fieldMappingContext": {
    "enableField": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aktywuj pole" } },
    "disableField": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dezaktywuj pole" } }
  },
  "choiceElement": {
    "addOptions": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aby u\u017Cy\u0107 tego elementu, dodaj opcje..." } }
  },
  "userDataProviderType": {
    "isAuthenticated": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Jest uwierzytelniony" } },
    "id": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "ID" } },
    "email": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "E-mail" } },
    "username": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nazwa u\u017Cytkownika" } },
    "role": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Rola" } }
  },
  "buttonField": {
    "noLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Bez nazwy..." } }
  },
  "buttonFieldForm": {
    "infoMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": 'Otw\xF3rz zak\u0142adk\u0119 \u201CZdarzenia", aby skonfigurowa\u0107 funkcje tego przycisku.' } },
    "labelPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wprowad\u017A etykiet\u0119..." } }
  },
  "resetButton": {
    "reset": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Przywr\xF3\u0107 domy\u015Blne ustawienia motywu" } }
  },
  "backgroundModes": {
    "fill": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wype\u0142nienie" } },
    "tile": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kafelek" } },
    "fit": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dopasuj" } }
  },
  "customStyle": {
    "backToElement": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Powr\xF3t do konfiguracji elementu" } },
    "configureThemeOverrides": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Skonfiguruj zmiany motywu dotycz\u0105ce tego elementu" } }
  },
  "serviceSchemaPropertySelector": {
    "label": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Atrybut" } },
    "noProperties": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Brak dost\u0119pnych atrybut\xF3w" } }
  },
  "userSourceDropdown": {
    "label": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\u0179r\xF3d\u0142o u\u017Cytkownik\xF3w" } },
    "addUserSource": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dodaj nowe \u017Ar\xF3d\u0142o u\u017Cytkownik\xF3w" } },
    "noUserSources": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Brak dost\u0119pnych \u017Ar\xF3de\u0142 u\u017Cytkownik\xF3w" } }
  },
  "multiPageContainerElementForm": {
    "pagePosition": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pozycja" } },
    "behaviour": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zachowanie" } },
    "display": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wy\u015Bwietlanie" } },
    "selectAll": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zaznacz wszystko" } },
    "deselectAll": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Odznacz wszystko" } }
  },
  "pageShareType": {
    "all": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Na wszystkich stronach" } },
    "only": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tylko na wybranych stronach" } },
    "except": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wyklucz wybrane strony" } }
  },
  "authProviderWithModal": {
    "authProviderInError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aby naprawi\u0107 b\u0142\u0105d, popraw dane dostawcy." } },
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Edycja danych dostawcy: " }, { "t": 4, "k": "name" }] } }
  },
  "textDecorationSelector": {
    "underline": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Podkre\u015Blenie" } },
    "stroke": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Przekre\u015Blenie" } },
    "italic": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kursywa" } },
    "uppercase": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wielkie litery" } }
  },
  "ratingFieldForm": {
    "maxValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Warto\u015B\u0107 maksymalna" } },
    "color": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kolor" } },
    "style": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Styl" } },
    "star": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Gwiazdka" } },
    "heart": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Serduszko" } },
    "thumbsUp": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kciuk" } },
    "flag": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Flaga" } },
    "value": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Warto\u015B\u0107" } }
  },
  "ratingElementForm": {
    "maxValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Maksimum" } },
    "color": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kolor" } },
    "ratingStyle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Styl" } },
    "star": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Gwiazdka" } },
    "heart": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Serduszko" } },
    "smile": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "U\u015Bmiech" } },
    "thumbsUp": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kciuk" } },
    "flag": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Flaga" } }
  },
  "automationSettingsModal": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Proces" } }
  },
  "abFileInput": {
    "delete": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Usu\u0144" } }
  },
  "elementsGuidedTourStep": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dodaj elementy do strony" } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "W ka\u017Cdej aplikacji potrzebne s\u0105 elementy sk\u0142adowe! Aby wype\u0142ni\u0107 swoj\u0105 aplikacj\u0119, dodaj tabele, formularze, przyciski itp." } }
  },
  "dataGuidedTourStep": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Po\u0142\u0105cz swoje dane" } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tutaj mo\u017Cesz po\u0142\u0105czy\u0107 tabele w bazie Baserow i wy\u015Bwietla\u0107, filtrowa\u0107 oraz dynamicznie aktualizowa\u0107 dane w r\xF3\u017Cnych elementach." } }
  },
  "previewGuidedTourStep": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Twoje centrum zarz\u0105dzania" } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tutaj skonfigurujesz strony swojej aplikacji. Wstaw elementy, zobacz, jak dzia\u0142aj\u0105 i dostosuj struktur\u0119 aplikacji do swoich potrzeb." } }
  },
  "devicesGuidedTourStep": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Podgl\u0105d na r\xF3\u017Cnych urz\u0105dzeniach" } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aby zobaczy\u0107, jak aplikacja wygl\u0105da na r\xF3\u017Cnych rozmiarach ekran\xF3w, prze\u0142\u0105cz si\u0119 mi\u0119dzy podgl\u0105dami na ekranie komputera, tabletu lub smartfonu. Sprawd\u017A, czy Tw\xF3j uk\u0142ad wygl\u0105da poprawnie na ka\u017Cdym urz\u0105dzeniu!" } }
  },
  "sidePanelGuidedTourStep": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Panel boczny: dostosuj elementy" } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "**Zak\u0142adka Og\xF3lne** \u2013 skonfiguruj wybrany element.\n\n**Zak\u0142adka Styl** \u2013 dopasuj padding, marginesy, obramowania itd.\n\n**Zak\u0142adka Widoczno\u015B\u0107** \u2013 zdecyduj, kto mo\u017Ce zobaczy\u0107 element: zalogowani u\u017Cytkownicy, niezalogowani u\u017Cytkownicy lub u\u017Cytkownicy o okre\u015Blonych rolach.\n\n**Zak\u0142adka Zdarzenia** \u2013 je\u015Bli dany element obs\u0142uguje operacje, skonfiguruj je tutaj; umo\u017Cliwi to dynamiczne wy\u015Bwietlanie danych." } }
  },
  "previewPublishGuidedTourStep": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Podgl\u0105d i publikacja aplikacji" } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kliknij **Podgl\u0105d**, aby przetestowa\u0107 aplikacj\u0119 w trybie prywatnym. Gdy wszystko b\u0119dzie gotowe, kliknij **Opublikuj**, aby udost\u0119pni\u0107 aplikacj\u0119 publicznie za po\u015Brednictwem domeny." } }
  },
  "workflowAction": {
    "sampleDataModalTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Payload operacji " }, { "t": 4, "k": "actionLabel" }] } },
    "sampleDataModalSubTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Payload JSON" } },
    "testActionDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Uruchom t\u0119 operacj\u0119 w trybie podgl\u0105du; umo\u017Cliwi to zarejestrowanie jej wyniku i wykorzystanie go w kolejnych operacjach." } }
  }
};

export { resource as default };
//# sourceMappingURL=pl-BXw9COGh.mjs.map
