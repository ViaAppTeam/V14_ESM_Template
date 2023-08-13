import Soulcore from "./Structures/Client.js";

import { EmbedBuilder } from "discord.js";

const client = new Soulcore();
client.loadCommands();
client.loadEvents();
client.start();

client.on("messageCreate", message => {
  if (message.content === `<@${message.client.user.id}>`) {

    const embedetiket = new EmbedBuilder()
      .setColor('#2b2d31')
      .setAuthor({ name: message.client.user.username })
      .setImage('https://cdn.discordapp.com/attachments/1134203995079053493/1140337912551059477/20230808_150141_0000.png')
      .setThumbnail('https://cdn.discordapp.com/attachments/1134203995079053493/1140337912769159178/IMG_20230808_010334_984.jpg')
      .setDescription(`<:B2C8422A84ED4784A0EBCD075D8996CF:1131369009166692442> Selam ben Soulcore ESM Boş Altyapı!`)

    message.reply({ embeds: [embedetiket] }).then(msg => { setTimeout(() => { if (msg?.deletable) msg.delete().catch(() => { }); }, 10000); });

  };

});