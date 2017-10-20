import { Book } from "../src/Book";
import { Catalog } from "../src/Catalog";
import { default as data } from "../src/lib/CatalogData";
import { Magazine } from "../src/Magazine";

// rename this to sut?
let catalog: Catalog<Book | Magazine>;

beforeEach(() => {
    catalog = new Catalog();
});

describe("Catalog", () => {

    describe("Add", () => {
        it("adds a book ", () => {
            catalog.add(data.GetSingleBook());
            expect(catalog.count()).toEqual(1);
        });
        it("adds a magazine ", () => {
            catalog.add(data.GetSingleMagazine());
            expect(catalog.count()).toEqual(1);
        });
    });

    describe("AddMany", () => {
        it("adds Books", () => {
            catalog.addMany(data.GetFourBooks());
            expect(catalog.count()).toEqual(4);
        });
        it("adds Magazines", () => {
            catalog.addMany(data.GetTwoMagazines());
            expect(catalog.count()).toEqual(2);
        });
    });

    describe("Remove", () => {
        it("removes a publication", () => {

            catalog.addMany(data.GetTwoMagazines());
            catalog.addMany(data.GetFourBooks());
            expect(catalog.count()).toEqual(6);

            let removeBook = catalog.remove(1, "book");

            expect(removeBook).toEqual(true);
            expect(catalog.count()).toEqual(5);

            let removeMagazine = catalog.remove(1, "magazine");

            expect(removeMagazine).toEqual(true);
            expect(catalog.count()).toEqual(4);

            removeBook = catalog.remove(1, "book");

            expect(removeBook).toEqual(false);
            expect(catalog.count()).toEqual(4);

            removeMagazine = catalog.remove(1, "magazine");

            expect(removeMagazine).toEqual(false);
            expect(catalog.count()).toEqual(4);
        });
    });

    describe("GetByType", () => {

        beforeEach(() => {
            catalog.addMany(data.GetTwoMagazines());
            catalog.addMany(data.GetFourBooks());
        });

        it("returns Books", () => {

            const books = catalog.getByType("book");
            expect(books.length).toEqual(4);

            books.forEach((book) => {
                expect(book.type).toEqual("book");
                const genre = (book as Book).genre;
                expect(genre).toBeDefined();
            });
        });

        it("returns Magazines", () => {
            const magazines = catalog.getByType("magazine");
            expect(magazines.length).toEqual(2);
            magazines.forEach((mag) => {
                expect(mag.type).toEqual("magazine");
                const frequency = (mag as Magazine).frequency;
                expect(frequency).toBeDefined();
            });

        });
    });

    describe("GetBooks", () => {
        it("returns only Books", () => {
            catalog.addMany(data.GetTwoMagazines());
            catalog.addMany(data.GetFourBooks());

            const books = catalog.getBooks();
            expect(books.length).toEqual(4);
            books.forEach((book) => {
                expect(book.type).toEqual("book");
                expect(book.genre).toBeDefined();
                expect(book.author).toBeDefined();
            });
        });
    });

    describe("getMagazines", () => {
    it("returns only Magazines", () => {
        catalog.addMany(data.GetTwoMagazines());
        catalog.addMany(data.GetFourBooks());

        const mags = catalog.getMagazines();
        expect(mags.length).toEqual(2);
        mags.forEach((mag) => {
            expect(mag.type).toEqual("magazine");
            expect(mag.frequency).toBeDefined();
        });
    });
    });
});
