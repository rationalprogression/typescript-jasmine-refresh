import * as validator from "validator";
import { Address } from "../src/Address";

describe("Address", () => {
    it("id is autogenerated", () => {
        const address = new Address("street", "zipCode", "city", "country");
        expect(address.id).toBeDefined();
        expect(validator.isUUID(address.id)).toBe(true);
    });
    it("properties can only be set in the constructor", () => {
        const address = new Address("street", "zipCode", "city", "country");
        // error TS2540: Cannot assign to 'city' because it is a constant or a read-only property.
        // address.city = "another city";
    });
});