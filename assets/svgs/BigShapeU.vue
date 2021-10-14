<template>
  <svg
    :class="`shape shape${index + 1}`"
    width="1685"
    height="1685"
    viewBox="0 0 1685 1685"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    :style="
      `transform: scaleX(${flipX ? '-1' : 1}) scaleY(${flipY ? '-1' : 1})`
    "
  >
    <path
      d="M174.003 211.248L187.396 978.399C194.277 1372.65 470.029 1644.03 856.464 1637.29C1245.75 1630.5 1511.86 1349.65 1504.98 955.401L1491.59 188.252L1093.75 195.196L1107.14 962.345C1110.24 1139.78 1010.48 1254 849.822 1256.8C689.165 1259.6 585.475 1148.47 582.386 971.504L568.996 204.356L174.003 211.248Z"
      :fill="`url(#paint${index + 1}_linear)`"
    />
    <defs>
      <linearGradient
        :id="`paint${index + 1}_linear`"
        x1="-107.377"
        y1="955.294"
        x2="1346.67"
        y2="1563.58"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.0328843" stop-color="white" stop-opacity="0" />
        <stop offset="0.306476" :stop-color="col" />
        <stop offset="0.755651" :stop-color="col" />
        <stop offset="0.916667" stop-color="white" stop-opacity="0" />
      </linearGradient>
    </defs>
  </svg>
</template>

<script>
export default {
  props: ['index', 'color', 'anim'],

  data () {
    return {
      col: 'transparent',
      flipX: this.anim ? this.anim.flipX === 'Yes' : false,
      flipY: this.anim ? this.anim.flipY === 'Yes' : false
    }
  },

  mounted () {
    switch (this.color) {
      case 'blue':
        this.col = '#1126ea'
        break

      case 'green':
        this.col = '#4af3a1'
        break

      case 'pink':
        this.col = '#fecdff'
        break

      case 'red':
        this.col = '#ff2750'
        break

      case 'yellow':
        this.col = '#ffeb33'
        break

      default:
        this.col = '#1126ea'
        break
    }
  }
}
</script>

<style lang="scss" scoped>
svg {
  width: auto !important;
}
</style>
