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
    const source = ["https://p-events-delivery.akamaized.net/2010ayctcrodak763xivpxn4htcuhco9/m3u8/vod_index-2MxnV7vcNFJoAHxqBcV9CU3w3JsXVVgh.m3u8", "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8"]
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