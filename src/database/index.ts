import Database from "better-sqlite3";
import { queries } from "./queries";

const db = new Database("./src/database/database.db");

export const createTables = () => {
  db.exec(queries.Schedules.createTable);
  db.exec(queries.MatchTypes.createTable);
  db.exec(queries.Rules.createTable);
  db.exec(queries.Stages.createTable);
  console.log("Tables created!");
}
