import chalk from "chalk";

export enum LogLevel {
    LOG = "log",
    DEBUG = "debug",
    VERBOSE = "verbose",
    WARN = "warn",
    ERROR = "error",
}

export class Logger {

    constructor(private context?: string) { }

    private getTimestamp() {
        return new Date().toLocaleString().toUpperCase();
    }

    private getColorByLogLevel(level: LogLevel) {
        let colorMap: Record<LogLevel, Function>;

        colorMap = {
            [LogLevel.LOG]: chalk.green,
            [LogLevel.DEBUG]: chalk.cyan,
            [LogLevel.WARN]: chalk.yellow,
            [LogLevel.ERROR]: chalk.red,
            [LogLevel.VERBOSE]: chalk.green,
        }

        return colorMap[level] || chalk.whiteBright;
    }

    private formatMessage( message: any, level: LogLevel, context?: string ){
        const color = this.getColorByLogLevel(level);
        const tecnnology = color("[Node]");
        const timestamp = chalk.whiteBright(this.getTimestamp());
        const proccessId = color(`${process.pid} -`);
        const logLevel = color(level.toUpperCase());
        const contextMessage = (context??this.context) 
         ? chalk.yellow(`[${context??this.context}]`)
         : "";

        const messageLog = color(message);

        return `${tecnnology} ${proccessId} ${timestamp}  ${logLevel} ${contextMessage} ${messageLog}`;
    }

    log(message: any, context?: string) {
        console.log(this.formatMessage(message, LogLevel.LOG, context))
    }

    error(message: any, context?: string) {
        console.error(this.formatMessage(message, LogLevel.ERROR, context))
    }

    debug(message: any, context?: string) {
        console.log(this.formatMessage(message, LogLevel.DEBUG, context))
    }

    verbose(message: any, context?: string) {
        console.log(this.formatMessage(message, LogLevel.VERBOSE, context))
    }

    warn(message: any, context?: string) {
        console.warn(this.formatMessage(message, LogLevel.WARN, context))
    }
}

// Instancia global
export const logger = new Logger();