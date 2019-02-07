declare module "data-driven" {
  declare function data_driven<T>(data: T[], callback: () => any): any;

  declare module.exports: typeof data_driven;
}
