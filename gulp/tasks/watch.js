var gulp = require('gulp');

gulp.task('watch', ['setWatch'], function() {
  gulp.watch('./_src/styles/**', ['sass']);
  gulp.watch('./_src/images/**', ['images']);
  gulp.watch('./_src/fonts/**', ['fonts']);
  gulp.watch('./_src/scripts/**', ['jshint']);
});
