import Vonage from "@vonage/server-sdk";
import config from "../../config.js";
import logger from "./logger.js";

const CekiApi = new Vonage({
    apiKey: config.simple.sms.apiKey,
    apiSecret: config.simple.sms.apiSecret,
});

/**
 * @param {sms_message} content
 */

export default (content) => {
    CekiApi.message.sendSms(
        config.simple.sms.virtualNumber,
        config.simple.sms.phoneNumber,
        content,
        (err, data) => {
            if (err) logger.error(err);
            else {
                if (data.messages[0]["status"] === "0") {
                    logger.log(
                        `${config.simple.sms.phoneNumber} Numarasına Mesaj Başarıyla Gönderildi. CMD. was here`
                    );
                } else {
                    logger.error(
                        `Mesaj gönderilirken bir hata ile karşılaşıldı: ${data.messages[0]["error-text"]}`
                    );
                }
            }
        }
    );
};
