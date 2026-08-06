<template>
  <div class="hms-timeline-view">
    <div v-if="!isConfigured" class="hms-view__placeholder">
      <i class="hms-view__placeholder-icon iconoir-clock-rotate-right"></i>
      <div class="hms-view__placeholder-title">
        {{ $t('hmsTimelineView.chooseFieldsTitle') }}
      </div>
      <div class="hms-view__placeholder-text">
        {{ $t('hmsTimelineView.chooseFieldsText') }}
      </div>
    </div>

    <template v-else>
      <div class="hms-timeline-view__toolbar">
        <a class="hms-timeline-view__nav" @click="movePeriod(-1)">
          <i class="iconoir-nav-arrow-left"></i>
        </a>
        <div class="hms-timeline-view__period">{{ periodLabel }}</div>
        <a class="hms-timeline-view__nav" @click="movePeriod(1)">
          <i class="iconoir-nav-arrow-right"></i>
        </a>
        <a class="hms-timeline-view__today" @click="goToToday">
          {{ $t('hmsTimelineView.today') }}
        </a>
        <div class="hms-timeline-view__zoom">
          <a
            v-for="option in zoomOptions"
            :key="option.value"
            class="hms-timeline-view__zoom-option"
            :class="{
              'hms-timeline-view__zoom-option--active': zoom === option.value,
            }"
            @click="zoom = option.value"
          >
            {{ $t(option.label) }}
          </a>
        </div>
      </div>

      <div class="hms-timeline-view__scroll">
        <div
          class="hms-timeline-view__axis"
          :style="{ width: `${totalWidth}px` }"
        >
          <div
            v-for="tick in ticks"
            :key="tick.key"
            class="hms-timeline-view__tick"
            :class="{ 'hms-timeline-view__tick--today': tick.isToday }"
            :style="{ left: `${tick.left}px`, width: `${columnWidth}px` }"
          >
            {{ tick.label }}
          </div>
        </div>

        <div
          v-for="lane in lanes"
          :key="lane.key"
          class="hms-timeline-view__lane"
          :style="{ width: `${totalWidth}px` }"
        >
          <div v-if="groupByField !== null" class="hms-timeline-view__lane-label">
            {{ lane.label }}
          </div>

          <div class="hms-timeline-view__lane-rows">
            <div
              v-for="bar in lane.bars"
              :key="'hms-timeline-bar-' + bar.row.id"
              class="hms-timeline-view__row"
            >
              <div
                class="hms-timeline-view__bar"
                :class="{
                  'hms-timeline-view__bar--dragging':
                    drag !== null && drag.rowId === bar.row.id,
                }"
                :style="{ left: `${bar.left}px`, width: `${bar.width}px` }"
                @mousedown="startDrag($event, bar, 'move')"
                @click="openRow(bar.row)"
              >
                <span
                  v-if="canEdit"
                  class="hms-timeline-view__handle hms-timeline-view__handle--start"
                  @mousedown.stop="startDrag($event, bar, 'start')"
                ></span>

                <span class="hms-timeline-view__bar-label">{{
                  bar.label
                }}</span>

                <span
                  v-if="canEdit"
                  class="hms-timeline-view__handle hms-timeline-view__handle--end"
                  @mousedown.stop="startDrag($event, bar, 'end')"
                ></span>
              </div>
            </div>
          </div>
        </div>

        <div v-if="undatedRows.length > 0" class="hms-timeline-view__undated">
          {{ $t('hmsTimelineView.undated', { count: undatedRows.length }) }}
        </div>
      </div>
    </template>

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
import RowEditModal from '@baserow/modules/database/components/row/RowEditModal'
import viewHelpers from '@baserow/modules/database/mixins/viewHelpers'
import viewDecoration from '@baserow/modules/database/mixins/viewDecoration'

import { readDate, writeDate } from '../../utils/dates'
import { groupRowsByField } from '../../utils/grouping'
import { WRITABLE_DATE_FIELD_TYPES } from '../../constants'

const COLUMN_WIDTH = { day: 48, week: 90, month: 130 }
const VISIBLE_COLUMNS = { day: 45, week: 30, month: 24 }

/**
 * Records drawn as bars on a horizontal time axis.
 *
 * A bar can be dragged along the axis to shift both of a record's dates together, or
 * resized from either end to change just the start or just the end. Both write back
 * to the record's date fields, which is what separates a Gantt chart from a picture.
 */
