let duration = 1000;

function timing(timeFraction) {
  return Math.pow(timeFraction, 2)
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

function animateScroll() {
  let from = window.pageYOffset;
  let to = 0;
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

function scrollDown(from, to) {
  duration = Math.sqrt(Math.abs(from - to)) * 16;
  animate({
    duration: duration,
    timing: timing,
    draw: function(progress) {
      let result = (to - from) * progress + from;
      window.scrollTo(from, Math.ceil(result));
    }
  });
}

export {
  animateScroll,
  scrollDown,
}