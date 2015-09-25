var gulp = require('gulp');
var chmod = require('gulp-chmod');
var configChmod = require('../../config').chmod;

/**
 * remove readonly attributes from
 */
gulp.task('remove-readonly:production',function(){
	require('child_process').exec('attrib -r dist/app/*.js /s');
});