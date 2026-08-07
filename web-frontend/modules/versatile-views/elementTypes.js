import { ElementType } from '@baserow/modules/builder/elementTypes'
import VersatileViewElement from './components/VersatileViewElement.vue'
import VersatileViewElementForm from './components/VersatileViewElementForm.vue'
import versatileKanbanImage from './assets/versatile-kanban.svg'

class VersatileElementType extends ElementType {
  category() {
    return 'baseElement'
  }

  get iconClass() {
    return 'iconoir-view-columns-3'
  }

  get image() {
    return versatileKanbanImage
  }

  get component() {
    return VersatileViewElement
  }

  get editComponent() {
    return VersatileViewElement
  }

  get generalFormComponent() {
    return VersatileViewElementForm
  }

  getDefaultValues(page, values = {}) {
    return {
      source_table_id: null,
      config: {},
      ...values,
    }
  }
}

export class VersatileKanbanElementType extends VersatileElementType {
  static getType() {
    return 'versatile_kanban'
  }

  get name() {
    return 'Versatile Kanban'
  }

  get description() {
    return 'Display Baserow records in grouped Kanban columns.'
  }
}

export class VersatileCalendarElementType extends VersatileElementType {
  static getType() {
    return 'versatile_calendar'
  }

  get name() {
    return 'Versatile Calendar'
  }

  get description() {
    return 'Display Baserow records on a calendar.'
  }
}

export class VersatileTimelineElementType extends VersatileElementType {
  static getType() {
    return 'versatile_timeline'
  }

  get name() {
    return 'Versatile Timeline'
  }

  get description() {
    return 'Display Baserow records on a timeline.'
  }
}
