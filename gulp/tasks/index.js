import defaultTask from './default';
import webpackTask from './webpack';
import htmlTask from './html';
import livereloadTask from './livereload';
import watchTask from './watch';

export default class Tasks {
    constructor(config = {}) {
        this.config = config;
        this.initTasks();
    }

    initTasks() {
        defaultTask(this.config);
        webpackTask(this.config);
        htmlTask(this.config);
        livereloadTask(this.config);
        watchTask(this.config);
    }
};