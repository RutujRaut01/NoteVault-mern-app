🗒️ NoteVault — MERN Notes App with Redis Rate Limiting

A full-stack MERN application for secure and efficient note-taking, featuring intelligent rate limiting powered by Upstash Redis. Built for performance, reliability, and a seamless user experience across all devices.

🚀 Features

Full CRUD Operations — Create, Read, Update, and Delete notes via RESTful API endpoints.

Secure Rate Limiting — Integrated Upstash Redis to handle up to 100 requests/min, preventing API abuse.

Responsive UI — Developed with React.js and Tailwind CSS, ensuring a smooth experience across screen sizes.

Reusable Components — Modular and maintainable design with 4+ custom-built components.

Optimized Backend — Built with Node.js and Express.js, structured for scalability and maintainability.

🛠️ Tech Stack

Frontend: React.js, Tailwind CSS
Backend: Node.js, Express.js
Database: MongoDB (Mongoose)
Caching / Rate Limiting: Upstash Redis
Deployment: (Add once deployed — e.g., Render / Vercel / Railway)

⚙️ API Endpoints
Method	Endpoint	Description
GET	/api/notes	Fetch all user notes
POST	/api/notes	Create a new note
PUT	/api/notes/:id	Update an existing note
DELETE	/api/notes/:id	Delete a note
GET	/api/notes/:id	Fetch a specific note

All routes are protected with rate-limiting middleware to ensure fair usage.

🧠 Architecture Overview
React (Frontend)
   │
   ▼
Express.js (Server)
   │
   ▼
MongoDB (Data Storage)
   │
   └──► Upstash Redis (Rate Limiting Layer)

⚡ Getting Started
1. Clone the repository
git clone https://github.com/yourusername/notevault.git
cd notevault

2. Install dependencies
npm install
cd client && npm install

3. Set up environment variables

Create a .env file in the root directory:

PORT=5000
MONGO_URI=your_mongo_connection_string
REDIS_URL=your_upstash_redis_url

4. Run the app
npm run dev


This runs both the server and client concurrently.

📸 Screenshots (Optional)

(Add UI screenshots here for visual appeal)

🧩 Future Improvements

Add JWT authentication for user-level note management

Implement cloud-based note backups

Add dark mode and theme switcher

🧑‍💻 Author
Rutuj Raut
📧 rautrutuj123@gmail.com
