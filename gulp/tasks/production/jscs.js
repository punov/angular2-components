var gulp = require('gulp')
	,jscs = require('gulp-jscs')
	,stylish = require('gulp-jscs-stylish')
	,config = require('../../config').jshint
	,noop = function(){
	};

gulp.task(
	'jscs',function(){
		return gulp.src(config.src)
			.pipe(jscs({
				esnext: true
				,configPath: '.jscsrc'
			})) // enforce style guide
			//.on('error',noop) // don't stop on error
			.pipe(stylish()); // log style errors
	}
);