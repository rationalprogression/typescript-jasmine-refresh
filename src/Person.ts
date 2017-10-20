import { IPerson } from "./interfaces/IPerson";

export class Person implements IPerson {
    public id: number;
    public name: string;
    public age: number;
}
