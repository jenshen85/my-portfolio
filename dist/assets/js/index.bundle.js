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
/******/ 	__webpack_require__.p = "/assets/js/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/svg4everybody/dist/svg4everybody.js":
/*!**********************************************************!*\
  !*** ./node_modules/svg4everybody/dist/svg4everybody.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!function(root, factory) {
     true ? // AMD. Register as an anonymous module unless amdModuleId is set
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
        return root.svg4everybody = factory();
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}(this, function() {
    /*! svg4everybody v2.1.9 | github.com/jonathantneal/svg4everybody */
    function embed(parent, svg, target) {
        // if the target exists
        if (target) {
            // create a document fragment to hold the contents of the target
            var fragment = document.createDocumentFragment(), viewBox = !svg.hasAttribute("viewBox") && target.getAttribute("viewBox");
            // conditionally set the viewBox on the svg
            viewBox && svg.setAttribute("viewBox", viewBox);
            // copy the contents of the clone into the fragment
            for (// clone the target
            var clone = target.cloneNode(!0); clone.childNodes.length; ) {
                fragment.appendChild(clone.firstChild);
            }
            // append the fragment into the svg
            parent.appendChild(fragment);
        }
    }
    function loadreadystatechange(xhr) {
        // listen to changes in the request
        xhr.onreadystatechange = function() {
            // if the request is ready
            if (4 === xhr.readyState) {
                // get the cached html document
                var cachedDocument = xhr._cachedDocument;
                // ensure the cached html document based on the xhr response
                cachedDocument || (cachedDocument = xhr._cachedDocument = document.implementation.createHTMLDocument(""), 
                cachedDocument.body.innerHTML = xhr.responseText, xhr._cachedTarget = {}), // clear the xhr embeds list and embed each item
                xhr._embeds.splice(0).map(function(item) {
                    // get the cached target
                    var target = xhr._cachedTarget[item.id];
                    // ensure the cached target
                    target || (target = xhr._cachedTarget[item.id] = cachedDocument.getElementById(item.id)), 
                    // embed the target into the svg
                    embed(item.parent, item.svg, target);
                });
            }
        }, // test the ready state change immediately
        xhr.onreadystatechange();
    }
    function svg4everybody(rawopts) {
        function oninterval() {
            // while the index exists in the live <use> collection
            for (// get the cached <use> index
            var index = 0; index < uses.length; ) {
                // get the current <use>
                var use = uses[index], parent = use.parentNode, svg = getSVGAncestor(parent), src = use.getAttribute("xlink:href") || use.getAttribute("href");
                if (!src && opts.attributeName && (src = use.getAttribute(opts.attributeName)), 
                svg && src) {
                    if (polyfill) {
                        if (!opts.validate || opts.validate(src, svg, use)) {
                            // remove the <use> element
                            parent.removeChild(use);
                            // parse the src and get the url and id
                            var srcSplit = src.split("#"), url = srcSplit.shift(), id = srcSplit.join("#");
                            // if the link is external
                            if (url.length) {
                                // get the cached xhr request
                                var xhr = requests[url];
                                // ensure the xhr request exists
                                xhr || (xhr = requests[url] = new XMLHttpRequest(), xhr.open("GET", url), xhr.send(), 
                                xhr._embeds = []), // add the svg and id as an item to the xhr embeds list
                                xhr._embeds.push({
                                    parent: parent,
                                    svg: svg,
                                    id: id
                                }), // prepare the xhr ready state change event
                                loadreadystatechange(xhr);
                            } else {
                                // embed the local id into the svg
                                embed(parent, svg, document.getElementById(id));
                            }
                        } else {
                            // increase the index when the previous value was not "valid"
                            ++index, ++numberOfSvgUseElementsToBypass;
                        }
                    }
                } else {
                    // increase the index when the previous value was not "valid"
                    ++index;
                }
            }
            // continue the interval
            (!uses.length || uses.length - numberOfSvgUseElementsToBypass > 0) && requestAnimationFrame(oninterval, 67);
        }
        var polyfill, opts = Object(rawopts), newerIEUA = /\bTrident\/[567]\b|\bMSIE (?:9|10)\.0\b/, webkitUA = /\bAppleWebKit\/(\d+)\b/, olderEdgeUA = /\bEdge\/12\.(\d+)\b/, edgeUA = /\bEdge\/.(\d+)\b/, inIframe = window.top !== window.self;
        polyfill = "polyfill" in opts ? opts.polyfill : newerIEUA.test(navigator.userAgent) || (navigator.userAgent.match(olderEdgeUA) || [])[1] < 10547 || (navigator.userAgent.match(webkitUA) || [])[1] < 537 || edgeUA.test(navigator.userAgent) && inIframe;
        // create xhr requests object
        var requests = {}, requestAnimationFrame = window.requestAnimationFrame || setTimeout, uses = document.getElementsByTagName("use"), numberOfSvgUseElementsToBypass = 0;
        // conditionally start the interval if the polyfill is active
        polyfill && oninterval();
    }
    function getSVGAncestor(node) {
        for (var svg = node; "svg" !== svg.nodeName.toLowerCase() && (svg = svg.parentNode); ) {}
        return svg;
    }
    return svg4everybody;
});

/***/ }),

/***/ "./src/js/common/main.js":
/*!*******************************!*\
  !*** ./src/js/common/main.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// import fontawesome from '@fortawesome/fontawesome-free-webfonts'
// fontawesome.dom.i2svg()

var welcomButton = document.getElementById('autorisation-button');
var toGeneral = document.getElementById('to-general');
var backButton = document.querySelector('.welcom__button');
var flipp = document.querySelector('.flipper');

if (flipp !== null) {

  welcomButton.addEventListener("click", function () {

    flipp.classList.add("active");
    backButton.classList.add("active");
  });

  toGeneral.addEventListener('click', function (e) {

    e.preventDefault();

    flipp.classList.remove("active");
    backButton.classList.remove("active");
  });
}

/***/ }),

/***/ "./src/js/common/menu.js":
/*!*******************************!*\
  !*** ./src/js/common/menu.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var MENU_BUTTON = document.querySelector('.menu-button');
var MENU_BUTTON_WRAPP = document.querySelector('.menu-button__wrapp');
var MENU = document.querySelector('.menu-wrapp');
var CONTAINER = document.querySelector('.hero-container');

var thumb = false;

window.addEventListener("DOMContentLoaded", function () {

  if (MENU !== null) {

    // позиция кнопки меню по X,Y  при абсолютном позиционировании
    // позиция кнопки меню по X = (ширина контейнера - ширина от кнопки слева) - ширина самой кнопки
    var absoluteButtonPosX = CONTAINER.offsetWidth - MENU_BUTTON_WRAPP.offsetLeft - MENU_BUTTON_WRAPP.offsetWidth;
    var absoluteButtonPosY = MENU_BUTTON_WRAPP.offsetTop;

    MENU_BUTTON.addEventListener('click', function (e) {

      thumb = !thumb;
      buttonPosition(absoluteButtonPosX, absoluteButtonPosY);

      MENU_BUTTON.classList.toggle('active');
      MENU.classList.toggle('active');
    });

    window.addEventListener("resize", function () {
      buttonPosition(absoluteButtonPosX, absoluteButtonPosY);
    });
  }
});

function buttonPosition(absoluteButtonPosX, absoluteButtonPosY) {
  // позиция кнопки меню по X,Y  при fixed позиционировании
  var fixedButtonPosY = MENU_BUTTON_WRAPP.offsetTop;
  var fixedButtonPosX = (window.innerWidth - CONTAINER.offsetWidth) / 2;
  MENU_BUTTON_WRAPP.style.position = thumb ? "fixed" : "absolute";
  MENU_BUTTON_WRAPP.style.right = thumb ? fixedButtonPosX + 'px' : absoluteButtonPosX + 'px';
  MENU_BUTTON_WRAPP.style.top = thumb ? fixedButtonPosY + 'px' : absoluteButtonPosY + 'px';
}

/***/ }),

/***/ "./src/js/common/modal.js":
/*!********************************!*\
  !*** ./src/js/common/modal.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var modalButton = document.getElementById('modal-button');
var modal = document.querySelector('.modal-overlay');
var loginButton = document.getElementById('login-button');
var WELCOM_CONTAINER = document.querySelector('.welcom-container');

if (modal !== null) {

  loginButton.addEventListener('click', function (e) {

    e.preventDefault();

    WELCOM_CONTAINER.style.opacity = '0';
    setTimeout(function () {
      modal.classList.add('active');
    }, 500);
  });

  modalButton.addEventListener('click', function () {

    modal.classList.remove('active');

    setTimeout(function () {
      WELCOM_CONTAINER.style.opacity = '1';
    }, 500);
  });
}

/***/ }),

/***/ "./src/js/common/paralax-scroll.js":
/*!*****************************************!*\
  !*** ./src/js/common/paralax-scroll.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var paralax = function () {

  var user = document.querySelector(".hero__avatar");
  var sectionText = document.querySelector(".hero__bg-word");

  return {
    move: function move(block, windowScroll, strafeAmount, xPos) {
      var strafe = windowScroll / -strafeAmount;
      var style = block.style;
      // передаю translate по x, т.к. значения у всех элементов разные
      var transformString = "translate3d(" + xPos + "%, " + (-50 + strafe) + "%, 0)";
      style.transform = transformString;
    },
    init: function init(wScroll) {
      this.move(user, wScroll, 3, -50);
      this.move(sectionText, wScroll, 20, 0);
    }
  };
}();

window.addEventListener("scroll", function () {

  var wScroll = window.pageYOffset;

  paralax.init(wScroll);
});

/***/ }),

/***/ "./src/js/common/paralax.js":
/*!**********************************!*\
  !*** ./src/js/common/paralax.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var paralaxCont = document.getElementById('welcome__paralax');
var layers = Array.prototype.slice.call(document.getElementsByClassName('paralax__layer'));

if (paralaxCont !== null) {
  var moveLayers = function moveLayers(e) {

    var initialX = window.innerWidth / 2 - e.pageX;
    var initialY = window.innerHeight / 2 - e.pageY;

    layers.forEach(function (el, i) {
      var divider = i / 70;
      var positionX = initialX * divider;
      var positionY = initialY * divider;
      el.style.transform = 'translate(' + positionX + 'px, ' + positionY + 'px)';
    });
  };
  window.addEventListener('mousemove', moveLayers);
}

/***/ }),

/***/ "./src/js/common/work.js":
/*!*******************************!*\
  !*** ./src/js/common/work.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var wrapp = document.querySelector('.contacts-form');
var form = document.querySelector('.contacts-form__blur');
var imgBgWrapp = document.querySelector('.feedback__bg');
var imgBg = document.querySelector('.feedback__bg-img');

if (wrapp !== null) {
  var blur = function () {
    return {
      set: function set() {
        var imgWidth = imgBgWrapp.offsetWidth,
            imgSizeTop = imgBg.offsetTop,
            posLeft = -wrapp.offsetLeft,
            posTop = -(wrapp.offsetTop - imgSizeTop),
            blurCSS = form.style;

        blurCSS.backgroundSize = imgWidth + 'px auto';
        blurCSS.backgroundPosition = posLeft + 'px ' + posTop + 'px';
      }
    };
  }();

  window.onload = function () {
    blur.set();
  };

  window.onresize = function () {
    blur.set();
  };
}

/***/ }),

