var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
var config = require('../../config').optimize;

/**
 * Minimize HTML
 */
gulp.task(
	'optimize:html', function () {
		return gulp.src(config.html.src)
			.pipe(htmlmin(config.html.options))
			.pipe(gulp.dest(config.html.dest));
	}
);

gulp.task(
	'optimize:html2', function() {
		return gulp.src(config.htmlmin.src)
			.pipe(htmlmin(config.htmlmin.options))
			.pipe(gulp.dest(config.htmlmin.dest));
	}
);