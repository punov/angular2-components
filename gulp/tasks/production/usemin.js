var gulp = require('gulp');
var config = require('../../config');
var usemin = require('gulp-usemin');
var uglify = require('gulp-uglify');
var minifyHtml = require('gulp-minify-html');
var minifyCss = require('gulp-minify-css');
var rev = require('gulp-rev');

gulp.task(
	'usemin', function () {
		return gulp.src('src/*.html')
			.pipe(
			usemin(
				{
					cssLibs : [minifyCss(), 'concat', rev()],
					cssSrc  : [minifyCss(), 'concat', rev()],
					//htmlmin : minifyHtml(),
					jsLibs  : [uglify(), rev()],
					jsSrc   : [uglify(), rev()]
					//html    : [minifyHtml({empty : false})]
				}
			)
		)
			.pipe(gulp.dest('dist/'));
	}
);