// src/utils/timer.js
function setTimer(duration, callback) {
    setTimeout(callback, duration);
}

function formatTime(milliseconds) {
    let seconds = Math.floor((milliseconds / 1000) % 60),
        minutes = Math.floor((milliseconds / (1000 * 60)) % 60),
        hours = Math.floor((milliseconds / (1000 * 60 * 60)) % 24);

    return `${hours}h:${minutes}m:${seconds}s`;
}

module.exports = { setTimer, formatTime };
