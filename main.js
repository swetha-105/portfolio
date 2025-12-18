import { projects, experience, education, skills, contact } from './constants.js';

// --- DOM Elements ---
const projectsContainer = document.getElementById('projects-container');
const experienceContainer = document.getElementById('experience-container');
const educationContainer = document.getElementById('education-container');
const skillsContainer = document.getElementById('skills-container');
const contactContainer = document.getElementById('contact-container');
const loader = document.getElementById('loader');
const typingElement = document.getElementById('typing-text');
const navLinks = document.querySelectorAll('.nav-links a');

// --- Initialization ---
window.onload = () => {
    // Hide Loader
    setTimeout(() => {
        if (loader) {
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.style.display = 'none';
            }, 500);
        }
    }, 1000);

    // Initial Render
    if (projectsContainer) renderProjects();
    if (experienceContainer) renderExperience();
    if (educationContainer) renderEducation();
    if (skillsContainer) renderSkills();
    if (contactContainer) renderContact();

    // Start Typing Effect
    if (typingElement) typeWriter();

    // Start Observers
    setupObserver();
};

// --- Rendering Functions ---
function renderProjects() {
    projectsContainer.innerHTML = projects.map(project => `
        <div class="project-card">
            <img src="${project.image}" alt="${project.title}" class="project-img">
            <div class="project-info">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="tags">
                    ${project.tech.map(tech => `<span class="tag">${tech}</span>`).join('')}
                </div>
                <br>
                <a href="${project.link}" target="_blank" style="color:var(--accent); text-decoration:none">View Project &rarr;</a>
            </div>
        </div>
    `).join('');
}

function renderExperience() {
    experienceContainer.innerHTML = experience.map(item => `
        <div class="project-card">
            <div class="project-info">
                <h3 style="color:var(--accent);">${item.role}</h3>
                <h4 style="color:#fff; margin-bottom:0.5rem">${item.company}</h4>
                <span style="color:var(--text-muted); font-size:0.9rem; display:block; margin-bottom:1rem">${item.duration}</span>
                <p>${item.description}</p>
            </div>
        </div>
    `).join('');
}

function renderEducation() {
    educationContainer.innerHTML = education.map(item => `
        <div class="project-card">
            <div class="project-info">
                <h3 style="color:var(--accent);">${item.role}</h3>
                <h4 style="color:#fff; margin-bottom:0.5rem">${item.company}</h4>
                <span style="color:var(--text-muted); font-size:0.9rem; display:block; margin-bottom:1rem">${item.duration}</span>
                <p>${item.description}</p>
            </div>
        </div>
    `).join('');
}

function renderSkills() {
    skillsContainer.innerHTML = skills.map(skill => `
        <div class="skill-item">
            <span class="skill-icon">${skill.icon}</span>
            <span>${skill.name}</span>
        </div>
    `).join('');
}

