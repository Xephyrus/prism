<template>
  <div id="preloader" v-show="active">
    <div id="loader"></div>
  </div>
</template>

<script>
export default {
  name: "Loader",
  props: {
    active: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
#preloader {
  width: 100vw;
  height: 100vh;
  background: rgba(34, 34, 34, 0.9);
  left: 0;
  top: 0;
  position: fixed;
  z-index: 1000;

  #loader {
    display: block;
    position: relative;
    left: 50%;
    top: 50%;
    width: 150px;
    height: 150px;
    margin: -75px 0 0 -75px;
    border-radius: 50%;
    border: 3px solid transparent;
    border-top-color: #9378db;
    animation: rotate 2s linear infinite;
  }

  #loader::before {
    content: "";
    position: absolute;
    left: 5px;
    top: 5px;
    right: 5px;
    bottom: 5px;
    border-radius: 50%;
    border: 3px solid transparent;
    border-top-color: #ba55da;
    animation: rotate 3s linear infinite;
  }

  #loader::after {
    content: "";
    position: absolute;
    left: 15px;
    top: 15px;
    right: 15px;
    bottom: 15px;
    border-radius: 50%;
    border: 3px solid transparent;
    border-top-color: #ff00ff;
    animation: rotate 1.5s linear infinite;
  }
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>