// src/stopwatch.js
class Stopwatch {
    constructor() {
        this.startTime = 0;
        this.elapsedTime = 0;
        this.interval = null;
    }

    start() {
        this.startTime = Date.now() - this.elapsedTime;
        this.interval = setInterval(() => {
            this.elapsedTime = Date.now() - this.startTime;
            console.log('Stopwatch:', this.formatTime(this.elapsedTime));
        }, 1000);
    }

    stop() {
        clearInterval(this.interval);
        console.log('Stopwatch stopped at', this.formatTime(this.elapsedTime));
    }

    reset() {
        clearInterval(this.interval);
        this.elapsedTime = 0;
        console.log('Stopwatch reset to 0.');
    }

    formatTime(milliseconds) {
        const { formatTime } = require('./utils/timer');
        return formatTime(milliseconds);
    }
}

module.exports = Stopwatch;
