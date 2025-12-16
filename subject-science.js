// Mock Data for Science
const scienceLessons = [
    { id: 1, title: 'Cell Biology Basics', duration: '50 min', progress: 60, difficulty: 'Beginner' },
    { id: 2, title: 'Chemical Reactions', duration: '55 min', progress: 0, difficulty: 'Intermediate' },
    { id: 3, title: 'Newton\'s Laws of Motion', duration: '45 min', progress: 100, difficulty: 'Beginner' },
];

const scienceQuizzes = [
    { id: 1, title: 'Biology Basics Quiz', questions: 20, time: '25 min', difficulty: 'easy', attempts: 1456 },
    { id: 2, title: 'Chemistry Quiz', questions: 25, time: '35 min', difficulty: 'medium', attempts: 1123 },
    { id: 3, title: 'Physics Challenge', questions: 30, time: '45 min', difficulty: 'hard', attempts: 789 },
];

const scienceTopics = [
    { id: 1, icon: '🧬', name: 'Biology', description: 'Cells, genetics, and ecosystems' },
    { id: 2, icon: '⚗️', name: 'Chemistry', description: 'Atoms, molecules, and reactions' },
    { id: 3, icon: '⚛️', name: 'Physics', description: 'Motion, energy, and forces' },
    { id: 4, icon: '🌍', name: 'Earth Science', description: 'Geology, weather, and climate' },
];

const scienceStudyGuides = [
    { id: 1, title: 'Complete Biology Study Guide', author: 'BioStudent', description: 'Comprehensive guide covering all biology topics', views: 1987, likes: 167 },
    { id: 2, title: 'Chemistry Formula Sheet', author: 'ChemWhiz', description: 'All essential chemistry formulas and equations', views: 1654, likes: 134 },
    { id: 3, title: 'Physics Problem Solving Tips', author: 'PhysicsPro', description: 'Step-by-step approach to solving physics problems', views: 1432, likes: 112 },
];

// Initialize Lessons
function initializeLessons() {
    const lessonsGrid = document.getElementById('lessonsGrid');
    if (!lessonsGrid) return;
    
    lessonsGrid.innerHTML = '';
    
    scienceLessons.forEach(lesson => {
        const lessonCard = document.createElement('div');
        lessonCard.className = 'lesson-card science';
        
        const progressBar = lesson.progress > 0 
            ? `<div class="lesson-progress">
                <div class="lesson-progress-fill" style="width: ${lesson.progress}%"></div>
               </div>`
            : '';
        
        lessonCard.innerHTML = `
            <div class="lesson-header">
                <div>
                    <div class="lesson-title">${lesson.title}</div>
                    <div class="lesson-meta">${lesson.duration} • ${lesson.difficulty}</div>
                </div>
            </div>
            ${progressBar}
            <button class="start-lesson-btn">${lesson.progress > 0 ? 'Continue Lesson' : 'Start Lesson'}</button>
        `;
        
        const startBtn = lessonCard.querySelector('.start-lesson-btn');
        startBtn.addEventListener('click', () => {
            alert(`Starting: ${lesson.title}\n\nThis is a demo. In the full version, this would open the lesson.`);
        });
        
        lessonsGrid.appendChild(lessonCard);
    });
}

// Initialize Quizzes
function initializeQuizzes() {
    const quizzesGrid = document.getElementById('quizzesGrid');
    if (!quizzesGrid) return;
    
    quizzesGrid.innerHTML = '';
    
    scienceQuizzes.forEach(quiz => {
        const quizCard = document.createElement('div');
        quizCard.className = 'quiz-card-subject';
        
        quizCard.innerHTML = `
            <div class="quiz-title">${quiz.title}</div>
            <div class="quiz-info">
                <span>${quiz.questions} questions</span>
                <span>${quiz.time}</span>
            </div>
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
                <span class="quiz-difficulty ${quiz.difficulty}">${quiz.difficulty.charAt(0).toUpperCase() + quiz.difficulty.slice(1)}</span>
                <span style="font-size: 0.9rem; color: var(--text-secondary);">${quiz.attempts} attempts</span>
            </div>
            <button class="start-lesson-btn">Start Quiz</button>
        `;
        
        const startBtn = quizCard.querySelector('.start-lesson-btn');
        startBtn.addEventListener('click', () => {
            alert(`Starting: ${quiz.title}\n\nThis is a demo. In the full version, this would start the quiz.`);
        });
        
        quizzesGrid.appendChild(quizCard);
    });
}

