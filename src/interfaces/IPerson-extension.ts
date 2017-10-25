import { IPerson } from "./IPerson";

// module extension, ideal for extending 3rd party modules
declare module "./IPerson" {
    //  TODO: compiler error TS6133: 'IPerson' is declared but never used.
    //  if "noUnusedLocals": true
    // extend an external interface instead
    export interface IPerson {
        age: number;
    }
}
