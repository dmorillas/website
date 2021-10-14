<template>
  <div class="job" :data-active="active" v-if="data.fields">
    <h4 @click="trigger" class="job-head p0">
      <Arrow />

      <b v-html="data.fields.title" />
    </h4>

    <div ref="description" class="job-desc">
      <div v-html="$md.render(data.fields.desc)" />

      <a
        :href="data.fields.link"
        target="_blank"
        rel="noopener"
        title="Apply now"
        class="cta cta-red"
        >Apply now</a
      >
    </div>
  </div>
</template>

<script>
import anime from 'animejs'
import Arrow from '@/assets/svgs/Arrow'

export default {
  props: ['data'],

  components: { Arrow },

  data () {
    return {
      active: false
    }
  },

  methods: {
    trigger () {
      const el = this.$refs.description
      let height

      if (!this.active) {
        el.style.height = 'auto'
        height = el.clientHeight + 24
        el.style.height = 0

        anime({
          targets: el,
          height: [0, height],
          paddingTop: [0, 24],
          duration: 200,
          easing: 'easeInQuad',
          complete: function () {
            el.style.height = 'auto'
          }
        })
      } else {
        height = el.clientHeight
        el.style.height = height + 'px'

        anime({
          targets: el,
          height: 0,
          paddingTop: [24, 0],
          duration: 200,
          easing: 'easeInQuad'
        })
      }

      this.active = !this.active
    }
  }
}
</script>

<style lang="scss">
.job {
  margin-bottom: 24px;

  &-head {
    display: flex;
    cursor: pointer;
    align-items: center;

    .p0 {
      line-height: 1;
    }
  }

  &-desc {
    height: 0;
    overflow: hidden;
    white-space: pre-wrap;

    ul {
      margin-top: -16px !important;

      list-style: disc outside;

      li {
        margin-left: 15px;
        list-style: disc outside;
      }
    }
  }

  .cta {
    margin-top: 24px;
    margin-bottom: 42px;
  }
}
</style>
