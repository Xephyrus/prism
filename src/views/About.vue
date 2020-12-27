<template>
  <div class="about">
    <main>
      <h1>This is an about page</h1>
      <time-table></time-table>
    </main>
  </div>
</template>

<script>
export default {
  name: "About"
};
</script>

<style lang="scss" scoped>
main {
  font-size: 16px;
  background: #000;
  padding: 16px;
  min-height: 100vh;

  h1 {
    font-size: 2em;
    color: #fff;
    margin-bottom: 1em;
  }
}
</style>