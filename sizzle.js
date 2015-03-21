/**
 * DOM selector
 *
 * @date 2015-03-21
 * @author samhou1988@gmail.com
 */

/**
 * 通过ID属性获取元素
 * getElementById效率更高
 *
 * @param  {string} query 查询元素的ID属性
 * @return {DOM NodeList}       获得匹配的元素DOM节点
 */
function byId(selector) {
    var idSelectorRegexp = /^#[a-zA-Z]+[a-zA-Z0-9_\-]*$/;

      // pure ID selector?
      if (idSelectorRegexp.test(selector)) {
        return document.getElementById(query.slice(1));
      } else {
        return document.querySelector(selector);
      }
}

/**
 * 通过class属性获取元素
 * IE9+ 使用getElementsByClassName
 *
 * @param  {string} query 查询元素的class属性
 * @return {DOM NodeList}       获得匹配的元素DOM节点
 */
function byClass(selector) {
    if (document.getElementsByClassName) {
        return document.getElementsByClassName(selector);
    } else {
        return document.querySelectorAll('.' + selector);
    }
}

/**
 * 通过元素标签获取元素
 * IE5.5使用getElementsByTagName
 *
 * @param  {string} query 查询元素的标签名称
 * @return {DOM NodeList}       获得匹配的元素DOM节点
 */
function byTagName(selector) {
    if (document.querySelectorAll) {
        return document.querySelectorAll(selector);
    } else {
        return document.getElementsByTagName(selector);
    }
}

/**
 * 通过元素属性获取元素
 *
 * @param  {string} query 查询元素的属性值
 * @return {DOM NodeList}       获得匹配的元素DOM节点
 */
function byAttribute(selector) {
    return document.querySelectorAll(selector);
}

/**
 * 通过元素伪类获取元素
 *
 * @param  {string} query 查询元素的伪类
 * @return {DOM NodeList}       获得匹配的元素DOM节点
 */
function byPseudoClass(selector) {
    return document.querySelectorAll(selector);
}

function children(selector) {
    // IE 5.5+
    // return document.getElementById(query).childNodes;
    // This will include comment and text nodes as well

    // IE 9+
    return document.getElementById(selector).chidlren;
}

// see a pattern
var $ = function (selector) {
    var selectorType = 'querySelectorAll';

    if (selector.indexOf('#') === 0) {
        selectorType = 'getElementById';
        selector = selector.substr(1, selector.length);
    }

    return document[selectorType](selector);
}

window.$ = $;