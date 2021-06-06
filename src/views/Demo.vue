<template>
  <div class="main">
    <div class="shopping">
      <div class="shopping-item">
        <img
          var="img"
          src="https://i5.walmartimages.com/asr/57f89337-45de-4cd4-9f05-e26a107b2644_1.5db5139ea852e09b168744041199fc59.jpeg?odnHeight=100&amp;odnWidth=100&amp;odnBg=FFFFFF"
        />
        <div var="title">Keurig K-Select Single Serve, K-Cup Pod Coffee Maker, Matte White</div>
        <i var="price">$99.00</i>
      </div>
    </div>
    <div v-text="html"></div>
    <div v-html="html"></div>
    <div class="instagram">
      <b>
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="heart"
          class="svg-inline--fa fa-heart fa-w-16"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"
          />
        </svg>
        <span class="tooltip">
          <i>
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="heart"
              class="svg-inline--fa fa-heart fa-w-16"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"
              />
            </svg>30
          </i>
        </span>
      </b>
    </div>
    <Pixiel></Pixiel>
    <hls-player></hls-player>
  </div>
</template>

<script>
import Pixiel from "@/components/Pixiel.vue";
import HlsPlayer from "@/components/HlsPlayer";
import {
  saferHTML,
  isMobileNumber,
  intervalTime
  // addFavorite
} from "@/util/tools";
export default {
  components: {
    Pixiel,
    HlsPlayer
  },
  data() {
    return {
      name: "",
      html: "",
      endTime: 1623084300
    };
  },
  methods: {},
  mounted() {
    let html = saferHTML`<div data-v-b759dfe8="" class="icon"></div>`;
    console.log(html);
    this.html = html;
    // addFavorite()
    console.log(isMobileNumber("17806243573")),
      setInterval(() => {
        intervalTime(Date.now() / 1000, this.endTime);
      }, 1000);
  }
};
</script>

<style lang="scss" scoped>
.main {
  width: 980px;
  margin: 0 auto;
  min-height: 300px;

  .shopping {
    .shopping-item {
      width: 300px;
      position: relative;
      background-color: #fff;
      height: 110px;
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
      border-radius: 7px;
      margin: 5px;
      box-sizing: border-box;
      padding-left: 110px;
      padding-right: 10px;
      font-family: Arial, sans-serif;

      div {
        line-height: 17px;
        font-size: 12px;
        padding-top: 10px;
        color: #017adb;
        font-weight: bold;
        cursor: pointer;
        max-height: 68px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      img {
        width: 90px;
        height: 90px;
        position: absolute;
        top: 10px;
        left: 10px;
        border-radius: 3px;
        overflow: hidden;
      }
      i {
        color: #ffc94a;
        font-style: normal;
        font-size: 14px;
        line-height: 32px;
      }
    }
  }

  .instagram {
    width: 200px;
    margin-top: 100px;
    height: 50px;
    position: relative;
    border: 1px solid #ccc;
    background-color: #fff;

    b {
      position: absolute;
      left: 50%;
      width: 50px;
      height: 50px;
      display: inline-block;
      top: 0;
      margin-left: -25px;

      &:hover .tooltip {
        display: block;
      }

      svg {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        height: 16px;
      }

      .tooltip {
        position: absolute;
        display: none;
        left: 50%;
        bottom: 60px;
        line-height: 30px;
        border-radius: 5px;
        padding: 0 5px;
        color: #fff;
        transform: translateX(-50%);
        background-color: #f44456;
        font-size: 12px;

        &:after {
          width: 0;
          height: 0;
          display: block;
          content: "";
          bottom: -8px;
          left: 50%;
          position: absolute;
          margin-left: -8px;
          border-left: 8px solid transparent;
          border-right: 8px solid transparent;
          border-top: 8px solid #f44456;
        }

        i {
          padding-left: 24px;
          position: relative;
          display: inline-block;
          font-style: normal;
          padding-right: 5px;

          svg {
            position: absolute;
            top: 50%;
            left: 12px;
            transform: translate(-50%, -50%);
            height: 16px;
          }
        }
      }
    }
  }
}
</style>