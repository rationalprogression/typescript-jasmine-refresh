import { Book } from "./Book";
import { IIdentifier } from "./interfaces/IIdentifier";

export default class Guards {

    public static IsBook(arg: any): arg is Book {
        return (arg as Book).type === "book";
    }

    public static IsIdentifiable(arg: any): arg is IIdentifier {
        return arg.id !== undefined; // TODO: is this a good idea?
    }
}
