import {
  ChatInputCommandInteraction,
  SlashCommandBuilder,
  EmbedBuilder,
} from "discord.js";
import { seeds } from "../../db/seed-data";
import { Schedules } from "../../db/queries";

export const search = {
  name: "search",
  data: new SlashCommandBuilder()
    .setName("search")
    .setDescription("今後のスケジュールを検索します")
    .addStringOption((option) =>
      option
        .setName("ステージ")
        .setDescription("ステージ名")
        .setRequired(false)
        .addChoices(
          seeds.stages.map((s) => {
            return { name: s.name, value: s.name };
          })
        )
    )
    .addStringOption((option) =>
      option
        .setName("ルール")
        .setDescription("ルール名")
        .setRequired(false)
        .addChoices(
          seeds.rules.map((r) => {
            return { name: r.name, value: r.name };
          })
        )
    )
    .addStringOption((option) =>
      option
        .setName("バトル形式")
        .setDescription("バトル形式")
        .setRequired(false)
        .addChoices(
          seeds.matchTypes.map((m) => {
            return { name: m.name, value: m.name };
          })
        )
    ),
  async execute(interaction: ChatInputCommandInteraction) {
    const stage = interaction.options.getString("ステージ") ?? null;
    const rule = interaction.options.getString("ルール") ?? null;
    const matchType = interaction.options.getString("バトル形式") ?? null;

    const results = await Schedules.search(stage, rule, matchType);

    const errEmbed = (text: string) => {
      return new EmbedBuilder()
      .setColor("#ff0000")
      .setTitle("エラー")
      .setDescription(text)
      .setImage("https://img.atwiki.jp/dmps_fun/pub/ICON/20012001/SPECIAL01.png")
      .setTimestamp();
    }

    if (!results) {
      await interaction.reply({ embeds: [errEmbed("データベースにエラーが発生しました")] });
      return;
    }

    if (results.length === 0) {
      await interaction.reply({ embeds: [errEmbed("検索結果が見つかりませんでした")] });
      return;
    }

    if (results.length > 25) {
      await interaction.reply({ embeds: [errEmbed("検索結果が多すぎます")] });
      return;
    }

    const embed = new EmbedBuilder()
      .setColor("#0099ff")
      .setTitle("検索結果")
      .setDescription(
        `検索キーワード: ${stage ?? ""}, ${rule ?? ""}, ${matchType ?? ""}`
      )
      .setTimestamp();

    results.forEach((result) => {
      embed.addFields([
        { name: "開始時間", value: result.schedules.startTime, inline: true },
        { name: "終了時間", value: result.schedules.endTime, inline: true },
        { name: "ルール", value: result.rules.name ?? "不明", inline: true },
        {
          name: "バトル形式",
          value: result.match_types.name ?? "不明",
          inline: true,
        },
      ]);
    });

    await interaction.reply({ embeds: [embed] });
  },
};
