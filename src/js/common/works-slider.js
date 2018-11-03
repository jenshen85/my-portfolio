// buttons slider

let sliderStart = new Slider({
  containerView: '.slider__views-list',
  containerLeft: '.buttons-left__list',
  containerRight: '.buttons-right__list',
  slide: '.slide',
  buttonsLeft: '.slider__buttons-left .slider__buttons-img',
  buttonsRight: '.slider__buttons-right .slider__buttons-img',
  duration: '700',

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
  that.lenghtChild = Math.max(
    Array.from(that.containerView.querySelectorAll(options.slide)).length,
    Array.from(that.containerLeft.querySelectorAll(options.slide)).length,
    Array.from(that.containerRight.querySelectorAll(options.slide)).length
  );
  that.buttonsLeft = document.querySelector(options.buttonsLeft);
  that.buttonsRight = document.querySelector(options.buttonsRight);
  that.duration = options.duration;
  
  that.moveSlide = function(container, orientation, direction) {

    let items = Array.from(container.children);
    let activeItem = {};
    let reqItem;
    
    items.forEach((el, i)=> {
      if(el.classList.contains('active')) {
        activeItem.elem = el,
        activeItem.index = i
      }
    });

    if(that.counter >= items.length) that.counter = 0;
    if(that.counter < 0) that.counter = items.length - 1;

    that.countSlide( activeItem.index, that.lenghtChild);
    activeItem = activeItem.elem;
    if(orientation === 'prev') {
      reqItem = items[that.counterPrev];
    }

    if(orientation === 'next') {
      reqItem = items[that.counterNext];
    }

    if(!direction) {
      activeItem.classList.remove('active');
      reqItem.classList.add('active');
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

// ===  RAF  ===
function animate({draw, duration, after}) {

  let start = performance.now();
  requestAnimationFrame(function animate(time) {
    // timeFraction goes from 0 to 1
    let timeFraction = ((time - start));

    if (timeFraction > duration) timeFraction = duration;
    // calculate the current animation state
    let progress = (timeFraction / duration) * 100
    
    draw(progress); // draw it

    if (timeFraction < duration) {
      requestAnimationFrame(animate);
    } else if(timeFraction >= duration && after) {
      after();
    }
  });
}
