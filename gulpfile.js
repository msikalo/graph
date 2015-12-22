var gulp = require('gulp');
var minify = require('gulp-minify');

gulp.task('default', function() {
  // place code for your default task here
});

gulp.task('compress', function() {
  gulp.src('./*.*')
    .pipe(minify({
        exclude: ['tasks'],
        ignoreFiles: ['*.min.js']
    }))
    .pipe(gulp.dest('dist'))
});

var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

 // Concatenate & Minify JS
gulp.task('ug', function() {
    return gulp.src('*')
        .pipe(uglify())
        .pipe(gulp.dest('dest'));
});