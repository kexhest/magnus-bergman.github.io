'use strict';

var gulp = require('gulp');
var jshint = require('gulp-jshint');

gulp.task('jshint', function() {
    return gulp.src(['./_src/scripts/**'])
    .pipe(jshint())
    .pipe(jshint.reporter(require('jshint-stylish')))
});
