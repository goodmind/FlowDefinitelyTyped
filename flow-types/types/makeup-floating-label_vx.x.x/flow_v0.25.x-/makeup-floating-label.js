declare module "makeup-floating-label" {
  declare class FloatingLabel {
    constructor(el: any, userOptions?: any): this;
    refresh(): void;
  }
  declare module.exports: typeof FloatingLabel;
}
