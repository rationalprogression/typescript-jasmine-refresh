import { PublicationType } from "../types";
import { IIdentifier } from "./IIdentifier";

export interface IPublication extends IIdentifier {
    title: string;
    type: PublicationType;
}
