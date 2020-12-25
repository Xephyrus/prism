<template>
  <div id="app">
    <div id="nav">
      <div class="nav-list">
        <router-link to="/">Home</router-link>&nbsp;|
        <router-link to="/about">About</router-link>&nbsp;|
        <router-link to="/code">Code</router-link>
      </div>
    </div>
    <router-view style="margin-top: 100px" />
  </div>
</template>

<style lang="scss">
body {
  &::-webkit-scrollbar {
    display: none;
  }
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
}

#nav {
  z-index: 999;
  padding: 30px 0;
  background-image: linear-gradient(141deg, #fff 0%, #1fc8db 75%, #2cb5e8 100%);
  color: #2c3e50;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  font-size: 16px;
  a {
    font-size: 14px;
    font-weight: bold;

    &.router-link-exact-active {
      color: #f0400b;
    }
  }

  .nav-list {
    width: 980px;
    margin: 0 auto;
  }
}
</style>
