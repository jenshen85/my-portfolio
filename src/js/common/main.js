'use strict'

import {scrollToElement} from '../lib/scroll';
import {getCoords} from '../lib/utils';

const welcomButton = document.getElementById('autorisation-button');
const toGeneral = document.getElementById('to-general')
const backButton =document.querySelector('.welcom__button');
const flipp = document.querySelector('.flipper');
const buttonDown = document.querySelector('.hero__button-down');
const buttonUp = document.querySelector('.feedback__arrow-up');

if (flipp !== null) {
  welcomButton.addEventListener("click", () => {
    flipp.classList.add("active");
    backButton.classList.add("active");
  })
  toGeneral.addEventListener('click', (e) => {
    e.preventDefault();
    flipp.classList.remove("active");
    backButton.classList.remove("active");
  })
}

if (buttonDown) {
  buttonDown.addEventListener('click', ()=> {
    let toSection = getCoords(document.querySelector('.to-section-js')).top
    scrollToElement(toSection)
  });
}

if (buttonUp) {
  buttonUp.addEventListener('click', ()=> {
    scrollToElement(0);
  });
}
