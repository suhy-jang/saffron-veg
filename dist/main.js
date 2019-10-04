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
/* harmony import */ var _html_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./html.js */ "./src/html.js");





var main = document.querySelector('div#content');
var header = _html_js__WEBPACK_IMPORTED_MODULE_4__["default"].createElement({
  type: 'div',
  classes: ['restaurant-name', 'text-stroke-black'],
  text: 'Saffron Veg'
});
main.appendChild(header);
main.appendChild(_nav_tap_js__WEBPACK_IMPORTED_MODULE_0__["default"].create());
main.appendChild(_about_js__WEBPACK_IMPORTED_MODULE_1__["default"].create());
main.appendChild(_menu_js__WEBPACK_IMPORTED_MODULE_2__["default"].create());
main.appendChild(_contact_js__WEBPACK_IMPORTED_MODULE_3__["default"].create());
var footer = _html_js__WEBPACK_IMPORTED_MODULE_4__["default"].createElement({
  type: 'div',
  classes: ['copyright'],
  text: '© Copyright 2019 Saffron veg. All rights reserved.'
});
main.appendChild(footer);
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
  var menuItems = {
    setMenu: {
      dosa: {
        imgSrc: './../assets/images/dosa_320.webp',
        displayName: 'Dosai (+ sambar, chutney)',
        price: 'Rs.60'
      },
      upma: {
        imgSrc: './../assets/images/upma_320.webp',
        displayName: 'Upma (+ sambar, chutney)',
        price: 'Rs.60'
      },
      idly: {
        imgSrc: './../assets/images/idly_320.webp',
        displayName: 'Hot Idli (+ sambar, chutney, \n' + 'breakfast only)',
        price: 'Rs.60'
      },
      bisi_bele: {
        imgSrc: './../assets/images/bisibele_bath_320.webp',
        displayName: 'Bisi bele (+ chips)',
        price: 'Rs.80'
      }
    }
  };

  var removeSideDish = function removeSideDish(name) {
    return name.split(' (')[0];
  };

  var createFoodItem = function createFoodItem(item) {
    var foodItem = _html_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement({
      type: 'div',
      classes: ['food-item']
    });
    var imageAlt = "#{removeSideDish(item.displayName)} image";
    var foodImage = _html_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement({
      type: 'img',
      src: item.imgSrc,
      alt: imageAlt
    });
    var foodBody = _html_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement({
      type: 'div',
      classes: ['menu-description'],
      text: "".concat(item.displayName, " ").concat(item.price)
    });
    foodItem.appendChild(foodImage);
    foodItem.appendChild(foodBody);
    return foodItem;
  };

  var create = function create() {
    var mainContainer = _html_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement({
      type: 'div',
      id: 'menu'
    });
    var setMenuContainer = _html_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement({
      type: 'div',
      classes: ['set-menu', 'food-items', 'd-flex', 'flex-wrap']
    });
    var setMenuHeader = _html_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement({
      type: 'h1',
      classes: ['h-title'],
      text: 'Meal'
    });
    setMenuContainer.appendChild(setMenuHeader);
    Object.values(menuItems.setMenu).forEach(function (item) {
      return setMenuContainer.appendChild(createFoodItem(item));
    });
    mainContainer.appendChild(setMenuContainer);
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
      return p.obj = document.querySelector("#".concat(p.name));
    });
    partials.forEach(function (p) {
      var selector = document.querySelector(".tap-".concat(p.name));
      selector.addEventListener('click', function () {
        return togglePartial(partials, p.name);
      });
    });
    togglePartial(partials, partials[1].name);
  };

  return {
    create: create,
    addClicks: addClicks
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (navTap);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fib3V0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9odG1sLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbmF2X3RhcC5qcyJdLCJuYW1lcyI6WyJhYm91dCIsImRlc2NyaXB0aW9uU2FmZnJvbiIsImRlc2NyaXB0aW9uVmVnZXRhcmlhbiIsIndyaXRlRGVzY3JpcHRpb25zIiwiaHRtbCIsImNyZWF0ZUVsZW1lbnQiLCJ0eXBlIiwiY2xhc3NlcyIsInRleHQiLCJ3cml0ZUluZm9zIiwiY3JlYXRlIiwibWFpbkNvbnRhaW5lciIsImlkIiwiaW5mb0NvbnRhaW5lciIsImZvckVhY2giLCJpbmZvIiwiYXBwZW5kQ2hpbGQiLCJkZXNjcmlwdGlvbiIsImNvbnRhY3QiLCJzcmMiLCJhbHQiLCJpdGVtIiwiZG9jdW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJuYW1lIiwiY2xhc3NMaXN0IiwiYWRkIiwiaW5uZXJIVE1MIiwibWFpbiIsInF1ZXJ5U2VsZWN0b3IiLCJoZWFkZXIiLCJuYXZUYXAiLCJtZW51IiwiZm9vdGVyIiwiYWRkQ2xpY2tzIiwibWVudUl0ZW1zIiwic2V0TWVudSIsImRvc2EiLCJpbWdTcmMiLCJkaXNwbGF5TmFtZSIsInByaWNlIiwidXBtYSIsImlkbHkiLCJiaXNpX2JlbGUiLCJyZW1vdmVTaWRlRGlzaCIsInNwbGl0IiwiY3JlYXRlRm9vZEl0ZW0iLCJmb29kSXRlbSIsImltYWdlQWx0IiwiZm9vZEltYWdlIiwiZm9vZEJvZHkiLCJzZXRNZW51Q29udGFpbmVyIiwic2V0TWVudUhlYWRlciIsIk9iamVjdCIsInZhbHVlcyIsInRhcHMiLCJ0YXBBYm91dCIsInRhcE1lbnUiLCJ0YXBDb250YWN0IiwidGFwUmVzZXJ2ZWQiLCJ0b2dnbGVQYXJ0aWFsIiwicGFydGlhbEdyb3VwIiwiY2hvaWNlTmFtZSIsInBhcnRpYWwiLCJvYmoiLCJzdHlsZSIsImRpc3BsYXkiLCJwYXJ0aWFscyIsInB1c2giLCJwIiwic2VsZWN0b3IiLCJhZGRFdmVudExpc3RlbmVyIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTs7QUFFQSxJQUFNQSxLQUFLLEdBQUksWUFBTTtBQUNuQixNQUFNQyxrQkFBa0IsR0FBRyxnREFDdkIsMEVBRHVCLEdBRXZCLHdDQUZKO0FBSUEsTUFBTUMscUJBQXFCLEdBQUcscUVBQzFCLHFFQUQwQixHQUUxQixvRUFGSjs7QUFJQSxNQUFNQyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CO0FBQUEsV0FBTSxDQUM5QkMsZ0RBQUksQ0FBQ0MsYUFBTCxDQUFtQjtBQUFFQyxVQUFJLEVBQUUsSUFBUjtBQUFjQyxhQUFPLEVBQUUsQ0FBQyxtQkFB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LEVBQWpCO0FBQ0E4QyxjQUFRLENBQUNDLGdCQUFULENBQTBCLE9BQTFCLEVBQW1DO0FBQUEsZUFBTVgsYUFBYSxDQUFDTyxRQUFELEVBQVdFLENBQUMsQ0FBQzdDLElBQWIsQ0FBbkI7QUFBQSxPQUFuQztBQUNELEtBSEQ7QUFJQW9DLGlCQUFhLENBQUNPLFFBQUQsRUFBV0EsUUFBUSxDQUFDLENBQUQsQ0FBUixDQUFZM0MsSUFBdkIsQ0FBYjtBQUNELEdBVEQ7O0FBV0EsU0FBTztBQUFFZCxVQUFNLEVBQU5BLE1BQUY7QUFBVXdCLGFBQVMsRUFBVEE7QUFBVixHQUFQO0FBQ0QsQ0FwQ2MsRUFBZjs7QUFzQ2VILHFFQUFmLEUiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IGh0bWwgZnJvbSAnLi9odG1sLmpzJztcblxuY29uc3QgYWJvdXQgPSAoKCkgPT4ge1xuICBjb25zdCBkZXNjcmlwdGlvblNhZmZyb24gPSAnU2FmZnJvbiBpcyBhIHNwaWNlIGRlcml2ZWQgZnJvbSB0aGUgZmxvd2VyLidcbiAgICArICdUaGUgdGhyZWFkcyBvZiB0aGUgZmxvd2VyIGFyZSBjb2xsZWN0ZWQgYW5kIGRyaWVkIHRvIGJlIHVzZWQgbWFpbmx5IGFzIGEnXG4gICAgKyAnc2Vhc29uaW5nIGFuZCBjb2xvdXJpbmcgYWdlbnQgaW4gZm9vZC4nO1xuXG4gIGNvbnN0IGRlc2NyaXB0aW9uVmVnZXRhcmlhbiA9ICdWZWdldGFibGVzIGNvbnRhaW4gaW1wb3J0YW50IHZpdGFtaW5zIGFuZCBtaW5lcmFscyBmb3Igb3VyIGJvZHkuJ1xuICAgICsgJ091ciByZXN0YXVyYW50IHNlcnZlIHNvdXRoIEluZGlhbiBjdWlzaW5lIG1hZGUgYnkgZnJlc2ggdmVnZXRhYmxlcy4nXG4gICAgKyAnUGxlYXNlIHZpc2l0IHVzIHRvIGVuam95IGhlYWx0aHkgbWVhbHMgYW5kIHRoZSBmbGF2b3VyIHdpdGggc3BpY2UuJztcblxuICBjb25zdCB3cml0ZURlc2NyaXB0aW9ucyA9ICgpID0+IFtcbiAgICBodG1sLmNyZWF0ZUVsZW1lbnQoeyB0eXBlOiAnaDEnLCBjbGFzc2VzOiBbJ3RleHQtYWxpZ24tY2VudGVyJywgJ2gtdGl0bGUnXSwgdGV4dDogJ0Fib3V0IFVzJyB9KSxcbiAgICBodG1sLmNyZWF0ZUVsZW1lbnQoeyB0eXBlOiAncCcsIGNsYXNzZXM6IFsnZGVzY3JpcHRpb24nXSwgdGV4dDogZGVzY3JpcHRpb25TYWZmcm9uIH0pLFxuICAgIGh0bWwuY3JlYXRlRWxlbWVudCh7IHR5cGU6ICdwJywgY2xhc3NlczogWydkZXNjcmlwdGlvbiddLCB0ZXh0OiBkZXNjcmlwdGlvblZlZ2V0YXJpYW4gfSksXG4gIF07XG5cbiAgY29uc3Qgd3JpdGVJbmZvcyA9ICgpID0+IFtcbiAgICBodG1sLmNyZWF0ZUVsZW1lbnQoeyB0eXBlOiAnc3BhbicsIGNsYXNzZXM6IFsndGl0bGUnXSwgdGV4dDogJ0FERFJFU1M6JyB9KSxcbiAgICBodG1sLmNyZWF0ZUVsZW1lbnQoeyB0eXBlOiAnc3BhbicsIHRleHQ6ICd4eHgsIFRhbWlsIE5hZHUsIEluZGlhXFxuJyB9KSxcbiAgICBodG1sLmNyZWF0ZUVsZW1lbnQoeyB0eXBlOiAnc3BhbicsIGNsYXNzZXM6IFsndGl0bGUnXSwgdGV4dDogJ0NPTlRBQ1Q6JyB9KSxcbiAgICBodG1sLmNyZWF0ZUVsZW1lbnQoeyB0eXBlOiAnc3BhbicsIHRleHQ6ICcrOTEueHh4eC54eHh4XFxuJyB9KSxcbiAgICBodG1sLmNyZWF0ZUVsZW1lbnQoeyB0eXBlOiAnc3BhbicsIGNsYXNzZXM6IFsndGl0bGUnXSwgdGV4dDogJ0NVSVNJTkU6JyB9KSxcbiAgICBodG1sLmNyZWF0ZUVsZW1lbnQoeyB0eXBlOiAnc3BhbicsIHRleHQ6ICdTb3V0aCBJbmRpYW5cXG4nIH0pLFxuICAgIGh0bWwuY3JlYXRlRWxlbWVudCh7IHR5cGU6ICdzcGFuJywgY2xhc3NlczogWyd0aXRsZSddLCB0ZXh0OiAnVElNSU5HUzonIH0pLFxuICAgIGh0bWwuY3JlYXRlRWxlbWVudCh7IHR5cGU6ICdzcGFuJywgdGV4dDogJzA3OjAwIEFNIC0gMjozMCBQTSwgNDowMCBQTSAtIDg6MzAgUE1cXG4nIH0pLFxuICBdO1xuXG4gIGNvbnN0IGNyZWF0ZSA9ICgpID0+IHtcbiAgICBjb25zdCBtYWluQ29udGFpbmVyID0gaHRtbC5jcmVhdGVFbGVtZW50KHsgdHlwZTogJ2RpdicsIGlkOiAnYWJvdXQnLCBjbGFzc2VzOiBbJ21haW4tY29udGVudHMnXSB9KTtcbiAgICBjb25zdCBpbmZvQ29udGFpbmVyID0gaHRtbC5jcmVhdGVFbGVtZW50KHsgdHlwZTogJ2RpdicsIGNsYXNzZXM6IFsnYWJvdXQtaW5mbycsICd3aGl0ZS1zcGFjZS1wcmUnXSB9KTtcbiAgICB3cml0ZUluZm9zKCkuZm9yRWFjaChpbmZvID0+IGluZm9Db250YWluZXIuYXBwZW5kQ2hpbGQoaW5mbykpO1xuICAgIHdyaXRlRGVzY3JpcHRpb25zKCkuZm9yRWFjaChkZXNjcmlwdGlvbiA9PiBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKSk7XG4gICAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChpbmZvQ29udGFpbmVyKTtcbiAgICByZXR1cm4gbWFpbkNvbnRhaW5lcjtcbiAgfTtcbiAgcmV0dXJuIHsgY3JlYXRlIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBhYm91dDtcbiIsImltcG9ydCBodG1sIGZyb20gJy4vaHRtbC5qcyc7XG5cbmNvbnN0IGNvbnRhY3QgPSAoKCkgPT4ge1xuICBjb25zdCBjcmVhdGUgPSAoKSA9PiB7XG4gICAgY29uc3QgbWFpbkNvbnRhaW5lciA9IGh0bWwuY3JlYXRlRWxlbWVudCh7IHR5cGU6ICdkaXYnLCBpZDogJ2NvbnRhY3QnLCB0ZXh0OiAnY29udGFjdCcgfSk7XG4gICAgcmV0dXJuIG1haW5Db250YWluZXI7XG4gIH07XG4gIHJldHVybiB7IGNyZWF0ZSB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgY29udGFjdDtcbiIsImNvbnN0IGh0bWwgPSAoKCkgPT4ge1xuICBjb25zdCBjcmVhdGVFbGVtZW50ID0gKHtcbiAgICB0eXBlLCBpZCwgY2xhc3NlcywgdGV4dCwgc3JjLCBhbHQsXG4gIH0pID0+IHtcbiAgICBjb25zdCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcbiAgICBpZiAoaWQpIGl0ZW0uc2V0QXR0cmlidXRlKCdpZCcsIGlkKTtcbiAgICBpZiAoY2xhc3NlcykgY2xhc3Nlcy5mb3JFYWNoKG5hbWUgPT4gaXRlbS5jbGFzc0xpc3QuYWRkKG5hbWUpKTtcbiAgICBpZiAodGV4dCkgaXRlbS5pbm5lckhUTUwgPSB0ZXh0O1xuICAgIGlmIChzcmMpIGl0ZW0uc3JjID0gc3JjO1xuICAgIGlmIChhbHQpIGl0ZW0uYWx0ID0gYWx0O1xuICAgIHJldHVybiBpdGVtO1xuICB9O1xuXG4gIHJldHVybiB7IGNyZWF0ZUVsZW1lbnQgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGh0bWw7XG4iLCJpbXBvcnQgbmF2VGFwIGZyb20gJy4vbmF2X3RhcC5qcyc7XG5pbXBvcnQgYWJvdXQgZnJvbSAnLi9hYm91dC5qcyc7XG5pbXBvcnQgbWVudSBmcm9tICcuL21lbnUuanMnO1xuaW1wb3J0IGNvbnRhY3QgZnJvbSAnLi9jb250YWN0LmpzJztcbmltcG9ydCBodG1sIGZyb20gJy4vaHRtbC5qcyc7XG5cbmNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXYjY29udGVudCcpO1xuXG5jb25zdCBoZWFkZXIgPSBodG1sLmNyZWF0ZUVsZW1lbnQoeyB0eXBlOiAnZGl2JyxcbiAgY2xhc3NlczogWydyZXN0YXVyYW50LW5hbWUnLCAndGV4dC1zdHJva2UtYmxhY2snXSwgdGV4dDogJ1NhZmZyb24gVmVnJyB9KTtcbm1haW4uYXBwZW5kQ2hpbGQoaGVhZGVyKTtcblxubWFpbi5hcHBlbmRDaGlsZChuYXZUYXAuY3JlYXRlKCkpO1xubWFpbi5hcHBlbmRDaGlsZChhYm91dC5jcmVhdGUoKSk7XG5tYWluLmFwcGVuZENoaWxkKG1lbnUuY3JlYXRlKCkpO1xubWFpbi5hcHBlbmRDaGlsZChjb250YWN0LmNyZWF0ZSgpKTtcblxuY29uc3QgZm9vdGVyID0gaHRtbC5jcmVhdGVFbGVtZW50KHsgdHlwZTogJ2RpdicsIGNsYXNzZXM6IFsnY29weXJpZ2h0J10sXG4gIHRleHQ6ICfCqSBDb3B5cmlnaHQgMjAxOSBTYWZmcm9uIHZlZy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4nIH0pO1xubWFpbi5hcHBlbmRDaGlsZChmb290ZXIpO1xuXG5uYXZUYXAuYWRkQ2xpY2tzKCk7XG4iLCJpbXBvcnQgaHRtbCBmcm9tICcuL2h0bWwuanMnO1xuXG5jb25zdCBtZW51ID0gKCgpID0+IHtcbiAgY29uc3QgbWVudUl0ZW1zID0ge1xuICAgIHNldE1lbnU6IHtcbiAgICAgIGRvc2E6IHtcbiAgICAgICAgaW1nU3JjOiAnLi8uLi9hc3NldHMvaW1hZ2VzL2Rvc2FfMzIwLndlYnAnLFxuICAgICAgICBkaXNwbGF5TmFtZTogJ0Rvc2FpICgrIHNhbWJhciwgY2h1dG5leSknLFxuICAgICAgICBwcmljZTogJ1JzLjYwJyxcbiAgICAgIH0sXG4gICAgICB1cG1hOiB7XG4gICAgICAgIGltZ1NyYzogJy4vLi4vYXNzZXRzL2ltYWdlcy91cG1hXzMyMC53ZWJwJyxcbiAgICAgICAgZGlzcGxheU5hbWU6ICdVcG1hICgrIHNhbWJhciwgY2h1dG5leSknLFxuICAgICAgICBwcmljZTogJ1JzLjYwJyxcbiAgICAgIH0sXG4gICAgICBpZGx5OiB7XG4gICAgICAgIGltZ1NyYzogJy4vLi4vYXNzZXRzL2ltYWdlcy9pZGx5XzMyMC53ZWJwJyxcbiAgICAgICAgZGlzcGxheU5hbWU6ICdIb3QgSWRsaSAoKyBzYW1iYXIsIGNodXRuZXksIFxcbicgKyAnYnJlYWtmYXN0IG9ubHkpJyxcbiAgICAgICAgcHJpY2U6ICdScy42MCcsXG4gICAgICB9LFxuICAgICAgYmlzaV9iZWxlOiB7XG4gICAgICAgIGltZ1NyYzogJy4vLi4vYXNzZXRzL2ltYWdlcy9iaXNpYmVsZV9iYXRoXzMyMC53ZWJwJyxcbiAgICAgICAgZGlzcGxheU5hbWU6ICdCaXNpIGJlbGUgKCsgY2hpcHMpJyxcbiAgICAgICAgcHJpY2U6ICdScy44MCcsXG4gICAgICB9LFxuICAgIH0sXG5cbiAgfTtcblxuICBjb25zdCByZW1vdmVTaWRlRGlzaCA9IG5hbWUgPT4gbmFtZS5zcGxpdCgnICgnKVswXTtcblxuICBjb25zdCBjcmVhdGVGb29kSXRlbSA9IGl0ZW0gPT4ge1xuICAgIGNvbnN0IGZvb2RJdGVtID0gaHRtbC5jcmVhdGVFbGVtZW50KHsgdHlwZTogJ2RpdicsIGNsYXNzZXM6IFsnZm9vZC1pdGVtJ10gfSk7XG4gICAgY29uc3QgaW1hZ2VBbHQgPSBgI3tyZW1vdmVTaWRlRGlzaChpdGVtLmRpc3BsYXlOYW1lKX0gaW1hZ2VgO1xuICAgIGNvbnN0IGZvb2RJbWFnZSA9IGh0bWwuY3JlYXRlRWxlbWVudCh7IHR5cGU6ICdpbWcnLCBzcmM6IGl0ZW0uaW1nU3JjLCBhbHQ6IGltYWdlQWx0IH0pO1xuICAgIGNvbnN0IGZvb2RCb2R5ID0gaHRtbC5jcmVhdGVFbGVtZW50KHsgdHlwZTogJ2RpdicsIGNsYXNzZXM6IFsnbWVudS1kZXNjcmlwdGlvbiddLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogYCR7aXRlbS5kaXNwbGF5TmFtZX0gJHtpdGVtLnByaWNlfWAgfSk7XG4gICAgZm9vZEl0ZW0uYXBwZW5kQ2hpbGQoZm9vZEltYWdlKTtcbiAgICBmb29kSXRlbS5hcHBlbmRDaGlsZChmb29kQm9keSk7XG4gICAgcmV0dXJuIGZvb2RJdGVtO1xuICB9XG5cbiAgY29uc3QgY3JlYXRlID0gKCkgPT4ge1xuICAgIGNvbnN0IG1haW5Db250YWluZXIgPSBodG1sLmNyZWF0ZUVsZW1lbnQoeyB0eXBlOiAnZGl2JywgaWQ6ICdtZW51JyB9KTtcbiAgICBjb25zdCBzZXRNZW51Q29udGFpbmVyID0gaHRtbC5jcmVhdGVFbGVtZW50KHsgdHlwZTogJ2RpdicsIGNsYXNzZXM6IFsnc2V0LW1lbnUnLCAnZm9vZC1pdGVtcycsICdkLWZsZXgnLCAnZmxleC13cmFwJ10gfSk7XG5cbiAgICBjb25zdCBzZXRNZW51SGVhZGVyID0gaHRtbC5jcmVhdGVFbGVtZW50KHsgdHlwZTogJ2gxJywgY2xhc3NlczogWydoLXRpdGxlJ10sIHRleHQ6ICdNZWFsJyB9KTtcbiAgICBzZXRNZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKHNldE1lbnVIZWFkZXIpO1xuICAgIE9iamVjdC52YWx1ZXMobWVudUl0ZW1zLnNldE1lbnUpLmZvckVhY2goaXRlbSA9PiBzZXRNZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUZvb2RJdGVtKGl0ZW0pKSk7XG4gICAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChzZXRNZW51Q29udGFpbmVyKTtcbiAgICByZXR1cm4gbWFpbkNvbnRhaW5lcjtcbiAgfTtcbiAgcmV0dXJuIHsgY3JlYXRlIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBtZW51O1xuIiwiaW1wb3J0IGh0bWwgZnJvbSAnLi9odG1sLmpzJ1xuXG5jb25zdCBuYXZUYXAgPSAoKCkgPT4ge1xuICBjb25zdCBjcmVhdGUgPSAoKSA9PiB7XG4gICAgY29uc3QgdGFwcyA9IGh0bWwuY3JlYXRlRWxlbWVudCh7IHR5cGU6ICd1bCcsIGNsYXNzZXM6IFsnbmF2LXRhcCcsICdsaXN0LXN0eWxlLW5vbmUnXSB9KTtcbiAgICBjb25zdCB0YXBBYm91dCA9IGh0bWwuY3JlYXRlRWxlbWVudCh7IHR5cGU6ICdsaScsIGNsYXNzZXM6IFsndGFwLWFib3V0J10sIHRleHQ6ICdhYm91dCcgfSk7XG4gICAgY29uc3QgdGFwTWVudSA9IGh0bWwuY3JlYXRlRWxlbWVudCh7IHR5cGU6ICdsaScsIGNsYXNzZXM6IFsndGFwLW1lbnUnXSwgdGV4dDogJ21lbnUnIH0pO1xuICAgIGNvbnN0IHRhcENvbnRhY3QgPSBodG1sLmNyZWF0ZUVsZW1lbnQoeyB0eXBlOiAnbGknLCBjbGFzc2VzOiBbJ3RhcC1jb250YWN0J10sIHRleHQ6ICdjb250YWN0JyB9KTtcbiAgICBjb25zdCB0YXBSZXNlcnZlZCA9IGh0bWwuY3JlYXRlRWxlbWVudCh7IHR5cGU6ICdsaScsIGNsYXNzZXM6IFsndGFwLXJlc2VydmVkJ10gfSk7XG4gICAgdGFwcy5hcHBlbmRDaGlsZCh0YXBBYm91dCk7XG4gICAgdGFwcy5hcHBlbmRDaGlsZCh0YXBNZW51KTtcbiAgICB0YXBzLmFwcGVuZENoaWxkKHRhcENvbnRhY3QpO1xuICAgIHRhcHMuYXBwZW5kQ2hpbGQodGFwUmVzZXJ2ZWQpO1xuICAgIHJldHVybiB0YXBzO1xuICB9O1xuXG4gIGNvbnN0IHRvZ2dsZVBhcnRpYWwgPSAocGFydGlhbEdyb3VwLCBjaG9pY2VOYW1lKSA9PiB7XG4gICAgcGFydGlhbEdyb3VwLmZvckVhY2gocGFydGlhbCA9PiB7XG4gICAgICBpZiAocGFydGlhbC5uYW1lID09IGNob2ljZU5hbWUpIHtcbiAgICAgICAgcGFydGlhbC5vYmouc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXJ0aWFsLm9iai5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBjb25zdCBhZGRDbGlja3MgPSAoKSA9PiB7XG4gICAgbGV0IHBhcnRpYWxzID0gW107XG4gICAgWydhYm91dCcsICdtZW51JywgJ2NvbnRhY3QnXS5mb3JFYWNoKG5hbWUgPT4gcGFydGlhbHMucHVzaCh7IG5hbWU6IG5hbWUgfSkpXG4gICAgcGFydGlhbHMuZm9yRWFjaChwID0+IHAub2JqID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7cC5uYW1lfWApKTtcbiAgICBwYXJ0aWFscy5mb3JFYWNoKHAgPT4ge1xuICAgICAgY29uc3Qgc2VsZWN0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAudGFwLSR7cC5uYW1lfWApO1xuICAgICAgc2VsZWN0b3IuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0b2dnbGVQYXJ0aWFsKHBhcnRpYWxzLCBwLm5hbWUpKTtcbiAgICB9KTtcbiAgICB0b2dnbGVQYXJ0aWFsKHBhcnRpYWxzLCBwYXJ0aWFsc1sxXS5uYW1lKTtcbiAgfVxuXG4gIHJldHVybiB7IGNyZWF0ZSwgYWRkQ2xpY2tzIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBuYXZUYXA7XG4iXSwic291cmNlUm9vdCI6IiJ9