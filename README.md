Task Manager
A simple and efficient task management application that allows users to create, update, delete, and manage tasks. The app features user authentication and integrates with a MongoDB database to store tasks and user data.

Features
User Authentication: Secure login and signup system.
Task Creation: Add new tasks with titles and descriptions.
Task Management: Update task status (e.g., mark as complete) and delete tasks.
Persistent Storage: All data is stored in a MongoDB database to ensure it persists across sessions.
Responsive UI: Designed to be fully responsive and user-friendly on all devices.
Technologies Used
Frontend: HTML, CSS, JavaScript
Backend: Node.js, Express.js
Database: MongoDB
Authentication: JWT (JSON Web Tokens)
API: RESTful API for CRUD operations (Create, Read, Update, Delete)
Installation
Clone the repository:

git clone https://github.com/yourusername/task-manager.git
Navigate to the project directory:

cd task-manager
Install the dependencies:

npm install
Set up environment variables:

Create a .env file in the root of the project and add your MongoDB URI and JWT secret key:
env

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
Run the application:

npm start
The app will be running on http://localhost:3000.

Usage
Sign Up: Create a new user account with a username and password.
Login: Use your credentials to log in and access your task dashboard.
Create Tasks: Add new tasks with titles and descriptions.
Manage Tasks: Mark tasks as complete or delete them.
License
This project is licensed under the MIT License - see the LICENSE file for details.
