/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css"
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
(module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body {\r\n    background-color: #fff8f5;\r\n    /* Warm Cream */\r\n    background-image: url('https://www.transparenttextures.com/patterns/natural-paper.png');\r\n    background-attachment: fixed;\r\n}\r\n\r\n.gold-line {\r\n    height: 1px;\r\n    background: linear-gradient(90deg, transparent, #A0522D, transparent);\r\n    position: relative;\r\n}\r\n\r\n.gold-diamond::after {\r\n    content: \"◆\";\r\n    position: absolute;\r\n    left: 50%;\r\n    top: 50%;\r\n    transform: translate(-50%, -50%);\r\n    color: #A0522D;\r\n    background: #fff8f5;\r\n    padding: 0 10px;\r\n    font-size: 12px;\r\n}\r\n\r\n.menu-card {\r\n    border-bottom: 1px solid #A0522D;\r\n    transition: all 0.3s ease;\r\n}\r\n\r\n.menu-card:hover {\r\n    background-color: rgba(160, 82, 45, 0.05);\r\n}\r\n\r\n.dotted-leader {\r\n    border-bottom: 2px dotted #debfc2;\r\n    flex-grow: 1;\r\n    margin: 0 10px 5px 10px;\r\n}\r\n\r\n.category-badge {\r\n    font-family: 'Montserrat', sans-serif;\r\n    letter-spacing: 0.1em;\r\n    text-transform: uppercase;\r\n    font-size: 10px;\r\n    padding: 2px 8px;\r\n    border: 1px solid #A0522D;\r\n    color: #A0522D;\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurantproject/./src/styles.css?./node_modules/css-loader/dist/cjs.js\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/api.js"
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
(module) {

eval("{\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurantproject/./node_modules/css-loader/dist/runtime/api.js?\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js"
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
(module) {

eval("{\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurantproject/./node_modules/css-loader/dist/runtime/noSourceMaps.js?\n}");

/***/ },

/***/ "./src/styles.css"
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurantproject/./src/styles.css?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
(module) {

eval("{\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurantproject/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js"
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
(module) {

eval("{\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurantproject/./node_modules/style-loader/dist/runtime/insertBySelector.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js"
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurantproject/./node_modules/style-loader/dist/runtime/insertStyleElement.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurantproject/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js"
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurantproject/./node_modules/style-loader/dist/runtime/styleDomAPI.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js"
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurantproject/./node_modules/style-loader/dist/runtime/styleTagTransform.js?\n}");

/***/ },

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _javascript_handleMainPage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./javascript/handleMainPage.js */ \"./src/javascript/handleMainPage.js\");\n/* harmony import */ var _javascript_aboutPage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./javascript/aboutPage.js */ \"./src/javascript/aboutPage.js\");\n/* harmony import */ var _javascript_homePage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./javascript/homePage.js */ \"./src/javascript/homePage.js\");\n/* harmony import */ var _javascript_menuPage_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./javascript/menuPage.js */ \"./src/javascript/menuPage.js\");\n\r\n\r\n\r\n\r\n\r\n// navbar handle \r\nconst navbarArray = [...document.querySelector('#navbar-content').children]\r\nconst navActiveStyle = ['text-primary', 'border-b-2', 'border-primary', 'pb-1']\r\nconst navPassiveStyle = ['text-on-surface-variant', 'hover:text-primary', 'transition-colors', 'duration-300']\r\n\r\n\r\n\r\n// first view \r\n;(0,_javascript_handleMainPage_js__WEBPACK_IMPORTED_MODULE_1__.handleMainPage)('#content', _javascript_homePage_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])\r\n;(0,_javascript_handleMainPage_js__WEBPACK_IMPORTED_MODULE_1__.activedNav)(navbarArray,0,navActiveStyle,navPassiveStyle)\r\n\r\n\r\n// home navbar \r\nnavbarArray[0].addEventListener('click', (e) => {\r\n    e.preventDefault()\r\n    ;(0,_javascript_handleMainPage_js__WEBPACK_IMPORTED_MODULE_1__.handleMainPage)('#content', _javascript_homePage_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])\r\n    ;(0,_javascript_handleMainPage_js__WEBPACK_IMPORTED_MODULE_1__.activedNav)(navbarArray,0,navActiveStyle,navPassiveStyle)\r\n    \r\n})\r\n\r\n// menu navbar \r\nnavbarArray[1].addEventListener('click', (e) => {\r\n    e.preventDefault()\r\n    ;(0,_javascript_handleMainPage_js__WEBPACK_IMPORTED_MODULE_1__.handleMainPage)('#content', _javascript_menuPage_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])\r\n    ;(0,_javascript_handleMainPage_js__WEBPACK_IMPORTED_MODULE_1__.activedNav)(navbarArray,1,navActiveStyle,navPassiveStyle)\r\n})\r\n\r\n// abut navbar \r\nnavbarArray[2].addEventListener('click', (e) => {\r\n    e.preventDefault()\r\n    ;(0,_javascript_handleMainPage_js__WEBPACK_IMPORTED_MODULE_1__.handleMainPage)('#content', _javascript_aboutPage_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])\r\n    ;(0,_javascript_handleMainPage_js__WEBPACK_IMPORTED_MODULE_1__.activedNav)(navbarArray,2,navActiveStyle,navPassiveStyle)\r\n})\n\n//# sourceURL=webpack://restaurantproject/./src/index.js?\n}");

/***/ },

/***/ "./src/javascript/aboutPage.js"
/*!*************************************!*\
  !*** ./src/javascript/aboutPage.js ***!
  \*************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst aboutPage = `\r\n<section class=\"relative h-[819px] flex items-center justify-center overflow-hidden\">\r\n<div class=\"absolute inset-0 z-0\">\r\n<div class=\"w-full h-full bg-cover bg-center scale-105 opacity-90\" data-alt=\"A cinematic, high-resolution photograph of a sun-drenched traditional kitchen with steam rising from old copper pots. The lighting is warm and ethereal, casting long shadows across rustic stone walls. The aesthetic is curated heritage, blending minimalist space with the tactile textures of wood and metal. Deep burgundy and cream tones dominate the palette, creating an atmosphere of exclusivity and timeless culinary mastery.\" style=\"background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuDYnLkWJaLTrbEsflXpZL2f7HaOXoshhy3WfpnA_GLk1OBe1Nr9mKnkqNXIfVDQooJygbozPswaVoHRCe5dV9cLYgPRAAYUfRdJh-UUT3KEZCg6ixJcl5yGGEqrJ_WyCppAHf8oznBE_X0_5ufjv7VcLZ0RarPjdJZMBH0vNnEjULPK0x_2z0ahpVAKsl5zcZNYhznLTcnNzmve_WhHjlEDOi9ivlhnyeo1ZUNINmGMdsYgM25DOMkw')\"></div>\r\n<div class=\"absolute inset-0 bg-gradient-to-b from-transparent to-background\"></div>\r\n</div>\r\n<div class=\"relative z-10 text-center px-gutter\">\r\n<span class=\"text-label-md font-label-md text-primary tracking-widest uppercase block mb-4\">Our Legacy</span>\r\n<h1 class=\"text-headline-xl font-headline-xl text-primary md:text-headline-xl mb-6\">Culinary Heritage<br/>Redefined</h1>\r\n<p class=\"max-w-2xl mx-auto text-body-lg font-body-lg text-on-surface-variant italic\">\"A journey through three generations of secret recipes, curated for the modern epicure.\"</p>\r\n</div>\r\n</section>\r\n\r\n<!-- Founders Quote Section -->\r\n<section class=\"bg-surface-container-lowest py-section-padding\">\r\n<div class=\"max-w-3xl mx-auto px-gutter text-center\">\r\n<span class=\"material-symbols-outlined text-primary-fixed-dim text-6xl mb-8\" style=\"font-variation-settings: 'FILL' 1;\">format_quote</span>\r\n<blockquote class=\"text-headline-lg font-headline-lg text-primary italic mb-8\">\r\n                    \"Innovation should never come at the cost of soul. At Ayam 3D, we cook for the ancestors who taught us, and the guests who inspire us.\"\r\n                </blockquote>\r\n<cite class=\"text-label-md font-label-md text-secondary-fixed-variant uppercase tracking-widest not-italic\">Chef Alejandro Moreno, Founder</cite>\r\n</div>\r\n</section>\r\n<!-- Final CTA -->\r\n<section class=\"py-section-padding px-gutter text-center mb-20\">\r\n<div class=\"max-w-container-max mx-auto border gold-line p-16 bg-surface-container-low\">\r\n<h2 class=\"text-headline-lg font-headline-lg text-primary mb-6\">Experience the Legacy</h2>\r\n<p class=\"text-body-lg font-body-lg text-on-surface-variant max-w-xl mx-auto mb-10\">Join us for an evening where every bite tells a story. We invite you to become a part of our continuing history.</p>\r\n<div class=\"flex flex-col md:flex-row justify-center gap-4\">\r\n<button class=\"bg-primary text-on-primary px-10 py-4 font-label-md text-label-md hover:bg-primary-container transition-all premium-button\">\r\n                        BOOK A TABLE\r\n                    </button>\r\n<button class=\"border gold-line bg-surface text-primary px-10 py-4 font-label-md text-label-md hover:bg-surface-container-high transition-all premium-button\">\r\n                        VIEW MENU\r\n                    </button>\r\n</div>\r\n</div>\r\n</section>\r\n`\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (aboutPage);\n\n//# sourceURL=webpack://restaurantproject/./src/javascript/aboutPage.js?\n}");

/***/ },

/***/ "./src/javascript/handleMainPage.js"
/*!******************************************!*\
  !*** ./src/javascript/handleMainPage.js ***!
  \******************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   activedNav: () => (/* binding */ activedNav),\n/* harmony export */   handleMainPage: () => (/* binding */ handleMainPage)\n/* harmony export */ });\nfunction handleMainPage(idOfPage, content) {\r\n    const element = document.querySelector(idOfPage)\r\n    element.innerHTML = content\r\n}\r\n\r\nfunction activedNav(navArray, index, navActiveClass, navPassiveClass) {\r\n    // make all of nav same style \r\n    navArray.forEach(element => {\r\n        element.classList.remove(...navActiveClass)\r\n        element.classList.add(...navPassiveClass)\r\n    });\r\n\r\n\r\n    // change the main nav \r\n    navArray[index].classList.remove(...navPassiveClass)\r\n    navArray[index].classList.add(...navActiveClass)\r\n}\r\n\r\n\n\n//# sourceURL=webpack://restaurantproject/./src/javascript/handleMainPage.js?\n}");

/***/ },

