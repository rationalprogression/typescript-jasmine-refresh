import { Book } from "../src/Book";
import { Genre } from "../src/enums/Genre";

let book: Book;

describe("Book", () => {
    it("Display returns Unspecified values for undefined properties", () => {
        book = new Book();
        expect(book.display).toBe("Unspecified - Unspecified - Unspecified");
    });

    it("Display returns property values for defined properties", () => {
        book = new Book();
        book.author = "Neal Stephenson";
        book.title = "Cryptonomicon";
        book.genre = Genre.ScienceFiction;
        expect(book.display).toBe("Cryptonomicon - Neal Stephenson - ScienceFiction");
    });
});
