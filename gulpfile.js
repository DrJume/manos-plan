const gulp = require('gulp')
const shell = require('gulp-shell')
const fileinclude = require('gulp-file-include')
const runSequence = require('run-sequence') // not needed with gulp 4
const rename = require('gulp-rename')
const uglify = require('gulp-uglify-es').default

const path = require('path')

gulp.task('riot-compile', shell.task('riot --config riot.config'))

gulp.task('riot-uglify', function () {
    gulp.src('src/riot-tags/riot-tags.js')
        .pipe(uglify(/* options */))
        .pipe(rename('riot-tags.min.js'))
        .pipe(gulp.dest('public/js'))
})

gulp.task('html-render', function () {
    gulp.src('src/index.html')
        .pipe(fileinclude({
            prefix: '@@',
            basepath: path.join(__dirname, 'src/partials')
        }))
        .pipe(gulp.dest('public/'))
})

gulp.task('riot-build', function () {
    runSequence('riot-compile', 'riot-uglify')
})

gulp.task('default', ['riot-build', 'html-render'])