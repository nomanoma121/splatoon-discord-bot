import { Interaction } from "discord.js";

export const interactionCreate = async (interaction: Interaction) => {
  if (!interaction.isChatInputCommand()) return;
  console.log(`Command received: ${interaction.commandName}`);
};
