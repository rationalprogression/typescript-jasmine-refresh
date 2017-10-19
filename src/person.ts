import { IPerson } from "./interfaces/iperson";

export class Person implements IPerson {
    public id: number;
    public name: string;
    public age: number;
}
