module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!*****************************************************************************************************************!*\
  !*** /Users/mac/Documents/Intracon-3dapp-Website/node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "core-js/library/fn/json/stringify");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!****************************************************************************************************************!*\
  !*** /Users/mac/Documents/Intracon-3dapp-Website/node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!****************************************************************************************************************!*\
  !*** /Users/mac/Documents/Intracon-3dapp-Website/node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*************************************************************************************************************************!*\
  !*** /Users/mac/Documents/Intracon-3dapp-Website/node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js":
/*!**************************************************************************************************************************!*\
  !*** /Users/mac/Documents/Intracon-3dapp-Website/node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js":
/*!**************************************************************************************************************************!*\
  !*** /Users/mac/Documents/Intracon-3dapp-Website/node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!**********************************************************************************************************!*\
  !*** /Users/mac/Documents/Intracon-3dapp-Website/node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js":
/*!********************************************************************************************************************!*\
  !*** /Users/mac/Documents/Intracon-3dapp-Website/node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/reflect/construct */ "core-js/library/fn/reflect/construct");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!*********************************************************************************************************!*\
  !*** /Users/mac/Documents/Intracon-3dapp-Website/node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!******************************************************************************************************************!*\
  !*** /Users/mac/Documents/Intracon-3dapp-Website/node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js":
/*!************************************************************************************************************************!*\
  !*** /Users/mac/Documents/Intracon-3dapp-Website/node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js":
/*!*******************************************************************************************************************!*\
  !*** /Users/mac/Documents/Intracon-3dapp-Website/node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Promise = __webpack_require__(/*! ../core-js/promise */ "../../node_modules/@babel/runtime-corejs2/core-js/promise.js");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    _Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new _Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js":
/*!*****************************************************************************************************************!*\
  !*** /Users/mac/Documents/Intracon-3dapp-Website/node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/construct.js":
/*!************************************************************************************************************!*\
  !*** /Users/mac/Documents/Intracon-3dapp-Website/node_modules/@babel/runtime-corejs2/helpers/construct.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Reflect$construct = __webpack_require__(/*! ../core-js/reflect/construct */ "../../node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js");

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "../../node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js");

function isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !_Reflect$construct) return false;
  if (_Reflect$construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(_Reflect$construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    module.exports = _construct = _Reflect$construct;
  } else {
    module.exports = _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

module.exports = _construct;

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/createClass.js":
/*!**************************************************************************************************************!*\
  !*** /Users/mac/Documents/Intracon-3dapp-Website/node_modules/@babel/runtime-corejs2/helpers/createClass.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "../../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _Object$defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!*********************************************************************************************************************!*\
  !*** /Users/mac/Documents/Intracon-3dapp-Website/node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "../../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
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

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!**************************************************************************************************************!*\
  !*** /Users/mac/Documents/Intracon-3dapp-Website/node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "../../node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
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

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js":
/*!*****************************************************************************************************************!*\
  !*** /Users/mac/Documents/Intracon-3dapp-Website/node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getPrototypeOf = __webpack_require__(/*! ../core-js/object/get-prototype-of */ "../../node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "../../node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = _Object$setPrototypeOf ? _Object$getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || _Object$getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/inherits.js":
/*!***********************************************************************************************************!*\
  !*** /Users/mac/Documents/Intracon-3dapp-Website/node_modules/@babel/runtime-corejs2/helpers/inherits.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$create = __webpack_require__(/*! ../core-js/object/create */ "../../node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "../../node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _Object$create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!************************************************************************************************************************!*\
  !*** /Users/mac/Documents/Intracon-3dapp-Website/node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js":
/*!****************************************************************************************************************************!*\
  !*** /Users/mac/Documents/Intracon-3dapp-Website/node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "../../node_modules/@babel/runtime-corejs2/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "../../node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js":
/*!*****************************************************************************************************************!*\
  !*** /Users/mac/Documents/Intracon-3dapp-Website/node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "../../node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = _Object$setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/typeof.js":
/*!*********************************************************************************************************!*\
  !*** /Users/mac/Documents/Intracon-3dapp-Website/node_modules/@babel/runtime-corejs2/helpers/typeof.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "../../node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");

var _Symbol = __webpack_require__(/*! ../core-js/symbol */ "../../node_modules/@babel/runtime-corejs2/core-js/symbol.js");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/regenerator/index.js":
/*!************************************************************************************************************!*\
  !*** /Users/mac/Documents/Intracon-3dapp-Website/node_modules/@babel/runtime-corejs2/regenerator/index.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "regenerator-runtime");


/***/ }),

/***/ "../../node_modules/next/app.js":
/*!****************************************************************************!*\
  !*** /Users/mac/Documents/Intracon-3dapp-Website/node_modules/next/app.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_app */ "../../node_modules/next/dist/pages/_app.js")


/***/ }),

/***/ "../../node_modules/next/dist/client/router.js":
/*!*******************************************************************************************!*\
  !*** /Users/mac/Documents/Intracon-3dapp-Website/node_modules/next/dist/client/router.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _assign = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "../../node_modules/@babel/runtime-corejs2/core-js/object/assign.js"));

var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/typeof */ "../../node_modules/@babel/runtime-corejs2/helpers/typeof.js"));

var _construct2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/construct */ "../../node_modules/@babel/runtime-corejs2/helpers/construct.js"));

var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"));

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
/* global window */

var router_1 = __importDefault(__webpack_require__(/*! next-server/dist/lib/router/router */ "next-server/dist/lib/router/router"));

var SingletonRouter = {
  router: null,
  readyCallbacks: [],
  ready: function ready(cb) {
    if (this.router) return cb();

    if (typeof window !== 'undefined') {
      this.readyCallbacks.push(cb);
    }
  }
}; // Create public properties and methods of the router in the SingletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath'];
var propertyFields = ['components'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(SingletonRouter, 'events', {
  get: function get() {
    return router_1.default.events;
  }
});
propertyFields.concat(urlPropertyFields).forEach(function (field) {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(SingletonRouter, field, {
    get: function get() {
      throwIfNoRouter();
      return SingletonRouter.router[field];
    }
  });
});
coreMethodFields.forEach(function (field) {
  SingletonRouter[field] = function () {
    var _SingletonRouter$rout;

    throwIfNoRouter();
    return (_SingletonRouter$rout = SingletonRouter.router)[field].apply(_SingletonRouter$rout, arguments);
  };
});
routerEvents.forEach(function (event) {
  SingletonRouter.ready(function () {
    router_1.default.events.on(event, function () {
      var eventField = "on".concat(event.charAt(0).toUpperCase()).concat(event.substring(1));

      if (SingletonRouter[eventField]) {
        try {
          SingletonRouter[eventField].apply(SingletonRouter, arguments);
        } catch (err) {
          console.error("Error when running the Router event: ".concat(eventField));
          console.error("".concat(err.message, "\n").concat(err.stack));
        }
      }
    });
  });
});

function throwIfNoRouter() {
  if (!SingletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }
} // Export the SingletonRouter and this is the public API.


exports.default = SingletonRouter; // Reexport the withRoute HOC

var with_router_1 = __webpack_require__(/*! ./with-router */ "../../node_modules/next/dist/client/with-router.js");

exports.withRouter = with_router_1.default; // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.

exports.createRouter = function () {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  SingletonRouter.router = (0, _construct2.default)(router_1.default, args);
  SingletonRouter.readyCallbacks.forEach(function (cb) {
    return cb();
  });
  SingletonRouter.readyCallbacks = [];
  return SingletonRouter.router;
}; // Export the actual Router class, which is usually used inside the server


exports.Router = router_1.default; // This function is used to create the `withRouter` router instance

function makePublicRouterInstance(router) {
  var instance = {};

  for (var _i = 0; _i < urlPropertyFields.length; _i++) {
    var property = urlPropertyFields[_i];

    if ((0, _typeof2.default)(router[property]) === 'object') {
      instance[property] = (0, _assign.default)({}, router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = router_1.default.events;
  propertyFields.forEach(function (field) {
    // Here we need to use Object.defineProperty because, we need to return
    // the property assigned to the actual router
    // The value might get changed as we change routes and this is the
    // proper way to access it
    (0, _defineProperty.default)(instance, field, {
      get: function get() {
        return router[field];
      }
    });
  });
  coreMethodFields.forEach(function (field) {
    instance[field] = function () {
      return router[field].apply(router, arguments);
    };
  });
  return instance;
}

exports.makePublicRouterInstance = makePublicRouterInstance;

/***/ }),

/***/ "../../node_modules/next/dist/client/with-router.js":
/*!************************************************************************************************!*\
  !*** /Users/mac/Documents/Intracon-3dapp-Website/node_modules/next/dist/client/with-router.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _assign = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "../../node_modules/@babel/runtime-corejs2/core-js/object/assign.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "../../node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "../../node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "../../node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "../../node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "../../node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importStar(__webpack_require__(/*! react */ "react"));

var prop_types_1 = __importDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var hoist_non_react_statics_1 = __importDefault(__webpack_require__(/*! hoist-non-react-statics */ "../../node_modules/next/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"));

var utils_1 = __webpack_require__(/*! next-server/dist/lib/utils */ "next-server/dist/lib/utils");

function withRouter(ComposedComponent) {
  var displayName = utils_1.getDisplayName(ComposedComponent);

  var WithRouteWrapper =
  /*#__PURE__*/
  function (_react_1$Component) {
    (0, _inherits2.default)(WithRouteWrapper, _react_1$Component);

    function WithRouteWrapper() {
      (0, _classCallCheck2.default)(this, WithRouteWrapper);
      return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(WithRouteWrapper).apply(this, arguments));
    }

    (0, _createClass2.default)(WithRouteWrapper, [{
      key: "render",
      value: function render() {
        return react_1.default.createElement(ComposedComponent, (0, _assign.default)({
          router: this.context.router
        }, this.props));
      }
    }]);
    return WithRouteWrapper;
  }(react_1.Component);

  WithRouteWrapper.contextTypes = {
    router: prop_types_1.default.object
  };
  WithRouteWrapper.displayName = "withRouter(".concat(displayName, ")");
  return hoist_non_react_statics_1.default(WithRouteWrapper, ComposedComponent);
}

exports.default = withRouter;

/***/ }),

/***/ "../../node_modules/next/dist/pages/_app.js":
/*!****************************************************************************************!*\
  !*** /Users/mac/Documents/Intracon-3dapp-Website/node_modules/next/dist/pages/_app.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "../../node_modules/@babel/runtime-corejs2/regenerator/index.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/asyncToGenerator */ "../../node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js"));

var _assign = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "../../node_modules/@babel/runtime-corejs2/core-js/object/assign.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "../../node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "../../node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "../../node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "../../node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "../../node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importStar(__webpack_require__(/*! react */ "react"));

var prop_types_1 = __importDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var utils_1 = __webpack_require__(/*! next-server/dist/lib/utils */ "next-server/dist/lib/utils");

var router_1 = __webpack_require__(/*! next/router */ "../../node_modules/next/router.js");

var App =
/*#__PURE__*/
function (_react_1$Component) {
  (0, _inherits2.default)(App, _react_1$Component);

  function App() {
    (0, _classCallCheck2.default)(this, App);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(App).apply(this, arguments));
  }

  (0, _createClass2.default)(App, [{
    key: "getChildContext",
    value: function getChildContext() {
      return {
        router: router_1.makePublicRouterInstance(this.props.router)
      };
    } // Kept here for backwards compatibility.
    // When someone ended App they could call `super.componentDidCatch`. This is now deprecated.

  }, {
    key: "componentDidCatch",
    value: function componentDidCatch(err) {
      throw err;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          router = _this$props.router,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps;
      var url = createUrl(router);
      return react_1.default.createElement(Container, null, react_1.default.createElement(Component, (0, _assign.default)({}, pageProps, {
        url: url
      })));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(_ref) {
        var Component, router, ctx, pageProps;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                Component = _ref.Component, router = _ref.router, ctx = _ref.ctx;
                _context.next = 3;
                return utils_1.loadGetInitialProps(Component, ctx);

              case 3:
                pageProps = _context.sent;
                return _context.abrupt("return", {
                  pageProps: pageProps
                });

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);
  return App;
}(react_1.Component);

App.childContextTypes = {
  router: prop_types_1.default.object
};
exports.default = App;

var Container =
/*#__PURE__*/
function (_react_1$Component2) {
  (0, _inherits2.default)(Container, _react_1$Component2);

  function Container() {
    (0, _classCallCheck2.default)(this, Container);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Container).apply(this, arguments));
  }

  (0, _createClass2.default)(Container, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.scrollToHash();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.scrollToHash();
    }
  }, {
    key: "scrollToHash",
    value: function scrollToHash() {
      var hash = window.location.hash;
      hash = hash ? hash.substring(1) : false;
      if (!hash) return;
      var el = document.getElementById(hash);
      if (!el) return; // If we call scrollIntoView() in here without a setTimeout
      // it won't scroll properly.

      setTimeout(function () {
        return el.scrollIntoView();
      }, 0);
    }
  }, {
    key: "render",
    value: function render() {
      return this.props.children;
    }
  }]);
  return Container;
}(react_1.Component);

exports.Container = Container;
var warnUrl = utils_1.execOnce(function () {
  if (true) {
    console.error("Warning: the 'url' property is deprecated. https://err.sh/zeit/next.js/url-deprecated");
  }
});

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  var pathname = router.pathname,
      asPath = router.asPath,
      query = router.query;
  return {
    get query() {
      warnUrl();
      return query;
    },

    get pathname() {
      warnUrl();
      return pathname;
    },

    get asPath() {
      warnUrl();
      return asPath;
    },

    back: function back() {
      warnUrl();
      router.back();
    },
    push: function push(url, as) {
      warnUrl();
      return router.push(url, as);
    },
    pushTo: function pushTo(href, as) {
      warnUrl();
      var pushRoute = as ? href : null;
      var pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: function replace(url, as) {
      warnUrl();
      return router.replace(url, as);
    },
    replaceTo: function replaceTo(href, as) {
      warnUrl();
      var replaceRoute = as ? href : null;
      var replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

exports.createUrl = createUrl;

/***/ }),

/***/ "../../node_modules/next/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":
/*!**********************************************************************************************************************************************!*\
  !*** /Users/mac/Documents/Intracon-3dapp-Website/node_modules/next/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js ***!
  \**********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var ReactIs = __webpack_require__(/*! react-is */ "react-is");
var REACT_STATICS = {
    childContextTypes: true,
    contextType: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    getDerivedStateFromError: true,
    getDerivedStateFromProps: true,
    mixins: true,
    propTypes: true,
    type: true
};

var KNOWN_STATICS = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    callee: true,
    arguments: true,
    arity: true
};

var FORWARD_REF_STATICS = {
    '$$typeof': true,
    render: true
};

var TYPE_STATICS = {};
TYPE_STATICS[ReactIs.ForwardRef] = FORWARD_REF_STATICS;

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;

function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
    if (typeof sourceComponent !== 'string') {
        // don't hoist over string (html) components

        if (objectPrototype) {
            var inheritedComponent = getPrototypeOf(sourceComponent);
            if (inheritedComponent && inheritedComponent !== objectPrototype) {
                hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
            }
        }

        var keys = getOwnPropertyNames(sourceComponent);

        if (getOwnPropertySymbols) {
            keys = keys.concat(getOwnPropertySymbols(sourceComponent));
        }

        var targetStatics = TYPE_STATICS[targetComponent['$$typeof']] || REACT_STATICS;
        var sourceStatics = TYPE_STATICS[sourceComponent['$$typeof']] || REACT_STATICS;

        for (var i = 0; i < keys.length; ++i) {
            var key = keys[i];
            if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
                var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
                try {
                    // Avoid failures from read-only properties
                    defineProperty(targetComponent, key, descriptor);
                } catch (e) {}
            }
        }

        return targetComponent;
    }

    return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),

/***/ "../../node_modules/next/router.js":
/*!*******************************************************************************!*\
  !*** /Users/mac/Documents/Intracon-3dapp-Website/node_modules/next/router.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/router */ "../../node_modules/next/dist/client/router.js")


/***/ }),

/***/ "../../node_modules/sass-extract-loader/index.js?{\"plugins\": [\"sass-extract-js\"]}!./stylesheets/variables.scss":
/*!**************************************************************************************************************************************************!*\
  !*** /Users/mac/Documents/Intracon-3dapp-Website/node_modules/sass-extract-loader?{"plugins": ["sass-extract-js"]}!./stylesheets/variables.scss ***!
  \**************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"bodySize":"16px","bodyLineHeight":"24px","descriptionSize":"16px","languagesSize":"14px","bodyFont":"hp-simplified-light","bodyFontBold":"hp-simplified-regular","colorBody":"rgb(223, 223, 223)","colorBlue":"rgb(0, 150, 214)","colorDark":"rgb(29, 35, 39)","colorBlack":"rgb(0, 0, 0)","colorWhite":"rgb(255, 255, 255)","colorBorder":"rgb(208, 208, 208)","colorPlaceholder":"rgb(189, 189, 189)","colorGreen":"rgb(55, 209, 66)","colorBox":"rgb(223, 223, 223)","colorContent":"rgb(247, 247, 247)","colorDisabled":"rgb(229, 229, 229)","colorFormBorder":"rgb(189, 189, 189)","colorSeparator":"rgb(189, 189, 189)","colorTableBkg":"rgb(245, 245, 245)","colorTableBorder":"rgb(236, 238, 239)","colorLoginBorder":"rgb(222, 222, 222)","colorTableText":"rgb(55, 58, 60)","colorTextBody":"rgb(90, 90, 90)","buttonFontSize":"15px","inputColor":"rgb(29, 35, 39)","inputBorderColor":"rgb(222, 222, 222)"};

/***/ }),

/***/ "./components/ErrorBoundary.js":
/*!*************************************!*\
  !*** ./components/ErrorBoundary.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "/Users/mac/Documents/Intracon-3dapp-Website/app/src/components/ErrorBoundary.js";


/* eslint-disable no-console */


class ErrorBoundary extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "state", {
      error: null
    });
  }

  componentDidCatch(error, info) {
    if (info && info.componentStack && "development" === 'development') {
      // The component stack is sometimes useful in development mode
      console.log(info.componentStack, false);
    }

    console.log(error);
    this.setState({
      error
    });
  }

  render() {
    const state = this.state,
          props = this.props;

    if (state.error) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, "Something went wrong with page module. Please inform system administrator.");
    }

    return props.children;
  }

}

ErrorBoundary.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node
};
/* harmony default export */ __webpack_exports__["default"] = (ErrorBoundary);

/***/ }),

/***/ "./components/IconDocument.js":
/*!************************************!*\
  !*** ./components/IconDocument.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Icons */ "./components/Icons.js");
var _jsxFileName = "/Users/mac/Documents/Intracon-3dapp-Website/app/src/components/IconDocument.js";




