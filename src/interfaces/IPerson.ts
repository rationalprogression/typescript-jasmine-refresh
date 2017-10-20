import { IIdentifier } from "./IIdentifier";

export interface IPerson extends IIdentifier {
    id: number;
    name: string;
}
