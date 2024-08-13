import mongoose from "mongoose";

const noteSchema = new  mongoose.Schema(
    {
        title:
        {
            type: String,
            require: true
        }, 
        body:
        {
            type: String,
            require: true
        },
        created_at:
        {
            type: Date,
            default: Date.now()
        },
        updated_at:
        {
            type: Date,
            default: Date.now()
        }
    }
)

const Note  = mongoose.model("Note", noteSchema)

export default Note;