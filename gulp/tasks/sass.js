var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var autoprefixer = require('gulp-autoprefixer');
var csso = require('gulp-csso');
var ignore = require('gulp-ignore');
var plumber = require('gulp-plumber');
var handleErrors = require('../util/handleErrors');

gulp.task('sass', function () {
  var dest = './assets/styles';

  return gulp.src('./_src/styles/main.scss')
    .pipe(plumber({errorHandler: handleErrors}))
    .pipe(sass({
      loadPath: [
        'bower_components'
      ],
     'sourcemap=none': true
      // sourcemapPath: '../../_src/styles'
    }))
    .pipe(gulp.dest(dest))
    .pipe(ignore.exclude('*.map'))
    .pipe(autoprefixer())
    .pipe(csso())
    .pipe(gulp.dest(dest));
});
