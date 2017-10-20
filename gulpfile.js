const gulp = require('gulp');
const scp = require('gulp-scp2');

gulp.task('deploy', () => {
  return gulp.src('./panoramic/**/*.*')
    .pipe(scp({
      host: '111.11.111.11',
      username: 'username',
      password: 'password',
      dest: '/var/www/html/orzzone.com/public_html/wp-content/themes/panoramic/'
    }))
    .on('error', e => {
      console.log(e);
    })
});
