const paralax = (function() {

  let user = document.querySelector(".hero__avatar")
  let sectionText = document.querySelector(".hero__bg-word")

  return {
    move(block, windowScroll, strafeAmount, xPos) {
      let strafe = windowScroll / -strafeAmount;
      let style = block.style;
      // передаю translate по x, т.к. значения у всех элементов разные
      let transformString = `translate3d(${xPos}%, ${-50 + strafe}%, 0)`
      style.transform = transformString;
    },
    init(wScroll) {
      this.move(user, wScroll, 3, -50)
      this.move(sectionText, wScroll, 20, 0)
    }
  }

}())

window.addEventListener("scroll", function() {

  let wScroll = window.pageYOffset

  paralax.init(wScroll);


})