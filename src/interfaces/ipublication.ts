import { PublicationType } from "../types";
import { IIdentifier } from "./iidentifier";

export interface IPublication extends IIdentifier {
    title: string;
    type: PublicationType;
}
