import { A as AuthService, I as notifyIf } from './server.mjs';

!(function() {
  try {
    var e = false ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
    var n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "1d5fcdc6-0871-4cb8-8835-77091afd1f97", e._sentryDebugIdIdentifier = "sentry-dbid-1d5fcdc6-0871-4cb8-8835-77091afd1f97");
  } catch (e2) {
  }
})();
const resendEmailVerification = {
  data() {
    return {
      resendLoading: false,
      resendSuccess: false
    };
  },
  methods: {
    async resend(email) {
      if (this.resendLoading) {
        return;
      }
      this.resendLoading = true;
      try {
        await AuthService(this.$client).sendVerifyEmail(email);
        this.resendSuccess = true;
        this.$store.dispatch("toast/info", {
          title: this.$t("resendEmailVerification.confirmationEmailSentTitle"),
          message: this.$t(
            "resendEmailVerification.confirmationEmailSentDescription"
          )
        });
      } catch (error) {
        notifyIf(error, "emailVerification");
      }
      this.resendLoading = false;
    }
  }
};

export { resendEmailVerification as r };
//# sourceMappingURL=resendEmailVerification-B41zYwUk.mjs.map
