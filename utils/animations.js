import anime from 'animejs'

const cubic1 = 'cubicBezier(0.39, 0.575, 0.565, 1)'
const cubic2 = 'easeInOutQuad'

export const header = () => {
  anime.timeline().add({
    targets: 'header',
    translateY: ['-1.1em', 0],
    translateZ: 0,
    opacity: 1,
    duration: 500,
    easing: cubic2,
    delay: 500
  })
}

export const texts = (data, index, isFirst) => {
  let lineOne, lineTwo, lineThree, transX

  const section = document.querySelector(`.section[data-index="${index}"]`)
  const body = section.querySelector('.texts-body')
  const hasNextChild = section.querySelector('.texts').nextElementSibling
  const duration = isFirst ? 600 : 500

  if (window.innerWidth < 961) {
    lineOne = section.querySelector('.texts-titles.hide-d .texts-line-top')
    lineTwo = section.querySelector('.texts-titles.hide-d .texts-line-center')
    lineThree = section.querySelector('.texts-titles.hide-d .texts-line-bottom')

    transX = {
      one: ['-100%', 0],
      two: ['100%', 0],
      three: ['100%', 0]
    }
  } else {
    lineOne = section.querySelector('.texts-titles.hide-m .texts-line-top')
    lineTwo = section.querySelector('.texts-titles.hide-m .texts-line-bottom')
    const coef = window.innerWidth > 1220 ? 20 : 10

    transX = {
      one: ['-100%', '-20%'],
      two: ['100%', `${coef}%`],
      three: ['100%', `-${coef}%`]
    }

    if (data.headlineSwapOrder) {
      transX = {
        one: ['100%', '20%'],
        two: ['-100%', `-${coef}%`],
        three: ['100%', `${coef}%`]
      }
    }
  }

  anime.timeline().add({
    targets: lineOne,
    left: transX.one,
    opacity: [0, 1],
    easing: cubic1,
    duration
  })

  anime.timeline().add({
    targets: lineTwo,
    left: transX.two,
    opacity: [0, 1],
    easing: cubic1,
    duration,
    delay: duration / 2
  })

  anime
    .timeline()
    .add({
      targets: lineThree,
      left: transX.three,
      opacity: [0, 1],
      easing: cubic1,
      duration: duration
    })
    .add({
      targets: body,
      translateY: ['100%', 0],
      opacity: [0, 1],
      duration,
      easing: cubic2,
      complete: () => {
        if (hasNextChild) {
          anime.timeline().add({
            targets: hasNextChild,
            opacity: [0, 1],
            easing: cubic1,
            duration
          })
        }
      }
    })
}

export const videos = (data, delay, index) => {
  const section = document.querySelector(`.section[data-index="${index}"]`)
  const imgsLeft = section.querySelectorAll('.left div.parallax-layer')
  const imgsRight = section.querySelectorAll('.right div.parallax-layer')

  anime.timeline().add({
    targets: imgsLeft,
    translateY: ['1.1em', 0],
    translateZ: 0,
    opacity: 1,
    duration: 1000,
    easing: cubic2,
    delay: (el, i) => delay + 100 * i
  })

  anime.timeline().add({
    targets: imgsRight,
    translateY: ['1.1em', 0],
    translateZ: 0,
    opacity: 1,
    duration: 1000,
    easing: cubic2,
    delay: (el, i) => delay + 100 * i
  })
}

