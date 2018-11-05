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
  duration: '400'

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N2ZzRldmVyeWJvZHkvZGlzdC9zdmc0ZXZlcnlib2R5LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21tb24vbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tbW9uL21lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbW1vbi9tb2RhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tbW9uL3BhcmFsYXgtc2Nyb2xsLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21tb24vcGFyYWxheC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tbW9uL3dvcmsuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbW1vbi93b3Jrcy1zbGlkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2luZGV4LmpzIl0sIm5hbWVzIjpbIndlbGNvbUJ1dHRvbiIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ0b0dlbmVyYWwiLCJiYWNrQnV0dG9uIiwicXVlcnlTZWxlY3RvciIsImZsaXBwIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsYXNzTGlzdCIsImFkZCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInJlbW92ZSIsIk1FTlVfQlVUVE9OIiwiTUVOVV9CVVRUT05fV1JBUFAiLCJNRU5VIiwiQ09OVEFJTkVSIiwidGh1bWIiLCJ3aW5kb3ciLCJhYnNvbHV0ZUJ1dHRvblBvc1giLCJvZmZzZXRXaWR0aCIsIm9mZnNldExlZnQiLCJhYnNvbHV0ZUJ1dHRvblBvc1kiLCJvZmZzZXRUb3AiLCJidXR0b25Qb3NpdGlvbiIsInRvZ2dsZSIsImZpeGVkQnV0dG9uUG9zWSIsImZpeGVkQnV0dG9uUG9zWCIsImlubmVyV2lkdGgiLCJzdHlsZSIsInBvc2l0aW9uIiwicmlnaHQiLCJ0b3AiLCJtb2RhbEJ1dHRvbiIsIm1vZGFsIiwibG9naW5CdXR0b24iLCJXRUxDT01fQ09OVEFJTkVSIiwib3BhY2l0eSIsInNldFRpbWVvdXQiLCJwYXJhbGF4IiwidXNlciIsInNlY3Rpb25UZXh0IiwibW92ZSIsImJsb2NrIiwid2luZG93U2Nyb2xsIiwic3RyYWZlQW1vdW50IiwieFBvcyIsInN0cmFmZSIsInRyYW5zZm9ybVN0cmluZyIsInRyYW5zZm9ybSIsImluaXQiLCJ3U2Nyb2xsIiwicGFnZVlPZmZzZXQiLCJwYXJhbGF4Q29udCIsImxheWVycyIsIkFycmF5IiwicHJvdG90eXBlIiwic2xpY2UiLCJjYWxsIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsIm1vdmVMYXllcnMiLCJpbml0aWFsWCIsInBhZ2VYIiwiaW5pdGlhbFkiLCJpbm5lckhlaWdodCIsInBhZ2VZIiwiaSIsImxheWVyIiwiZGl2aWRlciIsInBvc2l0aW9uWCIsInBvc2l0aW9uWSIsIndyYXBwIiwiZm9ybSIsImltZ0JnV3JhcHAiLCJpbWdCZyIsImJsdXIiLCJzZXQiLCJpbWdXaWR0aCIsImltZ1NpemVUb3AiLCJwb3NMZWZ0IiwicG9zVG9wIiwiYmx1ckNTUyIsImJhY2tncm91bmRTaXplIiwiYmFja2dyb3VuZFBvc2l0aW9uIiwib25sb2FkIiwib25yZXNpemUiLCJzbGlkZXJTdGFydCIsIlNsaWRlciIsImNvbnRhaW5lclZpZXciLCJjb250YWluZXJMZWZ0IiwiY29udGFpbmVyUmlnaHQiLCJzbGlkZSIsImJ1dHRvbnNMZWZ0IiwiYnV0dG9uc1JpZ2h0IiwiZHVyYXRpb24iLCJvcHRpb25zIiwidGhhdCIsImNvdW50ZXIiLCJjb3VudGVyUHJldiIsImNvdW50ZXJOZXh0IiwiaW5Qcm9jZXNzIiwibGVuZ2h0Q2hpbGQiLCJNYXRoIiwibWF4IiwiZnJvbSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJsZW5ndGgiLCJtb3ZlU2xpZGUiLCJjb250YWluZXIiLCJvcmllbnRhdGlvbiIsImRpcmVjdGlvbiIsIml0ZW1zIiwiY2hpbGRyZW4iLCJhY3RpdmVJdGVtIiwicmVxSXRlbSIsImZvckVhY2giLCJlbCIsImNvbnRhaW5zIiwiZWxlbSIsImluZGV4IiwiY291bnRTbGlkZSIsImFuaW1hdGUiLCJkcmF3IiwicHJvZ3Jlc3MiLCJhZnRlciIsInNsaWRlSW5pdCIsImNoaWxkIiwiYXJyU2xpZGUiLCJzdGFydCIsInBlcmZvcm1hbmNlIiwibm93IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwidGltZSIsInRpbWVGcmFjdGlvbiJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUFBLGdIQUdMO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLHlCQUF5QjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3RkFBd0Y7QUFDeEY7QUFD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QyxlQUFldkMsUUFBZjtBQUM3QjtBQUNBLFFBQUk2QixXQUFZVSxlQUFldkMsUUFBaEIsR0FBNEIsR0FBM0M7O0FBRUE0QixTQUFLQyxRQUFMLEVBUjJDLENBUTNCOztBQUVoQixRQUFJVSxlQUFldkMsUUFBbkIsRUFBNkI7QUFDM0JxQyw0QkFBc0JWLE9BQXRCO0FBQ0QsS0FGRCxNQUVPLElBQUdZLGdCQUFnQnZDLFFBQWhCLElBQTRCOEIsS0FBL0IsRUFBc0M7QUFDM0NBO0FBQ0Q7QUFDRixHQWZEO0FBZ0JELEM7Ozs7Ozs7Ozs7OztBQ2xLRDs7QUFFQTtBQUNBOztBQUNBOzs7O0FBUUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFiQTs7QUFFQTs7QUFFQTtBQUNBLDBCIiwiZmlsZSI6ImluZGV4LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Fzc2V0cy9qcy9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvanMvaW5kZXguanNcIik7XG4iLCIhZnVuY3Rpb24ocm9vdCwgZmFjdG9yeSkge1xuICAgIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgZGVmaW5lICYmIGRlZmluZS5hbWQgPyAvLyBBTUQuIFJlZ2lzdGVyIGFzIGFuIGFub255bW91cyBtb2R1bGUgdW5sZXNzIGFtZE1vZHVsZUlkIGlzIHNldFxuICAgIGRlZmluZShbXSwgZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiByb290LnN2ZzRldmVyeWJvZHkgPSBmYWN0b3J5KCk7XG4gICAgfSkgOiBcIm9iamVjdFwiID09IHR5cGVvZiBtb2R1bGUgJiYgbW9kdWxlLmV4cG9ydHMgPyAvLyBOb2RlLiBEb2VzIG5vdCB3b3JrIHdpdGggc3RyaWN0IENvbW1vbkpTLCBidXRcbiAgICAvLyBvbmx5IENvbW1vbkpTLWxpa2UgZW52aXJvbm1lbnRzIHRoYXQgc3VwcG9ydCBtb2R1bGUuZXhwb3J0cyxcbiAgICAvLyBsaWtlIE5vZGUuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCkgOiByb290LnN2ZzRldmVyeWJvZHkgPSBmYWN0b3J5KCk7XG59KHRoaXMsIGZ1bmN0aW9uKCkge1xuICAgIC8qISBzdmc0ZXZlcnlib2R5IHYyLjEuOSB8IGdpdGh1Yi5jb20vam9uYXRoYW50bmVhbC9zdmc0ZXZlcnlib2R5ICovXG4gICAgZnVuY3Rpb24gZW1iZWQocGFyZW50LCBzdmcsIHRhcmdldCkge1xuICAgICAgICAvLyBpZiB0aGUgdGFyZ2V0IGV4aXN0c1xuICAgICAgICBpZiAodGFyZ2V0KSB7XG4gICAgICAgICAgICAvLyBjcmVhdGUgYSBkb2N1bWVudCBmcmFnbWVudCB0byBob2xkIHRoZSBjb250ZW50cyBvZiB0aGUgdGFyZ2V0XG4gICAgICAgICAgICB2YXIgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCksIHZpZXdCb3ggPSAhc3ZnLmhhc0F0dHJpYnV0ZShcInZpZXdCb3hcIikgJiYgdGFyZ2V0LmdldEF0dHJpYnV0ZShcInZpZXdCb3hcIik7XG4gICAgICAgICAgICAvLyBjb25kaXRpb25hbGx5IHNldCB0aGUgdmlld0JveCBvbiB0aGUgc3ZnXG4gICAgICAgICAgICB2aWV3Qm94ICYmIHN2Zy5zZXRBdHRyaWJ1dGUoXCJ2aWV3Qm94XCIsIHZpZXdCb3gpO1xuICAgICAgICAgICAgLy8gY29weSB0aGUgY29udGVudHMgb2YgdGhlIGNsb25lIGludG8gdGhlIGZyYWdtZW50XG4gICAgICAgICAgICBmb3IgKC8vIGNsb25lIHRoZSB0YXJnZXRcbiAgICAgICAgICAgIHZhciBjbG9uZSA9IHRhcmdldC5jbG9uZU5vZGUoITApOyBjbG9uZS5jaGlsZE5vZGVzLmxlbmd0aDsgKSB7XG4gICAgICAgICAgICAgICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQoY2xvbmUuZmlyc3RDaGlsZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBhcHBlbmQgdGhlIGZyYWdtZW50IGludG8gdGhlIHN2Z1xuICAgICAgICAgICAgcGFyZW50LmFwcGVuZENoaWxkKGZyYWdtZW50KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBsb2FkcmVhZHlzdGF0ZWNoYW5nZSh4aHIpIHtcbiAgICAgICAgLy8gbGlzdGVuIHRvIGNoYW5nZXMgaW4gdGhlIHJlcXVlc3RcbiAgICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgLy8gaWYgdGhlIHJlcXVlc3QgaXMgcmVhZHlcbiAgICAgICAgICAgIGlmICg0ID09PSB4aHIucmVhZHlTdGF0ZSkge1xuICAgICAgICAgICAgICAgIC8vIGdldCB0aGUgY2FjaGVkIGh0bWwgZG9jdW1lbnRcbiAgICAgICAgICAgICAgICB2YXIgY2FjaGVkRG9jdW1lbnQgPSB4aHIuX2NhY2hlZERvY3VtZW50O1xuICAgICAgICAgICAgICAgIC8vIGVuc3VyZSB0aGUgY2FjaGVkIGh0bWwgZG9jdW1lbnQgYmFzZWQgb24gdGhlIHhociByZXNwb25zZVxuICAgICAgICAgICAgICAgIGNhY2hlZERvY3VtZW50IHx8IChjYWNoZWREb2N1bWVudCA9IHhoci5fY2FjaGVkRG9jdW1lbnQgPSBkb2N1bWVudC5pbXBsZW1lbnRhdGlvbi5jcmVhdGVIVE1MRG9jdW1lbnQoXCJcIiksIFxuICAgICAgICAgICAgICAgIGNhY2hlZERvY3VtZW50LmJvZHkuaW5uZXJIVE1MID0geGhyLnJlc3BvbnNlVGV4dCwgeGhyLl9jYWNoZWRUYXJnZXQgPSB7fSksIC8vIGNsZWFyIHRoZSB4aHIgZW1iZWRzIGxpc3QgYW5kIGVtYmVkIGVhY2ggaXRlbVxuICAgICAgICAgICAgICAgIHhoci5fZW1iZWRzLnNwbGljZSgwKS5tYXAoZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBnZXQgdGhlIGNhY2hlZCB0YXJnZXRcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRhcmdldCA9IHhoci5fY2FjaGVkVGFyZ2V0W2l0ZW0uaWRdO1xuICAgICAgICAgICAgICAgICAgICAvLyBlbnN1cmUgdGhlIGNhY2hlZCB0YXJnZXRcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0IHx8ICh0YXJnZXQgPSB4aHIuX2NhY2hlZFRhcmdldFtpdGVtLmlkXSA9IGNhY2hlZERvY3VtZW50LmdldEVsZW1lbnRCeUlkKGl0ZW0uaWQpKSwgXG4gICAgICAgICAgICAgICAgICAgIC8vIGVtYmVkIHRoZSB0YXJnZXQgaW50byB0aGUgc3ZnXG4gICAgICAgICAgICAgICAgICAgIGVtYmVkKGl0ZW0ucGFyZW50LCBpdGVtLnN2ZywgdGFyZ2V0KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgLy8gdGVzdCB0aGUgcmVhZHkgc3RhdGUgY2hhbmdlIGltbWVkaWF0ZWx5XG4gICAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UoKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gc3ZnNGV2ZXJ5Ym9keShyYXdvcHRzKSB7XG4gICAgICAgIGZ1bmN0aW9uIG9uaW50ZXJ2YWwoKSB7XG4gICAgICAgICAgICAvLyB3aGlsZSB0aGUgaW5kZXggZXhpc3RzIGluIHRoZSBsaXZlIDx1c2U+IGNvbGxlY3Rpb25cbiAgICAgICAgICAgIGZvciAoLy8gZ2V0IHRoZSBjYWNoZWQgPHVzZT4gaW5kZXhcbiAgICAgICAgICAgIHZhciBpbmRleCA9IDA7IGluZGV4IDwgdXNlcy5sZW5ndGg7ICkge1xuICAgICAgICAgICAgICAgIC8vIGdldCB0aGUgY3VycmVudCA8dXNlPlxuICAgICAgICAgICAgICAgIHZhciB1c2UgPSB1c2VzW2luZGV4XSwgcGFyZW50ID0gdXNlLnBhcmVudE5vZGUsIHN2ZyA9IGdldFNWR0FuY2VzdG9yKHBhcmVudCksIHNyYyA9IHVzZS5nZXRBdHRyaWJ1dGUoXCJ4bGluazpocmVmXCIpIHx8IHVzZS5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpO1xuICAgICAgICAgICAgICAgIGlmICghc3JjICYmIG9wdHMuYXR0cmlidXRlTmFtZSAmJiAoc3JjID0gdXNlLmdldEF0dHJpYnV0ZShvcHRzLmF0dHJpYnV0ZU5hbWUpKSwgXG4gICAgICAgICAgICAgICAgc3ZnICYmIHNyYykge1xuICAgICAgICAgICAgICAgICAgICBpZiAocG9seWZpbGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghb3B0cy52YWxpZGF0ZSB8fCBvcHRzLnZhbGlkYXRlKHNyYywgc3ZnLCB1c2UpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gcmVtb3ZlIHRoZSA8dXNlPiBlbGVtZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50LnJlbW92ZUNoaWxkKHVzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gcGFyc2UgdGhlIHNyYyBhbmQgZ2V0IHRoZSB1cmwgYW5kIGlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNyY1NwbGl0ID0gc3JjLnNwbGl0KFwiI1wiKSwgdXJsID0gc3JjU3BsaXQuc2hpZnQoKSwgaWQgPSBzcmNTcGxpdC5qb2luKFwiI1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBpZiB0aGUgbGluayBpcyBleHRlcm5hbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh1cmwubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGdldCB0aGUgY2FjaGVkIHhociByZXF1ZXN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB4aHIgPSByZXF1ZXN0c1t1cmxdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBlbnN1cmUgdGhlIHhociByZXF1ZXN0IGV4aXN0c1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4aHIgfHwgKHhociA9IHJlcXVlc3RzW3VybF0gPSBuZXcgWE1MSHR0cFJlcXVlc3QoKSwgeGhyLm9wZW4oXCJHRVRcIiwgdXJsKSwgeGhyLnNlbmQoKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhoci5fZW1iZWRzID0gW10pLCAvLyBhZGQgdGhlIHN2ZyBhbmQgaWQgYXMgYW4gaXRlbSB0byB0aGUgeGhyIGVtYmVkcyBsaXN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhoci5fZW1iZWRzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50OiBwYXJlbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdmc6IHN2ZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBpZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSwgLy8gcHJlcGFyZSB0aGUgeGhyIHJlYWR5IHN0YXRlIGNoYW5nZSBldmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2FkcmVhZHlzdGF0ZWNoYW5nZSh4aHIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGVtYmVkIHRoZSBsb2NhbCBpZCBpbnRvIHRoZSBzdmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW1iZWQocGFyZW50LCBzdmcsIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBpbmNyZWFzZSB0aGUgaW5kZXggd2hlbiB0aGUgcHJldmlvdXMgdmFsdWUgd2FzIG5vdCBcInZhbGlkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICArK2luZGV4LCArK251bWJlck9mU3ZnVXNlRWxlbWVudHNUb0J5cGFzcztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGluY3JlYXNlIHRoZSBpbmRleCB3aGVuIHRoZSBwcmV2aW91cyB2YWx1ZSB3YXMgbm90IFwidmFsaWRcIlxuICAgICAgICAgICAgICAgICAgICArK2luZGV4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGNvbnRpbnVlIHRoZSBpbnRlcnZhbFxuICAgICAgICAgICAgKCF1c2VzLmxlbmd0aCB8fCB1c2VzLmxlbmd0aCAtIG51bWJlck9mU3ZnVXNlRWxlbWVudHNUb0J5cGFzcyA+IDApICYmIHJlcXVlc3RBbmltYXRpb25GcmFtZShvbmludGVydmFsLCA2Nyk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHBvbHlmaWxsLCBvcHRzID0gT2JqZWN0KHJhd29wdHMpLCBuZXdlcklFVUEgPSAvXFxiVHJpZGVudFxcL1s1NjddXFxifFxcYk1TSUUgKD86OXwxMClcXC4wXFxiLywgd2Via2l0VUEgPSAvXFxiQXBwbGVXZWJLaXRcXC8oXFxkKylcXGIvLCBvbGRlckVkZ2VVQSA9IC9cXGJFZGdlXFwvMTJcXC4oXFxkKylcXGIvLCBlZGdlVUEgPSAvXFxiRWRnZVxcLy4oXFxkKylcXGIvLCBpbklmcmFtZSA9IHdpbmRvdy50b3AgIT09IHdpbmRvdy5zZWxmO1xuICAgICAgICBwb2x5ZmlsbCA9IFwicG9seWZpbGxcIiBpbiBvcHRzID8gb3B0cy5wb2x5ZmlsbCA6IG5ld2VySUVVQS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpIHx8IChuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKG9sZGVyRWRnZVVBKSB8fCBbXSlbMV0gPCAxMDU0NyB8fCAobmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCh3ZWJraXRVQSkgfHwgW10pWzFdIDwgNTM3IHx8IGVkZ2VVQS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpICYmIGluSWZyYW1lO1xuICAgICAgICAvLyBjcmVhdGUgeGhyIHJlcXVlc3RzIG9iamVjdFxuICAgICAgICB2YXIgcmVxdWVzdHMgPSB7fSwgcmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCBzZXRUaW1lb3V0LCB1c2VzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJ1c2VcIiksIG51bWJlck9mU3ZnVXNlRWxlbWVudHNUb0J5cGFzcyA9IDA7XG4gICAgICAgIC8vIGNvbmRpdGlvbmFsbHkgc3RhcnQgdGhlIGludGVydmFsIGlmIHRoZSBwb2x5ZmlsbCBpcyBhY3RpdmVcbiAgICAgICAgcG9seWZpbGwgJiYgb25pbnRlcnZhbCgpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBnZXRTVkdBbmNlc3Rvcihub2RlKSB7XG4gICAgICAgIGZvciAodmFyIHN2ZyA9IG5vZGU7IFwic3ZnXCIgIT09IHN2Zy5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpICYmIChzdmcgPSBzdmcucGFyZW50Tm9kZSk7ICkge31cbiAgICAgICAgcmV0dXJuIHN2ZztcbiAgICB9XG4gICAgcmV0dXJuIHN2ZzRldmVyeWJvZHk7XG59KTsiLCIndXNlIHN0cmljdCdcclxuXHJcbi8vIGltcG9ydCBmb250YXdlc29tZSBmcm9tICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtZnJlZS13ZWJmb250cydcclxuLy8gZm9udGF3ZXNvbWUuZG9tLmkyc3ZnKClcclxuXHJcbmNvbnN0IHdlbGNvbUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhdXRvcmlzYXRpb24tYnV0dG9uJyk7XHJcbmNvbnN0IHRvR2VuZXJhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0by1nZW5lcmFsJylcclxuY29uc3QgYmFja0J1dHRvbiA9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndlbGNvbV9fYnV0dG9uJyk7XHJcbmNvbnN0IGZsaXBwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZsaXBwZXInKTtcclxuXHJcbmlmIChmbGlwcCAhPT0gbnVsbCkge1xyXG5cclxuICB3ZWxjb21CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuXHJcbiAgICBmbGlwcC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gICAgYmFja0J1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG5cclxuICB9KVxyXG5cclxuICB0b0dlbmVyYWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG5cclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBmbGlwcC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gICAgYmFja0J1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG5cclxuICB9KVxyXG5cclxufSIsImNvbnN0IE1FTlVfQlVUVE9OID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUtYnV0dG9uJyk7XHJcbmNvbnN0IE1FTlVfQlVUVE9OX1dSQVBQID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUtYnV0dG9uX193cmFwcCcpO1xyXG5jb25zdCBNRU5VID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUtd3JhcHAnKTtcclxuY29uc3QgQ09OVEFJTkVSID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlcm8tY29udGFpbmVyJyk7XHJcblxyXG5sZXQgdGh1bWIgPSBmYWxzZVxyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uKCkge1xyXG4gIFxyXG4gIGlmKE1FTlUgIT09IG51bGwpIHtcclxuXHJcbiAgICAvLyDQv9C+0LfQuNGG0LjRjyDQutC90L7Qv9C60Lgg0LzQtdC90Y4g0L/QviBYLFkgINC/0YDQuCDQsNCx0YHQvtC70Y7RgtC90L7QvCDQv9C+0LfQuNGG0LjQvtC90LjRgNC+0LLQsNC90LjQuFxyXG4gICAgLy8g0L/QvtC30LjRhtC40Y8g0LrQvdC+0L/QutC4INC80LXQvdGOINC/0L4gWCA9ICjRiNC40YDQuNC90LAg0LrQvtC90YLQtdC50L3QtdGA0LAgLSDRiNC40YDQuNC90LAg0L7RgiDQutC90L7Qv9C60Lgg0YHQu9C10LLQsCkgLSDRiNC40YDQuNC90LAg0YHQsNC80L7QuSDQutC90L7Qv9C60LhcclxuICAgIGxldCBhYnNvbHV0ZUJ1dHRvblBvc1ggPSAoQ09OVEFJTkVSLm9mZnNldFdpZHRoIC0gTUVOVV9CVVRUT05fV1JBUFAub2Zmc2V0TGVmdCkgLSBNRU5VX0JVVFRPTl9XUkFQUC5vZmZzZXRXaWR0aDtcclxuICAgIGxldCBhYnNvbHV0ZUJ1dHRvblBvc1kgPSBNRU5VX0JVVFRPTl9XUkFQUC5vZmZzZXRUb3A7XHJcblxyXG4gICAgTUVOVV9CVVRUT04uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG5cclxuICAgICAgdGh1bWIgPSAhdGh1bWJcclxuICAgICAgYnV0dG9uUG9zaXRpb24oYWJzb2x1dGVCdXR0b25Qb3NYLCBhYnNvbHV0ZUJ1dHRvblBvc1kpO1xyXG5cclxuICAgICAgTUVOVV9CVVRUT04uY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XHJcbiAgICAgIE1FTlUuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XHJcblxyXG4gICAgfSlcclxuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBmdW5jdGlvbigpIHtcclxuICAgICAgYnV0dG9uUG9zaXRpb24oYWJzb2x1dGVCdXR0b25Qb3NYLCBhYnNvbHV0ZUJ1dHRvblBvc1kpO1xyXG4gICAgfSlcclxuXHJcbiAgfVxyXG5cclxufSlcclxuXHJcblxyXG5mdW5jdGlvbiBidXR0b25Qb3NpdGlvbihhYnNvbHV0ZUJ1dHRvblBvc1gsIGFic29sdXRlQnV0dG9uUG9zWSkge1xyXG4gIC8vINC/0L7Qt9C40YbQuNGPINC60L3QvtC/0LrQuCDQvNC10L3RjiDQv9C+IFgsWSAg0L/RgNC4IGZpeGVkINC/0L7Qt9C40YbQuNC+0L3QuNGA0L7QstCw0L3QuNC4XHJcbiAgbGV0IGZpeGVkQnV0dG9uUG9zWSA9IE1FTlVfQlVUVE9OX1dSQVBQLm9mZnNldFRvcFxyXG4gIGxldCBmaXhlZEJ1dHRvblBvc1ggPSAod2luZG93LmlubmVyV2lkdGggLSBDT05UQUlORVIub2Zmc2V0V2lkdGgpIC8gMlxyXG4gIE1FTlVfQlVUVE9OX1dSQVBQLnN0eWxlLnBvc2l0aW9uID0gdGh1bWIgPyBcImZpeGVkXCIgOiBcImFic29sdXRlXCI7XHJcbiAgTUVOVV9CVVRUT05fV1JBUFAuc3R5bGUucmlnaHQgPSB0aHVtYiA/IGAke2ZpeGVkQnV0dG9uUG9zWH1weGAgOiBgJHthYnNvbHV0ZUJ1dHRvblBvc1h9cHhgO1xyXG4gIE1FTlVfQlVUVE9OX1dSQVBQLnN0eWxlLnRvcCA9IHRodW1iID8gYCR7Zml4ZWRCdXR0b25Qb3NZfXB4YCA6IGAke2Fic29sdXRlQnV0dG9uUG9zWX1weGA7XHJcbn0iLCJjb25zdCBtb2RhbEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbC1idXR0b24nKTtcclxuY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtb3ZlcmxheScpO1xyXG5jb25zdCBsb2dpbkJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2dpbi1idXR0b24nKVxyXG5jb25zdCBXRUxDT01fQ09OVEFJTkVSID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndlbGNvbS1jb250YWluZXInKVxyXG5cclxuaWYobW9kYWwgIT09IG51bGwpIHtcclxuXHJcbiAgbG9naW5CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG5cclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBXRUxDT01fQ09OVEFJTkVSLnN0eWxlLm9wYWNpdHkgPSAnMCc7XHJcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcbiAgICAgIG1vZGFsLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgfSwgNTAwKVxyXG5cclxuICB9KVxyXG5cclxuICBtb2RhbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuXHJcbiAgICBtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuXHJcblxyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG4gICAgICBXRUxDT01fQ09OVEFJTkVSLnN0eWxlLm9wYWNpdHkgPSAnMSc7XHJcbiAgICB9LCA1MDApXHJcblxyXG4gIH0pXHJcblxyXG59XHJcbiIsImNvbnN0IHBhcmFsYXggPSAoZnVuY3Rpb24oKSB7XHJcblxyXG4gIGxldCB1c2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZXJvX19hdmF0YXJcIilcclxuICBsZXQgc2VjdGlvblRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlcm9fX2JnLXdvcmRcIilcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIG1vdmUoYmxvY2ssIHdpbmRvd1Njcm9sbCwgc3RyYWZlQW1vdW50LCB4UG9zKSB7XHJcbiAgICAgIGxldCBzdHJhZmUgPSB3aW5kb3dTY3JvbGwgLyAtc3RyYWZlQW1vdW50O1xyXG4gICAgICBsZXQgc3R5bGUgPSBibG9jay5zdHlsZTtcclxuICAgICAgLy8g0L/QtdGA0LXQtNCw0Y4gdHJhbnNsYXRlINC/0L4geCwg0YIu0LouINC30L3QsNGH0LXQvdC40Y8g0YMg0LLRgdC10YUg0Y3Qu9C10LzQtdC90YLQvtCyINGA0LDQt9C90YvQtVxyXG4gICAgICBsZXQgdHJhbnNmb3JtU3RyaW5nID0gYHRyYW5zbGF0ZTNkKCR7eFBvc30lLCAkey01MCArIHN0cmFmZX0lLCAwKWBcclxuICAgICAgc3R5bGUudHJhbnNmb3JtID0gdHJhbnNmb3JtU3RyaW5nO1xyXG4gICAgfSxcclxuICAgIGluaXQod1Njcm9sbCkge1xyXG4gICAgICB0aGlzLm1vdmUodXNlciwgd1Njcm9sbCwgMywgLTUwKVxyXG4gICAgICB0aGlzLm1vdmUoc2VjdGlvblRleHQsIHdTY3JvbGwsIDIwLCAwKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbn0oKSlcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGZ1bmN0aW9uKCkge1xyXG5cclxuICBsZXQgd1Njcm9sbCA9IHdpbmRvdy5wYWdlWU9mZnNldFxyXG5cclxuICBwYXJhbGF4LmluaXQod1Njcm9sbCk7XHJcblxyXG5cclxufSkiLCJjb25zdCBwYXJhbGF4Q29udCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3ZWxjb21lX19wYXJhbGF4Jyk7XHJcbmNvbnN0IGxheWVycyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3BhcmFsYXhfX2xheWVyJykpO1xyXG5cclxuaWYocGFyYWxheENvbnQgIT09IG51bGwpIHtcclxuXHJcbiAgY29uc3QgbW92ZUxheWVycyA9IChlKSA9PiB7XHJcbiAgICBcclxuICAgIGNvbnN0IGluaXRpYWxYID0gKHdpbmRvdy5pbm5lcldpZHRoLzIpIC0gZS5wYWdlWDtcclxuICAgIGNvbnN0IGluaXRpYWxZID0gKHdpbmRvdy5pbm5lckhlaWdodC8yKSAtIGUucGFnZVk7XHJcblxyXG4gICAgbGV0IGkgPSAwO1xyXG5cclxuICAgIGZvciAobGV0IGxheWVyIG9mIGxheWVycykge1xyXG5cclxuICAgICAgbGV0IGRpdmlkZXIgPSBpIC8gNzA7XHJcbiAgICAgIGxldCBwb3NpdGlvblggPSBpbml0aWFsWCAqIGRpdmlkZXI7XHJcbiAgICAgIGxldCBwb3NpdGlvblkgPSBpbml0aWFsWSAqIGRpdmlkZXI7XHJcblxyXG4gICAgICBsYXllci5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlKCR7cG9zaXRpb25YfXB4LCAke3Bvc2l0aW9uWX1weClgXHJcbiAgICBcclxuICAgICAgaSsrO1xyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBtb3ZlTGF5ZXJzKTtcclxuXHJcbn1cclxuXHJcblxyXG5cclxuIiwibGV0IHdyYXBwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhY3RzLWZvcm0nKVxyXG5sZXQgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWN0cy1mb3JtX19ibHVyJylcclxubGV0IGltZ0JnV3JhcHAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmVlZGJhY2tfX2JnJylcclxubGV0IGltZ0JnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZlZWRiYWNrX19iZy1pbWcnKVxyXG5cclxuaWYod3JhcHAgIT09IG51bGwpIHtcclxuICBsZXQgYmx1ciA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzZXQoKSB7XHJcbiAgICAgICAgbGV0IGltZ1dpZHRoID0gaW1nQmdXcmFwcC5vZmZzZXRXaWR0aCxcclxuICAgICAgICAgICAgaW1nU2l6ZVRvcCA9IGltZ0JnLm9mZnNldFRvcCxcclxuICAgICAgICAgICAgcG9zTGVmdCA9IC13cmFwcC5vZmZzZXRMZWZ0LFxyXG4gICAgICAgICAgICBwb3NUb3AgPSAtKHdyYXBwLm9mZnNldFRvcCAtIGltZ1NpemVUb3ApLFxyXG4gICAgICAgICAgICBibHVyQ1NTID0gZm9ybS5zdHlsZTtcclxuXHJcbiAgICAgICAgYmx1ckNTUy5iYWNrZ3JvdW5kU2l6ZSA9IGAke2ltZ1dpZHRofXB4IGF1dG9gXHJcbiAgICAgICAgYmx1ckNTUy5iYWNrZ3JvdW5kUG9zaXRpb24gPSBgJHtwb3NMZWZ0fXB4ICR7cG9zVG9wfXB4YFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSgpKVxyXG5cclxuICB3aW5kb3cub25sb2FkID0gZnVuY3Rpb24oKSB7XHJcbiAgICBibHVyLnNldCgpO1xyXG4gIH1cclxuXHJcblxyXG4gIHdpbmRvdy5vbnJlc2l6ZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgYmx1ci5zZXQoKTtcclxuICB9ICBcclxufVxyXG5cclxuIiwiLy8gYnV0dG9ucyBzbGlkZXJcclxuXHJcbmxldCBzbGlkZXJTdGFydCA9IG5ldyBTbGlkZXIoe1xyXG4gIGNvbnRhaW5lclZpZXc6ICcuc2xpZGVyX192aWV3cy1saXN0JyxcclxuICBjb250YWluZXJMZWZ0OiAnLmJ1dHRvbnMtbGVmdF9fbGlzdCcsXHJcbiAgY29udGFpbmVyUmlnaHQ6ICcuYnV0dG9ucy1yaWdodF9fbGlzdCcsXHJcbiAgc2xpZGU6ICcuc2xpZGUnLFxyXG4gIGJ1dHRvbnNMZWZ0OiAnLnNsaWRlcl9fYnV0dG9ucy1sZWZ0IC5zbGlkZXJfX2J1dHRvbnMtaW1nJyxcclxuICBidXR0b25zUmlnaHQ6ICcuc2xpZGVyX19idXR0b25zLXJpZ2h0IC5zbGlkZXJfX2J1dHRvbnMtaW1nJyxcclxuICBkdXJhdGlvbjogJzQwMCcsXHJcblxyXG59KTtcclxuXHJcbmZ1bmN0aW9uIFNsaWRlcihvcHRpb25zKSB7XHJcbiAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gIHRoYXQuY291bnRlciA9IDA7XHJcbiAgdGhhdC5jb3VudGVyUHJldjtcclxuICB0aGF0LmNvdW50ZXJOZXh0O1xyXG4gIHRoYXQuaW5Qcm9jZXNzID0gZmFsc2U7XHJcbiAgdGhhdC5jb250YWluZXJWaWV3ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihvcHRpb25zLmNvbnRhaW5lclZpZXcpO1xyXG4gIHRoYXQuY29udGFpbmVyTGVmdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Iob3B0aW9ucy5jb250YWluZXJMZWZ0KTtcclxuICB0aGF0LmNvbnRhaW5lclJpZ2h0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihvcHRpb25zLmNvbnRhaW5lclJpZ2h0KTtcclxuXHJcbiAgaWYoIXRoYXQuY29udGFpbmVyVmlldyAmJiAhdGhhdC5jb250YWluZXJMZWZ0ICYmICF0aGF0LmNvbnRhaW5lclJpZ2h0KSB7XHJcbiAgICByZXR1cm5cclxuICB9IGVsc2Uge1xyXG4gICAgdGhhdC5sZW5naHRDaGlsZCA9IE1hdGgubWF4KFxyXG4gICAgICBBcnJheS5mcm9tKHRoYXQuY29udGFpbmVyVmlldy5xdWVyeVNlbGVjdG9yQWxsKG9wdGlvbnMuc2xpZGUpKS5sZW5ndGgsXHJcbiAgICAgIEFycmF5LmZyb20odGhhdC5jb250YWluZXJMZWZ0LnF1ZXJ5U2VsZWN0b3JBbGwob3B0aW9ucy5zbGlkZSkpLmxlbmd0aCxcclxuICAgICAgQXJyYXkuZnJvbSh0aGF0LmNvbnRhaW5lclJpZ2h0LnF1ZXJ5U2VsZWN0b3JBbGwob3B0aW9ucy5zbGlkZSkpLmxlbmd0aFxyXG4gICAgKTtcclxuICB9XHJcbiAgXHJcbiAgdGhhdC5idXR0b25zTGVmdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Iob3B0aW9ucy5idXR0b25zTGVmdCk7XHJcbiAgdGhhdC5idXR0b25zUmlnaHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG9wdGlvbnMuYnV0dG9uc1JpZ2h0KTtcclxuICB0aGF0LmR1cmF0aW9uID0gb3B0aW9ucy5kdXJhdGlvbjtcclxuICBcclxuICB0aGF0Lm1vdmVTbGlkZSA9IGZ1bmN0aW9uKGNvbnRhaW5lciwgb3JpZW50YXRpb24sIGRpcmVjdGlvbikge1xyXG5cclxuICAgIGxldCBpdGVtcyA9IEFycmF5LmZyb20oY29udGFpbmVyLmNoaWxkcmVuKTtcclxuICAgIGxldCBhY3RpdmVJdGVtID0ge307XHJcbiAgICBsZXQgcmVxSXRlbTtcclxuICAgIFxyXG4gICAgaXRlbXMuZm9yRWFjaCgoZWwsIGkpPT4ge1xyXG4gICAgICBpZihlbC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XHJcbiAgICAgICAgYWN0aXZlSXRlbS5lbGVtID0gZWwsXHJcbiAgICAgICAgYWN0aXZlSXRlbS5pbmRleCA9IGlcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYodGhhdC5jb3VudGVyID49IGl0ZW1zLmxlbmd0aCkgdGhhdC5jb3VudGVyID0gMDtcclxuICAgIGlmKHRoYXQuY291bnRlciA8IDApIHRoYXQuY291bnRlciA9IGl0ZW1zLmxlbmd0aCAtIDE7XHJcblxyXG4gICAgdGhhdC5jb3VudFNsaWRlKCBhY3RpdmVJdGVtLmluZGV4LCB0aGF0LmxlbmdodENoaWxkKTtcclxuICAgIGFjdGl2ZUl0ZW0gPSBhY3RpdmVJdGVtLmVsZW07XHJcbiAgICBpZihvcmllbnRhdGlvbiA9PT0gJ3ByZXYnKSB7XHJcbiAgICAgIHJlcUl0ZW0gPSBpdGVtc1t0aGF0LmNvdW50ZXJQcmV2XTtcclxuICAgIH1cclxuXHJcbiAgICBpZihvcmllbnRhdGlvbiA9PT0gJ25leHQnKSB7XHJcbiAgICAgIHJlcUl0ZW0gPSBpdGVtc1t0aGF0LmNvdW50ZXJOZXh0XTtcclxuICAgIH1cclxuXHJcbiAgICBpZighZGlyZWN0aW9uKSB7XHJcbiAgICAgIGFjdGl2ZUl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgIHJlcUl0ZW0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBhbmltYXRlKHtcclxuICAgICAgICBkdXJhdGlvbjogdGhhdC5kdXJhdGlvbixcclxuICAgICAgICBkcmF3KHByb2dyZXNzKSB7XHJcbiAgICAgICAgICBhY3RpdmVJdGVtLnN0eWxlLnRvcCA9IChkaXJlY3Rpb24gPT09ICdkb3duJykgPyBgJHtwcm9ncmVzc30lYCA6IGAkey1wcm9ncmVzc30lYDtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gIFxyXG4gICAgICBhbmltYXRlKHtcclxuICAgICAgICBkdXJhdGlvbjogdGhhdC5kdXJhdGlvbixcclxuICAgICAgICBkcmF3KHByb2dyZXNzKSB7XHJcbiAgICAgICAgICByZXFJdGVtLnN0eWxlLnRvcCA9IChkaXJlY3Rpb24gPT09ICdkb3duJykgPyBgJHsoLTEwMCkgKyBwcm9ncmVzc30lYCA6IGAkezEwMCAtIHByb2dyZXNzfSVgO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYWZ0ZXIoKSB7XHJcbiAgICAgICAgICBhY3RpdmVJdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgcmVxSXRlbS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgICAgIHRoYXQuaW5Qcm9jZXNzID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHRoYXQuaW5pdCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgLy8gY2FsY3VsYXRpb24gY291bnRlcnNcclxuICAgIHRoYXQuY291bnRTbGlkZSh0aGF0LmNvdW50ZXIsIHRoYXQubGVuZ2h0Q2hpbGQpO1xyXG4gICAgLy8gY2FsY3VsYXRpb24gY291bnRlcnNcclxuXHJcbiAgICAvLyBpbml0aWFsIGZpcnN0IHNsaWRlc1xyXG4gICAgdGhhdC5zbGlkZUluaXQodGhhdC5jb250YWluZXJWaWV3LCB0aGF0LmNvdW50ZXIpO1xyXG4gICAgdGhhdC5zbGlkZUluaXQodGhhdC5jb250YWluZXJMZWZ0LCB0aGF0LmNvdW50ZXJQcmV2KTtcclxuICAgIHRoYXQuc2xpZGVJbml0KHRoYXQuY29udGFpbmVyUmlnaHQsIHRoYXQuY291bnRlck5leHQpO1xyXG4gICAgLy8gaW5pdGlhbCBmaXJzdCBzbGlkZXNcclxuXHJcbiAgICAvLyBsaXN0ZW5lcnNcclxuICAgIHRoYXQuYnV0dG9uc0xlZnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+IHtcclxuICAgICAgaWYoIXRoYXQuaW5Qcm9jZXNzKSB7XHJcbiAgICAgICAgdGhhdC5pblByb2Nlc3MgPSB0cnVlO1xyXG4gICAgICAgIHRoYXQubW92ZVNsaWRlKHRoYXQuY29udGFpbmVyVmlldywgJ3ByZXYnKTtcclxuICAgICAgICB0aGF0Lm1vdmVTbGlkZSh0aGF0LmNvbnRhaW5lckxlZnQsICAncHJldicsICdkb3duJyk7XHJcbiAgICAgICAgdGhhdC5tb3ZlU2xpZGUodGhhdC5jb250YWluZXJSaWdodCwgICdwcmV2JywgJ3VwJyk7XHJcbiAgICAgICAgLy8gdGhhdC5jb3VudGVyLS07XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgdGhhdC5idXR0b25zUmlnaHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+IHtcclxuICAgICAgaWYoIXRoYXQuaW5Qcm9jZXNzKSB7XHJcbiAgICAgICAgdGhhdC5pblByb2Nlc3MgPSB0cnVlO1xyXG4gICAgICAgIHRoYXQubW92ZVNsaWRlKHRoYXQuY29udGFpbmVyVmlldywgJ25leHQnKTtcclxuICAgICAgICB0aGF0Lm1vdmVTbGlkZSh0aGF0LmNvbnRhaW5lckxlZnQsICduZXh0JywgJ2Rvd24nKTtcclxuICAgICAgICB0aGF0Lm1vdmVTbGlkZSh0aGF0LmNvbnRhaW5lclJpZ2h0LCAnbmV4dCcsICd1cCcpO1xyXG4gICAgICAgIC8vIHRoYXQuY291bnRlcisrO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIC8vIGxpc3RlbmVyc1xyXG4gIH1cclxuXHJcbiAgdGhhdC5zbGlkZUluaXQgPSAoY29udGFpbmVyLCBpKT0+IHtcclxuICAgIGxldCBjaGlsZCA9IGNvbnRhaW5lci5jaGlsZHJlbjtcclxuICAgIGNoaWxkW2ldLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gIH1cclxuICBcclxuICB0aGF0LmNvdW50U2xpZGUgPSAoY291bnRlciwgYXJyU2xpZGUpPT4ge1xyXG4gICAgaWYoY291bnRlciA9PT0gYXJyU2xpZGUgLSAxKSB7XHJcbiAgICAgIHRoYXQuY291bnRlck5leHQgPSAwXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGF0LmNvdW50ZXJOZXh0ID0gY291bnRlciArIDFcclxuICAgIH1cclxuICAgIGlmKGNvdW50ZXIgPT09IDApIHtcclxuICAgICAgdGhhdC5jb3VudGVyUHJldiA9IGFyclNsaWRlIC0gMVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhhdC5jb3VudGVyUHJldiA9IGNvdW50ZXIgLSAxXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB0aGF0LmluaXQoKTtcclxufVxyXG5cclxuLy8gPT09ICBSQUYgID09PVxyXG5mdW5jdGlvbiBhbmltYXRlKHtkcmF3LCBkdXJhdGlvbiwgYWZ0ZXJ9KSB7XHJcblxyXG4gIGxldCBzdGFydCA9IHBlcmZvcm1hbmNlLm5vdygpO1xyXG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiBhbmltYXRlKHRpbWUpIHtcclxuICAgIC8vIHRpbWVGcmFjdGlvbiBnb2VzIGZyb20gMCB0byAxXHJcbiAgICBsZXQgdGltZUZyYWN0aW9uID0gKCh0aW1lIC0gc3RhcnQpKTtcclxuXHJcbiAgICBpZiAodGltZUZyYWN0aW9uID4gZHVyYXRpb24pIHRpbWVGcmFjdGlvbiA9IGR1cmF0aW9uO1xyXG4gICAgLy8gY2FsY3VsYXRlIHRoZSBjdXJyZW50IGFuaW1hdGlvbiBzdGF0ZVxyXG4gICAgbGV0IHByb2dyZXNzID0gKHRpbWVGcmFjdGlvbiAvIGR1cmF0aW9uKSAqIDEwMFxyXG4gICAgXHJcbiAgICBkcmF3KHByb2dyZXNzKTsgLy8gZHJhdyBpdFxyXG5cclxuICAgIGlmICh0aW1lRnJhY3Rpb24gPCBkdXJhdGlvbikge1xyXG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XHJcbiAgICB9IGVsc2UgaWYodGltZUZyYWN0aW9uID49IGR1cmF0aW9uICYmIGFmdGVyKSB7XHJcbiAgICAgIGFmdGVyKCk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuIiwiJ3VzZSBzdHJpY3QnXHJcblxyXG4vLyBzdmcgcG9seWZpbGxcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PS8vXHJcbmltcG9ydCBzdmc0ZXZlcnlib2R5IGZyb20gJ3N2ZzRldmVyeWJvZHknO1xyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ly9cclxuXHJcbnN2ZzRldmVyeWJvZHkoKVxyXG5cclxuLy8gaW1wb3J0IGZvbnRhd2Vzb21lIGZyb20gXCJmb250LWF3ZXNvbWVcIlxyXG4vLyBmb250YXdlc29tZS5kb20uaTJzdmcoKVxyXG5cclxuaW1wb3J0ICcuL2NvbW1vbi9tYWluJztcclxuaW1wb3J0ICcuL2NvbW1vbi9tb2RhbCc7XHJcbmltcG9ydCAnLi9jb21tb24vbWVudSc7XHJcbmltcG9ydCAnLi9jb21tb24vd29yayc7XHJcbmltcG9ydCAnLi9jb21tb24vcGFyYWxheCc7XHJcbmltcG9ydCAnLi9jb21tb24vcGFyYWxheC1zY3JvbGwnO1xyXG5pbXBvcnQgJy4vY29tbW9uL3dvcmtzLXNsaWRlcic7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=