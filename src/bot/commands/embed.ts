import { ChatInputCommandInteraction, SlashCommandBuilder, EmbedBuilder } from 'discord.js';

export const embed = {
  name: 'embed',
  data: new SlashCommandBuilder()
    .setName('embed')
    .setDescription('Embeds a message')
    .addStringOption((option) =>
      option
        .setName('message')
        .setDescription('The message to embed')
        .setRequired(true)
    ),
  async execute(interaction: ChatInputCommandInteraction) {
    const message = interaction.options.getString('message');
    if (!message) return;
    const embed = new EmbedBuilder().
    setColor("#0099ff").
    setTitle("ルピコが代わりにお話しちゃうぞ！").
    setDescription(message).
    setFooter({ text: "以上うるさいルピコでした"}).
    setImage("https://pbs.twimg.com/profile_images/1880924579402797056/qlZf4al7_400x400.jpg").
    setTimestamp();

    await interaction.reply({ embeds: [embed] });
  }
};
