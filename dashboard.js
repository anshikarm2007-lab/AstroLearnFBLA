// Mock Data
const mockBadges = [
    { id: 1, name: 'Math Master', icon: '📐', description: 'Complete 20 math lessons', earned: true },
    { id: 2, name: 'Science Scholar', icon: '🔬', description: 'Score 90%+ on 5 science quizzes', earned: true },
    { id: 3, name: 'Reading Champion', icon: '📚', description: 'Read 10 books', earned: true },
    { id: 4, name: 'Language Learner', icon: '🌍', description: 'Complete language course', earned: false },
    { id: 5, name: 'Streak Master', icon: '🔥', description: 'Study 7 days in a row', earned: true },
    { id: 6, name: 'Quiz Expert', icon: '✅', description: 'Complete 50 quizzes', earned: true },
    { id: 7, name: 'Tutor Helper', icon: '👥', description: 'Help 10 peers', earned: true },
    { id: 8, name: 'Early Bird', icon: '🌅', description: 'Study before 8 AM', earned: false },
    { id: 9, name: 'Night Owl', icon: '🦉', description: 'Study after 10 PM', earned: true },
    { id: 10, name: 'Perfect Score', icon: '💯', description: 'Get 100% on a quiz', earned: false },
];

const mockUpcomingSessions = [
    { subject: 'math', title: 'Algebra Study Group', time: 'Today, 3:00 PM', date: 'Dec 16' },
    { subject: 'science', title: 'Biology Lab Review', time: 'Tomorrow, 4:30 PM', date: 'Dec 17' },
    { subject: 'reading', title: 'Literature Analysis', time: 'Tuesday, 2:00 PM', date: 'Dec 17' },
];

const mockRecommendations = [
    { icon: '📐', title: 'Practice Quadratic Equations', description: 'Based on your recent quiz performance' },
    { icon: '🔬', title: 'Review Cell Structure', description: 'Weak area identified' },
    { icon: '📚', title: 'Read Chapter 5', description: 'Next in your reading list' },
    { icon: '🌍', title: 'Spanish Verb Practice', description: 'Improve your conjugation skills' },
];

let goals = [
    { id: 1, text: 'Complete Math practice quiz', completed: true },
    { id: 2, text: 'Attend Science study session', completed: false },
    { id: 3, text: 'Read 2 chapters for Reading', completed: false },
    { id: 4, text: 'Practice Spanish vocabulary', completed: false },
];

// Initialize Badges
function initializeBadges() {
    const badgesGrid = document.getElementById('badgesGrid');
    if (!badgesGrid) return;
    
    badgesGrid.innerHTML = '';
    
    mockBadges.forEach(badge => {
        const badgeItem = document.createElement('div');
        badgeItem.className = `badge-item ${badge.earned ? 'earned' : 'locked'}`;
        
        badgeItem.innerHTML = `
            <div class="badge-icon">${badge.icon}</div>
            <div class="badge-name">${badge.name}</div>
            <div class="badge-description">${badge.description}</div>
            ${badge.earned ? '<div style="margin-top: 0.5rem; color: #ffc107;">⭐ Earned</div>' : '<div style="margin-top: 0.5rem; color: var(--text-secondary);">🔒 Locked</div>'}
        `;
        
        badgesGrid.appendChild(badgeItem);
    });
}

// Initialize Upcoming Sessions
function initializeSessions() {
    const sessionsList = document.getElementById('sessionsList');
    if (!sessionsList) return;
    
    sessionsList.innerHTML = '';
    
    mockUpcomingSessions.forEach(session => {
        const sessionItem = document.createElement('div');
        sessionItem.className = `session-item ${session.subject}`;
        
        sessionItem.innerHTML = `
            <div class="session-info">
                <h4>${session.title}</h4>
                <p>${session.time}</p>
            </div>
            <div class="session-time-badge">${session.date}</div>
        `;
        
        sessionsList.appendChild(sessionItem);
    });
}

