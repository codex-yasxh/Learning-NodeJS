
import { db } from "../db/index.js"
import { authorsTable } from "../drizzle/author.js"
import { eq, Table } from "drizzle-orm"


export const getAllAuthors = async (req, res) => {
    const authors = await db.select().from(authorsTable)
    return res.json(authors)
}

export const getAuthorById = async (req, res) => {
    const id = req.params.id;

    const [author] = await db
    .select()
    .from(authorsTable)
    .where(eq(authorsTable.id, id))
    .limit(1)

    if(!author)
        return res.status(404).json( {  error : `Author with ${id} doesn't exists!`});
    
    return res.json(author)
}

export const createAuthor = async (req, res) => {
    const { firstName, lastName, email } = req.body

    if(!firstName || !email)
    return res.status(400).json({ error: "firstName and email are required" })

    const [result] = await db.insert(authorsTable).values({
        firstName,
        lastName,
        email
    })
    .returning({
        id : authorsTable.id,
        firstName : authorsTable.firstName
    })

    return res.status(200).json({ //this return will directly( it means not back to it's func) go to the postman UI or server so keep in mind what you're returning 
        message : `Author ${firstName} created successfully `,
        id : result.id,
    })
}

export const deleteAuthorById = async (req, res) => {
    const id = req.params.id;

    // Step 1: Check if author exists
    const [author] = await db
        .select({
            firstName: authorsTable.firstName,
            lastName: authorsTable.lastName
        })
        .from(authorsTable)
        .where(eq(authorsTable.id, id))
        .limit(1);

    if (!author) {
        return res.status(404).json({
            error: `Author with id ${id} does not exist!`
        });
    }

    // Step 2: Delete the author
    const [result] = await db
        .delete(authorsTable)
        .where(eq(authorsTable.id, id))
        .returning({
            id: authorsTable.id
        });

    return res.status(200).json({
        message: `Author ${author.firstName} ${author.lastName || ""} deleted successfully`,
        id: result.id
    });
}
