import { InferSelectModel } from "drizzle-orm";
import { pgTable, text, timestamp, uniqueIndex } from "drizzle-orm/pg-core";
import { createSelectSchema } from "drizzle-zod";

export const users = pgTable(
  "users",
  {
    id: text("id").primaryKey(), // clerk user id
    createdAt: timestamp("created_at").notNull().defaultNow(),
  },
  (t) => ({
    idIdx: uniqueIndex("user_id_idx").on(t.id),
  }),
);

export type User = InferSelectModel<typeof users>;

export const UserSchema = createSelectSchema(users);
