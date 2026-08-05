import process from 'node:process';globalThis._importMeta_={url:import.meta.url,env:process.env};!function(){try{var e="undefined"!="undefined"?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{};var n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="5e2c4b46-dfd8-42c4-9f1d-c7b30e5cfa3f",e._sentryDebugIdIdentifier="sentry-dbid-5e2c4b46-dfd8-42c4-9f1d-c7b30e5cfa3f");}catch(e){}}();import { u as useRuntimeConfig } from './chunks/nitro/nitro.mjs';
import * as path from 'node:path';
import { DEV_ENVIRONMENT, DEFAULT_ENVIRONMENT, applySdkMetadata, getGlobalScope, vercelWaitUntil, debug, flush } from '@sentry/core';
import { init as init$1, getDefaultIntegrations, httpIntegration } from '@sentry/node';
import { isCjs } from '@sentry/node-core';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:crypto';
import 'vue-router';
import 'node:url';

/**
 * This serves as a build time flag that will be true by default, but false in non-debug builds or if users replace `__SENTRY_DEBUG__` in their generated code.
 *
 * ATTENTION: This constant must never cross package boundaries (i.e. be exported) to guarantee that it can be used for tree shaking.
 */
const DEBUG_BUILD = (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__);

/**
 * Initializes the server-side of the Nuxt SDK
 *
 * @param options Configuration options for the SDK.
 */
function init(options) {
  const envFallback = !isCjs() && false ? DEV_ENVIRONMENT : DEFAULT_ENVIRONMENT;
  const sentryOptions = {
    environment: options.environment ?? process.env.SENTRY_ENVIRONMENT ?? envFallback,
    defaultIntegrations: getNuxtDefaultIntegrations(options),
    ...options,
  };

  applySdkMetadata(sentryOptions, 'nuxt', ['nuxt', 'node']);

  const client = init$1(sentryOptions);

  getGlobalScope().addEventProcessor(lowQualityTransactionsFilter(options));
  getGlobalScope().addEventProcessor(clientSourceMapErrorFilter(options));

  return client;
}

/**
 * Filter out transactions for resource requests which we don't want to send to Sentry
 * for quota reasons.
 *
 * Only exported for testing
 */
function lowQualityTransactionsFilter(options) {
  return Object.assign(
    (event => {
      if (event.type !== 'transaction' || !event.transaction || isCacheEvent(event)) {
        return event;
      }

      // Check if this looks like a parametrized route (contains :param or :param() patterns)
      const hasRouteParameters = /\/:[^(/\s]*(\([^)]*\))?[^/\s]*/.test(event.transaction);

      if (hasRouteParameters) {
        return event;
      }

      // We don't want to send transaction for file requests, so everything ending with a *.someExtension should be filtered out
      // path.extname will return an empty string for normal page requests
      if (path.extname(event.transaction)) {
        options.debug &&
          DEBUG_BUILD &&
          debug.log('NuxtLowQualityTransactionsFilter filtered transaction: ', event.transaction);
        return null;
      }
      return event;
    }) ,
    { id: 'NuxtLowQualityTransactionsFilter' },
  );
}

/**
 * The browser devtools try to get the source maps, but as client source maps may not be available there is going to be an error (no problem for the application though).
 *
 * Only exported for testing
 */
function clientSourceMapErrorFilter(options) {
  return Object.assign(
    (event => {
      const errorMsg = event.exception?.values?.[0]?.value;
      if (errorMsg?.match(/^ENOENT: no such file or directory, open '.*\/_nuxt\/.*\.js\.map'/)) {
        options.debug && DEBUG_BUILD && debug.log('NuxtClientSourceMapErrorFilter filtered error: ', errorMsg);
        return null;
      }
      return event;
    }) ,
    { id: 'NuxtClientSourceMapErrorFilter' },
  );
}

function getNuxtDefaultIntegrations(options) {
  return [
    ...getDefaultIntegrations(options).filter(integration => integration.name !== 'Http'),
    // The httpIntegration is added as defaultIntegration, so users can still overwrite it
    httpIntegration({
      instrumentation: {
        responseHook: () => {
          // Makes it possible to end the tracing span before closing the Vercel lambda (https://vercel.com/docs/functions/functions-api-reference#waituntil)
          vercelWaitUntil(flushSafelyWithTimeout());
        },
      },
    }),
  ];
}

/**
 * Flushes pending Sentry events with a 2-second timeout and in a way that cannot create unhandled promise rejections.
 */
async function flushSafelyWithTimeout() {
  try {
    DEBUG_BUILD && debug.log('Flushing events...');
    await flush(2000);
    DEBUG_BUILD && debug.log('Done flushing events');
  } catch (e) {
    DEBUG_BUILD && debug.log('Error while flushing events:\n', e);
  }
}

/**
 * Checks if the event is a cache event.
 */
function isCacheEvent(e) {
  return e.contexts?.trace?.origin === 'auto.cache.nuxt';
}

const SILENCED_API_ERRORS = {
  401: ["ERROR_INVALID_ACCESS_TOKEN", "ERROR_INVALID_REFRESH_TOKEN"]
};

const config = useRuntimeConfig();
const dsn = config.public.sentryDsn === "fake" ? "https://fake@localhost/1" : config.public.sentryDsn;
if (dsn && dsn !== "") {
  init({
    dsn,
    release: `baserow-web-frontend@${config.public.version}`,
    environment: config.public.sentryEnvironment || "production",
    // Sample rate for performance tracing, configurable via the
    // SENTRY_TRACES_SAMPLE_RATE env var (shared with the backend).
    tracesSampleRate: parseFloat(config.public.sentryTracesSampleRate) || 0,
    ...{},
    beforeSend(event, hint) {
      var _a, _b, _c, _d, _e, _f;
      const err = hint == null ? void 0 : hint.originalException;
      if ((err == null ? void 0 : err.fatal) === false) {
        return null;
      } else if ((err == null ? void 0 : err.fatal) === true && ((_a = err == null ? void 0 : err.data) == null ? void 0 : _a.report) === false) {
        return null;
      }
      const status = ((_b = err == null ? void 0 : err.response) == null ? void 0 : _b.status) || (err == null ? void 0 : err.statusCode);
      const errorCode = ((_d = (_c = err == null ? void 0 : err.response) == null ? void 0 : _c.data) == null ? void 0 : _d.error) || ((_e = err == null ? void 0 : err.data) == null ? void 0 : _e.error);
      if ((_f = SILENCED_API_ERRORS[status]) == null ? void 0 : _f.includes(errorCode)) {
        return null;
      }
      {
        return event;
      }
    }
  });
}
//# sourceMappingURL=sentry.server.config.mjs.map
