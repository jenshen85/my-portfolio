const HEADER = document.querySelector('.header');
const FOOTER = document.querySelector('.footer');

let scrollTop
scrollTop = window.pageYOffset || document.documentElement.scrollTop;
scrollTop = scrollTop + document.documentElement.clientHeight

let body = document.body,
    html = document.documentElement;
let pageHeight = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );


let openWidget = {
  mobMenu: false,
  basketPopUp: false,
  popUpSlider: false,
}

function popUpPaddingTop(elem) {
  let headerHeight = HEADER.offsetHeight;
  elem.style.paddingTop = `${headerHeight}px`;
}

function headerHeight() {
  let headerHeight = HEADER.offsetHeight;
  return headerHeight
}
function footerHeight() {
  let footerHeight = FOOTER.offsetHeight;
  return footerHeight
}

function screenWidth() {
  return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
}

// zoom image
function zoom(e, container){
  let offsetX, offsetY, x, y;
  let zoomer = e.target;
  if(zoomer.nodeName === 'IMG' && zoomer.nodeType === 1) {
    if(e.offsetX < 1 || e.offsetY < 1) 
      return;
    e.offsetX ? offsetX = e.offsetX : offsetX = e.touches[0].pageX;
    e.offsetY ? offsetY = e.offsetY : offsetX = e.touches[0].pageX;
    x = offsetX/zoomer.offsetWidth*100;
    y = offsetY/zoomer.offsetHeight*100;
    container.style.backgroundImage = `url("${zoomer.src}")`;
    container.style.backgroundPosition = `${x}% ${y}%`;
  }
}

// controls body overflow
function openWidgetCheck() {
  for(let key in openWidget) {
    if(openWidget[key]) {
      document.body.style.overflow = 'hidden';
      return true
    }
  }
  document.body.style.overflow = '';
  return false
}

function getCoords(elem) {
  // (1)
  let box = elem.getBoundingClientRect();

  let body = document.body;
  let docEl = document.documentElement;

  // (2)
  let scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
  let scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;

  // (3)
  let clientTop = docEl.clientTop || body.clientTop || 0;
  let clientLeft = docEl.clientLeft || body.clientLeft || 0;

  // (4)
  let top = box.top + scrollTop - clientTop;
  let left = box.left + scrollLeft - clientLeft;

  return {
    top: top,
    left: left
  };
}

function toNumber (el) {
  return parseInt(el.replace(/\D/g, ''))
}

window.addEventListener('scroll', ()=> {
  scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  scrollTop = scrollTop + document.documentElement.clientHeight;
  pageHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
})

window.addEventListener('resize', ()=> {
  pageHeight = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );
})

export {
  popUpPaddingTop,
  screenWidth,
  openWidget,
  openWidgetCheck,
  toNumber,
  headerHeight,
  footerHeight,
  scrollTop,
  pageHeight,
  zoom,
  getCoords
}