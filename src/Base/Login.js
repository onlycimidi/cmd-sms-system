import config from "../../config.js";

class Login {
    static async On() {
        global.client
            .login(config.bot.token)
            .then((x) =>
                console.log(
                    `${global.client.user.username} olarak discord API bağlantısı kuruldu.`
                )
            )
            .catch((err) =>
                console.log("Discord API Botun tokenini doğrulayamadı.")
            );
    }
}

export default Login;
