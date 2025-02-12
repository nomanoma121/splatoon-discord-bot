import { REST, Routes, SlashCommandBuilder } from "discord.js";
import dotenv from "dotenv";

import { ping } from "./commands/ping";
import { hello } from "./commands/hello";
import { talk } from "./commands/talk";

dotenv.config();

const commands = [ping, hello, talk].map((command) => command.data.toJSON());

const rest = new REST({ version: "10" }).setToken(process.env.TOKEN as string);

(async () => {
  try {
    console.log("Refreshing guild commands...");

    // ギルドIDを指定 (ここを変更)
    await rest.put(
      Routes.applicationGuildCommands(process.env.CLIENT_ID as string, process.env.GUILD_ID as string),
      { body: commands }
    );

    console.log("Guild commands updated!");
  } catch (error) {
    console.error(error);
  }
})();
