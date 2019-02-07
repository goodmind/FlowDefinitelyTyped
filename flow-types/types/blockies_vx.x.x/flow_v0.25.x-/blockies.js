declare module "blockies" {
  declare function blockies(
    config?: blockies$blockies$BlockiesConfig
  ): HTMLCanvasElement;

  declare module.exports: typeof blockies;

  declare interface blockies$BlockiesConfig {
    size?: number;
    scale?: number;
    seed?: string;
    color?: string;
    bgcolor?: string;
    spotcolor?: string;
  }
}
