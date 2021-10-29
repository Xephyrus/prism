<template>
  <div class="mark">
    <div class="h5">
      <div class="h5-left"></div>
      <div class="h5-right"></div>
      <div class="right-shadow">5</div>
      <div class="left-shadow">5</div>
    </div>
    <br />
    <div class="css3">
      <div class="css3-left"></div>
      <div class="css3-right"></div>
      <div class="right-shadow">3</div>
      <div class="left-shadow">3</div>
    </div>
    <br />
    <div class="bmw">
      <div class="quater"></div>
      <div class="quater"></div>
      <div class="quater"></div>
      <div class="quater"></div>
    </div>
    <br />
    <div class="benz">
      <div class="third"></div>
      <div class="third"></div>
      <div class="third"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Mark',
  methods: {
    onMouseMove(event) {
      console.log(event)
    }
  },
}
</script>

<style lang="scss" scoped>
$h5: #e1480f;
$h5-shadow: #ea640f;
$css3: #274ee4;
$css3-grey: #ebebeb;
$css3-shadow: #2b64f1;
$bmw-blue: #0266b1;
$bmw-grey: #6f6f6f;

%pseudo-common {
  user-select: none;
  content: '';
  display: block;
  position: absolute;
  width: 0;
  height: 0;
}

%mark-common {
  width: 100px;
  height: 100px;
  position: relative;
}

%five {
  user-select: none;
  width: 32px;
  height: 72px;
  position: absolute;
  font-family: Helvetica, sans-serif;
  top: 10%;
  font-size: 72px;
  line-height: 80px;
}
.mark {
  .h5 {
    width: 100px;
    height: 100px;
    position: relative;

    .right-shadow {
      @extend %five;
      left: 50%;
      color: #fff;
      background: $h5-shadow;
      text-indent: -0.25em;
      &::before {
        @extend %pseudo-common;
        left: 82%;
        border-left: 6px solid transparent;
        border-right: 6px solid transparent;
        border-top: 72px solid $h5-shadow;
      }
      &::after {
        @extend %pseudo-common;
        top: 92%;
        left: 0;
        border-top: 7px solid transparent;
        border-left: 32px solid $h5-shadow;
        border-bottom: 7px solid transparent;
      }
    }

    .left-shadow {
      @extend %five;
      color: #f1f1f1;
      overflow: hidden;
      right: 50%;
      text-indent: 0.2em;
    }

    &-right {
      width: 40px;
      height: 90px;
      background: $h5;
      position: absolute;
      left: 50%;
      top: 0;
      &::before {
        @extend %pseudo-common;
        left: 82%;
        border-left: 8px solid transparent;
        border-right: 8px solid transparent;
        border-top: 90px solid $h5;
      }
      &::after {
        @extend %pseudo-common;
        top: 89%;
        left: 0;
        border-top: 10px solid transparent;
        border-left: 40px solid $h5;
        border-bottom: 10px solid transparent;
      }
    }

    &-left {
      width: 40px;
      height: 90px;
      background: $h5;
      position: absolute;
      right: 50%;
      top: 0;
      &::before {
        @extend %pseudo-common;
        right: 80%;
        border-left: 8px solid transparent;
        border-right: 8px solid transparent;
        border-top: 90px solid $h5;
      }
      &::after {
        @extend %pseudo-common;
        top: 89%;
        right: 0;
        border-top: 10px solid transparent;
        border-right: 40px solid $h5;
        border-bottom: 10px solid transparent;
      }
    }
  }
  .css3 {
    width: 100px;
    height: 100px;
    position: relative;

    .right-shadow {
      @extend %five;
      left: 50%;
      color: #fff;
      background: $css3-shadow;
      text-indent: -0.25em;
      &::before {
        @extend %pseudo-common;
        left: 82%;
        border-left: 6px solid transparent;
        border-right: 6px solid transparent;
        border-top: 72px solid $css3-shadow;
      }
      &::after {
        @extend %pseudo-common;
        top: 92%;
        left: 0;
        border-top: 7px solid transparent;
        border-left: 32px solid $css3-shadow;
        border-bottom: 7px solid transparent;
      }
    }

    .left-shadow {
      @extend %five;
      color: $css3-grey;
      overflow: hidden;
      right: 50%;
      text-indent: 0.2em;
    }

    &-right {
      width: 40px;
      height: 90px;
      background: $css3;
      position: absolute;
      left: 50%;
      top: 0;
      &::before {
        @extend %pseudo-common;
        left: 82%;
        border-left: 8px solid transparent;
        border-right: 8px solid transparent;
        border-top: 90px solid $css3;
      }
      &::after {
        @extend %pseudo-common;
        top: 89%;
        left: 0;
        border-top: 10px solid transparent;
        border-left: 40px solid $css3;
        border-bottom: 10px solid transparent;
      }
    }

    &-left {
      width: 40px;
      height: 90px;
      background: $css3;
      position: absolute;
      right: 50%;
      top: 0;
      &::before {
        @extend %pseudo-common;
        right: 80%;
        border-left: 8px solid transparent;
        border-right: 8px solid transparent;
        border-top: 90px solid $css3;
      }
      &::after {
        @extend %pseudo-common;
        top: 89%;
        right: 0;
        border-top: 10px solid transparent;
        border-right: 40px solid $css3;
        border-bottom: 10px solid transparent;
      }
    }
  }

  .bmw {
    @extend %mark-common;
    border-radius: 50%;
    // border: 1px solid #333;
    .quater {
      position: absolute;
      width: 50%;
      height: 50%;

      &:nth-child(odd) {
        background-color: $bmw-blue;
        z-index: 2;
      }

      &:nth-child(1) {
        left: 0;
        top: 0;
        border-radius: 50px 0 0 0;
      }
      &:nth-child(2) {
        left: 50%;
        top: 0;
        border-radius: 0 50px 0 0;
        border: 3px solid $bmw-grey;
        border-left: none;
        border-bottom: none;
        margin-left: -3px;
      }
      &:nth-child(3) {
        left: 50%;
        top: 50%;
        border-radius: 0 0 50px 0;
      }
      &:nth-child(4) {
        left: 0;
        top: 50%;
        border-radius: 0 0 0 50px;
        border: 3px solid $bmw-grey;
        border-right: none;
        margin-top: -3px;
        border-top: none;
      }
    }
  }

  .benz {
    @extend %mark-common;
    border-radius: 50%;
    border: 1px solid #333;
    
  }
}
</style>