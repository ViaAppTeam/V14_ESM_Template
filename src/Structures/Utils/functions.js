export const formatNumber = (number) => {
    var returnNumber = number;

    if (number >= 1000000000) {
        returnNumber = `${(number / 1000000000).toFixed(1)}b`;
    } else if (number >= 1000000) {
        returnNumber = `${(number / 1000000).toFixed(1)}m`;
    } else if (number >= 1000) {
        returnNumber = `${(number / 1000).toFixed(1)}k`;
    };

    if (parseInt(returnNumber.slice(0, -1)) == returnNumber.slice(0, -1))
        returnNumber = `${parseInt(returnNumber.slice(0, -1))}${returnNumber[returnNumber.length - 1]
            }`;

    return returnNumber;
};

export async function interactionResponse(interaction, options) {
    if (interaction.deferred || interaction.replied) return await interaction.editReply(options);
    else await interaction.reply(options);
};