import { v4 } from "uuid";
import { Book } from "../src/Book";
import { default as Guards } from "../src/Guards";
import { Magazine } from "../src/Magazine";

describe("Guards", () => {

    describe("IsBook", () => {
        it("returns true for a book", () => {
            const book = new Book();
            expect(Guards.IsBook(book)).toBe(true);
        });
        it("returns false for a magazine", () => {
            const mag = new Magazine();
            expect(Guards.IsBook(mag)).toBe(false);
        });
        it("returns false for a number", () => {
            const i: number = 42;
            expect(Guards.IsBook(i)).toBe(false);
        });
    });

    describe("IsIdentifiable", () => {
        it("returns true for an object with an id that is a uuid", () => {
            const sample = {
                id:  v4(),
            };
            expect(Guards.IsIdentifiable(sample)).toBe(true);
        });
        it("returns false for an object with an id that is null", () => {
            const sample = {
                id:  null,
            };
            expect(Guards.IsIdentifiable(sample)).toBe(false);
        });
        it("returns false for an object with an id that is undefined", () => {
            const sample = {
                id:  undefined,
            };
            expect(Guards.IsIdentifiable(sample)).toBe(false);
        });
        it("returns false for an object with an id that is not a uuid", () => {
            const sample = {
                id: "not an id",
            };
            expect(Guards.IsIdentifiable(sample)).toBe(false);
        });
    });
});
