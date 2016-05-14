import gulp from 'gulp';
import webpack from 'webpack-stream';

export default function webpackTask(config) {

    gulp.task('webpack', () => {
        return gulp.src(config.src.entry)
            .pipe(webpack(require('../../webpack.config.js')))
            .pipe(gulp.dest(`${config.dest}/js`))
            .pipe(config.server.reload());
    });
}