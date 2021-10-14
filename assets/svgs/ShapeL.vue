<template>
  <svg
    :class="`shape shape${index + 1}`"
    width="813"
    height="887"
    viewBox="0 0 813 887"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    :style="
      `transform: scaleX(${flipX ? '-1' : 1}) scaleY(${flipY ? '-1' : 1})`
    "
  >
    <path
      d="M0 882.698L0 3H250.585L250.585 642.698L585 643.906L584.698 883L0 882.698Z"
      :fill="`url(#paint${index + 1}_linear)`"
    />
    <defs>
      <linearGradient
        :id="`paint${index + 1}_linear`"
        x1="620.057"
        y1="423.274"
        x2="-114.802"
        y2="1053.3"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.461467" :stop-color="col" />
        <stop offset="1" stop-color="white" stop-opacity="0" />
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
