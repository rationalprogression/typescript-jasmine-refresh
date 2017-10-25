export default class Logger {

    public static info(input: any) {
        // tslint:disable-next-line:no-console
        console.info(input);
    }

    public static debug(input: any) {
        // tslint:disable-next-line:no-console
        console.debug(input);
    }

    public static warning(input: any) {
        // tslint:disable-next-line:no-console
        console.warn(input);
    }

    public static error(input: any) {
        // tslint:disable-next-line:no-console
        console.error(input);
    }
}
