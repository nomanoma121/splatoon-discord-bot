import { ChatInputCommandInteraction, SlashCommandBuilder, EmbedBuilder } from "discord.js";
import { fetchData } from "../utils/api";

export const fetchApi = {
  name: "fetch-api",
  data: new SlashCommandBuilder()
    .setName("fetch-api")
    .setDescription("Fetches data from an API."),
  async execute(interaction: ChatInputCommandInteraction) {
    const data = await fetchData();

    // resultsが配列だった場合、最初の試合情報を取得
    const match = data.results[0];

    if (!match) {
      await interaction.reply("スケジュール情報が見つかりませんでした。");
      return;
    }

    // ルール名がオブジェクトだった場合の処理
    const ruleName = typeof match.rule.name === "string" ? match.rule.name : JSON.stringify(match.rule.name);
    const stageNames = match.stages.map((stage: any) => stage.name).join(", ");

    const embed = new EmbedBuilder()
      .setColor("#0099ff")
      .setTitle("次のオープンマッチのスケジュールをお知らせするよ")
      .setFields([
        { name: "ルール", value: ruleName, inline: true },
        { name: "ステージ", value: stageNames, inline: true },
        { name: "日時", value: getTimeSchedule(match.start_time, match.end_time), inline: false },
      ])
      .setImage(match.stages[0]?.image || "")
      .setTimestamp();

    await interaction.reply({ embeds: [embed] });
  },
};

const getTimeSchedule = (start: string, end: string) => {
  const s = new Date(start);
  const e = new Date(end);
  return `${s.getMonth() + 1}/${s.getDate()} ${s.getHours()}:${s.getMinutes().toString().padStart(2, "0")}~${e.getHours()}:${e.getMinutes().toString().padStart(2, "0")}`;
};
