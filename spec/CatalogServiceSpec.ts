import { Book } from "../src/Book";
import { Catalog } from "../src/Catalog";
import { default as Logger } from "../src/lib/Logger";
import { CatalogService } from "../src/services/CatalogService";

let catalogService: CatalogService;

beforeEach(() => {
    catalogService = new CatalogService();
});

describe("CatalogService", () => {
    describe("getBooksPromise", () => {
        it("returns only books", () => {
            const promise: Promise<Catalog<Book>> = catalogService.getBooksPromise(true);
            promise.then((catalog) => {
                expect(catalog.getMagazines().length).toEqual(0);
                expect(catalog.getBooks().length).toEqual(4);
            }).catch((error) => {
                // will not execute
                expect(error).toEqual("Books found and still an error?");
            });
        });
        it("returns an error when no books", () => {
            const promise: Promise<Catalog<Book>> = catalogService.getBooksPromise(false);
            promise.then((catalog) => {
                // will not execute
                expect(catalog.getMagazines().length).toEqual(10);
                expect(catalog.getBooks().length).toEqual(15);
            }).catch((error) => {
                expect(error).toEqual(new Error("No books to be found"));
            });
        });
    });
    describe("getBooksAsync", () => {
        it("returns only books", () => {
            const promise: Promise<Catalog<Book>> = catalogService.getBooksAsync();
            promise.then((catalog) => {
                expect(catalog.getMagazines().length).toEqual(0);
                expect(catalog.getBooks().length).toEqual(4);
            }).catch((error) => {
                // will not execute
                expect(error).toEqual("Books found and still an error?");
            });
        });
    });
    describe("getBooksAsyncThrows", () => {
        it("returns an error", () => {
            const promise: Promise<Catalog<Book>> = catalogService.getBooksAsyncThrows();
            promise.then((catalog) => {
                // will not execute
                expect(catalog.getMagazines().length).toEqual(10);
                expect(catalog.getBooks().length).toEqual(15);
            }).catch((error) => {
                expect(error).toEqual(new Error("No books to be found"));
            });
        });
    });

});
