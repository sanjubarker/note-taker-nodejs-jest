import request from 'supertest';
import app, { server } from '../app.js';
import { connect, connection } from 'mongoose';
import { config } from 'dotenv';
import connectDB from '../config/db.js';
config()


// import app from '../app';
// import { connect, connection } from 'mongoose';
// jest.setTimeout(20000);

// beforeAll(async () => {
//     // ser?ver
//     // const URI =
//     // try{
//     //     await connect(`${process.env.MODNGO_DB_URI}`);
//     // }catch(err){0
//     //     console.log("Ins ctch err: ", err)
//     // }
//      connectDB()
// });

// afterAll(async () => {

//     await connection.close();
//     server.close()
// });

describe('Note API', () => {
    it('should create a new note', async () => {
        const res = await request(app)
            .post('/notes')
            .send({ title: 'Test Note', body: 'This is a test note.' });
        expect(res.statusCode).toEqual(201);
        expect(res.body).toHaveProperty('_id');
    });
}); 
