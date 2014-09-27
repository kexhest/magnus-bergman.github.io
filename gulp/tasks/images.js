var gulp = require('gulp');
var changed = require('gulp-changed');
var imagemin = require('gulp-imagemin');

gulp.task('images', function() {
  var dest = './assets/images';

  return gulp.src('./_src/images/**')
    .pipe(changed(dest))
    .pipe(imagemin({
      optimizationLevel: 3,
      progressive: true,
      interlaced: true
    }))
    .pipe(gulp.dest(dest));
});
