let minutes = 25;
let seconds = 0;
let timer;
let isRunning = false;


function updateDisplay() {
  document.getElementById('timer').textContent =
    `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function startTimer() {
  if (isRunning) return;
  isRunning = true;
  timer = setInterval(() => {
    if (seconds === 0) {
      if (minutes === 0) {
        clearInterval(timer);
        alert("Time's up!");
        isRunning = false;
        return;
      }
      minutes--;
      seconds = 59;
    } else {
      seconds--;
    }
    updateDisplay();
  }, 1000);
}

function pauseTimer() {
  clearInterval(timer);
  isRunning = false;
}

function resetTimer() {
  clearInterval(timer);
  minutes = 25;
  seconds = 0;
  isRunning = false;
  updateDisplay();
}

updateDisplay();

function toggleMode() {
  const body = document.body;
  const modeBtn = document.getElementById('mode-toggle');

  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    modeBtn.textContent = "🌞 Light Mode";
  } else {
    modeBtn.textContent = "🌙 Dark Mode";
  }
}

function setTimerFromDropdown() {
  const select = document.getElementById('time-select');
  minutes = parseInt(select.value);
  seconds = 0;
  isRunning = false;
  clearInterval(timer);
  updateDisplay();
}
//Dark/light mode toggle
function toggleMode() {
  const body = document.body;
  const modeBtn = document.getElementById('mode-toggle');
  body.classList.toggle("dark");
  modeBtn.textContent = body.classList.contains("dark") ? "🌞" : "🌙";
}

//Timer select
function setTimerFromDropdown() {
  const select = document.getElementById('time-select');
  minutes = parseInt(select.value);
  seconds = 0;
  clearInterval(timer);
  isRunning = false;
  updateDisplay();
}

//Minimize/maximize
document.getElementById("minimize-btn").addEventListener("click", function () {
  const body = document.getElementById("widget-body");
  body.style.display = body.style.display === "none" ? "block" : "none";
  this.textContent = body.style.display === "none" ? "🔼" : "➖";
});

//Dragging functionality
const widget = document.getElementById("widget-container");
const header = document.getElementById("widget-header");

let offsetX = 0, offsetY = 0, isDragging = false;

header.addEventListener("mousedown", (e) => {
  isDragging = true;
  offsetX = e.clientX - widget.offsetLeft;
  offsetY = e.clientY - widget.offsetTop;
});

document.addEventListener("mousemove", (e) => {
  if (isDragging) {
    widget.style.left = e.clientX - offsetX + "px";
    widget.style.top = e.clientY - offsetY + "px";
    widget.style.bottom = "auto";
    widget.style.right = "auto";
  }
});

document.addEventListener("mouseup", () => {
  isDragging = false;
});
