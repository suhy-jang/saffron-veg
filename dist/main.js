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
    formContainer.appendChild(fieldSet);
    fieldSet.appendChild(buildField({
      id: 'email',
      writeTag: 'input',
      type: 'email',
      text: 'Email'
    }));
    formContainer.appendChild(fieldSet);
    fieldSet.appendChild(buildField({
      id: 'contact_no',
      writeTag: 'input',
      type: 'tel',
      text: 'Contact no.'
    }));
    formContainer.appendChild(fieldSet);
    fieldSet.appendChild(buildField({
      id: 'store',
      writeTag: 'input',
      type: 'text',
      text: 'Store name & Location (if applicable)'
    }));
    formContainer.appendChild(fieldSet);
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
    togglePartial(partials, partials[2].name);
  };

  return {
    create: create,
    addClicks: addClicks
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (navTap);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fib3V0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9odG1sLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbmF2X3RhcC5qcyJdLCJuYW1lcyI6WyJhYm91dCIsImRlc2NyaXB0aW9uU2FmZnJvbiIsImRlc2NyaXB0aW9uVmVnZXRhcmlhbiIsIndyaXRlRGVzY3JpcHRpb25zIiwiaHRtbCIsImNyZWF0ZUVsZW1lbnQiLCJ0YWciLCJjbGFzc2VzIiwidGV4dCIsIndyaXRlSW5mb3MiLCJjcmVhdGUiLCJtYWluQ29udGFpbmVyIiwiaWQiLCJpbmZvQ29udGFpbmVyIiwiZm9yRWFjaCIsImluZm8iLCJhcHBlbmRDaGlsZCIsImRlc2NyaXB0aW9uIiwiY29udGFjdCIsImRlc2NyaXB0aW9uQ29udGFjdCIsImRlc2NyaXB0aW9uRm9ybSIsImJ1aWxkRmllbGQiLCJ3cml0ZVRhZyIsInR5cGUiLCJjb250YWluZXIiLCJsYWJlbCIsImh0bWxGb3IiLCJ3cml0ZSIsIm5hbWUiLCJidWlsZEZvcm0iLCJmb3JtQ29udGFpbmVyIiwiZmllbGRTZXQiLCJzdWJtaXRCdG4iLCJzcmMiLCJhbHQiLCJpdGVtIiwiZG9jdW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJzcGxpdCIsImNsYXNzTGlzdCIsImFkZCIsImlubmVySFRNTCIsIm1haW4iLCJxdWVyeVNlbGVjdG9yIiwiaGVhZGVyIiwibmF2VGFwIiwibWVudSIsImZvb3RlciIsImFkZENsaWNrcyIsIm1lbnVJdGVtcyIsInNldE1lbnUiLCJkb3NhIiwiaW1nU3JjIiwiZGlzcGxheU5hbWUiLCJwcmljZSIsInVwbWEiLCJpZGx5IiwiYmlzaUJlbGUiLCJub25TZXRNZW51IiwiY2hpdHJhbm5hIiwiY2hhbmFNYXNhbGEiLCJzYW1iYXIiLCJwb3RhdG9DdXJyeSIsImFsb29WYWRhIiwic3dlZXRNZW51IiwiZ3VsYWJKYW11biIsImphbGViaSIsImNhcnJvdEhhbHdhIiwiaG90RHJpbmtNZW51IiwiY29mZmVlIiwiYmxhY2tUZWEiLCJjb2xkRHJpbmtNZW51Iiwid2F0ZXIiLCJjb2xhIiwicG9tZWdyYW5hdGVNaWxrIiwiY2hvY29sYXRlTWlsayIsInJlbW92ZVNpZGVEaXNoIiwiY3JlYXRlRm9vZEl0ZW0iLCJmb29kSXRlbSIsImltYWdlQWx0IiwiZm9vZEltYWdlIiwiZm9vZEJvZHkiLCJjcmVhdGVGb29kSXRlbUdyb3VwIiwiaXRlbUNsYXNzIiwiaGVhZGVyVGV4dCIsIm1lbnVJdGVtIiwiT2JqZWN0IiwidmFsdWVzIiwiZHJpbmtDb250YWluZXIiLCJ0YXBzIiwidGFwQWJvdXQiLCJ0YXBNZW51IiwidGFwQ29udGFjdCIsInRhcFJlc2VydmVkIiwidG9nZ2xlUGFydGlhbCIsInBhcnRpYWxHcm91cCIsImNob2ljZU5hbWUiLCJwYXJ0aWFsIiwib2JqIiwic3R5bGUiLCJkaXNwbGF5IiwicGFydGlhbHMiLCJwdXNoIiwicCIsInNlbGVjdG9yIiwiYWRkRXZlbnRMaXN0ZW5lciJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7O0FBRUEsSUFBTUEsS0FBSyxHQUFJLFlBQU07QUFDbkIsTUFBTUMsa0JBQWtCLEdBQUcsZ0RBQ3ZCLDBFQUR1QixHQUV2Qix3Q0FGSjtBQUlBLE1BQU1DLHFCQUFxQixHQUFHLHFFQUMxQixxRUFEMEIsR0FFMUIsb0VBRko7O0FBSUEsTUFBTUMsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQjtBQUFBLFdBQU0sQ0FDOUJDLGdEQUFJLENBQUNDLGFBQUwsQ0FBbUI7QUFBRUMsU0FBRyxFQUFFLElBQVA7QUFBYUMsYUFBTyxFQUFFLDJCQUF0QjtBQUFtREMsVUFBSSxFQUFFO0FBQXpELEtBQW5CLENBRDhCLEVBRTlCSixnREFBSSxDQUFDQyxhQUFMLENBQW1CO0FBQUVDLFNBQUcsRUFBRSxHQUFQO0FBQVlDLGFBQU8sRUFBRSxhQUFyQjtBQUFvQ0MsVUFBSSxFQUFFUDtBQUExQyxLQUFuQixDQUY4QixFQUc5QkcsZ0RBQUksQ0FBQ0MsYUFBTCxDQUFtQjtBQUFFQyxTQUFHLEVBQUUsR0FBUDtBQUFZQyxhQUFPLEVBQUUsYUFBckI7QUFBb0NDLFVBQUksRUFBRU47QUFBMUMsS0FBbkIsQ0FIOEIsQ0FBTjtBQUFBLEdBQTFCOztBQU1BLE1BQU1PLFVBQVUsR0FBRyxTQUFiQSxVQUFhO0FBQUEsV0FBTSxDQUN2QkwsZ0RBQUksQ0FBQ0MsYUFBTCxDQUFtQjtBQUFFQyxTQUFHLEVBQUUsTUFBUDtBQUFlQyxhQUFPLEVBQUUsT0FBeEI7QUFBaUNDLFVBQUksRUFBRTtBQUF2QyxLQUFuQixDQUR1QixFQUV2QkosZ0RBQUksQ0FBQ0MsYUFBTCxDQUFtQjtBQUFFQyxTQUFHLEVBQUUsTUFBUDtBQUFlRSxVQUFJLEVBQUU7QUFBckIsS0FBbkIsQ0FGdUIsRUFHdkJKLGdEQUFJLENBQUNDLGFBQUwsQ0FBbUI7QUFBRUMsU0FBRyxFQUFFLE1BQVA7QUFBZUMsYUFBTyxFQUFFLE9BQXhCO0FBQWlDQyxVQUFJLEVBQUU7QUFBdkMsS0FBbkIsQ0FIdUIsRUFJdkJKLGdEQUFJLENBQUNDLGFBQUwsQ0FBbUI7QUFBRUMsU0FBRyxFQUFFLE1BQVA7QUFBZUUsVUFBSSxFQUFFO0FBQXJCLEtBQW5CLENBSnVCLEVBS3ZCSixnREFBSSxDQUFDQyxhQUFMLENBQW1CO0FBQUVDLFNBQUcsRUFBRSxNQUFQO0FBQWVDLGFBQU8sRUFBRSxPQUF4QjtBQUFpQ0MsVUFBSSxFQUFFO0FBQXZDLEtBQW5CLENBTHVCLEVBTXZCSixnREFBSSxDQUFDQyxhQUFMLENBQW1CO0FBQUVDLFNBQUcsRUFBRSxNQUFQO0FBQWVFLFVBQUksRUFBRTtBQUFyQixLQUFuQixDQU51QixFQU92QkosZ0RBQUksQ0FBQ0MsYUFBTCxDQUFtQjtBQUFFQyxTQUFHLEVBQUUsTUFBUDtBQUFlQyxhQUFPLEVBQUUsT0FBeEI7QUFBaUNDLFVBQUksRUFBRTtBQUF2QyxLQUFuQixDQVB1QixFQVF2QkosZ0RBQUksQ0FBQ0MsYUFBTCxDQUFtQjtBQUFFQyxTQUFHLEVBQUUsTUFBUDtBQUFlRSxVQUFJLEVBQUU7QUFBckIsS0FBbkIsQ0FSdUIsQ0FBTjtBQUFBLEdBQW5COztBQVdBLE1BQU1FLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07QUFDbkIsUUFBTUMsYUFBYSxHQUFHUCxnREFBSSxDQUFDQyxhQUFMLENBQW1CO0FBQUVDLFNBQUcsRUFBRSxLQUFQO0FBQWNNLFFBQUUsRUFBRSxPQUFsQjtBQUEyQkwsYUFBTyxFQUFFO0FBQXBDLEtBQW5CLENBQXRCO0FBQ0EsUUFBTU0sYUFBYSxHQUFHVCxnREFBSSxDQUFDQyxhQUFMLENBQW1CO0FBQUVDLFNBQUcsRUFBRSxLQUFQO0FBQWNDLGFBQU8sRUFBRTtBQUF2QixLQUFuQixDQUF0QjtBQUNBRSxjQUFVLEdBQUdLLE9BQWIsQ0FBcUIsVUFBQUMsSUFBSTtBQUFBLGFBQUlGLGFBQWEsQ0FBQ0csV0FBZCxDQUEwQkQsSUFBMUIsQ0FBSjtBQUFBLEtBQXpCO0FBQ0FaLHFCQUFpQixHQUFHVyxPQUFwQixDQUE0QixVQUFBRyxXQUFXO0FBQUEsYUFBSU4sYUFBYSxDQUFDSyxXQUFkLENBQTBCQyxXQUExQixDQUFKO0FBQUEsS0FBdkM7QUFDQU4saUJBQWEsQ0FBQ0ssV0FBZCxDQUEwQkgsYUFBMUI7QUFDQSxXQUFPRixhQUFQO0FBQ0QsR0FQRDs7QUFRQSxTQUFPO0FBQUVELFVBQU0sRUFBTkE7QUFBRixHQUFQO0FBQ0QsQ0FuQ2EsRUFBZDs7QUFxQ2VWLG9FQUFmLEU7Ozs7Ozs7Ozs7OztBQ3ZDQTtBQUFBO0FBQUE7O0FBRUEsSUFBTWtCLE9BQU8sR0FBSSxZQUFNO0FBQ3JCLE1BQU1DLGtCQUFrQixHQUFHLDJEQUN6QiwwRUFEeUIsR0FFekIsMEVBRnlCLEdBR3pCLHdEQUhGO0FBS0EsTUFBTUMsZUFBZSxHQUFHLHFFQUF4Qjs7QUFFQSxNQUFNakIsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQjtBQUFBLFdBQU0sQ0FDOUJDLGdEQUFJLENBQUNDLGFBQUwsQ0FBbUI7QUFBRUMsU0FBRyxFQUFFLElBQVA7QUFBYUMsYUFBTyxFQUFFLDJCQUF0QjtBQUFtREMsVUFBSSxFQUFFO0FBQXpELEtBQW5CLENBRDhCLEVBRTlCSixnREFBSSxDQUFDQyxhQUFMLENBQW1CO0FBQUVDLFNBQUcsRUFBRSxHQUFQO0FBQVlDLGFBQU8sRUFBRSxhQUFyQjtBQUFvQ0MsVUFBSSxFQUFFVztBQUExQyxLQUFuQixDQUY4QixFQUc5QmYsZ0RBQUksQ0FBQ0MsYUFBTCxDQUFtQjtBQUFFQyxTQUFHLEVBQUUsR0FBUDtBQUFZQyxhQUFPLEVBQUUsYUFBckI7QUFBb0NDLFVBQUksRUFBRVk7QUFBMUMsS0FBbkIsQ0FIOEIsQ0FBTjtBQUFBLEdBQTFCOztBQU1BLE1BQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLE9BQWtDO0FBQUEsUUFBL0JULEVBQStCLFFBQS9CQSxFQUErQjtBQUFBLFFBQTNCVSxRQUEyQixRQUEzQkEsUUFBMkI7QUFBQSxRQUFqQkMsSUFBaUIsUUFBakJBLElBQWlCO0FBQUEsUUFBWGYsSUFBVyxRQUFYQSxJQUFXO0FBQ25ELFFBQU1nQixTQUFTLEdBQUdwQixnREFBSSxDQUFDQyxhQUFMLENBQW1CO0FBQUVDLFNBQUcsRUFBRSxLQUFQO0FBQWNDLGFBQU8sRUFBRTtBQUF2QixLQUFuQixDQUFsQjtBQUNBLFFBQU1rQixLQUFLLEdBQUdyQixnREFBSSxDQUFDQyxhQUFMLENBQW1CO0FBQUVDLFNBQUcsRUFBRSxPQUFQO0FBQWdCb0IsYUFBTyxFQUFFZCxFQUF6QjtBQUE2QkosVUFBSSxFQUFFQTtBQUFuQyxLQUFuQixDQUFkO0FBQ0EsUUFBSW1CLEtBQUo7O0FBQ0EsUUFBSUwsUUFBUSxJQUFJLE9BQWhCLEVBQXlCO0FBQ3ZCSyxXQUFLLEdBQUd2QixnREFBSSxDQUFDQyxhQUFMLENBQW1CO0FBQUVDLFdBQUcsRUFBRWdCLFFBQVA7QUFBaUJWLFVBQUUsRUFBRUEsRUFBckI7QUFBeUJnQixZQUFJLEVBQUVoQixFQUEvQjtBQUFtQ1csWUFBSSxFQUFFQTtBQUF6QyxPQUFuQixDQUFSO0FBQ0QsS0FGRCxNQUVPO0FBQ0xJLFdBQUssR0FBR3ZCLGdEQUFJLENBQUNDLGFBQUwsQ0FBbUI7QUFBRUMsV0FBRyxFQUFFZ0IsUUFBUDtBQUFpQlYsVUFBRSxFQUFFQSxFQUFyQjtBQUF5QmdCLFlBQUksRUFBRWhCLEVBQS9CO0FBQW1DTCxlQUFPLEVBQUVLO0FBQTVDLE9BQW5CLENBQVI7QUFDRDs7QUFDRFksYUFBUyxDQUFDUixXQUFWLENBQXNCUyxLQUF0QjtBQUNBRCxhQUFTLENBQUNSLFdBQVYsQ0FBc0JXLEtBQXRCO0FBQ0EsV0FBT0gsU0FBUDtBQUNELEdBWkQ7O0FBY0EsTUFBTUssU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUN0QixRQUFNQyxhQUFhLEdBQUcxQixnREFBSSxDQUFDQyxhQUFMLENBQW1CO0FBQUVDLFNBQUcsRUFBRSxNQUFQO0FBQWVDLGFBQU8sRUFBRTtBQUF4QixLQUFuQixDQUF0QjtBQUNBLFFBQU13QixRQUFRLEdBQUczQixnREFBSSxDQUFDQyxhQUFMLENBQW1CO0FBQUVDLFNBQUcsRUFBRTtBQUFQLEtBQW5CLENBQWpCO0FBQ0F5QixZQUFRLENBQUNmLFdBQVQsQ0FBcUJLLFVBQVUsQ0FBQztBQUFFVCxRQUFFLEVBQUUsVUFBTjtBQUFrQlUsY0FBUSxFQUFFLE9BQTVCO0FBQXFDQyxVQUFJLEVBQUUsTUFBM0M7QUFBbURmLFVBQUksRUFBRTtBQUF6RCxLQUFELENBQS9CO0FBQ0FzQixpQkFBYSxDQUFDZCxXQUFkLENBQTBCZSxRQUExQjtBQUNBQSxZQUFRLENBQUNmLFdBQVQsQ0FBcUJLLFVBQVUsQ0FBQztBQUFFVCxRQUFFLEVBQUUsT0FBTjtBQUFlVSxjQUFRLEVBQUUsT0FBekI7QUFBa0NDLFVBQUksRUFBRSxPQUF4QztBQUFpRGYsVUFBSSxFQUFFO0FBQXZELEtBQUQsQ0FBL0I7QUFDQXNCLGlCQUFhLENBQUNkLFdBQWQsQ0FBMEJlLFFBQTFCO0FBQ0FBLFlBQVEsQ0FBQ2YsV0FBVCxDQUFxQkssVUFBVSxDQUFDO0FBQUVULFFBQUUsRUFBRSxZQUFOO0FBQW9CVSxjQUFRLEVBQUUsT0FBOUI7QUFBdUNDLFVBQUksRUFBRSxLQUE3QztBQUFvRGYsVUFBSSxFQUFFO0FBQTFELEtBQUQsQ0FBL0I7QUFDQXNCLGlCQUFhLENBQUNkLFdBQWQsQ0FBMEJlLFFBQTFCO0FBQ0FBLFlBQVEsQ0FBQ2YsV0FBVCxDQUFxQkssVUFBVSxDQUFDO0FBQUVULFFBQUUsRUFBRSxPQUFOO0FBQWVVLGNBQVEsRUFBRSxPQUF6QjtBQUFrQ0MsVUFBSSxFQUFFLE1BQXhDO0FBQzlCZixVQUFJLEVBQUU7QUFEd0IsS0FBRCxDQUEvQjtBQUVBc0IsaUJBQWEsQ0FBQ2QsV0FBZCxDQUEwQmUsUUFBMUI7QUFDQUEsWUFBUSxDQUFDZixXQUFULENBQXFCSyxVQUFVLENBQUM7QUFBRVQsUUFBRSxFQUFFLFVBQU47QUFBa0JVLGNBQVEsRUFBRSxVQUE1QjtBQUF3Q2YsYUFBTyxFQUFFLFVBQWpEO0FBQTZEQyxVQUFJLEVBQUU7QUFBbkUsS0FBRCxDQUEvQjtBQUNBLFFBQU13QixTQUFTLEdBQUc1QixnREFBSSxDQUFDQyxhQUFMLENBQW1CO0FBQUVDLFNBQUcsRUFBRSxRQUFQO0FBQWlCQyxhQUFPLEVBQUUsWUFBMUI7QUFBd0NDLFVBQUksRUFBRTtBQUE5QyxLQUFuQixDQUFsQjtBQUNBdUIsWUFBUSxDQUFDZixXQUFULENBQXFCZ0IsU0FBckI7QUFDQUYsaUJBQWEsQ0FBQ2QsV0FBZCxDQUEwQmUsUUFBMUI7QUFDQSxXQUFPRCxhQUFQO0FBQ0QsR0FqQkQ7O0FBbUJBLE1BQU1wQixNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0FBQ25CLFFBQU1DLGFBQWEsR0FBR1AsZ0RBQUksQ0FBQ0MsYUFBTCxDQUFtQjtBQUFFQyxTQUFHLEVBQUUsS0FBUDtBQUFjTSxRQUFFLEVBQUUsU0FBbEI7QUFBNkJMLGFBQU8sRUFBRTtBQUF0QyxLQUFuQixDQUF0QjtBQUNBSixxQkFBaUIsR0FBR1csT0FBcEIsQ0FBNEIsVUFBQUcsV0FBVztBQUFBLGFBQUlOLGFBQWEsQ0FBQ0ssV0FBZCxDQUEwQkMsV0FBMUIsQ0FBSjtBQUFBLEtBQXZDO0FBQ0FOLGlCQUFhLENBQUNLLFdBQWQsQ0FBMEJhLFNBQVMsRUFBbkM7QUFDQSxXQUFPbEIsYUFBUDtBQUNELEdBTEQ7O0FBTUEsU0FBTztBQUFFRCxVQUFNLEVBQU5BO0FBQUYsR0FBUDtBQUNELENBdERlLEVBQWhCOztBQXdEZVEsc0VBQWYsRTs7Ozs7Ozs7Ozs7O0FDMURBO0FBQUEsSUFBTWQsSUFBSSxHQUFJLFlBQU07QUFDbEIsTUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixPQUVoQjtBQUFBLFFBREpDLEdBQ0ksUUFESkEsR0FDSTtBQUFBLFFBRENNLEVBQ0QsUUFEQ0EsRUFDRDtBQUFBLFFBREtMLE9BQ0wsUUFES0EsT0FDTDtBQUFBLFFBRGNDLElBQ2QsUUFEY0EsSUFDZDtBQUFBLFFBRG9CeUIsR0FDcEIsUUFEb0JBLEdBQ3BCO0FBQUEsUUFEeUJDLEdBQ3pCLFFBRHlCQSxHQUN6QjtBQUFBLFFBRDhCTixJQUM5QixRQUQ4QkEsSUFDOUI7QUFBQSxRQURvQ0wsSUFDcEMsUUFEb0NBLElBQ3BDO0FBQUEsUUFEMENHLE9BQzFDLFFBRDBDQSxPQUMxQztBQUNKLFFBQU1TLElBQUksR0FBR0MsUUFBUSxDQUFDL0IsYUFBVCxDQUF1QkMsR0FBdkIsQ0FBYjtBQUNBLFFBQUlNLEVBQUosRUFBUXVCLElBQUksQ0FBQ0UsWUFBTCxDQUFrQixJQUFsQixFQUF3QnpCLEVBQXhCO0FBQ1IsUUFBSUwsT0FBSixFQUFhQSxPQUFPLENBQUMrQixLQUFSLENBQWMsR0FBZCxFQUFtQnhCLE9BQW5CLENBQTJCLFVBQUFjLElBQUk7QUFBQSxhQUFJTyxJQUFJLENBQUNJLFNBQUwsQ0FBZUMsR0FBZixDQUFtQlosSUFBbkIsQ0FBSjtBQUFBLEtBQS9CO0FBQ2IsUUFBSXBCLElBQUosRUFBVTJCLElBQUksQ0FBQ00sU0FBTCxHQUFpQmpDLElBQWpCO0FBQ1YsUUFBSXlCLEdBQUosRUFBU0UsSUFBSSxDQUFDRixHQUFMLEdBQVdBLEdBQVg7QUFDVCxRQUFJQyxHQUFKLEVBQVNDLElBQUksQ0FBQ0QsR0FBTCxHQUFXQSxHQUFYO0FBQ1QsUUFBSU4sSUFBSixFQUFVTyxJQUFJLENBQUNQLElBQUwsR0FBWUEsSUFBWjtBQUNWLFFBQUlMLElBQUosRUFBVVksSUFBSSxDQUFDWixJQUFMLEdBQVlBLElBQVo7QUFDVixRQUFJRyxPQUFKLEVBQWFTLElBQUksQ0FBQ1QsT0FBTCxHQUFlQSxPQUFmO0FBQ2IsV0FBT1MsSUFBUDtBQUNELEdBYkQ7O0FBZUEsU0FBTztBQUFFOUIsaUJBQWEsRUFBYkE7QUFBRixHQUFQO0FBQ0QsQ0FqQlksRUFBYjs7QUFtQmVELG1FQUFmLEU7Ozs7Ozs7Ozs7OztBQ25CQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTXNDLElBQUksR0FBR04sUUFBUSxDQUFDTyxhQUFULENBQXVCLGFBQXZCLENBQWI7QUFFQSxJQUFNQyxNQUFNLEdBQUd4QyxnREFBSSxDQUFDQyxhQUFMLENBQW1CO0FBQUVDLEtBQUcsRUFBRSxLQUFQO0FBQ2hDQyxTQUFPLEVBQUUsbUNBRHVCO0FBQ2NDLE1BQUksRUFBRTtBQURwQixDQUFuQixDQUFmO0FBRUFrQyxJQUFJLENBQUMxQixXQUFMLENBQWlCNEIsTUFBakI7QUFFQUYsSUFBSSxDQUFDMUIsV0FBTCxDQUFpQjZCLG1EQUFNLENBQUNuQyxNQUFQLEVBQWpCO0FBQ0FnQyxJQUFJLENBQUMxQixXQUFMLENBQWlCaEIsaURBQUssQ0FBQ1UsTUFBTixFQUFqQjtBQUNBZ0MsSUFBSSxDQUFDMUIsV0FBTCxDQUFpQjhCLGdEQUFJLENBQUNwQyxNQUFMLEVBQWpCO0FBQ0FnQyxJQUFJLENBQUMxQixXQUFMLENBQWlCRSxtREFBTyxDQUFDUixNQUFSLEVBQWpCO0FBRUEsSUFBTXFDLE1BQU0sR0FBRzNDLGdEQUFJLENBQUNDLGFBQUwsQ0FBbUI7QUFBRUMsS0FBRyxFQUFFLEtBQVA7QUFBY0MsU0FBTyxFQUFFLFdBQXZCO0FBQ2hDQyxNQUFJLEVBQUU7QUFEMEIsQ0FBbkIsQ0FBZjtBQUVBa0MsSUFBSSxDQUFDMUIsV0FBTCxDQUFpQitCLE1BQWpCO0FBRUFGLG1EQUFNLENBQUNHLFNBQVAsRzs7Ozs7Ozs7Ozs7O0FDckJBO0FBQUE7QUFBQTs7QUFFQSxJQUFNRixJQUFJLEdBQUksWUFBTTtBQUNsQixNQUFNRyxTQUFTLEdBQUc7QUFDaEJDLFdBQU8sRUFBRTtBQUNQQyxVQUFJLEVBQUU7QUFDSkMsY0FBTSxFQUFFLGtDQURKO0FBRUpDLG1CQUFXLEVBQUUsMkJBRlQ7QUFHSkMsYUFBSyxFQUFFO0FBSEgsT0FEQztBQU1QQyxVQUFJLEVBQUU7QUFDSkgsY0FBTSxFQUFFLGtDQURKO0FBRUpDLG1CQUFXLEVBQUUsMEJBRlQ7QUFHSkMsYUFBSyxFQUFFO0FBSEgsT0FOQztBQVdQRSxVQUFJLEVBQUU7QUFDSkosY0FBTSxFQUFFLGtDQURKO0FBRUpDLG1CQUFXLEVBQUUsOENBRlQ7QUFHSkMsYUFBSyxFQUFFO0FBSEgsT0FYQztBQWdCUEcsY0FBUSxFQUFFO0FBQ1JMLGNBQU0sRUFBRSwyQ0FEQTtBQUVSQyxtQkFBVyxFQUFFLHFCQUZMO0FBR1JDLGFBQUssRUFBRTtBQUhDO0FBaEJILEtBRE87QUF1QmhCSSxjQUFVLEVBQUU7QUFDVkMsZUFBUyxFQUFFO0FBQ1RQLGNBQU0sRUFBRSx1Q0FEQztBQUVUQyxtQkFBVyxFQUFFLFdBRko7QUFHVEMsYUFBSyxFQUFFO0FBSEUsT0FERDtBQU1WTSxpQkFBVyxFQUFFO0FBQ1hSLGNBQU0sRUFBRSwwQ0FERztBQUVYQyxtQkFBVyxFQUFFLGNBRkY7QUFHWEMsYUFBSyxFQUFFO0FBSEksT0FOSDtBQVdWTyxZQUFNLEVBQUU7QUFDTlQsY0FBTSxFQUFFLG9DQURGO0FBRU5DLG1CQUFXLEVBQUUsUUFGUDtBQUdOQyxhQUFLLEVBQUU7QUFIRCxPQVhFO0FBZ0JWUSxpQkFBVyxFQUFFO0FBQ1hWLGNBQU0sRUFBRSwwQ0FERztBQUVYQyxtQkFBVyxFQUFFLGNBRkY7QUFHWEMsYUFBSyxFQUFFO0FBSEksT0FoQkg7QUFxQlZTLGNBQVEsRUFBRTtBQUNSWCxjQUFNLEVBQUUsdUNBREE7QUFFUkMsbUJBQVcsRUFBRSxXQUZMO0FBR1JDLGFBQUssRUFBRTtBQUhDO0FBckJBLEtBdkJJO0FBa0RoQlUsYUFBUyxFQUFFO0FBQ1RDLGdCQUFVLEVBQUU7QUFDVmIsY0FBTSxFQUFFLHlDQURFO0FBRVZDLG1CQUFXLEVBQUUsYUFGSDtBQUdWQyxhQUFLLEVBQUU7QUFIRyxPQURIO0FBTVRZLFlBQU0sRUFBRTtBQUNOZCxjQUFNLEVBQUUsb0NBREY7QUFFTkMsbUJBQVcsRUFBRSxRQUZQO0FBR05DLGFBQUssRUFBRTtBQUhELE9BTkM7QUFXVGEsaUJBQVcsRUFBRTtBQUNYZixjQUFNLEVBQUUsMENBREc7QUFFWEMsbUJBQVcsRUFBRSxjQUZGO0FBR1hDLGFBQUssRUFBRTtBQUhJO0FBWEosS0FsREs7QUFtRWhCYyxnQkFBWSxFQUFFO0FBQ1pDLFlBQU0sRUFBRTtBQUNOakIsY0FBTSxFQUFFLG9DQURGO0FBRU5DLG1CQUFXLEVBQUUsa0JBRlA7QUFHTkMsYUFBSyxFQUFFO0FBSEQsT0FESTtBQU1aZ0IsY0FBUSxFQUFFO0FBQ1JsQixjQUFNLEVBQUUsa0NBREE7QUFFUkMsbUJBQVcsRUFBRSxxQkFGTDtBQUdSQyxhQUFLLEVBQUU7QUFIQztBQU5FLEtBbkVFO0FBK0VoQmlCLGlCQUFhLEVBQUU7QUFDYkMsV0FBSyxFQUFFO0FBQ0xwQixjQUFNLEVBQUUsdUNBREg7QUFFTEMsbUJBQVcsRUFBRSxPQUZSO0FBR0xDLGFBQUssRUFBRTtBQUhGLE9BRE07QUFNYm1CLFVBQUksRUFBRTtBQUNKckIsY0FBTSxFQUFFLGtDQURKO0FBRUpDLG1CQUFXLEVBQUUsTUFGVDtBQUdKQyxhQUFLLEVBQUU7QUFISCxPQU5PO0FBV2JvQixxQkFBZSxFQUFFO0FBQ2Z0QixjQUFNLEVBQUUsOENBRE87QUFFZkMsbUJBQVcsRUFBRSx3QkFGRTtBQUdmQyxhQUFLLEVBQUU7QUFIUSxPQVhKO0FBZ0JicUIsbUJBQWEsRUFBRTtBQUNidkIsY0FBTSxFQUFFLHdDQURLO0FBRWJDLG1CQUFXLEVBQUUsc0JBRkE7QUFHYkMsYUFBSyxFQUFFO0FBSE07QUFoQkY7QUEvRUMsR0FBbEI7O0FBdUdBLE1BQU1zQixjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUFoRCxJQUFJO0FBQUEsV0FBSUEsSUFBSSxDQUFDVSxLQUFMLENBQVcsSUFBWCxFQUFpQixDQUFqQixDQUFKO0FBQUEsR0FBM0I7O0FBRUEsTUFBTXVDLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQTFDLElBQUksRUFBSTtBQUM3QixRQUFNMkMsUUFBUSxHQUFHMUUsZ0RBQUksQ0FBQ0MsYUFBTCxDQUFtQjtBQUFFQyxTQUFHLEVBQUUsS0FBUDtBQUFjQyxhQUFPLEVBQUU7QUFBdkIsS0FBbkIsQ0FBakI7QUFDQSxRQUFNd0UsUUFBUSxhQUFNSCxjQUFjLENBQUN6QyxJQUFJLENBQUNrQixXQUFOLENBQXBCLFdBQWQ7QUFDQSxRQUFNMkIsU0FBUyxHQUFHNUUsZ0RBQUksQ0FBQ0MsYUFBTCxDQUFtQjtBQUFFQyxTQUFHLEVBQUUsS0FBUDtBQUFjMkIsU0FBRyxFQUFFRSxJQUFJLENBQUNpQixNQUF4QjtBQUFnQ2xCLFNBQUcsRUFBRTZDO0FBQXJDLEtBQW5CLENBQWxCO0FBQ0EsUUFBTUUsUUFBUSxHQUFHN0UsZ0RBQUksQ0FBQ0MsYUFBTCxDQUFtQjtBQUFFQyxTQUFHLEVBQUUsS0FBUDtBQUFjQyxhQUFPLEVBQUUsaUNBQXZCO0FBQ0VDLFVBQUksWUFBSzJCLElBQUksQ0FBQ2tCLFdBQVYsY0FBeUJsQixJQUFJLENBQUNtQixLQUE5QjtBQUROLEtBQW5CLENBQWpCO0FBRUF3QixZQUFRLENBQUM5RCxXQUFULENBQXFCZ0UsU0FBckI7QUFDQUYsWUFBUSxDQUFDOUQsV0FBVCxDQUFxQmlFLFFBQXJCO0FBQ0EsV0FBT0gsUUFBUDtBQUNELEdBVEQ7O0FBV0EsTUFBTUksbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixPQUF5QztBQUFBLFFBQXRDQyxTQUFzQyxRQUF0Q0EsU0FBc0M7QUFBQSxRQUEzQkMsVUFBMkIsUUFBM0JBLFVBQTJCO0FBQUEsUUFBZkMsUUFBZSxRQUFmQSxRQUFlO0FBQ25FLFFBQU03RCxTQUFTLEdBQUdwQixnREFBSSxDQUFDQyxhQUFMLENBQW1CO0FBQUVDLFNBQUcsRUFBRSxLQUFQO0FBQWNDLGFBQU8sWUFBSzRFLFNBQUw7QUFBckIsS0FBbkIsQ0FBbEI7QUFDQSxRQUFNdkMsTUFBTSxHQUFHeEMsZ0RBQUksQ0FBQ0MsYUFBTCxDQUFtQjtBQUFFQyxTQUFHLEVBQUUsSUFBUDtBQUFhQyxhQUFPLEVBQUUsU0FBdEI7QUFBaUNDLFVBQUksRUFBRTRFO0FBQXZDLEtBQW5CLENBQWY7QUFDQTVELGFBQVMsQ0FBQ1IsV0FBVixDQUFzQjRCLE1BQXRCO0FBQ0EwQyxVQUFNLENBQUNDLE1BQVAsQ0FBY3RDLFNBQVMsQ0FBQ29DLFFBQUQsQ0FBdkIsRUFBbUN2RSxPQUFuQyxDQUEyQyxVQUFBcUIsSUFBSTtBQUFBLGFBQUlYLFNBQVMsQ0FBQ1IsV0FBVixDQUFzQjZELGNBQWMsQ0FBQzFDLElBQUQsQ0FBcEMsQ0FBSjtBQUFBLEtBQS9DO0FBQ0EsV0FBT1gsU0FBUDtBQUNELEdBTkQ7O0FBUUEsTUFBTWQsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUNuQixRQUFNQyxhQUFhLEdBQUdQLGdEQUFJLENBQUNDLGFBQUwsQ0FBbUI7QUFBRUMsU0FBRyxFQUFFLEtBQVA7QUFBY00sUUFBRSxFQUFFO0FBQWxCLEtBQW5CLENBQXRCO0FBQ0FELGlCQUFhLENBQUNLLFdBQWQsQ0FBMEJrRSxtQkFBbUIsQ0FBQztBQUFFQyxlQUFTLEVBQUUsVUFBYjtBQUF5QkMsZ0JBQVUsRUFBRSxNQUFyQztBQUE2Q0MsY0FBUSxFQUFFO0FBQXZELEtBQUQsQ0FBN0M7QUFDQTFFLGlCQUFhLENBQUNLLFdBQWQsQ0FBMEJrRSxtQkFBbUIsQ0FBQztBQUFFQyxlQUFTLEVBQUUsY0FBYjtBQUE2QkMsZ0JBQVUsRUFBRSxnQkFBekM7QUFBMkRDLGNBQVEsRUFBRTtBQUFyRSxLQUFELENBQTdDO0FBQ0ExRSxpQkFBYSxDQUFDSyxXQUFkLENBQTBCa0UsbUJBQW1CLENBQUM7QUFBRUMsZUFBUyxFQUFFLFlBQWI7QUFBMkJDLGdCQUFVLEVBQUUsUUFBdkM7QUFBaURDLGNBQVEsRUFBRTtBQUEzRCxLQUFELENBQTdDO0FBQ0EsUUFBTUcsY0FBYyxHQUFHcEYsZ0RBQUksQ0FBQ0MsYUFBTCxDQUFtQjtBQUFFQyxTQUFHLEVBQUUsS0FBUDtBQUFjQyxhQUFPLEVBQUU7QUFBdkIsS0FBbkIsQ0FBdkI7QUFDQWlGLGtCQUFjLENBQUN4RSxXQUFmLENBQTJCa0UsbUJBQW1CLENBQUM7QUFBRUMsZUFBUyxFQUFFLGdCQUFiO0FBQStCQyxnQkFBVSxFQUFFLFlBQTNDO0FBQXlEQyxjQUFRLEVBQUU7QUFBbkUsS0FBRCxDQUE5QztBQUNBRyxrQkFBYyxDQUFDeEUsV0FBZixDQUEyQmtFLG1CQUFtQixDQUFDO0FBQUVDLGVBQVMsRUFBRSxpQkFBYjtBQUFnQ0MsZ0JBQVUsRUFBRSxhQUE1QztBQUEyREMsY0FBUSxFQUFFO0FBQXJFLEtBQUQsQ0FBOUM7QUFDQTFFLGlCQUFhLENBQUNLLFdBQWQsQ0FBMEJ3RSxjQUExQjtBQUNBLFdBQU83RSxhQUFQO0FBQ0QsR0FWRDs7QUFXQSxTQUFPO0FBQUVELFVBQU0sRUFBTkE7QUFBRixHQUFQO0FBQ0QsQ0F6SVksRUFBYjs7QUEySWVvQyxtRUFBZixFOzs7Ozs7Ozs7Ozs7QUM3SUE7QUFBQTtBQUFBOztBQUVBLElBQU1ELE1BQU0sR0FBSSxZQUFNO0FBQ3BCLE1BQU1uQyxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0FBQ25CLFFBQU0rRSxJQUFJLEdBQUdyRixnREFBSSxDQUFDQyxhQUFMLENBQW1CO0FBQUVDLFNBQUcsRUFBRSxJQUFQO0FBQWFDLGFBQU8sRUFBRTtBQUF0QixLQUFuQixDQUFiO0FBQ0EsUUFBTW1GLFFBQVEsR0FBR3RGLGdEQUFJLENBQUNDLGFBQUwsQ0FBbUI7QUFBRUMsU0FBRyxFQUFFLElBQVA7QUFBYUMsYUFBTyxFQUFFLFdBQXRCO0FBQW1DQyxVQUFJLEVBQUU7QUFBekMsS0FBbkIsQ0FBakI7QUFDQSxRQUFNbUYsT0FBTyxHQUFHdkYsZ0RBQUksQ0FBQ0MsYUFBTCxDQUFtQjtBQUFFQyxTQUFHLEVBQUUsSUFBUDtBQUFhQyxhQUFPLEVBQUUsVUFBdEI7QUFBa0NDLFVBQUksRUFBRTtBQUF4QyxLQUFuQixDQUFoQjtBQUNBLFFBQU1vRixVQUFVLEdBQUd4RixnREFBSSxDQUFDQyxhQUFMLENBQW1CO0FBQUVDLFNBQUcsRUFBRSxJQUFQO0FBQWFDLGFBQU8sRUFBRSxhQUF0QjtBQUFxQ0MsVUFBSSxFQUFFO0FBQTNDLEtBQW5CLENBQW5CO0FBQ0EsUUFBTXFGLFdBQVcsR0FBR3pGLGdEQUFJLENBQUNDLGFBQUwsQ0FBbUI7QUFBRUMsU0FBRyxFQUFFLElBQVA7QUFBYUMsYUFBTyxFQUFFO0FBQXRCLEtBQW5CLENBQXBCO0FBQ0FrRixRQUFJLENBQUN6RSxXQUFMLENBQWlCMEUsUUFBakI7QUFDQUQsUUFBSSxDQUFDekUsV0FBTCxDQUFpQjJFLE9BQWpCO0FBQ0FGLFFBQUksQ0FBQ3pFLFdBQUwsQ0FBaUI0RSxVQUFqQjtBQUNBSCxRQUFJLENBQUN6RSxXQUFMLENBQWlCNkUsV0FBakI7QUFDQSxXQUFPSixJQUFQO0FBQ0QsR0FYRDs7QUFhQSxNQUFNSyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNDLFlBQUQsRUFBZUMsVUFBZixFQUE4QjtBQUNsREQsZ0JBQVksQ0FBQ2pGLE9BQWIsQ0FBcUIsVUFBQW1GLE9BQU8sRUFBSTtBQUM5QixVQUFJQSxPQUFPLENBQUNyRSxJQUFSLElBQWdCb0UsVUFBcEIsRUFBZ0M7QUFDOUJDLGVBQU8sQ0FBQ0MsR0FBUixDQUFZQyxLQUFaLENBQWtCQyxPQUFsQixHQUE0QixPQUE1QjtBQUNELE9BRkQsTUFFTztBQUNMSCxlQUFPLENBQUNDLEdBQVIsQ0FBWUMsS0FBWixDQUFrQkMsT0FBbEIsR0FBNEIsTUFBNUI7QUFDRDtBQUNGLEtBTkQ7QUFPRCxHQVJEOztBQVVBLE1BQU1wRCxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQ3RCLFFBQUlxRCxRQUFRLEdBQUcsRUFBZjtBQUNBLEtBQUMsT0FBRCxFQUFVLE1BQVYsRUFBa0IsU0FBbEIsRUFBNkJ2RixPQUE3QixDQUFxQyxVQUFBYyxJQUFJO0FBQUEsYUFBSXlFLFFBQVEsQ0FBQ0MsSUFBVCxDQUFjO0FBQUUxRSxZQUFJLEVBQUVBO0FBQVIsT0FBZCxDQUFKO0FBQUEsS0FBekM7QUFDQXlFLFlBQVEsQ0FBQ3ZGLE9BQVQsQ0FBaUIsVUFBQXlGLENBQUM7QUFBQSxhQUFJQSxDQUFDLENBQUNMLEdBQUYsR0FBUTlELFFBQVEsQ0FBQ08sYUFBVCxZQUEyQjRELENBQUMsQ0FBQzNFLElBQTdCLEVBQVo7QUFBQSxLQUFsQjtBQUNBeUUsWUFBUSxDQUFDdkYsT0FBVCxDQUFpQixVQUFBeUYsQ0FBQyxFQUFJO0FBQ3BCLFVBQU1DLFFBQVEsR0FBR3BFLFFBQVEsQ0FBQ08sYUFBVCxnQkFBK0I0RCxDQUFDLENBQUMzRSxJQUFqQyxFQUFqQjtBQUNBNEUsY0FBUSxDQUFDQyxnQkFBVCxDQUEwQixPQUExQixFQUFtQztBQUFBLGVBQU1YLGFBQWEsQ0FBQ08sUUFBRCxFQUFXRSxDQUFDLENBQUMzRSxJQUFiLENBQW5CO0FBQUEsT0FBbkM7QUFDRCxLQUhEO0FBSUFrRSxpQkFBYSxDQUFDTyxRQUFELEVBQVdBLFFBQVEsQ0FBQyxDQUFELENBQVIsQ0FBWXpFLElBQXZCLENBQWI7QUFDRCxHQVREOztBQVdBLFNBQU87QUFBRWxCLFVBQU0sRUFBTkEsTUFBRjtBQUFVc0MsYUFBUyxFQUFUQTtBQUFWLEdBQVA7QUFDRCxDQXBDYyxFQUFmOztBQXNDZUgscUVBQWYsRSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgaHRtbCBmcm9tICcuL2h0bWwuanMnO1xuXG5jb25zdCBhYm91dCA9ICgoKSA9PiB7XG4gIGNvbnN0IGRlc2NyaXB0aW9uU2FmZnJvbiA9ICdTYWZmcm9uIGlzIGEgc3BpY2UgZGVyaXZlZCBmcm9tIHRoZSBmbG93ZXIuJ1xuICAgICsgJ1RoZSB0aHJlYWRzIG9mIHRoZSBmbG93ZXIgYXJlIGNvbGxlY3RlZCBhbmQgZHJpZWQgdG8gYmUgdXNlZCBtYWlubHkgYXMgYSdcbiAgICArICdzZWFzb25pbmcgYW5kIGNvbG91cmluZyBhZ2VudCBpbiBmb29kLic7XG5cbiAgY29uc3QgZGVzY3JpcHRpb25WZWdldGFyaWFuID0gJ1ZlZ2V0YWJsZXMgY29udGFpbiBpbXBvcnRhbnQgdml0YW1pbnMgYW5kIG1pbmVyYWxzIGZvciBvdXIgYm9keS4nXG4gICAgKyAnT3VyIHJlc3RhdXJhbnQgc2VydmUgc291dGggSW5kaWFuIGN1aXNpbmUgbWFkZSBieSBmcmVzaCB2ZWdldGFibGVzLidcbiAgICArICdQbGVhc2UgdmlzaXQgdXMgdG8gZW5qb3kgaGVhbHRoeSBtZWFscyBhbmQgdGhlIGZsYXZvdXIgd2l0aCBzcGljZS4nO1xuXG4gIGNvbnN0IHdyaXRlRGVzY3JpcHRpb25zID0gKCkgPT4gW1xuICAgIGh0bWwuY3JlYXRlRWxlbWVudCh7IHRhZzogJ2gxJywgY2xhc3NlczogJ3RleHQtYWxpZ24tY2VudGVyIGgtdGl0bGUnLCB0ZXh0OiAnQWJvdXQgVXMnIH0pLFxuICAgIGh0bWwuY3JlYXRlRWxlbWVudCh7IHRhZzogJ3AnLCBjbGFzc2VzOiAnZGVzY3JpcHRpb24nLCB0ZXh0OiBkZXNjcmlwdGlvblNhZmZyb24gfSksXG4gICAgaHRtbC5jcmVhdGVFbGVtZW50KHsgdGFnOiAncCcsIGNsYXNzZXM6ICdkZXNjcmlwdGlvbicsIHRleHQ6IGRlc2NyaXB0aW9uVmVnZXRhcmlhbiB9KSxcbiAgXTtcblxuICBjb25zdCB3cml0ZUluZm9zID0gKCkgPT4gW1xuICAgIGh0bWwuY3JlYXRlRWxlbWVudCh7IHRhZzogJ3NwYW4nLCBjbGFzc2VzOiAndGl0bGUnLCB0ZXh0OiAnQUREUkVTUzonIH0pLFxuICAgIGh0bWwuY3JlYXRlRWxlbWVudCh7IHRhZzogJ3NwYW4nLCB0ZXh0OiAneHh4LCBUYW1pbCBOYWR1LCBJbmRpYVxcbicgfSksXG4gICAgaHRtbC5jcmVhdGVFbGVtZW50KHsgdGFnOiAnc3BhbicsIGNsYXNzZXM6ICd0aXRsZScsIHRleHQ6ICdDT05UQUNUOicgfSksXG4gICAgaHRtbC5jcmVhdGVFbGVtZW50KHsgdGFnOiAnc3BhbicsIHRleHQ6ICcrOTEueHh4eC54eHh4XFxuJyB9KSxcbiAgICBodG1sLmNyZWF0ZUVsZW1lbnQoeyB0YWc6ICdzcGFuJywgY2xhc3NlczogJ3RpdGxlJywgdGV4dDogJ0NVSVNJTkU6JyB9KSxcbiAgICBodG1sLmNyZWF0ZUVsZW1lbnQoeyB0YWc6ICdzcGFuJywgdGV4dDogJ1NvdXRoIEluZGlhblxcbicgfSksXG4gICAgaHRtbC5jcmVhdGVFbGVtZW50KHsgdGFnOiAnc3BhbicsIGNsYXNzZXM6ICd0aXRsZScsIHRleHQ6ICdUSU1JTkdTOicgfSksXG4gICAgaHRtbC5jcmVhdGVFbGVtZW50KHsgdGFnOiAnc3BhbicsIHRleHQ6ICcwNzowMCBBTSAtIDI6MzAgUE0sIDQ6MDAgUE0gLSA4OjMwIFBNXFxuJyB9KSxcbiAgXTtcblxuICBjb25zdCBjcmVhdGUgPSAoKSA9PiB7XG4gICAgY29uc3QgbWFpbkNvbnRhaW5lciA9IGh0bWwuY3JlYXRlRWxlbWVudCh7IHRhZzogJ2RpdicsIGlkOiAnYWJvdXQnLCBjbGFzc2VzOiAnbWFpbi1jb250ZW50cycgfSk7XG4gICAgY29uc3QgaW5mb0NvbnRhaW5lciA9IGh0bWwuY3JlYXRlRWxlbWVudCh7IHRhZzogJ2RpdicsIGNsYXNzZXM6ICdhYm91dC1pbmZvIHdoaXRlLXNwYWNlLXByZScgfSk7XG4gICAgd3JpdGVJbmZvcygpLmZvckVhY2goaW5mbyA9PiBpbmZvQ29udGFpbmVyLmFwcGVuZENoaWxkKGluZm8pKTtcbiAgICB3cml0ZURlc2NyaXB0aW9ucygpLmZvckVhY2goZGVzY3JpcHRpb24gPT4gbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbikpO1xuICAgIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQoaW5mb0NvbnRhaW5lcik7XG4gICAgcmV0dXJuIG1haW5Db250YWluZXI7XG4gIH07XG4gIHJldHVybiB7IGNyZWF0ZSB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgYWJvdXQ7XG4iLCJpbXBvcnQgaHRtbCBmcm9tICcuL2h0bWwuanMnO1xuXG5jb25zdCBjb250YWN0ID0gKCgpID0+IHtcbiAgY29uc3QgZGVzY3JpcHRpb25Db250YWN0ID0gJ0RvIHlvdSBoYXZlIGEgc3VnZ2VzdGlvbiBvciBhbnkgc2VydmljZSByZWxhdGVkIHF1ZXJ5PydcbiAgKyAnRmVlbCBmcmVlIHRvIHJlYWNoIG91dCB0byB1cyEgV2hldGhlciBpdCBpcyBhIGNvbXBsYWludCBvciBhIGNvbXBsaW1lbnQsJ1xuICArICd3ZSB3aWxsIHJlc3BvbmQgdG8geW91ciBmZWVkYmFjay4gSGVhcmluZyBmcm9tIHlvdSBtb3RpdmF0ZXMgdXMgdG8gb2ZmZXInXG4gICsgJ3RoZSBiZXN0IHNlcnZpY2VzIGFuZCB0byBjYXRlciB0byBhbnkgc3BlY2lhbCByZXF1ZXN0Lic7XG5cbiAgY29uc3QgZGVzY3JpcHRpb25Gb3JtID0gJ1BsZWFzZSBmaWxsIG91dCB0aGlzIGZvcm0gYmVsb3cuIFdlIHdpbGwgYmUgaW4gdG91Y2ggd2l0aCB5b3Ugc29vbi4nO1xuXG4gIGNvbnN0IHdyaXRlRGVzY3JpcHRpb25zID0gKCkgPT4gW1xuICAgIGh0bWwuY3JlYXRlRWxlbWVudCh7IHRhZzogJ2gxJywgY2xhc3NlczogJ3RleHQtYWxpZ24tY2VudGVyIGgtdGl0bGUnLCB0ZXh0OiAnQ29udGFjdCBVcycgfSksXG4gICAgaHRtbC5jcmVhdGVFbGVtZW50KHsgdGFnOiAncCcsIGNsYXNzZXM6ICdkZXNjcmlwdGlvbicsIHRleHQ6IGRlc2NyaXB0aW9uQ29udGFjdCB9KSxcbiAgICBodG1sLmNyZWF0ZUVsZW1lbnQoeyB0YWc6ICdwJywgY2xhc3NlczogJ2Rlc2NyaXB0aW9uJywgdGV4dDogZGVzY3JpcHRpb25Gb3JtIH0pLFxuICBdO1xuXG4gIGNvbnN0IGJ1aWxkRmllbGQgPSAoeyBpZCwgd3JpdGVUYWcsIHR5cGUsIHRleHQgfSkgPT4ge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGh0bWwuY3JlYXRlRWxlbWVudCh7IHRhZzogJ2RpdicsIGNsYXNzZXM6ICdmaWVsZCcgfSk7XG4gICAgY29uc3QgbGFiZWwgPSBodG1sLmNyZWF0ZUVsZW1lbnQoeyB0YWc6ICdsYWJlbCcsIGh0bWxGb3I6IGlkLCB0ZXh0OiB0ZXh0IH0pO1xuICAgIGxldCB3cml0ZTtcbiAgICBpZiAod3JpdGVUYWcgPT0gJ2lucHV0Jykge1xuICAgICAgd3JpdGUgPSBodG1sLmNyZWF0ZUVsZW1lbnQoeyB0YWc6IHdyaXRlVGFnLCBpZDogaWQsIG5hbWU6IGlkLCB0eXBlOiB0eXBlIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB3cml0ZSA9IGh0bWwuY3JlYXRlRWxlbWVudCh7IHRhZzogd3JpdGVUYWcsIGlkOiBpZCwgbmFtZTogaWQsIGNsYXNzZXM6IGlkIH0pO1xuICAgIH1cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh3cml0ZSk7XG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgfVxuXG4gIGNvbnN0IGJ1aWxkRm9ybSA9ICgpID0+IHtcbiAgICBjb25zdCBmb3JtQ29udGFpbmVyID0gaHRtbC5jcmVhdGVFbGVtZW50KHsgdGFnOiAnZm9ybScsIGNsYXNzZXM6ICdjb250YWN0X2Zvcm0nIH0pO1xuICAgIGNvbnN0IGZpZWxkU2V0ID0gaHRtbC5jcmVhdGVFbGVtZW50KHsgdGFnOiAnZmllbGRzZXQnIH0pO1xuICAgIGZpZWxkU2V0LmFwcGVuZENoaWxkKGJ1aWxkRmllbGQoeyBpZDogJ3VzZXJuYW1lJywgd3JpdGVUYWc6ICdpbnB1dCcsIHR5cGU6ICd0ZXh0JywgdGV4dDogJ05hbWUnIH0pKTtcbiAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKGZpZWxkU2V0KTtcbiAgICBmaWVsZFNldC5hcHBlbmRDaGlsZChidWlsZEZpZWxkKHsgaWQ6ICdlbWFpbCcsIHdyaXRlVGFnOiAnaW5wdXQnLCB0eXBlOiAnZW1haWwnLCB0ZXh0OiAnRW1haWwnIH0pKTtcbiAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKGZpZWxkU2V0KTtcbiAgICBmaWVsZFNldC5hcHBlbmRDaGlsZChidWlsZEZpZWxkKHsgaWQ6ICdjb250YWN0X25vJywgd3JpdGVUYWc6ICdpbnB1dCcsIHR5cGU6ICd0ZWwnLCB0ZXh0OiAnQ29udGFjdCBuby4nIH0pKTtcbiAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKGZpZWxkU2V0KTtcbiAgICBmaWVsZFNldC5hcHBlbmRDaGlsZChidWlsZEZpZWxkKHsgaWQ6ICdzdG9yZScsIHdyaXRlVGFnOiAnaW5wdXQnLCB0eXBlOiAndGV4dCcsXG4gICAgICB0ZXh0OiAnU3RvcmUgbmFtZSAmIExvY2F0aW9uIChpZiBhcHBsaWNhYmxlKScgfSkpO1xuICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQoZmllbGRTZXQpO1xuICAgIGZpZWxkU2V0LmFwcGVuZENoaWxkKGJ1aWxkRmllbGQoeyBpZDogJ2NvbW1lbnRzJywgd3JpdGVUYWc6ICd0ZXh0YXJlYScsIGNsYXNzZXM6ICdjb21tZW50cycsIHRleHQ6ICdDb21tZW50cycgfSkpO1xuICAgIGNvbnN0IHN1Ym1pdEJ0biA9IGh0bWwuY3JlYXRlRWxlbWVudCh7IHRhZzogJ2J1dHRvbicsIGNsYXNzZXM6ICdzdWJtaXQtYnRuJywgdGV4dDogJ1NlbmQnIH0pO1xuICAgIGZpZWxkU2V0LmFwcGVuZENoaWxkKHN1Ym1pdEJ0bik7XG4gICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChmaWVsZFNldCk7XG4gICAgcmV0dXJuIGZvcm1Db250YWluZXI7XG4gIH1cblxuICBjb25zdCBjcmVhdGUgPSAoKSA9PiB7XG4gICAgY29uc3QgbWFpbkNvbnRhaW5lciA9IGh0bWwuY3JlYXRlRWxlbWVudCh7IHRhZzogJ2RpdicsIGlkOiAnY29udGFjdCcsIGNsYXNzZXM6ICdtYWluLWNvbnRlbnRzJyB9KTtcbiAgICB3cml0ZURlc2NyaXB0aW9ucygpLmZvckVhY2goZGVzY3JpcHRpb24gPT4gbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbikpO1xuICAgIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQoYnVpbGRGb3JtKCkpO1xuICAgIHJldHVybiBtYWluQ29udGFpbmVyO1xuICB9O1xuICByZXR1cm4geyBjcmVhdGUgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRhY3Q7XG4iLCJjb25zdCBodG1sID0gKCgpID0+IHtcbiAgY29uc3QgY3JlYXRlRWxlbWVudCA9ICh7XG4gICAgdGFnLCBpZCwgY2xhc3NlcywgdGV4dCwgc3JjLCBhbHQsIG5hbWUsIHR5cGUsIGh0bWxGb3IsXG4gIH0pID0+IHtcbiAgICBjb25zdCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xuICAgIGlmIChpZCkgaXRlbS5zZXRBdHRyaWJ1dGUoJ2lkJywgaWQpO1xuICAgIGlmIChjbGFzc2VzKSBjbGFzc2VzLnNwbGl0KCcgJykuZm9yRWFjaChuYW1lID0+IGl0ZW0uY2xhc3NMaXN0LmFkZChuYW1lKSk7XG4gICAgaWYgKHRleHQpIGl0ZW0uaW5uZXJIVE1MID0gdGV4dDtcbiAgICBpZiAoc3JjKSBpdGVtLnNyYyA9IHNyYztcbiAgICBpZiAoYWx0KSBpdGVtLmFsdCA9IGFsdDtcbiAgICBpZiAobmFtZSkgaXRlbS5uYW1lID0gbmFtZTtcbiAgICBpZiAodHlwZSkgaXRlbS50eXBlID0gdHlwZTtcbiAgICBpZiAoaHRtbEZvcikgaXRlbS5odG1sRm9yID0gaHRtbEZvcjtcbiAgICByZXR1cm4gaXRlbTtcbiAgfTtcblxuICByZXR1cm4geyBjcmVhdGVFbGVtZW50IH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBodG1sO1xuIiwiaW1wb3J0IG5hdlRhcCBmcm9tICcuL25hdl90YXAuanMnO1xuaW1wb3J0IGFib3V0IGZyb20gJy4vYWJvdXQuanMnO1xuaW1wb3J0IG1lbnUgZnJvbSAnLi9tZW51LmpzJztcbmltcG9ydCBjb250YWN0IGZyb20gJy4vY29udGFjdC5qcyc7XG5pbXBvcnQgaHRtbCBmcm9tICcuL2h0bWwuanMnO1xuXG5jb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGl2I2NvbnRlbnQnKTtcblxuY29uc3QgaGVhZGVyID0gaHRtbC5jcmVhdGVFbGVtZW50KHsgdGFnOiAnZGl2JyxcbiAgY2xhc3NlczogJ3Jlc3RhdXJhbnQtbmFtZSB0ZXh0LXN0cm9rZS1ibGFjaycsIHRleHQ6ICdTYWZmcm9uIFZlZycgfSk7XG5tYWluLmFwcGVuZENoaWxkKGhlYWRlcik7XG5cbm1haW4uYXBwZW5kQ2hpbGQobmF2VGFwLmNyZWF0ZSgpKTtcbm1haW4uYXBwZW5kQ2hpbGQoYWJvdXQuY3JlYXRlKCkpO1xubWFpbi5hcHBlbmRDaGlsZChtZW51LmNyZWF0ZSgpKTtcbm1haW4uYXBwZW5kQ2hpbGQoY29udGFjdC5jcmVhdGUoKSk7XG5cbmNvbnN0IGZvb3RlciA9IGh0bWwuY3JlYXRlRWxlbWVudCh7IHRhZzogJ2RpdicsIGNsYXNzZXM6ICdjb3B5cmlnaHQnLFxuICB0ZXh0OiAnwqkgQ29weXJpZ2h0IDIwMTkgU2FmZnJvbiB2ZWcuIEFsbCByaWdodHMgcmVzZXJ2ZWQuJyB9KTtcbm1haW4uYXBwZW5kQ2hpbGQoZm9vdGVyKTtcblxubmF2VGFwLmFkZENsaWNrcygpO1xuIiwiaW1wb3J0IGh0bWwgZnJvbSAnLi9odG1sLmpzJztcblxuY29uc3QgbWVudSA9ICgoKSA9PiB7XG4gIGNvbnN0IG1lbnVJdGVtcyA9IHtcbiAgICBzZXRNZW51OiB7XG4gICAgICBkb3NhOiB7XG4gICAgICAgIGltZ1NyYzogJy4vLi4vYXNzZXRzL2ltYWdlcy9kb3NhXzMyMC53ZWJwJyxcbiAgICAgICAgZGlzcGxheU5hbWU6ICdEb3NhaSAoKyBzYW1iYXIsIGNodXRuZXkpJyxcbiAgICAgICAgcHJpY2U6ICdScy42MCcsXG4gICAgICB9LFxuICAgICAgdXBtYToge1xuICAgICAgICBpbWdTcmM6ICcuLy4uL2Fzc2V0cy9pbWFnZXMvdXBtYV8zMjAud2VicCcsXG4gICAgICAgIGRpc3BsYXlOYW1lOiAnVXBtYSAoKyBzYW1iYXIsIGNodXRuZXkpJyxcbiAgICAgICAgcHJpY2U6ICdScy42MCcsXG4gICAgICB9LFxuICAgICAgaWRseToge1xuICAgICAgICBpbWdTcmM6ICcuLy4uL2Fzc2V0cy9pbWFnZXMvaWRseV8zMjAud2VicCcsXG4gICAgICAgIGRpc3BsYXlOYW1lOiAnSG90IElkbGkgKCsgc2FtYmFyLCBjaHV0bmV5LCBicmVha2Zhc3Qgb25seSknLFxuICAgICAgICBwcmljZTogJ1JzLjYwJyxcbiAgICAgIH0sXG4gICAgICBiaXNpQmVsZToge1xuICAgICAgICBpbWdTcmM6ICcuLy4uL2Fzc2V0cy9pbWFnZXMvYmlzaWJlbGVfYmF0aF8zMjAud2VicCcsXG4gICAgICAgIGRpc3BsYXlOYW1lOiAnQmlzaSBiZWxlICgrIGNoaXBzKScsXG4gICAgICAgIHByaWNlOiAnUnMuODAnLFxuICAgICAgfSxcbiAgICB9LFxuICAgIG5vblNldE1lbnU6IHtcbiAgICAgIGNoaXRyYW5uYToge1xuICAgICAgICBpbWdTcmM6ICcuLy4uL2Fzc2V0cy9pbWFnZXMvY2hpdHJhbm5hXzMyMC53ZWJwJyxcbiAgICAgICAgZGlzcGxheU5hbWU6ICdDaGl0cmFubmEnLFxuICAgICAgICBwcmljZTogJ1JzLjQwJyxcbiAgICAgIH0sXG4gICAgICBjaGFuYU1hc2FsYToge1xuICAgICAgICBpbWdTcmM6ICcuLy4uL2Fzc2V0cy9pbWFnZXMvY2hhbmFfbWFzYWxhXzMyMC53ZWJwJyxcbiAgICAgICAgZGlzcGxheU5hbWU6ICdDaGFuYSBtYXNhbGEnLFxuICAgICAgICBwcmljZTogJ1JzLjQwJyxcbiAgICAgIH0sXG4gICAgICBzYW1iYXI6IHtcbiAgICAgICAgaW1nU3JjOiAnLi8uLi9hc3NldHMvaW1hZ2VzL3NhbWJhcl8zMjAud2VicCcsXG4gICAgICAgIGRpc3BsYXlOYW1lOiAnU2FtYmFyJyxcbiAgICAgICAgcHJpY2U6ICdScy4zMCcsXG4gICAgICB9LFxuICAgICAgcG90YXRvQ3Vycnk6IHtcbiAgICAgICAgaW1nU3JjOiAnLi8uLi9hc3NldHMvaW1hZ2VzL3BvdGF0b19jdXJyeV8zMjAud2VicCcsXG4gICAgICAgIGRpc3BsYXlOYW1lOiAnUG90YXRvIGN1cnJ5JyxcbiAgICAgICAgcHJpY2U6ICdScy40MCcsXG4gICAgICB9LFxuICAgICAgYWxvb1ZhZGE6IHtcbiAgICAgICAgaW1nU3JjOiAnLi8uLi9hc3NldHMvaW1hZ2VzL2Fsb29fdmFkYV8yMTMud2VicCcsXG4gICAgICAgIGRpc3BsYXlOYW1lOiAnQWxvbyB2YWRhJyxcbiAgICAgICAgcHJpY2U6ICdScy4yMCcsXG4gICAgICB9LFxuICAgIH0sXG4gICAgc3dlZXRNZW51OiB7XG4gICAgICBndWxhYkphbXVuOiB7XG4gICAgICAgIGltZ1NyYzogJy4vLi4vYXNzZXRzL2ltYWdlcy9ndWxhYl9qYW11bl8yMTMud2VicCcsXG4gICAgICAgIGRpc3BsYXlOYW1lOiAnR3VsYWIgamFtdW4nLFxuICAgICAgICBwcmljZTogJ1JzLjEwJyxcbiAgICAgIH0sXG4gICAgICBqYWxlYmk6IHtcbiAgICAgICAgaW1nU3JjOiAnLi8uLi9hc3NldHMvaW1hZ2VzL2phbGViaV8zMjAud2VicCcsXG4gICAgICAgIGRpc3BsYXlOYW1lOiAnSmFsZWJpJyxcbiAgICAgICAgcHJpY2U6ICdScy4xMCcsXG4gICAgICB9LFxuICAgICAgY2Fycm90SGFsd2E6IHtcbiAgICAgICAgaW1nU3JjOiAnLi8uLi9hc3NldHMvaW1hZ2VzL2NhcnJvdF9oYWx3YV8yMTMud2VicCcsXG4gICAgICAgIGRpc3BsYXlOYW1lOiAnQ2Fycm90IGhhbHdhJyxcbiAgICAgICAgcHJpY2U6ICdScy4yMCcsXG4gICAgICB9LFxuICAgIH0sXG4gICAgaG90RHJpbmtNZW51OiB7XG4gICAgICBjb2ZmZWU6IHtcbiAgICAgICAgaW1nU3JjOiAnLi8uLi9hc3NldHMvaW1hZ2VzL2NvZmZlZV8zMjAud2VicCcsXG4gICAgICAgIGRpc3BsYXlOYW1lOiAnQ29mZmVlIHdpdGggbWlsaycsXG4gICAgICAgIHByaWNlOiAnUnMuMjAnLFxuICAgICAgfSxcbiAgICAgIGJsYWNrVGVhOiB7XG4gICAgICAgIGltZ1NyYzogJy4vLi4vYXNzZXRzL2ltYWdlcy9jaGFpXzIxMy53ZWJwJyxcbiAgICAgICAgZGlzcGxheU5hbWU6ICdCbGFjayB0ZWEgd2l0aCBtaWxrJyxcbiAgICAgICAgcHJpY2U6ICdScy4yMCcsXG4gICAgICB9LFxuICAgIH0sXG4gICAgY29sZERyaW5rTWVudToge1xuICAgICAgd2F0ZXI6IHtcbiAgICAgICAgaW1nU3JjOiAnLi8uLi9hc3NldHMvaW1hZ2VzL3dhdGVyX2p1Z18yMTMud2VicCcsXG4gICAgICAgIGRpc3BsYXlOYW1lOiAnV2F0ZXInLFxuICAgICAgICBwcmljZTogJ1JzLjIwJyxcbiAgICAgIH0sXG4gICAgICBjb2xhOiB7XG4gICAgICAgIGltZ1NyYzogJy4vLi4vYXNzZXRzL2ltYWdlcy9jb2xhXzIxMy53ZWJwJyxcbiAgICAgICAgZGlzcGxheU5hbWU6ICdDb2xhJyxcbiAgICAgICAgcHJpY2U6ICdScy40MCcsXG4gICAgICB9LFxuICAgICAgcG9tZWdyYW5hdGVNaWxrOiB7XG4gICAgICAgIGltZ1NyYzogJy4vLi4vYXNzZXRzL2ltYWdlcy9wb21lZ3JhbmF0ZV9taWxrXzIxMy53ZWJwJyxcbiAgICAgICAgZGlzcGxheU5hbWU6ICdQb21lZ3JhbmF0ZSBtaWxrIHNoYWtlJyxcbiAgICAgICAgcHJpY2U6ICdScy42MCcsXG4gICAgICB9LFxuICAgICAgY2hvY29sYXRlTWlsazoge1xuICAgICAgICBpbWdTcmM6ICcuLy4uL2Fzc2V0cy9pbWFnZXMvY2hvY29fbWlsa18yMTMud2VicCcsXG4gICAgICAgIGRpc3BsYXlOYW1lOiAnQ2hvY29sYXRlIG1pbGsgc2hha2UnLFxuICAgICAgICBwcmljZTogJ1JzLjYwJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgfTtcblxuICBjb25zdCByZW1vdmVTaWRlRGlzaCA9IG5hbWUgPT4gbmFtZS5zcGxpdCgnICgnKVswXTtcblxuICBjb25zdCBjcmVhdGVGb29kSXRlbSA9IGl0ZW0gPT4ge1xuICAgIGNvbnN0IGZvb2RJdGVtID0gaHRtbC5jcmVhdGVFbGVtZW50KHsgdGFnOiAnZGl2JywgY2xhc3NlczogJ2Zvb2QtaXRlbScgfSk7XG4gICAgY29uc3QgaW1hZ2VBbHQgPSBgJHtyZW1vdmVTaWRlRGlzaChpdGVtLmRpc3BsYXlOYW1lKX0gaW1hZ2VgO1xuICAgIGNvbnN0IGZvb2RJbWFnZSA9IGh0bWwuY3JlYXRlRWxlbWVudCh7IHRhZzogJ2ltZycsIHNyYzogaXRlbS5pbWdTcmMsIGFsdDogaW1hZ2VBbHQgfSk7XG4gICAgY29uc3QgZm9vZEJvZHkgPSBodG1sLmNyZWF0ZUVsZW1lbnQoeyB0YWc6ICdkaXYnLCBjbGFzc2VzOiAnbWVudS1kZXNjcmlwdGlvbiBvdmVyZmxvdy1icmVhaycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBgJHtpdGVtLmRpc3BsYXlOYW1lfSAke2l0ZW0ucHJpY2V9YCB9KTtcbiAgICBmb29kSXRlbS5hcHBlbmRDaGlsZChmb29kSW1hZ2UpO1xuICAgIGZvb2RJdGVtLmFwcGVuZENoaWxkKGZvb2RCb2R5KTtcbiAgICByZXR1cm4gZm9vZEl0ZW07XG4gIH1cblxuICBjb25zdCBjcmVhdGVGb29kSXRlbUdyb3VwID0gKHsgaXRlbUNsYXNzLCBoZWFkZXJUZXh0LCBtZW51SXRlbSB9KSA9PiB7XG4gICAgY29uc3QgY29udGFpbmVyID0gaHRtbC5jcmVhdGVFbGVtZW50KHsgdGFnOiAnZGl2JywgY2xhc3NlczogYCR7aXRlbUNsYXNzfSBmb29kLWl0ZW1zIGQtZmxleCBmbGV4LXdyYXBgIH0pO1xuICAgIGNvbnN0IGhlYWRlciA9IGh0bWwuY3JlYXRlRWxlbWVudCh7IHRhZzogJ2gxJywgY2xhc3NlczogJ2gtdGl0bGUnLCB0ZXh0OiBoZWFkZXJUZXh0IH0pO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgIE9iamVjdC52YWx1ZXMobWVudUl0ZW1zW21lbnVJdGVtXSkuZm9yRWFjaChpdGVtID0+IGNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVGb29kSXRlbShpdGVtKSkpO1xuICAgIHJldHVybiBjb250YWluZXI7XG4gIH1cblxuICBjb25zdCBjcmVhdGUgPSAoKSA9PiB7XG4gICAgY29uc3QgbWFpbkNvbnRhaW5lciA9IGh0bWwuY3JlYXRlRWxlbWVudCh7IHRhZzogJ2RpdicsIGlkOiAnbWVudSd9KTtcbiAgICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUZvb2RJdGVtR3JvdXAoeyBpdGVtQ2xhc3M6ICdzZXQtbWVudScsIGhlYWRlclRleHQ6ICdNZWFsJywgbWVudUl0ZW06ICdzZXRNZW51JyB9KSk7XG4gICAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVGb29kSXRlbUdyb3VwKHsgaXRlbUNsYXNzOiAnbm9uLXNldC1tZW51JywgaGVhZGVyVGV4dDogJ0dlbmVyYWwgRGlzaGVzJywgbWVudUl0ZW06ICdub25TZXRNZW51JyB9KSk7XG4gICAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVGb29kSXRlbUdyb3VwKHsgaXRlbUNsYXNzOiAnc3dlZXQtbWVudScsIGhlYWRlclRleHQ6ICdTd2VldHMnLCBtZW51SXRlbTogJ3N3ZWV0TWVudScgfSkpO1xuICAgIGNvbnN0IGRyaW5rQ29udGFpbmVyID0gaHRtbC5jcmVhdGVFbGVtZW50KHsgdGFnOiAnZGl2JywgY2xhc3NlczogJ2RyaW5rLW1lbnUgZm9vZC1pdGVtcyBkLWZsZXggZmxleC13cmFwJ30pO1xuICAgIGRyaW5rQ29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUZvb2RJdGVtR3JvdXAoeyBpdGVtQ2xhc3M6ICdob3QtZHJpbmstbWVudScsIGhlYWRlclRleHQ6ICdIb3QgZHJpbmtzJywgbWVudUl0ZW06ICdob3REcmlua01lbnUnfSkpO1xuICAgIGRyaW5rQ29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUZvb2RJdGVtR3JvdXAoeyBpdGVtQ2xhc3M6ICdjb2xkLWRyaW5rLW1lbnUnLCBoZWFkZXJUZXh0OiAnQ29sZCBkcmlua3MnLCBtZW51SXRlbTogJ2NvbGREcmlua01lbnUnfSkpO1xuICAgIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQoZHJpbmtDb250YWluZXIpO1xuICAgIHJldHVybiBtYWluQ29udGFpbmVyO1xuICB9O1xuICByZXR1cm4geyBjcmVhdGUgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IG1lbnU7XG4iLCJpbXBvcnQgaHRtbCBmcm9tICcuL2h0bWwuanMnXG5cbmNvbnN0IG5hdlRhcCA9ICgoKSA9PiB7XG4gIGNvbnN0IGNyZWF0ZSA9ICgpID0+IHtcbiAgICBjb25zdCB0YXBzID0gaHRtbC5jcmVhdGVFbGVtZW50KHsgdGFnOiAndWwnLCBjbGFzc2VzOiAnbmF2LXRhcCBsaXN0LXN0eWxlLW5vbmUnIH0pO1xuICAgIGNvbnN0IHRhcEFib3V0ID0gaHRtbC5jcmVhdGVFbGVtZW50KHsgdGFnOiAnbGknLCBjbGFzc2VzOiAndGFwLWFib3V0JywgdGV4dDogJ2Fib3V0JyB9KTtcbiAgICBjb25zdCB0YXBNZW51ID0gaHRtbC5jcmVhdGVFbGVtZW50KHsgdGFnOiAnbGknLCBjbGFzc2VzOiAndGFwLW1lbnUnLCB0ZXh0OiAnbWVudScgfSk7XG4gICAgY29uc3QgdGFwQ29udGFjdCA9IGh0bWwuY3JlYXRlRWxlbWVudCh7IHRhZzogJ2xpJywgY2xhc3NlczogJ3RhcC1jb250YWN0JywgdGV4dDogJ2NvbnRhY3QnIH0pO1xuICAgIGNvbnN0IHRhcFJlc2VydmVkID0gaHRtbC5jcmVhdGVFbGVtZW50KHsgdGFnOiAnbGknLCBjbGFzc2VzOiAndGFwLXJlc2VydmVkJyB9KTtcbiAgICB0YXBzLmFwcGVuZENoaWxkKHRhcEFib3V0KTtcbiAgICB0YXBzLmFwcGVuZENoaWxkKHRhcE1lbnUpO1xuICAgIHRhcHMuYXBwZW5kQ2hpbGQodGFwQ29udGFjdCk7XG4gICAgdGFwcy5hcHBlbmRDaGlsZCh0YXBSZXNlcnZlZCk7XG4gICAgcmV0dXJuIHRhcHM7XG4gIH07XG5cbiAgY29uc3QgdG9nZ2xlUGFydGlhbCA9IChwYXJ0aWFsR3JvdXAsIGNob2ljZU5hbWUpID0+IHtcbiAgICBwYXJ0aWFsR3JvdXAuZm9yRWFjaChwYXJ0aWFsID0+IHtcbiAgICAgIGlmIChwYXJ0aWFsLm5hbWUgPT0gY2hvaWNlTmFtZSkge1xuICAgICAgICBwYXJ0aWFsLm9iai5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhcnRpYWwub2JqLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGNvbnN0IGFkZENsaWNrcyA9ICgpID0+IHtcbiAgICBsZXQgcGFydGlhbHMgPSBbXTtcbiAgICBbJ2Fib3V0JywgJ21lbnUnLCAnY29udGFjdCddLmZvckVhY2gobmFtZSA9PiBwYXJ0aWFscy5wdXNoKHsgbmFtZTogbmFtZSB9KSlcbiAgICBwYXJ0aWFscy5mb3JFYWNoKHAgPT4gcC5vYmogPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtwLm5hbWV9YCkpO1xuICAgIHBhcnRpYWxzLmZvckVhY2gocCA9PiB7XG4gICAgICBjb25zdCBzZWxlY3RvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC50YXAtJHtwLm5hbWV9YCk7XG4gICAgICBzZWxlY3Rvci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRvZ2dsZVBhcnRpYWwocGFydGlhbHMsIHAubmFtZSkpO1xuICAgIH0pO1xuICAgIHRvZ2dsZVBhcnRpYWwocGFydGlhbHMsIHBhcnRpYWxzWzJdLm5hbWUpO1xuICB9XG5cbiAgcmV0dXJuIHsgY3JlYXRlLCBhZGRDbGlja3MgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IG5hdlRhcDtcbiJdLCJzb3VyY2VSb290IjoiIn0=