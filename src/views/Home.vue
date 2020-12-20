<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <main ref="main">
      <code-block :language="'html'" :code="content"></code-block>
      <h2>JS:</h2>
      <pre class="language-javascript"><code class="language-javascript">
const fibo = n => n &lt;= 1 ? 1 : fibo(n-1) + fibo(n-2)
      </code></pre>

      <h2>Python:</h2>
      <pre><code class="language-python">
import math

def getSquare(r):
    return math.pi * r ** 2
      </code></pre>

      <pre>
        <code class="language-html">
&lt;p&gt;
  Hello World!
&lt;/p&gt;
        </code>
      </pre>

      <pre @click.stop="handleCopy"><code class="language-css">p { color: red }</code></pre>
    </main>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
// import 'prismjs'
// import 'prismjs/themes/prism-okaidia.css'
import Prism from "prismjs";
import "prismjs/components/prism-python";
import CodeBlock from "@/components/CodeBlock.vue";

export default {
  name: "Home",
  components: {
    CodeBlock
  },
  data() {
    return {
      msg: "hello",
      content: `<pre><code class="language-css">p { color: red }</code></pre>`
    };
  },
  mounted() {
    setTimeout(() => {
      Prism.highlightAll();
    }, 0);
  },
  methods: {
    handleCopy(event) {
      console.log(event.target.innerText);
    }
  }
};
</script>

<style lang="scss" scoped>
main {
  width: 980px;
  margin: 0 auto;
  font-size: 16px;
  margin-top: 81px;

  h2 {
    line-height: 1.85;
  }
}
</style>
