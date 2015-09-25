var gulp = require('gulp');
var plumber = require('gulp-plumber');
var sass = require('gulp-sass');
var gulpFilter = require('gulp-filter');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var config = require('../../config');
var chmod = require('gulp-chmod');

/**
 * Generate CSS from SCSS
 * Build sourcemaps
 */
gulp.task(
	'sass', function(){
		var sassConfig = config.sass.options;

		sassConfig.onError = function (error) {
			console.log(error);
		};

		// Don’t write sourcemaps of sourcemaps
		var filter = gulpFilter(['*.css', '!*.map']);
		//var filter2 = gulpFilter(['*', '!ie.sass']);

		return gulp.src(config.sass.src)
			.pipe(gulpFilter(['*', '!ie.sass']))
			.pipe(plumber())
			.pipe(sourcemaps.init())
			//.pipe(filter2)
			.pipe(sass(sassConfig))
			//.pipe(filter2.restore())
			.pipe(autoprefixer(config.autoprefixer))
			.pipe(filter) // Don’t write sourcemaps of sourcemaps
			.pipe(sourcemaps.write('./maps', {includeContent : false}))
			.pipe(filter.restore()) // Restore original files
			.pipe(chmod(config.chmod))
			.pipe(gulp.dest(config.sass.dest));
	}
);

//gulp.task('sass', function (){
//	var sassConfig = config.sass.options;
//
//	return gulp.src('src/css/*.sass')
//		.pipe(sourcemaps.init())
//		.pipe(autoprefixer({
//							   browsers: ['last 20 versions'],
//							   cascade: true,
//							   remove: true
//						   }))
//		.pipe(sass(sassConfig))
//		.pipe(sourcemaps.write('./maps'))
//		.pipe(gulp.dest('src/css'));
//});