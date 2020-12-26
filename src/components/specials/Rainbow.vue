<template>
  <div class="rainbow" :style="{boxShadow: boxShadow}"></div>
</template>

<script>
export default {
  name: "Raibow", // 特效-彩虹
  computed: {
    boxShadow() {
      let colors = [
        "red",
        "orange",
        "yellow",
        "lime",
        "aqua",
        "blue",
        "violet"
      ];
      let style = "";
      colors.forEach((item, index) => {
        style += `0 0 0 ${(index + 1) * 5}px inset ${item}${
          index === colors.length - 1 ? "" : ", "
        }`;
      });
      return style;
    }
  },
  mounted() {
    console.log(this.boxShadow);
  }
};
</script>

<style lang="scss" scoped>
.rainbow {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  /* box-shadow: 0 0 0 5px inset red, 0 0 0 10px inset orange,
    0 0 0 15px inset yellow, 0 0 0 20px inset lime, 0 0 0 25px inset aqua,
    0 0 0 30px inset blue, 0 0 0 35px inset purple; */
  clip-path: polygon(0 0, 100% 0, 100% 50%, 0 50%);
}
</style>