!(function() {
  try {
    var e = false ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
    var n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "2f95def4-6c71-480d-836c-3da90e740136", e._sentryDebugIdIdentifier = "sentry-dbid-2f95def4-6c71-480d-836c-3da90e740136");
  } catch (e2) {
  }
})();
const resource = {
  "paginator": {
    "page": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "P\xE1gina" } },
    "of": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "de " }, { "t": 4, "k": "pages" }] } }
  },
  "copied": {
    "label": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\xA1Copiado!" } }
  },
  "sidebarApplication": {
    "renameApplication": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Renombrar " }, { "t": 4, "k": "type" }] } },
    "viewTrash": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ver basura" } },
    "deleteApplication": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Borrar " }, { "t": 4, "k": "type" }] } },
    "duplicateApplication": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Duplicar " }, { "t": 4, "k": "tipo" }] } },
    "snapshots": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Im\xE1genes" } },
    "rename": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Renombrar" } },
    "duplicate": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Duplicar" } },
    "delete": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Borrar" } }
  },
  "sidebar": {
    "createWorkspace": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Crea un grupo" } },
    "inviteOthers": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Invitar a otros" } },
    "logoff": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cerrar sesi\xF3n" } },
    "errorNoWorkspace": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "No tienes ning\xFAn grupo." } },
    "admin": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Admin" } },
    "dashboard": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tablero" } },
    "trash": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Papelera" } },
    "settings": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mi configuraci\xF3n" } },
    "members": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Miembros" } },
    "notifications": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Notificaciones" } },
    "licenses": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Licencias" } },
    "addNewWorkspace": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "A\xF1adir un nuevo espacio de trabajo" } },
    "adminTools": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Herramientas de administraci\xF3n" } },
    "home": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Inicio" } },
    "adminSettings": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Configuraci\xF3n administrativa" } },
    "general": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "General" } },
    "people": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Personas" } }
  },
  "accountForm": {
    "nameLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tu nombre" } },
    "languageLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Idioma de la interfaz" } }
  },
  "accountSettings": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cuenta" } },
    "changedTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cambiado" } },
    "changedDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "La informaci\xF3n de su cuenta ha sido modificada." } },
    "submitButton": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Actualizar cuenta" } }
  },
  "settingsModal": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mi configuraci\xF3n" } }
  },
  "passwordSettings": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cambia la contrase\xF1a" } },
    "changedTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "contrase\xF1a cambiada" } },
    "changedDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tu contrase\xF1a ha sido cambiada. La pr\xF3xima vez que desee iniciar sesi\xF3n, deber\xE1 utilizar su nueva contrase\xF1a." } },
    "oldPasswordLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Contrase\xF1a anterior" } },
    "oldPasswordRequiredError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Se requiere contrase\xF1a anterior." } },
    "newPasswordLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nueva contrase\xF1a" } },
    "repeatNewPasswordLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Repetir la nueva contrase\xF1a" } },
    "repeatNewPasswordMatchError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Este campo debe coincidir con su nuevo campo de contrase\xF1a." } },
    "submitButton": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cambia la contrase\xF1a" } },
    "errorInvalidOldPasswordTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Contrase\xF1a invalida" } },
    "errorInvalidOldPasswordMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "No se pudo cambiar su contrase\xF1a porque su contrase\xF1a anterior no es v\xE1lida." } }
  },
  "error": {
    "alreadyExistsTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "El usuario ya existe" } },
    "alreadyExistsMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ya existe un usuario con la direcci\xF3n de correo electr\xF3nico proporcionada." } },
    "passwordRequired": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Se requiere una contrase\xF1a." } },
    "invalidEmail": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Por favor, introduce un correo electr\xF3nico v\xE1lido." } },
    "disabledAccountTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cuenta deshabilitada" } },
    "disabledAccountMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Esta cuenta de usuario ha sido deshabilitada." } },
    "incorrectCredentialTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Credenciales incorrectas" } },
    "incorrectCredentialMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "La direcci\xF3n de correo electr\xF3nico o la contrase\xF1a proporcionadas son incorrectas." } },
    "inputRequired": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Se requiere entrada." } },
    "disabledPasswordProviderTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "La autentificaci\xF3n por contrase\xF1a est\xE1 deshabilitada." } },
    "disabledPasswordProviderMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Utilice otro proveedor de autentificaci\xF3n." } },
    "captchaVerificationFailedTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Fall\xF3 la verificaci\xF3n de Captcha" } },
    "captchaVerificationFailedMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "La verificaci\xF3n de Captcha fall\xF3. Por favor, int\xE9ntalo de nuevo." } }
  },
  "field": {
    "language": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Idioma" } },
    "emailAddress": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Direcci\xF3n de correo electr\xF3nico" } },
    "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tu nombre" } },
    "password": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Contrase\xF1a" } },
    "passwordRepeat": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Repite la contrase\xF1a" } }
  },
  "invitationTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Invitaci\xF3n" } },
  "invitationMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "invitedBy" }, { "t": 3, "v": " te ha invitado a unirte a " }, { "t": 4, "k": "workspace" }, { "t": 3, "v": "." }] } },
  "workspaceForm": {
    "nameLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nombre" } }
  },
  "leaveWorkspaceModal": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Abandonar " }, { "t": 4, "k": "group" }] } },
    "message": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "\xBFEst\xE1 seguro de que desea abandonar el grupo " }, { "t": 4, "k": "group" }, { "t": 3, "v": "? Ya no podr\xE1 acceder a las aplicaciones relacionadas y, si desea recuperar el acceso, uno de los administradores debe invitarlo nuevamente. Si abandona el grupo, no se eliminar\xE1. Todos los dem\xE1s miembros seguir\xE1n teniendo acceso a \xE9l. No es posible abandonar un grupo si eres el \xFAltimo administrador porque eso lo dejar\xE1 sin mantenimiento." }] } },
    "leave": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dejar grupo" } }
  },
  "dashboardWorkspace": {
    "showMembers": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Miembros" } },
    "createApplication": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Crear nuevo" } }
  },
  "workspaceInvitation": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Invitaci\xF3n" } },
    "message": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "by" }, { "t": 3, "v": " te ha invitado a unirte a " }, { "t": 4, "k": "group" }, { "t": 3, "v": "." }] } },
    "reject": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Rechazar" } },
    "accept": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aceptar" } }
  },
  "workspaceMemberModal": {
    "membersModalTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "group" }, { "t": 3, "v": " miembros" }] } },
    "userDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "user" }, { "t": 3, "v": " - se uni\xF3 hace " }, { "t": 4, "k": "since" }] } },
    "invitationDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "invitado " }, { "t": 4, "k": "since" }, { "t": 3, "v": " hace" }] } },
    "sendInvite": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Enviar invitaci\xF3n" } },
    "userAlreadyInWorkspaceTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "El usuario ya est\xE1 en el grupo." } },
    "userAlreadyInWorkspaceText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "No es posible enviar una invitaci\xF3n cuando el usuario ya es miembro del grupo." } },
    "userDescriptionPendingDeletion": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "usuario" }, { "t": 3, "v": " - pendiente de borrar" }] } }
  },
  "workspaceInviteForm": {
    "invitationFormTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Invitar por correo electr\xF3nico" } },
    "optionalMessagePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mensaje opcional" } },
    "errorInvalidEmail": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Por favor, introduce una direcci\xF3n de correo electr\xF3nico v\xE1lida." } },
    "errorTooLongMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Los mensajes est\xE1n limitados a " }, { "t": 4, "k": "cantidad" }, { "t": 3, "v": " caracteres." }] } },
    "additionalRoles": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Funciones adicionales" } }
  },
  "workspacesContext": {
    "search": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Buscar grupos" } },
    "noResults": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "No se han encontrado resultados" } },
    "createWorkspace": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Crea un grupo" } }
  },
  "workspaceContext": {
    "renameWorkspace": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Renombrar espacio de trabajo" } },
    "members": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Miembros" } },
    "viewTrash": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ver papelera" } },
    "leaveWorkspace": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Salir del \xE1rea de trabajo" } },
    "deleteWorkspace": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Eliminar espacio de trabajo" } },
    "auditLog": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Registro de auditor\xEDa" } },
    "settings": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ajustes" } },
    "exportWorkspace": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Exportar datos" } },
    "importWorkspace": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Importar datos" } }
  },
  "createWorkspaceModal": {
    "createNew": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Crear grupo nuevo" } },
    "add": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "A\xF1adir grupo" } },
    "defaultName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Grupo sin titulo" } },
    "permissionDeniedTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Permiso denegado" } },
    "permissionDeniedBody": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "No tienes los permisos necesarios para crear un grupo nuevo." } }
  },
  "templateCategories": {
    "search": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Buscar plantillas" } },
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Plantillas" } }
  },
  "templateHeader": {
    "use": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Usar esta plantilla" } }
  },
  "trashSidebar": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Papelera" } },
    "unnamedWorkspace": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Espacio de trabajo sin nombre " }, { "t": 4, "k": "id" }] } },
    "workspaces": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Espacios de trabajo" } }
  },
  "trashContents": {
    "message": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Restaurar elementos eliminados del pasado " }, { "t": 4, "k": "duration" }] } },
    "empty": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "No se ha eliminado nada en los \xFAltimos tres d\xEDas." } },
    "emptyButtonTrashed": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Eliminar " }, { "t": 4, "k": "type" }, { "t": 3, "v": " permanentemente" }] } },
    "emptyButtonNotTrashed": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Vaciar la papelera del " }, { "t": 4, "k": "type" }] } },
    "unnamed": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "type" }, { "t": 3, "v": " " }, { "t": 4, "k": "id" }, { "t": 3, "v": " sin nombre" }] } }
  },
  "trashEmptyModal": {
    "titleIsTrashed": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "\xBFEst\xE1s seguro de que quieres eliminar permanentemente " }, { "t": 4, "k": "name" }, { "t": 3, "v": "?" }] } },
    "titleIsNotTrashed": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "\xBFEst\xE1s seguro de que quieres vaciar la papelera de " }, { "t": 4, "k": "name" }, { "t": 3, "v": "?" }] } },
    "messageIsTrashed": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Esto lo eliminar\xE1 permanentemente junto con todo su contenido. Despu\xE9s de lo cual no se pueden recuperar." } },
    "messageIsNotTrashed": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Esto eliminar\xE1 permanentemente los elementos enumerados. Despu\xE9s de lo cual no se pueden recuperar." } },
    "buttonIsTrashed": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Borrar permanentemente" } },
    "buttonIsNotTrashed": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Vac\xEDo" } }
  },
  "trashEntry": {
    "deletedUser": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Un usuario eliminado" } },
    "fromParent": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "de " }, { "t": 4, "k": "parent" }] } },
    "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "user" }, { "t": 3, "v": " elimin\xF3 " }, { "t": 4, "k": "type" }, { "t": 3, "v": " " }, { "t": 4, "k": "title" }, { "t": 3, "v": " " }, { "t": 4, "k": "parent" }] } },
    "restore": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Restaurar" } },
    "unnamed": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "type" }, { "t": 3, "v": " " }, { "t": 4, "k": "id" }, { "t": 3, "v": " sin nombre" }] } },
    "andMore": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "... y " }, { "t": 4, "k": "cuenta" }, { "t": 3, "v": " m\xE1s" }] } }
  },
  "trashModal": {
    "emptyTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "No se han encontrado espacios de trabajo" } },
    "emptyMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "No eres miembro de ning\xFAn espacio de trabajo. Las aplicaciones como las bases de datos pertenecen a un espacio de trabajo, por lo que para crearlas es necesario crear un espacio de trabajo." } },
    "emptyMessageWithoutCreatePermission": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "No eres miembro de ning\xFAn espacio de trabajo. Las aplicaciones como las bases de datos pertenecen a un espacio de trabajo, por lo que para crearlas necesitar\xE1s que un administrador te invite primero a un espacio de trabajo." } }
  },
  "uploadViaURLUserFileUpload": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Subir desde una URL" } },
    "urlLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "URL" } },
    "urlError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Se requiere una URL v\xE1lida." } }
  },
  "userFilesModal": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Subir desde" } }
  },
  "uploadFileUserFileUpload": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Subir desde mi dispositivo" } },
    "drop": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dejar aqu\xED" } },
    "clickOrDrop": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Haga clic o suelte sus archivos aqu\xED" } },
    "retry": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Volver a intentar" } }
  },
  "createApplicationContext": {
    "fromTemplate": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Desde una plantilla" } },
    "fromTemplateDesc": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Empezar r\xE1pidamente con una de nuestras plantillas recomendadas" } },
    "table": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tabla" } },
    "tableDesc": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Crea un nuevo espacio para gestionar los datos en tu base de datos." } },
    "importWorkspace": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Importar datos" } },
    "importWorkspaceDesc": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "A\xF1adir datos existentes de una instancia Baserow." } }
  },
  "applicationForm": {
    "nameLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nombre" } },
    "namePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Introduce el nombre..." } }
  },
  "connectingNotification": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Reconectando" } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Reconectando con el servidor." } }
  },
  "failedConnectingNotification": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Fallido" } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "La conexi\xF3n con el servidor ha fallado. Actualice la p\xE1gina." } },
    "action": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Actualizar p\xE1gina" } }
  },
  "restoreNotification": {
    "restore": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Restaurar " }, { "t": 4, "k": "type" }, { "t": 3, "v": " eliminado" }] } }
  },
  "errorLayout": {
    "notFound": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "La p\xE1gina que busca no ha sido encontrada. Esto puede deberse a que la URL es incorrecta o que no tiene permiso para ver esta p\xE1gina." } },
    "error": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Algo sali\xF3 mal al cargar la p\xE1gina. Nuestros desarrolladores han sido notificados del problema. Intente actualizar o volver al panel de control." } },
    "backDashboard": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Volver al tablero" } },
    "backLogin": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Atr\xE1s para iniciar sesi\xF3n" } },
    "wrong": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Algo sali\xF3 mal" } },
    "refresh": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Actualizar la p\xE1gina" } }
  },
  "dashboard": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tablero" } },
    "alertTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\xA1Necesitamos tu ayuda!" } },
    "alertText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Al compartir Baserow, nos ayudas a mejorar el producto y a hacerlo m\xE1s \xFAtil para ti." } },
    "tweetContent": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }, { "t": 9 }, { "t": 3 }], "s": "\xA1Eche un vistazo a @baserow, una herramienta de base de datos sin c\xF3digo de c\xF3digo abierto y una alternativa a Airtable!" } },
    "redditTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "'Baserow: una base de datos sin c\xF3digo de c\xF3digo abierto" } },
    "noWorkspaceTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "No se encontraron grupos" } },
    "noWorkspaceText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "No eres miembro de ning\xFAn grupo. Las aplicaciones, como las bases de datos, pertenecen a un grupo, por lo que, para crearlas, debe crear un grupo." } },
    "createWorkspace": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Crea un grupo" } },
    "becomeGithubSponsor": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Convi\xE9rtase en un patrocinador de GitHub" } },
    "starOnGitlab": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "M\xE1rcanos con una estrella en GitLab" } },
    "shareOnTwitter": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tuitea sobre Baserow" } },
    "shareOnReddit": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Compartir en Reddit" } },
    "shareOnFacebook": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Compartir en Facebook" } },
    "shareOnLinkedIn": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Compartir en LinkedIn" } },
    "noWorkspaceTextWithoutCreatePermission": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "No eres miembro de ning\xFAn grupo. Las aplicaciones como las bases de datos pertenecen a un grupo, as\xED que para crearlas tendr\xE1s que ser invitado primero a un grupo por un administrador." } },
    "knowledgeBaseMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Encuentre respuestas a todas sus preguntas" } },
    "tutorials": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tutoriales" } },
    "tutorialsMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Descubre el potencial de Baserow" } },
    "noWorkspaceDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Empieza por crear un nuevo espacio de trabajo" } },
    "resources": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Recursos" } },
    "apiDocumentation": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Documentaci\xF3n API" } },
    "apiDocumentationMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "M\xE1s informaci\xF3n sobre nuestro c\xF3digo" } },
    "suggestedTemplates": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Plantillas sugeridas" } },
    "knowledgeBase": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Base de conocimientos" } },
    "emptyWorkspace": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Este espacio de trabajo est\xE1 vac\xEDo" } },
    "emptyWorkspaceMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Empieza por crear una nueva base de datos o aplicaci\xF3n." } },
    "addNew": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "A\xF1adir nuevo..." } },
    "noWorkspace": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sin espacio de trabajo" } },
    "starOnGitHub": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ap\xF3yanos en GitHub" } }
  },
  "login": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Bienvenido de nuevo" } },
    "forgotPassword": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\xBFOlvidaste tu contrase\xF1a?" } },
    "passwordPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Introduce tu contrase\xF1a..." } },
    "signUpText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\xBFEres nuevo en Baserow?" } },
    "signUp": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Reg\xEDstrate" } },
    "emailPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Introduce tu correo electr\xF3nico..." } },
    "displayPasswordLogin": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Iniciar sesi\xF3n con correo electr\xF3nico y contrase\xF1a" } },
    "redirecting": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Redireccionando al proveedor de autentificaci\xF3n..." } }
  },
  "resetPassword": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Restablecer la contrase\xF1a" } },
    "newPassword": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nueva contrase\xF1a" } },
    "repeatNewPassword": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Repite la contrase\xF1a nueva" } },
    "submit": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cambia la contrase\xF1a" } },
    "changed": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Contrase\xF1a cambiada" } },
    "errorInvalidLinkTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Link inv\xE1lido" } },
    "errorInvalidLinkMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "No se pudo restablecer la contrase\xF1a porque el enlace no es v\xE1lido." } },
    "errorLinkExpiredTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Enlace expirado" } },
    "errorLinkExpiredMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "El enlace de restablecimiento de contrase\xF1a ha caducado. Solicite otro." } },
    "disabled": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "El restablecimiento de la contrase\xF1a est\xE1 desactivado" } },
    "disabledMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "No es posible restablecer la contrase\xF1a porque ha sido desactivada." } },
    "message": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ya puede iniciar sesi\xF3n en Baserow con su nueva contrase\xF1a." } },
    "repeatPasswordPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Repite tu nueva contrase\xF1a" } },
    "errorLinkAlreadyUsedTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Enlace ya utilizado" } },
    "errorLinkAlreadyUsedMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Este enlace de restablecimiento de contrase\xF1a ya ha sido utilizado. Por favor, solicita uno nuevo." } }
  },
  "signup": {
    "headTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Crear una cuenta" } },
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Inscribirse" } },
    "disabled": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Registro est\xE1 deshabilitado" } },
    "disabledMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "No es posible crear una cuenta porque ha sido deshabilitada." } },
    "requireFirstUser": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\xA1Bienvenido a Baserow!" } },
    "requireFirstUserMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Por favor llena la forma de abajo para crear el usuario administrador." } },
    "login": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Iniciar sesi\xF3n" } },
    "passwordPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Introduce tu contrase\xF1a..." } },
    "emailPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Introduce tu correo electr\xF3nico..." } },
    "passwordRepeatPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Confirma tu contrase\xF1a..." } },
    "loginText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\xBFYa tienes una cuenta?" } },
    "namePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Introduce tu nombre..." } },
    "agreeTerms": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Al crear una cuenta, acepta el " }, { "t": 5, "i": 0 }, { "t": 3, "v": " " }, { "t": 5, "i": 1 }, { "t": 3, "v": " " }, { "t": 5, "i": 2 }] } },
    "terms": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Condiciones del servicio" } },
    "privacyPolicy": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pol\xEDtica de privacidad" } }
  },
  "forgotPassword": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Contrase\xF1a olvidada" } },
    "message": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Introduce tu direcci\xF3n de correo electr\xF3nico y te enviaremos un enlace para restablecer tu contrase\xF1a." } },
    "submit": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Enviar enlace" } },
    "confirmation": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Hemos enviado un correo electr\xF3nico a " }, { "t": 4, "k": "email" }, { "t": 3, "v": ", que contiene un enlace para restablecer tu contrase\xF1a de Baserow." }] } },
    "disabled": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Contrase\xF1a olvidada est\xE1 desactivada" } },
    "disabledMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "No es posible restablecer la contrase\xF1a porque ha sido deshabilitada." } },
    "loginText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\xBFYa tienes cuenta y contrase\xF1a?" } },
    "confirmationTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Comprueba tu correo electr\xF3nico" } },
    "goBack": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Volver" } }
  },
  "settings": {
    "settingsTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Configuraci\xF3n de administrador" } },
    "baserowInstanceId": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "ID de instancia" } },
    "instanceIdDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "El ID de instancia es el identificador \xFAnico de su copia de Baserow." } },
    "accountRestrictions": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Restricciones de cuenta" } },
    "settingAllowResetPasswordName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Permitir el restablecimiento de la contrase\xF1a" } },
    "settingAllowResetPasswordDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Por defecto, los usuarios pueden solicitar un enlace para restablecer la contrase\xF1a." } },
    "settingAllowResetPasswordWarning": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ten en cuenta que podr\xEDas bloquearte en el sistema y perder acceso sin opci\xF3n de restablecerse si olvidas tu contrase\xF1a." } },
    "settingAllowNewAccountsName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Permitir crear nuevas cuentas" } },
    "settingAllowNewAccountsDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "De forma predeterminada, cualquier usuario que visite su dominio de Baserow puede registrarse para obtener una nueva cuenta." } },
    "enabled": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "activado" } },
    "settingAllowSignupsViaWorkspaceInvitationsName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Permitir suscripciones a trav\xE9s de invitaciones grupales" } },
    "settingAllowSignupsViaWorkspaceInvitationDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Incluso si la creaci\xF3n de nuevas cuentas est\xE1 deshabilitada, esta opci\xF3n permite que los usuarios invitados directamente sigan creando una cuenta." } },
    "userDeletionGraceDelay": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Eliminaci\xF3n de usuarios" } },
    "settingUserDeletionGraceDelay": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Borrar el plazo de gracia" } },
    "settingUserDeletionGraceDelayDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Este es el n\xFAmero de d\xEDas sin iniciar sesi\xF3n despu\xE9s de los cuales una cuenta programada para ser eliminada se borra permanentemente." } },
    "invalidAccountDeletionGraceDelay": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Este valor es obligatorio y debe ser un entero positivo menor que 32000" } },
    "settingAllowNonStaffCreateWorkspaceOperation": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Permitir a todos crear nuevos grupos" } },
    "settingAllowNonStaffCreateWorkspaceOperationDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Por defecto, todos pueden crear grupos nuevos. Desact\xEDvalo para que s\xF3lo el equipo pueda crear nuevos grupos." } },
    "settingAllowNonStaffCreateWorkspaceOperationWarning": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "A los nuevos usuarios se les crear\xE1 autom\xE1ticamente un grupo en el que ser\xE1n administradores." } },
    "maintenance": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mantenimiento" } },
    "settingTrackWorkspaceUsage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Seguimiento del uso del grupo" } },
    "settingTrackWorkspaceUsageDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Activa un trabajo nocturno que cuenta el uso de filas y archivos por grupo, mostrado en la p\xE1gina de administraci\xF3n de grupos premium." } },
    "userSettings": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Usuario" } },
    "emailVerificationDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Controla si las direcciones de correo electr\xF3nico deben ser verificadas." } },
    "emailVerificationNoVerification": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ninguna verificaci\xF3n" } },
    "emailVerificationEnforced": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Forzado" } },
    "emailVerificationRecommended": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Recomendado" } },
    "emailVerification": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Verificaci\xF3n de correo electr\xF3nico" } },
    "baserowVersion": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Versi\xF3n de Baserow" } },
    "baserowVersionDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "El n\xFAmero de versi\xF3n de esta instancia." } },
    "settingsVerifyImportSignature": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Verificar la firma de importaci\xF3n" } },
    "settingsVerifyImportSignatureDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cuando est\xE1 activada, la firma de los datos importados se verifica para garantizar que los datos no han sido manipulados." } }
  },
  "copyingNotification": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Copiando..." } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Preparando tus datos" } }
  },
  "undoRedoNotification": {
    "undoingTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Deshaciendo..." } },
    "undoingText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Deshaciendo tu acci\xF3n" } },
    "redoingText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Rehaciendo tu acci\xF3n" } },
    "redoneTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Rehecho" } },
    "redoneText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "La acci\xF3n es rehecha" } },
    "noMoreRedo": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "No hay m\xE1s acciones que rehacer" } },
    "skippingRedoDueToError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Rehacer fall\xF3 por un error desconocido, salt\xE1ndolo." } },
    "failed": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Fallido" } },
    "undoneTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Deshecho" } },
    "undoneText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "La acci\xF3n es deshecha" } },
    "noMoreUndo": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "No hay m\xE1s acciones que deshacer" } },
    "skippingUndoDueToError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Deshacer fall\xF3 por un error desconocido, salt\xE1ndolo." } },
    "redoingTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Rehaciendo..." } }
  },
  "AuthorizationErrorNotification": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Error de autorizaci\xF3n" } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Parece que no tienes permisos para ver este recurso." } },
    "action": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Refrescar p\xE1gina" } }
  },
  "formSidebar": {
    "actions": {
      "addAll": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "A\xF1adir todo" } },
      "removeAll": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Eliminar todo" } },
      "addField": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "A\xF1adir campo" } }
    },
    "fieldsDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Todos los campos est\xE1n en la forma." } },
    "prefillInfoLink": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Rellenar los valores din\xE1micamente" } },
    "modal": {
      "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Rellenar u ocultar campos de forma din\xE1mica" } },
      "descriptionPartOne": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Las formas pueden ser pre-rellenadas para ayudar al usuario rellenar la forma m\xE1s r\xE1pido." } },
      "descriptionPartTwo": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Todos los campos disponibles en el formulario se pueden rellenar previamente." } },
      "howToPrefill": {
        "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "C\xF3mo pre-llenar una forma" } },
        "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Si quieres pre-llenar una forma con datos, puedes hacerlo a trav\xE9s de par\xE1metros de consulta a\xF1adidos a la direcci\xF3n p\xFAblica de la forma. Estos par\xE1metros de consulta tienen el prefijo `pre-llenar` para evitar cualquier colisi\xF3n con posibles par\xE1metros de consulta futuros." } }
      },
      "format": {
        "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Formato" } },
        "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "El formato de los par\xE1metros de consulta es:" } },
        "codeSnippet": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "?pre-llenar_&#60;nombre_del_campo&#62;=&#60;valor&#62;" } }
      },
      "example": {
        "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ejemplo" } },
        "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "En el siguiente ejemplo queremos rellenar previamente un campo llamado `Nombre` con el valor de `Mike`" } },
        "codeSnippet": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "?rellenar_Nombre=Mike" } }
      },
      "spaces": {
        "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Espacios" } },
        "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Los espacios en el nombre del campo se sustituyen por `+` para evitar problemas con el par\xE1metro de consulta." } },
        "codeSnippet": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "?rellenar_mi+campo=Mike" } }
      },
      "multipleValues": {
        "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Valores m\xFAltiples" } },
        "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Si quieres rellenar varios campos puedes hacerlo a\xF1adiendo un `,` entre los valores." } },
        "codeSnippet": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "?rellenar_multi+seleccionar=Mike,John" } }
      },
      "specialFieldTypes": {
        "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tipos de campos especiales" } },
        "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "En general, el valor de relleno es el mismo que el valor del campo. Pero hay algunas excepciones en las que el valor se traduce en un valor diferente." } },
        "ratingField": {
          "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Campo de clasificaci\xF3n" } },
          "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Un campo de valoraci\xF3n acepta un n\xFAmero para indicar cu\xE1ntas estrellas deben rellenarse." } },
          "codeSnippet": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "?rellenar_clasificaci\xF3n=3" } }
        },
        "linkRowField": {
          "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Campo de fila de enlace" } },
          "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Un campo de fila de enlace puede aceptar el valor que se muestra en el men\xFA desplegable de selecci\xF3n." } },
          "codeSnippet": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "?rellenar_enlace+fila=Mike" } }
        },
        "selectField": {
          "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Campo de selecci\xF3n simple / selecci\xF3n m\xFAltiple" } },
          "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Un campo de selecci\xF3n simple puede aceptar el valor que se muestra en el desplegable de selecci\xF3n. Lo mismo ocurre con el campo de selecci\xF3n m\xFAltiple, pero tambi\xE9n puede aceptar varios valores." } },
          "codeSnippet": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "?rellenar_selecci\xF3n+simple=Mike" } }
        },
        "dateField": {
          "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Campo de fecha" } },
          "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Un campo de fecha puede aceptar una fecha en los siguientes formatos y utilizar\xE1 el formato de fecha del campo para analizar la fecha." } },
          "codeSnippet": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": `
