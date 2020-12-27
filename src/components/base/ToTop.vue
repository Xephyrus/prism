<template>
  <div class="wrapper">
    <div class="toTop">
      <div class="inner">
        <div class="icon"></div>
        <div class="tooltip-wrapper">
          <div class="tooltip">
            <div class="text">
              <div class="text-title">扫码进入我的主页</div>
              <div class="text-intro">大爷来玩啊~</div>
            </div>
            <img class="qrcode" src="@/assets/img/qrcode.jpg" alt />
          </div>
        </div>
      </div>
    </div>
    <div v-show="top" class="toTop" @click="toTop">
      <div class="inner">
        <div class="icon"></div>
        <div class="toTop-text">返回顶部</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ToTop",
  data() {
    return {
      show: false,
      top: 0
    };
  },
  mounted() {
    document.addEventListener("scroll", this.onScroll);
  },
  methods: {
    onScroll() {
      this.top = window.scrollY;
    },
    toTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  },
  destroyed() {
    console.log('zero')
    document.removeEventListener("scroll", this.onScroll);
  },
   // 点击后拿到数据返回给下单地址
  beforeRouteLeave (to, from, next) {
    console.log(to)
    console.log(from)
    next()//一定不要忘记写
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  position: fixed;
  left: 50%;
  margin-left: 510px;
  margin-bottom: 20px;
  bottom: 0;
  .toTop {
    width: 44px;
    height: 44px;
    cursor: pointer;
    border-radius: 50%;
    word-break: break-all;
    // background-color: #f1f1f1;
    background-color: #fbfbfb;
    display: flex;
    align-items: center;
    justify-content: center;
    font: 14px/24px Arial, sans-serif;
    color: #222;
    text-align: center;
    position: relative;

    .icon {
      width: 24px;
      height: 24px;
      background-image: url("~@/assets/img/icon/totop.png");
      background-size: cover;
      background-repeat: no-repeat;
    }

    &-text {
      display: none;
      position: absolute;
      right: 56px;
      bottom: 4px;
      background-color: #fff;
      z-index: 303;
      box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);
      border-radius: 12px;
      width: 80px;
      height: 36px;
      line-height: 36px;
    }

    .tooltip-wrapper {
      display: none;
      position: absolute;
      right: 44px;
      padding-right: 12px;
      margin-bottom: -24px;
      bottom: 0;
      .tooltip {
        background-color: #fff;
        z-index: 303;
        box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);
        border-radius: 12px;
        padding: 16px;
        display: flex;
        justify-content: center;
        align-items: center;

        .text {
          margin-right: 20px;
          &-title {
            white-space: nowrap;
            font: 20px/30px Arial, sans-serif;
          }
          &-intro {
            color: #9195a3;
            text-align: left;
          }
        }

        .qrcode {
          margin: 0;
          padding: 0;
          width: 70px;
          height: 70px;
          object-fit: cover;
          display: block;
        }
      }
    }

    &:hover {
      background-color: #ffffff;
      box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.1);
      .icon {
        background-image: url("~@/assets/img/icon/totop-hover.png");
      }

      .toTop-text {
        display: block;
      }
    }

    &:first-child .icon {
      background-image: url("~@/assets/img/icon/qrcode.png");
    }

    &:first-child:hover {
      .tooltip-wrapper {
        display: block;
      }
      .icon {
        background-image: url("~@/assets/img/icon/qrcode-hover.png");
      }
    }
  }
}
</style>