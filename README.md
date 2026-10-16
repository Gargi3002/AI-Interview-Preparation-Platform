🎯 InterviewIQ — AI-Powered Mock Interview Platform

> **Practice interviews. Get evaluated. Improve with AI.**

InterviewIQ is a full-stack **AI-powered mock interview platform** designed to simulate realistic technical and HR interviews.

The platform allows candidates to configure an interview, optionally upload their resume for AI-powered analysis, answer dynamically generated questions through **text or voice**, receive AI-based feedback, and view a detailed performance report.

Built using the **MERN stack**, modern browser APIs, and **LLM-powered evaluation**, InterviewIQ focuses on making interview preparation more realistic, interactive, and personalized.

---

## 🚀 Why InterviewIQ?

Traditional interview preparation often provides questions without actually simulating an interview.

InterviewIQ attempts to reproduce the experience of a real interview:

**Resume → Personalized Questions → AI Interview → Answer Evaluation → Performance Report**

Instead of simply practicing questions, candidates can experience a structured interview where questions are generated according to their:

- Target role
- Experience
- Interview type
- Skills
- Projects
- Resume

The system then evaluates every answer across multiple dimensions and provides actionable feedback.

---

# ✨ Key Features

## 🤖 AI-Powered Interview Questions

InterviewIQ uses an LLM to generate **5 personalized interview questions** based on the candidate's profile.

Questions follow a difficulty progression:

```text
Question 1 → Easy
Question 2 → Easy
Question 3 → Medium
Question 4 → Medium
Question 5 → Hard
````

The AI is instructed to generate questions that are:

* Role-specific
* Practical
* Conversational
* Progressive in difficulty
* Relevant to the candidate's projects and skills

---

## 📄 AI Resume Analysis

Candidates can optionally upload a PDF resume.

InterviewIQ:

1. Receives the uploaded PDF
2. Extracts text from every page
3. Sends the extracted resume content to an LLM
4. Extracts structured information
5. Uses the information to personalize the interview

The resume analyzer extracts:

```text
Role
Experience
Projects
Skills
```

This means the interview can be tailored to the actual candidate rather than using a generic question set.

### Resume Processing Pipeline

```text
PDF Resume
     ↓
Multer Upload
     ↓
PDF.js Text Extraction
     ↓
Resume Text
     ↓
LLM
     ↓
Structured Resume Data
     ↓
