// src/alarms.js
const { setTimer } = require('./utils/timer');
const notifier = require('node-notifier');

function setAlarm(alarmTime) {
    const currentTime = new Date().getTime();
    const timeDifference = new Date(alarmTime).getTime() - currentTime;

    if (timeDifference > 0) {
        setTimer(timeDifference, () => {
            notifier.notify({
                title: 'Alarm',
                message: 'Wake up! Your alarm is ringing.',
                sound: true
            });
        });
        console.log('Alarm set for', new Date(alarmTime));
    } else {
        console.log('Alarm time has already passed.');
    }
}

module.exports = { setAlarm };
