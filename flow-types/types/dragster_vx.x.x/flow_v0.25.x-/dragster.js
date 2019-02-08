declare module "global" {
  declare interface Window {
    Dragster$Dragster: Dragster$Dragster.Dragster$DragsterStatic;
  }
}
declare interface Dragster$Dragster {
  removeListeners(): void;
  reset(): void;
}

declare interface Dragster$DragsterStatic {
  (elem: HTMLElement): Dragster$Dragster;
  new(elem: HTMLElement): Dragster$Dragster;
}
declare module "dragster" {
  declare var Dragster$Dragster: Dragster$Dragster.Dragster$DragsterStatic;
  declare module.exports: typeof Dragster$Dragster;
}
