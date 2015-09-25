var gulp = require('gulp');
var copy = require('gulp-copy');
var config = require('../../config').icons;
/**
 * Copy images to the destination directory
 */
gulp.task(
	'icons:copy',function(){
		return gulp.src(config.src)
			.pipe(gulp.dest(config.dest));
	}
);