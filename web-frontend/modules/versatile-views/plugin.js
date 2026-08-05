import { defineNuxtPlugin } from '#app'
import {
  VersatileCalendarElementType,
  VersatileKanbanElementType,
  VersatileTimelineElementType,
} from './elementTypes.js'

export default defineNuxtPlugin({
  name: 'versatile-views',
  dependsOn: ['builder'],
  setup(nuxtApp) {
    const context = { app: nuxtApp }
    nuxtApp.$registry.register(
      'element',
      new VersatileKanbanElementType(context)
    )
    nuxtApp.$registry.register(
      'element',
      new VersatileCalendarElementType(context)
    )
    nuxtApp.$registry.register(
      'element',
      new VersatileTimelineElementType(context)
    )
  },
})
