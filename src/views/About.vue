<template>
  <div class="about">
    <main>
      <h1>This is an about page</h1>
      <time-table></time-table>
      <div class="text">
        <p>这是一个前端项目， 使用vue + elementui + 自定义组件搭建， 以css 和 scss文件定义公共样式， 使用Primsmjs美化页面的代码文本，使用element UI二次封装自己的组件。</p>
      </div>
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

  .text {
    margin-top: 3em;
    background: #ffffff;
    padding: 1em;
  }
}
</style>