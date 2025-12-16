// Mock Data
const mockBuddies = [
    { id: 1, name: 'Alex Martinez', avatar: '👨‍🎓', grade: '11th Grade', subjects: ['math', 'science'], xp: 1850 },
    { id: 2, name: 'Jordan Kim', avatar: '👩‍🎓', grade: '10th Grade', subjects: ['reading', 'language'], xp: 2100 },
    { id: 3, name: 'Sam Taylor', avatar: '👨‍🎓', grade: '12th Grade', subjects: ['math', 'science'], xp: 3200 },
    { id: 4, name: 'Riley Chen', avatar: '👩‍🎓', grade: '9th Grade', subjects: ['reading'], xp: 1200 },
    { id: 5, name: 'Casey Johnson', avatar: '👨‍🎓', grade: '11th Grade', subjects: ['language', 'reading'], xp: 1950 },
    { id: 6, name: 'Morgan Lee', avatar: '👩‍🎓', grade: '10th Grade', subjects: ['math'], xp: 1650 },
];

const mockDiscussions = [
    {
        id: 1,
        title: 'Help with Quadratic Equations',
        subject: 'math',
        author: 'Student123',
        authorAvatar: '👤',
        preview: 'I\'m struggling with factoring quadratic equations. Can anyone explain the difference between factoring and using the quadratic formula?',
        replies: 12,
        views: 234,
        time: '2 hours ago'
    },
    {
        id: 2,
        title: 'Biology Lab Report Tips',
        subject: 'science',
        author: 'BioStudent',
        authorAvatar: '👤',
        preview: 'What are the key sections that should be included in a lab report? Looking for advice on structure and formatting.',
        replies: 8,
        views: 156,
        time: '5 hours ago'
    },
    {
        id: 3,
        title: 'Book Recommendations for Literature Class',
        subject: 'reading',
        author: 'BookLover',
        authorAvatar: '👤',
        preview: 'Need suggestions for my independent reading project. Prefer contemporary fiction with strong themes.',
        replies: 15,
        views: 289,
        time: '1 day ago'
    },
    {
        id: 4,
        title: 'Spanish Verb Conjugation Practice',
        subject: 'language',
        author: 'LanguageLearner',
        authorAvatar: '👤',
        preview: 'Looking for study partners to practice Spanish verb conjugations together. Anyone interested?',
        replies: 6,
        views: 98,
        time: '1 day ago'
    },
    {
        id: 5,
        title: 'Calculus Study Group Forming',
        subject: 'math',
        author: 'CalcStudent',
        authorAvatar: '👤',
        preview: 'Starting a study group for AP Calculus. Meeting weekly on Tuesdays at 4 PM. All welcome!',
        replies: 20,
        views: 345,
        time: '2 days ago'
    },
];

const mockStudyRooms = [
    {
        id: 1,
        title: 'Math Study Room',
        subject: 'math',
        participants: 4,
        maxParticipants: 8,
        status: 'active',
        topic: 'Algebra Review'
    },
    {
        id: 2,
        title: 'Science Lab Prep',
        subject: 'science',
        participants: 6,
        maxParticipants: 6,
        status: 'full',
        topic: 'Chemistry Lab'
    },
    {
        id: 3,
        title: 'Reading Circle',
        subject: 'reading',
        participants: 3,
        maxParticipants: 10,
        status: 'active',
        topic: 'Literature Analysis'
    },
    {
        id: 4,
        title: 'Spanish Conversation',
        subject: 'language',
        participants: 5,
        maxParticipants: 8,
        status: 'active',
        topic: 'Verb Practice'
    },
];

const mockProfiles = [
    { id: 1, name: 'Emma Chen', avatar: '👩‍🎓', badges: ['🏆', '⭐', '🔥'], lessons: 45, xp: 3200, streak: 12 },
    { id: 2, name: 'Marcus Johnson', avatar: '👨‍🎓', badges: ['🏆', '⭐'], lessons: 38, xp: 2850, streak: 8 },
    { id: 3, name: 'Sofia Rodriguez', avatar: '👩‍🎓', badges: ['🏆', '⭐', '🔥', '💯'], lessons: 52, xp: 4100, streak: 15 },
];

// Initialize Study Buddies
function initializeBuddies(filterSubject = 'all', filterGrade = 'all') {
    const buddiesGrid = document.getElementById('buddiesGrid');
    if (!buddiesGrid) return;
    
    buddiesGrid.innerHTML = '';
    
    let filteredBuddies = mockBuddies;
    
    if (filterSubject !== 'all') {
        filteredBuddies = filteredBuddies.filter(buddy => buddy.subjects.includes(filterSubject));
    }
    
    if (filterGrade !== 'all') {
        filteredBuddies = filteredBuddies.filter(buddy => buddy.grade.includes(filterGrade));
    }
    
    filteredBuddies.forEach(buddy => {
        const buddyCard = document.createElement('div');
        buddyCard.className = 'buddy-card';
        
        const subjectBadges = buddy.subjects.map(subject => {
            const subjectNames = {
                math: 'Math',
                science: 'Science',
                reading: 'Reading',
                language: 'Language'
            };
            return `<span class="buddy-subject-badge ${subject}">${subjectNames[subject]}</span>`;
        }).join('');
        
        buddyCard.innerHTML = `
            <div class="buddy-avatar">${buddy.avatar}</div>
            <div class="buddy-name">${buddy.name}</div>
            <div class="buddy-grade">${buddy.grade}</div>
            <div class="buddy-subjects">
                ${subjectBadges}
            </div>
            <button class="buddy-connect-btn">Connect</button>
        `;
        
        const connectBtn = buddyCard.querySelector('.buddy-connect-btn');
        connectBtn.addEventListener('click', () => {
            alert(`Connecting with ${buddy.name}...\n\nThis is a demo. In the full version, this would send a connection request.`);
        });
        
        buddiesGrid.appendChild(buddyCard);
    });
}

