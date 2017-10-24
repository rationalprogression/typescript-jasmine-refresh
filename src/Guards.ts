import * as validator from "validator";
import { Book } from "./Book";
import { IIdentifier } from "./interfaces/IIdentifier";

export default class Guards {

    public static IsBook(arg: any): arg is Book {
        return (arg as Book).type === "book";
    }

    public static IsIdentifiable(arg: IIdentifier): arg is IIdentifier {
        // TODO: also returns true for an object with a correct id that does not implement this interface....
        // but obviously, if it has an id that is a string and a valid UUID it implements it..
        // can the uuid be enforced on the interface?
        if (arg.id === null) {
            return false;
        }
        if (arg.id === undefined) {
            return false;
        }
        if (typeof arg.id === "string" && validator.isUUID(arg.id)) {
            return true;
        } else {
            return false;
        }
    }
}
