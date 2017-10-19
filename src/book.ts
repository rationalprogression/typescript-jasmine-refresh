import { Author } from "./author";
import { Genre } from "./enums";
import { IPublication } from "./interfaces/ipublication";
import { PublicationType } from "./types";

export class Book implements IPublication {
    public id: number;
    public title: string;
    public author: string;
    public genre: Genre;
    public readonly type: PublicationType = "book";
}
