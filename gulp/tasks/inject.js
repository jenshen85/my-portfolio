
module.exports = function() {


  $.gulp.task('inject', function () {
    var css = $.gulp.src([$.destJs, '!./dist/assets/js/index.bundle.js']);
    var js = $.gulp.src($.destCss);
    var jsBody = $.gulp.src('./dist/assets/js/index.bundle.js');
    
    
    return $.gulp.src($.destHtml)
      .pipe($.inject( css, { relative:true, addPrefix: '.' } ))
      .pipe($.inject( js, { relative:true, addPrefix: '.' } ))
      .pipe($.inject(jsBody, {name: 'body', relative:true, addPrefix: '.'}))
      .pipe($.gulpIf(!$.dev, $.htmlclean()))
      .pipe($.gulp.dest($.dist));
  });


}