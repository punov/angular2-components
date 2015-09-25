var gulp = require('gulp');
var copy = require('gulp-copy');
var config = require('../../config').images;

/**
 * Copy images to the destination directory
 */
gulp.task(
    'images:copy',function(){
        return gulp.src(config.src)
            .pipe(copy(config.dest, {prefix:1}));
    }
);