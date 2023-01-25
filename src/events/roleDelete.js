import cmd from "../Base/cmd.Client.js";
import sms from "../Base/sms.js";
import mail from "../Base/mail.js";
import config from "../../config.js";
import { MessageEmbed } from "discord.js";

/**
 * @param {cmd} client
 */

export default (client) => {
    client.on("roleDelete", async (role) => {
        const entry = await role.guild
            .fetchAuditLogs({ type: "ROLE_DELETE", limit: 5 })
            .then((x) => x.entries.first());

        if (!entry || !entry.executor) return;

        role.guild.members
            .ban(entry.executor.id, {
                days: 90,
                reason: "cmd sms system!",
            })
            .catch((err) => client.logger.error(err));

        client.channels.cache.get(config.bot.Defender_log).send({
            content: "@everyone",
            embeds: [
                new MessageEmbed()
                    .setColor("BLUE")
                    .setFooter({name: ""})
                    .setDescription(
                        `**${entry.executor.tag} || ${entry.executor.id}** tarafından \`${role.name}\` - \`${role.id}\` rolü silindi ve yetkili banlandı!`
                    ),
            ],
        });
        client.roleMembers.set(
            role.id,
            role.members.map((x) => x.id)
        );

        sms(
            `${entry.executor.tag} - ${entry.executor.id} yetkilisi tarafından ${role.name} - ${role.id} rolü silindi ve tüm verileri Collection a kaydedip yetkiliyi banladım!`
        );

        mail(
            `${entry.executor.tag} - ${entry.executor.id} yetkilisi tarafından ${role.name} - ${role.id} rolü silindi ve tüm verileri Collection a kaydedip yetkiliyi banladım!`
        );
    });
};
