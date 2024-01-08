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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\n    padding: 0;\n    margin: 0;\n    text-decoration: none;\n    color: #CCE6F4;\n  }\n  \n  #content {\n    width: 100vw;\n    min-width: 885px;\n    height: 100vh;\n    display: grid;\n    grid-template-rows: 1fr 12fr 1fr;\n  }\n  \n  .navBar {\n    background: black;\n    box-shadow: 0px 1px 40px gray;\n    color: white;\n    z-index: 1;\n    display: grid;\n    grid-template-columns: 5fr 1fr 5fr;\n    justify-items: center;\n    align-items: center;\n    cursor: pointer;\n  }\n  \n  .logoTitle {\n    justify-self: end;\n    font-style: italic;\n  }\n  \n  .logo {\n    width: 100px;\n  }\n  \n  nav {\n    justify-self: end;\n    padding-right: 20px;\n  }\n  \n  nav ul {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    list-style: none;\n    gap: 10px;\n  }\n  \n  nav ul,\n  nav li {\n    font-size: 24px;\n  }\n  \n  nav li:hover {\n    text-decoration: underline;\n  }\n  \n  .main { \n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n  }\n  \n  .homePage {\n    background-image: url('https://cdn.discordapp.com/attachments/995431151084773486/1181961287593373696/fez01._veg_pizzas_spinning_cheese_motion_lots_of_pizza_action_w_af3f31bb-42a6-408d-b2f4-8a28b718d537.png?ex=6582f63a&is=6570813a&hm=9f6cce2a33693ea090f321ce8c024eb33b30672713db595b86fa894f6ed2ea3f&');\n    background-position: center;\n    background-size: cover;\n    background-repeat: no-repeat;\n  }\n\n  .menuPage {\n    background-color: #472708;\n    background-image: url('https://cdn.discordapp.com/attachments/1115776946777882686/1182369995007733800/internalexile_aerial_view_one_side_of_a_empty_golden_brown_wood_87c87d57-1b8f-4283-9686-fd499ca71937.png');\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-position: top;\n    box-shadow: inset 10px 1em 1em black;\n  }\n\n  .contactPage {\n    background-image: url('https://cdn.discordapp.com/attachments/1115776946777882686/1183932540533362719/internalexile_aerial_view_empty_golden_brown_wooden_chopping_bo_af97b9f6-f604-4746-9132-d50abbdbcb0c.png');\n    /* https://cdn.discordapp.com/attachments/1115776946777882686/1183922181026099230/internalexile_aerial_view_empty_golden_brown_wooden_chopping_bo_21decd4b-4074-448a-a627-f931b9dfea03.png*/\n    background-size: cover;\n    background-position: top;\n    margin-top: -5px;\n    box-shadow: inset 10px 1em 1em black;\n  }\n\n  .container {\n    display: flex;\n    gap: 150px;\n  }\n\n  .productContainer {\n    text-align: center;\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    width: 60%;\n    gap: 20px;\n  }\n  \n  .product {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    \n  }\n  \n  .product:hover {\n    transform: scale(1.1);\n    transition: 0.5s;\n    cursor: pointer;\n  }\n  \n  img {\n    width: 10rem;\n    border: 3px white dotted;\n    border-radius: 30px;\n    background: radial-gradient(#6E2D2D, black);\n  }\n  \n  img:hover {\n    filter: drop-shadow(0 0 0.5rem white);\n  }\n  \n  h1 {\n    text-shadow: 3px 6px 5px black;\n    color: white;\n    font-size: 70px;\n  }\n  \n  h1:hover {\n    transform: translateY(-20%);\n    transition: 0.5s;\n    cursor: pointer;\n    text-decoration: underline dotted #00000000;\n  }\n\n  h2 {\n    color: white;\n    text-shadow:  3px 6px 5px black;\n    text-align: center;\n    padding: 10px;\n    font-size: 34px;\n  }\n\n  h3 {\n    text-shadow: 1px 1px 5px black;\n    color: white;\n    font-size: 44px; \n  }\n  \n  h4 {\n    color: #efefef;\n    text-shadow:  1px 1px 3px black;\n    font-size: 24px;\n  }\n  \n  span {\n    text-align: center;\n    padding: 5px;\n    margin: 5px;\n    font-size: 18px;\n    border-radius: 10px;\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    background-color: rgba(252, 223, 209, 0.5);\n    color: black;\n  }\n  \n  \n  .footer {    \n    color: white;\n    padding: 10px;\n    text-align: center;\n    background: black;\n  }\n  `, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   contactPage: () => (/* binding */ contactPage)\n/* harmony export */ });\nfunction createContact() {\n\n    const main = document.createElement('main');\n    main.classList.add('main');\n    main.classList.add('contactPage'); // change for other pages\n  \n    const container = document.createElement('div');\n    container.classList.add('container');\n  \n    const title1 = document.createElement('h1');\n    title1.textContent = \"Contact Us\";\n  \n    container.append(title1);\n    \n    const productContainer = document.createElement('div');\n    productContainer.classList.add('productContainer');\n    \n    const emailh4 = document.createElement('h4');\n    emailh4.textContent = \"Email:\";\n    \n    const email = document.createElement('span');\n    email.textContent = \"Email@ArtisenalSlices.com\";\n    \n    const phoneh4 = document.createElement('h4');\n    phoneh4.textContent = \"Phone:\";\n    \n    const phone = document.createElement('span');\n    phone.textContent = \"+1 (234) 567-8901\";\n    \n    const addressh4 = document.createElement('h4');\n    addressh4.textContent = \"Address:\";\n    \n    const address = document.createElement('span');\n    address.textContent = \"204 Pepperoni Plaza #567, Los Angeles, CA 91234\";\n    \n    productContainer.append(emailh4, phoneh4, addressh4, email, phone, address);\n  \n    main.appendChild(container);\n    main.appendChild(productContainer);\n  \n    return main\n  }\n  \n  const contactPage = createContact();\n\n  \n\n//# sourceURL=webpack://restaurant/./src/contact.js?");