/***/ "./src/js/common/works-slider.js":
/*!***************************************!*\
  !*** ./src/js/common/works-slider.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// buttons slider

var sliderStart = new Slider({
  containerView: '.slider__views-list',
  containerLeft: '.buttons-left__list',
  containerRight: '.buttons-right__list',
  sliderInfo: '.slider__info-list',
  slide: '.slide',
  buttonsLeft: '.slider__buttons-left .slider__buttons-img',
  buttonsRight: '.slider__buttons-right .slider__buttons-img',
  duration: '800'

});

function Slider(options) {
  var that = this;
  that.counter = 0;
  that.counterPrev;
  that.counterNext;
  that.inProcess = false;
  that.containerView = document.querySelector(options.containerView);
  that.containerLeft = document.querySelector(options.containerLeft);
  that.containerRight = document.querySelector(options.containerRight);

  that.sliderInfo = document.querySelector(options.sliderInfo);

  if (!that.containerView && !that.containerLeft && !that.containerRight) {
    return;
  } else {
    that.lenghtChild = Math.max(Array.from(that.containerView.querySelectorAll(options.slide)).length, Array.from(that.containerLeft.querySelectorAll(options.slide)).length, Array.from(that.containerRight.querySelectorAll(options.slide)).length);
  }

  that.buttonsLeft = document.querySelector(options.buttonsLeft);
  that.buttonsRight = document.querySelector(options.buttonsRight);
  that.duration = options.duration;

  that.moveSlide = function (container, orientation, direction) {

    var items = Array.from(container.children);
    var activeItem = {};
    var reqItem = void 0;
    var viewIdx = void 0;

    items.forEach(function (el, i) {
      if (el.classList.contains('active')) {
        activeItem.elem = el, activeItem.index = i;
      }
    });

    if (that.counter >= items.length) that.counter = 0;
    if (that.counter < 0) that.counter = items.length - 1;
    that.countSlide(activeItem.index, that.lenghtChild);
    // console.log(activeItem.index);
    if (orientation === 'prev') {
      reqItem = items[that.counterPrev];
      viewIdx = that.counterPrev;
    }

    if (orientation === 'next') {
      reqItem = items[that.counterNext];
      viewIdx = that.counterNext;
    }
    activeItem = activeItem.elem;

    if (!direction) {
      activeItem.classList.remove('active');
      reqItem.classList.add('active');
      that.sliderInfoFill(that.sliderInfo, that.containerView, viewIdx);
    } else {
      animate({
        duration: that.duration,
        draw: function draw(progress) {
          activeItem.style.top = direction === 'down' ? progress + '%' : -progress + '%';
        }
      });

      animate({
        duration: that.duration,
        draw: function draw(progress) {
          reqItem.style.top = direction === 'down' ? -100 + progress + '%' : 100 - progress + '%';
        },
        after: function after() {
          activeItem.classList.remove('active');
          reqItem.classList.add('active');
          that.inProcess = false;
        }
      });
    }
  };

  that.init = function () {
    // calculation counters
    that.countSlide(that.counter, that.lenghtChild);
    // calculation counters

    // initial first slides
    that.slideInit(that.containerView, that.counter);
    that.slideInit(that.containerLeft, that.counterPrev);
    that.slideInit(that.containerRight, that.counterNext);
    // initial first slides
    that.sliderInfoFill(that.sliderInfo, that.containerView, that.counter);
    // listeners
    that.buttonsLeft.addEventListener('click', function () {
      if (!that.inProcess) {
        that.inProcess = true;
        that.moveSlide(that.containerView, 'prev');
        that.moveSlide(that.containerLeft, 'prev', 'down');
        that.moveSlide(that.containerRight, 'prev', 'up');
        // that.counter--;
      }
    });
    that.buttonsRight.addEventListener('click', function () {
      if (!that.inProcess) {
        that.inProcess = true;
        that.moveSlide(that.containerView, 'next');
        that.moveSlide(that.containerLeft, 'next', 'down');
        that.moveSlide(that.containerRight, 'next', 'up');
        // that.counter++;
      }
    });
    // listeners
  };

  that.slideInit = function (container, i) {
    var child = container.children;
    child[i].classList.add('active');
  };

  that.sliderInfoFill = function (container, getAttrContainer, i) {

    var viewTitle = container.querySelector('.info-item__title'),
        viewDesc = container.querySelector('.info-item__desc'),
        viewLink = container.querySelector('.info-item__link');

    var child = Array.from(getAttrContainer.children);

    if (i >= child.length) i = 0;
    if (i < 0) i = child.length - 1;

    var title = child[i].getAttribute('data-title'),
        desc = child[i].getAttribute('data-technology'),
        link = child[i].getAttribute('data-link');

    title = splitWord(title, viewTitle, that.duration);
    desc = splitWord(desc, viewDesc, that.duration);
    viewLink.href = link;
  };

  that.countSlide = function (counter, arrSlide) {
    if (counter === arrSlide - 1) {
      that.counterNext = 0;
    } else {
      that.counterNext = counter + 1;
    }
    if (counter === 0) {
      that.counterPrev = arrSlide - 1;
    } else {
      that.counterPrev = counter - 1;
    }
  };

  that.init();
}

function splitWord(word, nodeElem, dur) {
  var duration = dur / word.split('').length;
  var splWord = word.split(' ');
  nodeElem.textContent = '';
  var div = 0;
  splWord.forEach(function (el, i) {

    var span = document.createElement('span');
    span.className = 'word';

    el.split('').forEach(function (leter, j) {
      var spanLeter = document.createElement('span');
      spanLeter.textContent = leter;
      span.appendChild(spanLeter);
      setTimeout(function () {
        spanLeter.classList.add('active');
      }, duration * div * 1.3);
      div++;
    });
    nodeElem.appendChild(span);
  });
  return splWord;
}

// ===  RAF  ===
function animate(_ref) {
  var draw = _ref.draw,
      duration = _ref.duration,
      after = _ref.after;


  var start = performance.now();
  requestAnimationFrame(function animate(time) {
    // timeFraction goes from 0 to 1
    var timeFraction = time - start;

    if (timeFraction <= 0) timeFraction = 1;
    if (timeFraction > duration) timeFraction = duration;
    // calculate the current animation state
    var progress = timeFraction / duration * 100;

    draw(progress); // draw it

    if (timeFraction < duration) {
      requestAnimationFrame(animate);
    } else if (timeFraction >= duration && after) {
      after();
    }
  });
}

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// svg polyfill
// =============================================================//

var _svg4everybody = __webpack_require__(/*! svg4everybody */ "./node_modules/svg4everybody/dist/svg4everybody.js");

var _svg4everybody2 = _interopRequireDefault(_svg4everybody);

__webpack_require__(/*! ./lib/polyfills */ "./src/js/lib/polyfills.js");

__webpack_require__(/*! ./common/main */ "./src/js/common/main.js");

__webpack_require__(/*! ./common/modal */ "./src/js/common/modal.js");

__webpack_require__(/*! ./common/menu */ "./src/js/common/menu.js");

__webpack_require__(/*! ./common/work */ "./src/js/common/work.js");

__webpack_require__(/*! ./common/paralax */ "./src/js/common/paralax.js");

__webpack_require__(/*! ./common/paralax-scroll */ "./src/js/common/paralax-scroll.js");

__webpack_require__(/*! ./common/works-slider */ "./src/js/common/works-slider.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// =============================================================//

(0, _svg4everybody2.default)();

// polyfill
// =============================================================//

// =============================================================//

/***/ }),

/***/ "./src/js/lib/polyfills.js":
/*!*********************************!*\
  !*** ./src/js/lib/polyfills.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Array.from
if (!Array.from) {
  Array.from = function () {
    var toStr = Object.prototype.toString;
    var isCallable = function isCallable(fn) {
      return typeof fn === 'function' || toStr.call(fn) === '[object Function]';
    };
    var toInteger = function toInteger(value) {
      var number = Number(value);
      if (isNaN(number)) {
        return 0;
      }
      if (number === 0 || !isFinite(number)) {
        return number;
      }
      return (number > 0 ? 1 : -1) * Math.floor(Math.abs(number));
    };
    var maxSafeInteger = Math.pow(2, 53) - 1;
    var toLength = function toLength(value) {
      var len = toInteger(value);
      return Math.min(Math.max(len, 0), maxSafeInteger);
    };

    // Свойство length метода from равно 1.
    return function from(arrayLike /*, mapFn, thisArg */) {
      // 1. Положим C равным значению this.
      var C = this;

      // 2. Положим items равным ToObject(arrayLike).
      var items = Object(arrayLike);

      // 3. ReturnIfAbrupt(items).
      if (arrayLike == null) {
        throw new TypeError('Array.from requires an array-like object - not null or undefined');
      }

      // 4. Если mapfn равен undefined, положим mapping равным false.
      var mapFn = arguments.length > 1 ? arguments[1] : void undefined;
      var T;
      if (typeof mapFn !== 'undefined') {
        // 5. иначе
        // 5. a. Если вызов IsCallable(mapfn) равен false, выкидываем исключение TypeError.
        if (!isCallable(mapFn)) {
          throw new TypeError('Array.from: when provided, the second argument must be a function');
        }

        // 5. b. Если thisArg присутствует, положим T равным thisArg; иначе положим T равным undefined.
        if (arguments.length > 2) {
          T = arguments[2];
        }
      }

      // 10. Положим lenValue равным Get(items, "length").
      // 11. Положим len равным ToLength(lenValue).
      var len = toLength(items.length);

      // 13. Если IsConstructor(C) равен true, то
      // 13. a. Положим A равным результату вызова внутреннего метода [[Construct]]
      //     объекта C со списком аргументов, содержащим единственный элемент len.
      // 14. a. Иначе, положим A равным ArrayCreate(len).
      var A = isCallable(C) ? Object(new C(len)) : new Array(len);

      // 16. Положим k равным 0.
      var k = 0;
      // 17. Пока k < len, будем повторять... (шаги с a по h)
      var kValue;
      while (k < len) {
        kValue = items[k];
        if (mapFn) {
          A[k] = typeof T === 'undefined' ? mapFn(kValue, k) : mapFn.call(T, kValue, k);
        } else {
          A[k] = kValue;
        }
        k += 1;
      }
      // 18. Положим putStatus равным Put(A, "length", len, true).
      A.length = len;
      // 20. Вернём A.
      return A;
    };
  }();
}

