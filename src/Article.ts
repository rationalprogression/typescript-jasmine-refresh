import { Author } from "./Author";
import { Genre } from "./enums/Genre";
import { IPublication } from "./interfaces/IPublication";
import { PublicationType } from "./types/PublicationType";

export class Article implements IPublication {
    public id: string;
    public title: string;
    public readonly type: PublicationType = "article";
    public author: string;
    public genre: Genre;
}
