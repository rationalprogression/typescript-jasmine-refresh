import { Book } from "../src/book";
import { Collection } from "../src/collection";
import * as utils from "../src/lib/utilities";
import { Magazine } from "../src/magazine";

let collection: Collection<Book | Magazine>;

beforeEach(() => {
    collection = new Collection();
});
describe("Collection", () => {

    it("should allow adding a publication ", () => {

        collection.add(utils.GetSingleMagazine());
        expect(collection.count()).toBe(1);

        collection.add(utils.GetSingleBook());
        expect(collection.count()).toBe(2);

    });

    it("should allow adding books", () => {

        collection.addMany(utils.GetFourBooks());
        expect(collection.count()).toBe(4);

    });

    it("should allow adding magazines", () => {

        collection.addMany(utils.GetTwoMagazines());
        expect(collection.count()).toBe(2);

    });

    it("should allow removing a publication", () => {

        collection.addMany(utils.GetTwoMagazines());
        collection.addMany(utils.GetFourBooks());
        expect(collection.count()).toBe(6);

        let removeBook = collection.remove(1, "book");

        expect(removeBook).toBe(true);
        expect(collection.count()).toBe(5);

        let removeMagazine = collection.remove(1, "magazine");

        expect(removeMagazine).toBe(true);
        expect(collection.count()).toBe(4);

        removeBook = collection.remove(1, "book");

        expect(removeBook).toBe(false);
        expect(collection.count()).toBe(4);

        removeMagazine = collection.remove(1, "magazine");

        expect(removeMagazine).toBe(false);
        expect(collection.count()).toBe(4);
    });

    it("should allow get by publicationtype", () => {

        collection.addMany(utils.GetTwoMagazines());
        collection.addMany(utils.GetFourBooks());
        expect(collection.count()).toBe(6);

        const books = collection.getByType("book");
        expect(books.length).toBe(4);

        books.forEach((book) => {
            expect(book.type).toBe("book");
            // can we cast it?
            expect(book.genre).toBeDefined();
            expect(book.author).toBeDefined();
        });
    });

    it("should allow getting books", () => {
        collection.addMany(utils.GetTwoMagazines());
        collection.addMany(utils.GetFourBooks());

        const books = collection.getBooks();
        expect(books.length).toBe(4);
        books.forEach((book) => {
            expect(book.type).toBe("book");
            expect(book.genre).toBeDefined();
            expect(book.author).toBeDefined();
        });
    });

    it("should allow getting magazined", () => {
        collection.addMany(utils.GetTwoMagazines());
        collection.addMany(utils.GetFourBooks());

        const mags = collection.getMagazines();
        expect(mags.length).toBe(2);
        mags.forEach((mag) => {
            expect(mag.type).toBe("magazine");
            expect(mag.frequency).toBeDefined();
        });
    });
});
