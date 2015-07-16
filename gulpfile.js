var gulp = require('gulp'),
  concat = require('gulp-concat'),
  coffee = require('gulp-coffee');


gulp.task('coffee', function() {
  gulp.src('./src/javascripts/**/*.coffee')
    .pipe(coffee({bare: true}))
    .pipe(concat('main.js'))
    .pipe(gulp.dest('./static/js/'));
});

gulp.task('watch', function() {
  gulp.watch('./src/javascript/**/*.coffee', ['coffee']);
});

gulp.task('build', ['coffee']);
gulp.task('default', ['build', 'watch']);
