export interface IIdentifiable {
    // marking this readonly does not generate compiler warnings if the implementation is not readonly
    // so using an interface may be the wrong option, and need to use a base class instead....
    // added a base class, still using the interface as a base for other interfaces
    readonly id: string;
}
