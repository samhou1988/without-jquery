/**
 * DOM 操作
 *
 * @date 2015-03-21
 * @author samhou1988@gmail.com
 */

/**
 * 创建DOM元素
 *
 * @param  {string} element 元素名称
 * @return {DOM NodeList}         返回生成的DOM节点
 */
function createElement(element) {
    return document.createElement(element);
}

/**
 * 在选择的元素后增加节点
 *
 * @param  {string} oldElement 指定的同胞节点
 * @param  {string} newElement  新插入的元素
 * @return {undefined}        无返回结果
 */
function after(oldElement, newElement) {
    document.getElementById(oldElement)
        .insertAdjacentHTML('afterend', createElement(newElement));
}

/**
 * 在选择的元素后增加节点
 *
 * @param  {string} oldElement 指定的同胞节点
 * @param  {string} newElement  新插入的元素
 * @return {undefined}        无返回结果
 */
function before(oldElement, newElement) {
    document.getElementById(oldElement)
        .insertAdjacentHTML('beforebegin', createElement(newElement));
}

function prepend() {
    // document.getElementById('parent')
    // .insertBefore(document.getElementById('orphan'), document.getElementById('c1'));
    document.getElementById('parent')
        .insertAdjacentHTML('afterbegin', createElement(newElement));
}

function append(parent, newElement) {
    // document.getElementById('parent')
    // .appendChild(document.getElementById('orphan'));
    document.getElementById('parent')
        .insertAdjacentHTML('beforeend', createElement(newElement));
}

function remove(element) {
    document.getElementById(element).parentNode
        .removeChild(document.getElementById(element));
}

function addClass(element, className) {

    // IE 9+
    // document.getElementById(element).classList.add(className);

    document.getElementById(element).className += className;
}

function removeClass(element, className) {

    // IE 9+
    // document.getElementById(element).classList.remove(className);

    var reg = new RegExp('(^| )' + className + '( |$)');
    document.getElementById(element).className =
    document.getElementById(element).className.replace(reg, '');
}

function attr(element, attr, value) {

    // IE 5.5
    document.getElementById(element).setAttribute(attr, value);
}

function removeAttr(element, attr) {
    // IE 5.5+
    document.getElementById(element).removeAttribute(attr);
}

function text(element, text) {
    // IE 5.5+
    document.getElementById(element).innerHTML = text;

    // IE 5.5+ but NOT Firefox
    document.getElementById(element).innerText = text;

    // IE 9+
    document.getElementById(element).textContent = text;
}

function css(element, key, value) {
    document.getElementById(element).style[key] = value;
}