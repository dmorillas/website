<template>
  <div class="videos">
    <div class="parallax">
      <div class="left">
        <Video :data="data[0]" index="0" data-parallax-scroll="20" />
        <Video :data="data[1]" index="1" data-parallax-scroll="-40" />
        <Video :data="data[2]" index="2" data-parallax-scroll="-70" />
      </div>

      <div class="right">
        <Video :data="data[3]" index="3" data-parallax-scroll="40" />
        <Video :data="data[4]" index="4" data-parallax-scroll="-50" />
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
.videos,
.parallax {
  position: absolute;
}

.videos {
  top: 0;
  width: 100%;
}

[data-show] {
  transition: opacity 0.3s ease-out;
}

img {
  &[data-show='no'] {
    opacity: 0 !important;
  }
  &[data-show='yes'] {
    opacity: 1 !important;
  }
}
video {
  &[data-show='no'] {
    opacity: 0 !important;
  }
  &[data-show='yes'] {
    opacity: 1 !important;
  }
}

.parallax {
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;

  div.parallax-layer {
    position: relative;
    opacity: 0;

    img {
      width: 100%;
      height: auto;

      ~ video {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 5;
        width: 100%;
        height: 100%;
        object-fit: cover;
        pointer-events: none;
        /* opacity: 0; */
        transition: opacity 0.1s ease-out;
      }

      @media (min-width: 961px) {
        &:hover {
          transition: opacity 0.1s ease-out;
          /* opacity: 0 !important; */

          ~ video {
            /* opacity: 1; */
          }
        }
      }

      @media (max-width: 960px) {
        ~ video {
          display: none;
        }
      }
    }
  }
}

@media (max-width: 960px) {
  .video {
    position: absolute !important;
  }

  .video-0 {
    width: 20vw;
    left: 50vw;
    top: 430px;
    z-index: 5;
  }

  .video-1 {
    top: 250px;
    width: 32vw;
    left: 10vw;
    z-index: 2;
  }

  .video-2 {
    width: 19vw;
    top: 150px;
    left: 5vw;
  }

  .video-3 {
    width: 18vw;
    top: 100px;
    left: 55%;
    z-index: 1;
  }

  .video-4 {
    width: 31.5vw;
    top: 200px;
    right: 5%;
  }
}

@media (min-width: 961px) {
  .videos {
    top: 50%;
    height: 100%;
    transform: translateY(-50%);
  }

  .parallax {
    align-items: center;

    .video.parallax-layer {
      position: absolute;
    }
  }

  .video-0 {
    top: 0;
    left: 20vw;
    width: 10vw;
    z-index: 5;
  }

  .video-1 {
    top: 150px;
    left: -4px;
    width: 15vw;
    z-index: 2;
  }

  .video-2 {
    bottom: 54px;
    left: 12vw;
    width: 9.6vw;
  }

  .video-3 {
    max-width: 150px;
    top: 50px;
    right: 220px;
    z-index: 1;
    width: 10.6vw;
  }

  .video-4 {
    max-width: 280px;
    bottom: 50px;
    right: -30px;
    width: 20vw;
  }
}
</style>
