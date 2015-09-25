var gulp = require('gulp');
var replace = require('gulp-replace');
var addsrc = require('gulp-add-src');

gulp.task('strip-json-debug'
	,['strip-json-debug-module']
	,function(){
		return gulp.src('./dist/index.html')
			.pipe(replace('<script src="lib/json-formatter/dist/json-formatter.js"></script>',''))
			.pipe(gulp.dest('./dist/'));
	});

gulp.task('strip-json-debug-module',function(){
	return gulp.src('./src/babel/app.js')
		.pipe(replace(', \'jsonFormatter\''),'')
		.pipe(gulp.dest('./src/babel'));
});