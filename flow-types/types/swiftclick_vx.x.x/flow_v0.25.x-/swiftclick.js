declare interface SwiftClickObject {
  addNodeNamesToTrack(nodeNamesArray: string[]): void;
  replaceNodeNamesToTrack(nodeNamesArray: string[]): void;
  useCssParser(useParser: boolean): void;
}
declare interface SwiftClickStatic {
  attach(contextEl: Element): SwiftClickObject;
}
declare module "swiftclick" {
  declare module.exports: typeof SwiftClick;
}
declare var SwiftClick: SwiftClickStatic;