const IconDocument = ({
  documentType
}) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, documentType === 'pdf' && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icons__WEBPACK_IMPORTED_MODULE_2__["IconPDF"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}), documentType === 'docx' && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icons__WEBPACK_IMPORTED_MODULE_2__["IconDocx"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}), documentType === 'xlsx' && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icons__WEBPACK_IMPORTED_MODULE_2__["IconExcel"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}), documentType === 'video' && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icons__WEBPACK_IMPORTED_MODULE_2__["IconVideo"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}), documentType === 'pptx' && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icons__WEBPACK_IMPORTED_MODULE_2__["IconPPT"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}), documentType === 'image' && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icons__WEBPACK_IMPORTED_MODULE_2__["IconImage"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}));

IconDocument.propTypes = {
  documentType: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (IconDocument);

/***/ }),

/***/ "./components/Icons.js":
/*!*****************************!*\
  !*** ./components/Icons.js ***!
  \*****************************/
/*! exports provided: IconExcel, IconImage, IconPDF, IconPPT, IconVideo, ContactIcon, ApplicationIcon, CostIcon, FavoritesIcon, HomeIcon, InformationIcon, MaterialsIcon, ServicesIcon, Training, IconSearch, IconLang, IconDocx, IconStart, IconCheck, IconStartActive, FlagEn, FlagSpan, FlagGerman, FlagMandarin, FlagFrench, FlagKorea, FlagJapan, IconExpand, IconShowMore, IconX, IconSeeMore, IconAddress, IconTime, IconAppSetting, CostCalculator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconSearch", function() { return IconSearch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconLang", function() { return IconLang; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconShowMore", function() { return IconShowMore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconX", function() { return IconX; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _static_svg_documentIcons_excel_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../static/svg/documentIcons/excel.svg */ "./static/svg/documentIcons/excel.svg");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IconExcel", function() { return _static_svg_documentIcons_excel_svg__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _static_svg_documentIcons_image_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../static/svg/documentIcons/image.svg */ "./static/svg/documentIcons/image.svg");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IconImage", function() { return _static_svg_documentIcons_image_svg__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _static_svg_documentIcons_pdf_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../static/svg/documentIcons/pdf.svg */ "./static/svg/documentIcons/pdf.svg");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IconPDF", function() { return _static_svg_documentIcons_pdf_svg__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _static_svg_documentIcons_ppt_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../static/svg/documentIcons/ppt.svg */ "./static/svg/documentIcons/ppt.svg");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IconPPT", function() { return _static_svg_documentIcons_ppt_svg__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _static_svg_documentIcons_video_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../static/svg/documentIcons/video.svg */ "./static/svg/documentIcons/video.svg");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IconVideo", function() { return _static_svg_documentIcons_video_svg__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _static_svg_documentIcons_word_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../static/svg/documentIcons/word.svg */ "./static/svg/documentIcons/word.svg");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IconDocx", function() { return _static_svg_documentIcons_word_svg__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _static_svg_applications_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../static/svg/applications.svg */ "./static/svg/applications.svg");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApplicationIcon", function() { return _static_svg_applications_svg__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _static_svg_costCalculator_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../static/svg/costCalculator.svg */ "./static/svg/costCalculator.svg");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CostCalculator", function() { return _static_svg_costCalculator_svg__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _static_svg_contact_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../static/svg/contact.svg */ "./static/svg/contact.svg");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContactIcon", function() { return _static_svg_contact_svg__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _static_svg_cost_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../static/svg/cost.svg */ "./static/svg/cost.svg");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CostIcon", function() { return _static_svg_cost_svg__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _static_svg_favorites_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../static/svg/favorites.svg */ "./static/svg/favorites.svg");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FavoritesIcon", function() { return _static_svg_favorites_svg__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _static_svg_home_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../static/svg/home.svg */ "./static/svg/home.svg");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HomeIcon", function() { return _static_svg_home_svg__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _static_svg_information_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../static/svg/information.svg */ "./static/svg/information.svg");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InformationIcon", function() { return _static_svg_information_svg__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony import */ var _static_svg_materials_svg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../static/svg/materials.svg */ "./static/svg/materials.svg");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MaterialsIcon", function() { return _static_svg_materials_svg__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony import */ var _static_svg_services_svg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../static/svg/services.svg */ "./static/svg/services.svg");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServicesIcon", function() { return _static_svg_services_svg__WEBPACK_IMPORTED_MODULE_15__["default"]; });

/* harmony import */ var _static_svg_training_svg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../static/svg/training.svg */ "./static/svg/training.svg");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Training", function() { return _static_svg_training_svg__WEBPACK_IMPORTED_MODULE_16__["default"]; });

/* harmony import */ var _static_imgs_search_icon_png__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../static/imgs/search-icon.png */ "./static/imgs/search-icon.png");
/* harmony import */ var _static_imgs_search_icon_png__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_static_imgs_search_icon_png__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _static_imgs_lang_icon_png__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../static/imgs/lang-icon.png */ "./static/imgs/lang-icon.png");
/* harmony import */ var _static_imgs_lang_icon_png__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_static_imgs_lang_icon_png__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _static_imgs_content_viewer_start_png__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../static/imgs/content-viewer/start.png */ "./static/imgs/content-viewer/start.png");
/* harmony import */ var _static_imgs_content_viewer_start_png__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_static_imgs_content_viewer_start_png__WEBPACK_IMPORTED_MODULE_19__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "IconStart", function() { return _static_imgs_content_viewer_start_png__WEBPACK_IMPORTED_MODULE_19___default.a; });
/* harmony import */ var _static_imgs_content_viewer_icon_check_png__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../static/imgs/content-viewer/icon-check.png */ "./static/imgs/content-viewer/icon-check.png");
/* harmony import */ var _static_imgs_content_viewer_icon_check_png__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_static_imgs_content_viewer_icon_check_png__WEBPACK_IMPORTED_MODULE_20__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "IconCheck", function() { return _static_imgs_content_viewer_icon_check_png__WEBPACK_IMPORTED_MODULE_20___default.a; });
/* harmony import */ var _static_imgs_content_viewer_start_active_png__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../static/imgs/content-viewer/start-active.png */ "./static/imgs/content-viewer/start-active.png");
/* harmony import */ var _static_imgs_content_viewer_start_active_png__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_static_imgs_content_viewer_start_active_png__WEBPACK_IMPORTED_MODULE_21__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "IconStartActive", function() { return _static_imgs_content_viewer_start_active_png__WEBPACK_IMPORTED_MODULE_21___default.a; });
/* harmony import */ var _static_svg_flagIcons_eng_svg__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../static/svg/flagIcons/eng.svg */ "./static/svg/flagIcons/eng.svg");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FlagEn", function() { return _static_svg_flagIcons_eng_svg__WEBPACK_IMPORTED_MODULE_22__["default"]; });

/* harmony import */ var _static_svg_flagIcons_sp_svg__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../static/svg/flagIcons/sp.svg */ "./static/svg/flagIcons/sp.svg");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FlagSpan", function() { return _static_svg_flagIcons_sp_svg__WEBPACK_IMPORTED_MODULE_23__["default"]; });

/* harmony import */ var _static_svg_flagIcons_ger_svg__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../static/svg/flagIcons/ger.svg */ "./static/svg/flagIcons/ger.svg");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FlagGerman", function() { return _static_svg_flagIcons_ger_svg__WEBPACK_IMPORTED_MODULE_24__["default"]; });

/* harmony import */ var _static_svg_flagIcons_chi_svg__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../static/svg/flagIcons/chi.svg */ "./static/svg/flagIcons/chi.svg");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FlagMandarin", function() { return _static_svg_flagIcons_chi_svg__WEBPACK_IMPORTED_MODULE_25__["default"]; });

/* harmony import */ var _static_svg_flagIcons_fr_svg__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../static/svg/flagIcons/fr.svg */ "./static/svg/flagIcons/fr.svg");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FlagFrench", function() { return _static_svg_flagIcons_fr_svg__WEBPACK_IMPORTED_MODULE_26__["default"]; });

/* harmony import */ var _static_svg_flagIcons_korean_svg__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../static/svg/flagIcons/korean.svg */ "./static/svg/flagIcons/korean.svg");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FlagKorea", function() { return _static_svg_flagIcons_korean_svg__WEBPACK_IMPORTED_MODULE_27__["default"]; });

/* harmony import */ var _static_svg_flagIcons_jap_svg__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../static/svg/flagIcons/jap.svg */ "./static/svg/flagIcons/jap.svg");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FlagJapan", function() { return _static_svg_flagIcons_jap_svg__WEBPACK_IMPORTED_MODULE_28__["default"]; });

/* harmony import */ var _static_imgs_content_viewer_icon_expand_png__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../static/imgs/content-viewer/icon-expand.png */ "./static/imgs/content-viewer/icon-expand.png");
/* harmony import */ var _static_imgs_content_viewer_icon_expand_png__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(_static_imgs_content_viewer_icon_expand_png__WEBPACK_IMPORTED_MODULE_29__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "IconExpand", function() { return _static_imgs_content_viewer_icon_expand_png__WEBPACK_IMPORTED_MODULE_29___default.a; });
/* harmony import */ var _static_imgs_content_viewer_icon_show_more_png__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../static/imgs/content-viewer/icon-show-more.png */ "./static/imgs/content-viewer/icon-show-more.png");
/* harmony import */ var _static_imgs_content_viewer_icon_show_more_png__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(_static_imgs_content_viewer_icon_show_more_png__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var _static_imgs_content_viewer_icon_x_png__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../static/imgs/content-viewer/icon-x.png */ "./static/imgs/content-viewer/icon-x.png");
/* harmony import */ var _static_imgs_content_viewer_icon_x_png__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(_static_imgs_content_viewer_icon_x_png__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var _static_imgs_calendar_icon_see_more_png__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../static/imgs/calendar/icon-see-more.png */ "./static/imgs/calendar/icon-see-more.png");
/* harmony import */ var _static_imgs_calendar_icon_see_more_png__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(_static_imgs_calendar_icon_see_more_png__WEBPACK_IMPORTED_MODULE_32__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "IconSeeMore", function() { return _static_imgs_calendar_icon_see_more_png__WEBPACK_IMPORTED_MODULE_32___default.a; });
/* harmony import */ var _static_imgs_calendar_icon_address_png__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../static/imgs/calendar/icon-address.png */ "./static/imgs/calendar/icon-address.png");
/* harmony import */ var _static_imgs_calendar_icon_address_png__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(_static_imgs_calendar_icon_address_png__WEBPACK_IMPORTED_MODULE_33__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "IconAddress", function() { return _static_imgs_calendar_icon_address_png__WEBPACK_IMPORTED_MODULE_33___default.a; });
/* harmony import */ var _static_imgs_calendar_icon_time_png__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../static/imgs/calendar/icon-time.png */ "./static/imgs/calendar/icon-time.png");
/* harmony import */ var _static_imgs_calendar_icon_time_png__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(_static_imgs_calendar_icon_time_png__WEBPACK_IMPORTED_MODULE_34__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "IconTime", function() { return _static_imgs_calendar_icon_time_png__WEBPACK_IMPORTED_MODULE_34___default.a; });
/* harmony import */ var _static_imgs_icon_app_setting_png__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../static/imgs/icon-app-setting.png */ "./static/imgs/icon-app-setting.png");
/* harmony import */ var _static_imgs_icon_app_setting_png__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(_static_imgs_icon_app_setting_png__WEBPACK_IMPORTED_MODULE_35__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "IconAppSetting", function() { return _static_imgs_icon_app_setting_png__WEBPACK_IMPORTED_MODULE_35___default.a; });
var _jsxFileName = "/Users/mac/Documents/Intracon-3dapp-Website/app/src/components/Icons.js";





































const IconLang = () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
  src: _static_imgs_lang_icon_png__WEBPACK_IMPORTED_MODULE_18___default.a,
  alt: "language",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 38
  },
  __self: undefined
});

const IconSearch = () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
  src: _static_imgs_search_icon_png__WEBPACK_IMPORTED_MODULE_17___default.a,
  alt: "search",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 41
  },
  __self: undefined
});

const IconShowMore = () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
  src: _static_imgs_content_viewer_icon_show_more_png__WEBPACK_IMPORTED_MODULE_30___default.a,
  alt: "search",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 45
  },
  __self: undefined
});

const IconX = () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
  src: _static_imgs_content_viewer_icon_x_png__WEBPACK_IMPORTED_MODULE_31___default.a,
  alt: "search",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 48
  },
  __self: undefined
});



/***/ }),

/***/ "./components/Layout/Head.js":
/*!***********************************!*\
  !*** ./components/Layout/Head.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_server_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-server/head */ "next-server/head");
/* harmony import */ var next_server_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_server_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _stylesheets_app_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../stylesheets/app.scss */ "./stylesheets/app.scss");
/* harmony import */ var _stylesheets_app_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_stylesheets_app_scss__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/mac/Documents/Intracon-3dapp-Website/app/src/components/Layout/Head.js";



/* harmony default export */ __webpack_exports__["default"] = (() => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_server_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
  charSet: "utf-8",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
  name: "viewport",
  content: "width=device-width, initial-scale=1, user-scalable=0",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
  type: "text/javascript",
  src: "../static/kukudoc/scripts/_lib/jquery.1.12.3.min.js",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
  type: "text/javascript",
  src: "../static/kukudoc/scripts/docxjs/DocxJS.bundle.min.js",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
  type: "text/javascript",
  src: "../static/kukudoc/scripts/docxjs/DocxJS.bundle.min.js",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
  type: "text/javascript",
  src: "../static/kukudoc/scripts/docxjs/DocxUiLoader.js",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
  type: "text/javascript",
  src: "../static/kukudoc/scripts/celljs/CellJS.bundle.min.js",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
  type: "text/javascript",
  src: "../static/kukudoc/scripts/celljs/CellUiLoader.js",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
})));

/***/ }),

/***/ "./components/Layout/Header.js":
/*!*************************************!*\
  !*** ./components/Layout/Header.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _static_imgs_appLogo_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../static/imgs/appLogo.png */ "./static/imgs/appLogo.png");
/* harmony import */ var _static_imgs_appLogo_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_static_imgs_appLogo_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _SearchBox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../SearchBox */ "./components/SearchBox.js");
var _jsxFileName = "/Users/mac/Documents/Intracon-3dapp-Website/app/src/components/Layout/Header.js";





const Header = () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HeaderWrapper, {
  className: "cms-header",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "logo",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
  src: _static_imgs_appLogo_png__WEBPACK_IMPORTED_MODULE_2___default.a,
  alt: "logo",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "right-header",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SearchBox__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
})));

const HeaderWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.section.withConfig({
  displayName: "Header__HeaderWrapper",
  componentId: "pdm7ux-0"
})(["display:flex;flex:1 1 auto;align-items:center;height:60px;background-color:#fff;border-bottom:1px solid #0096d6;.logo{flex:1 1 auto;height:60px;padding-left:15px;flex-direction:column;display:flex;justify-content:center;img{height:53px;width:auto;object-fit:contain;}}.right-header{flex:1 1 100%;justify-content:flex-end;align-items:center;display:flex;padding-right:15px;box-sizing:border-box;.search-icon{cursor:pointer;img{width:18px;object-fit:contain;}}}"]);
/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/Layout/Layout.js":
/*!*************************************!*\
  !*** ./components/Layout/Layout.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Header */ "./components/Layout/Header.js");
/* harmony import */ var _Head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Head */ "./components/Layout/Head.js");
/* harmony import */ var _ErrorBoundary__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ErrorBoundary */ "./components/ErrorBoundary.js");
var _jsxFileName = "/Users/mac/Documents/Intracon-3dapp-Website/app/src/components/Layout/Layout.js";


/* eslint-disable import/no-webpack-loader-syntax */






const theme = __webpack_require__(/*! sass-extract-loader?{"plugins": ["sass-extract-js"]}!../../stylesheets/variables.scss */ "../../node_modules/sass-extract-loader/index.js?{\"plugins\": [\"sass-extract-js\"]}!./stylesheets/variables.scss");

const Layout = ({
  children
}) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styled_components__WEBPACK_IMPORTED_MODULE_1__["ThemeProvider"], {
  theme: theme,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MainPage, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Head__WEBPACK_IMPORTED_MODULE_4__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ErrorBoundary__WEBPACK_IMPORTED_MODULE_5__["default"], {
  key: "app-main-header",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16
  },
  __self: undefined
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ContentPage, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18
  },
  __self: undefined
}, children))));

Layout.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node
};
const MainPage = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.main.withConfig({
  displayName: "Layout__MainPage",
  componentId: "sc-1memfnm-0"
})(["height:100%;display:flex;flex-direction:column;"]);
const ContentPage = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Layout__ContentPage",
  componentId: "sc-1memfnm-1"
})(["flex:1 1 100%;display:flex;overflow-y:scroll;position:relative;"]);
/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/SearchBox.js":
/*!*********************************!*\
  !*** ./components/SearchBox.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_regexp_search__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.regexp.search */ "core-js/modules/es6.regexp.search");
/* harmony import */ var core_js_modules_es6_regexp_search__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_search__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_autosuggest__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-autosuggest */ "react-autosuggest");
/* harmony import */ var react_autosuggest__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_autosuggest__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Icons */ "./components/Icons.js");
/* harmony import */ var _IconDocument__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./IconDocument */ "./components/IconDocument.js");
/* harmony import */ var _services_document__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/document */ "./services/document.js");
/* harmony import */ var _UI_ItemSideMenu_Language__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./UI/ItemSideMenu/Language */ "./components/UI/ItemSideMenu/Language.js");
/* harmony import */ var _UI_ItemSideMenu_RowItemDocument__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./UI/ItemSideMenu/RowItemDocument */ "./components/UI/ItemSideMenu/RowItemDocument.js");
/* harmony import */ var _UI_ItemSideMenu_TextDocument__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./UI/ItemSideMenu/TextDocument */ "./components/UI/ItemSideMenu/TextDocument.js");
/* harmony import */ var _UI_ItemSideMenu_NewItem__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./UI/ItemSideMenu/NewItem */ "./components/UI/ItemSideMenu/NewItem.js");
/* harmony import */ var _UI_ItemSideMenu_Icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./UI/ItemSideMenu/Icon */ "./components/UI/ItemSideMenu/Icon.js");


var _jsxFileName = "/Users/mac/Documents/Intracon-3dapp-Website/app/src/components/SearchBox.js";












