<template
  ><div>
    <div class="form-wrap">
      <form
        method="POST"
        id="form"
        ref="form"
        name="Early Access"
        data-netlify="true"
        netlify-honeypot="bot-field"
        @submit="handleSubmit($event)"
      >
        <input type="hidden" name="form-name" value="Early Access" />
        <input type="hidden" name="bot-field" />

        <div class="form-row">
          <input type="email" name="email" placeholder="Email*" required />
        </div>
        <div>
          <button type="submit" class="cta cta-sumbit">get early access</button>
        </div>
      </form>
    </div>

    <div class="form-feed">
      <h2>Thanks, we'll reach out!</h2>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      sent: null
    }
  },

  methods: {
    checkSelect () {
      const select = this.$refs.select

      select.classList.value.indexOf('disabled') > -1 &&
        select.classList.remove('disabled')
    },

    handleSubmit (e) {
      e.preventDefault()

      const app = this
      const myForm = app.$refs.form
      const formData = new FormData(myForm)

      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString()
      })
        .then(res => {
          console.log('res', res)
          if (res.status === 200) {
            app.sent = true
            setTimeout(() => {
              app.showFeed()
            }, 500)
          }
        })
        .catch(error => {
          console.error('Error:', error)
        })
    },

    showFeed () {
      const main = document.querySelector('.form-wrap')
      const feed = document.querySelector('.form-feed')

      main.remove()
      feed.style.height = 'auto'
      // this.$gsap.to(main, 0.4, {
      //   height: 0,
      //   ease: 'Power1.easeInOut'
      // })

      // this.$gsap
      //   .to(feed, 0.4, {
      //     height: feed.scrollHeight,
      //     ease: 'Power1.easeInOut'
      //   })
      //   .delay(0.5)
    }
  }
}
</script>

<style lang="scss" scoped>
.form-wrap,
.form-feed {
  overflow: hidden;
}

.form-feed {
  height: 0;
}

.form-wrap {
  position: relative;
  z-index: 1;

  form {
    margin: 12px 0;
  }

  .form-row {
    position: relative;
    display: flex;
    gap: 22px;
    margin-bottom: 8px;
    flex-direction: column;
    border: 1px solid var(--white);
    border-radius: 100px;

    @media (min-width: 768px) {
      flex-direction: row;
    }
  }

  input {
    -webkit-appearance: none;
    width: 100%;
    outline: none;
    border: 2px solid var(--white);
    border-radius: 0px;
    padding: 12px;
    border-radius: 100px;

    color: var(--white);
    background: var(--blue);

    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
      -webkit-box-shadow: 0 0 0 30px var(--blue) inset !important;
      -webkit-text-fill-color: var(--white) !important;
    }

    &:focus {
      border-color: var(--yellow);
    }

    @media (min-width: 768px) {
    }
  }

  .cta {
    color: var(--blue);
    background: var(--yellow);
    border-color: var(--orange);

    &::before {
      background: var(--orange);
    }

    @media (hover: hover) {
      &:hover {
        color: var(--red);
      }
    }
  }

  @media (min-width: 1024px) {
    max-width: 70%;
  }
}

::placeholder,
select.disabled {
  /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: rgba(#e6e1d2, 0.3);
  opacity: 1; /* Firefox */
}

:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: rgba(#e6e1d2, 0.3);
}

::-ms-input-placeholder {
  /* Microsoft Edge */
  color: rgba(#e6e1d2, 0.3);
}
</style>
