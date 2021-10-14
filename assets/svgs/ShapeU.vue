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
      d="M813 887L813 413.641C813 170.374 645.825 0 407.38 0C167.175 0 0 170.374 0 413.641L0 887H245.484L245.484 413.641C245.484 304.156 308.248 234.777 407.38 234.777C506.512 234.777 569.276 304.449 569.276 413.641L569.276 887H813Z"
      :fill="`url(#paint${index + 1}_linear)`"
    />
    <defs>
      <linearGradient
        :id="`paint${index + 1}_linear`"
        x1="-100"
        y1="495.5"
        x2="939"
        y2="285"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.00727459" stop-color="white" stop-opacity="0" />
        <stop offset="0.306476" :stop-color="col" />
        <stop offset="0.681894" :stop-color="col" />
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
