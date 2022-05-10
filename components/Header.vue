<template>
  <header class="header wrap">
    <nuxt-link to="/" title="Link to home">
      <Logo />
    </nuxt-link>

    <div class="burger" v-bind:class="{ opened: menuOpened }" @click="menu">
      <p class="">
        <svg
          width="30"
          height="24"
          viewBox="0 0 30 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 1H29"
            stroke="#030726"
            stroke-width="2"
            stroke-linecap="round"
          />
          <path
            d="M1 12H29"
            stroke="#030726"
            stroke-width="2"
            stroke-linecap="round"
          />
          <path
            d="M1 23H29"
            stroke="#030726"
            stroke-width="2"
            stroke-linecap="round"
          />
        </svg>
      </p>
    </div>

    <nav>
      <nuxt-link
        to="/#experience"
        title="Link to experience"
        class="hover-me hide-m"
        ><b @click="hashNav($event)">Experience</b></nuxt-link
      >

      <nuxt-link to="/about" title="Link to about" class="hover-me"
        ><b>About</b></nuxt-link
      >

      <nuxt-link to="/careers" title="Link to careers" class="hover-me"
        ><b>Careers</b></nuxt-link
      >

      <a
        href="mailto:contact@pnkfrg.com"
        target="_blank"
        title="Say hi 👋"
        rel="noopener"
        class="hover-me"
        ><b>Contact</b></a
      >
    </nav>
  </header>
</template>

<script>
import Logo from '@/assets/svgs/LogoStack'

export default {
  components: { Logo },
  computed: {
    menuOpened () {
      return this.$store.state.menu.opened
    }
  },
  methods: {
    menu () {
      this.$store.commit('menu')
      const _w = this.menuOpened ? '100%' : '0'

      document.querySelector('nav').style.width = _w
    },

    hashNav (e) {
      e.preventDefault()
      if (this.$route.name === 'index') {
        window.scrollTo({
          top: document.getElementById('experience').offsetTop - 80,
          behavior: 'smooth'
        })
      } else {
        this.$router.push({
          path: '/#experience'
        })
      }
    }
  }
}
</script>

<style lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 18px;
  padding-bottom: 18px;
  position: absolute;
  width: 100%;
  left: 0;
  z-index: 666;
  opacity: 0;
  transform: translateY(-80px);
  pointer-events: none;

  nav {
    &:not(:first-child) {
      a {
        @media (min-width: 961px) {
          margin-left: 24px;
        }
      }
    }
  }

  a {
    color: var(--white);
    font-size: 16px;
    pointer-events: initial;

    &.nuxt-link-exact-active::after {
      transform: scaleX(1);
    }
  }

  @media (min-width: 961px) {
    padding-top: 30px;
    padding-bottom: 30px;

    a {
      font-size: 22px;
    }
  }

  @media (min-width: 960px) {
    .burger {
      display: none;
    }
  }

  @media (max-width: 959px) {
    /* overflow: hidden; */

    .burger {
      position: relative;
      z-index: 9999;
      pointer-events: initial;
    }

    nav {
      position: fixed;
      top: 0;
      right: 0;
      width: 0%;
      height: 100vh;
      z-index: -1;
      padding-top: 120px;
      /* transform: translate(100%, 0); */
      overflow: hidden;
      background: var(--pink);
      transition: 0.27s ease-in-out;

      display: flex;
      flex-direction: column;

      a {
        font-size: 26px;
        padding-left: 5%;
        margin-bottom: 24px;
      }
    }
  }
}
</style>
