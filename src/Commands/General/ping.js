import { EmbedBuilder } from "discord.js";

export const data = {
  name: "ping",
  description: "Botun geçikmesini gösterir",

  async execute(interaction) {

    const { client } = interaction;

    const embed = new EmbedBuilder()
      .setAuthor({ name: "Soulcore", iconURL: client.user.displayAvatarURL({ dynamic: true }) })
      .setDescription(`Soulcore ESM Bot Template Delay: ${client.ws.ping}`)
      .setColor("#2b2d31")
      .setFooter({ text: 'Tarafından istendi', iconURL: interaction.user.displayAvatarURL({ dynamic: true }) })
      .setTimestamp()
    interaction.reply({ embeds: [embed], ephemeral: true });

  }
}