import bufferedRows from '@baserow/modules/database/store/view/bufferedRows'
import { getRowMetadata } from '@baserow/modules/database/utils/row'

/**
 * Builds a Vuex store module for one of our card-style views.
 *
 * Every one of our view types needs the same thing: a buffered window of rows that
 * stays in sync with realtime row events, plus the view's field options. Baserow
 * already provides both, so this only wires them together.
 */
export function populateRow(row, metadata = {}) {
  row._ = {
    metadata: getRowMetadata(row, metadata),
    dragging: false,
  }
  return row
}

/**
 * @param service A service *factory* of the form (client) => service. Baserow's
 *   bufferedRows store calls it as `service($client)` on each request, so passing an
 *   already-built service makes it throw "service is not a function".
 */
export default function cardViewStore(service) {
  const rows = bufferedRows({ service, customPopulateRow: populateRow })

  return {
    namespaced: true,
    state: () => ({ ...rows.state() }),
    mutations: { ...rows.mutations },
    getters: { ...rows.getters },
    actions: {
      ...rows.actions,
      async fetchInitial(
        { dispatch },
        { viewId, fields, adhocFiltering, adhocSorting }
      ) {
        const data = await dispatch('fetchInitialRows', {
          viewId,
          fields,
          initialRowArguments: { includeFieldOptions: true },
          adhocFiltering,
          adhocSorting,
        })
        await dispatch('forceUpdateAllFieldOptions', data.field_options)
      },
    },
  }
}
