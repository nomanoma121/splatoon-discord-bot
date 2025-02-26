import { Client, GatewayIntentBits } from "discord.js";
import dotenv from "dotenv";
import { registerCommands } from "./bot/commands";
import { registerEvents } from "./bot/events";
import { Schedules } from "./db/queries";
import { initializeDB } from "./db/init";
import { fetchData } from "./utils/api";
import { extractData } from "./utils/extractData";
import { filterData } from "./utils/filterData";
import { insertData } from "./utils/insertData";
import { CronJob }from "cron";

dotenv.config();

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildVoiceStates,
  ],
});

registerCommands(client);
registerEvents(client);

const updateSchedules = async () => {
  try {
    await Schedules.deleteAll();
    const data = await fetchData();
    if (!data) {
      throw new Error("Failed to fetch data");
    }
    const schedules = extractData(data);
    const filteredSchedules = filterData(schedules);
    insertData(filteredSchedules);
    console.log("Schedules successfully updated");
  } catch (err) {
    console.error(err);
  }
};

(async () => {
  try {
    await initializeDB();
    await updateSchedules();

    //奇数時間に実行(UTC+9)
    const job = new CronJob("10 1-23/2 * * *", async () => {
      const date = new Date();
      console.log(`[${date.toLocaleString()}]`, "Updating schedules...");
      await updateSchedules();
    });
    job.start();
  } catch (err) {
    console.error(err);
  }
})();

client.login(process.env.TOKEN);
