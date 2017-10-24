import { Author } from "./Author";
import { Genre } from "./enums/Genre";
import { IPublication } from "./interfaces/IPublication";
import { default as utils } from "./lib/Utilities";
import { PublicationType } from "./types/PublicationType";

export class Book implements IPublication {
    public readonly id: string = utils.GenerateId();
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