// Initialize Discussions
function initializeDiscussions(filterBoard = 'all') {
    const discussionsList = document.getElementById('discussionsList');
    if (!discussionsList) return;
    
    discussionsList.innerHTML = '';
    
    const filteredDiscussions = filterBoard === 'all' 
        ? mockDiscussions 
        : mockDiscussions.filter(disc => disc.subject === filterBoard);
    
    filteredDiscussions.forEach(discussion => {
        const discussionItem = document.createElement('div');
        discussionItem.className = 'discussion-item';
        
        const subjectNames = {
            math: 'Math',
            science: 'Science',
            reading: 'Reading',
            language: 'Foreign Language'
        };
        
        discussionItem.innerHTML = `
            <div class="discussion-header">
                <div>
                    <div class="discussion-title">${discussion.title}</div>
                    <div class="discussion-meta">
                        <span class="discussion-author">
                            <span>${discussion.authorAvatar}</span>
                            <span>${discussion.author}</span>
                        </span>
                        <span>•</span>
                        <span>${discussion.time}</span>
                    </div>
                </div>
                <span class="discussion-badge ${discussion.subject}">${subjectNames[discussion.subject]}</span>
            </div>
            <div class="discussion-preview">${discussion.preview}</div>
            <div class="discussion-stats">
                <span>💬 ${discussion.replies} replies</span>
                <span>👁️ ${discussion.views} views</span>
            </div>
        `;
        
        discussionItem.addEventListener('click', () => {
            alert(`Opening discussion: ${discussion.title}\n\nThis is a demo. In the full version, this would open the discussion thread.`);
        });
        
        discussionsList.appendChild(discussionItem);
    });
}

// Initialize Study Rooms
function initializeStudyRooms() {
    const studyRoomsGrid = document.getElementById('studyRoomsGrid');
    if (!studyRoomsGrid) return;
    
    studyRoomsGrid.innerHTML = '';
    
    mockStudyRooms.forEach(room => {
        const roomCard = document.createElement('div');
        roomCard.className = 'study-room-card';
        
        const participantAvatars = Array.from({ length: Math.min(room.participants, 5) }, (_, i) => 
            `<div class="participant-avatar">${['👤', '👨', '👩', '🧑', '👧'][i]}</div>`
        ).join('');
        
        roomCard.innerHTML = `
            <div class="study-room-header">
                <div class="study-room-title">${room.title}</div>
                <span class="study-room-status ${room.status}">${room.status === 'active' ? '🟢 Active' : '🔴 Full'}</span>
            </div>
            <div class="study-room-info">
                <strong>Topic:</strong> ${room.topic}
            </div>
            <div class="study-room-participants">
                <div class="participant-avatars">
                    ${participantAvatars}
                </div>
                <span>${room.participants}/${room.maxParticipants} participants</span>
            </div>
            <button class="join-room-btn" ${room.status === 'full' ? 'disabled' : ''}>
                ${room.status === 'full' ? 'Room Full' : 'Join Room'}
            </button>
        `;
        
        const joinBtn = roomCard.querySelector('.join-room-btn');
        if (!joinBtn.disabled) {
            joinBtn.addEventListener('click', () => {
                alert(`Joining: ${room.title}\n\nThis is a demo. In the full version, this would join the collaborative study room.`);
            });
        }
        
        studyRoomsGrid.appendChild(roomCard);
    });
}

// Initialize Profiles
function initializeProfiles() {
    const profilesGrid = document.getElementById('profilesGrid');
    if (!profilesGrid) return;
    
    profilesGrid.innerHTML = '';
    
    mockProfiles.forEach(profile => {
        const profileCard = document.createElement('div');
        profileCard.className = 'profile-card';
        
        const badgesHtml = profile.badges.map(badge => `<span class="achievement-badge">${badge}</span>`).join('');
        
        profileCard.innerHTML = `
            <div class="profile-avatar">${profile.avatar}</div>
            <div class="profile-name">${profile.name}</div>
            <div class="profile-achievements">
                ${badgesHtml}
            </div>
            <div class="profile-stats">
                <div class="profile-stat">
                    <div class="profile-stat-value">${profile.lessons}</div>
                    <div class="profile-stat-label">Lessons</div>
                </div>
                <div class="profile-stat">
                    <div class="profile-stat-value">${profile.xp}</div>
                    <div class="profile-stat-label">XP</div>
                </div>
                <div class="profile-stat">
                    <div class="profile-stat-value">${profile.streak}</div>
                    <div class="profile-stat-label">Streak</div>
                </div>
            </div>
            <button class="view-profile-btn">View Profile</button>
        `;
        
        const viewBtn = profileCard.querySelector('.view-profile-btn');
        viewBtn.addEventListener('click', () => {
            alert(`Viewing profile: ${profile.name}\n\nThis is a demo. In the full version, this would show the full student profile.`);
        });
        
        profilesGrid.appendChild(profileCard);
    });
}

// Board Tab Switching
document.querySelectorAll('.board-tab').forEach(tab => {
    tab.addEventListener('click', () => {
        document.querySelectorAll('.board-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        
        const board = tab.getAttribute('data-board');
        initializeDiscussions(board);
    });
});

// Search Buddies
document.getElementById('searchBuddies')?.addEventListener('click', () => {
    const subjectFilter = document.getElementById('subjectFilter')?.value || 'all';
    const gradeFilter = document.getElementById('gradeFilter')?.value || 'all';
    initializeBuddies(subjectFilter, gradeFilter);
});

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
    initializeBuddies();
    initializeDiscussions();
    initializeStudyRooms();
    initializeProfiles();
});











