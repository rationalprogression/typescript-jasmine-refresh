import { Article } from "./Article";
import { IPublication } from "./interfaces/IPublication";
import { Frequency } from "./types/Frequency";
import { PublicationType } from "./types/PublicationType";

export class Magazine implements IPublication {
    public id: number;
    public title: string;
    public readonly type: PublicationType = "magazine";
    public frequency: Frequency;
    // public articles: Article[];
}
