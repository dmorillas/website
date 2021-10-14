<template>
  <div class="shapes">
    <div v-for="(shape, i) in data" :key="i" class="shape-wrap">
      <ShapeL
        v-if="shape.fields.Type === 'L'"
        :index="index + 1 + i"
        :color="shape.fields.color.toLowerCase()"
        :anim="shape.fields.animation ? shape.fields.animation.fields : null"
      />

      <ShapeU
        v-if="shape.fields.Type === 'U'"
        :index="index + 99 + i"
        :color="shape.fields.color.toLowerCase()"
        :anim="shape.fields.animation ? shape.fields.animation.fields : null"
      />

      <BigShapeU
        v-if="shape.fields.Type === 'U - Big'"
        :index="index + 99 + i"
        :color="shape.fields.color.toLowerCase()"
        :anim="shape.fields.animation ? shape.fields.animation.fields : null"
      />
    </div>
  </div>
</template>

<script>
import ShapeL from '@/assets/svgs/ShapeL'
import ShapeU from '@/assets/svgs/ShapeU'
import BigShapeU from '@/assets/svgs/BigShapeU'

export default {
  props: ['data', 'index'],

  components: { ShapeL, ShapeU, BigShapeU }
}
</script>

<style lang="scss">
.shapes {
  position: absolute;
  width: 100%;
  height: 100%;

  .shape-wrap {
    position: absolute;
    top: 0;
    width: 50%;
    height: 100%;

    &:first-child {
      left: 0;
    }

    &:last-child {
      left: 50%;
    }

    svg {
      width: 100%;
      height: 100%;
      opacity: 0;
    }
  }

  @media (max-width: 960px) {
    .shape-wrap {
      width: 100%;

      &:first-child {
        left: 0;
      }

      &:last-child {
        left: 0;
      }

      svg {
      }
    }
  }
}

.shape {
}
</style>
