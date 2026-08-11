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
    this.currentPath = window.location.pathname || '/'
    this.loadPages()
  },
  methods: {
    async loadPages() {
      if (typeof window === 'undefined') return
      try {
        const hostname = window.location.hostname
        const domain = encodeURIComponent(hostname)
        const apiUrls = [
          `${window.location.origin}/api/builder/domains/published/by_name/${domain}/`,
        ]
        if (!hostname.startsWith('baserow.')) {
          const apiHostname = `baserow.${hostname.split('.').slice(1).join('.')}`
          apiUrls.push(`${window.location.protocol}//${apiHostname}/api/builder/domains/published/by_name/${domain}/`)
        }
        let response
        for (const url of apiUrls) {
          response = await fetch(url)
          if (response.ok) break
        }
        if (!response?.ok) return
        const data = await response.json()
        this.pages = (data.pages || [])
          .filter((page) => !page.shared && page.path && page.path !== '__shared__')
          .map((page) => ({ id: page.id, name: page.name, path: page.path.startsWith('/') ? page.path : `/${page.path}` }))
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
