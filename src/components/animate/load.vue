<template>
  <div class="loader-wrapper">
    <div class="loader">
      <div v-for="i in 6" :key="i" :style="{'--x': i}"></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.loader-wrapper {
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 99;
  // background-color: rgba(0, 0, 0, 0.3);
  background: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;

  .loader {
    display: flex;
    flex-direction: row;

    div {
      position: relative;
      width: 40px;
      height: 200px;
      margin: 20px;
      overflow: hidden;
      border-radius: 50px;
      background: linear-gradient(to bottom, rgba(0, 0, 0, 0.05), #edf1f4);
      border: 2px solid #edf1f4;
      box-shadow: 15px 15px 20px rgba(0, 0, 0, 0.1), -15px -15px 20px #ffffff,
        inset -5px -5px 5px rgba(255, 255, 255, 0.5),
        inset 5px 5px 5px rgba(0, 0, 0, 0.05);

      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 100;
        border-radius: 50px;
        box-shadow: 15px 15px 20px rgba(0, 0, 0, 0.1), -15px -15px 20px #ffffff,
          inset -5px -5px 5px rgba(255, 255, 255, 0.5),
          inset 5px 5px 5px rgba(0, 0, 0, 0.05);
      }

      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 2px;
        width: 36px;
        height: 36px;
        z-index: 100;
        border-radius: 50%;
        box-shadow: inset -5px -5px 5px rgba(0, 0, 0, 0.1),
          0 420px 0 400px #2196f3;
        animation: animate 2.5s ease-in-out infinite;
        animation-delay: calc(var(--x) * 0.3s);
      }
    }
  }
}

@keyframes animate {
  0% {
    transform: translateY(160px);
    filter: hue-rotate(0deg);
  }
  50% {
    transform: translateY(0px);
    filter: hue-rotate(180deg);
  }
  100% {
    transform: translateY(160px);
    filter: hue-rotate(360deg);
  }
}
</style>