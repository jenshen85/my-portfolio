const MENU_BUTTON = document.querySelector('.menu-button');
const MENU_BUTTON_WRAPP = document.querySelector('.menu-button__wrapp');
const MENU = document.querySelector('.menu-wrapp');
const CONTAINER = document.querySelector('.hero-container');

let thumb = false

let absoluteButtonPosX = (CONTAINER.offsetWidth - MENU_BUTTON_WRAPP.offsetLeft) - MENU_BUTTON_WRAPP.offsetWidth;
let absoluteButtonPosY = MENU_BUTTON_WRAPP.offsetTop;

if(MENU !== null) {

  MENU_BUTTON.addEventListener('click', (e) => {

    let fixedButtonPosY = MENU_BUTTON_WRAPP.offsetTop
    let fixedButtonPosX = (window.innerWidth - CONTAINER.offsetWidth) / 2
    thumb = !thumb
    MENU_BUTTON.classList.toggle('active');
    MENU_BUTTON_WRAPP.style.position = thumb ? "fixed" : "absolute";
    MENU_BUTTON_WRAPP.style.right = thumb ? `${fixedButtonPosX}px` : `${absoluteButtonPosX}px`;
    MENU_BUTTON_WRAPP.style.top = thumb ? `${fixedButtonPosY}px` : `${absoluteButtonPosY}px`;
    MENU.classList.toggle('active');

  })

}