export class Activatable {
  // originally this was implemeted using a private field
  // and a getter was used
  // but that does not make the compiler happy in the mixin....
  // private _isActive: boolean = false;
  public isActive: boolean = false;

  // public isActive(): boolean {
  //   return this._isActive;
  // }

  public activate() {
      this.isActive = true;
  }

  public deactivate() {
    this.isActive = false;
  }
}
