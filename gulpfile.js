var gulp = require('gulp')
var uglify = require('gulp-uglify');
var pipeline = require('readable-stream').pipeline;
var csso = require('gulp-csso');
var autoprefixer = require('gulp-autoprefixer');
var htmlmin = require('gulp-htmlmin')

gulp.task('compress', function() {
    return pipeline(
        gulp.src('./js/*.js'),
        uglify(),
        gulp.dest('./')
    );
});

gulp.task('styles', function() {
    return gulp.src('./css/*.css')
        .pipe(csso())
        .pipe(gulp.dest('./css'))
});

gulp.task('scripts', function() {
    return gulp.src('./js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./js'))
});

gulp.task('pages', function() {
    return gulp.src(['./html/*.html'])
        .pipe(htmlmin({
            collapseWhitespace: true,
            removeComments: true
        }))
        .pipe(gulp.dest('./html'));
});