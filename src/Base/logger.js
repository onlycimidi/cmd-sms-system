import moment from "moment";
moment.locale("tr");
const timestamp = `[${moment(Date.now()).format("LLL")}]:`;

class Logger {
    static log(content, type) {
        console.log(`${timestamp} ${content} ${type ? type : ""}`);
    }

    static error(content) {
        this.log(content, " [error]");
    }

    static warn(content) {
        this.log(content, " [warn]");
    }

    static debug(content) {
        this.log(content, " [debug]");
    }

    static cmd(content) {
        this.log(content, " [cmd]");
    }
}

export default Logger;
