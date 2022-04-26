<template>
  <header class="header wrap">
    <nuxt-link to="/" title="Link to home">
      <Logo />
    </nuxt-link>

    <div>
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
    </div>
  </header>
</template>

<script>
import Logo from '@/assets/svgs/LogoStack'

export default {
  components: { Logo }
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

  div {
    &:not(:first-child) {
      a {
        margin-left: 12px;

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
}
</style>
