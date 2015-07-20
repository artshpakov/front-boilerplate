var gulp = require('gulp'),
  bower  = require('main-bower-files'),
  yaml   = require('gulp-yaml'),
  wrap   = require('gulp-wrapper'),
  util   = require('gulp-util'),
  concat = require('gulp-concat'),
  coffee = require('gulp-coffee'),
  stylus = require('gulp-stylus');


gulp.task('coffee', function() {
  gulp.src(['./src/shared/app.coffee', './src/shared/**/*.coffee', './src/components/**/*.coffee'])
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
  gulp.src('./config/i18n/*.yml')
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

gulp.task('stylus', function () {
  gulp.src(['./src/shared/**/*.styl', './src/components/**/*.styl'])
    .pipe(stylus())
    .pipe(concat('styles.css'))
    .pipe(gulp.dest('./static/css/'));
});

gulp.task('templates', function(){
  gulp.src('./src/**/*.html')
    .pipe(gulp.dest("./static/templates/"));
});


gulp.task('watch', function() {
  gulp.watch('./config/i18n/*.yml', ['i18n']);
  gulp.watch('./src/**/*.coffee', ['coffee']);
  gulp.watch('./src/**/*.styl', ['stylus']);
  gulp.watch('./src/**/*.html', ['templates']);
});


gulp.task('build', ['deps', 'i18n', 'coffee', 'stylus', 'templates']);
gulp.task('default', ['build', 'watch']);
