import {
  ChatInputCommandInteraction,
  SlashCommandBuilder,
  EmbedBuilder,
} from "discord.js";
import { seeds } from "../../db/seed-data";
import { Schedules } from "../../db/queries";
import { format } from "../../utils/format";
import { getDate, getTime } from "../../utils/date";
import { errEmbed, embed } from "../../utils/embeds";

const keyToName = (key: string) => {
  switch (key) {
    case "regular":
      return "🎨レギュラーマッチ";
    case "bankaraOpen":
      return "🔥バンカラオープン";
    case "bankaraChallenge":
      return "🔥バンカラチャレンジ";
    case "x":
      return "🏅Xマッチ";
    default:
      return key;
  }
};

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

    // スケジュールを検索
    const results = await Schedules.search(stage, rule, matchType);
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
    const searchRange = Schedules.getTimeRange();
    // 見出し
    embeds.push(
      new EmbedBuilder()
        .setColor("#00ff00")
        .setTitle("🔍スケジュール検索")
        .setDescription(
          `**${getDate((await searchRange).min)} ${getTime(
            (await searchRange).min
          )} ~ ${getDate((await searchRange).max)} ${getTime(
            (await searchRange).max
          )}\n\n•ステージ: ${stage ?? "全て"}\n•ルール: ${
            rule ?? "全て"
          }\n•バトル形式: ${matchType ?? "全て"}**`
        )
    );

    if (results.length === 0) {
      embeds.push(errEmbed("該当するスケジュールが見つかりませんでした"));
      await interaction.reply({
        embeds: embeds,
      });
      return;
    }

    Object.entries(formatedResults).forEach(([key, value]) => {
      if (value.length === 0) {
        return;
      }
      embeds.push(embed(value, keyToName(key), stage));
    });

    await interaction.reply({
      embeds: embeds,
    });
  },
};
