let wrapp = document.querySelector('.contacts-form')
let form = document.querySelector('.contacts-form__blur')
let imgBgWrapp = document.querySelector('.feedback__bg')
let imgBg = document.querySelector('.feedback__bg-img')

if(wrapp !== null) {
  let blur = (function () {
    return {
      set() {
        let imgWidth = imgBgWrapp.offsetWidth,
            imgSizeTop = imgBg.offsetTop,
            posLeft = -wrapp.offsetLeft,
            posTop = -(wrapp.offsetTop - imgSizeTop),
            blurCSS = form.style;

        blurCSS.backgroundSize = `${imgWidth}px auto`
        blurCSS.backgroundPosition = `${posLeft}px ${posTop}px`
      }
    }
  }())

  window.onload = function() {
    blur.set();
  }


  window.onresize = function() {
    blur.set();
  }  
}

