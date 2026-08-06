<template>
  <div class="hms-calendar-view">
    <div v-if="dateField === null" class="hms-view__placeholder">
      <i class="hms-view__placeholder-icon iconoir-calendar"></i>
      <div class="hms-view__placeholder-title">
        {{ $t('hmsCalendarView.chooseFieldTitle') }}
      </div>
      <div class="hms-view__placeholder-text">
        {{ $t('hmsCalendarView.chooseFieldText') }}
      </div>
    </div>

    <template v-else>
      <div class="hms-calendar-view__toolbar">
        <a class="hms-calendar-view__nav" @click="movePeriod(-1)">
          <i class="iconoir-nav-arrow-left"></i>
        </a>
        <div class="hms-calendar-view__period">{{ periodLabel }}</div>
        <a class="hms-calendar-view__nav" @click="movePeriod(1)">
          <i class="iconoir-nav-arrow-right"></i>
        </a>
        <a class="hms-calendar-view__today" @click="goToToday">
          {{ $t('hmsCalendarView.today') }}
        </a>
      </div>

      <div class="hms-calendar-view__weekdays">
        <div
          v-for="weekday in weekdayLabels"
          :key="weekday"
          class="hms-calendar-view__weekday"
        >
          {{ weekday }}
        </div>
      </div>

      <div class="hms-calendar-view__grid">
        <div
          v-for="(week, weekIndex) in weeks"
          :key="'hms-week-' + weekIndex"
          class="hms-calendar-view__week"
        >
          <div
            v-for="day in week"
            :key="dayKey(day)"
            class="hms-calendar-view__day"
            :class="{
              'hms-calendar-view__day--outside': !isInPeriod(day),
              'hms-calendar-view__day--today': isToday(day),
              'hms-calendar-view__day--drop-target': dropDayKey === dayKey(day),
            }"
            @dragover.prevent="onDragOver(day)"
            @drop.prevent="onDrop(day)"
            @dragleave="onDragLeave(day)"
          >
            <div class="hms-calendar-view__day-header">
              <span class="hms-calendar-view__day-number">{{ day.date() }}</span>
              <a
                v-if="!readOnly"
                class="hms-calendar-view__day-add"
                @click="createRowOnDay(day)"
              >
                <i class="iconoir-plus"></i>
              </a>
            </div>

            <div class="hms-calendar-view__day-cards hms-card-container">
              <RowCard
                v-for="row in rowsForDay(day)"
                :key="'hms-calendar-card-' + row.id"
                :fields="cardFields"
                :row="row"
                :workspace-id="database.workspace.id"
                :cover-image-field="coverImageField"
                :decorations-by-place="decorationsByPlace"
                class="hms-calendar-view__card"
                :draggable="canDrag"
                @dragstart="onDragStart(row, $event)"
                @dragend="onDragEnd"
                @click="openRow(row)"
              ></RowCard>
            </div>
          </div>
        </div>
      </div>
    </template>

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
import moment from '@baserow/modules/core/moment'

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

import {
  chunkIntoWeeks,
  dayKey,
  monthGridDays,
  moveToDay,
  readDate,
  writeDate,
} from '../../utils/dates'

/**
 * Records placed on a month grid by the value of a date field.
 *
 * Dragging a card to another day rewrites that record's date, keeping its time of
 * day, so a 14:00 meeting stays at 14:00 when it moves to Thursday.
 */