/***/ "./src/javascript/homePage.js"
/*!************************************!*\
  !*** ./src/javascript/homePage.js ***!
  \************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst homePage = `\r\n<section class=\"relative bg-primary min-h-[921px] flex items-center overflow-hidden\">\r\n<div class=\"absolute inset-0 z-0\">\r\n<div class=\"w-full h-full opacity-40 bg-cover bg-center\" data-alt=\"A professional close-up macro photograph of traditional Indonesian smashed chicken (Ayam Geprek) topped with vibrant, fiery red chili sambal. The steam rises gently from the golden-brown crispy chicken skin, set against a dark, moody burgundy backdrop that emphasizes the rich textures and intense colors of the spices. High-end food photography lighting creates deep shadows and brilliant highlights on the oil-glistening sambal.\" style=\"background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuCC5Lb6-LG32zV8CpAGeGBk7t71o43Dqfwy8XeB8oIvraK6-jTkTxqK8ZXED17ESa8_kK6D8-334siTkghsLbgpL6GoUBOgniqUrDynAv7hTfNK0TXwOwdEjiLlktkvSOQvpoUV7sMXd3WAdcZAjmXmaWXP0JDDHZtMLCY-6ilNR5xEfLcghRmERgOdDSlXP18VpruA5a0roADWnGYnXrq2Rq_lsl3F01EfcfoPoudGs5van4GFeLpv')\"></div>\r\n</div>\r\n<div class=\"relative z-10 w-full px-gutter max-w-container-max mx-auto grid md:grid-cols-2 gap-12 items-center\">\r\n<div class=\"space-y-8\">\r\n<h1 class=\"text-white font-headline-xl text-headline-xl max-w-xl leading-none\">\r\n                        d'geprek, <br/> d'penyet, <br/> d'goreng\r\n                    </h1>\r\n<p class=\"text-primary-fixed-dim font-body-lg text-body-lg max-w-md\">\r\n                        Experience the raw power of Indonesian spice and heritage. A tri-dimensional journey of flavor that honors tradition through modern culinary excellence.\r\n                    </p>\r\n<button class=\"bg-[#a0522d] text-white px-10 py-4 text-label-md font-label-md hover:bg-[#670024] transition-all duration-500 border border-[#a0522d] hover:border-white shadow-xl\">\r\n                        EXPLORE THE MENU\r\n                    </button>\r\n</div>\r\n<div class=\"hidden md:block\">\r\n<div class=\"relative p-4 border border-[#a0522d]\">\r\n<img class=\"w-full h-auto object-cover border border-[#a0522d]/30\" data-alt=\"A stunning, overhead shot of a traditional Indonesian feast laid out on a dark wooden table. The central dish is a beautifully presented Ayam Penyet with fresh cucumber slices, cabbage, and a stone mortar filled with authentic sambal terasi. The lighting is warm and dramatic, highlighting the artisanal quality and historical depth of the meal. The composition is balanced and elegant, fitting a high-end gourmet dining brand.\" src=\"https://lh3.googleusercontent.com/aida-public/AB6AXuAHvzI8ukCW4GMN1O2D0_3rF8Om_2zR-JZAh2svK2M8vQqWqiXv-YYlW2-HE1DBOe5LfuJmR2Qi4-NOpS80Dr4mhiacNxBw5vfFIprKOhLnUrwSq1JY5U3FQTq88IAY1EKyiKcYiZBUWKSE2_3a-rzv-pggKhXKxg9RiX3LTV7GvWZeozCJDOqFHgTnCy_eNmTQYWDt99rf2TxrGJBFPks7w2TqOrKi1qnqdeo24beSLHHh6UpEyZLp\"/>\r\n</div>\r\n</div>\r\n</div>\r\n</section>\r\n<!-- Divider -->\r\n<div class=\"relative w-full py-12 flex justify-center items-center\">\r\n<div class=\"w-full max-w-container-max px-gutter\">\r\n<div class=\"relative h-px bg-[#a0522d] diamond-divider\"></div>\r\n</div>\r\n</div>\r\n<!-- Bento Featured Section -->\r\n<section class=\"py-section-padding px-gutter max-w-container-max mx-auto\">\r\n<div class=\"text-center mb-16\">\r\n<span class=\"text-primary font-label-md text-label-md tracking-widest uppercase\">The Signature Collection</span>\r\n<h2 class=\"font-headline-lg text-headline-lg text-on-surface mt-4\">Curated Culinary Heritage</h2>\r\n</div>\r\n<div class=\"grid grid-cols-1 md:grid-cols-12 gap-8 h-auto md:h-[800px]\">\r\n<!-- Large Feature -->\r\n<div class=\"md:col-span-8 group relative overflow-hidden bg-surface-container border border-outline-variant p-1\">\r\n<div class=\"h-full relative overflow-hidden\">\r\n<div class=\"absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105\" data-alt=\"A high-contrast culinary portrait of a chef expertly preparing authentic Indonesian sambal in a traditional stone mortar (cobek). Fine droplets of aromatic oils and spices are captured in mid-air against a deep, dark kitchen background. The scene is illuminated by a single, focused warm spotlight that brings out the textures of the stone and the rich reds of the chili. Professional editorial food styling with a moody, luxurious atmosphere.\" style=\"background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuATbX8q7eesKkp9o9qgPzdHo1vB_2EQTnbkrntWzpGjs7babxYOLmxg6spp6Bp_J1b5uavXIFmM1Uo2H2JIFb9K8Hbcir_GsNHMLhpDcImqbPq5vrT7l_gJhNh7CO_QY4iAdbtcEBEh3xLKOU73PoURqnfcVoEXKQ2tL0nYuDiNiQ9AeoHJdZX0KxvTCpYmi-iJaV60HpxF_EsEudwsqN23O5NWXNoh-yAThL_hQLXm9nNpIRR5mnXq')\"></div>\r\n<div class=\"absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent flex flex-col justify-end p-12\">\r\n<h3 class=\"text-white font-headline-md text-headline-md mb-4\">The Art of the Stone</h3>\r\n<p class=\"text-primary-fixed-dim font-body-md text-body-md max-w-lg mb-6\">Every serving of our signature Ayam Geprek is hand-smashed in traditional lava-stone mortars to ensure every fiber of chicken is infused with our secret spice blend.</p>\r\n<a class=\"text-white font-label-md text-label-md flex items-center gap-2 group/link\" href=\"#\">\r\n                                LEARN OUR STORY \r\n                                <span class=\"material-symbols-outlined transition-transform group-hover/link:translate-x-2\">arrow_right_alt</span>\r\n</a>\r\n</div>\r\n</div>\r\n</div>\r\n<!-- Vertical Feature -->\r\n<div class=\"md:col-span-4 grid grid-rows-2 gap-8\">\r\n<div class=\"bg-primary-container p-8 flex flex-col justify-center border border-[#a0522d]\">\r\n<span class=\"text-on-primary-container font-label-md text-label-md uppercase\">Limited Reserve</span>\r\n<h3 class=\"text-white font-headline-md text-headline-md mt-4 mb-2\">Sambal Hijau Limited</h3>\r\n<p class=\"text-primary-fixed-dim font-body-md text-body-md\">Sourced from the high-altitude farms of West Java, our green chilies provide a citrusy, sharp finish that cuts through the richness.</p>\r\n</div>\r\n<div class=\"relative overflow-hidden group border border-[#a0522d]\">\r\n<div class=\"absolute inset-0 bg-cover bg-center\" data-alt=\"A minimalist, close-up shot of a single golden-brown fried chicken drumstick resting on a clean, cream-colored ceramic plate. A thin, elegant trail of dark savory sauce and a garnish of micro-greens add a modern fine-dining touch. The lighting is soft and natural, emphasizing the perfect crispness of the skin. The overall aesthetic is one of refined, high-end Indonesian cuisine.\" style=\"background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuCo4Di3tT9hgKBMfO5SZDdnq-pG1vFd2grOFKv72GE4gMZK6r8vQZMCLsMtg2kTlxaVfopRWS8qTUXiGLq9HiVq7mr_I2yJY2uYUnf3GnmNFzRxAy7Am5ntRq8hSA4CYWq6TSWF6X-NCdAVoLgA9DdL1yv7eFxi4LX7CQKDo2HlO1emWg_QIuwheBOsc16dBhFJivRShE5UT8knm8ZigYqk0GqOPCGMHcxg1nV4jeLb_MdJ87Wj4wBe')\"></div>\r\n<div class=\"absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all duration-500\"></div>\r\n</div>\r\n</div>\r\n</div>\r\n</section>\r\n`\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homePage);\n\n//# sourceURL=webpack://restaurantproject/./src/javascript/homePage.js?\n}");

/***/ },

