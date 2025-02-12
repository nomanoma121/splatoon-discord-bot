import { ChatInputCommandInteraction, SlashCommandBuilder } from "discord.js";
import { fetchData } from "../utils/api";

export const fetchApi = {
  name: "fetch-api",
  data: new SlashCommandBuilder()
    .setName("fetch-api")
    .setDescription("Fetches data from an API."),
  async execute(interaction: ChatInputCommandInteraction) {
    const data = await fetchData();
    const result = data.results[0];
    const message = {
      "start": result.start_time,
      "end": result.end_time,
      "rule": result.rule.name,
      "stages": result.stages[0].name,
    };
    await interaction.reply(`API Response: ${JSON.stringify(message)}`);
  },
};
