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

    // Only English is shipped for now. Baserow falls back to the default locale for
    // any language a module does not translate, so other languages keep working.
    nuxt.hook('i18n:registerModule', (register) => {
      register({
        langDir: resolve('./locales'),
        locales: [{ code: 'en', file: 'en.json' }],
      })
    })
  },
})