class SearchBox extends react__WEBPACK_IMPORTED_MODULE_3__["Component"] {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "state", {
      value: '',
      suggestions: []
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "onChange", (event, {
      newValue
    }) => {
      this.setState({
        value: newValue
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "onSuggestionsFetchRequested", async ({
      value
    }) => {
      const data = await this.getSuggestions(value);
      this.setState({
        suggestions: data
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "onSuggestionsClearRequested", () => {
      this.setState({
        suggestions: []
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "getSuggestions", async value => {
      try {
        const inputValue = value.trim().toLowerCase();
        const result = await _services_document__WEBPACK_IMPORTED_MODULE_7__["default"].search(inputValue);
        return result.data;
      } catch (err) {
        // server error return empty  array
        console.log(err);
        return [];
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "getSuggestionValue", suggestion => suggestion.name);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "renderSuggestion", suggestion => react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_UI_ItemSideMenu_RowItemDocument__WEBPACK_IMPORTED_MODULE_9__["default"], {
      role: "button",
      key: suggestion.id,
      onClick: e => this.openDocument(suggestion),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_UI_ItemSideMenu_Icon__WEBPACK_IMPORTED_MODULE_12__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_IconDocument__WEBPACK_IMPORTED_MODULE_6__["default"], {
      documentType: suggestion.documentType ? suggestion.documentType : suggestion.type,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_UI_ItemSideMenu_TextDocument__WEBPACK_IMPORTED_MODULE_10__["default"], {
      className: "text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }, suggestion.name), suggestion.languages && suggestion.languages.length > 1 && react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_UI_ItemSideMenu_Language__WEBPACK_IMPORTED_MODULE_8__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Icons__WEBPACK_IMPORTED_MODULE_5__["IconLang"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    })), !suggestion.viewed && react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_UI_ItemSideMenu_NewItem__WEBPACK_IMPORTED_MODULE_11__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    })));
  }

  openDocument(document) {
    window.location.href = `/content-viewer?menuId=${document.menuId}&document=${document.id}`;
  }

  render(props) {
    const _this$state = this.state,
          value = _this$state.value,
          suggestions = _this$state.suggestions;
    const inputProps = {
      placeholder: 'Consumables Safety Datasheets',
      value,
      onChange: this.onChange
    };
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(WrapperInputSearch, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_autosuggest__WEBPACK_IMPORTED_MODULE_4___default.a, {
      id: "result-search",
      suggestions: suggestions,
      onSuggestionsFetchRequested: this.onSuggestionsFetchRequested,
      onSuggestionsClearRequested: this.onSuggestionsClearRequested,
      getSuggestionValue: this.getSuggestionValue,
      renderSuggestion: this.renderSuggestion,
      inputProps: inputProps,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "search-icon",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Icons__WEBPACK_IMPORTED_MODULE_5__["IconSearch"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96
      },
      __self: this
    })));
  }

}

const WrapperInputSearch = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "SearchBox__WrapperInputSearch",
  componentId: "sc-1ieeey2-0"
})(["display:flex;position:relative;input{font-size:14px;border:none;width:320px;color:", ";padding-right:15px;}#react-autowhatever-result-search{position:absolute;width:calc(100% + 15px);background-color:", ";border-left:1px solid ", ";top:45px;right:-15px;z-index:1000;}"], props => props.theme.colorTextBody, props => props.theme.colorWhite, props => props.theme.colorBlue);
/* harmony default export */ __webpack_exports__["default"] = (SearchBox);

/***/ }),

/***/ "./components/UI/ItemSideMenu/Icon.js":
/*!********************************************!*\
  !*** ./components/UI/ItemSideMenu/Icon.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Icon = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Icon",
  componentId: "sc-1pp2xxy-0"
})(["width:60px;flex:1 1 auto;display:flex;flex-direction:column;justify-content:center;align-items:center;cursor:pointer;min-width:40px;img{width:40px;}svg{width:40px;}"]);
/* harmony default export */ __webpack_exports__["default"] = (Icon);

/***/ }),

/***/ "./components/UI/ItemSideMenu/Language.js":
/*!************************************************!*\
  !*** ./components/UI/ItemSideMenu/Language.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Language = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Language",
  componentId: "sc-16kl7h3-0"
})(["flex:1 1 auto;height:60px;display:flex;flex-direction:column;width:40px;max-width:40px;min-width:40px;justify-content:flex-start;align-items:flex-start;padding-top:12px;box-sizing:border-box;img{width:16px;object-fit:contain;}"]);
/* harmony default export */ __webpack_exports__["default"] = (Language);

/***/ }),

/***/ "./components/UI/ItemSideMenu/NewItem.js":
/*!***********************************************!*\
  !*** ./components/UI/ItemSideMenu/NewItem.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const NewItem = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "NewItem",
  componentId: "sc-1oluufb-0"
})(["flex:1 1 auto;display:flex;flex-direction:column;cursor:pointer;height:100%;position:relative;width:25px;min-width:25px;&::before{content:'';width:14px;height:14px;background-color:#f99900;border-radius:50%;position:absolute;top:14px;right:10px;box-sizing:border-box;border:1px solid #fff;}"]);
/* harmony default export */ __webpack_exports__["default"] = (NewItem);

/***/ }),

/***/ "./components/UI/ItemSideMenu/RowItemDocument.js":
/*!*******************************************************!*\
  !*** ./components/UI/ItemSideMenu/RowItemDocument.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const RowItemDocument = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "RowItemDocument",
  componentId: "sc-1i9je36-0"
})(["display:flex;cursor:pointer;height:60px;align-items:center;border-bottom:1px solid ", ";box-sizing:border-box;position:relative;padding-left:8px;min-height:60px;&.active{> .txt{color:", ";font-weight:800;}}"], props => props.theme.colorBlue, props => props.theme.colorTextBody);
/* harmony default export */ __webpack_exports__["default"] = (RowItemDocument);

/***/ }),

/***/ "./components/UI/ItemSideMenu/TextDocument.js":
/*!****************************************************!*\
  !*** ./components/UI/ItemSideMenu/TextDocument.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const TextDocument = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "TextDocument",
  componentId: "sc-1rfy7m7-0"
})(["display:flex;flex:1 1 100%;height:44px;align-items:flex-start font-size:14px !important;color:", ";box-sizing:border-box;margin:8px 0;overflow:hidden;-webkit-line-clamp:2;font-family:", ";"], props => props.theme.colorTextBody, props => props.theme.bodyFont);
/* harmony default export */ __webpack_exports__["default"] = (TextDocument);

/***/ }),

/***/ "./constants/endpoints.js":
/*!********************************!*\
  !*** ./constants/endpoints.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  menu: '/msvc/v1/3dapp/menu',
  image: '/msvc/v1/3dapp/image',
  hp: '/msvc/v1/3dapp/hp',
  doc: '/msvc/v1/3dapp/document',
  mailing: '/msvc/v1/3dapp/mailing',
  favorite: '/msvc/v1/3dapp/favoritesDocument',
  viewDoc: '/msvc/v1/3dapp/viewdocument',
  setting: '/msvc/v1/3dapp/app-setting'
});

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/app */ "../../node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Layout_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout/Layout */ "./components/Layout/Layout.js");

var _jsxFileName = "/Users/mac/Documents/Intracon-3dapp-Website/app/src/pages/_app.js";


/* eslint-disable react/no-danger */



class DMIApp extends next_app__WEBPACK_IMPORTED_MODULE_2___default.a {
  render() {
    const _this$props = this.props,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_app__WEBPACK_IMPORTED_MODULE_2__["Container"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Layout_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Component, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (DMIApp);

/***/ }),

/***/ "./services/_api.js":
/*!**************************!*\
  !*** ./services/_api.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(getEnvConfig) {/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/storage */ "./utils/storage.js");
/* eslint-disable no-undef */

 // Regular client, this client will hold user access token

const client = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  baseURL: getEnvConfig.dmi.fe.api,
  headers: {
    'Authorization': `Bearer ${Object(_utils_storage__WEBPACK_IMPORTED_MODULE_1__["getAccessToken"])()}`,
    'Cache-Control': 'no-cache'
  }
});
/* harmony default export */ __webpack_exports__["default"] = (client);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./utils/getEnvConfig */ "./utils/getEnvConfig.js")["default"]))

/***/ }),

/***/ "./services/document.js":
/*!******************************!*\
  !*** ./services/document.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(getEnvConfig) {/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_api */ "./services/_api.js");
/* harmony import */ var _constants_endpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/endpoints */ "./constants/endpoints.js");
/* eslint-disable no-undef */


const Document = {
  calendar: () => _api__WEBPACK_IMPORTED_MODULE_0__["default"].get(`${getEnvConfig.dmi.fe.api}/msvc/v1/3dapp/calendar`, null),
  download: id => `${getEnvConfig.dmi.fe.api}/${_constants_endpoints__WEBPACK_IMPORTED_MODULE_1__["default"].doc}/download/${id}`,
  generateUrl: id => `${getEnvConfig.dmi.fe.api}/${_constants_endpoints__WEBPACK_IMPORTED_MODULE_1__["default"].doc}/generate-url/${id}`,
  getContent: id => _api__WEBPACK_IMPORTED_MODULE_0__["default"].get(`${_constants_endpoints__WEBPACK_IMPORTED_MODULE_1__["default"].doc}/content/${id}`, null),
  get: id => _api__WEBPACK_IMPORTED_MODULE_0__["default"].get(`${_constants_endpoints__WEBPACK_IMPORTED_MODULE_1__["default"].doc}/${id}`, null),
  getByMenu: id => _api__WEBPACK_IMPORTED_MODULE_0__["default"].get(`${_constants_endpoints__WEBPACK_IMPORTED_MODULE_1__["default"].doc}/menu/${id}`, null),
  getByFavorites: id => _api__WEBPACK_IMPORTED_MODULE_0__["default"].get(`${_constants_endpoints__WEBPACK_IMPORTED_MODULE_1__["default"].favorite}/${id}`, null),
  favoriteDocuments: () => _api__WEBPACK_IMPORTED_MODULE_0__["default"].get(`${_constants_endpoints__WEBPACK_IMPORTED_MODULE_1__["default"].favorite}`, null),
  viewedDocuments: id => _api__WEBPACK_IMPORTED_MODULE_0__["default"].get(`${_constants_endpoints__WEBPACK_IMPORTED_MODULE_1__["default"].viewDoc}/${id}`, null),
  favorite: payload => _api__WEBPACK_IMPORTED_MODULE_0__["default"].post(`${_constants_endpoints__WEBPACK_IMPORTED_MODULE_1__["default"].favorite}`, payload),
  deleteFavorite: id => _api__WEBPACK_IMPORTED_MODULE_0__["default"].delete(`${_constants_endpoints__WEBPACK_IMPORTED_MODULE_1__["default"].favorite}/${id}`, null),
  isShareable: id => _api__WEBPACK_IMPORTED_MODULE_0__["default"].get(`${_constants_endpoints__WEBPACK_IMPORTED_MODULE_1__["default"].doc}/${id}/shareable`, null),
  search: keywords => {
    if (keywords.length < 3) {
      return {
        data: []
      };
    } else {
      return _api__WEBPACK_IMPORTED_MODULE_0__["default"].get(`${_constants_endpoints__WEBPACK_IMPORTED_MODULE_1__["default"].doc}/search?searchText=${keywords}`, null);
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Document);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./utils/getEnvConfig */ "./utils/getEnvConfig.js")["default"]))

/***/ }),

/***/ "./static/imgs/appLogo.png":
/*!*********************************!*\
  !*** ./static/imgs/appLogo.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./static/imgs/calendar/icon-address.png":
/*!***********************************************!*\
  !*** ./static/imgs/calendar/icon-address.png ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAkCAYAAAB4+EEtAAAAAXNSR0IArs4c6QAABPJJREFUSA2tV2tsVEUU/ubutktB2gBSSWMbwGK3XRMMQVCC/qhGSYRqoqBGSgK2qe3WJtoEUYMSHxVrWrH0bm1QUKI/AANINcZnIpiIr0Qb797WGl8gtkAItlK6dHfHb3azz97bxbaTdO/cc75zvjvnnDkzFcg0dvYUQJN3QoRXA2Ih4fMAmQcpznDeDyF/hBBdmDH7Y2yYd2E8d8JWqf9SCFx6HgLriPkMEvtJ0g3NdQpzAufRn50PLVjID7kFUt5DQjcxLyEwsxWPFV608mtNppvVdPwCHexCdrgFVZ5zVsYpsg7/dQjjSa50JaBVoq70ixQ9X8aS+fzPUc6wZa9CbfHpdIOM77q5giE/RNwO1HleTMankun+raRfjpyce7FxwUgy8H/Noyk4xlW2kHBnzDZB5uupgAzvwDRtMR5yD8UAE37qvTcAoWPM4+2oLzuq/GgRZ219uSTazRytnRIi5dRb8i1/n2akdmG/dChRlMwx+hSFh5jU75Vwyoaz9BX6cuGMv0r5dKL1RA4w6OVyizOS+P6YBXlBVep0CG0QMusAvMUnbO1qxCjajc1c0jPEdGrIHlzDVX0Jr6ff1kgpfP5mEv3E2fUM93QSlgMBE7pZP65dPg6zASxAhznfSaIKGr83roHPv50b9yY4nYtRU3I2jtUNEoc/gq/nT9S5j8TlyZN1nkvQ/R8iLO9SOfPQkfpi69HWN5f6emjO+1OIFNrr+YG/jSyurdbGcanBRc0nmShkvv6Oi9MnWaOriOlGbclf6arIu2PWQTpaCt1gz7QZGv1LFGjceLmE/GsDY2qQS2cDtvqagmGChiEcebaYqP8rVBj7oYkr7YGCIZZLbPXt5rVcuQtBh310pLyaixpQZMcRFkttndW6j1IXZJhqLDFauIk5fR8NiwYt9VHhzZDaV07u6w/45RWUvWkJFkLCZ24i5gh8RgHC2jvIyjuJ4JCH7WgLbZZzz91qaauEb/TMxEi4HJpWrcElDtLRHWg359gaqONCaMuYv2UsdQOh8zwkQ8eZS41RKWfZ99raBuQDxH2TKDDdr/OrW2wNkhV7+2cwpCv5l7njKDvdMNkQ7k642PXrVdx4p6Ha0VQOn7GeRN/FXKoCAaoXDnCpnWxHj8YUk3629bnoo4mdQx3GkRElU1OX1kzCTYgcfFHlpH7VSQKcg7cs3sYSZJEDU7Syue6ZFIkyfs0o477aAs1Rxb4rY/4SZEoSdOpUFrFYNsYAE3qGxFvs9HvxsDueL+UnlaxhUYAxrmSJt6HTKJoQkY8HpZBFcLoa0+1TyZS23vM1c9eKkNjHzpC4o6RbWr2rZiyxnXtvLWqu+ccKMlamSHTjU4bzibFKG4m6Z+jG5yz1x20QaWGMoVRSw44NjHsj2v32TTiGV8+z5qvMtwu1pc3J4uT52DDGtI+4TzGcVbxeH8DrxuyY2PKpm2soX0+yB5OrLx1rT6aQdWXq/tCFAN7FNmmNVf94CLmbuEqu6vd0guR3awfJiLlyM8+rfOSbTcniyHzPb9OghQ5z/ja8pV1j9GmCzGTqwqKJ1ayySl7LEkeJKqKLw/sY6iEEs9RRk3FcfmnrP5dCBD+h4xt5UJ5k5W2j9/sQyF1i9y9SOvvlkylLtWElGljDL3Pzd/DesYJnWXe606l71/3P8jgaIfFtU+d0PE+dve7x1Ha6/wD0/ZhISCJmOgAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./static/imgs/calendar/icon-see-more.png":
/*!************************************************!*\
  !*** ./static/imgs/calendar/icon-see-more.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAgCAYAAAABtRhCAAAAAXNSR0IArs4c6QAAAoRJREFUSA3tVr9rE2EYft671B84qa0oOig6JHcO0gpVqIM4iJN26aLopDFNFkEnIY3FrZ1Kk1JQqSAOouAfoDhIpToUB3Nn6aKLKa2DTtKmd6/v911CQmPbC71mCN7y3ff+eJ73fY/vvgdo94caGiw4Z8R2AwxLVhuE/Q0xGxt+itsFswOiKQxaM/XhNcKx+Z2IlR8I0T0hMeqDtvDuCfEIYlYWSSornIAwxzEccFUlPRXwZ1Lda/j+NNL2QsUWbpmYOyx5vSDul4RrlaQZLCbOIUerAWHeeSjU98VZAhtXkY6/C4e+SVT+63nAey7FHwR4GIP2EKHg9kjbn/QYyehDKj69CUxz7vHiBRj0Rj6VD9Pslm/FtzUZ43HkZKq0jP1WGprSHJ6XVoQJXTLxq9Cl55055J0voeOJXgYciBvS6im9MXd9CA3QbKCJWZ3CipBoj94kj/9uFid0fNIq6VhCV1TnLTR3+xPG1p1Fjg10OcV/+omPgomRL7qNfvKQtk422gNLy0e6QYfkS03BGV1brjqHQFn+s+t2sjalum95h/8Jq6OPbG35SEnOUklfkMu79+LOsV+RtVIPNOkcgocfck0tqA4/a9+OZSWetufx0B0A02yNEP6t7WETVOabGpsghIYxKZYVuZH7USheipx0wr0on+yy3Lt/RGQ8MpBKfBPxltVEjCfQwiciWoXl+08DNM4iY30PVNsLNrEkMpFwukIVyER0vEfqxGJT9GPzR9Cx2itjvCJ5NZnYmejDAHkBoUJUQtgsD8vbXS14lG3rjycQo+iU7gbsFQVXI6yCj7tnYfB1mbklYlZ+zrSv6gq1MpYkzhVkB76otYz9MVRe2wT9BagxtznvDk2vAAAAAElFTkSuQmCC"

/***/ }),

/***/ "./static/imgs/calendar/icon-time.png":
/*!********************************************!*\
  !*** ./static/imgs/calendar/icon-time.png ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAAAXNSR0IArs4c6QAAA3lJREFUSA2tVlloVEkUPVX9Mq6EmbgEFQXRsZOOoCiIikYU/HIhOhjGBcSNmAXRL7cPIyoqgwjiMwYV0Q9XxDCiQ0aJOoqIEMSPTttEFBXiEpMgaoxJd5WnuqnEXpK0ky5471bVXU7dend5Aj2Ncu0gO5gPHS6AFjMgMALQw6HRTLU3EOIJlL6KQQOrsWZsW0+mRLdMN7AIUAcBcR9SXsA77x2UC4VyLTEikE2A0dByFrReTvDxPEQFlDyEstymZDYTgY7UZ8LpOEOAZ/DIgyjyfkimGLN3LDCVYLvp6WxIUYji3OoYfsLC9Y+H638M9+ncBF4qG65/JY75v8ENlMWLd3l04nk2Or4+AGQhSnJr4wVTXlc8nQcV/pvXvZCe3bF6MjIx997edoMffEevIG7dXlTqDGsggRbn1PCwS6HUeRypH2b5UaBhgVXceIlS30XL6J7qdQi/Gtw9n5zS3H/5jU/B07HPyklc0h4IvQdCbrebaaFOv78YIMtQGcwx9iQaTZ6IIEpygmkBsEaKxn2kV2cQUgVRIKH+oEfXLD+tVBu7akEUCJgO6fyXVgBrbDjuMZGnRYG0HgUn9Nry0koL89qZxC046c9i1InfsD7P1K7UhhCfoL9sw+kX/VNU+IA2OVTStWYcfvFrakqUUpjPaPKitbWeFYB1rpchtMmlJpNHDRjQOrIX8S52mY/5llfAyr2RgPvh1j1EpNZ1iXTOTGJrMRSlOc0E0rWsupM7malOSnzXEc7wUvwaK3g1Lvl/SVANB+bwxup4KPYbiH8I9ieFziUI9rax6fdvFDHZ31kBYlX0YtqvMnuSp7lFmm8iI1aojyvTbrRYAe1EHJC8789M2ANox84+mo5Vd0JbabcGpRMChmGCARjic/mexSiaGVn39VXhZ5KqzdAZu6ypKFChCEOxM0JfZuP7+cCw1gytCI5ikjJAxFrrjdmOApmZCVuNDYyQm/+7wx73+6BCDxkA++NbTleHNWBmHA9OYoesYpBcgeMcSOmfobJhIEItJTzkZj7rkv0zJAIZsLNvB+FzSxG0KmYe1EB7LqDRezfyF2T4dhytm8I7YWro1fTiNjzYgiLfG8v+kSYHshKmKTYF59DDJTTEQNGZpI0Ez+I1j6HYez5VkPocivMeWbVktGegeA1zRaplIlTGJzieBkSaW7xQ8vV3gF0lc7nIlVoAAAAASUVORK5CYII="

/***/ }),

