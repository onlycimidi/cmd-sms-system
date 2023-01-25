import { readdir, readdirSync } from "fs";

class Load {
    static async LoadEvents(Path) {
        readdir(Path, (err, files) => {
            if (err) global.client.logger.error(err);
            files.forEach(async (file) => {
                const prop = await import(`../events/${file}`).then(
                    (modules) => modules.default
                );
                if (!prop) return;
                prop(global.client);
            });
        });
    }

    static async fetchEvents(event) {
        const prop = require("../events/" + event);
        if (!prop.info) return;
        global.client.on(prop.info.name, prop.operate);
        global.client.logger.cmd(
            `[CMD - PRIVATE - EVENT] ${prop.info.name} loaded!`
        );
    }
}

export default Load;
