<template>
  <h1 :class="`texts-titles hide-d ${titleSize}`">
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
</template>

<script>
export default {
  props: ['data', 'titleSize']
}
</script>
