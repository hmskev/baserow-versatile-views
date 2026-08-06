import { defineNuxtModule, addPlugin, createResolver } from 'nuxt/kit'

/**
 * Compiled into Baserow's production frontend through the ADDITIONAL_MODULES hook.
 * See the Dockerfile for how the build wires this in.
 */
export default defineNuxtModule({
  meta: {
    name: '@hms/baserow-versatile-views',
  },

  setup(options, nuxt) {
    const { resolve } = createResolver(import.meta.url)

    addPlugin({ src: resolve('./plugin.js') })

    nuxt.options.alias['@hms/versatile-views'] = resolve('.')

    // The view styles. Pushed onto Nuxt's css list so they are part of the same
    // build as everything else rather than loaded separately at runtime.
    nuxt.options.css.push(resolve('./assets/scss/default.scss'))

    // Translations are NOT registered through the `i18n:registerModule` hook here.
    // That hook takes the full locale list a module supports, and passing a list of
    // just English replaced Baserow's own locale configuration rather than adding to
    // it, which left the entire app rendering raw keys - `sidebar.home`,
    // `viewFilter.filter` and so on. The plugin merges our messages into the existing
    // catalogue instead, which is additive and cannot drop anyone else's strings.
  },
})
