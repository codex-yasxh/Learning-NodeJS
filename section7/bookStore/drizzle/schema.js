



import { pgTable, integer, varchar } from "drizzle-orm/pg-core";

export const usersTable = pgTable("books", {
  id: integer("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }).notNull().unique()
});
