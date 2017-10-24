import { v4 } from "uuid";

export default class Utilities {
    public static log(input: any) {
        // tslint:disable-next-line:no-console
        console.log(input);
    }

    public static generateId(): string {
        return v4();
    }
}
