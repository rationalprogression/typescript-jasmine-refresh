import { v4 } from "uuid";

export default class Utilities {
    public static Log(input: any) {
        // tslint:disable-next-line:no-console
        console.log(input);
    }

    public static GenerateId(): string {
        return v4();
    }
}
