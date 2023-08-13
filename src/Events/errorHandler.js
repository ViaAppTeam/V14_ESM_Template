import { interactionResponse } from "../Structures/Utils/functions.js";

/**
 * @param {Object | String} error
 * @param {import("discord.js").BaseInteraction | import("discord.js").Message} interaction
 */

export default (error, interaction = null) => {

    if (interaction) {
        const locale = interaction.locale || interaction?.guild?.preferredLocale
        interactionResponse(interaction, { content: "Bir hata oluştu lütfen geliştiricilere bildirin.", ephemeral: true });
    };

    console.log(error);

};