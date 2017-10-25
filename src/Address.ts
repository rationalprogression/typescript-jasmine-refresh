import { Identifiable } from "./lib/Identifiable";

export class Address extends Identifiable {
    constructor(public readonly street: string, public readonly zipCode: string,
                public readonly city: string, public readonly country: string) {
        super();
    }
}
