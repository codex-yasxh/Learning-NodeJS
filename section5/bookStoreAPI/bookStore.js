

const express = require('express')

const app = express()

const books = [
    {   
        id : 1,
        name : "book one",
        author : "one"
    },
    {   
        id :2,
        name : "book two",
        author : "two"
    },
    {   
        id :3,
        name : "book three",
        author : "three"
    },
]

//Using middlewares for solving the books POST routing 
app.use(express.json())

//GET route to fetch all the books 
app.get('/books', (req, res)=>{
    res.json(books)
})


// GET Route to fetch all the books by their IDs

app.get('/books/:id', (req, res) => {
    
    const id = parseInt (req.params.id);   //req.params.id is written coz of the dynamic value we have taken in route i.e. books/:id 
    //if it was books/:xyz then it will be written as const id = req.params.xyz
    if(isNaN(id)) return res.status(400).json({ error : `The id must be a numeric value `})
    const book = books.find((e) => e.id === id); // SELECT * from books where id = {id}
    if(book){
        return res.json(book)
    }else{
        return res.status(404).json({ error : `book with ${id} doesn't exist`})
    }
})

//POST route to Add a new book 

app.post('/books', (req, res)=>{
    const { name, author } = req.body

    //basic validation
    if(!name || !author){
        return res.json({ error : 'both the name and author are required'})
    }

    //add a new book 
    const newBook = {
        id : books.length + 1,
        name,
        author
    }

    //storing the new book into memory
    books.push(newBook)

    //sending response
    return res.status(201).json({
        message: 'New book added successfully',
        book: newBook
    });
})


//DELETE route to delete books
app.delete('/books/:id', (req, res) => {
    const id = parseInt(req.params.id);

    // Validate ID
    if (isNaN(id)) {
        return res.status(400).json({ error: "ID must be a numeric value" });
    }

    // Check if book exists
    const bookIndex = books.findIndex(b => b.id === id);

    if (bookIndex === -1) {
        return res.status(404).json({ error: `Book with ID ${id} not found` });
    }

    // Remove book
    const deletedBook = books.splice(bookIndex, 1);

    return res.json({
        message: `Book with ID ${id} deleted successfully`,
        deleted: deletedBook[0],
        remaining: books
    });
});


app.listen(3000,()=>{
    console.log('server started w express');
})
