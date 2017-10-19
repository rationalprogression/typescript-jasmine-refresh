import { Author } from "./author";
import { Genre } from "./enums";
import { Publication } from "./publication";

export class Article extends Publication {
    public author: Author;
    public genre: Genre;
}
