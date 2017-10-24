import { v4 } from "uuid";
import { Book } from "../src/Book";
import { default as Guards } from "../src/Guards";
import { Magazine } from "../src/Magazine";

describe("Guards", () => {

    describe("isBook", () => {
        it("returns true for a book", () => {
            const book = new Book();
            expect(Guards.isBook(book)).toBe(true);
        });
        it("returns false for a magazine", () => {
            const mag = new Magazine();
            expect(Guards.isBook(mag)).toBe(false);
        });
        it("returns false for a number", () => {
            const i: number = 42;
            expect(Guards.isBook(i)).toBe(false);
        });
    });

    describe("isIdentifiable", () => {
        it("returns true for an object with an id that is a uuid", () => {
            const sample = {
                id:  v4(),
            };
            expect(Guards.isIdentifiable(sample)).toBe(true);
        });
        it("returns false for an object with an id that is null", () => {
            const sample = {
                id:  null,
            };
            expect(Guards.isIdentifiable(sample)).toBe(false);
        });
        it("returns false for an object with an id that is undefined", () => {
            const sample = {
                id:  undefined,
            };
            expect(Guards.isIdentifiable(sample)).toBe(false);
        });
        it("returns false for an object with an id that is not a uuid", () => {
            const sample = {
                id: "not an id",
            };
            expect(Guards.isIdentifiable(sample)).toBe(false);
        });
    });
});
