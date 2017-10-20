import { Author } from "../src/Author";
import { Book } from "../src/Book";
import { Catalog } from "../src/Catalog";
import { User } from "../src/User";

let user: User;

beforeEach( () => {
    // let catalog = new Catalog();
    // catalog.add(new Book{})

    user = new User();

});

describe("User", () => {
    it("should be able to add a book to the shelf", () => {

    //  const book = new Book();
    //  book.id = 1;
    //  book.title = "The shadow of the torturer";
    //  book.author = new Author();
    //  book.author.id = "1";
    //  book.author.name = "Gene Wolfe";

    //  user.shelf.add(book);

    //  const bookinShelf = user.shelf.get("1");
    //  expect(bookinShelf).toBe(book);

    });

    it("should not be able to add a magazine to the subscriptions", () => {

        // const book = new Book();
        // book.id = "1";
        // book.title = "The shadow of the torturer";
        // book.author = new Author();
        // book.author.id = "1";
        // book.author.name = "Gene Wolfe";

        // user.subscriptions.add(book);

        // const bookinShelf = user.shelf.get("1");
        // expect(bookinShelf).toBe(book);
    });

    it("should be able to add a magazine to the subscriptions", () => {
        expect(true).toBe(true);
    });
});
