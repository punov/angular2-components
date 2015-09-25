var gulp = require('gulp');
var runSequence = require('gulp-run-sequence');

/**
 * Run all tasks needed for a build in defined order
 */
gulp.task('build',function(callback){
	runSequence(//'delete',
		//[
		//	'jscs'
		//	,'jshint'
		//]
		'copy:index'
		,'env'
		,'tsc:cleanup'
		,'tsc'
		//,'sass'
		,'injection'
		//'images',
		//'copy:fonts'
		//'base64',
		,callback);
});