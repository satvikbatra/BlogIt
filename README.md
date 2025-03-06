# BlogIt

## Overview
BlogIt is a full-stack blogging platform that allows users to create, read, and manage blog posts. It features user authentication, rich text content, and a responsive design for optimal viewing on any device.

## Features
- User authentication (Sign up, Sign in)
- Create blog posts
- Responsive UI using React & Tailwind CSS
- Backend API using Node.js, Hono, and Prisma ORM
- PostgreSQL database with Prisma migrations

## Tech Stack
### Frontend:
- React
- TypeScript
- Tailwind CSS

### Backend:
- Node.js
- Hono.js
- Prisma ORM
- PostgreSQL

## Installation
### Prerequisites
Ensure you have the following installed:
- Node.js (v18+)
- PostgreSQL (latest stable version)

### Clone the Repository
```sh
git clone https://github.com/satvikbatra/BlogIt.git
cd BlogIt
```

### Backend Setup
```sh
cd backend
cp .env.example .env
npm install
npx prisma migrate dev --name init
npm run dev
```

### Frontend Setup
```sh
cd ../frontend
cp .env.example .env
npm install
npm run dev
```

## Environment Variables
Ensure you set up the following environment variables:

### Backend `.env`
```env
DATABASE_URL=your_postgresql_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
```

### Frontend `.env`
```env
VITE_BACKEND_URL=http://localhost:5000
```

## API Endpoints
### User Authentication
- `POST /api/v1/user/signup` - Register a new user
- `POST /api/v1/user/signin` - Log in an existing user

### Blog Routes
- `POST /api/v1/blog` - Create a new blog post
- `GET /api/v1/blog` - Retrieve all blog posts
- `GET /api/v1/blog/:id` - Retrieve a single blog post
- `PUT /api/v1/blog/:id` - Update a blog post

## Deployment
### Backend Deployment
1. Deploy on a cloud platform (e.g., Render, Vercel, Railway, or AWS).
2. Update the `.env` file with the production database and JWT secret.

### Frontend Deployment
1. Deploy on Vercel, Netlify, or another static hosting service.
2. Set the `VITE_BACKEND_URL` to the deployed backend URL.

## License
This project is licensed under the MIT License.
