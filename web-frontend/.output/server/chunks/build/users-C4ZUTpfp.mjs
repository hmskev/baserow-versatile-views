import { a5 as baseService } from './server.mjs';

!(function() {
  try {
    var e = false ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
    var n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "dfdce7f3-8aac-4420-ace9-08c0cacac8f6", e._sentryDebugIdIdentifier = "sentry-dbid-dfdce7f3-8aac-4420-ace9-08c0cacac8f6");
  } catch (e2) {
  }
})();
const UserService = (client) => {
  return Object.assign(baseService(client, "/admin/users/"), {
    update(userId, values) {
      return client.patch(`/admin/users/${userId}/`, values);
    },
    delete(userId) {
      return client.delete(`/admin/users/${userId}/`);
    },
    disableTwoFactorAuth(userId) {
      return client.delete(`/admin/users/${userId}/two-factor-auth/`);
    },
    impersonate(userId) {
      return client.post(`/admin/users/impersonate/`, {
        user: userId
      });
    }
  });
};

export { UserService as U };
//# sourceMappingURL=users-C4ZUTpfp.mjs.map
