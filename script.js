// State Management
let selectedFile = null;
const API_BASE_URL = window.location.hostname === "localhost"
    ? "http://127.0.0.1:5000"
    : "https://ai-resume-analyzer-96fr.onrender.com";

// Theme Management
const themeToggle = document.getElementById("theme-toggle");
const htmlElement = document.documentElement;
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark" || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    htmlElement.classList.add("dark");
}

lucide.createIcons();

// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('open');
    });
}
function closeMobileMenu() {
    if (mobileMenu) mobileMenu.classList.remove('open');
}

themeToggle.addEventListener("click", () => {
    htmlElement.classList.toggle("dark");
    localStorage.setItem("theme", htmlElement.classList.contains("dark") ? "dark" : "light");
});

// DOM Elements
const dropZone = document.getElementById('drop-zone');
const fileInput = document.getElementById('resume-upload');
const fileNameDisplay = document.getElementById('file-name-display');
const fileSizeDisplay = document.getElementById('file-size-display');
const uploadIconContainer = document.getElementById('upload-icon-container');
const analyzeBtn = document.getElementById('analyze-btn');
const errorDiv = document.getElementById('error-message');
const errorText = document.getElementById('error-text');
const roleSelect = document.getElementById('role-select');

const heroSection = document.getElementById('hero-section');
const inputSection = document.getElementById('input-section');
const loader = document.getElementById('loader');
const resultsDashboard = document.getElementById('results-dashboard');

// Validation: Check if both file and role are present
function validateInput() {
    const hasFile = selectedFile !== null;
    const hasRole = roleSelect.value !== "";
    analyzeBtn.disabled = !(hasFile && hasRole);
}

// Fetch Roles
async function fetchRoles() {
    try {
        const res = await fetch(`${API_BASE_URL}/roles`);
        if (!res.ok) throw new Error();
        const roles = await res.json();

        // Keep the default disabled option and add dynamic ones
        const defaultOption = `<option value="" disabled selected>Select a role</option>`;
        roleSelect.innerHTML = defaultOption + roles.map(r =>
            `<option value="${r}">${r.charAt(0).toUpperCase() + r.slice(1).replace('_', ' ')} Developer</option>`
        ).join('');

        lucide.createIcons();
    } catch (err) {
        console.warn("Backend not reachable. Ensure your server is running.");
    }
}

// Handle Role Change
roleSelect.addEventListener('change', validateInput);

// Handle File Selection
function handleFiles(files) {
    const file = files[0];
    if (file && file.type === 'application/pdf') {
        selectedFile = file;
        fileNameDisplay.textContent = file.name;
        fileSizeDisplay.textContent = `${(file.size / 1024).toFixed(1)} KB`;

        dropZone.classList.add('file-selected');
        uploadIconContainer.classList.add('!bg-indigo-100', 'dark:!bg-indigo-900/30', '!text-indigo-600', 'dark:!text-indigo-400');
        uploadIconContainer.classList.remove('bg-slate-100/80', 'dark:bg-slate-700/50', 'text-slate-400', 'dark:text-slate-500');

        errorDiv.classList.add('hidden');
        validateInput();
    } else {
        showError("Please upload a valid PDF file.");
    }
}

function showError(msg) {
    errorText.textContent = msg;
    errorDiv.classList.remove('hidden');
}

// Drop Zone Listeners
dropZone.addEventListener('click', () => fileInput.click());
fileInput.addEventListener('change', (e) => handleFiles(e.target.files));

dropZone.addEventListener('dragover', (e) => {
    e.preventDefault();
    dropZone.classList.add('file-selected');
});

dropZone.addEventListener('dragleave', () => {
    if (!selectedFile) {
        dropZone.classList.remove('file-selected');
    }
});

dropZone.addEventListener('drop', (e) => {
    e.preventDefault();
    handleFiles(e.dataTransfer.files);
});

// Loading progress steps animation
function animateLoadingSteps() {
    const steps = document.querySelectorAll('.progress-step');
    let current = 0;
    const interval = setInterval(() => {
        if (current < steps.length) {
            steps.forEach((s, i) => {
                if (i <= current) s.classList.add('active');
            });
            current++;
        } else {
            clearInterval(interval);
        }
    }, 1500);
    return interval;
}

