var gulp = require('gulp');
var runSequence = require('gulp-run-sequence');

/**
 * Start browsersync task and then watch files for changes
 */
gulp.task('serve:production',function(){
	runSequence(
		'build:production'
		,'browsersync-production'
		,function(){
			console.log('Success!');
		}
	);
});
