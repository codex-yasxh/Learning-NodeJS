
import { Router } from "express";

import { getAllBooks, getBookById , createBook , deleteBookById } from "../controllers/book.controller.js";
import { booksTable } from "../drizzle/schema.js";
import { authorsTable } from "../drizzle/author.js";

export const router = Router();

//GET /api/books
router.get('/', getAllBooks)

//GET /api/books/id
router.get('/:id', getBookById)

//POST /api/books
router.post('/', createBook)

//DELETE /api/books/:id
router.delete('/:id', deleteBookById)

