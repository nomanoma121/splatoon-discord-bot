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

const getTime = (date: string) => {
  const d = new Date(date);
  return ` ${d.getHours().toString().padStart(2, "0")}:${d
    .getMinutes()
    .toString()
    .padStart(2, "0")}`;
};

const getDate = (date: string) => {
  const d = new Date(date);
  // 曜日も返す
  const days = ["日", "月", "火", "水", "木", "金", "土"];

  return `${d.getMonth() + 1}/${d.getDate()} (${days[d.getDay()]})`;
};

const addEmojiToRule = (text: string) => {
  switch (text) {
    case "ナワバリ":
      return "🎨ナワバリ";
    case "エリア":
      return "🏳️エリア";
    case "ホコ":
      return "🏆ホコ";
    case "ヤグラ":
      return "🚋ヤグラ"
    case "アサリ":
      return "🏈アサリ";
  }
}

const isDateChanged = (pre: string, now: string) => {
  const preDate = new Date(pre);
  const nowDate = new Date(now);
  return preDate.getDate() !== nowDate.getDate();
};

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

const errEmbed = (text: string) => {
  return new EmbedBuilder()
    .setColor("#ff0000")
    .setTitle("エラー")
    .setDescription(text)
    .setImage("https://img.atwiki.jp/dmps_fun/pub/ICON/20012003/PAIN.png");
};

const embed = (
  matches: Match[],
  matchType: string,
  searchStage: string | null
) => {
  const fields: any = [];
  const tmp: { value: string }[] = [];
  matches.forEach((match, index) => {
    const time = getTime(match.startTime);
    // ステージ名をハイライト
    const stage = `${
      match.stage1 === searchStage ? `"${match.stage1}"` : match.stage1
    } / ${match.stage2 === searchStage ? `"${match.stage2}"` : match.stage2}`;
    const value = `•${time} ~ ${addEmojiToRule(match.rule)} ${stage}`;
    if (index && isDateChanged(matches[index - 1].startTime, match.startTime)) {
      fields.push({
        name: `**${getDate(matches[index - 1].startTime)}**`,
        value: `**${tmp.map((t: any) => t.value).join("\n")}**`,
        inline: false,
      });
      tmp.length = 0;
    }
    tmp.push({
      value: value,
    });
    // 最後の要素の場合はフィールドに追加
    if (index === matches.length - 1) {
      fields.push({
        name: `**${getDate(match.startTime)}**`,
        value: `**${tmp.map((t: any) => t.value).join("\n")}**`,
        inline: false,
      });
    }
  });

  return new EmbedBuilder()
    .setColor("#0099ff")
    .setTitle(matchType)
    .setFields(fields);
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

    if (results.length === 0) {
      await interaction.reply({
        embeds: [errEmbed("お探しの条件はみつかりませんでした")],
      });
      return;
    }

    const embeds: EmbedBuilder[] = [];
    const searchRange = Schedules.getTimeRange();
    // 見出し
    embeds.push(
      new EmbedBuilder()
        .setColor("#00ff00")
        .setTitle("🔍スケジュール検索")
        .setDescription(
        `**${getDate((await searchRange).min)} ${getTime((await searchRange).min)} ~ ${getDate((await searchRange).max)} ${getTime((await searchRange).max)}\n\n•ステージ: ${stage ?? "全て"}\n•ルール: ${
            rule ?? "全て"
          }\n•バトル形式: ${matchType ?? "全て"}**`
        )
    );

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
