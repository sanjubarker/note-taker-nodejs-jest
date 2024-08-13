import express from "express"
import connectDB from "./config/db.js"
import dotenv from "dotenv";
import cors from "cors"
import bodyParser from "body-parser";
import NoteRouters from "./routers/noteRouters.js";
import { serve, setup } from 'swagger-ui-express';
import YAML from "yamljs";
import path from 'path';

const app = express()
const PORT = process.env.PORT || 4000
const swaggerDocument = YAML.load(path.join('src', 'openapi.yaml'));

dotenv.config();
const { json } = bodyParser;

connectDB()

app.use(cors())
app.use(json)
app.use("/", NoteRouters)
app.use('/swaggerApiDocs', serve, setup(swaggerDocument));

const server = app.listen(PORT, (err)=> {
    if(err) console.error("Error while connecting server: ", err)
    console.log(`Note taking nodejs server listing on PORT ${PORT}`)
})

export { app, server }