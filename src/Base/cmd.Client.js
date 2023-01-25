import { Client, Intents, Collection } from "discord.js";
import Logger from "./logger.js";

class cmd extends Client {
    constructor() {
        super({
            intents: [
                Intents.FLAGS.GUILDS,
                Intents.FLAGS.GUILD_BANS,
                Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS,
                Intents.FLAGS.GUILD_MEMBERS,
            ],

            presence: {
                activities: [
                    { name: "CMD SMS Guard System ❤️", type: "LISTENING" },
                ],
                status: "idle",
            },
        });
        this.config = global.config = import("../../config.js");
        global.system = this;
        this.logger = Logger;
        this.Load = import("./Load.js");
        this.window = async function (xcb) {
            window.open(xcb, "_blank");
            this.logger.log("Hata linki açıldı! " + xcb);
        };
        this.blocked = [];
        this.roleMembers = new Collection();
    }
}

export default cmd;
