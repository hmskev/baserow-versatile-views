<template>
  <section class="public-gallery" aria-label="Gallery">
    <article v-for="item in items" :key="item.id" class="public-gallery__card">
      <div class="public-gallery__image-wrap">
        <img v-if="item.image" class="public-gallery__image" :src="item.image" :alt="item.label || 'Gallery image'" loading="lazy" />
        <div v-else class="public-gallery__placeholder" aria-label="No image">No image</div>
      </div>
      <div class="public-gallery__body">
        <strong>{{ item.label || item.id }}</strong>
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
.public-gallery { display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 16px; padding: 12px; }
.public-gallery__card { overflow: hidden; border: 1px solid #dfe1e6; border-radius: 8px; background: #fff; box-shadow: 0 1px 2px rgba(16, 24, 40, .06); }
.public-gallery__image-wrap { aspect-ratio: 4 / 3; background: #f2f4f7; }
.public-gallery__image { display: block; width: 100%; height: 100%; object-fit: cover; }
.public-gallery__placeholder { display: grid; height: 100%; place-items: center; color: #98a2b3; font-size: 13px; }
.public-gallery__body { padding: 12px; }
.public-gallery__body strong { display: block; color: #101828; }
.public-gallery__body p { margin: 6px 0 0; color: #667085; font-size: 12px; }
.public-gallery__empty { grid-column: 1 / -1; color: #667085; padding: 16px; }
</style>
