import { IIdentifiable } from "../lib/IIdentifiable";
import { PublicationType } from "../types/PublicationType";

export interface IPublication extends IIdentifiable {
    title: string;
    type: PublicationType;
}
