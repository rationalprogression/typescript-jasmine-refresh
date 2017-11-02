import { Book } from "../Book";
import { Catalog } from "../Catalog";
import { default as Data } from "../data/CatalogData";
import { default as Logger } from "../lib/Logger";

export class CatalogService {
    // ES2015 (changed compiler option)
    public getBooksPromise(returnBooks: boolean): Promise<Catalog<Book>> {
        const promise: Promise<Catalog<Book>> = new Promise((resolve, reject) => {
            let books;
            if (returnBooks === true) {
                books = Data.getFourBooks();
            } else {
                books = undefined;
            }

            if (books !== undefined) {
                const catalog = new Catalog<Book>();
                catalog.addMany(books);
                resolve(catalog);
            } else {
                reject(new Error("No books to be found"));
            }

        });
        return promise;
    }
    // ES2017? but supported by TypeScript
    public async getBooksAsync(): Promise<Catalog<Book>> {
        try {
            const results = await Data.getFourBooks();
            const catalog = new Catalog<Book>();
            catalog.addMany(results);
            return catalog;
        } catch (error) {
            Logger.error(error);
            throw error;
        }
    }

    public async getBooksAsyncThrows(): Promise<Catalog<Book>> {
        try {
            const results = await Data.getFourBooks();
            const catalog = new Catalog<Book>();
            catalog.addMany(results);
            throw new Error("No books to be found");
        } catch (error) {
            // Logger.error(error);
            throw error;
        }
    }
}
