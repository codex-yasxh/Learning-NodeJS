
// Implementing the book store APIs as bookStore.js
//here we will import the route 

const express = require('express')
const bookRouter = require('./routes/books.route')
const { loggerMiddleware } = require('./middlewares/middlewares')
const app = express()

//Using middlewares for solving the books POST routing 
app.use(express.json())
app.use(loggerMiddleware)
//Routes
app.use('/books', bookRouter)


app.listen(3000,()=>{
    console.log('server started w express');
})
