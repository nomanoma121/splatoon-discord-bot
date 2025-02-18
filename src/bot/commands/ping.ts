import { ChatInputCommandInteraction, SlashCommandBuilder } from "discord.js";

export const ping = {
  name: "ping",
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Replies with Pong!"),
  async execute(interaction: ChatInputCommandInteraction) {
    await interaction.reply("Pong!");
  },
};
