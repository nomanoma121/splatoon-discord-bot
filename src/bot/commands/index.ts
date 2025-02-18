import { Client } from "discord.js";
import { ping } from "./ping";
import { embed } from "./embed";
import { choice } from "./choice";
import { search } from "./search";

const commands = [embed, ping, choice, search];

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
