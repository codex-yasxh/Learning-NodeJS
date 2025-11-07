


const express = require('express')
const router = express.Router()
const logMiddleware = require('../middlewares/middlewares')
const { BOOKS } = require('../db/books')

//GET route to fetch all the books 
router.get('/', (req, res)=>{
    res.json(BOOKS)
})

// GET Route to fetch all the books by their IDs

router.get('/:id', (req, res) => {
    
    const id = parseInt (req.params.id);   //req.params.id is written coz of the dynamic value we have taken in route i.e. books/:id 
    //if it was books/:xyz then it will be written as const id = req.params.xyz
    if(isNaN(id)) return res.status(400).json({ error : `The id must be a numeric value `})
    const book = BOOKS.find((e) => e.id === id); // SELECT * from books where id = {id}
    if(book){
        return res.json(book)
    }else{
        return res.status(404).json({ error : `book with ${id} doesn't exist`})
    }
})

//POST route to Add a new book 

router.post('/', (req, res)=>{
    const { name, author } = req.body

    //basic validation
    if(!name || !author){
        return res.json({ error : 'both the name and author are required'})
    }

    //add a new book 
    const newBook = {
        id : BOOKS.length + 1,
        name,
        author
    }

    //storing the new book into memory
    BOOKS.push(newBook)

    //sending response
    return res.status(201).json({
        message: 'New book added successfully',
        book: newBook
    });
})

//DELETE route to delete books
router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);

    // Validate ID
    if (isNaN(id)) {
        return res.status(400).json({ error: "ID must be a numeric value" });
    }

    // Check if book exists
    const bookIndex = BOOKS.findIndex(b => b.id === id);

    if (bookIndex === -1) {
        return res.status(404).json({ error: `Book with ID ${id} not found` });
    }

    // Remove book
    const deletedBook = BOOKS.splice(bookIndex, 1);

    return res.json({
        message: `Book with ID ${id} deleted successfully`,
        deleted: deletedBook[0],
        remaining: BOOKS
    });
});

module.exports = router;