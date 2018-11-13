let duration = 1000;

function timing(timeFraction) {
  return timeFraction;
}

function animate({timing, draw, duration}) {
  let start = performance.now();
  requestAnimationFrame(function animate(time) {
    let timeFraction = (time - start) / duration;
    if (timeFraction > 1) timeFraction = 1;
    let progress = timing(timeFraction);
    draw(progress);
    if (timeFraction < 1) {
      requestAnimationFrame(animate);
    }
  });
}

function scrollToElement(elemPos, i) {
  let from = (window.pageYOffset || document.documentElement.scrollTop);
  let to = elemPos;
  if (from === to) return;
  duration = Math.sqrt(Math.abs(from - to)) * 16;
  animate({
    duration: duration,
    timing: timing,
    draw: function(progress) {
      let result = (to - from) * progress + from;
      window.scrollTo(0, Math.ceil(result));
    }
  });
}

export {
  scrollToElement,
}