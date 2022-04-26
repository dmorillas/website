<template>
  <div>
    <Header />

    <section class="ooops wrap section" data-index="0">
      <Shapes v-if="data" :data="data" index="0" />

      <!-- <p><b>Ooops</b></p> -->
      <br />
      <br />
      <h1>404</h1>
    </section>
  </div>
</template>

<script>
import * as anim from '@/utils/animations'

export default {
  data () {
    return {
      data: [
        {
          fields: {
            Type: 'L',
            color: 'Yellow',
            animation: {
              fields: {
                id: 'home ',
                rotate: '-90, -115',
                mobileRotation: '230, 251',
                translateX: '40%, 50%',
                mobileTranslateX: '108%, 78%',
                translateY: '-95%, -25%',
                mobileTranslateY: '-75%, -15%',
                flipX: 'No',
                flipY: 'Yes'
              }
            }
          }
        },
        {
          fields: {
            Type: 'L',
            color: 'Pink',
            animation: {
              fields: {
                id: 'home ',
                rotate: '-100, -120',
                mobileRotation: '220, 245',
                translateX: '70%, 90%',
                mobileTranslateX: '120%, 138%',
                translateY: '-22%, -8%',
                mobileTranslateY: '10%, 4%',
                flipX: 'Yes',
                flipY: 'No'
              }
            }
          }
        }
      ]
    }
  },

  mounted () {
    anim.header()
    anim.shapes(this.data, 400, 0, 2)
  }
}
</script>

<style lang="scss">
.ooops {
  position: relative;
  padding-top: 160px;
  text-align: center;
  background: var(--red);
  min-height: 100vh;
  overflow: hidden;

  p {
    font-size: 42px;
  }

  h1 {
    font-size: 120px;
    margin-bottom: 24px;
  }

  @media (min-width: 961px) {
    p {
      font-size: 100px;
    }

    h1 {
      font-size: 320px;
    }
  }
}
</style>
