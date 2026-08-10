<template>
  <div class="versatile-view-element">
    <PublicPageNavigation />
    <div v-if="loading" class="versatile-view-element__state">Loading…</div>
    <div v-else-if="error" class="versatile-view-element__state versatile-view-element__state--error">{{ error }}</div>
    <template v-else>
      <PublicCalendarView v-if="layout === 'calendar'" :items="items" />
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
          <div class="versatile-view-element__column-header">
            <h3>{{ column.label }}</h3>
            <button class="versatile-view-element__add" type="button" @click="openCreate(column)">+ Add</button>
          </div>
          <article
            v-for="card in column.cards"
            :key="card.id"
            class="versatile-view-element__card"
            :class="{ 'versatile-view-element__card--dragging': draggingCard?.id === card.id }"
            :draggable="canDrag"
            @click="openEdit(card)"
            @dragstart="onDragStart(card, $event)"
            @dragend="onDragEnd"
          >
            <div class="versatile-view-element__card-title">
              <strong>{{ card.label || card.id }}</strong>
              <button class="versatile-view-element__comment-button" type="button" @click.stop="openEdit(card, true)">Comments</button>
            </div>
            <p v-if="card.values && Object.keys(card.values).length">{{ Object.values(card.values).map(formatValue).join(' · ') }}</p>
          </article>
          <button v-if="!column.cards.length" class="versatile-view-element__drop-hint" type="button" @click="openCreate(column)">+ Add a record</button>
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

    <div v-if="modalOpen" class="versatile-view-element__modal-backdrop" @click.self="closeModal">
      <section class="versatile-view-element__modal" role="dialog" aria-modal="true">
        <header class="versatile-view-element__modal-header">
          <h2>{{ editingCard ? 'Edit record' : 'Add record' }}</h2>
          <button type="button" aria-label="Close" @click="closeModal">×</button>
        </header>
        <div v-if="modalError" class="versatile-view-element__modal-error">{{ modalError }}</div>
        <form @submit.prevent="saveRecord">
          <label v-for="field in editableFields" :key="field.id" class="versatile-view-element__field">
            <span>{{ field.name }}</span>
            <select v-if="field.type === 'single_select'" v-model="formValues[field.id]">
              <option value="">—</option>
              <option v-for="option in field.options" :key="option.id" :value="option.id">{{ option.value }}</option>
            </select>
            <select v-else-if="field.type === 'multiple_select'" v-model="formValues[field.id]" multiple>
              <option v-for="option in field.options" :key="option.id" :value="option.id">{{ option.value }}</option>
            </select>
            <textarea v-else-if="field.type === 'long_text' || field.type === 'rich_text'" v-model="formValues[field.id]" rows="3" />
            <input v-else v-model="formValues[field.id]" :type="inputType(field)" />
          </label>
          <div class="versatile-view-element__modal-actions">
            <button type="button" @click="closeModal">Cancel</button>
            <button type="submit" class="versatile-view-element__primary" :disabled="saving">{{ saving ? 'Saving…' : (editingCard ? 'Save changes' : 'Create record') }}</button>
          </div>
        </form>

        <div v-if="editingCard" class="versatile-view-element__comments">
          <h3>Comments</h3>
          <div v-if="commentsError" class="versatile-view-element__modal-error">{{ commentsError }}</div>
          <div v-if="commentsLoading" class="versatile-view-element__state">Loading comments…</div>
          <div v-else-if="!comments.length" class="versatile-view-element__comment-empty">No comments yet.</div>
          <div v-for="comment in comments" :key="comment.id" class="versatile-view-element__comment">
            <strong>{{ comment.user?.name || comment.user?.first_name || 'User' }}</strong>
            <p>{{ comment.message }}</p>
          </div>
          <form class="versatile-view-element__comment-form" @submit.prevent="addComment">
            <textarea v-model="commentDraft" rows="2" placeholder="Leave a comment…" />
            <button type="submit" class="versatile-view-element__primary" :disabled="commentSaving || !commentDraft.trim()">{{ commentSaving ? 'Posting…' : 'Post comment' }}</button>
          </form>
        </div>
      </section>
    </div>
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
      loading: false, error: null, columns: [], items: [], fields: [],
      draggingCard: null, dropColumnKey: null,
      modalOpen: false, editingCard: null, createColumn: null,
      formValues: {}, modalError: null, saving: false,
      comments: [], commentsLoading: false, commentsError: null,
      commentDraft: '', commentSaving: false,
    }
  },
  computed: {
    layout() { return this.element.type.replace('versatile_', '') },
    canDrag() { return this.layout === 'kanban' && this.mode !== 'preview' && this.element.config?.group_field != null },
    editableFields() { return this.fields.filter((field) => !field.read_only) },
  },
  watch: {
    'element.source_table_id': 'loadData',
    'element.config': { handler: 'loadData', deep: true },
  },
  mounted() { this.loadData() },
  methods: {
    onDragStart(card, event) {
      if (!this.canDrag) return
      this.draggingCard = card
      event.dataTransfer?.setData('text/plain', String(card.id))
      if (event.dataTransfer) event.dataTransfer.effectAllowed = 'move'
    },
    onDragOver(column) { if (this.draggingCard !== null && this.canDrag) this.dropColumnKey = column.key },
    onDragLeave(column) { if (this.dropColumnKey === column.key) this.dropColumnKey = null },
    onDragEnd() { this.draggingCard = null; this.dropColumnKey = null },
    async onDrop(column) {
      const card = this.draggingCard
      this.onDragEnd()
      if (!card || !this.canDrag) return
      this.loading = true; this.error = null
      try {
        await this.$client.patch(`database/rows/table/${this.element.source_table_id}/${card.id}/`, { [`field_${this.element.config.group_field}`]: column.value })
        await this.loadData()
      } catch (error) {
        this.error = error.response?.data?.error || 'Unable to move this card. Check that you have write access to the table.'
      } finally { this.loading = false }
    },
    openCreate(column) {
      this.editingCard = null; this.createColumn = column; this.modalError = null; this.commentDraft = ''
      this.formValues = {}
      this.fields.forEach((field) => { this.$set(this.formValues, field.id, field.type === 'multiple_select' ? [] : '') })
      const groupField = this.element.config.group_field
      if (groupField != null && column.value != null) this.$set(this.formValues, groupField, column.value)
      this.modalOpen = true
    },
    openEdit(card, focusComments = false) {
      this.editingCard = card; this.createColumn = null; this.modalError = null
      this.formValues = {}
      this.fields.forEach((field) => {
        const value = card.raw_values?.[String(field.id)] ?? card.values?.[String(field.id)]
        this.$set(this.formValues, field.id, this.formValue(value, field))
      })
      this.modalOpen = true
      this.loadComments()
      if (focusComments) this.$nextTick(() => this.$el.querySelector('.versatile-view-element__comment-form textarea')?.focus())
    },
    closeModal() { if (!this.saving && !this.commentSaving) this.modalOpen = false },
    formValue(value, field) {
      if (field.type === 'multiple_select') return Array.isArray(value) ? value.map((item) => item?.id || item?.value || item) : []
      return value?.id || value?.value || value || ''
    },
    inputType(field) {
      if (field.type === 'number' || field.type === 'rating') return 'number'
      if (field.type === 'date' || field.type === 'date_time') return 'datetime-local'
      if (field.type === 'boolean') return 'checkbox'
      return 'text'
    },
    formatValue(value) {
      if (value == null) return ''
      if (Array.isArray(value)) return value.map(this.formatValue).join(', ')
      if (typeof value === 'object') return value.value || value.name || value.id || JSON.stringify(value)
      return String(value)
    },
    async saveRecord() {
      this.saving = true; this.modalError = null
      try {
        const fields = {}
        this.editableFields.forEach((field) => {
          let value = this.formValues[field.id]
          if (field.type === 'boolean') value = Boolean(value)
          fields[`field_${field.id}`] = value
        })
        if (this.editingCard) {
          await this.$client.patch(`database/rows/table/${this.element.source_table_id}/${this.editingCard.id}/`, fields)
        } else {
          await this.$client.post(`database/rows/table/${this.element.source_table_id}/`, fields)
        }
        await this.loadData()
        this.modalOpen = false
      } catch (error) {
        this.modalError = error.response?.data?.error || 'Unable to save this record. Check that you have write access to the table.'
      } finally { this.saving = false }
    },
    async loadComments() {
      if (!this.editingCard) return
      this.commentsLoading = true; this.commentsError = null
      try {
        const { data } = await this.$client.get(`row_comments/${this.element.source_table_id}/${this.editingCard.id}/?limit=50`)
        this.comments = data.results || data.comments || data || []
      } catch (error) {
        this.comments = []
        this.commentsError = error.response?.data?.error || 'Comments require the Baserow premium row-comments feature.'
      } finally { this.commentsLoading = false }
    },
    async addComment() {
      if (!this.editingCard || !this.commentDraft.trim()) return
      this.commentSaving = true; this.commentsError = null
      try {
        await this.$client.post(`row_comments/${this.element.source_table_id}/${this.editingCard.id}/`, { message: this.commentDraft.trim() })
        this.commentDraft = ''
        await this.loadComments()
      } catch (error) {
        this.commentsError = error.response?.data?.error || 'Unable to post this comment.'
      } finally { this.commentSaving = false }
    },
    async loadData() {
      if (!this.element.source_table_id) return
      this.loading = true; this.error = null
      try {
        const { data } = await this.$client.post(`versatile-views/${this.layout}/`, { table_id: this.element.source_table_id, config: this.element.config || {}, rows: { page: 1, size: 200 } })
        this.columns = data.columns || []; this.items = data.items || data.events || data.records || []; this.fields = data.fields || []
      } catch (error) {
        this.error = error.response?.data?.error || 'Unable to load this view. Check the table and field configuration.'
      } finally { this.loading = false }
    },
  },
}
</script>

