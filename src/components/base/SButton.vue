<template>
  <div class="button">
    <button class="s-button">
      <slot />
    </button>
  </div>
</template>

<script>
export default {
  name: 'SButton'
};
</script>

<style lang="scss" scoped>
.button {
  display: inline-block;
  .s-button {
    outline: none;
    border: none;
    color: white;
    padding: 0.3em 1em;
    border-radius: 0.2em;
    cursor: pointer;
    background: linear-gradient(#3de5fb, #26acbd);
    text-shadow: 0 5px 5px grey;
    box-shadow: 0 5px 5px #068494, 0 5px 5px grey;
    &:active {
      background: linear-gradient(#3de5fb, #26acbd);
      box-shadow: 0 5px 5px #068494, 0 5px 5px grey;
      transform: translate(0, 0.05em);
    }
  }
}
</style>