import commandInteractionHandler from "../Handler/commandInteractionHandler.js";
import modalHandler from "../Handler/modalHandler.js";

/**
 * @param {import("discord.js").Client} client
 */

export default async interaction => {

    if (interaction.isModalSubmit()) return modalHandler(interaction);
    if (interaction.isChatInputCommand) return commandInteractionHandler(interaction);

};