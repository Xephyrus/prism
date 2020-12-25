<template>
  <div>
    <main>
      <el-select v-model="value" @change="onSelect" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
          clearable
        >
        </el-option>
      </el-select>
      <textarea
        placeholder="试着写下你的代码"
        v-model="content"
        name="text"
        ref="textarea"
        id="text"
        cols="30"
        rows="10"
        @input="onInput"
        @keydown="onKeyDown"
      ></textarea>
      <code-block :language="value" :code="content"></code-block>
    </main>
  </div>
</template>

<script>
import Prism from 'prismjs'
import CodeBlock from '@/components/CodeBlock.vue'

export default {
  name: 'Code',
  components: {
    CodeBlock,
  },
  data() {
    return {
      indent: '    ',
      content: '',
      value: 'c',
      options: require('@/assets/data/language.min.json'),
      params: {
        lang: '',
        code: '',
      },
      language: null,
    }
  },
  methods: {
    onInput() {
      setTimeout(() => {
        Prism.highlightAll()
      }, 0)
    },
    onSelect() {
      console.log(this.value)
      this.language = require(`prismjs/components/prism-${this.value}.js`)
      setTimeout(() => {
        Prism.highlightAll()
      }, 0)
    },
    onKeyDown(e) {
      let textarea = this.$refs.textarea
      // console.log(e.keyCode)
      if (e.keyCode == 9) {
        e.preventDefault()
        var indent = this.indent
        var start = textarea.selectionStart
        var end = textarea.selectionEnd
        var selected = window.getSelection().toString()
        selected = indent + selected.replace(/\n/g, '\n' + indent)
        textarea.value =
          textarea.value.substring(0, start) +
          selected +
          textarea.value.substring(end)
        textarea.setSelectionRange(
          start + indent.length,
          start + selected.length
        )
      }
    },
  },
  mounted() {
    this.onSelect()
  },
}
</script>

<style lang="scss" scoped>
main {
  width: 980px;
  margin: 0 auto;
  font-size: 16px;
  font-family: Helvetica, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
    Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

  textarea[name='text'] {
    margin-top: 1.5em;
    width: calc(100% - 1em);
    font-size: 16px;
    padding: 0.5em;
    white-space: pre;
  }
}
</style>