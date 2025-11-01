import mongoose from "mongoose";

// 1st Step: You need to create a schema
// 2nd Step: You would create a model based off of that schema

const noteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
}, 
  {timestamps: true} // createdAt
);

const Note = mongoose.model("Note", noteSchema);
export default Note;
