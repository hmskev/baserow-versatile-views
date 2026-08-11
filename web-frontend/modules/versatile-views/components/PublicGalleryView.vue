<template>
  <section class="public-gallery" aria-label="Gallery">
    <article v-for="item in items" :key="item.id" class="public-gallery__card">
      <div class="public-gallery__image-wrap">
        <img v-if="item.image" class="public-gallery__image" :src="item.image" :alt="item.label || 'Gallery image'" loading="lazy" />
        <div v-else class="public-gallery__placeholder" aria-label="No image">No image</div>
      </div>
      <div class="public-gallery__body">
        <div class="public-gallery__title-row">
          <strong>{{ item.label || item.id }}</strong>
          <a v-if="item.image" class="public-gallery__download" :href="item.download_source || item.image" download target="_blank" rel="noopener">Download</a>
        </div>
        <p v-if="item.values && Object.keys(item.values).length">{{ Object.values(item.values).map(formatValue).join(' · ') }}</p>
      </div>
    </article>
    <div v-if="!items.length" class="public-gallery__empty">No records match this gallery.</div>
  </section>
</template>

<script>
export default {
  name: 'PublicGalleryView',
  props: { items: { type: Array, default: () => [] } },
  methods: {
    formatValue(value) {
      if (value == null) return ''
      if (Array.isArray(value)) return value.map(this.formatValue).join(', ')
      if (typeof value === 'object') return value.value || value.name || value.id || JSON.stringify(value)
      return String(value)
    },
  },
}
</script>

<style scoped>
.public-gallery { display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 18px; padding: 16px 0; }
.public-gallery__card { overflow: hidden; border: 1px solid #e4e7ec; border-radius: 12px; background: #fff; box-shadow: 0 2px 8px rgba(16, 24, 40, .06); transition: transform .18s ease, box-shadow .18s ease; }
.public-gallery__card:hover { transform: translateY(-2px); box-shadow: 0 10px 24px rgba(16, 24, 40, .12); }
.public-gallery__image-wrap { aspect-ratio: 16 / 10; background: linear-gradient(135deg, #eef4ff, #f8fafc); }
.public-gallery__image { display: block; width: 100%; height: 100%; object-fit: cover; }
.public-gallery__placeholder { display: grid; height: 100%; place-items: center; color: #98a2b3; font-size: 13px; }
.public-gallery__body { padding: 14px 15px 16px; }
.public-gallery__title-row { display: flex; align-items: flex-start; justify-content: space-between; gap: 10px; }
.public-gallery__body strong { display: block; color: #101828; line-height: 1.35; }
.public-gallery__body p { margin: 8px 0 0; color: #667085; font-size: 12px; line-height: 1.5; }
.public-gallery__download { flex: 0 0 auto; color: #175cd3; font-size: 11px; font-weight: 600; text-decoration: none; }
.public-gallery__download:hover { text-decoration: underline; }
.public-gallery__empty { grid-column: 1 / -1; color: #667085; padding: 16px; }
</style>
