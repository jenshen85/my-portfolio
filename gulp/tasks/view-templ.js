module.exports = function() {

  $.gulp.task('pug:view', function() {
    return $.gulp.src(
     [$.html + '**/*.pug', '!./src/template/view/']
    )
      .pipe($.plumber({
        errorHandler: $.notify.onError(function(error) {
          return {
            title: "HTML",
            message: error.message
          };
        })
      }))
      .pipe($.through2(function(file, enc, cb) {

        let str = /(\.\.\/)(\.\.\/)?/g;
        let destSrc = './assets/';

        let buffPage = file.contents;
        let strPage = buffPage.toString('utf8');
        let replPage = strPage.replace(str, destSrc)

        file.contents = Buffer.from(replPage);
        
        
        cb(null, file)

      }))
      .pipe($.gulp.dest('src/template/view/'))
  })

}