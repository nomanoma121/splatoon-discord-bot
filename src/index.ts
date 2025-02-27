import { Client, GatewayIntentBits } from "discord.js";
import dotenv from "dotenv";
import { registerCommands } from "./bot/commands";
import { initializeDB } from "./db/initialize";
import { updateDB } from "./db/update";
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

client.once("ready", () => {
  console.log(`Logged in as ${client.user?.tag}`);
});

registerCommands(client);

(async () => {
  try {
    await initializeDB();
    await updateDB();

    //奇数時間に実行(UTC+9)
    const job = new CronJob("10 1-23/2 * * *", async () => {
      const date = new Date();
      console.log(`[${date.toLocaleString()}]`, "Updating schedules...");
      await updateDB();
    });
    job.start();
  } catch (err) {
    console.error(err);
  }
})();

client.login(process.env.TOKEN);
