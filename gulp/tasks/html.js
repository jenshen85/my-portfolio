module.exports = function() {

  $.gulp.task('pug', function() {
    return $.gulp.src($.html + '*.pug')
      .pipe($.plumber({
        errorHandler: $.notify.onError(function(error) {
          return {
            title: "HTML",
            message: error.message
          };
        })
      }))
      .pipe($.pug(
        { 
          pretty: $.dev ? true : false,
          data: {
            css_name: ($.dev) ? '' : '.min'
          }
        }
      ))
      .pipe($.gulpIf($.dev, $.prettify({indent_size : 2})))
      .pipe($.rep({
        prependSrc : './assets/img/',
        keepOrigin : false
      }))      
      .pipe($.gulp.dest($.dist))
      .pipe( $.browserSync.reload({ stream: true }));
  })

}