<template>
  <div
    class="section section-content section-split"
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
    <template v-if="data.switchOrder">
      <Illu
        v-if="data.illustration"
        :data="data.illustration.fields"
        class="split-illu split-illu--switch parallax-layer"
        :data-parallax-deep="(index / 100) * -250"
      />
      <Texts :data="data" :index="index" />
    </template>
    <template v-else>
      <Texts :data="data" :index="index" />
      <Illu
        v-if="data.illustration"
        :data="data.illustration.fields"
        class="split-illu split-illu--default parallax-layer"
        :data-parallax-deep="(index / 100) * 250"
      />
    </template>
  </div>
</template>

<script>
import Vue from 'vue'
import VueObserveVisibility from 'vue-observe-visibility'
import * as anim from '@/utils/animations'

Vue.use(VueObserveVisibility)

export default {
  props: ['data', 'index'],

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

        anim.illus(entry.target.querySelector('.split-illu--default'), false)
        anim.illus(entry.target.querySelector('.split-illu--switch'), true)
        // anim.shapes(this.data.shapes, isFirst ? 1500 : 400, i, 2)

        if (this.data.videos) {
          anim.videos(this.data, 1000, this.index)
        }
      }
    }
  }
}
</script>

<style lang="scss">
.wrap-split {
  &:not(:last-child) {
  }
}

.section-split {
  display: flex;
  padding-top: 0;
  padding-bottom: 0;
  margin-bottom: -64px;

  @media (min-width: 961px) {
    flex-direction: row;

    .texts {
      padding: 0 5%;
    }

    > * {
      width: 50%;
    }
  }

  @media (max-width: 960px) {
    padding-top: 64px;
    padding-bottom: 64px;

    .split-illu {
      order: 2;
      margin-top: 42px;
    }
    .texts {
      order: 1;
    }
  }

  img {
    width: 100%;
    /* max-width: 80%; */
  }

  .split-illu {
    opacity: 0;
    &--default {
      img {
        float: left;
        padding-left: 20%;
      }
    }

    &--switch {
      img {
        float: right;
        padding-right: 20%;
      }
    }
  }
}
</style>