Personalized Interview
```

---

# 🎙️ Voice Interview

InterviewIQ supports an interactive voice-based interview experience using the browser's **Web Speech API**.

The candidate can:

* Turn the microphone on/off
* Speak answers naturally
* See speech converted into text
* Listen to AI-generated questions
* Hear AI feedback
* Follow the interview through an AI interviewer interface

The platform also uses AI interviewer videos to create a more immersive interview environment.

---

# 🧠 AI Answer Evaluation

Every submitted answer is evaluated by the AI interviewer across three dimensions:

### 1. Confidence

Evaluates whether the answer sounds:

* Clear
* Confident
* Well-presented

### 2. Communication

Evaluates:

* Clarity
* Language
* Structure
* Ease of understanding

### 3. Correctness

Evaluates:

* Accuracy
* Relevance
* Completeness
* Technical correctness

Each category receives a score from:

```text
0 → 10
```

The final question score is calculated as the average of the three dimensions.

```text
Final Score =
(Confidence + Communication + Correctness) / 3
```

The candidate also receives short, natural-language feedback from the AI.

---

# 📊 Performance Report

After completing all five questions, InterviewIQ calculates:

* Overall interview score
* Average confidence
* Average communication
* Average correctness
* Question-wise scores
* Question-wise feedback

This allows candidates to understand not only whether their answer was correct, but also **how effectively they communicated it**.

---

# ⏱️ Timed Interview Experience

Each question has a predefined time limit based on difficulty.

| Difficulty | Time        |
| ---------- | ----------- |
| Easy       | 60 seconds  |
| Medium     | 90 seconds  |
| Hard       | 120 seconds |

If the candidate exceeds the time limit, the answer is automatically handled as a timed-out response.

This makes the interview experience closer to an actual interview environment.

---

# 🔐 Authentication

InterviewIQ includes user authentication with:

* Email/password authentication
* Google authentication
* Protected API routes
* Cookie-based authentication
* User-specific interview data

Authentication middleware verifies the logged-in user before accessing protected resources.


# 🏗️ System Architecture

```text
                    ┌──────────────────────┐
                    │      React Client    │
                    │                      │
                    │  Interview UI        │
                    │  Voice Interface     │
                    │  Resume Upload       │
                    │  Performance Report  │
                    └──────────┬───────────┘
                               │
                               │ REST API
                               ↓
                    ┌──────────────────────┐
                    │    Express Server    │
                    │                      │
                    │  Authentication      │
                    │  Interview APIs      │
                    │  Resume Processing   │
                    │  Answer Evaluation   │
                    └───────┬───────┬──────┘
                            │       │
                 ┌──────────┘       └──────────┐
                 ↓                             ↓
        ┌─────────────────┐          ┌─────────────────┐
        │    MongoDB      │          │   OpenRouter    │
        │                 │          │                 │
        │ Users           │          │ LLM             │
        │ Interviews      │          │ Question Gen.   │
        │ Scores          │          │ Resume Analysis │
        └─────────────────┘          │ Answer Eval.    │
                                     └─────────────────┘

                              
                  Browser Web Speech API
                         ↑          ↓
                    Speech-to-Text
                    Text-to-Speech
```

---

# 🛠️ Tech Stack

## Frontend

* React.js
* Vite
* JavaScript
* Tailwind CSS
* Framer Motion
* Axios
* Redux Toolkit
* React Router
* React Icons
* Web Speech API

## Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT / Cookie Authentication
* Multer
* PDF.js

## AI

* OpenRouter API
* Large Language Models
* Prompt Engineering
* Structured JSON generation
* AI-based answer evaluation

## Authentication

* Firebase Authentication
* Google Authentication

---

# 📁 Project Structure

```text
InterviewIQ/
│
├── client/
│   │
│   ├── public/
│   │
│   └── src/
│       │
│       ├── assets/
│       │   ├── AI interviewer videos
│       │   ├── images
│       │   └── illustrations
│       │
│       ├── components/
│       │   ├── AuthModel.jsx
│       │   ├── Footer.jsx
│       │   ├── Navbar.jsx
│       │   ├── Step1SetUp.jsx
│       │   ├── Step2Interview.jsx
│       │   ├── Step3Report.jsx
│       │   └── Timer.jsx
│       │
│       ├── pages/
│       │   ├── Auth.jsx
│       │   ├── Home.jsx
│       │   ├── InterviewPage.jsx
│       │   ├── InterviewReport.jsx
│       │   └── Pricing.jsx
│       │
│       ├── redux/
│       │   ├── store.js
│       │   └── userSlice.js
│       │
│       ├── utils/
│       │   └── firebase.js
│       │
│       ├── App.jsx
│       ├── App.css
│       ├── index.css
│       └── main.jsx
│
├── server/
│   │
│   ├── config/
│   │   ├── connectDb.js
│   │   └── token.js
│   │
│   ├── controllers/
│   │   ├── auth.controller.js
│   │   ├── interview.controller.js
│   │   └── user.controller.js
│   │
│   ├── middlewares/
│   │   ├── isAuth.js
│   │   └── multer.js
│   │
│   ├── model/
│   │   ├── interview.model.js
│   │   └── userModel.js
│   │
│   ├── routes/
│   │   ├── auth.route.js
│   │   ├── interview.route.js
│   │   └── user.route.js
│   │
│   ├── services/
│   │   └── openRouter.service.js
│   │
│   └── index.js
│
├── .gitignore
└── README.md
```

---

# 🔄 Interview Workflow

The complete interview flow is:

```text
                 User Login
                     │
                     ↓
             Interview Setup
                     │
        ┌────────────┴────────────┐
        │                         │
     Upload Resume            Skip Resume
        │                         │
        ↓                         │
    PDF Analysis                 │
        │                         │
        └────────────┬────────────┘
                     ↓
              Configure Interview
                     │
                     ↓
             Generate Questions
                     │
                     ↓
               AI Introduction
                     │
                     ↓
              Ask Question 1
                     │
                     ↓
              Candidate Answer
                     │
                     ↓
              AI Evaluation
                     │
                     ↓
               Feedback
                     │
                     ↓
              Ask Question 2
                     │
                     ↓
                    ...
                     │
                     ↓
              Ask Question 5
                     │
                     ↓
             Final Evaluation
                     │
                     ↓
              Performance Report
