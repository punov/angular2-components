var gulp = require('gulp');
var config = require('../../config').watch;
var runSequence = require('gulp-run-sequence');

var chokidar = require('chokidar');
var log = console.log.bind(console);

/**
 * Start browsersync task and then watch files for changes
 */
gulp.task('watch',[],function(){
	var src = [
		'src/app/**/*.js'
		//,'src/app/**/*.jsx'
	]
	,watcher
	,debounce = function(fn, delay) {
		var timer = null;
		return function () {
			var context = this, args = arguments;
			clearTimeout(timer);
			timer = setTimeout(function () {
				fn.apply(context, args);
			}, delay);
		};
	}
	,wait = 500
	,callback
	,allowStream = true
	,enableStream = function (){allowStream = true}
	,disableStream = function (){allowStream = false};
	// Handle the error
	function errorHandler(error){
		//console.log(error.toString());
		this.emit('end');
	}

	gulp.watch(config.sass,['sass'/*, 'scsslint'*/]);
	watcher = chokidar.watch('src/app/',{
		//persistent: true,

		//ignored: '*.txt',
		ignoreInitial: true
		//followSymlinks: true,
		//cwd: '.',
		//
		,usePolling: true
		//alwaysStat: false,
		//depth: undefined,
		,interval:     100
		//
		//ignorePermissionErrors: false,
		//atomic: true
	});

	watcher
		.on('change',function(path,stats){
			//if(stats){
			//	console.log('File',path,'changed size to',stats.size);
			//}
			//console.log('change');


			debounce(function (){
				runSequence('babel:silent', 'injection');
			},wait)();
		}).on('error',function(error){
			log('Error happened',error);
		}).on('unlink',function(path){
			//log('File',path,'has been removed');
			debounce(function (){
				log('File',path,'has been removed');
				runSequence('babel:silent','injection');
			},wait)();
		}).on('add',function(path){
			//log('File',path,'has been added');
			debounce(function (){
				runSequence('babel:silent','injection');
			},wait)();
		});


	//gulp.watch(config.images,  ['images']);
	//gulp.watch(config.svg,     ['copy:fonts']);
	//gulp.watch(config.sprites, ['sprites']);

});