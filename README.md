# 🚀 AI Resume Analyzer & Skill Gap Finder

A modern, AI-powered web application that analyzes resumes, extracts relevant skills, identifies skill gaps for a selected career role, and provides actionable career recommendations — all through a **stunning, premium dark-mode interface** with glassmorphism, floating gradient orbs, and smooth animations.

Built with **Python (FastAPI)** on the backend and a **TailwindCSS + custom CSS** frontend, this project focuses on **real-world resume analysis logic**, not hype-driven AI buzzwords.

---

## ✨ Key Features

- 📄 **PDF Resume Upload** — drag-and-drop or click to browse
- 🎯 **Role-Based Skill Analysis** — select your target career role
- 🧠 **Rule-Based AI (NLP + Regex)** — no external AI API needed
- 📊 **Match Score & Skill Gap Metrics** — animated stat counters
- 🚨 **Priority-Based Recommendations** — actionable next steps
- 📚 **Learning Resources for Missing Skills** — curated links
- ⚡ **Fully Responsive UI** — mobile-optimized with hamburger nav
- 🎨 **Glassmorphism Cards** — frosted-glass blur with border glow
- ✨ **Animated Gradient Background** — floating orbs & grid pattern
- 🎬 **Staggered Entrance Animations** — sequential slide-up reveals
- 💫 **Micro-Interactions** — hover lifts, shimmer buttons, social icon effects
- 🔒 **Privacy-Friendly** — no data stored on server

---

## 📂 Project Structure

```
Frontend/
├── index.html      # HTML structure & layout (semantic markup only)
├── styles.css      # All custom CSS — animations, glassmorphism, responsive
├── script.js       # All application logic — upload, API calls, rendering
└── README.md       # This file
```

> **Note:** The frontend was originally a single `index.html` with inline `<style>` and `<script>` blocks. The code has been separated into dedicated files for better maintainability, without changing any logic or visuals.

---

## 🧠 How It Works

1. User uploads a **PDF resume** (drag-and-drop or click)
2. Selects a **target career role** from the dropdown
3. Backend processes the resume:
   - Extracts text using `pdfplumber`
   - Identifies skills with regex-based NLP
   - Compares skills against role requirements
   - Calculates match percentage
   - Generates recommendations & learning links
4. Frontend displays:
   - Animated match score, matched/missing skill counts
   - Matched vs. missing skills as colour-coded tags
   - Expert feedback & career rating
   - Next steps checklist
   - Learning path resources

---

## 🏗️ Tech Stack

### 🔙 Backend
| Technology | Purpose |
|---|---|
| **Python** | Core language |
| **FastAPI** | REST API framework |
| **pdfplumber** | PDF text extraction |
| **Regex NLP** | Skill pattern matching |

### 🎨 Frontend
| Technology | Purpose |
|---|---|
| **HTML5** | Semantic page structure (`index.html`) |
| **Tailwind CSS (CDN)** | Utility-first styling framework |
| **Custom CSS** | Glassmorphism, animations, responsive (`styles.css`) |
| **Vanilla JavaScript** | Application logic & API integration (`script.js`) |
| **Lucide Icons** | Icon library (CDN) |
| **Google Fonts** | Inter & Plus Jakarta Sans typography |

---

## 🎨 UI Design Highlights

| Feature | Description |
|---|---|
| **Animated Mesh Background** | Slow-shifting gradient with 4 floating coloured orbs |
| **Glassmorphism Cards** | `backdrop-filter: blur(20px)` + border glow on hover |
| **Staggered Animations** | Elements fade in with `slideUp` + delay classes |
| **Gradient Text** | Accent words use `indigo → purple → cyan` gradient |
| **Shimmer Button** | Diagonal light sweep on hover + elevated glow |
| **Logo Pulse** | Breathing glow ring on the brand icon |
| **Animated Counters** | Stats count up from 0 over 1.2s |
| **Progress Steps** | Loading shows Uploading → Parsing → Analyzing |
| **Hero Orbital Graphic** | Spinning rings with floating mini-cards |
| **Social Icon Hover** | Expanding circle background on hover |

---

## ▶️ Running the Project Locally

### 1️⃣ Backend Setup

```bash
cd backend
pip install -r requirements.txt
uvicorn app:app --reload
```

- **Server:** http://127.0.0.1:8000
- **API Docs:** http://127.0.0.1:8000/docs

### 2️⃣ Frontend Setup

Simply open `index.html` in your browser (double-click or use a live server extension).

> Make sure the backend is running before clicking **Analyze Resume**.

---

## 📊 API Endpoint

```
POST /analyze
```

**Form Data:**

| Field | Type | Description |
|---|---|---|
| `resume` | File (PDF) | The resume to analyze |
| `role` | String | Target role (`frontend`, `backend`, `fullstack`, `data_science`, `devops`) |
| `include_resources` | Boolean | Whether to return learning resource links |

**Response:**

```json
{
  "match_percentage": 72,
  "rating": "Good ⭐⭐⭐",
  "matched_skills": ["Python", "Django"],
  "missing_skills": ["Docker", "Kubernetes"],
  "recommendations": ["Learn containerization with Docker"],
  "learning_resources": { "Docker": "https://..." }
}
```

---

## 🎯 Supported Roles

- Frontend Developer
- Backend Developer
- Full Stack Developer
- Data Scientist
- DevOps Engineer

---

## 🔮 Future Improvements

- 📊 Skill radar charts
- 📄 Resume preview panel
- 🔐 User authentication
- 📱 Progressive Web App (PWA) support

---

## 👨‍💻 Author

**Jyotirmoy Laha**
BCA Student | Aspiring Software Engineer

🌐 **Live Demo:** [AI Resume Analyzer](https://ai-resume-analyzer-hhhb.onrender.com)

💼 **GitHub:** [JyotirmoyLaha](https://github.com/JyotirmoyLaha)
