<template>
  <div class="versatile-view-element">
    <PublicPageNavigation />
    <div v-if="loading" class="versatile-view-element__state">Loading…</div>
    <div v-else-if="error" class="versatile-view-element__state versatile-view-element__state--error">
      {{ error }}
    </div>
    <template v-else>
      <PublicCalendarView v-if="layout === 'calendar'" :items="items"></PublicCalendarView>
      <div v-else-if="layout === 'kanban'" class="versatile-view-element__columns">
        <section
          v-for="column in columns"
          :key="column.key"
          class="versatile-view-element__column"
          :class="{ 'versatile-view-element__column--drop-target': dropColumnKey === column.key }"
          @dragover.prevent="onDragOver(column)"
          @drop.prevent="onDrop(column)"
          @dragleave="onDragLeave(column)"
        >
          <h3>{{ column.label }}</h3>
          <article
            v-for="card in column.cards"
            :key="card.id"
            class="versatile-view-element__card"
            :draggable="canDrag"
            @dragstart="onDragStart(card, $event)"
            @dragend="onDragEnd"
          >
            <strong>{{ card.label || card.id }}</strong>
            <p v-if="card.values && Object.keys(card.values).length">
              {{ Object.values(card.values).map(formatValue).join(' · ') }}
            </p>
          </article>
        </section>
      </div>
      <div v-else class="versatile-view-element__items">
        <article v-for="item in items" :key="item.id" class="versatile-view-element__item">
          <strong>{{ item.title || item.label || item.id }}</strong>
          <span v-if="item.start || item.date">{{ item.start || item.date }}</span>
        </article>
        <div v-if="!items.length" class="versatile-view-element__state">No records match this configuration.</div>
      </div>
    </template>
  </div>
</template>

<script>
import PublicCalendarView from './PublicCalendarView.vue'
import PublicPageNavigation from './PublicPageNavigation.vue'

export default {
  name: 'VersatileViewElement',
  components: { PublicCalendarView, PublicPageNavigation },
  props: {
    element: { type: Object, required: true },
    mode: { type: String, default: 'editing' },
  },
  data() {
    return {
      loading: false,
      error: null,
      columns: [],
      items: [],
      canEdit: false,
      draggingCard: null,
      dropColumnKey: null,
    }
  },
  computed: {
    layout() {
      return this.element.type.replace('versatile_', '')
    },
    canDrag() {
      return this.layout === 'kanban' && this.canEdit && this.element.config?.group_field != null
    },
  },
  watch: {
    'element.source_table_id': 'loadData',
    'element.config': { handler: 'loadData', deep: true },
  },
  mounted() {
    this.detectAuthenticatedEditor()
    this.loadData()
  },
  methods: {
    apiBase() {
      const hostname = window.location.hostname
      const apiHostname = hostname.startsWith('baserow.')
        ? hostname
        : `baserow.${hostname.split('.').slice(1).join('.')}`
      return `${window.location.protocol}//${apiHostname}/api/`
    },
    async detectAuthenticatedEditor() {
      try {
        const response = await fetch(`${this.apiBase()}user/`, { credentials: 'include' })
        this.canEdit = response.ok
      } catch (error) {
        this.canEdit = false
      }
    },
    onDragStart(card, event) {
      if (!this.canDrag) return
      this.draggingCard = card
      event.dataTransfer?.setData('text/plain', String(card.id))
      if (event.dataTransfer) event.dataTransfer.effectAllowed = 'move'
    },
    onDragOver(column) {
      if (this.draggingCard !== null && this.canDrag) this.dropColumnKey = column.key
    },
    onDragLeave(column) {
      if (this.dropColumnKey === column.key) this.dropColumnKey = null
    },
    onDragEnd() {
      this.draggingCard = null
      this.dropColumnKey = null
    },
    async onDrop(column) {
      const card = this.draggingCard
      this.onDragEnd()
      if (!card || !this.canDrag) return
      const groupField = this.element.config.group_field
      const payload = { [`field_${groupField}`]: column.value }
      try {
        await this.$client.patch(
          `database/rows/table/${this.element.source_table_id}/${card.id}/`,
          payload
        )
        await this.loadData()
      } catch (error) {
        this.error = error.response?.data?.error || 'Unable to move this card.'
      }
    },
    formatValue(value) {
      if (value == null) return ''
      if (Array.isArray(value)) return value.map(this.formatValue).join(', ')
      if (typeof value === 'object') return value.value || value.name || value.id || JSON.stringify(value)
      return String(value)
    },
    async loadData() {
      if (!this.element.source_table_id) return
      this.loading = true
      this.error = null
      try {
        // Baserow's configured API client already prefixes requests with `/api/`.
        // Using an absolute `/api/...` path here produced `/api/api/...` and a 404.
        const { data } = await this.$client.post(`versatile-views/${this.layout}/`, {
          table_id: this.element.source_table_id,
          config: this.element.config || {},
          rows: { page: 1, size: 200 },
        })
        this.columns = data.columns || []
        this.items = data.items || data.events || data.records || []
      } catch (error) {
        this.error = error.response?.data?.error || 'Unable to load this view. Check the table and field configuration.'
      } finally {
        this.loading = false
      }
    },
  },
}
</script>

<style scoped>
.versatile-view-element { height: 100%; overflow: auto; padding: 12px; box-sizing: border-box; }
.versatile-view-element__columns { display: flex; gap: 12px; min-height: 120px; }
.versatile-view-element__column { flex: 1; min-width: 180px; background: #f5f6f8; border-radius: 6px; padding: 10px; transition: background-color .15s ease, box-shadow .15s ease; }
.versatile-view-element__column--drop-target { background: #eff8ff; box-shadow: inset 0 0 0 2px #84caff; }
.versatile-view-element__column h3 { margin: 0 0 8px; font-size: 14px; }
.versatile-view-element__card, .versatile-view-element__item { background: white; border: 1px solid #dfe1e6; border-radius: 5px; padding: 9px; margin-bottom: 8px; }
.versatile-view-element__card[draggable='true'] { cursor: grab; }
.versatile-view-element__card[draggable='true']:active { cursor: grabbing; }
.versatile-view-element__card p { margin: 6px 0 0; color: #667085; font-size: 12px; }
.versatile-view-element__item { display: flex; justify-content: space-between; gap: 12px; }
.versatile-view-element__state { color: #667085; padding: 16px; }
.versatile-view-element__state--error { color: #b42318; }
</style>