/***/ "./static/imgs/content-viewer/icon-check.png":
/*!***************************************************!*\
  !*** ./static/imgs/content-viewer/icon-check.png ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAARCAYAAAC8XK78AAAAAXNSR0IArs4c6QAAAWhJREFUSA1jYJh6w4Nh2rUtDDP/szLQA6z6z8ww9epqoL0hIOuYGBj+pQFpb4Y/1zbR3BEgy19fX8bAyBjCwPgvD+IAFs1whv8Mu4GCHgx/rm+lmSMglq9mYGQIY/j//zQQe0EckM74m4FF0xviCAZXmjgCYXkg0NJjQOzEkK39BeQARhABBqA0AAoBRqAjQCHyl9WXIU/1J0yabBrd8h+8LgxFst9h5iEcABJBdgQDwwGGP6weFDmi4T8Lg+j1VUBPQXyOZjnISlQHUNMRIMvFrm8AGukNxMcYsFgOsg7TASBRSkOCSMtxO4ASR5BgOX4HkOMIEi0n7ABSHEGG5cQ5gBhHkGk58Q7A5wgKLCfNAdgcwSPkw/Dl3UqgFN6sBtKKC2DPhrhUg8TBWfTaWmDd4cvA8P89MCcLAsv1/Qwsgj4M6VLf8GnFJke6A+COgBbb1CgxsbmMoBgoJKZdbWToe8xJUC0eBQD+1+Lc8qjqzAAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./static/imgs/content-viewer/icon-expand.png":
/*!****************************************************!*\
  !*** ./static/imgs/content-viewer/icon-expand.png ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAArCAYAAADhXXHAAAAAAXNSR0IArs4c6QAAAoRJREFUWAntmT1rFFEUhncSbQSLCFoEi1VMIbGyN0KQYCUWgmBifoDgjxACqW0lhWIhGEipZbqAgq1WQVCIoqQLUVFcnyNzkrOTuXfOnd3MNHPgZWbOxz3P3N29Ox+9wWDwAqXYR5LP9UYw6u+jv8hrkntrgp53E/v2yZ9NrCmmz+HIis7IseQunygp+o7vfaRwM8uyzUjcE1ol6QKS/mUmcNeQPaGJXsnn8FumvGyEJnz0ztCzEq4NC/uJhD95UivA9C6CfjbQQ7DrBO6gVoADoH38+kMchpWPuQ3gEGjOE4ZtGjgG6oJtCrgK1A0bAL4p/nGYB1T6kBf/GlgYku2P7hfHIwN7QZNh8wIB1jMcCbgE9Au+vp0gu2/6/l8N3uAQW7FJxX3ii8gCLxRzqo6pl3V0DakJ6KVYHfGtPHlVvhNn0BwK/fUdjEWOBf5wEHDuUH8VqVWCyrAkTyHhO+lsc5hG0T20hx4cen171Eyid+gtmvFVdVndDHQz0M1ANwPdDHQz0M3AGGeAi5DL6HSdIak7ha7UqU2uodFjJPYytZiaabSD5Hb/dmq9XC8uoNcoehEsA5PzBKltpTaj8DxKei5B/g30Cs0IwC4SexprTtyCfuX4Yiw/FKPOXsDLk5/oPR3xb0jsucCqrUcajAVUx6ehBY7e05Grt1JHn8jogLoleaygZlwXsBv2uEBTgF2wxw3qBa6EbQrUAxyFbRq0CjgI2xZoBHg+BPuTgFrtdVQb190CYFeJHwrEdmjpUn9roHqCBWDlKoXVYGi7TeCsDlxnS/0S0sU+1Kfo35D3YPuJDeVvdtSrpuuMYV8beRB25WHcQ7Tsyc5zmngPVsTZwfHoHy/JOgwVGhYDAAAAAElFTkSuQmCC"

/***/ }),

/***/ "./static/imgs/content-viewer/icon-show-more.png":
/*!*******************************************************!*\
  !*** ./static/imgs/content-viewer/icon-show-more.png ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAATCAYAAACKsM07AAAAAXNSR0IArs4c6QAAALJJREFUOBFj+P//fzEQfwViaoM+BiBgBJr6AUjzgzhUBt8ZGRm5mICGzqSywSDjvgNxEw3MHTWSjBBgBOkBpiRTIMVNhn58Wi4AU9EHkOFrqZ0BoObtAtkOygcvgbQYPqeQKfcB6ANBFqDmHCDOJtMQXNq+ASV6cUmOitM3BECpCJSC4oGY2vlgPTAVXQRZcBVouBYN/HUbaIEaqLimFQCXEiAf6ABtCKGyLaB8sAjogxcAZ4bZJr/Y3vIAAAAASUVORK5CYII="

/***/ }),

/***/ "./static/imgs/content-viewer/icon-x.png":
/*!***********************************************!*\
  !*** ./static/imgs/content-viewer/icon-x.png ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAaFJREFUWAntlr9KA0EQh4P4AgFRUlhaiBBEidhoZWVlp4WV4FtolefwAUSwshMbfQULEcFOMKAoIiL+Ob8VNyw6e7e7WXIIM/Bjw+zM/L5M7iCNhoZuQDegG9AN/P8NFEUxjg7RMWqnfCP6mmgfnaCFlBneHgbuIRv3fJjxFgsX1Bu4czuA80ooE1MjYrY82eT6DJMgSOq+6+kJqi+39txiMoEukRuVm6T49+ZM/zNa9FilpxnaQtfIDS8kRRLcC/nldIqKToZPohvkxh9ILiW4V/IrFRaDX2MyhXrIjT4kSQnujfzq4O6BEzCbRnfIDQO5hNy31dy/o7XA0fnKMG2jB1QWn1yu53ONnIT5PHoqIdyOHJm/HDjzs0qxk98tciJUo+hIoiN3gcYiR+Yrx7wMzjLXA+mBMy/ELnq0dD/ncCExlTZn4DbM78M5i+qBrIKzD1AtkKFwtUDGwg0dEsAucqP/zFkY30mT9Eye+uqT8pgcOHTBcNZMgOzZuywnBh1k3kzzr2QzZSh9c+gWfaCtlBnaoxvQDegGdAO6gfgNfAFysG1IbPucEQAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./static/imgs/content-viewer/start-active.png":
/*!*****************************************************!*\
  !*** ./static/imgs/content-viewer/start-active.png ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./static/imgs/content-viewer/start.png":
/*!**********************************************!*\
  !*** ./static/imgs/content-viewer/start.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./static/imgs/icon-app-setting.png":
/*!******************************************!*\
  !*** ./static/imgs/icon-app-setting.png ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./static/imgs/lang-icon.png":
/*!***********************************!*\
  !*** ./static/imgs/lang-icon.png ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAlCAYAAADFniADAAAAAXNSR0IArs4c6QAABK5JREFUWAnNl1toI1UYgP9Jprm02WQ3qWm2ZNuY2AcpiIiKW7X1QZRCX3rZSF8Wmt0XoYJYEKQtvaxht68K0iL4ILTYliYvfShYtA9etgi6F5OuS9hLttgkvblpLu3m5jknmTiTmUky2YH1h5M55/yX83H+P/8kFORy1Lkrnh939da3jlWnlFClvH/jGzDF/q7SuqJZNJfLfU9R1KcLCwv3FNYr3p8fNb7YJQUIHxE2tFQ8SYKBHgH1I/sV7EPVffF7LkVrJPjnTZsPAvCO/zvJfpUcUqmUXVELEA4c0Z+DHFCVzpCsV6lUTQrJXgWHNK2GA52lVveyfjVD4agRQ2vZ4LUqnwoq/H+Eiuhbqq6riYkJmJ2dhebm5ooXWPamWnQ0nFxykPGGmf8NxXV1WGVdoQIGtVpdEQgb0OWs+p/XFdUDdh1cjxwX18wkjG7LGNthluQ5PT0NJpOJs6fVasl6bGyMPOvq6iCdTkM2m4WZmRkIBoNF+7I3NcCCciIooQYQOW0rBmMm+Ebq6+s5AzVHosZweNA0DRqNhtgoFFwM0ZvCqXv1OTWEEmkIxtLwOkrf+SYN/BLm3ha+KdyvKPTJyNTUFDAQzB4GwIebzWYYGRkherfbDTs7OxCPxxkz8uQislQXCre08iAOXjSw4BSWCqmrhibOdiKRIAfhOhocHISuri7Y39+Ho6MjcLlcBGhjYwMCgQAPCAcShWIAvPfjsIIGFpxOoRSKtQaLxQIdHR3Q29sLdrsdhoeHwWg0QjQahaWlJRJT6EMQCqfulUbUsU8y8FMoCQ9jKbi5fwJNWiW8ackXLDtYROTlvLW1BR6Ph9TP6OgotLe3k8Kem5uDZDLJDsGZC0J9UEjTyr1YsVKYFPbbGjgB8CJssIn2q9XVVdje3ib1hG3X1tbA7/fjqagIFjqTun4E19Oah1AW8oZ1n1zfK8LiyPm6MoMxHuYd1N3dDVartbiP17gNeL1e8iwqWBPeTeHUvWzKNzmjWgln62kyzNo8vxml8O2zQim0scIC+doPDQ2B0+kk+/Pz87C+vk6KvKenB8bHxzmwbGce1KDjFNEvo9Q5FoOc8aXvMdEJpbC0rvr6+qCzsxMymQwwQPiJXzW4BdhsNtIalEr+j11e+pjUzQeOYBsVOFu+vRuFj9oN4HTo4ONfuSkMFeqK6Ve4wNva2mBxcRFwwTOyubkJPp+PtApcaxi6VCj4yv9f1yvVSlx3//E1nBGoKylhUNM9z0uflACltri7yyGyQgm9B2uBlBdKpIlKBZMV6gmthcOS96BUIGwvKxQOWNoa8J5EicoOFdbX/mcC/Ut+hNrIHdmhIqdrhrqPXj/vTk5OZnnNk33VVDYDrbt/LtDp49/Y+5XmCUp7W5OJ87uiuONj1ERvLS8vEx9RKEUmDfbQjc8C7ovXxGMJawLC21XvCkLR6RNw7N7+8C/3xdmqI8loyINSpZI5e+jWwJ2rQx4Zz5EUigOlfXKUse/53vNddf0gKYrMxkWohuN/UrbDrdd8n1+6KfMZksMRKENiL2ndu/uS79rlp61RyQBCDvSZeChqOnjwAgLaFTJ4JnuNrpn8T81ncrrwof8Co+WEpBaBunEAAAAASUVORK5CYII="

/***/ }),

/***/ "./static/imgs/search-icon.png":
/*!*************************************!*\
  !*** ./static/imgs/search-icon.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAAAXNSR0IArs4c6QAABUxJREFUWAnNWW1oXEUUPfN2E9NqrZqmKn5ArDbZ5lfV+hEKhlisX9Wi0B9VLKVgakL7oyr+EakRFEWtlmTjxoAKilJpEalStYagEhSrFHE3qbXENlK0tmq/ME26ez2Tl+2+2XmbfS9Zkgzsvrlnzr1z3uydeTNvFYKW9uRlgLMCSm4H5A5AXTzqKviL14NQ6CPeC8FutNT9GjRsWJ4q6hBP3kVxm8hbVpSbJQj2UHwXmhd1QinJwqW4FhacSF6NNDopdvmEOxL8SOHrOOJ7Jxwjz9FfcHtfPTv6mD9zZR4/vCk4w5vegJbYm+GdbQ9bcFvyfjj4kJ2U2XSNyDC/vmf7AOuDrFdCVDVz+0Zibl5rml068FisZbIpYgqO998HZD5iXybudv4tO9uMkWgPNl7HUfMpHcnFFN/MlrX8RCyGSILpsd7CQwA5YVv3VyE6vM9nlIYo9GGOzvbAceP9NZCMTqmFlo+oRyeTHs65gNHh1yyxgmPEloYSqwM21+5D9LybIPLNufjZipJXED84Xupkmb5XV3Bb8mYKW20ziDXHfrDxAEjTguOIVtzLPD+Qx54DnH4uDwtsuoKVesryGM232OcWHgbQoh1wXnCBNIqsRVfyEgMKaDjYMnARZzhHwlvkH1REnvQiE66vr0vR9y3TX83GGbXGxIJZDsqHVjId8pYw1Yp1tSeDhQjASjvP2yx5wMaKI0wJWWrRIrLDwiYDbKjlmo28uaDqkZC8gSreieMu+B6iYABNdYc8SImq6jMjkGJ2Z1KLDSyA4XB3danBU9Jv2KUyJGMPgkS4AwxXmBJqvuEi+NOwS2Y4ehtqFpWZawLFLZ0S/xo0pWYZdqkMlZlthcqo0xZWBNAjfNjkyJWmXSpLXWFFcvC3hRUBmMPyex5nCRKH7dHII4U2RW61fBznZwsrAjAl8JXJUeXIHOcpo4Rlm+idm3li0QPVVHM0bC9MicgnlpPIExY2GeBYag13fOebIVS3aQezHO6sfvJJi1vQlro7WIgirMSBudwjv2ixInjXwgIAHGEWR9mPToW3kUhdHiBGYYqIQnrofRLm5ZF+Q1Nsdx4WyHQFV8Y6x447OSeFKpzFzsnsXRHv13tsez6IenyiRyVX8CrF7Z/amFM7VlO4Hji1B/FfrrHaxgO2JcvRntrONd6Oqd9jVGV2juc+XlvuiKRZ8b5nONLPWg4ip3hDryNd9hLPcyes9iywWRzMT61mzrZy9anOwtZV8AWisXvQpEastiKAKViT21PvsLNHfP1Gj+z4jm1f88MdmBrkla8CRP8CN3BEG4gFO/5o0emyFQUPtAzoV2zBeqJ09LWS/LSfQ4mxHpwtuzOMaFtwVlF78iFWE/b6mSUEvuqHQ/4q4XUOJdqddF73bL2l7j1Wr+Wni1vQTBYOfNVPMlEPco2v5ocvXgqWBkRHduHVwVkFGZ6GwiPsIXF5quELlpUU3sg85QmFZzLfIkco8kso5wPMS+/Cqjr9lojzInkBv7v5ay0Ztf2/ejE0Zxk2XfWff7OLBhPsjaD3BUf6F8CRRbyBhbyBE8ioQxCnD+5RyMvO1UskOrzgnITwtaCiRZbzlRaXUrtMrWDdfxDRbs43+okuPOnsmysN4o5cI4P1Fgzo5nr32M0ZtKkXrLvXovUECyJ66/4LvYqnPiW8veulrOKk3rXVe2GjLrIX6fLbsluC6RWslYUUPf2CQ4qeGYKDi07MHME50Z+y2qBNq4j8MT2rhKVkDNCPZb17A3p8KUqlZ5ZgrVL/4VNItMiWmZUS3mHVx6yjeJmQ3ubqx/QbaK574X8T3ZYsVaJDQgAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./static/svg/applications.svg":
/*!*************************************!*\
  !*** ./static/svg/applications.svg ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



const SvgApplications = props => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
  id: "applications_svg__Layer_1",
  x: 0,
  y: 0,
  viewBox: "0 0 595.28 841.89",
  xmlSpace: "preserve"
}, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("style", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M505.79 421.44c3.16 35.01-7.72 67.09-25.94 97.64-3.28 5.5-2.5 14.78-.83 21.64 9.51 39-.75 68.58-32.15 89.68-27.37 18.39-65.55 14.93-91.53-6.83-6.51-5.46-16.29-10.09-24.49-9.97-48.88.77-97 .06-139.43-29.77-3.46-2.43-11.27-.36-16.37 1.5-58.32 21.25-111.08-11.6-103.78-74.48 1.84-15.86 14.24-30.49 21.81-45.68 2.54-5.1 8.23-10.8 7.31-15.13-10.51-49.53 2.29-93.7 28.27-135.58 3.51-5.66 5.46-14.77 3.59-20.89-11.74-38.43 5.84-62.37 25.93-78.1 18.68-14.63 56.22-13.55 78.45 3.98 10.18 8.02 17.88 8.37 30.39 7.41 44.03-3.37 88.89-4.35 129.25 17.63 10.54 5.74 16.09 2.46 23.7-1.56 33.76-17.84 81.54-10.73 99.71 25.7 13.54 27.14 13.74 54.35-5.92 79.09-9.22 11.61-15.4 21.61-8.74 37.91 4.11 10.03.77 23.12.77 35.81zm-118.78-123.8c14.47 21.09 24.89 41.75 40.52 57.11 10.44 10.26 8.4 14.03.55 21.73-14.65 14.37-29.33 28.72-43.5 43.55-7.64 8-13.03 9.98-23.86 2.61-18.72-12.74-39.69-11.96-58.32 1.85-16.97 12.57-27.65 27.94-21.91 51.46 1.32 5.4-5.47 16.41-11.26 19.25-20.45 10.02-42.08 17.62-59.02 24.42-14.66-18.32-27.57-34.6-40.65-50.75-5.85-7.22-12.05-14.15-16.63-19.5-6 3.05-16.57 9.03-27.78 13.37-1.35.52-6.14-7.85-7.31-9.41-4.82 7.54-10.01 16.41-15.96 24.73-3.78 5.28-9.95 9.09-12.88 14.69-12.24 23.33-5.44 53.68 15.52 73.02 16.14 14.89 46.79 16.1 68.75 4.45 5.63-2.99 14.79-2.84 21.01-.55 23.97 8.84 46.67 22.48 71.26 27.88 21.75 4.78 45.39 1 68.19 1 .1-2.5.21-5 .31-7.51-51.39 2.48-101.71.69-148.79-36.78 10.27-9.99 18.48-22.29 29.97-28.18 18.9-9.68 40.25-14.45 59.94-22.76 10.62-4.48 17.34-4.3 26.98 3.66 8.76 7.24 22.32 13.49 33.08 12.52 27.42-2.47 51.21-40.13 47.82-68.74-.82-6.9 1.46-16.24 5.91-21.31 13.97-15.96 32.4-28.59 43.91-45.96 11.9-17.96 24.44-25.13 51.16-17.95 0 24.44 3.03 50.75-.86 75.99-3.79 24.59-14.67 48.08-22.44 72.06 34.19-39.09 38.43-85.42 29.64-132.37-3.03-16.17-3.47-25.19 8.62-36.76 18.57-17.75 22.69-53.11 9.01-69.84-17.93-21.92-41.84-41.78-76.56-22.37-9.77 5.46-19.63 10.74-28.21 15.43 4.94 29.6-23.36 20.91-37.22 33.84 11.22-2.08 19.24-3.56 21.01-3.88zm-61.41 57.38c-1.71-41.07-34.35-70.5-71.3-70.07-41.59.48-69.98 35.3-69.22 71.41.83 39.21 31.54 71.13 70.5 70.05 40.06-1.12 69.51-32.84 70.02-71.39zm17.6 209.92c.02 36.79 27.32 66.33 63.22 65.38 33.8-.9 63.22-30.43 64.01-64.11.85-35.97-28.62-63.11-65.48-63.12-37.63-.01-61.77 24.17-61.75 61.85zM178.61 321.83c12.84-29.49 37.78-43.42 67.08-49.83.71-9.92 1.32-18.46 2.04-28.66-17.02-8.56-33.85-21.91-52.41-25.08-22.19-3.78-39.12 11.21-49.24 31.79-13.46 27.38-2.12 53.01 32.53 71.78zm218.47 164.18c15.96 4.22 30.15 8.63 44.67 11.34 3.64.68 10.24-3.05 12.18-6.57 18.6-33.8 24.12-69.89 15.49-107.56-.41-1.79-13.6-3.97-16.29-1.33-12.35 12.12-21.25 28.28-34.78 38.54-24.34 18.46-25.03 41.69-21.27 65.58zm-64 48.11c-46.73-25.66-86.99-8.96-128.98 15.51 38.26 26.02 71.76 34.18 124.42 26.21 1.58-14.55 3.19-29.23 4.56-41.72zm7.97-208.36c-3.84 29.38-6.87 52.53-9.54 72.93 40.68 25.6 64.13-1.12 83.31-28.33-11.86-19.81-22.78-38.07-34.82-58.18-11.46 3.99-28.08 9.79-38.95 13.58zm-146.45 98.5c-5.7 6.91-14.44 17.52-20.42 24.77 15.85 19.68 29.06 36.07 42.02 52.17 33.29-6.16 64.55-16.33 52.28-60.21-21.91-4.97-45.22-10.25-73.88-16.73zm-64.32 25.59c14.75-16.37 28.25-30.01 39.95-45.06 4.21-5.41 5.79-14.24 5.59-21.43-.45-16.65-2.72-33.25-4.38-51.2-3.25-1.06-9.15-2.99-15.93-5.2-24.75 37.51-33.2 77.21-25.23 122.89zm194.35-151.01c17.45-6.43 39.1-14.41 63.39-23.36-10.51-4.7-18.48-10.28-27.15-11.77-26.79-4.61-53.77-8.94-80.85-10.54-8.24-.49-25.38.48-20.77 13.86 23.49 11.43 42.99 20.92 65.38 31.81z",
  fill: "#fff"
}));

/* harmony default export */ __webpack_exports__["default"] = (SvgApplications);

