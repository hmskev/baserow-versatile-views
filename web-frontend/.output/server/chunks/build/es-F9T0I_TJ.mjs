!(function() {
  try {
    var e = false ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
    var n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "ca4415b7-f2a6-49a4-951e-940e4608e4a5", e._sentryDebugIdIdentifier = "sentry-dbid-ca4415b7-f2a6-49a4-951e-940e4608e4a5");
  } catch (e2) {
  }
})();
const resource = {
  "builderForm": {
    "submit": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "A\xF1adir aplicaci\xF3n" } }
  },
  "sidebarComponentBuilder": {
    "settings": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Configuraci\xF3n" } },
    "createPage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nueva p\xE1gina" } }
  },
  "builderSettingsModal": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aplicaci\xF3n" } }
  },
  "builderSettingTypes": {
    "integrationsName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Integraciones" } },
    "themeName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tema" } },
    "domainsName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dominios" } },
    "userSourcesName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Usuarios" } },
    "generalName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "General" } }
  },
  "createPageModal": {
    "header": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Crear p\xE1gina" } },
    "submit": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "A\xF1adir p\xE1gina" } }
  },
  "pageForm": {
    "nameLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nombre" } },
    "errorNameNotUnique": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ya existe una p\xE1gina con este nombre" } },
    "defaultName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "P\xE1gina" } },
    "nameTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nombre" } },
    "pathSubtitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Se puede a\xF1adir un par\xE1metro mediante :par\xE1metro" } },
    "pathParamsTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Par\xE1metros de ruta" } },
    "nameSubtitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nombre \xFAnico de la p\xE1gina" } },
    "pathParamsSubtitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Est\xE1n definidos por el :par\xE1metro en la ruta" } },
    "pathParamsSubtitleTutorial": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Los par\xE1metros de ruta se pueden utilizar para cargar datos din\xE1micamente, en funci\xF3n del par\xE1metro proporcionado. A\xF1ada el :par\xE1metro a la ruta para a\xF1adir uno." } },
    "pathTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ruta" } },
    "namePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Introduzca un nombre..." } },
    "pathPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Introduzca una ruta..." } },
    "addAnotherParameter": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Agregar otro par\xE1metro de cadena de consulta" } },
    "addParameter": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Agregar par\xE1metro de cadena de consulta" } },
    "queryParamsSubtitleTutorial": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Los par\xE1metros de consulta pueden usarse para cargar datos din\xE1micamente, seg\xFAn el par\xE1metro proporcionado." } },
    "queryParamsTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Par\xE1metros de cadena de consulta" } }
  },
  "headingElementForm": {
    "textError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "El valor es inv\xE1lido." } },
    "textPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Introducir texto..." } },
    "levelTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nivel" } },
    "textTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Texto" } },
    "headingName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "T\xEDtulo " }, { "t": 4, "k": "nivel" }, { "t": 3, "v": " <h" }, { "t": 4, "k": "nivel" }, { "t": 3, "v": ">" }] } }
  },
  "tableElementForm": {
    "addField": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "a\xF1adir campo" } },
    "itemsPerPage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Art\xEDculos por p\xE1gina" } },
    "fieldType": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tipo" } },
    "fieldValueLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Valor" } },
    "fieldDefaultName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Columna" } },
    "dataSource": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Fuente de datos" } },
    "fieldValuePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Introducir valor..." } },
    "itemsPerPagePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Introducir valor..." } },
    "fields": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Campos" } },
    "buttonColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Color de los botones" } },
    "selectSourceFirst": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Elige un origen para los datos y/o propiedad para comenzar a configurar tus campos." } },
    "refreshFieldsFromDataSource": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Actualizar los campos de la fuente de datos" } },
    "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nombre" } },
    "orientation": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Orientaci\xF3n" } },
    "orientationHorizontal": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Horizontal" } },
    "orientationVertical": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Vertical" } },
    "buttonLoadMoreLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mostrar m\xE1s etiqueta" } },
    "propertySelectorMissingArrays": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "No se encontr\xF3 que se utilizaran campos de m\xFAltiples valores como datos." } },
    "noName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nombre no especificado" } }
  },
  "linkElementForm": {
    "paramPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Introduce un valor..." } },
    "targetSelf": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Misma pesta\xF1a" } },
    "variantButton": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Bot\xF3n" } },
    "paramsInErrorButton": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Actualizar par\xE1metros" } },
    "targetNewTab": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nueva pesta\xF1a" } },
    "variantLink": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Enlace" } },
    "url": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "URL de destino" } },
    "navigateToNotSet": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sin destino" } },
    "navigateToCustom": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "URL personalizada" } },
    "urlPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Introducir una URL..." } },
    "pageParameterTypeError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tipo inv\xE1lido" } },
    "text": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Texto" } },
    "variant": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Variante" } },
    "textPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Introducir texto..." } },
    "navigateTo": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Navegar a" } },
    "target": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Abrir en..." } },
    "paramsInErrorDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Los par\xE1metros guardados no coinciden con los par\xE1metros de la p\xE1gina. Es probable que la p\xE1gina se haya eliminado o actualizado." } },
    "buttonColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Color del bot\xF3n" } }
  },
  "textElement": {
    "noValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "P\xE1rrafo vac\xEDo..." } },
    "missingValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Falta texto..." } },
    "emptyValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Texto vac\xEDo..." } }
  },
  "linkFieldForm": {
    "fieldLinkNamePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Introducir valor..." } },
    "fieldValuePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Introducir valor..." } },
    "fieldLinkNameLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Texto del enlace" } },
    "fieldValueLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "URL" } },
    "buttonColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Color de los botones" } }
  },
  "imageElementForm": {
    "uploadFileButton": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Subir archivo" } },
    "fileSourceTypeURL": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "URL" } },
    "altTextTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Texto alternativo" } },
    "urlWarning": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nota: aseg\xFArate de que controlas o conf\xEDas en la URL introducida." } },
    "fileLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Imagen" } },
    "invalidUrlError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "URL inv\xE1lida" } },
    "fileSourceTypeUpload": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Subir" } },
    "altTextDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Es utilizado por los lectores de pantalla y se muestra si la imagen no se puede cargar" } },
    "maxWidthLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Anchura m\xE1xima" } },
    "maxHeightLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Altura m\xE1xima" } },
    "maxHeightPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Introduce una altura m\xE1xima en p\xEDxeles." } },
    "maxWidthPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Introduce una anchura m\xE1xima en porcentaje." } },
    "imageConstraintCover": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Portada" } },
    "imageConstraintCoverDisabled": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "No disponible con altura m\xE1xima vac\xEDa." } },
    "imageConstraintContain": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Contener" } },
    "imageConstraintContainDisabled": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "No disponible con altura m\xE1xima." } },
    "imageConstraintsLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Restricciones" } },
    "imageConstraintFullWidth": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Extender a la anchura m\xE1xima" } }
  },
  "dataSourceForm": {
    "servicePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Selecciona un servicio" } },
    "namePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nombre de la fuente" } },
    "errorUniqueName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "El nombre de la fuente de datos debe ser \xFAnico." } },
    "integrationPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Selecciona una integraci\xF3n" } },
    "nameLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nombre" } },
    "actionLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Acci\xF3n" } },
    "integrationLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Integraci\xF3n" } }
  },
  "elementType": {
    "table": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tabla" } },
    "formContainer": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Formulario" } },
    "textDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Texto multil\xEDnea" } },
    "heading": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "T\xEDtulo" } },
    "inputText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Entrada de datos" } },
    "inputTextDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Campo de entrada de datos" } },
    "text": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "P\xE1rrafo" } },
    "headingDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "T\xEDtulo de la p\xE1gina" } },
    "image": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Imagen" } },
    "tableDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Un elemento de la tabla" } },
    "columnDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Contenedor de columnas" } },
    "button": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Bot\xF3n" } },
    "link": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Enlace" } },
    "column": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Columnas" } },
    "imageDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mostrar imagen" } },
    "buttonDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Un elemento de bot\xF3n" } },
    "formContainerDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Un elemento de formulario" } },
    "linkDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Un enlace a la p\xE1gina/URL" } },
    "dropdown": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Desplegable" } },
    "dropdownDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Elemento desplegable" } },
    "checkbox": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Casilla de verificaci\xF3n" } },
    "checkboxDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Elemento casilla de verificaci\xF3n" } },
    "iframe": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "iframe" } },
    "iframeDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Marco en l\xEDnea" } },
    "authForm": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Formulario de acceso" } },
    "authFormDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Un formulario de acceso de usuario" } },
    "repeat": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Repetir" } },
    "repeatDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Un conjunto repetible de elementos" } },
    "choice": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Selecci\xF3n" } },
    "choiceDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Para la selecci\xF3n de uno o varios valores" } },
    "recordSelector": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Selector de registro" } },
    "recordSelectorDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Un selector de registros relacionados" } },
    "dateTimePicker": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Selector de fecha y hora" } },
    "dateTimePickerDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Un campo de entrada de fecha y hora" } },
    "headerDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Contenedor compartido en varias p\xE1ginas" } },
    "footer": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pie de p\xE1gina de varias p\xE1ginas" } },
    "footerDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Un contenedor compartido entre p\xE1ginas" } },
    "notAllowedUnlessBottom": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Este elemento solo est\xE1 permitido en la parte inferior de la p\xE1gina" } },
    "notAllowedUnlessHeader": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Este elemento solo est\xE1 permitido dentro del encabezado de la p\xE1gina" } },
    "notAllowedUnlessFooter": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Este elemento solo est\xE1 permitido dentro del pie de p\xE1gina" } },
    "notAllowedInsideContainer": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Este elemento no est\xE1 permitido dentro de un contenedor" } },
    "notAllowedInsideSameType": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Este elemento no est\xE1 permitido en un contenedor del mismo tipo" } },
    "notAllowedLocation": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Este elemento no est\xE1 permitido en esta ubicaci\xF3n" } },
    "header": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Encabezado de varias p\xE1ginas" } },
    "notAllowedUnlessTop": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Este elemento solo est\xE1 permitido en la parte superior de la p\xE1gina" } },
    "ratingInput": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Campo de puntuaci\xF3n" } },
    "ratingInputDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Un elemento de campo de puntuaci\xF3n" } },
    "rating": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Puntuaci\xF3n" } },
    "ratingDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Un elemento de puntuaci\xF3n" } },
    "invalidElementValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Elemento con valor inv\xE1lido: " }, { "t": 4, "k": "value" }] } },
    "menu": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Men\xFA" } },
    "menuDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Elemento de men\xFA" } },
    "simpleContainer": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Contenedor" } },
    "simpleContainerDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Un contenedor para otros elementos" } },
    "fileInput": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Selecci\xF3n de archivo" } },
    "fileInputDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Una entrada para subir archivos" } },
    "errorValueMissing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Propiedad de valor faltante" } },
    "errorEmptyContainer": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Este contenedor est\xE1 vac\xEDo" } },
    "errorParentWithDataSourceMissing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "No se ha seleccionado ninguna fuente de datos en el elemento ni en un contenedor padre" } },
    "errorDataSourceMissing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "No se ha seleccionado ninguna fuente de datos" } },
    "errorSchemaPropertyMissing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "No se ha seleccionado ninguna propiedad de esquema" } },
    "errorWorkflowActionInError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Al menos una acci\xF3n est\xE1 mal configurada" } },
    "errorCollectionFieldInError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Al menos un campo est\xE1 mal configurado" } },
    "errorNavigateToPageMissing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Falta la propiedad \xABNavegar a\xBB" } },
    "errorPageParameterInError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Al menos un par\xE1metro de p\xE1gina est\xE1 mal configurado" } },
    "errorNavigationUrlMissing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Falta la propiedad \xABURL de navegaci\xF3n\xBB" } },
    "errorImageFileMissing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "No se encontr\xF3 el archivo de imagen" } },
    "errorImageUrlMissing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Falta la propiedad \xABURL de imagen\xBB" } },
    "errorNoWorkflowAction": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Falta configurar una acci\xF3n del flujo de trabajo" } },
    "errorOptionsMissing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "No se ha configurado ninguna opci\xF3n" } },
    "errorIframeUrlMissing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Falta la propiedad \xABURL del iFrame\xBB" } },
    "errorIframeContentMissing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Falta el contenido de \xABiFrame\xBB" } },
    "errorNoMenuItem": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "No se ha configurado ning\xFAn elemento de men\xFA" } },
    "errorMenuItemInError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Al menos un men\xFA est\xE1 mal configurado" } },
    "errorSubMenuItemInError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Al menos un submen\xFA est\xE1 mal configurado" } }
  },
  "verticalAlignmentSelector": {
    "alignmentTop": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Arriba" } },
    "alignmentBottom": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Inferior" } },
    "alignmentCenter": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Medio" } },
    "alignment": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Alineaci\xF3n vertical" } }
  },
  "dnsStatus": {
    "hostHeader": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Anfitri\xF3n" } },
    "valueHeader": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Valor" } },
    "typeHeader": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tipo" } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Visita la configuraci\xF3n DNS de tu dominio y realiza los siguientes cambios" } }
  },
  "horizontalAlignmentSelector": {
    "alignmentLeft": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Izquierda" } },
    "alignmentRight": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "A la derecha" } },
    "alignment": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Alineaci\xF3n horizontal" } },
    "alignmentCenter": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Centro" } }
  },
  "duplicatePageJobType": {
    "duplicating": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Duplicando" } },
    "duplicatedTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "P\xE1gina duplicada" } },
    "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Duplicar p\xE1gina" } }
  },
  "defaultStyleForm": {
    "widthLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Anchura" } },
    "boxTop": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Arriba" } },
    "backgroundLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Fondo" } },
    "backgroundColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Color de fondo" } },
    "boxBottom": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Abajo" } },
    "boxLeft": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Izquierda" } },
    "boxRight": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Derecha" } },
    "backgroundImage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Imagen" } },
    "backgroundImageMode": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Modo de relleno" } },
    "cssClasses": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Clases de CSS" } },
    "cssClassesHelp": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Establece una lista de clases separadas por espacios para este elemento que aparecer\xE1 en el HTML generado." } },
    "cssClassesPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Introduce las clases CSS\u2026" } }
  },
  "updateUserSourceForm": {
    "nameFieldLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nombre" } },
    "nameFieldPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Introduce un nombre..." } },
    "integrationFieldLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Integraci\xF3n" } },
    "authTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Autenticaci\xF3n" } },
    "addProvider": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "A\xF1adir proveedor" } }
  },
  "elementForms": {
    "urlInputPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Introducir URL..." } },
    "textInputPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Introducir texto..." } },
    "invalidFormula": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "La f\xF3rmula es inv\xE1lida" } }
  },
  "mainThemeConfigBlock": {
    "colorsLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Colores" } },
    "primaryColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Primario" } },
    "headingValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "T\xEDtulo <h" }, { "t": 4, "k": "i" }, { "t": 3, "v": ">" }] } },
    "typography": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tipograf\xEDa" } },
    "headingLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "T\xEDtulo " }, { "t": 4, "k": "i" }, { "t": 3, "v": " (h" }, { "t": 4, "k": "i" }, { "t": 3, "v": ")" }] } },
    "secondaryColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Secundario" } }
  },
  "domainSettings": {
    "noDomainMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "A\xFAn no has asociado un dominio a esta aplicaci\xF3n. Debes a\xF1adir un dominio para poder publicar tu aplicaci\xF3n. Puedes publicar diferentes versiones de tu aplicaci\xF3n para cada dominio listado aqu\xED." } },
    "addDomain": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "A\xF1adir dominio" } },
    "titleOverview": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dominios" } },
    "titleAddDomain": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "A\xF1adir dominio" } }
  },
  "elementMenu": {
    "moveRight": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mover a la derecha" } },
    "moveDown": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Bajar" } },
    "moveUp": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Subir" } },
    "moveLeft": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mover a la izquierda" } },
    "selectParent": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Seleccionar padre" } },
    "drag": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Arrastrar para reordenar" } }
  },
  "pageHeaderItemTypes": {
    "labelVariables": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Variables" } },
    "labelElements": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Elementos" } },
    "labelSettings": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Configuraci\xF3n de p\xE1gina" } },
    "labelDataSource": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Datos" } }
  },
  "inputTextElementForm": {
    "placeholderPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Introduce un marcador de posici\xF3n (opcional)" } },
    "valueTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Valor por defecto" } },
    "valuePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Introducir un valor por defecto (opcional)" } },
    "placeholderTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Marcador de posici\xF3n" } },
    "labelTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Etiqueta" } },
    "requiredTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Requerido" } },
    "labelPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Introducir una etiqueta (opcional)" } },
    "rowsTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "N\xFAmero de l\xEDneas" } },
    "multilineTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Multil\xEDnea" } },
    "rowsPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Introduce el n\xFAmero de filas de esta entrada" } },
    "validationTypeAnyLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cualquier" } },
    "validationTypeIntegerLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "N\xFAmero" } },
    "validationTypeIntegerDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Forzar un valor num\xE9rico en este campo (acepta enteros y decimales)." } },
    "validationTypeEmailLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Correo electr\xF3nico" } },
    "validationTypeEmailDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Implemente un valor de direcci\xF3n de correo electr\xF3nico en esta entrada." } },
    "validationTypeAnyDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Permite establecer cualquier valor en esta entrada." } },
    "inputType": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tipo de entrada" } },
    "inputTypeTextLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Texto" } },
    "inputTypePasswordLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Contrase\xF1a" } },
    "passwordTypeWarning": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Las contrase\xF1as son datos sensibles. Tenga cuidado con la forma en que maneja y almacena las contrase\xF1as en su aplicaci\xF3n." } }
  },
  "widthSelector": {
    "widthFull": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Anchura completa" } },
    "widthAuto": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Auto" } },
    "width": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Anchura" } }
  },
  "domainCard": {
    "detailLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mostrar detalles" } },
    "refresh": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Actualizar configuraci\xF3n" } },
    "unpublishedDomainWarning": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Por favor, publica la aplicaci\xF3n para que est\xE9 disponible en este dominio." } }
  },
  "buttonElementForm": {
    "valuePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Introducir texto..." } },
    "valueLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Texto del bot\xF3n" } },
    "buttonColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Color de los botones" } }
  },
  "workflowActionTypes": {
    "updateRowLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Actualizar fila" } },
    "createRowLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Crear fila" } },
    "notificationLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mostrar notificaci\xF3n" } },
    "openPageLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Abrir p\xE1gina" } },
    "logoutLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cerrar sesi\xF3n" } },
    "refreshDataSourceLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Refrescar fuente de datos" } },
    "deleteRowLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Borrar fila" } },
    "httpRequest": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Enviar solicitud HTTP" } },
    "errorNavigateToPageMissing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Falta la propiedad \xABNavegar a\xBB" } },
    "errorPageParameterInError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Al menos un par\xE1metro de p\xE1gina est\xE1 mal configurado" } },
    "errorNavigationUrlMissing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Falta la propiedad \xABURL de navegaci\xF3n\xBB" } },
    "errorDataSourceMissing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "No se ha seleccionado ninguna fuente de datos" } }
  },
  "widthTypes": {
    "full": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Anchura completa" } },
    "small": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Peque\xF1o" } },
    "medium": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Medio" } },
    "normal": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Normal" } },
    "fullBleed": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sangrado total" } },
    "fullWidth": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Anchura total" } }
  },
  "userSourceSettings": {
    "titleOverview": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Fuentes del usuario" } },
    "titleUpdateUserSource": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Editar fuente de usuario" } },
    "titleAddUserSource": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nueva fuente de usuarios" } },
    "addUserSource": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "A\xF1adir fuente de usuario" } },
    "noUserSourceMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "A\xFAn no has a\xF1adido un origen de usuario a esta aplicaci\xF3n. Debes a\xF1adir un origen de usuario si quieres que los usuarios puedan autenticar tu aplicaci\xF3n." } }
  },
  "publicPage": {
    "pageNotFound": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "P\xE1gina no encontrada" } },
    "siteNotFound": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sitio no encontrado" } },
    "loginToastTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Autenticaci\xF3n exitosa" } },
    "loginToastMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Has iniciado sesi\xF3n correctamente." } },
    "authorizedToastTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Autenticaci\xF3n requerida" } },
    "authorizedToastMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Debes iniciar sesi\xF3n para acceder a esta p\xE1gina. Por favor, inicia sesi\xF3n para continuar." } }
  },
  "integrationSettings": {
    "integrationMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Puedes crear nuevas integraciones a\xF1adiendo una fuente de datos, una acci\xF3n o una autenticaci\xF3n de usuario." } },
    "noIntegrationMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "A\xFAn no has creado ninguna integraci\xF3n. Se pueden crear a\xF1adiendo una fuente de datos, una acci\xF3n o una autenticaci\xF3n de usuario." } },
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Integraciones" } }
  },
  "upsertRowWorkflowActionForm": {
    "rowIdPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Selecciona un ID de fila" } },
    "fieldMappingPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Elige un valor de campo" } },
    "integrationDropdownLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Integraci\xF3n" } },
    "rowIdLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "ID de fila" } },
    "noTableSelectedMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Elige una tabla para empezar a configurar tus campos." } }
  },
  "customDomainForm": {
    "domainNameLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nombre de dominio" } }
  },
  "subDomainDetails": {
    "text": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Los ajustes DNS del dominio ya han sido configurados y comprobados. Funciona sin realizar ning\xFAn cambio adicional." } }
  },
  "imageElement": {
    "emptyState": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "No hay texto alternativo definido..." } },
    "missingValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Falta texto alternativo..." } },
    "emptyValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Texto alternativo vac\xEDo..." } }
  },
  "columnElementForm": {
    "columnGapPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Introducir espacio entre columnas..." } },
    "columnGapTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Espacio entre columnas" } },
    "columnAmountTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Disposici\xF3n" } },
    "columnAmountName": { "t": 0, "b": { "t": 1, "c": [{ "t": 2, "i": [{ "t": 3 }], "s": "sin columnas" }, { "t": 2, "i": [{ "t": 3 }], "s": "1 columna" }, { "t": 2, "i": [{ "t": 4, "k": "columnaCantidad" }, { "t": 3, "v": " columnas" }] }] } },
    "verticalAlignment": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Alineaci\xF3n vertical" } },
    "customWeightsHelper": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Utiliza 0 cuando una columna deba ajustarse \xFAnicamente al ancho de su contenido. Las dem\xE1s columnas repartir\xE1n el espacio sobrante." } },
    "errorCustomWeightsMinimum": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Los pesos de las columnas deben ser 0 o mayores" } },
    "columnStackingTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Apila columnas por tipo de dispositivo" } },
    "customWeightsTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pesos personalizados de columnas" } },
    "columnStackingHorizontal": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Lado a lado" } },
    "customLayout": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Personalizado" } },
    "columnStackingStacked": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Apilado" } }
  },
  "pageSettings": {
    "pageUpdatedTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cambiado" } },
    "pageUpdatedDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Se ha actualizado la configuraci\xF3n de la p\xE1gina." } },
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "P\xE1gina" } }
  },
  "notificationWorkflowActionForm": {
    "descriptionLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Descripci\xF3n" } },
    "descriptionPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Introducir texto..." } },
    "titleLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "T\xEDtulo" } },
    "titlePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Introducir texto..." } }
  },
  "dataSourceContext": {
    "addDataSource": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "A\xF1adir nueva fuente de datos" } },
    "noDataSourceMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Las fuentes de datos pueden utilizarse para obtener datos de fuentes internas o externas y mostrarlos en la p\xE1gina." } },
    "noDataSourceTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "A\xFAn no has a\xF1adido una fuente de datos." } },
    "sharedDataSourceTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Compartido entre p\xE1ginas" } },
    "pageDataSourceTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Para esta p\xE1gina" } },
    "sharedDataSourceDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Accesible en todas las p\xE1ginas y se obtiene una vez en la primera carga de la p\xE1gina." } },
    "pageDataSourceDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Se obtiene cuando el usuario navega a esta p\xE1gina." } }
  },
  "pageSettingsTypes": {
    "pageName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "P\xE1gina" } }
  },
  "publishActionModal": {
    "publish": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Publicar" } },
    "publishSucceedDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "El sitio se ha publicado correctamente." } },
    "publishSucceedTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sitio publicado" } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Publica tu aplicaci\xF3n en uno de los dominios. Ten en cuenta que tu aplicaci\xF3n puede tener varios dominios, cada uno con una versi\xF3n diferente de la aplicaci\xF3n." } },
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Publicar" } },
    "publishFailedTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Error en la publicaci\xF3n del sitio" } },
    "openInNewTab": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Abrir en una pesta\xF1a nueva" } },
    "noDomain": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Necesitas tener al menos un dominio para poder publicar tu aplicaci\xF3n." } },
    "publishFailedDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "La publicaci\xF3n del sitio ha fallado. Vuelva a intentarlo m\xE1s tarde." } },
    "importingState": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Importando" } },
    "publishSucceedLink": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ver sitio" } },
    "addDomain": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "A\xF1adir dominio" } }
  },
  "currentRecordDataProviderType": {
    "index": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\xCDndice" } },
    "firstPartName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Fuente de datos: " }, { "t": 4, "k": "nombre" }] } },
    "schemaProperty": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "prefixName" }, { "t": 3, "v": ": " }, { "t": 4, "k": "schemaProperty" }] } }
  },
  "pageSidePanelType": {
    "visibility": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Visibilidad" } },
    "general": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "General" } },
    "events": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Eventos" } },
    "style": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Estilo" } },
    "eventsTabDeactivatedNoEvents": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Este elemento no admite eventos" } },
    "eventsTabInError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Una o m\xE1s acciones est\xE1n mal configuradas." } }
  },
  "addElementModal": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "A\xF1adir nuevo elemento" } },
    "searchPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Buscar elementos" } },
    "disabledElementTooltip": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "No disponible dentro de este elemento" } },
    "elementInProgress": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "A\xF1adiendo elemento..." } }
  },
  "domainTypes": {
    "subDomain": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Subdominio de " }, { "t": 4, "k": "dominio" }] } },
    "customName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dominio personalizado" } },
    "subDomainName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Subdominio" } }
  },
  "domainForm": {
    "notUniqueDomain": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "El dominio proporcionado ya est\xE1 en uso" } },
    "invalidDomain": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "El nombre de dominio proporcionado es inv\xE1lido" } }
  },
  "dispatchWorkflowActionError": {
    "defaultMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Se ha producido un error que ha provocado este evento." } },
    "defaultTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Error de evento" } },
    "formDataInvalidTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Formulario inv\xE1lido" } },
    "formDataInvalidMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Uno o m\xE1s campos contienen valores no v\xE1lidos." } }
  },
  "dataProviderType": {
    "currentRecord": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Fuente de datos" } },
    "formData": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Datos del formulario" } },
    "pageParameter": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Par\xE1metro" } },
    "dataSource": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Registros de datos" } },
    "user": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Usuario" } },
    "previousAction": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Acci\xF3n previa" } },
    "dataSourceContext": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Opciones disponibles" } },
    "metadata": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Metadatos" } }
  },
  "openPageWorkflowActionForm": {
    "urlLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "URL" } },
    "urlPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Introducir texto..." } }
  },
  "collectionFieldType": {
    "text": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Texto" } },
    "link": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Enlace" } },
    "boolean": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Booleano" } },
    "tags": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Etiquetas" } },
    "image": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Imagen" } },
    "button": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Bot\xF3n" } },
    "rating": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Valoraci\xF3n" } },
    "errorValueMissing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Propiedad de valor faltante" } }
  },
  "elementsContext": {
    "searchPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Buscar elementos" } },
    "noElements": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "No se han encontrado elementos" } },
    "noPageElements": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sin elementos para esta p\xE1gina" } }
  },
  "textElementForm": {
    "textTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Texto" } },
    "textError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "El valor es inv\xE1lido." } },
    "textPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Introducir texto..." } },
    "textFormatTypeLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Formato" } },
    "textFormatTypePlain": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Texto plano" } },
    "textFormatTypeMarkdown": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Markdown" } }
  },
  "createUserSourceForm": {
    "userSourceName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nombre" } },
    "userSourceIntegration": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Integraci\xF3n" } },
    "userSourceType": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tipo" } }
  },
  "event": {
    "addAction": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "a\xF1adir acci\xF3n" } }
  },
  "pageErrors": {
    "errorStartingSlash": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Una ruta debe empezar por '/'" } },
    "errorUniquePathParams": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Los par\xE1metros de la ruta deben ser \xFAnicos." } },
    "errorPathNotUnique": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ya existe una ruta con este nombre" } },
    "errorValidPathCharacters": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "La ruta contiene caracteres inv\xE1lidos" } },
    "errorNameNotUnique": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ya existe una p\xE1gina con este nombre" } },
    "errorUniqueValidQueryParams": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Los nombres de los par\xE1metros de consulta deben ser \xFAnicos y v\xE1lidos." } },
    "errorNameNotUniqueDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Por favor, introduce un nombre \xFAnico para la p\xE1gina" } }
  },
  "addElementButton": {
    "label": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Elemento" } }
  },
  "buttonElement": {
    "noValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sin nombre..." } },
    "missingValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Falta el texto del bot\xF3n..." } },
    "emptyValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Texto del bot\xF3n vac\xEDo..." } }
  },
  "formDataProviderType": {
    "nodeMissing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Falta" } }
  },
  "lastPublishedDomainDate": {
    "lastPublished": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\xDAltima publicaci\xF3n:" } },
    "neverPublished": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "nunca" } }
  },
  "textFieldForm": {
    "fieldValuePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Introducir valor..." } },
    "fieldValueLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Valor" } }
  },
  "tableElement": {
    "empty": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "No se ha encontrado ning\xFAn art\xEDculo." } },
    "showMore": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ver m\xE1s" } }
  },
  "fontSidePanelForm": {
    "label": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Color de fuente" } }
  },
  "emptySidePanelState": {
    "message": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Haz clic en uno de los elementos para ver m\xE1s detalles" } }
  },
  "styleBoxForm": {
    "borderLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tama\xF1o" } },
    "paddingLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Margen interno" } },
    "error": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "El valor debe ser un n\xFAmero entero entre 0 y 200." } },
    "borderColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Color del borde" } },
    "marginLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Margen" } }
  },
  "backgroundTypes": {
    "color": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Color" } },
    "none": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ninguno" } }
  },
  "linkElement": {
    "noValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sin nombre..." } },
    "missingValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Falta el texto del enlace..." } },
    "emptyValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Texto del enlace vac\xEDo..." } }
  },
  "pagePreview": {
    "emptyMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Haz clic para crear un elemento" } },
    "header": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "ENCABEZAMIENTO" } },
    "footer": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "PIE DE P\xC1GINA" } }
  },
  "eventTypes": {
    "submitLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Al enviar" } },
    "clickLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Al hacer clic" } },
    "afterLoginLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Despu\xE9s de iniciar sesi\xF3n" } }
  },
  "pageActionTypes": {
    "publish": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Publicar" } },
    "preview": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Previsualizar" } }
  },
  "headingElement": {
    "noValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sin t\xEDtulo..." } },
    "emptyValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "T\xEDtulo vac\xEDo..." } },
    "missingValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Falta el t\xEDtulo..." } }
  },
  "formContainerElementForm": {
    "submitButtonLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Bot\xF3n de env\xEDo" } },
    "submitButtonPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Introducir valor..." } },
    "buttonColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Color de los botones" } },
    "resetToInitialValuesTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Restablecer los valores por defecto tras el env\xEDo" } },
    "resetToInitialValuesDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Si est\xE1 marcada, los valores por defecto del formulario se utilizar\xE1n para restablecer el formulario despu\xE9s de un env\xEDo exitoso. Si no est\xE1 marcada, se mantendr\xE1n los valores del usuario." } }
  },
  "subDomainForm": {
    "domainNameLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nombre de dominio" } }
  },
  "linkField": {
    "details": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Detalles" } }
  },
  "getFormulaComponent": {
    "errorTooltip": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Referencia inv\xE1lida" } }
  },
  "pathParamTypes": {
    "textName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Texto" } },
    "numericName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Num\xE9rico" } }
  },
  "dropdownOptionSelector": {
    "value": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Valor" } },
    "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nombre" } },
    "addOption": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "a\xF1adir opci\xF3n" } },
    "label": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Opciones" } }
  },
  "checkboxElementForm": {
    "labelTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nombre de la opci\xF3n" } },
    "valueTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Valor por defecto" } },
    "requiredTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Obligatorio" } }
  },
  "generalForm": {
    "placeholderPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Introduce un texto de ejemplo" } },
    "requiredTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Obligatorio" } },
    "labelTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Etiqueta" } },
    "labelPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Introduce la etiqueta" } },
    "valueTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Valor" } },
    "valuePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Introduce un valor" } },
    "placeholderTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Texto de ejemplo" } },
    "validationTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Validaci\xF3n" } },
    "defaultValueTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Valor predeterminado" } },
    "defaultValuePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Introduce el valor predeterminado" } }
  },
  "iframeElementForm": {
    "empty": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Iframe vac\xEDo..." } },
    "sourceTypeLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tipo de fuente" } },
    "urlLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "URL" } },
    "urlPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Enlace al recurso externo que se va a incrustar" } },
    "urlHelp": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nota: aseg\xFArate de que controlas o conf\xEDas en la URL introducida." } },
    "embedLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Incrustar" } },
    "embedPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Contenido HTML en bruto para incrustar" } },
    "heightLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Altura (en px)" } },
    "heightPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Altura en p\xEDxeles" } },
    "missingValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Falta la fuente IFrame..." } },
    "emptyValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Fuente IFrame vac\xEDa..." } }
  },
  "linkNavigationSelection": {
    "navigateTo": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Navegar a" } },
    "navigateToCustom": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "URL personalizada" } },
    "paramPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Introduce un valor..." } },
    "paramsInErrorButton": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Actualizar par\xE1metros" } },
    "url": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "URL de destino" } },
    "urlPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Introduce una URL..." } },
    "paramsInErrorDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Los par\xE1metros guardados no coinciden con los par\xE1metros de la p\xE1gina. Es probable que la p\xE1gina se haya eliminado o actualizado." } },
    "target": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Abrir en..." } },
    "targetSelf": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Misma pesta\xF1a" } },
    "targetNewTab": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nueva pesta\xF1a" } }
  },
  "dispatchDataSourceError": {
    "defaultTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Error de carga de datos" } },
    "defaultMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Se ha producido un error al cargar los datos de la p\xE1gina." } }
  },
  "authFormElementForm": {
    "userSource": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Fuente del usuario" } }
  },
  "authFormElement": {
    "email": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Correo electr\xF3nico" } },
    "password": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Contrase\xF1a" } },
    "emailPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Introduce tu correo electr\xF3nico..." } },
    "passwordPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Introduce tu contrase\xF1a..." } },
    "selectOrConfigureUserSourceFirst": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Elige un origen de usuario para empezar a utilizar este elemento de inicio de sesi\xF3n." } }
  },
  "userSourceUsersContext": {
    "searchPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Buscar usuario" } },
    "unnamed": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sin nombre" } },
    "anonymous": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "An\xF3nimo" } },
    "noEmail": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sin correo electr\xF3nico" } }
  },
  "userSelector": {
    "viewAs": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Ver como: " }, { "t": 4, "k": "usuario" }] } },
    "anonymous": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "An\xF3nimo" } },
    "member": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "prefix" }, { "t": 3, "v": " miembro" }] } }
  },
  "formContainerElement": {
    "submitDeactivatedText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Rellena todos los campos obligatorios para enviar" } },
    "defaultSubmitButtonLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Enviar" } }
  },
  "visibilityForm": {
    "allVisitors": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Todos los visitantes" } },
    "loggedInVisitors": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Visitantes registrados" } },
    "notLoggedInVisitors": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Visitantes no registrados" } },
    "warningTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Esto es una caracter\xEDstica de seguridad" } },
    "warningMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Revisa la &lt;a href='https://baserow.io/user-docs/application-builder-element-visibility#note-accessing-hidden-data-via-api'&gt;documentaci\xF3n&lt;/a&gt; para aprender m\xE1s sobre c\xF3mo aseguramos los datos." } },
    "excludedRolesLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "todos los roles excepto" } },
    "switchAllowLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Permitir" } },
    "switchDisallowLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "No permitir" } },
    "rolesSelectAll": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Seleccionar todo" } },
    "rolesDeselectAll": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Deseleccionar todo" } },
    "rolesSelectHint": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Selecciona uno o varios roles" } },
    "roleTypesHint": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Selecciona un tipo de funci\xF3n" } },
    "roleTypeAllowAllRoles": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Todos los roles" } },
    "roleTypeAllowAllRolesExcept": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "No permitir roles..." } },
    "roleTypeDisallowAllRolesExcept": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Permitir roles..." } },
    "rolesAllMembersOf": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Todos los miembros de " }, { "t": 4, "k": "name" }] } },
    "noRole": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sin funci\xF3n" } },
    "errorFetchingRolesTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "No se han podido recuperar los roles de usuario" } },
    "errorFetchingRolesMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Se ha producido un problema al recuperar los roles de usuario." } },
    "visibilityCondition": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Condici\xF3n de visibilidad" } },
    "visibilityConditionHelper": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Si el resultado de esta f\xF3rmula es \xABverdadero\xBB, y la elecci\xF3n del visitante anterior es \xABverdadero\xBB, el elemento ser\xE1 visible. Esta condici\xF3n solo afecta la visibilidad del elemento. Para excluir datos de la respuesta del servidor, usa la opci\xF3n de filtrado por rol de usuario anterior." } },
    "visibilityConditionPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Condici\xF3n\u2026" } },
    "documentationLink": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "documentaci\xF3n" } }
  },
  "generalSettings": {
    "titleOverview": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "General" } },
    "labelForm": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Icono de sitio (favicon)" } },
    "labelDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Escoge un ICO, PNG, GIF o JPEG de 128x128px." } },
    "cantUploadFaviconTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "No se puede cargar el archivo favicon" } },
    "cantUpdateApplicationTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "No se ha podido actualizar la aplicaci\xF3n" } },
    "cantUpdateApplicationDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Lo sentimos, no se ha podido actualizar la aplicaci\xF3n." } },
    "labelButton": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Subir favicon" } },
    "cantUploadFaviconDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Lo sentimos, no se ha podido cargar la imagen del favicon. Aseg\xFArese de que el archivo de imagen es \xFAnico y tiene un formato de imagen compatible." } }
  },
  "repeatElement": {
    "empty": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "No se ha encontrado ning\xFAn art\xEDculo." } },
    "missingDataSourceTooltip": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Elige una fuente de datos para empezar a a\xF1adir elementos." } },
    "showMore": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ver m\xE1s" } },
    "missingSchemaPropertyTooltip": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Elige una propiedad para comenzar a agregar elementos." } },
    "emptyState": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "No se han encontrado registros." } }
  },
  "repeatElementForm": {
    "dataSource": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Fuente de datos" } },
    "itemsPerPage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Art\xEDculos por p\xE1gina" } },
    "itemsPerRowLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Art\xEDculos por fila" } },
    "orientationLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Orientaci\xF3n" } },
    "orientationHorizontal": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Horizontal" } },
    "itemsPerPagePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Introduce el valor..." } },
    "itemsPerRowDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "N\xFAmero de columnas por fila y tipo de dispositivo." } },
    "orientationVertical": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Vertical" } },
    "buttonLoadMoreLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mostrar m\xE1s etiqueta" } },
    "toggleEditorRepetitionsLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Desactivar temporalmente las repeticiones" } },
    "propertySelectorMissingArrays": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "No se encontraron campos de valores m\xFAltiples para crear los patrones." } },
    "gapLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Espacio entre repeticiones" } },
    "gapVerticalLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Vertical" } },
    "gapHorizontalLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Horizontal" } }
  },
  "tagsFieldForm": {
    "fieldValuesLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Valores" } },
    "fieldValuesPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Introducir valores..." } },
    "fieldColorsPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Introducir colores..." } },
    "fieldColorsLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Colores" } }
  },
  "buttonFieldForm": {
    "labelPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Introduce una etiqueta..." } },
    "infoMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Para configurar las acciones de este bot\xF3n, abre la pesta\xF1a \xABEventos\xBB del elemento actual." } }
  },
  "imageInput": {
    "labelDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Descripci\xF3n por defecto" } },
    "labelButton": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cargar" } }
  },
  "userDataProviderType": {
    "isAuthenticated": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Est\xE1 autenticado" } },
    "id": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "ID" } },
    "email": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Correo electr\xF3nico" } },
    "username": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Usuario" } },
    "role": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Rol" } }
  },
  "buttonField": {
    "noLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sin nombre..." } }
  },
  "themeConfigBlockType": {
    "color": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Colores" } },
    "button": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Bot\xF3n" } },
    "link": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Enlace" } },
    "page": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "P\xE1gina" } },
    "typography": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tipograf\xEDa" } },
    "image": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Imagen" } },
    "input": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Entrada" } },
    "table": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tabla" } }
  },
  "colorThemeConfigBlock": {
    "secondaryColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Secundario" } },
    "borderColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Borde" } },
    "successColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\xC9xito" } },
    "warningColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aviso" } },
    "errorColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Error" } },
    "primaryColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Principal" } },
    "transparent": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Transparente" } },
    "customColors": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Colores personalizados" } },
    "addCustomColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Agregar color personalizado" } },
    "customColorPrefix": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Personalizado" } }
  },
  "pageThemeConfigBlock": {
    "backgroundColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Color de fondo" } },
    "backgroundImage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Imagen de fondo" } },
    "backgroundMode": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Modo de fondo" } }
  },
  "colorThemeConfigBlockType": {
    "primary": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Principal" } },
    "secondary": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Secundario" } },
    "success": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\xC9xito" } },
    "warning": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aviso" } },
    "error": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Error" } },
    "border": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Borde" } },
    "transparent": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Transparente" } }
  },
  "typographyThemeConfigBlock": {
    "headingLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Encabezamiento " }, { "t": 4, "k": "i" }, { "t": 3, "v": " (h" }, { "t": 4, "k": "i" }, { "t": 3, "v": ")" }] } },
    "headingValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Encabezamiento <h" }, { "t": 4, "k": "i" }, { "t": 3, "v": ">" }] } },
    "color": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Color" } },
    "size": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tama\xF1o" } },
    "textAlignment": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Alineaci\xF3n" } },
    "bodyLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cuerpo" } },
    "fontFamily": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Fuente tipogr\xE1fica" } },
    "weight": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Peso" } },
    "decoration": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Decoraci\xF3n de texto" } }
  },
  "buttonThemeConfigBlock": {
    "backgroundColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Color de fondo" } },
    "button": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Bot\xF3n" } },
    "defaultState": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Estado por defecto" } },
    "hoverState": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Estado de la imagen flotante" } },
    "textAlignment": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Alineaci\xF3n del texto" } },
    "alignment": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Alineaci\xF3n" } },
    "width": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Anchura" } },
    "padding": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Margen interno" } },
    "textColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Color del texto" } },
    "size": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tama\xF1o de letra" } },
    "borderRadius": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Radio del borde" } },
    "borderColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Color del borde" } },
    "borderSize": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tama\xF1o del borde" } },
    "fontFamily": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Fuente tipogr\xE1fica" } },
    "activeState": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Estado activo" } },
    "weight": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Peso de fuente" } }
  },
  "linkThemeConfigBlock": {
    "defaultState": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Estado por defecto" } },
    "alignment": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Alineaci\xF3n" } },
    "fontFamily": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Fuente tipogr\xE1fica" } },
    "link": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Enlace" } },
    "color": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Color" } },
    "hoverState": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Estado de la imagen flotante" } },
    "activeState": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Estado activo" } },
    "size": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tama\xF1o de fuente" } },
    "weight": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Peso de fuente" } },
    "decoration": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Decoraci\xF3n de texto" } }
  },
  "imageThemeConfigBlock": {
    "alignment": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Alineaci\xF3n" } },
    "maxWidthLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Anchura m\xE1xima" } },
    "maxHeightLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Altura m\xE1xima" } },
    "maxHeightPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Introduce una altura m\xE1xima" } },
    "maxWidthPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Introduce una anchura m\xE1xima" } },
    "imageConstraintsLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Restricciones" } },
    "imageConstraintFullWidth": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Extender a la anchura m\xE1xima" } },
    "imageConstraintCover": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Portada" } },
    "imageConstraintContain": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Contener" } },
    "imageConstraintContainDisabled": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "No disponible con altura m\xE1xima." } },
    "imageConstraintCoverDisabled": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "No disponible con altura m\xE1xima vac\xEDa." } },
    "imageBorderRadiusLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Radio de borde" } },
    "imageBorderRadiusPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Introduce el radio de borde de la imagen." } }
  },
  "choiceElementForm": {
    "multiple": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Permitir varios valores" } },
    "display": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Visualizar" } },
    "dropdown": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Desplegable" } },
    "checkbox": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Casilla de verificaci\xF3n" } },
    "radio": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Radio" } }
  },
  "choiceOptionSelector": {
    "value": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Valores de las opciones" } },
    "valuePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Introducir valor" } },
    "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nombres de las opciones" } },
    "namePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Introducir nombre" } },
    "optionType": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tipo de opciones" } },
    "manual": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Manual" } },
    "dataSource": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Fuente de datos" } },
    "formulas": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "F\xF3rmulas" } },
    "label": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Opciones" } },
    "addOption": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "a\xF1adir opci\xF3n" } },
    "addOptionDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Haz clic en \xABa\xF1adir opci\xF3n\xBB para a\xF1adir opciones a tu desplegable" } }
  },
  "choiceElement": {
    "addOptions": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "A\xF1adir opciones para empezar a utilizar este elemento..." } }
  },
  "backgroundModes": {
    "tile": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Azulejo" } },
    "fit": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Encajar" } },
    "fill": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Llenar" } }
  },
  "customStyle": {
    "themeOverrides": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Anulaci\xF3n de temas" } },
    "configureThemeOverrides": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Configurar las modificaciones del tema para este elemento" } },
    "backToElement": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Volver a la configuraci\xF3n del elemento" } }
  },
  "resetButton": {
    "reset": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Restablecer el valor predeterminado del tema" } }
  },
  "inputThemeConfigBlock": {
    "textColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Color del texto" } },
    "borderColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Color del borde" } },
    "borderSize": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tama\xF1o del borde" } },
    "borderRadius": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Radio del borde" } },
    "padding": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Margen interno" } },
    "fontFamily": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Fuente tipogr\xE1fica" } },
    "size": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tama\xF1o de letra" } },
    "label": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Etiqueta" } },
    "input": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Entrada" } },
    "backgroundColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Color de fondo" } },
    "weight": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Peso de fuente" } }
  },
  "tableThemeConfigBlock": {
    "borderColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Color del borde" } },
    "backgroundColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Color de fondo" } },
    "textColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Color del texto" } },
    "padding": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Margen interno" } },
    "fontFamily": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Fuente tipogr\xE1fica" } },
    "size": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tama\xF1o" } },
    "fontSize": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tama\xF1o de letra" } },
    "table": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tabla" } },
    "header": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cabecera" } },
    "borderRadius": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Radio del borde" } },
    "separators": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Separadores" } },
    "verticalSeparatorColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Color vertical" } },
    "borderSize": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tama\xF1o del borde" } },
    "backgroundAlternateColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Color de las filas pares" } },
    "alignment": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Alineaci\xF3n" } },
    "cells": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "C\xE9lulas" } },
    "verticalSeparatorSize": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tama\xF1o vertical" } },
    "horizontalSeparatorColor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Color horizontal" } },
    "horizontalSeparatorSize": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tama\xF1o horizontal" } },
    "fontWeight": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Peso de fuente" } }
  },
  "abTable": {
    "empty": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "No se ha encontrado ning\xFAn art\xEDculo." } },
    "loading": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cargando..." } }
  },
  "localBaserowServiceForm": {
    "integrationDropdownLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Integraci\xF3n" } },
    "rowIdLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "ID de fila" } },
    "rowIdPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Seleccione un ID de fila" } }
  },
  "fieldMappingContext": {
    "enableField": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Habilitar campo" } },
    "disableField": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Desactivar campo" } }
  },
  "dropdown": {
    "empty": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "No hay opciones disponibles" } }
  },
  "collectionElementForm": {
    "noSchemaPropertyMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Elige una propiedad de origen de datos para usarla como el origen de los datos para tu elemento." } },
    "noDataSourceMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Elige una fuente de datos con varias filas para enumerar todos los resultados, o un origen para los datos de una sola fila para elegir una propiedad dentro de esta fila." } },
    "propertyOptionLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Acciones del usuario" } }
  },
  "imageFieldForm": {
    "fieldAltLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Texto alternativo" } },
    "fieldAltPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Introducir valor..." } },
    "fieldSrcLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Origen de la imagen" } },
    "fieldSrcPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Introducir valor" } },
    "fieldAltHelp": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Es utilizado por los lectores de pantalla y se muestra si la imagen no se puede cargar" } }
  },
  "serviceSchemaPropertySelector": {
    "label": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Propiedad" } },
    "noProperties": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "No hay propiedades disponibles" } }
  },
  "dataSourceDropdown": {
    "label": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Origen de los datos" } },
    "noDataSources": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sin origen para los datos disponibles" } },
    "shared": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "compartido" } },
    "pageOnly": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "esta p\xE1gina" } },
    "noSharedDataSources": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "No hay fuentes de datos compartidas" } },
    "addNew": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "A\xF1adir nueva fuente de datos" } }
  },
  "recordSelectorElementForm": {
    "selectRecordsFrom": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Seleccionar registros de" } },
    "noDataSourceMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Elija una fuente de datos con m\xFAltiples filas para listar todos los resultados." } },
    "optionNameSuffix": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sufijo del nombre de la opci\xF3n" } },
    "optionNameSuffixPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Introduce un sufijo..." } },
    "optionNameSuffixHelper": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Este sufijo se a\xF1ade a cada nombre de opci\xF3n al abrir el desplegable y ayuda a distinguirlas." } },
    "itemsPerPagePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Introduce el valor..." } },
    "multipleLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Permitir varios valores" } },
    "record": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Registro " }, { "t": 4, "k": "id" }] } },
    "itemsPerPage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Art\xEDculos por p\xE1gina" } }
  },
  "dataSourceCreateEditModal": {
    "editTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Editar fuente de datos" } },
    "createTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Crear fuente de datos" } },
    "sharedWarning": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Esta fuente de datos se comparte, por lo que los cambios pueden afectar a varias p\xE1ginas." } }
  },
  "dataSourceItem": {
    "notConfigured": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "No configurado" } }
  },
  "dataSourceItemContext": {
    "shareBetweenPages": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Compartir entre p\xE1ginas" } },
    "unshareBetweenPages": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Descompartir de otras p\xE1ginas" } }
  },
  "propertyOptionForm": {
    "sortHeading": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ordenar" } },
    "searchHeading": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "B\xFAsqueda" } },
    "formDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Elige qu\xE9 propiedades dentro de la p\xE1gina de origen de datos de este elemento pueden filtrar, ordenar y buscar los visitantes." } },
    "fieldHeading": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Campo" } },
    "filterHeading": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Filtro" } },
    "optionUnavailable": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "No disponible" } },
    "noPropertiesAvailable": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "No hay campos disponibles." } }
  },
  "recordSelectorElement": {
    "emptyState": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "No se han encontrado registros." } },
    "emptyAdhocState": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "No se han encontrado registros que coincidan con '" }, { "t": 4, "k": "query" }, { "t": 3, "v": "'." }] } }
  },
  "common": {
    "dateFormatTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Formato de la fecha" } },
    "dateFormatEU": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Europeo" } },
    "dateFormatISO": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "ISO" } },
    "timeFormatTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Formato de hora" } },
    "timeFormat24Hour": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "24 horas" } },
    "timeFormat12Hour": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "12 horas" } },
    "dateFormatUS": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Americano" } }
  },
  "dateTimePickerElementForm": {
    "includeTime": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Incluir fecha y hora" } },
    "invalidDateError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Fecha no v\xE1lida. Aseg\xFArese de que la fecha ingresada coincida con el formato indicado." } }
  },
  "themeSettings": {
    "titleOverview": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tema" } }
  },
  "pageVisibilitySettingsTypes": {
    "pageName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Divulgaci\xF3n" } },
    "logInPageWarningTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "La p\xE1gina de inicio de sesi\xF3n no est\xE1 configurada" } },
    "logInPagewarningMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cuando un usuario an\xF3nimo intente acceder a esta p\xE1gina, ser\xE1 redirigido a una p\xE1gina de inicio de sesi\xF3n. Establezca la p\xE1gina de inicio de sesi\xF3n en la configuraci\xF3n general de la aplicaci\xF3n." } },
    "logInPageInfoMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Los usuarios an\xF3nimos que intenten acceder a esta p\xE1gina ser\xE1n redirigidos a la p\xE1gina " }, { "t": 4, "k": "logInPageName" }, { "t": 3, "v": "." }] } },
    "logInPageInfoTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Los usuarios an\xF3nimos ser\xE1n redirigidos" } }
  },
  "pageVisibilitySettings": {
    "allVisitors": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Todos los visitantes" } },
    "loggedInVisitors": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Visitantes registrados" } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Qui\xE9n puede ver esta p\xE1gina" } },
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Visibilidad" } }
  },
  "builderLoginPageForm": {
    "pageDropdownLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "P\xE1gina de inicio de sesi\xF3n" } },
    "pageDropdownPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Seleccione una p\xE1gina" } },
    "pageDropdownDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Seleccione la p\xE1gina de inicio de sesi\xF3n a la que deben redirigirse los usuarios que no hayan iniciado sesi\xF3n cuando intenten acceder a una p\xE1gina restringida." } }
  },
  "multiPageContainerElementForm": {
    "behaviour": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Comportamiento" } },
    "display": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Visualizar" } },
    "pagePosition": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Posici\xF3n" } },
    "selectAll": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Seleccionar todo" } },
    "deselectAll": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Deseleccionar todo" } }
  },
  "pageShareType": {
    "all": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "En todas las p\xE1ginas" } },
    "only": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Solo en p\xE1ginas seleccionadas" } },
    "except": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Excluir p\xE1ginas seleccionadas" } }
  },
  "pageEditor": {
    "pageNotFound": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "P\xE1gina no encontrada" } },
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Constructor de aplicaciones" } }
  },
  "builderToast": {
    "details": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Detalles" } },
    "defaultTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Error inesperado" } },
    "defaultMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ha ocurrido un error inesperado. Por favor, int\xE9ntalo de nuevo m\xE1s tarde." } },
    "invalidContextTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Solicitud inv\xE1lida" } },
    "invalidContextMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "La solicitud es inv\xE1lida." } },
    "InvalidContentTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Formulario inv\xE1lido" } },
    "invalidContentMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Uno o varios campos contienen valores inv\xE1lidos." } },
    "serviceMisconfiguredTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Configuraci\xF3n incompleta" } },
    "serviceMisconfiguredMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Por favor, revisa la configuraci\xF3n." } },
    "errorWorkflowActionDispatch": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": 'La acci\xF3n "' }, { "t": 4, "k": "name" }, { "t": 3, "v": '" ha fallado: ' }] } },
    "errorDataSourceDispatch": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": 'No se pudo cargar los datos de "' }, { "t": 4, "k": "name" }, { "t": 3, "v": '": ' }] } }
  },
  "sidePanelGuidedTourStep": {
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "**Pesta\xF1a General** \u2013 Configura el elemento seleccionado.\n\n**Pesta\xF1a Estilo** \u2013 Personaliza el margen interno, el margen externo, los bordes y m\xE1s.\n\n**Pesta\xF1a Visibilidad** \u2013 Controla qui\xE9n puede ver este elemento: usuarios conectados, usuarios desconectados o roles espec\xEDficos.\n\n**Pesta\xF1a Eventos** \u2013 Si el elemento admite acciones, config\xFAralas aqu\xED para lograr interactividad din\xE1mica." } },
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Panel lateral: Personaliza elementos" } }
  },
  "addElementCategory": {
    "suggestedElement": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Elementos sugeridos" } },
    "baseElement": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Elementos base" } },
    "layoutElement": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Elementos de dise\xF1o" } },
    "formElement": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Elementos de formulario" } }
  },
  "orientations": {
    "label": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Orientaci\xF3n" } },
    "horizontal": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Horizontal" } },
    "vertical": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Vertical" } }
  },
  "menuElement": {
    "missingValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Falta el elemento del men\xFA" } },
    "separator": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Separador" } },
    "spacer": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Espaciador" } },
    "missingLinkValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Falta el nombre del enlace\u2026" } },
    "emptyLinkValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nombre de enlace vac\xEDo\u2026" } },
    "missingButtonValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Falta el nombre del bot\xF3n\u2026" } },
    "emptyButtonValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nombre de bot\xF3n vac\xEDo\u2026" } }
  },
  "menuElementForm": {
    "menuItemsLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Elementos del men\xFA" } },
    "addMenuItemLink": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "A\xF1adir..." } },
    "alignment": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Alineaci\xF3n" } },
    "menuItemDefaultName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "P\xE1gina" } },
    "menuItemLabelLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Etiqueta" } },
    "menuItemTypeSeparator": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Separador" } },
    "menuItemTypeLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tipo" } },
    "menuItemVariantLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Variante" } },
    "menuItemVariantLink": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Enlace" } },
    "menuItemVariantButton": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Bot\xF3n" } },
    "namePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "P\xE1gina" } },
    "addSubLink": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "A\xF1adir subenlace" } },
    "menuItemSubLinkDefaultName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Subenlace" } },
    "menuItemAddLink": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Enlace" } },
    "menuItemAddButton": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Bot\xF3n" } },
    "menuItemAddSeparator": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Separador" } },
    "menuItemAddSpacer": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Espaciador" } },
    "eventDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Para configurar acciones para este bot\xF3n, abre la pesta\xF1a \xABEventos\xBB de este elemento." } },
    "noMenuItemsMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Haz clic en \xABA\xF1adir\xBB para a\xF1adir tu primer elemento de men\xFA." } },
    "previewCompactMenuHelper": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mostrar/ocultar la previsualizaci\xF3n del men\xFA compacto." } },
    "variant": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Variante por tipo de dispositivo" } },
    "previewCompactMenuLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Previsualizar men\xFA compacto" } },
    "openEditorCompactMenu": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Abrir men\xFA" } },
    "closeEditorCompactMenu": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cerrar men\xFA" } },
    "expanded": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Expandido" } },
    "compact": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Compacto" } }
  },
  "simpleContainerElementForm": {
    "noConfigurationOptions": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "El elemento contenedor no tiene ninguna opci\xF3n de configuraci\xF3n." } }
  },
  "queryParamTypes": {
    "textName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Texto" } },
    "numericName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Num\xE9rico" } }
  },
  "radiusStyleForm": {
    "cornerRadiusLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Radio de esquina" } },
    "backgroundRadiusLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Fondo" } },
    "borderRadiusLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Borde" } }
  },
  "fontWeightType": {
    "thin": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Delgado" } },
    "extraLight": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Extra\u2011ligero" } },
    "light": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ligero" } },
    "medium": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mediano" } },
    "semiBold": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Semi\u2011negrita" } },
    "bold": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Negrita" } },
    "extraBold": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Extra\u2011negrita" } },
    "black": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Negro" } },
    "extraBlack": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Extra\u2011negro" } },
    "regular": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Regular" } }
  },
  "userSourceDropdown": {
    "label": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Fuente del usuario" } },
    "addUserSource": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Agregar nueva fuente de usuario" } },
    "noUserSources": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "No hay fuentes de usuario disponibles" } }
  },
  "authProviderWithModal": {
    "authProviderInError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Por favor, edita este proveedor para corregir el error." } },
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Editar proveedor: " }, { "t": 4, "k": "name" }] } }
  },
  "textDecorationSelector": {
    "underline": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Subrayar" } },
    "stroke": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Trazo" } },
    "italic": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cursiva" } },
    "uppercase": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "May\xFAsculas" } }
  },
  "ratingFieldForm": {
    "color": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Color" } },
    "style": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Estilo" } },
    "maxValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Valor m\xE1ximo" } },
    "star": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Estrella" } },
    "heart": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Coraz\xF3n" } },
    "thumbsUp": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pulgar arriba" } },
    "flag": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Bandera" } },
    "value": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Valor" } }
  },
  "ratingElementForm": {
    "color": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Color" } },
    "ratingStyle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Estilo" } },
    "maxValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "M\xE1ximo" } },
    "star": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Estrella" } },
    "heart": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Coraz\xF3n" } },
    "smile": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sonrisa" } },
    "thumbsUp": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pulgar\u202Farriba" } },
    "flag": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Bandera" } }
  },
  "automationSettingsModal": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Flujo de trabajo" } }
  },
  "abFileInput": {
    "delete": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Eliminar" } }
  },
  "elementsGuidedTourStep": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "A\xF1ade elementos a tu p\xE1gina" } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\xA1Cada aplicaci\xF3n necesita componentes! A\xF1ade elementos como tablas, formularios, botones y m\xE1s para dar vida a tu aplicaci\xF3n." } }
  },
  "dataGuidedTourStep": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Conecta tus datos" } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Enlaza tus tablas de Baserow aqu\xED para mostrar, filtrar y actualizar tus datos de forma din\xE1mica en distintos elementos." } }
  },
  "previewGuidedTourStep": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tu centro de control" } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aqu\xED es donde configuras las p\xE1ginas de tu aplicaci\xF3n. A\xF1ade elementos, previsualiza el resultado y estructura tu aplicaci\xF3n exactamente como deseas." } }
  },
  "devicesGuidedTourStep": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Previsualizar en diferentes dispositivos" } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cambia entre la previsualizaci\xF3n de escritorio, tablet y m\xF3vil para ver c\xF3mo se ve tu aplicaci\xF3n en diferentes tama\xF1os de pantalla. \xA1Aseg\xFArate de que tu dise\xF1o funcione perfectamente en todos los dispositivos!" } }
  },
  "previewPublishGuidedTourStep": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Previsualiza y publica tu aplicaci\xF3n" } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Haz clic en **\xABPrevisualizar\xBB** para probar tu aplicaci\xF3n de forma privada. Cuando est\xE9s listo, haz clic en **\xABPublicar\xBB** para compartirla con el p\xFAblico a trav\xE9s de un dominio." } }
  },
  "workflowAction": {
    "testActionDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ejecuta esta acci\xF3n en modo previsualizaci\xF3n para capturar su salida y hacerla disponible a las acciones siguientes." } },
    "sampleDataModalTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Carga \xFAtil para " }, { "t": 4, "k": "actionLabel" }] } },
    "sampleDataModalSubTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Carga \xFAtil JSON" } }
  }
};

export { resource as default };
//# sourceMappingURL=es-F9T0I_TJ.mjs.map
