(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[33],{

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithoutHoles; });
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inherits.js":
/*!*************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inherits.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_0__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArray; });
function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableSpread; });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectSpread.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectSpread.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectSpread; });
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(Object(source));

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      Object(_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]);
    });
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutProperties; });
/* harmony import */ var _objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = Object(_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutPropertiesLoose; });
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _taggedTemplateLiteral; });
function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _toConsumableArray; });
/* harmony import */ var _arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _iterableToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js");
/* harmony import */ var _nonIterableSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js");



function _toConsumableArray(arr) {
  return Object(_arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(arr) || Object(_nonIterableSpread__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inheritsLoose.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inheritsLoose.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

module.exports = _inheritsLoose;

/***/ }),

/***/ "./node_modules/@emotion/cache/dist/cache.browser.esm.js":
/*!***************************************************************!*\
  !*** ./node_modules/@emotion/cache/dist/cache.browser.esm.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_sheet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/sheet */ "./node_modules/@emotion/sheet/dist/sheet.browser.esm.js");
/* harmony import */ var _emotion_stylis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/stylis */ "./node_modules/@emotion/stylis/dist/stylis.browser.esm.js");
/* harmony import */ var _emotion_weak_memoize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/weak-memoize */ "./node_modules/@emotion/weak-memoize/dist/weak-memoize.browser.esm.js");




// https://github.com/thysultan/stylis.js/tree/master/plugins/rule-sheet
// inlined to avoid umd wrapper and peerDep warnings/installing stylis
// since we use stylis after closure compiler
var delimiter = '/*|*/';
var needle = delimiter + '}';

function toSheet(block) {
  if (block) {
    Sheet.current.insert(block + '}');
  }
}

var Sheet = {
  current: null
};
var ruleSheet = function ruleSheet(context, content, selectors, parents, line, column, length, ns, depth, at) {
  switch (context) {
    // property
    case 1:
      {
        switch (content.charCodeAt(0)) {
          case 64:
            {
              // @import
              Sheet.current.insert(content + ';');
              return '';
            }
          // charcode for l

          case 108:
            {
              // charcode for b
              // this ignores label
              if (content.charCodeAt(2) === 98) {
                return '';
              }
            }
        }

        break;
      }
    // selector

    case 2:
      {
        if (ns === 0) return content + delimiter;
        break;
      }
    // at-rule

    case 3:
      {
        switch (ns) {
          // @font-face, @page
          case 102:
          case 112:
            {
              Sheet.current.insert(selectors[0] + content);
              return '';
            }

          default:
            {
              return content + (at === 0 ? delimiter : '');
            }
        }
      }

    case -2:
      {
        content.split(needle).forEach(toSheet);
      }
  }
};

var createCache = function createCache(options) {
  if (options === undefined) options = {};
  var key = options.key || 'css';
  var stylisOptions;

  if (options.prefix !== undefined) {
    stylisOptions = {
      prefix: options.prefix
    };
  }

  var stylis = new _emotion_stylis__WEBPACK_IMPORTED_MODULE_1__["default"](stylisOptions);

  if (true) {
    // $FlowFixMe
    if (/[^a-z-]/.test(key)) {
      throw new Error("Emotion key must only contain lower case alphabetical characters and - but \"" + key + "\" was passed");
    }
  }

  var inserted = {}; // $FlowFixMe

  var container;

  {
    container = options.container || document.head;
    var nodes = document.querySelectorAll("style[data-emotion-" + key + "]");
    Array.prototype.forEach.call(nodes, function (node) {
      var attrib = node.getAttribute("data-emotion-" + key); // $FlowFixMe

      attrib.split(' ').forEach(function (id) {
        inserted[id] = true;
      });

      if (node.parentNode !== container) {
        container.appendChild(node);
      }
    });
  }

  var _insert;

  {
    stylis.use(options.stylisPlugins)(ruleSheet);

    _insert = function insert(selector, serialized, sheet, shouldCache) {
      var name = serialized.name;
      Sheet.current = sheet;

      if ( true && serialized.map !== undefined) {
        var map = serialized.map;
        Sheet.current = {
          insert: function insert(rule) {
            sheet.insert(rule + map);
          }
        };
      }

      stylis(selector, serialized.styles);

      if (shouldCache) {
        cache.inserted[name] = true;
      }
    };
  }

  if (true) {
    // https://esbench.com/bench/5bf7371a4cd7e6009ef61d0a
    var commentStart = /\/\*/g;
    var commentEnd = /\*\//g;
    stylis.use(function (context, content) {
      switch (context) {
        case -1:
          {
            while (commentStart.test(content)) {
              commentEnd.lastIndex = commentStart.lastIndex;

              if (commentEnd.test(content)) {
                commentStart.lastIndex = commentEnd.lastIndex;
                continue;
              }

              throw new Error('Your styles have an unterminated comment ("/*" without corresponding "*/").');
            }

            commentStart.lastIndex = 0;
            break;
          }
      }
    });
    stylis.use(function (context, content, selectors) {
      switch (context) {
        case -1:
          {
            var flag = 'emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason';
            var unsafePseudoClasses = content.match(/(:first|:nth|:nth-last)-child/g);

            if (unsafePseudoClasses && cache.compat !== true) {
              unsafePseudoClasses.forEach(function (unsafePseudoClass) {
                var ignoreRegExp = new RegExp(unsafePseudoClass + ".*\\/\\* " + flag + " \\*\\/");
                var ignore = ignoreRegExp.test(content);

                if (unsafePseudoClass && !ignore) {
                  console.error("The pseudo class \"" + unsafePseudoClass + "\" is potentially unsafe when doing server-side rendering. Try changing it to \"" + unsafePseudoClass.split('-child')[0] + "-of-type\".");
                }
              });
            }

            break;
          }
      }
    });
  }

  var cache = {
    key: key,
    sheet: new _emotion_sheet__WEBPACK_IMPORTED_MODULE_0__["StyleSheet"]({
      key: key,
      container: container,
      nonce: options.nonce,
      speedy: options.speedy
    }),
    nonce: options.nonce,
    inserted: inserted,
    registered: {},
    insert: _insert
  };
  return cache;
};

/* harmony default export */ __webpack_exports__["default"] = (createCache);


/***/ }),

/***/ "./node_modules/@emotion/core/dist/core.browser.esm.js":
/*!*************************************************************!*\
  !*** ./node_modules/@emotion/core/dist/core.browser.esm.js ***!
  \*************************************************************/
/*! exports provided: css, CacheProvider, ClassNames, Global, ThemeContext, jsx, keyframes, withEmotionCache */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CacheProvider", function() { return CacheProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassNames", function() { return ClassNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Global", function() { return Global; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeContext", function() { return ThemeContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jsx", function() { return jsx; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyframes", function() { return keyframes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withEmotionCache", function() { return withEmotionCache; });
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/cache */ "./node_modules/@emotion/cache/dist/cache.browser.esm.js");
/* harmony import */ var _emotion_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/utils */ "./node_modules/@emotion/utils/dist/utils.browser.esm.js");
/* harmony import */ var _emotion_serialize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/serialize */ "./node_modules/@emotion/serialize/dist/serialize.browser.esm.js");
/* harmony import */ var _emotion_sheet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/sheet */ "./node_modules/@emotion/sheet/dist/sheet.browser.esm.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @emotion/css */ "./node_modules/@emotion/css/dist/css.browser.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "css", function() { return _emotion_css__WEBPACK_IMPORTED_MODULE_6__["default"]; });










var EmotionCacheContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])( // we're doing this to avoid preconstruct's dead code elimination in this one case
// because this module is primarily intended for the browser and node
// but it's also required in react native and similar environments sometimes
// and we could have a special build just for that
// but this is much easier and the native packages
// might use a different theme context in the future anyway
typeof HTMLElement !== 'undefined' ? Object(_emotion_cache__WEBPACK_IMPORTED_MODULE_2__["default"])() : null);
var ThemeContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])({});
var CacheProvider = EmotionCacheContext.Provider;

var withEmotionCache = function withEmotionCache(func) {
  var render = function render(props, ref) {
    return Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(EmotionCacheContext.Consumer, null, function (cache) {
      return func(props, cache, ref);
    });
  }; // $FlowFixMe


  return Object(react__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(render);
};

// thus we only need to replace what is a valid character for JS, but not for CSS

var sanitizeIdentifier = function sanitizeIdentifier(identifier) {
  return identifier.replace(/\$/g, '-');
};

var typePropName = '__EMOTION_TYPE_PLEASE_DO_NOT_USE__';
var labelPropName = '__EMOTION_LABEL_PLEASE_DO_NOT_USE__';
var hasOwnProperty = Object.prototype.hasOwnProperty;

var render = function render(cache, props, theme, ref) {
  var cssProp = theme === null ? props.css : props.css(theme); // so that using `css` from `emotion` and passing the result to the css prop works
  // not passing the registered cache to serializeStyles because it would
  // make certain babel optimisations not possible

  if (typeof cssProp === 'string' && cache.registered[cssProp] !== undefined) {
    cssProp = cache.registered[cssProp];
  }

  var type = props[typePropName];
  var registeredStyles = [cssProp];
  var className = '';

  if (typeof props.className === 'string') {
    className = Object(_emotion_utils__WEBPACK_IMPORTED_MODULE_3__["getRegisteredStyles"])(cache.registered, registeredStyles, props.className);
  } else if (props.className != null) {
    className = props.className + " ";
  }

  var serialized = Object(_emotion_serialize__WEBPACK_IMPORTED_MODULE_4__["serializeStyles"])(registeredStyles);

  if ( true && serialized.name.indexOf('-') === -1) {
    var labelFromStack = props[labelPropName];

    if (labelFromStack) {
      serialized = Object(_emotion_serialize__WEBPACK_IMPORTED_MODULE_4__["serializeStyles"])([serialized, 'label:' + labelFromStack + ';']);
    }
  }

  var rules = Object(_emotion_utils__WEBPACK_IMPORTED_MODULE_3__["insertStyles"])(cache, serialized, typeof type === 'string');
  className += cache.key + "-" + serialized.name;
  var newProps = {};

  for (var key in props) {
    if (hasOwnProperty.call(props, key) && key !== 'css' && key !== typePropName && ( false || key !== labelPropName)) {
      newProps[key] = props[key];
    }
  }

  newProps.ref = ref;
  newProps.className = className;
  var ele = Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(type, newProps);

  return ele;
};

var Emotion =
/* #__PURE__ */
withEmotionCache(function (props, cache, ref) {
  // use Context.read for the theme when it's stable
  if (typeof props.css === 'function') {
    return Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ThemeContext.Consumer, null, function (theme) {
      return render(cache, props, theme, ref);
    });
  }

  return render(cache, props, null, ref);
});

if (true) {
  Emotion.displayName = 'EmotionCssPropInternal';
} // $FlowFixMe


var jsx = function jsx(type, props) {
  var args = arguments;

  if (props == null || !hasOwnProperty.call(props, 'css')) {
    // $FlowFixMe
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"].apply(undefined, args);
  }

  if ( true && typeof props.css === 'string' && // check if there is a css declaration
  props.css.indexOf(':') !== -1) {
    throw new Error("Strings are not allowed as css prop values, please wrap it in a css template literal from '@emotion/css' like this: css`" + props.css + "`");
  }

  var argsLength = args.length;
  var createElementArgArray = new Array(argsLength);
  createElementArgArray[0] = Emotion;
  var newProps = {};

  for (var key in props) {
    if (hasOwnProperty.call(props, key)) {
      newProps[key] = props[key];
    }
  }

  newProps[typePropName] = type;

  if (true) {
    var error = new Error();

    if (error.stack) {
      // chrome
      var match = error.stack.match(/at (?:Object\.|)jsx.*\n\s+at ([A-Z][A-Za-z$]+) /);

      if (!match) {
        // safari and firefox
        match = error.stack.match(/^.*\n([A-Z][A-Za-z$]+)@/);
      }

      if (match) {
        newProps[labelPropName] = sanitizeIdentifier(match[1]);
      }
    }
  }

  createElementArgArray[1] = newProps;

  for (var i = 2; i < argsLength; i++) {
    createElementArgArray[i] = args[i];
  } // $FlowFixMe


  return react__WEBPACK_IMPORTED_MODULE_1__["createElement"].apply(null, createElementArgArray);
};

var warnedAboutCssPropForGlobal = false;
var Global =
/* #__PURE__ */
withEmotionCache(function (props, cache) {
  if ( true && !warnedAboutCssPropForGlobal && ( // check for className as well since the user is
  // probably using the custom createElement which
  // means it will be turned into a className prop
  // $FlowFixMe I don't really want to add it to the type since it shouldn't be used
  props.className || props.css)) {
    console.error("It looks like you're using the css prop on Global, did you mean to use the styles prop instead?");
    warnedAboutCssPropForGlobal = true;
  }

  var styles = props.styles;

  if (typeof styles === 'function') {
    return Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ThemeContext.Consumer, null, function (theme) {
      var serialized = Object(_emotion_serialize__WEBPACK_IMPORTED_MODULE_4__["serializeStyles"])([styles(theme)]);
      return Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InnerGlobal, {
        serialized: serialized,
        cache: cache
      });
    });
  }

  var serialized = Object(_emotion_serialize__WEBPACK_IMPORTED_MODULE_4__["serializeStyles"])([styles]);
  return Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InnerGlobal, {
    serialized: serialized,
    cache: cache
  });
});

// maintain place over rerenders.
// initial render from browser, insertBefore context.sheet.tags[0] or if a style hasn't been inserted there yet, appendChild
// initial client-side render from SSR, use place of hydrating tag
var InnerGlobal =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(InnerGlobal, _React$Component);

  function InnerGlobal(props, context, updater) {
    return _React$Component.call(this, props, context, updater) || this;
  }

  var _proto = InnerGlobal.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.sheet = new _emotion_sheet__WEBPACK_IMPORTED_MODULE_5__["StyleSheet"]({
      key: this.props.cache.key + "-global",
      nonce: this.props.cache.sheet.nonce,
      container: this.props.cache.sheet.container
    }); // $FlowFixMe

    var node = document.querySelector("style[data-emotion-" + this.props.cache.key + "=\"" + this.props.serialized.name + "\"]");

    if (node !== null) {
      this.sheet.tags.push(node);
    }

    if (this.props.cache.sheet.tags.length) {
      this.sheet.before = this.props.cache.sheet.tags[0];
    }

    this.insertStyles();
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (prevProps.serialized.name !== this.props.serialized.name) {
      this.insertStyles();
    }
  };

  _proto.insertStyles = function insertStyles$1() {
    if (this.props.serialized.next !== undefined) {
      // insert keyframes
      Object(_emotion_utils__WEBPACK_IMPORTED_MODULE_3__["insertStyles"])(this.props.cache, this.props.serialized.next, true);
    }

    if (this.sheet.tags.length) {
      // if this doesn't exist then it will be null so the style element will be appended
      var element = this.sheet.tags[this.sheet.tags.length - 1].nextElementSibling;
      this.sheet.before = element;
      this.sheet.flush();
    }

    this.props.cache.insert("", this.props.serialized, this.sheet, false);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.sheet.flush();
  };

  _proto.render = function render() {

    return null;
  };

  return InnerGlobal;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

var keyframes = function keyframes() {
  var insertable = _emotion_css__WEBPACK_IMPORTED_MODULE_6__["default"].apply(void 0, arguments);
  var name = "animation-" + insertable.name; // $FlowFixMe

  return {
    name: name,
    styles: "@keyframes " + name + "{" + insertable.styles + "}",
    anim: 1,
    toString: function toString() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
};

var classnames = function classnames(args) {
  var len = args.length;
  var i = 0;
  var cls = '';

  for (; i < len; i++) {
    var arg = args[i];
    if (arg == null) continue;
    var toAdd = void 0;

    switch (typeof arg) {
      case 'boolean':
        break;

      case 'object':
        {
          if (Array.isArray(arg)) {
            toAdd = classnames(arg);
          } else {
            toAdd = '';

            for (var k in arg) {
              if (arg[k] && k) {
                toAdd && (toAdd += ' ');
                toAdd += k;
              }
            }
          }

          break;
        }

      default:
        {
          toAdd = arg;
        }
    }

    if (toAdd) {
      cls && (cls += ' ');
      cls += toAdd;
    }
  }

  return cls;
};

function merge(registered, css, className) {
  var registeredStyles = [];
  var rawClassName = Object(_emotion_utils__WEBPACK_IMPORTED_MODULE_3__["getRegisteredStyles"])(registered, registeredStyles, className);

  if (registeredStyles.length < 2) {
    return className;
  }

  return rawClassName + css(registeredStyles);
}

var ClassNames = withEmotionCache(function (props, context) {
  return Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ThemeContext.Consumer, null, function (theme) {
    var hasRendered = false;

    var css = function css() {
      if (hasRendered && "development" !== 'production') {
        throw new Error('css can only be used during render');
      }

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      var serialized = Object(_emotion_serialize__WEBPACK_IMPORTED_MODULE_4__["serializeStyles"])(args, context.registered);

      {
        Object(_emotion_utils__WEBPACK_IMPORTED_MODULE_3__["insertStyles"])(context, serialized, false);
      }

      return context.key + "-" + serialized.name;
    };

    var cx = function cx() {
      if (hasRendered && "development" !== 'production') {
        throw new Error('cx can only be used during render');
      }

      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return merge(context.registered, css, classnames(args));
    };

    var content = {
      css: css,
      cx: cx,
      theme: theme
    };
    var ele = props.children(content);
    hasRendered = true;

    return ele;
  });
});




/***/ }),

/***/ "./node_modules/@emotion/css/dist/css.browser.esm.js":
/*!***********************************************************!*\
  !*** ./node_modules/@emotion/css/dist/css.browser.esm.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_serialize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/serialize */ "./node_modules/@emotion/serialize/dist/serialize.browser.esm.js");


function css() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return Object(_emotion_serialize__WEBPACK_IMPORTED_MODULE_0__["serializeStyles"])(args);
}

/* harmony default export */ __webpack_exports__["default"] = (css);


/***/ }),

/***/ "./node_modules/@emotion/hash/dist/hash.browser.esm.js":
/*!*************************************************************!*\
  !*** ./node_modules/@emotion/hash/dist/hash.browser.esm.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* eslint-disable */
// murmurhash2 via https://github.com/garycourt/murmurhash-js/blob/master/murmurhash2_gc.js
function murmurhash2_32_gc(str) {
  var l = str.length,
      h = l ^ l,
      i = 0,
      k;

  while (l >= 4) {
    k = str.charCodeAt(i) & 0xff | (str.charCodeAt(++i) & 0xff) << 8 | (str.charCodeAt(++i) & 0xff) << 16 | (str.charCodeAt(++i) & 0xff) << 24;
    k = (k & 0xffff) * 0x5bd1e995 + (((k >>> 16) * 0x5bd1e995 & 0xffff) << 16);
    k ^= k >>> 24;
    k = (k & 0xffff) * 0x5bd1e995 + (((k >>> 16) * 0x5bd1e995 & 0xffff) << 16);
    h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0x5bd1e995 & 0xffff) << 16) ^ k;
    l -= 4;
    ++i;
  }

  switch (l) {
    case 3:
      h ^= (str.charCodeAt(i + 2) & 0xff) << 16;

    case 2:
      h ^= (str.charCodeAt(i + 1) & 0xff) << 8;

    case 1:
      h ^= str.charCodeAt(i) & 0xff;
      h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0x5bd1e995 & 0xffff) << 16);
  }

  h ^= h >>> 13;
  h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0x5bd1e995 & 0xffff) << 16);
  h ^= h >>> 15;
  return (h >>> 0).toString(36);
}

/* harmony default export */ __webpack_exports__["default"] = (murmurhash2_32_gc);


/***/ }),

/***/ "./node_modules/@emotion/memoize/dist/memoize.browser.esm.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@emotion/memoize/dist/memoize.browser.esm.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function memoize(fn) {
  var cache = {};
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

/* harmony default export */ __webpack_exports__["default"] = (memoize);


/***/ }),

/***/ "./node_modules/@emotion/serialize/dist/serialize.browser.esm.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@emotion/serialize/dist/serialize.browser.esm.js ***!
  \***********************************************************************/
/*! exports provided: serializeStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "serializeStyles", function() { return serializeStyles; });
/* harmony import */ var _emotion_hash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/hash */ "./node_modules/@emotion/hash/dist/hash.browser.esm.js");
/* harmony import */ var _emotion_unitless__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/unitless */ "./node_modules/@emotion/unitless/dist/unitless.browser.esm.js");
/* harmony import */ var _emotion_memoize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/memoize */ "./node_modules/@emotion/memoize/dist/memoize.browser.esm.js");




var ILLEGAL_ESCAPE_SEQUENCE_ERROR = "You have illegal escape sequence in your template literal, most likely inside content's property value.\nBecause you write your CSS inside a JavaScript string you actually have to do double escaping, so for example \"content: '\\00d7';\" should become \"content: '\\\\00d7';\".\nYou can read more about this here:\nhttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences";
var UNDEFINED_AS_OBJECT_KEY_ERROR = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).";
var hyphenateRegex = /[A-Z]|^ms/g;
var animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g;

var isCustomProperty = function isCustomProperty(property) {
  return property.charCodeAt(1) === 45;
};

var isProcessableValue = function isProcessableValue(value) {
  return value != null && typeof value !== 'boolean';
};

var processStyleName = Object(_emotion_memoize__WEBPACK_IMPORTED_MODULE_2__["default"])(function (styleName) {
  return isCustomProperty(styleName) ? styleName : styleName.replace(hyphenateRegex, '-$&').toLowerCase();
});

var processStyleValue = function processStyleValue(key, value) {
  switch (key) {
    case 'animation':
    case 'animationName':
      {
        if (typeof value === 'string') {
          return value.replace(animationRegex, function (match, p1, p2) {
            cursor = {
              name: p1,
              styles: p2,
              next: cursor
            };
            return p1;
          });
        }
      }
  }

  if (_emotion_unitless__WEBPACK_IMPORTED_MODULE_1__["default"][key] !== 1 && !isCustomProperty(key) && typeof value === 'number' && value !== 0) {
    return value + 'px';
  }

  return value;
};

if (true) {
  var contentValuePattern = /(attr|calc|counters?|url)\(/;
  var contentValues = ['normal', 'none', 'counter', 'open-quote', 'close-quote', 'no-open-quote', 'no-close-quote', 'initial', 'inherit', 'unset'];
  var oldProcessStyleValue = processStyleValue;
  var msPattern = /^-ms-/;
  var hyphenPattern = /-(.)/g;
  var hyphenatedCache = {};

  processStyleValue = function processStyleValue(key, value) {
    if (key === 'content') {
      if (typeof value !== 'string' || contentValues.indexOf(value) === -1 && !contentValuePattern.test(value) && (value.charAt(0) !== value.charAt(value.length - 1) || value.charAt(0) !== '"' && value.charAt(0) !== "'")) {
        console.error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + value + "\"'`");
      }
    }

    var processed = oldProcessStyleValue(key, value);

    if (processed !== '' && !isCustomProperty(key) && key.indexOf('-') !== -1 && hyphenatedCache[key] === undefined) {
      hyphenatedCache[key] = true;
      console.error("Using kebab-case for css properties in objects is not supported. Did you mean " + key.replace(msPattern, 'ms-').replace(hyphenPattern, function (str, _char) {
        return _char.toUpperCase();
      }) + "?");
    }

    return processed;
  };
}

var shouldWarnAboutInterpolatingClassNameFromCss = true;

function handleInterpolation(mergedProps, registered, interpolation, couldBeSelectorInterpolation) {
  if (interpolation == null) {
    return '';
  }

  if (interpolation.__emotion_styles !== undefined) {
    if ( true && interpolation.toString() === 'NO_COMPONENT_SELECTOR') {
      throw new Error('Component selectors can only be used in conjunction with babel-plugin-emotion.');
    }

    return interpolation;
  }

  switch (typeof interpolation) {
    case 'boolean':
      {
        return '';
      }

    case 'object':
      {
        if (interpolation.anim === 1) {
          cursor = {
            name: interpolation.name,
            styles: interpolation.styles,
            next: cursor
          };
          return interpolation.name;
        }

        if (interpolation.styles !== undefined) {
          var next = interpolation.next;

          if (next !== undefined) {
            // not the most efficient thing ever but this is a pretty rare case
            // and there will be very few iterations of this generally
            while (next !== undefined) {
              cursor = {
                name: next.name,
                styles: next.styles,
                next: cursor
              };
              next = next.next;
            }
          }

          var styles = interpolation.styles + ";";

          if ( true && interpolation.map !== undefined) {
            styles += interpolation.map;
          }

          return styles;
        }

        return createStringFromObject(mergedProps, registered, interpolation);
      }

    case 'function':
      {
        if (mergedProps !== undefined) {
          var previousCursor = cursor;
          var result = interpolation(mergedProps);
          cursor = previousCursor;
          return handleInterpolation(mergedProps, registered, result, couldBeSelectorInterpolation);
        } else if (true) {
          console.error('Functions that are interpolated in css calls will be stringified.\n' + 'If you want to have a css call based on props, create a function that returns a css call like this\n' + 'let dynamicStyle = (props) => css`color: ${props.color}`\n' + 'It can be called directly with props or interpolated in a styled call like this\n' + "let SomeComponent = styled('div')`${dynamicStyle}`");
        }

        break;
      }

    case 'string':
      if (true) {
        var matched = [];
        var replaced = interpolation.replace(animationRegex, function (match, p1, p2) {
          var fakeVarName = "animation" + matched.length;
          matched.push("const " + fakeVarName + " = keyframes`" + p2.replace(/^@keyframes animation-\w+/, '') + "`");
          return "${" + fakeVarName + "}";
        });

        if (matched.length) {
          console.error('`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\n' + 'Instead of doing this:\n\n' + [].concat(matched, ["`" + replaced + "`"]).join('\n') + '\n\nYou should wrap it with `css` like this:\n\n' + ("css`" + replaced + "`"));
        }
      }

      break;
  } // finalize string values (regular strings and functions interpolated into css calls)


  if (registered == null) {
    return interpolation;
  }

  var cached = registered[interpolation];

  if ( true && couldBeSelectorInterpolation && shouldWarnAboutInterpolatingClassNameFromCss && cached !== undefined) {
    console.error('Interpolating a className from css`` is not recommended and will cause problems with composition.\n' + 'Interpolating a className from css`` will be completely unsupported in a future major version of Emotion');
    shouldWarnAboutInterpolatingClassNameFromCss = false;
  }

  return cached !== undefined && !couldBeSelectorInterpolation ? cached : interpolation;
}

function createStringFromObject(mergedProps, registered, obj) {
  var string = '';

  if (Array.isArray(obj)) {
    for (var i = 0; i < obj.length; i++) {
      string += handleInterpolation(mergedProps, registered, obj[i], false);
    }
  } else {
    for (var _key in obj) {
      var value = obj[_key];

      if (typeof value !== 'object') {
        if (registered != null && registered[value] !== undefined) {
          string += _key + "{" + registered[value] + "}";
        } else if (isProcessableValue(value)) {
          string += processStyleName(_key) + ":" + processStyleValue(_key, value) + ";";
        }
      } else {
        if (_key === 'NO_COMPONENT_SELECTOR' && "development" !== 'production') {
          throw new Error('Component selectors can only be used in conjunction with babel-plugin-emotion.');
        }

        if (Array.isArray(value) && typeof value[0] === 'string' && (registered == null || registered[value[0]] === undefined)) {
          for (var _i = 0; _i < value.length; _i++) {
            if (isProcessableValue(value[_i])) {
              string += processStyleName(_key) + ":" + processStyleValue(_key, value[_i]) + ";";
            }
          }
        } else {
          var interpolated = handleInterpolation(mergedProps, registered, value, false);

          switch (_key) {
            case 'animation':
            case 'animationName':
              {
                string += processStyleName(_key) + ":" + interpolated + ";";
                break;
              }

            default:
              {
                if ( true && _key === 'undefined') {
                  console.error(UNDEFINED_AS_OBJECT_KEY_ERROR);
                }

                string += _key + "{" + interpolated + "}";
              }
          }
        }
      }
    }
  }

  return string;
}

var labelPattern = /label:\s*([^\s;\n{]+)\s*;/g;
var sourceMapPattern;

if (true) {
  sourceMapPattern = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//;
} // this is the cursor for keyframes
// keyframes are stored on the SerializedStyles object as a linked list


var cursor;
var serializeStyles = function serializeStyles(args, registered, mergedProps) {
  if (args.length === 1 && typeof args[0] === 'object' && args[0] !== null && args[0].styles !== undefined) {
    return args[0];
  }

  var stringMode = true;
  var styles = '';
  cursor = undefined;
  var strings = args[0];

  if (strings == null || strings.raw === undefined) {
    stringMode = false;
    styles += handleInterpolation(mergedProps, registered, strings, false);
  } else {
    if ( true && strings[0] === undefined) {
      console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
    }

    styles += strings[0];
  } // we start at 1 since we've already handled the first arg


  for (var i = 1; i < args.length; i++) {
    styles += handleInterpolation(mergedProps, registered, args[i], styles.charCodeAt(styles.length - 1) === 46);

    if (stringMode) {
      if ( true && strings[i] === undefined) {
        console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
      }

      styles += strings[i];
    }
  }

  var sourceMap;

  if (true) {
    styles = styles.replace(sourceMapPattern, function (match) {
      sourceMap = match;
      return '';
    });
  } // using a global regex with .exec is stateful so lastIndex has to be reset each time


  labelPattern.lastIndex = 0;
  var identifierName = '';
  var match; // https://esbench.com/bench/5b809c2cf2949800a0f61fb5

  while ((match = labelPattern.exec(styles)) !== null) {
    identifierName += '-' + // $FlowFixMe we know it's not null
    match[1];
  }

  var name = Object(_emotion_hash__WEBPACK_IMPORTED_MODULE_0__["default"])(styles) + identifierName;

  if (true) {
    // $FlowFixMe SerializedStyles type doesn't have toString property (and we don't want to add it)
    return {
      name: name,
      styles: styles,
      map: sourceMap,
      next: cursor,
      toString: function toString() {
        return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
      }
    };
  }

  return {
    name: name,
    styles: styles,
    next: cursor
  };
};




/***/ }),

/***/ "./node_modules/@emotion/sheet/dist/sheet.browser.esm.js":
/*!***************************************************************!*\
  !*** ./node_modules/@emotion/sheet/dist/sheet.browser.esm.js ***!
  \***************************************************************/
/*! exports provided: StyleSheet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleSheet", function() { return StyleSheet; });
/*

Based off glamor's StyleSheet, thanks Sunil ❤️

high performance StyleSheet for css-in-js systems

- uses multiple style tags behind the scenes for millions of rules
- uses `insertRule` for appending in production for *much* faster performance

// usage

import { StyleSheet } from '@emotion/sheet'

let styleSheet = new StyleSheet({ key: '', container: document.head })

styleSheet.insert('#box { border: 1px solid red; }')
- appends a css rule into the stylesheet

styleSheet.flush()
- empties the stylesheet of all its contents

*/
// $FlowFixMe
function sheetForTag(tag) {
  if (tag.sheet) {
    // $FlowFixMe
    return tag.sheet;
  } // this weirdness brought to you by firefox

  /* istanbul ignore next */


  for (var i = 0; i < document.styleSheets.length; i++) {
    if (document.styleSheets[i].ownerNode === tag) {
      // $FlowFixMe
      return document.styleSheets[i];
    }
  }
}

function createStyleElement(options) {
  var tag = document.createElement('style');
  tag.setAttribute('data-emotion', options.key);

  if (options.nonce !== undefined) {
    tag.setAttribute('nonce', options.nonce);
  }

  tag.appendChild(document.createTextNode(''));
  return tag;
}

var StyleSheet =
/*#__PURE__*/
function () {
  function StyleSheet(options) {
    this.isSpeedy = options.speedy === undefined ? "development" === 'production' : options.speedy;
    this.tags = [];
    this.ctr = 0;
    this.nonce = options.nonce; // key is the value of the data-emotion attribute, it's used to identify different sheets

    this.key = options.key;
    this.container = options.container;
    this.before = null;
  }

  var _proto = StyleSheet.prototype;

  _proto.insert = function insert(rule) {
    // the max length is how many rules we have per style tag, it's 65000 in speedy mode
    // it's 1 in dev because we insert source maps that map a single rule to a location
    // and you can only have one source map per style tag
    if (this.ctr % (this.isSpeedy ? 65000 : 1) === 0) {
      var _tag = createStyleElement(this);

      var before;

      if (this.tags.length === 0) {
        before = this.before;
      } else {
        before = this.tags[this.tags.length - 1].nextSibling;
      }

      this.container.insertBefore(_tag, before);
      this.tags.push(_tag);
    }

    var tag = this.tags[this.tags.length - 1];

    if (this.isSpeedy) {
      var sheet = sheetForTag(tag);

      try {
        // this is a really hot path
        // we check the second character first because having "i"
        // as the second character will happen less often than
        // having "@" as the first character
        var isImportRule = rule.charCodeAt(1) === 105 && rule.charCodeAt(0) === 64; // this is the ultrafast version, works across browsers
        // the big drawback is that the css won't be editable in devtools

        sheet.insertRule(rule, // we need to insert @import rules before anything else
        // otherwise there will be an error
        // technically this means that the @import rules will
        // _usually_(not always since there could be multiple style tags)
        // be the first ones in prod and generally later in dev
        // this shouldn't really matter in the real world though
        // @import is generally only used for font faces from google fonts and etc.
        // so while this could be technically correct then it would be slower and larger
        // for a tiny bit of correctness that won't matter in the real world
        isImportRule ? 0 : sheet.cssRules.length);
      } catch (e) {
        if (true) {
          console.warn("There was a problem inserting the following rule: \"" + rule + "\"", e);
        }
      }
    } else {
      tag.appendChild(document.createTextNode(rule));
    }

    this.ctr++;
  };

  _proto.flush = function flush() {
    // $FlowFixMe
    this.tags.forEach(function (tag) {
      return tag.parentNode.removeChild(tag);
    });
    this.tags = [];
    this.ctr = 0;
  };

  return StyleSheet;
}();




/***/ }),

/***/ "./node_modules/@emotion/stylis/dist/stylis.browser.esm.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@emotion/stylis/dist/stylis.browser.esm.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function stylis_min (W) {
  function M(d, c, e, h, a) {
    for (var m = 0, b = 0, v = 0, n = 0, q, g, x = 0, K = 0, k, u = k = q = 0, l = 0, r = 0, I = 0, t = 0, B = e.length, J = B - 1, y, f = '', p = '', F = '', G = '', C; l < B;) {
      g = e.charCodeAt(l);
      l === J && 0 !== b + n + v + m && (0 !== b && (g = 47 === b ? 10 : 47), n = v = m = 0, B++, J++);

      if (0 === b + n + v + m) {
        if (l === J && (0 < r && (f = f.replace(N, '')), 0 < f.trim().length)) {
          switch (g) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;

            default:
              f += e.charAt(l);
          }

          g = 59;
        }

        switch (g) {
          case 123:
            f = f.trim();
            q = f.charCodeAt(0);
            k = 1;

            for (t = ++l; l < B;) {
              switch (g = e.charCodeAt(l)) {
                case 123:
                  k++;
                  break;

                case 125:
                  k--;
                  break;

                case 47:
                  switch (g = e.charCodeAt(l + 1)) {
                    case 42:
                    case 47:
                      a: {
                        for (u = l + 1; u < J; ++u) {
                          switch (e.charCodeAt(u)) {
                            case 47:
                              if (42 === g && 42 === e.charCodeAt(u - 1) && l + 2 !== u) {
                                l = u + 1;
                                break a;
                              }

                              break;

                            case 10:
                              if (47 === g) {
                                l = u + 1;
                                break a;
                              }

                          }
                        }

                        l = u;
                      }

                  }

                  break;

                case 91:
                  g++;

                case 40:
                  g++;

                case 34:
                case 39:
                  for (; l++ < J && e.charCodeAt(l) !== g;) {
                  }

              }

              if (0 === k) break;
              l++;
            }

            k = e.substring(t, l);
            0 === q && (q = (f = f.replace(ca, '').trim()).charCodeAt(0));

            switch (q) {
              case 64:
                0 < r && (f = f.replace(N, ''));
                g = f.charCodeAt(1);

                switch (g) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    r = c;
                    break;

                  default:
                    r = O;
                }

                k = M(c, r, k, g, a + 1);
                t = k.length;
                0 < A && (r = X(O, f, I), C = H(3, k, r, c, D, z, t, g, a, h), f = r.join(''), void 0 !== C && 0 === (t = (k = C.trim()).length) && (g = 0, k = ''));
                if (0 < t) switch (g) {
                  case 115:
                    f = f.replace(da, ea);

                  case 100:
                  case 109:
                  case 45:
                    k = f + '{' + k + '}';
                    break;

                  case 107:
                    f = f.replace(fa, '$1 $2');
                    k = f + '{' + k + '}';
                    k = 1 === w || 2 === w && L('@' + k, 3) ? '@-webkit-' + k + '@' + k : '@' + k;
                    break;

                  default:
                    k = f + k, 112 === h && (k = (p += k, ''));
                } else k = '';
                break;

              default:
                k = M(c, X(c, f, I), k, h, a + 1);
            }

            F += k;
            k = I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
            break;

          case 125:
          case 59:
            f = (0 < r ? f.replace(N, '') : f).trim();
            if (1 < (t = f.length)) switch (0 === u && (q = f.charCodeAt(0), 45 === q || 96 < q && 123 > q) && (t = (f = f.replace(' ', ':')).length), 0 < A && void 0 !== (C = H(1, f, c, d, D, z, p.length, h, a, h)) && 0 === (t = (f = C.trim()).length) && (f = '\x00\x00'), q = f.charCodeAt(0), g = f.charCodeAt(1), q) {
              case 0:
                break;

              case 64:
                if (105 === g || 99 === g) {
                  G += f + e.charAt(l);
                  break;
                }

              default:
                58 !== f.charCodeAt(t - 1) && (p += P(f, q, g, f.charCodeAt(2)));
            }
            I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
        }
      }

      switch (g) {
        case 13:
        case 10:
          47 === b ? b = 0 : 0 === 1 + q && 107 !== h && 0 < f.length && (r = 1, f += '\x00');
          0 < A * Y && H(0, f, c, d, D, z, p.length, h, a, h);
          z = 1;
          D++;
          break;

        case 59:
        case 125:
          if (0 === b + n + v + m) {
            z++;
            break;
          }

        default:
          z++;
          y = e.charAt(l);

          switch (g) {
            case 9:
            case 32:
              if (0 === n + m + b) switch (x) {
                case 44:
                case 58:
                case 9:
                case 32:
                  y = '';
                  break;

                default:
                  32 !== g && (y = ' ');
              }
              break;

            case 0:
              y = '\\0';
              break;

            case 12:
              y = '\\f';
              break;

            case 11:
              y = '\\v';
              break;

            case 38:
              0 === n + b + m && (r = I = 1, y = '\f' + y);
              break;

            case 108:
              if (0 === n + b + m + E && 0 < u) switch (l - u) {
                case 2:
                  112 === x && 58 === e.charCodeAt(l - 3) && (E = x);

                case 8:
                  111 === K && (E = K);
              }
              break;

            case 58:
              0 === n + b + m && (u = l);
              break;

            case 44:
              0 === b + v + n + m && (r = 1, y += '\r');
              break;

            case 34:
            case 39:
              0 === b && (n = n === g ? 0 : 0 === n ? g : n);
              break;

            case 91:
              0 === n + b + v && m++;
              break;

            case 93:
              0 === n + b + v && m--;
              break;

            case 41:
              0 === n + b + m && v--;
              break;

            case 40:
              if (0 === n + b + m) {
                if (0 === q) switch (2 * x + 3 * K) {
                  case 533:
                    break;

                  default:
                    q = 1;
                }
                v++;
              }

              break;

            case 64:
              0 === b + v + n + m + u + k && (k = 1);
              break;

            case 42:
            case 47:
              if (!(0 < n + m + v)) switch (b) {
                case 0:
                  switch (2 * g + 3 * e.charCodeAt(l + 1)) {
                    case 235:
                      b = 47;
                      break;

                    case 220:
                      t = l, b = 42;
                  }

                  break;

                case 42:
                  47 === g && 42 === x && t + 2 !== l && (33 === e.charCodeAt(t + 2) && (p += e.substring(t, l + 1)), y = '', b = 0);
              }
          }

          0 === b && (f += y);
      }

      K = x;
      x = g;
      l++;
    }

    t = p.length;

    if (0 < t) {
      r = c;
      if (0 < A && (C = H(2, p, r, d, D, z, t, h, a, h), void 0 !== C && 0 === (p = C).length)) return G + p + F;
      p = r.join(',') + '{' + p + '}';

      if (0 !== w * E) {
        2 !== w || L(p, 2) || (E = 0);

        switch (E) {
          case 111:
            p = p.replace(ha, ':-moz-$1') + p;
            break;

          case 112:
            p = p.replace(Q, '::-webkit-input-$1') + p.replace(Q, '::-moz-$1') + p.replace(Q, ':-ms-input-$1') + p;
        }

        E = 0;
      }
    }

    return G + p + F;
  }

  function X(d, c, e) {
    var h = c.trim().split(ia);
    c = h;
    var a = h.length,
        m = d.length;

    switch (m) {
      case 0:
      case 1:
        var b = 0;

        for (d = 0 === m ? '' : d[0] + ' '; b < a; ++b) {
          c[b] = Z(d, c[b], e).trim();
        }

        break;

      default:
        var v = b = 0;

        for (c = []; b < a; ++b) {
          for (var n = 0; n < m; ++n) {
            c[v++] = Z(d[n] + ' ', h[b], e).trim();
          }
        }

    }

    return c;
  }

  function Z(d, c, e) {
    var h = c.charCodeAt(0);
    33 > h && (h = (c = c.trim()).charCodeAt(0));

    switch (h) {
      case 38:
        return c.replace(F, '$1' + d.trim());

      case 58:
        return d.trim() + c.replace(F, '$1' + d.trim());

      default:
        if (0 < 1 * e && 0 < c.indexOf('\f')) return c.replace(F, (58 === d.charCodeAt(0) ? '' : '$1') + d.trim());
    }

    return d + c;
  }

  function P(d, c, e, h) {
    var a = d + ';',
        m = 2 * c + 3 * e + 4 * h;

    if (944 === m) {
      d = a.indexOf(':', 9) + 1;
      var b = a.substring(d, a.length - 1).trim();
      b = a.substring(0, d).trim() + b + ';';
      return 1 === w || 2 === w && L(b, 1) ? '-webkit-' + b + b : b;
    }

    if (0 === w || 2 === w && !L(a, 1)) return a;

    switch (m) {
      case 1015:
        return 97 === a.charCodeAt(10) ? '-webkit-' + a + a : a;

      case 951:
        return 116 === a.charCodeAt(3) ? '-webkit-' + a + a : a;

      case 963:
        return 110 === a.charCodeAt(5) ? '-webkit-' + a + a : a;

      case 1009:
        if (100 !== a.charCodeAt(4)) break;

      case 969:
      case 942:
        return '-webkit-' + a + a;

      case 978:
        return '-webkit-' + a + '-moz-' + a + a;

      case 1019:
      case 983:
        return '-webkit-' + a + '-moz-' + a + '-ms-' + a + a;

      case 883:
        if (45 === a.charCodeAt(8)) return '-webkit-' + a + a;
        if (0 < a.indexOf('image-set(', 11)) return a.replace(ja, '$1-webkit-$2') + a;
        break;

      case 932:
        if (45 === a.charCodeAt(4)) switch (a.charCodeAt(5)) {
          case 103:
            return '-webkit-box-' + a.replace('-grow', '') + '-webkit-' + a + '-ms-' + a.replace('grow', 'positive') + a;

          case 115:
            return '-webkit-' + a + '-ms-' + a.replace('shrink', 'negative') + a;

          case 98:
            return '-webkit-' + a + '-ms-' + a.replace('basis', 'preferred-size') + a;
        }
        return '-webkit-' + a + '-ms-' + a + a;

      case 964:
        return '-webkit-' + a + '-ms-flex-' + a + a;

      case 1023:
        if (99 !== a.charCodeAt(8)) break;
        b = a.substring(a.indexOf(':', 15)).replace('flex-', '').replace('space-between', 'justify');
        return '-webkit-box-pack' + b + '-webkit-' + a + '-ms-flex-pack' + b + a;

      case 1005:
        return ka.test(a) ? a.replace(aa, ':-webkit-') + a.replace(aa, ':-moz-') + a : a;

      case 1e3:
        b = a.substring(13).trim();
        c = b.indexOf('-') + 1;

        switch (b.charCodeAt(0) + b.charCodeAt(c)) {
          case 226:
            b = a.replace(G, 'tb');
            break;

          case 232:
            b = a.replace(G, 'tb-rl');
            break;

          case 220:
            b = a.replace(G, 'lr');
            break;

          default:
            return a;
        }

        return '-webkit-' + a + '-ms-' + b + a;

      case 1017:
        if (-1 === a.indexOf('sticky', 9)) break;

      case 975:
        c = (a = d).length - 10;
        b = (33 === a.charCodeAt(c) ? a.substring(0, c) : a).substring(d.indexOf(':', 7) + 1).trim();

        switch (m = b.charCodeAt(0) + (b.charCodeAt(7) | 0)) {
          case 203:
            if (111 > b.charCodeAt(8)) break;

          case 115:
            a = a.replace(b, '-webkit-' + b) + ';' + a;
            break;

          case 207:
          case 102:
            a = a.replace(b, '-webkit-' + (102 < m ? 'inline-' : '') + 'box') + ';' + a.replace(b, '-webkit-' + b) + ';' + a.replace(b, '-ms-' + b + 'box') + ';' + a;
        }

        return a + ';';

      case 938:
        if (45 === a.charCodeAt(5)) switch (a.charCodeAt(6)) {
          case 105:
            return b = a.replace('-items', ''), '-webkit-' + a + '-webkit-box-' + b + '-ms-flex-' + b + a;

          case 115:
            return '-webkit-' + a + '-ms-flex-item-' + a.replace(ba, '') + a;

          default:
            return '-webkit-' + a + '-ms-flex-line-pack' + a.replace('align-content', '').replace(ba, '') + a;
        }
        break;

      case 973:
      case 989:
        if (45 !== a.charCodeAt(3) || 122 === a.charCodeAt(4)) break;

      case 931:
      case 953:
        if (!0 === la.test(d)) return 115 === (b = d.substring(d.indexOf(':') + 1)).charCodeAt(0) ? P(d.replace('stretch', 'fill-available'), c, e, h).replace(':fill-available', ':stretch') : a.replace(b, '-webkit-' + b) + a.replace(b, '-moz-' + b.replace('fill-', '')) + a;
        break;

      case 962:
        if (a = '-webkit-' + a + (102 === a.charCodeAt(5) ? '-ms-' + a : '') + a, 211 === e + h && 105 === a.charCodeAt(13) && 0 < a.indexOf('transform', 10)) return a.substring(0, a.indexOf(';', 27) + 1).replace(ma, '$1-webkit-$2') + a;
    }

    return a;
  }

  function L(d, c) {
    var e = d.indexOf(1 === c ? ':' : '{'),
        h = d.substring(0, 3 !== c ? e : 10);
    e = d.substring(e + 1, d.length - 1);
    return R(2 !== c ? h : h.replace(na, '$1'), e, c);
  }

  function ea(d, c) {
    var e = P(c, c.charCodeAt(0), c.charCodeAt(1), c.charCodeAt(2));
    return e !== c + ';' ? e.replace(oa, ' or ($1)').substring(4) : '(' + c + ')';
  }

  function H(d, c, e, h, a, m, b, v, n, q) {
    for (var g = 0, x = c, w; g < A; ++g) {
      switch (w = S[g].call(B, d, x, e, h, a, m, b, v, n, q)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;

        default:
          x = w;
      }
    }

    if (x !== c) return x;
  }

  function T(d) {
    switch (d) {
      case void 0:
      case null:
        A = S.length = 0;
        break;

      default:
        if ('function' === typeof d) S[A++] = d;else if ('object' === typeof d) for (var c = 0, e = d.length; c < e; ++c) {
          T(d[c]);
        } else Y = !!d | 0;
    }

    return T;
  }

  function U(d) {
    d = d.prefix;
    void 0 !== d && (R = null, d ? 'function' !== typeof d ? w = 1 : (w = 2, R = d) : w = 0);
    return U;
  }

  function B(d, c) {
    var e = d;
    33 > e.charCodeAt(0) && (e = e.trim());
    V = e;
    e = [V];

    if (0 < A) {
      var h = H(-1, c, e, e, D, z, 0, 0, 0, 0);
      void 0 !== h && 'string' === typeof h && (c = h);
    }

    var a = M(O, e, c, 0, 0);
    0 < A && (h = H(-2, a, e, e, D, z, a.length, 0, 0, 0), void 0 !== h && (a = h));
    V = '';
    E = 0;
    z = D = 1;
    return a;
  }

  var ca = /^\0+/g,
      N = /[\0\r\f]/g,
      aa = /: */g,
      ka = /zoo|gra/,
      ma = /([,: ])(transform)/g,
      ia = /,\r+?/g,
      F = /([\t\r\n ])*\f?&/g,
      fa = /@(k\w+)\s*(\S*)\s*/,
      Q = /::(place)/g,
      ha = /:(read-only)/g,
      G = /[svh]\w+-[tblr]{2}/,
      da = /\(\s*(.*)\s*\)/g,
      oa = /([\s\S]*?);/g,
      ba = /-self|flex-/g,
      na = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
      la = /stretch|:\s*\w+\-(?:conte|avail)/,
      ja = /([^-])(image-set\()/,
      z = 1,
      D = 1,
      E = 0,
      w = 1,
      O = [],
      S = [],
      A = 0,
      R = null,
      Y = 0,
      V = '';
  B.use = T;
  B.set = U;
  void 0 !== W && U(W);
  return B;
}

/* harmony default export */ __webpack_exports__["default"] = (stylis_min);


/***/ }),

/***/ "./node_modules/@emotion/unitless/dist/unitless.browser.esm.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@emotion/unitless/dist/unitless.browser.esm.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};

/* harmony default export */ __webpack_exports__["default"] = (unitlessKeys);


/***/ }),

/***/ "./node_modules/@emotion/utils/dist/utils.browser.esm.js":
/*!***************************************************************!*\
  !*** ./node_modules/@emotion/utils/dist/utils.browser.esm.js ***!
  \***************************************************************/
/*! exports provided: getRegisteredStyles, insertStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRegisteredStyles", function() { return getRegisteredStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insertStyles", function() { return insertStyles; });
var isBrowser = "object" !== 'undefined';
function getRegisteredStyles(registered, registeredStyles, classNames) {
  var rawClassName = '';
  classNames.split(' ').forEach(function (className) {
    if (registered[className] !== undefined) {
      registeredStyles.push(registered[className]);
    } else {
      rawClassName += className + " ";
    }
  });
  return rawClassName;
}
var insertStyles = function insertStyles(cache, serialized, isStringTag) {
  var className = cache.key + "-" + serialized.name;

  if ( // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (isStringTag === false || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  isBrowser === false && cache.compat !== undefined) && cache.registered[className] === undefined) {
    cache.registered[className] = serialized.styles;
  }

  if (cache.inserted[serialized.name] === undefined) {
    var current = serialized;

    do {
      var maybeStyles = cache.insert("." + className, current, cache.sheet, true);

      current = current.next;
    } while (current !== undefined);
  }
};




/***/ }),

/***/ "./node_modules/@emotion/weak-memoize/dist/weak-memoize.browser.esm.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@emotion/weak-memoize/dist/weak-memoize.browser.esm.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var weakMemoize = function weakMemoize(func) {
  // $FlowFixMe flow doesn't include all non-primitive types as allowed for weakmaps
  var cache = new WeakMap();
  return function (arg) {
    if (cache.has(arg)) {
      // $FlowFixMe
      return cache.get(arg);
    }

    var ret = func(arg);
    cache.set(arg, ret);
    return ret;
  };
};

/* harmony default export */ __webpack_exports__["default"] = (weakMemoize);


/***/ }),

/***/ "./node_modules/@theia/monaco/lib/browser/textmate/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/@theia/monaco/lib/browser/textmate/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2018 Ericsson and others.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * This Source Code may also be made available under the following Secondary
 * Licenses when the conditions for such availability set forth in the Eclipse
 * Public License v. 2.0 are satisfied: GNU General Public License, version 2
 * with the GNU Classpath Exception which is available at
 * https://www.gnu.org/software/classpath/license.html.
 *
 * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0
 ********************************************************************************/
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./textmate-registry */ "./node_modules/@theia/monaco/lib/browser/textmate/textmate-registry.js"));
__export(__webpack_require__(/*! ./textmate-contribution */ "./node_modules/@theia/monaco/lib/browser/textmate/textmate-contribution.js"));
__export(__webpack_require__(/*! ./monaco-textmate-service */ "./node_modules/@theia/monaco/lib/browser/textmate/monaco-textmate-service.js"));
__export(__webpack_require__(/*! ./monaco-textmate-frontend-bindings */ "./node_modules/@theia/monaco/lib/browser/textmate/monaco-textmate-frontend-bindings.js"));


/***/ }),

/***/ "./node_modules/@theia/outline-view/lib/browser/outline-view-contribution.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@theia/outline-view/lib/browser/outline-view-contribution.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2017 TypeFox and others.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * This Source Code may also be made available under the following Secondary
 * Licenses when the conditions for such availability set forth in the Eclipse
 * Public License v. 2.0 are satisfied: GNU General Public License, version 2
 * with the GNU Classpath Exception which is available at
 * https://www.gnu.org/software/classpath/license.html.
 *
 * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0
 ********************************************************************************/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var view_contribution_1 = __webpack_require__(/*! @theia/core/lib/browser/shell/view-contribution */ "./node_modules/@theia/core/lib/browser/shell/view-contribution.js");
var outline_view_widget_1 = __webpack_require__(/*! ./outline-view-widget */ "./node_modules/@theia/outline-view/lib/browser/outline-view-widget.js");
var tree_1 = __webpack_require__(/*! @theia/core/lib/browser/tree */ "./node_modules/@theia/core/lib/browser/tree/index.js");
exports.OUTLINE_WIDGET_FACTORY_ID = 'outline-view';
/**
 * Collection of `outline-view` commands.
 */
var OutlineViewCommands;
(function (OutlineViewCommands) {
    /**
     * Command which collapses all nodes
     * from the `outline-view` tree.
     */
    OutlineViewCommands.COLLAPSE_ALL = {
        id: 'outlineView.collapse.all',
        iconClass: 'collapse-all'
    };
})(OutlineViewCommands = exports.OutlineViewCommands || (exports.OutlineViewCommands = {}));
var OutlineViewContribution = /** @class */ (function (_super) {
    __extends(OutlineViewContribution, _super);
    function OutlineViewContribution() {
        return _super.call(this, {
            widgetId: exports.OUTLINE_WIDGET_FACTORY_ID,
            widgetName: 'Outline',
            defaultWidgetOptions: {
                area: 'right',
                rank: 500
            },
            toggleCommandId: 'outlineView:toggle',
            toggleKeybinding: 'ctrlcmd+shift+i'
        }) || this;
    }
    OutlineViewContribution.prototype.initializeLayout = function (app) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.openView()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    OutlineViewContribution.prototype.registerCommands = function (commands) {
        var _this = this;
        _super.prototype.registerCommands.call(this, commands);
        commands.registerCommand(OutlineViewCommands.COLLAPSE_ALL, {
            isEnabled: function (widget) { return _this.withWidget(widget, function () { return true; }); },
            isVisible: function (widget) { return _this.withWidget(widget, function () { return true; }); },
            execute: function () { return _this.collapseAllItems(); }
        });
    };
    OutlineViewContribution.prototype.registerToolbarItems = function (toolbar) {
        toolbar.registerItem({
            id: OutlineViewCommands.COLLAPSE_ALL.id,
            command: OutlineViewCommands.COLLAPSE_ALL.id,
            tooltip: 'Collapse All',
            priority: 0
        });
    };
    /**
     * Collapse all nodes in the outline view tree.
     */
    OutlineViewContribution.prototype.collapseAllItems = function () {
        return __awaiter(this, void 0, void 0, function () {
            var model, root;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.widget];
                    case 1:
                        model = (_a.sent()).model;
                        root = model.root;
                        if (tree_1.CompositeTreeNode.is(root)) {
                            model.collapseAll(root);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Determine if the current widget is the `outline-view`.
     */
    OutlineViewContribution.prototype.withWidget = function (widget, cb) {
        if (widget === void 0) { widget = this.tryGetWidget(); }
        if (widget instanceof outline_view_widget_1.OutlineViewWidget && widget.id === exports.OUTLINE_WIDGET_FACTORY_ID) {
            return cb(widget);
        }
        return false;
    };
    OutlineViewContribution = __decorate([
        inversify_1.injectable(),
        __metadata("design:paramtypes", [])
    ], OutlineViewContribution);
    return OutlineViewContribution;
}(view_contribution_1.AbstractViewContribution));
exports.OutlineViewContribution = OutlineViewContribution;


/***/ }),

/***/ "./node_modules/@theia/output/lib/browser/output-toolbar-contribution.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@theia/output/lib/browser/output-toolbar-contribution.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2019 Arm and others.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * This Source Code may also be made available under the following Secondary
 * Licenses when the conditions for such availability set forth in the Eclipse
 * Public License v. 2.0 are satisfied: GNU General Public License, version 2
 * with the GNU Classpath Exception which is available at
 * https://www.gnu.org/software/classpath/license.html.
 *
 * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0
 ********************************************************************************/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var output_widget_1 = __webpack_require__(/*! ./output-widget */ "./node_modules/@theia/output/lib/browser/output-widget.js");
var output_channel_1 = __webpack_require__(/*! ../common/output-channel */ "./node_modules/@theia/output/lib/common/output-channel.js");
var output_contribution_1 = __webpack_require__(/*! ./output-contribution */ "./node_modules/@theia/output/lib/browser/output-contribution.js");
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var OutputToolbarContribution = /** @class */ (function () {
    function OutputToolbarContribution() {
        var _this = this;
        this.NONE = '<no channels>';
        this.changeChannel = function (event) {
            var channelName = event.target.value;
            if (channelName !== _this.NONE) {
                _this.outputChannelManager.selectedChannel = _this.outputChannelManager.getChannel(channelName);
            }
        };
    }
    OutputToolbarContribution.prototype.registerToolbarItems = function (toolbarRegistry) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                toolbarRegistry.registerItem({
                    id: 'channels',
                    render: function () { return _this.renderChannelSelector(); },
                    isVisible: function (widget) { return (widget instanceof output_widget_1.OutputWidget); },
                    onDidChange: this.outputChannelManager.onListOrSelectionChange
                });
                toolbarRegistry.registerItem({
                    id: output_contribution_1.OutputCommands.CLEAR_OUTPUT_TOOLBAR.id,
                    command: output_contribution_1.OutputCommands.CLEAR_OUTPUT_TOOLBAR.id,
                    tooltip: 'Clear Output',
                    priority: 1,
                });
                return [2 /*return*/];
            });
        });
    };
    OutputToolbarContribution.prototype.renderChannelSelector = function () {
        var channelOptionElements = [];
        this.outputChannelManager.getVisibleChannels().forEach(function (channel) {
            channelOptionElements.push(React.createElement("option", { value: channel.name, key: channel.name }, channel.name));
        });
        if (channelOptionElements.length === 0) {
            channelOptionElements.push(React.createElement("option", { key: this.NONE, value: this.NONE }, this.NONE));
        }
        return React.createElement("select", { id: output_widget_1.OutputWidget.IDs.CHANNEL_LIST, key: output_widget_1.OutputWidget.IDs.CHANNEL_LIST, value: this.outputChannelManager.selectedChannel ? this.outputChannelManager.selectedChannel.name : this.NONE, onChange: this.changeChannel }, channelOptionElements);
    };
    __decorate([
        inversify_1.inject(output_channel_1.OutputChannelManager),
        __metadata("design:type", output_channel_1.OutputChannelManager)
    ], OutputToolbarContribution.prototype, "outputChannelManager", void 0);
    OutputToolbarContribution = __decorate([
        inversify_1.injectable()
    ], OutputToolbarContribution);
    return OutputToolbarContribution;
}());
exports.OutputToolbarContribution = OutputToolbarContribution;


/***/ }),

/***/ "./node_modules/arduino-ide-extension/data/ino.tmLanguage.json":
/*!*********************************************************************!*\
  !*** ./node_modules/arduino-ide-extension/data/ino.tmLanguage.json ***!
  \*********************************************************************/
/*! exports provided: information_for_contributors, version, name, scopeName, patterns, repository, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"information_for_contributors\":[\"This file has been converted from https://github.com/atom/language-c/blob/master/grammars/c.cson\",\"If you want to provide a fix or improvement, please create a pull request against the original repository.\",\"Once accepted there, we are happy to receive an update request.\"],\"version\":\"https://github.com/atom/language-c/commit/9c0c5f202741a5647025db8d5df5fefba47b036c\",\"name\":\"Ino\",\"scopeName\":\"source.ino\",\"patterns\":[{\"include\":\"#special_block\"},{\"include\":\"#strings\"},{\"match\":\"\\\\b(friend|explicit|virtual|override|final|noexcept)\\\\b\",\"name\":\"storage.modifier.cpp\"},{\"match\":\"\\\\b(private:|protected:|public:)\",\"name\":\"storage.modifier.cpp\"},{\"match\":\"\\\\b(catch|operator|try|throw|using)\\\\b\",\"name\":\"keyword.control.cpp\"},{\"match\":\"\\\\bdelete\\\\b(\\\\s*\\\\[\\\\])?|\\\\bnew\\\\b(?!])\",\"name\":\"keyword.control.cpp\"},{\"match\":\"\\\\b(f|m)[A-Z]\\\\w*\\\\b\",\"name\":\"variable.other.readwrite.member.cpp\"},{\"match\":\"\\\\bthis\\\\b\",\"name\":\"variable.language.this.cpp\"},{\"match\":\"\\\\bnullptr\\\\b\",\"name\":\"constant.language.cpp\"},{\"match\":\"\\\\btemplate\\\\b\\\\s*\",\"name\":\"storage.type.template.cpp\"},{\"match\":\"\\\\b(const_cast|dynamic_cast|reinterpret_cast|static_cast)\\\\b\\\\s*\",\"name\":\"keyword.operator.cast.cpp\"},{\"match\":\"::\",\"name\":\"punctuation.separator.namespace.access.cpp\"},{\"match\":\"\\\\b(and|and_eq|bitand|bitor|compl|not|not_eq|or|or_eq|typeid|xor|xor_eq|alignof|alignas)\\\\b\",\"name\":\"keyword.operator.cpp\"},{\"match\":\"\\\\b(class|decltype|wchar_t|char16_t|char32_t)\\\\b\",\"name\":\"storage.type.cpp\"},{\"match\":\"\\\\b(constexpr|export|mutable|typename|thread_local)\\\\b\",\"name\":\"storage.modifier.cpp\"},{\"begin\":\"(?x)\\n(?:\\n  ^ |                  # beginning of line\\n  (?:(?<!else|new|=))  # or word + space before name\\n)\\n((?:[A-Za-z_][A-Za-z0-9_]*::)*+~[A-Za-z_][A-Za-z0-9_]*) # actual name\\n\\\\s*(\\\\()              # opening bracket\",\"beginCaptures\":{\"1\":{\"name\":\"entity.name.function.cpp\"},\"2\":{\"name\":\"punctuation.definition.parameters.begin.c\"}},\"end\":\"\\\\)\",\"endCaptures\":{\"0\":{\"name\":\"punctuation.definition.parameters.end.c\"}},\"name\":\"meta.function.destructor.cpp\",\"patterns\":[{\"include\":\"$base\"}]},{\"begin\":\"(?x)\\n(?:\\n  ^ |                  # beginning of line\\n  (?:(?<!else|new|=))  # or word + space before name\\n)\\n((?:[A-Za-z_][A-Za-z0-9_]*::)*+~[A-Za-z_][A-Za-z0-9_]*) # actual name\\n\\\\s*(\\\\()              # opening bracket\",\"beginCaptures\":{\"1\":{\"name\":\"entity.name.function.cpp\"},\"2\":{\"name\":\"punctuation.definition.parameters.begin.c\"}},\"end\":\"\\\\)\",\"endCaptures\":{\"0\":{\"name\":\"punctuation.definition.parameters.end.c\"}},\"name\":\"meta.function.destructor.prototype.cpp\",\"patterns\":[{\"include\":\"$base\"}]},{\"include\":\"source.c\"},{\"include\":\"#preprocessor-rule-enabled\"},{\"include\":\"#preprocessor-rule-disabled\"},{\"include\":\"#preprocessor-rule-conditional\"},{\"include\":\"#comments\"},{\"match\":\"\\\\b(break|case|continue|default|do|else|for|goto|if|_Pragma|return|switch|while)\\\\b\",\"name\":\"keyword.control.c\"},{\"match\":\"\\\\b(loop|setup)\\\\b\",\"name\":\"support.function\"},{\"include\":\"#storage_types\"},{\"match\":\"\\\\b(const|extern|register|restrict|static|volatile|inline)\\\\b\",\"name\":\"storage.modifier.c\"},{\"match\":\"\\\\bk[A-Z]\\\\w*\\\\b\",\"name\":\"constant.other.variable.mac-classic.c\"},{\"match\":\"\\\\bg[A-Z]\\\\w*\\\\b\",\"name\":\"variable.other.readwrite.global.mac-classic.c\"},{\"match\":\"\\\\bs[A-Z]\\\\w*\\\\b\",\"name\":\"variable.other.readwrite.static.mac-classic.c\"},{\"match\":\"\\\\b(NULL|true|false|TRUE|FALSE)\\\\b\",\"name\":\"constant.language.c\"},{\"include\":\"#operators\"},{\"include\":\"#numbers\"},{\"include\":\"#strings\"},{\"begin\":\"(?x)\\n^\\\\s* ((\\\\#)\\\\s*define) \\\\s+    # define\\n((?<id>[a-zA-Z_$][\\\\w$]*))      # macro name\\n(?:\\n  (\\\\()\\n    (\\n      \\\\s* \\\\g<id> \\\\s*         # first argument\\n      ((,) \\\\s* \\\\g<id> \\\\s*)*  # additional arguments\\n      (?:\\\\.\\\\.\\\\.)?            # varargs ellipsis?\\n    )\\n  (\\\\))\\n)?\",\"beginCaptures\":{\"1\":{\"name\":\"keyword.control.directive.define.c\"},\"2\":{\"name\":\"punctuation.definition.directive.c\"},\"3\":{\"name\":\"entity.name.function.preprocessor.c\"},\"5\":{\"name\":\"punctuation.definition.parameters.begin.c\"},\"6\":{\"name\":\"variable.parameter.preprocessor.c\"},\"8\":{\"name\":\"punctuation.separator.parameters.c\"},\"9\":{\"name\":\"punctuation.definition.parameters.end.c\"}},\"end\":\"(?=(?://|/\\\\*))|(?<!\\\\\\\\)(?=\\\\n)\",\"name\":\"meta.preprocessor.macro.c\",\"patterns\":[{\"include\":\"#preprocessor-rule-define-line-contents\"}]},{\"begin\":\"^\\\\s*((#)\\\\s*(error|warning))\\\\b\",\"captures\":{\"1\":{\"name\":\"keyword.control.directive.diagnostic.$3.c\"},\"2\":{\"name\":\"punctuation.definition.directive.c\"}},\"end\":\"(?<!\\\\\\\\)(?=\\\\n)|(?=//)|(?=/\\\\*(?!.*\\\\\\\\\\\\s*\\\\n))\",\"name\":\"meta.preprocessor.diagnostic.c\",\"patterns\":[{\"include\":\"#comments\"},{\"include\":\"#strings\"},{\"include\":\"#line_continuation_character\"}]},{\"begin\":\"^\\\\s*((#)\\\\s*(include(?:_next)?|import))\\\\b\\\\s*\",\"beginCaptures\":{\"1\":{\"name\":\"keyword.control.directive.$3.c\"},\"2\":{\"name\":\"punctuation.definition.directive.c\"}},\"end\":\"(?=(?://|/\\\\*))|(?<!\\\\\\\\)(?=\\\\n)\",\"name\":\"meta.preprocessor.include.c\",\"patterns\":[{\"include\":\"#line_continuation_character\"},{\"begin\":\"\\\"\",\"beginCaptures\":{\"0\":{\"name\":\"punctuation.definition.string.begin.c\"}},\"end\":\"\\\"\",\"endCaptures\":{\"0\":{\"name\":\"punctuation.definition.string.end.c\"}},\"name\":\"string.quoted.double.include.c\"},{\"begin\":\"<\",\"beginCaptures\":{\"0\":{\"name\":\"punctuation.definition.string.begin.c\"}},\"end\":\">\",\"endCaptures\":{\"0\":{\"name\":\"punctuation.definition.string.end.c\"}},\"name\":\"string.quoted.other.lt-gt.include.c\"}]},{\"include\":\"#pragma-mark\"},{\"begin\":\"^\\\\s*((#)\\\\s*line)\\\\b\",\"beginCaptures\":{\"1\":{\"name\":\"keyword.control.directive.line.c\"},\"2\":{\"name\":\"punctuation.definition.directive.c\"}},\"end\":\"(?=(?://|/\\\\*))|(?<!\\\\\\\\)(?=\\\\n)\",\"name\":\"meta.preprocessor.c\",\"patterns\":[{\"include\":\"#strings\"},{\"include\":\"#numbers\"},{\"include\":\"#line_continuation_character\"}]},{\"begin\":\"^\\\\s*(?:((#)\\\\s*undef))\\\\b\",\"beginCaptures\":{\"1\":{\"name\":\"keyword.control.directive.undef.c\"},\"2\":{\"name\":\"punctuation.definition.directive.c\"}},\"end\":\"(?=(?://|/\\\\*))|(?<!\\\\\\\\)(?=\\\\n)\",\"name\":\"meta.preprocessor.c\",\"patterns\":[{\"match\":\"[a-zA-Z_$][\\\\w$]*\",\"name\":\"entity.name.function.preprocessor.c\"},{\"include\":\"#line_continuation_character\"}]},{\"begin\":\"^\\\\s*(?:((#)\\\\s*pragma))\\\\b\",\"beginCaptures\":{\"1\":{\"name\":\"keyword.control.directive.pragma.c\"},\"2\":{\"name\":\"punctuation.definition.directive.c\"}},\"end\":\"(?=(?://|/\\\\*))|(?<!\\\\\\\\)(?=\\\\n)\",\"name\":\"meta.preprocessor.pragma.c\",\"patterns\":[{\"include\":\"#strings\"},{\"match\":\"[a-zA-Z_$][\\\\w\\\\-$]*\",\"name\":\"entity.other.attribute-name.pragma.preprocessor.c\"},{\"include\":\"#numbers\"},{\"include\":\"#line_continuation_character\"}]},{\"match\":\"\\\\b(u_char|u_short|u_int|u_long|ushort|uint|u_quad_t|quad_t|qaddr_t|caddr_t|daddr_t|div_t|dev_t|fixpt_t|blkcnt_t|blksize_t|gid_t|in_addr_t|in_port_t|ino_t|key_t|mode_t|nlink_t|id_t|pid_t|off_t|segsz_t|swblk_t|uid_t|id_t|clock_t|size_t|ssize_t|time_t|useconds_t|suseconds_t)\\\\b\",\"name\":\"support.type.sys-types.c\"},{\"match\":\"\\\\b(pthread_attr_t|pthread_cond_t|pthread_condattr_t|pthread_mutex_t|pthread_mutexattr_t|pthread_once_t|pthread_rwlock_t|pthread_rwlockattr_t|pthread_t|pthread_key_t)\\\\b\",\"name\":\"support.type.pthread.c\"},{\"match\":\"(?x) \\\\b\\n(int8_t|int16_t|int32_t|int64_t|uint8_t|uint16_t|uint32_t|uint64_t|int_least8_t\\n|int_least16_t|int_least32_t|int_least64_t|uint_least8_t|uint_least16_t|uint_least32_t\\n|uint_least64_t|int_fast8_t|int_fast16_t|int_fast32_t|int_fast64_t|uint_fast8_t\\n|uint_fast16_t|uint_fast32_t|uint_fast64_t|intptr_t|uintptr_t|intmax_t|intmax_t\\n|uintmax_t|uintmax_t)\\n\\\\b\",\"name\":\"support.type.stdint.c\"},{\"match\":\"\\\\b(noErr|kNilOptions|kInvalidID|kVariableLengthArray)\\\\b\",\"name\":\"support.constant.mac-classic.c\"},{\"match\":\"(?x) \\\\b\\n(AbsoluteTime|Boolean|Byte|ByteCount|ByteOffset|BytePtr|CompTimeValue|ConstLogicalAddress|ConstStrFileNameParam\\n|ConstStringPtr|Duration|Fixed|FixedPtr|Float32|Float32Point|Float64|Float80|Float96|FourCharCode|Fract|FractPtr\\n|Handle|ItemCount|LogicalAddress|OptionBits|OSErr|OSStatus|OSType|OSTypePtr|PhysicalAddress|ProcessSerialNumber\\n|ProcessSerialNumberPtr|ProcHandle|Ptr|ResType|ResTypePtr|ShortFixed|ShortFixedPtr|SignedByte|SInt16|SInt32|SInt64\\n|SInt8|Size|StrFileName|StringHandle|StringPtr|TimeBase|TimeRecord|TimeScale|TimeValue|TimeValue64|UInt16|UInt32\\n|UInt64|UInt8|UniChar|UniCharCount|UniCharCountPtr|UniCharPtr|UnicodeScalarValue|UniversalProcHandle|UniversalProcPtr\\n|UnsignedFixed|UnsignedFixedPtr|UnsignedWide|UTF16Char|UTF32Char|UTF8Char)\\n\\\\b\",\"name\":\"support.type.mac-classic.c\"},{\"match\":\"\\\\b([A-Za-z0-9_]+_t)\\\\b\",\"name\":\"support.type.posix-reserved.c\"},{\"include\":\"#block\"},{\"include\":\"#parens\"},{\"begin\":\"(?x)\\n(?!(?:while|for|do|if|else|switch|catch|enumerate|return|typeid|alignof|alignas|sizeof|[cr]?iterate|asm|__asm__|auto|bool|_Bool|char|_Complex|double|enum|float|_Imaginary|int|long|short|signed|struct|typedef|union|unsigned|void)\\\\s*\\\\()\\n(?=\\n  (?:[A-Za-z_][A-Za-z0-9_]*+|::)++\\\\s*\\\\(  # actual name\\n  |\\n  (?:(?<=operator)(?:[-*&<>=+!]+|\\\\(\\\\)|\\\\[\\\\]))\\\\s*\\\\(\\n)\",\"end\":\"(?<=\\\\))(?!\\\\w)\",\"name\":\"meta.function.c\",\"patterns\":[{\"include\":\"#function-innards\"}]},{\"include\":\"#line_continuation_character\"},{\"match\":\"(\\\\[)|(\\\\])\",\"captures\":{\"1\":{\"name\":\"punctuation.definition.begin.bracket.square.c\"},\"2\":{\"name\":\"punctuation.definition.end.bracket.square.c\"}}},{\"match\":\";\",\"name\":\"punctuation.terminator.statement.c\"},{\"match\":\",\",\"name\":\"punctuation.separator.delimiter.c\"}],\"repository\":{\"access\":{\"captures\":{\"2\":{\"name\":\"punctuation.separator.dot-access.c\"},\"3\":{\"name\":\"punctuation.separator.pointer-access.c\"},\"4\":{\"name\":\"variable.other.member.c\"}},\"match\":\"((\\\\.)|(->))\\\\s*(([a-zA-Z_][a-zA-Z_0-9]*)\\\\b(?!\\\\s*\\\\())?\"},\"block\":{\"begin\":\"\\\\{\",\"beginCaptures\":{\"0\":{\"name\":\"punctuation.section.block.begin.bracket.curly.c\"}},\"end\":\"\\\\}\",\"endCaptures\":{\"0\":{\"name\":\"punctuation.section.block.end.bracket.curly.c\"}},\"name\":\"meta.block.cpp\",\"patterns\":[{\"begin\":\"{\",\"beginCaptures\":{\"0\":{\"name\":\"punctuation.section.block.begin.bracket.curly.c\"}},\"end\":\"}|(?=\\\\s*#\\\\s*(?:elif|else|endif)\\\\b)\",\"endCaptures\":{\"0\":{\"name\":\"punctuation.section.block.end.bracket.curly.c\"}},\"name\":\"meta.block.c\",\"patterns\":[{\"include\":\"#block_innards\"}]},{\"include\":\"$base\"}]},\"block_innards\":{\"patterns\":[{\"include\":\"#preprocessor-rule-enabled-block\"},{\"include\":\"#preprocessor-rule-disabled-block\"},{\"include\":\"#preprocessor-rule-conditional-block\"},{\"include\":\"#access\"},{\"include\":\"#libc\"},{\"include\":\"#c_function_call\"},{\"captures\":{\"1\":{\"name\":\"variable.other.c\"},\"2\":{\"name\":\"punctuation.definition.parameters.c\"}},\"match\":\"(?x)\\n(?:\\n  (?:\\n    (?=\\\\s)(?<!else|new|return)\\n    (?<=\\\\w) \\\\s+  # or word + space before name\\n  )\\n)\\n(\\n  (?:[A-Za-z_][A-Za-z0-9_]*+ | :: )++   # actual name\\n  |\\n  (?:(?<=operator) (?:[-*&<>=+!]+ | \\\\(\\\\) | \\\\[\\\\]))\\n)\\n\\\\s*(\\\\() # opening bracket\",\"name\":\"meta.initialization.c\"},{\"begin\":\"{\",\"beginCaptures\":{\"0\":{\"name\":\"punctuation.section.block.begin.bracket.curly.c\"}},\"end\":\"}|(?=\\\\s*#\\\\s*(?:elif|else|endif)\\\\b)\",\"endCaptures\":{\"0\":{\"name\":\"punctuation.section.block.end.bracket.curly.c\"}},\"patterns\":[{\"include\":\"#block_innards\"}]},{\"include\":\"#parens-block\"},{\"include\":\"$base\"}]},\"c_function_call\":{\"begin\":\"(?x)\\n(?!(?:while|for|do|if|else|switch|catch|enumerate|return|typeid|alignof|alignas|sizeof|[cr]?iterate)\\\\s*\\\\()\\n(?=\\n(?:[A-Za-z_][A-Za-z0-9_]*+|::)++\\\\s*\\\\(  # actual name\\n|\\n(?:(?<=operator)(?:[-*&<>=+!]+|\\\\(\\\\)|\\\\[\\\\]))\\\\s*\\\\(\\n)\",\"end\":\"(?<=\\\\))(?!\\\\w)\",\"name\":\"meta.function-call.c\",\"patterns\":[{\"include\":\"#function-call-innards\"}]},\"comments\":{\"patterns\":[{\"captures\":{\"1\":{\"name\":\"meta.toc-list.banner.block.c\"}},\"match\":\"^/\\\\* =(\\\\s*.*?)\\\\s*= \\\\*/$\\\\n?\",\"name\":\"comment.block.c\"},{\"begin\":\"/\\\\*\",\"beginCaptures\":{\"0\":{\"name\":\"punctuation.definition.comment.begin.c\"}},\"end\":\"\\\\*/\",\"endCaptures\":{\"0\":{\"name\":\"punctuation.definition.comment.end.c\"}},\"name\":\"comment.block.c\"},{\"match\":\"\\\\*/.*\\\\n\",\"name\":\"invalid.illegal.stray-comment-end.c\"},{\"captures\":{\"1\":{\"name\":\"meta.toc-list.banner.line.c\"}},\"match\":\"^// =(\\\\s*.*?)\\\\s*=\\\\s*$\\\\n?\",\"name\":\"comment.line.banner.cpp\"},{\"begin\":\"(^[ \\\\t]+)?(?=//)\",\"beginCaptures\":{\"1\":{\"name\":\"punctuation.whitespace.comment.leading.cpp\"}},\"end\":\"(?!\\\\G)\",\"patterns\":[{\"begin\":\"//\",\"beginCaptures\":{\"0\":{\"name\":\"punctuation.definition.comment.cpp\"}},\"end\":\"(?=\\\\n)\",\"name\":\"comment.line.double-slash.cpp\",\"patterns\":[{\"include\":\"#line_continuation_character\"}]}]}]},\"disabled\":{\"begin\":\"^\\\\s*#\\\\s*if(n?def)?\\\\b.*$\",\"end\":\"^\\\\s*#\\\\s*endif\\\\b\",\"patterns\":[{\"include\":\"#disabled\"},{\"include\":\"#pragma-mark\"}]},\"libc\":{\"captures\":{\"1\":{\"name\":\"punctuation.whitespace.support.function.leading.c\"},\"2\":{\"name\":\"support.function.C99.c\"}},\"match\":\"(?x) (\\\\s*) \\\\b\\n(_Exit|(?:nearbyint|nextafter|nexttoward|netoward|nan)[fl]?|a(?:cos|sin)h?[fl]?|abort|abs|asctime|assert\\n|atan(?:[h2]?[fl]?)?|atexit|ato[ifl]|atoll|bsearch|btowc|cabs[fl]?|cacos|cacos[fl]|cacosh[fl]?\\n|calloc|carg[fl]?|casinh?[fl]?|catanh?[fl]?|cbrt[fl]?|ccosh?[fl]?|ceil[fl]?|cexp[fl]?|cimag[fl]?\\n|clearerr|clock|clog[fl]?|conj[fl]?|copysign[fl]?|cosh?[fl]?|cpow[fl]?|cproj[fl]?|creal[fl]?\\n|csinh?[fl]?|csqrt[fl]?|ctanh?[fl]?|ctime|difftime|div|erfc?[fl]?|exit|fabs[fl]?\\n|exp(?:2[fl]?|[fl]|m1[fl]?)?|fclose|fdim[fl]?|fe[gs]et(?:env|exceptflag|round)|feclearexcept\\n|feholdexcept|feof|feraiseexcept|ferror|fetestexcept|feupdateenv|fflush|fgetpos|fgetw?[sc]\\n|floor[fl]?|fmax?[fl]?|fmin[fl]?|fmod[fl]?|fopen|fpclassify|fprintf|fputw?[sc]|fread|free|freopen\\n|frexp[fl]?|fscanf|fseek|fsetpos|ftell|fwide|fwprintf|fwrite|fwscanf|genv|get[sc]|getchar|gmtime\\n|gwc|gwchar|hypot[fl]?|ilogb[fl]?|imaxabs|imaxdiv|isalnum|isalpha|isblank|iscntrl|isdigit|isfinite\\n|isgraph|isgreater|isgreaterequal|isinf|isless(?:equal|greater)?|isw?lower|isnan|isnormal|isw?print\\n|isw?punct|isw?space|isunordered|isw?upper|iswalnum|iswalpha|iswblank|iswcntrl|iswctype|iswdigit|iswgraph\\n|isw?xdigit|labs|ldexp[fl]?|ldiv|lgamma[fl]?|llabs|lldiv|llrint[fl]?|llround[fl]?|localeconv|localtime\\n|log[2b]?[fl]?|log1[p0][fl]?|longjmp|lrint[fl]?|lround[fl]?|malloc|mbr?len|mbr?towc|mbsinit|mbsrtowcs\\n|mbstowcs|memchr|memcmp|memcpy|memmove|memset|mktime|modf[fl]?|perror|pow[fl]?|printf|puts|putw?c(?:har)?\\n|qsort|raise|rand|remainder[fl]?|realloc|remove|remquo[fl]?|rename|rewind|rint[fl]?|round[fl]?|scalbl?n[fl]?\\n|scanf|setbuf|setjmp|setlocale|setvbuf|signal|signbit|sinh?[fl]?|snprintf|sprintf|sqrt[fl]?|srand|sscanf\\n|strcat|strchr|strcmp|strcoll|strcpy|strcspn|strerror|strftime|strlen|strncat|strncmp|strncpy|strpbrk\\n|strrchr|strspn|strstr|strto[kdf]|strtoimax|strtol[dl]?|strtoull?|strtoumax|strxfrm|swprintf|swscanf\\n|system|tan|tan[fl]|tanh[fl]?|tgamma[fl]?|time|tmpfile|tmpnam|tolower|toupper|trunc[fl]?|ungetw?c|va_arg\\n|va_copy|va_end|va_start|vfw?printf|vfw?scanf|vprintf|vscanf|vsnprintf|vsprintf|vsscanf|vswprintf|vswscanf\\n|vwprintf|vwscanf|wcrtomb|wcscat|wcschr|wcscmp|wcscoll|wcscpy|wcscspn|wcsftime|wcslen|wcsncat|wcsncmp|wcsncpy\\n|wcspbrk|wcsrchr|wcsrtombs|wcsspn|wcsstr|wcsto[dkf]|wcstoimax|wcstol[dl]?|wcstombs|wcstoull?|wcstoumax|wcsxfrm\\n|wctom?b|wmem(?:set|chr|cpy|cmp|move)|wprintf|wscanf)\\\\b\"},\"line_continuation_character\":{\"patterns\":[{\"match\":\"(\\\\\\\\)\\\\n\",\"captures\":{\"1\":{\"name\":\"constant.character.escape.line-continuation.c\"}}}]},\"numbers\":{\"patterns\":[{\"match\":\"\\\\b((0(x|X)[0-9a-fA-F]([0-9a-fA-F']*[0-9a-fA-F])?)|(0(b|B)[01]([01']*[01])?)|(([0-9]([0-9']*[0-9])?\\\\.?[0-9]*([0-9']*[0-9])?)|(\\\\.[0-9]([0-9']*[0-9])?))((e|E)(\\\\+|-)?[0-9]([0-9']*[0-9])?)?)(L|l|UL|ul|u|U|F|f|ll|LL|ull|ULL)?\\\\b\",\"name\":\"constant.numeric.c\"}]},\"parens\":{\"begin\":\"\\\\(\",\"beginCaptures\":{\"0\":{\"name\":\"punctuation.section.parens.begin.bracket.round.c\"}},\"end\":\"\\\\)\",\"endCaptures\":{\"0\":{\"name\":\"punctuation.section.parens.end.bracket.round.c\"}},\"patterns\":[{\"include\":\"$base\"}]},\"parens-block\":{\"begin\":\"\\\\(\",\"beginCaptures\":{\"0\":{\"name\":\"punctuation.section.parens.begin.bracket.round.c\"}},\"end\":\"\\\\)\",\"endCaptures\":{\"0\":{\"name\":\"punctuation.section.parens.end.bracket.round.c\"}},\"patterns\":[{\"include\":\"#block_innards\"}]},\"pragma-mark\":{\"captures\":{\"1\":{\"name\":\"meta.preprocessor.pragma.c\"},\"2\":{\"name\":\"keyword.control.directive.pragma.pragma-mark.c\"},\"3\":{\"name\":\"punctuation.definition.directive.c\"},\"4\":{\"name\":\"entity.name.tag.pragma-mark.c\"}},\"match\":\"^\\\\s*(((#)\\\\s*pragma\\\\s+mark)\\\\s+(.*))\",\"name\":\"meta.section\"},\"operators\":{\"patterns\":[{\"match\":\"(?<![\\\\w$])(sizeof)(?![\\\\w$])\",\"name\":\"keyword.operator.sizeof.c\"},{\"match\":\"--\",\"name\":\"keyword.operator.decrement.c\"},{\"match\":\"\\\\+\\\\+\",\"name\":\"keyword.operator.increment.c\"},{\"match\":\"%=|\\\\+=|-=|\\\\*=|(?<!\\\\()/=\",\"name\":\"keyword.operator.assignment.compound.c\"},{\"match\":\"&=|\\\\^=|<<=|>>=|\\\\|=\",\"name\":\"keyword.operator.assignment.compound.bitwise.c\"},{\"match\":\"<<|>>\",\"name\":\"keyword.operator.bitwise.shift.c\"},{\"match\":\"!=|<=|>=|==|<|>\",\"name\":\"keyword.operator.comparison.c\"},{\"match\":\"&&|!|\\\\|\\\\|\",\"name\":\"keyword.operator.logical.c\"},{\"match\":\"&|\\\\||\\\\^|~\",\"name\":\"keyword.operator.c\"},{\"match\":\"=\",\"name\":\"keyword.operator.assignment.c\"},{\"match\":\"%|\\\\*|/|-|\\\\+\",\"name\":\"keyword.operator.c\"},{\"begin\":\"\\\\?\",\"beginCaptures\":{\"0\":{\"name\":\"keyword.operator.ternary.c\"}},\"end\":\":\",\"applyEndPatternLast\":true,\"endCaptures\":{\"0\":{\"name\":\"keyword.operator.ternary.c\"}},\"patterns\":[{\"include\":\"#access\"},{\"include\":\"#libc\"},{\"include\":\"#c_function_call\"},{\"include\":\"$base\"}]}]},\"strings\":{\"patterns\":[{\"begin\":\"\\\"\",\"beginCaptures\":{\"0\":{\"name\":\"punctuation.definition.string.begin.c\"}},\"end\":\"\\\"\",\"endCaptures\":{\"0\":{\"name\":\"punctuation.definition.string.end.c\"}},\"name\":\"string.quoted.double.c\",\"patterns\":[{\"include\":\"#string_escaped_char\"},{\"include\":\"#string_placeholder\"},{\"include\":\"#line_continuation_character\"}]},{\"begin\":\"'\",\"beginCaptures\":{\"0\":{\"name\":\"punctuation.definition.string.begin.c\"}},\"end\":\"'\",\"endCaptures\":{\"0\":{\"name\":\"punctuation.definition.string.end.c\"}},\"name\":\"string.quoted.single.c\",\"patterns\":[{\"include\":\"#string_escaped_char\"},{\"include\":\"#line_continuation_character\"}]},{\"begin\":\"(u|u8|U|L)?\\\"\",\"beginCaptures\":{\"0\":{\"name\":\"punctuation.definition.string.begin.cpp\"},\"1\":{\"name\":\"meta.encoding.cpp\"}},\"end\":\"\\\"\",\"endCaptures\":{\"0\":{\"name\":\"punctuation.definition.string.end.cpp\"}},\"name\":\"string.quoted.double.cpp\",\"patterns\":[{\"match\":\"\\\\\\\\u\\\\h{4}|\\\\\\\\U\\\\h{8}\",\"name\":\"constant.character.escape.cpp\"},{\"match\":\"\\\\\\\\['\\\"?\\\\\\\\abfnrtv]\",\"name\":\"constant.character.escape.cpp\"},{\"match\":\"\\\\\\\\[0-7]{1,3}\",\"name\":\"constant.character.escape.cpp\"},{\"match\":\"\\\\\\\\x\\\\h+\",\"name\":\"constant.character.escape.cpp\"},{\"include\":\"source.c#string_placeholder\"}]},{\"begin\":\"(u|u8|U|L)?R\\\"(?:([^ ()\\\\\\\\\\\\t]{0,16})|([^ ()\\\\\\\\\\\\t]*))\\\\(\",\"beginCaptures\":{\"0\":{\"name\":\"punctuation.definition.string.begin.cpp\"},\"1\":{\"name\":\"meta.encoding.cpp\"},\"3\":{\"name\":\"invalid.illegal.delimiter-too-long.cpp\"}},\"end\":\"\\\\)\\\\2(\\\\3)\\\"\",\"endCaptures\":{\"0\":{\"name\":\"punctuation.definition.string.end.cpp\"},\"1\":{\"name\":\"invalid.illegal.delimiter-too-long.cpp\"}},\"name\":\"string.quoted.double.raw.cpp\"}]},\"string_escaped_char\":{\"patterns\":[{\"match\":\"(?x)\\\\\\\\ (\\n\\\\\\\\             |\\n[abefnprtv'\\\"?]   |\\n[0-3]\\\\d{,2}     |\\n[4-7]\\\\d?        |\\nx[a-fA-F0-9]{,2} |\\nu[a-fA-F0-9]{,4} |\\nU[a-fA-F0-9]{,8} )\",\"name\":\"constant.character.escape.c\"},{\"match\":\"\\\\\\\\.\",\"name\":\"invalid.illegal.unknown-escape.c\"}]},\"string_placeholder\":{\"patterns\":[{\"match\":\"(?x) %\\n(\\\\d+\\\\$)?                           # field (argument #)\\n[#0\\\\- +']*                          # flags\\n[,;:_]?                              # separator character (AltiVec)\\n((-?\\\\d+)|\\\\*(-?\\\\d+\\\\$)?)?          # minimum field width\\n(\\\\.((-?\\\\d+)|\\\\*(-?\\\\d+\\\\$)?)?)?    # precision\\n(hh|h|ll|l|j|t|z|q|L|vh|vl|v|hv|hl)? # length modifier\\n[diouxXDOUeEfFgGaACcSspn%]           # conversion type\",\"name\":\"constant.other.placeholder.c\"},{\"match\":\"(%)(?!\\\"\\\\s*(PRI|SCN))\",\"captures\":{\"1\":{\"name\":\"invalid.illegal.placeholder.c\"}}}]},\"storage_types\":{\"patterns\":[{\"match\":\"\\\\b(asm|__asm__|auto|bool|_Bool|char|_Complex|double|enum|float|_Imaginary|int|long|short|signed|struct|typedef|union|unsigned|void)\\\\b\",\"name\":\"storage.type.c\"}]},\"vararg_ellipses\":{\"match\":\"(?<!\\\\.)\\\\.\\\\.\\\\.(?!\\\\.)\",\"name\":\"punctuation.vararg-ellipses.c\"},\"preprocessor-rule-conditional\":{\"patterns\":[{\"begin\":\"^\\\\s*((#)\\\\s*if(?:n?def)?\\\\b)\",\"beginCaptures\":{\"0\":{\"name\":\"meta.preprocessor.c\"},\"1\":{\"name\":\"keyword.control.directive.conditional.c\"},\"2\":{\"name\":\"punctuation.definition.directive.c\"}},\"end\":\"^\\\\s*((#)\\\\s*endif\\\\b)\",\"endCaptures\":{\"0\":{\"name\":\"meta.preprocessor.c\"},\"1\":{\"name\":\"keyword.control.directive.conditional.c\"},\"2\":{\"name\":\"punctuation.definition.directive.c\"}},\"patterns\":[{\"begin\":\"\\\\G(?=.)(?!//|/\\\\*(?!.*\\\\\\\\\\\\s*\\\\n))\",\"end\":\"(?=//)|(?=/\\\\*(?!.*\\\\\\\\\\\\s*\\\\n))|(?<!\\\\\\\\)(?=\\\\n)\",\"name\":\"meta.preprocessor.c\",\"patterns\":[{\"include\":\"#preprocessor-rule-conditional-line\"}]},{\"include\":\"#preprocessor-rule-enabled-elif\"},{\"include\":\"#preprocessor-rule-enabled-else\"},{\"include\":\"#preprocessor-rule-disabled-elif\"},{\"begin\":\"^\\\\s*((#)\\\\s*elif\\\\b)\",\"beginCaptures\":{\"1\":{\"name\":\"keyword.control.directive.conditional.c\"},\"2\":{\"name\":\"punctuation.definition.directive.c\"}},\"end\":\"(?=//)|(?=/\\\\*(?!.*\\\\\\\\\\\\s*\\\\n))|(?<!\\\\\\\\)(?=\\\\n)\",\"name\":\"meta.preprocessor.c\",\"patterns\":[{\"include\":\"#preprocessor-rule-conditional-line\"}]},{\"include\":\"$base\"}]},{\"match\":\"^\\\\s*#\\\\s*(else|elif|endif)\\\\b\",\"captures\":{\"0\":{\"name\":\"invalid.illegal.stray-$1.c\"}}}]},\"preprocessor-rule-conditional-block\":{\"patterns\":[{\"begin\":\"^\\\\s*((#)\\\\s*if(?:n?def)?\\\\b)\",\"beginCaptures\":{\"0\":{\"name\":\"meta.preprocessor.c\"},\"1\":{\"name\":\"keyword.control.directive.conditional.c\"},\"2\":{\"name\":\"punctuation.definition.directive.c\"}},\"end\":\"^\\\\s*((#)\\\\s*endif\\\\b)\",\"endCaptures\":{\"0\":{\"name\":\"meta.preprocessor.c\"},\"1\":{\"name\":\"keyword.control.directive.conditional.c\"},\"2\":{\"name\":\"punctuation.definition.directive.c\"}},\"patterns\":[{\"begin\":\"\\\\G(?=.)(?!//|/\\\\*(?!.*\\\\\\\\\\\\s*\\\\n))\",\"end\":\"(?=//)|(?=/\\\\*(?!.*\\\\\\\\\\\\s*\\\\n))|(?<!\\\\\\\\)(?=\\\\n)\",\"name\":\"meta.preprocessor.c\",\"patterns\":[{\"include\":\"#preprocessor-rule-conditional-line\"}]},{\"include\":\"#preprocessor-rule-enabled-elif-block\"},{\"include\":\"#preprocessor-rule-enabled-else-block\"},{\"include\":\"#preprocessor-rule-disabled-elif\"},{\"begin\":\"^\\\\s*((#)\\\\s*elif\\\\b)\",\"beginCaptures\":{\"1\":{\"name\":\"keyword.control.directive.conditional.c\"},\"2\":{\"name\":\"punctuation.definition.directive.c\"}},\"end\":\"(?=//)|(?=/\\\\*(?!.*\\\\\\\\\\\\s*\\\\n))|(?<!\\\\\\\\)(?=\\\\n)\",\"name\":\"meta.preprocessor.c\",\"patterns\":[{\"include\":\"#preprocessor-rule-conditional-line\"}]},{\"include\":\"#block_innards\"}]},{\"match\":\"^\\\\s*#\\\\s*(else|elif|endif)\\\\b\",\"captures\":{\"0\":{\"name\":\"invalid.illegal.stray-$1.c\"}}}]},\"preprocessor-rule-conditional-line\":{\"patterns\":[{\"match\":\"(?:\\\\bdefined\\\\b\\\\s*$)|(?:\\\\bdefined\\\\b(?=\\\\s*\\\\(*\\\\s*(?:(?!defined\\\\b)[a-zA-Z_$][\\\\w$]*\\\\b)\\\\s*\\\\)*\\\\s*(?:\\\\n|//|/\\\\*|\\\\?|\\\\:|&&|\\\\|\\\\||\\\\\\\\\\\\s*\\\\n)))\",\"name\":\"keyword.control.directive.conditional.c\"},{\"match\":\"\\\\bdefined\\\\b\",\"name\":\"invalid.illegal.macro-name.c\"},{\"include\":\"#comments\"},{\"include\":\"#strings\"},{\"include\":\"#numbers\"},{\"begin\":\"\\\\?\",\"beginCaptures\":{\"0\":{\"name\":\"keyword.operator.ternary.c\"}},\"end\":\":\",\"endCaptures\":{\"0\":{\"name\":\"keyword.operator.ternary.c\"}},\"patterns\":[{\"include\":\"#preprocessor-rule-conditional-line\"}]},{\"include\":\"#operators\"},{\"match\":\"\\\\b(NULL|true|false|TRUE|FALSE)\\\\b\",\"name\":\"constant.language.c\"},{\"match\":\"[a-zA-Z_$][\\\\w$]*\",\"name\":\"entity.name.function.preprocessor.c\"},{\"include\":\"#line_continuation_character\"},{\"begin\":\"\\\\(\",\"beginCaptures\":{\"0\":{\"name\":\"punctuation.section.parens.begin.bracket.round.c\"}},\"end\":\"\\\\)|(?=//)|(?=/\\\\*(?!.*\\\\\\\\\\\\s*\\\\n))|(?<!\\\\\\\\)(?=\\\\n)\",\"endCaptures\":{\"0\":{\"name\":\"punctuation.section.parens.end.bracket.round.c\"}},\"patterns\":[{\"include\":\"#preprocessor-rule-conditional-line\"}]}]},\"preprocessor-rule-disabled\":{\"patterns\":[{\"begin\":\"^\\\\s*((#)\\\\s*if\\\\b)(?=\\\\s*\\\\(*\\\\b0+\\\\b\\\\)*\\\\s*(?:$|//|/\\\\*))\",\"beginCaptures\":{\"0\":{\"name\":\"meta.preprocessor.c\"},\"1\":{\"name\":\"keyword.control.directive.conditional.c\"},\"2\":{\"name\":\"punctuation.definition.directive.c\"}},\"end\":\"^\\\\s*((#)\\\\s*endif\\\\b)\",\"endCaptures\":{\"0\":{\"name\":\"meta.preprocessor.c\"},\"1\":{\"name\":\"keyword.control.directive.conditional.c\"},\"2\":{\"name\":\"punctuation.definition.directive.c\"}},\"patterns\":[{\"begin\":\"\\\\G(?=.)(?!//|/\\\\*(?!.*\\\\\\\\\\\\s*\\\\n))\",\"end\":\"(?=//)|(?=/\\\\*(?!.*\\\\\\\\\\\\s*\\\\n))|(?=\\\\n)\",\"name\":\"meta.preprocessor.c\",\"patterns\":[{\"include\":\"#preprocessor-rule-conditional-line\"}]},{\"include\":\"#comments\"},{\"include\":\"#preprocessor-rule-enabled-elif\"},{\"include\":\"#preprocessor-rule-enabled-else\"},{\"include\":\"#preprocessor-rule-disabled-elif\"},{\"begin\":\"^\\\\s*((#)\\\\s*elif\\\\b)\",\"beginCaptures\":{\"0\":{\"name\":\"meta.preprocessor.c\"},\"1\":{\"name\":\"keyword.control.directive.conditional.c\"},\"2\":{\"name\":\"punctuation.definition.directive.c\"}},\"end\":\"(?=^\\\\s*((#)\\\\s*(?:elif|else|endif)\\\\b))\",\"patterns\":[{\"begin\":\"\\\\G(?=.)(?!//|/\\\\*(?!.*\\\\\\\\\\\\s*\\\\n))\",\"end\":\"(?=//)|(?=/\\\\*(?!.*\\\\\\\\\\\\s*\\\\n))|(?<!\\\\\\\\)(?=\\\\n)\",\"name\":\"meta.preprocessor.c\",\"patterns\":[{\"include\":\"#preprocessor-rule-conditional-line\"}]},{\"include\":\"$base\"}]},{\"begin\":\"\\\\n\",\"end\":\"(?=^\\\\s*((#)\\\\s*(?:else|elif|endif)\\\\b))\",\"contentName\":\"comment.block.preprocessor.if-branch.c\",\"patterns\":[{\"include\":\"#disabled\"},{\"include\":\"#pragma-mark\"}]}]}]},\"preprocessor-rule-disabled-block\":{\"patterns\":[{\"begin\":\"^\\\\s*((#)\\\\s*if\\\\b)(?=\\\\s*\\\\(*\\\\b0+\\\\b\\\\)*\\\\s*(?:$|//|/\\\\*))\",\"beginCaptures\":{\"0\":{\"name\":\"meta.preprocessor.c\"},\"1\":{\"name\":\"keyword.control.directive.conditional.c\"},\"2\":{\"name\":\"punctuation.definition.directive.c\"}},\"end\":\"^\\\\s*((#)\\\\s*endif\\\\b)\",\"endCaptures\":{\"0\":{\"name\":\"meta.preprocessor.c\"},\"1\":{\"name\":\"keyword.control.directive.conditional.c\"},\"2\":{\"name\":\"punctuation.definition.directive.c\"}},\"patterns\":[{\"begin\":\"\\\\G(?=.)(?!//|/\\\\*(?!.*\\\\\\\\\\\\s*\\\\n))\",\"end\":\"(?=//)|(?=/\\\\*(?!.*\\\\\\\\\\\\s*\\\\n))|(?=\\\\n)\",\"name\":\"meta.preprocessor.c\",\"patterns\":[{\"include\":\"#preprocessor-rule-conditional-line\"}]},{\"include\":\"#comments\"},{\"include\":\"#preprocessor-rule-enabled-elif-block\"},{\"include\":\"#preprocessor-rule-enabled-else-block\"},{\"include\":\"#preprocessor-rule-disabled-elif\"},{\"begin\":\"^\\\\s*((#)\\\\s*elif\\\\b)\",\"beginCaptures\":{\"0\":{\"name\":\"meta.preprocessor.c\"},\"1\":{\"name\":\"keyword.control.directive.conditional.c\"},\"2\":{\"name\":\"punctuation.definition.directive.c\"}},\"end\":\"(?=^\\\\s*((#)\\\\s*(?:elif|else|endif)\\\\b))\",\"patterns\":[{\"begin\":\"\\\\G(?=.)(?!//|/\\\\*(?!.*\\\\\\\\\\\\s*\\\\n))\",\"end\":\"(?=//)|(?=/\\\\*(?!.*\\\\\\\\\\\\s*\\\\n))|(?<!\\\\\\\\)(?=\\\\n)\",\"name\":\"meta.preprocessor.c\",\"patterns\":[{\"include\":\"#preprocessor-rule-conditional-line\"}]},{\"include\":\"#block_innards\"}]},{\"begin\":\"\\\\n\",\"end\":\"(?=^\\\\s*((#)\\\\s*(?:else|elif|endif)\\\\b))\",\"contentName\":\"comment.block.preprocessor.if-branch.in-block.c\",\"patterns\":[{\"include\":\"#disabled\"},{\"include\":\"#pragma-mark\"}]}]}]},\"preprocessor-rule-disabled-elif\":{\"begin\":\"^\\\\s*((#)\\\\s*elif\\\\b)(?=\\\\s*\\\\(*\\\\b0+\\\\b\\\\)*\\\\s*(?:$|//|/\\\\*))\",\"beginCaptures\":{\"0\":{\"name\":\"meta.preprocessor.c\"},\"1\":{\"name\":\"keyword.control.directive.conditional.c\"},\"2\":{\"name\":\"punctuation.definition.directive.c\"}},\"end\":\"(?=^\\\\s*((#)\\\\s*(?:elif|else|endif)\\\\b))\",\"patterns\":[{\"begin\":\"\\\\G(?=.)(?!//|/\\\\*(?!.*\\\\\\\\\\\\s*\\\\n))\",\"end\":\"(?=//)|(?=/\\\\*(?!.*\\\\\\\\\\\\s*\\\\n))|(?<!\\\\\\\\)(?=\\\\n)\",\"name\":\"meta.preprocessor.c\",\"patterns\":[{\"include\":\"#preprocessor-rule-conditional-line\"}]},{\"include\":\"#comments\"},{\"begin\":\"\\\\n\",\"end\":\"(?=^\\\\s*((#)\\\\s*(?:else|elif|endif)\\\\b))\",\"contentName\":\"comment.block.preprocessor.elif-branch.c\",\"patterns\":[{\"include\":\"#disabled\"},{\"include\":\"#pragma-mark\"}]}]},\"preprocessor-rule-enabled\":{\"patterns\":[{\"begin\":\"^\\\\s*((#)\\\\s*if\\\\b)(?=\\\\s*\\\\(*\\\\b0*1\\\\b\\\\)*\\\\s*(?:$|//|/\\\\*))\",\"beginCaptures\":{\"0\":{\"name\":\"meta.preprocessor.c\"},\"1\":{\"name\":\"keyword.control.directive.conditional.c\"},\"2\":{\"name\":\"punctuation.definition.directive.c\"},\"3\":{\"name\":\"constant.numeric.preprocessor.c\"}},\"end\":\"^\\\\s*((#)\\\\s*endif\\\\b)\",\"endCaptures\":{\"0\":{\"name\":\"meta.preprocessor.c\"},\"1\":{\"name\":\"keyword.control.directive.conditional.c\"},\"2\":{\"name\":\"punctuation.definition.directive.c\"}},\"patterns\":[{\"begin\":\"\\\\G(?=.)(?!//|/\\\\*(?!.*\\\\\\\\\\\\s*\\\\n))\",\"end\":\"(?=//)|(?=/\\\\*(?!.*\\\\\\\\\\\\s*\\\\n))|(?=\\\\n)\",\"name\":\"meta.preprocessor.c\",\"patterns\":[{\"include\":\"#preprocessor-rule-conditional-line\"}]},{\"include\":\"#comments\"},{\"begin\":\"^\\\\s*((#)\\\\s*else\\\\b)\",\"beginCaptures\":{\"0\":{\"name\":\"meta.preprocessor.c\"},\"1\":{\"name\":\"keyword.control.directive.conditional.c\"},\"2\":{\"name\":\"punctuation.definition.directive.c\"}},\"end\":\"(?=^\\\\s*((#)\\\\s*endif\\\\b))\",\"contentName\":\"comment.block.preprocessor.else-branch.c\",\"patterns\":[{\"include\":\"#disabled\"},{\"include\":\"#pragma-mark\"}]},{\"begin\":\"^\\\\s*((#)\\\\s*elif\\\\b)\",\"beginCaptures\":{\"0\":{\"name\":\"meta.preprocessor.c\"},\"1\":{\"name\":\"keyword.control.directive.conditional.c\"},\"2\":{\"name\":\"punctuation.definition.directive.c\"}},\"end\":\"(?=^\\\\s*((#)\\\\s*(?:else|elif|endif)\\\\b))\",\"contentName\":\"comment.block.preprocessor.if-branch.c\",\"patterns\":[{\"include\":\"#disabled\"},{\"include\":\"#pragma-mark\"}]},{\"begin\":\"\\\\n\",\"end\":\"(?=^\\\\s*((#)\\\\s*(?:else|elif|endif)\\\\b))\",\"patterns\":[{\"include\":\"$base\"}]}]}]},\"preprocessor-rule-enabled-block\":{\"patterns\":[{\"begin\":\"^\\\\s*((#)\\\\s*if\\\\b)(?=\\\\s*\\\\(*\\\\b0*1\\\\b\\\\)*\\\\s*(?:$|//|/\\\\*))\",\"beginCaptures\":{\"0\":{\"name\":\"meta.preprocessor.c\"},\"1\":{\"name\":\"keyword.control.directive.conditional.c\"},\"2\":{\"name\":\"punctuation.definition.directive.c\"}},\"end\":\"^\\\\s*((#)\\\\s*endif\\\\b)\",\"endCaptures\":{\"0\":{\"name\":\"meta.preprocessor.c\"},\"1\":{\"name\":\"keyword.control.directive.conditional.c\"},\"2\":{\"name\":\"punctuation.definition.directive.c\"}},\"patterns\":[{\"begin\":\"\\\\G(?=.)(?!//|/\\\\*(?!.*\\\\\\\\\\\\s*\\\\n))\",\"end\":\"(?=//)|(?=/\\\\*(?!.*\\\\\\\\\\\\s*\\\\n))|(?=\\\\n)\",\"name\":\"meta.preprocessor.c\",\"patterns\":[{\"include\":\"#preprocessor-rule-conditional-line\"}]},{\"include\":\"#comments\"},{\"begin\":\"^\\\\s*((#)\\\\s*else\\\\b)\",\"beginCaptures\":{\"0\":{\"name\":\"meta.preprocessor.c\"},\"1\":{\"name\":\"keyword.control.directive.conditional.c\"},\"2\":{\"name\":\"punctuation.definition.directive.c\"}},\"end\":\"(?=^\\\\s*((#)\\\\s*endif\\\\b))\",\"contentName\":\"comment.block.preprocessor.else-branch.in-block.c\",\"patterns\":[{\"include\":\"#disabled\"},{\"include\":\"#pragma-mark\"}]},{\"begin\":\"^\\\\s*((#)\\\\s*elif\\\\b)\",\"beginCaptures\":{\"0\":{\"name\":\"meta.preprocessor.c\"},\"1\":{\"name\":\"keyword.control.directive.conditional.c\"},\"2\":{\"name\":\"punctuation.definition.directive.c\"}},\"end\":\"(?=^\\\\s*((#)\\\\s*(?:else|elif|endif)\\\\b))\",\"contentName\":\"comment.block.preprocessor.if-branch.in-block.c\",\"patterns\":[{\"include\":\"#disabled\"},{\"include\":\"#pragma-mark\"}]},{\"begin\":\"\\\\n\",\"end\":\"(?=^\\\\s*((#)\\\\s*(?:else|elif|endif)\\\\b))\",\"patterns\":[{\"include\":\"#block_innards\"}]}]}]},\"preprocessor-rule-enabled-elif\":{\"begin\":\"^\\\\s*((#)\\\\s*elif\\\\b)(?=\\\\s*\\\\(*\\\\b0*1\\\\b\\\\)*\\\\s*(?:$|//|/\\\\*))\",\"beginCaptures\":{\"0\":{\"name\":\"meta.preprocessor.c\"},\"1\":{\"name\":\"keyword.control.directive.conditional.c\"},\"2\":{\"name\":\"punctuation.definition.directive.c\"}},\"end\":\"(?=^\\\\s*((#)\\\\s*endif\\\\b))\",\"patterns\":[{\"begin\":\"\\\\G(?=.)(?!//|/\\\\*(?!.*\\\\\\\\\\\\s*\\\\n))\",\"end\":\"(?=//)|(?=/\\\\*(?!.*\\\\\\\\\\\\s*\\\\n))|(?<!\\\\\\\\)(?=\\\\n)\",\"name\":\"meta.preprocessor.c\",\"patterns\":[{\"include\":\"#preprocessor-rule-conditional-line\"}]},{\"include\":\"#comments\"},{\"begin\":\"\\\\n\",\"end\":\"(?=^\\\\s*((#)\\\\s*(?:endif)\\\\b))\",\"patterns\":[{\"begin\":\"^\\\\s*((#)\\\\s*(else)\\\\b)\",\"beginCaptures\":{\"0\":{\"name\":\"meta.preprocessor.c\"},\"1\":{\"name\":\"keyword.control.directive.conditional.c\"},\"2\":{\"name\":\"punctuation.definition.directive.c\"}},\"end\":\"(?=^\\\\s*((#)\\\\s*endif\\\\b))\",\"contentName\":\"comment.block.preprocessor.elif-branch.c\",\"patterns\":[{\"include\":\"#disabled\"},{\"include\":\"#pragma-mark\"}]},{\"begin\":\"^\\\\s*((#)\\\\s*(elif)\\\\b)\",\"beginCaptures\":{\"0\":{\"name\":\"meta.preprocessor.c\"},\"1\":{\"name\":\"keyword.control.directive.conditional.c\"},\"2\":{\"name\":\"punctuation.definition.directive.c\"}},\"end\":\"(?=^\\\\s*((#)\\\\s*(?:else|elif|endif)\\\\b))\",\"contentName\":\"comment.block.preprocessor.elif-branch.c\",\"patterns\":[{\"include\":\"#disabled\"},{\"include\":\"#pragma-mark\"}]},{\"include\":\"$base\"}]}]},\"preprocessor-rule-enabled-elif-block\":{\"begin\":\"^\\\\s*((#)\\\\s*elif\\\\b)(?=\\\\s*\\\\(*\\\\b0*1\\\\b\\\\)*\\\\s*(?:$|//|/\\\\*))\",\"beginCaptures\":{\"0\":{\"name\":\"meta.preprocessor.c\"},\"1\":{\"name\":\"keyword.control.directive.conditional.c\"},\"2\":{\"name\":\"punctuation.definition.directive.c\"}},\"end\":\"(?=^\\\\s*((#)\\\\s*endif\\\\b))\",\"patterns\":[{\"begin\":\"\\\\G(?=.)(?!//|/\\\\*(?!.*\\\\\\\\\\\\s*\\\\n))\",\"end\":\"(?=//)|(?=/\\\\*(?!.*\\\\\\\\\\\\s*\\\\n))|(?<!\\\\\\\\)(?=\\\\n)\",\"name\":\"meta.preprocessor.c\",\"patterns\":[{\"include\":\"#preprocessor-rule-conditional-line\"}]},{\"include\":\"#comments\"},{\"begin\":\"\\\\n\",\"end\":\"(?=^\\\\s*((#)\\\\s*(?:endif)\\\\b))\",\"patterns\":[{\"begin\":\"^\\\\s*((#)\\\\s*(else)\\\\b)\",\"beginCaptures\":{\"0\":{\"name\":\"meta.preprocessor.c\"},\"1\":{\"name\":\"keyword.control.directive.conditional.c\"},\"2\":{\"name\":\"punctuation.definition.directive.c\"}},\"end\":\"(?=^\\\\s*((#)\\\\s*endif\\\\b))\",\"contentName\":\"comment.block.preprocessor.elif-branch.in-block.c\",\"patterns\":[{\"include\":\"#disabled\"},{\"include\":\"#pragma-mark\"}]},{\"begin\":\"^\\\\s*((#)\\\\s*(elif)\\\\b)\",\"beginCaptures\":{\"0\":{\"name\":\"meta.preprocessor.c\"},\"1\":{\"name\":\"keyword.control.directive.conditional.c\"},\"2\":{\"name\":\"punctuation.definition.directive.c\"}},\"end\":\"(?=^\\\\s*((#)\\\\s*(?:else|elif|endif)\\\\b))\",\"contentName\":\"comment.block.preprocessor.elif-branch.c\",\"patterns\":[{\"include\":\"#disabled\"},{\"include\":\"#pragma-mark\"}]},{\"include\":\"#block_innards\"}]}]},\"preprocessor-rule-enabled-else\":{\"begin\":\"^\\\\s*((#)\\\\s*else\\\\b)\",\"beginCaptures\":{\"0\":{\"name\":\"meta.preprocessor.c\"},\"1\":{\"name\":\"keyword.control.directive.conditional.c\"},\"2\":{\"name\":\"punctuation.definition.directive.c\"}},\"end\":\"(?=^\\\\s*((#)\\\\s*endif\\\\b))\",\"patterns\":[{\"include\":\"$base\"}]},\"preprocessor-rule-enabled-else-block\":{\"begin\":\"^\\\\s*((#)\\\\s*else\\\\b)\",\"beginCaptures\":{\"0\":{\"name\":\"meta.preprocessor.c\"},\"1\":{\"name\":\"keyword.control.directive.conditional.c\"},\"2\":{\"name\":\"punctuation.definition.directive.c\"}},\"end\":\"(?=^\\\\s*((#)\\\\s*endif\\\\b))\",\"patterns\":[{\"include\":\"#block_innards\"}]},\"preprocessor-rule-define-line-contents\":{\"patterns\":[{\"include\":\"#vararg_ellipses\"},{\"begin\":\"{\",\"beginCaptures\":{\"0\":{\"name\":\"punctuation.section.block.begin.bracket.curly.c\"}},\"end\":\"}|(?=\\\\s*#\\\\s*(?:elif|else|endif)\\\\b)|(?<!\\\\\\\\)(?=\\\\s*\\\\n)\",\"endCaptures\":{\"0\":{\"name\":\"punctuation.section.block.end.bracket.curly.c\"}},\"name\":\"meta.block.c\",\"patterns\":[{\"include\":\"#preprocessor-rule-define-line-blocks\"}]},{\"match\":\"\\\\(\",\"name\":\"punctuation.section.parens.begin.bracket.round.c\"},{\"match\":\"\\\\)\",\"name\":\"punctuation.section.parens.end.bracket.round.c\"},{\"begin\":\"(?x)\\n(?!(?:while|for|do|if|else|switch|catch|enumerate|return|typeid|alignof|alignas|sizeof|[cr]?iterate|asm|__asm__|auto|bool|_Bool|char|_Complex|double|enum|float|_Imaginary|int|long|short|signed|struct|typedef|union|unsigned|void)\\\\s*\\\\()\\n(?=\\n  (?:[A-Za-z_][A-Za-z0-9_]*+|::)++\\\\s*\\\\(  # actual name\\n  |\\n  (?:(?<=operator)(?:[-*&<>=+!]+|\\\\(\\\\)|\\\\[\\\\]))\\\\s*\\\\(\\n)\",\"end\":\"(?<=\\\\))(?!\\\\w)|(?<!\\\\\\\\)(?=\\\\s*\\\\n)\",\"name\":\"meta.function.c\",\"patterns\":[{\"include\":\"#preprocessor-rule-define-line-functions\"}]},{\"begin\":\"\\\"\",\"beginCaptures\":{\"0\":{\"name\":\"punctuation.definition.string.begin.c\"}},\"end\":\"\\\"|(?<!\\\\\\\\)(?=\\\\s*\\\\n)\",\"endCaptures\":{\"0\":{\"name\":\"punctuation.definition.string.end.c\"}},\"name\":\"string.quoted.double.c\",\"patterns\":[{\"include\":\"#string_escaped_char\"},{\"include\":\"#string_placeholder\"},{\"include\":\"#line_continuation_character\"}]},{\"begin\":\"'\",\"beginCaptures\":{\"0\":{\"name\":\"punctuation.definition.string.begin.c\"}},\"end\":\"'|(?<!\\\\\\\\)(?=\\\\s*\\\\n)\",\"endCaptures\":{\"0\":{\"name\":\"punctuation.definition.string.end.c\"}},\"name\":\"string.quoted.single.c\",\"patterns\":[{\"include\":\"#string_escaped_char\"},{\"include\":\"#line_continuation_character\"}]},{\"include\":\"#access\"},{\"include\":\"#libc\"},{\"include\":\"$base\"}]},\"preprocessor-rule-define-line-blocks\":{\"patterns\":[{\"begin\":\"{\",\"beginCaptures\":{\"0\":{\"name\":\"punctuation.section.block.begin.bracket.curly.c\"}},\"end\":\"}|(?=\\\\s*#\\\\s*(?:elif|else|endif)\\\\b)|(?<!\\\\\\\\)(?=\\\\s*\\\\n)\",\"endCaptures\":{\"0\":{\"name\":\"punctuation.section.block.end.bracket.curly.c\"}},\"patterns\":[{\"include\":\"#preprocessor-rule-define-line-blocks\"},{\"include\":\"#preprocessor-rule-define-line-contents\"}]},{\"include\":\"#preprocessor-rule-define-line-contents\"}]},\"preprocessor-rule-define-line-functions\":{\"patterns\":[{\"include\":\"#comments\"},{\"include\":\"#storage_types\"},{\"include\":\"#vararg_ellipses\"},{\"include\":\"#access\"},{\"include\":\"#operators\"},{\"begin\":\"(?x)\\n(?!(?:while|for|do|if|else|switch|catch|enumerate|return|typeid|alignof|alignas|sizeof|[cr]?iterate)\\\\s*\\\\()\\n(\\n(?:[A-Za-z_][A-Za-z0-9_]*+|::)++  # actual name\\n|\\n(?:(?<=operator)(?:[-*&<>=+!]+|\\\\(\\\\)|\\\\[\\\\]))\\n)\\n\\\\s*(\\\\()\",\"beginCaptures\":{\"1\":{\"name\":\"entity.name.function.c\"},\"2\":{\"name\":\"punctuation.section.arguments.begin.bracket.round.c\"}},\"end\":\"(\\\\))|(?<!\\\\\\\\)(?=\\\\s*\\\\n)\",\"endCaptures\":{\"1\":{\"name\":\"punctuation.section.arguments.end.bracket.round.c\"}},\"patterns\":[{\"include\":\"#preprocessor-rule-define-line-functions\"}]},{\"begin\":\"\\\\(\",\"beginCaptures\":{\"0\":{\"name\":\"punctuation.section.parens.begin.bracket.round.c\"}},\"end\":\"(\\\\))|(?<!\\\\\\\\)(?=\\\\s*\\\\n)\",\"endCaptures\":{\"1\":{\"name\":\"punctuation.section.parens.end.bracket.round.c\"}},\"patterns\":[{\"include\":\"#preprocessor-rule-define-line-functions\"}]},{\"include\":\"#preprocessor-rule-define-line-contents\"}]},\"function-innards\":{\"patterns\":[{\"include\":\"#comments\"},{\"include\":\"#storage_types\"},{\"include\":\"#operators\"},{\"include\":\"#vararg_ellipses\"},{\"begin\":\"(?x)\\n(?!(?:while|for|do|if|else|switch|catch|enumerate|return|typeid|alignof|alignas|sizeof|[cr]?iterate)\\\\s*\\\\()\\n(\\n(?:[A-Za-z_][A-Za-z0-9_]*+|::)++  # actual name\\n|\\n(?:(?<=operator)(?:[-*&<>=+!]+|\\\\(\\\\)|\\\\[\\\\]))\\n)\\n\\\\s*(\\\\()\",\"beginCaptures\":{\"1\":{\"name\":\"entity.name.function.c\"},\"2\":{\"name\":\"punctuation.section.parameters.begin.bracket.round.c\"}},\"end\":\"\\\\)\",\"endCaptures\":{\"0\":{\"name\":\"punctuation.section.parameters.end.bracket.round.c\"}},\"patterns\":[{\"include\":\"#function-innards\"}]},{\"begin\":\"\\\\(\",\"beginCaptures\":{\"0\":{\"name\":\"punctuation.section.parens.begin.bracket.round.c\"}},\"end\":\"\\\\)\",\"endCaptures\":{\"0\":{\"name\":\"punctuation.section.parens.end.bracket.round.c\"}},\"patterns\":[{\"include\":\"#function-innards\"}]},{\"include\":\"$base\"}]},\"function-call-innards\":{\"patterns\":[{\"include\":\"#comments\"},{\"include\":\"#storage_types\"},{\"include\":\"#access\"},{\"include\":\"#operators\"},{\"begin\":\"(?x)\\n(?!(?:while|for|do|if|else|switch|catch|enumerate|return|typeid|alignof|alignas|sizeof|[cr]?iterate)\\\\s*\\\\()\\n(\\n(?:[A-Za-z_][A-Za-z0-9_]*+|::)++  # actual name\\n|\\n(?:(?<=operator)(?:[-*&<>=+!]+|\\\\(\\\\)|\\\\[\\\\]))\\n)\\n\\\\s*(\\\\()\",\"beginCaptures\":{\"1\":{\"name\":\"entity.name.function.c\"},\"2\":{\"name\":\"punctuation.section.arguments.begin.bracket.round.c\"}},\"end\":\"\\\\)\",\"endCaptures\":{\"0\":{\"name\":\"punctuation.section.arguments.end.bracket.round.c\"}},\"patterns\":[{\"include\":\"#function-call-innards\"}]},{\"begin\":\"\\\\(\",\"beginCaptures\":{\"0\":{\"name\":\"punctuation.section.parens.begin.bracket.round.c\"}},\"end\":\"\\\\)\",\"endCaptures\":{\"0\":{\"name\":\"punctuation.section.parens.end.bracket.round.c\"}},\"patterns\":[{\"include\":\"#function-call-innards\"}]},{\"include\":\"#block_innards\"}]},\"angle_brackets\":{\"begin\":\"<\",\"end\":\">\",\"name\":\"meta.angle-brackets.cpp\",\"patterns\":[{\"include\":\"#angle_brackets\"},{\"include\":\"$base\"}]},\"constructor\":{\"patterns\":[{\"begin\":\"(?x)\\n(?:^\\\\s*)  # beginning of line\\n((?!while|for|do|if|else|switch|catch|enumerate|r?iterate)[A-Za-z_][A-Za-z0-9_:]*) # actual name\\n\\\\s*(\\\\()  # opening bracket\",\"beginCaptures\":{\"1\":{\"name\":\"entity.name.function.cpp\"},\"2\":{\"name\":\"punctuation.definition.parameters.begin.c\"}},\"end\":\"\\\\)\",\"endCaptures\":{\"0\":{\"name\":\"punctuation.definition.parameters.end.c\"}},\"name\":\"meta.function.constructor.cpp\",\"patterns\":[{\"include\":\"$base\"}]},{\"begin\":\"(?x)\\n(:)\\n(\\n  (?=\\n    \\\\s*[A-Za-z_][A-Za-z0-9_:]* # actual name\\n    \\\\s* (\\\\() # opening bracket\\n  )\\n)\",\"beginCaptures\":{\"1\":{\"name\":\"punctuation.definition.parameters.c\"}},\"end\":\"(?=\\\\{)\",\"name\":\"meta.function.constructor.initializer-list.cpp\",\"patterns\":[{\"include\":\"$base\"}]}]},\"special_block\":{\"patterns\":[{\"begin\":\"\\\\b(using)\\\\b\\\\s*(namespace)\\\\b\\\\s*((?:[_A-Za-z][_A-Za-z0-9]*\\\\b(::)?)*)\",\"beginCaptures\":{\"1\":{\"name\":\"keyword.control.cpp\"},\"2\":{\"name\":\"storage.type.cpp\"},\"3\":{\"name\":\"entity.name.type.cpp\"}},\"end\":\"(;)\",\"name\":\"meta.using-namespace-declaration.cpp\"},{\"begin\":\"\\\\b(namespace)\\\\b\\\\s*([_A-Za-z][_A-Za-z0-9]*\\\\b)?+\",\"beginCaptures\":{\"1\":{\"name\":\"storage.type.cpp\"},\"2\":{\"name\":\"entity.name.type.cpp\"}},\"captures\":{\"1\":{\"name\":\"keyword.control.namespace.$2\"}},\"end\":\"(?<=\\\\})|(?=(;|,|\\\\(|\\\\)|>|\\\\[|\\\\]|=))\",\"name\":\"meta.namespace-block.cpp\",\"patterns\":[{\"begin\":\"\\\\{\",\"beginCaptures\":{\"0\":{\"name\":\"punctuation.definition.scope.cpp\"}},\"end\":\"\\\\}\",\"endCaptures\":{\"0\":{\"name\":\"punctuation.definition.scope.cpp\"}},\"patterns\":[{\"include\":\"#special_block\"},{\"include\":\"#constructor\"},{\"include\":\"$base\"}]},{\"include\":\"$base\"}]},{\"begin\":\"\\\\b(class|struct)\\\\b\\\\s*([_A-Za-z][_A-Za-z0-9]*\\\\b)?+(\\\\s*:\\\\s*(public|protected|private)\\\\s*([_A-Za-z][_A-Za-z0-9]*\\\\b)((\\\\s*,\\\\s*(public|protected|private)\\\\s*[_A-Za-z][_A-Za-z0-9]*\\\\b)*))?\",\"beginCaptures\":{\"1\":{\"name\":\"storage.type.cpp\"},\"2\":{\"name\":\"entity.name.type.cpp\"},\"4\":{\"name\":\"storage.type.modifier.cpp\"},\"5\":{\"name\":\"entity.name.type.inherited.cpp\"},\"6\":{\"patterns\":[{\"match\":\"(public|protected|private)\",\"name\":\"storage.type.modifier.cpp\"},{\"match\":\"[_A-Za-z][_A-Za-z0-9]*\",\"name\":\"entity.name.type.inherited.cpp\"}]}},\"end\":\"(?<=\\\\})|(?=(;|\\\\(|\\\\)|>|\\\\[|\\\\]|=))\",\"name\":\"meta.class-struct-block.cpp\",\"patterns\":[{\"include\":\"#angle_brackets\"},{\"begin\":\"\\\\{\",\"beginCaptures\":{\"0\":{\"name\":\"punctuation.section.block.begin.bracket.curly.cpp\"}},\"end\":\"(\\\\})(\\\\s*\\\\n)?\",\"endCaptures\":{\"1\":{\"name\":\"punctuation.section.block.end.bracket.curly.cpp\"},\"2\":{\"name\":\"invalid.illegal.you-forgot-semicolon.cpp\"}},\"patterns\":[{\"include\":\"#special_block\"},{\"include\":\"#constructor\"},{\"include\":\"$base\"}]},{\"include\":\"$base\"}]},{\"begin\":\"\\\\b(extern)(?=\\\\s*\\\")\",\"beginCaptures\":{\"1\":{\"name\":\"storage.modifier.cpp\"}},\"end\":\"(?<=\\\\})|(?=\\\\w)|(?=\\\\s*#\\\\s*endif\\\\b)\",\"name\":\"meta.extern-block.cpp\",\"patterns\":[{\"begin\":\"\\\\{\",\"beginCaptures\":{\"0\":{\"name\":\"punctuation.section.block.begin.bracket.curly.c\"}},\"end\":\"\\\\}|(?=\\\\s*#\\\\s*endif\\\\b)\",\"endCaptures\":{\"0\":{\"name\":\"punctuation.section.block.end.bracket.curly.c\"}},\"patterns\":[{\"include\":\"#special_block\"},{\"include\":\"$base\"}]},{\"include\":\"$base\"}]}]}}}");

/***/ }),

/***/ "./node_modules/arduino-ide-extension/lib/browser/arduino-commands.js":
/*!****************************************************************************!*\
  !*** ./node_modules/arduino-ide-extension/lib/browser/arduino-commands.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ArduinoCommands;
(function (ArduinoCommands) {
    ArduinoCommands.VERIFY = {
        id: 'arduino-verify',
        label: 'Verify Sketch'
    };
    ArduinoCommands.UPLOAD = {
        id: 'arduino-upload',
        label: 'Upload Sketch'
    };
    ArduinoCommands.SHOW_OPEN_CONTEXT_MENU = {
        id: 'arduino-show-open-context-menu',
        label: 'Open Sketch'
    };
    ArduinoCommands.OPEN_FILE_NAVIGATOR = {
        id: 'arduino-open-file-navigator'
    };
    ArduinoCommands.OPEN_SKETCH = {
        id: 'arduino-open-file'
    };
    ArduinoCommands.SAVE_SKETCH = {
        id: 'arduino-save-file'
    };
    ArduinoCommands.NEW_SKETCH = {
        id: "arduino-new-sketch",
        label: 'New Sketch',
        category: 'File'
    };
    ArduinoCommands.OPEN_BOARDS_DIALOG = {
        id: "arduino-open-boards-dialog"
    };
    ArduinoCommands.TOGGLE_ADVANCED_MODE = {
        id: "arduino-toggle-advanced-mode"
    };
})(ArduinoCommands = exports.ArduinoCommands || (exports.ArduinoCommands = {}));


/***/ }),

/***/ "./node_modules/arduino-ide-extension/lib/browser/arduino-frontend-contribution.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/arduino-ide-extension/lib/browser/arduino-frontend-contribution.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var uri_1 = __webpack_require__(/*! @theia/core/lib/common/uri */ "./node_modules/@theia/core/lib/common/uri.js");
var editor_widget_1 = __webpack_require__(/*! @theia/editor/lib/browser/editor-widget */ "./node_modules/@theia/editor/lib/browser/editor-widget.js");
var message_service_1 = __webpack_require__(/*! @theia/core/lib/common/message-service */ "./node_modules/@theia/core/lib/common/message-service.js");
var command_1 = __webpack_require__(/*! @theia/core/lib/common/command */ "./node_modules/@theia/core/lib/common/command.js");
var boards_service_1 = __webpack_require__(/*! ../common/protocol/boards-service */ "./node_modules/arduino-ide-extension/lib/common/protocol/boards-service.js");
var arduino_commands_1 = __webpack_require__(/*! ./arduino-commands */ "./node_modules/arduino-ide-extension/lib/browser/arduino-commands.js");
var core_service_1 = __webpack_require__(/*! ../common/protocol/core-service */ "./node_modules/arduino-ide-extension/lib/common/protocol/core-service.js");
var workspace_service_ext_1 = __webpack_require__(/*! ./workspace-service-ext */ "./node_modules/arduino-ide-extension/lib/browser/workspace-service-ext.js");
var boards_service_client_impl_1 = __webpack_require__(/*! ./boards/boards-service-client-impl */ "./node_modules/arduino-ide-extension/lib/browser/boards/boards-service-client-impl.js");
var workspace_commands_1 = __webpack_require__(/*! @theia/workspace/lib/browser/workspace-commands */ "./node_modules/@theia/workspace/lib/browser/workspace-commands.js");
var core_1 = __webpack_require__(/*! @theia/core */ "./node_modules/@theia/core/lib/common/index.js");
var arduino_toolbar_1 = __webpack_require__(/*! ./toolbar/arduino-toolbar */ "./node_modules/arduino-ide-extension/lib/browser/toolbar/arduino-toolbar.js");
var browser_1 = __webpack_require__(/*! @theia/editor/lib/browser */ "./node_modules/@theia/editor/lib/browser/index.js");
var browser_2 = __webpack_require__(/*! @theia/core/lib/browser */ "./node_modules/@theia/core/lib/browser/index.js");
var file_dialog_1 = __webpack_require__(/*! @theia/filesystem/lib/browser/file-dialog */ "./node_modules/@theia/filesystem/lib/browser/file-dialog/index.js");
var common_1 = __webpack_require__(/*! @theia/filesystem/lib/common */ "./node_modules/@theia/filesystem/lib/common/index.js");
var sketches_service_1 = __webpack_require__(/*! ../common/protocol/sketches-service */ "./node_modules/arduino-ide-extension/lib/common/protocol/sketches-service.js");
var tool_output_service_1 = __webpack_require__(/*! ../common/protocol/tool-output-service */ "./node_modules/arduino-ide-extension/lib/common/protocol/tool-output-service.js");
var common_frontend_contribution_1 = __webpack_require__(/*! @theia/core/lib/browser/common-frontend-contribution */ "./node_modules/@theia/core/lib/browser/common-frontend-contribution.js");
var filesystem_frontend_contribution_1 = __webpack_require__(/*! @theia/filesystem/lib/browser/filesystem-frontend-contribution */ "./node_modules/@theia/filesystem/lib/browser/filesystem-frontend-contribution.js");
var file_download_command_contribution_1 = __webpack_require__(/*! @theia/filesystem/lib/browser/download/file-download-command-contribution */ "./node_modules/@theia/filesystem/lib/browser/download/file-download-command-contribution.js");
var monaco_menu_1 = __webpack_require__(/*! @theia/monaco/lib/browser/monaco-menu */ "./node_modules/@theia/monaco/lib/browser/monaco-menu.js");
var terminal_frontend_contribution_1 = __webpack_require__(/*! @theia/terminal/lib/browser/terminal-frontend-contribution */ "./node_modules/@theia/terminal/lib/browser/terminal-frontend-contribution.js");
var boards_config_dialog_1 = __webpack_require__(/*! ./boards/boards-config-dialog */ "./node_modules/arduino-ide-extension/lib/browser/boards/boards-config-dialog.js");
var boards_toolbar_item_1 = __webpack_require__(/*! ./boards/boards-toolbar-item */ "./node_modules/arduino-ide-extension/lib/browser/boards/boards-toolbar-item.js");
var boards_config_1 = __webpack_require__(/*! ./boards/boards-config */ "./node_modules/arduino-ide-extension/lib/browser/boards/boards-config.js");
var monitor_connection_1 = __webpack_require__(/*! ./monitor/monitor-connection */ "./node_modules/arduino-ide-extension/lib/browser/monitor/monitor-connection.js");
var monitor_view_contribution_1 = __webpack_require__(/*! ./monitor/monitor-view-contribution */ "./node_modules/arduino-ide-extension/lib/browser/monitor/monitor-view-contribution.js");
var arduino_workspace_service_1 = __webpack_require__(/*! ./arduino-workspace-service */ "./node_modules/arduino-ide-extension/lib/browser/arduino-workspace-service.js");
var navigator_contribution_1 = __webpack_require__(/*! @theia/navigator/lib/browser/navigator-contribution */ "./node_modules/@theia/navigator/lib/browser/navigator-contribution.js");
var output_contribution_1 = __webpack_require__(/*! @theia/output/lib/browser/output-contribution */ "./node_modules/@theia/output/lib/browser/output-contribution.js");
var outline_view_contribution_1 = __webpack_require__(/*! @theia/outline-view/lib/browser/outline-view-contribution */ "./node_modules/@theia/outline-view/lib/browser/outline-view-contribution.js");
var problem_contribution_1 = __webpack_require__(/*! @theia/markers/lib/browser/problem/problem-contribution */ "./node_modules/@theia/markers/lib/browser/problem/problem-contribution.js");
var scm_contribution_1 = __webpack_require__(/*! @theia/scm/lib/browser/scm-contribution */ "./node_modules/@theia/scm/lib/browser/scm-contribution.js");
var search_in_workspace_frontend_contribution_1 = __webpack_require__(/*! @theia/search-in-workspace/lib/browser/search-in-workspace-frontend-contribution */ "./node_modules/@theia/search-in-workspace/lib/browser/search-in-workspace-frontend-contribution.js");
var navigator_contribution_2 = __webpack_require__(/*! @theia/navigator/lib/browser/navigator-contribution */ "./node_modules/@theia/navigator/lib/browser/navigator-contribution.js");
var editor_mode_1 = __webpack_require__(/*! ./editor-mode */ "./node_modules/arduino-ide-extension/lib/browser/editor-mode.js");
var ArduinoMenus;
(function (ArduinoMenus) {
    ArduinoMenus.SKETCH = __spread(core_1.MAIN_MENU_BAR, ['3_sketch']);
    ArduinoMenus.TOOLS = __spread(core_1.MAIN_MENU_BAR, ['4_tools']);
})(ArduinoMenus = exports.ArduinoMenus || (exports.ArduinoMenus = {}));
var ArduinoToolbarContextMenu;
(function (ArduinoToolbarContextMenu) {
    ArduinoToolbarContextMenu.OPEN_SKETCH_PATH = ['arduino-open-sketch-context-menu'];
    ArduinoToolbarContextMenu.OPEN_GROUP = __spread(ArduinoToolbarContextMenu.OPEN_SKETCH_PATH, ['1_open']);
    ArduinoToolbarContextMenu.WS_SKETCHES_GROUP = __spread(ArduinoToolbarContextMenu.OPEN_SKETCH_PATH, ['2_sketches']);
    ArduinoToolbarContextMenu.EXAMPLE_SKETCHES_GROUP = __spread(ArduinoToolbarContextMenu.OPEN_SKETCH_PATH, ['3_examples']);
})(ArduinoToolbarContextMenu = exports.ArduinoToolbarContextMenu || (exports.ArduinoToolbarContextMenu = {}));
var ArduinoFrontendContribution = /** @class */ (function () {
    function ArduinoFrontendContribution() {
        this.wsSketchCount = 0; // TODO: this does not belong here, does it?
    }
    ArduinoFrontendContribution.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var updateStatusBar;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    // This is a hack. Otherwise, the backend services won't bind.
                    return [4 /*yield*/, this.workspaceServiceExt.roots()];
                    case 1:
                        // This is a hack. Otherwise, the backend services won't bind.
                        _a.sent();
                        updateStatusBar = function (config) {
                            _this.statusBar.setElement('arduino-selected-board', {
                                alignment: browser_2.StatusBarAlignment.RIGHT,
                                text: boards_config_1.BoardsConfig.Config.toString(config)
                            });
                        };
                        this.boardsServiceClient.onBoardsConfigChanged(updateStatusBar);
                        updateStatusBar(this.boardsServiceClient.boardsConfig);
                        this.registerSketchesInMenu(this.menuRegistry);
                        Promise.all([
                            this.boardsService.getAttachedBoards(),
                            this.boardsService.getAvailablePorts()
                        ]).then(function (_a) {
                            var _b = __read(_a, 2), boards = _b[0].boards, ports = _b[1].ports;
                            return _this.boardsServiceClient.tryReconnect(boards, ports);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    ArduinoFrontendContribution.prototype.onStart = function (app) {
        var e_1, _a;
        this.application = app;
        try {
            // Initialize all `pro-mode` widgets. This is a NOOP if in normal mode.
            for (var _b = __values([
                this.fileNavigatorContributions,
                this.outputContribution,
                this.outlineContribution,
                this.problemContribution,
                this.scmContribution,
                this.siwContribution
            ]), _c = _b.next(); !_c.done; _c = _b.next()) {
                var viewContribution = _c.value;
                if (viewContribution.initializeLayout) {
                    viewContribution.initializeLayout(this.application);
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    ArduinoFrontendContribution.prototype.registerToolbarItems = function (registry) {
        var _this = this;
        registry.registerItem({
            id: arduino_commands_1.ArduinoCommands.VERIFY.id,
            command: arduino_commands_1.ArduinoCommands.VERIFY.id,
            tooltip: 'Verify'
        });
        registry.registerItem({
            id: arduino_commands_1.ArduinoCommands.UPLOAD.id,
            command: arduino_commands_1.ArduinoCommands.UPLOAD.id,
            tooltip: 'Upload'
        });
        registry.registerItem({
            id: arduino_commands_1.ArduinoCommands.SHOW_OPEN_CONTEXT_MENU.id,
            command: arduino_commands_1.ArduinoCommands.SHOW_OPEN_CONTEXT_MENU.id,
            tooltip: 'Open'
        });
        registry.registerItem({
            id: arduino_commands_1.ArduinoCommands.SAVE_SKETCH.id,
            command: arduino_commands_1.ArduinoCommands.SAVE_SKETCH.id,
            tooltip: 'Save'
        });
        registry.registerItem({
            id: boards_toolbar_item_1.BoardsToolBarItem.TOOLBAR_ID,
            render: function () { return React.createElement(boards_toolbar_item_1.BoardsToolBarItem, { key: 'boardsToolbarItem', commands: _this.commandRegistry, boardsServiceClient: _this.boardsServiceClient, boardService: _this.boardsService }); },
            isVisible: function (widget) { return arduino_toolbar_1.ArduinoToolbar.is(widget) && widget.side === 'left'; }
        });
        registry.registerItem({
            id: 'toggle-serial-monitor',
            command: monitor_view_contribution_1.MonitorViewContribution.OPEN_SERIAL_MONITOR,
            tooltip: 'Toggle Serial Monitor',
            isVisible: function (widget) { return arduino_toolbar_1.ArduinoToolbar.is(widget) && widget.side === 'right'; }
        });
        registry.registerItem({
            id: arduino_commands_1.ArduinoCommands.TOGGLE_ADVANCED_MODE.id,
            command: arduino_commands_1.ArduinoCommands.TOGGLE_ADVANCED_MODE.id,
            tooltip: 'Toggle Advanced Mode',
            text: (this.editorMode.proMode ? '$(toggle-on)' : '$(toggle-off)'),
            isVisible: function (widget) { return arduino_toolbar_1.ArduinoToolbar.is(widget) && widget.side === 'right'; }
        });
    };
    ArduinoFrontendContribution.prototype.registerCommands = function (registry) {
        var e_2, _a, e_3, _b;
        var _this = this;
        // TODO: use proper API https://github.com/eclipse-theia/theia/pull/6599
        var allHandlers = registry._handlers;
        try {
            // Make sure to reveal the `Explorer` before executing `New File` and `New Folder`.
            for (var _c = __values([workspace_commands_1.WorkspaceCommands.NEW_FILE, workspace_commands_1.WorkspaceCommands.NEW_FOLDER]), _d = _c.next(); !_d.done; _d = _c.next()) {
                var command = _d.value;
                var id = command.id;
                var handlers = allHandlers[id].slice();
                registry.unregisterCommand(id);
                registry.registerCommand(command);
                var _loop_1 = function (handler) {
                    var wrapper = {
                        execute: function () {
                            var args = [];
                            for (var _i = 0; _i < arguments.length; _i++) {
                                args[_i] = arguments[_i];
                            }
                            _this.fileNavigatorContributions.openView({ reveal: true }).then(function () { return handler.execute(args); });
                        },
                        isVisible: function () {
                            var args = [];
                            for (var _i = 0; _i < arguments.length; _i++) {
                                args[_i] = arguments[_i];
                            }
                            return handler.isVisible(args);
                        },
                        isEnabled: function (args) {
                            return handler.isEnabled(args);
                        },
                        isToggled: function (args) {
                            return handler.isToggled(args);
                        }
                    };
                    if (!handler.isEnabled) {
                        delete wrapper.isEnabled;
                    }
                    if (!handler.isToggled) {
                        delete wrapper.isToggled;
                    }
                    if (!handler.isVisible) {
                        delete wrapper.isVisible;
                    }
                    registry.registerHandler(id, wrapper);
                };
                try {
                    for (var handlers_1 = (e_3 = void 0, __values(handlers)), handlers_1_1 = handlers_1.next(); !handlers_1_1.done; handlers_1_1 = handlers_1.next()) {
                        var handler = handlers_1_1.value;
                        _loop_1(handler);
                    }
                }
                catch (e_3_1) { e_3 = { error: e_3_1 }; }
                finally {
                    try {
                        if (handlers_1_1 && !handlers_1_1.done && (_b = handlers_1.return)) _b.call(handlers_1);
                    }
                    finally { if (e_3) throw e_3.error; }
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_2) throw e_2.error; }
        }
        registry.registerCommand(arduino_commands_1.ArduinoCommands.VERIFY, {
            isVisible: function (widget) { return arduino_toolbar_1.ArduinoToolbar.is(widget) && widget.side === 'left'; },
            isEnabled: function (widget) { return true; },
            execute: function () { return __awaiter(_this, void 0, void 0, function () {
                var widget, uri, boardsConfig, e_4;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            widget = this.getCurrentWidget();
                            if (!(widget instanceof editor_widget_1.EditorWidget)) return [3 /*break*/, 2];
                            return [4 /*yield*/, widget.saveable.save()];
                        case 1:
                            _a.sent();
                            _a.label = 2;
                        case 2:
                            uri = this.toUri(widget);
                            if (!uri) {
                                return [2 /*return*/];
                            }
                            _a.label = 3;
                        case 3:
                            _a.trys.push([3, 5, , 7]);
                            boardsConfig = this.boardsServiceClient.boardsConfig;
                            if (!boardsConfig || !boardsConfig.selectedBoard) {
                                throw new Error('No boards selected. Please select a board.');
                            }
                            if (!boardsConfig.selectedBoard.fqbn) {
                                throw new Error("No core is installed for " + boardsConfig.selectedBoard.name + ". Please install the board.");
                            }
                            // Reveal the Output view asynchronously (don't await it)
                            this.outputContribution.openView({ reveal: true });
                            return [4 /*yield*/, this.coreService.compile({ uri: uri.toString(), board: boardsConfig.selectedBoard })];
                        case 4:
                            _a.sent();
                            return [3 /*break*/, 7];
                        case 5:
                            e_4 = _a.sent();
                            return [4 /*yield*/, this.messageService.error(e_4.toString())];
                        case 6:
                            _a.sent();
                            return [3 /*break*/, 7];
                        case 7: return [2 /*return*/];
                    }
                });
            }); }
        });
        registry.registerCommand(arduino_commands_1.ArduinoCommands.UPLOAD, {
            isVisible: function (widget) { return arduino_toolbar_1.ArduinoToolbar.is(widget) && widget.side === 'left'; },
            isEnabled: function (widget) { return true; },
            execute: function () { return __awaiter(_this, void 0, void 0, function () {
                var widget, uri, monitorConfig, boardsConfig, selectedPort, e_5;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            widget = this.getCurrentWidget();
                            if (!(widget instanceof editor_widget_1.EditorWidget)) return [3 /*break*/, 2];
                            return [4 /*yield*/, widget.saveable.save()];
                        case 1:
                            _a.sent();
                            _a.label = 2;
                        case 2:
                            uri = this.toUri(widget);
                            if (!uri) {
                                return [2 /*return*/];
                            }
                            monitorConfig = this.monitorConnection.monitorConfig;
                            if (!monitorConfig) return [3 /*break*/, 4];
                            return [4 /*yield*/, this.monitorConnection.disconnect()];
                        case 3:
                            _a.sent();
                            _a.label = 4;
                        case 4:
                            _a.trys.push([4, 6, 8, 11]);
                            boardsConfig = this.boardsServiceClient.boardsConfig;
                            if (!boardsConfig || !boardsConfig.selectedBoard) {
                                throw new Error('No boards selected. Please select a board.');
                            }
                            selectedPort = boardsConfig.selectedPort;
                            if (!selectedPort) {
                                throw new Error('No ports selected. Please select a port.');
                            }
                            // Reveal the Output view asynchronously (don't await it)
                            this.outputContribution.openView({ reveal: true });
                            return [4 /*yield*/, this.coreService.upload({ uri: uri.toString(), board: boardsConfig.selectedBoard, port: selectedPort.address })];
                        case 5:
                            _a.sent();
                            return [3 /*break*/, 11];
                        case 6:
                            e_5 = _a.sent();
                            return [4 /*yield*/, this.messageService.error(e_5.toString())];
                        case 7:
                            _a.sent();
                            return [3 /*break*/, 11];
                        case 8:
                            if (!monitorConfig) return [3 /*break*/, 10];
                            return [4 /*yield*/, this.monitorConnection.connect(monitorConfig)];
                        case 9:
                            _a.sent();
                            _a.label = 10;
                        case 10: return [7 /*endfinally*/];
                        case 11: return [2 /*return*/];
                    }
                });
            }); }
        });
        registry.registerCommand(arduino_commands_1.ArduinoCommands.SHOW_OPEN_CONTEXT_MENU, {
            isVisible: function (widget) { return arduino_toolbar_1.ArduinoToolbar.is(widget) && widget.side === 'left'; },
            isEnabled: function (widget) { return arduino_toolbar_1.ArduinoToolbar.is(widget) && widget.side === 'left'; },
            execute: function (widget, target) { return __awaiter(_this, void 0, void 0, function () {
                var el;
                return __generator(this, function (_a) {
                    if (this.wsSketchCount) {
                        el = target.parentElement;
                        if (el) {
                            this.contextMenuRenderer.render(ArduinoToolbarContextMenu.OPEN_SKETCH_PATH, {
                                x: el.getBoundingClientRect().left,
                                y: el.getBoundingClientRect().top + el.offsetHeight
                            });
                        }
                    }
                    else {
                        this.commandRegistry.executeCommand(arduino_commands_1.ArduinoCommands.OPEN_FILE_NAVIGATOR.id);
                    }
                    return [2 /*return*/];
                });
            }); }
        });
        registry.registerCommand(arduino_commands_1.ArduinoCommands.OPEN_FILE_NAVIGATOR, {
            isEnabled: function () { return true; },
            execute: function () { return _this.doOpenFile(); }
        });
        registry.registerCommand(arduino_commands_1.ArduinoCommands.OPEN_SKETCH, {
            isEnabled: function () { return true; },
            execute: function (sketch) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    this.workspaceService.open(new uri_1.default(sketch.uri));
                    return [2 /*return*/];
                });
            }); }
        });
        registry.registerCommand(arduino_commands_1.ArduinoCommands.SAVE_SKETCH, {
            isEnabled: function (widget) { return arduino_toolbar_1.ArduinoToolbar.is(widget) && widget.side === 'left'; },
            isVisible: function (widget) { return arduino_toolbar_1.ArduinoToolbar.is(widget) && widget.side === 'left'; },
            execute: function (sketch) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    registry.executeCommand(common_frontend_contribution_1.CommonCommands.SAVE_ALL.id);
                    return [2 /*return*/];
                });
            }); }
        });
        registry.registerCommand(arduino_commands_1.ArduinoCommands.NEW_SKETCH, new workspace_commands_1.WorkspaceRootUriAwareCommandHandler(this.workspaceService, this.selectionService, {
            execute: function (uri) { return __awaiter(_this, void 0, void 0, function () {
                var sketch, e_6;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 4]);
                            // hack: sometimes we don't get the workspace root, but the currently active file: correct for that
                            if (uri.path.ext !== "") {
                                uri = uri.withPath(uri.path.dir.dir);
                            }
                            return [4 /*yield*/, this.sketchService.createNewSketch(uri.toString())];
                        case 1:
                            sketch = _a.sent();
                            this.workspaceService.open(new uri_1.default(sketch.uri));
                            return [3 /*break*/, 4];
                        case 2:
                            e_6 = _a.sent();
                            return [4 /*yield*/, this.messageService.error(e_6.toString())];
                        case 3:
                            _a.sent();
                            return [3 /*break*/, 4];
                        case 4: return [2 /*return*/];
                    }
                });
            }); }
        }));
        registry.registerCommand(arduino_commands_1.ArduinoCommands.OPEN_BOARDS_DIALOG, {
            isEnabled: function () { return true; },
            execute: function () { return __awaiter(_this, void 0, void 0, function () {
                var boardsConfig;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.boardsConfigDialog.open()];
                        case 1:
                            boardsConfig = _a.sent();
                            if (boardsConfig) {
                                this.boardsServiceClient.boardsConfig = boardsConfig;
                            }
                            return [2 /*return*/];
                    }
                });
            }); }
        });
        registry.registerCommand(arduino_commands_1.ArduinoCommands.TOGGLE_ADVANCED_MODE, {
            execute: function () { return _this.editorMode.toggle(); },
            isVisible: function (widget) { return arduino_toolbar_1.ArduinoToolbar.is(widget) && widget.side === 'right'; },
            isToggled: function () { return _this.editorMode.proMode; }
        });
    };
    ArduinoFrontendContribution.prototype.registerMenus = function (registry) {
        var e_7, _a;
        if (!this.editorMode.proMode) {
            try {
                // If are not in pro-mode, we have to disable the context menu for the tabs.
                // Such as `Close`, `Close All`, etc.
                for (var _b = __values([
                    common_frontend_contribution_1.CommonCommands.CLOSE_TAB,
                    common_frontend_contribution_1.CommonCommands.CLOSE_OTHER_TABS,
                    common_frontend_contribution_1.CommonCommands.CLOSE_RIGHT_TABS,
                    common_frontend_contribution_1.CommonCommands.CLOSE_ALL_TABS,
                    common_frontend_contribution_1.CommonCommands.COLLAPSE_PANEL,
                    common_frontend_contribution_1.CommonCommands.TOGGLE_MAXIMIZED,
                    navigator_contribution_2.FileNavigatorCommands.REVEAL_IN_NAVIGATOR
                ]), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var command = _c.value;
                    registry.unregisterMenuAction(command);
                }
            }
            catch (e_7_1) { e_7 = { error: e_7_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_7) throw e_7.error; }
            }
            registry.unregisterMenuAction(filesystem_frontend_contribution_1.FileSystemCommands.UPLOAD);
            registry.unregisterMenuAction(file_download_command_contribution_1.FileDownloadCommands.DOWNLOAD);
            registry.unregisterMenuAction(workspace_commands_1.WorkspaceCommands.OPEN_FOLDER);
            registry.unregisterMenuAction(workspace_commands_1.WorkspaceCommands.OPEN_WORKSPACE);
            registry.unregisterMenuAction(workspace_commands_1.WorkspaceCommands.OPEN_RECENT_WORKSPACE);
            registry.unregisterMenuAction(workspace_commands_1.WorkspaceCommands.SAVE_WORKSPACE_AS);
            registry.unregisterMenuAction(workspace_commands_1.WorkspaceCommands.CLOSE);
            registry.getMenu(core_1.MAIN_MENU_BAR).removeNode(this.getMenuId(monaco_menu_1.MonacoMenus.SELECTION));
            registry.getMenu(core_1.MAIN_MENU_BAR).removeNode(this.getMenuId(browser_1.EditorMainMenu.GO));
            registry.getMenu(core_1.MAIN_MENU_BAR).removeNode(this.getMenuId(terminal_frontend_contribution_1.TerminalMenus.TERMINAL));
            registry.getMenu(core_1.MAIN_MENU_BAR).removeNode(this.getMenuId(common_frontend_contribution_1.CommonMenus.VIEW));
        }
        registry.registerSubmenu(ArduinoMenus.SKETCH, 'Sketch');
        registry.registerMenuAction(ArduinoMenus.SKETCH, {
            commandId: arduino_commands_1.ArduinoCommands.VERIFY.id,
            label: 'Verify/Compile',
            order: '1'
        });
        registry.registerMenuAction(ArduinoMenus.SKETCH, {
            commandId: arduino_commands_1.ArduinoCommands.UPLOAD.id,
            label: 'Upload',
            order: '2'
        });
        registry.registerMenuAction(ArduinoToolbarContextMenu.OPEN_GROUP, {
            commandId: arduino_commands_1.ArduinoCommands.OPEN_FILE_NAVIGATOR.id,
            label: 'Open...'
        });
        registry.registerSubmenu(ArduinoMenus.TOOLS, 'Tools');
        registry.registerMenuAction(common_frontend_contribution_1.CommonMenus.HELP, {
            commandId: arduino_commands_1.ArduinoCommands.TOGGLE_ADVANCED_MODE.id,
            label: 'Advanced Mode'
        });
        registry.registerMenuAction(__spread(common_frontend_contribution_1.CommonMenus.FILE, ['0_new_sketch']), {
            commandId: arduino_commands_1.ArduinoCommands.NEW_SKETCH.id
        });
    };
    ArduinoFrontendContribution.prototype.getMenuId = function (menuPath) {
        var index = menuPath.length - 1;
        var menuId = menuPath[index];
        return menuId;
    };
    ArduinoFrontendContribution.prototype.registerKeybindings = function (keybindings) {
        keybindings.registerKeybinding({
            command: arduino_commands_1.ArduinoCommands.VERIFY.id,
            keybinding: 'ctrlcmd+alt+v'
        });
        keybindings.registerKeybinding({
            command: arduino_commands_1.ArduinoCommands.UPLOAD.id,
            keybinding: 'ctrlcmd+alt+u'
        });
    };
    ArduinoFrontendContribution.prototype.registerSketchesInMenu = function (registry) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.sketchService.getSketches().then(function (sketches) {
                    _this.wsSketchCount = sketches.length;
                    sketches.forEach(function (sketch) {
                        var command = {
                            id: 'openSketch' + sketch.name
                        };
                        _this.commandRegistry.registerCommand(command, {
                            execute: function () { return _this.commandRegistry.executeCommand(arduino_commands_1.ArduinoCommands.OPEN_SKETCH.id, sketch); }
                        });
                        registry.registerMenuAction(ArduinoToolbarContextMenu.WS_SKETCHES_GROUP, {
                            commandId: command.id,
                            label: sketch.name
                        });
                    });
                });
                return [2 /*return*/];
            });
        });
    };
    ArduinoFrontendContribution.prototype.openSketchFiles = function (uri) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.sketchService.getSketchFiles(uri).then(function (uris) {
                    var e_8, _a;
                    try {
                        for (var uris_1 = __values(uris), uris_1_1 = uris_1.next(); !uris_1_1.done; uris_1_1 = uris_1.next()) {
                            var uri_2 = uris_1_1.value;
                            _this.editorManager.open(new uri_1.default(uri_2));
                        }
                    }
                    catch (e_8_1) { e_8 = { error: e_8_1 }; }
                    finally {
                        try {
                            if (uris_1_1 && !uris_1_1.done && (_a = uris_1.return)) _a.call(uris_1);
                        }
                        finally { if (e_8) throw e_8.error; }
                    }
                });
                return [2 /*return*/];
            });
        });
    };
    /**
     * Opens a file after prompting the `Open File` dialog. Resolves to `undefined`, if
     *  - the workspace root is not set,
     *  - the file to open does not exist, or
     *  - it was not a file, but a directory.
     *
     * Otherwise, resolves to the URI of the file.
     */
    ArduinoFrontendContribution.prototype.doOpenFile = function () {
        return __awaiter(this, void 0, void 0, function () {
            var props, _a, rootStat, destinationFileUri, destinationFile, message;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        props = {
                            title: workspace_commands_1.WorkspaceCommands.OPEN_FILE.dialogLabel,
                            canSelectFolders: false,
                            canSelectFiles: true
                        };
                        return [4 /*yield*/, this.workspaceService.roots];
                    case 1:
                        _a = __read.apply(void 0, [_b.sent(), 1]), rootStat = _a[0];
                        return [4 /*yield*/, this.fileDialogService.showOpenDialog(props, rootStat)];
                    case 2:
                        destinationFileUri = _b.sent();
                        if (!destinationFileUri) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.fileSystem.getFileStat(destinationFileUri.toString())];
                    case 3:
                        destinationFile = _b.sent();
                        if (!(destinationFile && !destinationFile.isDirectory)) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.validate(destinationFile)];
                    case 4:
                        message = _b.sent();
                        if (!message) {
                            this.workspaceService.open(destinationFileUri);
                            return [2 /*return*/, destinationFileUri];
                        }
                        else {
                            this.messageService.warn(message);
                        }
                        _b.label = 5;
                    case 5: return [2 /*return*/, undefined];
                }
            });
        });
    };
    ArduinoFrontendContribution.prototype.getCurrentWidget = function () {
        var widget = this.editorManager.currentEditor;
        if (!widget) {
            var visibleWidgets = this.editorManager.all.filter(function (w) { return w.isVisible; });
            if (visibleWidgets.length > 0) {
                widget = visibleWidgets[0];
            }
        }
        return widget;
    };
    /**
     * Returns `undefined` if the `file` is valid. Otherwise, returns with the validation error message.
     */
    ArduinoFrontendContribution.prototype.validate = function (file) {
        var uri = new uri_1.default(file.uri);
        var path = uri.path;
        var name = path.name, ext = path.ext, dir = path.dir;
        if (ext !== '.ino') {
            return "Only sketches with '.ino' extension can be opened.";
        }
        if (name !== dir.name) {
            return "The file \"" + name + ext + "\" needs to be inside a sketch folder named \"" + name + "\".";
        }
        return undefined;
    };
    ArduinoFrontendContribution.prototype.toUri = function (arg) {
        if (arg instanceof uri_1.default) {
            return arg;
        }
        if (typeof arg === 'string') {
            return new uri_1.default(arg);
        }
        if (arg instanceof editor_widget_1.EditorWidget) {
            return arg.editor.uri;
        }
        return undefined;
    };
    __decorate([
        inversify_1.inject(message_service_1.MessageService),
        __metadata("design:type", message_service_1.MessageService)
    ], ArduinoFrontendContribution.prototype, "messageService", void 0);
    __decorate([
        inversify_1.inject(boards_service_1.BoardsService),
        __metadata("design:type", Object)
    ], ArduinoFrontendContribution.prototype, "boardsService", void 0);
    __decorate([
        inversify_1.inject(core_service_1.CoreService),
        __metadata("design:type", Object)
    ], ArduinoFrontendContribution.prototype, "coreService", void 0);
    __decorate([
        inversify_1.inject(workspace_service_ext_1.WorkspaceServiceExt),
        __metadata("design:type", Object)
    ], ArduinoFrontendContribution.prototype, "workspaceServiceExt", void 0);
    __decorate([
        inversify_1.inject(tool_output_service_1.ToolOutputServiceClient),
        __metadata("design:type", Object)
    ], ArduinoFrontendContribution.prototype, "toolOutputServiceClient", void 0);
    __decorate([
        inversify_1.inject(boards_service_client_impl_1.BoardsServiceClientImpl),
        __metadata("design:type", boards_service_client_impl_1.BoardsServiceClientImpl)
    ], ArduinoFrontendContribution.prototype, "boardsServiceClient", void 0);
    __decorate([
        inversify_1.inject(core_1.SelectionService),
        __metadata("design:type", core_1.SelectionService)
    ], ArduinoFrontendContribution.prototype, "selectionService", void 0);
    __decorate([
        inversify_1.inject(browser_1.EditorManager),
        __metadata("design:type", browser_1.EditorManager)
    ], ArduinoFrontendContribution.prototype, "editorManager", void 0);
    __decorate([
        inversify_1.inject(browser_2.ContextMenuRenderer),
        __metadata("design:type", Object)
    ], ArduinoFrontendContribution.prototype, "contextMenuRenderer", void 0);
    __decorate([
        inversify_1.inject(file_dialog_1.FileDialogService),
        __metadata("design:type", Object)
    ], ArduinoFrontendContribution.prototype, "fileDialogService", void 0);
    __decorate([
        inversify_1.inject(common_1.FileSystem),
        __metadata("design:type", Object)
    ], ArduinoFrontendContribution.prototype, "fileSystem", void 0);
    __decorate([
        inversify_1.inject(sketches_service_1.SketchesService),
        __metadata("design:type", Object)
    ], ArduinoFrontendContribution.prototype, "sketchService", void 0);
    __decorate([
        inversify_1.inject(boards_config_dialog_1.BoardsConfigDialog),
        __metadata("design:type", boards_config_dialog_1.BoardsConfigDialog)
    ], ArduinoFrontendContribution.prototype, "boardsConfigDialog", void 0);
    __decorate([
        inversify_1.inject(core_1.MenuModelRegistry),
        __metadata("design:type", core_1.MenuModelRegistry)
    ], ArduinoFrontendContribution.prototype, "menuRegistry", void 0);
    __decorate([
        inversify_1.inject(command_1.CommandRegistry),
        __metadata("design:type", command_1.CommandRegistry)
    ], ArduinoFrontendContribution.prototype, "commandRegistry", void 0);
    __decorate([
        inversify_1.inject(browser_2.StatusBar),
        __metadata("design:type", Object)
    ], ArduinoFrontendContribution.prototype, "statusBar", void 0);
    __decorate([
        inversify_1.inject(arduino_workspace_service_1.ArduinoWorkspaceService),
        __metadata("design:type", arduino_workspace_service_1.ArduinoWorkspaceService)
    ], ArduinoFrontendContribution.prototype, "workspaceService", void 0);
    __decorate([
        inversify_1.inject(monitor_connection_1.MonitorConnection),
        __metadata("design:type", monitor_connection_1.MonitorConnection)
    ], ArduinoFrontendContribution.prototype, "monitorConnection", void 0);
    __decorate([
        inversify_1.inject(navigator_contribution_1.FileNavigatorContribution),
        __metadata("design:type", navigator_contribution_1.FileNavigatorContribution)
    ], ArduinoFrontendContribution.prototype, "fileNavigatorContributions", void 0);
    __decorate([
        inversify_1.inject(output_contribution_1.OutputContribution),
        __metadata("design:type", output_contribution_1.OutputContribution)
    ], ArduinoFrontendContribution.prototype, "outputContribution", void 0);
    __decorate([
        inversify_1.inject(outline_view_contribution_1.OutlineViewContribution),
        __metadata("design:type", outline_view_contribution_1.OutlineViewContribution)
    ], ArduinoFrontendContribution.prototype, "outlineContribution", void 0);
    __decorate([
        inversify_1.inject(problem_contribution_1.ProblemContribution),
        __metadata("design:type", problem_contribution_1.ProblemContribution)
    ], ArduinoFrontendContribution.prototype, "problemContribution", void 0);
    __decorate([
        inversify_1.inject(scm_contribution_1.ScmContribution),
        __metadata("design:type", scm_contribution_1.ScmContribution)
    ], ArduinoFrontendContribution.prototype, "scmContribution", void 0);
    __decorate([
        inversify_1.inject(search_in_workspace_frontend_contribution_1.SearchInWorkspaceFrontendContribution),
        __metadata("design:type", search_in_workspace_frontend_contribution_1.SearchInWorkspaceFrontendContribution)
    ], ArduinoFrontendContribution.prototype, "siwContribution", void 0);
    __decorate([
        inversify_1.inject(editor_mode_1.EditorMode),
        __metadata("design:type", editor_mode_1.EditorMode)
    ], ArduinoFrontendContribution.prototype, "editorMode", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], ArduinoFrontendContribution.prototype, "init", null);
    ArduinoFrontendContribution = __decorate([
        inversify_1.injectable()
    ], ArduinoFrontendContribution);
    return ArduinoFrontendContribution;
}());
exports.ArduinoFrontendContribution = ArduinoFrontendContribution;


/***/ }),

/***/ "./node_modules/arduino-ide-extension/lib/browser/arduino-frontend-module.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/arduino-ide-extension/lib/browser/arduino-frontend-module.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! ../../src/browser/style/index.css */ "./node_modules/arduino-ide-extension/src/browser/style/index.css");
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var widget_manager_1 = __webpack_require__(/*! @theia/core/lib/browser/widget-manager */ "./node_modules/@theia/core/lib/browser/widget-manager.js");
var command_1 = __webpack_require__(/*! @theia/core/lib/common/command */ "./node_modules/@theia/core/lib/common/command.js");
var view_contribution_1 = __webpack_require__(/*! @theia/core/lib/browser/shell/view-contribution */ "./node_modules/@theia/core/lib/browser/shell/view-contribution.js");
var tab_bar_toolbar_1 = __webpack_require__(/*! @theia/core/lib/browser/shell/tab-bar-toolbar */ "./node_modules/@theia/core/lib/browser/shell/tab-bar-toolbar.js");
var ws_connection_provider_1 = __webpack_require__(/*! @theia/core/lib/browser/messaging/ws-connection-provider */ "./node_modules/@theia/core/lib/browser/messaging/ws-connection-provider.js");
var frontend_application_1 = __webpack_require__(/*! @theia/core/lib/browser/frontend-application */ "./node_modules/@theia/core/lib/browser/frontend-application.js");
var textmate_1 = __webpack_require__(/*! @theia/monaco/lib/browser/textmate */ "./node_modules/@theia/monaco/lib/browser/textmate/index.js");
var browser_1 = __webpack_require__(/*! @theia/languages/lib/browser */ "./node_modules/@theia/languages/lib/browser/index.js");
var arduino_language_client_contribution_1 = __webpack_require__(/*! ./language/arduino-language-client-contribution */ "./node_modules/arduino-ide-extension/lib/browser/language/arduino-language-client-contribution.js");
var library_list_widget_1 = __webpack_require__(/*! ./library/library-list-widget */ "./node_modules/arduino-ide-extension/lib/browser/library/library-list-widget.js");
var arduino_frontend_contribution_1 = __webpack_require__(/*! ./arduino-frontend-contribution */ "./node_modules/arduino-ide-extension/lib/browser/arduino-frontend-contribution.js");
var arduino_language_grammar_contribution_1 = __webpack_require__(/*! ./language/arduino-language-grammar-contribution */ "./node_modules/arduino-ide-extension/lib/browser/language/arduino-language-grammar-contribution.js");
var library_service_1 = __webpack_require__(/*! ../common/protocol/library-service */ "./node_modules/arduino-ide-extension/lib/common/protocol/library-service.js");
var boards_service_1 = __webpack_require__(/*! ../common/protocol/boards-service */ "./node_modules/arduino-ide-extension/lib/common/protocol/boards-service.js");
var sketches_service_1 = __webpack_require__(/*! ../common/protocol/sketches-service */ "./node_modules/arduino-ide-extension/lib/common/protocol/sketches-service.js");
var core_service_1 = __webpack_require__(/*! ../common/protocol/core-service */ "./node_modules/arduino-ide-extension/lib/common/protocol/core-service.js");
var boards_list_widget_1 = __webpack_require__(/*! ./boards/boards-list-widget */ "./node_modules/arduino-ide-extension/lib/browser/boards/boards-list-widget.js");
var boards_widget_frontend_contribution_1 = __webpack_require__(/*! ./boards/boards-widget-frontend-contribution */ "./node_modules/arduino-ide-extension/lib/browser/boards/boards-widget-frontend-contribution.js");
var workspace_service_ext_1 = __webpack_require__(/*! ./workspace-service-ext */ "./node_modules/arduino-ide-extension/lib/browser/workspace-service-ext.js");
var workspace_service_ext_impl_1 = __webpack_require__(/*! ./workspace-service-ext-impl */ "./node_modules/arduino-ide-extension/lib/browser/workspace-service-ext-impl.js");
var tool_output_service_1 = __webpack_require__(/*! ../common/protocol/tool-output-service */ "./node_modules/arduino-ide-extension/lib/common/protocol/tool-output-service.js");
var tool_output_service_2 = __webpack_require__(/*! ../common/protocol/tool-output-service */ "./node_modules/arduino-ide-extension/lib/common/protocol/tool-output-service.js");
var client_service_impl_1 = __webpack_require__(/*! ./tool-output/client-service-impl */ "./node_modules/arduino-ide-extension/lib/browser/tool-output/client-service-impl.js");
var boards_service_client_impl_1 = __webpack_require__(/*! ./boards/boards-service-client-impl */ "./node_modules/arduino-ide-extension/lib/browser/boards/boards-service-client-impl.js");
var workspace_service_1 = __webpack_require__(/*! @theia/workspace/lib/browser/workspace-service */ "./node_modules/@theia/workspace/lib/browser/workspace-service.js");
var arduino_workspace_service_1 = __webpack_require__(/*! ./arduino-workspace-service */ "./node_modules/arduino-ide-extension/lib/browser/arduino-workspace-service.js");
var theming_1 = __webpack_require__(/*! @theia/core/lib/browser/theming */ "./node_modules/@theia/core/lib/browser/theming.js");
var arduino_theme_1 = __webpack_require__(/*! ./arduino-theme */ "./node_modules/arduino-ide-extension/lib/browser/arduino-theme.js");
var outline_view_contribution_1 = __webpack_require__(/*! @theia/outline-view/lib/browser/outline-view-contribution */ "./node_modules/@theia/outline-view/lib/browser/outline-view-contribution.js");
var arduino_outline_contribution_1 = __webpack_require__(/*! ./customization/arduino-outline-contribution */ "./node_modules/arduino-ide-extension/lib/browser/customization/arduino-outline-contribution.js");
var problem_contribution_1 = __webpack_require__(/*! @theia/markers/lib/browser/problem/problem-contribution */ "./node_modules/@theia/markers/lib/browser/problem/problem-contribution.js");
var arduino_problem_contribution_1 = __webpack_require__(/*! ./customization/arduino-problem-contribution */ "./node_modules/arduino-ide-extension/lib/browser/customization/arduino-problem-contribution.js");
var arduino_navigator_contribution_1 = __webpack_require__(/*! ./customization/arduino-navigator-contribution */ "./node_modules/arduino-ide-extension/lib/browser/customization/arduino-navigator-contribution.js");
var navigator_contribution_1 = __webpack_require__(/*! @theia/navigator/lib/browser/navigator-contribution */ "./node_modules/@theia/navigator/lib/browser/navigator-contribution.js");
var arduino_toolbar_contribution_1 = __webpack_require__(/*! ./toolbar/arduino-toolbar-contribution */ "./node_modules/arduino-ide-extension/lib/browser/toolbar/arduino-toolbar-contribution.js");
var output_toolbar_contribution_1 = __webpack_require__(/*! @theia/output/lib/browser/output-toolbar-contribution */ "./node_modules/@theia/output/lib/browser/output-toolbar-contribution.js");
var arduino_output_tool_contribution_1 = __webpack_require__(/*! ./customization/arduino-output-tool-contribution */ "./node_modules/arduino-ide-extension/lib/browser/customization/arduino-output-tool-contribution.js");
var editor_contribution_1 = __webpack_require__(/*! @theia/editor/lib/browser/editor-contribution */ "./node_modules/@theia/editor/lib/browser/editor-contribution.js");
var arduino_editor_contribution_1 = __webpack_require__(/*! ./customization/arduino-editor-contribution */ "./node_modules/arduino-ide-extension/lib/browser/customization/arduino-editor-contribution.js");
var monaco_status_bar_contribution_1 = __webpack_require__(/*! @theia/monaco/lib/browser/monaco-status-bar-contribution */ "./node_modules/@theia/monaco/lib/browser/monaco-status-bar-contribution.js");
var arduino_monaco_status_bar_contribution_1 = __webpack_require__(/*! ./customization/arduino-monaco-status-bar-contribution */ "./node_modules/arduino-ide-extension/lib/browser/customization/arduino-monaco-status-bar-contribution.js");
var browser_2 = __webpack_require__(/*! @theia/core/lib/browser */ "./node_modules/@theia/core/lib/browser/index.js");
var menu_1 = __webpack_require__(/*! @theia/core/lib/common/menu */ "./node_modules/@theia/core/lib/common/menu.js");
var arduino_application_shell_1 = __webpack_require__(/*! ./customization/arduino-application-shell */ "./node_modules/arduino-ide-extension/lib/browser/customization/arduino-application-shell.js");
var arduino_frontend_application_1 = __webpack_require__(/*! ./customization/arduino-frontend-application */ "./node_modules/arduino-ide-extension/lib/browser/customization/arduino-frontend-application.js");
var boards_config_dialog_1 = __webpack_require__(/*! ./boards/boards-config-dialog */ "./node_modules/arduino-ide-extension/lib/browser/boards/boards-config-dialog.js");
var boards_config_dialog_widget_1 = __webpack_require__(/*! ./boards/boards-config-dialog-widget */ "./node_modules/arduino-ide-extension/lib/browser/boards/boards-config-dialog-widget.js");
var scm_contribution_1 = __webpack_require__(/*! @theia/scm/lib/browser/scm-contribution */ "./node_modules/@theia/scm/lib/browser/scm-contribution.js");
var arduino_scm_contribution_1 = __webpack_require__(/*! ./customization/arduino-scm-contribution */ "./node_modules/arduino-ide-extension/lib/browser/customization/arduino-scm-contribution.js");
var search_in_workspace_frontend_contribution_1 = __webpack_require__(/*! @theia/search-in-workspace/lib/browser/search-in-workspace-frontend-contribution */ "./node_modules/@theia/search-in-workspace/lib/browser/search-in-workspace-frontend-contribution.js");
var arduino_search_in_workspace_contribution_1 = __webpack_require__(/*! ./customization/arduino-search-in-workspace-contribution */ "./node_modules/arduino-ide-extension/lib/browser/customization/arduino-search-in-workspace-contribution.js");
var library_widget_frontend_contribution_1 = __webpack_require__(/*! ./library/library-widget-frontend-contribution */ "./node_modules/arduino-ide-extension/lib/browser/library/library-widget-frontend-contribution.js");
var monitor_service_client_impl_1 = __webpack_require__(/*! ./monitor/monitor-service-client-impl */ "./node_modules/arduino-ide-extension/lib/browser/monitor/monitor-service-client-impl.js");
var monitor_service_1 = __webpack_require__(/*! ../common/protocol/monitor-service */ "./node_modules/arduino-ide-extension/lib/common/protocol/monitor-service.js");
var config_service_1 = __webpack_require__(/*! ../common/protocol/config-service */ "./node_modules/arduino-ide-extension/lib/common/protocol/config-service.js");
var monitor_widget_1 = __webpack_require__(/*! ./monitor/monitor-widget */ "./node_modules/arduino-ide-extension/lib/browser/monitor/monitor-widget.js");
var monitor_view_contribution_1 = __webpack_require__(/*! ./monitor/monitor-view-contribution */ "./node_modules/arduino-ide-extension/lib/browser/monitor/monitor-view-contribution.js");
var monitor_connection_1 = __webpack_require__(/*! ./monitor/monitor-connection */ "./node_modules/arduino-ide-extension/lib/browser/monitor/monitor-connection.js");
var monitor_model_1 = __webpack_require__(/*! ./monitor/monitor-model */ "./node_modules/arduino-ide-extension/lib/browser/monitor/monitor-model.js");
var monaco_editor_provider_1 = __webpack_require__(/*! @theia/monaco/lib/browser/monaco-editor-provider */ "./node_modules/@theia/monaco/lib/browser/monaco-editor-provider.js");
var arduino_monaco_editor_provider_1 = __webpack_require__(/*! ./editor/arduino-monaco-editor-provider */ "./node_modules/arduino-ide-extension/lib/browser/editor/arduino-monaco-editor-provider.js");
var tab_bar_decorator_1 = __webpack_require__(/*! @theia/core/lib/browser/shell/tab-bar-decorator */ "./node_modules/@theia/core/lib/browser/shell/tab-bar-decorator.js");
var arduino_tab_bar_decorator_1 = __webpack_require__(/*! ./shell/arduino-tab-bar-decorator */ "./node_modules/arduino-ide-extension/lib/browser/shell/arduino-tab-bar-decorator.js");
var browser_3 = __webpack_require__(/*! @theia/markers/lib/browser */ "./node_modules/@theia/markers/lib/browser/index.js");
var arduino_problem_manager_1 = __webpack_require__(/*! ./markers/arduino-problem-manager */ "./node_modules/arduino-ide-extension/lib/browser/markers/arduino-problem-manager.js");
var boards_auto_installer_1 = __webpack_require__(/*! ./boards/boards-auto-installer */ "./node_modules/arduino-ide-extension/lib/browser/boards/boards-auto-installer.js");
var about_dialog_1 = __webpack_require__(/*! @theia/core/lib/browser/about-dialog */ "./node_modules/@theia/core/lib/browser/about-dialog.js");
var arduino_about_dialog_1 = __webpack_require__(/*! ./customization/arduino-about-dialog */ "./node_modules/arduino-ide-extension/lib/browser/customization/arduino-about-dialog.js");
var arduino_shell_layout_restorer_1 = __webpack_require__(/*! ./shell/arduino-shell-layout-restorer */ "./node_modules/arduino-ide-extension/lib/browser/shell/arduino-shell-layout-restorer.js");
var editor_mode_1 = __webpack_require__(/*! ./editor-mode */ "./node_modules/arduino-ide-extension/lib/browser/editor-mode.js");
var list_item_renderer_1 = __webpack_require__(/*! ./components/component-list/list-item-renderer */ "./node_modules/arduino-ide-extension/lib/browser/components/component-list/list-item-renderer.js");
var ElementQueries = __webpack_require__(/*! css-element-queries/src/ElementQueries */ "./node_modules/css-element-queries/src/ElementQueries.js");
exports.default = new inversify_1.ContainerModule(function (bind, unbind, isBound, rebind) {
    ElementQueries.listen();
    ElementQueries.init();
    // Commands and toolbar items
    bind(arduino_frontend_contribution_1.ArduinoFrontendContribution).toSelf().inSingletonScope();
    bind(command_1.CommandContribution).toService(arduino_frontend_contribution_1.ArduinoFrontendContribution);
    bind(menu_1.MenuContribution).toService(arduino_frontend_contribution_1.ArduinoFrontendContribution);
    bind(tab_bar_toolbar_1.TabBarToolbarContribution).toService(arduino_frontend_contribution_1.ArduinoFrontendContribution);
    bind(browser_2.KeybindingContribution).toService(arduino_frontend_contribution_1.ArduinoFrontendContribution);
    bind(frontend_application_1.FrontendApplicationContribution).toService(arduino_frontend_contribution_1.ArduinoFrontendContribution);
    bind(arduino_toolbar_contribution_1.ArduinoToolbarContribution).toSelf().inSingletonScope();
    bind(frontend_application_1.FrontendApplicationContribution).toService(arduino_toolbar_contribution_1.ArduinoToolbarContribution);
    // `ino` TextMate grammar and language client
    bind(textmate_1.LanguageGrammarDefinitionContribution).to(arduino_language_grammar_contribution_1.ArduinoLanguageGrammarContribution).inSingletonScope();
    bind(browser_1.LanguageClientContribution).to(arduino_language_client_contribution_1.ArduinoLanguageClientContribution).inSingletonScope();
    // Renderer for both the library and the core widgets.
    bind(list_item_renderer_1.ListItemRenderer).toSelf().inSingletonScope();
    // Library service
    bind(library_service_1.LibraryService).toDynamicValue(function (context) { return ws_connection_provider_1.WebSocketConnectionProvider.createProxy(context.container, library_service_1.LibraryServicePath); }).inSingletonScope();
    // Library list widget
    bind(library_list_widget_1.LibraryListWidget).toSelf();
    view_contribution_1.bindViewContribution(bind, library_widget_frontend_contribution_1.LibraryListWidgetFrontendContribution);
    bind(widget_manager_1.WidgetFactory).toDynamicValue(function (context) { return ({
        id: library_list_widget_1.LibraryListWidget.WIDGET_ID,
        createWidget: function () { return context.container.get(library_list_widget_1.LibraryListWidget); }
    }); });
    bind(frontend_application_1.FrontendApplicationContribution).toService(library_widget_frontend_contribution_1.LibraryListWidgetFrontendContribution);
    // Sketch list service
    bind(sketches_service_1.SketchesService).toDynamicValue(function (context) { return ws_connection_provider_1.WebSocketConnectionProvider.createProxy(context.container, sketches_service_1.SketchesServicePath); }).inSingletonScope();
    // Config service
    bind(config_service_1.ConfigService).toDynamicValue(function (context) { return ws_connection_provider_1.WebSocketConnectionProvider.createProxy(context.container, config_service_1.ConfigServicePath); }).inSingletonScope();
    // Boards service
    bind(boards_service_1.BoardsService).toDynamicValue(function (context) {
        var connection = context.container.get(ws_connection_provider_1.WebSocketConnectionProvider);
        var client = context.container.get(boards_service_client_impl_1.BoardsServiceClientImpl);
        return connection.createProxy(boards_service_1.BoardsServicePath, client);
    }).inSingletonScope();
    // Boards service client to receive and delegate notifications from the backend.
    bind(boards_service_client_impl_1.BoardsServiceClientImpl).toSelf().inSingletonScope();
    bind(frontend_application_1.FrontendApplicationContribution).toService(boards_service_client_impl_1.BoardsServiceClientImpl);
    bind(boards_service_1.BoardsServiceClient).toDynamicValue(function (context) {
        var client = context.container.get(boards_service_client_impl_1.BoardsServiceClientImpl);
        ws_connection_provider_1.WebSocketConnectionProvider.createProxy(context.container, boards_service_1.BoardsServicePath, client);
        return client;
    }).inSingletonScope();
    // boards auto-installer
    bind(boards_auto_installer_1.BoardsAutoInstaller).toSelf().inSingletonScope();
    bind(frontend_application_1.FrontendApplicationContribution).toService(boards_auto_installer_1.BoardsAutoInstaller);
    // Boards list widget
    bind(boards_list_widget_1.BoardsListWidget).toSelf();
    view_contribution_1.bindViewContribution(bind, boards_widget_frontend_contribution_1.BoardsListWidgetFrontendContribution);
    bind(widget_manager_1.WidgetFactory).toDynamicValue(function (context) { return ({
        id: boards_list_widget_1.BoardsListWidget.WIDGET_ID,
        createWidget: function () { return context.container.get(boards_list_widget_1.BoardsListWidget); }
    }); });
    bind(frontend_application_1.FrontendApplicationContribution).toService(boards_widget_frontend_contribution_1.BoardsListWidgetFrontendContribution);
    // Board select dialog
    bind(boards_config_dialog_widget_1.BoardsConfigDialogWidget).toSelf().inSingletonScope();
    bind(boards_config_dialog_1.BoardsConfigDialog).toSelf().inSingletonScope();
    bind(boards_config_dialog_1.BoardsConfigDialogProps).toConstantValue({
        title: 'Select Board'
    });
    // Core service
    bind(core_service_1.CoreService)
        .toDynamicValue(function (context) { return ws_connection_provider_1.WebSocketConnectionProvider.createProxy(context.container, core_service_1.CoreServicePath); })
        .inSingletonScope();
    // Tool output service client
    bind(client_service_impl_1.ToolOutputServiceClientImpl).toSelf().inSingletonScope();
    bind(tool_output_service_1.ToolOutputServiceClient).toDynamicValue(function (context) {
        var client = context.container.get(client_service_impl_1.ToolOutputServiceClientImpl);
        ws_connection_provider_1.WebSocketConnectionProvider.createProxy(context.container, tool_output_service_2.ToolOutputService.SERVICE_PATH, client);
        return client;
    }).inSingletonScope();
    // The workspace service extension
    bind(workspace_service_ext_1.WorkspaceServiceExt).to(workspace_service_ext_impl_1.WorkspaceServiceExtImpl).inSingletonScope().onActivation(function (_a, workspaceServiceExt) {
        var container = _a.container;
        ws_connection_provider_1.WebSocketConnectionProvider.createProxy(container, workspace_service_ext_1.WorkspaceServiceExtPath, workspaceServiceExt);
        // Eagerly active the core, library, and boards services.
        container.get(core_service_1.CoreService);
        container.get(library_service_1.LibraryService);
        container.get(boards_service_1.BoardsService);
        container.get(sketches_service_1.SketchesService);
        return workspaceServiceExt;
    });
    // Serial Monitor
    bind(monitor_model_1.MonitorModel).toSelf().inSingletonScope();
    bind(frontend_application_1.FrontendApplicationContribution).toService(monitor_model_1.MonitorModel);
    bind(monitor_widget_1.MonitorWidget).toSelf();
    view_contribution_1.bindViewContribution(bind, monitor_view_contribution_1.MonitorViewContribution);
    bind(tab_bar_toolbar_1.TabBarToolbarContribution).toService(monitor_view_contribution_1.MonitorViewContribution);
    bind(widget_manager_1.WidgetFactory).toDynamicValue(function (context) { return ({
        id: monitor_widget_1.MonitorWidget.ID,
        createWidget: function () { return context.container.get(monitor_widget_1.MonitorWidget); }
    }); });
    // Frontend binding for the monitor service
    bind(monitor_service_1.MonitorService).toDynamicValue(function (context) {
        var connection = context.container.get(ws_connection_provider_1.WebSocketConnectionProvider);
        var client = context.container.get(monitor_service_client_impl_1.MonitorServiceClientImpl);
        return connection.createProxy(monitor_service_1.MonitorServicePath, client);
    }).inSingletonScope();
    bind(monitor_connection_1.MonitorConnection).toSelf().inSingletonScope();
    // Monitor service client to receive and delegate notifications from the backend.
    bind(monitor_service_client_impl_1.MonitorServiceClientImpl).toSelf().inSingletonScope();
    bind(monitor_service_1.MonitorServiceClient).toDynamicValue(function (context) {
        var client = context.container.get(monitor_service_client_impl_1.MonitorServiceClientImpl);
        ws_connection_provider_1.WebSocketConnectionProvider.createProxy(context.container, monitor_service_1.MonitorServicePath, client);
        return client;
    }).inSingletonScope();
    bind(arduino_workspace_service_1.ArduinoWorkspaceService).toSelf().inSingletonScope();
    rebind(workspace_service_1.WorkspaceService).toService(arduino_workspace_service_1.ArduinoWorkspaceService);
    var themeService = theming_1.ThemeService.get();
    themeService.register.apply(themeService, __spread(arduino_theme_1.ArduinoTheme.themes));
    // Customizing default Theia layout based on the editor mode: `pro-mode` or `classic`.
    bind(editor_mode_1.EditorMode).toSelf().inSingletonScope();
    bind(frontend_application_1.FrontendApplicationContribution).toService(editor_mode_1.EditorMode);
    rebind(outline_view_contribution_1.OutlineViewContribution).to(arduino_outline_contribution_1.ArduinoOutlineViewContribution).inSingletonScope();
    rebind(problem_contribution_1.ProblemContribution).to(arduino_problem_contribution_1.ArduinoProblemContribution).inSingletonScope();
    rebind(navigator_contribution_1.FileNavigatorContribution).to(arduino_navigator_contribution_1.ArduinoNavigatorContribution).inSingletonScope();
    rebind(output_toolbar_contribution_1.OutputToolbarContribution).to(arduino_output_tool_contribution_1.ArduinoOutputToolContribution).inSingletonScope();
    rebind(editor_contribution_1.EditorContribution).to(arduino_editor_contribution_1.ArduinoEditorContribution).inSingletonScope();
    rebind(monaco_status_bar_contribution_1.MonacoStatusBarContribution).to(arduino_monaco_status_bar_contribution_1.ArduinoMonacoStatusBarContribution).inSingletonScope();
    rebind(browser_2.ApplicationShell).to(arduino_application_shell_1.ArduinoApplicationShell).inSingletonScope();
    rebind(scm_contribution_1.ScmContribution).to(arduino_scm_contribution_1.ArduinoScmContribution).inSingletonScope();
    rebind(search_in_workspace_frontend_contribution_1.SearchInWorkspaceFrontendContribution).to(arduino_search_in_workspace_contribution_1.ArduinoSearchInWorkspaceContribution).inSingletonScope();
    rebind(frontend_application_1.FrontendApplication).to(arduino_frontend_application_1.ArduinoFrontendApplication).inSingletonScope();
    // Monaco customizations
    bind(arduino_monaco_editor_provider_1.ArduinoMonacoEditorProvider).toSelf().inSingletonScope();
    rebind(monaco_editor_provider_1.MonacoEditorProvider).toService(arduino_monaco_editor_provider_1.ArduinoMonacoEditorProvider);
    // Decorator customizations
    bind(arduino_tab_bar_decorator_1.ArduinoTabBarDecoratorService).toSelf().inSingletonScope();
    rebind(tab_bar_decorator_1.TabBarDecoratorService).toService(arduino_tab_bar_decorator_1.ArduinoTabBarDecoratorService);
    // Problem markers
    bind(arduino_problem_manager_1.ArduinoProblemManager).toSelf().inSingletonScope();
    rebind(browser_3.ProblemManager).toService(arduino_problem_manager_1.ArduinoProblemManager);
    // About dialog to show the CLI version
    bind(arduino_about_dialog_1.ArduinoAboutDialog).toSelf().inSingletonScope();
    rebind(about_dialog_1.AboutDialog).toService(arduino_about_dialog_1.ArduinoAboutDialog);
    // Customized layout restorer that can restore the state in async way: https://github.com/eclipse-theia/theia/issues/6579
    bind(arduino_shell_layout_restorer_1.ArduinoShellLayoutRestorer).toSelf().inSingletonScope();
    rebind(browser_2.ShellLayoutRestorer).toService(arduino_shell_layout_restorer_1.ArduinoShellLayoutRestorer);
});


/***/ }),

/***/ "./node_modules/arduino-ide-extension/lib/browser/arduino-theme.js":
/*!*************************************************************************!*\
  !*** ./node_modules/arduino-ide-extension/lib/browser/arduino-theme.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var monaco_theme_registry_1 = __webpack_require__(/*! @theia/monaco/lib/browser/textmate/monaco-theme-registry */ "./node_modules/@theia/monaco/lib/browser/textmate/monaco-theme-registry.js");
var ARDUINO_CSS = __webpack_require__(/*! ../../src/browser/style/arduino.useable.css */ "./node_modules/arduino-ide-extension/src/browser/style/arduino.useable.css");
var ARDUINO_JSON = monaco_theme_registry_1.MonacoThemeRegistry.SINGLETON.register(__webpack_require__(/*! ../../src/browser/data/arduino.color-theme.json */ "./node_modules/arduino-ide-extension/src/browser/data/arduino.color-theme.json"), {}, 'arduino', 'vs').name;
var ArduinoTheme = /** @class */ (function () {
    function ArduinoTheme() {
    }
    ArduinoTheme.arduino = {
        type: 'light',
        id: 'arduino-theme',
        label: 'Arduino Light Theme',
        description: 'Arduino Light Theme',
        editorTheme: ARDUINO_JSON,
        activate: function () {
            ARDUINO_CSS.use();
        },
        deactivate: function () {
            ARDUINO_CSS.unuse();
        }
    };
    ArduinoTheme.themes = [
        ArduinoTheme.arduino
    ];
    return ArduinoTheme;
}());
exports.ArduinoTheme = ArduinoTheme;


/***/ }),

/***/ "./node_modules/arduino-ide-extension/lib/browser/arduino-workspace-resolver.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/arduino-ide-extension/lib/browser/arduino-workspace-resolver.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
var upath_1 = __webpack_require__(/*! upath */ "./node_modules/upath/build/code/upath.js");
var uri_1 = __webpack_require__(/*! @theia/core/lib/common/uri */ "./node_modules/@theia/core/lib/common/uri.js");
var os_1 = __webpack_require__(/*! @theia/core/lib/common/os */ "./node_modules/@theia/core/lib/common/os.js");
var objects_1 = __webpack_require__(/*! @theia/core/lib/common/objects */ "./node_modules/@theia/core/lib/common/objects.js");
var ArduinoWorkspaceRootResolver = /** @class */ (function () {
    function ArduinoWorkspaceRootResolver(options) {
        this.options = options;
    }
    ArduinoWorkspaceRootResolver.prototype.resolve = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var hash, recentWorkspaces, recentSketches, _a, _b, uri, valid, e_1_1;
            var e_1, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        hash = options.hash, recentWorkspaces = options.recentWorkspaces, recentSketches = options.recentSketches;
                        _d.label = 1;
                    case 1:
                        _d.trys.push([1, 6, 7, 8]);
                        _a = __values(__spread([this.hashToUri(hash)], recentWorkspaces, recentSketches).filter(objects_1.notEmpty)), _b = _a.next();
                        _d.label = 2;
                    case 2:
                        if (!!_b.done) return [3 /*break*/, 5];
                        uri = _b.value;
                        return [4 /*yield*/, this.isValid(uri)];
                    case 3:
                        valid = _d.sent();
                        if (valid) {
                            return [2 /*return*/, { uri: uri }];
                        }
                        _d.label = 4;
                    case 4:
                        _b = _a.next();
                        return [3 /*break*/, 2];
                    case 5: return [3 /*break*/, 8];
                    case 6:
                        e_1_1 = _d.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 8];
                    case 7:
                        try {
                            if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                        }
                        finally { if (e_1) throw e_1.error; }
                        return [7 /*endfinally*/];
                    case 8: return [2 /*return*/, undefined];
                }
            });
        });
    };
    ArduinoWorkspaceRootResolver.prototype.isValid = function (uri) {
        return this.options.isValid(uri);
    };
    // Note: here, the `hash` was defined as new `URI(yourValidFsPath).path` so we have to map it to a valid FS path first.
    // This is important for Windows only and a NOOP on POSIX.
    // Note: we set the `new URI(myValidUri).path.toString()` as the `hash`. See:
    // - https://github.com/eclipse-theia/theia/blob/8196e9dcf9c8de8ea0910efeb5334a974f426966/packages/workspace/src/browser/workspace-service.ts#L143 and
    // - https://github.com/eclipse-theia/theia/blob/8196e9dcf9c8de8ea0910efeb5334a974f426966/packages/workspace/src/browser/workspace-service.ts#L423
    ArduinoWorkspaceRootResolver.prototype.hashToUri = function (hash) {
        if (hash
            && hash.length > 1
            && hash.startsWith('#')) {
            var path = hash.slice(1); // Trim the leading `#`.
            return new uri_1.default(upath_1.toUnix(path.slice(os_1.isWindows && hash.startsWith('/') ? 1 : 0))).withScheme('file').toString();
        }
        return undefined;
    };
    return ArduinoWorkspaceRootResolver;
}());
exports.ArduinoWorkspaceRootResolver = ArduinoWorkspaceRootResolver;


/***/ }),

/***/ "./node_modules/arduino-ide-extension/lib/browser/arduino-workspace-service.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/arduino-ide-extension/lib/browser/arduino-workspace-service.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var core_1 = __webpack_require__(/*! @theia/core */ "./node_modules/@theia/core/lib/common/index.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "./node_modules/@theia/core/lib/browser/index.js");
var workspace_service_1 = __webpack_require__(/*! @theia/workspace/lib/browser/workspace-service */ "./node_modules/@theia/workspace/lib/browser/workspace-service.js");
var config_service_1 = __webpack_require__(/*! ../common/protocol/config-service */ "./node_modules/arduino-ide-extension/lib/common/protocol/config-service.js");
var sketches_service_1 = __webpack_require__(/*! ../common/protocol/sketches-service */ "./node_modules/arduino-ide-extension/lib/common/protocol/sketches-service.js");
var arduino_workspace_resolver_1 = __webpack_require__(/*! ./arduino-workspace-resolver */ "./node_modules/arduino-ide-extension/lib/browser/arduino-workspace-resolver.js");
var editor_mode_1 = __webpack_require__(/*! ./editor-mode */ "./node_modules/arduino-ide-extension/lib/browser/editor-mode.js");
var ArduinoWorkspaceService = /** @class */ (function (_super) {
    __extends(ArduinoWorkspaceService, _super);
    function ArduinoWorkspaceService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ArduinoWorkspaceService.prototype.getDefaultWorkspaceUri = function () {
        var _this = this;
        if (this.workspaceUri) {
            // Avoid creating a new sketch twice
            return this.workspaceUri;
        }
        this.workspaceUri = (function () { return __awaiter(_this, void 0, void 0, function () {
            var hash, _a, recentWorkspaces, recentSketches, toOpen, uri, sketchDirUri, err_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 7, , 8]);
                        hash = window.location.hash;
                        return [4 /*yield*/, Promise.all([
                                this.server.getRecentWorkspaces(),
                                this.sketchService.getSketches().then(function (sketches) { return sketches.map(function (s) { return s.uri; }); })
                            ])];
                    case 1:
                        _a = __read.apply(void 0, [_b.sent(), 2]), recentWorkspaces = _a[0], recentSketches = _a[1];
                        return [4 /*yield*/, new arduino_workspace_resolver_1.ArduinoWorkspaceRootResolver({
                                isValid: this.isValid.bind(this)
                            }).resolve({ hash: hash, recentWorkspaces: recentWorkspaces, recentSketches: recentSketches })];
                    case 2:
                        toOpen = _b.sent();
                        if (!toOpen) return [3 /*break*/, 4];
                        uri = toOpen.uri;
                        return [4 /*yield*/, this.server.setMostRecentlyUsedWorkspace(uri)];
                    case 3:
                        _b.sent();
                        return [2 /*return*/, toOpen.uri];
                    case 4: return [4 /*yield*/, this.configService.getConfiguration()];
                    case 5:
                        sketchDirUri = (_b.sent()).sketchDirUri;
                        this.logger.info("No valid workspace URI found. Creating new sketch in " + sketchDirUri);
                        return [4 /*yield*/, this.sketchService.createNewSketch(sketchDirUri)];
                    case 6: return [2 /*return*/, (_b.sent()).uri];
                    case 7:
                        err_1 = _b.sent();
                        this.logger.fatal("Failed to determine the sketch directory: " + err_1);
                        this.messageService.error('There was an error creating the sketch directory. ' +
                            'See the log for more details. ' +
                            'The application will probably not work as expected.');
                        return [2 /*return*/, _super.prototype.getDefaultWorkspaceUri.call(this)];
                    case 8: return [2 /*return*/];
                }
            });
        }); })();
        return this.workspaceUri;
    };
    ArduinoWorkspaceService.prototype.isValid = function (uri) {
        return __awaiter(this, void 0, void 0, function () {
            var exists, sketchFolder;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fileSystem.exists(uri)];
                    case 1:
                        exists = _a.sent();
                        if (!exists) {
                            return [2 /*return*/, false];
                        }
                        // The workspace root location must exist. However, when opening a workspace root in pro-mode,
                        // the workspace root must not be a sketch folder. It can be the default sketch directory, or any other directories, for instance.
                        if (this.editorMode.proMode) {
                            return [2 /*return*/, true];
                        }
                        return [4 /*yield*/, this.sketchService.isSketchFolder(uri)];
                    case 2:
                        sketchFolder = _a.sent();
                        return [2 /*return*/, sketchFolder];
                }
            });
        });
    };
    __decorate([
        inversify_1.inject(sketches_service_1.SketchesService),
        __metadata("design:type", Object)
    ], ArduinoWorkspaceService.prototype, "sketchService", void 0);
    __decorate([
        inversify_1.inject(config_service_1.ConfigService),
        __metadata("design:type", Object)
    ], ArduinoWorkspaceService.prototype, "configService", void 0);
    __decorate([
        inversify_1.inject(browser_1.LabelProvider),
        __metadata("design:type", browser_1.LabelProvider)
    ], ArduinoWorkspaceService.prototype, "labelProvider", void 0);
    __decorate([
        inversify_1.inject(editor_mode_1.EditorMode),
        __metadata("design:type", editor_mode_1.EditorMode)
    ], ArduinoWorkspaceService.prototype, "editorMode", void 0);
    __decorate([
        inversify_1.inject(core_1.MessageService),
        __metadata("design:type", core_1.MessageService)
    ], ArduinoWorkspaceService.prototype, "messageService", void 0);
    ArduinoWorkspaceService = __decorate([
        inversify_1.injectable()
    ], ArduinoWorkspaceService);
    return ArduinoWorkspaceService;
}(workspace_service_1.WorkspaceService));
exports.ArduinoWorkspaceService = ArduinoWorkspaceService;


/***/ }),

/***/ "./node_modules/arduino-ide-extension/lib/browser/boards/boards-auto-installer.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/arduino-ide-extension/lib/browser/boards/boards-auto-installer.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var message_service_1 = __webpack_require__(/*! @theia/core/lib/common/message-service */ "./node_modules/@theia/core/lib/common/message-service.js");
var boards_service_1 = __webpack_require__(/*! ../../common/protocol/boards-service */ "./node_modules/arduino-ide-extension/lib/common/protocol/boards-service.js");
var boards_service_client_impl_1 = __webpack_require__(/*! ./boards-service-client-impl */ "./node_modules/arduino-ide-extension/lib/browser/boards/boards-service-client-impl.js");
var boards_widget_frontend_contribution_1 = __webpack_require__(/*! ./boards-widget-frontend-contribution */ "./node_modules/arduino-ide-extension/lib/browser/boards/boards-widget-frontend-contribution.js");
var progress_dialog_1 = __webpack_require__(/*! ../components/progress-dialog */ "./node_modules/arduino-ide-extension/lib/browser/components/progress-dialog.js");
/**
 * Listens on `BoardsConfig.Config` changes, if a board is selected which does not
 * have the corresponding core installed, it proposes the user to install the core.
 */
var BoardsAutoInstaller = /** @class */ (function () {
    function BoardsAutoInstaller() {
    }
    BoardsAutoInstaller.prototype.onStart = function () {
        this.boardsServiceClient.onBoardsConfigChanged(this.ensureCoreExists.bind(this));
        this.ensureCoreExists(this.boardsServiceClient.boardsConfig);
    };
    BoardsAutoInstaller.prototype.ensureCoreExists = function (config) {
        var _this = this;
        var selectedBoard = config.selectedBoard;
        if (selectedBoard) {
            this.boardsService.search({}).then(function (_a) {
                var e_1, _b;
                var items = _a.items;
                var candidates = items
                    .filter(function (item) { return item.boards.some(function (board) { return boards_service_1.Board.sameAs(board, selectedBoard); }); })
                    .filter(function (_a) {
                    var installable = _a.installable, installedVersion = _a.installedVersion;
                    return installable && !installedVersion;
                });
                var _loop_1 = function (candidate) {
                    // tslint:disable-next-line:max-line-length
                    _this.messageService.info("The `\"" + candidate.name + "\"` core has to be installed for the currently selected `\"" + selectedBoard.name + "\"` board. Do you want to install it now?", 'Install Manually', 'Yes').then(function (answer) { return __awaiter(_this, void 0, void 0, function () {
                        var dialog;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    if (!(answer === 'Yes')) return [3 /*break*/, 4];
                                    dialog = new progress_dialog_1.InstallationProgressDialog(candidate.name, candidate.availableVersions[0]);
                                    dialog.open();
                                    _a.label = 1;
                                case 1:
                                    _a.trys.push([1, , 3, 4]);
                                    return [4 /*yield*/, this.boardsService.install({ item: candidate })];
                                case 2:
                                    _a.sent();
                                    return [3 /*break*/, 4];
                                case 3:
                                    dialog.close();
                                    return [7 /*endfinally*/];
                                case 4:
                                    if (answer) {
                                        this.boardsManagerFrontendContribution.openView({ reveal: true }).then(function (widget) { return widget.refresh(candidate.name.toLocaleLowerCase()); });
                                    }
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                };
                try {
                    for (var candidates_1 = __values(candidates), candidates_1_1 = candidates_1.next(); !candidates_1_1.done; candidates_1_1 = candidates_1.next()) {
                        var candidate = candidates_1_1.value;
                        _loop_1(candidate);
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (candidates_1_1 && !candidates_1_1.done && (_b = candidates_1.return)) _b.call(candidates_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            });
        }
    };
    __decorate([
        inversify_1.inject(message_service_1.MessageService),
        __metadata("design:type", message_service_1.MessageService)
    ], BoardsAutoInstaller.prototype, "messageService", void 0);
    __decorate([
        inversify_1.inject(boards_service_1.BoardsService),
        __metadata("design:type", Object)
    ], BoardsAutoInstaller.prototype, "boardsService", void 0);
    __decorate([
        inversify_1.inject(boards_service_client_impl_1.BoardsServiceClientImpl),
        __metadata("design:type", boards_service_client_impl_1.BoardsServiceClientImpl)
    ], BoardsAutoInstaller.prototype, "boardsServiceClient", void 0);
    __decorate([
        inversify_1.inject(boards_widget_frontend_contribution_1.BoardsListWidgetFrontendContribution),
        __metadata("design:type", boards_widget_frontend_contribution_1.BoardsListWidgetFrontendContribution)
    ], BoardsAutoInstaller.prototype, "boardsManagerFrontendContribution", void 0);
    BoardsAutoInstaller = __decorate([
        inversify_1.injectable()
    ], BoardsAutoInstaller);
    return BoardsAutoInstaller;
}());
exports.BoardsAutoInstaller = BoardsAutoInstaller;


/***/ }),

/***/ "./node_modules/arduino-ide-extension/lib/browser/boards/boards-config-dialog-widget.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/arduino-ide-extension/lib/browser/boards/boards-config-dialog-widget.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var event_1 = __webpack_require__(/*! @theia/core/lib/common/event */ "./node_modules/@theia/core/lib/common/event.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "./node_modules/@theia/core/lib/browser/index.js");
var boards_service_1 = __webpack_require__(/*! ../../common/protocol/boards-service */ "./node_modules/arduino-ide-extension/lib/common/protocol/boards-service.js");
var boards_config_1 = __webpack_require__(/*! ./boards-config */ "./node_modules/arduino-ide-extension/lib/browser/boards/boards-config.js");
var boards_service_client_impl_1 = __webpack_require__(/*! ./boards-service-client-impl */ "./node_modules/arduino-ide-extension/lib/browser/boards/boards-service-client-impl.js");
var BoardsConfigDialogWidget = /** @class */ (function (_super) {
    __extends(BoardsConfigDialogWidget, _super);
    function BoardsConfigDialogWidget() {
        var _this = _super.call(this) || this;
        _this.onBoardConfigChangedEmitter = new event_1.Emitter();
        _this.onBoardConfigChanged = _this.onBoardConfigChangedEmitter.event;
        _this.fireConfigChanged = function (config) {
            _this.onBoardConfigChangedEmitter.fire(config);
        };
        _this.setFocusNode = function (element) {
            _this.focusNode = element;
        };
        _this.id = 'select-board-dialog';
        return _this;
    }
    BoardsConfigDialogWidget.prototype.render = function () {
        return React.createElement("div", { className: 'selectBoardContainer' },
            React.createElement(boards_config_1.BoardsConfig, { boardsService: this.boardsService, boardsServiceClient: this.boardsServiceClient, onConfigChange: this.fireConfigChanged, onFocusNodeSet: this.setFocusNode }));
    };
    BoardsConfigDialogWidget.prototype.onActivateRequest = function (msg) {
        _super.prototype.onActivateRequest.call(this, msg);
        if (this.focusNode instanceof HTMLInputElement) {
            this.focusNode.select();
        }
        (this.focusNode || this.node).focus();
    };
    __decorate([
        inversify_1.inject(boards_service_1.BoardsService),
        __metadata("design:type", Object)
    ], BoardsConfigDialogWidget.prototype, "boardsService", void 0);
    __decorate([
        inversify_1.inject(boards_service_client_impl_1.BoardsServiceClientImpl),
        __metadata("design:type", boards_service_client_impl_1.BoardsServiceClientImpl)
    ], BoardsConfigDialogWidget.prototype, "boardsServiceClient", void 0);
    BoardsConfigDialogWidget = __decorate([
        inversify_1.injectable(),
        __metadata("design:paramtypes", [])
    ], BoardsConfigDialogWidget);
    return BoardsConfigDialogWidget;
}(browser_1.ReactWidget));
exports.BoardsConfigDialogWidget = BoardsConfigDialogWidget;


/***/ }),

/***/ "./node_modules/arduino-ide-extension/lib/browser/boards/boards-config-dialog.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/arduino-ide-extension/lib/browser/boards/boards-config-dialog.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "./node_modules/@theia/core/lib/browser/index.js");
var boards_service_1 = __webpack_require__(/*! ../../common/protocol/boards-service */ "./node_modules/arduino-ide-extension/lib/common/protocol/boards-service.js");
var boards_config_dialog_widget_1 = __webpack_require__(/*! ./boards-config-dialog-widget */ "./node_modules/arduino-ide-extension/lib/browser/boards/boards-config-dialog-widget.js");
var boards_service_client_impl_1 = __webpack_require__(/*! ./boards-service-client-impl */ "./node_modules/arduino-ide-extension/lib/browser/boards/boards-service-client-impl.js");
var BoardsConfigDialogProps = /** @class */ (function (_super) {
    __extends(BoardsConfigDialogProps, _super);
    function BoardsConfigDialogProps() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BoardsConfigDialogProps = __decorate([
        inversify_1.injectable()
    ], BoardsConfigDialogProps);
    return BoardsConfigDialogProps;
}(browser_1.DialogProps));
exports.BoardsConfigDialogProps = BoardsConfigDialogProps;
var BoardsConfigDialog = /** @class */ (function (_super) {
    __extends(BoardsConfigDialog, _super);
    function BoardsConfigDialog(props) {
        var _this = _super.call(this, props) || this;
        _this.props = props;
        _this.config = {};
        _this.contentNode.classList.add('select-board-dialog');
        _this.contentNode.appendChild(_this.createDescription());
        _this.appendCloseButton('CANCEL');
        _this.appendAcceptButton('OK');
        return _this;
    }
    BoardsConfigDialog.prototype.init = function () {
        var _this = this;
        this.toDispose.push(this.boardsServiceClient.onBoardsConfigChanged(function (config) {
            _this.config = config;
            _this.update();
        }));
    };
    BoardsConfigDialog.prototype.createDescription = function () {
        var e_1, _a;
        var head = document.createElement('div');
        head.classList.add('head');
        var title = document.createElement('div');
        title.textContent = 'Select Other Board & Port';
        title.classList.add('title');
        head.appendChild(title);
        var text = document.createElement('div');
        text.classList.add('text');
        head.appendChild(text);
        try {
            for (var _b = __values([
                'Select both a Board and a Port if you want to upload a sketch.',
                'If you only select a Board you will be able just to compile, but not to upload your sketch.'
            ]), _c = _b.next(); !_c.done; _c = _b.next()) {
                var paragraph = _c.value;
                var p = document.createElement('p');
                p.textContent = paragraph;
                text.appendChild(p);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return head;
    };
    BoardsConfigDialog.prototype.onAfterAttach = function (msg) {
        var _this = this;
        if (this.widget.isAttached) {
            browser_1.Widget.detach(this.widget);
        }
        browser_1.Widget.attach(this.widget, this.contentNode);
        this.toDisposeOnDetach.push(this.widget.onBoardConfigChanged(function (config) {
            _this.config = config;
            _this.update();
        }));
        _super.prototype.onAfterAttach.call(this, msg);
        this.update();
    };
    BoardsConfigDialog.prototype.onUpdateRequest = function (msg) {
        _super.prototype.onUpdateRequest.call(this, msg);
        this.widget.update();
    };
    BoardsConfigDialog.prototype.onActivateRequest = function (msg) {
        _super.prototype.onActivateRequest.call(this, msg);
        this.widget.activate();
    };
    BoardsConfigDialog.prototype.handleEnter = function (event) {
        if (event.target instanceof HTMLTextAreaElement) {
            return false;
        }
    };
    BoardsConfigDialog.prototype.isValid = function (value) {
        if (!value.selectedBoard) {
            if (value.selectedPort) {
                return 'Please pick a board connected to the port you have selected.';
            }
            return false;
        }
        return '';
    };
    Object.defineProperty(BoardsConfigDialog.prototype, "value", {
        get: function () {
            return this.config;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        inversify_1.inject(boards_config_dialog_widget_1.BoardsConfigDialogWidget),
        __metadata("design:type", boards_config_dialog_widget_1.BoardsConfigDialogWidget)
    ], BoardsConfigDialog.prototype, "widget", void 0);
    __decorate([
        inversify_1.inject(boards_service_1.BoardsService),
        __metadata("design:type", Object)
    ], BoardsConfigDialog.prototype, "boardService", void 0);
    __decorate([
        inversify_1.inject(boards_service_client_impl_1.BoardsServiceClientImpl),
        __metadata("design:type", boards_service_client_impl_1.BoardsServiceClientImpl)
    ], BoardsConfigDialog.prototype, "boardsServiceClient", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], BoardsConfigDialog.prototype, "init", null);
    BoardsConfigDialog = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(BoardsConfigDialogProps)),
        __metadata("design:paramtypes", [BoardsConfigDialogProps])
    ], BoardsConfigDialog);
    return BoardsConfigDialog;
}(browser_1.AbstractDialog));
exports.BoardsConfigDialog = BoardsConfigDialog;


/***/ }),

/***/ "./node_modules/arduino-ide-extension/lib/browser/boards/boards-config.js":
/*!********************************************************************************!*\
  !*** ./node_modules/arduino-ide-extension/lib/browser/boards/boards-config.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var core_1 = __webpack_require__(/*! @theia/core */ "./node_modules/@theia/core/lib/common/index.js");
var boards_service_1 = __webpack_require__(/*! ../../common/protocol/boards-service */ "./node_modules/arduino-ide-extension/lib/common/protocol/boards-service.js");
var Item = /** @class */ (function (_super) {
    __extends(Item, _super);
    function Item() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onClick = function () {
            _this.props.onClick(_this.props.item);
        };
        return _this;
    }
    Item.prototype.render = function () {
        var _a = this.props, selected = _a.selected, label = _a.label, missing = _a.missing, detail = _a.detail;
        var classNames = ['item'];
        if (selected) {
            classNames.push('selected');
        }
        if (missing === true) {
            classNames.push('missing');
        }
        return React.createElement("div", { onClick: this.onClick, className: classNames.join(' '), title: "" + label + (!detail ? '' : detail) },
            React.createElement("div", { className: 'label' }, label),
            !detail ? '' : React.createElement("div", { className: 'detail' }, detail),
            !selected ? '' : React.createElement("div", { className: 'selected-icon' },
                React.createElement("i", { className: 'fa fa-check' })));
    };
    return Item;
}(React.Component));
exports.Item = Item;
var BoardsConfig = /** @class */ (function (_super) {
    __extends(BoardsConfig, _super);
    function BoardsConfig(props) {
        var _this = _super.call(this, props) || this;
        _this.toDispose = new core_1.DisposableCollection();
        _this.updateBoards = function (eventOrQuery) {
            if (eventOrQuery === void 0) { eventOrQuery = ''; }
            var query = (typeof eventOrQuery === 'string'
                ? eventOrQuery
                : eventOrQuery.target.value.toLowerCase()).trim();
            _this.queryBoards({ query: query }).then(function (_a) {
                var searchResults = _a.searchResults;
                return _this.setState({ searchResults: searchResults });
            });
        };
        _this.updatePorts = function (ports, removedPorts) {
            if (ports === void 0) { ports = []; }
            if (removedPorts === void 0) { removedPorts = []; }
            _this.queryPorts(Promise.resolve({ ports: ports })).then(function (_a) {
                var knownPorts = _a.knownPorts;
                var selectedPort = _this.state.selectedPort;
                // If the currently selected port is not available anymore, unset the selected port.
                if (removedPorts.some(function (port) { return boards_service_1.Port.equals(port, selectedPort); })) {
                    selectedPort = undefined;
                }
                _this.setState({ knownPorts: knownPorts, selectedPort: selectedPort }, function () { return _this.fireConfigChanged(); });
            });
        };
        _this.queryBoards = function (options) {
            if (options === void 0) { options = {}; }
            var boardsService = _this.props.boardsService;
            var query = (options.query || '').toLocaleLowerCase();
            return new Promise(function (resolve) {
                boardsService.search(options)
                    .then(function (_a) {
                    var items = _a.items;
                    return items
                        .map(function (item) { return item.boards.map(function (board) { return (__assign({}, board, { packageName: item.name })); }); })
                        .reduce(function (acc, curr) { return acc.concat(curr); }, [])
                        .filter(function (board) { return board.name.toLocaleLowerCase().indexOf(query) !== -1; })
                        .sort(boards_service_1.Board.compare);
                })
                    .then(function (searchResults) { return resolve({ searchResults: searchResults }); });
            });
        };
        _this.queryPorts = function (availablePorts) {
            if (availablePorts === void 0) { availablePorts = _this.availablePorts; }
            return new Promise(function (resolve) {
                availablePorts
                    .then(function (_a) {
                    var ports = _a.ports;
                    return ports
                        .sort(boards_service_1.Port.compare);
                })
                    .then(function (knownPorts) { return resolve({ knownPorts: knownPorts }); });
            });
        };
        _this.toggleFilterPorts = function () {
            _this.setState({ showAllPorts: !_this.state.showAllPorts });
        };
        _this.selectPort = function (selectedPort) {
            _this.setState({ selectedPort: selectedPort }, function () { return _this.fireConfigChanged(); });
        };
        _this.selectBoard = function (selectedBoard) {
            _this.setState({ selectedBoard: selectedBoard }, function () { return _this.fireConfigChanged(); });
        };
        _this.focusNodeSet = function (element) {
            _this.props.onFocusNodeSet(element || undefined);
        };
        var boardsConfig = props.boardsServiceClient.boardsConfig;
        _this.state = __assign({ searchResults: [], knownPorts: [], showAllPorts: false }, boardsConfig);
        return _this;
    }
    BoardsConfig.prototype.componentDidMount = function () {
        var _this = this;
        this.updateBoards();
        this.props.boardsService.getAvailablePorts().then(function (_a) {
            var ports = _a.ports;
            return _this.updatePorts(ports);
        });
        var client = this.props.boardsServiceClient;
        this.toDispose.pushAll([
            client.onBoardsChanged(function (event) { return _this.updatePorts(event.newState.ports, boards_service_1.AttachedBoardsChangeEvent.diff(event).detached.ports); }),
            client.onBoardsConfigChanged(function (_a) {
                var selectedBoard = _a.selectedBoard, selectedPort = _a.selectedPort;
                _this.setState({ selectedBoard: selectedBoard, selectedPort: selectedPort }, function () { return _this.fireConfigChanged(); });
            })
        ]);
    };
    BoardsConfig.prototype.componentWillUnmount = function () {
        this.toDispose.dispose();
    };
    BoardsConfig.prototype.fireConfigChanged = function () {
        var _a = this.state, selectedBoard = _a.selectedBoard, selectedPort = _a.selectedPort;
        this.props.onConfigChange({ selectedBoard: selectedBoard, selectedPort: selectedPort });
    };
    Object.defineProperty(BoardsConfig.prototype, "attachedBoards", {
        get: function () {
            return this.props.boardsService.getAttachedBoards();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BoardsConfig.prototype, "availablePorts", {
        get: function () {
            return this.props.boardsService.getAvailablePorts();
        },
        enumerable: true,
        configurable: true
    });
    BoardsConfig.prototype.render = function () {
        return React.createElement("div", { className: 'body' },
            this.renderContainer('boards', this.renderBoards.bind(this)),
            this.renderContainer('ports', this.renderPorts.bind(this), this.renderPortsFooter.bind(this)));
    };
    BoardsConfig.prototype.renderContainer = function (title, contentRenderer, footerRenderer) {
        return React.createElement("div", { className: 'container' },
            React.createElement("div", { className: 'content' },
                React.createElement("div", { className: 'title' }, title),
                contentRenderer(),
                React.createElement("div", { className: 'footer' }, (footerRenderer ? footerRenderer() : ''))));
    };
    BoardsConfig.prototype.renderBoards = function () {
        var e_1, _a;
        var _this = this;
        var _b = this.state, selectedBoard = _b.selectedBoard, searchResults = _b.searchResults;
        // Board names are not unique. We show the corresponding core name as a detail.
        // https://github.com/arduino/arduino-cli/pull/294#issuecomment-513764948
        var distinctBoardNames = new Map();
        try {
            for (var searchResults_1 = __values(searchResults), searchResults_1_1 = searchResults_1.next(); !searchResults_1_1.done; searchResults_1_1 = searchResults_1.next()) {
                var name_1 = searchResults_1_1.value.name;
                var counter = distinctBoardNames.get(name_1) || 0;
                distinctBoardNames.set(name_1, counter + 1);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (searchResults_1_1 && !searchResults_1_1.done && (_a = searchResults_1.return)) _a.call(searchResults_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        // Due to the non-unique board names, we have to check the package name as well.
        var selected = function (board) {
            if (!!selectedBoard) {
                if (boards_service_1.Board.equals(board, selectedBoard)) {
                    if ('packageName' in selectedBoard) {
                        return board.packageName === selectedBoard.packageName;
                    }
                    return true;
                }
            }
            return false;
        };
        return React.createElement(React.Fragment, null,
            React.createElement("div", { className: 'search' },
                React.createElement("input", { type: 'search', placeholder: 'SEARCH BOARD', onChange: this.updateBoards, ref: this.focusNodeSet }),
                React.createElement("i", { className: 'fa fa-search' })),
            React.createElement("div", { className: 'boards list' }, this.state.searchResults.map(function (board) { return React.createElement(Item, { key: board.name + "-" + board.packageName, item: board, label: board.name, detail: (distinctBoardNames.get(board.name) || 0) > 1 ? " - " + board.packageName : undefined, selected: selected(board), onClick: _this.selectBoard, missing: !boards_service_1.Board.installed(board) }); })));
    };
    BoardsConfig.prototype.renderPorts = function () {
        var _this = this;
        var filter = this.state.showAllPorts ? function () { return true; } : boards_service_1.Port.isBoardPort;
        var ports = this.state.knownPorts.filter(filter);
        return !ports.length ?
            (React.createElement("div", { className: 'loading noselect' }, "No ports discovered")) :
            (React.createElement("div", { className: 'ports list' }, ports.map(function (port) { return React.createElement(Item, { key: boards_service_1.Port.toString(port), item: port, label: boards_service_1.Port.toString(port), selected: boards_service_1.Port.equals(_this.state.selectedPort, port), onClick: _this.selectPort }); })));
    };
    BoardsConfig.prototype.renderPortsFooter = function () {
        return React.createElement("div", { className: 'noselect' },
            React.createElement("label", { title: 'Shows all available ports when enabled' },
                React.createElement("input", { type: 'checkbox', defaultChecked: this.state.showAllPorts, onChange: this.toggleFilterPorts }),
                React.createElement("span", null, "Show all ports")));
    };
    return BoardsConfig;
}(React.Component));
exports.BoardsConfig = BoardsConfig;
(function (BoardsConfig) {
    var Config;
    (function (Config) {
        function sameAs(config, other) {
            var selectedBoard = config.selectedBoard, selectedPort = config.selectedPort;
            if (boards_service_1.AttachedSerialBoard.is(other)) {
                return !!selectedBoard
                    && boards_service_1.Board.equals(other, selectedBoard)
                    && boards_service_1.Port.sameAs(selectedPort, other.port);
            }
            return sameAs(config, other);
        }
        Config.sameAs = sameAs;
        function equals(left, right) {
            return left.selectedBoard === right.selectedBoard
                && left.selectedPort === right.selectedPort;
        }
        Config.equals = equals;
        function toString(config, options) {
            if (options === void 0) { options = { default: '' }; }
            var selectedBoard = config.selectedBoard, port = config.selectedPort;
            if (!selectedBoard) {
                return options.default;
            }
            var name = selectedBoard.name;
            return "" + name + (port ? ' at ' + boards_service_1.Port.toString(port) : '');
        }
        Config.toString = toString;
    })(Config = BoardsConfig.Config || (BoardsConfig.Config = {}));
})(BoardsConfig = exports.BoardsConfig || (exports.BoardsConfig = {}));
exports.BoardsConfig = BoardsConfig;


/***/ }),

/***/ "./node_modules/arduino-ide-extension/lib/browser/boards/boards-list-widget.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/arduino-ide-extension/lib/browser/boards/boards-list-widget.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var boards_service_1 = __webpack_require__(/*! ../../common/protocol/boards-service */ "./node_modules/arduino-ide-extension/lib/common/protocol/boards-service.js");
var list_widget_1 = __webpack_require__(/*! ../components/component-list/list-widget */ "./node_modules/arduino-ide-extension/lib/browser/components/component-list/list-widget.js");
var list_item_renderer_1 = __webpack_require__(/*! ../components/component-list/list-item-renderer */ "./node_modules/arduino-ide-extension/lib/browser/components/component-list/list-item-renderer.js");
var BoardsListWidget = /** @class */ (function (_super) {
    __extends(BoardsListWidget, _super);
    function BoardsListWidget(service, itemRenderer) {
        var _this = _super.call(this, {
            id: BoardsListWidget_1.WIDGET_ID,
            label: BoardsListWidget_1.WIDGET_LABEL,
            iconClass: 'fa fa-microchip',
            searchable: service,
            installable: service,
            itemLabel: function (item) { return item.name; },
            itemRenderer: itemRenderer
        }) || this;
        _this.service = service;
        _this.itemRenderer = itemRenderer;
        return _this;
    }
    BoardsListWidget_1 = BoardsListWidget;
    var BoardsListWidget_1;
    BoardsListWidget.WIDGET_ID = 'boards-list-widget';
    BoardsListWidget.WIDGET_LABEL = 'Boards Manager';
    BoardsListWidget = BoardsListWidget_1 = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(boards_service_1.BoardsService)),
        __param(1, inversify_1.inject(list_item_renderer_1.ListItemRenderer)),
        __metadata("design:paramtypes", [Object, list_item_renderer_1.ListItemRenderer])
    ], BoardsListWidget);
    return BoardsListWidget;
}(list_widget_1.ListWidget));
exports.BoardsListWidget = BoardsListWidget;


/***/ }),

/***/ "./node_modules/arduino-ide-extension/lib/browser/boards/boards-service-client-impl.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/arduino-ide-extension/lib/browser/boards/boards-service-client-impl.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var event_1 = __webpack_require__(/*! @theia/core/lib/common/event */ "./node_modules/@theia/core/lib/common/event.js");
var logger_1 = __webpack_require__(/*! @theia/core/lib/common/logger */ "./node_modules/@theia/core/lib/common/logger.js");
var message_service_1 = __webpack_require__(/*! @theia/core/lib/common/message-service */ "./node_modules/@theia/core/lib/common/message-service.js");
var storage_service_1 = __webpack_require__(/*! @theia/core/lib/browser/storage-service */ "./node_modules/@theia/core/lib/browser/storage-service.js");
var boards_service_1 = __webpack_require__(/*! ../../common/protocol/boards-service */ "./node_modules/arduino-ide-extension/lib/common/protocol/boards-service.js");
var BoardsServiceClientImpl = /** @class */ (function () {
    function BoardsServiceClientImpl() {
        this.onBoardInstalledEmitter = new event_1.Emitter();
        this.onBoardUninstalledEmitter = new event_1.Emitter();
        this.onAttachedBoardsChangedEmitter = new event_1.Emitter();
        this.onSelectedBoardsConfigChangedEmitter = new event_1.Emitter();
        /**
         * Used for the auto-reconnecting. Sometimes, the attached board gets disconnected after uploading something to it.
         * It happens with certain boards on Windows. For example, the `MKR1000` boards is selected on post `COM5` on Windows,
         * perform an upload, the board automatically disconnects and reconnects, but on another port, `COM10`.
         * We have to listen on such changes and auto-reconnect the same board on another port.
         * See: https://arduino.slack.com/archives/CJJHJCJSJ/p1568645417013000?thread_ts=1568640504.009400&cid=CJJHJCJSJ
         */
        this.latestValidBoardsConfig = undefined;
        this._boardsConfig = {};
        this.onBoardsChanged = this.onAttachedBoardsChangedEmitter.event;
        this.onBoardInstalled = this.onBoardInstalledEmitter.event;
        this.onBoardUninstalled = this.onBoardUninstalledEmitter.event;
        this.onBoardsConfigChanged = this.onSelectedBoardsConfigChangedEmitter.event;
    }
    BoardsServiceClientImpl.prototype.onStart = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.loadState()];
            });
        });
    };
    BoardsServiceClientImpl.prototype.notifyAttachedBoardsChanged = function (event) {
        this.logger.info('Attached boards and available ports changed: ', JSON.stringify(event));
        var _a = boards_service_1.AttachedBoardsChangeEvent.diff(event), detached = _a.detached, attached = _a.attached;
        var _b = this.boardsConfig, selectedPort = _b.selectedPort, selectedBoard = _b.selectedBoard;
        this.onAttachedBoardsChangedEmitter.fire(event);
        // Dynamically unset the port if is not available anymore. A port can be "detached" when removing a board.
        if (detached.ports.some(function (port) { return boards_service_1.Port.equals(selectedPort, port); })) {
            this.boardsConfig = {
                selectedBoard: selectedBoard,
                selectedPort: undefined
            };
        }
        // Try to reconnect.
        this.tryReconnect(attached.boards, attached.ports);
    };
    BoardsServiceClientImpl.prototype.tryReconnect = function (attachedBoards, availablePorts) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, board, _loop_1, this_1, _c, _d, board, state_1;
            var e_1, _e, e_2, _f;
            return __generator(this, function (_g) {
                if (this.latestValidBoardsConfig && !this.canUploadTo(this.boardsConfig)) {
                    try {
                        for (_a = __values(attachedBoards.filter(boards_service_1.AttachedSerialBoard.is)), _b = _a.next(); !_b.done; _b = _a.next()) {
                            board = _b.value;
                            if (this.latestValidBoardsConfig.selectedBoard.fqbn === board.fqbn
                                && this.latestValidBoardsConfig.selectedBoard.name === board.name
                                && boards_service_1.Port.sameAs(this.latestValidBoardsConfig.selectedPort, board.port)) {
                                this.boardsConfig = this.latestValidBoardsConfig;
                                return [2 /*return*/, true];
                            }
                        }
                    }
                    catch (e_1_1) { e_1 = { error: e_1_1 }; }
                    finally {
                        try {
                            if (_b && !_b.done && (_e = _a.return)) _e.call(_a);
                        }
                        finally { if (e_1) throw e_1.error; }
                    }
                    _loop_1 = function (board) {
                        if (this_1.latestValidBoardsConfig.selectedBoard.fqbn === board.fqbn
                            && this_1.latestValidBoardsConfig.selectedBoard.name === board.name) {
                            this_1.boardsConfig = __assign({}, this_1.latestValidBoardsConfig, { selectedPort: availablePorts.find(function (port) { return boards_service_1.Port.sameAs(port, board.port); }) });
                            return { value: true };
                        }
                    };
                    this_1 = this;
                    try {
                        // If we could not find an exact match, we compare the board FQBN-name pairs and ignore the port, as it might have changed.
                        // See documentation on `latestValidBoardsConfig`.
                        for (_c = __values(attachedBoards.filter(boards_service_1.AttachedSerialBoard.is)), _d = _c.next(); !_d.done; _d = _c.next()) {
                            board = _d.value;
                            state_1 = _loop_1(board);
                            if (typeof state_1 === "object")
                                return [2 /*return*/, state_1.value];
                        }
                    }
                    catch (e_2_1) { e_2 = { error: e_2_1 }; }
                    finally {
                        try {
                            if (_d && !_d.done && (_f = _c.return)) _f.call(_c);
                        }
                        finally { if (e_2) throw e_2.error; }
                    }
                }
                return [2 /*return*/, false];
            });
        });
    };
    BoardsServiceClientImpl.prototype.notifyBoardInstalled = function (event) {
        this.logger.info('Board installed: ', JSON.stringify(event));
        this.onBoardInstalledEmitter.fire(event);
    };
    BoardsServiceClientImpl.prototype.notifyBoardUninstalled = function (event) {
        this.logger.info('Board uninstalled: ', JSON.stringify(event));
        this.onBoardUninstalledEmitter.fire(event);
    };
    Object.defineProperty(BoardsServiceClientImpl.prototype, "boardsConfig", {
        get: function () {
            return this._boardsConfig;
        },
        set: function (config) {
            var _this = this;
            this.logger.info('Board config changed: ', JSON.stringify(config));
            this._boardsConfig = config;
            if (this.canUploadTo(this._boardsConfig)) {
                this.latestValidBoardsConfig = this._boardsConfig;
            }
            this.saveState().then(function () { return _this.onSelectedBoardsConfigChangedEmitter.fire(_this._boardsConfig); });
        },
        enumerable: true,
        configurable: true
    });
    /**
     * `true` if the `config.selectedBoard` is defined; hence can compile against the board. Otherwise, `false`.
     */
    BoardsServiceClientImpl.prototype.canVerify = function (config, options) {
        if (config === void 0) { config = this.boardsConfig; }
        if (options === void 0) { options = { silent: true }; }
        if (!config) {
            return false;
        }
        if (!config.selectedBoard) {
            if (!options.silent) {
                this.messageService.warn('No boards selected.', { timeout: 3000 });
            }
            return false;
        }
        return true;
    };
    /**
     * `true` if the `canVerify` and the `config.selectedPort` is also set with FQBN, hence can upload to board. Otherwise, `false`.
     */
    BoardsServiceClientImpl.prototype.canUploadTo = function (config, options) {
        if (config === void 0) { config = this.boardsConfig; }
        if (options === void 0) { options = { silent: true }; }
        if (!this.canVerify(config, options)) {
            return false;
        }
        var name = config.selectedBoard.name;
        if (!config.selectedPort) {
            if (!options.silent) {
                this.messageService.warn("No ports selected for board: '" + name + "'.", { timeout: 3000 });
            }
            return false;
        }
        if (!config.selectedBoard.fqbn) {
            if (!options.silent) {
                this.messageService.warn("The FQBN is not available for the selected board " + name + ". Do you have the corresponding core installed?", { timeout: 3000 });
            }
            return false;
        }
        return true;
    };
    BoardsServiceClientImpl.prototype.saveState = function () {
        return this.storageService.setData('latest-valid-boards-config', this.latestValidBoardsConfig);
    };
    BoardsServiceClientImpl.prototype.loadState = function () {
        return __awaiter(this, void 0, void 0, function () {
            var storedValidBoardsConfig;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storageService.getData('latest-valid-boards-config')];
                    case 1:
                        storedValidBoardsConfig = _a.sent();
                        if (storedValidBoardsConfig) {
                            this.latestValidBoardsConfig = storedValidBoardsConfig;
                            if (this.canUploadTo(this.latestValidBoardsConfig)) {
                                this.boardsConfig = this.latestValidBoardsConfig;
                            }
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        inversify_1.inject(logger_1.ILogger),
        __metadata("design:type", Object)
    ], BoardsServiceClientImpl.prototype, "logger", void 0);
    __decorate([
        inversify_1.inject(message_service_1.MessageService),
        __metadata("design:type", message_service_1.MessageService)
    ], BoardsServiceClientImpl.prototype, "messageService", void 0);
    __decorate([
        inversify_1.inject(storage_service_1.LocalStorageService),
        __metadata("design:type", storage_service_1.LocalStorageService)
    ], BoardsServiceClientImpl.prototype, "storageService", void 0);
    BoardsServiceClientImpl = __decorate([
        inversify_1.injectable()
    ], BoardsServiceClientImpl);
    return BoardsServiceClientImpl;
}());
exports.BoardsServiceClientImpl = BoardsServiceClientImpl;


/***/ }),

/***/ "./node_modules/arduino-ide-extension/lib/browser/boards/boards-toolbar-item.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/arduino-ide-extension/lib/browser/boards/boards-toolbar-item.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var ReactDOM = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
var core_1 = __webpack_require__(/*! @theia/core */ "./node_modules/@theia/core/lib/common/index.js");
var boards_service_1 = __webpack_require__(/*! ../../common/protocol/boards-service */ "./node_modules/arduino-ide-extension/lib/common/protocol/boards-service.js");
var arduino_commands_1 = __webpack_require__(/*! ../arduino-commands */ "./node_modules/arduino-ide-extension/lib/browser/arduino-commands.js");
var boards_config_1 = __webpack_require__(/*! ./boards-config */ "./node_modules/arduino-ide-extension/lib/browser/boards/boards-config.js");
var BoardsDropDown = /** @class */ (function (_super) {
    __extends(BoardsDropDown, _super);
    function BoardsDropDown(props) {
        var _this = _super.call(this, props) || this;
        var list = document.getElementById('boards-dropdown-container');
        if (!list) {
            list = document.createElement('div');
            list.id = 'boards-dropdown-container';
            document.body.appendChild(list);
            _this.dropdownElement = list;
        }
        return _this;
    }
    BoardsDropDown.prototype.render = function () {
        return ReactDOM.createPortal(this.renderNode(), this.dropdownElement);
    };
    BoardsDropDown.prototype.renderNode = function () {
        var _this = this;
        var _a = this.props, coords = _a.coords, items = _a.items;
        if (coords === 'hidden') {
            return '';
        }
        items.push({
            label: 'Select Other Board & Port',
            selected: false,
            onClick: function () { return _this.props.openBoardsConfig(); }
        });
        return React.createElement("div", { className: 'arduino-boards-dropdown-list', style: __assign({ position: 'absolute' }, coords) }, items.map(this.renderItem));
    };
    BoardsDropDown.prototype.renderItem = function (item) {
        var label = item.label, selected = item.selected, onClick = item.onClick;
        return React.createElement("div", { key: label, className: "arduino-boards-dropdown-item " + (selected ? 'selected' : ''), onClick: onClick },
            React.createElement("div", null, label),
            selected ? React.createElement("span", { className: 'fa fa-check' }) : '');
    };
    return BoardsDropDown;
}(React.Component));
exports.BoardsDropDown = BoardsDropDown;
var BoardsToolBarItem = /** @class */ (function (_super) {
    __extends(BoardsToolBarItem, _super);
    function BoardsToolBarItem(props) {
        var _this = _super.call(this, props) || this;
        _this.toDispose = new core_1.DisposableCollection();
        _this.show = function (event) {
            var element = event.currentTarget;
            if (element instanceof HTMLElement) {
                if (_this.state.coords === 'hidden') {
                    var rect = element.getBoundingClientRect();
                    _this.setState({
                        coords: {
                            top: rect.top,
                            left: rect.left,
                            width: rect.width,
                            paddingTop: rect.height
                        }
                    });
                }
                else {
                    _this.setState({ coords: 'hidden' });
                }
            }
            event.stopPropagation();
            event.nativeEvent.stopImmediatePropagation();
        };
        _this.openDialog = function () {
            _this.props.commands.executeCommand(arduino_commands_1.ArduinoCommands.OPEN_BOARDS_DIALOG.id);
            _this.setState({ coords: 'hidden' });
        };
        _this.state = {
            boardsConfig: _this.props.boardsServiceClient.boardsConfig,
            attachedBoards: [],
            availablePorts: [],
            coords: 'hidden'
        };
        document.addEventListener('click', function () {
            _this.setState({ coords: 'hidden' });
        });
        return _this;
    }
    BoardsToolBarItem.prototype.componentDidMount = function () {
        var _this = this;
        var _a = this.props, client = _a.boardsServiceClient, boardService = _a.boardService;
        this.toDispose.pushAll([
            client.onBoardsConfigChanged(function (boardsConfig) { return _this.setState({ boardsConfig: boardsConfig }); }),
            client.onBoardsChanged(function (_a) {
                var newState = _a.newState;
                return _this.setState({ attachedBoards: newState.boards, availablePorts: newState.ports });
            })
        ]);
        Promise.all([
            boardService.getAttachedBoards(),
            boardService.getAvailablePorts()
        ]).then(function (_a) {
            var _b = __read(_a, 2), attachedBoards = _b[0].boards, availablePorts = _b[1].ports;
            _this.setState({ attachedBoards: attachedBoards, availablePorts: availablePorts });
        });
    };
    BoardsToolBarItem.prototype.componentWillUnmount = function () {
        this.toDispose.dispose();
    };
    BoardsToolBarItem.prototype.render = function () {
        var _this = this;
        var _a = this.state, boardsConfig = _a.boardsConfig, coords = _a.coords, attachedBoards = _a.attachedBoards, availablePorts = _a.availablePorts;
        var title = boards_config_1.BoardsConfig.Config.toString(boardsConfig, { default: 'no board selected' });
        var configuredBoard = attachedBoards
            .filter(boards_service_1.AttachedSerialBoard.is)
            .filter(function (board) { return availablePorts.some(function (port) { return boards_service_1.Port.sameAs(port, board.port); }); })
            .filter(function (board) { return boards_config_1.BoardsConfig.Config.sameAs(boardsConfig, board); }).shift();
        var items = attachedBoards.filter(boards_service_1.AttachedSerialBoard.is).map(function (board) { return ({
            label: board.name + " at " + board.port,
            selected: configuredBoard === board,
            onClick: function () {
                _this.props.boardsServiceClient.boardsConfig = {
                    selectedBoard: board,
                    selectedPort: availablePorts.find(function (port) { return boards_service_1.Port.sameAs(port, board.port); })
                };
            }
        }); });
        return React.createElement(React.Fragment, null,
            React.createElement("div", { className: 'arduino-boards-toolbar-item-container' },
                React.createElement("div", { className: 'arduino-boards-toolbar-item', title: title },
                    React.createElement("div", { className: 'inner-container', onClick: this.show },
                        React.createElement("span", { className: !configuredBoard ? 'fa fa-times notAttached' : '' }),
                        React.createElement("div", { className: 'label noWrapInfo' },
                            React.createElement("div", { className: 'noWrapInfo noselect' }, title)),
                        React.createElement("span", { className: 'fa fa-caret-down caret' })))),
            React.createElement(BoardsDropDown, { coords: coords, items: items, openBoardsConfig: this.openDialog }));
    };
    return BoardsToolBarItem;
}(React.Component));
exports.BoardsToolBarItem = BoardsToolBarItem;


/***/ }),

/***/ "./node_modules/arduino-ide-extension/lib/browser/boards/boards-widget-frontend-contribution.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/arduino-ide-extension/lib/browser/boards/boards-widget-frontend-contribution.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var boards_list_widget_1 = __webpack_require__(/*! ./boards-list-widget */ "./node_modules/arduino-ide-extension/lib/browser/boards/boards-list-widget.js");
var arduino_frontend_contribution_1 = __webpack_require__(/*! ../arduino-frontend-contribution */ "./node_modules/arduino-ide-extension/lib/browser/arduino-frontend-contribution.js");
var list_widget_frontend_contribution_1 = __webpack_require__(/*! ../components/component-list/list-widget-frontend-contribution */ "./node_modules/arduino-ide-extension/lib/browser/components/component-list/list-widget-frontend-contribution.js");
var BoardsListWidgetFrontendContribution = /** @class */ (function (_super) {
    __extends(BoardsListWidgetFrontendContribution, _super);
    function BoardsListWidgetFrontendContribution() {
        return _super.call(this, {
            widgetId: boards_list_widget_1.BoardsListWidget.WIDGET_ID,
            widgetName: boards_list_widget_1.BoardsListWidget.WIDGET_LABEL,
            defaultWidgetOptions: {
                area: 'left',
                rank: 600
            },
            toggleCommandId: BoardsListWidgetFrontendContribution_1.OPEN_MANAGER,
            toggleKeybinding: 'ctrlcmd+shift+b'
        }) || this;
    }
    BoardsListWidgetFrontendContribution_1 = BoardsListWidgetFrontendContribution;
    BoardsListWidgetFrontendContribution.prototype.registerMenus = function (menus) {
        if (this.toggleCommand) {
            menus.registerMenuAction(arduino_frontend_contribution_1.ArduinoMenus.TOOLS, {
                commandId: this.toggleCommand.id,
                label: 'Boards Manager...'
            });
        }
    };
    var BoardsListWidgetFrontendContribution_1;
    BoardsListWidgetFrontendContribution.OPEN_MANAGER = boards_list_widget_1.BoardsListWidget.WIDGET_ID + ":toggle";
    BoardsListWidgetFrontendContribution = BoardsListWidgetFrontendContribution_1 = __decorate([
        inversify_1.injectable(),
        __metadata("design:paramtypes", [])
    ], BoardsListWidgetFrontendContribution);
    return BoardsListWidgetFrontendContribution;
}(list_widget_frontend_contribution_1.ListWidgetFrontendContribution));
exports.BoardsListWidgetFrontendContribution = BoardsListWidgetFrontendContribution;


/***/ }),

/***/ "./node_modules/arduino-ide-extension/lib/browser/components/arduino-select.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/arduino-ide-extension/lib/browser/components/arduino-select.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var react_select_1 = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/react-select.browser.esm.js");
var ArduinoSelect = /** @class */ (function (_super) {
    __extends(ArduinoSelect, _super);
    function ArduinoSelect(props) {
        return _super.call(this, props) || this;
    }
    ArduinoSelect.prototype.render = function () {
        var controlHeight = 27; // from `monitor.css` -> `.serial-monitor-container .head` (`height: 27px;`)
        var styles = {
            control: function (styles) { return (__assign({}, styles, { minWidth: 120, color: 'var(--theia-ui-font-color1)' })); },
            dropdownIndicator: function (styles) { return (__assign({}, styles, { padding: 0 })); },
            indicatorSeparator: function () { return ({
                display: 'none'
            }); },
            indicatorsContainer: function () { return ({
                padding: '0px 5px'
            }); },
            menu: function (styles) { return (__assign({}, styles, { marginTop: 0 })); }
        };
        var theme = function (theme) { return (__assign({}, theme, { borderRadius: 0, spacing: {
                controlHeight: controlHeight,
                baseUnit: 2,
                menuGutter: 4
            }, colors: __assign({}, theme.colors, { 
                // `primary50`??? it's crazy but apparently, without this, we would get a light-blueish
                // color when selecting an option in the select by clicking and then not releasing the button.
                // https://react-select.com/styles#overriding-the-theme
                primary50: 'var(--theia-accent-color4)' }) })); };
        var DropdownIndicator = function () { return React.createElement("span", { className: 'fa fa-caret-down caret' }); };
        return React.createElement(react_select_1.default, __assign({}, this.props, { components: { DropdownIndicator: DropdownIndicator }, theme: theme, styles: styles, classNamePrefix: 'arduino-select', isSearchable: false }));
    };
    return ArduinoSelect;
}(react_select_1.default));
exports.ArduinoSelect = ArduinoSelect;


/***/ }),

/***/ "./node_modules/arduino-ide-extension/lib/browser/components/component-list/component-list-item.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/arduino-ide-extension/lib/browser/components/component-list/component-list-item.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var ComponentListItem = /** @class */ (function (_super) {
    __extends(ComponentListItem, _super);
    function ComponentListItem(props) {
        var _this = _super.call(this, props) || this;
        if (props.item.installable) {
            var version = props.item.availableVersions.filter(function (version) { return version !== props.item.installedVersion; })[0];
            _this.state = {
                selectedVersion: version
            };
        }
        return _this;
    }
    ComponentListItem.prototype.install = function (item) {
        return __awaiter(this, void 0, void 0, function () {
            var toInstall, version, _a;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        toInstall = this.state.selectedVersion;
                        version = this.props.item.availableVersions.filter(function (version) { return version !== _this.state.selectedVersion; })[0];
                        this.setState({
                            selectedVersion: version
                        });
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.props.install(item, toInstall)];
                    case 2:
                        _b.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        _a = _b.sent();
                        this.setState({
                            selectedVersion: toInstall
                        });
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ComponentListItem.prototype.uninstall = function (item) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.props.uninstall(item)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ComponentListItem.prototype.onVersionChange = function (version) {
        this.setState({ selectedVersion: version });
    };
    ComponentListItem.prototype.render = function () {
        var _a = this.props, item = _a.item, itemRenderer = _a.itemRenderer;
        return itemRenderer.renderItem(Object.assign(this.state, { item: item }), this.install.bind(this), this.uninstall.bind(this), this.onVersionChange.bind(this));
    };
    return ComponentListItem;
}(React.Component));
exports.ComponentListItem = ComponentListItem;


/***/ }),

/***/ "./node_modules/arduino-ide-extension/lib/browser/components/component-list/component-list.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/arduino-ide-extension/lib/browser/components/component-list/component-list.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var component_list_item_1 = __webpack_require__(/*! ./component-list-item */ "./node_modules/arduino-ide-extension/lib/browser/components/component-list/component-list-item.js");
var ComponentList = /** @class */ (function (_super) {
    __extends(ComponentList, _super);
    function ComponentList() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.setRef = function (element) {
            _this.container = element || undefined;
        };
        return _this;
    }
    ComponentList.prototype.render = function () {
        var _this = this;
        return React.createElement("div", { className: 'items-container', ref: this.setRef }, this.props.items.map(function (item) { return _this.createItem(item); }));
    };
    ComponentList.prototype.componentDidMount = function () {
        if (this.container && this.props.resolveContainer) {
            this.props.resolveContainer(this.container);
        }
    };
    ComponentList.prototype.createItem = function (item) {
        return React.createElement(component_list_item_1.ComponentListItem, { key: this.props.itemLabel(item), item: item, itemRenderer: this.props.itemRenderer, install: this.props.install, uninstall: this.props.uninstall });
    };
    return ComponentList;
}(React.Component));
exports.ComponentList = ComponentList;


/***/ }),

/***/ "./node_modules/arduino-ide-extension/lib/browser/components/component-list/filterable-list-container.js":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/arduino-ide-extension/lib/browser/components/component-list/filterable-list-container.js ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var debounce = __webpack_require__(/*! lodash.debounce */ "./node_modules/lodash.debounce/index.js");
var dialogs_1 = __webpack_require__(/*! @theia/core/lib/browser/dialogs */ "./node_modules/@theia/core/lib/browser/dialogs.js");
var progress_dialog_1 = __webpack_require__(/*! ../progress-dialog */ "./node_modules/arduino-ide-extension/lib/browser/components/progress-dialog.js");
var search_bar_1 = __webpack_require__(/*! ./search-bar */ "./node_modules/arduino-ide-extension/lib/browser/components/component-list/search-bar.js");
var component_list_1 = __webpack_require__(/*! ./component-list */ "./node_modules/arduino-ide-extension/lib/browser/components/component-list/component-list.js");
var FilterableListContainer = /** @class */ (function (_super) {
    __extends(FilterableListContainer, _super);
    function FilterableListContainer(props) {
        var _this = _super.call(this, props) || this;
        _this.handleFilterTextChange = function (filterText) {
            _this.setState({ filterText: filterText });
            _this.search(filterText);
        };
        _this.state = {
            filterText: '',
            items: []
        };
        return _this;
    }
    FilterableListContainer.prototype.componentDidMount = function () {
        this.search = debounce(this.search, 500);
        this.handleFilterTextChange('');
        this.props.filterTextChangeEvent(this.handleFilterTextChange.bind(this));
    };
    FilterableListContainer.prototype.componentDidUpdate = function () {
        // See: arduino/arduino-pro-ide#101
        // Resets the top of the perfect scroll-bar's thumb.
        this.props.container.updateScrollBar();
    };
    FilterableListContainer.prototype.render = function () {
        return React.createElement("div", { className: 'filterable-list-container' },
            this.renderSearchFilter(),
            this.renderSearchBar(),
            this.renderComponentList());
    };
    FilterableListContainer.prototype.renderSearchFilter = function () {
        return undefined;
    };
    FilterableListContainer.prototype.renderSearchBar = function () {
        return React.createElement(search_bar_1.SearchBar, { resolveFocus: this.props.resolveFocus, filterText: this.state.filterText, onFilterTextChanged: this.handleFilterTextChange });
    };
    FilterableListContainer.prototype.renderComponentList = function () {
        var _a = this.props, itemLabel = _a.itemLabel, resolveContainer = _a.resolveContainer, itemRenderer = _a.itemRenderer;
        return React.createElement(component_list_1.ComponentList, { items: this.state.items, itemLabel: itemLabel, itemRenderer: itemRenderer, install: this.install.bind(this), uninstall: this.uninstall.bind(this), resolveContainer: resolveContainer });
    };
    FilterableListContainer.prototype.search = function (query) {
        var _this = this;
        var searchable = this.props.searchable;
        searchable.search({ query: query.trim() }).then(function (result) {
            var items = result.items;
            _this.setState({
                items: _this.sort(items)
            });
        });
    };
    FilterableListContainer.prototype.sort = function (items) {
        var itemLabel = this.props.itemLabel;
        return items.sort(function (left, right) { return itemLabel(left).localeCompare(itemLabel(right)); });
    };
    FilterableListContainer.prototype.install = function (item, version) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, installable, searchable, itemLabel, dialog, items;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this.props, installable = _a.installable, searchable = _a.searchable, itemLabel = _a.itemLabel;
                        dialog = new progress_dialog_1.InstallationProgressDialog(itemLabel(item), version);
                        dialog.open();
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, , 4, 5]);
                        return [4 /*yield*/, installable.install({ item: item, version: version })];
                    case 2:
                        _b.sent();
                        return [4 /*yield*/, searchable.search({ query: this.state.filterText })];
                    case 3:
                        items = (_b.sent()).items;
                        this.setState({ items: this.sort(items) });
                        return [3 /*break*/, 5];
                    case 4:
                        dialog.close();
                        return [7 /*endfinally*/];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    FilterableListContainer.prototype.uninstall = function (item) {
        return __awaiter(this, void 0, void 0, function () {
            var uninstall, _a, installable, searchable, itemLabel, dialog, items;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, new dialogs_1.ConfirmDialog({
                            title: 'Uninstall',
                            msg: "Do you want to uninstall " + item.name + "?",
                            ok: 'Yes',
                            cancel: 'No'
                        }).open()];
                    case 1:
                        uninstall = _b.sent();
                        if (!uninstall) {
                            return [2 /*return*/];
                        }
                        _a = this.props, installable = _a.installable, searchable = _a.searchable, itemLabel = _a.itemLabel;
                        dialog = new progress_dialog_1.UninstallationProgressDialog(itemLabel(item));
                        dialog.open();
                        _b.label = 2;
                    case 2:
                        _b.trys.push([2, , 5, 6]);
                        return [4 /*yield*/, installable.uninstall({ item: item })];
                    case 3:
                        _b.sent();
                        return [4 /*yield*/, searchable.search({ query: this.state.filterText })];
                    case 4:
                        items = (_b.sent()).items;
                        this.setState({ items: this.sort(items) });
                        return [3 /*break*/, 6];
                    case 5:
                        dialog.close();
                        return [7 /*endfinally*/];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    return FilterableListContainer;
}(React.Component));
exports.FilterableListContainer = FilterableListContainer;


/***/ }),

/***/ "./node_modules/arduino-ide-extension/lib/browser/components/component-list/list-item-renderer.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/arduino-ide-extension/lib/browser/components/component-list/list-item-renderer.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var window_service_1 = __webpack_require__(/*! @theia/core/lib/browser/window/window-service */ "./node_modules/@theia/core/lib/browser/window/window-service.js");
var ListItemRenderer = /** @class */ (function () {
    function ListItemRenderer() {
        var _this = this;
        this.onMoreInfoClick = function (event) {
            var target = event.nativeEvent.target;
            if (target instanceof HTMLAnchorElement) {
                _this.windowService.openNewWindow(target.href, { external: true });
                event.nativeEvent.preventDefault();
            }
        };
    }
    ListItemRenderer.prototype.renderItem = function (input, install, uninstall, onVersionChange) {
        var item = input.item;
        var nameAndAuthor;
        if (item.name && item.author) {
            var name_1 = React.createElement("span", { className: 'name' }, item.name);
            var author = React.createElement("span", { className: 'author' }, item.author);
            nameAndAuthor = React.createElement("span", null,
                name_1,
                " by ",
                author);
        }
        else if (item.name) {
            nameAndAuthor = React.createElement("span", { className: 'name' }, item.name);
        }
        else if (item.id) {
            nameAndAuthor = React.createElement("span", { className: 'name' }, item.id);
        }
        else {
            nameAndAuthor = React.createElement("span", { className: 'name' }, "Unknown");
        }
        var onClickUninstall = function () { return uninstall(item); };
        var installedVersion = !!item.installedVersion && React.createElement("div", { className: 'version-info' },
            React.createElement("span", { className: 'version' },
                "Version ",
                item.installedVersion),
            React.createElement("span", { className: 'installed', onClick: onClickUninstall }));
        var summary = React.createElement("div", { className: 'summary' }, item.summary);
        var description = React.createElement("div", { className: 'summary' }, item.description);
        var moreInfo = !!item.moreInfoLink && React.createElement("a", { href: item.moreInfoLink, onClick: this.onMoreInfoClick }, "More info");
        var onClickInstall = function () { return install(item); };
        var installButton = item.installable &&
            React.createElement("button", { className: 'install', onClick: onClickInstall }, "INSTALL");
        var onSelectChange = function (event) {
            var version = event.target.value;
            if (version) {
                onVersionChange(version);
            }
        };
        var versions = (function () {
            var availableVersions = item.availableVersions;
            if (availableVersions.length === 0) {
                return undefined;
            }
            else if (availableVersions.length === 1) {
                return React.createElement("label", null, availableVersions[0]);
            }
            else {
                return React.createElement("select", { value: input.selectedVersion, onChange: onSelectChange }, item.availableVersions
                    .filter(function (version) { return version !== item.installedVersion; }) // Filter the version that is currently installed.
                    .map(function (version) { return React.createElement("option", { value: version, key: version }, version); }));
            }
        })();
        return React.createElement("div", { className: 'component-list-item noselect' },
            React.createElement("div", { className: 'header' },
                nameAndAuthor,
                installedVersion),
            React.createElement("div", { className: 'content' },
                summary,
                description),
            React.createElement("div", { className: 'info' }, moreInfo),
            React.createElement("div", { className: 'footer' },
                installButton,
                versions));
    };
    __decorate([
        inversify_1.inject(window_service_1.WindowService),
        __metadata("design:type", Object)
    ], ListItemRenderer.prototype, "windowService", void 0);
    ListItemRenderer = __decorate([
        inversify_1.injectable()
    ], ListItemRenderer);
    return ListItemRenderer;
}());
exports.ListItemRenderer = ListItemRenderer;


/***/ }),

/***/ "./node_modules/arduino-ide-extension/lib/browser/components/component-list/list-widget-frontend-contribution.js":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/arduino-ide-extension/lib/browser/components/component-list/list-widget-frontend-contribution.js ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var view_contribution_1 = __webpack_require__(/*! @theia/core/lib/browser/shell/view-contribution */ "./node_modules/@theia/core/lib/browser/shell/view-contribution.js");
var ListWidgetFrontendContribution = /** @class */ (function (_super) {
    __extends(ListWidgetFrontendContribution, _super);
    function ListWidgetFrontendContribution() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ListWidgetFrontendContribution.prototype.initializeLayout = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    ListWidgetFrontendContribution = __decorate([
        inversify_1.injectable()
    ], ListWidgetFrontendContribution);
    return ListWidgetFrontendContribution;
}(view_contribution_1.AbstractViewContribution));
exports.ListWidgetFrontendContribution = ListWidgetFrontendContribution;


/***/ }),

/***/ "./node_modules/arduino-ide-extension/lib/browser/components/component-list/list-widget.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/arduino-ide-extension/lib/browser/components/component-list/list-widget.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var promise_util_1 = __webpack_require__(/*! @theia/core/lib/common/promise-util */ "./node_modules/@theia/core/lib/common/promise-util.js");
var event_1 = __webpack_require__(/*! @theia/core/lib/common/event */ "./node_modules/@theia/core/lib/common/event.js");
var react_widget_1 = __webpack_require__(/*! @theia/core/lib/browser/widgets/react-widget */ "./node_modules/@theia/core/lib/browser/widgets/react-widget.js");
var filterable_list_container_1 = __webpack_require__(/*! ./filterable-list-container */ "./node_modules/arduino-ide-extension/lib/browser/components/component-list/filterable-list-container.js");
var ListWidget = /** @class */ (function (_super) {
    __extends(ListWidget, _super);
    function ListWidget(options) {
        var _this = _super.call(this) || this;
        _this.options = options;
        _this.deferredContainer = new promise_util_1.Deferred();
        _this.filterTextChangeEmitter = new event_1.Emitter();
        _this.onFocusResolved = function (element) {
            _this.focusNode = element;
        };
        var id = options.id, label = options.label, iconClass = options.iconClass;
        _this.id = id;
        _this.title.label = label;
        _this.title.caption = label;
        _this.title.iconClass = iconClass;
        _this.title.closable = true;
        _this.addClass('arduino-list-widget');
        _this.node.tabIndex = 0; // To be able to set the focus on the widget.
        _this.scrollOptions = {
            suppressScrollX: true
        };
        _this.toDispose.push(_this.filterTextChangeEmitter);
        return _this;
    }
    ListWidget.prototype.init = function () {
        this.update();
    };
    ListWidget.prototype.getScrollContainer = function () {
        return this.deferredContainer.promise;
    };
    ListWidget.prototype.onActivateRequest = function (msg) {
        _super.prototype.onActivateRequest.call(this, msg);
        (this.focusNode || this.node).focus();
    };
    ListWidget.prototype.onUpdateRequest = function (msg) {
        _super.prototype.onUpdateRequest.call(this, msg);
        this.render();
    };
    ListWidget.prototype.render = function () {
        return React.createElement(filterable_list_container_1.FilterableListContainer, { container: this, resolveContainer: this.deferredContainer.resolve, resolveFocus: this.onFocusResolved, searchable: this.options.searchable, installable: this.options.installable, itemLabel: this.options.itemLabel, itemRenderer: this.options.itemRenderer, filterTextChangeEvent: this.filterTextChangeEmitter.event });
    };
    ListWidget.prototype.refresh = function (filterText) {
        var _this = this;
        this.deferredContainer.promise.then(function () { return _this.filterTextChangeEmitter.fire(filterText); });
    };
    ListWidget.prototype.updateScrollBar = function () {
        if (this.scrollBar) {
            this.scrollBar.update();
        }
    };
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ListWidget.prototype, "init", null);
    ListWidget = __decorate([
        inversify_1.injectable(),
        __metadata("design:paramtypes", [Object])
    ], ListWidget);
    return ListWidget;
}(react_widget_1.ReactWidget));
exports.ListWidget = ListWidget;


/***/ }),

/***/ "./node_modules/arduino-ide-extension/lib/browser/components/component-list/search-bar.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/arduino-ide-extension/lib/browser/components/component-list/search-bar.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var SearchBar = /** @class */ (function (_super) {
    __extends(SearchBar, _super);
    function SearchBar(props) {
        var _this = _super.call(this, props) || this;
        _this.setRef = function (element) {
            if (_this.props.resolveFocus) {
                _this.props.resolveFocus(element || undefined);
            }
        };
        _this.handleFilterTextChange = _this.handleFilterTextChange.bind(_this);
        return _this;
    }
    SearchBar.prototype.render = function () {
        return React.createElement("input", { ref: this.setRef, className: SearchBar.Styles.SEARCH_BAR_CLASS, type: 'text', placeholder: 'Filter your search...', size: 1, value: this.props.filterText, onChange: this.handleFilterTextChange });
    };
    SearchBar.prototype.handleFilterTextChange = function (event) {
        this.props.onFilterTextChanged(event.target.value);
    };
    return SearchBar;
}(React.Component));
exports.SearchBar = SearchBar;
(function (SearchBar) {
    var Styles;
    (function (Styles) {
        Styles.SEARCH_BAR_CLASS = 'search-bar';
    })(Styles = SearchBar.Styles || (SearchBar.Styles = {}));
})(SearchBar = exports.SearchBar || (exports.SearchBar = {}));
exports.SearchBar = SearchBar;


/***/ }),

/***/ "./node_modules/arduino-ide-extension/lib/browser/components/progress-dialog.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/arduino-ide-extension/lib/browser/components/progress-dialog.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "./node_modules/@theia/core/lib/browser/index.js");
var InstallationProgressDialog = /** @class */ (function (_super) {
    __extends(InstallationProgressDialog, _super);
    function InstallationProgressDialog(componentName, version) {
        var _this = _super.call(this, { title: 'Installation in progress' }) || this;
        _this.value = undefined;
        _this.contentNode.textContent = "Installing " + componentName + " [" + version + "]. Please wait...";
        return _this;
    }
    return InstallationProgressDialog;
}(browser_1.AbstractDialog));
exports.InstallationProgressDialog = InstallationProgressDialog;
var UninstallationProgressDialog = /** @class */ (function (_super) {
    __extends(UninstallationProgressDialog, _super);
    function UninstallationProgressDialog(componentName) {
        var _this = _super.call(this, { title: 'Uninstallation in progress' }) || this;
        _this.value = undefined;
        _this.contentNode.textContent = "Uninstalling " + componentName + ". Please wait...";
        return _this;
    }
    return UninstallationProgressDialog;
}(browser_1.AbstractDialog));
exports.UninstallationProgressDialog = UninstallationProgressDialog;


/***/ }),

/***/ "./node_modules/arduino-ide-extension/lib/browser/customization/arduino-about-dialog.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/arduino-ide-extension/lib/browser/customization/arduino-about-dialog.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var about_dialog_1 = __webpack_require__(/*! @theia/core/lib/browser/about-dialog */ "./node_modules/@theia/core/lib/browser/about-dialog.js");
var config_service_1 = __webpack_require__(/*! ../../common/protocol/config-service */ "./node_modules/arduino-ide-extension/lib/common/protocol/config-service.js");
var ArduinoAboutDialog = /** @class */ (function (_super) {
    __extends(ArduinoAboutDialog, _super);
    function ArduinoAboutDialog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ArduinoAboutDialog.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, version, firstChild, cliVersion;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, Promise.all([_super.prototype.init.call(this), this.configService.getVersion()])];
                    case 1:
                        _a = __read.apply(void 0, [_b.sent(), 2]), version = _a[1];
                        if (version) {
                            firstChild = this.contentNode.firstChild;
                            if (firstChild instanceof HTMLElement && firstChild.classList.contains(about_dialog_1.ABOUT_CONTENT_CLASS)) {
                                cliVersion = document.createElement('div');
                                cliVersion.textContent = version;
                                firstChild.appendChild(cliVersion);
                                // TODO: anchor to the commit in the `arduino-cli` repository.
                            }
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        inversify_1.inject(config_service_1.ConfigService),
        __metadata("design:type", Object)
    ], ArduinoAboutDialog.prototype, "configService", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], ArduinoAboutDialog.prototype, "init", null);
    ArduinoAboutDialog = __decorate([
        inversify_1.injectable()
    ], ArduinoAboutDialog);
    return ArduinoAboutDialog;
}(about_dialog_1.AboutDialog));
exports.ArduinoAboutDialog = ArduinoAboutDialog;


/***/ }),

/***/ "./node_modules/arduino-ide-extension/lib/browser/customization/arduino-application-shell.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/arduino-ide-extension/lib/browser/customization/arduino-application-shell.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "./node_modules/@theia/core/lib/browser/index.js");
var browser_2 = __webpack_require__(/*! @theia/editor/lib/browser */ "./node_modules/@theia/editor/lib/browser/index.js");
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var editor_mode_1 = __webpack_require__(/*! ../editor-mode */ "./node_modules/arduino-ide-extension/lib/browser/editor-mode.js");
var ArduinoApplicationShell = /** @class */ (function (_super) {
    __extends(ArduinoApplicationShell, _super);
    function ArduinoApplicationShell() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ArduinoApplicationShell.prototype.refreshBottomPanelToggleButton = function () {
        if (this.editorMode.proMode) {
            _super.prototype.refreshBottomPanelToggleButton.call(this);
        }
    };
    ArduinoApplicationShell.prototype.track = function (widget) {
        return __awaiter(this, void 0, void 0, function () {
            var tracker, _a, _b, toTrack, e_1_1;
            var e_1, _c;
            var _this = this;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        if (!this.editorMode.proMode) return [3 /*break*/, 1];
                        _super.prototype.track.call(this, widget);
                        return [3 /*break*/, 10];
                    case 1:
                        tracker = this.tracker;
                        tracker.add(widget);
                        this.disableClose(browser_1.Saveable.apply(widget));
                        if (!browser_1.ApplicationShell.TrackableWidgetProvider.is(widget)) return [3 /*break*/, 10];
                        _d.label = 2;
                    case 2:
                        _d.trys.push([2, 7, 8, 9]);
                        return [4 /*yield*/, widget.getTrackableWidgets()];
                    case 3:
                        _a = __values.apply(void 0, [_d.sent()]), _b = _a.next();
                        _d.label = 4;
                    case 4:
                        if (!!_b.done) return [3 /*break*/, 6];
                        toTrack = _b.value;
                        tracker.add(toTrack);
                        this.disableClose(browser_1.Saveable.apply(toTrack));
                        _d.label = 5;
                    case 5:
                        _b = _a.next();
                        return [3 /*break*/, 4];
                    case 6: return [3 /*break*/, 9];
                    case 7:
                        e_1_1 = _d.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 9];
                    case 8:
                        try {
                            if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                        }
                        finally { if (e_1) throw e_1.error; }
                        return [7 /*endfinally*/];
                    case 9:
                        if (widget.onDidChangeTrackableWidgets) {
                            widget.onDidChangeTrackableWidgets(function (widgets) { return widgets.forEach(function (w) { return _this.track(w); }); });
                        }
                        _d.label = 10;
                    case 10: return [2 /*return*/];
                }
            });
        });
    };
    ArduinoApplicationShell.prototype.disableClose = function (widget) {
        if (widget instanceof browser_2.EditorWidget) {
            var onCloseRequest = function (_) {
                // NOOP
            };
            widget.onCloseRequest = onCloseRequest.bind(widget);
        }
    };
    __decorate([
        inversify_1.inject(editor_mode_1.EditorMode),
        __metadata("design:type", editor_mode_1.EditorMode)
    ], ArduinoApplicationShell.prototype, "editorMode", void 0);
    ArduinoApplicationShell = __decorate([
        inversify_1.injectable()
    ], ArduinoApplicationShell);
    return ArduinoApplicationShell;
}(browser_1.ApplicationShell));
exports.ArduinoApplicationShell = ArduinoApplicationShell;


/***/ }),

/***/ "./node_modules/arduino-ide-extension/lib/browser/customization/arduino-editor-contribution.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/arduino-ide-extension/lib/browser/customization/arduino-editor-contribution.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var editor_contribution_1 = __webpack_require__(/*! @theia/editor/lib/browser/editor-contribution */ "./node_modules/@theia/editor/lib/browser/editor-contribution.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "./node_modules/@theia/core/lib/browser/index.js");
var ArduinoEditorContribution = /** @class */ (function (_super) {
    __extends(ArduinoEditorContribution, _super);
    function ArduinoEditorContribution() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ArduinoEditorContribution.prototype.updateLanguageStatus = function (editor) {
    };
    ArduinoEditorContribution.prototype.setCursorPositionStatus = function (editor) {
        if (!editor) {
            this.statusBar.removeElement('editor-status-cursor-position');
            return;
        }
        var cursor = editor.cursor;
        this.statusBar.setElement('editor-status-cursor-position', {
            text: "" + (cursor.line + 1),
            alignment: browser_1.StatusBarAlignment.LEFT,
            priority: 100
        });
    };
    return ArduinoEditorContribution;
}(editor_contribution_1.EditorContribution));
exports.ArduinoEditorContribution = ArduinoEditorContribution;


/***/ }),

/***/ "./node_modules/arduino-ide-extension/lib/browser/customization/arduino-frontend-application.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/arduino-ide-extension/lib/browser/customization/arduino-frontend-application.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var filesystem_1 = __webpack_require__(/*! @theia/filesystem/lib/common/filesystem */ "./node_modules/@theia/filesystem/lib/common/filesystem.js");
var workspace_service_1 = __webpack_require__(/*! @theia/workspace/lib/browser/workspace-service */ "./node_modules/@theia/workspace/lib/browser/workspace-service.js");
var frontend_application_1 = __webpack_require__(/*! @theia/core/lib/browser/frontend-application */ "./node_modules/@theia/core/lib/browser/frontend-application.js");
var editor_mode_1 = __webpack_require__(/*! ../editor-mode */ "./node_modules/arduino-ide-extension/lib/browser/editor-mode.js");
var arduino_frontend_contribution_1 = __webpack_require__(/*! ../arduino-frontend-contribution */ "./node_modules/arduino-ide-extension/lib/browser/arduino-frontend-contribution.js");
var ArduinoFrontendApplication = /** @class */ (function (_super) {
    __extends(ArduinoFrontendApplication, _super);
    function ArduinoFrontendApplication() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ArduinoFrontendApplication.prototype.initializeLayout = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, _super.prototype.initializeLayout.call(this).then(function () {
                        // If not in PRO mode, we open the sketch file with all the related files.
                        // Otherwise, we reuse the workbench's restore functionality and we do not open anything at all.
                        // TODO: check `otherwise`. Also, what if we check for opened editors, instead of blindly opening them?
                        if (!_this.editorMode.proMode) {
                            _this.workspaceService.roots.then(function (roots) {
                                var e_1, _a;
                                var _loop_1 = function (root) {
                                    _this.fileSystem.exists(root.uri).then(function (exists) {
                                        if (exists) {
                                            _this.frontendContribution.openSketchFiles(root.uri);
                                        }
                                    });
                                };
                                try {
                                    for (var roots_1 = __values(roots), roots_1_1 = roots_1.next(); !roots_1_1.done; roots_1_1 = roots_1.next()) {
                                        var root = roots_1_1.value;
                                        _loop_1(root);
                                    }
                                }
                                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                                finally {
                                    try {
                                        if (roots_1_1 && !roots_1_1.done && (_a = roots_1.return)) _a.call(roots_1);
                                    }
                                    finally { if (e_1) throw e_1.error; }
                                }
                            });
                        }
                    })];
            });
        });
    };
    __decorate([
        inversify_1.inject(filesystem_1.FileSystem),
        __metadata("design:type", Object)
    ], ArduinoFrontendApplication.prototype, "fileSystem", void 0);
    __decorate([
        inversify_1.inject(workspace_service_1.WorkspaceService),
        __metadata("design:type", workspace_service_1.WorkspaceService)
    ], ArduinoFrontendApplication.prototype, "workspaceService", void 0);
    __decorate([
        inversify_1.inject(arduino_frontend_contribution_1.ArduinoFrontendContribution),
        __metadata("design:type", arduino_frontend_contribution_1.ArduinoFrontendContribution)
    ], ArduinoFrontendApplication.prototype, "frontendContribution", void 0);
    __decorate([
        inversify_1.inject(editor_mode_1.EditorMode),
        __metadata("design:type", editor_mode_1.EditorMode)
    ], ArduinoFrontendApplication.prototype, "editorMode", void 0);
    ArduinoFrontendApplication = __decorate([
        inversify_1.injectable()
    ], ArduinoFrontendApplication);
    return ArduinoFrontendApplication;
}(frontend_application_1.FrontendApplication));
exports.ArduinoFrontendApplication = ArduinoFrontendApplication;


/***/ }),

/***/ "./node_modules/arduino-ide-extension/lib/browser/customization/arduino-monaco-status-bar-contribution.js":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/arduino-ide-extension/lib/browser/customization/arduino-monaco-status-bar-contribution.js ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var monaco_status_bar_contribution_1 = __webpack_require__(/*! @theia/monaco/lib/browser/monaco-status-bar-contribution */ "./node_modules/@theia/monaco/lib/browser/monaco-status-bar-contribution.js");
var ArduinoMonacoStatusBarContribution = /** @class */ (function (_super) {
    __extends(ArduinoMonacoStatusBarContribution, _super);
    function ArduinoMonacoStatusBarContribution() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ArduinoMonacoStatusBarContribution.prototype.setConfigTabSizeWidget = function () {
    };
    ArduinoMonacoStatusBarContribution.prototype.setLineEndingWidget = function () {
    };
    return ArduinoMonacoStatusBarContribution;
}(monaco_status_bar_contribution_1.MonacoStatusBarContribution));
exports.ArduinoMonacoStatusBarContribution = ArduinoMonacoStatusBarContribution;


/***/ }),

/***/ "./node_modules/arduino-ide-extension/lib/browser/customization/arduino-navigator-contribution.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/arduino-ide-extension/lib/browser/customization/arduino-navigator-contribution.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var navigator_contribution_1 = __webpack_require__(/*! @theia/navigator/lib/browser/navigator-contribution */ "./node_modules/@theia/navigator/lib/browser/navigator-contribution.js");
var editor_mode_1 = __webpack_require__(/*! ../editor-mode */ "./node_modules/arduino-ide-extension/lib/browser/editor-mode.js");
var ArduinoNavigatorContribution = /** @class */ (function (_super) {
    __extends(ArduinoNavigatorContribution, _super);
    function ArduinoNavigatorContribution() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ArduinoNavigatorContribution.prototype.initializeLayout = function (app) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (this.editorMode.proMode) {
                    return [2 /*return*/, _super.prototype.initializeLayout.call(this, app)];
                }
                return [2 /*return*/];
            });
        });
    };
    __decorate([
        inversify_1.inject(editor_mode_1.EditorMode),
        __metadata("design:type", editor_mode_1.EditorMode)
    ], ArduinoNavigatorContribution.prototype, "editorMode", void 0);
    ArduinoNavigatorContribution = __decorate([
        inversify_1.injectable()
    ], ArduinoNavigatorContribution);
    return ArduinoNavigatorContribution;
}(navigator_contribution_1.FileNavigatorContribution));
exports.ArduinoNavigatorContribution = ArduinoNavigatorContribution;


/***/ }),

/***/ "./node_modules/arduino-ide-extension/lib/browser/customization/arduino-outline-contribution.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/arduino-ide-extension/lib/browser/customization/arduino-outline-contribution.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var outline_view_contribution_1 = __webpack_require__(/*! @theia/outline-view/lib/browser/outline-view-contribution */ "./node_modules/@theia/outline-view/lib/browser/outline-view-contribution.js");
var editor_mode_1 = __webpack_require__(/*! ../editor-mode */ "./node_modules/arduino-ide-extension/lib/browser/editor-mode.js");
var ArduinoOutlineViewContribution = /** @class */ (function (_super) {
    __extends(ArduinoOutlineViewContribution, _super);
    function ArduinoOutlineViewContribution() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ArduinoOutlineViewContribution.prototype.initializeLayout = function (app) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (this.editorMode.proMode) {
                    return [2 /*return*/, _super.prototype.initializeLayout.call(this, app)];
                }
                return [2 /*return*/];
            });
        });
    };
    __decorate([
        inversify_1.inject(editor_mode_1.EditorMode),
        __metadata("design:type", editor_mode_1.EditorMode)
    ], ArduinoOutlineViewContribution.prototype, "editorMode", void 0);
    ArduinoOutlineViewContribution = __decorate([
        inversify_1.injectable()
    ], ArduinoOutlineViewContribution);
    return ArduinoOutlineViewContribution;
}(outline_view_contribution_1.OutlineViewContribution));
exports.ArduinoOutlineViewContribution = ArduinoOutlineViewContribution;


/***/ }),

/***/ "./node_modules/arduino-ide-extension/lib/browser/customization/arduino-output-tool-contribution.js":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/arduino-ide-extension/lib/browser/customization/arduino-output-tool-contribution.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var output_toolbar_contribution_1 = __webpack_require__(/*! @theia/output/lib/browser/output-toolbar-contribution */ "./node_modules/@theia/output/lib/browser/output-toolbar-contribution.js");
var editor_mode_1 = __webpack_require__(/*! ../editor-mode */ "./node_modules/arduino-ide-extension/lib/browser/editor-mode.js");
var ArduinoOutputToolContribution = /** @class */ (function (_super) {
    __extends(ArduinoOutputToolContribution, _super);
    function ArduinoOutputToolContribution() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ArduinoOutputToolContribution.prototype.registerToolbarItems = function (toolbarRegistry) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (this.editorMode.proMode) {
                    _super.prototype.registerToolbarItems.call(this, toolbarRegistry);
                }
                return [2 /*return*/];
            });
        });
    };
    __decorate([
        inversify_1.inject(editor_mode_1.EditorMode),
        __metadata("design:type", editor_mode_1.EditorMode)
    ], ArduinoOutputToolContribution.prototype, "editorMode", void 0);
    ArduinoOutputToolContribution = __decorate([
        inversify_1.injectable()
    ], ArduinoOutputToolContribution);
    return ArduinoOutputToolContribution;
}(output_toolbar_contribution_1.OutputToolbarContribution));
exports.ArduinoOutputToolContribution = ArduinoOutputToolContribution;


/***/ }),

/***/ "./node_modules/arduino-ide-extension/lib/browser/customization/arduino-problem-contribution.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/arduino-ide-extension/lib/browser/customization/arduino-problem-contribution.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var problem_contribution_1 = __webpack_require__(/*! @theia/markers/lib/browser/problem/problem-contribution */ "./node_modules/@theia/markers/lib/browser/problem/problem-contribution.js");
var editor_mode_1 = __webpack_require__(/*! ../editor-mode */ "./node_modules/arduino-ide-extension/lib/browser/editor-mode.js");
var ArduinoProblemContribution = /** @class */ (function (_super) {
    __extends(ArduinoProblemContribution, _super);
    function ArduinoProblemContribution() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ArduinoProblemContribution.prototype.initializeLayout = function (app) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (this.editorMode.proMode) {
                    return [2 /*return*/, _super.prototype.initializeLayout.call(this, app)];
                }
                return [2 /*return*/];
            });
        });
    };
    ArduinoProblemContribution.prototype.setStatusBarElement = function (problemStat) {
        if (this.editorMode.proMode) {
            _super.prototype.setStatusBarElement.call(this, problemStat);
        }
    };
    ArduinoProblemContribution.prototype.registerKeybindings = function (keybindings) {
        if (this.toggleCommand) {
            keybindings.registerKeybinding({
                command: this.toggleCommand.id,
                keybinding: 'ctrlcmd+alt+shift+m'
            });
        }
    };
    __decorate([
        inversify_1.inject(editor_mode_1.EditorMode),
        __metadata("design:type", editor_mode_1.EditorMode)
    ], ArduinoProblemContribution.prototype, "editorMode", void 0);
    ArduinoProblemContribution = __decorate([
        inversify_1.injectable()
    ], ArduinoProblemContribution);
    return ArduinoProblemContribution;
}(problem_contribution_1.ProblemContribution));
exports.ArduinoProblemContribution = ArduinoProblemContribution;


/***/ }),

/***/ "./node_modules/arduino-ide-extension/lib/browser/customization/arduino-scm-contribution.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/arduino-ide-extension/lib/browser/customization/arduino-scm-contribution.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var scm_contribution_1 = __webpack_require__(/*! @theia/scm/lib/browser/scm-contribution */ "./node_modules/@theia/scm/lib/browser/scm-contribution.js");
var editor_mode_1 = __webpack_require__(/*! ../editor-mode */ "./node_modules/arduino-ide-extension/lib/browser/editor-mode.js");
var ArduinoScmContribution = /** @class */ (function (_super) {
    __extends(ArduinoScmContribution, _super);
    function ArduinoScmContribution() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ArduinoScmContribution.prototype.initializeLayout = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (this.editorMode.proMode) {
                    return [2 /*return*/, _super.prototype.initializeLayout.call(this)];
                }
                return [2 /*return*/];
            });
        });
    };
    ArduinoScmContribution.prototype.setStatusBarEntry = function (id, entry) {
        if (this.editorMode.proMode) {
            _super.prototype.setStatusBarEntry.call(this, id, entry);
        }
    };
    __decorate([
        inversify_1.inject(editor_mode_1.EditorMode),
        __metadata("design:type", editor_mode_1.EditorMode)
    ], ArduinoScmContribution.prototype, "editorMode", void 0);
    ArduinoScmContribution = __decorate([
        inversify_1.injectable()
    ], ArduinoScmContribution);
    return ArduinoScmContribution;
}(scm_contribution_1.ScmContribution));
exports.ArduinoScmContribution = ArduinoScmContribution;


/***/ }),

/***/ "./node_modules/arduino-ide-extension/lib/browser/customization/arduino-search-in-workspace-contribution.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/arduino-ide-extension/lib/browser/customization/arduino-search-in-workspace-contribution.js ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var search_in_workspace_frontend_contribution_1 = __webpack_require__(/*! @theia/search-in-workspace/lib/browser/search-in-workspace-frontend-contribution */ "./node_modules/@theia/search-in-workspace/lib/browser/search-in-workspace-frontend-contribution.js");
var editor_mode_1 = __webpack_require__(/*! ../editor-mode */ "./node_modules/arduino-ide-extension/lib/browser/editor-mode.js");
var ArduinoSearchInWorkspaceContribution = /** @class */ (function (_super) {
    __extends(ArduinoSearchInWorkspaceContribution, _super);
    function ArduinoSearchInWorkspaceContribution() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ArduinoSearchInWorkspaceContribution.prototype.initializeLayout = function (app) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (this.editorMode.proMode) {
                    return [2 /*return*/, _super.prototype.initializeLayout.call(this, app)];
                }
                return [2 /*return*/];
            });
        });
    };
    __decorate([
        inversify_1.inject(editor_mode_1.EditorMode),
        __metadata("design:type", editor_mode_1.EditorMode)
    ], ArduinoSearchInWorkspaceContribution.prototype, "editorMode", void 0);
    ArduinoSearchInWorkspaceContribution = __decorate([
        inversify_1.injectable()
    ], ArduinoSearchInWorkspaceContribution);
    return ArduinoSearchInWorkspaceContribution;
}(search_in_workspace_frontend_contribution_1.SearchInWorkspaceFrontendContribution));
exports.ArduinoSearchInWorkspaceContribution = ArduinoSearchInWorkspaceContribution;


/***/ }),

/***/ "./node_modules/arduino-ide-extension/lib/browser/editor-mode.js":
/*!***********************************************************************!*\
  !*** ./node_modules/arduino-ide-extension/lib/browser/editor-mode.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var output_widget_1 = __webpack_require__(/*! @theia/output/lib/browser/output-widget */ "./node_modules/@theia/output/lib/browser/output-widget.js");
var browser_1 = __webpack_require__(/*! @theia/editor/lib/browser */ "./node_modules/@theia/editor/lib/browser/index.js");
var EditorMode = /** @class */ (function () {
    function EditorMode() {
    }
    EditorMode_1 = EditorMode;
    EditorMode.prototype.onStart = function (app) {
        this.app = app;
        if (this.proMode) {
            // We use this CSS class on the body to modify the visibility of the close button for the editors and views.
            document.body.classList.add(EditorMode_1.PRO_MODE_KEY);
        }
    };
    Object.defineProperty(EditorMode.prototype, "proMode", {
        get: function () {
            var value = window.localStorage.getItem(EditorMode_1.PRO_MODE_KEY);
            return value === 'true';
        },
        enumerable: true,
        configurable: true
    });
    EditorMode.prototype.toggle = function () {
        return __awaiter(this, void 0, void 0, function () {
            var oldState, inAdvancedMode, shell, _a, _b, area, layoutRestorer;
            var e_1, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        oldState = this.proMode;
                        inAdvancedMode = !oldState;
                        window.localStorage.setItem(EditorMode_1.PRO_MODE_KEY, String(inAdvancedMode));
                        if (!inAdvancedMode) {
                            shell = this.app.shell;
                            try {
                                // Close all widget that is neither editor nor `Output`.
                                for (_a = __values(['left', 'right', 'bottom', 'main']), _b = _a.next(); !_b.done; _b = _a.next()) {
                                    area = _b.value;
                                    shell.closeTabs(area, function (_a) {
                                        var owner = _a.owner;
                                        return !(owner instanceof browser_1.EditorWidget || owner instanceof output_widget_1.OutputWidget);
                                    });
                                }
                            }
                            catch (e_1_1) { e_1 = { error: e_1_1 }; }
                            finally {
                                try {
                                    if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                                }
                                finally { if (e_1) throw e_1.error; }
                            }
                        }
                        layoutRestorer = this.app.layoutRestorer;
                        return [4 /*yield*/, layoutRestorer.storeLayoutAsync(this.app)];
                    case 1:
                        _d.sent();
                        window.location.reload(true);
                        return [2 /*return*/];
                }
            });
        });
    };
    var EditorMode_1;
    EditorMode = EditorMode_1 = __decorate([
        inversify_1.injectable()
    ], EditorMode);
    return EditorMode;
}());
exports.EditorMode = EditorMode;
(function (EditorMode) {
    EditorMode.PRO_MODE_KEY = 'arduino-advanced-mode';
})(EditorMode = exports.EditorMode || (exports.EditorMode = {}));
exports.EditorMode = EditorMode;


/***/ }),

/***/ "./node_modules/arduino-ide-extension/lib/browser/editor/arduino-monaco-editor-provider.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/arduino-ide-extension/lib/browser/editor/arduino-monaco-editor-provider.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var uri_1 = __webpack_require__(/*! @theia/core/lib/common/uri */ "./node_modules/@theia/core/lib/common/uri.js");
var monaco_editor_provider_1 = __webpack_require__(/*! @theia/monaco/lib/browser/monaco-editor-provider */ "./node_modules/@theia/monaco/lib/browser/monaco-editor-provider.js");
var config_service_1 = __webpack_require__(/*! ../../common/protocol/config-service */ "./node_modules/arduino-ide-extension/lib/common/protocol/config-service.js");
var ArduinoMonacoEditorProvider = /** @class */ (function (_super) {
    __extends(ArduinoMonacoEditorProvider, _super);
    function ArduinoMonacoEditorProvider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ArduinoMonacoEditorProvider.prototype.getModel = function (uri, toDispose) {
        return __awaiter(this, void 0, void 0, function () {
            var dataDirUri;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.configService.getConfiguration()];
                    case 1:
                        dataDirUri = (_a.sent()).dataDirUri;
                        this.dataDirUri = dataDirUri;
                        return [2 /*return*/, _super.prototype.getModel.call(this, uri, toDispose)];
                }
            });
        });
    };
    ArduinoMonacoEditorProvider.prototype.createMonacoEditorOptions = function (model) {
        var options = this.createOptions(this.preferencePrefixes, model.uri, model.languageId);
        options.model = model.textEditorModel;
        options.readOnly = model.readOnly;
        if (this.dataDirUri) {
            options.readOnly = new uri_1.default(this.dataDirUri).isEqualOrParent(new uri_1.default(model.uri));
        }
        return options;
    };
    __decorate([
        inversify_1.inject(config_service_1.ConfigService),
        __metadata("design:type", Object)
    ], ArduinoMonacoEditorProvider.prototype, "configService", void 0);
    ArduinoMonacoEditorProvider = __decorate([
        inversify_1.injectable()
    ], ArduinoMonacoEditorProvider);
    return ArduinoMonacoEditorProvider;
}(monaco_editor_provider_1.MonacoEditorProvider));
exports.ArduinoMonacoEditorProvider = ArduinoMonacoEditorProvider;
//# sourceMappingURL=arduino-monaco-editor-provider.js.map

/***/ }),

/***/ "./node_modules/arduino-ide-extension/lib/browser/language/arduino-language-client-contribution.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/arduino-ide-extension/lib/browser/language/arduino-language-client-contribution.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var browser_1 = __webpack_require__(/*! @theia/languages/lib/browser */ "./node_modules/@theia/languages/lib/browser/index.js");
var boards_service_client_impl_1 = __webpack_require__(/*! ../boards/boards-service-client-impl */ "./node_modules/arduino-ide-extension/lib/browser/boards/boards-service-client-impl.js");
var boards_service_1 = __webpack_require__(/*! ../../common/protocol/boards-service */ "./node_modules/arduino-ide-extension/lib/common/protocol/boards-service.js");
var ArduinoLanguageClientContribution = /** @class */ (function (_super) {
    __extends(ArduinoLanguageClientContribution, _super);
    function ArduinoLanguageClientContribution() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.id = 'ino';
        _this.name = 'Arduino';
        return _this;
    }
    Object.defineProperty(ArduinoLanguageClientContribution.prototype, "documentSelector", {
        get: function () {
            return ['ino'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ArduinoLanguageClientContribution.prototype, "globPatterns", {
        get: function () {
            return ['**/*.ino'];
        },
        enumerable: true,
        configurable: true
    });
    ArduinoLanguageClientContribution.prototype.init = function () {
        var _this = this;
        this.boardsServiceClient.onBoardsConfigChanged(this.selectBoard.bind(this));
        var restartIfAffected = function (pkg) {
            if (!_this.boardConfig) {
                _this.restart();
                return;
            }
            var selectedBoard = _this.boardConfig.selectedBoard;
            if (selectedBoard && pkg.boards.some(function (board) { return boards_service_1.Board.sameAs(board, selectedBoard); })) {
                _this.restart();
            }
        };
        this.boardsServiceClient.onBoardInstalled(function (_a) {
            var pkg = _a.pkg;
            return restartIfAffected(pkg);
        });
        this.boardsServiceClient.onBoardUninstalled(function (_a) {
            var pkg = _a.pkg;
            return restartIfAffected(pkg);
        });
    };
    ArduinoLanguageClientContribution.prototype.selectBoard = function (config) {
        this.boardConfig = config;
        // Force a restart to send the new board config to the language server
        this.restart();
    };
    ArduinoLanguageClientContribution.prototype.getStartParameters = function () {
        return this.boardConfig;
    };
    __decorate([
        inversify_1.inject(boards_service_client_impl_1.BoardsServiceClientImpl),
        __metadata("design:type", boards_service_client_impl_1.BoardsServiceClientImpl)
    ], ArduinoLanguageClientContribution.prototype, "boardsServiceClient", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ArduinoLanguageClientContribution.prototype, "init", null);
    ArduinoLanguageClientContribution = __decorate([
        inversify_1.injectable()
    ], ArduinoLanguageClientContribution);
    return ArduinoLanguageClientContribution;
}(browser_1.BaseLanguageClientContribution));
exports.ArduinoLanguageClientContribution = ArduinoLanguageClientContribution;


/***/ }),

/***/ "./node_modules/arduino-ide-extension/lib/browser/language/arduino-language-grammar-contribution.js":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/arduino-ide-extension/lib/browser/language/arduino-language-grammar-contribution.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var ArduinoLanguageGrammarContribution = /** @class */ (function () {
    function ArduinoLanguageGrammarContribution() {
        this.configuration = {
            comments: {
                lineComment: '//',
                blockComment: ['/*', '*/'],
            },
            brackets: [
                ['{', '}'],
                ['[', ']'],
                ['(', ')']
            ],
            autoClosingPairs: [
                { open: '[', close: ']' },
                { open: '{', close: '}' },
                { open: '(', close: ')' },
                { open: '\'', close: '\'', notIn: ['string', 'comment'] },
                { open: '"', close: '"', notIn: ['string'] },
                { open: '/*', close: ' */', notIn: ['string'] }
            ],
            surroundingPairs: [
                { open: '{', close: '}' },
                { open: '[', close: ']' },
                { open: '(', close: ')' },
                { open: '"', close: '"' },
                { open: '\'', close: '\'' },
            ],
            folding: {
                markers: {
                    start: new RegExp('^\\s*#pragma\\s+region\\b'),
                    end: new RegExp('^\\s*#pragma\\s+endregion\\b')
                }
            }
        };
    }
    ArduinoLanguageGrammarContribution_1 = ArduinoLanguageGrammarContribution;
    ArduinoLanguageGrammarContribution.prototype.registerTextmateLanguage = function (registry) {
        monaco.languages.register({
            id: ArduinoLanguageGrammarContribution_1.INO_LANGUAGE_ID,
            extensions: ['.ino'],
            aliases: ['INO', 'Ino', 'ino'],
        });
        monaco.languages.setLanguageConfiguration(ArduinoLanguageGrammarContribution_1.INO_LANGUAGE_ID, this.configuration);
        var inoGrammar = __webpack_require__(/*! ../../../data/ino.tmLanguage.json */ "./node_modules/arduino-ide-extension/data/ino.tmLanguage.json");
        registry.registerTextmateGrammarScope('source.ino', {
            getGrammarDefinition: function () {
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        return [2 /*return*/, {
                                format: 'json',
                                content: inoGrammar
                            }];
                    });
                });
            }
        });
        registry.mapLanguageIdToTextmateGrammar(ArduinoLanguageGrammarContribution_1.INO_LANGUAGE_ID, 'source.ino');
    };
    var ArduinoLanguageGrammarContribution_1;
    ArduinoLanguageGrammarContribution.INO_LANGUAGE_ID = 'ino';
    ArduinoLanguageGrammarContribution = ArduinoLanguageGrammarContribution_1 = __decorate([
        inversify_1.injectable()
    ], ArduinoLanguageGrammarContribution);
    return ArduinoLanguageGrammarContribution;
}());
exports.ArduinoLanguageGrammarContribution = ArduinoLanguageGrammarContribution;


/***/ }),

/***/ "./node_modules/arduino-ide-extension/lib/browser/library/library-list-widget.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/arduino-ide-extension/lib/browser/library/library-list-widget.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var library_service_1 = __webpack_require__(/*! ../../common/protocol/library-service */ "./node_modules/arduino-ide-extension/lib/common/protocol/library-service.js");
var list_widget_1 = __webpack_require__(/*! ../components/component-list/list-widget */ "./node_modules/arduino-ide-extension/lib/browser/components/component-list/list-widget.js");
var list_item_renderer_1 = __webpack_require__(/*! ../components/component-list/list-item-renderer */ "./node_modules/arduino-ide-extension/lib/browser/components/component-list/list-item-renderer.js");
var LibraryListWidget = /** @class */ (function (_super) {
    __extends(LibraryListWidget, _super);
    function LibraryListWidget(service, itemRenderer) {
        var _this = _super.call(this, {
            id: LibraryListWidget_1.WIDGET_ID,
            label: LibraryListWidget_1.WIDGET_LABEL,
            iconClass: 'library-tab-icon',
            searchable: service,
            installable: service,
            itemLabel: function (item) { return item.name; },
            itemRenderer: itemRenderer
        }) || this;
        _this.service = service;
        _this.itemRenderer = itemRenderer;
        return _this;
    }
    LibraryListWidget_1 = LibraryListWidget;
    var LibraryListWidget_1;
    LibraryListWidget.WIDGET_ID = 'library-list-widget';
    LibraryListWidget.WIDGET_LABEL = 'Library Manager';
    LibraryListWidget = LibraryListWidget_1 = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(library_service_1.LibraryService)),
        __param(1, inversify_1.inject(list_item_renderer_1.ListItemRenderer)),
        __metadata("design:paramtypes", [Object, list_item_renderer_1.ListItemRenderer])
    ], LibraryListWidget);
    return LibraryListWidget;
}(list_widget_1.ListWidget));
exports.LibraryListWidget = LibraryListWidget;


/***/ }),

/***/ "./node_modules/arduino-ide-extension/lib/browser/library/library-widget-frontend-contribution.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/arduino-ide-extension/lib/browser/library/library-widget-frontend-contribution.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var view_contribution_1 = __webpack_require__(/*! @theia/core/lib/browser/shell/view-contribution */ "./node_modules/@theia/core/lib/browser/shell/view-contribution.js");
var library_list_widget_1 = __webpack_require__(/*! ./library-list-widget */ "./node_modules/arduino-ide-extension/lib/browser/library/library-list-widget.js");
var arduino_frontend_contribution_1 = __webpack_require__(/*! ../arduino-frontend-contribution */ "./node_modules/arduino-ide-extension/lib/browser/arduino-frontend-contribution.js");
var LibraryListWidgetFrontendContribution = /** @class */ (function (_super) {
    __extends(LibraryListWidgetFrontendContribution, _super);
    function LibraryListWidgetFrontendContribution() {
        return _super.call(this, {
            widgetId: library_list_widget_1.LibraryListWidget.WIDGET_ID,
            widgetName: library_list_widget_1.LibraryListWidget.WIDGET_LABEL,
            defaultWidgetOptions: {
                area: 'left',
                rank: 600
            },
            toggleCommandId: library_list_widget_1.LibraryListWidget.WIDGET_ID + ":toggle",
            toggleKeybinding: 'ctrlcmd+shift+l'
        }) || this;
    }
    LibraryListWidgetFrontendContribution.prototype.initializeLayout = function () {
        // NOOP
    };
    LibraryListWidgetFrontendContribution.prototype.registerMenus = function (menus) {
        if (this.toggleCommand) {
            menus.registerMenuAction(arduino_frontend_contribution_1.ArduinoMenus.SKETCH, {
                commandId: this.toggleCommand.id,
                label: 'Manage Libraries...'
            });
        }
    };
    LibraryListWidgetFrontendContribution = __decorate([
        inversify_1.injectable(),
        __metadata("design:paramtypes", [])
    ], LibraryListWidgetFrontendContribution);
    return LibraryListWidgetFrontendContribution;
}(view_contribution_1.AbstractViewContribution));
exports.LibraryListWidgetFrontendContribution = LibraryListWidgetFrontendContribution;


/***/ }),

/***/ "./node_modules/arduino-ide-extension/lib/browser/markers/arduino-problem-manager.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/arduino-ide-extension/lib/browser/markers/arduino-problem-manager.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var uri_1 = __webpack_require__(/*! @theia/core/lib/common/uri */ "./node_modules/@theia/core/lib/common/uri.js");
var core_1 = __webpack_require__(/*! @theia/core */ "./node_modules/@theia/core/lib/common/index.js");
var problem_manager_1 = __webpack_require__(/*! @theia/markers/lib/browser/problem/problem-manager */ "./node_modules/@theia/markers/lib/browser/problem/problem-manager.js");
var config_service_1 = __webpack_require__(/*! ../../common/protocol/config-service */ "./node_modules/arduino-ide-extension/lib/common/protocol/config-service.js");
var ArduinoProblemManager = /** @class */ (function (_super) {
    __extends(ArduinoProblemManager, _super);
    function ArduinoProblemManager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ArduinoProblemManager.prototype.init = function () {
        var _this = this;
        _super.prototype.init.call(this);
        this.configService.getConfiguration()
            .then(function (_a) {
            var dataDirUri = _a.dataDirUri;
            return _this.dataDirUri = new uri_1.default(dataDirUri);
        })
            .catch(function (err) { return _this.logger.error("Failed to determine the data directory: " + err); });
    };
    ArduinoProblemManager.prototype.setMarkers = function (uri, owner, data) {
        if (this.dataDirUri && this.dataDirUri.isEqualOrParent(uri)) {
            return [];
        }
        return _super.prototype.setMarkers.call(this, uri, owner, data);
    };
    __decorate([
        inversify_1.inject(config_service_1.ConfigService),
        __metadata("design:type", Object)
    ], ArduinoProblemManager.prototype, "configService", void 0);
    __decorate([
        inversify_1.inject(core_1.ILogger),
        __metadata("design:type", Object)
    ], ArduinoProblemManager.prototype, "logger", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ArduinoProblemManager.prototype, "init", null);
    ArduinoProblemManager = __decorate([
        inversify_1.injectable()
    ], ArduinoProblemManager);
    return ArduinoProblemManager;
}(problem_manager_1.ProblemManager));
exports.ArduinoProblemManager = ArduinoProblemManager;


/***/ }),

/***/ "./node_modules/arduino-ide-extension/lib/browser/monitor/monitor-connection.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/arduino-ide-extension/lib/browser/monitor/monitor-connection.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var event_1 = __webpack_require__(/*! @theia/core/lib/common/event */ "./node_modules/@theia/core/lib/common/event.js");
var message_service_1 = __webpack_require__(/*! @theia/core/lib/common/message-service */ "./node_modules/@theia/core/lib/common/message-service.js");
var frontend_application_state_1 = __webpack_require__(/*! @theia/core/lib/browser/frontend-application-state */ "./node_modules/@theia/core/lib/browser/frontend-application-state.js");
var monitor_service_1 = __webpack_require__(/*! ../../common/protocol/monitor-service */ "./node_modules/arduino-ide-extension/lib/common/protocol/monitor-service.js");
var boards_service_client_impl_1 = __webpack_require__(/*! ../boards/boards-service-client-impl */ "./node_modules/arduino-ide-extension/lib/browser/boards/boards-service-client-impl.js");
var boards_service_1 = __webpack_require__(/*! ../../common/protocol/boards-service */ "./node_modules/arduino-ide-extension/lib/common/protocol/boards-service.js");
var monitor_service_client_impl_1 = __webpack_require__(/*! ./monitor-service-client-impl */ "./node_modules/arduino-ide-extension/lib/browser/monitor/monitor-service-client-impl.js");
var boards_config_1 = __webpack_require__(/*! ../boards/boards-config */ "./node_modules/arduino-ide-extension/lib/browser/boards/boards-config.js");
var monitor_model_1 = __webpack_require__(/*! ./monitor-model */ "./node_modules/arduino-ide-extension/lib/browser/monitor/monitor-model.js");
var MonitorConnection = /** @class */ (function () {
    function MonitorConnection() {
        /**
         * Note: The idea is to toggle this property from the UI (`Monitor` view)
         * and the boards config and the boards attachment/detachment logic can be at on place, here.
         */
        this._autoConnect = false;
        this.onConnectionChangedEmitter = new event_1.Emitter();
        /**
         * This emitter forwards all read events **iff** the connection is established.
         */
        this.onReadEmitter = new event_1.Emitter();
        /**
         * Array for storing previous monitor errors received from the server, and based on the number of elements in this array,
         * we adjust the reconnection delay.
         * Super naive way: we wait `array.length * 1000` ms. Once we hit 10 errors, we do not try to reconnect and clean the array.
         */
        this.monitorErrors = [];
    }
    MonitorConnection_1 = MonitorConnection;
    MonitorConnection.prototype.init = function () {
        var _this = this;
        // Forward the messages from the board **iff** connected.
        this.monitorServiceClient.onRead(function (event) {
            if (_this.connected) {
                _this.onReadEmitter.fire(event);
            }
        });
        this.monitorServiceClient.onError(function (error) { return __awaiter(_this, void 0, void 0, function () {
            var shouldReconnect, code, config, board, port, options, oldState_1, attempts, timeout;
            var _this = this;
            return __generator(this, function (_a) {
                shouldReconnect = false;
                if (this.state) {
                    code = error.code, config = error.config;
                    board = config.board, port = config.port;
                    options = { timeout: 3000 };
                    switch (code) {
                        case monitor_service_1.MonitorError.ErrorCodes.CLIENT_CANCEL: {
                            console.debug("Connection was canceled by client: " + MonitorConnection_1.State.toString(this.state) + ".");
                            break;
                        }
                        case monitor_service_1.MonitorError.ErrorCodes.DEVICE_BUSY: {
                            this.messageService.warn("Connection failed. Serial port is busy: " + boards_service_1.Port.toString(port) + ".", options);
                            shouldReconnect = this.autoConnect;
                            this.monitorErrors.push(error);
                            break;
                        }
                        case monitor_service_1.MonitorError.ErrorCodes.DEVICE_NOT_CONFIGURED: {
                            this.messageService.info("Disconnected " + boards_service_1.Board.toString(board, { useFqbn: false }) + " from " + boards_service_1.Port.toString(port) + ".", options);
                            break;
                        }
                        case undefined: {
                            this.messageService.error("Unexpected error. Reconnecting " + boards_service_1.Board.toString(board) + " on port " + boards_service_1.Port.toString(port) + ".", options);
                            console.error(JSON.stringify(error));
                            shouldReconnect = this.connected && this.autoConnect;
                            break;
                        }
                    }
                    oldState_1 = this.state;
                    this.state = undefined;
                    this.onConnectionChangedEmitter.fire(this.state);
                    if (shouldReconnect) {
                        if (this.monitorErrors.length >= 10) {
                            this.messageService.warn("Failed to reconnect " + boards_service_1.Board.toString(board, { useFqbn: false }) + " to the the serial-monitor after 10 consecutive attempts. The " + boards_service_1.Port.toString(port) + " serial port is busy. after 10 consecutive attempts.");
                            this.monitorErrors.length = 0;
                        }
                        else {
                            attempts = (this.monitorErrors.length || 1);
                            if (this.reconnectTimeout !== undefined) {
                                // Clear the previous timer.
                                window.clearTimeout(this.reconnectTimeout);
                            }
                            timeout = attempts * 1000;
                            this.messageService.warn("Reconnecting " + boards_service_1.Board.toString(board, { useFqbn: false }) + " to " + boards_service_1.Port.toString(port) + " in " + attempts + " seconds...", { timeout: timeout });
                            this.reconnectTimeout = window.setTimeout(function () { return _this.connect(oldState_1.config); }, timeout);
                        }
                    }
                }
                return [2 /*return*/];
            });
        }); });
        this.boardsServiceClient.onBoardsConfigChanged(this.handleBoardConfigChange.bind(this));
        this.boardsServiceClient.onBoardsChanged(function (event) {
            if (_this.autoConnect && _this.connected) {
                var boardsConfig_1 = _this.boardsServiceClient.boardsConfig;
                if (_this.boardsServiceClient.canUploadTo(boardsConfig_1, { silent: false })) {
                    var attached = boards_service_1.AttachedBoardsChangeEvent.diff(event).attached;
                    if (attached.boards.some(function (board) { return boards_service_1.AttachedSerialBoard.is(board) && boards_config_1.BoardsConfig.Config.sameAs(boardsConfig_1, board); })) {
                        var board_1 = boardsConfig_1.selectedBoard, port_1 = boardsConfig_1.selectedPort;
                        var baudRate_1 = _this.monitorModel.baudRate;
                        _this.disconnect()
                            .then(function () { return _this.connect({ board: board_1, port: port_1, baudRate: baudRate_1 }); });
                    }
                }
            }
        });
        // Handles the `baudRate` changes by reconnecting if required.
        this.monitorModel.onChange(function (_a) {
            var property = _a.property;
            if (property === 'baudRate' && _this.autoConnect && _this.connected) {
                var boardsConfig = _this.boardsServiceClient.boardsConfig;
                _this.handleBoardConfigChange(boardsConfig);
            }
        });
    };
    Object.defineProperty(MonitorConnection.prototype, "connected", {
        get: function () {
            return !!this.state;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MonitorConnection.prototype, "monitorConfig", {
        get: function () {
            return this.state ? this.state.config : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MonitorConnection.prototype, "autoConnect", {
        get: function () {
            return this._autoConnect;
        },
        set: function (value) {
            var _this = this;
            var oldValue = this._autoConnect;
            this._autoConnect = value;
            // When we enable the auto-connect, we have to connect
            if (!oldValue && value) {
                // We have to make sure the previous boards config has been restored.
                // Otherwise, we might start the auto-connection without configured boards.
                this.applicationState.reachedState('started_contributions').then(function () {
                    var boardsConfig = _this.boardsServiceClient.boardsConfig;
                    _this.handleBoardConfigChange(boardsConfig);
                });
            }
            else if (oldValue && !value) {
                if (this.reconnectTimeout !== undefined) {
                    window.clearTimeout(this.reconnectTimeout);
                    this.monitorErrors.length = 0;
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    MonitorConnection.prototype.connect = function (config) {
        return __awaiter(this, void 0, void 0, function () {
            var disconnectStatus, connectStatus;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.connected) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.disconnect()];
                    case 1:
                        disconnectStatus = _a.sent();
                        if (!monitor_service_1.Status.isOK(disconnectStatus)) {
                            return [2 /*return*/, disconnectStatus];
                        }
                        _a.label = 2;
                    case 2:
                        console.info(">>> Creating serial monitor connection for " + boards_service_1.Board.toString(config.board) + " on port " + boards_service_1.Port.toString(config.port) + "...");
                        return [4 /*yield*/, this.monitorService.connect(config)];
                    case 3:
                        connectStatus = _a.sent();
                        if (monitor_service_1.Status.isOK(connectStatus)) {
                            this.state = { config: config };
                            console.info("<<< Serial monitor connection created for " + boards_service_1.Board.toString(config.board, { useFqbn: false }) + " on port " + boards_service_1.Port.toString(config.port) + ".");
                        }
                        this.onConnectionChangedEmitter.fire(this.state);
                        return [2 /*return*/, monitor_service_1.Status.isOK(connectStatus)];
                }
            });
        });
    };
    MonitorConnection.prototype.disconnect = function () {
        return __awaiter(this, void 0, void 0, function () {
            var status;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.state) { // XXX: we user `this.state` instead of `this.connected` to make the type checker happy. 
                            return [2 /*return*/, monitor_service_1.Status.OK];
                        }
                        console.log('>>> Disposing existing monitor connection...');
                        return [4 /*yield*/, this.monitorService.disconnect()];
                    case 1:
                        status = _a.sent();
                        if (monitor_service_1.Status.isOK(status)) {
                            console.log("<<< Disposed connection. Was: " + MonitorConnection_1.State.toString(this.state));
                        }
                        else {
                            console.warn("<<< Could not dispose connection. Activate connection: " + MonitorConnection_1.State.toString(this.state));
                        }
                        this.state = undefined;
                        this.onConnectionChangedEmitter.fire(this.state);
                        return [2 /*return*/, status];
                }
            });
        });
    };
    /**
     * Sends the data to the connected serial monitor.
     * The desired EOL is appended to `data`, you do not have to add it.
     * It is a NOOP if connected.
     */
    MonitorConnection.prototype.send = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                if (!this.connected) {
                    return [2 /*return*/, monitor_service_1.Status.NOT_CONNECTED];
                }
                return [2 /*return*/, new Promise(function (resolve) {
                        _this.monitorService.send(data + _this.monitorModel.lineEnding)
                            .then(function () { return resolve(monitor_service_1.Status.OK); });
                    })];
            });
        });
    };
    Object.defineProperty(MonitorConnection.prototype, "onConnectionChanged", {
        get: function () {
            return this.onConnectionChangedEmitter.event;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MonitorConnection.prototype, "onRead", {
        get: function () {
            return this.onReadEmitter.event;
        },
        enumerable: true,
        configurable: true
    });
    MonitorConnection.prototype.handleBoardConfigChange = function (boardsConfig) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                if (this.autoConnect) {
                    if (this.boardsServiceClient.canUploadTo(boardsConfig, { silent: false })) {
                        // Instead of calling `getAttachedBoards` and filtering for `AttachedSerialBoard` we have to check the available ports.
                        // The connected board might be unknown. See: https://github.com/arduino/arduino-pro-ide/issues/127#issuecomment-563251881
                        this.boardsService.getAvailablePorts().then(function (_a) {
                            var ports = _a.ports;
                            if (ports.some(function (port) { return boards_service_1.Port.equals(port, boardsConfig.selectedPort); })) {
                                new Promise(function (resolve) {
                                    // First, disconnect if connected.
                                    if (_this.connected) {
                                        _this.disconnect().then(function () { return resolve(); });
                                        return;
                                    }
                                    resolve();
                                }).then(function () {
                                    // Then (re-)connect.
                                    var board = boardsConfig.selectedBoard, port = boardsConfig.selectedPort;
                                    var baudRate = _this.monitorModel.baudRate;
                                    _this.connect({ board: board, port: port, baudRate: baudRate });
                                });
                            }
                        });
                    }
                }
                return [2 /*return*/];
            });
        });
    };
    var MonitorConnection_1;
    __decorate([
        inversify_1.inject(monitor_model_1.MonitorModel),
        __metadata("design:type", monitor_model_1.MonitorModel)
    ], MonitorConnection.prototype, "monitorModel", void 0);
    __decorate([
        inversify_1.inject(monitor_service_1.MonitorService),
        __metadata("design:type", Object)
    ], MonitorConnection.prototype, "monitorService", void 0);
    __decorate([
        inversify_1.inject(monitor_service_client_impl_1.MonitorServiceClientImpl),
        __metadata("design:type", monitor_service_client_impl_1.MonitorServiceClientImpl)
    ], MonitorConnection.prototype, "monitorServiceClient", void 0);
    __decorate([
        inversify_1.inject(boards_service_1.BoardsService),
        __metadata("design:type", Object)
    ], MonitorConnection.prototype, "boardsService", void 0);
    __decorate([
        inversify_1.inject(boards_service_client_impl_1.BoardsServiceClientImpl),
        __metadata("design:type", boards_service_client_impl_1.BoardsServiceClientImpl)
    ], MonitorConnection.prototype, "boardsServiceClient", void 0);
    __decorate([
        inversify_1.inject(message_service_1.MessageService),
        __metadata("design:type", message_service_1.MessageService)
    ], MonitorConnection.prototype, "messageService", void 0);
    __decorate([
        inversify_1.inject(frontend_application_state_1.FrontendApplicationStateService),
        __metadata("design:type", frontend_application_state_1.FrontendApplicationStateService)
    ], MonitorConnection.prototype, "applicationState", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], MonitorConnection.prototype, "init", null);
    MonitorConnection = MonitorConnection_1 = __decorate([
        inversify_1.injectable()
    ], MonitorConnection);
    return MonitorConnection;
}());
exports.MonitorConnection = MonitorConnection;
(function (MonitorConnection) {
    var State;
    (function (State) {
        function toString(state) {
            var config = state.config;
            var board = config.board, port = config.port;
            return boards_service_1.Board.toString(board) + " " + boards_service_1.Port.toString(port);
        }
        State.toString = toString;
    })(State = MonitorConnection.State || (MonitorConnection.State = {}));
})(MonitorConnection = exports.MonitorConnection || (exports.MonitorConnection = {}));
exports.MonitorConnection = MonitorConnection;


/***/ }),

/***/ "./node_modules/arduino-ide-extension/lib/browser/monitor/monitor-model.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/arduino-ide-extension/lib/browser/monitor/monitor-model.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var event_1 = __webpack_require__(/*! @theia/core/lib/common/event */ "./node_modules/@theia/core/lib/common/event.js");
var monitor_service_1 = __webpack_require__(/*! ../../common/protocol/monitor-service */ "./node_modules/arduino-ide-extension/lib/common/protocol/monitor-service.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "./node_modules/@theia/core/lib/browser/index.js");
var boards_service_client_impl_1 = __webpack_require__(/*! ../boards/boards-service-client-impl */ "./node_modules/arduino-ide-extension/lib/browser/boards/boards-service-client-impl.js");
var MonitorModel = /** @class */ (function () {
    function MonitorModel() {
        this._autoscroll = true;
        this._timestamp = false;
        this._baudRate = monitor_service_1.MonitorConfig.BaudRate.DEFAULT;
        this._lineEnding = MonitorModel_1.EOL.DEFAULT;
        this.onChangeEmitter = new event_1.Emitter();
    }
    MonitorModel_1 = MonitorModel;
    MonitorModel.prototype.onStart = function () {
        var _this = this;
        this.localStorageService.getData(MonitorModel_1.STORAGE_ID).then(function (state) {
            if (state) {
                _this.restoreState(state);
            }
        });
    };
    Object.defineProperty(MonitorModel.prototype, "onChange", {
        get: function () {
            return this.onChangeEmitter.event;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MonitorModel.prototype, "autoscroll", {
        get: function () {
            return this._autoscroll;
        },
        enumerable: true,
        configurable: true
    });
    MonitorModel.prototype.toggleAutoscroll = function () {
        var _this = this;
        this._autoscroll = !this._autoscroll;
        this.storeState();
        this.storeState().then(function () { return _this.onChangeEmitter.fire({ property: 'autoscroll', value: _this._autoscroll }); });
    };
    Object.defineProperty(MonitorModel.prototype, "timestamp", {
        get: function () {
            return this._timestamp;
        },
        enumerable: true,
        configurable: true
    });
    MonitorModel.prototype.toggleTimestamp = function () {
        var _this = this;
        this._timestamp = !this._timestamp;
        this.storeState().then(function () { return _this.onChangeEmitter.fire({ property: 'timestamp', value: _this._timestamp }); });
    };
    Object.defineProperty(MonitorModel.prototype, "baudRate", {
        get: function () {
            return this._baudRate;
        },
        set: function (baudRate) {
            var _this = this;
            this._baudRate = baudRate;
            this.storeState().then(function () { return _this.onChangeEmitter.fire({ property: 'baudRate', value: _this._baudRate }); });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MonitorModel.prototype, "lineEnding", {
        get: function () {
            return this._lineEnding;
        },
        set: function (lineEnding) {
            var _this = this;
            this._lineEnding = lineEnding;
            this.storeState().then(function () { return _this.onChangeEmitter.fire({ property: 'lineEnding', value: _this._lineEnding }); });
        },
        enumerable: true,
        configurable: true
    });
    MonitorModel.prototype.restoreState = function (state) {
        this._autoscroll = state.autoscroll;
        this._timestamp = state.timestamp;
        this._baudRate = state.baudRate;
        this._lineEnding = state.lineEnding;
    };
    MonitorModel.prototype.storeState = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.localStorageService.setData(MonitorModel_1.STORAGE_ID, {
                        autoscroll: this._autoscroll,
                        timestamp: this._timestamp,
                        baudRate: this._baudRate,
                        lineEnding: this._lineEnding
                    })];
            });
        });
    };
    var MonitorModel_1;
    MonitorModel.STORAGE_ID = 'arduino-monitor-model';
    __decorate([
        inversify_1.inject(browser_1.LocalStorageService),
        __metadata("design:type", browser_1.LocalStorageService)
    ], MonitorModel.prototype, "localStorageService", void 0);
    __decorate([
        inversify_1.inject(boards_service_client_impl_1.BoardsServiceClientImpl),
        __metadata("design:type", boards_service_client_impl_1.BoardsServiceClientImpl)
    ], MonitorModel.prototype, "boardsServiceClient", void 0);
    MonitorModel = MonitorModel_1 = __decorate([
        inversify_1.injectable(),
        __metadata("design:paramtypes", [])
    ], MonitorModel);
    return MonitorModel;
}());
exports.MonitorModel = MonitorModel;
(function (MonitorModel) {
    var EOL;
    (function (EOL) {
        EOL.DEFAULT = '\n';
    })(EOL = MonitorModel.EOL || (MonitorModel.EOL = {}));
})(MonitorModel = exports.MonitorModel || (exports.MonitorModel = {}));
exports.MonitorModel = MonitorModel;


/***/ }),

/***/ "./node_modules/arduino-ide-extension/lib/browser/monitor/monitor-service-client-impl.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/arduino-ide-extension/lib/browser/monitor/monitor-service-client-impl.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var event_1 = __webpack_require__(/*! @theia/core/lib/common/event */ "./node_modules/@theia/core/lib/common/event.js");
var MonitorServiceClientImpl = /** @class */ (function () {
    function MonitorServiceClientImpl() {
        this.onReadEmitter = new event_1.Emitter();
        this.onErrorEmitter = new event_1.Emitter();
        this.onRead = this.onReadEmitter.event;
        this.onError = this.onErrorEmitter.event;
    }
    MonitorServiceClientImpl.prototype.notifyRead = function (event) {
        this.onReadEmitter.fire(event);
        var data = event.data;
        console.debug("Received data: " + data);
    };
    MonitorServiceClientImpl.prototype.notifyError = function (error) {
        this.onErrorEmitter.fire(error);
    };
    MonitorServiceClientImpl = __decorate([
        inversify_1.injectable()
    ], MonitorServiceClientImpl);
    return MonitorServiceClientImpl;
}());
exports.MonitorServiceClientImpl = MonitorServiceClientImpl;


/***/ }),

/***/ "./node_modules/arduino-ide-extension/lib/browser/monitor/monitor-view-contribution.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/arduino-ide-extension/lib/browser/monitor/monitor-view-contribution.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "./node_modules/@theia/core/lib/browser/index.js");
var monitor_widget_1 = __webpack_require__(/*! ./monitor-widget */ "./node_modules/arduino-ide-extension/lib/browser/monitor/monitor-widget.js");
var arduino_frontend_contribution_1 = __webpack_require__(/*! ../arduino-frontend-contribution */ "./node_modules/arduino-ide-extension/lib/browser/arduino-frontend-contribution.js");
var monitor_model_1 = __webpack_require__(/*! ./monitor-model */ "./node_modules/arduino-ide-extension/lib/browser/monitor/monitor-model.js");
var arduino_toolbar_1 = __webpack_require__(/*! ../toolbar/arduino-toolbar */ "./node_modules/arduino-ide-extension/lib/browser/toolbar/arduino-toolbar.js");
var SerialMonitor;
(function (SerialMonitor) {
    var Commands;
    (function (Commands) {
        Commands.AUTOSCROLL = {
            id: 'serial-monitor-autoscroll',
            label: 'Autoscroll'
        };
        Commands.TIMESTAMP = {
            id: 'serial-monitor-timestamp',
            label: 'Timestamp'
        };
        Commands.CLEAR_OUTPUT = {
            id: 'serial-monitor-clear-output',
            label: 'Clear Output',
            iconClass: 'clear-all'
        };
    })(Commands = SerialMonitor.Commands || (SerialMonitor.Commands = {}));
})(SerialMonitor = exports.SerialMonitor || (exports.SerialMonitor = {}));
var MonitorViewContribution = /** @class */ (function (_super) {
    __extends(MonitorViewContribution, _super);
    function MonitorViewContribution() {
        var _this = _super.call(this, {
            widgetId: monitor_widget_1.MonitorWidget.ID,
            widgetName: 'Serial Monitor',
            defaultWidgetOptions: {
                area: 'bottom'
            },
            toggleCommandId: MonitorViewContribution_1.OPEN_SERIAL_MONITOR,
            toggleKeybinding: 'ctrlcmd+shift+m'
        }) || this;
        _this.toggleAutoScroll = function () { return _this.doToggleAutoScroll(); };
        _this.toggleTimestamp = function () { return _this.doToggleTimestamp(); };
        return _this;
    }
    MonitorViewContribution_1 = MonitorViewContribution;
    MonitorViewContribution.prototype.registerMenus = function (menus) {
        if (this.toggleCommand) {
            menus.registerMenuAction(arduino_frontend_contribution_1.ArduinoMenus.TOOLS, {
                commandId: this.toggleCommand.id,
                label: 'Serial Monitor'
            });
        }
    };
    MonitorViewContribution.prototype.registerToolbarItems = function (registry) {
        var _this = this;
        registry.registerItem({
            id: 'monitor-autoscroll',
            render: function () { return _this.renderAutoScrollButton(); },
            isVisible: function (widget) { return widget instanceof monitor_widget_1.MonitorWidget; },
            onDidChange: this.model.onChange // XXX: it's a hack. See: https://github.com/eclipse-theia/theia/pull/6696/
        });
        registry.registerItem({
            id: 'monitor-timestamp',
            render: function () { return _this.renderTimestampButton(); },
            isVisible: function (widget) { return widget instanceof monitor_widget_1.MonitorWidget; },
            onDidChange: this.model.onChange // XXX: it's a hack. See: https://github.com/eclipse-theia/theia/pull/6696/
        });
        registry.registerItem({
            id: SerialMonitor.Commands.CLEAR_OUTPUT.id,
            command: SerialMonitor.Commands.CLEAR_OUTPUT.id,
            tooltip: 'Clear Output'
        });
    };
    MonitorViewContribution.prototype.registerCommands = function (commands) {
        var _this = this;
        commands.registerCommand(SerialMonitor.Commands.CLEAR_OUTPUT, {
            isEnabled: function (widget) { return widget instanceof monitor_widget_1.MonitorWidget; },
            isVisible: function (widget) { return widget instanceof monitor_widget_1.MonitorWidget; },
            execute: function (widget) {
                if (widget instanceof monitor_widget_1.MonitorWidget) {
                    widget.clearConsole();
                }
            }
        });
        if (this.toggleCommand) {
            commands.registerCommand(this.toggleCommand, {
                execute: function () { return _this.openView({
                    toggle: true,
                    activate: true
                }); },
                isVisible: function (widget) { return arduino_toolbar_1.ArduinoToolbar.is(widget) && widget.side === 'right'; }
            });
        }
    };
    MonitorViewContribution.prototype.renderAutoScrollButton = function () {
        return React.createElement(React.Fragment, { key: 'autoscroll-toolbar-item' },
            React.createElement("div", { title: 'Toggle Autoscroll', className: "item enabled fa fa-angle-double-down arduino-monitor " + (this.model.autoscroll ? 'toggled' : ''), onClick: this.toggleAutoScroll }));
    };
    MonitorViewContribution.prototype.doToggleAutoScroll = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.model.toggleAutoscroll();
                return [2 /*return*/];
            });
        });
    };
    MonitorViewContribution.prototype.renderTimestampButton = function () {
        return React.createElement(React.Fragment, { key: 'line-ending-toolbar-item' },
            React.createElement("div", { title: 'Toggle Timestamp', className: "item enabled fa fa-clock-o arduino-monitor " + (this.model.timestamp ? 'toggled' : ''), onClick: this.toggleTimestamp }));
    };
    MonitorViewContribution.prototype.doToggleTimestamp = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.model.toggleTimestamp();
                return [2 /*return*/];
            });
        });
    };
    var MonitorViewContribution_1;
    MonitorViewContribution.OPEN_SERIAL_MONITOR = monitor_widget_1.MonitorWidget.ID + ':toggle';
    __decorate([
        inversify_1.inject(monitor_model_1.MonitorModel),
        __metadata("design:type", monitor_model_1.MonitorModel)
    ], MonitorViewContribution.prototype, "model", void 0);
    MonitorViewContribution = MonitorViewContribution_1 = __decorate([
        inversify_1.injectable(),
        __metadata("design:paramtypes", [])
    ], MonitorViewContribution);
    return MonitorViewContribution;
}(browser_1.AbstractViewContribution));
exports.MonitorViewContribution = MonitorViewContribution;


/***/ }),

/***/ "./node_modules/arduino-ide-extension/lib/browser/monitor/monitor-widget.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/arduino-ide-extension/lib/browser/monitor/monitor-widget.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var dateFormat = __webpack_require__(/*! dateformat */ "./node_modules/dateformat/lib/dateformat.js");
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var os_1 = __webpack_require__(/*! @theia/core/lib/common/os */ "./node_modules/@theia/core/lib/common/os.js");
var event_1 = __webpack_require__(/*! @theia/core/lib/common/event */ "./node_modules/@theia/core/lib/common/event.js");
var keys_1 = __webpack_require__(/*! @theia/core/lib/browser/keys */ "./node_modules/@theia/core/lib/browser/keys.js");
var disposable_1 = __webpack_require__(/*! @theia/core/lib/common/disposable */ "./node_modules/@theia/core/lib/common/disposable.js");
var widgets_1 = __webpack_require__(/*! @theia/core/lib/browser/widgets */ "./node_modules/@theia/core/lib/browser/widgets/index.js");
var boards_service_1 = __webpack_require__(/*! ../../common/protocol/boards-service */ "./node_modules/arduino-ide-extension/lib/common/protocol/boards-service.js");
var arduino_select_1 = __webpack_require__(/*! ../components/arduino-select */ "./node_modules/arduino-ide-extension/lib/browser/components/arduino-select.js");
var monitor_model_1 = __webpack_require__(/*! ./monitor-model */ "./node_modules/arduino-ide-extension/lib/browser/monitor/monitor-model.js");
var monitor_connection_1 = __webpack_require__(/*! ./monitor-connection */ "./node_modules/arduino-ide-extension/lib/browser/monitor/monitor-connection.js");
var monitor_service_client_impl_1 = __webpack_require__(/*! ./monitor-service-client-impl */ "./node_modules/arduino-ide-extension/lib/browser/monitor/monitor-service-client-impl.js");
var MonitorWidget = /** @class */ (function (_super) {
    __extends(MonitorWidget, _super);
    function MonitorWidget() {
        var _this = _super.call(this) || this;
        /**
         * Guard against re-rendering the view after the close was requested.
         * See: https://github.com/eclipse-theia/theia/issues/6704
         */
        _this.closing = false;
        _this.clearOutputEmitter = new event_1.Emitter();
        _this.onFocusResolved = function (element) {
            _this.focusNode = element;
            requestAnimationFrame(function () { return widgets_1.MessageLoop.sendMessage(_this, widgets_1.Widget.Msg.ActivateRequest); });
        };
        _this.onSend = function (value) { return _this.doSend(value); };
        _this.onChangeLineEnding = function (option) {
            _this.monitorModel.lineEnding = option.value;
        };
        _this.onChangeBaudRate = function (option) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.monitorModel.baudRate = option.value;
                return [2 /*return*/];
            });
        }); };
        _this.id = MonitorWidget_1.ID;
        _this.title.label = 'Serial Monitor';
        _this.title.iconClass = 'arduino-serial-monitor-tab-icon';
        _this.title.closable = true;
        _this.scrollOptions = undefined;
        _this.toDispose.push(_this.clearOutputEmitter);
        return _this;
    }
    MonitorWidget_1 = MonitorWidget;
    MonitorWidget.prototype.init = function () {
        var _this = this;
        this.update();
        this.toDispose.push(this.monitorConnection.onConnectionChanged(function () { return _this.clearConsole(); }));
    };
    MonitorWidget.prototype.clearConsole = function () {
        this.clearOutputEmitter.fire(undefined);
        this.update();
    };
    MonitorWidget.prototype.dispose = function () {
        _super.prototype.dispose.call(this);
    };
    MonitorWidget.prototype.onAfterAttach = function (msg) {
        _super.prototype.onAfterAttach.call(this, msg);
        this.monitorConnection.autoConnect = true;
    };
    MonitorWidget.prototype.onCloseRequest = function (msg) {
        this.closing = true;
        this.monitorConnection.autoConnect = false;
        if (this.monitorConnection.connected) {
            this.monitorConnection.disconnect();
        }
        _super.prototype.onCloseRequest.call(this, msg);
    };
    MonitorWidget.prototype.onUpdateRequest = function (msg) {
        // TODO: `this.isAttached`
        // See: https://github.com/eclipse-theia/theia/issues/6704#issuecomment-562574713
        if (!this.closing && this.isAttached) {
            _super.prototype.onUpdateRequest.call(this, msg);
        }
    };
    MonitorWidget.prototype.onResize = function (msg) {
        _super.prototype.onResize.call(this, msg);
        this.widgetHeight = msg.height;
        this.update();
    };
    MonitorWidget.prototype.onActivateRequest = function (msg) {
        _super.prototype.onActivateRequest.call(this, msg);
        (this.focusNode || this.node).focus();
    };
    Object.defineProperty(MonitorWidget.prototype, "lineEndings", {
        get: function () {
            return [
                {
                    label: 'No Line Ending',
                    value: ''
                },
                {
                    label: 'New Line',
                    value: '\n'
                },
                {
                    label: 'Carriage Return',
                    value: '\r'
                },
                {
                    label: 'Both NL & CR',
                    value: '\r\n'
                }
            ];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MonitorWidget.prototype, "baudRates", {
        get: function () {
            var baudRates = [300, 1200, 2400, 4800, 9600, 19200, 38400, 57600, 115200];
            return baudRates.map(function (baudRate) { return ({ label: baudRate + ' baud', value: baudRate }); });
        },
        enumerable: true,
        configurable: true
    });
    MonitorWidget.prototype.render = function () {
        var _this = this;
        var _a = this, baudRates = _a.baudRates, lineEndings = _a.lineEndings;
        var lineEnding = lineEndings.find(function (item) { return item.value === _this.monitorModel.lineEnding; }) || lineEndings[1]; // Defaults to `\n`.
        var baudRate = baudRates.find(function (item) { return item.value === _this.monitorModel.baudRate; }) || baudRates[4]; // Defaults to `9600`.
        return React.createElement("div", { className: 'serial-monitor' },
            React.createElement("div", { className: 'head' },
                React.createElement("div", { className: 'send' },
                    React.createElement(SerialMonitorSendInput, { monitorConfig: this.monitorConnection.monitorConfig, resolveFocus: this.onFocusResolved, onSend: this.onSend })),
                React.createElement("div", { className: 'config' },
                    React.createElement("div", { className: 'select' },
                        React.createElement(arduino_select_1.ArduinoSelect, { maxMenuHeight: this.widgetHeight - 40, options: lineEndings, defaultValue: lineEnding, onChange: this.onChangeLineEnding })),
                    React.createElement("div", { className: 'select' },
                        React.createElement(arduino_select_1.ArduinoSelect, { className: 'select', maxMenuHeight: this.widgetHeight - 40, options: baudRates, defaultValue: baudRate, onChange: this.onChangeBaudRate })))),
            React.createElement("div", { className: 'body' },
                React.createElement(SerialMonitorOutput, { monitorModel: this.monitorModel, monitorConnection: this.monitorConnection, clearConsoleEvent: this.clearOutputEmitter.event })));
    };
    MonitorWidget.prototype.doSend = function (value) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.monitorConnection.send(value);
                return [2 /*return*/];
            });
        });
    };
    var MonitorWidget_1;
    MonitorWidget.ID = 'serial-monitor';
    __decorate([
        inversify_1.inject(monitor_model_1.MonitorModel),
        __metadata("design:type", monitor_model_1.MonitorModel)
    ], MonitorWidget.prototype, "monitorModel", void 0);
    __decorate([
        inversify_1.inject(monitor_connection_1.MonitorConnection),
        __metadata("design:type", monitor_connection_1.MonitorConnection)
    ], MonitorWidget.prototype, "monitorConnection", void 0);
    __decorate([
        inversify_1.inject(monitor_service_client_impl_1.MonitorServiceClientImpl),
        __metadata("design:type", monitor_service_client_impl_1.MonitorServiceClientImpl)
    ], MonitorWidget.prototype, "monitorServiceClient", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], MonitorWidget.prototype, "init", null);
    MonitorWidget = MonitorWidget_1 = __decorate([
        inversify_1.injectable(),
        __metadata("design:paramtypes", [])
    ], MonitorWidget);
    return MonitorWidget;
}(widgets_1.ReactWidget));
exports.MonitorWidget = MonitorWidget;
var SerialMonitorSendInput = /** @class */ (function (_super) {
    __extends(SerialMonitorSendInput, _super);
    function SerialMonitorSendInput(props) {
        var _this = _super.call(this, props) || this;
        _this.setRef = function (element) {
            if (_this.props.resolveFocus) {
                _this.props.resolveFocus(element || undefined);
            }
        };
        _this.state = { text: '' };
        _this.onChange = _this.onChange.bind(_this);
        _this.onSend = _this.onSend.bind(_this);
        _this.onKeyDown = _this.onKeyDown.bind(_this);
        return _this;
    }
    SerialMonitorSendInput.prototype.render = function () {
        return React.createElement("input", { ref: this.setRef, type: 'text', className: this.props.monitorConfig ? '' : 'warning', placeholder: this.placeholder, value: this.state.text, onChange: this.onChange, onKeyDown: this.onKeyDown });
    };
    Object.defineProperty(SerialMonitorSendInput.prototype, "placeholder", {
        get: function () {
            var monitorConfig = this.props.monitorConfig;
            if (!monitorConfig) {
                return 'Not connected. Select a board and a port to connect automatically.';
            }
            var board = monitorConfig.board, port = monitorConfig.port;
            return "Message (" + (os_1.isOSX ? '⌘' : 'Ctrl') + "+Enter to send message to '" + boards_service_1.Board.toString(board, { useFqbn: false }) + "' on '" + boards_service_1.Port.toString(port) + "')";
        },
        enumerable: true,
        configurable: true
    });
    SerialMonitorSendInput.prototype.onChange = function (event) {
        this.setState({ text: event.target.value });
    };
    SerialMonitorSendInput.prototype.onSend = function () {
        this.props.onSend(this.state.text);
        this.setState({ text: '' });
    };
    SerialMonitorSendInput.prototype.onKeyDown = function (event) {
        var keyCode = keys_1.KeyCode.createKeyCode(event.nativeEvent);
        if (keyCode) {
            var key = keyCode.key, meta = keyCode.meta, ctrl = keyCode.ctrl;
            if (key === keys_1.Key.ENTER && ((os_1.isOSX && meta) || (!os_1.isOSX && ctrl))) {
                this.onSend();
            }
        }
    };
    return SerialMonitorSendInput;
}(React.Component));
exports.SerialMonitorSendInput = SerialMonitorSendInput;
var SerialMonitorOutput = /** @class */ (function (_super) {
    __extends(SerialMonitorOutput, _super);
    function SerialMonitorOutput(props) {
        var _this = _super.call(this, props) || this;
        _this.toDisposeBeforeUnmount = new disposable_1.DisposableCollection();
        _this.state = { content: '', timestamp: _this.props.monitorModel.timestamp };
        return _this;
    }
    SerialMonitorOutput.prototype.render = function () {
        var _this = this;
        return React.createElement(React.Fragment, null,
            React.createElement("div", { style: ({ whiteSpace: 'pre', fontFamily: 'monospace' }) }, this.state.content),
            React.createElement("div", { style: { float: 'left', clear: 'both' }, ref: function (element) { _this.anchor = element; } }));
    };
    SerialMonitorOutput.prototype.componentDidMount = function () {
        var _this = this;
        this.scrollToBottom();
        var chunk = '';
        this.toDisposeBeforeUnmount.pushAll([
            this.props.monitorConnection.onRead(function (_a) {
                var data = _a.data;
                chunk += data;
                var eolIndex = chunk.indexOf('\n');
                if (eolIndex !== -1) {
                    var line = chunk.substring(0, eolIndex + 1);
                    chunk = chunk.slice(eolIndex + 1);
                    var content = "" + _this.state.content + (_this.state.timestamp ? dateFormat(new Date(), 'H:M:ss.l') + " -> " : '') + line;
                    _this.setState({ content: content });
                }
            }),
            this.props.clearConsoleEvent(function () { return _this.setState({ content: '' }); }),
            this.props.monitorModel.onChange(function (_a) {
                var property = _a.property;
                if (property === 'timestamp') {
                    var timestamp = _this.props.monitorModel.timestamp;
                    _this.setState({ timestamp: timestamp });
                }
            })
        ]);
    };
    SerialMonitorOutput.prototype.componentDidUpdate = function () {
        this.scrollToBottom();
    };
    SerialMonitorOutput.prototype.componentWillUnmount = function () {
        // TODO: "Your preferred browser's local storage is almost full." Discard `content` before saving layout?
        this.toDisposeBeforeUnmount.dispose();
    };
    SerialMonitorOutput.prototype.scrollToBottom = function () {
        if (this.props.monitorModel.autoscroll && this.anchor) {
            this.anchor.scrollIntoView();
        }
    };
    return SerialMonitorOutput;
}(React.Component));
exports.SerialMonitorOutput = SerialMonitorOutput;


/***/ }),

/***/ "./node_modules/arduino-ide-extension/lib/browser/shell/arduino-shell-layout-restorer.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/arduino-ide-extension/lib/browser/shell/arduino-shell-layout-restorer.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var shell_layout_restorer_1 = __webpack_require__(/*! @theia/core/lib/browser/shell/shell-layout-restorer */ "./node_modules/@theia/core/lib/browser/shell/shell-layout-restorer.js");
var ArduinoShellLayoutRestorer = /** @class */ (function (_super) {
    __extends(ArduinoShellLayoutRestorer, _super);
    function ArduinoShellLayoutRestorer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Workaround for https://github.com/eclipse-theia/theia/issues/6579.
    ArduinoShellLayoutRestorer.prototype.storeLayoutAsync = function (app) {
        return __awaiter(this, void 0, void 0, function () {
            var layoutData, serializedLayoutData, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.shouldStoreLayout) return [3 /*break*/, 5];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 5]);
                        this.logger.info('>>> Storing the layout...');
                        layoutData = app.shell.getLayoutData();
                        serializedLayoutData = this.deflate(layoutData);
                        return [4 /*yield*/, this.storageService.setData(this.storageKey, serializedLayoutData)];
                    case 2:
                        _a.sent();
                        this.logger.info('<<< The layout has been successfully stored.');
                        return [3 /*break*/, 5];
                    case 3:
                        error_1 = _a.sent();
                        return [4 /*yield*/, this.storageService.setData(this.storageKey, undefined)];
                    case 4:
                        _a.sent();
                        this.logger.error('Error during serialization of layout data', error_1);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    ArduinoShellLayoutRestorer = __decorate([
        inversify_1.injectable()
    ], ArduinoShellLayoutRestorer);
    return ArduinoShellLayoutRestorer;
}(shell_layout_restorer_1.ShellLayoutRestorer));
exports.ArduinoShellLayoutRestorer = ArduinoShellLayoutRestorer;


/***/ }),

/***/ "./node_modules/arduino-ide-extension/lib/browser/shell/arduino-tab-bar-decorator.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/arduino-ide-extension/lib/browser/shell/arduino-tab-bar-decorator.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var uri_1 = __webpack_require__(/*! @theia/core/lib/common/uri */ "./node_modules/@theia/core/lib/common/uri.js");
var core_1 = __webpack_require__(/*! @theia/core */ "./node_modules/@theia/core/lib/common/index.js");
var tab_bar_decorator_1 = __webpack_require__(/*! @theia/core/lib/browser/shell/tab-bar-decorator */ "./node_modules/@theia/core/lib/browser/shell/tab-bar-decorator.js");
var config_service_1 = __webpack_require__(/*! ../../common/protocol/config-service */ "./node_modules/arduino-ide-extension/lib/common/protocol/config-service.js");
var browser_1 = __webpack_require__(/*! @theia/editor/lib/browser */ "./node_modules/@theia/editor/lib/browser/index.js");
var ArduinoTabBarDecoratorService = /** @class */ (function (_super) {
    __extends(ArduinoTabBarDecoratorService, _super);
    function ArduinoTabBarDecoratorService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ArduinoTabBarDecoratorService.prototype.init = function () {
        var _this = this;
        _super.prototype.init.call(this);
        this.configService.getConfiguration()
            .then(function (_a) {
            var dataDirUri = _a.dataDirUri;
            return _this.dataDirUri = new uri_1.default(dataDirUri);
        })
            .catch(function (err) { return _this.logger.error("Failed to determine the data directory: " + err); });
    };
    ArduinoTabBarDecoratorService.prototype.getDecorations = function (title) {
        if (title.owner instanceof browser_1.EditorWidget) {
            var editor = title.owner.editor;
            if (this.dataDirUri && this.dataDirUri.isEqualOrParent(editor.uri)) {
                return [];
            }
        }
        return _super.prototype.getDecorations.call(this, title);
    };
    __decorate([
        inversify_1.inject(config_service_1.ConfigService),
        __metadata("design:type", Object)
    ], ArduinoTabBarDecoratorService.prototype, "configService", void 0);
    __decorate([
        inversify_1.inject(core_1.ILogger),
        __metadata("design:type", Object)
    ], ArduinoTabBarDecoratorService.prototype, "logger", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ArduinoTabBarDecoratorService.prototype, "init", null);
    ArduinoTabBarDecoratorService = __decorate([
        inversify_1.injectable()
    ], ArduinoTabBarDecoratorService);
    return ArduinoTabBarDecoratorService;
}(tab_bar_decorator_1.TabBarDecoratorService));
exports.ArduinoTabBarDecoratorService = ArduinoTabBarDecoratorService;


/***/ }),

/***/ "./node_modules/arduino-ide-extension/lib/browser/tool-output/client-service-impl.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/arduino-ide-extension/lib/browser/tool-output/client-service-impl.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var output_channel_1 = __webpack_require__(/*! @theia/output/lib/common/output-channel */ "./node_modules/@theia/output/lib/common/output-channel.js");
var output_contribution_1 = __webpack_require__(/*! @theia/output/lib/browser/output-contribution */ "./node_modules/@theia/output/lib/browser/output-contribution.js");
var ToolOutputServiceClientImpl = /** @class */ (function () {
    function ToolOutputServiceClientImpl() {
    }
    ToolOutputServiceClientImpl.prototype.onNewOutput = function (tool, chunk) {
        var _this = this;
        this.outputContribution.openView({ activate: true }).then(function () {
            var channel = _this.outputChannelManager.getChannel("Arduino: " + tool);
            channel.setVisibility(true);
            channel.append(chunk);
        });
    };
    __decorate([
        inversify_1.inject(output_channel_1.OutputChannelManager),
        __metadata("design:type", output_channel_1.OutputChannelManager)
    ], ToolOutputServiceClientImpl.prototype, "outputChannelManager", void 0);
    __decorate([
        inversify_1.inject(output_contribution_1.OutputContribution),
        __metadata("design:type", output_contribution_1.OutputContribution)
    ], ToolOutputServiceClientImpl.prototype, "outputContribution", void 0);
    ToolOutputServiceClientImpl = __decorate([
        inversify_1.injectable()
    ], ToolOutputServiceClientImpl);
    return ToolOutputServiceClientImpl;
}());
exports.ToolOutputServiceClientImpl = ToolOutputServiceClientImpl;


/***/ }),

/***/ "./node_modules/arduino-ide-extension/lib/browser/toolbar/arduino-toolbar-contribution.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/arduino-ide-extension/lib/browser/toolbar/arduino-toolbar-contribution.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "./node_modules/@theia/core/lib/browser/index.js");
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var arduino_toolbar_1 = __webpack_require__(/*! ./arduino-toolbar */ "./node_modules/arduino-ide-extension/lib/browser/toolbar/arduino-toolbar.js");
var tab_bar_toolbar_1 = __webpack_require__(/*! @theia/core/lib/browser/shell/tab-bar-toolbar */ "./node_modules/@theia/core/lib/browser/shell/tab-bar-toolbar.js");
var core_1 = __webpack_require__(/*! @theia/core */ "./node_modules/@theia/core/lib/common/index.js");
var label_parser_1 = __webpack_require__(/*! @theia/core/lib/browser/label-parser */ "./node_modules/@theia/core/lib/browser/label-parser.js");
var ArduinoToolbarContainer = /** @class */ (function (_super) {
    __extends(ArduinoToolbarContainer, _super);
    function ArduinoToolbarContainer() {
        var toolbars = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            toolbars[_i] = arguments[_i];
        }
        var _this = _super.call(this) || this;
        _this.id = 'arduino-toolbar-container';
        _this.toolbars = toolbars;
        return _this;
    }
    ArduinoToolbarContainer.prototype.onAfterAttach = function (msg) {
        var e_1, _a;
        try {
            for (var _b = __values(this.toolbars), _c = _b.next(); !_c.done; _c = _b.next()) {
                var toolbar_1 = _c.value;
                browser_1.Widget.attach(toolbar_1, this.node);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    return ArduinoToolbarContainer;
}(browser_1.Widget));
exports.ArduinoToolbarContainer = ArduinoToolbarContainer;
var ArduinoToolbarContribution = /** @class */ (function () {
    function ArduinoToolbarContribution(tabBarToolBarRegistry, commandRegistry, labelParser) {
        this.tabBarToolBarRegistry = tabBarToolBarRegistry;
        this.commandRegistry = commandRegistry;
        this.labelParser = labelParser;
        var leftToolbarWidget = new arduino_toolbar_1.ArduinoToolbar(tabBarToolBarRegistry, commandRegistry, labelParser, 'left');
        var rightToolbarWidget = new arduino_toolbar_1.ArduinoToolbar(tabBarToolBarRegistry, commandRegistry, labelParser, 'right');
        this.arduinoToolbarContainer = new ArduinoToolbarContainer(leftToolbarWidget, rightToolbarWidget);
    }
    ArduinoToolbarContribution.prototype.onStart = function (app) {
        app.shell.addWidget(this.arduinoToolbarContainer, {
            area: 'top'
        });
    };
    ArduinoToolbarContribution = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(tab_bar_toolbar_1.TabBarToolbarRegistry)),
        __param(1, inversify_1.inject(core_1.CommandRegistry)),
        __param(2, inversify_1.inject(label_parser_1.LabelParser)),
        __metadata("design:paramtypes", [tab_bar_toolbar_1.TabBarToolbarRegistry,
            core_1.CommandRegistry,
            label_parser_1.LabelParser])
    ], ArduinoToolbarContribution);
    return ArduinoToolbarContribution;
}());
exports.ArduinoToolbarContribution = ArduinoToolbarContribution;


/***/ }),

/***/ "./node_modules/arduino-ide-extension/lib/browser/toolbar/arduino-toolbar.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/arduino-ide-extension/lib/browser/toolbar/arduino-toolbar.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var tab_bar_toolbar_1 = __webpack_require__(/*! @theia/core/lib/browser/shell/tab-bar-toolbar */ "./node_modules/@theia/core/lib/browser/shell/tab-bar-toolbar.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "./node_modules/@theia/core/lib/browser/index.js");
var label_parser_1 = __webpack_require__(/*! @theia/core/lib/browser/label-parser */ "./node_modules/@theia/core/lib/browser/label-parser.js");
exports.ARDUINO_TOOLBAR_ITEM_CLASS = 'arduino-tool-item';
var ArduinoToolbarComponent = /** @class */ (function (_super) {
    __extends(ArduinoToolbarComponent, _super);
    function ArduinoToolbarComponent(props) {
        var _this = _super.call(this, props) || this;
        _this.renderItem = function (item) {
            var e_1, _a;
            var innerText = '';
            var className = "arduino-tool-icon " + item.id + "-icon";
            if (item.text) {
                try {
                    for (var _b = __values(_this.props.labelParser.parse(item.text)), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var labelPart = _c.value;
                        if (typeof labelPart !== 'string' && label_parser_1.LabelIcon.is(labelPart)) {
                            className += " fa fa-" + labelPart.name;
                        }
                        else {
                            innerText = labelPart;
                        }
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            }
            var command = _this.props.commands.getCommand(item.command);
            var cls = exports.ARDUINO_TOOLBAR_ITEM_CLASS + " " + tab_bar_toolbar_1.TabBarToolbar.Styles.TAB_BAR_TOOLBAR_ITEM + " " + (command && _this.props.commandIsEnabled(command.id) ? ' enabled' : '');
            return React.createElement("div", { key: item.id, className: cls },
                React.createElement("div", { className: item.id },
                    React.createElement("div", { key: item.id + '-icon', id: item.id, className: className, onClick: _this.props.executeCommand, onMouseOver: function () { return _this.setState({ tooltip: item.tooltip || '' }); }, onMouseOut: function () { return _this.setState({ tooltip: '' }); }, title: item.tooltip }, innerText)));
        };
        _this.state = { tooltip: '' };
        return _this;
    }
    ArduinoToolbarComponent.prototype.render = function () {
        var _this = this;
        var tooltip = React.createElement("div", { key: 'arduino-toolbar-tooltip', className: 'arduino-toolbar-tooltip' }, this.state.tooltip);
        var items = [
            React.createElement(React.Fragment, { key: this.props.side + '-arduino-toolbar-tooltip' }, __spread(this.props.items).map(function (item) { return tab_bar_toolbar_1.TabBarToolbarItem.is(item) ? _this.renderItem(item) : item.render(); }))
        ];
        if (this.props.side === 'left') {
            items.unshift(tooltip);
        }
        else {
            items.push(tooltip);
        }
        return items;
    };
    return ArduinoToolbarComponent;
}(React.Component));
exports.ArduinoToolbarComponent = ArduinoToolbarComponent;
var ArduinoToolbar = /** @class */ (function (_super) {
    __extends(ArduinoToolbar, _super);
    function ArduinoToolbar(tabBarToolbarRegistry, commands, labelParser, side) {
        var _this = _super.call(this) || this;
        _this.tabBarToolbarRegistry = tabBarToolbarRegistry;
        _this.commands = commands;
        _this.labelParser = labelParser;
        _this.side = side;
        _this.items = new Map();
        _this.doCommandIsEnabled = function (id) { return _this.commandIsEnabled(id); };
        _this.executeCommand = function (e) {
            var item = _this.items.get(e.currentTarget.id);
            if (tab_bar_toolbar_1.TabBarToolbarItem.is(item)) {
                _this.commands.executeCommand(item.command, _this, e.target);
            }
        };
        _this.id = side + '-arduino-toolbar';
        _this.addClass(tab_bar_toolbar_1.TabBarToolbar.Styles.TAB_BAR_TOOLBAR);
        _this.init();
        _this.tabBarToolbarRegistry.onDidChange(function () { return _this.updateToolbar(); });
        return _this;
    }
    ArduinoToolbar.prototype.updateItems = function (items) {
        var e_2, _a;
        this.items.clear();
        var revItems = items.reverse();
        try {
            for (var revItems_1 = __values(revItems), revItems_1_1 = revItems_1.next(); !revItems_1_1.done; revItems_1_1 = revItems_1.next()) {
                var item = revItems_1_1.value;
                this.items.set(item.id, item);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (revItems_1_1 && !revItems_1_1.done && (_a = revItems_1.return)) _a.call(revItems_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
        this.update();
    };
    ArduinoToolbar.prototype.updateToolbar = function () {
        var items = this ? this.tabBarToolbarRegistry.visibleItems(this) : [];
        this.updateItems(items);
    };
    ArduinoToolbar.prototype.init = function () {
        this.node.classList.add('theia-arduino-toolbar', this.side);
        this.update();
    };
    ArduinoToolbar.prototype.commandIsEnabled = function (command) {
        return this.commands.isEnabled(command, this);
    };
    ArduinoToolbar.prototype.render = function () {
        return React.createElement(ArduinoToolbarComponent, { key: 'arduino-toolbar-component', side: this.side, labelParser: this.labelParser, items: __spread(this.items.values()), commands: this.commands, commandIsEnabled: this.doCommandIsEnabled, executeCommand: this.executeCommand });
    };
    return ArduinoToolbar;
}(browser_1.ReactWidget));
exports.ArduinoToolbar = ArduinoToolbar;
(function (ArduinoToolbar) {
    function is(maybeToolbarWidget) {
        return maybeToolbarWidget instanceof ArduinoToolbar;
    }
    ArduinoToolbar.is = is;
})(ArduinoToolbar = exports.ArduinoToolbar || (exports.ArduinoToolbar = {}));
exports.ArduinoToolbar = ArduinoToolbar;


/***/ }),

/***/ "./node_modules/arduino-ide-extension/lib/browser/workspace-service-ext-impl.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/arduino-ide-extension/lib/browser/workspace-service-ext-impl.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var workspace_service_1 = __webpack_require__(/*! @theia/workspace/lib/browser/workspace-service */ "./node_modules/@theia/workspace/lib/browser/workspace-service.js");
/**
 * This is a workaround to be able to inject the workspace service to the backend with its service path.
 */
var WorkspaceServiceExtImpl = /** @class */ (function () {
    function WorkspaceServiceExtImpl() {
    }
    WorkspaceServiceExtImpl.prototype.roots = function () {
        return __awaiter(this, void 0, void 0, function () {
            var stats;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.delegate.roots];
                    case 1:
                        stats = _a.sent();
                        return [2 /*return*/, stats.map(function (stat) { return stat.uri; })];
                }
            });
        });
    };
    __decorate([
        inversify_1.inject(workspace_service_1.WorkspaceService),
        __metadata("design:type", workspace_service_1.WorkspaceService)
    ], WorkspaceServiceExtImpl.prototype, "delegate", void 0);
    WorkspaceServiceExtImpl = __decorate([
        inversify_1.injectable()
    ], WorkspaceServiceExtImpl);
    return WorkspaceServiceExtImpl;
}());
exports.WorkspaceServiceExtImpl = WorkspaceServiceExtImpl;


/***/ }),

/***/ "./node_modules/arduino-ide-extension/lib/browser/workspace-service-ext.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/arduino-ide-extension/lib/browser/workspace-service-ext.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkspaceServiceExtPath = '/services/workspace-service-ext';
exports.WorkspaceServiceExt = Symbol('WorkspaceServiceExt');


/***/ }),

/***/ "./node_modules/arduino-ide-extension/lib/common/protocol/boards-service.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/arduino-ide-extension/lib/common/protocol/boards-service.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var os_1 = __webpack_require__(/*! @theia/core/lib/common/os */ "./node_modules/@theia/core/lib/common/os.js");
var naturalCompare = __webpack_require__(/*! string-natural-compare */ "./node_modules/string-natural-compare/natural-compare.js").caseInsensitive;
var AttachedBoardsChangeEvent;
(function (AttachedBoardsChangeEvent) {
    function diff(event) {
        var diff = function (left, right) {
            return left.filter(function (item) { return right.indexOf(item) === -1; });
        };
        var newBoards = event.newState.boards;
        var oldBoards = event.oldState.boards;
        var newPorts = event.newState.ports;
        var oldPorts = event.oldState.ports;
        return {
            detached: {
                boards: diff(oldBoards, newBoards),
                ports: diff(oldPorts, newPorts)
            },
            attached: {
                boards: diff(newBoards, oldBoards),
                ports: diff(newPorts, oldPorts)
            }
        };
    }
    AttachedBoardsChangeEvent.diff = diff;
})(AttachedBoardsChangeEvent = exports.AttachedBoardsChangeEvent || (exports.AttachedBoardsChangeEvent = {}));
exports.BoardsServiceClient = Symbol('BoardsServiceClient');
exports.BoardsServicePath = '/services/boards-service';
exports.BoardsService = Symbol('BoardsService');
var Port;
(function (Port) {
    var Protocol;
    (function (Protocol) {
        function toProtocol(protocol) {
            if (protocol === 'serial') {
                return 'serial';
            }
            else if (protocol === 'network') {
                return 'network';
            }
            else {
                return 'unknown';
            }
        }
        Protocol.toProtocol = toProtocol;
    })(Protocol = Port.Protocol || (Port.Protocol = {}));
    function toString(port, options) {
        if (options === void 0) { options = { useLabel: false }; }
        if (options.useLabel && port.label) {
            return port.address + " " + port.label;
        }
        return port.address;
    }
    Port.toString = toString;
    function compare(left, right) {
        // Board ports have higher priorities, they come first.
        if (isBoardPort(left) && !isBoardPort(right)) {
            return -1;
        }
        if (!isBoardPort(left) && isBoardPort(right)) {
            return 1;
        }
        var result = left.protocol.toLocaleLowerCase().localeCompare(right.protocol.toLocaleLowerCase());
        if (result !== 0) {
            return result;
        }
        result = naturalCompare(left.address, right.address);
        if (result !== 0) {
            return result;
        }
        return (left.label || '').localeCompare(right.label || '');
    }
    Port.compare = compare;
    function equals(left, right) {
        if (left && right) {
            return left.address === right.address
                && left.protocol === right.protocol
                && (left.label || '') === (right.label || '');
        }
        return left === right;
    }
    Port.equals = equals;
    // Based on: https://github.com/arduino/Arduino/blob/93581b03d723e55c60caedb4729ffc6ea808fe78/arduino-core/src/processing/app/SerialPortList.java#L48-L74   
    function isBoardPort(port) {
        var address = port.address.toLocaleLowerCase();
        if (os_1.isWindows) {
            // `COM1` seems to be the default serial port on Windows.
            return address !== 'COM1'.toLocaleLowerCase();
        }
        // On macOS and Linux, the port should start with `/dev/`.
        if (!address.startsWith('/dev/')) {
            return false;
        }
        if (os_1.isOSX) {
            // Example: `/dev/cu.usbmodem14401`
            if (/(tty|cu)\..*/.test(address.substring('/dev/'.length))) {
                return [
                    '/dev/cu.MALS',
                    '/dev/cu.SOC',
                    '/dev/cu.Bluetooth-Incoming-Port'
                ].map(function (a) { return a.toLocaleLowerCase(); }).every(function (a) { return a !== address; });
            }
        }
        // Example: `/dev/ttyACM0`
        if (/(ttyS|ttyUSB|ttyACM|ttyAMA|rfcomm|ttyO)[0-9]{1,3}/.test(address.substring('/dev/'.length))) {
            // Default ports were `/dev/ttyS0` -> `/dev/ttyS31` on Ubuntu 16.04.2.
            if (address.startsWith('/dev/ttyS')) {
                var index = Number.parseInt(address.substring('/dev/ttyS'.length), 10);
                if (!Number.isNaN(index) && 0 <= index && 31 >= index) {
                    return false;
                }
            }
            return true;
        }
        return false;
    }
    Port.isBoardPort = isBoardPort;
    function sameAs(left, right) {
        if (left && right) {
            if (left.protocol !== 'serial') {
                console.log("Unexpected protocol for port: " + JSON.stringify(left) + ". Ignoring protocol, comparing addresses with " + right + ".");
            }
            return left.address === right;
        }
        return false;
    }
    Port.sameAs = sameAs;
})(Port = exports.Port || (exports.Port = {}));
var Board;
(function (Board) {
    function is(board) {
        return !!board && 'name' in board;
    }
    Board.is = is;
    function equals(left, right) {
        return left.name === right.name && left.fqbn === right.fqbn;
    }
    Board.equals = equals;
    function sameAs(left, right) {
        // How to associate a selected board with one of the available cores: https://typefox.slack.com/archives/CJJHJCJSJ/p1571142327059200
        // 1. How to use the FQBN if any and infer the package ID from it: https://typefox.slack.com/archives/CJJHJCJSJ/p1571147549069100
        // 2. How to trim the `/Genuino` from the name: https://arduino.slack.com/archives/CJJHJCJSJ/p1571146951066800?thread_ts=1571142327.059200&cid=CJJHJCJSJ
        var other = typeof right === 'string' ? { name: right } : right;
        if (left.fqbn && other.fqbn) {
            return left.fqbn === other.fqbn;
        }
        return left.name.replace('/Genuino', '') === other.name.replace('/Genuino', '');
    }
    Board.sameAs = sameAs;
    function compare(left, right) {
        var result = left.name.localeCompare(right.name);
        if (result === 0) {
            result = (left.fqbn || '').localeCompare(right.fqbn || '');
        }
        return result;
    }
    Board.compare = compare;
    function installed(board) {
        return !!board.fqbn;
    }
    Board.installed = installed;
    function toString(board, options) {
        if (options === void 0) { options = { useFqbn: true }; }
        var fqbn = options && options.useFqbn && board.fqbn ? " [" + board.fqbn + "]" : '';
        return "" + board.name + fqbn;
    }
    Board.toString = toString;
})(Board = exports.Board || (exports.Board = {}));
var AttachedSerialBoard;
(function (AttachedSerialBoard) {
    function is(b) {
        return !!b && 'port' in b;
    }
    AttachedSerialBoard.is = is;
})(AttachedSerialBoard = exports.AttachedSerialBoard || (exports.AttachedSerialBoard = {}));
var AttachedNetworkBoard;
(function (AttachedNetworkBoard) {
    function is(b) {
        return 'address' in b && 'port' in b;
    }
    AttachedNetworkBoard.is = is;
})(AttachedNetworkBoard = exports.AttachedNetworkBoard || (exports.AttachedNetworkBoard = {}));


/***/ }),

/***/ "./node_modules/arduino-ide-extension/lib/common/protocol/config-service.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/arduino-ide-extension/lib/common/protocol/config-service.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigServicePath = '/services/config-service';
exports.ConfigService = Symbol('ConfigService');


/***/ }),

/***/ "./node_modules/arduino-ide-extension/lib/common/protocol/core-service.js":
/*!********************************************************************************!*\
  !*** ./node_modules/arduino-ide-extension/lib/common/protocol/core-service.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.CoreServicePath = '/services/core-service';
exports.CoreService = Symbol('CoreService');


/***/ }),

/***/ "./node_modules/arduino-ide-extension/lib/common/protocol/library-service.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/arduino-ide-extension/lib/common/protocol/library-service.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.LibraryServicePath = '/services/library-service';
exports.LibraryService = Symbol('LibraryService');


/***/ }),

/***/ "./node_modules/arduino-ide-extension/lib/common/protocol/monitor-service.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/arduino-ide-extension/lib/common/protocol/monitor-service.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Status;
(function (Status) {
    function isOK(status) {
        return typeof status.message !== 'string';
    }
    Status.isOK = isOK;
    Status.OK = {};
    Status.NOT_CONNECTED = { message: 'Not connected.' };
    Status.ALREADY_CONNECTED = { message: 'Already connected.' };
})(Status = exports.Status || (exports.Status = {}));
exports.MonitorServicePath = '/services/serial-monitor';
exports.MonitorService = Symbol('MonitorService');
var MonitorConfig;
(function (MonitorConfig) {
    var BaudRate;
    (function (BaudRate) {
        BaudRate.DEFAULT = 9600;
    })(BaudRate = MonitorConfig.BaudRate || (MonitorConfig.BaudRate = {}));
    var ConnectionType;
    (function (ConnectionType) {
        ConnectionType[ConnectionType["SERIAL"] = 0] = "SERIAL";
    })(ConnectionType = MonitorConfig.ConnectionType || (MonitorConfig.ConnectionType = {}));
})(MonitorConfig = exports.MonitorConfig || (exports.MonitorConfig = {}));
exports.MonitorServiceClient = Symbol('MonitorServiceClient');
var MonitorError;
(function (MonitorError) {
    var ErrorCodes;
    (function (ErrorCodes) {
        /**
         * The frontend has refreshed the browser, for instance.
         */
        ErrorCodes.CLIENT_CANCEL = 1;
        /**
         * When detaching a physical device when the duplex channel is still opened.
         */
        ErrorCodes.DEVICE_NOT_CONFIGURED = 2;
        /**
         * Another serial monitor was opened on this port. For another electron-instance, Java IDE.
         */
        ErrorCodes.DEVICE_BUSY = 3;
    })(ErrorCodes = MonitorError.ErrorCodes || (MonitorError.ErrorCodes = {}));
})(MonitorError = exports.MonitorError || (exports.MonitorError = {}));


/***/ }),

/***/ "./node_modules/arduino-ide-extension/lib/common/protocol/sketches-service.js":
/*!************************************************************************************!*\
  !*** ./node_modules/arduino-ide-extension/lib/common/protocol/sketches-service.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.SketchesServicePath = '/services/sketches-service';
exports.SketchesService = Symbol('SketchesService');


/***/ }),

/***/ "./node_modules/arduino-ide-extension/lib/common/protocol/tool-output-service.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/arduino-ide-extension/lib/common/protocol/tool-output-service.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ToolOutputServiceServer = Symbol("ToolOutputServiceServer");
exports.ToolOutputServiceClient = Symbol("ToolOutputServiceClient");
var ToolOutputService;
(function (ToolOutputService) {
    ToolOutputService.SERVICE_PATH = "/tool-output-service";
})(ToolOutputService = exports.ToolOutputService || (exports.ToolOutputService = {}));


/***/ }),

/***/ "./node_modules/arduino-ide-extension/src/browser/data/arduino.color-theme.json":
/*!**************************************************************************************!*\
  !*** ./node_modules/arduino-ide-extension/src/browser/data/arduino.color-theme.json ***!
  \**************************************************************************************/
/*! exports provided: tokenColors, colors, name, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"tokenColors\":[{\"settings\":{\"foreground\":\"#434f54\"}},{\"name\":\"Comments\",\"scope\":\"comment\",\"settings\":{\"foreground\":\"#95a5a6cc\"}},{\"name\":\"Keywords Attributes\",\"scope\":[\"storage\",\"support\",\"string.quoted.single.c\"],\"settings\":{\"foreground\":\"#00979D\"}},{\"name\":\"literal\",\"scope\":[\"meta.function.c\",\"entity.name.function\",\"meta.function-call.c\"],\"settings\":{\"foreground\":\"#D35400\"}},{\"name\":\"punctuation\",\"scope\":[\"punctuation.section\",\"meta.function-call.c\",\"meta.block.c\",\"meta.function.c\",\"entity.name.function.preprocessor.c\",\"meta.preprocessor.macro.c\"],\"settings\":{\"foreground\":\"#434f54\"}},{\"name\":\"strings\",\"scope\":[\"string.quoted.double\"],\"settings\":{\"foreground\":\"#005C5F\"}},{\"name\":\"meta keywords\",\"scope\":[\"keyword.control\",\"meta.preprocessor.c\"],\"settings\":{\"foreground\":\"#728E00\"}},{\"name\":\"numeric preprocessor\",\"scope\":[\"meta.preprocessor.macro.c\",\"constant.numeric.preprocessor.c\",\"meta.preprocessor.c\"],\"settings\":{\"foreground\":\"#434f54\"}}],\"colors\":{\"editor.background\":\"#FFFFFF\",\"editorCursor.foreground\":\"#434f54\",\"editor.foreground\":\"#434f54\",\"editorWhitespace.foreground\":\"#BFBFBF\",\"editor.lineHighlightBackground\":\"#434f5410\",\"editor.selectionBackground\":\"#ffcb00\"},\"name\":\"Arduino\"}");

/***/ }),

/***/ "./node_modules/arduino-ide-extension/src/browser/icons/buttons.svg":
/*!**************************************************************************!*\
  !*** ./node_modules/arduino-ide-extension/src/browser/icons/buttons.svg ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "be47faa7d89df1a7be9c38e0f4f139cc.svg";

/***/ }),

/***/ "./node_modules/arduino-ide-extension/src/browser/icons/library-tab-icon.svg":
/*!***********************************************************************************!*\
  !*** ./node_modules/arduino-ide-extension/src/browser/icons/library-tab-icon.svg ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMCIgeT0iMCIgd2lkdGg9IjcwIiBoZWlnaHQ9IjcwIiB2aWV3Qm94PSIwLCAwLCA3MCwgNzAiPg0KICA8ZyBpZD0iTGF5ZXJfMSI+DQogICAgPHBhdGggZD0iTTYwLjIsMTguMiBMNTcuNCwxOC4yIEw1Ny40LDEyLjMyIEM1Ny4xMiw5LjUyIDU0Ljg4LDcuMjggNTEuOCw3IEw0NS45Miw3IEM0Mi44NCw3IDQwLjg4LDkuMjQgNDAuNiwxMi4zMiBMNDAuNiwxOC4yIEwyOS40LDE4LjIgTDI5LjQsMTIuMzIgQzI5LjEyLDkuMjQgMjYuODgsNyAyNC4wOCw3IEwxOC4yLDcgQzE1LjEyLDcgMTIuODgsOS4yNCAxMi42LDEyLjMyIEwxMi42LDE4LjIgTDkuOCwxOC4yIEM4LjEyLDE4LjIgNywxOS4zMiA3LDIxIEw3LDYwLjIgQzcsNjEuODggOC4xMiw2MyA5LjgsNjMgTDYwLjIsNjMgQzYxLjg4LDYzIDYzLDYxLjg4IDYzLDYwLjIgTDYzLDIxIEM2MywxOS4zMiA2MS44OCwxOC4yIDYwLjIsMTguMiB6IE00NS45MiwxMi42IEw1MS44LDEyLjYgTDUxLjgsMTguMiBMNDUuOTIsMTguMiBMNDUuOTIsMTIuNiB6IE0xOC4yLDEyLjYgTDI0LjA4LDEyLjYgTDI0LjA4LDE4LjIgTDE4LjIsMTguMiBMMTguMiwxMi42IHogTTE4LjIsMjMuOCBMNTcuNCwyMy44IEw1Ny40LDM5LjIgTDEyLjYsMzkuMiBMMTIuNiwyMy44IEwxOC4yLDIzLjggeiBNMzUsNTcuNCBMMTIuNiw1Ny40IEwxMi42LDQyIEw1Ny40LDQyIEw1Ny40LDU3LjQgTDM1LDU3LjQgeiIgZmlsbD0iIzAwMDAwMCIvPg0KICA8L2c+DQo8L3N2Zz4="

/***/ }),

/***/ "./node_modules/arduino-ide-extension/src/browser/icons/mask-buttons.svg":
/*!*******************************************************************************!*\
  !*** ./node_modules/arduino-ide-extension/src/browser/icons/mask-buttons.svg ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+DQo8IS0tR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOC4xLjEsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApLS0+DQo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6Y2M9Imh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL25zIyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIiB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJMYXllcl8xIiB3aWR0aD0iMTk4cHgiIGhlaWdodD0iOTlweCIgeD0iMHB4IiB5PSIwcHgiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDE5OCA5OSIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMTk4IDk5IiBpbmtzY2FwZTp2ZXJzaW9uPSIwLjkxIHIxMzcyNSIgc29kaXBvZGk6ZG9jbmFtZT0iYnV0dG9ucy5zdmciIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KICA8bWV0YWRhdGEgaWQ9Im1ldGFkYXRhMzI3Ij4NCiAgICA8cmRmOlJERj4NCiAgICAgIDxjYzpXb3JrIHJkZjphYm91dD0iIj4NCiAgICAgICAgPGRjOmZvcm1hdD4NCiAgICAgICAgICBpbWFnZS9zdmcreG1sDQogICAgICAgIDwvZGM6Zm9ybWF0Pg0KICAgICAgICA8ZGM6dHlwZSByZGY6cmVzb3VyY2U9Imh0dHA6Ly9wdXJsLm9yZy9kYy9kY21pdHlwZS9TdGlsbEltYWdlIi8+DQogICAgICAgIDxkYzp0aXRsZS8+DQogICAgICA8L2NjOldvcms+DQogICAgPC9yZGY6UkRGPg0KICA8L21ldGFkYXRhPg0KICA8ZGVmcyBpZD0iZGVmczMyNSIvPg0KICA8c29kaXBvZGk6bmFtZWR2aWV3IGlkPSJuYW1lZHZpZXczMjMiIGJvcmRlcmNvbG9yPSIjNjY2NjY2IiBib3JkZXJvcGFjaXR5PSIxIiBncmlkdG9sZXJhbmNlPSIxMCIgZ3VpZGV0b2xlcmFuY2U9IjEwIiBvYmplY3R0b2xlcmFuY2U9IjEwIiBwYWdlY29sb3I9IiNmZmZmZmYiIHNob3dncmlkPSJmYWxzZSIgc2hvd2d1aWRlcz0idHJ1ZSIgaW5rc2NhcGU6Y3VycmVudC1sYXllcj0iTGF5ZXJfMSIgaW5rc2NhcGU6Y3g9IjQ1LjI1MjM4NSIgaW5rc2NhcGU6Y3k9IjM2LjIyNDk4NyIgaW5rc2NhcGU6Z3VpZGUtYmJveD0idHJ1ZSIgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAiIGlua3NjYXBlOnBhZ2VzaGFkb3c9IjIiIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9IjEwMDAiIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjEiIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMTIxNSIgaW5rc2NhcGU6d2luZG93LXg9IjY1IiBpbmtzY2FwZTp3aW5kb3cteT0iMjQiIGlua3NjYXBlOnpvb209IjQiLz4NCiAgPGcgaWQ9Imc1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMC4xMjAwMDA4NCwwKSI+DQogICAgPHBvbHlsaW5lIGlkPSJwb2x5bGluZTkiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgcG9pbnRzPSIyMS40NTMsMTIuNzQ1IDE1Ljc4OCwyMC41NzEgICAgMTEuNzc1LDE2LjY1OCAgIiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoyLjMwNDg5OTkzO3N0cm9rZS1taXRlcmxpbWl0OjEwIi8+DQogIDwvZz4NCiAgPGcgaWQ9ImcyMyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTAuMjYxMDAxNTksMCkiPg0KICAgIDxwb2x5Z29uIGlkPSJwb2x5Z29uMjciIHBvaW50cz0iNDUuNDEyLDE1LjMxMyA0OS4zMDcsMTUuMzEzIDQ5LjMwNywxMS41MyA1NC43MDEsMTYuODc1IDQ5LjMzMSwyMi4yNDUgNDkuMzMxLDE4LjU2MyA0NS40MTIsMTguNTM5ICIgc3R5bGU9ImZpbGw6IzAwMDAwMCIvPg0KICA8L2c+DQogIDxnIGlkPSJnNDEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0wLjU0Mzk5ODcyLDApIj4NCiAgICA8cG9seWdvbiBpZD0icG9seWdvbjQ1IiBwb2ludHM9IjExNC40NCwxOS4wODMgMTE0LjQ0LDE1LjExNiAxMTAuNTg2LDE1LjExNiAxMTYuMDMyLDkuNjIxIDEyMS41MDIsMTUuMDkxIDExNy43NTEsMTUuMDkxIDExNy43MjYsMTkuMDgzICIgc3R5bGU9ImZpbGw6IzAwMDAwMCIvPg0KICAgIDxyZWN0IGlkPSJyZWN0NDciIHdpZHRoPSIxIiBoZWlnaHQ9IjEiIHg9IjExMC41MTEiIHk9IjIyLjE5MzAwMSIgc3R5bGU9ImZpbGw6IzAwMDAwMCIvPg0KICAgIDxyZWN0IGlkPSJyZWN0NDkiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiIHg9IjExMi41MTgiIHk9IjIyLjE5MzAwMSIgc3R5bGU9ImZpbGw6IzAwMDAwMCIvPg0KICAgIDxyZWN0IGlkPSJyZWN0NTEiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiIHg9IjExNC41MTciIHk9IjIyLjE5MzAwMSIgc3R5bGU9ImZpbGw6IzAwMDAwMCIvPg0KICAgIDxyZWN0IGlkPSJyZWN0NTMiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiIHg9IjExNi41MjUiIHk9IjIyLjE5MzAwMSIgc3R5bGU9ImZpbGw6IzAwMDAwMCIvPg0KICAgIDxyZWN0IGlkPSJyZWN0NTUiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiIHg9IjExOC41MjQiIHk9IjIyLjE5MzAwMSIgc3R5bGU9ImZpbGw6IzAwMDAwMCIvPg0KICAgIDxyZWN0IGlkPSJyZWN0NTciIHdpZHRoPSIxIiBoZWlnaHQ9IjEiIHg9IjEyMC41MzEiIHk9IjIyLjE5MzAwMSIgc3R5bGU9ImZpbGw6IzAwMDAwMCIvPg0KICA8L2c+DQogIDxnIGlkPSJnNTkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0wLjY4NjAwNDY0LDApIj4NCiAgICA8cG9seWdvbiBpZD0icG9seWdvbjYzIiBwb2ludHM9IjE1MC43OSw5LjYyMSAxNTAuNzksMTMuNTg4IDE1NC42NDQsMTMuNTg4IDE0OS4xOTgsMTkuMDgzIDE0My43MjgsMTMuNjEyIDE0Ny40NzksMTMuNjEzIDE0Ny41MDQsOS42MjEgIiBzdHlsZT0iZmlsbDojMDAwMDAwIi8+DQogICAgPHJlY3QgaWQ9InJlY3Q2NSIgd2lkdGg9IjEiIGhlaWdodD0iMSIgeD0iMTQzLjY1MTk5IiB5PSIyMi4xOTMwMDEiIHN0eWxlPSJmaWxsOiMwMDAwMDAiLz4NCiAgICA8cmVjdCBpZD0icmVjdDY3IiB3aWR0aD0iMSIgaGVpZ2h0PSIxIiB4PSIxNDUuNjYiIHk9IjIyLjE5MzAwMSIgc3R5bGU9ImZpbGw6IzAwMDAwMCIvPg0KICAgIDxyZWN0IGlkPSJyZWN0NjkiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiIHg9IjE0Ny42NTkiIHk9IjIyLjE5MzAwMSIgc3R5bGU9ImZpbGw6IzAwMDAwMCIvPg0KICAgIDxyZWN0IGlkPSJyZWN0NzEiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiIHg9IjE0OS42NjYiIHk9IjIyLjE5MzAwMSIgc3R5bGU9ImZpbGw6IzAwMDAwMCIvPg0KICAgIDxyZWN0IGlkPSJyZWN0NzMiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiIHg9IjE1MS42NjYiIHk9IjIyLjE5MzAwMSIgc3R5bGU9ImZpbGw6IzAwMDAwMCIvPg0KICAgIDxyZWN0IGlkPSJyZWN0NzUiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiIHg9IjE1My42NzMiIHk9IjIyLjE5MzAwMSIgc3R5bGU9ImZpbGw6IzAwMDAwMCIvPg0KICA8L2c+DQogIDxnIGlkPSJnMTQ5IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMC40MDI5OTk4OCwwKSI+DQogICAgPHBhdGggaWQ9InBhdGgxNTEiIGQ9Ik0gODcuNDQ1LDIyLjA5NyIgc3R5bGU9ImZpbGw6IzAwMDAwMCIgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIvPg0KICAgIDxwb2x5Z29uIGlkPSJwb2x5Z29uMTU1IiBwb2ludHM9IjgzLjQ0LDEwLjA5NCA4NC40NDEsMTAuMDk0IDg4LjQyMSwxNC4wNzkgODguNDIxLDE1LjA1NyA4Ny40NDUsMTUuMDU3IDgzLjQ0LDE1LjA1NyAiIHN0eWxlPSJmaWxsOiMwMDAwMDAiLz4NCiAgICA8cG9seWdvbiBpZD0icG9seWdvbjE1NyIgcG9pbnRzPSI3OC40MDQsMTEuMDkzIDc4LjQwNCwyMi4wOTcgODcuNDQ1LDIyLjA5NyA4Ny40NDUsMTQuODcgODguNDIxLDE0Ljg3IDg4LjQyMSwyMy4xMzQgNzcuMzk5LDIzLjEzNCA3Ny4zOTksMTAuMDk0IDgzLjU2MiwxMC4wOTQgODMuNTY4LDExLjA5MyAiIHN0eWxlPSJmaWxsOiMwMDAwMDAiLz4NCiAgICA8cmVjdCBpZD0icmVjdDE1OSIgd2lkdGg9IjAuOTk1IiBoZWlnaHQ9IjAuOTk1OTk5OTkiIHg9Ijc5LjM5OTAwMiIgeT0iMTIuMTExIiBzdHlsZT0iZmlsbDojMDAwMDAwIi8+DQogICAgPHJlY3QgaWQ9InJlY3QxNjEiIHdpZHRoPSIwLjk5NSIgaGVpZ2h0PSIwLjk5NTk5OTk5IiB4PSI4MS4zOTQ5OTciIHk9IjEyLjExMSIgc3R5bGU9ImZpbGw6IzAwMDAwMCIvPg0KICAgIDxyZWN0IGlkPSJyZWN0MTYzIiB3aWR0aD0iMC45OTUiIGhlaWdodD0iMC45OTU5OTk5OSIgeD0iNzkuMzk5MDAyIiB5PSIxNC4xMDMiIHN0eWxlPSJmaWxsOiMwMDAwMDAiLz4NCiAgICA8cmVjdCBpZD0icmVjdDE2NSIgd2lkdGg9IjAuOTk1IiBoZWlnaHQ9IjAuOTk1OTk5OTkiIHg9IjgxLjM5NDk5NyIgeT0iMTQuMTAzIiBzdHlsZT0iZmlsbDojMDAwMDAwIi8+DQogICAgPHJlY3QgaWQ9InJlY3QxNjciIHdpZHRoPSIwLjk5NSIgaGVpZ2h0PSIwLjk5NTk5OTk5IiB4PSI3OS4zOTkwMDIiIHk9IjE2LjExNTk5OSIgc3R5bGU9ImZpbGw6IzAwMDAwMCIvPg0KICAgIDxyZWN0IGlkPSJyZWN0MTY5IiB3aWR0aD0iMC45OTUiIGhlaWdodD0iMC45OTU5OTk5OSIgeD0iODEuMzk0OTk3IiB5PSIxNi4xMTU5OTkiIHN0eWxlPSJmaWxsOiMwMDAwMDAiLz4NCiAgICA8cmVjdCBpZD0icmVjdDE3MSIgd2lkdGg9IjAuOTk1IiBoZWlnaHQ9IjAuOTk1OTk5OTkiIHg9IjgzLjQwMyIgeT0iMTYuMTE1OTk5IiBzdHlsZT0iZmlsbDojMDAwMDAwIi8+DQogICAgPHJlY3QgaWQ9InJlY3QxNzMiIHdpZHRoPSIwLjk5NSIgaGVpZ2h0PSIwLjk5NTk5OTk5IiB4PSI4NS40MDAwMDIiIHk9IjE2LjExNTk5OSIgc3R5bGU9ImZpbGw6IzAwMDAwMCIvPg0KICAgIDxyZWN0IGlkPSJyZWN0MTc1IiB3aWR0aD0iMC45OTUiIGhlaWdodD0iMC45OTU5OTk5OSIgeD0iNzkuMzk5MDAyIiB5PSIxOC4xMTgiIHN0eWxlPSJmaWxsOiMwMDAwMDAiLz4NCiAgICA8cmVjdCBpZD0icmVjdDE3NyIgd2lkdGg9IjAuOTk1IiBoZWlnaHQ9IjAuOTk1OTk5OTkiIHg9IjgxLjM5NDk5NyIgeT0iMTguMTE4IiBzdHlsZT0iZmlsbDojMDAwMDAwIi8+DQogICAgPHJlY3QgaWQ9InJlY3QxNzkiIHdpZHRoPSIwLjk5NSIgaGVpZ2h0PSIwLjk5NTk5OTk5IiB4PSI3OS4zOTkwMDIiIHk9IjIwLjEzMiIgc3R5bGU9ImZpbGw6IzAwMDAwMCIvPg0KICAgIDxyZWN0IGlkPSJyZWN0MTgxIiB3aWR0aD0iMC45OTUiIGhlaWdodD0iMC45OTU5OTk5OSIgeD0iODEuMzk0OTk3IiB5PSIyMC4xMzIiIHN0eWxlPSJmaWxsOiMwMDAwMDAiLz4NCiAgICA8cmVjdCBpZD0icmVjdDE4MyIgd2lkdGg9IjAuOTk1IiBoZWlnaHQ9IjAuOTk1OTk5OTkiIHg9IjgzLjQwMyIgeT0iMTguMTE4IiBzdHlsZT0iZmlsbDojMDAwMDAwIi8+DQogICAgPHJlY3QgaWQ9InJlY3QxODUiIHdpZHRoPSIwLjk5NSIgaGVpZ2h0PSIwLjk5NTk5OTk5IiB4PSI4NS40MDAwMDIiIHk9IjE4LjExOCIgc3R5bGU9ImZpbGw6IzAwMDAwMCIvPg0KICAgIDxyZWN0IGlkPSJyZWN0MTg3IiB3aWR0aD0iMC45OTUiIGhlaWdodD0iMC45OTU5OTk5OSIgeD0iODMuNDAzIiB5PSIyMC4xMzIiIHN0eWxlPSJmaWxsOiMwMDAwMDAiLz4NCiAgICA8cmVjdCBpZD0icmVjdDE4OSIgd2lkdGg9IjAuOTk1IiBoZWlnaHQ9IjAuOTk1OTk5OTkiIHg9Ijg1LjQwMDAwMiIgeT0iMjAuMTMyIiBzdHlsZT0iZmlsbDojMDAwMDAwIi8+DQogIDwvZz4NCiAgPGcgaWQ9ImcyNzUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0wLjgyODAwMjkzLDApIj4NCiAgICA8cmVjdCBpZD0icmVjdDI3OSIgd2lkdGg9IjAuOTk5MDAwMDEiIGhlaWdodD0iMC45OTgwMDAwMyIgeD0iMTg3LjgxOSIgeT0iMTYuMTAxIiBzdHlsZT0iZmlsbDojMDAwMDAwIi8+DQogICAgPHJlY3QgaWQ9InJlY3QyODEiIHdpZHRoPSIwLjk5OTAwMDAxIiBoZWlnaHQ9IjAuOTk4MDAwMDMiIHg9IjE4OS44MjUiIHk9IjE2LjEwMSIgc3R5bGU9ImZpbGw6IzAwMDAwMCIvPg0KICAgIDxyZWN0IGlkPSJyZWN0MjgzIiB3aWR0aD0iMC45OTkwMDAwMSIgaGVpZ2h0PSIwLjk5ODAwMDAzIiB4PSIxNzQuODMyOTkiIHk9IjE2LjEwMSIgc3R5bGU9ImZpbGw6IzAwMDAwMCIvPg0KICAgIDxjaXJjbGUgaWQ9ImNpcmNsZTI4NSIgY3g9IjE4MS44MDI5OSIgY3k9IjE2LjEwMSIgcj0iNC4wOTAwMDAyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjEuOTU0Mzk5OTQ7c3Ryb2tlLW1pdGVybGltaXQ6MTAiLz4NCiAgICA8cmVjdCBpZD0icmVjdDI4NyIgd2lkdGg9IjIuNjgwMDAwMSIgaGVpZ2h0PSI0LjQyMjk5OTkiIHg9IjE3NS44OTUiIHk9IjE4LjQyNzk5OSIgc3R5bGU9ImZpbGw6IzAwMDAwMCIgdHJhbnNmb3JtPSJtYXRyaXgoMC42OTE1LDAuNzIyNCwtMC43MjI0LDAuNjkxNSw2OS41ODI3LC0xMjEuNjU5OSkiLz4NCiAgICA8cmVjdCBpZD0icmVjdDI4OSIgd2lkdGg9IjIuMDI4MDAwMSIgaGVpZ2h0PSIxLjk5NjAwMDEiIHg9IjE4MC43ODkiIHk9IjE1LjEwMyIgc3R5bGU9ImZpbGw6IzAwMDAwMCIvPg0KICA8L2c+DQo8L3N2Zz4NCg=="

/***/ }),

/***/ "./node_modules/arduino-ide-extension/src/browser/style/arduino.useable.css":
/*!**********************************************************************************!*\
  !*** ./node_modules/arduino-ide-extension/src/browser/style/arduino.useable.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var refs = 0;
var dispose;
var content = __webpack_require__(/*! !../../../../css-loader!./arduino.useable.css */ "./node_modules/css-loader/index.js!./node_modules/arduino-ide-extension/src/browser/style/arduino.useable.css");
var options = {"singleton":true,"attrs":{"id":"theia-theme"},"hmr":true};
options.insertInto = undefined;

if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) exports.locals = content.locals;

exports.use = exports.ref = function() {
	if(!(refs++)) {
		dispose = __webpack_require__(/*! ../../../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);
	}

	return exports;
};

exports.unuse = exports.unref = function() {
  if(refs > 0 && !(--refs)) {
	   dispose();
		 dispose = null;
  }
};
if(false) { var lastRefs; }

/***/ }),

/***/ "./node_modules/arduino-ide-extension/src/browser/style/index.css":
/*!************************************************************************!*\
  !*** ./node_modules/arduino-ide-extension/src/browser/style/index.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../css-loader!./index.css */ "./node_modules/css-loader/index.js!./node_modules/arduino-ide-extension/src/browser/style/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/css-element-queries/src/ElementQueries.js":
/*!****************************************************************!*\
  !*** ./node_modules/css-element-queries/src/ElementQueries.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

/**
 * Copyright Marc J. Schmidt. See the LICENSE file at the top-level
 * directory of this distribution and at
 * https://github.com/marcj/css-element-queries/blob/master/LICENSE.
 */
(function (root, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./ResizeSensor.js */ "./node_modules/css-element-queries/src/ResizeSensor.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {}
}(typeof window !== 'undefined' ? window : this, function (ResizeSensor) {

    /**
     *
     * @type {Function}
     * @constructor
     */
    var ElementQueries = function () {
        //<style> element with our dynamically created styles
        var cssStyleElement;

        //all rules found for element queries
        var allQueries = {};

        //association map to identify which selector belongs to a element from the animationstart event.
        var idToSelectorMapping = [];

        /**
         *
         * @param element
         * @returns {Number}
         */
        function getEmSize(element) {
            if (!element) {
                element = document.documentElement;
            }
            var fontSize = window.getComputedStyle(element, null).fontSize;
            return parseFloat(fontSize) || 16;
        }

        /**
         * Get element size
         * @param {HTMLElement} element
         * @returns {Object} {width, height}
         */
        function getElementSize(element) {
            if (!element.getBoundingClientRect) {
                return {
                    width: element.offsetWidth,
                    height: element.offsetHeight
                }
            }

            var rect = element.getBoundingClientRect();
            return {
                width: Math.round(rect.width),
                height: Math.round(rect.height)
            }
        }

        /**
         *
         * @copyright https://github.com/Mr0grog/element-query/blob/master/LICENSE
         *
         * @param {HTMLElement} element
         * @param {*} value
         * @returns {*}
         */
        function convertToPx(element, value) {
            var numbers = value.split(/\d/);
            var units = numbers[numbers.length - 1];
            value = parseFloat(value);
            switch (units) {
                case "px":
                    return value;
                case "em":
                    return value * getEmSize(element);
                case "rem":
                    return value * getEmSize();
                // Viewport units!
                // According to http://quirksmode.org/mobile/tableViewport.html
                // documentElement.clientWidth/Height gets us the most reliable info
                case "vw":
                    return value * document.documentElement.clientWidth / 100;
                case "vh":
                    return value * document.documentElement.clientHeight / 100;
                case "vmin":
                case "vmax":
                    var vw = document.documentElement.clientWidth / 100;
                    var vh = document.documentElement.clientHeight / 100;
                    var chooser = Math[units === "vmin" ? "min" : "max"];
                    return value * chooser(vw, vh);
                default:
                    return value;
                // for now, not supporting physical units (since they are just a set number of px)
                // or ex/ch (getting accurate measurements is hard)
            }
        }

        /**
         *
         * @param {HTMLElement} element
         * @param {String} id
         * @constructor
         */
        function SetupInformation(element, id) {
            this.element = element;
            var key, option, elementSize, value, actualValue, attrValues, attrValue, attrName;

            var attributes = ['min-width', 'min-height', 'max-width', 'max-height'];

            /**
             * Extracts the computed width/height and sets to min/max- attribute.
             */
            this.call = function () {
                // extract current dimensions
                elementSize = getElementSize(this.element);

                attrValues = {};

                for (key in allQueries[id]) {
                    if (!allQueries[id].hasOwnProperty(key)) {
                        continue;
                    }
                    option = allQueries[id][key];

                    value = convertToPx(this.element, option.value);

                    actualValue = option.property === 'width' ? elementSize.width : elementSize.height;
                    attrName = option.mode + '-' + option.property;
                    attrValue = '';

                    if (option.mode === 'min' && actualValue >= value) {
                        attrValue += option.value;
                    }

                    if (option.mode === 'max' && actualValue <= value) {
                        attrValue += option.value;
                    }

                    if (!attrValues[attrName]) attrValues[attrName] = '';
                    if (attrValue && -1 === (' ' + attrValues[attrName] + ' ').indexOf(' ' + attrValue + ' ')) {
                        attrValues[attrName] += ' ' + attrValue;
                    }
                }

                for (var k in attributes) {
                    if (!attributes.hasOwnProperty(k)) continue;

                    if (attrValues[attributes[k]]) {
                        this.element.setAttribute(attributes[k], attrValues[attributes[k]].substr(1));
                    } else {
                        this.element.removeAttribute(attributes[k]);
                    }
                }
            };
        }

        /**
         * @param {HTMLElement} element
         * @param {Object}      id
         */
        function setupElement(element, id) {
            if (!element.elementQueriesSetupInformation) {
                element.elementQueriesSetupInformation = new SetupInformation(element, id);
            }

            if (!element.elementQueriesSensor) {
                element.elementQueriesSensor = new ResizeSensor(element, function () {
                    element.elementQueriesSetupInformation.call();
                });
            }
        }

        /**
         * Stores rules to the selector that should be applied once resized.
         *
         * @param {String} selector
         * @param {String} mode min|max
         * @param {String} property width|height
         * @param {String} value
         */
        function queueQuery(selector, mode, property, value) {
            if (typeof(allQueries[selector]) === 'undefined') {
                allQueries[selector] = [];
                // add animation to trigger animationstart event, so we know exactly when a element appears in the DOM

                var id = idToSelectorMapping.length;
                cssStyleElement.innerHTML += '\n' + selector + ' {animation: 0.1s element-queries;}';
                cssStyleElement.innerHTML += '\n' + selector + ' > .resize-sensor {min-width: '+id+'px;}';
                idToSelectorMapping.push(selector);
            }

            allQueries[selector].push({
                mode: mode,
                property: property,
                value: value
            });
        }

        function getQuery(container) {
            var query;
            if (document.querySelectorAll) query = (container) ? container.querySelectorAll.bind(container) : document.querySelectorAll.bind(document);
            if (!query && 'undefined' !== typeof $$) query = $$;
            if (!query && 'undefined' !== typeof jQuery) query = jQuery;

            if (!query) {
                throw 'No document.querySelectorAll, jQuery or Mootools\'s $$ found.';
            }

            return query;
        }

        /**
         * If animationStart didn't catch a new element in the DOM, we can manually search for it
         */
        function findElementQueriesElements(container) {
            var query = getQuery(container);

            for (var selector in allQueries) if (allQueries.hasOwnProperty(selector)) {
                // find all elements based on the extract query selector from the element query rule
                var elements = query(selector, container);

                for (var i = 0, j = elements.length; i < j; i++) {
                    setupElement(elements[i], selector);
                }
            }
        }

        /**
         *
         * @param {HTMLElement} element
         */
        function attachResponsiveImage(element) {
            var children = [];
            var rules = [];
            var sources = [];
            var defaultImageId = 0;
            var lastActiveImage = -1;
            var loadedImages = [];

            for (var i in element.children) {
                if (!element.children.hasOwnProperty(i)) continue;

                if (element.children[i].tagName && element.children[i].tagName.toLowerCase() === 'img') {
                    children.push(element.children[i]);

                    var minWidth = element.children[i].getAttribute('min-width') || element.children[i].getAttribute('data-min-width');
                    //var minHeight = element.children[i].getAttribute('min-height') || element.children[i].getAttribute('data-min-height');
                    var src = element.children[i].getAttribute('data-src') || element.children[i].getAttribute('url');

                    sources.push(src);

                    var rule = {
                        minWidth: minWidth
                    };

                    rules.push(rule);

                    if (!minWidth) {
                        defaultImageId = children.length - 1;
                        element.children[i].style.display = 'block';
                    } else {
                        element.children[i].style.display = 'none';
                    }
                }
            }

            lastActiveImage = defaultImageId;

            function check() {
                var imageToDisplay = false, i;

                for (i in children) {
                    if (!children.hasOwnProperty(i)) continue;

                    if (rules[i].minWidth) {
                        if (element.offsetWidth > rules[i].minWidth) {
                            imageToDisplay = i;
                        }
                    }
                }

                if (!imageToDisplay) {
                    //no rule matched, show default
                    imageToDisplay = defaultImageId;
                }

                if (lastActiveImage !== imageToDisplay) {
                    //image change

                    if (!loadedImages[imageToDisplay]) {
                        //image has not been loaded yet, we need to load the image first in memory to prevent flash of
                        //no content

                        var image = new Image();
                        image.onload = function () {
                            children[imageToDisplay].src = sources[imageToDisplay];

                            children[lastActiveImage].style.display = 'none';
                            children[imageToDisplay].style.display = 'block';

                            loadedImages[imageToDisplay] = true;

                            lastActiveImage = imageToDisplay;
                        };

                        image.src = sources[imageToDisplay];
                    } else {
                        children[lastActiveImage].style.display = 'none';
                        children[imageToDisplay].style.display = 'block';
                        lastActiveImage = imageToDisplay;
                    }
                } else {
                    //make sure for initial check call the .src is set correctly
                    children[imageToDisplay].src = sources[imageToDisplay];
                }
            }

            element.resizeSensorInstance = new ResizeSensor(element, check);
            check();
        }

        function findResponsiveImages() {
            var query = getQuery();

            var elements = query('[data-responsive-image],[responsive-image]');
            for (var i = 0, j = elements.length; i < j; i++) {
                attachResponsiveImage(elements[i]);
            }
        }

        var regex = /,?[\s\t]*([^,\n]*?)((?:\[[\s\t]*?(?:min|max)-(?:width|height)[\s\t]*?[~$\^]?=[\s\t]*?"[^"]*?"[\s\t]*?])+)([^,\n\s\{]*)/mgi;
        var attrRegex = /\[[\s\t]*?(min|max)-(width|height)[\s\t]*?[~$\^]?=[\s\t]*?"([^"]*?)"[\s\t]*?]/mgi;

        /**
         * @param {String} css
         */
        function extractQuery(css) {
            var match, smatch, attrs, attrMatch;

            css = css.replace(/'/g, '"');
            while (null !== (match = regex.exec(css))) {
                smatch = match[1] + match[3];
                attrs = match[2];

                while (null !== (attrMatch = attrRegex.exec(attrs))) {
                    queueQuery(smatch, attrMatch[1], attrMatch[2], attrMatch[3]);
                }
            }
        }

        /**
         * @param {CssRule[]|String} rules
         */
        function readRules(rules) {
            var selector = '';

            if (!rules) {
                return;
            }

            if ('string' === typeof rules) {
                rules = rules.toLowerCase();
                if (-1 !== rules.indexOf('min-width') || -1 !== rules.indexOf('max-width')) {
                    extractQuery(rules);
                }
            } else {
                for (var i = 0, j = rules.length; i < j; i++) {
                    if (1 === rules[i].type) {
                        selector = rules[i].selectorText || rules[i].cssText;
                        if (-1 !== selector.indexOf('min-height') || -1 !== selector.indexOf('max-height')) {
                            extractQuery(selector);
                        } else if (-1 !== selector.indexOf('min-width') || -1 !== selector.indexOf('max-width')) {
                            extractQuery(selector);
                        }
                    } else if (4 === rules[i].type) {
                        readRules(rules[i].cssRules || rules[i].rules);
                    } else if (3 === rules[i].type) {
                        if(rules[i].styleSheet.hasOwnProperty("cssRules")) {
                            readRules(rules[i].styleSheet.cssRules);
                        }
                    }
                }
            }
        }

        var defaultCssInjected = false;

        /**
         * Searches all css rules and setups the event listener to all elements with element query rules..
         */
        this.init = function () {
            var animationStart = 'animationstart';
            if (typeof document.documentElement.style['webkitAnimationName'] !== 'undefined') {
                animationStart = 'webkitAnimationStart';
            } else if (typeof document.documentElement.style['MozAnimationName'] !== 'undefined') {
                animationStart = 'mozanimationstart';
            } else if (typeof document.documentElement.style['OAnimationName'] !== 'undefined') {
                animationStart = 'oanimationstart';
            }

            document.body.addEventListener(animationStart, function (e) {
                var element = e.target;
                var styles = element && window.getComputedStyle(element, null);
                var animationName = styles && styles.getPropertyValue('animation-name');
                var requiresSetup = animationName && (-1 !== animationName.indexOf('element-queries'));

                if (requiresSetup) {
                    element.elementQueriesSensor = new ResizeSensor(element, function () {
                        if (element.elementQueriesSetupInformation) {
                            element.elementQueriesSetupInformation.call();
                        }
                    });

                    var sensorStyles = window.getComputedStyle(element.resizeSensor, null);
                    var id = sensorStyles.getPropertyValue('min-width');
                    id = parseInt(id.replace('px', ''));
                    setupElement(e.target, idToSelectorMapping[id]);
                }
            });

            if (!defaultCssInjected) {
                cssStyleElement = document.createElement('style');
                cssStyleElement.type = 'text/css';
                cssStyleElement.innerHTML = '[responsive-image] > img, [data-responsive-image] {overflow: hidden; padding: 0; } [responsive-image] > img, [data-responsive-image] > img {width: 100%;}';

                //safari wants at least one rule in keyframes to start working
                cssStyleElement.innerHTML += '\n@keyframes element-queries { 0% { visibility: inherit; } }';
                document.getElementsByTagName('head')[0].appendChild(cssStyleElement);
                defaultCssInjected = true;
            }

            for (var i = 0, j = document.styleSheets.length; i < j; i++) {
                try {
                    if (document.styleSheets[i].href && 0 === document.styleSheets[i].href.indexOf('file://')) {
                        console.warn("CssElementQueries: unable to parse local css files, " + document.styleSheets[i].href);
                    }

                    readRules(document.styleSheets[i].cssRules || document.styleSheets[i].rules || document.styleSheets[i].cssText);
                } catch (e) {
                }
            }

            findResponsiveImages();
        };

        /**
         * Go through all collected rules (readRules()) and attach the resize-listener.
         * Not necessary to call it manually, since we detect automatically when new elements
         * are available in the DOM. However, sometimes handy for dirty DOM modifications.
         *
         * @param {HTMLElement} container only elements of the container are considered (document.body if not set)
         */
        this.findElementQueriesElements = function (container) {
            findElementQueriesElements(container);
        };

        this.update = function () {
            this.init();
        };
    };

    ElementQueries.update = function () {
        ElementQueries.instance.update();
    };

    /**
     * Removes all sensor and elementquery information from the element.
     *
     * @param {HTMLElement} element
     */
    ElementQueries.detach = function (element) {
        if (element.elementQueriesSetupInformation) {
            //element queries
            element.elementQueriesSensor.detach();
            delete element.elementQueriesSetupInformation;
            delete element.elementQueriesSensor;

        } else if (element.resizeSensorInstance) {
            //responsive image

            element.resizeSensorInstance.detach();
            delete element.resizeSensorInstance;
        }
    };

    ElementQueries.init = function () {
        if (!ElementQueries.instance) {
            ElementQueries.instance = new ElementQueries();
        }

        ElementQueries.instance.init();
    };

    var domLoaded = function (callback) {
        /* Mozilla, Chrome, Opera */
        if (document.addEventListener) {
            document.addEventListener('DOMContentLoaded', callback, false);
        }
        /* Safari, iCab, Konqueror */
        else if (/KHTML|WebKit|iCab/i.test(navigator.userAgent)) {
            var DOMLoadTimer = setInterval(function () {
                if (/loaded|complete/i.test(document.readyState)) {
                    callback();
                    clearInterval(DOMLoadTimer);
                }
            }, 10);
        }
        /* Other web browsers */
        else window.onload = callback;
    };

    ElementQueries.findElementQueriesElements = function (container) {
        ElementQueries.instance.findElementQueriesElements(container);
    };

    ElementQueries.listen = function () {
        domLoaded(ElementQueries.init);
    };

    return ElementQueries;

}));


/***/ }),

/***/ "./node_modules/css-element-queries/src/ResizeSensor.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-element-queries/src/ResizeSensor.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;

/**
 * Copyright Marc J. Schmidt. See the LICENSE file at the top-level
 * directory of this distribution and at
 * https://github.com/marcj/css-element-queries/blob/master/LICENSE.
 */
(function (root, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {}
}(typeof window !== 'undefined' ? window : this, function () {

    // Make sure it does not throw in a SSR (Server Side Rendering) situation
    if (typeof window === "undefined") {
        return null;
    }
    // https://github.com/Semantic-Org/Semantic-UI/issues/3855
    // https://github.com/marcj/css-element-queries/issues/257
    var globalWindow = typeof window != 'undefined' && window.Math == Math
        ? window
        : typeof self != 'undefined' && self.Math == Math
            ? self
            : Function('return this')();
    // Only used for the dirty checking, so the event callback count is limited to max 1 call per fps per sensor.
    // In combination with the event based resize sensor this saves cpu time, because the sensor is too fast and
    // would generate too many unnecessary events.
    var requestAnimationFrame = globalWindow.requestAnimationFrame ||
        globalWindow.mozRequestAnimationFrame ||
        globalWindow.webkitRequestAnimationFrame ||
        function (fn) {
            return globalWindow.setTimeout(fn, 20);
        };

    /**
     * Iterate over each of the provided element(s).
     *
     * @param {HTMLElement|HTMLElement[]} elements
     * @param {Function}                  callback
     */
    function forEachElement(elements, callback){
        var elementsType = Object.prototype.toString.call(elements);
        var isCollectionTyped = ('[object Array]' === elementsType
            || ('[object NodeList]' === elementsType)
            || ('[object HTMLCollection]' === elementsType)
            || ('[object Object]' === elementsType)
            || ('undefined' !== typeof jQuery && elements instanceof jQuery) //jquery
            || ('undefined' !== typeof Elements && elements instanceof Elements) //mootools
        );
        var i = 0, j = elements.length;
        if (isCollectionTyped) {
            for (; i < j; i++) {
                callback(elements[i]);
            }
        } else {
            callback(elements);
        }
    }

    /**
    * Get element size
    * @param {HTMLElement} element
    * @returns {Object} {width, height}
    */
    function getElementSize(element) {
        if (!element.getBoundingClientRect) {
            return {
                width: element.offsetWidth,
                height: element.offsetHeight
            }
        }

        var rect = element.getBoundingClientRect();
        return {
            width: Math.round(rect.width),
            height: Math.round(rect.height)
        }
    }

    /**
     * Apply CSS styles to element.
     *
     * @param {HTMLElement} element
     * @param {Object} style
     */
    function setStyle(element, style) {
        Object.keys(style).forEach(function(key) {
            element.style[key] = style[key];
        });
    }

    /**
     * Class for dimension change detection.
     *
     * @param {Element|Element[]|Elements|jQuery} element
     * @param {Function} callback
     *
     * @constructor
     */
    var ResizeSensor = function(element, callback) {
        var lastAnimationFrame = 0;
        
        /**
         *
         * @constructor
         */
        function EventQueue() {
            var q = [];
            this.add = function(ev) {
                q.push(ev);
            };

            var i, j;
            this.call = function(sizeInfo) {
                for (i = 0, j = q.length; i < j; i++) {
                    q[i].call(this, sizeInfo);
                }
            };

            this.remove = function(ev) {
                var newQueue = [];
                for(i = 0, j = q.length; i < j; i++) {
                    if(q[i] !== ev) newQueue.push(q[i]);
                }
                q = newQueue;
            };

            this.length = function() {
                return q.length;
            }
        }

        /**
         *
         * @param {HTMLElement} element
         * @param {Function}    resized
         */
        function attachResizeEvent(element, resized) {
            if (!element) return;
            if (element.resizedAttached) {
                element.resizedAttached.add(resized);
                return;
            }

            element.resizedAttached = new EventQueue();
            element.resizedAttached.add(resized);

            element.resizeSensor = document.createElement('div');
            element.resizeSensor.dir = 'ltr';
            element.resizeSensor.className = 'resize-sensor';

            var style = {
                pointerEvents: 'none',
                position: 'absolute',
                left: '0px',
                top: '0px',
                right: '0px',
                bottom: '0px',
                overflow: 'hidden',
                zIndex: '-1',
                visibility: 'hidden',
                maxWidth: '100%'
            };
            var styleChild = {
                position: 'absolute',
                left: '0px',
                top: '0px',
                transition: '0s',
            };

            setStyle(element.resizeSensor, style);

            var expand = document.createElement('div');
            expand.className = 'resize-sensor-expand';
            setStyle(expand, style);

            var expandChild = document.createElement('div');
            setStyle(expandChild, styleChild);
            expand.appendChild(expandChild);

            var shrink = document.createElement('div');
            shrink.className = 'resize-sensor-shrink';
            setStyle(shrink, style);

            var shrinkChild = document.createElement('div');
            setStyle(shrinkChild, styleChild);
            setStyle(shrinkChild, { width: '200%', height: '200%' });
            shrink.appendChild(shrinkChild);

            element.resizeSensor.appendChild(expand);
            element.resizeSensor.appendChild(shrink);
            element.appendChild(element.resizeSensor);

            var computedStyle = window.getComputedStyle(element);
            var position = computedStyle ? computedStyle.getPropertyValue('position') : null;
            if ('absolute' !== position && 'relative' !== position && 'fixed' !== position && 'sticky' !== position) {
                element.style.position = 'relative';
            }

            var dirty, rafId;
            var size = getElementSize(element);
            var lastWidth = 0;
            var lastHeight = 0;
            var initialHiddenCheck = true;
            lastAnimationFrame = 0;

            var resetExpandShrink = function () {
                var width = element.offsetWidth;
                var height = element.offsetHeight;

                expandChild.style.width = (width + 10) + 'px';
                expandChild.style.height = (height + 10) + 'px';

                expand.scrollLeft = width + 10;
                expand.scrollTop = height + 10;

                shrink.scrollLeft = width + 10;
                shrink.scrollTop = height + 10;
            };

            var reset = function() {
                // Check if element is hidden
                if (initialHiddenCheck) {
                    var invisible = element.offsetWidth === 0 && element.offsetHeight === 0;
                    if (invisible) {
                        // Check in next frame
                        if (!lastAnimationFrame){
                            lastAnimationFrame = requestAnimationFrame(function(){
                                lastAnimationFrame = 0;

                                reset();
                            });
                        }

                        return;
                    } else {
                        // Stop checking
                        initialHiddenCheck = false;
                    }
                }

                resetExpandShrink();
            };
            element.resizeSensor.resetSensor = reset;

            var onResized = function() {
                rafId = 0;

                if (!dirty) return;

                lastWidth = size.width;
                lastHeight = size.height;

                if (element.resizedAttached) {
                    element.resizedAttached.call(size);
                }
            };

            var onScroll = function() {
                size = getElementSize(element);
                dirty = size.width !== lastWidth || size.height !== lastHeight;

                if (dirty && !rafId) {
                    rafId = requestAnimationFrame(onResized);
                }

                reset();
            };

            var addEvent = function(el, name, cb) {
                if (el.attachEvent) {
                    el.attachEvent('on' + name, cb);
                } else {
                    el.addEventListener(name, cb);
                }
            };

            addEvent(expand, 'scroll', onScroll);
            addEvent(shrink, 'scroll', onScroll);

            // Fix for custom Elements
            lastAnimationFrame = requestAnimationFrame(reset);
        }

        forEachElement(element, function(elem){
            attachResizeEvent(elem, callback);
        });

        this.detach = function(ev) {
            // clean up the unfinished animation frame to prevent a potential endless requestAnimationFrame of reset
            if (!lastAnimationFrame) {
                window.cancelAnimationFrame(lastAnimationFrame);
                lastAnimationFrame = 0;
            }
            ResizeSensor.detach(element, ev);
        };

        this.reset = function() {
            element.resizeSensor.resetSensor();
        };
    };

    ResizeSensor.reset = function(element) {
        forEachElement(element, function(elem){
            elem.resizeSensor.resetSensor();
        });
    };

    ResizeSensor.detach = function(element, ev) {
        forEachElement(element, function(elem){
            if (!elem) return;
            if(elem.resizedAttached && typeof ev === "function"){
                elem.resizedAttached.remove(ev);
                if(elem.resizedAttached.length()) return;
            }
            if (elem.resizeSensor) {
                if (elem.contains(elem.resizeSensor)) {
                    elem.removeChild(elem.resizeSensor);
                }
                delete elem.resizeSensor;
                delete elem.resizedAttached;
            }
        });
    };

    if (typeof MutationObserver !== "undefined") {
        var observer = new MutationObserver(function (mutations) {
            for (var i in mutations) {
                if (mutations.hasOwnProperty(i)) {
                    var items = mutations[i].addedNodes;
                    for (var j = 0; j < items.length; j++) {
                        if (items[j].resizeSensor) {
                            ResizeSensor.reset(items[j]);
                        }
                    }
                }
            }
        });

        document.addEventListener("DOMContentLoaded", function (event) {
            observer.observe(document.body, {
                childList: true,
                subtree: true,
            });
        });
    }

    return ResizeSensor;

}));


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/arduino-ide-extension/src/browser/style/arduino-select.css":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/arduino-ide-extension/src/browser/style/arduino-select.css ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".arduino-select__control {\r\n    border: var(--theia-layout-color2) var(--theia-border-width) solid !important;\r\n    background: var(--theia-layout-color2) !important;\r\n}\r\n\r\n.arduino-select__control:hover {\r\n    border: var(--theia-layout-color2) var(--theia-border-width) solid !important;\r\n}\r\n\r\n.arduino-select__control--is-focused {\r\n    box-shadow: none !important;\r\n}\r\n\r\n.arduino-select__option--is-selected {\r\n    background-color: var(--theia-accent-color3) !important;\r\n    color: var(--theia-content-font-color0) !important;\r\n    border-color: var(--theia-accent-color3) !important;\r\n}\r\n\r\n.arduino-select__option--is-focused {\r\n    background-color: var(--theia-accent-color4) !important;\r\n    border-color: var(--theia-accent-color3) !important;\r\n}\r\n\r\n.arduino-select__menu {\r\n    background-color: var(--theia-layout-color2) !important;\r\n    border: 1px solid var(--theia-accent-color3) !important;\r\n    top: auto !important; /* to align the top of the menu with the bottom of the control */\r\n    box-shadow: none !important;\r\n}\r\n\r\n.arduino-select__control.arduino-select__control--menu-is-open {\r\n    border: 1px solid !important;\r\n    border-color: var(--theia-accent-color3) !important;\r\n    border-bottom-color: var(--theia-layout-color2) !important; /* if the bottom border color has the same color as the background of the control, we make the border \"invisible\" */\r\n}\r\n\r\n.arduino-select__value-container .arduino-select__single-value {\r\n    color: var(--theia-ui-font-color1) !important;\r\n}\r\n\r\n.arduino-select__menu-list {\r\n    padding-top: 0 !important;\r\n    padding-bottom: 0 !important;\r\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/arduino-ide-extension/src/browser/style/arduino.useable.css":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/arduino-ide-extension/src/browser/style/arduino.useable.css ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*\r\nThe following CSS variables define the main public API for styling Theia.\r\nThese variables should be used by all extensions wherever possible. In other\r\nwords, extensions should not define custom colors, sizes, etc. unless\r\nabsolutely necessary. This enables users to adapt the visual theme of Theia\r\nby changing these variables.\r\n\r\nMany variables appear in ordered sequences (0,1,2,...). For most of these\r\nsequences, colors go from dark to bright for dark themes, and from bright to\r\ndark for bright themes. A few sequences are used to create contrast against\r\nthe others, e.g. font and accent colors, and thus their brightness goes the\r\nother way around.\r\n\r\nThroughout Theia, we are mostly following principles from Google's Material\r\nDesign when selecting colors. We are not, however, following all of MD as it\r\nis not optimized for dense, information rich UIs.\r\n*/\r\n\r\n:root {\r\n    /* Custom Theme Colors */\r\n    --theia-arduino-light: rgb(0, 100, 104);\r\n    --theia-arduino-light1: rgb(23, 161, 165);\r\n    --theia-arduino-light2: rgb(218, 226, 228);\r\n    --theia-arduino-light3: rgb(237, 241, 242);\r\n    --theia-arduino-terminal: rgb(0, 0, 0);\r\n\r\n    /* Borders: Width and color (bright to dark) */\r\n    \r\n    --theia-border-width: 1px;\r\n    --theia-panel-border-width: 2px;\r\n    --theia-border-color0: var(--md-grey-100);\r\n    --theia-border-color1: var(--md-grey-200);\r\n    --theia-border-color2: var(--md-grey-300);\r\n    --theia-border-color3: var(--md-grey-400);\r\n    \r\n    \r\n    /* UI fonts: Family, size and color (dark to bright)\r\n        ---------------------------------------------------\r\n         The UI font CSS variables are used for the typography all of the Theia\r\n         user interface elements that are not directly user-generated content.\r\n      */\r\n\r\n    --theia-ui-font-scale-factor: 1.2;\r\n    --theia-ui-font-size0: calc(var(--theia-ui-font-size1) / var(--theia-ui-font-scale-factor));\r\n    --theia-ui-font-size1: 13px; /* Base font size */\r\n    --theia-ui-font-size2: calc(var(--theia-ui-font-size1) * var(--theia-ui-font-scale-factor));\r\n    --theia-ui-font-size3: calc(var(--theia-ui-font-size2) * var(--theia-ui-font-scale-factor));\r\n    --theia-ui-icon-font-size: 14px; /* Ensures px perfect FontAwesome icons */\r\n    --theia-ui-font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\r\n\r\n    --theia-ui-font-color0: var(--md-grey-900);\r\n    --theia-ui-font-color1: var(--md-grey-700);\r\n    --theia-ui-font-color2: var(--md-grey-500);\r\n    --theia-ui-font-color3: var(--md-grey-300);\r\n    \r\n    /* Special font colors */\r\n    \r\n    --theia-ui-icon-font-color: #ffffff;\r\n    --theia-ui-bar-font-color0: var(--theia-ui-font-color0);\r\n    --theia-ui-bar-font-color1: var(--theia-inverse-ui-font-color0); /* var(--theia-ui-font-color1); */\r\n    \r\n    /* Use the inverse UI colors against the brand/accent/warn/error colors. */\r\n    \r\n    --theia-inverse-ui-font-color0: rgba(255, 255, 255, 1.0);\r\n    --theia-inverse-ui-font-color2: rgba(255, 255, 255, 0.7);\r\n    --theia-inverse-ui-font-color3: rgba(255, 255, 255, 0.5);\r\n    \r\n    /* Content fonts: Family, size and color (dark to bright)\r\n         Content font variables are used for typography of user-generated content.\r\n      */\r\n    \r\n    --theia-content-font-size: 13px;\r\n    --theia-content-line-height: 1.5;\r\n    --theia-content-font-color0: black;\r\n    --theia-content-font-color1: black;\r\n    --theia-content-font-color2: var(--md-grey-700);\r\n    --theia-content-font-color3: var(--md-grey-500);\r\n    --theia-code-font-size: 13px;\r\n    --theia-code-line-height: 17px;\r\n    --theia-code-padding: 5px;\r\n    --theia-code-font-family: Menlo, Monaco, Consolas, \"Droid Sans Mono\", \"Courier New\", monospace, \"Droid Sans Fallback\";\r\n    --theia-terminal-font-family: monospace;\r\n    --theia-ui-padding: 6px;\r\n\r\n    /* Tab Icon Colors */\r\n    --theia-tab-icon-color: var(--theia-ui-font-color1);\r\n    --theia-tab-font-color: #000;\r\n    \r\n    /* Main layout colors (bright to dark)\r\n      ------------------------------------ */\r\n    \r\n    --theia-layout-color0: #ffffff;\r\n    --theia-layout-color1: #f7f9f9;\r\n    --theia-layout-color2: #ececec;\r\n    --theia-layout-color3: var(--theia-arduino-light2);\r\n    --theia-layout-color4: #dcdcdc;\r\n\r\n    /* Brand colors */\r\n    \r\n    --theia-brand-color0: var(--theia-arduino-light);\r\n    --theia-brand-color1: var(--theia-arduino-light1);\r\n    --theia-brand-color2: var(--theia-arduino-light2);\r\n    --theia-brand-color3: var(--theia-arduino-light3);\r\n    \r\n    /* Secondary Brand colors */\r\n    \r\n    --theia-secondary-brand-color0: var(--md-grey-700);\r\n    --theia-secondary-brand-color1: #b5c8c9;\r\n    --theia-secondary-brand-color2: var(--theia-arduino-light2);\r\n    --theia-secondary-brand-color3: var(--theia-arduino-light3);\r\n    \r\n    /* Accent colors (dark to bright): Use these to create contrast to layout colors. */\r\n    \r\n    --theia-accent-color0: var(--theia-arduino-light);\r\n    --theia-accent-color1: rgb(77, 183, 187, 1.0);\r\n    --theia-accent-color2: rgb(77, 183, 187, 0.8);\r\n    --theia-accent-color3: rgb(77, 183, 187, 0.6);\r\n    --theia-accent-color4: rgba(77, 183, 187, 0.4);\r\n    \r\n    /* Accent colors with opacity */\r\n    \r\n    --theia-transparent-accent-color0: hsla(210, 63%, 46%, 0.3);\r\n    --theia-transparent-accent-color1: hsla(207, 66%, 56%, 0.3);\r\n    --theia-transparent-accent-color2: hsla(207, 64%, 85%, 0.3);\r\n    --theia-transparent-accent-color3: hsla(205, 70%, 91%, 0.3);\r\n    \r\n    /* State colors (warn, error, success, info)\r\n        ------------------------------------------ */\r\n    --theia-warn-color0: var(--md-amber-500);\r\n    --theia-warn-color1: var(--md-amber-400);\r\n    --theia-warn-color2: var(--md-amber-300);\r\n    --theia-warn-color3: var(--md-amber-200);\r\n\r\n    --theia-warn-font-color0: var(--md-grey-900);\r\n    \r\n    --theia-error-color0: var(--md-red-400);\r\n    --theia-error-color1: #da5b4a;\r\n    --theia-error-color2: var(--md-red-200);\r\n    --theia-error-color3: var(--md-red-100);\r\n    \r\n    --theia-error-font-color0: var(--md-grey-300);\r\n    \r\n    --theia-success-color0: var(--md-green-500);\r\n    --theia-success-color1: var(--md-green-300);\r\n    --theia-success-color2: var(--md-green-100);\r\n    --theia-success-color3: var(--md-green-50);\r\n    \r\n    --theia-success-font-color0: var(--md-grey-300);\r\n    \r\n    --theia-info-color0: var(--md-cyan-700);\r\n    --theia-info-color1: var(--md-cyan-500);\r\n    --theia-info-color2: var(--md-cyan-300);\r\n    --theia-info-color3: var(--md-cyan-100);\r\n    \r\n    --theia-info-font-color0: var(--md-grey-300);\r\n    \r\n    --theia-disabled-color0: var(--md-grey-500);\r\n    --theia-disabled-color1: var(--md-grey-300);\r\n    --theia-disabled-color2: var(--md-grey-200);\r\n    --theia-disabled-color3: var(--md-grey-50);\r\n    \r\n    --theia-added-color0: rgba(0, 255, 0, 0.8);\r\n    --theia-removed-color0: rgba(230, 0, 0, 0.8);\r\n    --theia-modified-color0: rgba(0, 100, 150, 0.8);\r\n    \r\n    /* Background for selected text */\r\n    --theia-selected-text-background: var(--theia-accent-color3);\r\n    \r\n    /* Colors to highlight words in widgets like tree or editors */\r\n    \r\n    --theia-word-highlight-color0: rgba(168, 172, 148, 0.7);\r\n    --theia-word-highlight-color1: rgba(253, 255, 0, 0.2);\r\n    --theia-word-highlight-match-color0: rgba(234, 92, 0, 0.33);\r\n    --theia-word-highlight-match-color1: rgba(234, 92, 0, 0.5);\r\n    --theia-word-highlight-replace-color0: rgba(155, 185, 85, 0.2);\r\n    \r\n    /* Scroll-bars */\r\n    \r\n    --theia-scrollbar-width: 10px;\r\n    --theia-scrollbar-rail-width: 10px;\r\n    --theia-scrollbar-thumb-color: hsla(0, 0%, 61%, .4);\r\n    --theia-scrollbar-rail-color: transparent;\r\n    --theia-scrollbar-active-thumb-color: hsla(0, 0%, 39%, .4);\r\n    --theia-scrollbar-active-rail-color: transparent;\r\n    /* Menu */\r\n    --theia-menu-color0: var(--theia-arduino-light);\r\n    --theia-menu-color1: var(--theia-layout-color0);\r\n    --theia-menu-color2: #dae3e3;\r\n    /* Statusbar */\r\n    --theia-statusbar-color: var(--theia-arduino-light);\r\n    --theia-statusBar-font-color: var(--theia-inverse-ui-font-color0);\r\n    --theia-statusBar-font-size: 12px;\r\n    /* Buttons */\r\n    --theia-ui-button-color: var(--theia-accent-color1);\r\n    --theia-ui-button-color-hover: var(--theia-accent-color2);\r\n    --theia-ui-button-font-color: var(--theia-arduino-light);\r\n    --theia-ui-button-color-secondary: var(--theia-secondary-brand-color1);\r\n    --theia-ui-button-color-secondary-hover: var(--theia-menu-color2);\r\n    --theia-ui-button-font-color-secondary: var(--theia-inverse-ui-font-color0);\r\n    --theia-ui-button-color-disabled: var(--theia-accent-color3);\r\n    --theia-ui-button-font-color-disabled: var(--theia-ui-font-color2);\r\n    --theia-ui-button-color-secondary-disabled: var(--theia-disabled-color1);\r\n    --theia-ui-button-font-color-secondary-disabled: var(--theia-ui-font-color2);\r\n    /* Expand/collapse element */\r\n    --theia-ui-expand-button-color: var(--theia-accent-color4);\r\n    --theia-ui-expand-button-font-color: var(--theia-ui-font-color1);\r\n    /* Dialogs */\r\n    --theia-ui-dialog-header-color: var(--theia-arduino-light);\r\n    --theia-ui-dialog-header-font-color: var(--theia-inverse-ui-font-color0);\r\n    --theia-ui-dialog-color: rgb(236, 241, 241);\r\n    --theia-ui-dialog-font-color: black;\r\n    /* Variables */\r\n    --theia-variable-name-color: #9B46B0;\r\n    --theia-variable-value-color: rgba(108, 108, 108, 0.8);\r\n    --theia-number-variable-color: #09885A;\r\n    --theia-boolean-variable-color: #0000FF;\r\n    --theia-string-variable-color: #A31515;\r\n    /* ANSI color */\r\n    --theia-ansi-black-color: gray;\r\n    --theia-ansi-red-color: #BE1717;\r\n    --theia-ansi-green-color: #338A2F;\r\n    --theia-ansi-yellow-color: #BEB817;\r\n    --theia-ansi-blue-color: darkblue;\r\n    --theia-ansi-magenta-color: darkmagenta;\r\n    --theia-ansi-cyan-color: darkcyan;\r\n    --theia-ansi-white-color: #BDBDBD;\r\n    /* ANSI background color */\r\n    --theia-ansi-black-background-color: gray;\r\n    --theia-ansi-red-background-color: #BE1717;\r\n    --theia-ansi-green-background-color: #338A2F;\r\n    --theia-ansi-yellow-background-color: #BEB817;\r\n    --theia-ansi-blue-background-color: darkblue;\r\n    --theia-ansi-magenta-background-color: darkmagenta;\r\n    --theia-ansi-cyan-background-color: darkcyan;\r\n    --theia-ansi-white-background-color: #BDBDBD;\r\n\r\n    /* Output */\r\n    --theia-output-font-color: var(--theia-ui-font-color3);\r\n\r\n  }", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/arduino-ide-extension/src/browser/style/board-select-dialog.css":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/arduino-ide-extension/src/browser/style/board-select-dialog.css ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div#select-board-dialog {\r\n    margin: 5px 20px 50px 20px;\r\n}\r\n\r\ndiv#select-board-dialog .selectBoardContainer .body {\r\n    display: flex;\r\n    overflow: hidden;\r\n}\r\n\r\ndiv.dialogContent.select-board-dialog > div.head {\r\n    padding-left: 21px;\r\n}\r\n\r\ndiv.dialogContent.select-board-dialog > div.head .title {\r\n    font-weight: 400;\r\n    letter-spacing: .02em;\r\n    font-size: 1.2em;\r\n    color: #00979d;\r\n    margin: 17px 0;\r\n}\r\n\r\ndiv#select-board-dialog .selectBoardContainer .head .text {\r\n    margin-bottom: 21px;\r\n}\r\n\r\ndiv#select-board-dialog .selectBoardContainer .body .list .item.selected {\r\n    background: var(--theia-ui-button-color-secondary-hover);\r\n}\r\n\r\ndiv#select-board-dialog .selectBoardContainer .body .list .item.selected i{\r\n    color: var(--theia-arduino-light);\r\n}\r\n\r\n#select-board-dialog .selectBoardContainer .search,\r\n#select-board-dialog .selectBoardContainer .search input,\r\n#select-board-dialog .selectBoardContainer .list,\r\n#select-board-dialog .selectBoardContainer .list {\r\n    background: var(--theia-layout-color0);\r\n}\r\n\r\n#select-board-dialog .selectBoardContainer .body .search input {\r\n    border: none;\r\n    width: 100%;\r\n    height: auto;\r\n    max-height: 37px;\r\n    padding: 10px 5px 10px 10px;\r\n    margin: 0;\r\n    vertical-align: top;\r\n    display: flex;\r\n    color: var(--theia-content-font-color0);\r\n}\r\n\r\n#select-board-dialog .selectBoardContainer .body .search input:focus {\r\n    box-shadow: none;\r\n}\r\n\r\n#select-board-dialog .selectBoardContainer .body .container {\r\n    flex: 1;\r\n    padding: 0px 10px 0px 0px;\r\n}\r\n\r\n#select-board-dialog .selectBoardContainer .body .left.container .content {\r\n    margin: 0 5px 0 0;\r\n}\r\n\r\n#select-board-dialog .selectBoardContainer .body .right.container .content {\r\n    margin: 0 0 0 5px;\r\n}\r\n\r\n#select-board-dialog .selectBoardContainer .body .container .content .title {\r\n    color: #7f8c8d;\r\n    padding: 0px 0px 10px 0px;\r\n    text-transform: uppercase;\r\n}\r\n\r\n#select-board-dialog .selectBoardContainer .body .container .content .footer {\r\n    padding: 10px 5px 10px 0px;\r\n}\r\n\r\n#select-board-dialog .selectBoardContainer .body .container .content .loading {\r\n    font-size: var(--theia-ui-font-size1);\r\n    color: #7f8c8d;\r\n    padding: 10px 5px 10px 10px;\r\n    text-transform: uppercase;\r\n    /* The max, min-height comes from `.body .list` 265px + 47px top padding - 2 * 10px top padding */\r\n    max-height: 292px;\r\n    min-height: 292px;\r\n}\r\n\r\n#select-board-dialog .selectBoardContainer .body .list .item {\r\n    padding: 10px 5px 10px 10px;\r\n    display: flex;\r\n    justify-content: end;\r\n}\r\n\r\n#select-board-dialog .selectBoardContainer .body .list .item .selected-icon {\r\n    margin-left: auto;\r\n}\r\n\r\n#select-board-dialog .selectBoardContainer .body .list .item .detail {\r\n    font-size: var(--theia-ui-font-size1);\r\n    color: var(--theia-disabled-color0);\r\n    width: 155px; /* used heuristics for the calculation */\r\n    white-space: pre;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n}\r\n\r\n#select-board-dialog .selectBoardContainer .body .list .item.missing {\r\n    color: var(--theia-disabled-color0);\r\n}\r\n\r\n#select-board-dialog .selectBoardContainer .body .list .item:hover {\r\n    background: var(--theia-ui-button-color-secondary-hover);\r\n}\r\n\r\n#select-board-dialog .selectBoardContainer .body .list {\r\n    max-height: 265px;\r\n    min-height: 265px;\r\n    overflow-y: auto;\r\n}\r\n\r\n#select-board-dialog .selectBoardContainer .body .ports.list {\r\n    margin: 47px 0px 0px 0px /* 47 is 37 as input height for the `Boards`, plus 10 margin bottom. */\r\n}\r\n\r\n#select-board-dialog .selectBoardContainer .body .search {\r\n    margin-bottom: 10px;\r\n    display: flex;\r\n    align-items: center;\r\n    padding-right: 5px;\r\n}\r\n\r\n.p-Widget.dialogOverlay .dialogContent.select-board-dialog {\r\n    width: 740px;\r\n}\r\n\r\nbutton.theia-button {\r\n    height: 31px;\r\n}\r\n\r\nbutton.theia-button.secondary {\r\n    background-color: #b5c8c9;\r\n    color: #000;\r\n    box-shadow: 0 4px #95a5a6;\r\n}\r\n\r\nbutton.theia-button.main {\r\n    color: #fff;\r\n    /* background-color: #00979c; */\r\n    box-shadow: 0 4px var(--theia-accent-color0);\r\n}\r\n\r\n.dialogControl {\r\n    margin: 0 20px 30px 0;\r\n}\r\n\r\n.arduino-boards-toolbar-item-container {\r\n    margin-left: 3px;\r\n}\r\n\r\n.arduino-boards-toolbar-item-container .arduino-boards-toolbar-item .inner-container {\r\n    display: flex;\r\n    align-items: baseline;\r\n    width: 100%;\r\n}\r\n\r\n.arduino-boards-toolbar-item-container .arduino-boards-toolbar-item .inner-container .notAttached {\r\n    width: 10px;\r\n    height: 10px;\r\n    color: red;\r\n    margin: 0 5px;\r\n}\r\n\r\n.arduino-boards-toolbar-item-container {\r\n    display: flex;\r\n    align-items: center;\r\n    width: 220px;\r\n}\r\n\r\n.arduino-boards-toolbar-item .label {\r\n    height: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    margin: 0 5px;\r\n    width: 100%;\r\n}\r\n\r\n.arduino-boards-toolbar-item .caret {\r\n    width: 10px;\r\n    margin-right: 5px;\r\n}\r\n\r\n.arduino-boards-toolbar-item {\r\n    background: var(--theia-layout-color1);\r\n    height: 22px;\r\n    display: flex;\r\n    width: 100%;\r\n    overflow: hidden;\r\n}\r\n\r\n.arduino-boards-dropdown-list {\r\n    border: 3px solid var(--theia-border-color2);\r\n    margin: -3px;\r\n    z-index: 1;\r\n}\r\n\r\n.arduino-boards-dropdown-item {\r\n    font-size: var(--theia-ui-font-size1);\r\n    display: flex;\r\n    padding: 10px;\r\n    cursor: pointer;\r\n    color: var(--theia-ui-font-color1);\r\n    background: var(--theia-layout-color1);\r\n}\r\n\r\n.arduino-boards-dropdown-item .fa-check {\r\n    color: var(--theia-accent-color1);\r\n    align-self: center;\r\n}\r\n\r\n.arduino-boards-dropdown-item.selected,\r\n.arduino-boards-dropdown-item:hover {\r\n    background: var(--theia-layout-color3);\r\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/arduino-ide-extension/src/browser/style/editor.css":
/*!***************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/arduino-ide-extension/src/browser/style/editor.css ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Do not show the `close` icon for editor, but show the dirty state if not in pro-mode. */\r\nbody:not(.arduino-advanced-mode) .p-TabBar.theia-app-centers .p-TabBar-tab.p-mod-closable:hover > .p-TabBar-tabCloseIcon,\r\nbody:not(.arduino-advanced-mode) .p-TabBar.theia-app-centers .p-TabBar-tab.p-mod-current > .p-TabBar-tabCloseIcon {\r\n    background-image: none;\r\n    cursor: pointer;\r\n}\r\n\r\nbody:not(.arduino-advanced-mode) .p-TabBar.theia-app-centers .p-TabBar-tab.p-mod-closable.theia-mod-dirty:hover > .p-TabBar-tabCloseIcon,\r\nbody:not(.arduino-advanced-mode) .p-TabBar.theia-app-centers .p-TabBar-tab.p-mod-closable.theia-mod-dirty > .p-TabBar-tabCloseIcon:hover {\r\n    background-size: 10px;\r\n    background-image: var(--theia-icon-circle);\r\n    cursor: pointer;\r\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/arduino-ide-extension/src/browser/style/index.css":
/*!**************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/arduino-ide-extension/src/browser/style/index.css ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__(/*! -!../../../../css-loader!./list-widget.css */ "./node_modules/css-loader/index.js!./node_modules/arduino-ide-extension/src/browser/style/list-widget.css"), "");
exports.i(__webpack_require__(/*! -!../../../../css-loader!./board-select-dialog.css */ "./node_modules/css-loader/index.js!./node_modules/arduino-ide-extension/src/browser/style/board-select-dialog.css"), "");
exports.i(__webpack_require__(/*! -!../../../../css-loader!./main.css */ "./node_modules/css-loader/index.js!./node_modules/arduino-ide-extension/src/browser/style/main.css"), "");
exports.i(__webpack_require__(/*! -!../../../../css-loader!./editor.css */ "./node_modules/css-loader/index.js!./node_modules/arduino-ide-extension/src/browser/style/editor.css"), "");
exports.i(__webpack_require__(/*! -!../../../../css-loader!./monitor.css */ "./node_modules/css-loader/index.js!./node_modules/arduino-ide-extension/src/browser/style/monitor.css"), "");
exports.i(__webpack_require__(/*! -!../../../../css-loader!./arduino-select.css */ "./node_modules/css-loader/index.js!./node_modules/arduino-ide-extension/src/browser/style/arduino-select.css"), "");

// module
exports.push([module.i, "input:focus {\r\n    outline-width: 1px;\r\n    outline-style: solid;\r\n    outline-offset: -1px;\r\n    opacity: 1 !important;\r\n    outline-color: var(--theia-accent-color3);\r\n}\r\n\r\ninput.warning:focus {\r\n    outline-width: 1px;\r\n    outline-style: solid;\r\n    outline-offset: -1px;\r\n    opacity: 1 !important;\r\n    color: var(--theia-warn-font-color0);\r\n    background-color: var(--theia-warn-color0);\r\n}\r\n\r\ninput.warning {\r\n    background-color: var(--theia-warn-color0);\r\n}\r\n\r\ninput.warning::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */\r\n    color: var(--theia-warn-font-color0);\r\n    background-color: var(--theia-warn-color0);\r\n    opacity: 1; /* Firefox */\r\n}\r\n\r\ninput.warning:-ms-input-placeholder { /* Internet Explorer 10-11 */\r\n    color: var(--theia-warn-font-color0);\r\n    background-color: var(--theia-warn-color0);\r\n}\r\n\r\ninput.warning::-ms-input-placeholder { /* Microsoft Edge */\r\n    color: var(--theia-warn-font-color0);\r\n    background-color: var(--theia-warn-color0);\r\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/arduino-ide-extension/src/browser/style/list-widget.css":
/*!********************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/arduino-ide-extension/src/browser/style/list-widget.css ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../../../../css-loader/lib/url/escape.js */ "./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../../../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".library-tab-icon {\r\n    -webkit-mask: url(" + escape(__webpack_require__(/*! ../icons/library-tab-icon.svg */ "./node_modules/arduino-ide-extension/src/browser/icons/library-tab-icon.svg")) + ");\r\n    mask: url(" + escape(__webpack_require__(/*! ../icons/library-tab-icon.svg */ "./node_modules/arduino-ide-extension/src/browser/icons/library-tab-icon.svg")) + ");\r\n}\r\n\r\n.arduino-list-widget {\r\n    color: var(--theia-ui-font-color1);\r\n}\r\n\r\n.arduino-list-widget .search-bar {\r\n    margin: 0px 10px 10px 15px;\r\n}\r\n\r\n.arduino-list-widget .search-filters {\r\n    margin: 0px 10px 0px 15px;\r\n    border-color: var(--theia-border-color3);\r\n}\r\n\r\n.arduino-list-widget .search-bar:focus {\r\n    border-color: var(--theia-accent-color3);\r\n}\r\n\r\n.arduino-list-widget .filterable-list-container .search-filters .filter {\r\n    margin: 0px 0px 10px 0px;\r\n    display: flex;\r\n}\r\n\r\n.arduino-list-widget .filterable-list-container .search-filters .filter .title {\r\n    margin: 0px 10px 0px 0px;\r\n    align-self: center;\r\n    text-transform: uppercase;\r\n    font-size: var(--theia-ui-font-size0);\r\n}\r\n\r\n.arduino-list-widget .filterable-list-container .search-filters .filter > select {\r\n    width: 100%;\r\n}\r\n\r\n.filterable-list-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: stretch;\r\n    height: 100%; /* This has top be 100% down to the `scrollContainer`. */\r\n}\r\n\r\n.filterable-list-container .items-container {\r\n    height: 100%; /* This has to be propagated down from the widget. */\r\n    position: relative; /* To fix the `top` of the vertical toolbar.  */\r\n}\r\n\r\n.filterable-list-container .items-container > div:nth-child(odd) {\r\n    background-color: var(--theia-layout-color0);\r\n}\r\n\r\n.filterable-list-container .items-container > div:nth-child(even) {\r\n    background-color: var(--theia-layout-color1);\r\n}\r\n\r\n.filterable-list-container .items-container > div:hover {\r\n    background-color: var(--theia-layout-color2);\r\n}\r\n\r\n/* Perfect scrollbar does not like if we explicitly set the `background-color` of the contained elements.\r\nSee above: `.filterable-list-container .items-container > div:nth-child(odd|event)`.\r\nWe have to increase `z-index` of the scroll-bar thumb. Otherwise, the thumb is not visible.\r\nhttps://github.com/arduino/arduino-pro-ide/issues/82 */\r\n.arduino-list-widget .ps__rail-y > .ps__thumb-y {\r\n    z-index: 1;\r\n}\r\n\r\n.component-list-item {\r\n    padding: 10px 10px 10px 15px;\r\n    font-size: var(--theia-ui-font-size1);\r\n}\r\n\r\n.component-list-item:hover {\r\n    background: var(--theia-accent-color4);\r\n    cursor: pointer;\r\n}\r\n\r\n.component-list-item:hover .meta-info {\r\n    color: var(--theia-ui-font-color1);\r\n}\r\n\r\n.component-list-item .meta-info {\r\n    color: var(--theia-ui-font-color3);\r\n}\r\n\r\n.component-list-item .header {\r\n    padding-bottom: 2px;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.component-list-item .header .version-info {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n\r\n.component-list-item .header .name {\r\n    font-weight: bold;\r\n}\r\n\r\n.component-list-item .header .author {\r\n    font-weight: bold;\r\n    color: var(--theia-ui-font-color2);\r\n}\r\n\r\n.component-list-item:hover .header .author {\r\n    color: var(--theia-ui-font-color1);\r\n}\r\n\r\n.component-list-item .header .version {\r\n    color: var(--theia-ui-font-color2);\r\n}\r\n\r\n.component-list-item .header .installed:before {\r\n    margin-left: 4px;\r\n    display: inline-block;\r\n    justify-self: end;\r\n    background-color: var(--theia-accent-color1);\r\n    padding: 2px 4px 2px 4px;\r\n    font-size: 10px;\r\n    font-weight: bold;\r\n    max-height: calc(1em + 4px);\r\n    color: var(--theia-inverse-ui-font-color0);\r\n    content: 'INSTALLED';\r\n}\r\n\r\n.component-list-item .header .installed:hover:before {\r\n    background-color: var(--theia-inverse-ui-font-color0);\r\n    color: var(--theia-accent-color1);\r\n    content: 'UNINSTALL';\r\n}\r\n\r\n.component-list-item[min-width~=\"170px\"] .footer {\r\n    padding: 5px 5px 0px 0px;\r\n    min-height: 26px; /* 21 + 5 from the footer margin top */\r\n    display: flex;\r\n    flex-direction: row-reverse;\r\n}\r\n\r\n.component-list-item .footer {\r\n    flex-direction: column-reverse;\r\n}\r\n\r\n.component-list-item .footer > * {\r\n    display: none\r\n}\r\n\r\n.component-list-item:hover .footer > * {\r\n    display: block;\r\n    margin: 5px 0px 0px 10px;\r\n}\r\n\r\n.component-list-item:hover .footer > label {\r\n    display: block;\r\n    align-self: center;\r\n    margin: 5px 0px 0px 10px;\r\n}\r\n\r\n.component-list-item .info a {\r\n    color: var(--theia-brand-color1);\r\n    text-decoration: none;\r\n}\r\n\r\n.component-list-item a:hover {\r\n    text-decoration: underline;\r\n}\r\n\r\n.component-list-item strong.installed {\r\n    color: rgb(0, 151, 157)\r\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/arduino-ide-extension/src/browser/style/main.css":
/*!*************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/arduino-ide-extension/src/browser/style/main.css ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../../../../css-loader/lib/url/escape.js */ "./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../../../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".p-TabBar[data-orientation='horizontal'].theia-app-bottom {\r\n    background: var(--theia-layout-color1);\r\n}\r\n\r\n.theia-output {\r\n    background: var(--theia-arduino-terminal);\r\n}\r\n\r\n#outputView {\r\n    cursor: text;\r\n}\r\n\r\n.p-TabBar-toolbar .item.arduino-tool-item {\r\n    margin-left: 3px;\r\n}\r\n\r\n.p-TabBar-toolbar .item.arduino-tool-item > div {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    height: 24px;\r\n    width: 24px;\r\n    background: var(--theia-ui-button-color);\r\n}\r\n\r\n.p-TabBar-toolbar .item.arduino-tool-item > div:hover {\r\n    background: var(--theia-ui-button-color-hover);\r\n}\r\n\r\n.arduino-verify, .arduino-upload {\r\n    border-radius: 12px;\r\n}\r\n\r\n.arduino-tool-icon {\r\n    height: 24px;\r\n    width: 24px;\r\n    background: var(--theia-ui-button-font-color);\r\n    -webkit-mask: url(" + escape(__webpack_require__(/*! ../icons/mask-buttons.svg */ "./node_modules/arduino-ide-extension/src/browser/icons/mask-buttons.svg")) + ");\r\n    mask: url(" + escape(__webpack_require__(/*! ../icons/mask-buttons.svg */ "./node_modules/arduino-ide-extension/src/browser/icons/mask-buttons.svg")) + ");\r\n    -webkit-mask-size: 800%;\r\n    mask-size: 800%;\r\n}\r\n\r\n.arduino-save-file-icon {\r\n    -webkit-mask-position: 59px -4px;\r\n    mask-position: 59px -4px;\r\n}\r\n\r\n.arduino-verify-icon {\r\n    -webkit-mask-position: 188px -4px;\r\n    mask-position: 188px -4px;\r\n}\r\n\r\n.arduino-upload-icon {\r\n    -webkit-mask-position: 156px -4px;\r\n    mask-position: 156px -4px;\r\n}\r\n\r\n.arduino-show-open-context-menu-icon {\r\n    -webkit-mask-position: 92px -4px;\r\n    mask-position: 92px -4px;\r\n}\r\n\r\n.toggle-serial-monitor-icon {\r\n    -webkit-mask-position: 28px -4px;\r\n    mask-position: 28px -4px;\r\n}\r\n\r\n#arduino-toolbar-container {\r\n    display: flex;\r\n    width: 100%;\r\n}\r\n\r\n.p-TabBar-toolbar.theia-arduino-toolbar {\r\n    flex: 1;\r\n    z-index: 0;\r\n}\r\n\r\n#theia-top-panel .p-TabBar-toolbar.theia-arduino-toolbar.right {\r\n    justify-content: flex-start;\r\n    min-width: 190px;\r\n}\r\n\r\n#theia-top-panel .p-TabBar-toolbar.theia-arduino-toolbar.left {\r\n    min-width: 398px;\r\n    justify-content: flex-end;\r\n}\r\n\r\n.arduino-tool-item.item.connected-boards {\r\n    opacity: 1;\r\n}\r\n\r\n.arduino-tool-item.item.connected-boards select {\r\n    line-height: var(--theia-content-line-height);\r\n    font-size: var(--theia-ui-font-size1);\r\n    color: var(--theia-ui-font-color1);\r\n    -webkit-appearance: none;\r\n    -moz-appearance: none;\r\n    background-image: linear-gradient(45deg, transparent 50%, var(--theia-ui-font-color1) 50%), linear-gradient(135deg, var(--theia-ui-font-color1) 50%, transparent 50%);\r\n    background-position: calc(100% - 6px) 8px, calc(100% - 2px) 8px, 100% 0;\r\n    background-size: 4px 5px;\r\n    background-repeat: no-repeat;\r\n    padding-left: 3px;\r\n    padding-right: 15px;\r\n}\r\n\r\n.arduino-toolbar-tooltip {\r\n    margin-left: 10px;\r\n    display: flex;\r\n    align-items: center;\r\n    color: var(--theia-ui-font-color3);\r\n}\r\n\r\n.p-TabBar-toolbar .item > div.arduino-toggle-advanced-mode {\r\n    display: flex;\r\n    width: 24px;\r\n    height: 24px;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.arduino-toggle-advanced-mode-icon {\r\n    mask: none;\r\n    -webkit-mask: none;\r\n    background: none;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    color: var(--theia-ui-button-font-color);\r\n}\r\n\r\n.monaco-editor .margin {\r\n    border-right: 2px solid var(--theia-border-color1);\r\n    box-sizing: border-box;\r\n}\r\n\r\n.noWrapInfo {\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n}\r\n\r\n.theia-sidepanel-toolbar .theia-sidepanel-title {\r\n    margin-left: 10px;\r\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/arduino-ide-extension/src/browser/style/monitor.css":
/*!****************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/arduino-ide-extension/src/browser/style/monitor.css ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../../../../css-loader/lib/url/escape.js */ "./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../../../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".p-TabBar.theia-app-centers .p-TabBar-tabIcon.arduino-serial-monitor-tab-icon {\r\n    background: url(" + escape(__webpack_require__(/*! ../icons/buttons.svg */ "./node_modules/arduino-ide-extension/src/browser/icons/buttons.svg")) + ");\r\n    background-size: 800%;\r\n    background-position-y: 41px;\r\n    background-position-x: 19px;\r\n}\r\n\r\n.serial-monitor {\r\n    height: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.serial-monitor .head {\r\n    display: flex;\r\n    padding: 5px;\r\n    background: var(--theia-layout-color0);\r\n    height: 27px;\r\n}\r\n\r\n.serial-monitor .head .send {\r\n    display: flex;\r\n    flex: 1;\r\n    margin-right: 2px;\r\n}\r\n\r\n.serial-monitor .head .send > input {\r\n    line-height: var(--theia-content-line-height);\r\n    width: 100%;\r\n}\r\n\r\n.serial-monitor .head .send > input:focus {\r\n    border-color: var(--theia-accent-color3);\r\n}\r\n\r\n.serial-monitor .head .config {\r\n    display: flex;\r\n}\r\n\r\n.serial-monitor .head .config .select {\r\n    margin-left: 3px;\r\n}\r\n\r\n.serial-monitor .body {\r\n    overflow: auto;\r\n    flex: 1;\r\n    padding: 5px;\r\n}\r\n\r\n.p-TabBar-toolbar .item.arduino-monitor {\r\n    width: 24px;\r\n    justify-content: center;\r\n    font-size: medium;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.p-TabBar-toolbar .item.arduino-monitor.toggled {\r\n    background: var(--theia-secondary-brand-color1);\r\n}\r\n\r\n.p-TabBar-toolbar .item .clear-all {\r\n    background: var(--theia-icon-clear) no-repeat;\r\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/dateformat/lib/dateformat.js":
/*!***************************************************!*\
  !*** ./node_modules/dateformat/lib/dateformat.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*
 * Date Format 1.2.3
 * (c) 2007-2009 Steven Levithan <stevenlevithan.com>
 * MIT license
 *
 * Includes enhancements by Scott Trenda <scott.trenda.net>
 * and Kris Kowal <cixar.com/~kris.kowal/>
 *
 * Accepts a date, a mask, or a date and a mask.
 * Returns a formatted version of the given date.
 * The date defaults to the current date/time.
 * The mask defaults to dateFormat.masks.default.
 */

(function(global) {
  'use strict';

  var dateFormat = (function() {
      var token = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZWN]|"[^"]*"|'[^']*'/g;
      var timezone = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g;
      var timezoneClip = /[^-+\dA-Z]/g;
  
      // Regexes and supporting functions are cached through closure
      return function (date, mask, utc, gmt) {
  
        // You can't provide utc if you skip other args (use the 'UTC:' mask prefix)
        if (arguments.length === 1 && kindOf(date) === 'string' && !/\d/.test(date)) {
          mask = date;
          date = undefined;
        }
  
        date = date || new Date;
  
        if(!(date instanceof Date)) {
          date = new Date(date);
        }
  
        if (isNaN(date)) {
          throw TypeError('Invalid date');
        }
  
        mask = String(dateFormat.masks[mask] || mask || dateFormat.masks['default']);
  
        // Allow setting the utc/gmt argument via the mask
        var maskSlice = mask.slice(0, 4);
        if (maskSlice === 'UTC:' || maskSlice === 'GMT:') {
          mask = mask.slice(4);
          utc = true;
          if (maskSlice === 'GMT:') {
            gmt = true;
          }
        }
  
        var _ = utc ? 'getUTC' : 'get';
        var d = date[_ + 'Date']();
        var D = date[_ + 'Day']();
        var m = date[_ + 'Month']();
        var y = date[_ + 'FullYear']();
        var H = date[_ + 'Hours']();
        var M = date[_ + 'Minutes']();
        var s = date[_ + 'Seconds']();
        var L = date[_ + 'Milliseconds']();
        var o = utc ? 0 : date.getTimezoneOffset();
        var W = getWeek(date);
        var N = getDayOfWeek(date);
        var flags = {
          d:    d,
          dd:   pad(d),
          ddd:  dateFormat.i18n.dayNames[D],
          dddd: dateFormat.i18n.dayNames[D + 7],
          m:    m + 1,
          mm:   pad(m + 1),
          mmm:  dateFormat.i18n.monthNames[m],
          mmmm: dateFormat.i18n.monthNames[m + 12],
          yy:   String(y).slice(2),
          yyyy: y,
          h:    H % 12 || 12,
          hh:   pad(H % 12 || 12),
          H:    H,
          HH:   pad(H),
          M:    M,
          MM:   pad(M),
          s:    s,
          ss:   pad(s),
          l:    pad(L, 3),
          L:    pad(Math.round(L / 10)),
          t:    H < 12 ? dateFormat.i18n.timeNames[0] : dateFormat.i18n.timeNames[1],
          tt:   H < 12 ? dateFormat.i18n.timeNames[2] : dateFormat.i18n.timeNames[3],
          T:    H < 12 ? dateFormat.i18n.timeNames[4] : dateFormat.i18n.timeNames[5],
          TT:   H < 12 ? dateFormat.i18n.timeNames[6] : dateFormat.i18n.timeNames[7],
          Z:    gmt ? 'GMT' : utc ? 'UTC' : (String(date).match(timezone) || ['']).pop().replace(timezoneClip, ''),
          o:    (o > 0 ? '-' : '+') + pad(Math.floor(Math.abs(o) / 60) * 100 + Math.abs(o) % 60, 4),
          S:    ['th', 'st', 'nd', 'rd'][d % 10 > 3 ? 0 : (d % 100 - d % 10 != 10) * d % 10],
          W:    W,
          N:    N
        };
  
        return mask.replace(token, function (match) {
          if (match in flags) {
            return flags[match];
          }
          return match.slice(1, match.length - 1);
        });
      };
    })();

  dateFormat.masks = {
    'default':               'ddd mmm dd yyyy HH:MM:ss',
    'shortDate':             'm/d/yy',
    'mediumDate':            'mmm d, yyyy',
    'longDate':              'mmmm d, yyyy',
    'fullDate':              'dddd, mmmm d, yyyy',
    'shortTime':             'h:MM TT',
    'mediumTime':            'h:MM:ss TT',
    'longTime':              'h:MM:ss TT Z',
    'isoDate':               'yyyy-mm-dd',
    'isoTime':               'HH:MM:ss',
    'isoDateTime':           'yyyy-mm-dd\'T\'HH:MM:sso',
    'isoUtcDateTime':        'UTC:yyyy-mm-dd\'T\'HH:MM:ss\'Z\'',
    'expiresHeaderFormat':   'ddd, dd mmm yyyy HH:MM:ss Z'
  };

  // Internationalization strings
  dateFormat.i18n = {
    dayNames: [
      'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat',
      'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
    ],
    monthNames: [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
      'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
    ],
    timeNames: [
      'a', 'p', 'am', 'pm', 'A', 'P', 'AM', 'PM'
    ]
  };

function pad(val, len) {
  val = String(val);
  len = len || 2;
  while (val.length < len) {
    val = '0' + val;
  }
  return val;
}

/**
 * Get the ISO 8601 week number
 * Based on comments from
 * http://techblog.procurios.nl/k/n618/news/view/33796/14863/Calculate-ISO-8601-week-and-year-in-javascript.html
 *
 * @param  {Object} `date`
 * @return {Number}
 */
function getWeek(date) {
  // Remove time components of date
  var targetThursday = new Date(date.getFullYear(), date.getMonth(), date.getDate());

  // Change date to Thursday same week
  targetThursday.setDate(targetThursday.getDate() - ((targetThursday.getDay() + 6) % 7) + 3);

  // Take January 4th as it is always in week 1 (see ISO 8601)
  var firstThursday = new Date(targetThursday.getFullYear(), 0, 4);

  // Change date to Thursday same week
  firstThursday.setDate(firstThursday.getDate() - ((firstThursday.getDay() + 6) % 7) + 3);

  // Check if daylight-saving-time-switch occurred and correct for it
  var ds = targetThursday.getTimezoneOffset() - firstThursday.getTimezoneOffset();
  targetThursday.setHours(targetThursday.getHours() - ds);

  // Number of weeks between target Thursday and first Thursday
  var weekDiff = (targetThursday - firstThursday) / (86400000*7);
  return 1 + Math.floor(weekDiff);
}

/**
 * Get ISO-8601 numeric representation of the day of the week
 * 1 (for Monday) through 7 (for Sunday)
 * 
 * @param  {Object} `date`
 * @return {Number}
 */
function getDayOfWeek(date) {
  var dow = date.getDay();
  if(dow === 0) {
    dow = 7;
  }
  return dow;
}

/**
 * kind-of shortcut
 * @param  {*} val
 * @return {String}
 */
function kindOf(val) {
  if (val === null) {
    return 'null';
  }

  if (val === undefined) {
    return 'undefined';
  }

  if (typeof val !== 'object') {
    return typeof val;
  }

  if (Array.isArray(val)) {
    return 'array';
  }

  return {}.toString.call(val)
    .slice(8, -1).toLowerCase();
};



  if (true) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return dateFormat;
    }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(this);


/***/ }),

/***/ "./node_modules/memoize-one/dist/memoize-one.esm.js":
/*!**********************************************************!*\
  !*** ./node_modules/memoize-one/dist/memoize-one.esm.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function areInputsEqual(newInputs, lastInputs) {
    if (newInputs.length !== lastInputs.length) {
        return false;
    }
    for (var i = 0; i < newInputs.length; i++) {
        if (newInputs[i] !== lastInputs[i]) {
            return false;
        }
    }
    return true;
}

function memoizeOne(resultFn, isEqual) {
    if (isEqual === void 0) { isEqual = areInputsEqual; }
    var lastThis;
    var lastArgs = [];
    var lastResult;
    var calledOnce = false;
    function memoized() {
        var newArgs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            newArgs[_i] = arguments[_i];
        }
        if (calledOnce && lastThis === this && isEqual(newArgs, lastArgs)) {
            return lastResult;
        }
        lastResult = resultFn.apply(this, newArgs);
        calledOnce = true;
        lastThis = this;
        lastArgs = newArgs;
        return lastResult;
    }
    return memoized;
}

/* harmony default export */ __webpack_exports__["default"] = (memoizeOne);


/***/ }),

/***/ "./node_modules/react-input-autosize/lib/AutosizeInput.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-input-autosize/lib/AutosizeInput.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var sizerStyle = {
	position: 'absolute',
	top: 0,
	left: 0,
	visibility: 'hidden',
	height: 0,
	overflow: 'scroll',
	whiteSpace: 'pre'
};

var INPUT_PROPS_BLACKLIST = ['extraWidth', 'injectStyles', 'inputClassName', 'inputRef', 'inputStyle', 'minWidth', 'onAutosize', 'placeholderIsMinWidth'];

var cleanInputProps = function cleanInputProps(inputProps) {
	INPUT_PROPS_BLACKLIST.forEach(function (field) {
		return delete inputProps[field];
	});
	return inputProps;
};

var copyStyles = function copyStyles(styles, node) {
	node.style.fontSize = styles.fontSize;
	node.style.fontFamily = styles.fontFamily;
	node.style.fontWeight = styles.fontWeight;
	node.style.fontStyle = styles.fontStyle;
	node.style.letterSpacing = styles.letterSpacing;
	node.style.textTransform = styles.textTransform;
};

var isIE = typeof window !== 'undefined' && window.navigator ? /MSIE |Trident\/|Edge\//.test(window.navigator.userAgent) : false;

var generateId = function generateId() {
	// we only need an auto-generated ID for stylesheet injection, which is only
	// used for IE. so if the browser is not IE, this should return undefined.
	return isIE ? '_' + Math.random().toString(36).substr(2, 12) : undefined;
};

var AutosizeInput = function (_Component) {
	_inherits(AutosizeInput, _Component);

	function AutosizeInput(props) {
		_classCallCheck(this, AutosizeInput);

		var _this = _possibleConstructorReturn(this, (AutosizeInput.__proto__ || Object.getPrototypeOf(AutosizeInput)).call(this, props));

		_this.inputRef = function (el) {
			_this.input = el;
			if (typeof _this.props.inputRef === 'function') {
				_this.props.inputRef(el);
			}
		};

		_this.placeHolderSizerRef = function (el) {
			_this.placeHolderSizer = el;
		};

		_this.sizerRef = function (el) {
			_this.sizer = el;
		};

		_this.state = {
			inputWidth: props.minWidth,
			inputId: props.id || generateId()
		};
		return _this;
	}

	_createClass(AutosizeInput, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.mounted = true;
			this.copyInputStyles();
			this.updateInputWidth();
		}
	}, {
		key: 'UNSAFE_componentWillReceiveProps',
		value: function UNSAFE_componentWillReceiveProps(nextProps) {
			var id = nextProps.id;

			if (id !== this.props.id) {
				this.setState({ inputId: id || generateId() });
			}
		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate(prevProps, prevState) {
			if (prevState.inputWidth !== this.state.inputWidth) {
				if (typeof this.props.onAutosize === 'function') {
					this.props.onAutosize(this.state.inputWidth);
				}
			}
			this.updateInputWidth();
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			this.mounted = false;
		}
	}, {
		key: 'copyInputStyles',
		value: function copyInputStyles() {
			if (!this.mounted || !window.getComputedStyle) {
				return;
			}
			var inputStyles = this.input && window.getComputedStyle(this.input);
			if (!inputStyles) {
				return;
			}
			copyStyles(inputStyles, this.sizer);
			if (this.placeHolderSizer) {
				copyStyles(inputStyles, this.placeHolderSizer);
			}
		}
	}, {
		key: 'updateInputWidth',
		value: function updateInputWidth() {
			if (!this.mounted || !this.sizer || typeof this.sizer.scrollWidth === 'undefined') {
				return;
			}
			var newInputWidth = void 0;
			if (this.props.placeholder && (!this.props.value || this.props.value && this.props.placeholderIsMinWidth)) {
				newInputWidth = Math.max(this.sizer.scrollWidth, this.placeHolderSizer.scrollWidth) + 2;
			} else {
				newInputWidth = this.sizer.scrollWidth + 2;
			}
			// add extraWidth to the detected width. for number types, this defaults to 16 to allow for the stepper UI
			var extraWidth = this.props.type === 'number' && this.props.extraWidth === undefined ? 16 : parseInt(this.props.extraWidth) || 0;
			newInputWidth += extraWidth;
			if (newInputWidth < this.props.minWidth) {
				newInputWidth = this.props.minWidth;
			}
			if (newInputWidth !== this.state.inputWidth) {
				this.setState({
					inputWidth: newInputWidth
				});
			}
		}
	}, {
		key: 'getInput',
		value: function getInput() {
			return this.input;
		}
	}, {
		key: 'focus',
		value: function focus() {
			this.input.focus();
		}
	}, {
		key: 'blur',
		value: function blur() {
			this.input.blur();
		}
	}, {
		key: 'select',
		value: function select() {
			this.input.select();
		}
	}, {
		key: 'renderStyles',
		value: function renderStyles() {
			// this method injects styles to hide IE's clear indicator, which messes
			// with input size detection. the stylesheet is only injected when the
			// browser is IE, and can also be disabled by the `injectStyles` prop.
			var injectStyles = this.props.injectStyles;

			return isIE && injectStyles ? _react2.default.createElement('style', { dangerouslySetInnerHTML: {
					__html: 'input#' + this.state.inputId + '::-ms-clear {display: none;}'
				} }) : null;
		}
	}, {
		key: 'render',
		value: function render() {
			var sizerValue = [this.props.defaultValue, this.props.value, ''].reduce(function (previousValue, currentValue) {
				if (previousValue !== null && previousValue !== undefined) {
					return previousValue;
				}
				return currentValue;
			});

			var wrapperStyle = _extends({}, this.props.style);
			if (!wrapperStyle.display) wrapperStyle.display = 'inline-block';

			var inputStyle = _extends({
				boxSizing: 'content-box',
				width: this.state.inputWidth + 'px'
			}, this.props.inputStyle);

			var inputProps = _objectWithoutProperties(this.props, []);

			cleanInputProps(inputProps);
			inputProps.className = this.props.inputClassName;
			inputProps.id = this.state.inputId;
			inputProps.style = inputStyle;

			return _react2.default.createElement(
				'div',
				{ className: this.props.className, style: wrapperStyle },
				this.renderStyles(),
				_react2.default.createElement('input', _extends({}, inputProps, { ref: this.inputRef })),
				_react2.default.createElement(
					'div',
					{ ref: this.sizerRef, style: sizerStyle },
					sizerValue
				),
				this.props.placeholder ? _react2.default.createElement(
					'div',
					{ ref: this.placeHolderSizerRef, style: sizerStyle },
					this.props.placeholder
				) : null
			);
		}
	}]);

	return AutosizeInput;
}(_react.Component);

AutosizeInput.propTypes = {
	className: _propTypes2.default.string, // className for the outer element
	defaultValue: _propTypes2.default.any, // default field value
	extraWidth: _propTypes2.default.oneOfType([// additional width for input element
	_propTypes2.default.number, _propTypes2.default.string]),
	id: _propTypes2.default.string, // id to use for the input, can be set for consistent snapshots
	injectStyles: _propTypes2.default.bool, // inject the custom stylesheet to hide clear UI, defaults to true
	inputClassName: _propTypes2.default.string, // className for the input element
	inputRef: _propTypes2.default.func, // ref callback for the input element
	inputStyle: _propTypes2.default.object, // css styles for the input element
	minWidth: _propTypes2.default.oneOfType([// minimum width for input element
	_propTypes2.default.number, _propTypes2.default.string]),
	onAutosize: _propTypes2.default.func, // onAutosize handler: function(newWidth) {}
	onChange: _propTypes2.default.func, // onChange handler: function(event) {}
	placeholder: _propTypes2.default.string, // placeholder text
	placeholderIsMinWidth: _propTypes2.default.bool, // don't collapse size to less than the placeholder
	style: _propTypes2.default.object, // css styles for the outer element
	value: _propTypes2.default.any // field value
};
AutosizeInput.defaultProps = {
	minWidth: 1,
	injectStyles: true
};

exports.default = AutosizeInput;

/***/ }),

/***/ "./node_modules/react-select/dist/base/dist/react-select-cac0a5ae.browser.esm.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/react-select/dist/base/dist/react-select-cac0a5ae.browser.esm.js ***!
  \***************************************************************************************/
/*! exports provided: S, a, c, d, m */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return Select; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return defaultTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return defaultProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return mergeStyles; });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread */ "./node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! memoize-one */ "./node_modules/memoize-one/dist/memoize-one.esm.js");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _chunk_39d3fda8_browser_esm_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../chunk-39d3fda8.browser.esm.js */ "./node_modules/react-select/dist/chunk-39d3fda8.browser.esm.js");
/* harmony import */ var _chunk_80640036_browser_esm_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../chunk-80640036.browser.esm.js */ "./node_modules/react-select/dist/chunk-80640036.browser.esm.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @emotion/css */ "./node_modules/@emotion/css/dist/css.browser.esm.js");



















var diacritics = [{
  base: 'A',
  letters: /[\u0041\u24B6\uFF21\u00C0\u00C1\u00C2\u1EA6\u1EA4\u1EAA\u1EA8\u00C3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\u00C4\u01DE\u1EA2\u00C5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F]/g
}, {
  base: 'AA',
  letters: /[\uA732]/g
}, {
  base: 'AE',
  letters: /[\u00C6\u01FC\u01E2]/g
}, {
  base: 'AO',
  letters: /[\uA734]/g
}, {
  base: 'AU',
  letters: /[\uA736]/g
}, {
  base: 'AV',
  letters: /[\uA738\uA73A]/g
}, {
  base: 'AY',
  letters: /[\uA73C]/g
}, {
  base: 'B',
  letters: /[\u0042\u24B7\uFF22\u1E02\u1E04\u1E06\u0243\u0182\u0181]/g
}, {
  base: 'C',
  letters: /[\u0043\u24B8\uFF23\u0106\u0108\u010A\u010C\u00C7\u1E08\u0187\u023B\uA73E]/g
}, {
  base: 'D',
  letters: /[\u0044\u24B9\uFF24\u1E0A\u010E\u1E0C\u1E10\u1E12\u1E0E\u0110\u018B\u018A\u0189\uA779]/g
}, {
  base: 'DZ',
  letters: /[\u01F1\u01C4]/g
}, {
  base: 'Dz',
  letters: /[\u01F2\u01C5]/g
}, {
  base: 'E',
  letters: /[\u0045\u24BA\uFF25\u00C8\u00C9\u00CA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\u00CB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E]/g
}, {
  base: 'F',
  letters: /[\u0046\u24BB\uFF26\u1E1E\u0191\uA77B]/g
}, {
  base: 'G',
  letters: /[\u0047\u24BC\uFF27\u01F4\u011C\u1E20\u011E\u0120\u01E6\u0122\u01E4\u0193\uA7A0\uA77D\uA77E]/g
}, {
  base: 'H',
  letters: /[\u0048\u24BD\uFF28\u0124\u1E22\u1E26\u021E\u1E24\u1E28\u1E2A\u0126\u2C67\u2C75\uA78D]/g
}, {
  base: 'I',
  letters: /[\u0049\u24BE\uFF29\u00CC\u00CD\u00CE\u0128\u012A\u012C\u0130\u00CF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197]/g
}, {
  base: 'J',
  letters: /[\u004A\u24BF\uFF2A\u0134\u0248]/g
}, {
  base: 'K',
  letters: /[\u004B\u24C0\uFF2B\u1E30\u01E8\u1E32\u0136\u1E34\u0198\u2C69\uA740\uA742\uA744\uA7A2]/g
}, {
  base: 'L',
  letters: /[\u004C\u24C1\uFF2C\u013F\u0139\u013D\u1E36\u1E38\u013B\u1E3C\u1E3A\u0141\u023D\u2C62\u2C60\uA748\uA746\uA780]/g
}, {
  base: 'LJ',
  letters: /[\u01C7]/g
}, {
  base: 'Lj',
  letters: /[\u01C8]/g
}, {
  base: 'M',
  letters: /[\u004D\u24C2\uFF2D\u1E3E\u1E40\u1E42\u2C6E\u019C]/g
}, {
  base: 'N',
  letters: /[\u004E\u24C3\uFF2E\u01F8\u0143\u00D1\u1E44\u0147\u1E46\u0145\u1E4A\u1E48\u0220\u019D\uA790\uA7A4]/g
}, {
  base: 'NJ',
  letters: /[\u01CA]/g
}, {
  base: 'Nj',
  letters: /[\u01CB]/g
}, {
  base: 'O',
  letters: /[\u004F\u24C4\uFF2F\u00D2\u00D3\u00D4\u1ED2\u1ED0\u1ED6\u1ED4\u00D5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\u00D6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\u00D8\u01FE\u0186\u019F\uA74A\uA74C]/g
}, {
  base: 'OI',
  letters: /[\u01A2]/g
}, {
  base: 'OO',
  letters: /[\uA74E]/g
}, {
  base: 'OU',
  letters: /[\u0222]/g
}, {
  base: 'P',
  letters: /[\u0050\u24C5\uFF30\u1E54\u1E56\u01A4\u2C63\uA750\uA752\uA754]/g
}, {
  base: 'Q',
  letters: /[\u0051\u24C6\uFF31\uA756\uA758\u024A]/g
}, {
  base: 'R',
  letters: /[\u0052\u24C7\uFF32\u0154\u1E58\u0158\u0210\u0212\u1E5A\u1E5C\u0156\u1E5E\u024C\u2C64\uA75A\uA7A6\uA782]/g
}, {
  base: 'S',
  letters: /[\u0053\u24C8\uFF33\u1E9E\u015A\u1E64\u015C\u1E60\u0160\u1E66\u1E62\u1E68\u0218\u015E\u2C7E\uA7A8\uA784]/g
}, {
  base: 'T',
  letters: /[\u0054\u24C9\uFF34\u1E6A\u0164\u1E6C\u021A\u0162\u1E70\u1E6E\u0166\u01AC\u01AE\u023E\uA786]/g
}, {
  base: 'TZ',
  letters: /[\uA728]/g
}, {
  base: 'U',
  letters: /[\u0055\u24CA\uFF35\u00D9\u00DA\u00DB\u0168\u1E78\u016A\u1E7A\u016C\u00DC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244]/g
}, {
  base: 'V',
  letters: /[\u0056\u24CB\uFF36\u1E7C\u1E7E\u01B2\uA75E\u0245]/g
}, {
  base: 'VY',
  letters: /[\uA760]/g
}, {
  base: 'W',
  letters: /[\u0057\u24CC\uFF37\u1E80\u1E82\u0174\u1E86\u1E84\u1E88\u2C72]/g
}, {
  base: 'X',
  letters: /[\u0058\u24CD\uFF38\u1E8A\u1E8C]/g
}, {
  base: 'Y',
  letters: /[\u0059\u24CE\uFF39\u1EF2\u00DD\u0176\u1EF8\u0232\u1E8E\u0178\u1EF6\u1EF4\u01B3\u024E\u1EFE]/g
}, {
  base: 'Z',
  letters: /[\u005A\u24CF\uFF3A\u0179\u1E90\u017B\u017D\u1E92\u1E94\u01B5\u0224\u2C7F\u2C6B\uA762]/g
}, {
  base: 'a',
  letters: /[\u0061\u24D0\uFF41\u1E9A\u00E0\u00E1\u00E2\u1EA7\u1EA5\u1EAB\u1EA9\u00E3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\u00E4\u01DF\u1EA3\u00E5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250]/g
}, {
  base: 'aa',
  letters: /[\uA733]/g
}, {
  base: 'ae',
  letters: /[\u00E6\u01FD\u01E3]/g
}, {
  base: 'ao',
  letters: /[\uA735]/g
}, {
  base: 'au',
  letters: /[\uA737]/g
}, {
  base: 'av',
  letters: /[\uA739\uA73B]/g
}, {
  base: 'ay',
  letters: /[\uA73D]/g
}, {
  base: 'b',
  letters: /[\u0062\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253]/g
}, {
  base: 'c',
  letters: /[\u0063\u24D2\uFF43\u0107\u0109\u010B\u010D\u00E7\u1E09\u0188\u023C\uA73F\u2184]/g
}, {
  base: 'd',
  letters: /[\u0064\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\uA77A]/g
}, {
  base: 'dz',
  letters: /[\u01F3\u01C6]/g
}, {
  base: 'e',
  letters: /[\u0065\u24D4\uFF45\u00E8\u00E9\u00EA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\u00EB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u025B\u01DD]/g
}, {
  base: 'f',
  letters: /[\u0066\u24D5\uFF46\u1E1F\u0192\uA77C]/g
}, {
  base: 'g',
  letters: /[\u0067\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\u1D79\uA77F]/g
}, {
  base: 'h',
  letters: /[\u0068\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265]/g
}, {
  base: 'hv',
  letters: /[\u0195]/g
}, {
  base: 'i',
  letters: /[\u0069\u24D8\uFF49\u00EC\u00ED\u00EE\u0129\u012B\u012D\u00EF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131]/g
}, {
  base: 'j',
  letters: /[\u006A\u24D9\uFF4A\u0135\u01F0\u0249]/g
}, {
  base: 'k',
  letters: /[\u006B\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3]/g
}, {
  base: 'l',
  letters: /[\u006C\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u017F\u0142\u019A\u026B\u2C61\uA749\uA781\uA747]/g
}, {
  base: 'lj',
  letters: /[\u01C9]/g
}, {
  base: 'm',
  letters: /[\u006D\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F]/g
}, {
  base: 'n',
  letters: /[\u006E\u24DD\uFF4E\u01F9\u0144\u00F1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5]/g
}, {
  base: 'nj',
  letters: /[\u01CC]/g
}, {
  base: 'o',
  letters: /[\u006F\u24DE\uFF4F\u00F2\u00F3\u00F4\u1ED3\u1ED1\u1ED7\u1ED5\u00F5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\u00F6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\u00F8\u01FF\u0254\uA74B\uA74D\u0275]/g
}, {
  base: 'oi',
  letters: /[\u01A3]/g
}, {
  base: 'ou',
  letters: /[\u0223]/g
}, {
  base: 'oo',
  letters: /[\uA74F]/g
}, {
  base: 'p',
  letters: /[\u0070\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755]/g
}, {
  base: 'q',
  letters: /[\u0071\u24E0\uFF51\u024B\uA757\uA759]/g
}, {
  base: 'r',
  letters: /[\u0072\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783]/g
}, {
  base: 's',
  letters: /[\u0073\u24E2\uFF53\u00DF\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B]/g
}, {
  base: 't',
  letters: /[\u0074\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787]/g
}, {
  base: 'tz',
  letters: /[\uA729]/g
}, {
  base: 'u',
  letters: /[\u0075\u24E4\uFF55\u00F9\u00FA\u00FB\u0169\u1E79\u016B\u1E7B\u016D\u00FC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289]/g
}, {
  base: 'v',
  letters: /[\u0076\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C]/g
}, {
  base: 'vy',
  letters: /[\uA761]/g
}, {
  base: 'w',
  letters: /[\u0077\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73]/g
}, {
  base: 'x',
  letters: /[\u0078\u24E7\uFF58\u1E8B\u1E8D]/g
}, {
  base: 'y',
  letters: /[\u0079\u24E8\uFF59\u1EF3\u00FD\u0177\u1EF9\u0233\u1E8F\u00FF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF]/g
}, {
  base: 'z',
  letters: /[\u007A\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763]/g
}];
var stripDiacritics = function stripDiacritics(str) {
  for (var i = 0; i < diacritics.length; i++) {
    str = str.replace(diacritics[i].letters, diacritics[i].base);
  }

  return str;
};

var trimString = function trimString(str) {
  return str.replace(/^\s+|\s+$/g, '');
};

var defaultStringify = function defaultStringify(option) {
  return "".concat(option.label, " ").concat(option.value);
};

var createFilter = function createFilter(config) {
  return function (option, rawInput) {
    var _ignoreCase$ignoreAcc = Object(_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_3__["default"])({
      ignoreCase: true,
      ignoreAccents: true,
      stringify: defaultStringify,
      trim: true,
      matchFrom: 'any'
    }, config),
        ignoreCase = _ignoreCase$ignoreAcc.ignoreCase,
        ignoreAccents = _ignoreCase$ignoreAcc.ignoreAccents,
        stringify = _ignoreCase$ignoreAcc.stringify,
        trim = _ignoreCase$ignoreAcc.trim,
        matchFrom = _ignoreCase$ignoreAcc.matchFrom;

    var input = trim ? trimString(rawInput) : rawInput;
    var candidate = trim ? trimString(stringify(option)) : stringify(option);

    if (ignoreCase) {
      input = input.toLowerCase();
      candidate = candidate.toLowerCase();
    }

    if (ignoreAccents) {
      input = stripDiacritics(input);
      candidate = stripDiacritics(candidate);
    }

    return matchFrom === 'start' ? candidate.substr(0, input.length) === input : candidate.indexOf(input) > -1;
  };
};

var _ref =  false ? undefined : {
  name: "1laao21-a11yText",
  styles: "label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkExMXlUZXh0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVFNIiwiZmlsZSI6IkExMXlUZXh0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQGZsb3dcbi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsgdHlwZSBFbGVtZW50Q29uZmlnIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsganN4IH0gZnJvbSAnQGVtb3Rpb24vY29yZSc7XG5cbi8vIEFzc2lzdGl2ZSB0ZXh0IHRvIGRlc2NyaWJlIHZpc3VhbCBlbGVtZW50cy4gSGlkZGVuIGZvciBzaWdodGVkIHVzZXJzLlxuY29uc3QgQTExeVRleHQgPSAocHJvcHM6IEVsZW1lbnRDb25maWc8J3NwYW4nPikgPT4gKFxuICAgIDxzcGFuXG4gICAgICBjc3M9e3tcbiAgICAgICAgbGFiZWw6ICdhMTF5VGV4dCcsXG4gICAgICAgIHpJbmRleDogOTk5OSxcbiAgICAgICAgYm9yZGVyOiAwLFxuICAgICAgICBjbGlwOiAncmVjdCgxcHgsIDFweCwgMXB4LCAxcHgpJyxcbiAgICAgICAgaGVpZ2h0OiAxLFxuICAgICAgICB3aWR0aDogMSxcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgcGFkZGluZzogMCxcbiAgICAgICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXG4gICAgICB9fVxuICAgICAgey4uLnByb3BzfVxuICAgIC8+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBBMTF5VGV4dDtcbiJdfQ== */"
};

var A11yText = function A11yText(props) {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_13__["jsx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    css: _ref
  }, props));
};

var DummyInput =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(DummyInput, _Component);

  function DummyInput() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, DummyInput);

    return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(DummyInput).apply(this, arguments));
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(DummyInput, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          inProp = _this$props.in,
          out = _this$props.out,
          onExited = _this$props.onExited,
          appear = _this$props.appear,
          enter = _this$props.enter,
          exit = _this$props.exit,
          innerRef = _this$props.innerRef,
          emotion = _this$props.emotion,
          props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_this$props, ["in", "out", "onExited", "appear", "enter", "exit", "innerRef", "emotion"]);

      return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_13__["jsx"])("input", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
        ref: innerRef
      }, props, {
        css:
        /*#__PURE__*/
        Object(_emotion_css__WEBPACK_IMPORTED_MODULE_17__["default"])({
          label: 'dummyInput',
          // get rid of any default styles
          background: 0,
          border: 0,
          fontSize: 'inherit',
          outline: 0,
          padding: 0,
          // important! without `width` browsers won't allow focus
          width: 1,
          // remove cursor on desktop
          color: 'transparent',
          // remove cursor on mobile whilst maintaining "scroll into view" behaviour
          left: -100,
          opacity: 0,
          position: 'relative',
          transform: 'scale(0)'
        },  false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkR1bW15SW5wdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBWVEiLCJmaWxlIjoiRHVtbXlJbnB1dC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEBmbG93XG4vKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGpzeCB9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEdW1teUlucHV0IGV4dGVuZHMgQ29tcG9uZW50PGFueT4ge1xuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IHsgaW46IGluUHJvcCwgb3V0LCBvbkV4aXRlZCwgYXBwZWFyLCBlbnRlciwgZXhpdCwgaW5uZXJSZWYsIGVtb3Rpb24sIC4uLnByb3BzIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybihcbiAgICAgIDxpbnB1dFxuICAgICAgICByZWY9e2lubmVyUmVmfVxuICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgIGNzcz17e1xuICAgICAgICAgIGxhYmVsOiAnZHVtbXlJbnB1dCcsXG4gICAgICAgICAgLy8gZ2V0IHJpZCBvZiBhbnkgZGVmYXVsdCBzdHlsZXNcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAwLFxuICAgICAgICAgIGJvcmRlcjogMCxcbiAgICAgICAgICBmb250U2l6ZTogJ2luaGVyaXQnLFxuICAgICAgICAgIG91dGxpbmU6IDAsXG4gICAgICAgICAgcGFkZGluZzogMCxcbiAgICAgICAgICAvLyBpbXBvcnRhbnQhIHdpdGhvdXQgYHdpZHRoYCBicm93c2VycyB3b24ndCBhbGxvdyBmb2N1c1xuICAgICAgICAgIHdpZHRoOiAxLFxuXG4gICAgICAgICAgLy8gcmVtb3ZlIGN1cnNvciBvbiBkZXNrdG9wXG4gICAgICAgICAgY29sb3I6ICd0cmFuc3BhcmVudCcsXG5cbiAgICAgICAgICAvLyByZW1vdmUgY3Vyc29yIG9uIG1vYmlsZSB3aGlsc3QgbWFpbnRhaW5pbmcgXCJzY3JvbGwgaW50byB2aWV3XCIgYmVoYXZpb3VyXG4gICAgICAgICAgbGVmdDogLTEwMCxcbiAgICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICAgIHRyYW5zZm9ybTogJ3NjYWxlKDApJyxcbiAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgKTtcbiAgfVxufVxuIl19 */")
      }));
    }
  }]);

  return DummyInput;
}(react__WEBPACK_IMPORTED_MODULE_11__["Component"]);

var NodeResolver =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(NodeResolver, _Component);

  function NodeResolver() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, NodeResolver);

    return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(NodeResolver).apply(this, arguments));
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(NodeResolver, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.innerRef(Object(react_dom__WEBPACK_IMPORTED_MODULE_14__["findDOMNode"])(this));
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.props.innerRef(null);
    }
  }, {
    key: "render",
    value: function render() {
      return this.props.children;
    }
  }]);

  return NodeResolver;
}(react__WEBPACK_IMPORTED_MODULE_11__["Component"]);

var STYLE_KEYS = ['boxSizing', 'height', 'overflow', 'paddingRight', 'position'];
var LOCK_STYLES = {
  boxSizing: 'border-box',
  // account for possible declaration `width: 100%;` on body
  overflow: 'hidden',
  position: 'relative',
  height: '100%'
};

function preventTouchMove(e) {
  e.preventDefault();
}
function allowTouchMove(e) {
  e.stopPropagation();
}
function preventInertiaScroll() {
  var top = this.scrollTop;
  var totalScroll = this.scrollHeight;
  var currentScroll = top + this.offsetHeight;

  if (top === 0) {
    this.scrollTop = 1;
  } else if (currentScroll === totalScroll) {
    this.scrollTop = top - 1;
  }
} // `ontouchstart` check works on most browsers
// `maxTouchPoints` works on IE10/11 and Surface

function isTouchDevice() {
  return 'ontouchstart' in window || navigator.maxTouchPoints;
}

var canUseDOM = !!(window.document && window.document.createElement);
var activeScrollLocks = 0;

var ScrollLock =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(ScrollLock, _Component);

  function ScrollLock() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, ScrollLock);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(ScrollLock)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "originalStyles", {});

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "listenerOptions", {
      capture: false,
      passive: false
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(ScrollLock, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      if (!canUseDOM) return;
      var _this$props = this.props,
          accountForScrollbars = _this$props.accountForScrollbars,
          touchScrollTarget = _this$props.touchScrollTarget;
      var target = document.body;
      var targetStyle = target && target.style;

      if (accountForScrollbars) {
        // store any styles already applied to the body
        STYLE_KEYS.forEach(function (key) {
          var val = targetStyle && targetStyle[key];
          _this2.originalStyles[key] = val;
        });
      } // apply the lock styles and padding if this is the first scroll lock


      if (accountForScrollbars && activeScrollLocks < 1) {
        var currentPadding = parseInt(this.originalStyles.paddingRight, 10) || 0;
        var clientWidth = document.body ? document.body.clientWidth : 0;
        var adjustedPadding = window.innerWidth - clientWidth + currentPadding || 0;
        Object.keys(LOCK_STYLES).forEach(function (key) {
          var val = LOCK_STYLES[key];

          if (targetStyle) {
            targetStyle[key] = val;
          }
        });

        if (targetStyle) {
          targetStyle.paddingRight = "".concat(adjustedPadding, "px");
        }
      } // account for touch devices


      if (target && isTouchDevice()) {
        // Mobile Safari ignores { overflow: hidden } declaration on the body.
        target.addEventListener('touchmove', preventTouchMove, this.listenerOptions); // Allow scroll on provided target

        if (touchScrollTarget) {
          touchScrollTarget.addEventListener('touchstart', preventInertiaScroll, this.listenerOptions);
          touchScrollTarget.addEventListener('touchmove', allowTouchMove, this.listenerOptions);
        }
      } // increment active scroll locks


      activeScrollLocks += 1;
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var _this3 = this;

      if (!canUseDOM) return;
      var _this$props2 = this.props,
          accountForScrollbars = _this$props2.accountForScrollbars,
          touchScrollTarget = _this$props2.touchScrollTarget;
      var target = document.body;
      var targetStyle = target && target.style; // safely decrement active scroll locks

      activeScrollLocks = Math.max(activeScrollLocks - 1, 0); // reapply original body styles, if any

      if (accountForScrollbars && activeScrollLocks < 1) {
        STYLE_KEYS.forEach(function (key) {
          var val = _this3.originalStyles[key];

          if (targetStyle) {
            targetStyle[key] = val;
          }
        });
      } // remove touch listeners


      if (target && isTouchDevice()) {
        target.removeEventListener('touchmove', preventTouchMove, this.listenerOptions);

        if (touchScrollTarget) {
          touchScrollTarget.removeEventListener('touchstart', preventInertiaScroll, this.listenerOptions);
          touchScrollTarget.removeEventListener('touchmove', allowTouchMove, this.listenerOptions);
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);

  return ScrollLock;
}(react__WEBPACK_IMPORTED_MODULE_11__["Component"]);

Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(ScrollLock, "defaultProps", {
  accountForScrollbars: true
});

var _ref$1 =  false ? undefined : {
  name: "1dsbpcp",
  styles: "position:fixed;left:0;bottom:0;right:0;top:0;",
  map: ""
};

// NOTE:
// We shouldn't need this after updating to React v16.3.0, which introduces:
// - createRef() https://reactjs.org/docs/react-api.html#reactcreateref
// - forwardRef() https://reactjs.org/docs/react-api.html#reactforwardref
var ScrollBlock =
/*#__PURE__*/
function (_PureComponent) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(ScrollBlock, _PureComponent);

  function ScrollBlock() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, ScrollBlock);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(ScrollBlock)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "state", {
      touchScrollTarget: null
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "getScrollTarget", function (ref) {
      if (ref === _this.state.touchScrollTarget) return;

      _this.setState({
        touchScrollTarget: ref
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "blurSelectInput", function () {
      if (document.activeElement) {
        document.activeElement.blur();
      }
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(ScrollBlock, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          isEnabled = _this$props.isEnabled;
      var touchScrollTarget = this.state.touchScrollTarget; // bail early if not enabled

      if (!isEnabled) return children;
      /*
       * Div
       * ------------------------------
       * blocks scrolling on non-body elements behind the menu
        * NodeResolver
       * ------------------------------
       * we need a reference to the scrollable element to "unlock" scroll on
       * mobile devices
        * ScrollLock
       * ------------------------------
       * actually does the scroll locking
       */

      return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_13__["jsx"])("div", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_13__["jsx"])("div", {
        onClick: this.blurSelectInput,
        css: _ref$1
      }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_13__["jsx"])(NodeResolver, {
        innerRef: this.getScrollTarget
      }, children), touchScrollTarget ? Object(_emotion_core__WEBPACK_IMPORTED_MODULE_13__["jsx"])(ScrollLock, {
        touchScrollTarget: touchScrollTarget
      }) : null);
    }
  }]);

  return ScrollBlock;
}(react__WEBPACK_IMPORTED_MODULE_11__["PureComponent"]);

var ScrollCaptor =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(ScrollCaptor, _Component);

  function ScrollCaptor() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, ScrollCaptor);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(ScrollCaptor)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "isBottom", false);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "isTop", false);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "scrollTarget", void 0);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "touchStart", void 0);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "cancelScroll", function (event) {
      event.preventDefault();
      event.stopPropagation();
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "handleEventDelta", function (event, delta) {
      var _this$props = _this.props,
          onBottomArrive = _this$props.onBottomArrive,
          onBottomLeave = _this$props.onBottomLeave,
          onTopArrive = _this$props.onTopArrive,
          onTopLeave = _this$props.onTopLeave;
      var _this$scrollTarget = _this.scrollTarget,
          scrollTop = _this$scrollTarget.scrollTop,
          scrollHeight = _this$scrollTarget.scrollHeight,
          clientHeight = _this$scrollTarget.clientHeight;
      var target = _this.scrollTarget;
      var isDeltaPositive = delta > 0;
      var availableScroll = scrollHeight - clientHeight - scrollTop;
      var shouldCancelScroll = false; // reset bottom/top flags

      if (availableScroll > delta && _this.isBottom) {
        if (onBottomLeave) onBottomLeave(event);
        _this.isBottom = false;
      }

      if (isDeltaPositive && _this.isTop) {
        if (onTopLeave) onTopLeave(event);
        _this.isTop = false;
      } // bottom limit


      if (isDeltaPositive && delta > availableScroll) {
        if (onBottomArrive && !_this.isBottom) {
          onBottomArrive(event);
        }

        target.scrollTop = scrollHeight;
        shouldCancelScroll = true;
        _this.isBottom = true; // top limit
      } else if (!isDeltaPositive && -delta > scrollTop) {
        if (onTopArrive && !_this.isTop) {
          onTopArrive(event);
        }

        target.scrollTop = 0;
        shouldCancelScroll = true;
        _this.isTop = true;
      } // cancel scroll


      if (shouldCancelScroll) {
        _this.cancelScroll(event);
      }
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "onWheel", function (event) {
      _this.handleEventDelta(event, event.deltaY);
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "onTouchStart", function (event) {
      // set touch start so we can calculate touchmove delta
      _this.touchStart = event.changedTouches[0].clientY;
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "onTouchMove", function (event) {
      var deltaY = _this.touchStart - event.changedTouches[0].clientY;

      _this.handleEventDelta(event, deltaY);
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "getScrollTarget", function (ref) {
      _this.scrollTarget = ref;
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(ScrollCaptor, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.startListening(this.scrollTarget);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.stopListening(this.scrollTarget);
    }
  }, {
    key: "startListening",
    value: function startListening(el) {
      // bail early if no element is available to attach to
      if (!el) return; // all the if statements are to appease Flow 😢

      if (typeof el.addEventListener === 'function') {
        el.addEventListener('wheel', this.onWheel, false);
      }

      if (typeof el.addEventListener === 'function') {
        el.addEventListener('touchstart', this.onTouchStart, false);
      }

      if (typeof el.addEventListener === 'function') {
        el.addEventListener('touchmove', this.onTouchMove, false);
      }
    }
  }, {
    key: "stopListening",
    value: function stopListening(el) {
      // all the if statements are to appease Flow 😢
      if (typeof el.removeEventListener === 'function') {
        el.removeEventListener('wheel', this.onWheel, false);
      }

      if (typeof el.removeEventListener === 'function') {
        el.removeEventListener('touchstart', this.onTouchStart, false);
      }

      if (typeof el.removeEventListener === 'function') {
        el.removeEventListener('touchmove', this.onTouchMove, false);
      }
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(NodeResolver, {
        innerRef: this.getScrollTarget
      }, this.props.children);
    }
  }]);

  return ScrollCaptor;
}(react__WEBPACK_IMPORTED_MODULE_11__["Component"]);

var ScrollCaptorSwitch =
/*#__PURE__*/
function (_Component2) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(ScrollCaptorSwitch, _Component2);

  function ScrollCaptorSwitch() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, ScrollCaptorSwitch);

    return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(ScrollCaptorSwitch).apply(this, arguments));
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(ScrollCaptorSwitch, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          isEnabled = _this$props2.isEnabled,
          props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_this$props2, ["isEnabled"]);

      return isEnabled ? react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(ScrollCaptor, props) : this.props.children;
    }
  }]);

  return ScrollCaptorSwitch;
}(react__WEBPACK_IMPORTED_MODULE_11__["Component"]);

Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(ScrollCaptorSwitch, "defaultProps", {
  isEnabled: true
});

var instructionsAriaMessage = function instructionsAriaMessage(event) {
  var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var isSearchable = context.isSearchable,
      isMulti = context.isMulti,
      label = context.label,
      isDisabled = context.isDisabled;

  switch (event) {
    case 'menu':
      return "Use Up and Down to choose options".concat(isDisabled ? '' : ', press Enter to select the currently focused option', ", press Escape to exit the menu, press Tab to select the option and exit the menu.");

    case 'input':
      return "".concat(label ? label : 'Select', " is focused ").concat(isSearchable ? ',type to refine list' : '', ", press Down to open the menu, ").concat(isMulti ? ' press left to focus selected values' : '');

    case 'value':
      return 'Use left and right to toggle between focused values, press Backspace to remove the currently focused value';
  }
};
var valueEventAriaMessage = function valueEventAriaMessage(event, context) {
  var value = context.value,
      isDisabled = context.isDisabled;
  if (!value) return;

  switch (event) {
    case 'deselect-option':
    case 'pop-value':
    case 'remove-value':
      return "option ".concat(value, ", deselected.");

    case 'select-option':
      return isDisabled ? "option ".concat(value, " is disabled. Select another option.") : "option ".concat(value, ", selected.");
  }
};
var valueFocusAriaMessage = function valueFocusAriaMessage(_ref) {
  var focusedValue = _ref.focusedValue,
      getOptionLabel = _ref.getOptionLabel,
      selectValue = _ref.selectValue;
  return "value ".concat(getOptionLabel(focusedValue), " focused, ").concat(selectValue.indexOf(focusedValue) + 1, " of ").concat(selectValue.length, ".");
};
var optionFocusAriaMessage = function optionFocusAriaMessage(_ref2) {
  var focusedOption = _ref2.focusedOption,
      getOptionLabel = _ref2.getOptionLabel,
      options = _ref2.options;
  return "option ".concat(getOptionLabel(focusedOption), " focused").concat(focusedOption.isDisabled ? ' disabled' : '', ", ").concat(options.indexOf(focusedOption) + 1, " of ").concat(options.length, ".");
};
var resultsAriaMessage = function resultsAriaMessage(_ref3) {
  var inputValue = _ref3.inputValue,
      screenReaderMessage = _ref3.screenReaderMessage;
  return "".concat(screenReaderMessage).concat(inputValue ? ' for search term ' + inputValue : '', ".");
};

var formatGroupLabel = function formatGroupLabel(group) {
  return group.label;
};
var getOptionLabel = function getOptionLabel(option) {
  return option.label;
};
var getOptionValue = function getOptionValue(option) {
  return option.value;
};
var isOptionDisabled = function isOptionDisabled(option) {
  return !!option.isDisabled;
};

var defaultStyles = {
  clearIndicator: _chunk_80640036_browser_esm_js__WEBPACK_IMPORTED_MODULE_16__["c"],
  container: _chunk_80640036_browser_esm_js__WEBPACK_IMPORTED_MODULE_16__["a"],
  control: _chunk_80640036_browser_esm_js__WEBPACK_IMPORTED_MODULE_16__["b"],
  dropdownIndicator: _chunk_80640036_browser_esm_js__WEBPACK_IMPORTED_MODULE_16__["d"],
  group: _chunk_80640036_browser_esm_js__WEBPACK_IMPORTED_MODULE_16__["g"],
  groupHeading: _chunk_80640036_browser_esm_js__WEBPACK_IMPORTED_MODULE_16__["e"],
  indicatorsContainer: _chunk_80640036_browser_esm_js__WEBPACK_IMPORTED_MODULE_16__["i"],
  indicatorSeparator: _chunk_80640036_browser_esm_js__WEBPACK_IMPORTED_MODULE_16__["f"],
  input: _chunk_80640036_browser_esm_js__WEBPACK_IMPORTED_MODULE_16__["h"],
  loadingIndicator: _chunk_80640036_browser_esm_js__WEBPACK_IMPORTED_MODULE_16__["l"],
  loadingMessage: _chunk_80640036_browser_esm_js__WEBPACK_IMPORTED_MODULE_16__["j"],
  menu: _chunk_80640036_browser_esm_js__WEBPACK_IMPORTED_MODULE_16__["m"],
  menuList: _chunk_80640036_browser_esm_js__WEBPACK_IMPORTED_MODULE_16__["k"],
  menuPortal: _chunk_80640036_browser_esm_js__WEBPACK_IMPORTED_MODULE_16__["n"],
  multiValue: _chunk_80640036_browser_esm_js__WEBPACK_IMPORTED_MODULE_16__["o"],
  multiValueLabel: _chunk_80640036_browser_esm_js__WEBPACK_IMPORTED_MODULE_16__["p"],
  multiValueRemove: _chunk_80640036_browser_esm_js__WEBPACK_IMPORTED_MODULE_16__["q"],
  noOptionsMessage: _chunk_80640036_browser_esm_js__WEBPACK_IMPORTED_MODULE_16__["r"],
  option: _chunk_80640036_browser_esm_js__WEBPACK_IMPORTED_MODULE_16__["s"],
  placeholder: _chunk_80640036_browser_esm_js__WEBPACK_IMPORTED_MODULE_16__["t"],
  singleValue: _chunk_80640036_browser_esm_js__WEBPACK_IMPORTED_MODULE_16__["u"],
  valueContainer: _chunk_80640036_browser_esm_js__WEBPACK_IMPORTED_MODULE_16__["v"]
}; // Merge Utility
// Allows consumers to extend a base Select with additional styles

function mergeStyles(source) {
  var target = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  // initialize with source styles
  var styles = Object(_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_3__["default"])({}, source); // massage in target styles


  Object.keys(target).forEach(function (key) {
    if (source[key]) {
      styles[key] = function (rsCss, props) {
        return target[key](source[key](rsCss, props), props);
      };
    } else {
      styles[key] = target[key];
    }
  });
  return styles;
}

var colors = {
  primary: '#2684FF',
  primary75: '#4C9AFF',
  primary50: '#B2D4FF',
  primary25: '#DEEBFF',
  danger: '#DE350B',
  dangerLight: '#FFBDAD',
  neutral0: 'hsl(0, 0%, 100%)',
  neutral5: 'hsl(0, 0%, 95%)',
  neutral10: 'hsl(0, 0%, 90%)',
  neutral20: 'hsl(0, 0%, 80%)',
  neutral30: 'hsl(0, 0%, 70%)',
  neutral40: 'hsl(0, 0%, 60%)',
  neutral50: 'hsl(0, 0%, 50%)',
  neutral60: 'hsl(0, 0%, 40%)',
  neutral70: 'hsl(0, 0%, 30%)',
  neutral80: 'hsl(0, 0%, 20%)',
  neutral90: 'hsl(0, 0%, 10%)'
};
var borderRadius = 4; // Used to calculate consistent margin/padding on elements

var baseUnit = 4; // The minimum height of the control

var controlHeight = 38; // The amount of space between the control and menu */

var menuGutter = baseUnit * 2;
var spacing = {
  baseUnit: baseUnit,
  controlHeight: controlHeight,
  menuGutter: menuGutter
};
var defaultTheme = {
  borderRadius: borderRadius,
  colors: colors,
  spacing: spacing
};

var defaultProps = {
  backspaceRemovesValue: true,
  blurInputOnSelect: Object(_chunk_39d3fda8_browser_esm_js__WEBPACK_IMPORTED_MODULE_15__["i"])(),
  captureMenuScroll: !Object(_chunk_39d3fda8_browser_esm_js__WEBPACK_IMPORTED_MODULE_15__["i"])(),
  closeMenuOnSelect: true,
  closeMenuOnScroll: false,
  components: {},
  controlShouldRenderValue: true,
  escapeClearsValue: false,
  filterOption: createFilter(),
  formatGroupLabel: formatGroupLabel,
  getOptionLabel: getOptionLabel,
  getOptionValue: getOptionValue,
  isDisabled: false,
  isLoading: false,
  isMulti: false,
  isRtl: false,
  isSearchable: true,
  isOptionDisabled: isOptionDisabled,
  loadingMessage: function loadingMessage() {
    return 'Loading...';
  },
  maxMenuHeight: 300,
  minMenuHeight: 140,
  menuIsOpen: false,
  menuPlacement: 'bottom',
  menuPosition: 'absolute',
  menuShouldBlockScroll: false,
  menuShouldScrollIntoView: !Object(_chunk_39d3fda8_browser_esm_js__WEBPACK_IMPORTED_MODULE_15__["d"])(),
  noOptionsMessage: function noOptionsMessage() {
    return 'No options';
  },
  openMenuOnFocus: false,
  openMenuOnClick: true,
  options: [],
  pageSize: 5,
  placeholder: 'Select...',
  screenReaderStatus: function screenReaderStatus(_ref) {
    var count = _ref.count;
    return "".concat(count, " result").concat(count !== 1 ? 's' : '', " available");
  },
  styles: {},
  tabIndex: '0',
  tabSelectsValue: true
};
var instanceId = 1;

var Select =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(Select, _Component);

  // Misc. Instance Properties
  // ------------------------------
  // TODO
  // Refs
  // ------------------------------
  // Lifecycle
  // ------------------------------
  function Select(_props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Select);

    _this = Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Select).call(this, _props));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "state", {
      ariaLiveSelection: '',
      ariaLiveContext: '',
      focusedOption: null,
      focusedValue: null,
      inputIsHidden: false,
      isFocused: false,
      menuOptions: {
        render: [],
        focusable: []
      },
      selectValue: []
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "blockOptionHover", false);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "isComposing", false);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "clearFocusValueOnUpdate", false);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "commonProps", void 0);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "components", void 0);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "hasGroups", false);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "initialTouchX", 0);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "initialTouchY", 0);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "inputIsHiddenAfterUpdate", void 0);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "instancePrefix", '');

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "openAfterFocus", false);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "scrollToFocusedOptionOnUpdate", false);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "userIsDragging", void 0);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "controlRef", null);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "getControlRef", function (ref) {
      _this.controlRef = ref;
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "focusedOptionRef", null);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "getFocusedOptionRef", function (ref) {
      _this.focusedOptionRef = ref;
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "menuListRef", null);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "getMenuListRef", function (ref) {
      _this.menuListRef = ref;
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "inputRef", null);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "getInputRef", function (ref) {
      _this.inputRef = ref;
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "cacheComponents", function (components) {
      _this.components = Object(_chunk_80640036_browser_esm_js__WEBPACK_IMPORTED_MODULE_16__["w"])({
        components: components
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "focus", _this.focusInput);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "blur", _this.blurInput);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "onChange", function (newValue, actionMeta) {
      var _this$props = _this.props,
          onChange = _this$props.onChange,
          name = _this$props.name;
      onChange(newValue, Object(_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_3__["default"])({}, actionMeta, {
        name: name
      }));
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "setValue", function (newValue) {
      var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'set-value';
      var option = arguments.length > 2 ? arguments[2] : undefined;
      var _this$props2 = _this.props,
          closeMenuOnSelect = _this$props2.closeMenuOnSelect,
          isMulti = _this$props2.isMulti;

      _this.onInputChange('', {
        action: 'set-value'
      });

      if (closeMenuOnSelect) {
        _this.inputIsHiddenAfterUpdate = !isMulti;

        _this.onMenuClose();
      } // when the select value should change, we should reset focusedValue


      _this.clearFocusValueOnUpdate = true;

      _this.onChange(newValue, {
        action: action,
        option: option
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "selectOption", function (newValue) {
      var _this$props3 = _this.props,
          blurInputOnSelect = _this$props3.blurInputOnSelect,
          isMulti = _this$props3.isMulti;
      var selectValue = _this.state.selectValue;

      if (isMulti) {
        if (_this.isOptionSelected(newValue, selectValue)) {
          var candidate = _this.getOptionValue(newValue);

          _this.setValue(selectValue.filter(function (i) {
            return _this.getOptionValue(i) !== candidate;
          }), 'deselect-option', newValue);

          _this.announceAriaLiveSelection({
            event: 'deselect-option',
            context: {
              value: _this.getOptionLabel(newValue)
            }
          });
        } else {
          if (!_this.isOptionDisabled(newValue, selectValue)) {
            _this.setValue([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(selectValue), [newValue]), 'select-option', newValue);

            _this.announceAriaLiveSelection({
              event: 'select-option',
              context: {
                value: _this.getOptionLabel(newValue)
              }
            });
          } else {
            // announce that option is disabled
            _this.announceAriaLiveSelection({
              event: 'select-option',
              context: {
                value: _this.getOptionLabel(newValue),
                isDisabled: true
              }
            });
          }
        }
      } else {
        if (!_this.isOptionDisabled(newValue, selectValue)) {
          _this.setValue(newValue, 'select-option');

          _this.announceAriaLiveSelection({
            event: 'select-option',
            context: {
              value: _this.getOptionLabel(newValue)
            }
          });
        } else {
          // announce that option is disabled
          _this.announceAriaLiveSelection({
            event: 'select-option',
            context: {
              value: _this.getOptionLabel(newValue),
              isDisabled: true
            }
          });
        }
      }

      if (blurInputOnSelect) {
        _this.blurInput();
      }
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "removeValue", function (removedValue) {
      var selectValue = _this.state.selectValue;

      var candidate = _this.getOptionValue(removedValue);

      var newValue = selectValue.filter(function (i) {
        return _this.getOptionValue(i) !== candidate;
      });

      _this.onChange(newValue.length ? newValue : null, {
        action: 'remove-value',
        removedValue: removedValue
      });

      _this.announceAriaLiveSelection({
        event: 'remove-value',
        context: {
          value: removedValue ? _this.getOptionLabel(removedValue) : ''
        }
      });

      _this.focusInput();
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "clearValue", function () {
      var isMulti = _this.props.isMulti;

      _this.onChange(isMulti ? [] : null, {
        action: 'clear'
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "popValue", function () {
      var selectValue = _this.state.selectValue;
      var lastSelectedValue = selectValue[selectValue.length - 1];
      var newValue = selectValue.slice(0, selectValue.length - 1);

      _this.announceAriaLiveSelection({
        event: 'pop-value',
        context: {
          value: lastSelectedValue ? _this.getOptionLabel(lastSelectedValue) : ''
        }
      });

      _this.onChange(newValue.length ? newValue : null, {
        action: 'pop-value',
        removedValue: lastSelectedValue
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "getOptionLabel", function (data) {
      return _this.props.getOptionLabel(data);
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "getOptionValue", function (data) {
      return _this.props.getOptionValue(data);
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "getStyles", function (key, props) {
      var base = defaultStyles[key](props);
      base.boxSizing = 'border-box';
      var custom = _this.props.styles[key];
      return custom ? custom(base, props) : base;
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "getElementId", function (element) {
      return "".concat(_this.instancePrefix, "-").concat(element);
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "getActiveDescendentId", function () {
      var menuIsOpen = _this.props.menuIsOpen;
      var _this$state = _this.state,
          menuOptions = _this$state.menuOptions,
          focusedOption = _this$state.focusedOption;
      if (!focusedOption || !menuIsOpen) return undefined;
      var index = menuOptions.focusable.indexOf(focusedOption);
      var option = menuOptions.render[index];
      return option && option.key;
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "announceAriaLiveSelection", function (_ref2) {
      var event = _ref2.event,
          context = _ref2.context;

      _this.setState({
        ariaLiveSelection: valueEventAriaMessage(event, context)
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "announceAriaLiveContext", function (_ref3) {
      var event = _ref3.event,
          context = _ref3.context;

      _this.setState({
        ariaLiveContext: instructionsAriaMessage(event, Object(_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_3__["default"])({}, context, {
          label: _this.props['aria-label']
        }))
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "onMenuMouseDown", function (event) {
      if (event.button !== 0) {
        return;
      }

      event.stopPropagation();
      event.preventDefault();

      _this.focusInput();
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "onMenuMouseMove", function (event) {
      _this.blockOptionHover = false;
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "onControlMouseDown", function (event) {
      var openMenuOnClick = _this.props.openMenuOnClick;

      if (!_this.state.isFocused) {
        if (openMenuOnClick) {
          _this.openAfterFocus = true;
        }

        _this.focusInput();
      } else if (!_this.props.menuIsOpen) {
        if (openMenuOnClick) {
          _this.openMenu('first');
        }
      } else {
        //$FlowFixMe
        if (event.target.tagName !== 'INPUT') {
          _this.onMenuClose();
        }
      } //$FlowFixMe


      if (event.target.tagName !== 'INPUT') {
        event.preventDefault();
      }
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "onDropdownIndicatorMouseDown", function (event) {
      // ignore mouse events that weren't triggered by the primary button
      if (event && event.type === 'mousedown' && event.button !== 0) {
        return;
      }

      if (_this.props.isDisabled) return;
      var _this$props4 = _this.props,
          isMulti = _this$props4.isMulti,
          menuIsOpen = _this$props4.menuIsOpen;

      _this.focusInput();

      if (menuIsOpen) {
        _this.inputIsHiddenAfterUpdate = !isMulti;

        _this.onMenuClose();
      } else {
        _this.openMenu('first');
      }

      event.preventDefault();
      event.stopPropagation();
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "onClearIndicatorMouseDown", function (event) {
      // ignore mouse events that weren't triggered by the primary button
      if (event && event.type === 'mousedown' && event.button !== 0) {
        return;
      }

      _this.clearValue();

      event.stopPropagation();
      _this.openAfterFocus = false;

      if (event.type === 'touchend') {
        _this.focusInput();
      } else {
        setTimeout(function () {
          return _this.focusInput();
        });
      }
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "onScroll", function (event) {
      if (typeof _this.props.closeMenuOnScroll === 'boolean') {
        if (event.target instanceof HTMLElement && Object(_chunk_39d3fda8_browser_esm_js__WEBPACK_IMPORTED_MODULE_15__["e"])(event.target)) {
          _this.props.onMenuClose();
        }
      } else if (typeof _this.props.closeMenuOnScroll === 'function') {
        if (_this.props.closeMenuOnScroll(event)) {
          _this.props.onMenuClose();
        }
      }
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "onCompositionStart", function () {
      _this.isComposing = true;
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "onCompositionEnd", function () {
      _this.isComposing = false;
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "onTouchStart", function (_ref4) {
      var touches = _ref4.touches;
      var touch = touches.item(0);

      if (!touch) {
        return;
      }

      _this.initialTouchX = touch.clientX;
      _this.initialTouchY = touch.clientY;
      _this.userIsDragging = false;
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "onTouchMove", function (_ref5) {
      var touches = _ref5.touches;
      var touch = touches.item(0);

      if (!touch) {
        return;
      }

      var deltaX = Math.abs(touch.clientX - _this.initialTouchX);
      var deltaY = Math.abs(touch.clientY - _this.initialTouchY);
      var moveThreshold = 5;
      _this.userIsDragging = deltaX > moveThreshold || deltaY > moveThreshold;
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "onTouchEnd", function (event) {
      if (_this.userIsDragging) return; // close the menu if the user taps outside
      // we're checking on event.target here instead of event.currentTarget, because we want to assert information
      // on events on child elements, not the document (which we've attached this handler to).

      if (_this.controlRef && !_this.controlRef.contains(event.target) && _this.menuListRef && !_this.menuListRef.contains(event.target)) {
        _this.blurInput();
      } // reset move vars


      _this.initialTouchX = 0;
      _this.initialTouchY = 0;
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "onControlTouchEnd", function (event) {
      if (_this.userIsDragging) return;

      _this.onControlMouseDown(event);
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "onClearIndicatorTouchEnd", function (event) {
      if (_this.userIsDragging) return;

      _this.onClearIndicatorMouseDown(event);
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "onDropdownIndicatorTouchEnd", function (event) {
      if (_this.userIsDragging) return;

      _this.onDropdownIndicatorMouseDown(event);
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "handleInputChange", function (event) {
      var inputValue = event.currentTarget.value;
      _this.inputIsHiddenAfterUpdate = false;

      _this.onInputChange(inputValue, {
        action: 'input-change'
      });

      _this.onMenuOpen();
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "onInputFocus", function (event) {
      var _this$props5 = _this.props,
          isSearchable = _this$props5.isSearchable,
          isMulti = _this$props5.isMulti;

      if (_this.props.onFocus) {
        _this.props.onFocus(event);
      }

      _this.inputIsHiddenAfterUpdate = false;

      _this.announceAriaLiveContext({
        event: 'input',
        context: {
          isSearchable: isSearchable,
          isMulti: isMulti
        }
      });

      _this.setState({
        isFocused: true
      });

      if (_this.openAfterFocus || _this.props.openMenuOnFocus) {
        _this.openMenu('first');
      }

      _this.openAfterFocus = false;
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "onInputBlur", function (event) {
      if (_this.menuListRef && _this.menuListRef.contains(document.activeElement)) {
        _this.inputRef.focus();

        return;
      }

      if (_this.props.onBlur) {
        _this.props.onBlur(event);
      }

      _this.onInputChange('', {
        action: 'input-blur'
      });

      _this.onMenuClose();

      _this.setState({
        focusedValue: null,
        isFocused: false
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "onOptionHover", function (focusedOption) {
      if (_this.blockOptionHover || _this.state.focusedOption === focusedOption) {
        return;
      }

      _this.setState({
        focusedOption: focusedOption
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "shouldHideSelectedOptions", function () {
      var _this$props6 = _this.props,
          hideSelectedOptions = _this$props6.hideSelectedOptions,
          isMulti = _this$props6.isMulti;
      if (hideSelectedOptions === undefined) return isMulti;
      return hideSelectedOptions;
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "onKeyDown", function (event) {
      var _this$props7 = _this.props,
          isMulti = _this$props7.isMulti,
          backspaceRemovesValue = _this$props7.backspaceRemovesValue,
          escapeClearsValue = _this$props7.escapeClearsValue,
          inputValue = _this$props7.inputValue,
          isClearable = _this$props7.isClearable,
          isDisabled = _this$props7.isDisabled,
          menuIsOpen = _this$props7.menuIsOpen,
          onKeyDown = _this$props7.onKeyDown,
          tabSelectsValue = _this$props7.tabSelectsValue,
          openMenuOnFocus = _this$props7.openMenuOnFocus;
      var _this$state2 = _this.state,
          focusedOption = _this$state2.focusedOption,
          focusedValue = _this$state2.focusedValue,
          selectValue = _this$state2.selectValue;
      if (isDisabled) return;

      if (typeof onKeyDown === 'function') {
        onKeyDown(event);

        if (event.defaultPrevented) {
          return;
        }
      } // Block option hover events when the user has just pressed a key


      _this.blockOptionHover = true;

      switch (event.key) {
        case 'ArrowLeft':
          if (!isMulti || inputValue) return;

          _this.focusValue('previous');

          break;

        case 'ArrowRight':
          if (!isMulti || inputValue) return;

          _this.focusValue('next');

          break;

        case 'Delete':
        case 'Backspace':
          if (inputValue) return;

          if (focusedValue) {
            _this.removeValue(focusedValue);
          } else {
            if (!backspaceRemovesValue) return;

            if (isMulti) {
              _this.popValue();
            } else if (isClearable) {
              _this.clearValue();
            }
          }

          break;

        case 'Tab':
          if (_this.isComposing) return;

          if (event.shiftKey || !menuIsOpen || !tabSelectsValue || !focusedOption || // don't capture the event if the menu opens on focus and the focused
          // option is already selected; it breaks the flow of navigation
          openMenuOnFocus && _this.isOptionSelected(focusedOption, selectValue)) {
            return;
          }

          _this.selectOption(focusedOption);

          break;

        case 'Enter':
          if (event.keyCode === 229) {
            // ignore the keydown event from an Input Method Editor(IME)
            // ref. https://www.w3.org/TR/uievents/#determine-keydown-keyup-keyCode
            break;
          }

          if (menuIsOpen) {
            if (!focusedOption) return;
            if (_this.isComposing) return;

            _this.selectOption(focusedOption);

            break;
          }

          return;

        case 'Escape':
          if (menuIsOpen) {
            _this.inputIsHiddenAfterUpdate = false;

            _this.onInputChange('', {
              action: 'menu-close'
            });

            _this.onMenuClose();
          } else if (isClearable && escapeClearsValue) {
            _this.clearValue();
          }

          break;

        case ' ':
          // space
          if (inputValue) {
            return;
          }

          if (!menuIsOpen) {
            _this.openMenu('first');

            break;
          }

          if (!focusedOption) return;

          _this.selectOption(focusedOption);

          break;

        case 'ArrowUp':
          if (menuIsOpen) {
            _this.focusOption('up');
          } else {
            _this.openMenu('last');
          }

          break;

        case 'ArrowDown':
          if (menuIsOpen) {
            _this.focusOption('down');
          } else {
            _this.openMenu('first');
          }

          break;

        case 'PageUp':
          if (!menuIsOpen) return;

          _this.focusOption('pageup');

          break;

        case 'PageDown':
          if (!menuIsOpen) return;

          _this.focusOption('pagedown');

          break;

        case 'Home':
          if (!menuIsOpen) return;

          _this.focusOption('first');

          break;

        case 'End':
          if (!menuIsOpen) return;

          _this.focusOption('last');

          break;

        default:
          return;
      }

      event.preventDefault();
    });

    var value = _props.value;
    _this.cacheComponents = Object(memoize_one__WEBPACK_IMPORTED_MODULE_12__["default"])(_this.cacheComponents, _chunk_80640036_browser_esm_js__WEBPACK_IMPORTED_MODULE_16__["x"]).bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)));

    _this.cacheComponents(_props.components);

    _this.instancePrefix = 'react-select-' + (_this.props.instanceId || ++instanceId);

    var _selectValue = Object(_chunk_39d3fda8_browser_esm_js__WEBPACK_IMPORTED_MODULE_15__["f"])(value);

    var _menuOptions = _props.menuIsOpen ? _this.buildMenuOptions(_props, _selectValue) : {
      render: [],
      focusable: []
    };

    _this.state.menuOptions = _menuOptions;
    _this.state.selectValue = _selectValue;
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(Select, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.startListeningComposition();
      this.startListeningToTouch();

      if (this.props.closeMenuOnScroll && document && document.addEventListener) {
        // Listen to all scroll events, and filter them out inside of 'onScroll'
        document.addEventListener('scroll', this.onScroll, true);
      }

      if (this.props.autoFocus) {
        this.focusInput();
      }
    }
  }, {
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      var _this$props8 = this.props,
          options = _this$props8.options,
          value = _this$props8.value,
          menuIsOpen = _this$props8.menuIsOpen,
          inputValue = _this$props8.inputValue; // re-cache custom components

      this.cacheComponents(nextProps.components); // rebuild the menu options

      if (nextProps.value !== value || nextProps.options !== options || nextProps.menuIsOpen !== menuIsOpen || nextProps.inputValue !== inputValue) {
        var selectValue = Object(_chunk_39d3fda8_browser_esm_js__WEBPACK_IMPORTED_MODULE_15__["f"])(nextProps.value);
        var menuOptions = nextProps.menuIsOpen ? this.buildMenuOptions(nextProps, selectValue) : {
          render: [],
          focusable: []
        };
        var focusedValue = this.getNextFocusedValue(selectValue);
        var focusedOption = this.getNextFocusedOption(menuOptions.focusable);
        this.setState({
          menuOptions: menuOptions,
          selectValue: selectValue,
          focusedOption: focusedOption,
          focusedValue: focusedValue
        });
      } // some updates should toggle the state of the input visibility


      if (this.inputIsHiddenAfterUpdate != null) {
        this.setState({
          inputIsHidden: this.inputIsHiddenAfterUpdate
        });
        delete this.inputIsHiddenAfterUpdate;
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props9 = this.props,
          isDisabled = _this$props9.isDisabled,
          menuIsOpen = _this$props9.menuIsOpen;
      var isFocused = this.state.isFocused;

      if ( // ensure focus is restored correctly when the control becomes enabled
      isFocused && !isDisabled && prevProps.isDisabled || // ensure focus is on the Input when the menu opens
      isFocused && menuIsOpen && !prevProps.menuIsOpen) {
        this.focusInput();
      } // scroll the focused option into view if necessary


      if (this.menuListRef && this.focusedOptionRef && this.scrollToFocusedOptionOnUpdate) {
        Object(_chunk_39d3fda8_browser_esm_js__WEBPACK_IMPORTED_MODULE_15__["h"])(this.menuListRef, this.focusedOptionRef);
      }

      this.scrollToFocusedOptionOnUpdate = false;
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.stopListeningComposition();
      this.stopListeningToTouch();
      document.removeEventListener('scroll', this.onScroll, true);
    }
  }, {
    key: "onMenuOpen",
    // ==============================
    // Consumer Handlers
    // ==============================
    value: function onMenuOpen() {
      this.props.onMenuOpen();
    }
  }, {
    key: "onMenuClose",
    value: function onMenuClose() {
      var _this$props10 = this.props,
          isSearchable = _this$props10.isSearchable,
          isMulti = _this$props10.isMulti;
      this.announceAriaLiveContext({
        event: 'input',
        context: {
          isSearchable: isSearchable,
          isMulti: isMulti
        }
      });
      this.onInputChange('', {
        action: 'menu-close'
      });
      this.props.onMenuClose();
    }
  }, {
    key: "onInputChange",
    value: function onInputChange(newValue, actionMeta) {
      this.props.onInputChange(newValue, actionMeta);
    } // ==============================
    // Methods
    // ==============================

  }, {
    key: "focusInput",
    value: function focusInput() {
      if (!this.inputRef) return;
      this.inputRef.focus();
    }
  }, {
    key: "blurInput",
    value: function blurInput() {
      if (!this.inputRef) return;
      this.inputRef.blur();
    } // aliased for consumers

  }, {
    key: "openMenu",
    value: function openMenu(focusOption) {
      var _this$state3 = this.state,
          menuOptions = _this$state3.menuOptions,
          selectValue = _this$state3.selectValue,
          isFocused = _this$state3.isFocused;
      var isMulti = this.props.isMulti;
      var openAtIndex = focusOption === 'first' ? 0 : menuOptions.focusable.length - 1;

      if (!isMulti) {
        var selectedIndex = menuOptions.focusable.indexOf(selectValue[0]);

        if (selectedIndex > -1) {
          openAtIndex = selectedIndex;
        }
      } // only scroll if the menu isn't already open


      this.scrollToFocusedOptionOnUpdate = !(isFocused && this.menuListRef);
      this.inputIsHiddenAfterUpdate = false;
      this.onMenuOpen();
      this.setState({
        focusedValue: null,
        focusedOption: menuOptions.focusable[openAtIndex]
      });
      this.announceAriaLiveContext({
        event: 'menu'
      });
    }
  }, {
    key: "focusValue",
    value: function focusValue(direction) {
      var _this$props11 = this.props,
          isMulti = _this$props11.isMulti,
          isSearchable = _this$props11.isSearchable;
      var _this$state4 = this.state,
          selectValue = _this$state4.selectValue,
          focusedValue = _this$state4.focusedValue; // Only multiselects support value focusing

      if (!isMulti) return;
      this.setState({
        focusedOption: null
      });
      var focusedIndex = selectValue.indexOf(focusedValue);

      if (!focusedValue) {
        focusedIndex = -1;
        this.announceAriaLiveContext({
          event: 'value'
        });
      }

      var lastIndex = selectValue.length - 1;
      var nextFocus = -1;
      if (!selectValue.length) return;

      switch (direction) {
        case 'previous':
          if (focusedIndex === 0) {
            // don't cycle from the start to the end
            nextFocus = 0;
          } else if (focusedIndex === -1) {
            // if nothing is focused, focus the last value first
            nextFocus = lastIndex;
          } else {
            nextFocus = focusedIndex - 1;
          }

          break;

        case 'next':
          if (focusedIndex > -1 && focusedIndex < lastIndex) {
            nextFocus = focusedIndex + 1;
          }

          break;
      }

      if (nextFocus === -1) {
        this.announceAriaLiveContext({
          event: 'input',
          context: {
            isSearchable: isSearchable,
            isMulti: isMulti
          }
        });
      }

      this.setState({
        inputIsHidden: nextFocus !== -1,
        focusedValue: selectValue[nextFocus]
      });
    }
  }, {
    key: "focusOption",
    value: function focusOption() {
      var direction = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'first';
      var pageSize = this.props.pageSize;
      var _this$state5 = this.state,
          focusedOption = _this$state5.focusedOption,
          menuOptions = _this$state5.menuOptions;
      var options = menuOptions.focusable;
      if (!options.length) return;
      var nextFocus = 0; // handles 'first'

      var focusedIndex = options.indexOf(focusedOption);

      if (!focusedOption) {
        focusedIndex = -1;
        this.announceAriaLiveContext({
          event: 'menu'
        });
      }

      if (direction === 'up') {
        nextFocus = focusedIndex > 0 ? focusedIndex - 1 : options.length - 1;
      } else if (direction === 'down') {
        nextFocus = (focusedIndex + 1) % options.length;
      } else if (direction === 'pageup') {
        nextFocus = focusedIndex - pageSize;
        if (nextFocus < 0) nextFocus = 0;
      } else if (direction === 'pagedown') {
        nextFocus = focusedIndex + pageSize;
        if (nextFocus > options.length - 1) nextFocus = options.length - 1;
      } else if (direction === 'last') {
        nextFocus = options.length - 1;
      }

      this.scrollToFocusedOptionOnUpdate = true;
      this.setState({
        focusedOption: options[nextFocus],
        focusedValue: null
      });
      this.announceAriaLiveContext({
        event: 'menu',
        context: {
          isDisabled: isOptionDisabled(options[nextFocus])
        }
      });
    }
  }, {
    key: "getTheme",
    // ==============================
    // Getters
    // ==============================
    value: function getTheme() {
      // Use the default theme if there are no customizations.
      if (!this.props.theme) {
        return defaultTheme;
      } // If the theme prop is a function, assume the function
      // knows how to merge the passed-in default theme with
      // its own modifications.


      if (typeof this.props.theme === 'function') {
        return this.props.theme(defaultTheme);
      } // Otherwise, if a plain theme object was passed in,
      // overlay it with the default theme.


      return Object(_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_3__["default"])({}, defaultTheme, this.props.theme);
    }
  }, {
    key: "getCommonProps",
    value: function getCommonProps() {
      var clearValue = this.clearValue,
          getStyles = this.getStyles,
          setValue = this.setValue,
          selectOption = this.selectOption,
          props = this.props;
      var classNamePrefix = props.classNamePrefix,
          isMulti = props.isMulti,
          isRtl = props.isRtl,
          options = props.options;
      var selectValue = this.state.selectValue;
      var hasValue = this.hasValue();

      var getValue = function getValue() {
        return selectValue;
      };

      var cx = _chunk_39d3fda8_browser_esm_js__WEBPACK_IMPORTED_MODULE_15__["j"].bind(null, classNamePrefix);
      return {
        cx: cx,
        clearValue: clearValue,
        getStyles: getStyles,
        getValue: getValue,
        hasValue: hasValue,
        isMulti: isMulti,
        isRtl: isRtl,
        options: options,
        selectOption: selectOption,
        setValue: setValue,
        selectProps: props,
        theme: this.getTheme()
      };
    }
  }, {
    key: "getNextFocusedValue",
    value: function getNextFocusedValue(nextSelectValue) {
      if (this.clearFocusValueOnUpdate) {
        this.clearFocusValueOnUpdate = false;
        return null;
      }

      var _this$state6 = this.state,
          focusedValue = _this$state6.focusedValue,
          lastSelectValue = _this$state6.selectValue;
      var lastFocusedIndex = lastSelectValue.indexOf(focusedValue);

      if (lastFocusedIndex > -1) {
        var nextFocusedIndex = nextSelectValue.indexOf(focusedValue);

        if (nextFocusedIndex > -1) {
          // the focused value is still in the selectValue, return it
          return focusedValue;
        } else if (lastFocusedIndex < nextSelectValue.length) {
          // the focusedValue is not present in the next selectValue array by
          // reference, so return the new value at the same index
          return nextSelectValue[lastFocusedIndex];
        }
      }

      return null;
    }
  }, {
    key: "getNextFocusedOption",
    value: function getNextFocusedOption(options) {
      var lastFocusedOption = this.state.focusedOption;
      return lastFocusedOption && options.indexOf(lastFocusedOption) > -1 ? lastFocusedOption : options[0];
    }
  }, {
    key: "hasValue",
    value: function hasValue() {
      var selectValue = this.state.selectValue;
      return selectValue.length > 0;
    }
  }, {
    key: "hasOptions",
    value: function hasOptions() {
      return !!this.state.menuOptions.render.length;
    }
  }, {
    key: "countOptions",
    value: function countOptions() {
      return this.state.menuOptions.focusable.length;
    }
  }, {
    key: "isClearable",
    value: function isClearable() {
      var _this$props12 = this.props,
          isClearable = _this$props12.isClearable,
          isMulti = _this$props12.isMulti; // single select, by default, IS NOT clearable
      // multi select, by default, IS clearable

      if (isClearable === undefined) return isMulti;
      return isClearable;
    }
  }, {
    key: "isOptionDisabled",
    value: function isOptionDisabled(option, selectValue) {
      return typeof this.props.isOptionDisabled === 'function' ? this.props.isOptionDisabled(option, selectValue) : false;
    }
  }, {
    key: "isOptionSelected",
    value: function isOptionSelected(option, selectValue) {
      var _this2 = this;

      if (selectValue.indexOf(option) > -1) return true;

      if (typeof this.props.isOptionSelected === 'function') {
        return this.props.isOptionSelected(option, selectValue);
      }

      var candidate = this.getOptionValue(option);
      return selectValue.some(function (i) {
        return _this2.getOptionValue(i) === candidate;
      });
    }
  }, {
    key: "filterOption",
    value: function filterOption(option, inputValue) {
      return this.props.filterOption ? this.props.filterOption(option, inputValue) : true;
    }
  }, {
    key: "formatOptionLabel",
    value: function formatOptionLabel(data, context) {
      if (typeof this.props.formatOptionLabel === 'function') {
        var inputValue = this.props.inputValue;
        var selectValue = this.state.selectValue;
        return this.props.formatOptionLabel(data, {
          context: context,
          inputValue: inputValue,
          selectValue: selectValue
        });
      } else {
        return this.getOptionLabel(data);
      }
    }
  }, {
    key: "formatGroupLabel",
    value: function formatGroupLabel(data) {
      return this.props.formatGroupLabel(data);
    } // ==============================
    // Mouse Handlers
    // ==============================

  }, {
    key: "startListeningComposition",
    // ==============================
    // Composition Handlers
    // ==============================
    value: function startListeningComposition() {
      if (document && document.addEventListener) {
        document.addEventListener('compositionstart', this.onCompositionStart, false);
        document.addEventListener('compositionend', this.onCompositionEnd, false);
      }
    }
  }, {
    key: "stopListeningComposition",
    value: function stopListeningComposition() {
      if (document && document.removeEventListener) {
        document.removeEventListener('compositionstart', this.onCompositionStart);
        document.removeEventListener('compositionend', this.onCompositionEnd);
      }
    }
  }, {
    key: "startListeningToTouch",
    // ==============================
    // Touch Handlers
    // ==============================
    value: function startListeningToTouch() {
      if (document && document.addEventListener) {
        document.addEventListener('touchstart', this.onTouchStart, false);
        document.addEventListener('touchmove', this.onTouchMove, false);
        document.addEventListener('touchend', this.onTouchEnd, false);
      }
    }
  }, {
    key: "stopListeningToTouch",
    value: function stopListeningToTouch() {
      if (document && document.removeEventListener) {
        document.removeEventListener('touchstart', this.onTouchStart);
        document.removeEventListener('touchmove', this.onTouchMove);
        document.removeEventListener('touchend', this.onTouchEnd);
      }
    }
  }, {
    key: "buildMenuOptions",
    // ==============================
    // Menu Options
    // ==============================
    value: function buildMenuOptions(props, selectValue) {
      var _this3 = this;

      var _props$inputValue = props.inputValue,
          inputValue = _props$inputValue === void 0 ? '' : _props$inputValue,
          options = props.options;

      var toOption = function toOption(option, id) {
        var isDisabled = _this3.isOptionDisabled(option, selectValue);

        var isSelected = _this3.isOptionSelected(option, selectValue);

        var label = _this3.getOptionLabel(option);

        var value = _this3.getOptionValue(option);

        if (_this3.shouldHideSelectedOptions() && isSelected || !_this3.filterOption({
          label: label,
          value: value,
          data: option
        }, inputValue)) {
          return;
        }

        var onHover = isDisabled ? undefined : function () {
          return _this3.onOptionHover(option);
        };
        var onSelect = isDisabled ? undefined : function () {
          return _this3.selectOption(option);
        };
        var optionId = "".concat(_this3.getElementId('option'), "-").concat(id);
        return {
          innerProps: {
            id: optionId,
            onClick: onSelect,
            onMouseMove: onHover,
            onMouseOver: onHover,
            tabIndex: -1
          },
          data: option,
          isDisabled: isDisabled,
          isSelected: isSelected,
          key: optionId,
          label: label,
          type: 'option',
          value: value
        };
      };

      return options.reduce(function (acc, item, itemIndex) {
        if (item.options) {
          // TODO needs a tidier implementation
          if (!_this3.hasGroups) _this3.hasGroups = true;
          var items = item.options;
          var children = items.map(function (child, i) {
            var option = toOption(child, "".concat(itemIndex, "-").concat(i));
            if (option) acc.focusable.push(child);
            return option;
          }).filter(Boolean);

          if (children.length) {
            var groupId = "".concat(_this3.getElementId('group'), "-").concat(itemIndex);
            acc.render.push({
              type: 'group',
              key: groupId,
              data: item,
              options: children
            });
          }
        } else {
          var option = toOption(item, "".concat(itemIndex));

          if (option) {
            acc.render.push(option);
            acc.focusable.push(item);
          }
        }

        return acc;
      }, {
        render: [],
        focusable: []
      });
    } // ==============================
    // Renderers
    // ==============================

  }, {
    key: "constructAriaLiveMessage",
    value: function constructAriaLiveMessage() {
      var _this$state7 = this.state,
          ariaLiveContext = _this$state7.ariaLiveContext,
          selectValue = _this$state7.selectValue,
          focusedValue = _this$state7.focusedValue,
          focusedOption = _this$state7.focusedOption;
      var _this$props13 = this.props,
          options = _this$props13.options,
          menuIsOpen = _this$props13.menuIsOpen,
          inputValue = _this$props13.inputValue,
          screenReaderStatus = _this$props13.screenReaderStatus; // An aria live message representing the currently focused value in the select.

      var focusedValueMsg = focusedValue ? valueFocusAriaMessage({
        focusedValue: focusedValue,
        getOptionLabel: this.getOptionLabel,
        selectValue: selectValue
      }) : ''; // An aria live message representing the currently focused option in the select.

      var focusedOptionMsg = focusedOption && menuIsOpen ? optionFocusAriaMessage({
        focusedOption: focusedOption,
        getOptionLabel: this.getOptionLabel,
        options: options
      }) : ''; // An aria live message representing the set of focusable results and current searchterm/inputvalue.

      var resultsMsg = resultsAriaMessage({
        inputValue: inputValue,
        screenReaderMessage: screenReaderStatus({
          count: this.countOptions()
        })
      });
      return "".concat(focusedValueMsg, " ").concat(focusedOptionMsg, " ").concat(resultsMsg, " ").concat(ariaLiveContext);
    }
  }, {
    key: "renderInput",
    value: function renderInput() {
      var _this$props14 = this.props,
          isDisabled = _this$props14.isDisabled,
          isSearchable = _this$props14.isSearchable,
          inputId = _this$props14.inputId,
          inputValue = _this$props14.inputValue,
          tabIndex = _this$props14.tabIndex;
      var Input = this.components.Input;
      var inputIsHidden = this.state.inputIsHidden;
      var id = inputId || this.getElementId('input');

      if (!isSearchable) {
        // use a dummy input to maintain focus/blur functionality
        return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(DummyInput, {
          id: id,
          innerRef: this.getInputRef,
          onBlur: this.onInputBlur,
          onChange: _chunk_39d3fda8_browser_esm_js__WEBPACK_IMPORTED_MODULE_15__["n"],
          onFocus: this.onInputFocus,
          readOnly: true,
          disabled: isDisabled,
          tabIndex: tabIndex,
          value: ""
        });
      } // aria attributes makes the JSX "noisy", separated for clarity


      var ariaAttributes = {
        'aria-autocomplete': 'list',
        'aria-label': this.props['aria-label'],
        'aria-labelledby': this.props['aria-labelledby']
      };
      var _this$commonProps = this.commonProps,
          cx = _this$commonProps.cx,
          theme = _this$commonProps.theme,
          selectProps = _this$commonProps.selectProps;
      return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Input, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
        autoCapitalize: "none",
        autoComplete: "off",
        autoCorrect: "off",
        cx: cx,
        getStyles: this.getStyles,
        id: id,
        innerRef: this.getInputRef,
        isDisabled: isDisabled,
        isHidden: inputIsHidden,
        onBlur: this.onInputBlur,
        onChange: this.handleInputChange,
        onFocus: this.onInputFocus,
        selectProps: selectProps,
        spellCheck: "false",
        tabIndex: tabIndex,
        theme: theme,
        type: "text",
        value: inputValue
      }, ariaAttributes));
    }
  }, {
    key: "renderPlaceholderOrValue",
    value: function renderPlaceholderOrValue() {
      var _this4 = this;

      var _this$components = this.components,
          MultiValue = _this$components.MultiValue,
          MultiValueContainer = _this$components.MultiValueContainer,
          MultiValueLabel = _this$components.MultiValueLabel,
          MultiValueRemove = _this$components.MultiValueRemove,
          SingleValue = _this$components.SingleValue,
          Placeholder = _this$components.Placeholder;
      var commonProps = this.commonProps;
      var _this$props15 = this.props,
          controlShouldRenderValue = _this$props15.controlShouldRenderValue,
          isDisabled = _this$props15.isDisabled,
          isMulti = _this$props15.isMulti,
          inputValue = _this$props15.inputValue,
          placeholder = _this$props15.placeholder;
      var _this$state8 = this.state,
          selectValue = _this$state8.selectValue,
          focusedValue = _this$state8.focusedValue,
          isFocused = _this$state8.isFocused;

      if (!this.hasValue() || !controlShouldRenderValue) {
        return inputValue ? null : react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Placeholder, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, commonProps, {
          key: "placeholder",
          isDisabled: isDisabled,
          isFocused: isFocused
        }), placeholder);
      }

      if (isMulti) {
        var selectValues = selectValue.map(function (opt, index) {
          var isOptionFocused = opt === focusedValue;
          return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(MultiValue, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, commonProps, {
            components: {
              Container: MultiValueContainer,
              Label: MultiValueLabel,
              Remove: MultiValueRemove
            },
            isFocused: isOptionFocused,
            isDisabled: isDisabled,
            key: _this4.getOptionValue(opt),
            index: index,
            removeProps: {
              onClick: function onClick() {
                return _this4.removeValue(opt);
              },
              onTouchEnd: function onTouchEnd() {
                return _this4.removeValue(opt);
              },
              onMouseDown: function onMouseDown(e) {
                e.preventDefault();
                e.stopPropagation();
              }
            },
            data: opt
          }), _this4.formatOptionLabel(opt, 'value'));
        });
        return selectValues;
      }

      if (inputValue) {
        return null;
      }

      var singleValue = selectValue[0];
      return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(SingleValue, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, commonProps, {
        data: singleValue,
        isDisabled: isDisabled
      }), this.formatOptionLabel(singleValue, 'value'));
    }
  }, {
    key: "renderClearIndicator",
    value: function renderClearIndicator() {
      var ClearIndicator = this.components.ClearIndicator;
      var commonProps = this.commonProps;
      var _this$props16 = this.props,
          isDisabled = _this$props16.isDisabled,
          isLoading = _this$props16.isLoading;
      var isFocused = this.state.isFocused;

      if (!this.isClearable() || !ClearIndicator || isDisabled || !this.hasValue() || isLoading) {
        return null;
      }

      var innerProps = {
        onMouseDown: this.onClearIndicatorMouseDown,
        onTouchEnd: this.onClearIndicatorTouchEnd,
        'aria-hidden': 'true'
      };
      return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(ClearIndicator, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, commonProps, {
        innerProps: innerProps,
        isFocused: isFocused
      }));
    }
  }, {
    key: "renderLoadingIndicator",
    value: function renderLoadingIndicator() {
      var LoadingIndicator = this.components.LoadingIndicator;
      var commonProps = this.commonProps;
      var _this$props17 = this.props,
          isDisabled = _this$props17.isDisabled,
          isLoading = _this$props17.isLoading;
      var isFocused = this.state.isFocused;
      if (!LoadingIndicator || !isLoading) return null;
      var innerProps = {
        'aria-hidden': 'true'
      };
      return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(LoadingIndicator, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, commonProps, {
        innerProps: innerProps,
        isDisabled: isDisabled,
        isFocused: isFocused
      }));
    }
  }, {
    key: "renderIndicatorSeparator",
    value: function renderIndicatorSeparator() {
      var _this$components2 = this.components,
          DropdownIndicator = _this$components2.DropdownIndicator,
          IndicatorSeparator = _this$components2.IndicatorSeparator; // separator doesn't make sense without the dropdown indicator

      if (!DropdownIndicator || !IndicatorSeparator) return null;
      var commonProps = this.commonProps;
      var isDisabled = this.props.isDisabled;
      var isFocused = this.state.isFocused;
      return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(IndicatorSeparator, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, commonProps, {
        isDisabled: isDisabled,
        isFocused: isFocused
      }));
    }
  }, {
    key: "renderDropdownIndicator",
    value: function renderDropdownIndicator() {
      var DropdownIndicator = this.components.DropdownIndicator;
      if (!DropdownIndicator) return null;
      var commonProps = this.commonProps;
      var isDisabled = this.props.isDisabled;
      var isFocused = this.state.isFocused;
      var innerProps = {
        onMouseDown: this.onDropdownIndicatorMouseDown,
        onTouchEnd: this.onDropdownIndicatorTouchEnd,
        'aria-hidden': 'true'
      };
      return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(DropdownIndicator, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, commonProps, {
        innerProps: innerProps,
        isDisabled: isDisabled,
        isFocused: isFocused
      }));
    }
  }, {
    key: "renderMenu",
    value: function renderMenu() {
      var _this5 = this;

      var _this$components3 = this.components,
          Group = _this$components3.Group,
          GroupHeading = _this$components3.GroupHeading,
          Menu = _this$components3.Menu,
          MenuList = _this$components3.MenuList,
          MenuPortal = _this$components3.MenuPortal,
          LoadingMessage = _this$components3.LoadingMessage,
          NoOptionsMessage = _this$components3.NoOptionsMessage,
          Option = _this$components3.Option;
      var commonProps = this.commonProps;
      var _this$state9 = this.state,
          focusedOption = _this$state9.focusedOption,
          menuOptions = _this$state9.menuOptions;
      var _this$props18 = this.props,
          captureMenuScroll = _this$props18.captureMenuScroll,
          inputValue = _this$props18.inputValue,
          isLoading = _this$props18.isLoading,
          loadingMessage = _this$props18.loadingMessage,
          minMenuHeight = _this$props18.minMenuHeight,
          maxMenuHeight = _this$props18.maxMenuHeight,
          menuIsOpen = _this$props18.menuIsOpen,
          menuPlacement = _this$props18.menuPlacement,
          menuPosition = _this$props18.menuPosition,
          menuPortalTarget = _this$props18.menuPortalTarget,
          menuShouldBlockScroll = _this$props18.menuShouldBlockScroll,
          menuShouldScrollIntoView = _this$props18.menuShouldScrollIntoView,
          noOptionsMessage = _this$props18.noOptionsMessage,
          onMenuScrollToTop = _this$props18.onMenuScrollToTop,
          onMenuScrollToBottom = _this$props18.onMenuScrollToBottom;
      if (!menuIsOpen) return null; // TODO: Internal Option Type here

      var render = function render(props) {
        // for performance, the menu options in state aren't changed when the
        // focused option changes so we calculate additional props based on that
        var isFocused = focusedOption === props.data;
        props.innerRef = isFocused ? _this5.getFocusedOptionRef : undefined;
        return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Option, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, commonProps, props, {
          isFocused: isFocused
        }), _this5.formatOptionLabel(props.data, 'menu'));
      };

      var menuUI;

      if (this.hasOptions()) {
        menuUI = menuOptions.render.map(function (item) {
          if (item.type === 'group') {
            var type = item.type,
                group = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(item, ["type"]);

            var headingId = "".concat(item.key, "-heading");
            return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Group, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, commonProps, group, {
              Heading: GroupHeading,
              headingProps: {
                id: headingId
              },
              label: _this5.formatGroupLabel(item.data)
            }), item.options.map(function (option) {
              return render(option);
            }));
          } else if (item.type === 'option') {
            return render(item);
          }
        });
      } else if (isLoading) {
        var message = loadingMessage({
          inputValue: inputValue
        });
        if (message === null) return null;
        menuUI = react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(LoadingMessage, commonProps, message);
      } else {
        var _message = noOptionsMessage({
          inputValue: inputValue
        });

        if (_message === null) return null;
        menuUI = react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(NoOptionsMessage, commonProps, _message);
      }

      var menuPlacementProps = {
        minMenuHeight: minMenuHeight,
        maxMenuHeight: maxMenuHeight,
        menuPlacement: menuPlacement,
        menuPosition: menuPosition,
        menuShouldScrollIntoView: menuShouldScrollIntoView
      };
      var menuElement = react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_chunk_80640036_browser_esm_js__WEBPACK_IMPORTED_MODULE_16__["M"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, commonProps, menuPlacementProps), function (_ref6) {
        var ref = _ref6.ref,
            _ref6$placerProps = _ref6.placerProps,
            placement = _ref6$placerProps.placement,
            maxHeight = _ref6$placerProps.maxHeight;
        return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Menu, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, commonProps, menuPlacementProps, {
          innerRef: ref,
          innerProps: {
            onMouseDown: _this5.onMenuMouseDown,
            onMouseMove: _this5.onMenuMouseMove
          },
          isLoading: isLoading,
          placement: placement
        }), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(ScrollCaptorSwitch, {
          isEnabled: captureMenuScroll,
          onTopArrive: onMenuScrollToTop,
          onBottomArrive: onMenuScrollToBottom
        }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(ScrollBlock, {
          isEnabled: menuShouldBlockScroll
        }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(MenuList, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, commonProps, {
          innerRef: _this5.getMenuListRef,
          isLoading: isLoading,
          maxHeight: maxHeight
        }), menuUI))));
      }); // positioning behaviour is almost identical for portalled and fixed,
      // so we use the same component. the actual portalling logic is forked
      // within the component based on `menuPosition`

      return menuPortalTarget || menuPosition === 'fixed' ? react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(MenuPortal, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, commonProps, {
        appendTo: menuPortalTarget,
        controlElement: this.controlRef,
        menuPlacement: menuPlacement,
        menuPosition: menuPosition
      }), menuElement) : menuElement;
    }
  }, {
    key: "renderFormField",
    value: function renderFormField() {
      var _this6 = this;

      var _this$props19 = this.props,
          delimiter = _this$props19.delimiter,
          isDisabled = _this$props19.isDisabled,
          isMulti = _this$props19.isMulti,
          name = _this$props19.name;
      var selectValue = this.state.selectValue;
      if (!name || isDisabled) return;

      if (isMulti) {
        if (delimiter) {
          var value = selectValue.map(function (opt) {
            return _this6.getOptionValue(opt);
          }).join(delimiter);
          return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("input", {
            name: name,
            type: "hidden",
            value: value
          });
        } else {
          var input = selectValue.length > 0 ? selectValue.map(function (opt, i) {
            return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("input", {
              key: "i-".concat(i),
              name: name,
              type: "hidden",
              value: _this6.getOptionValue(opt)
            });
          }) : react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("input", {
            name: name,
            type: "hidden"
          });
          return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", null, input);
        }
      } else {
        var _value = selectValue[0] ? this.getOptionValue(selectValue[0]) : '';

        return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("input", {
          name: name,
          type: "hidden",
          value: _value
        });
      }
    }
  }, {
    key: "renderLiveRegion",
    value: function renderLiveRegion() {
      if (!this.state.isFocused) return null;
      return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(A11yText, {
        "aria-live": "polite"
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("p", {
        id: "aria-selection-event"
      }, "\xA0", this.state.ariaLiveSelection), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("p", {
        id: "aria-context"
      }, "\xA0", this.constructAriaLiveMessage()));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$components4 = this.components,
          Control = _this$components4.Control,
          IndicatorsContainer = _this$components4.IndicatorsContainer,
          SelectContainer = _this$components4.SelectContainer,
          ValueContainer = _this$components4.ValueContainer;
      var _this$props20 = this.props,
          className = _this$props20.className,
          id = _this$props20.id,
          isDisabled = _this$props20.isDisabled,
          menuIsOpen = _this$props20.menuIsOpen;
      var isFocused = this.state.isFocused;
      var commonProps = this.commonProps = this.getCommonProps();
      return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(SelectContainer, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, commonProps, {
        className: className,
        innerProps: {
          id: id,
          onKeyDown: this.onKeyDown
        },
        isDisabled: isDisabled,
        isFocused: isFocused
      }), this.renderLiveRegion(), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Control, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, commonProps, {
        innerRef: this.getControlRef,
        innerProps: {
          onMouseDown: this.onControlMouseDown,
          onTouchEnd: this.onControlTouchEnd
        },
        isDisabled: isDisabled,
        isFocused: isFocused,
        menuIsOpen: menuIsOpen
      }), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(ValueContainer, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, commonProps, {
        isDisabled: isDisabled
      }), this.renderPlaceholderOrValue(), this.renderInput()), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(IndicatorsContainer, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, commonProps, {
        isDisabled: isDisabled
      }), this.renderClearIndicator(), this.renderLoadingIndicator(), this.renderIndicatorSeparator(), this.renderDropdownIndicator())), this.renderMenu(), this.renderFormField());
    }
  }]);

  return Select;
}(react__WEBPACK_IMPORTED_MODULE_11__["Component"]);

Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Select, "defaultProps", defaultProps);




/***/ }),

/***/ "./node_modules/react-select/dist/chunk-39d3fda8.browser.esm.js":
/*!**********************************************************************!*\
  !*** ./node_modules/react-select/dist/chunk-39d3fda8.browser.esm.js ***!
  \**********************************************************************/
/*! exports provided: a, b, c, d, e, f, g, h, i, j, k, n, s */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getScrollParent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getScrollTop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return animatedScrollTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return isMobileDevice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return isDocumentElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return cleanValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getBoundingClientObj; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return scrollIntoView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return isTouchCapable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return classNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return handleInputChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return noop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return scrollTo; });
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");


// ==============================
// NO OP
// ==============================
var noop = function noop() {};
// Class Name Prefixer
// ==============================

/**
 String representation of component state for styling with class names.

 Expects an array of strings OR a string/object pair:
 - className(['comp', 'comp-arg', 'comp-arg-2'])
   @returns 'react-select__comp react-select__comp-arg react-select__comp-arg-2'
 - className('comp', { some: true, state: false })
   @returns 'react-select__comp react-select__comp--some'
*/

function applyPrefixToName(prefix, name) {
  if (!name) {
    return prefix;
  } else if (name[0] === '-') {
    return prefix + name;
  } else {
    return prefix + '__' + name;
  }
}

function classNames(prefix, state, className) {
  var arr = [className];

  if (state && prefix) {
    for (var key in state) {
      if (state.hasOwnProperty(key) && state[key]) {
        arr.push("".concat(applyPrefixToName(prefix, key)));
      }
    }
  }

  return arr.filter(function (i) {
    return i;
  }).map(function (i) {
    return String(i).trim();
  }).join(' ');
} // ==============================
// Clean Value
// ==============================

var cleanValue = function cleanValue(value) {
  if (Array.isArray(value)) return value.filter(Boolean);
  if (Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(value) === 'object' && value !== null) return [value];
  return [];
}; // ==============================
// Handle Input Change
// ==============================

function handleInputChange(inputValue, actionMeta, onInputChange) {
  if (onInputChange) {
    var newValue = onInputChange(inputValue, actionMeta);
    if (typeof newValue === 'string') return newValue;
  }

  return inputValue;
} // ==============================
// Scroll Helpers
// ==============================

function isDocumentElement(el) {
  return [document.documentElement, document.body, window].indexOf(el) > -1;
} // Normalized Scroll Top
// ------------------------------

function getScrollTop(el) {
  if (isDocumentElement(el)) {
    return window.pageYOffset;
  }

  return el.scrollTop;
}
function scrollTo(el, top) {
  // with a scroll distance, we perform scroll on the element
  if (isDocumentElement(el)) {
    window.scrollTo(0, top);
    return;
  }

  el.scrollTop = top;
} // Get Scroll Parent
// ------------------------------

function getScrollParent(element) {
  var style = getComputedStyle(element);
  var excludeStaticParent = style.position === 'absolute';
  var overflowRx = /(auto|scroll)/;
  var docEl = document.documentElement; // suck it, flow...

  if (style.position === 'fixed') return docEl;

  for (var parent = element; parent = parent.parentElement;) {
    style = getComputedStyle(parent);

    if (excludeStaticParent && style.position === 'static') {
      continue;
    }

    if (overflowRx.test(style.overflow + style.overflowY + style.overflowX)) {
      return parent;
    }
  }

  return docEl;
} // Animated Scroll To
// ------------------------------

/**
  @param t: time (elapsed)
  @param b: initial value
  @param c: amount of change
  @param d: duration
*/

function easeOutCubic(t, b, c, d) {
  return c * ((t = t / d - 1) * t * t + 1) + b;
}

function animatedScrollTo(element, to) {
  var duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 200;
  var callback = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : noop;
  var start = getScrollTop(element);
  var change = to - start;
  var increment = 10;
  var currentTime = 0;

  function animateScroll() {
    currentTime += increment;
    var val = easeOutCubic(currentTime, start, change, duration);
    scrollTo(element, val);

    if (currentTime < duration) {
      window.requestAnimationFrame(animateScroll);
    } else {
      callback(element);
    }
  }

  animateScroll();
} // Scroll Into View
// ------------------------------

function scrollIntoView(menuEl, focusedEl) {
  var menuRect = menuEl.getBoundingClientRect();
  var focusedRect = focusedEl.getBoundingClientRect();
  var overScroll = focusedEl.offsetHeight / 3;

  if (focusedRect.bottom + overScroll > menuRect.bottom) {
    scrollTo(menuEl, Math.min(focusedEl.offsetTop + focusedEl.clientHeight - menuEl.offsetHeight + overScroll, menuEl.scrollHeight));
  } else if (focusedRect.top - overScroll < menuRect.top) {
    scrollTo(menuEl, Math.max(focusedEl.offsetTop - overScroll, 0));
  }
} // ==============================
// Get bounding client object
// ==============================
// cannot get keys using array notation with DOMRect

function getBoundingClientObj(element) {
  var rect = element.getBoundingClientRect();
  return {
    bottom: rect.bottom,
    height: rect.height,
    left: rect.left,
    right: rect.right,
    top: rect.top,
    width: rect.width
  };
}
// Touch Capability Detector
// ==============================

function isTouchCapable() {
  try {
    document.createEvent('TouchEvent');
    return true;
  } catch (e) {
    return false;
  }
} // ==============================
// Mobile Device Detector
// ==============================

function isMobileDevice() {
  try {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  } catch (e) {
    return false;
  }
}




/***/ }),

/***/ "./node_modules/react-select/dist/chunk-80640036.browser.esm.js":
/*!**********************************************************************!*\
  !*** ./node_modules/react-select/dist/chunk-80640036.browser.esm.js ***!
  \**********************************************************************/
/*! exports provided: M, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "M", function() { return MenuPlacer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return containerCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return css; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return clearIndicatorCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return dropdownIndicatorCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return groupHeadingCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return indicatorSeparatorCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return groupCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return inputCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return indicatorsContainerCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return loadingMessageCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return menuListCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return loadingIndicatorCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return menuCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return menuPortalCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return multiValueCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return multiValueLabelCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return multiValueRemoveCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return noOptionsMessageCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return optionCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return placeholderCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return css$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return valueContainerCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return defaultComponents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return exportedEqual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return components; });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread */ "./node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _chunk_39d3fda8_browser_esm_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./chunk-39d3fda8.browser.esm.js */ "./node_modules/react-select/dist/chunk-39d3fda8.browser.esm.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @emotion/css */ "./node_modules/@emotion/css/dist/css.browser.esm.js");
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react_input_autosize__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react-input-autosize */ "./node_modules/react-input-autosize/lib/AutosizeInput.js");
/* harmony import */ var react_input_autosize__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(react_input_autosize__WEBPACK_IMPORTED_MODULE_18__);




















function getMenuPlacement(_ref) {
  var maxHeight = _ref.maxHeight,
      menuEl = _ref.menuEl,
      minHeight = _ref.minHeight,
      placement = _ref.placement,
      shouldScroll = _ref.shouldScroll,
      isFixedPosition = _ref.isFixedPosition,
      theme = _ref.theme;
  var spacing = theme.spacing;
  var scrollParent = Object(_chunk_39d3fda8_browser_esm_js__WEBPACK_IMPORTED_MODULE_15__["a"])(menuEl);
  var defaultState = {
    placement: 'bottom',
    maxHeight: maxHeight
  }; // something went wrong, return default state

  if (!menuEl || !menuEl.offsetParent) return defaultState; // we can't trust `scrollParent.scrollHeight` --> it may increase when
  // the menu is rendered

  var _scrollParent$getBoun = scrollParent.getBoundingClientRect(),
      scrollHeight = _scrollParent$getBoun.height;

  var _menuEl$getBoundingCl = menuEl.getBoundingClientRect(),
      menuBottom = _menuEl$getBoundingCl.bottom,
      menuHeight = _menuEl$getBoundingCl.height,
      menuTop = _menuEl$getBoundingCl.top;

  var _menuEl$offsetParent$ = menuEl.offsetParent.getBoundingClientRect(),
      containerTop = _menuEl$offsetParent$.top;

  var viewHeight = window.innerHeight;
  var scrollTop = Object(_chunk_39d3fda8_browser_esm_js__WEBPACK_IMPORTED_MODULE_15__["b"])(scrollParent);
  var marginBottom = parseInt(getComputedStyle(menuEl).marginBottom, 10);
  var marginTop = parseInt(getComputedStyle(menuEl).marginTop, 10);
  var viewSpaceAbove = containerTop - marginTop;
  var viewSpaceBelow = viewHeight - menuTop;
  var scrollSpaceAbove = viewSpaceAbove + scrollTop;
  var scrollSpaceBelow = scrollHeight - scrollTop - menuTop;
  var scrollDown = menuBottom - viewHeight + scrollTop + marginBottom;
  var scrollUp = scrollTop + menuTop - marginTop;
  var scrollDuration = 160;

  switch (placement) {
    case 'auto':
    case 'bottom':
      // 1: the menu will fit, do nothing
      if (viewSpaceBelow >= menuHeight) {
        return {
          placement: 'bottom',
          maxHeight: maxHeight
        };
      } // 2: the menu will fit, if scrolled


      if (scrollSpaceBelow >= menuHeight && !isFixedPosition) {
        if (shouldScroll) {
          Object(_chunk_39d3fda8_browser_esm_js__WEBPACK_IMPORTED_MODULE_15__["c"])(scrollParent, scrollDown, scrollDuration);
        }

        return {
          placement: 'bottom',
          maxHeight: maxHeight
        };
      } // 3: the menu will fit, if constrained


      if (!isFixedPosition && scrollSpaceBelow >= minHeight || isFixedPosition && viewSpaceBelow >= minHeight) {
        if (shouldScroll) {
          Object(_chunk_39d3fda8_browser_esm_js__WEBPACK_IMPORTED_MODULE_15__["c"])(scrollParent, scrollDown, scrollDuration);
        } // we want to provide as much of the menu as possible to the user,
        // so give them whatever is available below rather than the minHeight.


        var constrainedHeight = isFixedPosition ? viewSpaceBelow - marginBottom : scrollSpaceBelow - marginBottom;
        return {
          placement: 'bottom',
          maxHeight: constrainedHeight
        };
      } // 4. Forked beviour when there isn't enough space below
      // AUTO: flip the menu, render above


      if (placement === 'auto' || isFixedPosition) {
        // may need to be constrained after flipping
        var _constrainedHeight = maxHeight;
        var spaceAbove = isFixedPosition ? viewSpaceAbove : scrollSpaceAbove;

        if (spaceAbove >= minHeight) {
          _constrainedHeight = Math.min(spaceAbove - marginBottom - spacing.controlHeight, maxHeight);
        }

        return {
          placement: 'top',
          maxHeight: _constrainedHeight
        };
      } // BOTTOM: allow browser to increase scrollable area and immediately set scroll


      if (placement === 'bottom') {
        Object(_chunk_39d3fda8_browser_esm_js__WEBPACK_IMPORTED_MODULE_15__["s"])(scrollParent, scrollDown);
        return {
          placement: 'bottom',
          maxHeight: maxHeight
        };
      }

      break;

    case 'top':
      // 1: the menu will fit, do nothing
      if (viewSpaceAbove >= menuHeight) {
        return {
          placement: 'top',
          maxHeight: maxHeight
        };
      } // 2: the menu will fit, if scrolled


      if (scrollSpaceAbove >= menuHeight && !isFixedPosition) {
        if (shouldScroll) {
          Object(_chunk_39d3fda8_browser_esm_js__WEBPACK_IMPORTED_MODULE_15__["c"])(scrollParent, scrollUp, scrollDuration);
        }

        return {
          placement: 'top',
          maxHeight: maxHeight
        };
      } // 3: the menu will fit, if constrained


      if (!isFixedPosition && scrollSpaceAbove >= minHeight || isFixedPosition && viewSpaceAbove >= minHeight) {
        var _constrainedHeight2 = maxHeight; // we want to provide as much of the menu as possible to the user,
        // so give them whatever is available below rather than the minHeight.

        if (!isFixedPosition && scrollSpaceAbove >= minHeight || isFixedPosition && viewSpaceAbove >= minHeight) {
          _constrainedHeight2 = isFixedPosition ? viewSpaceAbove - marginTop : scrollSpaceAbove - marginTop;
        }

        if (shouldScroll) {
          Object(_chunk_39d3fda8_browser_esm_js__WEBPACK_IMPORTED_MODULE_15__["c"])(scrollParent, scrollUp, scrollDuration);
        }

        return {
          placement: 'top',
          maxHeight: _constrainedHeight2
        };
      } // 4. not enough space, the browser WILL NOT increase scrollable area when
      // absolutely positioned element rendered above the viewport (only below).
      // Flip the menu, render below


      return {
        placement: 'bottom',
        maxHeight: maxHeight
      };

    default:
      throw new Error("Invalid placement provided \"".concat(placement, "\"."));
  } // fulfil contract with flow: implicit return value of undefined


  return defaultState;
} // Menu Component
// ------------------------------

function alignToControl(placement) {
  var placementToCSSProp = {
    bottom: 'top',
    top: 'bottom'
  };
  return placement ? placementToCSSProp[placement] : 'bottom';
}

var coercePlacement = function coercePlacement(p) {
  return p === 'auto' ? 'bottom' : p;
};

var menuCSS = function menuCSS(_ref2) {
  var _ref3;

  var placement = _ref2.placement,
      _ref2$theme = _ref2.theme,
      borderRadius = _ref2$theme.borderRadius,
      spacing = _ref2$theme.spacing,
      colors = _ref2$theme.colors;
  return _ref3 = {
    label: 'menu'
  }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(_ref3, alignToControl(placement), '100%'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(_ref3, "backgroundColor", colors.neutral0), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(_ref3, "borderRadius", borderRadius), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(_ref3, "boxShadow", '0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(_ref3, "marginBottom", spacing.menuGutter), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(_ref3, "marginTop", spacing.menuGutter), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(_ref3, "position", 'absolute'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(_ref3, "width", '100%'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(_ref3, "zIndex", 1), _ref3;
}; // NOTE: internal only

var MenuPlacer =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(MenuPlacer, _Component);

  function MenuPlacer() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, MenuPlacer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(MenuPlacer)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this)), "state", {
      maxHeight: _this.props.maxMenuHeight,
      placement: null
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this)), "getPlacement", function (ref) {
      var _this$props = _this.props,
          minMenuHeight = _this$props.minMenuHeight,
          maxMenuHeight = _this$props.maxMenuHeight,
          menuPlacement = _this$props.menuPlacement,
          menuPosition = _this$props.menuPosition,
          menuShouldScrollIntoView = _this$props.menuShouldScrollIntoView,
          theme = _this$props.theme;
      var getPortalPlacement = _this.context.getPortalPlacement;
      if (!ref) return; // DO NOT scroll if position is fixed

      var isFixedPosition = menuPosition === 'fixed';
      var shouldScroll = menuShouldScrollIntoView && !isFixedPosition;
      var state = getMenuPlacement({
        maxHeight: maxMenuHeight,
        menuEl: ref,
        minHeight: minMenuHeight,
        placement: menuPlacement,
        shouldScroll: shouldScroll,
        isFixedPosition: isFixedPosition,
        theme: theme
      });
      if (getPortalPlacement) getPortalPlacement(state);

      _this.setState(state);
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this)), "getUpdatedProps", function () {
      var menuPlacement = _this.props.menuPlacement;
      var placement = _this.state.placement || coercePlacement(menuPlacement);
      return Object(_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, _this.props, {
        placement: placement,
        maxHeight: _this.state.maxHeight
      });
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(MenuPlacer, [{
    key: "render",
    value: function render() {
      var children = this.props.children;
      return children({
        ref: this.getPlacement,
        placerProps: this.getUpdatedProps()
      });
    }
  }]);

  return MenuPlacer;
}(react__WEBPACK_IMPORTED_MODULE_10__["Component"]);

Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(MenuPlacer, "contextTypes", {
  getPortalPlacement: prop_types__WEBPACK_IMPORTED_MODULE_13___default.a.func
});

var Menu = function Menu(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerRef = props.innerRef,
      innerProps = props.innerProps;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_11__["jsx"])("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    css: getStyles('menu', props),
    className: cx({
      menu: true
    }, className)
  }, innerProps, {
    ref: innerRef
  }), children);
};
// Menu List
// ==============================

var menuListCSS = function menuListCSS(_ref4) {
  var maxHeight = _ref4.maxHeight,
      baseUnit = _ref4.theme.spacing.baseUnit;
  return {
    maxHeight: maxHeight,
    overflowY: 'auto',
    paddingBottom: baseUnit,
    paddingTop: baseUnit,
    position: 'relative',
    // required for offset[Height, Top] > keyboard scroll
    WebkitOverflowScrolling: 'touch'
  };
};
var MenuList = function MenuList(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      isMulti = props.isMulti,
      innerRef = props.innerRef;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_11__["jsx"])("div", {
    css: getStyles('menuList', props),
    className: cx({
      'menu-list': true,
      'menu-list--is-multi': isMulti
    }, className),
    ref: innerRef
  }, children);
}; // ==============================
// Menu Notices
// ==============================

var noticeCSS = function noticeCSS(_ref5) {
  var _ref5$theme = _ref5.theme,
      baseUnit = _ref5$theme.spacing.baseUnit,
      colors = _ref5$theme.colors;
  return {
    color: colors.neutral40,
    padding: "".concat(baseUnit * 2, "px ").concat(baseUnit * 3, "px"),
    textAlign: 'center'
  };
};

var noOptionsMessageCSS = noticeCSS;
var loadingMessageCSS = noticeCSS;
var NoOptionsMessage = function NoOptionsMessage(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_11__["jsx"])("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    css: getStyles('noOptionsMessage', props),
    className: cx({
      'menu-notice': true,
      'menu-notice--no-options': true
    }, className)
  }, innerProps), children);
};
NoOptionsMessage.defaultProps = {
  children: 'No options'
};
var LoadingMessage = function LoadingMessage(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_11__["jsx"])("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    css: getStyles('loadingMessage', props),
    className: cx({
      'menu-notice': true,
      'menu-notice--loading': true
    }, className)
  }, innerProps), children);
};
LoadingMessage.defaultProps = {
  children: 'Loading...'
}; // ==============================
// Menu Portal
// ==============================

var menuPortalCSS = function menuPortalCSS(_ref6) {
  var rect = _ref6.rect,
      offset = _ref6.offset,
      position = _ref6.position;
  return {
    left: rect.left,
    position: position,
    top: offset,
    width: rect.width,
    zIndex: 1
  };
};
var MenuPortal =
/*#__PURE__*/
function (_Component2) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(MenuPortal, _Component2);

  function MenuPortal() {
    var _getPrototypeOf3;

    var _this2;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, MenuPortal);

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    _this2 = Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, (_getPrototypeOf3 = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(MenuPortal)).call.apply(_getPrototypeOf3, [this].concat(args)));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this2)), "state", {
      placement: null
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this2)), "getPortalPlacement", function (_ref7) {
      var placement = _ref7.placement;
      var initialPlacement = coercePlacement(_this2.props.menuPlacement); // avoid re-renders if the placement has not changed

      if (placement !== initialPlacement) {
        _this2.setState({
          placement: placement
        });
      }
    });

    return _this2;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(MenuPortal, [{
    key: "getChildContext",
    value: function getChildContext() {
      return {
        getPortalPlacement: this.getPortalPlacement
      };
    } // callback for occassions where the menu must "flip"

  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          appendTo = _this$props2.appendTo,
          children = _this$props2.children,
          controlElement = _this$props2.controlElement,
          menuPlacement = _this$props2.menuPlacement,
          position = _this$props2.menuPosition,
          getStyles = _this$props2.getStyles;
      var isFixed = position === 'fixed'; // bail early if required elements aren't present

      if (!appendTo && !isFixed || !controlElement) {
        return null;
      }

      var placement = this.state.placement || coercePlacement(menuPlacement);
      var rect = Object(_chunk_39d3fda8_browser_esm_js__WEBPACK_IMPORTED_MODULE_15__["g"])(controlElement);
      var scrollDistance = isFixed ? 0 : window.pageYOffset;
      var offset = rect[placement] + scrollDistance;
      var state = {
        offset: offset,
        position: position,
        rect: rect
      }; // same wrapper element whether fixed or portalled

      var menuWrapper = Object(_emotion_core__WEBPACK_IMPORTED_MODULE_11__["jsx"])("div", {
        css: getStyles('menuPortal', state)
      }, children);
      return appendTo ? Object(react_dom__WEBPACK_IMPORTED_MODULE_12__["createPortal"])(menuWrapper, appendTo) : menuWrapper;
    }
  }]);

  return MenuPortal;
}(react__WEBPACK_IMPORTED_MODULE_10__["Component"]);

Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(MenuPortal, "childContextTypes", {
  getPortalPlacement: prop_types__WEBPACK_IMPORTED_MODULE_13___default.a.func
});

var isArray = Array.isArray;
var keyList = Object.keys;
var hasProp = Object.prototype.hasOwnProperty;

function equal(a, b) {
  // fast-deep-equal index.js 2.0.1
  if (a === b) return true;

  if (a && b && Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_14__["default"])(a) == 'object' && Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_14__["default"])(b) == 'object') {
    var arrA = isArray(a),
        arrB = isArray(b),
        i,
        length,
        key;

    if (arrA && arrB) {
      length = a.length;
      if (length != b.length) return false;

      for (i = length; i-- !== 0;) {
        if (!equal(a[i], b[i])) return false;
      }

      return true;
    }

    if (arrA != arrB) return false;
    var dateA = a instanceof Date,
        dateB = b instanceof Date;
    if (dateA != dateB) return false;
    if (dateA && dateB) return a.getTime() == b.getTime();
    var regexpA = a instanceof RegExp,
        regexpB = b instanceof RegExp;
    if (regexpA != regexpB) return false;
    if (regexpA && regexpB) return a.toString() == b.toString();
    var keys = keyList(a);
    length = keys.length;

    if (length !== keyList(b).length) {
      return false;
    }

    for (i = length; i-- !== 0;) {
      if (!hasProp.call(b, keys[i])) return false;
    } // end fast-deep-equal
    // Custom handling for React


    for (i = length; i-- !== 0;) {
      key = keys[i];

      if (key === '_owner' && a.$$typeof) {
        // React-specific: avoid traversing React elements' _owner.
        //  _owner contains circular references
        // and is not needed when comparing the actual elements (and not their owners)
        // .$$typeof and ._store on just reasonable markers of a react element
        continue;
      } else {
        // all other properties should be traversed as usual
        if (!equal(a[key], b[key])) return false;
      }
    } // fast-deep-equal index.js 2.0.1


    return true;
  }

  return a !== a && b !== b;
} // end fast-deep-equal


function exportedEqual(a, b) {
  try {
    return equal(a, b);
  } catch (error) {
    if (error.message && error.message.match(/stack|recursion/i)) {
      // warn on circular references, don't crash
      // browsers give this different errors name and messages:
      // chrome/safari: "RangeError", "Maximum call stack size exceeded"
      // firefox: "InternalError", too much recursion"
      // edge: "Error", "Out of stack space"
      console.warn('Warning: react-fast-compare does not handle circular references.', error.name, error.message);
      return false;
    } // some other error. we should definitely know about these


    throw error;
  }
}

var containerCSS = function containerCSS(_ref) {
  var isDisabled = _ref.isDisabled,
      isRtl = _ref.isRtl;
  return {
    label: 'container',
    direction: isRtl ? 'rtl' : null,
    pointerEvents: isDisabled ? 'none' : null,
    // cancel mouse events when disabled
    position: 'relative'
  };
};
var SelectContainer = function SelectContainer(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps,
      isDisabled = props.isDisabled,
      isRtl = props.isRtl;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_11__["jsx"])("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    css: getStyles('container', props),
    className: cx({
      '--is-disabled': isDisabled,
      '--is-rtl': isRtl
    }, className)
  }, innerProps), children);
}; // ==============================
// Value Container
// ==============================

var valueContainerCSS = function valueContainerCSS(_ref2) {
  var spacing = _ref2.theme.spacing;
  return {
    alignItems: 'center',
    display: 'flex',
    flex: 1,
    flexWrap: 'wrap',
    padding: "".concat(spacing.baseUnit / 2, "px ").concat(spacing.baseUnit * 2, "px"),
    WebkitOverflowScrolling: 'touch',
    position: 'relative',
    overflow: 'hidden'
  };
};
var ValueContainer =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(ValueContainer, _Component);

  function ValueContainer() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, ValueContainer);

    return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(ValueContainer).apply(this, arguments));
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(ValueContainer, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          cx = _this$props.cx,
          isMulti = _this$props.isMulti,
          getStyles = _this$props.getStyles,
          hasValue = _this$props.hasValue;
      return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_11__["jsx"])("div", {
        css: getStyles('valueContainer', this.props),
        className: cx({
          'value-container': true,
          'value-container--is-multi': isMulti,
          'value-container--has-value': hasValue
        }, className)
      }, children);
    }
  }]);

  return ValueContainer;
}(react__WEBPACK_IMPORTED_MODULE_10__["Component"]); // ==============================
// Indicator Container
// ==============================

var indicatorsContainerCSS = function indicatorsContainerCSS() {
  return {
    alignItems: 'center',
    alignSelf: 'stretch',
    display: 'flex',
    flexShrink: 0
  };
};
var IndicatorsContainer = function IndicatorsContainer(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_11__["jsx"])("div", {
    css: getStyles('indicatorsContainer', props),
    className: cx({
      indicators: true
    }, className)
  }, children);
};

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_17__["default"])(["\n  0%, 80%, 100% { opacity: 0; }\n  40% { opacity: 1; }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var _ref2 =  false ? undefined : {
  name: "19bqh2r",
  styles: "display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGljYXRvcnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0JJIiwiZmlsZSI6ImluZGljYXRvcnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAZmxvd1xuLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyB0eXBlIE5vZGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBqc3gsIGtleWZyYW1lcyB9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xuXG5pbXBvcnQgdHlwZSB7IENvbW1vblByb3BzLCBUaGVtZSB9IGZyb20gJy4uL3R5cGVzJztcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBEcm9wZG93biAmIENsZWFyIEljb25zXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuY29uc3QgU3ZnID0gKHsgc2l6ZSwgLi4ucHJvcHMgfTogeyBzaXplOiBudW1iZXIgfSkgPT4gKFxuICA8c3ZnXG4gICAgaGVpZ2h0PXtzaXplfVxuICAgIHdpZHRoPXtzaXplfVxuICAgIHZpZXdCb3g9XCIwIDAgMjAgMjBcIlxuICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgZm9jdXNhYmxlPVwiZmFsc2VcIlxuICAgIGNzcz17e1xuICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICBmaWxsOiAnY3VycmVudENvbG9yJyxcbiAgICAgIGxpbmVIZWlnaHQ6IDEsXG4gICAgICBzdHJva2U6ICdjdXJyZW50Q29sb3InLFxuICAgICAgc3Ryb2tlV2lkdGg6IDAsXG4gICAgfX1cbiAgICB7Li4ucHJvcHN9XG4gIC8+XG4pO1xuXG5leHBvcnQgY29uc3QgQ3Jvc3NJY29uID0gKHByb3BzOiBhbnkpID0+IChcbiAgPFN2ZyBzaXplPXsyMH0gey4uLnByb3BzfT5cbiAgICA8cGF0aCBkPVwiTTE0LjM0OCAxNC44NDljLTAuNDY5IDAuNDY5LTEuMjI5IDAuNDY5LTEuNjk3IDBsLTIuNjUxLTMuMDMwLTIuNjUxIDMuMDI5Yy0wLjQ2OSAwLjQ2OS0xLjIyOSAwLjQ2OS0xLjY5NyAwLTAuNDY5LTAuNDY5LTAuNDY5LTEuMjI5IDAtMS42OTdsMi43NTgtMy4xNS0yLjc1OS0zLjE1MmMtMC40NjktMC40NjktMC40NjktMS4yMjggMC0xLjY5N3MxLjIyOC0wLjQ2OSAxLjY5NyAwbDIuNjUyIDMuMDMxIDIuNjUxLTMuMDMxYzAuNDY5LTAuNDY5IDEuMjI4LTAuNDY5IDEuNjk3IDBzMC40NjkgMS4yMjkgMCAxLjY5N2wtMi43NTggMy4xNTIgMi43NTggMy4xNWMwLjQ2OSAwLjQ2OSAwLjQ2OSAxLjIyOSAwIDEuNjk4elwiIC8+XG4gIDwvU3ZnPlxuKTtcbmV4cG9ydCBjb25zdCBEb3duQ2hldnJvbiA9IChwcm9wczogYW55KSA9PiAoXG4gIDxTdmcgc2l6ZT17MjB9IHsuLi5wcm9wc30+XG4gICAgPHBhdGggZD1cIk00LjUxNiA3LjU0OGMwLjQzNi0wLjQ0NiAxLjA0My0wLjQ4MSAxLjU3NiAwbDMuOTA4IDMuNzQ3IDMuOTA4LTMuNzQ3YzAuNTMzLTAuNDgxIDEuMTQxLTAuNDQ2IDEuNTc0IDAgMC40MzYgMC40NDUgMC40MDggMS4xOTcgMCAxLjYxNS0wLjQwNiAwLjQxOC00LjY5NSA0LjUwMi00LjY5NSA0LjUwMi0wLjIxNyAwLjIyMy0wLjUwMiAwLjMzNS0wLjc4NyAwLjMzNXMtMC41Ny0wLjExMi0wLjc4OS0wLjMzNWMwIDAtNC4yODctNC4wODQtNC42OTUtNC41MDJzLTAuNDM2LTEuMTcgMC0xLjYxNXpcIiAvPlxuICA8L1N2Zz5cbik7XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gRHJvcGRvd24gJiBDbGVhciBCdXR0b25zXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuZXhwb3J0IHR5cGUgSW5kaWNhdG9yUHJvcHMgPSBDb21tb25Qcm9wcyAmIHtcbiAgLyoqIFRoZSBjaGlsZHJlbiB0byBiZSByZW5kZXJlZCBpbnNpZGUgdGhlIGluZGljYXRvci4gKi9cbiAgY2hpbGRyZW46IE5vZGUsXG4gIC8qKiBQcm9wcyB0aGF0IHdpbGwgYmUgcGFzc2VkIG9uIHRvIHRoZSBjaGlsZHJlbi4gKi9cbiAgaW5uZXJQcm9wczogYW55LFxuICAvKiogVGhlIGZvY3VzZWQgc3RhdGUgb2YgdGhlIHNlbGVjdC4gKi9cbiAgaXNGb2N1c2VkOiBib29sZWFuLFxuICAvKiogV2hldGhlciB0aGUgdGV4dCBpcyByaWdodCB0byBsZWZ0ICovXG4gIGlzUnRsOiBib29sZWFuLFxufTtcblxuY29uc3QgYmFzZUNTUyA9ICh7XG4gIGlzRm9jdXNlZCxcbiAgdGhlbWU6IHtcbiAgICBzcGFjaW5nOiB7IGJhc2VVbml0IH0sXG4gICAgY29sb3JzLFxuICB9LFxufTogSW5kaWNhdG9yUHJvcHMpID0+ICh7XG4gIGxhYmVsOiAnaW5kaWNhdG9yQ29udGFpbmVyJyxcbiAgY29sb3I6IGlzRm9jdXNlZCA/IGNvbG9ycy5uZXV0cmFsNjAgOiBjb2xvcnMubmV1dHJhbDIwLFxuICBkaXNwbGF5OiAnZmxleCcsXG4gIHBhZGRpbmc6IGJhc2VVbml0ICogMixcbiAgdHJhbnNpdGlvbjogJ2NvbG9yIDE1MG1zJyxcblxuICAnOmhvdmVyJzoge1xuICAgIGNvbG9yOiBpc0ZvY3VzZWQgPyBjb2xvcnMubmV1dHJhbDgwIDogY29sb3JzLm5ldXRyYWw0MCxcbiAgfSxcbn0pO1xuXG5leHBvcnQgY29uc3QgZHJvcGRvd25JbmRpY2F0b3JDU1MgPSBiYXNlQ1NTO1xuZXhwb3J0IGNvbnN0IERyb3Bkb3duSW5kaWNhdG9yID0gKHByb3BzOiBJbmRpY2F0b3JQcm9wcykgPT4ge1xuICBjb25zdCB7IGNoaWxkcmVuLCBjbGFzc05hbWUsIGN4LCBnZXRTdHlsZXMsIGlubmVyUHJvcHMgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgICAgY3NzPXtnZXRTdHlsZXMoJ2Ryb3Bkb3duSW5kaWNhdG9yJywgcHJvcHMpfVxuICAgICAgY2xhc3NOYW1lPXtjeChcbiAgICAgICAge1xuICAgICAgICAgIGluZGljYXRvcjogdHJ1ZSxcbiAgICAgICAgICAnZHJvcGRvd24taW5kaWNhdG9yJzogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgY2xhc3NOYW1lXG4gICAgICApfVxuICAgID5cbiAgICAgIHtjaGlsZHJlbiB8fCA8RG93bkNoZXZyb24gLz59XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgY2xlYXJJbmRpY2F0b3JDU1MgPSBiYXNlQ1NTO1xuZXhwb3J0IGNvbnN0IENsZWFySW5kaWNhdG9yID0gKHByb3BzOiBJbmRpY2F0b3JQcm9wcykgPT4ge1xuICBjb25zdCB7IGNoaWxkcmVuLCBjbGFzc05hbWUsIGN4LCBnZXRTdHlsZXMsIGlubmVyUHJvcHMgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgICAgY3NzPXtnZXRTdHlsZXMoJ2NsZWFySW5kaWNhdG9yJywgcHJvcHMpfVxuICAgICAgY2xhc3NOYW1lPXtjeChcbiAgICAgICAge1xuICAgICAgICAgIGluZGljYXRvcjogdHJ1ZSxcbiAgICAgICAgICAnY2xlYXItaW5kaWNhdG9yJzogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgY2xhc3NOYW1lXG4gICAgICApfVxuICAgID5cbiAgICAgIHtjaGlsZHJlbiB8fCA8Q3Jvc3NJY29uIC8+fVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBTZXBhcmF0b3Jcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG50eXBlIFNlcGFyYXRvclN0YXRlID0geyBpc0Rpc2FibGVkOiBib29sZWFuIH07XG5cbmV4cG9ydCBjb25zdCBpbmRpY2F0b3JTZXBhcmF0b3JDU1MgPSAoe1xuICBpc0Rpc2FibGVkLFxuICB0aGVtZToge1xuICAgIHNwYWNpbmc6IHsgYmFzZVVuaXQgfSxcbiAgICBjb2xvcnMsXG4gIH0sXG59OiBDb21tb25Qcm9wcyAmIFNlcGFyYXRvclN0YXRlKSA9PiAoe1xuICBsYWJlbDogJ2luZGljYXRvclNlcGFyYXRvcicsXG4gIGFsaWduU2VsZjogJ3N0cmV0Y2gnLFxuICBiYWNrZ3JvdW5kQ29sb3I6IGlzRGlzYWJsZWQgPyBjb2xvcnMubmV1dHJhbDEwIDogY29sb3JzLm5ldXRyYWwyMCxcbiAgbWFyZ2luQm90dG9tOiBiYXNlVW5pdCAqIDIsXG4gIG1hcmdpblRvcDogYmFzZVVuaXQgKiAyLFxuICB3aWR0aDogMSxcbn0pO1xuXG5leHBvcnQgY29uc3QgSW5kaWNhdG9yU2VwYXJhdG9yID0gKHByb3BzOiBJbmRpY2F0b3JQcm9wcykgPT4ge1xuICBjb25zdCB7IGNsYXNzTmFtZSwgY3gsIGdldFN0eWxlcywgaW5uZXJQcm9wcyB9ID0gcHJvcHM7XG4gIHJldHVybiAoXG4gICAgPHNwYW5cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgICAgY3NzPXtnZXRTdHlsZXMoJ2luZGljYXRvclNlcGFyYXRvcicsIHByb3BzKX1cbiAgICAgIGNsYXNzTmFtZT17Y3goeyAnaW5kaWNhdG9yLXNlcGFyYXRvcic6IHRydWUgfSwgY2xhc3NOYW1lKX1cbiAgICAvPlxuICApO1xufTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBMb2FkaW5nXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuY29uc3QgbG9hZGluZ0RvdEFuaW1hdGlvbnMgPSBrZXlmcmFtZXNgXG4gIDAlLCA4MCUsIDEwMCUgeyBvcGFjaXR5OiAwOyB9XG4gIDQwJSB7IG9wYWNpdHk6IDE7IH1cbmA7XG5cbmV4cG9ydCBjb25zdCBsb2FkaW5nSW5kaWNhdG9yQ1NTID0gKHtcbiAgaXNGb2N1c2VkLFxuICBzaXplLFxuICB0aGVtZToge1xuICAgIGNvbG9ycyxcbiAgICBzcGFjaW5nOiB7IGJhc2VVbml0IH0sXG4gIH0sXG59OiB7XG4gIGlzRm9jdXNlZDogYm9vbGVhbixcbiAgc2l6ZTogbnVtYmVyLFxuICB0aGVtZTogVGhlbWUsXG59KSA9PiAoe1xuICBsYWJlbDogJ2xvYWRpbmdJbmRpY2F0b3InLFxuICBjb2xvcjogaXNGb2N1c2VkID8gY29sb3JzLm5ldXRyYWw2MCA6IGNvbG9ycy5uZXV0cmFsMjAsXG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgcGFkZGluZzogYmFzZVVuaXQgKiAyLFxuICB0cmFuc2l0aW9uOiAnY29sb3IgMTUwbXMnLFxuICBhbGlnblNlbGY6ICdjZW50ZXInLFxuICBmb250U2l6ZTogc2l6ZSxcbiAgbGluZUhlaWdodDogMSxcbiAgbWFyZ2luUmlnaHQ6IHNpemUsXG4gIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gIHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnLFxufSk7XG5cbnR5cGUgRG90UHJvcHMgPSB7IGRlbGF5OiBudW1iZXIsIG9mZnNldDogYm9vbGVhbiB9O1xuY29uc3QgTG9hZGluZ0RvdCA9ICh7IGRlbGF5LCBvZmZzZXQgfTogRG90UHJvcHMpID0+IChcbiAgPHNwYW5cbiAgICBjc3M9e3tcbiAgICAgIGFuaW1hdGlvbjogYCR7bG9hZGluZ0RvdEFuaW1hdGlvbnN9IDFzIGVhc2UtaW4tb3V0ICR7ZGVsYXl9bXMgaW5maW5pdGU7YCxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ2N1cnJlbnRDb2xvcicsXG4gICAgICBib3JkZXJSYWRpdXM6ICcxZW0nLFxuICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICBtYXJnaW5MZWZ0OiBvZmZzZXQgPyAnMWVtJyA6IG51bGwsXG4gICAgICBoZWlnaHQ6ICcxZW0nLFxuICAgICAgdmVydGljYWxBbGlnbjogJ3RvcCcsXG4gICAgICB3aWR0aDogJzFlbScsXG4gICAgfX1cbiAgLz5cbik7XG5cbmV4cG9ydCB0eXBlIExvYWRpbmdJY29uUHJvcHMgPSB7XG4gIC8qKiBQcm9wcyB0aGF0IHdpbGwgYmUgcGFzc2VkIG9uIHRvIHRoZSBjaGlsZHJlbi4gKi9cbiAgaW5uZXJQcm9wczogYW55LFxuICAvKiogVGhlIGZvY3VzZWQgc3RhdGUgb2YgdGhlIHNlbGVjdC4gKi9cbiAgaXNGb2N1c2VkOiBib29sZWFuLFxuICAvKiogV2hldGhlciB0aGUgdGV4dCBpcyByaWdodCB0byBsZWZ0ICovXG4gIGlzUnRsOiBib29sZWFuLFxufSAmIENvbW1vblByb3BzICYge1xuICAgIC8qKiBTZXQgc2l6ZSBvZiB0aGUgY29udGFpbmVyLiAqL1xuICAgIHNpemU6IG51bWJlcixcbiAgfTtcbmV4cG9ydCBjb25zdCBMb2FkaW5nSW5kaWNhdG9yID0gKHByb3BzOiBMb2FkaW5nSWNvblByb3BzKSA9PiB7XG4gIGNvbnN0IHsgY2xhc3NOYW1lLCBjeCwgZ2V0U3R5bGVzLCBpbm5lclByb3BzLCBpc1J0bCB9ID0gcHJvcHM7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICB7Li4uaW5uZXJQcm9wc31cbiAgICAgIGNzcz17Z2V0U3R5bGVzKCdsb2FkaW5nSW5kaWNhdG9yJywgcHJvcHMpfVxuICAgICAgY2xhc3NOYW1lPXtjeChcbiAgICAgICAge1xuICAgICAgICAgIGluZGljYXRvcjogdHJ1ZSxcbiAgICAgICAgICAnbG9hZGluZy1pbmRpY2F0b3InOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICBjbGFzc05hbWVcbiAgICAgICl9XG4gICAgPlxuICAgICAgPExvYWRpbmdEb3QgZGVsYXk9ezB9IG9mZnNldD17aXNSdGx9IC8+XG4gICAgICA8TG9hZGluZ0RvdCBkZWxheT17MTYwfSBvZmZzZXQgLz5cbiAgICAgIDxMb2FkaW5nRG90IGRlbGF5PXszMjB9IG9mZnNldD17IWlzUnRsfSAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcbkxvYWRpbmdJbmRpY2F0b3IuZGVmYXVsdFByb3BzID0geyBzaXplOiA0IH07XG4iXX0= */"
};

// ==============================
// Dropdown & Clear Icons
// ==============================
var Svg = function Svg(_ref) {
  var size = _ref.size,
      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, ["size"]);

  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_11__["jsx"])("svg", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    height: size,
    width: size,
    viewBox: "0 0 20 20",
    "aria-hidden": "true",
    focusable: "false",
    css: _ref2
  }, props));
};

var CrossIcon = function CrossIcon(props) {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_11__["jsx"])(Svg, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    size: 20
  }, props), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_11__["jsx"])("path", {
    d: "M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"
  }));
};
var DownChevron = function DownChevron(props) {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_11__["jsx"])(Svg, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    size: 20
  }, props), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_11__["jsx"])("path", {
    d: "M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"
  }));
}; // ==============================
// Dropdown & Clear Buttons
// ==============================

var baseCSS = function baseCSS(_ref3) {
  var isFocused = _ref3.isFocused,
      _ref3$theme = _ref3.theme,
      baseUnit = _ref3$theme.spacing.baseUnit,
      colors = _ref3$theme.colors;
  return {
    label: 'indicatorContainer',
    color: isFocused ? colors.neutral60 : colors.neutral20,
    display: 'flex',
    padding: baseUnit * 2,
    transition: 'color 150ms',
    ':hover': {
      color: isFocused ? colors.neutral80 : colors.neutral40
    }
  };
};

var dropdownIndicatorCSS = baseCSS;
var DropdownIndicator = function DropdownIndicator(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_11__["jsx"])("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, innerProps, {
    css: getStyles('dropdownIndicator', props),
    className: cx({
      indicator: true,
      'dropdown-indicator': true
    }, className)
  }), children || Object(_emotion_core__WEBPACK_IMPORTED_MODULE_11__["jsx"])(DownChevron, null));
};
var clearIndicatorCSS = baseCSS;
var ClearIndicator = function ClearIndicator(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_11__["jsx"])("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, innerProps, {
    css: getStyles('clearIndicator', props),
    className: cx({
      indicator: true,
      'clear-indicator': true
    }, className)
  }), children || Object(_emotion_core__WEBPACK_IMPORTED_MODULE_11__["jsx"])(CrossIcon, null));
}; // ==============================
// Separator
// ==============================

var indicatorSeparatorCSS = function indicatorSeparatorCSS(_ref4) {
  var isDisabled = _ref4.isDisabled,
      _ref4$theme = _ref4.theme,
      baseUnit = _ref4$theme.spacing.baseUnit,
      colors = _ref4$theme.colors;
  return {
    label: 'indicatorSeparator',
    alignSelf: 'stretch',
    backgroundColor: isDisabled ? colors.neutral10 : colors.neutral20,
    marginBottom: baseUnit * 2,
    marginTop: baseUnit * 2,
    width: 1
  };
};
var IndicatorSeparator = function IndicatorSeparator(props) {
  var className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_11__["jsx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, innerProps, {
    css: getStyles('indicatorSeparator', props),
    className: cx({
      'indicator-separator': true
    }, className)
  }));
}; // ==============================
// Loading
// ==============================

var loadingDotAnimations = Object(_emotion_core__WEBPACK_IMPORTED_MODULE_11__["keyframes"])(_templateObject());
var loadingIndicatorCSS = function loadingIndicatorCSS(_ref5) {
  var isFocused = _ref5.isFocused,
      size = _ref5.size,
      _ref5$theme = _ref5.theme,
      colors = _ref5$theme.colors,
      baseUnit = _ref5$theme.spacing.baseUnit;
  return {
    label: 'loadingIndicator',
    color: isFocused ? colors.neutral60 : colors.neutral20,
    display: 'flex',
    padding: baseUnit * 2,
    transition: 'color 150ms',
    alignSelf: 'center',
    fontSize: size,
    lineHeight: 1,
    marginRight: size,
    textAlign: 'center',
    verticalAlign: 'middle'
  };
};

var LoadingDot = function LoadingDot(_ref6) {
  var delay = _ref6.delay,
      offset = _ref6.offset;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_11__["jsx"])("span", {
    css:
    /*#__PURE__*/
    Object(_emotion_css__WEBPACK_IMPORTED_MODULE_16__["default"])({
      animation: "".concat(loadingDotAnimations, " 1s ease-in-out ").concat(delay, "ms infinite;"),
      backgroundColor: 'currentColor',
      borderRadius: '1em',
      display: 'inline-block',
      marginLeft: offset ? '1em' : null,
      height: '1em',
      verticalAlign: 'top',
      width: '1em'
    },  false ? undefined : "")
  });
};

var LoadingIndicator = function LoadingIndicator(props) {
  var className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps,
      isRtl = props.isRtl;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_11__["jsx"])("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, innerProps, {
    css: getStyles('loadingIndicator', props),
    className: cx({
      indicator: true,
      'loading-indicator': true
    }, className)
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_11__["jsx"])(LoadingDot, {
    delay: 0,
    offset: isRtl
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_11__["jsx"])(LoadingDot, {
    delay: 160,
    offset: true
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_11__["jsx"])(LoadingDot, {
    delay: 320,
    offset: !isRtl
  }));
};
LoadingIndicator.defaultProps = {
  size: 4
};

var css = function css(_ref) {
  var isDisabled = _ref.isDisabled,
      isFocused = _ref.isFocused,
      _ref$theme = _ref.theme,
      colors = _ref$theme.colors,
      borderRadius = _ref$theme.borderRadius,
      spacing = _ref$theme.spacing;
  return {
    label: 'control',
    alignItems: 'center',
    backgroundColor: isDisabled ? colors.neutral5 : colors.neutral0,
    borderColor: isDisabled ? colors.neutral10 : isFocused ? colors.primary : colors.neutral20,
    borderRadius: borderRadius,
    borderStyle: 'solid',
    borderWidth: 1,
    boxShadow: isFocused ? "0 0 0 1px ".concat(colors.primary) : null,
    cursor: 'default',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    minHeight: spacing.controlHeight,
    outline: '0 !important',
    position: 'relative',
    transition: 'all 100ms',
    '&:hover': {
      borderColor: isFocused ? colors.primary : colors.neutral30
    }
  };
};

var Control = function Control(props) {
  var children = props.children,
      cx = props.cx,
      getStyles = props.getStyles,
      className = props.className,
      isDisabled = props.isDisabled,
      isFocused = props.isFocused,
      innerRef = props.innerRef,
      innerProps = props.innerProps,
      menuIsOpen = props.menuIsOpen;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_11__["jsx"])("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    ref: innerRef,
    css: getStyles('control', props),
    className: cx({
      control: true,
      'control--is-disabled': isDisabled,
      'control--is-focused': isFocused,
      'control--menu-is-open': menuIsOpen
    }, className)
  }, innerProps), children);
};

var groupCSS = function groupCSS(_ref) {
  var spacing = _ref.theme.spacing;
  return {
    paddingBottom: spacing.baseUnit * 2,
    paddingTop: spacing.baseUnit * 2
  };
};

var Group = function Group(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      Heading = props.Heading,
      headingProps = props.headingProps,
      label = props.label,
      theme = props.theme,
      selectProps = props.selectProps;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_11__["jsx"])("div", {
    css: getStyles('group', props),
    className: cx({
      group: true
    }, className)
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_11__["jsx"])(Heading, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, headingProps, {
    selectProps: selectProps,
    theme: theme,
    getStyles: getStyles,
    cx: cx
  }), label), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_11__["jsx"])("div", null, children));
};

var groupHeadingCSS = function groupHeadingCSS(_ref2) {
  var spacing = _ref2.theme.spacing;
  return {
    label: 'group',
    color: '#999',
    cursor: 'default',
    display: 'block',
    fontSize: '75%',
    fontWeight: '500',
    marginBottom: '0.25em',
    paddingLeft: spacing.baseUnit * 3,
    paddingRight: spacing.baseUnit * 3,
    textTransform: 'uppercase'
  };
};
var GroupHeading = function GroupHeading(props) {
  var className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      theme = props.theme,
      selectProps = props.selectProps,
      cleanProps = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(props, ["className", "cx", "getStyles", "theme", "selectProps"]);

  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_11__["jsx"])("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    css: getStyles('groupHeading', Object(_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({
      theme: theme
    }, cleanProps)),
    className: cx({
      'group-heading': true
    }, className)
  }, cleanProps));
};

var inputCSS = function inputCSS(_ref) {
  var isDisabled = _ref.isDisabled,
      _ref$theme = _ref.theme,
      spacing = _ref$theme.spacing,
      colors = _ref$theme.colors;
  return {
    margin: spacing.baseUnit / 2,
    paddingBottom: spacing.baseUnit / 2,
    paddingTop: spacing.baseUnit / 2,
    visibility: isDisabled ? 'hidden' : 'visible',
    color: colors.neutral80
  };
};

var inputStyle = function inputStyle(isHidden) {
  return {
    label: 'input',
    background: 0,
    border: 0,
    fontSize: 'inherit',
    opacity: isHidden ? 0 : 1,
    outline: 0,
    padding: 0,
    color: 'inherit'
  };
};

var Input = function Input(_ref2) {
  var className = _ref2.className,
      cx = _ref2.cx,
      getStyles = _ref2.getStyles,
      innerRef = _ref2.innerRef,
      isHidden = _ref2.isHidden,
      isDisabled = _ref2.isDisabled,
      theme = _ref2.theme,
      selectProps = _ref2.selectProps,
      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref2, ["className", "cx", "getStyles", "innerRef", "isHidden", "isDisabled", "theme", "selectProps"]);

  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_11__["jsx"])("div", {
    css: getStyles('input', Object(_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({
      theme: theme
    }, props))
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_11__["jsx"])(react_input_autosize__WEBPACK_IMPORTED_MODULE_18___default.a, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    className: cx({
      input: true
    }, className),
    inputRef: innerRef,
    inputStyle: inputStyle(isHidden),
    disabled: isDisabled
  }, props)));
};

var multiValueCSS = function multiValueCSS(_ref) {
  var _ref$theme = _ref.theme,
      spacing = _ref$theme.spacing,
      borderRadius = _ref$theme.borderRadius,
      colors = _ref$theme.colors;
  return {
    label: 'multiValue',
    backgroundColor: colors.neutral10,
    borderRadius: borderRadius / 2,
    display: 'flex',
    margin: spacing.baseUnit / 2,
    minWidth: 0 // resolves flex/text-overflow bug

  };
};
var multiValueLabelCSS = function multiValueLabelCSS(_ref2) {
  var _ref2$theme = _ref2.theme,
      borderRadius = _ref2$theme.borderRadius,
      colors = _ref2$theme.colors,
      cropWithEllipsis = _ref2.cropWithEllipsis;
  return {
    borderRadius: borderRadius / 2,
    color: colors.neutral80,
    fontSize: '85%',
    overflow: 'hidden',
    padding: 3,
    paddingLeft: 6,
    textOverflow: cropWithEllipsis ? 'ellipsis' : null,
    whiteSpace: 'nowrap'
  };
};
var multiValueRemoveCSS = function multiValueRemoveCSS(_ref3) {
  var _ref3$theme = _ref3.theme,
      spacing = _ref3$theme.spacing,
      borderRadius = _ref3$theme.borderRadius,
      colors = _ref3$theme.colors,
      isFocused = _ref3.isFocused;
  return {
    alignItems: 'center',
    borderRadius: borderRadius / 2,
    backgroundColor: isFocused && colors.dangerLight,
    display: 'flex',
    paddingLeft: spacing.baseUnit,
    paddingRight: spacing.baseUnit,
    ':hover': {
      backgroundColor: colors.dangerLight,
      color: colors.danger
    }
  };
};
var MultiValueGeneric = function MultiValueGeneric(_ref4) {
  var children = _ref4.children,
      innerProps = _ref4.innerProps;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_11__["jsx"])("div", innerProps, children);
};
var MultiValueContainer = MultiValueGeneric;
var MultiValueLabel = MultiValueGeneric;
var MultiValueRemove =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(MultiValueRemove, _Component);

  function MultiValueRemove() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, MultiValueRemove);

    return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(MultiValueRemove).apply(this, arguments));
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(MultiValueRemove, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          innerProps = _this$props.innerProps;
      return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_11__["jsx"])("div", innerProps, children || Object(_emotion_core__WEBPACK_IMPORTED_MODULE_11__["jsx"])(CrossIcon, {
        size: 14
      }));
    }
  }]);

  return MultiValueRemove;
}(react__WEBPACK_IMPORTED_MODULE_10__["Component"]);

var MultiValue =
/*#__PURE__*/
function (_Component2) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(MultiValue, _Component2);

  function MultiValue() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, MultiValue);

    return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(MultiValue).apply(this, arguments));
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(MultiValue, [{
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props2 = this.props,
          children = _this$props2.children,
          className = _this$props2.className,
          components = _this$props2.components,
          cx = _this$props2.cx,
          data = _this$props2.data,
          getStyles = _this$props2.getStyles,
          innerProps = _this$props2.innerProps,
          isDisabled = _this$props2.isDisabled,
          removeProps = _this$props2.removeProps,
          selectProps = _this$props2.selectProps;
      var Container = components.Container,
          Label = components.Label,
          Remove = components.Remove;
      return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_emotion_core__WEBPACK_IMPORTED_MODULE_11__["ClassNames"], null, function (_ref5) {
        var css = _ref5.css,
            emotionCx = _ref5.cx;
        return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_11__["jsx"])(Container, {
          data: data,
          innerProps: Object(_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, innerProps, {
            className: emotionCx(css(getStyles('multiValue', _this.props)), cx({
              'multi-value': true,
              'multi-value--is-disabled': isDisabled
            }, className))
          }),
          selectProps: selectProps
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_11__["jsx"])(Label, {
          data: data,
          innerProps: {
            className: emotionCx(css(getStyles('multiValueLabel', _this.props)), cx({
              'multi-value__label': true
            }, className))
          },
          selectProps: selectProps
        }, children), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_11__["jsx"])(Remove, {
          data: data,
          innerProps: Object(_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({
            className: emotionCx(css(getStyles('multiValueRemove', _this.props)), cx({
              'multi-value__remove': true
            }, className))
          }, removeProps),
          selectProps: selectProps
        }));
      });
    }
  }]);

  return MultiValue;
}(react__WEBPACK_IMPORTED_MODULE_10__["Component"]);

Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(MultiValue, "defaultProps", {
  cropWithEllipsis: true
});

var optionCSS = function optionCSS(_ref) {
  var isDisabled = _ref.isDisabled,
      isFocused = _ref.isFocused,
      isSelected = _ref.isSelected,
      _ref$theme = _ref.theme,
      spacing = _ref$theme.spacing,
      colors = _ref$theme.colors;
  return {
    label: 'option',
    backgroundColor: isSelected ? colors.primary : isFocused ? colors.primary25 : 'transparent',
    color: isDisabled ? colors.neutral20 : isSelected ? colors.neutral0 : 'inherit',
    cursor: 'default',
    display: 'block',
    fontSize: 'inherit',
    padding: "".concat(spacing.baseUnit * 2, "px ").concat(spacing.baseUnit * 3, "px"),
    width: '100%',
    userSelect: 'none',
    WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
    // provide some affordance on touch devices
    ':active': {
      backgroundColor: !isDisabled && (isSelected ? colors.primary : colors.primary50)
    }
  };
};

var Option = function Option(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      isDisabled = props.isDisabled,
      isFocused = props.isFocused,
      isSelected = props.isSelected,
      innerRef = props.innerRef,
      innerProps = props.innerProps;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_11__["jsx"])("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    css: getStyles('option', props),
    className: cx({
      option: true,
      'option--is-disabled': isDisabled,
      'option--is-focused': isFocused,
      'option--is-selected': isSelected
    }, className),
    ref: innerRef
  }, innerProps), children);
};

var placeholderCSS = function placeholderCSS(_ref) {
  var _ref$theme = _ref.theme,
      spacing = _ref$theme.spacing,
      colors = _ref$theme.colors;
  return {
    label: 'placeholder',
    color: colors.neutral50,
    marginLeft: spacing.baseUnit / 2,
    marginRight: spacing.baseUnit / 2,
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)'
  };
};

var Placeholder = function Placeholder(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_11__["jsx"])("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    css: getStyles('placeholder', props),
    className: cx({
      placeholder: true
    }, className)
  }, innerProps), children);
};

var css$1 = function css(_ref) {
  var isDisabled = _ref.isDisabled,
      _ref$theme = _ref.theme,
      spacing = _ref$theme.spacing,
      colors = _ref$theme.colors;
  return {
    label: 'singleValue',
    color: isDisabled ? colors.neutral40 : colors.neutral80,
    marginLeft: spacing.baseUnit / 2,
    marginRight: spacing.baseUnit / 2,
    maxWidth: "calc(100% - ".concat(spacing.baseUnit * 2, "px)"),
    overflow: 'hidden',
    position: 'absolute',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    top: '50%',
    transform: 'translateY(-50%)'
  };
};

var SingleValue = function SingleValue(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      isDisabled = props.isDisabled,
      innerProps = props.innerProps;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_11__["jsx"])("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    css: getStyles('singleValue', props),
    className: cx({
      'single-value': true,
      'single-value--is-disabled': isDisabled
    }, className)
  }, innerProps), children);
};

var components = {
  ClearIndicator: ClearIndicator,
  Control: Control,
  DropdownIndicator: DropdownIndicator,
  DownChevron: DownChevron,
  CrossIcon: CrossIcon,
  Group: Group,
  GroupHeading: GroupHeading,
  IndicatorsContainer: IndicatorsContainer,
  IndicatorSeparator: IndicatorSeparator,
  Input: Input,
  LoadingIndicator: LoadingIndicator,
  Menu: Menu,
  MenuList: MenuList,
  MenuPortal: MenuPortal,
  LoadingMessage: LoadingMessage,
  NoOptionsMessage: NoOptionsMessage,
  MultiValue: MultiValue,
  MultiValueContainer: MultiValueContainer,
  MultiValueLabel: MultiValueLabel,
  MultiValueRemove: MultiValueRemove,
  Option: Option,
  Placeholder: Placeholder,
  SelectContainer: SelectContainer,
  SingleValue: SingleValue,
  ValueContainer: ValueContainer
};
var defaultComponents = function defaultComponents(props) {
  return Object(_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, components, props.components);
};




/***/ }),

/***/ "./node_modules/react-select/dist/chunk-b36baf1a.browser.esm.js":
/*!**********************************************************************!*\
  !*** ./node_modules/react-select/dist/chunk-b36baf1a.browser.esm.js ***!
  \**********************************************************************/
/*! exports provided: m */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return manageState; });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);











var defaultProps = {
  defaultInputValue: '',
  defaultMenuIsOpen: false,
  defaultValue: null
};

var manageState = function manageState(SelectComponent) {
  var _class, _temp;

  return _temp = _class =
  /*#__PURE__*/
  function (_Component) {
    Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(StateManager, _Component);

    function StateManager() {
      var _getPrototypeOf2;

      var _this;

      Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, StateManager);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(StateManager)).call.apply(_getPrototypeOf2, [this].concat(args)));

      Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this)), "select", void 0);

      Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this)), "state", {
        inputValue: _this.props.inputValue !== undefined ? _this.props.inputValue : _this.props.defaultInputValue,
        menuIsOpen: _this.props.menuIsOpen !== undefined ? _this.props.menuIsOpen : _this.props.defaultMenuIsOpen,
        value: _this.props.value !== undefined ? _this.props.value : _this.props.defaultValue
      });

      Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this)), "onChange", function (value, actionMeta) {
        _this.callProp('onChange', value, actionMeta);

        _this.setState({
          value: value
        });
      });

      Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this)), "onInputChange", function (value, actionMeta) {
        // TODO: for backwards compatibility, we allow the prop to return a new
        // value, but now inputValue is a controllable prop we probably shouldn't
        var newValue = _this.callProp('onInputChange', value, actionMeta);

        _this.setState({
          inputValue: newValue !== undefined ? newValue : value
        });
      });

      Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this)), "onMenuOpen", function () {
        _this.callProp('onMenuOpen');

        _this.setState({
          menuIsOpen: true
        });
      });

      Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this)), "onMenuClose", function () {
        _this.callProp('onMenuClose');

        _this.setState({
          menuIsOpen: false
        });
      });

      return _this;
    }

    Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(StateManager, [{
      key: "focus",
      value: function focus() {
        this.select.focus();
      }
    }, {
      key: "blur",
      value: function blur() {
        this.select.blur();
      } // FIXME: untyped flow code, return any

    }, {
      key: "getProp",
      value: function getProp(key) {
        return this.props[key] !== undefined ? this.props[key] : this.state[key];
      } // FIXME: untyped flow code, return any

    }, {
      key: "callProp",
      value: function callProp(name) {
        if (typeof this.props[name] === 'function') {
          var _this$props;

          for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
            args[_key2 - 1] = arguments[_key2];
          }

          return (_this$props = this.props)[name].apply(_this$props, args);
        }
      }
    }, {
      key: "render",
      value: function render() {
        var _this2 = this;

        var _this$props2 = this.props,
            defaultInputValue = _this$props2.defaultInputValue,
            defaultMenuIsOpen = _this$props2.defaultMenuIsOpen,
            defaultValue = _this$props2.defaultValue,
            props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_this$props2, ["defaultInputValue", "defaultMenuIsOpen", "defaultValue"]);

        return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(SelectComponent, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, {
          ref: function ref(_ref) {
            _this2.select = _ref;
          },
          inputValue: this.getProp('inputValue'),
          menuIsOpen: this.getProp('menuIsOpen'),
          onChange: this.onChange,
          onInputChange: this.onInputChange,
          onMenuClose: this.onMenuClose,
          onMenuOpen: this.onMenuOpen,
          value: this.getProp('value')
        }));
      }
    }]);

    return StateManager;
  }(react__WEBPACK_IMPORTED_MODULE_9__["Component"]), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(_class, "defaultProps", defaultProps), _temp;
};




/***/ }),

/***/ "./node_modules/react-select/dist/react-select.browser.esm.js":
/*!********************************************************************!*\
  !*** ./node_modules/react-select/dist/react-select.browser.esm.js ***!
  \********************************************************************/
/*! exports provided: components, createFilter, defaultTheme, mergeStyles, default, NonceProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NonceProvider", function() { return NonceProvider; });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread */ "./node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! memoize-one */ "./node_modules/memoize-one/dist/memoize-one.esm.js");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _chunk_39d3fda8_browser_esm_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./chunk-39d3fda8.browser.esm.js */ "./node_modules/react-select/dist/chunk-39d3fda8.browser.esm.js");
/* harmony import */ var _chunk_80640036_browser_esm_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./chunk-80640036.browser.esm.js */ "./node_modules/react-select/dist/chunk-80640036.browser.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _chunk_80640036_browser_esm_js__WEBPACK_IMPORTED_MODULE_18__["y"]; });

/* harmony import */ var _base_dist_react_select_cac0a5ae_browser_esm_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./base/dist/react-select-cac0a5ae.browser.esm.js */ "./node_modules/react-select/dist/base/dist/react-select-cac0a5ae.browser.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createFilter", function() { return _base_dist_react_select_cac0a5ae_browser_esm_js__WEBPACK_IMPORTED_MODULE_19__["c"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultTheme", function() { return _base_dist_react_select_cac0a5ae_browser_esm_js__WEBPACK_IMPORTED_MODULE_19__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mergeStyles", function() { return _base_dist_react_select_cac0a5ae_browser_esm_js__WEBPACK_IMPORTED_MODULE_19__["m"]; });

/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @emotion/css */ "./node_modules/@emotion/css/dist/css.browser.esm.js");
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react_input_autosize__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! react-input-autosize */ "./node_modules/react-input-autosize/lib/AutosizeInput.js");
/* harmony import */ var react_input_autosize__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(react_input_autosize__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _chunk_b36baf1a_browser_esm_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./chunk-b36baf1a.browser.esm.js */ "./node_modules/react-select/dist/chunk-b36baf1a.browser.esm.js");
/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @emotion/cache */ "./node_modules/@emotion/cache/dist/cache.browser.esm.js");



























var NonceProvider =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(NonceProvider, _Component);

  function NonceProvider(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, NonceProvider);

    _this = Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(NonceProvider).call(this, props));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "createEmotionCache", function (nonce) {
      return Object(_emotion_cache__WEBPACK_IMPORTED_MODULE_24__["default"])({
        nonce: nonce
      });
    });

    _this.createEmotionCache = Object(memoize_one__WEBPACK_IMPORTED_MODULE_12__["default"])(_this.createEmotionCache);
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(NonceProvider, [{
    key: "render",
    value: function render() {
      var emotionCache = this.createEmotionCache(this.props.nonce);
      return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_emotion_core__WEBPACK_IMPORTED_MODULE_13__["CacheProvider"], {
        value: emotionCache
      }, this.props.children);
    }
  }]);

  return NonceProvider;
}(react__WEBPACK_IMPORTED_MODULE_11__["Component"]);

var index = Object(_chunk_b36baf1a_browser_esm_js__WEBPACK_IMPORTED_MODULE_23__["m"])(_base_dist_react_select_cac0a5ae_browser_esm_js__WEBPACK_IMPORTED_MODULE_19__["S"]);

/* harmony default export */ __webpack_exports__["default"] = (index);



/***/ }),

/***/ "./node_modules/string-natural-compare/natural-compare.js":
/*!****************************************************************!*\
  !*** ./node_modules/string-natural-compare/natural-compare.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var alphabet;
var alphabetIndexMap;
var alphabetIndexMapLength = 0;

function isNumberCode(code) {
  return code >= 48 && code <= 57;
}

function naturalCompare(a, b) {
  var lengthA = (a += '').length;
  var lengthB = (b += '').length;
  var aIndex = 0;
  var bIndex = 0;

  while (aIndex < lengthA && bIndex < lengthB) {
    var charCodeA = a.charCodeAt(aIndex);
    var charCodeB = b.charCodeAt(bIndex);

    if (isNumberCode(charCodeA)) {
      if (!isNumberCode(charCodeB)) {
        return charCodeA - charCodeB;
      }

      var numStartA = aIndex;
      var numStartB = bIndex;

      while (charCodeA === 48 && ++numStartA < lengthA) {
        charCodeA = a.charCodeAt(numStartA);
      }
      while (charCodeB === 48 && ++numStartB < lengthB) {
        charCodeB = b.charCodeAt(numStartB);
      }

      var numEndA = numStartA;
      var numEndB = numStartB;

      while (numEndA < lengthA && isNumberCode(a.charCodeAt(numEndA))) {
        ++numEndA;
      }
      while (numEndB < lengthB && isNumberCode(b.charCodeAt(numEndB))) {
        ++numEndB;
      }

      var difference = numEndA - numStartA - numEndB + numStartB; // numA length - numB length
      if (difference) {
        return difference;
      }

      while (numStartA < numEndA) {
        difference = a.charCodeAt(numStartA++) - b.charCodeAt(numStartB++);
        if (difference) {
          return difference;
        }
      }

      aIndex = numEndA;
      bIndex = numEndB;
      continue;
    }

    if (charCodeA !== charCodeB) {
      if (
        charCodeA < alphabetIndexMapLength &&
        charCodeB < alphabetIndexMapLength &&
        alphabetIndexMap[charCodeA] !== -1 &&
        alphabetIndexMap[charCodeB] !== -1
      ) {
        return alphabetIndexMap[charCodeA] - alphabetIndexMap[charCodeB];
      }

      return charCodeA - charCodeB;
    }

    ++aIndex;
    ++bIndex;
  }

  if (aIndex >= lengthA && bIndex < lengthB && lengthA >= lengthB) {
    return -1;
  }

  if (bIndex >= lengthB && aIndex < lengthA && lengthB >= lengthA) {
    return 1;
  }

  return lengthA - lengthB;
}

naturalCompare.caseInsensitive = naturalCompare.i = function(a, b) {
  return naturalCompare(('' + a).toLowerCase(), ('' + b).toLowerCase());
};

Object.defineProperties(naturalCompare, {
  alphabet: {
    get: function() {
      return alphabet;
    },

    set: function(value) {
      alphabet = value;
      alphabetIndexMap = [];

      var i = 0;

      if (alphabet) {
        for (; i < alphabet.length; i++) {
          alphabetIndexMap[alphabet.charCodeAt(i)] = i;
        }
      }

      alphabetIndexMapLength = alphabetIndexMap.length;

      for (i = 0; i < alphabetIndexMapLength; i++) {
        if (alphabetIndexMap[i] === undefined) {
          alphabetIndexMap[i] = -1;
        }
      }
    },
  },
});

module.exports = naturalCompare;


/***/ }),

/***/ "./node_modules/upath/build/code/upath.js":
/*!************************************************!*\
  !*** ./node_modules/upath/build/code/upath.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
* upath http://github.com/anodynos/upath/
*
* A proxy to `path`, replacing `\` with `/` for all results & new methods to normalize & join keeping leading `./` and add, change, default, trim file extensions.
* Version 1.2.0 - Compiled on 2019-09-02 23:33:57
* Repository git://github.com/anodynos/upath
* Copyright(c) 2019 Angelos Pikoulas <agelos.pikoulas@gmail.com>
* License MIT
*/

// Generated by uRequire v0.7.0-beta.33 target: 'lib' template: 'nodejs'


var VERSION = '1.2.0'; // injected by urequire-rc-inject-version

var extraFn, extraFunctions, isFunction, isString, isValidExt, name, path, propName, propValue, toUnix, upath, slice = [].slice, indexOf = [].indexOf || function (item) {
    for (var i = 0, l = this.length; i < l; i++) {
      if (i in this && this[i] === item)
        return i;
    }
    return -1;
  }, hasProp = {}.hasOwnProperty;
path = __webpack_require__(/*! path */ "path");
isFunction = function (val) {
  return val instanceof Function;
};
isString = function (val) {
  return typeof val === "string" || !!val && typeof val === "object" && Object.prototype.toString.call(val) === "[object String]";
};
upath = exports;
upath.VERSION = typeof VERSION !== "undefined" && VERSION !== null ? VERSION : "NO-VERSION";
toUnix = function (p) {
  var double;
  p = p.replace(/\\/g, "/");
  double = /\/\//;
  while (p.match(double)) {
    p = p.replace(double, "/");
  }
  return p;
};
for (propName in path) {
  propValue = path[propName];
  if (isFunction(propValue)) {
    upath[propName] = function (propName) {
      return function () {
        var args, result;
        args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
        args = args.map(function (p) {
          if (isString(p)) {
            return toUnix(p);
          } else {
            return p;
          }
        });
        result = path[propName].apply(path, args);
        if (isString(result)) {
          return toUnix(result);
        } else {
          return result;
        }
      };
    }(propName);
  } else {
    upath[propName] = propValue;
  }
}
upath.sep = "/";
extraFunctions = {
  toUnix: toUnix,
  normalizeSafe: function (p) {
    p = toUnix(p);
    if (p.startsWith("./")) {
      if (p.startsWith("./..") || p === "./") {
        return upath.normalize(p);
      } else {
        return "./" + upath.normalize(p);
      }
    } else {
      return upath.normalize(p);
    }
  },
  normalizeTrim: function (p) {
    p = upath.normalizeSafe(p);
    if (p.endsWith("/")) {
      return p.slice(0, +(p.length - 2) + 1 || 9000000000);
    } else {
      return p;
    }
  },
  joinSafe: function () {
    var p, result;
    p = 1 <= arguments.length ? slice.call(arguments, 0) : [];
    result = upath.join.apply(null, p);
    if (p[0].startsWith("./") && !result.startsWith("./")) {
      result = "./" + result;
    }
    return result;
  },
  addExt: function (file, ext) {
    if (!ext) {
      return file;
    } else {
      if (ext[0] !== ".") {
        ext = "." + ext;
      }
      return file + (file.endsWith(ext) ? "" : ext);
    }
  },
  trimExt: function (filename, ignoreExts, maxSize) {
    var oldExt;
    if (maxSize == null) {
      maxSize = 7;
    }
    oldExt = upath.extname(filename);
    if (isValidExt(oldExt, ignoreExts, maxSize)) {
      return filename.slice(0, +(filename.length - oldExt.length - 1) + 1 || 9000000000);
    } else {
      return filename;
    }
  },
  removeExt: function (filename, ext) {
    if (!ext) {
      return filename;
    } else {
      ext = ext[0] === "." ? ext : "." + ext;
      if (upath.extname(filename) === ext) {
        return upath.trimExt(filename);
      } else {
        return filename;
      }
    }
  },
  changeExt: function (filename, ext, ignoreExts, maxSize) {
    if (maxSize == null) {
      maxSize = 7;
    }
    return upath.trimExt(filename, ignoreExts, maxSize) + (!ext ? "" : ext[0] === "." ? ext : "." + ext);
  },
  defaultExt: function (filename, ext, ignoreExts, maxSize) {
    var oldExt;
    if (maxSize == null) {
      maxSize = 7;
    }
    oldExt = upath.extname(filename);
    if (isValidExt(oldExt, ignoreExts, maxSize)) {
      return filename;
    } else {
      return upath.addExt(filename, ext);
    }
  }
};
isValidExt = function (ext, ignoreExts, maxSize) {
  if (ignoreExts == null) {
    ignoreExts = [];
  }
  return ext && ext.length <= maxSize && indexOf.call(ignoreExts.map(function (e) {
    return (e && e[0] !== "." ? "." : "") + e;
  }), ext) < 0;
};
for (name in extraFunctions) {
  if (!hasProp.call(extraFunctions, name))
    continue;
  extraFn = extraFunctions[name];
  if (upath[name] !== void 0) {
    throw new Error("path." + name + " already exists.");
  } else {
    upath[name] = extraFn;
  }
}

;

/***/ })

}]);
//# sourceMappingURL=33.bundle.js.map