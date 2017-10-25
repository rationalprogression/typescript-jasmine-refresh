import { Genre } from "./enums/Genre";
import { IPublication } from "./interfaces/IPublication";
import { Identifiable } from "./lib/Identifiable";
import { PublicationType } from "./types/PublicationType";

export class Book extends Identifiable implements IPublication {
    public title: string;
    public author: string;
    public genre: Genre;
    public readonly type: PublicationType = "book";
    get display(): string {
        const displayTitle = this.title !== undefined ? this.title : "Unspecified";
        const displayAuthor = this.author !== undefined ? this.author : "Unspecified";
        const displayGenre = this.genre !== undefined ? Genre[this.genre] : Genre[Genre.Unspecified];
        return `${displayTitle} - ${displayAuthor} - ${displayGenre}`;
    }
}
