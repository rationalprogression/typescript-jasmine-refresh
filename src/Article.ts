import { Genre } from "./enums/Genre";
import { IPublication } from "./interfaces/IPublication";
import { Identifiable } from "./lib/Identifiable";
import { PublicationType } from "./types/PublicationType";

export class Article extends Identifiable implements IPublication {
    public title: string;
    public readonly type: PublicationType = "article";
    public author: string;
    public genre: Genre;
}
