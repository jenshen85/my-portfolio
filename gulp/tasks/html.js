module.exports = function() {
  $.gulp.task('html', function() {
    return $.gulp.src($.html + '*.html')
      .pipe($.plumber({
        errorHandler: $.notify.onError(function(error) {
          return {
            title: "HTML",
            message: error.message
          };
        })
      }))
      .pipe($.rep({
        prependSrc : './assets/img/',
        keepOrigin : false
      }))
      .pipe($.njkRender({
        path: ['src/template/'],
        ext: '.html',
        data: {
          css_name: ($.dev) ? '' : '.min'
        }
      }))
      .pipe($.gulpIf($.dev, $.prettify({indent_size : 2})))
      .pipe($.gulpIf(!$.dev, $.htmlmin({collapseWhitespace: true})))
      .pipe($.gulp.dest($.dist))
      .pipe( $.browserSync.reload({ stream: true }));
  })
}