// Analyze Logic
let loadingInterval = null;
analyzeBtn.addEventListener('click', async () => {
    if (!selectedFile || !roleSelect.value) return;

    heroSection.classList.add('hidden');
    inputSection.classList.add('hidden');
    loader.classList.remove('hidden');
    errorDiv.classList.add('hidden');

    // Reset progress steps
    document.querySelectorAll('.progress-step').forEach(s => s.classList.remove('active'));
    document.querySelector('.progress-step').classList.add('active');
    loadingInterval = animateLoadingSteps();

    const formData = new FormData();
    formData.append("resume", selectedFile);
    formData.append("role", roleSelect.value);
    formData.append("include_resources", "true");

    try {
        const res = await fetch(`${API_BASE_URL}/analyze`, {
            method: "POST",
            body: formData
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || "Analysis failed");

        renderResults(data);
    } catch (err) {
        if (loadingInterval) clearInterval(loadingInterval);
        loader.classList.add('hidden');
        heroSection.classList.remove('hidden');
        inputSection.classList.remove('hidden');
        showError(err.message + ". Check your backend connection.");
    }
});

function renderResults(data) {
    if (loadingInterval) clearInterval(loadingInterval);
    loader.classList.add('hidden');
    resultsDashboard.classList.remove('hidden');

    // Animate stat counters
    animateCounter('stat-score', data.match_percentage, '%');
    animateCounter('stat-matched', data.total_matched);
    animateCounter('stat-missing', data.total_missing);

    document.getElementById('rating-badge').textContent = data.rating;
    document.getElementById('career-feedback-text').textContent = data.career_feedback;

    const matchedContainer = document.getElementById('matched-skills-container');
    matchedContainer.innerHTML = data.matched_skills.map(s => `
        <span class="skill-tag inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-bold mr-2 mb-2.5 bg-emerald-900/25 text-emerald-400 border border-emerald-700/30 backdrop-blur-sm" style="border-radius:999px; padding:6px 14px;">
            <i data-lucide="check-circle-2" class="mr-1.5 w-3 h-3"></i> ${s}
        </span>
    `).join('') || '<p class="text-[#94A3B8] text-sm italic">No matching skills detected.</p>';

    const missingContainer = document.getElementById('missing-skills-container');
    missingContainer.innerHTML = data.missing_skills.map(s => `
        <span class="skill-tag inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-bold mr-2 mb-2.5 bg-rose-900/25 text-rose-400 border border-rose-700/30 backdrop-blur-sm" style="border-radius:999px; padding:6px 14px;">
            <i data-lucide="x-circle" class="mr-1.5 w-3 h-3"></i> ${s}
        </span>
    `).join('') || '<p class="text-emerald-400 text-sm font-medium">Perfect match!</p>';

    document.getElementById('recommendations-list').innerHTML = data.recommendations.map(rec => `
        <li class="flex items-start space-x-3 text-sm text-indigo-100">
            <div class="mt-0.5 bg-white/15 p-1 rounded-md flex-shrink-0"><i data-lucide="check-circle-2" class="w-3.5 h-3.5 text-white"></i></div>
            <span>${rec}</span>
        </li>
    `).join('');

    const resourcesCard = document.getElementById('resources-card');
    const resourcesContainer = document.getElementById('resources-container');
    if (data.learning_resources && Object.keys(data.learning_resources).length > 0) {
        resourcesCard.classList.remove('hidden');
        resourcesContainer.innerHTML = Object.entries(data.learning_resources).map(([skill, url]) => `
            <a href="${url}" target="_blank" class="resource-link flex items-center justify-between p-3.5 rounded-xl border border-[rgba(255,255,255,0.08)] hover:bg-[rgba(124,58,237,0.06)] group backdrop-blur-sm">
                <span class="font-semibold text-[#E5E7EB] capitalize text-sm">${skill}</span>
                <i data-lucide="arrow-right" class="arrow-icon text-[#475569] group-hover:text-[#A78BFA] w-4 h-4"></i>
            </a>
        `).join('');
    } else {
        resourcesCard.classList.add('hidden');
    }

    lucide.createIcons();
}

// Animated counter
function animateCounter(id, target, suffix = '') {
    const el = document.getElementById(id);
    const num = parseInt(target);
    if (isNaN(num)) { el.textContent = target; return; }
    let current = 0;
    const duration = 1200;
    const step = Math.max(1, Math.floor(num / (duration / 16)));
    const timer = setInterval(() => {
        current += step;
        if (current >= num) {
            current = num;
            clearInterval(timer);
        }
        el.textContent = current + suffix;
    }, 16);
}

fetchRoles();
