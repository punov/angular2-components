var gulp = require('gulp');
var config = require('../../config');
var wiredep = require('wiredep').stream;
var inject = require('gulp-inject');

//we need run 2 tasks in pipe to be able to write index.html once

gulp.task(
	'injection:production', function () {
		var sources = gulp.src(
			[
				//'dist/app/**/lib.min.js',
				'dist/app/**/index.js',
				'dist/styles/**/*.css'
			],
			{read : false}
		);

		var options = {
			relative : true
		};

		//gulp.src(config.scriptinject.index)
		gulp.src('dist/index.html')
			.pipe(inject(gulp.src('dist/app/lib.min.js', {read : false}), {
				starttag : '<!-- inject:bower:{{ext}} -->',
				relative : true
			}))
			.pipe(inject(sources, options))
			.pipe(gulp.dest('dist'));
	}
);
