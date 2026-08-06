<template>
  <div v-if="visible" class="hms-scale-notice" :class="modifierClass">
    <i class="hms-scale-notice__icon" :class="iconClass"></i>
    <span class="hms-scale-notice__text">{{ message }}</span>
  </div>
</template>

<script>
import { ROW_LOAD_CEILING } from '../../mixins/cardViewRows'

/**
 * Tells the user when a view is not showing everything.
 *
 * A view that quietly groups a subset of a table is worse than one that refuses to,
 * because the result looks complete and is not. This says which of the two situations
 * applies: still loading, or capped and needing a filter.
 */
export default {
  name: 'ViewScaleNotice',
  props: {
    loaded: { type: Number, required: true },
    total: { type: Number, required: true },
    loading: { type: Boolean, required: false, default: false },
    ceilingReached: { type: Boolean, required: false, default: false },
  },
  computed: {
    visible() {
      return this.loading || this.ceilingReached || this.loaded < this.total
    },
    /**
     * Being capped is a state the user has to act on; still loading resolves itself.
     */
    isCapped() {
      return this.ceilingReached && !this.loading
    },
    modifierClass() {
      return this.isCapped ? 'hms-scale-notice--warning' : ''
    },
    iconClass() {
      return this.loading ? 'iconoir-refresh-double' : 'iconoir-warning-triangle'
    },
    message() {
      if (this.loading) {
        return this.$t('hmsView.loadingRows', {
          loaded: this.loaded,
          total: this.total,
        })
      }
      if (this.isCapped) {
        return this.$t('hmsView.cappedRows', {
          loaded: Math.min(this.loaded, ROW_LOAD_CEILING),
          total: this.total,
        })
      }
      return this.$t('hmsView.partialRows', {
        loaded: this.loaded,
        total: this.total,
      })
    },
  },
}
</script>
