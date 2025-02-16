// import { Client, GatewayIntentBits } from "discord.js";
// import dotenv from "dotenv";
// import { registerCommands } from "./commands";
// import { registerEvents } from "./events"
import { Schedules } from "./db/queries";
import { initializeDB } from "./db/init";
import { fetchData } from "./utils/api";
import { filterData } from "./utils/filterData";
// import cron from "node-cron";

// dotenv.config();

// const client = new Client({
//   intents: [
//     GatewayIntentBits.Guilds,
//     GatewayIntentBits.GuildMessages,
//     GatewayIntentBits.MessageContent,
//   ],
// });

// registerCommands(client);
// registerEvents(client);

const fetchAndInsert = async () => {
  try {
    const data = await fetchData();
    const schedules = filterData(data);
    schedules.forEach((schedule: any) => {
      Schedules.create(schedule);
    });
  } catch (err) {
    console.error(err);
  }
}

(async () => {
  await initializeDB();
  await fetchAndInsert();
})();


// 奇数時間に実行(UTC+9)
// cron.schedule("3 1-23/2 * * *", async () => {
//   console.log("fetching data...");
//   try {
//     Schedules.deleteAll();
//     const data = await fetchData();
//     const schedules = insertToDB(data);
//     schedules.forEach((schedule) => {
//       Schedules.create(schedule);
//     });
//   } catch (err) {
//     console.error(err);
//   }
// });

// client.login(process.env.TOKEN);
