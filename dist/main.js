/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/index.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/index.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
    font-size: 16px;
    --header-height: 14vh;
    --footer-height: 7vh;
    --content-margin-vert: 4vh;
    --content-padding-vert: 3vh;
    --content-padding-hori: 5vw;
    background: 
    linear-gradient(to bottom, rgba(255, 255, 255, 0.5), rgba(125, 184, 110, 0.4) ),
    url("https://images.squarespace-cdn.com/content/v1/555050d2e4b06f76bea1ba86/1530062644635-4SNSG63LWB4LY2MZCE4T/sunnycover2.jpg?format=2500w");
    background-repeat: no-repeat;
    background-position: center;
    background-attachment: fixed;
    background-size: cover;
}

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

h3 {
    margin-top: 1rem;
}

#header {
    position: relative;
    left: 0;
    top: 0;
    width: 100%;
    height: var(--header-height);
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.7);
    color: white;
    padding: 20px;
}

.header-nav {
    display: flex;

    & button {
        cursor: pointer;
        height: 20px;
        width: 100px;
        margin: 15px;
        border: none;
        border-radius: 20px;
    }
}


#content {
    min-height: calc(100vh - var(--header-height) - 
    var(--footer-height) - var(--content-margin-vert) - var(--content-padding-vert));
    margin: var(--content-margin-vert) 5vw;
    padding: var(--content-padding-vert) var(--content-padding-hori);
    background-color: rgba(255, 255, 255, .7);
    line-height: 1.5rem;

    & h2 {
        margin: 15px 0;
    }

    & p {
        margin: 10px 0;
    }
}

.grid-div {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    grid-auto-flow: row;
    background-color: rgba(0,0,0,0.2);
    gap: 20px;
    padding: 20px;

    & h3 {
        grid-column: 1 / -1;
    }
}

.menu-item {
    display: flex;
    flex-direction: column;
    background-size: cover;
    background-color: rgba(0, 0, 0, 0.3);
    background-blend-mode: multiply;
    height: 150px;
    width: 150px;
    color: white;
    justify-content: end;
    padding: 0 4px;
    transition-duration: 0.5s;

    &:hover {
        background-color: rgba(255, 255, 255, 0.1);
        /* color: black; */
    }
}

form {
    display: flex;
    background-color: rgba(0,0,0,0.2);
    flex-direction: column;
    margin: 10px 0px 40px 0;
    padding: 20px;

    & input, & textarea {
        margin: 10px 0;
        padding: 5px;
    }
}

.form-div {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    flex-wrap: wrap;

    & input {
        min-width: 200px;
    }
}

.flex-center {
    grid-column: 1/-1;
    display: flex;
    justify-content: center;
}

label {
    font-size: 1.2rem;
}

#comment-label {
    grid-column: 1/-1;
}

#comment-box {
    grid-column: 1 / -1;
    height: 15vh;
}

.submit-btn {
    /* margin: 10px 5vw 5px 5vw; */
    width: 50vw;
    height: 5vh;
}

#footer {
    color: white;
    background-color: rgba(0, 0, 0, .7);
    bottom: 0;
    left: 0;
    height: var(--footer-height);
    width: 100%;
    margin-top: auto;
    padding: 15px;
}

