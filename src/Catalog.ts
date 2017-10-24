import { Book } from "./Book";
import { IPublication } from "./interfaces/IPublication";
import { Magazine } from "./Magazine";
import { PublicationType } from "./types/PublicationType";

export class Catalog<T extends IPublication> {

    private items: T[] = new Array<T>();

    public count(): number {
        return this.items.length;
    }

    public add(item: T, ...items: T[]): void {
        if (item !== null && item !== undefined) {
            this.items.push(item);
        }
        if (items !== null && items !== undefined) {
            items.forEach((extraItem) => {
                this.add(extraItem);
            });
        }
    }

    public addMany(items: T[]): void {
        items.forEach((item) => {
            this.add(item);
        });
    }

    public remove(id: number, type: PublicationType): boolean {
        for (let i = this.items.length - 1; i >= 0; i--) {
            if (this.items[i].id === id && this.items[i].type === type) {
                this.items.splice(i, 1);
                return true;
            }
        }
        return false;
    }

    public get(id: number, type: PublicationType): T | undefined {
        for (let i = this.items.length - 1; i >= 0; i--) {
            if (this.items[i].id === id && this.items[i].type === type) {
                return this.items[i];
            }
        }
    }

    public getBooks(): Book[] {
        const books: Book[] = new Array<Book>();
        this.items.forEach((item) => {
            // we should obviously use the type property here instead
            if (item instanceof Book) {
                books.push(item);
            }
        });
        return books;
    }

    public getMagazines(): Magazine[] {
        const magazines: Magazine[] = new Array<Magazine>();
        this.items.forEach((item) => {
             // we should obviously use the type property here instead
            if (item instanceof Magazine) {
                magazines.push(item);
            }
        });
        return magazines;
    }

    public getByType(type: PublicationType): IPublication[] {
        return this.items.filter(((item) => item.type === type));
    }

}
