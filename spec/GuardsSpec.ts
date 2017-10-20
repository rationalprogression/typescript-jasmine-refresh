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
        it("returns true for a book with an id", () => {
            const book = new Book();
            book.id = 1;
            expect(Guards.IsIdentifiable(book)).toBe(true);
        });
        it("returns false for a book without an id", () => {
            const book = new Book();
            expect(Guards.IsIdentifiable(book)).toBe(false);
        });
        it("returns false for a string", () => {
            const name = "a string";
            expect(Guards.IsIdentifiable(name)).toBe(false);
        });
    });
});
