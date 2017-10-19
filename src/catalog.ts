import { Book } from "./book";
import { Magazine } from "./magazine";

export class Catalog<T extends Book | Magazine> {

    private items: T[] = new Array<T>();

    public add(item: T): void {
        // do stuff here
    }

    public remove(id: string): boolean {
         // do stuff here
         return true;
    }
}
