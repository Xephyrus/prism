
// 为元素添加on方法

Element.prototype.on = Element.prototype.addEventListener;

NodeList.prototype.on = function (event, fn) {
    []['forEach'].call(this, function (el) {
        el.on(event, fn);
    });
    return this;
};