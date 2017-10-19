import { Author } from "./author";
import { Genre } from "./enums";
import { Publication } from "./publication";

export class Book extends Publication {
    public author: Author;
    public genre: Genre;
}
