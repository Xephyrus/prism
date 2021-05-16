<template>
  <div class="loading-wrapper">
    <div class="loading-anime">
      <div class="border out"></div>
      <div class="border in"></div>
      <div class="border mid"></div>
      <div class="circle">
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
$percent-15: 15%;
$percent-18: 18%;
$percent-20: 20%;
$percent-40: 40%;
$percent-64: 64%;
$percent-70: 70%;

@mixin border($position, $size) {
  top: $position;
  left: $position;
  width: $size;
  height: $size;
}

.loading-wrapper {
  left: 0;
  top: 0;
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: rgba(255, 255, 255, 0.2);
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;

  .loading-anime {
    display: block;
    position: relative;
    width: 200px;
    height: 200px;
    margin: auto;
    perspective: 800px;
    transform-style: preserve-3d;
    // transform: translateZ(-100px) rotateY(-90deg) rotateX(90deg) rotateZ(90deg)
    //   scale(0.5);
    // opacity: 0;
    transform: translateZ(0) rotateY(0deg) rotateX(0deg) rotateZ(0deg) scale(1);
    opacity: 1;
    transition: all 0.2s ease-out;

    .circle {
      width: 100%;
      height: 100%;
      animation: spin 5s linear infinite;

      .dot {
        position: absolute;
        display: block;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background-color: #e34981;
        animation: jitter 5s ease-in-out infinite,
          fade-in-out 5s linear infinite;
      }

      .dot:nth-child(1) {
        top: 90px;
        left: 180px;
        animation-delay: 0s;
      }

      .dot:nth-child(2) {
        top: 135px;
        left: 168px;
        animation-delay: 0.41667s;
      }

      .dot:nth-child(3) {
        top: 168px;
        left: 135px;
        animation-delay: 0.83333s;
      }

      .dot:nth-child(4) {
        top: 180px;
        left: 90px;
        animation-delay: 1.25s;
      }

      .dot:nth-child(5) {
        top: 168px;
        left: 45px;
        animation-delay: 1.66667s;
      }

      .dot:nth-child(6) {
        top: 135px;
        left: 12px;
        animation-delay: 2.08333s;
      }

      .dot:nth-child(7) {
        top: 90px;
        left: 0px;
        animation-delay: 2.5s;
      }

      .dot:nth-child(8) {
        top: 45px;
        left: 12px;
        animation-delay: 2.91667s;
      }

      .dot:nth-child(9) {
        top: 12px;
        left: 45px;
        animation-delay: 3.33333s;
      }

      .dot:nth-child(10) {
        top: 0px;
        left: 90px;
        animation-delay: 3.75s;
      }

      .dot:nth-child(11) {
        top: 12px;
        left: 135px;
        animation-delay: 4.16667s;
      }

      .dot:nth-child(12) {
        top: 45px;
        left: 168px;
        animation-delay: 4.58333s;
      }
    }

    .border {
      position: absolute;
      border-radius: 50%;
      border: 3px solid #e34981;
    }

    .out {
      //   top: 15%;
      //   left: 15%;
      //   width: 70%;
      //   height: 70%;
      @include border(15%, 70%);
      border-left-color: transparent;
      border-right-color: transparent;
      animation: spin 2s linear reverse infinite;
    }

    .in {
      //   top: 18%;
      //   left: 18%;
      //   width: 64%;
      //   height: 64%;
      @include border(18%, 64%);
      border-top-color: transparent;
      border-bottom-color: transparent;
      animation: spin 2s linear infinite;
    }

    .mid {
      //   top: 40%;
      //   left: 40%;
      //   width: 20%;
      //   height: 20%;
      @include border(40%, 20%);
      border-left-color: transparent;
      border-right-color: transparent;
      animation: spin 1s linear infinite;
    }
  }
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
@keyframes jitter {
  0% {
    transform: scale(1, 1);
  }
  25% {
    transform: scale(0.7, 0.7);
  }
  50% {
    transform: scale(1, 1);
  }
  75% {
    transform: scale(1.3, 1.3);
  }
  100% {
    transform: scale(1, 1);
  }
}
@keyframes fade-in-out {
  0% {
    opacity: 0.8;
  }
  25% {
    opacity: 0.2;
  }
  75% {
    opacity: 1;
  }
  100% {
    opacity: 0.8;
  }
}
</style>