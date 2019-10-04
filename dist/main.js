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
      tag: 'h1',
      classes: 'text-align-center h-title',
      text: 'About Us'
    }), _html_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement({
      tag: 'p',
      classes: 'description',
      text: descriptionSaffron
    }), _html_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement({
      tag: 'p',
      classes: 'description',
      text: descriptionVegetarian
    })];
  };

  var writeInfos = function writeInfos() {
    return [_html_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement({
      tag: 'span',
      classes: 'title',
      text: 'ADDRESS:'
    }), _html_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement({
      tag: 'span',
      text: 'xxx, Tamil Nadu, India\n'
    }), _html_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement({
      tag: 'span',
      classes: 'title',
      text: 'CONTACT:'
    }), _html_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement({
      tag: 'span',
      text: '+91.xxxx.xxxx\n'
    }), _html_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement({
      tag: 'span',
      classes: 'title',
      text: 'CUISINE:'
    }), _html_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement({
      tag: 'span',
      text: 'South Indian\n'
    }), _html_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement({
      tag: 'span',
      classes: 'title',
      text: 'TIMINGS:'
    }), _html_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement({
      tag: 'span',
      text: '07:00 AM - 2:30 PM, 4:00 PM - 8:30 PM\n'
    })];
  };

  var create = function create() {
    var mainContainer = _html_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement({
      tag: 'div',
      id: 'about',
      classes: 'main-contents'
    });
    var infoContainer = _html_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement({
      tag: 'div',
      classes: 'about-info white-space-wrap'
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
  var descriptionContact = 'Do you have a suggestion or any service related query?' + 'Feel free to reach out to us! Whether it is a complaint or a compliment,' + 'we will respond to your feedback. Hearing from you motivates us to offer' + 'the best services and to cater to any special request.';
  var descriptionForm = 'Please fill out this form below. We will be in touch with you soon.';

  var writeDescriptions = function writeDescriptions() {
    return [_html_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement({
      tag: 'h1',
      classes: 'text-align-center h-title',
      text: 'Contact Us'
    }), _html_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement({
      tag: 'p',
      classes: 'description',
      text: descriptionContact
    }), _html_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement({
      tag: 'p',
      classes: 'description',
      text: descriptionForm
    })];
  };

  var buildField = function buildField(_ref) {
    var id = _ref.id,
        writeTag = _ref.writeTag,
        type = _ref.type,
        text = _ref.text;
    var container = _html_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement({
      tag: 'div',
      classes: 'field'
    });
    var label = _html_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement({
      tag: 'label',
      htmlFor: id,
      text: text
    });
    var write;

    if (writeTag == 'input') {
      write = _html_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement({
        tag: writeTag,
        id: id,
        name: id,
        type: type
      });
    } else {
      write = _html_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement({
        tag: writeTag,
        id: id,
        name: id,
        classes: id
      });
    }

    container.appendChild(label);
    container.appendChild(write);
    return container;
  };

  var buildForm = function buildForm() {
    var formContainer = _html_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement({
      tag: 'form',
      classes: 'contact_form'
    });
    var fieldSet = _html_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement({
      tag: 'fieldset'
    });
    fieldSet.appendChild(buildField({
      id: 'username',
      writeTag: 'input',
      type: 'text',
      text: 'Name'
    }));
    fieldSet.appendChild(buildField({
      id: 'email',
      writeTag: 'input',
      type: 'email',
      text: 'Email'
    }));
    fieldSet.appendChild(buildField({
      id: 'contact_no',
      writeTag: 'input',
      type: 'tel',
      text: 'Contact no.'
    }));
    fieldSet.appendChild(buildField({
      id: 'store',
      writeTag: 'input',
      type: 'text',
      text: 'Store name & Location (if applicable)'
    }));
    fieldSet.appendChild(buildField({
      id: 'comments',
      writeTag: 'textarea',
      classes: 'comments',
      text: 'Comments'
    }));
    var submitBtn = _html_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement({
      tag: 'button',
      classes: 'submit-btn',
      text: 'Send'
    });
    fieldSet.appendChild(submitBtn);
    formContainer.appendChild(fieldSet);
    return formContainer;
  };

  var create = function create() {
    var mainContainer = _html_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement({
      tag: 'div',
      id: 'contact',
      classes: 'main-contents'
    });
    writeDescriptions().forEach(function (description) {
      return mainContainer.appendChild(description);
    });
    mainContainer.appendChild(buildForm());
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
    var tag = _ref.tag,
        id = _ref.id,
        classes = _ref.classes,
        text = _ref.text,
        src = _ref.src,
        alt = _ref.alt,
        name = _ref.name,
        type = _ref.type,
        htmlFor = _ref.htmlFor;
    var item = document.createElement(tag);
    if (id) item.setAttribute('id', id);
    if (classes) classes.split(' ').forEach(function (name) {
      return item.classList.add(name);
    });
    if (text) item.innerHTML = text;
    if (src) item.src = src;
    if (alt) item.alt = alt;
    if (name) item.name = name;
    if (type) item.type = type;
    if (htmlFor) item.htmlFor = htmlFor;
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
  tag: 'div',
  classes: 'restaurant-name text-stroke-black',
  text: 'Saffron Veg'
});
main.appendChild(header);
main.appendChild(_nav_tap_js__WEBPACK_IMPORTED_MODULE_0__["default"].create());
main.appendChild(_about_js__WEBPACK_IMPORTED_MODULE_1__["default"].create());
main.appendChild(_menu_js__WEBPACK_IMPORTED_MODULE_2__["default"].create());
main.appendChild(_contact_js__WEBPACK_IMPORTED_MODULE_3__["default"].create());
var footer = _html_js__WEBPACK_IMPORTED_MODULE_4__["default"].createElement({
  tag: 'div',
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
        displayName: 'Hot Idli (+ sambar, chutney) \n (breakfast only)',
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
      tea: {
        imgSrc: './../assets/images/chai_213.webp',
        displayName: 'Coffee with milk / \nBlack tea with milk',
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
      tag: 'div',
      classes: 'food-item'
    });
    var imageAlt = "".concat(removeSideDish(item.displayName), " image");
    var foodImage = _html_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement({
      tag: 'img',
      src: item.imgSrc,
      alt: imageAlt
    });
    var foodBody = _html_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement({
      tag: 'div',
      classes: 'menu-description white-space-wrap',
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
      tag: 'div',
      classes: "".concat(itemClass, " food-items d-flex flex-wrap")
    });
    var header = _html_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement({
      tag: 'h1',
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
      tag: 'div',
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
      tag: 'div',
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
      tag: 'ul',
      classes: 'nav-tap list-style-none'
    });
    var tapAbout = _html_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement({
      tag: 'li',
      classes: 'tap-about',
      text: 'about'
    });
    var tapMenu = _html_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement({
      tag: 'li',
      classes: 'tap-menu',
      text: 'menu'
    });
    var tapContact = _html_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement({
      tag: 'li',
      classes: 'tap-contact',
      text: 'contact'
    });
    var tapReserved = _html_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement({
      tag: 'li',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fib3V0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9odG1sLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbmF2X3RhcC5qcyJdLCJuYW1lcyI6WyJhYm91dCIsImRlc2NyaXB0aW9uU2FmZnJvbiIsImRlc2NyaXB0aW9uVmVnZXRhcmlhbiIsIndyaXRlRGVzY3JpcHRpb25zIiwiaHRtbCIsImNyZWF0ZUVsZW1lbnQiLCJ0YWciLCJjbGFzc2VzIiwidGV4dCIsIndyaXRlSW5mb3MiLCJjcmVhdGUiLCJtYWluQ29udGFpbmVyIiwiaWQiLCJpbmZvQ29udGFpbmVyIiwiZm9yRWFjaCIsImluZm8iLCJhcHBlbmRDaGlsZCIsImRlc2NyaXB0aW9uIiwiY29udGFjdCIsImRlc2NyaXB0aW9uQ29udGFjdCIsImRlc2NyaXB0aW9uRm9ybSIsImJ1aWxkRmllbGQiLCJ3cml0ZVRhZyIsInR5cGUiLCJjb250YWluZXIiLCJsYWJlbCIsImh0bWxGb3IiLCJ3cml0ZSIsIm5hbWUiLCJidWlsZEZvcm0iLCJmb3JtQ29udGFpbmVyIiwiZmllbGRTZXQiLCJzdWJtaXRCdG4iLCJzcmMiLCJhbHQiLCJpdGVtIiwiZG9jdW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJzcGxpdCIsImNsYXNzTGlzdCIsImFkZCIsImlubmVySFRNTCIsIm1haW4iLCJxdWVyeVNlbGVjdG9yIiwiaGVhZGVyIiwibmF2VGFwIiwibWVudSIsImZvb3RlciIsImFkZENsaWNrcyIsIm1lbnVJdGVtcyIsInNldE1lbnUiLCJkb3NhIiwiaW1nU3JjIiwiZGlzcGxheU5hbWUiLCJwcmljZSIsInVwbWEiLCJpZGx5IiwiYmlzaUJlbGUiLCJub25TZXRNZW51IiwiY2hpdHJhbm5hIiwiY2hhbmFNYXNhbGEiLCJzYW1iYXIiLCJwb3RhdG9DdXJyeSIsImFsb29WYWRhIiwic3dlZXRNZW51IiwiZ3VsYWJKYW11biIsImphbGViaSIsImNhcnJvdEhhbHdhIiwiaG90RHJpbmtNZW51IiwidGVhIiwiY29sZERyaW5rTWVudSIsIndhdGVyIiwiY29sYSIsInBvbWVncmFuYXRlTWlsayIsImNob2NvbGF0ZU1pbGsiLCJyZW1vdmVTaWRlRGlzaCIsImNyZWF0ZUZvb2RJdGVtIiwiZm9vZEl0ZW0iLCJpbWFnZUFsdCIsImZvb2RJbWFnZSIsImZvb2RCb2R5IiwiY3JlYXRlRm9vZEl0ZW1Hcm91cCIsIml0ZW1DbGFzcyIsImhlYWRlclRleHQiLCJtZW51SXRlbSIsIk9iamVjdCIsInZhbHVlcyIsImRyaW5rQ29udGFpbmVyIiwidGFwcyIsInRhcEFib3V0IiwidGFwTWVudSIsInRhcENvbnRhY3QiLCJ0YXBSZXNlcnZlZCIsInRvZ2dsZVBhcnRpYWwiLCJwYXJ0aWFsR3JvdXAiLCJjaG9pY2VOYW1lIiwicGFydGlhbCIsIm9iaiIsInN0eWxlIiwiZGlzcGxheSIsInBhcnRpYWxzIiwicHVzaCIsInAiLCJzZWxlY3RvciIsImFkZEV2ZW50TGlzdGVuZXIiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FB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QUFFbEIsVUFBTSxFQUFOQSxNQUFGO0FBQVVzQyxhQUFTLEVBQVRBO0FBQVYsR0FBUDtBQUNELENBcENjLEVBQWY7O0FBc0NlSCxxRUFBZixFIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBodG1sIGZyb20gJy4vaHRtbC5qcyc7XG5cbmNvbnN0IGFib3V0ID0gKCgpID0+IHtcbiAgY29uc3QgZGVzY3JpcHRpb25TYWZmcm9uID0gJ1NhZmZyb24gaXMgYSBzcGljZSBkZXJpdmVkIGZyb20gdGhlIGZsb3dlci4nXG4gICAgKyAnVGhlIHRocmVhZHMgb2YgdGhlIGZsb3dlciBhcmUgY29sbGVjdGVkIGFuZCBkcmllZCB0byBiZSB1c2VkIG1haW5seSBhcyBhJ1xuICAgICsgJ3NlYXNvbmluZyBhbmQgY29sb3VyaW5nIGFnZW50IGluIGZvb2QuJztcblxuICBjb25zdCBkZXNjcmlwdGlvblZlZ2V0YXJpYW4gPSAnVmVnZXRhYmxlcyBjb250YWluIGltcG9ydGFudCB2aXRhbWlucyBhbmQgbWluZXJhbHMgZm9yIG91ciBib2R5LidcbiAgICArICdPdXIgcmVzdGF1cmFudCBzZXJ2ZSBzb3V0aCBJbmRpYW4gY3Vpc2luZSBtYWRlIGJ5IGZyZXNoIHZlZ2V0YWJsZXMuJ1xuICAgICsgJ1BsZWFzZSB2aXNpdCB1cyB0byBlbmpveSBoZWFsdGh5IG1lYWxzIGFuZCB0aGUgZmxhdm91ciB3aXRoIHNwaWNlLic7XG5cbiAgY29uc3Qgd3JpdGVEZXNjcmlwdGlvbnMgPSAoKSA9PiBbXG4gICAgaHRtbC5jcmVhdGVFbGVtZW50KHsgdGFnOiAnaDEnLCBjbGFzc2VzOiAndGV4dC1hbGlnbi1jZW50ZXIgaC10aXRsZScsIHRleHQ6ICdBYm91dCBVcycgfSksXG4gICAgaHRtbC5jcmVhdGVFbGVtZW50KHsgdGFnOiAncCcsIGNsYXNzZXM6ICdkZXNjcmlwdGlvbicsIHRleHQ6IGRlc2NyaXB0aW9uU2FmZnJvbiB9KSxcbiAgICBodG1sLmNyZWF0ZUVsZW1lbnQoeyB0YWc6ICdwJywgY2xhc3NlczogJ2Rlc2NyaXB0aW9uJywgdGV4dDogZGVzY3JpcHRpb25WZWdldGFyaWFuIH0pLFxuICBdO1xuXG4gIGNvbnN0IHdyaXRlSW5mb3MgPSAoKSA9PiBbXG4gICAgaHRtbC5jcmVhdGVFbGVtZW50KHsgdGFnOiAnc3BhbicsIGNsYXNzZXM6ICd0aXRsZScsIHRleHQ6ICdBRERSRVNTOicgfSksXG4gICAgaHRtbC5jcmVhdGVFbGVtZW50KHsgdGFnOiAnc3BhbicsIHRleHQ6ICd4eHgsIFRhbWlsIE5hZHUsIEluZGlhXFxuJyB9KSxcbiAgICBodG1sLmNyZWF0ZUVsZW1lbnQoeyB0YWc6ICdzcGFuJywgY2xhc3NlczogJ3RpdGxlJywgdGV4dDogJ0NPTlRBQ1Q6JyB9KSxcbiAgICBodG1sLmNyZWF0ZUVsZW1lbnQoeyB0YWc6ICdzcGFuJywgdGV4dDogJys5MS54eHh4Lnh4eHhcXG4nIH0pLFxuICAgIGh0bWwuY3JlYXRlRWxlbWVudCh7IHRhZzogJ3NwYW4nLCBjbGFzc2VzOiAndGl0bGUnLCB0ZXh0OiAnQ1VJU0lORTonIH0pLFxuICAgIGh0bWwuY3JlYXRlRWxlbWVudCh7IHRhZzogJ3NwYW4nLCB0ZXh0OiAnU291dGggSW5kaWFuXFxuJyB9KSxcbiAgICBodG1sLmNyZWF0ZUVsZW1lbnQoeyB0YWc6ICdzcGFuJywgY2xhc3NlczogJ3RpdGxlJywgdGV4dDogJ1RJTUlOR1M6JyB9KSxcbiAgICBodG1sLmNyZWF0ZUVsZW1lbnQoeyB0YWc6ICdzcGFuJywgdGV4dDogJzA3OjAwIEFNIC0gMjozMCBQTSwgNDowMCBQTSAtIDg6MzAgUE1cXG4nIH0pLFxuICBdO1xuXG4gIGNvbnN0IGNyZWF0ZSA9ICgpID0+IHtcbiAgICBjb25zdCBtYWluQ29udGFpbmVyID0gaHRtbC5jcmVhdGVFbGVtZW50KHsgdGFnOiAnZGl2JywgaWQ6ICdhYm91dCcsIGNsYXNzZXM6ICdtYWluLWNvbnRlbnRzJyB9KTtcbiAgICBjb25zdCBpbmZvQ29udGFpbmVyID0gaHRtbC5jcmVhdGVFbGVtZW50KHsgdGFnOiAnZGl2JywgY2xhc3NlczogJ2Fib3V0LWluZm8gd2hpdGUtc3BhY2Utd3JhcCcgfSk7XG4gICAgd3JpdGVJbmZvcygpLmZvckVhY2goaW5mbyA9PiBpbmZvQ29udGFpbmVyLmFwcGVuZENoaWxkKGluZm8pKTtcbiAgICB3cml0ZURlc2NyaXB0aW9ucygpLmZvckVhY2goZGVzY3JpcHRpb24gPT4gbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbikpO1xuICAgIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQoaW5mb0NvbnRhaW5lcik7XG4gICAgcmV0dXJuIG1haW5Db250YWluZXI7XG4gIH07XG4gIHJldHVybiB7IGNyZWF0ZSB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgYWJvdXQ7XG4iLCJpbXBvcnQgaHRtbCBmcm9tICcuL2h0bWwuanMnO1xuXG5jb25zdCBjb250YWN0ID0gKCgpID0+IHtcbiAgY29uc3QgZGVzY3JpcHRpb25Db250YWN0ID0gJ0RvIHlvdSBoYXZlIGEgc3VnZ2VzdGlvbiBvciBhbnkgc2VydmljZSByZWxhdGVkIHF1ZXJ5PydcbiAgKyAnRmVlbCBmcmVlIHRvIHJlYWNoIG91dCB0byB1cyEgV2hldGhlciBpdCBpcyBhIGNvbXBsYWludCBvciBhIGNvbXBsaW1lbnQsJ1xuICArICd3ZSB3aWxsIHJlc3BvbmQgdG8geW91ciBmZWVkYmFjay4gSGVhcmluZyBmcm9tIHlvdSBtb3RpdmF0ZXMgdXMgdG8gb2ZmZXInXG4gICsgJ3RoZSBiZXN0IHNlcnZpY2VzIGFuZCB0byBjYXRlciB0byBhbnkgc3BlY2lhbCByZXF1ZXN0Lic7XG5cbiAgY29uc3QgZGVzY3JpcHRpb25Gb3JtID0gJ1BsZWFzZSBmaWxsIG91dCB0aGlzIGZvcm0gYmVsb3cuIFdlIHdpbGwgYmUgaW4gdG91Y2ggd2l0aCB5b3Ugc29vbi4nO1xuXG4gIGNvbnN0IHdyaXRlRGVzY3JpcHRpb25zID0gKCkgPT4gW1xuICAgIGh0bWwuY3JlYXRlRWxlbWVudCh7IHRhZzogJ2gxJywgY2xhc3NlczogJ3RleHQtYWxpZ24tY2VudGVyIGgtdGl0bGUnLCB0ZXh0OiAnQ29udGFjdCBVcycgfSksXG4gICAgaHRtbC5jcmVhdGVFbGVtZW50KHsgdGFnOiAncCcsIGNsYXNzZXM6ICdkZXNjcmlwdGlvbicsIHRleHQ6IGRlc2NyaXB0aW9uQ29udGFjdCB9KSxcbiAgICBodG1sLmNyZWF0ZUVsZW1lbnQoeyB0YWc6ICdwJywgY2xhc3NlczogJ2Rlc2NyaXB0aW9uJywgdGV4dDogZGVzY3JpcHRpb25Gb3JtIH0pLFxuICBdO1xuXG4gIGNvbnN0IGJ1aWxkRmllbGQgPSAoeyBpZCwgd3JpdGVUYWcsIHR5cGUsIHRleHQgfSkgPT4ge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGh0bWwuY3JlYXRlRWxlbWVudCh7IHRhZzogJ2RpdicsIGNsYXNzZXM6ICdmaWVsZCcgfSk7XG4gICAgY29uc3QgbGFiZWwgPSBodG1sLmNyZWF0ZUVsZW1lbnQoeyB0YWc6ICdsYWJlbCcsIGh0bWxGb3I6IGlkLCB0ZXh0OiB0ZXh0IH0pO1xuICAgIGxldCB3cml0ZTtcbiAgICBpZiAod3JpdGVUYWcgPT0gJ2lucHV0Jykge1xuICAgICAgd3JpdGUgPSBodG1sLmNyZWF0ZUVsZW1lbnQoeyB0YWc6IHdyaXRlVGFnLCBpZDogaWQsIG5hbWU6IGlkLCB0eXBlOiB0eXBlIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB3cml0ZSA9IGh0bWwuY3JlYXRlRWxlbWVudCh7IHRhZzogd3JpdGVUYWcsIGlkOiBpZCwgbmFtZTogaWQsIGNsYXNzZXM6IGlkIH0pO1xuICAgIH1cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh3cml0ZSk7XG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgfVxuXG4gIGNvbnN0IGJ1aWxkRm9ybSA9ICgpID0+IHtcbiAgICBjb25zdCBmb3JtQ29udGFpbmVyID0gaHRtbC5jcmVhdGVFbGVtZW50KHsgdGFnOiAnZm9ybScsIGNsYXNzZXM6ICdjb250YWN0X2Zvcm0nIH0pO1xuICAgIGNvbnN0IGZpZWxkU2V0ID0gaHRtbC5jcmVhdGVFbGVtZW50KHsgdGFnOiAnZmllbGRzZXQnIH0pO1xuICAgIGZpZWxkU2V0LmFwcGVuZENoaWxkKGJ1aWxkRmllbGQoeyBpZDogJ3VzZXJuYW1lJywgd3JpdGVUYWc6ICdpbnB1dCcsIHR5cGU6ICd0ZXh0JywgdGV4dDogJ05hbWUnIH0pKTtcbiAgICBmaWVsZFNldC5hcHBlbmRDaGlsZChidWlsZEZpZWxkKHsgaWQ6ICdlbWFpbCcsIHdyaXRlVGFnOiAnaW5wdXQnLCB0eXBlOiAnZW1haWwnLCB0ZXh0OiAnRW1haWwnIH0pKTtcbiAgICBmaWVsZFNldC5hcHBlbmRDaGlsZChidWlsZEZpZWxkKHsgaWQ6ICdjb250YWN0X25vJywgd3JpdGVUYWc6ICdpbnB1dCcsIHR5cGU6ICd0ZWwnLCB0ZXh0OiAnQ29udGFjdCBuby4nIH0pKTtcbiAgICBmaWVsZFNldC5hcHBlbmRDaGlsZChidWlsZEZpZWxkKHsgaWQ6ICdzdG9yZScsIHdyaXRlVGFnOiAnaW5wdXQnLCB0eXBlOiAndGV4dCcsXG4gICAgICB0ZXh0OiAnU3RvcmUgbmFtZSAmIExvY2F0aW9uIChpZiBhcHBsaWNhYmxlKScgfSkpO1xuICAgIGZpZWxkU2V0LmFwcGVuZENoaWxkKGJ1aWxkRmllbGQoeyBpZDogJ2NvbW1lbnRzJywgd3JpdGVUYWc6ICd0ZXh0YXJlYScsIGNsYXNzZXM6ICdjb21tZW50cycsIHRleHQ6ICdDb21tZW50cycgfSkpO1xuICAgIGNvbnN0IHN1Ym1pdEJ0biA9IGh0bWwuY3JlYXRlRWxlbWVudCh7IHRhZzogJ2J1dHRvbicsIGNsYXNzZXM6ICdzdWJtaXQtYnRuJywgdGV4dDogJ1NlbmQnIH0pO1xuICAgIGZpZWxkU2V0LmFwcGVuZENoaWxkKHN1Ym1pdEJ0bik7XG4gICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChmaWVsZFNldCk7XG4gICAgcmV0dXJuIGZvcm1Db250YWluZXI7XG4gIH1cblxuICBjb25zdCBjcmVhdGUgPSAoKSA9PiB7XG4gICAgY29uc3QgbWFpbkNvbnRhaW5lciA9IGh0bWwuY3JlYXRlRWxlbWVudCh7IHRhZzogJ2RpdicsIGlkOiAnY29udGFjdCcsIGNsYXNzZXM6ICdtYWluLWNvbnRlbnRzJyB9KTtcbiAgICB3cml0ZURlc2NyaXB0aW9ucygpLmZvckVhY2goZGVzY3JpcHRpb24gPT4gbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbikpO1xuICAgIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQoYnVpbGRGb3JtKCkpO1xuICAgIHJldHVybiBtYWluQ29udGFpbmVyO1xuICB9O1xuICByZXR1cm4geyBjcmVhdGUgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRhY3Q7XG4iLCJjb25zdCBodG1sID0gKCgpID0+IHtcbiAgY29uc3QgY3JlYXRlRWxlbWVudCA9ICh7XG4gICAgdGFnLCBpZCwgY2xhc3NlcywgdGV4dCwgc3JjLCBhbHQsIG5hbWUsIHR5cGUsIGh0bWxGb3IsXG4gIH0pID0+IHtcbiAgICBjb25zdCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xuICAgIGlmIChpZCkgaXRlbS5zZXRBdHRyaWJ1dGUoJ2lkJywgaWQpO1xuICAgIGlmIChjbGFzc2VzKSBjbGFzc2VzLnNwbGl0KCcgJykuZm9yRWFjaChuYW1lID0+IGl0ZW0uY2xhc3NMaXN0LmFkZChuYW1lKSk7XG4gICAgaWYgKHRleHQpIGl0ZW0uaW5uZXJIVE1MID0gdGV4dDtcbiAgICBpZiAoc3JjKSBpdGVtLnNyYyA9IHNyYztcbiAgICBpZiAoYWx0KSBpdGVtLmFsdCA9IGFsdDtcbiAgICBpZiAobmFtZSkgaXRlbS5uYW1lID0gbmFtZTtcbiAgICBpZiAodHlwZSkgaXRlbS50eXBlID0gdHlwZTtcbiAgICBpZiAoaHRtbEZvcikgaXRlbS5odG1sRm9yID0gaHRtbEZvcjtcbiAgICByZXR1cm4gaXRlbTtcbiAgfTtcblxuICByZXR1cm4geyBjcmVhdGVFbGVtZW50IH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBodG1sO1xuIiwiaW1wb3J0IG5hdlRhcCBmcm9tICcuL25hdl90YXAuanMnO1xuaW1wb3J0IGFib3V0IGZyb20gJy4vYWJvdXQuanMnO1xuaW1wb3J0IG1lbnUgZnJvbSAnLi9tZW51LmpzJztcbmltcG9ydCBjb250YWN0IGZyb20gJy4vY29udGFjdC5qcyc7XG5pbXBvcnQgaHRtbCBmcm9tICcuL2h0bWwuanMnO1xuXG5jb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGl2I2NvbnRlbnQnKTtcblxuY29uc3QgaGVhZGVyID0gaHRtbC5jcmVhdGVFbGVtZW50KHsgdGFnOiAnZGl2JyxcbiAgY2xhc3NlczogJ3Jlc3RhdXJhbnQtbmFtZSB0ZXh0LXN0cm9rZS1ibGFjaycsIHRleHQ6ICdTYWZmcm9uIFZlZycgfSk7XG5tYWluLmFwcGVuZENoaWxkKGhlYWRlcik7XG5cbm1haW4uYXBwZW5kQ2hpbGQobmF2VGFwLmNyZWF0ZSgpKTtcbm1haW4uYXBwZW5kQ2hpbGQoYWJvdXQuY3JlYXRlKCkpO1xubWFpbi5hcHBlbmRDaGlsZChtZW51LmNyZWF0ZSgpKTtcbm1haW4uYXBwZW5kQ2hpbGQoY29udGFjdC5jcmVhdGUoKSk7XG5cbmNvbnN0IGZvb3RlciA9IGh0bWwuY3JlYXRlRWxlbWVudCh7IHRhZzogJ2RpdicsIGNsYXNzZXM6ICdjb3B5cmlnaHQnLFxuICB0ZXh0OiAnwqkgQ29weXJpZ2h0IDIwMTkgU2FmZnJvbiB2ZWcuIEFsbCByaWdodHMgcmVzZXJ2ZWQuJyB9KTtcbm1haW4uYXBwZW5kQ2hpbGQoZm9vdGVyKTtcblxubmF2VGFwLmFkZENsaWNrcygpO1xuIiwiaW1wb3J0IGh0bWwgZnJvbSAnLi9odG1sLmpzJztcblxuY29uc3QgbWVudSA9ICgoKSA9PiB7XG4gIGNvbnN0IG1lbnVJdGVtcyA9IHtcbiAgICBzZXRNZW51OiB7XG4gICAgICBkb3NhOiB7XG4gICAgICAgIGltZ1NyYzogJy4vLi4vYXNzZXRzL2ltYWdlcy9kb3NhXzMyMC53ZWJwJyxcbiAgICAgICAgZGlzcGxheU5hbWU6ICdEb3NhaSAoKyBzYW1iYXIsIGNodXRuZXkpJyxcbiAgICAgICAgcHJpY2U6ICdScy42MCcsXG4gICAgICB9LFxuICAgICAgdXBtYToge1xuICAgICAgICBpbWdTcmM6ICcuLy4uL2Fzc2V0cy9pbWFnZXMvdXBtYV8zMjAud2VicCcsXG4gICAgICAgIGRpc3BsYXlOYW1lOiAnVXBtYSAoKyBzYW1iYXIsIGNodXRuZXkpJyxcbiAgICAgICAgcHJpY2U6ICdScy42MCcsXG4gICAgICB9LFxuICAgICAgaWRseToge1xuICAgICAgICBpbWdTcmM6ICcuLy4uL2Fzc2V0cy9pbWFnZXMvaWRseV8zMjAud2VicCcsXG4gICAgICAgIGRpc3BsYXlOYW1lOiAnSG90IElkbGkgKCsgc2FtYmFyLCBjaHV0bmV5KSBcXG4gKGJyZWFrZmFzdCBvbmx5KScsXG4gICAgICAgIHByaWNlOiAnUnMuNjAnLFxuICAgICAgfSxcbiAgICAgIGJpc2lCZWxlOiB7XG4gICAgICAgIGltZ1NyYzogJy4vLi4vYXNzZXRzL2ltYWdlcy9iaXNpYmVsZV9iYXRoXzMyMC53ZWJwJyxcbiAgICAgICAgZGlzcGxheU5hbWU6ICdCaXNpIGJlbGUgKCsgY2hpcHMpJyxcbiAgICAgICAgcHJpY2U6ICdScy44MCcsXG4gICAgICB9LFxuICAgIH0sXG4gICAgbm9uU2V0TWVudToge1xuICAgICAgY2hpdHJhbm5hOiB7XG4gICAgICAgIGltZ1NyYzogJy4vLi4vYXNzZXRzL2ltYWdlcy9jaGl0cmFubmFfMzIwLndlYnAnLFxuICAgICAgICBkaXNwbGF5TmFtZTogJ0NoaXRyYW5uYScsXG4gICAgICAgIHByaWNlOiAnUnMuNDAnLFxuICAgICAgfSxcbiAgICAgIGNoYW5hTWFzYWxhOiB7XG4gICAgICAgIGltZ1NyYzogJy4vLi4vYXNzZXRzL2ltYWdlcy9jaGFuYV9tYXNhbGFfMzIwLndlYnAnLFxuICAgICAgICBkaXNwbGF5TmFtZTogJ0NoYW5hIG1hc2FsYScsXG4gICAgICAgIHByaWNlOiAnUnMuNDAnLFxuICAgICAgfSxcbiAgICAgIHNhbWJhcjoge1xuICAgICAgICBpbWdTcmM6ICcuLy4uL2Fzc2V0cy9pbWFnZXMvc2FtYmFyXzMyMC53ZWJwJyxcbiAgICAgICAgZGlzcGxheU5hbWU6ICdTYW1iYXInLFxuICAgICAgICBwcmljZTogJ1JzLjMwJyxcbiAgICAgIH0sXG4gICAgICBwb3RhdG9DdXJyeToge1xuICAgICAgICBpbWdTcmM6ICcuLy4uL2Fzc2V0cy9pbWFnZXMvcG90YXRvX2N1cnJ5XzMyMC53ZWJwJyxcbiAgICAgICAgZGlzcGxheU5hbWU6ICdQb3RhdG8gY3VycnknLFxuICAgICAgICBwcmljZTogJ1JzLjQwJyxcbiAgICAgIH0sXG4gICAgICBhbG9vVmFkYToge1xuICAgICAgICBpbWdTcmM6ICcuLy4uL2Fzc2V0cy9pbWFnZXMvYWxvb192YWRhXzIxMy53ZWJwJyxcbiAgICAgICAgZGlzcGxheU5hbWU6ICdBbG9vIHZhZGEnLFxuICAgICAgICBwcmljZTogJ1JzLjIwJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBzd2VldE1lbnU6IHtcbiAgICAgIGd1bGFiSmFtdW46IHtcbiAgICAgICAgaW1nU3JjOiAnLi8uLi9hc3NldHMvaW1hZ2VzL2d1bGFiX2phbXVuXzIxMy53ZWJwJyxcbiAgICAgICAgZGlzcGxheU5hbWU6ICdHdWxhYiBqYW11bicsXG4gICAgICAgIHByaWNlOiAnUnMuMTAnLFxuICAgICAgfSxcbiAgICAgIGphbGViaToge1xuICAgICAgICBpbWdTcmM6ICcuLy4uL2Fzc2V0cy9pbWFnZXMvamFsZWJpXzMyMC53ZWJwJyxcbiAgICAgICAgZGlzcGxheU5hbWU6ICdKYWxlYmknLFxuICAgICAgICBwcmljZTogJ1JzLjEwJyxcbiAgICAgIH0sXG4gICAgICBjYXJyb3RIYWx3YToge1xuICAgICAgICBpbWdTcmM6ICcuLy4uL2Fzc2V0cy9pbWFnZXMvY2Fycm90X2hhbHdhXzIxMy53ZWJwJyxcbiAgICAgICAgZGlzcGxheU5hbWU6ICdDYXJyb3QgaGFsd2EnLFxuICAgICAgICBwcmljZTogJ1JzLjIwJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBob3REcmlua01lbnU6IHtcbiAgICAgIHRlYToge1xuICAgICAgICBpbWdTcmM6ICcuLy4uL2Fzc2V0cy9pbWFnZXMvY2hhaV8yMTMud2VicCcsXG4gICAgICAgIGRpc3BsYXlOYW1lOiAnQ29mZmVlIHdpdGggbWlsayAvIFxcbkJsYWNrIHRlYSB3aXRoIG1pbGsnLFxuICAgICAgICBwcmljZTogJ1JzLjIwJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBjb2xkRHJpbmtNZW51OiB7XG4gICAgICB3YXRlcjoge1xuICAgICAgICBpbWdTcmM6ICcuLy4uL2Fzc2V0cy9pbWFnZXMvd2F0ZXJfanVnXzIxMy53ZWJwJyxcbiAgICAgICAgZGlzcGxheU5hbWU6ICdXYXRlcicsXG4gICAgICAgIHByaWNlOiAnUnMuMjAnLFxuICAgICAgfSxcbiAgICAgIGNvbGE6IHtcbiAgICAgICAgaW1nU3JjOiAnLi8uLi9hc3NldHMvaW1hZ2VzL2NvbGFfMjEzLndlYnAnLFxuICAgICAgICBkaXNwbGF5TmFtZTogJ0NvbGEnLFxuICAgICAgICBwcmljZTogJ1JzLjQwJyxcbiAgICAgIH0sXG4gICAgICBwb21lZ3JhbmF0ZU1pbGs6IHtcbiAgICAgICAgaW1nU3JjOiAnLi8uLi9hc3NldHMvaW1hZ2VzL3BvbWVncmFuYXRlX21pbGtfMjEzLndlYnAnLFxuICAgICAgICBkaXNwbGF5TmFtZTogJ1BvbWVncmFuYXRlIG1pbGsgc2hha2UnLFxuICAgICAgICBwcmljZTogJ1JzLjYwJyxcbiAgICAgIH0sXG4gICAgICBjaG9jb2xhdGVNaWxrOiB7XG4gICAgICAgIGltZ1NyYzogJy4vLi4vYXNzZXRzL2ltYWdlcy9jaG9jb19taWxrXzIxMy53ZWJwJyxcbiAgICAgICAgZGlzcGxheU5hbWU6ICdDaG9jb2xhdGUgbWlsayBzaGFrZScsXG4gICAgICAgIHByaWNlOiAnUnMuNjAnLFxuICAgICAgfSxcbiAgICB9LFxuICB9O1xuXG4gIGNvbnN0IHJlbW92ZVNpZGVEaXNoID0gbmFtZSA9PiBuYW1lLnNwbGl0KCcgKCcpWzBdO1xuXG4gIGNvbnN0IGNyZWF0ZUZvb2RJdGVtID0gaXRlbSA9PiB7XG4gICAgY29uc3QgZm9vZEl0ZW0gPSBodG1sLmNyZWF0ZUVsZW1lbnQoeyB0YWc6ICdkaXYnLCBjbGFzc2VzOiAnZm9vZC1pdGVtJyB9KTtcbiAgICBjb25zdCBpbWFnZUFsdCA9IGAke3JlbW92ZVNpZGVEaXNoKGl0ZW0uZGlzcGxheU5hbWUpfSBpbWFnZWA7XG4gICAgY29uc3QgZm9vZEltYWdlID0gaHRtbC5jcmVhdGVFbGVtZW50KHsgdGFnOiAnaW1nJywgc3JjOiBpdGVtLmltZ1NyYywgYWx0OiBpbWFnZUFsdCB9KTtcbiAgICBjb25zdCBmb29kQm9keSA9IGh0bWwuY3JlYXRlRWxlbWVudCh7IHRhZzogJ2RpdicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc2VzOiAnbWVudS1kZXNjcmlwdGlvbiB3aGl0ZS1zcGFjZS13cmFwJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IGAke2l0ZW0uZGlzcGxheU5hbWV9ICR7aXRlbS5wcmljZX1gIH0pO1xuICAgIGZvb2RJdGVtLmFwcGVuZENoaWxkKGZvb2RJbWFnZSk7XG4gICAgZm9vZEl0ZW0uYXBwZW5kQ2hpbGQoZm9vZEJvZHkpO1xuICAgIHJldHVybiBmb29kSXRlbTtcbiAgfVxuXG4gIGNvbnN0IGNyZWF0ZUZvb2RJdGVtR3JvdXAgPSAoeyBpdGVtQ2xhc3MsIGhlYWRlclRleHQsIG1lbnVJdGVtIH0pID0+IHtcbiAgICBjb25zdCBjb250YWluZXIgPSBodG1sLmNyZWF0ZUVsZW1lbnQoeyB0YWc6ICdkaXYnLCBjbGFzc2VzOiBgJHtpdGVtQ2xhc3N9IGZvb2QtaXRlbXMgZC1mbGV4IGZsZXgtd3JhcGAgfSk7XG4gICAgY29uc3QgaGVhZGVyID0gaHRtbC5jcmVhdGVFbGVtZW50KHsgdGFnOiAnaDEnLCBjbGFzc2VzOiAnaC10aXRsZScsIHRleHQ6IGhlYWRlclRleHQgfSk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgT2JqZWN0LnZhbHVlcyhtZW51SXRlbXNbbWVudUl0ZW1dKS5mb3JFYWNoKGl0ZW0gPT4gY29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUZvb2RJdGVtKGl0ZW0pKSk7XG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgfVxuXG4gIGNvbnN0IGNyZWF0ZSA9ICgpID0+IHtcbiAgICBjb25zdCBtYWluQ29udGFpbmVyID0gaHRtbC5jcmVhdGVFbGVtZW50KHsgdGFnOiAnZGl2JywgaWQ6ICdtZW51J30pO1xuICAgIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlRm9vZEl0ZW1Hcm91cCh7IGl0ZW1DbGFzczogJ3NldC1tZW51JywgaGVhZGVyVGV4dDogJ01lYWwnLCBtZW51SXRlbTogJ3NldE1lbnUnIH0pKTtcbiAgICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUZvb2RJdGVtR3JvdXAoeyBpdGVtQ2xhc3M6ICdub24tc2V0LW1lbnUnLCBoZWFkZXJUZXh0OiAnR2VuZXJhbCBEaXNoZXMnLCBtZW51SXRlbTogJ25vblNldE1lbnUnIH0pKTtcbiAgICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUZvb2RJdGVtR3JvdXAoeyBpdGVtQ2xhc3M6ICdzd2VldC1tZW51JywgaGVhZGVyVGV4dDogJ1N3ZWV0cycsIG1lbnVJdGVtOiAnc3dlZXRNZW51JyB9KSk7XG4gICAgY29uc3QgZHJpbmtDb250YWluZXIgPSBodG1sLmNyZWF0ZUVsZW1lbnQoeyB0YWc6ICdkaXYnLCBjbGFzc2VzOiAnZHJpbmstbWVudSBmb29kLWl0ZW1zIGQtZmxleCBmbGV4LXdyYXAnfSk7XG4gICAgZHJpbmtDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlRm9vZEl0ZW1Hcm91cCh7IGl0ZW1DbGFzczogJ2hvdC1kcmluay1tZW51JywgaGVhZGVyVGV4dDogJ0hvdCBkcmlua3MnLCBtZW51SXRlbTogJ2hvdERyaW5rTWVudSd9KSk7XG4gICAgZHJpbmtDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlRm9vZEl0ZW1Hcm91cCh7IGl0ZW1DbGFzczogJ2NvbGQtZHJpbmstbWVudScsIGhlYWRlclRleHQ6ICdDb2xkIGRyaW5rcycsIG1lbnVJdGVtOiAnY29sZERyaW5rTWVudSd9KSk7XG4gICAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChkcmlua0NvbnRhaW5lcik7XG4gICAgcmV0dXJuIG1haW5Db250YWluZXI7XG4gIH07XG4gIHJldHVybiB7IGNyZWF0ZSB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgbWVudTtcbiIsImltcG9ydCBodG1sIGZyb20gJy4vaHRtbC5qcydcblxuY29uc3QgbmF2VGFwID0gKCgpID0+IHtcbiAgY29uc3QgY3JlYXRlID0gKCkgPT4ge1xuICAgIGNvbnN0IHRhcHMgPSBodG1sLmNyZWF0ZUVsZW1lbnQoeyB0YWc6ICd1bCcsIGNsYXNzZXM6ICduYXYtdGFwIGxpc3Qtc3R5bGUtbm9uZScgfSk7XG4gICAgY29uc3QgdGFwQWJvdXQgPSBodG1sLmNyZWF0ZUVsZW1lbnQoeyB0YWc6ICdsaScsIGNsYXNzZXM6ICd0YXAtYWJvdXQnLCB0ZXh0OiAnYWJvdXQnIH0pO1xuICAgIGNvbnN0IHRhcE1lbnUgPSBodG1sLmNyZWF0ZUVsZW1lbnQoeyB0YWc6ICdsaScsIGNsYXNzZXM6ICd0YXAtbWVudScsIHRleHQ6ICdtZW51JyB9KTtcbiAgICBjb25zdCB0YXBDb250YWN0ID0gaHRtbC5jcmVhdGVFbGVtZW50KHsgdGFnOiAnbGknLCBjbGFzc2VzOiAndGFwLWNvbnRhY3QnLCB0ZXh0OiAnY29udGFjdCcgfSk7XG4gICAgY29uc3QgdGFwUmVzZXJ2ZWQgPSBodG1sLmNyZWF0ZUVsZW1lbnQoeyB0YWc6ICdsaScsIGNsYXNzZXM6ICd0YXAtcmVzZXJ2ZWQnIH0pO1xuICAgIHRhcHMuYXBwZW5kQ2hpbGQodGFwQWJvdXQpO1xuICAgIHRhcHMuYXBwZW5kQ2hpbGQodGFwTWVudSk7XG4gICAgdGFwcy5hcHBlbmRDaGlsZCh0YXBDb250YWN0KTtcbiAgICB0YXBzLmFwcGVuZENoaWxkKHRhcFJlc2VydmVkKTtcbiAgICByZXR1cm4gdGFwcztcbiAgfTtcblxuICBjb25zdCB0b2dnbGVQYXJ0aWFsID0gKHBhcnRpYWxHcm91cCwgY2hvaWNlTmFtZSkgPT4ge1xuICAgIHBhcnRpYWxHcm91cC5mb3JFYWNoKHBhcnRpYWwgPT4ge1xuICAgICAgaWYgKHBhcnRpYWwubmFtZSA9PSBjaG9pY2VOYW1lKSB7XG4gICAgICAgIHBhcnRpYWwub2JqLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFydGlhbC5vYmouc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgY29uc3QgYWRkQ2xpY2tzID0gKCkgPT4ge1xuICAgIGxldCBwYXJ0aWFscyA9IFtdO1xuICAgIFsnYWJvdXQnLCAnbWVudScsICdjb250YWN0J10uZm9yRWFjaChuYW1lID0+IHBhcnRpYWxzLnB1c2goeyBuYW1lOiBuYW1lIH0pKVxuICAgIHBhcnRpYWxzLmZvckVhY2gocCA9PiBwLm9iaiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke3AubmFtZX1gKSk7XG4gICAgcGFydGlhbHMuZm9yRWFjaChwID0+IHtcbiAgICAgIGNvbnN0IHNlbGVjdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnRhcC0ke3AubmFtZX1gKTtcbiAgICAgIHNlbGVjdG9yLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdG9nZ2xlUGFydGlhbChwYXJ0aWFscywgcC5uYW1lKSk7XG4gICAgfSk7XG4gICAgdG9nZ2xlUGFydGlhbChwYXJ0aWFscywgcGFydGlhbHNbMV0ubmFtZSk7XG4gIH1cblxuICByZXR1cm4geyBjcmVhdGUsIGFkZENsaWNrcyB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgbmF2VGFwO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==