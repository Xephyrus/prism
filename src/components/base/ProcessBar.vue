<template>
  <div class="wrap">
    <div class="process-bar" :style="{ width: percent + '%' }"></div>
  </div>
</template>

<script>
export default {
  name: "ProcessBar",
  props: {
    percent: {
      type: Number,
      default: 0,
    },
  },
};
</script>

<style lang="scss" scoped>
$blue: #56bcfe;
$light-blue: #84dbfb;

.wrap {
  width: 400px;
  .process-bar {
    width: 100%;
    height: 6px;
    background: linear-gradient(to bottom, $blue, $light-blue);
    border-radius: 3px;
  }
}
</style>
