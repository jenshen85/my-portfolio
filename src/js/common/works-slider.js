// slider

let sliderStart = new Slider({
  containerView: '.slider__views-list',
  containerLeft: '.buttons-left__list',
  containerRight: '.buttons-right__list',
  sliderInfo:'.slider__info-list',
  slide: '.slide',
  buttonsLeft: '.slider__buttons-left .slider__buttons-img',
  buttonsRight: '.slider__buttons-right .slider__buttons-img',
  duration: '800',

});

function Slider(options) {
  let that = this;
  that.counter = 0;
  that.counterPrev;
  that.counterNext;
  that.inProcess = false;
  that.containerView = document.querySelector(options.containerView);
  that.containerLeft = document.querySelector(options.containerLeft);
  that.containerRight = document.querySelector(options.containerRight);

  that.sliderInfo = document.querySelector(options.sliderInfo);

  if(!that.containerView && !that.containerLeft && !that.containerRight) {
    return
  } else {
    that.lenghtChild = Math.max(
      Array.from(that.containerView.querySelectorAll(options.slide)).length,
      Array.from(that.containerLeft.querySelectorAll(options.slide)).length,
      Array.from(that.containerRight.querySelectorAll(options.slide)).length
    );
  }
  
  that.buttonsLeft = document.querySelector(options.buttonsLeft);
  that.buttonsRight = document.querySelector(options.buttonsRight);
  that.duration = options.duration;
  
  that.moveSlide = function(container, orientation, direction) {

    let items = Array.from(container.children);
    let activeItem = {};
    let reqItem;
    let viewIdx;
    
    items.forEach((el, i)=> {
      if(el.classList.contains('active')) {
        activeItem.elem = el,
        activeItem.index = i
      }
    });

    if(that.counter >= items.length) that.counter = 0;
    if(that.counter < 0) that.counter = items.length - 1;
    that.countSlide( activeItem.index, that.lenghtChild);

    if(orientation === 'prev') {
      reqItem = items[that.counterPrev];
      viewIdx = that.counterPrev;
    }

    if(orientation === 'next') {
      reqItem = items[that.counterNext];
      viewIdx = that.counterNext;
    }
    activeItem = activeItem.elem;

    if(!direction) {
      activeItem.classList.remove('active');
      reqItem.classList.add('active');
      that.sliderInfoFill(that.sliderInfo, that.containerView, viewIdx)
    } else {
      animate({
        duration: that.duration,
        draw(progress) {
          activeItem.style.top = (direction === 'down') ? `${progress}%` : `${-progress}%`;
        }
      });
  
      animate({
        duration: that.duration,
        draw(progress) {
          reqItem.style.top = (direction === 'down') ? `${(-100) + progress}%` : `${100 - progress}%`;
        },
        after() {
          activeItem.classList.remove('active');
          reqItem.classList.add('active');
          that.inProcess = false;
        }
      });
    }
  }

  that.init = function() {
    // calculation counters
    that.countSlide(that.counter, that.lenghtChild);
    // calculation counters

    // initial first slides
    that.slideInit(that.containerView, that.counter);
    that.slideInit(that.containerLeft, that.counterPrev);
    that.slideInit(that.containerRight, that.counterNext);
    // initial first slides
    that.sliderInfoFill(that.sliderInfo, that.containerView, that.counter)
    // listeners
    that.buttonsLeft.addEventListener('click', ()=> {
      if(!that.inProcess) {
        that.inProcess = true;
        that.moveSlide(that.containerView, 'prev');
        that.moveSlide(that.containerLeft,  'prev', 'down');
        that.moveSlide(that.containerRight,  'prev', 'up');
        // that.counter--;
      }
    });
    that.buttonsRight.addEventListener('click', ()=> {
      if(!that.inProcess) {
        that.inProcess = true;
        that.moveSlide(that.containerView, 'next');
        that.moveSlide(that.containerLeft, 'next', 'down');
        that.moveSlide(that.containerRight, 'next', 'up');
        // that.counter++;
      }
    });
    // listeners
  }

  that.slideInit = (container, i)=> {
    let child = container.children;
    child[i].classList.add('active');
  }

  that.sliderInfoFill = (container, getAttrContainer, i) => {

    let viewTitle = container.querySelector('.info-item__title'),
        viewDesc = container.querySelector('.info-item__desc'),
        viewLink = container.querySelector('.info-item__link');

    let child = Array.from(getAttrContainer.children);

    if(i >= child.length) i = 0;
    if(i < 0) i = child.length - 1;

    let title = child[i].getAttribute('data-title'),
        desc = child[i].getAttribute('data-technology'),
        link = child[i].getAttribute('data-link');

    splitWord(
      title,
      viewTitle,
      desc,
      viewDesc,
      that.duration,
      null,
      splitWord
    );
    viewLink.href = link;
  }
  
  that.countSlide = (counter, arrSlide)=> {
    if(counter === arrSlide - 1) {
      that.counterNext = 0
    } else {
      that.counterNext = counter + 1
    }
    if(counter === 0) {
      that.counterPrev = arrSlide - 1
    } else {
      that.counterPrev = counter - 1
    }
  }

  that.init();
}

function splitWord(word, nodeElem, wordTwo, nodeElemTwo, dur, div, cb) {
  let duration = dur / word.length;
  let splWord  = word.split(' ');
  nodeElem.textContent = '';
  div = div || 0;
  splWord.forEach((el,i)=> {
    
    let span = document.createElement('span');
    span.className = 'word';

    el.split('').forEach((leter, j)=> {
      let spanLeter = document.createElement('span');
      spanLeter.textContent = leter;
      span.appendChild(spanLeter);
      setTimeout(()=> {
        spanLeter.classList.add('active')
      }, duration * div);
      div++;
    })
    nodeElem.appendChild(span);
  });
  if(cb) {
    cb(wordTwo, nodeElemTwo, null, null, dur, div);
  }
}

// ===  RAF  ===
function animate({draw, duration, after}) {

  let start = performance.now();
  requestAnimationFrame(function animate(time) {
    let timeFraction = ((time - start));

    if(timeFraction <= 0) timeFraction = 1;
    if (timeFraction > duration) timeFraction = duration;
    let progress = (timeFraction / duration) * 100
    
    draw(progress); // draw it

    if (timeFraction < duration) {
      requestAnimationFrame(animate);
    } else if(timeFraction >= duration && after) {
      after();
    }
  });
}
