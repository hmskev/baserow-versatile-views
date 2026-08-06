import {
  ViewType,
  BaseBufferedRowViewTypeMixin,
} from '@baserow/modules/database/viewTypes'
import { maxPossibleOrderValue } from '@baserow/modules/database/utils/view'

import KanbanView from './components/kanban/KanbanView.vue'
import KanbanViewHeader from './components/kanban/KanbanViewHeader.vue'
import CalendarView from './components/calendar/CalendarView.vue'
import CalendarViewHeader from './components/calendar/CalendarViewHeader.vue'
import TimelineView from './components/timeline/TimelineView.vue'
import TimelineViewHeader from './components/timeline/TimelineViewHeader.vue'
import ListView from './components/list/ListView.vue'
import ListViewHeader from './components/list/ListViewHeader.vue'

/**
 * Shared behaviour for our card-style view types.
 *
 * Each view type points at one or more fields (a date field, a select field to stack
 * by, and so on). When such a field is deleted, or changes to a type that can no
 * longer serve that role, the reference has to be cleared in the store so the view
 * does not keep rendering against a field that is gone. The backend does the same on
 * its side; this keeps the open browser tab consistent without a reload.
 */
const CardViewTypeMixin = (Base) =>
  class extends BaseBufferedRowViewTypeMixin(Base) {
    /**
     * View attributes that reference a field, mapped to the field types that are
     * still valid for them. An empty list means any field type is acceptable.
     */
    getFieldReferences() {
      return {}
    }

    canFilter() {
      return true
    }

    canSort() {
      return true
    }

    canShare() {
      return true
    }

    canShowRowModal() {
      return true
    }

    getDefaultFieldOptionValues() {
      // Must match the field options model defaults in the backend.
      return {
        hidden: true,
        order: maxPossibleOrderValue,
      }
    }

    async afterFieldUpdated(
      { dispatch, rootGetters },
      field,
      oldField,
      fieldType,
      storePrefix
    ) {
      const references = this.getFieldReferences()

      for (const [attribute, allowedTypes] of Object.entries(references)) {
        const wasAllowed =
          allowedTypes.length === 0 || allowedTypes.includes(oldField.type)
        const isAllowed =
          allowedTypes.length === 0 || allowedTypes.includes(field.type)

        if (wasAllowed && !isAllowed) {
          this._setFieldToNull({ dispatch, rootGetters }, field, attribute)
        }
      }

      // A field's settings can change how its value is rendered and matched, so the
      // search results have to be recomputed. A date format change, for example,
      // means a search string that matched before may not match now.
      await dispatch(
        `${storePrefix}view/${this.getType()}/updateSearch`,
        { fields: rootGetters['field/getAll'] },
        { root: true }
      )
    }

    async afterFieldDeleted(context, field, fieldType, storePrefix = '') {
      for (const attribute of Object.keys(this.getFieldReferences())) {
        this._setFieldToNull(context, field, attribute)
      }

      await context.dispatch(
        `${storePrefix}view/${this.getType()}/forceDeleteFieldOptions`,
        field.id,
        { root: true }
      )
    }
  }

const DATE_FIELD_TYPES = ['date', 'last_modified', 'created_on', 'formula']
const FILE_FIELD_TYPES = ['file']
const SINGLE_SELECT_FIELD_TYPES = ['single_select']

export class HmsKanbanViewType extends CardViewTypeMixin(ViewType) {
  static getType() {
    return 'hms_kanban'
  }

  getIconClass() {
    return 'iconoir-kanban-board'
  }

  getColorClass() {
    return 'color-success'
  }

  getName() {
    const { $i18n: i18n } = this.app
    return i18n.t('hmsViewType.kanban')
  }

  getFieldReferences() {
    return {
      single_select_field: SINGLE_SELECT_FIELD_TYPES,
      card_cover_image_field: FILE_FIELD_TYPES,
    }
  }

  getHeaderComponent() {
    return KanbanViewHeader
  }

  getComponent() {
    return KanbanView
  }

  getPublicRoute() {
    return 'database-table'
  }
}

export class HmsCalendarViewType extends CardViewTypeMixin(ViewType) {
  static getType() {
    return 'hms_calendar'
  }

  getIconClass() {
    return 'iconoir-calendar'
  }

  getColorClass() {
    return 'color-primary'
  }

  getName() {
    const { $i18n: i18n } = this.app
    return i18n.t('hmsViewType.calendar')
  }

  getFieldReferences() {
    return {
      date_field: DATE_FIELD_TYPES,
      card_cover_image_field: FILE_FIELD_TYPES,
    }
  }

  getHeaderComponent() {
    return CalendarViewHeader
  }

  getComponent() {
    return CalendarView
  }

  getPublicRoute() {
    return 'database-table'
  }
}

export class HmsTimelineViewType extends CardViewTypeMixin(ViewType) {
  static getType() {
    return 'hms_timeline'
  }

  getIconClass() {
    return 'iconoir-clock-rotate-right'
  }

  getColorClass() {
    return 'color-warning'
  }

  getName() {
    const { $i18n: i18n } = this.app
    return i18n.t('hmsViewType.timeline')
  }

  getFieldReferences() {
    return {
      start_date_field: DATE_FIELD_TYPES,
      end_date_field: DATE_FIELD_TYPES,
      group_by_field: [],
      card_cover_image_field: FILE_FIELD_TYPES,
    }
  }

  getHeaderComponent() {
    return TimelineViewHeader
  }

  getComponent() {
    return TimelineView
  }

  getPublicRoute() {
    return 'database-table'
  }
}

export class HmsListViewType extends CardViewTypeMixin(ViewType) {
  static getType() {
    return 'hms_list'
  }

  getIconClass() {
    return 'iconoir-list'
  }

  getColorClass() {
    return 'color-neutral'
  }

  getName() {
    const { $i18n: i18n } = this.app
    return i18n.t('hmsViewType.list')
  }

  getFieldReferences() {
    return {
      group_by_field: [],
      card_cover_image_field: FILE_FIELD_TYPES,
    }
  }

  getHeaderComponent() {
    return ListViewHeader
  }

  getComponent() {
    return ListView
  }

  getPublicRoute() {
    return 'database-table'
  }
}
