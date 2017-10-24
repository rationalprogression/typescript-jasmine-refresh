import { PublicationType } from "../types/PublicationType";
import { IIdentifier } from "./IIdentifier";

export interface IPublication extends IIdentifier {
    title: string;
    type: PublicationType;
}
