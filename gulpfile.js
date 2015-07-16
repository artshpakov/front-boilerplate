var gulp = require('gulp'),
  bower  = require('main-bower-files'),
  yaml   = require('gulp-yaml'),
  wrap   = require('gulp-wrapper'),
  util   = require('gulp-util'),
  concat = require('gulp-concat'),
  coffee = require('gulp-coffee');


gulp.task('coffee', function() {
  gulp.src('./src/javascripts/**/*.coffee')
    .pipe(coffee({bare: true}))
    .pipe(concat('app.js'))
    .pipe(gulp.dest('./static/js/'));
});

gulp.task('deps', function() {
  gulp.src(bower())
    .pipe(concat('vendor.js'))
    .pipe(gulp.dest('./static/js/'));
});

gulp.task('i18n', function() {
  gulp.src('./src/i18n/*.yml')
    .pipe(yaml())
    .pipe(wrap({
       header: 'i18n.push(',
       footer: ');',
    }))
    .pipe(concat('i18n.js'))
    .pipe(wrap({
       header: "window.i18n = [];\n",
    }))
    .pipe(gulp.dest('./static/js/'));
});


gulp.task('watch', function() {
  gulp.watch('./src/javascript/**/*.coffee', ['coffee']);
  gulp.watch('./src/i18n/*.yml', ['i18n']);
});


gulp.task('build', ['deps', 'i18n', 'coffee']);
gulp.task('default', ['build', 'watch']);
