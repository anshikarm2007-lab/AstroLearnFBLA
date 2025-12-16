// Initialize Floating Stars
function initFloatingStars() {
    const starsContainer = document.getElementById('floatingStars');
    if (!starsContainer) return;
    
    // Clear existing stars
    starsContainer.innerHTML = '';
    
    // Create stars
    const starCount = 50;
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        
        // Random position
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        
        // Random size
        if (Math.random() > 0.7) {
            star.classList.add('large');
        }
        
        // Random animation delay
        star.style.animationDelay = Math.random() * 8 + 's';
        star.style.animationDuration = (Math.random() * 4 + 6) + 's';
        
        starsContainer.appendChild(star);
    }
}

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            mobileMenu.classList.toggle('hidden');
        });
        
        // Close mobile menu when clicking on a link
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (mobileMenu && mobileMenuBtn && !mobileMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
            mobileMenu.classList.add('hidden');
        }
    });
    
    // Prevent body scroll when mobile menu is open
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            if (!mobileMenu.classList.contains('hidden')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });
    }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Authentication Functions
function isLoggedIn() {
    return localStorage.getItem('astrolearn_logged_in') === 'true';
}

function isGuestMode() {
    return localStorage.getItem('astrolearn_guest_mode') === 'true';
}

function setLoggedIn(value) {
    if (value) {
        localStorage.setItem('astrolearn_logged_in', 'true');
        localStorage.setItem('astrolearn_user_email', localStorage.getItem('astrolearn_user_email') || 'cadet@astrolearn.space');
    } else {
        localStorage.removeItem('astrolearn_logged_in');
        localStorage.removeItem('astrolearn_user_email');
    }
}

function requireAuth() {
    if (!isLoggedIn()) {
        window.location.href = 'login.html';
        return false;
    }
    return true;
}

function logout() {
    const isGuest = isGuestMode();
    setLoggedIn(false);
    localStorage.removeItem('astrolearn_guest_mode');
    
    // Clear guest-specific data
    if (isGuest) {
        localStorage.removeItem('astrolearn_user_firstname');
        localStorage.removeItem('astrolearn_user_email');
    }
    
    window.location.href = 'index.html';
}

// Check authentication on protected pages
function checkAuth() {
    const currentPage = window.location.pathname.split('/').pop() || window.location.pathname;
    const protectedPages = ['dashboard.html', 'schedule.html', 'resources.html', 'math.html', 'science.html', 'reading.html', 'language.html'];
    
    // Check if current page is protected
    const isProtected = protectedPages.some(page => currentPage.includes(page));
    
    if (isProtected) {
        const loggedIn = localStorage.getItem('astrolearn_logged_in') === 'true';
        const isGuest = localStorage.getItem('astrolearn_guest_mode') === 'true';
        
        if (!loggedIn) {
            window.location.href = 'login.html';
            return false;
        }
        
        // Guests skip onboarding, regular users need to complete it
        if (!isGuest) {
            const onboardingComplete = localStorage.getItem('astrolearn_onboarding_complete') === 'true';
            if (!onboardingComplete && currentPage !== 'learning-path.html') {
                window.location.href = 'learning-path.html';
                return false;
            }
        }
    }
    return true;
}

// Update navigation based on auth status
function updateNavigation() {
    const isAuth = isLoggedIn();
    const isGuest = isGuestMode();
    const protectedLinks = document.querySelectorAll('.protected-link');
    const authBtn = document.getElementById('authBtn');
    const authBtnMobile = document.getElementById('authBtnMobile');
    
    // Show/hide protected links and add click handlers
    protectedLinks.forEach(link => {
        if (!isAuth) {
            // Hide protected links when not logged in
            link.style.display = 'none';
        } else {
            // Show and allow navigation when logged in (including guests)
            link.style.display = 'block';
            link.onclick = null; // Remove any redirect handlers
        }
    });
    
    // Update Sign In button to Logout if logged in
    if (isAuth) {
        const buttonText = isGuest ? 'Exit Guest Mode' : 'Logout';
        if (authBtn) {
            authBtn.textContent = buttonText;
            authBtn.href = '#';
            authBtn.onclick = (e) => {
                e.preventDefault();
                logout();
            };
            authBtn.classList.remove('btn-secondary');
            authBtn.classList.add('btn-tertiary');
        }
        if (authBtnMobile) {
            authBtnMobile.textContent = buttonText;
            authBtnMobile.href = '#';
            authBtnMobile.onclick = (e) => {
                e.preventDefault();
                logout();
            };
        }
    } else {
        if (authBtn) {
            authBtn.textContent = 'Sign In';
            authBtn.href = 'login.html';
            authBtn.onclick = null;
            authBtn.classList.remove('btn-tertiary');
            authBtn.classList.add('btn-secondary');
        }
        if (authBtnMobile) {
            authBtnMobile.textContent = 'Sign In';
            authBtnMobile.href = 'login.html';
            authBtnMobile.onclick = null;
        }
    }
}

// Add click handlers to protected links on pages where they're visible
function setupProtectedLinks() {
    const isAuth = isLoggedIn();
    const protectedLinks = document.querySelectorAll('.protected-link');
    
    protectedLinks.forEach(link => {
        if (!isAuth) {
            // If not logged in, redirect to login when clicked
            link.addEventListener('click', (e) => {
                e.preventDefault();
                window.location.href = 'login.html';
            });
        }
    });
}
