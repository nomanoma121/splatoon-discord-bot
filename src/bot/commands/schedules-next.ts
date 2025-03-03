import {
  ChatInputCommandInteraction,
  SlashCommandBuilder,
  EmbedBuilder,
} from "discord.js";
import { format, keyToName } from "../../utils/format";
import { Schedules } from "../../db/queries";
import { embed, errEmbed } from "../../utils/embeds";
import { getDate, getTime, ceilDate } from "../../utils/date";

export const schedulesNext = {
  name: "schedules-next",
  data: new SlashCommandBuilder()
    .setName("schedules-next")
    .setDescription("次のスケジュールを表示します"),
  async execute(interaction: ChatInputCommandInteraction) {
    const results = await Schedules.next();
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
    const begin = ceilDate(now.toString());
    embeds.push(
      new EmbedBuilder()
        .setColor("#00ff00")
        .setTitle("次のスケジュール")
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
  }
};
