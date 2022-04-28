<template>
  <div
    class="section-content"
    :data-index="index"
    :style="data.background && getBg(data.background)"
    v-observe-visibility="{
      callback: visibilityChanged,
      once: true,
      intersection: {
        threshold: index > 0 ? 0.3 : 0
      }
    }"
  >
    <Shapes v-if="data.shapes" :data="data.shapes" :index="uuid" />

    <Videos v-if="data.videos" :data="data.videos" />

    <Texts :data="data" :index="index" :contact="data.contactForm" />

    <Jobs v-if="data.jobs" :data="data.jobs" />
  </div>
</template>

<script>
import Vue from 'vue'
import VueObserveVisibility from 'vue-observe-visibility'
import * as anim from '@/utils/animations'

Vue.use(VueObserveVisibility)

export default {
  props: ['data', 'index', 'uuid'],

  data () {
    return {
      isVisible: false
    }
  },

  methods: {
    getBg (bg) {
      let b = bg.toLowerCase()

      if (b === 'pink - gradient') {
        b = 'background:linear-gradient(180deg, var(--pink) 0%, #FAF2FA 100%)'
      } else {
        b = `background:var(--${b})`
      }

      return b
    },

    visibilityChanged (isVisible, entry) {
      const i = this.index
      const isFirst = i === 0

      this.isVisible = isVisible

      if (isVisible) {
        anim.texts(this.data, i, isFirst)
        anim.shapes(this.data.shapes, isFirst ? 1500 : 400, i, 2)

        if (this.data.videos) {
          anim.videos(this.data, 1000, this.index)
        }
      }
    }
  }
}
</script>
