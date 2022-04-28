<template>
  <div
    id="experience"
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
      class="section wrap-split"
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
#experience {
  [data-svg] {
    + * {
      margin-top: 82px;

      @media (max-width: 960px) {
        margin-top: 42px;
      }
    }
  }
}

[data-slug='index'] {
  section[data-type='hero-index'] {
    > .section-content {
      overflow: visible;
      .shapes {
        z-index: 1;
      }
    }
  }
}

.home-layout {
  &.section-content {
    padding-top: 0;
    padding-bottom: 0;
  }

  .shapes {
    .shape-wrap {
      height: auto;

      &:first-child {
        top: 20%;
      }

      &:last-child {
        top: 46%;
        left: 80%;
      }

      svg {
        /* transition: 0.5s ease-out;
        opacity: 1; */
      }
    }
  }
}

.wrap-split {
  &:nth-child(even) {
    .texts-titles-wrap {
      *:last-child {
        color: var(--red);
      }
    }
  }
  &:nth-child(odd) {
    .texts-titles-wrap {
      *:last-child {
        color: var(--blue);
      }
    }
  }
}
</style>
