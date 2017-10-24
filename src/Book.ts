import { Author } from "./Author";
import { Genre } from "./enums/Genre";
import { IPublication } from "./interfaces/IPublication";
import { PublicationType } from "./types/PublicationType";

export class Book implements IPublication {
    public id: number;
    public title: string;
    public author: string;
    public genre: Genre;
    public readonly type: PublicationType = "book";
}
