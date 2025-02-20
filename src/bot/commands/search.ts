import {
  ChatInputCommandInteraction,
  SlashCommandBuilder,
  EmbedBuilder,
} from "discord.js";
import { seeds } from "../../db/seed-data";
import { Schedules } from "../../db/queries";

type Match = {
  startTime: string;
  rule: string;
  stage1: string;
  stage2: string;
};

type FormatedResults = {
  regular: Match[];
  bankaraOpen: Match[];
  bankaraChallenge: Match[];
  x: Match[];
};

// TODO: 型をちゃんと定義する
const formatResults = (results: any) => {
  const formatedResults: FormatedResults = {
    regular: [],
    bankaraOpen: [],
    bankaraChallenge: [],
    x: [],
  };

  results.forEach((result: any) => {
    const match = {
      startTime: result.schedules.startTime,
      rule: result.rules.name,
      stage1: result.stage1.name,
      stage2: result.stage2.name,
    };

    if (result.match_types.key === "regular") {
      formatedResults.regular.push(match);
    } else if (result.match_types.key === "bankara_open") {
      formatedResults.bankaraOpen.push(match);
    } else if (result.match_types.key === "bankara_challenge") {
      formatedResults.bankaraChallenge.push(match);
    } else {
      formatedResults.x.push(match);
    }
  });

  return formatedResults;
};

const errEmbed = (text: string) => {
  return new EmbedBuilder()
    .setColor("#ff0000")
    .setTitle("エラー")
    .setDescription(text)
    .setImage("https://img.atwiki.jp/dmps_fun/pub/ICON/20012001/SPECIAL01.png")
};

const formatDate = (date: string) => {
  const d = new Date(date);
  return `${d.getMonth() + 1}/${d.getDate()} ${d.getHours()}:${d.getMinutes().toString().padStart(2, "0")}`;
}

const keyToName = (key: string) => {
  switch (key) {
    case "regular":
      return "レギュラーマッチ";
    case "bankaraOpen":
      return "バンカラオープン";
    case "bankaraChallenge":
      return "バンカラチャレンジ";
    case "x":
      return "Xマッチ";
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
    const formatedResults = formatResults(results);

    Object.values(formatedResults).forEach(async (result) => {
      if (!result) {
        await interaction.reply({
          embeds: [errEmbed("データベースにエラーが発生しました")],
        });
        return;
      }
    });

    const embed = new EmbedBuilder()
      .setColor("#0099ff")
      .setTitle("検索結果をおしらせします")
      .setDescription(
        `検索キーワード: ${stage ?? ""}, ${rule ?? ""}, ${matchType ?? ""}`
      )

    Object.entries(formatedResults).forEach(([key, value]) => {
      embed.addFields([
        {
          name: `**${keyToName(key)}**`,
          value: value
            .map(
              (v: any) =>
                `◦${formatDate(v.startTime)} ~ \n${v.rule} ${v.stage1}, ${v.stage2}`
            )
            .join("\n"),
        },
      ]);
    });

    await interaction.reply({ embeds: [embed] });
  },
};
