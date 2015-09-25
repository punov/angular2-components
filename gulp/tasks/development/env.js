var gulp = require('gulp')
	,replace = require('gulp-replace')
	,config = require('../../config.js').env;

gulp.task('env',function(){
	return gulp.src('src/index.html')
		.pipe(replace(
			/(globalConfig)[.\s\S]+endOfGlobals/g
			,'$1 = ' + JSON.stringify(config,null,'\t') + '\n</script>'
		))
		.pipe(replace(
			/(ng-strict-di)/g
			,config.ngStrictDi ? '$1' : ''
		))
		.pipe(gulp.dest('src/'));
});