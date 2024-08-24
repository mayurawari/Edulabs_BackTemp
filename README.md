# Edulabs_BackTemp

A simple and efficient backend API for managing users and tasks, designed to handle common operations such as user registration, authentication, and task management.

## Installation

To set up and run this project locally, follow these steps:

1. Clone the repository:
   git clone <https://github.com/mayurawari/Edulabs_BackTemp.git>

2. Install the necessary dependencies:
   npm install

3. Start the server:
   npm run start
   or
   npm run server

4. API Endpoints

   -User Registration

   -Endpoint: /register

   -Method: POST

   -Request Body:
   {
   "username": "test",
   "email": "test@gmail.com",
   "password": "123123"
   }

5. User Login

   -Endpoint: /login

   -Method: POST

   -Request Body:
   {
   "username": "test",
   "password": "123123"
   }

   -Response:
   ("User logged in successfully")

-Note: After logging in, a token will be generated and printed in the console. This token must be included in the Authorization header as a Bearer token for accessing protected routes.

6. User Logout

   -Endpoint: /logout

   -Method: POST

   -Request Header:

   -Authorization: Bearer <token>

   -Response:
   ("Logged out successfully")

7. Add Task

   -Endpoint: /tasks

   -Method: POST

   -Request Body:
   {
   "title": "task-1",
   "status": "completed",
   "priority": "low",
   "assigneduser": "employee"
   }

   -Response:
   ("New task created")

8. Get All Tasks

   -Endpoint: /api-gettask/alltasks
   -Method: GET
   -Response: ("All tasks will appear in the response").

9. Get Filtered Tasks

   -Endpoint: /api-gettask/alltasks
   -Method: GET
   -Response: ("Filtered tasks based on query parameters will appear in the response.")

10. Delete Task

    -Endpoint: /api-gettask/deletetask/:id
    -Method: DELETE
    -Response:
    ("Task deleted")

11. Deployment
    Deployed Link: [LINK](https://edulabs-backtemp.onrender.com)
