function Parallax (options) {
  options = options || {}

  this.nameSpaces = {
    wrapper: options.wrapper || 'body',
    layers: options.layers || '.parallax-layer',
    deep: options.deep || 'data-parallax-deep',
    scroll: options.scroll || 'data-parallax-scroll',
    shift: options.shift || 'data-parallax-shift'
  }

  this.init = function () {
    const self = this
    const parallaxWrappers = document.querySelectorAll(this.nameSpaces.wrapper)

    for (let i = 0; i < parallaxWrappers.length; i++) {
      ;(function (i) {
        parallaxWrappers[i].addEventListener('mousemove', function (e) {
          const x = e.clientX
          const y = e.clientY
          const layers = parallaxWrappers[i].querySelectorAll(
            self.nameSpaces.layers
          )

          for (let j = 0; j < layers.length; j++) {
            ;(function (j) {
              const deep = layers[j].getAttribute(self.nameSpaces.deep)
              const disallow = layers[j].getAttribute('data-parallax-disallow')

              const itemX = disallow && disallow === 'x' ? 0 : x / deep
              const itemY = disallow && disallow === 'y' ? 0 : y / deep

              if (disallow && disallow === 'both' && deep) return
              layers[j].style.transform =
                'translateX(' + itemX + '%) translateY(' + itemY + '%)'
            })(j)
          }
        })

        window.addEventListener('scroll', function () {
          const y = window.scrollY
          const layers = parallaxWrappers[i].querySelectorAll(
            self.nameSpaces.layers
          )

          for (let j = 0; j < layers.length; j++) {
            ;(function (j) {
              const scroll = layers[j].getAttribute(self.nameSpaces.scroll)
              const shift = layers[j].getAttribute(self.nameSpaces.shift)
              const disallow = layers[j].getAttribute('data-parallax-disallow')

              const scrollY = disallow && disallow === 'y' ? 0 : y / scroll
              const shiftY = disallow && disallow === 'y' ? 0 : y / shift

              if (disallow && disallow === 'both' && scroll) return
              layers[j].style.transform = 'translateY(' + scrollY + '%)'

              if (disallow && disallow === 'both' && shift) return
              layers[j].style.transform = 'rotate(' + shiftY + 'deg)'
            })(j)
          }
        })
      })(i)
    }
  }

  this.init()

  return this
}

window.addEventListener('load', function () {
  new Parallax()
})
