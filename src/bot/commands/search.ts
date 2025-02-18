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
        .setName("stage")
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
        .setName("rule")
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
        .setName("match_type")
        .setDescription("バトル形式")
        .setRequired(false)
        .addChoices(
          seeds.matchTypes.map((m) => {
            return { name: m.name, value: m.name };
          })
        )
    ),
  async execute(interaction: ChatInputCommandInteraction) {
    const stage = interaction.options.getString("stage")
      ? interaction.options.getString("stage")
      : null;
    const rule = interaction.options.getString("rule")
      ? interaction.options.getString("rule")
      : null;
    const matchType = interaction.options.getString("match_type")
      ? interaction.options.getString("match_type")
      : null;

    const results = await Schedules.search(stage, rule, matchType);
    if (!results) {
      await interaction.reply("検索結果が見つかりませんでした");
      return;
    }

    if (results.length === 0) {
      await interaction.reply("検索結果が見つかりませんでした");
      return;
    }

    const embed = new EmbedBuilder()
      .setColor("#0099ff")
      .setTitle("検索結果")
      .setDescription(`検索キーワード: ${stage ?? ""}, ${rule ?? ""}, ${matchType ?? ""}`)
      .setTimestamp();

    results.forEach((result) => {
      embed.addFields([
        { name: "開始時間", value: result.schedules.startTime, inline: true },
        { name: "終了時間", value: result.schedules.endTime, inline: true },
        { name: "ルール", value: result.rules.name ?? "不明", inline: true },
        { name: "バトル形式", value: result.match_types.name ?? "不明", inline: true },
      ]);
    });

    await interaction.reply({ embeds: [embed] });
  },
  
};
