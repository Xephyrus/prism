<!--
 * @Author: your name
 * @Date: 2021-07-27 19:45:28
 * @LastEditTime: 2021-10-25 16:41:30
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \prism\src\components\HlsPlayer.vue
-->
<template>
  <div class="hls-player">
    <video ref="videoRefsmall" :width="(16/9)*smallVideoHieght" :height="smallVideoHieght" controls></video>
  </div>
</template>

<script>
import Hls from "hls.js";
//   import WindowCom from '@/views/home/windows/windowCom'
//   import axios from 'axios'
//   import OlComminSetting from "@/components/OpenLayersHelper/OlCommonSetting";

export default {
  name: "deviceWindow",
  // components: {WindowCom},
  data() {
    return {
      hls: null,
      smallVideoHieght: 450
    };
  },
  props: {
    contentHeight: Number,
    cameraId: String
  },
  watch: {},
  computed: {},
  methods: {
    pauseVideo() {
      this.$refs.videoRefsmall.pause();
    },
    playVideo() {
      this.$refs.videoRefsmall.play();
    }
  },
  created() {},
  mounted() {
    this.hls = new Hls();
    this.hls.attachMedia(this.$refs.videoRefsmall);
    const source = ["localhost:8081/api/hls/videos/202012/15/378376812/,1080P_4000K,720P_4000K,480P_2000K,240P_1000K,_378376812.mp4.urlset/master.m3u8?validfrom=1632217109&validto=1632224309&ip=47.75.75.227&ipa=47.75.75.227&hdl=-1&hash=99ocapLeLn1DAy0mlrq5Y1p3MU8%3D"]
    this.hls.loadSource(source[0]);
    this.hls.on(Hls.Events.MANIFEST_PARSED, function() {
      this.$refs.videoRefsmall.pause();
    });
  },
  beforeDestroy() {
    this.hls.stopLoad();
    this.hls.destroy();
  }
};
</script>