export default {
  name: 'HmsCalendarView',
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
      anchor: moment(),
      draggingRowId: null,
      dropDayKey: null,
    }
  },
  computed: {
    ...mapGetters({ row: 'rowModalNavigation/getRow' }),
    allRows() {
      return this.$store.getters[`${this.storePrefix}view/hms_calendar/getRows`]
    },
    fieldOptions() {
      return this.$store.getters[
        `${this.storePrefix}view/hms_calendar/getAllFieldOptions`
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
    dateField() {
      const id = this.view.date_field
      return this.fields.find((field) => field.id === id) ?? null
    },
    canDrag() {
      // A read-only or computed date field cannot be written back to, so those
      // records must not look draggable.
      return (
        !this.readOnly &&
        this.dateField !== null &&
        this.dateField.type === 'date'
      )
    },
    weeks() {
      return chunkIntoWeeks(monthGridDays(this.anchor, 1))
    },
    periodLabel() {
      return this.anchor.format('MMMM YYYY')
    },
    weekdayLabels() {
      // Monday first, matching the grid.
      return [1, 2, 3, 4, 5, 6, 0].map((day) => moment().day(day).format('ddd'))
    },
    /**
     * Records bucketed by the day they fall on, so each cell is a map lookup rather
     * than a scan of every record.
     */
    rowsByDay() {
      const buckets = new Map()

      if (this.dateField === null) {
        return buckets
      }

      for (const row of this.allRows) {
        const value = readDate(row, this.dateField)
        if (value === null) {
          continue
        }
        const key = dayKey(value)
        if (!buckets.has(key)) {
          buckets.set(key, [])
        }
        buckets.get(key).push(row)
      }

      return buckets
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
    dayKey,
    rowsForDay(day) {
      return this.rowsByDay.get(dayKey(day)) ?? []
    },
    isInPeriod(day) {
      return day.isSame(this.anchor, 'month')
    },
    isToday(day) {
      return day.isSame(moment(), 'day')
    },
    movePeriod(amount) {
      this.anchor = this.anchor.clone().add(amount, 'month')
    },
    goToToday() {
      this.anchor = moment()
    },
    openRow(row) {
      this.$emit('selected-row', row)
      this.$refs.rowEditModal.show(row.id)
    },
    onDragStart(row, event) {
      if (!this.canDrag) {
        return
      }
      this.draggingRowId = row.id
      event.dataTransfer?.setData('text/plain', String(row.id))
      if (event.dataTransfer) {
        event.dataTransfer.effectAllowed = 'move'
      }
    },
    onDragOver(day) {
      if (this.draggingRowId !== null) {
        this.dropDayKey = dayKey(day)
      }
    },
    onDragLeave(day) {
      if (this.dropDayKey === dayKey(day)) {
        this.dropDayKey = null
      }
    },
    onDragEnd() {
      this.draggingRowId = null
      this.dropDayKey = null
    },
    async onDrop(day) {
      const rowId = this.draggingRowId
      this.onDragEnd()

      if (rowId === null || !this.canDrag) {
        return
      }

      const row = this.allRows.find((candidate) => candidate.id === rowId)
      if (row === undefined) {
        return
      }

      const current = readDate(row, this.dateField)
      if (current === null || current.isSame(day, 'day')) {
        return
      }

      await this.updateValue({
        field: this.dateField,
        row,
        value: writeDate(moveToDay(current, day), this.dateField),
        oldValue: row[`field_${this.dateField.id}`],
      })
    },
    /**
     * Opens the create modal with the clicked day filled in, so a record added to a
     * cell lands on that date.
     */
    createRowOnDay(day) {
      const defaults = {}
      if (this.dateField !== null && this.dateField.type === 'date') {
        const start = day.clone().startOf('day')
        defaults[`field_${this.dateField.id}`] = writeDate(start, this.dateField)
      }
      this.$refs.rowCreateModal.show(defaults)
    },
    async createRow({ row, callback }) {
      try {
        await this.$store.dispatch(
          `${this.storePrefix}view/hms_calendar/createNewRow`,
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
          `${this.storePrefix}view/hms_calendar/updateRowValue`,
          { table: this.table, view: this.view, fields: this.fields, row, field, value, oldValue }
        )
      } catch (error) {
        notifyIf(error, 'field')
      }
    },
    async refreshRow(row) {
      try {
        await this.$store.dispatch(
          `${this.storePrefix}view/hms_calendar/refreshRowFromBackend`,
          { table: this.table, row }
        )
      } catch (error) {
        notifyIf(error, 'row')
      }
    },
  },
}
</script>
