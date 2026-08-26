# Vedashree — Full-Stack Developer Portfolio

A modern, responsive MERN portfolio designed to showcase a BCA graduate's MERN Stack + AI/ML skills, projects, certifications, and contact information.

## Stack
- Frontend: React + Vite
- Backend: Node.js + Express.js
- Database: MongoDB
- Styling: Custom CSS
- HTTP: Axios

## Requirements
- Node.js 20+
- npm
- MongoDB local installation OR MongoDB Atlas

## 1. Install frontend
```bash
cd frontend
npm install
```

## 2. Install backend
Open another terminal:
```bash
cd backend
npm install
```

## 3. Configure backend
Create `backend/.env`:
```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/vedashree_portfolio
```

For MongoDB Atlas, replace MONGO_URI with your Atlas connection string.

## 4. Start backend
```bash
cd backend
npm run dev
```

## 5. Start frontend
In another terminal:
```bash
cd frontend
npm run dev
```

Open the URL shown by Vite, normally:
http://localhost:5173

## Project structure
```
vedashree-portfolio/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Skills.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Experience.jsx
│   │   │   ├── Contact.jsx
│   │   │   └── Footer.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── .env.example
│   ├── package.json
│   └── vite.config.js
├── backend/
│   ├── models/Message.js
│   ├── routes/contactRoutes.js
│   ├── server.js
│   ├── .env.example
│   └── package.json
└── README.md
```

## What to customize
1. Replace the resume link in `Hero.jsx` with your real resume.
2. Add your GitHub and LinkedIn URLs.
3. Add your project GitHub/live-demo URLs in `Projects.jsx`.
4. Add your profile photo if you want one.
5. Update the contact email.
6. Deploy frontend and backend separately when ready.

## Why this is full-stack
The portfolio itself is a React frontend, while the contact form sends data to an Express API, which stores messages in MongoDB. This gives you a real MERN project to demonstrate on LinkedIn.
