import { IIdentifier } from "./lib/iidentifier";

export class Publication implements IIdentifier {
    public id: string;
    public title: string;
    public publicationDate: Date;
}
