// buttons slider

let sliderStart = new Slider();
sliderStart.init();




function Slider() {
  let that = this;
  that.counter = 0;
  that.inProcess = false;
  that.containerOne = document.querySelector('.slider__buttons-left');
  that.containerTwo = document.querySelector('.slider__buttons-right');
  that.buttonsLeft = that.containerOne.querySelector('.slider__buttons-img');
  that.buttonsRight = that.containerTwo.querySelector('.slider__buttons-img');
  that.duration = 400;

  that.moveSlide = function(container) {
    let items = Array.from(container.querySelectorAll('.slide'));
    let [activeItem] = items.filter((el)=> el.classList.contains('active'));
    if(that.counter >= items.length) that.counter = 0;
    if(that.counter < 0) that.counter = items.length - 1;
    let reqItem = items[that.counter];

    animate({
      duration: that.duration,
      draw(progress) {
        activeItem.style.top = `${progress}%`;
      }
    });

    animate({
      duration: that.duration,
      draw(progress) {
        reqItem.style.top = `${-100 + progress}%`;
      },
      after() {
        activeItem.classList.remove('active');
        reqItem.classList.add('active');
        that.inProcess = false;
      }
    });

  }

  that.init = function() {

    that.buttonsLeft.addEventListener('click', ()=> {

      if(!that.inProcess) {
        that.inProcess = true
        that.moveSlide(that.containerOne);
        that.counter--;
      }
    })

    that.buttonsRight.addEventListener('click', ()=> {

      if(!that.inProcess) {
        that.inProcess = true
        that.moveSlide(that.containerTwo);
        that.counter++;
      }
    })

  }
}



// ===  RAF  ===
// duration – длительность анимации в мс.
// timing – функция, которая определяет состояние анимации каждый кадр. Получает часть времени от 0 до 1, возвращает завершенность анимации от 0 до 1.
// draw – функция, которая отрисовывает состояние анимации от 0 до 1.

// let duration = 1000;


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


// animate({
//   duration: duration,
//   timing: function timing(timeFraction) {
//     // return timeFraction;
//     return timeFraction
//   },
//   draw: function(progress) {
    
//   }
// });
































// const sliderViewsItems = Array.prototype.slice.call(document.querySelectorAll('.slider__views .slider__views-item'));
// const sliderBtnleftItems = Array.prototype.slice.call(document.querySelectorAll('.slider__buttons-left .buttons-left__item'));
// const sliderBtnRightItems = Array.prototype.slice.call(document.querySelectorAll('.slider__buttons-right .buttons-right__item'));

// let counter = 0;
// let counterNext, counterPrev;

// if(sliderViewsItems.length && sliderBtnleftItems.length && sliderBtnRightItems.length) {

//   const buttonPrev = document.querySelector('.slider__buttons-left .slider__buttons-img');
//   const buttonNext = document.querySelector('.slider__buttons-right .slider__buttons-img');

//   countSlide(counter, sliderViewsItems)
//   sliderViewsItems[counter].classList.add('active')
//   sliderBtnleftItems[counterPrev].classList.add('active')
//   sliderBtnRightItems[counterNext].classList.add('active')

//   console.log(counterPrev, counter, counterNext);


//   buttonNext.addEventListener('click', function() {
//     counter++
//     coreSlider(sliderViewsItems, sliderBtnleftItems, sliderBtnRightItems, 'up')
//   })
  
//   buttonPrev.addEventListener('click', function() {
//     counter--
//     coreSlider(sliderViewsItems, sliderBtnleftItems, sliderBtnRightItems, 'down')
//   })
// }

// function coreSlider(arrSlide, arrPrevSlide, arrNextSlide, direction) {
//   countSlide(counter, arrSlide)

//   if(counter > (arrSlide.length - 1)) {
//     counter = 0;
//   }

//   if(counter < 0) {
//     counter = (arrSlide.length - 1);
//   }

//   if(direction === 'up') {
//     arrSlide[counterPrev].classList.remove('active')
//   }
//   if(direction === 'down') {
//     arrSlide[counterNext].classList.remove('active')
//   }
//   arrSlide[counter].classList.add('active')

  
// }

// function countSlide(counter, arrSlide) {
//   if(counter === arrSlide.length - 1) {
//     counterNext = 0
//   } else {
//     counterNext = counter + 1
//   }
//   if(counter === 0) {
//     counterPrev = arrSlide.length - 1
//   } else {
//     counterPrev = counter - 1
//   }
// }