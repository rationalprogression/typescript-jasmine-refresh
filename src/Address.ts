import { IIdentifier } from "./interfaces/IIdentifier";
import { default as utils } from "./lib/Utilities";

export class Address implements IIdentifier {
    public readonly id: string = utils.generateId();
    constructor(public readonly street: string, public readonly zipCode: string,
                public readonly city: string, public readonly country: string) {
    }
}