export const shapes = (data, delay, index, length) => {
  const paramsDefault = {
    rotate: '0,0',
    translateX: '0, 0',
    translateY: '0, 0'
  }

  if (data) {
    const section = document.querySelector(`.section[data-index="${index}"]`)
    const left = section.querySelector('.shape-wrap:first-child svg')
    const right = section.querySelector('.shape-wrap:last-child svg')

    const shape1 =
      data[0] && data[0].fields.animation
        ? data[0].fields.animation.fields
        : paramsDefault

    const shape2 =
      data[1] && data[1].fields.animation
        ? data[1].fields.animation.fields
        : paramsDefault

    const params = {
      left: shape1,
      right: shape2
    }

    if (window.innerWidth < 961) {
      if (shape1) {
        if (shape1.mobileRotation) {
          params.left.rotate = shape1.mobileRotation
        }
        if (shape1.mobileTranslateX) {
          params.left.translateX = shape1.mobileTranslateX
        }
        if (shape1.mobileTranslateY) {
          params.left.translateY = shape1.mobileTranslateY
        }
      }

      if (shape2) {
        if (shape2.mobileRotation) {
          params.right.rotate = shape2.mobileRotation
        }
        if (shape2.mobileTranslateX) {
          params.right.translateX = shape2.mobileTranslateX
        }
        if (shape2.mobileTranslateY) {
          params.right.translateY = shape2.mobileTranslateY
        }
      }
    }

    anime.timeline().add({
      targets: left,
      rotate: [
        params.left.rotate.split(',')[0] + 'deg',
        params.left.rotate.split(',')[1] + 'deg'
      ],
      translateX: params.left.translateX.split(','),
      translateY: params.left.translateY.split(','),
      opacity: [0, 1],
      duration: 900,
      easing: cubic2,
      delay
    })

    if (length > 1) {
      anime.timeline().add({
        targets: right,
        rotate: [
          params.right.rotate.split(',')[0] + 'deg',
          params.right.rotate.split(',')[1] + 'deg'
        ],
        translateX: params.right.translateX.split(','),
        translateY: params.right.translateY.split(','),
        opacity: [0, 1],
        duration: 900,
        easing: cubic2,
        delay
      })
    }
  }
}

export const shapesAlt = (data, delay, index, length) => {
  const paramsDefault = {
    rotate: '0,0',
    translateX: '0, 0',
    translateY: '0, 0'
  }

  if (data) {
    const section = document.querySelector(`.section[data-index="${index}"]`)
    const left = section.querySelector('.shape-wrap:first-child svg')
    const right = section.querySelector('.shape-wrap:last-child svg')

    const shape1 =
      data[0] && data[0].fields.animation
        ? data[0].fields.animation.fields
        : paramsDefault

    const shape2 =
      data[1] && data[1].fields.animation
        ? data[1].fields.animation.fields
        : paramsDefault

    const params = {
      left: shape1,
      right: shape2
    }

    if (window.innerWidth < 961) {
      if (shape1) {
        if (shape1.mobileRotation) {
          params.left.rotate = shape1.mobileRotation
        }
        if (shape1.mobileTranslateX) {
          params.left.translateX = shape1.mobileTranslateX
        }
        if (shape1.mobileTranslateY) {
          params.left.translateY = shape1.mobileTranslateY
        }
      }

      if (shape2) {
        if (shape2.mobileRotation) {
          params.right.rotate = shape2.mobileRotation
        }
        if (shape2.mobileTranslateX) {
          params.right.translateX = shape2.mobileTranslateX
        }
        if (shape2.mobileTranslateY) {
          params.right.translateY = shape2.mobileTranslateY
        }
      }
    }

    anime.timeline().add({
      targets: left,
      rotate: [
        params.left.rotate.split(',')[0] + 'deg',
        params.left.rotate.split(',')[1] + 'deg'
      ],
      translateX: params.left.translateX.split(','),
      translateY: params.left.translateY.split(','),
      opacity: [0, 1],
      duration: 900,
      easing: cubic2,
      delay
    })

    if (length > 1) {
      anime.timeline().add({
        targets: right,
        rotate: [
          params.right.rotate.split(',')[0] + 'deg',
          params.right.rotate.split(',')[1] + 'deg'
        ],
        translateX: params.right.translateX.split(','),
        translateY: params.right.translateY.split(','),
        opacity: [0, 1],
        duration: 900,
        easing: cubic2,
        delay
      })
    }
  }
}

export const simple = (el, delay) => {
  anime.timeline().add({
    targets: el,
    translateY: ['2em', 0],
    translateZ: 0,
    opacity: [0, 1],
    duration: 500,
    easing: cubic2,
    delay
  })
}

export const illus = (el, reverse) => {
  anime.timeline().add({
    targets: el,
    rotate: [reverse ? '-20deg' : '20deg', 0],
    transformOrigin: reverse ? 'bottom right' : 'bottom left',
    translateX: [reverse ? '-100%' : '100%', 0],
    translateZ: 0,
    opacity: [0, 1],
    duration: 700,
    easing: cubic2,
    delay: 500
  })
}
