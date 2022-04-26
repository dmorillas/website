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
        class="split-illu split-illu--switch"
      />
      <Texts :data="data" :index="index" />
    </template>
    <template v-else>
      <Texts :data="data" :index="index" />
      <Illu
        v-if="data.illustration"
        :data="data.illustration.fields"
        class="split-illu split-illu--default"
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

      padding-top: 120px;
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
</style>

<style lang="scss">
.section-split {
  display: flex;

  @media (min-width: 961px) {
    flex-direction: row;
    padding-top: 64px;
    padding-bottom: 64px;

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
