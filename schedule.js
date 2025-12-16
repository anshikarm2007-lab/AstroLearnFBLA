// Mock Data
const mockSessions = [
    { day: 'Monday', date: 16, time: '3:00 PM', subject: 'math', title: 'Algebra Study Group' },
    { day: 'Monday', date: 16, time: '4:30 PM', subject: 'science', title: 'Biology Lab Review' },
    { day: 'Tuesday', date: 17, time: '2:00 PM', subject: 'reading', title: 'Literature Analysis' },
    { day: 'Tuesday', date: 17, time: '5:00 PM', subject: 'language', title: 'Spanish Conversation' },
    { day: 'Wednesday', date: 18, time: '3:30 PM', subject: 'math', title: 'Geometry Problem Solving' },
    { day: 'Wednesday', date: 18, time: '4:00 PM', subject: 'science', title: 'Chemistry Tutoring' },
    { day: 'Thursday', date: 19, time: '2:30 PM', subject: 'reading', title: 'Reading Comprehension' },
    { day: 'Thursday', date: 19, time: '4:00 PM', subject: 'language', title: 'French Basics' },
    { day: 'Friday', date: 20, time: '3:00 PM', subject: 'math', title: 'Calculus Prep' },
    { day: 'Friday', date: 20, time: '4:30 PM', subject: 'science', title: 'Physics Study Group' },
];

const mockTutors = [
    {
        name: 'Emma Chen',
        avatar: '👩‍🎓',
        rating: 4.9,
        subjects: ['math', 'science'],
        availability: [
            { day: 'Monday', time: '3:00 PM - 5:00 PM' },
            { day: 'Wednesday', time: '3:00 PM - 5:00 PM' },
            { day: 'Friday', time: '2:00 PM - 4:00 PM' }
        ]
    },
    {
        name: 'Marcus Johnson',
        avatar: '👨‍🎓',
        rating: 4.8,
        subjects: ['reading', 'language'],
        availability: [
            { day: 'Tuesday', time: '2:00 PM - 4:00 PM' },
            { day: 'Thursday', time: '3:00 PM - 5:00 PM' }
        ]
    },
    {
        name: 'Sofia Rodriguez',
        avatar: '👩‍🎓',
        rating: 5.0,
        subjects: ['math', 'science'],
        availability: [
            { day: 'Monday', time: '4:00 PM - 6:00 PM' },
            { day: 'Wednesday', time: '4:00 PM - 6:00 PM' }
        ]
    },
    {
        name: 'David Kim',
        avatar: '👨‍🎓',
        rating: 4.7,
        subjects: ['language', 'reading'],
        availability: [
            { day: 'Tuesday', time: '3:00 PM - 5:00 PM' },
            { day: 'Thursday', time: '2:00 PM - 4:00 PM' }
        ]
    },
    {
        name: 'Alexis Taylor',
        avatar: '👩‍🎓',
        rating: 4.9,
        subjects: ['math'],
        availability: [
            { day: 'Monday', time: '2:00 PM - 4:00 PM' },
            { day: 'Friday', time: '3:00 PM - 5:00 PM' }
        ]
    },
    {
        name: 'Jordan Lee',
        avatar: '👨‍🎓',
        rating: 4.8,
        subjects: ['science'],
        availability: [
            { day: 'Wednesday', time: '2:00 PM - 4:00 PM' },
            { day: 'Friday', time: '4:00 PM - 6:00 PM' }
        ]
    }
];

const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let currentWeekStart = new Date();
currentWeekStart.setDate(currentWeekStart.getDate() - currentWeekStart.getDay());

// Initialize Calendar
function initializeCalendar() {
    const calendarGrid = document.getElementById('calendarGrid');
    if (!calendarGrid) return;

    // Create day headers
    const dayHeaders = daysOfWeek.map(day => day.substring(0, 3));
    
    calendarGrid.innerHTML = '';
    
    // Create calendar days
    for (let i = 0; i < 7; i++) {
        const date = new Date(currentWeekStart);
        date.setDate(date.getDate() + i);
        
        const dayDiv = document.createElement('div');
        dayDiv.className = 'calendar-day';
        
        const dayHeader = document.createElement('div');
        dayHeader.className = 'calendar-day-header';
        dayHeader.textContent = dayHeaders[i];
        
        const dayNumber = document.createElement('div');
        dayNumber.className = 'calendar-day-number';
        dayNumber.textContent = date.getDate();
        
        dayDiv.appendChild(dayHeader);
        dayDiv.appendChild(dayNumber);
        
        // Add sessions for this day
        const daySessions = mockSessions.filter(session => {
            const sessionDate = new Date(2024, 11, session.date); // December 2024
            return sessionDate.getDay() === i;
        });
        
        daySessions.forEach(session => {
            const sessionDiv = document.createElement('div');
            sessionDiv.className = `calendar-session ${session.subject}`;
            sessionDiv.innerHTML = `
                <div class="session-time">${session.time}</div>
                <div class="session-title">${session.title}</div>
            `;
            dayDiv.appendChild(sessionDiv);
        });
        
        calendarGrid.appendChild(dayDiv);
    }
    
    updateWeekDisplay();
}

