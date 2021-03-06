const paralaxCont = document.getElementById('welcome__paralax');
const layers = Array.prototype.slice.call(document.getElementsByClassName('paralax__layer'));

if(paralaxCont !== null) {
  const moveLayers = (e) => {
    
    const initialX = (window.innerWidth/2) - e.pageX;
    const initialY = (window.innerHeight/2) - e.pageY;

    layers.forEach((el, i) => {      
      let divider = i / 70;
      let positionX = initialX * divider;
      let positionY = initialY * divider;
      el.style.transform = `translate(${positionX}px, ${positionY}px)`;
    });
  }
  window.addEventListener('mousemove', moveLayers);
}



