import { IPerson } from "./IPerson";

// module extension, ideal for extending 3rd party modules
declare module "./iperson" {
    export interface IPerson {
        age: number;
    }
}
