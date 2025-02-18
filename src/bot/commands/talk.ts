import { ChatInputCommandInteraction, SlashCommandBuilder } from "discord.js";

export const talk = {
  name: "talk",
  data: new SlashCommandBuilder()
    .setName("talk")
    .setDescription("ルピコが代わりに話します")
    .addStringOption((option) =>
      option
        .setName("message")
        .setDescription("話す内容")
        .setRequired(true)
    ),
  async execute(interaction: ChatInputCommandInteraction) {
    const message = interaction.options.getString("message");
    if (!message) return;
    console.log(message);
    await interaction.reply(message);
  }
}
