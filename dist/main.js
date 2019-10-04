/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./html.js */ "./src/html.js");


var about = function () {
  var descriptionSaffron = 'Saffron is a spice derived from the flower.' + 'The threads of the flower are collected and dried to be used mainly as a' + 'seasoning and colouring agent in food.';
  var descriptionVegetarian = 'Vegetables contain important vitamins and minerals for our body.' + 'Our restaurant serve south Indian cuisine made by fresh vegetables.' + 'Please visit us to enjoy healthy meals and the flavour with spice.';

  var writeDescriptions = function writeDescriptions() {
    return [_html_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement({
      type: 'h1',
      classes: ['text-align-center', 'h-title'],
      text: 'About Us'
    }), _html_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement({
      type: 'p',
      classes: ['description'],
      text: descriptionSaffron
    }), _html_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement({
      type: 'p',
      classes: ['description'],
      text: descriptionVegetarian
    })];
  };

  var writeInfos = function writeInfos() {
    return [_html_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement({
      type: 'span',
      classes: ['title'],
      text: 'ADDRESS:'
    }), _html_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement({
      type: 'span',
      text: 'xxx, Tamil Nadu, India\n'
    }), _html_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement({
      type: 'span',
      classes: ['title'],
      text: 'CONTACT:'
    }), _html_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement({
      type: 'span',
      text: '+91.xxxx.xxxx\n'
    }), _html_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement({
      type: 'span',
      classes: ['title'],
      text: 'CUISINE:'
    }), _html_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement({
      type: 'span',
      text: 'South Indian\n'
    }), _html_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement({
      type: 'span',
      classes: ['title'],
      text: 'TIMINGS:'
    }), _html_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement({
      type: 'span',
      text: '07:00 AM - 2:30 PM, 4:00 PM - 8:30 PM\n'
    })];
  };

  var create = function create() {
    var mainContainer = _html_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement({
      type: 'div',
      id: 'about',
      classes: ['main-contents']
    });
    var infoContainer = _html_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement({
      type: 'div',
      classes: ['about-info', 'white-space-pre']
    });
    writeInfos().forEach(function (info) {
      return infoContainer.appendChild(info);
    });
    writeDescriptions().forEach(function (description) {
      return mainContainer.appendChild(description);
    });
    mainContainer.appendChild(infoContainer);
    return mainContainer;
  };

  return {
    create: create
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (about);

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./html.js */ "./src/html.js");


var contact = function () {
  var create = function create() {
    var mainContainer = _html_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement({
      type: 'div',
      id: 'contact',
      text: 'contact'
    });
    return mainContainer;
  };

  return {
    create: create
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (contact);

/***/ }),

/***/ "./src/html.js":
/*!*********************!*\
  !*** ./src/html.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var html = function () {
  var createElement = function createElement(_ref) {
    var type = _ref.type,
        id = _ref.id,
        classes = _ref.classes,
        text = _ref.text,
        src = _ref.src,
        alt = _ref.alt;
    var item = document.createElement(type);
    if (id) item.setAttribute('id', id);
    if (classes) classes.forEach(function (name) {
      return item.classList.add(name);
    });
    if (text) item.innerHTML = text;
    if (src) item.src = src;
    if (alt) item.alt = alt;
    return item;
  };

  return {
    createElement: createElement
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (html);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nav_tap_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nav_tap.js */ "./src/nav_tap.js");
/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about.js */ "./src/about.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");




var main = document.querySelector('div#content');
main.appendChild(_nav_tap_js__WEBPACK_IMPORTED_MODULE_0__["default"].create());
main.appendChild(_about_js__WEBPACK_IMPORTED_MODULE_1__["default"].create());
main.appendChild(_menu_js__WEBPACK_IMPORTED_MODULE_2__["default"].create());
main.appendChild(_contact_js__WEBPACK_IMPORTED_MODULE_3__["default"].create());
_nav_tap_js__WEBPACK_IMPORTED_MODULE_0__["default"].addClicks();

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./html.js */ "./src/html.js");


