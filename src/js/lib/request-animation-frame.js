function isRAF() {
  return !!window.requestAnimationFrame
}

const cbs = [];
let animationFrame = null;

function addRAF(cb, ...arg) {
  if (cb) {
    cbs.push({cb, arg});
  }
  if (cbs.length && !animationFrame) {
    animationFrame = window.requestAnimationFrame(frame);
  }
}

function removeRAF(cb) {
  if (cb) {
    let index = cbs.findIndex(_cb => _cb.cb === cb);
    if (index > -1) {
      cbs.splice(index, 1);
    }
  }
}

function cancelRAF() {
  if (animationFrame) {
    cbs.splice(0, cbs.length);
    window.cancelAnimationFrame(animationFrame);
    animationFrame = null;
  }
}

function frame() {
  animationFrame = null;
  let _cbs = Array.prototype.slice.call(cbs);
  cbs.splice(0, cbs.length);
  _cbs.forEach(_cb => {
    _cb.cb.apply(this, _cb.arg);
  });
}

export {isRAF, addRAF, removeRAF, cancelRAF}