const MENU_BUTTON = document.querySelector('.menu-button');
const MENU_BUTTON_WRAPP = document.querySelector('.menu-button__wrapp');
const MENU = document.querySelector('.menu-wrapp');
const CONTAINER = document.querySelector('.hero-container');

let thumb = false

window.addEventListener("DOMContentLoaded", function() {
  
  if(MENU !== null) {

    // позиция кнопки меню по X,Y  при абсолютном позиционировании
    // позиция кнопки меню по X = (ширина контейнера - ширина от кнопки слева) - ширина самой кнопки
    let absoluteButtonPosX = (CONTAINER.offsetWidth - MENU_BUTTON_WRAPP.offsetLeft) - MENU_BUTTON_WRAPP.offsetWidth;
    let absoluteButtonPosY = MENU_BUTTON_WRAPP.offsetTop;

    MENU_BUTTON.addEventListener('click', (e) => {

      thumb = !thumb
      buttonPosition(absoluteButtonPosX, absoluteButtonPosY);

      MENU_BUTTON.classList.toggle('active');
      MENU.classList.toggle('active');

    })

    window.addEventListener("resize", function() {
      buttonPosition(absoluteButtonPosX, absoluteButtonPosY);
    })

  }

})


function buttonPosition(absoluteButtonPosX, absoluteButtonPosY) {
  // позиция кнопки меню по X,Y  при fixed позиционировании
  let fixedButtonPosY = MENU_BUTTON_WRAPP.offsetTop
  let fixedButtonPosX = (window.innerWidth - CONTAINER.offsetWidth) / 2
  MENU_BUTTON_WRAPP.style.position = thumb ? "fixed" : "absolute";
  MENU_BUTTON_WRAPP.style.right = thumb ? `${fixedButtonPosX}px` : `${absoluteButtonPosX}px`;
  MENU_BUTTON_WRAPP.style.top = thumb ? `${fixedButtonPosY}px` : `${absoluteButtonPosY}px`;
}