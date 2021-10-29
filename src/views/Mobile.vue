<template>
  <div class="mobile">
    <div class="title">开始登录苹果帐号</div>
    <!-- <el-button @click="vibrate">点击震动</el-button> -->
    <div class="block">
      <span class="demonstration">默认 Hover 指示器触发</span>
      <el-carousel @change="handleChange" :autoplay="false" height="150px">
        <el-carousel-item v-for="item in 4" :key="item">
          <h3 class="small">
            <img src="" alt="">
          </h3>
        </el-carousel-item>
      </el-carousel>
      <div class="small-image">
        
      </div>
    </div>
    <div class="input-wrapper">
      <div ref="vertify" class="input-wrapper-content">
        <input
          v-for="i in 6"
          type="number"
          :key="i"
          v-model="number[i - 1]"
          :data-index="i"
          @input="handleInput"
          @focus="handleFocus"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      number: ["", "", "", "", "", ""],
      inputArr: [],
      imgList: []
    };
  },
  mounted() {
    this.inputArr = Array.from(
      this.$refs.vertify.querySelectorAll('input[type="number"]')
    );
  },

  methods: {
    vibrate() {
      if ("vibrate" in window.navigator) {
        window.navigator.vibrate(500); // 震动
        // window.navigator.vibrate([200, 100, 200]); // 震动200停100再震动200，和qq的消息震动一样
      } else {
        console.log("浏览器不支持震动");
      }
    },
    handleChange(index) {
      console.log(index);
    },
    handleInput({ target }) {
      if (!target.value) {
        target.value = "";
      }
      let index = target.dataset.index;
      if (target.value - 10 >= 0) {
        let num = target.value.toString(),
          length = num.length;
        this.$set(this.number, index - 1, num[length - 1]);
      }

      if (target.value.toString().length > 0) {
        let nextInput = this.inputArr[index];
        if (nextInput && !nextInput.value) {
          nextInput.focus();
        } else {
          target.blur();
        }
      }
    },
    handleFocus({ target }) {
      let { index } = target.dataset;
      // this.number[index - 1] = ''
      this.$set(this.number, index - 1, "");
    },
  },
};
</script>

<style lang="scss" scoped>
.mobile {
  .title {
    height: 100px;
    line-height: 100px;
    text-align: center;
    font-size: 16px;
  }

  .input-wrapper {
    padding: 0 16px;
    &-content {
      width: 100%;
      display: flex;
      justify-content: space-between;

      input::-webkit-outer-spin-button,
      input::-webkit-inner-spin-button {
        -webkit-appearance: none;
      }
      // input[type="number"] {
      //   -moz-appearance: textfield;
      // }

      input[type="number"] {
        font-family: DIN;
        border-width: 1px;
        background: none;
        width: 20px;
        height: 40px;
        color: #333;
        border-radius: 2px;
        font-size: 20px;
        padding: 0 10px;
        line-height: 20px;
        text-align: center;
        display: inline-block;
        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: textfield;
        // outline: none;
        &:focus {
          border-color: #1a85ff;
          outline: none; /*去掉默认input焦点边框*/
        }
      }
    }
  }
}

.el-carousel__item {
  text-align: center;
  h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

::v-deep .el-carousel__indicator--horizontal {
  display: none;
}
</style>
