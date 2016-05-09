var gulp        = require('gulp'),
    less        = require('gulp-less'),
    path        = require('path');


// Transpile LESS to CSS
gulp.task('less', function() {
  return gulp.src('./less/style.less')
    .pipe(less())
    .pipe(gulp.dest('styles'));
});

// Watch for changes = first variable and run defined tasks = second variable
gulp.task('watch', function() {
  gulp.watch(['./less/**/*.less'], ['less']);
});

gulp.task('default', ['less']);
