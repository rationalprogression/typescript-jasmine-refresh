import { Book } from "./book";
import { Magazine } from "./magazine";
import { Person } from "./person";

export class User extends Person {
    public email: string;
    public subscriptions: Magazine[];
    public shelf: Book[];
}
