// DOM Elements
const themeToggle = document.getElementById('theme-toggle');
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const modal = document.getElementById('faculty-modal');
const closeModal = document.querySelector('.close');
const supportForm = document.getElementById('support-form');

// Theme Management
let currentTheme = localStorage.getItem('theme') || 'light';

// Initialize theme
function initTheme() {
    document.documentElement.setAttribute('data-theme', currentTheme);
    updateThemeIcon();
}

// Toggle theme
function toggleTheme() {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
    localStorage.setItem('theme', currentTheme);
    updateThemeIcon();
}

// Update theme icon
function updateThemeIcon() {
    const icon = themeToggle.querySelector('i');
    if (currentTheme === 'dark') {
        icon.className = 'fas fa-sun';
    } else {
        icon.className = 'fas fa-moon';
    }
}

// Mobile Navigation Toggle
function toggleMobileNav() {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
}

// Close mobile nav when clicking on a link
function closeMobileNav() {
    navMenu.classList.remove('active');
    navToggle.classList.remove('active');
}

// Faculty Modal Management
const facultyData = {
    computers: {
        title: 'Faculty of Computers and Artificial Intelligence',
        overview: {
            study: 'Comprehensive curriculum covering computer science fundamentals, artificial intelligence, machine learning, data science, software engineering, and emerging technologies.',
            teaching: 'Modern credit hour system with hands-on projects, industry partnerships, and state-of-the-art laboratories. Blended learning approach combining theoretical knowledge with practical applications.'
        },
        programs: [
            { name: 'Computer Science', duration: '4 years', description: 'Core computer science principles and programming' },
            { name: 'Artificial Intelligence', duration: '4 years', description: 'AI, machine learning, and intelligent systems' },
            { name: 'Software Engineering', duration: '4 years', description: 'Software development and project management' },
            { name: 'Data Science', duration: '4 years', description: 'Big data analytics and statistical modeling' }
        ],
        vision: 'To be a leading institution in computer science and AI education, fostering innovation and preparing students for the digital future.',
        objectives: [
            'Develop cutting-edge AI and computing technologies',
            'Foster innovation and entrepreneurship',
            'Build strong industry partnerships',
            'Contribute to digital transformation'
        ]
    },
    engineering: {
        title: 'Faculty of Engineering',
        overview: {
            study: 'Comprehensive engineering education covering mechanical, electrical, civil, and chemical engineering with focus on sustainable development and innovation.',
            teaching: 'Project-based learning with modern laboratories, industry internships, and research opportunities. Emphasis on practical skills and real-world applications.'
        },
        programs: [
            { name: 'Mechanical Engineering', duration: '4 years', description: 'Design and manufacturing systems' },
            { name: 'Electrical Engineering', duration: '4 years', description: 'Power systems and electronics' },
            { name: 'Civil Engineering', duration: '4 years', description: 'Infrastructure and construction' },
            { name: 'Chemical Engineering', duration: '4 years', description: 'Process design and optimization' }
        ],
        vision: 'To produce innovative engineers who contribute to sustainable development and technological advancement.',
        objectives: [
            'Develop sustainable engineering solutions',
            'Foster innovation and research',
            'Build industry partnerships',
            'Contribute to infrastructure development'
        ]
    },
    medicine: {
        title: 'Faculty of Medicine',
        overview: {
            study: 'Comprehensive medical education covering human anatomy, physiology, pathology, clinical skills, and patient care with emphasis on evidence-based medicine.',
            teaching: 'Integrated curriculum with early clinical exposure, simulation training, and research opportunities. Focus on patient-centered care and medical ethics.'
        },
        programs: [
            { name: 'General Medicine', duration: '6 years', description: 'Comprehensive medical training' },
            { name: 'Surgery', duration: '6 years', description: 'Surgical procedures and techniques' },
            { name: 'Pediatrics', duration: '6 years', description: 'Child healthcare and development' },
            { name: 'Internal Medicine', duration: '6 years', description: 'Adult medical care' }
        ],
        vision: 'To train compassionate and competent healthcare professionals who advance medical knowledge and improve patient outcomes.',
        objectives: [
            'Provide excellent patient care',
            'Advance medical research',
            'Promote public health',
            'Foster medical innovation'
        ]
    },
    business: {
        title: 'Faculty of Business Administration',
        overview: {
            study: 'Comprehensive business education covering management, marketing, finance, accounting, and entrepreneurship with focus on global business practices.',
            teaching: 'Case study methodology, experiential learning, and industry projects. Emphasis on leadership development and strategic thinking.'
        },
        programs: [
            { name: 'Business Administration', duration: '4 years', description: 'General business management' },
            { name: 'Marketing', duration: '4 years', description: 'Marketing strategies and consumer behavior' },
            { name: 'Finance', duration: '4 years', description: 'Financial management and investment' },
            { name: 'Accounting', duration: '4 years', description: 'Financial reporting and auditing' }
        ],
        vision: 'To develop business leaders who drive innovation, create value, and contribute to economic growth.',
        objectives: [
            'Develop business leadership skills',
            'Foster entrepreneurship',
            'Build global business networks',
            'Contribute to economic development'
        ]
    },
    arts: {
        title: 'Faculty of Arts',
        overview: {
            study: 'Comprehensive arts education covering literature, languages, history, philosophy, and creative arts with emphasis on cultural understanding and expression.',
            teaching: 'Creative workshops, cultural events, and interdisciplinary projects. Focus on critical thinking and artistic expression.'
        },
        programs: [
            { name: 'English Literature', duration: '4 years', description: 'Literary analysis and creative writing' },
            { name: 'Arabic Literature', duration: '4 years', description: 'Arabic language and literature' },
            { name: 'History', duration: '4 years', description: 'Historical research and analysis' },
            { name: 'Philosophy', duration: '4 years', description: 'Critical thinking and ethics' }
        ],
        vision: 'To foster cultural understanding, creative expression, and intellectual growth through arts and humanities education.',
        objectives: [
            'Promote cultural understanding',
            'Foster creative expression',
            'Develop critical thinking',
            'Preserve cultural heritage'
        ]
    },
    science: {
        title: 'Faculty of Science',
        overview: {
            study: 'Comprehensive science education covering physics, chemistry, biology, mathematics, and environmental science with focus on research and discovery.',
            teaching: 'Laboratory-based learning, research projects, and scientific inquiry. Emphasis on experimental design and data analysis.'
        },
        programs: [
            { name: 'Physics', duration: '4 years', description: 'Physical sciences and research' },
            { name: 'Chemistry', duration: '4 years', description: 'Chemical processes and analysis' },
            { name: 'Biology', duration: '4 years', description: 'Life sciences and research' },
            { name: 'Mathematics', duration: '4 years', description: 'Mathematical theory and applications' }
        ],
        vision: 'To advance scientific knowledge through research, discovery, and innovation while preparing students for scientific careers.',
        objectives: [
            'Advance scientific research',
            'Foster scientific discovery',
            'Develop analytical skills',
            'Contribute to scientific knowledge'
        ]
    }
};

