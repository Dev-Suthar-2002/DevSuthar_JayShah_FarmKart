# FarmKart API - Authentication and Authorization
- This document outlines the implementation of Authentication and Authorization in the FarmKart API using NestJS and TypeScript.

# Features
- Authentication: Implemented using JWT (JSON Web Token) for secure access to API endpoints.
- Authorization: Role-based access control to manage permissions for different user roles ( Farmer, Customer).

# Prerequisites
- Node.js and npm installed.
- A MongoDB database.
- Required environment variables configured (see .env).

# Installation
- Clone the repository:

# bash
- Copy code
- git clone <repository_url>
- cd <project_directory>
- Install dependencies:

# bash
- Copy code
- npm install
- Configure environment variables in a .env file:

# plaintext
- Copy code
- JWT_SECRET=<your_jwt_secret>
- JWT_EXPIRATION=<expiration_time> # e.g., '1h' or '7d'
- Start the application:

# bash
- Copy code
- npm run start:dev

# Implementation Details

# 1. Authentication

- JWT Authentication:

- Users authenticate via a login endpoint, providing valid credentials (e.g., email and password,role).
- Upon successful authentication, a JWT is generated and returned.

- Protected Endpoints:

- Middleware ensures only users with a valid token can access protected endpoints.

- Sample Routes:
- POST /auth/login: Login and receive a JWT.

# 2. Authorization

- Role-based authorization implemented using guards in NestJS.
- Users are assigned roles during registration.
- Routes are protected based on roles, ensuring users only access resources they are authorized for.

- Roles:
- Farmer: Manage their own products and view orders.
- Customer: Browse products and place orders.
- Sample Routes:
- POST /products (Farmer-only)
- POST /orders (Customer-only)

# Key Files:
- auth.module.ts
- auth.controller.ts
- auth.service.ts
- jwt.strategy.ts

# Authorization Guards
- Custom guards to protect endpoints based on roles.

# Key Files:
- roles.guard.ts
- jwt-auth.guard.ts

