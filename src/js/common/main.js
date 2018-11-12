'use strict'

const welcomButton = document.getElementById('autorisation-button');
const toGeneral = document.getElementById('to-general')
const backButton =document.querySelector('.welcom__button');
const flipp = document.querySelector('.flipper');

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