iframe {
    width: clamp(300px, 30vw, 50%);
    height: clamp(300px, 30vh, 40vh);
    margin: 15px 0;
    border:0; 
}`, "",{"version":3,"sources":["webpack://./src/styles/index.css"],"names":[],"mappings":"AAAA;IACI,eAAe;IACf,qBAAqB;IACrB,oBAAoB;IACpB,0BAA0B;IAC1B,2BAA2B;IAC3B,2BAA2B;IAC3B;;iJAE6I;IAC7I,4BAA4B;IAC5B,2BAA2B;IAC3B,4BAA4B;IAC5B,sBAAsB;AAC1B;;AAEA;IACI,sBAAsB;IACtB,SAAS;IACT,UAAU;AACd;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;IAClB,OAAO;IACP,MAAM;IACN,WAAW;IACX,4BAA4B;IAC5B,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,oCAAoC;IACpC,YAAY;IACZ,aAAa;AACjB;;AAEA;IACI,aAAa;;IAEb;QACI,eAAe;QACf,YAAY;QACZ,YAAY;QACZ,YAAY;QACZ,YAAY;QACZ,mBAAmB;IACvB;AACJ;;;AAGA;IACI;oFACgF;IAChF,sCAAsC;IACtC,gEAAgE;IAChE,yCAAyC;IACzC,mBAAmB;;IAEnB;QACI,cAAc;IAClB;;IAEA;QACI,cAAc;IAClB;AACJ;;AAEA;IACI,aAAa;IACb,2DAA2D;IAC3D,mBAAmB;IACnB,iCAAiC;IACjC,SAAS;IACT,aAAa;;IAEb;QACI,mBAAmB;IACvB;AACJ;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,sBAAsB;IACtB,oCAAoC;IACpC,+BAA+B;IAC/B,aAAa;IACb,YAAY;IACZ,YAAY;IACZ,oBAAoB;IACpB,cAAc;IACd,yBAAyB;;IAEzB;QACI,0CAA0C;QAC1C,kBAAkB;IACtB;AACJ;;AAEA;IACI,aAAa;IACb,iCAAiC;IACjC,sBAAsB;IACtB,uBAAuB;IACvB,aAAa;;IAEb;QACI,cAAc;QACd,YAAY;IAChB;AACJ;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,2BAA2B;IAC3B,eAAe;;IAEf;QACI,gBAAgB;IACpB;AACJ;;AAEA;IACI,iBAAiB;IACjB,aAAa;IACb,uBAAuB;AAC3B;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,mBAAmB;IACnB,YAAY;AAChB;;AAEA;IACI,8BAA8B;IAC9B,WAAW;IACX,WAAW;AACf;;AAEA;IACI,YAAY;IACZ,mCAAmC;IACnC,SAAS;IACT,OAAO;IACP,4BAA4B;IAC5B,WAAW;IACX,gBAAgB;IAChB,aAAa;AACjB;;AAEA;IACI,8BAA8B;IAC9B,gCAAgC;IAChC,cAAc;IACd,QAAQ;AACZ","sourcesContent":[":root {\n    font-size: 16px;\n    --header-height: 14vh;\n    --footer-height: 7vh;\n    --content-margin-vert: 4vh;\n    --content-padding-vert: 3vh;\n    --content-padding-hori: 5vw;\n    background: \n    linear-gradient(to bottom, rgba(255, 255, 255, 0.5), rgba(125, 184, 110, 0.4) ),\n    url(\"https://images.squarespace-cdn.com/content/v1/555050d2e4b06f76bea1ba86/1530062644635-4SNSG63LWB4LY2MZCE4T/sunnycover2.jpg?format=2500w\");\n    background-repeat: no-repeat;\n    background-position: center;\n    background-attachment: fixed;\n    background-size: cover;\n}\n\n* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\nh3 {\n    margin-top: 1rem;\n}\n\n#header {\n    position: relative;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: var(--header-height);\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    background-color: rgba(0, 0, 0, 0.7);\n    color: white;\n    padding: 20px;\n}\n\n.header-nav {\n    display: flex;\n\n    & button {\n        cursor: pointer;\n        height: 20px;\n        width: 100px;\n        margin: 15px;\n        border: none;\n        border-radius: 20px;\n    }\n}\n\n\n#content {\n    min-height: calc(100vh - var(--header-height) - \n    var(--footer-height) - var(--content-margin-vert) - var(--content-padding-vert));\n    margin: var(--content-margin-vert) 5vw;\n    padding: var(--content-padding-vert) var(--content-padding-hori);\n    background-color: rgba(255, 255, 255, .7);\n    line-height: 1.5rem;\n\n    & h2 {\n        margin: 15px 0;\n    }\n\n    & p {\n        margin: 10px 0;\n    }\n}\n\n.grid-div {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\n    grid-auto-flow: row;\n    background-color: rgba(0,0,0,0.2);\n    gap: 20px;\n    padding: 20px;\n\n    & h3 {\n        grid-column: 1 / -1;\n    }\n}\n\n.menu-item {\n    display: flex;\n    flex-direction: column;\n    background-size: cover;\n    background-color: rgba(0, 0, 0, 0.3);\n    background-blend-mode: multiply;\n    height: 150px;\n    width: 150px;\n    color: white;\n    justify-content: end;\n    padding: 0 4px;\n    transition-duration: 0.5s;\n\n    &:hover {\n        background-color: rgba(255, 255, 255, 0.1);\n        /* color: black; */\n    }\n}\n\nform {\n    display: flex;\n    background-color: rgba(0,0,0,0.2);\n    flex-direction: column;\n    margin: 10px 0px 40px 0;\n    padding: 20px;\n\n    & input, & textarea {\n        margin: 10px 0;\n        padding: 5px;\n    }\n}\n\n.form-div {\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    flex-wrap: wrap;\n\n    & input {\n        min-width: 200px;\n    }\n}\n\n.flex-center {\n    grid-column: 1/-1;\n    display: flex;\n    justify-content: center;\n}\n\nlabel {\n    font-size: 1.2rem;\n}\n\n#comment-label {\n    grid-column: 1/-1;\n}\n\n#comment-box {\n    grid-column: 1 / -1;\n    height: 15vh;\n}\n\n.submit-btn {\n    /* margin: 10px 5vw 5px 5vw; */\n    width: 50vw;\n    height: 5vh;\n}\n\n#footer {\n    color: white;\n    background-color: rgba(0, 0, 0, .7);\n    bottom: 0;\n    left: 0;\n    height: var(--footer-height);\n    width: 100%;\n    margin-top: auto;\n    padding: 15px;\n}\n\niframe {\n    width: clamp(300px, 30vw, 50%);\n    height: clamp(300px, 30vh, 40vh);\n    margin: 15px 0;\n    border:0; \n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/index.css":
/*!******************************!*\
  !*** ./src/styles/index.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/functions/createForm.js":
/*!*************************************!*\
  !*** ./src/functions/createForm.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createForm: () => (/* binding */ createForm)
/* harmony export */ });
/**
 * Generates a form
 * @return {string} - html code for contact form
 */
function createForm() {
    const contactForm = document.createElement("form");
    const formObj = {
        fNameDiv : document.createElement('div'),
        lNameDiv : document.createElement('div'),
        emailDiv : document.createElement('div'),
        commentDiv : document.createElement('div'),
        submitDiv : document.createElement('div'),
    }
    const fNameLabel = document.createElement('label');
    const fNameInput = document.createElement('input');
    const lNameLabel = document.createElement('label');
    const lNameInput = document.createElement('input');
    const emailLabel = document.createElement('label');
    const emailInput = document.createElement('input');
    const commentLabel = document.createElement('label');
    const commentInput = document.createElement('textarea');

    const submitBtn = document.createElement('input');


    fNameLabel.innerText = 'First Name:';
    fNameLabel.setAttribute('for', 'first-name');
    fNameInput.setAttribute('type', 'text');
    fNameInput.setAttribute('name', 'first-name');
    fNameInput.setAttribute('id', 'first-name');
    formObj.fNameDiv.appendChild(fNameLabel);
    formObj.fNameDiv.appendChild(fNameInput);
    formObj.fNameDiv.className = "form-div"

    lNameLabel.innerText = 'Last Name:';
    lNameLabel.setAttribute('for', 'last-name');
    lNameInput.setAttribute('type', 'text');
    lNameInput.setAttribute('name', 'last-name');
    lNameInput.setAttribute('id', 'last-name');
    formObj.lNameDiv.appendChild(lNameLabel);
    formObj.lNameDiv.appendChild(lNameInput);
    formObj.lNameDiv.className = 'form-div'

    emailLabel.innerText = 'Email:'
    emailLabel.setAttribute('type', 'email')
    formObj.emailDiv.appendChild(emailLabel);
    formObj.emailDiv.appendChild(emailInput);
    formObj.emailDiv.className = 'form-div'

    commentLabel.innerText = 'Comment:';
    commentLabel.id = "comment-label"
    commentLabel.setAttribute('for', 'comment-box');
    commentInput.setAttribute('name', 'comment-box');
    commentInput.setAttribute('id', 'comment-box');
    formObj.commentDiv.appendChild(commentLabel);
    formObj.commentDiv.appendChild(commentInput);
    formObj.commentDiv.className = 'form-div';
    
    submitBtn.className = 'submit-btn';
    submitBtn.innerText = 'Submit';
    submitBtn.setAttribute('type', 'submit');
    formObj.submitDiv.className = 'flex-center';
    formObj.submitDiv.appendChild(submitBtn);

    for (const key in formObj) {
        if (formObj[key] != '') {
            contactForm.appendChild(formObj[key]);
        }
    }
    
    return contactForm;
}



/***/ }),

/***/ "./src/pages/contact.js":
/*!******************************!*\
  !*** ./src/pages/contact.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   displayContact: () => (/* binding */ displayContact)
/* harmony export */ });
/* harmony import */ var _functions_createForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions/createForm */ "./src/functions/createForm.js");


/**
 * Create contact page.
 * @return {string} - Returns contact page
 */
function displayContact() {
    const content = document.createElement('div');
    const pageTitle = document.createElement('h2');

    pageTitle.innerText = "Contact Us";

    content.appendChild(pageTitle);
    content.appendChild((0,_functions_createForm__WEBPACK_IMPORTED_MODULE_0__.createForm)());

    return content.innerHTML;
}



/***/ }),

/***/ "./src/pages/home.js":
/*!***************************!*\
  !*** ./src/pages/home.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   displayHome: () => (/* binding */ displayHome)
/* harmony export */ });
/**
 * Create home page.
 * @return {string} - Return
 */
function displayHome() {
    const content = document.createElement('div')
    const title = document.createElement('h2');
    const para = document.createElement("p");
    const locationTitle = document.createElement('h3');
    const lineBreak = document.createElement('br');
    const locations = document.createElement("p");
    const googleMap = document.createElement("iframe");

    title.innerText = "Welcome to the world's most exciting cat cafe.";
    para.innerText = "Going to catch the red dot today going to catch the red dot today pretend you want to go out but then don't. Kitty pounce, trip, faceplant you didn't see that no you didn't definitely didn't lick, lick, lick, and preen away the embarrassment cough furball into food bowl then scratch owner for a new one so stares at human while pushing stuff off a table, and sit in a box for hours yet claw at curtains stretch and yawn nibble on tuna ignore human bite human hand hide at bottom of staircase to trip human. Ooh, are those your $250 dollar sandals? lemme use that as my litter box let me in let me out let me in let me out let me in let me out who broke this door anyway found somthing move i bite it tail and plop down in the middle where everybody walks and purr like a car engine oh yes, there is my human slave woman she does best pats ever that all i like about her hiss meow yet humans,humans, humans oh how much they love us felines we are the center of attention they feed, they clean or kitty pounce, trip, faceplant you didn't see that no you didn't definitely didn't lick, lick, lick, and preen away the embarrassment. Sleep in the bathroom sink lay on arms while you're using the keyboard eat grass, throw it back up. Meow meow, i tell my human stare at the wall, play with food and get confused by dust but meow and rub face on everything white cat sleeps on a black shirt fight an alligator and win. Meow meow, i tell my human meow but poop on floor and watch human clean up but eat the fat cats food pee on walls it smells like breakfast yet lie on your belly and purr when you are asleep. Annoy kitten brother with poking dead stare with ears cocked, why can't i catch that stupid red dot break lamps and curl up into a ball and meow if it fits, i sits mew. Massacre a bird in the living room and then look like the cutest and most innocent animal on the planet kitty power under the bed have secret plans, and check cat door for ambush 10 times before coming in. Stare at wall turn and meow stare at wall some more meow again continue staring i will be pet i will be pet and then i will hiss so eat grass, throw it back up play riveting piece on synthesizer keyboard. "
    
    locationTitle.innerText = "Come visit us!"
    locations.innerText = "We are located at Tokyo tower in Tokyo, Japan!"
    Object.assign(googleMap, {
        src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.7477988419487!2d139.7428579759297!3d35.6585848312175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188bbd9009ec09%3A0x481a93f0d2a409dd!2sTokyo%20Tower!5e0!3m2!1sen!2sca!4v1701290769011!5m2!1sen!2sca",
        // width:"350", 
        // height:"350", 
        allowfullscreen:"", 
        loading:"lazy", 
        referrerpolicy:"no-referrer-when-downgrade"
    })
    

    content.innerHTML = "";
    content.appendChild(title);
    content.appendChild(para);
    content.appendChild(lineBreak);
    content.appendChild(locationTitle);
    content.appendChild(locations);
    content.appendChild(googleMap);

    return content.innerHTML;
}



/***/ }),

/***/ "./src/pages/initalize.js":
/*!********************************!*\
  !*** ./src/pages/initalize.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildFooter: () => (/* binding */ buildFooter),
/* harmony export */   buildHeader: () => (/* binding */ buildHeader)
/* harmony export */ });
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu */ "./src/pages/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact */ "./src/pages/contact.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home */ "./src/pages/home.js");




/**
 * Initalize page by adding header.
 * @return {string} - is for providing the html code for the header
 */
function buildHeader() {
    const content = document.querySelector('#content');
    const header = document.createElement('header');
    const headerNav = document.createElement('div');
    const homeBtn = document.createElement('button');
    const menuBtn = document.createElement('button');
    const contactBtn = document.createElement('button');
    const logo = document.createElement('h1');

    logo.innerText = "Catfe Restaurant";

    homeBtn.innerHTML = "Home";
    homeBtn.className = "home-btn";
    homeBtn.addEventListener('click', () => {
        content.innerHTML = "";
        content.innerHTML = (0,_home__WEBPACK_IMPORTED_MODULE_2__.displayHome)();
    })

    menuBtn.innerHTML = "Menu";
    menuBtn.className = "menu-btn";
    menuBtn.addEventListener("click", () => {
        content.innerHTML = "";
        content.innerHTML = (0,_menu__WEBPACK_IMPORTED_MODULE_0__.displayMenu)();
    })

    contactBtn.innerHTML = "Contact";
    contactBtn.className = "contact-btn";
    contactBtn.addEventListener('click', () => {
        content.innerHTML = "";
        content.innerHTML = (0,_contact__WEBPACK_IMPORTED_MODULE_1__.displayContact)();
    })

    header.id = "header"
    headerNav.className = 'header-nav';

    header.appendChild(logo);
    headerNav.appendChild(homeBtn);
    headerNav.appendChild(menuBtn);
    headerNav.appendChild(contactBtn);
    header.appendChild(headerNav);

    return header;
}

/**
 * Initalize page by adding footer.
 * @return {string} - is for providing the html code for the footer
 */
function buildFooter() {
    const footer = document.createElement('footer');
    const copyright = document.createElement('p');
    const currDate = new Date();

    footer.id = "footer";

    copyright.textContent = `Copyright © ${currDate.getFullYear()} JChow`

    footer.appendChild(copyright);

    return footer;
}



/***/ }),

/***/ "./src/pages/menu.js":
/*!***************************!*\
  !*** ./src/pages/menu.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   displayMenu: () => (/* binding */ displayMenu)
/* harmony export */ });
/**
 * Displays the menu
 * @return {string} - returns innerHTML of the menu page
 */
function displayMenu() {
    const content = document.createElement('div');
    const pageTitle = document.createElement('h2');
    const menuItems = document.createElement('div');
    const mainSubtitle = document.createElement('h3');
    const drinkSubtitle = document.createElement('h3');

    menuItems.className = "grid-div";

    const mainMenuItems = [
        {name: 'Chicken Sandwich', price: 8.90, calories: 120, 
        image: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2023/09/mayo-chicken-sandwich.jpg.webp'},
        {name: 'Beef Sandwich', price: 10.90, calories: 140, 
        image: 'https://www.tasteofhome.com/wp-content/uploads/2018/01/Savory-Beef-Sandwiches_EXPS_HSCBZ17_9191_B07_27_4b.jpg?fit=700%2C1024'},
        {name: 'Beef and Chicken Sandwich', price: 8.90, calories: 120, 
        image: 'https://somethingaboutsandwiches.com/wp-content/uploads/2021/04/grilled-chicken-sandwich.jpg'},
    ];
    
    const drinkMenuItems = [
        {name: 'Coffee', price: 3.50, calories: 5, 
        image: 'https://insanelygoodrecipes.com/wp-content/uploads/2020/07/Cup-Of-Creamy-Coffee-1024x536.webp'},
        {name: 'Hong Kong Milk Tea', price: 5.50, calories: 5, 
        image: 'https://carmyy.com/wp-content/uploads/2021/12/Hong-Kong-Milk-Tea-5.jpg'},
        {name: 'Juice', price: 2.50, calories: 20, 
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Orange_juice_1.jpg/844px-Orange_juice_1.jpg'},
    ];

    mainSubtitle.innerText = "Mains";
    menuItems.appendChild(mainSubtitle);
    for (let n = 0; n < mainMenuItems.length; n++) {
        const itemInfo = mainMenuItems[n];

        const menuBox = document.createElement('div');
        const itemName = document.createElement('h4');
        
        menuBox.className = "menu-item";
        menuBox.style.backgroundImage = `url(${itemInfo.image})`;
        itemName.innerText = itemInfo.name;

        menuBox.appendChild(itemName);
        menuItems.append(menuBox);
    }

    drinkSubtitle.innerText = 'Drinks';
    menuItems.appendChild(drinkSubtitle);
    for (let n = 0; n < drinkMenuItems.length; n++) {
        const itemInfo = drinkMenuItems[n];

        const menuBox = document.createElement('div');
        const itemName = document.createElement('h4');

        menuBox.className = "menu-item";
        menuBox.style.backgroundImage = `url(${itemInfo.image})`;
        itemName.innerText = itemInfo.name;

        menuBox.appendChild(itemName);

        menuItems.append(menuBox);
    }
    

    pageTitle.innerText = "Menu";

    content.appendChild(pageTitle);
    content.appendChild(menuItems);

    return content.innerHTML;
}



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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.css */ "./src/styles/index.css");
/* harmony import */ var _pages_initalize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/initalize */ "./src/pages/initalize.js");
/* harmony import */ var _pages_menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/menu.js */ "./src/pages/menu.js");



// import {displayHome} from './pages/home.js';

const body = document.querySelector('body');
const content = document.querySelector('#content');

body.insertBefore((0,_pages_initalize__WEBPACK_IMPORTED_MODULE_1__.buildHeader)(), content);
content.innerHTML = (0,_pages_menu_js__WEBPACK_IMPORTED_MODULE_2__.displayMenu)();
// content.innerHTML = displayHome();
body.appendChild((0,_pages_initalize__WEBPACK_IMPORTED_MODULE_1__.buildFooter)());
 
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LCtDQUErQyxlQUFlO0FBQzlEOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7O1VDdkVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7OztBQ0E0QjtBQUMrQjtBQUNiO0FBQzlDLFdBQVcsYUFBYTs7QUFFeEI7QUFDQTs7QUFFQSxrQkFBa0IsNkRBQVc7QUFDN0Isb0JBQW9CLDJEQUFXO0FBQy9CO0FBQ0EsaUJBQWlCLDZEQUFXO0FBQzVCLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jYXRmZS1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGVzL2luZGV4LmNzcyIsIndlYnBhY2s6Ly9jYXRmZS1yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2NhdGZlLXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2NhdGZlLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZXMvaW5kZXguY3NzPzYzNDkiLCJ3ZWJwYWNrOi8vY2F0ZmUtcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2NhdGZlLXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vY2F0ZmUtcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2NhdGZlLXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9jYXRmZS1yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9jYXRmZS1yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9jYXRmZS1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvZnVuY3Rpb25zL2NyZWF0ZUZvcm0uanMiLCJ3ZWJwYWNrOi8vY2F0ZmUtcmVzdGF1cmFudC1wYWdlLy4vc3JjL3BhZ2VzL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vY2F0ZmUtcmVzdGF1cmFudC1wYWdlLy4vc3JjL3BhZ2VzL2hvbWUuanMiLCJ3ZWJwYWNrOi8vY2F0ZmUtcmVzdGF1cmFudC1wYWdlLy4vc3JjL3BhZ2VzL2luaXRhbGl6ZS5qcyIsIndlYnBhY2s6Ly9jYXRmZS1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcGFnZXMvbWVudS5qcyIsIndlYnBhY2s6Ly9jYXRmZS1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vY2F0ZmUtcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2NhdGZlLXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vY2F0ZmUtcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vY2F0ZmUtcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vY2F0ZmUtcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9jYXRmZS1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgLS1oZWFkZXItaGVpZ2h0OiAxNHZoO1xuICAgIC0tZm9vdGVyLWhlaWdodDogN3ZoO1xuICAgIC0tY29udGVudC1tYXJnaW4tdmVydDogNHZoO1xuICAgIC0tY29udGVudC1wYWRkaW5nLXZlcnQ6IDN2aDtcbiAgICAtLWNvbnRlbnQtcGFkZGluZy1ob3JpOiA1dnc7XG4gICAgYmFja2dyb3VuZDogXG4gICAgbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpLCByZ2JhKDEyNSwgMTg0LCAxMTAsIDAuNCkgKSxcbiAgICB1cmwoXCJodHRwczovL2ltYWdlcy5zcXVhcmVzcGFjZS1jZG4uY29tL2NvbnRlbnQvdjEvNTU1MDUwZDJlNGIwNmY3NmJlYTFiYTg2LzE1MzAwNjI2NDQ2MzUtNFNOU0c2M0xXQjRMWTJNWkNFNFQvc3Vubnljb3ZlcjIuanBnP2Zvcm1hdD0yNTAwd1wiKTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbioge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG59XG5cbmgzIHtcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xufVxuXG4jaGVhZGVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbGVmdDogMDtcbiAgICB0b3A6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiB2YXIoLS1oZWFkZXItaGVpZ2h0KTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDIwcHg7XG59XG5cbi5oZWFkZXItbmF2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgJiBidXR0b24ge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICBtYXJnaW46IDE1cHg7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICB9XG59XG5cblxuI2NvbnRlbnQge1xuICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSB2YXIoLS1oZWFkZXItaGVpZ2h0KSAtIFxuICAgIHZhcigtLWZvb3Rlci1oZWlnaHQpIC0gdmFyKC0tY29udGVudC1tYXJnaW4tdmVydCkgLSB2YXIoLS1jb250ZW50LXBhZGRpbmctdmVydCkpO1xuICAgIG1hcmdpbjogdmFyKC0tY29udGVudC1tYXJnaW4tdmVydCkgNXZ3O1xuICAgIHBhZGRpbmc6IHZhcigtLWNvbnRlbnQtcGFkZGluZy12ZXJ0KSB2YXIoLS1jb250ZW50LXBhZGRpbmctaG9yaSk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAuNyk7XG4gICAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcblxuICAgICYgaDIge1xuICAgICAgICBtYXJnaW46IDE1cHggMDtcbiAgICB9XG5cbiAgICAmIHAge1xuICAgICAgICBtYXJnaW46IDEwcHggMDtcbiAgICB9XG59XG5cbi5ncmlkLWRpdiB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDE1MHB4LCAxZnIpKTtcbiAgICBncmlkLWF1dG8tZmxvdzogcm93O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC4yKTtcbiAgICBnYXA6IDIwcHg7XG4gICAgcGFkZGluZzogMjBweDtcblxuICAgICYgaDMge1xuICAgICAgICBncmlkLWNvbHVtbjogMSAvIC0xO1xuICAgIH1cbn1cblxuLm1lbnUtaXRlbSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAgIGJhY2tncm91bmQtYmxlbmQtbW9kZTogbXVsdGlwbHk7XG4gICAgaGVpZ2h0OiAxNTBweDtcbiAgICB3aWR0aDogMTUwcHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGp1c3RpZnktY29udGVudDogZW5kO1xuICAgIHBhZGRpbmc6IDAgNHB4O1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNXM7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICAgICAgICAvKiBjb2xvcjogYmxhY2s7ICovXG4gICAgfVxufVxuXG5mb3JtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC4yKTtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1hcmdpbjogMTBweCAwcHggNDBweCAwO1xuICAgIHBhZGRpbmc6IDIwcHg7XG5cbiAgICAmIGlucHV0LCAmIHRleHRhcmVhIHtcbiAgICAgICAgbWFyZ2luOiAxMHB4IDA7XG4gICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICB9XG59XG5cbi5mb3JtLWRpdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG5cbiAgICAmIGlucHV0IHtcbiAgICAgICAgbWluLXdpZHRoOiAyMDBweDtcbiAgICB9XG59XG5cbi5mbGV4LWNlbnRlciB7XG4gICAgZ3JpZC1jb2x1bW46IDEvLTE7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxubGFiZWwge1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xufVxuXG4jY29tbWVudC1sYWJlbCB7XG4gICAgZ3JpZC1jb2x1bW46IDEvLTE7XG59XG5cbiNjb21tZW50LWJveCB7XG4gICAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcbiAgICBoZWlnaHQ6IDE1dmg7XG59XG5cbi5zdWJtaXQtYnRuIHtcbiAgICAvKiBtYXJnaW46IDEwcHggNXZ3IDVweCA1dnc7ICovXG4gICAgd2lkdGg6IDUwdnc7XG4gICAgaGVpZ2h0OiA1dmg7XG59XG5cbiNmb290ZXIge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC43KTtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICBoZWlnaHQ6IHZhcigtLWZvb3Rlci1oZWlnaHQpO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IGF1dG87XG4gICAgcGFkZGluZzogMTVweDtcbn1cblxuaWZyYW1lIHtcbiAgICB3aWR0aDogY2xhbXAoMzAwcHgsIDMwdncsIDUwJSk7XG4gICAgaGVpZ2h0OiBjbGFtcCgzMDBweCwgMzB2aCwgNDB2aCk7XG4gICAgbWFyZ2luOiAxNXB4IDA7XG4gICAgYm9yZGVyOjA7IFxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9pbmRleC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLG9CQUFvQjtJQUNwQiwwQkFBMEI7SUFDMUIsMkJBQTJCO0lBQzNCLDJCQUEyQjtJQUMzQjs7aUpBRTZJO0lBQzdJLDRCQUE0QjtJQUM1QiwyQkFBMkI7SUFDM0IsNEJBQTRCO0lBQzVCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsVUFBVTtBQUNkOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLE9BQU87SUFDUCxNQUFNO0lBQ04sV0FBVztJQUNYLDRCQUE0QjtJQUM1QixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixvQ0FBb0M7SUFDcEMsWUFBWTtJQUNaLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhOztJQUViO1FBQ0ksZUFBZTtRQUNmLFlBQVk7UUFDWixZQUFZO1FBQ1osWUFBWTtRQUNaLFlBQVk7UUFDWixtQkFBbUI7SUFDdkI7QUFDSjs7O0FBR0E7SUFDSTtvRkFDZ0Y7SUFDaEYsc0NBQXNDO0lBQ3RDLGdFQUFnRTtJQUNoRSx5Q0FBeUM7SUFDekMsbUJBQW1COztJQUVuQjtRQUNJLGNBQWM7SUFDbEI7O0lBRUE7UUFDSSxjQUFjO0lBQ2xCO0FBQ0o7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsMkRBQTJEO0lBQzNELG1CQUFtQjtJQUNuQixpQ0FBaUM7SUFDakMsU0FBUztJQUNULGFBQWE7O0lBRWI7UUFDSSxtQkFBbUI7SUFDdkI7QUFDSjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsc0JBQXNCO0lBQ3RCLG9DQUFvQztJQUNwQywrQkFBK0I7SUFDL0IsYUFBYTtJQUNiLFlBQVk7SUFDWixZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCLGNBQWM7SUFDZCx5QkFBeUI7O0lBRXpCO1FBQ0ksMENBQTBDO1FBQzFDLGtCQUFrQjtJQUN0QjtBQUNKOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGlDQUFpQztJQUNqQyxzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLGFBQWE7O0lBRWI7UUFDSSxjQUFjO1FBQ2QsWUFBWTtJQUNoQjtBQUNKOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QiwyQkFBMkI7SUFDM0IsZUFBZTs7SUFFZjtRQUNJLGdCQUFnQjtJQUNwQjtBQUNKOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLDhCQUE4QjtJQUM5QixXQUFXO0lBQ1gsV0FBVztBQUNmOztBQUVBO0lBQ0ksWUFBWTtJQUNaLG1DQUFtQztJQUNuQyxTQUFTO0lBQ1QsT0FBTztJQUNQLDRCQUE0QjtJQUM1QixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSw4QkFBOEI7SUFDOUIsZ0NBQWdDO0lBQ2hDLGNBQWM7SUFDZCxRQUFRO0FBQ1pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIC0taGVhZGVyLWhlaWdodDogMTR2aDtcXG4gICAgLS1mb290ZXItaGVpZ2h0OiA3dmg7XFxuICAgIC0tY29udGVudC1tYXJnaW4tdmVydDogNHZoO1xcbiAgICAtLWNvbnRlbnQtcGFkZGluZy12ZXJ0OiAzdmg7XFxuICAgIC0tY29udGVudC1wYWRkaW5nLWhvcmk6IDV2dztcXG4gICAgYmFja2dyb3VuZDogXFxuICAgIGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSwgcmdiYSgxMjUsIDE4NCwgMTEwLCAwLjQpICksXFxuICAgIHVybChcXFwiaHR0cHM6Ly9pbWFnZXMuc3F1YXJlc3BhY2UtY2RuLmNvbS9jb250ZW50L3YxLzU1NTA1MGQyZTRiMDZmNzZiZWExYmE4Ni8xNTMwMDYyNjQ0NjM1LTRTTlNHNjNMV0I0TFkyTVpDRTRUL3N1bm55Y292ZXIyLmpwZz9mb3JtYXQ9MjUwMHdcXFwiKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbn1cXG5cXG4qIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5oMyB7XFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxufVxcblxcbiNoZWFkZXIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHRvcDogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogdmFyKC0taGVhZGVyLWhlaWdodCk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbn1cXG5cXG4uaGVhZGVyLW5hdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuXFxuICAgICYgYnV0dG9uIHtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgIGhlaWdodDogMjBweDtcXG4gICAgICAgIHdpZHRoOiAxMDBweDtcXG4gICAgICAgIG1hcmdpbjogMTVweDtcXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIH1cXG59XFxuXFxuXFxuI2NvbnRlbnQge1xcbiAgICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gdmFyKC0taGVhZGVyLWhlaWdodCkgLSBcXG4gICAgdmFyKC0tZm9vdGVyLWhlaWdodCkgLSB2YXIoLS1jb250ZW50LW1hcmdpbi12ZXJ0KSAtIHZhcigtLWNvbnRlbnQtcGFkZGluZy12ZXJ0KSk7XFxuICAgIG1hcmdpbjogdmFyKC0tY29udGVudC1tYXJnaW4tdmVydCkgNXZ3O1xcbiAgICBwYWRkaW5nOiB2YXIoLS1jb250ZW50LXBhZGRpbmctdmVydCkgdmFyKC0tY29udGVudC1wYWRkaW5nLWhvcmkpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC43KTtcXG4gICAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcXG5cXG4gICAgJiBoMiB7XFxuICAgICAgICBtYXJnaW46IDE1cHggMDtcXG4gICAgfVxcblxcbiAgICAmIHAge1xcbiAgICAgICAgbWFyZ2luOiAxMHB4IDA7XFxuICAgIH1cXG59XFxuXFxuLmdyaWQtZGl2IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgxNTBweCwgMWZyKSk7XFxuICAgIGdyaWQtYXV0by1mbG93OiByb3c7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC4yKTtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcblxcbiAgICAmIGgzIHtcXG4gICAgICAgIGdyaWQtY29sdW1uOiAxIC8gLTE7XFxuICAgIH1cXG59XFxuXFxuLm1lbnUtaXRlbSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gICAgYmFja2dyb3VuZC1ibGVuZC1tb2RlOiBtdWx0aXBseTtcXG4gICAgaGVpZ2h0OiAxNTBweDtcXG4gICAgd2lkdGg6IDE1MHB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGp1c3RpZnktY29udGVudDogZW5kO1xcbiAgICBwYWRkaW5nOiAwIDRweDtcXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC41cztcXG5cXG4gICAgJjpob3ZlciB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XFxuICAgICAgICAvKiBjb2xvcjogYmxhY2s7ICovXFxuICAgIH1cXG59XFxuXFxuZm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC4yKTtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgbWFyZ2luOiAxMHB4IDBweCA0MHB4IDA7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuXFxuICAgICYgaW5wdXQsICYgdGV4dGFyZWEge1xcbiAgICAgICAgbWFyZ2luOiAxMHB4IDA7XFxuICAgICAgICBwYWRkaW5nOiA1cHg7XFxuICAgIH1cXG59XFxuXFxuLmZvcm0tZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuXFxuICAgICYgaW5wdXQge1xcbiAgICAgICAgbWluLXdpZHRoOiAyMDBweDtcXG4gICAgfVxcbn1cXG5cXG4uZmxleC1jZW50ZXIge1xcbiAgICBncmlkLWNvbHVtbjogMS8tMTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbmxhYmVsIHtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbiNjb21tZW50LWxhYmVsIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEvLTE7XFxufVxcblxcbiNjb21tZW50LWJveCB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gLTE7XFxuICAgIGhlaWdodDogMTV2aDtcXG59XFxuXFxuLnN1Ym1pdC1idG4ge1xcbiAgICAvKiBtYXJnaW46IDEwcHggNXZ3IDVweCA1dnc7ICovXFxuICAgIHdpZHRoOiA1MHZ3O1xcbiAgICBoZWlnaHQ6IDV2aDtcXG59XFxuXFxuI2Zvb3RlciB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAuNyk7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgaGVpZ2h0OiB2YXIoLS1mb290ZXItaGVpZ2h0KTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1hcmdpbi10b3A6IGF1dG87XFxuICAgIHBhZGRpbmc6IDE1cHg7XFxufVxcblxcbmlmcmFtZSB7XFxuICAgIHdpZHRoOiBjbGFtcCgzMDBweCwgMzB2dywgNTAlKTtcXG4gICAgaGVpZ2h0OiBjbGFtcCgzMDBweCwgMzB2aCwgNDB2aCk7XFxuICAgIG1hcmdpbjogMTVweCAwO1xcbiAgICBib3JkZXI6MDsgXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvKipcbiAqIEdlbmVyYXRlcyBhIGZvcm1cbiAqIEByZXR1cm4ge3N0cmluZ30gLSBodG1sIGNvZGUgZm9yIGNvbnRhY3QgZm9ybVxuICovXG5mdW5jdGlvbiBjcmVhdGVGb3JtKCkge1xuICAgIGNvbnN0IGNvbnRhY3RGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gICAgY29uc3QgZm9ybU9iaiA9IHtcbiAgICAgICAgZk5hbWVEaXYgOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcbiAgICAgICAgbE5hbWVEaXYgOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcbiAgICAgICAgZW1haWxEaXYgOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcbiAgICAgICAgY29tbWVudERpdiA6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxuICAgICAgICBzdWJtaXREaXYgOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcbiAgICB9XG4gICAgY29uc3QgZk5hbWVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgY29uc3QgZk5hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgY29uc3QgbE5hbWVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgY29uc3QgbE5hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgY29uc3QgZW1haWxMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgY29uc3QgZW1haWxJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgY29uc3QgY29tbWVudExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBjb25zdCBjb21tZW50SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuXG4gICAgY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcblxuXG4gICAgZk5hbWVMYWJlbC5pbm5lclRleHQgPSAnRmlyc3QgTmFtZTonO1xuICAgIGZOYW1lTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnZmlyc3QtbmFtZScpO1xuICAgIGZOYW1lSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICBmTmFtZUlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICdmaXJzdC1uYW1lJyk7XG4gICAgZk5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2ZpcnN0LW5hbWUnKTtcbiAgICBmb3JtT2JqLmZOYW1lRGl2LmFwcGVuZENoaWxkKGZOYW1lTGFiZWwpO1xuICAgIGZvcm1PYmouZk5hbWVEaXYuYXBwZW5kQ2hpbGQoZk5hbWVJbnB1dCk7XG4gICAgZm9ybU9iai5mTmFtZURpdi5jbGFzc05hbWUgPSBcImZvcm0tZGl2XCJcblxuICAgIGxOYW1lTGFiZWwuaW5uZXJUZXh0ID0gJ0xhc3QgTmFtZTonO1xuICAgIGxOYW1lTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnbGFzdC1uYW1lJyk7XG4gICAgbE5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgIGxOYW1lSW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ2xhc3QtbmFtZScpO1xuICAgIGxOYW1lSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICdsYXN0LW5hbWUnKTtcbiAgICBmb3JtT2JqLmxOYW1lRGl2LmFwcGVuZENoaWxkKGxOYW1lTGFiZWwpO1xuICAgIGZvcm1PYmoubE5hbWVEaXYuYXBwZW5kQ2hpbGQobE5hbWVJbnB1dCk7XG4gICAgZm9ybU9iai5sTmFtZURpdi5jbGFzc05hbWUgPSAnZm9ybS1kaXYnXG5cbiAgICBlbWFpbExhYmVsLmlubmVyVGV4dCA9ICdFbWFpbDonXG4gICAgZW1haWxMYWJlbC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZW1haWwnKVxuICAgIGZvcm1PYmouZW1haWxEaXYuYXBwZW5kQ2hpbGQoZW1haWxMYWJlbCk7XG4gICAgZm9ybU9iai5lbWFpbERpdi5hcHBlbmRDaGlsZChlbWFpbElucHV0KTtcbiAgICBmb3JtT2JqLmVtYWlsRGl2LmNsYXNzTmFtZSA9ICdmb3JtLWRpdidcblxuICAgIGNvbW1lbnRMYWJlbC5pbm5lclRleHQgPSAnQ29tbWVudDonO1xuICAgIGNvbW1lbnRMYWJlbC5pZCA9IFwiY29tbWVudC1sYWJlbFwiXG4gICAgY29tbWVudExhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2NvbW1lbnQtYm94Jyk7XG4gICAgY29tbWVudElucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICdjb21tZW50LWJveCcpO1xuICAgIGNvbW1lbnRJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbW1lbnQtYm94Jyk7XG4gICAgZm9ybU9iai5jb21tZW50RGl2LmFwcGVuZENoaWxkKGNvbW1lbnRMYWJlbCk7XG4gICAgZm9ybU9iai5jb21tZW50RGl2LmFwcGVuZENoaWxkKGNvbW1lbnRJbnB1dCk7XG4gICAgZm9ybU9iai5jb21tZW50RGl2LmNsYXNzTmFtZSA9ICdmb3JtLWRpdic7XG4gICAgXG4gICAgc3VibWl0QnRuLmNsYXNzTmFtZSA9ICdzdWJtaXQtYnRuJztcbiAgICBzdWJtaXRCdG4uaW5uZXJUZXh0ID0gJ1N1Ym1pdCc7XG4gICAgc3VibWl0QnRuLnNldEF0dHJpYnV0ZSgndHlwZScsICdzdWJtaXQnKTtcbiAgICBmb3JtT2JqLnN1Ym1pdERpdi5jbGFzc05hbWUgPSAnZmxleC1jZW50ZXInO1xuICAgIGZvcm1PYmouc3VibWl0RGl2LmFwcGVuZENoaWxkKHN1Ym1pdEJ0bik7XG5cbiAgICBmb3IgKGNvbnN0IGtleSBpbiBmb3JtT2JqKSB7XG4gICAgICAgIGlmIChmb3JtT2JqW2tleV0gIT0gJycpIHtcbiAgICAgICAgICAgIGNvbnRhY3RGb3JtLmFwcGVuZENoaWxkKGZvcm1PYmpba2V5XSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIGNvbnRhY3RGb3JtO1xufVxuXG5leHBvcnQge2NyZWF0ZUZvcm19OyIsImltcG9ydCB7Y3JlYXRlRm9ybX0gZnJvbSBcIi4uL2Z1bmN0aW9ucy9jcmVhdGVGb3JtXCJcblxuLyoqXG4gKiBDcmVhdGUgY29udGFjdCBwYWdlLlxuICogQHJldHVybiB7c3RyaW5nfSAtIFJldHVybnMgY29udGFjdCBwYWdlXG4gKi9cbmZ1bmN0aW9uIGRpc3BsYXlDb250YWN0KCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBwYWdlVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuXG4gICAgcGFnZVRpdGxlLmlubmVyVGV4dCA9IFwiQ29udGFjdCBVc1wiO1xuXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChwYWdlVGl0bGUpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlRm9ybSgpKTtcblxuICAgIHJldHVybiBjb250ZW50LmlubmVySFRNTDtcbn1cblxuZXhwb3J0IHtkaXNwbGF5Q29udGFjdH07IiwiLyoqXG4gKiBDcmVhdGUgaG9tZSBwYWdlLlxuICogQHJldHVybiB7c3RyaW5nfSAtIFJldHVyblxuICovXG5mdW5jdGlvbiBkaXNwbGF5SG9tZSgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgY29uc3QgcGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGNvbnN0IGxvY2F0aW9uVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIGNvbnN0IGxpbmVCcmVhayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJyk7XG4gICAgY29uc3QgbG9jYXRpb25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgY29uc3QgZ29vZ2xlTWFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlmcmFtZVwiKTtcblxuICAgIHRpdGxlLmlubmVyVGV4dCA9IFwiV2VsY29tZSB0byB0aGUgd29ybGQncyBtb3N0IGV4Y2l0aW5nIGNhdCBjYWZlLlwiO1xuICAgIHBhcmEuaW5uZXJUZXh0ID0gXCJHb2luZyB0byBjYXRjaCB0aGUgcmVkIGRvdCB0b2RheSBnb2luZyB0byBjYXRjaCB0aGUgcmVkIGRvdCB0b2RheSBwcmV0ZW5kIHlvdSB3YW50IHRvIGdvIG91dCBidXQgdGhlbiBkb24ndC4gS2l0dHkgcG91bmNlLCB0cmlwLCBmYWNlcGxhbnQgeW91IGRpZG4ndCBzZWUgdGhhdCBubyB5b3UgZGlkbid0IGRlZmluaXRlbHkgZGlkbid0IGxpY2ssIGxpY2ssIGxpY2ssIGFuZCBwcmVlbiBhd2F5IHRoZSBlbWJhcnJhc3NtZW50IGNvdWdoIGZ1cmJhbGwgaW50byBmb29kIGJvd2wgdGhlbiBzY3JhdGNoIG93bmVyIGZvciBhIG5ldyBvbmUgc28gc3RhcmVzIGF0IGh1bWFuIHdoaWxlIHB1c2hpbmcgc3R1ZmYgb2ZmIGEgdGFibGUsIGFuZCBzaXQgaW4gYSBib3ggZm9yIGhvdXJzIHlldCBjbGF3IGF0IGN1cnRhaW5zIHN0cmV0Y2ggYW5kIHlhd24gbmliYmxlIG9uIHR1bmEgaWdub3JlIGh1bWFuIGJpdGUgaHVtYW4gaGFuZCBoaWRlIGF0IGJvdHRvbSBvZiBzdGFpcmNhc2UgdG8gdHJpcCBodW1hbi4gT29oLCBhcmUgdGhvc2UgeW91ciAkMjUwIGRvbGxhciBzYW5kYWxzPyBsZW1tZSB1c2UgdGhhdCBhcyBteSBsaXR0ZXIgYm94IGxldCBtZSBpbiBsZXQgbWUgb3V0IGxldCBtZSBpbiBsZXQgbWUgb3V0IGxldCBtZSBpbiBsZXQgbWUgb3V0IHdobyBicm9rZSB0aGlzIGRvb3IgYW55d2F5IGZvdW5kIHNvbXRoaW5nIG1vdmUgaSBiaXRlIGl0IHRhaWwgYW5kIHBsb3AgZG93biBpbiB0aGUgbWlkZGxlIHdoZXJlIGV2ZXJ5Ym9keSB3YWxrcyBhbmQgcHVyciBsaWtlIGEgY2FyIGVuZ2luZSBvaCB5ZXMsIHRoZXJlIGlzIG15IGh1bWFuIHNsYXZlIHdvbWFuIHNoZSBkb2VzIGJlc3QgcGF0cyBldmVyIHRoYXQgYWxsIGkgbGlrZSBhYm91dCBoZXIgaGlzcyBtZW93IHlldCBodW1hbnMsaHVtYW5zLCBodW1hbnMgb2ggaG93IG11Y2ggdGhleSBsb3ZlIHVzIGZlbGluZXMgd2UgYXJlIHRoZSBjZW50ZXIgb2YgYXR0ZW50aW9uIHRoZXkgZmVlZCwgdGhleSBjbGVhbiBvciBraXR0eSBwb3VuY2UsIHRyaXAsIGZhY2VwbGFudCB5b3UgZGlkbid0IHNlZSB0aGF0IG5vIHlvdSBkaWRuJ3QgZGVmaW5pdGVseSBkaWRuJ3QgbGljaywgbGljaywgbGljaywgYW5kIHByZWVuIGF3YXkgdGhlIGVtYmFycmFzc21lbnQuIFNsZWVwIGluIHRoZSBiYXRocm9vbSBzaW5rIGxheSBvbiBhcm1zIHdoaWxlIHlvdSdyZSB1c2luZyB0aGUga2V5Ym9hcmQgZWF0IGdyYXNzLCB0aHJvdyBpdCBiYWNrIHVwLiBNZW93IG1lb3csIGkgdGVsbCBteSBodW1hbiBzdGFyZSBhdCB0aGUgd2FsbCwgcGxheSB3aXRoIGZvb2QgYW5kIGdldCBjb25mdXNlZCBieSBkdXN0IGJ1dCBtZW93IGFuZCBydWIgZmFjZSBvbiBldmVyeXRoaW5nIHdoaXRlIGNhdCBzbGVlcHMgb24gYSBibGFjayBzaGlydCBmaWdodCBhbiBhbGxpZ2F0b3IgYW5kIHdpbi4gTWVvdyBtZW93LCBpIHRlbGwgbXkgaHVtYW4gbWVvdyBidXQgcG9vcCBvbiBmbG9vciBhbmQgd2F0Y2ggaHVtYW4gY2xlYW4gdXAgYnV0IGVhdCB0aGUgZmF0IGNhdHMgZm9vZCBwZWUgb24gd2FsbHMgaXQgc21lbGxzIGxpa2UgYnJlYWtmYXN0IHlldCBsaWUgb24geW91ciBiZWxseSBhbmQgcHVyciB3aGVuIHlvdSBhcmUgYXNsZWVwLiBBbm5veSBraXR0ZW4gYnJvdGhlciB3aXRoIHBva2luZyBkZWFkIHN0YXJlIHdpdGggZWFycyBjb2NrZWQsIHdoeSBjYW4ndCBpIGNhdGNoIHRoYXQgc3R1cGlkIHJlZCBkb3QgYnJlYWsgbGFtcHMgYW5kIGN1cmwgdXAgaW50byBhIGJhbGwgYW5kIG1lb3cgaWYgaXQgZml0cywgaSBzaXRzIG1ldy4gTWFzc2FjcmUgYSBiaXJkIGluIHRoZSBsaXZpbmcgcm9vbSBhbmQgdGhlbiBsb29rIGxpa2UgdGhlIGN1dGVzdCBhbmQgbW9zdCBpbm5vY2VudCBhbmltYWwgb24gdGhlIHBsYW5ldCBraXR0eSBwb3dlciB1bmRlciB0aGUgYmVkIGhhdmUgc2VjcmV0IHBsYW5zLCBhbmQgY2hlY2sgY2F0IGRvb3IgZm9yIGFtYnVzaCAxMCB0aW1lcyBiZWZvcmUgY29taW5nIGluLiBTdGFyZSBhdCB3YWxsIHR1cm4gYW5kIG1lb3cgc3RhcmUgYXQgd2FsbCBzb21lIG1vcmUgbWVvdyBhZ2FpbiBjb250aW51ZSBzdGFyaW5nIGkgd2lsbCBiZSBwZXQgaSB3aWxsIGJlIHBldCBhbmQgdGhlbiBpIHdpbGwgaGlzcyBzbyBlYXQgZ3Jhc3MsIHRocm93IGl0IGJhY2sgdXAgcGxheSByaXZldGluZyBwaWVjZSBvbiBzeW50aGVzaXplciBrZXlib2FyZC4gXCJcbiAgICBcbiAgICBsb2NhdGlvblRpdGxlLmlubmVyVGV4dCA9IFwiQ29tZSB2aXNpdCB1cyFcIlxuICAgIGxvY2F0aW9ucy5pbm5lclRleHQgPSBcIldlIGFyZSBsb2NhdGVkIGF0IFRva3lvIHRvd2VyIGluIFRva3lvLCBKYXBhbiFcIlxuICAgIE9iamVjdC5hc3NpZ24oZ29vZ2xlTWFwLCB7XG4gICAgICAgIHNyYzpcImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vbWFwcy9lbWJlZD9wYj0hMW0xOCExbTEyITFtMyExZDMyNDEuNzQ3Nzk4ODQxOTQ4NyEyZDEzOS43NDI4NTc5NzU5Mjk3ITNkMzUuNjU4NTg0ODMxMjE3NSEybTMhMWYwITJmMCEzZjAhM20yITFpMTAyNCEyaTc2OCE0ZjEzLjEhM20zITFtMiExczB4NjAxODhiYmQ5MDA5ZWMwOSUzQTB4NDgxYTkzZjBkMmE0MDlkZCEyc1Rva3lvJTIwVG93ZXIhNWUwITNtMiExc2VuITJzY2EhNHYxNzAxMjkwNzY5MDExITVtMiExc2VuITJzY2FcIixcbiAgICAgICAgLy8gd2lkdGg6XCIzNTBcIiwgXG4gICAgICAgIC8vIGhlaWdodDpcIjM1MFwiLCBcbiAgICAgICAgYWxsb3dmdWxsc2NyZWVuOlwiXCIsIFxuICAgICAgICBsb2FkaW5nOlwibGF6eVwiLCBcbiAgICAgICAgcmVmZXJyZXJwb2xpY3k6XCJuby1yZWZlcnJlci13aGVuLWRvd25ncmFkZVwiXG4gICAgfSlcbiAgICBcblxuICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gXCJcIjtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHBhcmEpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobGluZUJyZWFrKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGxvY2F0aW9uVGl0bGUpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobG9jYXRpb25zKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGdvb2dsZU1hcCk7XG5cbiAgICByZXR1cm4gY29udGVudC5pbm5lckhUTUw7XG59XG5cbmV4cG9ydCB7ZGlzcGxheUhvbWV9IiwiaW1wb3J0IHsgZGlzcGxheU1lbnUgfSBmcm9tIFwiLi9tZW51XCI7XG5pbXBvcnQgeyBkaXNwbGF5Q29udGFjdCB9IGZyb20gXCIuL2NvbnRhY3RcIjtcbmltcG9ydCB7IGRpc3BsYXlIb21lIH0gZnJvbSBcIi4vaG9tZVwiO1xuXG4vKipcbiAqIEluaXRhbGl6ZSBwYWdlIGJ5IGFkZGluZyBoZWFkZXIuXG4gKiBAcmV0dXJuIHtzdHJpbmd9IC0gaXMgZm9yIHByb3ZpZGluZyB0aGUgaHRtbCBjb2RlIGZvciB0aGUgaGVhZGVyXG4gKi9cbmZ1bmN0aW9uIGJ1aWxkSGVhZGVyKCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuICAgIGNvbnN0IGhlYWRlck5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGhvbWVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb25zdCBtZW51QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29uc3QgY29udGFjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnN0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuXG4gICAgbG9nby5pbm5lclRleHQgPSBcIkNhdGZlIFJlc3RhdXJhbnRcIjtcblxuICAgIGhvbWVCdG4uaW5uZXJIVE1MID0gXCJIb21lXCI7XG4gICAgaG9tZUJ0bi5jbGFzc05hbWUgPSBcImhvbWUtYnRuXCI7XG4gICAgaG9tZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29udGVudC5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICBjb250ZW50LmlubmVySFRNTCA9IGRpc3BsYXlIb21lKCk7XG4gICAgfSlcblxuICAgIG1lbnVCdG4uaW5uZXJIVE1MID0gXCJNZW51XCI7XG4gICAgbWVudUJ0bi5jbGFzc05hbWUgPSBcIm1lbnUtYnRuXCI7XG4gICAgbWVudUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBjb250ZW50LmlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gZGlzcGxheU1lbnUoKTtcbiAgICB9KVxuXG4gICAgY29udGFjdEJ0bi5pbm5lckhUTUwgPSBcIkNvbnRhY3RcIjtcbiAgICBjb250YWN0QnRuLmNsYXNzTmFtZSA9IFwiY29udGFjdC1idG5cIjtcbiAgICBjb250YWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb250ZW50LmlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gZGlzcGxheUNvbnRhY3QoKTtcbiAgICB9KVxuXG4gICAgaGVhZGVyLmlkID0gXCJoZWFkZXJcIlxuICAgIGhlYWRlck5hdi5jbGFzc05hbWUgPSAnaGVhZGVyLW5hdic7XG5cbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobG9nbyk7XG4gICAgaGVhZGVyTmF2LmFwcGVuZENoaWxkKGhvbWVCdG4pO1xuICAgIGhlYWRlck5hdi5hcHBlbmRDaGlsZChtZW51QnRuKTtcbiAgICBoZWFkZXJOYXYuYXBwZW5kQ2hpbGQoY29udGFjdEJ0bik7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlck5hdik7XG5cbiAgICByZXR1cm4gaGVhZGVyO1xufVxuXG4vKipcbiAqIEluaXRhbGl6ZSBwYWdlIGJ5IGFkZGluZyBmb290ZXIuXG4gKiBAcmV0dXJuIHtzdHJpbmd9IC0gaXMgZm9yIHByb3ZpZGluZyB0aGUgaHRtbCBjb2RlIGZvciB0aGUgZm9vdGVyXG4gKi9cbmZ1bmN0aW9uIGJ1aWxkRm9vdGVyKCkge1xuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xuICAgIGNvbnN0IGNvcHlyaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBjdXJyRGF0ZSA9IG5ldyBEYXRlKCk7XG5cbiAgICBmb290ZXIuaWQgPSBcImZvb3RlclwiO1xuXG4gICAgY29weXJpZ2h0LnRleHRDb250ZW50ID0gYENvcHlyaWdodCDCqSAke2N1cnJEYXRlLmdldEZ1bGxZZWFyKCl9IEpDaG93YFxuXG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKGNvcHlyaWdodCk7XG5cbiAgICByZXR1cm4gZm9vdGVyO1xufVxuXG5leHBvcnQgeyBidWlsZEhlYWRlciwgYnVpbGRGb290ZXIgfTsiLCIvKipcbiAqIERpc3BsYXlzIHRoZSBtZW51XG4gKiBAcmV0dXJuIHtzdHJpbmd9IC0gcmV0dXJucyBpbm5lckhUTUwgb2YgdGhlIG1lbnUgcGFnZVxuICovXG5mdW5jdGlvbiBkaXNwbGF5TWVudSgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgcGFnZVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBjb25zdCBtZW51SXRlbXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBtYWluU3VidGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIGNvbnN0IGRyaW5rU3VidGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuXG4gICAgbWVudUl0ZW1zLmNsYXNzTmFtZSA9IFwiZ3JpZC1kaXZcIjtcblxuICAgIGNvbnN0IG1haW5NZW51SXRlbXMgPSBbXG4gICAgICAgIHtuYW1lOiAnQ2hpY2tlbiBTYW5kd2ljaCcsIHByaWNlOiA4LjkwLCBjYWxvcmllczogMTIwLCBcbiAgICAgICAgaW1hZ2U6ICdodHRwczovL3d3dy5pbmRpYW5oZWFsdGh5cmVjaXBlcy5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMjMvMDkvbWF5by1jaGlja2VuLXNhbmR3aWNoLmpwZy53ZWJwJ30sXG4gICAgICAgIHtuYW1lOiAnQmVlZiBTYW5kd2ljaCcsIHByaWNlOiAxMC45MCwgY2Fsb3JpZXM6IDE0MCwgXG4gICAgICAgIGltYWdlOiAnaHR0cHM6Ly93d3cudGFzdGVvZmhvbWUuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE4LzAxL1Nhdm9yeS1CZWVmLVNhbmR3aWNoZXNfRVhQU19IU0NCWjE3XzkxOTFfQjA3XzI3XzRiLmpwZz9maXQ9NzAwJTJDMTAyNCd9LFxuICAgICAgICB7bmFtZTogJ0JlZWYgYW5kIENoaWNrZW4gU2FuZHdpY2gnLCBwcmljZTogOC45MCwgY2Fsb3JpZXM6IDEyMCwgXG4gICAgICAgIGltYWdlOiAnaHR0cHM6Ly9zb21ldGhpbmdhYm91dHNhbmR3aWNoZXMuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDIxLzA0L2dyaWxsZWQtY2hpY2tlbi1zYW5kd2ljaC5qcGcnfSxcbiAgICBdO1xuICAgIFxuICAgIGNvbnN0IGRyaW5rTWVudUl0ZW1zID0gW1xuICAgICAgICB7bmFtZTogJ0NvZmZlZScsIHByaWNlOiAzLjUwLCBjYWxvcmllczogNSwgXG4gICAgICAgIGltYWdlOiAnaHR0cHM6Ly9pbnNhbmVseWdvb2RyZWNpcGVzLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAyMC8wNy9DdXAtT2YtQ3JlYW15LUNvZmZlZS0xMDI0eDUzNi53ZWJwJ30sXG4gICAgICAgIHtuYW1lOiAnSG9uZyBLb25nIE1pbGsgVGVhJywgcHJpY2U6IDUuNTAsIGNhbG9yaWVzOiA1LCBcbiAgICAgICAgaW1hZ2U6ICdodHRwczovL2Nhcm15eS5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMjEvMTIvSG9uZy1Lb25nLU1pbGstVGVhLTUuanBnJ30sXG4gICAgICAgIHtuYW1lOiAnSnVpY2UnLCBwcmljZTogMi41MCwgY2Fsb3JpZXM6IDIwLCBcbiAgICAgICAgaW1hZ2U6ICdodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zL3RodW1iL2YvZmQvT3JhbmdlX2p1aWNlXzEuanBnLzg0NHB4LU9yYW5nZV9qdWljZV8xLmpwZyd9LFxuICAgIF07XG5cbiAgICBtYWluU3VidGl0bGUuaW5uZXJUZXh0ID0gXCJNYWluc1wiO1xuICAgIG1lbnVJdGVtcy5hcHBlbmRDaGlsZChtYWluU3VidGl0bGUpO1xuICAgIGZvciAobGV0IG4gPSAwOyBuIDwgbWFpbk1lbnVJdGVtcy5sZW5ndGg7IG4rKykge1xuICAgICAgICBjb25zdCBpdGVtSW5mbyA9IG1haW5NZW51SXRlbXNbbl07XG5cbiAgICAgICAgY29uc3QgbWVudUJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBpdGVtTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gICAgICAgIFxuICAgICAgICBtZW51Qm94LmNsYXNzTmFtZSA9IFwibWVudS1pdGVtXCI7XG4gICAgICAgIG1lbnVCb3guc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke2l0ZW1JbmZvLmltYWdlfSlgO1xuICAgICAgICBpdGVtTmFtZS5pbm5lclRleHQgPSBpdGVtSW5mby5uYW1lO1xuXG4gICAgICAgIG1lbnVCb3guYXBwZW5kQ2hpbGQoaXRlbU5hbWUpO1xuICAgICAgICBtZW51SXRlbXMuYXBwZW5kKG1lbnVCb3gpO1xuICAgIH1cblxuICAgIGRyaW5rU3VidGl0bGUuaW5uZXJUZXh0ID0gJ0RyaW5rcyc7XG4gICAgbWVudUl0ZW1zLmFwcGVuZENoaWxkKGRyaW5rU3VidGl0bGUpO1xuICAgIGZvciAobGV0IG4gPSAwOyBuIDwgZHJpbmtNZW51SXRlbXMubGVuZ3RoOyBuKyspIHtcbiAgICAgICAgY29uc3QgaXRlbUluZm8gPSBkcmlua01lbnVJdGVtc1tuXTtcblxuICAgICAgICBjb25zdCBtZW51Qm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IGl0ZW1OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcblxuICAgICAgICBtZW51Qm94LmNsYXNzTmFtZSA9IFwibWVudS1pdGVtXCI7XG4gICAgICAgIG1lbnVCb3guc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke2l0ZW1JbmZvLmltYWdlfSlgO1xuICAgICAgICBpdGVtTmFtZS5pbm5lclRleHQgPSBpdGVtSW5mby5uYW1lO1xuXG4gICAgICAgIG1lbnVCb3guYXBwZW5kQ2hpbGQoaXRlbU5hbWUpO1xuXG4gICAgICAgIG1lbnVJdGVtcy5hcHBlbmQobWVudUJveCk7XG4gICAgfVxuICAgIFxuXG4gICAgcGFnZVRpdGxlLmlubmVyVGV4dCA9IFwiTWVudVwiO1xuXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChwYWdlVGl0bGUpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWVudUl0ZW1zKTtcblxuICAgIHJldHVybiBjb250ZW50LmlubmVySFRNTDtcbn1cblxuZXhwb3J0IHtkaXNwbGF5TWVudX0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGVzL2luZGV4LmNzcyc7XG5pbXBvcnQge2J1aWxkSGVhZGVyLCBidWlsZEZvb3Rlcn0gZnJvbSAnLi9wYWdlcy9pbml0YWxpemUnO1xuaW1wb3J0IHsgZGlzcGxheU1lbnUgfSBmcm9tICcuL3BhZ2VzL21lbnUuanMnO1xuLy8gaW1wb3J0IHtkaXNwbGF5SG9tZX0gZnJvbSAnLi9wYWdlcy9ob21lLmpzJztcblxuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuXG5ib2R5Lmluc2VydEJlZm9yZShidWlsZEhlYWRlcigpLCBjb250ZW50KTtcbmNvbnRlbnQuaW5uZXJIVE1MID0gZGlzcGxheU1lbnUoKTtcbi8vIGNvbnRlbnQuaW5uZXJIVE1MID0gZGlzcGxheUhvbWUoKTtcbmJvZHkuYXBwZW5kQ2hpbGQoYnVpbGRGb290ZXIoKSk7XG4gIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9