```

---

# 🔌 Important API Endpoints

## Authentication

```text
POST /api/auth/google
```

Authenticates a user through Google.

---

## Current User

```text
GET /api/user/current-user
```

Returns the authenticated user's information.

---

## Resume Analysis

```text
POST /api/interview/resume
```

Uploads and analyzes a PDF resume.

---

## Generate Interview

```text
POST /api/interview/generate-questions
```

Generates personalized interview questions using the candidate's:

* Role
* Experience
* Interview mode
* Resume
* Projects
* Skills

---

## Submit Answer

```text
POST /api/interview/submit-answer
```

Evaluates a candidate's answer using the AI interviewer.

---

## Finish Interview

```text
POST /api/interview/finish
```

Calculates the final interview performance.

---

## Interview Report

```text
GET /api/interview/report/:id
```

Retrieves the detailed performance report.

---

# 🧩 AI Prompt Engineering

One of the important parts of InterviewIQ is the use of carefully designed prompts.

For question generation, the AI is instructed to:

* Behave like a real interviewer
* Generate exactly five questions
* Maintain a difficulty progression
* Keep questions conversational
* Use candidate-specific information
* Avoid unnecessary explanations

For answer evaluation, the AI is instructed to independently evaluate:

```text
Confidence
Communication
Correctness
```

and return structured JSON.

This makes the AI output easier for the backend to process.

---

# 📄 Resume Extraction

PDF processing is handled on the backend using PDF.js.

The server:

```javascript
const pdf = await pdfjsLib.getDocument({
    data: uint8Array
}).promise;
```

Then iterates through every page and extracts its text.

The extracted text is normalized before being sent to the AI model.

This allows the system to work with multi-page resumes instead of relying only on manually entered information.

---

# 🎤 Speech Processing

InterviewIQ uses browser-native speech capabilities.

### Speech-to-Text

The candidate's voice is converted into text using:

```text
Web Speech API
       ↓
Speech Recognition
       ↓
Transcript
       ↓
Answer
```

### Text-to-Speech

AI questions and feedback are converted into speech:

```text
AI Question
     ↓
SpeechSynthesis API
     ↓
Voice Output
```

This creates a conversational interview experience without requiring a separate speech-processing backend.

---

# 🔒 Environment Variables

Create a `.env` file inside the `server` directory.

Example:

```env
PORT=8000

MONGODB_URL=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

OPENROUTER_API_KEY=your_openrouter_api_key

CLIENT_URL=http://localhost:5173
```

Do **not** commit your `.env` file.

---

# ⚙️ Installation & Setup

## 1. Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/InterviewIQ.git
```

```bash
cd InterviewIQ
```

---

# 2. Install Backend Dependencies

```bash
cd server
npm install
```

---

# 3. Configure Environment Variables

Create:

```text
server/.env
```

and add the required environment variables.

---

# 4. Start Backend

```bash
npm run dev
```

The backend will run on:

```text
http://localhost:8000
```

---

# 5. Install Frontend Dependencies

