import { defineNuxtPlugin } from '#app'

import {
  VersatileCalendarElementType,
  VersatileKanbanElementType,
  VersatileTimelineElementType,
  VersatileGalleryElementType,
} from './elementTypes.js'
import {
  HmsCalendarViewType,
  HmsKanbanViewType,
  HmsListViewType,
  HmsTimelineViewType,
} from './viewTypes.js'
import cardViewStore from './store/cardViewStore.js'
import {
  CalendarService,
  KanbanService,
  ListService,
  TimelineService,
} from './services/viewRows.js'
import englishMessages from './locales/en.json'

/**
 * Registers our view types and Application Builder elements.
 *
 * `dependsOn` matters. `database-store` creates the root store modules our row stores
 * are registered next to, and `database` and `builder` create the registries we
 * register into, so all three have to run first.
 */
export default defineNuxtPlugin({
  name: 'versatile-views',
  dependsOn: ['i18n:plugin', 'database-store', 'database', 'builder'],
  setup(nuxtApp) {
    const context = { app: nuxtApp, store: nuxtApp.$store }

    // Add our strings to the catalogue that already exists. mergeLocaleMessage is
    // additive per locale, so Baserow's own translations stay exactly as they were.
    // Registering a locale list through the i18n module hook instead replaced
    // Baserow's locale configuration and left the whole app showing raw keys.
    if (nuxtApp.$i18n?.mergeLocaleMessage) {
      nuxtApp.$i18n.mergeLocaleMessage('en', englishMessages)
    }

    // Each view type keeps its own buffered window of rows.
    //
    // Baserow registers a view's row store once per context and addresses it through
    // a store prefix, so `page/view/grid` is the table page and `template/view/grid`
    // is the template preview. Components then dispatch to
    // `${storePrefix}view/<type>/...`. Registering under only one prefix would break
    // the other context, so both are registered here, exactly as Baserow does for
    // its own grid, gallery and form stores.
    const stores = [
      ['hms_kanban', KanbanService],
      ['hms_calendar', CalendarService],
      ['hms_timeline', TimelineService],
      ['hms_list', ListService],
    ]

    for (const [name, service] of stores) {
      for (const prefix of ['page', 'template']) {
        const path = `${prefix}/view/${name}`
        if (!nuxtApp.$store.hasModule(path)) {
          // Pass the service factory itself, not a built service. Baserow's
          // bufferedRows store calls `service($client)` at request time so it picks
          // up the right client, including the public one for a shared view.
          nuxtApp.$store.registerModuleNuxtSafe(path, cardViewStore(service))
        }
      }
    }

    nuxtApp.$registry.register('view', new HmsKanbanViewType(context))
    nuxtApp.$registry.register('view', new HmsCalendarViewType(context))
    nuxtApp.$registry.register('view', new HmsTimelineViewType(context))
    nuxtApp.$registry.register('view', new HmsListViewType(context))

    nuxtApp.$registry.register('element', new VersatileKanbanElementType(context))
    nuxtApp.$registry.register(
      'element',
      new VersatileCalendarElementType(context)
    )
    nuxtApp.$registry.register(
      'element',
      new VersatileTimelineElementType(context)
    )
    nuxtApp.$registry.register(
      'element',
      new VersatileGalleryElementType(context)
    )
  },
})
