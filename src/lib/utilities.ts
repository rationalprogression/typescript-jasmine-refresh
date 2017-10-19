import { Book } from "../book";
import { Collection } from "../collection";
import { Genre } from "../enums";
import { Magazine } from "../magazine";
import { Frequency, PublicationType } from "../types";

export function log(input: any): void {
    // tslint:disable-next-line:no-console
    console.log(input);
}

// exports function hasIdenitfier()

export function GetFourBooks(): Book[] {
    // this will not work, gives compile errors on type and enum....
    // const books = [
    //     { id: 1, title: "The shadow of the torturer", author: "Gene Wolfe", genre: Genre.ScienceFiction},
    //     { id: 2, title: "The Republic",  author: "Plato", genre: Genre.Philosophy },
    //     { id: 3, title: "The peripheral", author: "William Gibson", genre: Genre.ScienceFiction},
    //     { id: 4, title: "Dropping ashes on the buddha", author: "Stephen Mitchell", genre: Genre.Philosophy},
    // ];
    // return books;

    const books = new Array<Book>();

    const book1 = new Book();
    book1.id = 1;
    book1.title = "The shadow of the torturer";
    book1.author = "Gene Wolfe";
    book1.genre = Genre.ScienceFiction;

    books.push(book1);

    const book2 = new Book();
    book2.id = 2;
    book2.title = "The Republic";
    book2.author = "Plato";
    book2.genre = Genre.Philosophy;

    books.push(book2);

    const book3 = new Book();
    book3.id = 3;
    book3.title = "The Peripheral";
    book3.author = "William Gibson";
    book3.genre = Genre.ScienceFiction;

    books.push(book3);

    const book4 = new Book();
    book4.id = 4;
    book4.title = "Dropping Ashes On The Buddha";
    book4.author = "Stephen Mitchell";
    book4.genre = Genre.Philosophy;

    books.push(book4);

    return books;
}

export function GetTwoMagazines(): Magazine[] {
     // this will not work, gives compile errors on type and enum....
    // const magazines: Magazine[] = [
    //     { id: 1, title: "Wired", frequency: "monthly"},
    //     { id: 2, title: "The Republic",  frequency: "quarterly"},
    // ];

    const mags = new Array<Magazine>();

    const mag1 = new Magazine();
    mag1.id = 1;
    mag1.title = "Wired";
    mag1.frequency = "monthly";
    mags.push(mag1);

    const mag2 = new Magazine();
    mag2.id = 2;
    mag2.title = "The Republic";
    mag2.frequency = "quarterly";

    mags.push(mag2);

    return mags;
}

export function GetSingleMagazine(): Magazine {
    const magazine = new Magazine();
    magazine.frequency = "monthly";
    magazine.id = 3;
    magazine.title = "Time";
    return magazine;
}

export function GetSingleBook(): Book {
    return GetFourBooks().filter((book) => book.id === 1)[0];
}