/***/ }),

/***/ "./static/svg/contact.svg":
/*!********************************!*\
  !*** ./static/svg/contact.svg ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



const SvgContact = props => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
  id: "contact_svg__Layer_1",
  x: 0,
  y: 0,
  viewBox: "0 0 595.28 841.89",
  xmlSpace: "preserve"
}, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("style", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M300.5 590.14c-62.52 0-125.05.05-187.57-.02-31.53-.03-46.63-15.19-46.65-46.83-.06-77.97-.07-155.94.01-233.92.03-30.37 15.34-46.02 45.22-46.04 125.78-.07 251.57-.07 377.35 0 30.07.02 45.51 15.54 45.54 45.72.08 77.97.06 155.94.01 233.92-.02 31.81-15.03 47.12-46.33 47.15-62.53.07-125.06.02-187.58.02zM94.97 281.79c60.56 60.29 117.36 116.92 174.26 173.45 24.13 23.98 31.98 24.42 58.23 3.8 2.88-2.26 5.3-5.1 7.9-7.7 52.04-52.04 104.1-104.06 156.06-156.19 3.68-3.69 6.6-8.12 10.81-13.37-135.66.01-268.64.01-407.26.01zm2.19 288.81h406.41c-48.14-43.2-93.87-84.23-138.76-124.52-22.85 13.71-32.26 43.01-64.44 43.03-32.66.02-42.25-30.4-64.39-43.2-45.52 40.88-90.97 81.7-138.82 124.69zm417.37-12.69c10.9-22.38 8.99-246.54-.44-259.49-45.33 45.32-90.89 90.88-136.59 136.56 44.56 39.98 90.04 80.77 137.03 122.93zM82 299.13v262.15c49.72-44.69 95.96-86.27 140.56-126.37-44.12-45.19-88.12-90.34-132.38-135.25-1.46-1.48-5.51-.41-8.18-.53z",
  fill: "#fff"
}));

/* harmony default export */ __webpack_exports__["default"] = (SvgContact);

/***/ }),

/***/ "./static/svg/cost.svg":
/*!*****************************!*\
  !*** ./static/svg/cost.svg ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



const SvgCost = props => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
  id: "cost_svg__Layer_1",
  x: 0,
  y: 0,
  viewBox: "0 0 595.28 841.89",
  xmlSpace: "preserve"
}, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("style", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M182.45 491.66c0-32.58-1.39-65.25.7-97.69.81-12.57 7.45-26.14 15.11-36.56 9.97-13.56 23.8-24.23 35.61-36.5 12.55-13.05 28.57-22.34 20.97-47.35-5.57-18.33 17.64-43.55 34.58-45.73 31.11-3.99 54.73 8.82 61.48 35.21 2.51 9.81.54 20.72 1.09 31.1.18 3.42 1.24 7.11 2.98 10.04 1.84 3.09 4.61 5.94 7.6 8 52.23 35.92 67.6 85.48 61.09 147.23-4.63 43.94-1.5 88.77-.63 133.18.4 20.29-7.78 27.33-27.61 27.09-61.45-.74-122.92-.82-184.37.03-20.7.29-29.64-6.55-28.9-28.09 1.14-33.29.3-66.64.3-99.96zm158.44-176.1c-3.11 16.98-6.12 27.95-6.93 39.08-1.35 18.45-12.05 28.4-31.45 29.04-19.4.65-27.84-10.92-30.5-27.27-2.74-16.86 10.25-28.72 28.99-31.04 8.93-1.11 17.43-5.73 26.13-8.77-4.51-8.89-8.5-18.11-13.78-26.52-2.49-3.97-7.44-6.39-12.29-10.35-33.19 33.48-65.73 65.85-97.54 98.93-4.44 4.61-7.34 12.71-7.4 19.22-.54 62.99-.03 125.98-.55 188.96-.12 14.45 4.97 19.55 19.42 19.41 58.54-.54 117.09-.56 175.63.01 14.87.14 19.1-5.8 18.99-19.84-.49-62.99.01-125.98-.55-188.96-.06-6.47-3.32-14.28-7.7-19.09-17.9-19.68-36.8-38.43-60.47-62.81zm-3.98-30.58c.33-24.17-17.87-45.43-36.32-43.76-17.44 1.58-29.7 18.72-26.88 37.62 25.64-19.62 34.61-19 63.2 6.14z",
  fill: "#fff"
}));

/* harmony default export */ __webpack_exports__["default"] = (SvgCost);

/***/ }),

/***/ "./static/svg/costCalculator.svg":
/*!***************************************!*\
  !*** ./static/svg/costCalculator.svg ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



const SvgCostCalculator = props => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
  viewBox: "0 0 1080 1080"
}, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M451.8 103.6c-35.1 35.4-41.8 90-16.5 132.9L261.4 410.4c-12.7 12.7-19.7 29.9-19.6 47.8l-.1 497.8c0 29.8 24.2 54 54 54h466.4c29.7.1 53.9-23.9 54-53.6V458.1c.1-18-7-35.2-19.7-47.9L638.6 252.4c3.6-11.3 6.2-22.8 7.6-34.6 5.4-42.3-9.5-84.8-40.2-114.4-42.7-42.3-111.6-42.2-154.2.2zm326.1 324.9c7.9 7.9 12.4 18.6 12.5 29.7l-.2 497.8c-.2 15.6-12.8 28.2-28.3 28.3H295.7c-15.6-.2-28.2-12.7-28.3-28.3l-.1-497.8c0-11.2 4.5-21.9 12.5-29.7l229.1-229.1c11-11 28.9-11.1 39.9-.1l.1.1 59.7 59.7c-9.6 22.4-22.6 43.3-38.5 61.8-29.6-22.4-71.8-16.6-94.3 13-22.4 29.6-16.6 71.8 13 94.3 29.6 22.4 71.8 16.6 94.3-13 16.5-21.8 18.2-51.3 4.3-74.8 16.4-18.6 30.1-39.4 40.8-61.7l149.7 149.8zm-242.4-43c11.6-7.5 22.5-16 32.6-25.4 8 21.8-3.1 45.9-24.8 54-21.8 8-45.9-3.1-54-24.8-8-21.8 3.1-45.9 24.8-54 12.6-4.7 26.8-3 38 4.5-9.3 8.9-19.5 16.9-30.3 23.9-6 3.8-7.8 11.7-4 17.7s11.7 7.9 17.7 4.1zm84.8-170.3c-.7 5.5-1.6 11.1-2.9 16.5L567 181.2c-21.1-21.1-55.3-21.1-76.4 0l-36.3 36.3c-20.4-41.2-3.6-91.1 37.5-111.6 32-15.9 70.6-9.6 95.9 15.7 25.2 24.1 37.4 58.8 32.7 93.3l-.1.3z",
  fill: "#fff"
}));

/* harmony default export */ __webpack_exports__["default"] = (SvgCostCalculator);

/***/ }),

/***/ "./static/svg/documentIcons/excel.svg":
/*!********************************************!*\
  !*** ./static/svg/documentIcons/excel.svg ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



const SvgExcel = props => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
  id: "excel_svg__Layer_1",
  "data-name": "Layer 1",
  viewBox: "0 0 400 400"
}, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("defs", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("style", null, ".excel_svg__cls-2{fill:#5a5a5a}")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M124.59 247.9c-15.57 0-19.68-12.92-19.68-19.75V42.92c0-15.62 12.88-19.75 19.68-19.75h97l62.15 62.4v142.58c0 15.61-12.88 19.74-19.69 19.75H124.59z",
  fill: "#f0f0f0"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "excel_svg__cls-2",
  d: "M277 228.14c0 12.27-10.81 13-13 13.05H124.59c-12.21 0-13-10.88-13-13.05V42.92c0-12.27 10.82-13 13-13h94.19l.05.05v36.71c0 7.38 4.45 21.34 21.34 21.34h36.52l.31.32zm-8.66-148.5h-28.16c-12.22 0-13-10.82-13-13v-28.3zm17 148.5V84.88l-58.13-58.41v-.28h-.28l-4.67-4.69h-97.67c-7.38 0-21.35 4.48-21.35 21.42v185.23c0 7.4 4.46 21.42 21.35 21.42H264c7.38 0 21.35-4.48 21.35-21.43M245 92.26H143.63a6.5 6.5 0 0 0-6.82 6.11v72.54a6.49 6.49 0 0 0 6.82 6.1H245a6.49 6.49 0 0 0 6.82-6.1V98.37a6.5 6.5 0 0 0-6.82-6.11zm-67.25 56.33v-17.21h33.14v17.21zm33.14 5.85V172h-33.15v-17.56zm0-46.2v17.21h-33.15v-17.21zm35.08 0v17.21h-29.25v-17.21zm-74.07 17.21h-29.24v-17.21h29.23zm-29.23 5.85h29.23v17.29h-29.24zm74.06 0H246v17.29h-29.28zM143.63 99H245a2.07 2.07 0 0 1 1 .26v3.13H142.66v-3a1.25 1.25 0 0 1 .97-.39zm-1 72.8v-17.36h29.23V172h-28.23a2.29 2.29 0 0 1-.97-.2zm102.33.26h-28.24v-17.55H246v17.25a1.23 1.23 0 0 1-1 .3z"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", {
  transform: "translate(96.87 359.59)",
  fontFamily: "HPSimplified-Regular,HP Simplified",
  fontSize: 91.07,
  fill: "#5a5a5a"
}, "E", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tspan", {
  x: 46.72,
  y: 0,
  letterSpacing: "-.02em"
}, "x"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tspan", {
  x: 88.7,
  y: 0,
  letterSpacing: "-.02em"
}, "c"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tspan", {
  x: 125.95,
  y: 0
}, "el")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "excel_svg__cls-2",
  d: "M110.5 194.5h167v47h-167z"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", {
  transform: "translate(156.45 230.16)",
  fontSize: 40,
  fontFamily: "HPSimplified-Regular,HP Simplified",
  fill: "#f0f0f0"
}, ".", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tspan", {
  x: 10,
  y: 0,
  letterSpacing: "-.01em"
}, "x"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tspan", {
  x: 28.84,
  y: 0
}, "l"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tspan", {
  x: 39.28,
  y: 0,
  letterSpacing: "-.01em"
}, "s"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tspan", {
  x: 56.56,
  y: 0
}, "x")));

/* harmony default export */ __webpack_exports__["default"] = (SvgExcel);

/***/ }),

/***/ "./static/svg/documentIcons/image.svg":
/*!********************************************!*\
  !*** ./static/svg/documentIcons/image.svg ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



const SvgImage = props => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
  "data-name": "Layer 1",
  viewBox: "0 0 400 400"
}, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M124.59 247.9c-15.57 0-19.68-12.92-19.68-19.75V42.92c0-15.62 12.88-19.75 19.68-19.75h97l62.15 62.4v142.58c0 15.61-12.88 19.74-19.69 19.75H124.59z",
  fill: "#f0f0f0"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M277 228.14c0 12.27-10.81 13-13 13.05H124.59c-12.21 0-13-10.88-13-13.05V42.92c0-12.27 10.82-13 13-13h94.19l.05.05v36.71c0 7.38 4.45 21.34 21.34 21.34h36.52l.31.32zm-8.66-148.5h-28.16c-12.22 0-13-10.82-13-13v-28.3zm17 148.5V84.88l-58.13-58.41v-.28h-.28l-4.67-4.69h-97.67c-7.38 0-21.35 4.48-21.35 21.42v185.23c0 7.4 4.46 21.42 21.35 21.42H264c7.38 0 21.35-4.48 21.35-21.43M240 104.58h-91.35a8 8 0 0 0-7.94 7.94V180a7.94 7.94 0 0 0 7.94 7.94H240a7.94 7.94 0 0 0 7.94-7.94v-67.48a8 8 0 0 0-7.94-7.94zM224.91 153a4 4 0 0 0-5.62 0l-6.29 6.3a4 4 0 0 1-5.62 0l-22.18-22.14a4 4 0 0 0-5.61 0l-30.94 30.94v-55.58H240v55.59zm-30.6-32.58a7.94 7.94 0 1 1-7.94 7.94 7.94 7.94 0 0 1 7.94-7.9z",
  fill: "#5a5a5a"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", {
  transform: "translate(78.06 359.59)",
  fontSize: 91.07,
  fontFamily: "HPSimplified-Regular,HP Simplified",
  fill: "#5a5a5a"
}, "I", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tspan", {
  x: 22.31,
  y: 0,
  letterSpacing: 0
}, "m"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tspan", {
  x: 95.17,
  y: 0
}, "a"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tspan", {
  x: 140.52,
  y: 0,
  letterSpacing: 0
}, "g"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tspan", {
  x: 187.33,
  y: 0
}, "e")));

/* harmony default export */ __webpack_exports__["default"] = (SvgImage);

/***/ }),

/***/ "./static/svg/documentIcons/pdf.svg":
/*!******************************************!*\
  !*** ./static/svg/documentIcons/pdf.svg ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



const SvgPdf = props => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
  id: "pdf_svg__Layer_1",
  "data-name": "Layer 1",
  viewBox: "0 0 400 400"
}, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("defs", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("style", null, ".pdf_svg__cls-2{fill:#5a5a5a}")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M124.59 247.9c-15.57 0-19.68-12.92-19.68-19.75V42.92c0-15.62 12.88-19.75 19.68-19.75h97l62.15 62.4v142.58c0 15.61-12.88 19.74-19.69 19.75H124.59z",
  fill: "#f0f0f0"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "pdf_svg__cls-2",
  d: "M154.59 168.36c6.71 0 13.17-9.22 14.4-11.07a101.16 101.16 0 0 0 7-12.65c5.7-2.06 11.77-3.59 17.65-5.08l2.11-.53q2.39-.61 4.92-1.31c1.79-.49 3.63-1 5.49-1.46a48.69 48.69 0 0 0 18.88 7.26c5.34.78 10.08.33 13.29-1.34a4.92 4.92 0 0 0 3-4.75c-.35-4.92-8.62-8.07-8.7-8.1a31.22 31.22 0 0 0-10.63-1.69 63.48 63.48 0 0 0-14.64 2 50.82 50.82 0 0 1-13.07-13.43 86.504 86.504 0 0 1-4-6.72c2.84-6.79 5.39-14.09 4.93-22.27-.38-6.56-3.33-11-7.35-11-2.76 0-5.14 2-7.07 6.08-3.44 7.19-2.54 16.38 2.69 27.36-1.88 4.42-3.63 9-5.32 13.45-2.11 5.52-4.28 11.22-6.73 16.63a59.63 59.63 0 0 0-17.2 10.05c-3.08 2.65-6.79 6.69-7 10.91a7 7 0 0 0 2 5.27 7.25 7.25 0 0 0 5.35 2.39zm76-33.22a17 17 0 0 1 3.63 2.08 20.66 20.66 0 0 1-8.25.2 39.54 39.54 0 0 1-10.42-3.1c6.16-.9 10.94-.62 15.03.82zM186.41 85a9.43 9.43 0 0 1 1.41-2.27 10.58 10.58 0 0 1 1.28 4.84 36.18 36.18 0 0 1-2.29 13.9c-1.88-5.47-2.75-11.59-.4-16.47zM184 125.33c1.09-2.86 2.2-5.77 3.35-8.65.59 1 1.2 1.93 1.83 2.89a56.61 56.61 0 0 0 10.68 12l-.75.2c-1.65.45-3.27.89-4.82 1.28l-2.1.53c-4.22 1.07-8.53 2.16-12.78 3.46 1.59-3.91 3.09-7.85 4.59-11.71zm-25.7 29.17a47.28 47.28 0 0 1 8.79-5.94 87.03 87.03 0 0 1-3.24 5.32c-2.66 4-7 8.31-9.26 8.31a1.08 1.08 0 0 1-.87-.44.86.86 0 0 1-.28-.71c.07-1.48 2.03-4.11 4.86-6.54z"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "pdf_svg__cls-2",
  d: "M227.21 26.47v-.28h-.28l-4.67-4.69h-97.67c-7.38 0-21.35 4.48-21.35 21.42v185.23c0 7.4 4.46 21.42 21.35 21.42H264c7.38 0 21.35-4.48 21.35-21.43V84.88zm0 11.87l41.13 41.3h-28.16c-12.22 0-13-10.82-13-13zm-102.62-8.46h94.19l.05.05v36.75c0 7.38 4.45 21.34 21.34 21.34h36.52l.31.32V194.5H111.62V42.92c0-12.27 10.82-13.01 12.97-13.04z"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", {
  transform: "translate(119.77 359.59)",
  fontFamily: "HPSimplified-Regular,HP Simplified",
  fontSize: 91.07,
  fill: "#5a5a5a"
}, "PDF"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", {
  transform: "translate(161.73 230.16)",
  fontSize: 40,
  fontFamily: "HPSimplified-Regular,HP Simplified",
  fill: "#f0f0f0"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tspan", {
  letterSpacing: "-.01em"
}, "."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tspan", {
  x: 9.72,
  y: 0
}, "pdf")));

/* harmony default export */ __webpack_exports__["default"] = (SvgPdf);

