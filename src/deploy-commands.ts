import { REST, Routes, SlashCommandBuilder } from "discord.js";
import dotenv from "dotenv";

import { ping } from "./bot/commands/ping";
import { choice } from "./bot/commands/choice";
import { search } from "./bot/commands/search";
import { schedulesCurrent } from "./bot/commands/schedules-current";
import { schedulesNext } from "./bot/commands/schedules-next";

dotenv.config();

const commands = [schedulesCurrent, schedulesNext, ping, choice, search].map((command) => command.data.toJSON());

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
