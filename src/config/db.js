import mongoose, { model } from "mongoose";
import dotenv from 'dotenv'
dotenv.config()

const connectDB = async () =>{
    try{
        await mongoose.connect(process.env.MODNGO_DB_URI);
        console.log("<--------MongoDB Connected-------->");
    }catch(err){
        console.error(err.message);
        process.exit(1);
    }
}

export default connectDB;