const MENU_BUTTON = document.querySelector('.menu-button');
const MENU_BUTTON_WRAPP = document.querySelector('.menu-button__wrapp');
const MENU = document.querySelector('.menu-wrapp');

let thumb = false

console.log(MENU_BUTTON_WRAPP);

if(MENU !== null) {

  MENU_BUTTON.addEventListener('click', (e) => {
    console.log(MENU_BUTTON_WRAPP.offsetTop)
    console.log(MENU_BUTTON_WRAPP.offsetRight)
    // let wrapPositionTop = MENU_BUTTON_WRAPP.offsetTop
    // let wrapPositionRight = MENU_BUTTON_WRAPP

    thumb = !thumb
    MENU_BUTTON.classList.toggle('active');
    // MENU_BUTTON_WRAPP.style.position = thumb ? "fixed" : "absolute";
    MENU.classList.toggle('active');

  })

}