var gulp = require('gulp');
var config = require('../../config');
var wiredep = require('wiredep').stream;
var inject = require('gulp-inject');

//we need run 2 tasks in pipe to be able to write index.html once

gulp.task(
	'injection', function(){
		var sources = gulp.src(
			config.scriptinject.src.css.concat(config.scriptinject.src.js),
			{read : false}
		);

		var options = {relative : true};

		//gulp.src(config.scriptinject.index)
		gulp.src('src/index.html')
			.pipe(
				//wiredep(config.wiredep)
				wiredep({
					//directory : 'src/lib'
				})
			)
			.pipe(inject(sources, options))
			.pipe(gulp.dest('src'));
	}
);