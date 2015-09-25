var src = 'src'
	,build = 'dist'
//var development = 'build/development';
	,production = 'dist'
	,styles = 'src/styles'
	,jsSrc = 'src/tsc'
	,util = require('gulp-util')
	,fse = require('fs-extra')
	//evnironment
	,env = util.env.env || 'dev'
	//var production = env.env === 'prod';
	,envJSON = fse.readJsonSync('env/' + env + '.json');

envJSON.env = env;

module.exports = {
	env  	     : envJSON,
	build        : build,
	src          : src,
	sass         : {
		src     : src + '/styles/*.{sass,scss}',
		dest    : src + '/styles/',
		options : {
			//sass syntax
			//indentedSyntax : true
		}
	},
	autoprefixer : {
		browsers : [
			'last 20 versions',
			'safari 5',
			'ie 8',
			'ie 9',
			'opera 12.1',
			'ios 6',
			'android 4'
		],
		cascade  : true
	},
	jshint : {
		src : src + '/app/**/*.js'
	},
	watch        : {
		sass : styles + '/**/*.{sass,scss}',
		js   : 'src/app/**/*.js'
		//images:  srcAssets + '/images/**/*',
		//sprites: srcAssets + '/images/**/*.png',
		//svg:     'vectors/*.svg'
	},
	wiredep      : {
		directory : 'src/lib'
		//exclude: ['bootstrap-sass-official'],
		//ignorePath: /^(\.\.\/)*\.\./
	},
	scriptinject : {
		src   : {
			css : [
				'src/styles/**/*.css'
			],
			js  : [
				jsSrc + '/app.js',
				//jsSrc + '/**/common-module.js',
				jsSrc + '/**/*module.js',
				jsSrc + '/**/*constant.js',
				jsSrc + '/**/*provider.js',
				jsSrc + '/**/*decorator.js',
				jsSrc + '/**/*enum.js',
				jsSrc + '/**/*model.js',
				jsSrc + '/**/*config.js',
				jsSrc + '/**/*filter.js',
				jsSrc + '/**/*directive.js',
				jsSrc + '/**/*interceptor.js',
				jsSrc + '/**/*service.js',
				jsSrc + '/**/*workflow.js',
				jsSrc + '/**/*repository.js',
				jsSrc + '/**/*resolver.js',
				jsSrc + '/**/*controller.js'
			]
		},
		index : 'src/index.html'
	},
	delete       : {
		src : [build + '/**/*', '!tmp/unicorn.js']
	},
	optimize     : {
		css  : {
			src     : styles + '/**/*.css',
			dest    : build + '/styles'
		},
		js   : {
			src     : build + '/app/**/*.js',
			dest    : build + '/app/',
			options : {
				//output : {
				//	source_map : true
				//},
				compress : true
			}
		},
		html : {
			src     : src + '/index.html',
			dest    : build,
			options : {
				collapseWhitespace : true
			}
		}
		,htmlmin : {
			src     : build + '/*.html',
			dest    : build,
			options : {
				collapseWhitespace : true,
				removeComments     : true
			}
		}
	},
	revision     : {
		src  : {
			assets : [
				build + '/styles/**/*.css',
				build + '/app/**/*.js',
				build + '/images/**/*'
			],
			base   : build
		},
		dest : {
			assets   : build,
			manifest : {
				name : 'manifest.json',
				path : build
			}
		}
	},
	collect      : {
		src  : [
			build + '/manifest.json',
			build + '/**/*.{html,xml,txt,json,css,js}',
			'!' + build + '/feed.xml'
		],
		dest : build
	}
	, icons     : {
		src  : [
			src + '/apple-touch-icon-*-precomposed.png'
			,src + '/*.ico'
		]
		, dest : build
	}
	, images     : {
		src  : src + '/images/**/*',
		dest : build
	}
	, index      : {
		src  : src + '/_index.html',
		dest : src + '/',
		name : 'index.html'
	}
	, chmod : {
		owner  : {
			read    : true,
			write   : true,
			execute : true
		},
		group  : {
			execute : true
		},
		others : {
			execute : true
		}
	}
	, copyfonts: {
		production: {
			src:  src + '/fonts/*'
			,dest: production + '/fonts'
		}
	}
};