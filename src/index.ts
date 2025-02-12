import { Client, GatewayIntentBits} from "discord.js";
import dotenv from "dotenv";
import { registerCommands } from "./commands"; 
import { registerEvents } from "./events";

dotenv.config();

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

registerCommands(client);
registerEvents(client);

client.login(process.env.TOKEN);
