<template>
  <nav v-if="pages.length > 1" class="public-page-navigation" aria-label="Application pages">
    <a
      v-for="page in pages"
      :key="page.id"
      :href="page.path"
      class="public-page-navigation__link"
      :class="{ 'public-page-navigation__link--active': page.path === currentPath }"
      :aria-current="page.path === currentPath ? 'page' : undefined"
    >
      {{ page.name }}
    </a>
  </nav>
</template>

<script>
export default {
  name: 'PublicPageNavigation',
  data() {
    return { pages: [], currentPath: '/' }
  },
  mounted() {
    const pathname = window.location.pathname || '/'
    const preview = pathname.match(/^\/builder\/(\d+)\/preview(?:\/|$)/)
    this.currentPath = preview
      ? pathname.slice(preview[0].length - 1) || '/'
      : pathname
    this.loadPages()
  },
  methods: {
    normalizePages(rawPages, basePath = '') {
      return (rawPages || [])
        .filter((page) => !page.shared && page.path && page.path !== '__shared__')
        .map((page) => {
          const path = page.path.startsWith('/') ? page.path : `/${page.path}`
          return { id: page.id, name: page.name, path: `${basePath}${path}` || '/' }
        })
    },
    async loadPages() {
      if (typeof window === 'undefined') return
      const pathname = window.location.pathname || '/'
      const preview = pathname.match(/^\/builder\/(\d+)\/preview(?:\/|$)/)
      const basePath = preview ? `/builder/${preview[1]}/preview` : ''

      // The published Builder page already has its complete page list in the
      // Builder store. Prefer it; this works for preview pages and avoids a
      // domain lookup that is unavailable on the main Baserow hostname.
      try {
        const builder = this.$store?.getters?.['application/getSelected']
        const visiblePages = builder
          ? this.$store.getters['page/getVisiblePages'](builder)
          : []
        if (visiblePages?.length) {
          this.pages = this.normalizePages(visiblePages, basePath)
          return
        }
      } catch (error) {
        // Fall through to the public-domain API for standalone published hosts.
      }

      try {
        const hostname = window.location.hostname
        const domain = encodeURIComponent(hostname)
        const response = await fetch(`${window.location.origin}/api/builder/domains/published/by_name/${domain}/`)
        if (!response.ok) return
        const data = await response.json()
        this.pages = this.normalizePages(data.pages)
      } catch (error) {
        // Navigation is supplemental; the view remains usable if metadata is unavailable.
      }
    },
  },
}
</script>

<style scoped>
.public-page-navigation {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
  padding: 8px 12px;
  margin: 0 0 12px;
  background: #f8f9fb;
  border: 1px solid #e4e7ec;
  border-radius: 6px;
}
.public-page-navigation__link {
  display: inline-block;
  padding: 6px 10px;
  border-radius: 4px;
  color: #344054;
  font-size: 13px;
  text-decoration: none;
}
.public-page-navigation__link:hover,
.public-page-navigation__link--active {
  color: #175cd3;
  background: #eff8ff;
}
</style>
