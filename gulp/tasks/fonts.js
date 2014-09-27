var gulp = require('gulp');

gulp.task('fonts', function() {
  return gulp.src(['./_src/fonts/**/*.{eot,svg,ttf,woff}'])
    .pipe(gulp.dest('./assets/fonts'));
});
