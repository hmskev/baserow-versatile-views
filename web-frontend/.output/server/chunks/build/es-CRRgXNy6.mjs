!(function() {
  try {
    var e = false ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
    var n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "df4c3b22-df9c-455b-8ca4-3d616ca900b0", e._sentryDebugIdIdentifier = "sentry-dbid-df4c3b22-df9c-455b-8ca4-3d616ca900b0");
  } catch (e2) {
  }
})();
const resource = {
  "automationWorkflow": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Flujo de trabajo" } }
  },
  "automationWelcomeGuidedTourStep": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\xA1Bienvenido a las Automatizaciones de Baserow!" } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Vamos a hacer un recorrido r\xE1pido. Ver\xE1s c\xF3mo configurar disparadores, a\xF1adir acciones, probar tu flujo de trabajo y publicarlo \u2014 no se requiere codificaci\xF3n." } }
  },
  "automationGraphGuidedTourStep": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Gestiona aqu\xED tu gr\xE1fico de flujo de trabajo" } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Crea un disparador y acciones aqu\xED para definir lo que el flujo de trabajo debe hacer. Selecciona un disparador o acci\xF3n para configurarlo en el panel lateral." } }
  },
  "automationTestRunGuidedTourStep": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Prueba tu flujo de trabajo" } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cuando est\xE9s listo, inicia una ejecuci\xF3n de prueba para ver tu flujo de trabajo en acci\xF3n. El disparador se ejecutar\xE1 una vez para simular una ejecuci\xF3n completa." } }
  },
  "automationHistoryGuidedTourStep": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ver historial del flujo de trabajo" } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Usa el panel de historial para revisar ejecuciones de prueba pasadas y ejecuciones publicadas. Es una excelente manera de depurar o confirmar los resultados." } }
  },
  "automationPublishGuidedTourStep": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Publica tu flujo de trabajo" } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Una vez que hayas probado y ajustado tu configuraci\xF3n, publica tu flujo de trabajo para ponerlo en funcionamiento. Ahora, el disparador se ejecutar\xE1 autom\xE1ticamente seg\xFAn el horario." } }
  },
  "automationWorkflowStateGuidedTourStep": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Controlar el estado del flujo de trabajo" } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Desde aqu\xED, puedes pausar o reanudar tu flujo de trabajo en cualquier momento. Siempre tienes el control sobre si est\xE1 activo o deshabilitado." } }
  },
  "automationDocsGuidedTourStep": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Explora la documentaci\xF3n" } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Si alguna vez te quedas atascado o quieres aprender m\xE1s, haz clic en el bot\xF3n resaltado para obtener gu\xEDas detalladas y respuestas a preguntas frecuentes sobre c\xF3mo crear automatizaciones en Baserow." } }
  },
  "sidebarComponentAutomation": {
    "createAutomationWorkflow": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nuevo flujo de trabajo" } }
  },
  "createAutomationWorkflowModal": {
    "header": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Crear flujo de trabajo" } },
    "submit": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "A\xF1adir flujo de trabajo" } }
  },
  "automationWorkflowForm": {
    "defaultName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Flujo de trabajo" } },
    "nameTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nombre" } },
    "nameSubtitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nombre \xFAnico del flujo de trabajo" } },
    "namePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Escribe un nombre\u2026" } }
  },
  "duplicateAutomationWorkflowJobType": {
    "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Duplicar el flujo de trabajo de automatizaci\xF3n" } },
    "duplicating": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Duplicando" } },
    "duplicatedTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Flujo de trabajo duplicado" } }
  },
  "automationWorkflowErrors": {
    "errorNameNotUnique": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ya existe un flujo de trabajo con este nombre" } },
    "errorNameNotUniqueDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Por favor, introduce un nombre \xFAnico para el flujo de trabajo" } }
  },
  "trashType": {
    "workflow": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "flujo de trabajo" } },
    "automation": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "automatizaci\xF3n" } }
  },
  "generalSettings": {
    "titleOverview": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "General" } },
    "nameLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nombre de la automatizaci\xF3n" } },
    "notificationLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Notificaciones" } },
    "notificationCheckboxLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Recibe una notificaci\xF3n cuando esta automatizaci\xF3n falle" } },
    "cantUpdateAutomationTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "No se pudo actualizar la automatizaci\xF3n" } },
    "cantUpdateAutomationDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Lo siento, no se pudo actualizar la automatizaci\xF3n." } }
  },
  "integrationSettings": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Integraciones" } },
    "noIntegrationMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "A\xFAn no has creado ninguna integraci\xF3n. Se pueden crear a\xF1adiendo una fuente de datos, una acci\xF3n o una autenticaci\xF3n de usuario." } },
    "integrationMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Puedes crear nuevas integraciones a\xF1adiendo una fuente de datos, una acci\xF3n o una autenticaci\xF3n de usuario." } }
  },
  "automationHeader": {
    "startTestRun": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Iniciar ejecuci\xF3n de prueba" } },
    "stopTestRun": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Detener ejecuci\xF3n de prueba" } },
    "publishBtn": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Publicar" } },
    "settingsBtn": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Configuraci\xF3n" } },
    "historyBtn": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Historial" } },
    "docsBtn": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Documentaci\xF3n" } },
    "switchLabelDraft": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Borrador" } },
    "switchLabelDisabled": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Deshabilitado" } },
    "switchLabelPaused": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pausado" } },
    "switchLabelLive": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "En vivo" } },
    "lastPublished": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\xDAltima publicaci\xF3n" } }
  },
  "dataProviderType": {
    "currentIteration": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Iteraci\xF3n actual" } },
    "item": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\xCDtem" } },
    "previousNode": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nodo anterior" } }
  },
  "nodeSidePanel": {
    "labelTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Etiqueta" } }
  },
  "historySidePanel": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Historial" } },
    "noRunsTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "A\xFAn no hay ejecuciones" } },
    "noRunsDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cuando este flujo de trabajo se haya ejecutado, los resultados se mostrar\xE1n aqu\xED." } },
    "statusSuccess": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ejecutado con \xE9xito" } },
    "statusError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Fallo al ejecutar" } },
    "statusDisabled": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Deshabilitado por Baserow" } },
    "completedInSeconds": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Completado en " }, { "t": 4, "k": "s" }, { "t": 3, "v": " segundos." }] } },
    "completedInLessThanSecond": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Completado en menos de 1 segundo." } },
    "testRun": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Prueba" } },
    "statusStarted": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "En progreso..." } },
    "running": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Ejecutando por " }, { "t": 4, "k": "at" }, { "t": 3, "v": "s" }] } },
    "statusSuccessBadge": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Completado" } },
    "statusErrorBadge": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Fallido" } },
    "successfulRuns": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ejecuciones exitosas" } },
    "failedRuns": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ejecuciones fallidas" } },
    "errorHideDetails": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ocultar detalles" } },
    "errorShowDetails": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mostrar detalles" } },
    "runNumber": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Ejecuci\xF3n " }, { "t": 4, "k": "n" }] } },
    "runCount": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "n" }, { "t": 3, "v": " ejecuciones" }] } },
    "showResult": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mostrar resultado" } }
  },
  "nodeType": {
    "triggerDeletionError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Los disparadores no pueden eliminarse, solo reemplazarse." } },
    "localBaserowRowsCreatedLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Filas creadas en " }, { "t": 4, "k": "tableName" }] } },
    "localBaserowRowsUpdatedLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Filas actualizadas en " }, { "t": 4, "k": "tableName" }] } },
    "localBaserowRowsDeletedLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Filas eliminadas en " }, { "t": 4, "k": "tableName" }] } },
    "localBaserowCreateRowLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Crear una fila en " }, { "t": 4, "k": "tableName" }] } },
    "localBaserowUpdateRowLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Actualizar una fila en " }, { "t": 4, "k": "tableName" }] } },
    "localBaserowDeleteRowLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Eliminar filas en " }, { "t": 4, "k": "tableName" }] } },
    "localBaserowGetRowLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Leer una fila en " }, { "t": 4, "k": "tableName" }] } },
    "localBaserowListRowsLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Listar filas en " }, { "t": 4, "k": "tableName" }] } },
    "localBaserowAggregateRowsLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Resumir filas en " }, { "t": 4, "k": "tableName" }] } },
    "httpRequestLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Enviar una solicitud HTTP" } },
    "smtpEmailLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Enviar un correo electr\xF3nico" } },
    "iterationLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Itera sobre los elementos" } },
    "routerLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Sigue 1 de " }, { "t": 4, "k": "edgeCount" }, { "t": 3, "v": " ramas" }] } },
    "routerDefaultEdgeLabelFallback": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Predeterminado" } },
    "routerWithOutputNodesDeleteError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "No se puede eliminar hasta que se eliminen sus " }, { "t": 4, "k": "outputCount" }, { "t": 3, "v": " nodos de salida." }] } },
    "routerWithOutputNodesReplaceError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "No se puede reemplazar hasta que se eliminen sus " }, { "t": 4, "k": "outputCount" }, { "t": 3, "v": " nodos de salida." }] } },
    "iteratorWithChildrenNodesDeleteError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "No se puede eliminar hasta que se eliminen sus nodos hijos." } },
    "iteratorWithChildrenNodesReplaceError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "No se puede reemplazar hasta que se eliminen sus nodos hijos." } },
    "slackWriteMessageLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Env\xEDa un mensaje a #" }, { "t": 4, "k": "channel" }] } },
    "slackWriteMessageName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Enviar un mensaje de Slack" } },
    "periodicTriggerLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Disparador peri\xF3dico" } },
    "aiAgent": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Prompt de IA" } },
    "defaultEdgeLabelFallback": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Predeterminado" } },
    "localBaserowFieldsUpdatedNoFieldLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Los valores de campos espec\xEDficos se actualizan en una tabla" } },
    "localBaserowFieldsUpdatedMultipleLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Los valores de " }, { "t": 4, "k": "count" }, { "t": 3, "v": " campos se actualizan en " }, { "t": 4, "k": "tableName" }] } },
    "localBaserowFieldsUpdatedLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "fieldName" }, { "t": 3, "v": " se actualiza en " }, { "t": 4, "k": "tableName" }] } },
    "localBaserowCreateRowsLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Crear filas en lote en " }, { "t": 4, "k": "tableName" }] } },
    "localBaserowUpdateRowsLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Actualizar filas en lote en " }, { "t": 4, "k": "tableName" }] } },
    "csvFileReaderLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Leer un archivo CSV" } },
    "startWorkflowLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Iniciar " }, { "t": 4, "k": "workflowName" }] } }
  },
  "simulateDispatch": {
    "testNodeDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Prueba este nodo para confirmar que la configuraci\xF3n es correcta. Los datos de esta prueba pueden usarse en pasos posteriores." } },
    "triggerNodeAwaitingEvent": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "El nodo est\xE1 esperando. Por favor, dispara manualmente el evento para rellenar la carga \xFAtil y completar la prueba." } },
    "errorNodeNotConfigured": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "El nodo debe configurarse antes de que pueda probarse." } },
    "errorPreviousNodesNotTested": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "El nodo anterior \xAB" }, { "t": 4, "k": "node" }, { "t": 3, "v": "\xBB debe probarse primero." }] } },
    "errorPreviousNodeNotConfigured": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "El nodo anterior \xAB" }, { "t": 4, "k": "node" }, { "t": 3, "v": "\xBB debe configurarse." }] } },
    "simulationInProgress": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "La prueba del nodo est\xE1 en curso..." } },
    "sampleDataCopied": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Carga \xFAtil copiada al portapapeles" } },
    "buttonLabelTestAgain": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Probar el nodo nuevamente" } },
    "sampleDataModalTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Carga \xFAtil para " }, { "t": 4, "k": "nodeLabel" }] } },
    "errorOccurred": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ocurri\xF3 un error\u2026" } },
    "sampleDataLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Salida" } },
    "sampleDataCopy": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Copiar" } },
    "buttonLabelTest": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Probar nodo" } },
    "buttonLabelShowPayload": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mostrar carga \xFAtil" } },
    "buttonLabelShowError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mostrar error" } },
    "sampleDataModalSubTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Carga \xFAtil JSON" } }
  },
  "periodicTriggerServiceForm": {
    "monthHelper": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Este flujo de trabajo se ejecutar\xE1 cada mes en el d\xEDa y hora especificados en tu zona horaria local (" }, { "t": 4, "k": "timezone" }, { "t": 3, "v": ")" }] } },
    "weekHelper": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Este flujo de trabajo se ejecutar\xE1 cada semana en el d\xEDa y hora especificados en tu zona horaria local (" }, { "t": 4, "k": "timezone" }, { "t": 3, "v": ")" }] } },
    "hourHelper": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Este flujo de trabajo se ejecutar\xE1 cada hora en el minuto especificado en tu zona horaria local (" }, { "t": 4, "k": "timezone" }, { "t": 3, "v": ")" }] } },
    "dayHelper": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Este flujo de trabajo se ejecutar\xE1 cada d\xEDa a la hora especificada en tu zona horaria local (" }, { "t": 4, "k": "timezone" }, { "t": 3, "v": ")" }] } },
    "deactivatedText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Este disparador peri\xF3dico ha sido desactivado autom\xE1ticamente debido a fallos consecutivos." } },
    "intervalHelper": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Elige con qu\xE9 frecuencia quieres que este flujo de trabajo se ejecute" } },
    "minuteHelper": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Este flujo de trabajo se ejecutar\xE1 cada minuto" } },
    "dayOfWeek": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "D\xEDa de la semana" } },
    "dayOfMonth": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "D\xEDa del mes" } },
    "deactivatedTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Disparador peri\xF3dico desactivado" } },
    "everyMinute": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cada minuto" } },
    "everyHour": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cada hora" } },
    "everyDay": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cada d\xEDa" } },
    "everyWeek": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cada semana" } },
    "hourPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "0-23" } },
    "minutePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "0-59" } },
    "dayOfMonthPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "1-31" } },
    "intervalLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Intervalo" } },
    "hour": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Hora" } },
    "minute": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Minuto" } },
    "everyMonth": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cada mes" } }
  },
  "serviceType": {
    "periodicTriggerDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dispara el flujo de trabajo de forma peri\xF3dica en intervalos especificados" } },
    "coreHTTPTriggerDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Recibe solicitudes HTTP para disparar flujos de trabajo" } },
    "errorIntervalMissing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Se requiere un intervalo." } },
    "periodicTrigger": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Disparador peri\xF3dico" } },
    "periodicTriggerTriggeredAt": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Disparado a las" } },
    "coreHTTPTrigger": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Disparador HTTP" } },
    "coreManualTriggerDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Se inicia solo cuando otra acci\xF3n de flujo de trabajo inicia este flujo de trabajo" } },
    "coreManualTrigger": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Disparador manual" } }
  },
  "workflowNode": {
    "displayLabelDebug": { "t": 0, "b": { "t": 1, "c": [{ "t": 2, "i": [{ "t": 3, "v": "ID: " }, { "t": 4, "k": "id" }] }, { "t": 2, "i": [{ "t": 3, "v": "ID Previo: " }, { "t": 4, "k": "previousNodeId" }] }, { "t": 2, "i": [{ "t": 4, "k": "outputUid" }] }] } },
    "beforeLabelConditionDefault": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Si no se cumple(n) ninguna condici\xF3n" } },
    "beforeLabelCondition": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Si se cumple la condici\xF3n" } },
    "beforeLabelRepeat": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Para cada \xEDtem" } },
    "beforeLabelTrigger": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Comienza cuando" } },
    "nodeOptions": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Opciones de nodo" } },
    "actionDelete": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Eliminar" } },
    "actionReplace": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Reemplazar" } },
    "actionDuplicate": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Duplicar" } },
    "actionConfigure": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Configurar" } },
    "beforeLabelAction": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Luego" } },
    "moreEdit": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Editar" } },
    "moreReplace": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Reemplazar" } },
    "moreDuplicate": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Duplicar" } }
  },
  "workflowNodeContext": {
    "searchPlaceholderTrigger": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Buscar un disparador\u2026" } },
    "searchPlaceholderActions": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Buscar acciones\u2026" } },
    "noResults": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "No se encontraron resultados" } }
  },
  "workflowAddNode": {
    "displayTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Crear nodo de automatizaci\xF3n" } }
  },
  "workflowEditor": {
    "chooseEvent": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Elige un evento\u2026" } }
  },
  "workflowGeneralSettings": {
    "titleOverview": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Configuraci\xF3n del flujo de trabajo" } },
    "nameLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nombre del flujo de trabajo" } },
    "workflowDisabledRecipientsLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Destinatarios de notificaciones" } },
    "selectWorkflowDisabledRecipients": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Seleccionar destinatarios" } },
    "noWorkflowDisabledRecipients": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "No hay destinatarios seleccionados." } },
    "cantUpdateWorkflowTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "No se pudo actualizar el flujo de trabajo" } },
    "workflowDisabledRecipientsHelp": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Estos miembros del espacio de trabajo recibir\xE1n una notificaci\xF3n en la aplicaci\xF3n si este flujo de trabajo se deshabilita autom\xE1ticamente." } },
    "cantUpdateWorkflowDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Lo sentimos, no se pudo actualizar el flujo de trabajo." } }
  },
  "workflowDisabledNotification": {
    "body": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "El flujo de trabajo " }, { "t": 4, "k": "name" }, { "t": 3, "v": " fue deshabilitado." }] } }
  }
};

export { resource as default };
//# sourceMappingURL=es-CRRgXNy6.mjs.map
