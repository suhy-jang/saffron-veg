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
  var description_saffron = 'Saffron is a spice derived from the flower. \
    The threads of the flower are collected and dried to be used mainly as a \
    seasoning and colouring agent in food.';
  var description_vegetarian = 'Vegetables contain important vitamins and minerals for our body. \
    Our restaurant serve south Indian cuisine made by fresh vegetables. \
    Please visit us to enjoy healthy meals and the flavour with spice.';

  var create = function create() {
    var mainContainer = _html_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement({
      type: 'div',
      id: 'about',
      classes: ['main-contents']
    });
    var header = _html_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement({
      type: 'h1',
      classes: ['text-align-center', 'h-title'],
      text: 'About Us'
    });
    var pOne = _html_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement({
      type: 'p',
      classes: ['description'],
      text: description_saffron
    });
    var pTwo = _html_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement({
      type: 'p',
      classes: ['description'],
      text: description_vegetarian
    });
    var info = _html_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement({
      type: 'div',
      classes: ['about-info', 'white-space-pre']
    });
    var addressHeader = _html_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement({
      type: 'span',
      classes: ['title'],
      text: 'ADDRESS:'
    });
    var addressBody = _html_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement({
      type: 'span',
      text: 'xxx, Tamil Nadu, India\n'
    });
    var contactHeader = _html_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement({
      type: 'span',
      classes: ['title'],
      text: 'CONTACT:'
    });
    var contactBody = _html_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement({
      type: 'span',
      text: '+91.xxxx.xxxx\n'
    });
    var cuisineHeader = _html_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement({
      type: 'span',
      classes: ['title'],
      text: 'CUISINE:'
    });
    var cuisineBody = _html_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement({
      type: 'span',
      text: 'South Indian\n'
    });
    var timingsHeader = _html_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement({
      type: 'span',
      classes: ['title'],
      text: 'TIMINGS:'
    });
    var timingsBody = _html_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement({
      type: 'span',
      text: '07:00 AM - 2:30 PM, 4:00 PM - 8:30 PM\n'
    });
    mainContainer.appendChild(header);
    mainContainer.appendChild(pOne);
    mainContainer.appendChild(pTwo);
    mainContainer.appendChild(info);
    info.appendChild(addressHeader);
    info.appendChild(addressBody);
    info.appendChild(contactHeader);
    info.appendChild(contactBody);
    info.appendChild(cuisineHeader);
    info.appendChild(cuisineBody);
    info.appendChild(timingsHeader);
    info.appendChild(timingsBody);
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

    if (id) {
      item.setAttribute('id', id);
    }

    if (classes) {
      classes.forEach(function (name) {
        return item.classList.add(name);
      });
    }

    if (text) {
      item.innerHTML = text;
    }

    if (src) {
      item.src = src;
    }

    if (alt) {
      item.alt = alt;
    }

    return item;
  };

  var createImageElement = function createImageElement(_ref2) {
    var src = _ref2.src,
        alt = _ref2.alt;
    var item = document.createElement('img');
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
    var foodImage, foodBody;
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

  var toggleDisplay = function toggleDisplay(taps, choice) {
    taps.forEach(function (tap) {
      if (tap == choice) {
        tap.style.display = 'block';
      } else {
        tap.style.display = 'none';
      }
    });
  };

  var addClicks = function addClicks() {
    var partialAbout = document.querySelector('#about');
    var partialMenu = document.querySelector('#menu');
    var partialContact = document.querySelector('#contact');
    var openAbout = toggleDisplay([partialAbout, partialMenu, partialContact], partialAbout);
    var openMenu = toggleDisplay([partialAbout, partialMenu, partialContact], partialMenu);
    var openContact = toggleDisplay([partialAbout, partialMenu, partialContact], partialContact);
    document.querySelector('.tap-about').addEventListener('click', openAbout);
    document.querySelector('.tap-menu').addEventListener('click', openMenu);
    document.querySelector('.tap-contact').addEventListener('click', openContact);
    openAbout();
  };

  return {
    create: create,
    addClicks: addClicks
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (navTap);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fib3V0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9odG1sLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbmF2X3RhcC5qcyJdLCJuYW1lcyI6WyJhYm91dCIsImRlc2NyaXB0aW9uX3NhZmZyb24iLCJkZXNjcmlwdGlvbl92ZWdldGFyaWFuIiwiY3JlYXRlIiwibWFpbkNvbnRhaW5lciIsImh0bWwiLCJjcmVhdGVFbGVtZW50IiwidHlwZSIsImlkIiwiY2xhc3NlcyIsImhlYWRlciIsInRleHQiLCJwT25lIiwicFR3byIsImluZm8iLCJhZGRyZXNzSGVhZGVyIiwiYWRkcmVzc0JvZHkiLCJjb250YWN0SGVhZGVyIiwiY29udGFjdEJvZHkiLCJjdWlzaW5lSGVhZGVyIiwiY3Vpc2luZUJvZHkiLCJ0aW1pbmdzSGVhZGVyIiwidGltaW5nc0JvZHkiLCJhcHBlbmRDaGlsZCIsImNvbnRhY3QiLCJzcmMiLCJhbHQiLCJpdGVtIiwiZG9jdW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJmb3JFYWNoIiwibmFtZSIsImNsYXNzTGlzdCIsImFkZCIsImlubmVySFRNTCIsImNyZWF0ZUltYWdlRWxlbWVudCIsIm1haW4iLCJxdWVyeVNlbGVjdG9yIiwibmF2VGFwIiwibWVudSIsImFkZENsaWNrcyIsInNldE1lbnUiLCJzZXRNZW51SGVhZGVyIiwiZm9vZEl0ZW0iLCJmb29kSW1hZ2UiLCJmb29kQm9keSIsImFsdGVyIiwidGFwcyIsInRhcEFib3V0IiwidGFwTWVudSIsInRhcENvbnRhY3QiLCJ0YXBSZXNlcnZlZCIsInRvZ2dsZURpc3BsYXkiLCJjaG9pY2UiLCJ0YXAiLCJzdHlsZSIsImRpc3BsYXkiLCJwYXJ0aWFsQWJvdXQiLCJwYXJ0aWFsTWVudSIsInBhcnRpYWxDb250YWN0Iiwib3BlbkFib3V0Iiwib3Blbk1lbnUiLCJvcGVuQ29udGFjdCIsImFkZEV2ZW50TGlzdGVuZXIiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBOztBQUVBLElBQU1BLEtBQUssR0FBSSxZQUFNO0FBQ25CLE1BQU1DLG1CQUFtQixHQUN2Qjs7MkNBREY7QUFJQSxNQUFNQyxzQkFBc0IsR0FDMUI7O3VFQURGOztBQUtBLE1BQU1DLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07QUFDbkIsUUFBTUMsYUFBYSxHQUFHQyxnREFBSSxDQUFDQyxhQUFMLENBQW1CO0FBQUVDLFVBQUksRUFBRSxLQUFSO0FBQWVDLFFBQUUsRUFBRSxPQUFuQjtBQUE0QkMsYUFBTyxFQUFFLENBQUMsZUFBRDtBQUFyQyxLQUFuQixDQUF0QjtBQUNBLFFBQU1DLE1BQU0sR0FBR0wsZ0RBQUksQ0FBQ0MsYUFBTCxD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QSxRQUFNSSxRQUFRLEdBQUdULGFBQWEsQ0FBQyxDQUFDSyxZQUFELEVBQWVDLFdBQWYsRUFBNEJDLGNBQTVCLENBQUQsRUFBOENELFdBQTlDLENBQTlCO0FBQ0EsUUFBTUksV0FBVyxHQUFHVixhQUFhLENBQUMsQ0FBQ0ssWUFBRCxFQUFlQyxXQUFmLEVBQTRCQyxjQUE1QixDQUFELEVBQThDQSxjQUE5QyxDQUFqQztBQUVBL0IsWUFBUSxDQUFDUyxhQUFULENBQXVCLFlBQXZCLEVBQXFDMEIsZ0JBQXJDLENBQXNELE9BQXRELEVBQStESCxTQUEvRDtBQUNBaEMsWUFBUSxDQUFDUyxhQUFULENBQXVCLFdBQXZCLEVBQW9DMEIsZ0JBQXBDLENBQXFELE9BQXJELEVBQThERixRQUE5RDtBQUNBakMsWUFBUSxDQUFDUyxhQUFULENBQXVCLGNBQXZCLEVBQXVDMEIsZ0JBQXZDLENBQXdELE9BQXhELEVBQWlFRCxXQUFqRTtBQUNBRixhQUFTO0FBQ1YsR0FiRDs7QUFlQSxTQUFPO0FBQUV6RCxVQUFNLEVBQU5BLE1BQUY7QUFBVXFDLGFBQVMsRUFBVEE7QUFBVixHQUFQO0FBQ0QsQ0F6Q2MsRUFBZjs7QUEyQ2VGLHFFQUFmLEUiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IGh0bWwgZnJvbSAnLi9odG1sLmpzJ1xuXG5jb25zdCBhYm91dCA9ICgoKSA9PiB7XG4gIGNvbnN0IGRlc2NyaXB0aW9uX3NhZmZyb24gPVxuICAgICdTYWZmcm9uIGlzIGEgc3BpY2UgZGVyaXZlZCBmcm9tIHRoZSBmbG93ZXIuIFxcXG4gICAgVGhlIHRocmVhZHMgb2YgdGhlIGZsb3dlciBhcmUgY29sbGVjdGVkIGFuZCBkcmllZCB0byBiZSB1c2VkIG1haW5seSBhcyBhIFxcXG4gICAgc2Vhc29uaW5nIGFuZCBjb2xvdXJpbmcgYWdlbnQgaW4gZm9vZC4nO1xuICBjb25zdCBkZXNjcmlwdGlvbl92ZWdldGFyaWFuID1cbiAgICAnVmVnZXRhYmxlcyBjb250YWluIGltcG9ydGFudCB2aXRhbWlucyBhbmQgbWluZXJhbHMgZm9yIG91ciBib2R5LiBcXFxuICAgIE91ciByZXN0YXVyYW50IHNlcnZlIHNvdXRoIEluZGlhbiBjdWlzaW5lIG1hZGUgYnkgZnJlc2ggdmVnZXRhYmxlcy4gXFxcbiAgICBQbGVhc2UgdmlzaXQgdXMgdG8gZW5qb3kgaGVhbHRoeSBtZWFscyBhbmQgdGhlIGZsYXZvdXIgd2l0aCBzcGljZS4nO1xuXG4gIGNvbnN0IGNyZWF0ZSA9ICgpID0+IHtcbiAgICBjb25zdCBtYWluQ29udGFpbmVyID0gaHRtbC5jcmVhdGVFbGVtZW50KHsgdHlwZTogJ2RpdicsIGlkOiAnYWJvdXQnLCBjbGFzc2VzOiBbJ21haW4tY29udGVudHMnXSB9KTtcbiAgICBjb25zdCBoZWFkZXIgPSBodG1sLmNyZWF0ZUVsZW1lbnQoeyB0eXBlOiAnaDEnLCBjbGFzc2VzOiBbJ3RleHQtYWxpZ24tY2VudGVyJywgJ2gtdGl0bGUnXSwgdGV4dDogJ0Fib3V0IFVzJ30pO1xuICAgIGNvbnN0IHBPbmUgPSBodG1sLmNyZWF0ZUVsZW1lbnQoeyB0eXBlOiAncCcsIGNsYXNzZXM6IFsnZGVzY3JpcHRpb24nXSwgdGV4dDogZGVzY3JpcHRpb25fc2FmZnJvbn0pO1xuICAgIGNvbnN0IHBUd28gPSBodG1sLmNyZWF0ZUVsZW1lbnQoeyB0eXBlOiAncCcsIGNsYXNzZXM6IFsnZGVzY3JpcHRpb24nXSwgdGV4dDogZGVzY3JpcHRpb25fdmVnZXRhcmlhbn0pO1xuICAgIGNvbnN0IGluZm8gPSBodG1sLmNyZWF0ZUVsZW1lbnQoeyB0eXBlOiAnZGl2JywgY2xhc3NlczogWydhYm91dC1pbmZvJywgJ3doaXRlLXNwYWNlLXByZSddIH0pO1xuICAgIGNvbnN0IGFkZHJlc3NIZWFkZXIgPSBodG1sLmNyZWF0ZUVsZW1lbnQoeyB0eXBlOiAnc3BhbicsIGNsYXNzZXM6IFsndGl0bGUnXSwgdGV4dDogJ0FERFJFU1M6JyB9KTtcbiAgICBjb25zdCBhZGRyZXNzQm9keSA9IGh0bWwuY3JlYXRlRWxlbWVudCh7IHR5cGU6ICdzcGFuJywgdGV4dDogJ3h4eCwgVGFtaWwgTmFkdSwgSW5kaWFcXG4nIH0pO1xuICAgIGNvbnN0IGNvbnRhY3RIZWFkZXIgPSBodG1sLmNyZWF0ZUVsZW1lbnQoeyB0eXBlOiAnc3BhbicsIGNsYXNzZXM6IFsndGl0bGUnXSwgdGV4dDogJ0NPTlRBQ1Q6JyB9KTtcbiAgICBjb25zdCBjb250YWN0Qm9keSA9IGh0bWwuY3JlYXRlRWxlbWVudCh7IHR5cGU6ICdzcGFuJywgdGV4dDogJys5MS54eHh4Lnh4eHhcXG4nIH0pO1xuICAgIGNvbnN0IGN1aXNpbmVIZWFkZXIgPSBodG1sLmNyZWF0ZUVsZW1lbnQoeyB0eXBlOiAnc3BhbicsIGNsYXNzZXM6IFsndGl0bGUnXSwgdGV4dDogJ0NVSVNJTkU6JyB9KTtcbiAgICBjb25zdCBjdWlzaW5lQm9keSA9IGh0bWwuY3JlYXRlRWxlbWVudCh7IHR5cGU6ICdzcGFuJywgdGV4dDogJ1NvdXRoIEluZGlhblxcbicgfSk7XG4gICAgY29uc3QgdGltaW5nc0hlYWRlciA9IGh0bWwuY3JlYXRlRWxlbWVudCh7IHR5cGU6ICdzcGFuJywgY2xhc3NlczogWyd0aXRsZSddLCB0ZXh0OiAnVElNSU5HUzonIH0pO1xuICAgIGNvbnN0IHRpbWluZ3NCb2R5ID0gaHRtbC5jcmVhdGVFbGVtZW50KHsgdHlwZTogJ3NwYW4nLCB0ZXh0OiAnMDc6MDAgQU0gLSAyOjMwIFBNLCA0OjAwIFBNIC0gODozMCBQTVxcbicgfSk7XG4gICAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQocE9uZSk7XG4gICAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChwVHdvKTtcbiAgICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKGluZm8pO1xuICAgIGluZm8uYXBwZW5kQ2hpbGQoYWRkcmVzc0hlYWRlcik7XG4gICAgaW5mby5hcHBlbmRDaGlsZChhZGRyZXNzQm9keSk7XG4gICAgaW5mby5hcHBlbmRDaGlsZChjb250YWN0SGVhZGVyKTtcbiAgICBpbmZvLmFwcGVuZENoaWxkKGNvbnRhY3RCb2R5KTtcbiAgICBpbmZvLmFwcGVuZENoaWxkKGN1aXNpbmVIZWFkZXIpO1xuICAgIGluZm8uYXBwZW5kQ2hpbGQoY3Vpc2luZUJvZHkpO1xuICAgIGluZm8uYXBwZW5kQ2hpbGQodGltaW5nc0hlYWRlcik7XG4gICAgaW5mby5hcHBlbmRDaGlsZCh0aW1pbmdzQm9keSk7XG4gICAgcmV0dXJuIG1haW5Db250YWluZXI7XG4gIH1cbiAgcmV0dXJuIHsgY3JlYXRlIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBhYm91dDtcbiIsImltcG9ydCBodG1sIGZyb20gJy4vaHRtbC5qcydcblxuY29uc3QgY29udGFjdCA9ICgoKSA9PiB7XG4gIGNvbnN0IGNyZWF0ZSA9ICgpID0+IHtcbiAgICBjb25zdCBtYWluQ29udGFpbmVyID0gaHRtbC5jcmVhdGVFbGVtZW50KHsgdHlwZTogJ2RpdicsIGlkOiAnY29udGFjdCcsIHRleHQ6ICdjb250YWN0JyB9KTtcbiAgICByZXR1cm4gbWFpbkNvbnRhaW5lcjtcbiAgfVxuICByZXR1cm4geyBjcmVhdGUgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRhY3Q7XG4iLCJjb25zdCBodG1sID0gKCgpID0+IHtcbiAgY29uc3QgY3JlYXRlRWxlbWVudCA9ICh7dHlwZSwgaWQsIGNsYXNzZXMsIHRleHQsIHNyYywgYWx0fSkgPT4ge1xuICAgIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xuICAgIGlmIChpZCkge1xuICAgICAgaXRlbS5zZXRBdHRyaWJ1dGUoJ2lkJywgaWQpO1xuICAgIH1cbiAgICBpZiAoY2xhc3Nlcykge1xuICAgICAgY2xhc3Nlcy5mb3JFYWNoKG5hbWUgPT4gaXRlbS5jbGFzc0xpc3QuYWRkKG5hbWUpKTtcbiAgICB9XG4gICAgaWYgKHRleHQpIHtcbiAgICAgIGl0ZW0uaW5uZXJIVE1MID0gdGV4dDtcbiAgICB9XG4gICAgaWYgKHNyYykge1xuICAgICAgaXRlbS5zcmMgPSBzcmM7XG4gICAgfVxuICAgIGlmIChhbHQpIHtcbiAgICAgIGl0ZW0uYWx0ID0gYWx0O1xuICAgIH1cbiAgICByZXR1cm4gaXRlbTtcbiAgfTtcblxuICBjb25zdCBjcmVhdGVJbWFnZUVsZW1lbnQgPSAoeyBzcmMsIGFsdCB9KSA9PiB7XG4gICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuXG4gIH1cbiAgcmV0dXJuIHsgY3JlYXRlRWxlbWVudCB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgaHRtbDtcbiIsImltcG9ydCBuYXZUYXAgZnJvbSAnLi9uYXZfdGFwLmpzJztcbmltcG9ydCBhYm91dCBmcm9tICcuL2Fib3V0LmpzJztcbmltcG9ydCBtZW51IGZyb20gJy4vbWVudS5qcyc7XG5pbXBvcnQgY29udGFjdCBmcm9tICcuL2NvbnRhY3QuanMnO1xuXG5jb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGl2I2NvbnRlbnQnKTtcblxubWFpbi5hcHBlbmRDaGlsZChuYXZUYXAuY3JlYXRlKCkpO1xubWFpbi5hcHBlbmRDaGlsZChhYm91dC5jcmVhdGUoKSk7XG5tYWluLmFwcGVuZENoaWxkKG1lbnUuY3JlYXRlKCkpO1xubWFpbi5hcHBlbmRDaGlsZChjb250YWN0LmNyZWF0ZSgpKTtcblxubmF2VGFwLmFkZENsaWNrcygpO1xuIiwiaW1wb3J0IGh0bWwgZnJvbSAnLi9odG1sLmpzJ1xuXG5jb25zdCBtZW51ID0gKCgpID0+IHtcbiAgY29uc3QgY3JlYXRlID0gKCkgPT4ge1xuICAgIGNvbnN0IG1haW5Db250YWluZXIgPSBodG1sLmNyZWF0ZUVsZW1lbnQoeyB0eXBlOiAnZGl2JywgaWQ6ICdtZW51JywgdGV4dDogJ21lbnUnIH0pO1xuICAgIGNvbnN0IHNldE1lbnUgPSBodG1sLmNyZWF0ZUVsZW1lbnQoeyB0eXBlOiAnZGl2JywgY2xhc3NlczogWydzZXQtbWVudScsICdmb29kLWl0ZW1zJywgJ2QtZmxleCcsICdmbGV4LXdyYXAnXX0pO1xuICAgIGNvbnN0IHNldE1lbnVIZWFkZXIgPSBodG1sLmNyZWF0ZUVsZW1lbnQoeyB0eXBlOiAnaDEnLCBjbGFzc2VzOiBbJ2gtdGl0bGUnXSwgdGV4dDogJ01lYWwnfSk7XG4gICAgLy8gY29uc3Qgc2V0TWVudWl0ZW1zID0gW107XG4gICAgbGV0IGZvb2RJdGVtID0gaHRtbC5jcmVhdGVFbGVtZW50KHsgdHlwZTogJ2RpdicsIGNsYXNzZXM6IFsnZm9vZC1pdGVtJ119KTtcbiAgICBsZXQgZm9vZEltYWdlLCBmb29kQm9keTtcbiAgICBmb29kSW1hZ2UgPSBodG1sLmNyZWF0ZUVsZW1lbnQoeyB0eXBlOiAnaW1nJywgc3JjOiAnLi8uLi9hc3NldHMvaW1hZ2VzL2Rvc2FfMzIwLndlYnAnLCBhbHRlcjogJ0Rvc2EgaW1hZ2UnIH0pO1xuICAgIGZvb2RCb2R5ID0gaHRtbC5jcmVhdGVFbGVtZW50KHsgdHlwZTogJ2RpdicsIGNsYXNzZXM6IFsnbWVudS1kZXNjcmlwdGlvbiddLCB0ZXh0OiAnRG9zYWkgKCsgc2FtYmFyLCBjaHV0bmV5KSBScy42MCd9KTtcbiAgICBmb29kSXRlbS5hcHBlbmRDaGlsZChmb29kSW1hZ2UpO1xuICAgIGZvb2RJdGVtLmFwcGVuZENoaWxkKGZvb2RCb2R5KTtcbiAgICBzZXRNZW51LmFwcGVuZENoaWxkKHNldE1lbnVIZWFkZXIpO1xuICAgIHNldE1lbnUuYXBwZW5kQ2hpbGQoZm9vZEl0ZW0pO1xuICAgIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQoc2V0TWVudSk7XG4gICAgLy8gc2V0TWVudWl0ZW1zIDw8IGZvb2RJdGVtO1xuICAgIHJldHVybiBtYWluQ29udGFpbmVyO1xuICB9XG4gIHJldHVybiB7IGNyZWF0ZSB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgbWVudTtcbiIsImltcG9ydCBodG1sIGZyb20gJy4vaHRtbC5qcydcblxuY29uc3QgbmF2VGFwID0gKCgpID0+IHtcblxuICBjb25zdCBjcmVhdGUgPSAoKSA9PiB7XG4gICAgY29uc3QgdGFwcyA9IGh0bWwuY3JlYXRlRWxlbWVudCh7IHR5cGU6ICd1bCcsIGNsYXNzZXM6IFsnbmF2LXRhcCcsICdsaXN0LXN0eWxlLW5vbmUnXSB9KTtcbiAgICBjb25zdCB0YXBBYm91dCA9IGh0bWwuY3JlYXRlRWxlbWVudCh7IHR5cGU6ICdsaScsIGNsYXNzZXM6IFsndGFwLWFib3V0J10sIHRleHQ6ICdhYm91dCcgfSk7XG4gICAgY29uc3QgdGFwTWVudSA9IGh0bWwuY3JlYXRlRWxlbWVudCh7IHR5cGU6ICdsaScsIGNsYXNzZXM6IFsndGFwLW1lbnUnXSwgdGV4dDogJ21lbnUnIH0pO1xuICAgIGNvbnN0IHRhcENvbnRhY3QgPSBodG1sLmNyZWF0ZUVsZW1lbnQoeyB0eXBlOiAnbGknLCBjbGFzc2VzOiBbJ3RhcC1jb250YWN0J10sIHRleHQ6ICdjb250YWN0JyB9KTtcbiAgICBjb25zdCB0YXBSZXNlcnZlZCA9IGh0bWwuY3JlYXRlRWxlbWVudCh7IHR5cGU6ICdsaScsIGNsYXNzZXM6IFsndGFwLXJlc2VydmVkJ10gfSk7XG4gICAgdGFwcy5hcHBlbmRDaGlsZCh0YXBBYm91dCk7XG4gICAgdGFwcy5hcHBlbmRDaGlsZCh0YXBNZW51KTtcbiAgICB0YXBzLmFwcGVuZENoaWxkKHRhcENvbnRhY3QpO1xuICAgIHRhcHMuYXBwZW5kQ2hpbGQodGFwUmVzZXJ2ZWQpO1xuICAgIHJldHVybiB0YXBzO1xuICB9O1xuXG4gIGNvbnN0IHRvZ2dsZURpc3BsYXkgPSAodGFwcywgY2hvaWNlKSA9PiB7XG4gICAgdGFwcy5mb3JFYWNoKHRhcCA9PiB7XG4gICAgICBpZiAodGFwID09IGNob2ljZSkge1xuICAgICAgICB0YXAuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0YXAuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgY29uc3QgYWRkQ2xpY2tzID0gKCkgPT4ge1xuICAgIGNvbnN0IHBhcnRpYWxBYm91dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhYm91dCcpO1xuICAgIGNvbnN0IHBhcnRpYWxNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21lbnUnKTtcbiAgICBjb25zdCBwYXJ0aWFsQ29udGFjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250YWN0Jyk7XG5cbiAgICBjb25zdCBvcGVuQWJvdXQgPSB0b2dnbGVEaXNwbGF5KFtwYXJ0aWFsQWJvdXQsIHBhcnRpYWxNZW51LCBwYXJ0aWFsQ29udGFjdF0sIHBhcnRpYWxBYm91dCk7XG4gICAgY29uc3Qgb3Blbk1lbnUgPSB0b2dnbGVEaXNwbGF5KFtwYXJ0aWFsQWJvdXQsIHBhcnRpYWxNZW51LCBwYXJ0aWFsQ29udGFjdF0sIHBhcnRpYWxNZW51KTtcbiAgICBjb25zdCBvcGVuQ29udGFjdCA9IHRvZ2dsZURpc3BsYXkoW3BhcnRpYWxBYm91dCwgcGFydGlhbE1lbnUsIHBhcnRpYWxDb250YWN0XSwgcGFydGlhbENvbnRhY3QpO1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhcC1hYm91dCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb3BlbkFib3V0KTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFwLW1lbnUnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9wZW5NZW51KTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFwLWNvbnRhY3QnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9wZW5Db250YWN0KTtcbiAgICBvcGVuQWJvdXQoKTtcbiAgfVxuXG4gIHJldHVybiB7IGNyZWF0ZSwgYWRkQ2xpY2tzIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBuYXZUYXA7XG4iXSwic291cmNlUm9vdCI6IiJ9