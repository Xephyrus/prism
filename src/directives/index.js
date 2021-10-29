import copy from "./copy";
import longpress from "./longpress";
// 自定义指令
const directives = [copy, longpress];

export default {
  install(Vue) {
    directives.forEach((key) => {
      Vue.directive(key, directives[key]);
    });
  },
};
