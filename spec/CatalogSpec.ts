import { Book } from "../src/Book";
import { Catalog } from "../src/Catalog";
import { default as data } from "../src/lib/CatalogData";
import { Magazine } from "../src/Magazine";

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

        it("returns false if no publications in catalog", () => {

            let remove = catalog.remove(1, "book");
            expect(remove).toEqual(false);

            remove = catalog.remove(22, "magazine");
            expect(remove).toEqual(false);

        });

        it("removes a Book from the catalog", () => {

            catalog.addMany(data.GetTwoMagazines());
            catalog.addMany(data.GetFourBooks());

            const removeBook = catalog.remove(2, "book");

            expect(removeBook).toEqual(true);
            expect(catalog.count()).toEqual(5);

        });

        it("removes a Magazine from the catalog", () => {

            catalog.addMany(data.GetTwoMagazines());
            catalog.addMany(data.GetFourBooks());

            const removeMagazine = catalog.remove(1, "magazine");

            expect(removeMagazine).toEqual(true);
            expect(catalog.count()).toEqual(5);

        });

        it("does not remove a Book not in the catalog", () => {

            catalog.addMany(data.GetTwoMagazines());
            catalog.addMany(data.GetFourBooks());

            const removeBook = catalog.remove(78, "book");

            expect(removeBook).toEqual(false);
            expect(catalog.count()).toEqual(6);

        });

        it("does not remove a Magazine not in the catalog", () => {

            catalog.addMany(data.GetTwoMagazines());
            catalog.addMany(data.GetFourBooks());

            const remove = catalog.remove(200, "magazine");

            expect(remove).toEqual(false);
            expect(catalog.count()).toEqual(6);

        });
    });

    describe("GetByType", () => {

        it("returns empty list if type not in catalog", () => {

            const books = catalog.getByType("book");
            expect(books.length).toEqual(0);

            const magazines = catalog.getByType("magazine");
            expect(magazines.length).toEqual(0);

        });

        it("returns Books", () => {

            catalog.addMany(data.GetTwoMagazines());
            catalog.addMany(data.GetFourBooks());

            const books = catalog.getByType("book");
            expect(books.length).toEqual(4);

            books.forEach((book) => {
                expect(book.type).toEqual("book");
                const genre = (book as Book).genre;
                expect(genre).toBeDefined();
            });
        });

        it("returns Magazines", () => {

            catalog.addMany(data.GetTwoMagazines());
            catalog.addMany(data.GetFourBooks());

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

        it("returns an empty list if no books in catalog", () => {

            let books = catalog.getBooks();
            expect(books.length).toEqual(0);

            catalog.addMany(data.GetTwoMagazines());

            books = catalog.getBooks();
            expect(books.length).toEqual(0);

        });

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

    describe("GetMagazines", () => {

        it("returns an empty list if no magazines in catalog", () => {

            let magazines = catalog.getMagazines();
            expect(magazines.length).toEqual(0);

            catalog.addMany(data.GetFourBooks());
            magazines = catalog.getMagazines();

        });

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
