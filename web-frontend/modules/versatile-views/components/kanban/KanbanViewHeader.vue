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
      :value="view.single_select_field"
      :available-fields="fieldsOfTypes(['single_select'])"
      :label="$t('hmsKanbanView.stackBy')"
      :description="$t('hmsKanbanView.stackByDescription')"
      :empty-text="$t('hmsKanbanView.noSingleSelectFields')"
      icon-class="iconoir-kanban-board"
      @input="updateViewValues({ single_select_field: $event })"
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

export default {
  name: 'HmsKanbanViewHeader',
  components: { ViewFieldsContext, ViewSearch, ViewFieldSelect },
  mixins: [cardViewHeader],
}
</script>
