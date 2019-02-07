declare module "mobx-devtools-mst" {
  declare function makeInspectable(state: { [key: string]: any }): void;

  declare module.exports: typeof makeInspectable;
}
