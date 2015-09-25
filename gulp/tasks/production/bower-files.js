var gulp   = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var lib    = require('bower-files')();

gulp.task('bowerjs:production', function () {
	gulp.src(lib.ext('js').files)
		.pipe(concat('lib.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('dist/app'));
});


gulp.task('bowercss:production', function () {
	gulp.src(lib.ext('css').files)
			.pipe(concat('lib.min.css'))
			.pipe(gulp.dest('dist/styles'));
});
