import { GatewayIntentBits, Client, Partials, Message, TextChannel } from "discord.js";
import dotenv from "dotenv";

dotenv.config();

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMessageReactions,
    GatewayIntentBits.GuildMembers,
  ],
  partials: [Partials.Message, Partials.Channel],
});

client.once("ready", () => {
  console.log("Ready!");
  if (client.user) {
    console.log(`Logged in as ${client.user.tag}`);
  }
});

client.on("messageCreate", (message: Message) => {
  console.log("Received message", message.content);
  if (message.author.bot) return;
  if (message.content === "ping rupiko") {
    console.log("Sending pong");
    message.reply("pong");
  } else if (message.content === "ping") {
    console.log("Sending pong");
    sendMessage(message, "pong");
  } else {
    console.log("Received message", message.content);
    sendMessage(message, "ほげほげ");
  }
});

const sendMessage = (message: Message, sendContent: string) => {
  const channel = message.channel;
  if (channel && channel instanceof TextChannel) {
    channel.send(sendContent);
  }
}

client.login(process.env.TOKEN);
