const gulp          = require('gulp');
const less          = require('gulp-less');
const concat        = require('gulp-concat');
const autoprefix    = require('gulp-autoprefixer');
const mincss        = require('gulp-clean-css');
const rename        = require('gulp-rename');
const browserSync   = require('browser-sync').create();
const lessFiles     = ('./source/less/*.less');



function lessCompiller () {
	return gulp.src(lessFiles)
	.pipe(concat('style.less' , {
		errorLogToConsole : true
	}))
	.pipe(less({
		errorLogToConsole: true
}))


.pipe(gulp.dest('./source/css/min-css'))
.pipe(browserSync.stream())
}



function mincssCompiling() {
    return gulp.src('./source/css/min-css/style.css')
        .pipe(rename({
            suffix: '-min'
				}))
				.pipe(autoprefix({
					overrideBrowserslist:  ['last 10 versions'],
					cascade: false
				}))
        .pipe(mincss({
            level: 2
        }))
        .pipe(gulp.dest('./source/css/min-css'))
        .pipe(browserSync.stream())
};

function live() {
    browserSync.init({
        server: {
            baseDir: './'
        }
    })
};



function watcher() {
		gulp.watch('./*.html').on('change', browserSync.reload);
		gulp.watch(lessFiles , lessCompiller);
    gulp.watch('./source/css/min-css/style.css',  mincssCompiling);
};


exports.lessCompiller    = lessCompiller;
exports.mincssCompiling  = mincssCompiling;
exports.watcher          = watcher;
exports.live             = live;
exports.browserSync      = browserSync;
exports.default          = gulp.parallel(live , watcher); 