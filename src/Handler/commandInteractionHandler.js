import { EmbedBuilder } from "discord.js";

/**
 * @param {import("discord.js").ChatInputCommandInteraction} interaction 
 */

export default async interaction => {

    const { client } = interaction;

    const command = client.commands.get(interaction.commandName);

    if (command) {

        // Maintenance
        if (command.maintenance) {
            return interaction.reply({
                embeds: [
                    new EmbedBuilder()
                        .setColor("#2b2d31")
                        .setDescription(`Bot şu anda bakımda!`)
                ],
                ephemeral: true
            })
        };
        try {
            await command.execute(interaction);
        } catch (error) {
            interaction.client.emit("errorHandler", error, interaction);
        };

    };

};