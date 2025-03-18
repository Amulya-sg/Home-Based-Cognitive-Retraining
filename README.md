# Home-Based Cognitive Retraining System

A web-based platform designed to help parents by predicting the **likelihood of autism** using an **ML-powered questionnaire**. The system provides cognitive skill-building games such as **Hangman, Memory Game, Fast Typing,** and **Jigsaw Puzzle** to enhance various cognitive abilities. Users can maintain profiles, track progress, upload relevant documents, and visualize quiz scores on a **stats page** through graphs that reflect cognitive improvement.

---

## 🚀 Features
- **Autism Prediction**: The ML model analyzes responses from a questionnaire to predict the **likelihood of autism** (note: predictions are not diagnostic).
- **Cognitive Skill Games**:
  - **Hangman**: Enhances vocabulary and word recall.
  - **Memory Game**: Boosts short-term memory and concentration.
  - **Fast Typing**: Improves typing speed and reaction time.
  - **Jigsaw Puzzle**: Develops problem-solving and pattern recognition skills.
- **Stats Page**: Displays quiz results in graphs to show the user's progress over time.
- **User Profiles**: Track user progress and save personal information.
- **Document Uploads**: Users can upload relevant prescriptions or related documents.

---

## 🛠️ Technology Stack
- **Frontend**: React  
- **Backend**: Express.js, Node.js  
- **Database**: MongoDB / SQLite (for offline storage)  
- **Machine Learning Model**: Python (for autism prediction)

---

MERN Stack Project with React Vite
A full-stack web application built using the MERN stack (MongoDB, Express, React, Node.js) with a React Vite frontend and an Express.js backend.
Technologies Used

Frontend: React, Vite
Backend: Node.js, Express.js
Database: MongoDB
Other Tools:

Nodemon (for development)
Mongoose (for MongoDB ODM)
Axios (for API calls)



Features

Full CRUD operations (Create, Read, Update, Delete) for managing data
Responsive frontend with React and Vite
RESTful API backend with Express
MongoDB for data storage

Prerequisites
Make sure you have the following installed:

Node.js (LTS version)
MongoDB
Git

Installation

Clone the repository

Copy```bash
git clone <repository-url>
cd <project-directory>
```

Install Backend Dependencies

Copy```bash
cd backend
npm install
```

Install Frontend Dependencies

Copy```bash
cd frontend
npm install
```

Environment Variables
Create a .env file in the backend directory:

Copy```
PORT=5000
MONGODB_URI=your_mongodb_connection_string
```
Usage

Start the Backend Server

Copy```bash
cd backend
npm run dev
```

Start the Frontend Development Server

Copy```bash
cd frontend
npm run dev
```

Visit http://localhost:5173 in your browser

API Endpoints
Copy```
GET    /api/data     # Get all data
POST   /api/data     # Create new data
GET    /api/data/:id # Get single data
PUT    /api/data/:id # Update data
DELETE /api/data/:id # Delete data
```
Project Structure
Copy```
project-root/
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── server.js
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── App.jsx
│   └── index.html
└── README.md
```
Contributing

Fork the project
Create your feature branch (git checkout -b feature/AmazingFeature)
Commit your changes (git commit -m 'Add AmazingFeature')
Push to the branch (git push origin feature/AmazingFeature)
Open a Pull Request

License
This project is licensed under the MIT License.
