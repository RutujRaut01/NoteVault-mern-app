import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import {connectDB} from "./config/db.js";
import dotenv from "dotenv";
import rateLimiter from "./middleware/rateLimiter.js";
import cors from "cors";
import path from "path";

dotenv.config();

const app = express();

// Middleware

if(process.env.NODE_ENV !== "production")
{
    app.use(
        cors({
        origin: "http://localhost:5173",
        })
    );
}


app.use(express.json()); // This middleware will parse json bodies
app.use(rateLimiter);

// Our simple custom middleware
// app.use((req, res, next) =>{
//     console.log(`Req method is ${req.method} & Req URL is ${req.url}`);
//     next();
// });


const PORT = process.env.PORT || 5001;
const __dirname = path.resolve();

app.use("/api/notes", notesRoutes);

app.use(express.static(path.join(__dirname,"../frontend/dist")))

if(process.env.NODE_ENV === "production")
{
        app.get("*", (req, res) =>{
        res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"))
    })
}

connectDB().then(()=>{
    app.listen(PORT, ()=>{
        console.log("Server started successfully on PORT : ", PORT);
    });
    }
);


