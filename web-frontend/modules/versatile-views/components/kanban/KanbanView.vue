<template>
  <div class="hms-kanban-view">
    <div v-if="singleSelectField === null" class="hms-view__placeholder">
      <i class="hms-view__placeholder-icon iconoir-kanban-board"></i>
      <div class="hms-view__placeholder-title">
        {{ $t('hmsKanbanView.chooseFieldTitle') }}
      </div>
      <div class="hms-view__placeholder-text">
        {{ $t('hmsKanbanView.chooseFieldText') }}
      </div>
    </div>

    <div v-else class="hms-kanban-view__stacks">
      <div
        v-for="stack in stacks"
        :key="stack.key"
        class="hms-kanban-view__stack"
        :class="{
          'hms-kanban-view__stack--drop-target': dropStackKey === stack.key,
        }"
        @dragover.prevent="onDragOver(stack)"
        @drop.prevent="onDrop(stack)"
        @dragleave="onDragLeave(stack)"
      >
        <div class="hms-kanban-view__stack-header">
          <div
            class="hms-kanban-view__stack-title"
            :class="stack.color ? `background-color--${stack.color}` : ''"
          >
            {{ stack.label }}
          </div>
          <div class="hms-kanban-view__stack-count">{{ stack.rows.length }}</div>
        </div>

        <div class="hms-kanban-view__stack-cards hms-card-container">
          <RowCard
            v-for="row in stack.rows"
            :key="'hms-kanban-card-' + row.id"
            :fields="cardFields"
            :row="row"
            :workspace-id="database.workspace.id"
            :cover-image-field="coverImageField"
            :decorations-by-place="decorationsByPlace"
            class="hms-kanban-view__card"
            :class="{ 'hms-kanban-view__card--dragging': draggingRowId === row.id }"
            :draggable="canDrag"
            @dragstart="onDragStart(row, $event)"
            @dragend="onDragEnd"
            @click="openRow(row)"
          ></RowCard>

          <a
            v-if="!readOnly"
            class="hms-kanban-view__add-card"
            @click="createRowInStack(stack)"
          >
            <i class="iconoir-plus"></i>
            {{ $t('hmsKanbanView.addCard') }}
          </a>
        </div>
      </div>
    </div>

    <RowCreateModal
      v-if="!readOnly"
      ref="rowCreateModal"
      :database="database"
      :table="table"
      :view="view"
      :primary-is-sortable="true"
      :visible-fields="cardFields"
      :hidden-fields="hiddenFields"
      :show-hidden-fields="showHiddenFieldsInRowModal"
      @toggle-hidden-fields-visibility="
        showHiddenFieldsInRowModal = !showHiddenFieldsInRowModal
      "
      @created="createRow"
    ></RowCreateModal>

    <RowEditModal
      ref="rowEditModal"
      enable-navigation
      :database="database"
      :table="table"
      :view="view"
      :all-fields-in-table="fields"
      :primary-is-sortable="true"
      :visible-fields="cardFields"
      :hidden-fields="hiddenFields"
      :rows="allRows"
      :read-only="readOnly"
      :show-hidden-fields="showHiddenFieldsInRowModal"
      @toggle-hidden-fields-visibility="
        showHiddenFieldsInRowModal = !showHiddenFieldsInRowModal
      "
      @hidden="$emit('selected-row', undefined)"
      @update="updateValue"
      @order-fields="orderFields"
      @toggle-field-visibility="toggleFieldVisibility"
      @field-updated="$emit('refresh', $event)"
      @field-deleted="$emit('refresh')"
      @navigate-previous="$emit('navigate-previous', $event)"
      @navigate-next="$emit('navigate-next', $event)"
      @refresh-row="refreshRow"
    ></RowEditModal>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import { notifyIf } from '@baserow/modules/core/utils/error'
import {
  sortFieldsByOrderAndIdFunction,
  filterVisibleFieldsFunction,
  filterHiddenFieldsFunction,
} from '@baserow/modules/database/utils/view'
import RowCard from '@baserow/modules/database/components/card/RowCard'
import RowCreateModal from '@baserow/modules/database/components/row/RowCreateModal'
import RowEditModal from '@baserow/modules/database/components/row/RowEditModal'
import viewHelpers from '@baserow/modules/database/mixins/viewHelpers'
import viewDecoration from '@baserow/modules/database/mixins/viewDecoration'

const EMPTY_STACK_KEY = '__empty__'

/**
 * Records stacked into columns by the value of a single select field.
 *
 * Dragging a card to another stack writes that stack's option back to the record's
 * select field, which is what makes the board an editor rather than a report.
 */
