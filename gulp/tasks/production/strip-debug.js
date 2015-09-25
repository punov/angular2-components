var gulp = require('gulp');
var stripDebug = require('gulp-strip-debug');


gulp.task('strip-debug',function(){
	return gulp.src('./dist/app/*.js')
		.pipe(stripDebug())
		.pipe(gulp.dest('./dist/app/'));
});