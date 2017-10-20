import { IPublication } from "./interfaces/IPublication";
import { Person } from "./Person";

export class Author extends Person {
    public bio: string;
    public publications: IPublication[];
}
