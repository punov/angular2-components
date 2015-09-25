var gulp = require('gulp')
	,gulpDocs = require('gulp-ngdocs')
	,gutil = require('gulp-util')
	,plumber = require('gulp-plumber');

/**
 * Generate documentation
 *
 * Angular JS Documentation
 * https://github.com/angular/angular.js/wiki/Writing-AngularJS-Documentation
 */
gulp.task(
	'ngdocs',[],function(){

		return gulp.src(
			[
				'src/app/**/*.js'
			]
		).pipe(
			gulpDocs.process(
				{
					html5Mode: false
				}
			)
		).pipe(gulp.dest('./docs'));
	}
);

gulp.task(
	'ngdocs:silent',[],function(){
		function handleError(err){
			gutil.log(err.toString());
			this.emit('end');
		}

		return gulp.src(
			[
				'src/app/**/*.js'
			]
		)
			.pipe(plumber(function(error){
				gutil.log(error.message);
				this.emit('end');
			}))
			.pipe(
			gulpDocs.process({
				html5Mode: false
			})
		).on('error',handleError)
			.pipe(gulp.dest('./docs')).on('error',handleError);
	}
);

/**
 * Start browsersync task and then watch files for changes
 */
gulp.task(
	'watch-docs',[],function(){
		gulp.watch(
			[
				'gulp/tasks/development/ngdocs.js'
				,'src/app/**/*.js'
			],[
				'ngdocs:silent',function(){
				}
			]
		).on('error',function(){
				this.emit('end');
			});
	}
);

/**
 * Build and watch docs with BrowserSync
 */
gulp.task(
	'serve:docs',[
		'ngdocs:silent'
		,'watch-docs'
	]
);