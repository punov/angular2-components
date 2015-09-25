var gulp   = require('gulp');
var del    = require('del'); //TODO REMOVE
var config = require('../../config').delete;
var fse = require('fs-extra');


/**
 * Delete folders and files
 */
gulp.task('delete', function(callback) {
	fse.remove('dist', function (err) {
		if (err) return console.error(err);
		console.log('success!');
		callback();
	});
	//del(config.src, callback);
	//del(['dist/**/*'], function (err, deletedFiles) {
	//	console.log('Files deleted:', deletedFiles.join(', '));
	//});
});