export default {
  name: 'HmsTimelineView',
  components: { RowEditModal },
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
      anchor: moment().startOf('day'),
      zoom: 'day',
      zoomOptions: [
        { value: 'day', label: 'hmsTimelineView.zoomDay' },
        { value: 'week', label: 'hmsTimelineView.zoomWeek' },
        { value: 'month', label: 'hmsTimelineView.zoomMonth' },
      ],
      // The in-progress drag: which row, which edge, and where it started.
      drag: null,
    }
  },
  computed: {
    ...mapGetters({ row: 'rowModalNavigation/getRow' }),
    allRows() {
      return this.$store.getters[`${this.storePrefix}view/hms_timeline/getRows`]
    },
    fieldOptions() {
      return this.$store.getters[
        `${this.storePrefix}view/hms_timeline/getAllFieldOptions`
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
    startField() {
      const id = this.view.start_date_field
      return this.fields.find((field) => field.id === id) ?? null
    },
    endField() {
      const id = this.view.end_date_field
      return this.fields.find((field) => field.id === id) ?? null
    },
    groupByField() {
      const id = this.view.group_by_field
      return this.fields.find((field) => field.id === id) ?? null
    },
    labelField() {
      // The primary field names the bar, which is what a person scans for.
      return this.fields.find((field) => field.primary) ?? this.cardFields[0] ?? null
    },
    isConfigured() {
      return this.startField !== null && this.endField !== null
    },
    canEdit() {
      return (
        !this.readOnly &&
        this.isConfigured &&
        WRITABLE_DATE_FIELD_TYPES.includes(this.startField.type) &&
        WRITABLE_DATE_FIELD_TYPES.includes(this.endField.type)
      )
    },
    columnWidth() {
      return COLUMN_WIDTH[this.zoom]
    },
    columnCount() {
      return VISIBLE_COLUMNS[this.zoom]
    },
    totalWidth() {
      return this.columnWidth * this.columnCount
    },
    /**
     * The first column's date. The axis starts here and each column steps forward by
     * one unit of the current zoom level.
     */
    axisStart() {
      return this.anchor.clone().startOf(this.zoom)
    },
    ticks() {
      const format = { day: 'D MMM', week: '[W]W', month: 'MMM YYYY' }[this.zoom]
      const today = moment()
      const ticks = []

      for (let index = 0; index < this.columnCount; index++) {
        const at = this.axisStart.clone().add(index, this.zoom)
        ticks.push({
          key: at.format('YYYY-MM-DD'),
          label: at.format(format),
          left: index * this.columnWidth,
          isToday: at.isSame(today, this.zoom),
        })
      }

      return ticks
    },
    periodLabel() {
      const last = this.axisStart.clone().add(this.columnCount - 1, this.zoom)
      return `${this.axisStart.format('D MMM YYYY')} - ${last.format(
        'D MMM YYYY'
      )}`
    },
    /**
     * Records that cannot be placed because a date is missing. They are counted
     * rather than hidden silently, so nobody loses a record without noticing.
     */
    undatedRows() {
      if (!this.isConfigured) {
        return []
      }
      return this.allRows.filter(
        (row) =>
          readDate(row, this.startField) === null ||
          readDate(row, this.endField) === null
      )
    },
    /**
     * Records positioned on the axis, split into swimlanes when a group by field is
     * set. A bar is clipped to the visible window rather than dropped, so a task
     * running off the edge still shows.
     */
    lanes() {
      if (!this.isConfigured) {
        return []
      }

      const placeable = this.allRows.filter(
        (row) =>
          readDate(row, this.startField) !== null &&
          readDate(row, this.endField) !== null
      )

      const groups =
        this.groupByField === null
          ? [{ key: '__all__', label: '', rows: placeable }]
          : groupRowsByField(
              placeable,
              this.groupByField,
              this.$registry,
              this.$t('hmsView.empty')
            )

      return groups.map((group) => ({
        ...group,
        bars: group.rows
          .map((row) => this.buildBar(row))
          .filter((bar) => bar !== null),
      }))
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
  beforeUnmount() {
    this.stopListeningToDrag()
  },
  methods: {
    /**
     * Turns a record into a positioned bar, or null when it falls entirely outside
     * the visible window.
     */
    buildBar(row) {
      const start = readDate(row, this.startField)
      const end = readDate(row, this.endField)
      const axisEnd = this.axisStart.clone().add(this.columnCount, this.zoom)

      if (end.isBefore(this.axisStart) || start.isAfter(axisEnd)) {
        return null
      }

      const left = this.dateToOffset(start)
      const right = this.dateToOffset(end)

      return {
        row,
        // An end on the same unit as the start still deserves a visible bar.
        left: Math.max(0, left),
        width: Math.max(this.columnWidth / 2, Math.min(right, this.totalWidth) - Math.max(0, left)),
        label: this.barLabel(row),
        start,
        end,
      }
    },
    barLabel(row) {
      if (this.labelField === null) {
        return `#${row.id}`
      }
      try {
        const fieldType = this.$registry.get('field', this.labelField.type)
        const text = fieldType.toHumanReadableString(
          this.labelField,
          row[`field_${this.labelField.id}`]
        )
        return text === '' ? `#${row.id}` : text
      } catch (error) {
        return `#${row.id}`
      }
    },
    /**
     * Pixels from the axis start for a given moment.
     */
    dateToOffset(value) {
      const units = value.diff(this.axisStart, this.zoom, true)
      return units * this.columnWidth
    },
    /**
     * How many whole units a pixel distance represents, used to convert a drag into
     * a date change.
     */
    offsetToUnits(pixels) {
      return Math.round(pixels / this.columnWidth)
    },
    movePeriod(amount) {
      this.anchor = this.anchor
        .clone()
        .add(amount * Math.floor(this.columnCount / 2), this.zoom)
    },
    goToToday() {
      this.anchor = moment().startOf('day')
    },
    openRow(row) {
      // A click that ends a drag must not also open the record.
      if (this.drag !== null && this.drag.moved) {
        return
      }
      this.$emit('selected-row', row)
      this.$refs.rowEditModal.show(row.id)
    },
    startDrag(event, bar, mode) {
      if (!this.canEdit) {
        return
      }

      event.preventDefault()
      this.drag = {
        rowId: bar.row.id,
        mode,
        startX: event.clientX,
        originalStart: bar.start,
        originalEnd: bar.end,
        moved: false,
      }

      window.addEventListener('mousemove', this.onDragMove)
      window.addEventListener('mouseup', this.onDragRelease)
    },
    onDragMove(event) {
      if (this.drag === null) {
        return
      }
      if (Math.abs(event.clientX - this.drag.startX) > 3) {
        this.drag.moved = true
      }
    },
    stopListeningToDrag() {
      window.removeEventListener('mousemove', this.onDragMove)
      window.removeEventListener('mouseup', this.onDragRelease)
    },
    async onDragRelease(event) {
      const drag = this.drag
      this.stopListeningToDrag()

      if (drag === null) {
        return
      }

      this.drag = null

      if (!drag.moved) {
        return
      }

      const units = this.offsetToUnits(event.clientX - drag.startX)
      if (units === 0) {
        return
      }

      const row = this.allRows.find((candidate) => candidate.id === drag.rowId)
      if (row === undefined) {
        return
      }

      let newStart = drag.originalStart
      let newEnd = drag.originalEnd

      if (drag.mode === 'move') {
        newStart = drag.originalStart.clone().add(units, this.zoom)
        newEnd = drag.originalEnd.clone().add(units, this.zoom)
      } else if (drag.mode === 'start') {
        newStart = drag.originalStart.clone().add(units, this.zoom)
        // Dragging the start past the end would invert the bar.
        if (newStart.isAfter(newEnd)) {
          newStart = newEnd.clone()
        }
      } else if (drag.mode === 'end') {
        newEnd = drag.originalEnd.clone().add(units, this.zoom)
        if (newEnd.isBefore(newStart)) {
          newEnd = newStart.clone()
        }
      }

      await this.applyDates(row, newStart, newEnd, drag)
    },
    /**
     * Writes back only the dates that actually changed, so moving an end date does
     * not needlessly rewrite the start.
     */
    async applyDates(row, newStart, newEnd, drag) {
      if (!newStart.isSame(drag.originalStart)) {
        await this.updateValue({
          field: this.startField,
          row,
          value: writeDate(newStart, this.startField),
          oldValue: row[`field_${this.startField.id}`],
        })
      }

      if (!newEnd.isSame(drag.originalEnd)) {
        await this.updateValue({
          field: this.endField,
          row,
          value: writeDate(newEnd, this.endField),
          oldValue: row[`field_${this.endField.id}`],
        })
      }
    },
    async updateValue({ field, row, value, oldValue }) {
      try {
        await this.$store.dispatch(
          `${this.storePrefix}view/hms_timeline/updateRowValue`,
          { table: this.table, view: this.view, fields: this.fields, row, field, value, oldValue }
        )
      } catch (error) {
        notifyIf(error, 'field')
      }
    },
    async refreshRow(row) {
      try {
        await this.$store.dispatch(
          `${this.storePrefix}view/hms_timeline/refreshRowFromBackend`,
          { table: this.table, row }
        )
      } catch (error) {
        notifyIf(error, 'row')
      }
    },
  },
}
</script>
