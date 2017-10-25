import { v4 } from "uuid";
import { IIdentifiable } from "./IIdentifiable";

export class Identifiable implements IIdentifiable {
    public readonly id: string = v4();
}
