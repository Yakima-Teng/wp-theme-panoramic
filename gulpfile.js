const gulp = require('gulp');
const scp = require('gulp-scp2');
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
