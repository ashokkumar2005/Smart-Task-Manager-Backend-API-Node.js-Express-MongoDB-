# Smart Task Manager Backend API

A complete backend project built with **Node.js, Express, and MongoDB** using **MVC architecture**.
This project demonstrates many important backend concepts including authentication, REST APIs, file uploads, logging, security, file system operations, and streams.

---

# 🚀 Features

* User Authentication (JWT)
* Password Hashing with bcrypt
* Task Management CRUD API
* File Upload using Multer
* File Streaming API
* Logging with Morgan
* Security Middleware (Helmet, CORS)
* Rate Limiting
* MongoDB Database with Mongoose
* MVC Architecture
* Global Error Handling
* File System Logging

---

# 🛠 Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* Multer
* Morgan
* Helmet
* CORS
* Express Rate Limit

---

# 📁 Project Structure

backend-project
│
├── config
│   └── db.js
│
├── controllers
│   ├── authController.js
│   ├── taskController.js
│   └── fileController.js
│
├── models
│   ├── User.js
│   └── Task.js
│
├── routes
│   ├── authRoutes.js
│   ├── taskRoutes.js
│   └── fileRoutes.js
│
├── middleware
│   ├── authMiddleware.js
│   ├── errorMiddleware.js
│   └── uploadMiddleware.js
│
├── utils
│   ├── logger.js
│   └── streamFile.js
│
├── uploads
│
├── server.js
├── package.json
└── .env

---

# 📦 Installation

Clone the repository

```bash
git clone https://github.com/yourusername/backend-project.git
```

Go to project folder

```bash
cd backend-project
```

Install dependencies

```bash
npm install
```

---

# ⚙️ Environment Variables

Create a `.env` file in the root folder.

```
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/task_manager
JWT_SECRET=your_secret_key
```

---

# ▶️ Run the Server

Development mode

```bash
npm run dev
```

Production mode

```bash
npm start
```

---

# 📡 API Endpoints

## Authentication

POST /api/auth/register
POST /api/auth/login

---

## Tasks

POST /api/tasks
GET /api/tasks

---

## File Upload

POST /api/files/upload

---

## Stream File

GET /download

---

# 📚 Concepts Covered

* MVC Architecture
* REST API Development
* Authentication & Authorization
* MongoDB & Mongoose
* Middleware in Express
* File Upload Handling
* File System Operations
* Streams in Node.js
* Security Best Practices
* Error Handling

---

# 🎯 Purpose of This Project

This project was built to practice and demonstrate **backend development concepts using Node.js and Express**. It combines multiple backend topics into a single real-world API.

---

# 👨‍💻 Author

Ashok Kumar

---

# ⭐ Support

If you like this project, consider giving it a star on GitHub.
