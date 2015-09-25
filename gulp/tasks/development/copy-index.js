var gulp = require('gulp')
	,rename = require('gulp-rename');
var config = require('../../config').index;
var chmod = require('gulp-chmod');
var configChmod = require('../../config').chmod;

/**
 * Copy _index.html template to index.html
 */
gulp.task(
	'copy:index', function () {
		return gulp.src(config.src)
			.pipe(rename(config.name))
            .pipe(chmod(configChmod))
			.pipe(gulp.dest(config.dest))
	}
);