# 🚀 AI Resume Analyzer & Skill Gap Finder

A modern, AI-powered web application that analyzes resumes, extracts relevant skills, identifies skill gaps for a selected career role, and provides actionable career recommendations — all through a **stunning, premium interface** with glassmorphism and smooth animations.

Built with **Python (FastAPI)** on the backend and a **TailwindCSS-based frontend**, this project focuses on **real-world resume analysis logic**, not hype-driven AI buzzwords.

---

## ✨ Key Features

- 📄 **PDF Resume Upload**
- 🎯 **Role-Based Skill Analysis**
- 🧠 **Rule-Based AI (NLP + Regex)**
- 📊 **Match Score & Skill Gap Metrics**
- 🚨 **Priority-Based Recommendations**
- 📚 **Learning Resources for Missing Skills**
- 🌗 **Dark / Light Mode Toggle**
- ⚡ **Modern, Responsive UI**
- 🎨 **Glassmorphism Cards** with frosted-glass blur
- ✨ **Animated Gradient Background** with floating orbs
- 🎬 **Staggered Entrance Animations** on page load
- 🔢 **Animated Stat Counters** in results dashboard
- 💫 **Micro-Interactions** — hover lifts, glow effects, shimmer buttons
- 🔒 **Privacy-Friendly (No data stored)**

---

## 🧠 How It Works

1. User uploads a **PDF resume**
2. Selects a **target career role**
3. Backend:
   - Extracts text from resume
   - Identifies skills using regex-based NLP
   - Compares skills against role requirements
   - Calculates match percentage
   - Generates recommendations & learning links
4. Frontend displays:
   - Match score
   - Matched vs missing skills
   - Career feedback
   - Next learning steps

---

## 🏗️ Tech Stack

### 🔙 Backend
- **Python**
- **FastAPI**
- **pdfplumber**
- **Regex-based NLP**
- Modular skill analysis engine

### 🎨 Frontend
- **HTML5**
- **Tailwind CSS (CDN)**
- **Vanilla JavaScript**
- **Lucide Icons**
- **Custom CSS Animations** (gradient mesh, floating orbs, staggered reveals)
- **Glassmorphism Design System** (`backdrop-filter: blur`)
- Dark / Light theme with `localStorage` persistence

---

## 🎨 UI Design Highlights

| Feature | Description |
|---|---|
| **Animated Mesh Background** | Slow-shifting gradient with 3 floating colored orbs for depth |
| **Glassmorphism Cards** | Semi-transparent cards with `backdrop-filter: blur(20px)` and border glow on hover |
| **Staggered Animations** | Elements fade in sequentially with `slideUp` and delay classes |
| **Gradient Text** | Accent words use a vibrant `indigo → purple → pink` gradient |
| **Shimmer Button** | Diagonal light sweep on hover + elevated glow shadow |
| **Logo Pulse** | Breathing glow ring on the logo icon |
| **Animated Counters** | Stat numbers count up from 0 to final value over 1.2s |
| **Progress Steps** | Loading screen shows Uploading → Parsing → Analyzing stages |
| **Social Icon Hover** | Expanding circle background on social link hover |
| **Premium Dark Mode** | Deep-space gradients, dimmed orbs, matching glass effects |

---

## ▶️ Running the Project Locally

### 1️⃣ Backend Setup

```bash
cd backend
pip install -r requirements.txt
uvicorn app:app --reload

Backend will run at:

http://127.0.0.1:8000

API Docs:

http://127.0.0.1:8000/docs

```
### 2️⃣ Frontend Setup


Simply open:
```
frontend/index.html
```
 Make sure the backend is running before clicking Analyze Resume
---
### 📊 API Endpoint
```
POST /analyze

Form Data

resume → PDF file

role → target role (frontend, backend, fullstack, data_science, devops)

include_resources → true / false
```

**Response:**

```json
{
  "match_percentage": 72,
  "rating": "Good ⭐⭐⭐",
  "matched_skills": ["Python", "Django", ...],
  "missing_skills": ["Docker", "Kubernetes", ...],
  "recommendations": ["Learn containerization with Docker", ...],
  "learning_resources": { "Docker": "https://...", ... }
}
```

### 🎯 Supported Roles

- Frontend Developer
- Backend Developer
- Full Stack Developer
- Data Scientist
- DevOps Engineer


### 🔮 Future Improvements

- 📊 Skill radar charts
- 📄 Resume preview panel
- 🔐 User authentication
- 📱 Mobile-optimized layout



### 👨‍💻 Author

**Jyotirmoy Laha**
BCA Student | Aspiring Software Engineer

🌐 **Live Demo:** [AI Resume Analyzer](https://ai-resume-analyzer-hhhb.onrender.com)

💼 **GitHub:** [JyotirmoyLaha](https://github.com/JyotirmoyLaha)
