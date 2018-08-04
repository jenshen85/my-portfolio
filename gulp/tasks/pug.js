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
          // data: {
          //   css_name: ($.dev) ? '' : '.min'
          // }
        }
      ))
      .pipe($.gulpIf($.dev, $.prettify({
        indent_size: 2,
        wrap_attributes: 'auto', // 'force'
        preserve_newlines: false,
        // unformatted: [],
        end_with_newline: true
      })))
      // .pipe($.rep({
      //   prependSrc : './assets/img/',
      //   keepOrigin : false
      // }))
      .pipe($.gulp.dest($.dist))
      .pipe($.through2(function(file, enc, cb) {

        let str = /(\.\.\/)(\.\.\/)?/g;
        let destSrc = './assets/';

        let buffPage = file.contents;
        let strPage = buffPage.toString('utf8');
        let replPage = strPage.replace(str, destSrc)

        file.contents = Buffer.from(replPage);

        cb(null, file)

      }))
      .pipe($.gulp.dest($.dist))
      .pipe( $.browserSync.reload({ stream: true }));
  })

}