var gulp = require('gulp');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var config = require('../../config').jshint;

/**
 * Check JavaScript sytax with JSHint
 */
gulp.task('jshint', function() {
	//return gulp.src(config.src)
	return gulp.src('src/app/app.js')
		.pipe(jshint())
		.pipe(jshint.reporter(stylish))
		.pipe(jshint.reporter('fail'));
});