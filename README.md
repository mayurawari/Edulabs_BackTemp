# Edulabs_BackTemp
Assignment: Task Management System with Secure
Authentication

Problem Statement:

Create a backend API for a task management system with enhanced security and
user role management.

Requirements:

1. API Endpoints:
User registration and JWT-based authentication with role-based access
control (e.g., admin, user).
CRUD operations for tasks, with permissions based on user roles.
Retrieve and filter tasks based on priority, status, and assigned user.

2. Database Interaction:
Use TypeORM or Drizzle to manage users, roles, and tasks, with enforced
data integrity.

3. Dependency Injection:
Implement DI for authentication services, role management, and task
handling.

4. Security:
Implement route guards and middleware for role-based access control and
input validation.

5. Code Quality:
Follow best practices, use appropriate design patterns


//API Steps to follow

//To register new user 
//Format to be followed
Method: post;
{
  "username":"test",
  "email":"test@gmail.com",
  "password":"123123"
}

//To login new user 
//Format to be followed
Method: post;
{
  "username":"test",
  "password":"123123"
}

Note:please provide token generated in console to the authorization header before hitting protected routes or to logout user.

//To logout user 
//Format to be followed
Method: post;
("Provide token in authorization header)


//To add task
//Format to be followed
Method: post;
{
  "title":"task-1",
  "status":"completed",
  "priority":"low",
  "assigneduser":"employee"
}

//To get alltask
Endpoint/url:http://localhost:9090/api-gettask/alltasks