<template>
  <div>
    <Shapes v-if="data.shapes" :data="data.shapes" :index="0" />

    <div class="wrap" :style="getBg(data.background)">
      <div class="legalities">
        <h1 v-html="data.headline" />

        <div v-html="$md.render(data.body)" />
      </div>
    </div>
  </div>
</template>

<script>
import * as anim from '@/utils/animations'

export default {
  props: ['data'],

  mounted () {
    anim.header()
    anim.simple('.legalities', 700)
    anim.shapes(this.data.shapes, 700, 0, 1)
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
    }
  }
}
</script>

<style lang="scss">
.legalities {
  padding-top: 180px;
  padding-bottom: 180px;
  max-width: 1024px;
  margin-right: auto;
  margin-left: auto;

  @media (max-width: 960px) {
    padding-top: 120px;
    padding-bottom: 42px;
  }

  h1 {
    font-size: 85px;
    margin-bottom: 24px;

    @media (max-width: 960px) {
      font-size: 54px;
    }
  }

  h2 {
    font-size: 22px;
    line-height: 1.5;
    margin-top: 18px;
  }

  p {
    font-size: 20px;
    line-height: 1.3;
    margin-top: 8px;
    margin-bottom: 42px;

    @media (max-width: 960px) {
      font-size: 18px;
      margin-bottom: 32px;
    }
  }

  ul {
    margin-top: 8px;
    font-size: 20px;

    li {
      position: relative;
      padding-left: 12px;

      &::before {
        content: '';
        display: inline-block;
        position: absolute;
        top: 8px;
        left: 0;
        width: 6px;
        height: 6px;
        border-radius: 100%;
        background-color: var(--red);
      }
    }

    @media (max-width: 960px) {
      font-size: 18px;
    }
  }

  table {
    font-size: 20px;

    td {
      padding-bottom: 34px;

      s {
        display: inline-block;
        width: 100%;
        text-decoration: none;
      }
    }

    @media (max-width: 960px) {
      font-size: 18px;

      td {
        display: inline-block;

        &:first-child {
          padding-bottom: 8px;
        }
      }
    }
  }
}
</style>
