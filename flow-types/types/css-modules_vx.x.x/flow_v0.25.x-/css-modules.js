declare module "*.less" {
  declare var styles: SelectorNode & Stringifyable;
  declare export default typeof styles;
}
declare module "*.sass" {
  declare var styles: SelectorNode & Stringifyable;
  declare export default typeof styles;
}
declare module "*.scss" {
  declare var styles: SelectorNode & Stringifyable;
  declare export default typeof styles;
}
declare module "*.css" {
  declare var styles: SelectorNode & Stringifyable;
  declare export default typeof styles;
}
declare module "css-modules" {
  declare interface Stringifyable {
    /**
     * Stringifies the imported stylesheet for use with inline style tags
     */
    toString(): string;
  }
  declare interface SelectorNode {
    /**
     * Returns the specific selector from imported stylesheet as string
     */
    [key: string]: string;
  }
}
