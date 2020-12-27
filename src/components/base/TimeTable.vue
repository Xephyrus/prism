<template>
  <div class="wrapper">
    <div class="display">
      <div class="time">{{time}}</div>
    </div>

    <span></span>
    <span></span>
  </div>
</template>

<script>
export default {
  name: "TimeTable",
  data() {
    return {
      time: "12:00:00 PM"
    };
  },
  methods: {
    now() {
      let date = new Date(),
        [h, m, s] = [date.getHours(), date.getMinutes(), date.getSeconds()];
      if (h > 12) h -= 12;
      // ES6语法糖, padStart字符串填充
      this.time =
        [h, m, s].map(item => item.toString().padStart(2, "0")).join(":") +
        (h > 12 ? " PM" : " AM");
    //   console.log(this.time);
    }
  },
  mounted() {
    setInterval(() => {
      this.now();
    }, 200);
  }
};
</script>

<style lang="scss" scoped>
.wrapper {
  height: 100px;
  width: 360px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #14ffe9, #ffeb3b, #ff00e0);
  cursor: default;
  animation: animate 1.5s linear infinite;

  .display {
    height: 85px;
    width: 345px;
    background: #1b1b1b;
    text-align: center;
    z-index: 999;
    border-radius: 6px;
    cursor: pointer;

    .time {
      line-height: 85px;
      color: #fff;
      font-size: 50px;
      font-weight: 600;
      letter-spacing: 1px;
      background: linear-gradient(135deg, #14ffe9, #ffeb3b, #ff00e0);
      background-clip: text;
      -webkit-text-fill-color: transparent;
      animation: animate 1.5s linear infinite;
    }
  }

  .display,
  span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  span {
    display: inline-block;
    height: 100%;
    width: 100%;
    background: inherit;
    border-radius: 10px;

    &:first-child {
      filter: blur(10px);
    }
    &:last-child {
      filter: blur(20px);
    }
  }
}

@keyframes animate {
  100% {
    filter: hue-rotate(360deg);
  }
}
</style>