/***/ }),

/***/ "./static/svg/documentIcons/ppt.svg":
/*!******************************************!*\
  !*** ./static/svg/documentIcons/ppt.svg ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



const SvgPpt = props => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
  id: "ppt_svg__Layer_1",
  "data-name": "Layer 1",
  viewBox: "0 0 400 400"
}, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("defs", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("style", null, ".ppt_svg__cls-2{fill:#5a5a5a}")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M124.59 247.9c-15.57 0-19.68-12.92-19.68-19.75V42.92c0-15.62 12.88-19.75 19.68-19.75h97l62.15 62.4v142.58c0 15.61-12.88 19.74-19.69 19.75H124.59z",
  fill: "#f0f0f0"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "ppt_svg__cls-2",
  d: "M210.55 113.12H256a3.09 3.09 0 0 0 0-6.18h-45.45a3.09 3.09 0 1 0 0 6.18z"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "ppt_svg__cls-2",
  d: "M227.21 26.47v-.28h-.28l-4.67-4.69h-97.67c-7.38 0-21.35 4.48-21.35 21.42v185.23c0 7.4 4.46 21.42 21.35 21.42H264c7.38 0 21.35-4.48 21.35-21.43V84.88zm0 11.87l41.13 41.3h-28.16c-12.22 0-13-10.82-13-13zm-102.62-8.46h94.19l.05.05v36.75c0 7.38 4.45 21.34 21.34 21.34h36.52l.31.32V194.5H111.62V42.92c0-12.27 10.82-13.01 12.97-13.04z"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "ppt_svg__cls-2",
  d: "M156.7 164.89a27.16 27.16 0 0 0 26.92-24.13h.82a3.08 3.08 0 0 0 3.08-3.09 30.85 30.85 0 0 0-30.81-30.81 3.09 3.09 0 0 0-3.09 3.09v.82a27.14 27.14 0 0 0 3.08 54.12zm3.09-51.66a24.69 24.69 0 0 1 21.37 21.36h-21.37zm-6.17 3.62v20.83a3.09 3.09 0 0 0 3.08 3.09h20.84a21.05 21.05 0 1 1-23.92-23.92zM210.55 126.11H256a3.09 3.09 0 0 0 0-6.18h-45.45a3.09 3.09 0 0 0 0 6.18zM210.55 139.11H256a3.09 3.09 0 0 0 0-6.18h-45.45a3.09 3.09 0 1 0 0 6.18zM210.55 165.1H256a3.09 3.09 0 0 0 3.09-3.09V149a3.1 3.1 0 0 0-3.09-3.09h-45.45a3.1 3.1 0 0 0-3.09 3.09v13a3.09 3.09 0 0 0 3.09 3.1zm3.09-13H253v6.82h-39.36z"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", {
  transform: "translate(120.59 359.59)",
  fontFamily: "HPSimplified-Regular,HP Simplified",
  fontSize: 91.07,
  fill: "#5a5a5a"
}, "P", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tspan", {
  x: 50.18,
  y: 0,
  letterSpacing: "-.01em"
}, "P"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tspan", {
  x: 99.63,
  y: 0
}, "T")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", {
  transform: "translate(161.85 230.16)",
  fontSize: 40,
  fontFamily: "HPSimplified-Regular,HP Simplified",
  fill: "#f0f0f0"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tspan", {
  letterSpacing: "-.01em"
}, "."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tspan", {
  x: 9.72,
  y: 0,
  letterSpacing: "-.01em"
}, "p"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tspan", {
  x: 30.48,
  y: 0,
  letterSpacing: "-.01em"
}, "p"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tspan", {
  x: 50.96,
  y: 0
}, "t")));

/* harmony default export */ __webpack_exports__["default"] = (SvgPpt);

/***/ }),

/***/ "./static/svg/documentIcons/video.svg":
/*!********************************************!*\
  !*** ./static/svg/documentIcons/video.svg ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



const SvgVideo = props => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
  "data-name": "Layer 1",
  viewBox: "0 0 400 400"
}, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M124.59 247.9c-15.57 0-19.68-12.92-19.68-19.75V42.92c0-15.62 12.88-19.75 19.68-19.75h97l62.15 62.4v142.58c0 15.61-12.88 19.74-19.69 19.75H124.59z",
  fill: "#f0f0f0"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M277 228.14c0 12.27-10.81 13-13 13.05H124.59c-12.21 0-13-10.88-13-13.05V42.92c0-12.27 10.82-13 13-13h94.19l.05.05v36.71c0 7.38 4.45 21.34 21.34 21.34h36.52l.31.32zm-8.66-148.5h-28.16c-12.22 0-13-10.82-13-13v-28.3zm17 148.5V84.88l-58.13-58.41v-.28h-.28l-4.67-4.69h-97.67c-7.38 0-21.35 4.48-21.35 21.42v185.23c0 7.4 4.46 21.42 21.35 21.42H264c7.38 0 21.35-4.48 21.35-21.43m-54.46-43.2h-73.2a12.19 12.19 0 0 1-12.2-12.21v-61a12.18 12.18 0 0 1 12.2-12.21h73.23a12.19 12.19 0 0 1 12.21 12.21v61a12.2 12.2 0 0 1-12.21 12.21zM211 139.25l-23.2-14.78a4 4 0 0 0-1.84-.56 3.85 3.85 0 0 0-3.86 3.85v28.9a3.87 3.87 0 0 0 3.86 3.87 3.69 3.69 0 0 0 1.83-.58l23.26-14.81a3.24 3.24 0 0 0 1-1 3.53 3.53 0 0 0-1-4.92z",
  fill: "#5a5a5a"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", {
  transform: "translate(88.58 359.59)",
  fontSize: 91.07,
  fontFamily: "HPSimplified-Regular,HP Simplified",
  fill: "#5a5a5a"
}, "Video"));

/* harmony default export */ __webpack_exports__["default"] = (SvgVideo);

/***/ }),

/***/ "./static/svg/documentIcons/word.svg":
/*!*******************************************!*\
  !*** ./static/svg/documentIcons/word.svg ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



const SvgWord = props => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
  id: "word_svg__Layer_1",
  "data-name": "Layer 1",
  viewBox: "0 0 400 400"
}, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("defs", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("style", null, ".word_svg__cls-2{fill:#5a5a5a}")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M124.59 247.9c-15.57 0-19.68-12.92-19.68-19.75V42.92c0-15.62 12.88-19.75 19.68-19.75h97l62.15 62.4v142.58c0 15.61-12.88 19.74-19.69 19.75H124.59z",
  fill: "#f0f0f0"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "word_svg__cls-2",
  d: "M266.09 136.8h-33.36a4.22 4.22 0 0 0 0 8.44h33.36a4.22 4.22 0 1 0 0-8.44zM215.84 145.24a4.22 4.22 0 0 0 0-8.44H207a4.22 4.22 0 0 0 0 8.44zM198.74 111.46h67.35a4.22 4.22 0 1 0 0-8.44h-67.35a4.22 4.22 0 0 0 0 8.44zM266.09 119.91h-50a4.22 4.22 0 0 0 0 8.44h50a4.22 4.22 0 1 0 0-8.44zM181.43 153.69h-8.87a4.22 4.22 0 1 0 0 8.44h8.87a4.22 4.22 0 1 0 0-8.44zM266.09 153.69h-67.35a4.22 4.22 0 1 0 0 8.44h67.35a4.22 4.22 0 1 0 0-8.44z"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "word_svg__cls-2",
  d: "M227.21 26.47v-.28h-.28l-4.67-4.69h-97.67c-7.38 0-21.35 4.48-21.35 21.42v185.23c0 7.4 4.46 21.42 21.35 21.42H264c7.38 0 21.35-4.48 21.35-21.43V84.88zm0 11.87l41.13 41.3h-28.16c-12.22 0-13-10.82-13-13zm-102.62-8.46h94.19l.05.05v36.75c0 7.38 4.45 21.34 21.34 21.34h36.52l.31.32V194.5H111.62V42.92c0-12.27 10.82-13.01 12.97-13.04z"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "word_svg__cls-2",
  d: "M122.53 145.24h67.35a4.22 4.22 0 1 0 0-8.44h-67.35a4.22 4.22 0 0 0 0 8.44zM122.53 162.13h32.93a4.22 4.22 0 1 0 0-8.44h-32.93a4.22 4.22 0 0 0 0 8.44zM122.53 128.35h49.82a4.22 4.22 0 0 0 0-8.44h-49.82a4.22 4.22 0 0 0 0 8.44zM172.56 111.46h8.87a4.22 4.22 0 0 0 0-8.44h-8.87a4.22 4.22 0 1 0 0 8.44zM189.66 128.35h8.87a4.22 4.22 0 0 0 0-8.44h-8.87a4.22 4.22 0 0 0 0 8.44zM122.53 111.46h32.93a4.22 4.22 0 1 0 0-8.44h-32.93a4.22 4.22 0 0 0 0 8.44z"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", {
  transform: "translate(96.14 359.59)",
  fontFamily: "HPSimplified-Regular,HP Simplified",
  fontSize: 91.07,
  fill: "#5a5a5a"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tspan", {
  letterSpacing: "-.02em"
}, "W"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tspan", {
  x: 70.49,
  y: 0
}, "o"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tspan", {
  x: 118.39,
  y: 0,
  letterSpacing: "-.02em"
}, "r"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tspan", {
  x: 148.9,
  y: 0
}, "d")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", {
  transform: "translate(150.75 230.16)",
  fontSize: 40,
  fontFamily: "HPSimplified-Regular,HP Simplified",
  fill: "#f0f0f0"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tspan", {
  letterSpacing: "-.02em"
}, "."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tspan", {
  x: 9.12,
  y: 0
}, "docx")));

/* harmony default export */ __webpack_exports__["default"] = (SvgWord);

/***/ }),

/***/ "./static/svg/favorites.svg":
/*!**********************************!*\
  !*** ./static/svg/favorites.svg ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



const SvgFavorites = props => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
  id: "favorites_svg__Layer_1",
  x: 0,
  y: 0,
  viewBox: "0 0 595.28 841.89",
  xmlSpace: "preserve"
}, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("style", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M225.48 337.89c16.93-34.1 33.34-69.02 51.69-102.88 5.09-9.4 16.74-22.52 23.99-21.69 9.61 1.1 20.4 12.69 26.16 22.45 13.64 23.11 27.54 46.83 35.85 72.1 9.12 27.74 27.7 34.29 52.88 36.89 28.79 2.98 57.43 7.87 85.9 13.2 23.25 4.36 28.46 21.33 11.75 38.8-25.05 26.18-50.98 51.53-76.89 76.88-8.57 8.39-10.84 15.56-7.75 28.72 8.42 35.86 13.82 72.5 19 109.04 2.75 19.35-19.38 28.75-42.26 17.57-29.32-14.33-58.39-29.27-86.86-45.22-10.72-6-18.42-5.9-29.3-.07-30.08 16.11-61.25 30.15-91.66 45.67-11.65 5.95-24.76 9.66-33.35.15-5.55-6.14-5.8-19.44-4.49-28.98 4.85-35.1 11.97-69.89 16.67-105.01.86-6.41-4.06-15.31-9-20.49-23.99-25.15-49.04-49.29-73.44-74.05-22.02-22.34-18.14-37.02 13.03-43.27 38.34-7.68 77.14-13.06 118.08-19.81zM96.22 377.01c31.43 31.14 57.75 58.78 85.9 84.4 12.23 11.14 16.24 22.49 13.31 37.71-2.32 12.07-4.64 24.14-6.6 36.26-4.22 26.08-8.22 52.2-13.02 82.9 39.37-19.56 74.16-35.73 107.78-54.06 14.84-8.09 26.19-8.64 41.15-.14 32.41 18.4 66.09 34.56 104.02 54.09-6.58-39.99-11.68-75.03-18.34-109.78-3.56-18.57-4.54-33.96 12.5-48.01 19.31-15.91 35.98-35.05 53.65-52.93 8.98-9.09 17.65-18.49 29.53-30.98-38.08-5.25-70.88-10.58-103.87-14.04-24.16-2.53-42.03-8.79-52.04-35.05-12.45-32.68-30.69-63.15-48.15-98-20.55 40.81-38.77 77.78-57.94 114.25-3.07 5.85-9.89 12.58-15.87 13.59-41.41 7.04-83.07 12.65-132.01 19.79z",
  fill: "#fff"
}));

/* harmony default export */ __webpack_exports__["default"] = (SvgFavorites);

/***/ }),

/***/ "./static/svg/flagIcons/chi.svg":
/*!**************************************!*\
  !*** ./static/svg/flagIcons/chi.svg ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



const SvgChi = props => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
  id: "chi_svg__Layer_1",
  "data-name": "Layer 1",
  viewBox: "0 0 400 400"
}, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("defs", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("style", null, ".chi_svg__cls-4{fill:#ffda44}"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("clipPath", {
  id: "chi_svg__clip-path"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M133.53 303c-10.71 0-14.6-7.92-14.68-14.71V111.7c0-10.7 7.89-14.7 14.65-14.7h89.83a2.33 2.33 0 0 1 1.63.67 2.5 2.5 0 0 1 .72 1.68v35c0 6.25 3.77 18.05 18 18.05h34.82a2.29 2.29 0 0 1 1.62.67l.3.3a2.32 2.32 0 0 1 .68 1.63v133.3c0 10.75-7.9 14.66-14.66 14.74h-133z",
  fill: "none"
}))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  clipPath: "url(#chi_svg__clip-path)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  fill: "#d80027",
  d: "M99.6 94.75h215.77v215.77H99.6z"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "chi_svg__cls-4",
  d: "M170.24 165.07l8.23 25.34h26.65l-21.56 15.67 8.24 25.34-21.56-15.66-21.56 15.66 8.23-25.34-21.56-15.67H162l8.24-25.34zM222.14 249.62l-8.08-5.87-8.09 5.87 3.09-9.5-8.08-5.88h9.99l3.09-9.5 3.09 9.5h9.99l-8.08 5.87 3.08 9.51zM243.24 220.33h-10l-3.09 9.72-3.08-9.3h-10l8.09-6.08-3.09-9.5 8.09 5.87 8.08-5.88-3.09 9.51 8.09 5.66zM243.24 184.51l-8.09 5.88 3.09 9.5-8.08-5.87-8.09 5.87 3.09-9.51-8.09-5.87h10l3.09-9.5 3.08 9.5h10zM222.14 155.65l-3.08 9.5 8.08 5.88h-9.99l-3.09 9.5-3.09-9.5h-9.99l8.08-5.88-3.09-9.5 8.09 5.87 8.08-5.87z"
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M243.73 149c-6.71 0-14.58-3.83-14.66-14.64v-27a2.31 2.31 0 0 1 1.42-2.13 2.22 2.22 0 0 1 .88-.17 2.3 2.3 0 0 1 1.63.67l39.22 39.39a2.29 2.29 0 0 1-1.63 3.92z",
  fill: "#fff"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M278.84 288.3c0 11.69-10.3 12.41-12.38 12.44H133.53c-11.65 0-12.35-10.38-12.37-12.44V111.7c0-11.7 10.32-12.41 12.37-12.44h89.8v35c0 7 4.25 20.35 20.35 20.35h34.82l.29.3zm-8.25-141.59h-26.86c-11.64 0-12.35-10.32-12.36-12.36v-27zm16.24 141.59V151.7L231.37 96v-.26h-.27l-4.45-4.48h-93.12c-7 0-20.36 4.27-20.36 20.43V288.3c0 7.07 4.25 20.43 20.36 20.43h132.94c7 0 20.36-4.27 20.36-20.43",
  fill: "#5a5a5a"
}));

/* harmony default export */ __webpack_exports__["default"] = (SvgChi);

/***/ }),

/***/ "./static/svg/flagIcons/eng.svg":
/*!**************************************!*\
  !*** ./static/svg/flagIcons/eng.svg ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



const SvgEng = props => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
  id: "eng_svg__Layer_1",
  "data-name": "Layer 1",
  viewBox: "0 0 400 400"
}, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("defs", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("style", null, ".eng_svg__cls-3{fill:#f0f0f0}.eng_svg__cls-4{fill:#d80027}.eng_svg__cls-5{fill:#0052b4}"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("clipPath", {
  id: "eng_svg__clip-path"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M133.53 303c-10.71 0-14.6-7.92-14.68-14.71V111.7c0-10.7 7.89-14.7 14.65-14.7h89.83a2.36 2.36 0 0 1 1.64.68 2.49 2.49 0 0 1 .71 1.67v35c0 6.25 3.77 18.05 18 18.05h34.82a2.29 2.29 0 0 1 1.62.67l.3.3a2.32 2.32 0 0 1 .68 1.63v133.3c0 10.75-7.9 14.66-14.66 14.74h-133z",
  fill: "none"
}))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  clipPath: "url(#eng_svg__clip-path)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "eng_svg__cls-3",
  d: "M89.12 93.61h215.77v215.77H89.12z"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "eng_svg__cls-4",
  d: "M89.12 221.72h87.66v87.66h40.45v-87.66h87.66v-40.45h-87.66V93.61h-40.45v87.66H89.12v40.45z"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "eng_svg__cls-5",
  d: "M260.61 234.37l44.28 44.28v-44.28h-44.28zM229.84 234.37l75.05 75.05V288.2l-53.83-53.83h-21.22zM284.94 309.38l-55.06-55.06v55.06h55.06z"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "eng_svg__cls-3",
  d: "M229.84 234.37l75.05 75.05V288.2l-53.83-53.83h-21.22z"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "eng_svg__cls-4",
  d: "M229.84 234.37l75.05 75.05V288.2l-53.83-53.83h-21.22z"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "eng_svg__cls-5",
  d: "M122.96 234.37l-33.84 33.84v-33.84h33.84zM164.13 243.88v65.5h-65.5l65.5-65.5z"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "eng_svg__cls-4",
  d: "M142.94 234.37l-53.82 53.82v21.23l75.05-75.05h-21.23z"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "eng_svg__cls-5",
  d: "M133.4 168.63l-44.28-44.29v44.29h44.28zM164.17 168.63L89.12 93.58v21.22l53.83 53.83h21.22zM109.07 93.61l55.06 55.07V93.61h-55.06z"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "eng_svg__cls-3",
  d: "M164.17 168.63L89.12 93.58v21.22l53.83 53.83h21.22z"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "eng_svg__cls-4",
  d: "M164.17 168.63L89.12 93.58v21.22l53.83 53.83h21.22z"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "eng_svg__cls-5",
  d: "M271.05 168.63l33.84-33.85v33.85h-33.84zM229.88 159.12V93.61h65.5l-65.5 65.51z"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "eng_svg__cls-4",
  d: "M251.06 168.63l53.83-53.83V93.58l-75.05 75.05h21.22z"
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M243.73 149c-6.71 0-14.58-3.83-14.66-14.64v-27a2.31 2.31 0 0 1 1.42-2.13 2.22 2.22 0 0 1 .88-.17 2.3 2.3 0 0 1 1.63.67l39.22 39.39a2.3 2.3 0 0 1-1.63 3.92z",
  fill: "#fff"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M278.84 288.3c0 11.69-10.3 12.41-12.38 12.44H133.53c-11.65 0-12.35-10.38-12.37-12.44V111.7c0-11.7 10.32-12.41 12.37-12.44h89.8v35c0 7 4.25 20.35 20.35 20.35h34.82l.29.3zm-8.25-141.59h-26.86c-11.64 0-12.35-10.32-12.36-12.36v-27zm16.24 141.59V151.7L231.37 96v-.26h-.27l-4.45-4.48h-93.12c-7 0-20.36 4.27-20.36 20.43V288.3c0 7.07 4.25 20.43 20.36 20.43h132.94c7 0 20.36-4.27 20.36-20.43",
  fill: "#5a5a5a"
}));

/* harmony default export */ __webpack_exports__["default"] = (SvgEng);