<style scoped>
.versatile-view-element { height: 100%; overflow: auto; padding: 12px; box-sizing: border-box; }
.versatile-view-element__columns { display: flex; gap: 12px; min-height: 120px; }
.versatile-view-element__column { flex: 1; min-width: 180px; background: #f5f6f8; border-radius: 6px; padding: 10px; transition: background-color .15s ease, box-shadow .15s ease; }
.versatile-view-element__column--drop-target { background: #eff8ff; box-shadow: inset 0 0 0 2px #84caff; }
.versatile-view-element__column-header, .versatile-view-element__card-title { display: flex; align-items: center; justify-content: space-between; gap: 8px; }
.versatile-view-element__column h3 { margin: 0 0 8px; font-size: 14px; }
.versatile-view-element__card, .versatile-view-element__item { background: white; border: 1px solid #dfe1e6; border-radius: 5px; padding: 9px; margin-bottom: 8px; }
.versatile-view-element__card { cursor: pointer; }
.versatile-view-element__card[draggable='true'] { cursor: grab; }
.versatile-view-element__card[draggable='true']:active { cursor: grabbing; }
.versatile-view-element__card--dragging { opacity: 0.45; }
.versatile-view-element__drop-hint { width: 100%; min-height: 42px; border: 1px dashed #98a2b3; border-radius: 5px; color: #667085; padding: 12px; text-align: center; background: transparent; }
.versatile-view-element__card p { margin: 6px 0 0; color: #667085; font-size: 12px; }
.versatile-view-element__add, .versatile-view-element__comment-button { border: 0; background: transparent; color: #1570ef; cursor: pointer; font-size: 12px; }
.versatile-view-element__item { display: flex; justify-content: space-between; gap: 12px; }
.versatile-view-element__state { color: #667085; padding: 16px; }
.versatile-view-element__state--error, .versatile-view-element__modal-error { color: #b42318; }
.versatile-view-element__modal-backdrop { position: fixed; inset: 0; z-index: 1000; display: flex; align-items: center; justify-content: center; padding: 20px; background: rgba(16, 24, 40, .55); }
.versatile-view-element__modal { width: min(680px, 100%); max-height: 90vh; overflow: auto; padding: 22px; border-radius: 10px; background: #fff; box-shadow: 0 20px 50px rgba(16, 24, 40, .25); }
.versatile-view-element__modal-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 18px; }
.versatile-view-element__modal-header h2 { margin: 0; }
.versatile-view-element__modal-header button { border: 0; background: transparent; font-size: 25px; cursor: pointer; }
.versatile-view-element__field { display: block; margin-bottom: 14px; }
.versatile-view-element__field span { display: block; margin-bottom: 5px; font-size: 13px; font-weight: 600; color: #344054; }
.versatile-view-element__field input, .versatile-view-element__field select, .versatile-view-element__field textarea, .versatile-view-element__comment-form textarea { width: 100%; box-sizing: border-box; border: 1px solid #d0d5dd; border-radius: 6px; padding: 9px; font: inherit; }
.versatile-view-element__modal-actions { display: flex; justify-content: flex-end; gap: 8px; margin-top: 20px; }
.versatile-view-element__modal-actions button, .versatile-view-element__comment-form button { border: 1px solid #d0d5dd; border-radius: 6px; padding: 9px 14px; cursor: pointer; background: #fff; }
.versatile-view-element__primary { color: #fff !important; border-color: #1570ef !important; background: #1570ef !important; }
.versatile-view-element__comments { border-top: 1px solid #eaecf0; margin-top: 22px; padding-top: 18px; }
.versatile-view-element__comments h3 { margin: 0 0 12px; }
.versatile-view-element__comment { border-bottom: 1px solid #f2f4f7; padding: 8px 0; }
.versatile-view-element__comment p { margin: 4px 0 0; white-space: pre-wrap; }
.versatile-view-element__comment-empty { color: #667085; margin-bottom: 10px; }
.versatile-view-element__comment-form { display: flex; gap: 8px; align-items: flex-end; margin-top: 12px; }
</style>