function updateWeekDisplay() {
    const weekEnd = new Date(currentWeekStart);
    weekEnd.setDate(weekEnd.getDate() + 6);
    
    const weekDisplay = document.getElementById('currentWeek');
    if (weekDisplay) {
        const options = { month: 'short', day: 'numeric' };
        weekDisplay.textContent = `${currentWeekStart.toLocaleDateString('en-US', options)} - ${weekEnd.toLocaleDateString('en-US', options)}, ${currentWeekStart.getFullYear()}`;
    }
}

// Initialize Tutors
function initializeTutors(filterSubject = 'all') {
    const tutorsGrid = document.getElementById('tutorsGrid');
    if (!tutorsGrid) return;
    
    tutorsGrid.innerHTML = '';
    
    const filteredTutors = filterSubject === 'all' 
        ? mockTutors 
        : mockTutors.filter(tutor => tutor.subjects.includes(filterSubject));
    
    filteredTutors.forEach(tutor => {
        const tutorCard = document.createElement('div');
        tutorCard.className = 'tutor-card';
        
        const subjectBadges = tutor.subjects.map(subject => {
            const subjectNames = {
                math: 'Math',
                science: 'Science',
                reading: 'Reading',
                language: 'Foreign Language'
            };
            return `<span class="subject-badge ${subject}">${subjectNames[subject]}</span>`;
        }).join('');
        
        const availabilityItems = tutor.availability.map(avail => `
            <div class="availability-item">
                <span class="availability-day">${avail.day}</span>
                <span class="availability-time">${avail.time}</span>
            </div>
        `).join('');
        
        tutorCard.innerHTML = `
            <div class="tutor-header">
                <div class="tutor-avatar">${tutor.avatar}</div>
                <div class="tutor-info">
                    <h3>${tutor.name}</h3>
                    <div class="tutor-rating">${'⭐'.repeat(Math.floor(tutor.rating))} ${tutor.rating}</div>
                </div>
            </div>
            <div class="tutor-subjects">
                ${subjectBadges}
            </div>
            <div class="tutor-availability">
                ${availabilityItems}
            </div>
            <button class="reserve-btn">Reserve a Spot</button>
        `;
        
        tutorsGrid.appendChild(tutorCard);
    });
}

// Filter functionality
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        const subject = btn.getAttribute('data-subject');
        initializeTutors(subject);
        
        // Filter calendar sessions
        const sessions = document.querySelectorAll('.calendar-session');
        sessions.forEach(session => {
            if (subject === 'all' || session.classList.contains(subject)) {
                session.style.display = 'block';
            } else {
                session.style.display = 'none';
            }
        });
    });
});

// Calendar navigation
document.getElementById('prevWeek')?.addEventListener('click', () => {
    currentWeekStart.setDate(currentWeekStart.getDate() - 7);
    initializeCalendar();
});

document.getElementById('nextWeek')?.addEventListener('click', () => {
    currentWeekStart.setDate(currentWeekStart.getDate() + 7);
    initializeCalendar();
});

// Countdown timer
function updateCountdown() {
    const now = new Date();
    const nextSession = new Date();
    nextSession.setHours(15, 30, 0, 0); // 3:30 PM
    
    if (now > nextSession) {
        nextSession.setDate(nextSession.getDate() + 1);
    }
    
    const diff = nextSession - now;
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');
    
    if (hoursEl) hoursEl.textContent = String(hours).padStart(2, '0');
    if (minutesEl) minutesEl.textContent = String(minutes).padStart(2, '0');
    if (secondsEl) secondsEl.textContent = String(seconds).padStart(2, '0');
}

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
    initializeCalendar();
    initializeTutors();
    updateCountdown();
    setInterval(updateCountdown, 1000);
});











