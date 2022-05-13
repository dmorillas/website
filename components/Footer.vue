<template>
  <footer class="footer wrap">
    <div class="footer-left">
      <h1>
        <nuxt-link to="/" title="Link to home">
          <Logo />
        </nuxt-link>
      </h1>

      <p class="p0">
        Get early access to Beta
      </p>
      <Form uuid="footer" />
    </div>

    <div class="footer-right">
      <ul class="socials">
        <li>
          <a
            href="https://twitter.com/pnkfrg"
            target="_blank"
            rel="noopener"
            title="Follow us on Twitter!"
            ><Twitter
          /></a>
        </li>
        <li>
          <a
            href="https://medium.com/@pnkfrg  "
            target="_blank"
            rel="noopener"
            title="Follow us on Medium"
            ><Medium
          /></a>
        </li>
        <li>
          <a
            href="https://discord.gg/ShE5QAGvCc"
            target="_blank"
            rel="noopener"
            title="Chat with us on Discord!"
            ><Discord
          /></a>
        </li>
      </ul>

      <ul class="links">
        <li>
          <nuxt-link to="/about" class="hover-me p0"><b>About</b></nuxt-link>
        </li>
        <li>
          <nuxt-link to="/careers" class="hover-me p0"
            ><b>Careers</b></nuxt-link
          >
        </li>
        <li>
          <nuxt-link to="/imprint" class="hover-me p0"
            ><b>Imprint</b></nuxt-link
          >
        </li>
        <li>
          <nuxt-link to="/privacy-policy" class="hover-me p0"
            ><b>Privacy policy</b></nuxt-link
          >
        </li>
        <li>
          <nuxt-link to="/terms" class="hover-me p0"><b>T&amp;Cs</b></nuxt-link>
        </li>
        <li>
          <a
            href="mailto:contact@pnkfrg.com"
            target="_blank"
            title="Contact us"
            rel="noopener"
            class="hover-me p0"
            ><b>Contact</b></a
          >
        </li>
      </ul>
    </div>
  </footer>
</template>

<script>
import Facebook from '@/assets/svgs/Facebook'
import Instagram from '@/assets/svgs/Instagram'
import Linkedin from '@/assets/svgs/Linkedin'
import Logo from '@/assets/svgs/LogoLine'
import Twitter from '@/assets/svgs/Twitter'
import Discord from '@/assets/svgs/Discord'
import Medium from '@/assets/svgs/Medium'

export default {
  components: { Facebook, Instagram, Linkedin, Logo, Twitter, Discord, Medium }
}
</script>

<style lang="scss">
.footer {
  display: flex;
  justify-content: space-between;
  padding-top: 80px;
  padding-bottom: 80px;
  position: relative;
  z-index: 666;
  background: var(--blue);

  &-left {
    width: 60%;

    p {
      margin-top: 20px;
      max-width: 505px;
    }
  }

  &-right {
    .links {
      margin-top: 40px;
      text-align: right;

      li:not(:last-child) {
        margin-bottom: 3px;
      }
    }
  }

  .form-wrap {
    input {
      &:focus {
        border-color: var(--white) !important;
      }
    }
  }

  .socials {
    display: flex;

    li {
      &:not(:last-child) {
        margin-right: 10px;
      }

      a {
        display: flex;
        position: relative;
        top: 0;
        transition: 0.2s all cubic-bezier(0.165, 0.84, 0.44, 1);

        svg {
          width: 38px;
          height: 38px;
          background: transparent;
          border-radius: 100%;
          transition: 0.2s all cubic-bezier(0.165, 0.84, 0.44, 1);

          path {
            transition: 0.2s all cubic-bezier(0.165, 0.84, 0.44, 1);
          }
        }

        &:hover {
          top: -2px;

          svg {
            background: var(--red);

            path {
              fill: var(--pink);
            }
          }
        }
      }
    }
  }

  @media (max-width: 960px) {
    padding-top: 68px;
    padding-bottom: 68px;
    flex-direction: column;

    &-left {
      width: 100%;
      p {
        margin-top: 12px;
      }
    }

    &-right {
      margin-top: 32px;

      .links {
        margin-top: 28px;
        text-align: left;

        li {
          display: inline-block;
          margin-bottom: 0;

          &:not(:last-child) {
            margin-right: 14px;
          }
        }
      }
    }
  }
}
</style>
