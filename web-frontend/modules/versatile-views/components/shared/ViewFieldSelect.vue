<template>
  <li class="header__filter-item">
    <a
      ref="link"
      class="header__filter-link"
      @click="$refs.context.toggle($refs.link, 'bottom', 'left', 4)"
    >
      <i class="header__filter-icon" :class="iconClass"></i>
      <span class="header__filter-name">{{ summary }}</span>
    </a>
    <Context ref="context" class="hms-field-select">
      <div class="hms-field-select__description">{{ description }}</div>
      <ul class="select__items">
        <li v-if="allowEmpty" class="select__item">
          <a
            class="select__item-link"
            :class="{ active: value === null }"
            @click="choose(null)"
          >
            <div class="select__item-name">{{ $t('hmsFieldSelect.none') }}</div>
          </a>
        </li>
        <li
          v-for="field in availableFields"
          :key="field.id"
          class="select__item"
        >
          <a
            class="select__item-link"
            :class="{ active: value === field.id }"
            @click="choose(field.id)"
          >
            <div class="select__item-name">{{ field.name }}</div>
          </a>
        </li>
      </ul>
      <div v-if="availableFields.length === 0" class="hms-field-select__empty">
        {{ emptyText }}
      </div>
    </Context>
  </li>
</template>

<script>
import Context from '@baserow/modules/core/components/Context'

/**
 * A header dropdown for choosing which field a view setting points at, such as the
 * date field a calendar positions records by.
 *
 * Only fields the backend will accept for the role are offered, so the user cannot
 * pick something that comes straight back as an error.
 */
export default {
  name: 'ViewFieldSelect',
  components: { Context },
  props: {
    // The currently selected field id, or null when nothing is chosen.
    value: {
      type: [Number, null],
      required: false,
      default: null,
    },
    // The fields that may be chosen for this role.
    availableFields: {
      type: Array,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    emptyText: {
      type: String,
      required: true,
    },
    iconClass: {
      type: String,
      required: false,
      default: 'iconoir-list-select',
    },
    allowEmpty: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
  emits: ['input'],
  computed: {
    selectedField() {
      return this.availableFields.find((field) => field.id === this.value)
    },
    /**
     * Shows the chosen field's name so the setting is readable without opening the
     * dropdown, and falls back to the role's label when nothing is chosen.
     */
    summary() {
      return this.selectedField ? this.selectedField.name : this.label
    },
  },
  methods: {
    choose(fieldId) {
      this.$refs.context.hide()
      if (fieldId !== this.value) {
        this.$emit('input', fieldId)
      }
    },
  },
}
</script>
