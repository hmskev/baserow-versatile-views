<template>
  <form class="versatile-view-element-form" @submit.prevent @keydown.enter.prevent>
    <FormGroup label="Source table ID" small-label required class="margin-bottom-2">
      <FormInput v-model="values.source_table_id" type="number" placeholder="e.g. 499" />
    </FormGroup>
    <FormGroup
      v-if="layout === 'kanban'"
      label="Group field ID"
      small-label
      required
      class="margin-bottom-2"
    >
      <FormInput v-model="values.config.group_field" type="number" placeholder="e.g. 1234" />
    </FormGroup>
    <FormGroup
      v-if="layout !== 'kanban'"
      label="Start date field ID"
      small-label
      required
      class="margin-bottom-2"
    >
      <FormInput v-model="values.config.start_field" type="number" placeholder="e.g. 1234" />
    </FormGroup>
    <FormGroup label="Label field ID" small-label class="margin-bottom-2">
      <FormInput v-model="values.config.label_field" type="number" placeholder="Optional" />
    </FormGroup>
    <FormGroup label="Display field IDs" small-label class="margin-bottom-2">
      <FormInput v-model="displayFieldsText" placeholder="123, 456, 789" />
    </FormGroup>
    <FormGroup label="Advanced configuration (JSON)" small-label class="margin-bottom-2">
      <FormTextarea v-model="advancedConfigText" :rows="5" @blur="applyAdvancedConfig" />
    </FormGroup>
    <p class="color-neutral">
      Use numeric Baserow field IDs. Changes are saved as you edit. Kanban dragging is enabled only for authenticated users with write access.
    </p>
  </form>
</template>

<script>
import elementForm from '@baserow/modules/builder/mixins/elementForm'

export default {
  name: 'VersatileViewElementForm',
  mixins: [elementForm],
  data() {
    const config = this.defaultValues.config || {}
    return {
      values: {
        source_table_id: null,
        config: {},
      },
      allowedValues: ['source_table_id', 'config'],
      displayFieldsText: (config.display_fields || []).join(', '),
      advancedConfigText: JSON.stringify(config, null, 2),
    }
  },
  computed: {
    layout() {
      return (this.defaultValues.type || 'versatile_kanban').replace(
        'versatile_',
        ''
      )
    },
  },
  watch: {
    displayFieldsText(value) {
      this.values.config.display_fields = value
        .split(',')
        .map((item) => Number(item.trim()))
        .filter((item) => Number.isInteger(item) && item > 0)
    },
    values: {
      deep: true,
      handler(value) {
        this.advancedConfigText = JSON.stringify(value.config || {}, null, 2)
      },
    },
  },
  methods: {
    applyAdvancedConfig() {
      try {
        const config = JSON.parse(this.advancedConfigText || '{}')
        if (config && typeof config === 'object' && !Array.isArray(config)) {
          this.values.config = config
          this.displayFieldsText = (config.display_fields || []).join(', ')
        }
      } catch {
        // Leave the last valid configuration in place until JSON is corrected.
      }
    },
  },
}
</script>
