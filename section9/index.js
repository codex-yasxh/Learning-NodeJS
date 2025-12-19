
import dotenv from 'dotenv';
dotenv.config();
import  express  from 'express'
import { connectMongoDB } from './connection.js'


const app = express();
const PORT = process.env.PORT ?? 8000;

connectMongoDB(process.env.MONGO_DB_URL).then(()=>{
    console.log('MongoDB is connected');
}) //from cluster section

app.listen(PORT, ()=>console.log(`Server has started running on ${PORT}`))


