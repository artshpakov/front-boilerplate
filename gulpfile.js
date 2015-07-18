var gulp = require('gulp'),
  bower  = require('main-bower-files'),
  concat = require('gulp-concat'),
  coffee = require('gulp-coffee');


gulp.task('coffee', function() {
  gulp.src('./src/javascripts/**/*.coffee')
    .pipe(coffee({bare: true}))
    .pipe(concat('main.js'))
    .pipe(gulp.dest('./static/js/'));
});

gulp.task('deps', function() {
  gulp.src(bower())
    .pipe(concat('vendor.js'))
    .pipe(gulp.dest('./static/js/'));
});

gulp.task('watch', function() {
  gulp.watch('./src/javascript/**/*.coffee', ['coffee']);
});


gulp.task('build', ['deps', 'coffee']);
gulp.task('default', ['build', 'watch']);