export default {
  name: 'HmsKanbanView',
  components: { RowCard, RowCreateModal, RowEditModal },
  mixins: [viewHelpers, viewDecoration],
  props: {
    fields: { type: Array, required: true },
    view: { type: Object, required: true },
    table: { type: Object, required: true },
    database: { type: Object, required: true },
    readOnly: { type: Boolean, required: true },
    storePrefix: { type: String, required: true },
  },
  emits: ['navigate-next', 'navigate-previous', 'refresh', 'selected-row'],
  data() {
    return {
      showHiddenFieldsInRowModal: false,
      draggingRowId: null,
      dropStackKey: null,
    }
  },
  computed: {
    ...mapGetters({ row: 'rowModalNavigation/getRow' }),
    allRows() {
      return this.$store.getters[`${this.storePrefix}view/hms_kanban/getRows`]
    },
    fieldOptions() {
      return this.$store.getters[
        `${this.storePrefix}view/hms_kanban/getAllFieldOptions`
      ]
    },
    cardFields() {
      return this.fields
        .filter(filterVisibleFieldsFunction(this.fieldOptions))
        .sort(sortFieldsByOrderAndIdFunction(this.fieldOptions))
    },
    hiddenFields() {
      return this.fields
        .filter(filterHiddenFieldsFunction(this.fieldOptions))
        .sort(sortFieldsByOrderAndIdFunction(this.fieldOptions))
    },
    coverImageField() {
      const id = this.view.card_cover_image_field
      return this.fields.find((field) => field.id === id) ?? null
    },
    singleSelectField() {
      const id = this.view.single_select_field
      return this.fields.find((field) => field.id === id) ?? null
    },
    canDrag() {
      return !this.readOnly && this.singleSelectField !== null
    },
    /**
     * One stack per select option, plus a leading stack for records with no option.
     *
     * The stacks come from the field's options rather than from the records, so an
     * option nobody has chosen yet still shows as an empty column that can be dragged
     * into. That is what makes the board usable for a new workflow.
     */
    stacks() {
      if (this.singleSelectField === null) {
        return []
      }

      const rowsByOption = new Map()
      rowsByOption.set(EMPTY_STACK_KEY, [])
      for (const option of this.singleSelectField.select_options) {
        rowsByOption.set(String(option.id), [])
      }

      for (const row of this.allRows) {
        const value = row[`field_${this.singleSelectField.id}`]
        const key = value?.id === undefined ? EMPTY_STACK_KEY : String(value.id)
        // A record can hold an option that was deleted since it was set; keep it
        // visible in the uncategorised stack rather than dropping it.
        if (!rowsByOption.has(key)) {
          rowsByOption.get(EMPTY_STACK_KEY).push(row)
        } else {
          rowsByOption.get(key).push(row)
        }
      }

      const stacks = [
        {
          key: EMPTY_STACK_KEY,
          optionId: null,
          label: this.$t('hmsView.empty'),
          color: null,
          rows: rowsByOption.get(EMPTY_STACK_KEY),
        },
      ]

      for (const option of this.singleSelectField.select_options) {
        stacks.push({
          key: String(option.id),
          optionId: option.id,
          label: option.value,
          color: option.color,
          rows: rowsByOption.get(String(option.id)),
        })
      }

      return stacks
    },
  },
  watch: {
    row: {
      handler(row) {
        if (this.$refs.rowEditModal) {
          if (row !== null) {
            this.$refs.rowEditModal.show(row.id, row)
          } else {
            this.$refs.rowEditModal.hide()
          }
        }
      },
      immediate: true,
    },
  },
  methods: {
    openRow(row) {
      this.$emit('selected-row', row)
      this.$refs.rowEditModal.show(row.id)
    },
    onDragStart(row, event) {
      if (!this.canDrag) {
        return
      }
      this.draggingRowId = row.id
      // Firefox only starts a drag when data is set on the transfer object.
      event.dataTransfer?.setData('text/plain', String(row.id))
      if (event.dataTransfer) {
        event.dataTransfer.effectAllowed = 'move'
      }
    },
    onDragOver(stack) {
      if (this.draggingRowId !== null) {
        this.dropStackKey = stack.key
      }
    },
    onDragLeave(stack) {
      if (this.dropStackKey === stack.key) {
        this.dropStackKey = null
      }
    },
    onDragEnd() {
      this.draggingRowId = null
      this.dropStackKey = null
    },
    /**
     * Moving a card between stacks means setting the record's select field to that
     * stack's option, so the change persists like any other cell edit.
     */
    async onDrop(stack) {
      const rowId = this.draggingRowId
      this.onDragEnd()

      if (rowId === null || this.readOnly) {
        return
      }

      const row = this.allRows.find((candidate) => candidate.id === rowId)
      if (row === undefined) {
        return
      }

      const field = this.singleSelectField
      const oldValue = row[`field_${field.id}`]
      const currentKey = oldValue?.id === undefined ? EMPTY_STACK_KEY : String(oldValue.id)

      if (currentKey === stack.key) {
        return
      }

      const option =
        stack.optionId === null
          ? null
          : field.select_options.find((candidate) => candidate.id === stack.optionId)

      await this.updateValue({
        field,
        row,
        value: option === undefined ? null : option,
        oldValue,
      })
    },
    /**
     * Opens the create modal with the stack's option already filled in, so a card
     * added to a column lands in that column.
     */
    createRowInStack(stack) {
      const defaults = {}
      if (stack.optionId !== null && this.singleSelectField !== null) {
        const option = this.singleSelectField.select_options.find(
          (candidate) => candidate.id === stack.optionId
        )
        if (option !== undefined) {
          defaults[`field_${this.singleSelectField.id}`] = option
        }
      }
      this.$refs.rowCreateModal.show(defaults)
    },
    async createRow({ row, callback }) {
      try {
        await this.$store.dispatch(
          `${this.storePrefix}view/hms_kanban/createNewRow`,
          { view: this.view, table: this.table, fields: this.fields, values: row }
        )
        callback?.()
      } catch (error) {
        callback?.(error)
      }
    },
    async updateValue({ field, row, value, oldValue }) {
      try {
        await this.$store.dispatch(
          `${this.storePrefix}view/hms_kanban/updateRowValue`,
          { table: this.table, view: this.view, fields: this.fields, row, field, value, oldValue }
        )
      } catch (error) {
        notifyIf(error, 'field')
      }
    },
    async refreshRow(row) {
      try {
        await this.$store.dispatch(
          `${this.storePrefix}view/hms_kanban/refreshRowFromBackend`,
          { table: this.table, row }
        )
      } catch (error) {
        notifyIf(error, 'row')
      }
    },
  },
}
</script>
