declare module "css-to-style" {
    declare function toStyle(cssText: string): CSSStyleDeclaration;

    declare export default typeof toStyle;
}
