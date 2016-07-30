import gulp from 'gulp';

export default function defaultTask(config) {
    gulp.task('default', ['livereload', 'html', 'webpack', 'styles', 'watch']);
}
