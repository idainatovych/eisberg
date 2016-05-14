import gulp from 'gulp';

export default function htmlTask(config) {
    gulp.task('html', () => {
        return gulp.src(config.src.html)
                   .pipe(gulp.dest(config.dest))
                   .pipe(config.server.reload());
    });
}