import Note from "../models/noteModel.js"

const createNote = async (req, res)=>{
    try {
        const { title, body} = req.body
        const note = new Note({title, body})

        await note.save()
        res.status(201).json(note)
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }  
}

const getNotes = async (req, res)=>{
    try {
        const notes = await Note.find()
        res.status(201).json(notes)
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }  
}

const getNotesById = async (req, res)=>{
    try {
        const note = await Note.findById(req.param.id)
        if (!note) {
            return res.status(404).json({ message: 'Note not found' });
        }
        
        res.status(201).json(note)
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    } 
}

const queryNotesByTitle  = async (req, res)=>{
    try {
        const { title } = req.query;

        const notes = await Note.find({ title: { $regex: title, $options: 'i' } });
        res.json(notes);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
}

const updateNote = async (req, res)=>{
    try {
        const note = await Note.findById(req.params.id);
        if (!note) {
            return res.status(404).json({ message: 'Note not found' });
        }

        note.title = req.body.title || note.title;
        note.body = req.body.body || note.body;
        note.updated_at = Date.now();
        await note.save();
        res.json(note);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });  
    }    
}

export {
    createNote, getNotes, getNotesById, updateNote, queryNotesByTitle
}