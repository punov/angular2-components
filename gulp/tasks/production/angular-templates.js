var gulp
	,config
	,templateCache
	,chmod
	,configChmod
	,TEMPLATE_HEADER
	,TEMPLATE_FOOTER;

gulp = require('gulp');
config = require('../../config');
templateCache = require('gulp-angular-templatecache');
chmod = require('gulp-chmod');
configChmod = require('../../config').chmod;
TEMPLATE_HEADER = 'angular.module("<%= module %>"<%= standalone %>).run(["$templateCache",function($templateCache){';
TEMPLATE_FOOTER = '}]);';

/**
 * Create $templateCache templates
 */
gulp.task(
	'angular-templates',function(){
		gulp.src(config.src + '/**/*.html')
			.pipe(
			templateCache(
				{
					standalone: false
					,templateHeader: TEMPLATE_HEADER
					,module: 'CM'
					,templateFooter: TEMPLATE_FOOTER
				}
			)
		)
			.pipe(chmod(configChmod))
			.pipe(gulp.dest(config.build));
	}
);
