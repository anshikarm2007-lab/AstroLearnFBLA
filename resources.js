// Tab Switching Functionality
document.querySelectorAll('.resource-tab').forEach(tab => {
    tab.addEventListener('click', () => {
        // Remove active class from all tabs and panels
        document.querySelectorAll('.resource-tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.resource-panel').forEach(p => p.classList.remove('active'));
        
        // Add active class to clicked tab
        tab.classList.add('active');
        
        // Show corresponding panel
        const subject = tab.getAttribute('data-subject');
        const panel = document.getElementById(`${subject}-resources`);
        if (panel) {
            panel.classList.add('active');
        }
    });
});

// Resource button interactions (mock functionality)
document.querySelectorAll('.resource-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const action = btn.textContent;
        const card = btn.closest('.resource-card, .quiz-card, .download-card');
        const title = card?.querySelector('h4')?.textContent || 'Resource';
        
        // Show a simple alert (in a real app, this would open the resource)
        alert(`${action}: ${title}\n\nThis is a demo. In the full version, this would open the resource.`);
    });
});

// Video card interactions
document.querySelectorAll('.video-card').forEach(card => {
    card.addEventListener('click', () => {
        const title = card.querySelector('h4')?.textContent || 'Video';
        alert(`Playing: ${title}\n\nThis is a demo. In the full version, this would play the video.`);
    });
});











