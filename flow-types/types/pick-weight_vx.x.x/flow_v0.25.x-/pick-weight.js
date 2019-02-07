declare module "pick-weight" {
  declare function weighted<T>(arr: T[], weights: number[]): T;

  declare var y: typeof weighted;
  declare module.exports: typeof y;
}
