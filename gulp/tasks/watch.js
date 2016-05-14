import gulp from 'gulp';

export default function watchTask(config) {
    gulp.task('watch', () => {
        gulp.watch(`${config.src.index}/**/*.html`, ['html']);
        gulp.watch(`${config.src.index}/**/*.jsx`, ['webpack']);
    });
}