'use strict';
const gulp = require('gulp');
const scp = require('gulp-scp2');
const sass = require('gulp-sass');
const config = require('./config');

gulp.task('deploy', () => {
  return gulp.src('./panoramic/**/*.*')
    .pipe(scp({
      host: config.publish.host,
      username: config.publish.username,
      password: config.publish.password,
      dest: config.publish.dest,
    }))
    .on('error', e => {
      console.log(e);
    })
});

gulp.task('sass', () => {
  return gulp.src('./src/style.scss')
    .pipe(sass.sync({
      outputStyle: 'compressed',
    })
    .on('error', sass.logError))
    .pipe(gulp.dest('./panoramic'))
});

gulp.task('sass:watch', () => {
  gulp.watch('./src/**/*.scss', ['sass']);
});