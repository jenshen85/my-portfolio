module.exports = function() {
  $.gulp.task('watch', function() {
    $.gulp.watch(
      ['src/template/*.pug', 'src/template/common/**/*.pug'],
      $.gulp.series('pug')
    );
    $.gulp.watch(
      'src/sass/**/*.sass',
      $.gulp.series('sass')
    );
    $.gulp.watch(
      'src/js/**/*.js',
      $.gulp.series('webpack')
    );
    $.gulp.watch(
      'src/fonts/**/*.{ttf,eot,woff,woff2}',
      $.gulp.series('fonts')
    );
    $.gulp.watch(
      'src/img/**/*.{jpg,png,jpeg,svg,gif}',
      $.gulp.series('img')
    );    
  });
}