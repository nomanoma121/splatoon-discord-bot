import { Client, GatewayIntentBits} from "discord.js";
import dotenv from "dotenv";
import { registerCommands } from "./commands"; 
import { registerEvents } from "./events"
import { db } from "./db";
import { schedules } from "./db/schema";
import { migrate } from "drizzle-orm/better-sqlite3/migrator";

dotenv.config();

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

const main = async () => {
  const result = await db.select().from(schedules);
  console.log(result);
}

migrate(db, { migrationsFolder: "./src/db/migrations" });
registerCommands(client);
registerEvents(client);

main();


client.login(process.env.TOKEN);
