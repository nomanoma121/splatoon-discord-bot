import {
  EmbedBuilder,
  ChatInputCommandInteraction,
  SlashCommandBuilder,
} from "discord.js";
import { format } from "../../utils/format";
import { Schedules } from "../../db/queries";
import { errEmbed } from "../../utils/embeds";

export const schedulesCurrent = {
  name: "schedules-current",
  data: new SlashCommandBuilder()
    .setName("schedules-current")
    .setDescription("現在のスケジュールを表示します"),
  async execute(interaction: ChatInputCommandInteraction) {
    const resutl = await Schedules.current();
    const formatedResults = format(resutl);

    Object.values(formatedResults).forEach(async (result) => {
      if (!result) {
        await interaction.reply({
          embeds: [errEmbed("データベースにエラーが発生しました")],
        });
        return;
      }
    });

    console.log(formatedResults);

    const embed = new EmbedBuilder()
      .setColor("#0099ff")
      .setTitle("現在のスケジュール")
      .setFields([
        {
          name: "レギュラーマッチ",
          value: "ホコバトル  モズク農園 / デボン海洋博物館",
          inline: false,
        },
        {
          name: "ガチマッチ",
          value: "ガチアサリ  マンタマリア号 / ホッケ埠頭",
          inline: false,
        },
        {
          name: "リーグマッチ",
          value: "ナワバリバトル ハコフグ倉庫 / モズク農園",
          inline: false,
        }
      ]);
    await interaction.reply({ embeds: [embed] });
  },
};
