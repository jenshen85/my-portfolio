'use strict'

global.$ = {

  dev: !process.env.NODE_ENV || process.env.NODE_ENV === "development",
  fs: require('fs'),
  testFolder: './dist/assets/js/',

  // path - start
  html: './src/template/',
  style: './src/sass/',
  js: './src/js/',
  img: './src/img/',
  fonts: './src/fonts/',
  sprite: './src/img/srcSprite/',
  dist: './dist/',
  assets: './dist/assets/',
  // path - end

  // packages - start
  gulp: require('gulp'),
  browserSync: require('browser-sync').create(),
  del: require('del'),

  // html
  prettify: require('gulp-html-prettify'),
  njkRender: require('gulp-nunjucks-render'),
  htmlmin: require('gulp-htmlmin'),
  pug: require('gulp-pug'),
  rep: require('gulp-replace-image-src'), // замена путей для изображений

  // css
  sass: require("gulp-sass"),
  postcss: require("gulp-postcss"),
  autoprefixer: require("autoprefixer"),
  csso: require("postcss-csso"),
  normalize: require("node-normalize-scss").includePaths,
  rewriteCSS: require('gulp-rewrite-css'),  // замена путей для изображений

  // =====================================
  gulpIf: require('gulp-if'),
  sourcemaps: require("gulp-sourcemaps"),  
  plumber: require("gulp-plumber"),
  notify: require("gulp-notify"),
  rename: require("gulp-rename"),
  //====================================== 

  // img
  imagemin: require('gulp-imagemin'),


  // js
  webpack: require("webpack"),
  gulpWebpack: require("webpack-stream"),
  webpackConfig: require("./webpack.config"),
  // packages - end

  // not installed packages - start
  // svgSprite: require("gulp-svg-sprite"),
  // svgmin: require("gulp-svgmin"),
  // replace: require("gulp-replace"),
  // cheerio: require("gulp-cheerio"),
  // merge: require("merge-stream"),
  // spritesmith: require("gulp.spritesmith"),
  // not installed packages - end

  // path for tasks - start
  tasks: require('./gulp/config/tasks'),
  // path for tasks - end
}

console.log( ($.dev) ? 'DEVELOPMENT' : 'PRODUCTION' );

$.tasks.forEach((taskPath) => {
  require(taskPath)();
});

if ($.dev) {
  $.gulp.task('build',
    $.gulp.series(
      "clean",
      $.gulp.parallel("fonts", "img:opt", "pug", "sass", "webpack")
    )
  );
} else {
  $.gulp.task('build',
    $.gulp.series(
      "clean",
      $.gulp.parallel("fonts", "img", "pug", "sass", "webpack")
    )
  );
}

$.gulp.task('default',
  $.gulp.series(
    "clean",
    $.gulp.parallel("fonts", "img", "pug", "sass", "webpack"),
    $.gulp.parallel("watch", "serve")
  )
);
