import { drizzle, BetterSQLite3Database } from "drizzle-orm/better-sqlite3";
import Database from "better-sqlite3";

const sqlite = new Database("./src/db/database.db");
export const db: BetterSQLite3Database = drizzle(sqlite);
