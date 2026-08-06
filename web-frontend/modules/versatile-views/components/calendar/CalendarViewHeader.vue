<template>
  <ul v-if="!tableLoading" class="header__filter header__filter--full-width">
    <li class="header__filter-item">
      <a
        ref="customizeContextLink"
        class="header__filter-link"
        @click="
          $refs.customizeContext.toggle(
            $refs.customizeContextLink,
            'bottom',
            'left',
            4
          )
        "
      >
        <i class="header__filter-icon iconoir-settings"></i>
        <span class="header__filter-name">{{
          $t('hmsViewHeader.customizeCards')
        }}</span>
      </a>
      <ViewFieldsContext
        ref="customizeContext"
        :database="database"
        :view="view"
        :fields="fields"
        :field-options="fieldOptions"
        :cover-image-field="view.card_cover_image_field"
        :allow-cover-image-field="true"
        @update-all-field-options="updateAllFieldOptions"
        @update-field-options-of-field="updateFieldOptionsOfField"
        @update-order="orderFieldOptions"
        @update-cover-image-field="updateCoverImageField"
      ></ViewFieldsContext>
    </li>

    <ViewFieldSelect
      :value="view.date_field"
      :available-fields="dateFields"
      :label="$t('hmsCalendarView.dateFieldLabel')"
      :description="$t('hmsCalendarView.dateFieldDescription')"
      :empty-text="$t('hmsCalendarView.noDateFields')"
      icon-class="iconoir-calendar"
      @input="updateViewValues({ date_field: $event })"
    ></ViewFieldSelect>

    <li class="header__filter-item header__filter-item--full-width">
      <ViewSearch
        :view="view"
        :fields="fields"
        :store-prefix="storePrefix"
        :always-hide-rows-not-matching-search="true"
        @refresh="$emit('refresh', $event)"
      ></ViewSearch>
    </li>
  </ul>
</template>

<script>
import ViewFieldsContext from '@baserow/modules/database/components/view/ViewFieldsContext'
import ViewSearch from '@baserow/modules/database/components/view/ViewSearch'

import cardViewHeader from '../../mixins/cardViewHeader'
import ViewFieldSelect from '../shared/ViewFieldSelect.vue'
import { DATE_FIELD_TYPES } from '../../constants'

export default {
  name: 'HmsCalendarViewHeader',
  components: { ViewFieldsContext, ViewSearch, ViewFieldSelect },
  mixins: [cardViewHeader],
  computed: {
    dateFields() {
      return this.fieldsOfTypes(DATE_FIELD_TYPES)
    },
  },
}
</script>
