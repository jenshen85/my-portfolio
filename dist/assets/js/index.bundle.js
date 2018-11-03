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

    var i = 0;

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = layers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var layer = _step.value;


        var divider = i / 70;
        var positionX = initialX * divider;
        var positionY = initialY * divider;

        layer.style.transform = 'translate(' + positionX + 'px, ' + positionY + 'px)';

        i++;
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
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
  slide: '.slide',
  buttonsLeft: '.slider__buttons-left .slider__buttons-img',
  buttonsRight: '.slider__buttons-right .slider__buttons-img',
  duration: '700'

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
  that.lenghtChild = Math.max(Array.from(that.containerView.querySelectorAll(options.slide)).length, Array.from(that.containerLeft.querySelectorAll(options.slide)).length, Array.from(that.containerRight.querySelectorAll(options.slide)).length);
  that.buttonsLeft = document.querySelector(options.buttonsLeft);
  that.buttonsRight = document.querySelector(options.buttonsRight);
  that.duration = options.duration;

  that.moveSlide = function (container, orientation, direction) {

    var items = Array.from(container.children);
    var activeItem = {};
    var reqItem = void 0;

    items.forEach(function (el, i) {
      if (el.classList.contains('active')) {
        activeItem.elem = el, activeItem.index = i;
      }
    });

    if (that.counter >= items.length) that.counter = 0;
    if (that.counter < 0) that.counter = items.length - 1;

    that.countSlide(activeItem.index, that.lenghtChild);
    activeItem = activeItem.elem;
    if (orientation === 'prev') {
      reqItem = items[that.counterPrev];
    }

    if (orientation === 'next') {
      reqItem = items[that.counterNext];
    }

    if (!direction) {
      activeItem.classList.remove('active');
      reqItem.classList.add('active');
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

// ===  RAF  ===
function animate(_ref) {
  var draw = _ref.draw,
      duration = _ref.duration,
      after = _ref.after;


  var start = performance.now();
  requestAnimationFrame(function animate(time) {
    // timeFraction goes from 0 to 1
    var timeFraction = time - start;

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

// import fontawesome from "font-awesome"
// fontawesome.dom.i2svg()

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N2ZzRldmVyeWJvZHkvZGlzdC9zdmc0ZXZlcnlib2R5LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21tb24vbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tbW9uL21lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbW1vbi9tb2RhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tbW9uL3BhcmFsYXgtc2Nyb2xsLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21tb24vcGFyYWxheC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tbW9uL3dvcmsuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbW1vbi93b3Jrcy1zbGlkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2luZGV4LmpzIl0sIm5hbWVzIjpbIndlbGNvbUJ1dHRvbiIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ0b0dlbmVyYWwiLCJiYWNrQnV0dG9uIiwicXVlcnlTZWxlY3RvciIsImZsaXBwIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsYXNzTGlzdCIsImFkZCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInJlbW92ZSIsIk1FTlVfQlVUVE9OIiwiTUVOVV9CVVRUT05fV1JBUFAiLCJNRU5VIiwiQ09OVEFJTkVSIiwidGh1bWIiLCJ3aW5kb3ciLCJhYnNvbHV0ZUJ1dHRvblBvc1giLCJvZmZzZXRXaWR0aCIsIm9mZnNldExlZnQiLCJhYnNvbHV0ZUJ1dHRvblBvc1kiLCJvZmZzZXRUb3AiLCJidXR0b25Qb3NpdGlvbiIsInRvZ2dsZSIsImZpeGVkQnV0dG9uUG9zWSIsImZpeGVkQnV0dG9uUG9zWCIsImlubmVyV2lkdGgiLCJzdHlsZSIsInBvc2l0aW9uIiwicmlnaHQiLCJ0b3AiLCJtb2RhbEJ1dHRvbiIsIm1vZGFsIiwibG9naW5CdXR0b24iLCJXRUxDT01fQ09OVEFJTkVSIiwib3BhY2l0eSIsInNldFRpbWVvdXQiLCJwYXJhbGF4IiwidXNlciIsInNlY3Rpb25UZXh0IiwibW92ZSIsImJsb2NrIiwid2luZG93U2Nyb2xsIiwic3RyYWZlQW1vdW50IiwieFBvcyIsInN0cmFmZSIsInRyYW5zZm9ybVN0cmluZyIsInRyYW5zZm9ybSIsImluaXQiLCJ3U2Nyb2xsIiwicGFnZVlPZmZzZXQiLCJwYXJhbGF4Q29udCIsImxheWVycyIsIkFycmF5IiwicHJvdG90eXBlIiwic2xpY2UiLCJjYWxsIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsIm1vdmVMYXllcnMiLCJpbml0aWFsWCIsInBhZ2VYIiwiaW5pdGlhbFkiLCJpbm5lckhlaWdodCIsInBhZ2VZIiwiaSIsImxheWVyIiwiZGl2aWRlciIsInBvc2l0aW9uWCIsInBvc2l0aW9uWSIsIndyYXBwIiwiZm9ybSIsImltZ0JnV3JhcHAiLCJpbWdCZyIsImJsdXIiLCJzZXQiLCJpbWdXaWR0aCIsImltZ1NpemVUb3AiLCJwb3NMZWZ0IiwicG9zVG9wIiwiYmx1ckNTUyIsImJhY2tncm91bmRTaXplIiwiYmFja2dyb3VuZFBvc2l0aW9uIiwib25sb2FkIiwib25yZXNpemUiLCJzbGlkZXJTdGFydCIsIlNsaWRlciIsImNvbnRhaW5lclZpZXciLCJjb250YWluZXJMZWZ0IiwiY29udGFpbmVyUmlnaHQiLCJzbGlkZSIsImJ1dHRvbnNMZWZ0IiwiYnV0dG9uc1JpZ2h0IiwiZHVyYXRpb24iLCJvcHRpb25zIiwidGhhdCIsImNvdW50ZXIiLCJjb3VudGVyUHJldiIsImNvdW50ZXJOZXh0IiwiaW5Qcm9jZXNzIiwibGVuZ2h0Q2hpbGQiLCJNYXRoIiwibWF4IiwiZnJvbSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJsZW5ndGgiLCJtb3ZlU2xpZGUiLCJjb250YWluZXIiLCJvcmllbnRhdGlvbiIsImRpcmVjdGlvbiIsIml0ZW1zIiwiY2hpbGRyZW4iLCJhY3RpdmVJdGVtIiwicmVxSXRlbSIsImZvckVhY2giLCJlbCIsImNvbnRhaW5zIiwiZWxlbSIsImluZGV4IiwiY291bnRTbGlkZSIsImFuaW1hdGUiLCJkcmF3IiwicHJvZ3Jlc3MiLCJhZnRlciIsInNsaWRlSW5pdCIsImNoaWxkIiwiYXJyU2xpZGUiLCJzdGFydCIsInBlcmZvcm1hbmNlIiwibm93IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwidGltZSIsInRpbWVGcmFjdGlvbiJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUFBLGdIQUdMO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLHlCQUF5QjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3RkFBd0Y7QUFDeEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLHFCQUFxQjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLGdFQUFnRTtBQUM1RjtBQUNBO0FBQ0E7QUFDQSxDQUFDLEU7Ozs7Ozs7Ozs7OztBQ3pHRDs7QUFFQTtBQUNBOztBQUVBLElBQU1BLGVBQWVDLFNBQVNDLGNBQVQsQ0FBd0IscUJBQXhCLENBQXJCO0FBQ0EsSUFBTUMsWUFBWUYsU0FBU0MsY0FBVCxDQUF3QixZQUF4QixDQUFsQjtBQUNBLElBQU1FLGFBQVlILFNBQVNJLGFBQVQsQ0FBdUIsaUJBQXZCLENBQWxCO0FBQ0EsSUFBTUMsUUFBUUwsU0FBU0ksYUFBVCxDQUF1QixVQUF2QixDQUFkOztBQUVBLElBQUlDLFVBQVUsSUFBZCxFQUFvQjs7QUFFbEJOLGVBQWFPLGdCQUFiLENBQThCLE9BQTlCLEVBQXVDLFlBQU07O0FBRTNDRCxVQUFNRSxTQUFOLENBQWdCQyxHQUFoQixDQUFvQixRQUFwQjtBQUNBTCxlQUFXSSxTQUFYLENBQXFCQyxHQUFyQixDQUF5QixRQUF6QjtBQUVELEdBTEQ7O0FBT0FOLFlBQVVJLGdCQUFWLENBQTJCLE9BQTNCLEVBQW9DLFVBQUNHLENBQUQsRUFBTzs7QUFFekNBLE1BQUVDLGNBQUY7O0FBRUFMLFVBQU1FLFNBQU4sQ0FBZ0JJLE1BQWhCLENBQXVCLFFBQXZCO0FBQ0FSLGVBQVdJLFNBQVgsQ0FBcUJJLE1BQXJCLENBQTRCLFFBQTVCO0FBRUQsR0FQRDtBQVNELEM7Ozs7Ozs7Ozs7Ozs7O0FDNUJELElBQU1DLGNBQWNaLFNBQVNJLGFBQVQsQ0FBdUIsY0FBdkIsQ0FBcEI7QUFDQSxJQUFNUyxvQkFBb0JiLFNBQVNJLGFBQVQsQ0FBdUIscUJBQXZCLENBQTFCO0FBQ0EsSUFBTVUsT0FBT2QsU0FBU0ksYUFBVCxDQUF1QixhQUF2QixDQUFiO0FBQ0EsSUFBTVcsWUFBWWYsU0FBU0ksYUFBVCxDQUF1QixpQkFBdkIsQ0FBbEI7O0FBRUEsSUFBSVksUUFBUSxLQUFaOztBQUVBQyxPQUFPWCxnQkFBUCxDQUF3QixrQkFBeEIsRUFBNEMsWUFBVzs7QUFFckQsTUFBR1EsU0FBUyxJQUFaLEVBQWtCOztBQUVoQjtBQUNBO0FBQ0EsUUFBSUkscUJBQXNCSCxVQUFVSSxXQUFWLEdBQXdCTixrQkFBa0JPLFVBQTNDLEdBQXlEUCxrQkFBa0JNLFdBQXBHO0FBQ0EsUUFBSUUscUJBQXFCUixrQkFBa0JTLFNBQTNDOztBQUVBVixnQkFBWU4sZ0JBQVosQ0FBNkIsT0FBN0IsRUFBc0MsVUFBQ0csQ0FBRCxFQUFPOztBQUUzQ08sY0FBUSxDQUFDQSxLQUFUO0FBQ0FPLHFCQUFlTCxrQkFBZixFQUFtQ0csa0JBQW5DOztBQUVBVCxrQkFBWUwsU0FBWixDQUFzQmlCLE1BQXRCLENBQTZCLFFBQTdCO0FBQ0FWLFdBQUtQLFNBQUwsQ0FBZWlCLE1BQWYsQ0FBc0IsUUFBdEI7QUFFRCxLQVJEOztBQVVBUCxXQUFPWCxnQkFBUCxDQUF3QixRQUF4QixFQUFrQyxZQUFXO0FBQzNDaUIscUJBQWVMLGtCQUFmLEVBQW1DRyxrQkFBbkM7QUFDRCxLQUZEO0FBSUQ7QUFFRixDQXpCRDs7QUE0QkEsU0FBU0UsY0FBVCxDQUF3Qkwsa0JBQXhCLEVBQTRDRyxrQkFBNUMsRUFBZ0U7QUFDOUQ7QUFDQSxNQUFJSSxrQkFBa0JaLGtCQUFrQlMsU0FBeEM7QUFDQSxNQUFJSSxrQkFBa0IsQ0FBQ1QsT0FBT1UsVUFBUCxHQUFvQlosVUFBVUksV0FBL0IsSUFBOEMsQ0FBcEU7QUFDQU4sb0JBQWtCZSxLQUFsQixDQUF3QkMsUUFBeEIsR0FBbUNiLFFBQVEsT0FBUixHQUFrQixVQUFyRDtBQUNBSCxvQkFBa0JlLEtBQWxCLENBQXdCRSxLQUF4QixHQUFnQ2QsUUFBV1UsZUFBWCxVQUFvQ1Isa0JBQXBDLE9BQWhDO0FBQ0FMLG9CQUFrQmUsS0FBbEIsQ0FBd0JHLEdBQXhCLEdBQThCZixRQUFXUyxlQUFYLFVBQW9DSixrQkFBcEMsT0FBOUI7QUFDRCxDOzs7Ozs7Ozs7Ozs7OztBQzFDRCxJQUFNVyxjQUFjaEMsU0FBU0MsY0FBVCxDQUF3QixjQUF4QixDQUFwQjtBQUNBLElBQU1nQyxRQUFRakMsU0FBU0ksYUFBVCxDQUF1QixnQkFBdkIsQ0FBZDtBQUNBLElBQU04QixjQUFjbEMsU0FBU0MsY0FBVCxDQUF3QixjQUF4QixDQUFwQjtBQUNBLElBQU1rQyxtQkFBbUJuQyxTQUFTSSxhQUFULENBQXVCLG1CQUF2QixDQUF6Qjs7QUFFQSxJQUFHNkIsVUFBVSxJQUFiLEVBQW1COztBQUVqQkMsY0FBWTVCLGdCQUFaLENBQTZCLE9BQTdCLEVBQXNDLFVBQUNHLENBQUQsRUFBTzs7QUFFM0NBLE1BQUVDLGNBQUY7O0FBRUF5QixxQkFBaUJQLEtBQWpCLENBQXVCUSxPQUF2QixHQUFpQyxHQUFqQztBQUNBQyxlQUFXLFlBQVU7QUFDbkJKLFlBQU0xQixTQUFOLENBQWdCQyxHQUFoQixDQUFvQixRQUFwQjtBQUNELEtBRkQsRUFFRyxHQUZIO0FBSUQsR0FURDs7QUFXQXdCLGNBQVkxQixnQkFBWixDQUE2QixPQUE3QixFQUFzQyxZQUFNOztBQUUxQzJCLFVBQU0xQixTQUFOLENBQWdCSSxNQUFoQixDQUF1QixRQUF2Qjs7QUFHQTBCLGVBQVcsWUFBVTtBQUNuQkYsdUJBQWlCUCxLQUFqQixDQUF1QlEsT0FBdkIsR0FBaUMsR0FBakM7QUFDRCxLQUZELEVBRUcsR0FGSDtBQUlELEdBVEQ7QUFXRCxDOzs7Ozs7Ozs7Ozs7OztBQzdCRCxJQUFNRSxVQUFXLFlBQVc7O0FBRTFCLE1BQUlDLE9BQU92QyxTQUFTSSxhQUFULENBQXVCLGVBQXZCLENBQVg7QUFDQSxNQUFJb0MsY0FBY3hDLFNBQVNJLGFBQVQsQ0FBdUIsZ0JBQXZCLENBQWxCOztBQUVBLFNBQU87QUFDTHFDLFFBREssZ0JBQ0FDLEtBREEsRUFDT0MsWUFEUCxFQUNxQkMsWUFEckIsRUFDbUNDLElBRG5DLEVBQ3lDO0FBQzVDLFVBQUlDLFNBQVNILGVBQWUsQ0FBQ0MsWUFBN0I7QUFDQSxVQUFJaEIsUUFBUWMsTUFBTWQsS0FBbEI7QUFDQTtBQUNBLFVBQUltQixtQ0FBaUNGLElBQWpDLFlBQTJDLENBQUMsRUFBRCxHQUFNQyxNQUFqRCxXQUFKO0FBQ0FsQixZQUFNb0IsU0FBTixHQUFrQkQsZUFBbEI7QUFDRCxLQVBJO0FBUUxFLFFBUkssZ0JBUUFDLE9BUkEsRUFRUztBQUNaLFdBQUtULElBQUwsQ0FBVUYsSUFBVixFQUFnQlcsT0FBaEIsRUFBeUIsQ0FBekIsRUFBNEIsQ0FBQyxFQUE3QjtBQUNBLFdBQUtULElBQUwsQ0FBVUQsV0FBVixFQUF1QlUsT0FBdkIsRUFBZ0MsRUFBaEMsRUFBb0MsQ0FBcEM7QUFDRDtBQVhJLEdBQVA7QUFjRCxDQW5CZ0IsRUFBakI7O0FBcUJBakMsT0FBT1gsZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0MsWUFBVzs7QUFFM0MsTUFBSTRDLFVBQVVqQyxPQUFPa0MsV0FBckI7O0FBRUFiLFVBQVFXLElBQVIsQ0FBYUMsT0FBYjtBQUdELENBUEQsRTs7Ozs7Ozs7Ozs7Ozs7QUNyQkEsSUFBTUUsY0FBY3BELFNBQVNDLGNBQVQsQ0FBd0Isa0JBQXhCLENBQXBCO0FBQ0EsSUFBTW9ELFNBQVNDLE1BQU1DLFNBQU4sQ0FBZ0JDLEtBQWhCLENBQXNCQyxJQUF0QixDQUEyQnpELFNBQVMwRCxzQkFBVCxDQUFnQyxnQkFBaEMsQ0FBM0IsQ0FBZjs7QUFFQSxJQUFHTixnQkFBZ0IsSUFBbkIsRUFBeUI7O0FBRXZCLE1BQU1PLGFBQWEsU0FBYkEsVUFBYSxDQUFDbEQsQ0FBRCxFQUFPOztBQUV4QixRQUFNbUQsV0FBWTNDLE9BQU9VLFVBQVAsR0FBa0IsQ0FBbkIsR0FBd0JsQixFQUFFb0QsS0FBM0M7QUFDQSxRQUFNQyxXQUFZN0MsT0FBTzhDLFdBQVAsR0FBbUIsQ0FBcEIsR0FBeUJ0RCxFQUFFdUQsS0FBNUM7O0FBRUEsUUFBSUMsSUFBSSxDQUFSOztBQUx3QjtBQUFBO0FBQUE7O0FBQUE7QUFPeEIsMkJBQWtCWixNQUFsQiw4SEFBMEI7QUFBQSxZQUFqQmEsS0FBaUI7OztBQUV4QixZQUFJQyxVQUFVRixJQUFJLEVBQWxCO0FBQ0EsWUFBSUcsWUFBWVIsV0FBV08sT0FBM0I7QUFDQSxZQUFJRSxZQUFZUCxXQUFXSyxPQUEzQjs7QUFFQUQsY0FBTXRDLEtBQU4sQ0FBWW9CLFNBQVosa0JBQXFDb0IsU0FBckMsWUFBcURDLFNBQXJEOztBQUVBSjtBQUNEO0FBaEJ1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBa0J6QixHQWxCRDs7QUFvQkFoRCxTQUFPWCxnQkFBUCxDQUF3QixXQUF4QixFQUFxQ3FELFVBQXJDO0FBRUQsQzs7Ozs7Ozs7Ozs7Ozs7QUMzQkQsSUFBSVcsUUFBUXRFLFNBQVNJLGFBQVQsQ0FBdUIsZ0JBQXZCLENBQVo7QUFDQSxJQUFJbUUsT0FBT3ZFLFNBQVNJLGFBQVQsQ0FBdUIsc0JBQXZCLENBQVg7QUFDQSxJQUFJb0UsYUFBYXhFLFNBQVNJLGFBQVQsQ0FBdUIsZUFBdkIsQ0FBakI7QUFDQSxJQUFJcUUsUUFBUXpFLFNBQVNJLGFBQVQsQ0FBdUIsbUJBQXZCLENBQVo7O0FBRUEsSUFBR2tFLFVBQVUsSUFBYixFQUFtQjtBQUNqQixNQUFJSSxPQUFRLFlBQVk7QUFDdEIsV0FBTztBQUNMQyxTQURLLGlCQUNDO0FBQ0osWUFBSUMsV0FBV0osV0FBV3JELFdBQTFCO0FBQUEsWUFDSTBELGFBQWFKLE1BQU1uRCxTQUR2QjtBQUFBLFlBRUl3RCxVQUFVLENBQUNSLE1BQU1sRCxVQUZyQjtBQUFBLFlBR0kyRCxTQUFTLEVBQUVULE1BQU1oRCxTQUFOLEdBQWtCdUQsVUFBcEIsQ0FIYjtBQUFBLFlBSUlHLFVBQVVULEtBQUszQyxLQUpuQjs7QUFNQW9ELGdCQUFRQyxjQUFSLEdBQTRCTCxRQUE1QjtBQUNBSSxnQkFBUUUsa0JBQVIsR0FBZ0NKLE9BQWhDLFdBQTZDQyxNQUE3QztBQUNEO0FBVkksS0FBUDtBQVlELEdBYlcsRUFBWjs7QUFlQTlELFNBQU9rRSxNQUFQLEdBQWdCLFlBQVc7QUFDekJULFNBQUtDLEdBQUw7QUFDRCxHQUZEOztBQUtBMUQsU0FBT21FLFFBQVAsR0FBa0IsWUFBVztBQUMzQlYsU0FBS0MsR0FBTDtBQUNELEdBRkQ7QUFHRCxDOzs7Ozs7Ozs7Ozs7OztBQzdCRDs7QUFFQSxJQUFJVSxjQUFjLElBQUlDLE1BQUosQ0FBVztBQUMzQkMsaUJBQWUscUJBRFk7QUFFM0JDLGlCQUFlLHFCQUZZO0FBRzNCQyxrQkFBZ0Isc0JBSFc7QUFJM0JDLFNBQU8sUUFKb0I7QUFLM0JDLGVBQWEsNENBTGM7QUFNM0JDLGdCQUFjLDZDQU5hO0FBTzNCQyxZQUFVOztBQVBpQixDQUFYLENBQWxCOztBQVdBLFNBQVNQLE1BQVQsQ0FBZ0JRLE9BQWhCLEVBQXlCO0FBQ3ZCLE1BQUlDLE9BQU8sSUFBWDtBQUNBQSxPQUFLQyxPQUFMLEdBQWUsQ0FBZjtBQUNBRCxPQUFLRSxXQUFMO0FBQ0FGLE9BQUtHLFdBQUw7QUFDQUgsT0FBS0ksU0FBTCxHQUFpQixLQUFqQjtBQUNBSixPQUFLUixhQUFMLEdBQXFCdkYsU0FBU0ksYUFBVCxDQUF1QjBGLFFBQVFQLGFBQS9CLENBQXJCO0FBQ0FRLE9BQUtQLGFBQUwsR0FBcUJ4RixTQUFTSSxhQUFULENBQXVCMEYsUUFBUU4sYUFBL0IsQ0FBckI7QUFDQU8sT0FBS04sY0FBTCxHQUFzQnpGLFNBQVNJLGFBQVQsQ0FBdUIwRixRQUFRTCxjQUEvQixDQUF0QjtBQUNBTSxPQUFLSyxXQUFMLEdBQW1CQyxLQUFLQyxHQUFMLENBQ2pCaEQsTUFBTWlELElBQU4sQ0FBV1IsS0FBS1IsYUFBTCxDQUFtQmlCLGdCQUFuQixDQUFvQ1YsUUFBUUosS0FBNUMsQ0FBWCxFQUErRGUsTUFEOUMsRUFFakJuRCxNQUFNaUQsSUFBTixDQUFXUixLQUFLUCxhQUFMLENBQW1CZ0IsZ0JBQW5CLENBQW9DVixRQUFRSixLQUE1QyxDQUFYLEVBQStEZSxNQUY5QyxFQUdqQm5ELE1BQU1pRCxJQUFOLENBQVdSLEtBQUtOLGNBQUwsQ0FBb0JlLGdCQUFwQixDQUFxQ1YsUUFBUUosS0FBN0MsQ0FBWCxFQUFnRWUsTUFIL0MsQ0FBbkI7QUFLQVYsT0FBS0osV0FBTCxHQUFtQjNGLFNBQVNJLGFBQVQsQ0FBdUIwRixRQUFRSCxXQUEvQixDQUFuQjtBQUNBSSxPQUFLSCxZQUFMLEdBQW9CNUYsU0FBU0ksYUFBVCxDQUF1QjBGLFFBQVFGLFlBQS9CLENBQXBCO0FBQ0FHLE9BQUtGLFFBQUwsR0FBZ0JDLFFBQVFELFFBQXhCOztBQUVBRSxPQUFLVyxTQUFMLEdBQWlCLFVBQVNDLFNBQVQsRUFBb0JDLFdBQXBCLEVBQWlDQyxTQUFqQyxFQUE0Qzs7QUFFM0QsUUFBSUMsUUFBUXhELE1BQU1pRCxJQUFOLENBQVdJLFVBQVVJLFFBQXJCLENBQVo7QUFDQSxRQUFJQyxhQUFhLEVBQWpCO0FBQ0EsUUFBSUMsZ0JBQUo7O0FBRUFILFVBQU1JLE9BQU4sQ0FBYyxVQUFDQyxFQUFELEVBQUtsRCxDQUFMLEVBQVU7QUFDdEIsVUFBR2tELEdBQUc1RyxTQUFILENBQWE2RyxRQUFiLENBQXNCLFFBQXRCLENBQUgsRUFBb0M7QUFDbENKLG1CQUFXSyxJQUFYLEdBQWtCRixFQUFsQixFQUNBSCxXQUFXTSxLQUFYLEdBQW1CckQsQ0FEbkI7QUFFRDtBQUNGLEtBTEQ7O0FBT0EsUUFBRzhCLEtBQUtDLE9BQUwsSUFBZ0JjLE1BQU1MLE1BQXpCLEVBQWlDVixLQUFLQyxPQUFMLEdBQWUsQ0FBZjtBQUNqQyxRQUFHRCxLQUFLQyxPQUFMLEdBQWUsQ0FBbEIsRUFBcUJELEtBQUtDLE9BQUwsR0FBZWMsTUFBTUwsTUFBTixHQUFlLENBQTlCOztBQUVyQlYsU0FBS3dCLFVBQUwsQ0FBaUJQLFdBQVdNLEtBQTVCLEVBQW1DdkIsS0FBS0ssV0FBeEM7QUFDQVksaUJBQWFBLFdBQVdLLElBQXhCO0FBQ0EsUUFBR1QsZ0JBQWdCLE1BQW5CLEVBQTJCO0FBQ3pCSyxnQkFBVUgsTUFBTWYsS0FBS0UsV0FBWCxDQUFWO0FBQ0Q7O0FBRUQsUUFBR1csZ0JBQWdCLE1BQW5CLEVBQTJCO0FBQ3pCSyxnQkFBVUgsTUFBTWYsS0FBS0csV0FBWCxDQUFWO0FBQ0Q7O0FBRUQsUUFBRyxDQUFDVyxTQUFKLEVBQWU7QUFDYkcsaUJBQVd6RyxTQUFYLENBQXFCSSxNQUFyQixDQUE0QixRQUE1QjtBQUNBc0csY0FBUTFHLFNBQVIsQ0FBa0JDLEdBQWxCLENBQXNCLFFBQXRCO0FBQ0QsS0FIRCxNQUdPO0FBQ0xnSCxjQUFRO0FBQ04zQixrQkFBVUUsS0FBS0YsUUFEVDtBQUVONEIsWUFGTSxnQkFFREMsUUFGQyxFQUVTO0FBQ2JWLHFCQUFXcEYsS0FBWCxDQUFpQkcsR0FBakIsR0FBd0I4RSxjQUFjLE1BQWYsR0FBNEJhLFFBQTVCLFNBQTZDLENBQUNBLFFBQTlDLE1BQXZCO0FBQ0Q7QUFKSyxPQUFSOztBQU9BRixjQUFRO0FBQ04zQixrQkFBVUUsS0FBS0YsUUFEVDtBQUVONEIsWUFGTSxnQkFFREMsUUFGQyxFQUVTO0FBQ2JULGtCQUFRckYsS0FBUixDQUFjRyxHQUFkLEdBQXFCOEUsY0FBYyxNQUFmLEdBQTZCLENBQUMsR0FBRixHQUFTYSxRQUFyQyxTQUFzRCxNQUFNQSxRQUE1RCxNQUFwQjtBQUNELFNBSks7QUFLTkMsYUFMTSxtQkFLRTtBQUNOWCxxQkFBV3pHLFNBQVgsQ0FBcUJJLE1BQXJCLENBQTRCLFFBQTVCO0FBQ0FzRyxrQkFBUTFHLFNBQVIsQ0FBa0JDLEdBQWxCLENBQXNCLFFBQXRCO0FBQ0F1RixlQUFLSSxTQUFMLEdBQWlCLEtBQWpCO0FBQ0Q7QUFUSyxPQUFSO0FBV0Q7QUFDRixHQWpERDs7QUFtREFKLE9BQUs5QyxJQUFMLEdBQVksWUFBVztBQUNyQjtBQUNBOEMsU0FBS3dCLFVBQUwsQ0FBZ0J4QixLQUFLQyxPQUFyQixFQUE4QkQsS0FBS0ssV0FBbkM7QUFDQTs7QUFFQTtBQUNBTCxTQUFLNkIsU0FBTCxDQUFlN0IsS0FBS1IsYUFBcEIsRUFBbUNRLEtBQUtDLE9BQXhDO0FBQ0FELFNBQUs2QixTQUFMLENBQWU3QixLQUFLUCxhQUFwQixFQUFtQ08sS0FBS0UsV0FBeEM7QUFDQUYsU0FBSzZCLFNBQUwsQ0FBZTdCLEtBQUtOLGNBQXBCLEVBQW9DTSxLQUFLRyxXQUF6QztBQUNBOztBQUVBO0FBQ0FILFNBQUtKLFdBQUwsQ0FBaUJyRixnQkFBakIsQ0FBa0MsT0FBbEMsRUFBMkMsWUFBSztBQUM5QyxVQUFHLENBQUN5RixLQUFLSSxTQUFULEVBQW9CO0FBQ2xCSixhQUFLSSxTQUFMLEdBQWlCLElBQWpCO0FBQ0FKLGFBQUtXLFNBQUwsQ0FBZVgsS0FBS1IsYUFBcEIsRUFBbUMsTUFBbkM7QUFDQVEsYUFBS1csU0FBTCxDQUFlWCxLQUFLUCxhQUFwQixFQUFvQyxNQUFwQyxFQUE0QyxNQUE1QztBQUNBTyxhQUFLVyxTQUFMLENBQWVYLEtBQUtOLGNBQXBCLEVBQXFDLE1BQXJDLEVBQTZDLElBQTdDO0FBQ0E7QUFDRDtBQUNGLEtBUkQ7QUFTQU0sU0FBS0gsWUFBTCxDQUFrQnRGLGdCQUFsQixDQUFtQyxPQUFuQyxFQUE0QyxZQUFLO0FBQy9DLFVBQUcsQ0FBQ3lGLEtBQUtJLFNBQVQsRUFBb0I7QUFDbEJKLGFBQUtJLFNBQUwsR0FBaUIsSUFBakI7QUFDQUosYUFBS1csU0FBTCxDQUFlWCxLQUFLUixhQUFwQixFQUFtQyxNQUFuQztBQUNBUSxhQUFLVyxTQUFMLENBQWVYLEtBQUtQLGFBQXBCLEVBQW1DLE1BQW5DLEVBQTJDLE1BQTNDO0FBQ0FPLGFBQUtXLFNBQUwsQ0FBZVgsS0FBS04sY0FBcEIsRUFBb0MsTUFBcEMsRUFBNEMsSUFBNUM7QUFDQTtBQUNEO0FBQ0YsS0FSRDtBQVNBO0FBQ0QsR0EvQkQ7O0FBaUNBTSxPQUFLNkIsU0FBTCxHQUFpQixVQUFDakIsU0FBRCxFQUFZMUMsQ0FBWixFQUFpQjtBQUNoQyxRQUFJNEQsUUFBUWxCLFVBQVVJLFFBQXRCO0FBQ0FjLFVBQU01RCxDQUFOLEVBQVMxRCxTQUFULENBQW1CQyxHQUFuQixDQUF1QixRQUF2QjtBQUNELEdBSEQ7O0FBS0F1RixPQUFLd0IsVUFBTCxHQUFrQixVQUFDdkIsT0FBRCxFQUFVOEIsUUFBVixFQUFzQjtBQUN0QyxRQUFHOUIsWUFBWThCLFdBQVcsQ0FBMUIsRUFBNkI7QUFDM0IvQixXQUFLRyxXQUFMLEdBQW1CLENBQW5CO0FBQ0QsS0FGRCxNQUVPO0FBQ0xILFdBQUtHLFdBQUwsR0FBbUJGLFVBQVUsQ0FBN0I7QUFDRDtBQUNELFFBQUdBLFlBQVksQ0FBZixFQUFrQjtBQUNoQkQsV0FBS0UsV0FBTCxHQUFtQjZCLFdBQVcsQ0FBOUI7QUFDRCxLQUZELE1BRU87QUFDTC9CLFdBQUtFLFdBQUwsR0FBbUJELFVBQVUsQ0FBN0I7QUFDRDtBQUNGLEdBWEQ7O0FBYUFELE9BQUs5QyxJQUFMO0FBQ0Q7O0FBRUQ7QUFDQSxTQUFTdUUsT0FBVCxPQUEwQztBQUFBLE1BQXhCQyxJQUF3QixRQUF4QkEsSUFBd0I7QUFBQSxNQUFsQjVCLFFBQWtCLFFBQWxCQSxRQUFrQjtBQUFBLE1BQVI4QixLQUFRLFFBQVJBLEtBQVE7OztBQUV4QyxNQUFJSSxRQUFRQyxZQUFZQyxHQUFaLEVBQVo7QUFDQUMsd0JBQXNCLFNBQVNWLE9BQVQsQ0FBaUJXLElBQWpCLEVBQXVCO0FBQzNDO0FBQ0EsUUFBSUMsZUFBaUJELE9BQU9KLEtBQTVCOztBQUVBLFFBQUlLLGVBQWV2QyxRQUFuQixFQUE2QnVDLGVBQWV2QyxRQUFmO0FBQzdCO0FBQ0EsUUFBSTZCLFdBQVlVLGVBQWV2QyxRQUFoQixHQUE0QixHQUEzQzs7QUFFQTRCLFNBQUtDLFFBQUwsRUFSMkMsQ0FRM0I7O0FBRWhCLFFBQUlVLGVBQWV2QyxRQUFuQixFQUE2QjtBQUMzQnFDLDRCQUFzQlYsT0FBdEI7QUFDRCxLQUZELE1BRU8sSUFBR1ksZ0JBQWdCdkMsUUFBaEIsSUFBNEI4QixLQUEvQixFQUFzQztBQUMzQ0E7QUFDRDtBQUNGLEdBZkQ7QUFnQkQsQzs7Ozs7Ozs7Ozs7O0FDNUpEOztBQUVBO0FBQ0E7O0FBQ0E7Ozs7QUFRQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQWJBOztBQUVBOztBQUVBO0FBQ0EsMEIiLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvYXNzZXRzL2pzL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9qcy9pbmRleC5qc1wiKTtcbiIsIiFmdW5jdGlvbihyb290LCBmYWN0b3J5KSB7XG4gICAgXCJmdW5jdGlvblwiID09IHR5cGVvZiBkZWZpbmUgJiYgZGVmaW5lLmFtZCA/IC8vIEFNRC4gUmVnaXN0ZXIgYXMgYW4gYW5vbnltb3VzIG1vZHVsZSB1bmxlc3MgYW1kTW9kdWxlSWQgaXMgc2V0XG4gICAgZGVmaW5lKFtdLCBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHJvb3Quc3ZnNGV2ZXJ5Ym9keSA9IGZhY3RvcnkoKTtcbiAgICB9KSA6IFwib2JqZWN0XCIgPT0gdHlwZW9mIG1vZHVsZSAmJiBtb2R1bGUuZXhwb3J0cyA/IC8vIE5vZGUuIERvZXMgbm90IHdvcmsgd2l0aCBzdHJpY3QgQ29tbW9uSlMsIGJ1dFxuICAgIC8vIG9ubHkgQ29tbW9uSlMtbGlrZSBlbnZpcm9ubWVudHMgdGhhdCBzdXBwb3J0IG1vZHVsZS5leHBvcnRzLFxuICAgIC8vIGxpa2UgTm9kZS5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKSA6IHJvb3Quc3ZnNGV2ZXJ5Ym9keSA9IGZhY3RvcnkoKTtcbn0odGhpcywgZnVuY3Rpb24oKSB7XG4gICAgLyohIHN2ZzRldmVyeWJvZHkgdjIuMS45IHwgZ2l0aHViLmNvbS9qb25hdGhhbnRuZWFsL3N2ZzRldmVyeWJvZHkgKi9cbiAgICBmdW5jdGlvbiBlbWJlZChwYXJlbnQsIHN2ZywgdGFyZ2V0KSB7XG4gICAgICAgIC8vIGlmIHRoZSB0YXJnZXQgZXhpc3RzXG4gICAgICAgIGlmICh0YXJnZXQpIHtcbiAgICAgICAgICAgIC8vIGNyZWF0ZSBhIGRvY3VtZW50IGZyYWdtZW50IHRvIGhvbGQgdGhlIGNvbnRlbnRzIG9mIHRoZSB0YXJnZXRcbiAgICAgICAgICAgIHZhciBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKSwgdmlld0JveCA9ICFzdmcuaGFzQXR0cmlidXRlKFwidmlld0JveFwiKSAmJiB0YXJnZXQuZ2V0QXR0cmlidXRlKFwidmlld0JveFwiKTtcbiAgICAgICAgICAgIC8vIGNvbmRpdGlvbmFsbHkgc2V0IHRoZSB2aWV3Qm94IG9uIHRoZSBzdmdcbiAgICAgICAgICAgIHZpZXdCb3ggJiYgc3ZnLnNldEF0dHJpYnV0ZShcInZpZXdCb3hcIiwgdmlld0JveCk7XG4gICAgICAgICAgICAvLyBjb3B5IHRoZSBjb250ZW50cyBvZiB0aGUgY2xvbmUgaW50byB0aGUgZnJhZ21lbnRcbiAgICAgICAgICAgIGZvciAoLy8gY2xvbmUgdGhlIHRhcmdldFxuICAgICAgICAgICAgdmFyIGNsb25lID0gdGFyZ2V0LmNsb25lTm9kZSghMCk7IGNsb25lLmNoaWxkTm9kZXMubGVuZ3RoOyApIHtcbiAgICAgICAgICAgICAgICBmcmFnbWVudC5hcHBlbmRDaGlsZChjbG9uZS5maXJzdENoaWxkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGFwcGVuZCB0aGUgZnJhZ21lbnQgaW50byB0aGUgc3ZnXG4gICAgICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoZnJhZ21lbnQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIGxvYWRyZWFkeXN0YXRlY2hhbmdlKHhocikge1xuICAgICAgICAvLyBsaXN0ZW4gdG8gY2hhbmdlcyBpbiB0aGUgcmVxdWVzdFxuICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAvLyBpZiB0aGUgcmVxdWVzdCBpcyByZWFkeVxuICAgICAgICAgICAgaWYgKDQgPT09IHhoci5yZWFkeVN0YXRlKSB7XG4gICAgICAgICAgICAgICAgLy8gZ2V0IHRoZSBjYWNoZWQgaHRtbCBkb2N1bWVudFxuICAgICAgICAgICAgICAgIHZhciBjYWNoZWREb2N1bWVudCA9IHhoci5fY2FjaGVkRG9jdW1lbnQ7XG4gICAgICAgICAgICAgICAgLy8gZW5zdXJlIHRoZSBjYWNoZWQgaHRtbCBkb2N1bWVudCBiYXNlZCBvbiB0aGUgeGhyIHJlc3BvbnNlXG4gICAgICAgICAgICAgICAgY2FjaGVkRG9jdW1lbnQgfHwgKGNhY2hlZERvY3VtZW50ID0geGhyLl9jYWNoZWREb2N1bWVudCA9IGRvY3VtZW50LmltcGxlbWVudGF0aW9uLmNyZWF0ZUhUTUxEb2N1bWVudChcIlwiKSwgXG4gICAgICAgICAgICAgICAgY2FjaGVkRG9jdW1lbnQuYm9keS5pbm5lckhUTUwgPSB4aHIucmVzcG9uc2VUZXh0LCB4aHIuX2NhY2hlZFRhcmdldCA9IHt9KSwgLy8gY2xlYXIgdGhlIHhociBlbWJlZHMgbGlzdCBhbmQgZW1iZWQgZWFjaCBpdGVtXG4gICAgICAgICAgICAgICAgeGhyLl9lbWJlZHMuc3BsaWNlKDApLm1hcChmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGdldCB0aGUgY2FjaGVkIHRhcmdldFxuICAgICAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0ID0geGhyLl9jYWNoZWRUYXJnZXRbaXRlbS5pZF07XG4gICAgICAgICAgICAgICAgICAgIC8vIGVuc3VyZSB0aGUgY2FjaGVkIHRhcmdldFxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQgfHwgKHRhcmdldCA9IHhoci5fY2FjaGVkVGFyZ2V0W2l0ZW0uaWRdID0gY2FjaGVkRG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaXRlbS5pZCkpLCBcbiAgICAgICAgICAgICAgICAgICAgLy8gZW1iZWQgdGhlIHRhcmdldCBpbnRvIHRoZSBzdmdcbiAgICAgICAgICAgICAgICAgICAgZW1iZWQoaXRlbS5wYXJlbnQsIGl0ZW0uc3ZnLCB0YXJnZXQpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCAvLyB0ZXN0IHRoZSByZWFkeSBzdGF0ZSBjaGFuZ2UgaW1tZWRpYXRlbHlcbiAgICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSgpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBzdmc0ZXZlcnlib2R5KHJhd29wdHMpIHtcbiAgICAgICAgZnVuY3Rpb24gb25pbnRlcnZhbCgpIHtcbiAgICAgICAgICAgIC8vIHdoaWxlIHRoZSBpbmRleCBleGlzdHMgaW4gdGhlIGxpdmUgPHVzZT4gY29sbGVjdGlvblxuICAgICAgICAgICAgZm9yICgvLyBnZXQgdGhlIGNhY2hlZCA8dXNlPiBpbmRleFxuICAgICAgICAgICAgdmFyIGluZGV4ID0gMDsgaW5kZXggPCB1c2VzLmxlbmd0aDsgKSB7XG4gICAgICAgICAgICAgICAgLy8gZ2V0IHRoZSBjdXJyZW50IDx1c2U+XG4gICAgICAgICAgICAgICAgdmFyIHVzZSA9IHVzZXNbaW5kZXhdLCBwYXJlbnQgPSB1c2UucGFyZW50Tm9kZSwgc3ZnID0gZ2V0U1ZHQW5jZXN0b3IocGFyZW50KSwgc3JjID0gdXNlLmdldEF0dHJpYnV0ZShcInhsaW5rOmhyZWZcIikgfHwgdXNlLmdldEF0dHJpYnV0ZShcImhyZWZcIik7XG4gICAgICAgICAgICAgICAgaWYgKCFzcmMgJiYgb3B0cy5hdHRyaWJ1dGVOYW1lICYmIChzcmMgPSB1c2UuZ2V0QXR0cmlidXRlKG9wdHMuYXR0cmlidXRlTmFtZSkpLCBcbiAgICAgICAgICAgICAgICBzdmcgJiYgc3JjKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwb2x5ZmlsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFvcHRzLnZhbGlkYXRlIHx8IG9wdHMudmFsaWRhdGUoc3JjLCBzdmcsIHVzZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyByZW1vdmUgdGhlIDx1c2U+IGVsZW1lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnQucmVtb3ZlQ2hpbGQodXNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBwYXJzZSB0aGUgc3JjIGFuZCBnZXQgdGhlIHVybCBhbmQgaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgc3JjU3BsaXQgPSBzcmMuc3BsaXQoXCIjXCIpLCB1cmwgPSBzcmNTcGxpdC5zaGlmdCgpLCBpZCA9IHNyY1NwbGl0LmpvaW4oXCIjXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmIHRoZSBsaW5rIGlzIGV4dGVybmFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHVybC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZ2V0IHRoZSBjYWNoZWQgeGhyIHJlcXVlc3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHhociA9IHJlcXVlc3RzW3VybF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGVuc3VyZSB0aGUgeGhyIHJlcXVlc3QgZXhpc3RzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhociB8fCAoeGhyID0gcmVxdWVzdHNbdXJsXSA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpLCB4aHIub3BlbihcIkdFVFwiLCB1cmwpLCB4aHIuc2VuZCgpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeGhyLl9lbWJlZHMgPSBbXSksIC8vIGFkZCB0aGUgc3ZnIGFuZCBpZCBhcyBhbiBpdGVtIHRvIHRoZSB4aHIgZW1iZWRzIGxpc3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeGhyLl9lbWJlZHMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnQ6IHBhcmVudCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN2Zzogc3ZnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLCAvLyBwcmVwYXJlIHRoZSB4aHIgcmVhZHkgc3RhdGUgY2hhbmdlIGV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRyZWFkeXN0YXRlY2hhbmdlKHhocik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZW1iZWQgdGhlIGxvY2FsIGlkIGludG8gdGhlIHN2Z1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbWJlZChwYXJlbnQsIHN2ZywgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGluY3JlYXNlIHRoZSBpbmRleCB3aGVuIHRoZSBwcmV2aW91cyB2YWx1ZSB3YXMgbm90IFwidmFsaWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICsraW5kZXgsICsrbnVtYmVyT2ZTdmdVc2VFbGVtZW50c1RvQnlwYXNzO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gaW5jcmVhc2UgdGhlIGluZGV4IHdoZW4gdGhlIHByZXZpb3VzIHZhbHVlIHdhcyBub3QgXCJ2YWxpZFwiXG4gICAgICAgICAgICAgICAgICAgICsraW5kZXg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gY29udGludWUgdGhlIGludGVydmFsXG4gICAgICAgICAgICAoIXVzZXMubGVuZ3RoIHx8IHVzZXMubGVuZ3RoIC0gbnVtYmVyT2ZTdmdVc2VFbGVtZW50c1RvQnlwYXNzID4gMCkgJiYgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKG9uaW50ZXJ2YWwsIDY3KTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcG9seWZpbGwsIG9wdHMgPSBPYmplY3QocmF3b3B0cyksIG5ld2VySUVVQSA9IC9cXGJUcmlkZW50XFwvWzU2N11cXGJ8XFxiTVNJRSAoPzo5fDEwKVxcLjBcXGIvLCB3ZWJraXRVQSA9IC9cXGJBcHBsZVdlYktpdFxcLyhcXGQrKVxcYi8sIG9sZGVyRWRnZVVBID0gL1xcYkVkZ2VcXC8xMlxcLihcXGQrKVxcYi8sIGVkZ2VVQSA9IC9cXGJFZGdlXFwvLihcXGQrKVxcYi8sIGluSWZyYW1lID0gd2luZG93LnRvcCAhPT0gd2luZG93LnNlbGY7XG4gICAgICAgIHBvbHlmaWxsID0gXCJwb2x5ZmlsbFwiIGluIG9wdHMgPyBvcHRzLnBvbHlmaWxsIDogbmV3ZXJJRVVBLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkgfHwgKG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2gob2xkZXJFZGdlVUEpIHx8IFtdKVsxXSA8IDEwNTQ3IHx8IChuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKHdlYmtpdFVBKSB8fCBbXSlbMV0gPCA1MzcgfHwgZWRnZVVBLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkgJiYgaW5JZnJhbWU7XG4gICAgICAgIC8vIGNyZWF0ZSB4aHIgcmVxdWVzdHMgb2JqZWN0XG4gICAgICAgIHZhciByZXF1ZXN0cyA9IHt9LCByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IHNldFRpbWVvdXQsIHVzZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInVzZVwiKSwgbnVtYmVyT2ZTdmdVc2VFbGVtZW50c1RvQnlwYXNzID0gMDtcbiAgICAgICAgLy8gY29uZGl0aW9uYWxseSBzdGFydCB0aGUgaW50ZXJ2YWwgaWYgdGhlIHBvbHlmaWxsIGlzIGFjdGl2ZVxuICAgICAgICBwb2x5ZmlsbCAmJiBvbmludGVydmFsKCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGdldFNWR0FuY2VzdG9yKG5vZGUpIHtcbiAgICAgICAgZm9yICh2YXIgc3ZnID0gbm9kZTsgXCJzdmdcIiAhPT0gc3ZnLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgJiYgKHN2ZyA9IHN2Zy5wYXJlbnROb2RlKTsgKSB7fVxuICAgICAgICByZXR1cm4gc3ZnO1xuICAgIH1cbiAgICByZXR1cm4gc3ZnNGV2ZXJ5Ym9keTtcbn0pOyIsIid1c2Ugc3RyaWN0J1xyXG5cclxuLy8gaW1wb3J0IGZvbnRhd2Vzb21lIGZyb20gJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1mcmVlLXdlYmZvbnRzJ1xyXG4vLyBmb250YXdlc29tZS5kb20uaTJzdmcoKVxyXG5cclxuY29uc3Qgd2VsY29tQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2F1dG9yaXNhdGlvbi1idXR0b24nKTtcclxuY29uc3QgdG9HZW5lcmFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvLWdlbmVyYWwnKVxyXG5jb25zdCBiYWNrQnV0dG9uID1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2VsY29tX19idXR0b24nKTtcclxuY29uc3QgZmxpcHAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmxpcHBlcicpO1xyXG5cclxuaWYgKGZsaXBwICE9PSBudWxsKSB7XHJcblxyXG4gIHdlbGNvbUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG5cclxuICAgIGZsaXBwLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbiAgICBiYWNrQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcblxyXG4gIH0pXHJcblxyXG4gIHRvR2VuZXJhbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcblxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGZsaXBwLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgICBiYWNrQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcblxyXG4gIH0pXHJcblxyXG59IiwiY29uc3QgTUVOVV9CVVRUT04gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudS1idXR0b24nKTtcclxuY29uc3QgTUVOVV9CVVRUT05fV1JBUFAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudS1idXR0b25fX3dyYXBwJyk7XHJcbmNvbnN0IE1FTlUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudS13cmFwcCcpO1xyXG5jb25zdCBDT05UQUlORVIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVyby1jb250YWluZXInKTtcclxuXHJcbmxldCB0aHVtYiA9IGZhbHNlXHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24oKSB7XHJcbiAgXHJcbiAgaWYoTUVOVSAhPT0gbnVsbCkge1xyXG5cclxuICAgIC8vINC/0L7Qt9C40YbQuNGPINC60L3QvtC/0LrQuCDQvNC10L3RjiDQv9C+IFgsWSAg0L/RgNC4INCw0LHRgdC+0LvRjtGC0L3QvtC8INC/0L7Qt9C40YbQuNC+0L3QuNGA0L7QstCw0L3QuNC4XHJcbiAgICAvLyDQv9C+0LfQuNGG0LjRjyDQutC90L7Qv9C60Lgg0LzQtdC90Y4g0L/QviBYID0gKNGI0LjRgNC40L3QsCDQutC+0L3RgtC10LnQvdC10YDQsCAtINGI0LjRgNC40L3QsCDQvtGCINC60L3QvtC/0LrQuCDRgdC70LXQstCwKSAtINGI0LjRgNC40L3QsCDRgdCw0LzQvtC5INC60L3QvtC/0LrQuFxyXG4gICAgbGV0IGFic29sdXRlQnV0dG9uUG9zWCA9IChDT05UQUlORVIub2Zmc2V0V2lkdGggLSBNRU5VX0JVVFRPTl9XUkFQUC5vZmZzZXRMZWZ0KSAtIE1FTlVfQlVUVE9OX1dSQVBQLm9mZnNldFdpZHRoO1xyXG4gICAgbGV0IGFic29sdXRlQnV0dG9uUG9zWSA9IE1FTlVfQlVUVE9OX1dSQVBQLm9mZnNldFRvcDtcclxuXHJcbiAgICBNRU5VX0JVVFRPTi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcblxyXG4gICAgICB0aHVtYiA9ICF0aHVtYlxyXG4gICAgICBidXR0b25Qb3NpdGlvbihhYnNvbHV0ZUJ1dHRvblBvc1gsIGFic29sdXRlQnV0dG9uUG9zWSk7XHJcblxyXG4gICAgICBNRU5VX0JVVFRPTi5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcclxuICAgICAgTUVOVS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcclxuXHJcbiAgICB9KVxyXG5cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICBidXR0b25Qb3NpdGlvbihhYnNvbHV0ZUJ1dHRvblBvc1gsIGFic29sdXRlQnV0dG9uUG9zWSk7XHJcbiAgICB9KVxyXG5cclxuICB9XHJcblxyXG59KVxyXG5cclxuXHJcbmZ1bmN0aW9uIGJ1dHRvblBvc2l0aW9uKGFic29sdXRlQnV0dG9uUG9zWCwgYWJzb2x1dGVCdXR0b25Qb3NZKSB7XHJcbiAgLy8g0L/QvtC30LjRhtC40Y8g0LrQvdC+0L/QutC4INC80LXQvdGOINC/0L4gWCxZICDQv9GA0LggZml4ZWQg0L/QvtC30LjRhtC40L7QvdC40YDQvtCy0LDQvdC40LhcclxuICBsZXQgZml4ZWRCdXR0b25Qb3NZID0gTUVOVV9CVVRUT05fV1JBUFAub2Zmc2V0VG9wXHJcbiAgbGV0IGZpeGVkQnV0dG9uUG9zWCA9ICh3aW5kb3cuaW5uZXJXaWR0aCAtIENPTlRBSU5FUi5vZmZzZXRXaWR0aCkgLyAyXHJcbiAgTUVOVV9CVVRUT05fV1JBUFAuc3R5bGUucG9zaXRpb24gPSB0aHVtYiA/IFwiZml4ZWRcIiA6IFwiYWJzb2x1dGVcIjtcclxuICBNRU5VX0JVVFRPTl9XUkFQUC5zdHlsZS5yaWdodCA9IHRodW1iID8gYCR7Zml4ZWRCdXR0b25Qb3NYfXB4YCA6IGAke2Fic29sdXRlQnV0dG9uUG9zWH1weGA7XHJcbiAgTUVOVV9CVVRUT05fV1JBUFAuc3R5bGUudG9wID0gdGh1bWIgPyBgJHtmaXhlZEJ1dHRvblBvc1l9cHhgIDogYCR7YWJzb2x1dGVCdXR0b25Qb3NZfXB4YDtcclxufSIsImNvbnN0IG1vZGFsQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsLWJ1dHRvbicpO1xyXG5jb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1vdmVybGF5Jyk7XHJcbmNvbnN0IGxvZ2luQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvZ2luLWJ1dHRvbicpXHJcbmNvbnN0IFdFTENPTV9DT05UQUlORVIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2VsY29tLWNvbnRhaW5lcicpXHJcblxyXG5pZihtb2RhbCAhPT0gbnVsbCkge1xyXG5cclxuICBsb2dpbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcblxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIFdFTENPTV9DT05UQUlORVIuc3R5bGUub3BhY2l0eSA9ICcwJztcclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuICAgICAgbW9kYWwuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICB9LCA1MDApXHJcblxyXG4gIH0pXHJcblxyXG4gIG1vZGFsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG5cclxuICAgIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG5cclxuXHJcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcbiAgICAgIFdFTENPTV9DT05UQUlORVIuc3R5bGUub3BhY2l0eSA9ICcxJztcclxuICAgIH0sIDUwMClcclxuXHJcbiAgfSlcclxuXHJcbn1cclxuIiwiY29uc3QgcGFyYWxheCA9IChmdW5jdGlvbigpIHtcclxuXHJcbiAgbGV0IHVzZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlcm9fX2F2YXRhclwiKVxyXG4gIGxldCBzZWN0aW9uVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVyb19fYmctd29yZFwiKVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgbW92ZShibG9jaywgd2luZG93U2Nyb2xsLCBzdHJhZmVBbW91bnQsIHhQb3MpIHtcclxuICAgICAgbGV0IHN0cmFmZSA9IHdpbmRvd1Njcm9sbCAvIC1zdHJhZmVBbW91bnQ7XHJcbiAgICAgIGxldCBzdHlsZSA9IGJsb2NrLnN0eWxlO1xyXG4gICAgICAvLyDQv9C10YDQtdC00LDRjiB0cmFuc2xhdGUg0L/QviB4LCDRgi7Qui4g0LfQvdCw0YfQtdC90LjRjyDRgyDQstGB0LXRhSDRjdC70LXQvNC10L3RgtC+0LIg0YDQsNC30L3Ri9C1XHJcbiAgICAgIGxldCB0cmFuc2Zvcm1TdHJpbmcgPSBgdHJhbnNsYXRlM2QoJHt4UG9zfSUsICR7LTUwICsgc3RyYWZlfSUsIDApYFxyXG4gICAgICBzdHlsZS50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1TdHJpbmc7XHJcbiAgICB9LFxyXG4gICAgaW5pdCh3U2Nyb2xsKSB7XHJcbiAgICAgIHRoaXMubW92ZSh1c2VyLCB3U2Nyb2xsLCAzLCAtNTApXHJcbiAgICAgIHRoaXMubW92ZShzZWN0aW9uVGV4dCwgd1Njcm9sbCwgMjAsIDApXHJcbiAgICB9XHJcbiAgfVxyXG5cclxufSgpKVxyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgZnVuY3Rpb24oKSB7XHJcblxyXG4gIGxldCB3U2Nyb2xsID0gd2luZG93LnBhZ2VZT2Zmc2V0XHJcblxyXG4gIHBhcmFsYXguaW5pdCh3U2Nyb2xsKTtcclxuXHJcblxyXG59KSIsImNvbnN0IHBhcmFsYXhDb250ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dlbGNvbWVfX3BhcmFsYXgnKTtcclxuY29uc3QgbGF5ZXJzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncGFyYWxheF9fbGF5ZXInKSk7XHJcblxyXG5pZihwYXJhbGF4Q29udCAhPT0gbnVsbCkge1xyXG5cclxuICBjb25zdCBtb3ZlTGF5ZXJzID0gKGUpID0+IHtcclxuICAgIFxyXG4gICAgY29uc3QgaW5pdGlhbFggPSAod2luZG93LmlubmVyV2lkdGgvMikgLSBlLnBhZ2VYO1xyXG4gICAgY29uc3QgaW5pdGlhbFkgPSAod2luZG93LmlubmVySGVpZ2h0LzIpIC0gZS5wYWdlWTtcclxuXHJcbiAgICBsZXQgaSA9IDA7XHJcblxyXG4gICAgZm9yIChsZXQgbGF5ZXIgb2YgbGF5ZXJzKSB7XHJcblxyXG4gICAgICBsZXQgZGl2aWRlciA9IGkgLyA3MDtcclxuICAgICAgbGV0IHBvc2l0aW9uWCA9IGluaXRpYWxYICogZGl2aWRlcjtcclxuICAgICAgbGV0IHBvc2l0aW9uWSA9IGluaXRpYWxZICogZGl2aWRlcjtcclxuXHJcbiAgICAgIGxheWVyLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUoJHtwb3NpdGlvblh9cHgsICR7cG9zaXRpb25ZfXB4KWBcclxuICAgIFxyXG4gICAgICBpKys7XHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG1vdmVMYXllcnMpO1xyXG5cclxufVxyXG5cclxuXHJcblxyXG4iLCJsZXQgd3JhcHAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFjdHMtZm9ybScpXHJcbmxldCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhY3RzLWZvcm1fX2JsdXInKVxyXG5sZXQgaW1nQmdXcmFwcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mZWVkYmFja19fYmcnKVxyXG5sZXQgaW1nQmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmVlZGJhY2tfX2JnLWltZycpXHJcblxyXG5pZih3cmFwcCAhPT0gbnVsbCkge1xyXG4gIGxldCBibHVyID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHNldCgpIHtcclxuICAgICAgICBsZXQgaW1nV2lkdGggPSBpbWdCZ1dyYXBwLm9mZnNldFdpZHRoLFxyXG4gICAgICAgICAgICBpbWdTaXplVG9wID0gaW1nQmcub2Zmc2V0VG9wLFxyXG4gICAgICAgICAgICBwb3NMZWZ0ID0gLXdyYXBwLm9mZnNldExlZnQsXHJcbiAgICAgICAgICAgIHBvc1RvcCA9IC0od3JhcHAub2Zmc2V0VG9wIC0gaW1nU2l6ZVRvcCksXHJcbiAgICAgICAgICAgIGJsdXJDU1MgPSBmb3JtLnN0eWxlO1xyXG5cclxuICAgICAgICBibHVyQ1NTLmJhY2tncm91bmRTaXplID0gYCR7aW1nV2lkdGh9cHggYXV0b2BcclxuICAgICAgICBibHVyQ1NTLmJhY2tncm91bmRQb3NpdGlvbiA9IGAke3Bvc0xlZnR9cHggJHtwb3NUb3B9cHhgXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KCkpXHJcblxyXG4gIHdpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbigpIHtcclxuICAgIGJsdXIuc2V0KCk7XHJcbiAgfVxyXG5cclxuXHJcbiAgd2luZG93Lm9ucmVzaXplID0gZnVuY3Rpb24oKSB7XHJcbiAgICBibHVyLnNldCgpO1xyXG4gIH0gIFxyXG59XHJcblxyXG4iLCIvLyBidXR0b25zIHNsaWRlclxyXG5cclxubGV0IHNsaWRlclN0YXJ0ID0gbmV3IFNsaWRlcih7XHJcbiAgY29udGFpbmVyVmlldzogJy5zbGlkZXJfX3ZpZXdzLWxpc3QnLFxyXG4gIGNvbnRhaW5lckxlZnQ6ICcuYnV0dG9ucy1sZWZ0X19saXN0JyxcclxuICBjb250YWluZXJSaWdodDogJy5idXR0b25zLXJpZ2h0X19saXN0JyxcclxuICBzbGlkZTogJy5zbGlkZScsXHJcbiAgYnV0dG9uc0xlZnQ6ICcuc2xpZGVyX19idXR0b25zLWxlZnQgLnNsaWRlcl9fYnV0dG9ucy1pbWcnLFxyXG4gIGJ1dHRvbnNSaWdodDogJy5zbGlkZXJfX2J1dHRvbnMtcmlnaHQgLnNsaWRlcl9fYnV0dG9ucy1pbWcnLFxyXG4gIGR1cmF0aW9uOiAnNzAwJyxcclxuXHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gU2xpZGVyKG9wdGlvbnMpIHtcclxuICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgdGhhdC5jb3VudGVyID0gMDtcclxuICB0aGF0LmNvdW50ZXJQcmV2O1xyXG4gIHRoYXQuY291bnRlck5leHQ7XHJcbiAgdGhhdC5pblByb2Nlc3MgPSBmYWxzZTtcclxuICB0aGF0LmNvbnRhaW5lclZpZXcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG9wdGlvbnMuY29udGFpbmVyVmlldyk7XHJcbiAgdGhhdC5jb250YWluZXJMZWZ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihvcHRpb25zLmNvbnRhaW5lckxlZnQpO1xyXG4gIHRoYXQuY29udGFpbmVyUmlnaHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG9wdGlvbnMuY29udGFpbmVyUmlnaHQpO1xyXG4gIHRoYXQubGVuZ2h0Q2hpbGQgPSBNYXRoLm1heChcclxuICAgIEFycmF5LmZyb20odGhhdC5jb250YWluZXJWaWV3LnF1ZXJ5U2VsZWN0b3JBbGwob3B0aW9ucy5zbGlkZSkpLmxlbmd0aCxcclxuICAgIEFycmF5LmZyb20odGhhdC5jb250YWluZXJMZWZ0LnF1ZXJ5U2VsZWN0b3JBbGwob3B0aW9ucy5zbGlkZSkpLmxlbmd0aCxcclxuICAgIEFycmF5LmZyb20odGhhdC5jb250YWluZXJSaWdodC5xdWVyeVNlbGVjdG9yQWxsKG9wdGlvbnMuc2xpZGUpKS5sZW5ndGhcclxuICApO1xyXG4gIHRoYXQuYnV0dG9uc0xlZnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG9wdGlvbnMuYnV0dG9uc0xlZnQpO1xyXG4gIHRoYXQuYnV0dG9uc1JpZ2h0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihvcHRpb25zLmJ1dHRvbnNSaWdodCk7XHJcbiAgdGhhdC5kdXJhdGlvbiA9IG9wdGlvbnMuZHVyYXRpb247XHJcbiAgXHJcbiAgdGhhdC5tb3ZlU2xpZGUgPSBmdW5jdGlvbihjb250YWluZXIsIG9yaWVudGF0aW9uLCBkaXJlY3Rpb24pIHtcclxuXHJcbiAgICBsZXQgaXRlbXMgPSBBcnJheS5mcm9tKGNvbnRhaW5lci5jaGlsZHJlbik7XHJcbiAgICBsZXQgYWN0aXZlSXRlbSA9IHt9O1xyXG4gICAgbGV0IHJlcUl0ZW07XHJcbiAgICBcclxuICAgIGl0ZW1zLmZvckVhY2goKGVsLCBpKT0+IHtcclxuICAgICAgaWYoZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xyXG4gICAgICAgIGFjdGl2ZUl0ZW0uZWxlbSA9IGVsLFxyXG4gICAgICAgIGFjdGl2ZUl0ZW0uaW5kZXggPSBpXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGlmKHRoYXQuY291bnRlciA+PSBpdGVtcy5sZW5ndGgpIHRoYXQuY291bnRlciA9IDA7XHJcbiAgICBpZih0aGF0LmNvdW50ZXIgPCAwKSB0aGF0LmNvdW50ZXIgPSBpdGVtcy5sZW5ndGggLSAxO1xyXG5cclxuICAgIHRoYXQuY291bnRTbGlkZSggYWN0aXZlSXRlbS5pbmRleCwgdGhhdC5sZW5naHRDaGlsZCk7XHJcbiAgICBhY3RpdmVJdGVtID0gYWN0aXZlSXRlbS5lbGVtO1xyXG4gICAgaWYob3JpZW50YXRpb24gPT09ICdwcmV2Jykge1xyXG4gICAgICByZXFJdGVtID0gaXRlbXNbdGhhdC5jb3VudGVyUHJldl07XHJcbiAgICB9XHJcblxyXG4gICAgaWYob3JpZW50YXRpb24gPT09ICduZXh0Jykge1xyXG4gICAgICByZXFJdGVtID0gaXRlbXNbdGhhdC5jb3VudGVyTmV4dF07XHJcbiAgICB9XHJcblxyXG4gICAgaWYoIWRpcmVjdGlvbikge1xyXG4gICAgICBhY3RpdmVJdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICByZXFJdGVtLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYW5pbWF0ZSh7XHJcbiAgICAgICAgZHVyYXRpb246IHRoYXQuZHVyYXRpb24sXHJcbiAgICAgICAgZHJhdyhwcm9ncmVzcykge1xyXG4gICAgICAgICAgYWN0aXZlSXRlbS5zdHlsZS50b3AgPSAoZGlyZWN0aW9uID09PSAnZG93bicpID8gYCR7cHJvZ3Jlc3N9JWAgOiBgJHstcHJvZ3Jlc3N9JWA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICBcclxuICAgICAgYW5pbWF0ZSh7XHJcbiAgICAgICAgZHVyYXRpb246IHRoYXQuZHVyYXRpb24sXHJcbiAgICAgICAgZHJhdyhwcm9ncmVzcykge1xyXG4gICAgICAgICAgcmVxSXRlbS5zdHlsZS50b3AgPSAoZGlyZWN0aW9uID09PSAnZG93bicpID8gYCR7KC0xMDApICsgcHJvZ3Jlc3N9JWAgOiBgJHsxMDAgLSBwcm9ncmVzc30lYDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGFmdGVyKCkge1xyXG4gICAgICAgICAgYWN0aXZlSXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgICAgIHJlcUl0ZW0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgICAgICB0aGF0LmluUHJvY2VzcyA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB0aGF0LmluaXQgPSBmdW5jdGlvbigpIHtcclxuICAgIC8vIGNhbGN1bGF0aW9uIGNvdW50ZXJzXHJcbiAgICB0aGF0LmNvdW50U2xpZGUodGhhdC5jb3VudGVyLCB0aGF0LmxlbmdodENoaWxkKTtcclxuICAgIC8vIGNhbGN1bGF0aW9uIGNvdW50ZXJzXHJcblxyXG4gICAgLy8gaW5pdGlhbCBmaXJzdCBzbGlkZXNcclxuICAgIHRoYXQuc2xpZGVJbml0KHRoYXQuY29udGFpbmVyVmlldywgdGhhdC5jb3VudGVyKTtcclxuICAgIHRoYXQuc2xpZGVJbml0KHRoYXQuY29udGFpbmVyTGVmdCwgdGhhdC5jb3VudGVyUHJldik7XHJcbiAgICB0aGF0LnNsaWRlSW5pdCh0aGF0LmNvbnRhaW5lclJpZ2h0LCB0aGF0LmNvdW50ZXJOZXh0KTtcclxuICAgIC8vIGluaXRpYWwgZmlyc3Qgc2xpZGVzXHJcblxyXG4gICAgLy8gbGlzdGVuZXJzXHJcbiAgICB0aGF0LmJ1dHRvbnNMZWZ0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PiB7XHJcbiAgICAgIGlmKCF0aGF0LmluUHJvY2Vzcykge1xyXG4gICAgICAgIHRoYXQuaW5Qcm9jZXNzID0gdHJ1ZTtcclxuICAgICAgICB0aGF0Lm1vdmVTbGlkZSh0aGF0LmNvbnRhaW5lclZpZXcsICdwcmV2Jyk7XHJcbiAgICAgICAgdGhhdC5tb3ZlU2xpZGUodGhhdC5jb250YWluZXJMZWZ0LCAgJ3ByZXYnLCAnZG93bicpO1xyXG4gICAgICAgIHRoYXQubW92ZVNsaWRlKHRoYXQuY29udGFpbmVyUmlnaHQsICAncHJldicsICd1cCcpO1xyXG4gICAgICAgIC8vIHRoYXQuY291bnRlci0tO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHRoYXQuYnV0dG9uc1JpZ2h0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PiB7XHJcbiAgICAgIGlmKCF0aGF0LmluUHJvY2Vzcykge1xyXG4gICAgICAgIHRoYXQuaW5Qcm9jZXNzID0gdHJ1ZTtcclxuICAgICAgICB0aGF0Lm1vdmVTbGlkZSh0aGF0LmNvbnRhaW5lclZpZXcsICduZXh0Jyk7XHJcbiAgICAgICAgdGhhdC5tb3ZlU2xpZGUodGhhdC5jb250YWluZXJMZWZ0LCAnbmV4dCcsICdkb3duJyk7XHJcbiAgICAgICAgdGhhdC5tb3ZlU2xpZGUodGhhdC5jb250YWluZXJSaWdodCwgJ25leHQnLCAndXAnKTtcclxuICAgICAgICAvLyB0aGF0LmNvdW50ZXIrKztcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICAvLyBsaXN0ZW5lcnNcclxuICB9XHJcblxyXG4gIHRoYXQuc2xpZGVJbml0ID0gKGNvbnRhaW5lciwgaSk9PiB7XHJcbiAgICBsZXQgY2hpbGQgPSBjb250YWluZXIuY2hpbGRyZW47XHJcbiAgICBjaGlsZFtpXS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICB9XHJcbiAgXHJcbiAgdGhhdC5jb3VudFNsaWRlID0gKGNvdW50ZXIsIGFyclNsaWRlKT0+IHtcclxuICAgIGlmKGNvdW50ZXIgPT09IGFyclNsaWRlIC0gMSkge1xyXG4gICAgICB0aGF0LmNvdW50ZXJOZXh0ID0gMFxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhhdC5jb3VudGVyTmV4dCA9IGNvdW50ZXIgKyAxXHJcbiAgICB9XHJcbiAgICBpZihjb3VudGVyID09PSAwKSB7XHJcbiAgICAgIHRoYXQuY291bnRlclByZXYgPSBhcnJTbGlkZSAtIDFcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoYXQuY291bnRlclByZXYgPSBjb3VudGVyIC0gMVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdGhhdC5pbml0KCk7XHJcbn1cclxuXHJcbi8vID09PSAgUkFGICA9PT1cclxuZnVuY3Rpb24gYW5pbWF0ZSh7ZHJhdywgZHVyYXRpb24sIGFmdGVyfSkge1xyXG5cclxuICBsZXQgc3RhcnQgPSBwZXJmb3JtYW5jZS5ub3coKTtcclxuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gYW5pbWF0ZSh0aW1lKSB7XHJcbiAgICAvLyB0aW1lRnJhY3Rpb24gZ29lcyBmcm9tIDAgdG8gMVxyXG4gICAgbGV0IHRpbWVGcmFjdGlvbiA9ICgodGltZSAtIHN0YXJ0KSk7XHJcblxyXG4gICAgaWYgKHRpbWVGcmFjdGlvbiA+IGR1cmF0aW9uKSB0aW1lRnJhY3Rpb24gPSBkdXJhdGlvbjtcclxuICAgIC8vIGNhbGN1bGF0ZSB0aGUgY3VycmVudCBhbmltYXRpb24gc3RhdGVcclxuICAgIGxldCBwcm9ncmVzcyA9ICh0aW1lRnJhY3Rpb24gLyBkdXJhdGlvbikgKiAxMDBcclxuICAgIFxyXG4gICAgZHJhdyhwcm9ncmVzcyk7IC8vIGRyYXcgaXRcclxuXHJcbiAgICBpZiAodGltZUZyYWN0aW9uIDwgZHVyYXRpb24pIHtcclxuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpO1xyXG4gICAgfSBlbHNlIGlmKHRpbWVGcmFjdGlvbiA+PSBkdXJhdGlvbiAmJiBhZnRlcikge1xyXG4gICAgICBhZnRlcigpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcbiIsIid1c2Ugc3RyaWN0J1xyXG5cclxuLy8gc3ZnIHBvbHlmaWxsXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0vL1xyXG5pbXBvcnQgc3ZnNGV2ZXJ5Ym9keSBmcm9tICdzdmc0ZXZlcnlib2R5JztcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PS8vXHJcblxyXG5zdmc0ZXZlcnlib2R5KClcclxuXHJcbi8vIGltcG9ydCBmb250YXdlc29tZSBmcm9tIFwiZm9udC1hd2Vzb21lXCJcclxuLy8gZm9udGF3ZXNvbWUuZG9tLmkyc3ZnKClcclxuXHJcbmltcG9ydCAnLi9jb21tb24vbWFpbic7XHJcbmltcG9ydCAnLi9jb21tb24vbW9kYWwnO1xyXG5pbXBvcnQgJy4vY29tbW9uL21lbnUnO1xyXG5pbXBvcnQgJy4vY29tbW9uL3dvcmsnO1xyXG5pbXBvcnQgJy4vY29tbW9uL3BhcmFsYXgnO1xyXG5pbXBvcnQgJy4vY29tbW9uL3BhcmFsYXgtc2Nyb2xsJztcclxuaW1wb3J0ICcuL2NvbW1vbi93b3Jrcy1zbGlkZXInO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9