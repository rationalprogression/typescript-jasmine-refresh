import { v4 } from "uuid";

export default class Utilities {

    public static generateId(): string {
        return v4();
    }
}
