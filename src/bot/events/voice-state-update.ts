import { VoiceState, Client, Events, TextChannel, EmbedBuilder } from 'discord.js';
import dotenv from 'dotenv';

dotenv.config();

export const voiceStateUpdate = (client: Client) => {
  client.on(Events.VoiceStateUpdate, async (oldState: VoiceState, newState: VoiceState) => {
    const textChannelId = process.env.TEXT_CHANNEL_ID;
    if (!textChannelId) {
      console.error("TEXT_CHANNEL_ID が設定されていません");
      return;
    }

    const channel = client.channels.cache.get(textChannelId) as TextChannel;
    if (!channel) {
      console.error(`チャンネルID ${textChannelId} が見つかりません`);
      return;
    }

    const member = newState.member || oldState.member;
    if (!member) return;

    if (!oldState.channel && newState.channel) {
      const embed = new EmbedBuilder()
        .setColor("#00ff00")
        .setTitle("VC 入室通知")
        .setDescription(`**${member.displayName}** が **${newState.channel.name}** に参加しました！`)
        .setThumbnail(member.user.displayAvatarURL())
        .setFields([
          { name: "現在の参加人数",
            value: `${newState.channel.members.size} 人`,
            inline: true
          },
        ])
      channel.send({ embeds: [embed] });
    } else if (oldState.channel && !newState.channel) {
      const embed = new EmbedBuilder()
        .setColor("#ff0000")
        .setTitle("VC 退室通知")
        .setDescription(`**${member.displayName}** が **${oldState.channel.name}** から退出しました！`)
        .setThumbnail(member.user.displayAvatarURL())
        .setFields([
          { name: "現在の参加人数",
            value: `${oldState.channel.members.size} 人`,
            inline: true
          },
        ])
      channel.send({ embeds: [embed] }
        )
    } else if (oldState.channel && newState.channel && oldState.channel.id !== newState.channel.id) {
      const embed = new EmbedBuilder()
        .setColor("#0000ff")
        .setTitle("VC 移動通知")
        .setDescription(`**${member.displayName}** が **${oldState.channel.name}** から **${newState.channel.name}** に移動しました！`)
        .setThumbnail(member.user.displayAvatarURL())
        .setFields([
          { name: "現在の参加人数",
            value: `${newState.channel.members.size} 人`,
            inline: true
          },
        ])
        .setImage(member.user.displayAvatarURL())
      channel.send({ embeds: [embed] });
    }
  });
};