// Open faculty modal
function openFacultyModal(facultyType) {
    const faculty = facultyData[facultyType];
    if (!faculty) return;

    // Update modal content
    document.getElementById('modal-faculty-title').textContent = faculty.title;
    
    // Update overview tab
    const overviewPane = document.getElementById('overview');
    overviewPane.innerHTML = `
        <h3>What You Will Study</h3>
        <p>${faculty.overview.study}</p>
        <h3>Teaching System</h3>
        <p>${faculty.overview.teaching}</p>
    `;

    // Update programs tab
    const programsPane = document.getElementById('programs');
    programsPane.innerHTML = `
        <h3>Available Programs</h3>
        <div class="programs-list">
            ${faculty.programs.map(program => `
                <div class="program-item">
                    <h4>${program.name}</h4>
                    <p><strong>Duration:</strong> ${program.duration}</p>
                    <p>${program.description}</p>
                </div>
            `).join('')}
        </div>
    `;

    // Update vision tab
    const visionPane = document.getElementById('vision');
    visionPane.innerHTML = `
        <h3>Our Vision</h3>
        <p>${faculty.vision}</p>
        <h3>Objectives</h3>
        <ul>
            ${faculty.objectives.map(objective => `<li>${objective}</li>`).join('')}
        </ul>
    `;

    // Show modal
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Close modal
function closeFacultyModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Tab functionality
function switchTab(tabName) {
    // Remove active class from all tabs and panes
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.tab-pane').forEach(pane => pane.classList.remove('active'));
    
    // Add active class to selected tab and pane
    document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');
    document.getElementById(tabName).classList.add('active');
}

// Faculty slideshow
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function nextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}

