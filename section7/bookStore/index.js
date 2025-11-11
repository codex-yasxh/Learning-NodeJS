


import { db } from "./db/index"; //check db or db/index
import { usersTable } from "./drizzle/schema";

async function getAllUsers() {
    const books = await db.select().from(usersTable);
    console.log("Users:", books);
}

async function createUsers(data) {
  await db.insert(usersTable).values(data);
}

await createUsers({ id: 1, name: "Aditya", email: "aditya@xyz.com" });
await getAllUsers();
