<template>
  <div
    class="hms-card"
    :class="{ 'hms-card--selected': selected }"
    @click="$emit('open-row', row)"
  >
    <div v-if="coverUrl" class="hms-card__cover">
      <img :src="coverUrl" :alt="''" />
    </div>

    <div class="hms-card__fields">
      <div
        v-for="fieldOption in visibleFields"
        :key="fieldOption.field.id"
        class="hms-card__field"
      >
        <div class="hms-card__field-name">{{ fieldOption.field.name }}</div>
        <div class="hms-card__field-value">
          <component
            :is="fieldTypeComponent(fieldOption.field)"
            :field="fieldOption.field"
            :value="row[`field_${fieldOption.field.id}`]"
            :read-only="true"
            :workspace-id="workspaceId"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/**
 * One record rendered as a card.
 *
 * Every one of our view types shows records the same way, so the field rendering
 * lives here once. Values are rendered with Baserow's own read-only field components
 * so a date, a select option or a file looks exactly as it does in the grid.
 */
export default {
  name: 'RecordCard',
  props: {
    row: {
      type: Object,
      required: true,
    },
    // Field options joined with their field, already filtered to the visible ones
    // and sorted, as the view's store provides them.
    visibleFields: {
      type: Array,
      required: true,
    },
    coverImageFieldId: {
      type: [Number, null],
      required: false,
      default: null,
    },
    workspaceId: {
      type: Number,
      required: true,
    },
    selected: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  computed: {
    /**
     * The first image in the cover field, if one is set and the record has a file.
     */
    coverUrl() {
      if (!this.coverImageFieldId) {
        return null
      }

      const files = this.row[`field_${this.coverImageFieldId}`]
      if (!Array.isArray(files)) {
        return null
      }

      const image = files.find((file) => file.is_image)
      return image ? image.thumbnails?.card_cover?.url ?? image.url : null
    },
  },
  methods: {
    fieldTypeComponent(field) {
      return this.$registry.get('field', field.type).getRowEditFieldComponent(field)
    },
  },
}
</script>
