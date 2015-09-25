var gulp = require('gulp')
	,typescript = require('gulp-tsc')
	,sourcemaps = require('gulp-sourcemaps')
	,del = require('del'); //TODO REMOVE

var chmod = require('gulp-chmod');
var configChmod = require('../../config').chmod;

var changed = require('gulp-changed');
var dest = 'src/tsc';

var fse = require('fs-extra');

var runSequence = require('gulp-run-sequence');

var async = require('async');

gulp.task('tsc',function(){
	return goTsc();
});

gulp.task('tsc:silent',function(){
	return goTsc('suppressErrors');
});

gulp.task('tsc:cleanup',function(callback){
	var d = require('domain').create();
	var noop = function (er){
		console.error('Caught error!',er.message);
	};
	process.on('uncaughtException', noop);

	d.on('error',noop);
	d.run(function(){
		async.parallel([
			function(cb){
				fse.remove('src/maps/**/*',function(err){
					cb();
					if(err){
						console.error(err);
					}
				});
			},
			function(cb){
				fse.remove('src/tsc/**/*',function(err){
					cb();
					if(err){
						console.error(err);
					}
				});
			}
		],function(err,results){
			if(err){
				console.log(err);
			}
			process.removeListener('uncaughtException', noop);
			callback();
		});
	});

	//del('src/babel/**/*', callback);
});

function goTsc(silent){

	var options = {
		module: 'system',
		target: 'ES5',
		experimentalDecorators: true,
		emitDecoratorMetadata: true
	};
	return gulp.src([
		'src/app/**/*.ts'
	])
		.pipe(sourcemaps.init())
		.pipe(changed(dest))
		.pipe(chmod(configChmod))
		.pipe(typescript(options))
		.on('error',function(error){
			var that = this;
			console.log(error.message);
			if(silent){
				//runSequence('babel:cleanup', 'injection', function (){
				that.emit('end');
				//});
			}
		})
		//.pipe(sourcemaps.write({includeContent: false, sourceRoot: '/src/app'}))
		.pipe(sourcemaps.write('../maps',{
			sourceRoot: function(file){
				return '/src/app/';
			}
		}))
		.pipe(gulp.dest(dest));
}