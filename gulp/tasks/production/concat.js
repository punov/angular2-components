var gulp = require('gulp');
var concat = require('gulp-concat');
var config = require('../../config').scriptinject;
var configMain = require('../../config');
var addsrc = require('gulp-add-src');
var chmod = require('gulp-chmod');
var configChmod = require('../../config').chmod;
var ngAnnotate = require('gulp-ng-annotate');

/**
 * Concat js files
 */
gulp.task(
	'concat', function (callback) {
		return gulp.src(config.src.js)
			.pipe(chmod(configChmod))
		//.pipe(
		//	concat('tmp.js')
		//)
		.pipe(addsrc('dist/templates.js'))
		.pipe(ngAnnotate())
		.pipe(concat('index.js'))
		//.pipe(chmod(configChmod))
		.pipe(
			gulp.dest('./dist/app/')
		);
	}
);