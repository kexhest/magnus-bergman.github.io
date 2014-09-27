var gulp = require('gulp');
var browserify = require('browserify');
var watchify = require('watchify');
var bundleLogger = require('../util/bundleLogger');
var handleErrors = require('../util/handleErrors');
var plumber = require('gulp-plumber');
var source = require('vinyl-source-stream');

gulp.task('browserify', ['jshint'], function() {
  var bundler = browserify({
    cache: {},
    packageCache: {},
    fullPaths: true,
    entries: ['./_src/scripts/main.js'],
    // true enables source maps!
    debug: false
  });

  var bundle = function() {
    bundleLogger.start();

    return bundler
      .transform({
        global: true
      }, 'uglifyify')
      .bundle()
      .pipe(plumber({errorHandler: handleErrors}))
      .pipe(source('main.js'))
      .pipe(gulp.dest('./assets/scripts'))
      .on('end', bundleLogger.end);
  };

  if (global.isWatching) {
    bundler = watchify(bundler);
    // Rebundle with watchify on changes.
    bundler.on('update', bundle);
  }

  return bundle();
});
