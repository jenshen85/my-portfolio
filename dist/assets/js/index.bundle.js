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

/***/ "./src/js/common/skills.js":
/*!*********************************!*\
  !*** ./src/js/common/skills.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = __webpack_require__(/*! ../lib/utils */ "./src/js/lib/utils.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var contr = document.querySelector('.skills__list');
var front = document.querySelector('.front .skills__img');
var back = document.querySelector('.back .skills__img');
var workFl = document.querySelector('.workfl .skills__img');

var Skill = function () {
  function Skill(width, height, container, percent, title) {
    _classCallCheck(this, Skill);

    this.svgns = 'http://www.w3.org/2000/svg';
    this.svg = document.createElementNS(this.svgns, 'svg');
    this.width = width;
    this.height = height;
    this.radius = this.width / 3;
    this.percent = percent;
    this.strokeDasharray = 2 * Math.PI * this.radius;

    this.svg.setAttribute('width', this.width);
    this.svg.setAttribute('height', this.height);
    this.svg.setAttribute('viewBox', '0 0 ' + this.width + ' ' + this.height);

    this.baseCircle = this.createCircle('#1bb696', true);
    this.bgCircle = this.createCircle('#ccc');
    this.add(container, title);
  }

  _createClass(Skill, [{
    key: 'createCircle',
    value: function createCircle(color) {
      var isBase = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      var circle = document.createElementNS(this.svgns, 'circle');
      var cx = this.width / 2;
      var cy = this.height / 2;
      circle.setAttribute('cx', cx);
      circle.setAttribute('cy', cy);
      circle.setAttribute('r', this.radius);
      circle.setAttribute('fill', 'none');
      circle.setAttribute('stroke', color);
      circle.setAttribute('stroke-width', '15');
      if (isBase) {
        circle.setAttribute('transform', 'rotate(-90 ' + cx + ' ' + cy + ')');
        circle.setAttribute('stroke-dasharray', this.strokeDasharray);
        circle.setAttribute('stroke-dashoffset', this.strokeDasharray);
      }
      return circle;
    }
  }, {
    key: 'add',
    value: function add(container, title) {
      var homeDiv = document.createElement('div');
      homeDiv.className = 'skills__img-item';
      var div = document.createElement('div');
      div.className = 'skills__img-title';
      div.textContent = title;
      this.svg.appendChild(this.bgCircle);
      this.svg.appendChild(this.baseCircle);
      homeDiv.appendChild(this.svg);
      homeDiv.appendChild(div);
      container.appendChild(homeDiv);
      return this;
    }
  }, {
    key: 'draw',
    value: function draw(progress) {
      this.baseCircle.setAttribute('stroke-dashoffset', (1 - progress * this.percent) * this.strokeDasharray);
    }
  }]);

  return Skill;
}();

var skillHtml = new Skill(150, 150, front, 0.95, 'Html');
var skillCss = new Skill(150, 150, front, 0.75, 'Css');
var skillJs = new Skill(150, 150, front, 0.85, 'Js');

var skillPSql = new Skill(150, 150, back, 0.45, 'Postgre Sql');
var skillNode = new Skill(150, 150, back, 0.75, 'Node & Npm');
var skillMongo = new Skill(150, 150, back, 0.75, 'MongoDB');

var skillGulp = new Skill(150, 150, workFl, 0.95, 'Gulp');
var skillGit = new Skill(150, 150, workFl, 0.75, 'Git');
var skillWebpack = new Skill(150, 150, workFl, 0.45, 'Webpack');

function animate(options) {
  var start = performance.now();

  requestAnimationFrame(function _animate(time) {
    var timeFraction = (time - start) / options.duration;
    if (timeFraction > 1) timeFraction = 1;
    var progress = options.timing(timeFraction);
    options.draw(progress);
    if (timeFraction < 1) {
      requestAnimationFrame(_animate);
    }
  });
}

var offAnim = {};
var heightList = function heightList() {
  return Math.floor(contr.scrollHeight / 3);
};

window.addEventListener('scroll', function () {

  if ((window.pageYOffset || document.documentElement.scrollTop) === 0) {
    for (var key in offAnim) {
      offAnim[key] = false;
    }
  }

  if (_utils.scrollTop > (0, _utils.getCoords)(front).top + heightList() && !offAnim.front) {
    animate({
      duration: 700,
      timing: function timing(timeFraction) {
        return timeFraction;
      },
      draw: function draw(progress) {
        skillHtml.draw(progress);
        skillCss.draw(progress);
        skillJs.draw(progress);
      }
    });
    offAnim.front = true;
  }

  if (_utils.scrollTop > (0, _utils.getCoords)(back).top + heightList() && !offAnim.back) {
    animate({
      duration: 700,
      timing: function timing(timeFraction) {
        return timeFraction;
      },
      draw: function draw(progress) {
        skillPSql.draw(progress);
        skillNode.draw(progress);
        skillMongo.draw(progress);
      }
    });
    offAnim.back = true;
  }

  if (_utils.scrollTop > (0, _utils.getCoords)(workFl).top + heightList() && !offAnim.workfl) {
    animate({
      duration: 700,
      timing: function timing(timeFraction) {
        return timeFraction;
      },
      draw: function draw(progress) {
        skillGulp.draw(progress);
        skillGit.draw(progress);
        skillWebpack.draw(progress);
      }
    });
    offAnim.workfl = true;
  }
});

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

__webpack_require__(/*! ./common/skills */ "./src/js/common/skills.js");

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

/***/ }),

