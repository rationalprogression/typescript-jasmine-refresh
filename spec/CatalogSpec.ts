import { Book } from "../src/Book";
import { Catalog } from "../src/Catalog";
import { default as data } from "../src/lib/CatalogData";
import { default as utils } from "../src/lib/Utilities";
import { Magazine } from "../src/Magazine";

let catalog: Catalog<Book | Magazine>;

beforeEach(() => {
    catalog = new Catalog();
});

describe("Catalog", () => {

    describe("Add", () => {
        it("adds a book", () => {
            catalog.add(data.GetSingleBook());
            expect(catalog.count()).toEqual(1);
        });
        it("adds multiple books", () => {
            catalog.add(data.GetSingleBook(), data.GetSingleBook(), data.GetSingleBook());
            expect(catalog.count()).toEqual(3);
            catalog.add(data.GetSingleBook(), ...data.GetFourBooks());
            expect(catalog.count()).toEqual(8);
        });
        it("adds a magazine ", () => {
            catalog.add(data.GetSingleMagazine());
            expect(catalog.count()).toEqual(1);
        });
        it("adds multiple magazines", () => {
            catalog.add(data.GetSingleMagazine(), data.GetSingleMagazine());
            expect(catalog.count()).toEqual(2);
            catalog.add(data.GetSingleMagazine(), ...data.GetTwoMagazines());
            expect(catalog.count()).toEqual(5);
        });
        it("does not add null", () => {
            catalog.add(null);
            expect(catalog.count()).toEqual(0);
            catalog.add(data.GetSingleMagazine(), null);
            expect(catalog.count()).toEqual(1);
        });
        it("does not add undefined", () => {
            catalog.add(undefined);
            expect(catalog.count()).toEqual(0);
            catalog.add(data.GetSingleMagazine(), undefined);
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
            let remove = catalog.remove("not an id");
            expect(remove).toEqual(false);
            remove = catalog.remove(utils.GenerateId());
            expect(remove).toEqual(false);
        });
        it("removes a Book from the catalog", () => {
            const books = data.GetFourBooks();
            catalog.addMany(data.GetTwoMagazines());
            catalog.addMany(books);
            const removeBook = catalog.remove(books[0].id);
            expect(removeBook).toEqual(true);
            expect(catalog.count()).toEqual(5);
        });
        it("removes a Magazine from the catalog", () => {
            const mags = data.GetTwoMagazines();
            catalog.addMany(mags);
            catalog.addMany(data.GetFourBooks());
            const removeMagazine = catalog.remove(mags[1].id);
            expect(removeMagazine).toEqual(true);
            expect(catalog.count()).toEqual(5);
        });
        it("does not remove a Book not in the catalog", () => {
            catalog.addMany(data.GetTwoMagazines());
            catalog.addMany(data.GetFourBooks());
            const removeBook = catalog.remove(utils.GenerateId());
            expect(removeBook).toEqual(false);
            expect(catalog.count()).toEqual(6);
        });
        it("does not remove a Magazine not in the catalog", () => {
            catalog.addMany(data.GetTwoMagazines());
            catalog.addMany(data.GetFourBooks());
            const remove = catalog.remove(utils.GenerateId());
            expect(remove).toEqual(false);
            expect(catalog.count()).toEqual(6);
        });
    });

    describe("Get", () => {
        it("Returns undefined if parameter is null", () => {
            const result = catalog.get(null);
            expect(result).toBeUndefined();
        });
        it("Returns undefined if parameter is undefined", () => {
            const result = catalog.get(undefined);
            expect(result).toBeUndefined();
        });
        it("Returns undefined if catalog is empty", () => {
            const result = catalog.get("id");
            expect(result).toBeUndefined();
        });
        it("Returns undefined if the item is not in catalog", () => {
            catalog.addMany(data.GetTwoMagazines());
            const result = catalog.get(utils.GenerateId());
            expect(result).toBeUndefined();
        });
        it("Returns the item if the item is in the catalog", () => {
            const mags = data.GetTwoMagazines();
            catalog.addMany(mags);
            const result = catalog.get(mags[0].id);
            expect(result).toEqual(mags[0]);
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
