import { IPublication } from "./interfaces/ipublication";
import { Person } from "./person";

export class Author extends Person {
    public bio: string;
    public publications: IPublication[];
}
