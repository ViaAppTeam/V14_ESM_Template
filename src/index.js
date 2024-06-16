import ViaAppTeam from "./Structures/Client.js";

import { EmbedBuilder } from "discord.js";

const client = new ViaAppTeam();
client.loadCommands();
client.loadEvents();
client.start();
