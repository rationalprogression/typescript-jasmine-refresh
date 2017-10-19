import { Article } from "./article";
import { Publication } from "./publication";

export class Magazine extends Publication {
    public frequency: Frequency;
    public articles: Article[];
}
