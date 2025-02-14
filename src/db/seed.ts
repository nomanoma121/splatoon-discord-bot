import { db } from "./index";
import { migrate } from "drizzle-orm/better-sqlite3/migrator";
import { Stages, MatchTypes, Rules } from "./queries";
import { seeds } from "./seed-data";

export const initializeDB = async () => {
  migrate(db, { migrationsFolder: "./src/db/migrations" });

  seeds.stages.forEach(async (stage) => {
    Stages.create(stage);
  }); 

  seeds.matchTypes.forEach(async (matchType) => {
    MatchTypes.create(matchType);
  });

  seeds.rules.forEach(async (rule) => {
    Rules.create(rule);
  });
};