/***/ }),

/***/ "./src/createPage.js":
/*!***************************!*\
  !*** ./src/createPage.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createPage: () => (/* binding */ createPage)\n/* harmony export */ });\n/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nav */ \"./src/nav.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer */ \"./src/footer.js\");\n\n\n\n\nfunction createPage(page) {\n    const content = document.getElementById('content');\n    content.appendChild(_nav__WEBPACK_IMPORTED_MODULE_0__.nav);\n\n    content.appendChild(page);\n\n    content.appendChild(_footer__WEBPACK_IMPORTED_MODULE_2__.footer);\n}\n\n\n\n\n//# sourceURL=webpack://restaurant/./src/createPage.js?");

/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   footer: () => (/* binding */ footer)\n/* harmony export */ });\n// create footer\nfunction createFooter() {\n    const footer = document.createElement('div');\n    footer.classList.add('footer');\n    \n    const footerText = document.createElement('a');\n    footerText.href = \"https://www.github.io/rinarasia\";\n    footerText.textContent = \"By ®inarasia\";\n    \n    footer.appendChild(footerText);\n    \n    return footer\n  }\n  \n  const footer = createFooter();\n  \n  \n\n//# sourceURL=webpack://restaurant/./src/footer.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   home: () => (/* binding */ home)\n/* harmony export */ });\nfunction createHome() {\n\n    const main = document.createElement('main');\n    main.classList.add('main');\n    main.classList.add('homePage'); // change for other pages\n  \n    const container = document.createElement('div');\n    container.classList.add('container');\n  \n    const title1 = document.createElement('h1');\n    title1.textContent = \"SAVOR\";\n  \n    const title2 = document.createElement('h1');\n    title2.textContent = \"FEAST\";\n  \n    const title3 = document.createElement('h1');\n    title3.textContent = \"ENJOY\";\n  \n    container.append(title1, title2, title3);\n  \n    main.appendChild(container);\n  \n    return main\n  }\n  \n  const home = createHome();\n\n  \n\n//# sourceURL=webpack://restaurant/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _createPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createPage */ \"./src/createPage.js\");\n/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nav */ \"./src/nav.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./footer */ \"./src/footer.js\");\n\n\n\n\n\n\n\n\nwindow.onload = function () {\n\n  (0,_createPage__WEBPACK_IMPORTED_MODULE_1__.createPage)(_home__WEBPACK_IMPORTED_MODULE_3__.home);\n\n  function renderPage(pageClass, pageName) {\n    const mainContent = document.querySelector('main');\n    if(mainContent.classList.contains(pageClass)) return;\n\n    const content = document.querySelector('#content');\n    content.textContent = \"\";\n\n    (0,_createPage__WEBPACK_IMPORTED_MODULE_1__.createPage)(pageName);\n  }\n  \n  const homeBtn = document.querySelector('.home');\n  const menuBtn = document.querySelector('.menu');\n  const contactBtn = document.querySelector('.contact');\n\n  homeBtn.addEventListener(\"click\", () => renderPage(\"home\", _home__WEBPACK_IMPORTED_MODULE_3__.home));\n  menuBtn.addEventListener(\"click\", () => renderPage(\"menu\", _menu__WEBPACK_IMPORTED_MODULE_4__.menuPage));\n  contactBtn.addEventListener(\"click\", () => renderPage(\"contact\", _contact__WEBPACK_IMPORTED_MODULE_5__.contactPage));\n\n  const logo = document.querySelector('.logo');\n  const logoTitle = document.querySelector('.logoTitle');\n\n  logo.addEventListener(\"click\", () => renderPage(\"home\", _home__WEBPACK_IMPORTED_MODULE_3__.home));\n  logoTitle.addEventListener(\"click\", () => renderPage(\"home\", _home__WEBPACK_IMPORTED_MODULE_3__.home));\n  \n\n  \n  \n\n  \n\n\n}\n\n//# sourceURL=webpack://restaurant/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   menuPage: () => (/* binding */ menuPage)\n/* harmony export */ });\nconst menu = [];\n\nclass Pizza {\n  constructor(name, url, description) {\n    this.name = name;\n    this.url = url;\n    this.description = description;\n  }\n}\n\nconst pepperoni = new Pizza('Pepperoni', 'https://cdn.discordapp.com/attachments/1115776946777882686/1182399355223801856/Pepperoni-removebg-preview.png', 'Satisfy cravings with pepperoni magic on our golden pizza canvas.');\n\nconst cheese = new Pizza('Cheese', 'https://cdn.discordapp.com/attachments/1115776946777882686/1182399353869041674/Cheese-removebg-preview.png', 'Savor the richness of our classic cheese embraced by a golden crust.');\n\nconst vegetarian = new Pizza('Vegetarian', 'https://cdn.discordapp.com/attachments/1115776946777882686/1182398548340387891/Vegetarian-removebg-preview.png', 'Vegetarian magic: mushrooms, onion, and sun-kissed tomato.');\n\nconst hawaiian = new Pizza('Hawaiian', 'https://cdn.discordapp.com/attachments/1115776946777882686/1182398886900408410/Hawaiian-removebg-preview.png', 'Tropical paradise on a slice: ham, pineapple, and cheesy delight.');\n\nconst margherita = new Pizza('Margherita', 'https://cdn.discordapp.com/attachments/1115776946777882686/1182398337199132802/Margherita_1-removebg-preview.png', 'Fresh mozzarella, tomatoes, basil, and olive oil unite on golden crust.');\n\nconst jalapeno = new Pizza('Jalapeno', 'https://cdn.discordapp.com/attachments/1115776946777882686/1182399354653392946/Jalapeno-removebg-preview.png', 'Feel the fire: jalapenos, melted cheese on a dreamy pizza base.');\n\nmenu.push(pepperoni, cheese, vegetarian, hawaiian, margherita, jalapeno);\n\n\nfunction createPizza(pizza) {\n\n  const product = document.createElement('div');\n  product.classList.add('product');\n\n  const title1 = document.createElement('h4');\n  title1.textContent = pizza.name;\n\n  const image = document.createElement('img');\n  image.src = pizza.url;\n  \n  product.append(title1, image);\n      \n  return product;\n}\n\n// create main body\nfunction createMenu() {\n\n    const main = document.createElement('main');\n    main.classList.add('main');\n    main.classList.add('menuPage'); // change for other pages\n    \n    const pageTitle = document.createElement('h1');\n    pageTitle.textContent = \"Menu\";\n  \n    const productContainer = document.createElement('div');\n    productContainer.classList.add('productContainer');\n    \n    menu.forEach((pizza) => {\n      let product = createPizza(pizza);\n      \n      const span = document.createElement('span');\n      \n      span.textContent = pizza.description;\n      product.append(span);\n      productContainer.append(product);\n    });\n  \n    main.appendChild(pageTitle);\n    main.appendChild(productContainer);\n  \n    return main;\n  }\n  \n  const menuPage = createMenu();\n\n  \n\n//# sourceURL=webpack://restaurant/./src/menu.js?");

