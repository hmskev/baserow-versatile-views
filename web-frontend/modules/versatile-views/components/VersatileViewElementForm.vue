<template>
  <form class="versatile-view-element-form" @submit.prevent @keydown.enter.prevent>
    <FormGroup label="Source table ID" small-label required class="margin-bottom-2">
      <FormInput v-model="tableId" type="number" placeholder="e.g. 499" @blur="emitValues" />
    </FormGroup>
    <FormGroup label="Layout configuration (JSON)" small-label class="margin-bottom-2">
      <FormTextarea v-model="configText" :rows="8" @blur="emitValues" />
    </FormGroup>
    <p class="color-neutral">Use field IDs in the JSON configuration. The view is permission-aware and uses the current Baserow session.</p>
  </form>
</template>

<script>
export default {
  name: 'VersatileViewElementForm',
  props: { element: { type: Object, required: true } },
  emits: ['values-changed'],
  data() {
    return {
      tableId: this.element.source_table_id || '',
      configText: JSON.stringify(this.element.config || {}, null, 2),
    }
  },
  methods: {
    emitValues() {
      let config = {}
      try {
        config = JSON.parse(this.configText || '{}')
      } catch {
        return
      }
      this.$emit('values-changed', {
        source_table_id: this.tableId ? Number(this.tableId) : null,
        config,
      })
    },
  },
}
</script>
