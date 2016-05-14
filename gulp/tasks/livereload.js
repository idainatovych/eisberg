import gulp from 'gulp';
import connect from 'gulp-connect';

export default function livereloadTask(config) {
    gulp.task('livereload', () => {
        connect.server({
            port: config.port,
            root: config.dest,
            livereload: true
        });

        config.server = connect;
    });
}