// Initialize Recommendations
function initializeRecommendations() {
    const recommendationsGrid = document.getElementById('recommendationsGrid');
    if (!recommendationsGrid) return;
    
    recommendationsGrid.innerHTML = '';
    
    mockRecommendations.forEach(rec => {
        const recCard = document.createElement('div');
        recCard.className = 'recommendation-card';
        
        recCard.innerHTML = `
            <div class="recommendation-icon">${rec.icon}</div>
            <h4>${rec.title}</h4>
            <p>${rec.description}</p>
        `;
        
        recommendationsGrid.appendChild(recCard);
    });
}

// Initialize Goals
function initializeGoals() {
    const goalsList = document.getElementById('goalsList');
    if (!goalsList) return;
    
    renderGoals();
}

function renderGoals() {
    const goalsList = document.getElementById('goalsList');
    if (!goalsList) return;
    
    goalsList.innerHTML = '';
    
    goals.forEach(goal => {
        const goalItem = document.createElement('div');
        goalItem.className = `goal-item-dashboard ${goal.completed ? 'completed' : ''}`;
        
        goalItem.innerHTML = `
            <input type="checkbox" id="goal-${goal.id}" ${goal.completed ? 'checked' : ''}>
            <label for="goal-${goal.id}">${goal.text}</label>
            <button class="goal-delete" data-id="${goal.id}">🗑️</button>
        `;
        
        const checkbox = goalItem.querySelector('input[type="checkbox"]');
        checkbox.addEventListener('change', () => {
            goal.completed = checkbox.checked;
            goalItem.classList.toggle('completed', goal.completed);
        });
        
        const deleteBtn = goalItem.querySelector('.goal-delete');
        deleteBtn.addEventListener('click', () => {
            goals = goals.filter(g => g.id !== goal.id);
            renderGoals();
        });
        
        goalsList.appendChild(goalItem);
    });
}

// Add Goal Functionality
document.getElementById('addGoalBtn')?.addEventListener('click', () => {
    const input = document.getElementById('newGoalInput');
    if (!input || !input.value.trim()) return;
    
    const newGoal = {
        id: goals.length > 0 ? Math.max(...goals.map(g => g.id)) + 1 : 1,
        text: input.value.trim(),
        completed: false
    };
    
    goals.push(newGoal);
    input.value = '';
    renderGoals();
});

document.getElementById('newGoalInput')?.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        document.getElementById('addGoalBtn')?.click();
    }
});

// Pomodoro Timer
let timerInterval = null;
let timeLeft = 25 * 60; // 25 minutes in seconds
let isRunning = false;

function updateTimerDisplay() {
    const timerDisplay = document.getElementById('timerDisplay');
    if (!timerDisplay) return;
    
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function startTimer() {
    if (isRunning) return;
    
    isRunning = true;
    timerInterval = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--;
            updateTimerDisplay();
        } else {
            clearInterval(timerInterval);
            isRunning = false;
            alert('Time\'s up! Take a break! 🎉');
        }
    }, 1000);
}

function pauseTimer() {
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
    isRunning = false;
}

function resetTimer() {
    pauseTimer();
    timeLeft = 25 * 60;
    updateTimerDisplay();
}

document.getElementById('startTimer')?.addEventListener('click', startTimer);
document.getElementById('pauseTimer')?.addEventListener('click', pauseTimer);
document.getElementById('resetTimer')?.addEventListener('click', resetTimer);

document.querySelectorAll('.preset-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const minutes = parseInt(btn.getAttribute('data-minutes'));
        pauseTimer();
        timeLeft = minutes * 60;
        updateTimerDisplay();
    });
});

// Save Notes
document.getElementById('personalNotes')?.addEventListener('blur', (e) => {
    localStorage.setItem('peerhive-notes', e.target.value);
});

// Load Notes
const savedNotes = localStorage.getItem('peerhive-notes');
if (savedNotes && document.getElementById('personalNotes')) {
    document.getElementById('personalNotes').value = savedNotes;
}

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
    initializeBadges();
    initializeSessions();
    initializeRecommendations();
    initializeGoals();
    updateTimerDisplay();
});











