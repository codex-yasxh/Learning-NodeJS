
import { Router } from "express";

import { getAllBooks, getBookById , createBook , deleteBookById } from "../controllers/book.controller.js";
import { booksTable } from "../drizzle/schema.js";
import { authorsTable } from "../drizzle/author.js";

export const bookRouter = Router();

//GET /api/books
bookRouter.get('/', getAllBooks)

//GET /api/books/id
bookRouter.get('/:id', getBookById)

//POST /api/books
bookRouter.post('/', createBook)

//DELETE /api/books/:id
bookRouter.delete('/:id', deleteBookById)

