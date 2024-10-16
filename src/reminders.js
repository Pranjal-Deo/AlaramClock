// src/reminders.js
const { setTimer } = require('./utils/timer');
const notifier = require('node-notifier');

function setReminder(message, reminderTime) {
    const currentTime = new Date().getTime();
    const timeDifference = new Date(reminderTime).getTime() - currentTime;

    if (timeDifference > 0) {
        setTimer(timeDifference, () => {
            notifier.notify({
                title: 'Reminder',
                message: message,
                sound: true
            });
        });
        console.log('Reminder set for', new Date(reminderTime));
    } else {
        console.log('Reminder time has already passed.');
    }
}

module.exports = { setReminder };