var menu = function () {
  var create = function create() {
    var mainContainer = _html_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement({
      type: 'div',
      id: 'menu',
      text: 'menu'
    });
    var setMenu = _html_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement({
      type: 'div',
      classes: ['set-menu', 'food-items', 'd-flex', 'flex-wrap']
    });
    var setMenuHeader = _html_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement({
      type: 'h1',
      classes: ['h-title'],
      text: 'Meal'
    }); // const setMenuitems = [];

    var foodItem = _html_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement({
      type: 'div',
      classes: ['food-item']
    });
    var foodImage;
    var foodBody;
    foodImage = _html_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement({
      type: 'img',
      src: './../assets/images/dosa_320.webp',
      alter: 'Dosa image'
    });
    foodBody = _html_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement({
      type: 'div',
      classes: ['menu-description'],
      text: 'Dosai (+ sambar, chutney) Rs.60'
    });
    foodItem.appendChild(foodImage);
    foodItem.appendChild(foodBody);
    setMenu.appendChild(setMenuHeader);
    setMenu.appendChild(foodItem);
    mainContainer.appendChild(setMenu); // setMenuitems << foodItem;

    return mainContainer;
  };

  return {
    create: create
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (menu);

/***/ }),

/***/ "./src/nav_tap.js":
/*!************************!*\
  !*** ./src/nav_tap.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./html.js */ "./src/html.js");


