import { defineNuxtPlugin } from '#app'

import {
  VersatileCalendarElementType,
  VersatileKanbanElementType,
  VersatileTimelineElementType,
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

/**
 * Registers our view types and Application Builder elements.
 *
 * `dependsOn` matters: the view type registry and the row store modules this plugin
 * adds to are set up by Baserow's own database and builder plugins, so those have to
 * run first.
 */
export default defineNuxtPlugin({
  name: 'versatile-views',
  dependsOn: ['database', 'builder'],
  setup(nuxtApp) {
    const context = { app: nuxtApp, store: nuxtApp.$store }

    // Each view type keeps its own buffered window of rows, registered under
    // `view/<type>` so the store paths used by the components resolve.
    const stores = [
      ['hms_kanban', KanbanService],
      ['hms_calendar', CalendarService],
      ['hms_timeline', TimelineService],
      ['hms_list', ListService],
    ]

    for (const [name, service] of stores) {
      nuxtApp.$store.registerModule(
        ['view', name],
        cardViewStore(service(nuxtApp.$client))
      )
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
  },
})
