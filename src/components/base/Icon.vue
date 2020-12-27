<template>
  <div v-if="iconName" class="icon" :style="{width: size, height: size}">
    <img :src="url" alt />
  </div>
</template>

<script>
export default {
  name: "Icon",
  props: {
    size: {
      type: String,
      default: "20px"
    },
    iconName: String
  },
  computed: {
    url() {
      return require(`@/assets/img/icon/${this.iconName}.png`);
    }
  }
};
</script>

<style lang="scss" scoped>
.icon {
  display: inline-block;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>