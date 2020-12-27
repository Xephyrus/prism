<template>
  <div class="nav">
    <ul class="list">
      <li class="list-item" v-for="item in navList" :key="item.text">
        <div>{{item.text}}</div>
        <div>{{item.text}}</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ThreeD-Nav",
  data() {
    return {
      navList: [
        {
          href: "code",
          text: "Code"
        },
        {
          href: "/",
          text: "Home"
        },
        {
          href: "about",
          text: "About"
        },
        {
          href: "https://www.baidu.com",
          text: "Baidu"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.nav {
  ul {
    display: flex;

    li {
      position: relative;
      width: 150px;
      height: 50px;
      list-style: none;
      cursor: pointer;
      transform-style: preserve-3d;
      transition: all 0.5s;

      &:hover {
        transform: rotateX(90deg);
        div:first-child {
          transform: translateZ(25deg);
          background-color: #51938f;
          background-size: 5px 5px;
          background-position: 30px 30px;
          background-image: linear-gradient(
            45deg,
            #478480 25%,
            rgba(0, 0, 0, 0) 25%,
            rgba(0, 0, 0, 0) 75%,
            #478480 75%,
            #478480
          );
        }
      }
      div {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        line-height: 50px;
        text-align: center;
        font-size: 20px;
        font-weight: 700;
        color: #fff;

        &:first-child {
          background-color: #74adaa;
        }

        &:last-child {
          background-color: #51938f;
          background-size: 5px 5px;
          background-position: 30px 30px;
          background-image: linear-gradient(
            45deg,
            #478480 25%,
            rgba(0, 0, 0, 0) 25%,
            rgba(0, 0, 0, 0) 75%,
            #478480 75%,
            #478480
          );
          transform: translateY(25px) rotateX(-90deg);
        }
      }
    }
  }
}
</style>