import gulp from 'gulp';
import sourcemaps from 'gulp-sourcemaps';
import sass from 'gulp-sass';

export default function stylesTask(config) {
    gulp.task('styles', () => {
      return gulp.src(`${config.src.styles}/**/*.scss`)
          .pipe(sourcemaps.init())
            .pipe(sass())
          .pipe(sourcemaps.write('./'))
          .pipe(gulp.dest(`${config.dest}/css`))
          .pipe(config.server.reload());
    });
}
