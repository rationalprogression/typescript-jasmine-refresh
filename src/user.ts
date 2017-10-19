import { Book } from "./book";
import { Collection } from "./collection";
import { Magazine } from "./magazine";
import { Person } from "./person";

export class User extends Person {
    public email: string;
    public subscriptions: Collection<Magazine> = new Collection<Magazine>();
    public shelf: Collection<Book | Magazine> = new Collection<Book | Magazine>();
}
