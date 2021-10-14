<template>
  <div>
    <h1 :class="`texts-titles hide-m ${titleSize}`" v-if="!isMobile">
      <span class="texts-titles-wrap">
        <span class="texts-line texts-line-top " v-html="data.desktopTop" />

        <br />

        <span
          class="texts-line texts-line-bottom "
          v-html="data.desktopBottom"
        />
      </span>
    </h1>

    <h1 :class="`texts-titles hide-d ${titleSize}`" v-else>
      <span class="texts-titles-wrap wrap">
        <span
          class="texts-line texts-line-top "
          v-html="data.mobileTop || data.desktopTop"
        />

        <br />

        <span
          class="texts-line texts-line-center "
          v-html="data.mobileCenter || data.desktopBottom"
        />
        <br v-if="data.mobileBottom" />
        <span
          v-if="data.mobileBottom"
          class="texts-line texts-line-bottom "
          v-html="data.mobileBottom"
        />
      </span>
    </h1>
  </div>
</template>

<script>
export default {
  props: ['data', 'titleSize'],

  data () {
    return {
      isMobile: false
    }
  },

  mounted () {
    this.isMobile = window.innerWidth > 961
  }
}
</script>
