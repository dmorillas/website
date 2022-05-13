<template>
  <div
    class="texts"
    :style="
      data.headlineColor && `color:var(--${data.headlineColor.toLowerCase()})`
    "
  >
    <TitlesDesktop
      :data="data.titles.fields"
      :titleSize="titleSize"
      v-if="!isMobile"
    />
    <TitlesMobile :data="data.titles.fields" :titleSize="titleSize" v-else />

    <div :class="`texts-body ${textSize}`">
      <div v-if="data.body" v-html="$md.render(data.body)" />

      <Form
        v-if="contact"
        :data-theme="data.headlineColor.toLowerCase()"
        :uuid="data.titles.sys.id"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: ['data', 'index', 'contact'],

  data () {
    let titleSize, textSize

    if (this.$route.name === 'index') {
      if (this.index === 0) {
        titleSize = 'h1'
        textSize = 'p2'
      } else {
        titleSize = 'h2'
        textSize = 'p0'
      }
    } else {
      if (this.index === 0) {
        titleSize = 'h1-alt'
        textSize = 'p1'
      } else {
        titleSize = 'h2'
        textSize = 'p0'
      }
    }

    return {
      titleSize,
      textSize,
      isMobile: false
    }
  },

  mounted () {
    this.isMobile = window.innerWidth < 961
  }
}
</script>

<style lang="scss">
.texts {
  position: relative;
  text-align: center;

  display: flex;
  justify-content: center;
  flex-direction: column;
  z-index: 99;

  pointer-events: none;

  a {
    pointer-events: initial;
    color: var(--blue);
  }

  @media (max-width: 960px) {
    max-width: 360px;
    margin-right: auto;
    margin-left: auto;
  }
}

.texts-titles {
  &-wrap {
    position: relative;
    display: inline-block;
  }

  @media (max-width: 960px) {
    &-wrap {
      width: 100%;
    }
  }
}

.texts-line,
.texts-body {
  opacity: 0;
}

.texts-line {
  position: relative;

  &-bottom {
    position: relative;
    padding-bottom: 7px;
  }

  @media (min-width: 961px) {
    &-bottom {
      float: right;
    }
  }

  @media (max-width: 960px) {
    &-top {
      float: left;
    }
    &-center {
      float: right;
    }
    &-bottom {
      float: left;
    }
  }
}

.texts-body {
  max-width: 544px;
  margin: 20px auto 0;
  text-align: left;

  @media (max-width: 960px) {
    padding-right: 15%;
    padding-left: 5%;
  }
}
</style>
