



import  express from 'express';
import { db } from './db/index.js';
import { booksTable } from './drizzle/schema.js'
import { authorsTable } from './drizzle/author.js';

import { router } from './routes/books_routes.js'

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
// --- API Routes Setup ---
// The path '/api/books' will use all the routes defined in bookRouter
app.use('/books', router)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});