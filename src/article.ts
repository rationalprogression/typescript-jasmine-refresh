import { Author } from "./author";
import { Genre } from "./enums";
import { IPublication } from "./interfaces/ipublication";
import { PublicationType } from "./types";

export class Article implements IPublication {
    public id: number;
    public title: string;
    public readonly type: PublicationType = "article";
    public author: string;
    public genre: Genre;
}