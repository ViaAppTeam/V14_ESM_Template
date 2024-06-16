import { EmbedBuilder } from "discord.js";

export const data = {
  name: "ping",
  description: "Botun geçikmesini gösterir",

  async execute(interaction) {

    const { client } = interaction;

    const embed = new EmbedBuilder()
      .setAuthor({ name: "ES6 Module Template", iconURL: client.user.displayAvatarURL({ dynamic: true }) })
      .setDescription(`ES6 Module Template Delay: ${client.ws.ping}`)
      .setColor("#2b2d31")
      .setFooter({ text: 'Required by', iconURL: interaction.user.displayAvatarURL({ dynamic: true }) })
      .setTimestamp()
    interaction.reply({ embeds: [embed], ephemeral: true });

  }
}
