import { mapState } from 'vuex'

import { notifyIf } from '@baserow/modules/core/utils/error'

/**
 * Shared header behaviour for our card-style views.
 *
 * Every view type's header offers the same things: reorder and show or hide the
 * fields on the card, pick a cover image, and search. The only difference is which
 * store namespace to dispatch to, which `viewStoreName` supplies.
 */
export default {
  props: {
    database: { type: Object, required: true },
    table: { type: Object, required: true },
    view: { type: Object, required: true },
    fields: { type: Array, required: true },
    readOnly: { type: Boolean, required: true },
    storePrefix: { type: String, required: true },
  },
  emits: ['refresh'],
  computed: {
    ...mapState({
      tableLoading: (state) => state.table.loading,
    }),
    /**
     * The view type's store namespace, for example `hms_kanban`.
     */
    viewStoreName() {
      return this.view.type
    },
    fieldOptions() {
      return this.$store.getters[
        `${this.storePrefix}view/${this.viewStoreName}/getAllFieldOptions`
      ]
    },
    /**
     * Field options are a view setting, so a user who may read the view but not
     * change it must still be able to see it. Passing readOnly through means the
     * store updates the local copy without calling the API.
     */
    fieldOptionsReadOnly() {
      return (
        this.readOnly ||
        !this.$hasPermission(
          'database.table.view.update_field_options',
          this.view,
          this.database.workspace.id
        )
      )
    },
  },
  methods: {
    async dispatchFieldOptions(action, payload) {
      try {
        await this.$store.dispatch(
          `${this.storePrefix}view/${this.viewStoreName}/${action}`,
          { ...payload, readOnly: this.fieldOptionsReadOnly }
        )
      } catch (error) {
        notifyIf(error, 'view')
      }
    },
    updateAllFieldOptions(payload) {
      return this.dispatchFieldOptions('updateAllFieldOptions', payload)
    },
    updateFieldOptionsOfField(payload) {
      return this.dispatchFieldOptions('updateFieldOptionsOfField', payload)
    },
    orderFieldOptions(payload) {
      return this.dispatchFieldOptions('updateFieldOptionsOrder', payload)
    },
    /**
     * Updates one of the view's own settings, such as which field it groups by.
     */
    async updateViewValues(values) {
      try {
        await this.$store.dispatch('view/update', {
          view: this.view,
          values,
          readOnly: this.readOnly,
        })
      } catch (error) {
        notifyIf(error, 'view')
      }
    },
    updateCoverImageField(value) {
      return this.updateViewValues({ card_cover_image_field: value })
    },
    /**
     * Fields that can be offered for a given role, so the dropdowns never present a
     * field the backend would reject.
     */
    fieldsOfTypes(types) {
      if (types.length === 0) {
        return this.fields
      }
      return this.fields.filter((field) => types.includes(field.type))
    },
  },
}