/***/ "./src/javascript/menuPage.js"
/*!************************************!*\
  !*** ./src/javascript/menuPage.js ***!
  \************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menuPage = `\r\n<section class=\"text-center my-20\">\r\n<h1 class=\"font-headline-xl text-headline-xl md:text-headline-xl text-primary mb-4\">The Culinary Archives</h1>\r\n<p class=\"font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto\">A curated selection of traditional Javanese poultry dishes, reimagined with modern precision and heritage flavors.</p>\r\n<div class=\"mt-12 flex justify-center items-center gap-4\">\r\n<div class=\"gold-line w-24\"></div>\r\n<span class=\"font-label-md text-label-md text-secondary uppercase\">Established 2024</span>\r\n<div class=\"gold-line w-24\"></div>\r\n</div>\r\n</section>\r\n<!-- Category: Geprek -->\r\n<section class=\"mb-24\" id=\"geprek\">\r\n<div class=\"flex items-center gap-4 mb-12\">\r\n<h2 class=\"font-headline-lg text-headline-lg text-primary shrink-0\">Ayam Geprek</h2>\r\n<div class=\"gold-line flex-grow gold-diamond\"></div>\r\n</div>\r\n<div class=\"grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12\">\r\n<!-- Item 1 -->\r\n<div class=\"menu-card flex flex-col pb-6\">\r\n<div class=\"flex justify-between items-end mb-2\">\r\n<div class=\"flex items-center gap-3\">\r\n<h3 class=\"font-headline-md text-headline-md\">Original Smash</h3>\r\n<span class=\"category-badge\">Geprek</span>\r\n</div>\r\n<div class=\"dotted-leader\"></div>\r\n<span class=\"font-headline-md text-headline-md text-primary\">Rp 35k</span>\r\n</div>\r\n<p class=\"font-body-md text-body-md text-on-surface-variant\">Crispy battered chicken thigh, hand-crushed with fresh garlic chili paste. Served with aromatic jasmine rice.</p>\r\n</div>\r\n<!-- Item 2 -->\r\n<div class=\"menu-card flex flex-col pb-6\">\r\n<div class=\"flex justify-between items-end mb-2\">\r\n<div class=\"flex items-center gap-3\">\r\n<h3 class=\"font-headline-md text-headline-md\">Melted Mozza</h3>\r\n<span class=\"category-badge\">Geprek</span>\r\n</div>\r\n<div class=\"dotted-leader\"></div>\r\n<span class=\"font-headline-md text-headline-md text-primary\">Rp 42k</span>\r\n</div>\r\n<p class=\"font-body-md text-body-md text-on-surface-variant\">Our signature smash chicken topped with a decadent layer of torched mozzarella and bird's eye chili oil.</p>\r\n</div>\r\n<!-- Item 3 -->\r\n<div class=\"menu-card flex flex-col pb-6\">\r\n<div class=\"flex justify-between items-end mb-2\">\r\n<div class=\"flex items-center gap-3\">\r\n<h3 class=\"font-headline-md text-headline-md\">Green Sambal</h3>\r\n<span class=\"category-badge\">Geprek</span>\r\n</div>\r\n<div class=\"dotted-leader\"></div>\r\n<span class=\"font-headline-md text-headline-md text-primary\">Rp 38k</span>\r\n</div>\r\n<p class=\"font-body-md text-body-md text-on-surface-variant\">Smashed chicken infused with a zesty, fermented green chili salsa and fried shallots.</p>\r\n</div>\r\n<div class=\"relative group h-full hidden md:block\">\r\n<img class=\"w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700\" data-alt=\"A high-end editorial food photograph of Ayam Geprek featuring crispy golden chicken crushed with vibrant red chili paste. The plate is artisanal ceramic, set on a warm cream linen tablecloth with soft, moody natural lighting highlighting the textures of the spice. Metallic gold cutlery rests to the side, maintaining a minimalist luxury aesthetic.\" src=\"https://lh3.googleusercontent.com/aida-public/AB6AXuB7LgTN5bOr2yPR5jh4d3Q7iwoWdiTXuWWzw0JABj9qG7n6nxCNb3aVyBVnzx3JL2tuQSwXOaHHgDUfygKPz2NzOadJ5dmidVVccKjp1eKMYWrPw42M15r1k-v84dh_QWkC_ygKXRzlafGuhOwnSGc5Y5HcTW_hdBM5fgJxsDHe5s6z74ms3OF6ak81gfiUMGXuhnXGWI51KZ_l6QR-f7xLBcmbxhlZvSJN4DI743zr5OvBZQ9lfvML\"/>\r\n</div>\r\n</div>\r\n</section>\r\n<!-- Category: Penyet -->\r\n<section class=\"mb-24\" id=\"penyet\">\r\n<div class=\"flex items-center gap-4 mb-12\">\r\n<div class=\"gold-line flex-grow gold-diamond\"></div>\r\n<h2 class=\"font-headline-lg text-headline-lg text-primary shrink-0\">Ayam Penyet</h2>\r\n<div class=\"gold-line flex-grow\"></div>\r\n</div>\r\n<div class=\"grid grid-cols-1 md:grid-cols-3 gap-8\">\r\n<!-- Item 4 -->\r\n<div class=\"menu-card flex flex-col pb-6\">\r\n<div class=\"flex justify-between items-end mb-2\">\r\n<h3 class=\"font-headline-md text-headline-md\">Heritage Classic</h3>\r\n<span class=\"category-badge ml-2\">Penyet</span>\r\n</div>\r\n<div class=\"flex justify-between items-center mb-4\">\r\n<div class=\"dotted-leader ml-0\"></div>\r\n<span class=\"font-headline-md text-headline-md text-primary\">Rp 36k</span>\r\n</div>\r\n<p class=\"font-body-md text-body-md text-on-surface-variant\">Traditional smashed fried chicken marinated in 12 indigenous spices, served with sambal terasi and fresh lalapan.</p>\r\n</div>\r\n<!-- Item 5 -->\r\n<div class=\"menu-card flex flex-col pb-6\">\r\n<div class=\"flex justify-between items-end mb-2\">\r\n<h3 class=\"font-headline-md text-headline-md\">Salted Egg Infusion</h3>\r\n<span class=\"category-badge ml-2\">Penyet</span>\r\n</div>\r\n<div class=\"flex justify-between items-center mb-4\">\r\n<div class=\"dotted-leader ml-0\"></div>\r\n<span class=\"font-headline-md text-headline-md text-primary\">Rp 45k</span>\r\n</div>\r\n<p class=\"font-body-md text-body-md text-on-surface-variant\">Elevated penyet drizzled with a rich, creamy salted egg yolk reduction and curry leaves.</p>\r\n</div>\r\n<!-- Item 6 -->\r\n<div class=\"menu-card flex flex-col pb-6\">\r\n<div class=\"flex justify-between items-end mb-2\">\r\n<h3 class=\"font-headline-md text-headline-md\">Smoky Kecap</h3>\r\n<span class=\"category-badge ml-2\">Penyet</span>\r\n</div>\r\n<div class=\"flex justify-between items-center mb-4\">\r\n<div class=\"dotted-leader ml-0\"></div>\r\n<span class=\"font-headline-md text-headline-md text-primary\">Rp 39k</span>\r\n</div>\r\n<p class=\"font-body-md text-body-md text-on-surface-variant\">Twice-cooked chicken finished on charcoal with a sweet soy glaze and spicy shrimp paste.</p>\r\n</div>\r\n</div>\r\n</section>\r\n<!-- Category: Goreng -->\r\n<section class=\"mb-24\" id=\"goreng\">\r\n<div class=\"flex items-center gap-4 mb-12\">\r\n<div class=\"gold-line flex-grow\"></div>\r\n<h2 class=\"font-headline-lg text-headline-lg text-primary shrink-0\">Ayam Goreng</h2>\r\n<div class=\"gold-line flex-grow gold-diamond\"></div>\r\n</div>\r\n<div class=\"grid grid-cols-1 md:grid-cols-2 gap-16\">\r\n<div class=\"relative overflow-hidden aspect-video md:aspect-auto\">\r\n<div class=\"w-full h-full bg-cover bg-center grayscale-50\" data-alt=\"Close up of perfectly fried golden brown chicken pieces garnished with crispy galangal flakes. The lighting is bright and warm, accentuating the crunchy texture. Set against a minimalist background of warm cream and deep burgundy accents, the image feels sophisticated and professional.\" style=\"background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuCe9CM8XE9LM3LbUDGc7HwxIScPe00Smg7dcsjvMz3e6qohSEzOpsYAthS6ufQPH6fd-wtuqSqK2Z5V-4M-fBhS2UfZvO2Ayd-j0qnWxpyXnbGPftVFAgEf0fnnZMNCG8Eq68h1x9xUyrbFKOfhzzgRYr4IBtJnHSrsPoi1js3aEKh5S3xNPtGy7GV3cxJ8ovafi4I-8h6ic-g_CuA39mjHJklZazw1QI0kkJiv9sIIBmHNFDYFQilj')\"></div>\r\n</div>\r\n<div class=\"flex flex-col gap-12 justify-center\">\r\n<!-- Item 7 -->\r\n<div class=\"menu-card flex flex-col pb-6\">\r\n<div class=\"flex justify-between items-end mb-2\">\r\n<div class=\"flex items-center gap-3\">\r\n<h3 class=\"font-headline-md text-headline-md\">Galangal Crisps</h3>\r\n<span class=\"category-badge\">Goreng</span>\r\n</div>\r\n<div class=\"dotted-leader\"></div>\r\n<span class=\"font-headline-md text-headline-md text-primary\">Rp 34k</span>\r\n</div>\r\n<p class=\"font-body-md text-body-md text-on-surface-variant\">Signature fried chicken topped with mountain-high crispy galangal flakes and lime leaf aroma.</p>\r\n</div>\r\n<!-- Item 8 -->\r\n<div class=\"menu-card flex flex-col pb-6\">\r\n<div class=\"flex justify-between items-end mb-2\">\r\n<div class=\"flex items-center gap-3\">\r\n<h3 class=\"font-headline-md text-headline-md\">Serundeng Gold</h3>\r\n<span class=\"category-badge\">Goreng</span>\r\n</div>\r\n<div class=\"dotted-leader\"></div>\r\n<span class=\"font-headline-md text-headline-md text-primary\">Rp 34k</span>\r\n</div>\r\n<p class=\"font-body-md text-body-md text-on-surface-variant\">Savoury coconut-infused fried chicken with toasted spice crumbles and sweet pickles.</p>\r\n</div>\r\n</div>\r\n</div>\r\n</section>\r\n<!-- Reservation CTA -->\r\n<section class=\"bg-surface-container py-16 px-12 border border-[#A0522D] flex flex-col md:flex-row items-center justify-between gap-8\">\r\n<div class=\"text-center md:text-left\">\r\n<h2 class=\"font-headline-md text-headline-md text-primary mb-2\">Reserve Your Table</h2>\r\n<p class=\"font-body-md text-body-md text-on-surface-variant\">Experience the art of curated heritage dining in person.</p>\r\n</div>\r\n<div class=\"flex flex-col sm:flex-row gap-4\">\r\n<button class=\"bg-[#A0522D] text-white px-8 py-4 font-label-md text-label-md uppercase tracking-widest hover:brightness-110 transition-all\">Book Now</button>\r\n<button class=\"border border-[#A0522D] text-primary px-8 py-4 font-label-md text-label-md uppercase tracking-widest hover:bg-[#A0522D] hover:text-white transition-all\">View Locations</button>\r\n</div>\r\n</section>\r\n`\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuPage);\n\n//# sourceURL=webpack://restaurantproject/./src/javascript/menuPage.js?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			const getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter/value functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			if(Array.isArray(definition)) {
/******/ 				var i = 0;
/******/ 				while(i < definition.length) {
/******/ 					var key = definition[i++];
/******/ 					var binding = definition[i++];
/******/ 					if(!__webpack_require__.o(exports, key)) {
/******/ 						if(binding === 0) {
/******/ 							Object.defineProperty(exports, key, { enumerable: true, value: definition[i++] });
/******/ 						} else {
/******/ 							Object.defineProperty(exports, key, { enumerable: true, get: binding });
/******/ 						}
/******/ 					} else if(binding === 0) { i++; }
/******/ 				}
/******/ 			} else {
/******/ 				for(var key in definition) {
/******/ 					if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 						Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	let __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;