const config = {
    bot: {
        token: "",
        Defender_log: "",
    },
    simple: {
        gmail: {
            from: "", // hangi gmailden gideceği
            to: "", // hangi gmaile gideceği
            password: "", //gönderen gmail şifresi
        },
        sms: {
            phoneNumber: "/", // smsin gideceği numara
            apiKey: "", // nexmo api key
            apiSecret: "", // nexmo api secret
            virtualNumber: "Vonage APIs", // elleme
        },
    },
};

export default config;
