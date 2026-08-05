!(function() {
  try {
    var e = false ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
    var n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "b28d8353-8d5f-4e88-9ef8-a5cacb07516e", e._sentryDebugIdIdentifier = "sentry-dbid-b28d8353-8d5f-4e88-9ef8-a5cacb07516e");
  } catch (e2) {
  }
})();
const resource = {
  "webhookModal": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Webhooks de " }, { "t": 4, "k": "name" }] } },
    "createWebhook": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Crear webhook" } },
    "backToList": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "volver a la lista" } }
  },
  "deleteWebhookModal": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Eliminar " }, { "t": 4, "k": "webhookName" }] } },
    "deleteButton": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Eliminar webhook" } },
    "body": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\xBFEst\xE1 seguro de que desea eliminar este webhook? No podr\xE1 restaurarlo m\xE1s tarde." } }
  },
  "webhookList": {
    "noWebhooksMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "A\xFAn no ha creado ning\xFAn webhook. Los webhooks se pueden usar para informar a los sistemas de terceros cuando se ha creado, actualizado o eliminado una fila en Baserow." } }
  },
  "testWebhookModal": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Webhook de prueba" } },
    "unreachable": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Servidor inalcanzable" } }
  },
  "webhookForm": {
    "inputLabels": {
      "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nombre" } },
      "value": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Valor" } },
      "requestMethod": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Metodo" } },
      "url": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "URL" } },
      "userFieldNames": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nombres de campo de usuario" } },
      "events": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\xBFQu\xE9 eventos deber\xEDan desencadenar este webhook?" } },
      "headers": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Encabezados adicionales" } },
      "example": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ejemplo de carga \xFAtil" } }
    },
    "errors": {
      "urlField": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Debe ser una URL v\xE1lida que empiece con 'https://' o 'http://'." } },
      "invalidHeaders": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Uno de los encabezados no es v\xE1lido." } }
    },
    "checkbox": {
      "sendUserFieldNames": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Usar nombre de campo en lugar de id" } }
    },
    "radio": {
      "allEvents": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Env\xEDame todo" } },
      "customEvents": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "D\xE9jame seleccionar eventos individuales" } }
    },
    "triggerButton": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Activar webhook de prueba" } },
    "deactivated": {
      "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "El webhook est\xE1 desactivado" } },
      "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Este webhook se ha desactivado porque ha habido demasiados errores consecutivos. Consulte el registro de llamadas para obtener m\xE1s detalles. Haga clic en el bot\xF3n de abajo para activarlo de nuevo. No olvide guardar el webhook despu\xE9s de activarlo." } },
      "activate": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Activar" } }
    },
    "deprecatedEventType": {
      "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tipo de evento obsoleto" } },
      "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Este webhook no recibe informaci\xF3n sobre todas las filas modificadas al mismo tiempo. Por favor convi\xE9rtelo a un tipo de evento de tipo batch. Esto cambia la carga \xFAtil del cuerpo JSON a un formato que contiene m\xFAltiples filas." } },
      "convert": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Convertir" } }
    },
    "helpTriggerWhenFieldsHaveChanged": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Solo se activar\xE1 si cambia el valor de la celda de los campos elegidos." } },
    "triggerWhenFieldsHaveChanged": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Activar cuando los campos hayan cambiado" } }
  },
  "webhook": {
    "details": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "detalles" } },
    "lastCall": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "\xDAltima llamada: " }, { "t": 4, "k": "lastCallTime" }] } },
    "noCalls": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "No se hicieron llamadas" } },
    "callLog": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "registro de llamadas" } },
    "triggerDescription": { "t": 0, "b": { "t": 1, "c": [{ "t": 2, "i": [{ "t": 3 }], "s": "Disparadores en cada evento" }, { "t": 2, "i": [{ "t": 3, "v": "Se activa el evento " }, { "t": 4, "k": "count" }] }, { "t": 2, "i": [{ "t": 3, "v": "Disparadores en " }, { "t": 4, "k": "count" }, { "t": 3, "v": " eventos" }] }] } }
  },
  "createWebhook": {
    "errorTableWebhookMaxLimitExceededTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Max webhooks excedidos" } },
    "errorTableWebhookMaxLimitExceededDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "No se puede crear el webhook porque se excedi\xF3 la cantidad m\xE1xima de webhooks por tabla." } }
  },
  "sidebar": {
    "viewAPI": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ver documentos API" } },
    "createTable": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nueva mesa" } }
  },
  "sidebarItem": {
    "exportTable": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Exportar tabla" } },
    "webhooks": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Webhooks" } },
    "lastSynced": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\xDAltima sincronizaci\xF3n" } },
    "notSynced": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "No sincronizado" } },
    "sync": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sincronizar tabla" } },
    "updateSyncConfig": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Actualizar la configuraci\xF3n de sincronizaci\xF3n" } },
    "importFile": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Importar archivo" } }
  },
  "apiToken": {
    "create": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "crear" } },
    "read": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "leer" } },
    "update": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "actualizar" } },
    "delete": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "eliminar" } },
    "tokenPrefix": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Token:" } },
    "viewAPIDocs": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ver la documentaci\xF3n de la API" } },
    "generateNewToken": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Generar nuevo token" } },
    "showOrHide": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mostrar u ocultar el token" } },
    "copyToClipboard": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Copiar al portapapeles" } },
    "showDatabases": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "mostrar bases de datos" } }
  },
  "apiTokenSettings": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tokens de bases de datos" } },
    "createToken": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Crear token" } },
    "noTokensMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "A\xFAn no ha creado un token de base de datos. Puede usar tokens de base de datos para autenticarse con los puntos finales de la API REST donde puede crear, leer, actualizar y eliminar filas. Es posible establecer permisos a nivel de tabla." } },
    "hasFullPermissions": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tiene permisos completos, tambi\xE9n para todos los elementos hijos." } },
    "hasOnlySelectedPermissions": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Solo tiene permisos para los elementos hijos seleccionados." } },
    "noPermissions": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "No tiene permisos." } },
    "createNewTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Crear nuevo token de la base de datos" } },
    "backToOverview": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "De regreso a la visi\xF3n general" } }
  },
  "apiTokenForm": {
    "nameLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nombre" } },
    "workspaceLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Grupo" } }
  },
  "apiDocsSelectDatabase": {
    "needOneDatabase": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Debe tener al menos una base de datos para ver la documentaci\xF3n de la API." } }
  },
  "apiDocsExample": {
    "requestSample": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Solicitar muestra" } },
    "responseSample": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Muestra de respuesta" } },
    "userFieldNames": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nombres de campo de usuario" } }
  },
  "apiDocsParameter": {
    "optional": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "opcional" } },
    "defaultValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Default: " }, { "t": 4, "k": "value" }] } }
  },
  "apiDocsTableGetRow": {
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Obtenga una sola fila " }, { "t": 4, "k": "name" }, { "t": 3, "v": "." }] } },
    "rowId": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "El identificador \xFAnico de la fila que se solicita." } }
  },
  "apiDocsErrors": {
    "errorCode": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "C\xF3digo de error" } },
    "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nombre" } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Descripci\xF3n" } },
    "okDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Solicitud completada con \xE9xito." } },
    "badRequestDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "La solicitud contiene valores no v\xE1lidos o no se pudo analizar el JSON." } },
    "unauthorizedDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cuando intenta acceder a un punto final sin un token de la base de datos v\xE1lido." } },
    "notFoundDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "No se encuentra la fila o la tabla." } },
    "requestEntityTooLargeDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "La solicitud super\xF3 el tama\xF1o de carga \xFAtil m\xE1ximo permitido." } },
    "internalErrorDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "El servidor encontr\xF3 una condici\xF3n inesperada." } },
    "badGatewayDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Baserow se est\xE1 reiniciando o hay una interrupci\xF3n inesperada en curso." } },
    "unavailableDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "El servidor no pudo procesar su solicitud a tiempo." } }
  },
  "apiDocsTableFields": {
    "tableTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "name" }, { "t": 3, "v": " tabla" }] } },
    "tableId": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "El ID de esta tabla es:" } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Cada fila de la tabla " }, { "t": 4, "k": "name" }, { "t": 3, "v": " contiene los siguientes campos." }] } },
    "id": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "ID" } },
    "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nombre" } },
    "type": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tipo" } },
    "compatibleFilters": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Filtros compatibles" } }
  },
  "apiDocsTableListRows": {
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Para enumerar las filas en la tabla *" }, { "t": 4, "k": "name" }, { "t": 3, "v": "*, se debe realizar una solicitud `GET` al extremo *" }, { "t": 4, "k": "name" }, { "t": 3, "v": "*. La respuesta est\xE1 paginada y, de forma predeterminada, se devuelve la primera p\xE1gina. La p\xE1gina correcta se puede obtener proporcionando los par\xE1metros de consulta `p\xE1gina` y `tama\xF1o`." }] } },
    "page": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Define qu\xE9 p\xE1gina de filas debe devolverse." } },
    "size": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Define cu\xE1ntas filas se deben devolver por p\xE1gina." } },
    "userFieldNames": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cuando se proporciona cualquier valor para el par\xE1metro GET `user_field_names`, los nombres de campo devueltos por este extremo ser\xE1n los nombres reales de los campos.\n\nSi no se proporciona el par\xE1metro GET `user_field_names`, todos los nombres de campo devueltos ser\xE1n `field_` seguidos de la identificaci\xF3n del campo. Por ejemplo, `field_1` se refiere al campo con una identificaci\xF3n de `1`.\n\nAdem\xE1s, cuando se establece `user_field_names`, cambia el comportamiento de los otros par\xE1metros GET `order_by`, `include` y `exclude`. En su lugar, esperan listas separadas por comas de los nombres de campo reales." } },
    "search": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Si se proporcionan, solo se devolver\xE1n las filas con datos que coincidan con la consulta de b\xFAsqueda." } },
    "orderBy": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Opcionalmente se pueden ordenar las filas por campos separados por coma. De forma predeterminada o si se antepone un '+', un campo se ordena en orden ascendente (A-Z), pero al anteponer el campo con un '-' se puede ordenar de forma descendente (Z-A).\n\n #### Con `user_field_names`:\n\n `order_by` debe ser una lista separada por comas de los nombres de los campos por ordenar. Por ejemplo, si proporciona el siguiente par\xE1metro GET `order_by=My Field,-My Field 2`, las filas se ordenar\xE1n por el campo llamado `My Field` en orden ascendente. Si algunos campos tienen el mismo valor, ese subconjunto se ordenar\xE1 por el campo llamado `Mi campo 2` en orden descendente.\n\n Aseg\xFArese de que los campos con nombres que comienzan con `+` o `-` est\xE9n expl\xEDcitamente precedidos por otro `+` o `-`. Por ejemplo, `+-Nombre`.\n\n El nombre de los campos que contienen comas debe estar entre comillas: `\"Nombre,\"`. Si los nombres de los campos contienen comillas, deben escaparse con el car\xE1cter `\\`. Ej: `Nombre\\\"`.\n\n#### Sin `user_field_names`:\n\n `order_by` debe ser una lista separada por comas de `field_` seguida de la identificaci\xF3n del campo por el que ordenar. Por ejemplo, si proporciona el siguiente par\xE1metro GET `order_by=field_1,-field_2`, las filas se ordenar\xE1n por `field_1` en orden ascendente. Si algunos campos tienen el mismo valor, ese subconjunto se ordenar\xE1 por `field_2` en orden descendente." } },
    "filter": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Las filas pueden filtrarse opcionalmente usando los mismos filtros de vista que est\xE1n disponibles para las vistas. Se pueden aplicar varios filtros si siguen el mismo formato. Las variables `field` y `filter` indican, respectivamente, c\xF3mo y d\xF3nde aplicar el filtro.\n\n#### Con `user_field_names`:\n\nPor ejemplo, si proporcionas opcionalmente el siguiente par\xE1metro GET: `filter__Name__equal=test`, solo se devolver\xE1n las filas cuyo valor en `Name` sea igual a `test`. Este m\xE9todo es retrocompatible y, si falla al buscar por nombre, verificar\xE1 contra `field_id`.\n\n### Sin `user_field_names`:\n\nPor ejemplo, si proporcionas opcionalmente el siguiente par\xE1metro GET: `filter__field_1__equal=test`, solo se devolver\xE1n las filas cuyo valor en `field_1` sea igual a `test`.\n\nTen en cuenta que, si se proporciona el par\xE1metro filters, este par\xE1metro ser\xE1 ignorado. " } },
    "filterLink": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Puede encontrar una lista de todos los filtros aqu\xED." } },
    "filterType": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "- `Y`: Indica que las filas deben coincidir con todos los filtros proporcionados.\n- `OR`: Indica que las filas solo tienen que coincidir con uno de los filtros.\n\n Esto funciona solo si se proporcionan dos o m\xE1s filtros." } },
    "include": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": 'Todos los campos se incluyen en la respuesta de forma predeterminada. Puede seleccionar un subconjunto de campos para incluir proporcionando el par\xE1metro de consulta de inclusi\xF3n.\n\n #### Con `user_field_names`:\n\n `include` debe ser una lista separada por comas de nombres de campos que se incluir\xE1n en los resultados. Por ejemplo, si proporciona el siguiente par\xE1metro GET: `include=My Field,-My Field 2`, solo se incluir\xE1n esos campos (a menos que se excluyan expl\xEDcitamente).\n\n El nombre de los campos que contienen comas debe estar entre comillas: `"Nombre,"`. Si los nombres de los campos contienen comillas, deben escaparse con el car\xE1cter `\\`. Ej: `Nombre\\"`.\n\n #### Sin `user_field_names`:\n\n `include` debe ser una lista separada por comas de `field_` seguida de la identificaci\xF3n del campo para incluir en los resultados. Por ejemplo: si proporciona el siguiente par\xE1metro GET `exclude=field_1,field_2`, los campos con id `1` e id `2` solo se incluir\xE1n esos campos (a menos que se excluyan expl\xEDcitamente).' } },
    "exclude": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": 'Todos los campos se incluyen en la respuesta de forma predeterminada. Puede seleccionar un subconjunto de campos para excluir proporcionando el par\xE1metro de consulta de exclusi\xF3n.\n\n #### Con `user_field_names`:\n\n `excluir` debe ser una lista separada por comas de nombres de campos que se excluir\xE1n de los resultados. Por ejemplo, si proporciona el siguiente par\xE1metro GET: `exclude=My Field,-My Field 2`, esos campos se excluir\xE1n.\n\n El nombre de los campos que contienen comas debe estar entre comillas: `"Nombre,"`. Si los nombres de los campos contienen comillas, deben escaparse con el car\xE1cter `\\`. Ej: `Nombre\\"`.\n\n #### Sin `user_field_names`:\n\n `exclude` debe ser una lista separada por comas de `field_` seguida de la identificaci\xF3n del campo para excluir de los resultados. Por ejemplo: si proporciona el siguiente par\xE1metro GET `exclude=field_1,field_2`, los campos con id `1` e id `2` se excluir\xE1n.' } },
    "viewId": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }, { "t": 9 }, { "t": 3 }, { "t": 9 }, { "t": 3 }, { "t": 9 }, { "t": 3 }, { "t": 9 }, { "t": 3 }], "s": "Por defecto, no se aplica ning\xFAn filtro ni ordenaci\xF3n fuera de los definidos en los par\xE1metros. Puedes a\xF1adir los filtros y ordenaciones de una vista proporcionando su `id` en el par\xE1metro GET `view_id`. Por ejemplo, si proporcionas el siguiente par\xE1metro GET `view_id=1`, se aplicar\xE1n los filtros y ordenaciones definidos en la vista con id `1`. Puede encontrar el `view_id` en el men\xFA contextual de cualquier vista. Es el n\xFAmero entre par\xE9ntesis detr\xE1s del nombre de la vista. \n\n#### Con `filter__{field}__{filter}`\n\nSe aplicar\xE1 tanto el filtro proporcionado en el par\xE1metro de consulta como los filtros definidos en la vista.\n\n#### Con `order_by`\n\nSi se proporciona `order_by` se ignorar\xE1 la ordenaci\xF3n definida en la vista." } },
    "filtersBuilder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Abrir el creador de par\xE1metros de filtros" } },
    "filters": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }, { "t": 9 }, { "t": 3 }, { "t": 9 }, { "t": 3 }, { "t": 9 }, { "t": 3 }, { "t": 9 }, { "t": 3 }, { "t": 9 }, { "t": 3 }, { "t": 9 }, { "t": 3 }, { "t": 9 }, { "t": 3 }, { "t": 9 }, { "t": 3 }, { "t": 9 }, { "t": 3 }, { "t": 9 }, { "t": 3 }, { "t": 9 }, { "t": 3 }, { "t": 9 }, { "t": 3 }], "s": 'Las filas se pueden filtrar opcionalmente utilizando los mismos filtros de vista que est\xE1n disponibles para las vistas. Este par\xE1metro acepta una cadena serializada JSON que contiene el \xE1rbol de filtros a aplicar a esta vista. El \xE1rbol de filtros es una estructura anidada que contiene los filtros que deben aplicarse. \n\n#### Con `nombres_campo_usuario`:\n\nUn ejemplo de \xE1rbol de filtros v\xE1lido es el siguiente: `{"filter_type": "AND", "filters": [{"field": "Name", "type": "equal", "value": "test"}]}`.\n\n#### Sin `nombres_campo_usuario`:\n\nPor ejemplo, si proporcionas opcionalmente el siguiente par\xE1metro GET: `{"filter_type": "AND", "filters": [{"field": 1, "type": "equal", "value": "test"}]}`.\n\nTen en cuenta que si proporcionas este par\xE1metro, se ignorar\xE1n todos los dem\xE1s `filter__{field}__{filter}`, as\xED como el par\xE1metro tipo_filtro.' } },
    "join": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Permite solicitar una b\xFAsqueda de valores de campo de una tabla de destino a trav\xE9s de campos de fila de v\xEDnculo existentes. El nombre del par\xE1metro debe ser el nombre de un campo de fila de v\xEDnculo existente, seguido de __join. El valor debe ser una lista de nombres de campos para los que deseamos buscar valores adicionales. Puede proporcionar uno o varios campos de destino. No es posible buscar un valor de un campo de fila de v\xEDnculo en la tabla de destino.\n\n #### Con `user_field_names`:\n\n `join` debe ser una lista separada por comas de nombres de campos que se incluir\xE1n en los resultados. Por ejemplo: si proporciona el siguiente par\xE1metro GET `LinkRowField__join=MyField,MyField2`, los valores de `MyField` y `My Field2` en la tabla vinculada por `LinkRowField` se incluir\xE1n en la respuesta.\n\n#### Sin `user_field_names`:\n\n `join` debe ser una lista separada por comas de `field_` seguida del id del campo que se incluir\xE1 en los resultados. Por ejemplo: si proporciona el siguiente par\xE1metro GET `field_1__join=field_2,field_3`, los valores de `field_2` y `field_3` en la tabla vinculada por `field_1` se incluir\xE1n en la respuesta." } },
    "test": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }, { "t": 9 }, { "t": 3 }, { "t": 9 }, { "t": 3 }, { "t": 9 }, { "t": 3 }, { "t": 9 }], "s": '`{"filter_type": "AND", "filters": [{"field": "Nombre", "type": "equal", "value": "prueba"}]}' } }
  },
  "apiDocsIntro": {
    "intro": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "La base de datos " }, { "t": 4, "k": "name" }, { "t": 3, "v": " proporciona una manera f\xE1cil de integrar los datos con cualquier sistema externo. La API sigue la sem\xE1ntica REST, utiliza JSON para codificar objetos y se basa en c\xF3digos HTTP est\xE1ndar, errores de lectura humana y mec\xE1nica para se\xF1alar los resultados de las operaciones." }] } },
    "autoDocDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Esta documentaci\xF3n se genera autom\xE1ticamente en base a las tablas y campos que se encuentran en su base de datos. Si realiza cambios en su base de datos, tabla o campos, es posible que la interfaz API tambi\xE9n haya cambiado. Por lo tanto, aseg\xFArese de actualizar la implementaci\xF3n de su API en consecuencia." } },
    "databaseId": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "El ID de esta base de datos es:" } },
    "jsClient": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cliente API de ejemplo de Javascript:" } },
    "pythonClient": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cliente API de ejemplo de Python:" } }
  },
  "apiDocsTableListFields": {
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Para enumerar los campos de la tabla " }, { "t": 4, "k": "name" }, { "t": 3, "v": ", se debe realizar una solicitud `GET` al extremo de los campos " }, { "t": 4, "k": "name" }, { "t": 3, "v": ". Solo es posible enumerar los campos si el token de la base de datos tiene permisos de lectura, creaci\xF3n o actualizaci\xF3n." }] } },
    "resultFieldProperties": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Propiedades del campo de resultado" } },
    "id": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Clave principal del campo. Se puede usar para generar el nombre de la columna de la base de datos agregando el prefijo `field_`." } },
    "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nombre del campo." } },
    "tableId": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "ID de tabla relacionada." } },
    "order": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Orden de campos en la tabla. 0 para el primer campo." } },
    "primary": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Indica si el campo es un campo principal. Si es `verdadero`, el campo no se puede eliminar y el valor debe representar la fila completa." } },
    "type": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tipo definido para este campo." } },
    "extraProps": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Algunas propiedades adicionales no se describen aqu\xED porque son espec\xEDficas del tipo." } },
    "readOnly": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Indica si el campo es de s\xF3lo lectura. Si es cierto, no es posible actualizar el valor de la celda." } },
    "descriptionField": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Campo descripci\xF3n" } }
  },
  "apiDocsTableDeleteRow": {
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Elimina una fila " }, { "t": 4, "k": "name" }, { "t": 3, "v": " existente." }] } },
    "rowId": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "El identificador \xFAnico de la fila que debe eliminarse." } }
  },
  "apiDocsTableMoveRow": {
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Mueve una fila " }, { "t": 4, "k": "name" }, { "t": 3, "v": " existente antes de otra fila. Si no se proporciona `before_id`, la fila se mover\xE1 al final de la tabla." }] } },
    "rowId": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mueve la fila relacionada con el valor." } },
    "before": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mueve la fila relacionada con el `row_id` dado antes de la fila relacionada con el valor proporcionado. Si no se proporciona, la fila se mover\xE1 al final." } }
  },
  "apiDocsTableUpdateRow": {
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Actualiza una fila " }, { "t": 4, "k": "name" }, { "t": 3, "v": " existente." }] } },
    "rowId": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "El identificador \xFAnico de la fila que debe actualizarse." } },
    "before": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Si se proporciona, la fila reci\xE9n creada se colocar\xE1 antes de la fila con la identificaci\xF3n proporcionada." } }
  },
  "apiDocsTableCreateRow": {
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Crear una nueva fila " }, { "t": 4, "k": "name" }, { "t": 3, "v": "." }] } },
    "before": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Si se proporciona, la fila reci\xE9n creada se colocar\xE1 antes de la fila con la identificaci\xF3n proporcionada." } }
  },
  "apiDocsAuth": {
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Baserow utiliza una autenticaci\xF3n simple basada en tokens. Es necesario generar al menos un token de base de datos en su " }, { "t": 4, "k": "settingsLink" }, { "t": 3, "v": " para utilizar los endpoints descritos a continuaci\xF3n. Es posible dar permisos de creaci\xF3n, lectura, actualizaci\xF3n y eliminaci\xF3n hasta el nivel de tabla por token. Puede autenticarse en la API proporcionando su token en la cabecera HTTP authorization bearer token. Todas las solicitudes de la API deben ser autenticadas y realizadas a trav\xE9s de HTTPS." }] } },
    "settingsLink": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "ajustes" } }
  },
  "apiDocsFilters": {
    "filter": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Filtro" } },
    "exampleValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Valor de ejemplo" } },
    "example": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ejemplo completo" } },
    "field": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "campo " }, { "t": 4, "k": "name" }] } },
    "deprecated": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "obsoleto" } }
  },
  "fieldTextSubForm": {
    "placeholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Texto predeterminado" } }
  },
  "fieldSingleSelectSubForm": {
    "optionsLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Opciones" } },
    "defaultOptionLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Opci\xF3n predeterminada" } }
  },
  "fieldSingleSelectDropdown": {
    "notFound": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Opci\xF3n no encontrada" } }
  },
  "fieldDateSubForm": {
    "dateFormatLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Formato de fecha" } },
    "dateFormatEuropean": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Europeo" } },
    "dateFormatUS": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "EUA" } },
    "dateFormatISO": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "ISO" } },
    "includeTimeLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Incluir tiempo" } },
    "timeFormatLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Formato de tiempo" } },
    "24Hour": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "24 horas" } },
    "12Hour": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "12 horas" } },
    "showTimezoneLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mostrar la zona horaria" } },
    "forceTimezoneLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Establecer la zona horaria para todos los colaboradores" } },
    "subTimezoneOffsetLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Convertir valores (restar " }, { "t": 4, "k": "utcOffsetDiff" }, { "t": 3, "v": " minutos)" }] } },
    "forceTimezoneValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zona horaria" } },
    "addTimezoneOffsetLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Convertir valores (a\xF1adir " }, { "t": 4, "k": "utcOffsetDiff" }, { "t": 3, "v": " minutos)" }] } }
  },
  "fieldLinkRowSubForm": {
    "noTable": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Necesita al menos otra tabla en la misma base de datos para vincular." } },
    "selectTableLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Seleccione una tabla para vincular" } },
    "hasRelatedFieldLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Crear campo relacionado en la tabla vinculada" } },
    "limitToView": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Limitar la selecci\xF3n para mostrar" } },
    "limitToViewDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ten en cuenta que esto es solo visual. A\xFAn es posible establecer relaciones fuera de la vista mediante la tabla relacionada o la API." } },
    "allowMultipleRelations": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Permitir m\xFAltiples relaciones" } }
  },
  "fieldSelectOptions": {
    "add": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "A\xF1adir una opci\xF3n" } }
  },
  "fieldNumberSubForm": {
    "typeLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tipo de n\xFAmero" } },
    "integer": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Entero" } },
    "decimal": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "D\xE9cimal" } },
    "decimalPlacesLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Lugares decimales" } },
    "allowNegative": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Permitir negativo" } },
    "prefixPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Prefijo" } },
    "suffixPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sufijo" } },
    "prefixAndSuffixLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Prefijo / sufijo" } },
    "spaceComma": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Espacio, coma (1 000 000,00)" } },
    "spacePeriod": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Espacio, periodo (1 000 000,00)" } },
    "periodComma": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Punto, coma (1.000.000,00)" } },
    "separatorLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Separador de miles y decimales" } },
    "commaPeriod": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Coma, punto (1.000.000,00)" } },
    "noFormatting": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sin formato" } },
    "defaultValueLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Valor predeterminado" } },
    "defaultValuePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Introduce un valor predeterminado" } }
  },
  "fieldContext": {
    "editField": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Editar campo" } },
    "deleteField": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Eliminar campo" } },
    "hideField": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ocultar campo" } },
    "showField": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mostrar campo" } },
    "changePrimaryField": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cambiar campo principal" } }
  },
  "fieldForm": {
    "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nombre" } },
    "fieldAlreadyExists": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ya existe un campo con este nombre." } },
    "nameNotAllowed": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Este nombre de campo no est\xE1 permitido." } },
    "nameTooLong": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Este nombre de campo es demasiado largo." } },
    "addDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "A\xF1adir descripci\xF3n" } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Descripci\xF3n" } },
    "dbIndex": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\xCDndice" } },
    "dbIndexError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Este tipo de campo no puede tener un \xEDndice. Por favor, elim\xEDnalo antes de guardar o cambia el tipo de campo." } },
    "dbIndexDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Indexar puede mejorar significativamente el rendimiento del filtrado, pero ralentiza las operaciones de creaci\xF3n, actualizaci\xF3n y eliminaci\xF3n." } },
    "defaultValueDisabledByConstraint": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "No se puede establecer un valor predeterminado con una restricci\xF3n de valor \xFAnico" } },
    "dbIndexDisabledTooltip": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "La indexaci\xF3n no est\xE1 disponible para este tipo de campo." } },
    "defaultValueOverriddenByView": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Este campo ya tiene un valor predeterminado definido en la vista y tendr\xE1 preferencia sobre este otro valor predeterminado." } }
  },
  "fieldLookupSubForm": {
    "noTable": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Necesita al menos un campo de fila de v\xEDnculo para crear un campo de b\xFAsqueda." } },
    "selectThroughFieldLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Seleccione un campo de fila de enlace" } },
    "selectTargetFieldLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Seleccione un campo para buscar" } }
  },
  "fieldFormulaNumberSubForm": {
    "typeLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tipo de n\xFAmero" } },
    "integer": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Entero" } },
    "decimal": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "D\xE9cimal" } },
    "decimalPlacesLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Lugares decimales" } },
    "allowNegative": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Permitir negativo" } }
  },
  "fieldRatingSubForm": {
    "maxValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Max" } },
    "color": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Color" } },
    "style": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Estilo" } }
  },
  "rowCreateModal": {
    "addField": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "A\xF1adir campo" } }
  },
  "selectRowContent": {
    "search": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Filas de b\xFAsqueda" } },
    "hideFields": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ocultar campos" } }
  },
  "rowEditModal": {
    "addField": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "A\xF1adir campo" } },
    "showHiddenFields": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mostrar campos ocultos" } },
    "hideHiddenFields": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ocultar campos ocultos" } }
  },
  "rowEditFieldMultipleSelect": {
    "addOption": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Escoge una opci\xF3n" } }
  },
  "rowEditFieldFile": {
    "addFile": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Agregar un archivo" } },
    "sizes": {
      "0": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Bytes" } },
      "1": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "KB" } },
      "2": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "MB" } },
      "3": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "GB" } },
      "4": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "TB" } },
      "5": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "PB" } }
    }
  },
  "rowEditFieldLinkRow": {
    "addLink": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Elige un enlace" } },
    "keepOnlyOneValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mant\xE9n solo un valor. Este campo solo admite una relaci\xF3n. El valor se guarda si queda \xFAnicamente una relaci\xF3n." } }
  },
  "tableCSVImporter": {
    "chooseFileLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Elija el archivo CSV" } },
    "chooseFileDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Puede importar un CSV existente cargando el archivo .CSV con datos tabulares. La mayor\xEDa de las aplicaciones de hojas de c\xE1lculo le permitir\xE1n exportar su hoja de c\xE1lculo como un archivo .CSV." } },
    "chooseFile": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Elija el archivo CSV" } },
    "columnSeparator": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Separador de columnas" } },
    "recordSeparator": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "separador de registros" } },
    "unitSeparator": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Separador de unidades" } },
    "encoding": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Codificaci\xF3n" } },
    "firstRowHeader": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "La primera fila es el encabezado" } },
    "limitFileSize": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "El tama\xF1o m\xE1ximo de archivo es " }, { "t": 4, "k": "limit" }, { "t": 3, "v": " MB." }] } },
    "limitError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "No es posible importar m\xE1s de " }, { "t": 4, "k": "limit" }, { "t": 3, "v": " filas." }] } },
    "emptyCSV": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Este archivo CSV est\xE1 vac\xEDo." } }
  },
  "tableForm": {
    "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nombre" } }
  },
  "tableXMLImporter": {
    "fileLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Elija el archivo XML" } },
    "fileDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Puede importar un XML existente cargando el archivo .XML con datos tabulares, es decir:" } },
    "chooseButton": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Elija el archivo XML" } },
    "processingError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Ocurri\xF3 un error al procesar XML: " }, { "t": 4, "k": "errors" }] } },
    "emptyError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Este archivo XML est\xE1 vac\xEDo." } },
    "limitFileSize": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "El tama\xF1o m\xE1ximo de archivo es " }, { "t": 4, "k": "limit" }, { "t": 3, "v": " MB." }] } },
    "limitError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "No es posible importar m\xE1s de " }, { "t": 4, "k": "limit" }, { "t": 3, "v": " filas." }] } }
  },
  "tableJSONImporter": {
    "fileLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Elija el archivo JSON" } },
    "fileDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Puede importar un archivo JSON existente cargando el archivo .json con datos tabulares, es decir:" } },
    "chooseButton": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Elija el archivo JSON" } },
    "encodingLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Codificaci\xF3n" } },
    "processingError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Ocurri\xF3 un error al analizar JSON: " }, { "t": 4, "k": "error" }] } },
    "arrayError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "El archivo JSON no es una matriz." } },
    "emptyError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Este archivo JSON est\xE1 vac\xEDo." } },
    "limitFileSize": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "El tama\xF1o m\xE1ximo de archivo es " }, { "t": 4, "k": "limit" }, { "t": 3, "v": " MB." }] } },
    "limitError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "No es posible importar m\xE1s de " }, { "t": 4, "k": "limit" }, { "t": 3, "v": " filas." }] } }
  },
  "tablePasteImporter": {
    "pasteLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pegar los datos de la tabla" } },
    "pasteDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Puede copiar las celdas de una hoja de c\xE1lculo y pegarlas a continuaci\xF3n." } },
    "firstRowHeader": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "La primera fila es el encabezado" } },
    "limitError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "No es posible importar m\xE1s de " }, { "t": 4, "k": "limit" }, { "t": 3, "v": " filas." }] } }
  },
  "importFileModal": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Crear nueva tabla" } },
    "importLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\xBFLe gustar\xEDa importar datos existentes?" } },
    "newTable": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Comenzar con una nueva tabla" } },
    "addButton": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Agregar tabla" } },
    "uploading": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Subiendo..." } },
    "preparing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Preparando datos..." } },
    "importError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Algo fall\xF3 durante la importaci\xF3n del archivo" } },
    "openCreatedTable": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Abrir la tabla creada" } },
    "reportTitleFailure": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Filas fallidas" } },
    "reportTitleSuccess": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Importaci\xF3n exitosa, pero..." } },
    "reportMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "No se han podido importar los siguientes \xEDndices de fila:" } },
    "stateRowCreation": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Importando..." } },
    "statePreValidation": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Validando datos..." } },
    "showReport": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mostrar informe de error" } },
    "stateCreateTable": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Creando tabla..." } },
    "additionalImportTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Importar a " }, { "t": 4, "k": "tabla" }] } },
    "showTable": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "mostrar tabla" } },
    "importButton": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Importar" } },
    "fieldMappingTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cartograf\xEDa de campo" } },
    "fieldMappingDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Hemos asignado autom\xE1ticamente las columnas de los campos Baserow en su tabla. Puedes cambiarlas a continuaci\xF3n. Cualquier celda incompatible permanecer\xE1 vac\xEDa despu\xE9s de la importaci\xF3n." } },
    "selectImportMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Selecciona los datos que quieras importar." } },
    "filePreview": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Previsualizar el contenido del archivo" } },
    "importPreview": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Previsualizar la importaci\xF3n" } },
    "changeImporterType": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cambiar el tipo de importaci\xF3n" } },
    "defaultName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tabla" } },
    "useUpsertField": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Actualizar filas si ya existen" } },
    "upsertTooltip": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Coincidir filas existentes usando un campo \xFAnico para sobrescribir los datos con los valores importados." } },
    "restoredFile": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": 'Importando archivo "' }, { "t": 4, "k": "name" }, { "t": 3, "v": '"...' }] } }
  },
  "formulaAdvancedEditContext": {
    "textAreaFormulaInputPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Haga clic para editar la f\xF3rmula" } },
    "fields": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Campos" } },
    "functions": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Funciones" } },
    "operators": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Operadores" } },
    "fieldType": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Un campo " }, { "t": 4, "k": "type" }] } }
  },
  "fieldFormulaInitialSubForm": {
    "formulaInputPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Haga clic para editar la f\xF3rmula" } },
    "refreshFormulaOptions": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Actualizar opciones de f\xF3rmula" } }
  },
  "formulaFieldItemDescription": {
    "syntax": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sintaxis" } },
    "examples": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ejemplos" } }
  },
  "viewSearchContext": {
    "searchInRows": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Buscar en todas las filas" } },
    "hideNotMatching": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "ocultar filas que no coinciden" } }
  },
  "viewsContext": {
    "searchView": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Buscar vistas" } },
    "noViews": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "No se encontraron vistas" } },
    "collaborative": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Colaboraci\xF3n" } }
  },
  "viewFilterTypeLinkRow": {
    "unnamed": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "fila sin nombre " }, { "t": 4, "k": "value" }] } },
    "choose": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "elegir fila" } }
  },
  "viewFilterContext": {
    "addFilter": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "A\xF1adir filtro" } },
    "disableAllFilters": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Todo impedido" } },
    "noFilterTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "A\xFAn no creaste ning\xFAn filtro" } },
    "noFilterText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Los filtros le permiten mostrar filas que se aplican a sus condiciones." } },
    "where": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Donde" } },
    "and": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Y" } },
    "or": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "O" } },
    "relatedFieldNotFound": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "El campo relacionado no se encuentra." } },
    "filterTypeNotFound": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "El tipo de filtro no es compatible." } },
    "noCompatibleFilterTypesErrorTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "No hay tipos de filtro compatibles" } },
    "noCompatibleFilterTypesErrorMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ninguno de sus campos tiene ning\xFAn tipo de filtro compatible" } },
    "addFilterGroup": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "A\xF1adir grupo de filtros" } }
  },
  "viewFilterTypeFileTypeDropdown": {
    "image": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "imagen" } },
    "document": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "documento" } }
  },
  "createViewModal": {
    "createNew": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Crear nueva " }, { "t": 4, "k": "view" }] } },
    "add": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "A\xF1adir " }, { "t": 4, "k": "view" }] } }
  },
  "shareViewLink": {
    "shareView": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Compartir " }, { "t": 4, "k": "viewTypeSharingLinkName" }] } },
    "shareViewTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "A\xFAn no has compartido la vista" } },
    "sharedViewTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Este " }, { "t": 4, "k": "viewTypeSharingLinkName" }, { "t": 3, "v": " se comparte actualmente a trav\xE9s de un enlace privado" }] } },
    "sharedViewDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Las personas que tienen el enlace pueden ver " }, { "t": 4, "k": "viewTypeSharingLinkName" }, { "t": 3, "v": "." }] } },
    "disableLink": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Desactivar enlace compartido" } },
    "generateNewUrl": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "generar nueva url" } },
    "copyURL": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "copiar URL" } },
    "EnablePassword": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Restringir acceso con una contrase\xF1a" } },
    "DisablePassword": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "El acceso est\xE1 protegido con contrase\xF1a" } },
    "ChangePassword": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cambiar" } },
    "shareViewText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "El enlace privado compartible permite que cualquiera pueda ver los datos en esta vista." } },
    "shareViewLinkTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Crear un enlace privado" } },
    "notSharedYetText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Permitir que cualquiera pueda ver los datos en esta vista o sincronizar eventos con su calendario externo." } },
    "createPrivateLink": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Crear un enlace privado" } },
    "shareViewWarningTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Advertencia" } }
  },
  "viewSortContext": {
    "noSortTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Todav\xEDa no has creado una clasificaci\xF3n" } },
    "noSortText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ordenar le permite ordenar filas por un campo." } },
    "sortBy": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ordenar por" } },
    "thenBy": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Luego por" } },
    "addSort": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "elegir un campo para ordenar por" } },
    "hiddenFieldWarning": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Uno o m\xE1s ordenamientos hacen referencia a campos ocultos que no ser\xE1n visibles para editores y roles inferiores." } }
  },
  "viewSort": {
    "sort": { "t": 0, "b": { "t": 1, "c": [{ "t": 2, "i": [{ "t": 3 }], "s": "Ordenar" }, { "t": 2, "i": [{ "t": 3 }], "s": "1 Ordenar" }, { "t": 2, "i": [{ "t": 4, "k": "count" }, { "t": 3, "v": " clasifica" }] }] } }
  },
  "viewRotateSlugModal": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Actualizar URL" } },
    "refreshWarning": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "\xBFEst\xE1 seguro de que desea actualizar la URL de " }, { "t": 4, "k": "viewName" }, { "t": 3, "v": "? Despu\xE9s de actualizar, se generar\xE1 una nueva URL y no ser\xE1 posible acceder a " }, { "t": 4, "k": "viewTypeSharingLinkName" }, { "t": 3, "v": " a trav\xE9s de la antigua URL. Todas las personas con las que haya compartido la URL no podr\xE1n acceder a " }, { "t": 4, "k": "viewTypeSharingLinkName" }, { "t": 3, "v": "." }] } },
    "generateNewURL": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Generar nueva URL" } }
  },
  "viewFieldsContext": {
    "coverField": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "campo de cobertura" } },
    "noCover": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sin cobertura" } },
    "search": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Buscar campos" } },
    "hideAll": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Esconder todo" } },
    "showAll": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mostrar todo" } }
  },
  "viewFilterTypeBoolean": {
    "selected": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Seleccionado" } }
  },
  "viewFilter": {
    "filter": { "t": 0, "b": { "t": 1, "c": [{ "t": 2, "i": [{ "t": 3 }], "s": "Filtro" }, { "t": 2, "i": [{ "t": 3 }], "s": "1 filtro" }, { "t": 2, "i": [{ "t": 4, "k": "count" }, { "t": 3, "v": " filtros" }] }] } },
    "hasAllValuesEqual": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "tiene todos los valores iguales" } },
    "hasValueHigherThan": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "tiene un valor mayor que" } },
    "hasValueHigherThanOrEqual": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "tiene un valor mayor o igual que" } },
    "hasValueLowerThan": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "tiene un valor menor que" } },
    "hasValueLowerThanOrEqual": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "tiene un valor menor o igual que" } },
    "hasNotValueHigherThan": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "no tiene un valor mayor que" } },
    "hasNotValueHigherThanOrEqual": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "no tiene un valor mayor o igual que" } },
    "hasNotValueLowerThan": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "no tiene un valor menor que" } },
    "hasNotValueLowerThanOrEqual": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "no tiene un valor menor que o igual que" } }
  },
  "viewContext": {
    "exportView": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Exportar vista" } },
    "renameView": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Renombrar vista" } },
    "webhooks": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Webhooks" } },
    "deleteView": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Eliminar vista" } },
    "importFile": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Importar archivo" } },
    "duplicateView": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Duplicar vista" } },
    "toPersonal": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "A personal" } },
    "toCollaborative": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "A colaboraci\xF3n" } },
    "defaultRowValues": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Valores predeterminados de fila" } }
  },
  "deleteViewModal": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Eliminar " }, { "t": 4, "k": "name" }] } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "\xBFEst\xE1 seguro de que desea eliminar la vista " }, { "t": 4, "k": "nombre" }, { "t": 3, "v": "? Los datos de la tabla se conservar\xE1n, pero se eliminar\xE1n los filtros, clasificaciones y anchos de campo relacionados con la vista." }] } },
    "delete": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Eliminar vista" } }
  },
  "viewForm": {
    "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nombre" } },
    "whoCanEdit": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\xBFQui\xE9n puede editar esta vista?" } }
  },
  "galleryViewHeader": {
    "customizeCards": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Personalizar tarjetas" } }
  },
  "gridViewHide": {
    "hideField": { "t": 0, "b": { "t": 1, "c": [{ "t": 2, "i": [{ "t": 3 }], "s": "Ocultar campos" }, { "t": 2, "i": [{ "t": 3 }], "s": "1 campo oculto" }, { "t": 2, "i": [{ "t": 4, "k": "count" }, { "t": 3, "v": " campos ocultos" }] }] } }
  },
  "gridViewFieldType": {
    "insertLeft": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Insertar a la izquierda" } },
    "insertRight": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Insertar a la derecha" } },
    "createFilter": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Crear filtro" } },
    "sortField": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Clasificar" } },
    "hideField": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ocultar campo" } },
    "duplicate": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Duplicar campo" } },
    "dataSyncField": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "El campo es de s\xF3lo lectura y forma parte de la sincronizaci\xF3n de datos de la tabla." } },
    "dataSyncFieldTwoWaySync": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "El campo est\xE1 sincronizado con la sincronizaci\xF3n de datos de la tabla." } },
    "noWriteValues": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Los cambios en este campo est\xE1n restringidos." } }
  },
  "gridViewRow": {
    "rowNotMatchingFilters": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "La fila no coincide con los filtros" } },
    "rowNotMatchingSearch": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "La fila no coincide con la b\xFAsqueda" } },
    "rowHasMoved": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "La fila se ha movido" } }
  },
  "gridView": {
    "insertRowAbove": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Insertar fila arriba" } },
    "insertRowBelow": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Insertar fila debajo" } },
    "enlargeRow": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ampliar fila" } },
    "deleteRow": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Borrar fila" } },
    "rowCount": { "t": 0, "b": { "t": 1, "c": [{ "t": 2, "i": [{ "t": 3 }], "s": "Sin filas" }, { "t": 2, "i": [{ "t": 3 }], "s": "1 fila" }, { "t": 2, "i": [{ "t": 4, "k": "count" }, { "t": 3, "v": " filas" }] }] } },
    "selectRow": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Seleccionar fila" } },
    "duplicateRow": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Duplicar fila" } },
    "copyCells": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Copiar c\xE9lulas" } },
    "deleteRows": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Borrar filas" } },
    "hiddenRowsInsertedTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Filas a\xF1adidas" } },
    "hiddenRowsInsertedMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "number" }, { "t": 3, "v": " se han a\xF1adido filas nuevas, pero no son visibles debido a los filtros activos." }] } },
    "copiedRowURLMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "La URL de la fila " }, { "t": 4, "k": "id" }, { "t": 3, "v": " se ha copiado en el portapapeles." }] } },
    "copiedRowURL": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "URL de la fila copiada" } },
    "copyRowURL": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Copiar URL de fila" } },
    "tooManyItemsTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Demasiados art\xEDculos" } },
    "tooManyItemsDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "No es posible actualizar m\xE1s de " }, { "t": 4, "k": "limit" }, { "t": 3, "v": " filas a la vez, as\xED que s\xF3lo actualizamos la primera." }] } },
    "generateCellsValues": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Generar valores con IA" } },
    "AIValuesGenerationErrorTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Fall\xF3 la generaci\xF3n de valor de la IA" } },
    "AIValuesGenerationErrorMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Por favor, comprueba tu API_KEY y verifica el modelo seleccionado." } },
    "copyCellsWithHeader": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Copiar celdas con encabezado" } },
    "generateAllAiValues": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Generar todos los valores de IA" } }
  },
  "gridViewFieldLinkRow": {
    "unnamed": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "fila sin nombre " }, { "t": 4, "k": "value" }] } },
    "keepOnlyOneValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mantener solo un valor" } }
  },
  "gridViewIdentifierOptions": {
    "id": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Identificador de fila" } },
    "count": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "N\xFAmero de filas" } }
  },
  "previewAny": {
    "externalWarning": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Abrir su archivo a trav\xE9s de un servicio externo expone su archivo a sus servidores." } }
  },
  "exportTableModal": {
    "failedTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Exportaci\xF3n fallida" } },
    "failedDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "La exportaci\xF3n fall\xF3 debido a un error del servidor." } },
    "cancelledTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Exportaci\xF3n cancelada" } },
    "cancelledDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "La exportaci\xF3n fue cancelada." } },
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Exportar " }, { "t": 4, "k": "name" }] } }
  },
  "exporterTypeChoices": {
    "formatLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\xBFA qu\xE9 formato le gustar\xEDa exportar?" } }
  },
  "exportTableForm": {
    "viewLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Seleccione la vista para exportar:" } },
    "typeError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "No hay ning\xFAn tipo de exportador disponible, seleccione una vista diferente o la tabla completa." } },
    "includeRowId": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Incluir ID de fila" } },
    "includePrimaryField": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Incluir campo principal" } }
  },
  "exportTableLoadingBar": {
    "export": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Exportar" } },
    "download": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Descargar" } }
  },
  "exportTableDropdown": {
    "exportEntireTable": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Exportar toda la tabla" } }
  },
  "tableCSVExporter": {
    "columnSeparatorLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Separador de columnas" } },
    "recordSeparator": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "separador de registros" } },
    "unitSeparator": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Separador de unidades" } },
    "encodingLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Codificaci\xF3n" } },
    "firstRowIsHeaderLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "La primera fila es el encabezado" } },
    "includeHeader": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Incluir nombres de campos como encabezado" } }
  },
  "apiDocsDatabase": {
    "pageTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Documentaci\xF3n de la API de la base de datos de " }, { "t": 4, "k": "name" }] } },
    "back": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "volver al tablero" } },
    "openDatabase": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "base de datos abierta" } }
  },
  "apiDocsComponent": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "REST API" } },
    "intro": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Una vez que haya creado el esquema de su base de datos y la clave API en " }, { "t": 4, "k": "settingsLink" }, { "t": 3, "v": ", su base de datos Baserow proporciona sus propios puntos finales de API REST para crear, leer, actualizar y eliminar filas." }] } },
    "settings": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "ajustes" } },
    "selectApplicationTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\xBFPara qu\xE9 base de datos desea ver la documentaci\xF3n?" } },
    "signIn": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "inicia sesi\xF3n para empezar" } },
    "back": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "volver al tablero" } }
  },
  "viewAggregationType": {
    "emptyCount": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "Empty" }] } },
    "notEmptyCount": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Lleno" } },
    "emptyPercentage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Porcentaje vac\xEDo" } },
    "notEmptyPercentage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Porcentaje lleno" } },
    "checkedCount": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Comprobado" } },
    "notCheckedCount": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Desenfrenado" } },
    "checkedPercentage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Porcentaje marcado" } },
    "notCheckedPercentage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Porcentaje sin marcar" } },
    "min": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Min" } },
    "max": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Max" } },
    "earliestDate": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Fecha m\xE1s temprana" } },
    "earliestDateShort": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "M\xE1s temprano" } },
    "latestDate": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "fecha m\xE1s reciente" } },
    "latestDateShort": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "M\xE1s reciente" } },
    "uniqueCount": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\xDAnico" } },
    "sum": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sum" } },
    "average": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Promedio" } },
    "median": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Median" } },
    "stdDev": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Desviaci\xF3n Est\xE1ndar" } },
    "stdDevShort": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Desviaci\xF3n Est\xE1ndar" } },
    "variance": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Diferencia" } },
    "count": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Contar" } },
    "distribution": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Distribuci\xF3n" } },
    "othersCount": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Otros" } }
  },
  "databaseForm": {
    "importLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\xBFLe gustar\xEDa importar datos existentes?" } },
    "emptyLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Empezar desde cero" } },
    "airtableLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Importar desde Airtable" } }
  },
  "importFromAirtable": {
    "airtableShareLinkTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Comparte un enlace a tu Base" } },
    "airtableShareLinkDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": 'Para importar tu base de Airtable, necesitas disponer de un enlace compartido de toda la base. En Airtable, haz clic en el bot\xF3n \xABCompartir\xBB en la esquina superior derecha despu\xE9s de abrir tu base. Despu\xE9s, debes escoger la opci\xF3n \xABCompartir mediante enlace". En la ventana emergente de compartir pulsa la pesta\xF1a \xABCompartir p\xFAblicamente\xBB y luego en \xABEnlace privado de solo lectura\xBB. Copia el enlace p\xFAblico y p\xE9galo en el campo de entrada que aparece a continuaci\xF3n.' } },
    "airtableShareLinkBeta": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": 'Esta funcionalidad importar\xE1 la mayor parte de los datos, pero existen incompatibilidades. Por lo tanto, se a\xF1adir\xE1 una tabla llamada "Airtable import report" que contendr\xE1 una lista de cosas que no fueron importadas o que se importaron parcialmente.' } },
    "airtableShareLinkPaste": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pega el enlace aqu\xED" } },
    "importButtonLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Importar desde Airtable" } },
    "openButtonLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Abrir base de datos importada" } },
    "importError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Algo sali\xF3 mal" } },
    "statePending": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Esperando para empezar" } },
    "stateFailed": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Fallido" } },
    "stateFinished": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Terminado" } },
    "stateDownloadingBase": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Descargando el esquema base" } },
    "stateConverting": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Conversi\xF3n a Baserow" } },
    "stateDownloadingFiles": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Descargando archivos" } },
    "stateImporting": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Importando" } },
    "stateImportingTable": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Importando tabla " }, { "t": 4, "k": "table" }] } },
    "errorJobAlreadyRunningTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ya corriendo" } },
    "errorJobAlreadyRunningDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ya se est\xE1 ejecutando otro trabajo de importaci\xF3n. Tienes que esperar a que termine antes de empezar otro." } },
    "linkError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "El enlace deber\xEDa parecerse as\xED: https://airtable.com/shrxxxxxxxxxxxxxx" } },
    "skipFiles": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Omitir la importaci\xF3n de archivos" } },
    "skipFilesHelper": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Una base de Airtable con muchos archivos puede ralentizar la importaci\xF3n. Al habilitar esta opci\xF3n se omite la importaci\xF3n de los archivos." } },
    "useSession": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Autenticaci\xF3n de sesi\xF3n" } },
    "useSessionHelper": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Utiliza esto si la base compartida p\xFAblicamente requiere autenticaci\xF3n." } },
    "sessionDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Si la importaci\xF3n devuelve \xABThe Airtable base requires authentication.\xBB, puede ser que la configuraci\xF3n organizacional de Airtable impida acceder a la base sin autenticarte primero. Para ello, debes extraer manualmente la sesi\xF3n y la firma. Abre la URL de la base p\xFAblica compartida en tu navegador y, si es necesario, inicia sesi\xF3n. Haz clic en el men\xFA de la aplicaci\xF3n en la esquina superior derecha \u2192 \xABM\xE1s herramientas\xBB \u2192 \xABHerramientas de desarrollador\xBB. En la pesta\xF1a \xABAplicaci\xF3n\xBB (en Firefox \xABAlmacenamiento\xBB) selecciona \xABhttps://airtable.com\xBB. Busca los valores de cookie \xAB__Host\u2011airtable\u2011session\xBB y \xAB__Host\u2011airtable\u2011session.sig\xBB y p\xE9galos en los campos que aparecen a continuaci\xF3n." } },
    "sessionLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cookie de sesi\xF3n (__Host\u2011airtable\u2011session)" } },
    "sessionSignatureLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cookie de firma de sesi\xF3n (__Host\u2011airtable\u2011session.sig)" } }
  },
  "viewDecorator": {
    "decorator": { "t": 0, "b": { "t": 1, "c": [{ "t": 2, "i": [{ "t": 3 }], "s": "Color" }, { "t": 2, "i": [{ "t": 3 }], "s": "1 Color" }, { "t": 2, "i": [{ "t": 4, "k": "recuento" }, { "t": 3, "v": " Colores" }] }] } },
    "hiddenFieldWarning": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Las decoraciones se eliminan para editores y roles inferiores porque pueden hacer referencia a campos ocultos." } }
  },
  "chooseSingleSelectField": {
    "addSelectField": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "A\xF1adir campo de selecci\xF3n individual" } },
    "warningWhenNothingToChooseOrCreate": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "No hay campos de selecci\xF3n \xFAnicos para elegir y no tienes permisos para hacer uno." } }
  },
  "viewDecoratorContext": {
    "addDecorator": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "A\xF1adir decorador" } }
  },
  "shareViewEnablePasswordModal": {
    "newPasswordTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Introduce una contrase\xF1a" } },
    "newPasswordDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "El enlace p\xFAblico s\xF3lo ser\xE1 accesible despu\xE9s de introducir la contrase\xF1a. Esta contrase\xF1a se guardar\xE1 encriptada." } },
    "changePasswordTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cambiar contrase\xF1a" } },
    "changePasswordDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Al cambiar la contrase\xF1a, la anterior dejar\xE1 de funcionar. Esta contrase\xF1a se guardar\xE1 encriptada." } },
    "changePasswordSave": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cambiar contrase\xF1a" } },
    "newPasswordSave": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Establecer contrase\xF1a" } }
  },
  "shareViewDisablePasswordModal": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Desactivar la protecci\xF3n de contrase\xF1a" } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\xBFEst\xE1s seguro que quieres desactivar la protecci\xF3n por contrase\xF1a de este enlace p\xFAblico? Al desactivarla, la contrase\xF1a se borrar\xE1 y no ser\xE1 posible recuperarla" } },
    "disable": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Desactivar" } }
  },
  "publicViewAuthLogin": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Esta p\xE1gina est\xE1 protegida por contrase\xF1a" } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Introduce la contrase\xF1a correcta para acceder a la p\xE1gina." } },
    "enter": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Entrar" } },
    "error": {
      "incorrectPasswordTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Contrase\xF1a incorrecta" } },
      "incorrectPasswordText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "La contrase\xF1a proporcionada es incorrecta." } }
    }
  },
  "apiDocsTableDeleteRows": {
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Elimina las filas existentes de " }, { "t": 4, "k": "nombre" }, { "t": 3, "v": "." }] } },
    "items": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Una matriz de identificadores de fila que deben ser eliminados." } }
  },
  "apiDocsTableUpdateRows": {
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Actualiza filas existentes de " }, { "t": 4, "k": "nombre" }, { "t": 3, "v": "." }] } },
    "id": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "La identificaci\xF3n de la fila." } }
  },
  "apiDocsTableCreateRows": {
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Crear nuevas filas de " }, { "t": 4, "k": "nombre" }, { "t": 3, "v": "." }] } },
    "before": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Si se proporciona, las filas reci\xE9n creadas se posicionar\xE1n antes de la fila con la identificaci\xF3n proporcionada." } }
  },
  "importer": {
    "parsing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "An\xE1lisis de datos" } },
    "preparing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Preparando datos" } },
    "inProgress": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "En proceso..." } },
    "loading": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cargando el archivo" } },
    "decoding": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Descodificando datos" } },
    "fieldDefaultName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Campo " }, { "t": 4, "k": "conteo" }] } }
  },
  "formViewMeta": {
    "includeRowId": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Utiliza " }, { "t": 4, "k": "row_id" }, { "t": 3, "v": " para incluir el id de la fila reci\xE9n creada en el URL." }] } }
  },
  "databaseDashboardSidebarLinks": {
    "apiDocumentation": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Documentaci\xF3n del API" } }
  },
  "formViewField": {
    "required": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "obligatorio" } },
    "showWhenMatchingConditions": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "mostrar cuando se cumplen las condiciones" } },
    "addCondition": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "A\xF1adir condici\xF3n" } },
    "descriptionPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Descripci\xF3n" } },
    "addConditionGroup": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "A\xF1adir grupo de condiciones" } },
    "showFieldAs": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mostrar campo como" } },
    "includeAllSelectOptions": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Incluir todas las opciones seleccionadas" } },
    "includeAllSelectOptionsHelper": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Elige las opciones de selecci\xF3n que deben incluirse en el formulario utilizando este desplegable" } },
    "noSelectOptions": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "No hay opciones de selecci\xF3n disponibles." } },
    "noCollaboratorsAvailable": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "No hay colaboradores disponibles." } },
    "cannotSumitValues": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Este campo es de solo lectura y no se mostrar\xE1 en el formulario." } }
  },
  "duplicateFieldContext": {
    "duplicate": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Duplicar campo" } },
    "cloneData": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Copiar datos" } },
    "soon": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Disponible pronto" } },
    "readOnlyField": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Los valores de las c\xE9lulas se rellenar\xE1n autom\xE1ticamente." } }
  },
  "fieldmultipleCollaboratorsDropdown": {
    "notFound": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Colaborador no encontrado" } }
  },
  "gridViewFieldFile": {
    "dropFileHere": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Suelta los archivos aqu\xED" } },
    "dropHere": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dejar caer aqu\xED" } }
  },
  "snapshotsModal": {
    "createLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Crear una nueva imagen instant\xE1nea" } },
    "create": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Crear instant\xE1nea" } },
    "snapshotRestoredErrorTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Se ha producido un error" } },
    "snapshotRestoredErrorMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "La instant\xE1nea no ha podido ser restaurada. Favor de intentarlo m\xE1s tarde." } },
    "snapshotDeletedErrorTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Se ha producido un error" } },
    "snapshotDeletedErrorMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "La imagen no ha podido ser eliminada. Favor de intentarlo otra vez mas tarde." } },
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "im\xE1genes" } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Las instant\xE1neas son una copia completa de tu " }, { "t": 4, "k": "nombre_aplicacion_tipo" }, { "t": 3, "v": " del momento en que fueron creadas. Al restaurarlas se crear\xE1 una duplicaci\xF3n de esos datos. Las instant\xE1neas se eliminan autom\xE1ticamente al cabo de un a\xF1o." }] } },
    "descriptionLimits": { "t": 0, "b": { "t": 1, "c": [{ "t": 2, "i": [{ "t": 3, "v": "Puedes tener un m\xE1ximo de " }, { "t": 4, "k": "n" }, { "t": 3, "v": " instant\xE1neas por espacio de trabajo." }] }, { "t": 2, "i": [{ "t": 3, "v": "Puedes tener un m\xE1ximo de " }, { "t": 4, "k": "n" }, { "t": 3, "v": " instant\xE1neas por espacio de trabajo." }] }, { "t": 2, "i": [{ "t": 3, "v": "Puedes tener un m\xE1ximo de " }, { "t": 4, "k": "n" }, { "t": 3, "v": " instant\xE1neas por espacio de trabajo." }] }] } },
    "snapshot": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Imagen" } },
    "limitReached": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Se ha alcanzado el l\xEDmite de im\xE1genes m\xE1ximas." } },
    "importingState": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Creando" } },
    "reset": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Crear otra" } },
    "cancel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cancelar" } },
    "noSnapshots": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "A\xFAn no hay instant\xE1neas de esta aplicaci\xF3n." } },
    "nameAlreadyExists": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ya existe una instant\xE1nea con este nombre." } }
  },
  "deleteSnapshotModal": {
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "\xBFEst\xE1s seguro de que quieres eliminar permanentemente la imagen instant\xE1nea " }, { "t": 4, "k": "nombre" }, { "t": 3, "v": "?" }] } },
    "confirm": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Borrar" } },
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Borrar imagen instant\xE1nea" } }
  },
  "snapshotListItem": {
    "restore": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "restaurar" } },
    "delete": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "borrar" } },
    "created": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "creada" } }
  },
  "formViewModeType": {
    "form": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Forma" } },
    "formDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Todos los campos son visibles y se apilan verticalmente." } }
  },
  "formViewHeader": {
    "mode": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Modo" } },
    "preview": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Previsualizar" } },
    "fields": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Campos" } }
  },
  "formViewModePreviewForm": {
    "addCoverImage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Agregar una imagen de portada" } },
    "addLogo": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "A\xF1adir un logo" } },
    "noFields": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Este formulario no tiene ning\xFAn campo. Haz clic en un campo de la barra lateral izquierda para a\xF1adir uno." } },
    "titlePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "T\xEDtulo" } },
    "descriptionPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Descripci\xF3n" } },
    "noFieldsTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Este formulario no tiene ning\xFAn campo" } },
    "noFieldsContent": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Haz clic en un campo en la barra lateral izquierda para a\xF1adir uno." } }
  },
  "table": {
    "chooseView": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Elige la vista" } },
    "adjacentRow": {
      "notification": {
        "error": {
          "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Se ha producido un error" } },
          "message": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Se ha producido un error al recuperar la fila adyacente" } }
        },
        "notFound": {
          "next": {
            "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "No hay m\xE1s filas" } },
            "message": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "No hay ninguna fila siguiente" } }
          },
          "previous": {
            "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "No hay m\xE1s filas" } },
            "message": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "No hay fila anterior" } }
          }
        }
      },
      "toast": {
        "notFound": {
          "previous": {
            "message": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "No hay fila anterior" } },
            "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "No hay m\xE1s filas" } }
          },
          "next": {
            "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "No hay m\xE1s filas" } },
            "message": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "No hay siguiente fila" } }
          }
        },
        "error": {
          "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ha ocurrido un error" } },
          "message": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ocurri\xF3 un error al recuperar la fila adyacente" } }
        }
      }
    }
  },
  "rowEditFieldMultipleCollaborators": {
    "addCollaborator": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Elige un colaborador" } }
  },
  "duplicateTableJobType": {
    "duplicatedTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tabla duplicada" } },
    "duplicating": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Duplicando" } },
    "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Duplicar tabla" } }
  },
  "apiDocsUploadFile": {
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Sube un archivo a Baserow cargando el contenido del archivo directamente. Se espera una multiparte de `archivo` que contenga el contenido del archivo. La respuesta se puede utilizar para [subir un archivo a una fila](" }, { "t": 4, "k": "PUBLIC_BACKEND_URL" }, { "t": 3, "v": "/api/redoc/#tag/Database-table-rows/operation/update_database_table_row)." }] } },
    "file": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "La multiparte `archivo` que contiene el contenido del archivo." } }
  },
  "apiDocsUploadFileViaURL": {
    "url": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "La URL que desea que Baserow descargue y cargue en tu nombre." } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Sube un archivo a Baserow descarg\xE1ndolo de la URL proporcionada. La respuesta puede utilizarse para [cargar un archivo en una fila](" }, { "t": 4, "k": "PUBLIC_BACKEND_URL" }, { "t": 3, "v": "/api/redoc/#tag/Database-table-rows/operation/update_database_table_row)." }] } }
  },
  "fileField": {
    "errorEmptyFileNameTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nombre de archivo inv\xE1lido" } },
    "errorEmptyFileNameMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "No puede establecer un nombre vac\xEDo para un archivo." } }
  },
  "viewOwnershipType": {
    "collaborative": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Colabora" } },
    "personal": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Personal" } },
    "collaborativeDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Todos pueden ver todos los datos y cambiar las propiedades si tienen los permisos." } }
  },
  "gridViewRowsAddContext": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Crear varias filas" } },
    "choice": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "A\xF1ade " }, { "t": 4, "k": "rowAmountChoice" }, { "t": 3, "v": " filas" }] } }
  },
  "fieldSelectThroughFieldSubForm": {
    "noTable": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Necesitas al menos un campo de enlace a tabla para crear este campo." } },
    "selectThroughFieldLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Selecciona un campo de enlace a la tabla" } }
  },
  "fieldRollupSubForm": {
    "label": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Funci\xF3n de enrollado" } },
    "selectTargetFieldLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Selecciona un campo para enrollar" } }
  },
  "apiDocsFiltersBuilderModal": {
    "userFieldNames": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nombres de campos de usuario" } },
    "json": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "JSON" } },
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Creador de par\xE1metros de filtros" } },
    "queryParameter": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Par\xE1metro de consulta" } }
  },
  "viewGroupBy": {
    "groupBy": { "t": 0, "b": { "t": 1, "c": [{ "t": 2, "i": [{ "t": 3 }], "s": "Agrupar" }, { "t": 2, "i": [{ "t": 3 }], "s": "Agrupar por 1 campos" }, { "t": 2, "i": [{ "t": 3, "v": "Agrupar por " }, { "t": 4, "k": "cuenta" }, { "t": 3, "v": " campos" }] }] } }
  },
  "rowHistorySidebar": {
    "you": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "T\xFA" } },
    "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Historia" } },
    "empty": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "A\xFAn no hay cambios. Podr\xE1s seguir cualquier cambio a esta fila aqu\xED." } },
    "created": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "cre\xF3 esta fila" } },
    "updated": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "actualiz\xF3 esta fila" } },
    "submitted": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "envi\xF3 esta fila" } },
    "deleted": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "elimin\xF3 esta fila" } },
    "restored": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "restaur\xF3 esta fila" } },
    "createdUndo": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "deshizo la creaci\xF3n de la fila" } },
    "updatedUndo": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "deshizo la actualizaci\xF3n de la fila" } },
    "deletedUndo": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "deshizo la eliminaci\xF3n de la fila" } }
  },
  "viewGroupByContext": {
    "groupBy": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Agrupar por" } },
    "thenBy": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Y luego por" } },
    "addGroupBy": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Elegir un campo por el que agrupar" } },
    "noGroupByTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "A\xFAn no has creado ninguna agrupaci\xF3n" } },
    "noGroupByText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Agrupar filas por un campo." } },
    "hiddenFieldWarning": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Uno o m\xE1s agrupamientos hacen referencia a campos ocultos que no ser\xE1n visibles para editores y roles inferiores." } },
    "maxGroupBysReached": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Puedes agrupar por hasta " }, { "t": 4, "k": "count" }, { "t": 3, "v": " campos." }] } },
    "collapseAllGroups": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Colapsar todo" } },
    "expandAllGroups": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Expandir todo" } }
  },
  "collaboratorAddedToRowNotification": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "sender" }, { "t": 3, "v": " te asign\xF3 a " }, { "t": 4, "k": "nombreDeCampo" }, { "t": 3, "v": " en la fila " }, { "t": 4, "k": "rowId" }, { "t": 3, "v": " en " }, { "t": 4, "k": "nombreDeTabla" }] } },
    "deletedUser": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Un usuario eliminado" } },
    "unknownUser": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Un usuario desconocido" } }
  },
  "fieldCollaboratorSubForm": {
    "notifyUserWhenAdded": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Notificar al usuario cuando se a\xF1ade" } }
  },
  "viewFieldConditionsForm": {
    "addCondition": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "A\xF1adir condici\xF3n" } },
    "addConditionGroup": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "A\xF1adir grupo de condiciones" } }
  },
  "formSubmittedNotification": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Se ha enviado " }, { "t": 4, "k": "nombreDelFormulario" }, { "t": 3, "v": " en la tabla " }, { "t": 4, "k": "nombreDeLaTabla" }, { "t": 3, "v": ":" }] } },
    "moreValues": { "t": 0, "b": { "t": 1, "c": [{ "t": 2, "i": [{ "t": 3 }], "s": "0" }, { "t": 2, "i": [{ "t": 3 }], "s": "y 1 campo m\xE1s." }, { "t": 2, "i": [{ "t": 3, "v": "y " }, { "t": 4, "k": "cuenta" }, { "t": 3, "v": " campos m\xE1s." }] }] } }
  },
  "fieldDurationSubForm": {
    "durationFormatLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Formato de duraci\xF3n" } }
  },
  "fieldPasswordSubForm": {
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "El campo de contrase\xF1a tambi\xE9n puede ser usado por la autenticaci\xF3n de usuario en el constructor de aplicaciones." } },
    "allowEndpointAuthentication": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Permitir la autenticaci\xF3n del punto final (endpoint) API" } },
    "allowEndpointAuthenticationHelp": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Esto expone un punto final (endpoint) donde se pueden comprobar el ID de la fila y la contrase\xF1a para ver si son correctos. Esto permite usar Baserow como servidor de autenticaci\xF3n en el lado del servidor (backend)." } }
  },
  "rowEditFieldPassword": {
    "setPassword": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Establecer contrase\xF1a" } }
  },
  "rowHistoryFieldPassword": {
    "passwordSet": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Se ha establecido la contrase\xF1a" } },
    "passwordUpdated": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Se ha actualizado la contrase\xF1a" } },
    "passwordDeleted": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Se ha borrado la contrase\xF1a" } }
  },
  "fieldLongTextSubForm": {
    "enableRichTextFormatting": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Activar el formato de texto enriquecido" } }
  },
  "dataProviderTypes": {
    "fieldsName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Campos" } }
  },
  "userMentionInRichTextFieldNotification": {
    "deletedUser": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Un usuario eliminado" } },
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "sender" }, { "t": 3, "v": " te mencion\xF3 en el campo " }, { "t": 4, "k": "fieldName" }, { "t": 3, "v": " de la fila " }, { "t": 4, "k": "rowId" }, { "t": 3, "v": " en " }, { "t": 4, "k": "tableName" }] } }
  },
  "databaseImportStep": {
    "tableNameLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nombre de la tabla" } },
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Importa tus datos" } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mueve tus datos a Baserow, en s\xF3lo unos clics." } },
    "tableNamePrefill": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Tabla de " }, { "t": 4, "k": "name" }] } }
  },
  "databaseScratchTrackStep": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\xBFQu\xE9 te gustar\xEDa seguir?" } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Elige entre los casos de uso m\xE1s populares o crea el tuyo propio." } },
    "addYourOwn": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "A\xF1ade el tuyo" } },
    "tableName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nombre de la tabla" } },
    "productsRow1": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Rebranding del sitio web" } },
    "productsRow3": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Campa\xF1a publicitaria de pago" } },
    "teamsRow1": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ventas" } },
    "teamsRow2": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Recursos Humanos" } },
    "teamsRow3": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mercadotecnia" } },
    "tasks": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tareas" } },
    "tasksRow1": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Redise\xF1o del logo" } },
    "campaignsRow1": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Venta de verano" } },
    "campaignsRow2": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Premios de fidelidad" } },
    "campaignsRow3": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Relanzamiento de la marca" } },
    "rowName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nombre de la fila" } },
    "thisIncludes": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Esto incluye:" } },
    "projects": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Proyectos" } },
    "productsRow2": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Investigaci\xF3n de clientes" } },
    "teams": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Equipos" } },
    "tasksRow2": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Enviar correo electr\xF3nico" } },
    "tasksRow3": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Escribir una entrada en el blog" } },
    "campaigns": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Campa\xF1as" } }
  },
  "databaseStep": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Crea tu primera base de datos" } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Selecciona desde d\xF3nde te gustar\xEDa comenzar:" } },
    "databaseNameLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nombre de la base de datos" } },
    "scratch": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Esbozo" } },
    "import": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Archivo" } },
    "airtable": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Airtable" } },
    "template": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Plantilla" } },
    "databaseNamePrefill": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Base de datos de " }, { "t": 4, "k": "name" }] } },
    "workspaceName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Espacio de trabajo de " }, { "t": 4, "k": "name" }] } }
  },
  "ViewFilterTypeDateUpgradeToMultiStep": {
    "migrateButtonText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Migrar al filtro de fecha de varios pasos" } },
    "migrateButtonTooltip": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nuevo filtro disponible. Haga clic para actualizar. Funciona igual." } }
  },
  "formViewMetaControls": {
    "whenSubmittedLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Al enviar el formulario" } },
    "showMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mostrar un mensaje" } },
    "urlRedirect": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Redirigir a URL" } },
    "theMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "El mensaje" } },
    "theURL": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "La URL" } }
  },
  "changePrimaryFieldModal": {
    "primaryFieldLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Campo primario" } },
    "existingPrimary": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "\xAB" }, { "t": 4, "k": "name" }, { "t": 3, "v": "\xBB es actualmente el campo primario." }] } },
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cambiar el campo primario" } },
    "change": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cambiar" } }
  },
  "databaseDashboardResourceLinks": {
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "M\xE1s informaci\xF3n sobre nuestro c\xF3digo" } },
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Documentaci\xF3n de la API" } }
  },
  "databaseScratchTrackFieldsStep": {
    "campaignsDetailsRow3": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Revitaliza tu negocio y cautiva a tu p\xFAblico con un relanzamiento de marca din\xE1mico que se adapte perfectamente a las tendencias actuales del mercado y a los deseos de los clientes." } },
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Elija campos para cada fila" } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Selecciona hasta " }, { "t": 4, "k": "selectedFieldsLimitCount" }, { "t": 3, "v": " campos. Puedes agregarlo m\xE1s tarde." }] } },
    "fieldName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nombre" } },
    "fieldType": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tipo de campo" } },
    "fieldDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Descripci\xF3n" } },
    "fieldDetails": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Detalles" } },
    "fieldNumber": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "N\xFAmero" } },
    "fieldDate": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Fecha" } },
    "fieldBoolean": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Terminado" } },
    "fieldDuration": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Duraci\xF3n" } },
    "fieldUrl": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "URL" } },
    "fieldEmail": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Correo electr\xF3nico" } },
    "fieldRating": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Clasificaci\xF3n" } },
    "fieldCategory": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Categor\xEDa" } },
    "fieldBudget": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Presupuesto" } },
    "fieldCompleted": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Completado" } },
    "fieldNotes": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Notas" } },
    "fieldRole": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Rol" } },
    "fieldPhone": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tel\xE9fono" } },
    "fieldKickoffDate": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Fecha de lanzamiento" } },
    "fieldDueDate": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Fecha prevista" } },
    "fieldActive": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Activo" } },
    "fieldEstimatedDays": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "D\xEDas estimados" } },
    "fieldStartDate": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Fecha de inicio" } },
    "fieldEndDate": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Fecha l\xEDmite" } },
    "projectsCategoryDesign": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dise\xF1o" } },
    "projectsCategoryDevelopment": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Desarrollo" } },
    "projectsCategoryMarketing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Marketing" } },
    "projectsNotesRow1": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Acme est\xE1 buscando un rebranding completo de tu p\xE1gina web con las siguientes pautas." } },
    "projectsNotesRow2": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Investigar si los usuarios actuales de Soylent est\xE1n interesados en un nuevo portal de usuarios." } },
    "projectsNotesRow3": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Me pregunto si vale la pena hacer esto despu\xE9s del boicot a los anuncios de Facebook. Los estudios muestran que las campa\xF1as de anuncios pagos se han vuelto cada vez menos efectivas." } },
    "teamsRoleDesigner": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dise\xF1ador" } },
    "teamsRoleDeveloper": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Desarrollador" } },
    "teamsRoleMarketer": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Comercializador" } },
    "tasksDetailsRow1": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Es necesario mejorar el logotipo para que el CTA sea m\xE1s claro." } },
    "tasksDetailsRow2": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "El dise\xF1o est\xE1 un poco desfasado, por lo que es posible que tengamos que ajustar el mapa de la p\xE1gina aqu\xED tambi\xE9n." } },
    "tasksDetailsRow3": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "El nuevo pie de p\xE1gina debe incluir nuestra informaci\xF3n de contacto y tambi\xE9n un CTA peque\xF1o (pero claro)." } },
    "campaignsDetailsRow1": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\xA1Aumenta tus ahorros con nuestras rebajas de verano, con descuentos imbatibles en todos tus productos favoritos!" } },
    "campaignsDetailsRow2": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aumenta la fidelidad y el compromiso de tus clientes con nuestro atractivo programa de fidelizaci\xF3n, dise\xF1ado para recompensar a tus clientes m\xE1s fieles." } },
    "customFieldsDescriptionRow2": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Vitae justo eget magna fermentum iaculis eu non diam." } },
    "customFieldsDescriptionRow3": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Convallis tellus id interdum velit laoreet id donec ultrices tincidunt." } },
    "customFieldsDescriptionRow1": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Turpis massa tincidunt dui ut ornare lectus sit amet est." } }
  },
  "createTableModal": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Crear nueva tabla" } },
    "defaultName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tabla" } },
    "newTable": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Empezar con una nueva tabla" } },
    "importLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\xBFDeseas importar datos existentes?" } }
  },
  "createTable": {
    "showTable": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mostrar tabla" } },
    "addButton": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "A\xF1adir tabla" } },
    "uploading": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Subiendo..." } },
    "preparing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Preparando los datos..." } },
    "importError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Algo ha ido mal durante la importaci\xF3n del archivo" } },
    "stateRowCreation": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Importando..." } },
    "statePreValidation": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Validando los datos..." } },
    "stateCreateTable": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Creando tabla..." } },
    "importingTable": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": 'Importando tabla "' }, { "t": 4, "k": "name" }, { "t": 3, "v": '"...' }] } }
  },
  "importErrorReport": {
    "reportTitleFailure": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Filas que fallan" } },
    "reportMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "No se han podido importar los siguientes \xEDndices de fila:" } },
    "reportTitleSuccess": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Importaci\xF3n exitosa, pero..." } }
  },
  "createViewLink": {
    "inCompatibleWithDataSync": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Este tipo de vista no es compatible con una tabla de sincronizaci\xF3n de datos." } }
  },
  "dataSyncType": {
    "icalCalendar": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sincronizar iCal" } },
    "syncError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Error de sincronizaci\xF3n" } },
    "postgresql": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sincronizar tabla PostgreSQL" } }
  },
  "createDataSync": {
    "next": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Siguiente" } },
    "fields": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Selecciona los campos que deseas sincronizar" } },
    "create": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Crear y sincronizar tabla" } },
    "error": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Algo sali\xF3 mal durante la sincronizaci\xF3n" } },
    "autoAddLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Agregar autom\xE1ticamente nuevas propiedades" } },
    "autoAddHelper": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Autom\xE1ticamente agrega y sincroniza las propiedades reci\xE9n disponibles del origen de datos en la tabla de Baserow. Ten en cuenta que, para que esto funcione, todas las propiedades deben estar sincronizadas." } },
    "twoWaySyncLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sincronizaci\xF3n bidireccional" } },
    "deleteUnmatchedRowsHelper": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cuando est\xE1 activado, las filas que son eliminadas o ya no son visibles en el origen tambi\xE9n son eliminadas de esta tabla en cada sincronizaci\xF3n. Cuando est\xE1 desactivado, esas filas se mantienen y reutilizan si la fila del origen reaparece." } },
    "deleteUnmatchedRowsLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Elimina filas cuando se eliminan o se ocultan en el origen" } },
    "syncing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sincronizando datos..." } }
  },
  "syncTableModal": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Sincronizar " }, { "t": 4, "k": "name" }] } },
    "sync": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sincronizar tabla" } },
    "hide": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ocultar" } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Esta tabla est\xE1 vinculada a una sincronizaci\xF3n de datos. Al hacer clic en el bot\xF3n de sincronizaci\xF3n, los datos se sincronizar\xE1n con la fuente. Durante este proceso, se coloca un bloqueo en las filas actualizadas, lo que puede ralentizar temporalmente las solicitudes de la API o las modificaciones de la tabla." } }
  },
  "gridViewRowHeight": {
    "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Altura" } },
    "medium": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mediano" } },
    "large": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Grande" } },
    "small": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Peque\xF1o" } }
  },
  "iCalCalendarDataSync": {
    "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "URL de iCal" } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "La sincronizaci\xF3n del calendario iCal, se sincroniza autom\xE1ticamente con las entradas del archivo de calendario de la URL. Solo admite el tipo de archivo ICS (Internet Calendar and Scheduling)." } }
  },
  "postgreSQLDataSync": {
    "host": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Host" } },
    "username": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nombre de usuario" } },
    "password": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Contrase\xF1a" } },
    "database": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Base de datos" } },
    "schema": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Esquema" } },
    "table": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tabla" } },
    "port": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Puerto" } },
    "sslMode": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Modo SSL" } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sincroniza una tabla de PostgreSQL con una tabla de Baserow que coincida con los detalles proporcionados a continuaci\xF3n. Tenga en cuenta que cuando se inicia la sincronizaci\xF3n, se seleccionar\xE1n todas las filas de la tabla proporcionada. Aunque Baserow solo selecciona datos, recomendamos encarecidamente limitar al usuario a una conexi\xF3n de solo lectura." } }
  },
  "configureDataSyncVisibleFields": {
    "syncTable": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sincronizar al guardar" } },
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Modificar los campos sincronizados" } },
    "fields": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Campos sincronizados" } }
  },
  "configureDataSyncSettings": {
    "syncTable": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sincronizar al guardar" } },
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cambiar la sincronizaci\xF3n de datos" } }
  },
  "configureDataSyncModal": {
    "syncSettings": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ajustes de sincronizaci\xF3n" } },
    "syncedFields": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Campos sincronizados" } },
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sincronizaci\xF3n de datos" } }
  },
  "apiDocsPasswordFieldAuthentication": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "autenticaci\xF3n de " }, { "t": 4, "k": "name" }] } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Comprueba si la contrase\xF1a y la fila proporcionadas coinciden con lo almacenado en la celda." } },
    "fieldId": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "El ID del campo donde se debe comprobar la contrase\xF1a." } },
    "rowId": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "El ID de la fila donde se debe comprobar la contrase\xF1a." } },
    "password": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "La contrase\xF1a que debe verificarse para saber si es correcta." } }
  },
  "apiDocsListTables": {
    "listTablesDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Este endpoint solo funciona en combinaci\xF3n con la autenticaci\xF3n mediante token. Enumera todas las tablas a las que el token tiene acceso de crear, leer, actualizar o eliminar." } },
    "listTables": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Listar todas las tablas" } }
  },
  "fieldMultipleSelectSubForm": {
    "optionsLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Opciones" } },
    "defaultOptionsLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Opciones predeterminadas" } }
  },
  "fieldBooleanSubForm": {
    "defaultValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Predeterminado" } }
  },
  "viewFieldConditionItem": {
    "filterMisconfigured": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "El campo al que est\xE1 asociado este filtro ha sido eliminado." } }
  },
  "webhookDeactivatedNotification": {
    "body": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "name" }, { "t": 3, "v": " webhook ha sido desactivado porque fall\xF3 demasiadas veces consecutivamente." }] } }
  },
  "webhookPayloadTooLargeNotification": {
    "body": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "La carga \xFAtil para el webhook " }, { "t": 4, "k": "name" }, { "t": 3, "v": " con ID de evento " }, { "t": 4, "k": "event_id" }, { "t": 3, "v": " era demasiado grande. El contenido se ha dividido en varios lotes, pero los datos que superan el l\xEDmite de lote de " }, { "t": 4, "k": "batch_limit" }, { "t": 3, "v": " fueron descartados." }] } }
  },
  "tablesGuidedTourStep": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Configurar tablas" } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Las tablas almacenan tu informaci\xF3n ordenadamente. Crea una nueva tabla dentro de tu base de datos para comenzar a estructurar tus datos." } }
  },
  "filterSortGroupGuidedTourStep": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Encuentra y organiza tus datos" } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ubica r\xE1pidamente la informaci\xF3n filtrando y ordenando tus filas. Agrupa instant\xE1neamente por cualquiera de los campos para visualizar claramente los patrones y simplificar tus flujos de trabajo." } }
  },
  "addFieldGuidedTourStep": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Personaliza tus datos" } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Haz clic en \xAB+\xBB para a\xF1adir nuevos campos (columnas). Elige entre varios tipos de campo para capturar exactamente lo que m\xE1s importa a tu proyecto." } }
  },
  "createViewGuidedTourStep": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Personaliza tus vistas" } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Crea vistas personalizadas como cuadr\xEDcula, calendario, kanban o galer\xEDa para visualizar tus datos exactamente como los quieres." } }
  },
  "createFormViewGuidedTourStep": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Crear un formulario" } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Construye r\xE1pidamente formularios a partir de tus tablas para recopilar respuestas directamente en tu tabla, agilizando la recopilaci\xF3n de datos." } }
  },
  "viewOptionsGuidedTourStep": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Opciones de vista" } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Haz clic en los tres puntos junto a la vista para exportar, importar, duplicar y configurar un webhook." } }
  },
  "fieldRules": {
    "errorTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Error durante el procesamiento de la regla de campo" } },
    "ruleDoesNotExist": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "La regla no existe" } },
    "ruleTypeDoesNotExist": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "El tipo de regla no existe" } },
    "ruleAlreadyExists": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "La regla ya existe" } }
  },
  "fieldFormViewEditRowSubForm": {
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cada fila obtendr\xE1 un enlace \xFAnico que abre este formulario precargado con los datos de esa fila. Ten en cuenta que todos con acceso de lectura a la tabla y al campo podr\xE1n editar la fila a trav\xE9s de la vista de formulario, incluidos los espectadores y visitantes de una vista compartida p\xFAblicamente." } },
    "notPublicWarning": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Esta vista de formulario no se comparte p\xFAblicamente. El enlace de edici\xF3n no funcionar\xE1 hasta que el formulario se haga p\xFAblico." } },
    "formDoesNotExist": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "El formulario seleccionado ya no existe." } },
    "selectFormViewLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Vista de formulario" } },
    "notPublic": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "(no p\xFAblico)" } }
  },
  "rowEditFieldFormViewEditRow": {
    "noFormView": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "No hay vista de formulario configurada" } },
    "copyLink": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Copiar enlace" } }
  },
  "defaultValuesModal": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Valores predeterminados para " }, { "t": 4, "k": "name" }] } },
    "setDefaultValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Establecer valor predeterminado" } },
    "removeDefaultValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Eliminar valor predeterminado" } },
    "staticValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Valor est\xE1tico" } }
  },
  "editRowLink": {
    "editRow": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Editar fila" } }
  },
  "gridViewFreezeHandle": {
    "hoverHint": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Arrastrar para congelar columnas" } },
    "freeze": { "t": 0, "b": { "t": 1, "c": [{ "t": 2, "i": [{ "t": 3 }], "s": "Congelar 0 columnas" }, { "t": 2, "i": [{ "t": 3 }], "s": "Congelar 1 columna" }, { "t": 2, "i": [{ "t": 3, "v": "Congelar " }, { "t": 4, "k": "count" }, { "t": 3, "v": " columnas" }] }] } }
  },
  "tableExcelImporter": {
    "chooseFileDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Puedes importar una hoja de c\xE1lculo existente subiendo un archivo .xlsx, .xls o .ods. Si el archivo contiene varias hojas puedes elegir cu\xE1l de ellas importar." } },
    "limitError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "No es posible importar m\xE1s de " }, { "t": 4, "k": "limit" }, { "t": 3, "v": " filas." }] } },
    "processingError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Ocurri\xF3 un error mientras se procesaba el archivo Excel: " }, { "t": 4, "k": "error" }] } },
    "emptyError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Este archivo Excel no contiene ninguna hoja." } },
    "limitFileSize": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "El tama\xF1o m\xE1ximo del archivo es " }, { "t": 4, "k": "limit" }, { "t": 3, "v": "MB." }] } },
    "emptySheetError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "La hoja seleccionada est\xE1 vac\xEDa." } },
    "firstRowHeader": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "La primera fila es cabecera" } },
    "chooseFileLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Elige un archivo Excel" } },
    "chooseFile": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Elige un archivo Excel" } },
    "sheet": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Hoja" } }
  },
  "viewSearch": {
    "clearSearch": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Limpiar b\xFAsqueda" } }
  },
  "gridViewGroupByBanner": {
    "expandGroup": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Expandir grupo" } },
    "collapseGroup": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Colapsar grupo" } },
    "emptyValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "(Vac\xEDo)" } }
  }
};

export { resource as default };
//# sourceMappingURL=es-aS3BFUOl.mjs.map
