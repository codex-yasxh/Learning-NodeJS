import { booksTable } from "../drizzle/schema.js";
import { db } from "../db/index.js";
import { eq, Table } from "drizzle-orm";

export const getAllBooks = async (req, res)=>{
    const books = await db.select().from(booksTable);
    return res.json(books)
}

export const getBookById = async (req, res) => {
    //obv we need to do it like the books id must be equal to the id present in the table
    const id = req.params.id;

    const [book] = await //but it's giving a single array then we need ans so dstruc it by using [book]
    db.select()
    .from(booksTable)
    .where((Table)=>eq(Table.id,id)) // id from the req must be equal to the id in table to give the book 
    .limit(1); //there must be only one book of a single id 

    if(!book)
        return res.status(404).json( {  error : `Book with ${id} doesn't exists!`});
    
    return res.json(book)
    
}

export const createBook = async (req, res) => { //so what we need to create a book?? title, description and authorID

    const { title , description , authorID } = req.body

    if(!title || title === "")
        return res.status(400).json({ error : "title is required"})

    const [result] = await db
    .insert(booksTable)
    .values({
        title,
        description,
        authorID
    }) //also once you're done creating the book also return it to me in form of id 
    .returning({
        id : booksTable.id
    })

    return res.status(200).json({ messgae : 'Book created successfully', id : result.id})
}


export const deleteBookById = async (req, res) => {
    const id = req.params.id;
    const title = req.params.title;

    const [bookTitle] = await db
    .select({title: booksTable.title})
    .from(booksTable)
    .where(eq(booksTable.id,id))
    .limit(1)

    await db.delete(booksTable).where(eq(booksTable.id, id));
    
    return res.status(200).json({ messgae : `book ${bookTitle.title} deleted successfully`})
}





