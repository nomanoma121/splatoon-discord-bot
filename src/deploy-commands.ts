import { REST, Routes, SlashCommandBuilder } from "discord.js";
import dotenv from "dotenv";

import { ping } from "./bot/commands/ping";
import { hello } from "./bot/commands/hello";
import { talk } from "./bot/commands/talk";
import { embed } from "./bot/commands/embed";
import { fetchApi } from "./bot/commands/fetch-api";

dotenv.config();

const commands = [embed, ping, hello, talk, fetchApi].map((command) => command.data.toJSON());

const rest = new REST({ version: "10" }).setToken(process.env.TOKEN as string);

(async () => {
  try {
    console.log("Refreshing guild commands...");

    await rest.put(
      Routes.applicationGuildCommands(process.env.CLIENT_ID as string, process.env.GUILD_ID as string),
      { body: commands }
    );

    console.log("Guild commands updated!");
  } catch (error) {
    console.error(error);
  }
})();
