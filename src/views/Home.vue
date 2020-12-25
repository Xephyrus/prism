<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <main ref="main">
      <template>
        <div v-for="(item, index) in codeList" :key="index + 1">
          <h2>{{ item.alias }}:</h2>
          <code-block :language="item.lang" :code="item.code"></code-block>
          <code-block
            v-if="index === 0"
            :language="'css'"
            :code="'p { color: red }'"
          ></code-block>
        </div>
      </template>

      <el-button type="primary" @click="changeTheme('')">Click</el-button>
      <card
        :curOption="themeName"
        :datalist="list"
        class="fixed-card"
        @on-select="onSelect"
      ></card>
    </main>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
// import 'prismjs'
import Card from '@/components/Card.vue'
import Prism from 'prismjs'
import 'prismjs/components/prism-python'
import CodeBlock from '@/components/CodeBlock.vue'
// import loadFile from '../assets/js/loadFille';
// const code = require('../../public/code/formula.py').default

export default {
  name: 'Home',
  components: {
    CodeBlock,
    Card,
  },
  data() {
    return {
      msg: 'hello',
      theme: null,
      themeName: '',
      codeList: [
        {
          code: '<pre><code class="language-css">p { color: red }</code></pre>',
          lang: 'html',
          alias: 'HTML',
        },
        {
          code: `#!python3
import math  # 导入数学模块 #
import cmath  # 导入复数模块 #


# 盛金公式 #
def shengjin(a, b, c, d):
    # 输入a, b, c, d四个参数 #
    A, B, C = b * b - 3 * a * c, b * c - 9 * a * d, c * c - 3 * b * d
    delta = B ** 2 - 4 * A * C  # 德尔塔判别式 #
    if A == 0 and B == 0:  # 盛金公式1 #
        e = - c / b
        x1 = e
        print('方程有三个相等的实根:', 'x1 = x2 = x3 =', x1)
    elif delta > 0:  # 盛金公式2 #
        j = cmath.sqrt(-1)
        Y1 = A * b + 3 * a * (-B + math.sqrt(delta)) / 2
        Y2 = A * b + 3 * a * (-B - math.sqrt(delta)) / 2
        if Y1 > 0:
            # 对Y1开三次根号,仅取实数根 #
            # if……else嵌套结构 #
            Y3 = math.pow(Y1, 1.0 / 3)
        else:
            Y1 = - Y1
            Y3 = - math.pow(Y1, 1.0 / 3)
        if Y2 > 0:  # 对Y2开三次根号,仅取实数根 #
            Y4 = math.pow(Y2, 1.0 / 3)
        else:
            Y2 = - Y2
            Y4 = - math.pow(Y2, 1.0 / 3)
        Y5, Y6 = Y3 + Y4, Y3 - Y4
        x1 = (-b - Y5) / (3 * a)
        x2 = (-b + 1 / 2 * Y5 + math.sqrt(3) / 2 * Y6 * j) / (3 * a)
        x3 = (-b + 1 / 2 * Y5 - math.sqrt(3) / 2 * Y6 * j) / (3 * a)
        print('方程有一个实根和一对共轭复根,其中x2与x3共轭,它们分别是:', ' x1 =', x1, ' x2 =', x2, ' x3 =', x3)
    elif delta == 0 and A != 0 and B != 0:  # 盛金公式3 #
        K = B / A
        x1, x3 = -b / a + K, -K / 2
        print('方程有三个实根,其中有两个根相等,它们分别是:', ' x1 =', x1, ' x2 = x3 =', x3)
    elif delta < 0:  # 盛金公式4 #
        T = (2 * A * b - 3 * a * B) / (2 * math.pow(A, 3.0 / 2))
        theta = math.acos(T)
        alpha = theta / 3
        x1 = (-b - 2 * math.sqrt(A) * math.cos(alpha)) / (3 * a)
        x2 = (-b + math.sqrt(A) * (math.cos(alpha) + math.sqrt(3) * math.sin(alpha))) / (3 * a)
        x3 = (-b + math.sqrt(A) * (math.cos(alpha) - math.sqrt(3) * math.sin(alpha))) / (3 * a)
        print('方程有三个不相等的实根,它们分别是:', ' x1 =', x1, ' x2 =', x2, ' x3 =', x3)


def dubic(A, B, C):
    delta = B ** 2 - 4 * A * C  # 德尔塔判别式 #
    # 求根公式 #
    if delta > 0:
        x1 = (-B + math.sqrt(delta)) / (2 * A)
        x2 = (-B - math.sqrt(delta)) / (2 * A)
        print('方程有两个不相等的实根,它们分别是:', ' x1 =', x1, ' x2 =', x2)
    elif delta == 0:
        x1 = -B / (2 * A)
        print('方程有两个相等的实根:', 'x1 = x2 =', x1)
    elif delta < 0:
        x1 = (-B + cmath.sqrt(delta)) / (2 * A)
        x2 = (-B - cmath.sqrt(delta)) / (2 * A)
        print('方程有一对共轭复根,它们分别是:', ' x1 =', x1, ' x2 =', x2)


def monica(a, b):
    x = -b / a
    print('方程有一个根:', ' x =', x)


def leap(a):
    if a % 4 == 0 and a % 100 != 0 or a % 400 == 0:
        print('今年是闰年')
    else:
        print('今年是平年')


def oe(t):
    if t % 2 == 0:
        print('even')
    else:
        print('odd')


def hellen(a, b, c):
    p = (a + b + c) / 2
    if p > a and p > b and p > c:
        s = math.sqrt(p * (p - a) * (p - b) * (p - c))
        print(s)
    else:
        print('请输入正确的边长')


if __name__ == "__main__":
  print('formula')
`,
          lang: 'python',
          alias: 'Python',
        },
        {
          code: `
// 求斐波那契数列的第 n 项(从第 0 项开始)
function fibonacci(n) {
  if (n <= 1) return 1
  let p = 1, q = 1, count = 1;
  while (count < n) {
    q += p
    p = q - p
    count++
  }
  return q
}
console.log(fibonacci(100))
          `,
          lang: 'javascript',
          alias: 'JS',
        },
        {
          code: 'const fibo = n => n <= 1 ? 1 : fibo(n-1) + fibo(n-2)',
          lang: 'javascript',
          alias: 'JS',
        },
        {
          code: `import math

# 求圆的面积
def getSquare(r):
    return math.pi * r ** 2

# 递归调用
def fibo(n):
    return 1 if (n <= 1) else fibo(n-1) + fibo(n-2)
    `,
          lang: 'python',
          alias: 'Python',
        },
        {
          code: `p { font-size: 16px; }`,
          lang: 'css',
          alias: 'CSS',
        },
      ],
      list: [
        {
          label: '默认',
          value: '',
        },
        {
          label: '神秘',
          value: 'coy',
        },
        {
          label: '暗黑',
          value: 'dark',
        },
        {
          label: '欧凯迪亚',
          value: 'okaidia',
        },
        {
          label: '时髦',
          value: 'funky',
        },
        {
          label: '日光灯',
          value: 'solarizedlight',
        },
        {
          label: '暮光',
          value: 'twilight',
        },
        {
          label: '明日',
          value: 'tomorrow',
        },
      ],
      apple:
        "\n\
                                      ,xNMM.\n\
                                    .OMMMMo\n\
                                    OMMM0,\n\
                           .;loddo:' loolloddol;.\n\
                         cKMMMMMMMMMMMMMMMMMMMMMM0\n\
                        .KMMMMMMMMMMMMMMMMMMMMMMWd.\n\
                        XMMMMMMMMMMMMMMMMMMMMMMX.\n\
                       ;MMMMMMMMMMMMMMMMMMMMMMM: \n\
                       :MMMMMMMMMMMMMMMMMMMMMMM:\n\
                       .MMMMMMMMMMMMMMMMMMMMMMMX.\n\
                        kMMMMMMMMMMMMMMMMMMMMMMMWd.\n\
                         .XMMMMMMMMMMMMMMMMMMMMMMMMk\n\
                          .XMMMMMMMMMMMMMMMMMMMMMMK.\n\
                            kMMMMMMMMMMMMMMMMMMMMd\n\
                             ;kMMMMMMMWXXMMMMMMMk.\n\
                               .cooc,.   .cooc,.\n\
",
    }
  },
  mounted() {
    this.getThemeName()
    // loadFile('../../public/code/formula.py')
    // this.theme = require(`prismjs/themes/prism-okaidia.css`)
    setTimeout(() => {
      Prism.highlightAll()
    }, 0)
    console.log('%c' + this.apple, 'color: green')
  },
  methods: {
    getThemeName() {
      let current = document.getElementById('theme')
      let theme = current.href
      console.log(theme)
      let themeList = this.list.map(item => item.value)
      console.log(themeList)
      let result = themeList.filter(a => a && theme.includes(a))
      console.log(result[0])
      this.themeName = result[0] || ''
    },
    changeTheme(theme) {
      this.themeName = theme
      let _theme = ''
      if (this.themeName) _theme = '-' + this.themeName
      // this.theme = require(`prismjs/themes/prism${_theme}.css`)
      let curTheme = document.getElementById('theme')
      curTheme.setAttribute('href', `/css/themes/prism${_theme}.css`)
      setTimeout(() => {
        Prism.highlightAll()
      }, 0)
    },
    onSelect(val) {
      this.changeTheme(val.value)
    },
    handleChange(file) {
      let reader = new FileReader()
      if (typeof FileReader === 'undefined') {
        this.$message({
          type: 'info',
          message: '您的浏览器不支持文件读取。',
        })
        return
      }
      reader.readAsText(file.raw, 'gb2312')
      var _this = this
      reader.onload = function (e) {
        _this.textInfo = e.target.result
      }
    },
  },
}
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

  .fixed-card {
    position: fixed;
    left: 50%;
    top: 50%;
    margin-left: 510px;
    transform: translateY(-50%);
  }
}
</style>
