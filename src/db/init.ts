import { db } from "./index";
import { migrate } from "drizzle-orm/better-sqlite3/migrator";
import { Stages, MatchTypes, Rules, Schedules } from "./queries";
import { seeds } from "./seed-data";

export const initializeDB = async () => {
  console.log("Starting DB initialization...");

  await Schedules.deleteAll().then(() => {
    Schedules.getAll().then((schedules) => {
      console.log(schedules);
    });
  }).then(() => {
    console.log("Schedules deleted");
  });

  migrate(db, { migrationsFolder: "./src/db/migrations" });

  if ((await Stages.getAll()).length === 0) {
    seeds.stages.forEach((stage) => {
      Stages.create(stage);
    });
    console.log("Stages seeded");
  }

  if ((await MatchTypes.getAll()).length === 0) {
    seeds.matchTypes.forEach((matchType) => {
      MatchTypes.create(matchType);
    });
    console.log("Match types seeded");
  }

  if ((await Rules.getAll()).length === 0) {
    seeds.rules.forEach((rule) => {
      Rules.create(rule);
    });
    console.log("Rules seeded");
  }
  
  console.log("DB initialization complete!");
};
