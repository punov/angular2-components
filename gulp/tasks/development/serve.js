var gulp   = require('gulp');
var config = require('../../config').watch;
var runSequence = require('gulp-run-sequence');

/**
 * Start browsersync task and then watch files for changes
 */
gulp.task('serve',function(callback) {
    runSequence(
        'build'
        //,'browsersync'
        ,callback
    );
});