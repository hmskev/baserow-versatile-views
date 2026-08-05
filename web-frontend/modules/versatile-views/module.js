import { defineNuxtModule, addPlugin, createResolver } from '@nuxt/kit'

export default defineNuxtModule({
  meta: {
    name: '@hms/baserow-versatile-views',
  },
  setup(_, nuxt) {
    const { resolve } = createResolver(import.meta.url)
    addPlugin(resolve('./plugin.js'), { mode: 'all' })
    nuxt.options.alias['@hms/versatile-views'] = resolve('.')
  },
})