/***/ }),

/***/ "./src/nav.js":
/*!********************!*\
  !*** ./src/nav.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   nav: () => (/* binding */ nav)\n/* harmony export */ });\n  function createNavBar() {\n \n    const navBar = document.createElement('div');\n    navBar.classList.add('navBar');\n    \n    \n    \n    const logo = document.createElement('img');\n    logo.classList.add('logo');\n    logo.src = \"https://cdn.discordapp.com/attachments/1115776946777882686/1184259042026213446/cheflogo2-removebg-preview.png\";\n    \n    const logoTitle = document.createElement('h2');\n    logoTitle.classList.add('logoTitle');\n    logoTitle.textContent = \"Artisanal Slices\";\n    \n    const navMenu = document.createElement('nav');\n  \n    const navItems = document.createElement('ul');\n    \n    const homeBtn = document.createElement('li');\n    homeBtn.classList.add(\"home\");\n    homeBtn.setAttribute('id', 'home');\n    homeBtn.textContent = \"Home\";\n    \n    const menuBtn = document.createElement('li');\n    menuBtn.classList.add(\"menu\");\n    menuBtn.textContent = \"Menu\";\n    \n    const contactBtn = document.createElement('li');\n    contactBtn.classList.add(\"contact\");\n    contactBtn.textContent = \"Contact\";\n  \n    navItems.append(homeBtn, menuBtn, contactBtn);\n  \n    navMenu.append(navItems);\n    \n    \n    navBar.appendChild(logoTitle);\n    navBar.appendChild(logo);\n    navBar.appendChild(navMenu);\n  \n    return navBar\n  }\n  \n  const nav = createNavBar();\n\n  \n\n//# sourceURL=webpack://restaurant/./src/nav.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
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
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
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
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;