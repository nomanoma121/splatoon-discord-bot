import {
  ChatInputCommandInteraction,
  SlashCommandBuilder,
  EmbedBuilder,
} from "discord.js";
import { format, keyToName } from "../../utils/format";
import { Schedules } from "../../db/queries";
import { embed, errEmbed } from "../../utils/embeds";

export const schedulesCurrent = {
  name: "schedules-current",
  data: new SlashCommandBuilder()
    .setName("schedules-current")
    .setDescription("次のスケジュールを表示します"),
  async execute(interaction: ChatInputCommandInteraction) {
    const results = await Schedules.current();
    const formatedResults = format(results);

    Object.values(formatedResults).forEach(async (result) => {
      if (!result) {
        await interaction.reply({
          embeds: [errEmbed("データベースにエラーが発生しました")],
        });
        return;
      }
    });

    const embeds: EmbedBuilder[] = [];

    if (results.length === 0) {
        embeds.push(errEmbed("該当するスケジュールはありません"));
        await interaction.reply({
            embeds: embeds,
        });
        return;
    } 

    Object.entries(formatedResults).forEach(([key, value]) => {
      if (value.length === 0) {
        return;
      }
      embeds.push(embed(value, keyToName(key), ""));
    });

    await interaction.reply({
      embeds: embeds,
    });
  }
};
