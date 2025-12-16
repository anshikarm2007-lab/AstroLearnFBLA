// Mock Data for Reading
const readingLessons = [
    { id: 1, title: 'Reading Comprehension Strategies', duration: '40 min', progress: 80, difficulty: 'Beginner' },
    { id: 2, title: 'Literary Analysis Techniques', duration: '50 min', progress: 0, difficulty: 'Intermediate' },
    { id: 3, title: 'Vocabulary Building', duration: '35 min', progress: 100, difficulty: 'Beginner' },
];

const readingQuizzes = [
    { id: 1, title: 'Comprehension Quiz 1', questions: 15, time: '20 min', difficulty: 'easy', attempts: 2134 },
    { id: 2, title: 'Literary Analysis Quiz', questions: 20, time: '30 min', difficulty: 'medium', attempts: 1567 },
    { id: 3, title: 'Advanced Reading Challenge', questions: 25, time: '40 min', difficulty: 'hard', attempts: 987 },
];

const readingTopics = [
    { id: 1, icon: '📖', name: 'Fiction', description: 'Novels, short stories, and narratives' },
    { id: 2, icon: '📰', name: 'Non-Fiction', description: 'Articles, essays, and informational texts' },
    { id: 3, icon: '🎭', name: 'Poetry', description: 'Poems, verse, and literary devices' },
    { id: 4, icon: '📝', name: 'Writing Analysis', description: 'Themes, symbols, and literary techniques' },
];

const readingStudyGuides = [
    { id: 1, title: 'Complete Reading Guide', author: 'BookLover', description: 'Strategies for improving reading comprehension', views: 2456, likes: 198 },
    { id: 2, title: 'Literary Devices Reference', author: 'LitStudent', description: 'Complete guide to literary devices and techniques', views: 1876, likes: 145 },
    { id: 3, title: 'Vocabulary Building Tips', author: 'WordMaster', description: 'Effective methods for expanding vocabulary', views: 1654, likes: 123 },
];

function initializeLessons() {
    const lessonsGrid = document.getElementById('lessonsGrid');
    if (!lessonsGrid) return;
    lessonsGrid.innerHTML = '';
    readingLessons.forEach(lesson => {
        const lessonCard = document.createElement('div');
        lessonCard.className = 'lesson-card reading';
        const progressBar = lesson.progress > 0 
            ? `<div class="lesson-progress"><div class="lesson-progress-fill" style="width: ${lesson.progress}%"></div></div>`
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
        lessonCard.querySelector('.start-lesson-btn').addEventListener('click', () => {
            alert(`Starting: ${lesson.title}\n\nThis is a demo. In the full version, this would open the lesson.`);
        });
        lessonsGrid.appendChild(lessonCard);
    });
}

function initializeQuizzes() {
    const quizzesGrid = document.getElementById('quizzesGrid');
    if (!quizzesGrid) return;
    quizzesGrid.innerHTML = '';
    readingQuizzes.forEach(quiz => {
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
        quizCard.querySelector('.start-lesson-btn').addEventListener('click', () => {
            alert(`Starting: ${quiz.title}\n\nThis is a demo. In the full version, this would start the quiz.`);
        });
        quizzesGrid.appendChild(quizCard);
    });
}

function initializeTopics() {
    const topicsGrid = document.getElementById('topicsGrid');
    if (!topicsGrid) return;
    topicsGrid.innerHTML = '';
    readingTopics.forEach(topic => {
        const topicCard = document.createElement('div');
        topicCard.className = 'topic-card';
        topicCard.innerHTML = `
            <div class="topic-icon">${topic.icon}</div>
            <div class="topic-name">${topic.name}</div>
            <div class="topic-description">${topic.description}</div>
            <button class="view-topic-btn">Explore Topic</button>
        `;
        topicCard.querySelector('.view-topic-btn').addEventListener('click', () => {
            alert(`Exploring: ${topic.name}\n\nThis is a demo. In the full version, this would show topic details.`);
        });
        topicsGrid.appendChild(topicCard);
    });
}

function initializeStudyGuides() {
    const studyGuidesGrid = document.getElementById('studyGuidesGrid');
    if (!studyGuidesGrid) return;
    studyGuidesGrid.innerHTML = '';
    readingStudyGuides.forEach(guide => {
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
        guideCard.querySelector('.view-guide-btn').addEventListener('click', () => {
            alert(`Viewing: ${guide.title}\n\nThis is a demo. In the full version, this would open the study guide.`);
        });
        studyGuidesGrid.appendChild(guideCard);
    });
}

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
                "That's a great reading question! Let me help you understand that concept.",
                "I can explain that! Here's how to approach it...",
                "Many students find this challenging. Let me break it down for you.",
                "Excellent question! This is a common topic in reading. Here's what you need to know..."
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