var navTap = function () {
  var create = function create() {
    var taps = _html_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement({
      type: 'ul',
      classes: ['nav-tap', 'list-style-none']
    });
    var tapAbout = _html_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement({
      type: 'li',
      classes: ['tap-about'],
      text: 'about'
    });
    var tapMenu = _html_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement({
      type: 'li',
      classes: ['tap-menu'],
      text: 'menu'
    });
    var tapContact = _html_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement({
      type: 'li',
      classes: ['tap-contact'],
      text: 'contact'
    });
    var tapReserved = _html_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement({
      type: 'li',
      classes: ['tap-reserved']
    });
    taps.appendChild(tapAbout);
    taps.appendChild(tapMenu);
    taps.appendChild(tapContact);
    taps.appendChild(tapReserved);
    return taps;
  };

  var togglePartial = function togglePartial(partialGroup, choiceName) {
    partialGroup.forEach(function (partial) {
      if (partial.name == choiceName) {
        partial.obj.style.display = 'block';
      } else {
        partial.obj.style.display = 'none';
      }
    });
  };

  var addClicks = function addClicks() {
    var partials = [];
    ['about', 'menu', 'contact'].forEach(function (name) {
      return partials.push({
        name: name
      });
    });
    partials.forEach(function (p) {
      return p.obj = document.querySelector('#' + p.name);
    });
    partials.forEach(function (p) {
      var selector = document.querySelector('.tap-' + p.name);
      selector.addEventListener('click', function () {
        return togglePartial(partials, p.name);
      });
    });
    togglePartial(partials, partials[0].name);
  };

  return {
    create: create,
    addClicks: addClicks
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (navTap);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fib3V0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9odG1sLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbmF2X3RhcC5qcyJdLCJuYW1lcyI6WyJhYm91dCIsImRlc2NyaXB0aW9uU2FmZnJvbiIsImRlc2NyaXB0aW9uVmVnZXRhcmlhbiIsIndyaXRlRGVzY3JpcHRpb25zIiwiaHRtbCIsImNyZWF0ZUVsZW1lbnQiLCJ0eXBlIiwiY2xhc3NlcyIsInRleHQiLCJ3cml0ZUluZm9zIiwiY3JlYXRlIiwibWFpbkNvbnRhaW5lciIsImlkIiwiaW5mb0NvbnRhaW5lciIsImZvckVhY2giLCJpbmZvIiwiYXBwZW5kQ2hpbGQiLCJkZXNjcmlwdGlvbiIsImNvbnRhY3QiLCJzcmMiLCJhbHQiLCJpdGVtIiwiZG9jdW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJuYW1lIiwiY2xhc3NMaXN0IiwiYWRkIiwiaW5uZXJIVE1MIiwibWFpbiIsInF1ZXJ5U2VsZWN0b3IiLCJuYXZUYXAiLCJtZW51IiwiYWRkQ2xpY2tzIiwic2V0TWVudSIsInNldE1lbnVIZWFkZXIiLCJmb29kSXRlbSIsImZvb2RJbWFnZSIsImZvb2RCb2R5IiwiYWx0ZXIiLCJ0YXBzIiwidGFwQWJvdXQiLCJ0YXBNZW51IiwidGFwQ29udGFjdCIsInRhcFJlc2VydmVkIiwidG9nZ2xlUGFydGlhbCIsInBhcnRpYWxHcm91cCIsImNob2ljZU5hbWUiLCJwYXJ0aWFsIiwib2JqIiwic3R5bGUiLCJkaXNwbGF5IiwicGFydGlhbHMiLCJwdXNoIiwicCIsInNlbGVjdG9yIiwiYWRkRXZlbnRMaXN0ZW5lciJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNB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aW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBodG1sIGZyb20gJy4vaHRtbC5qcyc7XG5cbmNvbnN0IGFib3V0ID0gKCgpID0+IHtcbiAgY29uc3QgZGVzY3JpcHRpb25TYWZmcm9uID0gJ1NhZmZyb24gaXMgYSBzcGljZSBkZXJpdmVkIGZyb20gdGhlIGZsb3dlci4nXG4gICAgKyAnVGhlIHRocmVhZHMgb2YgdGhlIGZsb3dlciBhcmUgY29sbGVjdGVkIGFuZCBkcmllZCB0byBiZSB1c2VkIG1haW5seSBhcyBhJ1xuICAgICsgJ3NlYXNvbmluZyBhbmQgY29sb3VyaW5nIGFnZW50IGluIGZvb2QuJztcblxuICBjb25zdCBkZXNjcmlwdGlvblZlZ2V0YXJpYW4gPSAnVmVnZXRhYmxlcyBjb250YWluIGltcG9ydGFudCB2aXRhbWlucyBhbmQgbWluZXJhbHMgZm9yIG91ciBib2R5LidcbiAgICArICdPdXIgcmVzdGF1cmFudCBzZXJ2ZSBzb3V0aCBJbmRpYW4gY3Vpc2luZSBtYWRlIGJ5IGZyZXNoIHZlZ2V0YWJsZXMuJ1xuICAgICsgJ1BsZWFzZSB2aXNpdCB1cyB0byBlbmpveSBoZWFsdGh5IG1lYWxzIGFuZCB0aGUgZmxhdm91ciB3aXRoIHNwaWNlLic7XG5cbiAgY29uc3Qgd3JpdGVEZXNjcmlwdGlvbnMgPSAoKSA9PiBbXG4gICAgaHRtbC5jcmVhdGVFbGVtZW50KHsgdHlwZTogJ2gxJywgY2xhc3NlczogWyd0ZXh0LWFsaWduLWNlbnRlcicsICdoLXRpdGxlJ10sIHRleHQ6ICdBYm91dCBVcycgfSksXG4gICAgaHRtbC5jcmVhdGVFbGVtZW50KHsgdHlwZTogJ3AnLCBjbGFzc2VzOiBbJ2Rlc2NyaXB0aW9uJ10sIHRleHQ6IGRlc2NyaXB0aW9uU2FmZnJvbiB9KSxcbiAgICBodG1sLmNyZWF0ZUVsZW1lbnQoeyB0eXBlOiAncCcsIGNsYXNzZXM6IFsnZGVzY3JpcHRpb24nXSwgdGV4dDogZGVzY3JpcHRpb25WZWdldGFyaWFuIH0pLFxuICBdO1xuXG4gIGNvbnN0IHdyaXRlSW5mb3MgPSAoKSA9PiBbXG4gICAgaHRtbC5jcmVhdGVFbGVtZW50KHsgdHlwZTogJ3NwYW4nLCBjbGFzc2VzOiBbJ3RpdGxlJ10sIHRleHQ6ICdBRERSRVNTOicgfSksXG4gICAgaHRtbC5jcmVhdGVFbGVtZW50KHsgdHlwZTogJ3NwYW4nLCB0ZXh0OiAneHh4LCBUYW1pbCBOYWR1LCBJbmRpYVxcbicgfSksXG4gICAgaHRtbC5jcmVhdGVFbGVtZW50KHsgdHlwZTogJ3NwYW4nLCBjbGFzc2VzOiBbJ3RpdGxlJ10sIHRleHQ6ICdDT05UQUNUOicgfSksXG4gICAgaHRtbC5jcmVhdGVFbGVtZW50KHsgdHlwZTogJ3NwYW4nLCB0ZXh0OiAnKzkxLnh4eHgueHh4eFxcbicgfSksXG4gICAgaHRtbC5jcmVhdGVFbGVtZW50KHsgdHlwZTogJ3NwYW4nLCBjbGFzc2VzOiBbJ3RpdGxlJ10sIHRleHQ6ICdDVUlTSU5FOicgfSksXG4gICAgaHRtbC5jcmVhdGVFbGVtZW50KHsgdHlwZTogJ3NwYW4nLCB0ZXh0OiAnU291dGggSW5kaWFuXFxuJyB9KSxcbiAgICBodG1sLmNyZWF0ZUVsZW1lbnQoeyB0eXBlOiAnc3BhbicsIGNsYXNzZXM6IFsndGl0bGUnXSwgdGV4dDogJ1RJTUlOR1M6JyB9KSxcbiAgICBodG1sLmNyZWF0ZUVsZW1lbnQoeyB0eXBlOiAnc3BhbicsIHRleHQ6ICcwNzowMCBBTSAtIDI6MzAgUE0sIDQ6MDAgUE0gLSA4OjMwIFBNXFxuJyB9KSxcbiAgXTtcblxuICBjb25zdCBjcmVhdGUgPSAoKSA9PiB7XG4gICAgY29uc3QgbWFpbkNvbnRhaW5lciA9IGh0bWwuY3JlYXRlRWxlbWVudCh7IHR5cGU6ICdkaXYnLCBpZDogJ2Fib3V0JywgY2xhc3NlczogWydtYWluLWNvbnRlbnRzJ10gfSk7XG4gICAgY29uc3QgaW5mb0NvbnRhaW5lciA9IGh0bWwuY3JlYXRlRWxlbWVudCh7IHR5cGU6ICdkaXYnLCBjbGFzc2VzOiBbJ2Fib3V0LWluZm8nLCAnd2hpdGUtc3BhY2UtcHJlJ10gfSk7XG4gICAgd3JpdGVJbmZvcygpLmZvckVhY2goaW5mbyA9PiBpbmZvQ29udGFpbmVyLmFwcGVuZENoaWxkKGluZm8pKTtcbiAgICB3cml0ZURlc2NyaXB0aW9ucygpLmZvckVhY2goZGVzY3JpcHRpb24gPT4gbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbikpO1xuICAgIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQoaW5mb0NvbnRhaW5lcik7XG4gICAgcmV0dXJuIG1haW5Db250YWluZXI7XG4gIH07XG4gIHJldHVybiB7IGNyZWF0ZSB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgYWJvdXQ7XG4iLCJpbXBvcnQgaHRtbCBmcm9tICcuL2h0bWwuanMnO1xuXG5jb25zdCBjb250YWN0ID0gKCgpID0+IHtcbiAgY29uc3QgY3JlYXRlID0gKCkgPT4ge1xuICAgIGNvbnN0IG1haW5Db250YWluZXIgPSBodG1sLmNyZWF0ZUVsZW1lbnQoeyB0eXBlOiAnZGl2JywgaWQ6ICdjb250YWN0JywgdGV4dDogJ2NvbnRhY3QnIH0pO1xuICAgIHJldHVybiBtYWluQ29udGFpbmVyO1xuICB9O1xuICByZXR1cm4geyBjcmVhdGUgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRhY3Q7XG4iLCJjb25zdCBodG1sID0gKCgpID0+IHtcbiAgY29uc3QgY3JlYXRlRWxlbWVudCA9ICh7XG4gICAgdHlwZSwgaWQsIGNsYXNzZXMsIHRleHQsIHNyYywgYWx0LFxuICB9KSA9PiB7XG4gICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XG4gICAgaWYgKGlkKSBpdGVtLnNldEF0dHJpYnV0ZSgnaWQnLCBpZCk7XG4gICAgaWYgKGNsYXNzZXMpIGNsYXNzZXMuZm9yRWFjaChuYW1lID0+IGl0ZW0uY2xhc3NMaXN0LmFkZChuYW1lKSk7XG4gICAgaWYgKHRleHQpIGl0ZW0uaW5uZXJIVE1MID0gdGV4dDtcbiAgICBpZiAoc3JjKSBpdGVtLnNyYyA9IHNyYztcbiAgICBpZiAoYWx0KSBpdGVtLmFsdCA9IGFsdDtcbiAgICByZXR1cm4gaXRlbTtcbiAgfTtcblxuICByZXR1cm4geyBjcmVhdGVFbGVtZW50IH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBodG1sO1xuIiwiaW1wb3J0IG5hdlRhcCBmcm9tICcuL25hdl90YXAuanMnO1xuaW1wb3J0IGFib3V0IGZyb20gJy4vYWJvdXQuanMnO1xuaW1wb3J0IG1lbnUgZnJvbSAnLi9tZW51LmpzJztcbmltcG9ydCBjb250YWN0IGZyb20gJy4vY29udGFjdC5qcyc7XG5cbmNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXYjY29udGVudCcpO1xuXG5tYWluLmFwcGVuZENoaWxkKG5hdlRhcC5jcmVhdGUoKSk7XG5tYWluLmFwcGVuZENoaWxkKGFib3V0LmNyZWF0ZSgpKTtcbm1haW4uYXBwZW5kQ2hpbGQobWVudS5jcmVhdGUoKSk7XG5tYWluLmFwcGVuZENoaWxkKGNvbnRhY3QuY3JlYXRlKCkpO1xuXG5uYXZUYXAuYWRkQ2xpY2tzKCk7XG4iLCJpbXBvcnQgaHRtbCBmcm9tICcuL2h0bWwuanMnO1xuXG5jb25zdCBtZW51ID0gKCgpID0+IHtcbiAgY29uc3QgY3JlYXRlID0gKCkgPT4ge1xuICAgIGNvbnN0IG1haW5Db250YWluZXIgPSBodG1sLmNyZWF0ZUVsZW1lbnQoeyB0eXBlOiAnZGl2JywgaWQ6ICdtZW51JywgdGV4dDogJ21lbnUnIH0pO1xuICAgIGNvbnN0IHNldE1lbnUgPSBodG1sLmNyZWF0ZUVsZW1lbnQoeyB0eXBlOiAnZGl2JywgY2xhc3NlczogWydzZXQtbWVudScsICdmb29kLWl0ZW1zJywgJ2QtZmxleCcsICdmbGV4LXdyYXAnXSB9KTtcbiAgICBjb25zdCBzZXRNZW51SGVhZGVyID0gaHRtbC5jcmVhdGVFbGVtZW50KHsgdHlwZTogJ2gxJywgY2xhc3NlczogWydoLXRpdGxlJ10sIHRleHQ6ICdNZWFsJyB9KTtcbiAgICAvLyBjb25zdCBzZXRNZW51aXRlbXMgPSBbXTtcbiAgICBjb25zdCBmb29kSXRlbSA9IGh0bWwuY3JlYXRlRWxlbWVudCh7IHR5cGU6ICdkaXYnLCBjbGFzc2VzOiBbJ2Zvb2QtaXRlbSddIH0pO1xuICAgIGxldCBmb29kSW1hZ2U7XG4gICAgbGV0IGZvb2RCb2R5O1xuICAgIGZvb2RJbWFnZSA9IGh0bWwuY3JlYXRlRWxlbWVudCh7IHR5cGU6ICdpbWcnLCBzcmM6ICcuLy4uL2Fzc2V0cy9pbWFnZXMvZG9zYV8zMjAud2VicCcsIGFsdGVyOiAnRG9zYSBpbWFnZScgfSk7XG4gICAgZm9vZEJvZHkgPSBodG1sLmNyZWF0ZUVsZW1lbnQoeyB0eXBlOiAnZGl2JywgY2xhc3NlczogWydtZW51LWRlc2NyaXB0aW9uJ10sIHRleHQ6ICdEb3NhaSAoKyBzYW1iYXIsIGNodXRuZXkpIFJzLjYwJyB9KTtcbiAgICBmb29kSXRlbS5hcHBlbmRDaGlsZChmb29kSW1hZ2UpO1xuICAgIGZvb2RJdGVtLmFwcGVuZENoaWxkKGZvb2RCb2R5KTtcbiAgICBzZXRNZW51LmFwcGVuZENoaWxkKHNldE1lbnVIZWFkZXIpO1xuICAgIHNldE1lbnUuYXBwZW5kQ2hpbGQoZm9vZEl0ZW0pO1xuICAgIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQoc2V0TWVudSk7XG4gICAgLy8gc2V0TWVudWl0ZW1zIDw8IGZvb2RJdGVtO1xuICAgIHJldHVybiBtYWluQ29udGFpbmVyO1xuICB9O1xuICByZXR1cm4geyBjcmVhdGUgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IG1lbnU7XG4iLCJpbXBvcnQgaHRtbCBmcm9tICcuL2h0bWwuanMnXG5cbmNvbnN0IG5hdlRhcCA9ICgoKSA9PiB7XG4gIGNvbnN0IGNyZWF0ZSA9ICgpID0+IHtcbiAgICBjb25zdCB0YXBzID0gaHRtbC5jcmVhdGVFbGVtZW50KHsgdHlwZTogJ3VsJywgY2xhc3NlczogWyduYXYtdGFwJywgJ2xpc3Qtc3R5bGUtbm9uZSddIH0pO1xuICAgIGNvbnN0IHRhcEFib3V0ID0gaHRtbC5jcmVhdGVFbGVtZW50KHsgdHlwZTogJ2xpJywgY2xhc3NlczogWyd0YXAtYWJvdXQnXSwgdGV4dDogJ2Fib3V0JyB9KTtcbiAgICBjb25zdCB0YXBNZW51ID0gaHRtbC5jcmVhdGVFbGVtZW50KHsgdHlwZTogJ2xpJywgY2xhc3NlczogWyd0YXAtbWVudSddLCB0ZXh0OiAnbWVudScgfSk7XG4gICAgY29uc3QgdGFwQ29udGFjdCA9IGh0bWwuY3JlYXRlRWxlbWVudCh7IHR5cGU6ICdsaScsIGNsYXNzZXM6IFsndGFwLWNvbnRhY3QnXSwgdGV4dDogJ2NvbnRhY3QnIH0pO1xuICAgIGNvbnN0IHRhcFJlc2VydmVkID0gaHRtbC5jcmVhdGVFbGVtZW50KHsgdHlwZTogJ2xpJywgY2xhc3NlczogWyd0YXAtcmVzZXJ2ZWQnXSB9KTtcbiAgICB0YXBzLmFwcGVuZENoaWxkKHRhcEFib3V0KTtcbiAgICB0YXBzLmFwcGVuZENoaWxkKHRhcE1lbnUpO1xuICAgIHRhcHMuYXBwZW5kQ2hpbGQodGFwQ29udGFjdCk7XG4gICAgdGFwcy5hcHBlbmRDaGlsZCh0YXBSZXNlcnZlZCk7XG4gICAgcmV0dXJuIHRhcHM7XG4gIH07XG5cbiAgY29uc3QgdG9nZ2xlUGFydGlhbCA9IChwYXJ0aWFsR3JvdXAsIGNob2ljZU5hbWUpID0+IHtcbiAgICBwYXJ0aWFsR3JvdXAuZm9yRWFjaChwYXJ0aWFsID0+IHtcbiAgICAgIGlmIChwYXJ0aWFsLm5hbWUgPT0gY2hvaWNlTmFtZSkge1xuICAgICAgICBwYXJ0aWFsLm9iai5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhcnRpYWwub2JqLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGNvbnN0IGFkZENsaWNrcyA9ICgpID0+IHtcbiAgICBsZXQgcGFydGlhbHMgPSBbXTtcbiAgICBbJ2Fib3V0JywgJ21lbnUnLCAnY29udGFjdCddLmZvckVhY2gobmFtZSA9PiBwYXJ0aWFscy5wdXNoKHsgbmFtZTogbmFtZSB9KSlcbiAgICBwYXJ0aWFscy5mb3JFYWNoKHAgPT4gcC5vYmogPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjJyArIHAubmFtZSkpO1xuICAgIHBhcnRpYWxzLmZvckVhY2gocCA9PiB7XG4gICAgICBjb25zdCBzZWxlY3RvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXAtJyArIHAubmFtZSk7XG4gICAgICBzZWxlY3Rvci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRvZ2dsZVBhcnRpYWwocGFydGlhbHMsIHAubmFtZSkpO1xuICAgIH0pO1xuICAgIHRvZ2dsZVBhcnRpYWwocGFydGlhbHMsIHBhcnRpYWxzWzBdLm5hbWUpO1xuICB9XG5cbiAgcmV0dXJuIHsgY3JlYXRlLCBhZGRDbGlja3MgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IG5hdlRhcDtcbiJdLCJzb3VyY2VSb290IjoiIn0=