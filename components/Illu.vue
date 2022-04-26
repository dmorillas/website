<template>
  <div>
    <img :src="data.file.url" :alt="data.title" />
  </div>
</template>

<script>
export default {
  props: ['data']
}
</script>
