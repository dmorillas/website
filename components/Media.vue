<template>
  <img :src="src" :alt="alt" :width="width" :height="height" />
</template>

<script>
export default {
  props: ['asset'],

  data () {
    return {
      src: this.asset.fields.file.url + '?q=80&fm=webp',
      alt: this.asset.fields.title,
      type: this.asset.fields.file.contentType,
      width: this.asset.fields.file.details.image.width,
      height: this.asset.fields.file.details.image.height
    }
  },

  beforeMount () {
    if (this.type === 'image/jpeg') {
      if (!this.supportsWebp()) {
        this.src = this.asset.fields.file.url + '?q=80'
      }
    }
  },

  methods: {
    async supportsWebp () {
      if (!self.createImageBitmap) return false

      const webpData =
        'data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA='

      const blob = await fetch(webpData).then(r => r.blob())

      return createImageBitmap(blob).then(
        () => true,
        () => false
      )
    }
  }
}
</script>
