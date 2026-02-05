# NoteVault — MERN Notes App with Redis Rate Limiting

A full-stack **MERN** application for secure and efficient note-taking, featuring intelligent rate limiting powered by **Upstash Redis**.  
Built for performance, reliability, and a seamless user experience across all devices.

---

## Features
- **Full CRUD Operations** — Create, Read, Update, and Delete notes via RESTful API endpoints.  
- **Secure Rate Limiting** — Integrated **Upstash Redis** to handle up to **100 requests/min**, preventing API abuse.  
- **Responsive UI** — Built with **React.js** and **Tailwind CSS**, ensuring a smooth experience across screen sizes.  
- **Reusable Components** — Modular and maintainable design with 4+ custom-built components.  
- **Optimized Backend** — Developed using **Node.js** and **Express.js**, structured for scalability and maintainability.  

---

## Tech Stack
| Layer | Technology |
|-------|-------------|
| **Frontend** | React.js, Tailwind CSS |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB (Mongoose) |
| **Rate Limiting / Caching** | Upstash Redis |
| **Deployment** | *(e.g., Render / Vercel / Railway)* |

---

## API Endpoints
| Method | Endpoint | Description |
|:-------|:----------|:-------------|
| GET | `/api/notes` | Fetch all user notes |
| POST | `/api/notes` | Create a new note |
| PUT | `/api/notes/:id` | Update an existing note |
| DELETE | `/api/notes/:id` | Delete a note |
| GET | `/api/notes/:id` | Fetch a specific note |

> All routes are protected with rate-limiting middleware to ensure fair usage.

---

## Architecture Overview
<pre>
React (Frontend)
   │
   ▼
Express.js (Server)
   │
   ▼
MongoDB (Data Storage)
   │
   └──► Upstash Redis (Rate Limiting Layer)
</pre>

---

## Getting Started

### 1️ Clone the repository
```bash
git clone https://github.com/RutujRaut01/NoteVault-mern-app.git
cd notevault
```
### 2️ Install dependencies
```bash
npm install
cd client && npm install
```

### 3️ Set up environment variables
```bash
PORT=5000
MONGO_URI=your_mongo_connection_string
REDIS_URL=your_upstash_redis_url
```
### 4️ Run the app
```bash
npm run dev
```

---

## Screenshots

**Dashboard View**  
<img width="100%" alt="NoteVault Dashboard" src="https://github.com/user-attachments/assets/079cc5a5-6fa8-4bc8-a877-6412cf3c280c" />

**Note Editor**  
<img width="80%" alt="NoteVault Editor" src="https://github.com/user-attachments/assets/6fb2b1d6-d4da-409d-9d1b-6d57d363da40" />

---

## Future Improvements

- Add JWT authentication for user-level note management  
- Implement cloud-based note backups  
- Add dark mode and theme switcher  
- Improve error handling and input validation  
- Integrate search and filter functionality for notes  

---


## Author
**Rutuj Raut**  
 [rautrutuj123@gmail.com](mailto:rautrutuj123@gmail.com)
