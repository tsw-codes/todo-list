const today = new Date();
const dayName  = today.toLocaleString('en-US', { weekday: 'long' });
const dayNumber = today.getDate();
const monthName = today.toLocaleString('en-US', { month: 'long' });

document.getElementById('day-name').textContent = dayName;
document.getElementById('day-number').textContent = dayNumber;
document.getElementById('month-name').textContent = monthName;

function updateProgress(){
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const checked = Array.from(checkboxes).filter(checkbox => checkbox.checked).length;
    const total = checkboxes.length;
    
    const progressPercent = total === 0 ? 0 : (checked / total) * 100;
    document.querySelector('.progress-fill').style.width = `${progressPercent}%`;

    const label = document.getElementById('progress-label');
    label.textContent = `${checked} of ${total} tasks completed`;

}
addBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const taskText = newTask.value.trim();
    if (taskText !== ""){
       const task =  document.createElement("div");
       task.className = "task";
       const checkbox = document.createElement("input");
       checkbox.type = "checkbox";
       checkbox.addEventListener('change', updateProgress);

       const textSpan = document.createElement("span");
       textSpan.textContent = taskText;
       textSpan.className = "taskText";

       const removeBtn = document.createElement("button");
       const removeIcon = document.createElement("img");
       removeBtn.style.backgroundColor = "transparent";
       removeBtn.style.border = "none";
       removeIcon.src = "to-do-list.png";
       removeIcon.style.width = "25px";
       removeIcon.style.height = "25px";
       removeBtn.appendChild(removeIcon);

       removeBtn.addEventListener('click', () => {
        task.remove();
        updateProgress();
       });

       task.appendChild(checkbox);
       task.appendChild(textSpan);
       task.appendChild(removeBtn);
       taskList.appendChild(task);
       newTask.value = "";
       updateProgress();
      
    }
});

// Pomodoro Timer Functionality
let timerInterval;
let timeLeft = 25 * 60; // 25 minutes in seconds
let isRunning = false;
let isWorkSession = true;
let sessionCount = 0;

const timerDisplay = document.getElementById('timer-display');
const timerStatus = document.getElementById('timer-status');
const startBtn = document.getElementById('start-btn');
const pauseBtn = document.getElementById('pause-btn');
const resetBtn = document.getElementById('reset-btn');
const timerNotification = document.getElementById('timer-notification');

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
}

function updateTimerDisplay() {
    timerDisplay.textContent = formatTime(timeLeft);
}

function showNotification(message) {
    timerNotification.textContent = message;
    timerNotification.style.display = 'block';
    timerNotification.style.opacity = '1';
    
    setTimeout(() => {
        timerNotification.style.opacity = '0';
        setTimeout(() => {
            timerNotification.style.display = 'none';
        }, 300);
    }, 3000);
}

function startTimer() {
    if (!isRunning) {
        isRunning = true;
        startBtn.disabled = true;
        pauseBtn.disabled = false;
        
        timerStatus.textContent = isWorkSession ? 'Working...' : 'Break time!';
        
        timerInterval = setInterval(() => {
            timeLeft--;
            updateTimerDisplay();
            
            if (timeLeft <= 0) {
                clearInterval(timerInterval);
                isRunning = false;
                
                if (isWorkSession) {
                    sessionCount++;
                    showNotification('🎉 Work session complete! Time for a break.');
                    timeLeft = 5 * 60; // 5 minute break
                    timerStatus.textContent = 'Break time!';
                } else {
                    showNotification('✨ Break over! Ready for another work session.');
                    timeLeft = 25 * 60; // 25 minute work session
                    timerStatus.textContent = 'Ready to focus';
                }
                
                isWorkSession = !isWorkSession;
                updateTimerDisplay();
                
                startBtn.disabled = false;
                pauseBtn.disabled = true;
            }
        }, 1000);
    }
}

function pauseTimer() {
    if (isRunning) {
        clearInterval(timerInterval);
        isRunning = false;
        startBtn.disabled = false;
        pauseBtn.disabled = true;
        timerStatus.textContent = 'Paused';
    }
}

function resetTimer() {
    clearInterval(timerInterval);
    isRunning = false;
    isWorkSession = true;
    timeLeft = 25 * 60;
    sessionCount = 0;
    
    updateTimerDisplay();
    timerStatus.textContent = 'Ready to focus';
    
    startBtn.disabled = false;
    pauseBtn.disabled = true;
}

// Event listeners for timer buttons
startBtn.addEventListener('click', startTimer);
pauseBtn.addEventListener('click', pauseTimer);
resetBtn.addEventListener('click', resetTimer);

// Initialize timer display
updateTimerDisplay();

