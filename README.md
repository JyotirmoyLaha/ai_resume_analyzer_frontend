# 🚀 AI Resume Analyzer & Skill Gap Finder

A modern, AI-powered web application that analyzes resumes, extracts relevant skills, identifies skill gaps for a selected career role, and provides actionable career recommendations — all through a clean, intuitive interface.

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
- **Tailwind CSS**
- **Vanilla JavaScript**
- **Lucide Icons**
- Dark / Light theme support

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

Response
---
```
{
  "match_percentage": 72,<p>
  "rating": "Good ⭐⭐⭐",<p>
  "matched_skills": [...],<p>
  "missing_skills": [...],<p>
  "recommendations": [...],<p>
  "learning_resources": {...}<p>
}
```

### 🎯 Supported Roles
--- 

Frontend Developer

Backend Developer

Full Stack Developer

Data Scientist

DevOps Engineer


### 🔮 Future Improvements
---

📊 Skill radar charts

📄 Resume preview panel

🔐 User authentication



### 👨‍💻 Author
---

Jyotirmoy Laha
BCA Student | Aspiring Software Engineer
---

🌐 AI Resume Analyzer: https://ai-resume-analyzer-hhhb.onrender.com

💼 GitHub: https://github.com/JyotirmoyLaha

