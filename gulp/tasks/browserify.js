'use strict';

var gulp = require('gulp');
var browserify = require('browserify');
var watchify = require('watchify');
var bundleLogger = require('../util/bundleLogger');
var handleErrors = require('../util/handleErrors');
var source = require('vinyl-source-stream');

gulp.task('browserify', ['jshint'], function() {
  var bundler = browserify({
    cache: {},
    packageCache: {},
    fullPaths: true,
    entries: ['./_src/scripts/index.js'],
    debug: false
  });

  var bundle = function() {
    bundleLogger.start();

    return bundler
      .transform({
        global: true
      }, 'uglifyify')
      .bundle()
      .on('error', handleErrors)
      .pipe(source('magnus.js'))
      .pipe(gulp.dest('./assets/scripts'))
      .on('end', bundleLogger.end);
  };

  if (global.isWatching) {
    bundler = watchify(bundler);

    bundler.on('update', bundle);
  }

  return bundle();
});
