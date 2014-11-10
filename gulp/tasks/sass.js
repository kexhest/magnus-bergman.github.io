'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var csso = require('gulp-csso');
var rename = require('gulp-rename');
var plumber = require('gulp-plumber');
var handleErrors = require('../util/handleErrors');

gulp.task('sass', function () {
  var dest = './assets/styles';

  return gulp.src('./_src/styles/main.scss')
    .pipe(plumber({errorHandler: handleErrors}))
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(csso())
    .pipe(rename('magnus.css'))
    .pipe(gulp.dest(dest));
});
