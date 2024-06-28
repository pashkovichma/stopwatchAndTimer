// Stopwatch
let stopwatchInterval;
let stopwatchTime = 0;
const defaultTime = '00 : 00 : 00';

const stopwatchDisplay = document.getElementById('stopwatch-display');
stopwatchDisplay.innerText = defaultTime;

const startStopwatchButton = document.getElementById('start-stopwatch');
const stopStopwatchButton = document.getElementById('stop-stopwatch');
const resetStopwatchButton = document.getElementById('reset-stopwatch');

startStopwatchButton.addEventListener('click', startStopwatch);
stopStopwatchButton.addEventListener('click', stopStopwatch);
resetStopwatchButton.addEventListener('click', resetStopwatch);

function startStopwatch() {
    if (!stopwatchInterval) {
        stopwatchInterval = setInterval(() => {
            stopwatchTime++;
            stopwatchDisplay.innerText = formatTime(stopwatchTime);
        }, 1000);

        startStopwatchButton.style.display = 'none';
        stopStopwatchButton.style.display = 'inline-block';
        resetStopwatchButton.style.display = 'inline-block';
    }
}

function stopStopwatch() {
    clearInterval(stopwatchInterval);
    stopwatchInterval = null;

    startStopwatchButton.style.display = 'inline-block';
    stopStopwatchButton.style.display = 'none';
}

function resetStopwatch() {
    stopStopwatch();
    stopwatchTime = 0;
    stopwatchDisplay.innerText = defaultTime;

    startStopwatchButton.style.display = 'inline-block';
    stopStopwatchButton.style.display = 'none';
    resetStopwatchButton.style.display = 'none';
}

// Timer
let timerInterval;
let timerTime = 0;

const timerDisplay = document.getElementById('timer-display');
timerDisplay.innerText = defaultTime;

const setTimerButton = document.getElementById('set-timer');
const startTimerButton = document.getElementById('start-timer');
const stopTimerButton = document.getElementById('stop-timer');
const resetTimerButton = document.getElementById('reset-timer');

setTimerButton.addEventListener('click', setTimer);
document.getElementById('add-1m').addEventListener('click', () => addTime(60));
document.getElementById('add-5m').addEventListener('click', () => addTime(300));
document.getElementById('add-10m').addEventListener('click', () => addTime(600));
startTimerButton.addEventListener('click', startTimer);
stopTimerButton.addEventListener('click', stopTimer);
resetTimerButton.addEventListener('click', resetTimer);

function setTimer() {
    const input = document.getElementById('timer-input').value;
    timerTime = parseInt(input, 10);
    if (isNaN(timerTime)) timerTime = 0;
    document.getElementById('timer-display').innerText = formatTime(timerTime);

    resetTimerButton.style.display = 'inline-block';
}

function addTime(seconds) {
    timerTime += seconds;
    document.getElementById('timer-display').innerText = formatTime(timerTime);

    resetTimerButton.style.display = 'inline-block';
}

function startTimer() {
    if (!timerInterval && timerTime > 0) {
        timerInterval = setInterval(() => {
            if (timerTime > 0) {
                timerTime--;
                document.getElementById('timer-display').innerText = formatTime(timerTime);
            } else {
                stopTimer();
                alert('Time is up!');
            }
        }, 1000);

        startTimerButton.style.display = 'none';
        stopTimerButton.style.display = 'inline-block';
        resetTimerButton.style.display = 'inline-block';
    }
}

function stopTimer() {
    clearInterval(timerInterval);
    timerInterval = null;

    startTimerButton.style.display = 'inline-block';
    stopTimerButton.style.display = 'none';
}

function resetTimer() {
    stopTimer();
    timerTime = 0;
    document.getElementById('timer-display').innerText = defaultTime;

    startTimerButton.style.display = 'inline-block';
    stopTimerButton.style.display = 'none';
    resetTimerButton.style.display = 'none';
}

function formatTime(seconds) {
    const h = String(Math.floor(seconds / 3600));
    const m = String(Math.floor((seconds % 3600) / 60));
    const s = String(seconds % 60);
    return `${(h < 10 ? '0' : '') + h} : ${(m < 10 ? '0' : '') + m} : ${(s < 10 ? '0' : '') + s}`;
}