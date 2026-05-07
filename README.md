# Paytm Wallet Clone

A full-stack money transfer app inspired by Paytm. It lets users sign up, log in, view their dashboard, search other users, and send money securely with JWT-based authentication.

## What This Offers

- User signup and login with validation
- JWT-protected dashboard and account routes
- Dashboard balance display
- Logged-in user greeting using first and last name
- Searchable user list
- Money transfer flow between users
- Logout support that clears the session

## Project Structure

- `backend/` - Express + MongoDB API for authentication, accounts, and transfers
- `paytm karo/` - React + Vite frontend for the user interface

## Tech Stack

- Frontend: React, Vite, React Router, Axios, Tailwind CSS
- Backend: Node.js, Express, MongoDB, Mongoose, JWT, bcrypt, Zod

## Setup

### Backend

1. Install dependencies:

```bash
cd backend
npm install
```

2. Create a `.env` file with your MongoDB connection string:

```env
MONGO_DB_URL=your_mongodb_connection_string
```

3. Start the server:

```bash
npm start
```

### Frontend

1. Install dependencies:

```bash
cd "paytm karo"
npm install
```

2. Start the app:

```bash
npm run dev
```

## How It Works

1. A user creates an account or signs in.
2. The backend returns a JWT token and the user’s name.
3. The frontend stores the session data and opens the dashboard.
4. The dashboard loads the balance and allows searching other users.
5. Users can send money to another account and log out when finished.

## Notes

- The app expects the backend API to be available at the configured production URL in the frontend source.
- If you want to run everything locally, update the frontend API URLs to point to your local backend.
