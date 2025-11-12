


import { Router } from "express";
import { createAuthor, deleteAuthorById, getAllAuthors, getAuthorById } from "../controllers/author.controller.js";
import { authorsTable } from "../drizzle/author.js";

export const authorRouter = Router();

//GET /api/books
authorRouter.get('/', getAllAuthors)

//GET /api/authors/id
authorRouter.get('/:id', getAuthorById)

//POST /api/authors
authorRouter.post('/', createAuthor)

//DELETE /api/authors/id
authorRouter.delete('/:id', deleteAuthorById)