Open another terminal:

```bash
cd client
npm install
```

---

# 6. Start Frontend

```bash
npm run dev
```

The frontend will normally run on:

```text
http://localhost:5173
```

---

# 🧪 Example Interview

A candidate could configure:

```text
Role:
Software Engineer

Experience:
Fresher

Mode:
Technical
```

After uploading their resume, InterviewIQ may identify:

```text
Projects:
AI Voice Assistant
Recipe Application
Machine Learning Project

Skills:
Java
React
Node.js
MongoDB
Python
Machine Learning
```

The AI then generates questions specifically around that profile.

---

# 📈 Example Evaluation

For a candidate's answer:

```text
Confidence:       8/10
Communication:    7/10
Correctness:      9/10
```

The final score becomes:

```text
8/10
```

The candidate then receives concise feedback such as:

```text
Strong technical explanation, but improve structure and communicate your reasoning more clearly.
```

---

# 🧠 What This Project Demonstrates

InterviewIQ demonstrates practical experience with:

* Full-stack MERN development
* REST API design
* React component architecture
* State management with Redux
* Authentication
* MongoDB and Mongoose
* File uploads
* PDF text extraction
* LLM integration
* Prompt engineering
* Structured AI responses
* AI-based evaluation
* Speech recognition
* Text-to-speech
* Timed workflows
* Async API handling
* Error handling
* Protected routes
* Environment variable management

---

# 🏆 Engineering Highlights

### 1. Personalized AI

The system does not generate completely generic interview questions.

Candidate-specific information is passed into the AI prompt.

---

### 2. Structured AI Output

Resume analysis uses a strict JSON structure:

```json
{
  "role": "Software Engineer",
  "experience": "Fresher",
  "projects": [
    "Project 1",
    "Project 2"
  ],
  "skills": [
    "Java",
    "React",
    "MongoDB"
  ]
}
```

This allows the backend to reliably consume AI-generated data.

---

### 3. Multi-Dimensional Evaluation

Instead of using a single score, InterviewIQ evaluates:

```text
Confidence
Communication
Correctness
```

This provides a more meaningful assessment of interview performance.

---

### 4. Real-Time Interview Experience

The application coordinates:

```text
AI Speech
     +
Video
     +
Microphone
     +
Speech Recognition
     +
Timer
     +
Question State
     +
Answer Evaluation
```

to create an interactive interview workflow.

---

# 🚧 Future Improvements can be done

Possible future enhancements include:

* Adaptive difficulty based on previous answers
* More detailed technical evaluation
* Industry/company-specific interview modes
* Coding interview support
* Real-time interviewer interruption handling
* Better speech recognition across browsers
* Resume keyword matching
* Interview performance trends
* Deployment with production-grade infrastructure
* More advanced AI feedback and recommendations

---

# 💡 Challenges Solved

During development, several real-world engineering challenges were handled, including:

* Managing asynchronous AI responses
* Handling PDF extraction
* Maintaining interview state across multiple questions
* Coordinating speech recognition and speech synthesis
* Preventing microphone input while the AI is speaking
* Implementing question timers
* Handling automatic submission when time expires
* Managing authenticated API requests
* Persisting interview results in MongoDB
* Handling AI-generated JSON safely
* Managing frontend/backend CORS configuration

---

# 👨‍💻 Author

**Gargi**

B.Tech Computer Science & Engineering

Interested in:

* Software Engineering
* Artificial Intelligence
* Machine Learning
* Full-Stack Development
* Data Structures & Algorithms

---

# ⭐ If You Like This Project

If you found InterviewIQ interesting, consider giving the repository a ⭐.

---

## 📌 Project Summary

**InterviewIQ is not just an AI question generator.**

It combines:

> **MERN + LLMs + Resume Intelligence + Voice Interaction + Timed Interviews + AI Evaluation**

into a single full-stack application designed to simulate a realistic interview experience.
