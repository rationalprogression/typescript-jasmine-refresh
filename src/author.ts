import { Person } from "./person";
import {Publication } from "./publication";

export class Author extends Person {
    public bio: string;
    public publications: Publication[];
}
