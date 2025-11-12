



import  express from 'express';
import { db } from './db/index.js';
import { booksTable } from './drizzle/schema.js'
import { authorsTable } from './drizzle/author.js';

import { bookRouter } from './routes/books_routes.js'
import { authorRouter } from './routes/authors_routes.js';
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
// --- API Routes Setup ---
// The path '/api/books' will use all the routes defined in bookRouter
app.use('/books', bookRouter) 

// The path '/api/authors' will use all the routes defined in authorRouter
app.use('/authors',authorRouter)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});