import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";

import * as schema from "@/lib/db/schema";

const sql = neon(process.env.DATABASE_URL!);
// @ts-expect-error
const db = drizzle(sql, { schema });

export default db;
