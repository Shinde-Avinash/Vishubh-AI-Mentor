# Vishubh-AI-Mentor - AI Personality Chat Application

> A full-stack web application that lets you chat with AI personalities using Google Gemini API

## 📋 Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
- [Troubleshooting](#troubleshooting)

## 🌟 Overview

CG Agent is an interactive web application where users can:
1. Register and login with secure authentication
2. Browse different educational fields
3. Select famous personalities from each field
4. Chat with AI that mimics the personality's style and expertise

## ✨ Features

- 🔐 **JWT Authentication** - Secure user registration and login
- 🎨 **Modern UI** - Beautiful Tailwind CSS design with gradients
- 🤖 **AI Chat** - Powered by Google Gemini 2.0 Flash
- 👤 **Personality Mimicry** - AI responds in the style of selected personalities
- 📱 **Responsive Design** - Works on all devices
- 💾 **MySQL Database** - Persistent user data storage

## 🛠️ Tech Stack

### Frontend
- React 18
- Vite 6
- Tailwind CSS 3
- React Router DOM
- Axios

### Backend
- Node.js
- Express
- Sequelize ORM
- MySQL2
- JWT (jsonwebtoken)
- bcryptjs
- Google Generative AI SDK

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- MySQL (v8 or higher)
- npm or yarn

### Step 1: Clone the repository
```bash
git clone <repository-url>
cd "CG Agent"
```

### Step 2: Install Backend Dependencies
```bash
cd server
npm install
```

### Step 3: Install Frontend Dependencies
```bash
cd ../client
npm install
```

### Step 4: Setup Database
Run the SQL setup script:
```bash
mysql -u root -p < server/setup_db.sql
```

Or manually create the database:
```sql
CREATE DATABASE IF NOT EXISTS cg_agant;
CREATE USER IF NOT EXISTS 'avi10'@'localhost' IDENTIFIED BY 'avi10';
GRANT ALL PRIVILEGES ON cg_agant.* TO 'avi10'@'localhost';
FLUSH PRIVILEGES;
```

## ⚙️ Configuration

### Backend Environment Variables
Create `server/.env` file:
```env
PORT=5000
DB_HOST=localhost
DB_USER=avi10
DB_PASS=avi10
DB_NAME=cg_agant
JWT_SECRET=supersecretkey123
GEMINI_API_KEY=your_gemini_api_key_here
```

**Important**: 
- Replace `your_gemini_api_key_here` with your actual Gemini API key
- Use ONLY the API key, not the full URL
- Get your API key from: https://makersuite.google.com/app/apikey

## 🚀 Usage

### Start the Backend Server
```bash
cd server
node index.js
```
Server will run on: http://localhost:5000

### Start the Frontend Development Server
```bash
cd client
npm run dev
```
Frontend will run on: http://localhost:5173

### Access the Application
Open your browser and navigate to: http://localhost:5173

## 📁 Project Structure

```
CG Agent/
├── client/                      # React frontend
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Register.jsx    # User registration page
│   │   │   ├── Login.jsx       # User login page
│   │   │   ├── Home.jsx        # Field selection page
│   │   │   ├── PeopleList.jsx  # Personality list page
│   │   │   └── Chat.jsx        # AI chat interface
│   │   ├── App.jsx             # Main app component
│   │   └── index.css           # Global styles
│   ├── tailwind.config.js      # Tailwind configuration
│   └── package.json
│
└── server/                      # Node.js backend
    ├── config/
    │   └── db.js               # Database configuration
    ├── controllers/
    │   ├── authController.js   # Authentication logic
    │   └── chatController.js   # Chat/Gemini API logic
    ├── models/
    │   └── User.js             # User model
    ├── routes/
    │   ├── authRoutes.js       # Auth endpoints
    │   └── chatRoutes.js       # Chat endpoints
    ├── index.js                # Server entry point
    ├── setup_db.sql            # Database setup script
    ├── .env                    # Environment variables
    └── package.json
```

## 🔌 API Endpoints

### Authentication
```
POST /api/auth/register
Body: { name: string, email: string, password: string }
Response: { message: "User registered successfully" }

POST /api/auth/login
Body: { email: string, password: string }
Response: { token: string, user: { id, name, email } }
```

### Chat
```
POST /api/chat
Body: { message: string, personName: string, field: string }
Response: { reply: string }
```

## 📝 Application Flow

1. **Register** → Create a new account with name, email, and password
2. **Login** → Authenticate and receive JWT token
3. **Home** → Browse and select an educational field:
   - Computer Science
   - Mechanical Engineering
   - Political Science
   - AI & ML
   - Finance
4. **People List** → Choose a personality from the selected field
5. **Chat** → Interact with AI that mimics the personality's style

## 🎯 Available Personalities

- **Computer Science**: Alan Turing, Grace Hopper, Tim Berners-Lee
- **Mechanical Engineering**: Nikola Tesla, Henry Ford, James Watt
- **Political Science**: Narendra Modi, Barack Obama, Angela Merkel
- **AI & ML**: Sam Altman, Geoffrey Hinton, Yann LeCun
- **Finance**: Warren Buffett, Ray Dalio, Jamie Dimon

## 🔧 Troubleshooting

### Chat returns "Sorry, I am unable to respond right now"
**Solution:**
- Verify `GEMINI_API_KEY` in `.env` contains only the API key (not the full URL)
- Restart the backend server
- Check if the API key is valid and has proper permissions

### Database connection errors
**Solution:**
```bash
# Ensure MySQL is running
mysql -u root -p

# Run the setup script
mysql -u root -p < server/setup_db.sql
```

### Port already in use
**Solution:**
- Change `PORT` in `server/.env` to a different port
- Or kill the process using the port:
```bash
# Windows
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# Linux/Mac
lsof -ti:5000 | xargs kill -9
```

### Frontend build errors
**Solution:**
```bash
cd client
rm -rf node_modules package-lock.json
npm install
```

## 🔒 Security Features

- Password hashing with bcrypt (10 salt rounds)
- JWT token-based authentication
- Environment variables for sensitive data
- CORS configuration
- SQL injection prevention via Sequelize ORM

## 🎨 UI Features

- Modern gradient backgrounds
- Smooth hover animations
- Responsive grid layouts
- Loading states
- Clean message bubbles
- Focus states on inputs

## 📄 License

This project is created for educational purposes.

## 👥 Contributors

Built with ❤️ using React, Node.js, and Google Gemini API

## 🙏 Acknowledgments

- Google Gemini API for AI capabilities
- React and Vite teams for excellent developer tools
- Tailwind CSS for beautiful styling utilities
