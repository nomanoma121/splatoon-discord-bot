import { Client } from "discord.js";
import { ping } from "./ping";
import { hello } from "./hello";
import { talk } from "./talk";
// import { fetchApi } from "./fetch-api";

const commands = [hello, ping, talk];

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
