import { Book } from "./Book";
import { Catalog } from "./Catalog";
import { Magazine } from "./Magazine";
import { Person } from "./Person";

export class User extends Person {
    public email: string;
    public subscriptions: Catalog<Magazine> = new Catalog<Magazine>();
    public shelf: Catalog<Book | Magazine> = new Catalog<Book | Magazine>();
}
