declare module "random-item" {
  declare module.exports: typeof randomItem;

  declare function randomItem<T>(input: T[]): T;
}
