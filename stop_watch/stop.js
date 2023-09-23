const display = document.getElementById('display');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');

let startTime;
let intervalId;
let elapsedTime = 0;
let isRunning = false;

function formatTime(ms) {
  const date = new Date(ms);
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');
  const milliseconds = String(Math.floor(date.getMilliseconds() / 10)).padStart(2, '0');
  return `${minutes}:${seconds}:${milliseconds}`;
}

function startTimer() {
  if (!isRunning) {
    isRunning = true;
    startTime = Date.now() - elapsedTime;
    intervalId = setInterval(updateDisplay, 10);
  }
}

function stopTimer() {
  if (isRunning) {
    isRunning = false;
    clearInterval(intervalId);
  }
}

function resetTimer() {
  stopTimer();
  elapsedTime = 0;
  updateDisplay();
}

function updateDisplay() {
  elapsedTime = Date.now() - startTime;
  display.textContent = formatTime(elapsedTime);
}

startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);
