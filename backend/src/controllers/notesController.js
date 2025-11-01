import Note from "../models/Note.js";

export async function getAllNotes(_, res){ // when you don't use parameter you can put _ instead
    try{
        const notes = await Note.find().sort({createdAt:-1});
        res.status(200).json(notes);
    }
    catch(error){
        console.error("Error in getAllNotes controller", error);
        res.status(500).json({message: "Internal server error"});
    }
};

export async function createNote(req, res){
    try
    {
        const {title, content} = req.body;
        const note = new Note({title: title, content: content});
        // can also be written directly as follows: becuase name of keys of data and variable loading are same
        // const newNote = new Note({title, content});
        const savedNote = await note.save();
        res.status(201).json(savedNote);
    }
    catch(error)
    {
        console.error("Error in createNote controller", error);
        res.status(500).json({message: "Internal server error"});
    }
}

export async function getNoteById(req, res){
    try
    {
        const note = await Note.findById(req.params.id);
        if(!note)
        {
            return res.status(404).json({message: "Note not found!"});
        }
        res.status(200).json(note);
    }
    catch(error)
    {
        console.error("Error in getNoteById controller", error);
        res.status(500).json({message: "Internal server error"});
    }

}

export async function updateNote(req, res){
    try{
        const {title, content} = req.body;
        const updates = {};
        if (title !== undefined) updates.title = title;
        if (content !== undefined) updates.content = content;
        const updatedNote = await Note.findByIdAndUpdate(req.params.id, updates, {new: true,});
        // {new: true} returns updated note, if not done it would just return old note
        if(!updatedNote)
        {
            return res.status(404).json({message: "Note not found"});
        }
        res.status(200).json({updatedNote});
    }
    catch(error)
    {
        console.error("Error in updateNote controller", error);
        res.status(500).json({message: "Internal server error"});
    }
}

export async function deleteNote(req, res)  {
    try
    {
        const deleteStaus = await Note.findByIdAndDelete(req.params.id);
        if(!deleteStaus)
        {
            return res.status(404).json({message: "Note not found"});
        }
        res.status(200).json("Note deleted successfully!");
    }
    catch(error)
    {
        console.error("Error in deleteNode controller", error);
        res.status(500).json({message: "Internal server error"});
    }
}

