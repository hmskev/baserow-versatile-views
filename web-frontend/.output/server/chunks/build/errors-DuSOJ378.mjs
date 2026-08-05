!(function() {
  try {
    var e = false ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
    var n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "741fe92b-8fd5-4ea9-9907-f4c11ef2378f", e._sentryDebugIdIdentifier = "sentry-dbid-741fe92b-8fd5-4ea9-9907-f4c11ef2378f");
  } catch (e2) {
  }
})();
function normalizeError(err) {
  var _a, _b;
  err = ((_b = (_a = err.response) == null ? void 0 : _a.data) == null ? void 0 : _b.message) ? err.response.data : err.response || err;
  return {
    message: err.message,
    content: err.detail,
    statusCode: err.statusCode
  };
}

export { normalizeError as n };
//# sourceMappingURL=errors-DuSOJ378.mjs.map
