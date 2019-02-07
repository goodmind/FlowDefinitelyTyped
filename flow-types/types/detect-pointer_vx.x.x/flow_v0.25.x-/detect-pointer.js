declare module "detect-pointer" {
  declare interface detectPointer {
    anyCoarse: boolean;
    anyFine: boolean;
    anyNone: boolean;
    coarse: boolean;
    fine: boolean;
    none: boolean;
    update(): void;
  }
  declare var detectPointer: detectPointer;
  declare export default typeof detectPointer;
}
