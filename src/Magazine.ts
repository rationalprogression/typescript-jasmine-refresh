import { Article } from "./Article";
import { IPublication } from "./interfaces/IPublication";
import { Identifiable } from "./lib/Identifiable";
import { Frequency } from "./types/Frequency";
import { PublicationType } from "./types/PublicationType";

export class Magazine extends Identifiable implements IPublication {

    public title: string;
    public readonly type: PublicationType = "magazine";
    public frequency: Frequency;

    private _articles: Article[] = new Array<Article>();
    private _publicationDate: Date;

    get isPublished(): boolean {
        if (this._publicationDate === undefined) {
            return false;
        }
        return this._publicationDate <= new Date();
    }

    get articles(): Article[] {
        return this._articles;
    }

    get publicationDate(): Date {
        return this._publicationDate;
    }

    public add(article: Article): this {
        this._articles.push(article);
        return this;
    }

    public publish(): this {
        this._publicationDate = new Date();
        return this;
    }
}
