import {
  ChatInputCommandInteraction,
  SlashCommandBuilder,
  EmbedBuilder,
} from "discord.js";
import { format, keyToName } from "../../utils/format";
import { Schedules } from "../../db/queries";
import { embed, errEmbed } from "../../utils/embeds";
import { getDate, getTime, floorDate } from "../../utils/date";

export const schedulesCurrent = {
  name: "schedules-current",
  data: new SlashCommandBuilder()
    .setName("schedules-current")
    .setDescription("次のスケジュールを表示します"),
  async execute(interaction: ChatInputCommandInteraction) {
    const results = await Schedules.current();
    const formattedResults = format(results);

    Object.values(formattedResults).forEach(async (result) => {
      if (!result) {
        await interaction.reply({
          embeds: [errEmbed("データベースにエラーが発生しました")],
        });
        return;
      }
    });

    const embeds: EmbedBuilder[] = [];
    const now = new Date();
    const begin = floorDate(now.toString());
    embeds.push(
      new EmbedBuilder()
        .setColor("#00ff00")
        .setTitle("現在のスケジュール")
        .setDescription(`**${getDate(begin)} ${getTime(begin)} ~**`)
    );

    if (results.length === 0) {
      embeds.push(errEmbed("該当するスケジュールはありません"));
      await interaction.reply({
        embeds: embeds,
      });
      return;
    }

    Object.entries(formattedResults).forEach(([key, value]) => {
      if (value.length === 0) {
        return;
      }
      embeds.push(embed(value, keyToName(key), ""));
    });

    await interaction.reply({
      embeds: embeds,
    });
  },
};
