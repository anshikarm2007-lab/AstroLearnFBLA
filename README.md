# AstroLearn - FBLA Website Design Project

## 🌟 Project Overview

AstroLearn is an innovative, space-themed educational platform designed to make learning engaging and interactive. The platform features a modern, responsive design with a galaxy-inspired aesthetic, providing students with a comprehensive learning experience across multiple subjects including Math, Science, Reading, and Language.

## 🚀 Quick Access

### **Live Website (Netlify Deployment)**
**[👉 Click here to access the live website](https://6944e716cae1f3f0eb93886b--ubiquitous-donut-9c461f.netlify.app/)**

The website is fully deployed and accessible at the link above. No installation or setup required - simply click the link to begin exploring!

### **GitHub Repository**
**[📂 View Source Code on GitHub](https://github.com/anshikarm2007-lab/AstroLearnFBLA.git)**

All source code, documentation, and project files are available in the GitHub repository.

---

## 📖 Detailed Access Instructions

### **Option 1: Direct Web Access (Recommended for Judges)**

1. **Click the Netlify link above** or copy and paste this URL into your browser:
   ```
   https://6944e716cae1f3f0eb93886b--ubiquitous-donut-9c461f.netlify.app/
   ```

2. **The website will load immediately** - no login required to view the homepage

3. **To access protected features:**
   - Click "Sign In" in the top navigation
   - You can either:
     - **Create an account** with email and password
     - **Use Guest Mode** for quick access (click "Continue as Guest" on the login page)

4. **Recommended first steps:**
   - Explore the homepage to see the design and features
   - Sign in (or use Guest Mode) to access the Dashboard
   - Navigate through Resources, Schedule, and Games sections
   - Try the interactive lessons and quizzes

### **Option 2: Local Development Setup**

If you prefer to run the website locally:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/anshikarm2007-lab/AstroLearnFBLA.git
   cd AstroLearnFBLA
   ```

2. **Open the project:**
   - Simply open `index.html` in a web browser, OR
   - Use a local server (recommended):
     ```bash
     # Using Python
     python -m http.server 8000
     
     # Using Node.js (if you have http-server installed)
     npx http-server
     ```

3. **Access locally:**
   - Navigate to `http://localhost:8000` in your browser

---
Option 3: 
In the provided files, unzip the folder and save the folder. Within the folder, search for the file named "index.html" and click on it. Once clicked, the website loads up.

## 🎯 Key Features & Navigation Guide

### **Homepage (`index.html`)**
- **Welcome section** with animated space theme
- **Mission Features** overview
- **Project description** and testimonials
- **Navigation** to all major sections

### **Dashboard** (Requires Login)
- **Progress tracking** with visual constellations
- **Grade-level customization** (6-12)
- **Subject selection** (Math, Science, Reading, Language)
- **Completed lessons** tracking
- **Achievement system**

### **Resources Section**
- **Downloadable PDFs:**
  - Algebra Study Guide
  - Math Practice Problems
  - Chemistry Formula Sheet
  - Science Experiment Guide
  - History Timeline Chart
  - Vocabulary Flashcard Set
  - Business Fundamentals
  - Practice Quiz
- **Interactive Flashcards** by subject
- **Practice Quizzes** with grade-level content
- **Educational Videos** (demo mode - see disclaimer)

### **Schedule Section**
- **Assignment management** (Launchpad feature)
- **Due date tracking**
- **Priority levels** (High, Medium, Low)
- **Status tracking** (Pending, In Progress, Completed)
- **Weekly roadmap** visualization

### **Games Section**
- **Space Quest Game** - Interactive educational game
- **Level-based progression**
- **XP and achievement system**
- **Subject-based questions**

### **Lessons**
- **Grade-specific content** (6th-12th grade)
- **Subject-organized lessons**
- **Interactive lesson modals**
- **Progress tracking**
- **Completion certificates**

---

## 🎨 Design & Technology

### **Design Philosophy**
- **Space/Galaxy Theme** - Immersive cosmic aesthetic
- **Modern UI/UX** - Clean, intuitive interface
- **Responsive Design** - Works on desktop, tablet, and mobile
- **Accessibility** - Clear navigation and readable content

### **Technologies Used**
- **HTML5** - Semantic markup
- **CSS3** - Modern styling with gradients and animations
- **JavaScript** - Interactive functionality
- **Tailwind CSS** - Utility-first CSS framework
- **LocalStorage** - Client-side data persistence
- **PDFKit** - PDF generation for study materials

### **Browser Compatibility**
- ✅ Chrome/Edge (Recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Mobile browsers

---

## 📋 For FBLA Judges - Evaluation Guide

### **What to Evaluate:**

1. **Design & Aesthetics**
   - Space theme consistency
   - Color scheme and gradients
   - Visual appeal and animations
   - Responsive layout

2. **Functionality**
   - User authentication system
   - Interactive features (games, quizzes, flashcards)
   - Progress tracking
   - Resource downloads

3. **User Experience**
   - Navigation ease
   - Intuitive interface
   - Mobile responsiveness
   - Loading performance

4. **Content & Features**
   - Educational value
   - Grade-level appropriateness
   - Subject coverage
   - Interactive elements

### **Recommended Testing Flow:**

1. **Start at Homepage** - Review design and layout
2. **Sign In** - Test authentication (use Guest Mode for quick access)
3. **Explore Dashboard** - Check progress tracking
4. **Visit Resources** - Download PDFs, try flashcards/quizzes
5. **Check Schedule** - Review assignment management
6. **Play Games** - Test interactive game features
7. **Take a Lesson** - Experience lesson content
8. **Test Mobile View** - Resize browser or use mobile device

### **Important Notes:**

- **Video Section**: Contains a disclaimer - videos are for demo purposes only due to copyright restrictions
- **Guest Mode**: Available for quick access without account creation
- **Data Persistence**: Uses browser LocalStorage (data persists per browser/device)
- **PDF Downloads**: All 8 study guide PDFs are functional and downloadable

---

## 🔧 Technical Details

### **File Structure**
```
AstroLearnFBLA/
├── index.html              # Homepage
├── dashboard.html          # User dashboard
├── resources.html          # Resources hub
├── schedule.html           # Schedule/assignments
├── game.html              # Interactive games
├── flashcards.html        # Flashcard system
├── quizzes.html           # Quiz system
├── videos.html            # Video library
├── login.html             # Authentication
├── script.js              # Main JavaScript
├── styles.css             # Main stylesheet
├── assets/
│   ├── pdfs/             # PDF study guides
│   └── videos/           # Video files (placeholder)
└── README.md              # This file
```

### **Authentication System**
- Email/password registration
- Guest mode option
- Session persistence via LocalStorage
- Protected route handling

### **Data Storage**
- Browser LocalStorage for:
  - User preferences (grade, subjects)
  - Completed lessons
  - Assignment data
  - Game progress
  - User authentication state

---


---



---


---

**Thank you for evaluating AstroLearn! We hope you enjoy exploring our space-themed educational platform.**

*Last Updated: January 2025*

