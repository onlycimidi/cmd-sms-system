import nodemailer from "nodemailer";
import logger from "./logger.js";
import config from "../../config.js";

const port = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: config.simple.gmail.from,
        pass: config.simple.gmail.password,
    },
});

/**
 *
 * @param {Content_from_mail} content
 */

export default (content) => {
    const op = {
        from: config.simple.gmail.from,
        to: config.simple.gmail.to,
        subject: "CMD Mail System",
        text: content,
    };

    port.sendMail(op, (err) => {
        if (err) logger.error(err);
    });
};