/***/ }),

/***/ "./static/svg/flagIcons/fr.svg":
/*!*************************************!*\
  !*** ./static/svg/flagIcons/fr.svg ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



const SvgFr = props => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
  "data-name": "Layer 1",
  viewBox: "0 0 400 400"
}, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("defs", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("clipPath", {
  id: "fr_svg__a"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M133.53 303c-10.71 0-14.6-7.92-14.68-14.71V111.7c0-10.7 7.89-14.7 14.65-14.7h89.83a2.33 2.33 0 0 1 1.63.67 2.5 2.5 0 0 1 .72 1.68v35c0 6.25 3.77 18.05 18 18.05h34.82a2.29 2.29 0 0 1 1.62.67l.3.3a2.32 2.32 0 0 1 .68 1.63v133.3c0 10.75-7.9 14.66-14.66 14.74h-133z",
  fill: "none"
}))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M243.73 149c-6.71 0-14.58-3.83-14.66-14.64v-27a2.31 2.31 0 0 1 1.42-2.13 2.22 2.22 0 0 1 .88-.17 2.3 2.3 0 0 1 1.63.67l39.22 39.39a2.29 2.29 0 0 1-1.63 3.92z",
  fill: "#fff"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  clipPath: "url(#fr_svg__a)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  fill: "#f0f0f0",
  d: "M113.5 91.49h173v216.02h-173z"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  fill: "#0052b4",
  d: "M113.5 91.49h57.78v216.02H113.5z"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  fill: "#d80027",
  d: "M228.72 91.49h57.78v216.02h-57.78z"
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M278.84 288.3c0 11.69-10.3 12.41-12.38 12.44H133.53c-11.65 0-12.35-10.38-12.37-12.44V111.7c0-11.7 10.32-12.41 12.37-12.44h89.8v35c0 7 4.25 20.35 20.35 20.35h34.82l.29.3zm-8.25-141.59h-26.86c-11.64 0-12.35-10.32-12.36-12.36v-27zm16.24 141.59V151.7L231.37 96v-.26h-.27l-4.45-4.48h-93.12c-7 0-20.36 4.27-20.36 20.43V288.3c0 7.07 4.25 20.43 20.36 20.43h132.94c7 0 20.36-4.27 20.36-20.43",
  fill: "#5a5a5a"
}));

/* harmony default export */ __webpack_exports__["default"] = (SvgFr);

/***/ }),

/***/ "./static/svg/flagIcons/ger.svg":
/*!**************************************!*\
  !*** ./static/svg/flagIcons/ger.svg ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



const SvgGer = props => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
  "data-name": "Layer 1",
  viewBox: "0 0 400 400"
}, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("defs", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("clipPath", {
  id: "ger_svg__a"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M133.53 303c-10.71 0-14.6-7.92-14.68-14.71V111.7c0-10.7 7.89-14.7 14.65-14.7h89.83a2.33 2.33 0 0 1 1.63.67 2.5 2.5 0 0 1 .72 1.68v35c0 6.25 3.77 18.05 18 18.05h34.82a2.29 2.29 0 0 1 1.62.67l.3.3a2.32 2.32 0 0 1 .68 1.63v133.3c0 10.75-7.9 14.66-14.66 14.74h-133z",
  fill: "none"
}))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  clipPath: "url(#ger_svg__a)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  fill: "#d80027",
  d: "M98.45 94.19h215.77v215.77H98.45z"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M98.45 94.19h215.77v72.06H98.45z"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  fill: "#ffda44",
  d: "M98.45 237.9h215.77v72.06H98.45z"
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M243.73 149c-6.71 0-14.58-3.83-14.66-14.64v-27a2.31 2.31 0 0 1 1.42-2.13 2.22 2.22 0 0 1 .88-.17 2.3 2.3 0 0 1 1.63.67l39.22 39.39a2.29 2.29 0 0 1-1.63 3.92z",
  fill: "#fff"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M278.84 288.3c0 11.69-10.3 12.41-12.38 12.44H133.53c-11.65 0-12.35-10.38-12.37-12.44V111.7c0-11.7 10.32-12.41 12.37-12.44h89.8v35c0 7 4.25 20.35 20.35 20.35h34.82l.29.3zm-8.25-141.59h-26.86c-11.64 0-12.35-10.32-12.36-12.36v-27zm16.24 141.59V151.7L231.37 96v-.26h-.27l-4.45-4.48h-93.12c-7 0-20.36 4.27-20.36 20.43V288.3c0 7.07 4.25 20.43 20.36 20.43h132.94c7 0 20.36-4.27 20.36-20.43",
  fill: "#5a5a5a"
}));

/* harmony default export */ __webpack_exports__["default"] = (SvgGer);

/***/ }),

/***/ "./static/svg/flagIcons/jap.svg":
/*!**************************************!*\
  !*** ./static/svg/flagIcons/jap.svg ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



const SvgJap = props => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
  id: "jap_svg__Layer_1",
  "data-name": "Layer 1",
  viewBox: "0 0 400 400"
}, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("defs", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("style", null, ".jap_svg__cls-3{fill:#fff}"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("clipPath", {
  id: "jap_svg__clip-path"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M133.53 303c-10.71 0-14.6-7.92-14.68-14.71V111.7c0-10.7 7.89-14.7 14.65-14.7h89.83a2.33 2.33 0 0 1 1.63.67 2.5 2.5 0 0 1 .72 1.68v35c0 6.25 3.77 18.05 18 18.05h34.82a2.29 2.29 0 0 1 1.62.67l.3.3a2.32 2.32 0 0 1 .68 1.63v133.3c0 10.75-7.9 14.66-14.66 14.74h-133z",
  fill: "none"
}))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  clipPath: "url(#jap_svg__clip-path)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "jap_svg__cls-3",
  d: "M105.5 82.5h184v230h-184z"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 199.19,
  cy: 208.65,
  r: 40.31,
  fill: "#d80027"
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "jap_svg__cls-3",
  d: "M243.73 149c-6.71 0-14.58-3.83-14.66-14.64v-27a2.31 2.31 0 0 1 1.42-2.13 2.22 2.22 0 0 1 .88-.17 2.3 2.3 0 0 1 1.63.67l39.22 39.39a2.29 2.29 0 0 1-1.63 3.92z"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M278.84 288.3c0 11.69-10.3 12.41-12.38 12.44H133.53c-11.65 0-12.35-10.38-12.37-12.44V111.7c0-11.7 10.32-12.41 12.37-12.44h89.8v35c0 7 4.25 20.35 20.35 20.35h34.82l.29.3zm-8.25-141.59h-26.86c-11.64 0-12.35-10.32-12.36-12.36v-27zm16.24 141.59V151.7L231.37 96v-.26h-.27l-4.45-4.48h-93.12c-7 0-20.36 4.27-20.36 20.43V288.3c0 7.07 4.25 20.43 20.36 20.43h132.94c7 0 20.36-4.27 20.36-20.43",
  fill: "#5a5a5a"
}));

/* harmony default export */ __webpack_exports__["default"] = (SvgJap);

/***/ }),

/***/ "./static/svg/flagIcons/korean.svg":
/*!*****************************************!*\
  !*** ./static/svg/flagIcons/korean.svg ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



const SvgKorean = props => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
  id: "korean_svg__Layer_1",
  "data-name": "Layer 1",
  viewBox: "0 0 400 400"
}, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("defs", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("style", null, ".korean_svg__cls-3{fill:#d80027}.korean_svg__cls-4{fill:#ffda44}.korean_svg__cls-5{fill:#fff}"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("clipPath", {
  id: "korean_svg__clip-path"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M133.53 303c-10.71 0-14.6-7.92-14.68-14.71V111.7c0-10.7 7.89-14.7 14.65-14.7h89.83a2.33 2.33 0 0 1 1.63.67 2.5 2.5 0 0 1 .72 1.68v35c0 6.25 3.77 18.05 18 18.05h34.82a2.29 2.29 0 0 1 1.62.67l.3.3a2.32 2.32 0 0 1 .68 1.63v133.3c0 10.75-7.9 14.66-14.66 14.74h-133z",
  fill: "none"
}))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  clipPath: "url(#korean_svg__clip-path)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "korean_svg__cls-3",
  d: "M99.6 94.75h215.77v215.77H99.6z"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "korean_svg__cls-4",
  d: "M170.24 165.07l8.23 25.34h26.65l-21.56 15.67 8.24 25.34-21.56-15.66-21.56 15.66 8.23-25.34-21.56-15.67H162l8.24-25.34zM222.14 249.62l-8.08-5.87-8.09 5.87 3.09-9.5-8.08-5.88h9.99l3.09-9.5 3.09 9.5h9.99l-8.08 5.87 3.08 9.51zM243.24 220.33h-10l-3.09 9.72-3.08-9.3h-10l8.09-6.08-3.09-9.5 8.09 5.87 8.08-5.88-3.09 9.51 8.09 5.66zM243.24 184.51l-8.09 5.88 3.09 9.5-8.08-5.87-8.09 5.87 3.09-9.51-8.09-5.87h10l3.09-9.5 3.08 9.5h10zM222.14 155.65l-3.08 9.5 8.08 5.88h-9.99l-3.09 9.5-3.09-9.5h-9.99l8.08-5.88-3.09-9.5 8.09 5.87 8.08-5.87z"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "korean_svg__cls-5",
  d: "M109.5 88.5h178v224h-178z"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "korean_svg__cls-3",
  d: "M231.25 200.62c0 8.21-14.7 28.73-32.83 28.73s-32.84-20.52-32.84-28.73a32.84 32.84 0 0 1 65.67 0z"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M231.25 200.62a32.84 32.84 0 0 1-65.67 0",
  fill: "#0052b4"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  transform: "rotate(-45 240.504 228.2)",
  d: "M234.35 224.09h12.31v8.21h-12.31z"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  transform: "rotate(-45 225.994 242.71)",
  d: "M219.83 238.6h12.31v8.21h-12.31z"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  transform: "rotate(-45 257.92 245.596)",
  d: "M251.76 241.5h12.31v8.21h-12.31z"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  transform: "rotate(-45 243.405 260.119)",
  d: "M237.25 256.01h12.31v8.21h-12.31z"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  transform: "rotate(-45 249.205 236.896)",
  d: "M243.05 232.79h12.31V241h-12.31z"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  transform: "rotate(-45 234.696 251.406)",
  d: "M228.54 247.31h12.31v8.21h-12.31z"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  transform: "rotate(-45 241.946 157.083)",
  d: "M237.85 140.67h8.21v32.83h-8.21z"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  transform: "rotate(-45 225.999 158.538)",
  d: "M221.89 152.38h8.21v12.31h-8.21z"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  transform: "rotate(-45 240.497 173.043)",
  d: "M236.4 166.89h8.21v12.31h-8.21z"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  transform: "rotate(-45 243.395 141.123)",
  d: "M239.3 134.97h8.21v12.31h-8.21z"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  transform: "rotate(-45 257.917 155.637)",
  d: "M253.81 149.48h8.21v12.31h-8.21z"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  transform: "rotate(-45 146.17 252.864)",
  d: "M142.07 236.44h8.21v32.83h-8.21z"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  transform: "rotate(-45 162.134 251.402)",
  d: "M158.03 245.25h8.21v12.31h-8.21z"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  transform: "rotate(-45 147.624 236.892)",
  d: "M143.53 230.74h8.21v12.31h-8.21z"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  transform: "rotate(-45 163.595 235.447)",
  d: "M159.49 219.03h8.21v32.83h-8.21z"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  transform: "rotate(-45 146.172 148.383)",
  d: "M129.76 144.28h32.83v8.21h-32.83z"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  transform: "rotate(-45 154.886 157.084)",
  d: "M138.47 152.98h32.83v8.21h-32.83z"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  transform: "rotate(-45 163.595 165.797)",
  d: "M147.17 161.69H180v8.21h-32.83z"
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "korean_svg__cls-5",
  d: "M243.73 149c-6.71 0-14.58-3.83-14.66-14.64v-27a2.31 2.31 0 0 1 1.42-2.13 2.22 2.22 0 0 1 .88-.17 2.3 2.3 0 0 1 1.63.67l39.22 39.39a2.29 2.29 0 0 1-1.63 3.92z"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M278.84 288.3c0 11.69-10.3 12.41-12.38 12.44H133.53c-11.65 0-12.35-10.38-12.37-12.44V111.7c0-11.7 10.32-12.41 12.37-12.44h89.8v35c0 7 4.25 20.35 20.35 20.35h34.82l.29.3zm-8.25-141.59h-26.86c-11.64 0-12.35-10.32-12.36-12.36v-27zm16.24 141.59V151.7L231.37 96v-.26h-.27l-4.45-4.48h-93.12c-7 0-20.36 4.27-20.36 20.43V288.3c0 7.07 4.25 20.43 20.36 20.43h132.94c7 0 20.36-4.27 20.36-20.43",
  fill: "#5a5a5a"
}));

/* harmony default export */ __webpack_exports__["default"] = (SvgKorean);

/***/ }),

/***/ "./static/svg/flagIcons/sp.svg":
/*!*************************************!*\
  !*** ./static/svg/flagIcons/sp.svg ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



const SvgSp = props => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
  id: "sp_svg__Layer_1",
  "data-name": "Layer 1",
  viewBox: "0 0 400 400"
}, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("defs", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("style", null, ".sp_svg__cls-4{fill:#d80027}"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("clipPath", {
  id: "sp_svg__clip-path"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M133.53 303c-10.71 0-14.6-7.92-14.68-14.71V111.7c0-10.7 7.89-14.7 14.65-14.7h89.83a2.33 2.33 0 0 1 1.63.67 2.5 2.5 0 0 1 .72 1.68v35c0 6.25 3.77 18.05 18 18.05h34.82a2.29 2.29 0 0 1 1.62.67l.3.3a2.32 2.32 0 0 1 .68 1.63v133.3c0 10.75-7.9 14.66-14.66 14.74h-133z",
  fill: "none"
}))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  clipPath: "url(#sp_svg__clip-path)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  fill: "#ffda44",
  d: "M90.39 97.04h215.77v215.77H90.39z"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "sp_svg__cls-4",
  d: "M90.39 97.04h215.77v72.06H90.39zM90.39 240.74h215.77v72.06H90.39z"
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M243.73 149c-6.71 0-14.58-3.83-14.66-14.64v-27a2.31 2.31 0 0 1 1.42-2.13 2.22 2.22 0 0 1 .88-.17 2.3 2.3 0 0 1 1.63.67l39.22 39.39a2.29 2.29 0 0 1-1.63 3.92z",
  fill: "#fff"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M278.84 288.3c0 11.69-10.3 12.41-12.38 12.44H133.53c-11.65 0-12.35-10.38-12.37-12.44V111.7c0-11.7 10.32-12.41 12.37-12.44h89.8v35c0 7 4.25 20.35 20.35 20.35h34.82l.29.3zm-8.25-141.59h-26.86c-11.64 0-12.35-10.32-12.36-12.36v-27zm16.24 141.59V151.7L231.37 96v-.26h-.27l-4.45-4.48h-93.12c-7 0-20.36 4.27-20.36 20.43V288.3c0 7.07 4.25 20.43 20.36 20.43h132.94c7 0 20.36-4.27 20.36-20.43",
  fill: "#5a5a5a"
}));

/* harmony default export */ __webpack_exports__["default"] = (SvgSp);

/***/ }),

/***/ "./static/svg/home.svg":
/*!*****************************!*\
  !*** ./static/svg/home.svg ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



const SvgHome = props => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
  id: "home_svg__Layer_1",
  x: 0,
  y: 0,
  viewBox: "0 0 595.28 841.89",
  xmlSpace: "preserve"
}, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("style", null, ".home_svg__color-write{fill:#fff}"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "home_svg__color-write",
  d: "M327.9 492.42h-58.02V608.3c-38.82 0-75.29 1.02-111.65-.43-18.28-.73-27.05-15.7-27.54-32.04-1.24-41.1-.75-82.26-.02-123.39.1-5.67 4.33-12.44 8.65-16.68 48.94-48.05 98.43-95.54 147.34-143.61 9-8.84 15.31-8.81 24.13.1 49.42 49.98 99.46 99.37 148.62 149.6 4.86 4.97 7.22 14.28 7.39 21.65.77 33.64.57 67.31.27 100.96-.3 34.12-14.55 48.25-48 48.33-23.93.06-47.89-.58-71.79.22-14.61.49-19.93-4.98-19.6-19.58.71-32.82.22-65.68.22-101.01zm17.96 102.4c26.97 0 51.56 1.23 75.95-.42 16.87-1.14 28.4-9.63 27.65-30.08-1.13-30.61.18-61.31-.64-91.94-.2-7.37-2.59-16.62-7.46-21.61-46.92-48.13-94.58-95.53-142.39-143.5C252.21 354 206.13 399.88 160.4 446.1c-3.76 3.8-7.25 9.91-7.33 15.01-.61 38.12-.78 76.27.24 114.37.14 5.03 7.67 13.92 12.09 14.13 28.09 1.3 56.26.66 86.13.66 0-32.26.47-62.03-.17-91.77-.4-18.21 7.43-25.89 25.43-25.06 14.18.65 28.44.76 42.6-.02 18.98-1.04 27.2 6.75 26.68 26.13-.81 30.59-.21 61.22-.21 95.27z"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "home_svg__color-write",
  d: "M112.23 428.78c2.44-6.21 3.25-14.02 7.56-18.39 52.54-53.3 105.48-106.2 158.66-158.87 6.63-6.57 15.22-11.15 24.22-17.6 60.81 61.13 121.05 121.45 180.79 182.26 4.31 4.39 4.92 12.42 4.94 20.4-28.39-9.62-43.35-34.34-63.38-52.7-21.5-19.7-41.6-40.94-62.08-61.74-19.89-20.21-39.49-40.7-61.32-63.25-61.71 59.64-121.55 117.48-181.39 175.32-2.67-1.81-5.33-3.62-8-5.43z"
}));

/* harmony default export */ __webpack_exports__["default"] = (SvgHome);

