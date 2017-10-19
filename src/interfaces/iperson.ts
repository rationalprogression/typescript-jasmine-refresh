import { IIdentifier } from "./iidentifier";

export interface IPerson extends IIdentifier {
    id: number;
    name: string;
}
