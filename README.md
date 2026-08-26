# Vedhasree — Portfolio

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
```bash
cd backend
npm install
```

## 3. Configure backend
Create `backend/.env`:
```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/vedhasree_portfolio

```


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

