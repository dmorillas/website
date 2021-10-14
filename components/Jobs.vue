<template>
  <div class="jobs">
    <div class="wrap">
      <div class="jobs-wrap">
        <h2 class="h3">Open positions</h2>

        <ul>
          <li v-for="(job, i) in data" :key="i">
            <Job :data="job" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['data']
}
</script>

<style lang="scss">
.jobs {
  background: var(--pink);
  margin-top: 62px;
  opacity: 0;

  &-wrap {
    max-width: 544px;
    margin: 0 auto;
  }

  ul {
    margin-top: 32px;

    li {
      pointer-events: initial;
      position: relative;
      z-index: 666;
    }
  }
}
</style>
