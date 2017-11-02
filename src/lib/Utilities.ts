import { v4 } from "uuid";

export default class Utilities {

    public static generateId(): string {
        return v4();
    }

    public static applyMixins(derivedCtor: any, baseCtors: any[]) {
        baseCtors.forEach((baseCtor) => {
            Object.getOwnPropertyNames(baseCtor.prototype).forEach((name) => {
                derivedCtor.prototype[name] = baseCtor.prototype[name];
            });
        });
    }
}
