import { formatNumber } from "../Structures/Utils/functions.js";
import { ActivityType } from "discord.js";

/**
 * @param {import("discord.js").Client} client
 */

export default client => {

    setInterval(async () => {

        Promise.all([
            client.shard.fetchClientValues("guilds.cache.size")
                .then((shards) => shards.reduce((prev, val) => prev + val, 0)),
            client.shard.broadcastEval(c => {
                return c.guilds.cache.reduce((prev, g) => prev + g.memberCount, 0);
            }).then((shards) => shards.reduce((prev, val) => prev + val, 0)),
        ]).then(([totalServers, totalUsers]) => {

            totalServers = formatNumber(String(totalServers));
            totalUsers = formatNumber(String(totalUsers));

            client.user.setActivity({
                name: `${totalServers} servers & ${totalUsers} users! | Shard: ${client.shard.ids[0] + 1}`,
                type: ActivityType.Listening
            });

        });

    }, 120000);

}