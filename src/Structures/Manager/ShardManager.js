import config from "../../Config/config.js";
import("advanced-logs");

import { ShardingManager } from "discord.js";

const manager = new ShardingManager("./src/index.js", { token: config.client.token })

manager.spawn()
    .then(() => {
        console.success(`[+] Soulcore Successfully Connected.`);
    });