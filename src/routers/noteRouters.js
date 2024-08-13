import express from 'express';
import { 
    createNote,
    getNotes, 
    getNotesById, 
    queryNotesByTitle, 
    updateNote 
} from '../controllers/noteController.js';

const Router  = express.Router();

Router.post('/notes', createNote);
Router.get("/notes", getNotes)
Router.get('/notes/:id', getNotesById);
Router.get('/notes/:title', queryNotesByTitle);
Router.put('/notes/:id', updateNote);

export default Router;