// Initialize Topics
function initializeTopics() {
    const topicsGrid = document.getElementById('topicsGrid');
    if (!topicsGrid) return;
    
    topicsGrid.innerHTML = '';
    
    scienceTopics.forEach(topic => {
        const topicCard = document.createElement('div');
        topicCard.className = 'topic-card';
        
        topicCard.innerHTML = `
            <div class="topic-icon">${topic.icon}</div>
            <div class="topic-name">${topic.name}</div>
            <div class="topic-description">${topic.description}</div>
            <button class="view-topic-btn">Explore Topic</button>
        `;
        
        const viewBtn = topicCard.querySelector('.view-topic-btn');
        viewBtn.addEventListener('click', () => {
            alert(`Exploring: ${topic.name}\n\nThis is a demo. In the full version, this would show topic details.`);
        });
        
        topicsGrid.appendChild(topicCard);
    });
}

// Initialize Study Guides
function initializeStudyGuides() {
    const studyGuidesGrid = document.getElementById('studyGuidesGrid');
    if (!studyGuidesGrid) return;
    
    studyGuidesGrid.innerHTML = '';
    
    scienceStudyGuides.forEach(guide => {
        const guideCard = document.createElement('div');
        guideCard.className = 'study-guide-card';
        
        guideCard.innerHTML = `
            <div class="guide-header">
                <div>
                    <div class="guide-title">${guide.title}</div>
                    <div class="guide-author">By ${guide.author}</div>
                </div>
            </div>
            <div class="guide-description">${guide.description}</div>
            <div class="guide-stats">
                <span>👁️ ${guide.views} views</span>
                <span>👍 ${guide.likes} likes</span>
            </div>
            <button class="view-guide-btn">View Study Guide</button>
        `;
        
        const viewBtn = guideCard.querySelector('.view-guide-btn');
        viewBtn.addEventListener('click', () => {
            alert(`Viewing: ${guide.title}\n\nThis is a demo. In the full version, this would open the study guide.`);
        });
        
        studyGuidesGrid.appendChild(guideCard);
    });
}

// Chat Functionality
function initializeChat() {
    const chatInput = document.getElementById('chatInput');
    const chatSendBtn = document.getElementById('chatSendBtn');
    const chatMessages = document.getElementById('chatMessages');
    
    if (!chatInput || !chatSendBtn || !chatMessages) return;
    
    function sendMessage() {
        const message = chatInput.value.trim();
        if (!message) return;
        
        const userMessage = document.createElement('div');
        userMessage.className = 'chat-message user';
        userMessage.innerHTML = `
            <div class="message-avatar">👤</div>
            <div class="message-content">
                <div class="message-text">${message}</div>
                <div class="message-time">Just now</div>
            </div>
        `;
        chatMessages.appendChild(userMessage);
        chatInput.value = '';
        chatMessages.scrollTop = chatMessages.scrollHeight;
        
        setTimeout(() => {
            const botResponses = [
                "That's a great science question! Let me help you understand that concept.",
                "I can explain that! Here's a scientific approach...",
                "Many students find this challenging. Let me break it down for you.",
                "Excellent question! This is a common topic in science. Here's what you need to know..."
            ];
            const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
            
            const botMessage = document.createElement('div');
            botMessage.className = 'chat-message bot';
            botMessage.innerHTML = `
                <div class="message-avatar">🤖</div>
                <div class="message-content">
                    <div class="message-text">${randomResponse}</div>
                    <div class="message-time">Just now</div>
                </div>
            `;
            chatMessages.appendChild(botMessage);
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }, 1000);
    }
    
    chatSendBtn.addEventListener('click', sendMessage);
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    initializeLessons();
    initializeQuizzes();
    initializeTopics();
    initializeStudyGuides();
    initializeChat();
});











