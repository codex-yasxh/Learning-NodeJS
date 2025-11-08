

require('dotenv/config')
const db = require('./db')


const { usersTable } = require('./drizzle/schema')

async function getAllUsers() {
    //import db instance 
    const users = await db.select().from(usersTable)
    console.log(`Users from DB : `, users);
    return users;
}

async function createUsers({ id, name, email}) {
    await db.insert(usersTable).values({
        id,
        name,
        email,
    });
}


createUsers({ id : 5, name : "aditya", email : "aditya@hij.com"})
createUsers({ id : 6, name : "yash", email : "yash@jkl.com"})

getAllUsers()