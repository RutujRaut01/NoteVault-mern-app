import express from "express";
import { getAllNotes, getNoteById, updateNote, deleteNote, createNote } from "../controllers/notesController.js";
const router = express.Router();

// Note here /api/notes is prefixed in app.use()

router.get("/", getAllNotes);

router.get("/:id", getNoteById);

router.post("/", createNote);

router.put("/:id", updateNote);

router.delete("/:id", deleteNote);

export default router;

// Previous version befre adding controllers by RRR
// app.get("/api/notes", (req, res)=>{
//     res.send("you got 20 notes");   
// });

// app.post("/api/notes/:id", (req, res)=>{
//     res.status(201).json({message: "Post created successfully!"});
// });

// app.put("/api/notes/id", (req, res)=>{
//     res.status(200).json({message: "Post updated successfully!"});
// });

// app.delete("/api/notes/:id", (req, res)=>{
//     res.status(200).json({message: "Note deleted successfully!"});
// });

