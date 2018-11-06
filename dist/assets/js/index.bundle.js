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
  sliderInfo: '.slider__info-list',
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
    title = title.split('');
    desc = desc.split('');

    splitWord(title);
    splitWord(desc);
    viewLink.href = link;

    animate({
      duration: that.duration,
      draw: function draw(progress) {
        console.log(Math.round(that.duration / title.length));
        // viewTitle.appendChild(title[])
        // viewDesc.appendChild(desc[])
      }
    });

    // console.log(title.length);
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

function splitWord(arr) {
  if (!Array.isArray(arr)) {
    console.error('not array!!!');
  }

  // nodeElem.textContent = '';
  arr.forEach(function (el, i) {
    var span = document.createElement('span');
    span.textContent = el;
    arr[i] = span;
  });
  return arr;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N2ZzRldmVyeWJvZHkvZGlzdC9zdmc0ZXZlcnlib2R5LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21tb24vbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tbW9uL21lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbW1vbi9tb2RhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tbW9uL3BhcmFsYXgtc2Nyb2xsLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21tb24vcGFyYWxheC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tbW9uL3dvcmsuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbW1vbi93b3Jrcy1zbGlkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2luZGV4LmpzIl0sIm5hbWVzIjpbIndlbGNvbUJ1dHRvbiIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ0b0dlbmVyYWwiLCJiYWNrQnV0dG9uIiwicXVlcnlTZWxlY3RvciIsImZsaXBwIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsYXNzTGlzdCIsImFkZCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInJlbW92ZSIsIk1FTlVfQlVUVE9OIiwiTUVOVV9CVVRUT05fV1JBUFAiLCJNRU5VIiwiQ09OVEFJTkVSIiwidGh1bWIiLCJ3aW5kb3ciLCJhYnNvbHV0ZUJ1dHRvblBvc1giLCJvZmZzZXRXaWR0aCIsIm9mZnNldExlZnQiLCJhYnNvbHV0ZUJ1dHRvblBvc1kiLCJvZmZzZXRUb3AiLCJidXR0b25Qb3NpdGlvbiIsInRvZ2dsZSIsImZpeGVkQnV0dG9uUG9zWSIsImZpeGVkQnV0dG9uUG9zWCIsImlubmVyV2lkdGgiLCJzdHlsZSIsInBvc2l0aW9uIiwicmlnaHQiLCJ0b3AiLCJtb2RhbEJ1dHRvbiIsIm1vZGFsIiwibG9naW5CdXR0b24iLCJXRUxDT01fQ09OVEFJTkVSIiwib3BhY2l0eSIsInNldFRpbWVvdXQiLCJwYXJhbGF4IiwidXNlciIsInNlY3Rpb25UZXh0IiwibW92ZSIsImJsb2NrIiwid2luZG93U2Nyb2xsIiwic3RyYWZlQW1vdW50IiwieFBvcyIsInN0cmFmZSIsInRyYW5zZm9ybVN0cmluZyIsInRyYW5zZm9ybSIsImluaXQiLCJ3U2Nyb2xsIiwicGFnZVlPZmZzZXQiLCJwYXJhbGF4Q29udCIsImxheWVycyIsIkFycmF5IiwicHJvdG90eXBlIiwic2xpY2UiLCJjYWxsIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsIm1vdmVMYXllcnMiLCJpbml0aWFsWCIsInBhZ2VYIiwiaW5pdGlhbFkiLCJpbm5lckhlaWdodCIsInBhZ2VZIiwiaSIsImxheWVyIiwiZGl2aWRlciIsInBvc2l0aW9uWCIsInBvc2l0aW9uWSIsIndyYXBwIiwiZm9ybSIsImltZ0JnV3JhcHAiLCJpbWdCZyIsImJsdXIiLCJzZXQiLCJpbWdXaWR0aCIsImltZ1NpemVUb3AiLCJwb3NMZWZ0IiwicG9zVG9wIiwiYmx1ckNTUyIsImJhY2tncm91bmRTaXplIiwiYmFja2dyb3VuZFBvc2l0aW9uIiwib25sb2FkIiwib25yZXNpemUiLCJzbGlkZXJTdGFydCIsIlNsaWRlciIsImNvbnRhaW5lclZpZXciLCJjb250YWluZXJMZWZ0IiwiY29udGFpbmVyUmlnaHQiLCJzbGlkZXJJbmZvIiwic2xpZGUiLCJidXR0b25zTGVmdCIsImJ1dHRvbnNSaWdodCIsImR1cmF0aW9uIiwib3B0aW9ucyIsInRoYXQiLCJjb3VudGVyIiwiY291bnRlclByZXYiLCJjb3VudGVyTmV4dCIsImluUHJvY2VzcyIsImxlbmdodENoaWxkIiwiTWF0aCIsIm1heCIsImZyb20iLCJxdWVyeVNlbGVjdG9yQWxsIiwibGVuZ3RoIiwibW92ZVNsaWRlIiwiY29udGFpbmVyIiwib3JpZW50YXRpb24iLCJkaXJlY3Rpb24iLCJpdGVtcyIsImNoaWxkcmVuIiwiYWN0aXZlSXRlbSIsInJlcUl0ZW0iLCJ2aWV3SWR4IiwiZm9yRWFjaCIsImVsIiwiY29udGFpbnMiLCJlbGVtIiwiaW5kZXgiLCJjb3VudFNsaWRlIiwic2xpZGVySW5mb0ZpbGwiLCJhbmltYXRlIiwiZHJhdyIsInByb2dyZXNzIiwiYWZ0ZXIiLCJzbGlkZUluaXQiLCJjaGlsZCIsImdldEF0dHJDb250YWluZXIiLCJ2aWV3VGl0bGUiLCJ2aWV3RGVzYyIsInZpZXdMaW5rIiwidGl0bGUiLCJnZXRBdHRyaWJ1dGUiLCJkZXNjIiwibGluayIsInNwbGl0Iiwic3BsaXRXb3JkIiwiaHJlZiIsImNvbnNvbGUiLCJsb2ciLCJyb3VuZCIsImFyclNsaWRlIiwiYXJyIiwiaXNBcnJheSIsImVycm9yIiwic3BhbiIsImNyZWF0ZUVsZW1lbnQiLCJ0ZXh0Q29udGVudCIsInN0YXJ0IiwicGVyZm9ybWFuY2UiLCJub3ciLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJ0aW1lIiwidGltZUZyYWN0aW9uIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNB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QjZELGVBQWU3RCxRQUFmO0FBQzdCO0FBQ0EsUUFBSStCLFdBQVk4QixlQUFlN0QsUUFBaEIsR0FBNEIsR0FBM0M7O0FBRUE4QixTQUFLQyxRQUFMLEVBVDJDLENBUzNCOztBQUVoQixRQUFJOEIsZUFBZTdELFFBQW5CLEVBQTZCO0FBQzNCMkQsNEJBQXNCOUIsT0FBdEI7QUFDRCxLQUZELE1BRU8sSUFBR2dDLGdCQUFnQjdELFFBQWhCLElBQTRCZ0MsS0FBL0IsRUFBc0M7QUFDM0NBO0FBQ0Q7QUFDRixHQWhCRDtBQWlCRCxDOzs7Ozs7Ozs7Ozs7QUN0TkQ7O0FBRUE7QUFDQTs7QUFDQTs7OztBQVFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7O0FBYkE7O0FBRUE7O0FBRUE7QUFDQSwwQiIsImZpbGUiOiJpbmRleC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9hc3NldHMvanMvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2pzL2luZGV4LmpzXCIpO1xuIiwiIWZ1bmN0aW9uKHJvb3QsIGZhY3RvcnkpIHtcbiAgICBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIGRlZmluZSAmJiBkZWZpbmUuYW1kID8gLy8gQU1ELiBSZWdpc3RlciBhcyBhbiBhbm9ueW1vdXMgbW9kdWxlIHVubGVzcyBhbWRNb2R1bGVJZCBpcyBzZXRcbiAgICBkZWZpbmUoW10sIGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gcm9vdC5zdmc0ZXZlcnlib2R5ID0gZmFjdG9yeSgpO1xuICAgIH0pIDogXCJvYmplY3RcIiA9PSB0eXBlb2YgbW9kdWxlICYmIG1vZHVsZS5leHBvcnRzID8gLy8gTm9kZS4gRG9lcyBub3Qgd29yayB3aXRoIHN0cmljdCBDb21tb25KUywgYnV0XG4gICAgLy8gb25seSBDb21tb25KUy1saWtlIGVudmlyb25tZW50cyB0aGF0IHN1cHBvcnQgbW9kdWxlLmV4cG9ydHMsXG4gICAgLy8gbGlrZSBOb2RlLlxuICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpIDogcm9vdC5zdmc0ZXZlcnlib2R5ID0gZmFjdG9yeSgpO1xufSh0aGlzLCBmdW5jdGlvbigpIHtcbiAgICAvKiEgc3ZnNGV2ZXJ5Ym9keSB2Mi4xLjkgfCBnaXRodWIuY29tL2pvbmF0aGFudG5lYWwvc3ZnNGV2ZXJ5Ym9keSAqL1xuICAgIGZ1bmN0aW9uIGVtYmVkKHBhcmVudCwgc3ZnLCB0YXJnZXQpIHtcbiAgICAgICAgLy8gaWYgdGhlIHRhcmdldCBleGlzdHNcbiAgICAgICAgaWYgKHRhcmdldCkge1xuICAgICAgICAgICAgLy8gY3JlYXRlIGEgZG9jdW1lbnQgZnJhZ21lbnQgdG8gaG9sZCB0aGUgY29udGVudHMgb2YgdGhlIHRhcmdldFxuICAgICAgICAgICAgdmFyIGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpLCB2aWV3Qm94ID0gIXN2Zy5oYXNBdHRyaWJ1dGUoXCJ2aWV3Qm94XCIpICYmIHRhcmdldC5nZXRBdHRyaWJ1dGUoXCJ2aWV3Qm94XCIpO1xuICAgICAgICAgICAgLy8gY29uZGl0aW9uYWxseSBzZXQgdGhlIHZpZXdCb3ggb24gdGhlIHN2Z1xuICAgICAgICAgICAgdmlld0JveCAmJiBzdmcuc2V0QXR0cmlidXRlKFwidmlld0JveFwiLCB2aWV3Qm94KTtcbiAgICAgICAgICAgIC8vIGNvcHkgdGhlIGNvbnRlbnRzIG9mIHRoZSBjbG9uZSBpbnRvIHRoZSBmcmFnbWVudFxuICAgICAgICAgICAgZm9yICgvLyBjbG9uZSB0aGUgdGFyZ2V0XG4gICAgICAgICAgICB2YXIgY2xvbmUgPSB0YXJnZXQuY2xvbmVOb2RlKCEwKTsgY2xvbmUuY2hpbGROb2Rlcy5sZW5ndGg7ICkge1xuICAgICAgICAgICAgICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKGNsb25lLmZpcnN0Q2hpbGQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gYXBwZW5kIHRoZSBmcmFnbWVudCBpbnRvIHRoZSBzdmdcbiAgICAgICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChmcmFnbWVudCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gbG9hZHJlYWR5c3RhdGVjaGFuZ2UoeGhyKSB7XG4gICAgICAgIC8vIGxpc3RlbiB0byBjaGFuZ2VzIGluIHRoZSByZXF1ZXN0XG4gICAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIC8vIGlmIHRoZSByZXF1ZXN0IGlzIHJlYWR5XG4gICAgICAgICAgICBpZiAoNCA9PT0geGhyLnJlYWR5U3RhdGUpIHtcbiAgICAgICAgICAgICAgICAvLyBnZXQgdGhlIGNhY2hlZCBodG1sIGRvY3VtZW50XG4gICAgICAgICAgICAgICAgdmFyIGNhY2hlZERvY3VtZW50ID0geGhyLl9jYWNoZWREb2N1bWVudDtcbiAgICAgICAgICAgICAgICAvLyBlbnN1cmUgdGhlIGNhY2hlZCBodG1sIGRvY3VtZW50IGJhc2VkIG9uIHRoZSB4aHIgcmVzcG9uc2VcbiAgICAgICAgICAgICAgICBjYWNoZWREb2N1bWVudCB8fCAoY2FjaGVkRG9jdW1lbnQgPSB4aHIuX2NhY2hlZERvY3VtZW50ID0gZG9jdW1lbnQuaW1wbGVtZW50YXRpb24uY3JlYXRlSFRNTERvY3VtZW50KFwiXCIpLCBcbiAgICAgICAgICAgICAgICBjYWNoZWREb2N1bWVudC5ib2R5LmlubmVySFRNTCA9IHhoci5yZXNwb25zZVRleHQsIHhoci5fY2FjaGVkVGFyZ2V0ID0ge30pLCAvLyBjbGVhciB0aGUgeGhyIGVtYmVkcyBsaXN0IGFuZCBlbWJlZCBlYWNoIGl0ZW1cbiAgICAgICAgICAgICAgICB4aHIuX2VtYmVkcy5zcGxpY2UoMCkubWFwKGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gZ2V0IHRoZSBjYWNoZWQgdGFyZ2V0XG4gICAgICAgICAgICAgICAgICAgIHZhciB0YXJnZXQgPSB4aHIuX2NhY2hlZFRhcmdldFtpdGVtLmlkXTtcbiAgICAgICAgICAgICAgICAgICAgLy8gZW5zdXJlIHRoZSBjYWNoZWQgdGFyZ2V0XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldCB8fCAodGFyZ2V0ID0geGhyLl9jYWNoZWRUYXJnZXRbaXRlbS5pZF0gPSBjYWNoZWREb2N1bWVudC5nZXRFbGVtZW50QnlJZChpdGVtLmlkKSksIFxuICAgICAgICAgICAgICAgICAgICAvLyBlbWJlZCB0aGUgdGFyZ2V0IGludG8gdGhlIHN2Z1xuICAgICAgICAgICAgICAgICAgICBlbWJlZChpdGVtLnBhcmVudCwgaXRlbS5zdmcsIHRhcmdldCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIC8vIHRlc3QgdGhlIHJlYWR5IHN0YXRlIGNoYW5nZSBpbW1lZGlhdGVseVxuICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlKCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHN2ZzRldmVyeWJvZHkocmF3b3B0cykge1xuICAgICAgICBmdW5jdGlvbiBvbmludGVydmFsKCkge1xuICAgICAgICAgICAgLy8gd2hpbGUgdGhlIGluZGV4IGV4aXN0cyBpbiB0aGUgbGl2ZSA8dXNlPiBjb2xsZWN0aW9uXG4gICAgICAgICAgICBmb3IgKC8vIGdldCB0aGUgY2FjaGVkIDx1c2U+IGluZGV4XG4gICAgICAgICAgICB2YXIgaW5kZXggPSAwOyBpbmRleCA8IHVzZXMubGVuZ3RoOyApIHtcbiAgICAgICAgICAgICAgICAvLyBnZXQgdGhlIGN1cnJlbnQgPHVzZT5cbiAgICAgICAgICAgICAgICB2YXIgdXNlID0gdXNlc1tpbmRleF0sIHBhcmVudCA9IHVzZS5wYXJlbnROb2RlLCBzdmcgPSBnZXRTVkdBbmNlc3RvcihwYXJlbnQpLCBzcmMgPSB1c2UuZ2V0QXR0cmlidXRlKFwieGxpbms6aHJlZlwiKSB8fCB1c2UuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKTtcbiAgICAgICAgICAgICAgICBpZiAoIXNyYyAmJiBvcHRzLmF0dHJpYnV0ZU5hbWUgJiYgKHNyYyA9IHVzZS5nZXRBdHRyaWJ1dGUob3B0cy5hdHRyaWJ1dGVOYW1lKSksIFxuICAgICAgICAgICAgICAgIHN2ZyAmJiBzcmMpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBvbHlmaWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIW9wdHMudmFsaWRhdGUgfHwgb3B0cy52YWxpZGF0ZShzcmMsIHN2ZywgdXNlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJlbW92ZSB0aGUgPHVzZT4gZWxlbWVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudC5yZW1vdmVDaGlsZCh1c2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHBhcnNlIHRoZSBzcmMgYW5kIGdldCB0aGUgdXJsIGFuZCBpZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzcmNTcGxpdCA9IHNyYy5zcGxpdChcIiNcIiksIHVybCA9IHNyY1NwbGl0LnNoaWZ0KCksIGlkID0gc3JjU3BsaXQuam9pbihcIiNcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWYgdGhlIGxpbmsgaXMgZXh0ZXJuYWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodXJsLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBnZXQgdGhlIGNhY2hlZCB4aHIgcmVxdWVzdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgeGhyID0gcmVxdWVzdHNbdXJsXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZW5zdXJlIHRoZSB4aHIgcmVxdWVzdCBleGlzdHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeGhyIHx8ICh4aHIgPSByZXF1ZXN0c1t1cmxdID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCksIHhoci5vcGVuKFwiR0VUXCIsIHVybCksIHhoci5zZW5kKCksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4aHIuX2VtYmVkcyA9IFtdKSwgLy8gYWRkIHRoZSBzdmcgYW5kIGlkIGFzIGFuIGl0ZW0gdG8gdGhlIHhociBlbWJlZHMgbGlzdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4aHIuX2VtYmVkcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudDogcGFyZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ZnOiBzdmcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksIC8vIHByZXBhcmUgdGhlIHhociByZWFkeSBzdGF0ZSBjaGFuZ2UgZXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9hZHJlYWR5c3RhdGVjaGFuZ2UoeGhyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBlbWJlZCB0aGUgbG9jYWwgaWQgaW50byB0aGUgc3ZnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVtYmVkKHBhcmVudCwgc3ZnLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaW5jcmVhc2UgdGhlIGluZGV4IHdoZW4gdGhlIHByZXZpb3VzIHZhbHVlIHdhcyBub3QgXCJ2YWxpZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKytpbmRleCwgKytudW1iZXJPZlN2Z1VzZUVsZW1lbnRzVG9CeXBhc3M7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBpbmNyZWFzZSB0aGUgaW5kZXggd2hlbiB0aGUgcHJldmlvdXMgdmFsdWUgd2FzIG5vdCBcInZhbGlkXCJcbiAgICAgICAgICAgICAgICAgICAgKytpbmRleDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBjb250aW51ZSB0aGUgaW50ZXJ2YWxcbiAgICAgICAgICAgICghdXNlcy5sZW5ndGggfHwgdXNlcy5sZW5ndGggLSBudW1iZXJPZlN2Z1VzZUVsZW1lbnRzVG9CeXBhc3MgPiAwKSAmJiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUob25pbnRlcnZhbCwgNjcpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBwb2x5ZmlsbCwgb3B0cyA9IE9iamVjdChyYXdvcHRzKSwgbmV3ZXJJRVVBID0gL1xcYlRyaWRlbnRcXC9bNTY3XVxcYnxcXGJNU0lFICg/Ojl8MTApXFwuMFxcYi8sIHdlYmtpdFVBID0gL1xcYkFwcGxlV2ViS2l0XFwvKFxcZCspXFxiLywgb2xkZXJFZGdlVUEgPSAvXFxiRWRnZVxcLzEyXFwuKFxcZCspXFxiLywgZWRnZVVBID0gL1xcYkVkZ2VcXC8uKFxcZCspXFxiLywgaW5JZnJhbWUgPSB3aW5kb3cudG9wICE9PSB3aW5kb3cuc2VsZjtcbiAgICAgICAgcG9seWZpbGwgPSBcInBvbHlmaWxsXCIgaW4gb3B0cyA/IG9wdHMucG9seWZpbGwgOiBuZXdlcklFVUEudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSB8fCAobmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaChvbGRlckVkZ2VVQSkgfHwgW10pWzFdIDwgMTA1NDcgfHwgKG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2god2Via2l0VUEpIHx8IFtdKVsxXSA8IDUzNyB8fCBlZGdlVUEudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSAmJiBpbklmcmFtZTtcbiAgICAgICAgLy8gY3JlYXRlIHhociByZXF1ZXN0cyBvYmplY3RcbiAgICAgICAgdmFyIHJlcXVlc3RzID0ge30sIHJlcXVlc3RBbmltYXRpb25GcmFtZSA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgc2V0VGltZW91dCwgdXNlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwidXNlXCIpLCBudW1iZXJPZlN2Z1VzZUVsZW1lbnRzVG9CeXBhc3MgPSAwO1xuICAgICAgICAvLyBjb25kaXRpb25hbGx5IHN0YXJ0IHRoZSBpbnRlcnZhbCBpZiB0aGUgcG9seWZpbGwgaXMgYWN0aXZlXG4gICAgICAgIHBvbHlmaWxsICYmIG9uaW50ZXJ2YWwoKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZ2V0U1ZHQW5jZXN0b3Iobm9kZSkge1xuICAgICAgICBmb3IgKHZhciBzdmcgPSBub2RlOyBcInN2Z1wiICE9PSBzdmcubm9kZU5hbWUudG9Mb3dlckNhc2UoKSAmJiAoc3ZnID0gc3ZnLnBhcmVudE5vZGUpOyApIHt9XG4gICAgICAgIHJldHVybiBzdmc7XG4gICAgfVxuICAgIHJldHVybiBzdmc0ZXZlcnlib2R5O1xufSk7IiwiJ3VzZSBzdHJpY3QnXHJcblxyXG4vLyBpbXBvcnQgZm9udGF3ZXNvbWUgZnJvbSAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUtd2ViZm9udHMnXHJcbi8vIGZvbnRhd2Vzb21lLmRvbS5pMnN2ZygpXHJcblxyXG5jb25zdCB3ZWxjb21CdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXV0b3Jpc2F0aW9uLWJ1dHRvbicpO1xyXG5jb25zdCB0b0dlbmVyYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG8tZ2VuZXJhbCcpXHJcbmNvbnN0IGJhY2tCdXR0b24gPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53ZWxjb21fX2J1dHRvbicpO1xyXG5jb25zdCBmbGlwcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mbGlwcGVyJyk7XHJcblxyXG5pZiAoZmxpcHAgIT09IG51bGwpIHtcclxuXHJcbiAgd2VsY29tQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcblxyXG4gICAgZmxpcHAuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuICAgIGJhY2tCdXR0b24uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuXHJcbiAgfSlcclxuXHJcbiAgdG9HZW5lcmFsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuXHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgZmxpcHAuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICAgIGJhY2tCdXR0b24uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuXHJcbiAgfSlcclxuXHJcbn0iLCJjb25zdCBNRU5VX0JVVFRPTiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LWJ1dHRvbicpO1xyXG5jb25zdCBNRU5VX0JVVFRPTl9XUkFQUCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LWJ1dHRvbl9fd3JhcHAnKTtcclxuY29uc3QgTUVOVSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LXdyYXBwJyk7XHJcbmNvbnN0IENPTlRBSU5FUiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZXJvLWNvbnRhaW5lcicpO1xyXG5cclxubGV0IHRodW1iID0gZmFsc2VcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbigpIHtcclxuICBcclxuICBpZihNRU5VICE9PSBudWxsKSB7XHJcblxyXG4gICAgLy8g0L/QvtC30LjRhtC40Y8g0LrQvdC+0L/QutC4INC80LXQvdGOINC/0L4gWCxZICDQv9GA0Lgg0LDQsdGB0L7Qu9GO0YLQvdC+0Lwg0L/QvtC30LjRhtC40L7QvdC40YDQvtCy0LDQvdC40LhcclxuICAgIC8vINC/0L7Qt9C40YbQuNGPINC60L3QvtC/0LrQuCDQvNC10L3RjiDQv9C+IFggPSAo0YjQuNGA0LjQvdCwINC60L7QvdGC0LXQudC90LXRgNCwIC0g0YjQuNGA0LjQvdCwINC+0YIg0LrQvdC+0L/QutC4INGB0LvQtdCy0LApIC0g0YjQuNGA0LjQvdCwINGB0LDQvNC+0Lkg0LrQvdC+0L/QutC4XHJcbiAgICBsZXQgYWJzb2x1dGVCdXR0b25Qb3NYID0gKENPTlRBSU5FUi5vZmZzZXRXaWR0aCAtIE1FTlVfQlVUVE9OX1dSQVBQLm9mZnNldExlZnQpIC0gTUVOVV9CVVRUT05fV1JBUFAub2Zmc2V0V2lkdGg7XHJcbiAgICBsZXQgYWJzb2x1dGVCdXR0b25Qb3NZID0gTUVOVV9CVVRUT05fV1JBUFAub2Zmc2V0VG9wO1xyXG5cclxuICAgIE1FTlVfQlVUVE9OLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuXHJcbiAgICAgIHRodW1iID0gIXRodW1iXHJcbiAgICAgIGJ1dHRvblBvc2l0aW9uKGFic29sdXRlQnV0dG9uUG9zWCwgYWJzb2x1dGVCdXR0b25Qb3NZKTtcclxuXHJcbiAgICAgIE1FTlVfQlVUVE9OLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xyXG4gICAgICBNRU5VLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xyXG5cclxuICAgIH0pXHJcblxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgIGJ1dHRvblBvc2l0aW9uKGFic29sdXRlQnV0dG9uUG9zWCwgYWJzb2x1dGVCdXR0b25Qb3NZKTtcclxuICAgIH0pXHJcblxyXG4gIH1cclxuXHJcbn0pXHJcblxyXG5cclxuZnVuY3Rpb24gYnV0dG9uUG9zaXRpb24oYWJzb2x1dGVCdXR0b25Qb3NYLCBhYnNvbHV0ZUJ1dHRvblBvc1kpIHtcclxuICAvLyDQv9C+0LfQuNGG0LjRjyDQutC90L7Qv9C60Lgg0LzQtdC90Y4g0L/QviBYLFkgINC/0YDQuCBmaXhlZCDQv9C+0LfQuNGG0LjQvtC90LjRgNC+0LLQsNC90LjQuFxyXG4gIGxldCBmaXhlZEJ1dHRvblBvc1kgPSBNRU5VX0JVVFRPTl9XUkFQUC5vZmZzZXRUb3BcclxuICBsZXQgZml4ZWRCdXR0b25Qb3NYID0gKHdpbmRvdy5pbm5lcldpZHRoIC0gQ09OVEFJTkVSLm9mZnNldFdpZHRoKSAvIDJcclxuICBNRU5VX0JVVFRPTl9XUkFQUC5zdHlsZS5wb3NpdGlvbiA9IHRodW1iID8gXCJmaXhlZFwiIDogXCJhYnNvbHV0ZVwiO1xyXG4gIE1FTlVfQlVUVE9OX1dSQVBQLnN0eWxlLnJpZ2h0ID0gdGh1bWIgPyBgJHtmaXhlZEJ1dHRvblBvc1h9cHhgIDogYCR7YWJzb2x1dGVCdXR0b25Qb3NYfXB4YDtcclxuICBNRU5VX0JVVFRPTl9XUkFQUC5zdHlsZS50b3AgPSB0aHVtYiA/IGAke2ZpeGVkQnV0dG9uUG9zWX1weGAgOiBgJHthYnNvbHV0ZUJ1dHRvblBvc1l9cHhgO1xyXG59IiwiY29uc3QgbW9kYWxCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWwtYnV0dG9uJyk7XHJcbmNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLW92ZXJsYXknKTtcclxuY29uc3QgbG9naW5CdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9naW4tYnV0dG9uJylcclxuY29uc3QgV0VMQ09NX0NPTlRBSU5FUiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53ZWxjb20tY29udGFpbmVyJylcclxuXHJcbmlmKG1vZGFsICE9PSBudWxsKSB7XHJcblxyXG4gIGxvZ2luQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuXHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgV0VMQ09NX0NPTlRBSU5FUi5zdHlsZS5vcGFjaXR5ID0gJzAnO1xyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG4gICAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgIH0sIDUwMClcclxuXHJcbiAgfSlcclxuXHJcbiAgbW9kYWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcblxyXG4gICAgbW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcblxyXG5cclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuICAgICAgV0VMQ09NX0NPTlRBSU5FUi5zdHlsZS5vcGFjaXR5ID0gJzEnO1xyXG4gICAgfSwgNTAwKVxyXG5cclxuICB9KVxyXG5cclxufVxyXG4iLCJjb25zdCBwYXJhbGF4ID0gKGZ1bmN0aW9uKCkge1xyXG5cclxuICBsZXQgdXNlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVyb19fYXZhdGFyXCIpXHJcbiAgbGV0IHNlY3Rpb25UZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZXJvX19iZy13b3JkXCIpXHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBtb3ZlKGJsb2NrLCB3aW5kb3dTY3JvbGwsIHN0cmFmZUFtb3VudCwgeFBvcykge1xyXG4gICAgICBsZXQgc3RyYWZlID0gd2luZG93U2Nyb2xsIC8gLXN0cmFmZUFtb3VudDtcclxuICAgICAgbGV0IHN0eWxlID0gYmxvY2suc3R5bGU7XHJcbiAgICAgIC8vINC/0LXRgNC10LTQsNGOIHRyYW5zbGF0ZSDQv9C+IHgsINGCLtC6LiDQt9C90LDRh9C10L3QuNGPINGDINCy0YHQtdGFINGN0LvQtdC80LXQvdGC0L7QsiDRgNCw0LfQvdGL0LVcclxuICAgICAgbGV0IHRyYW5zZm9ybVN0cmluZyA9IGB0cmFuc2xhdGUzZCgke3hQb3N9JSwgJHstNTAgKyBzdHJhZmV9JSwgMClgXHJcbiAgICAgIHN0eWxlLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVN0cmluZztcclxuICAgIH0sXHJcbiAgICBpbml0KHdTY3JvbGwpIHtcclxuICAgICAgdGhpcy5tb3ZlKHVzZXIsIHdTY3JvbGwsIDMsIC01MClcclxuICAgICAgdGhpcy5tb3ZlKHNlY3Rpb25UZXh0LCB3U2Nyb2xsLCAyMCwgMClcclxuICAgIH1cclxuICB9XHJcblxyXG59KCkpXHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBmdW5jdGlvbigpIHtcclxuXHJcbiAgbGV0IHdTY3JvbGwgPSB3aW5kb3cucGFnZVlPZmZzZXRcclxuXHJcbiAgcGFyYWxheC5pbml0KHdTY3JvbGwpO1xyXG5cclxuXHJcbn0pIiwiY29uc3QgcGFyYWxheENvbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2VsY29tZV9fcGFyYWxheCcpO1xyXG5jb25zdCBsYXllcnMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdwYXJhbGF4X19sYXllcicpKTtcclxuXHJcbmlmKHBhcmFsYXhDb250ICE9PSBudWxsKSB7XHJcblxyXG4gIGNvbnN0IG1vdmVMYXllcnMgPSAoZSkgPT4ge1xyXG4gICAgXHJcbiAgICBjb25zdCBpbml0aWFsWCA9ICh3aW5kb3cuaW5uZXJXaWR0aC8yKSAtIGUucGFnZVg7XHJcbiAgICBjb25zdCBpbml0aWFsWSA9ICh3aW5kb3cuaW5uZXJIZWlnaHQvMikgLSBlLnBhZ2VZO1xyXG5cclxuICAgIGxldCBpID0gMDtcclxuXHJcbiAgICBmb3IgKGxldCBsYXllciBvZiBsYXllcnMpIHtcclxuXHJcbiAgICAgIGxldCBkaXZpZGVyID0gaSAvIDcwO1xyXG4gICAgICBsZXQgcG9zaXRpb25YID0gaW5pdGlhbFggKiBkaXZpZGVyO1xyXG4gICAgICBsZXQgcG9zaXRpb25ZID0gaW5pdGlhbFkgKiBkaXZpZGVyO1xyXG5cclxuICAgICAgbGF5ZXIuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZSgke3Bvc2l0aW9uWH1weCwgJHtwb3NpdGlvbll9cHgpYFxyXG4gICAgXHJcbiAgICAgIGkrKztcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgbW92ZUxheWVycyk7XHJcblxyXG59XHJcblxyXG5cclxuXHJcbiIsImxldCB3cmFwcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWN0cy1mb3JtJylcclxubGV0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFjdHMtZm9ybV9fYmx1cicpXHJcbmxldCBpbWdCZ1dyYXBwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZlZWRiYWNrX19iZycpXHJcbmxldCBpbWdCZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mZWVkYmFja19fYmctaW1nJylcclxuXHJcbmlmKHdyYXBwICE9PSBudWxsKSB7XHJcbiAgbGV0IGJsdXIgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc2V0KCkge1xyXG4gICAgICAgIGxldCBpbWdXaWR0aCA9IGltZ0JnV3JhcHAub2Zmc2V0V2lkdGgsXHJcbiAgICAgICAgICAgIGltZ1NpemVUb3AgPSBpbWdCZy5vZmZzZXRUb3AsXHJcbiAgICAgICAgICAgIHBvc0xlZnQgPSAtd3JhcHAub2Zmc2V0TGVmdCxcclxuICAgICAgICAgICAgcG9zVG9wID0gLSh3cmFwcC5vZmZzZXRUb3AgLSBpbWdTaXplVG9wKSxcclxuICAgICAgICAgICAgYmx1ckNTUyA9IGZvcm0uc3R5bGU7XHJcblxyXG4gICAgICAgIGJsdXJDU1MuYmFja2dyb3VuZFNpemUgPSBgJHtpbWdXaWR0aH1weCBhdXRvYFxyXG4gICAgICAgIGJsdXJDU1MuYmFja2dyb3VuZFBvc2l0aW9uID0gYCR7cG9zTGVmdH1weCAke3Bvc1RvcH1weGBcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0oKSlcclxuXHJcbiAgd2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgYmx1ci5zZXQoKTtcclxuICB9XHJcblxyXG5cclxuICB3aW5kb3cub25yZXNpemUgPSBmdW5jdGlvbigpIHtcclxuICAgIGJsdXIuc2V0KCk7XHJcbiAgfSAgXHJcbn1cclxuXHJcbiIsIi8vIGJ1dHRvbnMgc2xpZGVyXHJcblxyXG5sZXQgc2xpZGVyU3RhcnQgPSBuZXcgU2xpZGVyKHtcclxuICBjb250YWluZXJWaWV3OiAnLnNsaWRlcl9fdmlld3MtbGlzdCcsXHJcbiAgY29udGFpbmVyTGVmdDogJy5idXR0b25zLWxlZnRfX2xpc3QnLFxyXG4gIGNvbnRhaW5lclJpZ2h0OiAnLmJ1dHRvbnMtcmlnaHRfX2xpc3QnLFxyXG4gIHNsaWRlckluZm86Jy5zbGlkZXJfX2luZm8tbGlzdCcsXHJcbiAgc2xpZGU6ICcuc2xpZGUnLFxyXG4gIGJ1dHRvbnNMZWZ0OiAnLnNsaWRlcl9fYnV0dG9ucy1sZWZ0IC5zbGlkZXJfX2J1dHRvbnMtaW1nJyxcclxuICBidXR0b25zUmlnaHQ6ICcuc2xpZGVyX19idXR0b25zLXJpZ2h0IC5zbGlkZXJfX2J1dHRvbnMtaW1nJyxcclxuICBkdXJhdGlvbjogJzQwMCcsXHJcblxyXG59KTtcclxuXHJcbmZ1bmN0aW9uIFNsaWRlcihvcHRpb25zKSB7XHJcbiAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gIHRoYXQuY291bnRlciA9IDA7XHJcbiAgdGhhdC5jb3VudGVyUHJldjtcclxuICB0aGF0LmNvdW50ZXJOZXh0O1xyXG4gIHRoYXQuaW5Qcm9jZXNzID0gZmFsc2U7XHJcbiAgdGhhdC5jb250YWluZXJWaWV3ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihvcHRpb25zLmNvbnRhaW5lclZpZXcpO1xyXG4gIHRoYXQuY29udGFpbmVyTGVmdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Iob3B0aW9ucy5jb250YWluZXJMZWZ0KTtcclxuICB0aGF0LmNvbnRhaW5lclJpZ2h0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihvcHRpb25zLmNvbnRhaW5lclJpZ2h0KTtcclxuXHJcbiAgdGhhdC5zbGlkZXJJbmZvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihvcHRpb25zLnNsaWRlckluZm8pO1xyXG5cclxuICBpZighdGhhdC5jb250YWluZXJWaWV3ICYmICF0aGF0LmNvbnRhaW5lckxlZnQgJiYgIXRoYXQuY29udGFpbmVyUmlnaHQpIHtcclxuICAgIHJldHVyblxyXG4gIH0gZWxzZSB7XHJcbiAgICB0aGF0LmxlbmdodENoaWxkID0gTWF0aC5tYXgoXHJcbiAgICAgIEFycmF5LmZyb20odGhhdC5jb250YWluZXJWaWV3LnF1ZXJ5U2VsZWN0b3JBbGwob3B0aW9ucy5zbGlkZSkpLmxlbmd0aCxcclxuICAgICAgQXJyYXkuZnJvbSh0aGF0LmNvbnRhaW5lckxlZnQucXVlcnlTZWxlY3RvckFsbChvcHRpb25zLnNsaWRlKSkubGVuZ3RoLFxyXG4gICAgICBBcnJheS5mcm9tKHRoYXQuY29udGFpbmVyUmlnaHQucXVlcnlTZWxlY3RvckFsbChvcHRpb25zLnNsaWRlKSkubGVuZ3RoXHJcbiAgICApO1xyXG4gIH1cclxuICBcclxuICB0aGF0LmJ1dHRvbnNMZWZ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihvcHRpb25zLmJ1dHRvbnNMZWZ0KTtcclxuICB0aGF0LmJ1dHRvbnNSaWdodCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Iob3B0aW9ucy5idXR0b25zUmlnaHQpO1xyXG4gIHRoYXQuZHVyYXRpb24gPSBvcHRpb25zLmR1cmF0aW9uO1xyXG4gIFxyXG4gIHRoYXQubW92ZVNsaWRlID0gZnVuY3Rpb24oY29udGFpbmVyLCBvcmllbnRhdGlvbiwgZGlyZWN0aW9uKSB7XHJcblxyXG4gICAgbGV0IGl0ZW1zID0gQXJyYXkuZnJvbShjb250YWluZXIuY2hpbGRyZW4pO1xyXG4gICAgbGV0IGFjdGl2ZUl0ZW0gPSB7fTtcclxuICAgIGxldCByZXFJdGVtO1xyXG4gICAgbGV0IHZpZXdJZHg7XHJcbiAgICBcclxuICAgIGl0ZW1zLmZvckVhY2goKGVsLCBpKT0+IHtcclxuICAgICAgaWYoZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xyXG4gICAgICAgIGFjdGl2ZUl0ZW0uZWxlbSA9IGVsLFxyXG4gICAgICAgIGFjdGl2ZUl0ZW0uaW5kZXggPSBpXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGlmKHRoYXQuY291bnRlciA+PSBpdGVtcy5sZW5ndGgpIHRoYXQuY291bnRlciA9IDA7XHJcbiAgICBpZih0aGF0LmNvdW50ZXIgPCAwKSB0aGF0LmNvdW50ZXIgPSBpdGVtcy5sZW5ndGggLSAxO1xyXG4gICAgdGhhdC5jb3VudFNsaWRlKCBhY3RpdmVJdGVtLmluZGV4LCB0aGF0LmxlbmdodENoaWxkKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKGFjdGl2ZUl0ZW0uaW5kZXgpO1xyXG4gICAgaWYob3JpZW50YXRpb24gPT09ICdwcmV2Jykge1xyXG4gICAgICByZXFJdGVtID0gaXRlbXNbdGhhdC5jb3VudGVyUHJldl07XHJcbiAgICAgIHZpZXdJZHggPSB0aGF0LmNvdW50ZXJQcmV2O1xyXG4gICAgfVxyXG5cclxuICAgIGlmKG9yaWVudGF0aW9uID09PSAnbmV4dCcpIHtcclxuICAgICAgcmVxSXRlbSA9IGl0ZW1zW3RoYXQuY291bnRlck5leHRdO1xyXG4gICAgICB2aWV3SWR4ID0gdGhhdC5jb3VudGVyTmV4dDtcclxuICAgIH1cclxuICAgIGFjdGl2ZUl0ZW0gPSBhY3RpdmVJdGVtLmVsZW07XHJcblxyXG4gICAgaWYoIWRpcmVjdGlvbikge1xyXG4gICAgICBhY3RpdmVJdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICByZXFJdGVtLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICB0aGF0LnNsaWRlckluZm9GaWxsKHRoYXQuc2xpZGVySW5mbywgdGhhdC5jb250YWluZXJWaWV3LCB2aWV3SWR4KVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYW5pbWF0ZSh7XHJcbiAgICAgICAgZHVyYXRpb246IHRoYXQuZHVyYXRpb24sXHJcbiAgICAgICAgZHJhdyhwcm9ncmVzcykge1xyXG4gICAgICAgICAgYWN0aXZlSXRlbS5zdHlsZS50b3AgPSAoZGlyZWN0aW9uID09PSAnZG93bicpID8gYCR7cHJvZ3Jlc3N9JWAgOiBgJHstcHJvZ3Jlc3N9JWA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICBcclxuICAgICAgYW5pbWF0ZSh7XHJcbiAgICAgICAgZHVyYXRpb246IHRoYXQuZHVyYXRpb24sXHJcbiAgICAgICAgZHJhdyhwcm9ncmVzcykge1xyXG4gICAgICAgICAgcmVxSXRlbS5zdHlsZS50b3AgPSAoZGlyZWN0aW9uID09PSAnZG93bicpID8gYCR7KC0xMDApICsgcHJvZ3Jlc3N9JWAgOiBgJHsxMDAgLSBwcm9ncmVzc30lYDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGFmdGVyKCkge1xyXG4gICAgICAgICAgYWN0aXZlSXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgICAgIHJlcUl0ZW0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgICAgICB0aGF0LmluUHJvY2VzcyA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB0aGF0LmluaXQgPSBmdW5jdGlvbigpIHtcclxuICAgIC8vIGNhbGN1bGF0aW9uIGNvdW50ZXJzXHJcbiAgICB0aGF0LmNvdW50U2xpZGUodGhhdC5jb3VudGVyLCB0aGF0LmxlbmdodENoaWxkKTtcclxuICAgIC8vIGNhbGN1bGF0aW9uIGNvdW50ZXJzXHJcblxyXG4gICAgLy8gaW5pdGlhbCBmaXJzdCBzbGlkZXNcclxuICAgIHRoYXQuc2xpZGVJbml0KHRoYXQuY29udGFpbmVyVmlldywgdGhhdC5jb3VudGVyKTtcclxuICAgIHRoYXQuc2xpZGVJbml0KHRoYXQuY29udGFpbmVyTGVmdCwgdGhhdC5jb3VudGVyUHJldik7XHJcbiAgICB0aGF0LnNsaWRlSW5pdCh0aGF0LmNvbnRhaW5lclJpZ2h0LCB0aGF0LmNvdW50ZXJOZXh0KTtcclxuICAgIC8vIGluaXRpYWwgZmlyc3Qgc2xpZGVzXHJcbiAgICB0aGF0LnNsaWRlckluZm9GaWxsKHRoYXQuc2xpZGVySW5mbywgdGhhdC5jb250YWluZXJWaWV3LCB0aGF0LmNvdW50ZXIpXHJcbiAgICAvLyBsaXN0ZW5lcnNcclxuICAgIHRoYXQuYnV0dG9uc0xlZnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+IHtcclxuICAgICAgaWYoIXRoYXQuaW5Qcm9jZXNzKSB7XHJcbiAgICAgICAgdGhhdC5pblByb2Nlc3MgPSB0cnVlO1xyXG4gICAgICAgIHRoYXQubW92ZVNsaWRlKHRoYXQuY29udGFpbmVyVmlldywgJ3ByZXYnKTtcclxuICAgICAgICB0aGF0Lm1vdmVTbGlkZSh0aGF0LmNvbnRhaW5lckxlZnQsICAncHJldicsICdkb3duJyk7XHJcbiAgICAgICAgdGhhdC5tb3ZlU2xpZGUodGhhdC5jb250YWluZXJSaWdodCwgICdwcmV2JywgJ3VwJyk7XHJcbiAgICAgICAgLy8gdGhhdC5jb3VudGVyLS07XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgdGhhdC5idXR0b25zUmlnaHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+IHtcclxuICAgICAgaWYoIXRoYXQuaW5Qcm9jZXNzKSB7XHJcbiAgICAgICAgdGhhdC5pblByb2Nlc3MgPSB0cnVlO1xyXG4gICAgICAgIHRoYXQubW92ZVNsaWRlKHRoYXQuY29udGFpbmVyVmlldywgJ25leHQnKTtcclxuICAgICAgICB0aGF0Lm1vdmVTbGlkZSh0aGF0LmNvbnRhaW5lckxlZnQsICduZXh0JywgJ2Rvd24nKTtcclxuICAgICAgICB0aGF0Lm1vdmVTbGlkZSh0aGF0LmNvbnRhaW5lclJpZ2h0LCAnbmV4dCcsICd1cCcpO1xyXG4gICAgICAgIC8vIHRoYXQuY291bnRlcisrO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIC8vIGxpc3RlbmVyc1xyXG4gIH1cclxuXHJcbiAgdGhhdC5zbGlkZUluaXQgPSAoY29udGFpbmVyLCBpKT0+IHtcclxuICAgIGxldCBjaGlsZCA9IGNvbnRhaW5lci5jaGlsZHJlbjtcclxuICAgIGNoaWxkW2ldLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gIH1cclxuXHJcbiAgdGhhdC5zbGlkZXJJbmZvRmlsbCA9IChjb250YWluZXIsIGdldEF0dHJDb250YWluZXIsIGkpID0+IHtcclxuXHJcbiAgICBsZXQgdmlld1RpdGxlID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5pbmZvLWl0ZW1fX3RpdGxlJyksXHJcbiAgICB2aWV3RGVzYyA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuaW5mby1pdGVtX19kZXNjJyksXHJcbiAgICB2aWV3TGluayA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuaW5mby1pdGVtX19saW5rJyk7XHJcblxyXG4gICAgbGV0IGNoaWxkID0gQXJyYXkuZnJvbShnZXRBdHRyQ29udGFpbmVyLmNoaWxkcmVuKTtcclxuICAgIGlmKGkgPj0gY2hpbGQubGVuZ3RoKSBpID0gMFxyXG4gICAgaWYoaSA8IDApIGkgPSBjaGlsZC5sZW5ndGggLSAxXHJcbiAgICBsZXQgdGl0bGUgPSBjaGlsZFtpXS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGl0bGUnKSxcclxuICAgIGRlc2MgPSBjaGlsZFtpXS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGVjaG5vbG9neScpLFxyXG4gICAgbGluayA9IGNoaWxkW2ldLmdldEF0dHJpYnV0ZSgnZGF0YS1saW5rJyk7XHJcbiAgICB0aXRsZSA9IHRpdGxlLnNwbGl0KCcnKTtcclxuICAgIGRlc2MgPSBkZXNjLnNwbGl0KCcnKTtcclxuICBcclxuICAgIHNwbGl0V29yZCh0aXRsZSlcclxuICAgIHNwbGl0V29yZChkZXNjKVxyXG4gICAgdmlld0xpbmsuaHJlZiA9IGxpbms7XHJcbiAgXHJcbiAgICBhbmltYXRlKHtcclxuICAgICAgZHVyYXRpb246IHRoYXQuZHVyYXRpb24sXHJcbiAgICAgIGRyYXcocHJvZ3Jlc3MpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyggIE1hdGgucm91bmQodGhhdC5kdXJhdGlvbi90aXRsZS5sZW5ndGgpICApO1xyXG4gICAgICAgIC8vIHZpZXdUaXRsZS5hcHBlbmRDaGlsZCh0aXRsZVtdKVxyXG4gICAgICAgIC8vIHZpZXdEZXNjLmFwcGVuZENoaWxkKGRlc2NbXSlcclxuICAgICAgfX0pXHJcbiAgICBcclxuICAgIC8vIGNvbnNvbGUubG9nKHRpdGxlLmxlbmd0aCk7XHJcbiAgfVxyXG4gIFxyXG4gIHRoYXQuY291bnRTbGlkZSA9IChjb3VudGVyLCBhcnJTbGlkZSk9PiB7XHJcbiAgICBpZihjb3VudGVyID09PSBhcnJTbGlkZSAtIDEpIHtcclxuICAgICAgdGhhdC5jb3VudGVyTmV4dCA9IDBcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoYXQuY291bnRlck5leHQgPSBjb3VudGVyICsgMVxyXG4gICAgfVxyXG4gICAgaWYoY291bnRlciA9PT0gMCkge1xyXG4gICAgICB0aGF0LmNvdW50ZXJQcmV2ID0gYXJyU2xpZGUgLSAxXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGF0LmNvdW50ZXJQcmV2ID0gY291bnRlciAtIDFcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHRoYXQuaW5pdCgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzcGxpdFdvcmQoYXJyKSB7XHJcbiAgaWYoIUFycmF5LmlzQXJyYXkoYXJyKSkge1xyXG4gICAgY29uc29sZS5lcnJvcignbm90IGFycmF5ISEhJyk7XHJcbiAgfVxyXG4gIFxyXG4gIC8vIG5vZGVFbGVtLnRleHRDb250ZW50ID0gJyc7XHJcbiAgYXJyLmZvckVhY2goKGVsLGkpPT4ge1xyXG4gICAgbGV0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICBzcGFuLnRleHRDb250ZW50ID0gZWw7XHJcbiAgICBhcnJbaV0gPSBzcGFuXHJcbiAgfSlcclxuICByZXR1cm4gYXJyO1xyXG59XHJcblxyXG4vLyA9PT0gIFJBRiAgPT09XHJcbmZ1bmN0aW9uIGFuaW1hdGUoe2RyYXcsIGR1cmF0aW9uLCBhZnRlcn0pIHtcclxuXHJcbiAgbGV0IHN0YXJ0ID0gcGVyZm9ybWFuY2Uubm93KCk7XHJcbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uIGFuaW1hdGUodGltZSkge1xyXG4gICAgLy8gdGltZUZyYWN0aW9uIGdvZXMgZnJvbSAwIHRvIDFcclxuICAgIGxldCB0aW1lRnJhY3Rpb24gPSAoKHRpbWUgLSBzdGFydCkpO1xyXG5cclxuICAgIGlmKHRpbWVGcmFjdGlvbiA8PSAwKSB0aW1lRnJhY3Rpb24gPSAxO1xyXG4gICAgaWYgKHRpbWVGcmFjdGlvbiA+IGR1cmF0aW9uKSB0aW1lRnJhY3Rpb24gPSBkdXJhdGlvbjtcclxuICAgIC8vIGNhbGN1bGF0ZSB0aGUgY3VycmVudCBhbmltYXRpb24gc3RhdGVcclxuICAgIGxldCBwcm9ncmVzcyA9ICh0aW1lRnJhY3Rpb24gLyBkdXJhdGlvbikgKiAxMDBcclxuICAgIFxyXG4gICAgZHJhdyhwcm9ncmVzcyk7IC8vIGRyYXcgaXRcclxuXHJcbiAgICBpZiAodGltZUZyYWN0aW9uIDwgZHVyYXRpb24pIHtcclxuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpO1xyXG4gICAgfSBlbHNlIGlmKHRpbWVGcmFjdGlvbiA+PSBkdXJhdGlvbiAmJiBhZnRlcikge1xyXG4gICAgICBhZnRlcigpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcbiIsIid1c2Ugc3RyaWN0J1xyXG5cclxuLy8gc3ZnIHBvbHlmaWxsXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0vL1xyXG5pbXBvcnQgc3ZnNGV2ZXJ5Ym9keSBmcm9tICdzdmc0ZXZlcnlib2R5JztcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PS8vXHJcblxyXG5zdmc0ZXZlcnlib2R5KClcclxuXHJcbi8vIGltcG9ydCBmb250YXdlc29tZSBmcm9tIFwiZm9udC1hd2Vzb21lXCJcclxuLy8gZm9udGF3ZXNvbWUuZG9tLmkyc3ZnKClcclxuXHJcbmltcG9ydCAnLi9jb21tb24vbWFpbic7XHJcbmltcG9ydCAnLi9jb21tb24vbW9kYWwnO1xyXG5pbXBvcnQgJy4vY29tbW9uL21lbnUnO1xyXG5pbXBvcnQgJy4vY29tbW9uL3dvcmsnO1xyXG5pbXBvcnQgJy4vY29tbW9uL3BhcmFsYXgnO1xyXG5pbXBvcnQgJy4vY29tbW9uL3BhcmFsYXgtc2Nyb2xsJztcclxuaW1wb3J0ICcuL2NvbW1vbi93b3Jrcy1zbGlkZXInO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9