/***/ }),

/***/ "./static/svg/information.svg":
/*!************************************!*\
  !*** ./static/svg/information.svg ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



const SvgInformation = props => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
  id: "information_svg__Layer_1",
  x: 0,
  y: 0,
  viewBox: "0 0 595.28 841.89",
  xmlSpace: "preserve"
}, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("style", null, ".information_svg__color-write{fill:#fff}"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "information_svg__color-write",
  d: "M302.15 281.19c57.79 0 115.57-.03 173.36.01 44.37.03 61.71 23.22 54.85 66.51-8.09 51.06-11.99 102.77-18.97 154.03-2.12 15.54-7.39 30.95-13.44 45.48-1.99 4.79-10.91 9.27-16.82 9.47-101.58 3.51-203.18 6.6-304.79 9.02-16.66.4-33.87-.98-49.9-5.12-7.8-2.01-16.2-11.14-19.49-19.06-5.16-12.43-7.64-26.44-8.73-39.98-2.42-30.01-3.1-60.16-4.86-90.22-.69-11.89-4.7-20.54-13.98-30.62-8.52-9.25-7.75-30.31-5.4-45.27 1.9-12.13 13.76-22.34 18.45-34.47 6.03-15.62 16.3-20.1 31.92-19.98 59.26.49 118.53.2 177.8.2zm45.77 244.24c2.72-53.71 5.37-106.07 8.06-158.99-63.08 12.5-124.04 12.43-182.99.95v158.04h174.93zm74.59-9.66c4.51-52.06 8.87-102.44 13.24-152.87h-72.52v163.53c18.91-3.39 38-6.83 59.28-10.66zm56.85-12.88c4.88-43.8 9.5-85.31 14.17-127.28h-44.46l-10.04 127.28h40.33zM103.5 314.2c76.79 22.76 275.67 21.44 317.27 0H103.5zm75.45 241.75H345.7V536.3H178.95v19.65zm302.49-33.68c-36.59 4.15-73.44 8.73-110.38 12.34-16.42 1.6-16.81 9.8-13.79 18.77 34.9-1.81 67.57-4.52 100.26-4.76 16.33-.11 25.75-3.77 23.91-26.35zm-317.86-44.33c-19.01-2.5-37.21-4.89-56.43-7.42 3.36 16.8 1.65 36.42 10.61 45.32 9.34 9.28 28.95 8.24 45.82 12.12v-50.02zm-60.72-67.22h55.52v-34.25c-19.59 3.57-37.49 6.84-55.52 10.13v24.12zm95.88-109.04h126.55c-13.58-15.68-110.33-16.25-126.55 0zm309.73 34.17l-2.64-8.13-136.44 10.2c.08 1.84.16 3.67.25 5.51 42.71 0 85.42.18 128.13-.33 3.59-.04 7.13-4.73 10.7-7.25zm.72-30.42c-29.65-21.5-59.58-13.48-88.26-15.46 6.91 20.35 24.23 23.5 88.26 15.46zM132.7 345.09H85.6v23.87h47.1v-23.87zm193.55 22.08c.24-1.48.48-2.97.71-4.45H198.57c0 1.48 0 2.97.01 4.45h127.67zm-222.7-66.11c61.68 7.01 83.36 4.2 89.93-11.95-28.32 4.91-57.3-6.4-89.93 11.95zm227.26-6.61c26.31 13.66 54.26 7.62 81.85 8.05.14-2.68.28-5.36.41-8.05h-82.26zM167.02 556.91c-1.39-7.85-2.47-13.94-3.67-20.69-15.04-3.14-30.17-6.3-45.38-9.47-1.66 18.86-1.66 18.86 49.05 30.16zM113.6 415.53c1.15 16.75 2.19 31.76 3.22 46.74 6.93 1.22 13.2 2.33 19.46 3.43 4.08-35.01-.79-46.07-22.68-50.17zm56.12-75.5v2.17h185.33v-2.17H169.72zm181.42 15.63c-.01-.59-.01-1.19-.02-1.78h-180.7c.01.59.01 1.19.02 1.78h180.7zm-191.68 65.48c-18.04-6.31-17.03 4.62-17.14 15.41-.29 28.46-.46 28.46 17.14 29.32v-44.73zM432.8 314.82l-.06 4.45h66.88c.03-1.48.05-2.97.08-4.45h-66.9zm69 54.16c-.08-2.55-.17-5.1-.25-7.66-19.43 2.12-39.35-4.56-58.19 7.66h58.44z"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "information_svg__color-write",
  d: "M267.25 390.45c2.87 6.04 8.88 12.74 7.77 17.93-1.2 5.63-9.03 9.85-13.96 14.69-3.95-5.1-10.76-10.03-11.06-15.33-.32-5.66 5.5-11.67 8.64-17.53 2.87.07 5.74.15 8.61.24z"
}));

/* harmony default export */ __webpack_exports__["default"] = (SvgInformation);

/***/ }),

/***/ "./static/svg/materials.svg":
/*!**********************************!*\
  !*** ./static/svg/materials.svg ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



const SvgMaterials = props => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
  id: "materials_svg__Layer_1",
  x: 0,
  y: 0,
  viewBox: "0 0 612 792",
  xmlSpace: "preserve"
}, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("style", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M502.48 400.19c0 38.28-.48 76.58.29 114.84.23 11.44-2.85 17.56-13.84 21.84-53.12 20.72-105.63 43.03-159.11 62.75-11.82 4.36-28.05 4.15-39.92-.25-52.14-19.33-103.33-41.18-155.07-61.58-10.99-4.33-16.12-9.48-15.98-22.62.78-76.56.64-153.13.1-229.69-.08-11.39 2.79-17.57 13.79-21.87 53.13-20.72 105.66-43.04 159.15-62.75 11.82-4.36 28.05-4.14 39.91.26 52.15 19.33 103.28 41.39 155.15 61.48 12.71 4.92 16.16 11.85 15.84 24.88-.89 37.54-.31 75.13-.31 112.71zm-200.15 189c0-77.02.25-150.73-.53-224.42-.06-5.31-6.58-12.94-11.97-15.39-25.22-11.48-51-21.75-76.76-32.01-26.38-10.5-52.96-20.48-80.46-31.07v235.18c55.72 22.22 110.9 44.24 169.72 67.71zm17.06-1.01c54.22-21.35 105.37-41.08 156.02-61.99 6.12-2.53 13.59-11.45 13.67-17.5.94-73.54.61-147.09.61-223.05-28.18 11.11-54.36 21.43-79.68 31.41-4.88 25.43 4.48 51.54-5.32 74.76-2.89-.25-5.79-.49-8.68-.74V322.9c-24.09 9.52-45.5 17.29-66.18 26.69-4.78 2.17-9.95 9.9-10 15.11-.65 73.7-.44 147.4-.44 223.48zm157.42-313.11c-44.43-17.88-85.56-34.64-126.89-50.94-14.1-5.56-29.79-16.01-42.74-13.56-22.77 4.31-43.98 16.83-69.1 27.26 48.16 19.69 91.97 38.17 136.29 55.35 11.8 4.58 26.13 9.35 37.58 6.67 21.23-4.97 41.19-15.37 64.86-24.78zm-95.62 37.69c-4.59-2.69-7.41-4.86-10.59-6.12-39.77-15.8-79.45-31.81-119.47-46.96-13.24-5.01-28.41-12.86-40.83-10.31-21.81 4.47-42.18 15.96-65.47 25.46 25.52 10.36 48.7 19.25 71.46 29.12 53.55 23.22 106.58 52.16 164.9 8.81z",
  fill: "#fff"
}));

/* harmony default export */ __webpack_exports__["default"] = (SvgMaterials);

/***/ }),

/***/ "./static/svg/services.svg":
/*!*********************************!*\
  !*** ./static/svg/services.svg ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



const SvgServices = props => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
  id: "services_svg__Layer_1",
  x: 0,
  y: 0,
  viewBox: "0 0 612 792",
  xmlSpace: "preserve"
}, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("style", null, ".services_svg__color-write{fill:#fff}"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "services_svg__color-write",
  d: "M127.9 494.12c21.16-31.16 51.02-50.96 87.78-53.62 44.73-3.24 89.87-.68 134.83-.81 19.69-.06 29.11 9.4 29.3 29.11.22 22.61-7.96 33.76-28.66 34.74-20.42.96-40.92.21-61.45 4.4 36.2 0 73.86 6.12 108.13-2.01 25.61-6.08 47.34-29.91 69.93-46.98 27.87-21.06 50.1-17.36 63.63 10.22 9.53 19.41-1.58 30.77-13.96 40.41-27.09 21.1-55 41.25-83.52 60.37-7.45 5-18.36 6.64-27.71 6.73-60.96.57-121.93-.36-182.88.67-19.57.33-39.06 5.1-62.24 8.35.39.61-2.48-3.8-5.34-8.21l-27.84-83.37zm40.98 73.87c23.88-1.77 43.96-4.32 64.06-4.53 56.4-.59 112.82.37 169.2-.71 10.87-.21 22.89-4.96 32.18-11 25.62-16.66 50.07-35.11 74.98-52.86 10.05-7.17 18.15-15.64 8.57-28.04-8.15-10.55-17.04-19.22-32.11-7.31-20.48 16.19-42.08 31.02-63.8 45.54-8.36 5.59-18.21 12-27.62 12.4-34.24 1.48-68.62 1.48-102.84-.13-7.36-.35-14.28-9.8-21.4-15.06 6.98-5.41 13.48-14.51 21.02-15.48 18-2.3 36.8 1.21 54.65-1.62 8.81-1.4 22.11-10.96 22.92-18.03 1.26-11.04-8.21-18.66-22.81-18.09-31.2 1.23-62.66 2.44-93.7-.13-43.35-3.59-80 6.45-108.05 41.98 8.28 24.45 16.83 49.69 24.75 73.07zM397.16 398.42c-9.62-55.44-38.69-97.12-95.75-98.91-64.13-2.01-96.56 41.08-103.56 105.67-24.21-32.45 15.1-95.85 65.77-114.18-29.63-26.9-35.22-64.41-14.83-89.06 25.85-31.25 64.95-28.31 88.04-8.57 28.84 24.65 26.82 57.53-5.75 98.23 55.51 28.5 78.37 63.96 66.08 106.82zM297.7 192.68c-26.12-.07-51.36 23.25-50.59 46.75.68 20.62 28.94 51.27 48.01 48.69 24.86-3.37 49.74-19.56 48.34-49.02-1.38-29.01-17.08-46.34-45.76-46.42z"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "services_svg__color-write",
  d: "M127.9 494.12l27.84 83.37c.87 7.95 1.74 15.91 2.76 25.22-13.9 7.05-28.77 15.46-44.35 22.25-16.41 7.15-26.51 1.11-26.95-16.77-.85-34.03-.79-68.11.31-102.13.17-5.33 6.87-13.23 12.18-14.99 8.96-2.97 20.54-12.12 28.21 3.05zm17.33 101.03c-9.29-28.97-17.69-55.91-26.76-82.61-1.36-4.02-5.88-6.96-8.93-10.41-2.95 3.6-8.38 7.14-8.45 10.79-.66 33.11-.39 66.25-.39 101.69 16.61-7.25 30-13.11 44.53-19.46z"
}));

/* harmony default export */ __webpack_exports__["default"] = (SvgServices);

/***/ }),

/***/ "./static/svg/training.svg":
/*!*********************************!*\
  !*** ./static/svg/training.svg ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



const SvgTraining = props => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
  id: "training_svg__Layer_1",
  x: 0,
  y: 0,
  viewBox: "0 0 595.28 841.89",
  xmlSpace: "preserve"
}, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("style", null, ".training_svg__color-write{fill:#fff}"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "training_svg__color-write",
  d: "M473.71 497.49c-5.46-3.55-14.2-7.13-13.86-9.32 4.24-27.45-14.19-58.9 11.85-82.09 9.49-8.44 23.21-12.13 38.73-19.84-25.99-14.52-49-27.38-72-40.23-39.74-22.22-79.24-44.9-119.44-66.26-7.84-4.17-20.72-7.51-27.37-3.94-65.91 35.36-131 72.25-198.03 109.65 30.81 17.61 59.88 34.64 89.34 50.95 35.34 19.56 71.06 38.44 106.53 57.76 9.76 5.32 16.84 5.42 27.78-1.52 29.71-18.84 61.35-34.68 92.55-51.11 5.96-3.14 13.35-3.56 22.19-5.75 0 35.1 1.57 67.38-.96 99.32-.76 9.6-11.25 20.71-20.18 27.03-61.71 43.67-151.85 43.15-216.29 1.28-19.35-12.58-28.2-28.49-28.22-51.23-.05-64.12-.34-64.12-58.39-93.3-3.94-1.98-8.92-2.95-11.73-5.96-8.51-9.11-22.62-19.18-22.35-28.53.25-8.88 14.54-19.68 24.95-25.58 59.39-33.68 119.5-66.11 179.31-99.04 16.68-9.18 31.22-9.74 49.34.75 60.99 35.31 123.36 68.26 185.3 101.92 23.53 12.79 27.02 36.93 3.22 44.53-41.09 13.11-41.98 41.2-39.06 74.24.26 2.96-.18 5.98-.4 8.97-.03.68-.48 1.35-2.81 7.3zM189 463.37c0 19.41-2.18 35.38.71 50.38 2.22 11.51 8.04 26.09 17.04 31.91 61.03 39.52 124.07 38.01 186.39 2.6 8.77-4.98 18.3-15.54 19.86-24.81 3.11-18.39.92-37.68.92-59.1-28.43 14.76-55.4 25.48-78.56 41.65-25.67 17.92-47.39 13.72-71.44-.75-23.66-14.22-48.2-27.02-74.92-41.88zM459.07 580.82c0-17.77-.58-29.48.17-41.11.73-11.39 10.8-18.39 16.68-9.4 6.25 9.57 5.27 24.98 4.22 37.57-.34 3.95-11.05 7.06-21.07 12.94z"
}));

/* harmony default export */ __webpack_exports__["default"] = (SvgTraining);

/***/ }),

/***/ "./stylesheets/app.scss":
/*!******************************!*\
  !*** ./stylesheets/app.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./utils/getEnvConfig.js":
/*!*******************************!*\
  !*** ./utils/getEnvConfig.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "../../node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_server_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-server/config */ "next-server/config");
/* harmony import */ var next_server_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_server_config__WEBPACK_IMPORTED_MODULE_1__);


/* eslint-disable no-param-reassign, no-underscore-dangle, no-console */


const _getConfig = next_server_config__WEBPACK_IMPORTED_MODULE_1___default()(),
      publicRuntimeConfig = _getConfig.publicRuntimeConfig;

const processEnv = publicRuntimeConfig || process.env || {};
let varsLogged = false;

if (process && !false && !varsLogged) {
  console.debug('Following configurations injected to the app');
  console.debug(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(processEnv, ' ', 2));
  varsLogged = true;
}

/* harmony default export */ __webpack_exports__["default"] = (processEnv || {});

/***/ }),

/***/ "./utils/storage.js":
/*!**************************!*\
  !*** ./utils/storage.js ***!
  \**************************/
/*! exports provided: Cookies, setCookie, getAccessToken, setAccessToken, removeAccessToken */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cookies", function() { return Cookies; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCookie", function() { return setCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAccessToken", function() { return getAccessToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAccessToken", function() { return setAccessToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeAccessToken", function() { return removeAccessToken; });
/* harmony import */ var universal_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! universal-cookie */ "universal-cookie");
/* harmony import */ var universal_cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(universal_cookie__WEBPACK_IMPORTED_MODULE_0__);

const Cookies = new universal_cookie__WEBPACK_IMPORTED_MODULE_0___default.a();
const ACCESS_TOKEN_NAME = 'Intracon3D_Token';
const setCookie = (key, value, options) => {
  Cookies.set(key, value, options);
};
const getAccessToken = req => {
  let result = '';

  try {
    if (typeof window !== 'undefined') {
      result = Cookies.get(ACCESS_TOKEN_NAME);
    } else {
      if (req && req.universalCookies) {
        result = req.universalCookies.get(ACCESS_TOKEN_NAME);
      }
    }
  } catch (e) {
    console.log(e);
  }

  return result;
};
const setAccessToken = (token, options) => {
  Cookies.set(ACCESS_TOKEN_NAME, token, options);
};
const removeAccessToken = req => {
  if (req && req.universalCookies) {
    req.universalCookies.remove(ACCESS_TOKEN_NAME);
    req.universalCookies.remove('email');
  } else {
    Cookies.remove(ACCESS_TOKEN_NAME, {
      path: '/'
    });
    Cookies.remove('email', {
      path: '/'
    });
  }
};

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "core-js/library/fn/json/stringify":
/*!****************************************************!*\
  !*** external "core-js/library/fn/json/stringify" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/get-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "core-js/library/fn/object/set-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/set-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "core-js/library/fn/reflect/construct":
/*!*******************************************************!*\
  !*** external "core-js/library/fn/reflect/construct" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/reflect/construct");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "core-js/modules/es6.regexp.search":
/*!****************************************************!*\
  !*** external "core-js/modules/es6.regexp.search" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.regexp.search");

/***/ }),

/***/ "next-server/config":
/*!*************************************!*\
  !*** external "next-server/config" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/config");

/***/ }),

/***/ "next-server/dist/lib/router/router":
/*!*****************************************************!*\
  !*** external "next-server/dist/lib/router/router" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/router");

/***/ }),

/***/ "next-server/dist/lib/utils":
/*!*********************************************!*\
  !*** external "next-server/dist/lib/utils" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "next-server/head":
/*!***********************************!*\
  !*** external "next-server/head" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-autosuggest":
/*!************************************!*\
  !*** external "react-autosuggest" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-autosuggest");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "regenerator-runtime":
/*!**************************************!*\
  !*** external "regenerator-runtime" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "universal-cookie":
/*!***********************************!*\
  !*** external "universal-cookie" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("universal-cookie");

/***/ })

/******/ });
//# sourceMappingURL=_app.js.map