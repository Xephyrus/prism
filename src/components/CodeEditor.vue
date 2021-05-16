<template>
  <prism-editor
    class="my-editor height-300"
    v-model="codeCopy"
    :highlight="highlighter"
    :line-numbers="lineNumbers"
  ></prism-editor>
</template>

<script>
import { PrismEditor } from 'vue-prism-editor'
import 'vue-prism-editor/dist/prismeditor.min.css' // import the styles somewhere

// import highlighting library (you can use any library you want just return html string)
import { highlight, languages } from 'prismjs/components/prism-core'
import 'prismjs/components/prism-clike'
import 'prismjs/components/prism-javascript'
// import 'prismjs/themes/prism-tomorrow.css' // import syntax highlighting styles

export default {
  props: {
    code: {
      type: String,
      default: 'console.log("Hello World")'
    }
  },
  components: {
    PrismEditor
  },
  data() {
    return {
      lineNumbers: true, // true为编辑模式， false只展示不可编辑
      codeCopy: this.code
    }
  },
  methods: {
    highlighter(code) {
      return highlight(code, languages.js) // returns html
    }
  },
  watch: {
    codeCopy(newVal) {
      this.$emit('change', newVal)
    }
  }
}
</script>

<style lang="scss">
/* required class */
.my-editor {
  background: #2d2d2d;
  color: #ccc;
  font-family: Fira code, Fira Mono, Consolas, Menlo, Courier, monospace;
  font-size: 14px;
  line-height: 1.5;
  padding: 5px;
}

/* optional */
.prism-editor__textarea:focus {
  outline: none;
}

.prism-editor-wrapper .prism-editor__line-number {
  padding: 0 8px;
  border-right: 1px solid #999;
}
</style>