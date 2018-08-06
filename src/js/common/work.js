let blur = (function () {

  let wrapp = document.querySelector('.contacts-form')
  let form = document.querySelector('.contacts-form__blur')
  let imgBgWrapp = document.querySelector('.feedback__bg')
  let imgBg = document.querySelector('.feedback__bg-img')

  return {
    set() {

      let imgWidth = imgBgWrapp.offsetWidth,
          imgSizeTop = imgBg.offsetTop,
          posLeft = -wrapp.offsetLeft,
          posTop = -(wrapp.offsetTop - imgSizeTop),
          blurCSS = form.style;

          console.log(imgWidth);

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