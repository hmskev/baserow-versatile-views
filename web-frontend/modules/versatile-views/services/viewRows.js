import bufferedRowService from '@baserow/modules/database/services/view/bufferedRows'

/**
 * Row services for our view types.
 *
 * The prefix is the url segment the backend registers the view type's row endpoint
 * under, so `hms-kanban` resolves to /api/database/views/hms-kanban/<view_id>/.
 */
export const KanbanService = (client) => bufferedRowService(client, 'hms-kanban')
export const CalendarService = (client) =>
  bufferedRowService(client, 'hms-calendar')
export const TimelineService = (client) =>
  bufferedRowService(client, 'hms-timeline')
export const ListService = (client) => bufferedRowService(client, 'hms-list')
