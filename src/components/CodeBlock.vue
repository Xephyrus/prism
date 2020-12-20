<template>
  <pre><code :class="lang" v-text="code">

    </code></pre>
</template>

<script>

export default {
  name: "CodeBlock",
  props: {
    code: String,
    language: String
  },
  data() {
    return {
      n: 1
    };
  },
  computed: {
    lang() {
      return "language-" + this.language;
    }
  }
};
</script>

<style>
</style>