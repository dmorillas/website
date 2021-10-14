<template>
  <div
    :class="`parallax-layer video video-${index}`"
    @mouseover="triggerVideo(true)"
    @mouseout="triggerVideo(false)"
  >
    <Media
      :asset="data.fields.poster"
      class="parallax-layer"
      data-parallax-deep="-600"
      :data-show="show ? 'no' : 'yes'"
    />

    <video
      ref="video"
      preload="none"
      loop
      v-if="video"
      :data-show="show ? 'yes' : 'no'"
    >
      <source :src="getMetas(data).src" :type="getMetas(data).type" />
    </video>
  </div>
</template>

<script>
export default {
  props: ['data', 'index'],

  data () {
    return {
      video: false,
      show: false
    }
  },

  mounted () {
    this.video = window.innerWidth > 961
  },

  methods: {
    getMetas (id) {
      return {
        src: id.fields.video.fields.file.url,
        type: id.fields.video.fields.file.contentType
      }
    },

    triggerVideo (bool) {
      if (window.innerWidth > 961) {
        const video = this.$refs.video

        if (bool) {
          video.play()

          video.ontimeupdate = () => {
            if (video.currentTime > 0) {
              this.show = true

              video.style.transform =
                video.previousElementSibling.style.transform
            }
          }
        } else {
          video.pause()
          video.style.transform = ''

          setTimeout(() => {
            this.show = false
          }, 100)
        }
      }
    }
  }
}
</script>
