<template>
  <div :data-theme="theme">
    <Header />

    <main class="main" :key="key">
      <section
        v-for="(mod, i) in data.modules"
        class="section"
        :data-type="modName(mod, i)"
        :data-index="i"
        :key="i"
      >
        <Section
          v-if="modName(mod) === 'section'"
          :data="mod.fields"
          :index="i"
        />

        <Simple
          v-else-if="modName(mod) === 'text'"
          :data="mod.fields"
          :index="i"
        />

        <Jobs
          v-else-if="modName(mod) === 'jobs'"
          :data="mod.fields"
          :index="i"
        />
      </section>
    </main>

    <Footer />
  </div>
</template>

<script>
import * as anim from '@/utils/animations'

export default {
  props: ['data'],

  data () {
    return {
      key: 0,
      screenW: 0,
      theme: this.data.theme === 'Black' ? 'dark' : 'light'
    }
  },

  mounted () {
    anim.header()

    this.screenW = window.innerWidth
    window.addEventListener('resize', e => {
      this.checkResize(e)
    })
  },

  methods: {
    checkResize (e) {
      const el = e.currentTarget

      if (el.resizeTO) clearTimeout(el.resizeTO)

      el.resizeTO = setTimeout(() => {
        if (this.screenW < 1201 && window.innerWidth > 960) {
          this.key++
        }
        if (this.screenW < 961 && window.innerWidth > 960) {
          this.key++
        }
        if (this.screenW > 960 && window.innerWidth < 961) {
          this.key++
        }

        this.screenW = window.innerWidth
      }, 200)
    },

    modName (mod, i) {
      if (this.$route.name === 'index' && i === 0) {
        return 'hero-index'
      } else {
        return mod.sys.contentType.sys.id
      }
    }
  }
}
</script>

<style lang="scss">
:root {
  --black: #000;
  --blue: #1126ea;
  --green: #4af3a1;
  --pink: #fecdff;
  --red: #ff2750;
  --white: #f7f7f7;
  --yellow: #ffeb33;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  background: var(--blue);
  color: var(--white);
  font-family: 'gllx', Helvetica, Arial, sans-serif;
  font-weight: 500;
  min-height: 100vh;
}

body {
  margin: 0;
  opacity: 0;
  animation: body 1s forwards;
}

main {
  overflow: hidden;
}

@keyframes body {
  to {
    opacity: 1;
  }
}

.hide-d {
  @media (min-width: 961px) {
    display: none;
  }
}

.hide-m {
  @media (max-width: 960px) {
    display: none;
  }
}

.wrap {
  padding-right: 5%;
  padding-left: 5%;
}

a {
  text-decoration: none;
  color: inherit;

  &:hover {
    text-decoration: underline;
  }
}

ul,
li {
  list-style: none;
  padding-left: 0;
}

[data-theme='dark'] {
  .header {
    a {
      color: var(--black);

      &::after {
        background: var(--black);
      }
    }

    svg {
      path {
        fill: var(--black);
      }
    }
  }

  .main {
    color: var(--black);
  }
}

.hover-me {
  position: relative;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 100%;
    width: 100%;
    height: 3px;
    border-radius: 100px;
    background: var(--white);
    transform: scaleX(0);
    transform-origin: bottom left;
    transition: 0.3s transform cubic-bezier(0.39, 0.575, 0.565, 1);
  }

  &:hover {
    text-decoration: none;

    &::after {
      transform: scaleX(1);
      transform-origin: bottom right;
    }
  }
}

.cta,
.texts-body strong > a {
  display: inline-block;
  padding: 14.5px 31.6px;
  font-size: 16px;
  font-weight: 700;
  line-height: 1;
  background: var(--blue);
  border-radius: 94px;
  text-decoration: none !important;
  transition: all 0.2s ease-out;

  &:hover {
    background: var(--pink);
    color: var(--red);
  }

  &-red {
    background: var(--red);
    color: var(--white);

    &:hover {
      background: var(--blue);
      color: var(--pink);
    }
  }
}

.texts-body strong > a {
  margin-top: 22px;
  background: var(--blue);
  color: var(--white);

  &:hover {
    background: var(--red);
    color: var(--white);
  }
}

.h1 {
  font-size: 54px;
  line-height: 1.07;
  font-weight: 700;

  @media (min-width: 961px) {
    font-size: 130px;
  }
}

.h1-alt {
  font-size: 54px;
  line-height: 1.07;
  font-weight: 700;

  @media (min-width: 961px) {
    font-size: 112px;
  }
}

.h2 {
  font-size: 44px;
  line-height: 1.07;
  font-weight: 700;

  @media (min-width: 961px) {
    font-size: 64px;
  }

  @media (min-width: 1200px) {
    font-size: 85px;
  }
}

.h3 {
  font-size: 22px;
  line-height: 1.05;
  font-weight: 700;

  @media (min-width: 961px) {
    font-size: 35px;
  }
}

.p0 {
  font-size: 18px;
  line-height: 1.22;

  @media (min-width: 961px) {
    font-size: 22px;
  }
}

.p1 {
  font-size: 18px;
  line-height: 1.18;

  @media (min-width: 961px) {
    font-size: 22px;
  }
}

.p2 {
  font-size: 20px;
  line-height: 1.18;

  @media (min-width: 961px) {
    font-size: 25px;
  }
}
</style>
