// buttons slider
const buttonPrev = document.querySelector('.slider__buttons-left .slider__buttons-img');
const buttonNext = document.querySelector('.slider__buttons-right .slider__buttons-img');


const sliderViewsItems = Array.prototype.slice.call(document.querySelectorAll('.slider__views .slider__views-item'));
const sliderBtnleftItems = Array.prototype.slice.call(document.querySelectorAll('.slider__buttons-left .buttons-left__item'));
const sliderBtnRightItems = Array.prototype.slice.call(document.querySelectorAll('.slider__buttons-right .buttons-right__item'));

let counter = 0;
let counterNext, counterPrev;


buttonNext.addEventListener('click', function() {
  counter++  
  coreSlider(sliderViewsItems, sliderBtnleftItems, sliderBtnRightItems)
})

buttonPrev.addEventListener('click', function() {
  counter--
  coreSlider(sliderViewsItems, sliderBtnleftItems, sliderBtnRightItems)
})

function coreSlider(arrSlide, arrPrevSlide, arrNextSlide) {

  for(let i = 0; i < arrSlide.length; i++) {
    arrSlide[i].classList.remove('active');
    arrPrevSlide[i].classList.remove('active');
    arrNextSlide[i].classList.remove('active');
  }
  
  if(counter > (arrSlide.length - 1)) {
    counter = 0;
  }

  if(counter < 0) {
    counter = (arrSlide.length - 1);
  }

  countSlide(counter, arrSlide)

  console.log(counterPrev, counter, counterNext);

  arrSlide[counter].classList.add('active');

  // arrSlide[counterPrev].style.left = '-100%';
  // arrSlide[counterPrev].style.zIndex = '-1';
  // arrSlide[counter].style.zIndex = '5';  
  // arrSlide[counter].style.left = '0%';
  // arrSlide[counterNext].style.left = '100%';
  // arrSlide[counterNext].style.zIndex = '-1';

  // console.log(counterNext + 1, counterPrev, counter);
  
  arrPrevSlide[counterPrev].classList.add('active');


  // arrPrevSlide[counterNext + 1].style.zIndex = '-1';
  // arrPrevSlide[counterNext + 1].style.top = '-100%';

  // arrPrevSlide[counter].style.top = '0%';
  // arrPrevSlide[counter].style.zIndex = '5';

  // arrPrevSlide[counterPrev].style.zIndex = '-1';
  // arrPrevSlide[counterPrev].style.top = '100%';

  arrNextSlide[counterNext].classList.add('active');

}

function countSlide(counter, arrSlide) {
  if(counter === arrSlide.length - 1) {
    counterNext = 0
  } else {
    counterNext = counter + 1
  }
  if(counter === 0) {
    counterPrev = arrSlide.length - 1
  } else {
    counterPrev = counter - 1
  }
}