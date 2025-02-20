import { db } from "./index";
import { migrate } from "drizzle-orm/better-sqlite3/migrator";
import { Stages, MatchTypes, Rules, Schedules } from "./queries";
import { seeds } from "./seed-data";

export const initializeDB = async () => {
  console.log("Starting DB initialization...");

  migrate(db, {
    migrationsFolder: "./src/db/migrations",
  });

  await Schedules.deleteAll()
    .then(() => {
      Schedules.getAll().then((schedules) => {
        console.log(schedules);
      });
    })
    .then(() => {
      console.log("Schedules successfully deleted");
    });

  try {
    if ((await Stages.getAll()).length === 0) {
      seeds.stages.forEach((stage) => {
        Stages.create(stage);
      });
    }

    if ((await Stages.getAll()).length !== seeds.stages.length) {
      throw new Error("Stages not seeded correctly!");
    }

    if ((await MatchTypes.getAll()).length === 0) {
      seeds.matchTypes.forEach((matchType) => {
        MatchTypes.create(matchType);
      });
    }

    if ((await MatchTypes.getAll()).length !== seeds.matchTypes.length) {
      throw new Error("MatchTypes not seeded correctly!");
    }

    if ((await Rules.getAll()).length === 0) {
      seeds.rules.forEach((rule) => {
        Rules.create(rule);
      });
    }

    if ((await Rules.getAll()).length !== seeds.rules.length) {
      throw new Error("Rules not seeded correctly!");
    }
  } catch (err) {
    console.error(err);
  }

  console.log("DB initialization complete!");
};
