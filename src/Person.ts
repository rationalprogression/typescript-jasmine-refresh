import { IPerson } from "./interfaces/IPerson";

export class Person implements IPerson {
    public id: string;
    public name: string;
    public age: number;
}
