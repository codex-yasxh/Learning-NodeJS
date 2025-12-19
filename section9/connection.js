

import mongoose from 'mongoose';

export const connectMongoDB = async(conectionURL)=>{
     const connection = await mongoose.connect(conectionURL);
     return connection;
}


