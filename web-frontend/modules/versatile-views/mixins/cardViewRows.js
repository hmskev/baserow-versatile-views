/**
 * Row loading for views that group or position records.
 *
 * Baserow's buffered row store sizes its array to the table's full row count and
 * fills it with null, populating only the windows it has fetched. A grid can render
 * straight from that, because a null is just a row that has scrolled out of reach and
 * can show as a skeleton. Our views cannot: to put a record in the right Kanban stack
 * or on the right day we need its actual values, so a null is not a placeholder, it
 * is a record we would silently lose.
 *
 * So these views do two things a grid does not:
 *
 *   1. Never read a null. Every consumer works from `loadedRows`.
 *   2. Ask for the rows they have not got yet, in batches, up to a ceiling.
 *
 * The ceiling exists because grouping happens in the browser. Past a few thousand
 * records that stops being reasonable, and quietly grouping a subset would be worse
 * than saying so. When the ceiling bites, the view says exactly what it is showing
 * and suggests a filter.
 */

// How many rows a view will pull down before it stops and tells the user.
export const ROW_LOAD_CEILING = 2000

// Rows requested per batch. Baserow's own page size is 100; larger batches mean
// fewer round trips when a table is big.
const BATCH_SIZE = 200

// How many records a single container - one Kanban stack, one calendar day, one list
// section - renders before it stops and offers to show the rest. Grouping is uneven by
// nature: a board can have four stacks where one holds ten records and another holds
// four thousand. Without a cap that one stack decides the page's frame rate.
export const CARD_RENDER_CAP = 50

export default {
  data() {
    return {
      rowsLoading: false,
      rowLoadCeilingReached: false,
      // Containers the user has chosen to see in full, keyed by group key.
      expandedContainers: [],
    }
  },
  computed: {
    /**
     * The view type's store namespace, e.g. `hms_kanban`.
     */
    viewStoreName() {
      return this.view.type
    },
    /**
     * The raw store array, which contains a null for every row not yet fetched.
     */
    bufferedRows() {
      return this.$store.getters[
        `${this.storePrefix}view/${this.viewStoreName}/getRows`
      ]
    },
    /**
     * The rows we actually hold values for. Everything in the views reads this.
     */
    loadedRows() {
      return this.bufferedRows.filter((row) => row !== null && row !== undefined)
    },
    totalRowCount() {
      return this.bufferedRows.length
    },
    loadedRowCount() {
      return this.loadedRows.length
    },
    /**
     * True while the view is showing fewer records than the table holds, either
     * because a fetch is still running or because the ceiling stopped it.
     */
    isPartiallyLoaded() {
      return this.loadedRowCount < this.totalRowCount
    },
  },
  watch: {
    // A filter change, a search, or a realtime insert changes the count, so start
    // again from wherever the store now is.
    totalRowCount: {
      handler() {
        this.loadRemainingRows()
      },
      immediate: true,
    },
  },
  mounted() {
    this.loadRemainingRows()
  },
  methods: {
    /**
     * The records a container should actually render.
     *
     * Capped until the user asks for the rest, so one very full group cannot stall
     * the whole view.
     */
    cappedRows(key, rows) {
      if (this.expandedContainers.includes(key)) {
        return rows
      }
      return rows.length > CARD_RENDER_CAP ? rows.slice(0, CARD_RENDER_CAP) : rows
    },
    /**
     * How many records a container is holding back, for the "show more" label.
     */
    hiddenRowCount(key, rows) {
      if (this.expandedContainers.includes(key)) {
        return 0
      }
      return Math.max(0, rows.length - CARD_RENDER_CAP)
    },
    expandContainer(key) {
      if (!this.expandedContainers.includes(key)) {
        this.expandedContainers.push(key)
      }
    },
    /**
     * Pulls down the rows this view has not got, a batch at a time, until the table
     * is fully loaded or the ceiling is reached.
     *
     * Batches are sequential on purpose. The store serialises overlapping range
     * requests anyway, and firing every batch at once would put a burst of queries on
     * the database for no gain in wall clock time.
     */
    async loadRemainingRows() {
      if (this.rowsLoading) {
        return
      }

      const target = Math.min(this.totalRowCount, ROW_LOAD_CEILING)
      if (this.loadedRowCount >= target) {
        this.rowLoadCeilingReached = this.totalRowCount > ROW_LOAD_CEILING
        return
      }

      this.rowsLoading = true
      try {
        for (let start = 0; start < target; start += BATCH_SIZE) {
          // Skip a batch that is already complete, so a small change does not refetch
          // everything.
          const slice = this.bufferedRows.slice(start, start + BATCH_SIZE)
          if (slice.length > 0 && slice.every((row) => row !== null)) {
            continue
          }

          await this.$store.dispatch(
            `${this.storePrefix}view/${this.viewStoreName}/fetchMissingRowsInNewRange`,
            { startIndex: start, endIndex: Math.min(start + BATCH_SIZE, target) }
          )
        }
      } catch (error) {
        // A failed batch leaves the view showing what it has. The banner already
        // tells the user the view is incomplete, which is the honest state.
        this.$store.dispatch('toast/error', {
          title: this.$t('hmsView.loadErrorTitle'),
          message: this.$t('hmsView.loadErrorMessage'),
        })
      } finally {
        this.rowsLoading = false
        this.rowLoadCeilingReached = this.totalRowCount > ROW_LOAD_CEILING
      }
    },
  },
}
