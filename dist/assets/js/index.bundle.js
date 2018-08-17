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
// const modalButton = document.getElementById('modal-button');
// const modal = document.querySelector('.modal-overlay');
// const loginButton = document.getElementById('login-button')
// const WELCOM_CONTAINER = document.querySelector('.welcom-container')

// if(modal !== null) {

//   loginButton.addEventListener('click', (e) => {

//     e.preventDefault();

//     WELCOM_CONTAINER.style.opacity = '0';
//     setTimeout(function(){
//       modal.classList.add('active');
//     }, 500)

//   })

//   modalButton.addEventListener('click', () => {

//     modal.classList.remove('active');


//     setTimeout(function(){
//       WELCOM_CONTAINER.style.opacity = '1';
//     }, 500)

//   })

// }


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

        // console.log(imgWidth);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N2ZzRldmVyeWJvZHkvZGlzdC9zdmc0ZXZlcnlib2R5LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21tb24vbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tbW9uL21lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbW1vbi9tb2RhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tbW9uL3BhcmFsYXgtc2Nyb2xsLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21tb24vcGFyYWxheC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tbW9uL3dvcmsuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2luZGV4LmpzIl0sIm5hbWVzIjpbIndlbGNvbUJ1dHRvbiIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ0b0dlbmVyYWwiLCJiYWNrQnV0dG9uIiwicXVlcnlTZWxlY3RvciIsImZsaXBwIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsYXNzTGlzdCIsImFkZCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInJlbW92ZSIsIk1FTlVfQlVUVE9OIiwiTUVOVV9CVVRUT05fV1JBUFAiLCJNRU5VIiwiQ09OVEFJTkVSIiwidGh1bWIiLCJ3aW5kb3ciLCJhYnNvbHV0ZUJ1dHRvblBvc1giLCJvZmZzZXRXaWR0aCIsIm9mZnNldExlZnQiLCJhYnNvbHV0ZUJ1dHRvblBvc1kiLCJvZmZzZXRUb3AiLCJidXR0b25Qb3NpdGlvbiIsInRvZ2dsZSIsImZpeGVkQnV0dG9uUG9zWSIsImZpeGVkQnV0dG9uUG9zWCIsImlubmVyV2lkdGgiLCJzdHlsZSIsInBvc2l0aW9uIiwicmlnaHQiLCJ0b3AiLCJwYXJhbGF4IiwidXNlciIsInNlY3Rpb25UZXh0IiwibW92ZSIsImJsb2NrIiwid2luZG93U2Nyb2xsIiwic3RyYWZlQW1vdW50IiwieFBvcyIsInN0cmFmZSIsInRyYW5zZm9ybVN0cmluZyIsInRyYW5zZm9ybSIsImluaXQiLCJ3U2Nyb2xsIiwicGFnZVlPZmZzZXQiLCJwYXJhbGF4Q29udCIsImxheWVycyIsIkFycmF5IiwicHJvdG90eXBlIiwic2xpY2UiLCJjYWxsIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsIm1vdmVMYXllcnMiLCJpbml0aWFsWCIsInBhZ2VYIiwiaW5pdGlhbFkiLCJpbm5lckhlaWdodCIsInBhZ2VZIiwiaSIsImxheWVyIiwiZGl2aWRlciIsInBvc2l0aW9uWCIsInBvc2l0aW9uWSIsIndyYXBwIiwiZm9ybSIsImltZ0JnV3JhcHAiLCJpbWdCZyIsImJsdXIiLCJzZXQiLCJpbWdXaWR0aCIsImltZ1NpemVUb3AiLCJwb3NMZWZ0IiwicG9zVG9wIiwiYmx1ckNTUyIsImJhY2tncm91bmRTaXplIiwiYmFja2dyb3VuZFBvc2l0aW9uIiwib25sb2FkIiwib25yZXNpemUiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7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QUV6QlQsU0FBS0MsR0FBTDtBQUVELEdBSkQ7O0FBT0FwRCxTQUFPNkQsUUFBUCxHQUFrQixZQUFXOztBQUUzQlYsU0FBS0MsR0FBTDtBQUVELEdBSkQ7QUFLRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4Q0Q7O0FBRUE7QUFDQTs7QUFDQTs7OztBQVFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7O0FBYkE7O0FBRUE7O0FBRUE7QUFDQSwwQiIsImZpbGUiOiJpbmRleC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9hc3NldHMvanMvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2pzL2luZGV4LmpzXCIpO1xuIiwiIWZ1bmN0aW9uKHJvb3QsIGZhY3RvcnkpIHtcbiAgICBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIGRlZmluZSAmJiBkZWZpbmUuYW1kID8gLy8gQU1ELiBSZWdpc3RlciBhcyBhbiBhbm9ueW1vdXMgbW9kdWxlIHVubGVzcyBhbWRNb2R1bGVJZCBpcyBzZXRcbiAgICBkZWZpbmUoW10sIGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gcm9vdC5zdmc0ZXZlcnlib2R5ID0gZmFjdG9yeSgpO1xuICAgIH0pIDogXCJvYmplY3RcIiA9PSB0eXBlb2YgbW9kdWxlICYmIG1vZHVsZS5leHBvcnRzID8gLy8gTm9kZS4gRG9lcyBub3Qgd29yayB3aXRoIHN0cmljdCBDb21tb25KUywgYnV0XG4gICAgLy8gb25seSBDb21tb25KUy1saWtlIGVudmlyb25tZW50cyB0aGF0IHN1cHBvcnQgbW9kdWxlLmV4cG9ydHMsXG4gICAgLy8gbGlrZSBOb2RlLlxuICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpIDogcm9vdC5zdmc0ZXZlcnlib2R5ID0gZmFjdG9yeSgpO1xufSh0aGlzLCBmdW5jdGlvbigpIHtcbiAgICAvKiEgc3ZnNGV2ZXJ5Ym9keSB2Mi4xLjkgfCBnaXRodWIuY29tL2pvbmF0aGFudG5lYWwvc3ZnNGV2ZXJ5Ym9keSAqL1xuICAgIGZ1bmN0aW9uIGVtYmVkKHBhcmVudCwgc3ZnLCB0YXJnZXQpIHtcbiAgICAgICAgLy8gaWYgdGhlIHRhcmdldCBleGlzdHNcbiAgICAgICAgaWYgKHRhcmdldCkge1xuICAgICAgICAgICAgLy8gY3JlYXRlIGEgZG9jdW1lbnQgZnJhZ21lbnQgdG8gaG9sZCB0aGUgY29udGVudHMgb2YgdGhlIHRhcmdldFxuICAgICAgICAgICAgdmFyIGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpLCB2aWV3Qm94ID0gIXN2Zy5oYXNBdHRyaWJ1dGUoXCJ2aWV3Qm94XCIpICYmIHRhcmdldC5nZXRBdHRyaWJ1dGUoXCJ2aWV3Qm94XCIpO1xuICAgICAgICAgICAgLy8gY29uZGl0aW9uYWxseSBzZXQgdGhlIHZpZXdCb3ggb24gdGhlIHN2Z1xuICAgICAgICAgICAgdmlld0JveCAmJiBzdmcuc2V0QXR0cmlidXRlKFwidmlld0JveFwiLCB2aWV3Qm94KTtcbiAgICAgICAgICAgIC8vIGNvcHkgdGhlIGNvbnRlbnRzIG9mIHRoZSBjbG9uZSBpbnRvIHRoZSBmcmFnbWVudFxuICAgICAgICAgICAgZm9yICgvLyBjbG9uZSB0aGUgdGFyZ2V0XG4gICAgICAgICAgICB2YXIgY2xvbmUgPSB0YXJnZXQuY2xvbmVOb2RlKCEwKTsgY2xvbmUuY2hpbGROb2Rlcy5sZW5ndGg7ICkge1xuICAgICAgICAgICAgICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKGNsb25lLmZpcnN0Q2hpbGQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gYXBwZW5kIHRoZSBmcmFnbWVudCBpbnRvIHRoZSBzdmdcbiAgICAgICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChmcmFnbWVudCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gbG9hZHJlYWR5c3RhdGVjaGFuZ2UoeGhyKSB7XG4gICAgICAgIC8vIGxpc3RlbiB0byBjaGFuZ2VzIGluIHRoZSByZXF1ZXN0XG4gICAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIC8vIGlmIHRoZSByZXF1ZXN0IGlzIHJlYWR5XG4gICAgICAgICAgICBpZiAoNCA9PT0geGhyLnJlYWR5U3RhdGUpIHtcbiAgICAgICAgICAgICAgICAvLyBnZXQgdGhlIGNhY2hlZCBodG1sIGRvY3VtZW50XG4gICAgICAgICAgICAgICAgdmFyIGNhY2hlZERvY3VtZW50ID0geGhyLl9jYWNoZWREb2N1bWVudDtcbiAgICAgICAgICAgICAgICAvLyBlbnN1cmUgdGhlIGNhY2hlZCBodG1sIGRvY3VtZW50IGJhc2VkIG9uIHRoZSB4aHIgcmVzcG9uc2VcbiAgICAgICAgICAgICAgICBjYWNoZWREb2N1bWVudCB8fCAoY2FjaGVkRG9jdW1lbnQgPSB4aHIuX2NhY2hlZERvY3VtZW50ID0gZG9jdW1lbnQuaW1wbGVtZW50YXRpb24uY3JlYXRlSFRNTERvY3VtZW50KFwiXCIpLCBcbiAgICAgICAgICAgICAgICBjYWNoZWREb2N1bWVudC5ib2R5LmlubmVySFRNTCA9IHhoci5yZXNwb25zZVRleHQsIHhoci5fY2FjaGVkVGFyZ2V0ID0ge30pLCAvLyBjbGVhciB0aGUgeGhyIGVtYmVkcyBsaXN0IGFuZCBlbWJlZCBlYWNoIGl0ZW1cbiAgICAgICAgICAgICAgICB4aHIuX2VtYmVkcy5zcGxpY2UoMCkubWFwKGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gZ2V0IHRoZSBjYWNoZWQgdGFyZ2V0XG4gICAgICAgICAgICAgICAgICAgIHZhciB0YXJnZXQgPSB4aHIuX2NhY2hlZFRhcmdldFtpdGVtLmlkXTtcbiAgICAgICAgICAgICAgICAgICAgLy8gZW5zdXJlIHRoZSBjYWNoZWQgdGFyZ2V0XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldCB8fCAodGFyZ2V0ID0geGhyLl9jYWNoZWRUYXJnZXRbaXRlbS5pZF0gPSBjYWNoZWREb2N1bWVudC5nZXRFbGVtZW50QnlJZChpdGVtLmlkKSksIFxuICAgICAgICAgICAgICAgICAgICAvLyBlbWJlZCB0aGUgdGFyZ2V0IGludG8gdGhlIHN2Z1xuICAgICAgICAgICAgICAgICAgICBlbWJlZChpdGVtLnBhcmVudCwgaXRlbS5zdmcsIHRhcmdldCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIC8vIHRlc3QgdGhlIHJlYWR5IHN0YXRlIGNoYW5nZSBpbW1lZGlhdGVseVxuICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlKCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHN2ZzRldmVyeWJvZHkocmF3b3B0cykge1xuICAgICAgICBmdW5jdGlvbiBvbmludGVydmFsKCkge1xuICAgICAgICAgICAgLy8gd2hpbGUgdGhlIGluZGV4IGV4aXN0cyBpbiB0aGUgbGl2ZSA8dXNlPiBjb2xsZWN0aW9uXG4gICAgICAgICAgICBmb3IgKC8vIGdldCB0aGUgY2FjaGVkIDx1c2U+IGluZGV4XG4gICAgICAgICAgICB2YXIgaW5kZXggPSAwOyBpbmRleCA8IHVzZXMubGVuZ3RoOyApIHtcbiAgICAgICAgICAgICAgICAvLyBnZXQgdGhlIGN1cnJlbnQgPHVzZT5cbiAgICAgICAgICAgICAgICB2YXIgdXNlID0gdXNlc1tpbmRleF0sIHBhcmVudCA9IHVzZS5wYXJlbnROb2RlLCBzdmcgPSBnZXRTVkdBbmNlc3RvcihwYXJlbnQpLCBzcmMgPSB1c2UuZ2V0QXR0cmlidXRlKFwieGxpbms6aHJlZlwiKSB8fCB1c2UuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKTtcbiAgICAgICAgICAgICAgICBpZiAoIXNyYyAmJiBvcHRzLmF0dHJpYnV0ZU5hbWUgJiYgKHNyYyA9IHVzZS5nZXRBdHRyaWJ1dGUob3B0cy5hdHRyaWJ1dGVOYW1lKSksIFxuICAgICAgICAgICAgICAgIHN2ZyAmJiBzcmMpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBvbHlmaWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIW9wdHMudmFsaWRhdGUgfHwgb3B0cy52YWxpZGF0ZShzcmMsIHN2ZywgdXNlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJlbW92ZSB0aGUgPHVzZT4gZWxlbWVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudC5yZW1vdmVDaGlsZCh1c2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHBhcnNlIHRoZSBzcmMgYW5kIGdldCB0aGUgdXJsIGFuZCBpZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzcmNTcGxpdCA9IHNyYy5zcGxpdChcIiNcIiksIHVybCA9IHNyY1NwbGl0LnNoaWZ0KCksIGlkID0gc3JjU3BsaXQuam9pbihcIiNcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWYgdGhlIGxpbmsgaXMgZXh0ZXJuYWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodXJsLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBnZXQgdGhlIGNhY2hlZCB4aHIgcmVxdWVzdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgeGhyID0gcmVxdWVzdHNbdXJsXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZW5zdXJlIHRoZSB4aHIgcmVxdWVzdCBleGlzdHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeGhyIHx8ICh4aHIgPSByZXF1ZXN0c1t1cmxdID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCksIHhoci5vcGVuKFwiR0VUXCIsIHVybCksIHhoci5zZW5kKCksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4aHIuX2VtYmVkcyA9IFtdKSwgLy8gYWRkIHRoZSBzdmcgYW5kIGlkIGFzIGFuIGl0ZW0gdG8gdGhlIHhociBlbWJlZHMgbGlzdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4aHIuX2VtYmVkcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudDogcGFyZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ZnOiBzdmcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksIC8vIHByZXBhcmUgdGhlIHhociByZWFkeSBzdGF0ZSBjaGFuZ2UgZXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9hZHJlYWR5c3RhdGVjaGFuZ2UoeGhyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBlbWJlZCB0aGUgbG9jYWwgaWQgaW50byB0aGUgc3ZnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVtYmVkKHBhcmVudCwgc3ZnLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaW5jcmVhc2UgdGhlIGluZGV4IHdoZW4gdGhlIHByZXZpb3VzIHZhbHVlIHdhcyBub3QgXCJ2YWxpZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKytpbmRleCwgKytudW1iZXJPZlN2Z1VzZUVsZW1lbnRzVG9CeXBhc3M7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBpbmNyZWFzZSB0aGUgaW5kZXggd2hlbiB0aGUgcHJldmlvdXMgdmFsdWUgd2FzIG5vdCBcInZhbGlkXCJcbiAgICAgICAgICAgICAgICAgICAgKytpbmRleDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBjb250aW51ZSB0aGUgaW50ZXJ2YWxcbiAgICAgICAgICAgICghdXNlcy5sZW5ndGggfHwgdXNlcy5sZW5ndGggLSBudW1iZXJPZlN2Z1VzZUVsZW1lbnRzVG9CeXBhc3MgPiAwKSAmJiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUob25pbnRlcnZhbCwgNjcpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBwb2x5ZmlsbCwgb3B0cyA9IE9iamVjdChyYXdvcHRzKSwgbmV3ZXJJRVVBID0gL1xcYlRyaWRlbnRcXC9bNTY3XVxcYnxcXGJNU0lFICg/Ojl8MTApXFwuMFxcYi8sIHdlYmtpdFVBID0gL1xcYkFwcGxlV2ViS2l0XFwvKFxcZCspXFxiLywgb2xkZXJFZGdlVUEgPSAvXFxiRWRnZVxcLzEyXFwuKFxcZCspXFxiLywgZWRnZVVBID0gL1xcYkVkZ2VcXC8uKFxcZCspXFxiLywgaW5JZnJhbWUgPSB3aW5kb3cudG9wICE9PSB3aW5kb3cuc2VsZjtcbiAgICAgICAgcG9seWZpbGwgPSBcInBvbHlmaWxsXCIgaW4gb3B0cyA/IG9wdHMucG9seWZpbGwgOiBuZXdlcklFVUEudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSB8fCAobmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaChvbGRlckVkZ2VVQSkgfHwgW10pWzFdIDwgMTA1NDcgfHwgKG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2god2Via2l0VUEpIHx8IFtdKVsxXSA8IDUzNyB8fCBlZGdlVUEudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSAmJiBpbklmcmFtZTtcbiAgICAgICAgLy8gY3JlYXRlIHhociByZXF1ZXN0cyBvYmplY3RcbiAgICAgICAgdmFyIHJlcXVlc3RzID0ge30sIHJlcXVlc3RBbmltYXRpb25GcmFtZSA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgc2V0VGltZW91dCwgdXNlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwidXNlXCIpLCBudW1iZXJPZlN2Z1VzZUVsZW1lbnRzVG9CeXBhc3MgPSAwO1xuICAgICAgICAvLyBjb25kaXRpb25hbGx5IHN0YXJ0IHRoZSBpbnRlcnZhbCBpZiB0aGUgcG9seWZpbGwgaXMgYWN0aXZlXG4gICAgICAgIHBvbHlmaWxsICYmIG9uaW50ZXJ2YWwoKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZ2V0U1ZHQW5jZXN0b3Iobm9kZSkge1xuICAgICAgICBmb3IgKHZhciBzdmcgPSBub2RlOyBcInN2Z1wiICE9PSBzdmcubm9kZU5hbWUudG9Mb3dlckNhc2UoKSAmJiAoc3ZnID0gc3ZnLnBhcmVudE5vZGUpOyApIHt9XG4gICAgICAgIHJldHVybiBzdmc7XG4gICAgfVxuICAgIHJldHVybiBzdmc0ZXZlcnlib2R5O1xufSk7IiwiJ3VzZSBzdHJpY3QnXHJcblxyXG4vLyBpbXBvcnQgZm9udGF3ZXNvbWUgZnJvbSAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUtd2ViZm9udHMnXHJcbi8vIGZvbnRhd2Vzb21lLmRvbS5pMnN2ZygpXHJcblxyXG5jb25zdCB3ZWxjb21CdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXV0b3Jpc2F0aW9uLWJ1dHRvbicpO1xyXG5jb25zdCB0b0dlbmVyYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG8tZ2VuZXJhbCcpXHJcbmNvbnN0IGJhY2tCdXR0b24gPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53ZWxjb21fX2J1dHRvbicpO1xyXG5jb25zdCBmbGlwcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mbGlwcGVyJyk7XHJcblxyXG5pZiAoZmxpcHAgIT09IG51bGwpIHtcclxuXHJcbiAgd2VsY29tQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcblxyXG4gICAgZmxpcHAuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuICAgIGJhY2tCdXR0b24uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuXHJcbiAgfSlcclxuXHJcbiAgdG9HZW5lcmFsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuXHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgZmxpcHAuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICAgIGJhY2tCdXR0b24uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuXHJcbiAgfSlcclxuXHJcbn0iLCJjb25zdCBNRU5VX0JVVFRPTiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LWJ1dHRvbicpO1xyXG5jb25zdCBNRU5VX0JVVFRPTl9XUkFQUCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LWJ1dHRvbl9fd3JhcHAnKTtcclxuY29uc3QgTUVOVSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LXdyYXBwJyk7XHJcbmNvbnN0IENPTlRBSU5FUiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZXJvLWNvbnRhaW5lcicpO1xyXG5cclxubGV0IHRodW1iID0gZmFsc2VcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbigpIHtcclxuICBcclxuICBpZihNRU5VICE9PSBudWxsKSB7XHJcblxyXG4gICAgLy8g0L/QvtC30LjRhtC40Y8g0LrQvdC+0L/QutC4INC80LXQvdGOINC/0L4gWCxZICDQv9GA0Lgg0LDQsdGB0L7Qu9GO0YLQvdC+0Lwg0L/QvtC30LjRhtC40L7QvdC40YDQvtCy0LDQvdC40LhcclxuICAgIC8vINC/0L7Qt9C40YbQuNGPINC60L3QvtC/0LrQuCDQvNC10L3RjiDQv9C+IFggPSAo0YjQuNGA0LjQvdCwINC60L7QvdGC0LXQudC90LXRgNCwIC0g0YjQuNGA0LjQvdCwINC+0YIg0LrQvdC+0L/QutC4INGB0LvQtdCy0LApIC0g0YjQuNGA0LjQvdCwINGB0LDQvNC+0Lkg0LrQvdC+0L/QutC4XHJcbiAgICBsZXQgYWJzb2x1dGVCdXR0b25Qb3NYID0gKENPTlRBSU5FUi5vZmZzZXRXaWR0aCAtIE1FTlVfQlVUVE9OX1dSQVBQLm9mZnNldExlZnQpIC0gTUVOVV9CVVRUT05fV1JBUFAub2Zmc2V0V2lkdGg7XHJcbiAgICBsZXQgYWJzb2x1dGVCdXR0b25Qb3NZID0gTUVOVV9CVVRUT05fV1JBUFAub2Zmc2V0VG9wO1xyXG5cclxuICAgIE1FTlVfQlVUVE9OLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuXHJcbiAgICAgIHRodW1iID0gIXRodW1iXHJcbiAgICAgIGJ1dHRvblBvc2l0aW9uKGFic29sdXRlQnV0dG9uUG9zWCwgYWJzb2x1dGVCdXR0b25Qb3NZKTtcclxuXHJcbiAgICAgIE1FTlVfQlVUVE9OLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xyXG4gICAgICBNRU5VLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xyXG5cclxuICAgIH0pXHJcblxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgIGJ1dHRvblBvc2l0aW9uKGFic29sdXRlQnV0dG9uUG9zWCwgYWJzb2x1dGVCdXR0b25Qb3NZKTtcclxuICAgIH0pXHJcblxyXG4gIH1cclxuXHJcbn0pXHJcblxyXG5cclxuZnVuY3Rpb24gYnV0dG9uUG9zaXRpb24oYWJzb2x1dGVCdXR0b25Qb3NYLCBhYnNvbHV0ZUJ1dHRvblBvc1kpIHtcclxuICAvLyDQv9C+0LfQuNGG0LjRjyDQutC90L7Qv9C60Lgg0LzQtdC90Y4g0L/QviBYLFkgINC/0YDQuCBmaXhlZCDQv9C+0LfQuNGG0LjQvtC90LjRgNC+0LLQsNC90LjQuFxyXG4gIGxldCBmaXhlZEJ1dHRvblBvc1kgPSBNRU5VX0JVVFRPTl9XUkFQUC5vZmZzZXRUb3BcclxuICBsZXQgZml4ZWRCdXR0b25Qb3NYID0gKHdpbmRvdy5pbm5lcldpZHRoIC0gQ09OVEFJTkVSLm9mZnNldFdpZHRoKSAvIDJcclxuICBNRU5VX0JVVFRPTl9XUkFQUC5zdHlsZS5wb3NpdGlvbiA9IHRodW1iID8gXCJmaXhlZFwiIDogXCJhYnNvbHV0ZVwiO1xyXG4gIE1FTlVfQlVUVE9OX1dSQVBQLnN0eWxlLnJpZ2h0ID0gdGh1bWIgPyBgJHtmaXhlZEJ1dHRvblBvc1h9cHhgIDogYCR7YWJzb2x1dGVCdXR0b25Qb3NYfXB4YDtcclxuICBNRU5VX0JVVFRPTl9XUkFQUC5zdHlsZS50b3AgPSB0aHVtYiA/IGAke2ZpeGVkQnV0dG9uUG9zWX1weGAgOiBgJHthYnNvbHV0ZUJ1dHRvblBvc1l9cHhgO1xyXG59IiwiLy8gY29uc3QgbW9kYWxCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWwtYnV0dG9uJyk7XHJcbi8vIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLW92ZXJsYXknKTtcclxuLy8gY29uc3QgbG9naW5CdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9naW4tYnV0dG9uJylcclxuLy8gY29uc3QgV0VMQ09NX0NPTlRBSU5FUiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53ZWxjb20tY29udGFpbmVyJylcclxuXHJcbi8vIGlmKG1vZGFsICE9PSBudWxsKSB7XHJcblxyXG4vLyAgIGxvZ2luQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuXHJcbi8vICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4vLyAgICAgV0VMQ09NX0NPTlRBSU5FUi5zdHlsZS5vcGFjaXR5ID0gJzAnO1xyXG4vLyAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG4vLyAgICAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuLy8gICAgIH0sIDUwMClcclxuXHJcbi8vICAgfSlcclxuXHJcbi8vICAgbW9kYWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcblxyXG4vLyAgICAgbW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcblxyXG5cclxuLy8gICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuLy8gICAgICAgV0VMQ09NX0NPTlRBSU5FUi5zdHlsZS5vcGFjaXR5ID0gJzEnO1xyXG4vLyAgICAgfSwgNTAwKVxyXG5cclxuLy8gICB9KVxyXG5cclxuLy8gfVxyXG4iLCJjb25zdCBwYXJhbGF4ID0gKGZ1bmN0aW9uKCkge1xyXG5cclxuICBsZXQgdXNlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVyb19fYXZhdGFyXCIpXHJcbiAgbGV0IHNlY3Rpb25UZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZXJvX19iZy13b3JkXCIpXHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBtb3ZlKGJsb2NrLCB3aW5kb3dTY3JvbGwsIHN0cmFmZUFtb3VudCwgeFBvcykge1xyXG4gICAgICBsZXQgc3RyYWZlID0gd2luZG93U2Nyb2xsIC8gLXN0cmFmZUFtb3VudDtcclxuICAgICAgbGV0IHN0eWxlID0gYmxvY2suc3R5bGU7XHJcbiAgICAgIC8vINC/0LXRgNC10LTQsNGOIHRyYW5zbGF0ZSDQv9C+IHgsINGCLtC6LiDQt9C90LDRh9C10L3QuNGPINGDINCy0YHQtdGFINGN0LvQtdC80LXQvdGC0L7QsiDRgNCw0LfQvdGL0LVcclxuICAgICAgbGV0IHRyYW5zZm9ybVN0cmluZyA9IGB0cmFuc2xhdGUzZCgke3hQb3N9JSwgJHstNTAgKyBzdHJhZmV9JSwgMClgXHJcbiAgICAgIHN0eWxlLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVN0cmluZztcclxuICAgIH0sXHJcbiAgICBpbml0KHdTY3JvbGwpIHtcclxuICAgICAgdGhpcy5tb3ZlKHVzZXIsIHdTY3JvbGwsIDMsIC01MClcclxuICAgICAgdGhpcy5tb3ZlKHNlY3Rpb25UZXh0LCB3U2Nyb2xsLCAyMCwgMClcclxuICAgIH1cclxuICB9XHJcblxyXG59KCkpXHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBmdW5jdGlvbigpIHtcclxuXHJcbiAgbGV0IHdTY3JvbGwgPSB3aW5kb3cucGFnZVlPZmZzZXRcclxuXHJcbiAgcGFyYWxheC5pbml0KHdTY3JvbGwpO1xyXG5cclxuXHJcbn0pIiwiY29uc3QgcGFyYWxheENvbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2VsY29tZV9fcGFyYWxheCcpO1xyXG5jb25zdCBsYXllcnMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdwYXJhbGF4X19sYXllcicpKTtcclxuXHJcbmlmKHBhcmFsYXhDb250ICE9PSBudWxsKSB7XHJcblxyXG4gIGNvbnN0IG1vdmVMYXllcnMgPSAoZSkgPT4ge1xyXG4gICAgXHJcbiAgICBjb25zdCBpbml0aWFsWCA9ICh3aW5kb3cuaW5uZXJXaWR0aC8yKSAtIGUucGFnZVg7XHJcbiAgICBjb25zdCBpbml0aWFsWSA9ICh3aW5kb3cuaW5uZXJIZWlnaHQvMikgLSBlLnBhZ2VZO1xyXG5cclxuICAgIGxldCBpID0gMDtcclxuXHJcbiAgICBmb3IgKGxldCBsYXllciBvZiBsYXllcnMpIHtcclxuXHJcbiAgICAgIGxldCBkaXZpZGVyID0gaSAvIDcwO1xyXG4gICAgICBsZXQgcG9zaXRpb25YID0gaW5pdGlhbFggKiBkaXZpZGVyO1xyXG4gICAgICBsZXQgcG9zaXRpb25ZID0gaW5pdGlhbFkgKiBkaXZpZGVyO1xyXG5cclxuICAgICAgbGF5ZXIuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZSgke3Bvc2l0aW9uWH1weCwgJHtwb3NpdGlvbll9cHgpYFxyXG4gICAgXHJcbiAgICAgIGkrKztcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgbW92ZUxheWVycyk7XHJcblxyXG59XHJcblxyXG5cclxuXHJcbiIsImxldCB3cmFwcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWN0cy1mb3JtJylcclxubGV0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFjdHMtZm9ybV9fYmx1cicpXHJcbmxldCBpbWdCZ1dyYXBwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZlZWRiYWNrX19iZycpXHJcbmxldCBpbWdCZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mZWVkYmFja19fYmctaW1nJylcclxuXHJcbmlmKHdyYXBwICE9PSBudWxsKSB7XHJcblxyXG4gIGxldCBibHVyID0gKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzZXQoKSB7XHJcblxyXG4gICAgICAgIGxldCBpbWdXaWR0aCA9IGltZ0JnV3JhcHAub2Zmc2V0V2lkdGgsXHJcbiAgICAgICAgICAgIGltZ1NpemVUb3AgPSBpbWdCZy5vZmZzZXRUb3AsXHJcbiAgICAgICAgICAgIHBvc0xlZnQgPSAtd3JhcHAub2Zmc2V0TGVmdCxcclxuICAgICAgICAgICAgcG9zVG9wID0gLSh3cmFwcC5vZmZzZXRUb3AgLSBpbWdTaXplVG9wKSxcclxuICAgICAgICAgICAgYmx1ckNTUyA9IGZvcm0uc3R5bGU7XHJcblxyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhpbWdXaWR0aCk7XHJcblxyXG4gICAgICAgICAgICBibHVyQ1NTLmJhY2tncm91bmRTaXplID0gYCR7aW1nV2lkdGh9cHggYXV0b2BcclxuICAgICAgICAgICAgYmx1ckNTUy5iYWNrZ3JvdW5kUG9zaXRpb24gPSBgJHtwb3NMZWZ0fXB4ICR7cG9zVG9wfXB4YFxyXG5cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICB9KCkpXHJcblxyXG4gIHdpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgICBibHVyLnNldCgpO1xyXG5cclxuICB9XHJcblxyXG5cclxuICB3aW5kb3cub25yZXNpemUgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgICBibHVyLnNldCgpO1xyXG5cclxuICB9ICBcclxufVxyXG5cclxuIiwiJ3VzZSBzdHJpY3QnXHJcblxyXG4vLyBzdmcgcG9seWZpbGxcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PS8vXHJcbmltcG9ydCBzdmc0ZXZlcnlib2R5IGZyb20gJ3N2ZzRldmVyeWJvZHknO1xyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ly9cclxuXHJcbnN2ZzRldmVyeWJvZHkoKVxyXG5cclxuLy8gaW1wb3J0IGZvbnRhd2Vzb21lIGZyb20gXCJmb250LWF3ZXNvbWVcIlxyXG4vLyBmb250YXdlc29tZS5kb20uaTJzdmcoKVxyXG5cclxuaW1wb3J0ICcuL2NvbW1vbi9tYWluJztcclxuaW1wb3J0ICcuL2NvbW1vbi9tb2RhbCc7XHJcbmltcG9ydCAnLi9jb21tb24vbWVudSc7XHJcbmltcG9ydCAnLi9jb21tb24vd29yayc7XHJcbmltcG9ydCAnLi9jb21tb24vcGFyYWxheCc7XHJcbmltcG9ydCAnLi9jb21tb24vcGFyYWxheC1zY3JvbGwnO1xyXG5pbXBvcnQgJy4vY29tbW9uL3dvcmtzLXNsaWRlcic7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=