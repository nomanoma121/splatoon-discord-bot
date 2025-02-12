import { ChatInputCommandInteraction, SlashCommandBuilder } from "discord.js";

export const hello = {
  name: "hello",
  data: new SlashCommandBuilder()
    .setName("hello")
    .setDescription("Replies with Hello!"),
  async execute(interaction: ChatInputCommandInteraction) {
    const message = "さぁ、いきますよー♪";
    await interaction.reply(message);
  },
};
