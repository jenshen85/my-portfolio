'use strict'

let str = /..\/img\//g;
let destSrc = './assets/img/';
let File = require('vinyl');
let file = '../../template/index.pug'

const fs = require('fs');

let f = new File();
console.log(f);

fs.readFile(file, 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  var result = data.replace(str, destSrc);

  fs.writeFile(file, result, 'utf8', function (err) {
    if (err) return console.log(err);
  });
});