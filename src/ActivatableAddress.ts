import { Activatable } from "./Activatable";
import { Address } from "./Address";
import { Identifiable } from "./lib/Identifiable";

export class ActivatableAddress extends Identifiable implements Address, Activatable {
  // Duplicate private fields are not alllowed it seems, but if I remove it the compiler also complains
  // So mixins will not work with classes that have private fields?
  // private _isActive: boolean;
  public isActive: boolean = false;
  public activate: () => void;
  public deactivate: () => void;

  constructor(public readonly street: string, public readonly zipCode: string,
              public readonly city: string, public readonly country: string) {
      super();
  }
}
