

import { model, Schema } from 'mongoose'
import { type } from 'os'

const userSchema = new Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true
    },
    salt : {
        type : String,
        required : true
    }
}, {timestamps : true} ) // timestamps means it'll automatically add created at and completed at

const User = model('User', userSchema);
export default User;


