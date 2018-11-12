import {scrollTop, getCoords} from '../lib/utils';
const CONTAINER = document.querySelector('.blog-container');
const blogListLinks = document.querySelector('.blog__nav-list');
const blogListArticles = document.querySelector('.blog__main-list');
let blogListWidth = blogListLinks.offsetWidth
let posTop = getCoords(blogListLinks).top;

window.addEventListener('scroll', ()=> {
  if((window.pageYOffset || document.documentElement.scrollTop) > posTop) {
    menuPosition(blogListLinks, CONTAINER, true)
  } else {
    menuPosition(blogListLinks, CONTAINER, false)
  }
})
window.addEventListener('resize', ()=> {
  if((window.pageYOffset || document.documentElement.scrollTop) > posTop) {
    menuPosition(blogListLinks, CONTAINER, true)
  } else {
    menuPosition(blogListLinks, CONTAINER, false)
  }
})
function menuPosition(elem, container, thumb) {
  let fixedButtonPosX = Math.floor((window.innerWidth - container.clientWidth) / 2)
  elem.style.width = thumb ? `${blogListWidth}px` : ``;
  elem.style.position = thumb ? 'fixed' : ``;
  elem.style.top = thumb ? `${20}px` : ``;  
  elem.style.left = thumb ? `${fixedButtonPosX +6}px` : ``;
}