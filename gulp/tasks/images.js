'use strict';

var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var pngcrush = require('imagemin-pngcrush');
var changed = require('gulp-changed');

gulp.task('images', function() {
  var dest = './assets/images';

  return gulp.src('./_src/images/**')
    .pipe(changed(dest))
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [{removeViewBox: false}],
      use: [pngcrush()]
    }))
    .pipe(gulp.dest(dest));
});
