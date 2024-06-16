import config from "../Config/config.js";
import { readdir, readdirSync } from "fs";
import { Client, GatewayIntentBits, Partials, Collection, ActivityType } from "discord.js";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const emojis = require("../Config/emojis.json");

export default class ViaAppTeam extends Client {
    constructor() {
        super({
            intents: [
                GatewayIntentBits.Guilds,
                GatewayIntentBits.GuildMembers,
                GatewayIntentBits.GuildMessages,
                GatewayIntentBits.GuildMessageReactions,
                GatewayIntentBits.DirectMessages,
                GatewayIntentBits.DirectMessageReactions,
                GatewayIntentBits.MessageContent
            ],
            partials: [
                Partials.Channel,
                Partials.Message,
                Partials.GuildMember,
                Partials.GuildScheduledEvent,
                Partials.Reaction,
                Partials.User,
                Partials.ThreadMember
            ],
            allowedMentions: {
                parse: [
                    "everyone",
                    "roles",
                    "users"
                ]
            },
            presence: {
                status: "online",
                activities: [
                    {
                        name: "Bot is starting...",
                        type: ActivityType.Listening
                    },
                ]
            }
        });

        /**
         * @constructor
         * @param  {discord.Client} client
         */


        import("advanced-logs");
        this.commands = new Collection();
        this.config = global.config = import("../Config/config.js");
        this.emoji = emoji_name => emoji_name in emojis ? emojis[emoji_name] : "🎉";

    }

    async loadCommands() {

        const commands = [];

        for (const dir of readdirSync("./src/Commands")) {
            for (const file of readdirSync(`./src/Commands/${dir}`)) {

                const command = await import(`../Commands/${dir}/${file}`);
                this.commands.set(command.data.name, command.data);
                commands.push(command.data)

            }
        }

        this.on("ready", () => {
            this.application.commands.set(commands)
                .catch(err => console.error(err));
        });

    };

    async loadEvents() {

        readdir("./src/Events", { encoding: "utf-8" }, (err, files) => {

            if (err) return console.error(err);

            files.filter(x => x.endsWith(".js"))
                .forEach(file => {
                    const eventName = file.split(".")[0];
                    if (eventName == "ready")
                        this.on(eventName, (client) => {
                            import(`../Events/${file}`).then(x => x.default(this));
                        })
                    else
                        this.on(eventName, (...args) => {
                            import(`../Events/${file}`).then(x => x.default(...args));
                        });
                });

        })

    };

    async start() {

        this.login(config.client.token)
            .catch((err) => {
                console.error(`[-] Soulcore No Connection. Error: ${err}`);
            });

    };

}
