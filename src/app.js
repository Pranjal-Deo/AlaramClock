const express = require('express');
const bodyParser = require('body-parser');
const { setAlarm } = require('./alarms');
const Stopwatch = require('./stopwatch');
const { setReminder } = require('./reminders');

const app = express();
const stopwatch = new Stopwatch();

app.use(bodyParser.json());
app.use(express.static('public'));

// Route to set alarm
app.post('/set-alarm', (req, res) => {
  const { alarmTime } = req.body;
  setAlarm(alarmTime);
  res.send('Alarm set successfully');
});

// Routes for stopwatch functionality
app.get('/start-stopwatch', (req, res) => {
  stopwatch.start();
  res.send('Stopwatch started');
});

app.get('/stop-stopwatch', (req, res) => {
  stopwatch.stop();
  res.send('Stopwatch stopped');
});

app.get('/reset-stopwatch', (req, res) => {
  stopwatch.reset();
  res.send('Stopwatch reset');
});

// Route to set reminder
app.post('/set-reminder', (req, res) => {
  const { reminderMessage, reminderTime } = req.body;
  setReminder(reminderMessage, reminderTime);
  res.send('Reminder set successfully');
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