function renderContact() {
    const contactHTML = `
        <div class="contact-wrapper" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; text-align: left;">
            
            <!-- Left Column: Contact Details -->
            <div class="contact-details" style="display: flex; flex-direction: column; gap: 1.5rem;">
                
                <div class="contact-card" style="display: flex; align-items: center; gap: 1rem; padding: 1.5rem; background: var(--glass); border: 1px solid var(--glass-border); border-radius: 12px;">
                    <div class="icon-box" style="background: var(--accent); width: 50px; height: 50px; border-radius: 12px; display: flex; align-items: center; justify-content: center; color: white; font-size: 1.5rem;">
                        <i class="fas fa-envelope"></i>
                    </div>
                    <div>
                        <h4 style="color: var(--text-muted); font-size: 0.9rem; margin-bottom: 0.2rem;">Email</h4>
                        <a href="mailto:${contact.email}" style="color: white; text-decoration: none; font-weight: 500;">${contact.email}</a>
                    </div>
                </div>

                <div class="contact-card" style="display: flex; align-items: center; gap: 1rem; padding: 1.5rem; background: var(--glass); border: 1px solid var(--glass-border); border-radius: 12px;">
                    <div class="icon-box" style="background: var(--accent); width: 50px; height: 50px; border-radius: 12px; display: flex; align-items: center; justify-content: center; color: white; font-size: 1.5rem;">
                        <i class="fas fa-phone"></i>
                    </div>
                    <div>
                        <h4 style="color: var(--text-muted); font-size: 0.9rem; margin-bottom: 0.2rem;">Phone</h4>
                        <a href="tel:${contact.phone.replace(/\s+/g, '')}" style="color: white; text-decoration: none; font-weight: 500;">${contact.phone}</a>
                    </div>
                </div>

                <div class="contact-card" style="display: flex; align-items: center; gap: 1rem; padding: 1.5rem; background: var(--glass); border: 1px solid var(--glass-border); border-radius: 12px;">
                    <div class="icon-box" style="background: var(--accent); width: 50px; height: 50px; border-radius: 12px; display: flex; align-items: center; justify-content: center; color: white; font-size: 1.5rem;">
                        <i class="fab fa-linkedin"></i>
                    </div>
                    <div>
                        <h4 style="color: var(--text-muted); font-size: 0.9rem; margin-bottom: 0.2rem;">LinkedIn</h4>
                        <a href="${contact.linkedin}" target="_blank" style="color: white; text-decoration: none; font-weight: 500;">Swetha Kotala</a>
                    </div>
                </div>

                <div class="contact-card" style="display: flex; align-items: center; gap: 1rem; padding: 1.5rem; background: var(--glass); border: 1px solid var(--glass-border); border-radius: 12px;">
                    <div class="icon-box" style="background: var(--accent); width: 50px; height: 50px; border-radius: 12px; display: flex; align-items: center; justify-content: center; color: white; font-size: 1.5rem;">
                        <i class="fab fa-github"></i>
                    </div>
                    <div>
                        <h4 style="color: var(--text-muted); font-size: 0.9rem; margin-bottom: 0.2rem;">GitHub</h4>
                        <a href="${contact.github}" target="_blank" style="color: white; text-decoration: none; font-weight: 500;">swetha-105</a>
                    </div>
                </div>

            </div>

            <!-- Right Column: Form -->
            <div class="contact-form" style="background: rgba(43, 16, 86, 0.5); padding: 2rem; border-radius: 16px; border: 1px solid rgba(167, 139, 250, 0.2); box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);">
                <form onsubmit="sendEmail(event)">
                    <div style="margin-bottom: 1.5rem;">
                        <label style="display: block; color: #fff; margin-bottom: 0.5rem; font-weight: 500;">Your Name *</label>
                        <input type="text" id="senderName" placeholder="John Doe" required style="width: 100%; padding: 12px; background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; color: white; outline: none; transition: all 0.3s;">
                    </div>
                    <div style="margin-bottom: 1.5rem;">
                        <label style="display: block; color: #fff; margin-bottom: 0.5rem; font-weight: 500;">Your Email *</label>
                        <input type="email" id="senderEmail" placeholder="john@example.com" required style="width: 100%; padding: 12px; background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; color: white; outline: none; transition: all 0.3s;">
                    </div>
                    <div style="margin-bottom: 1.5rem;">
                        <label style="display: block; color: #fff; margin-bottom: 0.5rem; font-weight: 500;">Your Message *</label>
                        <textarea id="senderMessage" placeholder="Hello, I'd like to talk about..." rows="4" required style="width: 100%; padding: 12px; background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; color: white; outline: none; resize: vertical; transition: all 0.3s;"></textarea>
                    </div>
                    <button type="submit" class="btn" style="width: 100%; cursor: pointer; background: var(--accent); border: none; font-weight: 600;">Send Message <i class="fas fa-paper-plane" style="margin-left: 8px;"></i></button>
                </form>
            </div>

        </div>
    `;
    contactContainer.innerHTML = contactHTML;
}

window.sendEmail = function (e) {
    e.preventDefault();
    const name = document.getElementById('senderName').value;
    const email = document.getElementById('senderEmail').value;
    const message = document.getElementById('senderMessage').value;

    const subject = `Portfolio Contact from ${name}`;
    const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${message}`;

    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
};

// --- Typing Effect ---
const textArray = ["Full Stack Java Developer", "Frontend Developer", "Web Developer"];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeWriter() {
    const currentText = textArray[textIndex];
    let typeSpeed = 100;

    if (isDeleting) {
        typingElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
        typeSpeed = 50;
    } else {
        typingElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
    }

    if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
        typeSpeed = 2000; // Pause at end
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % textArray.length;
        typeSpeed = 500;
    }

    setTimeout(typeWriter, typeSpeed);
}

// --- Scroll Observer for Animations ---
function setupObserver() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

    // Active Link Highlighting
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('section, header').forEach(el => sectionObserver.observe(el));
}
