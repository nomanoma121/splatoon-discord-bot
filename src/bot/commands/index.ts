import { Client } from "discord.js";
import { ping } from "./ping";
import { choice } from "./choice";
import { search } from "./search";
import { schedulesCurrent } from "./schedules-current";
import { schedulesNext } from "./schedules-next";

const commands = [ping, choice, search, schedulesCurrent, schedulesNext];

export const registerCommands = (client: Client) => {
  client.on("interactionCreate", async (interaction) => {
    if (!interaction.isChatInputCommand()) return;

    const command = commands.find(
      (cmd) => cmd.name === interaction.commandName
    );
    if (command) {
      await command.execute(interaction);
    } else {
      console.error(`Command not found: ${interaction.commandName}`);
    }
  });
};
