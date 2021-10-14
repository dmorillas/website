<template>
  <h1 :class="`texts-titles hide-m ${titleSize}`">
    <span class="texts-titles-wrap">
      <span class="texts-line texts-line-top " v-html="data.desktopTop" />

      <br />

      <span class="texts-line texts-line-bottom " v-html="data.desktopBottom" />
    </span>
  </h1>
</template>

<script>
export default {
  props: ['data', 'titleSize']
}
</script>