// Array.isArray
if (!Array.isArray) {
  Array.isArray = function (arg) {
    return Object.prototype.toString.call(arg) === '[object Array]';
  };
}

// Array.of
if (!Array.of) {
  Array.of = function () {
    return Array.prototype.slice.call(arguments);
  };
}

// Array.find
if (!Array.prototype.find) {
  Array.prototype.find = function (predicate) {
    if (this == null) {
      throw new TypeError('Array.prototype.find called on null or undefined');
    }
    if (typeof predicate !== 'function') {
      throw new TypeError('predicate must be a function');
    }
    var list = Object(this);
    var length = list.length >>> 0;
    var thisArg = arguments[1];
    var value;

    for (var i = 0; i < length; i++) {
      value = list[i];
      if (predicate.call(thisArg, value, i, list)) {
        return value;
      }
    }
    return undefined;
  };
}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N2ZzRldmVyeWJvZHkvZGlzdC9zdmc0ZXZlcnlib2R5LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21tb24vbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tbW9uL21lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbW1vbi9tb2RhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tbW9uL3BhcmFsYXgtc2Nyb2xsLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21tb24vcGFyYWxheC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tbW9uL3dvcmsuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbW1vbi93b3Jrcy1zbGlkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9saWIvcG9seWZpbGxzLmpzIl0sIm5hbWVzIjpbIndlbGNvbUJ1dHRvbiIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ0b0dlbmVyYWwiLCJiYWNrQnV0dG9uIiwicXVlcnlTZWxlY3RvciIsImZsaXBwIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsYXNzTGlzdCIsImFkZCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInJlbW92ZSIsIk1FTlVfQlVUVE9OIiwiTUVOVV9CVVRUT05fV1JBUFAiLCJNRU5VIiwiQ09OVEFJTkVSIiwidGh1bWIiLCJ3aW5kb3ciLCJhYnNvbHV0ZUJ1dHRvblBvc1giLCJvZmZzZXRXaWR0aCIsIm9mZnNldExlZnQiLCJhYnNvbHV0ZUJ1dHRvblBvc1kiLCJvZmZzZXRUb3AiLCJidXR0b25Qb3NpdGlvbiIsInRvZ2dsZSIsImZpeGVkQnV0dG9uUG9zWSIsImZpeGVkQnV0dG9uUG9zWCIsImlubmVyV2lkdGgiLCJzdHlsZSIsInBvc2l0aW9uIiwicmlnaHQiLCJ0b3AiLCJtb2RhbEJ1dHRvbiIsIm1vZGFsIiwibG9naW5CdXR0b24iLCJXRUxDT01fQ09OVEFJTkVSIiwib3BhY2l0eSIsInNldFRpbWVvdXQiLCJwYXJhbGF4IiwidXNlciIsInNlY3Rpb25UZXh0IiwibW92ZSIsImJsb2NrIiwid2luZG93U2Nyb2xsIiwic3RyYWZlQW1vdW50IiwieFBvcyIsInN0cmFmZSIsInRyYW5zZm9ybVN0cmluZyIsInRyYW5zZm9ybSIsImluaXQiLCJ3U2Nyb2xsIiwicGFnZVlPZmZzZXQiLCJwYXJhbGF4Q29udCIsImxheWVycyIsIkFycmF5IiwicHJvdG90eXBlIiwic2xpY2UiLCJjYWxsIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsIm1vdmVMYXllcnMiLCJpbml0aWFsWCIsInBhZ2VYIiwiaW5pdGlhbFkiLCJpbm5lckhlaWdodCIsInBhZ2VZIiwiZm9yRWFjaCIsImVsIiwiaSIsImRpdmlkZXIiLCJwb3NpdGlvblgiLCJwb3NpdGlvblkiLCJ3cmFwcCIsImZvcm0iLCJpbWdCZ1dyYXBwIiwiaW1nQmciLCJibHVyIiwic2V0IiwiaW1nV2lkdGgiLCJpbWdTaXplVG9wIiwicG9zTGVmdCIsInBvc1RvcCIsImJsdXJDU1MiLCJiYWNrZ3JvdW5kU2l6ZSIsImJhY2tncm91bmRQb3NpdGlvbiIsIm9ubG9hZCIsIm9ucmVzaXplIiwic2xpZGVyU3RhcnQiLCJTbGlkZXIiLCJjb250YWluZXJWaWV3IiwiY29udGFpbmVyTGVmdCIsImNvbnRhaW5lclJpZ2h0Iiwic2xpZGVySW5mbyIsInNsaWRlIiwiYnV0dG9uc0xlZnQiLCJidXR0b25zUmlnaHQiLCJkdXJhdGlvbiIsIm9wdGlvbnMiLCJ0aGF0IiwiY291bnRlciIsImNvdW50ZXJQcmV2IiwiY291bnRlck5leHQiLCJpblByb2Nlc3MiLCJsZW5naHRDaGlsZCIsIk1hdGgiLCJtYXgiLCJmcm9tIiwicXVlcnlTZWxlY3RvckFsbCIsImxlbmd0aCIsIm1vdmVTbGlkZSIsImNvbnRhaW5lciIsIm9yaWVudGF0aW9uIiwiZGlyZWN0aW9uIiwiaXRlbXMiLCJjaGlsZHJlbiIsImFjdGl2ZUl0ZW0iLCJyZXFJdGVtIiwidmlld0lkeCIsImNvbnRhaW5zIiwiZWxlbSIsImluZGV4IiwiY291bnRTbGlkZSIsInNsaWRlckluZm9GaWxsIiwiYW5pbWF0ZSIsImRyYXciLCJwcm9ncmVzcyIsImFmdGVyIiwic2xpZGVJbml0IiwiY2hpbGQiLCJnZXRBdHRyQ29udGFpbmVyIiwidmlld1RpdGxlIiwidmlld0Rlc2MiLCJ2aWV3TGluayIsInRpdGxlIiwiZ2V0QXR0cmlidXRlIiwiZGVzYyIsImxpbmsiLCJzcGxpdFdvcmQiLCJocmVmIiwiYXJyU2xpZGUiLCJ3b3JkIiwibm9kZUVsZW0iLCJkdXIiLCJzcGxpdCIsInNwbFdvcmQiLCJ0ZXh0Q29udGVudCIsImRpdiIsInNwYW4iLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwibGV0ZXIiLCJqIiwic3BhbkxldGVyIiwiYXBwZW5kQ2hpbGQiLCJzdGFydCIsInBlcmZvcm1hbmNlIiwibm93IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwidGltZSIsInRpbWVGcmFjdGlvbiIsInRvU3RyIiwiT2JqZWN0IiwidG9TdHJpbmciLCJpc0NhbGxhYmxlIiwiZm4iLCJ0b0ludGVnZXIiLCJ2YWx1ZSIsIm51bWJlciIsIk51bWJlciIsImlzTmFOIiwiaXNGaW5pdGUiLCJmbG9vciIsImFicyIsIm1heFNhZmVJbnRlZ2VyIiwicG93IiwidG9MZW5ndGgiLCJsZW4iLCJtaW4iLCJhcnJheUxpa2UiLCJDIiwiVHlwZUVycm9yIiwibWFwRm4iLCJhcmd1bWVudHMiLCJ1bmRlZmluZWQiLCJUIiwiQSIsImsiLCJrVmFsdWUiLCJpc0FycmF5IiwiYXJnIiwib2YiLCJmaW5kIiwicHJlZGljYXRlIiwibGlzdCIsInRoaXNBcmciXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtB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QztBQUMvQmtHLGNBQVEyQixLQUFLN0gsQ0FBTCxDQUFSO0FBQ0EsVUFBSTRILFVBQVV0SSxJQUFWLENBQWV3SSxPQUFmLEVBQXdCNUIsS0FBeEIsRUFBK0JsRyxDQUEvQixFQUFrQzZILElBQWxDLENBQUosRUFBNkM7QUFDM0MsZUFBTzNCLEtBQVA7QUFDRDtBQUNGO0FBQ0QsV0FBT2lCLFNBQVA7QUFDRCxHQW5CRDtBQW9CRCxDIiwiZmlsZSI6ImluZGV4LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Fzc2V0cy9qcy9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvanMvaW5kZXguanNcIik7XG4iLCIhZnVuY3Rpb24ocm9vdCwgZmFjdG9yeSkge1xuICAgIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgZGVmaW5lICYmIGRlZmluZS5hbWQgPyAvLyBBTUQuIFJlZ2lzdGVyIGFzIGFuIGFub255bW91cyBtb2R1bGUgdW5sZXNzIGFtZE1vZHVsZUlkIGlzIHNldFxuICAgIGRlZmluZShbXSwgZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiByb290LnN2ZzRldmVyeWJvZHkgPSBmYWN0b3J5KCk7XG4gICAgfSkgOiBcIm9iamVjdFwiID09IHR5cGVvZiBtb2R1bGUgJiYgbW9kdWxlLmV4cG9ydHMgPyAvLyBOb2RlLiBEb2VzIG5vdCB3b3JrIHdpdGggc3RyaWN0IENvbW1vbkpTLCBidXRcbiAgICAvLyBvbmx5IENvbW1vbkpTLWxpa2UgZW52aXJvbm1lbnRzIHRoYXQgc3VwcG9ydCBtb2R1bGUuZXhwb3J0cyxcbiAgICAvLyBsaWtlIE5vZGUuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCkgOiByb290LnN2ZzRldmVyeWJvZHkgPSBmYWN0b3J5KCk7XG59KHRoaXMsIGZ1bmN0aW9uKCkge1xuICAgIC8qISBzdmc0ZXZlcnlib2R5IHYyLjEuOSB8IGdpdGh1Yi5jb20vam9uYXRoYW50bmVhbC9zdmc0ZXZlcnlib2R5ICovXG4gICAgZnVuY3Rpb24gZW1iZWQocGFyZW50LCBzdmcsIHRhcmdldCkge1xuICAgICAgICAvLyBpZiB0aGUgdGFyZ2V0IGV4aXN0c1xuICAgICAgICBpZiAodGFyZ2V0KSB7XG4gICAgICAgICAgICAvLyBjcmVhdGUgYSBkb2N1bWVudCBmcmFnbWVudCB0byBob2xkIHRoZSBjb250ZW50cyBvZiB0aGUgdGFyZ2V0XG4gICAgICAgICAgICB2YXIgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCksIHZpZXdCb3ggPSAhc3ZnLmhhc0F0dHJpYnV0ZShcInZpZXdCb3hcIikgJiYgdGFyZ2V0LmdldEF0dHJpYnV0ZShcInZpZXdCb3hcIik7XG4gICAgICAgICAgICAvLyBjb25kaXRpb25hbGx5IHNldCB0aGUgdmlld0JveCBvbiB0aGUgc3ZnXG4gICAgICAgICAgICB2aWV3Qm94ICYmIHN2Zy5zZXRBdHRyaWJ1dGUoXCJ2aWV3Qm94XCIsIHZpZXdCb3gpO1xuICAgICAgICAgICAgLy8gY29weSB0aGUgY29udGVudHMgb2YgdGhlIGNsb25lIGludG8gdGhlIGZyYWdtZW50XG4gICAgICAgICAgICBmb3IgKC8vIGNsb25lIHRoZSB0YXJnZXRcbiAgICAgICAgICAgIHZhciBjbG9uZSA9IHRhcmdldC5jbG9uZU5vZGUoITApOyBjbG9uZS5jaGlsZE5vZGVzLmxlbmd0aDsgKSB7XG4gICAgICAgICAgICAgICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQoY2xvbmUuZmlyc3RDaGlsZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBhcHBlbmQgdGhlIGZyYWdtZW50IGludG8gdGhlIHN2Z1xuICAgICAgICAgICAgcGFyZW50LmFwcGVuZENoaWxkKGZyYWdtZW50KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBsb2FkcmVhZHlzdGF0ZWNoYW5nZSh4aHIpIHtcbiAgICAgICAgLy8gbGlzdGVuIHRvIGNoYW5nZXMgaW4gdGhlIHJlcXVlc3RcbiAgICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgLy8gaWYgdGhlIHJlcXVlc3QgaXMgcmVhZHlcbiAgICAgICAgICAgIGlmICg0ID09PSB4aHIucmVhZHlTdGF0ZSkge1xuICAgICAgICAgICAgICAgIC8vIGdldCB0aGUgY2FjaGVkIGh0bWwgZG9jdW1lbnRcbiAgICAgICAgICAgICAgICB2YXIgY2FjaGVkRG9jdW1lbnQgPSB4aHIuX2NhY2hlZERvY3VtZW50O1xuICAgICAgICAgICAgICAgIC8vIGVuc3VyZSB0aGUgY2FjaGVkIGh0bWwgZG9jdW1lbnQgYmFzZWQgb24gdGhlIHhociByZXNwb25zZVxuICAgICAgICAgICAgICAgIGNhY2hlZERvY3VtZW50IHx8IChjYWNoZWREb2N1bWVudCA9IHhoci5fY2FjaGVkRG9jdW1lbnQgPSBkb2N1bWVudC5pbXBsZW1lbnRhdGlvbi5jcmVhdGVIVE1MRG9jdW1lbnQoXCJcIiksIFxuICAgICAgICAgICAgICAgIGNhY2hlZERvY3VtZW50LmJvZHkuaW5uZXJIVE1MID0geGhyLnJlc3BvbnNlVGV4dCwgeGhyLl9jYWNoZWRUYXJnZXQgPSB7fSksIC8vIGNsZWFyIHRoZSB4aHIgZW1iZWRzIGxpc3QgYW5kIGVtYmVkIGVhY2ggaXRlbVxuICAgICAgICAgICAgICAgIHhoci5fZW1iZWRzLnNwbGljZSgwKS5tYXAoZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBnZXQgdGhlIGNhY2hlZCB0YXJnZXRcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRhcmdldCA9IHhoci5fY2FjaGVkVGFyZ2V0W2l0ZW0uaWRdO1xuICAgICAgICAgICAgICAgICAgICAvLyBlbnN1cmUgdGhlIGNhY2hlZCB0YXJnZXRcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0IHx8ICh0YXJnZXQgPSB4aHIuX2NhY2hlZFRhcmdldFtpdGVtLmlkXSA9IGNhY2hlZERvY3VtZW50LmdldEVsZW1lbnRCeUlkKGl0ZW0uaWQpKSwgXG4gICAgICAgICAgICAgICAgICAgIC8vIGVtYmVkIHRoZSB0YXJnZXQgaW50byB0aGUgc3ZnXG4gICAgICAgICAgICAgICAgICAgIGVtYmVkKGl0ZW0ucGFyZW50LCBpdGVtLnN2ZywgdGFyZ2V0KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgLy8gdGVzdCB0aGUgcmVhZHkgc3RhdGUgY2hhbmdlIGltbWVkaWF0ZWx5XG4gICAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UoKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gc3ZnNGV2ZXJ5Ym9keShyYXdvcHRzKSB7XG4gICAgICAgIGZ1bmN0aW9uIG9uaW50ZXJ2YWwoKSB7XG4gICAgICAgICAgICAvLyB3aGlsZSB0aGUgaW5kZXggZXhpc3RzIGluIHRoZSBsaXZlIDx1c2U+IGNvbGxlY3Rpb25cbiAgICAgICAgICAgIGZvciAoLy8gZ2V0IHRoZSBjYWNoZWQgPHVzZT4gaW5kZXhcbiAgICAgICAgICAgIHZhciBpbmRleCA9IDA7IGluZGV4IDwgdXNlcy5sZW5ndGg7ICkge1xuICAgICAgICAgICAgICAgIC8vIGdldCB0aGUgY3VycmVudCA8dXNlPlxuICAgICAgICAgICAgICAgIHZhciB1c2UgPSB1c2VzW2luZGV4XSwgcGFyZW50ID0gdXNlLnBhcmVudE5vZGUsIHN2ZyA9IGdldFNWR0FuY2VzdG9yKHBhcmVudCksIHNyYyA9IHVzZS5nZXRBdHRyaWJ1dGUoXCJ4bGluazpocmVmXCIpIHx8IHVzZS5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpO1xuICAgICAgICAgICAgICAgIGlmICghc3JjICYmIG9wdHMuYXR0cmlidXRlTmFtZSAmJiAoc3JjID0gdXNlLmdldEF0dHJpYnV0ZShvcHRzLmF0dHJpYnV0ZU5hbWUpKSwgXG4gICAgICAgICAgICAgICAgc3ZnICYmIHNyYykge1xuICAgICAgICAgICAgICAgICAgICBpZiAocG9seWZpbGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghb3B0cy52YWxpZGF0ZSB8fCBvcHRzLnZhbGlkYXRlKHNyYywgc3ZnLCB1c2UpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gcmVtb3ZlIHRoZSA8dXNlPiBlbGVtZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50LnJlbW92ZUNoaWxkKHVzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gcGFyc2UgdGhlIHNyYyBhbmQgZ2V0IHRoZSB1cmwgYW5kIGlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNyY1NwbGl0ID0gc3JjLnNwbGl0KFwiI1wiKSwgdXJsID0gc3JjU3BsaXQuc2hpZnQoKSwgaWQgPSBzcmNTcGxpdC5qb2luKFwiI1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBpZiB0aGUgbGluayBpcyBleHRlcm5hbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh1cmwubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGdldCB0aGUgY2FjaGVkIHhociByZXF1ZXN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB4aHIgPSByZXF1ZXN0c1t1cmxdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBlbnN1cmUgdGhlIHhociByZXF1ZXN0IGV4aXN0c1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4aHIgfHwgKHhociA9IHJlcXVlc3RzW3VybF0gPSBuZXcgWE1MSHR0cFJlcXVlc3QoKSwgeGhyLm9wZW4oXCJHRVRcIiwgdXJsKSwgeGhyLnNlbmQoKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhoci5fZW1iZWRzID0gW10pLCAvLyBhZGQgdGhlIHN2ZyBhbmQgaWQgYXMgYW4gaXRlbSB0byB0aGUgeGhyIGVtYmVkcyBsaXN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhoci5fZW1iZWRzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50OiBwYXJlbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdmc6IHN2ZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBpZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSwgLy8gcHJlcGFyZSB0aGUgeGhyIHJlYWR5IHN0YXRlIGNoYW5nZSBldmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2FkcmVhZHlzdGF0ZWNoYW5nZSh4aHIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGVtYmVkIHRoZSBsb2NhbCBpZCBpbnRvIHRoZSBzdmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW1iZWQocGFyZW50LCBzdmcsIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBpbmNyZWFzZSB0aGUgaW5kZXggd2hlbiB0aGUgcHJldmlvdXMgdmFsdWUgd2FzIG5vdCBcInZhbGlkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICArK2luZGV4LCArK251bWJlck9mU3ZnVXNlRWxlbWVudHNUb0J5cGFzcztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGluY3JlYXNlIHRoZSBpbmRleCB3aGVuIHRoZSBwcmV2aW91cyB2YWx1ZSB3YXMgbm90IFwidmFsaWRcIlxuICAgICAgICAgICAgICAgICAgICArK2luZGV4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGNvbnRpbnVlIHRoZSBpbnRlcnZhbFxuICAgICAgICAgICAgKCF1c2VzLmxlbmd0aCB8fCB1c2VzLmxlbmd0aCAtIG51bWJlck9mU3ZnVXNlRWxlbWVudHNUb0J5cGFzcyA+IDApICYmIHJlcXVlc3RBbmltYXRpb25GcmFtZShvbmludGVydmFsLCA2Nyk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHBvbHlmaWxsLCBvcHRzID0gT2JqZWN0KHJhd29wdHMpLCBuZXdlcklFVUEgPSAvXFxiVHJpZGVudFxcL1s1NjddXFxifFxcYk1TSUUgKD86OXwxMClcXC4wXFxiLywgd2Via2l0VUEgPSAvXFxiQXBwbGVXZWJLaXRcXC8oXFxkKylcXGIvLCBvbGRlckVkZ2VVQSA9IC9cXGJFZGdlXFwvMTJcXC4oXFxkKylcXGIvLCBlZGdlVUEgPSAvXFxiRWRnZVxcLy4oXFxkKylcXGIvLCBpbklmcmFtZSA9IHdpbmRvdy50b3AgIT09IHdpbmRvdy5zZWxmO1xuICAgICAgICBwb2x5ZmlsbCA9IFwicG9seWZpbGxcIiBpbiBvcHRzID8gb3B0cy5wb2x5ZmlsbCA6IG5ld2VySUVVQS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpIHx8IChuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKG9sZGVyRWRnZVVBKSB8fCBbXSlbMV0gPCAxMDU0NyB8fCAobmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCh3ZWJraXRVQSkgfHwgW10pWzFdIDwgNTM3IHx8IGVkZ2VVQS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpICYmIGluSWZyYW1lO1xuICAgICAgICAvLyBjcmVhdGUgeGhyIHJlcXVlc3RzIG9iamVjdFxuICAgICAgICB2YXIgcmVxdWVzdHMgPSB7fSwgcmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCBzZXRUaW1lb3V0LCB1c2VzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJ1c2VcIiksIG51bWJlck9mU3ZnVXNlRWxlbWVudHNUb0J5cGFzcyA9IDA7XG4gICAgICAgIC8vIGNvbmRpdGlvbmFsbHkgc3RhcnQgdGhlIGludGVydmFsIGlmIHRoZSBwb2x5ZmlsbCBpcyBhY3RpdmVcbiAgICAgICAgcG9seWZpbGwgJiYgb25pbnRlcnZhbCgpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBnZXRTVkdBbmNlc3Rvcihub2RlKSB7XG4gICAgICAgIGZvciAodmFyIHN2ZyA9IG5vZGU7IFwic3ZnXCIgIT09IHN2Zy5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpICYmIChzdmcgPSBzdmcucGFyZW50Tm9kZSk7ICkge31cbiAgICAgICAgcmV0dXJuIHN2ZztcbiAgICB9XG4gICAgcmV0dXJuIHN2ZzRldmVyeWJvZHk7XG59KTsiLCIndXNlIHN0cmljdCdcclxuXHJcbi8vIGltcG9ydCBmb250YXdlc29tZSBmcm9tICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtZnJlZS13ZWJmb250cydcclxuLy8gZm9udGF3ZXNvbWUuZG9tLmkyc3ZnKClcclxuXHJcbmNvbnN0IHdlbGNvbUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhdXRvcmlzYXRpb24tYnV0dG9uJyk7XHJcbmNvbnN0IHRvR2VuZXJhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0by1nZW5lcmFsJylcclxuY29uc3QgYmFja0J1dHRvbiA9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndlbGNvbV9fYnV0dG9uJyk7XHJcbmNvbnN0IGZsaXBwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZsaXBwZXInKTtcclxuXHJcbmlmIChmbGlwcCAhPT0gbnVsbCkge1xyXG5cclxuICB3ZWxjb21CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuXHJcbiAgICBmbGlwcC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gICAgYmFja0J1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG5cclxuICB9KVxyXG5cclxuICB0b0dlbmVyYWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG5cclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBmbGlwcC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gICAgYmFja0J1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG5cclxuICB9KVxyXG5cclxufSIsImNvbnN0IE1FTlVfQlVUVE9OID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUtYnV0dG9uJyk7XHJcbmNvbnN0IE1FTlVfQlVUVE9OX1dSQVBQID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUtYnV0dG9uX193cmFwcCcpO1xyXG5jb25zdCBNRU5VID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUtd3JhcHAnKTtcclxuY29uc3QgQ09OVEFJTkVSID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlcm8tY29udGFpbmVyJyk7XHJcblxyXG5sZXQgdGh1bWIgPSBmYWxzZVxyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uKCkge1xyXG4gIFxyXG4gIGlmKE1FTlUgIT09IG51bGwpIHtcclxuXHJcbiAgICAvLyDQv9C+0LfQuNGG0LjRjyDQutC90L7Qv9C60Lgg0LzQtdC90Y4g0L/QviBYLFkgINC/0YDQuCDQsNCx0YHQvtC70Y7RgtC90L7QvCDQv9C+0LfQuNGG0LjQvtC90LjRgNC+0LLQsNC90LjQuFxyXG4gICAgLy8g0L/QvtC30LjRhtC40Y8g0LrQvdC+0L/QutC4INC80LXQvdGOINC/0L4gWCA9ICjRiNC40YDQuNC90LAg0LrQvtC90YLQtdC50L3QtdGA0LAgLSDRiNC40YDQuNC90LAg0L7RgiDQutC90L7Qv9C60Lgg0YHQu9C10LLQsCkgLSDRiNC40YDQuNC90LAg0YHQsNC80L7QuSDQutC90L7Qv9C60LhcclxuICAgIGxldCBhYnNvbHV0ZUJ1dHRvblBvc1ggPSAoQ09OVEFJTkVSLm9mZnNldFdpZHRoIC0gTUVOVV9CVVRUT05fV1JBUFAub2Zmc2V0TGVmdCkgLSBNRU5VX0JVVFRPTl9XUkFQUC5vZmZzZXRXaWR0aDtcclxuICAgIGxldCBhYnNvbHV0ZUJ1dHRvblBvc1kgPSBNRU5VX0JVVFRPTl9XUkFQUC5vZmZzZXRUb3A7XHJcblxyXG4gICAgTUVOVV9CVVRUT04uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG5cclxuICAgICAgdGh1bWIgPSAhdGh1bWJcclxuICAgICAgYnV0dG9uUG9zaXRpb24oYWJzb2x1dGVCdXR0b25Qb3NYLCBhYnNvbHV0ZUJ1dHRvblBvc1kpO1xyXG5cclxuICAgICAgTUVOVV9CVVRUT04uY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XHJcbiAgICAgIE1FTlUuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XHJcblxyXG4gICAgfSlcclxuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBmdW5jdGlvbigpIHtcclxuICAgICAgYnV0dG9uUG9zaXRpb24oYWJzb2x1dGVCdXR0b25Qb3NYLCBhYnNvbHV0ZUJ1dHRvblBvc1kpO1xyXG4gICAgfSlcclxuXHJcbiAgfVxyXG5cclxufSlcclxuXHJcblxyXG5mdW5jdGlvbiBidXR0b25Qb3NpdGlvbihhYnNvbHV0ZUJ1dHRvblBvc1gsIGFic29sdXRlQnV0dG9uUG9zWSkge1xyXG4gIC8vINC/0L7Qt9C40YbQuNGPINC60L3QvtC/0LrQuCDQvNC10L3RjiDQv9C+IFgsWSAg0L/RgNC4IGZpeGVkINC/0L7Qt9C40YbQuNC+0L3QuNGA0L7QstCw0L3QuNC4XHJcbiAgbGV0IGZpeGVkQnV0dG9uUG9zWSA9IE1FTlVfQlVUVE9OX1dSQVBQLm9mZnNldFRvcFxyXG4gIGxldCBmaXhlZEJ1dHRvblBvc1ggPSAod2luZG93LmlubmVyV2lkdGggLSBDT05UQUlORVIub2Zmc2V0V2lkdGgpIC8gMlxyXG4gIE1FTlVfQlVUVE9OX1dSQVBQLnN0eWxlLnBvc2l0aW9uID0gdGh1bWIgPyBcImZpeGVkXCIgOiBcImFic29sdXRlXCI7XHJcbiAgTUVOVV9CVVRUT05fV1JBUFAuc3R5bGUucmlnaHQgPSB0aHVtYiA/IGAke2ZpeGVkQnV0dG9uUG9zWH1weGAgOiBgJHthYnNvbHV0ZUJ1dHRvblBvc1h9cHhgO1xyXG4gIE1FTlVfQlVUVE9OX1dSQVBQLnN0eWxlLnRvcCA9IHRodW1iID8gYCR7Zml4ZWRCdXR0b25Qb3NZfXB4YCA6IGAke2Fic29sdXRlQnV0dG9uUG9zWX1weGA7XHJcbn0iLCJjb25zdCBtb2RhbEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbC1idXR0b24nKTtcclxuY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtb3ZlcmxheScpO1xyXG5jb25zdCBsb2dpbkJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2dpbi1idXR0b24nKVxyXG5jb25zdCBXRUxDT01fQ09OVEFJTkVSID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndlbGNvbS1jb250YWluZXInKVxyXG5cclxuaWYobW9kYWwgIT09IG51bGwpIHtcclxuXHJcbiAgbG9naW5CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG5cclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBXRUxDT01fQ09OVEFJTkVSLnN0eWxlLm9wYWNpdHkgPSAnMCc7XHJcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcbiAgICAgIG1vZGFsLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgfSwgNTAwKVxyXG5cclxuICB9KVxyXG5cclxuICBtb2RhbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuXHJcbiAgICBtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuXHJcblxyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG4gICAgICBXRUxDT01fQ09OVEFJTkVSLnN0eWxlLm9wYWNpdHkgPSAnMSc7XHJcbiAgICB9LCA1MDApXHJcblxyXG4gIH0pXHJcblxyXG59XHJcbiIsImNvbnN0IHBhcmFsYXggPSAoZnVuY3Rpb24oKSB7XHJcblxyXG4gIGxldCB1c2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZXJvX19hdmF0YXJcIilcclxuICBsZXQgc2VjdGlvblRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlcm9fX2JnLXdvcmRcIilcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIG1vdmUoYmxvY2ssIHdpbmRvd1Njcm9sbCwgc3RyYWZlQW1vdW50LCB4UG9zKSB7XHJcbiAgICAgIGxldCBzdHJhZmUgPSB3aW5kb3dTY3JvbGwgLyAtc3RyYWZlQW1vdW50O1xyXG4gICAgICBsZXQgc3R5bGUgPSBibG9jay5zdHlsZTtcclxuICAgICAgLy8g0L/QtdGA0LXQtNCw0Y4gdHJhbnNsYXRlINC/0L4geCwg0YIu0LouINC30L3QsNGH0LXQvdC40Y8g0YMg0LLRgdC10YUg0Y3Qu9C10LzQtdC90YLQvtCyINGA0LDQt9C90YvQtVxyXG4gICAgICBsZXQgdHJhbnNmb3JtU3RyaW5nID0gYHRyYW5zbGF0ZTNkKCR7eFBvc30lLCAkey01MCArIHN0cmFmZX0lLCAwKWBcclxuICAgICAgc3R5bGUudHJhbnNmb3JtID0gdHJhbnNmb3JtU3RyaW5nO1xyXG4gICAgfSxcclxuICAgIGluaXQod1Njcm9sbCkge1xyXG4gICAgICB0aGlzLm1vdmUodXNlciwgd1Njcm9sbCwgMywgLTUwKVxyXG4gICAgICB0aGlzLm1vdmUoc2VjdGlvblRleHQsIHdTY3JvbGwsIDIwLCAwKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbn0oKSlcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGZ1bmN0aW9uKCkge1xyXG5cclxuICBsZXQgd1Njcm9sbCA9IHdpbmRvdy5wYWdlWU9mZnNldFxyXG5cclxuICBwYXJhbGF4LmluaXQod1Njcm9sbCk7XHJcblxyXG5cclxufSkiLCJjb25zdCBwYXJhbGF4Q29udCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3ZWxjb21lX19wYXJhbGF4Jyk7XHJcbmNvbnN0IGxheWVycyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3BhcmFsYXhfX2xheWVyJykpO1xyXG5cclxuaWYocGFyYWxheENvbnQgIT09IG51bGwpIHtcclxuICBjb25zdCBtb3ZlTGF5ZXJzID0gKGUpID0+IHtcclxuICAgIFxyXG4gICAgY29uc3QgaW5pdGlhbFggPSAod2luZG93LmlubmVyV2lkdGgvMikgLSBlLnBhZ2VYO1xyXG4gICAgY29uc3QgaW5pdGlhbFkgPSAod2luZG93LmlubmVySGVpZ2h0LzIpIC0gZS5wYWdlWTtcclxuXHJcbiAgICBsYXllcnMuZm9yRWFjaCgoZWwsIGkpID0+IHsgICAgICBcclxuICAgICAgbGV0IGRpdmlkZXIgPSBpIC8gNzA7XHJcbiAgICAgIGxldCBwb3NpdGlvblggPSBpbml0aWFsWCAqIGRpdmlkZXI7XHJcbiAgICAgIGxldCBwb3NpdGlvblkgPSBpbml0aWFsWSAqIGRpdmlkZXI7XHJcbiAgICAgIGVsLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUoJHtwb3NpdGlvblh9cHgsICR7cG9zaXRpb25ZfXB4KWA7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG1vdmVMYXllcnMpO1xyXG59XHJcblxyXG5cclxuXHJcbiIsImxldCB3cmFwcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWN0cy1mb3JtJylcclxubGV0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFjdHMtZm9ybV9fYmx1cicpXHJcbmxldCBpbWdCZ1dyYXBwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZlZWRiYWNrX19iZycpXHJcbmxldCBpbWdCZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mZWVkYmFja19fYmctaW1nJylcclxuXHJcbmlmKHdyYXBwICE9PSBudWxsKSB7XHJcbiAgbGV0IGJsdXIgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc2V0KCkge1xyXG4gICAgICAgIGxldCBpbWdXaWR0aCA9IGltZ0JnV3JhcHAub2Zmc2V0V2lkdGgsXHJcbiAgICAgICAgICAgIGltZ1NpemVUb3AgPSBpbWdCZy5vZmZzZXRUb3AsXHJcbiAgICAgICAgICAgIHBvc0xlZnQgPSAtd3JhcHAub2Zmc2V0TGVmdCxcclxuICAgICAgICAgICAgcG9zVG9wID0gLSh3cmFwcC5vZmZzZXRUb3AgLSBpbWdTaXplVG9wKSxcclxuICAgICAgICAgICAgYmx1ckNTUyA9IGZvcm0uc3R5bGU7XHJcblxyXG4gICAgICAgIGJsdXJDU1MuYmFja2dyb3VuZFNpemUgPSBgJHtpbWdXaWR0aH1weCBhdXRvYFxyXG4gICAgICAgIGJsdXJDU1MuYmFja2dyb3VuZFBvc2l0aW9uID0gYCR7cG9zTGVmdH1weCAke3Bvc1RvcH1weGBcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0oKSlcclxuXHJcbiAgd2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgYmx1ci5zZXQoKTtcclxuICB9XHJcblxyXG5cclxuICB3aW5kb3cub25yZXNpemUgPSBmdW5jdGlvbigpIHtcclxuICAgIGJsdXIuc2V0KCk7XHJcbiAgfSAgXHJcbn1cclxuXHJcbiIsIi8vIGJ1dHRvbnMgc2xpZGVyXHJcblxyXG5sZXQgc2xpZGVyU3RhcnQgPSBuZXcgU2xpZGVyKHtcclxuICBjb250YWluZXJWaWV3OiAnLnNsaWRlcl9fdmlld3MtbGlzdCcsXHJcbiAgY29udGFpbmVyTGVmdDogJy5idXR0b25zLWxlZnRfX2xpc3QnLFxyXG4gIGNvbnRhaW5lclJpZ2h0OiAnLmJ1dHRvbnMtcmlnaHRfX2xpc3QnLFxyXG4gIHNsaWRlckluZm86Jy5zbGlkZXJfX2luZm8tbGlzdCcsXHJcbiAgc2xpZGU6ICcuc2xpZGUnLFxyXG4gIGJ1dHRvbnNMZWZ0OiAnLnNsaWRlcl9fYnV0dG9ucy1sZWZ0IC5zbGlkZXJfX2J1dHRvbnMtaW1nJyxcclxuICBidXR0b25zUmlnaHQ6ICcuc2xpZGVyX19idXR0b25zLXJpZ2h0IC5zbGlkZXJfX2J1dHRvbnMtaW1nJyxcclxuICBkdXJhdGlvbjogJzgwMCcsXHJcblxyXG59KTtcclxuXHJcbmZ1bmN0aW9uIFNsaWRlcihvcHRpb25zKSB7XHJcbiAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gIHRoYXQuY291bnRlciA9IDA7XHJcbiAgdGhhdC5jb3VudGVyUHJldjtcclxuICB0aGF0LmNvdW50ZXJOZXh0O1xyXG4gIHRoYXQuaW5Qcm9jZXNzID0gZmFsc2U7XHJcbiAgdGhhdC5jb250YWluZXJWaWV3ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihvcHRpb25zLmNvbnRhaW5lclZpZXcpO1xyXG4gIHRoYXQuY29udGFpbmVyTGVmdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Iob3B0aW9ucy5jb250YWluZXJMZWZ0KTtcclxuICB0aGF0LmNvbnRhaW5lclJpZ2h0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihvcHRpb25zLmNvbnRhaW5lclJpZ2h0KTtcclxuXHJcbiAgdGhhdC5zbGlkZXJJbmZvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihvcHRpb25zLnNsaWRlckluZm8pO1xyXG5cclxuICBpZighdGhhdC5jb250YWluZXJWaWV3ICYmICF0aGF0LmNvbnRhaW5lckxlZnQgJiYgIXRoYXQuY29udGFpbmVyUmlnaHQpIHtcclxuICAgIHJldHVyblxyXG4gIH0gZWxzZSB7XHJcbiAgICB0aGF0LmxlbmdodENoaWxkID0gTWF0aC5tYXgoXHJcbiAgICAgIEFycmF5LmZyb20odGhhdC5jb250YWluZXJWaWV3LnF1ZXJ5U2VsZWN0b3JBbGwob3B0aW9ucy5zbGlkZSkpLmxlbmd0aCxcclxuICAgICAgQXJyYXkuZnJvbSh0aGF0LmNvbnRhaW5lckxlZnQucXVlcnlTZWxlY3RvckFsbChvcHRpb25zLnNsaWRlKSkubGVuZ3RoLFxyXG4gICAgICBBcnJheS5mcm9tKHRoYXQuY29udGFpbmVyUmlnaHQucXVlcnlTZWxlY3RvckFsbChvcHRpb25zLnNsaWRlKSkubGVuZ3RoXHJcbiAgICApO1xyXG4gIH1cclxuICBcclxuICB0aGF0LmJ1dHRvbnNMZWZ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihvcHRpb25zLmJ1dHRvbnNMZWZ0KTtcclxuICB0aGF0LmJ1dHRvbnNSaWdodCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Iob3B0aW9ucy5idXR0b25zUmlnaHQpO1xyXG4gIHRoYXQuZHVyYXRpb24gPSBvcHRpb25zLmR1cmF0aW9uO1xyXG4gIFxyXG4gIHRoYXQubW92ZVNsaWRlID0gZnVuY3Rpb24oY29udGFpbmVyLCBvcmllbnRhdGlvbiwgZGlyZWN0aW9uKSB7XHJcblxyXG4gICAgbGV0IGl0ZW1zID0gQXJyYXkuZnJvbShjb250YWluZXIuY2hpbGRyZW4pO1xyXG4gICAgbGV0IGFjdGl2ZUl0ZW0gPSB7fTtcclxuICAgIGxldCByZXFJdGVtO1xyXG4gICAgbGV0IHZpZXdJZHg7XHJcbiAgICBcclxuICAgIGl0ZW1zLmZvckVhY2goKGVsLCBpKT0+IHtcclxuICAgICAgaWYoZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xyXG4gICAgICAgIGFjdGl2ZUl0ZW0uZWxlbSA9IGVsLFxyXG4gICAgICAgIGFjdGl2ZUl0ZW0uaW5kZXggPSBpXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGlmKHRoYXQuY291bnRlciA+PSBpdGVtcy5sZW5ndGgpIHRoYXQuY291bnRlciA9IDA7XHJcbiAgICBpZih0aGF0LmNvdW50ZXIgPCAwKSB0aGF0LmNvdW50ZXIgPSBpdGVtcy5sZW5ndGggLSAxO1xyXG4gICAgdGhhdC5jb3VudFNsaWRlKCBhY3RpdmVJdGVtLmluZGV4LCB0aGF0LmxlbmdodENoaWxkKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKGFjdGl2ZUl0ZW0uaW5kZXgpO1xyXG4gICAgaWYob3JpZW50YXRpb24gPT09ICdwcmV2Jykge1xyXG4gICAgICByZXFJdGVtID0gaXRlbXNbdGhhdC5jb3VudGVyUHJldl07XHJcbiAgICAgIHZpZXdJZHggPSB0aGF0LmNvdW50ZXJQcmV2O1xyXG4gICAgfVxyXG5cclxuICAgIGlmKG9yaWVudGF0aW9uID09PSAnbmV4dCcpIHtcclxuICAgICAgcmVxSXRlbSA9IGl0ZW1zW3RoYXQuY291bnRlck5leHRdO1xyXG4gICAgICB2aWV3SWR4ID0gdGhhdC5jb3VudGVyTmV4dDtcclxuICAgIH1cclxuICAgIGFjdGl2ZUl0ZW0gPSBhY3RpdmVJdGVtLmVsZW07XHJcblxyXG4gICAgaWYoIWRpcmVjdGlvbikge1xyXG4gICAgICBhY3RpdmVJdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICByZXFJdGVtLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICB0aGF0LnNsaWRlckluZm9GaWxsKHRoYXQuc2xpZGVySW5mbywgdGhhdC5jb250YWluZXJWaWV3LCB2aWV3SWR4KVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYW5pbWF0ZSh7XHJcbiAgICAgICAgZHVyYXRpb246IHRoYXQuZHVyYXRpb24sXHJcbiAgICAgICAgZHJhdyhwcm9ncmVzcykge1xyXG4gICAgICAgICAgYWN0aXZlSXRlbS5zdHlsZS50b3AgPSAoZGlyZWN0aW9uID09PSAnZG93bicpID8gYCR7cHJvZ3Jlc3N9JWAgOiBgJHstcHJvZ3Jlc3N9JWA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICBcclxuICAgICAgYW5pbWF0ZSh7XHJcbiAgICAgICAgZHVyYXRpb246IHRoYXQuZHVyYXRpb24sXHJcbiAgICAgICAgZHJhdyhwcm9ncmVzcykge1xyXG4gICAgICAgICAgcmVxSXRlbS5zdHlsZS50b3AgPSAoZGlyZWN0aW9uID09PSAnZG93bicpID8gYCR7KC0xMDApICsgcHJvZ3Jlc3N9JWAgOiBgJHsxMDAgLSBwcm9ncmVzc30lYDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGFmdGVyKCkge1xyXG4gICAgICAgICAgYWN0aXZlSXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgICAgIHJlcUl0ZW0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgICAgICB0aGF0LmluUHJvY2VzcyA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB0aGF0LmluaXQgPSBmdW5jdGlvbigpIHtcclxuICAgIC8vIGNhbGN1bGF0aW9uIGNvdW50ZXJzXHJcbiAgICB0aGF0LmNvdW50U2xpZGUodGhhdC5jb3VudGVyLCB0aGF0LmxlbmdodENoaWxkKTtcclxuICAgIC8vIGNhbGN1bGF0aW9uIGNvdW50ZXJzXHJcblxyXG4gICAgLy8gaW5pdGlhbCBmaXJzdCBzbGlkZXNcclxuICAgIHRoYXQuc2xpZGVJbml0KHRoYXQuY29udGFpbmVyVmlldywgdGhhdC5jb3VudGVyKTtcclxuICAgIHRoYXQuc2xpZGVJbml0KHRoYXQuY29udGFpbmVyTGVmdCwgdGhhdC5jb3VudGVyUHJldik7XHJcbiAgICB0aGF0LnNsaWRlSW5pdCh0aGF0LmNvbnRhaW5lclJpZ2h0LCB0aGF0LmNvdW50ZXJOZXh0KTtcclxuICAgIC8vIGluaXRpYWwgZmlyc3Qgc2xpZGVzXHJcbiAgICB0aGF0LnNsaWRlckluZm9GaWxsKHRoYXQuc2xpZGVySW5mbywgdGhhdC5jb250YWluZXJWaWV3LCB0aGF0LmNvdW50ZXIpXHJcbiAgICAvLyBsaXN0ZW5lcnNcclxuICAgIHRoYXQuYnV0dG9uc0xlZnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+IHtcclxuICAgICAgaWYoIXRoYXQuaW5Qcm9jZXNzKSB7XHJcbiAgICAgICAgdGhhdC5pblByb2Nlc3MgPSB0cnVlO1xyXG4gICAgICAgIHRoYXQubW92ZVNsaWRlKHRoYXQuY29udGFpbmVyVmlldywgJ3ByZXYnKTtcclxuICAgICAgICB0aGF0Lm1vdmVTbGlkZSh0aGF0LmNvbnRhaW5lckxlZnQsICAncHJldicsICdkb3duJyk7XHJcbiAgICAgICAgdGhhdC5tb3ZlU2xpZGUodGhhdC5jb250YWluZXJSaWdodCwgICdwcmV2JywgJ3VwJyk7XHJcbiAgICAgICAgLy8gdGhhdC5jb3VudGVyLS07XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgdGhhdC5idXR0b25zUmlnaHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+IHtcclxuICAgICAgaWYoIXRoYXQuaW5Qcm9jZXNzKSB7XHJcbiAgICAgICAgdGhhdC5pblByb2Nlc3MgPSB0cnVlO1xyXG4gICAgICAgIHRoYXQubW92ZVNsaWRlKHRoYXQuY29udGFpbmVyVmlldywgJ25leHQnKTtcclxuICAgICAgICB0aGF0Lm1vdmVTbGlkZSh0aGF0LmNvbnRhaW5lckxlZnQsICduZXh0JywgJ2Rvd24nKTtcclxuICAgICAgICB0aGF0Lm1vdmVTbGlkZSh0aGF0LmNvbnRhaW5lclJpZ2h0LCAnbmV4dCcsICd1cCcpO1xyXG4gICAgICAgIC8vIHRoYXQuY291bnRlcisrO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIC8vIGxpc3RlbmVyc1xyXG4gIH1cclxuXHJcbiAgdGhhdC5zbGlkZUluaXQgPSAoY29udGFpbmVyLCBpKT0+IHtcclxuICAgIGxldCBjaGlsZCA9IGNvbnRhaW5lci5jaGlsZHJlbjtcclxuICAgIGNoaWxkW2ldLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gIH1cclxuXHJcbiAgdGhhdC5zbGlkZXJJbmZvRmlsbCA9IChjb250YWluZXIsIGdldEF0dHJDb250YWluZXIsIGkpID0+IHtcclxuXHJcbiAgICBsZXQgdmlld1RpdGxlID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5pbmZvLWl0ZW1fX3RpdGxlJyksXHJcbiAgICAgICAgdmlld0Rlc2MgPSBjb250YWluZXIucXVlcnlTZWxlY3RvcignLmluZm8taXRlbV9fZGVzYycpLFxyXG4gICAgICAgIHZpZXdMaW5rID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5pbmZvLWl0ZW1fX2xpbmsnKTtcclxuXHJcbiAgICBsZXQgY2hpbGQgPSBBcnJheS5mcm9tKGdldEF0dHJDb250YWluZXIuY2hpbGRyZW4pO1xyXG5cclxuICAgIGlmKGkgPj0gY2hpbGQubGVuZ3RoKSBpID0gMDtcclxuICAgIGlmKGkgPCAwKSBpID0gY2hpbGQubGVuZ3RoIC0gMTtcclxuXHJcbiAgICBsZXQgdGl0bGUgPSBjaGlsZFtpXS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGl0bGUnKSxcclxuICAgICAgICBkZXNjID0gY2hpbGRbaV0uZ2V0QXR0cmlidXRlKCdkYXRhLXRlY2hub2xvZ3knKSxcclxuICAgICAgICBsaW5rID0gY2hpbGRbaV0uZ2V0QXR0cmlidXRlKCdkYXRhLWxpbmsnKTtcclxuXHJcbiAgICB0aXRsZSA9IHNwbGl0V29yZCh0aXRsZSwgdmlld1RpdGxlLCB0aGF0LmR1cmF0aW9uKTtcclxuICAgIGRlc2MgPSBzcGxpdFdvcmQoZGVzYywgdmlld0Rlc2MsIHRoYXQuZHVyYXRpb24pO1xyXG4gICAgdmlld0xpbmsuaHJlZiA9IGxpbms7XHJcbiAgfVxyXG4gIFxyXG4gIHRoYXQuY291bnRTbGlkZSA9IChjb3VudGVyLCBhcnJTbGlkZSk9PiB7XHJcbiAgICBpZihjb3VudGVyID09PSBhcnJTbGlkZSAtIDEpIHtcclxuICAgICAgdGhhdC5jb3VudGVyTmV4dCA9IDBcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoYXQuY291bnRlck5leHQgPSBjb3VudGVyICsgMVxyXG4gICAgfVxyXG4gICAgaWYoY291bnRlciA9PT0gMCkge1xyXG4gICAgICB0aGF0LmNvdW50ZXJQcmV2ID0gYXJyU2xpZGUgLSAxXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGF0LmNvdW50ZXJQcmV2ID0gY291bnRlciAtIDFcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHRoYXQuaW5pdCgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzcGxpdFdvcmQod29yZCwgbm9kZUVsZW0sIGR1cikge1xyXG4gIGxldCBkdXJhdGlvbiA9IGR1ci93b3JkLnNwbGl0KCcnKS5sZW5ndGg7XHJcbiAgbGV0IHNwbFdvcmQgID0gd29yZC5zcGxpdCgnICcpO1xyXG4gIG5vZGVFbGVtLnRleHRDb250ZW50ID0gJyc7XHJcbiAgbGV0IGRpdiA9IDA7XHJcbiAgc3BsV29yZC5mb3JFYWNoKChlbCxpKT0+IHtcclxuICAgIFxyXG4gICAgbGV0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICBzcGFuLmNsYXNzTmFtZSA9ICd3b3JkJztcclxuXHJcbiAgICBlbC5zcGxpdCgnJykuZm9yRWFjaCgobGV0ZXIsIGopPT4ge1xyXG4gICAgICBsZXQgc3BhbkxldGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICBzcGFuTGV0ZXIudGV4dENvbnRlbnQgPSBsZXRlcjtcclxuICAgICAgc3Bhbi5hcHBlbmRDaGlsZChzcGFuTGV0ZXIpO1xyXG4gICAgICBzZXRUaW1lb3V0KCgpPT4ge1xyXG4gICAgICAgIHNwYW5MZXRlci5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxyXG4gICAgICB9LCBkdXJhdGlvbiAqIGRpdiAqIDEuMyk7XHJcbiAgICAgIGRpdisrO1xyXG4gICAgfSlcclxuICAgIG5vZGVFbGVtLmFwcGVuZENoaWxkKHNwYW4pO1xyXG4gIH0pO1xyXG4gIHJldHVybiBzcGxXb3JkO1xyXG59XHJcblxyXG4vLyA9PT0gIFJBRiAgPT09XHJcbmZ1bmN0aW9uIGFuaW1hdGUoe2RyYXcsIGR1cmF0aW9uLCBhZnRlcn0pIHtcclxuXHJcbiAgbGV0IHN0YXJ0ID0gcGVyZm9ybWFuY2Uubm93KCk7XHJcbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uIGFuaW1hdGUodGltZSkge1xyXG4gICAgLy8gdGltZUZyYWN0aW9uIGdvZXMgZnJvbSAwIHRvIDFcclxuICAgIGxldCB0aW1lRnJhY3Rpb24gPSAoKHRpbWUgLSBzdGFydCkpO1xyXG5cclxuICAgIGlmKHRpbWVGcmFjdGlvbiA8PSAwKSB0aW1lRnJhY3Rpb24gPSAxO1xyXG4gICAgaWYgKHRpbWVGcmFjdGlvbiA+IGR1cmF0aW9uKSB0aW1lRnJhY3Rpb24gPSBkdXJhdGlvbjtcclxuICAgIC8vIGNhbGN1bGF0ZSB0aGUgY3VycmVudCBhbmltYXRpb24gc3RhdGVcclxuICAgIGxldCBwcm9ncmVzcyA9ICh0aW1lRnJhY3Rpb24gLyBkdXJhdGlvbikgKiAxMDBcclxuICAgIFxyXG4gICAgZHJhdyhwcm9ncmVzcyk7IC8vIGRyYXcgaXRcclxuXHJcbiAgICBpZiAodGltZUZyYWN0aW9uIDwgZHVyYXRpb24pIHtcclxuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpO1xyXG4gICAgfSBlbHNlIGlmKHRpbWVGcmFjdGlvbiA+PSBkdXJhdGlvbiAmJiBhZnRlcikge1xyXG4gICAgICBhZnRlcigpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcbiIsIid1c2Ugc3RyaWN0J1xyXG5cclxuLy8gc3ZnIHBvbHlmaWxsXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0vL1xyXG5pbXBvcnQgc3ZnNGV2ZXJ5Ym9keSBmcm9tICdzdmc0ZXZlcnlib2R5JztcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PS8vXHJcblxyXG5zdmc0ZXZlcnlib2R5KClcclxuXHJcbi8vIHBvbHlmaWxsXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0vL1xyXG5pbXBvcnQgJy4vbGliL3BvbHlmaWxscyc7XHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0vL1xyXG5cclxuaW1wb3J0ICcuL2NvbW1vbi9tYWluJztcclxuaW1wb3J0ICcuL2NvbW1vbi9tb2RhbCc7XHJcbmltcG9ydCAnLi9jb21tb24vbWVudSc7XHJcbmltcG9ydCAnLi9jb21tb24vd29yayc7XHJcbmltcG9ydCAnLi9jb21tb24vcGFyYWxheCc7XHJcbmltcG9ydCAnLi9jb21tb24vcGFyYWxheC1zY3JvbGwnO1xyXG5pbXBvcnQgJy4vY29tbW9uL3dvcmtzLXNsaWRlcic7XHJcbiIsIi8vIEFycmF5LmZyb21cclxuaWYgKCFBcnJheS5mcm9tKSB7XHJcbiAgQXJyYXkuZnJvbSA9IChmdW5jdGlvbigpIHtcclxuICAgIHZhciB0b1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XHJcbiAgICB2YXIgaXNDYWxsYWJsZSA9IGZ1bmN0aW9uKGZuKSB7XHJcbiAgICAgIHJldHVybiB0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicgfHwgdG9TdHIuY2FsbChmbikgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XHJcbiAgICB9O1xyXG4gICAgdmFyIHRvSW50ZWdlciA9IGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgICB2YXIgbnVtYmVyID0gTnVtYmVyKHZhbHVlKTtcclxuICAgICAgaWYgKGlzTmFOKG51bWJlcikpIHsgcmV0dXJuIDA7IH1cclxuICAgICAgaWYgKG51bWJlciA9PT0gMCB8fCAhaXNGaW5pdGUobnVtYmVyKSkgeyByZXR1cm4gbnVtYmVyOyB9XHJcbiAgICAgIHJldHVybiAobnVtYmVyID4gMCA/IDEgOiAtMSkgKiBNYXRoLmZsb29yKE1hdGguYWJzKG51bWJlcikpO1xyXG4gICAgfTtcclxuICAgIHZhciBtYXhTYWZlSW50ZWdlciA9IE1hdGgucG93KDIsIDUzKSAtIDE7XHJcbiAgICB2YXIgdG9MZW5ndGggPSBmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgICAgdmFyIGxlbiA9IHRvSW50ZWdlcih2YWx1ZSk7XHJcbiAgICAgIHJldHVybiBNYXRoLm1pbihNYXRoLm1heChsZW4sIDApLCBtYXhTYWZlSW50ZWdlcik7XHJcbiAgICB9O1xyXG5cclxuICAgIC8vINCh0LLQvtC50YHRgtCy0L4gbGVuZ3RoINC80LXRgtC+0LTQsCBmcm9tINGA0LDQstC90L4gMS5cclxuICAgIHJldHVybiBmdW5jdGlvbiBmcm9tKGFycmF5TGlrZS8qLCBtYXBGbiwgdGhpc0FyZyAqLykge1xyXG4gICAgICAvLyAxLiDQn9C+0LvQvtC20LjQvCBDINGA0LDQstC90YvQvCDQt9C90LDRh9C10L3QuNGOIHRoaXMuXHJcbiAgICAgIHZhciBDID0gdGhpcztcclxuXHJcbiAgICAgIC8vIDIuINCf0L7Qu9C+0LbQuNC8IGl0ZW1zINGA0LDQstC90YvQvCBUb09iamVjdChhcnJheUxpa2UpLlxyXG4gICAgICB2YXIgaXRlbXMgPSBPYmplY3QoYXJyYXlMaWtlKTtcclxuXHJcbiAgICAgIC8vIDMuIFJldHVybklmQWJydXB0KGl0ZW1zKS5cclxuICAgICAgaWYgKGFycmF5TGlrZSA9PSBudWxsKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJyYXkuZnJvbSByZXF1aXJlcyBhbiBhcnJheS1saWtlIG9iamVjdCAtIG5vdCBudWxsIG9yIHVuZGVmaW5lZCcpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyA0LiDQldGB0LvQuCBtYXBmbiDRgNCw0LLQtdC9IHVuZGVmaW5lZCwg0L/QvtC70L7QttC40LwgbWFwcGluZyDRgNCw0LLQvdGL0LwgZmFsc2UuXHJcbiAgICAgIHZhciBtYXBGbiA9IGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdm9pZCB1bmRlZmluZWQ7XHJcbiAgICAgIHZhciBUO1xyXG4gICAgICBpZiAodHlwZW9mIG1hcEZuICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIC8vIDUuINC40L3QsNGH0LVcclxuICAgICAgICAvLyA1LiBhLiDQldGB0LvQuCDQstGL0LfQvtCyIElzQ2FsbGFibGUobWFwZm4pINGA0LDQstC10L0gZmFsc2UsINCy0YvQutC40LTRi9Cy0LDQtdC8INC40YHQutC70Y7Rh9C10L3QuNC1IFR5cGVFcnJvci5cclxuICAgICAgICBpZiAoIWlzQ2FsbGFibGUobWFwRm4pKSB7XHJcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcnJheS5mcm9tOiB3aGVuIHByb3ZpZGVkLCB0aGUgc2Vjb25kIGFyZ3VtZW50IG11c3QgYmUgYSBmdW5jdGlvbicpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gNS4gYi4g0JXRgdC70LggdGhpc0FyZyDQv9GA0LjRgdGD0YLRgdGC0LLRg9C10YIsINC/0L7Qu9C+0LbQuNC8IFQg0YDQsNCy0L3Ri9C8IHRoaXNBcmc7INC40L3QsNGH0LUg0L/QvtC70L7QttC40LwgVCDRgNCw0LLQvdGL0LwgdW5kZWZpbmVkLlxyXG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMikge1xyXG4gICAgICAgICAgVCA9IGFyZ3VtZW50c1syXTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIDEwLiDQn9C+0LvQvtC20LjQvCBsZW5WYWx1ZSDRgNCw0LLQvdGL0LwgR2V0KGl0ZW1zLCBcImxlbmd0aFwiKS5cclxuICAgICAgLy8gMTEuINCf0L7Qu9C+0LbQuNC8IGxlbiDRgNCw0LLQvdGL0LwgVG9MZW5ndGgobGVuVmFsdWUpLlxyXG4gICAgICB2YXIgbGVuID0gdG9MZW5ndGgoaXRlbXMubGVuZ3RoKTtcclxuXHJcbiAgICAgIC8vIDEzLiDQldGB0LvQuCBJc0NvbnN0cnVjdG9yKEMpINGA0LDQstC10L0gdHJ1ZSwg0YLQvlxyXG4gICAgICAvLyAxMy4gYS4g0J/QvtC70L7QttC40LwgQSDRgNCw0LLQvdGL0Lwg0YDQtdC30YPQu9GM0YLQsNGC0YMg0LLRi9C30L7QstCwINCy0L3Rg9GC0YDQtdC90L3QtdCz0L4g0LzQtdGC0L7QtNCwIFtbQ29uc3RydWN0XV1cclxuICAgICAgLy8gICAgINC+0LHRitC10LrRgtCwIEMg0YHQviDRgdC/0LjRgdC60L7QvCDQsNGA0LPRg9C80LXQvdGC0L7Qsiwg0YHQvtC00LXRgNC20LDRidC40Lwg0LXQtNC40L3RgdGC0LLQtdC90L3Ri9C5INGN0LvQtdC80LXQvdGCIGxlbi5cclxuICAgICAgLy8gMTQuIGEuINCY0L3QsNGH0LUsINC/0L7Qu9C+0LbQuNC8IEEg0YDQsNCy0L3Ri9C8IEFycmF5Q3JlYXRlKGxlbikuXHJcbiAgICAgIHZhciBBID0gaXNDYWxsYWJsZShDKSA/IE9iamVjdChuZXcgQyhsZW4pKSA6IG5ldyBBcnJheShsZW4pO1xyXG5cclxuICAgICAgLy8gMTYuINCf0L7Qu9C+0LbQuNC8IGsg0YDQsNCy0L3Ri9C8IDAuXHJcbiAgICAgIHZhciBrID0gMDtcclxuICAgICAgLy8gMTcuINCf0L7QutCwIGsgPCBsZW4sINCx0YPQtNC10Lwg0L/QvtCy0YLQvtGA0Y/RgtGMLi4uICjRiNCw0LPQuCDRgSBhINC/0L4gaClcclxuICAgICAgdmFyIGtWYWx1ZTtcclxuICAgICAgd2hpbGUgKGsgPCBsZW4pIHtcclxuICAgICAgICBrVmFsdWUgPSBpdGVtc1trXTtcclxuICAgICAgICBpZiAobWFwRm4pIHtcclxuICAgICAgICAgIEFba10gPSB0eXBlb2YgVCA9PT0gJ3VuZGVmaW5lZCcgPyBtYXBGbihrVmFsdWUsIGspIDogbWFwRm4uY2FsbChULCBrVmFsdWUsIGspO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBBW2tdID0ga1ZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBrICs9IDE7XHJcbiAgICAgIH1cclxuICAgICAgLy8gMTguINCf0L7Qu9C+0LbQuNC8IHB1dFN0YXR1cyDRgNCw0LLQvdGL0LwgUHV0KEEsIFwibGVuZ3RoXCIsIGxlbiwgdHJ1ZSkuXHJcbiAgICAgIEEubGVuZ3RoID0gbGVuO1xyXG4gICAgICAvLyAyMC4g0JLQtdGA0L3RkdC8IEEuXHJcbiAgICAgIHJldHVybiBBO1xyXG4gICAgfTtcclxuICB9KCkpO1xyXG59XHJcblxyXG4vLyBBcnJheS5pc0FycmF5XHJcbmlmICghQXJyYXkuaXNBcnJheSkge1xyXG4gIEFycmF5LmlzQXJyYXkgPSBmdW5jdGlvbihhcmcpIHtcclxuICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJnKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcclxuICB9O1xyXG59XHJcblxyXG4vLyBBcnJheS5vZlxyXG5pZiAoIUFycmF5Lm9mKSB7XHJcbiAgQXJyYXkub2YgPSBmdW5jdGlvbigpIHtcclxuICAgIHJldHVybiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpO1xyXG4gIH07XHJcbn1cclxuXHJcbi8vIEFycmF5LmZpbmRcclxuaWYgKCFBcnJheS5wcm90b3R5cGUuZmluZCkge1xyXG4gIEFycmF5LnByb3RvdHlwZS5maW5kID0gZnVuY3Rpb24ocHJlZGljYXRlKSB7XHJcbiAgICBpZiAodGhpcyA9PSBudWxsKSB7XHJcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FycmF5LnByb3RvdHlwZS5maW5kIGNhbGxlZCBvbiBudWxsIG9yIHVuZGVmaW5lZCcpO1xyXG4gICAgfVxyXG4gICAgaWYgKHR5cGVvZiBwcmVkaWNhdGUgIT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigncHJlZGljYXRlIG11c3QgYmUgYSBmdW5jdGlvbicpO1xyXG4gICAgfVxyXG4gICAgdmFyIGxpc3QgPSBPYmplY3QodGhpcyk7XHJcbiAgICB2YXIgbGVuZ3RoID0gbGlzdC5sZW5ndGggPj4+IDA7XHJcbiAgICB2YXIgdGhpc0FyZyA9IGFyZ3VtZW50c1sxXTtcclxuICAgIHZhciB2YWx1ZTtcclxuXHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHZhbHVlID0gbGlzdFtpXTtcclxuICAgICAgaWYgKHByZWRpY2F0ZS5jYWxsKHRoaXNBcmcsIHZhbHVlLCBpLCBsaXN0KSkge1xyXG4gICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICB9O1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==