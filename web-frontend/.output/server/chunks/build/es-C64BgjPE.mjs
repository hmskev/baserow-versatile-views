!(function() {
  try {
    var e = false ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
    var n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "3355fe6b-2009-4dcd-afae-9deaa9d9384a", e._sentryDebugIdIdentifier = "sentry-dbid-3355fe6b-2009-4dcd-afae-9deaa9d9384a");
  } catch (e2) {
  }
})();
const resource = {
  "localBaserowGetRowForm": {
    "rowFieldHelpText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Deja este valor vac\xEDo para devolver la primera fila." } },
    "noTableChosenForSorting": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Elige una tabla para empezar a utilizar la ordenaci\xF3n de fuentes de datos." } },
    "rowFieldLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "ID de fila" } },
    "invalidFormula": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "La f\xF3rmula no es v\xE1lida" } },
    "rowFieldPlaceHolder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Elige un ID de fila \xFAnico" } },
    "searchFieldPlaceHolder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Introduce un t\xE9rmino de b\xFAsqueda..." } },
    "noTableChosenForFiltering": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Elige una tabla para empezar a utilizar los filtros de fuentes de datos." } },
    "searchTabTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "B\xFAsqueda" } },
    "filterTabTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Filtros" } }
  },
  "localBaserowListRowsForm": {
    "filterTabTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Filtros" } },
    "searchTabTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Buscar en" } },
    "searchFieldPlaceHolder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Introduce un t\xE9rmino de b\xFAsqueda..." } },
    "noTableChosenForFiltering": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Elige una tabla para empezar a utilizar los filtros de fuentes de datos." } },
    "sortTabTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ordenar" } },
    "noTableChosenForSorting": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Elige una tabla para empezar a utilizar la ordenaci\xF3n de fuentes de datos." } },
    "advancedConfig": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Avanzado" } },
    "defaultResultCount": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cantidad de resultados predeterminada" } },
    "defaultResultCountHelp": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "El n\xFAmero predeterminado de registros que esta fuente de datos obtendr\xE1 en tu p\xE1gina. Si estableces el valor en 0 y lo utilizas en un elemento de colecci\xF3n, mejorar\xE1s el rendimiento al cargar la p\xE1gina porque s\xF3lo se recuperar\xE1n los registros cuando el elemento se pagine." } },
    "defaultResultCountPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Valor predeterminado\u2026" } }
  },
  "localBaserowTableServiceConditionalForm": {
    "addFilter": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "A\xF1adir filtro adicional" } },
    "relatedFieldNotFound": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "No se encuentra el campo relacionado." } },
    "filterTypeNotFound": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "El tipo de filtro no es compatible." } },
    "noCompatibleFilterTypesErrorTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "No hay tipos de filtro compatibles" } },
    "noCompatibleFilterTypesErrorMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ninguno de tus campos tiene ning\xFAn tipo de filtro compatible" } },
    "formulaFilterInputPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Elige una f\xF3rmula\u2026" } },
    "useFormulaForValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Utiliza una f\xF3rmula para este filtro" } },
    "noFilterTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "A\xFAn no has creado un filtro de fuente de datos" } },
    "noFilterText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Los filtros de fuente de datos le permiten mostrar las filas de la tabla Baserow que se aplican a tus condiciones." } },
    "useDefaultForValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Utiliza el filtro por defecto para este campo" } },
    "textFilterInputPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Escribe el texto\u2026" } }
  },
  "localBaserowTableServiceSortForm": {
    "noTableChosenForSorting": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Elige una tabla para empezar a utilizar la ordenaci\xF3n de fuentes de datos." } },
    "noSortText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Las clasificaciones permiten ordenar las filas por un campo." } },
    "noSortTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "A\xFAn no has creado un tipo de fuente de datos" } },
    "sortBy": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ordenar por" } },
    "thenBy": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Luego por" } },
    "addSort": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "A\xF1adir ordenaci\xF3n adicional" } },
    "sortMisconfigured": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "El campo con el que est\xE1 asociado este orden ha sido enviado a la papelera." } }
  },
  "dataProviderType": {
    "dataSource": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Fuente de datos" } },
    "pageParameter": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Par\xE1metro" } }
  },
  "localBaserowTableSelector": {
    "chooseNoView": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "No seleccionado" } },
    "viewFieldLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Vista" } },
    "tableFieldLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tabla" } },
    "databaseFieldLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Base de datos" } },
    "dataSyncedTableDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tabla sincronizada de dato" } },
    "oneWayDataSyncedTableDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sincronizado unidireccionalmente" } },
    "twoWayDataSyncedTableDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sincronizado bidireccionalmente" } }
  },
  "integrationType": {
    "localBaserow": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Baserow local" } },
    "localBaserowSummary": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Baserow local - " }, { "t": 4, "k": "name" }, { "t": 3, "v": ", " }, { "t": 4, "k": "username" }] } },
    "localBaserowWarning": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Autorizar su cuenta les otorga a todos los que tienen permisos de edici\xF3n en la aplicaci\xF3n acceso completo a los datos a los que usted tiene acceso. Es posible crear un segundo usuario, otorgarle los permisos correctos y usarlo." } },
    "smtp": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Correo electr\xF3nico SMTP" } },
    "slackBot": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Bot de Slack" } },
    "ai": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "IA" } }
  },
  "serviceType": {
    "localBaserowGetRow": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Obtener una sola fila" } },
    "localBaserowListRows": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Enumerar varias filas" } },
    "localBaserowAggregateRows": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Resumir campo" } },
    "localBaserowGetRowDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Leer una \xFAnica fila de una tabla de Baserow." } },
    "localBaserowListRowsDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Lee varias filas de una tabla de Baserow." } },
    "localBaserowAggregateRowsDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Resume un campo de una tabla de Baserow." } },
    "localBaserowCreateRow": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Crea una fila" } },
    "localBaserowCreateRowDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Crea una fila nueva en una tabla de Baserow." } },
    "localBaserowUpdateRow": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Actualiza una fila" } },
    "localBaserowUpdateRowDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Actualiza una fila existente en una tabla de Baserow." } },
    "localBaserowDeleteRow": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Eliminar filas" } },
    "localBaserowDeleteRowDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Elimina una o m\xE1s filas en una tabla de Baserow." } },
    "localBaserowRowsCreated": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Se crean filas" } },
    "localBaserowRowsCreatedDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Se activa cuando se crean filas en una tabla de Baserow." } },
    "localBaserowRowsUpdated": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Se actualizan filas" } },
    "localBaserowRowsUpdatedDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Se activa cuando las filas se actualizan en cualquier campo de una tabla de Baserow." } },
    "localBaserowRowsDeleted": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Se eliminan filas" } },
    "localBaserowRowsDeletedDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Se activa cuando se eliminan filas en una tabla de Baserow." } },
    "coreHTTPTrigger": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Recibir una solicitud HTTP" } },
    "coreHTTPTriggerDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Se dispara cuando se recibe una solicitud HTTP." } },
    "coreHTTPRequest": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Env\xEDa una solicitud HTTP" } },
    "coreHTTPRequestDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Env\xEDa una solicitud HTTP a un punto final especificado." } },
    "coreSMTPEmail": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Enviar correo electr\xF3nico" } },
    "coreRouter": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Enrutador" } },
    "coreRouterEdgesRequired": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Se requiere al menos un borde" } },
    "coreRouterEdgeLabelRequired": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Se requiere una etiqueta de rama." } },
    "coreRouterEdgeConditionRequired": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Se requiere una condici\xF3n de rama." } },
    "coreRouterDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dirige el flujo de trabajo a la siguiente rama bas\xE1ndote en una condici\xF3n." } },
    "coreSMTPEmailDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Env\xEDa un correo electr\xF3nico usando la configuraci\xF3n SMTP." } },
    "coreIteration": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Iterador" } },
    "coreIterationDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Itera sobre los elementos." } },
    "errorFromEmailMissing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "No se ha especificado la direcci\xF3n del Remitente del correo" } },
    "errorToEmailsMissing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "No se ha especificado la direcci\xF3n del Destinatario del correo" } },
    "misconfigured": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Configurado incorrectamente" } },
    "trashedField": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Campo eliminado" } },
    "errorUrlMissing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "No se ha especificado la Url" } },
    "errorNoTableSelected": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "No se ha seleccionado una tabla" } },
    "errorFilterInError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Al menos un filtro est\xE1 mal configurado" } },
    "errorSortingInError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Al menos uno de los criterios de ordenaci\xF3n est\xE1 mal configurado" } },
    "errorNoFieldSelected": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "No se seleccionaron campos" } },
    "errorNoAggregationTypeSelected": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "No se ha seleccionado un tipo de agregaci\xF3n" } },
    "corePeriodic": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Disparador peri\xF3dico" } },
    "corePeriodicDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dispara el flujo de trabajo de forma peri\xF3dica en intervalos especificados" } },
    "corePeriodicErrorIntervalMissing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Se requiere un intervalo." } },
    "errorIterationSourceMissing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "No se ha especificado la propiedad de origen" } },
    "aiAgent": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Solicitud de IA" } },
    "aiAgentDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ejecuta las solicitudes de IA usando los modelos generativos de IA configurados." } },
    "errorNoIntegrationSelected": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "No se ha seleccionado una integraci\xF3n" } },
    "errorNoAIProviderSelected": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "No se ha seleccionado un proveedor de IA" } },
    "errorNoAIModelSelected": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "No se ha seleccionado un modelo de IA" } },
    "errorNoPromptProvided": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "No has proporcionado una solicitud de IA" } },
    "errorNoChoicesProvided": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "No se ha proporcionado opciones para el tipo de salida de elecci\xF3n" } },
    "slackWriteMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Env\xEDa un mensaje de Slack" } },
    "slackWriteMessageDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Env\xEDas un mensaje a un #canal espec\xEDfico de Slack" } },
    "slackWriteMessageMissingChannel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Se requiere un canal." } },
    "slackWriteMessageMissingMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Se requiere un mensaje." } },
    "slackWriteMessageMissingIntegration": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "No se ha seleccionado una integraci\xF3n de Slack." } },
    "localBaserowFieldsUpdatedDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Se activa cuando las filas se actualizan en campos espec\xEDficos de una tabla de Baserow." } },
    "errorWorkflowNotImmediateDispatch": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "El flujo de trabajo seleccionado debe usar un disparador que pueda iniciarse inmediatamente." } },
    "coreManualTriggerDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Se inicia solo cuando otra acci\xF3n de flujo de trabajo inicia este flujo de trabajo." } },
    "localBaserowUpdateRowsDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Actualiza m\xFAltiples filas existentes en una tabla de Baserow." } },
    "localBaserowCreateRowsDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Crea m\xFAltiples filas nuevas en una tabla de Baserow." } },
    "coreCSVFileReaderDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Lee filas desde un archivo CSV." } },
    "localBaserowFieldsUpdated": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Los valores de campos espec\xEDficos se actualizan" } },
    "errorCSVFileMissing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Propiedad de archivo CSV faltante" } },
    "errorCSVContentMissing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Propiedad de datos CSV faltante" } },
    "coreCSVFileReader": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Leer un archivo CSV" } },
    "coreStartWorkflowDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Inicia un flujo de trabajo de automatizaci\xF3n." } },
    "errorNoWorkflowSelected": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "No se seleccion\xF3 un flujo de trabajo" } },
    "localBaserowUpdateRows": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Actualizar filas en lote" } },
    "localBaserowCreateRows": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Crear filas en lote" } },
    "errorNoRowsSelected": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "No se seleccionaron filas" } },
    "coreManualTrigger": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Disparador manual" } },
    "coreStartWorkflow": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Iniciar flujo de trabajo" } }
  },
  "userSourceType": {
    "localBaserow": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Autenticaci\xF3n de la tabla de Baserow" } }
  },
  "localBaserowForm": {
    "user": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Usuario" } },
    "userMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Al crear esta conexi\xF3n, est\xE1s autorizando a la aplicaci\xF3n a usar tu cuenta para realizar cambios en tu espacio de trabajo local de Baserow." } }
  },
  "localBaserowIntegrationType": {
    "localBaserowNoUser": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Baserow local - No configurado" } },
    "localBaserowSummary": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Baserow local - " }, { "t": 4, "k": "name" }, { "t": 3, "v": ", " }, { "t": 4, "k": "username" }] } },
    "localBaserowWarning": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Al autorizar tu cuenta, cualquier persona con permisos de edici\xF3n en la aplicaci\xF3n tendr\xE1 acceso total a los datos a los que t\xFA tienes acceso. Puedes crear un segundo usuario, asignarle los permisos adecuados y utilizar ese usuario." } }
  },
  "integrationsCommon": {
    "singleRow": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "una sola fila" } },
    "multipleRows": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "varias filas" } }
  },
  "localBaserowAggregateRowsForm": {
    "searchTabTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Buscar" } },
    "aggregationFieldLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Campo" } },
    "aggregationTypeLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "A\xF1adir" } },
    "noTableChosenForFiltering": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Seleccione una tabla para comenzar a utilizar filtros de fuente de datos." } },
    "filterTabTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Filtros" } },
    "searchFieldPlaceHolder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Introduzca un t\xE9rmino de b\xFAsqueda..." } }
  },
  "slackBotIntegrationType": {
    "slackBotSummary": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Bot de Slack" } },
    "slackBotNoToken": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Bot de Slack \u2013 No configurado" } }
  },
  "aiIntegrationType": {
    "inheritingWorkspace": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Configuraci\xF3n heredada de IA del espacio de trabajo" } },
    "overridingProviders": { "t": 0, "b": { "t": 1, "c": [{ "t": 2, "i": [{ "t": 3, "v": "Sobrescribiendo " }, { "t": 4, "k": "count" }, { "t": 3, "v": " proveedor" }] }, { "t": 2, "i": [{ "t": 3, "v": "Sobrescribiendo " }, { "t": 4, "k": "count" }, { "t": 3, "v": " proveedores" }] }] } }
  },
  "aiForm": {
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Configura los ajustes del proveedor de IA para esta integraci\xF3n. Por defecto, se heredan los ajustes de IA del espacio de trabajo." } },
    "workspaceSettingsTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ajustes de IA del espacio de trabajo" } },
    "workspaceSettingsDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Esta integraci\xF3n hereda los ajustes del proveedor de IA de tu espacio de trabajo por defecto. Puedes reemplazar los proveedores espec\xEDficos a continuaci\xF3n." } },
    "overrideWorkspaceSettings": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sobrescribe la configuraci\xF3n del espacio de trabajo para este proveedor" } },
    "inherited": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Heredado" } },
    "overridden": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sobrescrito" } }
  },
  "aiAgentServiceForm": {
    "integrationLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Integraci\xF3n" } },
    "providerLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Proveedor de IA" } },
    "providerPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Selecciona un proveedor de IA\u2026" } },
    "modelLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Modelo de IA" } },
    "modelPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Selecciona un modelo\u2026" } },
    "outputTypeLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tipo de salida" } },
    "outputTypeHelp": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Elige c\xF3mo debe formatear la IA su respuesta. Si defines opciones, obligas al modelo a responder \xFAnicamente con una de esas opciones." } },
    "outputTypeText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Texto" } },
    "outputTypeChoice": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Elecci\xF3n" } },
    "temperatureLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Temperatura" } },
    "temperaturePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "ej. 0.7" } },
    "temperatureHelp": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Controla la aleatoriedad. Los valores bajos (0\u20110.3) son m\xE1s centrados y deterministas. Los valores altos (0.7\u20112.0) son m\xE1s creativos y variados." } },
    "promptLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Solicitud" } },
    "promptPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Introduce tu solicitud aqu\xED\u2026" } },
    "choicesLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Opciones" } },
    "choicePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Introduce una opci\xF3n de elecci\xF3n aqu\xED\u2026" } },
    "addChoice": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "A\xF1ade una opci\xF3n" } },
    "choicesRequired": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Al menos se requiere una opci\xF3n" } }
  },
  "serviceRefinementForms": {
    "filterTabTitle": { "t": 0, "b": { "t": 1, "c": [{ "t": 2, "i": [{ "t": 3 }], "s": "Filtrar" }, { "t": 2, "i": [{ "t": 3 }], "s": "1 Filtro" }, { "t": 2, "i": [{ "t": 4, "k": "count" }, { "t": 3, "v": " Filtros" }] }] } },
    "sortTabTitle": { "t": 0, "b": { "t": 1, "c": [{ "t": 2, "i": [{ "t": 3 }], "s": "Ordenar" }, { "t": 2, "i": [{ "t": 3 }], "s": "1 Orden" }, { "t": 2, "i": [{ "t": 4, "k": "count" }, { "t": 3, "v": " Ordenamientos" }] }] } },
    "searchTabTitle": { "t": 0, "b": { "t": 1, "c": [{ "t": 2, "i": [{ "t": 3 }], "s": "Buscar" }, { "t": 2, "i": [{ "t": 3 }], "s": "1 B\xFAsqueda" }, { "t": 2, "i": [{ "t": 4, "k": "count" }, { "t": 3, "v": " B\xFAsquedas" }] }] } },
    "searchFieldPlaceHolder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Introduce un t\xE9rmino de b\xFAsqueda\u2026" } },
    "noTableChosenForFiltering": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Elige una tabla para comenzar a usar filtros de origen de datos." } },
    "noTableChosenForSorting": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Elige una tabla para comenzar a usar ordenamientos de origen de datos." } },
    "refinements": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Configuraci\xF3n detallada" } }
  },
  "slackBotForm": {
    "supportSetupDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Seg\xFAn la configuraci\xF3n de tu espacio de trabajo de Slack, es posible que puedas crear una nueva aplicaci\xF3n de Slack. De lo contrario, un administrador tendr\xE1 que hacerlo por ti. Si est\xE1s reutilizando una aplicaci\xF3n existente que pueda escribir mensajes, pasa a la secci\xF3n titulada \xABEmparejamiento con tu aplicaci\xF3n de Slack\xBB." } },
    "tokenLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Token de usuario bot" } },
    "tokenPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "xoxb\u20111234\u2011\u2026" } },
    "tokenMustStartWith": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "El token debe comenzar con \xABxoxb-\xBB" } },
    "supportHeading": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\xBFNecesitas ayuda?" } },
    "supportDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Si necesitas cualquier asistencia para conectar tu aplicaci\xF3n Slack, por favor consulta los pasos a continuaci\xF3n." } },
    "supportSetupHeading": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "1. Configuraci\xF3n de la aplicaci\xF3n" } },
    "supportSetupStep1": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Navega a " }, { "t": 4, "k": "link" }, { "t": 3, "v": " de tu espacio de trabajo." }] } },
    "supportSetupStep2": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Crea una nueva aplicaci\xF3n, elige \xABDesde cero\xBB e ingresa un nombre. Selecciona el espacio de trabajo en el que tu aplicaci\xF3n debe operar y haz clic en \xABCrear\xBB." } },
    "supportSetupStep3": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "En la barra lateral izquierda, navega a \xABOAuth > Permisos\xBB, despl\xE1zate hacia abajo hasta \xABPermisos\xBB y, bajo \xABPermisos del token de bot\xBB, selecciona \xABA\xF1adir un permiso OAuth\xBB." } },
    "supportSetupStep4": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Para permitir que tu aplicaci\xF3n publique mensajes, a\xF1ade el alcance " }, { "t": 4, "k": "scope" }, { "t": 3, "v": "." }] } },
    "supportPairingHeading": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "2. Conexi\xF3n de tu aplicaci\xF3n Slack" } },
    "supportPairingStep1": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Si tu aplicaci\xF3n es nueva: navega a \xABConfiguraci\xF3n\xBB > \xABInstalar aplicaci\xF3n\xBB. Haz clic en el bot\xF3n verde para instalar la aplicaci\xF3n en tu espacio de trabajo." } },
    "supportPairingStep2": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Copia tu \xABToken OAuth de usuario bot\xBB y almac\xE9nalo en el campo \xABToken de usuario bot\xBB de este formulario." } },
    "supportPairingStep3": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Finalmente, si tu aplicaci\xF3n es nueva: en Slack, invita tu aplicaci\xF3n al canal que hayas elegido con" } },
    "supportSetupStep1Link": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "p\xE1gina de aplicaciones" } }
  },
  "coreHTTPRequestServiceForm": {
    "httpMethod": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "M\xE9todo HTTP" } },
    "url": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "URL del destino (API endpoint)" } },
    "queryParams": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Par\xE1metros de consulta" } },
    "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nombre" } },
    "value": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Valor" } },
    "namePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nombre..." } },
    "valuePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Valor..." } },
    "headers": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Encabezados" } },
    "addQueryParam": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "a\xF1adir par\xE1metro de consulta" } },
    "addHeader": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "a\xF1adir encabezado" } },
    "formData": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Datos del formulario" } },
    "addFormData": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "a\xF1adir datos del formulario" } },
    "bodyType": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tipo de cuerpo" } },
    "bodyContent": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Contenido del cuerpo" } },
    "urlPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Introducir la URL del destino (API endpoint)\u2026" } },
    "bodyPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "A\xF1adir cuerpo de la solicitud\u2026" } },
    "timeoutPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Introducir tiempo de espera (API timeout)\u2026" } },
    "nameFieldRequired": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "La propiedad \xABnombre\xBB es obligatoria." } },
    "seconds": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "segundos" } },
    "nameFieldInvalid": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "El nombre debe contener s\xF3lo caracteres alfanum\xE9ricos, guiones o guiones bajos, y no debe comenzar con un gui\xF3n ni con un gui\xF3n bajo." } },
    "timeout": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tiempo de espera" } }
  },
  "slackWriteMessageServiceForm": {
    "alertMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Esta acci\xF3n debe estar emparejada con una aplicaci\xF3n de Slack. Por favor, sigue la gu\xEDa en la ventana emergente de integraciones para comenzar." } },
    "integrationLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Integraci\xF3n" } },
    "channelLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Canal" } },
    "channelPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Introducir un nombre de canal" } },
    "messageLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mensaje" } },
    "messagePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Escribe un mensaje\u2026" } },
    "channelNoPrefix": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Elimina el \u2018#\u2019 antes del nombre del canal." } }
  },
  "smtpIntegrationType": {
    "smtpSummary": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "SMTP - " }, { "t": 4, "k": "host" }, { "t": 3, "v": ":" }, { "t": 4, "k": "port" }] } }
  },
  "smtpForm": {
    "host": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Servidor SMTP" } },
    "hostPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "smtp.gmail.com" } },
    "port": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Puerto SMTP" } },
    "portPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "587" } },
    "useTls": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Usar TLS" } },
    "username": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nombre de usuario" } },
    "usernamePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }, { "t": 9 }, { "t": 3 }], "s": "tu-correo@ejemplo.com" } },
    "password": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Contrase\xF1a" } },
    "passwordPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "tu-contrase\xF1a" } }
  },
  "smtpEmailForm": {
    "integrationDropdownLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Integraci\xF3n" } },
    "fromEmail": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Direcci\xF3n del remitente (From)" } },
    "fromEmailPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }, { "t": 9 }, { "t": 3 }], "s": "remitente@ejemplo.com" } },
    "fromName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nombre del remitente" } },
    "fromNamePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tu nombre" } },
    "toEmails": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Direcci\xF3n de los destinatarios (To)" } },
    "toEmailsPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }, { "t": 9 }, { "t": 3 }, { "t": 9 }, { "t": 3 }], "s": "destinatario1@ejemplo.com, destinatario2@ejemplo.com" } },
    "ccEmails": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Correos en copia (CC)" } },
    "bccEmails": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Correos en copia oculta (BCC)" } },
    "ccEmailsPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }, { "t": 9 }, { "t": 3 }, { "t": 9 }, { "t": 3 }], "s": "destinatarioencopia1@ejemplo.com, destinatarioencopia2@ejemplo.com" } },
    "bccEmailsPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }, { "t": 9 }, { "t": 3 }, { "t": 9 }, { "t": 3 }], "s": "destinatarioencopiaoculta1@ejemplo.com, destinatarioencopiaoculta2@ejemplo.com" } },
    "subject": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Asunto" } },
    "subjectPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Asunto del mensaje de correo" } },
    "bodyType": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tipo de contenido" } },
    "bodyTypePlain": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Texto plano" } },
    "bodyTypeHtml": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "HTML" } },
    "body": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cuerpo" } },
    "bodyPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tu contenido de correo\u2026" } },
    "smtpConfigurationMode": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Configuraci\xF3n SMTP" } },
    "useInstanceSmtpSettings": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Usa el servidor SMTP de la instancia" } }
  },
  "routerForm": {
    "defaultEdgeLabelLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Etiqueta de rama predeterminada" } },
    "defaultEdgeLabelPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Predeterminado" } },
    "defaultEdgeLabelDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Opcionalmente elige la etiqueta para mostrar en la rama predeterminada." } },
    "branchesHeading": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ramas" } },
    "branchesDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Las ramas te permiten ejecutar nodos solo cuando se cumple una condici\xF3n. Las ramas se ejecutan de izquierda a derecha hasta que se cumpla una condici\xF3n; de lo contrario, se ejecutar\xE1 la rama predeterminada. " } },
    "branchLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Etiqueta" } },
    "branchConditionLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Condici\xF3n" } },
    "branchConditionPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Si es \xABverdadero\xBB, seguimos esta rama." } },
    "addEdge": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "A\xF1adir rama" } },
    "edgeDefaultName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Rama" } },
    "noLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sin etiqueta" } },
    "edgeDeletionLastEdge": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "No puedes eliminar la \xFAltima rama." } },
    "edgeDeletionHasOutput": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "No se puede eliminar una rama si tiene una salida." } }
  },
  "coreIterationServiceForm": {
    "source": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Fuente" } },
    "sourcePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Selecciona una fuente\u2026" } }
  },
  "periodicForm": {
    "intervalLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Intervalo" } },
    "intervalHelper": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Elige con qu\xE9 frecuencia quieres que este flujo de trabajo se ejecute" } },
    "everyMinute": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Cada " }, { "t": 4, "k": "minute" }, { "t": 3, "v": " minutos" }] } },
    "everyMinuteDefault": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cada minutos especificados" } },
    "everyHour": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cada hora" } },
    "everyDay": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cada d\xEDa" } },
    "everyWeek": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cada semana" } },
    "everyMonth": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cada mes" } },
    "hour": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Hora" } },
    "minute": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Minuto" } },
    "minuteFrequency": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cada minutos" } },
    "dayOfWeek": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "D\xEDa de la semana" } },
    "dayOfMonth": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "D\xEDa del mes" } },
    "hourPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "0-23" } },
    "minutePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "0-59" } },
    "minuteFrequencyPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "15" } },
    "dayOfMonthPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "1-31" } },
    "minuteHelper": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Este flujo de trabajo se ejecutar\xE1 cada minutos especificados" } },
    "hourHelper": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Este flujo de trabajo se ejecutar\xE1 cada hora en el minuto especificado en tu zona horaria local (" }, { "t": 4, "k": "timezone" }, { "t": 3, "v": ")" }] } },
    "dayHelper": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Este flujo de trabajo se ejecutar\xE1 cada d\xEDa a la hora especificada en tu zona horaria local (" }, { "t": 4, "k": "timezone" }, { "t": 3, "v": ")" }] } },
    "weekHelper": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Este flujo de trabajo se ejecutar\xE1 cada semana en el d\xEDa y hora especificados en tu zona horaria local (" }, { "t": 4, "k": "timezone" }, { "t": 3, "v": ")" }] } },
    "monthHelper": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Este flujo de trabajo se ejecutar\xE1 cada mes en el d\xEDa y la hora especificados en tu zona horaria local (" }, { "t": 4, "k": "timezone" }, { "t": 3, "v": ")" }] } },
    "deactivatedTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Disparador peri\xF3dico desactivado" } },
    "deactivatedText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Este disparador peri\xF3dico ha sido desactivado autom\xE1ticamente debido a fallos consecutivos." } }
  },
  "localBaserowUpsertRowServiceForm": {
    "noTableSelectedMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Elige una tabla para comenzar a configurar tus campos." } },
    "noWritableFields": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Esta tabla no contiene campos editables." } },
    "fieldMappingPlaceholderArray": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Elige un valor de `array` o matriz, por ejemplo: [42]" } },
    "fieldMappingPlaceholderString": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Elige un valor de cadena, por ejemplo: \\'baserow\\'" } },
    "fieldMappingPlaceholderNumber": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Elige un valor num\xE9rico, por ejemplo: 42" } },
    "fieldMappingPlaceholderBoolean": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Elige un valor booleano, por ejemplo: \xABverdadero\xBB" } },
    "fieldMappingPlaceholderDate": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Elige un valor de fecha, por ejemplo: 2025-07-25" } },
    "fieldMappingPlaceholderDecimal": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Elige un valor decimal, por ejemplo: 3.14" } },
    "fieldMappingPlaceholderDuration": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Elige un valor de duraci\xF3n, por ejemplo: 1:23:40" } }
  },
  "localBaserowServiceForm": {
    "rowIdPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Elige un ID de fila \xFAnico" } },
    "rowIdLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "ID de fila" } },
    "integrationDropdownLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Integraci\xF3n" } }
  },
  "localBaserowUpdateRowsServiceForm": {
    "rowsHelper": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "La f\xF3rmula debe devolver una matriz de objetos de fila, o una cadena JSON que se procese como tal. Cada objeto debe incluir una propiedad ID. Usa nombres de campo o IDs de campo como claves del objeto. Se pueden actualizar hasta " }, { "t": 4, "k": "limit" }, { "t": 3, "v": " filas a la vez." }] } },
    "rowsPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Elige una lista de objetos de fila con IDs" } },
    "rowsLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Filas" } }
  },
  "localBaserowCreateRowsServiceForm": {
    "rowsHelper": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "La f\xF3rmula debe devolver una matriz de objetos de fila, o una cadena JSON que se procese como tal. Usa nombres de campo o IDs de campo como claves del objeto. Se pueden crear hasta " }, { "t": 4, "k": "limit" }, { "t": 3, "v": " filas a la vez." }] } },
    "rowsPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Elige una lista de objetos de fila" } },
    "rowsLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Filas" } }
  },
  "coreStartWorkflowServiceForm": {
    "workflowHelperText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Solo los flujos de trabajo publicados con un disparador manual pueden iniciarse. Si este flujo de trabajo tiene cambios no publicados, se ejecutar\xE1 la \xFAltima versi\xF3n publicada." } },
    "automation": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Automatizaci\xF3n" } },
    "workflow": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Flujo de trabajo" } }
  },
  "localBaserowDeleteRowServiceForm": {
    "rowIdHelper": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Elige un ID de fila o una matriz o `array` de IDs de fila. Puedes eliminar hasta " }, { "t": 4, "k": "limit" }, { "t": 3, "v": " filas a la vez." }] } },
    "rowIdPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Elige un ID de fila o una matriz o `array` de IDs de fila" } },
    "rowIdLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "ID(s) de fila" } }
  },
  "localBaserowFieldsUpdatedForm": {
    "fieldHelper": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "El flujo de trabajo solo activa cuando uno de los valores de estos campos cambia." } },
    "fieldLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Campos" } }
  },
  "coreCSVFileReaderServiceForm": {
    "filePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Elige un archivo CSV..." } },
    "firstLineIsHeader": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "La primera l\xEDnea es cabecera" } },
    "csvPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Introduce datos del CSV..." } },
    "utf8Bom": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "UTF-8 con BOM" } },
    "csv": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Datos CSV" } },
    "file": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Archivo CSV" } },
    "utf8": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "UTF-8" } },
    "latin1": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Latin-1" } },
    "inputType": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Origen" } },
    "inputTypeFile": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Archivo" } },
    "inputTypeContent": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Contenido" } },
    "encoding": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Codificaci\xF3n" } },
    "comma": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Coma" } },
    "semicolon": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Punto y coma" } },
    "tab": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tabulaci\xF3n" } },
    "separator": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Separador" } },
    "pipe": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pleca" } }
  }
};

export { resource as default };
//# sourceMappingURL=es-C64BgjPE.mjs.map
