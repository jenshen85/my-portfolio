module.exports = function() {
  $.gulp.task("png:sprite", function() {
    var spriteData = $.gulp.src(["src/img/sprite/**/*.png", "!src/img/sprite/sprite.png"]).pipe(
      $.spritesmith({
        // retinaSrcFilter: './src/images/png/*@2x.png',
        imgName: "sprite.png", // итоговый спрайт
        // retinaImgName: 'sprite@2x.png',
        cssName: "_sprite.sass", // файл стилей
        algorithm: "left-right",
        // algorithm: 'top-down',
        padding: 30
      })
    );
    var imgStream = spriteData.img.pipe(
      $.gulp.dest($.sprite)
    ); // путь куда записываем спрайт

    var cssStream = spriteData.css.pipe($.gulp.dest($.style)); // путь куда записываем файл стилей для спрайта

    return $.merge(imgStream, cssStream);
  });
}