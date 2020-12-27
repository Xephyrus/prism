<template>
  <div>
    <main>
      <!-- <rainbow></rainbow> -->
      <scanning style="margin-top: -200px; left: 50%; top: 200px; margin-left: -710px;"></scanning>
      <div class="operation">
        <el-select v-model="value" @change="onSelect" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            clearable
          ></el-option>
        </el-select>
        <el-radio-group class="indent" v-model="indent">
          <el-radio-button :label="'    '">4</el-radio-button>
          <el-radio-button :label="'  '">2</el-radio-button>
        </el-radio-group>
      </div>

      <textarea
        placeholder="试着写下你的代码"
        v-model="content"
        name="text"
        ref="textarea"
        id="text"
        cols="30"
        rows="10"
        class="scroll"
        @input="onInput"
        @keydown="onKeyDown"
      ></textarea>
      
      <code-block class="scroll" :language="value" :code="content"></code-block>
    </main>
  </div>
</template>

<script>
import Prism from "prismjs";
import CodeBlock from "@/components/CodeBlock.vue";
// import Rainbow from "@/components/specials/Rainbow.vue";
import Scanning from "@/components/specials/Scanning.vue";

export default {
  name: "Code",
  components: {
    CodeBlock,
    // Rainbow,
    Scanning
  },
  data() {
    return {
      indent: "    ",
      content: "",
      value: "bash",
      options: require("@/assets/data/language.min.json"),
      params: {
        lang: "",
        code: ""
      },
      language: null
    };
  },
  methods: {
    onInput() {
      setTimeout(() => {
        Prism.highlightAll();
      }, 0);
    },
    onSelect() {
      this.language = require(`prismjs/components/prism-${this.value}.js`);
      setTimeout(() => {
        Prism.highlightAll();
      }, 0);
    },
    onKeyDown(e) {
      let textarea = this.$refs.textarea;
      // console.log(e.keyCode)
      if (e.keyCode == 9) {
        e.preventDefault();
        var indent = this.indent;
        var start = textarea.selectionStart;
        var end = textarea.selectionEnd;
        var selected = window.getSelection().toString();
        selected = indent + selected.replace(/\n/g, "\n" + indent);
        textarea.value =
          textarea.value.substring(0, start) +
          selected +
          textarea.value.substring(end);
        textarea.setSelectionRange(
          start + indent.length,
          start + selected.length
        );
      }
    }
  },
  mounted() {
    this.onSelect();
  }
};
</script>

<style lang="scss" scoped>
main {
  font-size: 16px;
  font-family: Helvetica, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu,
    Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

  .operation {
    display: flex;
    justify-content: space-between;

    .indent {
      position: relative;

      &::before {
        position: absolute;
        display: block;
        height: 40px;
        content: "tab键缩进:";
        left: -80px;
        top: 0;
        font-size: 16px;
        line-height: 40px;
        text-align: right;
      }
    }
  }

  textarea[name="text"] {
    margin-top: 1.5em;
    width: calc(100% - 1em);
    font-size: 16px;
    padding: 0.5em;
    white-space: pre;
    resize: none; /* 禁止拉伸 */
  }
}
</style>