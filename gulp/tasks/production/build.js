var gulp = require('gulp');
//var runSequence = require('run-sequence');

var runSequence = require('gulp-run-sequence');

/**
 * Run all tasks needed for a build in defined order
 */
gulp.task(
	'build:production',[
		'jshint'
		,'jscs'
		,'delete'
		,'copy:index'
	],function(callback){
		runSequence(
			'env'
			,'angular-templates'
			,'babel:cleanup'
			,'babel'
			,[
				'sass'
				,'bowerjs:production'
				,'bowercss:production'
				//, 'injection'
				,'images:copy'
				,'icons:copy'
				,'copy:fonts'
				//,'base64'
			]
			,'strip-json-debug'
			//'usemin'
			,'optimize:html' //it just to copy file index.html to dist
			,'optimize:css'
			,'concat'
			,'strip-debug'
			//,'optimize:images'
			//,'copy:fonts:production'
			//
			//,'optimize:js'
			,'injection:production'
			,'revision'
			,'rev:collect'
			,'optimize:html2'
			,'ngdocs'
			//,[
			//	'webp'
			//	,'gzip'
			//]
			,callback
		);
	}
);
