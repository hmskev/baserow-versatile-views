import { _ as _export_sfc, x as Paginator, I as notifyIf } from './server.mjs';
import debounce$1 from 'lodash/debounce.js';
import { resolveComponent, mergeProps, createVNode, resolveDynamicComponent, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderComponent, ssrRenderList, ssrRenderStyle, ssrRenderClass, ssrInterpolate, ssrRenderVNode } from 'vue/server-renderer';
import _ from 'lodash';
import isObject from 'lodash/isObject.js';

!(function() {
  try {
    var e = false ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
    var n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "732dd241-7d1b-40a4-8cba-02654e972a31", e._sentryDebugIdIdentifier = "sentry-dbid-732dd241-7d1b-40a4-8cba-02654e972a31");
  } catch (e2) {
  }
})();
const _sfc_main$3 = {
  name: "CrudTableSearch",
  props: {
    loading: {
      type: Boolean,
      required: true
    }
  },
  emits: ["close-modals", "search-changed"],
  data: () => {
    return {
      headerSearchTerm: "",
      searchDebounce: null
    };
  },
  mounted() {
    this.$priorityBus.$on(
      "start-search",
      this.$priorityBus.level.LOW,
      this.searchStarted
    );
  },
  beforeUnmount() {
    this.$priorityBus.$off("start-search", this.searchStarted);
  },
  methods: {
    keydown(event) {
      if (event.key !== "Enter") {
        this.doSearch(this.headerSearchTerm, false);
      }
    },
    searchStarted({ event }) {
      event.preventDefault();
      this.$bus.$emit("close-modals");
      this.$refs.searchInput.focus();
    },
    doSearch(query, immediate) {
      const search = () => {
        this.$emit("search-changed", query);
      };
      if (this.searchDebounce) {
        this.searchDebounce.cancel();
      }
      if (immediate) {
        search();
      } else {
        this.searchDebounce = debounce$1(search, 400);
        this.searchDebounce();
      }
    }
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_FormInput = resolveComponent("FormInput");
  _push(`<form${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_FormInput, {
    ref: "searchInput",
    modelValue: _ctx.headerSearchTerm,
    "onUpdate:modelValue": ($event) => _ctx.headerSearchTerm = $event,
    size: "large",
    placeholder: _ctx.$t("crudTableSearch.search"),
    "icon-left": "iconoir-search",
    loading: $props.loading,
    onInput: ($event) => $options.doSearch($event, false)
  }, null, _parent));
  _push(`</form>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("modules/core/components/crudTable/CrudTableSearch.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const CrudTableSearch = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3]]);
class CrudTableColumn {
  constructor(key, header, cellComponent, sortable = false, stickyLeft = false, stickyRight = false, additionalProps = {}, widthPerc = "", helpText = null) {
    this.key = key;
    this._header = header;
    this.cellComponent = cellComponent;
    this.sortable = sortable;
    this.stickyLeft = stickyLeft;
    this.stickyRight = stickyRight;
    this.additionalProps = additionalProps;
    this.widthPerc = widthPerc;
    this.helpText = helpText;
  }
  get header() {
    if (typeof this._header === "function") {
      return this._header();
    }
    return this._header;
  }
}
const _sfc_main$2 = {
  name: "CrudTable",
  components: { Paginator, CrudTableSearch },
  inheritAttrs: false,
  props: {
    /**
     * A service which provides a fetch(pageNumber, searchParam, columnSortsList)
     * method which returns an object in the form of:
     * ```
     * {
     *   count: 1, // the number of total results available (including other pages)
     *   results: [ // A row object with an attribute matching the provided column keys
     *     {
     *       column1Key: value,
     *       column2Key: value
     *     }
     *   ]
     * }
     * ```
     * CrudTable will call this method with the current page and assume the returned
     * results have a max page size of 100 to calculate the total number of pages.
     *
     * Each service can also define an `options` attribute in which it can set
     * `isPaginated` to `false`. If that attribute is set, the CrudTable will just
     * fetch the provided endpoint without any pagination.
     *
     * If the user has provided a search query this will be passed in the second
     * argument.
     *
     * Finally if the user has sorted sortable columns they will be passed in the third
     * argument as an ordered array of objects in the form of:
     * ```
     * {
     *   key: 'column1Key',
     *   direction: 'asc' or 'desc',
     * }
     * ```
     */
    service: {
      required: true,
      type: Object
    },
    /**
     * An ordered array of columns to show. The column keys must be present in every
     * row returned by the service.
     */
    columns: {
      required: false,
      type: Array,
      default: () => [],
      validator: (prop) => prop.every((e) => e instanceof CrudTableColumn)
    },
    /**
     * The row attribute to be used as the key for the row. Must be present on every row
     * returned from the service.
     * The delete-row cellComponent event / deleteRow slot prop expects that the
     * emitted/passed object is the rowIdKey value for the row to be deleted.
     * The edit-row cellComponent event / editRow slotProp expects the row object
     * emitted/passed contains this key.
     */
    rowIdKey: {
      required: true,
      type: String
    },
    defaultColumnSorts: {
      required: false,
      type: Array,
      default: () => [],
      validator: (prop) => _.isArray(prop)
    },
    filters: {
      required: false,
      type: Object,
      default: () => ({}),
      validator: (prop) => isObject(prop)
    },
    enableSearch: {
      required: false,
      type: Boolean,
      default: true
    }
  },
  emits: ["row-context", "rows-update"],
  data() {
    return {
      loading: true,
      page: 1,
      totalPages: 0,
      searchQuery: false,
      rows: [],
      columnSorts: this.defaultColumnSorts
    };
  },
  computed: {
    hasEmptySlot() {
      return !!this.$slots.empty;
    }
  },
  watch: {
    rows() {
      this.$emit("rows-update", this.rows);
    },
    filters() {
      this.fetch();
    }
  },
  async mounted() {
    await this.fetch();
  },
  methods: {
    /**
     * If the column is sortable cycles through applying descending, then ascending and
     * then no sort to this column.
     */
    toggleSort(column) {
      if (!column.sortable) {
        return;
      }
      const i = this.sortIndex(column);
      if (i === -1) {
        this.columnSorts.push({ key: column.key, direction: "desc" });
      } else {
        const current = this.columnSorts[i];
        if (current.direction === "desc") {
          this.columnSorts.splice(i, 1, {
            key: current.key,
            direction: "asc"
          });
        } else {
          this.columnSorts.splice(i, 1);
        }
      }
      this.fetch(1);
    },
    sortIcon(column) {
      const i = this.sortIndex(column);
      return this.columnSorts[i].direction === "desc" ? "iconoir-sort-up" : "iconoir-sort-down";
    },
    sorted(column) {
      return this.sortIndex(column) !== -1;
    },
    sortIndex(column) {
      return this.columnSorts.findIndex((c) => c.key === column.key);
    },
    async doSearch(searchQuery) {
      this.totalPages = 0;
      this.searchQuery = searchQuery;
      await this.fetch(1);
    },
    /**
     * Fetches the rows of a given page and adds them to the state.
     */
    async fetch(page = null) {
      if (page == null && this.service.options.isPaginated) {
        page = 1;
      }
      this.loading = true;
      try {
        const { data } = await this.service.fetch(
          this.service.options.baseUrl,
          page,
          this.searchQuery,
          this.columnSorts,
          this.filters,
          this.service.options
        );
        if (this.service.options.isPaginated) {
          this.page = page;
          this.totalPages = Math.max(Math.ceil(data.count / 100), 1);
        }
        this.rows = _.isArray(data) ? data : data.results;
      } catch (error) {
        notifyIf(error, "row");
      }
      this.loading = false;
    },
    updateRow(updatedRow) {
      const i = this.rows.findIndex(
        (u) => u[this.rowIdKey] === updatedRow[this.rowIdKey]
      );
      Object.assign(this.rows[i], updatedRow);
    },
    upsertRow(row) {
      const i = this.rows.findIndex(
        (u) => u[this.rowIdKey] === row[this.rowIdKey]
      );
      if (i >= 0) {
        Object.assign(this.rows[i], row);
      } else {
        this.rows.unshift(row);
      }
    },
    deleteRow(rowId) {
      const i = this.rows.findIndex((u) => u[this.rowIdKey] === rowId);
      this.rows.splice(i, 1);
    },
    refresh() {
      this.fetch(this.page);
    }
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_CrudTableSearch = resolveComponent("CrudTableSearch");
  const _component_HelpIcon = resolveComponent("HelpIcon");
  const _component_Paginator = resolveComponent("Paginator");
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: ["data-table", { "data-table--loading": $data.loading }]
  }, _attrs))}>`);
  if ($options.hasEmptySlot && !$data.loading && $data.rows.length === 0 && $data.page === 1 && $data.searchQuery === false && Object.keys($props.filters).length === 0) {
    _push(`<div>`);
    ssrRenderSlot(_ctx.$slots, "empty", {}, null, _push, _parent);
    _push(`</div>`);
  } else if (!($options.hasEmptySlot && $data.loading) || $data.searchQuery !== false || Object.keys($props.filters).length > 0) {
    _push(`<!--[--><header class="data-table__header"><h1 class="data-table__title">`);
    ssrRenderSlot(_ctx.$slots, "title", {}, null, _push, _parent);
    _push(`</h1><div class="data-table__actions">`);
    if ($props.enableSearch) {
      _push(ssrRenderComponent(_component_CrudTableSearch, {
        loading: $data.loading,
        onSearchChanged: $options.doSearch
      }, null, _parent));
    } else {
      _push(`<!---->`);
    }
    ssrRenderSlot(_ctx.$slots, "header-right-side", {}, null, _push, _parent);
    _push(`</div></header>`);
    ssrRenderSlot(_ctx.$slots, "header-filters", {}, null, _push, _parent);
    _push(`<div class="data-table__body"><table class="data-table__table"><thead><tr class="data-table__table-row"><!--[-->`);
    ssrRenderList($props.columns, (col) => {
      _push(`<th style="${ssrRenderStyle(col.widthPerc ? `--width: ${col.widthPerc}%` : "")}" class="${ssrRenderClass([{
        "data-table__table-cell--sticky-left": col.stickyLeft,
        "data-table__table-cell--sticky-right": col.stickyRight
      }, "data-table__table-cell data-table__table-cell--header"])}"><div class="data-table__table-cell-head">`);
      if (col.sortable) {
        _push(`<!--[--><div><a class="data-table__table-cell-head-link">${ssrInterpolate(col.header)}</a>`);
        if (col.helpText) {
          _push(ssrRenderComponent(_component_HelpIcon, {
            tooltip: col.helpText
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="data-table__table-cell-head-sort-icon">`);
        if ($options.sorted(col)) {
          _push(`<!--[--><i class="${ssrRenderClass($options.sortIcon(col))}"></i> ${ssrInterpolate($options.sortIndex(col))}<!--]-->`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><!--]-->`);
      } else {
        _push(`<div>${ssrInterpolate(col.header)} `);
        if (col.helpText) {
          _push(ssrRenderComponent(_component_HelpIcon, {
            tooltip: col.helpText
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      }
      _push(`</div></th>`);
    });
    _push(`<!--]--></tr></thead><tbody>`);
    ssrRenderSlot(_ctx.$slots, "rows", {
      rows: $data.rows,
      columns: $props.columns,
      updateRow: $options.updateRow,
      deleteRow: $options.deleteRow,
      refresh: $options.refresh
    }, () => {
      _push(`<!--[-->`);
      ssrRenderList($data.rows, (row) => {
        _push(`<tr class="data-table__table-row"><!--[-->`);
        ssrRenderList($props.columns, (col) => {
          _push(`<td class="${ssrRenderClass([{
            "data-table__table-cell--sticky-left": col.stickyLeft,
            "data-table__table-cell--sticky-right": col.stickyRight,
            [`data-table__table-cell--${col.key}`]: true
          }, "data-table__table-cell"])}"><div class="data-table__table-cell-content">`);
          ssrRenderVNode(_push, createVNode(resolveDynamicComponent(col.cellComponent), mergeProps({
            row,
            column: col
          }, { ref_for: true }, _ctx.$attrs, {
            onRowContext: (payload) => _ctx.$emit("row-context", payload),
            onRowUpdate: $options.updateRow,
            onRowDelete: $options.deleteRow,
            onRefresh: $options.refresh
          }), null), _parent);
          _push(`</div></td>`);
        });
        _push(`<!--]--></tr>`);
      });
      _push(`<!--]-->`);
    }, _push, _parent);
    _push(`</tbody></table></div>`);
    if ($props.service.options.isPaginated) {
      _push(`<div class="data-table__footer">`);
      _push(ssrRenderComponent(_component_Paginator, {
        page: $data.page,
        "total-pages": $data.totalPages,
        onChangePage: $options.fetch
      }, null, _parent));
      _push(`</div>`);
    } else {
      _push(`<!---->`);
    }
    ssrRenderSlot(_ctx.$slots, "menus", {
      updateRow: $options.updateRow,
      deleteRow: $options.deleteRow
    }, null, _push, _parent);
    _push(`<!--]-->`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("modules/core/components/crudTable/CrudTable.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const CrudTable = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = {
  name: "SimpleField",
  props: {
    row: {
      required: true,
      type: Object
    },
    column: {
      required: true,
      type: Object
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    title: $props.row[$props.column.key]
  }, _attrs))}>${ssrInterpolate($props.row[$props.column.key])}</div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("modules/core/components/crudTable/fields/SimpleField.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const SimpleField = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  name: "MoreField",
  props: {
    row: {
      required: true,
      type: Object
    }
  },
  emits: ["row-context"],
  methods: {
    onClick(event) {
      this.$emit("row-context", {
        row: this.row,
        event,
        target: event.currentTarget,
        time: Date.now()
      });
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "data-table__more-wrapper" }, _attrs))}><a class="data-table__more"><i class="data-table__more-icon baserow-icon-more-horizontal"></i></a></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("modules/core/components/crudTable/fields/MoreField.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const MoreField = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { CrudTable as C, MoreField as M, SimpleField as S, CrudTableColumn as a };
//# sourceMappingURL=MoreField-Bjaf4Chm.mjs.map
