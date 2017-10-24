import { Book } from "../Book";
import { Catalog } from "../Catalog";
import { Genre } from "../enums/Genre";
import { Magazine } from "../Magazine";
import { Frequency } from "../types/Frequency";
import { PublicationType } from "../types/PublicationType";

export default class CatalogData {

    public static getSingleMagazine(): Magazine {
        const magazine = new Magazine();
        magazine.frequency = "monthly";
        magazine.title = "Time";
        return magazine;
    }

    public static getFourBooks(): Book[] {

        const books = new Array<Book>();

        const book1 = new Book();
        book1.title = "The shadow of the torturer";
        book1.author = "Gene Wolfe";
        book1.genre = Genre.ScienceFiction;

        books.push(book1);

        const book2 = new Book();
        book2.title = "The Republic";
        book2.author = "Plato";
        book2.genre = Genre.Philosophy;

        books.push(book2);

        const book3 = new Book();
        book3.title = "The Peripheral";
        book3.author = "William Gibson";
        book3.genre = Genre.ScienceFiction;

        books.push(book3);

        const book4 = new Book();
        book4.title = "Dropping Ashes On The Buddha";
        book4.author = "Stephen Mitchell";
        book4.genre = Genre.Philosophy;

        books.push(book4);

        return books;
    }

    public static getTwoMagazines(): Magazine[] {

        const mags = new Array<Magazine>();

        const mag1 = new Magazine();
        mag1.title = "Wired";
        mag1.frequency = "monthly";
        mags.push(mag1);

        const mag2 = new Magazine();
        mag2.title = "The Republic";
        mag2.frequency = "quarterly";

        mags.push(mag2);

        return mags;
    }

    public static getSingleBook(): Book {
        return this.getFourBooks()[0];
    }
}
