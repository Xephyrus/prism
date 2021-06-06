// 转义html标签
// @params text: 要转义的文本
// by maosheng
export function HtmlEncode(text) {
    return text
        .replace(/&/g, "&")
        .replace(/"/g, '"')
        .replace(/</g, "<")
        .replace(/>/g, ">");
}

// HTML 标签转义
// @param {Array.<DOMString>} templateData 字符串类型的tokens
// @param {...} ..vals 表达式占位符的运算结果tokens
// by maosheng
export function saferHTML(templateData) {
    let s = templateData[0];
    for (let i = 1; i < arguments.length; i++) {
        var arg = String(arguments[i]);
        // Escape special characters in the substitution.
        s += arg
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;");
        // Don't escape special characters in the template.
        s += templateData[i];
    }
    return s;
}

// 加入收藏夹
// @params sURL: 网页地址 sTitle: 网页标题
// by maosheng
// export function addFavorite(sURL = location.href, sTitle = document.title) {
//     // console.log(location.href, document.title)
//     try {
//         window.external.addFavorite(sURL, sTitle);
//     } catch (e) {
//         try {
//             window.sidebar.addPanel(sTitle, sURL, "");
//         } catch (e) {
//             alert("加入收藏失败，请使用Ctrl+D进行添加");
//         }
//     }
// }

// // var aa = document.documentElement.outerHTML
// //     .match(
// //         /(url\(|src=|href=)[\"\']*([^\"\'\(\)\<\>\[\] ]+)[\"\'\)]*|(http:\/\/[\w\-\.]+[^\"\'\(\)\<\>\[\] ]+)/gi
// //     )
// //     .join("\r\n")
// //     .replace(/^(src=|href=|url\()[\"\']*|[\"\'\>\) ]*$/gim, "");

// // 动态加载脚本文件
// // @params src: JS地址, text: 代码, reload: 
// // by maosheng
// export function appendscript(src, text, reload, charset) {
//     var id = hash(src + text);
//     if (!reload && in_array(id, evalscripts)) return;
//     if (reload && $(id)) {
//       $(id).parentNode.removeChild($(id));
//     }

//     evalscripts.push(id);
//     var scriptNode = document.createElement("script");
//     scriptNode.type = "text/javascript";
//     scriptNode.id = id;
//     scriptNode.charset = charset
//       ? charset
//       : BROWSER.firefox
//       ? document.characterSet
//       : document.charset;
//     try {
//       if (src) {
//         scriptNode.src = src;
//         scriptNode.onloadDone = false;
//         scriptNode.onload = function() {
//           scriptNode.onloadDone = true;
//           JSLOADED[src] = 1;
//         };
//         scriptNode.onreadystatechange = function() {
//           if (
//             (scriptNode.readyState == "loaded" ||
//               scriptNode.readyState == "complete") &&
//             !scriptNode.onloadDone
//           ) {
//             scriptNode.onloadDone = true;
//             JSLOADED[src] = 1;
//           }
//         };
//       } else if (text) {
//         scriptNode.text = text;
//       }
//       document.getElementsByTagName("head")[0].appendChild(scriptNode);
//     } catch (e) {}
//   }

export function compressCss(s) {
    //压缩代码
    s = s.replace(/\/\*(.|\n)*?\*\//g, ""); //删除注释
    s = s.replace(/\s*([{}:;,])\s*/g, "$1");
    s = s.replace(/,[\s.#\d]*{/g, "{"); //容错处理
    s = s.replace(/;\s*;/g, ";"); //清除连续分号
    s = s.match(/^\s*(\S+(\s+\S+)*)\s*$/); //去掉首尾空白
    return s == null ? "" : s[1];
}

// 判断吗是否手机号码
// @params e: 电话号码
// by maosheng
export function isMobileNumber(e) {
    var i =
        "134,135,136,137,138,139,150,151,152,157,158,159,187,188,147,182,183,184,178",
        n = "130,131,132,155,156,185,186,145,176",
        a = "133,153,180,181,189,177,173,170",
        o = e || "",
        r = o.substring(0, 3),
        d = o.substring(0, 4),
        s = !!/^1\d{10}$/.test(o) &&
        (n.indexOf(r) >= 0 ?
            "联通" :
            a.indexOf(r) >= 0 ?
            "电信" :
            "1349" == d ?
            "电信" :
            i.indexOf(r) >= 0 ?
            "移动" :
            "未知");
    return s;
}

//功能：计算两个时间戳之间相差的日时分秒
//startTime  开始时间戳
//endTime 结束时间戳
//计算两个时间之间的时间差 多少天时分秒
export function intervalTime(startTime, endTime) {
    // var timestamp=new Date().getTime(); //计算当前时间戳
    var timestamp = (Date.parse(new Date())) / 1000; //计算当前时间戳 (毫秒级)
    var date1 = ""; //开始时间
    if (timestamp < startTime) {
        date1 = startTime;
    } else {
        date1 = timestamp; //开始时间
    }
    var date2 = endTime; //结束时间
    // var date3 = date2.getTime() - date1.getTime(); //时间差的毫秒数
    var date3 = (date2 - date1) * 1000; //时间差的毫秒数
    //计算出相差天数
    var days = Math.floor(date3 / (24 * 3600 * 1000));
    //计算出小时数

    var leave1 = date3 % (24 * 3600 * 1000); //计算天数后剩余的毫秒数
    var hours = Math.floor(leave1 / (3600 * 1000));
    //计算相差分钟数
    var leave2 = leave1 % (3600 * 1000); //计算小时数后剩余的毫秒数
    var minutes = Math.floor(leave2 / (60 * 1000));

    //计算相差秒数

    var leave3 = leave2 % (60 * 1000); //计算分钟数后剩余的毫秒数
    var seconds = Math.round(leave3 / 1000);
    const pad = n => n.toString().padStart(2, '0')
    console.log(pad(days * 24 + hours) + ":" + pad(minutes) + ":" + pad(seconds))
    return pad(days * 24 + hours) + ":" + pad(minutes) + ":" + pad(seconds)
}