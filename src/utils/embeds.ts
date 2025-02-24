import { EmbedBuilder } from "discord.js";
import { addEmojiToRule } from "./format";
import { getDate, getTime, isDateChanged } from "./date";

type Match = {
  startTime: string;
  rule: string;
  stage1: string;
  stage2: string;
};

export const embed = (
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

export const errEmbed = (message: string) => {
  return new EmbedBuilder()
    .setColor("#ff0000")
    .setTitle("エラー")
    .setDescription(message)
    .setImage("https://img.atwiki.jp/dmps_fun/pub/ICON/20012003/PAIN.png");
};
