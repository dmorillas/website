<template>
  <svg
    class="arrow"
    width="36"
    height="24"
    viewBox="0 0 36 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
  >
    <g class="closed">
      <path
        d="M2 12H23"
        stroke="#1126EA"
        stroke-width="3"
        stroke-linecap="round"
      />
    </g>

    <g class="opened">
      <path
        d="M14 22L34 2"
        stroke="#1126EA"
        stroke-width="3"
        stroke-linecap="round"
      />
      <path
        d="M34 22L14 2"
        stroke="#1126EA"
        stroke-width="3"
        stroke-linecap="round"
      />
    </g>
  </svg>
</template>

<style lang="scss">
.arrow {
  transform: scale(0.7);

  g.closed {
    path {
      transform-origin: center;
      transform: scaleX(1);
    }
  }

  g.opened {
    path {
      animation-delay: 0s;

      &:first-child {
        stroke-dasharray: 50;
        stroke-dashoffset: 37;
      }

      &:last-child {
        stroke-dasharray: 30;
        stroke-dashoffset: 44;
      }
    }
  }
}

.job[data-active='true'] {
  .arrow {
    margin-left: -13px;
    margin-right: 10px;
    transition: all 0.2s ease;
  }

  g.closed {
    path {
      animation: drawLine 0.3s forwards;
    }
  }

  g.opened {
    path {
      animation-delay: 0.3s;

      &:first-child {
        animation: drawCrossTop 0.3s forwards;
      }

      &:last-child {
        animation: drawCrossBottom 0.3s forwards;
      }
    }
  }
}

@keyframes drawCrossTop {
  to {
    stroke-dashoffset: 0;
  }
}
@keyframes drawCrossBottom {
  to {
    stroke-dashoffset: 60;
  }
}

@keyframes drawLine {
  to {
    transform: scaleX(0);
  }
}
</style>
