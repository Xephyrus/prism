/*
 * @Author: your name
 * @Date: 2021-07-27 19:45:28
 * @LastEditTime: 2021-10-08 16:00:36
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \prism\src\assets\js\loadFille.js
 */
const loadFile = function(name) {
  // name为文件所在位置
  let xhr = new XMLHttpRequest(),
    okStatus = document.location.protocol === "file:" ? 0 : 200;
  xhr.open("GET", name, false);
  xhr.overrideMimeType("text/html;charset=utf-8"); //默认为utf-8
  xhr.send(null);
  return xhr.status === okStatus ? xhr.responseText : null;
};
export default loadFile;