// Auto-advance slideshow
setInterval(nextSlide, 5000);

// Form handling
function handleSupportForm(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    
    // Show loading state
    const submitBtn = event.target.querySelector('.submit-btn');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<div class="loading"></div> Sending...';
    submitBtn.disabled = true;
    
    // Simulate form submission (Phase 1 - frontend only)
    setTimeout(() => {
        // Show success message
        showMessage('Thank you for your message! We will get back to you soon.', 'success');
        
        // Reset form
        event.target.reset();
        
        // Reset button
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
    }, 2000);
}

// Show message
function showMessage(text, type) {
    // Remove existing messages
    const existingMessage = document.querySelector('.message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    // Create new message
    const message = document.createElement('div');
    message.className = `message ${type}`;
    message.textContent = text;
    message.style.display = 'block';
    
    // Insert before form
    const form = document.getElementById('support-form');
    form.parentNode.insertBefore(message, form);
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
        message.remove();
    }, 5000);
}

// Scroll to top functionality
function createScrollToTop() {
    const scrollTop = document.createElement('div');
    scrollTop.className = 'scroll-top';
    scrollTop.innerHTML = '<i class="fas fa-arrow-up"></i>';
    document.body.appendChild(scrollTop);
    
    // Show/hide based on scroll position
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollTop.classList.add('visible');
        } else {
            scrollTop.classList.remove('visible');
        }
    });
    
    // Scroll to top on click
    scrollTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Smooth scrolling for navigation links
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                closeMobileNav();
            }
        });
    });
}

// Intersection Observer for animations
function initAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    document.querySelectorAll('.faculty-card, .activity-card, .leader-card, .vp-card').forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
}

// Active navigation highlighting
function initActiveNavigation() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// Gallery thumbnail functionality
function initGalleryThumbnails() {
    document.querySelectorAll('.thumbnail').forEach(thumb => {
        thumb.addEventListener('click', function() {
            // Remove active class from all thumbnails
            document.querySelectorAll('.thumbnail').forEach(t => t.classList.remove('active'));
            
            // Add active class to clicked thumbnail
            this.classList.add('active');
            
            // Update main image (in a real implementation, this would change the main image)
            const mainImage = document.getElementById('modal-main-image');
            if (mainImage) {
                mainImage.src = this.src;
            }
        });
    });
}

// Event Listeners
document.addEventListener('DOMContentLoaded', function() {
    // Initialize theme
    initTheme();
    
    // Create scroll to top button
    createScrollToTop();
    
    // Initialize smooth scrolling
    initSmoothScrolling();
    
    // Initialize animations
    initAnimations();
    
    // Initialize active navigation
    initActiveNavigation();
    
    // Initialize gallery thumbnails
    initGalleryThumbnails();
    
    // Theme toggle
    themeToggle.addEventListener('click', toggleTheme);
    
    // Mobile navigation
    navToggle.addEventListener('click', toggleMobileNav);
    
    // Close mobile nav on link click
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', closeMobileNav);
    });
    
    // Modal functionality
    closeModal.addEventListener('click', closeFacultyModal);
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeFacultyModal();
        }
    });
    
    // Tab functionality
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            switchTab(btn.getAttribute('data-tab'));
        });
    });
    
    // Form submission
    supportForm.addEventListener('submit', handleSupportForm);
    
    // Keyboard navigation for modal
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && modal.style.display === 'block') {
            closeFacultyModal();
        }
    });
});

// Window resize handler
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        closeMobileNav();
    }
});

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debouncing to scroll events
const debouncedScrollHandler = debounce(() => {
    // Scroll-based animations and effects can be added here
}, 10);

window.addEventListener('scroll', debouncedScrollHandler);

// Export functions for global access (if needed)
window.openFacultyModal = openFacultyModal;
window.closeFacultyModal = closeFacultyModal;
window.switchTab = switchTab;