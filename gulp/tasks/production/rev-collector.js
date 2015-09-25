var gulp    = require('gulp');
var collect = require('gulp-rev-collector');
var config  = require('../../config').collect;

/**
 * Replace all links to assets in files
 * from a manifest file
 */
gulp.task('rev:collect', function() {
	return gulp.src(config.src)
	//return gulp.src(['dist/**/*.json','dist/**/*.html'])
		.pipe(collect({
			replaceReved: true
		 }))
		.pipe(gulp.dest(config.dest));
});