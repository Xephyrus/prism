<template>
  <div class="custom-video_container">
    <!--video-->
    <video class="custom-video_video" ref="custom-video">
      <source type="video/mp4" />
      <p>设备不支持</p>
    </video>
    <!--播放或者暂停按钮-->
    <span class="custom-video_play custom-video_play-pause iconfont icon-zanting"></span>
    <!-- 控制区域背景 -->
    <div class="custom-video_control">
      <!-- 视频进度条 -->
      <div class="custom-video_control-bg">
        <div class="custom-video_control-bg-outside" ref="custom-video_control-bg-outside">
          <span class="custom-video_control-bg-inside" ref="custom-video_control-bg-inside"></span>
          <span
            class="custom-video_control-bg-inside-point"
            ref="custom-video_control-bg-inside-point"
          ></span>
        </div>
      </div>
      <!-- 声音 -->
      <div class="custom-video_control-voice">
        <span class="custom-video_control-voice-play iconfont icon-shengyin"></span>
        <div class="custom-video_control-voice-bg">
          <div class="custom-video_control-voice-bg-outside">
            <span class="custom-video_control-voice-bg-inside"></span>
            <span class="custom-video_control-voice-bg-point"></span>
          </div>
        </div>
      </div>
      <!-- 时间 -->
      <div class="custom-video_control-time">
        <span>"00:00"</span>/
        <span>"00:00"</span>
      </div>
      <!-- 全屏缩放 -->
      <span class="custom-video_control-full iconfont icon-quanping"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Video",
  data() {
    return {
      videoState: {
        play: false, //播放状态
        playState: false // 记录播放状态
      },
      duration: 0, // 视频总时长
      currentTime: 0, // 视频当前播放时长
      videoDom: null // video
    };
  },

  mounted() {
    // 初始化相关元数据
    this.videoDom = this.$refs["custom-video"];
    this.initMedaData();
  },
  methods: {
    initMedaData() {
      // 初始化video相关事件
      this.videoDom.addEventListener("click", () => {
        // 点击视频区域可以进行播放或者暂停
        if (this.videoDom.paused || this.videoDom.ended) {
          if (this.videoDom.ended) {
            // 如果视频结束，currentTime初始化为0
            this.videoDom.currentTime = 0;
          }
          this.play("btn"); //调用下面play的方法
        } else {
          this.pause("btn"); //调用下面pause的方法
        }
      });
    },
    play(flag) {
      // 播放按钮事件
      if (flag) this.videoState.playState = true;
      this.videoState.play = true;
      this.videoDom.play();
    },
    pause(flag) {
      // 暂停按钮事件
      if (flag) this.videoState.playState = false;
      this.videoDom.pause();
      this.videoState.play = false;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>