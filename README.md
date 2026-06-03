📅 Expert Booking App
A full-stack MERN (MongoDB, Express, React, Node.js) application for booking sessions with professionals. Users can browse through various experts, filter by category, view available time slots, and manage their bookings seamlessly.

The application is highly optimized for performance and features real-time slot updates using Socket.io to prevent double bookings.

✨ Features
🔍 Smart Search & Filtering: Browse experts by category and name with real-time debounced search.
🕒 Dynamic Time Slots: View available time slots for any expert.
⚡ Real-Time Updates: Instant updates for booked slots across all clients using Socket.io.
📅 Booking Management: View and manage your upcoming and past bookings.
🚀 High Performance: Optimized database queries and frontend state management.
🛠️ Tech Stack
Frontend
React 19 (with Vite for blazing fast builds)
Tailwind CSS v4 (for modern, responsive styling)
React Router v7 (for routing)
Axios (for API communication)
Socket.io-client (for real-time events)
Backend
Node.js & Express.js
MongoDB (with Mongoose for object modeling)
Socket.io (WebSockets for real-time communication)
⚡ Recent Optimizations
Debounced Search: Implemented a 500ms debounce on the search and category filters to drastically reduce unnecessary API calls while typing, preventing backend overload.
Fix Double Fetching: Resolved React 18 StrictMode race conditions to ensure data is fetched exactly once upon component mount.
Database Indexing: Added proper MongoDB indexes (name, category) to ensure fast querying and eliminate slow collection scans.
📂 Folder Structure

booking-app/
│
├── my-project/          # React Frontend (Vite)
│   ├── src/
│   │   ├── api/         # Axios configuration
│   │   ├── component/   # Reusable UI components
│   │   ├── pages/       # Route pages (Home, Bookings, etc.)
│   │   └── socketio/    # Socket client setup
│   └── package.json
│
└── server/              # Node.js/Express Backend
    ├── controllers/     # Route logic
    ├── middleware/      # Validation & Error handling
    ├── models/          # MongoDB schemas
    ├── routes/          # Express API routes
    ├── index.js         # Server entry point
    └── package.json
🚀 Installation & Running Locally
1. Clone the repository
bash

git clone <your-repository-url>
cd "Booking app"
2. Setup Environment Variables
Create a .env file in the server directory and add the following:

env

PORT=5000
MONGO_URI=your_mongodb_connection_string
3. Start the Backend Server
bash

cd server
npm install
npm run dev
The server will start on http://localhost:5000

4. Start the Frontend Application
Open a new terminal window:

bash

cd my-project
npm install
npm run dev
The React app will be available on the local port provided by Vite (e.g., http://localhost:5173)

🔗 Key API Endpoints
Method	Endpoint	Description
GET	/api/experts	Fetch paginated experts with optional search & category filters
GET	/api/experts/:id	Get details of a specific expert
POST	/api/bookings	Create a new booking (requires slot validation)
GET	/api/bookings/my-bookings	Fetch user's bookings
📝 License
MIT © Pooja Singh