// Normas
ISO_8601

// Formatos generales
'AAAA-MM-DD',
'AAAA-MM-DD hh:mm A',
'AAAA-MM-DD HH:mm',

// UE
'DD/MM/AAAA',
'DD/MM/AAAA hh:mm A',
"DD/MM/AAAA HH:mm"

// US
'MM/DD/AAAA',
'MM/DD/AAAA hh:mm A',
'MM/DD/AAAA HH:mm'` } }
        }
      },
      "howToHide": {
        "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "C\xF3mo ocultar un campo" } },
        "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Si desea ocultar el campo din\xE1micamente, puede hacerlo a trav\xE9s de los par\xE1metros de consulta agregados a la URL p\xFAblica. Estos par\xE1metros de consulta tienen el prefijo `hide_` para evitar errores con posibles par\xE1metros de consulta futuros." } }
      }
    },
    "prefillOrHideInfoLink": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Rellenar u ocultar din\xE1micamente" } },
    "notifyUserOnSubmit": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Recibir una notificaci\xF3n de env\xEDo" } },
    "rowEditableByDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Las filas de esta tabla pueden actualizarse usando este formulario a trav\xE9s de los siguientes campos de edici\xF3n de fila:" } },
    "rowEditableBy": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Actualizar filas mediante campos" } },
    "fields": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Campos" } }
  },
  "deleteAccountSettings": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Borrar cuenta" } },
    "workspaceNotice": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Los grupos hu\xE9rfanos se borraran" } },
    "orphanWorkspaces": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tambi\xE9n se borrar\xE1 permanentemente despu\xE9s del tiempo de gracia" } },
    "orphanWorkspaceMemberCount": { "t": 0, "b": { "t": 1, "c": [{ "t": 2, "i": [{ "t": 3 }], "s": "compartido con nadie" }, { "t": 2, "i": [{ "t": 3 }], "s": "compartido con un usuario" }, { "t": 2, "i": [{ "t": 3, "v": "compartido con " }, { "t": 4, "k": "cuenta" }, { "t": 3, "v": " usuarios" }] }] } },
    "password": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Contrase\xF1a" } },
    "passwordConfirm": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Repetir contrase\xF1a" } },
    "repeatPasswordMatchError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Este campo debe coincidir con el primer campo de contrase\xF1a." } },
    "submitButton": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Borrar cuenta" } },
    "errorInvalidPasswordTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Contrase\xF1a inv\xE1lida" } },
    "errorInvalidPasswordMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "No se ha podido eliminar tu cuenta porque tu contrase\xF1a no es v\xE1lida." } },
    "errorUserIsLastAdminTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\xDAltimo administrador" } },
    "errorUserIsLastAdminMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "No se ha podido eliminar tu cuenta porque eres el \xFAltimo administrador de esta instancia de Baserow." } },
    "accountDeletedSuccessTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Eliminaci\xF3n de la cuenta programada" } },
    "accountDeletedSuccessMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Se ha programado la eliminaci\xF3n de tu cuenta." } },
    "workspaceLoadingError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "La comprobaci\xF3n de los grupos ha fallado" } },
    "workspaceLoadingErrorDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "La comprobaci\xF3n de los grupos a eliminar ha fallado, favor de actualizar la p\xE1gina." } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Puedes programar la eliminaci\xF3n de tu cuenta introduciendo tu contrase\xF1a y haciendo clic en el bot\xF3n. Tu cuenta ser\xE1 eliminada permanentemente despu\xE9s de " }, { "t": 4, "k": "days" }, { "t": 3, "v": " d\xEDas. Mientras tanto, si vuelves a conectarte, se cancelar\xE1 la eliminaci\xF3n de tu cuenta." }] } },
    "workspaceNoticeDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cuando tu cuenta se elimina permanentemente, todos los grupos y datos asociados para los que eres el \xFAltimo usuario activo con permisos de administrador tambi\xE9n se eliminar\xE1n. Los grupos que se muestran a continuaci\xF3n son los que se borrar\xE1n porque t\xFA eres el \xFAnico administrador. Para evitar que se borren, primero dale a otro usuario permisos de administrador antes de borrar tu cuenta." } }
  },
  "clearingNotification": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Borrando..." } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Preparando tus datos" } }
  },
  "dashboardSidebar": {
    "links": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Enlaces" } },
    "knowledgeBase": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Base de conocimientos" } },
    "tutorials": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tutoriales" } },
    "userSettings": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Configuraci\xF3n de usuario" } },
    "logoff": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Desconectarse" } },
    "workspaces": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Grupos" } },
    "trash": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Basura" } }
  },
  "pastingNotification": {
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Preparar tus datos" } },
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pegando..." } }
  },
  "job": {
    "errorJobAlreadyRunningDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ya se est\xE1 corriendo otro trabajo de importaci\xF3n. Tienes que esperar a que termine ese antes de iniciar otro." } },
    "statePending": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Esperando para empezar..." } },
    "stateStarted": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Empez\xF3..." } },
    "stateFinished": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Terminado" } },
    "stateFailed": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Fallido" } },
    "errorJobAlreadyRunningTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ya est\xE1 corriendo" } },
    "errorJobCannotBeCancelledTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "No se pudo anular" } },
    "errorJobCannotBeCancelledDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "No es posible cancelar el trabajo porque ya se ha completado.\nPor favor, borra la primera instant\xE1nea de la lista para eliminarla." } },
    "stateCanceled": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cancelado" } }
  },
  "datetime": {
    "daysAgo": { "t": 0, "b": { "t": 1, "c": [{ "t": 2, "i": [{ "t": 3 }], "s": "Hace 0 d\xEDas" }, { "t": 2, "i": [{ "t": 3 }], "s": "Hace 1 d\xEDa" }, { "t": 2, "i": [{ "t": 3, "v": "Hace " }, { "t": 4, "k": "n" }, { "t": 3, "v": " d\xEDas" }] }] } },
    "monthsAgo": { "t": 0, "b": { "t": 1, "c": [{ "t": 2, "i": [{ "t": 3 }], "s": "hace 0 meses" }, { "t": 2, "i": [{ "t": 3 }], "s": "hace 1 mes" }, { "t": 2, "i": [{ "t": 3, "v": "hace " }, { "t": 4, "k": "n" }, { "t": 3, "v": " meses" }] }] } },
    "yearsAgo": { "t": 0, "b": { "t": 1, "c": [{ "t": 2, "i": [{ "t": 3 }], "s": "Hace 0 a\xF1os" }, { "t": 2, "i": [{ "t": 3 }], "s": "Hace 1 a\xF1o" }, { "t": 2, "i": [{ "t": 3, "v": "Hace " }, { "t": 4, "k": "n" }, { "t": 3, "v": " a\xF1os" }] }] } },
    "minutesAgo": { "t": 0, "b": { "t": 1, "c": [{ "t": 2, "i": [{ "t": 3 }], "s": "Hace 0 minutos" }, { "t": 2, "i": [{ "t": 3 }], "s": "Hace 1 minuto" }, { "t": 2, "i": [{ "t": 3, "v": "Hace " }, { "t": 4, "k": "n" }, { "t": 3, "v": " minutos" }] }] } },
    "hoursAgo": { "t": 0, "b": { "t": 1, "c": [{ "t": 2, "i": [{ "t": 3 }], "s": "Hace 0 horas" }, { "t": 2, "i": [{ "t": 3 }], "s": "Hace 1 hora" }, { "t": 2, "i": [{ "t": 3, "v": "Hace " }, { "t": 4, "k": "n" }, { "t": 3, "v": " horas" }] }] } },
    "secondsAgo": { "t": 0, "b": { "t": 1, "c": [{ "t": 2, "i": [{ "t": 3 }], "s": "Ahora mismo" }, { "t": 2, "i": [{ "t": 3 }], "s": "Hace 1 segundo" }, { "t": 2, "i": [{ "t": 3, "v": "Hace " }, { "t": 4, "k": "n" }, { "t": 3, "v": " segundos" }] }] } },
    "lessThanMinuteAgo": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "hace menos de un minuto" } },
    "justNow": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "ahora mismo" } }
  },
  "InstallTemplateJobType": {
    "installing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Instalando" } },
    "installedTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Plantilla instalada" } }
  },
  "duplicateApplicationJobType": {
    "duplicatedTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aplicaci\xF3n duplicada" } },
    "duplicating": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Duplicando" } }
  },
  "crudTableSearch": {
    "search": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Buscar" } }
  },
  "membersSettings": {
    "membersTable": {
      "columns": {
        "email": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Correo electr\xF3nico" } },
        "role": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Rol predeterminado" } },
        "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nombre" } },
        "teams": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Equipos" } },
        "highestRole": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cargo m\xE1s alto" } },
        "highestRoleHelpText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "El rol m\xE1s alto asignado a este usuario directamente o desde un equipo, sobre cualquier cosa en este espacio de trabajo" } },
        "highestRoleInstanceHelpText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "El rol m\xE1s alto que este usuario tiene en la instancia" } },
        "2fa": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "2FA" } }
      },
      "actions": {
        "remove": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Quitar del espacio de trabajo" } },
        "copyEmail": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Copiar correo electr\xF3nico" } }
      },
      "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "cuentaDeUsuario" }, { "t": 3, "v": " Miembros en " }, { "t": 4, "k": "nombreDelEspacioDeTrabajo" }] } },
      "inviteMember": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Invitar a un miembro" } }
    },
    "invitesTable": {
      "columns": {
        "role": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Papel por defecto" } },
        "message": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mensaje" } },
        "email": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Correo electr\xF3nico" } }
      },
      "actions": {
        "copyEmail": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Copiar correo electr\xF3nico" } },
        "remove": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cancelar la invitaci\xF3n" } }
      },
      "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "invitacionesCantidad" }, { "t": 3, "v": " Invitaciones pendientes en " }, { "t": 4, "k": "nombreDeEspacioDeTrabajo" }] } }
    },
    "membersInviteModal": {
      "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Invitar a miembros del espacio de trabajo" } },
      "errors": {
        "userAlreadyInWorkspace": {
          "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "El usuario ya est\xE1 en el grupo." } },
          "text": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "No es posible enviar una invitaci\xF3n cuando el usuario ya es miembro del grupo." } }
        }
      },
      "submit": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Enviar invitaci\xF3n" } },
      "helpIconText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "El rol seleccionado ser\xE1 el rol por defecto de los usuarios en este espacio de trabajo." } }
    },
    "membersTabTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Miembros" } },
    "invitesTabTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Invitaciones" } }
  },
  "UserSessionExpiredNotification": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "La sesi\xF3n ha caducado" } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Se ha cerrado la sesi\xF3n porque el token de autenticaci\xF3n ha caducado. Por favor, inicie sesi\xF3n de nuevo." } }
  },
  "memberAssignmentModalFooter": {
    "invite": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Invita a " }, { "t": 4, "k": "count" }] } },
    "selectAll": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Seleccionar todo" } },
    "deselectAll": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Deseleccionar todo" } }
  },
  "memberSelectionList": {
    "searchPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Encuentra..." } },
    "selectedAmountLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "count" }, { "t": 3, "v": " seleccionado" }] } }
  },
  "removeFromWorkspaceModal": {
    "confirmation": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "\xBFEst\xE1s seguro de que quieres eliminar a " }, { "t": 4, "k": "name" }, { "t": 3, "v": " de " }, { "t": 4, "k": "workspaceName" }, { "t": 3, "v": "? Esta acci\xF3n no se puede deshacer." }] } },
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Confirmar la eliminaci\xF3n del grupo" } },
    "remove": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Quitar" } }
  },
  "permissionsUpdatedNotification": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Permisos actualizados" } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Esto puede afectar a lo que tienes acceso. Por favor recarga la p\xE1gina." } },
    "action": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Recargar" } }
  },
  "editRoleContext": {
    "billableRolesLink": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Documentaci\xF3n sobre funciones facturables" } },
    "additionalRoles": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Funciones adicionales" } }
  },
  "highestPaidRoleField": {
    "billable": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Facturable" } }
  },
  "failedConnectingToast": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Fallido" } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "No se pudieron restablecer las actualizaciones en tiempo real. Por favor, actualiza para continuar." } },
    "action": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Refrescar p\xE1gina" } }
  },
  "userSessionExpiredToast": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sesi\xF3n expirada" } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Se ha cerrado la sesi\xF3n porque tu token de autenticaci\xF3n ha expirado. Vuelva a iniciar sesi\xF3n." } }
  },
  "authorizationErrorToast": {
    "action": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Refrescar p\xE1gina" } },
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Error de autorizaci\xF3n" } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Parece que no tienes permiso de ver este recurso." } }
  },
  "restoreToast": {
    "restore": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Restaurar " }, { "t": 4, "k": "tipo" }, { "t": 3, "v": " borrado" }] } }
  },
  "undoRedoToast": {
    "undoneText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "La acci\xF3n est\xE1 deshecha" } },
    "failed": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Fallido" } },
    "undoingTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Deshaciendo..." } },
    "undoneTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Deshecho" } },
    "noMoreUndo": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "No m\xE1s acciones que deshacer" } },
    "redoingTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Rehaciendo..." } },
    "redoneTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Rehecho" } },
    "noMoreRedo": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "No m\xE1s acciones que rehacer" } },
    "undoingText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Deshaciendo tu acci\xF3n" } },
    "skippingUndoDueToError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Deshacer fall\xF3 por un error desconocido, omiti\xE9ndolo." } },
    "redoingText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Rehaciendo tu acci\xF3n" } },
    "redoneText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Acci\xF3n rehecha" } },
    "skippingRedoDueToError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Rehacer fall\xF3 por un error desconocido, omiti\xE9ndolo." } }
  },
  "PastingToast": {
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Preparando tus datos" } },
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pegando..." } }
  },
  "clearingToast": {
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Preparando tus datos" } },
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Borrando..." } }
  },
  "permissionsUpdatedToast": {
    "action": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Recargar" } },
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Permisos actualizados" } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Esto puede afectar a lo que tiene acceso, por favor, vuelve a cargar la p\xE1gina." } }
  },
  "integrationEditForm": {
    "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nombre" } },
    "namePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Introduce el nombre de la integraci\xF3n..." } }
  },
  "integrationCreateEditModal": {
    "editTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Editar integraci\xF3n" } },
    "createTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nueva integraci\xF3n" } },
    "warningTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Advertencia" } }
  },
  "dropdown": {
    "empty": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "No hay elementos disponibles" } }
  },
  "styleSidePanel": {
    "paddingBottom": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Acolchado inferior" } },
    "paddingTop": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Acolchado superior" } }
  },
  "workspaceInvitationAcceptedNotification": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "enviador" }, { "t": 3, "v": " ha aceptado su invitaci\xF3n para unirse a " }, { "t": 4, "k": "nombreDeEspacioDeTrabajo" }] } },
    "deletedUser": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Un usuario eliminado" } }
  },
  "workspaceInvitationCreatedNotification": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "enviador" }, { "t": 3, "v": " te ha invitado a unirte a " }, { "t": 4, "k": "nombreDelEspacioDeTrabajo" }] } },
    "deletedUser": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Un usuario eliminado" } }
  },
  "notificationPanel": {
    "clearAll": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Borrar todo" } },
    "noNotification": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Te notificaremos las actualizaciones importantes y cada vez que te mencionen en Baserow." } },
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Notificaciones" } },
    "markAllAsRead": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Marcar todo como le\xEDdo" } },
    "noNotificationTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "No tienes notificaciones" } },
    "newNotificationsAvailable": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nuevas notificaciones disponibles" } },
    "refresh": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Refrescar" } }
  },
  "clearAllNotificationsConfirmModal": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\xBFEst\xE1s seguro de que quieres borrar todas las notificaciones?" } },
    "message": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Todas las notificaciones se borrar\xE1n permanentemente y no podr\xE1s volver a verlas." } }
  },
  "uploadFileDropzone": {
    "errorTooManyFilesMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "S\xF3lo puedes cargar un \xFAnico archivo" } },
    "drop": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "D\xE9jalo aqu\xED" } },
    "clickOrDrop": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Haz clic o suelta tus archivos aqu\xED" } },
    "errorTooManyFilesTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Demasiados archivos" } },
    "errorWrongFileTypeTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tipo de archivo incorrecto" } },
    "errorWrongFileTypeMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "No se puede cargar un archivo de tipo " }, { "t": 4, "k": "tipo" }] } }
  },
  "connectingToast": {
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Intentando restablecer actualizaciones en tiempo real." } },
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Reconectando" } }
  },
  "copyingToast": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Copiando..." } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Preparando sus datos" } }
  },
  "styleBoxForm": {
    "paddingError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "El valor debe ser un n\xFAmero entero entre 0 y 200." } }
  },
  "richTextEditorMentionsList": {
    "notFound": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "No se encontraron usuarios" } }
  },
  "workspaceInvitationRejectedNotification": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "enviador" }, { "t": 3, "v": " ha rechazado su invitaci\xF3n para unirse a " }, { "t": 4, "k": "nombreDeEspacioDeTrabajo" }] } },
    "deletedUser": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Un usuario eliminado" } }
  },
  "versionUpgradeNotification": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "version" }, { "t": 3, "v": " \xA1ya est\xE1 aqu\xED! Descubre qu\xE9 hay de nuevo." }] } }
  },
  "userPasswordChangedToast": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Contrase\xF1a cambiada" } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tu contrase\xF1a ha cambiado. Por favor, inicia sesi\xF3n de nuevo." } }
  },
  "emailNotifications": {
    "submitButton": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Actualizar la frecuencia" } },
    "label": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Menciones, comentarios, y otras notificaciones" } },
    "daily": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "A diario" } },
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Notificaciones por correo electr\xF3nico" } },
    "never": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nunca" } },
    "weekly": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Semanal" } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Configure la frecuencia de env\xEDo de correos electr\xF3nicos a tu bandeja de entrada." } },
    "instant": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Al instante" } }
  },
  "dataExplorer": {
    "emptyText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "No hay datos" } },
    "noMatchingNodesText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "No se han encontrado resultados coincidentes." } },
    "noProvidersText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "No se han encontrado proveedores de datos. Para empezar puedes, por ejemplo, a\xF1adir una fuente de datos o un par\xE1metro de p\xE1gina." } }
  },
  "formulaInputField": {
    "errorInvalidFormula": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "La f\xF3rmula es inv\xE1lida." } },
    "advancedFormulaMode": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Modo de f\xF3rmula avanzado" } },
    "invalidSyntax": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "No es una f\xF3rmula experta v\xE1lida, por favor verifica la sintaxis." } },
    "invalidFormulaTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "F\xF3rmula inv\xE1lida" } }
  },
  "integrationDropdown": {
    "noIntegrations": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "No se han encontrado integraciones." } },
    "addIntegration": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "A\xF1adir nueva integraci\xF3n" } },
    "integrationPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Selecciona una integraci\xF3n" } },
    "selectTypeFirst": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Primero elige el tipo" } }
  },
  "richTextEditorBubbleMenu": {
    "bold": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Negrita" } },
    "italic": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cursiva" } },
    "underline": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Subraye" } },
    "strikethrough": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tachado" } },
    "link": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Enlace" } },
    "linkEditPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "URL del enlace..." } },
    "linkEditDone": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Hecho" } }
  },
  "richTextEditorFloatingMenu": {
    "hierarchy": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Jerarqu\xEDa" } },
    "lists": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Listas" } },
    "paragraph": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "P\xE1rrafo" } },
    "heading1": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "T\xEDtulo 1" } },
    "heading2": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "T\xEDtulo 2" } },
    "heading3": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "T\xEDtulo 3" } },
    "orderedList": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Lista numerada" } },
    "unorderedList": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Lista de puntos" } },
    "code": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "C\xF3digo" } },
    "taskList": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Lista de tareas" } }
  },
  "generativeAIModelType": {
    "openai": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "OpenAI" } },
    "openaiApiKeyLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Clave de API" } },
    "openaiOrganization": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Organizaci\xF3n (opcional)" } },
    "openaiModelsLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Modelos activados" } },
    "openaiModelsDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Proporciona una lista de [modelos OpenAI] separados por comas (https://platform.openai.com/docs/models/continuous-model-upgrades) que se pueden utilizar en Baserow. (por ejemplo, `gpt-3.5-turbo,gpt-4`)" } },
    "ollama": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ollama" } },
    "ollamaHostLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Host" } },
    "ollamaHostDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Proporciona el nombre del host a tu servidor [Ollama] (https://ollama.com/). Esto normalmente se ejecuta localmente en tu propio dispositivo." } },
    "ollamaModelsLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Modelos activados" } },
    "openaiApiKeyDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Proporciona una clave de API de OpenAI si deseas activar la integraci\xF3n. [Instrucciones para obtener una clave de API](https://help.openai.com/en/articles/4936850-where-do-i-find-my-openai-api-key)." } },
    "ollamaModelsDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Proporciona una lista de [modelos instalados de Ollama] separados por comas (https://ollama.com/library). Ten en cuenta que el modelo debe ser descargado e instalado antes de que pueda ser utilizado. (por ejemplo, `llama2,mistral`)" } },
    "anthropicApiKeyLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Clave API" } },
    "mistralModelsLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Modelos habilitados" } },
    "mistralApiKeyDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Proporciona una clave API de Mistral si deseas habilitar la integraci\xF3n. [Instrucciones para obtener una clave API](https://docs.mistral.ai/getting-started/quickstart/)." } },
    "anthropic": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Anthropic" } },
    "anthropicModelsLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Modelos habilitados" } },
    "anthropicApiKeyDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Proporciona una clave API de Anthropic si deseas activar la integraci\xF3n. [Instrucciones para obtener una clave API](https://docs.anthropic.com/en/api/getting-started)." } },
    "anthropicModelsDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Proporciona una lista de [modelos de Anthropic] separados por comas (https://docs.anthropic.com/en/docs/about-claude/models) que puedan utilizarse en Baserow. (e.g. `claude-3-5-sonnet-20241022,claude-3-opus-20240229`)" } },
    "mistral": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mistral" } },
    "mistralApiKeyLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Clave API" } },
    "mistralModelsDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Proporciona una lista de [modelos Mistral] separados por comas (https://docs.mistral.ai/getting-started/models/models_overview/) que pueden utilizarse en Baserow. (por ejemplo, `mistral-large-latest,mistral-small-latest`)" } },
    "openRouterApiKeyLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Clave API" } },
    "openRouterOrganization": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Organizaci\xF3n (opcional)" } },
    "openRouter": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "OpenRouter" } },
    "openRouterApiKeyDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Proporciona una clave API de OpenRouter si deseas habilitar la integraci\xF3n. [Obtener una clave de API](https://openrouter.ai/settings/keys)." } },
    "openRouterModelsLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Modelos habilitados" } },
    "openRouterModelsDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Proporciona una lista de [OpenRouter models](https://openrouter.ai/models) separados por comas que pueden ser utilizados en Baserow. (por ejemplo, `openai/gpt-4o,anthropic/claude-3-haiku`)" } },
    "openaiBaseUrl": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "URL base" } },
    "openaiBaseUrlDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Utiliza la URL base predeterminada de OpenAI de forma predeterminada si est\xE1 vac\xEDa. Opcionalmente puede cambiarse a https://eu.api.openai.com/v1, https://&#60;your-resource-name&#62;.openai.azure.com, o cualquier otra API compatible con OpenAI." } }
  },
  "generativeAIWorkspaceSettings": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Configuraci\xF3n de la IA generativa" } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Estos ajustes pueden utilizarse para establecer opcionalmente la configuraci\xF3n de la IA generativa en el nivel del espacio de trabajo. Funciones como el campo de IA pueden estar desactivadas porque carecen de una clave API para uno de los modelos compatibles. Proporcionando los ajustes aqu\xED, puedes habilitar esas caracter\xEDsticas. Si dejas un valor en blanco, se restablecer\xE1 la configuraci\xF3n global de la instancia. Ten en cuenta que todos los usuarios del espacio de trabajo compartir\xE1n esta configuraci\xF3n." } },
    "changedTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Configuraci\xF3n actualizada correctamente" } },
    "changedDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Los ajustes se han actualizado y ahora se utilizar\xE1n en este espacio de trabajo." } },
    "submitButton": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Actualizar ajustes" } },
    "hideSettings": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ocultar ajustes" } },
    "openSettings": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Abrir ajustes" } }
  },
  "workspaceSettingsModal": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ajustes del espacio de trabajo" } }
  },
  "workspaceSettingType": {
    "generativeAI": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "IA generativa" } }
  },
  "dashboardVerifyEmail": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Revisa tu buz\xF3n y haz clic en el enlace para verificar tu correo electr\xF3nico." } },
    "resendConfirmationEmail": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Reenviar correo electr\xF3nico de confirmaci\xF3n" } }
  },
  "resendEmailVerification": {
    "confirmationEmailSentDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Se ha enviado el correo electr\xF3nico de confirmaci\xF3n." } },
    "confirmationEmailSentTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Correo electr\xF3nico de confirmaci\xF3n enviado" } }
  },
  "verifyEmailAddress": {
    "confirmation": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tu correo electr\xF3nico ha sido verificado." } },
    "disabledPasswordProvider": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Se ha desactivado el proveedor de autenticaci\xF3n de contrase\xF1a." } },
    "emailMismatchWarning": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ten en cuenta que el correo electr\xF3nico verificado no pertenece a la cuenta que est\xE1s utilizando actualmente." } },
    "goToDashboard": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ir al panel" } },
    "invalidToken": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "No es un token de confirmaci\xF3n v\xE1lido." } }
  },
  "emailNotVerified": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Se requiere verificaci\xF3n de correo electr\xF3nico" } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Por favor, revisa tu buz\xF3n y haz clic en el enlace para verificar. Una vez verificada, se activar\xE1 su cuenta." } },
    "resend": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Reenviar correo electr\xF3nico de confirmaci\xF3n" } }
  },
  "onboarding": {
    "creating": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Creaci\xF3n de tu primer espacio de trabajo" } },
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Visita guiada" } },
    "continue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Continuar" } },
    "skip": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Saltar por ahora" } },
    "cancel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "No quiero ayuda para configurar" } },
    "failedTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Algo sali\xF3 mal" } },
    "failedDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "La visita guiada no se complet\xF3, aunque algunas partes podr\xEDan haberse completado." } },
    "failedTryAgain": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Int\xE9ntalo de nuevo" } },
    "failedSkip": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Saltar la visita guiada" } }
  },
  "teamStep": {
    "creativeProductionTeam": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Producci\xF3n creativa" } },
    "otherPersonalTeam": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Otros / personal" } },
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\xA1Construyamos juntos tu primer espacio de trabajo!" } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\xBFEn qu\xE9 equipo est\xE1s?" } },
    "marketingTeam": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mercadotecnia" } },
    "productAndDesignTeam": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Producto y dise\xF1o" } },
    "engineeringTeam": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ingenier\xEDa" } },
    "operationsTeam": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Operaciones" } },
    "itAndSupportTeam": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "TI y asistencia" } },
    "hrAndLegalTeam": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Recursos humanos y legal" } },
    "financeTeam": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Finanzas" } },
    "salesAndAccountManagementTeam": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ventas y gesti\xF3n de cuentas" } },
    "customerServiceTeam": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Servicio al cliente" } },
    "manufacturingTeam": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Fabricaci\xF3n" } }
  },
  "workspaceStep": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Crear tu espacio de trabajo" } },
    "workspaceLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nombre del espacio de trabajo" } }
  },
  "selectAIModelForm": {
    "AIType": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tipo de IA" } },
    "AIModel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Modelo de IA" } },
    "fileField": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Campo de archivo" } },
    "temperatureLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Temperatura" } },
    "temperatureDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "La temperatura de un LLM, un par\xE1metro establecido entre 0 y " }, { "t": 4, "k": "max" }, { "t": 3, "v": ", ajusta la aleatoriedad de la respuesta: los valores m\xE1s bajos producen respuestas centradas, mientras que los valores m\xE1s altos aumentan la creatividad." }] } }
  },
  "inviteStep": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Invitar a colaboradores" } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Siempre puedes a\xF1adir m\xE1s despu\xE9s." } },
    "collaboratorsLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Colaboradores" } }
  },
  "moreStep": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cu\xE9ntanos un poco m\xE1s" } },
    "roleOrJob": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Funci\xF3n o puesto..." } },
    "people": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\xBFCu\xE1ntas personas hay en tu equipo?" } },
    "country": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pa\xEDs" } },
    "share": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Estoy de acuerdo en compartir esto con el equipo de Baserow" } },
    "how": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\xBFC\xF3mo te enteraste de nosotros?" } },
    "howReviewSite": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sitio de rese\xF1as / mercado" } },
    "howSearchEngine": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Motor de b\xFAsqueda (Google/Bing)" } },
    "howFriend": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "De un amigo" } },
    "howColleague": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "De un colega" } },
    "howEvent": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Evento o seminario web" } },
    "howOther": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Otro" } },
    "howSocialMedia": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Redes sociales" } },
    "howOnlineAds": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Anuncios en l\xEDnea" } },
    "howContent": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Contenido (blog/bolet\xEDn/video)" } },
    "howSales": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Prospecci\xF3n de ventas" } }
  },
  "colorInput": {
    "default": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Por defecto" } }
  },
  "imageInput": {
    "labelButton": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Subir" } },
    "labelDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Selecciona una imagen para subir..." } }
  },
  "dashboardApplication": {
    "createdAt": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "creado" } }
  },
  "templateCard": {
    "viewMore": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ver m\xE1s" } }
  },
  "dataExplorerNode": {
    "showMore": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mostrar m\xE1s repeticiones" } },
    "selectNode": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Seleccionar" } }
  },
  "exportWorkspaceModal": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Exportar" } },
    "export": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Exportar datos" } },
    "importingState": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Importaci\xF3n de" } },
    "created": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "creado" } },
    "exportSettings": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Configuraci\xF3n de exportaci\xF3n" } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sus datos se exportar\xE1n como un archivo ZIP, que puede importarse a otra instancia de Baserow." } },
    "reset": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Iniciar nuevo" } },
    "download": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Descargar" } },
    "cancel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cancelar" } },
    "noExports": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "A\xFAn no hay exportaciones para este espacio de trabajo." } },
    "exportingState": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Exportando..." } },
    "exportingTableState": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Exportando: " }, { "t": 4, "k": "table" }] } },
    "exportingCreateArchiveState": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Creando archivo" } }
  },
  "exportWorkspaceForm": {
    "exportSettingsLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Configuraci\xF3n de exportaci\xF3n" } },
    "onlyStructureLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Exportar s\xF3lo la estructura" } },
    "onlyStructureDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Si se activa, s\xF3lo se exportar\xE1 la estructura de las aplicaciones. No se incluir\xE1n los datos." } },
    "selectDataToExport": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Seleccionar datos para exportar" } },
    "selectAll": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Seleccionar todo" } },
    "deselectAll": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Deseleccionar todo" } }
  },
  "importWorkspaceModal": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Importar datos de Baserow" } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Puedes importar los datos de un Baserow existente cargando el archivo .zip desde otra instancia de Baserow." } },
    "import": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Importar datos" } },
    "upload": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cargar" } },
    "done": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Listo" } },
    "deselectAll": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Deseleccionar todo" } },
    "selectAll": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Seleccionar todo" } },
    "applications": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aplicaciones" } },
    "successTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Importados con \xE9xito los datos Baserow" } },
    "successMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "count" }, { "t": 3, "v": " aplicaciones importadas" }] } },
    "signatureVerificationNote": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "No es posible importar un archivo zip de una fuente no fiable." } },
    "invalidResourceTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Recurso inv\xE1lido" } },
    "cancel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cancelar" } },
    "close": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cerrar" } },
    "uploading": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cargando..." } },
    "retry": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Reintentar" } },
    "databases": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Bases de datos" } },
    "chooseFile": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Elegir archivo" } },
    "selectApplications": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Seleccionar datos para importar" } },
    "invalidResourceMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "El archivo proporcionado no es una exportaci\xF3n Baserow v\xE1lida." } },
    "untrustedPublicKeyTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Firma no fiable" } },
    "untrustedPublicKeyMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "El archivo proporcionado est\xE1 firmado con una clave p\xFAblica no fiable. Pida a su administrador que a\xF1ada la clave p\xFAblica a la lista de claves de confianza o desactive la verificaci\xF3n de firma para poder importar este archivo." } },
    "uploadAndImport": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Subir e importar" } },
    "importingState": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Importando..." } },
    "importingTableStructure": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Creando: " }, { "t": 4, "k": "table" }] } },
    "importingTableData": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Importando datos: " }, { "t": 4, "k": "table" }] } }
  },
  "user": {
    "isStaff": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Es staff" } },
    "isWorkspaceAdmin": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Es administrador de grupo" } },
    "active": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Activo" } },
    "deactivated": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Desactivado" } }
  },
  "adminType": {
    "dashboard": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tablero" } },
    "users": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Usuarios" } },
    "workspaces": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Grupos" } }
  },
  "workspacesAdminTable": {
    "allWorkspaces": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Todos los grupos" } },
    "id": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "ID" } },
    "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nombre" } },
    "members": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Miembros" } },
    "applications": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aplicaciones" } },
    "created": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Creado" } },
    "seatsTaken": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Asientos ocupados" } },
    "storageUsage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Almacenamiento utilizado (MB)" } },
    "usageHelpText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Calculado por la noche cuando la configuraci\xF3n de uso grupal est\xE1 habilitada" } },
    "rowCount": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Recuento de filas" } },
    "freeUsers": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Usuarios gratuitos" } }
  },
  "editWorkspaceContext": {
    "delete": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Eliminado permanentemente" } }
  },
  "deleteWorkspaceModal": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Eliminar " }, { "t": 4, "k": "name" }] } },
    "confirmation": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "\xBFEst\xE1 seguro de que desea eliminar el grupo: " }, { "t": 4, "k": "name" }, { "t": 3, "v": "?" }] } },
    "comment": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "El grupo se eliminar\xE1 de forma permanente, incluidas las aplicaciones relacionadas. No es posible deshacer esta acci\xF3n." } },
    "delete": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Eliminar grupo " }, { "t": 4, "k": "name" }] } }
  },
  "activeUsers": {
    "newUsers": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nuevos usuarios" } },
    "activeUsers": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Usuarios activos" } }
  },
  "usersAdminTable": {
    "allUsers": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Todos los usuarios" } },
    "id": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "id" } },
    "username": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nombre de usuario" } },
    "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nombre" } },
    "workspaces": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Grupos" } },
    "lastLogin": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\xDAltimo acceso" } },
    "dateJoined": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Inscrito" } },
    "active": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Activo" } },
    "twoFactorAuth": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "2FA" } }
  },
  "editUserContext": {
    "changePassword": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cambiar la contrase\xF1a" } },
    "delete": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Borrar permanentemente" } },
    "impersonate": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Suplantar" } }
  },
  "changePasswordForm": {
    "newPassword": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nueva contrase\xF1a" } },
    "repeatPassword": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Repetir contrase\xF1a" } },
    "changePassword": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cambiar contrase\xF1a" } },
    "error": {
      "doesntMatch": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Este campo debe coincidir con su campo de contrase\xF1a." } }
    }
  },
  "userForm": {
    "fullName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nombre completo" } },
    "email": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Email" } },
    "isActive": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Est\xE1 activo" } },
    "warning": {
      "changeEmail": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cambiar la direcci\xF3n de correo electr\xF3nico de este usuario significa que cuando inician sesi\xF3n deben usar la nueva direcci\xF3n de correo electr\xF3nico para hacerlo. Esto debe ser comunicado con ese usuario." } },
      "inactiveUser": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cuando un usuario se marca como inactivo, no puede iniciar sesi\xF3n." } },
      "userStaff": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Convertir al usuario en personal le da acceso de administrador a todos los usuarios, todos los espacios de trabajo, y la capacidad de revocar tus propios permisos de personal." } }
    },
    "error": {
      "invalidName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ingrese un nombre completo v\xE1lido, debe tener m\xE1s de 2 letras y menos de 150." } },
      "invalidEmail": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Por favor, introduce una direcci\xF3n de correo electr\xF3nico v\xE1lida." } }
    },
    "removeTwoFactorAuth": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Eliminar autenticaci\xF3n de dos factores" } },
    "twoFactorAuth": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Autenticaci\xF3n de dos factores" } }
  },
  "changeUserPasswordModal": {
    "changePassword": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Cambiar contrase\xF1a para " }, { "t": 4, "k": "username" }] } }
  },
  "deleteUserModal": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Eliminar " }, { "t": 4, "k": "username" }] } },
    "confirmation": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "\xBFEst\xE1 seguro de que desea eliminar el usuario: " }, { "t": 4, "k": "name" }, { "t": 3, "v": "?" }] } },
    "comment1": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "La cuenta de usuario se eliminar\xE1, pero los espacios de trabajo de los que el usuario es miembro seguir\xE1n existiendo. El espacio de trabajo del usuario no se eliminar\xE1, incluso si este usuario es el \xFAltimo usuario en el espacio de trabajo. Si se elimina el \xFAltimo usuario de un espacio de trabajo, nadie podr\xE1 acceder a ese espacio de trabajo." } },
    "comment2": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Despu\xE9s de eliminar un usuario, es posible que un nuevo usuario se registre nuevamente utilizando la direcci\xF3n de correo electr\xF3nico de los usuarios eliminados. Para asegurarse de que no puedan volver a registrarse, desactive al usuario y no lo elimine." } },
    "delete": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Eliminar usuario " }, { "t": 4, "k": "username" }] } }
  },
  "editUserModal": {
    "delete": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Eliminar usuario" } },
    "edit": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Editar " }, { "t": 4, "k": "username" }] } }
  },
  "adminDashboard": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tablero" } },
    "totals": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Totales" } },
    "totalUsers": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Usuarios totales" } },
    "totalWorkspaces": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Grupos totales" } },
    "totalApplications": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aplicaciones totales" } },
    "newUsers": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nuevos usuarios" } },
    "newUsers24h": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nuevos usuarios \xFAltimas 24 horas" } },
    "newUsers7days": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nuevos usuarios \xFAltimos 7 d\xEDas" } },
    "newUsers30days": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nuevos usuarios \xFAltimos 30 d\xEDas" } },
    "activeUsers": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Usuarios activos" } },
    "activeUsers24h": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Usuarios activos \xFAltimas 24 horas" } },
    "activeUsers7days": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Usuarios activos \xFAltimos 7 d\xEDas" } },
    "activeUsers30days": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Usuarios activos \xFAltimos 30 d\xEDas" } },
    "viewAll": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ver todo" } }
  },
  "formGroup": {
    "cancelProtectedField": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cancelar cambio" } },
    "protectedField": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Este campo est\xE1 protegido. Haz clic para cambiarlo." } }
  },
  "userSourceType": {
    "userCountSummary": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "count" }, { "t": 3, "v": " usuarios (" }, { "t": 4, "k": "lastUpdated" }, { "t": 3, "v": ")" }] } }
  },
  "workspaceSearch": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Buscar" } },
    "searchEverything": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Buscar..." } },
    "searching": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Buscando..." } },
    "noResults": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "No se encontraron resultados" } },
    "noResultsSubtitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "No pudimos encontrar nada que coincida con \u201C" }, { "t": 4, "k": "searchTerm" }, { "t": 3, "v": "\u201D" }] } },
    "welcome": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Busca todo en tu espacio de trabajo" } },
    "welcomeSubtitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Utiliza la barra de b\xFAsqueda situada arriba para encontrar aplicaciones, tablas, campos y m\xE1s" } },
    "navigate": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Navegar" } },
    "select": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Seleccionar" } },
    "close": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cerrar" } },
    "types": {
      "applications": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aplicaciones" } },
      "tables": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tablas" } },
      "fields": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Campos" } },
      "rows": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Filas" } }
    },
    "empty": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "(vac\xEDo)" } }
  },
  "formulaInputContext": {
    "search": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Buscar" } },
    "variables": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Variables" } },
    "functions": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Funciones" } },
    "operators": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Operadores" } },
    "useRegularInputModalTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\xBFUsas entrada regular para este campo?" } },
    "useRegularInput": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Usa entrada regular" } },
    "useAdvancedInput": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cambiar al modo experto" } },
    "useAdvancedInputModalTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\xBFCambiar al modo experto?" } },
    "modalMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cambiar a otro modo borrar\xE1 la f\xF3rmula actual. \xBFEst\xE1s seguro de que quieres continuar?" } },
    "useSimpleInput": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cambiar al modo b\xE1sico" } },
    "useSimpleInputModalTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\xBFCambiar al modo b\xE1sico?" } }
  },
  "action": {
    "cancel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cancelar" } },
    "submit": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Enviar" } }
  },
  "enableTwoFactorOptions": {
    "cancel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cancelar" } },
    "continue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Continuar" } }
  },
  "twoFactorAuthSettings": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Autenticaci\xF3n de dos factores" } },
    "loadingError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "No se pudo cargar la configuraci\xF3n de autenticaci\xF3n de dos factores." } }
  },
  "disableTwoFactorAuth": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\xBFEst\xE1s seguro de que quieres desactivar la autenticaci\xF3n de dos factores?" } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tu cuenta perder\xE1 una capa adicional de seguridad. Si alguien conoce tu contrase\xF1a, tendr\xEDa la posibilidad de entrar en tu cuenta." } },
    "cancel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "D\xE9jalo encendido" } },
    "disable": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Desactiva" } },
    "successTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Se ha desactivado la autenticaci\xF3n de dos factores" } },
    "errorWrongPasswordTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Contrase\xF1a incorrecta" } },
    "errorWrongPasswordMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "La contrase\xF1a introducida no coincide con tu contrase\xF1a." } }
  },
  "saveBackupCode": {
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Si pierdes el acceso a tu aplicaci\xF3n de autenticaci\xF3n o a tu m\xF3vil y no puedas recibir ni crear c\xF3digos de autenticaci\xF3n, puedes usar esta copia de seguridad. Solo podr\xE1s usarla una vez. Aseg\xFArate de anotarla o copiarla en un lugar seguro para que puedas acceder a ella sin iniciar sesi\xF3n." } },
    "backupCodes": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "C\xF3digos de respaldo" } },
    "copy": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Copiar" } },
    "continue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Contin\xFAa" } },
    "backupCodesCopiedTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\xA1Copiado!" } },
    "backupCodesCopiedMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Se copiaron los c\xF3digos de respaldo al portapapeles." } }
  },
  "totpAuthType": {
    "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aplicaci\xF3n de autenticaci\xF3n" } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Usa una aplicaci\xF3n para obtener c\xF3digos de autenticaci\xF3n de dos factores. Recomendamos usar aplicaciones como Google Authenticator, Authy y Microsoft Authenticator." } },
    "enabledDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Recibir\xE1s los c\xF3digos de verificaci\xF3n a trav\xE9s de una aplicaci\xF3n de autenticaci\xF3n. Para configurar otra aplicaci\xF3n o m\xE9todo diferente, simplemente desactiva la autenticaci\xF3n de dos factores y config\xFAralo de nuevo." } },
    "sideLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Recomendado" } }
  },
  "twoFactorEnabled": {
    "enabled": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Activado" } },
    "disable": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Deshabilita la autenticaci\xF3n de dos factores" } }
  },
  "totpLogin": {
    "backupCodesTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ingresa el c\xF3digo de respaldo" } },
    "backupCodesDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Inicia sesi\xF3n con tu c\xF3digo de respaldo de un solo uso." } },
    "authenticate": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Autenticar" } },
    "goBack": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Regresar" } },
    "totpTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Autenticaci\xF3n de dos factores" } },
    "totpDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Introduce el c\xF3digo de tu aplicaci\xF3n de autenticaci\xF3n." } },
    "verify": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Verifica" } },
    "useBackupCode": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Usa el c\xF3digo de respaldo" } },
    "verificationFailed": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Fall\xF3 la verificaci\xF3n" } },
    "verificationFailedDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "El c\xF3digo introducido no es correcto." } },
    "loginExpired": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tu sesi\xF3n ha expirado" } },
    "loginExpiredDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Por favor, introduce tu contrase\xF1a nuevamente." } },
    "rateLimit": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Demasiados intentos." } }
  },
  "mcpEndpoint": {
    "windsurfInstructions": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dos pasos sencillos para configurar MCP con Cascase en Windsurf.\n\n1. Accede a Windsurf - Configuraci\xF3n \u2192 Configuraci\xF3n avanzada o abre la Paleta de comandos \u2192 Abrir p\xE1gina de configuraci\xF3n de Windsurf.\n2. Despl\xE1zate hacia abajo hasta la secci\xF3n Cascade y encontrar\xE1s la opci\xF3n para a\xF1adir un nuevo servidor \u2192 Ver los servidores existentes y un bot\xF3n para ver el archivo de configuraci\xF3n JSON sin procesar en `mcp_config.json`. A\xF1ade lo siguiente a ese archivo:" } },
    "claudeInstructions": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tres pasos sencillos para comenzar con Claude Desktop y el MCP de Baserow.\n\n1. Abre la configuraci\xF3n de Claude Desktop desde la barra de navegaci\xF3n. (\u2318+,)\n2. Ve a la pesta\xF1a \xABDesarrollar\xBB y haz clic en \xABEditar Config\xBB.\n3. Incluye la siguiente configuraci\xF3n JSON en c`laude_desktop_config.json`." } },
    "detailLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "M\xE1s detalles" } },
    "endpointURLIntro": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "La URL del servidor MCP (Model Context Protocol) puede a\xF1adirse a cualquier cliente que admita servidores MCP. Es un punto final (endpoint) \xFAnico que le da al LLM acceso directo para realizar acciones en el espacio de trabajo en tu nombre." } },
    "reveal": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Revela la URL completa" } },
    "warning": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Trata tu URL MCP como una contrase\xF1a, ya que tiene la capacidad de modificar datos en Baserow." } },
    "cursorInstructions": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tres pasos sencillos para comenzar con Cursor y el MCP de Baserow.\n\n1. Abre la configuraci\xF3n de Cursor (\u21E7+\u2318+J)\n2. Ve a la pesta\xF1a \xABMCP\xBB y pulsa \xABA\xF1adir Servidor MCP\xBB\n3. Inserta la configuraci\xF3n JSON que sigue." } }
  },
  "controlCenterGuidedTourStep": {
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "La barra lateral izquierda te ayuda a gestionar tu espacio de trabajo:\n\n- Inicio \u2013 Accede a tu panel principal.\n- Notificaciones \u2013 Mantente al d\xEDa con los cambios y menciones.\n- Invitar a miembros \u2013 Colabora a\xF1adiendo integrantes al equipo.\n- Papelera \u2013 Lista y recupera todos tus elementos eliminados." } },
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tu Centro de Control de Baserow" } }
  },
  "importWorkspaceForm": {
    "selectApplicationsToImport": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Selecciona las aplicaciones para importar" } }
  },
  "colorPickerContext": {
    "pickColorPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "O elige un color predefinido" } }
  },
  "twoFactorAuthField": {
    "enabled": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Habilitado" } },
    "disabled": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Deshabilitado" } }
  },
  "guidedTourStep": {
    "step": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "step" }, { "t": 3, "v": " de " }, { "t": 4, "k": "totalSteps" }] } },
    "gotIt": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Entendido" } },
    "next": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Siguiente" } },
    "back": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Atr\xE1s" } }
  },
  "welcomeGuidedTourStep": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Bienvenido a Baserow" } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Hagamos un recorrido r\xE1pido para que t\xFA te familiarices con lo b\xE1sico. En solo unos pocos clics, aprender\xE1s a organizar y visualizar tus datos sin esfuerzo" } },
    "buttonText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Inicia el recorrido" } }
  },
  "createNewGuidedTourStep": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Crea una nueva base de datos o aplicaci\xF3n" } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Haz clic en \xABA\xF1adir nuevo\u2026\xBB para configurar una nueva base de datos, aplicaci\xF3n o dashboard para tu proyecto, departamento o equipo." } }
  },
  "mcpEndpointSettings": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Servidor MCP" } },
    "createEndpoint": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Crear punto final (endpoint)" } },
    "createNewTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Crear punto final (endpoint) del servidor MCP" } },
    "backToOverview": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Atr\xE1s" } },
    "noEndpointsMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "No se han a\xF1adido puntos finales (endpoints) de servidor MCP (Model Context Protocol). Estos pueden usarse para integrarse directamente con un LLM como Claude y permitir que el LLM realice acciones directamente en Baserow. Crea un endpoint de servidor para comenzar." } }
  },
  "mcpEndpointForm": {
    "nameLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nombre" } },
    "workspaceLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Espacio de trabajo" } }
  },
  "coreHTTPTriggerServiceForm": {
    "urlVersion": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Versi\xF3n" } },
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "URL del webhook" } },
    "urlVersionPublished": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Publicado" } },
    "urlVersionTest": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Prueba" } },
    "copyUrl": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Copiar URL del webhook" } },
    "urlCopied": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "URL del webhook copiada al portapapeles" } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Este webhook recibir\xE1 peticiones HTTP y activar\xE1 el flujo de trabajo con los datos de la solicitud como carga \xFAtil." } },
    "methodsOptionLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "M\xE9todos HTTP permitidos" } },
    "methodsOptionAll": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Todo" } },
    "methodsOptionDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Controla qu\xE9 m\xE9todos HTTP est\xE1n permitidos para este webhook. Excluir GET reduce la probabilidad de que el webhook se active accidentalmente." } },
    "methodsOptionExcludeGet": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Excluir GET" } }
  },
  "twoFactorAuthEmpty": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "A\xFAn no has activado la autenticaci\xF3n de dos factores" } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "A\xF1ade una capa extra de seguridad a tu cuenta." } },
    "enable": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Activar la autenticaci\xF3n de dos factores" } },
    "notAllowedTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Autenticaci\xF3n de dos factores no activada" } },
    "notAllowedDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "A\xF1adir la autenticaci\xF3n de dos factores s\xF3lo es posible en cuentas basadas en contrase\xF1a." } }
  },
  "nodeHelpTooltip": {
    "exampleLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ejemplo" } },
    "result": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Resultado: " }, { "t": 4, "k": "result" }] } }
  },
  "enableWithQRCode": {
    "scanQRCode": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Escanear c\xF3digo QR" } },
    "scanQRCodeDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Escanea el c\xF3digo con una aplicaci\xF3n como Google Authenticator, Authy o Microsoft Authenticator." } },
    "clickToCopy": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Alternativamente, haz clic aqu\xED para copiar el c\xF3digo." } },
    "secretCopiedTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Secreto copiado" } },
    "secretCopiedMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Secreto TOTP copiado al portapapeles." } },
    "enterCode": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Introduce el c\xF3digo mostrado" } },
    "enterCodeDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Introduce un c\xF3digo de 6 d\xEDgitos que muestra la aplicaci\xF3n para confirmar que lo has configurado correctamente." } },
    "verificationFailed": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "La verificaci\xF3n fall\xF3" } },
    "verificationFailedDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "El c\xF3digo ingresado no es v\xE1lido." } },
    "provisioningFailed": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "El aprovisionamiento fall\xF3" } },
    "checkSuccess": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Se habilit\xF3 correctamente la autenticaci\xF3n de dos factores" } }
  },
  "emailSettings": {
    "successDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Hemos enviado un correo de confirmaci\xF3n a tu nueva direcci\xF3n. Por favor, revisa tu bandeja de entrada y haz clic en el enlace para completar el cambio de correo." } },
    "errorEmailExistsMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "No se pudo solicitar el cambio de correo electr\xF3nico porque ya existe una cuenta con esta direcci\xF3n de correo electr\xF3nico." } },
    "errorNotAllowedMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "No puedes cambiar tu direcci\xF3n de correo electr\xF3nico porque tu cuenta usa autenticaci\xF3n de inicio de sesi\xF3n \xFAnico (SSO)." } },
    "errorInvalidPasswordMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "No se pudo solicitar el cambio de correo electr\xF3nico porque tu contrase\xF1a es incorrecta." } },
    "errorNotAllowedTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cambio de correo no permitido" } },
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cambiar direcci\xF3n de correo electr\xF3nico" } },
    "successTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Correo electr\xF3nico de confirmaci\xF3n enviado" } },
    "currentEmailLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Direcci\xF3n de correo electr\xF3nico actual" } },
    "newEmailLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nueva direcci\xF3n de correo electr\xF3nico" } },
    "submitButton": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Enviar correo electr\xF3nico de confirmaci\xF3n" } },
    "errorEmailExistsTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "El correo electr\xF3nico ya existe" } },
    "passwordLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Contrase\xF1a actual" } },
    "errorInvalidPasswordTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Contrase\xF1a inv\xE1lida" } }
  },
  "changeEmail": {
    "message": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tu direcci\xF3n de correo electr\xF3nico ha sido cambiada con \xE9xito. Ahora puedes iniciar sesi\xF3n en Baserow usando tu nueva direcci\xF3n de correo electr\xF3nico." } },
    "errorLinkExpiredMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "El enlace de cambio de correo ha expirado. Por favor, solicita uno nuevo desde la configuraci\xF3n de tu cuenta." } },
    "errorEmailExistsMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "No se pudo cambiar la direcci\xF3n de correo porque ya existe una cuenta con esa direcci\xF3n de correo." } },
    "errorInvalidLinkMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "No se pudo cambiar la direcci\xF3n de correo electr\xF3nico porque el enlace es inv\xE1lido." } },
    "errorEmailAlreadyChangedMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "La direcci\xF3n de correo electr\xF3nico ya ha sido cambiada a la direcci\xF3n solicitada." } },
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Confirmar cambio de correo electr\xF3nico" } },
    "submit": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Confirmar cambio de correo electr\xF3nico" } },
    "changed": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Direcci\xF3n de correo electr\xF3nico cambiada" } },
    "errorEmailExistsTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "El correo electr\xF3nico ya existe" } },
    "errorEmailAlreadyChangedTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "El correo electr\xF3nico ya ha sido cambiado" } },
    "errorInvalidLinkTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Enlace inv\xE1lido" } },
    "errorLinkExpiredTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Enlace expirado" } }
  },
  "adminUsers": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Usuarios" } }
  },
  "adminWorkspaces": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Espacios de trabajo" } }
  },
  "formulaInputExplorerContext": {
    "modalMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cambiar a un modo diferente borrar\xE1 la f\xF3rmula actual. \xBFEst\xE1s seguro de que quieres continuar?" } },
    "useRegularInputModalTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\xBFUsar entrada regular para este campo?" } },
    "useSimpleInput": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cambiar a modo b\xE1sico" } },
    "useSimpleInputModalTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\xBFCambiar a modo b\xE1sico?" } },
    "useAdvancedInput": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cambiar a modo experto" } },
    "useAdvancedInputModalTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "\xBFCambiar a modo experto?" } },
    "variables": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Variables" } },
    "functions": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Funciones" } },
    "operators": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Operadores" } },
    "search": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Buscar" } }
  },
  "formulaParserErrors": {
    "invalidArgCountMin": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "La funci\xF3n '" }, { "t": 4, "k": "funcType" }, { "t": 3, "v": "' espera un m\xEDnimo de " }, { "t": 4, "k": "minArgs" }, { "t": 3, "v": " argumentos." }] } },
    "invalidArgCountRange": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "La funci\xF3n '" }, { "t": 4, "k": "funcType" }, { "t": 3, "v": "' espera entre " }, { "t": 4, "k": "minArgs" }, { "t": 3, "v": " y " }, { "t": 4, "k": "maxArgs" }, { "t": 3, "v": " argumentos." }] } },
    "invalidArgCountExact": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "La funci\xF3n '" }, { "t": 4, "k": "funcType" }, { "t": 3, "v": "' espera exactamente " }, { "t": 4, "k": "minArgs" }, { "t": 3, "v": " argumentos." }] } },
    "invalidArgumentType": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "'" }, { "t": 4, "k": "value" }, { "t": 3, "v": "' no es un argumento v\xE1lido para la funci\xF3n '" }, { "t": 4, "k": "funcType" }, { "t": 3, "v": "'." }] } }
  },
  "formulaInputErrorContext": {
    "viewFullError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ver error completo" } }
  },
  "disableTwoFactorAuthModal": {
    "comment": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Podr\xE1n iniciar sesi\xF3n solo con su contrase\xF1a y configurar la autenticaci\xF3n de dos factores nuevamente despu\xE9s." } },
    "confirmation": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "\xBFEst\xE1s seguro de que quieres eliminar la autenticaci\xF3n de dos factores para " }, { "t": 4, "k": "name" }, { "t": 3, "v": "?" }] } },
    "remove": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Eliminar autenticaci\xF3n de dos factores" } },
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Eliminar autenticaci\xF3n de dos factores" } }
  },
  "sampleDataViewer": {
    "truncatedPayloadWarning": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Solo se muestran los primeros " }, { "t": 4, "k": "size" }, { "t": 3, "v": " caracteres. Descarga la carga \xFAtil completa para inspeccionarlo en tu computadora." }] } },
    "errorLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ocurri\xF3 un error..." } },
    "downloadFullPayload": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Descargar la carga \xFAtil completa" } },
    "truncatedLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "[Salida truncada]" } },
    "showPayloadLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mostrar carga \xFAtil" } },
    "showErrorLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mostrar error" } },
    "payloadLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Salida" } }
  },
  "workspaceOutdatedToast": {
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Han ocurrido demasiados cambios mientras estabas lejos. Refresca para ver los \xFAltimos datos." } },
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Demasiados cambios" } },
    "action": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Refrescar datos" } },
    "dismiss": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Descartar" } }
  },
  "editWorkspace": {
    "invalidNameTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nombre de espacio de trabajo no permitido" } }
  }
};

export { resource as default };
//# sourceMappingURL=es-Sd_NFJ14.mjs.map
