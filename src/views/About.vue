<!--
 * @Author: your name
 * @Date: 2021-07-27 19:45:28
 * @LastEditTime: 2021-10-20 20:22:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \prism\src\views\About.vue
-->
<template>
  <div class="about">
    <main>
      <!-- <div v-for="(value, key, index) in bmData" :key="key">
        {{ key }} {{ index }}

        <div v-for="item in value" :key="item.id" class="text" @click="click(item)">
          {{ item.id }} {{ item.username }}
        </div>
      </div> -->
      <button @click="handleClick">click</button>
      <ul>
        <li v-for="item in imageList" :key="item">
          <img :src="item" alt="" />
        </li>
      </ul>

      <h1>This is an about page</h1>
      <time-table></time-table>
      <div class="text">
        <p>
          这是一个前端项目， 使用vue + elementui + 自定义组件搭建， 以css 和
          scss文件定义公共样式， 使用Primsmjs美化页面的代码文本，使用element
          UI二次封装自己的组件。
        </p>
      </div>
      <logo name="xls"></logo>
      <logo name="doc" />
      <logo name="ppt"></logo>
    </main>
  </div>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      bmData: {
        selectOne: false,
        地基研究一所: [
          {
            id: 67,
            username: "刘炳凯",
          },
        ],
        珠海分公司: [
          {
            id: 289,
            username: "朱强",
          },
        ],
      },
      selected: "",
      imageList: [],
      index: 0,
      strings: [
        "莱昂纳多.jpg",
        "azu.jpg",
        "leonardo.jpg",
        "qrcode.jpg",
        "yanzu.jpg",
      ],
    };
  },
  created() {
    delete this.bmData.selectOne;
    console.log(this.bmData);
  },
  methods: {
    click(val) {
      console.log(val);
    },
    handleClick() {
      console.log(this.index);
      if (this.strings[this.index]) {
        this.imageList.push(
          require("@/assets/img/" + this.strings[this.index])
        );
      }

      this.index++;
    },
  },
};
</script>

<style lang="scss" scoped>
$primary-color: #333;
main {
  font-size: 16px;
  background: #f1f1f1;
  padding: 16px;
  min-height: 100vh;

  h1 {
    font-size: 2em;
    color: $primary-color;
    margin-bottom: 1em;
  }

  .text {
    margin-top: 3em;
    background: #ffffff;
    padding: 1em;
  }
}
</style>
