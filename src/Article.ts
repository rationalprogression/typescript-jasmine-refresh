import { Genre } from "./enums/Genre";
import { IPublication } from "./interfaces/IPublication";
import { default as utils } from "./lib/Utilities";
import { PublicationType } from "./types/PublicationType";

export class Article implements IPublication {
    public readonly id: string = utils.generateId();
    public title: string;
    public readonly type: PublicationType = "article";
    public author: string;
    public genre: Genre;
}
