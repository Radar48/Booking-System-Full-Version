

Event Booking System – Full Stack Project

📌 Overview
This project is a full‑stack event booking system built with the PERN stack (Postgres, Express, React, Node).
It includes:
- Task 1: Authentication & Full‑Stack Setup
- Task 2: Real‑Time Communication with WebSockets
- Task 3: GraphQL API Development
The system supports user registration/login, event management, ticketing, payments, and real‑time chat.

📝 Task 1 – Full‑Stack Application (Authentication & Setup)
Objectives
- Develop a fully integrated web application.
- Implement user authentication and role‑based access.
- Deploy both frontend and backend.
- Ensure performance optimization.
Backend
- Authentication: JWT‑based login and registration.
- GraphQL Schema: Defines User, Event, ChatMessage.
- Resolvers: Handle register, login, me, createEvent, sendMessage.
- Context: Decodes JWT and attaches userId + role.
- Database: Sequelize ORM with Postgres, unique constraints on email.
Frontend
- React Components: Registration/login forms.
- Axios: Communicates with backend REST and GraphQL endpoints.
- Thunder Client: Used for testing GraphQL queries/mutations.
Deployment & Security
- .gitignore excludes .env files (frontend/.env, backend/.env).
- Environment variables configured in cloud platform dashboards.
- Performance optimizations: JWT middleware, Sequelize indexes, efficient React rendering.

📝 Task 2 – WebSockets for Real‑Time Communication
Objectives
- Set up WebSockets with Express and React.
- Handle bidirectional real‑time communication.
- Implement user‑specific notifications/messages.
- Optimize real‑time data updates efficiently.
Backend
- Socket.IO Setup:
- connection: logs user connections.
- joinRoom: joins user to their room (socket.join(userId)).
- chatMessage: saves message to DB and broadcasts.
- disconnect: logs disconnections.
- Persistence: Messages stored in ChatMessage table.
Frontend
- Socket.IO Client: Connects to backend via services/socket.js.
- Chat Component:
- Emits joinRoom with userId.
- Listens for chatMessage.
- Sends messages via socket.emit("chatMessage", { userId, text }).
- Fetches history with Axios.
- Notifications: Supports private messages and global broadcasts.
Optimization
- Guard against null userId.
- Emit only to relevant rooms.
- Index user_id in DB for faster queries.
- Efficient React rendering with hooks.

📝 Task 3 – GraphQL API Development
Objectives
- Set up a GraphQL server with Apollo.
- Define queries, mutations, and resolvers.
- Handle authentication in GraphQL APIs.
- Optimize database queries with GraphQL best practices.
Backend
- Apollo Server Setup: Integrated with Express.
- Schema (typeDefs.js):
- Queries: me, events, chatMessages.
- Mutations: register, login, createEvent, sendMessage.
- Resolvers: Implement logic for queries/mutations.
- Authentication: JWT decoded in context.js.
Frontend
- Axios: Sends GraphQL queries/mutations.
- Thunder Client: Tests GraphQL endpoints.
- Example mutation:
mutation {
  register(name: "Lucy", email: "lucy@example.com", password: "123456") {
    id
    name
    email
    role
  }
}


Optimization
- Fetch only required fields in queries.
- Use Sequelize associations and indexes.
- Stateless JWT for scalability.
- Minimize payload size for efficient frontend rendering.

How to Run
Backend
cd backend
npm install
npm run dev


Frontend
cd frontend
npm install
npm start


Testing
- Use Thunder Client for GraphQL queries/mutations.
- Use frontend chat UI for real‑time messaging.

📂 Project Structure
EventBookingSystem/
│── backend/
│   ├── server.js
│   ├── config/
│   ├── graphql/
│   ├── models/
│   ├── routes/
│── frontend/
│   ├── src/
│   ├── public/
│── .gitignore
│── README.md



Completion Summary
- Task 1: Full‑stack setup with authentication and role‑based access.
- Task 2: Real‑time communication with WebSockets (chat + notifications).
- Task 3: GraphQL API development with optimized queries and JWT authentication.
- Deployment ready on GitHub with .env excluded.

