import { IPerson } from "./interfaces/IPerson";
import { Identifiable } from "./lib/Identifiable";

export class Person extends Identifiable implements IPerson {
    public name: string;
    public age: number;
}
