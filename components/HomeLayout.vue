<template>
  <div
    class="section-content home-layout"
    :style="data.background && getBg(data.background)"
  >
    <div
      class="section"
      :data-index="index"
      v-observe-visibility="{
        callback: visibilityChanged,
        once: true,
        intersection: {
          threshold: index > 0 ? 0.3 : 0
        }
      }"
    >
      <Texts :data="data" />
    </div>

    <div
      v-observe-visibility="{
        callback: visibilityChangedAlt,
        once: true,
        intersection: {
          threshold: index > 0 ? 0.3 : 0
        }
      }"
      class="section"
      data-svg="true"
      :data-index="index * 12"
    >
      <Shapes v-if="data.shapes" :data="data.shapes" :index="index" />
    </div>

    <section
      v-for="(mod, i) in data.sections"
      class="section"
      :data-index="i + 1 * 99"
      :key="i"
    >
      <SectionSplit :data="mod.fields" :index="i + 1 * 999" />
    </section>
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
        anim.shapes(this.data.shapes, isFirst ? 1500 : 400, i, 2)

        if (this.data.videos) {
          anim.videos(this.data, 1000, this.index)
        }
      }
    },

    visibilityChangedAlt (isVisible, entry) {
      this.isVisible = isVisible

      if (entry.target.getAttribute('data-svg')) {
        console.log('e', entry.target, entry.target.getAttribute('data-index'))

        if (isVisible) {
          anim.shapesAlt(
            this.data.shapes,
            2000,
            entry.target.getAttribute('data-index'),
            2
          )
        }
      }
    }
  }
}
</script>

<style lang="scss">
.section-content {
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 194px;
  padding-bottom: 194px;

  .jobs {
    margin-bottom: calc(-194px + 104px);
  }

  .jobs {
    @media (max-width: 960px) {
      margin-bottom: calc(-194px + 66px);
    }
  }
}

section[data-type='hero-index'] {
  .section-content {
    @media (max-width: 960px) {
      /* padding-top: 80vh;
      min-height: 100vh;
      padding-bottom: 85px; */

      padding-top: calc(100vh - 240px);
      max-height: -webkit-fill-available;
      padding-bottom: 120px;
    }

    @media (min-width: 961px) {
      padding-top: 302px;
      padding-bottom: 250px;

      .h1 {
        line-height: 0.9;
      }

      .h2 {
        line-height: 1.12;
      }
    }
  }
}

section[data-type='text'] {
  position: relative;

  .shapes {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;

    .shape-wrap {
      left: 0;
    }

    svg {
      height: auto;
    }
  }
}

.home-layout {
  .shapes {
    .shape-wrap {
      height: auto;

      &:first-child {
        top: 20%;
      }

      &:last-child {
        top: 70%;
        left: 80%;
      }

      svg {
        /* transition: 0.5s ease-out;
        opacity: 1; */
      }
    }
  }
}
</style>
