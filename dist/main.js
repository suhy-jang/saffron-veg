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
      classes: 'text-align-center h-title',
      text: 'About Us'
    }), _html_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement({
      type: 'p',
      classes: 'description',
      text: descriptionSaffron
    }), _html_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement({
      type: 'p',
      classes: 'description',
      text: descriptionVegetarian
    })];
  };

  var writeInfos = function writeInfos() {
    return [_html_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement({
      type: 'span',
      classes: 'title',
      text: 'ADDRESS:'
    }), _html_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement({
      type: 'span',
      text: 'xxx, Tamil Nadu, India\n'
    }), _html_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement({
      type: 'span',
      classes: 'title',
      text: 'CONTACT:'
    }), _html_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement({
      type: 'span',
      text: '+91.xxxx.xxxx\n'
    }), _html_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement({
      type: 'span',
      classes: 'title',
      text: 'CUISINE:'
    }), _html_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement({
      type: 'span',
      text: 'South Indian\n'
    }), _html_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement({
      type: 'span',
      classes: 'title',
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
      classes: 'main-contents'
    });
    var infoContainer = _html_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement({
      type: 'div',
      classes: 'about-info white-space-pre'
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
    if (classes) classes.split(' ').forEach(function (name) {
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
  classes: 'restaurant-name text-stroke-black',
  text: 'Saffron Veg'
});
main.appendChild(header);
main.appendChild(_nav_tap_js__WEBPACK_IMPORTED_MODULE_0__["default"].create());
main.appendChild(_about_js__WEBPACK_IMPORTED_MODULE_1__["default"].create());
main.appendChild(_menu_js__WEBPACK_IMPORTED_MODULE_2__["default"].create());
main.appendChild(_contact_js__WEBPACK_IMPORTED_MODULE_3__["default"].create());
var footer = _html_js__WEBPACK_IMPORTED_MODULE_4__["default"].createElement({
  type: 'div',
  classes: 'copyright',
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
        displayName: 'Hot Idli (+ sambar, chutney, breakfast only)',
        price: 'Rs.60'
      },
      bisiBele: {
        imgSrc: './../assets/images/bisibele_bath_320.webp',
        displayName: 'Bisi bele (+ chips)',
        price: 'Rs.80'
      }
    },
    nonSetMenu: {
      chitranna: {
        imgSrc: './../assets/images/chitranna_320.webp',
        displayName: 'Chitranna',
        price: 'Rs.40'
      },
      chanaMasala: {
        imgSrc: './../assets/images/chana_masala_320.webp',
        displayName: 'Chana masala',
        price: 'Rs.40'
      },
      sambar: {
        imgSrc: './../assets/images/sambar_320.webp',
        displayName: 'Sambar',
        price: 'Rs.30'
      },
      potatoCurry: {
        imgSrc: './../assets/images/potato_curry_320.webp',
        displayName: 'Potato curry',
        price: 'Rs.40'
      },
      alooVada: {
        imgSrc: './../assets/images/aloo_vada_213.webp',
        displayName: 'Aloo vada',
        price: 'Rs.20'
      }
    },
    sweetMenu: {
      gulabJamun: {
        imgSrc: './../assets/images/gulab_jamun_213.webp',
        displayName: 'Gulab jamun',
        price: 'Rs.10'
      },
      jalebi: {
        imgSrc: './../assets/images/jalebi_320.webp',
        displayName: 'Jalebi',
        price: 'Rs.10'
      },
      carrotHalwa: {
        imgSrc: './../assets/images/carrot_halwa_213.webp',
        displayName: 'Carrot halwa',
        price: 'Rs.20'
      }
    },
    hotDrinkMenu: {
      coffee: {
        imgSrc: './../assets/images/coffee_320.webp',
        displayName: 'Coffee with milk',
        price: 'Rs.20'
      },
      blackTea: {
        imgSrc: './../assets/images/chai_213.webp',
        displayName: 'Black tea with milk',
        price: 'Rs.20'
      }
    },
    coldDrinkMenu: {
      water: {
        imgSrc: './../assets/images/water_jug_213.webp',
        displayName: 'Water',
        price: 'Rs.20'
      },
      cola: {
        imgSrc: './../assets/images/cola_213.webp',
        displayName: 'Cola',
        price: 'Rs.40'
      },
      pomegranateMilk: {
        imgSrc: './../assets/images/pomegranate_milk_213.webp',
        displayName: 'Pomegranate milk shake',
        price: 'Rs.60'
      },
      chocolateMilk: {
        imgSrc: './../assets/images/choco_milk_213.webp',
        displayName: 'Chocolate milk shake',
        price: 'Rs.60'
      }
    }
  };

  var removeSideDish = function removeSideDish(name) {
    return name.split(' (')[0];
  };

  var createFoodItem = function createFoodItem(item) {
    var foodItem = _html_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement({
      type: 'div',
      classes: 'food-item'
    });
    var imageAlt = "".concat(removeSideDish(item.displayName), " image");
    var foodImage = _html_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement({
      type: 'img',
      src: item.imgSrc,
      alt: imageAlt
    });
    var foodBody = _html_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement({
      type: 'div',
      classes: 'menu-description overflow-break',
      text: "".concat(item.displayName, " ").concat(item.price)
    });
    foodItem.appendChild(foodImage);
    foodItem.appendChild(foodBody);
    return foodItem;
  };

  var createFoodItemGroup = function createFoodItemGroup(_ref) {
    var itemClass = _ref.itemClass,
        headerText = _ref.headerText,
        menuItem = _ref.menuItem;
    var container = _html_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement({
      type: 'div',
      classes: "".concat(itemClass, " food-items d-flex flex-wrap")
    });
    var header = _html_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement({
      type: 'h1',
      classes: 'h-title',
      text: headerText
    });
    container.appendChild(header);
    Object.values(menuItems[menuItem]).forEach(function (item) {
      return container.appendChild(createFoodItem(item));
    });
    return container;
  };

  var create = function create() {
    var mainContainer = _html_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement({
      type: 'div',
      id: 'menu'
    });
    mainContainer.appendChild(createFoodItemGroup({
      itemClass: 'set-menu',
      headerText: 'Meal',
      menuItem: 'setMenu'
    }));
    mainContainer.appendChild(createFoodItemGroup({
      itemClass: 'non-set-menu',
      headerText: 'General Dishes',
      menuItem: 'nonSetMenu'
    }));
    mainContainer.appendChild(createFoodItemGroup({
      itemClass: 'sweet-menu',
      headerText: 'Sweets',
      menuItem: 'sweetMenu'
    }));
    var drinkContainer = _html_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement({
      type: 'div',
      classes: 'drink-menu food-items d-flex flex-wrap'
    });
    drinkContainer.appendChild(createFoodItemGroup({
      itemClass: 'hot-drink-menu',
      headerText: 'Hot drinks',
      menuItem: 'hotDrinkMenu'
    }));
    drinkContainer.appendChild(createFoodItemGroup({
      itemClass: 'cold-drink-menu',
      headerText: 'Cold drinks',
      menuItem: 'coldDrinkMenu'
    }));
    mainContainer.appendChild(drinkContainer);
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
      classes: 'nav-tap list-style-none'
    });
    var tapAbout = _html_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement({
      type: 'li',
      classes: 'tap-about',
      text: 'about'
    });
    var tapMenu = _html_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement({
      type: 'li',
      classes: 'tap-menu',
      text: 'menu'
    });
    var tapContact = _html_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement({
      type: 'li',
      classes: 'tap-contact',
      text: 'contact'
    });
    var tapReserved = _html_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement({
      type: 'li',
      classes: 'tap-reserved'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fib3V0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9odG1sLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbmF2X3RhcC5qcyJdLCJuYW1lcyI6WyJhYm91dCIsImRlc2NyaXB0aW9uU2FmZnJvbiIsImRlc2NyaXB0aW9uVmVnZXRhcmlhbiIsIndyaXRlRGVzY3JpcHRpb25zIiwiaHRtbCIsImNyZWF0ZUVsZW1lbnQiLCJ0eXBlIiwiY2xhc3NlcyIsInRleHQiLCJ3cml0ZUluZm9zIiwiY3JlYXRlIiwibWFpbkNvbnRhaW5lciIsImlkIiwiaW5mb0NvbnRhaW5lciIsImZvckVhY2giLCJpbmZvIiwiYXBwZW5kQ2hpbGQiLCJkZXNjcmlwdGlvbiIsImNvbnRhY3QiLCJzcmMiLCJhbHQiLCJpdGVtIiwiZG9jdW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJzcGxpdCIsIm5hbWUiLCJjbGFzc0xpc3QiLCJhZGQiLCJpbm5lckhUTUwiLCJtYWluIiwicXVlcnlTZWxlY3RvciIsImhlYWRlciIsIm5hdlRhcCIsIm1lbnUiLCJmb290ZXIiLCJhZGRDbGlja3MiLCJtZW51SXRlbXMiLCJzZXRNZW51IiwiZG9zYSIsImltZ1NyYyIsImRpc3BsYXlOYW1lIiwicHJpY2UiLCJ1cG1hIiwiaWRseSIsImJpc2lCZWxlIiwibm9uU2V0TWVudSIsImNoaXRyYW5uYSIsImNoYW5hTWFzYWxhIiwic2FtYmFyIiwicG90YXRvQ3VycnkiLCJhbG9vVmFkYSIsInN3ZWV0TWVudSIsImd1bGFiSmFtdW4iLCJqYWxlYmkiLCJjYXJyb3RIYWx3YSIsImhvdERyaW5rTWVudSIsImNvZmZlZSIsImJsYWNrVGVhIiwiY29sZERyaW5rTWVudSIsIndhdGVyIiwiY29sYSIsInBvbWVncmFuYXRlTWlsayIsImNob2NvbGF0ZU1pbGsiLCJyZW1vdmVTaWRlRGlzaCIsImNyZWF0ZUZvb2RJdGVtIiwiZm9vZEl0ZW0iLCJpbWFnZUFsdCIsImZvb2RJbWFnZSIsImZvb2RCb2R5IiwiY3JlYXRlRm9vZEl0ZW1Hcm91cCIsIml0ZW1DbGFzcyIsImhlYWRlclRleHQiLCJtZW51SXRlbSIsImNvbnRhaW5lciIsIk9iamVjdCIsInZhbHVlcyIsImRyaW5rQ29udGFpbmVyIiwidGFwcyIsInRhcEFib3V0IiwidGFwTWVudSIsInRhcENvbnRhY3QiLCJ0YXBSZXNlcnZlZCIsInRvZ2dsZVBhcnRpYWwiLCJwYXJ0aWFsR3JvdXAiLCJjaG9pY2VOYW1lIiwicGFydGlhbCIsIm9iaiIsInN0eWxlIiwiZGlzcGxheSIsInBhcnRpYWxzIiwicHVzaCIsInAiLCJzZWxlY3RvciIsImFkZEV2ZW50TGlzdGVuZXIiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7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QVJEOztBQVVBLE1BQU1yRCxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQ3RCLFFBQUlzRCxRQUFRLEdBQUcsRUFBZjtBQUNBLEtBQUMsT0FBRCxFQUFVLE1BQVYsRUFBa0IsU0FBbEIsRUFBNkIzRSxPQUE3QixDQUFxQyxVQUFBVyxJQUFJO0FBQUEsYUFBSWdFLFFBQVEsQ0FBQ0MsSUFBVCxDQUFjO0FBQUVqRSxZQUFJLEVBQUVBO0FBQVIsT0FBZCxDQUFKO0FBQUEsS0FBekM7QUFDQWdFLFlBQVEsQ0FBQzNFLE9BQVQsQ0FBaUIsVUFBQTZFLENBQUM7QUFBQSxhQUFJQSxDQUFDLENBQUNMLEdBQUYsR0FBUWhFLFFBQVEsQ0FBQ1EsYUFBVCxZQUEyQjZELENBQUMsQ0FBQ2xFLElBQTdCLEVBQVo7QUFBQSxLQUFsQjtBQUNBZ0UsWUFBUSxDQUFDM0UsT0FBVCxDQUFpQixVQUFBNkUsQ0FBQyxFQUFJO0FBQ3BCLFVBQU1DLFFBQVEsR0FBR3RFLFFBQVEsQ0FBQ1EsYUFBVCxnQkFBK0I2RCxDQUFDLENBQUNsRSxJQUFqQyxFQUFqQjtBQUNBbUUsY0FBUSxDQUFDQyxnQkFBVCxDQUEwQixPQUExQixFQUFtQztBQUFBLGVBQU1YLGFBQWEsQ0FBQ08sUUFBRCxFQUFXRSxDQUFDLENBQUNsRSxJQUFiLENBQW5CO0FBQUEsT0FBbkM7QUFDRCxLQUhEO0FBSUF5RCxpQkFBYSxDQUFDTyxRQUFELEVBQVdBLFFBQVEsQ0FBQyxDQUFELENBQVIsQ0FBWWhFLElBQXZCLENBQWI7QUFDRCxHQVREOztBQVdBLFNBQU87QUFBRWYsVUFBTSxFQUFOQSxNQUFGO0FBQVV5QixhQUFTLEVBQVRBO0FBQVYsR0FBUDtBQUNELENBcENjLEVBQWY7O0FBc0NlSCxxRUFBZixFIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBodG1sIGZyb20gJy4vaHRtbC5qcyc7XG5cbmNvbnN0IGFib3V0ID0gKCgpID0+IHtcbiAgY29uc3QgZGVzY3JpcHRpb25TYWZmcm9uID0gJ1NhZmZyb24gaXMgYSBzcGljZSBkZXJpdmVkIGZyb20gdGhlIGZsb3dlci4nXG4gICAgKyAnVGhlIHRocmVhZHMgb2YgdGhlIGZsb3dlciBhcmUgY29sbGVjdGVkIGFuZCBkcmllZCB0byBiZSB1c2VkIG1haW5seSBhcyBhJ1xuICAgICsgJ3NlYXNvbmluZyBhbmQgY29sb3VyaW5nIGFnZW50IGluIGZvb2QuJztcblxuICBjb25zdCBkZXNjcmlwdGlvblZlZ2V0YXJpYW4gPSAnVmVnZXRhYmxlcyBjb250YWluIGltcG9ydGFudCB2aXRhbWlucyBhbmQgbWluZXJhbHMgZm9yIG91ciBib2R5LidcbiAgICArICdPdXIgcmVzdGF1cmFudCBzZXJ2ZSBzb3V0aCBJbmRpYW4gY3Vpc2luZSBtYWRlIGJ5IGZyZXNoIHZlZ2V0YWJsZXMuJ1xuICAgICsgJ1BsZWFzZSB2aXNpdCB1cyB0byBlbmpveSBoZWFsdGh5IG1lYWxzIGFuZCB0aGUgZmxhdm91ciB3aXRoIHNwaWNlLic7XG5cbiAgY29uc3Qgd3JpdGVEZXNjcmlwdGlvbnMgPSAoKSA9PiBbXG4gICAgaHRtbC5jcmVhdGVFbGVtZW50KHsgdHlwZTogJ2gxJywgY2xhc3NlczogJ3RleHQtYWxpZ24tY2VudGVyIGgtdGl0bGUnLCB0ZXh0OiAnQWJvdXQgVXMnIH0pLFxuICAgIGh0bWwuY3JlYXRlRWxlbWVudCh7IHR5cGU6ICdwJywgY2xhc3NlczogJ2Rlc2NyaXB0aW9uJywgdGV4dDogZGVzY3JpcHRpb25TYWZmcm9uIH0pLFxuICAgIGh0bWwuY3JlYXRlRWxlbWVudCh7IHR5cGU6ICdwJywgY2xhc3NlczogJ2Rlc2NyaXB0aW9uJywgdGV4dDogZGVzY3JpcHRpb25WZWdldGFyaWFuIH0pLFxuICBdO1xuXG4gIGNvbnN0IHdyaXRlSW5mb3MgPSAoKSA9PiBbXG4gICAgaHRtbC5jcmVhdGVFbGVtZW50KHsgdHlwZTogJ3NwYW4nLCBjbGFzc2VzOiAndGl0bGUnLCB0ZXh0OiAnQUREUkVTUzonIH0pLFxuICAgIGh0bWwuY3JlYXRlRWxlbWVudCh7IHR5cGU6ICdzcGFuJywgdGV4dDogJ3h4eCwgVGFtaWwgTmFkdSwgSW5kaWFcXG4nIH0pLFxuICAgIGh0bWwuY3JlYXRlRWxlbWVudCh7IHR5cGU6ICdzcGFuJywgY2xhc3NlczogJ3RpdGxlJywgdGV4dDogJ0NPTlRBQ1Q6JyB9KSxcbiAgICBodG1sLmNyZWF0ZUVsZW1lbnQoeyB0eXBlOiAnc3BhbicsIHRleHQ6ICcrOTEueHh4eC54eHh4XFxuJyB9KSxcbiAgICBodG1sLmNyZWF0ZUVsZW1lbnQoeyB0eXBlOiAnc3BhbicsIGNsYXNzZXM6ICd0aXRsZScsIHRleHQ6ICdDVUlTSU5FOicgfSksXG4gICAgaHRtbC5jcmVhdGVFbGVtZW50KHsgdHlwZTogJ3NwYW4nLCB0ZXh0OiAnU291dGggSW5kaWFuXFxuJyB9KSxcbiAgICBodG1sLmNyZWF0ZUVsZW1lbnQoeyB0eXBlOiAnc3BhbicsIGNsYXNzZXM6ICd0aXRsZScsIHRleHQ6ICdUSU1JTkdTOicgfSksXG4gICAgaHRtbC5jcmVhdGVFbGVtZW50KHsgdHlwZTogJ3NwYW4nLCB0ZXh0OiAnMDc6MDAgQU0gLSAyOjMwIFBNLCA0OjAwIFBNIC0gODozMCBQTVxcbicgfSksXG4gIF07XG5cbiAgY29uc3QgY3JlYXRlID0gKCkgPT4ge1xuICAgIGNvbnN0IG1haW5Db250YWluZXIgPSBodG1sLmNyZWF0ZUVsZW1lbnQoeyB0eXBlOiAnZGl2JywgaWQ6ICdhYm91dCcsIGNsYXNzZXM6ICdtYWluLWNvbnRlbnRzJyB9KTtcbiAgICBjb25zdCBpbmZvQ29udGFpbmVyID0gaHRtbC5jcmVhdGVFbGVtZW50KHsgdHlwZTogJ2RpdicsIGNsYXNzZXM6ICdhYm91dC1pbmZvIHdoaXRlLXNwYWNlLXByZScgfSk7XG4gICAgd3JpdGVJbmZvcygpLmZvckVhY2goaW5mbyA9PiBpbmZvQ29udGFpbmVyLmFwcGVuZENoaWxkKGluZm8pKTtcbiAgICB3cml0ZURlc2NyaXB0aW9ucygpLmZvckVhY2goZGVzY3JpcHRpb24gPT4gbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbikpO1xuICAgIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQoaW5mb0NvbnRhaW5lcik7XG4gICAgcmV0dXJuIG1haW5Db250YWluZXI7XG4gIH07XG4gIHJldHVybiB7IGNyZWF0ZSB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgYWJvdXQ7XG4iLCJpbXBvcnQgaHRtbCBmcm9tICcuL2h0bWwuanMnO1xuXG5jb25zdCBjb250YWN0ID0gKCgpID0+IHtcbiAgY29uc3QgY3JlYXRlID0gKCkgPT4ge1xuICAgIGNvbnN0IG1haW5Db250YWluZXIgPSBodG1sLmNyZWF0ZUVsZW1lbnQoeyB0eXBlOiAnZGl2JywgaWQ6ICdjb250YWN0JywgdGV4dDogJ2NvbnRhY3QnIH0pO1xuICAgIHJldHVybiBtYWluQ29udGFpbmVyO1xuICB9O1xuICByZXR1cm4geyBjcmVhdGUgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRhY3Q7XG4iLCJjb25zdCBodG1sID0gKCgpID0+IHtcbiAgY29uc3QgY3JlYXRlRWxlbWVudCA9ICh7XG4gICAgdHlwZSwgaWQsIGNsYXNzZXMsIHRleHQsIHNyYywgYWx0LFxuICB9KSA9PiB7XG4gICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XG4gICAgaWYgKGlkKSBpdGVtLnNldEF0dHJpYnV0ZSgnaWQnLCBpZCk7XG4gICAgaWYgKGNsYXNzZXMpIGNsYXNzZXMuc3BsaXQoJyAnKS5mb3JFYWNoKG5hbWUgPT4gaXRlbS5jbGFzc0xpc3QuYWRkKG5hbWUpKTtcbiAgICBpZiAodGV4dCkgaXRlbS5pbm5lckhUTUwgPSB0ZXh0O1xuICAgIGlmIChzcmMpIGl0ZW0uc3JjID0gc3JjO1xuICAgIGlmIChhbHQpIGl0ZW0uYWx0ID0gYWx0O1xuICAgIHJldHVybiBpdGVtO1xuICB9O1xuXG4gIHJldHVybiB7IGNyZWF0ZUVsZW1lbnQgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGh0bWw7XG4iLCJpbXBvcnQgbmF2VGFwIGZyb20gJy4vbmF2X3RhcC5qcyc7XG5pbXBvcnQgYWJvdXQgZnJvbSAnLi9hYm91dC5qcyc7XG5pbXBvcnQgbWVudSBmcm9tICcuL21lbnUuanMnO1xuaW1wb3J0IGNvbnRhY3QgZnJvbSAnLi9jb250YWN0LmpzJztcbmltcG9ydCBodG1sIGZyb20gJy4vaHRtbC5qcyc7XG5cbmNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXYjY29udGVudCcpO1xuXG5jb25zdCBoZWFkZXIgPSBodG1sLmNyZWF0ZUVsZW1lbnQoeyB0eXBlOiAnZGl2JyxcbiAgY2xhc3NlczogJ3Jlc3RhdXJhbnQtbmFtZSB0ZXh0LXN0cm9rZS1ibGFjaycsIHRleHQ6ICdTYWZmcm9uIFZlZycgfSk7XG5tYWluLmFwcGVuZENoaWxkKGhlYWRlcik7XG5cbm1haW4uYXBwZW5kQ2hpbGQobmF2VGFwLmNyZWF0ZSgpKTtcbm1haW4uYXBwZW5kQ2hpbGQoYWJvdXQuY3JlYXRlKCkpO1xubWFpbi5hcHBlbmRDaGlsZChtZW51LmNyZWF0ZSgpKTtcbm1haW4uYXBwZW5kQ2hpbGQoY29udGFjdC5jcmVhdGUoKSk7XG5cbmNvbnN0IGZvb3RlciA9IGh0bWwuY3JlYXRlRWxlbWVudCh7IHR5cGU6ICdkaXYnLCBjbGFzc2VzOiAnY29weXJpZ2h0JyxcbiAgdGV4dDogJ8KpIENvcHlyaWdodCAyMDE5IFNhZmZyb24gdmVnLiBBbGwgcmlnaHRzIHJlc2VydmVkLicgfSk7XG5tYWluLmFwcGVuZENoaWxkKGZvb3Rlcik7XG5cbm5hdlRhcC5hZGRDbGlja3MoKTtcbiIsImltcG9ydCBodG1sIGZyb20gJy4vaHRtbC5qcyc7XG5cbmNvbnN0IG1lbnUgPSAoKCkgPT4ge1xuICBjb25zdCBtZW51SXRlbXMgPSB7XG4gICAgc2V0TWVudToge1xuICAgICAgZG9zYToge1xuICAgICAgICBpbWdTcmM6ICcuLy4uL2Fzc2V0cy9pbWFnZXMvZG9zYV8zMjAud2VicCcsXG4gICAgICAgIGRpc3BsYXlOYW1lOiAnRG9zYWkgKCsgc2FtYmFyLCBjaHV0bmV5KScsXG4gICAgICAgIHByaWNlOiAnUnMuNjAnLFxuICAgICAgfSxcbiAgICAgIHVwbWE6IHtcbiAgICAgICAgaW1nU3JjOiAnLi8uLi9hc3NldHMvaW1hZ2VzL3VwbWFfMzIwLndlYnAnLFxuICAgICAgICBkaXNwbGF5TmFtZTogJ1VwbWEgKCsgc2FtYmFyLCBjaHV0bmV5KScsXG4gICAgICAgIHByaWNlOiAnUnMuNjAnLFxuICAgICAgfSxcbiAgICAgIGlkbHk6IHtcbiAgICAgICAgaW1nU3JjOiAnLi8uLi9hc3NldHMvaW1hZ2VzL2lkbHlfMzIwLndlYnAnLFxuICAgICAgICBkaXNwbGF5TmFtZTogJ0hvdCBJZGxpICgrIHNhbWJhciwgY2h1dG5leSwgYnJlYWtmYXN0IG9ubHkpJyxcbiAgICAgICAgcHJpY2U6ICdScy42MCcsXG4gICAgICB9LFxuICAgICAgYmlzaUJlbGU6IHtcbiAgICAgICAgaW1nU3JjOiAnLi8uLi9hc3NldHMvaW1hZ2VzL2Jpc2liZWxlX2JhdGhfMzIwLndlYnAnLFxuICAgICAgICBkaXNwbGF5TmFtZTogJ0Jpc2kgYmVsZSAoKyBjaGlwcyknLFxuICAgICAgICBwcmljZTogJ1JzLjgwJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBub25TZXRNZW51OiB7XG4gICAgICBjaGl0cmFubmE6IHtcbiAgICAgICAgaW1nU3JjOiAnLi8uLi9hc3NldHMvaW1hZ2VzL2NoaXRyYW5uYV8zMjAud2VicCcsXG4gICAgICAgIGRpc3BsYXlOYW1lOiAnQ2hpdHJhbm5hJyxcbiAgICAgICAgcHJpY2U6ICdScy40MCcsXG4gICAgICB9LFxuICAgICAgY2hhbmFNYXNhbGE6IHtcbiAgICAgICAgaW1nU3JjOiAnLi8uLi9hc3NldHMvaW1hZ2VzL2NoYW5hX21hc2FsYV8zMjAud2VicCcsXG4gICAgICAgIGRpc3BsYXlOYW1lOiAnQ2hhbmEgbWFzYWxhJyxcbiAgICAgICAgcHJpY2U6ICdScy40MCcsXG4gICAgICB9LFxuICAgICAgc2FtYmFyOiB7XG4gICAgICAgIGltZ1NyYzogJy4vLi4vYXNzZXRzL2ltYWdlcy9zYW1iYXJfMzIwLndlYnAnLFxuICAgICAgICBkaXNwbGF5TmFtZTogJ1NhbWJhcicsXG4gICAgICAgIHByaWNlOiAnUnMuMzAnLFxuICAgICAgfSxcbiAgICAgIHBvdGF0b0N1cnJ5OiB7XG4gICAgICAgIGltZ1NyYzogJy4vLi4vYXNzZXRzL2ltYWdlcy9wb3RhdG9fY3VycnlfMzIwLndlYnAnLFxuICAgICAgICBkaXNwbGF5TmFtZTogJ1BvdGF0byBjdXJyeScsXG4gICAgICAgIHByaWNlOiAnUnMuNDAnLFxuICAgICAgfSxcbiAgICAgIGFsb29WYWRhOiB7XG4gICAgICAgIGltZ1NyYzogJy4vLi4vYXNzZXRzL2ltYWdlcy9hbG9vX3ZhZGFfMjEzLndlYnAnLFxuICAgICAgICBkaXNwbGF5TmFtZTogJ0Fsb28gdmFkYScsXG4gICAgICAgIHByaWNlOiAnUnMuMjAnLFxuICAgICAgfSxcbiAgICB9LFxuICAgIHN3ZWV0TWVudToge1xuICAgICAgZ3VsYWJKYW11bjoge1xuICAgICAgICBpbWdTcmM6ICcuLy4uL2Fzc2V0cy9pbWFnZXMvZ3VsYWJfamFtdW5fMjEzLndlYnAnLFxuICAgICAgICBkaXNwbGF5TmFtZTogJ0d1bGFiIGphbXVuJyxcbiAgICAgICAgcHJpY2U6ICdScy4xMCcsXG4gICAgICB9LFxuICAgICAgamFsZWJpOiB7XG4gICAgICAgIGltZ1NyYzogJy4vLi4vYXNzZXRzL2ltYWdlcy9qYWxlYmlfMzIwLndlYnAnLFxuICAgICAgICBkaXNwbGF5TmFtZTogJ0phbGViaScsXG4gICAgICAgIHByaWNlOiAnUnMuMTAnLFxuICAgICAgfSxcbiAgICAgIGNhcnJvdEhhbHdhOiB7XG4gICAgICAgIGltZ1NyYzogJy4vLi4vYXNzZXRzL2ltYWdlcy9jYXJyb3RfaGFsd2FfMjEzLndlYnAnLFxuICAgICAgICBkaXNwbGF5TmFtZTogJ0NhcnJvdCBoYWx3YScsXG4gICAgICAgIHByaWNlOiAnUnMuMjAnLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGhvdERyaW5rTWVudToge1xuICAgICAgY29mZmVlOiB7XG4gICAgICAgIGltZ1NyYzogJy4vLi4vYXNzZXRzL2ltYWdlcy9jb2ZmZWVfMzIwLndlYnAnLFxuICAgICAgICBkaXNwbGF5TmFtZTogJ0NvZmZlZSB3aXRoIG1pbGsnLFxuICAgICAgICBwcmljZTogJ1JzLjIwJyxcbiAgICAgIH0sXG4gICAgICBibGFja1RlYToge1xuICAgICAgICBpbWdTcmM6ICcuLy4uL2Fzc2V0cy9pbWFnZXMvY2hhaV8yMTMud2VicCcsXG4gICAgICAgIGRpc3BsYXlOYW1lOiAnQmxhY2sgdGVhIHdpdGggbWlsaycsXG4gICAgICAgIHByaWNlOiAnUnMuMjAnLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGNvbGREcmlua01lbnU6IHtcbiAgICAgIHdhdGVyOiB7XG4gICAgICAgIGltZ1NyYzogJy4vLi4vYXNzZXRzL2ltYWdlcy93YXRlcl9qdWdfMjEzLndlYnAnLFxuICAgICAgICBkaXNwbGF5TmFtZTogJ1dhdGVyJyxcbiAgICAgICAgcHJpY2U6ICdScy4yMCcsXG4gICAgICB9LFxuICAgICAgY29sYToge1xuICAgICAgICBpbWdTcmM6ICcuLy4uL2Fzc2V0cy9pbWFnZXMvY29sYV8yMTMud2VicCcsXG4gICAgICAgIGRpc3BsYXlOYW1lOiAnQ29sYScsXG4gICAgICAgIHByaWNlOiAnUnMuNDAnLFxuICAgICAgfSxcbiAgICAgIHBvbWVncmFuYXRlTWlsazoge1xuICAgICAgICBpbWdTcmM6ICcuLy4uL2Fzc2V0cy9pbWFnZXMvcG9tZWdyYW5hdGVfbWlsa18yMTMud2VicCcsXG4gICAgICAgIGRpc3BsYXlOYW1lOiAnUG9tZWdyYW5hdGUgbWlsayBzaGFrZScsXG4gICAgICAgIHByaWNlOiAnUnMuNjAnLFxuICAgICAgfSxcbiAgICAgIGNob2NvbGF0ZU1pbGs6IHtcbiAgICAgICAgaW1nU3JjOiAnLi8uLi9hc3NldHMvaW1hZ2VzL2Nob2NvX21pbGtfMjEzLndlYnAnLFxuICAgICAgICBkaXNwbGF5TmFtZTogJ0Nob2NvbGF0ZSBtaWxrIHNoYWtlJyxcbiAgICAgICAgcHJpY2U6ICdScy42MCcsXG4gICAgICB9LFxuICAgIH0sXG4gIH07XG5cbiAgY29uc3QgcmVtb3ZlU2lkZURpc2ggPSBuYW1lID0+IG5hbWUuc3BsaXQoJyAoJylbMF07XG5cbiAgY29uc3QgY3JlYXRlRm9vZEl0ZW0gPSBpdGVtID0+IHtcbiAgICBjb25zdCBmb29kSXRlbSA9IGh0bWwuY3JlYXRlRWxlbWVudCh7IHR5cGU6ICdkaXYnLCBjbGFzc2VzOiAnZm9vZC1pdGVtJyB9KTtcbiAgICBjb25zdCBpbWFnZUFsdCA9IGAke3JlbW92ZVNpZGVEaXNoKGl0ZW0uZGlzcGxheU5hbWUpfSBpbWFnZWA7XG4gICAgY29uc3QgZm9vZEltYWdlID0gaHRtbC5jcmVhdGVFbGVtZW50KHsgdHlwZTogJ2ltZycsIHNyYzogaXRlbS5pbWdTcmMsIGFsdDogaW1hZ2VBbHQgfSk7XG4gICAgY29uc3QgZm9vZEJvZHkgPSBodG1sLmNyZWF0ZUVsZW1lbnQoeyB0eXBlOiAnZGl2JywgY2xhc3NlczogJ21lbnUtZGVzY3JpcHRpb24gb3ZlcmZsb3ctYnJlYWsnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogYCR7aXRlbS5kaXNwbGF5TmFtZX0gJHtpdGVtLnByaWNlfWAgfSk7XG4gICAgZm9vZEl0ZW0uYXBwZW5kQ2hpbGQoZm9vZEltYWdlKTtcbiAgICBmb29kSXRlbS5hcHBlbmRDaGlsZChmb29kQm9keSk7XG4gICAgcmV0dXJuIGZvb2RJdGVtO1xuICB9XG5cbiAgY29uc3QgY3JlYXRlRm9vZEl0ZW1Hcm91cCA9ICh7IGl0ZW1DbGFzcywgaGVhZGVyVGV4dCwgbWVudUl0ZW0gfSkgPT4ge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGh0bWwuY3JlYXRlRWxlbWVudCh7IHR5cGU6ICdkaXYnLCBjbGFzc2VzOiBgJHtpdGVtQ2xhc3N9IGZvb2QtaXRlbXMgZC1mbGV4IGZsZXgtd3JhcGAgfSk7XG4gICAgY29uc3QgaGVhZGVyID0gaHRtbC5jcmVhdGVFbGVtZW50KHsgdHlwZTogJ2gxJywgY2xhc3NlczogJ2gtdGl0bGUnLCB0ZXh0OiBoZWFkZXJUZXh0IH0pO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgIE9iamVjdC52YWx1ZXMobWVudUl0ZW1zW21lbnVJdGVtXSkuZm9yRWFjaChpdGVtID0+IGNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVGb29kSXRlbShpdGVtKSkpO1xuICAgIHJldHVybiBjb250YWluZXI7XG4gIH1cblxuICBjb25zdCBjcmVhdGUgPSAoKSA9PiB7XG4gICAgY29uc3QgbWFpbkNvbnRhaW5lciA9IGh0bWwuY3JlYXRlRWxlbWVudCh7IHR5cGU6ICdkaXYnLCBpZDogJ21lbnUnfSk7XG4gICAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVGb29kSXRlbUdyb3VwKHsgaXRlbUNsYXNzOiAnc2V0LW1lbnUnLCBoZWFkZXJUZXh0OiAnTWVhbCcsIG1lbnVJdGVtOiAnc2V0TWVudScgfSkpO1xuICAgIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlRm9vZEl0ZW1Hcm91cCh7IGl0ZW1DbGFzczogJ25vbi1zZXQtbWVudScsIGhlYWRlclRleHQ6ICdHZW5lcmFsIERpc2hlcycsIG1lbnVJdGVtOiAnbm9uU2V0TWVudScgfSkpO1xuICAgIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlRm9vZEl0ZW1Hcm91cCh7IGl0ZW1DbGFzczogJ3N3ZWV0LW1lbnUnLCBoZWFkZXJUZXh0OiAnU3dlZXRzJywgbWVudUl0ZW06ICdzd2VldE1lbnUnIH0pKTtcbiAgICBjb25zdCBkcmlua0NvbnRhaW5lciA9IGh0bWwuY3JlYXRlRWxlbWVudCh7IHR5cGU6ICdkaXYnLCBjbGFzc2VzOiAnZHJpbmstbWVudSBmb29kLWl0ZW1zIGQtZmxleCBmbGV4LXdyYXAnfSk7XG4gICAgZHJpbmtDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlRm9vZEl0ZW1Hcm91cCh7IGl0ZW1DbGFzczogJ2hvdC1kcmluay1tZW51JywgaGVhZGVyVGV4dDogJ0hvdCBkcmlua3MnLCBtZW51SXRlbTogJ2hvdERyaW5rTWVudSd9KSk7XG4gICAgZHJpbmtDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlRm9vZEl0ZW1Hcm91cCh7IGl0ZW1DbGFzczogJ2NvbGQtZHJpbmstbWVudScsIGhlYWRlclRleHQ6ICdDb2xkIGRyaW5rcycsIG1lbnVJdGVtOiAnY29sZERyaW5rTWVudSd9KSk7XG4gICAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChkcmlua0NvbnRhaW5lcik7XG4gICAgcmV0dXJuIG1haW5Db250YWluZXI7XG4gIH07XG4gIHJldHVybiB7IGNyZWF0ZSB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgbWVudTtcbiIsImltcG9ydCBodG1sIGZyb20gJy4vaHRtbC5qcydcblxuY29uc3QgbmF2VGFwID0gKCgpID0+IHtcbiAgY29uc3QgY3JlYXRlID0gKCkgPT4ge1xuICAgIGNvbnN0IHRhcHMgPSBodG1sLmNyZWF0ZUVsZW1lbnQoeyB0eXBlOiAndWwnLCBjbGFzc2VzOiAnbmF2LXRhcCBsaXN0LXN0eWxlLW5vbmUnIH0pO1xuICAgIGNvbnN0IHRhcEFib3V0ID0gaHRtbC5jcmVhdGVFbGVtZW50KHsgdHlwZTogJ2xpJywgY2xhc3NlczogJ3RhcC1hYm91dCcsIHRleHQ6ICdhYm91dCcgfSk7XG4gICAgY29uc3QgdGFwTWVudSA9IGh0bWwuY3JlYXRlRWxlbWVudCh7IHR5cGU6ICdsaScsIGNsYXNzZXM6ICd0YXAtbWVudScsIHRleHQ6ICdtZW51JyB9KTtcbiAgICBjb25zdCB0YXBDb250YWN0ID0gaHRtbC5jcmVhdGVFbGVtZW50KHsgdHlwZTogJ2xpJywgY2xhc3NlczogJ3RhcC1jb250YWN0JywgdGV4dDogJ2NvbnRhY3QnIH0pO1xuICAgIGNvbnN0IHRhcFJlc2VydmVkID0gaHRtbC5jcmVhdGVFbGVtZW50KHsgdHlwZTogJ2xpJywgY2xhc3NlczogJ3RhcC1yZXNlcnZlZCcgfSk7XG4gICAgdGFwcy5hcHBlbmRDaGlsZCh0YXBBYm91dCk7XG4gICAgdGFwcy5hcHBlbmRDaGlsZCh0YXBNZW51KTtcbiAgICB0YXBzLmFwcGVuZENoaWxkKHRhcENvbnRhY3QpO1xuICAgIHRhcHMuYXBwZW5kQ2hpbGQodGFwUmVzZXJ2ZWQpO1xuICAgIHJldHVybiB0YXBzO1xuICB9O1xuXG4gIGNvbnN0IHRvZ2dsZVBhcnRpYWwgPSAocGFydGlhbEdyb3VwLCBjaG9pY2VOYW1lKSA9PiB7XG4gICAgcGFydGlhbEdyb3VwLmZvckVhY2gocGFydGlhbCA9PiB7XG4gICAgICBpZiAocGFydGlhbC5uYW1lID09IGNob2ljZU5hbWUpIHtcbiAgICAgICAgcGFydGlhbC5vYmouc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXJ0aWFsLm9iai5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBjb25zdCBhZGRDbGlja3MgPSAoKSA9PiB7XG4gICAgbGV0IHBhcnRpYWxzID0gW107XG4gICAgWydhYm91dCcsICdtZW51JywgJ2NvbnRhY3QnXS5mb3JFYWNoKG5hbWUgPT4gcGFydGlhbHMucHVzaCh7IG5hbWU6IG5hbWUgfSkpXG4gICAgcGFydGlhbHMuZm9yRWFjaChwID0+IHAub2JqID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7cC5uYW1lfWApKTtcbiAgICBwYXJ0aWFscy5mb3JFYWNoKHAgPT4ge1xuICAgICAgY29uc3Qgc2VsZWN0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAudGFwLSR7cC5uYW1lfWApO1xuICAgICAgc2VsZWN0b3IuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0b2dnbGVQYXJ0aWFsKHBhcnRpYWxzLCBwLm5hbWUpKTtcbiAgICB9KTtcbiAgICB0b2dnbGVQYXJ0aWFsKHBhcnRpYWxzLCBwYXJ0aWFsc1sxXS5uYW1lKTtcbiAgfVxuXG4gIHJldHVybiB7IGNyZWF0ZSwgYWRkQ2xpY2tzIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBuYXZUYXA7XG4iXSwic291cmNlUm9vdCI6IiJ9