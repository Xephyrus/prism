// 1.在components文件中新建base文件夹, 在创建index.js
import Vue from 'vue';

function changA(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
}

// 通过require.context获取目录下的所有组件
const components = require.context('.', false, /\.vue$/)

//components.keys()是components文件夹中所有一级的.vue文件路径
components.keys().forEach(fileName => {

    // 获取组件配置
    const config = components(fileName)

    // 剥去文件名开头的 `./` 和`.vue`结尾的扩展名
    const componentName = changA(fileName.replace(/^\.\//, '').replace(/\.\w+$/, ''))

    // 全局注册组件
    Vue.component(
        componentName.replace(/\//, '-'),
        // 如果这个组件选项是通过 `export default` 导出的，那么就会优先使用 `.default`，否则回退到使用模块的根。
        config.default || config)
})