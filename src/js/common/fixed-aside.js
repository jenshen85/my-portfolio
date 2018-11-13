import {getCoords} from '../lib/utils';
import {scrollToElement} from '../lib/scroll';
const blogListLinks = document.querySelector('.blog__nav-list');
const blogListArticles = document.querySelector('.blog__main-list');

if(blogListLinks && blogListArticles) {

  let blogListLinksChild = Array.from(blogListLinks.children);
  let blogListArticlesChild = Array.from(blogListArticles.children);
  let posTop = getCoords(blogListLinks).top;

  blogListLinksChild.forEach((el, i)=> {
    el.addEventListener('click', ()=> {
      for(let j = 0; j < blogListLinksChild.length; j++) {
        if (j !== i) {
          blogListLinksChild[j].classList.remove('active');
        }
      }
      el.classList.add('active');
      scrollToElement(getCoords(blogListArticlesChild[i]).top, i);
    })
  });
  
  window.addEventListener('scroll', ()=> {
    if((window.pageYOffset || document.documentElement.scrollTop) > posTop) {
      menuPosition('.blog__nav-list', '.blog__nav', true);
    } else {
      menuPosition('.blog__nav-list', '.blog__nav', false);
    }
  });

  window.addEventListener('resize', ()=> {
    if((window.pageYOffset || document.documentElement.scrollTop) > posTop) {
      menuPosition('.blog__nav-list', '.blog__nav', true);
    } 
    else {
      menuPosition('.blog__nav-list', '.blog__nav', false);
    }
  });
}

function menuPosition(node, nodeContainer, thumb) {
  let elem = document.querySelector(node);
  let elemContainer = document.querySelector(nodeContainer);
  // 0.9 === 90% container
  elem.style.width = thumb ? `${elemContainer.offsetWidth * 0.9}px` : ``;
  elem.style.position = thumb ? 'fixed' : ``;
  elem.style.top = thumb ? `${20}px` : ``;  
  elem.style.left = thumb ? `${getCoords(elem).left}px` : ``;
}