import * as validator from "validator";
import { Article } from "../src/Article";
import { Magazine } from "../src/Magazine";

let magazine: Magazine;

describe("Magazine", () => {
    it("Id is auto generated", () => {
        magazine = new Magazine();
        expect(magazine.id).toBeDefined();
        expect(validator.isUUID(magazine.id)).toEqual(true);
    });
    it("Published is false by default", () => {
        expect(magazine.isPublished).toEqual(false);
        expect(magazine.publicationDate).toBeUndefined();
    });
    it("Published is set to true on publish", () => {
        magazine.publish();
        expect(magazine.isPublished).toEqual(true);
    });
    it("Allows adding articles and publishing using a fluent interface", () => {
        const article = new Article();
        const mag = magazine.add(article).publish();
        expect(mag).toBe(magazine);
        expect(mag.articles.length).toEqual(1);
        expect(mag.isPublished).toEqual(true);
    });
});
