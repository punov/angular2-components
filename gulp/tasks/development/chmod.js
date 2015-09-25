var gulp = require('gulp');
var chmod = require('gulp-chmod');
var configChmod = require('../../config').chmod;

/**
 *
 */
gulp.task(
	'chmod', function () {
		return gulp.src('src/app/main-module/**/*.html')
			.pipe(chmod(configChmod))
			.pipe(gulp.dest('src/app/main-module'));
	}
);