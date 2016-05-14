import defaultTask from './default';

export default class Tasks {
    constructor(config = {}) {
        this.config = config;
        this.initTasks();
    }

    initTasks() {
        defaultTask(this.config);
    }
};