import { Article } from "./Article";
import { IPublication } from "./interfaces/IPublication";
import { default as utils } from "./lib/Utilities";
import { Frequency } from "./types/Frequency";
import { PublicationType } from "./types/PublicationType";

export class Magazine implements IPublication {
    public readonly id: string = utils.GenerateId();
    public title: string;
    public readonly type: PublicationType = "magazine";
    public frequency: Frequency;
    // public articles: Article[];
}
