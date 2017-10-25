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

    describe("add", () => {
        it("adds a book", () => {
            catalog.add(data.getSingleBook());
            expect(catalog.count()).toEqual(1);
        });
        it("adds multiple books", () => {
            catalog.add(data.getSingleBook(), data.getSingleBook(), data.getSingleBook());
            expect(catalog.count()).toEqual(3);
            catalog.add(data.getSingleBook(), ...data.getFourBooks());
            expect(catalog.count()).toEqual(8);
        });
        it("adds a magazine ", () => {
            catalog.add(data.getSingleMagazine());
            expect(catalog.count()).toEqual(1);
        });
        it("adds multiple magazines", () => {
            catalog.add(data.getSingleMagazine(), data.getSingleMagazine());
            expect(catalog.count()).toEqual(2);
            catalog.add(data.getSingleMagazine(), ...data.getTwoMagazines());
            expect(catalog.count()).toEqual(5);
        });
        // caught by compiler option  "strict": true
        // it("does not add null", () => {
        //     catalog.add(null);
        //     expect(catalog.count()).toEqual(0);
        //     catalog.add(data.getSingleMagazine(), null);
        //     expect(catalog.count()).toEqual(1);
        // });
         // caught by compiler option  "strict": true
        // it("does not add undefined", () => {
        //     catalog.add(undefined);
        //     expect(catalog.count()).toEqual(0);
        //     catalog.add(data.getSingleMagazine(), undefined);
        //     expect(catalog.count()).toEqual(1);
        // });
    });

    describe("addMany", () => {
        it("adds Books", () => {
            catalog.addMany(data.getFourBooks());
            expect(catalog.count()).toEqual(4);
        });
        it("adds Magazines", () => {
            catalog.addMany(data.getTwoMagazines());
            expect(catalog.count()).toEqual(2);
        });
    });

    describe("remove", () => {
        it("returns false if no publications in catalog", () => {
            let remove = catalog.remove("not an id");
            expect(remove).toEqual(false);
            remove = catalog.remove(utils.generateId());
            expect(remove).toEqual(false);
        });
        it("removes a Book from the catalog", () => {
            const books = data.getFourBooks();
            catalog.addMany(data.getTwoMagazines());
            catalog.addMany(books);
            const removeBook = catalog.remove(books[0].id);
            expect(removeBook).toEqual(true);
            expect(catalog.count()).toEqual(5);
        });
        it("removes a Magazine from the catalog", () => {
            const mags = data.getTwoMagazines();
            catalog.addMany(mags);
            catalog.addMany(data.getFourBooks());
            const removeMagazine = catalog.remove(mags[1].id);
            expect(removeMagazine).toEqual(true);
            expect(catalog.count()).toEqual(5);
        });
        it("does not remove a Book not in the catalog", () => {
            catalog.addMany(data.getTwoMagazines());
            catalog.addMany(data.getFourBooks());
            const removeBook = catalog.remove(utils.generateId());
            expect(removeBook).toEqual(false);
            expect(catalog.count()).toEqual(6);
        });
        it("does not remove a Magazine not in the catalog", () => {
            catalog.addMany(data.getTwoMagazines());
            catalog.addMany(data.getFourBooks());
            const remove = catalog.remove(utils.generateId());
            expect(remove).toEqual(false);
            expect(catalog.count()).toEqual(6);
        });
    });

    describe("get", () => {
         // caught by compiler option  "strict": true
        // it("returns undefined if parameter is null", () => {
        //     const result = catalog.get(null);
        //     expect(result).toBeUndefined();
        // });
         // caught by compiler option  "strict": true
        // it("returns undefined if parameter is undefined", () => {
        //     const result = catalog.get(undefined);
        //     expect(result).toBeUndefined();
        // });
        it("returns undefined if catalog is empty", () => {
            const result = catalog.get("id");
            expect(result).toBeUndefined();
        });
        it("returns undefined if the item is not in catalog", () => {
            catalog.addMany(data.getTwoMagazines());
            const result = catalog.get(utils.generateId());
            expect(result).toBeUndefined();
        });
        it("returns the item if the item is in the catalog", () => {
            const mags = data.getTwoMagazines();
            catalog.addMany(mags);
            const result = catalog.get(mags[0].id);
            expect(result).toEqual(mags[0]);
        });
    });

    describe("getByType", () => {
        it("returns empty list if type not in catalog", () => {
            const books = catalog.getByType("book");
            expect(books.length).toEqual(0);
            const magazines = catalog.getByType("magazine");
            expect(magazines.length).toEqual(0);
        });
        it("returns Books", () => {
            catalog.addMany(data.getTwoMagazines());
            catalog.addMany(data.getFourBooks());
            const books = catalog.getByType("book");
            expect(books.length).toEqual(4);
            books.forEach((book) => {
                expect(book.type).toEqual("book");
                const genre = (book as Book).genre;
                expect(genre).toBeDefined();
            });
        });
        it("returns Magazines", () => {
            catalog.addMany(data.getTwoMagazines());
            catalog.addMany(data.getFourBooks());
            const magazines = catalog.getByType("magazine");
            expect(magazines.length).toEqual(2);
            magazines.forEach((mag) => {
                expect(mag.type).toEqual("magazine");
                const frequency = (mag as Magazine).frequency;
                expect(frequency).toBeDefined();
            });
        });
    });

    describe("getBooks", () => {
        it("returns an empty list if no books in catalog", () => {
            let books = catalog.getBooks();
            expect(books.length).toEqual(0);
            catalog.addMany(data.getTwoMagazines());
            books = catalog.getBooks();
            expect(books.length).toEqual(0);
        });
        it("returns only Books", () => {
            catalog.addMany(data.getTwoMagazines());
            catalog.addMany(data.getFourBooks());
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
        it("returns an empty list if no magazines in catalog", () => {
            let magazines = catalog.getMagazines();
            expect(magazines.length).toEqual(0);
            catalog.addMany(data.getFourBooks());
            magazines = catalog.getMagazines();
        });
        it("returns only Magazines", () => {
            catalog.addMany(data.getTwoMagazines());
            catalog.addMany(data.getFourBooks());
            const mags = catalog.getMagazines();
            expect(mags.length).toEqual(2);
            mags.forEach((mag) => {
                expect(mag.type).toEqual("magazine");
                expect(mag.frequency).toBeDefined();
            });
        });
    });
});
