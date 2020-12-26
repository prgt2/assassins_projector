let gulp = require('gulp')
let terser = require('gulp-terser')
let pipeline = require('readable-stream').pipeline
let csso = require('gulp-csso')
let htmlmin = require('gulp-htmlmin')
let copy = require('gulp-copy')
    /* let autoprefixer = require('autoprefixer')
    let postcss = require('gulp-postcss') */

let jsPath = './js/*.js'
let cssPath = './css/*.css'
let htmlPath = './html/*.html'
let gfxPath = './gfx/**'


function styles() {
    return gulp.src(cssPath)
        .pipe(csso())
        .pipe(gulp.dest('production/css'))
}

function scripts() {
    return gulp.src(jsPath)
        .pipe(terser())
        .pipe(gulp.dest('production/js'))
}

function pages() {
    return gulp.src([htmlPath])
        .pipe(htmlmin({
            collapseWhitespace: true,
            removeComments: true
        }))
        .pipe(gulp.dest('production/html'))
}

function copyGfx() {
    return gulp.src(gfxPath)
        .pipe(gulp.dest('production/gfx'))
}

exports.styles = styles;
exports.scripts = scripts;
exports.pages = pages;
exports.copyGfx = copyGfx;