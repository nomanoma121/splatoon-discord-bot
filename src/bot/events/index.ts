import { Client } from "discord.js";
import { ready } from "./ready";
import { interactionCreate } from "./interactionCreate";
import { voiceStateUpdate } from "./voice-state-update";

export function registerEvents(client: Client) {
  client.once("ready", ready);
  client.on("interactionCreate", interactionCreate);
  voiceStateUpdate(client);
}