/***/ "./src/js/lib/utils.js":
/*!*****************************!*\
  !*** ./src/js/lib/utils.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var HEADER = document.querySelector('.header');
var FOOTER = document.querySelector('.footer');

var scrollTop = void 0;
exports.scrollTop = scrollTop = window.pageYOffset || document.documentElement.scrollTop;
exports.scrollTop = scrollTop = scrollTop + document.documentElement.clientHeight;

var body = document.body,
    html = document.documentElement;
var pageHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);

var openWidget = {
  mobMenu: false,
  basketPopUp: false,
  popUpSlider: false
};

function popUpPaddingTop(elem) {
  var headerHeight = HEADER.offsetHeight;
  elem.style.paddingTop = headerHeight + 'px';
}

function headerHeight() {
  var headerHeight = HEADER.offsetHeight;
  return headerHeight;
}
function footerHeight() {
  var footerHeight = FOOTER.offsetHeight;
  return footerHeight;
}

function screenWidth() {
  return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
}

// zoom image
function zoom(e, container) {
  var offsetX = void 0,
      offsetY = void 0,
      x = void 0,
      y = void 0;
  var zoomer = e.target;
  if (zoomer.nodeName === 'IMG' && zoomer.nodeType === 1) {
    if (e.offsetX < 1 || e.offsetY < 1) return;
    e.offsetX ? offsetX = e.offsetX : offsetX = e.touches[0].pageX;
    e.offsetY ? offsetY = e.offsetY : offsetX = e.touches[0].pageX;
    x = offsetX / zoomer.offsetWidth * 100;
    y = offsetY / zoomer.offsetHeight * 100;
    container.style.backgroundImage = 'url("' + zoomer.src + '")';
    container.style.backgroundPosition = x + '% ' + y + '%';
  }
}

// controls body overflow
function openWidgetCheck() {
  for (var key in openWidget) {
    if (openWidget[key]) {
      document.body.style.overflow = 'hidden';
      return true;
    }
  }
  document.body.style.overflow = '';
  return false;
}

function getCoords(elem) {
  // (1)
  var box = elem.getBoundingClientRect();

  var body = document.body;
  var docEl = document.documentElement;

  // (2)
  var scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
  var scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;

  // (3)
  var clientTop = docEl.clientTop || body.clientTop || 0;
  var clientLeft = docEl.clientLeft || body.clientLeft || 0;

  // (4)
  var top = box.top + scrollTop - clientTop;
  var left = box.left + scrollLeft - clientLeft;

  return {
    top: top,
    left: left
  };
}

function toNumber(el) {
  return parseInt(el.replace(/\D/g, ''));
}

window.addEventListener('scroll', function () {
  exports.scrollTop = scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  exports.scrollTop = scrollTop = scrollTop + document.documentElement.clientHeight;
  exports.pageHeight = pageHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
});

window.addEventListener('resize', function () {
  exports.pageHeight = pageHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
});

exports.popUpPaddingTop = popUpPaddingTop;
exports.screenWidth = screenWidth;
exports.openWidget = openWidget;
exports.openWidgetCheck = openWidgetCheck;
exports.toNumber = toNumber;
exports.headerHeight = headerHeight;
exports.footerHeight = footerHeight;
exports.scrollTop = scrollTop;
exports.pageHeight = pageHeight;
exports.zoom = zoom;
exports.getCoords = getCoords;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N2ZzRldmVyeWJvZHkvZGlzdC9zdmc0ZXZlcnlib2R5LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21tb24vbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tbW9uL21lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbW1vbi9tb2RhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tbW9uL3BhcmFsYXgtc2Nyb2xsLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21tb24vcGFyYWxheC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tbW9uL3NraWxscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tbW9uL3dvcmsuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbW1vbi93b3Jrcy1zbGlkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9saWIvcG9seWZpbGxzLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9saWIvdXRpbHMuanMiXSwibmFtZXMiOlsid2VsY29tQnV0dG9uIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInRvR2VuZXJhbCIsImJhY2tCdXR0b24iLCJxdWVyeVNlbGVjdG9yIiwiZmxpcHAiLCJhZGRFdmVudExpc3RlbmVyIiwiY2xhc3NMaXN0IiwiYWRkIiwiZSIsInByZXZlbnREZWZhdWx0IiwicmVtb3ZlIiwiTUVOVV9CVVRUT04iLCJNRU5VX0JVVFRPTl9XUkFQUCIsIk1FTlUiLCJDT05UQUlORVIiLCJ0aHVtYiIsIndpbmRvdyIsImFic29sdXRlQnV0dG9uUG9zWCIsIm9mZnNldFdpZHRoIiwib2Zmc2V0TGVmdCIsImFic29sdXRlQnV0dG9uUG9zWSIsIm9mZnNldFRvcCIsImJ1dHRvblBvc2l0aW9uIiwidG9nZ2xlIiwiZml4ZWRCdXR0b25Qb3NZIiwiZml4ZWRCdXR0b25Qb3NYIiwiaW5uZXJXaWR0aCIsInN0eWxlIiwicG9zaXRpb24iLCJyaWdodCIsInRvcCIsIm1vZGFsQnV0dG9uIiwibW9kYWwiLCJsb2dpbkJ1dHRvbiIsIldFTENPTV9DT05UQUlORVIiLCJvcGFjaXR5Iiwic2V0VGltZW91dCIsInBhcmFsYXgiLCJ1c2VyIiwic2VjdGlvblRleHQiLCJtb3ZlIiwiYmxvY2siLCJ3aW5kb3dTY3JvbGwiLCJzdHJhZmVBbW91bnQiLCJ4UG9zIiwic3RyYWZlIiwidHJhbnNmb3JtU3RyaW5nIiwidHJhbnNmb3JtIiwiaW5pdCIsIndTY3JvbGwiLCJwYWdlWU9mZnNldCIsInBhcmFsYXhDb250IiwibGF5ZXJzIiwiQXJyYXkiLCJwcm90b3R5cGUiLCJzbGljZSIsImNhbGwiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwibW92ZUxheWVycyIsImluaXRpYWxYIiwicGFnZVgiLCJpbml0aWFsWSIsImlubmVySGVpZ2h0IiwicGFnZVkiLCJmb3JFYWNoIiwiZWwiLCJpIiwiZGl2aWRlciIsInBvc2l0aW9uWCIsInBvc2l0aW9uWSIsImNvbnRyIiwiZnJvbnQiLCJiYWNrIiwid29ya0ZsIiwiU2tpbGwiLCJ3aWR0aCIsImhlaWdodCIsImNvbnRhaW5lciIsInBlcmNlbnQiLCJ0aXRsZSIsInN2Z25zIiwic3ZnIiwiY3JlYXRlRWxlbWVudE5TIiwicmFkaXVzIiwic3Ryb2tlRGFzaGFycmF5IiwiTWF0aCIsIlBJIiwic2V0QXR0cmlidXRlIiwiYmFzZUNpcmNsZSIsImNyZWF0ZUNpcmNsZSIsImJnQ2lyY2xlIiwiY29sb3IiLCJpc0Jhc2UiLCJjaXJjbGUiLCJjeCIsImN5IiwiaG9tZURpdiIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJkaXYiLCJ0ZXh0Q29udGVudCIsImFwcGVuZENoaWxkIiwicHJvZ3Jlc3MiLCJza2lsbEh0bWwiLCJza2lsbENzcyIsInNraWxsSnMiLCJza2lsbFBTcWwiLCJza2lsbE5vZGUiLCJza2lsbE1vbmdvIiwic2tpbGxHdWxwIiwic2tpbGxHaXQiLCJza2lsbFdlYnBhY2siLCJhbmltYXRlIiwib3B0aW9ucyIsInN0YXJ0IiwicGVyZm9ybWFuY2UiLCJub3ciLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJfYW5pbWF0ZSIsInRpbWUiLCJ0aW1lRnJhY3Rpb24iLCJkdXJhdGlvbiIsInRpbWluZyIsImRyYXciLCJvZmZBbmltIiwiaGVpZ2h0TGlzdCIsImZsb29yIiwic2Nyb2xsSGVpZ2h0IiwiZG9jdW1lbnRFbGVtZW50Iiwic2Nyb2xsVG9wIiwia2V5Iiwid29ya2ZsIiwid3JhcHAiLCJmb3JtIiwiaW1nQmdXcmFwcCIsImltZ0JnIiwiYmx1ciIsInNldCIsImltZ1dpZHRoIiwiaW1nU2l6ZVRvcCIsInBvc0xlZnQiLCJwb3NUb3AiLCJibHVyQ1NTIiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJvbmxvYWQiLCJvbnJlc2l6ZSIsInNsaWRlclN0YXJ0IiwiU2xpZGVyIiwiY29udGFpbmVyVmlldyIsImNvbnRhaW5lckxlZnQiLCJjb250YWluZXJSaWdodCIsInNsaWRlckluZm8iLCJzbGlkZSIsImJ1dHRvbnNMZWZ0IiwiYnV0dG9uc1JpZ2h0IiwidGhhdCIsImNvdW50ZXIiLCJjb3VudGVyUHJldiIsImNvdW50ZXJOZXh0IiwiaW5Qcm9jZXNzIiwibGVuZ2h0Q2hpbGQiLCJtYXgiLCJmcm9tIiwicXVlcnlTZWxlY3RvckFsbCIsImxlbmd0aCIsIm1vdmVTbGlkZSIsIm9yaWVudGF0aW9uIiwiZGlyZWN0aW9uIiwiaXRlbXMiLCJjaGlsZHJlbiIsImFjdGl2ZUl0ZW0iLCJyZXFJdGVtIiwidmlld0lkeCIsImNvbnRhaW5zIiwiZWxlbSIsImluZGV4IiwiY291bnRTbGlkZSIsInNsaWRlckluZm9GaWxsIiwiYWZ0ZXIiLCJzbGlkZUluaXQiLCJjaGlsZCIsImdldEF0dHJDb250YWluZXIiLCJ2aWV3VGl0bGUiLCJ2aWV3RGVzYyIsInZpZXdMaW5rIiwiZ2V0QXR0cmlidXRlIiwiZGVzYyIsImxpbmsiLCJzcGxpdFdvcmQiLCJocmVmIiwiYXJyU2xpZGUiLCJ3b3JkIiwibm9kZUVsZW0iLCJkdXIiLCJzcGxpdCIsInNwbFdvcmQiLCJzcGFuIiwibGV0ZXIiLCJqIiwic3BhbkxldGVyIiwidG9TdHIiLCJPYmplY3QiLCJ0b1N0cmluZyIsImlzQ2FsbGFibGUiLCJmbiIsInRvSW50ZWdlciIsInZhbHVlIiwibnVtYmVyIiwiTnVtYmVyIiwiaXNOYU4iLCJpc0Zpbml0ZSIsImFicyIsIm1heFNhZmVJbnRlZ2VyIiwicG93IiwidG9MZW5ndGgiLCJsZW4iLCJtaW4iLCJhcnJheUxpa2UiLCJDIiwiVHlwZUVycm9yIiwibWFwRm4iLCJhcmd1bWVudHMiLCJ1bmRlZmluZWQiLCJUIiwiQSIsImsiLCJrVmFsdWUiLCJpc0FycmF5IiwiYXJnIiwib2YiLCJmaW5kIiwicHJlZGljYXRlIiwibGlzdCIsInRoaXNBcmciLCJIRUFERVIiLCJGT09URVIiLCJjbGllbnRIZWlnaHQiLCJib2R5IiwiaHRtbCIsInBhZ2VIZWlnaHQiLCJvZmZzZXRIZWlnaHQiLCJvcGVuV2lkZ2V0IiwibW9iTWVudSIsImJhc2tldFBvcFVwIiwicG9wVXBTbGlkZXIiLCJwb3BVcFBhZGRpbmdUb3AiLCJoZWFkZXJIZWlnaHQiLCJwYWRkaW5nVG9wIiwiZm9vdGVySGVpZ2h0Iiwic2NyZWVuV2lkdGgiLCJjbGllbnRXaWR0aCIsInpvb20iLCJvZmZzZXRYIiwib2Zmc2V0WSIsIngiLCJ5Iiwiem9vbWVyIiwidGFyZ2V0Iiwibm9kZU5hbWUiLCJub2RlVHlwZSIsInRvdWNoZXMiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJzcmMiLCJvcGVuV2lkZ2V0Q2hlY2siLCJvdmVyZmxvdyIsImdldENvb3JkcyIsImJveCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImRvY0VsIiwic2Nyb2xsTGVmdCIsInBhZ2VYT2Zmc2V0IiwiY2xpZW50VG9wIiwiY2xpZW50TGVmdCIsImxlZnQiLCJ0b051bWJlciIsInBhcnNlSW50IiwicmVw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Q0QsQ0FGRDs7UUFLRUssZSxHQUFBQSxlO1FBQ0FJLFcsR0FBQUEsVztRQUNBUixVLEdBQUFBLFU7UUFDQXNCLGUsR0FBQUEsZTtRQUNBVyxRLEdBQUFBLFE7UUFDQTVCLFksR0FBQUEsWTtRQUNBRSxZLEdBQUFBLFk7UUFDQXhILFMsR0FBQUEsUztRQUNBK0csVSxHQUFBQSxVO1FBQ0FZLEksR0FBQUEsSTtRQUNBYyxTLEdBQUFBLFMiLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvYXNzZXRzL2pzL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9qcy9pbmRleC5qc1wiKTtcbiIsIiFmdW5jdGlvbihyb290LCBmYWN0b3J5KSB7XG4gICAgXCJmdW5jdGlvblwiID09IHR5cGVvZiBkZWZpbmUgJiYgZGVmaW5lLmFtZCA/IC8vIEFNRC4gUmVnaXN0ZXIgYXMgYW4gYW5vbnltb3VzIG1vZHVsZSB1bmxlc3MgYW1kTW9kdWxlSWQgaXMgc2V0XG4gICAgZGVmaW5lKFtdLCBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHJvb3Quc3ZnNGV2ZXJ5Ym9keSA9IGZhY3RvcnkoKTtcbiAgICB9KSA6IFwib2JqZWN0XCIgPT0gdHlwZW9mIG1vZHVsZSAmJiBtb2R1bGUuZXhwb3J0cyA/IC8vIE5vZGUuIERvZXMgbm90IHdvcmsgd2l0aCBzdHJpY3QgQ29tbW9uSlMsIGJ1dFxuICAgIC8vIG9ubHkgQ29tbW9uSlMtbGlrZSBlbnZpcm9ubWVudHMgdGhhdCBzdXBwb3J0IG1vZHVsZS5leHBvcnRzLFxuICAgIC8vIGxpa2UgTm9kZS5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKSA6IHJvb3Quc3ZnNGV2ZXJ5Ym9keSA9IGZhY3RvcnkoKTtcbn0odGhpcywgZnVuY3Rpb24oKSB7XG4gICAgLyohIHN2ZzRldmVyeWJvZHkgdjIuMS45IHwgZ2l0aHViLmNvbS9qb25hdGhhbnRuZWFsL3N2ZzRldmVyeWJvZHkgKi9cbiAgICBmdW5jdGlvbiBlbWJlZChwYXJlbnQsIHN2ZywgdGFyZ2V0KSB7XG4gICAgICAgIC8vIGlmIHRoZSB0YXJnZXQgZXhpc3RzXG4gICAgICAgIGlmICh0YXJnZXQpIHtcbiAgICAgICAgICAgIC8vIGNyZWF0ZSBhIGRvY3VtZW50IGZyYWdtZW50IHRvIGhvbGQgdGhlIGNvbnRlbnRzIG9mIHRoZSB0YXJnZXRcbiAgICAgICAgICAgIHZhciBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKSwgdmlld0JveCA9ICFzdmcuaGFzQXR0cmlidXRlKFwidmlld0JveFwiKSAmJiB0YXJnZXQuZ2V0QXR0cmlidXRlKFwidmlld0JveFwiKTtcbiAgICAgICAgICAgIC8vIGNvbmRpdGlvbmFsbHkgc2V0IHRoZSB2aWV3Qm94IG9uIHRoZSBzdmdcbiAgICAgICAgICAgIHZpZXdCb3ggJiYgc3ZnLnNldEF0dHJpYnV0ZShcInZpZXdCb3hcIiwgdmlld0JveCk7XG4gICAgICAgICAgICAvLyBjb3B5IHRoZSBjb250ZW50cyBvZiB0aGUgY2xvbmUgaW50byB0aGUgZnJhZ21lbnRcbiAgICAgICAgICAgIGZvciAoLy8gY2xvbmUgdGhlIHRhcmdldFxuICAgICAgICAgICAgdmFyIGNsb25lID0gdGFyZ2V0LmNsb25lTm9kZSghMCk7IGNsb25lLmNoaWxkTm9kZXMubGVuZ3RoOyApIHtcbiAgICAgICAgICAgICAgICBmcmFnbWVudC5hcHBlbmRDaGlsZChjbG9uZS5maXJzdENoaWxkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGFwcGVuZCB0aGUgZnJhZ21lbnQgaW50byB0aGUgc3ZnXG4gICAgICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoZnJhZ21lbnQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIGxvYWRyZWFkeXN0YXRlY2hhbmdlKHhocikge1xuICAgICAgICAvLyBsaXN0ZW4gdG8gY2hhbmdlcyBpbiB0aGUgcmVxdWVzdFxuICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAvLyBpZiB0aGUgcmVxdWVzdCBpcyByZWFkeVxuICAgICAgICAgICAgaWYgKDQgPT09IHhoci5yZWFkeVN0YXRlKSB7XG4gICAgICAgICAgICAgICAgLy8gZ2V0IHRoZSBjYWNoZWQgaHRtbCBkb2N1bWVudFxuICAgICAgICAgICAgICAgIHZhciBjYWNoZWREb2N1bWVudCA9IHhoci5fY2FjaGVkRG9jdW1lbnQ7XG4gICAgICAgICAgICAgICAgLy8gZW5zdXJlIHRoZSBjYWNoZWQgaHRtbCBkb2N1bWVudCBiYXNlZCBvbiB0aGUgeGhyIHJlc3BvbnNlXG4gICAgICAgICAgICAgICAgY2FjaGVkRG9jdW1lbnQgfHwgKGNhY2hlZERvY3VtZW50ID0geGhyLl9jYWNoZWREb2N1bWVudCA9IGRvY3VtZW50LmltcGxlbWVudGF0aW9uLmNyZWF0ZUhUTUxEb2N1bWVudChcIlwiKSwgXG4gICAgICAgICAgICAgICAgY2FjaGVkRG9jdW1lbnQuYm9keS5pbm5lckhUTUwgPSB4aHIucmVzcG9uc2VUZXh0LCB4aHIuX2NhY2hlZFRhcmdldCA9IHt9KSwgLy8gY2xlYXIgdGhlIHhociBlbWJlZHMgbGlzdCBhbmQgZW1iZWQgZWFjaCBpdGVtXG4gICAgICAgICAgICAgICAgeGhyLl9lbWJlZHMuc3BsaWNlKDApLm1hcChmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGdldCB0aGUgY2FjaGVkIHRhcmdldFxuICAgICAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0ID0geGhyLl9jYWNoZWRUYXJnZXRbaXRlbS5pZF07XG4gICAgICAgICAgICAgICAgICAgIC8vIGVuc3VyZSB0aGUgY2FjaGVkIHRhcmdldFxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQgfHwgKHRhcmdldCA9IHhoci5fY2FjaGVkVGFyZ2V0W2l0ZW0uaWRdID0gY2FjaGVkRG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaXRlbS5pZCkpLCBcbiAgICAgICAgICAgICAgICAgICAgLy8gZW1iZWQgdGhlIHRhcmdldCBpbnRvIHRoZSBzdmdcbiAgICAgICAgICAgICAgICAgICAgZW1iZWQoaXRlbS5wYXJlbnQsIGl0ZW0uc3ZnLCB0YXJnZXQpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCAvLyB0ZXN0IHRoZSByZWFkeSBzdGF0ZSBjaGFuZ2UgaW1tZWRpYXRlbHlcbiAgICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSgpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBzdmc0ZXZlcnlib2R5KHJhd29wdHMpIHtcbiAgICAgICAgZnVuY3Rpb24gb25pbnRlcnZhbCgpIHtcbiAgICAgICAgICAgIC8vIHdoaWxlIHRoZSBpbmRleCBleGlzdHMgaW4gdGhlIGxpdmUgPHVzZT4gY29sbGVjdGlvblxuICAgICAgICAgICAgZm9yICgvLyBnZXQgdGhlIGNhY2hlZCA8dXNlPiBpbmRleFxuICAgICAgICAgICAgdmFyIGluZGV4ID0gMDsgaW5kZXggPCB1c2VzLmxlbmd0aDsgKSB7XG4gICAgICAgICAgICAgICAgLy8gZ2V0IHRoZSBjdXJyZW50IDx1c2U+XG4gICAgICAgICAgICAgICAgdmFyIHVzZSA9IHVzZXNbaW5kZXhdLCBwYXJlbnQgPSB1c2UucGFyZW50Tm9kZSwgc3ZnID0gZ2V0U1ZHQW5jZXN0b3IocGFyZW50KSwgc3JjID0gdXNlLmdldEF0dHJpYnV0ZShcInhsaW5rOmhyZWZcIikgfHwgdXNlLmdldEF0dHJpYnV0ZShcImhyZWZcIik7XG4gICAgICAgICAgICAgICAgaWYgKCFzcmMgJiYgb3B0cy5hdHRyaWJ1dGVOYW1lICYmIChzcmMgPSB1c2UuZ2V0QXR0cmlidXRlKG9wdHMuYXR0cmlidXRlTmFtZSkpLCBcbiAgICAgICAgICAgICAgICBzdmcgJiYgc3JjKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwb2x5ZmlsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFvcHRzLnZhbGlkYXRlIHx8IG9wdHMudmFsaWRhdGUoc3JjLCBzdmcsIHVzZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyByZW1vdmUgdGhlIDx1c2U+IGVsZW1lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnQucmVtb3ZlQ2hpbGQodXNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBwYXJzZSB0aGUgc3JjIGFuZCBnZXQgdGhlIHVybCBhbmQgaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgc3JjU3BsaXQgPSBzcmMuc3BsaXQoXCIjXCIpLCB1cmwgPSBzcmNTcGxpdC5zaGlmdCgpLCBpZCA9IHNyY1NwbGl0LmpvaW4oXCIjXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmIHRoZSBsaW5rIGlzIGV4dGVybmFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHVybC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZ2V0IHRoZSBjYWNoZWQgeGhyIHJlcXVlc3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHhociA9IHJlcXVlc3RzW3VybF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGVuc3VyZSB0aGUgeGhyIHJlcXVlc3QgZXhpc3RzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhociB8fCAoeGhyID0gcmVxdWVzdHNbdXJsXSA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpLCB4aHIub3BlbihcIkdFVFwiLCB1cmwpLCB4aHIuc2VuZCgpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeGhyLl9lbWJlZHMgPSBbXSksIC8vIGFkZCB0aGUgc3ZnIGFuZCBpZCBhcyBhbiBpdGVtIHRvIHRoZSB4aHIgZW1iZWRzIGxpc3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeGhyLl9lbWJlZHMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnQ6IHBhcmVudCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN2Zzogc3ZnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLCAvLyBwcmVwYXJlIHRoZSB4aHIgcmVhZHkgc3RhdGUgY2hhbmdlIGV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRyZWFkeXN0YXRlY2hhbmdlKHhocik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZW1iZWQgdGhlIGxvY2FsIGlkIGludG8gdGhlIHN2Z1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbWJlZChwYXJlbnQsIHN2ZywgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGluY3JlYXNlIHRoZSBpbmRleCB3aGVuIHRoZSBwcmV2aW91cyB2YWx1ZSB3YXMgbm90IFwidmFsaWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICsraW5kZXgsICsrbnVtYmVyT2ZTdmdVc2VFbGVtZW50c1RvQnlwYXNzO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gaW5jcmVhc2UgdGhlIGluZGV4IHdoZW4gdGhlIHByZXZpb3VzIHZhbHVlIHdhcyBub3QgXCJ2YWxpZFwiXG4gICAgICAgICAgICAgICAgICAgICsraW5kZXg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gY29udGludWUgdGhlIGludGVydmFsXG4gICAgICAgICAgICAoIXVzZXMubGVuZ3RoIHx8IHVzZXMubGVuZ3RoIC0gbnVtYmVyT2ZTdmdVc2VFbGVtZW50c1RvQnlwYXNzID4gMCkgJiYgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKG9uaW50ZXJ2YWwsIDY3KTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcG9seWZpbGwsIG9wdHMgPSBPYmplY3QocmF3b3B0cyksIG5ld2VySUVVQSA9IC9cXGJUcmlkZW50XFwvWzU2N11cXGJ8XFxiTVNJRSAoPzo5fDEwKVxcLjBcXGIvLCB3ZWJraXRVQSA9IC9cXGJBcHBsZVdlYktpdFxcLyhcXGQrKVxcYi8sIG9sZGVyRWRnZVVBID0gL1xcYkVkZ2VcXC8xMlxcLihcXGQrKVxcYi8sIGVkZ2VVQSA9IC9cXGJFZGdlXFwvLihcXGQrKVxcYi8sIGluSWZyYW1lID0gd2luZG93LnRvcCAhPT0gd2luZG93LnNlbGY7XG4gICAgICAgIHBvbHlmaWxsID0gXCJwb2x5ZmlsbFwiIGluIG9wdHMgPyBvcHRzLnBvbHlmaWxsIDogbmV3ZXJJRVVBLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkgfHwgKG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2gob2xkZXJFZGdlVUEpIHx8IFtdKVsxXSA8IDEwNTQ3IHx8IChuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKHdlYmtpdFVBKSB8fCBbXSlbMV0gPCA1MzcgfHwgZWRnZVVBLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkgJiYgaW5JZnJhbWU7XG4gICAgICAgIC8vIGNyZWF0ZSB4aHIgcmVxdWVzdHMgb2JqZWN0XG4gICAgICAgIHZhciByZXF1ZXN0cyA9IHt9LCByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IHNldFRpbWVvdXQsIHVzZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInVzZVwiKSwgbnVtYmVyT2ZTdmdVc2VFbGVtZW50c1RvQnlwYXNzID0gMDtcbiAgICAgICAgLy8gY29uZGl0aW9uYWxseSBzdGFydCB0aGUgaW50ZXJ2YWwgaWYgdGhlIHBvbHlmaWxsIGlzIGFjdGl2ZVxuICAgICAgICBwb2x5ZmlsbCAmJiBvbmludGVydmFsKCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGdldFNWR0FuY2VzdG9yKG5vZGUpIHtcbiAgICAgICAgZm9yICh2YXIgc3ZnID0gbm9kZTsgXCJzdmdcIiAhPT0gc3ZnLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgJiYgKHN2ZyA9IHN2Zy5wYXJlbnROb2RlKTsgKSB7fVxuICAgICAgICByZXR1cm4gc3ZnO1xuICAgIH1cbiAgICByZXR1cm4gc3ZnNGV2ZXJ5Ym9keTtcbn0pOyIsIid1c2Ugc3RyaWN0J1xyXG5cclxuLy8gaW1wb3J0IGZvbnRhd2Vzb21lIGZyb20gJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1mcmVlLXdlYmZvbnRzJ1xyXG4vLyBmb250YXdlc29tZS5kb20uaTJzdmcoKVxyXG5cclxuY29uc3Qgd2VsY29tQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2F1dG9yaXNhdGlvbi1idXR0b24nKTtcclxuY29uc3QgdG9HZW5lcmFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvLWdlbmVyYWwnKVxyXG5jb25zdCBiYWNrQnV0dG9uID1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2VsY29tX19idXR0b24nKTtcclxuY29uc3QgZmxpcHAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmxpcHBlcicpO1xyXG5cclxuaWYgKGZsaXBwICE9PSBudWxsKSB7XHJcblxyXG4gIHdlbGNvbUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG5cclxuICAgIGZsaXBwLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbiAgICBiYWNrQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcblxyXG4gIH0pXHJcblxyXG4gIHRvR2VuZXJhbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcblxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGZsaXBwLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgICBiYWNrQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcblxyXG4gIH0pXHJcblxyXG59IiwiY29uc3QgTUVOVV9CVVRUT04gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudS1idXR0b24nKTtcclxuY29uc3QgTUVOVV9CVVRUT05fV1JBUFAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudS1idXR0b25fX3dyYXBwJyk7XHJcbmNvbnN0IE1FTlUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudS13cmFwcCcpO1xyXG5jb25zdCBDT05UQUlORVIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVyby1jb250YWluZXInKTtcclxuXHJcbmxldCB0aHVtYiA9IGZhbHNlXHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24oKSB7XHJcbiAgXHJcbiAgaWYoTUVOVSAhPT0gbnVsbCkge1xyXG5cclxuICAgIC8vINC/0L7Qt9C40YbQuNGPINC60L3QvtC/0LrQuCDQvNC10L3RjiDQv9C+IFgsWSAg0L/RgNC4INCw0LHRgdC+0LvRjtGC0L3QvtC8INC/0L7Qt9C40YbQuNC+0L3QuNGA0L7QstCw0L3QuNC4XHJcbiAgICAvLyDQv9C+0LfQuNGG0LjRjyDQutC90L7Qv9C60Lgg0LzQtdC90Y4g0L/QviBYID0gKNGI0LjRgNC40L3QsCDQutC+0L3RgtC10LnQvdC10YDQsCAtINGI0LjRgNC40L3QsCDQvtGCINC60L3QvtC/0LrQuCDRgdC70LXQstCwKSAtINGI0LjRgNC40L3QsCDRgdCw0LzQvtC5INC60L3QvtC/0LrQuFxyXG4gICAgbGV0IGFic29sdXRlQnV0dG9uUG9zWCA9IChDT05UQUlORVIub2Zmc2V0V2lkdGggLSBNRU5VX0JVVFRPTl9XUkFQUC5vZmZzZXRMZWZ0KSAtIE1FTlVfQlVUVE9OX1dSQVBQLm9mZnNldFdpZHRoO1xyXG4gICAgbGV0IGFic29sdXRlQnV0dG9uUG9zWSA9IE1FTlVfQlVUVE9OX1dSQVBQLm9mZnNldFRvcDtcclxuXHJcbiAgICBNRU5VX0JVVFRPTi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcblxyXG4gICAgICB0aHVtYiA9ICF0aHVtYlxyXG4gICAgICBidXR0b25Qb3NpdGlvbihhYnNvbHV0ZUJ1dHRvblBvc1gsIGFic29sdXRlQnV0dG9uUG9zWSk7XHJcblxyXG4gICAgICBNRU5VX0JVVFRPTi5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcclxuICAgICAgTUVOVS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcclxuXHJcbiAgICB9KVxyXG5cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICBidXR0b25Qb3NpdGlvbihhYnNvbHV0ZUJ1dHRvblBvc1gsIGFic29sdXRlQnV0dG9uUG9zWSk7XHJcbiAgICB9KVxyXG5cclxuICB9XHJcblxyXG59KVxyXG5cclxuXHJcbmZ1bmN0aW9uIGJ1dHRvblBvc2l0aW9uKGFic29sdXRlQnV0dG9uUG9zWCwgYWJzb2x1dGVCdXR0b25Qb3NZKSB7XHJcbiAgLy8g0L/QvtC30LjRhtC40Y8g0LrQvdC+0L/QutC4INC80LXQvdGOINC/0L4gWCxZICDQv9GA0LggZml4ZWQg0L/QvtC30LjRhtC40L7QvdC40YDQvtCy0LDQvdC40LhcclxuICBsZXQgZml4ZWRCdXR0b25Qb3NZID0gTUVOVV9CVVRUT05fV1JBUFAub2Zmc2V0VG9wXHJcbiAgbGV0IGZpeGVkQnV0dG9uUG9zWCA9ICh3aW5kb3cuaW5uZXJXaWR0aCAtIENPTlRBSU5FUi5vZmZzZXRXaWR0aCkgLyAyXHJcbiAgTUVOVV9CVVRUT05fV1JBUFAuc3R5bGUucG9zaXRpb24gPSB0aHVtYiA/IFwiZml4ZWRcIiA6IFwiYWJzb2x1dGVcIjtcclxuICBNRU5VX0JVVFRPTl9XUkFQUC5zdHlsZS5yaWdodCA9IHRodW1iID8gYCR7Zml4ZWRCdXR0b25Qb3NYfXB4YCA6IGAke2Fic29sdXRlQnV0dG9uUG9zWH1weGA7XHJcbiAgTUVOVV9CVVRUT05fV1JBUFAuc3R5bGUudG9wID0gdGh1bWIgPyBgJHtmaXhlZEJ1dHRvblBvc1l9cHhgIDogYCR7YWJzb2x1dGVCdXR0b25Qb3NZfXB4YDtcclxufSIsImNvbnN0IG1vZGFsQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsLWJ1dHRvbicpO1xyXG5jb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1vdmVybGF5Jyk7XHJcbmNvbnN0IGxvZ2luQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvZ2luLWJ1dHRvbicpXHJcbmNvbnN0IFdFTENPTV9DT05UQUlORVIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2VsY29tLWNvbnRhaW5lcicpXHJcblxyXG5pZihtb2RhbCAhPT0gbnVsbCkge1xyXG5cclxuICBsb2dpbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcblxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIFdFTENPTV9DT05UQUlORVIuc3R5bGUub3BhY2l0eSA9ICcwJztcclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuICAgICAgbW9kYWwuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICB9LCA1MDApXHJcblxyXG4gIH0pXHJcblxyXG4gIG1vZGFsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG5cclxuICAgIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG5cclxuXHJcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcbiAgICAgIFdFTENPTV9DT05UQUlORVIuc3R5bGUub3BhY2l0eSA9ICcxJztcclxuICAgIH0sIDUwMClcclxuXHJcbiAgfSlcclxuXHJcbn1cclxuIiwiY29uc3QgcGFyYWxheCA9IChmdW5jdGlvbigpIHtcclxuXHJcbiAgbGV0IHVzZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlcm9fX2F2YXRhclwiKVxyXG4gIGxldCBzZWN0aW9uVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVyb19fYmctd29yZFwiKVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgbW92ZShibG9jaywgd2luZG93U2Nyb2xsLCBzdHJhZmVBbW91bnQsIHhQb3MpIHtcclxuICAgICAgbGV0IHN0cmFmZSA9IHdpbmRvd1Njcm9sbCAvIC1zdHJhZmVBbW91bnQ7XHJcbiAgICAgIGxldCBzdHlsZSA9IGJsb2NrLnN0eWxlO1xyXG4gICAgICAvLyDQv9C10YDQtdC00LDRjiB0cmFuc2xhdGUg0L/QviB4LCDRgi7Qui4g0LfQvdCw0YfQtdC90LjRjyDRgyDQstGB0LXRhSDRjdC70LXQvNC10L3RgtC+0LIg0YDQsNC30L3Ri9C1XHJcbiAgICAgIGxldCB0cmFuc2Zvcm1TdHJpbmcgPSBgdHJhbnNsYXRlM2QoJHt4UG9zfSUsICR7LTUwICsgc3RyYWZlfSUsIDApYFxyXG4gICAgICBzdHlsZS50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1TdHJpbmc7XHJcbiAgICB9LFxyXG4gICAgaW5pdCh3U2Nyb2xsKSB7XHJcbiAgICAgIHRoaXMubW92ZSh1c2VyLCB3U2Nyb2xsLCAzLCAtNTApXHJcbiAgICAgIHRoaXMubW92ZShzZWN0aW9uVGV4dCwgd1Njcm9sbCwgMjAsIDApXHJcbiAgICB9XHJcbiAgfVxyXG5cclxufSgpKVxyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgZnVuY3Rpb24oKSB7XHJcblxyXG4gIGxldCB3U2Nyb2xsID0gd2luZG93LnBhZ2VZT2Zmc2V0XHJcblxyXG4gIHBhcmFsYXguaW5pdCh3U2Nyb2xsKTtcclxuXHJcblxyXG59KSIsImNvbnN0IHBhcmFsYXhDb250ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dlbGNvbWVfX3BhcmFsYXgnKTtcclxuY29uc3QgbGF5ZXJzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncGFyYWxheF9fbGF5ZXInKSk7XHJcblxyXG5pZihwYXJhbGF4Q29udCAhPT0gbnVsbCkge1xyXG4gIGNvbnN0IG1vdmVMYXllcnMgPSAoZSkgPT4ge1xyXG4gICAgXHJcbiAgICBjb25zdCBpbml0aWFsWCA9ICh3aW5kb3cuaW5uZXJXaWR0aC8yKSAtIGUucGFnZVg7XHJcbiAgICBjb25zdCBpbml0aWFsWSA9ICh3aW5kb3cuaW5uZXJIZWlnaHQvMikgLSBlLnBhZ2VZO1xyXG5cclxuICAgIGxheWVycy5mb3JFYWNoKChlbCwgaSkgPT4geyAgICAgIFxyXG4gICAgICBsZXQgZGl2aWRlciA9IGkgLyA3MDtcclxuICAgICAgbGV0IHBvc2l0aW9uWCA9IGluaXRpYWxYICogZGl2aWRlcjtcclxuICAgICAgbGV0IHBvc2l0aW9uWSA9IGluaXRpYWxZICogZGl2aWRlcjtcclxuICAgICAgZWwuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZSgke3Bvc2l0aW9uWH1weCwgJHtwb3NpdGlvbll9cHgpYDtcclxuICAgIH0pO1xyXG4gIH1cclxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgbW92ZUxheWVycyk7XHJcbn1cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0IHtzY3JvbGxUb3AsIGdldENvb3Jkc30gZnJvbSAnLi4vbGliL3V0aWxzJztcclxuXHJcbmxldCBjb250ciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5za2lsbHNfX2xpc3QnKTtcclxuY29uc3QgZnJvbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZnJvbnQgLnNraWxsc19faW1nJyk7XHJcbmNvbnN0IGJhY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmFjayAuc2tpbGxzX19pbWcnKTtcclxuY29uc3Qgd29ya0ZsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndvcmtmbCAuc2tpbGxzX19pbWcnKTtcclxuXHJcbmNsYXNzIFNraWxsIHtcclxuICBjb25zdHJ1Y3Rvcih3aWR0aCwgaGVpZ2h0LCBjb250YWluZXIsIHBlcmNlbnQsIHRpdGxlKSB7XHJcbiAgICB0aGlzLnN2Z25zID0gJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJztcclxuICAgIHRoaXMuc3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKHRoaXMuc3ZnbnMsICdzdmcnKTtcclxuICAgIHRoaXMud2lkdGggPSB3aWR0aDtcclxuICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgdGhpcy5yYWRpdXMgPSB0aGlzLndpZHRoIC8gMztcclxuICAgIHRoaXMucGVyY2VudCA9IHBlcmNlbnQ7XHJcbiAgICB0aGlzLnN0cm9rZURhc2hhcnJheSA9IDIgKiBNYXRoLlBJICogdGhpcy5yYWRpdXM7XHJcblxyXG4gICAgdGhpcy5zdmcuc2V0QXR0cmlidXRlKCd3aWR0aCcsIHRoaXMud2lkdGgpO1xyXG4gICAgdGhpcy5zdmcuc2V0QXR0cmlidXRlKCdoZWlnaHQnLCB0aGlzLmhlaWdodCk7XHJcbiAgICB0aGlzLnN2Zy5zZXRBdHRyaWJ1dGUoJ3ZpZXdCb3gnLCBgMCAwICR7dGhpcy53aWR0aH0gJHt0aGlzLmhlaWdodH1gKTtcclxuXHJcbiAgICB0aGlzLmJhc2VDaXJjbGUgPSB0aGlzLmNyZWF0ZUNpcmNsZSgnIzFiYjY5NicsIHRydWUpO1xyXG4gICAgdGhpcy5iZ0NpcmNsZSA9IHRoaXMuY3JlYXRlQ2lyY2xlKCcjY2NjJyk7XHJcbiAgICB0aGlzLmFkZChjb250YWluZXIsIHRpdGxlKTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZUNpcmNsZShjb2xvciwgaXNCYXNlID0gZmFsc2UpIHtcclxuICAgIGNvbnN0IGNpcmNsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyh0aGlzLnN2Z25zLCAnY2lyY2xlJyk7XHJcbiAgICBjb25zdCBjeCA9IHRoaXMud2lkdGggLyAyO1xyXG4gICAgY29uc3QgY3kgPSB0aGlzLmhlaWdodCAvIDI7XHJcbiAgICBjaXJjbGUuc2V0QXR0cmlidXRlKCdjeCcsIGN4KTtcclxuICAgIGNpcmNsZS5zZXRBdHRyaWJ1dGUoJ2N5JywgY3kpO1xyXG4gICAgY2lyY2xlLnNldEF0dHJpYnV0ZSgncicsIHRoaXMucmFkaXVzKTtcclxuICAgIGNpcmNsZS5zZXRBdHRyaWJ1dGUoJ2ZpbGwnLCAnbm9uZScpO1xyXG4gICAgY2lyY2xlLnNldEF0dHJpYnV0ZSgnc3Ryb2tlJywgY29sb3IpO1xyXG4gICAgY2lyY2xlLnNldEF0dHJpYnV0ZSgnc3Ryb2tlLXdpZHRoJywgJzE1Jyk7XHJcbiAgICBpZiAoaXNCYXNlKSB7XHJcbiAgICAgIGNpcmNsZS5zZXRBdHRyaWJ1dGUoJ3RyYW5zZm9ybScsIGByb3RhdGUoLTkwICR7Y3h9ICR7Y3l9KWApO1xyXG4gICAgICBjaXJjbGUuc2V0QXR0cmlidXRlKCdzdHJva2UtZGFzaGFycmF5JywgdGhpcy5zdHJva2VEYXNoYXJyYXkpO1xyXG4gICAgICBjaXJjbGUuc2V0QXR0cmlidXRlKCdzdHJva2UtZGFzaG9mZnNldCcsIHRoaXMuc3Ryb2tlRGFzaGFycmF5KTtcclxuICAgIH1cclxuICAgIHJldHVybiBjaXJjbGU7XHJcbiAgfVxyXG5cclxuICBhZGQoY29udGFpbmVyLCB0aXRsZSkge1xyXG4gICAgbGV0IGhvbWVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGhvbWVEaXYuY2xhc3NOYW1lID0gJ3NraWxsc19faW1nLWl0ZW0nXHJcbiAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBkaXYuY2xhc3NOYW1lID0gJ3NraWxsc19faW1nLXRpdGxlJztcclxuICAgIGRpdi50ZXh0Q29udGVudCA9IHRpdGxlO1xyXG4gICAgdGhpcy5zdmcuYXBwZW5kQ2hpbGQodGhpcy5iZ0NpcmNsZSk7XHJcbiAgICB0aGlzLnN2Zy5hcHBlbmRDaGlsZCh0aGlzLmJhc2VDaXJjbGUpO1xyXG4gICAgaG9tZURpdi5hcHBlbmRDaGlsZCh0aGlzLnN2ZylcclxuICAgIGhvbWVEaXYuYXBwZW5kQ2hpbGQoZGl2KVxyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGhvbWVEaXYpO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBkcmF3KHByb2dyZXNzKSB7XHJcbiAgICB0aGlzLmJhc2VDaXJjbGUuc2V0QXR0cmlidXRlKFxyXG4gICAgICAnc3Ryb2tlLWRhc2hvZmZzZXQnLFxyXG4gICAgICAoMSAtIHByb2dyZXNzICogdGhpcy5wZXJjZW50KSAqIHRoaXMuc3Ryb2tlRGFzaGFycmF5XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3Qgc2tpbGxIdG1sID0gbmV3IFNraWxsKDE1MCwgMTUwLCBmcm9udCwgMC45NSwgJ0h0bWwnKTtcclxuY29uc3Qgc2tpbGxDc3MgPSBuZXcgU2tpbGwoMTUwLCAxNTAsIGZyb250LCAwLjc1LCAnQ3NzJyk7XHJcbmNvbnN0IHNraWxsSnMgPSBuZXcgU2tpbGwoMTUwLCAxNTAsIGZyb250LCAwLjg1LCAnSnMnKTtcclxuXHJcbmNvbnN0IHNraWxsUFNxbCA9IG5ldyBTa2lsbCgxNTAsIDE1MCwgYmFjaywgMC40NSwgJ1Bvc3RncmUgU3FsJyk7XHJcbmNvbnN0IHNraWxsTm9kZSA9IG5ldyBTa2lsbCgxNTAsIDE1MCwgYmFjaywgMC43NSwgJ05vZGUgJiBOcG0nKTtcclxuY29uc3Qgc2tpbGxNb25nbyA9IG5ldyBTa2lsbCgxNTAsIDE1MCwgYmFjaywgMC43NSwgJ01vbmdvREInKTtcclxuXHJcbmNvbnN0IHNraWxsR3VscCA9IG5ldyBTa2lsbCgxNTAsIDE1MCwgd29ya0ZsLCAwLjk1LCAnR3VscCcpO1xyXG5jb25zdCBza2lsbEdpdCA9IG5ldyBTa2lsbCgxNTAsIDE1MCwgd29ya0ZsLCAwLjc1LCAnR2l0Jyk7XHJcbmNvbnN0IHNraWxsV2VicGFjayA9IG5ldyBTa2lsbCgxNTAsIDE1MCwgd29ya0ZsLCAwLjQ1LCAnV2VicGFjaycpO1xyXG5cclxuZnVuY3Rpb24gYW5pbWF0ZShvcHRpb25zKSB7XHJcbiAgbGV0IHN0YXJ0ID0gcGVyZm9ybWFuY2Uubm93KCk7XHJcblxyXG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiBfYW5pbWF0ZSh0aW1lKSB7XHJcbiAgICBsZXQgdGltZUZyYWN0aW9uID0gKHRpbWUgLSBzdGFydCkgLyBvcHRpb25zLmR1cmF0aW9uO1xyXG4gICAgaWYgKHRpbWVGcmFjdGlvbiA+IDEpIHRpbWVGcmFjdGlvbiA9IDE7XHJcbiAgICBsZXQgcHJvZ3Jlc3MgPSBvcHRpb25zLnRpbWluZyh0aW1lRnJhY3Rpb24pO1xyXG4gICAgb3B0aW9ucy5kcmF3KHByb2dyZXNzKTtcclxuICAgIGlmICh0aW1lRnJhY3Rpb24gPCAxKSB7XHJcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShfYW5pbWF0ZSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuXHJcbmxldCBvZmZBbmltID0ge307XHJcbmxldCBoZWlnaHRMaXN0ID0gKCk9PiBNYXRoLmZsb29yKGNvbnRyLnNjcm9sbEhlaWdodCAvIDMpO1xyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsICgpPT4ge1xyXG5cclxuICBpZigod2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3ApID09PSAwKSB7XHJcbiAgICBmb3IobGV0IGtleSBpbiBvZmZBbmltKSB7XHJcbiAgICAgIG9mZkFuaW1ba2V5XSA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaWYoc2Nyb2xsVG9wID4gKGdldENvb3Jkcyhmcm9udCkudG9wICsgaGVpZ2h0TGlzdCgpKSAmJiAhb2ZmQW5pbS5mcm9udCkge1xyXG4gICAgYW5pbWF0ZSh7XHJcbiAgICAgIGR1cmF0aW9uOiA3MDAsXHJcbiAgICAgIHRpbWluZzogZnVuY3Rpb24odGltZUZyYWN0aW9uKSB7XHJcbiAgICAgICAgcmV0dXJuIHRpbWVGcmFjdGlvbjtcclxuICAgICAgfSxcclxuICAgICAgZHJhdzogZnVuY3Rpb24ocHJvZ3Jlc3MpIHtcclxuICAgICAgICBza2lsbEh0bWwuZHJhdyhwcm9ncmVzcyk7XHJcbiAgICAgICAgc2tpbGxDc3MuZHJhdyhwcm9ncmVzcyk7XHJcbiAgICAgICAgc2tpbGxKcy5kcmF3KHByb2dyZXNzKTtcclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgIG9mZkFuaW0uZnJvbnQgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgaWYoc2Nyb2xsVG9wID4gKGdldENvb3JkcyhiYWNrKS50b3AgKyBoZWlnaHRMaXN0KCkpICYmICFvZmZBbmltLmJhY2spIHtcclxuICAgIGFuaW1hdGUoe1xyXG4gICAgICBkdXJhdGlvbjogNzAwLFxyXG4gICAgICB0aW1pbmc6IGZ1bmN0aW9uKHRpbWVGcmFjdGlvbikge1xyXG4gICAgICAgIHJldHVybiB0aW1lRnJhY3Rpb247XHJcbiAgICAgIH0sXHJcbiAgICAgIGRyYXc6IGZ1bmN0aW9uKHByb2dyZXNzKSB7XHJcbiAgICAgICAgc2tpbGxQU3FsLmRyYXcocHJvZ3Jlc3MpO1xyXG4gICAgICAgIHNraWxsTm9kZS5kcmF3KHByb2dyZXNzKTtcclxuICAgICAgICBza2lsbE1vbmdvLmRyYXcocHJvZ3Jlc3MpO1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgb2ZmQW5pbS5iYWNrID0gdHJ1ZTtcclxuICB9XHJcbiAgXHJcbiAgaWYoc2Nyb2xsVG9wID4gKGdldENvb3Jkcyh3b3JrRmwpLnRvcCArIGhlaWdodExpc3QoKSkgJiYgIW9mZkFuaW0ud29ya2ZsKSB7XHJcbiAgICBhbmltYXRlKHtcclxuICAgICAgZHVyYXRpb246IDcwMCxcclxuICAgICAgdGltaW5nOiBmdW5jdGlvbih0aW1lRnJhY3Rpb24pIHtcclxuICAgICAgICByZXR1cm4gdGltZUZyYWN0aW9uO1xyXG4gICAgICB9LFxyXG4gICAgICBkcmF3OiBmdW5jdGlvbihwcm9ncmVzcykge1xyXG4gICAgICAgIHNraWxsR3VscC5kcmF3KHByb2dyZXNzKTtcclxuICAgICAgICBza2lsbEdpdC5kcmF3KHByb2dyZXNzKTtcclxuICAgICAgICBza2lsbFdlYnBhY2suZHJhdyhwcm9ncmVzcyk7XHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICBvZmZBbmltLndvcmtmbCA9IHRydWU7XHJcbiAgfVxyXG59KVxyXG4iLCJsZXQgd3JhcHAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFjdHMtZm9ybScpXHJcbmxldCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhY3RzLWZvcm1fX2JsdXInKVxyXG5sZXQgaW1nQmdXcmFwcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mZWVkYmFja19fYmcnKVxyXG5sZXQgaW1nQmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmVlZGJhY2tfX2JnLWltZycpXHJcblxyXG5pZih3cmFwcCAhPT0gbnVsbCkge1xyXG4gIGxldCBibHVyID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHNldCgpIHtcclxuICAgICAgICBsZXQgaW1nV2lkdGggPSBpbWdCZ1dyYXBwLm9mZnNldFdpZHRoLFxyXG4gICAgICAgICAgICBpbWdTaXplVG9wID0gaW1nQmcub2Zmc2V0VG9wLFxyXG4gICAgICAgICAgICBwb3NMZWZ0ID0gLXdyYXBwLm9mZnNldExlZnQsXHJcbiAgICAgICAgICAgIHBvc1RvcCA9IC0od3JhcHAub2Zmc2V0VG9wIC0gaW1nU2l6ZVRvcCksXHJcbiAgICAgICAgICAgIGJsdXJDU1MgPSBmb3JtLnN0eWxlO1xyXG5cclxuICAgICAgICBibHVyQ1NTLmJhY2tncm91bmRTaXplID0gYCR7aW1nV2lkdGh9cHggYXV0b2BcclxuICAgICAgICBibHVyQ1NTLmJhY2tncm91bmRQb3NpdGlvbiA9IGAke3Bvc0xlZnR9cHggJHtwb3NUb3B9cHhgXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KCkpXHJcblxyXG4gIHdpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbigpIHtcclxuICAgIGJsdXIuc2V0KCk7XHJcbiAgfVxyXG5cclxuXHJcbiAgd2luZG93Lm9ucmVzaXplID0gZnVuY3Rpb24oKSB7XHJcbiAgICBibHVyLnNldCgpO1xyXG4gIH0gIFxyXG59XHJcblxyXG4iLCIvLyBidXR0b25zIHNsaWRlclxyXG5cclxubGV0IHNsaWRlclN0YXJ0ID0gbmV3IFNsaWRlcih7XHJcbiAgY29udGFpbmVyVmlldzogJy5zbGlkZXJfX3ZpZXdzLWxpc3QnLFxyXG4gIGNvbnRhaW5lckxlZnQ6ICcuYnV0dG9ucy1sZWZ0X19saXN0JyxcclxuICBjb250YWluZXJSaWdodDogJy5idXR0b25zLXJpZ2h0X19saXN0JyxcclxuICBzbGlkZXJJbmZvOicuc2xpZGVyX19pbmZvLWxpc3QnLFxyXG4gIHNsaWRlOiAnLnNsaWRlJyxcclxuICBidXR0b25zTGVmdDogJy5zbGlkZXJfX2J1dHRvbnMtbGVmdCAuc2xpZGVyX19idXR0b25zLWltZycsXHJcbiAgYnV0dG9uc1JpZ2h0OiAnLnNsaWRlcl9fYnV0dG9ucy1yaWdodCAuc2xpZGVyX19idXR0b25zLWltZycsXHJcbiAgZHVyYXRpb246ICc4MDAnLFxyXG5cclxufSk7XHJcblxyXG5mdW5jdGlvbiBTbGlkZXIob3B0aW9ucykge1xyXG4gIGxldCB0aGF0ID0gdGhpcztcclxuICB0aGF0LmNvdW50ZXIgPSAwO1xyXG4gIHRoYXQuY291bnRlclByZXY7XHJcbiAgdGhhdC5jb3VudGVyTmV4dDtcclxuICB0aGF0LmluUHJvY2VzcyA9IGZhbHNlO1xyXG4gIHRoYXQuY29udGFpbmVyVmlldyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Iob3B0aW9ucy5jb250YWluZXJWaWV3KTtcclxuICB0aGF0LmNvbnRhaW5lckxlZnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG9wdGlvbnMuY29udGFpbmVyTGVmdCk7XHJcbiAgdGhhdC5jb250YWluZXJSaWdodCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Iob3B0aW9ucy5jb250YWluZXJSaWdodCk7XHJcblxyXG4gIHRoYXQuc2xpZGVySW5mbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Iob3B0aW9ucy5zbGlkZXJJbmZvKTtcclxuXHJcbiAgaWYoIXRoYXQuY29udGFpbmVyVmlldyAmJiAhdGhhdC5jb250YWluZXJMZWZ0ICYmICF0aGF0LmNvbnRhaW5lclJpZ2h0KSB7XHJcbiAgICByZXR1cm5cclxuICB9IGVsc2Uge1xyXG4gICAgdGhhdC5sZW5naHRDaGlsZCA9IE1hdGgubWF4KFxyXG4gICAgICBBcnJheS5mcm9tKHRoYXQuY29udGFpbmVyVmlldy5xdWVyeVNlbGVjdG9yQWxsKG9wdGlvbnMuc2xpZGUpKS5sZW5ndGgsXHJcbiAgICAgIEFycmF5LmZyb20odGhhdC5jb250YWluZXJMZWZ0LnF1ZXJ5U2VsZWN0b3JBbGwob3B0aW9ucy5zbGlkZSkpLmxlbmd0aCxcclxuICAgICAgQXJyYXkuZnJvbSh0aGF0LmNvbnRhaW5lclJpZ2h0LnF1ZXJ5U2VsZWN0b3JBbGwob3B0aW9ucy5zbGlkZSkpLmxlbmd0aFxyXG4gICAgKTtcclxuICB9XHJcbiAgXHJcbiAgdGhhdC5idXR0b25zTGVmdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Iob3B0aW9ucy5idXR0b25zTGVmdCk7XHJcbiAgdGhhdC5idXR0b25zUmlnaHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG9wdGlvbnMuYnV0dG9uc1JpZ2h0KTtcclxuICB0aGF0LmR1cmF0aW9uID0gb3B0aW9ucy5kdXJhdGlvbjtcclxuICBcclxuICB0aGF0Lm1vdmVTbGlkZSA9IGZ1bmN0aW9uKGNvbnRhaW5lciwgb3JpZW50YXRpb24sIGRpcmVjdGlvbikge1xyXG5cclxuICAgIGxldCBpdGVtcyA9IEFycmF5LmZyb20oY29udGFpbmVyLmNoaWxkcmVuKTtcclxuICAgIGxldCBhY3RpdmVJdGVtID0ge307XHJcbiAgICBsZXQgcmVxSXRlbTtcclxuICAgIGxldCB2aWV3SWR4O1xyXG4gICAgXHJcbiAgICBpdGVtcy5mb3JFYWNoKChlbCwgaSk9PiB7XHJcbiAgICAgIGlmKGVsLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcclxuICAgICAgICBhY3RpdmVJdGVtLmVsZW0gPSBlbCxcclxuICAgICAgICBhY3RpdmVJdGVtLmluZGV4ID0gaVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZih0aGF0LmNvdW50ZXIgPj0gaXRlbXMubGVuZ3RoKSB0aGF0LmNvdW50ZXIgPSAwO1xyXG4gICAgaWYodGhhdC5jb3VudGVyIDwgMCkgdGhhdC5jb3VudGVyID0gaXRlbXMubGVuZ3RoIC0gMTtcclxuICAgIHRoYXQuY291bnRTbGlkZSggYWN0aXZlSXRlbS5pbmRleCwgdGhhdC5sZW5naHRDaGlsZCk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhhY3RpdmVJdGVtLmluZGV4KTtcclxuICAgIGlmKG9yaWVudGF0aW9uID09PSAncHJldicpIHtcclxuICAgICAgcmVxSXRlbSA9IGl0ZW1zW3RoYXQuY291bnRlclByZXZdO1xyXG4gICAgICB2aWV3SWR4ID0gdGhhdC5jb3VudGVyUHJldjtcclxuICAgIH1cclxuXHJcbiAgICBpZihvcmllbnRhdGlvbiA9PT0gJ25leHQnKSB7XHJcbiAgICAgIHJlcUl0ZW0gPSBpdGVtc1t0aGF0LmNvdW50ZXJOZXh0XTtcclxuICAgICAgdmlld0lkeCA9IHRoYXQuY291bnRlck5leHQ7XHJcbiAgICB9XHJcbiAgICBhY3RpdmVJdGVtID0gYWN0aXZlSXRlbS5lbGVtO1xyXG5cclxuICAgIGlmKCFkaXJlY3Rpb24pIHtcclxuICAgICAgYWN0aXZlSXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgcmVxSXRlbS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgdGhhdC5zbGlkZXJJbmZvRmlsbCh0aGF0LnNsaWRlckluZm8sIHRoYXQuY29udGFpbmVyVmlldywgdmlld0lkeClcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGFuaW1hdGUoe1xyXG4gICAgICAgIGR1cmF0aW9uOiB0aGF0LmR1cmF0aW9uLFxyXG4gICAgICAgIGRyYXcocHJvZ3Jlc3MpIHtcclxuICAgICAgICAgIGFjdGl2ZUl0ZW0uc3R5bGUudG9wID0gKGRpcmVjdGlvbiA9PT0gJ2Rvd24nKSA/IGAke3Byb2dyZXNzfSVgIDogYCR7LXByb2dyZXNzfSVgO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgXHJcbiAgICAgIGFuaW1hdGUoe1xyXG4gICAgICAgIGR1cmF0aW9uOiB0aGF0LmR1cmF0aW9uLFxyXG4gICAgICAgIGRyYXcocHJvZ3Jlc3MpIHtcclxuICAgICAgICAgIHJlcUl0ZW0uc3R5bGUudG9wID0gKGRpcmVjdGlvbiA9PT0gJ2Rvd24nKSA/IGAkeygtMTAwKSArIHByb2dyZXNzfSVgIDogYCR7MTAwIC0gcHJvZ3Jlc3N9JWA7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBhZnRlcigpIHtcclxuICAgICAgICAgIGFjdGl2ZUl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgICByZXFJdGVtLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgdGhhdC5pblByb2Nlc3MgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdGhhdC5pbml0ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAvLyBjYWxjdWxhdGlvbiBjb3VudGVyc1xyXG4gICAgdGhhdC5jb3VudFNsaWRlKHRoYXQuY291bnRlciwgdGhhdC5sZW5naHRDaGlsZCk7XHJcbiAgICAvLyBjYWxjdWxhdGlvbiBjb3VudGVyc1xyXG5cclxuICAgIC8vIGluaXRpYWwgZmlyc3Qgc2xpZGVzXHJcbiAgICB0aGF0LnNsaWRlSW5pdCh0aGF0LmNvbnRhaW5lclZpZXcsIHRoYXQuY291bnRlcik7XHJcbiAgICB0aGF0LnNsaWRlSW5pdCh0aGF0LmNvbnRhaW5lckxlZnQsIHRoYXQuY291bnRlclByZXYpO1xyXG4gICAgdGhhdC5zbGlkZUluaXQodGhhdC5jb250YWluZXJSaWdodCwgdGhhdC5jb3VudGVyTmV4dCk7XHJcbiAgICAvLyBpbml0aWFsIGZpcnN0IHNsaWRlc1xyXG4gICAgdGhhdC5zbGlkZXJJbmZvRmlsbCh0aGF0LnNsaWRlckluZm8sIHRoYXQuY29udGFpbmVyVmlldywgdGhhdC5jb3VudGVyKVxyXG4gICAgLy8gbGlzdGVuZXJzXHJcbiAgICB0aGF0LmJ1dHRvbnNMZWZ0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PiB7XHJcbiAgICAgIGlmKCF0aGF0LmluUHJvY2Vzcykge1xyXG4gICAgICAgIHRoYXQuaW5Qcm9jZXNzID0gdHJ1ZTtcclxuICAgICAgICB0aGF0Lm1vdmVTbGlkZSh0aGF0LmNvbnRhaW5lclZpZXcsICdwcmV2Jyk7XHJcbiAgICAgICAgdGhhdC5tb3ZlU2xpZGUodGhhdC5jb250YWluZXJMZWZ0LCAgJ3ByZXYnLCAnZG93bicpO1xyXG4gICAgICAgIHRoYXQubW92ZVNsaWRlKHRoYXQuY29udGFpbmVyUmlnaHQsICAncHJldicsICd1cCcpO1xyXG4gICAgICAgIC8vIHRoYXQuY291bnRlci0tO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHRoYXQuYnV0dG9uc1JpZ2h0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PiB7XHJcbiAgICAgIGlmKCF0aGF0LmluUHJvY2Vzcykge1xyXG4gICAgICAgIHRoYXQuaW5Qcm9jZXNzID0gdHJ1ZTtcclxuICAgICAgICB0aGF0Lm1vdmVTbGlkZSh0aGF0LmNvbnRhaW5lclZpZXcsICduZXh0Jyk7XHJcbiAgICAgICAgdGhhdC5tb3ZlU2xpZGUodGhhdC5jb250YWluZXJMZWZ0LCAnbmV4dCcsICdkb3duJyk7XHJcbiAgICAgICAgdGhhdC5tb3ZlU2xpZGUodGhhdC5jb250YWluZXJSaWdodCwgJ25leHQnLCAndXAnKTtcclxuICAgICAgICAvLyB0aGF0LmNvdW50ZXIrKztcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICAvLyBsaXN0ZW5lcnNcclxuICB9XHJcblxyXG4gIHRoYXQuc2xpZGVJbml0ID0gKGNvbnRhaW5lciwgaSk9PiB7XHJcbiAgICBsZXQgY2hpbGQgPSBjb250YWluZXIuY2hpbGRyZW47XHJcbiAgICBjaGlsZFtpXS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICB9XHJcblxyXG4gIHRoYXQuc2xpZGVySW5mb0ZpbGwgPSAoY29udGFpbmVyLCBnZXRBdHRyQ29udGFpbmVyLCBpKSA9PiB7XHJcblxyXG4gICAgbGV0IHZpZXdUaXRsZSA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuaW5mby1pdGVtX190aXRsZScpLFxyXG4gICAgICAgIHZpZXdEZXNjID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5pbmZvLWl0ZW1fX2Rlc2MnKSxcclxuICAgICAgICB2aWV3TGluayA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuaW5mby1pdGVtX19saW5rJyk7XHJcblxyXG4gICAgbGV0IGNoaWxkID0gQXJyYXkuZnJvbShnZXRBdHRyQ29udGFpbmVyLmNoaWxkcmVuKTtcclxuXHJcbiAgICBpZihpID49IGNoaWxkLmxlbmd0aCkgaSA9IDA7XHJcbiAgICBpZihpIDwgMCkgaSA9IGNoaWxkLmxlbmd0aCAtIDE7XHJcblxyXG4gICAgbGV0IHRpdGxlID0gY2hpbGRbaV0uZ2V0QXR0cmlidXRlKCdkYXRhLXRpdGxlJyksXHJcbiAgICAgICAgZGVzYyA9IGNoaWxkW2ldLmdldEF0dHJpYnV0ZSgnZGF0YS10ZWNobm9sb2d5JyksXHJcbiAgICAgICAgbGluayA9IGNoaWxkW2ldLmdldEF0dHJpYnV0ZSgnZGF0YS1saW5rJyk7XHJcblxyXG4gICAgdGl0bGUgPSBzcGxpdFdvcmQodGl0bGUsIHZpZXdUaXRsZSwgdGhhdC5kdXJhdGlvbik7XHJcbiAgICBkZXNjID0gc3BsaXRXb3JkKGRlc2MsIHZpZXdEZXNjLCB0aGF0LmR1cmF0aW9uKTtcclxuICAgIHZpZXdMaW5rLmhyZWYgPSBsaW5rO1xyXG4gIH1cclxuICBcclxuICB0aGF0LmNvdW50U2xpZGUgPSAoY291bnRlciwgYXJyU2xpZGUpPT4ge1xyXG4gICAgaWYoY291bnRlciA9PT0gYXJyU2xpZGUgLSAxKSB7XHJcbiAgICAgIHRoYXQuY291bnRlck5leHQgPSAwXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGF0LmNvdW50ZXJOZXh0ID0gY291bnRlciArIDFcclxuICAgIH1cclxuICAgIGlmKGNvdW50ZXIgPT09IDApIHtcclxuICAgICAgdGhhdC5jb3VudGVyUHJldiA9IGFyclNsaWRlIC0gMVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhhdC5jb3VudGVyUHJldiA9IGNvdW50ZXIgLSAxXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB0aGF0LmluaXQoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc3BsaXRXb3JkKHdvcmQsIG5vZGVFbGVtLCBkdXIpIHtcclxuICBsZXQgZHVyYXRpb24gPSBkdXIvd29yZC5zcGxpdCgnJykubGVuZ3RoO1xyXG4gIGxldCBzcGxXb3JkICA9IHdvcmQuc3BsaXQoJyAnKTtcclxuICBub2RlRWxlbS50ZXh0Q29udGVudCA9ICcnO1xyXG4gIGxldCBkaXYgPSAwO1xyXG4gIHNwbFdvcmQuZm9yRWFjaCgoZWwsaSk9PiB7XHJcbiAgICBcclxuICAgIGxldCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgc3Bhbi5jbGFzc05hbWUgPSAnd29yZCc7XHJcblxyXG4gICAgZWwuc3BsaXQoJycpLmZvckVhY2goKGxldGVyLCBqKT0+IHtcclxuICAgICAgbGV0IHNwYW5MZXRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgICAgc3BhbkxldGVyLnRleHRDb250ZW50ID0gbGV0ZXI7XHJcbiAgICAgIHNwYW4uYXBwZW5kQ2hpbGQoc3BhbkxldGVyKTtcclxuICAgICAgc2V0VGltZW91dCgoKT0+IHtcclxuICAgICAgICBzcGFuTGV0ZXIuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcclxuICAgICAgfSwgZHVyYXRpb24gKiBkaXYgKiAxLjMpO1xyXG4gICAgICBkaXYrKztcclxuICAgIH0pXHJcbiAgICBub2RlRWxlbS5hcHBlbmRDaGlsZChzcGFuKTtcclxuICB9KTtcclxuICByZXR1cm4gc3BsV29yZDtcclxufVxyXG5cclxuLy8gPT09ICBSQUYgID09PVxyXG5mdW5jdGlvbiBhbmltYXRlKHtkcmF3LCBkdXJhdGlvbiwgYWZ0ZXJ9KSB7XHJcblxyXG4gIGxldCBzdGFydCA9IHBlcmZvcm1hbmNlLm5vdygpO1xyXG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiBhbmltYXRlKHRpbWUpIHtcclxuICAgIC8vIHRpbWVGcmFjdGlvbiBnb2VzIGZyb20gMCB0byAxXHJcbiAgICBsZXQgdGltZUZyYWN0aW9uID0gKCh0aW1lIC0gc3RhcnQpKTtcclxuXHJcbiAgICBpZih0aW1lRnJhY3Rpb24gPD0gMCkgdGltZUZyYWN0aW9uID0gMTtcclxuICAgIGlmICh0aW1lRnJhY3Rpb24gPiBkdXJhdGlvbikgdGltZUZyYWN0aW9uID0gZHVyYXRpb247XHJcbiAgICAvLyBjYWxjdWxhdGUgdGhlIGN1cnJlbnQgYW5pbWF0aW9uIHN0YXRlXHJcbiAgICBsZXQgcHJvZ3Jlc3MgPSAodGltZUZyYWN0aW9uIC8gZHVyYXRpb24pICogMTAwXHJcbiAgICBcclxuICAgIGRyYXcocHJvZ3Jlc3MpOyAvLyBkcmF3IGl0XHJcblxyXG4gICAgaWYgKHRpbWVGcmFjdGlvbiA8IGR1cmF0aW9uKSB7XHJcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKTtcclxuICAgIH0gZWxzZSBpZih0aW1lRnJhY3Rpb24gPj0gZHVyYXRpb24gJiYgYWZ0ZXIpIHtcclxuICAgICAgYWZ0ZXIoKTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG4iLCIndXNlIHN0cmljdCdcclxuXHJcbi8vIHN2ZyBwb2x5ZmlsbFxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ly9cclxuaW1wb3J0IHN2ZzRldmVyeWJvZHkgZnJvbSAnc3ZnNGV2ZXJ5Ym9keSc7XHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0vL1xyXG5cclxuc3ZnNGV2ZXJ5Ym9keSgpXHJcblxyXG4vLyBwb2x5ZmlsbFxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ly9cclxuaW1wb3J0ICcuL2xpYi9wb2x5ZmlsbHMnO1xyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ly9cclxuXHJcbmltcG9ydCAnLi9jb21tb24vbWFpbic7XHJcbmltcG9ydCAnLi9jb21tb24vbW9kYWwnO1xyXG5pbXBvcnQgJy4vY29tbW9uL21lbnUnO1xyXG5pbXBvcnQgJy4vY29tbW9uL3dvcmsnO1xyXG5pbXBvcnQgJy4vY29tbW9uL3BhcmFsYXgnO1xyXG5pbXBvcnQgJy4vY29tbW9uL3BhcmFsYXgtc2Nyb2xsJztcclxuaW1wb3J0ICcuL2NvbW1vbi93b3Jrcy1zbGlkZXInO1xyXG5pbXBvcnQgJy4vY29tbW9uL3NraWxscyc7XHJcbiIsIi8vIEFycmF5LmZyb21cclxuaWYgKCFBcnJheS5mcm9tKSB7XHJcbiAgQXJyYXkuZnJvbSA9IChmdW5jdGlvbigpIHtcclxuICAgIHZhciB0b1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XHJcbiAgICB2YXIgaXNDYWxsYWJsZSA9IGZ1bmN0aW9uKGZuKSB7XHJcbiAgICAgIHJldHVybiB0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicgfHwgdG9TdHIuY2FsbChmbikgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XHJcbiAgICB9O1xyXG4gICAgdmFyIHRvSW50ZWdlciA9IGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgICB2YXIgbnVtYmVyID0gTnVtYmVyKHZhbHVlKTtcclxuICAgICAgaWYgKGlzTmFOKG51bWJlcikpIHsgcmV0dXJuIDA7IH1cclxuICAgICAgaWYgKG51bWJlciA9PT0gMCB8fCAhaXNGaW5pdGUobnVtYmVyKSkgeyByZXR1cm4gbnVtYmVyOyB9XHJcbiAgICAgIHJldHVybiAobnVtYmVyID4gMCA/IDEgOiAtMSkgKiBNYXRoLmZsb29yKE1hdGguYWJzKG51bWJlcikpO1xyXG4gICAgfTtcclxuICAgIHZhciBtYXhTYWZlSW50ZWdlciA9IE1hdGgucG93KDIsIDUzKSAtIDE7XHJcbiAgICB2YXIgdG9MZW5ndGggPSBmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgICAgdmFyIGxlbiA9IHRvSW50ZWdlcih2YWx1ZSk7XHJcbiAgICAgIHJldHVybiBNYXRoLm1pbihNYXRoLm1heChsZW4sIDApLCBtYXhTYWZlSW50ZWdlcik7XHJcbiAgICB9O1xyXG5cclxuICAgIC8vINCh0LLQvtC50YHRgtCy0L4gbGVuZ3RoINC80LXRgtC+0LTQsCBmcm9tINGA0LDQstC90L4gMS5cclxuICAgIHJldHVybiBmdW5jdGlvbiBmcm9tKGFycmF5TGlrZS8qLCBtYXBGbiwgdGhpc0FyZyAqLykge1xyXG4gICAgICAvLyAxLiDQn9C+0LvQvtC20LjQvCBDINGA0LDQstC90YvQvCDQt9C90LDRh9C10L3QuNGOIHRoaXMuXHJcbiAgICAgIHZhciBDID0gdGhpcztcclxuXHJcbiAgICAgIC8vIDIuINCf0L7Qu9C+0LbQuNC8IGl0ZW1zINGA0LDQstC90YvQvCBUb09iamVjdChhcnJheUxpa2UpLlxyXG4gICAgICB2YXIgaXRlbXMgPSBPYmplY3QoYXJyYXlMaWtlKTtcclxuXHJcbiAgICAgIC8vIDMuIFJldHVybklmQWJydXB0KGl0ZW1zKS5cclxuICAgICAgaWYgKGFycmF5TGlrZSA9PSBudWxsKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJyYXkuZnJvbSByZXF1aXJlcyBhbiBhcnJheS1saWtlIG9iamVjdCAtIG5vdCBudWxsIG9yIHVuZGVmaW5lZCcpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyA0LiDQldGB0LvQuCBtYXBmbiDRgNCw0LLQtdC9IHVuZGVmaW5lZCwg0L/QvtC70L7QttC40LwgbWFwcGluZyDRgNCw0LLQvdGL0LwgZmFsc2UuXHJcbiAgICAgIHZhciBtYXBGbiA9IGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdm9pZCB1bmRlZmluZWQ7XHJcbiAgICAgIHZhciBUO1xyXG4gICAgICBpZiAodHlwZW9mIG1hcEZuICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIC8vIDUuINC40L3QsNGH0LVcclxuICAgICAgICAvLyA1LiBhLiDQldGB0LvQuCDQstGL0LfQvtCyIElzQ2FsbGFibGUobWFwZm4pINGA0LDQstC10L0gZmFsc2UsINCy0YvQutC40LTRi9Cy0LDQtdC8INC40YHQutC70Y7Rh9C10L3QuNC1IFR5cGVFcnJvci5cclxuICAgICAgICBpZiAoIWlzQ2FsbGFibGUobWFwRm4pKSB7XHJcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcnJheS5mcm9tOiB3aGVuIHByb3ZpZGVkLCB0aGUgc2Vjb25kIGFyZ3VtZW50IG11c3QgYmUgYSBmdW5jdGlvbicpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gNS4gYi4g0JXRgdC70LggdGhpc0FyZyDQv9GA0LjRgdGD0YLRgdGC0LLRg9C10YIsINC/0L7Qu9C+0LbQuNC8IFQg0YDQsNCy0L3Ri9C8IHRoaXNBcmc7INC40L3QsNGH0LUg0L/QvtC70L7QttC40LwgVCDRgNCw0LLQvdGL0LwgdW5kZWZpbmVkLlxyXG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMikge1xyXG4gICAgICAgICAgVCA9IGFyZ3VtZW50c1syXTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIDEwLiDQn9C+0LvQvtC20LjQvCBsZW5WYWx1ZSDRgNCw0LLQvdGL0LwgR2V0KGl0ZW1zLCBcImxlbmd0aFwiKS5cclxuICAgICAgLy8gMTEuINCf0L7Qu9C+0LbQuNC8IGxlbiDRgNCw0LLQvdGL0LwgVG9MZW5ndGgobGVuVmFsdWUpLlxyXG4gICAgICB2YXIgbGVuID0gdG9MZW5ndGgoaXRlbXMubGVuZ3RoKTtcclxuXHJcbiAgICAgIC8vIDEzLiDQldGB0LvQuCBJc0NvbnN0cnVjdG9yKEMpINGA0LDQstC10L0gdHJ1ZSwg0YLQvlxyXG4gICAgICAvLyAxMy4gYS4g0J/QvtC70L7QttC40LwgQSDRgNCw0LLQvdGL0Lwg0YDQtdC30YPQu9GM0YLQsNGC0YMg0LLRi9C30L7QstCwINCy0L3Rg9GC0YDQtdC90L3QtdCz0L4g0LzQtdGC0L7QtNCwIFtbQ29uc3RydWN0XV1cclxuICAgICAgLy8gICAgINC+0LHRitC10LrRgtCwIEMg0YHQviDRgdC/0LjRgdC60L7QvCDQsNGA0LPRg9C80LXQvdGC0L7Qsiwg0YHQvtC00LXRgNC20LDRidC40Lwg0LXQtNC40L3RgdGC0LLQtdC90L3Ri9C5INGN0LvQtdC80LXQvdGCIGxlbi5cclxuICAgICAgLy8gMTQuIGEuINCY0L3QsNGH0LUsINC/0L7Qu9C+0LbQuNC8IEEg0YDQsNCy0L3Ri9C8IEFycmF5Q3JlYXRlKGxlbikuXHJcbiAgICAgIHZhciBBID0gaXNDYWxsYWJsZShDKSA/IE9iamVjdChuZXcgQyhsZW4pKSA6IG5ldyBBcnJheShsZW4pO1xyXG5cclxuICAgICAgLy8gMTYuINCf0L7Qu9C+0LbQuNC8IGsg0YDQsNCy0L3Ri9C8IDAuXHJcbiAgICAgIHZhciBrID0gMDtcclxuICAgICAgLy8gMTcuINCf0L7QutCwIGsgPCBsZW4sINCx0YPQtNC10Lwg0L/QvtCy0YLQvtGA0Y/RgtGMLi4uICjRiNCw0LPQuCDRgSBhINC/0L4gaClcclxuICAgICAgdmFyIGtWYWx1ZTtcclxuICAgICAgd2hpbGUgKGsgPCBsZW4pIHtcclxuICAgICAgICBrVmFsdWUgPSBpdGVtc1trXTtcclxuICAgICAgICBpZiAobWFwRm4pIHtcclxuICAgICAgICAgIEFba10gPSB0eXBlb2YgVCA9PT0gJ3VuZGVmaW5lZCcgPyBtYXBGbihrVmFsdWUsIGspIDogbWFwRm4uY2FsbChULCBrVmFsdWUsIGspO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBBW2tdID0ga1ZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBrICs9IDE7XHJcbiAgICAgIH1cclxuICAgICAgLy8gMTguINCf0L7Qu9C+0LbQuNC8IHB1dFN0YXR1cyDRgNCw0LLQvdGL0LwgUHV0KEEsIFwibGVuZ3RoXCIsIGxlbiwgdHJ1ZSkuXHJcbiAgICAgIEEubGVuZ3RoID0gbGVuO1xyXG4gICAgICAvLyAyMC4g0JLQtdGA0L3RkdC8IEEuXHJcbiAgICAgIHJldHVybiBBO1xyXG4gICAgfTtcclxuICB9KCkpO1xyXG59XHJcblxyXG4vLyBBcnJheS5pc0FycmF5XHJcbmlmICghQXJyYXkuaXNBcnJheSkge1xyXG4gIEFycmF5LmlzQXJyYXkgPSBmdW5jdGlvbihhcmcpIHtcclxuICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJnKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcclxuICB9O1xyXG59XHJcblxyXG4vLyBBcnJheS5vZlxyXG5pZiAoIUFycmF5Lm9mKSB7XHJcbiAgQXJyYXkub2YgPSBmdW5jdGlvbigpIHtcclxuICAgIHJldHVybiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpO1xyXG4gIH07XHJcbn1cclxuXHJcbi8vIEFycmF5LmZpbmRcclxuaWYgKCFBcnJheS5wcm90b3R5cGUuZmluZCkge1xyXG4gIEFycmF5LnByb3RvdHlwZS5maW5kID0gZnVuY3Rpb24ocHJlZGljYXRlKSB7XHJcbiAgICBpZiAodGhpcyA9PSBudWxsKSB7XHJcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FycmF5LnByb3RvdHlwZS5maW5kIGNhbGxlZCBvbiBudWxsIG9yIHVuZGVmaW5lZCcpO1xyXG4gICAgfVxyXG4gICAgaWYgKHR5cGVvZiBwcmVkaWNhdGUgIT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigncHJlZGljYXRlIG11c3QgYmUgYSBmdW5jdGlvbicpO1xyXG4gICAgfVxyXG4gICAgdmFyIGxpc3QgPSBPYmplY3QodGhpcyk7XHJcbiAgICB2YXIgbGVuZ3RoID0gbGlzdC5sZW5ndGggPj4+IDA7XHJcbiAgICB2YXIgdGhpc0FyZyA9IGFyZ3VtZW50c1sxXTtcclxuICAgIHZhciB2YWx1ZTtcclxuXHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHZhbHVlID0gbGlzdFtpXTtcclxuICAgICAgaWYgKHByZWRpY2F0ZS5jYWxsKHRoaXNBcmcsIHZhbHVlLCBpLCBsaXN0KSkge1xyXG4gICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICB9O1xyXG59IiwiY29uc3QgSEVBREVSID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcicpO1xyXG5jb25zdCBGT09URVIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9vdGVyJyk7XHJcblxyXG5sZXQgc2Nyb2xsVG9wXHJcbnNjcm9sbFRvcCA9IHdpbmRvdy5wYWdlWU9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xyXG5zY3JvbGxUb3AgPSBzY3JvbGxUb3AgKyBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0XHJcblxyXG5sZXQgYm9keSA9IGRvY3VtZW50LmJvZHksXHJcbiAgICBodG1sID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xyXG5sZXQgcGFnZUhlaWdodCA9IE1hdGgubWF4KCBib2R5LnNjcm9sbEhlaWdodCwgYm9keS5vZmZzZXRIZWlnaHQsIGh0bWwuY2xpZW50SGVpZ2h0LCBodG1sLnNjcm9sbEhlaWdodCwgaHRtbC5vZmZzZXRIZWlnaHQgKTtcclxuXHJcblxyXG5sZXQgb3BlbldpZGdldCA9IHtcclxuICBtb2JNZW51OiBmYWxzZSxcclxuICBiYXNrZXRQb3BVcDogZmFsc2UsXHJcbiAgcG9wVXBTbGlkZXI6IGZhbHNlLFxyXG59XHJcblxyXG5mdW5jdGlvbiBwb3BVcFBhZGRpbmdUb3AoZWxlbSkge1xyXG4gIGxldCBoZWFkZXJIZWlnaHQgPSBIRUFERVIub2Zmc2V0SGVpZ2h0O1xyXG4gIGVsZW0uc3R5bGUucGFkZGluZ1RvcCA9IGAke2hlYWRlckhlaWdodH1weGA7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhlYWRlckhlaWdodCgpIHtcclxuICBsZXQgaGVhZGVySGVpZ2h0ID0gSEVBREVSLm9mZnNldEhlaWdodDtcclxuICByZXR1cm4gaGVhZGVySGVpZ2h0XHJcbn1cclxuZnVuY3Rpb24gZm9vdGVySGVpZ2h0KCkge1xyXG4gIGxldCBmb290ZXJIZWlnaHQgPSBGT09URVIub2Zmc2V0SGVpZ2h0O1xyXG4gIHJldHVybiBmb290ZXJIZWlnaHRcclxufVxyXG5cclxuZnVuY3Rpb24gc2NyZWVuV2lkdGgoKSB7XHJcbiAgcmV0dXJuIHdpbmRvdy5pbm5lcldpZHRoIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCB8fCBkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoO1xyXG59XHJcblxyXG4vLyB6b29tIGltYWdlXHJcbmZ1bmN0aW9uIHpvb20oZSwgY29udGFpbmVyKXtcclxuICBsZXQgb2Zmc2V0WCwgb2Zmc2V0WSwgeCwgeTtcclxuICBsZXQgem9vbWVyID0gZS50YXJnZXQ7XHJcbiAgaWYoem9vbWVyLm5vZGVOYW1lID09PSAnSU1HJyAmJiB6b29tZXIubm9kZVR5cGUgPT09IDEpIHtcclxuICAgIGlmKGUub2Zmc2V0WCA8IDEgfHwgZS5vZmZzZXRZIDwgMSkgXHJcbiAgICAgIHJldHVybjtcclxuICAgIGUub2Zmc2V0WCA/IG9mZnNldFggPSBlLm9mZnNldFggOiBvZmZzZXRYID0gZS50b3VjaGVzWzBdLnBhZ2VYO1xyXG4gICAgZS5vZmZzZXRZID8gb2Zmc2V0WSA9IGUub2Zmc2V0WSA6IG9mZnNldFggPSBlLnRvdWNoZXNbMF0ucGFnZVg7XHJcbiAgICB4ID0gb2Zmc2V0WC96b29tZXIub2Zmc2V0V2lkdGgqMTAwO1xyXG4gICAgeSA9IG9mZnNldFkvem9vbWVyLm9mZnNldEhlaWdodCoxMDA7XHJcbiAgICBjb250YWluZXIuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybChcIiR7em9vbWVyLnNyY31cIilgO1xyXG4gICAgY29udGFpbmVyLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvbiA9IGAke3h9JSAke3l9JWA7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBjb250cm9scyBib2R5IG92ZXJmbG93XHJcbmZ1bmN0aW9uIG9wZW5XaWRnZXRDaGVjaygpIHtcclxuICBmb3IobGV0IGtleSBpbiBvcGVuV2lkZ2V0KSB7XHJcbiAgICBpZihvcGVuV2lkZ2V0W2tleV0pIHtcclxuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xyXG4gICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgfVxyXG4gIH1cclxuICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJyc7XHJcbiAgcmV0dXJuIGZhbHNlXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldENvb3JkcyhlbGVtKSB7XHJcbiAgLy8gKDEpXHJcbiAgbGV0IGJveCA9IGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblxyXG4gIGxldCBib2R5ID0gZG9jdW1lbnQuYm9keTtcclxuICBsZXQgZG9jRWwgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XHJcblxyXG4gIC8vICgyKVxyXG4gIGxldCBzY3JvbGxUb3AgPSB3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jRWwuc2Nyb2xsVG9wIHx8IGJvZHkuc2Nyb2xsVG9wO1xyXG4gIGxldCBzY3JvbGxMZWZ0ID0gd2luZG93LnBhZ2VYT2Zmc2V0IHx8IGRvY0VsLnNjcm9sbExlZnQgfHwgYm9keS5zY3JvbGxMZWZ0O1xyXG5cclxuICAvLyAoMylcclxuICBsZXQgY2xpZW50VG9wID0gZG9jRWwuY2xpZW50VG9wIHx8IGJvZHkuY2xpZW50VG9wIHx8IDA7XHJcbiAgbGV0IGNsaWVudExlZnQgPSBkb2NFbC5jbGllbnRMZWZ0IHx8IGJvZHkuY2xpZW50TGVmdCB8fCAwO1xyXG5cclxuICAvLyAoNClcclxuICBsZXQgdG9wID0gYm94LnRvcCArIHNjcm9sbFRvcCAtIGNsaWVudFRvcDtcclxuICBsZXQgbGVmdCA9IGJveC5sZWZ0ICsgc2Nyb2xsTGVmdCAtIGNsaWVudExlZnQ7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICB0b3A6IHRvcCxcclxuICAgIGxlZnQ6IGxlZnRcclxuICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiB0b051bWJlciAoZWwpIHtcclxuICByZXR1cm4gcGFyc2VJbnQoZWwucmVwbGFjZSgvXFxEL2csICcnKSlcclxufVxyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsICgpPT4ge1xyXG4gIHNjcm9sbFRvcCA9IHdpbmRvdy5wYWdlWU9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xyXG4gIHNjcm9sbFRvcCA9IHNjcm9sbFRvcCArIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQ7XHJcbiAgcGFnZUhlaWdodCA9IE1hdGgubWF4KGJvZHkuc2Nyb2xsSGVpZ2h0LCBib2R5Lm9mZnNldEhlaWdodCwgaHRtbC5jbGllbnRIZWlnaHQsIGh0bWwuc2Nyb2xsSGVpZ2h0LCBodG1sLm9mZnNldEhlaWdodCk7XHJcbn0pXHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCk9PiB7XHJcbiAgcGFnZUhlaWdodCA9IE1hdGgubWF4KCBib2R5LnNjcm9sbEhlaWdodCwgYm9keS5vZmZzZXRIZWlnaHQsIGh0bWwuY2xpZW50SGVpZ2h0LCBodG1sLnNjcm9sbEhlaWdodCwgaHRtbC5vZmZzZXRIZWlnaHQgKTtcclxufSlcclxuXHJcbmV4cG9ydCB7XHJcbiAgcG9wVXBQYWRkaW5nVG9wLFxyXG4gIHNjcmVlbldpZHRoLFxyXG4gIG9wZW5XaWRnZXQsXHJcbiAgb3BlbldpZGdldENoZWNrLFxyXG4gIHRvTnVtYmVyLFxyXG4gIGhlYWRlckhlaWdodCxcclxuICBmb290ZXJIZWlnaHQsXHJcbiAgc2Nyb2xsVG9wLFxyXG4gIHBhZ2VIZWlnaHQsXHJcbiAgem9vbSxcclxuICBnZXRDb29yZHNcclxufSJdLCJzb3VyY2VSb290IjoiIn0=