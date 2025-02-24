import {
  ChatInputCommandInteraction,
  SlashCommandBuilder,
  EmbedBuilder,
} from "discord.js";
import { format } from "../../utils/format";
import { Schedules } from "../../db/queries";
import { errEmbed } from "../../utils/embeds";

export const schedulesNext = {
  name: "schedules-next",
  data: new SlashCommandBuilder()
    .setName("schedules-next")
    .setDescription("次のスケジュールを表示します"),
  async execute(interaction: ChatInputCommandInteraction) {
    const result = await Schedules.next();
    console.log(resutl);
    const formatedResults = format(result);

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
      .setTitle("次のスケジュール")
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
        },
      ]);
    await interaction.reply({ embeds: [embed] });
  },
};
