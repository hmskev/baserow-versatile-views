<template>
  <div class="hms-list-view">
    <ViewScaleNotice
      :loaded="loadedRowCount"
      :total="totalRowCount"
      :loading="rowsLoading"
      :ceiling-reached="rowLoadCeilingReached"
    ></ViewScaleNotice>

    <div class="hms-list-view__body">
      <div
        v-for="section in sections"
        :key="section.key"
        class="hms-list-view__section"
      >
        <div
          v-if="groupByField !== null"
          class="hms-list-view__section-header"
          @click="toggleSection(section.key)"
        >
          <i
            class="hms-list-view__section-toggle"
            :class="
              collapsed.includes(section.key)
                ? 'iconoir-nav-arrow-right'
                : 'iconoir-nav-arrow-down'
            "
          ></i>
          <span class="hms-list-view__section-label">{{ section.label }}</span>
          <span class="hms-list-view__section-count">{{
            section.rows.length
          }}</span>
        </div>

        <div
          v-show="!collapsed.includes(section.key)"
          class="hms-list-view__rows hms-card-container"
        >
          <RowCard
            v-for="row in cappedRows(section.key, section.rows)"
            :key="'hms-list-row-' + row.id"
            :fields="cardFields"
            :row="row"
            :workspace-id="database.workspace.id"
            :cover-image-field="coverImageField"
            :decorations-by-place="decorationsByPlace"
            class="hms-list-view__row"
            @click="openRow(row)"
          ></RowCard>

          <a
            v-if="hiddenRowCount(section.key, section.rows) > 0"
            class="hms-list-view__show-more"
            @click="expandContainer(section.key)"
          >
            {{
              $t('hmsView.showMore', {
                count: hiddenRowCount(section.key, section.rows),
              })
            }}
          </a>
        </div>
      </div>

      <div v-if="!readOnly" class="hms-list-view__add">
        <a class="hms-list-view__add-link" @click="$refs.rowCreateModal.show()">
          <i class="iconoir-plus"></i>
          {{ $t('hmsListView.addRow') }}
        </a>
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

import cardViewRows from '../../mixins/cardViewRows'
import ViewScaleNotice from '../shared/ViewScaleNotice.vue'

import { groupRowsByField } from '../../utils/grouping'

/**
 * Records stacked vertically as compact rows, optionally split into sections by the
 * value of a chosen field.
 */
export default {
  name: 'HmsListView',
  components: { RowCard, RowCreateModal, RowEditModal, ViewScaleNotice },
  mixins: [viewHelpers, viewDecoration, cardViewRows],
  props: {
    fields: { type: Array, required: true },
    view: { type: Object, required: true },
    table: { type: Object, required: true },
    database: { type: Object, required: true },
    readOnly: { type: Boolean, required: true },
    storePrefix: { type: String, required: true },
  },
  emits: [
    'navigate-next',
    'navigate-previous',
    'refresh',
    'selected-row',
  ],
  data() {
    return {
      showHiddenFieldsInRowModal: false,
      collapsed: [],
    }
  },
  computed: {
    ...mapGetters({ row: 'rowModalNavigation/getRow' }),
    // Rows we hold values for. The store's raw array contains a null for
    // every row not yet fetched, and a null cannot be placed in a stack, on a
    // day or on the axis, so grouping must never see one.
    allRows() {
      return this.loadedRows
    },
    fieldOptions() {
      return this.$store.getters[
        `${this.storePrefix}view/hms_list/getAllFieldOptions`
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
    groupByField() {
      const id = this.view.group_by_field
      return this.fields.find((field) => field.id === id) ?? null
    },
    /**
     * Rows split into sections. Without a group by field the whole list is one
     * unlabelled section, which keeps the template the same in both cases.
     */
    sections() {
      if (this.groupByField === null) {
        return [{ key: '__all__', label: '', rows: this.allRows }]
      }

      return groupRowsByField(
        this.allRows,
        this.groupByField,
        this.$registry,
        this.$t('hmsView.empty')
      )
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
    toggleSection(key) {
      const index = this.collapsed.indexOf(key)
      if (index === -1) {
        this.collapsed.push(key)
      } else {
        this.collapsed.splice(index, 1)
      }
    },
    openRow(row) {
      this.$emit('selected-row', row)
      this.$refs.rowEditModal.show(row.id)
    },
    async createRow({ row, callback }) {
      try {
        await this.$store.dispatch(
          `${this.storePrefix}view/hms_list/createNewRow`,
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
          `${this.storePrefix}view/hms_list/updateRowValue`,
          { table: this.table, view: this.view, fields: this.fields, row, field, value, oldValue }
        )
      } catch (error) {
        notifyIf(error, 'field')
      }
    },
    async refreshRow(row) {
      try {
        await this.$store.dispatch(
          `${this.storePrefix}view/hms_list/refreshRowFromBackend`,
          { table: this.table, row }
        )
      } catch (error) {
        notifyIf(error, 'row')
      }
    },
  },
}
</script>
