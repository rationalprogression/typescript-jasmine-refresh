import * as validator from "validator";
import { Magazine } from "../src/Magazine";

let magazine: Magazine;

describe("Magazine", () => {
    it("Id is auto generated", () => {
        magazine = new Magazine();
        expect(magazine.id).toBeDefined();
        expect(validator.isUUID(magazine.id)).toBe(true);
    });
});
