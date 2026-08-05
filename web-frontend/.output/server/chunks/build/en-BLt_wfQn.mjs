!(function() {
  try {
    var e = false ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
    var n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "b4b3cb7f-74af-4d78-b7a6-9f01622d2734", e._sentryDebugIdIdentifier = "sentry-dbid-b4b3cb7f-74af-4d78-b7a6-9f01622d2734");
  } catch (e2) {
  }
})();
const resource = {
  "webhookModal": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "name" }, { "t": 3, "v": " webhooks" }] } },
    "createWebhook": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Create webhook" } },
    "backToList": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Back to list" } }
  },
  "deleteWebhookModal": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Delete " }, { "t": 4, "k": "webhookName" }] } },
    "deleteButton": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Delete webhook" } },
    "body": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Are you sure you want to delete this webhook? You will not be able to restore it later." } }
  },
  "webhookList": {
    "noWebhooksMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "You have not created any webhooks yet. Webhooks can be used in order to inform 3rd party systems when a row in Baserow has been created, updated or deleted." } }
  },
  "testWebhookModal": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Test webhook" } },
    "unreachable": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Server unreachable" } }
  },
  "webhookForm": {
    "inputLabels": {
      "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Name" } },
      "value": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Value" } },
      "requestMethod": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Method" } },
      "url": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "URL" } },
      "userFieldNames": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "User field names" } },
      "events": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Which events should trigger this webhook?" } },
      "headers": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Additional headers" } },
      "example": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Example payload" } }
    },
    "errors": {
      "urlField": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Must be a valid url starting with 'https://' or 'http://'." } },
      "invalidHeaders": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "One of the headers is invalid." } }
    },
    "checkbox": {
      "sendUserFieldNames": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Use field name instead of id" } }
    },
    "radio": {
      "allEvents": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Send me everything" } },
      "customEvents": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Let me select individual events" } }
    },
    "triggerButton": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Trigger test webhook" } },
    "deactivated": {
      "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Webhook is deactivated" } },
      "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "This webhook has been deactivated because there have been too many consecutive failures. Please check the call log for more details. Click on the button below to activate it again. Don't forgot to save the webhook after activating." } },
      "activate": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Activate" } }
    },
    "triggerWhenFieldsHaveChanged": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Trigger when fields have changed" } },
    "helpTriggerWhenFieldsHaveChanged": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Will only be triggered if the cell value of the chosen fields changes." } }
  },
  "webhook": {
    "details": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "details" } },
    "lastCall": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Last call: " }, { "t": 4, "k": "lastCallTime" }] } },
    "noCalls": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "No calls made" } },
    "callLog": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Call log" } },
    "triggerDescription": { "t": 0, "b": { "t": 1, "c": [{ "t": 2, "i": [{ "t": 3 }], "s": "Triggers on every event" }, { "t": 2, "i": [{ "t": 3, "v": "Triggers on " }, { "t": 4, "k": "count" }, { "t": 3, "v": " event" }] }, { "t": 2, "i": [{ "t": 3, "v": "Triggers on " }, { "t": 4, "k": "count" }, { "t": 3, "v": " events" }] }] } }
  },
  "createWebhook": {
    "errorTableWebhookMaxLimitExceededTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Max webhooks exceeded" } },
    "errorTableWebhookMaxLimitExceededDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Can't create the webhook because the maximum amount of webhooks per table has been exceeded." } }
  },
  "sidebar": {
    "viewAPI": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "View API Docs" } },
    "createTable": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "New table" } }
  },
  "sidebarItem": {
    "exportTable": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Export table" } },
    "importFile": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Import file" } },
    "webhooks": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Webhooks" } },
    "lastSynced": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Last synced" } },
    "notSynced": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "not synced" } },
    "sync": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sync table" } },
    "updateSyncConfig": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Update sync configuration" } }
  },
  "duplicateTableJobType": {
    "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Duplicate table" } },
    "duplicating": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Duplicating" } },
    "duplicatedTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Table duplicated" } }
  },
  "apiToken": {
    "create": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "create" } },
    "read": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "read" } },
    "update": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "update" } },
    "delete": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "delete" } },
    "tokenPrefix": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Token:" } },
    "viewAPIDocs": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "View API documentation" } },
    "generateNewToken": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Generate new token" } },
    "showOrHide": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Show or hide the token" } },
    "copyToClipboard": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Copy to clipboard" } },
    "showDatabases": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "show databases" } }
  },
  "apiTokenSettings": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Database tokens" } },
    "createToken": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Create token" } },
    "noTokensMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "You have not yet created a database token. You can use database tokens to authenticate with the REST API endpoints where you can create, read, update and delete rows. It is possible to set permissions on table level." } },
    "hasFullPermissions": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Has full permissions, also to all children." } },
    "hasOnlySelectedPermissions": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Has only permissions to the selected children." } },
    "noPermissions": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Doesn't have permissions." } },
    "createNewTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Create new database token" } },
    "backToOverview": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Back to overview" } }
  },
  "apiTokenForm": {
    "nameLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Name" } },
    "workspaceLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Workspace" } }
  },
  "apiDocsSelectDatabase": {
    "needOneDatabase": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "You need to have at least one database to view the API documentation." } }
  },
  "apiDocsExample": {
    "requestSample": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Request sample" } },
    "responseSample": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Response sample" } },
    "userFieldNames": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "User field names" } }
  },
  "apiDocsParameter": {
    "optional": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "optional" } },
    "defaultValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Default: " }, { "t": 4, "k": "value" }] } }
  },
  "apiDocsTableGetRow": {
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Fetch a single " }, { "t": 4, "k": "name" }, { "t": 3, "v": " row." }] } },
    "rowId": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "The unique identifier of the row that is requested." } }
  },
  "apiDocsErrors": {
    "errorCode": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Error code" } },
    "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Name" } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Description" } },
    "okDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Request completed successfully." } },
    "badRequestDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "The request contains invalid values or the JSON could not be parsed." } },
    "unauthorizedDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "When you try to access an endpoint without a valid database token." } },
    "notFoundDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Row or table is not found." } },
    "requestEntityTooLargeDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "The request exceeded the maximum allowed payload size." } },
    "internalErrorDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "The server encountered an unexpected condition." } },
    "badGatewayDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Baserow is restarting or an unexpected outage is in progress." } },
    "unavailableDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "The server could not process your request in time." } }
  },
  "apiDocsTableFields": {
    "tableTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "name" }, { "t": 3, "v": " table" }] } },
    "tableId": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "The ID of this table is:" } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Each row in the " }, { "t": 4, "k": "name" }, { "t": 3, "v": " table contains the following fields." }] } },
    "id": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "ID" } },
    "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Name" } },
    "type": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Type" } },
    "compatibleFilters": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Compatible filters" } }
  },
  "apiDocsTableListRows": {
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "To list rows in the *" }, { "t": 4, "k": "name" }, { "t": 3, "v": "* table a `GET` request has to be made to the *" }, { "t": 4, "k": "name" }, { "t": 3, "v": "* endpoint. The response is paginated and by default the first page is returned. The correct page can be fetched by providing the `page` and `size` query parameters." }] } },
    "page": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Defines which page of rows should be returned." } },
    "size": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Defines how many rows should be returned per page." } },
    "userFieldNames": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "When the `user_field_names` GET parameter is provided and its value is one of the following: `y`, `yes`, `true`, `t`, `on`, `1`, or empty string, the field names returned by this endpoint will be the actual names of the fields.\n\nIf the `user_field_names` GET parameter is not provided, or if it does not match any of the above values, then all returned field names will be `field_` followed by the id of the field. For example `field_1` refers to the field with an id of `1`.\n\n Additionally when `user_field_names` is set then the behaviour of the other GET parameters `order_by`, `include` and `exclude` changes. They instead expect comma separated lists of the actual field names instead." } },
    "search": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "If provided only rows with data that matches the search query are going to be returned." } },
    "test": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }, { "t": 9 }, { "t": 3 }, { "t": 9 }, { "t": 3 }, { "t": 9 }, { "t": 3 }, { "t": 9 }], "s": '`{"filter_type": "AND", "filters": [{"field": "Name", "type": "equal", "value": "test"}]}' } },
    "orderBy": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Optionally the rows can be ordered by fields separated by comma. By default or if prepended with a '+' a field is ordered in ascending (A-Z) order, but by prepending the field with a '-' it can be ordered descending (Z-A).\n\n #### With `user_field_names`:\n\n `order_by` should be a comma separated list of the field names to order by. For example if you provide the following GET parameter `order_by=My Field,-My Field 2` the rows will ordered by the field called `My Field` in ascending order. If some fields have the same value, that subset will be ordered by the field called `My Field 2` in descending order.\n\n Ensure fields with names starting with a `+` or `-` are explicitly prepended with another `+` or `-`. E.g `+-Name`.\n\n The name of fields containing commas must be surrounded by quotes: `\"Name ,\"`. If the field names contain quotes, then they must be escaped using the `\\` character. Eg: `Name \\\"`. \n\n#### Without `user_field_names`:\n\n `order_by` should be a comma separated list of `field_` followed by the id of the field to order by. For example if you provide the following GET parameter `order_by=field_1,-field_2` the rows will ordered by `field_1` in ascending order. If some fields have the same value, that subset will be ordered by `field_2` in descending order." } },
    "filters": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }, { "t": 9 }, { "t": 3 }, { "t": 9 }, { "t": 3 }, { "t": 9 }, { "t": 3 }, { "t": 9 }, { "t": 3 }, { "t": 9 }, { "t": 3 }, { "t": 9 }, { "t": 3 }, { "t": 9 }, { "t": 3 }, { "t": 9 }, { "t": 3 }, { "t": 9 }, { "t": 3 }, { "t": 9 }, { "t": 3 }, { "t": 9 }, { "t": 3 }, { "t": 9 }, { "t": 3 }], "s": 'Rows can optionally be filtered using the same view filters that are available for the views. This parameter accepts a JSON serialized string containing the filter tree to apply to this view. The filter tree is a nested structure containing the filters that need to be applied. \n\n#### With `user_field_names`:\n\nAn example of a valid filter tree is the following: `{"filter_type": "AND", "filters": [{"field": "Name", "type": "equal", "value": "test"}]}`.\n\n#### Without `user_field_names`:\n\nFor example, if you optionally provide the following GET parameter: `{"filter_type": "AND", "filters": [{"field": 1, "type": "equal", "value": "test"}]}`\n\nPlease note that if this parameter is provided, all other `filter__{field}__{filter}` will be ignored, as well as the filter_type parameter.' } },
    "filter": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Rows can optionally be filtered using the same view filters that are available for the views. Multiple filters may be applied if they follow the same format. The `field` and `filter` variables indicate how and where to apply the filter, respectively.\n\n#### With `user_field_names`:\n\nFor example, if you optionally provide the following GET parameter: `filter__Name__equal=test`, only rows where the value of `Name` equals 'test' will be returned. This method is backwards compatible and will check against `field_id` if it fails on the name.\n\n#### Without `user_field_names`:\n\nFor example, if you optionally provide the following GET parameter: `filter__field_1__equal=test`, only rows where the value of `field_1` equals 'test' will be returned.\n\nPlease note that if the filters parameter is provided, this parameter will be ignored. " } },
    "filterLink": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "A list of all filters can be found here." } },
    "filterType": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "- `AND`: Indicates that the rows must match all the provided filters.\n- `OR`: Indicates that the rows only have to match one of the filters.\n\n This works only if two or more filters are provided." } },
    "include": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": 'All the fields are included in the response by default. You can select a subset of fields to include by providing the include query parameter.\n\n #### With `user_field_names`:\n\n `include` should be a comma separated list of field names to be included in results. For example if you provide the following GET param: `include=My Field,-My Field 2` then only those fields will be included (unless they are explicitly excluded).\n\n The name of fields containing commas must be surrounded by quotes: `"Name ,"`. If the field names contain quotes, then they must be escaped using the `\\` character. Eg: `Name \\"`.\n\n #### Without `user_field_names`:\n\n `include` should be a comma separated list of `field_` followed by the id of the field to include in the results. For example: If you provide the following GET parameter `include=field_1,field_2` then the fields with id `1` and id `2` then only those fields will be included (unless they are explicitly excluded).' } },
    "exclude": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": 'All the fields are included in the response by default. You can select a subset of fields to exclude by providing the exclude query parameter.\n\n #### With `user_field_names`:\n\n `exclude` should be a comma separated list of field names to be excluded from the results. For example if you provide the following GET param: `exclude=My Field,-My Field 2` then those fields will be excluded.\n\n The name of fields containing commas must be surrounded by quotes: `"Name ,"`. If the field names contain quotes, then they must be escaped using the `\\` character. Eg: `Name \\"`.\n\n #### Without `user_field_names`:\n\n `exclude` should be a comma separated list of `field_` followed by the id of the field to exclude from the results. For example: If you provide the following GET parameter `exclude=field_1,field_2` then the fields with id `1` and id `2` will be excluded.' } },
    "viewId": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }, { "t": 9 }, { "t": 3 }, { "t": 9 }, { "t": 3 }, { "t": 9 }, { "t": 3 }, { "t": 9 }, { "t": 3 }], "s": "By default non of the filters and sorts outside of the ones defined in the query parameters are applied. You can add the filters and sorts of a view by providing its `id` in the `view_id` GET parameter. For example if you provide the following GET parameter `view_id=1` then the filters and sorts defined in the view with id `1` will be applied. You can find the `view_id` in the context menu of any given view. It is the number in brackets behind the view name. \n\n #### With `filter__{field}__{filter}` \n\n Both the filter provided in the query parameter and the filters defined in the view will be applied.\n\n #### With `order_by` \n\n If `order_by` is provided then the sort defined in the view will be ignored." } },
    "filtersBuilder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Open filters parameter builder" } },
    "join": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Makes it possible to request a lookup of field values from a target table through existing link row fields. The parameter name has to be the name of an existing link row field, followed by __join. The value should be a list of field names for which we want to lookup additional values. You can provide one or multiple target fields. It is not possible to lookup a value of a link row field in the target table.\n\n #### With `user_field_names`:\n\n `join` should be a comma separated list of field names to be included in results. For example: If you provide the following GET parameter `LinkRowField__join=MyField,MyField2` then the values of `MyField` and `My Field2` in the table linked by `LinkRowField` will be included in the response .\n\n#### Without `user_field_names`:\n\n `join` should be a comma separated list of `field_` followed by the id of the field to include in the results. For example: If you provide the following GET parameter `field_1__join=field_2,field_3` then the values of `field_2` and `field_3` in the table linked by `field_1` will be included in the response." } }
  },
  "apiDocsIntro": {
    "intro": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "The " }, { "t": 4, "k": "name" }, { "t": 3, "v": " database provides an easy way to integrate the data with any external system. The API follows REST semantics, uses JSON to encode objects and relies on standard HTTP codes, machine and human readable errors to signal operation outcomes." }] } },
    "autoDocDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "This documentation is generated automatically based on the tables and fields that are in your database. If you make changes to your database, table or fields it could be that the API interface has also changed. Therefore, make sure that you update your API implementation accordingly." } },
    "databaseId": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "The ID of this database is:" } },
    "jsClient": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "JavaScript example API client:" } },
    "pythonClient": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Python example API client:" } }
  },
  "apiDocsTableListFields": {
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "To list fields of the " }, { "t": 4, "k": "name" }, { "t": 3, "v": " table a `GET` request has to be made to the " }, { "t": 4, "k": "name" }, { "t": 3, "v": " fields endpoint. It's only possible to list the fields if the database token has read, create or update permissions." }] } },
    "resultFieldProperties": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Result field properties" } },
    "id": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Field primary key. Can be used to generate the database column name by adding `field_` prefix." } },
    "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Field name." } },
    "tableId": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Related table id." } },
    "order": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Field order in table. 0 for the first field." } },
    "primary": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Indicates if the field is a primary field. If `true` the field cannot be deleted and the value should represent the whole row." } },
    "type": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Type defined for this field." } },
    "extraProps": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Some extra properties are not described here because they are type specific." } },
    "readOnly": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Indicates whether the field is a read only field. If true, it's not possible to update the cell value." } },
    "descriptionField": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Field description" } }
  },
  "apiDocsTableDeleteRow": {
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Deletes an existing " }, { "t": 4, "k": "name" }, { "t": 3, "v": " row." }] } },
    "rowId": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "The unique identifier of the row that needs to be deleted." } }
  },
  "apiDocsTableDeleteRows": {
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Deletes existing " }, { "t": 4, "k": "name" }, { "t": 3, "v": " rows." }] } },
    "items": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "An array of row ids that should be deleted." } }
  },
  "apiDocsTableMoveRow": {
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Moves an existing " }, { "t": 4, "k": "name" }, { "t": 3, "v": " row before another row. If no `before_id` is provided, then the row will be moved to the end of the table." }] } },
    "rowId": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Moves the row related to the value." } },
    "before": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Moves the row related to the given `row_id` before the row related to the provided value. If not provided, then the row will be moved to the end." } }
  },
  "apiDocsUploadFile": {
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Uploads a file to Baserow by uploading the file contents directly. A `file` multipart is expected containing the file contents. The response can then be used to [upload a file to a row](" }, { "t": 4, "k": "PUBLIC_BACKEND_URL" }, { "t": 3, "v": "/api/redoc/#tag/Database-table-rows/operation/update_database_table_row)." }] } },
    "file": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "The `file` multipart containing the file contents." } }
  },
  "apiDocsUploadFileViaURL": {
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Uploads a file to Baserow by downloading it from the provided URL. The response can then be used to [upload a file to a row](" }, { "t": 4, "k": "PUBLIC_BACKEND_URL" }, { "t": 3, "v": "/api/redoc/#tag/Database-table-rows/operation/update_database_table_row)." }] } },
    "url": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "The URL you would like Baserow to download and upload on your behalf." } }
  },
  "apiDocsTableUpdateRow": {
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Updates an existing " }, { "t": 4, "k": "name" }, { "t": 3, "v": " row." }] } },
    "rowId": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "The unique identifier of the row that needs to be updated." } },
    "before": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "If provided then the newly created row will be positioned before the row with the provided id." } }
  },
  "apiDocsTableUpdateRows": {
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Updates existing " }, { "t": 4, "k": "name" }, { "t": 3, "v": " rows." }] } },
    "id": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "The row id." } }
  },
  "apiDocsTableCreateRow": {
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Create a new " }, { "t": 4, "k": "name" }, { "t": 3, "v": " row." }] } },
    "before": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "If provided then the newly created row will be positioned before the row with the provided id." } }
  },
  "apiDocsTableCreateRows": {
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Create new " }, { "t": 4, "k": "name" }, { "t": 3, "v": " rows." }] } },
    "before": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "If provided then the newly created rows will be positioned before the row with the provided id." } }
  },
  "apiDocsAuth": {
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Baserow uses a simple token based authentication. You need to generate at least one database token in your " }, { "t": 4, "k": "settingsLink" }, { "t": 3, "v": " to use the endpoints described below. It is possible to give create, read, update and delete permissions up until table level per token. You can authenticate to the API by providing your token in the HTTP authorization bearer token header. All API requests must be authenticated and made over HTTPS." }] } },
    "settingsLink": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "settings" } }
  },
  "apiDocsFilters": {
    "filter": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Filter" } },
    "exampleValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Example value" } },
    "example": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Full example" } },
    "field": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "field " }, { "t": 4, "k": "name" }] } },
    "deprecated": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "deprecated" } }
  },
  "apiDocsFiltersBuilderModal": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Filters parameter builder" } },
    "userFieldNames": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "User field names" } },
    "json": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "JSON" } },
    "queryParameter": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Query parameter" } }
  },
  "apiDocsPasswordFieldAuthentication": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "name" }, { "t": 3, "v": " authentication" }] } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Checks if the provided password and row matches what is stored in the cell." } },
    "fieldId": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "The field ID where to check the password for." } },
    "rowId": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "The row ID where to check the password for." } },
    "password": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "The password that must be checked if it's correct." } }
  },
  "apiDocsListTables": {
    "listTables": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "List all tables" } },
    "listTablesDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "This endpoint only works in combination with the token authentication. It lists all the tables that the token has either create, read, update or delete access to." } }
  },
  "fieldTextSubForm": {
    "placeholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Default text" } }
  },
  "fieldSingleSelectSubForm": {
    "optionsLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Options" } },
    "defaultOptionLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Default option" } }
  },
  "fieldMultipleSelectSubForm": {
    "optionsLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Options" } },
    "defaultOptionsLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Default options" } }
  },
  "fieldSingleSelectDropdown": {
    "notFound": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Option not found" } }
  },
  "fieldmultipleCollaboratorsDropdown": {
    "notFound": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Collaborator not found" } }
  },
  "fieldDateSubForm": {
    "dateFormatLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Date format" } },
    "dateFormatEuropean": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "European" } },
    "dateFormatUS": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "US" } },
    "dateFormatISO": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "ISO" } },
    "includeTimeLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Include time" } },
    "showTimezoneLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Show timezone" } },
    "forceTimezoneLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Set timezone for all collaborators" } },
    "forceTimezoneValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Timezone" } },
    "addTimezoneOffsetLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Convert values (add " }, { "t": 4, "k": "utcOffsetDiff" }, { "t": 3, "v": " minutes)" }] } },
    "subTimezoneOffsetLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Convert values (subtract " }, { "t": 4, "k": "utcOffsetDiff" }, { "t": 3, "v": " minutes)" }] } },
    "timeFormatLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Time format" } },
    "24Hour": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "24 hour" } },
    "12Hour": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "12 hour" } }
  },
  "fieldLinkRowSubForm": {
    "noTable": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "You need at least one other table in the same database to link to." } },
    "selectTableLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Select a table to link to" } },
    "hasRelatedFieldLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Create related field in linked table" } },
    "limitToView": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Limit selection to view" } },
    "limitToViewDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Note that this is only visual. It's still possible to make relationships outside of the view via the related table or API." } },
    "allowMultipleRelations": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Allow multiple relationships" } }
  },
  "fieldBooleanSubForm": {
    "defaultValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Default" } }
  },
  "fieldSelectOptions": {
    "add": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Add an option" } }
  },
  "fieldNumberSubForm": {
    "typeLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Number type" } },
    "integer": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Integer" } },
    "decimal": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Decimal" } },
    "decimalPlacesLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Decimal places" } },
    "allowNegative": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Allow negative" } },
    "separatorLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Thousand and decimal separator" } },
    "prefixPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Prefix" } },
    "suffixPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Suffix" } },
    "prefixAndSuffixLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Prefix / suffix" } },
    "spaceComma": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Space, comma (1 000 000,00)" } },
    "spacePeriod": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Space, period (1 000 000.00)" } },
    "commaPeriod": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Comma, period (1,000,000.00)" } },
    "periodComma": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Period, comma (1.000.000,00)" } },
    "noFormatting": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "No formatting" } },
    "defaultValueLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Default value" } },
    "defaultValuePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Enter a default value" } }
  },
  "fieldDurationSubForm": {
    "durationFormatLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Duration format" } }
  },
  "fieldContext": {
    "editField": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Edit field" } },
    "deleteField": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Delete field" } },
    "hideField": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Hide field" } },
    "showField": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Show field" } },
    "changePrimaryField": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Change primary field" } }
  },
  "fieldForm": {
    "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Name" } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Description" } },
    "fieldAlreadyExists": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "A field with this name already exists." } },
    "nameNotAllowed": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "This field name is not allowed." } },
    "nameTooLong": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "This field name is too long." } },
    "addDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Add description" } },
    "dbIndex": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Index" } },
    "dbIndexError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "This field type cannot have an index. Please remove it before saving or change the field type." } },
    "dbIndexDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Indexing can significantly improve filtering performance, but slows down create, update, and delete operations." } },
    "defaultValueDisabledByConstraint": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cannot set a default value with a unique constraint" } },
    "defaultValueOverriddenByView": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "A view-level default value is set for this field and will take precedence over this default value." } },
    "dbIndexDisabledTooltip": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Indexing is not available for this field type." } }
  },
  "fieldSelectThroughFieldSubForm": {
    "noTable": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "You need at least one link to table field to create this field." } },
    "selectThroughFieldLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Select a link to table field" } }
  },
  "fieldRollupSubForm": {
    "label": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Rollup function" } },
    "selectTargetFieldLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Select a field to rollup" } }
  },
  "fieldLookupSubForm": {
    "selectTargetFieldLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Select a field to lookup" } }
  },
  "fieldFormulaNumberSubForm": {
    "typeLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Number type" } },
    "integer": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Integer" } },
    "decimal": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Decimal" } },
    "decimalPlacesLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Decimal places" } },
    "allowNegative": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Allow negative" } }
  },
  "fieldRatingSubForm": {
    "maxValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Max" } },
    "color": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Color" } },
    "style": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Style" } }
  },
  "rowCreateModal": {
    "addField": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Add field" } }
  },
  "selectRowContent": {
    "search": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Search rows" } },
    "hideFields": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Hide fields" } }
  },
  "rowEditModal": {
    "addField": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Add field" } },
    "showHiddenFields": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Show hidden fields" } },
    "hideHiddenFields": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Hide hidden fields" } }
  },
  "rowEditFieldMultipleSelect": {
    "addOption": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Choose an option" } }
  },
  "rowEditFieldMultipleCollaborators": {
    "addCollaborator": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Choose a collaborator" } }
  },
  "rowEditFieldFile": {
    "addFile": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Add a file" } },
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
    "addLink": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Choose a link" } },
    "keepOnlyOneValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Keep only one value. This field only supports one relationship. The value is saved if there is only one relationship left." } }
  },
  "tableCSVImporter": {
    "chooseFileLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Choose CSV file" } },
    "chooseFileDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "You can import an existing CSV by uploading the .CSV file with tabular data. Most spreadsheet applications will allow you to export your spreadsheet as a .CSV file." } },
    "chooseFile": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Choose CSV file" } },
    "columnSeparator": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Column separator" } },
    "recordSeparator": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "record separator" } },
    "unitSeparator": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "unit separator" } },
    "encoding": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Encoding" } },
    "firstRowHeader": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "First row is header" } },
    "limitFileSize": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "The maximum file size is " }, { "t": 4, "k": "limit" }, { "t": 3, "v": "MB." }] } },
    "limitError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "It is not possible to import more than " }, { "t": 4, "k": "limit" }, { "t": 3, "v": " rows." }] } },
    "emptyCSV": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "This CSV file is empty." } }
  },
  "importer": {
    "fieldDefaultName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Field " }, { "t": 4, "k": "count" }] } },
    "loading": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Loading file" } },
    "decoding": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Decoding data" } },
    "parsing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Parsing data" } },
    "preparing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Preparing data" } },
    "inProgress": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "In progress..." } }
  },
  "tableForm": {
    "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Name" } }
  },
  "tableXMLImporter": {
    "fileLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Choose XML file" } },
    "fileDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "You can import an existing XML by uploading the .XML file with tabular data, i.e.:" } },
    "chooseButton": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Choose XML file" } },
    "processingError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Error occurred while processing XML: " }, { "t": 4, "k": "errors" }] } },
    "emptyError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "This XML file is empty." } },
    "limitFileSize": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "The maximum file size is " }, { "t": 4, "k": "limit" }, { "t": 3, "v": "MB." }] } },
    "limitError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "It is not possible to import more than " }, { "t": 4, "k": "limit" }, { "t": 3, "v": " rows." }] } }
  },
  "tableJSONImporter": {
    "fileLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Choose JSON file" } },
    "fileDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "You can import an existing JSON file by uploading the .json file with tabular data, i.e.:" } },
    "chooseButton": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Choose JSON file" } },
    "encodingLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Encoding" } },
    "processingError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Error occurred while parsing JSON: " }, { "t": 4, "k": "error" }] } },
    "arrayError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "The JSON file is not an array." } },
    "emptyError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "This JSON file is empty." } },
    "limitFileSize": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "The maximum file size is " }, { "t": 4, "k": "limit" }, { "t": 3, "v": "MB." }] } },
    "limitError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "It is not possible to import more than " }, { "t": 4, "k": "limit" }, { "t": 3, "v": " rows." }] } }
  },
  "tableExcelImporter": {
    "chooseFileLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Choose Excel file" } },
    "chooseFileDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "You can import an existing spreadsheet by uploading a .xlsx, .xls or .ods file. If the file contains multiple sheets you can choose which one to import." } },
    "chooseFile": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Choose Excel file" } },
    "sheet": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sheet" } },
    "firstRowHeader": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "First row is header" } },
    "limitFileSize": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "The maximum file size is " }, { "t": 4, "k": "limit" }, { "t": 3, "v": "MB." }] } },
    "limitError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "It is not possible to import more than " }, { "t": 4, "k": "limit" }, { "t": 3, "v": " rows." }] } },
    "processingError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "An error occurred while processing the Excel file: " }, { "t": 4, "k": "error" }] } },
    "emptyError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "This Excel file does not contain any sheets." } },
    "emptySheetError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "The selected sheet is empty." } }
  },
  "tablePasteImporter": {
    "pasteLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Paste the table data" } },
    "pasteDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "You can copy the cells from a spreadsheet and paste them below." } },
    "firstRowHeader": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "First row is header" } },
    "limitError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "It is not possible to import more than " }, { "t": 4, "k": "limit" }, { "t": 3, "v": " rows." }] } }
  },
  "createTableModal": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Create new table" } },
    "defaultName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Table" } },
    "importLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Would you like to import existing data?" } },
    "newTable": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Start with a new table" } }
  },
  "createTable": {
    "showTable": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "show table" } },
    "addButton": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Add table" } },
    "uploading": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Uploading..." } },
    "preparing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Preparing data..." } },
    "importError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Something went wrong during the file import" } },
    "stateRowCreation": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Importing..." } },
    "statePreValidation": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Validating data..." } },
    "stateCreateTable": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Creating table..." } },
    "importingTable": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": 'Importing table "' }, { "t": 4, "k": "name" }, { "t": 3, "v": '"...' }] } }
  },
  "importErrorReport": {
    "reportTitleFailure": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Failing rows" } },
    "reportTitleSuccess": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Import successful but..." } },
    "reportMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "The following row indexes couldn't be imported:" } }
  },
  "importFileModal": {
    "defaultName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Table" } },
    "additionalImportTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Import into " }, { "t": 4, "k": "table" }] } },
    "importLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Would you like to import existing data?" } },
    "newTable": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Start with a new table" } },
    "showTable": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "show table" } },
    "importButton": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Import" } },
    "uploading": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Uploading..." } },
    "preparing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Preparing data..." } },
    "importError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Something went wrong during the file import" } },
    "fieldMappingTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Field mapping" } },
    "fieldMappingDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "We have automatically mapped the columns of the Baserow fields in your table. You can change them below. Any incompatible cell will remain empty after the import." } },
    "selectImportMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Please select data to import." } },
    "filePreview": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "File content preview" } },
    "importPreview": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Import preview" } },
    "useUpsertField": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Update rows if they already exist" } },
    "upsertTooltip": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Match existing rows using a unique field to overwrite data with imported values." } },
    "stateRowCreation": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Importing..." } },
    "statePreValidation": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Validating data..." } },
    "stateCreateTable": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Creating table..." } },
    "restoredFile": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": 'Importing file "' }, { "t": 4, "k": "name" }, { "t": 3, "v": '"...' }] } }
  },
  "formulaAdvancedEditContext": {
    "textAreaFormulaInputPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Click to edit the formula" } },
    "fields": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Fields" } },
    "functions": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Functions" } },
    "operators": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Operators" } },
    "fieldType": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "A " }, { "t": 4, "k": "type" }, { "t": 3, "v": " field" }] } }
  },
  "fieldFormulaInitialSubForm": {
    "formulaInputPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Click to edit the formula" } },
    "refreshFormulaOptions": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Refresh formula options" } }
  },
  "fieldLongTextSubForm": {
    "enableRichTextFormatting": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Enable rich text formatting" } }
  },
  "formulaFieldItemDescription": {
    "syntax": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Syntax" } },
    "examples": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Examples" } }
  },
  "viewSearch": {
    "clearSearch": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Clear search" } }
  },
  "viewSearchContext": {
    "searchInRows": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Search in all rows" } },
    "hideNotMatching": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "hide not matching rows" } }
  },
  "viewsContext": {
    "searchView": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Search views" } },
    "noViews": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "No views found" } },
    "collaborative": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Collaborative" } }
  },
  "viewFilterTypeLinkRow": {
    "unnamed": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "unnamed row " }, { "t": 4, "k": "value" }] } },
    "choose": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Choose row" } }
  },
  "viewFieldConditionsForm": {
    "addCondition": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Add condition" } },
    "addConditionGroup": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Add condition group" } }
  },
  "viewFieldConditionItem": {
    "filterMisconfigured": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "The field this filter is associated with has been trashed." } }
  },
  "viewFilterContext": {
    "addFilter": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Add filter" } },
    "addFilterGroup": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Add filter group" } },
    "disableAllFilters": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "all disabled" } },
    "noFilterTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "You have not yet created a filter" } },
    "noFilterText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Filters allow you to show rows that apply to your conditions." } },
    "where": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Where" } },
    "and": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "And" } },
    "or": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Or" } },
    "relatedFieldNotFound": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "The related field is not found." } },
    "filterTypeNotFound": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "The filter type is not compatible." } },
    "noCompatibleFilterTypesErrorTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "No compatible filter types" } },
    "noCompatibleFilterTypesErrorMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "None of your fields have any compatible filter types" } }
  },
  "viewFilterTypeFileTypeDropdown": {
    "image": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "image" } },
    "document": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "document" } }
  },
  "createViewModal": {
    "createNew": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Create new " }, { "t": 4, "k": "view" }] } },
    "add": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Add " }, { "t": 4, "k": "view" }] } }
  },
  "createViewLink": {
    "inCompatibleWithDataSync": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "This view type is not compatible with a data sync table." } }
  },
  "shareViewLink": {
    "shareViewText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Private shareable link allows anyone to see the data in this view." } },
    "shareView": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Share " }, { "t": 4, "k": "viewTypeSharingLinkName" }] } },
    "createPrivateLink": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Create a private link" } },
    "shareViewTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "You have not yet shared the view" } },
    "sharedViewTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "This " }, { "t": 4, "k": "viewTypeSharingLinkName" }, { "t": 3, "v": " is currently shared via a private link" }] } },
    "sharedViewDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "People who have the link can see the " }, { "t": 4, "k": "viewTypeSharingLinkName" }, { "t": 3, "v": "." }] } },
    "disableLink": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Disable shared link" } },
    "generateNewUrl": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "generate new url" } },
    "copyURL": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "copy URL" } },
    "EnablePassword": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Restrict access with a password" } },
    "DisablePassword": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Access is password-protected" } },
    "ChangePassword": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Change" } },
    "notSharedYetText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Allow anyone to see the data in this view or sync events to your external calendar." } },
    "shareViewWarningTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Warning" } }
  },
  "viewGroupByContext": {
    "noGroupByTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "You have not yet created any groupings" } },
    "noGroupByText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Group rows together by a field." } },
    "groupBy": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Group by" } },
    "thenBy": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Then by" } },
    "addGroupBy": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "choose a field to group by" } },
    "maxGroupBysReached": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "You can group by up to " }, { "t": 4, "k": "count" }, { "t": 3, "v": " fields." }] } },
    "collapseAllGroups": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Collapse all" } },
    "expandAllGroups": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Expand all" } },
    "hiddenFieldWarning": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "One or more group bys reference hidden fields that won't be visible to editors and lower roles." } }
  },
  "viewGroupBy": {
    "groupBy": { "t": 0, "b": { "t": 1, "c": [{ "t": 2, "i": [{ "t": 3 }], "s": "Group" }, { "t": 2, "i": [{ "t": 3 }], "s": "Group by 1 fields" }, { "t": 2, "i": [{ "t": 3, "v": "Group by " }, { "t": 4, "k": "count" }, { "t": 3, "v": " fields" }] }] } }
  },
  "gridViewGroupByBanner": {
    "emptyValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "(Empty)" } },
    "expandGroup": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Expand group" } },
    "collapseGroup": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Collapse group" } }
  },
  "viewSortContext": {
    "noSortTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "You have not yet created a sort" } },
    "noSortText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sorts allow you to sort rows by a field." } },
    "sortBy": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sort by" } },
    "thenBy": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Then by" } },
    "addSort": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "choose a field to sort by" } },
    "hiddenFieldWarning": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "One or more sorts reference hidden fields that won't be visible to editors and lower roles." } }
  },
  "viewSort": {
    "sort": { "t": 0, "b": { "t": 1, "c": [{ "t": 2, "i": [{ "t": 3 }], "s": "Sort" }, { "t": 2, "i": [{ "t": 3 }], "s": "1 Sort" }, { "t": 2, "i": [{ "t": 4, "k": "count" }, { "t": 3, "v": " Sorts" }] }] } }
  },
  "viewDecorator": {
    "decorator": { "t": 0, "b": { "t": 1, "c": [{ "t": 2, "i": [{ "t": 3 }], "s": "Color" }, { "t": 2, "i": [{ "t": 3 }], "s": "1 Color" }, { "t": 2, "i": [{ "t": 4, "k": "count" }, { "t": 3, "v": " Colors" }] }] } },
    "hiddenFieldWarning": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Decorations are removed for editors and lower roles because they may reference hidden fields." } }
  },
  "viewRotateSlugModal": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Refresh URL" } },
    "refreshWarning": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Are you sure that you want to refresh the URL of " }, { "t": 4, "k": "viewName" }, { "t": 3, "v": "? After refreshing, a new URL will be generated and it will not be possible to access the " }, { "t": 4, "k": "viewTypeSharingLinkName" }, { "t": 3, "v": " via the old URL. Everyone that you have shared the URL with, won't be able to access the " }, { "t": 4, "k": "viewTypeSharingLinkName" }, { "t": 3, "v": "." }] } },
    "generateNewURL": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Generate new URL" } }
  },
  "shareViewEnablePasswordModal": {
    "newPasswordTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Enter a password" } },
    "newPasswordDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "The public link will only be accessible after entering the password. This password will be saved encrypted." } },
    "newPasswordSave": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Set password" } },
    "changePasswordTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Change password" } },
    "changePasswordDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "By changing the password, the previous one will no longer work. This password will be saved encrypted." } },
    "changePasswordSave": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Change password" } }
  },
  "shareViewDisablePasswordModal": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Disable password protection" } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Are you sure you want to disable password protection for this public link? By disabling, the password will be deleted and it will not be possible to recover it" } },
    "disable": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Disable" } }
  },
  "publicViewAuthLogin": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "This page is password protected" } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Insert the correct password to access the page." } },
    "enter": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Enter" } },
    "error": {
      "incorrectPasswordTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Incorrect password" } },
      "incorrectPasswordText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "The provided password is incorrect." } }
    }
  },
  "viewFieldsContext": {
    "coverField": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cover field" } },
    "noCover": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "No cover" } },
    "search": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Search fields" } },
    "hideAll": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Hide all" } },
    "showAll": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Show all" } }
  },
  "viewFilterTypeBoolean": {
    "selected": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Selected" } }
  },
  "viewFilter": {
    "filter": { "t": 0, "b": { "t": 1, "c": [{ "t": 2, "i": [{ "t": 3 }], "s": "Filter" }, { "t": 2, "i": [{ "t": 3 }], "s": "1 Filter" }, { "t": 2, "i": [{ "t": 4, "k": "count" }, { "t": 3, "v": " Filters" }] }] } },
    "hasAllValuesEqual": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "has all values equal" } },
    "hasValueHigherThan": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "has value higher than" } },
    "hasValueHigherThanOrEqual": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "has value higher than or equal" } },
    "hasValueLowerThan": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "has value lower than" } },
    "hasValueLowerThanOrEqual": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "has value lower than or equal" } },
    "hasNotValueHigherThan": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "doesn't have value higher than" } },
    "hasNotValueHigherThanOrEqual": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "doesn't have value higher than or equal" } },
    "hasNotValueLowerThan": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "doesn't have value lower than" } },
    "hasNotValueLowerThanOrEqual": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "doesn't have value lower than or equal" } }
  },
  "viewContext": {
    "exportView": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Export view" } },
    "duplicateView": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Duplicate view" } },
    "defaultRowValues": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Default row values" } },
    "renameView": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Rename view" } },
    "toPersonal": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "To personal" } },
    "toCollaborative": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "To collaborative" } },
    "webhooks": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Webhooks" } },
    "importFile": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Import file" } },
    "deleteView": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Delete view" } }
  },
  "defaultValuesModal": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Default values for " }, { "t": 4, "k": "name" }] } },
    "setDefaultValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Set default value" } },
    "removeDefaultValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Remove default value" } },
    "staticValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Static value" } }
  },
  "deleteViewModal": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Delete " }, { "t": 4, "k": "name" }] } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Are you sure you want to delete the view " }, { "t": 4, "k": "name" }, { "t": 3, "v": "? The table data will be preserved, but the filters, sortings and field widths related to the view will be deleted." }] } },
    "delete": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Delete view" } }
  },
  "viewForm": {
    "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Name" } },
    "whoCanEdit": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Who can edit this view?" } }
  },
  "viewOwnershipType": {
    "collaborative": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Collaborative" } },
    "collaborativeDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Everyone can see all the data and change the properties if they have the permissions." } }
  },
  "galleryViewHeader": {
    "customizeCards": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Customize cards" } }
  },
  "gridViewHide": {
    "hideField": { "t": 0, "b": { "t": 1, "c": [{ "t": 2, "i": [{ "t": 3 }], "s": "Hide Fields" }, { "t": 2, "i": [{ "t": 3 }], "s": "1 hidden field" }, { "t": 2, "i": [{ "t": 4, "k": "count" }, { "t": 3, "v": " hidden fields" }] }] } }
  },
  "gridViewFieldType": {
    "insertLeft": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Insert left" } },
    "insertRight": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Insert right" } },
    "createFilter": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Create filter" } },
    "duplicate": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Duplicate field" } },
    "sortField": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sort" } },
    "groupByField": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Group by" } },
    "ungroupByField": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Don't group by" } },
    "hideField": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Hide field" } },
    "dataSyncField": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "The field is read only and part of the table's data sync." } },
    "dataSyncFieldTwoWaySync": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "The field is synchronized with the table's data sync." } },
    "noWriteValues": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Changes to this field are restricted." } }
  },
  "gridViewRow": {
    "rowNotMatchingFilters": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Row does not match filters" } },
    "rowNotMatchingSearch": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Row does not match search" } },
    "rowHasMoved": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Row has moved" } }
  },
  "gridView": {
    "selectRow": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Select row" } },
    "insertRowAbove": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Insert row above" } },
    "insertRowBelow": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Insert row below" } },
    "duplicateRow": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Duplicate row" } },
    "copyRowURL": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Copy Row URL" } },
    "copiedRowURL": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Copied Row URL" } },
    "copiedRowURLMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Row " }, { "t": 4, "k": "id" }, { "t": 3, "v": "'s URL has been copied to your clipboard." }] } },
    "enlargeRow": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Enlarge row" } },
    "deleteRow": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Delete row" } },
    "deleteRows": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Delete rows" } },
    "copyCells": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Copy cells" } },
    "copyCellsWithHeader": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Copy cells with header" } },
    "generateCellsValues": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Generate values with AI" } },
    "generateAllAiValues": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Generate all AI values" } },
    "promptBroken": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "The prompt is broken and must be fixed before values can be generated." } },
    "rowCount": { "t": 0, "b": { "t": 1, "c": [{ "t": 2, "i": [{ "t": 3 }], "s": "No rows" }, { "t": 2, "i": [{ "t": 3 }], "s": "1 row" }, { "t": 2, "i": [{ "t": 4, "k": "count" }, { "t": 3, "v": " rows" }] }] } },
    "hiddenRowsInsertedTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Rows added" } },
    "hiddenRowsInsertedMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "number" }, { "t": 3, "v": " newly added rows have been added, but are not visible because of the active filters." }] } },
    "tooManyItemsTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Too many items" } },
    "tooManyItemsDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "It's not possible to update more than " }, { "t": 4, "k": "limit" }, { "t": 3, "v": " rows at once, so we've only updated the first." }] } },
    "AIValuesGenerationErrorTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "AI value generation failed" } },
    "AIValuesGenerationErrorMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Please check your API_KEY and verify the selected model." } }
  },
  "gridViewFieldFile": {
    "dropHere": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Drop here" } },
    "dropFileHere": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Drop files here" } }
  },
  "gridViewFieldLinkRow": {
    "unnamed": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "unnamed row " }, { "t": 4, "k": "value" }] } },
    "keepOnlyOneValue": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Keep only one value" } }
  },
  "gridViewIdentifierOptions": {
    "id": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Row identifier" } },
    "count": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Count" } }
  },
  "gridViewRowsAddContext": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Create multiple rows" } },
    "choice": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Add " }, { "t": 4, "k": "rowAmountChoice" }, { "t": 3, "v": " rows" }] } }
  },
  "formViewMeta": {
    "includeRowId": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Use " }, { "t": 4, "k": "row_id" }, { "t": 3, "v": " to include the newly created row id in the URL." }] } }
  },
  "formViewMetaControls": {
    "whenSubmittedLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "When the form is submitted" } },
    "showMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Show a message" } },
    "urlRedirect": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Redirect to URL" } },
    "theMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "The message" } },
    "theURL": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "The URL" } }
  },
  "previewAny": {
    "externalWarning": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Opening your file via an external service exposes your file to their servers." } }
  },
  "exportTableModal": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Export " }, { "t": 4, "k": "name" }] } },
    "failedTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Export Failed" } },
    "failedDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "The export failed due to a server error." } },
    "cancelledTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Export Cancelled" } },
    "cancelledDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "The export was cancelled." } }
  },
  "exporterTypeChoices": {
    "formatLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "To which format would you like to export?" } }
  },
  "exportTableForm": {
    "viewLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Select the view to export:" } },
    "typeError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "No exporter type available please select a different view or entire table." } },
    "includeRowId": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Include row ID" } },
    "includePrimaryField": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Include primary field" } }
  },
  "exportTableLoadingBar": {
    "export": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Export" } },
    "download": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Download" } }
  },
  "exportTableDropdown": {
    "exportEntireTable": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Export entire table" } }
  },
  "tableCSVExporter": {
    "columnSeparatorLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Column separator" } },
    "recordSeparator": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "record separator" } },
    "unitSeparator": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "unit separator" } },
    "encodingLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Encoding" } },
    "includeHeader": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Include field names as header" } }
  },
  "apiDocsDatabase": {
    "pageTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "name" }, { "t": 3, "v": " database API documentation" }] } },
    "back": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Back to dashboard" } },
    "openDatabase": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "open database" } }
  },
  "apiDocsComponent": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "REST API" } },
    "intro": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "After you have created your database schema and API key in the " }, { "t": 4, "k": "settingsLink" }, { "t": 3, "v": " your Baserow database provides his own REST API endpoints to create, read, update and delete rows." }] } },
    "settings": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "settings" } },
    "selectApplicationTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "For which database do you want to see the documentation?" } },
    "signIn": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sign in to get started" } },
    "back": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Back to dashboard" } }
  },
  "viewAggregationType": {
    "count": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Count" } },
    "notEmptyCount": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Filled" } },
    "emptyPercentage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Percent empty" } },
    "notEmptyPercentage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Percent filled" } },
    "checkedCount": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Checked" } },
    "notCheckedCount": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Unchecked" } },
    "checkedPercentage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Percent Checked" } },
    "notCheckedPercentage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Percent Unchecked" } },
    "min": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Min" } },
    "max": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Max" } },
    "earliestDate": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Earliest date" } },
    "earliestDateShort": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Earliest" } },
    "latestDate": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Latest date" } },
    "latestDateShort": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Latest" } },
    "uniqueCount": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Unique" } },
    "sum": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sum" } },
    "average": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Average" } },
    "median": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Median" } },
    "stdDev": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Standard deviation" } },
    "stdDevShort": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Std dev" } },
    "variance": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Variance" } },
    "distribution": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Distribution" } },
    "othersCount": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Others" } },
    "emptyCount": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "(Empty)" } }
  },
  "databaseForm": {
    "importLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Would you like to import existing data?" } },
    "emptyLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Start from scratch" } },
    "airtableLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Import from Airtable" } }
  },
  "importFromAirtable": {
    "airtableShareLinkTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Share a link to your Base" } },
    "airtableShareLinkDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": 'To import your Airtable base, you need to have a shared link to your entire base. In Airtable, click on the share button in the top right corner after opening your base. After that you must choose the "Share via link" option. In the share modal you can click on the "Share publicly" tab and then on \u201CEnable shared base link\u201D. Copy the public link and paste it in the input below.' } },
    "airtableShareLinkBeta": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": 'This functionality will import most of the data, but there are incompatibilities. A table named "Airtable import report" will therefore be added containing a list of things that were not or partially imported.' } },
    "airtableShareLinkPaste": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Paste the link here" } },
    "importButtonLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Import from Airtable" } },
    "openButtonLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Open imported database" } },
    "importError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Something went wrong" } },
    "statePending": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Waiting to start" } },
    "stateFailed": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Failed" } },
    "stateFinished": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Finished" } },
    "stateDownloadingBase": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Downloading base schema" } },
    "stateConverting": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Converting to Baserow" } },
    "stateDownloadingFiles": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Downloading files" } },
    "stateImporting": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Importing" } },
    "stateImportingTable": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Importing table " }, { "t": 4, "k": "table" }] } },
    "errorJobAlreadyRunningTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Already running" } },
    "errorJobAlreadyRunningDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Another import job is already running. You need to wait for that one to finish before starting another." } },
    "linkError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "The link should look like: https://airtable.com/shrxxxxxxxxxxxxxx" } },
    "skipFiles": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Skip importing files" } },
    "skipFilesHelper": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "An Airtable base with many files can slow down the import. Enabling this skips the import of the files." } },
    "useSession": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Session authentication" } },
    "useSessionHelper": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Use this if the publicly shared base requires authentication." } },
    "sessionDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": 'If the import responds with "The Airtable base requires authentication." then it could be that the organizational settings in Airtable prevent accessing the Airtable base without authenticating first. To do this, the session and signature must be manually extracted. Visit the URL of the publicly shared base in your browser and sign in, if needed. Click on the application menu by clicking in the top right corner -> "More tools" -> "Developer tools". Open the "Application" (in Firefox "Storage") tab and click on "https://airtable.com". Now find the "__Host-airtable-session" and "__Host-airtable-session.sig" cookie values, and paste them in the inputs below.' } },
    "sessionLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Session cookie (__Host-airtable-session)" } },
    "sessionSignatureLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Session signature cookie (__Host-airtable-session.sig)" } }
  },
  "chooseSingleSelectField": {
    "addSelectField": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Add single select field" } },
    "warningWhenNothingToChooseOrCreate": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "There are no single select fields to choose from and you do not have permissions to make one." } }
  },
  "viewDecoratorContext": {
    "addDecorator": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Add decorator" } }
  },
  "databaseDashboardResourceLinks": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "API documentation" } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Learn more about our code" } }
  },
  "formViewField": {
    "required": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "required" } },
    "descriptionPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Description" } },
    "includeAllSelectOptions": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "include all select options" } },
    "includeAllSelectOptionsHelper": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Choose the select options that must be included in the form using this dropdown" } },
    "showWhenMatchingConditions": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "show when conditions are met" } },
    "addCondition": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Add condition" } },
    "addConditionGroup": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Add condition group" } },
    "showFieldAs": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Show field as" } },
    "noSelectOptions": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "There are no select options available." } },
    "noCollaboratorsAvailable": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "There are no collaborators available." } },
    "cannotSumitValues": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "This field is read-only and won't be displayed in the form." } }
  },
  "duplicateFieldContext": {
    "duplicate": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Duplicate field" } },
    "cloneData": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Copy data" } },
    "readOnlyField": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cell values will be filled automatically." } }
  },
  "changePrimaryFieldModal": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Change the primary field" } },
    "change": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Change" } },
    "primaryFieldLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Primary field" } },
    "existingPrimary": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": '"' }, { "t": 4, "k": "name" }, { "t": 3, "v": '" is currently the primary field.' }] } }
  },
  "snapshotsModal": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "snapshots" } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Snapshots are a full copy of your " }, { "t": 4, "k": "applicationTypeName" }, { "t": 3, "v": " of the moment when they were created. A duplication of that data will be created when restoring. Snapshots are automatically deleted after one year." }] } },
    "descriptionLimits": { "t": 0, "b": { "t": 1, "c": [{ "t": 2, "i": [{ "t": 3, "v": "You can have a maximum of " }, { "t": 4, "k": "n" }, { "t": 3, "v": " snapshots per workspace." }] }, { "t": 2, "i": [{ "t": 3, "v": "You can have a maximum of " }, { "t": 4, "k": "n" }, { "t": 3, "v": " snapshot per workspace." }] }, { "t": 2, "i": [{ "t": 3, "v": "You can have a maximum of " }, { "t": 4, "k": "n" }, { "t": 3, "v": " snapshots per workspace." }] }] } },
    "createLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Create a new snapshot" } },
    "create": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Create snapshot" } },
    "cancel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cancel" } },
    "snapshotRestoredErrorTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Error occurred" } },
    "snapshotRestoredErrorMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "The snapshot couldn't be restored. please try again later." } },
    "snapshotDeletedErrorTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Error occurred" } },
    "snapshotDeletedErrorMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "The snapshot couldn't be deleted. please try again later." } },
    "limitReached": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "The limit of maximum snapshots has been reached." } },
    "snapshot": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Snapshot" } },
    "importingState": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Creating" } },
    "reset": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Create another" } },
    "noSnapshots": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "No snapshots for this application yet." } },
    "nameAlreadyExists": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "A snapshot with this name already exists." } }
  },
  "deleteSnapshotModal": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Delete snapshot" } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Are you sure you want to permanently delete snapshot " }, { "t": 4, "k": "name" }, { "t": 3, "v": "?" }] } },
    "confirm": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Delete" } }
  },
  "snapshotListItem": {
    "restore": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "restore" } },
    "delete": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "delete" } },
    "created": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "created" } }
  },
  "formViewModeType": {
    "form": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Form" } },
    "formDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "All fields are visible and vertically stacked." } }
  },
  "formViewHeader": {
    "mode": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mode" } },
    "preview": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Preview" } },
    "fields": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Fields" } }
  },
  "formViewModePreviewForm": {
    "addCoverImage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Add a cover image" } },
    "addLogo": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Add a logo" } },
    "titlePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Title" } },
    "descriptionPlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Description" } },
    "noFieldsTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "This form doesn't have any fields" } },
    "noFieldsContent": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Click on a field in the left sidebar to add one." } }
  },
  "table": {
    "adjacentRow": {
      "toast": {
        "notFound": {
          "next": {
            "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "No more rows" } },
            "message": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "There is no next row" } }
          },
          "previous": {
            "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "No more rows" } },
            "message": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "There is no previous row" } }
          }
        },
        "error": {
          "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Error occurred" } },
          "message": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "An error occurred while retrieving the adjacent row" } }
        }
      }
    },
    "chooseView": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Choose view" } }
  },
  "fileField": {
    "errorEmptyFileNameTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Invalid file name" } },
    "errorEmptyFileNameMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "You can't set an empty name for a file." } }
  },
  "fieldCollaboratorSubForm": {
    "notifyUserWhenAdded": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Notify user when added" } }
  },
  "collaboratorAddedToRowNotification": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "sender" }, { "t": 3, "v": " assigned you to " }, { "t": 4, "k": "fieldName" }, { "t": 3, "v": " in row " }, { "t": 4, "k": "rowId" }, { "t": 3, "v": " in " }, { "t": 4, "k": "tableName" }] } },
    "unknownUser": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "An unknown user" } }
  },
  "formSubmittedNotification": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "formName" }, { "t": 3, "v": " has been submitted in table " }, { "t": 4, "k": "tableName" }, { "t": 3, "v": ":" }] } },
    "moreValues": { "t": 0, "b": { "t": 1, "c": [{ "t": 2, "i": [{ "t": 3 }], "s": "0" }, { "t": 2, "i": [{ "t": 3 }], "s": "and 1 more field." }, { "t": 2, "i": [{ "t": 3, "v": "and " }, { "t": 4, "k": "count" }, { "t": 3, "v": " more fields." }] }] } }
  },
  "rowHistorySidebar": {
    "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "History" } },
    "empty": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "No changes yet. You'll be able to track any changes to this row here." } },
    "you": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "You" } },
    "created": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "created this row" } },
    "updated": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "updated this row" } },
    "submitted": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "submitted this row" } },
    "deleted": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "deleted this row" } },
    "restored": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "restored this row" } },
    "createdUndo": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "undo row creation" } },
    "updatedUndo": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "undo row update" } },
    "deletedUndo": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "undo row deletion" } }
  },
  "fieldPasswordSubForm": {
    "allowEndpointAuthentication": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Allow API endpoint authentication" } },
    "allowEndpointAuthenticationHelp": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "This exposes an endpoint where the row ID and password can be checked if it's correct. This allows using Baserow as authentication backend." } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "The password field can also be used by the user authentication in the application builder." } }
  },
  "rowEditFieldPassword": {
    "setPassword": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Set password" } }
  },
  "rowHistoryFieldPassword": {
    "passwordSet": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "The password was set" } },
    "passwordUpdated": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "The password was updated" } },
    "passwordDeleted": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "The password was deleted" } }
  },
  "dataProviderTypes": {
    "fieldsName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Fields" } }
  },
  "userMentionInRichTextFieldNotification": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "sender" }, { "t": 3, "v": " mentioned you in field " }, { "t": 4, "k": "fieldName" }, { "t": 3, "v": " of row " }, { "t": 4, "k": "rowId" }, { "t": 3, "v": " in " }, { "t": 4, "k": "tableName" }] } },
    "deletedUser": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "A deleted user" } }
  },
  "databaseImportStep": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Import your data" } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Move your data to Baserow, in just a few clicks." } },
    "tableNameLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Table name" } },
    "tableNamePrefill": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "name" }, { "t": 3, "v": "'s table" }] } }
  },
  "databaseScratchTrackFieldsStep": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Choose fields for every row" } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Pick up to " }, { "t": 4, "k": "selectedFieldsLimitCount" }, { "t": 3, "v": " fields. You can add more later." }] } },
    "fieldName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Name" } },
    "fieldType": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Field type" } },
    "fieldDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Description" } },
    "fieldDetails": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Details" } },
    "fieldNumber": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Number" } },
    "fieldDate": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Date" } },
    "fieldBoolean": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Finished" } },
    "fieldDuration": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Duration" } },
    "fieldUrl": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "URL" } },
    "fieldEmail": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Email" } },
    "fieldRating": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Rating" } },
    "fieldCategory": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Category" } },
    "fieldKickoffDate": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kickoff date" } },
    "fieldDueDate": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Due date" } },
    "fieldBudget": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Budget" } },
    "fieldCompleted": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Completed" } },
    "fieldNotes": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Notes" } },
    "fieldRole": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Role" } },
    "fieldPhone": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Phone" } },
    "fieldActive": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Active" } },
    "fieldEstimatedDays": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Estimated days" } },
    "fieldStartDate": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Start date" } },
    "fieldEndDate": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "End date" } },
    "projectsCategoryDesign": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Design" } },
    "projectsCategoryDevelopment": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Development" } },
    "projectsCategoryMarketing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Marketing" } },
    "projectsNotesRow1": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Acme is looking for a complete rebranding of their website with the following guidelines." } },
    "projectsNotesRow2": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Research if the current users of Soylent are interested into a new user portal." } },
    "projectsNotesRow3": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wondering if this is worth doing after the Facebook ad boycott. Studies are showing that paid ad campaigns have become increasingly less effective." } },
    "teamsRoleDesigner": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Designer" } },
    "teamsRoleDeveloper": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Developer" } },
    "teamsRoleMarketer": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Marketer" } },
    "tasksDetailsRow1": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "The logo needs to be improved to make the CTA clearer." } },
    "tasksDetailsRow2": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "The structure is a little off, so we may need to adjust the sitemap here as well." } },
    "tasksDetailsRow3": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "The new footer should include our contact information and also a small (but clear) CTA." } },
    "campaignsDetailsRow1": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Heat up your savings with our sizzling summer sale, featuring unbeatable discounts on all your favorite products!" } },
    "campaignsDetailsRow2": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Boost customer retention and engagement with our enticing loyalty rewards program, designed to reward your most dedicated customers." } },
    "campaignsDetailsRow3": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Revitalize your business and captivate your audience with a dynamic brand relaunch that aligns perfectly with today's market trends and customer desires." } },
    "customFieldsDescriptionRow1": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Turpis massa tincidunt dui ut ornare lectus sit amet est." } },
    "customFieldsDescriptionRow2": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Vitae justo eget magna fermentum iaculis eu non diam." } },
    "customFieldsDescriptionRow3": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Convallis tellus id interdum velit laoreet id donec ultrices tincidunt." } }
  },
  "databaseScratchTrackStep": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "What would you like to track?" } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Choose from popular use cases, or create your own." } },
    "addYourOwn": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Add your own" } },
    "tableName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Table name" } },
    "rowName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Row name" } },
    "thisIncludes": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "This includes:" } },
    "projects": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Projects" } },
    "productsRow1": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Rebranding website" } },
    "productsRow2": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Customer research" } },
    "productsRow3": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Paid ad campaign" } },
    "teams": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Teams" } },
    "teamsRow1": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sales" } },
    "teamsRow2": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "HR" } },
    "teamsRow3": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Marketing" } },
    "tasks": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tasks" } },
    "tasksRow1": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Logo redesign" } },
    "tasksRow2": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Send email" } },
    "tasksRow3": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Write blog post" } },
    "campaigns": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Campaigns" } },
    "campaignsRow1": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Summer Sale" } },
    "campaignsRow2": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Loyalty Rewards" } },
    "campaignsRow3": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Brand Relaunch" } }
  },
  "databaseStep": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Create your first database" } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Select where you'd like to start from:" } },
    "databaseNameLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Database name" } },
    "databaseNamePrefill": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "name" }, { "t": 3, "v": "'s database" }] } },
    "scratch": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Scratch" } },
    "import": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "File" } },
    "airtable": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Airtable" } },
    "template": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Template" } },
    "workspaceName": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "name" }, { "t": 3, "v": "'s workspace" }] } }
  },
  "ViewFilterTypeDateUpgradeToMultiStep": {
    "migrateButtonText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Migrate to multi-step date filter" } },
    "migrateButtonTooltip": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "New filter available. Click to upgrade. It works the same." } }
  },
  "dataSyncType": {
    "syncError": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sync error" } },
    "icalCalendar": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sync iCal feed" } },
    "postgresql": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sync PostgreSQL table" } }
  },
  "iCalCalendarDataSync": {
    "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "iCal URL" } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "The iCal calendar sync, synchronizes automatically with the entries in the calendar file of the URL. It only supports the ICS (Internet Calendar and Scheduling) file type." } }
  },
  "postgreSQLDataSync": {
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Synchronizes a PostgreSQL table with a Baserow table matching the provided details below. Note that when the synchronization starts, it will select all the rows in the provided table. Even though Baserow only selects data, we strongly recommend limiting the user to a read-only connection." } },
    "host": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Host" } },
    "username": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Username" } },
    "password": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Password" } },
    "database": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Database" } },
    "schema": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Schema" } },
    "table": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Table" } },
    "port": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Port" } },
    "sslMode": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "SSL Mode" } }
  },
  "createDataSync": {
    "next": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Next" } },
    "fields": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Select the fields you would like to sync" } },
    "create": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Create and sync table" } },
    "error": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Something went wrong during the sync" } },
    "autoAddLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Auto add new properties" } },
    "autoAddHelper": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Automatically adds and synchronizes newly available properties from the data source into the Baserow table. Note that in order for this to work, all properties must be synced." } },
    "twoWaySyncLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Two-way sync" } },
    "deleteUnmatchedRowsLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Delete rows when they are deleted or hidden in the source" } },
    "deleteUnmatchedRowsHelper": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "When enabled, rows that are deleted or no longer visible in the source are also deleted from this table on every sync. When disabled, those rows are kept and reused if the source row reappears." } },
    "syncing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Syncing data..." } }
  },
  "syncTableModal": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "Sync " }, { "t": 4, "k": "name" }] } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "This table is linked to a data sync. When you click the sync button, the data will be synchronized with the source. During this process, a lock is placed on the updated rows, which may temporarily slow down API requests or table modifications." } },
    "sync": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sync table" } },
    "hide": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Hide" } }
  },
  "gridViewRowHeight": {
    "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Height" } },
    "small": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Small" } },
    "medium": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Medium" } },
    "large": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Large" } }
  },
  "gridViewFreezeHandle": {
    "freeze": { "t": 0, "b": { "t": 1, "c": [{ "t": 2, "i": [{ "t": 3 }], "s": "Freeze 0 columns" }, { "t": 2, "i": [{ "t": 3 }], "s": "Freeze 1 column" }, { "t": 2, "i": [{ "t": 3, "v": "Freeze " }, { "t": 4, "k": "count" }, { "t": 3, "v": " columns" }] }] } },
    "hoverHint": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Drag to freeze columns" } }
  },
  "configureDataSyncModal": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Data sync" } },
    "syncedFields": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Synced fields" } },
    "syncSettings": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sync settings" } }
  },
  "configureDataSyncVisibleFields": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Change synced fields" } },
    "fields": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Synced fields" } },
    "syncTable": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sync when save" } }
  },
  "configureDataSyncSettings": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Change data sync" } },
    "syncTable": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sync when save" } }
  },
  "webhookDeactivatedNotification": {
    "body": { "t": 0, "b": { "t": 2, "i": [{ "t": 4, "k": "name" }, { "t": 3, "v": " webhook has been deactivated because it failed too many times consecutively." }] } }
  },
  "webhookPayloadTooLargeNotification": {
    "body": { "t": 0, "b": { "t": 2, "i": [{ "t": 3, "v": "The payload for the " }, { "t": 4, "k": "name" }, { "t": 3, "v": " webhook with event ID " }, { "t": 4, "k": "event_id" }, { "t": 3, "v": " was too large. The content has been split into multiple batches, but data above the batch limit of " }, { "t": 4, "k": "batch_limit" }, { "t": 3, "v": " was discarded." }] } }
  },
  "tablesGuidedTourStep": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Setup tables" } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tables store your information neatly. Create a new table within your database to start structuring your data." } }
  },
  "filterSortGroupGuidedTourStep": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Find and Organize Your Data" } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Quickly locate information by filtering and sorting on your rows. Instantly group by any of the fields to clearly visualize patterns and simplify your workflows." } }
  },
  "addFieldGuidedTourStep": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Customize Your Data" } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Click \u201C+\u201D to add new fields (columns). Choose from various field types to capture exactly what matters most to your project." } }
  },
  "createViewGuidedTourStep": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Personalize Your Views" } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Create custom views like grid, calendar, kanban, or gallery to visualize your data exactly how you want it." } }
  },
  "createFormViewGuidedTourStep": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Create a Form" } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Quickly build forms from your tables to collect responses directly into your table, streamlining data collection." } }
  },
  "viewOptionsGuidedTourStep": {
    "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "View Options" } },
    "content": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Click on the three dots next to the view to export, import, duplicate, and configure a webhook." } }
  },
  "fieldRules": {
    "errorTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Error during field rule processing" } },
    "ruleDoesNotExist": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Rule doesn't exist" } },
    "ruleTypeDoesNotExist": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Rule type doesn't exist" } },
    "ruleAlreadyExists": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Rule already exists" } }
  },
  "fieldFormViewEditRowSubForm": {
    "selectFormViewLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Form view" } },
    "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Each row will get a unique link that opens this form pre-filled with that row's data. Note that everyone with read access to the table and field will be able to edit the row via the form view, also viewers and visitors of a publicly shared view." } },
    "notPublicWarning": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "This form view is not publicly shared. The edit link will not work until the form is made public." } },
    "notPublic": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "(not public)" } },
    "formDoesNotExist": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "The selected form does not exist anymore." } }
  },
  "editRowLink": {
    "editRow": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Edit row" } }
  },
  "rowEditFieldFormViewEditRow": {
    "copyLink": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Copy link" } },
    "noFormView": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "No form view configured" } }
  }
};

export { resource as default };
//# sourceMappingURL=en-BLt_wfQn.mjs.map
